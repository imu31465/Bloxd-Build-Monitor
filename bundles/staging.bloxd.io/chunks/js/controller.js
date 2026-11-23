export const id = 28;
export const ids = [28];
export const modules = {
  8772: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Gk,
      f: () => vk,
      g: () => Ek
    });
    var Xk = Ik(58),
      Tk = Ik(4529),
      ik = Ik(1118),
      yk = Ik(1402),
      lk = Ik(34),
      ak = Ik(3367),
      qk = Ik(2157),
      Lk = Ik(1231),
      tk = Ik(2492),
      Zk = Ik(1875),
      jk = Ik(1907),
      ek = Ik(1179),
      wk = Ik(25),
      Hk = Ik(1580),
      Jk = Ik(1055),
      xk = Ik.n(Jk),
      Pk = Ik(8778),
      Kk = Ik(8784),
      Qk = Ik(8791),
      sk = Ik(8686),
      Vk = Ik(8800),
      zk = (Ik(8809), Ik(1096));
    let Sk = null;

    function vk() {
      return null !== Sk
    }

    function Ek() {
      return "pad" === Sk
    }

    function Ok() {
      return "inGame" === wk.d.get("gameState") && !(0, Hk.p)()
    }

    function nk(kk) {
      return (0, Kk.A)(kk, Lk.l, Kk.i, Kk.j, Kk.l)
    }
    const Gk = (0, Xk.memo)((function() {
      const {
        t: kk
      } = (0, ek.y)(), {
        userContext: Fk
      } = (0, ik.d)(), [Ik, wk] = (0, Xk.useState)(null), [Jk, vk] = (0, Xk.useState)(null), Ek = (0, Xk.useRef)(null), Gk = (0, Xk.useCallback)((kk => {
        Ek.current = kk, vk(kk)
      }), []), pk = (0, Xk.useRef)(0), uk = (0, Xk.useRef)(null), bk = (0, Xk.useRef)({
        x: 0,
        y: 0
      }), [Rk, Uk] = (0, Xk.useState)(0), Ck = (0, Xk.useMemo)((() => function(kk) {
        const Fk = [];
        for (let Xk = 0; Xk < Lk.l; Xk++) {
          var Ik;
          Fk.push(null !== (Ik = kk[Xk]) && void 0 !== Ik ? Ik : null)
        }
        return Fk
      }((0, tk.g)(Fk.getPlayerCosmetics().emote))), [Fk, Rk]);
      (0, jk.e)("cosmeticsUpdated", (kk => {
        kk.some((kk => kk.local && "emote" === kk.VX)) && Uk((kk => kk + 1))
      }));
      const Nk = (0, Xk.useRef)(!1),
        ck = (0, Xk.useCallback)((function(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === kk && (0, Qk.e)(), Nk.current = Fk, bk.current = {
            x: 0,
            y: 0
          }, Gk(null), wk(kk)
        }), [Gk]),
        Wk = (0, Xk.useCallback)((() => {
          wk(null), Gk(null), bk.current = {
            x: 0,
            y: 0
          }
        }), [Gk]),
        fk = (0, Xk.useCallback)((kk => {
          if (Date.now() < pk.current) return;
          const Fk = (0, qk.i)(kk),
            Ik = !!Fk.holdUntilMove,
            Xk = Ik ? 600 : Math.ceil(1e3 * Fk.animation.animation_length / qk.c) + 200;
          pk.current = Date.now() + Xk, uk.current = kk, Zk.gameBridge.send("playEmote", kk), Zk.gameBridge.send("applyTemporaryThirdPerson", Ik ? {} : {
            durationMs: Xk
          })
        }), []);
      (0, yk.d)("requestToggleEmoteWheel", (() => {
        null === Ik ? Ok() && ck("click") : Wk()
      })), (0, yk.d)("requestEmoteWheelHoldOpen", (() => {
        null === Ik && Ok() && ck((0, Pk.e)() ? "hold" : "click")
      })), (0, yk.d)("requestEmoteWheelPadOpen", (kk => {
        null !== Ik || !Ok() || (0, sk.e)() || (0, Vk.q)() || ck("pad", kk)
      })), (0, yk.d)("requestEmoteRepeatLast", (() => {
        if (null !== Ik || !Ok() || (0, sk.e)() || (0, Vk.q)()) return;
        const kk = uk.current;
        null !== kk && Ck.includes(kk) ? fk(kk) : ck("pad", !0)
      }));
      const Bk = () => {
        const kk = Ek.current,
          Fk = null !== kk ? Ck[kk] : null;
        null !== Fk && "pad" === Ik && Date.now() < pk.current || (Wk(), null !== Fk && fk(Fk))
      };
      (0, yk.d)("emoteWheelPadAim", (kk => {
        if ("pad" !== Ik) return;
        const Fk = (0, Kk.K)(kk, Lk.l, Ek.current);
        Gk(null !== Fk && null !== Ck[Fk] ? Fk : null)
      })), (0, yk.d)("requestEmoteWheelPadCommit", (kk => {
        "pad" !== Ik || kk && Nk.current || Bk()
      })), (0, yk.d)("appManagerUpdated|activeInputDevice", (kk => {
        null !== Ik && "pad" === Ik !== ("gamepad" === kk) && Wk()
      })), (0, Xk.useLayoutEffect)((() => (Sk = Ik, (0, ak.q)("emoteWheel", "pad" === Ik), lk.g.GL(ak.m), () => {
        Sk = null, (0, ak.q)("emoteWheel", !1), lk.g.GL(ak.m)
      })), [Ik]), (0, yk.d)("requestEmoteWheelHoldRelease", (() => {
        "hold" === Ik && Bk()
      })), (0, yk.d)("requestEmoteWheelClose", (() => {
        null !== Ik && Wk()
      })), (0, yk.d)("appManagerUpdated|gameState", (kk => {
        "inGame" !== kk && Wk()
      }));
      const dk = () => {
        (0, Hk.p)() && Wk()
      };
      if ((0, yk.d)("appManagerUpdated|openEverythingMenuName", dk), (0, yk.d)("appManagerUpdated|openInGameMenuName", dk), (0, yk.d)("pointerLockUpdate", (kk => {
          kk || "hold" !== Ik || Wk()
        })), (0, Xk.useEffect)((() => {
          if (null === Ik) return;
          const kk = kk => {
            "Escape" === kk.key && (kk.stopImmediatePropagation(), kk.preventDefault(), Wk())
          };
          return document.addEventListener("keydown", kk, !0), () => {
            document.removeEventListener("keydown", kk, !0)
          }
        }), [Ik, Wk]), (0, Tk.e)(!0, "click" === Ik, "EmoteWheelOverlay"), (0, Xk.useEffect)((() => {
          if ("hold" === Ik) return Zk.gameBridge.send("holdEmoteWheel", !0), () => {
            Zk.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [Ik]), (0, Xk.useEffect)((() => {
          if ("hold" !== Ik) return;
          const kk = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            Fk = Kk.w * kk,
            Xk = Kk.t * kk,
            Tk = kk => {
              let Ik = bk.current.x + kk.movementX,
                Tk = bk.current.y + kk.movementY;
              const ik = Math.hypot(Ik, Tk);
              if (ik > Fk) {
                const kk = Fk / ik;
                Ik *= kk, Tk *= kk
              }
              bk.current = {
                x: Ik,
                y: Tk
              }, Gk(function(kk, Fk, Ik, Xk) {
                if (Math.hypot(kk, Fk) < Ik) return null;
                const Tk = (0, Kk.C)(kk, Fk, Lk.l);
                return null === Xk[Tk] ? null : Tk
              }(Ik, Tk, Xk, Ck))
            };
          return document.addEventListener("mousemove", Tk), () => {
            document.removeEventListener("mousemove", Tk)
          }
        }), [Ik, Ck, Gk]), null === Ik) return null;
      const Yk = "hold" === Ik || "pad" === Ik,
        Ak = null !== Jk ? Ck[Jk] : null,
        gk = null !== Ak ? (0, qk.i)(Ak).displayName : kk("emotes:pickEmote");
      return (0, zk.jsx)("div", {
        className: xk()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === Ik
        }),
        onMouseDown: kk => {
          kk.target === kk.currentTarget && Wk()
        },
        children: (0, zk.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * Kk.w + "rem",
            height: 2 * Kk.w + "rem"
          },
          children: [(0, zk.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${Kk.p} ${Kk.p}`,
            children: [Ck.map(((Fk, Ik) => {
              const Xk = null !== Fk,
                Tk = Yk && Ik === Jk;
              return (0, zk.jsx)("path", {
                d: nk(Ik),
                className: xk()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: Tk,
                  EmoteWheelWedgeDisabled: !Xk
                }),
                onClick: kk => {
                  kk.stopPropagation(), null !== Fk && (kk => {
                    Wk(), fk(kk)
                  })(Fk)
                },
                "aria-label": null !== Fk ? (0, qk.i)(Fk).displayName : kk("emotes:emptySlot")
              }, Ik)
            })), (0, zk.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: Kk.i,
              cy: Kk.i,
              r: Kk.l
            }), (0, zk.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: Kk.i,
              cy: Kk.i,
              r: Kk.j
            }), Yk && null !== Jk && (0, zk.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: nk(Jk)
            })]
          }), Ck.map(((kk, Fk) => {
            const Ik = null !== kk,
              Xk = Yk && Fk === Jk,
              Tk = (0, Kk.G)(Fk, Lk.l),
              ik = Kk.e * Math.cos(Tk),
              yk = Kk.e * Math.sin(Tk);
            return (0, zk.jsx)("div", {
              className: xk()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: Xk,
                EmoteWheelSlotIconDisabled: !Ik
              }),
              style: {
                left: `calc(50% + ${ik}rem)`,
                top: `calc(50% + ${yk}rem)`,
                backgroundImage: Ik ? `url(/textures/charSkins/previews/emote_${kk}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, Fk)
          })), (0, zk.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: gk
          })]
        })
      })
    }))
  },
  4983: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ek,
      h: () => Pk,
      j: () => wk,
      m: () => xk
    });
    var Xk = Ik(58),
      Tk = Ik(4988),
      ik = Ik(4338),
      yk = Ik(1333),
      lk = Ik(5016),
      ak = Ik(1055),
      qk = Ik.n(ak),
      Lk = Ik(1324),
      tk = Ik(1665),
      Zk = Ik(5022),
      jk = Ik(1096);

    function ek(kk) {
      let {
        label: Fk,
        onClick: Ik,
        checked: Xk,
        circleInfoText: Tk,
        className: lk,
        disabled: ak,
        note: Lk
      } = kk;
      return (0, jk.jsxs)("div", {
        "aria-disabled": ak || void 0,
        "data-pad-focusable": !0,
        className: qk()("SettingBox CheckboxContainer", {
          [lk]: lk,
          SettingBoxDisabled: ak
        }),
        onClick: () => {
          ak || Ik(!Xk)
        },
        children: [(0, jk.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, jk.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, jk.jsx)(ik.d, {
              className: "SettingsCheckbox",
              checked: Xk,
              disabled: ak,
              onChange: () => {}
            })
          }), (0, jk.jsxs)("div", {
            className: "CheckboxText",
            children: [Fk, Tk && (0, jk.jsx)("span", {
              onClick: kk => kk.stopPropagation(),
              children: (0, jk.jsx)(yk.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Tk
              })
            })]
          })]
        }), Lk && (0, jk.jsx)("div", {
          className: "SettingNote",
          children: Lk
        })]
      })
    }

    function wk(kk) {
      let {
        name: Fk,
        onChange: Ik,
        min: Tk,
        max: ik,
        step: lk,
        initValue: ak,
        circleInfoText: Lk,
        format: tk,
        className: Zk,
        padStep: ek,
        disabled: wk = !1,
        selectableMax: Hk,
        cappedNote: xk,
        onChangeComplete: Pk
      } = kk;
      const [Kk, Qk] = (0, Xk.useState)(ak), sk = (0, Xk.useRef)(ak);
      (0, Xk.useEffect)((() => {
        sk.current = ak, Qk(ak)
      }), [ak]);
      const Vk = void 0 !== Hk && Hk < ik,
        zk = Vk ? {
          "--slider-selectable": (Hk - Tk) / (ik - Tk)
        } : void 0;
      return (0, jk.jsxs)("div", {
        className: qk()("SettingBox SettingsSliderDiv", {
          [Zk]: Zk,
          SettingBoxDisabled: wk,
          SliderCapped: Vk
        }),
        style: zk,
        children: [(0, jk.jsxs)("div", {
          className: "SliderText",
          children: [`${Fk}: ${tk?tk(Kk):Kk}`, Lk && (0, jk.jsx)(yk.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Lk
          })]
        }), (0, jk.jsx)("div", {
          className: "SliderDiv",
          children: (0, jk.jsx)(Jk, {
            value: Kk,
            min: Tk,
            max: ik,
            step: lk,
            onChange: kk => {
              if (Vk && kk >= Hk && Kk === Hk) return;
              const Fk = Vk ? Math.min(kk, Hk) : kk;
              sk.current = Fk, Qk(Fk), Ik(Fk)
            },
            onChangeComplete: Pk && (() => {
              Pk(sk.current)
            }),
            format: tk,
            padStep: ek,
            disabled: wk
          })
        }), Vk && xk && (0, jk.jsx)("div", {
          className: "SettingNote",
          children: xk
        })]
      })
    }
    const Hk = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function Jk(kk) {
      var Fk;
      let {
        value: Ik,
        min: ik,
        max: yk,
        step: lk,
        onChange: ak,
        orientation: qk,
        reverse: Lk,
        setIsChanging: tk,
        tooltip: ek,
        labels: wk,
        handleLabel: Jk,
        format: xk,
        onChangeStart: Pk,
        onChangeComplete: Kk,
        padStep: Qk,
        disabled: sk = !1
      } = kk;
      const Vk = (0, Xk.useRef)(null),
        zk = (0, Xk.useRef)(null);
      (0, Xk.useLayoutEffect)((() => {
        var kk, Fk, Ik;
        const Xk = null !== (kk = null === (Fk = Vk.current) || void 0 === Fk ? void 0 : Fk.querySelector(".rangeslider")) && void 0 !== kk ? kk : null;
        null === Xk || void 0 === Xk || Xk.setAttribute("data-pad-slider", ""), null === Xk || void 0 === Xk || Xk.setAttribute("data-pad-focusable", ""), null === Xk || void 0 === Xk || null === (Ik = Xk.querySelector(".rangeslider__handle")) || void 0 === Ik || Ik.setAttribute("data-pad-slider-handle", ""), zk.current = Xk
      }), []), (0, Xk.useLayoutEffect)((() => {
        var kk, Fk;
        sk ? null === (kk = zk.current) || void 0 === kk || kk.setAttribute("aria-disabled", "true") : null === (Fk = zk.current) || void 0 === Fk || Fk.removeAttribute("aria-disabled")
      }), [sk]);
      const Sk = (null !== (Fk = String(lk).split(".")[1]) && void 0 !== Fk ? Fk : "").length,
        vk = kk => {
          const Fk = Number((Math.round((kk - ik) / lk) * lk + ik).toFixed(Sk));
          return Math.min(yk, Math.max(ik, Fk))
        },
        Ek = (0, Xk.useRef)(Kk);
      Ek.current = Kk, (0, Xk.useEffect)((() => {
        const kk = Vk.current;
        if (!kk) return;
        const Fk = kk => {
          var Fk;
          Hk.has(kk.key) && (null === (Fk = Ek.current) || void 0 === Fk || Fk.call(Ek))
        };
        return kk.addEventListener("keyup", Fk), () => {
          kk.removeEventListener("keyup", Fk)
        }
      }), []);
      const Ok = (0, Xk.useRef)(!1);
      return (0, Zk.g)(zk, {
        adjust: kk => {
          if (sk) return;
          const Fk = null !== Qk && void 0 !== Qk ? Qk : Math.max(lk, Math.round((yk - ik) / 20 / lk) * lk),
            Xk = vk(Ik + kk * Fk * (Lk ? -1 : 1));
          Xk !== Ik && (null === Pk || void 0 === Pk || Pk(), ak(Xk), null === Kk || void 0 === Kk || Kk())
        },
        setFraction: kk => {
          if (sk) return;
          const Fk = vk(ik + (Lk ? 1 - kk : kk) * (yk - ik));
          Fk !== Ik && (Ok.current || (Ok.current = !0, null === Pk || void 0 === Pk || Pk()), ak(Fk))
        },
        endDrag: () => {
          Ok.current && (Ok.current = !1, null === Kk || void 0 === Kk || Kk())
        }
      }), (0, jk.jsx)("div", {
        ref: Vk,
        style: {
          display: "contents"
        },
        children: (0, jk.jsx)(Tk.c, {
          value: Ik,
          min: ik,
          max: yk,
          step: lk,
          onChange: ak,
          orientation: qk,
          reverse: Lk,
          tooltip: ek,
          labels: wk,
          handleLabel: Jk,
          format: xk,
          onChangeStart: () => {
            null === Pk || void 0 === Pk || Pk(), null === tk || void 0 === tk || tk(!0)
          },
          onChangeComplete: () => {
            null === tk || void 0 === tk || tk(!1), null === Kk || void 0 === Kk || Kk()
          }
        })
      })
    }
    async function xk() {
      const kk = Lk.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await kk.getResult() && (0, tk.reloadBloxd)()
    }

    function Pk(kk) {
      let {
        label: Fk,
        options: Ik,
        value: Xk,
        onChange: Tk,
        circleInfoText: ik
      } = kk;
      return (0, jk.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, jk.jsxs)("div", {
          className: "SliderText",
          children: [Fk, ik && (0, jk.jsx)(yk.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: ik
          })]
        }), (0, jk.jsx)(lk.b, {
          ariaLabel: Fk,
          options: Ik,
          value: Xk,
          onChange: Tk
        })]
      })
    }
  },
  5016: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => yk
    });
    var Xk = Ik(1055),
      Tk = Ik.n(Xk),
      ik = Ik(1096);

    function yk(kk) {
      let {
        options: Fk,
        value: Ik,
        onChange: Xk,
        ariaLabel: yk,
        className: lk,
        reselectable: ak = !1,
        keepsFocus: qk = !1,
        padTabs: Lk
      } = kk;
      const tk = void 0 !== Lk;
      return (0, ik.jsx)("div", {
        className: Tk()("SegmentedToggle", lk),
        role: "group",
        "aria-label": yk,
        "data-pad-tabs": Lk,
        children: Fk.map((kk => {
          const Fk = kk.value === Ik;
          return (0, ik.jsx)("button", {
            type: "button",
            "aria-pressed": Fk,
            "data-pad-tab": tk || void 0,
            "data-pad-selected": tk && Fk ? "true" : void 0,
            "data-pad-default-focus": tk && Fk || void 0,
            "aria-label": kk.ariaLabel,
            title: kk.ariaLabel,
            className: Tk()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Fk
            }),
            onMouseDown: qk ? kk => {
              kk.preventDefault()
            } : void 0,
            onClick: () => {
              Fk && !ak || Xk(kk.value)
            },
            children: kk.label
          }, kk.value)
        }))
      })
    }
  },
  8757: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => tk,
      g: () => ek,
      h: () => wk,
      l: () => jk,
      m: () => Zk
    });
    var Xk = Ik(58),
      Tk = Ik(8763),
      ik = Ik(34),
      yk = Ik(1875),
      lk = Ik(41),
      ak = Ik(1248),
      qk = Ik(1894);
    const Lk = 50;
    const tk = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = kk => {
          if (0 === this.listeners.size) {
            var Fk, Ik;
            this.state = {
              ...this.state,
              channel: null !== (Fk = null === (Ik = qk.e.get("chatChannels")) || void 0 === Ik ? void 0 : Ik[0]) && void 0 !== Fk ? Fk : null
            };
            const kk = ik.g.subscribe("reportPlayer", (kk => {
              let {
                playerEId: Fk
              } = kk;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, Fk]
              })
            }));
            this.stopListening = [yk.gameBridge.subscribe("chatReceived", (kk => {
              let {
                serverChatMsgId: Fk,
                content: Ik,
                author: Xk
              } = kk;
              this.addMessage(Fk, Ik, Xk)
            })), () => {
              ik.g.unsubscribe(kk)
            }, qk.e.subscribe("chatChannels", (kk => {
              var Fk;
              this.setState({
                ...this.state,
                channel: null !== (Fk = null === kk || void 0 === kk ? void 0 : kk[0]) && void 0 !== Fk ? Fk : null
              })
            }))]
          }
          return this.listeners.add(kk), () => {
            if (this.listeners.delete(kk), 0 === this.listeners.size) {
              for (const kk of this.stopListening) kk();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Xk = {
          serverChatMsgId: kk,
          content: Fk,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: Ik
        };
        this.setState({
          ...this.state,
          messages: [Xk, ...this.state.messages].slice(0, Tk.f)
        })
      }
      selectNextChannel() {
        const kk = qk.e.get("chatChannels");
        if (kk) {
          const Fk = kk.findIndex((kk => {
            var Fk;
            return kk.channelName === (null === (Fk = this.state.channel) || void 0 === Fk ? void 0 : Fk.channelName)
          }));
          this.setState({
            ...this.state,
            channel: kk[(Fk + 1) % kk.length]
          })
        }
      }
      setState(kk) {
        this.state = kk;
        for (const Fk of this.listeners) Fk()
      }
    };

    function Zk() {
      const [kk, Fk] = (0, Xk.useState)(tk.getState);
      return (0, Xk.useEffect)((() => {
        const kk = tk.subscribe((() => {
          Fk(tk.getState())
        }));
        return Fk(tk.getState()), kk
      }), []), kk
    }

    function jk(kk) {
      var Fk, Ik;
      if (kk.startsWith("/report")) {
        var Xk;
        const Fk = null !== (Xk = kk.replace("/report", "").trim().split(" ")[0]) && void 0 !== Xk ? Xk : "";
        if ("" === Fk) return void tk.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const Ik = yk.gameBridge.latest("players"),
          Tk = yk.gameBridge.latest("hiddenPlayerNames"),
          lk = kk => {
            var Xk, ik;
            const yk = null !== (Xk = null === (ik = Ik.byId[kk]) || void 0 === ik ? void 0 : ik.name) && void 0 !== Xk ? Xk : null;
            return null !== yk && (yk === Fk || (0, ak.c)(yk, Tk) === Fk)
          };
        if (null !== Ik.localId && lk(Ik.localId)) return void tk.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const kk of Ik.ids)
          if (lk(kk)) return ik.g.GL("OpenReportMenu", {
            playerEId: kk,
            playerName: Ik.byId[kk].name,
            oq: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        tk.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      yk.gameBridge.send("sendChatMessage", {
          oq: kk,
          channelName: null !== (Fk = null === (Ik = tk.getState().channel) || void 0 === Ik ? void 0 : Ik.channelName) && void 0 !== Fk ? Fk : null
        }),
        function(kk) {
          var Fk;
          const Ik = null !== (Fk = lk.j.getItem("recentlySentChatMsgs")) && void 0 !== Fk ? Fk : [];
          Ik.push(kk), Ik.length > Lk && Ik.shift();
          lk.j.setItem("recentlySentChatMsgs", Ik)
        }(kk)
    }

    function ek() {
      var kk;
      return null !== (kk = lk.j.getItem("recentlySentChatMsgs")) && void 0 !== kk ? kk : []
    }

    function wk(kk) {
      var Fk;
      let Ik = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Xk = null !== (Fk = lk.j.getItem("recentlySentChatMsgs")) && void 0 !== Fk ? Fk : [],
        Tk = Xk.length + 1,
        ik = Ik ? (kk % Tk + Tk) % Tk : Math.min(Xk.length, Math.max(0, kk));
      return {
        stepsBack: ik,
        text: 0 === ik ? "" : Xk[Xk.length - ik]
      }
    }
  },
  8709: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk,
      f: () => ik
    });
    var Xk = Ik(1926);
    const Tk = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      ik = kk => "string" === typeof kk.icon && "" !== kk.icon && "string" === typeof kk.keycode && Tk.test(kk.keycode),
      yk = kk => "Space" === kk ? "_" : Xk.k[kk]
  },
  8778: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk
    });
    var Xk = Ik(25);

    function Tk() {
      return !Xk.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8784: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      A: () => ek,
      C: () => tk,
      G: () => Lk,
      I: () => Zk,
      K: () => jk,
      e: () => ik,
      i: () => lk,
      j: () => qk,
      l: () => ak,
      p: () => yk,
      t: () => Tk,
      w: () => Xk
    });
    const Xk = 14,
      Tk = 6,
      ik = (Xk + Tk) / 2,
      yk = 200,
      lk = yk / 2,
      ak = yk / 2 - 1,
      qk = Tk / Xk * (yk / 2),
      Lk = (kk, Fk) => -Math.PI / 2 + 2 * kk * Math.PI / Fk,
      tk = (kk, Fk, Ik) => {
        const Xk = 2 * Math.PI / Ik;
        return (Math.round((Math.atan2(Fk, kk) + Math.PI / 2) / Xk) % Ik + Ik) % Ik
      },
      Zk = .5,
      jk = (kk, Fk, Ik) => Math.hypot(kk.x, kk.y) < Zk ? Ik : tk(kk.x, kk.y, Fk),
      ek = (kk, Fk, Ik, Xk, Tk) => {
        const ik = Math.PI / Fk,
          yk = Lk(kk, Fk),
          lk = yk - ik,
          ak = yk + ik,
          qk = (kk, Fk) => `${Ik+kk*Math.cos(Fk)} ${Ik+kk*Math.sin(Fk)}`;
        return [`M ${qk(Xk,lk)}`, `L ${qk(Tk,lk)}`, `A ${Tk} ${Tk} 0 0 1 ${qk(Tk,ak)}`, `L ${qk(Xk,ak)}`, `A ${Xk} ${Xk} 0 0 0 ${qk(Xk,lk)}`, "Z"].join(" ")
      }
  },
  8820: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk
    });
    var Xk = Ik(58),
      Tk = Ik(8743),
      ik = Ik(2349);

    function yk() {
      const kk = (0, ik.j)("shopInfo"),
        [, Fk] = (0, Xk.useReducer)((kk => kk + 1), 0);
      return (0, ik.g)("shopInfo", Fk), !(0, Tk.d)(kk)
    }
  },
  8154: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Tk,
      g: () => ik,
      i: () => Zk,
      j: () => tk,
      n: () => qk,
      q: () => lk,
      s: () => Xk,
      v: () => jk,
      x: () => ek
    });
    const Xk = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      Tk = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: Xk
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      ik = {
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
      yk = ["pickBlock", "perspective"],
      lk = kk => yk.includes(kk) ? yk : [kk],
      ak = Object.fromEntries(Tk.flatMap((kk => {
        let {
          group: Fk,
          actions: Ik
        } = kk;
        return Ik.map((kk => [kk, Fk]))
      }))),
      qk = kk => ak[kk],
      Lk = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      tk = kk => {
        var Fk;
        return [qk(kk), ...null !== (Fk = Lk[kk]) && void 0 !== Fk ? Fk : []]
      },
      Zk = new Set(["menu", "inventory", "keyboard"]),
      jk = {
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
      ek = new Set(["forward", "backward", "left", "right"])
  },
  8152: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      B: () => Gk,
      D: () => zk,
      E: () => Pk,
      H: () => vk,
      I: () => Lk,
      K: () => Sk,
      O: () => nk,
      c: () => xk,
      g: () => Qk,
      j: () => Zk,
      n: () => jk,
      o: () => pk,
      q: () => Ok,
      u: () => Ek,
      y: () => Kk
    });
    var Xk = Ik(8154),
      Tk = Ik(8161),
      ik = Ik(8142),
      yk = Ik(8176);
    const lk = kk => "pickBlock" === kk ? "perspective" : kk,
      ak = (kk, Fk) => {
        var Ik;
        const Tk = lk(Fk);
        return null !== (Ik = kk[Tk]) && void 0 !== Ik ? Ik : Xk.g[Tk]
      },
      qk = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((kk => {
        let [Fk, Ik] = kk;
        return [
          [Fk, Ik],
          [Ik, Fk]
        ]
      }))),
      Lk = (kk, Fk) => null !== kk && void 0 !== kk ? kk : "nintendo" === Fk,
      tk = kk => Lk((0, Tk.k)().swapConfirmBack, (0, Tk.o)()) && qk.get(kk) || kk,
      Zk = kk => ak((0, Tk.k)().bindings, tk(kk)),
      jk = kk => Xk.g[tk(kk)],
      ek = Object.keys(Xk.g),
      wk = kk => "gameplay" === (0, Xk.n)(kk) ? ["gameplay"] : (0, Xk.j)(kk),
      Hk = (kk, Fk) => {
        const Ik = wk(Fk);
        return wk(kk).some((kk => Ik.includes(kk)))
      },
      Jk = (kk, Fk, Ik) => {
        const Tk = ak(kk, Fk),
          yk = new Set((0, Xk.q)(Fk)),
          qk = [...yk];
        for (let Xk = qk.pop(); Xk; Xk = qk.pop())
          for (const Fk of ek) {
            const ik = ak(kk, Fk);
            yk.has(Fk) || ik !== Ik && ik !== Tk || !Hk(Xk, Fk) || (yk.add(Fk), qk.push(Fk))
          }
        const Lk = {
          ...kk
        };
        for (const tk of yk) {
          const Fk = ak(kk, tk) === Tk ? Ik : Tk,
            yk = (0, Xk.j)(tk).some((kk => Xk.i.has(kk)));
          if ((0, ik.D)(Fk) && yk) return null;
          Lk[lk(tk)] = Fk
        }
        for (const ik of Object.keys(Lk)) Lk[ik] === Xk.g[ik] && delete Lk[ik];
        return Lk
      },
      xk = (kk, Fk) => null !== Jk((0, Tk.k)().bindings, tk(kk), Fk),
      Pk = (kk, Fk) => {
        if (Zk(kk) === Fk) return !0;
        const Ik = Jk((0, Tk.k)().bindings, tk(kk), Fk);
        return !!Ik && ((0, Tk.p)({
          bindings: Ik
        }), !0)
      },
      Kk = (kk, Fk) => {
        const Ik = (0, Xk.q)(Fk);
        return ek.filter((Fk => lk(Fk) === Fk && !Ik.includes(Fk) && ak(kk, tk(Fk)) !== Zk(Fk)))
      },
      Qk = ["southpaw", "triggersSwapped"],
      sk = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      Vk = kk => Object.keys(sk[kk]),
      zk = (kk, Fk) => "southpaw" === kk ? Fk.swapSticks : Vk(kk).every((Ik => ak(Fk.bindings, Ik) === sk[kk][Ik])),
      Sk = (kk, Fk) => {
        const Ik = (0, Tk.k)();
        let ik = Ik.bindings;
        for (const Tk of Vk(kk)) {
          const Ik = Fk ? sk[kk][Tk] : Xk.g[Tk];
          if (ik = Jk(ik, Tk, Ik), !ik) return !1
        }
        return (0, Tk.p)({
          swapSticks: "southpaw" === kk ? Fk : Ik.swapSticks,
          bindings: ik
        }), !0
      },
      vk = () => {
        (0, Tk.p)({
          swapSticks: !1,
          bindings: {}
        })
      },
      Ek = () => (0, Tk.k)().swapSticks ? "RightStick" : "LeftStick",
      Ok = () => (0, Tk.k)().swapSticks ? "LeftStick" : "RightStick",
      nk = kk => (0, Tk.k)().swapSticks && (0, ik.D)(kk),
      Gk = kk => nk(kk) ? Ek() : Ok(),
      pk = kk => {
        if (Xk.x.has(kk)) return Ek();
        const Fk = Xk.v[kk];
        return Fk && ("leaderboard" !== Fk || (0, yk.i)(kk, (0, yk.e)())) ? Zk(Fk) : null
      }
  },
  8134: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      ControllerCategory: () => Ql,
      ControllerGlyph: () => sT,
      ControllerRoot: () => Qy,
      PadLobbyShortcuts: () => Cy,
      PadSneakChip: () => Ey,
      PadTooltip: () => ny,
      attachPressToContinue: () => Ay,
      getBoundButton: () => Lk.j,
      getControllerSettings: () => Zk.k,
      getGlyphForNoaAction: () => Lk.o,
      getInventoryCursorState: () => Vl,
      getMenuShortcutButton: () => dI,
      getPadGlyphIconName: () => Sy,
      getPadGlyphIconUrl: () => oy,
      getPadRepeatTiming: () => wk.i,
      handOverPadFocus: () => Sl,
      hasActivePad: () => sl,
      isPadSteppingSlots: () => zl
    });
    const Xk = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var Tk = Ik(1179),
      ik = Ik(1375),
      yk = Ik(8138),
      lk = Ik(74),
      ak = Ik(25),
      qk = Ik(34),
      Lk = Ik(8152),
      tk = Ik(8180),
      Zk = Ik(8161),
      jk = Ik(8185),
      ek = Ik(8142),
      wk = Ik(8624),
      Hk = Ik(8632),
      Jk = Ik(1604);
    const xk = (kk, Fk, Ik) => Math.max(Fk, Math.min(Ik, kk)),
      Pk = kk => Math.min(kk.width, kk.height) / 720,
      Kk = kk => Math.max(.15, kk);
    class Qk {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(kk, Fk) {
        const Ik = Math.hypot(kk.x, kk.y) >= (kk => Math.max(.3, kk))(Fk);
        return this.locked ? (this.locked = Ik, !1) : Ik
      }
    }
    const sk = (kk, Fk) => {
        const Ik = xk(Fk.dtMs, 0, 100),
          Xk = Ik / 1e3,
          Tk = Pk(Fk.viewport) * (Fk.cursorSpeedPercent / 100),
          ik = (0, ek.j)(Fk.stick, Kk(Fk.moveDeadzone)),
          yk = Math.hypot(ik.x, ik.y),
          lk = ((kk, Fk, Ik) => {
            if (Fk < .3) return 0;
            const Xk = Ik / 350;
            return Fk >= .85 ? Math.min(1, kk + Xk) : Math.max(0, kk - Xk)
          })(kk.speedRamp, yk, Ik);
        let ak = kk.x,
          qk = kk.y;
        if (yk > 0) {
          const kk = .45 + .55 * lk,
            Ik = Fk.context.overInteractive ? .45 : 1,
            Lk = 1400 * (kk => {
              const Fk = xk(kk, 0, 1);
              return .3 * Fk + .7 * Fk * Fk
            })(yk) * Tk * kk * Ik;
          ak += ik.x / yk * Lk * Xk, qk += ik.y / yk * Lk * Xk
        }
        const Lk = Math.hypot(Fk.dpad.x, Fk.dpad.y);
        if (Lk > 0) {
          const kk = 500 * Tk;
          ak += Fk.dpad.x / Lk * kk * Xk, qk += Fk.dpad.y / Lk * kk * Xk
        }
        const tk = Fk.context.magnetTarget;
        if (tk && yk < .3 && 0 === Lk) {
          const kk = ((kk, Fk, Ik, Xk, Tk) => {
            const ik = Fk.x - kk.x,
              yk = Fk.y - kk.y,
              lk = Math.hypot(ik, yk);
            if (0 === lk) return {
              x: 0,
              y: 0
            };
            const ak = Math.min(lk, Tk * (1 - Xk / .3));
            let qk = ik / lk * ak,
              Lk = yk / lk * ak;
            if (Xk > 0) {
              const kk = Ik.x / Xk,
                Fk = Ik.y / Xk,
                Tk = qk * kk + Lk * Fk;
              Tk < 0 && (qk -= Tk * kk, Lk -= Tk * Fk)
            }
            return {
              x: qk,
              y: Lk
            }
          })({
            x: ak,
            y: qk
          }, tk, ik, yk, 120 * Pk(Fk.viewport) * Xk);
          ak += kk.x, qk += kk.y
        }
        return {
          x: xk(ak, 0, Math.max(0, Fk.viewport.width - 1)),
          y: xk(qk, 0, Math.max(0, Fk.viewport.height - 1)),
          speedRamp: lk
        }
      },
      Vk = kk => {
        const Fk = (0, ek.j)(kk, .2);
        return 0 !== Fk.x || 0 !== Fk.y
      },
      zk = (kk, Fk) => {
        const Ik = (0, ek.j)(kk, .2),
          Xk = Math.hypot(Ik.x, Ik.y);
        if (0 === Xk) return {
          x: 0,
          y: 0
        };
        const Tk = Xk * Xk * 1600,
          ik = xk(Fk, 0, 100) / 1e3;
        return {
          x: Ik.x / Xk * Tk * ik,
          y: Ik.y / Xk * Tk * ik
        }
      },
      Sk = (kk, Fk) => "y" === Fk ? kk.scrollHeight > kk.clientHeight + 1 : kk.scrollWidth > kk.clientWidth + 1,
      vk = (kk, Fk) => {
        if (!Sk(kk, Fk)) return !1;
        const Ik = getComputedStyle(kk),
          Xk = "y" === Fk ? Ik.overflowY : Ik.overflowX;
        return "auto" === Xk || "scroll" === Xk
      },
      Ek = (kk, Fk, Ik) => {
        for (let ik = kk instanceof HTMLElement ? kk : null !== (Xk = null === kk || void 0 === kk ? void 0 : kk.parentElement) && void 0 !== Xk ? Xk : null; ik; ik = ik.parentElement) {
          var Xk;
          if (vk(ik, Fk)) return ik;
          if (ik === Ik) return null
        }
        if (Ik) return null;
        const Tk = document.scrollingElement;
        return Tk instanceof HTMLElement && Sk(Tk, Fk) ? Tk : null
      },
      Ok = new WeakMap,
      nk = (kk, Fk) => {
        const Ik = performance.now(),
          Xk = Ok.get(kk);
        if (Xk && Xk.axis === Fk && Ik - Xk.atMs < 500 && (!Xk.container || Xk.container.isConnected)) return Xk.container;
        const Tk = Gk(kk, Fk);
        return Ok.set(kk, {
          axis: Fk,
          atMs: Ik,
          container: Tk
        }), Tk
      },
      Gk = (kk, Fk) => {
        let Ik = vk(kk, Fk) ? kk : null,
          Xk = Ik ? Ik.clientWidth * Ik.clientHeight : 0;
        for (const Tk of kk.querySelectorAll("*")) {
          const kk = Tk.clientWidth * Tk.clientHeight;
          kk > Xk && vk(Tk, Fk) && (Ik = Tk, Xk = kk)
        }
        return Ik
      },
      pk = (kk, Fk, Ik) => "y" === Fk ? Ik < 0 ? kk.scrollTop > 0 : kk.scrollTop + kk.clientHeight < kk.scrollHeight - 1 : Ik < 0 ? kk.scrollLeft > 0 : kk.scrollLeft + kk.clientWidth < kk.scrollWidth - 1,
      uk = (kk, Fk, Ik) => {
        "y" === Fk ? kk.scrollBy({
          top: Ik,
          behavior: "instant"
        }) : kk.scrollBy({
          left: Ik,
          behavior: "instant"
        })
      },
      bk = kk => {
        if (!kk || kk === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const Fk = kk.getBoundingClientRect(),
          Ik = Math.max(0, Fk.left),
          Xk = Math.max(0, Fk.top);
        return new DOMRect(Ik, Xk, Math.min(window.innerWidth, Fk.right) - Ik, Math.min(window.innerHeight, Fk.bottom) - Xk)
      },
      Rk = (kk, Fk) => kk.left < Fk.right && Fk.left < kk.right && kk.top < Fk.bottom && Fk.top < kk.bottom;
    var Uk = Ik(58),
      Ck = Ik(1055),
      Nk = Ik.n(Ck),
      ck = Ik(1096);
    let Wk = 0,
      fk = !1;
    class Bk {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(kk) {
        this.element = kk, this.shownKey = "", this.gap = null
      }
      show(kk) {
        const Fk = this.element;
        if (!Fk) return;
        const Ik = kk ? this.keepOnScreen(Fk, kk) : null,
          Xk = Ik ? `${Ik.left},${Ik.top},${Ik.width},${Ik.height}` : "";
        if (Xk === this.shownKey) return;
        const Tk = "" === this.shownKey;
        this.shownKey = Xk, Fk.classList.toggle("Visible", null !== Ik), Ik && (Fk.classList.toggle("Snap", Tk), Fk.style.width = `${Ik.width}px`, Fk.style.height = `${Ik.height}px`, Fk.style.transform = `translate(${Ik.left}px, ${Ik.top}px)`, Tk && (Fk.offsetWidth, Fk.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(kk, Fk) {
        var Ik;
        const Xk = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!fk){fk=!0;const kk=document.createElement("div");kk.setAttribute("aria-hidden","true"),kk.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(kk),new ResizeObserver((()=>{Wk++})).observe(kk)}return String(Wk)})()}`;
        (null === (Ik = this.gap) || void 0 === Ik ? void 0 : Ik.key) !== Xk && (this.gap = {
          px: parseFloat(getComputedStyle(kk).paddingLeft) || 0,
          key: Xk
        });
        const Tk = this.gap.px + 2,
          ik = Math.max(Fk.left, Tk),
          yk = Math.max(Fk.top, Tk),
          lk = Math.min(Fk.left + Fk.width, window.innerWidth - Tk),
          ak = Math.min(Fk.top + Fk.height, window.innerHeight - Tk);
        return lk <= ik || ak <= yk ? Fk : {
          left: ik,
          top: yk,
          width: lk - ik,
          height: ak - yk
        }
      }
    }
    const dk = kk => {
      let {
        placer: Fk,
        className: Ik
      } = kk;
      const Xk = (0, Uk.useCallback)((kk => {
        Fk.setElement(kk)
      }), [Fk]);
      return (0, ck.jsx)("div", {
        ref: Xk,
        className: Nk()("PadReticle", Ik),
        "aria-hidden": !0
      })
    };
    var Yk = Ik(8637);
    const Ak = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const gk = new class {
      constructor() {
        this.state = Ak, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(kk) {
        if (Fk = this.state, Ik = kk, (Fk.visible || Ik.visible) && (Fk.visible !== Ik.visible || Fk.x !== Ik.x || Fk.y !== Ik.y || Fk.pressed !== Ik.pressed)) {
          var Fk, Ik;
          this.state = kk;
          for (const Fk of this.listeners) Fk(kk)
        }
      }
      hide() {
        this.set(Ak)
      }
      subscribe(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
    };
    var mk = Ik(8652);
    const hk = (kk, Fk) => {
        let {
          kind: Ik,
          holding: Xk,
          hasPress: Tk,
          hasBack: ik,
          slotHasItem: yk
        } = Fk;
        switch (kk) {
          case "primary":
            return "slot" === Ik ? "slotPrimary" : "recipe" === Ik || "button" === Ik ? Tk ? "pressPrimary" : "click" : "textField" === Ik ? "openKeyboard" : null;
          case "secondary":
            return "slot" === Ik ? "slotSecondary" : "button" !== Ik && "recipe" !== Ik || !Tk ? null : "pressSecondary";
          case "quickMove":
            return "slot" === Ik && yk ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === Ik && yk && !Xk ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return Xk ? "cancel" : ik ? "pressBack" : "close"
        }
      },
      rk = kk => {
        const Fk = [];
        if (kk.hotbarPicking) return Fk.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), Fk.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), Fk;
        if (kk.holding) "slot" === kk.kind ? (Fk.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), Fk.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === kk.kind && Fk.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), Fk.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), Fk.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), kk.openButtonCloses && Fk.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var Ik;
          "slot" === kk.kind && kk.slotHasItem ? (Fk.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), Fk.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), Fk.push({
            actions: ["inventoryQuickMove"],
            labelKey: kk.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), Fk.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), Fk.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== kk.kind && "recipe" !== kk.kind || !kk.pressHints ? "button" === kk.kind || "recipe" === kk.kind ? Fk.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === kk.kind && Fk.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (kk.pressHints.primary && Fk.push({
            actions: ["inventoryPrimary"],
            labelKey: kk.pressHints.primary
          }), kk.pressHints.secondary && Fk.push({
            actions: ["inventorySecondary"],
            labelKey: kk.pressHints.secondary
          }));
          const Xk = null === (Ik = kk.pressHints) || void 0 === Ik ? void 0 : Ik.back;
          Xk && Fk.push({
            actions: ["inventoryClose"],
            labelKey: Xk
          });
          const Tk = [];
          kk.openButtonCloses && Tk.push("inventory"), Xk || Tk.push("inventoryClose"), Tk.length > 0 && Fk.push({
            actions: Tk,
            labelKey: "inventoryClose"
          })
        }
        return Fk.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), kk.hasCategories ? Fk.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : kk.hasList && Fk.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), Fk
      };
    var Dk = Ik(8664),
      Mk = Ik(8658);
    class kF {
      constructor(kk) {
        this.probes = kk, this.byContainer = new Map, this.byParent = new Map
      }
      find(kk, Fk) {
        const Ik = Ek(kk, "y", Fk);
        if (!Ik) return null;
        let Xk = this.byContainer.get(Ik);
        return Xk || (this.probes.push({
          element: Ik,
          rect: TF(Ik.getBoundingClientRect())
        }), Xk = {
          container: Ik,
          box: bk(Ik),
          group: XF(Ik)
        }, this.byContainer.set(Ik, Xk)), Xk
      }
      findForParent(kk, Fk) {
        let Ik = this.byParent.get(kk);
        return void 0 === Ik && (Ik = this.find(kk, Fk), this.byParent.set(kk, Ik)), Ik
      }
    }
    const FF = new WeakMap;
    let IF = 0;
    const XF = kk => {
        let Fk = FF.get(kk);
        return Fk || (Fk = "el:" + IF++, FF.set(kk, Fk)), Fk
      },
      TF = kk => ({
        left: kk.left,
        top: kk.top,
        width: kk.width,
        height: kk.height
      }),
      iF = kk => kk.width > 0 && kk.height > 0,
      yF = (kk, Fk) => iF(kk) && kk.left + kk.width > 0 && kk.top + kk.height > 0 && kk.left < Fk.width && kk.top < Fk.height,
      lF = (kk, Fk, Ik) => {
        const Xk = kk.top + kk.height / 2;
        return yF(kk, Fk) && (!Ik || Xk >= Ik.top && Xk <= Ik.bottom)
      },
      aF = kk => ({
        x: kk.left + kk.width / 2,
        y: kk.top + kk.height / 2
      }),
      qF = (kk, Fk, Ik) => kk < 0 ? Ik >= 0 ? 0 : Fk - 1 : ((kk + Ik) % Fk + Fk) % Fk,
      LF = kk => "Left" === kk || "Right" === kk,
      tF = (kk, Fk, Ik) => {
        const Xk = LF(Ik),
          Tk = Xk ? kk.top : kk.left,
          ik = Xk ? kk.height : kk.width,
          yk = Xk ? Fk.top : Fk.left,
          lk = Xk ? Fk.height : Fk.width,
          ak = Math.max(0, Math.max(yk - (Tk + ik), Tk - (yk + lk)));
        return ik > 1.5 * lk ? {
          gap: ak,
          offset: Math.max(0, yk - Tk) + .1 * Math.max(0, Tk - yk)
        } : {
          gap: ak,
          offset: Math.abs(yk + lk / 2 - (Tk + ik / 2))
        }
      },
      ZF = (kk, Fk, Ik) => {
        const Xk = ((kk, Fk, Ik) => {
          const Xk = aF(kk),
            Tk = aF(Fk),
            ik = LF(Ik) ? Math.min(kk.width, Fk.width) / 4 : Math.min(kk.height, Fk.height) / 4;
          switch (Ik) {
            case "Right":
              return Tk.x - Xk.x >= ik ? Math.max(0, Fk.left - (kk.left + kk.width)) : null;
            case "Left":
              return Xk.x - Tk.x >= ik ? Math.max(0, kk.left - (Fk.left + Fk.width)) : null;
            case "Down":
              return Tk.y - Xk.y >= ik ? Math.max(0, Fk.top - (kk.top + kk.height)) : null;
            case "Up":
              return Xk.y - Tk.y >= ik ? Math.max(0, kk.top - (Fk.top + Fk.height)) : null
          }
        })(kk, Fk, Ik);
        if (null === Xk) return null;
        const Tk = tF(kk, Fk, Ik);
        return Xk + 3 * Tk.gap + .5 * Tk.offset
      },
      jF = (kk, Fk) => Fk.visible || null !== Fk.scrollGroup && Fk.scrollGroup === kk.scrollGroup,
      eF = (kk, Fk, Ik, Xk) => {
        let Tk = null,
          ik = 1 / 0;
        for (const yk of Fk) {
          if (yk.key === kk.key || !jF(kk, yk) || !Xk(yk)) continue;
          const Fk = ZF(kk.rect, yk.rect, Ik);
          null !== Fk && Fk < ik && (Tk = yk, ik = Fk)
        }
        return Tk
      },
      wF = (kk, Fk, Ik) => {
        const Xk = eF(kk, Fk, Ik, (() => !0));
        if (!Xk || LF(Ik) || null === kk.scrollGroup || Xk.scrollGroup === kk.scrollGroup) return Xk;
        const Tk = eF(kk, Fk, Ik, (Fk => 0 === tF(kk.rect, Fk.rect, Ik).gap));
        return null !== Tk && void 0 !== Tk ? Tk : Xk
      },
      HF = (kk, Fk, Ik) => {
        let Xk = null,
          Tk = 1 / 0;
        for (const ik of Fk) {
          if (!ik.visible || Ik && !Ik(ik)) continue;
          const Fk = aF(ik.rect),
            yk = Math.hypot(Fk.x - kk.x, Fk.y - kk.y);
          yk < Tk && (Xk = ik, Tk = yk)
        }
        return Xk
      },
      JF = kk => {
        const {
          rect: Fk,
          clip: Ik
        } = kk;
        if (!Ik) return Fk;
        const Xk = Math.max(Fk.left, Ik.left),
          Tk = Math.max(Fk.top, Ik.top);
        return {
          left: Xk,
          top: Tk,
          width: Math.min(Fk.left + Fk.width, Ik.left + Ik.width) - Xk,
          height: Math.min(Fk.top + Fk.height, Ik.top + Ik.height) - Tk
        }
      },
      xF = (kk, Fk) => Fk.x >= kk.left && Fk.x < kk.left + kk.width && Fk.y >= kk.top && Fk.y < kk.top + kk.height,
      PF = (kk, Fk) => {
        let Ik = null,
          Xk = 1 / 0;
        for (const Tk of Fk) {
          const Fk = JF(Tk);
          (Tk.visible || Tk.clip) && xF(Fk, kk) && (Fk.width * Fk.height < Xk && (Ik = Tk, Xk = Fk.width * Fk.height))
        }
        return Ik
      },
      KF = kk => {
        let Fk = null;
        for (const Ik of kk) {
          if (!Ik.visible) continue;
          if (!Fk) {
            Fk = Ik;
            continue
          }
          const kk = Math.min(Fk.rect.height, Ik.rect.height) / 2,
            Xk = Ik.rect.top - Fk.rect.top;
          (Xk < -kk || Math.abs(Xk) <= kk && Ik.rect.left < Fk.rect.left) && (Fk = Ik)
        }
        return Fk
      },
      QF = (kk, Fk, Ik, Xk, Tk) => {
        const ik = Tk % Fk,
          yk = Math.floor(Tk / Fk);
        return {
          left: kk.left + ik * Ik,
          top: kk.top + yk * Xk,
          width: kk.width,
          height: kk.height
        }
      },
      sF = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      VF = ".LazyLoadedItemWrapper",
      zF = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      SF = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      oF = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      vF = kk => kk.hasAttribute("data-inven-idx") ? "slot" : kk.hasAttribute("data-recipe-key") ? "recipe" : kk.hasAttribute("data-craft-ingredient") || (0, Mk.p)(kk) ? "info" : (0, Yk.O)(kk) ? "textField" : "button",
      EF = (kk, Fk) => "slot" === Fk ? Number(kk.getAttribute("data-inven-idx")) : null,
      OF = kk => kk.matches(VF) ? kk.querySelector(zF) : kk,
      nF = kk => {
        var Fk, Ik;
        return {
          element: kk,
          recipe: null !== (Fk = kk && (null === (Ik = OF(kk)) || void 0 === Ik ? void 0 : Ik.getAttribute("data-recipe-key"))) && void 0 !== Fk ? Fk : null
        }
      },
      GF = kk => {
        const Fk = OF(kk);
        if (!Fk) return {
          kind: "pending",
          idx: null
        };
        const Ik = vF(Fk);
        return {
          kind: Ik,
          idx: EF(Fk, Ik)
        }
      },
      pF = kk => {
        const Fk = [];
        for (const [Ik, Xk] of SF) {
          kk.matches(Xk) && Fk.push([Ik, kk]);
          for (const Tk of kk.querySelectorAll(Xk)) Fk.push([Ik, Tk])
        }
        return Fk
      },
      uF = (kk, Fk) => {
        for (const [Ik, Xk] of kk)
          if (Xk.contains(Fk)) return Ik;
        return "other"
      },
      bF = (kk, Fk, Ik, Xk, Tk, ik, yk, lk) => {
        var ak;
        const qk = kk.children,
          Lk = TF(qk[0].getBoundingClientRect()),
          tk = [{
            element: qk[0],
            rect: Lk
          }];
        if (ik.push(tk[0]), 0 === Lk.width || 0 === Lk.height) return;
        let Zk = 1;
        for (; Zk < qk.length && Math.abs(qk[Zk].getBoundingClientRect().top - Lk.top) < 1;) Zk++;
        const jk = kk => {
            const Fk = {
              element: qk[kk],
              rect: TF(qk[kk].getBoundingClientRect())
            };
            return ik.push(Fk), tk.push(Fk), Fk.rect
          },
          ek = Zk > 1 ? jk(1).left - Lk.left : Lk.width,
          wk = qk.length > Zk ? jk(Zk).top - Lk.top : Lk.height,
          Hk = yk.find(kk, Fk);
        let Jk = null;
        if (Hk) {
          var xk;
          const {
            container: kk,
            box: Fk
          } = Hk;
          Jk = null !== (xk = lk.get(kk)) && void 0 !== xk ? xk : null, Jk || (Jk = {
            top: kk.scrollTop,
            left: kk.scrollLeft,
            box: Fk,
            viewport: Xk,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, lk.set(kk, Jk)), Jk.probes.push(...tk)
        }
        const Pk = Tk.length;
        for (let Vk = 0; Vk < qk.length; Vk++) {
          var Kk, Qk, sk;
          const kk = qk[Vk],
            Fk = QF(Lk, Zk, ek, wk, Vk),
            ik = kk.firstElementChild ? kk.querySelector(zF) : null,
            yk = ik ? vF(ik) : "pending";
          Tk.push({
            key: XF(kk),
            rect: Fk,
            panel: Ik,
            scrollGroup: null !== (Kk = null === Hk || void 0 === Hk ? void 0 : Hk.group) && void 0 !== Kk ? Kk : null,
            visible: lF(Fk, Xk, null === Hk || void 0 === Hk ? void 0 : Hk.box),
            clip: null !== (Qk = null === Hk || void 0 === Hk ? void 0 : Hk.box) && void 0 !== Qk ? Qk : null,
            element: kk,
            kind: yk,
            idx: ik ? EF(ik, yk) : null,
            scrollContainer: null !== (sk = null === Hk || void 0 === Hk ? void 0 : Hk.container) && void 0 !== sk ? sk : null
          })
        }
        null === (ak = Jk) || void 0 === ak || ak.targets.push(...Tk.slice(Pk))
      },
      RF = kk => kk instanceof Element && null !== kk.closest(VF),
      UF = kk => null !== kk.scrollContainer && RF(kk.element);
    class CF {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(kk, Fk, Ik, Xk) {
        this.latched = {
          source: kk,
          focusKey: Fk,
          sinceMs: Ik,
          hold: {
            id: ++this.presses,
            holdMs: Xk
          }
        }
      }
      update(kk, Fk, Ik) {
        const Xk = this.latched;
        return Xk ? kk && Fk === Xk.focusKey ? Ik - Xk.sinceMs < Xk.hold.holdMs ? null : (this.latched = null, Xk.source) : (this.latched = null, null) : null
      }
      getHold() {
        var kk, Fk;
        return null !== (kk = null === (Fk = this.latched) || void 0 === Fk ? void 0 : Fk.hold) && void 0 !== kk ? kk : null
      }
      reset() {
        this.latched = null
      }
    }
    var NF = Ik(8668);
    const cF = {
        kind: "none"
      },
      WF = kk => ({
        x: kk.clientX,
        y: kk.clientY
      }),
      fF = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class BF {
      constructor() {
        this.hovered = cF, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(kk, Fk, Ik, Xk, Tk) {
        const ik = null !== Fk ? {
            kind: "slot",
            idx: Fk
          } : Ik ? {
            kind: "element",
            element: Ik
          } : cF,
          yk = `${Tk}|${Math.round(Xk.clientX)},${Math.round(Xk.clientY)}`,
          lk = (ak = this.hovered, qk = ik, "slot" === ak.kind && "slot" === qk.kind ? ak.idx === qk.idx : "element" === ak.kind && "element" === qk.kind ? ak.element === qk.element : ak.kind === qk.kind);
        var ak, qk;
        if (lk && yk === this.signature) return;
        const Lk = !lk || Tk !== this.holding || "" === this.signature;
        this.signature = yk, this.holding = Tk, this.lastPoint = Xk;
        const tk = this.hovered;
        if (this.hovered = ik, "slot" === ik.kind) return this.leaveElement(tk, null, Xk), void(Lk ? kk.hover(ik.idx, Xk) : kk.moveTo(Xk));
        if (lk) return void("element" === ik.kind ? (0, Yk.p)(ik.element, ik.element, WF(Xk)) : kk.hover(null, Xk));
        kk.hover(null, Xk);
        const Zk = "element" === ik.kind ? ik.element : null;
        "element" === tk.kind ? (0, Yk.p)(tk.element, Zk, WF(Xk)) : Zk && (0, Yk.p)(null, Zk, WF(Xk))
      }
      invalidate() {
        this.signature = ""
      }
      clear(kk) {
        const Fk = this.hovered;
        this.hovered = cF, this.signature = "", "none" !== Fk.kind && (this.leaveElement(Fk, null, this.lastPoint), kk && "slot" === Fk.kind && kk.hover(null, this.lastPoint))
      }
      leaveElement(kk, Fk, Ik) {
        "element" === kk.kind && (0, Yk.p)(kk.element, Fk, WF(Ik))
      }
    }
    class dF {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(kk, Fk) {
        Vk(kk) && (this.lastTiltedMs = Fk)
      }
      allowsClick(kk) {
        return kk - this.lastTiltedMs > 150
      }
    }
    class YF {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(kk) {
        return 0 !== (0, ek.j)(kk, .2).y
      }
      step(kk, Fk, Ik) {
        kk !== this.container && (this.container = kk, this.remainder = 0);
        const Xk = zk(Fk, Ik).y;
        if (0 === Xk) return this.remainder = 0, !1;
        const Tk = this.remainder + Xk,
          ik = Math.trunc(Tk);
        if (this.remainder = Tk - ik, 0 === ik) return !1;
        const yk = kk.scrollTop;
        return kk.scrollTop = yk + ik, kk.scrollTop !== yk
      }
      current() {
        var kk;
        return null !== (kk = this.container) && void 0 !== kk && kk.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var AF = Ik(8673);
    const gF = "[data-pad-inventory-default]",
      mF = ".HotBarGameItemsContainer .InvenItem.Selected",
      hF = {
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
      rF = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      DF = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      MF = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      kI = [...DF, ...MF],
      FI = () => {
        return kk = (0, Lk.j)("inventory"), !kI.map(Lk.j).includes(kk) && !(0, ek.D)(kk);
        var kk
      },
      II = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      XI = (kk, Fk) => {
        const Ik = !(null === Fk || void 0 === Fk || !Fk.isHolding());
        return function(kk, Fk) {
          const Ik = kk.find((kk => kk.visible && Fk(kk)));
          if (Ik) return Ik;
          for (var Xk = arguments.length, Tk = new Array(Xk > 2 ? Xk - 2 : 0), ik = 2; ik < Xk; ik++) Tk[ik - 2] = arguments[ik];
          for (const yk of Tk) {
            const Fk = KF(kk.filter(yk));
            if (Fk) return Fk
          }
          return KF(kk)
        }(kk, (kk => {
          const {
            element: Fk
          } = kk;
          return Fk.matches(gF) || null !== Fk.querySelector(gF) || Fk.matches(mF)
        }), (kk => "slot" === kk.kind ? Ik || null !== kk.idx && !(null === Fk || void 0 === Fk || !Fk.hasItemAt(kk.idx)) : "recipe" === kk.kind || "pending" === kk.kind), (kk => "slot" === kk.kind || "button" === kk.kind))
      };
    class TI {
      constructor() {
        this.set = null, this.observer = new MutationObserver((kk => {
          kk.some((kk => !RF(kk.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = kk => {
          this.scrolled(kk.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const kk = [],
              Fk = [];
            let Ik = !1;
            const Xk = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              Tk = new Map,
              ik = new kF(Fk);
            for (const tk of document.querySelectorAll(sF)) {
              const Lk = pF(tk);
              Ik ||= null !== tk.querySelector(".CreativeCategoryTab");
              for (const Ik of tk.querySelectorAll(`${VF}:first-child`)) {
                const yk = Ik.parentElement;
                bF(yk, tk, uF(Lk, yk), Xk, kk, Fk, ik, Tk)
              }
              for (const Ik of tk.querySelectorAll(zF)) {
                var yk, lk, ak, qk;
                if (Ik.closest(VF) || Ik.closest("[data-pad-ignore]")) continue;
                const Zk = null === (yk = Ik.parentElement) || void 0 === yk ? void 0 : yk.closest(zF);
                if (Zk && tk.contains(Zk)) continue;
                const jk = vF(Ik),
                  ek = EF(Ik, jk);
                if (-1 === ek) continue;
                const wk = TF(Ik.getBoundingClientRect());
                Fk.push({
                  element: Ik,
                  rect: wk
                });
                const Hk = ik.findForParent(Ik.parentElement, tk),
                  Jk = Hk && !Tk.has(Hk.container) ? Hk : null;
                (Jk ? iF(wk) : yF(wk, Xk)) && kk.push({
                  key: XF(Ik),
                  rect: wk,
                  panel: uF(Lk, Ik),
                  scrollGroup: null !== (lk = null === Jk || void 0 === Jk ? void 0 : Jk.group) && void 0 !== lk ? lk : null,
                  visible: lF(wk, Xk, null === Jk || void 0 === Jk ? void 0 : Jk.box),
                  clip: null !== (ak = null === Jk || void 0 === Jk ? void 0 : Jk.box) && void 0 !== ak ? ak : null,
                  element: Ik,
                  kind: jk,
                  idx: ek,
                  scrollContainer: null !== (qk = null === Jk || void 0 === Jk ? void 0 : Jk.container) && void 0 !== qk ? qk : null
                })
              }
            }
            for (const [tk, Zk] of Tk) Zk.holdsOthers = Fk.some((kk => kk.element !== tk && tk.contains(kk.element) && !kk.element.closest(VF)));
            const Lk = new Map;
            for (const tk of kk) Lk.set(tk.element, tk);
            return {
              targets: kk,
              byElement: Lk,
              hasCategories: Ik,
              probes: Fk,
              scrollers: Tk
            }
          })(), this.observer.disconnect();
          for (const kk of document.querySelectorAll(sF)) this.observer.observe(kk, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(kk) {
        !this.set || kk instanceof Element && ((kk, Fk) => {
          const Ik = kk.scrollers.get(Fk);
          if (!Ik || Ik.holdsOthers || Fk.scrollLeft !== Ik.left) return !1;
          const Xk = Fk.scrollTop - Ik.top;
          if (0 === Xk) return !0;
          Ik.top = Fk.scrollTop;
          for (const Tk of Ik.probes) Tk.rect.top -= Xk;
          for (const Tk of Ik.targets) Tk.rect.top -= Xk, Tk.visible = lF(Tk.rect, Ik.viewport, Ik.box);
          return !0
        })(this.set, kk) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((kk => {
          return Fk = kk.rect, Ik = kk.element.getBoundingClientRect(), !(Fk.left === Ik.left && Fk.top === Ik.top && Fk.width === Ik.width && Fk.height === Ik.height);
          var Fk, Ik
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const iI = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(ek.y.map((kk => [kk, (0, wk.e)(ek.B)]))), this.stickRepeat = new ek.d((0, wk.e)(ek.db)), this.pageUpTimer = (0, wk.e)(ek.$), this.pageDownTimer = (0, wk.e)(ek.$), this.stickGate = new Qk, this.pointer = null, this.activePress = null, this.dropLatch = new CF, this.scroller = new YF, this.scrollStickClick = new dF, this.hover = new BF, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new Bk, this.targets = new TI, this.hasCategories = !1, this.wasShowing = !1, this.state = NF.c, this.isActive = () => (0, Dk.i)(), this.isShowing = () => "inventory" === tk.b.getActiveConsumerName() && (0, jk.n)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, Dk.h)()), (0, Dk.i)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var kk;
            this.reopenSlotIdx = null !== (kk = this.focused ? GF(this.focused).idx : null) && void 0 !== kk ? kk : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, Dk.q)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = kk => {
            (0, lk.unstable_batchedUpdates)((() => {
              this.frame(kk)
            }))
          }, this.shouldBlockRealPointer = kk => kk.isTrusted && !(0, Jk.r)(kk) && this.isShowing(), this.noteRealPointer = kk => {
            kk instanceof MouseEvent && kk.isTrusted && !(0, Jk.r)(kk) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = kk.clientX, this.lastRealPointer.y = kk.clientY)
          }, this.wakePressActs = kk => {
            var Fk;
            return kk === (0, Lk.j)("inventoryClose") ? !(null !== (Fk = (0, Dk.h)()) && void 0 !== Fk && Fk.isHolding()) : !(kk !== (0, Lk.j)("inventory") || !FI()) || ((0, ek.D)(kk) ? this.isNavButton(kk) : MF.some((Fk => (0, Lk.j)(Fk) === kk)))
          }
        }
        frame(kk) {
          var Fk, Ik, Xk, Tk, ik;
          const yk = (0, Dk.h)();
          if (!(0, jk.n)()) return void(this.wasShowing && (this.endInteraction(yk), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), kk.wokeDevice && this.focusWakePointer(!(null === yk || void 0 === yk || !yk.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, Zk.k)().inventoryNavigation || this.pointer || this.engagePointer();
          const lk = performance.now();
          this.handleNavigation(kk, lk), this.handlePanels(kk), this.handlePaging(kk, lk), this.handleScroll(kk), this.handleButtons(kk, lk, yk), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const ak = this.ensureFocus(),
            qk = this.focusContext(yk);
          this.ring.show(ak);
          const tk = "slot" === qk.kind ? qk.idx : null,
            ek = null !== (Fk = null === (Ik = qk.actionElement) || void 0 === Ik ? void 0 : Ik.querySelector(".DoCraftItem")) && void 0 !== Fk ? Fk : qk.actionElement;
          this.pointer ? (this.hover.sync(yk, tk, ek, ((kk, Fk) => {
            const Ik = Fk ? fF() : 0;
            return {
              clientX: kk.x - Ik,
              clientY: kk.y - Ik
            }
          })(this.pointer, qk.holding), qk.holding), gk.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: kk.isHeld((0, Lk.j)("inventoryPrimary"))
          })) : ak && this.focused && this.hover.sync(yk, tk, ek, ((kk, Fk) => {
            if (!Fk) return {
              clientX: kk.left + kk.width - 10,
              clientY: kk.top + kk.height / 2 - 10
            };
            const Ik = fF();
            return {
              clientX: kk.left + kk.width / 2 - Ik,
              clientY: kk.top + kk.height / 2 - Ik
            }
          })(ak, qk.holding), qk.holding), this.publishState({
            showing: !0,
            kind: qk.kind,
            holding: qk.holding,
            slotHasItem: qk.slotHasItem,
            pressHints: null !== (Xk = null === (Tk = qk.press) || void 0 === Tk ? void 0 : Tk.hints) && void 0 !== Xk ? Xk : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && UF(this.focusTarget),
            openButtonCloses: FI(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === qk.kind && !(null === (ik = qk.actionElement) || void 0 === ik || !ik.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(kk) {
          var Fk;
          const Ik = (0, jk.b)();
          if (!Ik) return;
          this.targets.revalidate();
          const Xk = this.getTargets().targets;
          this.setFocus(null !== (Fk = PF(Ik, Xk)) && void 0 !== Fk ? Fk : kk ? HF(Ik, Xk, (kk => {
            let {
              rect: Fk
            } = kk;
            const Xk = Math.max(Fk.left - Ik.x, 0, Ik.x - (Fk.left + Fk.width)),
              Tk = Math.max(Fk.top - Ik.y, 0, Ik.y - (Fk.top + Fk.height));
            return Math.hypot(Xk, Tk) <= Math.min(Fk.width, Fk.height) / 2
          })) : null, !1), "cursor" === (0, Zk.k)().inventoryNavigation && (this.pointer = {
            x: Ik.x,
            y: Ik.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const kk = this.lastRealPointer;
          if (!kk || "keyboardMouse" !== ak.d.get("activeInputDevice")) return;
          const Fk = document.elementFromPoint(kk.x, kk.y);
          Fk && (0, Yk.p)(null, Fk, kk)
        }
        endInteraction(kk) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const Fk of this.dpadTimers.values()) Fk.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(kk), this.ring.hide(), this.releasePointer(), this.publishState(NF.c)
        }
        getTargets() {
          const kk = this.targets.get();
          return this.hasCategories = kk.hasCategories, kk
        }
        currentTarget() {
          var kk;
          return this.focused && null !== (kk = this.getTargets().byElement.get(this.focused)) && void 0 !== kk ? kk : null
        }
        readFocusRect() {
          const kk = this.focused;
          if (null === kk || void 0 === kk || !kk.isConnected || !kk.closest(sF)) return null;
          const Fk = kk.getBoundingClientRect();
          return Fk.width > 0 && Fk.height > 0 ? {
            left: Fk.left,
            top: Fk.top,
            width: Fk.width,
            height: Fk.height
          } : null
        }
        ensureFocus() {
          const kk = this.readFocusRect();
          if (kk || this.pointer) return kk;
          const {
            targets: Fk,
            byElement: Ik
          } = this.getTargets();
          let Xk = null,
            Tk = !1;
          if (this.lastRect) Xk = HF(aF(this.lastRect), Fk);
          else {
            var ik, yk;
            const kk = ((kk, Fk) => {
                const Ik = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return Ik ? XI(kk.filter((kk => Ik.contains(kk.element))), Fk) : null
              })(Fk, (0, Dk.h)()),
              lk = Fk.find((kk => null !== kk.idx && kk.idx === this.reopenSlotIdx)),
              ak = document.querySelector(mF);
            Tk = null !== kk || void 0 !== lk, Xk = null !== (ik = null !== (yk = null !== kk && void 0 !== kk ? kk : lk) && void 0 !== yk ? yk : ak && Ik.get(ak)) && void 0 !== ik ? ik : KF(Fk)
          }
          return this.setFocus(Xk, Tk), this.lastRect
        }
        setFocus(kk) {
          let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          kk && (this.focused = kk.element, this.focusTarget = kk, this.panelMemory.set(kk.panel, kk.element), Fk && kk.scrollContainer && ((kk, Fk) => {
            const Ik = kk.getBoundingClientRect(),
              Xk = bk(Fk),
              Tk = Fk.scrollTop;
            return Ik.top < Xk.top ? Fk.scrollTop -= Xk.top - Ik.top : Ik.bottom > Xk.bottom && (Fk.scrollTop += Ik.bottom - Xk.bottom), Fk.scrollTop !== Tk
          })(kk.element, kk.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, Zk.k)().inventoryNavigation) {
              if (this.lastRect) {
                const kk = aF(this.lastRect);
                this.pointer = {
                  x: kk.x,
                  y: kk.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const kk = this.lastRect ? aF(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: kk.x,
            y: kk.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, gk.hide()
        }
        hoverAtPointer() {
          var kk;
          const Fk = PF(this.pointer, this.getTargets().targets);
          this.focusTarget = Fk, (null === Fk || void 0 === Fk ? void 0 : Fk.element) !== this.focused && (this.focused = null !== (kk = null === Fk || void 0 === Fk ? void 0 : Fk.element) && void 0 !== kk ? kk : null, Fk && (this.panelMemory.set(Fk.panel, Fk.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(kk, Fk) {
          const Ik = this.focusTarget,
            Xk = Ik && (0, Zk.k)().cursorMagnetism ? aF(JF(Ik)) : null;
          this.pointer = sk(this.pointer, {
            stick: kk.leftStick,
            moveDeadzone: (0, Zk.k)().moveDeadzone,
            dpad: Fk,
            dtMs: kk.dtMs,
            cursorSpeedPercent: (0, Zk.k)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: Xk
            }
          })
        }
        move(kk) {
          this.targets.revalidate();
          const Fk = this.currentTarget();
          Fk && this.setFocus(wF(Fk, this.getTargets().targets, kk))
        }
        step(kk) {
          const Fk = this.pointer;
          if (Fk && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((kk, Fk, Ik) => {
            var Xk;
            const Tk = {
              key: "",
              rect: {
                left: kk.x,
                top: kk.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (Xk = wF(Tk, Fk, Ik)) && void 0 !== Xk ? Xk : HF(kk, Fk)
          })(Fk, this.getTargets().targets, kk));
          this.move(kk)
        }
        isNavButton(kk) {
          return !DF.some((Fk => (0, Lk.j)(Fk) === kk)) && !(kk === (0, Lk.j)("inventory") && FI())
        }
        handleNavigation(kk, Fk) {
          const Ik = (0, Zk.k)().inventoryNavigation,
            Xk = {
              x: 0,
              y: 0
            };
          let Tk = null;
          for (const ak of ek.y) {
            const ik = this.isNavButton(ak) && kk.isHeld(ak);
            ik && (Xk.x += hF[ak].x, Xk.y += hF[ak].y), this.dpadTimers.get(ak).update(ik, Fk) && "cursor" !== Ik && (Tk ??= ak)
          }
          const ik = this.stickGate.update(kk.leftStick, (0, Zk.k)().moveDeadzone);
          if (Tk && (this.step(Tk), this.stickGate.lock()), "slot" !== Ik) {
            const Fk = ((kk, Fk, Ik, Xk) => "hybrid" !== kk ? "cursor" === kk : !Xk && (Fk || Ik))(Ik, null !== this.pointer, ik, null !== Tk);
            return Fk && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(kk, "cursor" === Ik ? Xk : {
              x: 0,
              y: 0
            }))
          }
          const yk = (0, ek.j)(kk.leftStick, (0, Zk.k)().moveDeadzone),
            lk = this.stickRepeat.update(ik ? (0, ek.hb)(yk) : null, Fk);
          lk && this.move(lk)
        }
        applyCategoryPlace() {
          const kk = this.placeAfterCategory;
          if (!kk) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const Fk = HF(aF(kk.rect), this.getTargets().targets, (Fk => Fk.scrollGroup === kk.scrollGroup));
          this.setFocus(Fk, !1)
        }
        applyFocusRequest() {
          const kk = (0, Dk.q)();
          kk && (this.targets.invalidate(), this.setFocus((0, Dk.e)(this.getTargets().targets, kk)))
        }
        handlePanels(kk) {
          var Fk, Ik, Xk;
          const Tk = kk.wasPressed((0, Lk.j)("inventoryPanelPrevious")),
            ik = kk.wasPressed((0, Lk.j)("inventoryPanelNext"));
          if (!Tk && !ik) return;
          const {
            targets: yk
          } = this.getTargets(), lk = (ak = ((kk, Fk) => {
            const Ik = [];
            for (const Tk of kk) Tk.visible && !Ik.includes(Tk.panel) && Ik.push(Tk.panel);
            const Xk = kk => {
              const Xk = Fk.indexOf(kk);
              return -1 === Xk ? Fk.length + Ik.indexOf(kk) : Xk
            };
            return Ik.sort(((kk, Fk) => Xk(kk) - Xk(Fk)))
          })(yk, oF), qk = null !== (Fk = null === (Ik = this.focusTarget) || void 0 === Ik ? void 0 : Ik.panel) && void 0 !== Fk ? Fk : null, tk = ik ? 1 : -1, 0 === ak.length ? null : ak[qF(null === qk ? -1 : ak.indexOf(qk), ak.length, tk)]);
          var ak, qk, tk;
          if (null === lk) return;
          const Zk = this.panelMemory.get(lk),
            jk = yk.filter((kk => kk.panel === lk)),
            ek = null !== (Xk = jk.find((kk => kk.element === Zk && kk.visible))) && void 0 !== Xk ? Xk : XI(jk, (0, Dk.h)());
          this.setFocus(ek)
        }
        handlePaging(kk, Fk) {
          const Ik = (0, Lk.j)("menuPageUp"),
            Xk = (0, Lk.j)("menuPageDown"),
            Tk = this.pageUpTimer.update(kk.isHeld(Ik), Fk),
            ik = this.pageDownTimer.update(kk.isHeld(Xk), Fk);
          if (!Tk && !ik) return;
          const yk = ik ? 1 : -1;
          if (!kk.wasPressed(ik ? Xk : Ik) && this.hasCategories) return;
          if ((kk => {
              const Fk = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === Fk.length) return !1;
              const Ik = Fk.findIndex((kk => kk.classList.contains("Selected"))),
                Xk = Fk[qF(Ik, Fk.length, kk)];
              return (0, Yk.l)(Xk, (0, Yk.B)(Xk)), !0
            })(yk)) {
            var lk, ak;
            this.targets.invalidate();
            const kk = null !== (lk = null === (ak = this.focusTarget) || void 0 === ak ? void 0 : ak.scrollGroup) && void 0 !== lk ? lk : null,
              Fk = this.readFocusRect();
            return void(this.placeAfterCategory = null !== kk && Fk && !this.pointer ? {
              rect: Fk,
              scrollGroup: kk
            } : null)
          }
          const {
            targets: qk
          } = this.getTargets(), tk = this.currentTarget(), Zk = tk && UF(tk) ? tk : qk.find((kk => UF(kk) && kk.visible));
          if (!Zk) return;
          const jk = ((kk, Fk, Ik, Xk) => {
            if (null === kk.scrollGroup) return null;
            const Tk = aF(kk.rect),
              ik = Tk.x,
              yk = Tk.y + ("Down" === Ik ? Xk : -Xk);
            let lk = null,
              ak = 1 / 0;
            for (const qk of Fk) {
              if (qk.scrollGroup !== kk.scrollGroup || qk.key === kk.key) continue;
              const Fk = aF(qk.rect);
              if ("Down" === Ik ? Fk.y <= Tk.y : Fk.y >= Tk.y) continue;
              const Xk = Math.hypot(Fk.x - ik, Fk.y - yk);
              Xk < ak && (lk = qk, ak = Xk)
            }
            return lk
          })(Zk, qk, yk > 0 ? "Down" : "Up", Zk.scrollContainer.clientHeight);
          this.setFocus(null !== jk && void 0 !== jk ? jk : Zk)
        }
        handleScroll(kk) {
          var Fk, Ik, Xk, Tk, ik, yk;
          if (!this.scroller.isScrolling(kk.rightStick)) return void this.scroller.reset();
          const {
            targets: lk
          } = this.getTargets(), ak = this.pointer, qk = !ak && this.focusTarget && UF(this.focusTarget) ? this.focusTarget.scrollContainer : null, Lk = ak && (null === (Fk = lk.find((kk => kk.clip && xF(kk.clip, ak)))) || void 0 === Fk ? void 0 : Fk.scrollContainer), tk = null !== (Ik = null !== (Xk = null !== (Tk = this.scroller.current()) && void 0 !== Tk ? Tk : Lk) && void 0 !== Xk ? Xk : qk) && void 0 !== Ik ? Ik : null === (ik = lk.find(UF)) || void 0 === ik ? void 0 : ik.scrollContainer;
          if (!tk || !this.scroller.step(tk, kk.rightStick, kk.dtMs)) return;
          this.targets.scrolled(tk);
          const Zk = ak || (null === (yk = this.focusTarget) || void 0 === yk ? void 0 : yk.scrollContainer) !== tk ? null : this.readFocusRect();
          if (!Zk) return;
          const jk = bk(tk),
            ek = aF(Zk);
          if (ek.y < jk.top || ek.y > jk.bottom) {
            const kk = this.focusTarget.scrollGroup,
              Fk = HF(ek, this.getTargets().targets, (Fk => Fk.scrollGroup === kk));
            this.setFocus(Fk, !1)
          }
        }
        focusContext(kk) {
          const {
            kind: Fk,
            idx: Ik
          } = this.focused ? GF(this.focused) : {
            kind: null,
            idx: null
          }, Xk = this.focused ? OF(this.focused) : null, Tk = Xk ? (0, AF.b)(Xk) : null;
          return {
            kind: Fk,
            idx: Ik,
            actionElement: Xk,
            press: Tk,
            hasPress: null !== Tk,
            hasBack: !(null === Tk || void 0 === Tk || !Tk.back),
            holding: kk.isHolding(),
            slotHasItem: null !== Ik && kk.hasItemAt(Ik)
          }
        }
        handleButtons(kk, Fk, Ik) {
          var Xk, Tk;
          if (!this.activePress || kk.isHeld(this.activePress.button) && (Xk = this.activePress.target, Tk = this.focused, null !== Xk.recipe ? nF(Tk).recipe === Xk.recipe : Tk === Xk.element) || this.releasePress(), this.scrollStickClick.update(kk.rightStick, Fk), !this.handleHotbarPick(kk, Ik)) {
            for (const [Xk, Tk] of rF) {
              const ik = (0, Lk.j)(Tk);
              if (!kk.wasPressed(ik) || "openButton" === Xk && !FI()) continue;
              if ("RS" === ik && !this.scrollStickClick.allowsClick(Fk)) continue;
              const yk = this.focusContext(Ik),
                lk = hk(Xk, yk);
              lk && this.runIntent(lk, yk, ik, Ik)
            }
            this.handleDrop(kk, Fk, Ik)
          }
        }
        handleHotbarPick(kk, Fk) {
          const Ik = this.hotbarPick;
          if (!Ik) return !1;
          const Xk = kk.wasPressed((0, Lk.j)("inventoryPrimary")) || kk.wasPressed((0, Lk.j)("inventoryHotbarSwap"));
          if (!Xk && !kk.wasPressed((0, Lk.j)("inventoryClose")) && !Fk.isHolding()) return !(kk.wasPressed((0, Lk.j)("inventory")) && FI());
          const Tk = this.focusTarget;
          Xk && "hotbar" === (null === Tk || void 0 === Tk ? void 0 : Tk.panel) && null !== Tk.idx && Tk.idx !== Ik.idx && (Fk.swapWithHotbar(Tk.idx, Ik.idx), this.afterAction()), this.hotbarPick = null;
          const ik = Ik.element.isConnected ? this.getTargets().byElement.get(Ik.element) : void 0;
          return ik && this.setFocus(ik), !0
        }
        startHotbarPick(kk) {
          var Fk;
          const {
            targets: Ik,
            byElement: Xk
          } = this.getTargets(), Tk = document.querySelector(mF), ik = null !== (Fk = Tk && Xk.get(Tk)) && void 0 !== Fk ? Fk : Ik.find((kk => "hotbar" === kk.panel));
          ik && this.focused && (this.hotbarPick = {
            idx: kk,
            element: this.focused
          }, this.setFocus(ik))
        }
        focusKey() {
          return this.focused ? XF(this.focused) : null
        }
        handleDrop(kk, Fk, Ik) {
          const Xk = (0, Lk.j)("inventoryDrop");
          if (kk.wasPressed(Xk)) {
            const kk = (Tk = this.focusContext(Ik)).holding ? {
              kind: "eq"
            } : "slot" === Tk.kind && Tk.slotHasItem && null !== Tk.idx ? {
              kind: "slot",
              idx: Tk.idx
            } : null;
            return void(kk && (this.dropFrom(kk, !1, Ik), this.dropLatch.press(kk, this.focusKey(), Fk, Hk.b[(0, Zk.k)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var Tk;
          const ik = this.dropLatch.update(kk.isHeld(Xk), this.focusKey(), Fk);
          ik && ((kk, Fk, Ik) => "eq" === kk.kind ? Fk : !Fk && Ik(kk.idx))(ik, Ik.isHolding(), Ik.hasItemAt) && (this.dropFrom(ik, !0, Ik), this.afterAction())
        }
        dropFrom(kk, Fk, Ik) {
          "eq" === kk.kind ? Ik.dropHeld(Fk, this.slotPoint()) : Ik.dropSlot(kk.idx, Fk)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (kk => {
            const Fk = aF(kk);
            return {
              clientX: Fk.x,
              clientY: Fk.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(kk, Fk, Ik, Xk) {
          const Tk = Fk.idx,
            ik = Fk.actionElement;
          switch (ik && II.has(kk) && (0, Jk.y)(ik), kk) {
            case "slotPrimary":
              Xk.primary(Tk, this.slotPoint());
              break;
            case "slotSecondary":
              Xk.secondary(Tk, this.slotPoint());
              break;
            case "slotQuickMove":
              Xk.quickMove(Tk, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(Tk);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(Fk.press, "pressPrimary" === kk ? "primary" : "secondary", Ik);
              break;
            case "click":
              (0, Yk.l)(ik, (0, Yk.B)(ik));
              break;
            case "openKeyboard":
              (0, Yk.O)(ik) && (0, Yk.K)(ik);
              break;
            case "pressBack":
              Fk.press.back();
              break;
            case "cancel":
              Xk.cancel();
              break;
            case "close":
              return this.releasePress(), void Xk.close()
          }
          this.afterAction()
        }
        startPress(kk, Fk, Ik) {
          this.releasePress(), kk.press(Fk) && (this.activePress = {
            handlers: kk,
            button: Ik,
            target: nF(this.focused)
          })
        }
        releasePress() {
          var kk, Fk, Ik;
          null === (kk = this.activePress) || void 0 === kk || null === (Fk = (Ik = kk.handlers).release) || void 0 === Fk || Fk.call(Ik), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(kk) {
          ((kk, Fk) => {
            var Ik, Xk, Tk, ik, yk, lk;
            return kk.showing === Fk.showing && kk.kind === Fk.kind && kk.holding === Fk.holding && kk.slotHasItem === Fk.slotHasItem && (null === (Ik = kk.pressHints) || void 0 === Ik ? void 0 : Ik.primary) === (null === (Xk = Fk.pressHints) || void 0 === Xk ? void 0 : Xk.primary) && (null === (Tk = kk.pressHints) || void 0 === Tk ? void 0 : Tk.secondary) === (null === (ik = Fk.pressHints) || void 0 === ik ? void 0 : ik.secondary) && (null === (yk = kk.pressHints) || void 0 === yk ? void 0 : yk.back) === (null === (lk = Fk.pressHints) || void 0 === lk ? void 0 : lk.back) && kk.hasCategories === Fk.hasCategories && kk.hasList === Fk.hasList && kk.openButtonCloses === Fk.openButtonCloses && kk.steppingSlots === Fk.steppingSlots && kk.hotbarPicking === Fk.hotbarPicking && kk.quickMoveToHotbar === Fk.quickMoveToHotbar && kk.dropStackHold === Fk.dropStackHold
          })(kk, this.state) || (this.state = kk, qk.g.GL(NF.d, kk))
        }
      },
      yI = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var lI = Ik(8677),
      aI = Ik(318),
      qI = Ik(1580),
      LI = Ik(8154);
    const tI = "[data-pad-secondary]",
      ZI = kk => kk instanceof HTMLElement && (0, Mk.n)(kk) && !(0, Mk.p)(kk),
      jI = kk => {
        const Fk = kk.querySelector(tI);
        if (Fk && ZI(Fk)) return Fk;
        for (const Tk of null !== (Ik = null === (Xk = kk.parentElement) || void 0 === Xk ? void 0 : Xk.children) && void 0 !== Ik ? Ik : []) {
          var Ik, Xk;
          if (Tk !== kk && Tk.matches(tI) && ZI(Tk)) return Tk
        }
        return null
      },
      eI = (kk, Fk, Ik, Xk) => Math.max(0, Math.max(kk, Ik) - Math.min(Fk, Xk)),
      wI = (kk, Fk, Ik, Xk) => Math.max(0, Math.min(Fk, Xk) - Math.max(kk, Ik)),
      HI = (kk, Fk, Ik) => {
        const Xk = (kk.left + kk.right) / 2,
          Tk = (kk.top + kk.bottom) / 2,
          ik = (Fk.left + Fk.right) / 2,
          yk = (Fk.top + Fk.bottom) / 2;
        if ("Left" === Ik || "Right" === Ik) {
          const lk = "Right" === Ik ? 1 : -1;
          return {
            forwardGap: "Right" === Ik ? Fk.left - kk.right : kk.left - Fk.right,
            centreForward: (ik - Xk) * lk,
            sidewaysGap: eI(kk.top, kk.bottom, Fk.top, Fk.bottom),
            sidewaysOverlap: wI(kk.top, kk.bottom, Fk.top, Fk.bottom),
            centreSideways: Math.abs(yk - Tk),
            startSideways: Math.abs(Fk.top - kk.top),
            fromSidewaysSize: kk.bottom - kk.top,
            toSidewaysSize: Fk.bottom - Fk.top,
            toLength: Fk.right - Fk.left
          }
        }
        const lk = "Down" === Ik ? 1 : -1;
        return {
          forwardGap: "Down" === Ik ? Fk.top - kk.bottom : kk.top - Fk.bottom,
          centreForward: (yk - Tk) * lk,
          sidewaysGap: eI(kk.left, kk.right, Fk.left, Fk.right),
          sidewaysOverlap: wI(kk.left, kk.right, Fk.left, Fk.right),
          centreSideways: Math.abs(ik - Xk),
          startSideways: Math.abs(Fk.left - kk.left),
          fromSidewaysSize: kk.right - kk.left,
          toSidewaysSize: Fk.right - Fk.left,
          toLength: Fk.bottom - Fk.top
        }
      },
      JI = kk => kk.centreForward > .5 && kk.forwardGap >= -kk.toLength / 2,
      xI = kk => {
        const Fk = kk.sidewaysOverlap > 0 ? 0 : 2 * kk.fromSidewaysSize,
          Ik = kk.fromSidewaysSize > 1.5 * kk.toSidewaysSize ? kk.startSideways : kk.centreSideways;
        return Math.max(0, kk.forwardGap) + 3 * kk.sidewaysGap + Fk + .1 * Ik
      },
      PI = (kk, Fk) => wI(kk.top, kk.bottom, Fk.top, Fk.bottom) > 0 || Fk.bottom - Fk.top > Fk.right - Fk.left,
      KI = (kk, Fk, Ik, Xk, Tk, ik) => {
        const yk = Tk ? sI(kk, Fk, Ik, Tk) : new Set,
          lk = zI(kk, Fk, Ik, yk);
        return lk < 0 && yk.size > 0 && ik ? QI(kk, Fk, Ik, ik) : Xk && lk >= 0 ? VI(kk, Fk, Ik, Xk, lk, yk) : lk
      },
      QI = (kk, Fk, Ik, Xk) => {
        const Tk = new Set,
          ik = zI(kk, Fk, "Up", Tk) >= 0,
          yk = zI(kk, Fk, "Down", Tk) >= 0,
          lk = new Set;
        return Fk.forEach(((Fk, Ik) => {
          const Tk = Fk.top + Fk.bottom < kk.top + kk.bottom;
          Xk[Ik] && !(Tk ? ik : yk) || lk.add(Ik)
        })), zI(kk, Fk, Ik, lk)
      },
      sI = (kk, Fk, Ik, Xk) => {
        const Tk = new Set;
        return "Left" !== Ik && "Right" !== Ik || Fk.forEach(((Fk, Ik) => {
          Xk[Ik] && wI(kk.top, kk.bottom, Fk.top, Fk.bottom) <= 0 && Tk.add(Ik)
        })), Tk
      },
      VI = (kk, Fk, Ik, Xk, Tk, ik) => {
        const yk = HI(kk, Fk[Tk], Ik).forwardGap;
        let lk = Tk,
          ak = Xk[Tk],
          qk = 1 / 0;
        return Fk.forEach(((Fk, Lk) => {
          const tk = Xk[Lk];
          if (ik.has(Lk) || tk < ak || tk === ak && lk === Tk) return;
          const Zk = HI(kk, Fk, Ik);
          if (!JI(Zk) || Zk.forwardGap < 0 || Zk.forwardGap >= yk) return;
          const jk = xI(Zk);
          (tk > ak || jk < qk) && (lk = Lk, ak = tk, qk = jk)
        })), lk
      },
      zI = (kk, Fk, Ik, Xk) => {
        let Tk = -1,
          ik = 1 / 0;
        if (Fk.forEach(((Fk, yk) => {
            const lk = ((kk, Fk, Ik) => {
              const Xk = HI(kk, Fk, Ik);
              if (!JI(Xk)) return null;
              const Tk = Math.max(0, Xk.forwardGap);
              return Xk.sidewaysOverlap <= 0 && Xk.sidewaysGap > 2 * (Tk + 1) ? null : xI(Xk)
            })(kk, Fk, Ik);
            null !== lk && lk < ik && !Xk.has(yk) && (ik = lk, Tk = yk)
          })), Tk < 0) return -1;
        const yk = Fk[Tk],
          lk = HI(kk, yk, Ik).forwardGap;
        let ak = lk,
          qk = Tk;
        return Fk.forEach(((Fk, ik) => {
          if (ik === Tk || Xk.has(ik) || !((kk, Fk, Ik) => {
              const Xk = "Left" === Ik || "Right" === Ik,
                Tk = Xk ? wI(kk.top, kk.bottom, Fk.top, Fk.bottom) : wI(kk.left, kk.right, Fk.left, Fk.right),
                ik = Xk ? Math.min(kk.bottom - kk.top, Fk.bottom - Fk.top) : Math.min(kk.right - kk.left, Fk.right - Fk.left);
              return Tk > 0 && Tk >= ik / 2
            })(Fk, yk, Ik)) return;
          const Lk = HI(kk, Fk, Ik);
          JI(Lk) && Lk.forwardGap + Lk.toLength <= lk + 1 && Lk.forwardGap < ak && (ak = Lk.forwardGap, qk = ik)
        })), qk
      },
      SI = (kk, Fk) => {
        let Ik = -1,
          Xk = 1 / 0;
        return Fk.forEach(((Fk, Tk) => {
          const ik = Math.max(Fk.left - kk.x, 0, kk.x - Fk.right),
            yk = Math.max(Fk.top - kk.y, 0, kk.y - Fk.bottom),
            lk = Math.hypot(ik, yk);
          lk < Xk && (Xk = lk, Ik = Tk)
        })), Ik
      },
      oI = (kk, Fk) => {
        const Ik = Math.min(kk.bottom - kk.top, Fk.bottom - Fk.top) / 2;
        return Math.abs(kk.top - Fk.top) > Ik ? kk.top - Fk.top : kk.left - Fk.left
      },
      vI = kk => {
        let Fk = -1;
        for (let Ik = 0; Ik < kk.length; Ik++)(Fk < 0 || oI(kk[Ik], kk[Fk]) < 0) && (Fk = Ik);
        return Fk
      };
    var EI = Ik(1623),
      OI = Ik(8680),
      nI = Ik(8686);
    const GI = kk => {
        if ("death" !== kk || "inGame" !== ak.d.get("gameState") || "off" === (0, Zk.k)().quickChat || null === (0, EI.c)()) return !1;
        const Fk = (0, Lk.j)("chat");
        return Fk !== (0, Lk.j)("menuConfirm") && Fk !== (0, Lk.j)("menuBack")
      },
      pI = new OI.e;
    var uI = Ik(4261),
      bI = Ik(8691);
    const RI = kk => {
        let Fk = null;
        for (const Ik of kk.querySelectorAll("[data-pad-tabs]"))(0, Mk.n)(Ik) && (!Fk || Number(Ik.dataset.padTabs) < Number(Fk.dataset.padTabs)) && (Fk = Ik);
        return Fk
      },
      UI = (kk, Fk, Ik, Xk) => {
        kk.focusWhenFound((() => {
          const Tk = kk.pickInitial(Fk);
          if (Tk && !Ik.has(Tk) && (null === Xk || void 0 === Xk || !Xk.contains(Tk))) return Tk;
          const ik = ((kk, Fk) => {
              const Ik = Fk => kk.getEnabledCandidates(Fk).filter((kk => !kk.closest("[data-pad-tabs]")));
              for (const Xk of (0, Mk.g)(Fk)) {
                const kk = Ik(Xk);
                if (kk.length > 0) return kk
              }
              return Ik(Fk)
            })(kk, Fk).filter((kk => !Ik.has(kk))),
            yk = vI(ik.map((kk => kk.getBoundingClientRect())));
          return yk >= 0 ? ik[yk] : null
        }), 3e3)
      },
      CI = (kk, Fk, Ik, Xk) => {
        var Tk;
        const ik = ((kk, Fk) => {
          if (0 === kk.length) return null;
          const Ik = kk.findIndex((kk => "true" === kk.dataset.padSelected));
          return Ik < 0 ? Fk > 0 ? kk[0] : kk[kk.length - 1] : kk[(Ik + Fk + kk.length) % kk.length]
        })([...Ik.querySelectorAll("[data-pad-tab]")].filter((kk => (0, Mk.n)(kk) && !(0, Mk.p)(kk))), Xk);
        if (!ik) return;
        const yk = null !== (Tk = null === kk || void 0 === kk ? void 0 : kk.getFocused()) && void 0 !== Tk ? Tk : null,
          lk = !(null === yk || void 0 === yk || !yk.isConnected) && Ik.contains(yk),
          ak = kk && !lk ? new Set(kk.getEnabledCandidates(Fk)) : null;
        (0, Yk.e)(ik), kk && (ak ? UI(kk, Fk, ak, Ik) : kk.setFocus(ik, {
          byUser: !0
        }))
      },
      NI = kk => {
        var Fk;
        const Ik = bk(null !== (Fk = Ek(kk, "x")) && void 0 !== Fk ? Fk : kk),
          Xk = (0, Mk.d)(kk).filter((kk => !(0, Mk.p)(kk))),
          Tk = Xk.filter((kk => Rk(kk.getBoundingClientRect(), Ik)));
        return (Tk.length > 0 ? Tk : Xk).sort(((kk, Fk) => oI(kk.getBoundingClientRect(), Fk.getBoundingClientRect())))
      },
      cI = (kk, Fk, Ik) => {
        const Xk = [...Fk.querySelectorAll("[data-pad-row]")].filter(Mk.n),
          Tk = kk.getFocused(),
          ik = Tk ? Xk.findIndex((kk => kk.contains(Tk))) : -1;
        let yk = 0,
          lk = Ik > 0 ? 0 : Xk.length - 1;
        if (ik >= 0 && Tk) yk = Math.max(0, NI(Xk[ik]).indexOf(Tk)), lk = ik + Ik;
        else if (Tk) {
          const kk = Tk.getBoundingClientRect(),
            Fk = Xk.map((Fk => {
              const Xk = Fk.getBoundingClientRect();
              return Ik > 0 ? Xk.top >= kk.top : Xk.bottom <= kk.bottom
            }));
          lk = Ik > 0 ? Fk.indexOf(!0) : Fk.lastIndexOf(!0)
        }
        for (let ak = lk; ak >= 0 && ak < Xk.length; ak += Ik) {
          const Fk = NI(Xk[ak]);
          if (Fk.length > 0) return void kk.setFocus(Fk[Math.min(yk, Fk.length - 1)], {
            byUser: !0
          })
        }
      },
      WI = (kk, Fk, Ik) => {
        var Xk, Tk;
        const ik = null !== (Xk = null === kk || void 0 === kk ? void 0 : kk.getFocused()) && void 0 !== Xk ? Xk : null,
          yk = null !== ik && void 0 !== ik && ik.closest("[data-pad-row]") ? "x" : "y",
          lk = null !== (Tk = ik ? Ek(ik, yk, Fk) : null) && void 0 !== Tk ? Tk : nk(Fk, yk);
        if (!lk) return;
        const ak = ik ? (0, Yk.B)(ik) : null;
        if (uk(lk, yk, Ik * ("y" === yk ? lk.clientHeight : lk.clientWidth) * .85), !kk || !ak) return;
        const qk = bk(lk),
          Lk = kk.getEnabledCandidates(Fk).filter((kk => lk.contains(kk) && Rk(kk.getBoundingClientRect(), qk))),
          tk = SI(ak, Lk.map((kk => kk.getBoundingClientRect())));
        tk >= 0 && kk.setFocus(Lk[tk], {
          scroll: !1,
          byUser: !0
        })
      };
    let fI = null;
    const BI = (kk, Fk) => {
        var Ik, Xk;
        const Tk = Fk.querySelector("[data-pad-friends-column]"),
          ik = kk.getFocused();
        if (!Tk || !ik || !Tk.contains(ik)) return !1;
        const yk = kk.getEnabledCandidates(Fk).filter((kk => !Tk.contains(kk))),
          lk = SI((0, Yk.B)(ik), yk.map((kk => kk.getBoundingClientRect()))),
          ak = null === (Ik = fI) || void 0 === Ik ? void 0 : Ik.deref();
        return kk.setFocus(null !== ak && void 0 !== ak && ak.isConnected ? ak : null !== (Xk = yk[lk]) && void 0 !== Xk ? Xk : null, {
          byUser: !0
        }), !0
      },
      dI = kk => {
        const Fk = (0, Lk.j)(kk);
        return (0, ek.D)(Fk) || LI.s.some((kk => (0, Lk.j)(kk) === Fk)) ? null : Fk
      },
      YI = (kk, Fk) => {
        const Ik = dI(Fk);
        return null !== Ik && kk.wasPressed(Ik)
      },
      AI = function(kk, Fk, Ik) {
        let Xk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Tk = (kk => {
            var Fk, Ik;
            return null !== (Fk = null === (Ik = RI(kk)) || void 0 === Ik ? void 0 : Ik.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== Fk ? Fk : null
          })(Fk),
          ik = kk && Tk ? new Set(kk.getEnabledCandidates(Fk)) : null;
        (0, lI.b)(), Ik === aI.r.SETTINGS && (0, qI.l)(ak.d.get("openEverythingMenuName")) ? ak.d.set({
          openEverythingMenuName: Ik
        }) : (0, qI.z)(new Event("padMenuShortcut"), Ik, Xk), kk && ik && Tk && UI(kk, Fk, ik, Tk.closest("[data-pad-tabs]"))
      },
      gI = kk => null !== kk.closest(".Dropdown-root") || null !== kk.querySelector(".Dropdown-root.is-open"),
      mI = kk => null !== (0, bI.d)() && "popup" !== kk.layer.kind && !RI(kk.root) && !gI(kk.root),
      hI = (0, wk.e)(ek.$),
      rI = (0, wk.e)(ek.$),
      DI = (kk, Fk, Ik) => {
        if (((kk, Fk) => {
            const Ik = (0, Lk.j)("chat");
            return GI(Fk) && kk.isHeld(Ik) ? "hold" === pI.update(kk.wasPressed(Ik), kk.isHeld(Ik), performance.now(), Hk.b[(0, Zk.k)().tapHoldTime].wheelMs) && (tk.b.consumeButton(Ik), qk.g.GL(nI.p), !0) : (pI.release(), !1)
          })(Fk, Ik.layer.kind)) return !0;
        const Xk = Ik.root;
        for (const [yk, lk] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (Fk.wasPressed((0, Lk.j)(yk))) {
            const Fk = gI(Xk) ? null : RI(Xk);
            if (Fk) CI(kk, Xk, Fk, lk);
            else if (mI(Ik)) {
              var Tk;
              const Fk = kk ? new Set(kk.getEnabledCandidates(Xk)) : null;
              null !== (Tk = (0, bI.d)()) && void 0 !== Tk && Tk(lk) && kk && Fk && UI(kk, Xk, Fk, null)
            } else kk && cI(kk, Xk, lk);
            return !0
          } for (const [yk, lk, ak] of [
            ["menuPageUp", -1, hI],
            ["menuPageDown", 1, rI]
          ]) {
          const Ik = (0, Lk.j)(yk);
          if (Fk.wasPressed(Ik) && ak.reset(), ak.update(Fk.isHeld(Ik), performance.now())) return WI(kk, Xk, lk), !0
        }
        const ik = "popup" === Ik.layer.kind;
        return YI(Fk, "pause") ? (ik || (0, qI.s)() && "menu" !== Ik.layer.kind || AI(kk, Xk, (0, qI.s)() ? aI.r.SETTINGS : (0, uI.d)()), !0) : !!YI(Fk, "leaderboard") && ("home" === Ik.layer.kind ? (kk => {
          const Fk = [...kk.querySelectorAll("[data-pad-notifications]")].find(Mk.n);
          Fk && (0, Yk.e)(Fk)
        })(Xk) : ik || AI(kk, Xk, aI.r.LOBBY_LEADERBOARD, "inGame" === ak.d.get("gameState")), !0)
      },
      MI = (kk, Fk, Ik) => {
        if (DI(kk, Fk, Ik)) return !0;
        const Xk = "home" === Ik.layer.kind;
        if (Fk.wasPressed((0, Lk.j)("menuSecondary"))) {
          const Fk = kk.getFocused(),
            Tk = Fk ? jI(Fk) : null;
          if (Tk) return (0, Yk.e)(Tk), !0;
          if (Xk) {
            const Fk = Ik.root.querySelector("[data-pad-search] input");
            return Fk && (0, Mk.o)(Fk, Ik.root) ? (kk.setFocus(Fk, {
              byUser: !0
            }), (0, Yk.e)(Fk)) : ak.d.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!Xk || !YI(Fk, "inventory")) && (((kk, Fk) => {
          var Ik, Xk;
          const Tk = Fk.querySelector("[data-pad-friends-column]");
          if (!Tk || !(0, Mk.n)(Tk)) return void(0, qI.z)(new Event("padMenuShortcut"), aI.r.SOCIAL);
          if (BI(kk, Fk)) return;
          const ik = null !== (Ik = null === (Xk = Tk.querySelector("[data-pad-friends-start]")) || void 0 === Xk ? void 0 : Xk.getBoundingClientRect().top) && void 0 !== Ik ? Ik : -1 / 0,
            yk = kk.getEnabledCandidates(Tk),
            lk = yk.filter((kk => kk.getBoundingClientRect().top >= ik)),
            ak = lk.length > 0 ? lk : yk,
            qk = vI(ak.map((kk => kk.getBoundingClientRect())));
          kk.setFocus(qk >= 0 ? ak[qk] : null, {
            byUser: !0
          })
        })(kk, Ik.root), !0)
      },
      kX = kk => {
        var Fk, Ik, Xk;
        const Tk = (0, Yk.D)(kk);
        if (null !== Tk) return Tk;
        const ik = (null !== (Fk = null !== (Ik = null !== (Xk = kk.getAttribute("aria-label")) && void 0 !== Xk ? Xk : kk.getAttribute("title")) && void 0 !== Ik ? Ik : kk.textContent) && void 0 !== Fk ? Fk : "").replace(/\s+/g, " ").trim();
        return ik ? `${kk.tagName}:${ik.slice(0,100)}` : null
      };
    class FX {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(kk) {
        const Fk = this.history.indexOf(kk);
        if (Fk >= 0) {
          for (const kk of this.history.splice(Fk + 1)) this.remembered.delete(kk);
          return !0
        }
        return this.remembered.delete(kk), this.history.push(kk), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(kk) {
        this.remembered.delete(kk);
        const Fk = this.history.indexOf(kk);
        Fk >= 0 && this.history.splice(Fk, 1)
      }
      remember(kk, Fk, Ik, Xk) {
        const Tk = kX(Fk),
          ik = (0, Yk.D)(Fk),
          yk = null !== ik && ((kk, Fk) => {
            let Ik = 0;
            for (const Xk of kk.querySelectorAll("[data-pad-key], [href]"))
              if ((Xk.getAttribute("data-pad-key") === Fk || Xk.getAttribute("href") === Fk) && (Ik++, Ik > 1)) return !0;
            return !1
          })(Ik, ik) ? Math.max(0, this.twins(Xk(), ik).indexOf(Fk)) : 0;
        this.remembered.set(kk, {
          element: new WeakRef(Fk),
          identity: Tk,
          ordinal: yk
        })
      }
      has(kk) {
        return this.remembered.has(kk)
      }
      recall(kk, Fk) {
        var Ik, Xk;
        const Tk = this.remembered.get(kk);
        if (!Tk) return null;
        const ik = Tk.element.deref();
        if (ik && Fk.includes(ik)) return ik;
        if (null === Tk.identity) return null;
        const yk = this.twins(Fk, Tk.identity);
        return null !== (Ik = null !== (Xk = yk[Tk.ordinal]) && void 0 !== Xk ? Xk : yk[0]) && void 0 !== Ik ? Ik : null
      }
      twins(kk, Fk) {
        return kk.filter((kk => kX(kk) === Fk))
      }
    }
    var IX = Ik(1263);
    const XX = kk => {
        const Fk = [];
        let Ik = kk;
        for (; Ik && Ik !== document.body;) {
          const kk = getComputedStyle(Ik).zIndex;
          "auto" !== kk && Fk.push(Number(kk) || 0), Ik = Ik.parentElement
        }
        return Fk.reverse()
      },
      TX = (kk, Fk) => {
        const Ik = ((kk, Fk) => {
          const Ik = Math.max(kk.length, Fk.length);
          for (let ik = 0; ik < Ik; ik++) {
            var Xk, Tk;
            const Ik = (null !== (Xk = kk[ik]) && void 0 !== Xk ? Xk : 0) - (null !== (Tk = Fk[ik]) && void 0 !== Tk ? Tk : 0);
            if (0 !== Ik) return Ik
          }
          return 0
        })(XX(kk), XX(Fk));
        if (0 !== Ik) return Ik > 0;
        if (kk.contains(Fk)) return !1;
        if (Fk.contains(kk)) return !0;
        const Xk = kk.compareDocumentPosition(Fk);
        return !!(Xk & Node.DOCUMENT_POSITION_PRECEDING) || !(Xk & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      iX = (kk, Fk) => {
        var Ik;
        return null !== (Ik = TX(kk.root, Fk.root)) && void 0 !== Ik ? Ik : kk.order > Fk.order
      },
      yX = (kk, Fk) => Fk.some((Fk => !Fk.contains(kk) && !kk.contains(Fk) && !0 === TX(Fk, kk)));
    let lX = null,
      aX = null,
      qX = -1;
    const LX = () => {
        var kk;
        const Fk = null === (kk = document.timeline) || void 0 === kk ? void 0 : kk.currentTime,
          Ik = "number" === typeof Fk ? Fk : null;
        if (null !== Ik && Ik === aX && qX === (0, IX.d)()) return lX;
        let Xk = null;
        const Tk = [],
          ik = [...document.querySelectorAll("[data-pad-covers]")].filter(Mk.n);
        for (const yk of (0, IX.e)()) {
          const kk = yk.getRoot(),
            Fk = !!kk && (0, Mk.n)(kk) && !yX(kk, ik);
          if (yk.shown && !Fk && Tk.push(yk), yk.shown = Fk, !kk || !Fk) continue;
          const Ik = {
            layer: yk,
            root: kk,
            order: yk.order
          };
          Xk && !iX(Ik, Xk) || (Xk = Ik)
        }
        lX = Xk, aX = Ik, qX = (0, IX.d)();
        for (const yk of Tk)(0, IX.f)(yk);
        return lX
      },
      tX = () => {
        const kk = LX();
        return !(null === kk || void 0 === kk || !kk.layer.close) && (kk.layer.close(), aX = null, !0)
      },
      ZX = () => {
        var kk, Fk;
        return null !== (kk = null === (Fk = LX()) || void 0 === Fk ? void 0 : Fk.root) && void 0 !== kk ? kk : null
      },
      jX = kk => kk ? {
        ...kk,
        root: ZX()
      } : null;
    let eX = null,
      wX = null,
      HX = (0, Zk.k)().menuNavigation,
      JX = null;
    const xX = new Qk;
    let PX = null;
    qk.g.subscribe(Zk.g, (() => {
      const kk = (0, Zk.k)().menuNavigation;
      kk !== HX && (HX = kk, eX = null, wX = null)
    }));
    const KX = () => {
        var kk;
        return null !== (kk = eX) && void 0 !== kk ? kk : (0, Zk.k)().menuNavigation
      },
      QX = kk => {
        if (SX()) {
          if (JX = jX(kk), "hybrid" === KX()) return xX.lock(), void(wX = wX ? null : ZX());
          eX = "focus" === KX() ? "cursor" : "focus"
        }
      },
      sX = () => {
        const kk = JX;
        return JX = null, kk
      };
    let VX = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const zX = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const Ik = VX.root === kk,
          Xk = Ik ? VX.firstSeenMs : Fk,
          Tk = VX.has || Fk - Xk > 1e3;
        return (!Ik || !Tk || Fk - VX.atMs > 250) && (VX = {
          root: kk,
          firstSeenMs: Xk,
          atMs: Fk,
          has: (0, Mk.h)(kk)
        }), VX.has
      },
      SX = () => {
        const kk = ZX();
        return null !== kk && zX(kk)
      },
      oX = () => {
        const kk = LX();
        return wX && (null === kk || void 0 === kk ? void 0 : kk.root) !== wX && (wX = null), (kk => {
          let {
            mode: Fk,
            hasLayer: Ik,
            hasCandidates: Xk,
            hybridCursorEngaged: Tk
          } = kk;
          return Ik ? "cursor" !== Fk && Xk() ? "hybrid" === Fk && Tk ? "cursor" : "focus" : "cursor" : null
        })({
          mode: KX(),
          hasLayer: null !== kk,
          hasCandidates: () => null !== kk && zX(kk.root),
          hybridCursorEngaged: null !== wX
        })
      },
      vX = () => "hybrid" === KX() && SX(),
      EX = "pad-focused";
    var OX = Ik(4536),
      nX = Ik(5022);
    const GX = "[data-pad-destructive]",
      pX = `${GX}, [data-pad-back]`,
      uX = kk => ({
        rect: kk.getBoundingClientRect(),
        destructive: kk.matches(GX),
        closes: null !== kk.closest("[data-pad-close-button]"),
        unavailable: kk.matches("[data-pad-unavailable]")
      }),
      bX = kk => {
        let {
          destructive: Fk,
          closes: Ik,
          unavailable: Xk
        } = kk;
        return Fk ? Ik ? 2 : 3 : Xk ? 1 : 0
      },
      RX = kk => {
        let Fk = -1;
        for (let Ik = 0; Ik < kk.length; Ik++) {
          if (Fk < 0) {
            Fk = Ik;
            continue
          }
          const Xk = kk[Ik],
            Tk = kk[Fk];
          bX(Xk) === bX(Tk) ? oI(Xk.rect, Tk.rect) < 0 && (Fk = Ik) : bX(Xk) < bX(Tk) && (Fk = Ik)
        }
        return Fk
      },
      UX = "[data-pad-tabs]",
      CX = "[data-pad-tab]",
      NX = (kk, Fk) => {
        const Ik = kk.querySelector(`${CX}[data-pad-selected='true']`);
        return Ik && Fk.includes(Ik) ? Ik : null
      },
      cX = (kk, Fk) => {
        let Ik = Fk;
        for (let Xk = Fk.parentElement; Xk && !Xk.contains(kk); Xk = Xk.parentElement) Ik = Xk;
        return Ik
      };
    class WX {
      constructor() {
        this.contentReturn = null
      }
      redirect(kk, Fk, Ik, Xk) {
        var Tk, ik;
        const yk = kk.closest(UX),
          lk = Fk.closest(UX);
        var ak;
        if (lk && lk !== yk) return yk || (this.contentReturn = new WeakRef(kk)), null !== (ak = NX(lk, Ik)) && void 0 !== ak ? ak : Fk;
        if (!yk || lk) return Fk;
        const qk = cX(kk, Fk),
          Lk = null === (Tk = this.contentReturn) || void 0 === Tk ? void 0 : Tk.deref();
        return Lk && qk.contains(Lk) && Ik.includes(Lk) ? Lk : null !== (ik = this.pickRegionStart(qk, Ek(Fk, "y", Xk), Ik)) && void 0 !== ik ? ik : Fk
      }
      findTabContent(kk, Fk, Ik) {
        const Xk = kk.closest(UX);
        if (!Xk || !kk.matches(CX) || Xk.contains(Fk)) return null;
        const Tk = Fk.closest(UX);
        if (Tk && Number(Tk.dataset.padTabs) <= Number(Xk.dataset.padTabs)) return null;
        const ik = cX(kk, Fk);
        return Ik.some((kk => ik.contains(kk) && !kk.closest(pX))) || !Fk.closest(pX) ? ik : null
      }
      pickContentStart(kk, Fk, Ik) {
        return this.contentReturn = null, this.pickRegionStart(kk, Ek(kk, "y", Ik), Fk)
      }
      pickReplacedContentStart(kk, Fk, Ik, Xk) {
        if (!Fk.contains(kk)) return null;
        const Tk = cX(Fk, kk),
          ik = Ik.filter((kk => Fk.contains(kk) && !Tk.contains(kk) && !kk.closest(pX)));
        return 0 === ik.length ? null : (this.contentReturn = null, this.pickRegionStart(Fk, Ek(ik[0], "y", Xk), ik))
      }
      backToStrip(kk, Fk, Ik) {
        if (kk.closest(UX)) return null;
        const Xk = RI(Ik);
        for (const Tk of Ik.querySelectorAll(UX)) {
          if (Number(Tk.dataset.padTabs) <= 1 || Tk === Xk) continue;
          const ik = NX(Tk, Fk),
            yk = ik ? cX(kk, Tk).parentElement : null;
          if (ik && yk && yk !== Ik && Ik.contains(yk)) return this.contentReturn = new WeakRef(kk), ik
        }
        return null
      }
      pickRegionStart(kk, Fk, Ik) {
        const Xk = bk(Fk),
          Tk = kk => {
            const Fk = Ik.filter((Fk => kk.contains(Fk) && !Fk.closest(UX) && Rk(Fk.getBoundingClientRect(), Xk))),
              Tk = RX(Fk.map(uX));
            return Tk >= 0 ? Fk[Tk] : null
          };
        for (const ik of (0, Mk.g)(kk)) {
          const kk = Tk(ik);
          if (kk) return kk
        }
        for (const ik of kk.querySelectorAll(UX)) {
          const kk = NX(ik, Ik);
          if (kk) return kk
        }
        return Tk(kk)
      }
    }
    const fX = "[data-pad-default-focus], .Dropdown-option.is-selected",
      BX = ".Dropdown-root.is-open > .Dropdown-menu",
      dX = "[data-pad-no-step-in]",
      YX = "[data-pad-tabs]",
      AX = "[data-pad-press-area]",
      gX = kk => {
        let Fk = kk;
        for (let Ik = 0; Fk && Ik <= 4; Ik++, Fk = Fk.parentElement) {
          const Ik = Fk.querySelector(".CircleInfo");
          if (Ik) return Fk === kk || Fk.querySelectorAll(Mk.b).length <= 1 ? Ik : null;
          if (Fk !== kk && Fk.querySelectorAll(Mk.b).length > 1) return null
        }
        return null
      },
      mX = (kk, Fk, Ik) => {
        (0, Yk.p)(kk, Fk, Ik);
        const Xk = null !== kk && void 0 !== kk && kk.isConnected ? gX(kk) : null,
          Tk = gX(Fk);
        Xk !== Tk && (0, Yk.p)(Xk, Tk, Tk ? (0, Yk.B)(Tk) : Ik, {
          leaveBelow: kk,
          enterBelow: Fk
        })
      },
      hX = kk => kk.getBoundingClientRect(),
      rX = (kk, Fk, Ik) => {
        const Xk = new Set(Ik);
        for (let Tk = kk; Tk; Tk = Tk === Fk ? null : Tk.parentElement)
          if (Xk.has(Tk)) return Tk;
        return null
      },
      DX = (kk, Fk) => !kk.root || kk.root === Fk || Fk.matches(BX) && kk.root.contains(Fk);
    const MX = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new FX, this.tabStripNav = new WX, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, wk.e)(ek.q), this.dpadRepeats = new Map(ek.y.map((kk => [kk, (0, wk.e)(ek.B)]))), this.stickRepeat = new ek.d((0, wk.e)(ek.db)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const kk = tk.b.register({
            name: "focus",
            isActive: () => (0, jk.n)() && "focus" === oX(),
            onFrame: kk => {
              this.onFrame(kk)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: kk => (0, tk.e)(kk) || kk === (0, Lk.j)("menuConfirm") && (0, Yk.J)((0, jk.b)())
          }),
          Fk = (0, IX.i)((kk => {
            const Fk = (0, IX.p)(kk);
            null === kk.memoryKey && this.memory.forget(Fk), Fk === this.layerKey && (this.layerKey = null)
          }));
        let Ik = -1 / 0;
        const Xk = yk.e.onFrame((kk => {
            (0, jk.n)() || kk.timestampMs - Ik < 100 || (Ik = kk.timestampMs, LX())
          })),
          Tk = kk => {
            kk.isTrusted && kk.target instanceof Element && yk.e.getActivePad() && this.noteChosenStop(kk.target)
          };
        return document.addEventListener("click", Tk, !0), () => {
          kk(), Fk(), Xk(), document.removeEventListener("click", Tk, !0), this.deactivate()
        }
      }
      noteChosenStop(kk) {
        var Fk, Ik;
        const Xk = LX();
        if (!Xk || !Xk.root.contains(kk)) return;
        const Tk = null !== (Fk = null === (Ik = kk.closest(".Dropdown-root")) || void 0 === Ik ? void 0 : Ik.querySelector(".Dropdown-control")) && void 0 !== Fk ? Fk : kk,
          ik = rX(Tk, Xk.root, this.getEnabledCandidates(Xk.root));
        if (!ik) return;
        const yk = (0, IX.p)(Xk.layer);
        yk === this.layerKey && Xk.root === this.layerRoot || this.beginLayer(Xk, yk), this.wasActive ? this.setFocus(ik, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = ik, this.lastFocusedCentre = (0, Yk.B)(ik), this.rememberFocus(ik), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
      notify() {
        for (const kk of this.listeners) kk()
      }
      deactivate() {
        var kk;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const kk of this.dpadRepeats.values()) kk.reset();
          this.stickRepeat.reset(), null !== (kk = this.focused) && void 0 !== kk && kk.isConnected && mX(this.focused, null, (0, Yk.B)(this.focused)), this.notify()
        }
      }
      setFocus(kk) {
        var Fk;
        let {
          scroll: Ik = !0,
          byUser: Xk = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (Xk && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), kk === this.focused) return;
        const Tk = null !== (Fk = this.focused) && void 0 !== Fk && Fk.isConnected ? this.focused : null;
        if (this.focused = kk, kk) {
          Ik && (kk.classList.add(EX), kk.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), Xk && ((kk, Fk) => {
            const Ik = Fk.closest("[data-pad-friends-column]");
            Ik && kk && !Ik.contains(kk) && (fI = new WeakRef(kk))
          })(Tk, kk);
          const Fk = (0, Yk.B)(kk);
          this.lastFocusedCentre = Fk, this.movedInLayer && this.rememberFocus(kk), mX(Tk, kk, Fk), "false" === kk.getAttribute("aria-pressed") && kk.closest("[data-pad-select-on-focus]") && (0, Yk.e)(kk)
        } else Tk && mX(Tk, null, (0, Yk.B)(Tk));
        this.notify()
      }
      rememberFocus(kk) {
        const Fk = this.layerRoot;
        this.layerKey && Fk && this.memory.remember(this.layerKey, kk, Fk, (() => this.getEnabledCandidates(Fk)))
      }
      noteCursorActivation(kk) {
        const Fk = LX();
        if (!Fk || !Fk.root.contains(kk)) return;
        const Ik = this.getEnabledCandidates(Fk.root),
          Xk = new Set(Ik);
        let Tk = kk;
        for (; Tk && !Xk.has(Tk);) Tk = Tk === Fk.root ? null : Tk.parentElement;
        if (!(Tk instanceof HTMLElement)) return;
        const ik = (0, IX.p)(Fk.layer);
        this.memory.enter(ik), this.memory.remember(ik, Tk, Fk.root, (() => Ik))
      }
      notePageEnteredByCursor(kk) {
        return this.memory.enter(kk)
      }
      recallStop(kk, Fk) {
        return this.findRemembered(kk, Fk)
      }
      focusWhenFound(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: kk,
          untilMs: performance.now() + Fk,
          holdWhile: Ik
        }
      }
      getEnabledCandidates(kk) {
        return (0, Mk.d)(kk).filter((kk => !(0, Mk.p)(kk)))
      }
      onFrame(kk) {
        var Fk;
        const Ik = LX();
        if (!Ik) return;
        const Xk = null !== (Fk = this.findOpenDropdown(Ik)) && void 0 !== Fk ? Fk : Ik,
          Tk = performance.now(),
          ik = (0, IX.p)(Xk.layer);
        if (ik !== this.layerKey || Xk.root !== this.layerRoot) {
          const Fk = this.focused;
          if (null !== this.layerKey && Xk.root === this.layerRoot && Fk && (0, Mk.o)(Fk, Xk.root)) this.continueLayer(ik, Fk), this.wasActive || this.resume(Xk.root, Tk);
          else {
            const Fk = !this.wasActive && !kk.wokeDevice,
              yk = "death" === this.layerKind || Fk,
              lk = this.enterLayer(Xk, ik);
            "popup" !== Xk.layer.kind || Xk !== Ik || lk ? "menu" === Xk.layer.kind && yk && "inGame" === ak.d.get("gameState") && !(0, lI.d)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = Tk + OX.b) : (this.pressGuardExtends = Fk, this.pressGuardUntilMs = Tk + (Fk ? OX.b : yk ? 500 : 250))
          }
        } else this.wasActive || this.resume(Xk.root, Tk);
        if (this.layerKind = Xk.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), kk.wokeDevice && this.focusPointedStop(Xk.root), this.validateFocus(Xk, Tk), Tk < this.pressGuardUntilMs && this.pressGuardExtends && (kk.wasPressed((0, Lk.j)("menuConfirm")) || kk.wasPressed((0, Lk.j)("menuBack"))) && (this.pressGuardUntilMs = Tk + OX.b), Tk >= this.pressGuardUntilMs && this.handleButtons(kk, Xk)) return;
        const yk = "hybrid" === KX();
        if (yk && (kk => {
            const Fk = ZX();
            return Fk !== PX && (PX = Fk, xX.lock()), xX.update(kk, (0, Zk.k)().moveDeadzone)
          })(kk.leftStick)) return lk = this.getHandoff(), JX = jX(lk), wX = ZX(), void tk.b.handOffHeldInput();
        var lk;
        this.handleDirections(kk, Xk, Tk, !yk), this.handleScroll(kk, Xk)
      }
      findOpenDropdown(kk) {
        const Fk = kk.root.querySelector(BX);
        if (!Fk || !(0, Mk.n)(Fk)) return null;
        let Ik = this.dropdownLayers.get(Fk);
        return Ik || (this.dropdownLayerCounter++, Ik = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: kk.layer.kind,
          getRoot: () => Fk,
          close: () => {
            (0, Yk.k)(Fk)
          },
          memoryKey: null
        }, this.dropdownLayers.set(Fk, Ik)), {
          layer: Ik,
          root: Fk,
          order: kk.order
        }
      }
      focusPointedStop(kk) {
        const Fk = (0, jk.b)(),
          Ik = Fk ? document.elementFromPoint(Fk.x, Fk.y) : null;
        if (!Ik || !kk.contains(Ik)) return;
        const Xk = rX(Ik, kk, this.getEnabledCandidates(kk));
        Xk && this.setFocus(Xk, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(kk, Fk) {
        const Ik = this.beginLayer(kk, Fk),
          Xk = sX();
        return Xk && DX(Xk, kk.root) ? (this.takeOver(kk.root, Xk, this.enteredLayerAtMs), Ik) : (this.restoreLayerFocus(kk.root, Ik), Ik)
      }
      beginLayer(kk, Fk) {
        return this.layerKey = Fk, this.layerRoot = kk.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(Fk)
      }
      restoreLayerFocus(kk, Fk) {
        const Ik = Fk && this.layerKey ? this.findRemembered(kk, this.layerKey) : null;
        this.restoredFromMemory = null !== Ik, this.setFocus(null !== Ik && void 0 !== Ik ? Ik : this.pickInitial(kk, {
          waitForContent: !0
        }))
      }
      continueLayer(kk, Fk) {
        this.layerKey = kk;
        const Ik = this.memory.enter(kk);
        this.restoreOnFocusLoss = Ik, this.movedInLayer && !Ik && this.rememberFocus(Fk)
      }
      resume(kk, Fk) {
        var Ik;
        const Xk = sX();
        Xk && DX(Xk, kk) ? this.takeOver(kk, Xk, Fk) : null !== (Ik = this.focused) && void 0 !== Ik && Ik.isConnected && mX(null, this.focused, (0, Yk.B)(this.focused))
      }
      pickPreferred(kk) {
        var Fk;
        return null !== (Fk = this.layerKey ? this.findRemembered(kk, this.layerKey) : null) && void 0 !== Fk ? Fk : this.pickInitial(kk, {
          waitForContent: !0
        })
      }
      findRemembered(kk, Fk) {
        return this.memory.has(Fk) ? this.memory.recall(Fk, this.getEnabledCandidates(kk)) : null
      }
      getHandoff() {
        var kk, Fk, Ik;
        const Xk = null !== (kk = this.focused) && void 0 !== kk && kk.isConnected ? this.focused : null,
          Tk = null !== (Fk = this.layerRoot) && void 0 !== Fk && Fk.isConnected ? this.layerRoot : null;
        return {
          point: Xk ? (0, Yk.B)(Xk) : null !== (Ik = this.lastFocusedCentre) && void 0 !== Ik ? Ik : this.getLayerStartPoint(Tk),
          element: Xk,
          direction: null
        }
      }
      getLayerStartPoint(kk) {
        if (!kk) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const Fk = this.pickInitial(kk, {
          includeDisabled: !0
        });
        return (0, Yk.B)(null !== Fk && void 0 !== Fk ? Fk : kk)
      }
      takeOver(kk, Fk, Ik) {
        const {
          element: Xk,
          direction: Tk,
          point: ik
        } = Fk, yk = Xk instanceof HTMLElement && (0, Mk.o)(Xk, kk) ? Xk : null;
        if (!Tk) {
          const Fk = this.focused;
          return yk ? this.setFocus(yk, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(kk, ik), void(this.focused && this.focused === Fk && this.focused.isConnected && mX(null, this.focused, (0, Yk.B)(this.focused)))
        }
        if (this.dpadRepeats.get(Tk).update(!0, Ik), yk) return this.setFocus(yk, {
          scroll: !1,
          byUser: !0
        }), void this.move(kk, Tk, Ik, !0);
        const lk = this.getEnabledCandidates(kk),
          ak = lk.map(hX),
          qk = KI(new DOMRect(ik.x, ik.y, 0, 0), ak, Tk),
          Lk = qk >= 0 ? qk : SI(ik, ak);
        this.setFocus(Lk >= 0 ? lk[Lk] : this.pickInitial(kk), {
          byUser: !0
        })
      }
      focusNearest(kk, Fk) {
        const Ik = this.getEnabledCandidates(kk),
          Xk = SI(Fk, Ik.map(hX));
        this.setFocus(Xk >= 0 ? Ik[Xk] : this.pickInitial(kk), {
          byUser: !0
        })
      }
      pickDefault(kk) {
        let {
          includeDisabled: Fk = !1,
          exclude: Ik = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Xk = [...kk.querySelectorAll(fX)].filter((Xk => (null === Ik || void 0 === Ik || !Ik.has(Xk)) && (Fk ? (0, Mk.q)(Xk, kk) : (0, Mk.o)(Xk, kk)))),
          Tk = RX(Xk.map(uX));
        return Tk >= 0 ? Xk[Tk] : null
      }
      pickNewAreaStart(kk, Fk) {
        const Ik = [...kk.querySelectorAll(AX)].filter(Mk.n);
        for (const Xk of [...(0, Mk.g)(kk), ...Ik]) {
          if (Fk.has(Xk)) continue;
          const kk = this.getEnabledCandidates(Xk),
            Ik = RX(kk.map(uX));
          if (Ik >= 0) return kk[Ik]
        }
        return null
      }
      pickInitial(kk) {
        let {
          includeDisabled: Fk = !1,
          waitForContent: Ik = !1,
          enteredAtMs: Xk = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Tk = this.pickDefault(kk, {
          includeDisabled: Fk
        });
        if (Tk) return Tk;
        const ik = kk => Fk ? (0, Mk.d)(kk) : this.getEnabledCandidates(kk);
        let yk = [];
        for (const Zk of (0, Mk.g)(kk))
          if (yk = ik(Zk), yk.length > 0) break;
        if (0 === yk.length) {
          if (Ik && performance.now() - Xk < 1e4 && (0, Mk.l)(kk)) return null;
          yk = ik(kk)
        }
        const lk = yk.map(hX),
          ak = bk(null),
          qk = yk.filter(((kk, Fk) => Rk(lk[Fk], ak))),
          Lk = qk.length > 0 ? qk : yk,
          tk = RX(Lk.map(uX));
        return tk >= 0 ? Lk[tk] : null
      }
      validateFocus(kk, Fk) {
        if (this.pendingFocus) {
          var Ik, Xk;
          const Tk = this.pendingFocus.find();
          if (Tk && (0, Mk.o)(Tk, kk.root)) return this.pendingFocus = null, void this.setFocus(Tk, {
            byUser: !0
          });
          Fk > this.pendingFocus.untilMs && (null === (Ik = (Xk = this.pendingFocus).holdWhile) || void 0 === Ik || !Ik.call(Xk)) && (this.pendingFocus = null)
        }
        const Tk = this.focused,
          ik = !!Tk && (0, Mk.o)(Tk, kk.root);
        if (!(!ik && Tk && Tk === this.lastActivated && Fk - this.lastActivatedAtMs < 5e3 && kk.root.contains(Tk) && (0, Mk.n)(Tk) && (0, Mk.p)(Tk))) {
          if (!ik && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = Fk, void this.restoreLayerFocus(kk.root, !0);
          if ((!ik || !this.movedInLayer && !this.scrolledInLayer) && !(Fk - this.lastRefocusCheckMs < (ik ? 200 : 50)))
            if (this.lastRefocusCheckMs = Fk, ik) {
              const Ik = Fk - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(kk.root) : null,
                Xk = null !== Ik && void 0 !== Ik ? Ik : this.restoredFromMemory ? null : this.pickDefault(kk.root);
              Xk && Xk !== Tk && this.setFocus(Xk)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const Fk = this.pendingFocus;
                return this.focusNearest(kk.root, this.lastFocusedCentre), void(this.pendingFocus = Fk)
              }
              this.setFocus(this.pickPreferred(kk.root))
            }
        }
      }
      handleButtons(kk, Fk) {
        if (kk.wasPressed((0, Lk.j)("menuToggleCursor"))) return QX(this.getHandoff()), !0;
        if (kk.wasPressed((0, Lk.j)("menuBack"))) {
          const kk = (0, Yk.k)(Fk.root);
          return kk ? this.setFocus(kk, {
            byUser: !0
          }) : BI(this, Fk.root) || ((0, Yk.g)(Fk.root) ? this.returnToOpener(Fk.root) : this.backToStrip(Fk.root) || tX()), !0
        }
        const Ik = (0, Lk.j)("menuConfirm");
        var Xk, Tk;
        kk.wasPressed(Ik) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (Xk = null === (Tk = this.focused) || void 0 === Tk ? void 0 : Tk.getAttribute("data-pad-repeat")) && void 0 !== Xk ? Xk : null, this.confirmRepeated = kk.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (kk.wasReleased(Ik)) {
          const kk = this.confirmPressedOn;
          if (this.confirmPressedOn = null, kk && !this.confirmRepeated && kk === this.focused && kk.isConnected && !(0, Mk.p)(kk)) {
            const Ik = kk.matches("[data-pad-tab]") ? kk.closest(YX) : null;
            Ik ? this.enterTab(kk, Ik, Fk.root, performance.now()) : this.activate(kk)
          }
          return !0
        }
        return this.repeatConfirm(kk, Ik), MI(this, kk, Fk)
      }
      repeatConfirm(kk, Fk) {
        const Ik = this.confirmPressedOn;
        Ik && null !== this.confirmRepeatKey && kk.isHeld(Fk) && (Ik === this.focused && Ik.isConnected && !(0, Mk.p)(Ik) && Ik.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? Ik.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(Ik)) : this.confirmRepeatKey = null)
      }
      backToStrip(kk) {
        const Fk = this.focused;
        if (!(0, Zk.k)().menuBackToCategories) return !1;
        const Ik = null !== Fk && void 0 !== Fk && Fk.isConnected ? this.tabStripNav.backToStrip(Fk, this.getEnabledCandidates(kk), kk) : null;
        return Ik && this.setFocus(Ik, {
          byUser: !0
        }), null !== Ik
      }
      returnToOpener(kk) {
        const Fk = this.lastActivatedKey;
        Fk && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var Ik;
          return null !== (Ik = this.getEnabledCandidates(kk).find((kk => (0, Yk.D)(kk) === Fk))) && void 0 !== Ik ? Ik : null
        })))
      }
      activate(kk) {
        var Fk;
        if ((0, nX.d)(kk) || (0, Yk.H)(kk)) return;
        this.lastActivatedKey = null !== (Fk = (0, Yk.D)(kk)) && void 0 !== Fk ? Fk : this.lastActivatedKey, this.lastActivated = kk, this.lastActivatedAtMs = performance.now(), this.rememberFocus(kk);
        const Ik = this.layerRoot;
        if (Ik) {
          const Fk = new Set(Ik.querySelectorAll(fX)),
            Xk = new Set(Ik.querySelectorAll(`[data-pad-initial-area], ${AX}`)),
            Tk = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var Tk;
            return (0, Mk.o)(kk, Ik) ? null : null !== (Tk = this.pickDefault(Ik, {
              exclude: Fk
            })) && void 0 !== Tk ? Tk : this.pickNewAreaStart(Ik, Xk)
          }), 5e3, (() => kk.isConnected && (0, Mk.p)(kk) && performance.now() - Tk < 6e4))
        }(0, Yk.e)(kk), (0, Yk.j)(kk)
      }
      handleDirections(kk, Fk, Ik, Xk) {
        const Tk = GI(Fk.layer.kind) ? (0, Lk.j)("chat") : null;
        for (const lk of ek.y) {
          this.dpadRepeats.get(lk).update(kk.isHeld(lk), Ik) && (lk !== Tk || kk.wasPressed(lk)) && this.move(Fk.root, lk, Ik, !0)
        }
        const ik = Xk ? (0, ek.j)(kk.leftStick, (0, Zk.k)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          yk = this.stickRepeat.update((0, ek.hb)(ik), Ik);
        if (yk && this.move(Fk.root, yk, Ik, !0), this.retryMove && Ik >= this.retryMove.atMs) {
          const {
            direction: kk
          } = this.retryMove;
          this.retryMove = null, this.move(Fk.root, kk, Ik, !1)
        }
      }
      move(kk, Fk, Ik, Xk) {
        var Tk;
        let ik = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (Tk = this.tabOpenWait) || void 0 === Tk ? void 0 : Tk.wait) && Fk === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const yk = this.focused;
        if (!yk || !yk.isConnected) {
          const Fk = this.pickInitial(kk);
          return void(Fk && this.setFocus(Fk, {
            byUser: !0
          }))
        }
        const lk = "Left" === Fk || "Right" === Fk,
          ak = lk ? (0, nX.d)(yk) : null;
        if (ak) return void ak.adjust("Left" === Fk ? -1 : 1);
        const qk = kk => null !== kk.closest("[data-pad-friends-column]"),
          Lk = qk(yk),
          tk = hX(yk),
          Zk = lk || yk.closest(YX) ? null : (kk => {
            const Fk = new Map;
            return Ik => {
              const Xk = Ik.closest(YX);
              if (!Xk) return !1;
              let Tk = Fk.get(Xk);
              if (void 0 === Tk) {
                const Ik = hX(Xk);
                Tk = PI(kk, Ik) && (Ik.right <= kk.left || Ik.left >= kk.right), Fk.set(Xk, Tk)
              }
              return Tk
            }
          })(tk),
          jk = null !== yk.closest(dX),
          ek = this.getEnabledCandidates(kk).filter((kk => kk !== yk && (lk || qk(kk) === Lk) && !(null !== Zk && void 0 !== Zk && Zk(kk)) && (jk || !kk.closest(dX)))),
          wk = ek.map(hX),
          Hk = Ek(yk, "y", kk),
          Jk = bk(Hk);
        if (!ik && !Rk(tk, Jk)) {
          const kk = ek.filter(((kk, Fk) => Rk(wk[Fk], Jk)));
          if (kk.length > 0) {
            const Fk = {
              x: Jk.left + Jk.width / 2,
              y: Jk.top + Jk.height / 2
            };
            return void this.setFocus(kk[SI(Fk, kk.map(hX))], {
              byUser: !0
            })
          }
        }
        const xk = lk ? ((kk, Fk, Ik) => {
            const Xk = hX(kk),
              Tk = kk.closest(YX),
              ik = Tk ? hX(Tk) : null;
            return Fk.map(((Fk, yk) => {
              const lk = Ik[yk];
              if (lk.bottom > Xk.top && lk.top < Xk.bottom) return !0;
              const ak = Fk.closest(YX);
              if (Tk && ik) return ak !== Tk && (null !== ak || lk.bottom <= ik.top || lk.top >= ik.bottom);
              if (ak) return !PI(Xk, hX(ak));
              let qk = kk;
              for (let Ik = kk.parentElement; Ik && !Ik.contains(Fk); Ik = Ik.parentElement) qk = Ik;
              const Lk = hX(qk);
              return lk.right > Lk.left && lk.left < Lk.right
            }))
          })(yk, ek, wk) : void 0,
          Pk = lk && !yk.closest(YX) ? (kk => kk.map((kk => !kk.closest(pX))))(ek) : void 0,
          Kk = ((kk, Fk) => {
            const Ik = [];
            for (let Tk = kk; Tk; Tk = Tk.parentElement) Ik.push(Tk);
            const Xk = new Map;
            return Ik.forEach(((kk, Fk) => {
              Xk.set(kk, Ik.length - 1 - Fk)
            })), Fk.map((kk => {
              for (let Fk = kk; Fk; Fk = Fk.parentElement) {
                const kk = Xk.get(Fk);
                if (void 0 !== kk) return kk
              }
              return -1
            }))
          })(yk, ek),
          Qk = lk ? "x" : "y",
          sk = Ek(yk, Qk, kk);
        let Vk = KI(tk, wk, Fk, Kk, xk, Pk);
        if (Vk >= 0 && sk && !sk.contains(ek[Vk])) {
          const kk = ek.flatMap(((kk, Fk) => sk.contains(kk) ? [Fk] : [])),
            Ik = Fk => Fk && kk.map((kk => Fk[kk])),
            Xk = KI(tk, kk.map((kk => wk[kk])), Fk, kk.map((kk => Kk[kk])), Ik(xk), Ik(Pk));
          Vk = Xk >= 0 ? kk[Xk] : Vk
        }
        if (Vk >= 0) return void this.moveTo(yk, ek[Vk], ek, kk, Fk, ik);
        if (!Xk) return;
        const zk = "Right" === Fk || "Down" === Fk ? 1 : -1;
        if (sk && pk(sk, Qk, zk)) {
          const kk = "y" === Qk ? sk.clientHeight : sk.clientWidth;
          uk(sk, Qk, zk * kk * .5), this.retryMove = {
            direction: Fk,
            atMs: Ik + 80
          }
        }
      }
      moveTo(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = this.tabStripNav.findTabContent(kk, Fk, Ik);
        yk && "true" !== kk.dataset.padSelected ? this.openTab(kk, yk, Xk, Tk) : ik && !yk || this.setFocus(this.tabStripNav.redirect(kk, Fk, Ik, Xk), {
          byUser: !0
        })
      }
      openTab(kk, Fk, Ik, Xk) {
        const Tk = Fk.parentElement;
        (0, Yk.e)(kk), this.focusWhenFound((() => "true" !== kk.dataset.padSelected ? null : Fk.isConnected ? this.tabStripNav.pickContentStart(Fk, this.getEnabledCandidates(Ik), Ik) : Tk ? this.tabStripNav.pickReplacedContentStart(kk, Tk, this.getEnabledCandidates(Ik), Ik) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: Xk
        }
      }
      enterTab(kk, Fk, Ik, Xk) {
        this.move(Ik, (kk => {
          const Fk = [...kk.querySelectorAll(CX)].filter((Fk => Fk.closest(UX) === kk));
          if (Fk.length >= 2) {
            const kk = Fk[0].getBoundingClientRect(),
              Ik = Fk[1].getBoundingClientRect();
            return Math.abs(Ik.top - kk.top) > Math.abs(Ik.left - kk.left) ? "Right" : "Down"
          }
          const Ik = kk.getBoundingClientRect();
          return Ik.height > Ik.width ? "Right" : "Down"
        })(Fk), Xk, !1, !0), this.focused !== kk || this.pendingFocus || this.activate(kk)
      }
      handleScroll(kk, Fk) {
        const Ik = (0, ek.j)(kk.rightStick, .2);
        if (0 === Ik.x && 0 === Ik.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const Xk = kk.dtMs / 1e3;
        for (const ik of ["x", "y"]) {
          var Tk;
          const kk = Ik[ik];
          if (0 === kk) continue;
          const yk = null !== (Tk = Ek(this.focused, ik, Fk.root)) && void 0 !== Tk ? Tk : nk(Fk.root, ik);
          if (!yk) continue;
          const lk = Math.sign(kk) * kk * kk * 1500 * Xk + this.scrollRemainder[ik],
            ak = Math.trunc(lk);
          this.scrollRemainder[ik] = lk - ak, 0 !== ak && (uk(yk, ik, ak), this.scrolledInLayer = !0)
        }
      }
    };
    var kT = Ik(8194);
    var FT = Ik(8696);
    const IT = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      XT = {
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
          ...IT,
          minIntervalMs: 1e3
        },
        preview: {
          ...IT,
          minIntervalMs: 0
        }
      };
    const TT = new class {
        constructor(kk) {
          this.deps = kk, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = kk => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", kk))
          }
        }
        play(kk, Fk) {
          const Ik = XT[kk];
          if (!this.deps.isVibrationOn() || Ik.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const Xk = this.lastPlayedMs[kk];
          if (void 0 !== Xk && Fk - Xk < Ik.minIntervalMs) return !1;
          const Tk = this.deps.getActuator();
          if (!Tk) return !1;
          this.lastPlayedMs[kk] = Fk;
          const {
            duration: ik,
            strongMagnitude: yk,
            weakMagnitude: lk
          } = Ik;
          try {
            Tk.playEffect("dual-rumble", {
              duration: ik,
              strongMagnitude: yk,
              weakMagnitude: lk
            }).catch(this.logFailure)
          } catch (ak) {
            this.logFailure(ak)
          }
          return !0
        }
      }({
        getActuator: () => (kk => {
          const Fk = null === kk || void 0 === kk ? void 0 : kk.vibrationActuator;
          return "function" === typeof(null === Fk || void 0 === Fk ? void 0 : Fk.playEffect) ? Fk : null
        })(yk.e.getActiveGamepad()),
        isVibrationOn: () => (0, Zk.k)().vibration,
        isPadInUse: jk.n
      }),
      iT = kk => {
        TT.play(kk, performance.now())
      };
    var yT = Ik(8199),
      lT = Ik(2837),
      aT = Ik(111),
      qT = Ik(41),
      LT = Ik(667);
    class tT {
      constructor(kk) {
        this.deps = kk
      }
      check() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const Fk = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!Fk) return "skipped";
        const Ik = kk ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === Ik || this.deps.readReportedVisitId() === Ik ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(Ik), this.deps.Mj(Fk, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const ZT = "controllerUsageReportedVisit";
    var jT = Ik(1324),
      eT = Ik(1665),
      wT = Ik(646),
      HT = Ik(1402),
      JT = Ik(1241);
    const xT = kk => ({
        translationKey: `controller:${kk}`
      }),
      PT = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: xT("padButtonView"),
        Menu: xT("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: xT("padButtonDpadUp"),
        Down: xT("padButtonDpadDown"),
        Left: xT("padButtonDpadLeft"),
        Right: xT("padButtonDpadRight"),
        Home: xT("padButtonHome"),
        LeftStick: xT("padButtonLeftStick"),
        RightStick: xT("padButtonRightStick")
      },
      KT = {
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
          View: xT("padButtonCreate"),
          Menu: xT("padButtonOptions")
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
      QT = (kk, Fk) => {
        var Ik;
        const Xk = null !== (Ik = KT[kk][Fk]) && void 0 !== Ik ? Ik : PT[Fk];
        return "string" === typeof Xk ? Xk : (0, Tk.w)(JT.d.get().getCurrentLanguageCode(), Xk.translationKey)
      },
      sT = kk => {
        let {
          glyph: Fk,
          family: Ik,
          className: Xk
        } = kk;
        const Tk = (0, jk.I)(),
          ik = null !== Ik && void 0 !== Ik ? Ik : Tk,
          yk = (0, yT.i)(ik, Fk);
        return (0, ck.jsx)("span", {
          className: Nk()("ControllerGlyph", Xk),
          role: "img",
          "aria-label": QT(ik, Fk),
          style: {
            "--pad-glyph-mask": `url(${yk})`,
            "--pad-glyph-aspect": (0, yT.e)(ik, Fk)
          }
        })
      };
    var VT = Ik(1849);
    const zT = kk => {
      let {
        action: Fk
      } = kk;
      const {
        t: Ik
      } = (0, Tk.y)();
      switch (Fk.kind) {
        case "reload":
          return (0, ck.jsx)("span", {
            children: Ik("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, ck.jsx)(VT.c, {
            text: Fk.description ? [{
              icon: Fk.icon
            }, ` ${Fk.description}`] : [{
              icon: Fk.icon
            }]
          });
        case "touchButton":
          return (0, ck.jsx)(VT.c, {
            text: Fk.label
          })
      }
    };
    var ST = Ik(8703);
    const oT = kk => {
      let {
        hold: Fk
      } = kk;
      return (0, ck.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${Fk.holdMs}ms`
        },
        children: (0, ck.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, Fk.id)
    };
    var vT = Ik(8720),
      ET = Ik(8728),
      OT = Ik(8734),
      nT = Ik(8715);
    const GT = () => {
        const {
          gameState: kk
        } = (0, ak.j)(["gameState"]), Fk = (0, jk.E)(), [Xk, Tk] = (0, Uk.useState)(!1), [ik, yk] = (0, Uk.useState)(!1);
        return (0, Uk.useEffect)((() => {
          "inGame" === kk && Tk(!0)
        }), [kk]), (0, Uk.useEffect)((() => {
          if (!Xk) return;
          let kk = null,
            Fk = !1;
          return (wT.x ? Promise.all([Ik.e(72), Ik.e(89), Ik.e(269), Ik.e(189), Ik.e(224), Ik.e(223), Ik.e(88)]).then((() => Ik(40542))).then((kk => kk.startWasmPadGameplay)) : Promise.all([Ik.e(72), Ik.e(232), Ik.e(231), Ik.e(96), Ik.e(75), Ik.e(74), Ik.e(73), Ik.e(185), Ik.e(228), Ik.e(77), Ik.e(89), Ik.e(186), Ik.e(222), Ik.e(95), Ik.e(225), Ik.e(240), Ik.e(120), Ik.e(211), Ik.e(86), Ik.e(241), Ik.e(76), Ik.e(119), Ik.e(242), Ik.e(224), Ik.e(158)]).then((() => Ik(40677))).then((kk => kk.startPadGameplay))).then((Ik => {
            Fk || (kk = Ik())
          })).catch((kk => {
            console.error("Pad gameplay failed to load", kk), Fk || yk(!0)
          })), () => {
            var Ik;
            Fk = !0, null === (Ik = kk) || void 0 === Ik || Ik()
          }
        }), [Xk]), (0, Uk.useEffect)((() => {
          ik && Fk && (yk(!1), jT.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((kk => {
            !0 === kk && (0, eT.reloadBloxd)()
          })))
        }), [ik, Fk]), (0, ck.jsxs)(ck.Fragment, {
          children: [(0, ck.jsx)(pT, {}), (0, ck.jsx)(uT, {}), (0, ck.jsx)(bT, {})]
        })
      },
      pT = () => {
        const {
          t: kk
        } = (0, Tk.y)(), Fk = (0, jk.E)(), {
          gameState: Ik,
          isUiHidden: Xk
        } = (0, ak.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: ik
        } = (0, Zk.s)(), yk = (0, ST.j)(), lk = (0, ST.l)(), [qk, tk] = (0, Uk.useState)(OT.d);
        return (0, HT.d)(nT.p, tk), !Fk || ik || Xk || "inGame" !== Ik || !yk && !qk ? null : (0, ck.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [yk && (0, ck.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, ck.jsx)(sT, {
              glyph: (0, Lk.j)("actionButton")
            }), (0, ck.jsx)(zT, {
              action: yk
            }), lk && (0, ck.jsx)("span", {
              className: "PadActionHintMore",
              children: kk("controller:gameplayActionWheelHint")
            })]
          }), qk && (0, ck.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, ck.jsx)(sT, {
              glyph: (0, Lk.j)("pickBlock")
            }), (0, ck.jsx)("span", {
              children: kk("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      uT = () => {
        const {
          t: kk
        } = (0, Tk.y)(), Fk = (0, jk.E)(), {
          gameState: Ik,
          isUiHidden: Xk
        } = (0, ak.j)(["gameState", "isUiHidden"]), [ik, yk] = (0, Uk.useState)(vT.d);
        return (0, HT.d)(nT.n, yk), Fk && !Xk && "inGame" === Ik && ik ? (0, ck.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, ck.jsx)("span", {
            children: kk("controller:gameplayDropStack")
          }), (0, ck.jsx)(oT, {
            hold: ik
          })]
        }) : null
      },
      bT = () => {
        const {
          t: kk
        } = (0, Tk.y)(), Fk = (0, jk.E)(), {
          gameState: Ik,
          isUiHidden: Xk
        } = (0, ak.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: ik
        } = (0, Zk.s)(), [yk, lk] = (0, Uk.useState)(ET.b);
        return (0, HT.d)(nT.k, lk), Fk && !Xk && "inGame" === Ik && yk ? (0, ck.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!ik && (0, ck.jsx)(sT, {
            glyph: (0, Lk.j)("attack")
          }), (0, ck.jsx)("span", {
            children: kk("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var RT = Ik(8743),
      UT = Ik(1894),
      CT = Ik(2349),
      NT = Ik(8176);
    const cT = kk => kk && !(0, RT.d)(UT.e.get("shopInfo")),
      WT = () => {
        const kk = "inGame" === (0, ak.j)(["gameState"]).gameState;
        return (0, CT.g)("shopInfo", (() => {
          (0, NT.j)(cT(kk))
        })), (0, Uk.useEffect)((() => {
          (0, NT.j)(cT(kk))
        }), [kk]), null
      },
      fT = () => {
        const {
          t: kk
        } = (0, Tk.y)(), {
          hideButtonHints: Fk
        } = (0, Zk.s)();
        (0, jk.I)();
        const Ik = (0, NF.k)();
        return (0, Uk.useEffect)((() => (() => {
          const kk = tk.b.register({
              name: "inventory",
              isActive: iI.isActive,
              onFrame: iI.onFrame,
              onDeactivate: iI.onDeactivate,
              wakePressActs: iI.wakePressActs
            }),
            Fk = kk => {
              iI.noteRealPointer(kk), iI.shouldBlockRealPointer(kk) && kk.stopPropagation()
            };
          for (const yk of yI) window.addEventListener(yk, Fk, !0);
          const Ik = (0, Dk.j)((() => {
              "inventory" !== tk.b.getActiveConsumerName() && iI.forgetSurface()
            })),
            Xk = kk => {
              const Fk = kk.target;
              (0, jk.n)() && (0, mk.j)(Fk) && Fk.closest(sF) && (0, Dk.i)() && (0, Dk.m)(Fk)
            };
          document.addEventListener("focusout", Xk, !0);
          const {
            invalidate: Tk,
            onScroll: ik
          } = iI.targets;
          return document.addEventListener("scroll", ik, !0), window.addEventListener("resize", Tk), () => {
            kk(), Ik();
            for (const kk of yI) window.removeEventListener(kk, Fk, !0);
            document.removeEventListener("scroll", ik, !0), document.removeEventListener("focusout", Xk, !0), window.removeEventListener("resize", Tk), iI.targets.disconnect()
          }
        })()), []), (0, ck.jsxs)(ck.Fragment, {
          children: [(0, ck.jsx)(dk, {
            placer: iI.ring,
            className: "InventorySlotCursorRing"
          }), Ik.showing && !Fk && (0, ck.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: rk(Ik).map((Fk => {
              let {
                actions: Xk,
                labelKey: Tk
              } = Fk;
              return (0, ck.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [Xk.map((kk => (0, ck.jsx)(sT, {
                  glyph: (0, Lk.j)(kk)
                }, kk))), (0, ck.jsx)("span", {
                  children: kk(`controller:${Tk}`)
                }), "inventoryDrop" === Tk && Ik.dropStackHold && (0, ck.jsx)(oT, {
                  hold: Ik.dropStackHold
                })]
              }, Tk)
            }))
          })]
        })
      },
      BT = [{
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
      dT = kk => Array.from(kk).map((kk => ({
        type: "char",
        char: kk,
        width: 1
      }))),
      YT = function(kk) {
        return {
          type: "command",
          command: kk,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      AT = [YT("page", 2), YT("otherPage"), YT("caretLeft"), YT("space", 3), YT("caretRight"), YT("close", 1.5), YT("submit", 1.5)],
      gT = [YT("page", 2), YT("otherPage"), YT("caretLeft"), YT("space", 2), YT("caretRight"), YT("newline"), YT("close", 1.5), YT("submit", 1.5)],
      mT = [
        [...dT("1234567890"), YT("backspace")], dT("qwertyuiop/"), dT("asdfghjkl'?"), [YT("shift", 2), ...dT("zxcvbnm,.")]
      ],
      hT = [
        [...dT("1234567890"), YT("backspace")], dT("!@#$%^&*()/"), dT('-_=+[]{};:"'), dT("~`|\\<>'\u20ac\xa3,.")
      ],
      rT = {
        letters: mT,
        accents: [
          [...dT("1234567890"), YT("backspace")], dT("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), dT("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [YT("shift", 2), ...dT("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: hT
      },
      DT = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      MT = (kk, Fk) => "letters" === kk ? Fk ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === kk ? "symbols" : "accents"
      },
      ki = function(kk, Fk) {
        const Ik = ((kk, Fk) => [...rT[kk], Fk ? gT : AT])(kk, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === Fk) return Ik;
        const Xk = Math.min(2, Fi(Ik[0]) / Fk);
        return [Array.from({
          length: Fk
        }, ((kk, Fk) => ({
          type: "phrase",
          phraseIndex: Fk,
          width: Xk
        }))), ...Ik]
      },
      Fi = kk => kk.reduce(((kk, Fk) => kk + Fk.width), 0),
      Ii = kk => Math.max(...kk.map(Fi)),
      Xi = (kk, Fk) => {
        const Ik = kk[Fk.row];
        let Xk = (Ii(kk) - Fi(Ik)) / 2;
        for (let Tk = 0; Tk < Fk.col; Tk++) Xk += Ik[Tk].width;
        return Xk + Ik[Fk.col].width / 2
      },
      Ti = (kk, Fk, Ik) => {
        let Xk = 0,
          Tk = 1 / 0;
        for (let ik = 0; ik < kk[Fk].length; ik++) {
          const yk = Math.abs(Xi(kk, {
            row: Fk,
            col: ik
          }) - Ik);
          yk < Tk - 1e-9 && (Xk = ik, Tk = yk)
        }
        return Xk
      },
      ii = (kk, Fk) => {
        const Ik = Math.max(0, Math.min(kk.length - 1, Fk.row));
        return {
          row: Ik,
          col: Math.max(0, Math.min(kk[Ik].length - 1, Fk.col))
        }
      },
      yi = (kk, Fk, Ik) => "once" === kk && Fk - Ik <= 400 ? "caps" : "off" === kk ? "once" : "off",
      li = (kk, Fk) => "once" === kk && (kk => kk.toLowerCase() !== kk.toUpperCase())(Fk) ? "off" : kk,
      ai = (kk, Fk, Ik) => {
        if ("symbols" === Fk || "off" === Ik) return kk;
        const Xk = kk.toUpperCase();
        return 1 === Xk.length ? Xk : kk
      };
    var qi = Ik(8622);
    const Li = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const ti = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(kk) {
          return !(kk - this.lastSendMs < 2e3) && (this.lastSendMs = kk, !0)
        }
      },
      Zi = {
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
      ji = ["Hq", "nameTag"],
      ei = kk => {
        const Fk = kk.target instanceof HTMLTextAreaElement && !ji.includes(kk.kind);
        return ki(kk.page, "chat" === kk.kind ? Li.length : 0, Fk)
      },
      wi = kk => {
        const Fk = kk.getBoundingClientRect(),
          Ik = window.innerHeight,
          Xk = Fk.top + Fk.height / 2 < Ik / 2 ? "bottom" : "top",
          Tk = "bottom" === Xk ? Ik - Fk.bottom - 6 : Fk.top - 6;
        return {
          placement: Xk,
          maxHeightPx: Math.min(.46 * Ik, Math.max(.3 * Ik, Tk))
        }
      },
      Hi = kk => {
        (0, EI.g)(kk) ? (0, EI.c)().close(): (MX.noteChosenStop(kk), kk.blur())
      };
    class Ji {
      constructor(kk) {
        this.host = kk, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(kk, Fk) {
        this.phraseTexts = kk, this.phrasesFill = Fk
      }
      pressKey(kk) {
        const Fk = this.host.getState(),
          Ik = ei(Fk),
          Xk = Ik[kk.row][kk.col];
        this.host.setState({
          ...Fk,
          focus: kk,
          preferredX: Xi(Ik, kk)
        }), "char" === Xk.type ? this.typeChar(Xk.char) : "command" === Xk.type ? this.runCommand(Xk.command) : this.sendPhrase(Xk.phraseIndex)
      }
      runCommand(kk) {
        const Fk = this.host.getState();
        switch (kk) {
          case "backspace":
            (0, mk.c)(Fk.target);
            break;
          case "space":
            (0, mk.f)(Fk.target, " ");
            break;
          case "newline":
            (0, mk.f)(Fk.target, "\n");
            break;
          case "caretLeft":
            (0, mk.n)(Fk.target, -1);
            break;
          case "caretRight":
            (0, mk.n)(Fk.target, 1);
            break;
          case "shift": {
            const kk = performance.now();
            this.host.setState({
              ...Fk,
              shift: yi(Fk.shift, kk, this.lastShiftPressMs)
            }), this.lastShiftPressMs = kk;
            break
          }
          case "page":
          case "otherPage": {
            const Ik = MT(Fk.page, Fk.accentsFirst)[kk];
            this.host.setState({
              ...Fk,
              page: Ik,
              focus: ii(ei({
                ...Fk,
                page: Ik
              }), Fk.focus)
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
            (0, EI.g)(Fk.target) && (0, EI.c)().selectNextChannel()
        }
      }
      submit() {
        var kk, Fk;
        const {
          target: Ik
        } = this.host.getState();
        this.host.hide(), (0, EI.g)(Ik) ? (0, EI.c)().submit() : (MX.noteChosenStop(Ik), null === (kk = (Fk = (0, EI.f)(Ik)).submit) || void 0 === kk || kk.call(Fk), document.activeElement === Ik && Ik.blur())
      }
      close() {
        const {
          target: kk
        } = this.host.getState();
        this.host.hide(), Hi(kk)
      }
      typeChar(kk) {
        const {
          target: Fk,
          page: Ik,
          shift: Xk
        } = this.host.getState();
        (0, mk.f)(Fk, ai(kk, Ik, Xk)), this.host.setState({
          ...this.host.getState(),
          shift: li(Xk, kk)
        })
      }
      sendPhrase(kk) {
        if (this.phrasesFill) {
          const {
            target: Fk
          } = this.host.getState(), Ik = this.phraseTexts[kk];
          Ik && (Fk.setSelectionRange(0, Fk.value.length), (0, mk.f)(Fk, Ik))
        } else ti.claim(performance.now()) && (this.host.hide(), (0, EI.c)().sendLine(this.phraseTexts[kk]))
      }
    }
    var xi = Ik(8645);
    const Pi = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      Ki = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class Qi {
      constructor(kk, Fk) {
        this.host = kk, this.editor = Fk, this.lastDirection = null, this.navRepeat = new ek.d((0, wk.e)(Pi)), this.commandRepeats = new Map(BT.filter((kk => {
          let {
            repeats: Fk
          } = kk;
          return Fk
        })).map((kk => {
          let {
            command: Fk
          } = kk;
          return [Fk, (0, wk.e)(Ki)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const kk of this.commandRepeats.values()) kk.reset()
      }
      onVisibleFrame(kk) {
        const Fk = performance.now();
        for (const {
            command: Tk,
            action: ik
          }
          of BT) {
          const Ik = (0, Lk.j)(ik),
            Xk = this.commandRepeats.get(Tk);
          if ((Xk ? Xk.update(kk.isHeld(Ik), Fk) : kk.wasPressed(Ik)) && (this.editor.runCommand(Tk), !this.host.getState().visible)) return
        }
        if (kk.wasPressed((0, Lk.j)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const Ik = this.readNavDirection(kk);
        this.lastDirection = Ik;
        const Xk = this.navRepeat.update(Ik, Fk);
        Xk && this.navigate(Xk)
      }
      onHiddenFrame(kk, Fk) {
        var Ik;
        if (kk.wasPressed((0, Lk.j)("keyboardClose"))) return void Hi(Fk);
        const Xk = (0, Lk.j)("keyboardType");
        if (kk.wasPressed(Xk)) return tk.b.consumeButton(Xk), void this.host.open(Fk);
        const Tk = this.readNavDirection(kk),
          ik = null !== Tk && Tk !== this.lastDirection;
        if (this.lastDirection = Tk, !ik || (0, EI.g)(Fk)) return;
        const yk = (null === (Ik = LX()) || void 0 === Ik ? void 0 : Ik.root.contains(Fk)) || null !== Fk.closest(".EntireInventoryWrapper");
        Hi(Fk), yk && tk.b.handOffHeldInput()
      }
      navigate(kk) {
        const Fk = this.host.getState();
        if ("Up" === kk && 0 === Fk.focus.row && "chat" === Fk.kind) return (0, EI.c)().stepHistory(), void this.host.setState({
          ...Fk
        });
        const Ik = ((kk, Fk, Ik, Xk) => {
          if ("Left" === Ik || "Right" === Ik) {
            const Xk = kk[Fk.row].length,
              Tk = (Fk.col + ("Right" === Ik ? 1 : -1) + Xk) % Xk,
              ik = {
                row: Fk.row,
                col: Tk
              };
            return {
              pos: ik,
              preferredX: Xi(kk, ik)
            }
          }
          const Tk = (Fk.row + ("Down" === Ik ? 1 : -1) + kk.length) % kk.length;
          return {
            pos: {
              row: Tk,
              col: Ti(kk, Tk, Xk)
            },
            preferredX: Xk
          }
        })(ei(Fk), Fk.focus, kk, Fk.preferredX);
        this.host.setState({
          ...Fk,
          focus: Ik.pos,
          preferredX: Ik.preferredX
        })
      }
      readNavDirection(kk) {
        for (const Fk of ek.y)
          if (kk.isHeld(Fk)) return Fk;
        return (0, ek.hb)((0, ek.j)(kk.leftStick, (0, Zk.k)().moveDeadzone))
      }
    }
    const si = ["Up", "Down", "Left", "Right"],
      Vi = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const zi = new class {
      constructor() {
        this.state = Zi, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new Ji(this), this.padInput = new Qi(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(kk) {
        const Fk = kk.visible !== this.state.visible;
        this.state = kk;
        for (const Ik of this.listeners) Ik();
        Fk && qk.g.GL(xi.b, kk.visible)
      }
      subscribe(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
      install() {
        const kk = tk.b.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, mk.j)(document.activeElement),
            onFrame: kk => {
              this.onFrame(kk)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: kk => si.includes(kk) || !this.state.visible && kk === (0, Lk.j)("keyboardType")
          }),
          Fk = kk => {
            const Fk = kk.target;
            (0, mk.j)(Fk) && (Fk === this.pendingChatInput || (0, jk.n)() ? this.open(Fk) : this.state.visible && Fk !== this.state.target && (this.ownedField = null, this.hide()))
          },
          Ik = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          Xk = kk => {
            kk.isTrusted && this.state.visible && (kk => !kk.repeat && !Vi.has(kk.key) && !(0, qi.b)(kk.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(kk.key))(kk) && this.hide()
          },
          Tk = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...wi(this.state.target)
            })
          };
        document.addEventListener("focusin", Fk, !0), document.addEventListener("focusout", Ik, !0), window.addEventListener("keydown", Xk, !0), window.addEventListener("resize", Tk);
        const ik = qk.g.subscribe(nT.d, (() => {
            this.openChat()
          })),
          yk = qk.g.subscribe(xi.d, (kk => {
            this.openForField(kk)
          }));
        return () => {
          kk(), document.removeEventListener("focusin", Fk, !0), document.removeEventListener("focusout", Ik, !0), window.removeEventListener("keydown", Xk, !0), window.removeEventListener("resize", Tk), qk.g.unsubscribe(ik), qk.g.unsubscribe(yk), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const kk = (0, EI.c)();
        kk ? document.activeElement !== kk.input ? (this.clearPendingChat(), this.pendingChatInput = kk.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), kk.open()) : this.open(kk.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(kk) {
        (0, mk.j)(kk) ? (document.activeElement !== kk && kk.focus(), document.activeElement === kk && this.open(kk)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", kk)
      }
      open(kk) {
        var Fk;
        if (this.clearPendingChat(), this.ownedField = kk, this.state.visible && this.state.target === kk) return;
        this.restoreInputMode(), (0, mk.r)(kk), this.savedInputMode = kk.getAttribute("inputmode"), kk.setAttribute("inputmode", "none");
        const Ik = {
          ...Zi,
          visible: !0,
          target: kk,
          kind: (0, EI.g)(kk) ? "chat" : null !== (Fk = (0, EI.f)(kk).kind) && void 0 !== Fk ? Fk : null,
          accentsFirst: (Xk = JT.d.get().getCurrentLanguageCode(), DT.has(Xk)),
          ...wi(kk)
        };
        var Xk;
        const Tk = ei(Ik),
          ik = ((kk, Fk) => {
            for (let Ik = 0; Ik < kk.length; Ik++) {
              const Xk = kk[Ik].findIndex((kk => "char" === kk.type && kk.char === Fk));
              if (-1 !== Xk) return {
                row: Ik,
                col: Xk
              }
            }
            return null
          })(Tk, "q");
        this.padInput.reset(), this.setState({
          ...Ik,
          focus: ik,
          preferredX: Xi(Tk, ik)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(Zi))
      }
      onFrame(kk) {
        if (this.releaseLostField()) return;
        const Fk = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(kk) : (0, mk.j)(Fk) && this.padInput.onHiddenFrame(kk, Fk)
      }
      releaseLostField() {
        const kk = this.ownedField;
        return !(null === kk || kk.isConnected && document.activeElement === kk) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: kk
        } = this.state;
        kk && (null === this.savedInputMode ? kk.removeAttribute("inputmode") : kk.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var Si = Ik(8757);
    const oi = new Map(BT.map((kk => {
        let {
          command: Fk,
          action: Ik
        } = kk;
        return [Fk, Ik]
      }))),
      vi = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      Ei = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        Hq: "controller:keyboardTargetBookTitle"
      },
      Oi = kk => {
        const Fk = (() => {
          const [, kk] = (0, Uk.useReducer)((kk => kk + 1), 0);
          return kk
        })();
        (0, Uk.useEffect)((() => {
          if (!kk) return;
          const Ik = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const Tk of Ik) kk.addEventListener(Tk, Fk);
          document.addEventListener("selectionchange", Fk);
          const Xk = new MutationObserver(Fk);
          return Xk.observe(kk, {
            attributeFilter: ["placeholder"]
          }), () => {
            Xk.disconnect();
            for (const Xk of Ik) kk.removeEventListener(Xk, Fk);
            document.removeEventListener("selectionchange", Fk)
          }
        }), [kk, Fk])
      },
      ni = kk => {
        kk.preventDefault()
      },
      Gi = kk => {
        "mouse" !== kk.pointerType && kk.preventDefault()
      },
      ui = () => {
        var kk;
        const {
          t: Fk
        } = (0, Tk.y)(), Ik = (() => {
          const [kk, Fk] = (0, Uk.useState)(zi.getState());
          return (0, Uk.useEffect)((() => zi.subscribe((() => {
            Fk(zi.getState())
          }))), []), kk
        })(), Xk = (0, jk.E)(), ik = (0, Uk.useRef)(null);
        (0, Zk.s)(), (0, jk.I)(), (0, Uk.useEffect)((() => {
          const kk = zi.install(),
            Fk = null;
          return () => {
            kk(), null === Fk || void 0 === Fk || Fk()
          }
        }), []);
        const yk = (0, Uk.useMemo)((() => Li.map((kk => Fk(kk)))), [Fk]),
          lk = Ik.visible && "chat" === Ik.kind ? Ik.target : null;
        Oi(lk);
        const ak = null !== (kk = null === lk || void 0 === lk ? void 0 : lk.value) && void 0 !== kk ? kk : "",
          qk = ((kk, Fk, Ik) => {
            if (!kk.startsWith("/")) return [];
            const Xk = [];
            for (let Tk = Fk.length - 1; Tk >= 0 && Xk.length < Ik; Tk--) {
              const Ik = Fk[Tk].trim();
              Ik.startsWith(kk) && Ik !== kk && !Xk.includes(Ik) && Xk.push(Ik)
            }
            return Xk
          })(ak, ak.startsWith("/") ? (0, Si.g)() : [], Li.length),
          tk = ak.startsWith("/"),
          ek = tk ? Li.map(((kk, Fk) => {
            var Ik;
            return null !== (Ik = qk[Fk]) && void 0 !== Ik ? Ik : ""
          })) : yk;
        if ((0, Uk.useEffect)((() => {
            zi.editor.setPhraseRow(ek, tk)
          })), (0, Uk.useEffect)((() => {
            const kk = ik.current;
            if (kk) return kk.addEventListener("touchstart", ni, {
              passive: !1
            }), () => {
              kk.removeEventListener("touchstart", ni)
            }
          }), [Ik.visible]), !Ik.visible) return null;
        const wk = ei(Ik),
          Hk = Ii(wk),
          Jk = kk => "char" === kk.type ? ai(kk.char, Ik.page, Ik.shift) : "phrase" === kk.type ? ek[kk.phraseIndex] : (kk => {
            switch (kk) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === Ik.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return vi[MT(Ik.page, Ik.accentsFirst)[kk]];
              case "space":
                return Fk("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return Fk("chat" === Ik.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(kk.command),
          xk = kk => {
            zi.editor.pressKey(kk)
          };
        return (0, ck.jsxs)("div", {
          ref: ik,
          className: Nk()(EI.j, "top" === Ik.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: Ik.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": wk.length,
            "--pad-keyboard-height": `${Ik.maxHeightPx}px`
          },
          onPointerDown: Gi,
          onMouseDown: ni,
          children: [(0, ck.jsx)(bi, {
            target: Ik.target,
            label: Ik.kind ? Fk(Ei[Ik.kind]) : Ik.target.placeholder || Fk("controller:keyboardTargetText")
          }), (0, ck.jsx)("div", {
            className: "PadKeyboardRows",
            children: wk.map(((kk, Fk) => (0, ck.jsx)("div", {
              className: Nk()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === kk[0].type
              }),
              children: kk.map(((kk, Tk) => {
                const ik = Xk && Ik.focus.row === Fk && Ik.focus.col === Tk,
                  yk = "command" === kk.type ? oi.get(kk.command) : void 0;
                return (0, ck.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: kk.width / Hk * 100 + "%"
                  },
                  children: (0, ck.jsxs)("div", {
                    className: Nk()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: ik,
                      PadKeyboardKeyCommand: "command" === kk.type,
                      PadKeyboardKeyPhrase: "phrase" === kk.type,
                      PadKeyboardKeyActive: "command" === kk.type && "shift" === kk.command && "off" !== Ik.shift,
                      PadKeyboardKeySubmit: "command" === kk.type && "submit" === kk.command
                    }),
                    role: "button",
                    onClick: () => {
                      xk({
                        row: Fk,
                        col: Tk
                      })
                    },
                    onTouchEnd: kk => {
                      var Ik, Xk;
                      kk.preventDefault(), Ik = kk.changedTouches[0], Xk = kk.currentTarget.getBoundingClientRect(), Ik && Ik.clientX >= Xk.left && Ik.clientX <= Xk.right && Ik.clientY >= Xk.top && Ik.clientY <= Xk.bottom && xk({
                        row: Fk,
                        col: Tk
                      })
                    },
                    children: [(0, ck.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: Jk(kk)
                    }), Xk && yk && (0, ck.jsx)(sT, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, Lk.j)(yk)
                    })]
                  })
                }, Tk)
              }))
            }, Fk)))
          })]
        })
      },
      bi = kk => {
        let {
          target: Fk,
          label: Ik
        } = kk;
        Oi(Fk);
        const Xk = (0, Uk.useRef)(null),
          Tk = (0, Uk.useRef)(null),
          ik = Fk instanceof HTMLTextAreaElement;
        (0, Uk.useLayoutEffect)((() => {
          const kk = Xk.current,
            Fk = Tk.current;
          ik ? kk.scrollTop = Fk.offsetTop - kk.clientHeight / 2 : kk.scrollLeft = Fk.offsetLeft - kk.clientWidth / 2
        }));
        const {
          value: yk,
          start: lk,
          end: ak
        } = (0, mk.s)(Fk), qk = "password" === Fk.type ? "\u2022".repeat(yk.length) : yk;
        return (0, ck.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, ck.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: Ik
          }), (0, ck.jsxs)("div", {
            ref: Xk,
            className: Nk()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: ik
            }),
            children: [(0, ck.jsx)("span", {
              children: qk.slice(0, lk)
            }), (0, ck.jsx)("span", {
              ref: Tk,
              className: "PadKeyboardCaret"
            }), lk !== ak && (0, ck.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: qk.slice(lk, ak)
            }), (0, ck.jsx)("span", {
              children: qk.slice(ak)
            }), 0 === qk.length && Fk.placeholder && Fk.placeholder !== Ik && (0, ck.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: Fk.placeholder
            })]
          })]
        })
      };
    var Ri = Ik(1364),
      Ui = Ik(3367);
    const Ci = function() {
        for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
        return Fk.map(Lk.j)
      },
      Ni = (kk, Fk) => {
        const Ik = dI(kk);
        return Ik ? [{
          glyphs: [Ik],
          labelKey: Fk
        }] : []
      },
      ci = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      Wi = "--pad-hint-bar-clearance",
      fi = "[data-pad-hint-bar-avoid]",
      Bi = kk => {
        const Fk = [];
        for (const Ik of kk)(0, Mk.n)(Ik) && Fk.push(Ik.getBoundingClientRect());
        return Fk
      },
      di = kk => {
        if (!kk) return null;
        const Fk = LX(),
          Ik = Fk ? Bi(((kk, Fk) => {
            const Ik = kk.closest(fi);
            return Ik ? [Ik] : ("popup" === Fk ? document : kk).querySelectorAll(fi)
          })(Fk.root, Fk.layer.kind)) : [],
          Xk = !Fk || Fk.root.hasAttribute("data-pad-shows-hud");
        if (((0, Ui.g)(null === Fk || void 0 === Fk ? void 0 : Fk.layer.kind, (0, Ui.j)()) || Xk) && Ik.push(...Bi(document.querySelectorAll(ci.join(",")))), 0 === Ik.length) return null;
        const {
          width: Tk,
          height: ik
        } = kk.getBoundingClientRect(), yk = window.innerHeight - 8, lk = (0, Ui.o)(yk, {
          width: Tk,
          height: ik
        }, window.innerWidth / 2, Ik, 8);
        return lk === yk ? null : Math.round(window.innerHeight - lk)
      },
      Yi = kk => {
        const Fk = document.documentElement.style,
          Ik = kk ? `${Math.round(window.innerHeight-kk.getBoundingClientRect().top)}px` : "";
        Fk.getPropertyValue(Wi) !== Ik && (Ik ? Fk.setProperty(Wi, Ik) : Fk.removeProperty(Wi))
      },
      Ai = () => {
        const {
          t: kk
        } = (0, Tk.y)(), {
          hideButtonHints: Fk
        } = (0, Zk.s)(), Ik = (0, jk.E)(), [Xk, ik] = (0, Uk.useState)(!1), [yk, qk] = (0, Uk.useState)([]), [wk, Hk] = (0, Uk.useState)(null), Jk = (0, Uk.useRef)(null), xk = (0, Uk.useRef)(null);
        (0, HT.d)(xi.b, (kk => {
          ik(kk)
        })), (0, HT.d)(Ui.m, (() => {
          var kk;
          null === (kk = xk.current) || void 0 === kk || kk.call(xk)
        }));
        const Pk = Ik && !Fk && !Xk;
        return (0, Uk.useEffect)((() => {
          if (!Pk) return;
          let kk = null;
          const Fk = () => {
            const Fk = (() => {
                var kk;
                const Fk = tk.b.getActiveConsumerName(),
                  Ik = (0, Ui.f)();
                if (Ik) {
                  const kk = (0, Lk.j)(Ik),
                    Fk = "emoteWheel" === Ik && "wheel" === (0, Zk.k)().emoteButton || !(0, ek.H)(tk.b.getLastFrame().values, kk) ? {
                      glyphs: Ci("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [kk],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, Lk.B)(kk)],
                    labelKey: "controller:wheelChoose"
                  }, Fk, {
                    glyphs: Ci("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const Xk = LX();
                if (!Xk || "focus" !== Fk && "cursor" !== Fk) return (0, Ui.d)(Lk.j);
                const Tk = [],
                  ik = {
                    glyphs: Ci("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  yk = (0, Yk.z)(Xk.root),
                  lk = yk ? !(0, Mk.p)(yk) : Boolean(Xk.layer.close),
                  qk = !yk && Xk.layer.closeLabelKey ? Xk.layer.closeLabelKey : ik.labelKey,
                  jk = lk ? [{
                    ...ik,
                    labelKey: qk
                  }] : [],
                  wk = GI(Xk.layer.kind) ? [{
                    glyphs: Ci("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === Fk) return Tk.push({
                  glyphs: Ci("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), Tk.push({
                  glyphs: Ci("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), Tk.push(...jk), Tk.push(...wk), Tk.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), SX() && Tk.push({
                  glyphs: Ci("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), Tk;
                const Hk = MX.getFocused();
                Hk && (0, nX.d)(Hk) ? Tk.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : Hk && (0, Yk.H)(Hk) ? Tk.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : Tk.push({
                  glyphs: Ci("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const Jk = Hk ? null === (kk = jI(Hk)) || void 0 === kk ? void 0 : kk.dataset.padSecondary : void 0;
                Jk && Tk.push({
                  glyphs: Ci("menuSecondary"),
                  labelKey: Jk
                }), Tk.push(...null !== Hk && void 0 !== Hk && Hk.closest("[data-pad-friends-column]") ? [ik] : jk), Tk.push(...wk);
                const xk = "home" === Xk.layer.kind;
                gI(Xk.root) || !RI(Xk.root) && !mI(Xk) ? xk && Tk.push({
                  glyphs: Ci("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : Tk.push({
                  glyphs: Ci("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), xk && (Tk.push(...Ni("inventory", "controller:menusFriends")), Jk || Tk.push({
                  glyphs: Ci("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), Tk.push(...Ni("pause", "controller:menusSettings")), Tk.push(...Ni("leaderboard", "controller:menusNotifications")));
                const Pk = ak.d.get("openEverythingMenuName");
                return "inGame" === ak.d.get("gameState") && "popup" !== Xk.layer.kind && null !== Pk && ((0, qI.l)(Pk) ? Tk.push(...Ni("leaderboard", "controller:menusClose")) : Pk !== aI.r.LOBBY_LEADERBOARD && Tk.push(...Ni("leaderboard", "controller:menusLobby"))), Tk.push({
                  glyphs: Ci("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), Tk
              })(),
              Ik = di(Jk.current),
              Xk = ((kk, Fk) => `${kk.map((kk=>`${kk.glyphs.join("+")}:${kk.labelKey}`)).join("|")}@${Fk}`)(Fk, Ik);
            Xk !== kk && (kk = Xk, (0, lk.unstable_batchedUpdates)((() => {
              qk(Fk), Hk(Ik)
            }))), Yi(Jk.current)
          };
          Fk(), xk.current = Fk;
          const Ik = requestAnimationFrame(Fk),
            Xk = setInterval(Fk, 150);
          return () => {
            xk.current = null, cancelAnimationFrame(Ik), clearInterval(Xk), Yi(null)
          }
        }), [Pk]), (0, Uk.useLayoutEffect)((() => {
          if (!Pk) return;
          if (0 === yk.length) return void Yi(null);
          const kk = di(Jk.current);
          kk === wk ? Yi(Jk.current) : Hk(kk)
        }), [Pk, yk, wk]), Pk && 0 !== yk.length ? (0, ck.jsx)("div", {
          ref: Jk,
          className: "PadButtonHintBar SmallTextBold",
          style: null === wk ? void 0 : {
            bottom: wk
          },
          "aria-hidden": !0,
          children: yk.map((Fk => (0, ck.jsxs)("div", {
            className: "PadButtonHint",
            children: [Fk.glyphs.map((kk => (0, ck.jsx)(sT, {
              glyph: kk,
              className: "PadButtonHintGlyph"
            }, kk))), (0, ck.jsx)("span", {
              children: kk(Fk.labelKey)
            })]
          }, Fk.labelKey)))
        }) : null
      };
    var gi = Ik(1668);
    const mi = [Mk.b, "label", "[data-pad-slider]"].join(","),
      ri = "data-pad-cursor-probe",
      Di = kk => {
        var Fk;
        const Ik = (kk => {
          const Fk = [];
          for (let Xk = kk; Xk && Xk !== document.body && Xk !== document.documentElement && (Fk.push(Xk), !(Fk.length > 8)); Xk = Xk.parentElement);
          const Ik = document.documentElement.classList.contains(jk.x) ? Fk[Fk.length - 1] : void 0;
          null === Ik || void 0 === Ik || Ik.setAttribute(ri, "");
          try {
            return Fk.map((kk => ({
              element: kk,
              cursor: getComputedStyle(kk).cursor
            })))
          } finally {
            null === Ik || void 0 === Ik || Ik.removeAttribute(ri)
          }
        })(kk);
        if ("pointer" !== (null === (Fk = Ik[0]) || void 0 === Fk ? void 0 : Fk.cursor)) return null;
        let Xk = 0;
        for (; Xk + 1 < Ik.length && "pointer" === Ik[Xk + 1].cursor;) Xk++;
        return Ik[Xk].element
      },
      Mi = (kk, Fk, Ik, Xk) => {
        const Tk = Xk.root.contains(kk) ? Xk.root : null;
        for (let ik = kk; ik && ik !== document.body && ik !== document.documentElement; ik = ik.parentElement) {
          if (ik instanceof HTMLElement && vk(ik, Fk) && pk(ik, Fk, Ik)) return ik;
          if (ik === Tk) break
        }
        return "home" === Xk.layer.kind || "gamePage" === Xk.layer.kind ? ((kk, Fk) => {
          const Ik = document.scrollingElement;
          return Ik instanceof HTMLElement && ![document.documentElement, document.body].some((Fk => {
            const Ik = getComputedStyle(Fk),
              Xk = "y" === kk ? Ik.overflowY : Ik.overflowX;
            return "hidden" === Xk || "clip" === Xk
          })) && pk(Ik, kk, Fk) ? Ik : null
        })(Fk, Ik) : null
      };
    const ky = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, wk.e)(ek.q), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const kk = tk.b.register({
              name: "cursor",
              isActive: () => "cursor" === oX(),
              onFrame: kk => {
                this.onFrame(kk)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: kk => (0, tk.e)(kk) || kk === (0, Lk.j)("menuConfirm") && (0, Yk.J)((0, jk.b)())
            }),
            Fk = (0, IX.i)((kk => {
              const Fk = kk.getRoot();
              Fk && this.layerPoints.delete(Fk), Fk === this.layerRoot && (this.layerRoot = null)
            })),
            Ik = qk.g.subscribe("appManagerUpdated|activeInputDevice", (kk => {
              "gamepad" !== kk && this.active && !this.hidden && this.hide()
            }));
          return () => {
            kk(), Fk(), qk.g.unsubscribe(Ik), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, jk.n)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.GL()
        }
        activate(kk) {
          this.active = !0, this.hidden = !1;
          const Fk = sX();
          !Fk || Fk.root && Fk.root !== kk.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(kk), this.jumpTo(Fk.point))
        }
        jumpTo(kk) {
          this.state = {
            x: kk.x,
            y: kk.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.GL())
        }
        onFrame(kk) {
          const Fk = LX();
          if (!Fk) return;
          if (this.active || this.activate(Fk), this.followPage(Fk)) return;
          this.followLayer(Fk);
          const Ik = kk.wokeDevice ? (0, jk.b)() : null;
          if (Ik && this.jumpTo(Ik), !(0, jk.n)()) return void this.hide();
          const Xk = (0, Lk.j)("menuToggleCursor");
          if (kk.wasPressed(Xk)) return tk.b.consumeButton(Xk), void QX(this.getHandoff(null));
          if (this.handBackToFocus(kk)) return;
          const Tk = (0, Lk.j)("menuConfirm"),
            ik = (0, Lk.j)("menuSecondary");
          if (kk.wasPressed((0, Lk.j)("menuBack"))) return (0, Yk.k)(Fk.root) || (0, Yk.g)(Fk.root) || tX(), void this.GL();
          if (DI(null, kk, Fk)) return kk.wasReleased(Tk) && this.press && (this.updateHit(!1), this.updateConfirm(kk, Tk)), void this.GL();
          if (document.pointerLockElement) return void this.hide();
          const yk = vX() ? {
              x: 0,
              y: 0
            } : (kk => {
              const Fk = (kk, Fk) => (kk ? 1 : 0) - (Fk ? 1 : 0);
              return {
                x: Fk(kk.isHeld("Right"), kk.isHeld("Left")),
                y: Fk(kk.isHeld("Down"), kk.isHeld("Up"))
              }
            })(kk),
            lk = (0, Zk.k)().moveDeadzone,
            ak = ((kk, Fk) => {
              const Ik = (0, ek.j)(kk, Kk(Fk));
              return Math.hypot(Ik.x, Ik.y)
            })(kk.leftStick, lk) > 0 || 0 !== yk.x || 0 !== yk.y;
          if (this.hidden) {
            const Fk = kk.wasPressed(Tk),
              Ik = kk.wasPressed(ik);
            if (!ak && !Vk(kk.rightStick) && !Fk && !Ik && !kk.wokeDevice) return void this.GL();
            if (this.hidden = !1, this.updateHit(!1), Fk || Ik) return Fk && (this.press = {
              kind: "ignored"
            }, kk.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.GL()
          }
          this.movePendingPageStart(ak);
          const qk = this.getPoint();
          this.state = sk(this.state, {
            stick: kk.leftStick,
            moveDeadzone: lk,
            dpad: yk,
            dtMs: kk.dtMs,
            cursorSpeedPercent: (0, Zk.k)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const wk = this.state.x !== qk.x || this.state.y !== qk.y,
            Hk = [Tk, ik].some((Fk => kk.wasPressed(Fk) || kk.wasReleased(Fk)));
          (wk || Hk || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(wk), this.updateConfirm(kk, Tk), this.updateSecondary(kk, ik), this.updateScroll(kk, Fk), this.GL()
        }
        followPage(kk) {
          const Fk = "home" === kk.layer.kind || "gamePage" === kk.layer.kind,
            Ik = this.page;
          if (this.page = Fk ? {
              key: (0, IX.p)(kk.layer),
              root: kk.root
            } : null, !this.page || !Ik || Ik.root !== kk.root || Ik.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(kk), "hybrid" === KX()) return JX = null, wX = null, xX.lock(), !0;
          const {
            key: Xk
          } = this.page;
          return this.pendingPageStart = {
            root: kk.root,
            key: Xk,
            returning: MX.notePageEnteredByCursor(Xk),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(kk) {
          const Fk = this.pendingPageStart;
          if (!Fk) return;
          if (kk || Fk.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const Ik = Fk.returning ? MX.recallStop(Fk.root, Fk.key) : null;
          if (!Ik && Fk.returning && performance.now() - Fk.enteredAtMs < 1e3) return;
          const Xk = null !== Ik && void 0 !== Ik ? Ik : MX.pickInitial(Fk.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: Fk.enteredAtMs
          });
          Xk && (this.pendingPageStart = null, this.jumpTo((0, Yk.B)(Xk)))
        }
        setLayer(kk) {
          this.layerRoot = kk.root, this.layerOrder = kk.order
        }
        followLayer(kk) {
          var Fk;
          if (kk.root === this.layerRoot) return;
          null !== (Fk = this.layerRoot) && void 0 !== Fk && Fk.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const Ik = this.layerPoints.get(kk.root),
            Xk = Ik && kk.order <= this.layerOrder ? Ik : MX.getLayerStartPoint(kk.root);
          this.setLayer(kk), this.jumpTo(Xk)
        }
        getHandoff(kk) {
          var Fk;
          return {
            point: this.getPoint(),
            element: null !== (Fk = this.interactive) && void 0 !== Fk ? Fk : this.findDraggedSliderNearby(),
            direction: kk
          }
        }
        findDraggedSliderNearby() {
          const kk = this.draggedSlider;
          if (null === kk || void 0 === kk || !kk.isConnected) return null;
          const Fk = kk.getBoundingClientRect(),
            {
              y: Ik
            } = this.getPoint();
          return Ik >= Fk.top - 40 && Ik <= Fk.bottom + 40 ? kk : null
        }
        handBackToFocus(kk) {
          if (!vX()) return !1;
          const Fk = ek.y.find((Fk => kk.wasPressed(Fk)));
          return !!Fk && (Ik = this.getHandoff(Fk), JX = jX(Ik), wX = null, xX.lock(), tk.b.handOffHeldInput(), !0);
          var Ik
        }
        getAssistContext() {
          const kk = this.interactive;
          if (null === kk || void 0 === kk || !kk.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const Fk = kk.getBoundingClientRect();
          if (Fk.width > .4 * window.innerWidth || Fk.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const Ik = (0, Zk.k)().cursorMagnetism && !(0, gi.b)(kk) && !kk.closest("[data-pad-slider]"),
            Xk = this.magnet && this.magnet !== kk && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : Fk;
          return {
            overInteractive: !0,
            magnetTarget: Ik ? {
              x: Xk.left + Xk.width / 2,
              y: Xk.top + Xk.height / 2
            } : null
          }
        }
        updateHit(kk) {
          this.lastHitTestMs = performance.now();
          const Fk = this.getPoint(),
            Ik = document.elementFromPoint(Fk.x, Fk.y),
            Xk = Ik && !(0, Jk.p)(Ik) && (kk => {
              var Fk;
              const Ik = LX();
              return !(Ik && !Ik.root.contains(kk) && !kk.closest(".tooltip-container")) || !(null !== (Fk = document.getElementById("root")) && void 0 !== Fk && Fk.contains(kk))
            })(Ik) ? Ik : null;
          if (Xk !== this.hit) return (0, Yk.p)(this.hit, Xk, Fk), this.hit = Xk, void this.setInteractive(Xk ? (kk => {
            const Fk = kk.closest(mi);
            if (Fk) {
              var Ik, Xk;
              const kk = null !== (Ik = null === (Xk = Fk.parentElement) || void 0 === Xk ? void 0 : Xk.closest("[data-pad-focusable]")) && void 0 !== Ik ? Ik : Fk;
              return (0, Mk.p)(kk) ? {
                element: null,
                magnet: null
              } : {
                element: kk,
                magnet: Fk
              }
            }
            const Tk = Di(kk);
            return {
              element: Tk,
              magnet: Tk
            }
          })(Xk) : {
            element: null,
            magnet: null
          });
          kk && Xk && (0, Yk.p)(Xk, Xk, Fk)
        }
        setInteractive(kk) {
          let {
            element: Fk,
            magnet: Ik
          } = kk;
          this.interactive = Fk, this.magnet = Ik
        }
        clearHover() {
          this.hit && (0, Yk.p)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const kk = this.hit;
          if (!kk || (0, Yk.H)(kk)) return {
            kind: "ignored"
          };
          const Fk = (0, nX.d)(kk),
            Ik = kk.closest("[data-pad-slider]");
          return Fk && Ik ? {
            kind: "slider",
            slider: Ik,
            adjuster: Fk
          } : ((0, Yk.s)(kk, this.getPoint()), {
            kind: "pointer",
            target: kk
          })
        }
        applySliderFraction(kk) {
          var Fk;
          const Ik = kk.slider.getBoundingClientRect(),
            Xk = Ik.height > Ik.width,
            Tk = null === (Fk = kk.slider.querySelector("[data-pad-slider-handle]")) || void 0 === Fk ? void 0 : Fk.getBoundingClientRect(),
            ik = Tk ? Xk ? Tk.height : Tk.width : 0,
            yk = (Xk ? Ik.height : Ik.width) - ik;
          if (yk <= 0) return;
          const lk = Xk ? Ik.bottom - ik / 2 - this.state.y : this.state.x - Ik.left - ik / 2;
          kk.adjuster.setFraction(Math.max(0, Math.min(1, lk / yk)))
        }
        updateConfirm(kk, Fk) {
          kk.wasPressed(Fk) && (this.press = kk.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const Ik = this.press;
          if (!Ik) return;
          if (kk.isHeld(Fk)) return "slider" === Ik.kind && this.applySliderFraction(Ik), void this.updateRepeat();
          this.press = null;
          const Xk = this.repeated;
          if (this.endRepeat(), !kk.wasReleased(Fk)) return void this.endPressWithoutClick(Ik);
          const Tk = this.getPoint(),
            ik = this.hit;
          if ("slider" === Ik.kind && Ik.adjuster.endDrag(), "pointer" === Ik.kind) {
            const kk = null !== ik && void 0 !== ik ? ik : Ik.target.isConnected ? Ik.target : null;
            kk && (0, Yk.v)(kk, Tk);
            const Fk = ik && Ik.target.isConnected && !Xk ? ((kk, Fk) => {
              for (let Ik = kk; Ik; Ik = Ik.parentElement)
                if (Ik.contains(Fk)) return Ik;
              return null
            })(Ik.target, ik) : null;
            Fk && (MX.noteCursorActivation(Fk), (0, Jk.e)(Fk, new MouseEvent("click", (0, Yk.R)(Tk, 0, 0))), (0, Yk.j)(Fk), (0, Yk.O)(Fk) && (0, Yk.K)(Fk))
          }
        }
        beginRepeat() {
          var kk, Fk, Ik;
          const Xk = null !== (kk = null === (Fk = this.hit) || void 0 === Fk ? void 0 : Fk.closest("[data-pad-repeat]")) && void 0 !== kk ? kk : null;
          this.repeatStop = Xk, this.repeatKey = null !== (Ik = null === Xk || void 0 === Xk ? void 0 : Xk.getAttribute("data-pad-repeat")) && void 0 !== Ik ? Ik : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const kk = this.repeatStop;
          if (!kk) return;
          const Fk = this.hit;
          kk.isConnected && !(0, Mk.p)(kk) && kk.getAttribute("data-pad-repeat") === this.repeatKey && Fk && kk.contains(Fk) ? kk.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, MX.noteCursorActivation(kk), (0, Jk.e)(kk, new MouseEvent("click", (0, Yk.R)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(kk) {
          "slider" === kk.kind && kk.adjuster.endDrag(), "pointer" === kk.kind && kk.target.isConnected && (0, Yk.v)(kk.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(kk, Fk) {
          kk.wasPressed(Fk) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !kk.isHeld(Fk) && (this.secondaryArmed = !1, kk.wasReleased(Fk) && this.hit && (0, Yk.l)(this.hit, this.getPoint(), 2))
        }
        updateScroll(kk, Fk) {
          const Ik = zk(kk.rightStick, kk.dtMs);
          if (0 === Ik.x && 0 === Ik.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + Ik.x,
            y: this.scrollRemainder.y + Ik.y
          };
          const Xk = Math.trunc(this.scrollRemainder.x),
            Tk = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - Xk,
            y: this.scrollRemainder.y - Tk
          };
          const ik = this.hit;
          if (!ik) return;
          let yk = !1;
          if (0 !== Tk) {
            const kk = Mi(ik, "y", Tk > 0 ? 1 : -1, Fk);
            kk && (kk.scrollBy({
              top: Tk,
              behavior: "instant"
            }), yk = !0)
          }
          if (0 !== Xk) {
            const kk = Mi(ik, "x", Xk > 0 ? 1 : -1, Fk);
            kk && (kk.scrollBy({
              left: Xk,
              behavior: "instant"
            }), yk = !0)
          }
          yk && (this.lastHitTestMs = -1 / 0)
        }
        GL() {
          gk.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      Fy = () => {
        const kk = (0, Uk.useMemo)((() => new Bk), []),
          Fk = (0, jk.E)();
        return (0, Uk.useEffect)((() => {
          if (!Fk) return;
          let Ik = 0,
            Xk = {
              of: null,
              atMs: 0,
              list: []
            };
          const Tk = document.getElementsByClassName(EX),
            ik = kk => {
              for (const Fk of [...Tk]) Fk !== kk && Fk.classList.remove(EX)
            },
            yk = () => {
              var Fk;
              Ik = requestAnimationFrame(yk);
              const Tk = (() => {
                const kk = MX.getFocused();
                if (MX.isActive() && null !== kk && void 0 !== kk && kk.isConnected) return kk;
                const Fk = ky.getHighlighted();
                return null !== Fk && void 0 !== Fk && Fk.isConnected ? Fk : null
              })();
              ik(Tk), Tk && !Tk.classList.contains(EX) && Tk.classList.add(EX);
              const lk = null !== (Fk = null === Tk || void 0 === Tk ? void 0 : Tk.closest("[data-pad-reticle-box]")) && void 0 !== Fk ? Fk : Tk;
              kk.show(lk ? ((kk, Fk) => {
                let Ik = kk.left,
                  Xk = kk.top,
                  Tk = kk.right,
                  ik = kk.bottom;
                for (const yk of Fk) {
                  if (!yk) continue;
                  const kk = bk(yk);
                  Ik = Math.max(Ik, kk.left), Xk = Math.max(Xk, kk.top), Tk = Math.min(Tk, kk.right), ik = Math.min(ik, kk.bottom)
                }
                return Tk <= Ik || ik <= Xk ? null : {
                  left: Ik,
                  top: Xk,
                  width: Tk - Ik,
                  height: ik - Xk
                }
              })(lk.getBoundingClientRect(), (kk => {
                const Fk = performance.now();
                return (Xk.of !== kk || Fk - Xk.atMs > 500) && (Xk = {
                  of: kk,
                  atMs: Fk,
                  list: [Ek(kk, "y"), Ek(kk, "x")]
                }), Xk.list
              })(lk)) : null)
            };
          return Ik = requestAnimationFrame(yk), () => {
            cancelAnimationFrame(Ik), ik(null), kk.hide()
          }
        }), [Fk, kk]), (0, ck.jsx)(dk, {
          placer: kk,
          className: "PadFocusRing"
        })
      },
      Iy = (kk, Fk) => {
        kk.style.transform = `translate3d(${Fk.x}px, ${Fk.y}px, 0)`, kk.classList.toggle("Visible", Fk.visible), kk.classList.toggle("Pressed", Fk.pressed)
      },
      Xy = () => {
        const kk = (0, Uk.useRef)(null);
        return (0, Uk.useEffect)((() => {
          const Fk = gk.subscribe((Fk => {
            kk.current && Iy(kk.current, Fk)
          }));
          return kk.current && Iy(kk.current, gk.get()), Fk
        }), []), (0, ck.jsx)("div", {
          ref: kk,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, ck.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      Ty = "#ncmp__modal.ncmp__active",
      iy = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(Ty) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(Ty),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      yy = "PadOverThirdParty",
      ly = new Set(iy.map((kk => kk.id))),
      ay = () => {
        const kk = iy.map((kk => {
            let {
              id: Fk,
              find: Ik,
              startSelectors: Xk
            } = kk;
            return (0, IX.l)({
              id: Fk,
              kind: "popup",
              getRoot: () => {
                const kk = Ik(),
                  Fk = kk ? ((kk, Fk) => {
                    var Ik;
                    for (const Xk of Fk) {
                      const Fk = kk.querySelector(Xk);
                      if (Fk) return Fk
                    }
                    return null !== (Ik = [...kk.querySelectorAll("button")].find((kk => !kk.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== Ik ? Ik : null
                  })(kk, Xk) : null;
                if (kk && Fk && !Fk.hasAttribute("data-pad-default-focus")) {
                  for (const Fk of kk.querySelectorAll("[data-pad-default-focus]")) Fk.removeAttribute("data-pad-default-focus");
                  for (const Fk of kk.querySelectorAll("[data-pad-hint-bar-avoid]")) Fk.removeAttribute("data-pad-hint-bar-avoid");
                  Fk.setAttribute("data-pad-default-focus", ""), ((kk, Fk) => {
                    let Ik = kk;
                    for (let Xk = kk.parentElement; Xk && Fk.contains(Xk) && !(Xk.getBoundingClientRect().height >= window.innerHeight / 2); Xk = Xk.parentElement) Ik = Xk;
                    return Ik
                  })(Fk, kk).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return kk
              },
              close: null,
              memoryKey: null
            })
          })),
          Fk = document.documentElement,
          Ik = yk.e.onFrame((() => {
            const kk = (0, jk.n)() ? LX() : null,
              Ik = !!kk && (Xk = kk.layer, ly.has(Xk.id));
            var Xk;
            Fk.classList.contains(yy) !== Ik && Fk.classList.toggle(yy, Ik)
          }));
        return () => {
          for (const Fk of kk) Fk();
          Ik(), Fk.classList.remove(yy)
        }
      },
      qy = "PadLargePointer",
      Ly = () => {
        (0, Uk.useEffect)((() => {
          const kk = (0, Jk.j)(document.body),
            Fk = MX.install(),
            Ik = ky.install(),
            Xk = ay();
          return () => {
            kk(), Fk(), Ik(), Xk()
          }
        }), []);
        const {
          largePointer: kk
        } = (0, Zk.s)(), Fk = (0, Ri.m)() && kk;
        return (0, Uk.useEffect)((() => {
          if (Fk) return document.documentElement.classList.add(qy), () => {
            document.documentElement.classList.remove(qy)
          }
        }), [Fk]), (0, lk.createPortal)((0, ck.jsxs)(ck.Fragment, {
          children: [(0, ck.jsx)(Ai, {}), (0, ck.jsx)(Fy, {}), (0, ck.jsx)(Xy, {})]
        }), document.body)
      };
    var ty = Ik(8772),
      Zy = Ik(8800),
      jy = Ik(8784);
    Ik(8809);
    const ey = (kk, Fk) => {
        const [Ik, Xk] = (0, Uk.useState)(!1), [Tk, ik] = (0, Uk.useState)(null), yk = (0, Uk.useRef)(null), lk = (0, Uk.useCallback)((kk => {
          yk.current = kk, ik(kk)
        }), []), ak = (0, Uk.useCallback)((() => {
          Xk(!1), lk(null)
        }), [lk]), Lk = (0, Uk.useCallback)((() => {
          Xk(!0)
        }), []), tk = (0, Uk.useCallback)(((kk, Fk) => {
          lk((0, jy.K)(kk, Fk, yk.current))
        }), [lk]);
        (0, Uk.useLayoutEffect)((() => (Fk(Ik), (0, Ui.q)(kk, Ik), qk.g.GL(Ui.m), () => {
          Fk(!1), (0, Ui.q)(kk, !1), qk.g.GL(Ui.m)
        })), [Ik, kk, Fk]), (0, HT.d)("appManagerUpdated|activeInputDevice", (kk => {
          "gamepad" !== kk && ak()
        })), (0, HT.d)("appManagerUpdated|gameState", (kk => {
          "inGame" !== kk && ak()
        }));
        const Zk = () => {
          (0, qI.p)() && ak()
        };
        return (0, HT.d)("appManagerUpdated|openEverythingMenuName", Zk), (0, HT.d)("appManagerUpdated|openInGameMenuName", Zk), {
          open: Ik,
          picked: Tk,
          pickedRef: yk,
          show: Lk,
          aim: tk,
          close: ak
        }
      },
      wy = kk => {
        let {
          className: Fk,
          slotCount: Ik,
          picked: Xk,
          slotLabel: Tk,
          renderSlot: ik,
          centre: yk
        } = kk;
        const lk = Array.from({
          length: Ik
        }, ((kk, Fk) => Fk));
        return (0, ck.jsx)("div", {
          className: Nk()("EmoteWheelOverlay PadRadialWheel", Fk),
          children: (0, ck.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * jy.w + "rem",
              height: 2 * jy.w + "rem"
            },
            children: [(0, ck.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${jy.p} ${jy.p}`,
              children: [lk.map((kk => (0, ck.jsx)("path", {
                d: (0, jy.A)(kk, Ik, jy.i, jy.j, jy.l),
                className: Nk()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: kk === Xk
                }),
                "aria-label": Tk(kk)
              }, kk))), (0, ck.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: jy.i,
                cy: jy.i,
                r: jy.l
              }), (0, ck.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: jy.i,
                cy: jy.i,
                r: jy.j
              }), null !== Xk && (0, ck.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, jy.A)(Xk, Ik, jy.i, jy.j, jy.l)
              })]
            }), lk.map((kk => {
              const Fk = (0, jy.G)(kk, Ik);
              return (0, ck.jsx)("div", {
                className: Nk()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: kk === Xk
                }),
                style: {
                  left: `calc(50% + ${jy.e*Math.cos(Fk)}rem)`,
                  top: `calc(50% + ${jy.e*Math.sin(Fk)}rem)`
                },
                "aria-hidden": !0,
                children: ik(kk)
              }, kk)
            })), (0, ck.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: yk
            })]
          })
        })
      },
      Hy = Li.length,
      Jy = () => {
        const {
          t: kk
        } = (0, Tk.y)(), Fk = ey("chat", nI.r), Ik = (0, Uk.useMemo)((() => Li.map((Fk => kk(Fk)))), [kk]);
        return (0, HT.d)(nI.p, (() => {
          Fk.open || (0, ty.f)() || (0, Zy.q)() || "inGame" !== ak.d.get("gameState") || (0, qI.p)() || !(0, EI.c)() || Fk.show()
        })), (0, HT.d)(nI.g, (kk => {
          Fk.open && Fk.aim(kk, Hy)
        })), (0, HT.d)(nI.n, (() => {
          var kk;
          if (!Fk.open) return;
          const Xk = Fk.pickedRef.current;
          null !== Xk ? ti.claim(performance.now()) && (Fk.close(), null === (kk = (0, EI.c)()) || void 0 === kk || kk.sendLine(Ik[Xk])) : Fk.close()
        })), (0, HT.d)(nI.j, Fk.close), Fk.open ? (0, ck.jsx)(wy, {
          className: "QuickChatWheel",
          slotCount: Hy,
          picked: Fk.picked,
          slotLabel: kk => Ik[kk],
          renderSlot: kk => Ik[kk],
          centre: null !== Fk.picked ? Ik[Fk.picked] : kk("controller:quickChatPick")
        }) : null
      },
      xy = () => {
        const {
          t: kk
        } = (0, Tk.y)(), Fk = ey("actionButton", Zy.s), [Ik, Xk] = (0, Uk.useState)([]);
        if ((0, HT.d)(Zy.l, (kk => {
            Fk.open || (0, ty.f)() || (0, nI.e)() || "inGame" !== ak.d.get("gameState") || (0, qI.p)() || (Xk(kk), Fk.show())
          })), (0, HT.d)(Zy.d, (kk => {
            Fk.open && Fk.aim(kk, Ik.length)
          })), (0, HT.d)(Zy.h, (() => {
            if (!Fk.open) return;
            const kk = Fk.pickedRef.current;
            Fk.close(), null !== kk && qk.g.GL(Zy.n, Ik[kk])
          })), (0, HT.d)(Zy.f, Fk.close), !Fk.open) return null;
        const ik = null !== Fk.picked ? Ik[Fk.picked] : null;
        return (0, ck.jsx)(wy, {
          className: "ActionWheel",
          slotCount: Ik.length,
          picked: Fk.picked,
          slotLabel: Fk => {
            const Xk = Ik[Fk];
            return "reload" === Xk.kind ? kk("controller:gameplayReload") : "customButton" === Xk.kind ? Xk.description || Xk.icon : "touchButton" === Xk.kind && "string" === typeof Xk.label ? Xk.label : ""
          },
          renderSlot: kk => (0, ck.jsx)(zT, {
            action: Ik[kk]
          }),
          centre: ik ? (0, ck.jsx)(zT, {
            action: ik
          }) : kk("controller:actionWheelPick")
        })
      };
    var Py = Ik(95);
    const Ky = () => ((0, Uk.useEffect)((() => {
        var kk, Fk;
        const Ik = (0, Jk.j)(document.getElementById("root")),
          Xk = (0, jk.f)(),
          Tk = (() => {
            const kk = [qk.g.subscribe(FT.i, (() => {
                iT("blockBreak")
              })), qk.g.subscribe("damagedByOtherPlayer", (() => {
                iT("damage")
              })), qk.g.subscribe("yourAttackHit", (kk => {
                let {
                  hitSelf: Fk
                } = kk;
                Fk || iT("hit")
              }))],
              Fk = yk.e.onActivePadChanged((kk => {
                kk && iT("connect")
              }));
            return () => {
              for (const Fk of kk) qk.g.unsubscribe(Fk);
              Fk()
            }
          })(),
          ik = (() => {
            const kk = new tT({
              getVisitId: LT.h,
              peekVisitId: LT.peekVisitSessionId,
              readReportedVisitId: () => {
                const kk = qT.m.getItem(ZT);
                return "string" === typeof kk ? kk : null
              },
              writeReportedVisitId: kk => {
                qT.m.setItem(ZT, kk)
              },
              isPadActive: jk.n,
              getPadFamily: () => {
                var kk, Fk;
                return null !== (kk = null === (Fk = yk.e.getActivePad()) || void 0 === Fk ? void 0 : Fk.family) && void 0 !== kk ? kk : null
              },
              canReport: lT.k,
              getInputType: aT.e,
              Mj: lT.o
            });
            let Fk = 0,
              Ik = null;
            const Xk = Tk => {
                null === Ik && ("notReady" !== kk.check(Tk) || null !== Ik || Fk >= 20 || (Fk++, Ik = setTimeout((() => {
                  Ik = null, Xk(!1)
                }), 3e3)))
              },
              Tk = qk.g.subscribe("appManagerUpdated|activeInputDevice", (() => {
                Xk(!0)
              })),
              ik = (0, LT.n)((() => {
                Fk = 0, Xk(!0)
              }));
            return () => {
              qk.g.unsubscribe(Tk), ik(), null !== Ik && clearTimeout(Ik)
            }
          })(),
          lk = yk.e.onFrame(((kk, Fk) => {
            const Ik = (0, jk.t)(kk);
            tk.b.dispatch(kk, Fk, Ik)
          }));
        let Lk = null !== (kk = null === (Fk = yk.e.getActivePad()) || void 0 === Fk ? void 0 : Fk.family) && void 0 !== kk ? kk : null;
        const ek = yk.e.onActivePadChanged((kk => {
            var Fk, Ik;
            (tk.b.reset(), (0, jk.z)(), qk.g.GL(yk.d, kk), (null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.family) && void 0 !== Fk ? Fk : null) !== Lk) && (Lk = null !== (Ik = null === kk || void 0 === kk ? void 0 : kk.family) && void 0 !== Ik ? Ik : null, qk.g.GL(Zk.e, (0, Zk.k)()));
            !kk && (0, jk.n)() && (0, jk.C)(ak.d.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          wk = () => {
            "visible" !== document.visibilityState && tk.b.clear()
          },
          Hk = () => {
            tk.b.clear()
          };
        document.addEventListener("visibilitychange", wk), window.addEventListener("blur", Hk), yk.e.start(), (0, yT.n)();
        const xk = null;
        return () => {
          Ik(), Xk(), Tk(), ik(), lk(), ek(), document.removeEventListener("visibilitychange", wk), window.removeEventListener("blur", Hk), yk.e.stop(), null === xk || void 0 === xk || xk()
        }
      }), []), (0, ck.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, ck.jsx)(GT, {}), (0, ck.jsx)(WT, {}), (0, ck.jsx)(fT, {}), (0, ck.jsx)(ui, {}), (0, ck.jsx)(Ly, {}), (0, ck.jsx)(Jy, {}), (0, ck.jsx)(xy, {})]
      })),
      Qy = () => Py.featureFlags.useControllerSupport ? (0, ck.jsx)(Ky, {}) : null;
    var sy = Ik(8166),
      Vy = Ik(8811);
    const zy = new Set(yT.j),
      Sy = kk => `${Vy.p}${(0,Zk.o)()}/${kk}`,
      oy = kk => {
        if (!(0, Vy.l)(kk)) return null;
        const [Fk, Ik] = kk.slice(Vy.p.length).split("/");
        return (0, sy.f)(Fk) && zy.has(Ik) ? (0, yT.i)(Fk, Ik) : null
      };
    var vy = Ik(8814);
    const Ey = () => {
        const {
          t: kk
        } = (0, Tk.y)(), Fk = (0, jk.E)(), {
          gameState: Ik,
          isUiHidden: Xk
        } = (0, ak.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: ik,
          sneakMode: yk
        } = (0, Zk.s)(), [lk, qk] = (0, Uk.useState)(vy.c);
        return (0, HT.d)(nT.t, qk), Fk && !Xk && "inGame" === Ik && lk ? (0, ck.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!ik && (0, ck.jsx)(sT, {
            glyph: (0, Lk.j)("toggle" === yk ? "sneak" : "sneakToggle")
          }), (0, ck.jsx)("span", {
            children: kk("controller:gameplaySneaking")
          })]
        }) : null
      },
      Oy = 12,
      ny = kk => {
        let {
          trigger: Fk,
          className: Ik,
          children: Xk
        } = kk;
        const Tk = (0, Uk.useRef)(null);
        return (0, Uk.useEffect)((() => {
          let kk = 0;
          const Ik = Ek(Fk, "y"),
            Xk = () => {
              kk = requestAnimationFrame(Xk);
              const ik = Tk.current;
              if (!ik || null === Fk || void 0 === Fk || !Fk.isConnected) return;
              const {
                left: yk,
                top: lk
              } = function(kk, Fk, Ik) {
                let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const ik = kk.left + kk.width / 2,
                  yk = Math.max(Oy, Ik.width - Oy - Fk.width),
                  lk = Math.min(Math.max(ik - Fk.width / 2, Oy), yk),
                  ak = Ik.height - Xk;
                let qk = 0,
                  Lk = ak;
                if (Tk) {
                  const kk = Math.max(0, Tk.top),
                    Xk = Math.min(ak, Tk.bottom);
                  Xk - kk >= Math.max(Ik.height / 2, Fk.height + 24) && (qk = kk, Lk = Xk)
                }
                const tk = kk.top + kk.height / 2 < (qk + Lk) / 2 ? Lk - Oy - Fk.height : qk + Oy;
                return {
                  left: lk,
                  top: Math.max(Oy, tk)
                }
              }(Fk.getBoundingClientRect(), {
                width: ik.offsetWidth,
                height: ik.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(Wi)) || 0, null !== Ik && void 0 !== Ik && Ik.isConnected ? Ik.getBoundingClientRect() : null);
              ik.style.transform = `translate3d(${Math.round(yk)}px, ${Math.round(lk)}px, 0)`, ik.style.visibility = "visible"
            };
          return Xk(), () => {
            cancelAnimationFrame(kk)
          }
        }), [Fk]), (0, ck.jsx)("div", {
          ref: Tk,
          className: Ik,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: Xk
        })
      };
    var Gy = Ik(1066),
      py = Ik(8820),
      uy = Ik(1406),
      by = Ik(8822),
      Ry = Ik(8825);
    const Uy = {
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
          t: kk
        } = (0, Tk.y)(), Fk = (0, jk.E)(), Ik = (0, py.c)(), Xk = (0, CT.j)("_tasks"), ik = (0, CT.j)("_availableLeaderboards");
        if (!Fk) return null;
        const yk = (kk => {
          let {
            hasShop: Fk,
            hasTasksOrLeaderboards: Ik,
            canInvite: Xk
          } = kk;
          const Tk = [];
          return Fk && Tk.push("shop"), Ik && Tk.push("tasks"), Xk && Tk.push("invite"), Tk.push("leave"), Tk
        })({
          hasShop: Ik,
          hasTasksOrLeaderboards: !(!Xk && !ik),
          canInvite: !!Py.featureFlags.canUseInviteLinks
        });
        return (0, ck.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: yk.map((Fk => {
            const {
              icon: Ik,
              labelKey: Xk
            } = Uy[Fk], Tk = "leave" === Fk ? uy.G : uy.d;
            return (0, ck.jsx)(Tk, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (kk => {
                  switch (kk) {
                    case "shop":
                      return qk.g.GL(Ry.h), void ak.d.set({
                        openEverythingMenuName: aI.r.SHOP
                      });
                    case "tasks":
                      return void qk.g.GL("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void qk.g.GL("toggleMenu", "inviteLink");
                    case "leave":
                      (0, by.b)()
                  }
                })(Fk)
              },
              children: (0, ck.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, ck.jsx)(Gy.e, {
                  name: Ik
                }), (0, ck.jsx)("span", {
                  children: kk(Xk)
                })]
              })
            }, Fk)
          }))
        })
      };
    var Ny = Ik(1916);
    const cy = ek.w,
      Wy = ["forward", "backward", "left", "right", "sprint"],
      fy = kk => kk.ctrlKey || kk.altKey || "Alt" === kk.key || "ArrowUp" === kk.key || "ArrowDown" === kk.key || "Tab" === kk.code || "/" === kk.key || "Slash" === kk.code;
    class By {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(ek.W).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(kk) {
        this.armed = kk
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || Fk ? !kk.repeat && this.swallowedKeys.delete(kk.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(kk.code),
          continues: !1
        } : "Escape" === kk.key || kk.repeat && !this.swallowedKeys.has(kk.code) ? {
          swallow: !1,
          continues: !1
        } : Ik ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(kk.code), {
          swallow: !0,
          continues: (0, jk.j)(kk)
        })
      }
      onKeyUp(kk) {
        return this.swallowedKeys.delete(kk.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Tk = (0, ek.n)(kk.values, this.previousHeld),
          ik = null === Ik ? -1 : (0, ek.k)(Ik),
          yk = ik >= 0 && Tk[ik] && !this.previousHeld[ik],
          lk = Tk.some(((kk, Fk) => kk && !this.previousHeld[Fk] && Fk !== ik)),
          ak = Math.hypot(kk.leftStick.x, kk.leftStick.y) >= cy,
          qk = Math.hypot(kk.rightStick.x, kk.rightStick.y) >= cy,
          Lk = ak && !this.leftStickWasPressed || qk && !this.rightStickWasPressed;
        this.previousHeld = Tk, this.leftStickWasPressed = ak, this.rightStickWasPressed = qk;
        let tk = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, tk = !0);
        const Zk = !Fk && yk && !Xk,
          jk = !Zk && this.armed && !Fk && (lk || Lk);
        return (Zk || jk) && (this.consumeNextFrame = !0, this.consumeAfterContinue = jk, tk = !0), {
          continues: jk,
          back: Zk,
          consumeHeld: tk
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const dy = new Set([...Ny.l, ...Ny.A]),
      Yy = kk => ((kk, Fk, Ik) => {
        const Xk = Object.keys(Fk).filter((Xk => !Ik.has(Xk) && Fk[Xk].includes(kk)));
        return Xk.length > 0 && Xk.every((kk => Wy.includes(kk)))
      })(kk, Ny.s, dy),
      Ay = (kk, Fk, Ik) => {
        const Xk = new By,
          Tk = kk => {
            if (!kk.isTrusted) return;
            const {
              swallow: Ik,
              continues: Tk
            } = Xk.onKeyDown(kk, !(0, jk.M)(kk) || (0, kT.f)() || (0, qI.p)(), Yy(kk.code));
            Ik && (kk.stopImmediatePropagation(), fy(kk) && kk.preventDefault()), Tk && ((0, jk.C)("keyboardMouse"), Fk())
          },
          ik = kk => {
            kk.isTrusted && Xk.onKeyUp(kk) && (kk.stopImmediatePropagation(), fy(kk) && kk.preventDefault())
          },
          lk = () => {
            Xk.forgetKeys()
          };
        window.addEventListener("keydown", Tk, !0), window.addEventListener("keyup", ik, !0), window.addEventListener("blur", lk);
        const ak = yk.e.onFrame((kk => {
            const Tk = tk.b.getActiveConsumerName(),
              ik = Ik(),
              yk = ik ? (0, Lk.j)("menuBack") : null,
              lk = null !== Tk && "gameplay" !== Tk,
              {
                continues: ak,
                back: qk,
                consumeHeld: ek
              } = Xk.onPadFrame(kk, lk, yk, (0, jk.r)(kk));
            if (ek) {
              const kk = (0, Zk.k)().swapSticks ? "right" : "left";
              tk.b.consumeAllHeld(Xk.consumeLeavesMoveStick() ? kk : null)
            }
            qk ? null === ik || void 0 === ik || ik() : ak && Fk()
          })),
          qk = (0, kT.g)(`pressToContinue:${kk}`, (() => Xk.blocksGameplay()));
        return {
          setArmed: kk => {
            Xk.setArmed(kk)
          },
          dispose: () => {
            window.removeEventListener("keydown", Tk, !0), window.removeEventListener("keyup", ik, !0), window.removeEventListener("blur", lk), ak(), qk()
          }
        }
      };
    var gy = Ik(4983),
      my = Ik(3370),
      hy = Ik(3065),
      ry = Ik(8173);
    const Dy = kk => {
        let {
          text: Fk
        } = kk;
        return (0, ck.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: Fk
        })
      },
      My = kk => {
        let {
          label: Fk,
          hint: Ik,
          options: Xk,
          value: ik,
          onChange: yk
        } = kk;
        const {
          t: lk
        } = (0, Tk.y)();
        return (0, ck.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, ck.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, ck.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, ck.jsx)("div", {
                className: "SliderText",
                children: Fk
              }), Ik && (0, ck.jsx)("div", {
                className: "ControllerSettingsHint",
                children: Ik
              })]
            }), (0, ck.jsx)(hy.e, {
              options: Xk.map((kk => ({
                label: "label" in kk ? kk.label : lk(kk.labelKey),
                value: kk.value
              }))),
              value: ik,
              onChange: kk => {
                yk(kk.value)
              }
            })]
          })
        })
      },
      kl = kk => {
        let {
          settingKey: Fk,
          label: Ik,
          range: Xk,
          format: Tk
        } = kk;
        const ik = (0, Zk.s)();
        return (0, ck.jsx)(gy.j, {
          name: Ik,
          min: Xk.min,
          max: Xk.max,
          step: Xk.step,
          padStep: Xk.step,
          initValue: ik[Fk],
          format: Tk,
          onChange: kk => {
            (0, Zk.p)({
              [Fk]: (0, ry.y)(kk, Xk)
            })
          }
        })
      };
    var Fl = Ik(8833),
      Il = Ik(8840);
    const Xl = kk => kk instanceof DOMException && ("SecurityError" === kk.name || "NotAllowedError" === kk.name),
      Tl = kk => {
        const [Fk] = [...kk.controllers].sort(((kk, Fk) => Il.m[kk] - Il.m[Fk]));
        return Il.k[Fk]
      },
      il = kk => {
        (0, Fl.c)().allowPhoneMotion().catch((Fk => {
          kk && Xl(Fk) ? kk() : console.warn("Could not enable the motion sensor", Fk)
        }))
      },
      yl = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      ll = kk => {
        let {
          status: Fk
        } = kk;
        const {
          t: Ik
        } = (0, Tk.y)(), [Xk, ik] = (0, Uk.useState)(null), yk = `${Fk.controllers.join(",")}|${Fk.phoneMotion}`;
        (0, Uk.useEffect)((() => {
          ik(null)
        }), [yk]);
        const lk = () => {
          (0, Fl.c)().connectController().then((kk => {
            ik(kk > 0 ? "openFailed" : null)
          })).catch((kk => {
            Xl(kk) ? ik("needsClick") : console.warn("Could not connect motion controller", kk)
          }))
        };
        if (Fk.hidSupported) {
          let kk = Ik("controller:settingsGyroConnectHint");
          return "needsClick" === Xk ? kk = Ik("controller:settingsGyroConnectNeedsClick") : "openFailed" === Xk ? kk = Ik("controller:settingsGyroOpenFailed") : Fk.controllers.length > 0 && (kk = Ik("controller:settingsGyroConnected", {
            name: Tl(Fk)
          })), (0, ck.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, ck.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, ck.jsx)("div", {
                className: "ControllerSettingsHint",
                children: kk
              }), (0, ck.jsx)(uy.d, {
                onClick: lk,
                children: Ik("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === Fk.phoneMotion) return (0, ck.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, ck.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === Xk && (0, ck.jsx)("div", {
              className: "ControllerSettingsHint",
              children: Ik("controller:settingsGyroAllowNeedsTap")
            }), (0, ck.jsx)(uy.d, {
              onClick: () => {
                il((() => {
                  ik("needsTap")
                }))
              },
              children: Ik("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const ak = yl[Fk.phoneMotion];
        return ak ? (0, ck.jsx)("div", {
          className: "ControllerSettingsHint",
          children: Ik(ak)
        }) : null
      },
      al = () => {
        const {
          t: kk
        } = (0, Tk.y)(), Fk = (0, Zk.s)(), Ik = (0, Fl.f)(), Xk = (0, jk.I)(), ik = !Ik.hidSupported && Ik.phoneSupported && !Ik.padConnected, yk = (Ik.hidSupported || Ik.phoneSupported) && !ik, lk = (0, Lk.j)("pause");
        return (0, ck.jsxs)(ck.Fragment, {
          children: [(0, ck.jsx)(Dy, {
            text: kk("controller:settingsGyro")
          }), ik && (0, ck.jsx)("div", {
            className: "ControllerSettingsHint",
            children: kk("controller:settingsGyroPhoneNeedsController")
          }), !yk && !ik && (0, ck.jsx)("div", {
            className: "ControllerSettingsHint",
            children: kk(Ik.hidBlocked || Ik.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), yk && (0, ck.jsx)(gy.e, {
            label: kk(Ik.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: Fk.gyroAiming,
            onClick: kk => {
              var Fk, Ik;
              (0, Zk.p)({
                gyroAiming: kk
              });
              const Xk = null === (Fk = null === (Ik = navigator.userActivation) || void 0 === Ik ? void 0 : Ik.isActive) || void 0 === Fk || Fk;
              if (!kk || !Xk) return;
              const Tk = (0, Fl.c)(),
                ik = Tk.getStatus();
              ik.hidSupported ? Tk.connectControllerIfNoneGranted().catch((kk => {
                console.warn("Motion controller picker unavailable", kk)
              })) : "needsPermission" === ik.phoneMotion && il()
            },
            circleInfoText: kk(Ik.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), yk && Ik.hidSupported && (0, ck.jsx)("div", {
            className: "ControllerSettingsHint",
            children: kk("controller:settingsGyroSteamHint")
          }), yk && Fk.gyroAiming && (0, ck.jsxs)(ck.Fragment, {
            children: [(0, ck.jsx)(ll, {
              status: Ik
            }), (0, ck.jsx)(kl, {
              settingKey: "gyroSensitivity",
              label: kk("controller:settingsGyroSensitivity"),
              range: ry.Y,
              format: ry.N
            }), (0, ck.jsx)(My, {
              label: kk("controller:settingsGyroActivation"),
              hint: "aiming" === Fk.gyroActivation && (0, ck.jsx)(my.d, {
                text: kk("controller:settingsGyroAimingHint", {
                  button: my.e
                }),
                glyph: (0, Lk.j)("use")
              }),
              options: ry.U,
              value: Fk.gyroActivation,
              onChange: kk => {
                (0, Zk.p)({
                  gyroActivation: kk
                })
              }
            }), "button" === Fk.gyroActivation && (0, ck.jsx)(My, {
              label: kk("controller:settingsGyroButton"),
              hint: kk("controller:settingsGyroButtonHint"),
              options: ry.u.filter((kk => kk !== lk || kk === Fk.gyroButton)).map((kk => ({
                label: QT(Xk, kk),
                value: kk
              }))),
              value: Fk.gyroButton,
              onChange: kk => {
                (0, Zk.p)({
                  gyroButton: kk
                })
              }
            })]
          })]
        })
      };
    var ql = Ik(1800);
    const Ll = () => {
      const {
        t: kk
      } = (0, Tk.y)(), Fk = (0, Zk.s)(), Ik = (0, jk.I)();
      return (0, ck.jsxs)(ck.Fragment, {
        children: [(0, ck.jsx)(Dy, {
          text: kk("controller:settingsAccessibility")
        }), (0, ck.jsx)(gy.e, {
          label: kk("controller:settingsSwapConfirmBack"),
          checked: (0, Lk.I)(Fk.swapConfirmBack, Ik),
          onClick: kk => {
            (0, Zk.p)({
              swapConfirmBack: kk === (0, Lk.I)(null, Ik) ? null : kk
            }), ql.e.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: kk("controller:settingsSwapConfirmBackInfo")
        }), (0, ck.jsx)(My, {
          label: kk("controller:settingsButtonRepeat"),
          hint: kk("controller:settingsButtonRepeatHint"),
          options: ry.s,
          value: Fk.buttonRepeat,
          onChange: kk => {
            (0, Zk.p)({
              buttonRepeat: kk
            })
          }
        }), (0, ck.jsx)(My, {
          label: kk("controller:settingsTapHoldTime"),
          hint: kk("controller:settingsTapHoldTimeHint"),
          options: ry.vb,
          value: Fk.tapHoldTime,
          onChange: kk => {
            (0, Zk.p)({
              tapHoldTime: kk
            })
          }
        }), (0, ck.jsx)(My, {
          label: kk("controller:settingsEmoteButton"),
          hint: kk("wheel" === Fk.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: ry.I,
          value: Fk.emoteButton,
          onChange: kk => {
            (0, Zk.p)({
              emoteButton: kk
            })
          }
        }), (0, ck.jsx)(My, {
          label: kk("controller:settingsAttackMode"),
          hint: kk("toggle" === Fk.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: ry.p,
          value: Fk.attackMode,
          onChange: kk => {
            (0, Zk.p)({
              attackMode: kk
            })
          }
        }), (0, ck.jsx)(gy.e, {
          label: kk("controller:settingsLargePointer"),
          checked: Fk.largePointer,
          onClick: kk => {
            (0, Zk.p)({
              largePointer: kk
            })
          },
          circleInfoText: kk("controller:settingsLargePointerInfo")
        })]
      })
    };
    var tl = Ik(8846);
    const Zl = new class {
        constructor(kk) {
          this.router = kk, this.current = null
        }
        claim(kk, Fk) {
          const Ik = this.current;
          Ik && (this.current = null, Ik.release(), Ik.onTakenOver());
          const Xk = this.router.register({
              ...kk,
              name: "capture"
            }),
            Tk = {
              release: Xk,
              onTakenOver: Fk
            };
          return this.current = Tk, () => {
            this.current === Tk && (this.current = null), Xk()
          }
        }
      }(tk.b),
      jl = kk => {
        (0, Uk.useEffect)((() => {
          if (!kk) return;
          const Fk = kk();
          let Ik = !1;
          const Xk = () => {
              Ik || (Ik = !0, Fk.onEnd())
            },
            Tk = Zl.claim({
              isActive: () => !Ik,
              onFrame: kk => {
                Fk.onFrame(kk, Xk)
              }
            }, Xk),
            ik = void 0 === Fk.timeoutMs ? void 0 : window.setTimeout(Xk, Fk.timeoutMs),
            yk = kk => {
              "Escape" === kk.key && (kk.preventDefault(), kk.stopPropagation(), Xk())
            };
          return window.addEventListener("keydown", yk, !0), () => {
            Ik = !0, Tk(), window.clearTimeout(ik), window.removeEventListener("keydown", yk, !0)
          }
        }), [kk])
      },
      el = kk => {
        let {
          row: Fk,
          capturing: Ik,
          onCapture: Xk,
          holdFillRef: ik,
          onRebind: yk,
          swapped: lk
        } = kk;
        const {
          t: ak
        } = (0, Tk.y)();
        if ("fixed" === Fk.kind) return (0, ck.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, ck.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, ck.jsx)("div", {
              className: "ControlName",
              children: ak(Fk.labelKey)
            }), (0, ck.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, ck.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, ck.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, ck.jsx)(sT, {
                    glyph: "move" === Fk.stick ? (0, Lk.u)() : (0, Lk.q)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: qk
        } = Fk, tk = (0, Lk.j)(qk), Zk = (0, Lk.n)(qk), jk = tk !== Zk && (0, Lk.c)(qk, Zk);
        return (0, ck.jsxs)("div", {
          className: Nk()("ControlRow PadControlRow", {
            Capturing: Ik
          }),
          children: [(0, ck.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, ck.jsx)("div", {
              className: "ControlName",
              children: ak(ry.j[qk])
            }), (0, ck.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!Ik && (0, ck.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, ck.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Xk(qk)
                  },
                  children: (0, ck.jsx)(sT, {
                    glyph: tk
                  })
                }), jk && (0, ck.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: ak("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    yk(qk, Zk)
                  },
                  children: (0, ck.jsx)(Gy.e, {
                    name: "arrows-rotate"
                  })
                })]
              }), Ik && (0, ck.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, ck.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, ck.jsx)("span", {
                    children: ak("controller:settingsCapturePrompt")
                  }), (0, ck.jsx)("div", {
                    ref: ik,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, ck.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Xk(null)
                  },
                  children: "\xd7"
                })]
              }), Ik && (0, ck.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, ck.jsx)(my.d, {
                  text: ak((0, Lk.c)(qk, (0, Lk.j)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: my.e
                  }),
                  glyph: (0, Lk.j)("menuBack")
                })
              })]
            })]
          }), lk.map((kk => (0, ck.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, ck.jsx)(my.d, {
              text: ak("controller:settingsSwapNotice", {
                action: ak(ry.j[kk]),
                button: my.e
              }),
              glyph: (0, Lk.j)(kk)
            })
          }, kk))), Ik && (0, ck.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${ry.x}ms`
            }
          })]
        })
      },
      wl = [],
      Hl = kk => {
        let {
          layoutSetting: Fk
        } = kk;
        const {
          t: Ik
        } = (0, Tk.y)(), Xk = (0, Zk.s)();
        (0, jk.I)();
        const ik = (0, Uk.useRef)(null),
          [yk, lk] = (0, Uk.useState)(null),
          ak = (0, Uk.useCallback)(((kk, Fk) => {
            const Ik = (0, Zk.k)().bindings;
            (0, Lk.E)(kk, Fk);
            const Xk = (0, Lk.y)(Ik, kk);
            lk(Xk.length > 0 ? {
              action: kk,
              swapped: Xk
            } : null)
          }), []),
          [qk, wk] = ((kk, Fk) => {
            const [Ik, Xk] = (0, Uk.useState)(null), Tk = (0, Uk.useMemo)((() => Ik ? () => {
              const Tk = (0, Lk.j)("menuBack"),
                ik = new ry.e(Tk, (0, Lk.j)("menuConfirm"), (kk => (0, Lk.c)(Ik, kk)));
              return {
                onFrame: (Xk, yk) => {
                  var lk;
                  const ak = Xk.frame.timestampMs,
                    qk = ik.update({
                      ...Xk,
                      isDown: kk => (0, ek.H)(Xk.frame.values, kk)
                    }, ak);
                  null === (lk = kk.current) || void 0 === lk || lk.style.setProperty("width", 100 * ik.getBindHoldProgress(ak) + "%"), qk && ("bind" === qk.kind ? (tk.b.consumeButton(qk.button), Fk(Ik, qk.button)) : tk.b.consumeButton(Tk), yk())
                },
                onEnd: () => {
                  Xk(null)
                },
                timeoutMs: ry.x
              }
            } : null), [Ik, kk, Fk]);
            return jl(Tk), [Ik, Xk]
          })(ik, ak),
          Hk = kk => {
            kk && lk(null), wk(kk)
          };
        (0, Uk.useEffect)((() => {
          if (!yk) return;
          const kk = window.setTimeout((() => {
            lk(null)
          }), ry.ub);
          return () => {
            window.clearTimeout(kk)
          }
        }), [yk]);
        const Jk = !Xk.swapSticks && 0 === Object.keys(Xk.bindings).length;
        return (0, ck.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, ck.jsx)("div", {
            className: "SliderText",
            children: Ik("controller:settingsRemap")
          }), (0, ck.jsx)("div", {
            className: "ControllerSettingsHint",
            children: Ik("controller:settingsRemapHint")
          }), (0, ck.jsx)(uy.G, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: Jk,
            onClick: () => {
              Hk(null), lk(null), (0, Lk.H)()
            },
            children: Ik("controller:settingsResetAll")
          }), Fk, ry.ob.map(((kk, Fk) => (0, ck.jsx)(tl.b, {
            title: Ik(kk.titleKey),
            defaultOpen: 0 === Fk,
            children: kk.rows.map((kk => (0, ck.jsx)(el, {
              row: kk,
              capturing: "action" === kk.kind && kk.action === qk,
              onCapture: Hk,
              holdFillRef: ik,
              onRebind: ak,
              swapped: "action" === kk.kind && (null === yk || void 0 === yk ? void 0 : yk.action) === kk.action ? yk.swapped : wl
            }, "action" === kk.kind ? kk.action : kk.labelKey)))
          }, kk.titleKey)))]
        })
      },
      Jl = kk => {
        let {
          deadzone: Fk,
          dotRef: Ik,
          labelKey: Xk
        } = kk;
        const {
          t: ik
        } = (0, Tk.y)();
        return (0, ck.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, ck.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, ck.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * Fk + "%",
                height: 100 * Fk + "%"
              }
            }), (0, ck.jsx)("div", {
              ref: Ik,
              className: "ControllerTesterDot"
            })]
          }), (0, ck.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: ik(Xk)
          })]
        })
      },
      xl = (kk, Fk, Ik, Xk) => {
        var Tk;
        kk && (kk.style.left = 50 + 50 * Math.max(-1, Math.min(1, Fk.x)) + "%", kk.style.top = 50 + 50 * Math.max(-1, Math.min(1, Fk.y)) + "%", null === (Tk = kk.parentElement) || void 0 === Tk || Tk.classList.toggle("Active", Xk || Math.hypot(Fk.x, Fk.y) > Ik))
      },
      Pl = kk => {
        const Fk = {
            deadzone: kk.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          Ik = {
            deadzone: kk.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return kk.swapSticks ? {
          left: Ik,
          right: Fk
        } : {
          left: Fk,
          right: Ik
        }
      },
      Kl = () => {
        const {
          t: kk
        } = (0, Tk.y)(), Fk = (() => {
          const [kk, Fk] = (0, Uk.useState)((() => yk.e.getActivePad()));
          return (0, HT.d)(yk.d, (() => {
            Fk(yk.e.getActivePad())
          })), kk
        })(), Ik = Pl((0, Zk.s)()), Xk = (0, Uk.useRef)(null), ik = (0, Uk.useRef)(null), lk = (0, Uk.useRef)([]), ak = (0, Uk.useRef)(null), qk = (0, Uk.useRef)(null), [jk, wk] = (kk => {
          const [Fk, Ik] = (0, Uk.useState)(!1), Xk = (0, Uk.useMemo)((() => Fk ? () => {
            const Fk = (0, Lk.j)("menuBack"),
              Xk = new ry.h;
            return {
              onFrame: (Ik, Tk) => {
                var ik;
                const yk = Xk.update({
                  pressed: Ik.wasPressed(Fk),
                  eq: Ik.isHeld(Fk)
                }, Ik.frame.timestampMs);
                null === (ik = kk.current) || void 0 === ik || ik.style.setProperty("width", 100 * yk + "%"), yk >= 1 && (tk.b.consumeButton(Fk), Tk())
              },
              onEnd: () => {
                Ik(!1)
              }
            }
          } : null), [Fk, kk]);
          return jl(Xk), [Fk, Ik]
        })(ik);
        (0, Uk.useEffect)((() => {
          const kk = kk => {
            for (const Ik of ek.Y) {
              const Fk = (0, ek.k)(Ik),
                Xk = lk.current[Fk];
              if (!Xk) continue;
              const Tk = kk.values[Fk];
              Xk.classList.toggle("Pressed", Tk >= ek.w), (0, ek.J)(Fk) && Xk.style.setProperty("--trigger-fill", `${Math.round(100*Tk)}%`)
            }
            const Fk = Pl((0, Zk.k)());
            xl(ak.current, kk.leftStick, Fk.left.deadzone, kk.values[(0, ek.k)("LS")] >= ek.w), xl(qk.current, kk.rightStick, Fk.right.deadzone, kk.values[(0, ek.k)("RS")] >= ek.w)
          };
          return Fk || kk((0, ek.t)()), yk.e.onFrame(kk)
        }), [Fk]), (0, Uk.useEffect)((() => {
          Fk || wk(!1)
        }), [Fk, wk]), (0, Uk.useEffect)((() => {
          var kk;
          jk && (null === (kk = Xk.current) || void 0 === kk || kk.scrollIntoView({
            block: "nearest"
          }))
        }), [jk]);
        const Hk = ry.kb.find((kk => kk.value === (null === Fk || void 0 === Fk ? void 0 : Fk.family)));
        return (0, ck.jsxs)("div", {
          ref: Xk,
          className: Nk()("SettingBox ControllerTester", {
            Testing: jk
          }),
          children: [(0, ck.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, ck.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [Fk && (0, ck.jsx)("div", {
                children: kk("controller:settingsTesterFamily", {
                  family: Hk ? kk(Hk.labelKey) : Fk.family
                })
              }), Fk && (0, ck.jsx)("div", {
                className: "ControllerTesterPadId",
                children: Fk.id
              }), !Fk && (0, ck.jsx)("div", {
                children: kk("controller:settingsTesterNoPad")
              })]
            }), (Fk || jk) && (0, ck.jsx)(uy.d, {
              className: "ControllerTesterToggle",
              onClick: () => {
                wk(!jk)
              },
              children: kk(jk ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), Fk && !jk && (0, ck.jsx)("div", {
            className: "ControllerSettingsHint",
            children: kk("controller:settingsTesterHint")
          }), jk && (0, ck.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, ck.jsx)(my.d, {
              text: kk("controller:settingsTesterTesting", {
                button: my.e
              }),
              glyph: (0, Lk.j)("menuBack")
            }), (0, ck.jsx)("div", {
              ref: ik,
              className: "ControllerTesterExitFill"
            })]
          }), (0, ck.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, ck.jsx)(Jl, {
              deadzone: Ik.left.deadzone,
              dotRef: ak,
              labelKey: Ik.left.labelKey
            }), (0, ck.jsx)("div", {
              className: "ControllerTesterButtons",
              children: ek.Y.map((kk => {
                const Ik = (0, ek.k)(kk);
                return (0, ck.jsx)("div", {
                  ref: kk => {
                    lk.current[Ik] = kk
                  },
                  className: (0, ek.J)(Ik) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, ck.jsx)(sT, {
                    glyph: kk,
                    family: null === Fk || void 0 === Fk ? void 0 : Fk.family
                  })
                }, kk)
              }))
            }), (0, ck.jsx)(Jl, {
              deadzone: Ik.right.deadzone,
              dotRef: qk,
              labelKey: Ik.right.labelKey
            })]
          })]
        })
      },
      Ql = (0, Uk.memo)((function() {
        const {
          t: kk
        } = (0, Tk.y)(), Fk = (0, Zk.s)(), [Ik, Xk] = (0, Uk.useState)(!1);
        return (0, Uk.useEffect)((() => {
          if (!Ik) return;
          const kk = window.setTimeout((() => {
            Xk(!1)
          }), ry.ub);
          return () => {
            window.clearTimeout(kk)
          }
        }), [Ik]), (0, ck.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, ck.jsx)(Dy, {
            text: kk("controller:settingsLook")
          }), (0, ck.jsx)(kl, {
            settingKey: "lookSensitivityX",
            label: kk("controller:settingsLookSensitivityX"),
            range: ry.pb,
            format: ry.Q
          }), (0, ck.jsx)(kl, {
            settingKey: "lookSensitivityY",
            label: kk("controller:settingsLookSensitivityY"),
            range: ry.pb,
            format: ry.Q
          }), (0, ck.jsx)(kl, {
            settingKey: "aimLookSensitivity",
            label: kk("controller:settingsAimLookSensitivity"),
            range: ry.n,
            format: ry.Q
          }), (0, ck.jsx)(My, {
            label: kk("controller:settingsLookCurve"),
            hint: kk("controller:settingsLookCurveHint"),
            options: ry.gb,
            value: Fk.lookCurve,
            onChange: kk => {
              (0, Zk.p)({
                lookCurve: kk
              })
            }
          }), (0, ck.jsx)(gy.e, {
            label: kk("controller:settingsInvertLookX"),
            checked: Fk.invertLookX,
            onClick: kk => {
              (0, Zk.p)({
                invertLookX: kk
              })
            }
          }), (0, ck.jsx)(gy.e, {
            label: kk("controller:settingsInvertLookY"),
            checked: Fk.invertLookY,
            onClick: kk => {
              (0, Zk.p)({
                invertLookY: kk
              })
            }
          }), (0, ck.jsx)(kl, {
            settingKey: "lookDeadzone",
            label: kk("controller:settingsLookDeadzone"),
            range: ry.F,
            format: ry.J
          }), (0, ck.jsx)(al, {}), (0, ck.jsx)(Dy, {
            text: kk("controller:settingsMovement")
          }), (0, ck.jsx)(kl, {
            settingKey: "moveDeadzone",
            label: kk("controller:settingsMoveDeadzone"),
            range: ry.F,
            format: ry.J
          }), (0, ck.jsx)(gy.e, {
            label: kk("controller:settingsAutoSprint"),
            checked: Fk.autoSprint,
            onClick: kk => {
              (0, Zk.p)({
                autoSprint: kk
              })
            },
            circleInfoText: kk("controller:settingsAutoSprintInfo")
          }), (0, ck.jsx)(My, {
            label: kk("controller:settingsSneak"),
            options: ry.qb,
            value: Fk.sneakMode,
            onChange: kk => {
              (0, Zk.p)({
                sneakMode: kk
              })
            }
          }), (0, ck.jsx)(Dy, {
            text: kk("controller:settingsButtons")
          }), (0, ck.jsx)(My, {
            label: kk("controller:settingsPromptFamily"),
            options: ry.kb,
            value: Fk.promptFamily,
            onChange: kk => {
              (0, Zk.p)({
                promptFamily: kk
              })
            }
          }), (0, ck.jsx)(gy.e, {
            label: kk("controller:settingsHideButtonHints"),
            checked: Fk.hideButtonHints,
            onClick: kk => {
              (0, Zk.p)({
                hideButtonHints: kk
              })
            }
          }), (0, ck.jsx)(gy.e, {
            label: kk("controller:settingsVibration"),
            checked: Fk.vibration,
            onClick: kk => {
              (0, Zk.p)({
                vibration: kk
              }), kk && iT("preview")
            }
          }), (0, ck.jsx)(kl, {
            settingKey: "cursorSpeed",
            label: kk("controller:settingsCursorSpeed"),
            range: ry.C,
            format: ry.Q
          }), (0, ck.jsx)(gy.e, {
            label: kk("controller:settingsCursorMagnetism"),
            checked: Fk.cursorMagnetism,
            onClick: kk => {
              (0, Zk.p)({
                cursorMagnetism: kk
              })
            }
          }), (0, ck.jsx)(gy.e, {
            label: kk("controller:settingsMenuBackToCategories"),
            checked: Fk.menuBackToCategories,
            onClick: kk => {
              (0, Zk.p)({
                menuBackToCategories: kk
              })
            }
          }), (0, ck.jsx)(Hl, {
            layoutSetting: (0, ck.jsxs)(ck.Fragment, {
              children: [Lk.g.map((Ik => (0, ck.jsx)(gy.e, {
                label: kk(ry.ab[Ik]),
                checked: (0, Lk.D)(Ik, Fk),
                onClick: kk => {
                  Xk(!(0, Lk.K)(Ik, kk))
                }
              }, Ik))), Ik && (0, ck.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: kk("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, ck.jsx)(Ll, {}), (0, ck.jsx)(Dy, {
            text: kk("controller:settingsAlternatives")
          }), (0, ck.jsx)("div", {
            className: "ControllerSettingsHint",
            children: kk("controller:settingsAlternativesHint")
          }), (0, ck.jsx)(My, {
            label: kk("controller:settingsMenuNavigation"),
            hint: kk("controller:settingsMenuNavigationHint"),
            options: ry.hb,
            value: Fk.menuNavigation,
            onChange: kk => {
              (0, Zk.p)({
                menuNavigation: kk
              })
            }
          }), (0, ck.jsx)(My, {
            label: kk("controller:settingsInventoryNavigation"),
            hint: kk("controller:settingsInventoryNavigationHint"),
            options: ry.Z,
            value: Fk.inventoryNavigation,
            onChange: kk => {
              (0, Zk.p)({
                inventoryNavigation: kk
              })
            }
          }), (0, ck.jsx)(My, {
            label: kk("controller:settingsQuickChat"),
            hint: kk("controller:settingsQuickChatHint"),
            options: ry.lb,
            value: Fk.quickChat,
            onChange: kk => {
              (0, Zk.p)({
                quickChat: kk
              })
            }
          }), (0, ck.jsx)(My, {
            label: kk("controller:settingsLeaderboardButton"),
            hint: kk("controller:settingsLeaderboardButtonHint"),
            options: ry.cb,
            value: Fk.leaderboardButton,
            onChange: kk => {
              (0, Zk.p)({
                leaderboardButton: kk
              })
            }
          }), (0, ck.jsx)(Dy, {
            text: kk("controller:settingsTester")
          }), (0, ck.jsx)(Kl, {})]
        })
      }));
    (0, Tk.c)(Xk);
    for (const ol of (0, ik.r)()) ol.connected ? yk.e.handleConnectionEvent(ol) : yk.e.handleDisconnectionEvent(ol);
    const sl = () => null !== yk.e.getActivePad(),
      Vl = () => iI.getState(),
      zl = () => iI.isSteppingSlots(),
      Sl = (kk, Fk) => {
        const Ik = MX.getFocused();
        MX.isActive() && Ik && kk.contains(Ik) && MX.setFocus(Fk, {
          scroll: !1
        })
      }
  },
  8144: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ak,
      d: () => qk
    });
    var Xk = Ik(1390),
      Tk = Ik(1381);
    const ik = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      yk = "28de",
      lk = new Set(["1205"]),
      ak = (kk, Fk) => {
        const Ik = (0, Xk.d)(kk);
        if ((null === Ik || void 0 === Ik ? void 0 : Ik.vendor) === yk) return lk.has(Ik.product) ? "steamdeck" : "xbox";
        if (Ik && ik[Ik.vendor]) return ik[Ik.vendor];
        if ((0, Tk.c)(kk)) return "nintendo";
        const ak = `${kk} ${null!==Fk&&void 0!==Fk?Fk:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(ak) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(ak) ? "nintendo" : /steam deck/.test(ak) ? "steamdeck" : "xbox"
      },
      qk = kk => {
        var Fk;
        return (null === (Fk = (0, Xk.d)(kk)) || void 0 === Fk ? void 0 : Fk.vendor) === yk
      }
  },
  8180: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => qk,
      e: () => lk
    });
    var Xk = Ik(8142);
    const Tk = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      ik = new Set(["capture", "gameplay"]),
      yk = ["Up", "Down", "Left", "Right"],
      lk = kk => yk.includes(kk),
      ak = .25;
    const qk = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.eq = new Array(Xk.W).fill(!1), this.previousHeld = new Array(Xk.W).fill(!1), this.consumedButtons = new Array(Xk.W).fill(!1), this.suppressedReleases = new Array(Xk.W).fill(!1), this.wakeOwned = new Array(Xk.W).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, Xk.t)()
      }
      register(kk) {
        return this.consumers.has(kk.name) && console.warn(`Controller consumer "${kk.name}" registered twice; the newer one replaces it.`), this.consumers.set(kk.name, kk), () => {
          var Fk;
          this.consumers.get(kk.name) === kk && (this.activeName === kk.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (Fk = this.peek) || void 0 === Fk ? void 0 : Fk.over) === kk.name && (this.peek = null), this.consumers.delete(kk.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(kk) {
        return this.eq[(0, Xk.k)(kk)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.eq = new Array(Xk.W).fill(!1), this.previousHeld = new Array(Xk.W).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, Xk.t)()
      }
      dispatch(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = kk, this.previousHeld = this.eq, this.eq = (0, Xk.n)(kk.values, this.previousHeld);
        for (let ik = 0; ik < Xk.W; ik++) this.suppressedReleases[ik] = !this.eq[ik] && this.consumedButtons[ik], this.eq[ik] || (this.consumedButtons[ik] = !1), this.wakeOwned[ik] && (this.eq[ik] ? (this.consumedButtons[ik] = !0, this.wakeOwned[ik] = !1) : kk.values[ik] < Xk.V && (this.wakeOwned[ik] = !1));
        Math.hypot(kk.leftStick.x, kk.leftStick.y) < ak && (this.leftStickConsumed = !1), Math.hypot(kk.rightStick.x, kk.rightStick.y) < ak && (this.rightStickConsumed = !1);
        const Tk = this.pickActive();
        if ((null === Tk || void 0 === Tk ? void 0 : Tk.name) !== this.activeName) {
          var yk, lk, qk, Lk, tk, Zk;
          const kk = this.activeName,
            Fk = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            Ik = null !== (yk = null === Tk || void 0 === Tk || null === (lk = Tk.peek) || void 0 === lk ? void 0 : lk.call(Tk)) && void 0 !== yk ? yk : null,
            ik = null === kk && !!Ik && !(null === (qk = this.consumers.get(Ik.over)) || void 0 === qk || !qk.onPeekFrame),
            ak = Ik && (Ik.over === kk || ik) ? Ik : null,
            jk = null !== this.peek && this.peek.over === (null === Tk || void 0 === Tk ? void 0 : Tk.name) ? this.peek : null;
          this.deactivateCurrent(null !== ak, null !== jk), this.activeName = null !== (Lk = null === Tk || void 0 === Tk ? void 0 : Tk.name) && void 0 !== Lk ? Lk : null, null === kk || this.handOffPending || this.consumeAllHeld();
          const ek = null === (tk = null !== ak && void 0 !== ak ? ak : jk) || void 0 === tk ? void 0 : tk.stick;
          "left" === ek && Fk.left ? this.leftStickConsumed = !1 : "right" === ek && Fk.right && (this.rightStickConsumed = !1), this.peek = ak, Tk || null === kk ? Tk && (null === (Zk = this.idleResume) || void 0 === Zk ? void 0 : Zk.name) === Tk.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: kk,
            left: Fk.left && this.leftStickConsumed,
            right: Fk.right && this.rightStickConsumed
          }, Tk && (this.idleResume = null);
          for (let Tk = 0; Tk < Xk.W; Tk++) this.previousHeld[Tk] && !this.eq[Tk] && (this.suppressedReleases[Tk] = !0)
        }
        var jk, ek;
        (this.handOffPending = !1, Tk) && (Ik && !ik.has(Tk.name) && this.consumeWakePress(Tk), Tk.onFrame(this.buildInput(kk, Fk, Ik)), this.peek && (null === (jk = this.consumers.get(this.peek.over)) || void 0 === jk || null === (ek = jk.onPeekFrame) || void 0 === ek || ek.call(jk, this.buildInput(kk, Fk, !1, this.peek.stick))))
      }
      consumeWakePress(kk) {
        for (let Tk = 0; Tk < Xk.W; Tk++) {
          var Fk, Ik;
          const ik = Xk.Y[Tk];
          (null !== (Fk = null === (Ik = kk.wakePressActs) || void 0 === Ik ? void 0 : Ik.call(kk, ik)) && void 0 !== Fk ? Fk : yk.includes(ik)) || (this.eq[Tk] ? this.consumedButtons[Tk] = !0 : this.lastFrame.values[Tk] >= Xk.R && (this.wakeOwned[Tk] = !0))
        }
      }
      pickActive() {
        for (const kk of Tk) {
          const Fk = this.consumers.get(kk);
          if (Fk && Fk.isActive()) return Fk
        }
        return null
      }
      deactivateCurrent() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var Ik, Xk, Tk, ik;
        this.activeName && (null === (Ik = this.consumers.get(this.activeName)) || void 0 === Ik || null === (Xk = Ik.onDeactivate) || void 0 === Xk || Xk.call(Ik, kk));
        this.peek && !Fk && (null === (Tk = this.consumers.get(this.peek.over)) || void 0 === Tk || null === (ik = Tk.onDeactivate) || void 0 === ik || ik.call(Tk, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let Tk = 0; Tk < Xk.W; Tk++) this.eq[Tk] && (this.consumedButtons[Tk] = !0);
        const {
          leftStick: Fk,
          rightStick: Ik
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== kk && (this.leftStickConsumed || Math.hypot(Fk.x, Fk.y) >= ak), this.rightStickConsumed = "right" !== kk && (this.rightStickConsumed || Math.hypot(Ik.x, Ik.y) >= ak)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(kk) {
        const Fk = (0, Xk.k)(kk);
        this.eq[Fk] && (this.consumedButtons[Fk] = !0)
      }
      buildInput(kk, Fk, Ik, Tk) {
        const ik = this.eq,
          yk = this.previousHeld,
          lk = Tk ? new Array(Xk.W).fill(!0) : [...this.consumedButtons],
          ak = Tk ? lk : [...this.suppressedReleases],
          qk = !this.leftStickConsumed && (!Tk || "left" === Tk),
          Lk = !this.rightStickConsumed && (!Tk || "right" === Tk);
        return {
          frame: kk,
          dtMs: Fk,
          isHeld: kk => {
            const Fk = (0, Xk.k)(kk);
            return ik[Fk] && !lk[Fk]
          },
          wasPressed: kk => {
            const Fk = (0, Xk.k)(kk);
            return ik[Fk] && !yk[Fk] && !lk[Fk]
          },
          wasReleased: kk => {
            const Fk = (0, Xk.k)(kk);
            return !ik[Fk] && yk[Fk] && !ak[Fk]
          },
          value: Fk => {
            const Ik = (0, Xk.k)(Fk);
            return lk[Ik] ? 0 : kk.values[Ik]
          },
          leftStick: qk ? kk.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: Lk ? kk.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: Ik
        }
      }
    }
  },
  8161: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => tk.g,
      g: () => tk.i,
      k: () => Ek,
      o: () => Ok,
      p: () => nk,
      s: () => Gk
    });
    var Xk = Ik(58),
      Tk = Ik(34),
      ik = Ik(1402),
      yk = Ik(41),
      lk = Ik(8166),
      ak = Ik(8142),
      qk = Ik(8154),
      Lk = Ik(8138),
      tk = Ik(1939),
      Zk = Ik(8173);
    const jk = {
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
      ek = "controllerSettings",
      wk = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      Hk = ["auto", ...lk.b],
      Jk = (kk, Fk) => "string" === typeof Fk && kk.includes(Fk),
      xk = kk => Fk => "number" === typeof Fk && Number.isFinite(Fk) ? (0, Zk.y)(Fk, kk) : void 0,
      Pk = kk => "boolean" === typeof kk ? kk : void 0,
      Kk = kk => Fk => Jk(kk, Fk) ? Fk : void 0,
      Qk = {
        lookSensitivityX: xk(Zk.pb),
        lookSensitivityY: xk(Zk.pb),
        aimLookSensitivity: xk(Zk.n),
        invertLookX: Pk,
        invertLookY: Pk,
        lookCurve: Kk(ak.N),
        lookDeadzone: xk(Zk.F),
        moveDeadzone: xk(Zk.F),
        swapSticks: Pk,
        autoSprint: Pk,
        sneakMode: Kk(["toggle", "hold"]),
        tapHoldTime: Kk(["short", "medium", "long"]),
        attackMode: Kk(["hold", "toggle"]),
        promptFamily: Kk(Hk),
        hideButtonHints: Pk,
        vibration: Pk,
        cursorSpeed: xk(Zk.C),
        cursorMagnetism: Pk,
        buttonRepeat: Kk(ak.l),
        largePointer: Pk,
        menuBackToCategories: Pk,
        swapConfirmBack: Pk,
        menuNavigation: Kk(["hybrid", "focus", "cursor"]),
        inventoryNavigation: Kk(["hybrid", "slot", "cursor"]),
        quickChat: Kk(["wheel", "off"]),
        leaderboardButton: Kk(["shop", "leaderboard"]),
        gyroAiming: Pk,
        gyroSensitivity: xk(Zk.Y),
        gyroActivation: Kk(["always", "aiming", "button"]),
        gyroButton: Kk(ak.Y),
        emoteButton: Kk(["tapHold", "wheel"])
      },
      sk = [{
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
      Vk = kk => {
        const Fk = {};
        if ("object" !== typeof kk || null === kk) return Fk;
        for (const [Ik, Xk] of Object.entries(kk)) Object.prototype.hasOwnProperty.call(qk.g, Ik) && Jk(ak.Y, Xk) && (Fk[Ik] = Xk);
        return Fk
      },
      zk = kk => {
        const Fk = {};
        for (const Ik of Object.keys(jk))("bindings" === Ik ? Object.keys(kk.bindings).length > 0 : kk[Ik] !== jk[Ik]) && (Fk[Ik] = kk[Ik]);
        0 !== Object.keys(Fk).length ? yk.j.setItem(ek, Fk) : yk.j.removeItem(ek)
      };
    let Sk = (() => {
        const kk = yk.j.getItem(ek),
          Fk = (kk => {
            const Fk = "object" === typeof kk && null !== kk ? kk : {},
              Ik = {
                ...jk,
                bindings: Vk(Fk.bindings)
              };
            for (const Tk of Object.keys(Qk)) {
              const kk = Qk[Tk](Fk[Tk]);
              void 0 !== kk && (Ik[Tk] = kk)
            }
            const Xk = Object.keys(Fk).filter((kk => !!Object.prototype.hasOwnProperty.call(jk, kk) && ("bindings" === kk ? "object" !== typeof Fk.bindings || null === Fk.bindings || Object.keys(Fk.bindings).length !== Object.keys(Ik.bindings).length : Ik[kk] !== Fk[kk])));
            return Xk.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${Xk.join(", ")}`), Ik
          })(kk);
        return null !== kk && void 0 !== kk && zk(Fk), Fk
      })(),
      vk = {
        ...Sk,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const kk = {},
            Fk = new URLSearchParams(window.location.search);
          for (const {
              param: Ik,
              key: Xk
            }
            of sk) {
            const Tk = Qk[Xk](Fk.get(Ik));
            void 0 !== Tk && (kk[Xk] = Tk)
          }
          return kk
        })()
      };
    const Ek = () => vk,
      Ok = () => {
        var kk, Fk;
        const Ik = Ek().promptFamily;
        return "auto" !== Ik ? Ik : null !== (kk = null === (Fk = Lk.e.getActivePad()) || void 0 === Fk ? void 0 : Fk.family) && void 0 !== kk ? kk : "xbox"
      },
      nk = kk => {
        const Fk = vk;
        Sk = {
          ...Sk,
          ...kk
        }, zk(Sk), vk = {
          ...vk,
          ...kk
        }, (kk => {
          Tk.g.GL(tk.i, vk), wk.some((Fk => kk[Fk] !== vk[Fk])) && Tk.g.GL(tk.g, vk)
        })(Fk)
      },
      Gk = () => {
        const [kk, Fk] = (0, Xk.useState)(vk);
        return (0, ik.d)(tk.i, Fk), kk
      }
  },
  8622: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk
    });
    const Xk = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      Tk = kk => Xk.has(kk)
  },
  8138: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => wk.e,
      e: () => Pk
    });
    var Xk = Ik(8142),
      Tk = Ik(8144);
    const ik = .1,
      yk = .3;
    class lk {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(kk, Fk) {
        const Ik = null === this.lastMs ? 0 : Math.min(Math.max(0, Fk - this.lastMs), 100);
        this.lastMs = Fk;
        const Xk = Math.hypot(kk.x, kk.y);
        if (Xk >= yk) return this.anchor = null, void(this.returning = !0);
        Xk >= ik || (this.returning = !1);
        const Tk = this.anchor;
        if (!Tk || Math.hypot(kk.x - Tk.x, kk.y - Tk.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: kk.x,
          y: kk.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += Ik, this.steadyMs < 1e3) return;
        const lk = Math.max(Xk, Math.hypot(Tk.x, Tk.y));
        lk < ik ? this.deadzone = 0 : this.returning && (this.deadzone = lk + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(kk) {
        return Math.hypot(kk.x, kk.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : kk
      }
    }
    const ak = (kk, Fk) => {
        var Ik, Xk;
        return null !== (Ik = kk && (null === (Xk = Object.getOwnPropertyDescriptor(kk, Fk)) || void 0 === Xk ? void 0 : Xk.get)) && void 0 !== Ik ? Ik : null
      },
      qk = kk => {
        const Fk = kk.vendorName;
        return "string" === typeof Fk ? Fk : void 0
      },
      Lk = ((kk, Fk) => {
        const Ik = ak(kk, "index"),
          Xk = ak(kk, "id"),
          Tk = ak(kk, "connected"),
          ik = ak(kk, "mapping"),
          yk = ak(kk, "buttons"),
          lk = ak(kk, "axes"),
          Lk = ak(Fk, "pressed"),
          tk = ak(Fk, "value");
        return Ik && Xk && Tk && ik && yk && lk && Lk && tk ? kk => {
          const Fk = yk.call(kk),
            ak = lk.call(kk),
            Zk = {
              index: Number(Ik.call(kk)),
              id: String(Xk.call(kk)),
              connected: !0 === Tk.call(kk),
              mapping: String(ik.call(kk)),
              buttons: [],
              axes: [],
              vendorName: qk(kk)
            };
          for (let Ik = 0; Ik < Fk.length; Ik++) Zk.buttons.push({
            pressed: !0 === Lk.call(Fk[Ik]),
            value: Number(tk.call(Fk[Ik]))
          });
          for (let Ik = 0; Ik < ak.length; Ik++) Zk.axes.push(Number(ak[Ik]));
          return Zk
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      tk = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var Zk = Ik(1377),
      jk = Ik(1381);
    const ek = kk => ({
      pressed: kk,
      value: kk ? 1 : 0
    });
    var wk = Ik(1939);
    const Hk = yk,
      Jk = kk => {
        const Fk = new Array(Xk.W).fill(0);
        for (let Ik = 0; Ik < Xk.W && Ik < kk.buttons.length; Ik++) {
          const Tk = kk.buttons[Ik];
          Fk[Ik] = Tk.pressed && !(0, Xk.J)(Ik) ? Math.max(Tk.value, Xk.w) : Tk.value
        }
        return Fk
      },
      xk = (kk, Fk) => {
        var Ik, Xk;
        return {
          x: null !== (Ik = kk.axes[Fk]) && void 0 !== Ik ? Ik : 0,
          y: null !== (Xk = kk.axes[Fk + 1]) && void 0 !== Xk ? Xk : 0
        }
      };
    const Pk = new class {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Lk;
        this.readGamepads = kk, this.requireTrustedPads = Fk, this.nativeReader = Ik, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = kk => {
          kk.isTrusted && this.trustedIndices.add(kk.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = kk => {
          this.trustedIndices.delete(kk.gamepad.index)
        }, this.Dt = kk => {
          if (this.rafId = 0, !this.running) return;
          const Fk = 0 === this.lastTimestampMs ? 16 : Math.min(100, kk - this.lastTimestampMs);
          this.lastTimestampMs = kk;
          try {
            this.poll(kk, Fk)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.Dt))
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
      onFrame(kk) {
        return this.frameListeners.add(kk), () => {
          this.frameListeners.delete(kk)
        }
      }
      onActivePadChanged(kk) {
        return this.connectionListeners.add(kk), () => {
          this.connectionListeners.delete(kk)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(kk) {
        return this.connectedListeners.add(kk), () => {
          this.connectedListeners.delete(kk)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const kk = this.readPads()[this.activeInfo.index],
          Fk = kk ? this.readPad(kk) : null;
        return Fk && Fk.id === this.activeInfo.id ? kk : null
      }
      poll(kk, Fk) {
        var Ik, Tk;
        const ik = this.readPads();
        let yk = null,
          ak = !1;
        const qk = [],
          Lk = Math.max(ik.length, this.slots.length);
        for (let Pk = 0; Pk < Lk; Pk++) {
          var tk;
          const Fk = Pk < ik.length ? ik[Pk] : null,
            Ik = Fk ? this.readPad(Fk) : null;
          if (!Ik || !Ik.connected || !this.isUsable(Ik)) {
            this.slots[Pk] = null;
            continue
          }
          let Tk = this.slots[Pk];
          Tk && Tk.id === Ik.id || (Tk = {
            id: Ik.id,
            eq: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new lk,
            rightRest: new lk
          }, this.slots[Pk] = Tk);
          const Lk = xk(Ik, 0),
            Zk = xk(Ik, 2);
          !Tk.leftSettled && Math.hypot(Lk.x, Lk.y) < Hk && (Tk.leftSettled = !0), !Tk.rightSettled && Math.hypot(Zk.x, Zk.y) < Hk && (Tk.rightSettled = !0), Tk.leftRest.observe(Lk, kk), Tk.rightRest.observe(Zk, kk);
          const jk = Jk(Ik),
            ek = (0, Xk.n)(jk, Tk.eq),
            wk = Tk.eq,
            Kk = ek.map(((kk, Fk) => kk && !wk[Fk]));
          Tk.eq = ek;
          const Qk = {
            pad: Ik,
            slot: Tk,
            values: jk
          };
          Pk === (null === (tk = this.activeInfo) || void 0 === tk ? void 0 : tk.index) && Ik.id === this.activeInfo.id ? (yk = Qk, ak = Kk.includes(!0)) : Kk.includes(!0) && qk.push({
            polled: Qk,
            rose: Kk
          })
        }
        const Zk = this.slots.some((kk => null !== kk));
        if (Zk !== this.anyPadConnected) {
          this.anyPadConnected = Zk;
          for (const kk of this.connectedListeners) kk()
        }
        const jk = null !== (Ik = null === (Tk = yk) || void 0 === Tk ? void 0 : Tk.slot.eq) && void 0 !== Ik ? Ik : [],
          ek = ak ? void 0 : qk.find((kk => {
            let {
              rose: Fk
            } = kk;
            return Fk.some(((kk, Fk) => kk && !jk[Fk]))
          }));
        if (ek ? (yk = ek.polled, this.setActive(ek.polled.pad)) : this.activeInfo && !yk && this.setActive(null), !yk || !this.activeInfo) return;
        const wk = ((kk, Fk) => {
          let {
            pad: Ik,
            slot: Tk,
            values: ik
          } = kk;
          const yk = (0, Xk.t)(Fk);
          return yk.values = ik, Tk.leftSettled && (yk.leftStick = Tk.leftRest.apply(xk(Ik, 0))), Tk.rightSettled && (yk.rightStick = Tk.rightRest.apply(xk(Ik, 2))), yk
        })(yk, kk);
        for (const Xk of this.frameListeners) Xk(wk, Fk, this.activeInfo)
      }
      readPad(kk) {
        const Fk = this.readSnapshot(kk);
        return Fk && (0, jk.g)(Fk) ? (kk => {
          const Fk = Fk => {
              var Ik;
              return null !== (Ik = kk.buttons[Fk]) && void 0 !== Ik ? Ik : ek(!1)
            },
            Ik = Fk => {
              var Ik;
              return null !== (Ik = kk.axes[Fk]) && void 0 !== Ik ? Ik : 0
            },
            Xk = kk.axes.length > 9,
            Tk = Xk ? (kk => {
              const Fk = 0 !== kk;
              return {
                up: Fk && (kk >= -1 && kk < -.7 || kk >= .95 && kk <= 1),
                right: Fk && kk >= -.75 && kk < -.1,
                down: Fk && kk >= -.2 && kk < .45,
                left: Fk && kk >= .4 && kk <= 1
              }
            })(Ik(9)) : {
              up: Ik(5) < -.5,
              down: Ik(5) > .5,
              left: Ik(4) < -.5,
              right: Ik(4) > .5
            };
          return {
            ...kk,
            mapping: "standard",
            buttons: [Fk(1), Fk(2), Fk(0), Fk(3), Fk(4), Fk(5), Fk(6), Fk(7), Fk(8), Fk(9), Fk(10), Fk(11), ek(Tk.up), ek(Tk.down), ek(Tk.left), ek(Tk.right), Fk(12)],
            axes: [Ik(0), Ik(1), Ik(2), Ik(Xk ? 5 : 3)]
          }
        })(Fk) : Fk
      }
      readSnapshot(kk) {
        if (this.nativeReader) try {
          return this.nativeReader(kk)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (kk => {
          const Fk = kk;
          return {
            index: Fk.index,
            id: Fk.id,
            connected: Fk.connected,
            mapping: Fk.mapping,
            buttons: Array.from(Fk.buttons, (kk => ({
              pressed: kk.pressed,
              value: kk.value
            }))),
            axes: Array.from(Fk.axes),
            vendorName: qk(kk)
          }
        })(kk)
      }
      isUsable(kk) {
        return !(0, Zk.f)(kk.id) && ("standard" !== kk.mapping ? (this.warnedNonStandardIds.has(kk.id) || (this.warnedNonStandardIds.add(kk.id), console.warn(`Controller "${kk.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(kk.index))
      }
      setActive(kk) {
        this.activeInfo = kk ? {
          index: kk.index,
          id: kk.id,
          family: (0, Tk.b)(kk.id, kk.vendorName)
        } : null;
        for (const Fk of this.connectionListeners) Fk(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (kk) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", kk)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.Dt))
      }
    }((() => tk ? tk.call(navigator) : []), !0);
    Pk.listenForConnections()
  },
  8706: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ik,
      d: () => yk,
      h: () => lk,
      j: () => Tk
    });
    var Xk = Ik(8709);
    const Tk = kk => {
        const Fk = [];
        kk.holdingGun && Fk.push({
          kind: "reload"
        }), kk.touchscreenActionButton && Fk.push({
          kind: "touchButton",
          label: kk.touchscreenActionButton
        });
        for (const ik of null !== (Ik = null === (Tk = kk.customButtons) || void 0 === Tk ? void 0 : Tk.filter(Xk.f)) && void 0 !== Ik ? Ik : []) {
          var Ik, Tk;
          Fk.push({
            kind: "customButton",
            id: ik.id,
            icon: ik.icon,
            description: ik.description
          })
        }
        return Fk
      },
      ik = kk => kk.length >= 2,
      yk = kk => "specialAction" !== kk.kind,
      lk = (kk, Fk) => {
        if (null === kk || null === Fk) return kk === Fk;
        if (kk.kind !== Fk.kind) return !1;
        switch (kk.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return kk.action === Fk.action;
          case "customButton":
            return kk.id === Fk.id && kk.icon === Fk.icon;
          case "touchButton":
            return kk.label === Fk.label
        }
      }
  },
  8632: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk
    });
    const Xk = {
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
  8703: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Lk,
      f: () => jk,
      j: () => tk,
      l: () => ek
    });
    var Xk = Ik(58),
      Tk = Ik(34),
      ik = Ik(1402),
      yk = Ik(8706),
      lk = Ik(8715);
    let ak = null;
    const qk = () => ak,
      Lk = kk => {
        (0, yk.h)(ak, kk) || (ak = kk, Tk.g.GL(lk.e, ak))
      },
      tk = () => {
        const [kk, Fk] = (0, Xk.useState)(qk);
        return (0, ik.d)(lk.e, Fk), kk
      };
    let Zk = !1;
    const jk = kk => {
        kk !== Zk && (Zk = kk, Tk.g.GL(lk.g, kk))
      },
      ek = () => {
        const [kk, Fk] = (0, Xk.useState)(Zk);
        return (0, ik.d)(lk.g, Fk), kk
      }
  },
  8728: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => yk,
      f: () => lk
    });
    var Xk = Ik(34),
      Tk = Ik(8715);
    let ik = !1;
    const yk = () => ik,
      lk = kk => {
        kk !== ik && (ik = kk, Xk.g.GL(Tk.k, ik))
      }
  },
  8720: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => lk,
      e: () => ak
    });
    var Xk = Ik(34),
      Tk = Ik(8715);
    let ik = null,
      yk = 0;
    const lk = () => ik,
      ak = kk => {
        null === kk && null === ik || (ik = null === kk ? null : {
          id: ++yk,
          holdMs: kk
        }, Xk.g.GL(Tk.n, ik))
      }
  },
  8715: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik,
      e: () => Xk,
      g: () => Tk,
      k: () => lk,
      n: () => ak,
      p: () => qk,
      t: () => yk
    });
    const Xk = "controllerActionHintChanged",
      Tk = "controllerActionWheelHintChanged",
      ik = "controllerOpenChat",
      yk = "controllerSneakToggledChanged",
      lk = "controllerAttackLatchedChanged",
      ak = "controllerDropStackHoldChanged",
      qk = "controllerPickBlockHintChanged"
  },
  8734: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk,
      f: () => lk
    });
    var Xk = Ik(34),
      Tk = Ik(8715);
    let ik = !1;
    const yk = () => ik,
      lk = kk => {
        kk !== ik && (ik = kk, Xk.g.GL(Tk.p, ik))
      }
  },
  8814: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk,
      g: () => lk
    });
    var Xk = Ik(34),
      Tk = Ik(8715);
    let ik = !1;
    const yk = () => ik,
      lk = kk => {
        kk !== ik && (ik = kk, Xk.g.GL(Tk.t, ik))
      }
  },
  8680: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Xk
    });
    class Xk {
      constructor() {
        this.downAtMs = null
      }
      update(kk, Fk, Ik, Xk) {
        if (kk) return this.downAtMs = Ik, null;
        if (null === this.downAtMs) return null;
        const Tk = Ik - this.downAtMs >= Xk;
        return Fk ? Tk ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, Tk ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8199: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => tk,
      i: () => Zk,
      j: () => lk,
      n: () => Pk,
      q: () => xk
    });
    var Xk = Ik(41),
      Tk = Ik(8166),
      ik = Ik(8142);
    const yk = (() => {
        try {
          return Ik(8204)
        } catch {
          return null
        }
      })(),
      lk = [...ik.Y, "LeftStick", "RightStick"],
      ak = new Map,
      qk = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      Lk = (new Set(Object.values(qk)), {
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
      tk = (kk, Fk) => {
        var Ik, Xk;
        return null !== (Ik = null === (Xk = Lk[qk[kk]]) || void 0 === Xk ? void 0 : Xk[Fk]) && void 0 !== Ik ? Ik : 1
      },
      Zk = (kk, Fk) => {
        const Ik = `./${qk[kk]}/${Fk}.svg`;
        let Xk = ak.get(Ik);
        return void 0 === Xk && (Xk = yk ? yk(Ik) : "", ak.set(Ik, Xk)), Xk
      },
      jk = new Set,
      ek = [],
      wk = kk => {
        if (!jk.has(kk)) {
          jk.add(kk);
          for (const Fk of lk) {
            const Ik = Zk(kk, Fk);
            if (Ik) {
              const kk = new Image;
              kk.crossOrigin = "anonymous", kk.src = Ik, ek.push(kk)
            }
          }
        }
      },
      Hk = "controllerGlyphFamily";
    let Jk = null;
    const xk = kk => {
        kk !== Jk && (Jk = kk, Xk.j.setItem(Hk, kk), wk(kk))
      },
      Pk = () => {
        const kk = Xk.j.getItem(Hk);
        (0, Tk.f)(kk) && kk !== Jk && (Jk = kk, wk(kk))
      }
  },
  8833: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Nk,
      f: () => ck
    });
    var Xk = Ik(58),
      Tk = Ik(34),
      ik = Ik(1402),
      yk = Ik(8152),
      lk = Ik(8138),
      ak = Ik(8180),
      qk = Ik(8161);
    const Lk = {
        x: 0,
        y: 0,
        z: 0
      },
      tk = Math.PI / 180,
      Zk = kk => Math.hypot(kk.x, kk.y, kk.z),
      jk = (kk, Fk) => ({
        x: kk.x * Fk,
        y: kk.y * Fk,
        z: kk.z * Fk
      }),
      ek = (kk, Fk) => ({
        x: kk.x + Fk.x,
        y: kk.y + Fk.y,
        z: kk.z + Fk.z
      }),
      wk = (kk, Fk) => ({
        x: kk.x - Fk.x,
        y: kk.y - Fk.y,
        z: kk.z - Fk.z
      }),
      Hk = kk => {
        const Fk = Zk(kk);
        return 0 === Fk ? Lk : jk(kk, 1 / Fk)
      },
      Jk = kk => ({
        min: {
          ...kk
        },
        max: {
          ...kk
        }
      }),
      xk = (kk, Fk) => ({
        min: {
          x: Math.min(kk.min.x, Fk.x),
          y: Math.min(kk.min.y, Fk.y),
          z: Math.min(kk.min.z, Fk.z)
        },
        max: {
          x: Math.max(kk.max.x, Fk.x),
          y: Math.max(kk.max.y, Fk.y),
          z: Math.max(kk.max.z, Fk.z)
        }
      }),
      Pk = (kk, Fk) => kk.max.x - kk.min.x <= Fk && kk.max.y - kk.min.y <= Fk && kk.max.z - kk.min.z <= Fk;
    class Kk {
      constructor() {
        this.bias = Lk, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Lk, this.windowSec = 0
      }
      update(kk) {
        const Fk = this.gyroRange ? xk(this.gyroRange, kk.gyro) : Jk(kk.gyro),
          Ik = kk.accel ? this.accelRange ? xk(this.accelRange, kk.accel) : Jk(kk.accel) : null;
        if (!Pk(Fk, 1) || Ik && !Pk(Ik, .01)) return void this.restartWindow(kk);
        if (this.gyroRange = Fk, this.accelRange = Ik, this.sum = ek(this.sum, jk(kk.gyro, kk.dtSec)), this.windowSec += kk.dtSec, this.windowSec < 1) return;
        const Xk = jk(this.sum, 1 / this.windowSec);
        if (Zk(Xk) > 5) return;
        const Tk = wk(Xk, this.bias);
        let ik = 0;
        !this.calibrated || this.windowSec >= 3 ? ik = 1 : Zk(Tk) <= 1 && (ik = Math.min(1, kk.dtSec / 1)), this.bias = ek(this.bias, jk(Tk, ik)), this.calibrated = this.calibrated || ik > 0
      }
      correct(kk) {
        return wk(kk, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = Lk, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Lk, this.windowSec = 0
      }
      restartWindow(kk) {
        this.gyroRange = Jk(kk.gyro), this.accelRange = kk.accel ? Jk(kk.accel) : null, this.sum = Lk, this.windowSec = 0
      }
    }
    class Qk {
      constructor() {
        this.down = null
      }
      update(kk, Fk, Ik) {
        const Xk = Hk(jk(Fk, -1));
        if (!this.down) return this.down = Xk, Xk;
        const Tk = jk(kk, tk * Ik),
          ik = this.down,
          yk = {
            x: ik.x - (Tk.y * ik.z - Tk.z * ik.y),
            y: ik.y - (Tk.z * ik.x - Tk.x * ik.z),
            z: ik.z - (Tk.x * ik.y - Tk.y * ik.x)
          },
          lk = 0 === Zk(Xk) ? 0 : Math.min(1, Ik / .25);
        var ak, qk;
        return this.down = Hk((qk = lk, ek(ak = yk, jk(wk(Xk, ak), qk)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class sk {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(kk, Fk, Ik) {
        const Xk = Math.hypot(kk, Fk),
          Tk = Math.max(0, Math.min(1, (Xk - 2) / 2)),
          ik = {
            yaw: kk * (1 - Tk),
            pitch: Fk * (1 - Tk),
            dtSec: Ik
          };
        for (this.entries.push(ik), this.windowSec += Ik; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let yk = 0,
          lk = 0;
        for (const qk of this.entries) yk += qk.yaw * qk.dtSec, lk += qk.pitch * qk.dtSec;
        const ak = this.windowSec > 0 ? {
          yaw: yk / this.windowSec,
          pitch: lk / this.windowSec
        } : {
          yaw: ik.yaw,
          pitch: ik.pitch
        };
        return {
          yaw: kk * Tk + ak.yaw,
          pitch: Fk * Tk + ak.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class Vk {
      constructor() {
        this.calibrator = new Kk, this.gravity = new Qk, this.smoother = new sk
      }
      process(kk, Fk, Ik) {
        const Xk = Math.max(0, Math.min(.05, Fk));
        this.calibrator.update({
          ...kk,
          dtSec: Xk
        });
        const Tk = this.calibrator.correct(kk.gyro);
        let ik = Tk.y;
        "player" === Ik && kk.accel && (ik = ((kk, Fk) => {
          const Ik = kk.y * Fk.y + kk.z * Fk.z;
          return -Math.sign(Ik) * Math.min(1.41 * Math.abs(Ik), Math.hypot(kk.y, kk.z))
        })(Tk, this.gravity.update(Tk, kk.accel, Xk)));
        const yk = this.smoother.apply(ik, Tk.x, Xk),
          lk = ((kk, Fk) => {
            const Ik = Math.hypot(kk, Fk);
            if (Ik >= 1) return {
              yaw: kk,
              pitch: Fk
            };
            const Xk = Ik / 1;
            return {
              yaw: kk * Xk,
              pitch: Fk * Xk
            }
          })(yk.yaw, yk.pitch);
        return {
          yawDeg: lk.yaw * Xk,
          pitchDeg: lk.pitch * Xk
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
    const zk = (kk, Fk) => {
      var Ik, Xk, Tk;
      const ik = Fk * tk,
        yk = null !== (Ik = kk.beta) && void 0 !== Ik ? Ik : 0,
        lk = null !== (Xk = kk.gamma) && void 0 !== Xk ? Xk : 0;
      return {
        x: yk * Math.cos(ik) - lk * Math.sin(ik),
        y: yk * Math.sin(ik) + lk * Math.cos(ik),
        z: null !== (Tk = kk.alpha) && void 0 !== Tk ? Tk : 0
      }
    };
    var Sk = Ik(8840);
    class vk {
      constructor(kk, Fk, Ik) {
        this.hid = kk, this.sink = Fk, this.onControllersChanged = Ik, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = kk => {
          this.openController(kk.device).catch((kk => {
            console.warn("Could not open motion controller", kk)
          }))
        }, this.onDisconnect = kk => {
          this.opening.has(kk.device) && this.disconnectedWhileOpening.add(kk.device);
          const Fk = this.controllers.get(kk.device);
          Fk && (this.forget(Fk), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const kk = await this.hid.getDevices();
        for (const Fk of kk) await this.openController(Fk).catch((kk => {
          console.warn("Could not open motion controller", kk)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const kk of [...this.controllers.values()]) this.forget(kk);
        this.onControllersChanged()
      }
      async request() {
        const kk = await this.hid.requestDevice({
          filters: Sk.h
        });
        let Fk = 0;
        for (const Ik of kk) await this.openController(Ik).catch((kk => {
          console.warn("Could not open motion controller", kk), Fk++
        }));
        return Fk
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((kk => null !== (0, Sk.f)(kk.vendorId, kk.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((kk => kk.kind))
      }
      forget(kk) {
        kk.device.removeEventListener("inputreport", kk.onReport), this.controllers.get(kk.device) === kk && this.controllers.delete(kk.device)
      }
      async openController(kk) {
        const Fk = (0, Sk.f)(kk.vendorId, kk.productId);
        if (!Fk || !this.running || this.controllers.has(kk) || this.opening.has(kk)) return;
        this.opening.add(kk);
        let Ik = !1;
        try {
          kk.opened || await kk.open()
        } finally {
          this.opening.delete(kk), Ik = this.disconnectedWhileOpening.delete(kk)
        }
        if (Ik) return void kk.close().catch((kk => {
          console.debug("Could not close an unplugged motion controller", kk)
        }));
        if (!this.running) return;
        const Xk = {
          device: kk,
          kind: Fk,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: kk => {
            this.onReport(Xk, kk)
          }
        };
        this.controllers.set(kk, Xk), kk.addEventListener("inputreport", Xk.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(Xk)
        } catch (Tk) {
          console.warn(`Could not turn on motion for ${Fk}`, Tk), this.controllers.get(kk) === Xk && (this.forget(Xk), this.onControllersChanged())
        }
      }
      async enableMotion(kk) {
        let {
          device: Fk,
          kind: Ik
        } = kk;
        if ((0, Sk.g)(Ik))
          for (const Xk of Sk.p[Ik]) await Fk.receiveFeatureReport(Xk).catch((kk => {
            console.debug(`Motion controller feature report ${Xk} unavailable`, kk)
          }));
        else
          for (let Xk = 0; Xk < 2; Xk++)
            for (const {
                subcommand: kk,
                args: Ik
              }
              of Sk.r) await Fk.sendReport(Sk.u, (0, Sk.d)(this.switchPacketCounter++, kk, Ik)), await new Promise((kk => {
              setTimeout(kk, 60)
            }))
      }
      onReport(kk, Fk) {
        const Ik = (0, Sk.n)(kk.kind, Fk.reportId, Fk.data, kk.device.productId);
        if (!Ik) return;
        const Xk = null === kk.lastEventMs ? 0 : (Fk.timeStamp - kk.lastEventMs) / 1e3;
        kk.lastEventMs = Fk.timeStamp;
        let Tk = Ik.dtSec;
        if (null !== Tk && Xk > 0 && (Tk = Math.max(.001, Math.min(.017, Xk / Ik.readings.length))), null === Tk && null !== Ik.sensorClock && (0, Sk.g)(kk.kind)) {
          const Fk = (0, Sk.o)(kk.kind, kk.lastClock, Ik.sensorClock);
          kk.lastClock = Ik.sensorClock, Tk = 0 === Fk ? null : Fk
        }
        if (kk.lastReadingMs = Fk.timeStamp, this.isPreferred(kk, Fk.timeStamp))
          for (const yk of Ik.readings) {
            var ik;
            this.sink(yk, null !== (ik = Tk) && void 0 !== ik ? ik : Xk, `hid${kk.openedOrder}`)
          }
      }
      isPreferred(kk, Fk) {
        const Ik = kk => 1e6 * Sk.m[kk.kind] + kk.openedOrder;
        for (const Xk of this.controllers.values())
          if (Xk !== kk && Fk - Xk.lastReadingMs < 500 && Ik(Xk) < Ik(kk)) return !1;
        return !0
      }
    }
    var Ek = Ik(95);
    const Ok = () => DeviceMotionEvent,
      nk = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, Ek.isMobile)(),
      Gk = () => {
        var kk;
        const Fk = null === (kk = window.screen.orientation) || void 0 === kk ? void 0 : kk.angle;
        return "number" === typeof Fk ? Fk : "number" === typeof window.orientation ? window.orientation : 0
      };
    class pk {
      constructor(kk, Fk) {
        this.sink = kk, this.onStateChanged = Fk, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((kk => {
            console.warn("Could not enable the motion sensor", kk)
          }))
        }, this.onMotion = kk => {
          const Fk = kk.rotationRate;
          if (!Fk || null === Fk.alpha && null === Fk.beta && null === Fk.gamma) return;
          const Ik = null === this.lastEventMs ? 0 : (kk.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = kk.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: zk(Fk, Gk()),
            accel: null
          }, Ik, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof Ok().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const kk = Ok().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof kk) return void this.listen();
        let Fk;
        this.disarmGestureRequest();
        try {
          Fk = await kk.call(DeviceMotionEvent)
        } catch (Ik) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), Ik
        }
        this.wanted && ("granted" === Fk ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(kk) {
        this.state !== kk && (this.state = kk, this.onStateChanged())
      }
    }
    const uk = "controllerGyroStatusChanged",
      bk = {
        JG: 0,
        xG: 0
      },
      Rk = kk => {
        var Fk, Ik;
        return "undefined" === typeof document || (null === (Fk = null === (Ik = document.featurePolicy) || void 0 === Ik ? void 0 : Ik.allowsFeature(kk)) || void 0 === Fk || Fk)
      };
    class Uk {
      constructor() {
        this.processor = new Vk, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = kk => {
          const Fk = kk.gyroAiming && lk.e.hasConnectedPad();
          var Ik, Xk;
          Fk !== this.phoneRunning && (this.phoneRunning = Fk, Fk ? null === (Ik = this.phone) || void 0 === Ik || Ik.start() : null === (Xk = this.phone) || void 0 === Xk || Xk.stop());
          if (kk.gyroAiming !== this.running) {
            var Tk, ik;
            if (this.running = kk.gyroAiming, this.running) null === (Tk = this.hid) || void 0 === Tk || Tk.start().catch((kk => {
              console.warn("Could not open motion controllers", kk)
            }));
            else null === (ik = this.hid) || void 0 === ik || ik.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          Tk.g.GL(uk, this.getStatus())
        };
        const kk = (() => {
            var kk;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (kk = navigator.hid) && void 0 !== kk ? kk : null
          })(),
          Fk = Rk("hid");
        this.hidBlocked = null !== kk && !Fk, this.hid = kk && Fk ? new vk(kk, ((kk, Fk, Ik) => {
          this.lastHidReadingMs = performance.now(), this.feed(kk, Fk, "player", Ik)
        }), this.publishStatus) : null;
        const Ik = Rk("accelerometer") && Rk("gyroscope");
        this.phoneBlocked = nk() && !Ik, this.phone = nk() && Ik ? new pk(((kk, Fk, Ik) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(kk, Fk, "local", Ik)
        }), this.publishStatus) : null, Tk.g.subscribe(qk.g, this.syncWithSettings), lk.e.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, qk.k)()), this.publishStatus()
        })), this.syncWithSettings((0, qk.k)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var kk, Fk, Ik, Xk;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (kk = null === (Fk = this.hid) || void 0 === Fk ? void 0 : Fk.getConnectedKinds()) && void 0 !== kk ? kk : [],
          phoneMotion: null !== (Ik = null === (Xk = this.phone) || void 0 === Xk ? void 0 : Xk.getState()) && void 0 !== Ik ? Ik : "off",
          padConnected: lk.e.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var kk;
        await (null === (kk = this.phone) || void 0 === kk ? void 0 : kk.requestPermission())
      }
      drainLookDelta() {
        const kk = performance.now();
        kk - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = kk;
        const Fk = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const Ik = (0, qk.k)();
        return Ik.gyroAiming && (kk => {
          let {
            activation: Fk,
            isHeld: Ik,
            useButton: Xk,
            gyroButton: Tk
          } = kk;
          return "always" === Fk || Ik("aiming" === Fk ? Xk : Tk)
        })({
          activation: Ik.gyroActivation,
          isHeld: kk => ak.b.isButtonHeld(kk),
          useButton: (0, yk.j)("use"),
          gyroButton: Ik.gyroButton
        }) ? ((kk, Fk) => ({
          JG: -kk.yawDeg * Fk * tk,
          xG: -kk.pitchDeg * Fk * tk
        }))(Fk, Ik.gyroSensitivity) : bk
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(kk, Fk) {
        this.feed(kk, Fk, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(kk, Fk, Ik, Xk) {
        this.source !== Xk && (this.processor.reset(), this.source = Xk);
        const Tk = this.processor.process(kk, Fk, Ik);
        this.pendingYawDeg += Tk.yawDeg, this.pendingPitchDeg += Tk.pitchDeg
      }
    }
    let Ck = null;
    const Nk = () => (Ck || (Ck = new Uk), Ck),
      ck = () => {
        const [kk, Fk] = (0, Xk.useState)((() => Nk().getStatus()));
        return (0, ik.d)(uk, Fk), (0, Xk.useEffect)((() => {
          Fk(Nk().getStatus())
        }), []), kk
      }
  },
  8840: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Qk,
      f: () => ak,
      g: () => Xk,
      h: () => lk,
      k: () => qk,
      m: () => Lk,
      n: () => xk,
      o: () => Hk,
      p: () => Vk,
      r: () => sk,
      u: () => Pk
    });
    const Xk = kk => "dualShock4" === kk || "dualSense" === kk,
      Tk = 1356,
      ik = 1406,
      yk = [{
        vendorId: Tk,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: Tk,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: Tk,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: Tk,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: Tk,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: ik,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: ik,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: ik,
        productId: 8199,
        kind: "joyConRight"
      }],
      lk = yk.map((kk => {
        let {
          vendorId: Fk,
          productId: Ik
        } = kk;
        return {
          vendorId: Fk,
          productId: Ik
        }
      })),
      ak = (kk, Fk) => {
        var Ik, Xk;
        return null !== (Ik = null === (Xk = yk.find((Ik => Ik.vendorId === kk && Ik.productId === Fk))) || void 0 === Xk ? void 0 : Xk.kind) && void 0 !== Ik ? Ik : null
      },
      qk = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      Lk = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      tk = 2e3 / 32767,
      Zk = 1 / 8192,
      jk = 936 / 13371,
      ek = (kk, Fk, Ik) => ({
        x: kk.getInt16(Fk, !0) * Ik,
        y: kk.getInt16(Fk + 2, !0) * Ik,
        z: kk.getInt16(Fk + 4, !0) * Ik
      }),
      wk = kk => 0 === kk.x && 0 === kk.y && 0 === kk.z,
      Hk = (kk, Fk, Ik) => null === Fk ? null : "dualShock4" === kk ? 16 * (Ik - Fk & 65535) / 3 / 1e6 : (Ik - Fk >>> 0) / 3 / 1e6,
      Jk = (kk, Fk) => "joyConRight" === Fk ? {
        x: kk.y,
        y: -kk.z,
        z: -kk.x
      } : {
        x: -kk.y,
        y: kk.z,
        z: -kk.x
      },
      xk = (kk, Fk, Ik, Tk) => Xk(kk) ? ((kk, Fk, Ik, Xk) => {
        const Tk = ((kk, Fk, Ik) => "dualShock4" === kk ? 1 === Fk && Ik >= 63 ? 0 : 17 === Fk && Ik >= 65 ? 2 : null : 1 === Fk && Ik >= 62 ? 0 : 49 === Fk && Ik >= 63 ? 1 : null)(kk, Fk, Ik.byteLength);
        if (null === Tk) return null;
        if (2976 === Xk && 1 === Fk && 0 !== (4 & Ik.getUint8(30))) return null;
        const ik = Tk + ("dualShock4" === kk ? 12 : 15),
          yk = ek(Ik, ik, tk),
          lk = ek(Ik, ik + 6, Zk);
        return wk(yk) && wk(lk) ? null : {
          readings: [{
            gyro: yk,
            accel: lk
          }],
          dtSec: null,
          sensorClock: "dualShock4" === kk ? Ik.getUint16(Tk + 9, !0) : Ik.getUint32(Tk + 27, !0)
        }
      })(kk, Fk, Ik, Tk) : ((kk, Fk, Ik) => {
        if (48 !== Fk && 49 !== Fk || Ik.byteLength < 48) return null;
        const Xk = [];
        for (let Tk = 0; Tk < 3; Tk++) {
          const Fk = ek(Ik, 12 + 12 * Tk, 244e-6),
            ik = ek(Ik, 18 + 12 * Tk, jk);
          if (wk(ik) && wk(Fk)) return null;
          Xk.push({
            gyro: Jk(ik, kk),
            accel: Jk(Fk, kk)
          })
        }
        return {
          readings: Xk,
          dtSec: .005,
          sensorClock: null
        }
      })(kk, Fk, Ik),
      Pk = 1,
      Kk = [0, 1, 64, 64, 0, 1, 64, 64],
      Qk = (kk, Fk, Ik) => new Uint8Array([15 & kk, ...Kk, Fk, ...Ik]),
      sk = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      Vk = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8185: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Ok,
      f: () => Uk,
      j: () => Jk,
      n: () => jk.f,
      r: () => pk,
      t: () => Gk,
      x: () => xk,
      z: () => uk,
      C: () => jk.j,
      E: () => jk.m,
      I: () => Ck,
      M: () => jk.o,
      N: () => zk
    });
    var Xk = Ik(58),
      Tk = Ik(25),
      ik = Ik(34),
      yk = Ik(1402),
      lk = Ik(1270),
      ak = Ik(8161),
      qk = Ik(8194),
      Lk = Ik(8144),
      tk = Ik(8138),
      Zk = Ik(8199),
      jk = Ik(1364),
      ek = Ik(8142),
      wk = Ik(8622),
      Hk = Ik(4352);
    const Jk = kk => !kk.repeat && !(0, wk.b)(kk.key),
      xk = "PadHidesCursor";
    let Pk = !1;
    const Kk = kk => {
        kk !== Pk && (Pk = kk, document.documentElement.classList.toggle(xk, kk))
      },
      Qk = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(kk) {
          let Fk = !1,
            Ik = !1;
          kk.values.forEach(((kk, Xk) => {
            const Tk = kk >= (this.buttonsDown[Xk] ? ek.V : ek.R);
            Tk && !this.buttonsDown[Xk] && (Fk = !0, Ik = !0), this.buttonsDown[Xk] = Tk
          }));
          return [kk.leftStick, kk.rightStick].forEach(((kk, Xk) => {
            const Tk = this.stickAnchors[Xk];
            Math.hypot(kk.x, kk.y) < (Tk ? ek.V : .3) ? this.stickAnchors[Xk] = null : (!Tk || Math.hypot(kk.x - Tk.x, kk.y - Tk.y) >= .3) && (this.stickAnchors[Xk] = {
              x: kk.x,
              y: kk.y
            }, Fk = !0, Ik ||= !Tk)
          })), Fk && (this.lastActivityMs = kk.timestampMs), this.onlyMovedOn = Fk && !Ik, Fk
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(kk) {
          return !(kk - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((kk => kk)) || this.stickAnchors.some((kk => null !== kk)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((kk => null !== kk))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let sk = null,
      Vk = !1;
    const zk = () => Vk;
    let Sk = null,
      vk = !1,
      Ek = null;
    const Ok = () => Ek;
    let nk = !1;
    const Gk = kk => {
        if (!Qk.observe(kk)) return !1;
        if (nk && Qk.wasOnlyMoveOn() && !(0, jk.f)()) return !1;
        nk = !1, Vk = !1;
        const Fk = !(0, jk.f)();
        return Fk && (sk = kk, Ek = !Pk && vk && Sk ? {
          ...Sk
        } : null), vk = !1, (0, jk.j)("gamepad"), Kk(!0), (0, Zk.q)((0, ak.o)()), Fk
      },
      pk = kk => !(0, jk.f)() || kk === sk,
      uk = () => {
        Qk.reset()
      },
      bk = () => {
        const kk = Tk.d.get("activeInputDevice"),
          Fk = "gamepad" === kk ? tk.e.getActivePad() : null;
        return {
          device: kk,
          inGame: (0, lk.n)(),
          padMovesMouse: null !== Fk && (0, Lk.d)(Fk.id)
        }
      },
      Rk = kk => {
        document.pointerLockElement ? Sk = null : (Sk ??= {
          x: 0,
          y: 0
        }, Sk.x = kk.clientX, Sk.y = kk.clientY)
      },
      Uk = () => {
        const kk = new Hk.b,
          Fk = Fk => {
            kk.reset(), nk = !1, (0, jk.j)(Fk)
          },
          Ik = kk => {
            if (kk.isTrusted) {
              if (kk instanceof KeyboardEvent) {
                if ((0, jk.h)(kk), !Jk(kk)) return;
                Vk = !0
              }
              if (kk instanceof PointerEvent && "touch" === kk.pointerType) return Sk = null, void Fk("touch");
              kk instanceof PointerEvent && (Rk(kk), vk = !0), ("pointerdown" !== kk.type || (kk => {
                let {
                  device: Fk,
                  inGame: Ik,
                  padMovesMouse: Xk
                } = kk;
                return !("gamepad" === Fk && Xk && Ik)
              })(bk())) && Fk("keyboardMouse")
            }
          },
          Xk = kk => {
            kk.isTrusted && (Sk = null, Fk("touch"))
          },
          yk = kk => {
            kk.isTrusted && "touch" !== kk.pointerType && !kk.relatedTarget && (Sk = null)
          },
          lk = Ik => {
            if (!Ik.isTrusted || "touch" === Ik.pointerType) return;
            Rk(Ik);
            const Xk = Ik.movementX || 0,
              ik = Ik.movementY || 0;
            if (0 === Xk && 0 === ik) return;
            if (vk = !0, Kk(!1), "keyboardMouse" === Tk.d.get("activeInputDevice")) return;
            const yk = Qk.isHolding(Ik.timeStamp),
              lk = bk(),
              ak = (kk => {
                let {
                  device: Fk,
                  inGame: Ik,
                  padMovesMouse: Xk,
                  padHolding: Tk
                } = kk;
                return ("gamepad" !== Fk || !Xk) && "keyboardMouse" !== Fk && (Ik || !Tk)
              })({
                ...lk,
                inGame: lk.inGame && (0, qk.e)(),
                padHolding: yk
              });
            ak && kk.add(Xk, ik, Ik.timeStamp) && (Fk("keyboardMouse"), nk = Qk.isStickOffRest())
          },
          ak = kk => {
            Kk("gamepad" === kk)
          },
          Lk = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", Ik, Lk), window.addEventListener("pointerdown", Ik, Lk), window.addEventListener("wheel", Ik, Lk), window.addEventListener("touchstart", Xk, Lk), window.addEventListener("pointermove", lk, Lk), window.addEventListener("pointerout", yk, Lk);
        const tk = ik.g.subscribe("appManagerUpdated|activeInputDevice", ak);
        return ak(Tk.d.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", Ik, Lk), window.removeEventListener("pointerdown", Ik, Lk), window.removeEventListener("wheel", Ik, Lk), window.removeEventListener("touchstart", Xk, Lk), window.removeEventListener("pointermove", lk, Lk), window.removeEventListener("pointerout", yk, Lk), Sk = null, ik.g.unsubscribe(tk), Kk(!1)
        }
      },
      Ck = () => {
        const [kk, Fk] = (0, Xk.useState)(ak.o);
        return (0, yk.d)(ak.e, (() => {
          Fk((0, ak.o)())
        })), (0, yk.d)(tk.d, (() => {
          Fk((0, ak.o)())
        })), kk
      }
  },
  8166: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk,
      f: () => Tk
    });
    const Xk = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      Tk = kk => Xk.includes(kk)
  },
  8668: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk,
      d: () => ik,
      g: () => ak,
      k: () => lk
    });
    var Xk = Ik(1402),
      Tk = Ik(1375);
    const ik = "controllerInventoryCursorChanged",
      yk = {
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
      lk = () => {
        var kk, Fk;
        return (0, Xk.f)(ik, null !== (kk = null === (Fk = (0, Tk.h)()) || void 0 === Fk ? void 0 : Fk.getInventoryCursorState()) && void 0 !== kk ? kk : yk)
      },
      ak = () => {
        var kk, Fk;
        return null !== (kk = null === (Fk = (0, Tk.h)()) || void 0 === Fk ? void 0 : Fk.isPadSteppingSlots()) && void 0 !== kk && kk
      }
  },
  8664: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Zk,
      h: () => lk,
      i: () => ak,
      j: () => yk,
      l: () => ik,
      m: () => Lk,
      q: () => tk
    });
    let Xk = null;
    const Tk = new Set,
      ik = kk => (Xk = kk, () => {
        if (Xk === kk) {
          Xk = null;
          for (const kk of Tk) kk()
        }
      }),
      yk = kk => (Tk.add(kk), () => {
        Tk.delete(kk)
      }),
      lk = () => Xk,
      ak = () => null !== Xk;
    let qk = null;
    const Lk = kk => {
        qk = kk
      },
      tk = () => {
        const kk = qk;
        return qk = null, kk
      },
      Zk = (kk, Fk) => {
        var Ik, Xk;
        return null !== (Ik = null !== (Xk = kk.find((kk => kk.element === Fk))) && void 0 !== Xk ? Xk : kk.find((kk => kk.element.contains(Fk)))) && void 0 !== Ik ? Ik : null
      }
  },
  8673: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ik,
      e: () => yk
    });
    var Xk = Ik(58);
    const Tk = new WeakMap,
      ik = kk => {
        var Fk, Ik;
        return null !== (Fk = null === (Ik = Tk.get(kk)) || void 0 === Ik ? void 0 : Ik.current) && void 0 !== Fk ? Fk : null
      },
      yk = (kk, Fk) => {
        const Ik = (0, Xk.useRef)(Fk);
        Ik.current = Fk;
        const ik = (0, Xk.useRef)(null);
        (0, Xk.useEffect)((() => {
          const Fk = kk.current,
            Xk = ik.current;
          Fk !== Xk && (Xk && Tk.get(Xk) === Ik && Tk.delete(Xk), ik.current = Fk, Fk && Tk.set(Fk, Ik))
        })), (0, Xk.useEffect)((() => () => {
          const kk = ik.current;
          kk && Tk.get(kk) === Ik && Tk.delete(kk), ik.current = null
        }), [])
      }
  },
  8811: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk,
      f: () => qk,
      j: () => tk,
      l: () => Lk,
      p: () => ak,
      s: () => jk
    });
    var Xk = Ik(34),
      Tk = Ik(1939),
      ik = Ik(1375),
      yk = Ik(1364);
    const lk = kk => {
        var Fk, Ik;
        return (0, yk.f)() && null !== (Fk = null === (Ik = (0, ik.h)()) || void 0 === Ik ? void 0 : Ik.getGlyphForNoaAction(kk)) && void 0 !== Fk ? Fk : null
      },
      ak = "controllerGlyph:",
      qk = kk => {
        var Fk, Ik;
        return null !== (Fk = null === (Ik = (0, ik.h)()) || void 0 === Ik ? void 0 : Ik.getPadGlyphIconName(kk)) && void 0 !== Fk ? Fk : `${ak}xbox/${kk}`
      },
      Lk = kk => kk.startsWith(ak),
      tk = kk => {
        var Fk, Ik;
        return Lk(kk) && null !== (Fk = null === (Ik = (0, ik.h)()) || void 0 === Ik ? void 0 : Ik.getPadGlyphIconUrl(kk)) && void 0 !== Fk ? Fk : null
      },
      Zk = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", yk.d, Tk.g, Tk.e],
      jk = kk => {
        const Fk = Zk.map((Fk => Xk.g.subscribe(Fk, kk)));
        return () => {
          for (const kk of Fk) Xk.g.unsubscribe(kk)
        }
      }
  },
  8194: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => qk,
      e: () => Lk,
      f: () => ak,
      g: () => lk
    });
    var Xk = Ik(25),
      Tk = Ik(1580),
      ik = Ik(1668);
    const yk = new Map,
      lk = (kk, Fk) => (yk.has(kk) && console.warn(`Gameplay blocker "${kk}" registered twice; the newer one replaces it.`), yk.set(kk, Fk), () => {
        yk.get(kk) === Fk && yk.delete(kk)
      }),
      ak = () => (0, ik.b)(document.activeElement),
      qk = function() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [Fk, Ik] of yk)
          if (!kk.includes(Fk) && Ik()) return Fk;
        return null
      },
      Lk = function() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === Xk.d.get("gameState") && (!(0, Tk.p)() && (!ak() && null === qk(kk)))
      }
  },
  8142: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      $: () => sk,
      B: () => nk,
      D: () => Kk,
      H: () => Jk,
      J: () => Hk,
      N: () => qk,
      R: () => Zk,
      V: () => jk,
      W: () => Tk,
      Y: () => Xk,
      bb: () => Ek,
      d: () => pk,
      db: () => Gk,
      g: () => Ok,
      hb: () => Qk,
      i: () => Lk,
      j: () => ak,
      k: () => lk,
      l: () => zk,
      n: () => xk,
      q: () => Vk,
      t: () => ik,
      w: () => tk,
      y: () => Pk
    });
    const Xk = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      Tk = Xk.length,
      ik = function() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(Tk).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: kk
        }
      },
      yk = Object.fromEntries(Xk.map(((kk, Fk) => [kk, Fk]))),
      lk = kk => yk[kk],
      ak = function(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const Xk = Math.hypot(kk.x, kk.y);
        if (Xk <= Fk) return {
          x: 0,
          y: 0
        };
        const Tk = Math.min(1, (Xk - Fk) / Math.max(1e-4, Ik - Fk));
        return {
          x: kk.x / Xk * Tk,
          y: kk.y / Xk * Tk
        }
      },
      qk = ["exponential", "linear", "boost"],
      Lk = (kk, Fk) => {
        const Ik = Math.hypot(kk.x, kk.y);
        if (0 === Ik) return {
          x: 0,
          y: 0
        };
        const Xk = ((kk, Fk) => {
          const Ik = Math.max(0, Math.min(1, kk));
          return "linear" === Fk ? Ik : Ik * Ik
        })(Ik, Fk);
        return {
          x: kk.x / Ik * Xk,
          y: kk.y / Ik * Xk
        }
      },
      tk = .5,
      Zk = .3,
      jk = .2,
      ek = lk("LT"),
      wk = lk("RT"),
      Hk = kk => kk === ek || kk === wk,
      Jk = (kk, Fk) => {
        const Ik = lk(Fk);
        return Hk(Ik) ? kk[Ik] > .35 : kk[Ik] >= tk
      },
      xk = (kk, Fk) => kk.map(((kk, Ik) => Hk(Ik) ? Fk[Ik] ? kk > .35 : kk >= .55 : kk >= tk)),
      Pk = ["Up", "Down", "Left", "Right"],
      Kk = kk => Pk.includes(kk),
      Qk = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(kk.x, kk.y) < Fk ? null : Math.abs(kk.x) > Math.abs(kk.y) ? kk.x > 0 ? "Right" : "Left" : kk.y > 0 ? "Down" : "Up"
      },
      sk = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      Vk = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      zk = ["default", "slow", "off"],
      Sk = 800,
      vk = 250,
      Ek = (kk, Fk) => "off" === Fk ? null : "slow" === Fk ? {
        initialDelayMs: Math.max(kk.initialDelayMs, Sk),
        intervalMs: Math.max(kk.intervalMs, vk)
      } : kk;
    class Ok {
      constructor(kk) {
        this.readTiming = kk, this.eq = !1, this.timing = null, this.nextFireMs = 0
      }
      update(kk, Fk) {
        return kk ? this.eq ? !!(this.timing && Fk >= this.nextFireMs) && (this.nextFireMs = Fk + this.timing.intervalMs, !0) : (this.eq = !0, this.timing = this.readTiming(), this.nextFireMs = Fk + (null !== (Ik = null === (Xk = this.timing) || void 0 === Xk ? void 0 : Xk.initialDelayMs) && void 0 !== Ik ? Ik : 0), !0) : (this.eq = !1, !1);
        var Ik, Xk
      }
      reset() {
        this.eq = !1
      }
    }
    const nk = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      Gk = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class pk {
      constructor(kk) {
        this.timer = kk, this.direction = null
      }
      update(kk, Fk) {
        return kk !== this.direction && (this.timer.reset(), this.direction = kk), this.timer.update(null !== kk, Fk) ? kk : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8677: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk,
      d: () => ik
    });
    let Xk = -1 / 0;
    const Tk = () => {
        Xk = performance.now()
      },
      ik = kk => performance.now() - Xk < kk
  },
  8624: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk,
      i: () => ik
    });
    var Xk = Ik(8161),
      Tk = Ik(8142);
    const ik = kk => (0, Tk.bb)(kk, (0, Xk.k)().buttonRepeat),
      yk = kk => new Tk.g((() => ik(kk)))
  },
  8176: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ak,
      i: () => ik,
      j: () => lk
    });
    var Xk = Ik(34),
      Tk = Ik(8161);
    const ik = (kk, Fk) => "OpenShop" === kk ? "shop" === Fk : "OpenLobbyLeaderboard" !== kk || "leaderboard" === Fk;
    let yk = !1;
    const lk = kk => {
        kk !== yk && (yk = kk, Xk.g.GL(Tk.e, (0, Tk.k)()))
      },
      ak = () => ((kk, Fk) => "shop" === kk && Fk ? "shop" : "leaderboard")((0, Tk.k)().leaderboardButton, yk)
  },
  8173: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      C: () => ak,
      F: () => lk,
      I: () => Qk,
      J: () => Zk,
      N: () => jk,
      Q: () => tk,
      U: () => Kk,
      Y: () => qk,
      Z: () => Jk,
      ab: () => vk,
      cb: () => Pk,
      e: () => bk,
      gb: () => wk,
      h: () => Uk,
      hb: () => Hk,
      j: () => Ek,
      kb: () => ek,
      lb: () => xk,
      n: () => yk,
      ob: () => Gk,
      p: () => Sk,
      pb: () => ik,
      qb: () => sk,
      s: () => Vk,
      u: () => pk,
      ub: () => Rk,
      vb: () => zk,
      x: () => uk,
      y: () => Lk
    });
    var Xk = Ik(8154),
      Tk = Ik(8142);
    const ik = {
        min: 25,
        max: 500,
        step: 5
      },
      yk = {
        min: 25,
        max: 100,
        step: 5
      },
      lk = {
        min: 0,
        max: .4,
        step: .01
      },
      ak = {
        min: 25,
        max: 300,
        step: 5
      },
      qk = {
        min: .5,
        max: 6,
        step: .1
      },
      Lk = (kk, Fk) => {
        if (!Number.isFinite(kk)) return Fk.min;
        const Ik = Fk.min + Math.round((kk - Fk.min) / Fk.step) * Fk.step,
          Xk = Math.min(Fk.max, Math.max(Fk.min, Ik));
        return Math.round(1e3 * Xk) / 1e3
      },
      tk = kk => `${Math.round(kk)}%`,
      Zk = kk => tk(100 * kk),
      jk = kk => `${kk.toFixed(1)}\xd7`,
      ek = [{
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
      wk = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      Hk = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      Jk = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      xk = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      Pk = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      Kk = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      Qk = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      sk = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      Vk = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      zk = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      Sk = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      vk = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      Ek = {
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
      Ok = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      nk = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      Gk = Xk.d.map((kk => {
        let {
          group: Fk,
          actions: Ik
        } = kk;
        const Xk = Ik.map((kk => ({
          kind: "action",
          action: kk
        })));
        return {
          titleKey: Ok[Fk],
          rows: "gameplay" === Fk ? [...nk, ...Xk] : Xk
        }
      })),
      pk = Tk.Y.filter((kk => "Home" !== kk)),
      uk = 1e4;
    class bk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = kk, this.openButton = Fk, this.accepts = Ik, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(kk, Fk) {
        var Ik;
        this.updateIgnored(kk, Fk);
        const Xk = Fk - (null !== (Ik = this.startMs) && void 0 !== Ik ? Ik : Fk) >= 250;
        for (const Tk of pk)
          if (Tk !== this.cancelButton && Xk && !this.ignoredUntilMs.has(Tk) && kk.wasPressed(Tk) && this.accepts(Tk)) return {
            kind: "bind",
            button: Tk
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (kk.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = Fk
        }
        return null === this.cancelDownAtMs ? null : kk.isHeld(this.cancelButton) && Fk - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : kk.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(kk) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (kk - this.cancelDownAtMs) / 700)
      }
      updateIgnored(kk, Fk) {
        if (null === this.startMs) {
          this.startMs = Fk;
          for (const Fk of pk) kk.isDown(Fk) && this.ignoredUntilMs.set(Fk, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, Fk + 250)
        }
        for (const [Ik, Xk] of this.ignoredUntilMs) {
          const Tk = kk.isDown(Ik);
          Xk === 1 / 0 ? Tk || Ik !== this.openButton ? Tk || this.ignoredUntilMs.delete(Ik) : this.ignoredUntilMs.set(Ik, Fk + 250) : Fk >= Xk ? this.ignoredUntilMs.delete(Ik) : Tk && this.ignoredUntilMs.set(Ik, 1 / 0)
        }
      }
    }
    const Rk = 6e3;
    class Uk {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(kk, Fk) {
        let {
          pressed: Ik,
          eq: Xk
        } = kk;
        if (Ik) {
          const kk = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== kk && Fk - kk < 1500 ? [...this.pressesAtMs, Fk] : [Fk], this.pressesAtMs.length >= 3) return 1
        }
        return Xk ? (this.downAtMs ??= Fk, Math.min(1, (Fk - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  8691: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik,
      f: () => Tk
    });
    let Xk = null;
    const Tk = function(kk) {
        const Fk = {
          cycle: kk,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Xk = Fk, () => {
          Xk === Fk && (Xk = null)
        }
      },
      ik = () => {
        var kk;
        return null !== (kk = Xk) && void 0 !== kk && kk.canCycle() ? Xk.cycle : null
      }
  },
  5022: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik,
      g: () => yk
    });
    var Xk = Ik(58);
    const Tk = new WeakMap,
      ik = kk => {
        var Fk;
        const Ik = kk.closest("[data-pad-slider]");
        return Ik && null !== (Fk = Tk.get(Ik)) && void 0 !== Fk ? Fk : null
      },
      yk = (kk, Fk) => {
        const Ik = (0, Xk.useRef)(Fk);
        Ik.current = Fk, (0, Xk.useEffect)((() => {
          if (kk.current) return ((kk, Fk) => (Tk.set(kk, Fk), () => {
            Tk.get(kk) === Fk && Tk.delete(kk)
          }))(kk.current, {
            adjust: kk => {
              Ik.current.adjust(kk)
            },
            setFraction: kk => {
              Ik.current.setFraction(kk)
            },
            endDrag: () => {
              Ik.current.endDrag()
            }
          })
        }), [kk])
      }
  },
  8800: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Tk,
      f: () => yk,
      h: () => ik,
      l: () => Xk,
      n: () => lk,
      q: () => qk,
      s: () => Lk
    });
    const Xk = "controllerActionWheelOpen",
      Tk = "controllerActionWheelAim",
      ik = "controllerActionWheelCommit",
      yk = "controllerActionWheelClose",
      lk = "controllerActionWheelPick";
    let ak = !1;
    const qk = () => ak,
      Lk = kk => {
        ak = kk
      }
  },
  8791: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ik,
      e: () => Tk
    });
    let Xk = 0;
    const Tk = () => {
        Xk++
      },
      ik = () => Xk
  },
  8686: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ak,
      g: () => Tk,
      j: () => yk,
      n: () => ik,
      p: () => Xk,
      r: () => qk
    });
    const Xk = "controllerQuickChatWheelOpen",
      Tk = "controllerQuickChatWheelAim",
      ik = "controllerQuickChatWheelCommit",
      yk = "controllerQuickChatWheelClose";
    let lk = !1;
    const ak = () => lk,
      qk = kk => {
        lk = kk
      }
  },
  8696: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ik,
      i: () => Tk
    });
    var Xk = Ik(34);
    const Tk = "localBlockBroken";

    function ik() {
      return {
        onPlayerChangeBlock(kk, Fk, Ik, ik, yk, lk) {
          "Air" === lk && Xk.g.GL(Tk)
        }
      }
    }
  },
  8743: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk
    });
    var Xk = Ik(8752),
      Tk = Ik(628),
      ik = Ik(129);

    function yk(kk) {
      var Fk, Ik;
      if ((0, Tk.Q)(kk)) return !0;
      const yk = null !== (Fk = null === (Ik = ik.r[ik.v]) || void 0 === Ik ? void 0 : Ik.adConfig.showRewardedAds) && void 0 !== Fk && Fk;
      for (const Tk in kk) {
        const Fk = kk[Tk];
        if (null !== Fk && void 0 !== Fk && Fk.items)
          for (const kk in Fk.items)
            if ((0, Xk.j)(Fk.items[kk], yk)) return !1
      }
      return !0
    }
  },
  8763: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk,
      f: () => Xk
    });
    const Xk = 100;

    function Tk(kk) {
      let {
        translationKeys: Fk = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return kk.map((kk => {
        var Ik;
        return null !== (Ik = function(kk, Fk) {
          if ("string" === typeof kk) return kk;
          const Ik = "str" in kk ? kk.str : kk;
          if ("string" === typeof Ik) return Ik;
          if ("entityName" in Ik) return Ik.entityName;
          if (Fk && "translationKey" in Ik) return `{${Ik.translationKey}${void 0===Ik.params?"":` ${JSON.stringify(Ik.params)}`}}`;
          return null
        }(kk, Fk)) && void 0 !== Ik ? Ik : " "
      })).join("")
    }
  },
  8809: () => {},
  8204: (kk, Fk, Ik) => {
    var Xk = {
      "./nintendo/A.svg": 8208,
      "./nintendo/B.svg": 8210,
      "./nintendo/Down.svg": 8217,
      "./nintendo/Home.svg": 8220,
      "./nintendo/LB.svg": 8223,
      "./nintendo/LS.svg": 8228,
      "./nintendo/LT.svg": 8237,
      "./nintendo/Left.svg": 8246,
      "./nintendo/LeftStick.svg": 8248,
      "./nintendo/Menu.svg": 8257,
      "./nintendo/RB.svg": 8262,
      "./nintendo/RS.svg": 8270,
      "./nintendo/RT.svg": 8273,
      "./nintendo/Right.svg": 8277,
      "./nintendo/RightStick.svg": 8280,
      "./nintendo/Up.svg": 8283,
      "./nintendo/View.svg": 8286,
      "./nintendo/X.svg": 8294,
      "./nintendo/Y.svg": 8303,
      "./playstation/A.svg": 8306,
      "./playstation/B.svg": 8312,
      "./playstation/Down.svg": 8315,
      "./playstation/Home.svg": 8321,
      "./playstation/LB.svg": 8330,
      "./playstation/LS.svg": 8333,
      "./playstation/LT.svg": 8339,
      "./playstation/Left.svg": 8341,
      "./playstation/LeftStick.svg": 8346,
      "./playstation/Menu.svg": 8354,
      "./playstation/RB.svg": 8361,
      "./playstation/RS.svg": 8367,
      "./playstation/RT.svg": 8373,
      "./playstation/Right.svg": 8381,
      "./playstation/RightStick.svg": 8389,
      "./playstation/Up.svg": 8396,
      "./playstation/View.svg": 8402,
      "./playstation/X.svg": 8406,
      "./playstation/Y.svg": 8414,
      "./steamdeck/A.svg": 8419,
      "./steamdeck/B.svg": 8421,
      "./steamdeck/Down.svg": 8429,
      "./steamdeck/Home.svg": 8431,
      "./steamdeck/LB.svg": 8438,
      "./steamdeck/LS.svg": 8442,
      "./steamdeck/LT.svg": 8447,
      "./steamdeck/Left.svg": 8450,
      "./steamdeck/LeftStick.svg": 8458,
      "./steamdeck/Menu.svg": 8460,
      "./steamdeck/RB.svg": 8464,
      "./steamdeck/RS.svg": 8472,
      "./steamdeck/RT.svg": 8474,
      "./steamdeck/Right.svg": 8479,
      "./steamdeck/RightStick.svg": 8487,
      "./steamdeck/Up.svg": 8492,
      "./steamdeck/View.svg": 8497,
      "./steamdeck/X.svg": 8503,
      "./steamdeck/Y.svg": 8512,
      "./xbox/A.svg": 8521,
      "./xbox/B.svg": 8529,
      "./xbox/Down.svg": 8535,
      "./xbox/Home.svg": 8537,
      "./xbox/LB.svg": 8546,
      "./xbox/LS.svg": 8551,
      "./xbox/LT.svg": 8558,
      "./xbox/Left.svg": 8561,
      "./xbox/LeftStick.svg": 8563,
      "./xbox/Menu.svg": 8569,
      "./xbox/RB.svg": 8575,
      "./xbox/RS.svg": 8581,
      "./xbox/RT.svg": 8583,
      "./xbox/Right.svg": 8592,
      "./xbox/RightStick.svg": 8594,
      "./xbox/Up.svg": 8596,
      "./xbox/View.svg": 8598,
      "./xbox/X.svg": 8605,
      "./xbox/Y.svg": 8613
    };

    function Tk(kk) {
      var Fk = ik(kk);
      return Ik(Fk)
    }

    function ik(kk) {
      if (!Ik.o(Xk, kk)) {
        var Fk = new Error("Cannot find module '" + kk + "'");
        throw Fk.code = "MODULE_NOT_FOUND", Fk
      }
      return Xk[kk]
    }
    Tk.keys = function() {
      return Object.keys(Xk)
    }, Tk.resolve = ik, kk.exports = Tk, Tk.id = 8204
  },
  8208: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8210: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8217: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8220: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8223: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8228: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8237: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8246: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8248: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8257: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8262: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8270: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8273: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8277: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8280: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8283: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8286: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8294: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8303: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8306: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8312: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8315: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8321: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8330: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8333: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8339: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8341: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8346: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8354: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8361: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8367: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8373: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8381: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8389: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8396: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8402: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8406: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8414: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8419: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8421: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8429: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8431: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8438: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8442: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8447: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8450: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8458: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8460: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8464: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8472: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8474: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8479: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8487: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8492: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8497: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8503: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8512: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8521: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8529: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8535: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8537: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8546: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8551: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8558: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8561: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8563: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8569: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8575: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8581: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8583: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8592: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8594: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8596: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8598: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8605: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8613: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
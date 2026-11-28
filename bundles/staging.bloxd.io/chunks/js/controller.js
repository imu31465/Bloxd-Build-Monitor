export const id = 34;
export const ids = [34];
export const modules = {
  10130: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Zb,
      g: () => Rb,
      h: () => Db
    });
    var eb = Mb(64),
      Hb = Mb(5395),
      pb = Mb(1179),
      Vb = Mb(1611),
      gb = Mb(29),
      lb = Mb(4812),
      Lb = Mb(3222),
      Ib = Mb(1313),
      Ob = Mb(3724),
      Ub = Mb(2142),
      tb = Mb(2183),
      Cb = Mb(1259),
      Eb = Mb(26),
      Fb = Mb(1821),
      Bb = Mb(1159),
      sb = Mb.n(Bb),
      mb = Mb(10133),
      hb = Mb(10137),
      zb = Mb(10144),
      Xb = Mb(10061),
      xb = Mb(10149),
      jb = Mb(4460),
      Kb = (Mb(10153), Mb(1364));
    let rb = null;

    function Rb() {
      return null !== rb
    }

    function Db() {
      return "pad" === rb
    }

    function cb() {
      return "inGame" === Eb.c.get("gameState") && !(0, Fb.q)()
    }

    function Yb(bb) {
      return (0, hb.v)(bb, Ib.n, hb.h, hb.i, hb.k)
    }
    const Zb = (0, eb.memo)((function() {
      const {
        t: bb
      } = (0, Cb.C)(), {
        userContext: wb
      } = (0, pb.e)(), [Mb, Eb] = (0, eb.useState)(null), [Bb, Rb] = (0, eb.useState)(null), Db = (0, eb.useRef)(null), Zb = (0, eb.useCallback)((bb => {
        Db.current = bb, Rb(bb)
      }), []), fb = (0, eb.useRef)(0), Ab = (0, eb.useRef)(null), Wb = (0, eb.useRef)({
        x: 0,
        y: 0
      }), [Jb, Sb] = (0, eb.useState)(0), Nb = (0, eb.useMemo)((() => function(bb) {
        const wb = [];
        for (let eb = 0; eb < Ib.n; eb++) {
          var Mb;
          wb.push(null !== (Mb = bb[eb]) && void 0 !== Mb ? Mb : null)
        }
        return wb
      }((0, Ob.f)(wb.getPlayerCosmetics().emote))), [wb, Jb]);
      (0, tb.b)("cosmeticsUpdated", (bb => {
        bb.some((bb => bb.local && "emote" === bb.gH)) && Sb((bb => bb + 1))
      }));
      const vb = (0, eb.useRef)(!1),
        Qb = (0, eb.useCallback)((function(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === bb && (0, zb.g)(), vb.current = wb, Wb.current = {
            x: 0,
            y: 0
          }, Zb(null), Eb(bb)
        }), [Zb]),
        Gb = (0, eb.useCallback)((() => {
          Eb(null), Zb(null), Wb.current = {
            x: 0,
            y: 0
          }
        }), [Zb]),
        qb = (0, eb.useCallback)((bb => {
          if (Date.now() < fb.current) return;
          const wb = (0, Lb.h)(bb),
            Mb = !!wb.holdUntilMove,
            eb = Mb ? 600 : Math.ceil(1e3 * wb.animation.animation_length / Lb.b) + 200;
          fb.current = Date.now() + eb, Ab.current = bb, Ub.gameBridge.send("playEmote", bb), Ub.gameBridge.send("applyTemporaryThirdPerson", Mb ? {} : {
            durationMs: eb
          })
        }), []);
      (0, Vb.e)("requestToggleEmoteWheel", (() => {
        null === Mb ? cb() && Qb("click") : Gb()
      })), (0, Vb.e)("requestEmoteWheelHoldOpen", (() => {
        null === Mb && cb() && Qb((0, mb.b)() ? "hold" : "click")
      })), (0, Vb.e)("requestEmoteWheelPadOpen", (bb => {
        null !== Mb || !cb() || (0, Xb.c)() || (0, xb.n)() || Qb("pad", bb)
      })), (0, Vb.e)("requestEmoteRepeatLast", (() => {
        if (null !== Mb || !cb() || (0, Xb.c)() || (0, xb.n)()) return;
        const bb = Ab.current;
        null !== bb && Nb.includes(bb) ? qb(bb) : Qb("pad", !0)
      }));
      const ab = () => {
        const bb = Db.current,
          wb = null !== bb ? Nb[bb] : null;
        null !== wb && "pad" === Mb && Date.now() < fb.current || (Gb(), null !== wb && qb(wb))
      };
      (0, Vb.e)("emoteWheelPadAim", (bb => {
        if ("pad" !== Mb) return;
        const wb = (0, hb.G)(bb, Ib.n, Db.current);
        Zb(null !== wb && null !== Nb[wb] ? wb : null)
      })), (0, Vb.e)("requestEmoteWheelPadCommit", (bb => {
        "pad" !== Mb || bb && vb.current || ab()
      })), (0, Vb.e)("appManagerUpdated|activeInputDevice", (bb => {
        null !== Mb && "pad" === Mb !== ("gamepad" === bb) && Gb()
      })), (0, eb.useLayoutEffect)((() => (rb = Mb, (0, lb.q)("emoteWheel", "pad" === Mb), gb.k.iI(lb.i), () => {
        rb = null, (0, lb.q)("emoteWheel", !1), gb.k.iI(lb.i)
      })), [Mb]), (0, Vb.e)("requestEmoteWheelHoldRelease", (() => {
        "hold" === Mb && ab()
      })), (0, Vb.e)("requestEmoteWheelClose", (() => {
        null !== Mb && Gb()
      })), (0, Vb.e)("appManagerUpdated|gameState", (bb => {
        "inGame" !== bb && Gb()
      }));
      const ib = () => {
        (0, Fb.q)() && Gb()
      };
      if ((0, Vb.e)("appManagerUpdated|openEverythingMenuName", ib), (0, Vb.e)("appManagerUpdated|openInGameMenuName", ib), (0, Vb.e)("pointerLockUpdate", (bb => {
          bb || "hold" !== Mb || Gb()
        })), (0, eb.useEffect)((() => {
          if (null === Mb) return;
          const bb = bb => {
            "Escape" === bb.key && (bb.stopImmediatePropagation(), bb.preventDefault(), Gb())
          };
          return document.addEventListener("keydown", bb, !0), () => {
            document.removeEventListener("keydown", bb, !0)
          }
        }), [Mb, Gb]), (0, Hb.d)(!0, "click" === Mb, "EmoteWheelOverlay"), (0, eb.useEffect)((() => {
          if ("hold" === Mb) return Ub.gameBridge.send("holdEmoteWheel", !0), () => {
            Ub.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [Mb]), (0, eb.useEffect)((() => {
          if ("hold" !== Mb) return;
          const bb = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            wb = hb.r * bb,
            eb = hb.n * bb,
            Hb = bb => {
              let Mb = Wb.current.x + bb.movementX,
                Hb = Wb.current.y + bb.movementY;
              const pb = Math.hypot(Mb, Hb);
              if (pb > wb) {
                const bb = wb / pb;
                Mb *= bb, Hb *= bb
              }
              Wb.current = {
                x: Mb,
                y: Hb
              }, Zb(function(bb, wb, Mb, eb) {
                if (Math.hypot(bb, wb) < Mb) return null;
                const Hb = (0, hb.w)(bb, wb, Ib.n);
                return null === eb[Hb] ? null : Hb
              }(Mb, Hb, eb, Nb))
            };
          return document.addEventListener("mousemove", Hb), () => {
            document.removeEventListener("mousemove", Hb)
          }
        }), [Mb, Nb, Zb]), null === Mb) return null;
      const ub = "hold" === Mb || "pad" === Mb,
        db = null !== Bb ? Nb[Bb] : null,
        Pb = null !== db ? (0, Lb.h)(db).displayName : bb("emotes:pickEmote");
      return (0, Kb.jsx)("div", {
        className: sb()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === Mb
        }),
        onMouseDown: bb => {
          bb.target === bb.currentTarget && Gb()
        },
        children: (0, Kb.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * hb.r + "rem",
            height: 2 * hb.r + "rem"
          },
          children: [(0, Kb.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${hb.m} ${hb.m}`,
            children: [Nb.map(((wb, Mb) => {
              const eb = null !== wb,
                Hb = ub && Mb === Bb;
              return (0, Kb.jsx)("path", {
                d: Yb(Mb),
                className: sb()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: Hb,
                  EmoteWheelWedgeDisabled: !eb
                }),
                onClick: bb => {
                  bb.stopPropagation(), null !== wb && (bb => {
                    Gb(), qb(bb)
                  })(wb)
                },
                "aria-label": null !== wb ? (0, Lb.h)(wb).displayName : bb("emotes:emptySlot")
              }, Mb)
            })), (0, Kb.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: hb.h,
              cy: hb.h,
              r: hb.k
            }), (0, Kb.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: hb.h,
              cy: hb.h,
              r: hb.i
            }), ub && null !== Bb && (0, Kb.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: Yb(Bb)
            })]
          }), Nb.map(((bb, wb) => {
            const Mb = null !== bb,
              eb = ub && wb === Bb,
              Hb = (0, hb.y)(wb, Ib.n),
              pb = hb.e * Math.cos(Hb),
              Vb = hb.e * Math.sin(Hb);
            return (0, Kb.jsx)("div", {
              className: sb()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: eb,
                EmoteWheelSlotIconDisabled: !Mb
              }),
              style: {
                left: `calc(50% + ${pb}rem)`,
                top: `calc(50% + ${Vb}rem)`,
                backgroundImage: Mb ? `url(${(0,jb.d)("emote",bb)})` : void 0
              },
              "aria-hidden": !0
            }, wb)
          })), (0, Kb.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: Pb
          })]
        })
      })
    }))
  },
  6050: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Cb,
      f: () => hb,
      j: () => Eb,
      l: () => mb
    });
    var eb = Mb(64),
      Hb = Mb(6056),
      pb = Mb(5193),
      Vb = Mb(1516),
      gb = Mb(4374),
      lb = Mb(1159),
      Lb = Mb.n(lb),
      Ib = Mb(1504),
      Ob = Mb(1965),
      Ub = Mb(6090),
      tb = Mb(1364);

    function Cb(bb) {
      let {
        label: wb,
        onClick: Mb,
        checked: eb,
        circleInfoText: Hb,
        className: gb,
        disabled: lb,
        note: Ib
      } = bb;
      return (0, tb.jsxs)("div", {
        "aria-disabled": lb || void 0,
        "data-pad-focusable": !0,
        className: Lb()("SettingBox CheckboxContainer", {
          [gb]: gb,
          SettingBoxDisabled: lb
        }),
        onClick: () => {
          lb || Mb(!eb)
        },
        children: [(0, tb.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, tb.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, tb.jsx)(pb.c, {
              className: "SettingsCheckbox",
              checked: eb,
              disabled: lb,
              onChange: () => {}
            })
          }), (0, tb.jsxs)("div", {
            className: "CheckboxText",
            children: [wb, Hb && (0, tb.jsx)("span", {
              onClick: bb => bb.stopPropagation(),
              children: (0, tb.jsx)(Vb.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Hb
              })
            })]
          })]
        }), Ib && (0, tb.jsx)("div", {
          className: "SettingNote",
          children: Ib
        })]
      })
    }

    function Eb(bb) {
      let {
        name: wb,
        onChange: Mb,
        min: Hb,
        max: pb,
        step: gb,
        initValue: lb,
        circleInfoText: Ib,
        format: Ob,
        className: Ub,
        padStep: Cb,
        disabled: Eb = !1,
        selectableMax: Fb,
        cappedNote: Bb,
        note: mb,
        onChangeComplete: hb
      } = bb;
      const [zb, Xb] = (0, eb.useState)(lb), xb = (0, eb.useRef)(lb);
      (0, eb.useEffect)((() => {
        xb.current = lb, Xb(lb)
      }), [lb]);
      const jb = void 0 !== Fb && Fb < pb,
        Kb = jb ? {
          "--slider-selectable": (Fb - Hb) / (pb - Hb)
        } : void 0,
        rb = jb && Bb ? Bb : mb;
      return (0, tb.jsxs)("div", {
        className: Lb()("SettingBox SettingsSliderDiv", {
          [Ub]: Ub,
          SettingBoxDisabled: Eb,
          SliderCapped: jb
        }),
        style: Kb,
        children: [(0, tb.jsxs)("div", {
          className: "SliderText",
          children: [`${wb}: ${Ob?Ob(zb):zb}`, Ib && (0, tb.jsx)(Vb.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Ib
          })]
        }), (0, tb.jsx)("div", {
          className: "SliderDiv",
          children: (0, tb.jsx)(sb, {
            value: zb,
            min: Hb,
            max: pb,
            step: gb,
            onChange: bb => {
              if (jb && bb >= Fb && zb === Fb) return;
              const wb = jb ? Math.min(bb, Fb) : bb;
              xb.current = wb, Xb(wb), Mb(wb)
            },
            onChangeComplete: hb && (() => {
              hb(xb.current)
            }),
            format: Ob,
            padStep: Cb,
            disabled: Eb
          })
        }), rb && (0, tb.jsx)("div", {
          className: "SettingNote",
          children: rb
        })]
      })
    }
    const Fb = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function Bb(bb) {
      var wb;
      return (null !== (wb = String(bb).split(".")[1]) && void 0 !== wb ? wb : "").length
    }

    function sb(bb) {
      let {
        value: wb,
        min: Mb,
        max: pb,
        step: Vb,
        onChange: gb,
        orientation: lb,
        reverse: Lb,
        setIsChanging: Ib,
        tooltip: Ob,
        labels: Cb,
        handleLabel: Eb,
        format: sb,
        onChangeStart: mb,
        onChangeComplete: hb,
        padStep: zb,
        disabled: Xb = !1
      } = bb;
      const xb = (0, eb.useRef)(null),
        jb = (0, eb.useRef)(null);
      (0, eb.useLayoutEffect)((() => {
        var bb, wb, Mb;
        const eb = null !== (bb = null === (wb = xb.current) || void 0 === wb ? void 0 : wb.querySelector(".rangeslider")) && void 0 !== bb ? bb : null;
        null === eb || void 0 === eb || eb.setAttribute("data-pad-slider", ""), null === eb || void 0 === eb || eb.setAttribute("data-pad-focusable", ""), null === eb || void 0 === eb || null === (Mb = eb.querySelector(".rangeslider__handle")) || void 0 === Mb || Mb.setAttribute("data-pad-slider-handle", ""), jb.current = eb
      }), []), (0, eb.useLayoutEffect)((() => {
        var bb, wb;
        Xb ? null === (bb = jb.current) || void 0 === bb || bb.setAttribute("aria-disabled", "true") : null === (wb = jb.current) || void 0 === wb || wb.removeAttribute("aria-disabled")
      }), [Xb]);
      const Kb = Math.max(Bb(Vb), Bb(Mb)),
        rb = bb => {
          if (bb >= pb) return pb;
          if (bb <= Mb) return Mb;
          const wb = Number((Math.round((bb - Mb) / Vb) * Vb + Mb).toFixed(Kb));
          return Math.min(pb, Math.max(Mb, wb))
        },
        Rb = (0, eb.useRef)(hb);
      Rb.current = hb, (0, eb.useEffect)((() => {
        const bb = xb.current;
        if (!bb) return;
        const wb = bb => {
          var wb;
          Fb.has(bb.key) && (null === (wb = Rb.current) || void 0 === wb || wb.call(Rb))
        };
        return bb.addEventListener("keyup", wb), () => {
          bb.removeEventListener("keyup", wb)
        }
      }), []);
      const Db = (0, eb.useRef)(!1);
      return (0, Ub.f)(jb, {
        adjust: bb => {
          if (Xb) return;
          const eb = null !== zb && void 0 !== zb ? zb : Math.max(Vb, Math.round((pb - Mb) / 20 / Vb) * Vb),
            Hb = rb(wb + bb * eb * (Lb ? -1 : 1));
          Hb !== wb && (null === mb || void 0 === mb || mb(), gb(Hb), null === hb || void 0 === hb || hb())
        },
        setFraction: bb => {
          if (Xb) return;
          const eb = rb(Mb + (Lb ? 1 - bb : bb) * (pb - Mb));
          eb !== wb && (Db.current || (Db.current = !0, null === mb || void 0 === mb || mb()), gb(eb))
        },
        endDrag: () => {
          Db.current && (Db.current = !1, null === hb || void 0 === hb || hb())
        }
      }), (0, tb.jsx)("div", {
        ref: xb,
        style: {
          display: "contents"
        },
        children: (0, tb.jsx)(Hb.e, {
          value: wb,
          min: Mb,
          max: pb,
          step: Vb,
          onChange: bb => {
            gb(rb(bb))
          },
          orientation: lb,
          reverse: Lb,
          tooltip: Ob,
          labels: Cb,
          handleLabel: Eb,
          format: sb,
          onChangeStart: () => {
            null === mb || void 0 === mb || mb(), null === Ib || void 0 === Ib || Ib(!0)
          },
          onChangeComplete: () => {
            null === Ib || void 0 === Ib || Ib(!1), null === hb || void 0 === hb || hb()
          }
        })
      })
    }
    async function mb() {
      const bb = Ib.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await bb.getResult() && (0, Ob.reloadBloxd)()
    }

    function hb(bb) {
      let {
        label: wb,
        options: Mb,
        value: eb,
        onChange: Hb,
        circleInfoText: pb
      } = bb;
      return (0, tb.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, tb.jsxs)("div", {
          className: "SliderText",
          children: [wb, pb && (0, tb.jsx)(Vb.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: pb
          })]
        }), (0, tb.jsx)(gb.c, {
          ariaLabel: wb,
          options: Mb,
          value: eb,
          onChange: Hb
        })]
      })
    }
  },
  10085: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb,
      f: () => pb
    });
    var eb = Mb(2199);
    const Hb = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      pb = bb => "string" === typeof bb.icon && "" !== bb.icon && "string" === typeof bb.keycode && Hb.test(bb.keycode),
      Vb = bb => "Space" === bb ? "_" : eb.f[bb]
  },
  10133: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb
    });
    var eb = Mb(26);

    function Hb() {
      return !eb.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  10137: (bb, wb, Mb) => {
    Mb.d(wb, {
      C: () => Ub,
      G: () => tb,
      e: () => pb,
      h: () => gb,
      i: () => Lb,
      k: () => lb,
      m: () => Vb,
      n: () => Hb,
      r: () => eb,
      v: () => Cb,
      w: () => Ob,
      y: () => Ib
    });
    const eb = 14,
      Hb = 6,
      pb = (eb + Hb) / 2,
      Vb = 200,
      gb = Vb / 2,
      lb = Vb / 2 - 1,
      Lb = Hb / eb * (Vb / 2),
      Ib = (bb, wb) => -Math.PI / 2 + 2 * bb * Math.PI / wb,
      Ob = (bb, wb, Mb) => {
        const eb = 2 * Math.PI / Mb;
        return (Math.round((Math.atan2(wb, bb) + Math.PI / 2) / eb) % Mb + Mb) % Mb
      },
      Ub = .5,
      tb = (bb, wb, Mb) => Math.hypot(bb.x, bb.y) < Ub ? Mb : Ob(bb.x, bb.y, wb),
      Cb = (bb, wb, Mb, eb, Hb) => {
        const pb = Math.PI / wb,
          Vb = Ib(bb, wb),
          gb = Vb - pb,
          lb = Vb + pb,
          Lb = (bb, wb) => `${Mb+bb*Math.cos(wb)} ${Mb+bb*Math.sin(wb)}`;
        return [`M ${Lb(eb,gb)}`, `L ${Lb(Hb,gb)}`, `A ${Hb} ${Hb} 0 0 1 ${Lb(Hb,lb)}`, `L ${Lb(eb,lb)}`, `A ${eb} ${eb} 0 0 0 ${Lb(eb,gb)}`, "Z"].join(" ")
      }
  },
  10166: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb
    });
    var eb = Mb(64),
      Hb = Mb(10109),
      pb = Mb(3503);

    function Vb() {
      const bb = (0, pb.k)("shopInfo"),
        [, wb] = (0, eb.useState)((() => (0, Hb.c)(bb)));
      return (0, pb.h)("shopInfo", (bb => {
        wb((0, Hb.c)(bb))
      })), !(0, Hb.c)(bb)
    }
  },
  9534: (bb, wb, Mb) => {
    Mb.d(wb, {
      A: () => Cb,
      d: () => Vb,
      g: () => Hb,
      h: () => pb,
      i: () => Ub,
      k: () => Ob,
      l: () => Lb,
      p: () => gb,
      t: () => eb,
      x: () => tb
    });
    const eb = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      Hb = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "zoom", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: eb
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      pb = {
        jump: "A",
        sneak: "B",
        sneakToggle: "RS",
        zoom: "RS",
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
      Vb = [
        ["pickBlock", "perspective"],
        ["zoom", "sneakToggle"]
      ],
      gb = bb => {
        var wb;
        return null !== (wb = Vb.find((wb => wb.includes(bb)))) && void 0 !== wb ? wb : [bb]
      },
      lb = Object.fromEntries(Hb.flatMap((bb => {
        let {
          group: wb,
          actions: Mb
        } = bb;
        return Mb.map((bb => [bb, wb]))
      }))),
      Lb = bb => lb[bb],
      Ib = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      Ob = bb => {
        var wb;
        return [Lb(bb), ...null !== (wb = Ib[bb]) && void 0 !== wb ? wb : []]
      },
      Ub = new Set(["menu", "inventory", "keyboard"]),
      tb = {
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
        Zoom: "zoom",
        "mid-fire": "pickBlock",
        OpenInventory: "inventory",
        OpenSettings: "pause",
        OpenLobbyLeaderboard: "leaderboard",
        OpenShop: "leaderboard",
        OpenEmoteWheel: "emoteWheel"
      },
      Cb = new Set(["forward", "backward", "left", "right"])
  },
  9525: (bb, wb, Mb) => {
    Mb.d(wb, {
      A: () => jb,
      B: () => mb,
      D: () => rb,
      G: () => Ib,
      K: () => Kb,
      O: () => cb,
      c: () => sb,
      d: () => zb,
      h: () => Ub,
      j: () => tb,
      n: () => Zb,
      o: () => Db,
      q: () => Rb,
      u: () => hb,
      y: () => Yb
    });
    var eb = Mb(9534),
      Hb = Mb(9536),
      pb = Mb(9515),
      Vb = Mb(9553);
    const gb = bb => {
        var wb, Mb;
        return null !== (wb = null === (Mb = eb.d.find((wb => {
          let [Mb] = wb;
          return Mb === bb
        }))) || void 0 === Mb ? void 0 : Mb[1]) && void 0 !== wb ? wb : bb
      },
      lb = (bb, wb) => {
        var Mb;
        const Hb = gb(wb);
        return null !== (Mb = bb[Hb]) && void 0 !== Mb ? Mb : eb.h[Hb]
      },
      Lb = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((bb => {
        let [wb, Mb] = bb;
        return [
          [wb, Mb],
          [Mb, wb]
        ]
      }))),
      Ib = (bb, wb) => null !== bb && void 0 !== bb ? bb : "nintendo" === wb,
      Ob = bb => Ib((0, Hb.h)().swapConfirmBack, (0, Hb.j)()) && Lb.get(bb) || bb,
      Ub = bb => lb((0, Hb.h)().bindings, Ob(bb)),
      tb = bb => eb.h[gb(Ob(bb))],
      Cb = Object.keys(eb.h),
      Eb = bb => "gameplay" === (0, eb.l)(bb) ? ["gameplay"] : (0, eb.k)(bb),
      Fb = (bb, wb) => {
        const Mb = Eb(wb);
        return Eb(bb).some((bb => Mb.includes(bb)))
      },
      Bb = (bb, wb, Mb) => {
        const Hb = lb(bb, wb),
          Vb = new Set((0, eb.p)(wb)),
          Lb = [...Vb];
        for (let eb = Lb.pop(); eb; eb = Lb.pop())
          for (const wb of Cb) {
            const pb = lb(bb, wb);
            Vb.has(wb) || pb !== Mb && pb !== Hb || !Fb(eb, wb) || (Vb.add(wb), Lb.push(wb))
          }
        const Ib = {
          ...bb
        };
        for (const Ob of Vb) {
          const wb = lb(bb, Ob) === Hb ? Mb : Hb,
            Vb = (0, eb.k)(Ob).some((bb => eb.i.has(bb)));
          if ((0, pb.G)(wb) && Vb) return null;
          Ib[gb(Ob)] = wb
        }
        for (const pb of Object.keys(Ib)) Ib[pb] === eb.h[pb] && delete Ib[pb];
        return Ib
      },
      sb = (bb, wb) => null !== Bb((0, Hb.h)().bindings, Ob(bb), wb),
      mb = (bb, wb) => {
        if (Ub(bb) === wb) return !0;
        const Mb = Bb((0, Hb.h)().bindings, Ob(bb), wb);
        return !!Mb && ((0, Hb.n)({
          bindings: Mb
        }), !0)
      },
      hb = (bb, wb) => {
        const Mb = (0, eb.p)(wb);
        return Cb.filter((wb => gb(wb) === wb && !Mb.includes(wb) && lb(bb, Ob(wb)) !== Ub(wb)))
      },
      zb = ["southpaw", "triggersSwapped"],
      Xb = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      xb = bb => Object.keys(Xb[bb]),
      jb = (bb, wb) => "southpaw" === bb ? wb.swapSticks : xb(bb).every((Mb => lb(wb.bindings, Mb) === Xb[bb][Mb])),
      Kb = (bb, wb) => {
        const Mb = (0, Hb.h)();
        let pb = Mb.bindings;
        for (const Hb of xb(bb)) {
          const Mb = wb ? Xb[bb][Hb] : eb.h[Hb];
          if (pb = Bb(pb, Hb, Mb), !pb) return !1
        }
        return (0, Hb.n)({
          swapSticks: "southpaw" === bb ? wb : Mb.swapSticks,
          bindings: pb
        }), !0
      },
      rb = () => {
        (0, Hb.n)({
          swapSticks: !1,
          bindings: {}
        })
      },
      Rb = () => (0, Hb.h)().swapSticks ? "RightStick" : "LeftStick",
      Db = () => (0, Hb.h)().swapSticks ? "LeftStick" : "RightStick",
      cb = bb => (0, Hb.h)().swapSticks && (0, pb.G)(bb),
      Yb = bb => cb(bb) ? Rb() : Db(),
      Zb = bb => {
        if (eb.A.has(bb)) return Rb();
        const wb = eb.x[bb];
        return wb && ("leaderboard" !== wb || (0, Vb.i)(bb, (0, Vb.e)())) ? Ub(wb) : null
      }
  },
  9511: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      ControllerCategory: () => hg,
      ControllerGlyph: () => xH,
      ControllerRoot: () => hV,
      PadLobbyShortcuts: () => SV,
      PadSneakChip: () => RV,
      PadTooltip: () => cV,
      attachPressToContinue: () => uV,
      getBoundButton: () => Ib.h,
      getControllerSettings: () => Ub.h,
      getGlyphForNoaAction: () => Ib.n,
      getInventoryCursorState: () => Xg,
      getMenuShortcutButton: () => uM,
      getPadGlyphIconName: () => jV,
      getPadGlyphIconUrl: () => KV,
      getPadRepeatTiming: () => Eb.h,
      handOverPadFocus: () => jg,
      hasActivePad: () => zg,
      isPadSteppingSlots: () => xg
    });
    const eb = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionZoom":"Zoom (hold)","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var Hb = Mb(1259),
      pb = Mb(1567),
      Vb = Mb(9513),
      gb = Mb(81),
      lb = Mb(26),
      Lb = Mb(29),
      Ib = Mb(9525),
      Ob = Mb(9557),
      Ub = Mb(9536),
      tb = Mb(9560),
      Cb = Mb(9515),
      Eb = Mb(10004),
      Fb = Mb(10012),
      Bb = Mb(1864);
    const sb = (bb, wb, Mb) => Math.max(wb, Math.min(Mb, bb)),
      mb = bb => Math.min(bb.width, bb.height) / 720,
      hb = bb => Math.max(.15, bb);
    class zb {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(bb, wb) {
        const Mb = Math.hypot(bb.x, bb.y) >= (bb => Math.max(.3, bb))(wb);
        return this.locked ? (this.locked = Mb, !1) : Mb
      }
    }
    const Xb = (bb, wb) => {
        const Mb = sb(wb.dtMs, 0, 100),
          eb = Mb / 1e3,
          Hb = mb(wb.viewport) * (wb.cursorSpeedPercent / 100),
          pb = (0, Cb.m)(wb.stick, hb(wb.moveDeadzone)),
          Vb = Math.hypot(pb.x, pb.y),
          gb = ((bb, wb, Mb) => {
            if (wb < .3) return 0;
            const eb = Mb / 350;
            return wb >= .85 ? Math.min(1, bb + eb) : Math.max(0, bb - eb)
          })(bb.speedRamp, Vb, Mb);
        let lb = bb.x,
          Lb = bb.y;
        if (Vb > 0) {
          const bb = .45 + .55 * gb,
            Mb = wb.context.overInteractive ? .45 : 1,
            Ib = 1400 * (bb => {
              const wb = sb(bb, 0, 1);
              return .3 * wb + .7 * wb * wb
            })(Vb) * Hb * bb * Mb;
          lb += pb.x / Vb * Ib * eb, Lb += pb.y / Vb * Ib * eb
        }
        const Ib = Math.hypot(wb.dpad.x, wb.dpad.y);
        if (Ib > 0) {
          const bb = 500 * Hb;
          lb += wb.dpad.x / Ib * bb * eb, Lb += wb.dpad.y / Ib * bb * eb
        }
        const Ob = wb.context.magnetTarget;
        if (Ob && Vb < .3 && 0 === Ib) {
          const bb = ((bb, wb, Mb, eb, Hb) => {
            const pb = wb.x - bb.x,
              Vb = wb.y - bb.y,
              gb = Math.hypot(pb, Vb);
            if (0 === gb) return {
              x: 0,
              y: 0
            };
            const lb = Math.min(gb, Hb * (1 - eb / .3));
            let Lb = pb / gb * lb,
              Ib = Vb / gb * lb;
            if (eb > 0) {
              const bb = Mb.x / eb,
                wb = Mb.y / eb,
                Hb = Lb * bb + Ib * wb;
              Hb < 0 && (Lb -= Hb * bb, Ib -= Hb * wb)
            }
            return {
              x: Lb,
              y: Ib
            }
          })({
            x: lb,
            y: Lb
          }, Ob, pb, Vb, 120 * mb(wb.viewport) * eb);
          lb += bb.x, Lb += bb.y
        }
        return {
          x: sb(lb, 0, Math.max(0, wb.viewport.width - 1)),
          y: sb(Lb, 0, Math.max(0, wb.viewport.height - 1)),
          speedRamp: gb
        }
      },
      xb = bb => {
        const wb = (0, Cb.m)(bb, .2);
        return 0 !== wb.x || 0 !== wb.y
      },
      jb = (bb, wb) => {
        const Mb = (0, Cb.m)(bb, .2),
          eb = Math.hypot(Mb.x, Mb.y);
        if (0 === eb) return {
          x: 0,
          y: 0
        };
        const Hb = eb * eb * 1600,
          pb = sb(wb, 0, 100) / 1e3;
        return {
          x: Mb.x / eb * Hb * pb,
          y: Mb.y / eb * Hb * pb
        }
      },
      Kb = (bb, wb) => "y" === wb ? bb.scrollHeight > bb.clientHeight + 1 : bb.scrollWidth > bb.clientWidth + 1,
      rb = (bb, wb) => {
        if (!Kb(bb, wb)) return !1;
        const Mb = getComputedStyle(bb),
          eb = "y" === wb ? Mb.overflowY : Mb.overflowX;
        return "auto" === eb || "scroll" === eb
      },
      Rb = (bb, wb, Mb) => {
        for (let pb = bb instanceof HTMLElement ? bb : null !== (eb = null === bb || void 0 === bb ? void 0 : bb.parentElement) && void 0 !== eb ? eb : null; pb; pb = pb.parentElement) {
          var eb;
          if (rb(pb, wb)) return pb;
          if (pb === Mb) return null
        }
        if (Mb) return null;
        const Hb = document.scrollingElement;
        return Hb instanceof HTMLElement && Kb(Hb, wb) ? Hb : null
      },
      Db = new WeakMap,
      cb = (bb, wb) => {
        const Mb = performance.now(),
          eb = Db.get(bb);
        if (eb && eb.axis === wb && Mb - eb.atMs < 500 && (!eb.container || eb.container.isConnected)) return eb.container;
        const Hb = Yb(bb, wb);
        return Db.set(bb, {
          axis: wb,
          atMs: Mb,
          container: Hb
        }), Hb
      },
      Yb = (bb, wb) => {
        let Mb = rb(bb, wb) ? bb : null,
          eb = Mb ? Mb.clientWidth * Mb.clientHeight : 0;
        for (const Hb of bb.querySelectorAll("*")) {
          const bb = Hb.clientWidth * Hb.clientHeight;
          bb > eb && rb(Hb, wb) && (Mb = Hb, eb = bb)
        }
        return Mb
      },
      Zb = (bb, wb, Mb) => "y" === wb ? Mb < 0 ? bb.scrollTop > 0 : bb.scrollTop + bb.clientHeight < bb.scrollHeight - 1 : Mb < 0 ? bb.scrollLeft > 0 : bb.scrollLeft + bb.clientWidth < bb.scrollWidth - 1,
      fb = (bb, wb, Mb) => {
        "y" === wb ? bb.scrollBy({
          top: Mb,
          behavior: "instant"
        }) : bb.scrollBy({
          left: Mb,
          behavior: "instant"
        })
      },
      Ab = bb => {
        if (!bb || bb === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const wb = bb.getBoundingClientRect(),
          Mb = Math.max(0, wb.left),
          eb = Math.max(0, wb.top);
        return new DOMRect(Mb, eb, Math.min(window.innerWidth, wb.right) - Mb, Math.min(window.innerHeight, wb.bottom) - eb)
      },
      Wb = (bb, wb) => bb.left < wb.right && wb.left < bb.right && bb.top < wb.bottom && wb.top < bb.bottom;
    var Jb = Mb(64),
      Sb = Mb(1159),
      Nb = Mb.n(Sb),
      vb = Mb(1364);
    let Qb = 0,
      Gb = !1;
    class qb {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(bb) {
        this.element = bb, this.shownKey = "", this.gap = null
      }
      show(bb) {
        const wb = this.element;
        if (!wb) return;
        const Mb = bb ? this.keepOnScreen(wb, bb) : null,
          eb = Mb ? `${Mb.left},${Mb.top},${Mb.width},${Mb.height}` : "";
        if (eb === this.shownKey) return;
        const Hb = "" === this.shownKey;
        this.shownKey = eb, wb.classList.toggle("Visible", null !== Mb), Mb && (wb.classList.toggle("Snap", Hb), wb.style.width = `${Mb.width}px`, wb.style.height = `${Mb.height}px`, wb.style.transform = `translate(${Mb.left}px, ${Mb.top}px)`, Hb && (wb.offsetWidth, wb.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(bb, wb) {
        var Mb;
        const eb = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!Gb){Gb=!0;const bb=document.createElement("div");bb.setAttribute("aria-hidden","true"),bb.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(bb),new ResizeObserver((()=>{Qb++})).observe(bb)}return String(Qb)})()}`;
        (null === (Mb = this.gap) || void 0 === Mb ? void 0 : Mb.key) !== eb && (this.gap = {
          px: parseFloat(getComputedStyle(bb).paddingLeft) || 0,
          key: eb
        });
        const Hb = this.gap.px + 2,
          pb = Math.max(wb.left, Hb),
          Vb = Math.max(wb.top, Hb),
          gb = Math.min(wb.left + wb.width, window.innerWidth - Hb),
          lb = Math.min(wb.top + wb.height, window.innerHeight - Hb);
        return gb <= pb || lb <= Vb ? wb : {
          left: pb,
          top: Vb,
          width: gb - pb,
          height: lb - Vb
        }
      }
    }
    const ab = bb => {
      let {
        placer: wb,
        className: Mb
      } = bb;
      const eb = (0, Jb.useCallback)((bb => {
        wb.setElement(bb)
      }), [wb]);
      return (0, vb.jsx)("div", {
        ref: eb,
        className: Nb()("PadReticle", Mb),
        "aria-hidden": !0
      })
    };
    var ib = Mb(10021);
    const ub = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const db = new class {
      constructor() {
        this.state = ub, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(bb) {
        if (wb = this.state, Mb = bb, (wb.visible || Mb.visible) && (wb.visible !== Mb.visible || wb.x !== Mb.x || wb.y !== Mb.y || wb.pressed !== Mb.pressed)) {
          var wb, Mb;
          this.state = bb;
          for (const wb of this.listeners) wb(bb)
        }
      }
      hide() {
        this.set(ub)
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
    };
    var Pb = Mb(10032);
    const nb = (bb, wb) => {
        let {
          kind: Mb,
          holding: eb,
          hasPress: Hb,
          hasBack: pb,
          slotHasItem: Vb
        } = wb;
        switch (bb) {
          case "primary":
            return "slot" === Mb ? "slotPrimary" : "recipe" === Mb || "button" === Mb ? Hb ? "pressPrimary" : "click" : "textField" === Mb ? "openKeyboard" : null;
          case "secondary":
            return "slot" === Mb ? "slotSecondary" : "button" !== Mb && "recipe" !== Mb || !Hb ? null : "pressSecondary";
          case "quickMove":
            return "slot" === Mb && Vb ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === Mb && Vb && !eb ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return eb ? "cancel" : pb ? "pressBack" : "close"
        }
      },
      yb = bb => {
        const wb = [];
        if (bb.hotbarPicking) return wb.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), wb.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), wb;
        if (bb.holding) "slot" === bb.kind ? (wb.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), wb.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === bb.kind && wb.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), wb.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), wb.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), bb.openButtonCloses && wb.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var Mb;
          "slot" === bb.kind && bb.slotHasItem ? (wb.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), wb.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), wb.push({
            actions: ["inventoryQuickMove"],
            labelKey: bb.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), wb.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), wb.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== bb.kind && "recipe" !== bb.kind || !bb.pressHints ? "button" === bb.kind || "recipe" === bb.kind ? wb.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === bb.kind && wb.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (bb.pressHints.primary && wb.push({
            actions: ["inventoryPrimary"],
            labelKey: bb.pressHints.primary
          }), bb.pressHints.secondary && wb.push({
            actions: ["inventorySecondary"],
            labelKey: bb.pressHints.secondary
          }));
          const eb = null === (Mb = bb.pressHints) || void 0 === Mb ? void 0 : Mb.back;
          eb && wb.push({
            actions: ["inventoryClose"],
            labelKey: eb
          });
          const Hb = [];
          bb.openButtonCloses && Hb.push("inventory"), eb || Hb.push("inventoryClose"), Hb.length > 0 && wb.push({
            actions: Hb,
            labelKey: "inventoryClose"
          })
        }
        return wb.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), bb.hasCategories ? wb.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : bb.hasList && wb.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), wb
      };
    var ob = Mb(10040),
      Tb = Mb(3428);
    class kb {
      constructor(bb) {
        this.probes = bb, this.byContainer = new Map, this.byParent = new Map
      }
      find(bb, wb) {
        const Mb = Rb(bb, "y", wb);
        if (!Mb) return null;
        let eb = this.byContainer.get(Mb);
        return eb || (this.probes.push({
          element: Mb,
          rect: ew(Mb.getBoundingClientRect())
        }), eb = {
          container: Mb,
          box: Ab(Mb),
          group: Mw(Mb)
        }, this.byContainer.set(Mb, eb)), eb
      }
      findForParent(bb, wb) {
        let Mb = this.byParent.get(bb);
        return void 0 === Mb && (Mb = this.find(bb, wb), this.byParent.set(bb, Mb)), Mb
      }
    }
    const bw = new WeakMap;
    let ww = 0;
    const Mw = bb => {
        let wb = bw.get(bb);
        return wb || (wb = "el:" + ww++, bw.set(bb, wb)), wb
      },
      ew = bb => ({
        left: bb.left,
        top: bb.top,
        width: bb.width,
        height: bb.height
      }),
      Hw = bb => bb.width > 0 && bb.height > 0,
      pw = (bb, wb) => Hw(bb) && bb.left + bb.width > 0 && bb.top + bb.height > 0 && bb.left < wb.width && bb.top < wb.height,
      Vw = (bb, wb, Mb) => {
        const eb = bb.top + bb.height / 2;
        return pw(bb, wb) && (!Mb || eb >= Mb.top && eb <= Mb.bottom)
      },
      gw = bb => ({
        x: bb.left + bb.width / 2,
        y: bb.top + bb.height / 2
      }),
      lw = (bb, wb, Mb) => bb < 0 ? Mb >= 0 ? 0 : wb - 1 : ((bb + Mb) % wb + wb) % wb,
      Lw = bb => "Left" === bb || "Right" === bb,
      Iw = (bb, wb, Mb) => {
        const eb = Lw(Mb),
          Hb = eb ? bb.top : bb.left,
          pb = eb ? bb.height : bb.width,
          Vb = eb ? wb.top : wb.left,
          gb = eb ? wb.height : wb.width,
          lb = Math.max(0, Math.max(Vb - (Hb + pb), Hb - (Vb + gb)));
        return pb > 1.5 * gb ? {
          gap: lb,
          offset: Math.max(0, Vb - Hb) + .1 * Math.max(0, Hb - Vb)
        } : {
          gap: lb,
          offset: Math.abs(Vb + gb / 2 - (Hb + pb / 2))
        }
      },
      Ow = (bb, wb, Mb) => {
        const eb = ((bb, wb, Mb) => {
          const eb = gw(bb),
            Hb = gw(wb),
            pb = Lw(Mb) ? Math.min(bb.width, wb.width) / 4 : Math.min(bb.height, wb.height) / 4;
          switch (Mb) {
            case "Right":
              return Hb.x - eb.x >= pb ? Math.max(0, wb.left - (bb.left + bb.width)) : null;
            case "Left":
              return eb.x - Hb.x >= pb ? Math.max(0, bb.left - (wb.left + wb.width)) : null;
            case "Down":
              return Hb.y - eb.y >= pb ? Math.max(0, wb.top - (bb.top + bb.height)) : null;
            case "Up":
              return eb.y - Hb.y >= pb ? Math.max(0, bb.top - (wb.top + wb.height)) : null
          }
        })(bb, wb, Mb);
        if (null === eb) return null;
        const Hb = Iw(bb, wb, Mb);
        return eb + 3 * Hb.gap + .5 * Hb.offset
      },
      Uw = (bb, wb) => wb.visible || null !== wb.scrollGroup && wb.scrollGroup === bb.scrollGroup,
      tw = (bb, wb, Mb, eb) => {
        let Hb = null,
          pb = 1 / 0;
        for (const Vb of wb) {
          if (Vb.key === bb.key || !Uw(bb, Vb) || !eb(Vb)) continue;
          const wb = Ow(bb.rect, Vb.rect, Mb);
          null !== wb && wb < pb && (Hb = Vb, pb = wb)
        }
        return Hb
      },
      Cw = (bb, wb, Mb) => {
        const eb = tw(bb, wb, Mb, (() => !0));
        if (!eb || Lw(Mb) || null === bb.scrollGroup || eb.scrollGroup === bb.scrollGroup) return eb;
        const Hb = tw(bb, wb, Mb, (wb => 0 === Iw(bb.rect, wb.rect, Mb).gap));
        return null !== Hb && void 0 !== Hb ? Hb : eb
      },
      Ew = (bb, wb, Mb) => {
        let eb = null,
          Hb = 1 / 0;
        for (const pb of wb) {
          if (!pb.visible || Mb && !Mb(pb)) continue;
          const wb = gw(pb.rect),
            Vb = Math.hypot(wb.x - bb.x, wb.y - bb.y);
          Vb < Hb && (eb = pb, Hb = Vb)
        }
        return eb
      },
      Fw = bb => {
        const {
          rect: wb,
          clip: Mb
        } = bb;
        if (!Mb) return wb;
        const eb = Math.max(wb.left, Mb.left),
          Hb = Math.max(wb.top, Mb.top);
        return {
          left: eb,
          top: Hb,
          width: Math.min(wb.left + wb.width, Mb.left + Mb.width) - eb,
          height: Math.min(wb.top + wb.height, Mb.top + Mb.height) - Hb
        }
      },
      Bw = (bb, wb) => wb.x >= bb.left && wb.x < bb.left + bb.width && wb.y >= bb.top && wb.y < bb.top + bb.height,
      sw = (bb, wb) => {
        let Mb = null,
          eb = 1 / 0;
        for (const Hb of wb) {
          const wb = Fw(Hb);
          (Hb.visible || Hb.clip) && Bw(wb, bb) && (wb.width * wb.height < eb && (Mb = Hb, eb = wb.width * wb.height))
        }
        return Mb
      },
      mw = bb => {
        let wb = null;
        for (const Mb of bb) {
          if (!Mb.visible) continue;
          if (!wb) {
            wb = Mb;
            continue
          }
          const bb = Math.min(wb.rect.height, Mb.rect.height) / 2,
            eb = Mb.rect.top - wb.rect.top;
          (eb < -bb || Math.abs(eb) <= bb && Mb.rect.left < wb.rect.left) && (wb = Mb)
        }
        return wb
      },
      hw = (bb, wb, Mb, eb, Hb) => {
        const pb = Hb % wb,
          Vb = Math.floor(Hb / wb);
        return {
          left: bb.left + pb * Mb,
          top: bb.top + Vb * eb,
          width: bb.width,
          height: bb.height
        }
      },
      zw = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      Xw = ".LazyLoadedItemWrapper",
      xw = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      jw = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      Kw = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      rw = bb => bb.hasAttribute("data-inven-idx") ? "slot" : bb.hasAttribute("data-recipe-key") ? "recipe" : bb.hasAttribute("data-craft-ingredient") || (0, Tb.u)(bb) ? "info" : (0, ib.P)(bb) ? "textField" : "button",
      Rw = (bb, wb) => "slot" === wb ? Number(bb.getAttribute("data-inven-idx")) : null,
      Dw = bb => bb.matches(Xw) ? bb.querySelector(xw) : bb,
      Yw = bb => {
        var wb, Mb;
        return {
          element: bb,
          recipe: null !== (wb = bb && (null === (Mb = Dw(bb)) || void 0 === Mb ? void 0 : Mb.getAttribute("data-recipe-key"))) && void 0 !== wb ? wb : null
        }
      },
      Zw = bb => {
        const wb = Dw(bb);
        if (!wb) return {
          kind: "pending",
          idx: null
        };
        const Mb = rw(wb);
        return {
          kind: Mb,
          idx: Rw(wb, Mb)
        }
      },
      fw = bb => {
        const wb = [];
        for (const [Mb, eb] of jw) {
          bb.matches(eb) && wb.push([Mb, bb]);
          for (const Hb of bb.querySelectorAll(eb)) wb.push([Mb, Hb])
        }
        return wb
      },
      Aw = (bb, wb) => {
        for (const [Mb, eb] of bb)
          if (eb.contains(wb)) return Mb;
        return "other"
      },
      Ww = (bb, wb, Mb, eb, Hb, pb, Vb, gb) => {
        var lb;
        const Lb = bb.children,
          Ib = ew(Lb[0].getBoundingClientRect()),
          Ob = [{
            element: Lb[0],
            rect: Ib
          }];
        if (pb.push(Ob[0]), 0 === Ib.width || 0 === Ib.height) return;
        let Ub = 1;
        for (; Ub < Lb.length && Math.abs(Lb[Ub].getBoundingClientRect().top - Ib.top) < 1;) Ub++;
        const tb = bb => {
            const wb = {
              element: Lb[bb],
              rect: ew(Lb[bb].getBoundingClientRect())
            };
            return pb.push(wb), Ob.push(wb), wb.rect
          },
          Cb = Ub > 1 ? tb(1).left - Ib.left : Ib.width,
          Eb = Lb.length > Ub ? tb(Ub).top - Ib.top : Ib.height,
          Fb = Vb.find(bb, wb);
        let Bb = null;
        if (Fb) {
          var sb;
          const {
            container: bb,
            box: wb
          } = Fb;
          Bb = null !== (sb = gb.get(bb)) && void 0 !== sb ? sb : null, Bb || (Bb = {
            top: bb.scrollTop,
            left: bb.scrollLeft,
            box: wb,
            viewport: eb,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, gb.set(bb, Bb)), Bb.probes.push(...Ob)
        }
        const mb = Hb.length;
        for (let xb = 0; xb < Lb.length; xb++) {
          var hb, zb, Xb;
          const bb = Lb[xb],
            wb = hw(Ib, Ub, Cb, Eb, xb),
            pb = bb.firstElementChild ? bb.querySelector(xw) : null,
            Vb = pb ? rw(pb) : "pending";
          Hb.push({
            key: Mw(bb),
            rect: wb,
            panel: Mb,
            scrollGroup: null !== (hb = null === Fb || void 0 === Fb ? void 0 : Fb.group) && void 0 !== hb ? hb : null,
            visible: Vw(wb, eb, null === Fb || void 0 === Fb ? void 0 : Fb.box),
            clip: null !== (zb = null === Fb || void 0 === Fb ? void 0 : Fb.box) && void 0 !== zb ? zb : null,
            element: bb,
            kind: Vb,
            idx: pb ? Rw(pb, Vb) : null,
            scrollContainer: null !== (Xb = null === Fb || void 0 === Fb ? void 0 : Fb.container) && void 0 !== Xb ? Xb : null
          })
        }
        null === (lb = Bb) || void 0 === lb || lb.targets.push(...Hb.slice(mb))
      },
      Jw = bb => bb instanceof Element && null !== bb.closest(Xw),
      Sw = bb => null !== bb.scrollContainer && Jw(bb.element);
    class Nw {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(bb, wb, Mb, eb) {
        this.latched = {
          source: bb,
          focusKey: wb,
          sinceMs: Mb,
          hold: {
            id: ++this.presses,
            holdMs: eb
          }
        }
      }
      update(bb, wb, Mb) {
        const eb = this.latched;
        return eb ? bb && wb === eb.focusKey ? Mb - eb.sinceMs < eb.hold.holdMs ? null : (this.latched = null, eb.source) : (this.latched = null, null) : null
      }
      getHold() {
        var bb, wb;
        return null !== (bb = null === (wb = this.latched) || void 0 === wb ? void 0 : wb.hold) && void 0 !== bb ? bb : null
      }
      reset() {
        this.latched = null
      }
    }
    var vw = Mb(10042);
    const Qw = {
        kind: "none"
      },
      Gw = bb => ({
        x: bb.clientX,
        y: bb.clientY
      }),
      qw = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class aw {
      constructor() {
        this.hovered = Qw, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(bb, wb, Mb, eb, Hb) {
        const pb = null !== wb ? {
            kind: "slot",
            idx: wb
          } : Mb ? {
            kind: "element",
            element: Mb
          } : Qw,
          Vb = `${Hb}|${Math.round(eb.clientX)},${Math.round(eb.clientY)}`,
          gb = (lb = this.hovered, Lb = pb, "slot" === lb.kind && "slot" === Lb.kind ? lb.idx === Lb.idx : "element" === lb.kind && "element" === Lb.kind ? lb.element === Lb.element : lb.kind === Lb.kind);
        var lb, Lb;
        if (gb && Vb === this.signature) return;
        const Ib = !gb || Hb !== this.holding || "" === this.signature;
        this.signature = Vb, this.holding = Hb, this.lastPoint = eb;
        const Ob = this.hovered;
        if (this.hovered = pb, "slot" === pb.kind) return this.leaveElement(Ob, null, eb), void(Ib ? bb.hover(pb.idx, eb) : bb.moveTo(eb));
        if (gb) return void("element" === pb.kind ? (0, ib.n)(pb.element, pb.element, Gw(eb)) : bb.hover(null, eb));
        bb.hover(null, eb);
        const Ub = "element" === pb.kind ? pb.element : null;
        "element" === Ob.kind ? (0, ib.n)(Ob.element, Ub, Gw(eb)) : Ub && (0, ib.n)(null, Ub, Gw(eb))
      }
      invalidate() {
        this.signature = ""
      }
      clear(bb) {
        const wb = this.hovered;
        this.hovered = Qw, this.signature = "", "none" !== wb.kind && (this.leaveElement(wb, null, this.lastPoint), bb && "slot" === wb.kind && bb.hover(null, this.lastPoint))
      }
      leaveElement(bb, wb, Mb) {
        "element" === bb.kind && (0, ib.n)(bb.element, wb, Gw(Mb))
      }
    }
    class iw {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(bb, wb) {
        xb(bb) && (this.lastTiltedMs = wb)
      }
      allowsClick(bb) {
        return bb - this.lastTiltedMs > 150
      }
    }
    class uw {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(bb) {
        return 0 !== (0, Cb.m)(bb, .2).y
      }
      step(bb, wb, Mb) {
        bb !== this.container && (this.container = bb, this.remainder = 0);
        const eb = jb(wb, Mb).y;
        if (0 === eb) return this.remainder = 0, !1;
        const Hb = this.remainder + eb,
          pb = Math.trunc(Hb);
        if (this.remainder = Hb - pb, 0 === pb) return !1;
        const Vb = bb.scrollTop;
        return bb.scrollTop = Vb + pb, bb.scrollTop !== Vb
      }
      current() {
        var bb;
        return null !== (bb = this.container) && void 0 !== bb && bb.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var dw = Mb(10044);
    const Pw = "[data-pad-inventory-default]",
      nw = ".HotBarGameItemsContainer .InvenItem.Selected",
      yw = {
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
      ow = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      Tw = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      kw = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      bM = [...Tw, ...kw],
      wM = () => {
        return bb = (0, Ib.h)("inventory"), !bM.map(Ib.h).includes(bb) && !(0, Cb.G)(bb);
        var bb
      },
      MM = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      eM = (bb, wb) => {
        const Mb = !(null === wb || void 0 === wb || !wb.isHolding());
        return function(bb, wb) {
          const Mb = bb.find((bb => bb.visible && wb(bb)));
          if (Mb) return Mb;
          for (var eb = arguments.length, Hb = new Array(eb > 2 ? eb - 2 : 0), pb = 2; pb < eb; pb++) Hb[pb - 2] = arguments[pb];
          for (const Vb of Hb) {
            const wb = mw(bb.filter(Vb));
            if (wb) return wb
          }
          return mw(bb)
        }(bb, (bb => {
          const {
            element: wb
          } = bb;
          return wb.matches(Pw) || null !== wb.querySelector(Pw) || wb.matches(nw)
        }), (bb => "slot" === bb.kind ? Mb || null !== bb.idx && !(null === wb || void 0 === wb || !wb.hasItemAt(bb.idx)) : "recipe" === bb.kind || "pending" === bb.kind), (bb => "slot" === bb.kind || "button" === bb.kind))
      };
    class HM {
      constructor() {
        this.set = null, this.observer = new MutationObserver((bb => {
          bb.some((bb => !Jw(bb.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = bb => {
          this.scrolled(bb.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const bb = [],
              wb = [];
            let Mb = !1;
            const eb = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              Hb = new Map,
              pb = new kb(wb);
            for (const Ob of document.querySelectorAll(zw)) {
              const Ib = fw(Ob);
              Mb ||= null !== Ob.querySelector(".CreativeCategoryTab");
              for (const Mb of Ob.querySelectorAll(`${Xw}:first-child`)) {
                const Vb = Mb.parentElement;
                Ww(Vb, Ob, Aw(Ib, Vb), eb, bb, wb, pb, Hb)
              }
              for (const Mb of Ob.querySelectorAll(xw)) {
                var Vb, gb, lb, Lb;
                if (Mb.closest(Xw) || Mb.closest("[data-pad-ignore]")) continue;
                const Ub = null === (Vb = Mb.parentElement) || void 0 === Vb ? void 0 : Vb.closest(xw);
                if (Ub && Ob.contains(Ub)) continue;
                const tb = rw(Mb),
                  Cb = Rw(Mb, tb);
                if (-1 === Cb) continue;
                const Eb = ew(Mb.getBoundingClientRect());
                wb.push({
                  element: Mb,
                  rect: Eb
                });
                const Fb = pb.findForParent(Mb.parentElement, Ob),
                  Bb = Fb && !Hb.has(Fb.container) ? Fb : null;
                (Bb ? Hw(Eb) : pw(Eb, eb)) && bb.push({
                  key: Mw(Mb),
                  rect: Eb,
                  panel: Aw(Ib, Mb),
                  scrollGroup: null !== (gb = null === Bb || void 0 === Bb ? void 0 : Bb.group) && void 0 !== gb ? gb : null,
                  visible: Vw(Eb, eb, null === Bb || void 0 === Bb ? void 0 : Bb.box),
                  clip: null !== (lb = null === Bb || void 0 === Bb ? void 0 : Bb.box) && void 0 !== lb ? lb : null,
                  element: Mb,
                  kind: tb,
                  idx: Cb,
                  scrollContainer: null !== (Lb = null === Bb || void 0 === Bb ? void 0 : Bb.container) && void 0 !== Lb ? Lb : null
                })
              }
            }
            for (const [Ob, Ub] of Hb) Ub.holdsOthers = wb.some((bb => bb.element !== Ob && Ob.contains(bb.element) && !bb.element.closest(Xw)));
            const Ib = new Map;
            for (const Ob of bb) Ib.set(Ob.element, Ob);
            return {
              targets: bb,
              byElement: Ib,
              hasCategories: Mb,
              probes: wb,
              scrollers: Hb
            }
          })(), this.observer.disconnect();
          for (const bb of document.querySelectorAll(zw)) this.observer.observe(bb, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(bb) {
        !this.set || bb instanceof Element && ((bb, wb) => {
          const Mb = bb.scrollers.get(wb);
          if (!Mb || Mb.holdsOthers || wb.scrollLeft !== Mb.left) return !1;
          const eb = wb.scrollTop - Mb.top;
          if (0 === eb) return !0;
          Mb.top = wb.scrollTop;
          for (const Hb of Mb.probes) Hb.rect.top -= eb;
          for (const Hb of Mb.targets) Hb.rect.top -= eb, Hb.visible = Vw(Hb.rect, Mb.viewport, Mb.box);
          return !0
        })(this.set, bb) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((bb => {
          return wb = bb.rect, Mb = bb.element.getBoundingClientRect(), !(wb.left === Mb.left && wb.top === Mb.top && wb.width === Mb.width && wb.height === Mb.height);
          var wb, Mb
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const pM = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(Cb.E.map((bb => [bb, (0, Eb.d)(Cb.F)]))), this.stickRepeat = new Cb.e((0, Eb.d)(Cb.hb)), this.pageUpTimer = (0, Eb.d)(Cb.cb), this.pageDownTimer = (0, Eb.d)(Cb.cb), this.stickGate = new zb, this.pointer = null, this.activePress = null, this.dropLatch = new Nw, this.scroller = new uw, this.scrollStickClick = new iw, this.hover = new aw, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new qb, this.targets = new HM, this.hasCategories = !1, this.wasShowing = !1, this.state = vw.b, this.isActive = () => (0, ob.f)(), this.isShowing = () => "inventory" === Ob.d.getActiveConsumerName() && (0, tb.n)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, ob.d)()), (0, ob.f)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var bb;
            this.reopenSlotIdx = null !== (bb = this.focused ? Zw(this.focused).idx : null) && void 0 !== bb ? bb : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, ob.o)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = bb => {
            (0, gb.unstable_batchedUpdates)((() => {
              this.frame(bb)
            }))
          }, this.shouldBlockRealPointer = bb => bb.isTrusted && !(0, Bb.m)(bb) && this.isShowing(), this.noteRealPointer = bb => {
            bb instanceof MouseEvent && bb.isTrusted && !(0, Bb.m)(bb) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = bb.clientX, this.lastRealPointer.y = bb.clientY)
          }, this.wakePressActs = bb => {
            var wb;
            return bb === (0, Ib.h)("inventoryClose") ? !(null !== (wb = (0, ob.d)()) && void 0 !== wb && wb.isHolding()) : !(bb !== (0, Ib.h)("inventory") || !wM()) || ((0, Cb.G)(bb) ? this.isNavButton(bb) : kw.some((wb => (0, Ib.h)(wb) === bb)))
          }
        }
        frame(bb) {
          var wb, Mb, eb, Hb, pb;
          const Vb = (0, ob.d)();
          if (!(0, tb.n)()) return void(this.wasShowing && (this.endInteraction(Vb), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), bb.wokeDevice && this.focusWakePointer(!(null === Vb || void 0 === Vb || !Vb.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, Ub.h)().inventoryNavigation || this.pointer || this.engagePointer();
          const gb = performance.now();
          this.handleNavigation(bb, gb), this.handlePanels(bb), this.handlePaging(bb, gb), this.handleScroll(bb), this.handleButtons(bb, gb, Vb), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const lb = this.ensureFocus(),
            Lb = this.focusContext(Vb);
          this.ring.show(lb);
          const Ob = "slot" === Lb.kind ? Lb.idx : null,
            Cb = null !== (wb = null === (Mb = Lb.actionElement) || void 0 === Mb ? void 0 : Mb.querySelector(".DoCraftItem")) && void 0 !== wb ? wb : Lb.actionElement;
          this.pointer ? (this.hover.sync(Vb, Ob, Cb, ((bb, wb) => {
            const Mb = wb ? qw() : 0;
            return {
              clientX: bb.x - Mb,
              clientY: bb.y - Mb
            }
          })(this.pointer, Lb.holding), Lb.holding), db.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: bb.isHeld((0, Ib.h)("inventoryPrimary"))
          })) : lb && this.focused && this.hover.sync(Vb, Ob, Cb, ((bb, wb) => {
            if (!wb) return {
              clientX: bb.left + bb.width - 10,
              clientY: bb.top + bb.height / 2 - 10
            };
            const Mb = qw();
            return {
              clientX: bb.left + bb.width / 2 - Mb,
              clientY: bb.top + bb.height / 2 - Mb
            }
          })(lb, Lb.holding), Lb.holding), this.publishState({
            showing: !0,
            kind: Lb.kind,
            holding: Lb.holding,
            slotHasItem: Lb.slotHasItem,
            pressHints: null !== (eb = null === (Hb = Lb.press) || void 0 === Hb ? void 0 : Hb.hints) && void 0 !== eb ? eb : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && Sw(this.focusTarget),
            openButtonCloses: wM(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === Lb.kind && !(null === (pb = Lb.actionElement) || void 0 === pb || !pb.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(bb) {
          var wb;
          const Mb = (0, tb.d)();
          if (!Mb) return;
          this.targets.revalidate();
          const eb = this.getTargets().targets;
          this.setFocus(null !== (wb = sw(Mb, eb)) && void 0 !== wb ? wb : bb ? Ew(Mb, eb, (bb => {
            let {
              rect: wb
            } = bb;
            const eb = Math.max(wb.left - Mb.x, 0, Mb.x - (wb.left + wb.width)),
              Hb = Math.max(wb.top - Mb.y, 0, Mb.y - (wb.top + wb.height));
            return Math.hypot(eb, Hb) <= Math.min(wb.width, wb.height) / 2
          })) : null, !1), "cursor" === (0, Ub.h)().inventoryNavigation && (this.pointer = {
            x: Mb.x,
            y: Mb.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const bb = this.lastRealPointer;
          if (!bb || "keyboardMouse" !== lb.c.get("activeInputDevice")) return;
          const wb = document.elementFromPoint(bb.x, bb.y);
          wb && (0, ib.n)(null, wb, bb)
        }
        endInteraction(bb) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const wb of this.dpadTimers.values()) wb.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(bb), this.ring.hide(), this.releasePointer(), this.publishState(vw.b)
        }
        getTargets() {
          const bb = this.targets.get();
          return this.hasCategories = bb.hasCategories, bb
        }
        currentTarget() {
          var bb;
          return this.focused && null !== (bb = this.getTargets().byElement.get(this.focused)) && void 0 !== bb ? bb : null
        }
        readFocusRect() {
          const bb = this.focused;
          if (null === bb || void 0 === bb || !bb.isConnected || !bb.closest(zw)) return null;
          const wb = bb.getBoundingClientRect();
          return wb.width > 0 && wb.height > 0 ? {
            left: wb.left,
            top: wb.top,
            width: wb.width,
            height: wb.height
          } : null
        }
        ensureFocus() {
          const bb = this.readFocusRect();
          if (bb || this.pointer) return bb;
          const {
            targets: wb,
            byElement: Mb
          } = this.getTargets();
          let eb = null,
            Hb = !1;
          if (this.lastRect) eb = Ew(gw(this.lastRect), wb);
          else {
            var pb, Vb;
            const bb = ((bb, wb) => {
                const Mb = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return Mb ? eM(bb.filter((bb => Mb.contains(bb.element))), wb) : null
              })(wb, (0, ob.d)()),
              gb = wb.find((bb => null !== bb.idx && bb.idx === this.reopenSlotIdx)),
              lb = document.querySelector(nw);
            Hb = null !== bb || void 0 !== gb, eb = null !== (pb = null !== (Vb = null !== bb && void 0 !== bb ? bb : gb) && void 0 !== Vb ? Vb : lb && Mb.get(lb)) && void 0 !== pb ? pb : mw(wb)
          }
          return this.setFocus(eb, Hb), this.lastRect
        }
        setFocus(bb) {
          let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          bb && (this.focused = bb.element, this.focusTarget = bb, this.panelMemory.set(bb.panel, bb.element), wb && bb.scrollContainer && ((bb, wb) => {
            const Mb = bb.getBoundingClientRect(),
              eb = Ab(wb),
              Hb = wb.scrollTop;
            return Mb.top < eb.top ? wb.scrollTop -= eb.top - Mb.top : Mb.bottom > eb.bottom && (wb.scrollTop += Mb.bottom - eb.bottom), wb.scrollTop !== Hb
          })(bb.element, bb.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, Ub.h)().inventoryNavigation) {
              if (this.lastRect) {
                const bb = gw(this.lastRect);
                this.pointer = {
                  x: bb.x,
                  y: bb.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const bb = this.lastRect ? gw(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: bb.x,
            y: bb.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, db.hide()
        }
        hoverAtPointer() {
          var bb;
          const wb = sw(this.pointer, this.getTargets().targets);
          this.focusTarget = wb, (null === wb || void 0 === wb ? void 0 : wb.element) !== this.focused && (this.focused = null !== (bb = null === wb || void 0 === wb ? void 0 : wb.element) && void 0 !== bb ? bb : null, wb && (this.panelMemory.set(wb.panel, wb.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(bb, wb) {
          const Mb = this.focusTarget,
            eb = Mb && (0, Ub.h)().cursorMagnetism ? gw(Fw(Mb)) : null;
          this.pointer = Xb(this.pointer, {
            stick: bb.leftStick,
            moveDeadzone: (0, Ub.h)().moveDeadzone,
            dpad: wb,
            dtMs: bb.dtMs,
            cursorSpeedPercent: (0, Ub.h)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: eb
            }
          })
        }
        move(bb) {
          this.targets.revalidate();
          const wb = this.currentTarget();
          wb && this.setFocus(Cw(wb, this.getTargets().targets, bb))
        }
        step(bb) {
          const wb = this.pointer;
          if (wb && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((bb, wb, Mb) => {
            var eb;
            const Hb = {
              key: "",
              rect: {
                left: bb.x,
                top: bb.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (eb = Cw(Hb, wb, Mb)) && void 0 !== eb ? eb : Ew(bb, wb)
          })(wb, this.getTargets().targets, bb));
          this.move(bb)
        }
        isNavButton(bb) {
          return !Tw.some((wb => (0, Ib.h)(wb) === bb)) && !(bb === (0, Ib.h)("inventory") && wM())
        }
        handleNavigation(bb, wb) {
          const Mb = (0, Ub.h)().inventoryNavigation,
            eb = {
              x: 0,
              y: 0
            };
          let Hb = null;
          for (const lb of Cb.E) {
            const pb = this.isNavButton(lb) && bb.isHeld(lb);
            pb && (eb.x += yw[lb].x, eb.y += yw[lb].y), this.dpadTimers.get(lb).update(pb, wb) && "cursor" !== Mb && (Hb ??= lb)
          }
          const pb = this.stickGate.update(bb.leftStick, (0, Ub.h)().moveDeadzone);
          if (Hb && (this.step(Hb), this.stickGate.lock()), "slot" !== Mb) {
            const wb = ((bb, wb, Mb, eb) => "hybrid" !== bb ? "cursor" === bb : !eb && (wb || Mb))(Mb, null !== this.pointer, pb, null !== Hb);
            return wb && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(bb, "cursor" === Mb ? eb : {
              x: 0,
              y: 0
            }))
          }
          const Vb = (0, Cb.m)(bb.leftStick, (0, Ub.h)().moveDeadzone),
            gb = this.stickRepeat.update(pb ? (0, Cb.kb)(Vb) : null, wb);
          gb && this.move(gb)
        }
        applyCategoryPlace() {
          const bb = this.placeAfterCategory;
          if (!bb) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const wb = Ew(gw(bb.rect), this.getTargets().targets, (wb => wb.scrollGroup === bb.scrollGroup));
          this.setFocus(wb, !1)
        }
        applyFocusRequest() {
          const bb = (0, ob.o)();
          bb && (this.targets.invalidate(), this.setFocus((0, ob.b)(this.getTargets().targets, bb)))
        }
        handlePanels(bb) {
          var wb, Mb, eb;
          const Hb = bb.wasPressed((0, Ib.h)("inventoryPanelPrevious")),
            pb = bb.wasPressed((0, Ib.h)("inventoryPanelNext"));
          if (!Hb && !pb) return;
          const {
            targets: Vb
          } = this.getTargets(), gb = (lb = ((bb, wb) => {
            const Mb = [];
            for (const Hb of bb) Hb.visible && !Mb.includes(Hb.panel) && Mb.push(Hb.panel);
            const eb = bb => {
              const eb = wb.indexOf(bb);
              return -1 === eb ? wb.length + Mb.indexOf(bb) : eb
            };
            return Mb.sort(((bb, wb) => eb(bb) - eb(wb)))
          })(Vb, Kw), Lb = null !== (wb = null === (Mb = this.focusTarget) || void 0 === Mb ? void 0 : Mb.panel) && void 0 !== wb ? wb : null, Ob = pb ? 1 : -1, 0 === lb.length ? null : lb[lw(null === Lb ? -1 : lb.indexOf(Lb), lb.length, Ob)]);
          var lb, Lb, Ob;
          if (null === gb) return;
          const Ub = this.panelMemory.get(gb),
            tb = Vb.filter((bb => bb.panel === gb)),
            Cb = null !== (eb = tb.find((bb => bb.element === Ub && bb.visible))) && void 0 !== eb ? eb : eM(tb, (0, ob.d)());
          this.setFocus(Cb)
        }
        handlePaging(bb, wb) {
          const Mb = (0, Ib.h)("menuPageUp"),
            eb = (0, Ib.h)("menuPageDown"),
            Hb = this.pageUpTimer.update(bb.isHeld(Mb), wb),
            pb = this.pageDownTimer.update(bb.isHeld(eb), wb);
          if (!Hb && !pb) return;
          const Vb = pb ? 1 : -1;
          if (!bb.wasPressed(pb ? eb : Mb) && this.hasCategories) return;
          if ((bb => {
              const wb = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === wb.length) return !1;
              const Mb = wb.findIndex((bb => bb.classList.contains("Selected"))),
                eb = wb[lw(Mb, wb.length, bb)];
              return (0, ib.j)(eb, (0, ib.y)(eb)), !0
            })(Vb)) {
            var gb, lb;
            this.targets.invalidate();
            const bb = null !== (gb = null === (lb = this.focusTarget) || void 0 === lb ? void 0 : lb.scrollGroup) && void 0 !== gb ? gb : null,
              wb = this.readFocusRect();
            return void(this.placeAfterCategory = null !== bb && wb && !this.pointer ? {
              rect: wb,
              scrollGroup: bb
            } : null)
          }
          const {
            targets: Lb
          } = this.getTargets(), Ob = this.currentTarget(), Ub = Ob && Sw(Ob) ? Ob : Lb.find((bb => Sw(bb) && bb.visible));
          if (!Ub) return;
          const tb = ((bb, wb, Mb, eb) => {
            if (null === bb.scrollGroup) return null;
            const Hb = gw(bb.rect),
              pb = Hb.x,
              Vb = Hb.y + ("Down" === Mb ? eb : -eb);
            let gb = null,
              lb = 1 / 0;
            for (const Lb of wb) {
              if (Lb.scrollGroup !== bb.scrollGroup || Lb.key === bb.key) continue;
              const wb = gw(Lb.rect);
              if ("Down" === Mb ? wb.y <= Hb.y : wb.y >= Hb.y) continue;
              const eb = Math.hypot(wb.x - pb, wb.y - Vb);
              eb < lb && (gb = Lb, lb = eb)
            }
            return gb
          })(Ub, Lb, Vb > 0 ? "Down" : "Up", Ub.scrollContainer.clientHeight);
          this.setFocus(null !== tb && void 0 !== tb ? tb : Ub)
        }
        handleScroll(bb) {
          var wb, Mb, eb, Hb, pb, Vb;
          if (!this.scroller.isScrolling(bb.rightStick)) return void this.scroller.reset();
          const {
            targets: gb
          } = this.getTargets(), lb = this.pointer, Lb = !lb && this.focusTarget && Sw(this.focusTarget) ? this.focusTarget.scrollContainer : null, Ib = lb && (null === (wb = gb.find((bb => bb.clip && Bw(bb.clip, lb)))) || void 0 === wb ? void 0 : wb.scrollContainer), Ob = null !== (Mb = null !== (eb = null !== (Hb = this.scroller.current()) && void 0 !== Hb ? Hb : Ib) && void 0 !== eb ? eb : Lb) && void 0 !== Mb ? Mb : null === (pb = gb.find(Sw)) || void 0 === pb ? void 0 : pb.scrollContainer;
          if (!Ob || !this.scroller.step(Ob, bb.rightStick, bb.dtMs)) return;
          this.targets.scrolled(Ob);
          const Ub = lb || (null === (Vb = this.focusTarget) || void 0 === Vb ? void 0 : Vb.scrollContainer) !== Ob ? null : this.readFocusRect();
          if (!Ub) return;
          const tb = Ab(Ob),
            Cb = gw(Ub);
          if (Cb.y < tb.top || Cb.y > tb.bottom) {
            const bb = this.focusTarget.scrollGroup,
              wb = Ew(Cb, this.getTargets().targets, (wb => wb.scrollGroup === bb));
            this.setFocus(wb, !1)
          }
        }
        focusContext(bb) {
          const {
            kind: wb,
            idx: Mb
          } = this.focused ? Zw(this.focused) : {
            kind: null,
            idx: null
          }, eb = this.focused ? Dw(this.focused) : null, Hb = eb ? (0, dw.e)(eb) : null;
          return {
            kind: wb,
            idx: Mb,
            actionElement: eb,
            press: Hb,
            hasPress: null !== Hb,
            hasBack: !(null === Hb || void 0 === Hb || !Hb.back),
            holding: bb.isHolding(),
            slotHasItem: null !== Mb && bb.hasItemAt(Mb)
          }
        }
        handleButtons(bb, wb, Mb) {
          var eb, Hb;
          if (!this.activePress || bb.isHeld(this.activePress.button) && (eb = this.activePress.target, Hb = this.focused, null !== eb.recipe ? Yw(Hb).recipe === eb.recipe : Hb === eb.element) || this.releasePress(), this.scrollStickClick.update(bb.rightStick, wb), !this.handleHotbarPick(bb, Mb)) {
            for (const [eb, Hb] of ow) {
              const pb = (0, Ib.h)(Hb);
              if (!bb.wasPressed(pb) || "openButton" === eb && !wM()) continue;
              if ("RS" === pb && !this.scrollStickClick.allowsClick(wb)) continue;
              const Vb = this.focusContext(Mb),
                gb = nb(eb, Vb);
              gb && this.runIntent(gb, Vb, pb, Mb)
            }
            this.handleDrop(bb, wb, Mb)
          }
        }
        handleHotbarPick(bb, wb) {
          const Mb = this.hotbarPick;
          if (!Mb) return !1;
          const eb = bb.wasPressed((0, Ib.h)("inventoryPrimary")) || bb.wasPressed((0, Ib.h)("inventoryHotbarSwap"));
          if (!eb && !bb.wasPressed((0, Ib.h)("inventoryClose")) && !wb.isHolding()) return !(bb.wasPressed((0, Ib.h)("inventory")) && wM());
          const Hb = this.focusTarget;
          eb && "hotbar" === (null === Hb || void 0 === Hb ? void 0 : Hb.panel) && null !== Hb.idx && Hb.idx !== Mb.idx && (wb.swapWithHotbar(Hb.idx, Mb.idx), this.afterAction()), this.hotbarPick = null;
          const pb = Mb.element.isConnected ? this.getTargets().byElement.get(Mb.element) : void 0;
          return pb && this.setFocus(pb), !0
        }
        startHotbarPick(bb) {
          var wb;
          const {
            targets: Mb,
            byElement: eb
          } = this.getTargets(), Hb = document.querySelector(nw), pb = null !== (wb = Hb && eb.get(Hb)) && void 0 !== wb ? wb : Mb.find((bb => "hotbar" === bb.panel));
          pb && this.focused && (this.hotbarPick = {
            idx: bb,
            element: this.focused
          }, this.setFocus(pb))
        }
        focusKey() {
          return this.focused ? Mw(this.focused) : null
        }
        handleDrop(bb, wb, Mb) {
          const eb = (0, Ib.h)("inventoryDrop");
          if (bb.wasPressed(eb)) {
            const bb = (Hb = this.focusContext(Mb)).holding ? {
              kind: "dg"
            } : "slot" === Hb.kind && Hb.slotHasItem && null !== Hb.idx ? {
              kind: "slot",
              idx: Hb.idx
            } : null;
            return void(bb && (this.dropFrom(bb, !1, Mb), this.dropLatch.press(bb, this.focusKey(), wb, Fb.d[(0, Ub.h)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var Hb;
          const pb = this.dropLatch.update(bb.isHeld(eb), this.focusKey(), wb);
          pb && ((bb, wb, Mb) => "dg" === bb.kind ? wb : !wb && Mb(bb.idx))(pb, Mb.isHolding(), Mb.hasItemAt) && (this.dropFrom(pb, !0, Mb), this.afterAction())
        }
        dropFrom(bb, wb, Mb) {
          "dg" === bb.kind ? Mb.dropHeld(wb, this.slotPoint()) : Mb.dropSlot(bb.idx, wb)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (bb => {
            const wb = gw(bb);
            return {
              clientX: wb.x,
              clientY: wb.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(bb, wb, Mb, eb) {
          const Hb = wb.idx,
            pb = wb.actionElement;
          switch (pb && MM.has(bb) && (0, Bb.t)(pb), bb) {
            case "slotPrimary":
              eb.primary(Hb, this.slotPoint());
              break;
            case "slotSecondary":
              eb.secondary(Hb, this.slotPoint());
              break;
            case "slotQuickMove":
              eb.quickMove(Hb, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(Hb);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(wb.press, "pressPrimary" === bb ? "primary" : "secondary", Mb);
              break;
            case "click":
              (0, ib.j)(pb, (0, ib.y)(pb));
              break;
            case "openKeyboard":
              (0, ib.P)(pb) && (0, ib.N)(pb);
              break;
            case "pressBack":
              wb.press.back();
              break;
            case "cancel":
              eb.cancel();
              break;
            case "close":
              return this.releasePress(), void eb.close()
          }
          this.afterAction()
        }
        startPress(bb, wb, Mb) {
          this.releasePress(), bb.press(wb) && (this.activePress = {
            handlers: bb,
            button: Mb,
            target: Yw(this.focused)
          })
        }
        releasePress() {
          var bb, wb, Mb;
          null === (bb = this.activePress) || void 0 === bb || null === (wb = (Mb = bb.handlers).release) || void 0 === wb || wb.call(Mb), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(bb) {
          ((bb, wb) => {
            var Mb, eb, Hb, pb, Vb, gb;
            return bb.showing === wb.showing && bb.kind === wb.kind && bb.holding === wb.holding && bb.slotHasItem === wb.slotHasItem && (null === (Mb = bb.pressHints) || void 0 === Mb ? void 0 : Mb.primary) === (null === (eb = wb.pressHints) || void 0 === eb ? void 0 : eb.primary) && (null === (Hb = bb.pressHints) || void 0 === Hb ? void 0 : Hb.secondary) === (null === (pb = wb.pressHints) || void 0 === pb ? void 0 : pb.secondary) && (null === (Vb = bb.pressHints) || void 0 === Vb ? void 0 : Vb.back) === (null === (gb = wb.pressHints) || void 0 === gb ? void 0 : gb.back) && bb.hasCategories === wb.hasCategories && bb.hasList === wb.hasList && bb.openButtonCloses === wb.openButtonCloses && bb.steppingSlots === wb.steppingSlots && bb.hotbarPicking === wb.hotbarPicking && bb.quickMoveToHotbar === wb.quickMoveToHotbar && bb.dropStackHold === wb.dropStackHold
          })(bb, this.state) || (this.state = bb, Lb.k.iI(vw.e, bb))
        }
      },
      VM = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var gM = Mb(10049),
      lM = Mb(366),
      LM = Mb(1821),
      IM = Mb(9534);
    const OM = "[data-pad-secondary]",
      UM = bb => bb instanceof HTMLElement && (0, Tb.m)(bb) && !(0, Tb.u)(bb),
      tM = bb => {
        const wb = bb.querySelector(OM);
        if (wb && UM(wb)) return wb;
        for (const Hb of null !== (Mb = null === (eb = bb.parentElement) || void 0 === eb ? void 0 : eb.children) && void 0 !== Mb ? Mb : []) {
          var Mb, eb;
          if (Hb !== bb && Hb.matches(OM) && UM(Hb)) return Hb
        }
        return null
      },
      CM = (bb, wb, Mb, eb) => Math.max(0, Math.max(bb, Mb) - Math.min(wb, eb)),
      EM = (bb, wb, Mb, eb) => Math.max(0, Math.min(wb, eb) - Math.max(bb, Mb)),
      FM = (bb, wb, Mb) => {
        const eb = (bb.left + bb.right) / 2,
          Hb = (bb.top + bb.bottom) / 2,
          pb = (wb.left + wb.right) / 2,
          Vb = (wb.top + wb.bottom) / 2;
        if ("Left" === Mb || "Right" === Mb) {
          const gb = "Right" === Mb ? 1 : -1;
          return {
            forwardGap: "Right" === Mb ? wb.left - bb.right : bb.left - wb.right,
            centreForward: (pb - eb) * gb,
            sidewaysGap: CM(bb.top, bb.bottom, wb.top, wb.bottom),
            sidewaysOverlap: EM(bb.top, bb.bottom, wb.top, wb.bottom),
            centreSideways: Math.abs(Vb - Hb),
            startSideways: Math.abs(wb.top - bb.top),
            fromSidewaysSize: bb.bottom - bb.top,
            toSidewaysSize: wb.bottom - wb.top,
            toLength: wb.right - wb.left
          }
        }
        const gb = "Down" === Mb ? 1 : -1;
        return {
          forwardGap: "Down" === Mb ? wb.top - bb.bottom : bb.top - wb.bottom,
          centreForward: (Vb - Hb) * gb,
          sidewaysGap: CM(bb.left, bb.right, wb.left, wb.right),
          sidewaysOverlap: EM(bb.left, bb.right, wb.left, wb.right),
          centreSideways: Math.abs(pb - eb),
          startSideways: Math.abs(wb.left - bb.left),
          fromSidewaysSize: bb.right - bb.left,
          toSidewaysSize: wb.right - wb.left,
          toLength: wb.bottom - wb.top
        }
      },
      BM = bb => bb.centreForward > .5 && bb.forwardGap >= -bb.toLength / 2,
      sM = bb => {
        const wb = bb.sidewaysOverlap > 0 ? 0 : 2 * bb.fromSidewaysSize,
          Mb = bb.fromSidewaysSize > 1.5 * bb.toSidewaysSize ? bb.startSideways : bb.centreSideways;
        return Math.max(0, bb.forwardGap) + 3 * bb.sidewaysGap + wb + .1 * Mb
      },
      mM = (bb, wb) => EM(bb.top, bb.bottom, wb.top, wb.bottom) > 0 || wb.bottom - wb.top > wb.right - wb.left,
      hM = (bb, wb, Mb, eb, Hb, pb) => {
        const Vb = Hb ? XM(bb, wb, Mb, Hb) : new Set,
          gb = jM(bb, wb, Mb, Vb);
        return gb < 0 && Vb.size > 0 && pb ? zM(bb, wb, Mb, pb) : eb && gb >= 0 ? xM(bb, wb, Mb, eb, gb, Vb) : gb
      },
      zM = (bb, wb, Mb, eb) => {
        const Hb = new Set,
          pb = jM(bb, wb, "Up", Hb) >= 0,
          Vb = jM(bb, wb, "Down", Hb) >= 0,
          gb = new Set;
        return wb.forEach(((wb, Mb) => {
          const Hb = wb.top + wb.bottom < bb.top + bb.bottom;
          eb[Mb] && !(Hb ? pb : Vb) || gb.add(Mb)
        })), jM(bb, wb, Mb, gb)
      },
      XM = (bb, wb, Mb, eb) => {
        const Hb = new Set;
        return "Left" !== Mb && "Right" !== Mb || wb.forEach(((wb, Mb) => {
          eb[Mb] && EM(bb.top, bb.bottom, wb.top, wb.bottom) <= 0 && Hb.add(Mb)
        })), Hb
      },
      xM = (bb, wb, Mb, eb, Hb, pb) => {
        const Vb = FM(bb, wb[Hb], Mb).forwardGap;
        let gb = Hb,
          lb = eb[Hb],
          Lb = 1 / 0;
        return wb.forEach(((wb, Ib) => {
          const Ob = eb[Ib];
          if (pb.has(Ib) || Ob < lb || Ob === lb && gb === Hb) return;
          const Ub = FM(bb, wb, Mb);
          if (!BM(Ub) || Ub.forwardGap < 0 || Ub.forwardGap >= Vb) return;
          const tb = sM(Ub);
          (Ob > lb || tb < Lb) && (gb = Ib, lb = Ob, Lb = tb)
        })), gb
      },
      jM = (bb, wb, Mb, eb) => {
        let Hb = -1,
          pb = 1 / 0;
        if (wb.forEach(((wb, Vb) => {
            const gb = ((bb, wb, Mb) => {
              const eb = FM(bb, wb, Mb);
              if (!BM(eb)) return null;
              const Hb = Math.max(0, eb.forwardGap);
              return eb.sidewaysOverlap <= 0 && eb.sidewaysGap > 2 * (Hb + 1) ? null : sM(eb)
            })(bb, wb, Mb);
            null !== gb && gb < pb && !eb.has(Vb) && (pb = gb, Hb = Vb)
          })), Hb < 0) return -1;
        const Vb = wb[Hb],
          gb = FM(bb, Vb, Mb).forwardGap;
        let lb = gb,
          Lb = Hb;
        return wb.forEach(((wb, pb) => {
          if (pb === Hb || eb.has(pb) || !((bb, wb, Mb) => {
              const eb = "Left" === Mb || "Right" === Mb,
                Hb = eb ? EM(bb.top, bb.bottom, wb.top, wb.bottom) : EM(bb.left, bb.right, wb.left, wb.right),
                pb = eb ? Math.min(bb.bottom - bb.top, wb.bottom - wb.top) : Math.min(bb.right - bb.left, wb.right - wb.left);
              return Hb > 0 && Hb >= pb / 2
            })(wb, Vb, Mb)) return;
          const Ib = FM(bb, wb, Mb);
          BM(Ib) && Ib.forwardGap + Ib.toLength <= gb + 1 && Ib.forwardGap < lb && (lb = Ib.forwardGap, Lb = pb)
        })), Lb
      },
      KM = (bb, wb) => {
        let Mb = -1,
          eb = 1 / 0;
        return wb.forEach(((wb, Hb) => {
          const pb = Math.max(wb.left - bb.x, 0, bb.x - wb.right),
            Vb = Math.max(wb.top - bb.y, 0, bb.y - wb.bottom),
            gb = Math.hypot(pb, Vb);
          gb < eb && (eb = gb, Mb = Hb)
        })), Mb
      },
      rM = (bb, wb) => {
        const Mb = Math.min(bb.bottom - bb.top, wb.bottom - wb.top) / 2;
        return Math.abs(bb.top - wb.top) > Mb ? bb.top - wb.top : bb.left - wb.left
      },
      RM = bb => {
        let wb = -1;
        for (let Mb = 0; Mb < bb.length; Mb++)(wb < 0 || rM(bb[Mb], bb[wb]) < 0) && (wb = Mb);
        return wb
      };
    var DM = Mb(1882),
      cM = Mb(10053),
      YM = Mb(10061);
    const ZM = bb => {
        if ("death" !== bb || "inGame" !== lb.c.get("gameState") || "off" === (0, Ub.h)().quickChat || null === (0, DM.d)()) return !1;
        const wb = (0, Ib.h)("chat");
        return wb !== (0, Ib.h)("menuConfirm") && wb !== (0, Ib.h)("menuBack")
      },
      fM = new cM.b;
    var AM = Mb(5086),
      WM = Mb(10064),
      JM = Mb(10071);
    const SM = bb => {
        let wb = null;
        for (const Mb of bb.querySelectorAll("[data-pad-tabs]"))(0, Tb.m)(Mb) && (!wb || Number(Mb.dataset.padTabs) < Number(wb.dataset.padTabs)) && (wb = Mb);
        return wb
      },
      NM = (bb, wb, Mb, eb) => {
        bb.focusWhenFound((() => {
          const Hb = bb.pickInitial(wb);
          if (Hb && !Mb.has(Hb) && (null === eb || void 0 === eb || !eb.contains(Hb))) return Hb;
          const pb = ((bb, wb) => {
              const Mb = wb => bb.getEnabledCandidates(wb).filter((bb => !bb.closest("[data-pad-tabs]")));
              for (const eb of (0, Tb.g)(wb)) {
                const bb = Mb(eb);
                if (bb.length > 0) return bb
              }
              return Mb(wb)
            })(bb, wb).filter((bb => !Mb.has(bb))),
            Vb = RM(pb.map((bb => bb.getBoundingClientRect())));
          return Vb >= 0 ? pb[Vb] : null
        }), 3e3)
      },
      vM = (bb, wb, Mb, eb) => {
        var Hb;
        const pb = ((bb, wb) => {
          if (0 === bb.length) return null;
          const Mb = bb.findIndex((bb => "true" === bb.dataset.padSelected));
          return Mb < 0 ? wb > 0 ? bb[0] : bb[bb.length - 1] : bb[(Mb + wb + bb.length) % bb.length]
        })([...Mb.querySelectorAll("[data-pad-tab]")].filter((bb => (0, Tb.m)(bb) && !(0, Tb.u)(bb))), eb);
        if (!pb) return;
        const Vb = null !== (Hb = null === bb || void 0 === bb ? void 0 : bb.getFocused()) && void 0 !== Hb ? Hb : null,
          gb = !(null === Vb || void 0 === Vb || !Vb.isConnected) && Mb.contains(Vb),
          lb = bb && !gb ? new Set(bb.getEnabledCandidates(wb)) : null;
        (0, ib.c)(pb), bb && (lb ? NM(bb, wb, lb, Mb) : bb.setFocus(pb, {
          byUser: !0
        }))
      },
      QM = bb => {
        var wb;
        const Mb = Ab(null !== (wb = Rb(bb, "x")) && void 0 !== wb ? wb : bb),
          eb = (0, Tb.f)(bb).filter((bb => !(0, Tb.u)(bb))),
          Hb = eb.filter((bb => Wb(bb.getBoundingClientRect(), Mb)));
        return (Hb.length > 0 ? Hb : eb).sort(((bb, wb) => rM(bb.getBoundingClientRect(), wb.getBoundingClientRect())))
      },
      GM = (bb, wb, Mb) => {
        const eb = [...wb.querySelectorAll("[data-pad-row]")].filter(Tb.m),
          Hb = bb.getFocused(),
          pb = Hb ? eb.findIndex((bb => bb.contains(Hb))) : -1;
        let Vb = 0,
          gb = Mb > 0 ? 0 : eb.length - 1;
        if (pb >= 0 && Hb) Vb = Math.max(0, QM(eb[pb]).indexOf(Hb)), gb = pb + Mb;
        else if (Hb) {
          const bb = Hb.getBoundingClientRect(),
            wb = eb.map((wb => {
              const eb = wb.getBoundingClientRect();
              return Mb > 0 ? eb.top >= bb.top : eb.bottom <= bb.bottom
            }));
          gb = Mb > 0 ? wb.indexOf(!0) : wb.lastIndexOf(!0)
        }
        for (let lb = gb; lb >= 0 && lb < eb.length; lb += Mb) {
          const wb = QM(eb[lb]);
          if (wb.length > 0) return void bb.setFocus(wb[Math.min(Vb, wb.length - 1)], {
            byUser: !0
          })
        }
      },
      qM = (bb, wb, Mb) => {
        var eb, Hb;
        const pb = null !== (eb = null === bb || void 0 === bb ? void 0 : bb.getFocused()) && void 0 !== eb ? eb : null,
          Vb = null !== pb && void 0 !== pb && pb.closest("[data-pad-row]") ? "x" : "y",
          gb = null !== (Hb = pb ? Rb(pb, Vb, wb) : null) && void 0 !== Hb ? Hb : cb(wb, Vb);
        if (!gb) return;
        const lb = pb ? (0, ib.y)(pb) : null;
        if (fb(gb, Vb, Mb * ("y" === Vb ? gb.clientHeight : gb.clientWidth) * .85), !bb || !lb) return;
        const Lb = Ab(gb),
          Ib = bb.getEnabledCandidates(wb).filter((bb => gb.contains(bb) && Wb(bb.getBoundingClientRect(), Lb))),
          Ob = KM(lb, Ib.map((bb => bb.getBoundingClientRect())));
        Ob >= 0 && bb.setFocus(Ib[Ob], {
          scroll: !1,
          byUser: !0
        })
      };
    let aM = null;
    const iM = (bb, wb) => {
        var Mb, eb;
        const Hb = wb.querySelector("[data-pad-friends-column]"),
          pb = bb.getFocused();
        if (!Hb || !pb || !Hb.contains(pb)) return !1;
        const Vb = bb.getEnabledCandidates(wb).filter((bb => !Hb.contains(bb))),
          gb = KM((0, ib.y)(pb), Vb.map((bb => bb.getBoundingClientRect()))),
          lb = null === (Mb = aM) || void 0 === Mb ? void 0 : Mb.deref();
        return bb.setFocus(null !== lb && void 0 !== lb && lb.isConnected ? lb : null !== (eb = Vb[gb]) && void 0 !== eb ? eb : null, {
          byUser: !0
        }), !0
      },
      uM = bb => {
        const wb = (0, Ib.h)(bb);
        return (0, Cb.G)(wb) || IM.t.some((bb => (0, Ib.h)(bb) === wb)) ? null : wb
      },
      dM = (bb, wb) => {
        const Mb = uM(wb);
        return null !== Mb && bb.wasPressed(Mb)
      },
      PM = function(bb, wb, Mb) {
        let eb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Hb = (bb => {
            var wb, Mb;
            return null !== (wb = null === (Mb = SM(bb)) || void 0 === Mb ? void 0 : Mb.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== wb ? wb : null
          })(wb),
          pb = bb && Hb ? new Set(bb.getEnabledCandidates(wb)) : null;
        (0, gM.c)(), Mb === lM.l.SETTINGS && (0, LM.j)(lb.c.get("openEverythingMenuName")) ? lb.c.set({
          openEverythingMenuName: Mb
        }) : (0, LM.x)((0, JM.b)("padMenuShortcut"), Mb, eb), bb && pb && Hb && NM(bb, wb, pb, Hb.closest("[data-pad-tabs]"))
      },
      nM = bb => null !== bb.closest(".Dropdown-root") || null !== bb.querySelector(".Dropdown-root.is-open"),
      yM = bb => null !== (0, WM.d)() && "popup" !== bb.layer.kind && !SM(bb.root) && !nM(bb.root),
      oM = (0, Eb.d)(Cb.cb),
      TM = (0, Eb.d)(Cb.cb),
      kM = (bb, wb, Mb) => {
        if (((bb, wb) => {
            const Mb = (0, Ib.h)("chat");
            return ZM(wb) && bb.isHeld(Mb) ? "hold" === fM.update(bb.wasPressed(Mb), bb.isHeld(Mb), performance.now(), Fb.d[(0, Ub.h)().tapHoldTime].wheelMs) && (Ob.d.consumeButton(Mb), Lb.k.iI(YM.j), !0) : (fM.release(), !1)
          })(wb, Mb.layer.kind)) return !0;
        const eb = Mb.root;
        for (const [Vb, gb] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (wb.wasPressed((0, Ib.h)(Vb))) {
            const wb = nM(eb) ? null : SM(eb);
            if (wb) vM(bb, eb, wb, gb);
            else if (yM(Mb)) {
              var Hb;
              const wb = bb ? new Set(bb.getEnabledCandidates(eb)) : null;
              null !== (Hb = (0, WM.d)()) && void 0 !== Hb && Hb(gb) && bb && wb && NM(bb, eb, wb, null)
            } else bb && GM(bb, eb, gb);
            return !0
          } for (const [Vb, gb, lb] of [
            ["menuPageUp", -1, oM],
            ["menuPageDown", 1, TM]
          ]) {
          const Mb = (0, Ib.h)(Vb);
          if (wb.wasPressed(Mb) && lb.reset(), lb.update(wb.isHeld(Mb), performance.now())) return qM(bb, eb, gb), !0
        }
        const pb = "popup" === Mb.layer.kind;
        return dM(wb, "pause") ? (pb || (0, LM.u)() && "menu" !== Mb.layer.kind || PM(bb, eb, (0, LM.u)() ? lM.l.SETTINGS : (0, AM.b)()), !0) : !!dM(wb, "leaderboard") && ("home" === Mb.layer.kind ? (bb => {
          const wb = [...bb.querySelectorAll("[data-pad-notifications]")].find(Tb.m);
          wb && (0, ib.c)(wb)
        })(eb) : pb || PM(bb, eb, lM.l.LOBBY_LEADERBOARD, "inGame" === lb.c.get("gameState")), !0)
      },
      be = (bb, wb, Mb) => {
        if (kM(bb, wb, Mb)) return !0;
        const eb = "home" === Mb.layer.kind;
        if (wb.wasPressed((0, Ib.h)("menuSecondary"))) {
          const wb = bb.getFocused(),
            Hb = wb ? tM(wb) : null;
          if (Hb) return (0, ib.c)(Hb), !0;
          if (eb) {
            const wb = Mb.root.querySelector("[data-pad-search] input");
            return wb && (0, Tb.q)(wb, Mb.root) ? (bb.setFocus(wb, {
              byUser: !0
            }), (0, ib.c)(wb)) : lb.c.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!eb || !dM(wb, "inventory")) && (((bb, wb) => {
          var Mb, eb;
          const Hb = wb.querySelector("[data-pad-friends-column]");
          if (!Hb || !(0, Tb.m)(Hb)) return void(0, LM.x)((0, JM.b)("padMenuShortcut"), lM.l.SOCIAL);
          if (iM(bb, wb)) return;
          const pb = null !== (Mb = null === (eb = Hb.querySelector("[data-pad-friends-start]")) || void 0 === eb ? void 0 : eb.getBoundingClientRect().top) && void 0 !== Mb ? Mb : -1 / 0,
            Vb = bb.getEnabledCandidates(Hb),
            gb = Vb.filter((bb => bb.getBoundingClientRect().top >= pb)),
            lb = gb.length > 0 ? gb : Vb,
            Lb = RM(lb.map((bb => bb.getBoundingClientRect())));
          bb.setFocus(Lb >= 0 ? lb[Lb] : null, {
            byUser: !0
          })
        })(bb, Mb.root), !0)
      },
      we = bb => {
        var wb, Mb, eb;
        const Hb = (0, ib.C)(bb);
        if (null !== Hb) return Hb;
        const pb = (null !== (wb = null !== (Mb = null !== (eb = bb.getAttribute("aria-label")) && void 0 !== eb ? eb : bb.getAttribute("title")) && void 0 !== Mb ? Mb : bb.textContent) && void 0 !== wb ? wb : "").replace(/\s+/g, " ").trim();
        return pb ? `${bb.tagName}:${pb.slice(0,100)}` : null
      };
    class Me {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(bb) {
        const wb = this.history.indexOf(bb);
        if (wb >= 0) {
          for (const bb of this.history.splice(wb + 1)) this.remembered.delete(bb);
          return !0
        }
        return this.remembered.delete(bb), this.history.push(bb), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(bb) {
        this.remembered.delete(bb);
        const wb = this.history.indexOf(bb);
        wb >= 0 && this.history.splice(wb, 1)
      }
      remember(bb, wb, Mb, eb) {
        const Hb = we(wb),
          pb = (0, ib.C)(wb),
          Vb = null !== pb && ((bb, wb) => {
            let Mb = 0;
            for (const eb of bb.querySelectorAll("[data-pad-key], [href]"))
              if ((eb.getAttribute("data-pad-key") === wb || eb.getAttribute("href") === wb) && (Mb++, Mb > 1)) return !0;
            return !1
          })(Mb, pb) ? Math.max(0, this.twins(eb(), pb).indexOf(wb)) : 0;
        this.remembered.set(bb, {
          element: new WeakRef(wb),
          identity: Hb,
          ordinal: Vb
        })
      }
      has(bb) {
        return this.remembered.has(bb)
      }
      recall(bb, wb) {
        var Mb, eb;
        const Hb = this.remembered.get(bb);
        if (!Hb) return null;
        const pb = Hb.element.deref();
        if (pb && wb.includes(pb)) return pb;
        if (null === Hb.identity) return null;
        const Vb = this.twins(wb, Hb.identity);
        return null !== (Mb = null !== (eb = Vb[Hb.ordinal]) && void 0 !== eb ? eb : Vb[0]) && void 0 !== Mb ? Mb : null
      }
      twins(bb, wb) {
        return bb.filter((bb => we(bb) === wb))
      }
    }
    var ee = Mb(1350);
    const He = bb => {
        const wb = [];
        let Mb = bb;
        for (; Mb && Mb !== document.body;) {
          const bb = getComputedStyle(Mb).zIndex;
          "auto" !== bb && wb.push(Number(bb) || 0), Mb = Mb.parentElement
        }
        return wb.reverse()
      },
      pe = (bb, wb) => {
        const Mb = ((bb, wb) => {
          const Mb = Math.max(bb.length, wb.length);
          for (let pb = 0; pb < Mb; pb++) {
            var eb, Hb;
            const Mb = (null !== (eb = bb[pb]) && void 0 !== eb ? eb : 0) - (null !== (Hb = wb[pb]) && void 0 !== Hb ? Hb : 0);
            if (0 !== Mb) return Mb
          }
          return 0
        })(He(bb), He(wb));
        if (0 !== Mb) return Mb > 0;
        if (bb.contains(wb)) return !1;
        if (wb.contains(bb)) return !0;
        const eb = bb.compareDocumentPosition(wb);
        return !!(eb & Node.DOCUMENT_POSITION_PRECEDING) || !(eb & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      Ve = (bb, wb) => {
        var Mb;
        return null !== (Mb = pe(bb.root, wb.root)) && void 0 !== Mb ? Mb : bb.order > wb.order
      },
      ge = (bb, wb) => wb.some((wb => !wb.contains(bb) && !bb.contains(wb) && !0 === pe(wb, bb)));
    let le = null,
      Le = null,
      Ie = -1;
    const Oe = () => {
        var bb;
        const wb = null === (bb = document.timeline) || void 0 === bb ? void 0 : bb.currentTime,
          Mb = "number" === typeof wb ? wb : null;
        if (null !== Mb && Mb === Le && Ie === (0, ee.b)()) return le;
        let eb = null;
        const Hb = [],
          pb = [...document.querySelectorAll("[data-pad-covers]")].filter(Tb.m);
        for (const Vb of (0, ee.f)()) {
          const bb = Vb.getRoot(),
            wb = !!bb && (0, Tb.m)(bb) && !ge(bb, pb);
          if (Vb.shown && !wb && Hb.push(Vb), Vb.shown = wb, !bb || !wb) continue;
          const Mb = {
            layer: Vb,
            root: bb,
            order: Vb.order
          };
          eb && !Ve(Mb, eb) || (eb = Mb)
        }
        le = eb, Le = Mb, Ie = (0, ee.b)();
        for (const Vb of Hb)(0, ee.g)(Vb);
        return le
      },
      Ue = () => {
        const bb = Oe();
        return !(null === bb || void 0 === bb || !bb.layer.close) && (bb.layer.close(), Le = null, !0)
      },
      te = () => {
        var bb, wb;
        return null !== (bb = null === (wb = Oe()) || void 0 === wb ? void 0 : wb.root) && void 0 !== bb ? bb : null
      },
      Ce = bb => bb ? {
        ...bb,
        root: te()
      } : null;
    let Ee = null,
      Fe = null,
      Be = (0, Ub.h)().menuNavigation,
      se = null;
    const me = new zb;
    let he = null;
    Lb.k.subscribe(Ub.d, (() => {
      const bb = (0, Ub.h)().menuNavigation;
      bb !== Be && (Be = bb, Ee = null, Fe = null)
    }));
    const ze = () => {
        var bb;
        return null !== (bb = Ee) && void 0 !== bb ? bb : (0, Ub.h)().menuNavigation
      },
      Xe = bb => {
        if (re()) {
          if (se = Ce(bb), "hybrid" === ze()) return me.lock(), void(Fe = Fe ? null : te());
          Ee = "focus" === ze() ? "cursor" : "focus"
        }
      },
      xe = () => {
        const bb = se;
        return se = null, bb
      };
    let je = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const Ke = function(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const Mb = je.root === bb,
          eb = Mb ? je.firstSeenMs : wb,
          Hb = je.has || wb - eb > 1e3;
        return (!Mb || !Hb || wb - je.atMs > 250) && (je = {
          root: bb,
          firstSeenMs: eb,
          atMs: wb,
          has: (0, Tb.k)(bb)
        }), je.has
      },
      re = () => {
        const bb = te();
        return null !== bb && Ke(bb)
      },
      Re = () => {
        const bb = Oe();
        return Fe && (null === bb || void 0 === bb ? void 0 : bb.root) !== Fe && (Fe = null), (bb => {
          let {
            mode: wb,
            hasLayer: Mb,
            hasCandidates: eb,
            hybridCursorEngaged: Hb
          } = bb;
          return Mb ? "cursor" !== wb && eb() ? "hybrid" === wb && Hb ? "cursor" : "focus" : "cursor" : null
        })({
          mode: ze(),
          hasLayer: null !== bb,
          hasCandidates: () => null !== bb && Ke(bb.root),
          hybridCursorEngaged: null !== Fe
        })
      },
      De = () => "hybrid" === ze() && re(),
      ce = "pad-focused";
    var Ye = Mb(5397),
      Ze = Mb(6090);
    const fe = "[data-pad-destructive]",
      Ae = `${fe}, [data-pad-back]`,
      We = bb => ({
        rect: bb.getBoundingClientRect(),
        destructive: bb.matches(fe),
        closes: null !== bb.closest("[data-pad-close-button]"),
        unavailable: bb.matches("[data-pad-unavailable]")
      }),
      Je = bb => {
        let {
          destructive: wb,
          closes: Mb,
          unavailable: eb
        } = bb;
        return wb ? Mb ? 2 : 3 : eb ? 1 : 0
      },
      Se = bb => {
        let wb = -1;
        for (let Mb = 0; Mb < bb.length; Mb++) {
          if (wb < 0) {
            wb = Mb;
            continue
          }
          const eb = bb[Mb],
            Hb = bb[wb];
          Je(eb) === Je(Hb) ? rM(eb.rect, Hb.rect) < 0 && (wb = Mb) : Je(eb) < Je(Hb) && (wb = Mb)
        }
        return wb
      },
      Ne = "[data-pad-tabs]",
      ve = "[data-pad-tab]",
      Qe = (bb, wb) => {
        const Mb = bb.querySelector(`${ve}[data-pad-selected='true']`);
        return Mb && wb.includes(Mb) ? Mb : null
      },
      Ge = (bb, wb) => {
        let Mb = wb;
        for (let eb = wb.parentElement; eb && !eb.contains(bb); eb = eb.parentElement) Mb = eb;
        return Mb
      };
    class qe {
      constructor() {
        this.contentReturn = null
      }
      redirect(bb, wb, Mb, eb) {
        var Hb, pb;
        const Vb = bb.closest(Ne),
          gb = wb.closest(Ne);
        var lb;
        if (gb && gb !== Vb) return Vb || (this.contentReturn = new WeakRef(bb)), null !== (lb = Qe(gb, Mb)) && void 0 !== lb ? lb : wb;
        if (!Vb || gb) return wb;
        const Lb = Ge(bb, wb),
          Ib = null === (Hb = this.contentReturn) || void 0 === Hb ? void 0 : Hb.deref();
        return Ib && Lb.contains(Ib) && Mb.includes(Ib) ? Ib : null !== (pb = this.pickRegionStart(Lb, Rb(wb, "y", eb), Mb)) && void 0 !== pb ? pb : wb
      }
      findTabContent(bb, wb, Mb) {
        const eb = bb.closest(Ne);
        if (!eb || !bb.matches(ve) || eb.contains(wb)) return null;
        const Hb = wb.closest(Ne);
        if (Hb && Number(Hb.dataset.padTabs) <= Number(eb.dataset.padTabs)) return null;
        const pb = Ge(bb, wb);
        return Mb.some((bb => pb.contains(bb) && !bb.closest(Ae))) || !wb.closest(Ae) ? pb : null
      }
      pickContentStart(bb, wb, Mb) {
        return this.contentReturn = null, this.pickRegionStart(bb, Rb(bb, "y", Mb), wb)
      }
      pickReplacedContentStart(bb, wb, Mb, eb) {
        if (!wb.contains(bb)) return null;
        const Hb = Ge(wb, bb),
          pb = Mb.filter((bb => wb.contains(bb) && !Hb.contains(bb) && !bb.closest(Ae)));
        return 0 === pb.length ? null : (this.contentReturn = null, this.pickRegionStart(wb, Rb(pb[0], "y", eb), pb))
      }
      backToStrip(bb, wb, Mb) {
        if (bb.closest(Ne)) return null;
        const eb = SM(Mb);
        for (const Hb of Mb.querySelectorAll(Ne)) {
          if (Number(Hb.dataset.padTabs) <= 1 || Hb === eb) continue;
          const pb = Qe(Hb, wb),
            Vb = pb ? Ge(bb, Hb).parentElement : null;
          if (pb && Vb && Vb !== Mb && Mb.contains(Vb)) return this.contentReturn = new WeakRef(bb), pb
        }
        return null
      }
      pickRegionStart(bb, wb, Mb) {
        const eb = Ab(wb),
          Hb = bb => {
            const wb = Mb.filter((wb => bb.contains(wb) && !wb.closest(Ne) && Wb(wb.getBoundingClientRect(), eb))),
              Hb = Se(wb.map(We));
            return Hb >= 0 ? wb[Hb] : null
          };
        for (const pb of (0, Tb.g)(bb)) {
          const bb = Hb(pb);
          if (bb) return bb
        }
        for (const pb of bb.querySelectorAll(Ne)) {
          const bb = Qe(pb, Mb);
          if (bb) return bb
        }
        return Hb(bb)
      }
    }
    const ae = "[data-pad-default-focus], .Dropdown-option.is-selected",
      ie = ".Dropdown-root.is-open > .Dropdown-menu",
      ue = "[data-pad-no-step-in]",
      de = "[data-pad-tabs]",
      Pe = "[data-pad-press-area]",
      ne = bb => {
        let wb = bb;
        for (let Mb = 0; wb && Mb <= 4; Mb++, wb = wb.parentElement) {
          const Mb = wb.querySelector(".CircleInfo");
          if (Mb) return wb === bb || wb.querySelectorAll(Tb.d).length <= 1 ? Mb : null;
          if (wb !== bb && wb.querySelectorAll(Tb.d).length > 1) return null
        }
        return null
      },
      ye = (bb, wb, Mb) => {
        (0, ib.n)(bb, wb, Mb);
        const eb = null !== bb && void 0 !== bb && bb.isConnected ? ne(bb) : null,
          Hb = ne(wb);
        eb !== Hb && (0, ib.n)(eb, Hb, Hb ? (0, ib.y)(Hb) : Mb, {
          leaveBelow: bb,
          enterBelow: wb
        })
      },
      oe = bb => bb.getBoundingClientRect(),
      Te = (bb, wb, Mb) => {
        const eb = new Set(Mb);
        for (let Hb = bb; Hb; Hb = Hb === wb ? null : Hb.parentElement)
          if (eb.has(Hb)) return Hb;
        return null
      },
      ke = (bb, wb) => !bb.root || bb.root === wb || wb.matches(ie) && bb.root.contains(wb);
    const bH = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new Me, this.tabStripNav = new qe, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, Eb.d)(Cb.w), this.dpadRepeats = new Map(Cb.E.map((bb => [bb, (0, Eb.d)(Cb.F)]))), this.stickRepeat = new Cb.e((0, Eb.d)(Cb.hb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const bb = Ob.d.register({
            name: "focus",
            isActive: () => (0, tb.n)() && "focus" === Re(),
            onFrame: bb => {
              this.onFrame(bb)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: bb => (0, Ob.h)(bb) || bb === (0, Ib.h)("menuConfirm") && (0, ib.K)((0, tb.d)())
          }),
          wb = (0, ee.h)((bb => {
            const wb = (0, ee.n)(bb);
            null === bb.memoryKey && this.memory.forget(wb), wb === this.layerKey && (this.layerKey = null)
          }));
        let Mb = -1 / 0;
        const eb = Vb.e.onFrame((bb => {
            (0, tb.n)() || bb.timestampMs - Mb < 100 || (Mb = bb.timestampMs, Oe())
          })),
          Hb = bb => {
            bb.isTrusted && bb.target instanceof Element && Vb.e.getActivePad() && this.noteChosenStop(bb.target)
          };
        return document.addEventListener("click", Hb, !0), () => {
          bb(), wb(), eb(), document.removeEventListener("click", Hb, !0), this.deactivate()
        }
      }
      noteChosenStop(bb) {
        var wb, Mb;
        const eb = Oe();
        if (!eb || !eb.root.contains(bb)) return;
        const Hb = null !== (wb = null === (Mb = bb.closest(".Dropdown-root")) || void 0 === Mb ? void 0 : Mb.querySelector(".Dropdown-control")) && void 0 !== wb ? wb : bb,
          pb = Te(Hb, eb.root, this.getEnabledCandidates(eb.root));
        if (!pb) return;
        const Vb = (0, ee.n)(eb.layer);
        Vb === this.layerKey && eb.root === this.layerRoot || this.beginLayer(eb, Vb), this.wasActive ? this.setFocus(pb, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = pb, this.lastFocusedCentre = (0, ib.y)(pb), this.rememberFocus(pb), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      notify() {
        for (const bb of this.listeners) bb()
      }
      deactivate() {
        var bb;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const bb of this.dpadRepeats.values()) bb.reset();
          this.stickRepeat.reset(), null !== (bb = this.focused) && void 0 !== bb && bb.isConnected && ye(this.focused, null, (0, ib.y)(this.focused)), this.notify()
        }
      }
      setFocus(bb) {
        var wb;
        let {
          scroll: Mb = !0,
          byUser: eb = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (eb && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), bb === this.focused) return;
        const Hb = null !== (wb = this.focused) && void 0 !== wb && wb.isConnected ? this.focused : null;
        if (this.focused = bb, bb) {
          Mb && (bb.classList.add(ce), bb.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), eb && ((bb, wb) => {
            const Mb = wb.closest("[data-pad-friends-column]");
            Mb && bb && !Mb.contains(bb) && (aM = new WeakRef(bb))
          })(Hb, bb);
          const wb = (0, ib.y)(bb);
          this.lastFocusedCentre = wb, this.movedInLayer && this.rememberFocus(bb), ye(Hb, bb, wb), "false" === bb.getAttribute("aria-pressed") && bb.closest("[data-pad-select-on-focus]") && (0, ib.c)(bb)
        } else Hb && ye(Hb, null, (0, ib.y)(Hb));
        this.notify()
      }
      rememberFocus(bb) {
        const wb = this.layerRoot;
        this.layerKey && wb && this.memory.remember(this.layerKey, bb, wb, (() => this.getEnabledCandidates(wb)))
      }
      noteCursorActivation(bb) {
        const wb = Oe();
        if (!wb || !wb.root.contains(bb)) return;
        const Mb = this.getEnabledCandidates(wb.root),
          eb = new Set(Mb);
        let Hb = bb;
        for (; Hb && !eb.has(Hb);) Hb = Hb === wb.root ? null : Hb.parentElement;
        if (!(Hb instanceof HTMLElement)) return;
        const pb = (0, ee.n)(wb.layer);
        this.memory.enter(pb), this.memory.remember(pb, Hb, wb.root, (() => Mb))
      }
      notePageEnteredByCursor(bb) {
        return this.memory.enter(bb)
      }
      recallStop(bb, wb) {
        return this.findRemembered(bb, wb)
      }
      focusWhenFound(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: bb,
          untilMs: performance.now() + wb,
          holdWhile: Mb
        }
      }
      getEnabledCandidates(bb) {
        return (0, Tb.f)(bb).filter((bb => !(0, Tb.u)(bb)))
      }
      onFrame(bb) {
        var wb;
        const Mb = Oe();
        if (!Mb) return;
        const eb = null !== (wb = this.findOpenDropdown(Mb)) && void 0 !== wb ? wb : Mb,
          Hb = performance.now(),
          pb = (0, ee.n)(eb.layer);
        if (pb !== this.layerKey || eb.root !== this.layerRoot) {
          const wb = this.focused;
          if (null !== this.layerKey && eb.root === this.layerRoot && wb && (0, Tb.q)(wb, eb.root)) this.continueLayer(pb, wb), this.wasActive || this.resume(eb.root, Hb);
          else {
            const wb = !this.wasActive && !bb.wokeDevice,
              Vb = "death" === this.layerKind || wb,
              gb = this.enterLayer(eb, pb);
            "popup" !== eb.layer.kind || eb !== Mb || gb ? "menu" === eb.layer.kind && Vb && "inGame" === lb.c.get("gameState") && !(0, gM.e)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = Hb + Ye.e) : (this.pressGuardExtends = wb, this.pressGuardUntilMs = Hb + (wb ? Ye.e : Vb ? 500 : 250))
          }
        } else this.wasActive || this.resume(eb.root, Hb);
        if (this.layerKind = eb.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), bb.wokeDevice && this.focusPointedStop(eb.root), this.validateFocus(eb, Hb), Hb < this.pressGuardUntilMs && this.pressGuardExtends && (bb.wasPressed((0, Ib.h)("menuConfirm")) || bb.wasPressed((0, Ib.h)("menuBack"))) && (this.pressGuardUntilMs = Hb + Ye.e), Hb >= this.pressGuardUntilMs && this.handleButtons(bb, eb)) return;
        const Vb = "hybrid" === ze();
        if (Vb && (bb => {
            const wb = te();
            return wb !== he && (he = wb, me.lock()), me.update(bb, (0, Ub.h)().moveDeadzone)
          })(bb.leftStick)) return gb = this.getHandoff(), se = Ce(gb), Fe = te(), void Ob.d.handOffHeldInput();
        var gb;
        this.handleDirections(bb, eb, Hb, !Vb), this.handleScroll(bb, eb)
      }
      findOpenDropdown(bb) {
        const wb = bb.root.querySelector(ie);
        if (!wb || !(0, Tb.m)(wb)) return null;
        let Mb = this.dropdownLayers.get(wb);
        return Mb || (this.dropdownLayerCounter++, Mb = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: bb.layer.kind,
          getRoot: () => wb,
          close: () => {
            (0, ib.i)(wb)
          },
          memoryKey: null
        }, this.dropdownLayers.set(wb, Mb)), {
          layer: Mb,
          root: wb,
          order: bb.order
        }
      }
      focusPointedStop(bb) {
        const wb = (0, tb.d)(),
          Mb = wb ? document.elementFromPoint(wb.x, wb.y) : null;
        if (!Mb || !bb.contains(Mb)) return;
        const eb = Te(Mb, bb, this.getEnabledCandidates(bb));
        eb && this.setFocus(eb, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(bb, wb) {
        const Mb = this.beginLayer(bb, wb),
          eb = xe();
        return eb && ke(eb, bb.root) ? (this.takeOver(bb.root, eb, this.enteredLayerAtMs), Mb) : (this.restoreLayerFocus(bb.root, Mb), Mb)
      }
      beginLayer(bb, wb) {
        return this.layerKey = wb, this.layerRoot = bb.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(wb)
      }
      restoreLayerFocus(bb, wb) {
        const Mb = wb && this.layerKey ? this.findRemembered(bb, this.layerKey) : null;
        this.restoredFromMemory = null !== Mb, this.setFocus(null !== Mb && void 0 !== Mb ? Mb : this.pickInitial(bb, {
          waitForContent: !0
        }))
      }
      continueLayer(bb, wb) {
        this.layerKey = bb;
        const Mb = this.memory.enter(bb);
        this.restoreOnFocusLoss = Mb, this.movedInLayer && !Mb && this.rememberFocus(wb)
      }
      resume(bb, wb) {
        var Mb;
        const eb = xe();
        eb && ke(eb, bb) ? this.takeOver(bb, eb, wb) : null !== (Mb = this.focused) && void 0 !== Mb && Mb.isConnected && ye(null, this.focused, (0, ib.y)(this.focused))
      }
      pickPreferred(bb) {
        var wb;
        return null !== (wb = this.layerKey ? this.findRemembered(bb, this.layerKey) : null) && void 0 !== wb ? wb : this.pickInitial(bb, {
          waitForContent: !0
        })
      }
      findRemembered(bb, wb) {
        return this.memory.has(wb) ? this.memory.recall(wb, this.getEnabledCandidates(bb)) : null
      }
      getHandoff() {
        var bb, wb, Mb;
        const eb = null !== (bb = this.focused) && void 0 !== bb && bb.isConnected ? this.focused : null,
          Hb = null !== (wb = this.layerRoot) && void 0 !== wb && wb.isConnected ? this.layerRoot : null;
        return {
          point: eb ? (0, ib.y)(eb) : null !== (Mb = this.lastFocusedCentre) && void 0 !== Mb ? Mb : this.getLayerStartPoint(Hb),
          element: eb,
          direction: null
        }
      }
      getLayerStartPoint(bb) {
        if (!bb) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const wb = this.pickInitial(bb, {
          includeDisabled: !0
        });
        return (0, ib.y)(null !== wb && void 0 !== wb ? wb : bb)
      }
      takeOver(bb, wb, Mb) {
        const {
          element: eb,
          direction: Hb,
          point: pb
        } = wb, Vb = eb instanceof HTMLElement && (0, Tb.q)(eb, bb) ? eb : null;
        if (!Hb) {
          const wb = this.focused;
          return Vb ? this.setFocus(Vb, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(bb, pb), void(this.focused && this.focused === wb && this.focused.isConnected && ye(null, this.focused, (0, ib.y)(this.focused)))
        }
        if (this.dpadRepeats.get(Hb).update(!0, Mb), Vb) return this.setFocus(Vb, {
          scroll: !1,
          byUser: !0
        }), void this.move(bb, Hb, Mb, !0);
        const gb = this.getEnabledCandidates(bb),
          lb = gb.map(oe),
          Lb = hM(new DOMRect(pb.x, pb.y, 0, 0), lb, Hb),
          Ib = Lb >= 0 ? Lb : KM(pb, lb);
        this.setFocus(Ib >= 0 ? gb[Ib] : this.pickInitial(bb), {
          byUser: !0
        })
      }
      focusNearest(bb, wb) {
        const Mb = this.getEnabledCandidates(bb),
          eb = KM(wb, Mb.map(oe));
        this.setFocus(eb >= 0 ? Mb[eb] : this.pickInitial(bb), {
          byUser: !0
        })
      }
      pickDefault(bb) {
        let {
          includeDisabled: wb = !1,
          exclude: Mb = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const eb = [...bb.querySelectorAll(ae)].filter((eb => (null === Mb || void 0 === Mb || !Mb.has(eb)) && (wb ? (0, Tb.y)(eb, bb) : (0, Tb.q)(eb, bb)))),
          Hb = Se(eb.map(We));
        return Hb >= 0 ? eb[Hb] : null
      }
      pickNewAreaStart(bb, wb) {
        const Mb = [...bb.querySelectorAll(Pe)].filter(Tb.m);
        for (const eb of [...(0, Tb.g)(bb), ...Mb]) {
          if (wb.has(eb)) continue;
          const bb = this.getEnabledCandidates(eb),
            Mb = Se(bb.map(We));
          if (Mb >= 0) return bb[Mb]
        }
        return null
      }
      pickInitial(bb) {
        let {
          includeDisabled: wb = !1,
          waitForContent: Mb = !1,
          enteredAtMs: eb = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Hb = this.pickDefault(bb, {
          includeDisabled: wb
        });
        if (Hb) return Hb;
        const pb = bb => wb ? (0, Tb.f)(bb) : this.getEnabledCandidates(bb);
        let Vb = [];
        for (const Ub of (0, Tb.g)(bb))
          if (Vb = pb(Ub), Vb.length > 0) break;
        if (0 === Vb.length) {
          if (Mb && performance.now() - eb < 1e4 && (0, Tb.l)(bb)) return null;
          Vb = pb(bb)
        }
        const gb = Vb.map(oe),
          lb = Ab(null),
          Lb = Vb.filter(((bb, wb) => Wb(gb[wb], lb))),
          Ib = Lb.length > 0 ? Lb : Vb,
          Ob = Se(Ib.map(We));
        return Ob >= 0 ? Ib[Ob] : null
      }
      validateFocus(bb, wb) {
        if (this.pendingFocus) {
          var Mb, eb;
          const Hb = this.pendingFocus.find();
          if (Hb && (0, Tb.q)(Hb, bb.root)) return this.pendingFocus = null, void this.setFocus(Hb, {
            byUser: !0
          });
          wb > this.pendingFocus.untilMs && (null === (Mb = (eb = this.pendingFocus).holdWhile) || void 0 === Mb || !Mb.call(eb)) && (this.pendingFocus = null)
        }
        const Hb = this.focused,
          pb = !!Hb && (0, Tb.q)(Hb, bb.root);
        if (!(!pb && Hb && Hb === this.lastActivated && wb - this.lastActivatedAtMs < 5e3 && bb.root.contains(Hb) && (0, Tb.m)(Hb) && (0, Tb.u)(Hb))) {
          if (!pb && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = wb, void this.restoreLayerFocus(bb.root, !0);
          if ((!pb || !this.movedInLayer && !this.scrolledInLayer) && !(wb - this.lastRefocusCheckMs < (pb ? 200 : 50)))
            if (this.lastRefocusCheckMs = wb, pb) {
              const Mb = wb - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(bb.root) : null,
                eb = null !== Mb && void 0 !== Mb ? Mb : this.restoredFromMemory ? null : this.pickDefault(bb.root);
              eb && eb !== Hb && this.setFocus(eb)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const wb = this.pendingFocus;
                return this.focusNearest(bb.root, this.lastFocusedCentre), void(this.pendingFocus = wb)
              }
              this.setFocus(this.pickPreferred(bb.root))
            }
        }
      }
      handleButtons(bb, wb) {
        if (bb.wasPressed((0, Ib.h)("menuToggleCursor"))) return Xe(this.getHandoff()), !0;
        if (bb.wasPressed((0, Ib.h)("menuBack"))) {
          const bb = (0, ib.i)(wb.root);
          return bb ? this.setFocus(bb, {
            byUser: !0
          }) : iM(this, wb.root) || ((0, ib.e)(wb.root) ? this.returnToOpener(wb.root) : this.backToStrip(wb.root) || Ue()), !0
        }
        const Mb = (0, Ib.h)("menuConfirm");
        var eb, Hb;
        bb.wasPressed(Mb) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (eb = null === (Hb = this.focused) || void 0 === Hb ? void 0 : Hb.getAttribute("data-pad-repeat")) && void 0 !== eb ? eb : null, this.confirmRepeated = bb.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (bb.wasReleased(Mb)) {
          const bb = this.confirmPressedOn;
          if (this.confirmPressedOn = null, bb && !this.confirmRepeated && bb === this.focused && bb.isConnected && !(0, Tb.u)(bb)) {
            const Mb = bb.matches("[data-pad-tab]") ? bb.closest(de) : null;
            Mb ? this.enterTab(bb, Mb, wb.root, performance.now()) : this.activate(bb)
          }
          return !0
        }
        return this.repeatConfirm(bb, Mb), be(this, bb, wb)
      }
      repeatConfirm(bb, wb) {
        const Mb = this.confirmPressedOn;
        Mb && null !== this.confirmRepeatKey && bb.isHeld(wb) && (Mb === this.focused && Mb.isConnected && !(0, Tb.u)(Mb) && Mb.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? Mb.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(Mb)) : this.confirmRepeatKey = null)
      }
      backToStrip(bb) {
        const wb = this.focused;
        if (!(0, Ub.h)().menuBackToCategories) return !1;
        const Mb = null !== wb && void 0 !== wb && wb.isConnected ? this.tabStripNav.backToStrip(wb, this.getEnabledCandidates(bb), bb) : null;
        return Mb && this.setFocus(Mb, {
          byUser: !0
        }), null !== Mb
      }
      returnToOpener(bb) {
        const wb = this.lastActivatedKey;
        wb && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var Mb;
          return null !== (Mb = this.getEnabledCandidates(bb).find((bb => (0, ib.C)(bb) === wb))) && void 0 !== Mb ? Mb : null
        })))
      }
      activate(bb) {
        var wb;
        if ((0, Ze.e)(bb) || (0, ib.G)(bb)) return;
        this.lastActivatedKey = null !== (wb = (0, ib.C)(bb)) && void 0 !== wb ? wb : this.lastActivatedKey, this.lastActivated = bb, this.lastActivatedAtMs = performance.now(), this.rememberFocus(bb);
        const Mb = this.layerRoot;
        if (Mb) {
          const wb = new Set(Mb.querySelectorAll(ae)),
            eb = new Set(Mb.querySelectorAll(`[data-pad-initial-area], ${Pe}`)),
            Hb = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var Hb;
            return (0, Tb.q)(bb, Mb) ? null : null !== (Hb = this.pickDefault(Mb, {
              exclude: wb
            })) && void 0 !== Hb ? Hb : this.pickNewAreaStart(Mb, eb)
          }), 5e3, (() => bb.isConnected && (0, Tb.u)(bb) && performance.now() - Hb < 6e4))
        }(0, ib.c)(bb), (0, ib.h)(bb)
      }
      handleDirections(bb, wb, Mb, eb) {
        const Hb = ZM(wb.layer.kind) ? (0, Ib.h)("chat") : null;
        for (const gb of Cb.E) {
          this.dpadRepeats.get(gb).update(bb.isHeld(gb), Mb) && (gb !== Hb || bb.wasPressed(gb)) && this.move(wb.root, gb, Mb, !0)
        }
        const pb = eb ? (0, Cb.m)(bb.leftStick, (0, Ub.h)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          Vb = this.stickRepeat.update((0, Cb.kb)(pb), Mb);
        if (Vb && this.move(wb.root, Vb, Mb, !0), this.retryMove && Mb >= this.retryMove.atMs) {
          const {
            direction: bb
          } = this.retryMove;
          this.retryMove = null, this.move(wb.root, bb, Mb, !1)
        }
      }
      move(bb, wb, Mb, eb) {
        var Hb;
        let pb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (Hb = this.tabOpenWait) || void 0 === Hb ? void 0 : Hb.wait) && wb === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const Vb = this.focused;
        if (!Vb || !Vb.isConnected) {
          const wb = this.pickInitial(bb);
          return void(wb && this.setFocus(wb, {
            byUser: !0
          }))
        }
        const gb = "Left" === wb || "Right" === wb,
          lb = gb ? (0, Ze.e)(Vb) : null;
        if (lb) return void lb.adjust("Left" === wb ? -1 : 1);
        const Lb = bb => null !== bb.closest("[data-pad-friends-column]"),
          Ib = Lb(Vb),
          Ob = oe(Vb),
          Ub = gb || Vb.closest(de) ? null : (bb => {
            const wb = new Map;
            return Mb => {
              const eb = Mb.closest(de);
              if (!eb) return !1;
              let Hb = wb.get(eb);
              if (void 0 === Hb) {
                const Mb = oe(eb);
                Hb = mM(bb, Mb) && (Mb.right <= bb.left || Mb.left >= bb.right), wb.set(eb, Hb)
              }
              return Hb
            }
          })(Ob),
          tb = null !== Vb.closest(ue),
          Cb = this.getEnabledCandidates(bb).filter((bb => bb !== Vb && (gb || Lb(bb) === Ib) && !(null !== Ub && void 0 !== Ub && Ub(bb)) && (tb || !bb.closest(ue)))),
          Eb = Cb.map(oe),
          Fb = Rb(Vb, "y", bb),
          Bb = Ab(Fb);
        if (!pb && !Wb(Ob, Bb)) {
          const bb = Cb.filter(((bb, wb) => Wb(Eb[wb], Bb)));
          if (bb.length > 0) {
            const wb = {
              x: Bb.left + Bb.width / 2,
              y: Bb.top + Bb.height / 2
            };
            return void this.setFocus(bb[KM(wb, bb.map(oe))], {
              byUser: !0
            })
          }
        }
        const sb = gb ? ((bb, wb, Mb) => {
            const eb = oe(bb),
              Hb = bb.closest(de),
              pb = Hb ? oe(Hb) : null;
            return wb.map(((wb, Vb) => {
              const gb = Mb[Vb];
              if (gb.bottom > eb.top && gb.top < eb.bottom) return !0;
              const lb = wb.closest(de);
              if (Hb && pb) return lb !== Hb && (null !== lb || gb.bottom <= pb.top || gb.top >= pb.bottom);
              if (lb) return !mM(eb, oe(lb));
              let Lb = bb;
              for (let Mb = bb.parentElement; Mb && !Mb.contains(wb); Mb = Mb.parentElement) Lb = Mb;
              const Ib = oe(Lb);
              return gb.right > Ib.left && gb.left < Ib.right
            }))
          })(Vb, Cb, Eb) : void 0,
          mb = gb && !Vb.closest(de) ? (bb => bb.map((bb => !bb.closest(Ae))))(Cb) : void 0,
          hb = ((bb, wb) => {
            const Mb = [];
            for (let Hb = bb; Hb; Hb = Hb.parentElement) Mb.push(Hb);
            const eb = new Map;
            return Mb.forEach(((bb, wb) => {
              eb.set(bb, Mb.length - 1 - wb)
            })), wb.map((bb => {
              for (let wb = bb; wb; wb = wb.parentElement) {
                const bb = eb.get(wb);
                if (void 0 !== bb) return bb
              }
              return -1
            }))
          })(Vb, Cb),
          zb = gb ? "x" : "y",
          Xb = Rb(Vb, zb, bb);
        let xb = hM(Ob, Eb, wb, hb, sb, mb);
        if (xb >= 0 && Xb && !Xb.contains(Cb[xb])) {
          const bb = Cb.flatMap(((bb, wb) => Xb.contains(bb) ? [wb] : [])),
            Mb = wb => wb && bb.map((bb => wb[bb])),
            eb = hM(Ob, bb.map((bb => Eb[bb])), wb, bb.map((bb => hb[bb])), Mb(sb), Mb(mb));
          xb = eb >= 0 ? bb[eb] : xb
        }
        if (xb >= 0) return void this.moveTo(Vb, Cb[xb], Cb, bb, wb, pb);
        if (!eb) return;
        const jb = "Right" === wb || "Down" === wb ? 1 : -1;
        if (Xb && Zb(Xb, zb, jb)) {
          const bb = "y" === zb ? Xb.clientHeight : Xb.clientWidth;
          fb(Xb, zb, jb * bb * .5), this.retryMove = {
            direction: wb,
            atMs: Mb + 80
          }
        }
      }
      moveTo(bb, wb, Mb, eb, Hb, pb) {
        const Vb = this.tabStripNav.findTabContent(bb, wb, Mb);
        Vb && "true" !== bb.dataset.padSelected ? this.openTab(bb, Vb, eb, Hb) : pb && !Vb || this.setFocus(this.tabStripNav.redirect(bb, wb, Mb, eb), {
          byUser: !0
        })
      }
      openTab(bb, wb, Mb, eb) {
        const Hb = wb.parentElement;
        (0, ib.c)(bb), this.focusWhenFound((() => "true" !== bb.dataset.padSelected ? null : wb.isConnected ? this.tabStripNav.pickContentStart(wb, this.getEnabledCandidates(Mb), Mb) : Hb ? this.tabStripNav.pickReplacedContentStart(bb, Hb, this.getEnabledCandidates(Mb), Mb) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: eb
        }
      }
      enterTab(bb, wb, Mb, eb) {
        this.move(Mb, (bb => {
          const wb = [...bb.querySelectorAll(ve)].filter((wb => wb.closest(Ne) === bb));
          if (wb.length >= 2) {
            const bb = wb[0].getBoundingClientRect(),
              Mb = wb[1].getBoundingClientRect();
            return Math.abs(Mb.top - bb.top) > Math.abs(Mb.left - bb.left) ? "Right" : "Down"
          }
          const Mb = bb.getBoundingClientRect();
          return Mb.height > Mb.width ? "Right" : "Down"
        })(wb), eb, !1, !0), this.focused !== bb || this.pendingFocus || this.activate(bb)
      }
      handleScroll(bb, wb) {
        const Mb = (0, Cb.m)(bb.rightStick, .2);
        if (0 === Mb.x && 0 === Mb.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const eb = bb.dtMs / 1e3;
        for (const pb of ["x", "y"]) {
          var Hb;
          const bb = Mb[pb];
          if (0 === bb) continue;
          const Vb = null !== (Hb = Rb(this.focused, pb, wb.root)) && void 0 !== Hb ? Hb : cb(wb.root, pb);
          if (!Vb) continue;
          const gb = Math.sign(bb) * bb * bb * 1500 * eb + this.scrollRemainder[pb],
            lb = Math.trunc(gb);
          this.scrollRemainder[pb] = gb - lb, 0 !== lb && (fb(Vb, pb, lb), this.scrolledInLayer = !0)
        }
      }
    };
    var wH = Mb(9568);
    var MH = Mb(10075);
    const eH = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      HH = {
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
          ...eH,
          minIntervalMs: 1e3
        },
        preview: {
          ...eH,
          minIntervalMs: 0
        }
      };
    const pH = new class {
        constructor(bb) {
          this.deps = bb, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = bb => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", bb))
          }
        }
        play(bb, wb) {
          const Mb = HH[bb];
          if (!this.deps.isVibrationOn() || Mb.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const eb = this.lastPlayedMs[bb];
          if (void 0 !== eb && wb - eb < Mb.minIntervalMs) return !1;
          const Hb = this.deps.getActuator();
          if (!Hb) return !1;
          this.lastPlayedMs[bb] = wb;
          const {
            duration: pb,
            strongMagnitude: Vb,
            weakMagnitude: gb
          } = Mb;
          try {
            Hb.playEffect("dual-rumble", {
              duration: pb,
              strongMagnitude: Vb,
              weakMagnitude: gb
            }).catch(this.logFailure)
          } catch (lb) {
            this.logFailure(lb)
          }
          return !0
        }
      }({
        getActuator: () => (bb => {
          const wb = null === bb || void 0 === bb ? void 0 : bb.vibrationActuator;
          return "function" === typeof(null === wb || void 0 === wb ? void 0 : wb.playEffect) ? wb : null
        })(Vb.e.getActiveGamepad()),
        isVibrationOn: () => (0, Ub.h)().vibration,
        isPadInUse: tb.n
      }),
      VH = bb => {
        pH.play(bb, performance.now())
      };
    var gH = Mb(9573),
      lH = Mb(4155),
      LH = Mb(126),
      IH = Mb(43),
      OH = Mb(715);
    class UH {
      constructor(bb) {
        this.deps = bb
      }
      check() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const wb = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!wb) return "skipped";
        const Mb = bb ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === Mb || this.deps.readReportedVisitId() === Mb ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(Mb), this.deps.bO(wb, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const tH = "controllerUsageReportedVisit";
    var CH = Mb(1504),
      EH = Mb(1965),
      FH = Mb(698),
      BH = Mb(1611),
      sH = Mb(1321);
    const mH = bb => ({
        translationKey: `controller:${bb}`
      }),
      hH = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: mH("padButtonView"),
        Menu: mH("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: mH("padButtonDpadUp"),
        Down: mH("padButtonDpadDown"),
        Left: mH("padButtonDpadLeft"),
        Right: mH("padButtonDpadRight"),
        Home: mH("padButtonHome"),
        LeftStick: mH("padButtonLeftStick"),
        RightStick: mH("padButtonRightStick")
      },
      zH = {
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
          View: mH("padButtonCreate"),
          Menu: mH("padButtonOptions")
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
      XH = (bb, wb) => {
        var Mb;
        const eb = null !== (Mb = zH[bb][wb]) && void 0 !== Mb ? Mb : hH[wb];
        return "string" === typeof eb ? eb : (0, Hb.x)(sH.g.get().getCurrentLanguageCode(), eb.translationKey)
      },
      xH = bb => {
        let {
          glyph: wb,
          family: Mb,
          className: eb
        } = bb;
        const Hb = (0, tb.I)(),
          pb = null !== Mb && void 0 !== Mb ? Mb : Hb,
          Vb = (0, gH.d)(pb, wb);
        return (0, vb.jsx)("span", {
          className: Nb()("ControllerGlyph", eb),
          role: "img",
          "aria-label": XH(pb, wb),
          style: {
            "--pad-glyph-mask": `url(${Vb})`,
            "--pad-glyph-aspect": (0, gH.c)(pb, wb)
          }
        })
      };
    var jH = Mb(2116);
    const KH = bb => {
      let {
        action: wb
      } = bb;
      const {
        t: Mb
      } = (0, Hb.C)();
      switch (wb.kind) {
        case "reload":
          return (0, vb.jsx)("span", {
            children: Mb("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, vb.jsx)(jH.d, {
            text: wb.description ? [{
              icon: wb.icon
            }, ` ${wb.description}`] : [{
              icon: wb.icon
            }]
          });
        case "touchButton":
          return (0, vb.jsx)(jH.d, {
            text: wb.label
          })
      }
    };
    var rH = Mb(10077);
    const RH = bb => {
      let {
        hold: wb
      } = bb;
      return (0, vb.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${wb.holdMs}ms`
        },
        children: (0, vb.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, wb.id)
    };
    var DH = Mb(10096),
      cH = Mb(10101),
      YH = Mb(10107),
      ZH = Mb(10091);
    const fH = () => {
        const {
          gameState: bb
        } = (0, lb.o)(["gameState"]), wb = (0, tb.E)(), [eb, Hb] = (0, Jb.useState)(!1), [pb, Vb] = (0, Jb.useState)(!1);
        return (0, Jb.useEffect)((() => {
          "inGame" === bb && Hb(!0)
        }), [bb]), (0, Jb.useEffect)((() => {
          if (!eb) return;
          let bb = null,
            wb = !1;
          return (FH.I ? Promise.all([Mb.e(85), Mb.e(105), Mb.e(307), Mb.e(127), Mb.e(257), Mb.e(255), Mb.e(104)]).then((() => Mb(42214))).then((bb => bb.startWasmPadGameplay)) : Promise.all([Mb.e(85), Mb.e(265), Mb.e(264), Mb.e(113), Mb.e(89), Mb.e(86), Mb.e(87), Mb.e(88), Mb.e(213), Mb.e(261), Mb.e(91), Mb.e(105), Mb.e(253), Mb.e(267), Mb.e(112), Mb.e(124), Mb.e(258), Mb.e(142), Mb.e(241), Mb.e(102), Mb.e(90), Mb.e(251), Mb.e(185), Mb.e(257), Mb.e(123)]).then((() => Mb(42339))).then((bb => bb.startPadGameplay))).then((Mb => {
            wb || (bb = Mb())
          })).catch((bb => {
            console.error("Pad gameplay failed to load", bb), wb || Vb(!0)
          })), () => {
            var Mb;
            wb = !0, null === (Mb = bb) || void 0 === Mb || Mb()
          }
        }), [eb]), (0, Jb.useEffect)((() => {
          pb && wb && (Vb(!1), CH.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((bb => {
            !0 === bb && (0, EH.reloadBloxd)()
          })))
        }), [pb, wb]), (0, vb.jsxs)(vb.Fragment, {
          children: [(0, vb.jsx)(AH, {}), (0, vb.jsx)(WH, {}), (0, vb.jsx)(JH, {})]
        })
      },
      AH = () => {
        const {
          t: bb
        } = (0, Hb.C)(), wb = (0, tb.E)(), {
          gameState: Mb,
          isUiHidden: eb
        } = (0, lb.o)(["gameState", "isUiHidden"]), {
          hideButtonHints: pb
        } = (0, Ub.r)(), Vb = (0, rH.i)(), gb = (0, rH.j)(), [Lb, Ob] = (0, Jb.useState)(YH.d);
        return (0, BH.e)(ZH.q, Ob), !wb || pb || eb || "inGame" !== Mb || !Vb && !Lb ? null : (0, vb.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [Vb && (0, vb.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, vb.jsx)(xH, {
              glyph: (0, Ib.h)("actionButton")
            }), (0, vb.jsx)(KH, {
              action: Vb
            }), gb && (0, vb.jsx)("span", {
              className: "PadActionHintMore",
              children: bb("controller:gameplayActionWheelHint")
            })]
          }), Lb && (0, vb.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, vb.jsx)(xH, {
              glyph: (0, Ib.h)("pickBlock")
            }), (0, vb.jsx)("span", {
              children: bb("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      WH = () => {
        const {
          t: bb
        } = (0, Hb.C)(), wb = (0, tb.E)(), {
          gameState: Mb,
          isUiHidden: eb
        } = (0, lb.o)(["gameState", "isUiHidden"]), [pb, Vb] = (0, Jb.useState)(DH.e);
        return (0, BH.e)(ZH.n, Vb), wb && !eb && "inGame" === Mb && pb ? (0, vb.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, vb.jsx)("span", {
            children: bb("controller:gameplayDropStack")
          }), (0, vb.jsx)(RH, {
            hold: pb
          })]
        }) : null
      },
      JH = () => {
        const {
          t: bb
        } = (0, Hb.C)(), wb = (0, tb.E)(), {
          gameState: Mb,
          isUiHidden: eb
        } = (0, lb.o)(["gameState", "isUiHidden"]), {
          hideButtonHints: pb
        } = (0, Ub.r)(), [Vb, gb] = (0, Jb.useState)(cH.c);
        return (0, BH.e)(ZH.l, gb), wb && !eb && "inGame" === Mb && Vb ? (0, vb.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!pb && (0, vb.jsx)(xH, {
            glyph: (0, Ib.h)("attack")
          }), (0, vb.jsx)("span", {
            children: bb("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var SH = Mb(10109),
      NH = Mb(2167),
      vH = Mb(3503),
      QH = Mb(9553);
    const GH = bb => bb && !(0, SH.c)(NH.c.get("shopInfo")),
      qH = () => {
        const bb = "inGame" === (0, lb.o)(["gameState"]).gameState;
        return (0, vH.h)("shopInfo", (() => {
          (0, QH.l)(GH(bb))
        })), (0, Jb.useEffect)((() => {
          (0, QH.l)(GH(bb))
        }), [bb]), null
      },
      aH = () => {
        const {
          t: bb
        } = (0, Hb.C)(), {
          hideButtonHints: wb
        } = (0, Ub.r)();
        (0, tb.I)();
        const Mb = (0, vw.i)();
        return (0, Jb.useEffect)((() => (() => {
          const bb = Ob.d.register({
              name: "inventory",
              isActive: pM.isActive,
              onFrame: pM.onFrame,
              onDeactivate: pM.onDeactivate,
              wakePressActs: pM.wakePressActs
            }),
            wb = bb => {
              pM.noteRealPointer(bb), pM.shouldBlockRealPointer(bb) && bb.stopPropagation()
            };
          for (const Vb of VM) window.addEventListener(Vb, wb, !0);
          const Mb = (0, ob.h)((() => {
              "inventory" !== Ob.d.getActiveConsumerName() && pM.forgetSurface()
            })),
            eb = bb => {
              const wb = bb.target;
              (0, tb.n)() && (0, Pb.j)(wb) && wb.closest(zw) && (0, ob.f)() && (0, ob.m)(wb)
            };
          document.addEventListener("focusout", eb, !0);
          const {
            invalidate: Hb,
            onScroll: pb
          } = pM.targets;
          return document.addEventListener("scroll", pb, !0), window.addEventListener("resize", Hb), () => {
            bb(), Mb();
            for (const bb of VM) window.removeEventListener(bb, wb, !0);
            document.removeEventListener("scroll", pb, !0), document.removeEventListener("focusout", eb, !0), window.removeEventListener("resize", Hb), pM.targets.disconnect()
          }
        })()), []), (0, vb.jsxs)(vb.Fragment, {
          children: [(0, vb.jsx)(ab, {
            placer: pM.ring,
            className: "InventorySlotCursorRing"
          }), Mb.showing && !wb && (0, vb.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: yb(Mb).map((wb => {
              let {
                actions: eb,
                labelKey: Hb
              } = wb;
              return (0, vb.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [eb.map((bb => (0, vb.jsx)(xH, {
                  glyph: (0, Ib.h)(bb)
                }, bb))), (0, vb.jsx)("span", {
                  children: bb(`controller:${Hb}`)
                }), "inventoryDrop" === Hb && Mb.dropStackHold && (0, vb.jsx)(RH, {
                  hold: Mb.dropStackHold
                })]
              }, Hb)
            }))
          })]
        })
      },
      iH = [{
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
      uH = bb => Array.from(bb).map((bb => ({
        type: "char",
        char: bb,
        width: 1
      }))),
      dH = function(bb) {
        return {
          type: "command",
          command: bb,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      PH = [dH("page", 2), dH("otherPage"), dH("caretLeft"), dH("space", 3), dH("caretRight"), dH("close", 1.5), dH("submit", 1.5)],
      nH = [dH("page", 2), dH("otherPage"), dH("caretLeft"), dH("space", 2), dH("caretRight"), dH("newline"), dH("close", 1.5), dH("submit", 1.5)],
      yH = [
        [...uH("1234567890"), dH("backspace")], uH("qwertyuiop/"), uH("asdfghjkl'?"), [dH("shift", 2), ...uH("zxcvbnm,.")]
      ],
      oH = [
        [...uH("1234567890"), dH("backspace")], uH("!@#$%^&*()/"), uH('-_=+[]{};:"'), uH("~`|\\<>'\u20ac\xa3,.")
      ],
      TH = {
        letters: yH,
        accents: [
          [...uH("1234567890"), dH("backspace")], uH("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), uH("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [dH("shift", 2), ...uH("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: oH
      },
      kH = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      bp = (bb, wb) => "letters" === bb ? wb ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === bb ? "symbols" : "accents"
      },
      wp = function(bb, wb) {
        const Mb = ((bb, wb) => [...TH[bb], wb ? nH : PH])(bb, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === wb) return Mb;
        const eb = Math.min(2, Mp(Mb[0]) / wb);
        return [Array.from({
          length: wb
        }, ((bb, wb) => ({
          type: "phrase",
          phraseIndex: wb,
          width: eb
        }))), ...Mb]
      },
      Mp = bb => bb.reduce(((bb, wb) => bb + wb.width), 0),
      ep = bb => Math.max(...bb.map(Mp)),
      Hp = (bb, wb) => {
        const Mb = bb[wb.row];
        let eb = (ep(bb) - Mp(Mb)) / 2;
        for (let Hb = 0; Hb < wb.col; Hb++) eb += Mb[Hb].width;
        return eb + Mb[wb.col].width / 2
      },
      pp = (bb, wb, Mb) => {
        let eb = 0,
          Hb = 1 / 0;
        for (let pb = 0; pb < bb[wb].length; pb++) {
          const Vb = Math.abs(Hp(bb, {
            row: wb,
            col: pb
          }) - Mb);
          Vb < Hb - 1e-9 && (eb = pb, Hb = Vb)
        }
        return eb
      },
      Vp = (bb, wb) => {
        const Mb = Math.max(0, Math.min(bb.length - 1, wb.row));
        return {
          row: Mb,
          col: Math.max(0, Math.min(bb[Mb].length - 1, wb.col))
        }
      },
      gp = (bb, wb, Mb) => "once" === bb && wb - Mb <= 400 ? "caps" : "off" === bb ? "once" : "off",
      lp = (bb, wb) => "once" === bb && (bb => bb.toLowerCase() !== bb.toUpperCase())(wb) ? "off" : bb,
      Lp = (bb, wb, Mb) => {
        if ("symbols" === wb || "off" === Mb) return bb;
        const eb = bb.toUpperCase();
        return 1 === eb.length ? eb : bb
      };
    var Ip = Mb(9996),
      Op = Mb(10115);
    const Up = {
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
      tp = ["UI", "nameTag"],
      Cp = bb => {
        const wb = bb.target instanceof HTMLTextAreaElement && !tp.includes(bb.kind);
        return wp(bb.page, "chat" === bb.kind ? Op.e.length : 0, wb)
      },
      Ep = bb => {
        const wb = bb.getBoundingClientRect(),
          Mb = window.innerHeight,
          eb = wb.top + wb.height / 2 < Mb / 2 ? "bottom" : "top",
          Hb = "bottom" === eb ? Mb - wb.bottom - 6 : wb.top - 6;
        return {
          placement: eb,
          maxHeightPx: Math.min(.46 * Mb, Math.max(.3 * Mb, Hb))
        }
      },
      Fp = bb => {
        (0, DM.h)(bb) ? (0, DM.d)().close(): (bH.noteChosenStop(bb), bb.blur())
      };
    class Bp {
      constructor(bb) {
        this.host = bb, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(bb, wb) {
        this.phraseTexts = bb, this.phrasesFill = wb
      }
      pressKey(bb) {
        const wb = this.host.getState(),
          Mb = Cp(wb),
          eb = Mb[bb.row][bb.col];
        this.host.setState({
          ...wb,
          focus: bb,
          preferredX: Hp(Mb, bb)
        }), "char" === eb.type ? this.typeChar(eb.char) : "command" === eb.type ? this.runCommand(eb.command) : this.sendPhrase(eb.phraseIndex)
      }
      runCommand(bb) {
        const wb = this.host.getState();
        switch (bb) {
          case "backspace":
            (0, Pb.c)(wb.target);
            break;
          case "space":
            (0, Pb.f)(wb.target, " ");
            break;
          case "newline":
            (0, Pb.f)(wb.target, "\n");
            break;
          case "caretLeft":
            (0, Pb.l)(wb.target, -1);
            break;
          case "caretRight":
            (0, Pb.l)(wb.target, 1);
            break;
          case "shift": {
            const bb = performance.now();
            this.host.setState({
              ...wb,
              shift: gp(wb.shift, bb, this.lastShiftPressMs)
            }), this.lastShiftPressMs = bb;
            break
          }
          case "page":
          case "otherPage": {
            const Mb = bp(wb.page, wb.accentsFirst)[bb];
            this.host.setState({
              ...wb,
              page: Mb,
              focus: Vp(Cp({
                ...wb,
                page: Mb
              }), wb.focus)
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
            (0, DM.h)(wb.target) && (0, DM.d)().selectNextChannel()
        }
      }
      submit() {
        var bb, wb;
        const {
          target: Mb
        } = this.host.getState();
        this.host.hide(), (0, DM.h)(Mb) ? (0, DM.d)().submit() : (bH.noteChosenStop(Mb), null === (bb = (wb = (0, DM.g)(Mb)).submit) || void 0 === bb || bb.call(wb), document.activeElement === Mb && Mb.blur())
      }
      close() {
        const {
          target: bb
        } = this.host.getState();
        this.host.hide(), Fp(bb)
      }
      typeChar(bb) {
        const {
          target: wb,
          page: Mb,
          shift: eb
        } = this.host.getState();
        (0, Pb.f)(wb, Lp(bb, Mb, eb)), this.host.setState({
          ...this.host.getState(),
          shift: lp(eb, bb)
        })
      }
      sendPhrase(bb) {
        if (this.phrasesFill) {
          const {
            target: wb
          } = this.host.getState(), Mb = this.phraseTexts[bb];
          Mb && (wb.setSelectionRange(0, wb.value.length), (0, Pb.f)(wb, Mb))
        } else Op.f.claim(performance.now()) && (this.host.hide(), (0, DM.d)().sendLine(this.phraseTexts[bb]))
      }
    }
    var sp = Mb(10024);
    const mp = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      hp = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class zp {
      constructor(bb, wb) {
        this.host = bb, this.editor = wb, this.lastDirection = null, this.navRepeat = new Cb.e((0, Eb.d)(mp)), this.commandRepeats = new Map(iH.filter((bb => {
          let {
            repeats: wb
          } = bb;
          return wb
        })).map((bb => {
          let {
            command: wb
          } = bb;
          return [wb, (0, Eb.d)(hp)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const bb of this.commandRepeats.values()) bb.reset()
      }
      onVisibleFrame(bb) {
        const wb = performance.now();
        for (const {
            command: Hb,
            action: pb
          }
          of iH) {
          const Mb = (0, Ib.h)(pb),
            eb = this.commandRepeats.get(Hb);
          if ((eb ? eb.update(bb.isHeld(Mb), wb) : bb.wasPressed(Mb)) && (this.editor.runCommand(Hb), !this.host.getState().visible)) return
        }
        if (bb.wasPressed((0, Ib.h)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const Mb = this.readNavDirection(bb);
        this.lastDirection = Mb;
        const eb = this.navRepeat.update(Mb, wb);
        eb && this.navigate(eb)
      }
      onHiddenFrame(bb, wb) {
        var Mb;
        if (bb.wasPressed((0, Ib.h)("keyboardClose"))) return void Fp(wb);
        const eb = (0, Ib.h)("keyboardType");
        if (bb.wasPressed(eb)) return Ob.d.consumeButton(eb), void this.host.open(wb);
        const Hb = this.readNavDirection(bb),
          pb = null !== Hb && Hb !== this.lastDirection;
        if (this.lastDirection = Hb, !pb || (0, DM.h)(wb)) return;
        const Vb = (null === (Mb = Oe()) || void 0 === Mb ? void 0 : Mb.root.contains(wb)) || null !== wb.closest(".EntireInventoryWrapper");
        Fp(wb), Vb && Ob.d.handOffHeldInput()
      }
      navigate(bb) {
        const wb = this.host.getState();
        if ("Up" === bb && 0 === wb.focus.row && "chat" === wb.kind) return (0, DM.d)().stepHistory(), void this.host.setState({
          ...wb
        });
        const Mb = ((bb, wb, Mb, eb) => {
          if ("Left" === Mb || "Right" === Mb) {
            const eb = bb[wb.row].length,
              Hb = (wb.col + ("Right" === Mb ? 1 : -1) + eb) % eb,
              pb = {
                row: wb.row,
                col: Hb
              };
            return {
              pos: pb,
              preferredX: Hp(bb, pb)
            }
          }
          const Hb = (wb.row + ("Down" === Mb ? 1 : -1) + bb.length) % bb.length;
          return {
            pos: {
              row: Hb,
              col: pp(bb, Hb, eb)
            },
            preferredX: eb
          }
        })(Cp(wb), wb.focus, bb, wb.preferredX);
        this.host.setState({
          ...wb,
          focus: Mb.pos,
          preferredX: Mb.preferredX
        })
      }
      readNavDirection(bb) {
        for (const wb of Cb.E)
          if (bb.isHeld(wb)) return wb;
        return (0, Cb.kb)((0, Cb.m)(bb.leftStick, (0, Ub.h)().moveDeadzone))
      }
    }
    const Xp = ["Up", "Down", "Left", "Right"],
      xp = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const jp = new class {
      constructor() {
        this.state = Up, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new Bp(this), this.padInput = new zp(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(bb) {
        const wb = bb.visible !== this.state.visible;
        this.state = bb;
        for (const Mb of this.listeners) Mb();
        wb && Lb.k.iI(sp.b, bb.visible)
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      install() {
        const bb = Ob.d.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, Pb.j)(document.activeElement),
            onFrame: bb => {
              this.onFrame(bb)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: bb => Xp.includes(bb) || !this.state.visible && bb === (0, Ib.h)("keyboardType")
          }),
          wb = bb => {
            const wb = bb.target;
            (0, Pb.j)(wb) && (wb === this.pendingChatInput || (0, tb.n)() ? this.open(wb) : this.state.visible && wb !== this.state.target && (this.ownedField = null, this.hide()))
          },
          Mb = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          eb = bb => {
            bb.isTrusted && this.state.visible && (bb => !bb.repeat && !xp.has(bb.key) && !(0, Ip.c)(bb.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(bb.key))(bb) && this.hide()
          },
          Hb = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...Ep(this.state.target)
            })
          };
        document.addEventListener("focusin", wb, !0), document.addEventListener("focusout", Mb, !0), window.addEventListener("keydown", eb, !0), window.addEventListener("resize", Hb);
        const pb = Lb.k.subscribe(ZH.c, (() => {
            this.openChat()
          })),
          Vb = Lb.k.subscribe(sp.f, (bb => {
            this.openForField(bb)
          }));
        return () => {
          bb(), document.removeEventListener("focusin", wb, !0), document.removeEventListener("focusout", Mb, !0), window.removeEventListener("keydown", eb, !0), window.removeEventListener("resize", Hb), Lb.k.unsubscribe(pb), Lb.k.unsubscribe(Vb), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const bb = (0, DM.d)();
        bb ? document.activeElement !== bb.input ? (this.clearPendingChat(), this.pendingChatInput = bb.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), bb.open()) : this.open(bb.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(bb) {
        (0, Pb.j)(bb) ? (document.activeElement !== bb && bb.focus(), document.activeElement === bb && this.open(bb)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", bb)
      }
      open(bb) {
        var wb;
        if (this.clearPendingChat(), this.ownedField = bb, this.state.visible && this.state.target === bb) return;
        this.restoreInputMode(), (0, Pb.m)(bb), this.savedInputMode = bb.getAttribute("inputmode"), bb.setAttribute("inputmode", "none");
        const Mb = {
          ...Up,
          visible: !0,
          target: bb,
          kind: (0, DM.h)(bb) ? "chat" : null !== (wb = (0, DM.g)(bb).kind) && void 0 !== wb ? wb : null,
          accentsFirst: (eb = sH.g.get().getCurrentLanguageCode(), kH.has(eb)),
          ...Ep(bb)
        };
        var eb;
        const Hb = Cp(Mb),
          pb = ((bb, wb) => {
            for (let Mb = 0; Mb < bb.length; Mb++) {
              const eb = bb[Mb].findIndex((bb => "char" === bb.type && bb.char === wb));
              if (-1 !== eb) return {
                row: Mb,
                col: eb
              }
            }
            return null
          })(Hb, "q");
        this.padInput.reset(), this.setState({
          ...Mb,
          focus: pb,
          preferredX: Hp(Hb, pb)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(Up))
      }
      onFrame(bb) {
        if (this.releaseLostField()) return;
        const wb = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(bb) : (0, Pb.j)(wb) && this.padInput.onHiddenFrame(bb, wb)
      }
      releaseLostField() {
        const bb = this.ownedField;
        return !(null === bb || bb.isConnected && document.activeElement === bb) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: bb
        } = this.state;
        bb && (null === this.savedInputMode ? bb.removeAttribute("inputmode") : bb.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var Kp = Mb(10123),
      rp = Mb(3971);
    const Rp = new Map(iH.map((bb => {
        let {
          command: wb,
          action: Mb
        } = bb;
        return [wb, Mb]
      }))),
      Dp = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      cp = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        UI: "controller:keyboardTargetBookTitle"
      },
      Yp = bb => {
        const wb = (() => {
          const [, bb] = (0, Jb.useReducer)((bb => bb + 1), 0);
          return bb
        })();
        (0, Jb.useEffect)((() => {
          if (!bb) return;
          const Mb = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const Hb of Mb) bb.addEventListener(Hb, wb);
          document.addEventListener("selectionchange", wb);
          const eb = new MutationObserver(wb);
          return eb.observe(bb, {
            attributeFilter: ["placeholder"]
          }), () => {
            eb.disconnect();
            for (const eb of Mb) bb.removeEventListener(eb, wb);
            document.removeEventListener("selectionchange", wb)
          }
        }), [bb, wb])
      },
      Zp = bb => {
        bb.preventDefault()
      },
      fp = bb => {
        "mouse" !== bb.pointerType && bb.preventDefault()
      },
      Ap = () => {
        var bb;
        const {
          t: wb
        } = (0, Hb.C)(), Mb = (() => {
          const [bb, wb] = (0, Jb.useState)(jp.getState());
          return (0, Jb.useEffect)((() => jp.subscribe((() => {
            wb(jp.getState())
          }))), []), bb
        })(), eb = (0, tb.E)(), pb = (0, Jb.useRef)(null);
        (0, Ub.r)(), (0, tb.I)(), (0, Jb.useEffect)((() => {
          const bb = jp.install(),
            wb = null;
          return () => {
            bb(), null === wb || void 0 === wb || wb()
          }
        }), []);
        const Vb = (0, Kp.l)(),
          gb = Mb.visible && "chat" === Mb.kind ? Mb.target : null;
        Yp(gb);
        const lb = null !== (bb = null === gb || void 0 === gb ? void 0 : gb.value) && void 0 !== bb ? bb : "",
          Lb = (0, Op.b)(lb, lb.startsWith("/") ? (0, rp.c)() : [], Op.e.length),
          Ob = lb.startsWith("/"),
          Cb = Ob ? Op.e.map(((bb, wb) => {
            var Mb;
            return null !== (Mb = Lb[wb]) && void 0 !== Mb ? Mb : ""
          })) : Vb;
        if ((0, Jb.useEffect)((() => {
            jp.editor.setPhraseRow(Cb, Ob)
          })), (0, Jb.useEffect)((() => {
            const bb = pb.current;
            if (bb) return bb.addEventListener("touchstart", Zp, {
              passive: !1
            }), () => {
              bb.removeEventListener("touchstart", Zp)
            }
          }), [Mb.visible]), !Mb.visible) return null;
        const Eb = Cp(Mb),
          Fb = ep(Eb),
          Bb = bb => "char" === bb.type ? Lp(bb.char, Mb.page, Mb.shift) : "phrase" === bb.type ? Cb[bb.phraseIndex] : (bb => {
            switch (bb) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === Mb.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return Dp[bp(Mb.page, Mb.accentsFirst)[bb]];
              case "space":
                return wb("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return wb("chat" === Mb.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(bb.command),
          sb = bb => {
            jp.editor.pressKey(bb)
          };
        return (0, vb.jsxs)("div", {
          ref: pb,
          className: Nb()(DM.j, "top" === Mb.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: Mb.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": Eb.length,
            "--pad-keyboard-height": `${Mb.maxHeightPx}px`
          },
          onPointerDown: fp,
          onMouseDown: Zp,
          children: [(0, vb.jsx)(Wp, {
            target: Mb.target,
            label: Mb.kind ? wb(cp[Mb.kind]) : Mb.target.placeholder || wb("controller:keyboardTargetText")
          }), (0, vb.jsx)("div", {
            className: "PadKeyboardRows",
            children: Eb.map(((bb, wb) => (0, vb.jsx)("div", {
              className: Nb()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === bb[0].type
              }),
              children: bb.map(((bb, Hb) => {
                const pb = eb && Mb.focus.row === wb && Mb.focus.col === Hb,
                  Vb = "command" === bb.type ? Rp.get(bb.command) : void 0;
                return (0, vb.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: bb.width / Fb * 100 + "%"
                  },
                  children: (0, vb.jsxs)("div", {
                    className: Nb()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: pb,
                      PadKeyboardKeyCommand: "command" === bb.type,
                      PadKeyboardKeyPhrase: "phrase" === bb.type,
                      PadKeyboardKeyActive: "command" === bb.type && "shift" === bb.command && "off" !== Mb.shift,
                      PadKeyboardKeySubmit: "command" === bb.type && "submit" === bb.command
                    }),
                    role: "button",
                    onClick: () => {
                      sb({
                        row: wb,
                        col: Hb
                      })
                    },
                    onTouchEnd: bb => {
                      var Mb, eb;
                      bb.preventDefault(), Mb = bb.changedTouches[0], eb = bb.currentTarget.getBoundingClientRect(), Mb && Mb.clientX >= eb.left && Mb.clientX <= eb.right && Mb.clientY >= eb.top && Mb.clientY <= eb.bottom && sb({
                        row: wb,
                        col: Hb
                      })
                    },
                    children: [(0, vb.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: Bb(bb)
                    }), eb && Vb && (0, vb.jsx)(xH, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, Ib.h)(Vb)
                    })]
                  })
                }, Hb)
              }))
            }, wb)))
          })]
        })
      },
      Wp = bb => {
        let {
          target: wb,
          label: Mb
        } = bb;
        Yp(wb);
        const eb = (0, Jb.useRef)(null),
          Hb = (0, Jb.useRef)(null),
          pb = wb instanceof HTMLTextAreaElement;
        (0, Jb.useLayoutEffect)((() => {
          const bb = eb.current,
            wb = Hb.current;
          pb ? bb.scrollTop = wb.offsetTop - bb.clientHeight / 2 : bb.scrollLeft = wb.offsetLeft - bb.clientWidth / 2
        }));
        const {
          value: Vb,
          start: gb,
          end: lb
        } = (0, Pb.o)(wb), Lb = "password" === wb.type ? "\u2022".repeat(Vb.length) : Vb;
        return (0, vb.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, vb.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: Mb
          }), (0, vb.jsxs)("div", {
            ref: eb,
            className: Nb()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: pb
            }),
            children: [(0, vb.jsx)("span", {
              children: Lb.slice(0, gb)
            }), (0, vb.jsx)("span", {
              ref: Hb,
              className: "PadKeyboardCaret"
            }), gb !== lb && (0, vb.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: Lb.slice(gb, lb)
            }), (0, vb.jsx)("span", {
              children: Lb.slice(lb)
            }), 0 === Lb.length && wb.placeholder && wb.placeholder !== Mb && (0, vb.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: wb.placeholder
            })]
          })]
        })
      };
    var Jp = Mb(1549),
      Sp = Mb(4812);
    const Np = function() {
        for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
        return wb.map(Ib.h)
      },
      vp = (bb, wb) => {
        const Mb = uM(bb);
        return Mb ? [{
          glyphs: [Mb],
          labelKey: wb
        }] : []
      },
      Qp = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      Gp = "--pad-hint-bar-clearance",
      qp = "[data-pad-hint-bar-avoid]",
      ap = bb => {
        const wb = [];
        for (const Mb of bb)(0, Tb.m)(Mb) && wb.push(Mb.getBoundingClientRect());
        return wb
      },
      ip = bb => {
        if (!bb) return null;
        const wb = Oe(),
          Mb = wb ? ap(((bb, wb) => {
            const Mb = bb.closest(qp);
            return Mb ? [Mb] : ("popup" === wb ? document : bb).querySelectorAll(qp)
          })(wb.root, wb.layer.kind)) : [],
          eb = !wb || wb.root.hasAttribute("data-pad-shows-hud");
        if (((0, Sp.e)(null === wb || void 0 === wb ? void 0 : wb.layer.kind, (0, Sp.g)()) || eb) && Mb.push(...ap(document.querySelectorAll(Qp.join(",")))), 0 === Mb.length) return null;
        const {
          width: Hb,
          height: pb
        } = bb.getBoundingClientRect(), Vb = window.innerHeight - 8, gb = (0, Sp.l)(Vb, {
          width: Hb,
          height: pb
        }, window.innerWidth / 2, Mb, 8);
        return gb === Vb ? null : Math.round(window.innerHeight - gb)
      },
      dp = bb => {
        const wb = document.documentElement.style,
          Mb = bb ? `${Math.round(window.innerHeight-bb.getBoundingClientRect().top)}px` : "";
        wb.getPropertyValue(Gp) !== Mb && (Mb ? wb.setProperty(Gp, Mb) : wb.removeProperty(Gp))
      },
      Pp = () => {
        const {
          t: bb
        } = (0, Hb.C)(), {
          hideButtonHints: wb
        } = (0, Ub.r)(), Mb = (0, tb.E)(), [eb, pb] = (0, Jb.useState)(!1), [Vb, Lb] = (0, Jb.useState)([]), [Eb, Fb] = (0, Jb.useState)(null), Bb = (0, Jb.useRef)(null), sb = (0, Jb.useRef)(null);
        (0, BH.e)(sp.b, (bb => {
          pb(bb)
        })), (0, BH.e)(Sp.i, (() => {
          var bb;
          null === (bb = sb.current) || void 0 === bb || bb.call(sb)
        }));
        const mb = Mb && !wb && !eb;
        return (0, Jb.useEffect)((() => {
          if (!mb) return;
          let bb = null;
          const wb = () => {
            const wb = (() => {
                var bb;
                const wb = Ob.d.getActiveConsumerName(),
                  Mb = (0, Sp.d)();
                if (Mb) {
                  const bb = (0, Ib.h)(Mb),
                    wb = "emoteWheel" === Mb && "wheel" === (0, Ub.h)().emoteButton || !(0, Cb.I)(Ob.d.getLastFrame().values, bb) ? {
                      glyphs: Np("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [bb],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, Ib.y)(bb)],
                    labelKey: "controller:wheelChoose"
                  }, wb, {
                    glyphs: Np("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const eb = Oe();
                if (!eb || "focus" !== wb && "cursor" !== wb) return (0, Sp.b)(Ib.h);
                const Hb = [],
                  pb = {
                    glyphs: Np("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  Vb = (0, ib.v)(eb.root),
                  gb = Vb ? !(0, Tb.u)(Vb) : Boolean(eb.layer.close),
                  Lb = !Vb && eb.layer.closeLabelKey ? eb.layer.closeLabelKey : pb.labelKey,
                  tb = gb ? [{
                    ...pb,
                    labelKey: Lb
                  }] : [],
                  Eb = ZM(eb.layer.kind) ? [{
                    glyphs: Np("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === wb) return Hb.push({
                  glyphs: Np("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), Hb.push({
                  glyphs: Np("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), Hb.push(...tb), Hb.push(...Eb), Hb.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), re() && Hb.push({
                  glyphs: Np("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), Hb;
                const Fb = bH.getFocused();
                Fb && (0, Ze.e)(Fb) ? Hb.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : Fb && (0, ib.G)(Fb) ? Hb.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : Hb.push({
                  glyphs: Np("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const Bb = Fb ? null === (bb = tM(Fb)) || void 0 === bb ? void 0 : bb.dataset.padSecondary : void 0;
                Bb && Hb.push({
                  glyphs: Np("menuSecondary"),
                  labelKey: Bb
                }), Hb.push(...null !== Fb && void 0 !== Fb && Fb.closest("[data-pad-friends-column]") ? [pb] : tb), Hb.push(...Eb);
                const sb = "home" === eb.layer.kind;
                nM(eb.root) || !SM(eb.root) && !yM(eb) ? sb && Hb.push({
                  glyphs: Np("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : Hb.push({
                  glyphs: Np("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), sb && (Hb.push(...vp("inventory", "controller:menusFriends")), Bb || Hb.push({
                  glyphs: Np("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), Hb.push(...vp("pause", "controller:menusSettings")), Hb.push(...vp("leaderboard", "controller:menusNotifications")));
                const mb = lb.c.get("openEverythingMenuName");
                return "inGame" === lb.c.get("gameState") && "popup" !== eb.layer.kind && null !== mb && ((0, LM.j)(mb) ? Hb.push(...vp("leaderboard", "controller:menusClose")) : mb !== lM.l.LOBBY_LEADERBOARD && Hb.push(...vp("leaderboard", "controller:menusLobby"))), Hb.push({
                  glyphs: Np("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), Hb
              })(),
              Mb = ip(Bb.current),
              eb = ((bb, wb) => `${bb.map((bb=>`${bb.glyphs.join("+")}:${bb.labelKey}`)).join("|")}@${wb}`)(wb, Mb);
            eb !== bb && (bb = eb, (0, gb.unstable_batchedUpdates)((() => {
              Lb(wb), Fb(Mb)
            }))), dp(Bb.current)
          };
          wb(), sb.current = wb;
          const Mb = requestAnimationFrame(wb),
            eb = setInterval(wb, 150);
          return () => {
            sb.current = null, cancelAnimationFrame(Mb), clearInterval(eb), dp(null)
          }
        }), [mb]), (0, Jb.useLayoutEffect)((() => {
          if (!mb) return;
          if (0 === Vb.length) return void dp(null);
          const bb = ip(Bb.current);
          bb === Eb ? dp(Bb.current) : Fb(bb)
        }), [mb, Vb, Eb]), mb && 0 !== Vb.length ? (0, vb.jsx)("div", {
          ref: Bb,
          className: "PadButtonHintBar SmallTextBold",
          style: null === Eb ? void 0 : {
            bottom: Eb
          },
          "aria-hidden": !0,
          children: Vb.map((wb => (0, vb.jsxs)("div", {
            className: "PadButtonHint",
            children: [wb.glyphs.map((bb => (0, vb.jsx)(xH, {
              glyph: bb,
              className: "PadButtonHintGlyph"
            }, bb))), (0, vb.jsx)("span", {
              children: bb(wb.labelKey)
            })]
          }, wb.labelKey)))
        }) : null
      };
    var np = Mb(1968);
    const yp = [Tb.d, "label", "[data-pad-slider]"].join(","),
      op = "data-pad-cursor-probe",
      Tp = bb => {
        var wb;
        const Mb = (bb => {
          const wb = [];
          for (let eb = bb; eb && eb !== document.body && eb !== document.documentElement && (wb.push(eb), !(wb.length > 8)); eb = eb.parentElement);
          const Mb = document.documentElement.classList.contains(tb.u) ? wb[wb.length - 1] : void 0;
          null === Mb || void 0 === Mb || Mb.setAttribute(op, "");
          try {
            return wb.map((bb => ({
              element: bb,
              cursor: getComputedStyle(bb).cursor
            })))
          } finally {
            null === Mb || void 0 === Mb || Mb.removeAttribute(op)
          }
        })(bb);
        if ("pointer" !== (null === (wb = Mb[0]) || void 0 === wb ? void 0 : wb.cursor)) return null;
        let eb = 0;
        for (; eb + 1 < Mb.length && "pointer" === Mb[eb + 1].cursor;) eb++;
        return Mb[eb].element
      },
      kp = (bb, wb, Mb, eb) => {
        const Hb = eb.root.contains(bb) ? eb.root : null;
        for (let pb = bb; pb && pb !== document.body && pb !== document.documentElement; pb = pb.parentElement) {
          if (pb instanceof HTMLElement && rb(pb, wb) && Zb(pb, wb, Mb)) return pb;
          if (pb === Hb) break
        }
        return "home" === eb.layer.kind || "gamePage" === eb.layer.kind ? ((bb, wb) => {
          const Mb = document.scrollingElement;
          return Mb instanceof HTMLElement && ![document.documentElement, document.body].some((wb => {
            const Mb = getComputedStyle(wb),
              eb = "y" === bb ? Mb.overflowY : Mb.overflowX;
            return "hidden" === eb || "clip" === eb
          })) && Zb(Mb, bb, wb) ? Mb : null
        })(wb, Mb) : null
      };
    const bV = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, Eb.d)(Cb.w), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const bb = Ob.d.register({
              name: "cursor",
              isActive: () => "cursor" === Re(),
              onFrame: bb => {
                this.onFrame(bb)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: bb => (0, Ob.h)(bb) || bb === (0, Ib.h)("menuConfirm") && (0, ib.K)((0, tb.d)())
            }),
            wb = (0, ee.h)((bb => {
              const wb = bb.getRoot();
              wb && this.layerPoints.delete(wb), wb === this.layerRoot && (this.layerRoot = null)
            })),
            Mb = Lb.k.subscribe("appManagerUpdated|activeInputDevice", (bb => {
              "gamepad" !== bb && this.active && !this.hidden && this.hide()
            }));
          return () => {
            bb(), wb(), Lb.k.unsubscribe(Mb), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, tb.n)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.iI()
        }
        activate(bb) {
          this.active = !0, this.hidden = !1;
          const wb = xe();
          !wb || wb.root && wb.root !== bb.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(bb), this.jumpTo(wb.point))
        }
        jumpTo(bb) {
          this.state = {
            x: bb.x,
            y: bb.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.iI())
        }
        onFrame(bb) {
          const wb = Oe();
          if (!wb) return;
          if (this.active || this.activate(wb), this.followPage(wb)) return;
          this.followLayer(wb);
          const Mb = bb.wokeDevice ? (0, tb.d)() : null;
          if (Mb && this.jumpTo(Mb), !(0, tb.n)()) return void this.hide();
          const eb = (0, Ib.h)("menuToggleCursor");
          if (bb.wasPressed(eb)) return Ob.d.consumeButton(eb), void Xe(this.getHandoff(null));
          if (this.handBackToFocus(bb)) return;
          const Hb = (0, Ib.h)("menuConfirm"),
            pb = (0, Ib.h)("menuSecondary");
          if (bb.wasPressed((0, Ib.h)("menuBack"))) return (0, ib.i)(wb.root) || (0, ib.e)(wb.root) || Ue(), void this.iI();
          if (kM(null, bb, wb)) return bb.wasReleased(Hb) && this.press && (this.updateHit(!1), this.updateConfirm(bb, Hb)), void this.iI();
          if (document.pointerLockElement) return void this.hide();
          const Vb = De() ? {
              x: 0,
              y: 0
            } : (bb => {
              const wb = (bb, wb) => (bb ? 1 : 0) - (wb ? 1 : 0);
              return {
                x: wb(bb.isHeld("Right"), bb.isHeld("Left")),
                y: wb(bb.isHeld("Down"), bb.isHeld("Up"))
              }
            })(bb),
            gb = (0, Ub.h)().moveDeadzone,
            lb = ((bb, wb) => {
              const Mb = (0, Cb.m)(bb, hb(wb));
              return Math.hypot(Mb.x, Mb.y)
            })(bb.leftStick, gb) > 0 || 0 !== Vb.x || 0 !== Vb.y;
          if (this.hidden) {
            const wb = bb.wasPressed(Hb),
              Mb = bb.wasPressed(pb);
            if (!lb && !xb(bb.rightStick) && !wb && !Mb && !bb.wokeDevice) return void this.iI();
            if (this.hidden = !1, this.updateHit(!1), wb || Mb) return wb && (this.press = {
              kind: "ignored"
            }, bb.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.iI()
          }
          this.movePendingPageStart(lb);
          const Lb = this.getPoint();
          this.state = Xb(this.state, {
            stick: bb.leftStick,
            moveDeadzone: gb,
            dpad: Vb,
            dtMs: bb.dtMs,
            cursorSpeedPercent: (0, Ub.h)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const Eb = this.state.x !== Lb.x || this.state.y !== Lb.y,
            Fb = [Hb, pb].some((wb => bb.wasPressed(wb) || bb.wasReleased(wb)));
          (Eb || Fb || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(Eb), this.updateConfirm(bb, Hb), this.updateSecondary(bb, pb), this.updateScroll(bb, wb), this.iI()
        }
        followPage(bb) {
          const wb = "home" === bb.layer.kind || "gamePage" === bb.layer.kind,
            Mb = this.page;
          if (this.page = wb ? {
              key: (0, ee.n)(bb.layer),
              root: bb.root
            } : null, !this.page || !Mb || Mb.root !== bb.root || Mb.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(bb), "hybrid" === ze()) return se = null, Fe = null, me.lock(), !0;
          const {
            key: eb
          } = this.page;
          return this.pendingPageStart = {
            root: bb.root,
            key: eb,
            returning: bH.notePageEnteredByCursor(eb),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(bb) {
          const wb = this.pendingPageStart;
          if (!wb) return;
          if (bb || wb.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const Mb = wb.returning ? bH.recallStop(wb.root, wb.key) : null;
          if (!Mb && wb.returning && performance.now() - wb.enteredAtMs < 1e3) return;
          const eb = null !== Mb && void 0 !== Mb ? Mb : bH.pickInitial(wb.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: wb.enteredAtMs
          });
          eb && (this.pendingPageStart = null, this.jumpTo((0, ib.y)(eb)))
        }
        setLayer(bb) {
          this.layerRoot = bb.root, this.layerOrder = bb.order
        }
        followLayer(bb) {
          var wb;
          if (bb.root === this.layerRoot) return;
          null !== (wb = this.layerRoot) && void 0 !== wb && wb.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const Mb = this.layerPoints.get(bb.root),
            eb = Mb && bb.order <= this.layerOrder ? Mb : bH.getLayerStartPoint(bb.root);
          this.setLayer(bb), this.jumpTo(eb)
        }
        getHandoff(bb) {
          var wb;
          return {
            point: this.getPoint(),
            element: null !== (wb = this.interactive) && void 0 !== wb ? wb : this.findDraggedSliderNearby(),
            direction: bb
          }
        }
        findDraggedSliderNearby() {
          const bb = this.draggedSlider;
          if (null === bb || void 0 === bb || !bb.isConnected) return null;
          const wb = bb.getBoundingClientRect(),
            {
              y: Mb
            } = this.getPoint();
          return Mb >= wb.top - 40 && Mb <= wb.bottom + 40 ? bb : null
        }
        handBackToFocus(bb) {
          if (!De()) return !1;
          const wb = Cb.E.find((wb => bb.wasPressed(wb)));
          return !!wb && (Mb = this.getHandoff(wb), se = Ce(Mb), Fe = null, me.lock(), Ob.d.handOffHeldInput(), !0);
          var Mb
        }
        getAssistContext() {
          const bb = this.interactive;
          if (null === bb || void 0 === bb || !bb.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const wb = bb.getBoundingClientRect();
          if (wb.width > .4 * window.innerWidth || wb.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const Mb = (0, Ub.h)().cursorMagnetism && !(0, np.d)(bb) && !bb.closest("[data-pad-slider]"),
            eb = this.magnet && this.magnet !== bb && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : wb;
          return {
            overInteractive: !0,
            magnetTarget: Mb ? {
              x: eb.left + eb.width / 2,
              y: eb.top + eb.height / 2
            } : null
          }
        }
        updateHit(bb) {
          this.lastHitTestMs = performance.now();
          const wb = this.getPoint(),
            Mb = document.elementFromPoint(wb.x, wb.y),
            eb = Mb && !(0, Bb.l)(Mb) && (bb => {
              var wb;
              const Mb = Oe();
              return !(Mb && !Mb.root.contains(bb) && !bb.closest(".tooltip-container")) || !(null !== (wb = document.getElementById("root")) && void 0 !== wb && wb.contains(bb))
            })(Mb) ? Mb : null;
          if (eb !== this.hit) return (0, ib.n)(this.hit, eb, wb), this.hit = eb, void this.setInteractive(eb ? (bb => {
            const wb = bb.closest(yp);
            if (wb) {
              var Mb, eb;
              const bb = null !== (Mb = null === (eb = wb.parentElement) || void 0 === eb ? void 0 : eb.closest("[data-pad-focusable]")) && void 0 !== Mb ? Mb : wb;
              return (0, Tb.u)(bb) ? {
                element: null,
                magnet: null
              } : {
                element: bb,
                magnet: wb
              }
            }
            const Hb = Tp(bb);
            return {
              element: Hb,
              magnet: Hb
            }
          })(eb) : {
            element: null,
            magnet: null
          });
          bb && eb && (0, ib.n)(eb, eb, wb)
        }
        setInteractive(bb) {
          let {
            element: wb,
            magnet: Mb
          } = bb;
          this.interactive = wb, this.magnet = Mb
        }
        clearHover() {
          this.hit && (0, ib.n)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const bb = this.hit;
          if (!bb || (0, ib.G)(bb)) return {
            kind: "ignored"
          };
          const wb = (0, Ze.e)(bb),
            Mb = bb.closest("[data-pad-slider]");
          return wb && Mb ? {
            kind: "slider",
            slider: Mb,
            adjuster: wb
          } : ((0, ib.o)(bb, this.getPoint()), {
            kind: "pointer",
            target: bb
          })
        }
        applySliderFraction(bb) {
          var wb;
          const Mb = bb.slider.getBoundingClientRect(),
            eb = Mb.height > Mb.width,
            Hb = null === (wb = bb.slider.querySelector("[data-pad-slider-handle]")) || void 0 === wb ? void 0 : wb.getBoundingClientRect(),
            pb = Hb ? eb ? Hb.height : Hb.width : 0,
            Vb = (eb ? Mb.height : Mb.width) - pb;
          if (Vb <= 0) return;
          const gb = eb ? Mb.bottom - pb / 2 - this.state.y : this.state.x - Mb.left - pb / 2;
          bb.adjuster.setFraction(Math.max(0, Math.min(1, gb / Vb)))
        }
        updateConfirm(bb, wb) {
          bb.wasPressed(wb) && (this.press = bb.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const Mb = this.press;
          if (!Mb) return;
          if (bb.isHeld(wb)) return "slider" === Mb.kind && this.applySliderFraction(Mb), void this.updateRepeat();
          this.press = null;
          const eb = this.repeated;
          if (this.endRepeat(), !bb.wasReleased(wb)) return void this.endPressWithoutClick(Mb);
          const Hb = this.getPoint(),
            pb = this.hit;
          if ("slider" === Mb.kind && Mb.adjuster.endDrag(), "pointer" === Mb.kind) {
            const bb = null !== pb && void 0 !== pb ? pb : Mb.target.isConnected ? Mb.target : null;
            bb && (0, ib.s)(bb, Hb);
            const wb = pb && Mb.target.isConnected && !eb ? ((bb, wb) => {
              for (let Mb = bb; Mb; Mb = Mb.parentElement)
                if (Mb.contains(wb)) return Mb;
              return null
            })(Mb.target, pb) : null;
            wb && (bH.noteCursorActivation(wb), (0, Bb.e)(wb, new MouseEvent("click", (0, ib.T)(Hb, 0, 0))), (0, ib.h)(wb), (0, ib.P)(wb) && (0, ib.N)(wb))
          }
        }
        beginRepeat() {
          var bb, wb, Mb;
          const eb = null !== (bb = null === (wb = this.hit) || void 0 === wb ? void 0 : wb.closest("[data-pad-repeat]")) && void 0 !== bb ? bb : null;
          this.repeatStop = eb, this.repeatKey = null !== (Mb = null === eb || void 0 === eb ? void 0 : eb.getAttribute("data-pad-repeat")) && void 0 !== Mb ? Mb : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const bb = this.repeatStop;
          if (!bb) return;
          const wb = this.hit;
          bb.isConnected && !(0, Tb.u)(bb) && bb.getAttribute("data-pad-repeat") === this.repeatKey && wb && bb.contains(wb) ? bb.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, bH.noteCursorActivation(bb), (0, Bb.e)(bb, new MouseEvent("click", (0, ib.T)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(bb) {
          "slider" === bb.kind && bb.adjuster.endDrag(), "pointer" === bb.kind && bb.target.isConnected && (0, ib.s)(bb.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(bb, wb) {
          bb.wasPressed(wb) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !bb.isHeld(wb) && (this.secondaryArmed = !1, bb.wasReleased(wb) && this.hit && (0, ib.j)(this.hit, this.getPoint(), 2))
        }
        updateScroll(bb, wb) {
          const Mb = jb(bb.rightStick, bb.dtMs);
          if (0 === Mb.x && 0 === Mb.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + Mb.x,
            y: this.scrollRemainder.y + Mb.y
          };
          const eb = Math.trunc(this.scrollRemainder.x),
            Hb = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - eb,
            y: this.scrollRemainder.y - Hb
          };
          const pb = this.hit;
          if (!pb) return;
          let Vb = !1;
          if (0 !== Hb) {
            const bb = kp(pb, "y", Hb > 0 ? 1 : -1, wb);
            bb && (bb.scrollBy({
              top: Hb,
              behavior: "instant"
            }), Vb = !0)
          }
          if (0 !== eb) {
            const bb = kp(pb, "x", eb > 0 ? 1 : -1, wb);
            bb && (bb.scrollBy({
              left: eb,
              behavior: "instant"
            }), Vb = !0)
          }
          Vb && (this.lastHitTestMs = -1 / 0)
        }
        iI() {
          db.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      wV = () => {
        const bb = (0, Jb.useMemo)((() => new qb), []),
          wb = (0, tb.E)();
        return (0, Jb.useEffect)((() => {
          if (!wb) return;
          let Mb = 0,
            eb = {
              of: null,
              atMs: 0,
              list: []
            };
          const Hb = document.getElementsByClassName(ce),
            pb = bb => {
              for (const wb of [...Hb]) wb !== bb && wb.classList.remove(ce)
            },
            Vb = () => {
              var wb;
              Mb = requestAnimationFrame(Vb);
              const Hb = (() => {
                const bb = bH.getFocused();
                if (bH.isActive() && null !== bb && void 0 !== bb && bb.isConnected) return bb;
                const wb = bV.getHighlighted();
                return null !== wb && void 0 !== wb && wb.isConnected ? wb : null
              })();
              pb(Hb), Hb && !Hb.classList.contains(ce) && Hb.classList.add(ce);
              const gb = null !== (wb = null === Hb || void 0 === Hb ? void 0 : Hb.closest("[data-pad-reticle-box]")) && void 0 !== wb ? wb : Hb;
              bb.show(gb ? ((bb, wb) => {
                let Mb = bb.left,
                  eb = bb.top,
                  Hb = bb.right,
                  pb = bb.bottom;
                for (const Vb of wb) {
                  if (!Vb) continue;
                  const bb = Ab(Vb);
                  Mb = Math.max(Mb, bb.left), eb = Math.max(eb, bb.top), Hb = Math.min(Hb, bb.right), pb = Math.min(pb, bb.bottom)
                }
                return Hb <= Mb || pb <= eb ? null : {
                  left: Mb,
                  top: eb,
                  width: Hb - Mb,
                  height: pb - eb
                }
              })(gb.getBoundingClientRect(), (bb => {
                const wb = performance.now();
                return (eb.of !== bb || wb - eb.atMs > 500) && (eb = {
                  of: bb,
                  atMs: wb,
                  list: [Rb(bb, "y"), Rb(bb, "x")]
                }), eb.list
              })(gb)) : null)
            };
          return Mb = requestAnimationFrame(Vb), () => {
            cancelAnimationFrame(Mb), pb(null), bb.hide()
          }
        }), [wb, bb]), (0, vb.jsx)(ab, {
          placer: bb,
          className: "PadFocusRing"
        })
      },
      MV = (bb, wb) => {
        bb.style.transform = `translate3d(${wb.x}px, ${wb.y}px, 0)`, bb.classList.toggle("Visible", wb.visible), bb.classList.toggle("Pressed", wb.pressed)
      },
      eV = () => {
        const bb = (0, Jb.useRef)(null);
        return (0, Jb.useEffect)((() => {
          const wb = db.subscribe((wb => {
            bb.current && MV(bb.current, wb)
          }));
          return bb.current && MV(bb.current, db.get()), wb
        }), []), (0, vb.jsx)("div", {
          ref: bb,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, vb.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      HV = [{
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      pV = "PadOverThirdParty",
      VV = new Set(HV.map((bb => bb.id))),
      gV = () => {
        const bb = HV.map((bb => {
            let {
              id: wb,
              find: Mb,
              startSelectors: eb
            } = bb;
            return (0, ee.j)({
              id: wb,
              kind: "popup",
              getRoot: () => {
                const bb = Mb(),
                  wb = bb ? ((bb, wb) => {
                    var Mb;
                    for (const eb of wb) {
                      const wb = bb.querySelector(eb);
                      if (wb) return wb
                    }
                    return null !== (Mb = [...bb.querySelectorAll("button")].find((bb => !bb.matches(".fc-cta-consent")))) && void 0 !== Mb ? Mb : null
                  })(bb, eb) : null;
                if (bb && wb && !wb.hasAttribute("data-pad-default-focus")) {
                  for (const wb of bb.querySelectorAll("[data-pad-default-focus]")) wb.removeAttribute("data-pad-default-focus");
                  for (const wb of bb.querySelectorAll("[data-pad-hint-bar-avoid]")) wb.removeAttribute("data-pad-hint-bar-avoid");
                  wb.setAttribute("data-pad-default-focus", ""), ((bb, wb) => {
                    let Mb = bb;
                    for (let eb = bb.parentElement; eb && wb.contains(eb) && !(eb.getBoundingClientRect().height >= window.innerHeight / 2); eb = eb.parentElement) Mb = eb;
                    return Mb
                  })(wb, bb).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return bb
              },
              close: null,
              memoryKey: null
            })
          })),
          wb = document.documentElement,
          Mb = Vb.e.onFrame((() => {
            const bb = (0, tb.n)() ? Oe() : null,
              Mb = !!bb && (eb = bb.layer, VV.has(eb.id));
            var eb;
            wb.classList.contains(pV) !== Mb && wb.classList.toggle(pV, Mb)
          }));
        return () => {
          for (const wb of bb) wb();
          Mb(), wb.classList.remove(pV)
        }
      },
      lV = "PadLargePointer",
      LV = () => {
        (0, Jb.useEffect)((() => {
          const bb = (0, Bb.j)(document.body),
            wb = bH.install(),
            Mb = bV.install(),
            eb = gV();
          return () => {
            bb(), wb(), Mb(), eb()
          }
        }), []);
        const {
          largePointer: bb
        } = (0, Ub.r)(), wb = (0, Jp.z)() && bb;
        return (0, Jb.useEffect)((() => {
          if (wb) return document.documentElement.classList.add(lV), () => {
            document.documentElement.classList.remove(lV)
          }
        }), [wb]), (0, gb.createPortal)((0, vb.jsxs)(vb.Fragment, {
          children: [(0, vb.jsx)(Pp, {}), (0, vb.jsx)(wV, {}), (0, vb.jsx)(eV, {})]
        }), document.body)
      };
    var IV = Mb(10130),
      OV = Mb(10149),
      UV = Mb(10137);
    Mb(10153);
    const tV = (bb, wb) => {
        const [Mb, eb] = (0, Jb.useState)(!1), [Hb, pb] = (0, Jb.useState)(null), Vb = (0, Jb.useRef)(null), gb = (0, Jb.useCallback)((bb => {
          Vb.current = bb, pb(bb)
        }), []), lb = (0, Jb.useCallback)((() => {
          eb(!1), gb(null)
        }), [gb]), Ib = (0, Jb.useCallback)((() => {
          eb(!0)
        }), []), Ob = (0, Jb.useCallback)(((bb, wb) => {
          gb((0, UV.G)(bb, wb, Vb.current))
        }), [gb]);
        (0, Jb.useLayoutEffect)((() => (wb(Mb), (0, Sp.q)(bb, Mb), Lb.k.iI(Sp.i), () => {
          wb(!1), (0, Sp.q)(bb, !1), Lb.k.iI(Sp.i)
        })), [Mb, bb, wb]), (0, BH.e)("appManagerUpdated|activeInputDevice", (bb => {
          "gamepad" !== bb && lb()
        })), (0, BH.e)("appManagerUpdated|gameState", (bb => {
          "inGame" !== bb && lb()
        }));
        const Ub = () => {
          (0, LM.q)() && lb()
        };
        return (0, BH.e)("appManagerUpdated|openEverythingMenuName", Ub), (0, BH.e)("appManagerUpdated|openInGameMenuName", Ub), {
          open: Mb,
          picked: Hb,
          pickedRef: Vb,
          show: Ib,
          aim: Ob,
          close: lb
        }
      },
      CV = bb => {
        let {
          className: wb,
          slotCount: Mb,
          picked: eb,
          slotLabel: Hb,
          renderSlot: pb,
          centre: Vb
        } = bb;
        const gb = Array.from({
          length: Mb
        }, ((bb, wb) => wb));
        return (0, vb.jsx)("div", {
          className: Nb()("EmoteWheelOverlay PadRadialWheel", wb),
          children: (0, vb.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * UV.r + "rem",
              height: 2 * UV.r + "rem"
            },
            children: [(0, vb.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${UV.m} ${UV.m}`,
              children: [gb.map((bb => (0, vb.jsx)("path", {
                d: (0, UV.v)(bb, Mb, UV.h, UV.i, UV.k),
                className: Nb()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: bb === eb
                }),
                "aria-label": Hb(bb)
              }, bb))), (0, vb.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: UV.h,
                cy: UV.h,
                r: UV.k
              }), (0, vb.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: UV.h,
                cy: UV.h,
                r: UV.i
              }), null !== eb && (0, vb.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, UV.v)(eb, Mb, UV.h, UV.i, UV.k)
              })]
            }), gb.map((bb => {
              const wb = (0, UV.y)(bb, Mb);
              return (0, vb.jsx)("div", {
                className: Nb()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: bb === eb
                }),
                style: {
                  left: `calc(50% + ${UV.e*Math.cos(wb)}rem)`,
                  top: `calc(50% + ${UV.e*Math.sin(wb)}rem)`
                },
                "aria-hidden": !0,
                children: pb(bb)
              }, bb)
            })), (0, vb.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: Vb
            })]
          })
        })
      },
      EV = Op.e.length,
      FV = () => {
        const {
          t: bb
        } = (0, Hb.C)(), wb = tV("chat", YM.m), Mb = (0, Kp.l)();
        return (0, BH.e)(YM.j, (() => {
          wb.open || (0, IV.g)() || (0, OV.n)() || "inGame" !== lb.c.get("gameState") || (0, LM.q)() || !(0, DM.d)() || wb.show()
        })), (0, BH.e)(YM.d, (bb => {
          wb.open && wb.aim(bb, EV)
        })), (0, BH.e)(YM.g, (() => {
          var bb;
          if (!wb.open) return;
          const eb = wb.pickedRef.current;
          null !== eb ? Op.f.claim(performance.now()) && (wb.close(), null === (bb = (0, DM.d)()) || void 0 === bb || bb.sendLine(Mb[eb])) : wb.close()
        })), (0, BH.e)(YM.f, wb.close), wb.open ? (0, vb.jsx)(CV, {
          className: "QuickChatWheel",
          slotCount: EV,
          picked: wb.picked,
          slotLabel: bb => Mb[bb],
          renderSlot: bb => Mb[bb],
          centre: null !== wb.picked ? Mb[wb.picked] : bb("controller:quickChatPick")
        }) : null
      },
      BV = () => {
        const {
          t: bb
        } = (0, Hb.C)(), wb = tV("actionButton", OV.p), [Mb, eb] = (0, Jb.useState)([]);
        if ((0, BH.e)(OV.i, (bb => {
            wb.open || (0, IV.g)() || (0, YM.c)() || "inGame" !== lb.c.get("gameState") || (0, LM.q)() || (eb(bb), wb.show())
          })), (0, BH.e)(OV.d, (bb => {
            wb.open && wb.aim(bb, Mb.length)
          })), (0, BH.e)(OV.g, (() => {
            if (!wb.open) return;
            const bb = wb.pickedRef.current;
            wb.close(), null !== bb && Lb.k.iI(OV.j, Mb[bb])
          })), (0, BH.e)(OV.f, wb.close), !wb.open) return null;
        const pb = null !== wb.picked ? Mb[wb.picked] : null;
        return (0, vb.jsx)(CV, {
          className: "ActionWheel",
          slotCount: Mb.length,
          picked: wb.picked,
          slotLabel: wb => {
            const eb = Mb[wb];
            return "reload" === eb.kind ? bb("controller:gameplayReload") : "customButton" === eb.kind ? eb.description || eb.icon : "touchButton" === eb.kind && "string" === typeof eb.label ? eb.label : ""
          },
          renderSlot: bb => (0, vb.jsx)(KH, {
            action: Mb[bb]
          }),
          centre: pb ? (0, vb.jsx)(KH, {
            action: pb
          }) : bb("controller:actionWheelPick")
        })
      };
    var sV = Mb(110);
    const mV = () => ((0, Jb.useEffect)((() => {
        var bb, wb;
        const Mb = (0, Bb.j)(document.getElementById("root")),
          eb = (0, tb.f)(),
          Hb = (() => {
            const bb = [Lb.k.subscribe(MH.d, (() => {
                VH("blockBreak")
              })), Lb.k.subscribe("damagedByOtherPlayer", (() => {
                VH("damage")
              })), Lb.k.subscribe("yourAttackHit", (bb => {
                let {
                  hitSelf: wb
                } = bb;
                wb || VH("hit")
              }))],
              wb = Vb.e.onActivePadChanged((bb => {
                bb && VH("connect")
              }));
            return () => {
              for (const wb of bb) Lb.k.unsubscribe(wb);
              wb()
            }
          })(),
          pb = (() => {
            const bb = new UH({
              getVisitId: OH.getVisitSessionId,
              peekVisitId: OH.peekVisitSessionId,
              readReportedVisitId: () => {
                const bb = IH.j.getItem(tH);
                return "string" === typeof bb ? bb : null
              },
              writeReportedVisitId: bb => {
                IH.j.setItem(tH, bb)
              },
              isPadActive: tb.n,
              getPadFamily: () => {
                var bb, wb;
                return null !== (bb = null === (wb = Vb.e.getActivePad()) || void 0 === wb ? void 0 : wb.family) && void 0 !== bb ? bb : null
              },
              canReport: lH.isBloxdGa4Ready,
              getInputType: LH.e,
              bO: lH.logControllerUsedToGtag
            });
            let wb = 0,
              Mb = null;
            const eb = Hb => {
                null === Mb && ("notReady" !== bb.check(Hb) || null !== Mb || wb >= 20 || (wb++, Mb = setTimeout((() => {
                  Mb = null, eb(!1)
                }), 3e3)))
              },
              Hb = Lb.k.subscribe("appManagerUpdated|activeInputDevice", (() => {
                eb(!0)
              })),
              pb = (0, OH.onVisitStarted)((() => {
                wb = 0, eb(!0)
              }));
            return () => {
              Lb.k.unsubscribe(Hb), pb(), null !== Mb && clearTimeout(Mb)
            }
          })(),
          gb = Vb.e.onFrame(((bb, wb, Mb) => {
            const eb = (0, tb.s)(bb, Mb);
            Ob.d.dispatch(bb, wb, eb)
          }));
        let Ib = null !== (bb = null === (wb = Vb.e.getActivePad()) || void 0 === wb ? void 0 : wb.family) && void 0 !== bb ? bb : null;
        const Cb = Vb.e.onActivePadChanged((bb => {
            var wb, Mb;
            (Ob.d.reset(), (0, tb.y)(), Lb.k.iI(Vb.b, bb), (null !== (wb = null === bb || void 0 === bb ? void 0 : bb.family) && void 0 !== wb ? wb : null) !== Ib) && (Ib = null !== (Mb = null === bb || void 0 === bb ? void 0 : bb.family) && void 0 !== Mb ? Mb : null, Lb.k.iI(Ub.c, (0, Ub.h)()));
            !bb && (0, tb.n)() && (0, tb.A)(lb.c.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          Eb = () => {
            "visible" !== document.visibilityState && Ob.d.clear()
          },
          Fb = () => {
            Ob.d.clear()
          };
        document.addEventListener("visibilitychange", Eb), window.addEventListener("blur", Fb), Vb.e.start(), (0, gH.i)();
        const sb = null;
        return () => {
          Mb(), eb(), Hb(), pb(), gb(), Cb(), document.removeEventListener("visibilitychange", Eb), window.removeEventListener("blur", Fb), Vb.e.stop(), null === sb || void 0 === sb || sb()
        }
      }), []), (0, vb.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, vb.jsx)(fH, {}), (0, vb.jsx)(qH, {}), (0, vb.jsx)(aH, {}), (0, vb.jsx)(Ap, {}), (0, vb.jsx)(LV, {}), (0, vb.jsx)(FV, {}), (0, vb.jsx)(BV, {})]
      })),
      hV = () => sV.featureFlags.useControllerSupport ? (0, vb.jsx)(mV, {}) : null;
    var zV = Mb(9542),
      XV = Mb(10155);
    const xV = new Set(gH.g),
      jV = bb => `${XV.m}${(0,Ub.j)()}/${bb}`,
      KV = bb => {
        if (!(0, XV.j)(bb)) return null;
        const [wb, Mb] = bb.slice(XV.m.length).split("/");
        return (0, zV.f)(wb) && xV.has(Mb) ? (0, gH.d)(wb, Mb) : null
      };
    var rV = Mb(10160);
    const RV = () => {
        const {
          t: bb
        } = (0, Hb.C)(), wb = (0, tb.E)(), {
          gameState: Mb,
          isUiHidden: eb
        } = (0, lb.o)(["gameState", "isUiHidden"]), {
          hideButtonHints: pb,
          sneakMode: Vb
        } = (0, Ub.r)(), [gb, Lb] = (0, Jb.useState)(rV.b);
        return (0, BH.e)(ZH.r, Lb), wb && !eb && "inGame" === Mb && gb ? (0, vb.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!pb && (0, vb.jsx)(xH, {
            glyph: (0, Ib.h)("toggle" === Vb ? "sneak" : "sneakToggle")
          }), (0, vb.jsx)("span", {
            children: bb("controller:gameplaySneaking")
          })]
        }) : null
      },
      DV = 12,
      cV = bb => {
        let {
          trigger: wb,
          className: Mb,
          children: eb
        } = bb;
        const Hb = (0, Jb.useRef)(null);
        return (0, Jb.useEffect)((() => {
          let bb = 0;
          const Mb = Rb(wb, "y"),
            eb = () => {
              bb = requestAnimationFrame(eb);
              const pb = Hb.current;
              if (!pb || null === wb || void 0 === wb || !wb.isConnected) return;
              const {
                left: Vb,
                top: gb
              } = function(bb, wb, Mb) {
                let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const pb = bb.left + bb.width / 2,
                  Vb = Math.max(DV, Mb.width - DV - wb.width),
                  gb = Math.min(Math.max(pb - wb.width / 2, DV), Vb),
                  lb = Mb.height - eb;
                let Lb = 0,
                  Ib = lb;
                if (Hb) {
                  const bb = Math.max(0, Hb.top),
                    eb = Math.min(lb, Hb.bottom);
                  eb - bb >= Math.max(Mb.height / 2, wb.height + 24) && (Lb = bb, Ib = eb)
                }
                const Ob = bb.top + bb.height / 2 < (Lb + Ib) / 2 ? Ib - DV - wb.height : Lb + DV;
                return {
                  left: gb,
                  top: Math.max(DV, Ob)
                }
              }(wb.getBoundingClientRect(), {
                width: pb.offsetWidth,
                height: pb.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(Gp)) || 0, null !== Mb && void 0 !== Mb && Mb.isConnected ? Mb.getBoundingClientRect() : null);
              pb.style.transform = `translate3d(${Math.round(Vb)}px, ${Math.round(gb)}px, 0)`, pb.style.visibility = "visible"
            };
          return eb(), () => {
            cancelAnimationFrame(bb)
          }
        }), [wb]), (0, vb.jsx)("div", {
          ref: Hb,
          className: Mb,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: eb
        })
      };
    var YV = Mb(1475),
      ZV = Mb(10166),
      fV = Mb(1616),
      AV = Mb(10170),
      WV = Mb(10177);
    const JV = {
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
      SV = () => {
        const {
          t: bb
        } = (0, Hb.C)(), wb = (0, tb.E)(), Mb = (0, ZV.b)(), eb = (0, vH.k)("_tasks"), pb = (0, vH.k)("_availableLeaderboards");
        if (!wb) return null;
        const Vb = (bb => {
          let {
            hasShop: wb,
            hasTasksOrLeaderboards: Mb,
            canInvite: eb
          } = bb;
          const Hb = [];
          return wb && Hb.push("shop"), Mb && Hb.push("tasks"), eb && Hb.push("invite"), Hb.push("leave"), Hb
        })({
          hasShop: Mb,
          hasTasksOrLeaderboards: !(!eb && !pb),
          canInvite: !!sV.featureFlags.canUseInviteLinks
        });
        return (0, vb.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: Vb.map((wb => {
            const {
              icon: Mb,
              labelKey: eb
            } = JV[wb], Hb = "leave" === wb ? fV.Q : fV.f;
            return (0, vb.jsx)(Hb, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (bb => {
                  switch (bb) {
                    case "shop":
                      return Lb.k.iI(WV.m), void lb.c.set({
                        openEverythingMenuName: lM.l.SHOP
                      });
                    case "tasks":
                      return void Lb.k.iI("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void Lb.k.iI("toggleMenu", "inviteLink");
                    case "leave":
                      (0, AV.d)()
                  }
                })(wb)
              },
              children: (0, vb.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, vb.jsx)(YV.b, {
                  name: Mb
                }), (0, vb.jsx)("span", {
                  children: bb(eb)
                })]
              })
            }, wb)
          }))
        })
      };
    var NV = Mb(2194);
    const vV = Cb.C,
      QV = ["forward", "backward", "left", "right", "sprint"],
      GV = bb => bb.ctrlKey || bb.altKey || "Alt" === bb.key || "ArrowUp" === bb.key || "ArrowDown" === bb.key || "Tab" === bb.code || "/" === bb.key || "Slash" === bb.code;
    class qV {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(Cb.X).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(bb) {
        this.armed = bb
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || wb ? !bb.repeat && this.swallowedKeys.delete(bb.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(bb.code),
          continues: !1
        } : "Escape" === bb.key || bb.repeat && !this.swallowedKeys.has(bb.code) ? {
          swallow: !1,
          continues: !1
        } : Mb ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(bb.code), {
          swallow: !0,
          continues: (0, tb.j)(bb)
        })
      }
      onKeyUp(bb) {
        return this.swallowedKeys.delete(bb.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Hb = (0, Cb.s)(bb.values, this.previousHeld),
          pb = null === Mb ? -1 : (0, Cb.q)(Mb),
          Vb = pb >= 0 && Hb[pb] && !this.previousHeld[pb],
          gb = Hb.some(((bb, wb) => bb && !this.previousHeld[wb] && wb !== pb)),
          lb = Math.hypot(bb.leftStick.x, bb.leftStick.y) >= vV,
          Lb = Math.hypot(bb.rightStick.x, bb.rightStick.y) >= vV,
          Ib = lb && !this.leftStickWasPressed || Lb && !this.rightStickWasPressed;
        this.previousHeld = Hb, this.leftStickWasPressed = lb, this.rightStickWasPressed = Lb;
        let Ob = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, Ob = !0);
        const Ub = !wb && Vb && !eb,
          tb = !Ub && this.armed && !wb && (gb || Ib);
        return (Ub || tb) && (this.consumeNextFrame = !0, this.consumeAfterContinue = tb, Ob = !0), {
          continues: tb,
          back: Ub,
          consumeHeld: Ob
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const aV = new Set([...NV.j, ...NV.v]),
      iV = bb => ((bb, wb, Mb) => {
        const eb = Object.keys(wb).filter((eb => !Mb.has(eb) && wb[eb].includes(bb)));
        return eb.length > 0 && eb.every((bb => QV.includes(bb)))
      })(bb, NV.p, aV),
      uV = (bb, wb, Mb) => {
        const eb = new qV,
          Hb = bb => {
            if (!bb.isTrusted) return;
            const {
              swallow: Mb,
              continues: Hb
            } = eb.onKeyDown(bb, !(0, tb.K)(bb) || (0, wH.k)() || (0, LM.q)(), iV(bb.code));
            Mb && (bb.stopImmediatePropagation(), GV(bb) && bb.preventDefault()), Hb && ((0, tb.A)("keyboardMouse"), wb())
          },
          pb = bb => {
            bb.isTrusted && eb.onKeyUp(bb) && (bb.stopImmediatePropagation(), GV(bb) && bb.preventDefault())
          },
          gb = () => {
            eb.forgetKeys()
          };
        window.addEventListener("keydown", Hb, !0), window.addEventListener("keyup", pb, !0), window.addEventListener("blur", gb);
        const lb = Vb.e.onFrame((bb => {
            const Hb = Ob.d.getActiveConsumerName(),
              pb = Mb(),
              Vb = pb ? (0, Ib.h)("menuBack") : null,
              gb = null !== Hb && "gameplay" !== Hb,
              {
                continues: lb,
                back: Lb,
                consumeHeld: Cb
              } = eb.onPadFrame(bb, gb, Vb, (0, tb.p)(bb));
            if (Cb) {
              const bb = (0, Ub.h)().swapSticks ? "right" : "left";
              Ob.d.consumeAllHeld(eb.consumeLeavesMoveStick() ? bb : null)
            }
            Lb ? null === pb || void 0 === pb || pb() : lb && wb()
          })),
          Lb = (0, wH.l)(`pressToContinue:${bb}`, (() => eb.blocksGameplay()));
        return {
          setArmed: bb => {
            eb.setArmed(bb)
          },
          dispose: () => {
            window.removeEventListener("keydown", Hb, !0), window.removeEventListener("keyup", pb, !0), window.removeEventListener("blur", gb), lb(), Lb()
          }
        }
      };
    var dV = Mb(6050),
      PV = Mb(4818),
      nV = Mb(4490),
      yV = Mb(9547);
    const oV = bb => {
        let {
          text: wb
        } = bb;
        return (0, vb.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: wb
        })
      },
      TV = bb => {
        let {
          label: wb,
          hint: Mb,
          options: eb,
          value: pb,
          onChange: Vb
        } = bb;
        const {
          t: gb
        } = (0, Hb.C)();
        return (0, vb.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, vb.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, vb.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, vb.jsx)("div", {
                className: "SliderText",
                children: wb
              }), Mb && (0, vb.jsx)("div", {
                className: "ControllerSettingsHint",
                children: Mb
              })]
            }), (0, vb.jsx)(nV.c, {
              options: eb.map((bb => ({
                label: "label" in bb ? bb.label : gb(bb.labelKey),
                value: bb.value
              }))),
              value: pb,
              onChange: bb => {
                Vb(bb.value)
              }
            })]
          })
        })
      },
      kV = bb => {
        let {
          settingKey: wb,
          label: Mb,
          range: eb,
          format: Hb
        } = bb;
        const pb = (0, Ub.r)();
        return (0, vb.jsx)(dV.j, {
          name: Mb,
          min: eb.min,
          max: eb.max,
          step: eb.step,
          padStep: eb.step,
          initValue: pb[wb],
          format: Hb,
          onChange: bb => {
            (0, Ub.n)({
              [wb]: (0, yV.t)(bb, eb)
            })
          }
        })
      };
    var bg = Mb(10183),
      wg = Mb(10188);
    const Mg = bb => bb instanceof DOMException && ("SecurityError" === bb.name || "NotAllowedError" === bb.name),
      eg = bb => {
        const [wb] = [...bb.controllers].sort(((bb, wb) => wg.o[bb] - wg.o[wb]));
        return wg.m[wb]
      },
      Hg = bb => {
        (0, bg.c)().allowPhoneMotion().catch((wb => {
          bb && Mg(wb) ? bb() : console.warn("Could not enable the motion sensor", wb)
        }))
      },
      pg = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      Vg = bb => {
        let {
          status: wb
        } = bb;
        const {
          t: Mb
        } = (0, Hb.C)(), [eb, pb] = (0, Jb.useState)(null), Vb = `${wb.controllers.join(",")}|${wb.phoneMotion}`;
        (0, Jb.useEffect)((() => {
          pb(null)
        }), [Vb]);
        const gb = () => {
          (0, bg.c)().connectController().then((bb => {
            pb(bb > 0 ? "openFailed" : null)
          })).catch((bb => {
            Mg(bb) ? pb("needsClick") : console.warn("Could not connect motion controller", bb)
          }))
        };
        if (wb.hidSupported) {
          let bb = Mb("controller:settingsGyroConnectHint");
          return "needsClick" === eb ? bb = Mb("controller:settingsGyroConnectNeedsClick") : "openFailed" === eb ? bb = Mb("controller:settingsGyroOpenFailed") : wb.controllers.length > 0 && (bb = Mb("controller:settingsGyroConnected", {
            name: eg(wb)
          })), (0, vb.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, vb.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, vb.jsx)("div", {
                className: "ControllerSettingsHint",
                children: bb
              }), (0, vb.jsx)(fV.f, {
                onClick: gb,
                children: Mb("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === wb.phoneMotion) return (0, vb.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, vb.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === eb && (0, vb.jsx)("div", {
              className: "ControllerSettingsHint",
              children: Mb("controller:settingsGyroAllowNeedsTap")
            }), (0, vb.jsx)(fV.f, {
              onClick: () => {
                Hg((() => {
                  pb("needsTap")
                }))
              },
              children: Mb("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const lb = pg[wb.phoneMotion];
        return lb ? (0, vb.jsx)("div", {
          className: "ControllerSettingsHint",
          children: Mb(lb)
        }) : null
      },
      gg = () => {
        const {
          t: bb
        } = (0, Hb.C)(), wb = (0, Ub.r)(), Mb = (0, bg.g)(), eb = (0, tb.I)(), pb = !Mb.hidSupported && Mb.phoneSupported && !Mb.padConnected, Vb = (Mb.hidSupported || Mb.phoneSupported) && !pb, gb = (0, Ib.h)("pause");
        return (0, vb.jsxs)(vb.Fragment, {
          children: [(0, vb.jsx)(oV, {
            text: bb("controller:settingsGyro")
          }), pb && (0, vb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: bb("controller:settingsGyroPhoneNeedsController")
          }), !Vb && !pb && (0, vb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: bb(Mb.hidBlocked || Mb.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), Vb && (0, vb.jsx)(dV.d, {
            label: bb(Mb.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: wb.gyroAiming,
            onClick: bb => {
              var wb, Mb;
              (0, Ub.n)({
                gyroAiming: bb
              });
              const eb = null === (wb = null === (Mb = navigator.userActivation) || void 0 === Mb ? void 0 : Mb.isActive) || void 0 === wb || wb;
              if (!bb || !eb) return;
              const Hb = (0, bg.c)(),
                pb = Hb.getStatus();
              pb.hidSupported ? Hb.connectControllerIfNoneGranted().catch((bb => {
                console.warn("Motion controller picker unavailable", bb)
              })) : "needsPermission" === pb.phoneMotion && Hg()
            },
            circleInfoText: bb(Mb.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), Vb && Mb.hidSupported && (0, vb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: bb("controller:settingsGyroSteamHint")
          }), Vb && wb.gyroAiming && (0, vb.jsxs)(vb.Fragment, {
            children: [(0, vb.jsx)(Vg, {
              status: Mb
            }), (0, vb.jsx)(kV, {
              settingKey: "gyroSensitivity",
              label: bb("controller:settingsGyroSensitivity"),
              range: yV.R,
              format: yV.H
            }), (0, vb.jsx)(TV, {
              label: bb("controller:settingsGyroActivation"),
              hint: "aiming" === wb.gyroActivation && (0, vb.jsx)(PV.b, {
                text: bb("controller:settingsGyroAimingHint", {
                  button: PV.c
                }),
                glyph: (0, Ib.h)("use")
              }),
              options: yV.P,
              value: wb.gyroActivation,
              onChange: bb => {
                (0, Ub.n)({
                  gyroActivation: bb
                })
              }
            }), "button" === wb.gyroActivation && (0, vb.jsx)(TV, {
              label: bb("controller:settingsGyroButton"),
              hint: bb("controller:settingsGyroButtonHint"),
              options: yV.m.filter((bb => bb !== gb || bb === wb.gyroButton)).map((bb => ({
                label: XH(eb, bb),
                value: bb
              }))),
              value: wb.gyroButton,
              onChange: bb => {
                (0, Ub.n)({
                  gyroButton: bb
                })
              }
            })]
          })]
        })
      };
    var lg = Mb(2062);
    const Lg = () => {
      const {
        t: bb
      } = (0, Hb.C)(), wb = (0, Ub.r)(), Mb = (0, tb.I)();
      return (0, vb.jsxs)(vb.Fragment, {
        children: [(0, vb.jsx)(oV, {
          text: bb("controller:settingsAccessibility")
        }), (0, vb.jsx)(dV.d, {
          label: bb("controller:settingsSwapConfirmBack"),
          checked: (0, Ib.G)(wb.swapConfirmBack, Mb),
          onClick: bb => {
            (0, Ub.n)({
              swapConfirmBack: bb === (0, Ib.G)(null, Mb) ? null : bb
            }), lg.j.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: bb("controller:settingsSwapConfirmBackInfo")
        }), (0, vb.jsx)(TV, {
          label: bb("controller:settingsButtonRepeat"),
          hint: bb("controller:settingsButtonRepeatHint"),
          options: yV.j,
          value: wb.buttonRepeat,
          onChange: bb => {
            (0, Ub.n)({
              buttonRepeat: bb
            })
          }
        }), (0, vb.jsx)(TV, {
          label: bb("controller:settingsTapHoldTime"),
          hint: bb("controller:settingsTapHoldTimeHint"),
          options: yV.zb,
          value: wb.tapHoldTime,
          onChange: bb => {
            (0, Ub.n)({
              tapHoldTime: bb
            })
          }
        }), (0, vb.jsx)(TV, {
          label: bb("controller:settingsEmoteButton"),
          hint: bb("wheel" === wb.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: yV.C,
          value: wb.emoteButton,
          onChange: bb => {
            (0, Ub.n)({
              emoteButton: bb
            })
          }
        }), (0, vb.jsx)(TV, {
          label: bb("controller:settingsAttackMode"),
          hint: bb("toggle" === wb.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: yV.h,
          value: wb.attackMode,
          onChange: bb => {
            (0, Ub.n)({
              attackMode: bb
            })
          }
        }), (0, vb.jsx)(dV.d, {
          label: bb("controller:settingsLargePointer"),
          checked: wb.largePointer,
          onClick: bb => {
            (0, Ub.n)({
              largePointer: bb
            })
          },
          circleInfoText: bb("controller:settingsLargePointerInfo")
        })]
      })
    };
    var Ig = Mb(10196);
    const Og = new class {
        constructor(bb) {
          this.router = bb, this.current = null
        }
        claim(bb, wb) {
          const Mb = this.current;
          Mb && (this.current = null, Mb.release(), Mb.onTakenOver());
          const eb = this.router.register({
              ...bb,
              name: "capture"
            }),
            Hb = {
              release: eb,
              onTakenOver: wb
            };
          return this.current = Hb, () => {
            this.current === Hb && (this.current = null), eb()
          }
        }
      }(Ob.d),
      Ug = bb => {
        (0, Jb.useEffect)((() => {
          if (!bb) return;
          const wb = bb();
          let Mb = !1;
          const eb = () => {
              Mb || (Mb = !0, wb.onEnd())
            },
            Hb = Og.claim({
              isActive: () => !Mb,
              onFrame: bb => {
                wb.onFrame(bb, eb)
              }
            }, eb),
            pb = void 0 === wb.timeoutMs ? void 0 : window.setTimeout(eb, wb.timeoutMs),
            Vb = bb => {
              "Escape" === bb.key && (bb.preventDefault(), bb.stopPropagation(), eb())
            };
          return window.addEventListener("keydown", Vb, !0), () => {
            Mb = !0, Hb(), window.clearTimeout(pb), window.removeEventListener("keydown", Vb, !0)
          }
        }), [bb])
      },
      tg = bb => {
        let {
          row: wb,
          capturing: Mb,
          onCapture: eb,
          holdFillRef: pb,
          onRebind: Vb,
          swapped: gb
        } = bb;
        const {
          t: lb
        } = (0, Hb.C)();
        if ("fixed" === wb.kind) return (0, vb.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, vb.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, vb.jsx)("div", {
              className: "ControlName",
              children: lb(wb.labelKey)
            }), (0, vb.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, vb.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, vb.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, vb.jsx)(xH, {
                    glyph: "move" === wb.stick ? (0, Ib.q)() : (0, Ib.o)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: Lb
        } = wb, Ob = (0, Ib.h)(Lb), Ub = (0, Ib.j)(Lb), tb = Ob !== Ub && (0, Ib.c)(Lb, Ub);
        return (0, vb.jsxs)("div", {
          className: Nb()("ControlRow PadControlRow", {
            Capturing: Mb
          }),
          children: [(0, vb.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, vb.jsx)("div", {
              className: "ControlName",
              children: lb(yV.f[Lb])
            }), (0, vb.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!Mb && (0, vb.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, vb.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    eb(Lb)
                  },
                  children: (0, vb.jsx)(xH, {
                    glyph: Ob
                  })
                }), tb && (0, vb.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: lb("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Vb(Lb, Ub)
                  },
                  children: (0, vb.jsx)(YV.b, {
                    name: "arrows-rotate"
                  })
                })]
              }), Mb && (0, vb.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, vb.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, vb.jsx)("span", {
                    children: lb("controller:settingsCapturePrompt")
                  }), (0, vb.jsx)("div", {
                    ref: pb,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, vb.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    eb(null)
                  },
                  children: "\xd7"
                })]
              }), Mb && (0, vb.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, vb.jsx)(PV.b, {
                  text: lb((0, Ib.c)(Lb, (0, Ib.h)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: PV.c
                  }),
                  glyph: (0, Ib.h)("menuBack")
                })
              })]
            })]
          }), gb.map((bb => (0, vb.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, vb.jsx)(PV.b, {
              text: lb("controller:settingsSwapNotice", {
                action: lb(yV.f[bb]),
                button: PV.c
              }),
              glyph: (0, Ib.h)(bb)
            })
          }, bb))), Mb && (0, vb.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${yV.p}ms`
            }
          })]
        })
      },
      Cg = [],
      Eg = bb => {
        let {
          layoutSetting: wb
        } = bb;
        const {
          t: Mb
        } = (0, Hb.C)(), eb = (0, Ub.r)();
        (0, tb.I)();
        const pb = (0, Jb.useRef)(null),
          [Vb, gb] = (0, Jb.useState)(null),
          lb = (0, Jb.useCallback)(((bb, wb) => {
            const Mb = (0, Ub.h)().bindings;
            (0, Ib.B)(bb, wb);
            const eb = (0, Ib.u)(Mb, bb);
            gb(eb.length > 0 ? {
              action: bb,
              swapped: eb
            } : null)
          }), []),
          [Lb, Eb] = ((bb, wb) => {
            const [Mb, eb] = (0, Jb.useState)(null), Hb = (0, Jb.useMemo)((() => Mb ? () => {
              const Hb = (0, Ib.h)("menuBack"),
                pb = new yV.b(Hb, (0, Ib.h)("menuConfirm"), (bb => (0, Ib.c)(Mb, bb)));
              return {
                onFrame: (eb, Vb) => {
                  var gb;
                  const lb = eb.frame.timestampMs,
                    Lb = pb.update({
                      ...eb,
                      isDown: bb => (0, Cb.I)(eb.frame.values, bb)
                    }, lb);
                  null === (gb = bb.current) || void 0 === gb || gb.style.setProperty("width", 100 * pb.getBindHoldProgress(lb) + "%"), Lb && ("bind" === Lb.kind ? (Ob.d.consumeButton(Lb.button), wb(Mb, Lb.button)) : Ob.d.consumeButton(Hb), Vb())
                },
                onEnd: () => {
                  eb(null)
                },
                timeoutMs: yV.p
              }
            } : null), [Mb, bb, wb]);
            return Ug(Hb), [Mb, eb]
          })(pb, lb),
          Fb = bb => {
            bb && gb(null), Eb(bb)
          };
        (0, Jb.useEffect)((() => {
          if (!Vb) return;
          const bb = window.setTimeout((() => {
            gb(null)
          }), yV.vb);
          return () => {
            window.clearTimeout(bb)
          }
        }), [Vb]);
        const Bb = !eb.swapSticks && 0 === Object.keys(eb.bindings).length;
        return (0, vb.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, vb.jsx)("div", {
            className: "SliderText",
            children: Mb("controller:settingsRemap")
          }), (0, vb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: Mb("controller:settingsRemapHint")
          }), (0, vb.jsx)(fV.Q, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: Bb,
            onClick: () => {
              Fb(null), gb(null), (0, Ib.D)()
            },
            children: Mb("controller:settingsResetAll")
          }), wb, yV.jb.map(((bb, wb) => (0, vb.jsx)(Ig.c, {
            title: Mb(bb.titleKey),
            defaultOpen: 0 === wb,
            children: bb.rows.map((bb => (0, vb.jsx)(tg, {
              row: bb,
              capturing: "action" === bb.kind && bb.action === Lb,
              onCapture: Fb,
              holdFillRef: pb,
              onRebind: lb,
              swapped: "action" === bb.kind && (null === Vb || void 0 === Vb ? void 0 : Vb.action) === bb.action ? Vb.swapped : Cg
            }, "action" === bb.kind ? bb.action : bb.labelKey)))
          }, bb.titleKey)))]
        })
      },
      Fg = bb => {
        let {
          deadzone: wb,
          dotRef: Mb,
          labelKey: eb
        } = bb;
        const {
          t: pb
        } = (0, Hb.C)();
        return (0, vb.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, vb.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, vb.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * wb + "%",
                height: 100 * wb + "%"
              }
            }), (0, vb.jsx)("div", {
              ref: Mb,
              className: "ControllerTesterDot"
            })]
          }), (0, vb.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: pb(eb)
          })]
        })
      },
      Bg = (bb, wb, Mb, eb) => {
        var Hb;
        bb && (bb.style.left = 50 + 50 * Math.max(-1, Math.min(1, wb.x)) + "%", bb.style.top = 50 + 50 * Math.max(-1, Math.min(1, wb.y)) + "%", null === (Hb = bb.parentElement) || void 0 === Hb || Hb.classList.toggle("Active", eb || Math.hypot(wb.x, wb.y) > Mb))
      },
      sg = bb => {
        const wb = {
            deadzone: bb.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          Mb = {
            deadzone: bb.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return bb.swapSticks ? {
          left: Mb,
          right: wb
        } : {
          left: wb,
          right: Mb
        }
      },
      mg = () => {
        const {
          t: bb
        } = (0, Hb.C)(), wb = (() => {
          const [bb, wb] = (0, Jb.useState)((() => Vb.e.getActivePad()));
          return (0, BH.e)(Vb.b, (() => {
            wb(Vb.e.getActivePad())
          })), bb
        })(), Mb = sg((0, Ub.r)()), eb = (0, Jb.useRef)(null), pb = (0, Jb.useRef)(null), gb = (0, Jb.useRef)([]), lb = (0, Jb.useRef)(null), Lb = (0, Jb.useRef)(null), [tb, Eb] = (bb => {
          const [wb, Mb] = (0, Jb.useState)(!1), eb = (0, Jb.useMemo)((() => wb ? () => {
            const wb = (0, Ib.h)("menuBack"),
              eb = new yV.e;
            return {
              onFrame: (Mb, Hb) => {
                var pb;
                const Vb = eb.update({
                  pressed: Mb.wasPressed(wb),
                  dg: Mb.isHeld(wb)
                }, Mb.frame.timestampMs);
                null === (pb = bb.current) || void 0 === pb || pb.style.setProperty("width", 100 * Vb + "%"), Vb >= 1 && (Ob.d.consumeButton(wb), Hb())
              },
              onEnd: () => {
                Mb(!1)
              }
            }
          } : null), [wb, bb]);
          return Ug(eb), [wb, Mb]
        })(pb);
        (0, Jb.useEffect)((() => {
          const bb = bb => {
            for (const Mb of Cb._) {
              const wb = (0, Cb.q)(Mb),
                eb = gb.current[wb];
              if (!eb) continue;
              const Hb = bb.values[wb];
              eb.classList.toggle("Pressed", Hb >= Cb.C), (0, Cb.K)(wb) && eb.style.setProperty("--trigger-fill", `${Math.round(100*Hb)}%`)
            }
            const wb = sg((0, Ub.h)());
            Bg(lb.current, bb.leftStick, wb.left.deadzone, bb.values[(0, Cb.q)("LS")] >= Cb.C), Bg(Lb.current, bb.rightStick, wb.right.deadzone, bb.values[(0, Cb.q)("RS")] >= Cb.C)
          };
          return wb || bb((0, Cb.z)()), Vb.e.onFrame(bb)
        }), [wb]), (0, Jb.useEffect)((() => {
          wb || Eb(!1)
        }), [wb, Eb]), (0, Jb.useEffect)((() => {
          var bb;
          tb && (null === (bb = eb.current) || void 0 === bb || bb.scrollIntoView({
            block: "nearest"
          }))
        }), [tb]);
        const Fb = yV.db.find((bb => bb.value === (null === wb || void 0 === wb ? void 0 : wb.family)));
        return (0, vb.jsxs)("div", {
          ref: eb,
          className: Nb()("SettingBox ControllerTester", {
            Testing: tb
          }),
          children: [(0, vb.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, vb.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [wb && (0, vb.jsx)("div", {
                children: bb("controller:settingsTesterFamily", {
                  family: Fb ? bb(Fb.labelKey) : wb.family
                })
              }), wb && (0, vb.jsx)("div", {
                className: "ControllerTesterPadId",
                children: wb.id
              }), !wb && (0, vb.jsx)("div", {
                children: bb("controller:settingsTesterNoPad")
              })]
            }), (wb || tb) && (0, vb.jsx)(fV.f, {
              className: "ControllerTesterToggle",
              onClick: () => {
                Eb(!tb)
              },
              children: bb(tb ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), wb && !tb && (0, vb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: bb("controller:settingsTesterHint")
          }), tb && (0, vb.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, vb.jsx)(PV.b, {
              text: bb("controller:settingsTesterTesting", {
                button: PV.c
              }),
              glyph: (0, Ib.h)("menuBack")
            }), (0, vb.jsx)("div", {
              ref: pb,
              className: "ControllerTesterExitFill"
            })]
          }), (0, vb.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, vb.jsx)(Fg, {
              deadzone: Mb.left.deadzone,
              dotRef: lb,
              labelKey: Mb.left.labelKey
            }), (0, vb.jsx)("div", {
              className: "ControllerTesterButtons",
              children: Cb._.map((bb => {
                const Mb = (0, Cb.q)(bb);
                return (0, vb.jsx)("div", {
                  ref: bb => {
                    gb.current[Mb] = bb
                  },
                  className: (0, Cb.K)(Mb) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, vb.jsx)(xH, {
                    glyph: bb,
                    family: null === wb || void 0 === wb ? void 0 : wb.family
                  })
                }, bb)
              }))
            }), (0, vb.jsx)(Fg, {
              deadzone: Mb.right.deadzone,
              dotRef: Lb,
              labelKey: Mb.right.labelKey
            })]
          })]
        })
      },
      hg = (0, Jb.memo)((function() {
        const {
          t: bb
        } = (0, Hb.C)(), wb = (0, Ub.r)(), [Mb, eb] = (0, Jb.useState)(!1);
        return (0, Jb.useEffect)((() => {
          if (!Mb) return;
          const bb = window.setTimeout((() => {
            eb(!1)
          }), yV.vb);
          return () => {
            window.clearTimeout(bb)
          }
        }), [Mb]), (0, vb.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, vb.jsx)(oV, {
            text: bb("controller:settingsLook")
          }), (0, vb.jsx)(kV, {
            settingKey: "lookSensitivityX",
            label: bb("controller:settingsLookSensitivityX"),
            range: yV.nb,
            format: yV.L
          }), (0, vb.jsx)(kV, {
            settingKey: "lookSensitivityY",
            label: bb("controller:settingsLookSensitivityY"),
            range: yV.nb,
            format: yV.L
          }), (0, vb.jsx)(kV, {
            settingKey: "aimLookSensitivity",
            label: bb("controller:settingsAimLookSensitivity"),
            range: yV.g,
            format: yV.L
          }), (0, vb.jsx)(TV, {
            label: bb("controller:settingsLookCurve"),
            hint: bb("controller:settingsLookCurveHint"),
            options: yV._,
            value: wb.lookCurve,
            onChange: bb => {
              (0, Ub.n)({
                lookCurve: bb
              })
            }
          }), (0, vb.jsx)(dV.d, {
            label: bb("controller:settingsInvertLookX"),
            checked: wb.invertLookX,
            onClick: bb => {
              (0, Ub.n)({
                invertLookX: bb
              })
            }
          }), (0, vb.jsx)(dV.d, {
            label: bb("controller:settingsInvertLookY"),
            checked: wb.invertLookY,
            onClick: bb => {
              (0, Ub.n)({
                invertLookY: bb
              })
            }
          }), (0, vb.jsx)(kV, {
            settingKey: "lookDeadzone",
            label: bb("controller:settingsLookDeadzone"),
            range: yV.z,
            format: yV.F
          }), (0, vb.jsx)(gg, {}), (0, vb.jsx)(oV, {
            text: bb("controller:settingsMovement")
          }), (0, vb.jsx)(kV, {
            settingKey: "moveDeadzone",
            label: bb("controller:settingsMoveDeadzone"),
            range: yV.z,
            format: yV.F
          }), (0, vb.jsx)(dV.d, {
            label: bb("controller:settingsAutoSprint"),
            checked: wb.autoSprint,
            onClick: bb => {
              (0, Ub.n)({
                autoSprint: bb
              })
            },
            circleInfoText: bb("controller:settingsAutoSprintInfo")
          }), (0, vb.jsx)(TV, {
            label: bb("controller:settingsSneak"),
            options: yV.rb,
            value: wb.sneakMode,
            onChange: bb => {
              (0, Ub.n)({
                sneakMode: bb
              })
            }
          }), (0, vb.jsx)(oV, {
            text: bb("controller:settingsButtons")
          }), (0, vb.jsx)(TV, {
            label: bb("controller:settingsPromptFamily"),
            options: yV.db,
            value: wb.promptFamily,
            onChange: bb => {
              (0, Ub.n)({
                promptFamily: bb
              })
            }
          }), (0, vb.jsx)(dV.d, {
            label: bb("controller:settingsHideButtonHints"),
            checked: wb.hideButtonHints,
            onClick: bb => {
              (0, Ub.n)({
                hideButtonHints: bb
              })
            }
          }), (0, vb.jsx)(dV.d, {
            label: bb("controller:settingsVibration"),
            checked: wb.vibration,
            onClick: bb => {
              (0, Ub.n)({
                vibration: bb
              }), bb && VH("preview")
            }
          }), (0, vb.jsx)(kV, {
            settingKey: "cursorSpeed",
            label: bb("controller:settingsCursorSpeed"),
            range: yV.v,
            format: yV.L
          }), (0, vb.jsx)(dV.d, {
            label: bb("controller:settingsCursorMagnetism"),
            checked: wb.cursorMagnetism,
            onClick: bb => {
              (0, Ub.n)({
                cursorMagnetism: bb
              })
            }
          }), (0, vb.jsx)(dV.d, {
            label: bb("controller:settingsMenuBackToCategories"),
            checked: wb.menuBackToCategories,
            onClick: bb => {
              (0, Ub.n)({
                menuBackToCategories: bb
              })
            }
          }), (0, vb.jsx)(Eg, {
            layoutSetting: (0, vb.jsxs)(vb.Fragment, {
              children: [Ib.d.map((Mb => (0, vb.jsx)(dV.d, {
                label: bb(yV.W[Mb]),
                checked: (0, Ib.A)(Mb, wb),
                onClick: bb => {
                  eb(!(0, Ib.K)(Mb, bb))
                }
              }, Mb))), Mb && (0, vb.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: bb("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, vb.jsx)(Lg, {}), (0, vb.jsx)(oV, {
            text: bb("controller:settingsAlternatives")
          }), (0, vb.jsx)("div", {
            className: "ControllerSettingsHint",
            children: bb("controller:settingsAlternativesHint")
          }), (0, vb.jsx)(TV, {
            label: bb("controller:settingsMenuNavigation"),
            hint: bb("controller:settingsMenuNavigationHint"),
            options: yV.ab,
            value: wb.menuNavigation,
            onChange: bb => {
              (0, Ub.n)({
                menuNavigation: bb
              })
            }
          }), (0, vb.jsx)(TV, {
            label: bb("controller:settingsInventoryNavigation"),
            hint: bb("controller:settingsInventoryNavigationHint"),
            options: yV.T,
            value: wb.inventoryNavigation,
            onChange: bb => {
              (0, Ub.n)({
                inventoryNavigation: bb
              })
            }
          }), (0, vb.jsx)(TV, {
            label: bb("controller:settingsQuickChat"),
            hint: bb("controller:settingsQuickChatHint"),
            options: yV.fb,
            value: wb.quickChat,
            onChange: bb => {
              (0, Ub.n)({
                quickChat: bb
              })
            }
          }), (0, vb.jsx)(TV, {
            label: bb("controller:settingsLeaderboardButton"),
            hint: bb("controller:settingsLeaderboardButtonHint"),
            options: yV.Z,
            value: wb.leaderboardButton,
            onChange: bb => {
              (0, Ub.n)({
                leaderboardButton: bb
              })
            }
          }), (0, vb.jsx)(oV, {
            text: bb("controller:settingsTester")
          }), (0, vb.jsx)(mg, {})]
        })
      }));
    (0, Hb.d)(eb);
    for (const Kg of (0, pb.r)()) Kg.connected ? Vb.e.handleConnectionEvent(Kg) : Vb.e.handleDisconnectionEvent(Kg);
    const zg = () => null !== Vb.e.getActivePad(),
      Xg = () => pM.getState(),
      xg = () => pM.isSteppingSlots(),
      jg = (bb, wb) => {
        const Mb = bH.getFocused();
        bH.isActive() && Mb && bb.contains(Mb) && bH.setFocus(wb, {
          scroll: !1
        })
      }
  },
  9522: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => lb,
      f: () => Lb
    });
    var eb = Mb(1590),
      Hb = Mb(1581);
    const pb = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      Vb = "28de",
      gb = new Set(["1205"]),
      lb = (bb, wb) => {
        const Mb = (0, eb.d)(bb);
        if ((null === Mb || void 0 === Mb ? void 0 : Mb.vendor) === Vb) return gb.has(Mb.product) ? "steamdeck" : "xbox";
        if (Mb && pb[Mb.vendor]) return pb[Mb.vendor];
        if ((0, Hb.d)(bb)) return "nintendo";
        const lb = `${bb} ${null!==wb&&void 0!==wb?wb:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(lb) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(lb) ? "nintendo" : /steam deck/.test(lb) ? "steamdeck" : "xbox"
      },
      Lb = bb => {
        var wb;
        return (null === (wb = (0, eb.d)(bb)) || void 0 === wb ? void 0 : wb.vendor) === Vb
      }
  },
  9557: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Lb,
      h: () => gb
    });
    var eb = Mb(9515);
    const Hb = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      pb = new Set(["capture", "gameplay"]),
      Vb = ["Up", "Down", "Left", "Right"],
      gb = bb => Vb.includes(bb),
      lb = .25;
    const Lb = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.dg = new Array(eb.X).fill(!1), this.previousHeld = new Array(eb.X).fill(!1), this.consumedButtons = new Array(eb.X).fill(!1), this.suppressedReleases = new Array(eb.X).fill(!1), this.wakeOwned = new Array(eb.X).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, eb.z)()
      }
      register(bb) {
        return this.consumers.has(bb.name) && console.warn(`Controller consumer "${bb.name}" registered twice; the newer one replaces it.`), this.consumers.set(bb.name, bb), () => {
          var wb;
          this.consumers.get(bb.name) === bb && (this.activeName === bb.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (wb = this.peek) || void 0 === wb ? void 0 : wb.over) === bb.name && (this.peek = null), this.consumers.delete(bb.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(bb) {
        return this.dg[(0, eb.q)(bb)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.dg = new Array(eb.X).fill(!1), this.previousHeld = new Array(eb.X).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, eb.z)()
      }
      dispatch(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = bb, this.previousHeld = this.dg, this.dg = (0, eb.s)(bb.values, this.previousHeld);
        for (let pb = 0; pb < eb.X; pb++) this.suppressedReleases[pb] = !this.dg[pb] && this.consumedButtons[pb], this.dg[pb] || (this.consumedButtons[pb] = !1), this.wakeOwned[pb] && (this.dg[pb] ? (this.consumedButtons[pb] = !0, this.wakeOwned[pb] = !1) : bb.values[pb] < eb.W && (this.wakeOwned[pb] = !1));
        Math.hypot(bb.leftStick.x, bb.leftStick.y) < lb && (this.leftStickConsumed = !1), Math.hypot(bb.rightStick.x, bb.rightStick.y) < lb && (this.rightStickConsumed = !1);
        const Hb = this.pickActive();
        if ((null === Hb || void 0 === Hb ? void 0 : Hb.name) !== this.activeName) {
          var Vb, gb, Lb, Ib, Ob, Ub;
          const bb = this.activeName,
            wb = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            Mb = null !== (Vb = null === Hb || void 0 === Hb || null === (gb = Hb.peek) || void 0 === gb ? void 0 : gb.call(Hb)) && void 0 !== Vb ? Vb : null,
            pb = null === bb && !!Mb && !(null === (Lb = this.consumers.get(Mb.over)) || void 0 === Lb || !Lb.onPeekFrame),
            lb = Mb && (Mb.over === bb || pb) ? Mb : null,
            tb = null !== this.peek && this.peek.over === (null === Hb || void 0 === Hb ? void 0 : Hb.name) ? this.peek : null;
          this.deactivateCurrent(null !== lb, null !== tb), this.activeName = null !== (Ib = null === Hb || void 0 === Hb ? void 0 : Hb.name) && void 0 !== Ib ? Ib : null, null === bb || this.handOffPending || this.consumeAllHeld();
          const Cb = null === (Ob = null !== lb && void 0 !== lb ? lb : tb) || void 0 === Ob ? void 0 : Ob.stick;
          "left" === Cb && wb.left ? this.leftStickConsumed = !1 : "right" === Cb && wb.right && (this.rightStickConsumed = !1), this.peek = lb, Hb || null === bb ? Hb && (null === (Ub = this.idleResume) || void 0 === Ub ? void 0 : Ub.name) === Hb.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: bb,
            left: wb.left && this.leftStickConsumed,
            right: wb.right && this.rightStickConsumed
          }, Hb && (this.idleResume = null);
          for (let Hb = 0; Hb < eb.X; Hb++) this.previousHeld[Hb] && !this.dg[Hb] && (this.suppressedReleases[Hb] = !0)
        }
        var tb, Cb;
        (this.handOffPending = !1, Hb) && (Mb && !pb.has(Hb.name) && this.consumeWakePress(Hb), Hb.onFrame(this.buildInput(bb, wb, Mb)), this.peek && (null === (tb = this.consumers.get(this.peek.over)) || void 0 === tb || null === (Cb = tb.onPeekFrame) || void 0 === Cb || Cb.call(tb, this.buildInput(bb, wb, !1, this.peek.stick))))
      }
      consumeWakePress(bb) {
        for (let Hb = 0; Hb < eb.X; Hb++) {
          var wb, Mb;
          const pb = eb._[Hb];
          (null !== (wb = null === (Mb = bb.wakePressActs) || void 0 === Mb ? void 0 : Mb.call(bb, pb)) && void 0 !== wb ? wb : Vb.includes(pb)) || (this.dg[Hb] ? this.consumedButtons[Hb] = !0 : this.lastFrame.values[Hb] >= eb.S && (this.wakeOwned[Hb] = !0))
        }
      }
      pickActive() {
        for (const bb of Hb) {
          const wb = this.consumers.get(bb);
          if (wb && wb.isActive()) return wb
        }
        return null
      }
      deactivateCurrent() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var Mb, eb, Hb, pb;
        this.activeName && (null === (Mb = this.consumers.get(this.activeName)) || void 0 === Mb || null === (eb = Mb.onDeactivate) || void 0 === eb || eb.call(Mb, bb));
        this.peek && !wb && (null === (Hb = this.consumers.get(this.peek.over)) || void 0 === Hb || null === (pb = Hb.onDeactivate) || void 0 === pb || pb.call(Hb, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let Hb = 0; Hb < eb.X; Hb++) this.dg[Hb] && (this.consumedButtons[Hb] = !0);
        const {
          leftStick: wb,
          rightStick: Mb
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== bb && (this.leftStickConsumed || Math.hypot(wb.x, wb.y) >= lb), this.rightStickConsumed = "right" !== bb && (this.rightStickConsumed || Math.hypot(Mb.x, Mb.y) >= lb)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(bb) {
        const wb = (0, eb.q)(bb);
        this.dg[wb] && (this.consumedButtons[wb] = !0)
      }
      buildInput(bb, wb, Mb, Hb) {
        const pb = this.dg,
          Vb = this.previousHeld,
          gb = Hb ? new Array(eb.X).fill(!0) : [...this.consumedButtons],
          lb = Hb ? gb : [...this.suppressedReleases],
          Lb = !this.leftStickConsumed && (!Hb || "left" === Hb),
          Ib = !this.rightStickConsumed && (!Hb || "right" === Hb);
        return {
          frame: bb,
          dtMs: wb,
          isHeld: bb => {
            const wb = (0, eb.q)(bb);
            return pb[wb] && !gb[wb]
          },
          wasPressed: bb => {
            const wb = (0, eb.q)(bb);
            return pb[wb] && !Vb[wb] && !gb[wb]
          },
          wasReleased: bb => {
            const wb = (0, eb.q)(bb);
            return !pb[wb] && Vb[wb] && !lb[wb]
          },
          value: wb => {
            const Mb = (0, eb.q)(wb);
            return gb[Mb] ? 0 : bb.values[Mb]
          },
          leftStick: Lb ? bb.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: Ib ? bb.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: Mb
        }
      }
    }
  },
  9536: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Ob.f,
      d: () => Ob.g,
      h: () => Rb,
      j: () => Db,
      n: () => cb,
      r: () => Yb
    });
    var eb = Mb(64),
      Hb = Mb(29),
      pb = Mb(1611),
      Vb = Mb(43),
      gb = Mb(9542),
      lb = Mb(9515),
      Lb = Mb(9534),
      Ib = Mb(9513),
      Ob = Mb(2212),
      Ub = Mb(9547);
    const tb = {
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
      Cb = "controllerSettings",
      Eb = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      Fb = ["auto", ...gb.e],
      Bb = (bb, wb) => "string" === typeof wb && bb.includes(wb),
      sb = bb => wb => "number" === typeof wb && Number.isFinite(wb) ? (0, Ub.t)(wb, bb) : void 0,
      mb = bb => "boolean" === typeof bb ? bb : void 0,
      hb = bb => wb => Bb(bb, wb) ? wb : void 0,
      zb = {
        lookSensitivityX: sb(Ub.nb),
        lookSensitivityY: sb(Ub.nb),
        aimLookSensitivity: sb(Ub.g),
        invertLookX: mb,
        invertLookY: mb,
        lookCurve: hb(lb.O),
        lookDeadzone: sb(Ub.z),
        moveDeadzone: sb(Ub.z),
        swapSticks: mb,
        autoSprint: mb,
        sneakMode: hb(["toggle", "hold"]),
        tapHoldTime: hb(["short", "medium", "long"]),
        attackMode: hb(["hold", "toggle"]),
        promptFamily: hb(Fb),
        hideButtonHints: mb,
        vibration: mb,
        cursorSpeed: sb(Ub.v),
        cursorMagnetism: mb,
        buttonRepeat: hb(lb.r),
        largePointer: mb,
        menuBackToCategories: mb,
        swapConfirmBack: mb,
        menuNavigation: hb(["hybrid", "focus", "cursor"]),
        inventoryNavigation: hb(["hybrid", "slot", "cursor"]),
        quickChat: hb(["wheel", "off"]),
        leaderboardButton: hb(["shop", "leaderboard"]),
        gyroAiming: mb,
        gyroSensitivity: sb(Ub.R),
        gyroActivation: hb(["always", "aiming", "button"]),
        gyroButton: hb(lb._),
        emoteButton: hb(["tapHold", "wheel"])
      },
      Xb = [{
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
      xb = bb => {
        const wb = {};
        if ("object" !== typeof bb || null === bb) return wb;
        for (const [Mb, eb] of Object.entries(bb)) Object.prototype.hasOwnProperty.call(Lb.h, Mb) && Bb(lb._, eb) && (wb[Mb] = eb);
        return wb
      },
      jb = bb => {
        const wb = {};
        for (const Mb of Object.keys(tb))("bindings" === Mb ? Object.keys(bb.bindings).length > 0 : bb[Mb] !== tb[Mb]) && (wb[Mb] = bb[Mb]);
        0 !== Object.keys(wb).length ? Vb.i.setItem(Cb, wb) : Vb.i.removeItem(Cb)
      };
    let Kb = (() => {
        const bb = Vb.i.getItem(Cb),
          wb = (bb => {
            const wb = "object" === typeof bb && null !== bb ? bb : {},
              Mb = {
                ...tb,
                bindings: xb(wb.bindings)
              };
            for (const Hb of Object.keys(zb)) {
              const bb = zb[Hb](wb[Hb]);
              void 0 !== bb && (Mb[Hb] = bb)
            }
            const eb = Object.keys(wb).filter((bb => !!Object.prototype.hasOwnProperty.call(tb, bb) && ("bindings" === bb ? "object" !== typeof wb.bindings || null === wb.bindings || Object.keys(wb.bindings).length !== Object.keys(Mb.bindings).length : Mb[bb] !== wb[bb])));
            return eb.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${eb.join(", ")}`), Mb
          })(bb);
        return null !== bb && void 0 !== bb && jb(wb), wb
      })(),
      rb = {
        ...Kb,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const bb = {},
            wb = new URLSearchParams(window.location.search);
          for (const {
              param: Mb,
              key: eb
            }
            of Xb) {
            const Hb = zb[eb](wb.get(Mb));
            void 0 !== Hb && (bb[eb] = Hb)
          }
          return bb
        })()
      };
    const Rb = () => rb,
      Db = () => {
        var bb, wb;
        const Mb = Rb().promptFamily;
        return "auto" !== Mb ? Mb : null !== (bb = null === (wb = Ib.e.getActivePad()) || void 0 === wb ? void 0 : wb.family) && void 0 !== bb ? bb : "xbox"
      },
      cb = bb => {
        const wb = rb;
        Kb = {
          ...Kb,
          ...bb
        }, jb(Kb), rb = {
          ...rb,
          ...bb
        }, (bb => {
          Hb.k.iI(Ob.g, rb), Eb.some((wb => bb[wb] !== rb[wb])) && Hb.k.iI(Ob.f, rb)
        })(wb)
      },
      Yb = () => {
        const [bb, wb] = (0, eb.useState)(rb);
        return (0, pb.e)(Ob.g, wb), bb
      }
  },
  9996: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb
    });
    const eb = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      Hb = bb => eb.has(bb)
  },
  9513: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Eb.d,
      e: () => mb
    });
    var eb = Mb(9515),
      Hb = Mb(9522);
    const pb = .1,
      Vb = .3;
    class gb {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(bb, wb) {
        const Mb = null === this.lastMs ? 0 : Math.min(Math.max(0, wb - this.lastMs), 100);
        this.lastMs = wb;
        const eb = Math.hypot(bb.x, bb.y);
        if (eb >= Vb) return this.anchor = null, void(this.returning = !0);
        eb >= pb || (this.returning = !1);
        const Hb = this.anchor;
        if (!Hb || Math.hypot(bb.x - Hb.x, bb.y - Hb.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: bb.x,
          y: bb.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += Mb, this.steadyMs < 1e3) return;
        const gb = Math.max(eb, Math.hypot(Hb.x, Hb.y));
        gb < pb ? this.deadzone = 0 : this.returning && (this.deadzone = gb + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(bb) {
        return Math.hypot(bb.x, bb.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : bb
      }
    }
    const lb = (bb, wb) => {
        var Mb, eb;
        return null !== (Mb = bb && (null === (eb = Object.getOwnPropertyDescriptor(bb, wb)) || void 0 === eb ? void 0 : eb.get)) && void 0 !== Mb ? Mb : null
      },
      Lb = bb => {
        const wb = bb.vendorName;
        return "string" === typeof wb ? wb : void 0
      },
      Ib = ((bb, wb) => {
        const Mb = lb(bb, "index"),
          eb = lb(bb, "id"),
          Hb = lb(bb, "connected"),
          pb = lb(bb, "mapping"),
          Vb = lb(bb, "buttons"),
          gb = lb(bb, "axes"),
          Ib = lb(wb, "pressed"),
          Ob = lb(wb, "value");
        return Mb && eb && Hb && pb && Vb && gb && Ib && Ob ? bb => {
          const wb = Vb.call(bb),
            lb = gb.call(bb),
            Ub = {
              index: Number(Mb.call(bb)),
              id: String(eb.call(bb)),
              connected: !0 === Hb.call(bb),
              mapping: String(pb.call(bb)),
              buttons: [],
              axes: [],
              vendorName: Lb(bb)
            };
          for (let Mb = 0; Mb < wb.length; Mb++) Ub.buttons.push({
            pressed: !0 === Ib.call(wb[Mb]),
            value: Number(Ob.call(wb[Mb]))
          });
          for (let Mb = 0; Mb < lb.length; Mb++) Ub.axes.push(Number(lb[Mb]));
          return Ub
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      Ob = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var Ub = Mb(1575),
      tb = Mb(1581);
    const Cb = bb => ({
      pressed: bb,
      value: bb ? 1 : 0
    });
    var Eb = Mb(2212);
    const Fb = Vb,
      Bb = bb => {
        const wb = new Array(eb.X).fill(0);
        for (let Mb = 0; Mb < eb.X && Mb < bb.buttons.length; Mb++) {
          const Hb = bb.buttons[Mb];
          wb[Mb] = Hb.pressed && !(0, eb.K)(Mb) ? Math.max(Hb.value, eb.C) : Hb.value
        }
        return wb
      },
      sb = (bb, wb) => {
        var Mb, eb;
        return {
          x: null !== (Mb = bb.axes[wb]) && void 0 !== Mb ? Mb : 0,
          y: null !== (eb = bb.axes[wb + 1]) && void 0 !== eb ? eb : 0
        }
      };
    const mb = new class {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ib;
        this.readGamepads = bb, this.requireTrustedPads = wb, this.nativeReader = Mb, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = bb => {
          bb.isTrusted && this.trustedIndices.add(bb.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = bb => {
          this.trustedIndices.delete(bb.gamepad.index)
        }, this.sO = bb => {
          if (this.rafId = 0, !this.running) return;
          const wb = 0 === this.lastTimestampMs ? 16 : Math.min(100, bb - this.lastTimestampMs);
          this.lastTimestampMs = bb;
          try {
            this.poll(bb, wb)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.sO))
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
      onFrame(bb) {
        return this.frameListeners.add(bb), () => {
          this.frameListeners.delete(bb)
        }
      }
      onActivePadChanged(bb) {
        return this.connectionListeners.add(bb), () => {
          this.connectionListeners.delete(bb)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(bb) {
        return this.connectedListeners.add(bb), () => {
          this.connectedListeners.delete(bb)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const bb = this.readPads()[this.activeInfo.index],
          wb = bb ? this.readPad(bb) : null;
        return wb && wb.id === this.activeInfo.id ? bb : null
      }
      poll(bb, wb) {
        var Mb, Hb;
        const pb = this.readPads();
        let Vb = null,
          lb = !1;
        const Lb = [],
          Ib = Math.max(pb.length, this.slots.length);
        for (let mb = 0; mb < Ib; mb++) {
          var Ob;
          const wb = mb < pb.length ? pb[mb] : null,
            Mb = wb ? this.readPad(wb) : null;
          if (!Mb || !Mb.connected || !this.isUsable(Mb)) {
            this.slots[mb] = null;
            continue
          }
          let Hb = this.slots[mb];
          Hb && Hb.id === Mb.id || (Hb = {
            id: Mb.id,
            dg: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new gb,
            rightRest: new gb
          }, this.slots[mb] = Hb);
          const Ib = sb(Mb, 0),
            Ub = sb(Mb, 2);
          !Hb.leftSettled && Math.hypot(Ib.x, Ib.y) < Fb && (Hb.leftSettled = !0), !Hb.rightSettled && Math.hypot(Ub.x, Ub.y) < Fb && (Hb.rightSettled = !0), Hb.leftRest.observe(Ib, bb), Hb.rightRest.observe(Ub, bb);
          const tb = Bb(Mb),
            Cb = (0, eb.s)(tb, Hb.dg),
            Eb = Hb.dg,
            hb = Cb.map(((bb, wb) => bb && !Eb[wb]));
          Hb.dg = Cb;
          const zb = {
            pad: Mb,
            slot: Hb,
            values: tb
          };
          mb === (null === (Ob = this.activeInfo) || void 0 === Ob ? void 0 : Ob.index) && Mb.id === this.activeInfo.id ? (Vb = zb, lb = hb.includes(!0)) : hb.includes(!0) && Lb.push({
            polled: zb,
            rose: hb
          })
        }
        const Ub = this.slots.some((bb => null !== bb));
        if (Ub !== this.anyPadConnected) {
          this.anyPadConnected = Ub;
          for (const bb of this.connectedListeners) bb()
        }
        const tb = null !== (Mb = null === (Hb = Vb) || void 0 === Hb ? void 0 : Hb.slot.dg) && void 0 !== Mb ? Mb : [],
          Cb = lb ? void 0 : Lb.find((bb => {
            let {
              rose: wb
            } = bb;
            return wb.some(((bb, wb) => bb && !tb[wb]))
          }));
        if (Cb ? (Vb = Cb.polled, this.setActive(Cb.polled.pad)) : this.activeInfo && !Vb && this.setActive(null), !Vb || !this.activeInfo) return;
        const Eb = ((bb, wb) => {
          let {
            pad: Mb,
            slot: Hb,
            values: pb
          } = bb;
          const Vb = (0, eb.z)(wb);
          return Vb.values = pb, Hb.leftSettled && (Vb.leftStick = Hb.leftRest.apply(sb(Mb, 0))), Hb.rightSettled && (Vb.rightStick = Hb.rightRest.apply(sb(Mb, 2))), Vb
        })(Vb, bb);
        for (const eb of this.frameListeners) eb(Eb, wb, this.activeInfo)
      }
      readPad(bb) {
        const wb = this.readSnapshot(bb);
        return wb && (0, tb.h)(wb) ? (bb => {
          const wb = wb => {
              var Mb;
              return null !== (Mb = bb.buttons[wb]) && void 0 !== Mb ? Mb : Cb(!1)
            },
            Mb = wb => {
              var Mb;
              return null !== (Mb = bb.axes[wb]) && void 0 !== Mb ? Mb : 0
            },
            eb = bb.axes.length > 9,
            Hb = eb ? (bb => {
              const wb = 0 !== bb;
              return {
                up: wb && (bb >= -1 && bb < -.7 || bb >= .95 && bb <= 1),
                right: wb && bb >= -.75 && bb < -.1,
                down: wb && bb >= -.2 && bb < .45,
                left: wb && bb >= .4 && bb <= 1
              }
            })(Mb(9)) : {
              up: Mb(5) < -.5,
              down: Mb(5) > .5,
              left: Mb(4) < -.5,
              right: Mb(4) > .5
            };
          return {
            ...bb,
            mapping: "standard",
            buttons: [wb(1), wb(2), wb(0), wb(3), wb(4), wb(5), wb(6), wb(7), wb(8), wb(9), wb(10), wb(11), Cb(Hb.up), Cb(Hb.down), Cb(Hb.left), Cb(Hb.right), wb(12)],
            axes: [Mb(0), Mb(1), Mb(2), Mb(eb ? 5 : 3)]
          }
        })(wb) : wb
      }
      readSnapshot(bb) {
        if (this.nativeReader) try {
          return this.nativeReader(bb)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (bb => {
          const wb = bb;
          return {
            index: wb.index,
            id: wb.id,
            connected: wb.connected,
            mapping: wb.mapping,
            buttons: Array.from(wb.buttons, (bb => ({
              pressed: bb.pressed,
              value: bb.value
            }))),
            axes: Array.from(wb.axes),
            vendorName: Lb(bb)
          }
        })(bb)
      }
      isUsable(bb) {
        return !(0, Ub.i)(bb.id) && ("standard" !== bb.mapping ? (this.warnedNonStandardIds.has(bb.id) || (this.warnedNonStandardIds.add(bb.id), console.warn(`Controller "${bb.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(bb.index))
      }
      setActive(bb) {
        this.activeInfo = bb ? {
          index: bb.index,
          id: bb.id,
          family: (0, Hb.d)(bb.id, bb.vendorName)
        } : null;
        for (const wb of this.connectionListeners) wb(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (bb) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", bb)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.sO))
      }
    }((() => Ob ? Ob.call(navigator) : []), !0);
    mb.listenForConnections()
  },
  10083: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      e: () => Vb,
      f: () => gb,
      j: () => Hb
    });
    var eb = Mb(10085);
    const Hb = bb => {
        const wb = [];
        bb.holdingGun && wb.push({
          kind: "reload"
        }), bb.touchscreenActionButton && wb.push({
          kind: "touchButton",
          label: bb.touchscreenActionButton
        });
        for (const pb of null !== (Mb = null === (Hb = bb.customButtons) || void 0 === Hb ? void 0 : Hb.filter(eb.f)) && void 0 !== Mb ? Mb : []) {
          var Mb, Hb;
          wb.push({
            kind: "customButton",
            id: pb.id,
            icon: pb.icon,
            description: pb.description
          })
        }
        return wb
      },
      pb = bb => bb.length >= 2,
      Vb = bb => "specialAction" !== bb.kind,
      gb = (bb, wb) => {
        if (null === bb || null === wb) return bb === wb;
        if (bb.kind !== wb.kind) return !1;
        switch (bb.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return bb.action === wb.action;
          case "customButton":
            return bb.id === wb.id && bb.icon === wb.icon;
          case "touchButton":
            return bb.label === wb.label
        }
      }
  },
  10012: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb
    });
    const eb = {
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
  10077: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Ib,
      e: () => tb,
      i: () => Ob,
      j: () => Cb
    });
    var eb = Mb(64),
      Hb = Mb(29),
      pb = Mb(1611),
      Vb = Mb(10083),
      gb = Mb(10091);
    let lb = null;
    const Lb = () => lb,
      Ib = bb => {
        (0, Vb.f)(lb, bb) || (lb = bb, Hb.k.iI(gb.g, lb))
      },
      Ob = () => {
        const [bb, wb] = (0, eb.useState)(Lb);
        return (0, pb.e)(gb.g, wb), bb
      };
    let Ub = !1;
    const tb = bb => {
        bb !== Ub && (Ub = bb, Hb.k.iI(gb.j, bb))
      },
      Cb = () => {
        const [bb, wb] = (0, eb.useState)(Ub);
        return (0, pb.e)(gb.j, wb), bb
      }
  },
  10101: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb,
      f: () => gb
    });
    var eb = Mb(29),
      Hb = Mb(10091);
    let pb = !1;
    const Vb = () => pb,
      gb = bb => {
        bb !== pb && (pb = bb, eb.k.iI(Hb.l, pb))
      }
  },
  10096: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => gb,
      h: () => lb
    });
    var eb = Mb(29),
      Hb = Mb(10091);
    let pb = null,
      Vb = 0;
    const gb = () => pb,
      lb = bb => {
        null === bb && null === pb || (pb = null === bb ? null : {
          id: ++Vb,
          holdMs: bb
        }, eb.k.iI(Hb.n, pb))
      }
  },
  10091: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      g: () => eb,
      j: () => Hb,
      l: () => gb,
      n: () => lb,
      q: () => Lb,
      r: () => Vb
    });
    const eb = "controllerActionHintChanged",
      Hb = "controllerActionWheelHintChanged",
      pb = "controllerOpenChat",
      Vb = "controllerSneakToggledChanged",
      gb = "controllerAttackLatchedChanged",
      lb = "controllerDropStackHoldChanged",
      Lb = "controllerPickBlockHintChanged"
  },
  10107: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb,
      f: () => gb
    });
    var eb = Mb(29),
      Hb = Mb(10091);
    let pb = !1;
    const Vb = () => pb,
      gb = bb => {
        bb !== pb && (pb = bb, eb.k.iI(Hb.q, pb))
      }
  },
  10160: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb,
      c: () => gb
    });
    var eb = Mb(29),
      Hb = Mb(10091);
    let pb = !1;
    const Vb = () => pb,
      gb = bb => {
        bb !== pb && (pb = bb, eb.k.iI(Hb.r, pb))
      }
  },
  10053: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb
    });
    class eb {
      constructor() {
        this.downAtMs = null
      }
      update(bb, wb, Mb, eb) {
        if (bb) return this.downAtMs = Mb, null;
        if (null === this.downAtMs) return null;
        const Hb = Mb - this.downAtMs >= eb;
        return wb ? Hb ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, Hb ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  9573: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Ob,
      d: () => Ub,
      g: () => gb,
      i: () => mb,
      j: () => sb
    });
    var eb = Mb(43),
      Hb = Mb(9542),
      pb = Mb(9515);
    const Vb = (() => {
        try {
          return Mb(9579)
        } catch {
          return null
        }
      })(),
      gb = [...pb._, "LeftStick", "RightStick"],
      lb = new Map,
      Lb = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      Ib = (new Set(Object.values(Lb)), {
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
      Ob = (bb, wb) => {
        var Mb, eb;
        return null !== (Mb = null === (eb = Ib[Lb[bb]]) || void 0 === eb ? void 0 : eb[wb]) && void 0 !== Mb ? Mb : 1
      },
      Ub = (bb, wb) => {
        const Mb = `./${Lb[bb]}/${wb}.svg`;
        let eb = lb.get(Mb);
        return void 0 === eb && (eb = Vb ? Vb(Mb) : "", lb.set(Mb, eb)), eb
      },
      tb = new Set,
      Cb = [],
      Eb = bb => {
        if (!tb.has(bb)) {
          tb.add(bb);
          for (const wb of gb) {
            const Mb = Ub(bb, wb);
            if (Mb) {
              const bb = new Image;
              bb.crossOrigin = "anonymous", bb.src = Mb, Cb.push(bb)
            }
          }
        }
      },
      Fb = "controllerGlyphFamily";
    let Bb = null;
    const sb = bb => {
        bb !== Bb && (Bb = bb, eb.i.setItem(Fb, bb), Eb(bb))
      },
      mb = () => {
        const bb = eb.i.getItem(Fb);
        (0, Hb.f)(bb) && bb !== Bb && (Bb = bb, Eb(bb))
      }
  },
  10183: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Nb,
      g: () => vb
    });
    var eb = Mb(64),
      Hb = Mb(29),
      pb = Mb(1611),
      Vb = Mb(9525),
      gb = Mb(9513),
      lb = Mb(9557),
      Lb = Mb(9536);
    const Ib = {
        x: 0,
        y: 0,
        z: 0
      },
      Ob = Math.PI / 180,
      Ub = bb => Math.hypot(bb.x, bb.y, bb.z),
      tb = (bb, wb) => ({
        x: bb.x * wb,
        y: bb.y * wb,
        z: bb.z * wb
      }),
      Cb = (bb, wb) => ({
        x: bb.x + wb.x,
        y: bb.y + wb.y,
        z: bb.z + wb.z
      }),
      Eb = (bb, wb) => ({
        x: bb.x - wb.x,
        y: bb.y - wb.y,
        z: bb.z - wb.z
      }),
      Fb = bb => {
        const wb = Ub(bb);
        return 0 === wb ? Ib : tb(bb, 1 / wb)
      },
      Bb = bb => ({
        min: {
          ...bb
        },
        max: {
          ...bb
        }
      }),
      sb = (bb, wb) => ({
        min: {
          x: Math.min(bb.min.x, wb.x),
          y: Math.min(bb.min.y, wb.y),
          z: Math.min(bb.min.z, wb.z)
        },
        max: {
          x: Math.max(bb.max.x, wb.x),
          y: Math.max(bb.max.y, wb.y),
          z: Math.max(bb.max.z, wb.z)
        }
      }),
      mb = (bb, wb) => bb.max.x - bb.min.x <= wb && bb.max.y - bb.min.y <= wb && bb.max.z - bb.min.z <= wb;
    class hb {
      constructor() {
        this.bias = Ib, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Ib, this.windowSec = 0
      }
      update(bb) {
        const wb = this.gyroRange ? sb(this.gyroRange, bb.gyro) : Bb(bb.gyro),
          Mb = bb.accel ? this.accelRange ? sb(this.accelRange, bb.accel) : Bb(bb.accel) : null;
        if (!mb(wb, 1) || Mb && !mb(Mb, .01)) return void this.restartWindow(bb);
        if (this.gyroRange = wb, this.accelRange = Mb, this.sum = Cb(this.sum, tb(bb.gyro, bb.dtSec)), this.windowSec += bb.dtSec, this.windowSec < 1) return;
        const eb = tb(this.sum, 1 / this.windowSec);
        if (Ub(eb) > 5) return;
        const Hb = Eb(eb, this.bias);
        let pb = 0;
        !this.calibrated || this.windowSec >= 3 ? pb = 1 : Ub(Hb) <= 1 && (pb = Math.min(1, bb.dtSec / 1)), this.bias = Cb(this.bias, tb(Hb, pb)), this.calibrated = this.calibrated || pb > 0
      }
      correct(bb) {
        return Eb(bb, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = Ib, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Ib, this.windowSec = 0
      }
      restartWindow(bb) {
        this.gyroRange = Bb(bb.gyro), this.accelRange = bb.accel ? Bb(bb.accel) : null, this.sum = Ib, this.windowSec = 0
      }
    }
    class zb {
      constructor() {
        this.down = null
      }
      update(bb, wb, Mb) {
        const eb = Fb(tb(wb, -1));
        if (!this.down) return this.down = eb, eb;
        const Hb = tb(bb, Ob * Mb),
          pb = this.down,
          Vb = {
            x: pb.x - (Hb.y * pb.z - Hb.z * pb.y),
            y: pb.y - (Hb.z * pb.x - Hb.x * pb.z),
            z: pb.z - (Hb.x * pb.y - Hb.y * pb.x)
          },
          gb = 0 === Ub(eb) ? 0 : Math.min(1, Mb / .25);
        var lb, Lb;
        return this.down = Fb((Lb = gb, Cb(lb = Vb, tb(Eb(eb, lb), Lb)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class Xb {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(bb, wb, Mb) {
        const eb = Math.hypot(bb, wb),
          Hb = Math.max(0, Math.min(1, (eb - 2) / 2)),
          pb = {
            yaw: bb * (1 - Hb),
            pitch: wb * (1 - Hb),
            dtSec: Mb
          };
        for (this.entries.push(pb), this.windowSec += Mb; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let Vb = 0,
          gb = 0;
        for (const Lb of this.entries) Vb += Lb.yaw * Lb.dtSec, gb += Lb.pitch * Lb.dtSec;
        const lb = this.windowSec > 0 ? {
          yaw: Vb / this.windowSec,
          pitch: gb / this.windowSec
        } : {
          yaw: pb.yaw,
          pitch: pb.pitch
        };
        return {
          yaw: bb * Hb + lb.yaw,
          pitch: wb * Hb + lb.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class xb {
      constructor() {
        this.calibrator = new hb, this.gravity = new zb, this.smoother = new Xb
      }
      process(bb, wb, Mb) {
        const eb = Math.max(0, Math.min(.05, wb));
        this.calibrator.update({
          ...bb,
          dtSec: eb
        });
        const Hb = this.calibrator.correct(bb.gyro);
        let pb = Hb.y;
        "player" === Mb && bb.accel && (pb = ((bb, wb) => {
          const Mb = bb.y * wb.y + bb.z * wb.z;
          return -Math.sign(Mb) * Math.min(1.41 * Math.abs(Mb), Math.hypot(bb.y, bb.z))
        })(Hb, this.gravity.update(Hb, bb.accel, eb)));
        const Vb = this.smoother.apply(pb, Hb.x, eb),
          gb = ((bb, wb) => {
            const Mb = Math.hypot(bb, wb);
            if (Mb >= 1) return {
              yaw: bb,
              pitch: wb
            };
            const eb = Mb / 1;
            return {
              yaw: bb * eb,
              pitch: wb * eb
            }
          })(Vb.yaw, Vb.pitch);
        return {
          yawDeg: gb.yaw * eb,
          pitchDeg: gb.pitch * eb
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
    const jb = (bb, wb) => {
      var Mb, eb, Hb;
      const pb = wb * Ob,
        Vb = null !== (Mb = bb.beta) && void 0 !== Mb ? Mb : 0,
        gb = null !== (eb = bb.gamma) && void 0 !== eb ? eb : 0;
      return {
        x: Vb * Math.cos(pb) - gb * Math.sin(pb),
        y: Vb * Math.sin(pb) + gb * Math.cos(pb),
        z: null !== (Hb = bb.alpha) && void 0 !== Hb ? Hb : 0
      }
    };
    var Kb = Mb(10188);
    class rb {
      constructor(bb, wb, Mb) {
        this.hid = bb, this.sink = wb, this.onControllersChanged = Mb, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = bb => {
          this.openController(bb.device).catch((bb => {
            console.warn("Could not open motion controller", bb)
          }))
        }, this.onDisconnect = bb => {
          this.opening.has(bb.device) && this.disconnectedWhileOpening.add(bb.device);
          const wb = this.controllers.get(bb.device);
          wb && (this.forget(wb), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const bb = await this.hid.getDevices();
        for (const wb of bb) await this.openController(wb).catch((bb => {
          console.warn("Could not open motion controller", bb)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const bb of [...this.controllers.values()]) this.forget(bb);
        this.onControllersChanged()
      }
      async request() {
        const bb = await this.hid.requestDevice({
          filters: Kb.j
        });
        let wb = 0;
        for (const Mb of bb) await this.openController(Mb).catch((bb => {
          console.warn("Could not open motion controller", bb), wb++
        }));
        return wb
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((bb => null !== (0, Kb.g)(bb.vendorId, bb.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((bb => bb.kind))
      }
      forget(bb) {
        bb.device.removeEventListener("inputreport", bb.onReport), this.controllers.get(bb.device) === bb && this.controllers.delete(bb.device)
      }
      async openController(bb) {
        const wb = (0, Kb.g)(bb.vendorId, bb.productId);
        if (!wb || !this.running || this.controllers.has(bb) || this.opening.has(bb)) return;
        this.opening.add(bb);
        let Mb = !1;
        try {
          bb.opened || await bb.open()
        } finally {
          this.opening.delete(bb), Mb = this.disconnectedWhileOpening.delete(bb)
        }
        if (Mb) return void bb.close().catch((bb => {
          console.debug("Could not close an unplugged motion controller", bb)
        }));
        if (!this.running) return;
        const eb = {
          device: bb,
          kind: wb,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: bb => {
            this.onReport(eb, bb)
          }
        };
        this.controllers.set(bb, eb), bb.addEventListener("inputreport", eb.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(eb)
        } catch (Hb) {
          console.warn(`Could not turn on motion for ${wb}`, Hb), this.controllers.get(bb) === eb && (this.forget(eb), this.onControllersChanged())
        }
      }
      async enableMotion(bb) {
        let {
          device: wb,
          kind: Mb
        } = bb;
        if ((0, Kb.h)(Mb))
          for (const eb of Kb.w[Mb]) await wb.receiveFeatureReport(eb).catch((bb => {
            console.debug(`Motion controller feature report ${eb} unavailable`, bb)
          }));
        else
          for (let eb = 0; eb < 2; eb++)
            for (const {
                subcommand: bb,
                args: Mb
              }
              of Kb.z) await wb.sendReport(Kb.D, (0, Kb.d)(this.switchPacketCounter++, bb, Mb)), await new Promise((bb => {
              setTimeout(bb, 60)
            }))
      }
      onReport(bb, wb) {
        const Mb = (0, Kb.p)(bb.kind, wb.reportId, wb.data, bb.device.productId);
        if (!Mb) return;
        const eb = null === bb.lastEventMs ? 0 : (wb.timeStamp - bb.lastEventMs) / 1e3;
        bb.lastEventMs = wb.timeStamp;
        let Hb = Mb.dtSec;
        if (null !== Hb && eb > 0 && (Hb = Math.max(.001, Math.min(.017, eb / Mb.readings.length))), null === Hb && null !== Mb.sensorClock && (0, Kb.h)(bb.kind)) {
          const wb = (0, Kb.s)(bb.kind, bb.lastClock, Mb.sensorClock);
          bb.lastClock = Mb.sensorClock, Hb = 0 === wb ? null : wb
        }
        if (bb.lastReadingMs = wb.timeStamp, this.isPreferred(bb, wb.timeStamp))
          for (const Vb of Mb.readings) {
            var pb;
            this.sink(Vb, null !== (pb = Hb) && void 0 !== pb ? pb : eb, `hid${bb.openedOrder}`)
          }
      }
      isPreferred(bb, wb) {
        const Mb = bb => 1e6 * Kb.o[bb.kind] + bb.openedOrder;
        for (const eb of this.controllers.values())
          if (eb !== bb && wb - eb.lastReadingMs < 500 && Mb(eb) < Mb(bb)) return !1;
        return !0
      }
    }
    var Rb = Mb(110);
    const Db = () => DeviceMotionEvent,
      cb = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, Rb.isMobile)(),
      Yb = () => {
        var bb;
        const wb = null === (bb = window.screen.orientation) || void 0 === bb ? void 0 : bb.angle;
        return "number" === typeof wb ? wb : "number" === typeof window.orientation ? window.orientation : 0
      };
    class Zb {
      constructor(bb, wb) {
        this.sink = bb, this.onStateChanged = wb, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((bb => {
            console.warn("Could not enable the motion sensor", bb)
          }))
        }, this.onMotion = bb => {
          const wb = bb.rotationRate;
          if (!wb || null === wb.alpha && null === wb.beta && null === wb.gamma) return;
          const Mb = null === this.lastEventMs ? 0 : (bb.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = bb.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: jb(wb, Yb()),
            accel: null
          }, Mb, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof Db().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const bb = Db().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof bb) return void this.listen();
        let wb;
        this.disarmGestureRequest();
        try {
          wb = await bb.call(DeviceMotionEvent)
        } catch (Mb) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), Mb
        }
        this.wanted && ("granted" === wb ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(bb) {
        this.state !== bb && (this.state = bb, this.onStateChanged())
      }
    }
    const fb = "controllerGyroStatusChanged",
      Ab = {
        DW: 0,
        cW: 0
      },
      Wb = bb => {
        var wb, Mb;
        return "undefined" === typeof document || (null === (wb = null === (Mb = document.featurePolicy) || void 0 === Mb ? void 0 : Mb.allowsFeature(bb)) || void 0 === wb || wb)
      };
    class Jb {
      constructor() {
        this.processor = new xb, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = bb => {
          const wb = bb.gyroAiming && gb.e.hasConnectedPad();
          var Mb, eb;
          wb !== this.phoneRunning && (this.phoneRunning = wb, wb ? null === (Mb = this.phone) || void 0 === Mb || Mb.start() : null === (eb = this.phone) || void 0 === eb || eb.stop());
          if (bb.gyroAiming !== this.running) {
            var Hb, pb;
            if (this.running = bb.gyroAiming, this.running) null === (Hb = this.hid) || void 0 === Hb || Hb.start().catch((bb => {
              console.warn("Could not open motion controllers", bb)
            }));
            else null === (pb = this.hid) || void 0 === pb || pb.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          Hb.k.iI(fb, this.getStatus())
        };
        const bb = (() => {
            var bb;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (bb = navigator.hid) && void 0 !== bb ? bb : null
          })(),
          wb = Wb("hid");
        this.hidBlocked = null !== bb && !wb, this.hid = bb && wb ? new rb(bb, ((bb, wb, Mb) => {
          this.lastHidReadingMs = performance.now(), this.feed(bb, wb, "player", Mb)
        }), this.publishStatus) : null;
        const Mb = Wb("accelerometer") && Wb("gyroscope");
        this.phoneBlocked = cb() && !Mb, this.phone = cb() && Mb ? new Zb(((bb, wb, Mb) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(bb, wb, "local", Mb)
        }), this.publishStatus) : null, Hb.k.subscribe(Lb.d, this.syncWithSettings), gb.e.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, Lb.h)()), this.publishStatus()
        })), this.syncWithSettings((0, Lb.h)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var bb, wb, Mb, eb;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (bb = null === (wb = this.hid) || void 0 === wb ? void 0 : wb.getConnectedKinds()) && void 0 !== bb ? bb : [],
          phoneMotion: null !== (Mb = null === (eb = this.phone) || void 0 === eb ? void 0 : eb.getState()) && void 0 !== Mb ? Mb : "off",
          padConnected: gb.e.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var bb;
        await (null === (bb = this.phone) || void 0 === bb ? void 0 : bb.requestPermission())
      }
      drainLookDelta() {
        const bb = performance.now();
        bb - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = bb;
        const wb = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const Mb = (0, Lb.h)();
        return Mb.gyroAiming && (bb => {
          let {
            activation: wb,
            isHeld: Mb,
            useButton: eb,
            gyroButton: Hb
          } = bb;
          return "always" === wb || Mb("aiming" === wb ? eb : Hb)
        })({
          activation: Mb.gyroActivation,
          isHeld: bb => lb.d.isButtonHeld(bb),
          useButton: (0, Vb.h)("use"),
          gyroButton: Mb.gyroButton
        }) ? ((bb, wb) => ({
          DW: -bb.yawDeg * wb * Ob,
          cW: -bb.pitchDeg * wb * Ob
        }))(wb, Mb.gyroSensitivity) : Ab
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(bb, wb) {
        this.feed(bb, wb, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(bb, wb, Mb, eb) {
        this.source !== eb && (this.processor.reset(), this.source = eb);
        const Hb = this.processor.process(bb, wb, Mb);
        this.pendingYawDeg += Hb.yawDeg, this.pendingPitchDeg += Hb.pitchDeg
      }
    }
    let Sb = null;
    const Nb = () => (Sb || (Sb = new Jb), Sb),
      vb = () => {
        const [bb, wb] = (0, eb.useState)((() => Nb().getStatus()));
        return (0, pb.e)(fb, wb), (0, eb.useEffect)((() => {
          wb(Nb().getStatus())
        }), []), bb
      }
  },
  10188: (bb, wb, Mb) => {
    Mb.d(wb, {
      D: () => mb,
      d: () => zb,
      g: () => lb,
      h: () => eb,
      j: () => gb,
      m: () => Lb,
      o: () => Ib,
      p: () => sb,
      s: () => Fb,
      w: () => xb,
      z: () => Xb
    });
    const eb = bb => "dualShock4" === bb || "dualSense" === bb,
      Hb = 1356,
      pb = 1406,
      Vb = [{
        vendorId: Hb,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: Hb,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: Hb,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: Hb,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: Hb,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: pb,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: pb,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: pb,
        productId: 8199,
        kind: "joyConRight"
      }],
      gb = Vb.map((bb => {
        let {
          vendorId: wb,
          productId: Mb
        } = bb;
        return {
          vendorId: wb,
          productId: Mb
        }
      })),
      lb = (bb, wb) => {
        var Mb, eb;
        return null !== (Mb = null === (eb = Vb.find((Mb => Mb.vendorId === bb && Mb.productId === wb))) || void 0 === eb ? void 0 : eb.kind) && void 0 !== Mb ? Mb : null
      },
      Lb = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      Ib = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      Ob = 2e3 / 32767,
      Ub = 1 / 8192,
      tb = 936 / 13371,
      Cb = (bb, wb, Mb) => ({
        x: bb.getInt16(wb, !0) * Mb,
        y: bb.getInt16(wb + 2, !0) * Mb,
        z: bb.getInt16(wb + 4, !0) * Mb
      }),
      Eb = bb => 0 === bb.x && 0 === bb.y && 0 === bb.z,
      Fb = (bb, wb, Mb) => null === wb ? null : "dualShock4" === bb ? 16 * (Mb - wb & 65535) / 3 / 1e6 : (Mb - wb >>> 0) / 3 / 1e6,
      Bb = (bb, wb) => "joyConRight" === wb ? {
        x: bb.y,
        y: -bb.z,
        z: -bb.x
      } : {
        x: -bb.y,
        y: bb.z,
        z: -bb.x
      },
      sb = (bb, wb, Mb, Hb) => eb(bb) ? ((bb, wb, Mb, eb) => {
        const Hb = ((bb, wb, Mb) => "dualShock4" === bb ? 1 === wb && Mb >= 63 ? 0 : 17 === wb && Mb >= 65 ? 2 : null : 1 === wb && Mb >= 62 ? 0 : 49 === wb && Mb >= 63 ? 1 : null)(bb, wb, Mb.byteLength);
        if (null === Hb) return null;
        if (2976 === eb && 1 === wb && 0 !== (4 & Mb.getUint8(30))) return null;
        const pb = Hb + ("dualShock4" === bb ? 12 : 15),
          Vb = Cb(Mb, pb, Ob),
          gb = Cb(Mb, pb + 6, Ub);
        return Eb(Vb) && Eb(gb) ? null : {
          readings: [{
            gyro: Vb,
            accel: gb
          }],
          dtSec: null,
          sensorClock: "dualShock4" === bb ? Mb.getUint16(Hb + 9, !0) : Mb.getUint32(Hb + 27, !0)
        }
      })(bb, wb, Mb, Hb) : ((bb, wb, Mb) => {
        if (48 !== wb && 49 !== wb || Mb.byteLength < 48) return null;
        const eb = [];
        for (let Hb = 0; Hb < 3; Hb++) {
          const wb = Cb(Mb, 12 + 12 * Hb, 244e-6),
            pb = Cb(Mb, 18 + 12 * Hb, tb);
          if (Eb(pb) && Eb(wb)) return null;
          eb.push({
            gyro: Bb(pb, bb),
            accel: Bb(wb, bb)
          })
        }
        return {
          readings: eb,
          dtSec: .005,
          sensorClock: null
        }
      })(bb, wb, Mb),
      mb = 1,
      hb = [0, 1, 64, 64, 0, 1, 64, 64],
      zb = (bb, wb, Mb) => new Uint8Array([15 & bb, ...hb, wb, ...Mb]),
      Xb = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      xb = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  9560: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Jb,
      f: () => ab,
      j: () => Xb,
      n: () => tb.j,
      p: () => vb,
      s: () => Nb,
      u: () => xb,
      y: () => Qb,
      A: () => tb.t,
      E: () => tb.z,
      I: () => ib,
      K: () => tb.E,
      M: () => Zb
    });
    var eb = Mb(64),
      Hb = Mb(26),
      pb = Mb(29),
      Vb = Mb(1611),
      gb = Mb(1373),
      lb = Mb(9536),
      Lb = Mb(9568),
      Ib = Mb(9522),
      Ob = Mb(9513),
      Ub = Mb(9573),
      tb = Mb(1549),
      Cb = Mb(9515),
      Eb = Mb(9996),
      Fb = Mb(5202),
      Bb = Mb(126);
    class sb {
      constructor(bb) {
        this.deps = bb, this.pads = new Map
      }
      observe(bb, wb, Mb) {
        if (!this.deps.touchOnly) return;
        const eb = this.pads.get(wb.id);
        "proven" !== eb && Mb ? (this.pads.set(wb.id, "proven"), void 0 !== eb && this.deps.onReleased(wb, bb, bb.timestampMs - eb)) : void 0 === eb && (this.pads.set(wb.id, bb.timestampMs), this.deps.onHeld(wb, bb)), this.deps.setMayHide("proven" === this.pads.get(wb.id))
      }
    }
    const mb = bb => bb.values.flatMap(((bb, wb) => bb >= Cb.S ? [String(wb)] : [])).join(",") || "none",
      hb = (bb, wb, eb, Hb, pb) => {
        const Vb = (0, tb.d)(),
          gb = document.visibilityState,
          lb = document.hasFocus(),
          Lb = "dg" === bb ? "touch HUD pad held" : "touch HUD pad released";
        Promise.all([Promise.resolve().then((() => Mb(4155))), Promise.resolve().then((() => Mb(1400))), Promise.resolve().then((() => Mb(160)))]).then((Mb => {
          let [{
            logControllerHudHoldToGtag: Ib
          }, {
            logClientLineFromEveryPage: Ob
          }, {
            siteUsed: Ub
          }] = Mb;
          Ib(bb, wb.family, null === pb ? void 0 : Math.round(pb / 1e3)), Ob(Lb, zb(wb, eb, Hb, pb, Vb, gb, lb, Ub))
        }), (() => {}))
      },
      zb = (bb, wb, Mb, eb, Hb, pb, Vb, gb) => {
        var lb;
        const Lb = {
          pad_id: bb.id.slice(0, 120),
          pad_family: bb.family,
          pad_mapping: null !== (lb = null === Mb || void 0 === Mb ? void 0 : Mb.mapping) && void 0 !== lb ? lb : "unread",
          pad_axes: Mb ? String(Mb.axes.length) : "unread",
          pad_buttons: Mb ? String(Mb.buttons.length) : "unread",
          pressed: mb(wb),
          ms_since_touch: null === Hb ? "none" : String(Math.round(wb.timestampMs - Hb)),
          visibility: pb,
          focused: String(Vb),
          site: gb
        };
        return null !== eb && (Lb.held_ms = String(Math.round(eb))), Lb
      };
    const Xb = bb => !bb.repeat && !(0, Eb.c)(bb.key),
      xb = "PadHidesCursor";
    let jb = !1;
    const Kb = bb => {
        bb !== jb && (jb = bb, document.documentElement.classList.toggle(xb, bb))
      },
      rb = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(bb) {
          let wb = !1,
            Mb = !1;
          bb.values.forEach(((bb, eb) => {
            const Hb = bb >= (this.buttonsDown[eb] ? Cb.W : Cb.S);
            Hb && !this.buttonsDown[eb] && (wb = !0, Mb = !0), this.buttonsDown[eb] = Hb
          }));
          return [bb.leftStick, bb.rightStick].forEach(((bb, eb) => {
            const Hb = this.stickAnchors[eb];
            Math.hypot(bb.x, bb.y) < (Hb ? Cb.W : .3) ? this.stickAnchors[eb] = null : (!Hb || Math.hypot(bb.x - Hb.x, bb.y - Hb.y) >= .3) && (this.stickAnchors[eb] = {
              x: bb.x,
              y: bb.y
            }, wb = !0, Mb ||= !Hb)
          })), wb && (this.lastActivityMs = bb.timestampMs), this.onlyMovedOn = wb && !Mb, wb
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(bb) {
          return !(bb - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((bb => bb)) || this.stickAnchors.some((bb => null !== bb)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((bb => null !== bb))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      },
      Rb = (Db = () => Ob.e.getActiveGamepad(), new sb({
        touchOnly: "touchOnly" === (0, Bb.e)(),
        setMayHide: tb.v,
        onHeld: (bb, wb) => {
          hb("dg", bb, wb, Db(), null)
        },
        onReleased: (bb, wb, Mb) => {
          hb("released", bb, wb, Db(), Mb)
        }
      }));
    var Db;
    let cb = null,
      Yb = !1;
    const Zb = () => Yb;
    let fb = null,
      Ab = !1,
      Wb = null;
    const Jb = () => Wb;
    let Sb = !1;
    const Nb = (bb, wb) => {
        if (!rb.observe(bb)) return !1;
        if (Rb.observe(bb, wb, rb.isStickOffRest()), Sb && rb.wasOnlyMoveOn() && !(0, tb.j)()) return !1;
        Sb = !1, Yb = !1;
        const Mb = !(0, tb.j)();
        return Mb && (cb = bb, Wb = !jb && Ab && fb ? {
          ...fb
        } : null), Ab = !1, (0, tb.t)("gamepad"), Kb(!0), (0, Ub.j)((0, lb.j)()), Mb
      },
      vb = bb => !(0, tb.j)() || bb === cb,
      Qb = () => {
        rb.reset()
      },
      Gb = () => {
        const bb = Hb.c.get("activeInputDevice"),
          wb = "gamepad" === bb ? Ob.e.getActivePad() : null;
        return {
          device: bb,
          inGame: (0, gb.B)(),
          padMovesMouse: null !== wb && (0, Ib.f)(wb.id)
        }
      },
      qb = bb => {
        document.pointerLockElement ? fb = null : (fb ??= {
          x: 0,
          y: 0
        }, fb.x = bb.clientX, fb.y = bb.clientY)
      },
      ab = () => {
        const bb = new Fb.e,
          wb = wb => {
            bb.reset(), Sb = !1, (0, tb.t)(wb)
          },
          Mb = bb => {
            if (bb.isTrusted) {
              if (bb instanceof KeyboardEvent) {
                if ((0, tb.q)(bb), !Xb(bb)) return;
                Yb = !0
              }
              if (bb instanceof PointerEvent && "touch" === bb.pointerType) return fb = null, void wb("touch");
              bb instanceof PointerEvent && (qb(bb), Ab = !0), ("pointerdown" !== bb.type || (bb => {
                let {
                  device: wb,
                  inGame: Mb,
                  padMovesMouse: eb
                } = bb;
                return !("gamepad" === wb && eb && Mb)
              })(Gb())) && wb("keyboardMouse")
            }
          },
          eb = bb => {
            bb.isTrusted && (fb = null, wb("touch"))
          },
          Vb = bb => {
            bb.isTrusted && "touch" !== bb.pointerType && !bb.relatedTarget && (fb = null)
          },
          gb = Mb => {
            if (!Mb.isTrusted || "touch" === Mb.pointerType) return;
            qb(Mb);
            const eb = Mb.movementX || 0,
              pb = Mb.movementY || 0;
            if (0 === eb && 0 === pb) return;
            if (Ab = !0, Kb(!1), "keyboardMouse" === Hb.c.get("activeInputDevice")) return;
            const Vb = rb.isHolding(Mb.timeStamp),
              gb = Gb(),
              lb = (bb => {
                let {
                  device: wb,
                  inGame: Mb,
                  padMovesMouse: eb,
                  padHolding: Hb
                } = bb;
                return ("gamepad" !== wb || !eb) && "keyboardMouse" !== wb && (Mb || !Hb)
              })({
                ...gb,
                inGame: gb.inGame && (0, Lb.h)(),
                padHolding: Vb
              });
            lb && bb.add(eb, pb, Mb.timeStamp) && (wb("keyboardMouse"), Sb = rb.isStickOffRest())
          },
          lb = bb => {
            Kb("gamepad" === bb)
          },
          Ib = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", Mb, Ib), window.addEventListener("pointerdown", Mb, Ib), window.addEventListener("wheel", Mb, Ib), window.addEventListener("touchstart", eb, Ib), window.addEventListener("pointermove", gb, Ib), window.addEventListener("pointerout", Vb, Ib);
        const Ob = pb.k.subscribe("appManagerUpdated|activeInputDevice", lb);
        return lb(Hb.c.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", Mb, Ib), window.removeEventListener("pointerdown", Mb, Ib), window.removeEventListener("wheel", Mb, Ib), window.removeEventListener("touchstart", eb, Ib), window.removeEventListener("pointermove", gb, Ib), window.removeEventListener("pointerout", Vb, Ib), fb = null, pb.k.unsubscribe(Ob), Kb(!1)
        }
      },
      ib = () => {
        const [bb, wb] = (0, eb.useState)(lb.j);
        return (0, Vb.e)(lb.c, (() => {
          wb((0, lb.j)())
        })), (0, Vb.e)(Ob.b, (() => {
          wb((0, lb.j)())
        })), bb
      }
  },
  9542: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb,
      f: () => Hb
    });
    const eb = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      Hb = bb => eb.includes(bb)
  },
  10042: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb,
      e: () => pb,
      h: () => lb,
      i: () => gb
    });
    var eb = Mb(1611),
      Hb = Mb(1567);
    const pb = "controllerInventoryCursorChanged",
      Vb = {
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
      gb = () => {
        var bb, wb;
        return (0, eb.h)(pb, null !== (bb = null === (wb = (0, Hb.e)()) || void 0 === wb ? void 0 : wb.getInventoryCursorState()) && void 0 !== bb ? bb : Vb)
      },
      lb = () => {
        var bb, wb;
        return null !== (bb = null === (wb = (0, Hb.e)()) || void 0 === wb ? void 0 : wb.isPadSteppingSlots()) && void 0 !== bb && bb
      }
  },
  10040: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Ub,
      d: () => gb,
      f: () => lb,
      h: () => Vb,
      k: () => pb,
      m: () => Ib,
      o: () => Ob
    });
    let eb = null;
    const Hb = new Set,
      pb = bb => (eb = bb, () => {
        if (eb === bb) {
          eb = null;
          for (const bb of Hb) bb()
        }
      }),
      Vb = bb => (Hb.add(bb), () => {
        Hb.delete(bb)
      }),
      gb = () => eb,
      lb = () => null !== eb;
    let Lb = null;
    const Ib = bb => {
        Lb = bb
      },
      Ob = () => {
        const bb = Lb;
        return Lb = null, bb
      },
      Ub = (bb, wb) => {
        var Mb, eb;
        return null !== (Mb = null !== (eb = bb.find((bb => bb.element === wb))) && void 0 !== eb ? eb : bb.find((bb => bb.element.contains(wb)))) && void 0 !== Mb ? Mb : null
      }
  },
  10044: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb,
      i: () => Vb
    });
    var eb = Mb(64);
    const Hb = new WeakMap,
      pb = bb => {
        var wb, Mb;
        return null !== (wb = null === (Mb = Hb.get(bb)) || void 0 === Mb ? void 0 : Mb.current) && void 0 !== wb ? wb : null
      },
      Vb = (bb, wb) => {
        const Mb = (0, eb.useRef)(wb);
        Mb.current = wb;
        const pb = (0, eb.useRef)(null);
        (0, eb.useEffect)((() => {
          const wb = bb.current,
            eb = pb.current;
          wb !== eb && (eb && Hb.get(eb) === Mb && Hb.delete(eb), pb.current = wb, wb && Hb.set(wb, Mb))
        })), (0, eb.useEffect)((() => () => {
          const bb = pb.current;
          bb && Hb.get(bb) === Mb && Hb.delete(bb), pb.current = null
        }), [])
      }
  },
  10155: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => gb,
      e: () => Lb,
      i: () => Ob,
      j: () => Ib,
      m: () => lb,
      p: () => tb
    });
    var eb = Mb(29),
      Hb = Mb(2212),
      pb = Mb(1567),
      Vb = Mb(1549);
    const gb = bb => {
        var wb, Mb;
        return (0, Vb.j)() && null !== (wb = null === (Mb = (0, pb.e)()) || void 0 === Mb ? void 0 : Mb.getGlyphForNoaAction(bb)) && void 0 !== wb ? wb : null
      },
      lb = "controllerGlyph:",
      Lb = bb => {
        var wb, Mb;
        return null !== (wb = null === (Mb = (0, pb.e)()) || void 0 === Mb ? void 0 : Mb.getPadGlyphIconName(bb)) && void 0 !== wb ? wb : `${lb}xbox/${bb}`
      },
      Ib = bb => bb.startsWith(lb),
      Ob = bb => {
        var wb, Mb;
        return Ib(bb) && null !== (wb = null === (Mb = (0, pb.e)()) || void 0 === Mb ? void 0 : Mb.getPadGlyphIconUrl(bb)) && void 0 !== wb ? wb : null
      },
      Ub = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", Vb.b, Hb.f, Hb.d],
      tb = bb => {
        const wb = Ub.map((wb => eb.k.subscribe(wb, bb)));
        return () => {
          for (const bb of wb) eb.k.unsubscribe(bb)
        }
      }
  },
  9568: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Lb,
      h: () => Ib,
      k: () => lb,
      l: () => gb
    });
    var eb = Mb(26),
      Hb = Mb(1821),
      pb = Mb(1968);
    const Vb = new Map,
      gb = (bb, wb) => (Vb.has(bb) && console.warn(`Gameplay blocker "${bb}" registered twice; the newer one replaces it.`), Vb.set(bb, wb), () => {
        Vb.get(bb) === wb && Vb.delete(bb)
      }),
      lb = () => (0, pb.d)(document.activeElement),
      Lb = function() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [wb, Mb] of Vb)
          if (!bb.includes(wb) && Mb()) return wb;
        return null
      },
      Ib = function() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === eb.c.get("gameState") && (!(0, Hb.q)() && (!lb() && null === Lb(bb)))
      }
  },
  9515: (bb, wb, Mb) => {
    Mb.d(wb, {
      C: () => Ob,
      E: () => mb,
      F: () => cb,
      G: () => hb,
      I: () => Bb,
      K: () => Fb,
      O: () => Lb,
      S: () => Ub,
      W: () => tb,
      X: () => Hb,
      _: () => eb,
      cb: () => Xb,
      db: () => Rb,
      e: () => Zb,
      f: () => Db,
      hb: () => Yb,
      j: () => Ib,
      kb: () => zb,
      m: () => lb,
      q: () => gb,
      r: () => jb,
      s: () => sb,
      w: () => xb,
      z: () => pb
    });
    const eb = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      Hb = eb.length,
      pb = function() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(Hb).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: bb
        }
      },
      Vb = Object.fromEntries(eb.map(((bb, wb) => [bb, wb]))),
      gb = bb => Vb[bb],
      lb = function(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const eb = Math.hypot(bb.x, bb.y);
        if (eb <= wb) return {
          x: 0,
          y: 0
        };
        const Hb = Math.min(1, (eb - wb) / Math.max(1e-4, Mb - wb));
        return {
          x: bb.x / eb * Hb,
          y: bb.y / eb * Hb
        }
      },
      Lb = ["exponential", "linear", "boost"],
      Ib = (bb, wb) => {
        const Mb = Math.hypot(bb.x, bb.y);
        if (0 === Mb) return {
          x: 0,
          y: 0
        };
        const eb = ((bb, wb) => {
          const Mb = Math.max(0, Math.min(1, bb));
          return "linear" === wb ? Mb : Mb * Mb
        })(Mb, wb);
        return {
          x: bb.x / Mb * eb,
          y: bb.y / Mb * eb
        }
      },
      Ob = .5,
      Ub = .3,
      tb = .2,
      Cb = gb("LT"),
      Eb = gb("RT"),
      Fb = bb => bb === Cb || bb === Eb,
      Bb = (bb, wb) => {
        const Mb = gb(wb);
        return Fb(Mb) ? bb[Mb] > .35 : bb[Mb] >= Ob
      },
      sb = (bb, wb) => bb.map(((bb, Mb) => Fb(Mb) ? wb[Mb] ? bb > .35 : bb >= .55 : bb >= Ob)),
      mb = ["Up", "Down", "Left", "Right"],
      hb = bb => mb.includes(bb),
      zb = function(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(bb.x, bb.y) < wb ? null : Math.abs(bb.x) > Math.abs(bb.y) ? bb.x > 0 ? "Right" : "Left" : bb.y > 0 ? "Down" : "Up"
      },
      Xb = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      xb = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      jb = ["default", "slow", "off"],
      Kb = 800,
      rb = 250,
      Rb = (bb, wb) => "off" === wb ? null : "slow" === wb ? {
        initialDelayMs: Math.max(bb.initialDelayMs, Kb),
        intervalMs: Math.max(bb.intervalMs, rb)
      } : bb;
    class Db {
      constructor(bb) {
        this.readTiming = bb, this.dg = !1, this.timing = null, this.nextFireMs = 0
      }
      update(bb, wb) {
        return bb ? this.dg ? !!(this.timing && wb >= this.nextFireMs) && (this.nextFireMs = wb + this.timing.intervalMs, !0) : (this.dg = !0, this.timing = this.readTiming(), this.nextFireMs = wb + (null !== (Mb = null === (eb = this.timing) || void 0 === eb ? void 0 : eb.initialDelayMs) && void 0 !== Mb ? Mb : 0), !0) : (this.dg = !1, !1);
        var Mb, eb
      }
      reset() {
        this.dg = !1
      }
    }
    const cb = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      Yb = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class Zb {
      constructor(bb) {
        this.timer = bb, this.direction = null
      }
      update(bb, wb) {
        return bb !== this.direction && (this.timer.reset(), this.direction = bb), this.timer.update(null !== bb, wb) ? bb : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  10049: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      e: () => pb
    });
    let eb = -1 / 0;
    const Hb = () => {
        eb = performance.now()
      },
      pb = bb => performance.now() - eb < bb
  },
  10004: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb,
      h: () => pb
    });
    var eb = Mb(9536),
      Hb = Mb(9515);
    const pb = bb => (0, Hb.db)(bb, (0, eb.h)().buttonRepeat),
      Vb = bb => new Hb.f((() => pb(bb)))
  },
  9553: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => lb,
      i: () => pb,
      l: () => gb
    });
    var eb = Mb(29),
      Hb = Mb(9536);
    const pb = (bb, wb) => "OpenShop" === bb ? "shop" === wb : "OpenLobbyLeaderboard" !== bb || "leaderboard" === wb;
    let Vb = !1;
    const gb = bb => {
        bb !== Vb && (Vb = bb, eb.k.iI(Hb.c, (0, Hb.h)()))
      },
      lb = () => ((bb, wb) => "shop" === bb && wb ? "shop" : "leaderboard")((0, Hb.h)().leaderboardButton, Vb)
  },
  9547: (bb, wb, Mb) => {
    Mb.d(wb, {
      C: () => zb,
      F: () => Ub,
      H: () => tb,
      L: () => Ob,
      P: () => hb,
      R: () => Lb,
      T: () => Bb,
      W: () => rb,
      Z: () => mb,
      _: () => Eb,
      ab: () => Fb,
      b: () => Ab,
      db: () => Cb,
      e: () => Jb,
      f: () => Rb,
      fb: () => sb,
      g: () => Vb,
      h: () => Kb,
      j: () => xb,
      jb: () => Yb,
      m: () => Zb,
      nb: () => pb,
      p: () => fb,
      rb: () => Xb,
      t: () => Ib,
      v: () => lb,
      vb: () => Wb,
      z: () => gb,
      zb: () => jb
    });
    var eb = Mb(9534),
      Hb = Mb(9515);
    const pb = {
        min: 25,
        max: 500,
        step: 5
      },
      Vb = {
        min: 25,
        max: 100,
        step: 5
      },
      gb = {
        min: 0,
        max: .4,
        step: .01
      },
      lb = {
        min: 25,
        max: 300,
        step: 5
      },
      Lb = {
        min: .5,
        max: 6,
        step: .1
      },
      Ib = (bb, wb) => {
        if (!Number.isFinite(bb)) return wb.min;
        const Mb = wb.min + Math.round((bb - wb.min) / wb.step) * wb.step,
          eb = Math.min(wb.max, Math.max(wb.min, Mb));
        return Math.round(1e3 * eb) / 1e3
      },
      Ob = bb => `${Math.round(bb)}%`,
      Ub = bb => Ob(100 * bb),
      tb = bb => `${bb.toFixed(1)}\xd7`,
      Cb = [{
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
      Eb = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      Fb = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      Bb = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      sb = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      mb = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      hb = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      zb = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      Xb = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      xb = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      jb = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      Kb = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      rb = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      Rb = {
        jump: "controller:settingsActionJump",
        sneak: "controller:settingsActionSneak",
        sneakToggle: "controller:settingsActionSneakToggle",
        zoom: "controller:settingsActionZoom",
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
      Db = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      cb = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      Yb = eb.g.map((bb => {
        let {
          group: wb,
          actions: Mb
        } = bb;
        const eb = Mb.map((bb => ({
          kind: "action",
          action: bb
        })));
        return {
          titleKey: Db[wb],
          rows: "gameplay" === wb ? [...cb, ...eb] : eb
        }
      })),
      Zb = Hb._.filter((bb => "Home" !== bb)),
      fb = 1e4;
    class Ab {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = bb, this.openButton = wb, this.accepts = Mb, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(bb, wb) {
        var Mb;
        this.updateIgnored(bb, wb);
        const eb = wb - (null !== (Mb = this.startMs) && void 0 !== Mb ? Mb : wb) >= 250;
        for (const Hb of Zb)
          if (Hb !== this.cancelButton && eb && !this.ignoredUntilMs.has(Hb) && bb.wasPressed(Hb) && this.accepts(Hb)) return {
            kind: "bind",
            button: Hb
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (bb.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = wb
        }
        return null === this.cancelDownAtMs ? null : bb.isHeld(this.cancelButton) && wb - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : bb.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(bb) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (bb - this.cancelDownAtMs) / 700)
      }
      updateIgnored(bb, wb) {
        if (null === this.startMs) {
          this.startMs = wb;
          for (const wb of Zb) bb.isDown(wb) && this.ignoredUntilMs.set(wb, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, wb + 250)
        }
        for (const [Mb, eb] of this.ignoredUntilMs) {
          const Hb = bb.isDown(Mb);
          eb === 1 / 0 ? Hb || Mb !== this.openButton ? Hb || this.ignoredUntilMs.delete(Mb) : this.ignoredUntilMs.set(Mb, wb + 250) : wb >= eb ? this.ignoredUntilMs.delete(Mb) : Hb && this.ignoredUntilMs.set(Mb, 1 / 0)
        }
      }
    }
    const Wb = 6e3;
    class Jb {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(bb, wb) {
        let {
          pressed: Mb,
          dg: eb
        } = bb;
        if (Mb) {
          const bb = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== bb && wb - bb < 1500 ? [...this.pressesAtMs, wb] : [wb], this.pressesAtMs.length >= 3) return 1
        }
        return eb ? (this.downAtMs ??= wb, Math.min(1, (wb - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  10064: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => pb,
      g: () => Hb
    });
    let eb = null;
    const Hb = function(bb) {
        const wb = {
          cycle: bb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return eb = wb, () => {
          eb === wb && (eb = null)
        }
      },
      pb = () => {
        var bb;
        return null !== (bb = eb) && void 0 !== bb && bb.canCycle() ? eb.cycle : null
      }
  },
  6090: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb,
      f: () => Vb
    });
    var eb = Mb(64);
    const Hb = new WeakMap,
      pb = bb => {
        var wb;
        const Mb = bb.closest("[data-pad-slider]");
        return Mb && null !== (wb = Hb.get(Mb)) && void 0 !== wb ? wb : null
      },
      Vb = (bb, wb) => {
        const Mb = (0, eb.useRef)(wb);
        Mb.current = wb, (0, eb.useEffect)((() => {
          if (bb.current) return ((bb, wb) => (Hb.set(bb, wb), () => {
            Hb.get(bb) === wb && Hb.delete(bb)
          }))(bb.current, {
            adjust: bb => {
              Mb.current.adjust(bb)
            },
            setFraction: bb => {
              Mb.current.setFraction(bb)
            },
            endDrag: () => {
              Mb.current.endDrag()
            }
          })
        }), [bb])
      }
  },
  10149: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb,
      f: () => Vb,
      g: () => pb,
      i: () => eb,
      j: () => gb,
      n: () => Lb,
      p: () => Ib
    });
    const eb = "controllerActionWheelOpen",
      Hb = "controllerActionWheelAim",
      pb = "controllerActionWheelCommit",
      Vb = "controllerActionWheelClose",
      gb = "controllerActionWheelPick";
    let lb = !1;
    const Lb = () => lb,
      Ib = bb => {
        lb = bb
      }
  },
  10144: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      g: () => Hb
    });
    let eb = 0;
    const Hb = () => {
        eb++
      },
      pb = () => eb
  },
  10061: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => lb,
      d: () => Hb,
      f: () => Vb,
      g: () => pb,
      j: () => eb,
      m: () => Lb
    });
    const eb = "controllerQuickChatWheelOpen",
      Hb = "controllerQuickChatWheelAim",
      pb = "controllerQuickChatWheelCommit",
      Vb = "controllerQuickChatWheelClose";
    let gb = !1;
    const lb = () => gb,
      Lb = bb => {
        gb = bb
      }
  },
  10075: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      d: () => Hb
    });
    var eb = Mb(29);
    const Hb = "localBlockBroken";

    function pb() {
      return {
        onPlayerChangeBlock(bb, wb, Mb, pb, Vb, gb) {
          "Air" === gb && eb.k.iI(Hb)
        }
      }
    }
  },
  10071: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb
    });
    var eb = Mb(1325);

    function Hb(bb, wb) {
      var Mb, Hb;
      try {
        const Mb = (0, eb.d)();
        if ("function" === typeof Mb) {
          const eb = new Mb(bb, wb);
          if (eb.type === bb) return eb
        }
      } catch {}
      const pb = document.createEvent("Event");
      return pb.initEvent(bb, null !== (Mb = null === wb || void 0 === wb ? void 0 : wb.bubbles) && void 0 !== Mb && Mb, null !== (Hb = null === wb || void 0 === wb ? void 0 : wb.cancelable) && void 0 !== Hb && Hb), pb
    }
  },
  10109: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb
    });
    var eb = Mb(10112),
      Hb = Mb(661),
      pb = Mb(160);

    function Vb(bb) {
      var wb, Mb;
      if ((0, Hb.K)(bb)) return !0;
      const Vb = null !== (wb = null === (Mb = pb.siteUsedData[pb.siteUsed]) || void 0 === Mb ? void 0 : Mb.adConfig.showRewardedAds) && void 0 !== wb && wb;
      for (const Hb in bb) {
        const wb = bb[Hb];
        if (null !== wb && void 0 !== wb && wb.items)
          for (const bb in wb.items)
            if ((0, eb.i)(wb.items[bb], Vb)) return !1
      }
      return !0
    }
  },
  10153: () => {},
  9579: (bb, wb, Mb) => {
    var eb = {
      "./nintendo/A.svg": 9584,
      "./nintendo/B.svg": 9586,
      "./nintendo/Down.svg": 9588,
      "./nintendo/Home.svg": 9591,
      "./nintendo/LB.svg": 9598,
      "./nintendo/LS.svg": 9600,
      "./nintendo/LT.svg": 9607,
      "./nintendo/Left.svg": 9613,
      "./nintendo/LeftStick.svg": 9620,
      "./nintendo/Menu.svg": 9629,
      "./nintendo/RB.svg": 9634,
      "./nintendo/RS.svg": 9643,
      "./nintendo/RT.svg": 9645,
      "./nintendo/Right.svg": 9649,
      "./nintendo/RightStick.svg": 9657,
      "./nintendo/Up.svg": 9663,
      "./nintendo/View.svg": 9669,
      "./nintendo/X.svg": 9676,
      "./nintendo/Y.svg": 9681,
      "./playstation/A.svg": 9687,
      "./playstation/B.svg": 9695,
      "./playstation/Down.svg": 9703,
      "./playstation/Home.svg": 9705,
      "./playstation/LB.svg": 9713,
      "./playstation/LS.svg": 9719,
      "./playstation/LT.svg": 9727,
      "./playstation/Left.svg": 9732,
      "./playstation/LeftStick.svg": 9737,
      "./playstation/Menu.svg": 9740,
      "./playstation/RB.svg": 9743,
      "./playstation/RS.svg": 9751,
      "./playstation/RT.svg": 9756,
      "./playstation/Right.svg": 9760,
      "./playstation/RightStick.svg": 9769,
      "./playstation/Up.svg": 9777,
      "./playstation/View.svg": 9784,
      "./playstation/X.svg": 9791,
      "./playstation/Y.svg": 9794,
      "./steamdeck/A.svg": 9798,
      "./steamdeck/B.svg": 9804,
      "./steamdeck/Down.svg": 9806,
      "./steamdeck/Home.svg": 9813,
      "./steamdeck/LB.svg": 9818,
      "./steamdeck/LS.svg": 9825,
      "./steamdeck/LT.svg": 9827,
      "./steamdeck/Left.svg": 9833,
      "./steamdeck/LeftStick.svg": 9835,
      "./steamdeck/Menu.svg": 9841,
      "./steamdeck/RB.svg": 9843,
      "./steamdeck/RS.svg": 9848,
      "./steamdeck/RT.svg": 9851,
      "./steamdeck/Right.svg": 9857,
      "./steamdeck/RightStick.svg": 9860,
      "./steamdeck/Up.svg": 9864,
      "./steamdeck/View.svg": 9872,
      "./steamdeck/X.svg": 9878,
      "./steamdeck/Y.svg": 9885,
      "./xbox/A.svg": 9893,
      "./xbox/B.svg": 9895,
      "./xbox/Down.svg": 9902,
      "./xbox/Home.svg": 9910,
      "./xbox/LB.svg": 9917,
      "./xbox/LS.svg": 9921,
      "./xbox/LT.svg": 9929,
      "./xbox/Left.svg": 9936,
      "./xbox/LeftStick.svg": 9940,
      "./xbox/Menu.svg": 9942,
      "./xbox/RB.svg": 9948,
      "./xbox/RS.svg": 9952,
      "./xbox/RT.svg": 9957,
      "./xbox/Right.svg": 9966,
      "./xbox/RightStick.svg": 9972,
      "./xbox/Up.svg": 9974,
      "./xbox/View.svg": 9981,
      "./xbox/X.svg": 9986,
      "./xbox/Y.svg": 9993
    };

    function Hb(bb) {
      var wb = pb(bb);
      return Mb(wb)
    }

    function pb(bb) {
      if (!Mb.o(eb, bb)) {
        var wb = new Error("Cannot find module '" + bb + "'");
        throw wb.code = "MODULE_NOT_FOUND", wb
      }
      return eb[bb]
    }
    Hb.keys = function() {
      return Object.keys(eb)
    }, Hb.resolve = pb, bb.exports = Hb, Hb.id = 9579
  },
  9584: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  9586: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  9588: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9591: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  9598: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  9600: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9607: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  9613: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9620: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9629: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  9634: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  9643: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9645: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  9649: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9657: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9663: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9669: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  9676: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  9681: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  9687: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  9695: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  9703: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  9705: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  9713: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  9719: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  9727: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  9732: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  9737: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9740: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  9743: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  9751: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  9756: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  9760: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  9769: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9777: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  9784: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  9791: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  9794: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  9798: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  9804: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  9806: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9813: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  9818: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  9825: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9827: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  9833: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9835: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9841: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  9843: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  9848: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9851: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/RT.a0523211130959598bed.svg"
  },
  9857: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9860: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9864: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9872: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  9878: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9885: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  9893: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  9895: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  9902: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9910: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  9917: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  9921: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9929: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  9936: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9940: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9942: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  9948: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  9952: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9957: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  9966: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9972: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9974: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9981: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  9986: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9993: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
export const id = 34;
export const ids = [34];
export const modules = {
  9935: (dd, Od, md) => {
    md.d(Od, {
      d: () => Vd,
      f: () => Bd,
      h: () => Sd
    });
    var Wd = md(66),
      Fd = md(5206),
      Rd = md(1186),
      Xd = md(1566),
      Kd = md(32),
      hd = md(4641),
      vd = md(3146),
      Qd = md(1300),
      td = md(3597),
      od = md(2092),
      Nd = md(2125),
      qd = md(1238),
      Hd = md(29),
      yd = md(1765),
      bd = md(1155),
      Td = md.n(bd),
      pd = md(9938),
      Yd = md(9942),
      gd = md(9944),
      wd = md(9848),
      Ed = md(9953),
      Jd = md(4298),
      Ud = (md(9958), md(1341));
    let xd = null;

    function Bd() {
      return null !== xd
    }

    function Sd() {
      return "pad" === xd
    }

    function sd() {
      return "inGame" === Hd.e.get("gameState") && !(0, yd.m)()
    }

    function ud(dd) {
      return (0, Yd.w)(dd, Qd.k, Yd.h, Yd.l, Yd.n)
    }
    const Vd = (0, Wd.memo)((function() {
      const {
        t: dd
      } = (0, qd.G)(), {
        userContext: Od
      } = (0, Rd.d)(), [md, Hd] = (0, Wd.useState)(null), [bd, Bd] = (0, Wd.useState)(null), Sd = (0, Wd.useRef)(null), Vd = (0, Wd.useCallback)((dd => {
        Sd.current = dd, Bd(dd)
      }), []), Ad = (0, Wd.useRef)(0), rd = (0, Wd.useRef)(null), Gd = (0, Wd.useRef)({
        x: 0,
        y: 0
      }), [nd, Ld] = (0, Wd.useState)(0), Pd = (0, Wd.useMemo)((() => function(dd) {
        const Od = [];
        for (let Wd = 0; Wd < Qd.k; Wd++) {
          var md;
          Od.push(null !== (md = dd[Wd]) && void 0 !== md ? md : null)
        }
        return Od
      }((0, td.h)(Od.getPlayerCosmetics().emote))), [Od, nd]);
      (0, Nd.b)("cosmeticsUpdated", (dd => {
        dd.some((dd => dd.local && "emote" === dd.KF)) && Ld((dd => dd + 1))
      }));
      const zd = (0, Wd.useRef)(!1),
        cd = (0, Wd.useCallback)((function(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === dd && (0, gd.g)(), zd.current = Od, Gd.current = {
            x: 0,
            y: 0
          }, Vd(null), Hd(dd)
        }), [Vd]),
        jd = (0, Wd.useCallback)((() => {
          Hd(null), Vd(null), Gd.current = {
            x: 0,
            y: 0
          }
        }), [Vd]),
        Dd = (0, Wd.useCallback)((dd => {
          if (Date.now() < Ad.current) return;
          const Od = (0, vd.j)(dd),
            md = !!Od.holdUntilMove,
            Wd = md ? 600 : Math.ceil(1e3 * Od.animation.animation_length / vd.d) + 200;
          Ad.current = Date.now() + Wd, rd.current = dd, od.gameBridge.send("playEmote", dd), od.gameBridge.send("applyTemporaryThirdPerson", md ? {} : {
            durationMs: Wd
          })
        }), []);
      (0, Xd.f)("requestToggleEmoteWheel", (() => {
        null === md ? sd() && cd("click") : jd()
      })), (0, Xd.f)("requestEmoteWheelHoldOpen", (() => {
        null === md && sd() && cd((0, pd.e)() ? "hold" : "click")
      })), (0, Xd.f)("requestEmoteWheelPadOpen", (dd => {
        null !== md || !sd() || (0, wd.b)() || (0, Ed.r)() || cd("pad", dd)
      })), (0, Xd.f)("requestEmoteRepeatLast", (() => {
        if (null !== md || !sd() || (0, wd.b)() || (0, Ed.r)()) return;
        const dd = rd.current;
        null !== dd && Pd.includes(dd) ? Dd(dd) : cd("pad", !0)
      }));
      const ed = () => {
        const dd = Sd.current,
          Od = null !== dd ? Pd[dd] : null;
        null !== Od && "pad" === md && Date.now() < Ad.current || (jd(), null !== Od && Dd(Od))
      };
      (0, Xd.f)("emoteWheelPadAim", (dd => {
        if ("pad" !== md) return;
        const Od = (0, Yd.J)(dd, Qd.k, Sd.current);
        Vd(null !== Od && null !== Pd[Od] ? Od : null)
      })), (0, Xd.f)("requestEmoteWheelPadCommit", (dd => {
        "pad" !== md || dd && zd.current || ed()
      })), (0, Xd.f)("appManagerUpdated|activeInputDevice", (dd => {
        null !== md && "pad" === md !== ("gamepad" === dd) && jd()
      })), (0, Wd.useLayoutEffect)((() => (xd = md, (0, hd.q)("emoteWheel", "pad" === md), Kd.j.lQ(hd.k), () => {
        xd = null, (0, hd.q)("emoteWheel", !1), Kd.j.lQ(hd.k)
      })), [md]), (0, Xd.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === md && ed()
      })), (0, Xd.f)("requestEmoteWheelClose", (() => {
        null !== md && jd()
      })), (0, Xd.f)("appManagerUpdated|gameState", (dd => {
        "inGame" !== dd && jd()
      }));
      const Id = () => {
        (0, yd.m)() && jd()
      };
      if ((0, Xd.f)("appManagerUpdated|openEverythingMenuName", Id), (0, Xd.f)("appManagerUpdated|openInGameMenuName", Id), (0, Xd.f)("pointerLockUpdate", (dd => {
          dd || "hold" !== md || jd()
        })), (0, Wd.useEffect)((() => {
          if (null === md) return;
          const dd = dd => {
            "Escape" === dd.key && (dd.stopImmediatePropagation(), dd.preventDefault(), jd())
          };
          return document.addEventListener("keydown", dd, !0), () => {
            document.removeEventListener("keydown", dd, !0)
          }
        }), [md, jd]), (0, Fd.e)(!0, "click" === md, "EmoteWheelOverlay"), (0, Wd.useEffect)((() => {
          if ("hold" === md) return od.gameBridge.send("holdEmoteWheel", !0), () => {
            od.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [md]), (0, Wd.useEffect)((() => {
          if ("hold" !== md) return;
          const dd = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            Od = Yd.t * dd,
            Wd = Yd.s * dd,
            Fd = dd => {
              let md = Gd.current.x + dd.movementX,
                Fd = Gd.current.y + dd.movementY;
              const Rd = Math.hypot(md, Fd);
              if (Rd > Od) {
                const dd = Od / Rd;
                md *= dd, Fd *= dd
              }
              Gd.current = {
                x: md,
                y: Fd
              }, Vd(function(dd, Od, md, Wd) {
                if (Math.hypot(dd, Od) < md) return null;
                const Fd = (0, Yd.A)(dd, Od, Qd.k);
                return null === Wd[Fd] ? null : Fd
              }(md, Fd, Wd, Pd))
            };
          return document.addEventListener("mousemove", Fd), () => {
            document.removeEventListener("mousemove", Fd)
          }
        }), [md, Pd, Vd]), null === md) return null;
      const ld = "hold" === md || "pad" === md,
        Cd = null !== bd ? Pd[bd] : null,
        Zd = null !== Cd ? (0, vd.j)(Cd).displayName : dd("emotes:pickEmote");
      return (0, Ud.jsx)("div", {
        className: Td()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === md
        }),
        onMouseDown: dd => {
          dd.target === dd.currentTarget && jd()
        },
        children: (0, Ud.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * Yd.t + "rem",
            height: 2 * Yd.t + "rem"
          },
          children: [(0, Ud.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${Yd.q} ${Yd.q}`,
            children: [Pd.map(((Od, md) => {
              const Wd = null !== Od,
                Fd = ld && md === bd;
              return (0, Ud.jsx)("path", {
                d: ud(md),
                className: Td()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: Fd,
                  EmoteWheelWedgeDisabled: !Wd
                }),
                onClick: dd => {
                  dd.stopPropagation(), null !== Od && (dd => {
                    jd(), Dd(dd)
                  })(Od)
                },
                "aria-label": null !== Od ? (0, vd.j)(Od).displayName : dd("emotes:emptySlot")
              }, md)
            })), (0, Ud.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: Yd.h,
              cy: Yd.h,
              r: Yd.n
            }), (0, Ud.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: Yd.h,
              cy: Yd.h,
              r: Yd.l
            }), ld && null !== bd && (0, Ud.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: ud(bd)
            })]
          }), Pd.map(((dd, Od) => {
            const md = null !== dd,
              Wd = ld && Od === bd,
              Fd = (0, Yd.E)(Od, Qd.k),
              Rd = Yd.d * Math.cos(Fd),
              Xd = Yd.d * Math.sin(Fd);
            return (0, Ud.jsx)("div", {
              className: Td()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: Wd,
                EmoteWheelSlotIconDisabled: !md
              }),
              style: {
                left: `calc(50% + ${Rd}rem)`,
                top: `calc(50% + ${Xd}rem)`,
                backgroundImage: md ? `url(${(0,Jd.h)("emote",dd)})` : void 0
              },
              "aria-hidden": !0
            }, Od)
          })), (0, Ud.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: Zd
          })]
        })
      })
    }))
  },
  5901: (dd, Od, md) => {
    md.d(Od, {
      e: () => qd,
      h: () => Yd,
      i: () => Hd,
      l: () => pd
    });
    var Wd = md(66),
      Fd = md(5909),
      Rd = md(5003),
      Xd = md(1471),
      Kd = md(4199),
      hd = md(1155),
      vd = md.n(hd),
      Qd = md(1462),
      td = md(1890),
      od = md(5936),
      Nd = md(1341);

    function qd(dd) {
      let {
        label: Od,
        onClick: md,
        checked: Wd,
        circleInfoText: Fd,
        className: Kd,
        disabled: hd,
        note: Qd
      } = dd;
      return (0, Nd.jsxs)("div", {
        "aria-disabled": hd || void 0,
        "data-pad-focusable": !0,
        className: vd()("SettingBox CheckboxContainer", {
          [Kd]: Kd,
          SettingBoxDisabled: hd
        }),
        onClick: () => {
          hd || md(!Wd)
        },
        children: [(0, Nd.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Nd.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Nd.jsx)(Rd.d, {
              className: "SettingsCheckbox",
              checked: Wd,
              disabled: hd,
              onChange: () => {}
            })
          }), (0, Nd.jsxs)("div", {
            className: "CheckboxText",
            children: [Od, Fd && (0, Nd.jsx)("span", {
              onClick: dd => dd.stopPropagation(),
              children: (0, Nd.jsx)(Xd.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Fd
              })
            })]
          })]
        }), Qd && (0, Nd.jsx)("div", {
          className: "SettingNote",
          children: Qd
        })]
      })
    }

    function Hd(dd) {
      let {
        name: Od,
        onChange: md,
        min: Fd,
        max: Rd,
        step: Kd,
        initValue: hd,
        circleInfoText: Qd,
        format: td,
        className: od,
        padStep: qd,
        disabled: Hd = !1,
        selectableMax: yd,
        cappedNote: bd,
        note: pd,
        onChangeComplete: Yd
      } = dd;
      const [gd, wd] = (0, Wd.useState)(hd), Ed = (0, Wd.useRef)(hd);
      (0, Wd.useEffect)((() => {
        Ed.current = hd, wd(hd)
      }), [hd]);
      const Jd = void 0 !== yd && yd < Rd,
        Ud = Jd ? {
          "--slider-selectable": (yd - Fd) / (Rd - Fd)
        } : void 0,
        xd = Jd && bd ? bd : pd;
      return (0, Nd.jsxs)("div", {
        className: vd()("SettingBox SettingsSliderDiv", {
          [od]: od,
          SettingBoxDisabled: Hd,
          SliderCapped: Jd
        }),
        style: Ud,
        children: [(0, Nd.jsxs)("div", {
          className: "SliderText",
          children: [`${Od}: ${td?td(gd):gd}`, Qd && (0, Nd.jsx)(Xd.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Qd
          })]
        }), (0, Nd.jsx)("div", {
          className: "SliderDiv",
          children: (0, Nd.jsx)(Td, {
            value: gd,
            min: Fd,
            max: Rd,
            step: Kd,
            onChange: dd => {
              if (Jd && dd >= yd && gd === yd) return;
              const Od = Jd ? Math.min(dd, yd) : dd;
              Ed.current = Od, wd(Od), md(Od)
            },
            onChangeComplete: Yd && (() => {
              Yd(Ed.current)
            }),
            format: td,
            padStep: qd,
            disabled: Hd
          })
        }), xd && (0, Nd.jsx)("div", {
          className: "SettingNote",
          children: xd
        })]
      })
    }
    const yd = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function bd(dd) {
      var Od;
      return (null !== (Od = String(dd).split(".")[1]) && void 0 !== Od ? Od : "").length
    }

    function Td(dd) {
      let {
        value: Od,
        min: md,
        max: Rd,
        step: Xd,
        onChange: Kd,
        orientation: hd,
        reverse: vd,
        setIsChanging: Qd,
        tooltip: td,
        labels: qd,
        handleLabel: Hd,
        format: Td,
        onChangeStart: pd,
        onChangeComplete: Yd,
        padStep: gd,
        disabled: wd = !1
      } = dd;
      const Ed = (0, Wd.useRef)(null),
        Jd = (0, Wd.useRef)(null);
      (0, Wd.useLayoutEffect)((() => {
        var dd, Od, md;
        const Wd = null !== (dd = null === (Od = Ed.current) || void 0 === Od ? void 0 : Od.querySelector(".rangeslider")) && void 0 !== dd ? dd : null;
        null === Wd || void 0 === Wd || Wd.setAttribute("data-pad-slider", ""), null === Wd || void 0 === Wd || Wd.setAttribute("data-pad-focusable", ""), null === Wd || void 0 === Wd || null === (md = Wd.querySelector(".rangeslider__handle")) || void 0 === md || md.setAttribute("data-pad-slider-handle", ""), Jd.current = Wd
      }), []), (0, Wd.useLayoutEffect)((() => {
        var dd, Od;
        wd ? null === (dd = Jd.current) || void 0 === dd || dd.setAttribute("aria-disabled", "true") : null === (Od = Jd.current) || void 0 === Od || Od.removeAttribute("aria-disabled")
      }), [wd]);
      const Ud = Math.max(bd(Xd), bd(md)),
        xd = dd => {
          if (dd >= Rd) return Rd;
          if (dd <= md) return md;
          const Od = Number((Math.round((dd - md) / Xd) * Xd + md).toFixed(Ud));
          return Math.min(Rd, Math.max(md, Od))
        },
        Bd = (0, Wd.useRef)(Yd);
      Bd.current = Yd, (0, Wd.useEffect)((() => {
        const dd = Ed.current;
        if (!dd) return;
        const Od = dd => {
          var Od;
          yd.has(dd.key) && (null === (Od = Bd.current) || void 0 === Od || Od.call(Bd))
        };
        return dd.addEventListener("keyup", Od), () => {
          dd.removeEventListener("keyup", Od)
        }
      }), []);
      const Sd = (0, Wd.useRef)(!1);
      return (0, od.f)(Jd, {
        adjust: dd => {
          if (wd) return;
          const Wd = null !== gd && void 0 !== gd ? gd : Math.max(Xd, Math.round((Rd - md) / 20 / Xd) * Xd),
            Fd = xd(Od + dd * Wd * (vd ? -1 : 1));
          Fd !== Od && (null === pd || void 0 === pd || pd(), Kd(Fd), null === Yd || void 0 === Yd || Yd())
        },
        setFraction: dd => {
          if (wd) return;
          const Wd = xd(md + (vd ? 1 - dd : dd) * (Rd - md));
          Wd !== Od && (Sd.current || (Sd.current = !0, null === pd || void 0 === pd || pd()), Kd(Wd))
        },
        endDrag: () => {
          Sd.current && (Sd.current = !1, null === Yd || void 0 === Yd || Yd())
        }
      }), (0, Nd.jsx)("div", {
        ref: Ed,
        style: {
          display: "contents"
        },
        children: (0, Nd.jsx)(Fd.e, {
          value: Od,
          min: md,
          max: Rd,
          step: Xd,
          onChange: dd => {
            Kd(xd(dd))
          },
          orientation: hd,
          reverse: vd,
          tooltip: td,
          labels: qd,
          handleLabel: Hd,
          format: Td,
          onChangeStart: () => {
            null === pd || void 0 === pd || pd(), null === Qd || void 0 === Qd || Qd(!0)
          },
          onChangeComplete: () => {
            null === Qd || void 0 === Qd || Qd(!1), null === Yd || void 0 === Yd || Yd()
          }
        })
      })
    }
    async function pd() {
      const dd = Qd.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await dd.getResult() && (0, td.reloadBloxd)()
    }

    function Yd(dd) {
      let {
        label: Od,
        options: md,
        value: Wd,
        onChange: Fd,
        circleInfoText: Rd
      } = dd;
      return (0, Nd.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Nd.jsxs)("div", {
          className: "SliderText",
          children: [Od, Rd && (0, Nd.jsx)(Xd.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Rd
          })]
        }), (0, Nd.jsx)(Kd.e, {
          ariaLabel: Od,
          options: md,
          value: Wd,
          onChange: Fd
        })]
      })
    }
  },
  9877: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd,
      g: () => Rd
    });
    var Wd = md(2141);
    const Fd = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      Rd = dd => "string" === typeof dd.icon && "" !== dd.icon && "string" === typeof dd.keycode && Fd.test(dd.keycode),
      Xd = dd => "Space" === dd ? "_" : Wd.j[dd]
  },
  9938: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd
    });
    var Wd = md(29);

    function Fd() {
      return !Wd.e.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  9942: (dd, Od, md) => {
    md.d(Od, {
      A: () => td,
      E: () => Qd,
      F: () => od,
      J: () => Nd,
      d: () => Rd,
      h: () => Kd,
      l: () => vd,
      n: () => hd,
      q: () => Xd,
      s: () => Fd,
      t: () => Wd,
      w: () => qd
    });
    const Wd = 14,
      Fd = 6,
      Rd = (Wd + Fd) / 2,
      Xd = 200,
      Kd = Xd / 2,
      hd = Xd / 2 - 1,
      vd = Fd / Wd * (Xd / 2),
      Qd = (dd, Od) => -Math.PI / 2 + 2 * dd * Math.PI / Od,
      td = (dd, Od, md) => {
        const Wd = 2 * Math.PI / md;
        return (Math.round((Math.atan2(Od, dd) + Math.PI / 2) / Wd) % md + md) % md
      },
      od = .5,
      Nd = (dd, Od, md) => Math.hypot(dd.x, dd.y) < od ? md : td(dd.x, dd.y, Od),
      qd = (dd, Od, md, Wd, Fd) => {
        const Rd = Math.PI / Od,
          Xd = Qd(dd, Od),
          Kd = Xd - Rd,
          hd = Xd + Rd,
          vd = (dd, Od) => `${md+dd*Math.cos(Od)} ${md+dd*Math.sin(Od)}`;
        return [`M ${vd(Wd,Kd)}`, `L ${vd(Fd,Kd)}`, `A ${Fd} ${Fd} 0 0 1 ${vd(Fd,hd)}`, `L ${vd(Wd,hd)}`, `A ${Wd} ${Wd} 0 0 0 ${vd(Wd,Kd)}`, "Z"].join(" ")
      }
  },
  9971: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd
    });
    var Wd = md(66),
      Fd = md(9907),
      Rd = md(3403);

    function Xd() {
      const dd = (0, Rd.j)("shopInfo"),
        [, Od] = (0, Wd.useState)((() => (0, Fd.b)(dd)));
      return (0, Rd.g)("shopInfo", (dd => {
        Od((0, Fd.b)(dd))
      })), !(0, Fd.b)(dd)
    }
  },
  9309: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd,
      c: () => Fd,
      d: () => Rd,
      g: () => od,
      h: () => td,
      l: () => vd,
      o: () => Kd,
      s: () => Wd,
      v: () => Nd,
      z: () => qd
    });
    const Wd = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      Fd = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "zoom", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: Wd
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      Rd = {
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
      Xd = [
        ["pickBlock", "perspective"],
        ["zoom", "sneakToggle"]
      ],
      Kd = dd => {
        var Od;
        return null !== (Od = Xd.find((Od => Od.includes(dd)))) && void 0 !== Od ? Od : [dd]
      },
      hd = Object.fromEntries(Fd.flatMap((dd => {
        let {
          group: Od,
          actions: md
        } = dd;
        return md.map((dd => [dd, Od]))
      }))),
      vd = dd => hd[dd],
      Qd = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      td = dd => {
        var Od;
        return [vd(dd), ...null !== (Od = Qd[dd]) && void 0 !== Od ? Od : []]
      },
      od = new Set(["menu", "inventory", "keyboard"]),
      Nd = {
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
      qd = new Set(["forward", "backward", "left", "right"])
  },
  9305: (dd, Od, md) => {
    md.d(Od, {
      D: () => Jd,
      E: () => pd,
      F: () => xd,
      J: () => Qd,
      M: () => Ud,
      N: () => sd,
      e: () => Td,
      g: () => gd,
      h: () => od,
      l: () => Nd,
      n: () => Vd,
      q: () => Sd,
      t: () => Bd,
      x: () => Yd,
      z: () => ud
    });
    var Wd = md(9309),
      Fd = md(9311),
      Rd = md(9287),
      Xd = md(9325);
    const Kd = dd => {
        var Od, md;
        return null !== (Od = null === (md = Wd.b.find((Od => {
          let [md] = Od;
          return md === dd
        }))) || void 0 === md ? void 0 : md[1]) && void 0 !== Od ? Od : dd
      },
      hd = (dd, Od) => {
        var md;
        const Fd = Kd(Od);
        return null !== (md = dd[Fd]) && void 0 !== md ? md : Wd.d[Fd]
      },
      vd = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((dd => {
        let [Od, md] = dd;
        return [
          [Od, md],
          [md, Od]
        ]
      }))),
      Qd = (dd, Od) => null !== dd && void 0 !== dd ? dd : "nintendo" === Od,
      td = dd => Qd((0, Fd.f)().swapConfirmBack, (0, Fd.j)()) && vd.get(dd) || dd,
      od = dd => hd((0, Fd.f)().bindings, td(dd)),
      Nd = dd => Wd.d[Kd(td(dd))],
      qd = Object.keys(Wd.d),
      Hd = dd => "gameplay" === (0, Wd.l)(dd) ? ["gameplay"] : (0, Wd.h)(dd),
      yd = (dd, Od) => {
        const md = Hd(Od);
        return Hd(dd).some((dd => md.includes(dd)))
      },
      bd = (dd, Od, md) => {
        const Fd = hd(dd, Od),
          Xd = new Set((0, Wd.o)(Od)),
          vd = [...Xd];
        for (let Wd = vd.pop(); Wd; Wd = vd.pop())
          for (const Od of qd) {
            const Rd = hd(dd, Od);
            Xd.has(Od) || Rd !== md && Rd !== Fd || !yd(Wd, Od) || (Xd.add(Od), vd.push(Od))
          }
        const Qd = {
          ...dd
        };
        for (const td of Xd) {
          const Od = hd(dd, td) === Fd ? md : Fd,
            Xd = (0, Wd.h)(td).some((dd => Wd.g.has(dd)));
          if ((0, Rd.I)(Od) && Xd) return null;
          Qd[Kd(td)] = Od
        }
        for (const Rd of Object.keys(Qd)) Qd[Rd] === Wd.d[Rd] && delete Qd[Rd];
        return Qd
      },
      Td = (dd, Od) => null !== bd((0, Fd.f)().bindings, td(dd), Od),
      pd = (dd, Od) => {
        if (od(dd) === Od) return !0;
        const md = bd((0, Fd.f)().bindings, td(dd), Od);
        return !!md && ((0, Fd.m)({
          bindings: md
        }), !0)
      },
      Yd = (dd, Od) => {
        const md = (0, Wd.o)(Od);
        return qd.filter((Od => Kd(Od) === Od && !md.includes(Od) && hd(dd, td(Od)) !== od(Od)))
      },
      gd = ["southpaw", "triggersSwapped"],
      wd = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      Ed = dd => Object.keys(wd[dd]),
      Jd = (dd, Od) => "southpaw" === dd ? Od.swapSticks : Ed(dd).every((md => hd(Od.bindings, md) === wd[dd][md])),
      Ud = (dd, Od) => {
        const md = (0, Fd.f)();
        let Rd = md.bindings;
        for (const Fd of Ed(dd)) {
          const md = Od ? wd[dd][Fd] : Wd.d[Fd];
          if (Rd = bd(Rd, Fd, md), !Rd) return !1
        }
        return (0, Fd.m)({
          swapSticks: "southpaw" === dd ? Od : md.swapSticks,
          bindings: Rd
        }), !0
      },
      xd = () => {
        (0, Fd.m)({
          swapSticks: !1,
          bindings: {}
        })
      },
      Bd = () => (0, Fd.f)().swapSticks ? "RightStick" : "LeftStick",
      Sd = () => (0, Fd.f)().swapSticks ? "LeftStick" : "RightStick",
      sd = dd => (0, Fd.f)().swapSticks && (0, Rd.I)(dd),
      ud = dd => sd(dd) ? Bd() : Sd(),
      Vd = dd => {
        if (Wd.z.has(dd)) return Bd();
        const Od = Wd.v[dd];
        return Od && ("leaderboard" !== Od || (0, Xd.f)(dd, (0, Xd.e)())) ? od(Od) : null
      }
  },
  9282: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      ControllerCategory: () => gK,
      ControllerGlyph: () => JF,
      ControllerRoot: () => gX,
      PadLobbyShortcuts: () => nX,
      PadSneakChip: () => BX,
      PadTooltip: () => sX,
      attachPressToContinue: () => IX,
      getBoundButton: () => Qd.h,
      getControllerSettings: () => od.f,
      getGlyphForNoaAction: () => Qd.n,
      getInventoryCursorState: () => aK,
      getMenuShortcutButton: () => lm,
      getPadGlyphIconName: () => JX,
      getPadGlyphIconUrl: () => UX,
      getPadRepeatTiming: () => Hd.h,
      handOverPadFocus: () => JK,
      hasActivePad: () => wK,
      isPadSteppingSlots: () => EK
    });
    const Wd = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionZoom":"Zoom (hold)","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var Fd = md(1238),
      Rd = md(1518),
      Xd = md(9285),
      Kd = md(86),
      hd = md(29),
      vd = md(32),
      Qd = md(9305),
      td = md(9331),
      od = md(9311),
      Nd = md(9333),
      qd = md(9287),
      Hd = md(9794),
      yd = md(9797),
      bd = md(1798);
    const Td = (dd, Od, md) => Math.max(Od, Math.min(md, dd)),
      pd = dd => Math.min(dd.width, dd.height) / 720,
      Yd = dd => Math.max(.15, dd);
    class gd {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(dd, Od) {
        const md = Math.hypot(dd.x, dd.y) >= (dd => Math.max(.3, dd))(Od);
        return this.locked ? (this.locked = md, !1) : md
      }
    }
    const wd = (dd, Od) => {
        const md = Td(Od.dtMs, 0, 100),
          Wd = md / 1e3,
          Fd = pd(Od.viewport) * (Od.cursorSpeedPercent / 100),
          Rd = (0, qd.h)(Od.stick, Yd(Od.moveDeadzone)),
          Xd = Math.hypot(Rd.x, Rd.y),
          Kd = ((dd, Od, md) => {
            if (Od < .3) return 0;
            const Wd = md / 350;
            return Od >= .85 ? Math.min(1, dd + Wd) : Math.max(0, dd - Wd)
          })(dd.speedRamp, Xd, md);
        let hd = dd.x,
          vd = dd.y;
        if (Xd > 0) {
          const dd = .45 + .55 * Kd,
            md = Od.context.overInteractive ? .45 : 1,
            Qd = 1400 * (dd => {
              const Od = Td(dd, 0, 1);
              return .3 * Od + .7 * Od * Od
            })(Xd) * Fd * dd * md;
          hd += Rd.x / Xd * Qd * Wd, vd += Rd.y / Xd * Qd * Wd
        }
        const Qd = Math.hypot(Od.dpad.x, Od.dpad.y);
        if (Qd > 0) {
          const dd = 500 * Fd;
          hd += Od.dpad.x / Qd * dd * Wd, vd += Od.dpad.y / Qd * dd * Wd
        }
        const td = Od.context.magnetTarget;
        if (td && Xd < .3 && 0 === Qd) {
          const dd = ((dd, Od, md, Wd, Fd) => {
            const Rd = Od.x - dd.x,
              Xd = Od.y - dd.y,
              Kd = Math.hypot(Rd, Xd);
            if (0 === Kd) return {
              x: 0,
              y: 0
            };
            const hd = Math.min(Kd, Fd * (1 - Wd / .3));
            let vd = Rd / Kd * hd,
              Qd = Xd / Kd * hd;
            if (Wd > 0) {
              const dd = md.x / Wd,
                Od = md.y / Wd,
                Fd = vd * dd + Qd * Od;
              Fd < 0 && (vd -= Fd * dd, Qd -= Fd * Od)
            }
            return {
              x: vd,
              y: Qd
            }
          })({
            x: hd,
            y: vd
          }, td, Rd, Xd, 120 * pd(Od.viewport) * Wd);
          hd += dd.x, vd += dd.y
        }
        return {
          x: Td(hd, 0, Math.max(0, Od.viewport.width - 1)),
          y: Td(vd, 0, Math.max(0, Od.viewport.height - 1)),
          speedRamp: Kd
        }
      },
      Ed = dd => {
        const Od = (0, qd.h)(dd, .2);
        return 0 !== Od.x || 0 !== Od.y
      },
      Jd = (dd, Od) => {
        const md = (0, qd.h)(dd, .2),
          Wd = Math.hypot(md.x, md.y);
        if (0 === Wd) return {
          x: 0,
          y: 0
        };
        const Fd = Wd * Wd * 1600,
          Rd = Td(Od, 0, 100) / 1e3;
        return {
          x: md.x / Wd * Fd * Rd,
          y: md.y / Wd * Fd * Rd
        }
      },
      Ud = (dd, Od) => "y" === Od ? dd.scrollHeight > dd.clientHeight + 1 : dd.scrollWidth > dd.clientWidth + 1,
      xd = (dd, Od) => {
        if (!Ud(dd, Od)) return !1;
        const md = getComputedStyle(dd),
          Wd = "y" === Od ? md.overflowY : md.overflowX;
        return "auto" === Wd || "scroll" === Wd
      },
      Bd = (dd, Od, md) => {
        for (let Rd = dd instanceof HTMLElement ? dd : null !== (Wd = null === dd || void 0 === dd ? void 0 : dd.parentElement) && void 0 !== Wd ? Wd : null; Rd; Rd = Rd.parentElement) {
          var Wd;
          if (xd(Rd, Od)) return Rd;
          if (Rd === md) return null
        }
        if (md) return null;
        const Fd = document.scrollingElement;
        return Fd instanceof HTMLElement && Ud(Fd, Od) ? Fd : null
      },
      Sd = new WeakMap,
      sd = (dd, Od) => {
        const md = performance.now(),
          Wd = Sd.get(dd);
        if (Wd && Wd.axis === Od && md - Wd.atMs < 500 && (!Wd.container || Wd.container.isConnected)) return Wd.container;
        const Fd = ud(dd, Od);
        return Sd.set(dd, {
          axis: Od,
          atMs: md,
          container: Fd
        }), Fd
      },
      ud = (dd, Od) => {
        let md = xd(dd, Od) ? dd : null,
          Wd = md ? md.clientWidth * md.clientHeight : 0;
        for (const Fd of dd.querySelectorAll("*")) {
          const dd = Fd.clientWidth * Fd.clientHeight;
          dd > Wd && xd(Fd, Od) && (md = Fd, Wd = dd)
        }
        return md
      },
      Vd = (dd, Od, md) => "y" === Od ? md < 0 ? dd.scrollTop > 0 : dd.scrollTop + dd.clientHeight < dd.scrollHeight - 1 : md < 0 ? dd.scrollLeft > 0 : dd.scrollLeft + dd.clientWidth < dd.scrollWidth - 1,
      Ad = (dd, Od, md) => {
        "y" === Od ? dd.scrollBy({
          top: md,
          behavior: "instant"
        }) : dd.scrollBy({
          left: md,
          behavior: "instant"
        })
      },
      rd = dd => {
        if (!dd || dd === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const Od = dd.getBoundingClientRect(),
          md = Math.max(0, Od.left),
          Wd = Math.max(0, Od.top);
        return new DOMRect(md, Wd, Math.min(window.innerWidth, Od.right) - md, Math.min(window.innerHeight, Od.bottom) - Wd)
      },
      Gd = (dd, Od) => dd.left < Od.right && Od.left < dd.right && dd.top < Od.bottom && Od.top < dd.bottom;
    var nd = md(66),
      Ld = md(1155),
      Pd = md.n(Ld),
      zd = md(1341);
    let cd = 0,
      jd = !1;
    class Dd {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(dd) {
        this.element = dd, this.shownKey = "", this.gap = null
      }
      show(dd) {
        const Od = this.element;
        if (!Od) return;
        const md = dd ? this.keepOnScreen(Od, dd) : null,
          Wd = md ? `${md.left},${md.top},${md.width},${md.height}` : "";
        if (Wd === this.shownKey) return;
        const Fd = "" === this.shownKey;
        this.shownKey = Wd, Od.classList.toggle("Visible", null !== md), md && (Od.classList.toggle("Snap", Fd), Od.style.width = `${md.width}px`, Od.style.height = `${md.height}px`, Od.style.transform = `translate(${md.left}px, ${md.top}px)`, Fd && (Od.offsetWidth, Od.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(dd, Od) {
        var md;
        const Wd = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!jd){jd=!0;const dd=document.createElement("div");dd.setAttribute("aria-hidden","true"),dd.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(dd),new ResizeObserver((()=>{cd++})).observe(dd)}return String(cd)})()}`;
        (null === (md = this.gap) || void 0 === md ? void 0 : md.key) !== Wd && (this.gap = {
          px: parseFloat(getComputedStyle(dd).paddingLeft) || 0,
          key: Wd
        });
        const Fd = this.gap.px + 2,
          Rd = Math.max(Od.left, Fd),
          Xd = Math.max(Od.top, Fd),
          Kd = Math.min(Od.left + Od.width, window.innerWidth - Fd),
          hd = Math.min(Od.top + Od.height, window.innerHeight - Fd);
        return Kd <= Rd || hd <= Xd ? Od : {
          left: Rd,
          top: Xd,
          width: Kd - Rd,
          height: hd - Xd
        }
      }
    }
    const ed = dd => {
      let {
        placer: Od,
        className: md
      } = dd;
      const Wd = (0, nd.useCallback)((dd => {
        Od.setElement(dd)
      }), [Od]);
      return (0, zd.jsx)("div", {
        ref: Wd,
        className: Pd()("PadReticle", md),
        "aria-hidden": !0
      })
    };
    var Id = md(9799);
    const ld = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const Cd = new class {
      constructor() {
        this.state = ld, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(dd) {
        if (Od = this.state, md = dd, (Od.visible || md.visible) && (Od.visible !== md.visible || Od.x !== md.x || Od.y !== md.y || Od.pressed !== md.pressed)) {
          var Od, md;
          this.state = dd;
          for (const Od of this.listeners) Od(dd)
        }
      }
      hide() {
        this.set(ld)
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
    };
    var Zd = md(9811);
    const kd = (dd, Od) => {
        let {
          kind: md,
          holding: Wd,
          hasPress: Fd,
          hasBack: Rd,
          slotHasItem: Xd
        } = Od;
        switch (dd) {
          case "primary":
            return "slot" === md ? "slotPrimary" : "recipe" === md || "button" === md ? Fd ? "pressPrimary" : "click" : "textField" === md ? "openKeyboard" : null;
          case "secondary":
            return "slot" === md ? "slotSecondary" : "button" !== md && "recipe" !== md || !Fd ? null : "pressSecondary";
          case "quickMove":
            return "slot" === md && Xd ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === md && Xd && !Wd ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return Wd ? "cancel" : Rd ? "pressBack" : "close"
        }
      },
      fd = dd => {
        const Od = [];
        if (dd.hotbarPicking) return Od.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), Od.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), Od;
        if (dd.holding) "slot" === dd.kind ? (Od.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), Od.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === dd.kind && Od.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), Od.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), Od.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), dd.openButtonCloses && Od.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var md;
          "slot" === dd.kind && dd.slotHasItem ? (Od.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), Od.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), Od.push({
            actions: ["inventoryQuickMove"],
            labelKey: dd.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), Od.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), Od.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== dd.kind && "recipe" !== dd.kind || !dd.pressHints ? "button" === dd.kind || "recipe" === dd.kind ? Od.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === dd.kind && Od.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (dd.pressHints.primary && Od.push({
            actions: ["inventoryPrimary"],
            labelKey: dd.pressHints.primary
          }), dd.pressHints.secondary && Od.push({
            actions: ["inventorySecondary"],
            labelKey: dd.pressHints.secondary
          }));
          const Wd = null === (md = dd.pressHints) || void 0 === md ? void 0 : md.back;
          Wd && Od.push({
            actions: ["inventoryClose"],
            labelKey: Wd
          });
          const Fd = [];
          dd.openButtonCloses && Fd.push("inventory"), Wd || Fd.push("inventoryClose"), Fd.length > 0 && Od.push({
            actions: Fd,
            labelKey: "inventoryClose"
          })
        }
        return Od.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), dd.hasCategories ? Od.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : dd.hasList && Od.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), Od
      };
    var Md = md(9819),
      dO = md(3326);
    class OO {
      constructor(dd) {
        this.probes = dd, this.byContainer = new Map, this.byParent = new Map
      }
      find(dd, Od) {
        const md = Bd(dd, "y", Od);
        if (!md) return null;
        let Wd = this.byContainer.get(md);
        return Wd || (this.probes.push({
          element: md,
          rect: RO(md.getBoundingClientRect())
        }), Wd = {
          container: md,
          box: rd(md),
          group: FO(md)
        }, this.byContainer.set(md, Wd)), Wd
      }
      findForParent(dd, Od) {
        let md = this.byParent.get(dd);
        return void 0 === md && (md = this.find(dd, Od), this.byParent.set(dd, md)), md
      }
    }
    const mO = new WeakMap;
    let WO = 0;
    const FO = dd => {
        let Od = mO.get(dd);
        return Od || (Od = "el:" + WO++, mO.set(dd, Od)), Od
      },
      RO = dd => ({
        left: dd.left,
        top: dd.top,
        width: dd.width,
        height: dd.height
      }),
      XO = dd => dd.width > 0 && dd.height > 0,
      KO = (dd, Od) => XO(dd) && dd.left + dd.width > 0 && dd.top + dd.height > 0 && dd.left < Od.width && dd.top < Od.height,
      hO = (dd, Od, md) => {
        const Wd = dd.top + dd.height / 2;
        return KO(dd, Od) && (!md || Wd >= md.top && Wd <= md.bottom)
      },
      vO = dd => ({
        x: dd.left + dd.width / 2,
        y: dd.top + dd.height / 2
      }),
      QO = (dd, Od, md) => dd < 0 ? md >= 0 ? 0 : Od - 1 : ((dd + md) % Od + Od) % Od,
      tO = dd => "Left" === dd || "Right" === dd,
      oO = (dd, Od, md) => {
        const Wd = tO(md),
          Fd = Wd ? dd.top : dd.left,
          Rd = Wd ? dd.height : dd.width,
          Xd = Wd ? Od.top : Od.left,
          Kd = Wd ? Od.height : Od.width,
          hd = Math.max(0, Math.max(Xd - (Fd + Rd), Fd - (Xd + Kd)));
        return Rd > 1.5 * Kd ? {
          gap: hd,
          offset: Math.max(0, Xd - Fd) + .1 * Math.max(0, Fd - Xd)
        } : {
          gap: hd,
          offset: Math.abs(Xd + Kd / 2 - (Fd + Rd / 2))
        }
      },
      NO = (dd, Od, md) => {
        const Wd = ((dd, Od, md) => {
          const Wd = vO(dd),
            Fd = vO(Od),
            Rd = tO(md) ? Math.min(dd.width, Od.width) / 4 : Math.min(dd.height, Od.height) / 4;
          switch (md) {
            case "Right":
              return Fd.x - Wd.x >= Rd ? Math.max(0, Od.left - (dd.left + dd.width)) : null;
            case "Left":
              return Wd.x - Fd.x >= Rd ? Math.max(0, dd.left - (Od.left + Od.width)) : null;
            case "Down":
              return Fd.y - Wd.y >= Rd ? Math.max(0, Od.top - (dd.top + dd.height)) : null;
            case "Up":
              return Wd.y - Fd.y >= Rd ? Math.max(0, dd.top - (Od.top + Od.height)) : null
          }
        })(dd, Od, md);
        if (null === Wd) return null;
        const Fd = oO(dd, Od, md);
        return Wd + 3 * Fd.gap + .5 * Fd.offset
      },
      qO = (dd, Od) => Od.visible || null !== Od.scrollGroup && Od.scrollGroup === dd.scrollGroup,
      HO = (dd, Od, md, Wd) => {
        let Fd = null,
          Rd = 1 / 0;
        for (const Xd of Od) {
          if (Xd.key === dd.key || !qO(dd, Xd) || !Wd(Xd)) continue;
          const Od = NO(dd.rect, Xd.rect, md);
          null !== Od && Od < Rd && (Fd = Xd, Rd = Od)
        }
        return Fd
      },
      yO = (dd, Od, md) => {
        const Wd = HO(dd, Od, md, (() => !0));
        if (!Wd || tO(md) || null === dd.scrollGroup || Wd.scrollGroup === dd.scrollGroup) return Wd;
        const Fd = HO(dd, Od, md, (Od => 0 === oO(dd.rect, Od.rect, md).gap));
        return null !== Fd && void 0 !== Fd ? Fd : Wd
      },
      bO = (dd, Od, md) => {
        let Wd = null,
          Fd = 1 / 0;
        for (const Rd of Od) {
          if (!Rd.visible || md && !md(Rd)) continue;
          const Od = vO(Rd.rect),
            Xd = Math.hypot(Od.x - dd.x, Od.y - dd.y);
          Xd < Fd && (Wd = Rd, Fd = Xd)
        }
        return Wd
      },
      TO = dd => {
        const {
          rect: Od,
          clip: md
        } = dd;
        if (!md) return Od;
        const Wd = Math.max(Od.left, md.left),
          Fd = Math.max(Od.top, md.top);
        return {
          left: Wd,
          top: Fd,
          width: Math.min(Od.left + Od.width, md.left + md.width) - Wd,
          height: Math.min(Od.top + Od.height, md.top + md.height) - Fd
        }
      },
      pO = (dd, Od) => Od.x >= dd.left && Od.x < dd.left + dd.width && Od.y >= dd.top && Od.y < dd.top + dd.height,
      YO = (dd, Od) => {
        let md = null,
          Wd = 1 / 0;
        for (const Fd of Od) {
          const Od = TO(Fd);
          (Fd.visible || Fd.clip) && pO(Od, dd) && (Od.width * Od.height < Wd && (md = Fd, Wd = Od.width * Od.height))
        }
        return md
      },
      gO = dd => {
        let Od = null;
        for (const md of dd) {
          if (!md.visible) continue;
          if (!Od) {
            Od = md;
            continue
          }
          const dd = Math.min(Od.rect.height, md.rect.height) / 2,
            Wd = md.rect.top - Od.rect.top;
          (Wd < -dd || Math.abs(Wd) <= dd && md.rect.left < Od.rect.left) && (Od = md)
        }
        return Od
      },
      wO = (dd, Od, md, Wd, Fd) => {
        const Rd = Fd % Od,
          Xd = Math.floor(Fd / Od);
        return {
          left: dd.left + Rd * md,
          top: dd.top + Xd * Wd,
          width: dd.width,
          height: dd.height
        }
      },
      aO = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      EO = ".LazyLoadedItemWrapper",
      JO = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      UO = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      xO = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      BO = dd => dd.hasAttribute("data-inven-idx") ? "slot" : dd.hasAttribute("data-recipe-key") ? "recipe" : dd.hasAttribute("data-craft-ingredient") || (0, dO.t)(dd) ? "info" : (0, Id.N)(dd) ? "textField" : "button",
      SO = (dd, Od) => "slot" === Od ? Number(dd.getAttribute("data-inven-idx")) : null,
      sO = dd => dd.matches(EO) ? dd.querySelector(JO) : dd,
      uO = dd => {
        var Od, md;
        return {
          element: dd,
          recipe: null !== (Od = dd && (null === (md = sO(dd)) || void 0 === md ? void 0 : md.getAttribute("data-recipe-key"))) && void 0 !== Od ? Od : null
        }
      },
      VO = dd => {
        const Od = sO(dd);
        if (!Od) return {
          kind: "pending",
          idx: null
        };
        const md = BO(Od);
        return {
          kind: md,
          idx: SO(Od, md)
        }
      },
      iO = dd => {
        const Od = [];
        for (const [md, Wd] of UO) {
          dd.matches(Wd) && Od.push([md, dd]);
          for (const Fd of dd.querySelectorAll(Wd)) Od.push([md, Fd])
        }
        return Od
      },
      AO = (dd, Od) => {
        for (const [md, Wd] of dd)
          if (Wd.contains(Od)) return md;
        return "other"
      },
      rO = (dd, Od, md, Wd, Fd, Rd, Xd, Kd) => {
        var hd;
        const vd = dd.children,
          Qd = RO(vd[0].getBoundingClientRect()),
          td = [{
            element: vd[0],
            rect: Qd
          }];
        if (Rd.push(td[0]), 0 === Qd.width || 0 === Qd.height) return;
        let od = 1;
        for (; od < vd.length && Math.abs(vd[od].getBoundingClientRect().top - Qd.top) < 1;) od++;
        const Nd = dd => {
            const Od = {
              element: vd[dd],
              rect: RO(vd[dd].getBoundingClientRect())
            };
            return Rd.push(Od), td.push(Od), Od.rect
          },
          qd = od > 1 ? Nd(1).left - Qd.left : Qd.width,
          Hd = vd.length > od ? Nd(od).top - Qd.top : Qd.height,
          yd = Xd.find(dd, Od);
        let bd = null;
        if (yd) {
          var Td;
          const {
            container: dd,
            box: Od
          } = yd;
          bd = null !== (Td = Kd.get(dd)) && void 0 !== Td ? Td : null, bd || (bd = {
            top: dd.scrollTop,
            left: dd.scrollLeft,
            box: Od,
            viewport: Wd,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, Kd.set(dd, bd)), bd.probes.push(...td)
        }
        const pd = Fd.length;
        for (let Ed = 0; Ed < vd.length; Ed++) {
          var Yd, gd, wd;
          const dd = vd[Ed],
            Od = wO(Qd, od, qd, Hd, Ed),
            Rd = dd.firstElementChild ? dd.querySelector(JO) : null,
            Xd = Rd ? BO(Rd) : "pending";
          Fd.push({
            key: FO(dd),
            rect: Od,
            panel: md,
            scrollGroup: null !== (Yd = null === yd || void 0 === yd ? void 0 : yd.group) && void 0 !== Yd ? Yd : null,
            visible: hO(Od, Wd, null === yd || void 0 === yd ? void 0 : yd.box),
            clip: null !== (gd = null === yd || void 0 === yd ? void 0 : yd.box) && void 0 !== gd ? gd : null,
            element: dd,
            kind: Xd,
            idx: Rd ? SO(Rd, Xd) : null,
            scrollContainer: null !== (wd = null === yd || void 0 === yd ? void 0 : yd.container) && void 0 !== wd ? wd : null
          })
        }
        null === (hd = bd) || void 0 === hd || hd.targets.push(...Fd.slice(pd))
      },
      GO = dd => dd instanceof Element && null !== dd.closest(EO),
      nO = dd => null !== dd.scrollContainer && GO(dd.element);
    class LO {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(dd, Od, md, Wd) {
        this.latched = {
          source: dd,
          focusKey: Od,
          sinceMs: md,
          hold: {
            id: ++this.presses,
            holdMs: Wd
          }
        }
      }
      update(dd, Od, md) {
        const Wd = this.latched;
        return Wd ? dd && Od === Wd.focusKey ? md - Wd.sinceMs < Wd.hold.holdMs ? null : (this.latched = null, Wd.source) : (this.latched = null, null) : null
      }
      getHold() {
        var dd, Od;
        return null !== (dd = null === (Od = this.latched) || void 0 === Od ? void 0 : Od.hold) && void 0 !== dd ? dd : null
      }
      reset() {
        this.latched = null
      }
    }
    var PO = md(9825);
    const zO = {
        kind: "none"
      },
      cO = dd => ({
        x: dd.clientX,
        y: dd.clientY
      }),
      jO = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class DO {
      constructor() {
        this.hovered = zO, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(dd, Od, md, Wd, Fd) {
        const Rd = null !== Od ? {
            kind: "slot",
            idx: Od
          } : md ? {
            kind: "element",
            element: md
          } : zO,
          Xd = `${Fd}|${Math.round(Wd.clientX)},${Math.round(Wd.clientY)}`,
          Kd = (hd = this.hovered, vd = Rd, "slot" === hd.kind && "slot" === vd.kind ? hd.idx === vd.idx : "element" === hd.kind && "element" === vd.kind ? hd.element === vd.element : hd.kind === vd.kind);
        var hd, vd;
        if (Kd && Xd === this.signature) return;
        const Qd = !Kd || Fd !== this.holding || "" === this.signature;
        this.signature = Xd, this.holding = Fd, this.lastPoint = Wd;
        const td = this.hovered;
        if (this.hovered = Rd, "slot" === Rd.kind) return this.leaveElement(td, null, Wd), void(Qd ? dd.hover(Rd.idx, Wd) : dd.moveTo(Wd));
        if (Kd) return void("element" === Rd.kind ? (0, Id.r)(Rd.element, Rd.element, cO(Wd)) : dd.hover(null, Wd));
        dd.hover(null, Wd);
        const od = "element" === Rd.kind ? Rd.element : null;
        "element" === td.kind ? (0, Id.r)(td.element, od, cO(Wd)) : od && (0, Id.r)(null, od, cO(Wd))
      }
      invalidate() {
        this.signature = ""
      }
      clear(dd) {
        const Od = this.hovered;
        this.hovered = zO, this.signature = "", "none" !== Od.kind && (this.leaveElement(Od, null, this.lastPoint), dd && "slot" === Od.kind && dd.hover(null, this.lastPoint))
      }
      leaveElement(dd, Od, md) {
        "element" === dd.kind && (0, Id.r)(dd.element, Od, cO(md))
      }
    }
    class eO {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(dd, Od) {
        Ed(dd) && (this.lastTiltedMs = Od)
      }
      allowsClick(dd) {
        return dd - this.lastTiltedMs > 150
      }
    }
    class IO {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(dd) {
        return 0 !== (0, qd.h)(dd, .2).y
      }
      step(dd, Od, md) {
        dd !== this.container && (this.container = dd, this.remainder = 0);
        const Wd = Jd(Od, md).y;
        if (0 === Wd) return this.remainder = 0, !1;
        const Fd = this.remainder + Wd,
          Rd = Math.trunc(Fd);
        if (this.remainder = Fd - Rd, 0 === Rd) return !1;
        const Xd = dd.scrollTop;
        return dd.scrollTop = Xd + Rd, dd.scrollTop !== Xd
      }
      current() {
        var dd;
        return null !== (dd = this.container) && void 0 !== dd && dd.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var lO = md(9828);
    const CO = "[data-pad-inventory-default]",
      ZO = ".HotBarGameItemsContainer .InvenItem.Selected",
      kO = {
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
      fO = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      MO = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      dm = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      Om = [...MO, ...dm],
      mm = () => {
        return dd = (0, Qd.h)("inventory"), !Om.map(Qd.h).includes(dd) && !(0, qd.I)(dd);
        var dd
      },
      Wm = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      Fm = (dd, Od) => {
        const md = !(null === Od || void 0 === Od || !Od.isHolding());
        return function(dd, Od) {
          const md = dd.find((dd => dd.visible && Od(dd)));
          if (md) return md;
          for (var Wd = arguments.length, Fd = new Array(Wd > 2 ? Wd - 2 : 0), Rd = 2; Rd < Wd; Rd++) Fd[Rd - 2] = arguments[Rd];
          for (const Xd of Fd) {
            const Od = gO(dd.filter(Xd));
            if (Od) return Od
          }
          return gO(dd)
        }(dd, (dd => {
          const {
            element: Od
          } = dd;
          return Od.matches(CO) || null !== Od.querySelector(CO) || Od.matches(ZO)
        }), (dd => "slot" === dd.kind ? md || null !== dd.idx && !(null === Od || void 0 === Od || !Od.hasItemAt(dd.idx)) : "recipe" === dd.kind || "pending" === dd.kind), (dd => "slot" === dd.kind || "button" === dd.kind))
      };
    class Rm {
      constructor() {
        this.set = null, this.observer = new MutationObserver((dd => {
          dd.some((dd => !GO(dd.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = dd => {
          this.scrolled(dd.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const dd = [],
              Od = [];
            let md = !1;
            const Wd = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              Fd = new Map,
              Rd = new OO(Od);
            for (const td of document.querySelectorAll(aO)) {
              const Qd = iO(td);
              md ||= null !== td.querySelector(".CreativeCategoryTab");
              for (const md of td.querySelectorAll(`${EO}:first-child`)) {
                const Xd = md.parentElement;
                rO(Xd, td, AO(Qd, Xd), Wd, dd, Od, Rd, Fd)
              }
              for (const md of td.querySelectorAll(JO)) {
                var Xd, Kd, hd, vd;
                if (md.closest(EO) || md.closest("[data-pad-ignore]")) continue;
                const od = null === (Xd = md.parentElement) || void 0 === Xd ? void 0 : Xd.closest(JO);
                if (od && td.contains(od)) continue;
                const Nd = BO(md),
                  qd = SO(md, Nd);
                if (-1 === qd) continue;
                const Hd = RO(md.getBoundingClientRect());
                Od.push({
                  element: md,
                  rect: Hd
                });
                const yd = Rd.findForParent(md.parentElement, td),
                  bd = yd && !Fd.has(yd.container) ? yd : null;
                (bd ? XO(Hd) : KO(Hd, Wd)) && dd.push({
                  key: FO(md),
                  rect: Hd,
                  panel: AO(Qd, md),
                  scrollGroup: null !== (Kd = null === bd || void 0 === bd ? void 0 : bd.group) && void 0 !== Kd ? Kd : null,
                  visible: hO(Hd, Wd, null === bd || void 0 === bd ? void 0 : bd.box),
                  clip: null !== (hd = null === bd || void 0 === bd ? void 0 : bd.box) && void 0 !== hd ? hd : null,
                  element: md,
                  kind: Nd,
                  idx: qd,
                  scrollContainer: null !== (vd = null === bd || void 0 === bd ? void 0 : bd.container) && void 0 !== vd ? vd : null
                })
              }
            }
            for (const [td, od] of Fd) od.holdsOthers = Od.some((dd => dd.element !== td && td.contains(dd.element) && !dd.element.closest(EO)));
            const Qd = new Map;
            for (const td of dd) Qd.set(td.element, td);
            return {
              targets: dd,
              byElement: Qd,
              hasCategories: md,
              probes: Od,
              scrollers: Fd
            }
          })(), this.observer.disconnect();
          for (const dd of document.querySelectorAll(aO)) this.observer.observe(dd, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(dd) {
        !this.set || dd instanceof Element && ((dd, Od) => {
          const md = dd.scrollers.get(Od);
          if (!md || md.holdsOthers || Od.scrollLeft !== md.left) return !1;
          const Wd = Od.scrollTop - md.top;
          if (0 === Wd) return !0;
          md.top = Od.scrollTop;
          for (const Fd of md.probes) Fd.rect.top -= Wd;
          for (const Fd of md.targets) Fd.rect.top -= Wd, Fd.visible = hO(Fd.rect, md.viewport, md.box);
          return !0
        })(this.set, dd) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((dd => {
          return Od = dd.rect, md = dd.element.getBoundingClientRect(), !(Od.left === md.left && Od.top === md.top && Od.width === md.width && Od.height === md.height);
          var Od, md
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const Xm = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(qd.C.map((dd => [dd, (0, Hd.e)(qd.F)]))), this.stickRepeat = new qd.d((0, Hd.e)(qd.jb)), this.pageUpTimer = (0, Hd.e)(qd.eb), this.pageDownTimer = (0, Hd.e)(qd.eb), this.stickGate = new gd, this.pointer = null, this.activePress = null, this.dropLatch = new LO, this.scroller = new IO, this.scrollStickClick = new eO, this.hover = new DO, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new Dd, this.targets = new Rm, this.hasCategories = !1, this.wasShowing = !1, this.state = PO.c, this.isActive = () => (0, Md.i)(), this.isShowing = () => "inventory" === td.b.getActiveConsumerName() && (0, Nd.h)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, Md.g)()), (0, Md.i)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var dd;
            this.reopenSlotIdx = null !== (dd = this.focused ? VO(this.focused).idx : null) && void 0 !== dd ? dd : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, Md.s)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = dd => {
            (0, Kd.unstable_batchedUpdates)((() => {
              this.frame(dd)
            }))
          }, this.shouldBlockRealPointer = dd => dd.isTrusted && !(0, bd.s)(dd) && this.isShowing(), this.noteRealPointer = dd => {
            dd instanceof MouseEvent && dd.isTrusted && !(0, bd.s)(dd) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = dd.clientX, this.lastRealPointer.y = dd.clientY)
          }, this.wakePressActs = dd => {
            var Od;
            return dd === (0, Qd.h)("inventoryClose") ? !(null !== (Od = (0, Md.g)()) && void 0 !== Od && Od.isHolding()) : !(dd !== (0, Qd.h)("inventory") || !mm()) || ((0, qd.I)(dd) ? this.isNavButton(dd) : dm.some((Od => (0, Qd.h)(Od) === dd)))
          }
        }
        frame(dd) {
          var Od, md, Wd, Fd, Rd;
          const Xd = (0, Md.g)();
          if (!(0, Nd.h)()) return void(this.wasShowing && (this.endInteraction(Xd), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), dd.wokeDevice && this.focusWakePointer(!(null === Xd || void 0 === Xd || !Xd.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, od.f)().inventoryNavigation || this.pointer || this.engagePointer();
          const Kd = performance.now();
          this.handleNavigation(dd, Kd), this.handlePanels(dd), this.handlePaging(dd, Kd), this.handleScroll(dd), this.handleButtons(dd, Kd, Xd), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const hd = this.ensureFocus(),
            vd = this.focusContext(Xd);
          this.ring.show(hd);
          const td = "slot" === vd.kind ? vd.idx : null,
            qd = null !== (Od = null === (md = vd.actionElement) || void 0 === md ? void 0 : md.querySelector(".DoCraftItem")) && void 0 !== Od ? Od : vd.actionElement;
          this.pointer ? (this.hover.sync(Xd, td, qd, ((dd, Od) => {
            const md = Od ? jO() : 0;
            return {
              clientX: dd.x - md,
              clientY: dd.y - md
            }
          })(this.pointer, vd.holding), vd.holding), Cd.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: dd.isHeld((0, Qd.h)("inventoryPrimary"))
          })) : hd && this.focused && this.hover.sync(Xd, td, qd, ((dd, Od) => {
            if (!Od) return {
              clientX: dd.left + dd.width - 10,
              clientY: dd.top + dd.height / 2 - 10
            };
            const md = jO();
            return {
              clientX: dd.left + dd.width / 2 - md,
              clientY: dd.top + dd.height / 2 - md
            }
          })(hd, vd.holding), vd.holding), this.publishState({
            showing: !0,
            kind: vd.kind,
            holding: vd.holding,
            slotHasItem: vd.slotHasItem,
            pressHints: null !== (Wd = null === (Fd = vd.press) || void 0 === Fd ? void 0 : Fd.hints) && void 0 !== Wd ? Wd : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && nO(this.focusTarget),
            openButtonCloses: mm(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === vd.kind && !(null === (Rd = vd.actionElement) || void 0 === Rd || !Rd.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(dd) {
          var Od;
          const md = (0, Nd.c)();
          if (!md) return;
          this.targets.revalidate();
          const Wd = this.getTargets().targets;
          this.setFocus(null !== (Od = YO(md, Wd)) && void 0 !== Od ? Od : dd ? bO(md, Wd, (dd => {
            let {
              rect: Od
            } = dd;
            const Wd = Math.max(Od.left - md.x, 0, md.x - (Od.left + Od.width)),
              Fd = Math.max(Od.top - md.y, 0, md.y - (Od.top + Od.height));
            return Math.hypot(Wd, Fd) <= Math.min(Od.width, Od.height) / 2
          })) : null, !1), "cursor" === (0, od.f)().inventoryNavigation && (this.pointer = {
            x: md.x,
            y: md.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const dd = this.lastRealPointer;
          if (!dd || "keyboardMouse" !== hd.e.get("activeInputDevice")) return;
          const Od = document.elementFromPoint(dd.x, dd.y);
          Od && (0, Id.r)(null, Od, dd)
        }
        endInteraction(dd) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const Od of this.dpadTimers.values()) Od.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(dd), this.ring.hide(), this.releasePointer(), this.publishState(PO.c)
        }
        getTargets() {
          const dd = this.targets.get();
          return this.hasCategories = dd.hasCategories, dd
        }
        currentTarget() {
          var dd;
          return this.focused && null !== (dd = this.getTargets().byElement.get(this.focused)) && void 0 !== dd ? dd : null
        }
        readFocusRect() {
          const dd = this.focused;
          if (null === dd || void 0 === dd || !dd.isConnected || !dd.closest(aO)) return null;
          const Od = dd.getBoundingClientRect();
          return Od.width > 0 && Od.height > 0 ? {
            left: Od.left,
            top: Od.top,
            width: Od.width,
            height: Od.height
          } : null
        }
        ensureFocus() {
          const dd = this.readFocusRect();
          if (dd || this.pointer) return dd;
          const {
            targets: Od,
            byElement: md
          } = this.getTargets();
          let Wd = null,
            Fd = !1;
          if (this.lastRect) Wd = bO(vO(this.lastRect), Od);
          else {
            var Rd, Xd;
            const dd = ((dd, Od) => {
                const md = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return md ? Fm(dd.filter((dd => md.contains(dd.element))), Od) : null
              })(Od, (0, Md.g)()),
              Kd = Od.find((dd => null !== dd.idx && dd.idx === this.reopenSlotIdx)),
              hd = document.querySelector(ZO);
            Fd = null !== dd || void 0 !== Kd, Wd = null !== (Rd = null !== (Xd = null !== dd && void 0 !== dd ? dd : Kd) && void 0 !== Xd ? Xd : hd && md.get(hd)) && void 0 !== Rd ? Rd : gO(Od)
          }
          return this.setFocus(Wd, Fd), this.lastRect
        }
        setFocus(dd) {
          let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          dd && (this.focused = dd.element, this.focusTarget = dd, this.panelMemory.set(dd.panel, dd.element), Od && dd.scrollContainer && ((dd, Od) => {
            const md = dd.getBoundingClientRect(),
              Wd = rd(Od),
              Fd = Od.scrollTop;
            return md.top < Wd.top ? Od.scrollTop -= Wd.top - md.top : md.bottom > Wd.bottom && (Od.scrollTop += md.bottom - Wd.bottom), Od.scrollTop !== Fd
          })(dd.element, dd.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, od.f)().inventoryNavigation) {
              if (this.lastRect) {
                const dd = vO(this.lastRect);
                this.pointer = {
                  x: dd.x,
                  y: dd.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const dd = this.lastRect ? vO(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: dd.x,
            y: dd.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, Cd.hide()
        }
        hoverAtPointer() {
          var dd;
          const Od = YO(this.pointer, this.getTargets().targets);
          this.focusTarget = Od, (null === Od || void 0 === Od ? void 0 : Od.element) !== this.focused && (this.focused = null !== (dd = null === Od || void 0 === Od ? void 0 : Od.element) && void 0 !== dd ? dd : null, Od && (this.panelMemory.set(Od.panel, Od.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(dd, Od) {
          const md = this.focusTarget,
            Wd = md && (0, od.f)().cursorMagnetism ? vO(TO(md)) : null;
          this.pointer = wd(this.pointer, {
            stick: dd.leftStick,
            moveDeadzone: (0, od.f)().moveDeadzone,
            dpad: Od,
            dtMs: dd.dtMs,
            cursorSpeedPercent: (0, od.f)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: Wd
            }
          })
        }
        move(dd) {
          this.targets.revalidate();
          const Od = this.currentTarget();
          Od && this.setFocus(yO(Od, this.getTargets().targets, dd))
        }
        step(dd) {
          const Od = this.pointer;
          if (Od && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((dd, Od, md) => {
            var Wd;
            const Fd = {
              key: "",
              rect: {
                left: dd.x,
                top: dd.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (Wd = yO(Fd, Od, md)) && void 0 !== Wd ? Wd : bO(dd, Od)
          })(Od, this.getTargets().targets, dd));
          this.move(dd)
        }
        isNavButton(dd) {
          return !MO.some((Od => (0, Qd.h)(Od) === dd)) && !(dd === (0, Qd.h)("inventory") && mm())
        }
        handleNavigation(dd, Od) {
          const md = (0, od.f)().inventoryNavigation,
            Wd = {
              x: 0,
              y: 0
            };
          let Fd = null;
          for (const hd of qd.C) {
            const Rd = this.isNavButton(hd) && dd.isHeld(hd);
            Rd && (Wd.x += kO[hd].x, Wd.y += kO[hd].y), this.dpadTimers.get(hd).update(Rd, Od) && "cursor" !== md && (Fd ??= hd)
          }
          const Rd = this.stickGate.update(dd.leftStick, (0, od.f)().moveDeadzone);
          if (Fd && (this.step(Fd), this.stickGate.lock()), "slot" !== md) {
            const Od = ((dd, Od, md, Wd) => "hybrid" !== dd ? "cursor" === dd : !Wd && (Od || md))(md, null !== this.pointer, Rd, null !== Fd);
            return Od && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(dd, "cursor" === md ? Wd : {
              x: 0,
              y: 0
            }))
          }
          const Xd = (0, qd.h)(dd.leftStick, (0, od.f)().moveDeadzone),
            Kd = this.stickRepeat.update(Rd ? (0, qd.mb)(Xd) : null, Od);
          Kd && this.move(Kd)
        }
        applyCategoryPlace() {
          const dd = this.placeAfterCategory;
          if (!dd) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const Od = bO(vO(dd.rect), this.getTargets().targets, (Od => Od.scrollGroup === dd.scrollGroup));
          this.setFocus(Od, !1)
        }
        applyFocusRequest() {
          const dd = (0, Md.s)();
          dd && (this.targets.invalidate(), this.setFocus((0, Md.d)(this.getTargets().targets, dd)))
        }
        handlePanels(dd) {
          var Od, md, Wd;
          const Fd = dd.wasPressed((0, Qd.h)("inventoryPanelPrevious")),
            Rd = dd.wasPressed((0, Qd.h)("inventoryPanelNext"));
          if (!Fd && !Rd) return;
          const {
            targets: Xd
          } = this.getTargets(), Kd = (hd = ((dd, Od) => {
            const md = [];
            for (const Fd of dd) Fd.visible && !md.includes(Fd.panel) && md.push(Fd.panel);
            const Wd = dd => {
              const Wd = Od.indexOf(dd);
              return -1 === Wd ? Od.length + md.indexOf(dd) : Wd
            };
            return md.sort(((dd, Od) => Wd(dd) - Wd(Od)))
          })(Xd, xO), vd = null !== (Od = null === (md = this.focusTarget) || void 0 === md ? void 0 : md.panel) && void 0 !== Od ? Od : null, td = Rd ? 1 : -1, 0 === hd.length ? null : hd[QO(null === vd ? -1 : hd.indexOf(vd), hd.length, td)]);
          var hd, vd, td;
          if (null === Kd) return;
          const od = this.panelMemory.get(Kd),
            Nd = Xd.filter((dd => dd.panel === Kd)),
            qd = null !== (Wd = Nd.find((dd => dd.element === od && dd.visible))) && void 0 !== Wd ? Wd : Fm(Nd, (0, Md.g)());
          this.setFocus(qd)
        }
        handlePaging(dd, Od) {
          const md = (0, Qd.h)("menuPageUp"),
            Wd = (0, Qd.h)("menuPageDown"),
            Fd = this.pageUpTimer.update(dd.isHeld(md), Od),
            Rd = this.pageDownTimer.update(dd.isHeld(Wd), Od);
          if (!Fd && !Rd) return;
          const Xd = Rd ? 1 : -1;
          if (!dd.wasPressed(Rd ? Wd : md) && this.hasCategories) return;
          if ((dd => {
              const Od = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === Od.length) return !1;
              const md = Od.findIndex((dd => dd.classList.contains("Selected"))),
                Wd = Od[QO(md, Od.length, dd)];
              return (0, Id.n)(Wd, (0, Id.A)(Wd)), !0
            })(Xd)) {
            var Kd, hd;
            this.targets.invalidate();
            const dd = null !== (Kd = null === (hd = this.focusTarget) || void 0 === hd ? void 0 : hd.scrollGroup) && void 0 !== Kd ? Kd : null,
              Od = this.readFocusRect();
            return void(this.placeAfterCategory = null !== dd && Od && !this.pointer ? {
              rect: Od,
              scrollGroup: dd
            } : null)
          }
          const {
            targets: vd
          } = this.getTargets(), td = this.currentTarget(), od = td && nO(td) ? td : vd.find((dd => nO(dd) && dd.visible));
          if (!od) return;
          const Nd = ((dd, Od, md, Wd) => {
            if (null === dd.scrollGroup) return null;
            const Fd = vO(dd.rect),
              Rd = Fd.x,
              Xd = Fd.y + ("Down" === md ? Wd : -Wd);
            let Kd = null,
              hd = 1 / 0;
            for (const vd of Od) {
              if (vd.scrollGroup !== dd.scrollGroup || vd.key === dd.key) continue;
              const Od = vO(vd.rect);
              if ("Down" === md ? Od.y <= Fd.y : Od.y >= Fd.y) continue;
              const Wd = Math.hypot(Od.x - Rd, Od.y - Xd);
              Wd < hd && (Kd = vd, hd = Wd)
            }
            return Kd
          })(od, vd, Xd > 0 ? "Down" : "Up", od.scrollContainer.clientHeight);
          this.setFocus(null !== Nd && void 0 !== Nd ? Nd : od)
        }
        handleScroll(dd) {
          var Od, md, Wd, Fd, Rd, Xd;
          if (!this.scroller.isScrolling(dd.rightStick)) return void this.scroller.reset();
          const {
            targets: Kd
          } = this.getTargets(), hd = this.pointer, vd = !hd && this.focusTarget && nO(this.focusTarget) ? this.focusTarget.scrollContainer : null, Qd = hd && (null === (Od = Kd.find((dd => dd.clip && pO(dd.clip, hd)))) || void 0 === Od ? void 0 : Od.scrollContainer), td = null !== (md = null !== (Wd = null !== (Fd = this.scroller.current()) && void 0 !== Fd ? Fd : Qd) && void 0 !== Wd ? Wd : vd) && void 0 !== md ? md : null === (Rd = Kd.find(nO)) || void 0 === Rd ? void 0 : Rd.scrollContainer;
          if (!td || !this.scroller.step(td, dd.rightStick, dd.dtMs)) return;
          this.targets.scrolled(td);
          const od = hd || (null === (Xd = this.focusTarget) || void 0 === Xd ? void 0 : Xd.scrollContainer) !== td ? null : this.readFocusRect();
          if (!od) return;
          const Nd = rd(td),
            qd = vO(od);
          if (qd.y < Nd.top || qd.y > Nd.bottom) {
            const dd = this.focusTarget.scrollGroup,
              Od = bO(qd, this.getTargets().targets, (Od => Od.scrollGroup === dd));
            this.setFocus(Od, !1)
          }
        }
        focusContext(dd) {
          const {
            kind: Od,
            idx: md
          } = this.focused ? VO(this.focused) : {
            kind: null,
            idx: null
          }, Wd = this.focused ? sO(this.focused) : null, Fd = Wd ? (0, lO.d)(Wd) : null;
          return {
            kind: Od,
            idx: md,
            actionElement: Wd,
            press: Fd,
            hasPress: null !== Fd,
            hasBack: !(null === Fd || void 0 === Fd || !Fd.back),
            holding: dd.isHolding(),
            slotHasItem: null !== md && dd.hasItemAt(md)
          }
        }
        handleButtons(dd, Od, md) {
          var Wd, Fd;
          if (!this.activePress || dd.isHeld(this.activePress.button) && (Wd = this.activePress.target, Fd = this.focused, null !== Wd.recipe ? uO(Fd).recipe === Wd.recipe : Fd === Wd.element) || this.releasePress(), this.scrollStickClick.update(dd.rightStick, Od), !this.handleHotbarPick(dd, md)) {
            for (const [Wd, Fd] of fO) {
              const Rd = (0, Qd.h)(Fd);
              if (!dd.wasPressed(Rd) || "openButton" === Wd && !mm()) continue;
              if ("RS" === Rd && !this.scrollStickClick.allowsClick(Od)) continue;
              const Xd = this.focusContext(md),
                Kd = kd(Wd, Xd);
              Kd && this.runIntent(Kd, Xd, Rd, md)
            }
            this.handleDrop(dd, Od, md)
          }
        }
        handleHotbarPick(dd, Od) {
          const md = this.hotbarPick;
          if (!md) return !1;
          const Wd = dd.wasPressed((0, Qd.h)("inventoryPrimary")) || dd.wasPressed((0, Qd.h)("inventoryHotbarSwap"));
          if (!Wd && !dd.wasPressed((0, Qd.h)("inventoryClose")) && !Od.isHolding()) return !(dd.wasPressed((0, Qd.h)("inventory")) && mm());
          const Fd = this.focusTarget;
          Wd && "hotbar" === (null === Fd || void 0 === Fd ? void 0 : Fd.panel) && null !== Fd.idx && Fd.idx !== md.idx && (Od.swapWithHotbar(Fd.idx, md.idx), this.afterAction()), this.hotbarPick = null;
          const Rd = md.element.isConnected ? this.getTargets().byElement.get(md.element) : void 0;
          return Rd && this.setFocus(Rd), !0
        }
        startHotbarPick(dd) {
          var Od;
          const {
            targets: md,
            byElement: Wd
          } = this.getTargets(), Fd = document.querySelector(ZO), Rd = null !== (Od = Fd && Wd.get(Fd)) && void 0 !== Od ? Od : md.find((dd => "hotbar" === dd.panel));
          Rd && this.focused && (this.hotbarPick = {
            idx: dd,
            element: this.focused
          }, this.setFocus(Rd))
        }
        focusKey() {
          return this.focused ? FO(this.focused) : null
        }
        handleDrop(dd, Od, md) {
          const Wd = (0, Qd.h)("inventoryDrop");
          if (dd.wasPressed(Wd)) {
            const dd = (Fd = this.focusContext(md)).holding ? {
              kind: "jK"
            } : "slot" === Fd.kind && Fd.slotHasItem && null !== Fd.idx ? {
              kind: "slot",
              idx: Fd.idx
            } : null;
            return void(dd && (this.dropFrom(dd, !1, md), this.dropLatch.press(dd, this.focusKey(), Od, yd.d[(0, od.f)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var Fd;
          const Rd = this.dropLatch.update(dd.isHeld(Wd), this.focusKey(), Od);
          Rd && ((dd, Od, md) => "jK" === dd.kind ? Od : !Od && md(dd.idx))(Rd, md.isHolding(), md.hasItemAt) && (this.dropFrom(Rd, !0, md), this.afterAction())
        }
        dropFrom(dd, Od, md) {
          "jK" === dd.kind ? md.dropHeld(Od, this.slotPoint()) : md.dropSlot(dd.idx, Od)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (dd => {
            const Od = vO(dd);
            return {
              clientX: Od.x,
              clientY: Od.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(dd, Od, md, Wd) {
          const Fd = Od.idx,
            Rd = Od.actionElement;
          switch (Rd && Wm.has(dd) && (0, bd.y)(Rd), dd) {
            case "slotPrimary":
              Wd.primary(Fd, this.slotPoint());
              break;
            case "slotSecondary":
              Wd.secondary(Fd, this.slotPoint());
              break;
            case "slotQuickMove":
              Wd.quickMove(Fd, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(Fd);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(Od.press, "pressPrimary" === dd ? "primary" : "secondary", md);
              break;
            case "click":
              (0, Id.n)(Rd, (0, Id.A)(Rd));
              break;
            case "openKeyboard":
              (0, Id.N)(Rd) && (0, Id.M)(Rd);
              break;
            case "pressBack":
              Od.press.back();
              break;
            case "cancel":
              Wd.cancel();
              break;
            case "close":
              return this.releasePress(), void Wd.close()
          }
          this.afterAction()
        }
        startPress(dd, Od, md) {
          this.releasePress(), dd.press(Od) && (this.activePress = {
            handlers: dd,
            button: md,
            target: uO(this.focused)
          })
        }
        releasePress() {
          var dd, Od, md;
          null === (dd = this.activePress) || void 0 === dd || null === (Od = (md = dd.handlers).release) || void 0 === Od || Od.call(md), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(dd) {
          ((dd, Od) => {
            var md, Wd, Fd, Rd, Xd, Kd;
            return dd.showing === Od.showing && dd.kind === Od.kind && dd.holding === Od.holding && dd.slotHasItem === Od.slotHasItem && (null === (md = dd.pressHints) || void 0 === md ? void 0 : md.primary) === (null === (Wd = Od.pressHints) || void 0 === Wd ? void 0 : Wd.primary) && (null === (Fd = dd.pressHints) || void 0 === Fd ? void 0 : Fd.secondary) === (null === (Rd = Od.pressHints) || void 0 === Rd ? void 0 : Rd.secondary) && (null === (Xd = dd.pressHints) || void 0 === Xd ? void 0 : Xd.back) === (null === (Kd = Od.pressHints) || void 0 === Kd ? void 0 : Kd.back) && dd.hasCategories === Od.hasCategories && dd.hasList === Od.hasList && dd.openButtonCloses === Od.openButtonCloses && dd.steppingSlots === Od.steppingSlots && dd.hotbarPicking === Od.hotbarPicking && dd.quickMoveToHotbar === Od.quickMoveToHotbar && dd.dropStackHold === Od.dropStackHold
          })(dd, this.state) || (this.state = dd, vd.j.lQ(PO.d, dd))
        }
      },
      Km = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var hm = md(9835),
      Qm = md(387),
      tm = md(1765),
      om = md(9309);
    const Nm = "[data-pad-secondary]",
      qm = dd => dd instanceof HTMLElement && (0, dO.n)(dd) && !(0, dO.t)(dd),
      Hm = dd => {
        const Od = dd.querySelector(Nm);
        if (Od && qm(Od)) return Od;
        for (const Fd of null !== (md = null === (Wd = dd.parentElement) || void 0 === Wd ? void 0 : Wd.children) && void 0 !== md ? md : []) {
          var md, Wd;
          if (Fd !== dd && Fd.matches(Nm) && qm(Fd)) return Fd
        }
        return null
      },
      ym = (dd, Od, md, Wd) => Math.max(0, Math.max(dd, md) - Math.min(Od, Wd)),
      bm = (dd, Od, md, Wd) => Math.max(0, Math.min(Od, Wd) - Math.max(dd, md)),
      Tm = (dd, Od, md) => {
        const Wd = (dd.left + dd.right) / 2,
          Fd = (dd.top + dd.bottom) / 2,
          Rd = (Od.left + Od.right) / 2,
          Xd = (Od.top + Od.bottom) / 2;
        if ("Left" === md || "Right" === md) {
          const Kd = "Right" === md ? 1 : -1;
          return {
            forwardGap: "Right" === md ? Od.left - dd.right : dd.left - Od.right,
            centreForward: (Rd - Wd) * Kd,
            sidewaysGap: ym(dd.top, dd.bottom, Od.top, Od.bottom),
            sidewaysOverlap: bm(dd.top, dd.bottom, Od.top, Od.bottom),
            centreSideways: Math.abs(Xd - Fd),
            startSideways: Math.abs(Od.top - dd.top),
            fromSidewaysSize: dd.bottom - dd.top,
            toSidewaysSize: Od.bottom - Od.top,
            toLength: Od.right - Od.left
          }
        }
        const Kd = "Down" === md ? 1 : -1;
        return {
          forwardGap: "Down" === md ? Od.top - dd.bottom : dd.top - Od.bottom,
          centreForward: (Xd - Fd) * Kd,
          sidewaysGap: ym(dd.left, dd.right, Od.left, Od.right),
          sidewaysOverlap: bm(dd.left, dd.right, Od.left, Od.right),
          centreSideways: Math.abs(Rd - Wd),
          startSideways: Math.abs(Od.left - dd.left),
          fromSidewaysSize: dd.right - dd.left,
          toSidewaysSize: Od.right - Od.left,
          toLength: Od.bottom - Od.top
        }
      },
      pm = dd => dd.centreForward > .5 && dd.forwardGap >= -dd.toLength / 2,
      Ym = dd => {
        const Od = dd.sidewaysOverlap > 0 ? 0 : 2 * dd.fromSidewaysSize,
          md = dd.fromSidewaysSize > 1.5 * dd.toSidewaysSize ? dd.startSideways : dd.centreSideways;
        return Math.max(0, dd.forwardGap) + 3 * dd.sidewaysGap + Od + .1 * md
      },
      gm = (dd, Od) => bm(dd.top, dd.bottom, Od.top, Od.bottom) > 0 || Od.bottom - Od.top > Od.right - Od.left,
      wm = (dd, Od, md, Wd, Fd, Rd) => {
        const Xd = Fd ? Em(dd, Od, md, Fd) : new Set,
          Kd = Um(dd, Od, md, Xd);
        return Kd < 0 && Xd.size > 0 && Rd ? am(dd, Od, md, Rd) : Wd && Kd >= 0 ? Jm(dd, Od, md, Wd, Kd, Xd) : Kd
      },
      am = (dd, Od, md, Wd) => {
        const Fd = new Set,
          Rd = Um(dd, Od, "Up", Fd) >= 0,
          Xd = Um(dd, Od, "Down", Fd) >= 0,
          Kd = new Set;
        return Od.forEach(((Od, md) => {
          const Fd = Od.top + Od.bottom < dd.top + dd.bottom;
          Wd[md] && !(Fd ? Rd : Xd) || Kd.add(md)
        })), Um(dd, Od, md, Kd)
      },
      Em = (dd, Od, md, Wd) => {
        const Fd = new Set;
        return "Left" !== md && "Right" !== md || Od.forEach(((Od, md) => {
          Wd[md] && bm(dd.top, dd.bottom, Od.top, Od.bottom) <= 0 && Fd.add(md)
        })), Fd
      },
      Jm = (dd, Od, md, Wd, Fd, Rd) => {
        const Xd = Tm(dd, Od[Fd], md).forwardGap;
        let Kd = Fd,
          hd = Wd[Fd],
          vd = 1 / 0;
        return Od.forEach(((Od, Qd) => {
          const td = Wd[Qd];
          if (Rd.has(Qd) || td < hd || td === hd && Kd === Fd) return;
          const od = Tm(dd, Od, md);
          if (!pm(od) || od.forwardGap < 0 || od.forwardGap >= Xd) return;
          const Nd = Ym(od);
          (td > hd || Nd < vd) && (Kd = Qd, hd = td, vd = Nd)
        })), Kd
      },
      Um = (dd, Od, md, Wd) => {
        let Fd = -1,
          Rd = 1 / 0;
        if (Od.forEach(((Od, Xd) => {
            const Kd = ((dd, Od, md) => {
              const Wd = Tm(dd, Od, md);
              if (!pm(Wd)) return null;
              const Fd = Math.max(0, Wd.forwardGap);
              return Wd.sidewaysOverlap <= 0 && Wd.sidewaysGap > 2 * (Fd + 1) ? null : Ym(Wd)
            })(dd, Od, md);
            null !== Kd && Kd < Rd && !Wd.has(Xd) && (Rd = Kd, Fd = Xd)
          })), Fd < 0) return -1;
        const Xd = Od[Fd],
          Kd = Tm(dd, Xd, md).forwardGap;
        let hd = Kd,
          vd = Fd;
        return Od.forEach(((Od, Rd) => {
          if (Rd === Fd || Wd.has(Rd) || !((dd, Od, md) => {
              const Wd = "Left" === md || "Right" === md,
                Fd = Wd ? bm(dd.top, dd.bottom, Od.top, Od.bottom) : bm(dd.left, dd.right, Od.left, Od.right),
                Rd = Wd ? Math.min(dd.bottom - dd.top, Od.bottom - Od.top) : Math.min(dd.right - dd.left, Od.right - Od.left);
              return Fd > 0 && Fd >= Rd / 2
            })(Od, Xd, md)) return;
          const Qd = Tm(dd, Od, md);
          pm(Qd) && Qd.forwardGap + Qd.toLength <= Kd + 1 && Qd.forwardGap < hd && (hd = Qd.forwardGap, vd = Rd)
        })), vd
      },
      xm = (dd, Od) => {
        let md = -1,
          Wd = 1 / 0;
        return Od.forEach(((Od, Fd) => {
          const Rd = Math.max(Od.left - dd.x, 0, dd.x - Od.right),
            Xd = Math.max(Od.top - dd.y, 0, dd.y - Od.bottom),
            Kd = Math.hypot(Rd, Xd);
          Kd < Wd && (Wd = Kd, md = Fd)
        })), md
      },
      Bm = (dd, Od) => {
        const md = Math.min(dd.bottom - dd.top, Od.bottom - Od.top) / 2;
        return Math.abs(dd.top - Od.top) > md ? dd.top - Od.top : dd.left - Od.left
      },
      Sm = dd => {
        let Od = -1;
        for (let md = 0; md < dd.length; md++)(Od < 0 || Bm(dd[md], dd[Od]) < 0) && (Od = md);
        return Od
      };
    var sm = md(1814),
      um = md(9842),
      Vm = md(9848);
    const im = dd => {
        if ("death" !== dd || "inGame" !== hd.e.get("gameState") || "off" === (0, od.f)().quickChat || null === (0, sm.c)()) return !1;
        const Od = (0, Qd.h)("chat");
        return Od !== (0, Qd.h)("menuConfirm") && Od !== (0, Qd.h)("menuBack")
      },
      Am = new um.e;
    var rm = md(4929),
      Gm = md(9850),
      nm = md(9854);
    const Lm = dd => {
        let Od = null;
        for (const md of dd.querySelectorAll("[data-pad-tabs]"))(0, dO.n)(md) && (!Od || Number(md.dataset.padTabs) < Number(Od.dataset.padTabs)) && (Od = md);
        return Od
      },
      Pm = (dd, Od, md, Wd) => {
        dd.focusWhenFound((() => {
          const Fd = dd.pickInitial(Od);
          if (Fd && !md.has(Fd) && (null === Wd || void 0 === Wd || !Wd.contains(Fd))) return Fd;
          const Rd = ((dd, Od) => {
              const md = Od => dd.getEnabledCandidates(Od).filter((dd => !dd.closest("[data-pad-tabs]")));
              for (const Wd of (0, dO.g)(Od)) {
                const dd = md(Wd);
                if (dd.length > 0) return dd
              }
              return md(Od)
            })(dd, Od).filter((dd => !md.has(dd))),
            Xd = Sm(Rd.map((dd => dd.getBoundingClientRect())));
          return Xd >= 0 ? Rd[Xd] : null
        }), 3e3)
      },
      zm = (dd, Od, md, Wd) => {
        var Fd;
        const Rd = ((dd, Od) => {
          if (0 === dd.length) return null;
          const md = dd.findIndex((dd => "true" === dd.dataset.padSelected));
          return md < 0 ? Od > 0 ? dd[0] : dd[dd.length - 1] : dd[(md + Od + dd.length) % dd.length]
        })([...md.querySelectorAll("[data-pad-tab]")].filter((dd => (0, dO.n)(dd) && !(0, dO.t)(dd))), Wd);
        if (!Rd) return;
        const Xd = null !== (Fd = null === dd || void 0 === dd ? void 0 : dd.getFocused()) && void 0 !== Fd ? Fd : null,
          Kd = !(null === Xd || void 0 === Xd || !Xd.isConnected) && md.contains(Xd),
          hd = dd && !Kd ? new Set(dd.getEnabledCandidates(Od)) : null;
        (0, Id.e)(Rd), dd && (hd ? Pm(dd, Od, hd, md) : dd.setFocus(Rd, {
          byUser: !0
        }))
      },
      cm = dd => {
        var Od;
        const md = rd(null !== (Od = Bd(dd, "x")) && void 0 !== Od ? Od : dd),
          Wd = (0, dO.e)(dd).filter((dd => !(0, dO.t)(dd))),
          Fd = Wd.filter((dd => Gd(dd.getBoundingClientRect(), md)));
        return (Fd.length > 0 ? Fd : Wd).sort(((dd, Od) => Bm(dd.getBoundingClientRect(), Od.getBoundingClientRect())))
      },
      jm = (dd, Od, md) => {
        const Wd = [...Od.querySelectorAll("[data-pad-row]")].filter(dO.n),
          Fd = dd.getFocused(),
          Rd = Fd ? Wd.findIndex((dd => dd.contains(Fd))) : -1;
        let Xd = 0,
          Kd = md > 0 ? 0 : Wd.length - 1;
        if (Rd >= 0 && Fd) Xd = Math.max(0, cm(Wd[Rd]).indexOf(Fd)), Kd = Rd + md;
        else if (Fd) {
          const dd = Fd.getBoundingClientRect(),
            Od = Wd.map((Od => {
              const Wd = Od.getBoundingClientRect();
              return md > 0 ? Wd.top >= dd.top : Wd.bottom <= dd.bottom
            }));
          Kd = md > 0 ? Od.indexOf(!0) : Od.lastIndexOf(!0)
        }
        for (let hd = Kd; hd >= 0 && hd < Wd.length; hd += md) {
          const Od = cm(Wd[hd]);
          if (Od.length > 0) return void dd.setFocus(Od[Math.min(Xd, Od.length - 1)], {
            byUser: !0
          })
        }
      },
      Dm = (dd, Od, md) => {
        var Wd, Fd;
        const Rd = null !== (Wd = null === dd || void 0 === dd ? void 0 : dd.getFocused()) && void 0 !== Wd ? Wd : null,
          Xd = null !== Rd && void 0 !== Rd && Rd.closest("[data-pad-row]") ? "x" : "y",
          Kd = null !== (Fd = Rd ? Bd(Rd, Xd, Od) : null) && void 0 !== Fd ? Fd : sd(Od, Xd);
        if (!Kd) return;
        const hd = Rd ? (0, Id.A)(Rd) : null;
        if (Ad(Kd, Xd, md * ("y" === Xd ? Kd.clientHeight : Kd.clientWidth) * .85), !dd || !hd) return;
        const vd = rd(Kd),
          Qd = dd.getEnabledCandidates(Od).filter((dd => Kd.contains(dd) && Gd(dd.getBoundingClientRect(), vd))),
          td = xm(hd, Qd.map((dd => dd.getBoundingClientRect())));
        td >= 0 && dd.setFocus(Qd[td], {
          scroll: !1,
          byUser: !0
        })
      };
    let em = null;
    const Im = (dd, Od) => {
        var md, Wd;
        const Fd = Od.querySelector("[data-pad-friends-column]"),
          Rd = dd.getFocused();
        if (!Fd || !Rd || !Fd.contains(Rd)) return !1;
        const Xd = dd.getEnabledCandidates(Od).filter((dd => !Fd.contains(dd))),
          Kd = xm((0, Id.A)(Rd), Xd.map((dd => dd.getBoundingClientRect()))),
          hd = null === (md = em) || void 0 === md ? void 0 : md.deref();
        return dd.setFocus(null !== hd && void 0 !== hd && hd.isConnected ? hd : null !== (Wd = Xd[Kd]) && void 0 !== Wd ? Wd : null, {
          byUser: !0
        }), !0
      },
      lm = dd => {
        const Od = (0, Qd.h)(dd);
        return (0, qd.I)(Od) || om.s.some((dd => (0, Qd.h)(dd) === Od)) ? null : Od
      },
      Cm = (dd, Od) => {
        const md = lm(Od);
        return null !== md && dd.wasPressed(md)
      },
      Zm = function(dd, Od, md) {
        let Wd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Fd = (dd => {
            var Od, md;
            return null !== (Od = null === (md = Lm(dd)) || void 0 === md ? void 0 : md.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== Od ? Od : null
          })(Od),
          Rd = dd && Fd ? new Set(dd.getEnabledCandidates(Od)) : null;
        (0, hm.b)(), md === Qm.m.SETTINGS && (0, tm.k)(hd.e.get("openEverythingMenuName")) ? hd.e.set({
          openEverythingMenuName: md
        }) : (0, tm.s)((0, nm.b)("padMenuShortcut"), md, Wd), dd && Rd && Fd && Pm(dd, Od, Rd, Fd.closest("[data-pad-tabs]"))
      },
      km = dd => null !== dd.closest(".Dropdown-root") || null !== dd.querySelector(".Dropdown-root.is-open"),
      fm = dd => null !== (0, Gm.b)() && "popup" !== dd.layer.kind && !Lm(dd.root) && !km(dd.root),
      Mm = (0, Hd.e)(qd.eb),
      dW = (0, Hd.e)(qd.eb),
      OW = (dd, Od, md) => {
        if (((dd, Od) => {
            const md = (0, Qd.h)("chat");
            return im(Od) && dd.isHeld(md) ? "hold" === Am.update(dd.wasPressed(md), dd.isHeld(md), performance.now(), yd.d[(0, od.f)().tapHoldTime].wheelMs) && (td.b.consumeButton(md), vd.j.lQ(Vm.k), !0) : (Am.release(), !1)
          })(Od, md.layer.kind)) return !0;
        const Wd = md.root;
        for (const [Xd, Kd] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (Od.wasPressed((0, Qd.h)(Xd))) {
            const Od = km(Wd) ? null : Lm(Wd);
            if (Od) zm(dd, Wd, Od, Kd);
            else if (fm(md)) {
              var Fd;
              const Od = dd ? new Set(dd.getEnabledCandidates(Wd)) : null;
              null !== (Fd = (0, Gm.b)()) && void 0 !== Fd && Fd(Kd) && dd && Od && Pm(dd, Wd, Od, null)
            } else dd && jm(dd, Wd, Kd);
            return !0
          } for (const [Xd, Kd, hd] of [
            ["menuPageUp", -1, Mm],
            ["menuPageDown", 1, dW]
          ]) {
          const md = (0, Qd.h)(Xd);
          if (Od.wasPressed(md) && hd.reset(), hd.update(Od.isHeld(md), performance.now())) return Dm(dd, Wd, Kd), !0
        }
        const Rd = "popup" === md.layer.kind;
        return Cm(Od, "pause") ? (Rd || (0, tm.q)() && "menu" !== md.layer.kind || Zm(dd, Wd, (0, tm.q)() ? Qm.m.SETTINGS : (0, rm.b)()), !0) : !!Cm(Od, "leaderboard") && ("home" === md.layer.kind ? (dd => {
          const Od = [...dd.querySelectorAll("[data-pad-notifications]")].find(dO.n);
          Od && (0, Id.e)(Od)
        })(Wd) : Rd || Zm(dd, Wd, Qm.m.LOBBY_LEADERBOARD, "inGame" === hd.e.get("gameState")), !0)
      },
      mW = (dd, Od, md) => {
        if (OW(dd, Od, md)) return !0;
        const Wd = "home" === md.layer.kind;
        if (Od.wasPressed((0, Qd.h)("menuSecondary"))) {
          const Od = dd.getFocused(),
            Fd = Od ? Hm(Od) : null;
          if (Fd) return (0, Id.e)(Fd), !0;
          if (Wd) {
            const Od = md.root.querySelector("[data-pad-search] input");
            return Od && (0, dO.p)(Od, md.root) ? (dd.setFocus(Od, {
              byUser: !0
            }), (0, Id.e)(Od)) : hd.e.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!Wd || !Cm(Od, "inventory")) && (((dd, Od) => {
          var md, Wd;
          const Fd = Od.querySelector("[data-pad-friends-column]");
          if (!Fd || !(0, dO.n)(Fd)) return void(0, tm.s)((0, nm.b)("padMenuShortcut"), Qm.m.SOCIAL);
          if (Im(dd, Od)) return;
          const Rd = null !== (md = null === (Wd = Fd.querySelector("[data-pad-friends-start]")) || void 0 === Wd ? void 0 : Wd.getBoundingClientRect().top) && void 0 !== md ? md : -1 / 0,
            Xd = dd.getEnabledCandidates(Fd),
            Kd = Xd.filter((dd => dd.getBoundingClientRect().top >= Rd)),
            hd = Kd.length > 0 ? Kd : Xd,
            vd = Sm(hd.map((dd => dd.getBoundingClientRect())));
          dd.setFocus(vd >= 0 ? hd[vd] : null, {
            byUser: !0
          })
        })(dd, md.root), !0)
      },
      WW = dd => {
        var Od, md, Wd;
        const Fd = (0, Id.E)(dd);
        if (null !== Fd) return Fd;
        const Rd = (null !== (Od = null !== (md = null !== (Wd = dd.getAttribute("aria-label")) && void 0 !== Wd ? Wd : dd.getAttribute("title")) && void 0 !== md ? md : dd.textContent) && void 0 !== Od ? Od : "").replace(/\s+/g, " ").trim();
        return Rd ? `${dd.tagName}:${Rd.slice(0,100)}` : null
      };
    class FW {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(dd) {
        const Od = this.history.indexOf(dd);
        if (Od >= 0) {
          for (const dd of this.history.splice(Od + 1)) this.remembered.delete(dd);
          return !0
        }
        return this.remembered.delete(dd), this.history.push(dd), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(dd) {
        this.remembered.delete(dd);
        const Od = this.history.indexOf(dd);
        Od >= 0 && this.history.splice(Od, 1)
      }
      remember(dd, Od, md, Wd) {
        const Fd = WW(Od),
          Rd = (0, Id.E)(Od),
          Xd = null !== Rd && ((dd, Od) => {
            let md = 0;
            for (const Wd of dd.querySelectorAll("[data-pad-key], [href]"))
              if ((Wd.getAttribute("data-pad-key") === Od || Wd.getAttribute("href") === Od) && (md++, md > 1)) return !0;
            return !1
          })(md, Rd) ? Math.max(0, this.twins(Wd(), Rd).indexOf(Od)) : 0;
        this.remembered.set(dd, {
          element: new WeakRef(Od),
          identity: Fd,
          ordinal: Xd
        })
      }
      has(dd) {
        return this.remembered.has(dd)
      }
      recall(dd, Od) {
        var md, Wd;
        const Fd = this.remembered.get(dd);
        if (!Fd) return null;
        const Rd = Fd.element.deref();
        if (Rd && Od.includes(Rd)) return Rd;
        if (null === Fd.identity) return null;
        const Xd = this.twins(Od, Fd.identity);
        return null !== (md = null !== (Wd = Xd[Fd.ordinal]) && void 0 !== Wd ? Wd : Xd[0]) && void 0 !== md ? md : null
      }
      twins(dd, Od) {
        return dd.filter((dd => WW(dd) === Od))
      }
    }
    var RW = md(1333);
    const XW = dd => {
        const Od = [];
        let md = dd;
        for (; md && md !== document.body;) {
          const dd = getComputedStyle(md).zIndex;
          "auto" !== dd && Od.push(Number(dd) || 0), md = md.parentElement
        }
        return Od.reverse()
      },
      KW = (dd, Od) => {
        const md = ((dd, Od) => {
          const md = Math.max(dd.length, Od.length);
          for (let Rd = 0; Rd < md; Rd++) {
            var Wd, Fd;
            const md = (null !== (Wd = dd[Rd]) && void 0 !== Wd ? Wd : 0) - (null !== (Fd = Od[Rd]) && void 0 !== Fd ? Fd : 0);
            if (0 !== md) return md
          }
          return 0
        })(XW(dd), XW(Od));
        if (0 !== md) return md > 0;
        if (dd.contains(Od)) return !1;
        if (Od.contains(dd)) return !0;
        const Wd = dd.compareDocumentPosition(Od);
        return !!(Wd & Node.DOCUMENT_POSITION_PRECEDING) || !(Wd & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      hW = (dd, Od) => {
        var md;
        return null !== (md = KW(dd.root, Od.root)) && void 0 !== md ? md : dd.order > Od.order
      },
      vW = (dd, Od) => Od.some((Od => !Od.contains(dd) && !dd.contains(Od) && !0 === KW(Od, dd)));
    let QW = null,
      tW = null,
      oW = -1;
    const NW = () => {
        var dd;
        const Od = null === (dd = document.timeline) || void 0 === dd ? void 0 : dd.currentTime,
          md = "number" === typeof Od ? Od : null;
        if (null !== md && md === tW && oW === (0, RW.b)()) return QW;
        let Wd = null;
        const Fd = [],
          Rd = [...document.querySelectorAll("[data-pad-covers]")].filter(dO.n);
        for (const Xd of (0, RW.c)()) {
          const dd = Xd.getRoot(),
            Od = !!dd && (0, dO.n)(dd) && !vW(dd, Rd);
          if (Xd.shown && !Od && Fd.push(Xd), Xd.shown = Od, !dd || !Od) continue;
          const md = {
            layer: Xd,
            root: dd,
            order: Xd.order
          };
          Wd && !hW(md, Wd) || (Wd = md)
        }
        QW = Wd, tW = md, oW = (0, RW.b)();
        for (const Xd of Fd)(0, RW.e)(Xd);
        return QW
      },
      qW = () => {
        const dd = NW();
        return !(null === dd || void 0 === dd || !dd.layer.close) && (dd.layer.close(), tW = null, !0)
      },
      HW = () => {
        var dd, Od;
        return null !== (dd = null === (Od = NW()) || void 0 === Od ? void 0 : Od.root) && void 0 !== dd ? dd : null
      },
      yW = dd => dd ? {
        ...dd,
        root: HW()
      } : null;
    let bW = null,
      TW = null,
      pW = (0, od.f)().menuNavigation,
      YW = null;
    const gW = new gd;
    let wW = null;
    vd.j.subscribe(od.e, (() => {
      const dd = (0, od.f)().menuNavigation;
      dd !== pW && (pW = dd, bW = null, TW = null)
    }));
    const aW = () => {
        var dd;
        return null !== (dd = bW) && void 0 !== dd ? dd : (0, od.f)().menuNavigation
      },
      EW = dd => {
        if (BW()) {
          if (YW = yW(dd), "hybrid" === aW()) return gW.lock(), void(TW = TW ? null : HW());
          bW = "focus" === aW() ? "cursor" : "focus"
        }
      },
      JW = () => {
        const dd = YW;
        return YW = null, dd
      };
    let UW = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const xW = function(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const md = UW.root === dd,
          Wd = md ? UW.firstSeenMs : Od,
          Fd = UW.has || Od - Wd > 1e3;
        return (!md || !Fd || Od - UW.atMs > 250) && (UW = {
          root: dd,
          firstSeenMs: Wd,
          atMs: Od,
          has: (0, dO.h)(dd)
        }), UW.has
      },
      BW = () => {
        const dd = HW();
        return null !== dd && xW(dd)
      },
      SW = () => {
        const dd = NW();
        return TW && (null === dd || void 0 === dd ? void 0 : dd.root) !== TW && (TW = null), (dd => {
          let {
            mode: Od,
            hasLayer: md,
            hasCandidates: Wd,
            hybridCursorEngaged: Fd
          } = dd;
          return md ? "cursor" !== Od && Wd() ? "hybrid" === Od && Fd ? "cursor" : "focus" : "cursor" : null
        })({
          mode: aW(),
          hasLayer: null !== dd,
          hasCandidates: () => null !== dd && xW(dd.root),
          hybridCursorEngaged: null !== TW
        })
      },
      sW = () => "hybrid" === aW() && BW(),
      uW = "pad-focused";
    var VW = md(5215),
      iW = md(5936);
    const AW = "[data-pad-destructive]",
      rW = `${AW}, [data-pad-back]`,
      GW = dd => ({
        rect: dd.getBoundingClientRect(),
        destructive: dd.matches(AW),
        closes: null !== dd.closest("[data-pad-close-button]"),
        unavailable: dd.matches("[data-pad-unavailable]")
      }),
      nW = dd => {
        let {
          destructive: Od,
          closes: md,
          unavailable: Wd
        } = dd;
        return Od ? md ? 2 : 3 : Wd ? 1 : 0
      },
      LW = dd => {
        let Od = -1;
        for (let md = 0; md < dd.length; md++) {
          if (Od < 0) {
            Od = md;
            continue
          }
          const Wd = dd[md],
            Fd = dd[Od];
          nW(Wd) === nW(Fd) ? Bm(Wd.rect, Fd.rect) < 0 && (Od = md) : nW(Wd) < nW(Fd) && (Od = md)
        }
        return Od
      },
      PW = "[data-pad-tabs]",
      zW = "[data-pad-tab]",
      cW = (dd, Od) => {
        const md = dd.querySelector(`${zW}[data-pad-selected='true']`);
        return md && Od.includes(md) ? md : null
      },
      jW = (dd, Od) => {
        let md = Od;
        for (let Wd = Od.parentElement; Wd && !Wd.contains(dd); Wd = Wd.parentElement) md = Wd;
        return md
      };
    class DW {
      constructor() {
        this.contentReturn = null
      }
      redirect(dd, Od, md, Wd) {
        var Fd, Rd;
        const Xd = dd.closest(PW),
          Kd = Od.closest(PW);
        var hd;
        if (Kd && Kd !== Xd) return Xd || (this.contentReturn = new WeakRef(dd)), null !== (hd = cW(Kd, md)) && void 0 !== hd ? hd : Od;
        if (!Xd || Kd) return Od;
        const vd = jW(dd, Od),
          Qd = null === (Fd = this.contentReturn) || void 0 === Fd ? void 0 : Fd.deref();
        return Qd && vd.contains(Qd) && md.includes(Qd) ? Qd : null !== (Rd = this.pickRegionStart(vd, Bd(Od, "y", Wd), md)) && void 0 !== Rd ? Rd : Od
      }
      findTabContent(dd, Od, md) {
        const Wd = dd.closest(PW);
        if (!Wd || !dd.matches(zW) || Wd.contains(Od)) return null;
        const Fd = Od.closest(PW);
        if (Fd && Number(Fd.dataset.padTabs) <= Number(Wd.dataset.padTabs)) return null;
        const Rd = jW(dd, Od);
        return md.some((dd => Rd.contains(dd) && !dd.closest(rW))) || !Od.closest(rW) ? Rd : null
      }
      pickContentStart(dd, Od, md) {
        return this.contentReturn = null, this.pickRegionStart(dd, Bd(dd, "y", md), Od)
      }
      pickReplacedContentStart(dd, Od, md, Wd) {
        if (!Od.contains(dd)) return null;
        const Fd = jW(Od, dd),
          Rd = md.filter((dd => Od.contains(dd) && !Fd.contains(dd) && !dd.closest(rW)));
        return 0 === Rd.length ? null : (this.contentReturn = null, this.pickRegionStart(Od, Bd(Rd[0], "y", Wd), Rd))
      }
      backToStrip(dd, Od, md) {
        if (dd.closest(PW)) return null;
        const Wd = Lm(md);
        for (const Fd of md.querySelectorAll(PW)) {
          if (Number(Fd.dataset.padTabs) <= 1 || Fd === Wd) continue;
          const Rd = cW(Fd, Od),
            Xd = Rd ? jW(dd, Fd).parentElement : null;
          if (Rd && Xd && Xd !== md && md.contains(Xd)) return this.contentReturn = new WeakRef(dd), Rd
        }
        return null
      }
      pickRegionStart(dd, Od, md) {
        const Wd = rd(Od),
          Fd = dd => {
            const Od = md.filter((Od => dd.contains(Od) && !Od.closest(PW) && Gd(Od.getBoundingClientRect(), Wd))),
              Fd = LW(Od.map(GW));
            return Fd >= 0 ? Od[Fd] : null
          };
        for (const Rd of (0, dO.g)(dd)) {
          const dd = Fd(Rd);
          if (dd) return dd
        }
        for (const Rd of dd.querySelectorAll(PW)) {
          const dd = cW(Rd, md);
          if (dd) return dd
        }
        return Fd(dd)
      }
    }
    const eW = "[data-pad-default-focus], .Dropdown-option.is-selected",
      IW = ".Dropdown-root.is-open > .Dropdown-menu",
      lW = "[data-pad-no-step-in]",
      CW = "[data-pad-tabs]",
      ZW = "[data-pad-press-area]",
      kW = dd => {
        let Od = dd;
        for (let md = 0; Od && md <= 4; md++, Od = Od.parentElement) {
          const md = Od.querySelector(".CircleInfo");
          if (md) return Od === dd || Od.querySelectorAll(dO.b).length <= 1 ? md : null;
          if (Od !== dd && Od.querySelectorAll(dO.b).length > 1) return null
        }
        return null
      },
      fW = (dd, Od, md) => {
        (0, Id.r)(dd, Od, md);
        const Wd = null !== dd && void 0 !== dd && dd.isConnected ? kW(dd) : null,
          Fd = kW(Od);
        Wd !== Fd && (0, Id.r)(Wd, Fd, Fd ? (0, Id.A)(Fd) : md, {
          leaveBelow: dd,
          enterBelow: Od
        })
      },
      MW = dd => dd.getBoundingClientRect(),
      dF = (dd, Od, md) => {
        const Wd = new Set(md);
        for (let Fd = dd; Fd; Fd = Fd === Od ? null : Fd.parentElement)
          if (Wd.has(Fd)) return Fd;
        return null
      },
      OF = (dd, Od) => !dd.root || dd.root === Od || Od.matches(IW) && dd.root.contains(Od);
    const mF = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new FW, this.tabStripNav = new DW, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, Hd.e)(qd.t), this.dpadRepeats = new Map(qd.C.map((dd => [dd, (0, Hd.e)(qd.F)]))), this.stickRepeat = new qd.d((0, Hd.e)(qd.jb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const dd = td.b.register({
            name: "focus",
            isActive: () => (0, Nd.h)() && "focus" === SW(),
            onFrame: dd => {
              this.onFrame(dd)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: dd => (0, td.d)(dd) || dd === (0, Qd.h)("menuConfirm") && (0, Id.I)((0, Nd.c)())
          }),
          Od = (0, RW.h)((dd => {
            const Od = (0, RW.l)(dd);
            null === dd.memoryKey && this.memory.forget(Od), Od === this.layerKey && (this.layerKey = null)
          }));
        let md = -1 / 0;
        const Wd = Xd.g.onFrame((dd => {
            (0, Nd.h)() || dd.timestampMs - md < 100 || (md = dd.timestampMs, NW())
          })),
          Fd = dd => {
            dd.isTrusted && dd.target instanceof Element && Xd.g.getActivePad() && this.noteChosenStop(dd.target)
          };
        return document.addEventListener("click", Fd, !0), () => {
          dd(), Od(), Wd(), document.removeEventListener("click", Fd, !0), this.deactivate()
        }
      }
      noteChosenStop(dd) {
        var Od, md;
        const Wd = NW();
        if (!Wd || !Wd.root.contains(dd)) return;
        const Fd = null !== (Od = null === (md = dd.closest(".Dropdown-root")) || void 0 === md ? void 0 : md.querySelector(".Dropdown-control")) && void 0 !== Od ? Od : dd,
          Rd = dF(Fd, Wd.root, this.getEnabledCandidates(Wd.root));
        if (!Rd) return;
        const Xd = (0, RW.l)(Wd.layer);
        Xd === this.layerKey && Wd.root === this.layerRoot || this.beginLayer(Wd, Xd), this.wasActive ? this.setFocus(Rd, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = Rd, this.lastFocusedCentre = (0, Id.A)(Rd), this.rememberFocus(Rd), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      notify() {
        for (const dd of this.listeners) dd()
      }
      deactivate() {
        var dd;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const dd of this.dpadRepeats.values()) dd.reset();
          this.stickRepeat.reset(), null !== (dd = this.focused) && void 0 !== dd && dd.isConnected && fW(this.focused, null, (0, Id.A)(this.focused)), this.notify()
        }
      }
      setFocus(dd) {
        var Od;
        let {
          scroll: md = !0,
          byUser: Wd = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (Wd && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), dd === this.focused) return;
        const Fd = null !== (Od = this.focused) && void 0 !== Od && Od.isConnected ? this.focused : null;
        if (this.focused = dd, dd) {
          md && (dd.classList.add(uW), dd.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), Wd && ((dd, Od) => {
            const md = Od.closest("[data-pad-friends-column]");
            md && dd && !md.contains(dd) && (em = new WeakRef(dd))
          })(Fd, dd);
          const Od = (0, Id.A)(dd);
          this.lastFocusedCentre = Od, this.movedInLayer && this.rememberFocus(dd), fW(Fd, dd, Od), "false" === dd.getAttribute("aria-pressed") && dd.closest("[data-pad-select-on-focus]") && (0, Id.e)(dd)
        } else Fd && fW(Fd, null, (0, Id.A)(Fd));
        this.notify()
      }
      rememberFocus(dd) {
        const Od = this.layerRoot;
        this.layerKey && Od && this.memory.remember(this.layerKey, dd, Od, (() => this.getEnabledCandidates(Od)))
      }
      noteCursorActivation(dd) {
        const Od = NW();
        if (!Od || !Od.root.contains(dd)) return;
        const md = this.getEnabledCandidates(Od.root),
          Wd = new Set(md);
        let Fd = dd;
        for (; Fd && !Wd.has(Fd);) Fd = Fd === Od.root ? null : Fd.parentElement;
        if (!(Fd instanceof HTMLElement)) return;
        const Rd = (0, RW.l)(Od.layer);
        this.memory.enter(Rd), this.memory.remember(Rd, Fd, Od.root, (() => md))
      }
      notePageEnteredByCursor(dd) {
        return this.memory.enter(dd)
      }
      recallStop(dd, Od) {
        return this.findRemembered(dd, Od)
      }
      focusWhenFound(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: dd,
          untilMs: performance.now() + Od,
          holdWhile: md
        }
      }
      getEnabledCandidates(dd) {
        return (0, dO.e)(dd).filter((dd => !(0, dO.t)(dd)))
      }
      onFrame(dd) {
        var Od;
        const md = NW();
        if (!md) return;
        const Wd = null !== (Od = this.findOpenDropdown(md)) && void 0 !== Od ? Od : md,
          Fd = performance.now(),
          Rd = (0, RW.l)(Wd.layer);
        if (Rd !== this.layerKey || Wd.root !== this.layerRoot) {
          const Od = this.focused;
          if (null !== this.layerKey && Wd.root === this.layerRoot && Od && (0, dO.p)(Od, Wd.root)) this.continueLayer(Rd, Od), this.wasActive || this.resume(Wd.root, Fd);
          else {
            const Od = !this.wasActive && !dd.wokeDevice,
              Xd = "death" === this.layerKind || Od,
              Kd = this.enterLayer(Wd, Rd);
            "popup" !== Wd.layer.kind || Wd !== md || Kd ? "menu" === Wd.layer.kind && Xd && "inGame" === hd.e.get("gameState") && !(0, hm.d)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = Fd + VW.d) : (this.pressGuardExtends = Od, this.pressGuardUntilMs = Fd + (Od ? VW.d : Xd ? 500 : 250))
          }
        } else this.wasActive || this.resume(Wd.root, Fd);
        if (this.layerKind = Wd.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), dd.wokeDevice && this.focusPointedStop(Wd.root), this.validateFocus(Wd, Fd), Fd < this.pressGuardUntilMs && this.pressGuardExtends && (dd.wasPressed((0, Qd.h)("menuConfirm")) || dd.wasPressed((0, Qd.h)("menuBack"))) && (this.pressGuardUntilMs = Fd + VW.d), Fd >= this.pressGuardUntilMs && this.handleButtons(dd, Wd)) return;
        const Xd = "hybrid" === aW();
        if (Xd && (dd => {
            const Od = HW();
            return Od !== wW && (wW = Od, gW.lock()), gW.update(dd, (0, od.f)().moveDeadzone)
          })(dd.leftStick)) return Kd = this.getHandoff(), YW = yW(Kd), TW = HW(), void td.b.handOffHeldInput();
        var Kd;
        this.handleDirections(dd, Wd, Fd, !Xd), this.handleScroll(dd, Wd)
      }
      findOpenDropdown(dd) {
        const Od = dd.root.querySelector(IW);
        if (!Od || !(0, dO.n)(Od)) return null;
        let md = this.dropdownLayers.get(Od);
        return md || (this.dropdownLayerCounter++, md = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: dd.layer.kind,
          getRoot: () => Od,
          close: () => {
            (0, Id.l)(Od)
          },
          memoryKey: null
        }, this.dropdownLayers.set(Od, md)), {
          layer: md,
          root: Od,
          order: dd.order
        }
      }
      focusPointedStop(dd) {
        const Od = (0, Nd.c)(),
          md = Od ? document.elementFromPoint(Od.x, Od.y) : null;
        if (!md || !dd.contains(md)) return;
        const Wd = dF(md, dd, this.getEnabledCandidates(dd));
        Wd && this.setFocus(Wd, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(dd, Od) {
        const md = this.beginLayer(dd, Od),
          Wd = JW();
        return Wd && OF(Wd, dd.root) ? (this.takeOver(dd.root, Wd, this.enteredLayerAtMs), md) : (this.restoreLayerFocus(dd.root, md), md)
      }
      beginLayer(dd, Od) {
        return this.layerKey = Od, this.layerRoot = dd.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(Od)
      }
      restoreLayerFocus(dd, Od) {
        const md = Od && this.layerKey ? this.findRemembered(dd, this.layerKey) : null;
        this.restoredFromMemory = null !== md, this.setFocus(null !== md && void 0 !== md ? md : this.pickInitial(dd, {
          waitForContent: !0
        }))
      }
      continueLayer(dd, Od) {
        this.layerKey = dd;
        const md = this.memory.enter(dd);
        this.restoreOnFocusLoss = md, this.movedInLayer && !md && this.rememberFocus(Od)
      }
      resume(dd, Od) {
        var md;
        const Wd = JW();
        Wd && OF(Wd, dd) ? this.takeOver(dd, Wd, Od) : null !== (md = this.focused) && void 0 !== md && md.isConnected && fW(null, this.focused, (0, Id.A)(this.focused))
      }
      pickPreferred(dd) {
        var Od;
        return null !== (Od = this.layerKey ? this.findRemembered(dd, this.layerKey) : null) && void 0 !== Od ? Od : this.pickInitial(dd, {
          waitForContent: !0
        })
      }
      findRemembered(dd, Od) {
        return this.memory.has(Od) ? this.memory.recall(Od, this.getEnabledCandidates(dd)) : null
      }
      getHandoff() {
        var dd, Od, md;
        const Wd = null !== (dd = this.focused) && void 0 !== dd && dd.isConnected ? this.focused : null,
          Fd = null !== (Od = this.layerRoot) && void 0 !== Od && Od.isConnected ? this.layerRoot : null;
        return {
          point: Wd ? (0, Id.A)(Wd) : null !== (md = this.lastFocusedCentre) && void 0 !== md ? md : this.getLayerStartPoint(Fd),
          element: Wd,
          direction: null
        }
      }
      getLayerStartPoint(dd) {
        if (!dd) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const Od = this.pickInitial(dd, {
          includeDisabled: !0
        });
        return (0, Id.A)(null !== Od && void 0 !== Od ? Od : dd)
      }
      takeOver(dd, Od, md) {
        const {
          element: Wd,
          direction: Fd,
          point: Rd
        } = Od, Xd = Wd instanceof HTMLElement && (0, dO.p)(Wd, dd) ? Wd : null;
        if (!Fd) {
          const Od = this.focused;
          return Xd ? this.setFocus(Xd, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(dd, Rd), void(this.focused && this.focused === Od && this.focused.isConnected && fW(null, this.focused, (0, Id.A)(this.focused)))
        }
        if (this.dpadRepeats.get(Fd).update(!0, md), Xd) return this.setFocus(Xd, {
          scroll: !1,
          byUser: !0
        }), void this.move(dd, Fd, md, !0);
        const Kd = this.getEnabledCandidates(dd),
          hd = Kd.map(MW),
          vd = wm(new DOMRect(Rd.x, Rd.y, 0, 0), hd, Fd),
          Qd = vd >= 0 ? vd : xm(Rd, hd);
        this.setFocus(Qd >= 0 ? Kd[Qd] : this.pickInitial(dd), {
          byUser: !0
        })
      }
      focusNearest(dd, Od) {
        const md = this.getEnabledCandidates(dd),
          Wd = xm(Od, md.map(MW));
        this.setFocus(Wd >= 0 ? md[Wd] : this.pickInitial(dd), {
          byUser: !0
        })
      }
      pickDefault(dd) {
        let {
          includeDisabled: Od = !1,
          exclude: md = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Wd = [...dd.querySelectorAll(eW)].filter((Wd => (null === md || void 0 === md || !md.has(Wd)) && (Od ? (0, dO.x)(Wd, dd) : (0, dO.p)(Wd, dd)))),
          Fd = LW(Wd.map(GW));
        return Fd >= 0 ? Wd[Fd] : null
      }
      pickNewAreaStart(dd, Od) {
        const md = [...dd.querySelectorAll(ZW)].filter(dO.n);
        for (const Wd of [...(0, dO.g)(dd), ...md]) {
          if (Od.has(Wd)) continue;
          const dd = this.getEnabledCandidates(Wd),
            md = LW(dd.map(GW));
          if (md >= 0) return dd[md]
        }
        return null
      }
      pickInitial(dd) {
        let {
          includeDisabled: Od = !1,
          waitForContent: md = !1,
          enteredAtMs: Wd = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Fd = this.pickDefault(dd, {
          includeDisabled: Od
        });
        if (Fd) return Fd;
        const Rd = dd => Od ? (0, dO.e)(dd) : this.getEnabledCandidates(dd);
        let Xd = [];
        for (const od of (0, dO.g)(dd))
          if (Xd = Rd(od), Xd.length > 0) break;
        if (0 === Xd.length) {
          if (md && performance.now() - Wd < 1e4 && (0, dO.k)(dd)) return null;
          Xd = Rd(dd)
        }
        const Kd = Xd.map(MW),
          hd = rd(null),
          vd = Xd.filter(((dd, Od) => Gd(Kd[Od], hd))),
          Qd = vd.length > 0 ? vd : Xd,
          td = LW(Qd.map(GW));
        return td >= 0 ? Qd[td] : null
      }
      validateFocus(dd, Od) {
        if (this.pendingFocus) {
          var md, Wd;
          const Fd = this.pendingFocus.find();
          if (Fd && (0, dO.p)(Fd, dd.root)) return this.pendingFocus = null, void this.setFocus(Fd, {
            byUser: !0
          });
          Od > this.pendingFocus.untilMs && (null === (md = (Wd = this.pendingFocus).holdWhile) || void 0 === md || !md.call(Wd)) && (this.pendingFocus = null)
        }
        const Fd = this.focused,
          Rd = !!Fd && (0, dO.p)(Fd, dd.root);
        if (!(!Rd && Fd && Fd === this.lastActivated && Od - this.lastActivatedAtMs < 5e3 && dd.root.contains(Fd) && (0, dO.n)(Fd) && (0, dO.t)(Fd))) {
          if (!Rd && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = Od, void this.restoreLayerFocus(dd.root, !0);
          if ((!Rd || !this.movedInLayer && !this.scrolledInLayer) && !(Od - this.lastRefocusCheckMs < (Rd ? 200 : 50)))
            if (this.lastRefocusCheckMs = Od, Rd) {
              const md = Od - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(dd.root) : null,
                Wd = null !== md && void 0 !== md ? md : this.restoredFromMemory ? null : this.pickDefault(dd.root);
              Wd && Wd !== Fd && this.setFocus(Wd)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const Od = this.pendingFocus;
                return this.focusNearest(dd.root, this.lastFocusedCentre), void(this.pendingFocus = Od)
              }
              this.setFocus(this.pickPreferred(dd.root))
            }
        }
      }
      handleButtons(dd, Od) {
        if (dd.wasPressed((0, Qd.h)("menuToggleCursor"))) return EW(this.getHandoff()), !0;
        if (dd.wasPressed((0, Qd.h)("menuBack"))) {
          const dd = (0, Id.l)(Od.root);
          return dd ? this.setFocus(dd, {
            byUser: !0
          }) : Im(this, Od.root) || ((0, Id.f)(Od.root) ? this.returnToOpener(Od.root) : this.backToStrip(Od.root) || qW()), !0
        }
        const md = (0, Qd.h)("menuConfirm");
        var Wd, Fd;
        dd.wasPressed(md) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (Wd = null === (Fd = this.focused) || void 0 === Fd ? void 0 : Fd.getAttribute("data-pad-repeat")) && void 0 !== Wd ? Wd : null, this.confirmRepeated = dd.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (dd.wasReleased(md)) {
          const dd = this.confirmPressedOn;
          if (this.confirmPressedOn = null, dd && !this.confirmRepeated && dd === this.focused && dd.isConnected && !(0, dO.t)(dd)) {
            const md = dd.matches("[data-pad-tab]") ? dd.closest(CW) : null;
            md ? this.enterTab(dd, md, Od.root, performance.now()) : this.activate(dd)
          }
          return !0
        }
        return this.repeatConfirm(dd, md), mW(this, dd, Od)
      }
      repeatConfirm(dd, Od) {
        const md = this.confirmPressedOn;
        md && null !== this.confirmRepeatKey && dd.isHeld(Od) && (md === this.focused && md.isConnected && !(0, dO.t)(md) && md.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? md.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(md)) : this.confirmRepeatKey = null)
      }
      backToStrip(dd) {
        const Od = this.focused;
        if (!(0, od.f)().menuBackToCategories) return !1;
        const md = null !== Od && void 0 !== Od && Od.isConnected ? this.tabStripNav.backToStrip(Od, this.getEnabledCandidates(dd), dd) : null;
        return md && this.setFocus(md, {
          byUser: !0
        }), null !== md
      }
      returnToOpener(dd) {
        const Od = this.lastActivatedKey;
        Od && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var md;
          return null !== (md = this.getEnabledCandidates(dd).find((dd => (0, Id.E)(dd) === Od))) && void 0 !== md ? md : null
        })))
      }
      activate(dd) {
        var Od;
        if ((0, iW.c)(dd) || (0, Id.H)(dd)) return;
        this.lastActivatedKey = null !== (Od = (0, Id.E)(dd)) && void 0 !== Od ? Od : this.lastActivatedKey, this.lastActivated = dd, this.lastActivatedAtMs = performance.now(), this.rememberFocus(dd);
        const md = this.layerRoot;
        if (md) {
          const Od = new Set(md.querySelectorAll(eW)),
            Wd = new Set(md.querySelectorAll(`[data-pad-initial-area], ${ZW}`)),
            Fd = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var Fd;
            return (0, dO.p)(dd, md) ? null : null !== (Fd = this.pickDefault(md, {
              exclude: Od
            })) && void 0 !== Fd ? Fd : this.pickNewAreaStart(md, Wd)
          }), 5e3, (() => dd.isConnected && (0, dO.t)(dd) && performance.now() - Fd < 6e4))
        }(0, Id.e)(dd), (0, Id.i)(dd)
      }
      handleDirections(dd, Od, md, Wd) {
        const Fd = im(Od.layer.kind) ? (0, Qd.h)("chat") : null;
        for (const Kd of qd.C) {
          this.dpadRepeats.get(Kd).update(dd.isHeld(Kd), md) && (Kd !== Fd || dd.wasPressed(Kd)) && this.move(Od.root, Kd, md, !0)
        }
        const Rd = Wd ? (0, qd.h)(dd.leftStick, (0, od.f)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          Xd = this.stickRepeat.update((0, qd.mb)(Rd), md);
        if (Xd && this.move(Od.root, Xd, md, !0), this.retryMove && md >= this.retryMove.atMs) {
          const {
            direction: dd
          } = this.retryMove;
          this.retryMove = null, this.move(Od.root, dd, md, !1)
        }
      }
      move(dd, Od, md, Wd) {
        var Fd;
        let Rd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (Fd = this.tabOpenWait) || void 0 === Fd ? void 0 : Fd.wait) && Od === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const Xd = this.focused;
        if (!Xd || !Xd.isConnected) {
          const Od = this.pickInitial(dd);
          return void(Od && this.setFocus(Od, {
            byUser: !0
          }))
        }
        const Kd = "Left" === Od || "Right" === Od,
          hd = Kd ? (0, iW.c)(Xd) : null;
        if (hd) return void hd.adjust("Left" === Od ? -1 : 1);
        const vd = dd => null !== dd.closest("[data-pad-friends-column]"),
          Qd = vd(Xd),
          td = MW(Xd),
          od = Kd || Xd.closest(CW) ? null : (dd => {
            const Od = new Map;
            return md => {
              const Wd = md.closest(CW);
              if (!Wd) return !1;
              let Fd = Od.get(Wd);
              if (void 0 === Fd) {
                const md = MW(Wd);
                Fd = gm(dd, md) && (md.right <= dd.left || md.left >= dd.right), Od.set(Wd, Fd)
              }
              return Fd
            }
          })(td),
          Nd = null !== Xd.closest(lW),
          qd = this.getEnabledCandidates(dd).filter((dd => dd !== Xd && (Kd || vd(dd) === Qd) && !(null !== od && void 0 !== od && od(dd)) && (Nd || !dd.closest(lW)))),
          Hd = qd.map(MW),
          yd = Bd(Xd, "y", dd),
          bd = rd(yd);
        if (!Rd && !Gd(td, bd)) {
          const dd = qd.filter(((dd, Od) => Gd(Hd[Od], bd)));
          if (dd.length > 0) {
            const Od = {
              x: bd.left + bd.width / 2,
              y: bd.top + bd.height / 2
            };
            return void this.setFocus(dd[xm(Od, dd.map(MW))], {
              byUser: !0
            })
          }
        }
        const Td = Kd ? ((dd, Od, md) => {
            const Wd = MW(dd),
              Fd = dd.closest(CW),
              Rd = Fd ? MW(Fd) : null;
            return Od.map(((Od, Xd) => {
              const Kd = md[Xd];
              if (Kd.bottom > Wd.top && Kd.top < Wd.bottom) return !0;
              const hd = Od.closest(CW);
              if (Fd && Rd) return hd !== Fd && (null !== hd || Kd.bottom <= Rd.top || Kd.top >= Rd.bottom);
              if (hd) return !gm(Wd, MW(hd));
              let vd = dd;
              for (let md = dd.parentElement; md && !md.contains(Od); md = md.parentElement) vd = md;
              const Qd = MW(vd);
              return Kd.right > Qd.left && Kd.left < Qd.right
            }))
          })(Xd, qd, Hd) : void 0,
          pd = Kd && !Xd.closest(CW) ? (dd => dd.map((dd => !dd.closest(rW))))(qd) : void 0,
          Yd = ((dd, Od) => {
            const md = [];
            for (let Fd = dd; Fd; Fd = Fd.parentElement) md.push(Fd);
            const Wd = new Map;
            return md.forEach(((dd, Od) => {
              Wd.set(dd, md.length - 1 - Od)
            })), Od.map((dd => {
              for (let Od = dd; Od; Od = Od.parentElement) {
                const dd = Wd.get(Od);
                if (void 0 !== dd) return dd
              }
              return -1
            }))
          })(Xd, qd),
          gd = Kd ? "x" : "y",
          wd = Bd(Xd, gd, dd);
        let Ed = wm(td, Hd, Od, Yd, Td, pd);
        if (Ed >= 0 && wd && !wd.contains(qd[Ed])) {
          const dd = qd.flatMap(((dd, Od) => wd.contains(dd) ? [Od] : [])),
            md = Od => Od && dd.map((dd => Od[dd])),
            Wd = wm(td, dd.map((dd => Hd[dd])), Od, dd.map((dd => Yd[dd])), md(Td), md(pd));
          Ed = Wd >= 0 ? dd[Wd] : Ed
        }
        if (Ed >= 0) return void this.moveTo(Xd, qd[Ed], qd, dd, Od, Rd);
        if (!Wd) return;
        const Jd = "Right" === Od || "Down" === Od ? 1 : -1;
        if (wd && Vd(wd, gd, Jd)) {
          const dd = "y" === gd ? wd.clientHeight : wd.clientWidth;
          Ad(wd, gd, Jd * dd * .5), this.retryMove = {
            direction: Od,
            atMs: md + 80
          }
        }
      }
      moveTo(dd, Od, md, Wd, Fd, Rd) {
        const Xd = this.tabStripNav.findTabContent(dd, Od, md);
        Xd && "true" !== dd.dataset.padSelected ? this.openTab(dd, Xd, Wd, Fd) : Rd && !Xd || this.setFocus(this.tabStripNav.redirect(dd, Od, md, Wd), {
          byUser: !0
        })
      }
      openTab(dd, Od, md, Wd) {
        const Fd = Od.parentElement;
        (0, Id.e)(dd), this.focusWhenFound((() => "true" !== dd.dataset.padSelected ? null : Od.isConnected ? this.tabStripNav.pickContentStart(Od, this.getEnabledCandidates(md), md) : Fd ? this.tabStripNav.pickReplacedContentStart(dd, Fd, this.getEnabledCandidates(md), md) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: Wd
        }
      }
      enterTab(dd, Od, md, Wd) {
        this.move(md, (dd => {
          const Od = [...dd.querySelectorAll(zW)].filter((Od => Od.closest(PW) === dd));
          if (Od.length >= 2) {
            const dd = Od[0].getBoundingClientRect(),
              md = Od[1].getBoundingClientRect();
            return Math.abs(md.top - dd.top) > Math.abs(md.left - dd.left) ? "Right" : "Down"
          }
          const md = dd.getBoundingClientRect();
          return md.height > md.width ? "Right" : "Down"
        })(Od), Wd, !1, !0), this.focused !== dd || this.pendingFocus || this.activate(dd)
      }
      handleScroll(dd, Od) {
        const md = (0, qd.h)(dd.rightStick, .2);
        if (0 === md.x && 0 === md.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const Wd = dd.dtMs / 1e3;
        for (const Rd of ["x", "y"]) {
          var Fd;
          const dd = md[Rd];
          if (0 === dd) continue;
          const Xd = null !== (Fd = Bd(this.focused, Rd, Od.root)) && void 0 !== Fd ? Fd : sd(Od.root, Rd);
          if (!Xd) continue;
          const Kd = Math.sign(dd) * dd * dd * 1500 * Wd + this.scrollRemainder[Rd],
            hd = Math.trunc(Kd);
          this.scrollRemainder[Rd] = Kd - hd, 0 !== hd && (Ad(Xd, Rd, hd), this.scrolledInLayer = !0)
        }
      }
    };
    var WF = md(9341);
    var FF = md(9861);
    const RF = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      XF = {
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
          ...RF,
          minIntervalMs: 1e3
        },
        preview: {
          ...RF,
          minIntervalMs: 0
        }
      };
    const KF = new class {
        constructor(dd) {
          this.deps = dd, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = dd => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", dd))
          }
        }
        play(dd, Od) {
          const md = XF[dd];
          if (!this.deps.isVibrationOn() || md.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const Wd = this.lastPlayedMs[dd];
          if (void 0 !== Wd && Od - Wd < md.minIntervalMs) return !1;
          const Fd = this.deps.getActuator();
          if (!Fd) return !1;
          this.lastPlayedMs[dd] = Od;
          const {
            duration: Rd,
            strongMagnitude: Xd,
            weakMagnitude: Kd
          } = md;
          try {
            Fd.playEffect("dual-rumble", {
              duration: Rd,
              strongMagnitude: Xd,
              weakMagnitude: Kd
            }).catch(this.logFailure)
          } catch (hd) {
            this.logFailure(hd)
          }
          return !0
        }
      }({
        getActuator: () => (dd => {
          const Od = null === dd || void 0 === dd ? void 0 : dd.vibrationActuator;
          return "function" === typeof(null === Od || void 0 === Od ? void 0 : Od.playEffect) ? Od : null
        })(Xd.g.getActiveGamepad()),
        isVibrationOn: () => (0, od.f)().vibration,
        isPadInUse: Nd.h
      }),
      hF = dd => {
        KF.play(dd, performance.now())
      };
    var vF = md(9349),
      QF = md(3986),
      tF = md(127),
      oF = md(46),
      NF = md(747);
    class qF {
      constructor(dd) {
        this.deps = dd
      }
      check() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const Od = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!Od) return "skipped";
        const md = dd ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === md || this.deps.readReportedVisitId() === md ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(md), this.deps.Wt(Od, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const HF = "controllerUsageReportedVisit";
    var yF = md(1462),
      bF = md(1890),
      TF = md(732),
      pF = md(1566),
      YF = md(1306);
    const gF = dd => ({
        translationKey: `controller:${dd}`
      }),
      wF = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: gF("padButtonView"),
        Menu: gF("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: gF("padButtonDpadUp"),
        Down: gF("padButtonDpadDown"),
        Left: gF("padButtonDpadLeft"),
        Right: gF("padButtonDpadRight"),
        Home: gF("padButtonHome"),
        LeftStick: gF("padButtonLeftStick"),
        RightStick: gF("padButtonRightStick")
      },
      aF = {
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
          View: gF("padButtonCreate"),
          Menu: gF("padButtonOptions")
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
      EF = (dd, Od) => {
        var md;
        const Wd = null !== (md = aF[dd][Od]) && void 0 !== md ? md : wF[Od];
        return "string" === typeof Wd ? Wd : (0, Fd.B)(YF.f.get().getCurrentLanguageCode(), Wd.translationKey)
      },
      JF = dd => {
        let {
          glyph: Od,
          family: md,
          className: Wd
        } = dd;
        const Fd = (0, Nd.y)(),
          Rd = null !== md && void 0 !== md ? md : Fd,
          Xd = (0, vF.g)(Rd, Od);
        return (0, zd.jsx)("span", {
          className: Pd()("ControllerGlyph", Wd),
          role: "img",
          "aria-label": EF(Rd, Od),
          style: {
            "--pad-glyph-mask": `url(${Xd})`,
            "--pad-glyph-aspect": (0, vF.c)(Rd, Od)
          }
        })
      };
    var UF = md(2060);
    const xF = dd => {
      let {
        action: Od
      } = dd;
      const {
        t: md
      } = (0, Fd.G)();
      switch (Od.kind) {
        case "reload":
          return (0, zd.jsx)("span", {
            children: md("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, zd.jsx)(UF.d, {
            text: Od.description ? [{
              icon: Od.icon
            }, ` ${Od.description}`] : [{
              icon: Od.icon
            }]
          });
        case "touchButton":
          return (0, zd.jsx)(UF.d, {
            text: Od.label
          })
      }
    };
    var BF = md(9864);
    const SF = dd => {
      let {
        hold: Od
      } = dd;
      return (0, zd.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${Od.holdMs}ms`
        },
        children: (0, zd.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, Od.id)
    };
    var sF = md(9894),
      uF = md(9896),
      VF = md(9902),
      iF = md(9885);
    const AF = () => {
        const {
          gameState: dd
        } = (0, hd.p)(["gameState"]), Od = (0, Nd.x)(), [Wd, Fd] = (0, nd.useState)(!1), [Rd, Xd] = (0, nd.useState)(!1);
        return (0, nd.useEffect)((() => {
          "inGame" === dd && Fd(!0)
        }), [dd]), (0, nd.useEffect)((() => {
          if (!Wd) return;
          let dd = null,
            Od = !1;
          return (TF.G ? Promise.all([md.e(85), md.e(105), md.e(307), md.e(127), md.e(257), md.e(255), md.e(104)]).then((() => md(42485))).then((dd => dd.startWasmPadGameplay)) : Promise.all([md.e(85), md.e(265), md.e(264), md.e(113), md.e(89), md.e(86), md.e(87), md.e(88), md.e(213), md.e(261), md.e(91), md.e(105), md.e(253), md.e(267), md.e(112), md.e(124), md.e(258), md.e(142), md.e(241), md.e(102), md.e(90), md.e(251), md.e(185), md.e(257), md.e(123)]).then((() => md(42631))).then((dd => dd.startPadGameplay))).then((md => {
            Od || (dd = md())
          })).catch((dd => {
            console.error("Pad gameplay failed to load", dd), Od || Xd(!0)
          })), () => {
            var md;
            Od = !0, null === (md = dd) || void 0 === md || md()
          }
        }), [Wd]), (0, nd.useEffect)((() => {
          Rd && Od && (Xd(!1), yF.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((dd => {
            !0 === dd && (0, bF.reloadBloxd)()
          })))
        }), [Rd, Od]), (0, zd.jsxs)(zd.Fragment, {
          children: [(0, zd.jsx)(rF, {}), (0, zd.jsx)(GF, {}), (0, zd.jsx)(nF, {})]
        })
      },
      rF = () => {
        const {
          t: dd
        } = (0, Fd.G)(), Od = (0, Nd.x)(), {
          gameState: md,
          isUiHidden: Wd
        } = (0, hd.p)(["gameState", "isUiHidden"]), {
          hideButtonHints: Rd
        } = (0, od.o)(), Xd = (0, BF.g)(), Kd = (0, BF.i)(), [vd, td] = (0, nd.useState)(VF.d);
        return (0, pF.f)(iF.j, td), !Od || Rd || Wd || "inGame" !== md || !Xd && !vd ? null : (0, zd.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [Xd && (0, zd.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, zd.jsx)(JF, {
              glyph: (0, Qd.h)("actionButton")
            }), (0, zd.jsx)(xF, {
              action: Xd
            }), Kd && (0, zd.jsx)("span", {
              className: "PadActionHintMore",
              children: dd("controller:gameplayActionWheelHint")
            })]
          }), vd && (0, zd.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, zd.jsx)(JF, {
              glyph: (0, Qd.h)("pickBlock")
            }), (0, zd.jsx)("span", {
              children: dd("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      GF = () => {
        const {
          t: dd
        } = (0, Fd.G)(), Od = (0, Nd.x)(), {
          gameState: md,
          isUiHidden: Wd
        } = (0, hd.p)(["gameState", "isUiHidden"]), [Rd, Xd] = (0, nd.useState)(sF.d);
        return (0, pF.f)(iF.h, Xd), Od && !Wd && "inGame" === md && Rd ? (0, zd.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, zd.jsx)("span", {
            children: dd("controller:gameplayDropStack")
          }), (0, zd.jsx)(SF, {
            hold: Rd
          })]
        }) : null
      },
      nF = () => {
        const {
          t: dd
        } = (0, Fd.G)(), Od = (0, Nd.x)(), {
          gameState: md,
          isUiHidden: Wd
        } = (0, hd.p)(["gameState", "isUiHidden"]), {
          hideButtonHints: Rd
        } = (0, od.o)(), [Xd, Kd] = (0, nd.useState)(uF.b);
        return (0, pF.f)(iF.f, Kd), Od && !Wd && "inGame" === md && Xd ? (0, zd.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!Rd && (0, zd.jsx)(JF, {
            glyph: (0, Qd.h)("attack")
          }), (0, zd.jsx)("span", {
            children: dd("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var LF = md(9907),
      PF = md(2116),
      zF = md(3403),
      cF = md(9325);
    const jF = dd => dd && !(0, LF.b)(PF.e.get("shopInfo")),
      DF = () => {
        const dd = "inGame" === (0, hd.p)(["gameState"]).gameState;
        return (0, zF.g)("shopInfo", (() => {
          (0, cF.g)(jF(dd))
        })), (0, nd.useEffect)((() => {
          (0, cF.g)(jF(dd))
        }), [dd]), null
      },
      eF = () => {
        const {
          t: dd
        } = (0, Fd.G)(), {
          hideButtonHints: Od
        } = (0, od.o)();
        (0, Nd.y)();
        const md = (0, PO.l)();
        return (0, nd.useEffect)((() => (() => {
          const dd = td.b.register({
              name: "inventory",
              isActive: Xm.isActive,
              onFrame: Xm.onFrame,
              onDeactivate: Xm.onDeactivate,
              wakePressActs: Xm.wakePressActs
            }),
            Od = dd => {
              Xm.noteRealPointer(dd), Xm.shouldBlockRealPointer(dd) && dd.stopPropagation()
            };
          for (const Xd of Km) window.addEventListener(Xd, Od, !0);
          const md = (0, Md.k)((() => {
              "inventory" !== td.b.getActiveConsumerName() && Xm.forgetSurface()
            })),
            Wd = dd => {
              const Od = dd.target;
              (0, Nd.h)() && (0, Zd.f)(Od) && Od.closest(aO) && (0, Md.i)() && (0, Md.q)(Od)
            };
          document.addEventListener("focusout", Wd, !0);
          const {
            invalidate: Fd,
            onScroll: Rd
          } = Xm.targets;
          return document.addEventListener("scroll", Rd, !0), window.addEventListener("resize", Fd), () => {
            dd(), md();
            for (const dd of Km) window.removeEventListener(dd, Od, !0);
            document.removeEventListener("scroll", Rd, !0), document.removeEventListener("focusout", Wd, !0), window.removeEventListener("resize", Fd), Xm.targets.disconnect()
          }
        })()), []), (0, zd.jsxs)(zd.Fragment, {
          children: [(0, zd.jsx)(ed, {
            placer: Xm.ring,
            className: "InventorySlotCursorRing"
          }), md.showing && !Od && (0, zd.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: fd(md).map((Od => {
              let {
                actions: Wd,
                labelKey: Fd
              } = Od;
              return (0, zd.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [Wd.map((dd => (0, zd.jsx)(JF, {
                  glyph: (0, Qd.h)(dd)
                }, dd))), (0, zd.jsx)("span", {
                  children: dd(`controller:${Fd}`)
                }), "inventoryDrop" === Fd && md.dropStackHold && (0, zd.jsx)(SF, {
                  hold: md.dropStackHold
                })]
              }, Fd)
            }))
          })]
        })
      },
      IF = [{
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
      lF = dd => Array.from(dd).map((dd => ({
        type: "char",
        char: dd,
        width: 1
      }))),
      CF = function(dd) {
        return {
          type: "command",
          command: dd,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      ZF = [CF("page", 2), CF("otherPage"), CF("caretLeft"), CF("space", 3), CF("caretRight"), CF("close", 1.5), CF("submit", 1.5)],
      kF = [CF("page", 2), CF("otherPage"), CF("caretLeft"), CF("space", 2), CF("caretRight"), CF("newline"), CF("close", 1.5), CF("submit", 1.5)],
      fF = [
        [...lF("1234567890"), CF("backspace")], lF("qwertyuiop/"), lF("asdfghjkl'?"), [CF("shift", 2), ...lF("zxcvbnm,.")]
      ],
      MF = [
        [...lF("1234567890"), CF("backspace")], lF("!@#$%^&*()/"), lF('-_=+[]{};:"'), lF("~`|\\<>'\u20ac\xa3,.")
      ],
      dR = {
        letters: fF,
        accents: [
          [...lF("1234567890"), CF("backspace")], lF("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), lF("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [CF("shift", 2), ...lF("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: MF
      },
      OR = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      mR = (dd, Od) => "letters" === dd ? Od ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === dd ? "symbols" : "accents"
      },
      WR = function(dd, Od) {
        const md = ((dd, Od) => [...dR[dd], Od ? kF : ZF])(dd, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === Od) return md;
        const Wd = Math.min(2, FR(md[0]) / Od);
        return [Array.from({
          length: Od
        }, ((dd, Od) => ({
          type: "phrase",
          phraseIndex: Od,
          width: Wd
        }))), ...md]
      },
      FR = dd => dd.reduce(((dd, Od) => dd + Od.width), 0),
      RR = dd => Math.max(...dd.map(FR)),
      XR = (dd, Od) => {
        const md = dd[Od.row];
        let Wd = (RR(dd) - FR(md)) / 2;
        for (let Fd = 0; Fd < Od.col; Fd++) Wd += md[Fd].width;
        return Wd + md[Od.col].width / 2
      },
      KR = (dd, Od, md) => {
        let Wd = 0,
          Fd = 1 / 0;
        for (let Rd = 0; Rd < dd[Od].length; Rd++) {
          const Xd = Math.abs(XR(dd, {
            row: Od,
            col: Rd
          }) - md);
          Xd < Fd - 1e-9 && (Wd = Rd, Fd = Xd)
        }
        return Wd
      },
      hR = (dd, Od) => {
        const md = Math.max(0, Math.min(dd.length - 1, Od.row));
        return {
          row: md,
          col: Math.max(0, Math.min(dd[md].length - 1, Od.col))
        }
      },
      vR = (dd, Od, md) => "once" === dd && Od - md <= 400 ? "caps" : "off" === dd ? "once" : "off",
      QR = (dd, Od) => "once" === dd && (dd => dd.toLowerCase() !== dd.toUpperCase())(Od) ? "off" : dd,
      tR = (dd, Od, md) => {
        if ("symbols" === Od || "off" === md) return dd;
        const Wd = dd.toUpperCase();
        return 1 === Wd.length ? Wd : dd
      };
    var oR = md(9788),
      NR = md(9920);
    const qR = {
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
      HR = ["NQ", "nameTag"],
      yR = dd => {
        const Od = dd.target instanceof HTMLTextAreaElement && !HR.includes(dd.kind);
        return WR(dd.page, "chat" === dd.kind ? NR.f.length : 0, Od)
      },
      bR = dd => {
        const Od = dd.getBoundingClientRect(),
          md = window.innerHeight,
          Wd = Od.top + Od.height / 2 < md / 2 ? "bottom" : "top",
          Fd = "bottom" === Wd ? md - Od.bottom - 6 : Od.top - 6;
        return {
          placement: Wd,
          maxHeightPx: Math.min(.46 * md, Math.max(.3 * md, Fd))
        }
      },
      TR = dd => {
        (0, sm.f)(dd) ? (0, sm.c)().close(): (mF.noteChosenStop(dd), dd.blur())
      };
    class pR {
      constructor(dd) {
        this.host = dd, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(dd, Od) {
        this.phraseTexts = dd, this.phrasesFill = Od
      }
      pressKey(dd) {
        const Od = this.host.getState(),
          md = yR(Od),
          Wd = md[dd.row][dd.col];
        this.host.setState({
          ...Od,
          focus: dd,
          preferredX: XR(md, dd)
        }), "char" === Wd.type ? this.typeChar(Wd.char) : "command" === Wd.type ? this.runCommand(Wd.command) : this.sendPhrase(Wd.phraseIndex)
      }
      runCommand(dd) {
        const Od = this.host.getState();
        switch (dd) {
          case "backspace":
            (0, Zd.b)(Od.target);
            break;
          case "space":
            (0, Zd.c)(Od.target, " ");
            break;
          case "newline":
            (0, Zd.c)(Od.target, "\n");
            break;
          case "caretLeft":
            (0, Zd.g)(Od.target, -1);
            break;
          case "caretRight":
            (0, Zd.g)(Od.target, 1);
            break;
          case "shift": {
            const dd = performance.now();
            this.host.setState({
              ...Od,
              shift: vR(Od.shift, dd, this.lastShiftPressMs)
            }), this.lastShiftPressMs = dd;
            break
          }
          case "page":
          case "otherPage": {
            const md = mR(Od.page, Od.accentsFirst)[dd];
            this.host.setState({
              ...Od,
              page: md,
              focus: hR(yR({
                ...Od,
                page: md
              }), Od.focus)
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
            (0, sm.f)(Od.target) && (0, sm.c)().selectNextChannel()
        }
      }
      submit() {
        var dd, Od;
        const {
          target: md
        } = this.host.getState();
        this.host.hide(), (0, sm.f)(md) ? (0, sm.c)().submit() : (mF.noteChosenStop(md), null === (dd = (Od = (0, sm.d)(md)).submit) || void 0 === dd || dd.call(Od), document.activeElement === md && md.blur())
      }
      close() {
        const {
          target: dd
        } = this.host.getState();
        this.host.hide(), TR(dd)
      }
      typeChar(dd) {
        const {
          target: Od,
          page: md,
          shift: Wd
        } = this.host.getState();
        (0, Zd.c)(Od, tR(dd, md, Wd)), this.host.setState({
          ...this.host.getState(),
          shift: QR(Wd, dd)
        })
      }
      sendPhrase(dd) {
        if (this.phrasesFill) {
          const {
            target: Od
          } = this.host.getState(), md = this.phraseTexts[dd];
          md && (Od.setSelectionRange(0, Od.value.length), (0, Zd.c)(Od, md))
        } else NR.g.claim(performance.now()) && (this.host.hide(), (0, sm.c)().sendLine(this.phraseTexts[dd]))
      }
    }
    var YR = md(9805);
    const gR = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      wR = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class aR {
      constructor(dd, Od) {
        this.host = dd, this.editor = Od, this.lastDirection = null, this.navRepeat = new qd.d((0, Hd.e)(gR)), this.commandRepeats = new Map(IF.filter((dd => {
          let {
            repeats: Od
          } = dd;
          return Od
        })).map((dd => {
          let {
            command: Od
          } = dd;
          return [Od, (0, Hd.e)(wR)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const dd of this.commandRepeats.values()) dd.reset()
      }
      onVisibleFrame(dd) {
        const Od = performance.now();
        for (const {
            command: Fd,
            action: Rd
          }
          of IF) {
          const md = (0, Qd.h)(Rd),
            Wd = this.commandRepeats.get(Fd);
          if ((Wd ? Wd.update(dd.isHeld(md), Od) : dd.wasPressed(md)) && (this.editor.runCommand(Fd), !this.host.getState().visible)) return
        }
        if (dd.wasPressed((0, Qd.h)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const md = this.readNavDirection(dd);
        this.lastDirection = md;
        const Wd = this.navRepeat.update(md, Od);
        Wd && this.navigate(Wd)
      }
      onHiddenFrame(dd, Od) {
        var md;
        if (dd.wasPressed((0, Qd.h)("keyboardClose"))) return void TR(Od);
        const Wd = (0, Qd.h)("keyboardType");
        if (dd.wasPressed(Wd)) return td.b.consumeButton(Wd), void this.host.open(Od);
        const Fd = this.readNavDirection(dd),
          Rd = null !== Fd && Fd !== this.lastDirection;
        if (this.lastDirection = Fd, !Rd || (0, sm.f)(Od)) return;
        const Xd = (null === (md = NW()) || void 0 === md ? void 0 : md.root.contains(Od)) || null !== Od.closest(".EntireInventoryWrapper");
        TR(Od), Xd && td.b.handOffHeldInput()
      }
      navigate(dd) {
        const Od = this.host.getState();
        if ("Up" === dd && 0 === Od.focus.row && "chat" === Od.kind) return (0, sm.c)().stepHistory(), void this.host.setState({
          ...Od
        });
        const md = ((dd, Od, md, Wd) => {
          if ("Left" === md || "Right" === md) {
            const Wd = dd[Od.row].length,
              Fd = (Od.col + ("Right" === md ? 1 : -1) + Wd) % Wd,
              Rd = {
                row: Od.row,
                col: Fd
              };
            return {
              pos: Rd,
              preferredX: XR(dd, Rd)
            }
          }
          const Fd = (Od.row + ("Down" === md ? 1 : -1) + dd.length) % dd.length;
          return {
            pos: {
              row: Fd,
              col: KR(dd, Fd, Wd)
            },
            preferredX: Wd
          }
        })(yR(Od), Od.focus, dd, Od.preferredX);
        this.host.setState({
          ...Od,
          focus: md.pos,
          preferredX: md.preferredX
        })
      }
      readNavDirection(dd) {
        for (const Od of qd.C)
          if (dd.isHeld(Od)) return Od;
        return (0, qd.mb)((0, qd.h)(dd.leftStick, (0, od.f)().moveDeadzone))
      }
    }
    const ER = ["Up", "Down", "Left", "Right"],
      JR = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const UR = new class {
      constructor() {
        this.state = qR, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new pR(this), this.padInput = new aR(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(dd) {
        const Od = dd.visible !== this.state.visible;
        this.state = dd;
        for (const md of this.listeners) md();
        Od && vd.j.lQ(YR.c, dd.visible)
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      install() {
        const dd = td.b.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, Zd.f)(document.activeElement),
            onFrame: dd => {
              this.onFrame(dd)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: dd => ER.includes(dd) || !this.state.visible && dd === (0, Qd.h)("keyboardType")
          }),
          Od = dd => {
            const Od = dd.target;
            (0, Zd.f)(Od) && (Od === this.pendingChatInput || (0, Nd.h)() ? this.open(Od) : this.state.visible && Od !== this.state.target && (this.ownedField = null, this.hide()))
          },
          md = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          Wd = dd => {
            dd.isTrusted && this.state.visible && (dd => !dd.repeat && !JR.has(dd.key) && !(0, oR.e)(dd.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(dd.key))(dd) && this.hide()
          },
          Fd = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...bR(this.state.target)
            })
          };
        document.addEventListener("focusin", Od, !0), document.addEventListener("focusout", md, !0), window.addEventListener("keydown", Wd, !0), window.addEventListener("resize", Fd);
        const Rd = vd.j.subscribe(iF.b, (() => {
            this.openChat()
          })),
          Xd = vd.j.subscribe(YR.f, (dd => {
            this.openForField(dd)
          }));
        return () => {
          dd(), document.removeEventListener("focusin", Od, !0), document.removeEventListener("focusout", md, !0), window.removeEventListener("keydown", Wd, !0), window.removeEventListener("resize", Fd), vd.j.unsubscribe(Rd), vd.j.unsubscribe(Xd), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const dd = (0, sm.c)();
        dd ? document.activeElement !== dd.input ? (this.clearPendingChat(), this.pendingChatInput = dd.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), dd.open()) : this.open(dd.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(dd) {
        (0, Zd.f)(dd) ? (document.activeElement !== dd && dd.focus(), document.activeElement === dd && this.open(dd)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", dd)
      }
      open(dd) {
        var Od;
        if (this.clearPendingChat(), this.ownedField = dd, this.state.visible && this.state.target === dd) return;
        this.restoreInputMode(), (0, Zd.k)(dd), this.savedInputMode = dd.getAttribute("inputmode"), dd.setAttribute("inputmode", "none");
        const md = {
          ...qR,
          visible: !0,
          target: dd,
          kind: (0, sm.f)(dd) ? "chat" : null !== (Od = (0, sm.d)(dd).kind) && void 0 !== Od ? Od : null,
          accentsFirst: (Wd = YF.f.get().getCurrentLanguageCode(), OR.has(Wd)),
          ...bR(dd)
        };
        var Wd;
        const Fd = yR(md),
          Rd = ((dd, Od) => {
            for (let md = 0; md < dd.length; md++) {
              const Wd = dd[md].findIndex((dd => "char" === dd.type && dd.char === Od));
              if (-1 !== Wd) return {
                row: md,
                col: Wd
              }
            }
            return null
          })(Fd, "q");
        this.padInput.reset(), this.setState({
          ...md,
          focus: Rd,
          preferredX: XR(Fd, Rd)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(qR))
      }
      onFrame(dd) {
        if (this.releaseLostField()) return;
        const Od = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(dd) : (0, Zd.f)(Od) && this.padInput.onHiddenFrame(dd, Od)
      }
      releaseLostField() {
        const dd = this.ownedField;
        return !(null === dd || dd.isConnected && document.activeElement === dd) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: dd
        } = this.state;
        dd && (null === this.savedInputMode ? dd.removeAttribute("inputmode") : dd.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var xR = md(9927),
      BR = md(3827);
    const SR = new Map(IF.map((dd => {
        let {
          command: Od,
          action: md
        } = dd;
        return [Od, md]
      }))),
      sR = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      uR = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        NQ: "controller:keyboardTargetBookTitle"
      },
      VR = dd => {
        const Od = (() => {
          const [, dd] = (0, nd.useReducer)((dd => dd + 1), 0);
          return dd
        })();
        (0, nd.useEffect)((() => {
          if (!dd) return;
          const md = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const Fd of md) dd.addEventListener(Fd, Od);
          document.addEventListener("selectionchange", Od);
          const Wd = new MutationObserver(Od);
          return Wd.observe(dd, {
            attributeFilter: ["placeholder"]
          }), () => {
            Wd.disconnect();
            for (const Wd of md) dd.removeEventListener(Wd, Od);
            document.removeEventListener("selectionchange", Od)
          }
        }), [dd, Od])
      },
      iR = dd => {
        dd.preventDefault()
      },
      AR = dd => {
        "mouse" !== dd.pointerType && dd.preventDefault()
      },
      rR = () => {
        var dd;
        const {
          t: Od
        } = (0, Fd.G)(), md = (() => {
          const [dd, Od] = (0, nd.useState)(UR.getState());
          return (0, nd.useEffect)((() => UR.subscribe((() => {
            Od(UR.getState())
          }))), []), dd
        })(), Wd = (0, Nd.x)(), Rd = (0, nd.useRef)(null);
        (0, od.o)(), (0, Nd.y)(), (0, nd.useEffect)((() => {
          const dd = UR.install(),
            Od = null;
          return () => {
            dd(), null === Od || void 0 === Od || Od()
          }
        }), []);
        const Xd = (0, xR.p)(),
          Kd = md.visible && "chat" === md.kind ? md.target : null;
        VR(Kd);
        const hd = null !== (dd = null === Kd || void 0 === Kd ? void 0 : Kd.value) && void 0 !== dd ? dd : "",
          vd = (0, NR.b)(hd, hd.startsWith("/") ? (0, BR.f)() : [], NR.f.length),
          td = hd.startsWith("/"),
          qd = td ? NR.f.map(((dd, Od) => {
            var md;
            return null !== (md = vd[Od]) && void 0 !== md ? md : ""
          })) : Xd;
        if ((0, nd.useEffect)((() => {
            UR.editor.setPhraseRow(qd, td)
          })), (0, nd.useEffect)((() => {
            const dd = Rd.current;
            if (dd) return dd.addEventListener("touchstart", iR, {
              passive: !1
            }), () => {
              dd.removeEventListener("touchstart", iR)
            }
          }), [md.visible]), !md.visible) return null;
        const Hd = yR(md),
          yd = RR(Hd),
          bd = dd => "char" === dd.type ? tR(dd.char, md.page, md.shift) : "phrase" === dd.type ? qd[dd.phraseIndex] : (dd => {
            switch (dd) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === md.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return sR[mR(md.page, md.accentsFirst)[dd]];
              case "space":
                return Od("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return Od("chat" === md.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(dd.command),
          Td = dd => {
            UR.editor.pressKey(dd)
          };
        return (0, zd.jsxs)("div", {
          ref: Rd,
          className: Pd()(sm.k, "top" === md.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: md.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": Hd.length,
            "--pad-keyboard-height": `${md.maxHeightPx}px`
          },
          onPointerDown: AR,
          onMouseDown: iR,
          children: [(0, zd.jsx)(GR, {
            target: md.target,
            label: md.kind ? Od(uR[md.kind]) : md.target.placeholder || Od("controller:keyboardTargetText")
          }), (0, zd.jsx)("div", {
            className: "PadKeyboardRows",
            children: Hd.map(((dd, Od) => (0, zd.jsx)("div", {
              className: Pd()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === dd[0].type
              }),
              children: dd.map(((dd, Fd) => {
                const Rd = Wd && md.focus.row === Od && md.focus.col === Fd,
                  Xd = "command" === dd.type ? SR.get(dd.command) : void 0;
                return (0, zd.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: dd.width / yd * 100 + "%"
                  },
                  children: (0, zd.jsxs)("div", {
                    className: Pd()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: Rd,
                      PadKeyboardKeyCommand: "command" === dd.type,
                      PadKeyboardKeyPhrase: "phrase" === dd.type,
                      PadKeyboardKeyActive: "command" === dd.type && "shift" === dd.command && "off" !== md.shift,
                      PadKeyboardKeySubmit: "command" === dd.type && "submit" === dd.command
                    }),
                    role: "button",
                    onClick: () => {
                      Td({
                        row: Od,
                        col: Fd
                      })
                    },
                    onTouchEnd: dd => {
                      var md, Wd;
                      dd.preventDefault(), md = dd.changedTouches[0], Wd = dd.currentTarget.getBoundingClientRect(), md && md.clientX >= Wd.left && md.clientX <= Wd.right && md.clientY >= Wd.top && md.clientY <= Wd.bottom && Td({
                        row: Od,
                        col: Fd
                      })
                    },
                    children: [(0, zd.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: bd(dd)
                    }), Wd && Xd && (0, zd.jsx)(JF, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, Qd.h)(Xd)
                    })]
                  })
                }, Fd)
              }))
            }, Od)))
          })]
        })
      },
      GR = dd => {
        let {
          target: Od,
          label: md
        } = dd;
        VR(Od);
        const Wd = (0, nd.useRef)(null),
          Fd = (0, nd.useRef)(null),
          Rd = Od instanceof HTMLTextAreaElement;
        (0, nd.useLayoutEffect)((() => {
          const dd = Wd.current,
            Od = Fd.current;
          Rd ? dd.scrollTop = Od.offsetTop - dd.clientHeight / 2 : dd.scrollLeft = Od.offsetLeft - dd.clientWidth / 2
        }));
        const {
          value: Xd,
          start: Kd,
          end: hd
        } = (0, Zd.o)(Od), vd = "password" === Od.type ? "\u2022".repeat(Xd.length) : Xd;
        return (0, zd.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, zd.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: md
          }), (0, zd.jsxs)("div", {
            ref: Wd,
            className: Pd()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: Rd
            }),
            children: [(0, zd.jsx)("span", {
              children: vd.slice(0, Kd)
            }), (0, zd.jsx)("span", {
              ref: Fd,
              className: "PadKeyboardCaret"
            }), Kd !== hd && (0, zd.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: vd.slice(Kd, hd)
            }), (0, zd.jsx)("span", {
              children: vd.slice(hd)
            }), 0 === vd.length && Od.placeholder && Od.placeholder !== md && (0, zd.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: Od.placeholder
            })]
          })]
        })
      };
    var nR = md(1498),
      LR = md(4641);
    const PR = function() {
        for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
        return Od.map(Qd.h)
      },
      zR = (dd, Od) => {
        const md = lm(dd);
        return md ? [{
          glyphs: [md],
          labelKey: Od
        }] : []
      },
      cR = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      jR = "--pad-hint-bar-clearance",
      DR = "[data-pad-hint-bar-avoid]",
      eR = dd => {
        const Od = [];
        for (const md of dd)(0, dO.n)(md) && Od.push(md.getBoundingClientRect());
        return Od
      },
      IR = dd => {
        if (!dd) return null;
        const Od = NW(),
          md = Od ? eR(((dd, Od) => {
            const md = dd.closest(DR);
            return md ? [md] : ("popup" === Od ? document : dd).querySelectorAll(DR)
          })(Od.root, Od.layer.kind)) : [],
          Wd = !Od || Od.root.hasAttribute("data-pad-shows-hud");
        if (((0, LR.e)(null === Od || void 0 === Od ? void 0 : Od.layer.kind, (0, LR.h)()) || Wd) && md.push(...eR(document.querySelectorAll(cR.join(",")))), 0 === md.length) return null;
        const {
          width: Fd,
          height: Rd
        } = dd.getBoundingClientRect(), Xd = window.innerHeight - 8, Kd = (0, LR.m)(Xd, {
          width: Fd,
          height: Rd
        }, window.innerWidth / 2, md, 8);
        return Kd === Xd ? null : Math.round(window.innerHeight - Kd)
      },
      lR = dd => {
        const Od = document.documentElement.style,
          md = dd ? `${Math.round(window.innerHeight-dd.getBoundingClientRect().top)}px` : "";
        Od.getPropertyValue(jR) !== md && (md ? Od.setProperty(jR, md) : Od.removeProperty(jR))
      },
      CR = () => {
        const {
          t: dd
        } = (0, Fd.G)(), {
          hideButtonHints: Od
        } = (0, od.o)(), md = (0, Nd.x)(), [Wd, Rd] = (0, nd.useState)(!1), [Xd, vd] = (0, nd.useState)([]), [Hd, yd] = (0, nd.useState)(null), bd = (0, nd.useRef)(null), Td = (0, nd.useRef)(null);
        (0, pF.f)(YR.c, (dd => {
          Rd(dd)
        })), (0, pF.f)(LR.k, (() => {
          var dd;
          null === (dd = Td.current) || void 0 === dd || dd.call(Td)
        }));
        const pd = md && !Od && !Wd;
        return (0, nd.useEffect)((() => {
          if (!pd) return;
          let dd = null;
          const Od = () => {
            const Od = (() => {
                var dd;
                const Od = td.b.getActiveConsumerName(),
                  md = (0, LR.d)();
                if (md) {
                  const dd = (0, Qd.h)(md),
                    Od = "emoteWheel" === md && "wheel" === (0, od.f)().emoteButton || !(0, qd.L)(td.b.getLastFrame().values, dd) ? {
                      glyphs: PR("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [dd],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, Qd.z)(dd)],
                    labelKey: "controller:wheelChoose"
                  }, Od, {
                    glyphs: PR("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const Wd = NW();
                if (!Wd || "focus" !== Od && "cursor" !== Od) return (0, LR.b)(Qd.h);
                const Fd = [],
                  Rd = {
                    glyphs: PR("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  Xd = (0, Id.z)(Wd.root),
                  Kd = Xd ? !(0, dO.t)(Xd) : Boolean(Wd.layer.close),
                  vd = !Xd && Wd.layer.closeLabelKey ? Wd.layer.closeLabelKey : Rd.labelKey,
                  Nd = Kd ? [{
                    ...Rd,
                    labelKey: vd
                  }] : [],
                  Hd = im(Wd.layer.kind) ? [{
                    glyphs: PR("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === Od) return Fd.push({
                  glyphs: PR("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), Fd.push({
                  glyphs: PR("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), Fd.push(...Nd), Fd.push(...Hd), Fd.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), BW() && Fd.push({
                  glyphs: PR("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), Fd;
                const yd = mF.getFocused();
                yd && (0, iW.c)(yd) ? Fd.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : yd && (0, Id.H)(yd) ? Fd.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : Fd.push({
                  glyphs: PR("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const bd = yd ? null === (dd = Hm(yd)) || void 0 === dd ? void 0 : dd.dataset.padSecondary : void 0;
                bd && Fd.push({
                  glyphs: PR("menuSecondary"),
                  labelKey: bd
                }), Fd.push(...null !== yd && void 0 !== yd && yd.closest("[data-pad-friends-column]") ? [Rd] : Nd), Fd.push(...Hd);
                const Td = "home" === Wd.layer.kind;
                km(Wd.root) || !Lm(Wd.root) && !fm(Wd) ? Td && Fd.push({
                  glyphs: PR("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : Fd.push({
                  glyphs: PR("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), Td && (Fd.push(...zR("inventory", "controller:menusFriends")), bd || Fd.push({
                  glyphs: PR("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), Fd.push(...zR("pause", "controller:menusSettings")), Fd.push(...zR("leaderboard", "controller:menusNotifications")));
                const pd = hd.e.get("openEverythingMenuName");
                return "inGame" === hd.e.get("gameState") && "popup" !== Wd.layer.kind && null !== pd && ((0, tm.k)(pd) ? Fd.push(...zR("leaderboard", "controller:menusClose")) : pd !== Qm.m.LOBBY_LEADERBOARD && Fd.push(...zR("leaderboard", "controller:menusLobby"))), Fd.push({
                  glyphs: PR("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), Fd
              })(),
              md = IR(bd.current),
              Wd = ((dd, Od) => `${dd.map((dd=>`${dd.glyphs.join("+")}:${dd.labelKey}`)).join("|")}@${Od}`)(Od, md);
            Wd !== dd && (dd = Wd, (0, Kd.unstable_batchedUpdates)((() => {
              vd(Od), yd(md)
            }))), lR(bd.current)
          };
          Od(), Td.current = Od;
          const md = requestAnimationFrame(Od),
            Wd = setInterval(Od, 150);
          return () => {
            Td.current = null, cancelAnimationFrame(md), clearInterval(Wd), lR(null)
          }
        }), [pd]), (0, nd.useLayoutEffect)((() => {
          if (!pd) return;
          if (0 === Xd.length) return void lR(null);
          const dd = IR(bd.current);
          dd === Hd ? lR(bd.current) : yd(dd)
        }), [pd, Xd, Hd]), pd && 0 !== Xd.length ? (0, zd.jsx)("div", {
          ref: bd,
          className: "PadButtonHintBar SmallTextBold",
          style: null === Hd ? void 0 : {
            bottom: Hd
          },
          "aria-hidden": !0,
          children: Xd.map((Od => (0, zd.jsxs)("div", {
            className: "PadButtonHint",
            children: [Od.glyphs.map((dd => (0, zd.jsx)(JF, {
              glyph: dd,
              className: "PadButtonHintGlyph"
            }, dd))), (0, zd.jsx)("span", {
              children: dd(Od.labelKey)
            })]
          }, Od.labelKey)))
        }) : null
      };
    var ZR = md(1893);
    const kR = [dO.b, "label", "[data-pad-slider]"].join(","),
      fR = "data-pad-cursor-probe",
      MR = dd => {
        var Od;
        const md = (dd => {
          const Od = [];
          for (let Wd = dd; Wd && Wd !== document.body && Wd !== document.documentElement && (Od.push(Wd), !(Od.length > 8)); Wd = Wd.parentElement);
          const md = document.documentElement.classList.contains(Nd.p) ? Od[Od.length - 1] : void 0;
          null === md || void 0 === md || md.setAttribute(fR, "");
          try {
            return Od.map((dd => ({
              element: dd,
              cursor: getComputedStyle(dd).cursor
            })))
          } finally {
            null === md || void 0 === md || md.removeAttribute(fR)
          }
        })(dd);
        if ("pointer" !== (null === (Od = md[0]) || void 0 === Od ? void 0 : Od.cursor)) return null;
        let Wd = 0;
        for (; Wd + 1 < md.length && "pointer" === md[Wd + 1].cursor;) Wd++;
        return md[Wd].element
      },
      dX = (dd, Od, md, Wd) => {
        const Fd = Wd.root.contains(dd) ? Wd.root : null;
        for (let Rd = dd; Rd && Rd !== document.body && Rd !== document.documentElement; Rd = Rd.parentElement) {
          if (Rd instanceof HTMLElement && xd(Rd, Od) && Vd(Rd, Od, md)) return Rd;
          if (Rd === Fd) break
        }
        return "home" === Wd.layer.kind || "gamePage" === Wd.layer.kind ? ((dd, Od) => {
          const md = document.scrollingElement;
          return md instanceof HTMLElement && ![document.documentElement, document.body].some((Od => {
            const md = getComputedStyle(Od),
              Wd = "y" === dd ? md.overflowY : md.overflowX;
            return "hidden" === Wd || "clip" === Wd
          })) && Vd(md, dd, Od) ? md : null
        })(Od, md) : null
      };
    const OX = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, Hd.e)(qd.t), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const dd = td.b.register({
              name: "cursor",
              isActive: () => "cursor" === SW(),
              onFrame: dd => {
                this.onFrame(dd)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: dd => (0, td.d)(dd) || dd === (0, Qd.h)("menuConfirm") && (0, Id.I)((0, Nd.c)())
            }),
            Od = (0, RW.h)((dd => {
              const Od = dd.getRoot();
              Od && this.layerPoints.delete(Od), Od === this.layerRoot && (this.layerRoot = null)
            })),
            md = vd.j.subscribe("appManagerUpdated|activeInputDevice", (dd => {
              "gamepad" !== dd && this.active && !this.hidden && this.hide()
            }));
          return () => {
            dd(), Od(), vd.j.unsubscribe(md), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, Nd.h)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.lQ()
        }
        activate(dd) {
          this.active = !0, this.hidden = !1;
          const Od = JW();
          !Od || Od.root && Od.root !== dd.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(dd), this.jumpTo(Od.point))
        }
        jumpTo(dd) {
          this.state = {
            x: dd.x,
            y: dd.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.lQ())
        }
        onFrame(dd) {
          const Od = NW();
          if (!Od) return;
          if (this.active || this.activate(Od), this.followPage(Od)) return;
          this.followLayer(Od);
          const md = dd.wokeDevice ? (0, Nd.c)() : null;
          if (md && this.jumpTo(md), !(0, Nd.h)()) return void this.hide();
          const Wd = (0, Qd.h)("menuToggleCursor");
          if (dd.wasPressed(Wd)) return td.b.consumeButton(Wd), void EW(this.getHandoff(null));
          if (this.handBackToFocus(dd)) return;
          const Fd = (0, Qd.h)("menuConfirm"),
            Rd = (0, Qd.h)("menuSecondary");
          if (dd.wasPressed((0, Qd.h)("menuBack"))) return (0, Id.l)(Od.root) || (0, Id.f)(Od.root) || qW(), void this.lQ();
          if (OW(null, dd, Od)) return dd.wasReleased(Fd) && this.press && (this.updateHit(!1), this.updateConfirm(dd, Fd)), void this.lQ();
          if (document.pointerLockElement) return void this.hide();
          const Xd = sW() ? {
              x: 0,
              y: 0
            } : (dd => {
              const Od = (dd, Od) => (dd ? 1 : 0) - (Od ? 1 : 0);
              return {
                x: Od(dd.isHeld("Right"), dd.isHeld("Left")),
                y: Od(dd.isHeld("Down"), dd.isHeld("Up"))
              }
            })(dd),
            Kd = (0, od.f)().moveDeadzone,
            hd = ((dd, Od) => {
              const md = (0, qd.h)(dd, Yd(Od));
              return Math.hypot(md.x, md.y)
            })(dd.leftStick, Kd) > 0 || 0 !== Xd.x || 0 !== Xd.y;
          if (this.hidden) {
            const Od = dd.wasPressed(Fd),
              md = dd.wasPressed(Rd);
            if (!hd && !Ed(dd.rightStick) && !Od && !md && !dd.wokeDevice) return void this.lQ();
            if (this.hidden = !1, this.updateHit(!1), Od || md) return Od && (this.press = {
              kind: "ignored"
            }, dd.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.lQ()
          }
          this.movePendingPageStart(hd);
          const vd = this.getPoint();
          this.state = wd(this.state, {
            stick: dd.leftStick,
            moveDeadzone: Kd,
            dpad: Xd,
            dtMs: dd.dtMs,
            cursorSpeedPercent: (0, od.f)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const Hd = this.state.x !== vd.x || this.state.y !== vd.y,
            yd = [Fd, Rd].some((Od => dd.wasPressed(Od) || dd.wasReleased(Od)));
          (Hd || yd || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(Hd), this.updateConfirm(dd, Fd), this.updateSecondary(dd, Rd), this.updateScroll(dd, Od), this.lQ()
        }
        followPage(dd) {
          const Od = "home" === dd.layer.kind || "gamePage" === dd.layer.kind,
            md = this.page;
          if (this.page = Od ? {
              key: (0, RW.l)(dd.layer),
              root: dd.root
            } : null, !this.page || !md || md.root !== dd.root || md.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(dd), "hybrid" === aW()) return YW = null, TW = null, gW.lock(), !0;
          const {
            key: Wd
          } = this.page;
          return this.pendingPageStart = {
            root: dd.root,
            key: Wd,
            returning: mF.notePageEnteredByCursor(Wd),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(dd) {
          const Od = this.pendingPageStart;
          if (!Od) return;
          if (dd || Od.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const md = Od.returning ? mF.recallStop(Od.root, Od.key) : null;
          if (!md && Od.returning && performance.now() - Od.enteredAtMs < 1e3) return;
          const Wd = null !== md && void 0 !== md ? md : mF.pickInitial(Od.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: Od.enteredAtMs
          });
          Wd && (this.pendingPageStart = null, this.jumpTo((0, Id.A)(Wd)))
        }
        setLayer(dd) {
          this.layerRoot = dd.root, this.layerOrder = dd.order
        }
        followLayer(dd) {
          var Od;
          if (dd.root === this.layerRoot) return;
          null !== (Od = this.layerRoot) && void 0 !== Od && Od.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const md = this.layerPoints.get(dd.root),
            Wd = md && dd.order <= this.layerOrder ? md : mF.getLayerStartPoint(dd.root);
          this.setLayer(dd), this.jumpTo(Wd)
        }
        getHandoff(dd) {
          var Od;
          return {
            point: this.getPoint(),
            element: null !== (Od = this.interactive) && void 0 !== Od ? Od : this.findDraggedSliderNearby(),
            direction: dd
          }
        }
        findDraggedSliderNearby() {
          const dd = this.draggedSlider;
          if (null === dd || void 0 === dd || !dd.isConnected) return null;
          const Od = dd.getBoundingClientRect(),
            {
              y: md
            } = this.getPoint();
          return md >= Od.top - 40 && md <= Od.bottom + 40 ? dd : null
        }
        handBackToFocus(dd) {
          if (!sW()) return !1;
          const Od = qd.C.find((Od => dd.wasPressed(Od)));
          return !!Od && (md = this.getHandoff(Od), YW = yW(md), TW = null, gW.lock(), td.b.handOffHeldInput(), !0);
          var md
        }
        getAssistContext() {
          const dd = this.interactive;
          if (null === dd || void 0 === dd || !dd.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const Od = dd.getBoundingClientRect();
          if (Od.width > .4 * window.innerWidth || Od.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const md = (0, od.f)().cursorMagnetism && !(0, ZR.c)(dd) && !dd.closest("[data-pad-slider]"),
            Wd = this.magnet && this.magnet !== dd && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : Od;
          return {
            overInteractive: !0,
            magnetTarget: md ? {
              x: Wd.left + Wd.width / 2,
              y: Wd.top + Wd.height / 2
            } : null
          }
        }
        updateHit(dd) {
          this.lastHitTestMs = performance.now();
          const Od = this.getPoint(),
            md = document.elementFromPoint(Od.x, Od.y),
            Wd = md && !(0, bd.p)(md) && (dd => {
              var Od;
              const md = NW();
              return !(md && !md.root.contains(dd) && !dd.closest(".tooltip-container")) || !(null !== (Od = document.getElementById("root")) && void 0 !== Od && Od.contains(dd))
            })(md) ? md : null;
          if (Wd !== this.hit) return (0, Id.r)(this.hit, Wd, Od), this.hit = Wd, void this.setInteractive(Wd ? (dd => {
            const Od = dd.closest(kR);
            if (Od) {
              var md, Wd;
              const dd = null !== (md = null === (Wd = Od.parentElement) || void 0 === Wd ? void 0 : Wd.closest("[data-pad-focusable]")) && void 0 !== md ? md : Od;
              return (0, dO.t)(dd) ? {
                element: null,
                magnet: null
              } : {
                element: dd,
                magnet: Od
              }
            }
            const Fd = MR(dd);
            return {
              element: Fd,
              magnet: Fd
            }
          })(Wd) : {
            element: null,
            magnet: null
          });
          dd && Wd && (0, Id.r)(Wd, Wd, Od)
        }
        setInteractive(dd) {
          let {
            element: Od,
            magnet: md
          } = dd;
          this.interactive = Od, this.magnet = md
        }
        clearHover() {
          this.hit && (0, Id.r)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const dd = this.hit;
          if (!dd || (0, Id.H)(dd)) return {
            kind: "ignored"
          };
          const Od = (0, iW.c)(dd),
            md = dd.closest("[data-pad-slider]");
          return Od && md ? {
            kind: "slider",
            slider: md,
            adjuster: Od
          } : ((0, Id.u)(dd, this.getPoint()), {
            kind: "pointer",
            target: dd
          })
        }
        applySliderFraction(dd) {
          var Od;
          const md = dd.slider.getBoundingClientRect(),
            Wd = md.height > md.width,
            Fd = null === (Od = dd.slider.querySelector("[data-pad-slider-handle]")) || void 0 === Od ? void 0 : Od.getBoundingClientRect(),
            Rd = Fd ? Wd ? Fd.height : Fd.width : 0,
            Xd = (Wd ? md.height : md.width) - Rd;
          if (Xd <= 0) return;
          const Kd = Wd ? md.bottom - Rd / 2 - this.state.y : this.state.x - md.left - Rd / 2;
          dd.adjuster.setFraction(Math.max(0, Math.min(1, Kd / Xd)))
        }
        updateConfirm(dd, Od) {
          dd.wasPressed(Od) && (this.press = dd.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const md = this.press;
          if (!md) return;
          if (dd.isHeld(Od)) return "slider" === md.kind && this.applySliderFraction(md), void this.updateRepeat();
          this.press = null;
          const Wd = this.repeated;
          if (this.endRepeat(), !dd.wasReleased(Od)) return void this.endPressWithoutClick(md);
          const Fd = this.getPoint(),
            Rd = this.hit;
          if ("slider" === md.kind && md.adjuster.endDrag(), "pointer" === md.kind) {
            const dd = null !== Rd && void 0 !== Rd ? Rd : md.target.isConnected ? md.target : null;
            dd && (0, Id.w)(dd, Fd);
            const Od = Rd && md.target.isConnected && !Wd ? ((dd, Od) => {
              for (let md = dd; md; md = md.parentElement)
                if (md.contains(Od)) return md;
              return null
            })(md.target, Rd) : null;
            Od && (mF.noteCursorActivation(Od), (0, bd.h)(Od, new MouseEvent("click", (0, Id.P)(Fd, 0, 0))), (0, Id.i)(Od), (0, Id.N)(Od) && (0, Id.M)(Od))
          }
        }
        beginRepeat() {
          var dd, Od, md;
          const Wd = null !== (dd = null === (Od = this.hit) || void 0 === Od ? void 0 : Od.closest("[data-pad-repeat]")) && void 0 !== dd ? dd : null;
          this.repeatStop = Wd, this.repeatKey = null !== (md = null === Wd || void 0 === Wd ? void 0 : Wd.getAttribute("data-pad-repeat")) && void 0 !== md ? md : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const dd = this.repeatStop;
          if (!dd) return;
          const Od = this.hit;
          dd.isConnected && !(0, dO.t)(dd) && dd.getAttribute("data-pad-repeat") === this.repeatKey && Od && dd.contains(Od) ? dd.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, mF.noteCursorActivation(dd), (0, bd.h)(dd, new MouseEvent("click", (0, Id.P)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(dd) {
          "slider" === dd.kind && dd.adjuster.endDrag(), "pointer" === dd.kind && dd.target.isConnected && (0, Id.w)(dd.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(dd, Od) {
          dd.wasPressed(Od) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !dd.isHeld(Od) && (this.secondaryArmed = !1, dd.wasReleased(Od) && this.hit && (0, Id.n)(this.hit, this.getPoint(), 2))
        }
        updateScroll(dd, Od) {
          const md = Jd(dd.rightStick, dd.dtMs);
          if (0 === md.x && 0 === md.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + md.x,
            y: this.scrollRemainder.y + md.y
          };
          const Wd = Math.trunc(this.scrollRemainder.x),
            Fd = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - Wd,
            y: this.scrollRemainder.y - Fd
          };
          const Rd = this.hit;
          if (!Rd) return;
          let Xd = !1;
          if (0 !== Fd) {
            const dd = dX(Rd, "y", Fd > 0 ? 1 : -1, Od);
            dd && (dd.scrollBy({
              top: Fd,
              behavior: "instant"
            }), Xd = !0)
          }
          if (0 !== Wd) {
            const dd = dX(Rd, "x", Wd > 0 ? 1 : -1, Od);
            dd && (dd.scrollBy({
              left: Wd,
              behavior: "instant"
            }), Xd = !0)
          }
          Xd && (this.lastHitTestMs = -1 / 0)
        }
        lQ() {
          Cd.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      mX = () => {
        const dd = (0, nd.useMemo)((() => new Dd), []),
          Od = (0, Nd.x)();
        return (0, nd.useEffect)((() => {
          if (!Od) return;
          let md = 0,
            Wd = {
              of: null,
              atMs: 0,
              list: []
            };
          const Fd = document.getElementsByClassName(uW),
            Rd = dd => {
              for (const Od of [...Fd]) Od !== dd && Od.classList.remove(uW)
            },
            Xd = () => {
              var Od;
              md = requestAnimationFrame(Xd);
              const Fd = (() => {
                const dd = mF.getFocused();
                if (mF.isActive() && null !== dd && void 0 !== dd && dd.isConnected) return dd;
                const Od = OX.getHighlighted();
                return null !== Od && void 0 !== Od && Od.isConnected ? Od : null
              })();
              Rd(Fd), Fd && !Fd.classList.contains(uW) && Fd.classList.add(uW);
              const Kd = null !== (Od = null === Fd || void 0 === Fd ? void 0 : Fd.closest("[data-pad-reticle-box]")) && void 0 !== Od ? Od : Fd;
              dd.show(Kd ? ((dd, Od) => {
                let md = dd.left,
                  Wd = dd.top,
                  Fd = dd.right,
                  Rd = dd.bottom;
                for (const Xd of Od) {
                  if (!Xd) continue;
                  const dd = rd(Xd);
                  md = Math.max(md, dd.left), Wd = Math.max(Wd, dd.top), Fd = Math.min(Fd, dd.right), Rd = Math.min(Rd, dd.bottom)
                }
                return Fd <= md || Rd <= Wd ? null : {
                  left: md,
                  top: Wd,
                  width: Fd - md,
                  height: Rd - Wd
                }
              })(Kd.getBoundingClientRect(), (dd => {
                const Od = performance.now();
                return (Wd.of !== dd || Od - Wd.atMs > 500) && (Wd = {
                  of: dd,
                  atMs: Od,
                  list: [Bd(dd, "y"), Bd(dd, "x")]
                }), Wd.list
              })(Kd)) : null)
            };
          return md = requestAnimationFrame(Xd), () => {
            cancelAnimationFrame(md), Rd(null), dd.hide()
          }
        }), [Od, dd]), (0, zd.jsx)(ed, {
          placer: dd,
          className: "PadFocusRing"
        })
      },
      WX = (dd, Od) => {
        dd.style.transform = `translate3d(${Od.x}px, ${Od.y}px, 0)`, dd.classList.toggle("Visible", Od.visible), dd.classList.toggle("Pressed", Od.pressed)
      },
      FX = () => {
        const dd = (0, nd.useRef)(null);
        return (0, nd.useEffect)((() => {
          const Od = Cd.subscribe((Od => {
            dd.current && WX(dd.current, Od)
          }));
          return dd.current && WX(dd.current, Cd.get()), Od
        }), []), (0, zd.jsx)("div", {
          ref: dd,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, zd.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      RX = [{
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      XX = "PadOverThirdParty",
      KX = new Set(RX.map((dd => dd.id))),
      hX = () => {
        const dd = RX.map((dd => {
            let {
              id: Od,
              find: md,
              startSelectors: Wd
            } = dd;
            return (0, RW.i)({
              id: Od,
              kind: "popup",
              getRoot: () => {
                const dd = md(),
                  Od = dd ? ((dd, Od) => {
                    var md;
                    for (const Wd of Od) {
                      const Od = dd.querySelector(Wd);
                      if (Od) return Od
                    }
                    return null !== (md = [...dd.querySelectorAll("button")].find((dd => !dd.matches(".fc-cta-consent")))) && void 0 !== md ? md : null
                  })(dd, Wd) : null;
                if (dd && Od && !Od.hasAttribute("data-pad-default-focus")) {
                  for (const Od of dd.querySelectorAll("[data-pad-default-focus]")) Od.removeAttribute("data-pad-default-focus");
                  for (const Od of dd.querySelectorAll("[data-pad-hint-bar-avoid]")) Od.removeAttribute("data-pad-hint-bar-avoid");
                  Od.setAttribute("data-pad-default-focus", ""), ((dd, Od) => {
                    let md = dd;
                    for (let Wd = dd.parentElement; Wd && Od.contains(Wd) && !(Wd.getBoundingClientRect().height >= window.innerHeight / 2); Wd = Wd.parentElement) md = Wd;
                    return md
                  })(Od, dd).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return dd
              },
              close: null,
              memoryKey: null
            })
          })),
          Od = document.documentElement,
          md = Xd.g.onFrame((() => {
            const dd = (0, Nd.h)() ? NW() : null,
              md = !!dd && (Wd = dd.layer, KX.has(Wd.id));
            var Wd;
            Od.classList.contains(XX) !== md && Od.classList.toggle(XX, md)
          }));
        return () => {
          for (const Od of dd) Od();
          md(), Od.classList.remove(XX)
        }
      },
      vX = "PadLargePointer",
      QX = () => {
        (0, nd.useEffect)((() => {
          const dd = (0, bd.l)(document.body),
            Od = mF.install(),
            md = OX.install(),
            Wd = hX();
          return () => {
            dd(), Od(), md(), Wd()
          }
        }), []);
        const {
          largePointer: dd
        } = (0, od.o)(), Od = (0, nR.C)() && dd;
        return (0, nd.useEffect)((() => {
          if (Od) return document.documentElement.classList.add(vX), () => {
            document.documentElement.classList.remove(vX)
          }
        }), [Od]), (0, Kd.createPortal)((0, zd.jsxs)(zd.Fragment, {
          children: [(0, zd.jsx)(CR, {}), (0, zd.jsx)(mX, {}), (0, zd.jsx)(FX, {})]
        }), document.body)
      };
    var tX = md(9935),
      oX = md(9953),
      NX = md(9942);
    md(9958);
    const qX = (dd, Od) => {
        const [md, Wd] = (0, nd.useState)(!1), [Fd, Rd] = (0, nd.useState)(null), Xd = (0, nd.useRef)(null), Kd = (0, nd.useCallback)((dd => {
          Xd.current = dd, Rd(dd)
        }), []), hd = (0, nd.useCallback)((() => {
          Wd(!1), Kd(null)
        }), [Kd]), Qd = (0, nd.useCallback)((() => {
          Wd(!0)
        }), []), td = (0, nd.useCallback)(((dd, Od) => {
          Kd((0, NX.J)(dd, Od, Xd.current))
        }), [Kd]);
        (0, nd.useLayoutEffect)((() => (Od(md), (0, LR.q)(dd, md), vd.j.lQ(LR.k), () => {
          Od(!1), (0, LR.q)(dd, !1), vd.j.lQ(LR.k)
        })), [md, dd, Od]), (0, pF.f)("appManagerUpdated|activeInputDevice", (dd => {
          "gamepad" !== dd && hd()
        })), (0, pF.f)("appManagerUpdated|gameState", (dd => {
          "inGame" !== dd && hd()
        }));
        const od = () => {
          (0, tm.m)() && hd()
        };
        return (0, pF.f)("appManagerUpdated|openEverythingMenuName", od), (0, pF.f)("appManagerUpdated|openInGameMenuName", od), {
          open: md,
          picked: Fd,
          pickedRef: Xd,
          show: Qd,
          aim: td,
          close: hd
        }
      },
      HX = dd => {
        let {
          className: Od,
          slotCount: md,
          picked: Wd,
          slotLabel: Fd,
          renderSlot: Rd,
          centre: Xd
        } = dd;
        const Kd = Array.from({
          length: md
        }, ((dd, Od) => Od));
        return (0, zd.jsx)("div", {
          className: Pd()("EmoteWheelOverlay PadRadialWheel", Od),
          children: (0, zd.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * NX.t + "rem",
              height: 2 * NX.t + "rem"
            },
            children: [(0, zd.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${NX.q} ${NX.q}`,
              children: [Kd.map((dd => (0, zd.jsx)("path", {
                d: (0, NX.w)(dd, md, NX.h, NX.l, NX.n),
                className: Pd()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: dd === Wd
                }),
                "aria-label": Fd(dd)
              }, dd))), (0, zd.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: NX.h,
                cy: NX.h,
                r: NX.n
              }), (0, zd.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: NX.h,
                cy: NX.h,
                r: NX.l
              }), null !== Wd && (0, zd.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, NX.w)(Wd, md, NX.h, NX.l, NX.n)
              })]
            }), Kd.map((dd => {
              const Od = (0, NX.E)(dd, md);
              return (0, zd.jsx)("div", {
                className: Pd()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: dd === Wd
                }),
                style: {
                  left: `calc(50% + ${NX.d*Math.cos(Od)}rem)`,
                  top: `calc(50% + ${NX.d*Math.sin(Od)}rem)`
                },
                "aria-hidden": !0,
                children: Rd(dd)
              }, dd)
            })), (0, zd.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: Xd
            })]
          })
        })
      },
      yX = NR.f.length,
      bX = () => {
        const {
          t: dd
        } = (0, Fd.G)(), Od = qX("chat", Vm.m), md = (0, xR.p)();
        return (0, pF.f)(Vm.k, (() => {
          Od.open || (0, tX.f)() || (0, oX.r)() || "inGame" !== hd.e.get("gameState") || (0, tm.m)() || !(0, sm.c)() || Od.show()
        })), (0, pF.f)(Vm.c, (dd => {
          Od.open && Od.aim(dd, yX)
        })), (0, pF.f)(Vm.h, (() => {
          var dd;
          if (!Od.open) return;
          const Wd = Od.pickedRef.current;
          null !== Wd ? NR.g.claim(performance.now()) && (Od.close(), null === (dd = (0, sm.c)()) || void 0 === dd || dd.sendLine(md[Wd])) : Od.close()
        })), (0, pF.f)(Vm.g, Od.close), Od.open ? (0, zd.jsx)(HX, {
          className: "QuickChatWheel",
          slotCount: yX,
          picked: Od.picked,
          slotLabel: dd => md[dd],
          renderSlot: dd => md[dd],
          centre: null !== Od.picked ? md[Od.picked] : dd("controller:quickChatPick")
        }) : null
      },
      TX = () => {
        const {
          t: dd
        } = (0, Fd.G)(), Od = qX("actionButton", oX.s), [md, Wd] = (0, nd.useState)([]);
        if ((0, pF.f)(oX.m, (dd => {
            Od.open || (0, tX.f)() || (0, Vm.b)() || "inGame" !== hd.e.get("gameState") || (0, tm.m)() || (Wd(dd), Od.show())
          })), (0, pF.f)(oX.d, (dd => {
            Od.open && Od.aim(dd, md.length)
          })), (0, pF.f)(oX.j, (() => {
            if (!Od.open) return;
            const dd = Od.pickedRef.current;
            Od.close(), null !== dd && vd.j.lQ(oX.p, md[dd])
          })), (0, pF.f)(oX.g, Od.close), !Od.open) return null;
        const Rd = null !== Od.picked ? md[Od.picked] : null;
        return (0, zd.jsx)(HX, {
          className: "ActionWheel",
          slotCount: md.length,
          picked: Od.picked,
          slotLabel: Od => {
            const Wd = md[Od];
            return "reload" === Wd.kind ? dd("controller:gameplayReload") : "customButton" === Wd.kind ? Wd.description || Wd.icon : "touchButton" === Wd.kind && "string" === typeof Wd.label ? Wd.label : ""
          },
          renderSlot: dd => (0, zd.jsx)(xF, {
            action: md[dd]
          }),
          centre: Rd ? (0, zd.jsx)(xF, {
            action: Rd
          }) : dd("controller:actionWheelPick")
        })
      };
    var pX = md(107);
    const YX = () => ((0, nd.useEffect)((() => {
        var dd, Od;
        const md = (0, bd.l)(document.getElementById("root")),
          Wd = (0, Nd.d)(),
          Fd = (() => {
            const dd = [vd.j.subscribe(FF.g, (() => {
                hF("blockBreak")
              })), vd.j.subscribe("damagedByOtherPlayer", (() => {
                hF("damage")
              })), vd.j.subscribe("yourAttackHit", (dd => {
                let {
                  hitSelf: Od
                } = dd;
                Od || hF("hit")
              }))],
              Od = Xd.g.onActivePadChanged((dd => {
                dd && hF("connect")
              }));
            return () => {
              for (const Od of dd) vd.j.unsubscribe(Od);
              Od()
            }
          })(),
          Rd = (() => {
            const dd = new qF({
              getVisitId: NF.getVisitSessionId,
              peekVisitId: NF.peekVisitSessionId,
              readReportedVisitId: () => {
                const dd = oF.o.getItem(HF);
                return "string" === typeof dd ? dd : null
              },
              writeReportedVisitId: dd => {
                oF.o.setItem(HF, dd)
              },
              isPadActive: Nd.h,
              getPadFamily: () => {
                var dd, Od;
                return null !== (dd = null === (Od = Xd.g.getActivePad()) || void 0 === Od ? void 0 : Od.family) && void 0 !== dd ? dd : null
              },
              canReport: QF.isBloxdGa4Ready,
              getInputType: tF.e,
              Wt: QF.logControllerUsedToGtag
            });
            let Od = 0,
              md = null;
            const Wd = Fd => {
                null === md && ("notReady" !== dd.check(Fd) || null !== md || Od >= 20 || (Od++, md = setTimeout((() => {
                  md = null, Wd(!1)
                }), 3e3)))
              },
              Fd = vd.j.subscribe("appManagerUpdated|activeInputDevice", (() => {
                Wd(!0)
              })),
              Rd = (0, NF.onVisitStarted)((() => {
                Od = 0, Wd(!0)
              }));
            return () => {
              vd.j.unsubscribe(Fd), Rd(), null !== md && clearTimeout(md)
            }
          })(),
          Kd = Xd.g.onFrame(((dd, Od, md) => {
            const Wd = (0, Nd.m)(dd, md);
            td.b.dispatch(dd, Od, Wd)
          }));
        let Qd = null !== (dd = null === (Od = Xd.g.getActivePad()) || void 0 === Od ? void 0 : Od.family) && void 0 !== dd ? dd : null;
        const qd = Xd.g.onActivePadChanged((dd => {
            var Od, md;
            (td.b.reset(), (0, Nd.t)(), vd.j.lQ(Xd.c, dd), (null !== (Od = null === dd || void 0 === dd ? void 0 : dd.family) && void 0 !== Od ? Od : null) !== Qd) && (Qd = null !== (md = null === dd || void 0 === dd ? void 0 : dd.family) && void 0 !== md ? md : null, vd.j.lQ(od.c, (0, od.f)()));
            !dd && (0, Nd.h)() && (0, Nd.v)(hd.e.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          Hd = () => {
            "visible" !== document.visibilityState && td.b.clear()
          },
          yd = () => {
            td.b.clear()
          };
        document.addEventListener("visibilitychange", Hd), window.addEventListener("blur", yd), Xd.g.start(), (0, vF.l)();
        const Td = null;
        return () => {
          md(), Wd(), Fd(), Rd(), Kd(), qd(), document.removeEventListener("visibilitychange", Hd), window.removeEventListener("blur", yd), Xd.g.stop(), null === Td || void 0 === Td || Td()
        }
      }), []), (0, zd.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, zd.jsx)(AF, {}), (0, zd.jsx)(DF, {}), (0, zd.jsx)(eF, {}), (0, zd.jsx)(rR, {}), (0, zd.jsx)(QX, {}), (0, zd.jsx)(bX, {}), (0, zd.jsx)(TX, {})]
      })),
      gX = () => pX.featureFlags.useControllerSupport ? (0, zd.jsx)(YX, {}) : null;
    var wX = md(9313),
      aX = md(9965);
    const EX = new Set(vF.j),
      JX = dd => `${aX.q}${(0,od.j)()}/${dd}`,
      UX = dd => {
        if (!(0, aX.m)(dd)) return null;
        const [Od, md] = dd.slice(aX.q.length).split("/");
        return (0, wX.g)(Od) && EX.has(md) ? (0, vF.g)(Od, md) : null
      };
    var xX = md(9967);
    const BX = () => {
        const {
          t: dd
        } = (0, Fd.G)(), Od = (0, Nd.x)(), {
          gameState: md,
          isUiHidden: Wd
        } = (0, hd.p)(["gameState", "isUiHidden"]), {
          hideButtonHints: Rd,
          sneakMode: Xd
        } = (0, od.o)(), [Kd, vd] = (0, nd.useState)(xX.b);
        return (0, pF.f)(iF.k, vd), Od && !Wd && "inGame" === md && Kd ? (0, zd.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!Rd && (0, zd.jsx)(JF, {
            glyph: (0, Qd.h)("toggle" === Xd ? "sneak" : "sneakToggle")
          }), (0, zd.jsx)("span", {
            children: dd("controller:gameplaySneaking")
          })]
        }) : null
      },
      SX = 12,
      sX = dd => {
        let {
          trigger: Od,
          className: md,
          children: Wd
        } = dd;
        const Fd = (0, nd.useRef)(null);
        return (0, nd.useEffect)((() => {
          let dd = 0;
          const md = Bd(Od, "y"),
            Wd = () => {
              dd = requestAnimationFrame(Wd);
              const Rd = Fd.current;
              if (!Rd || null === Od || void 0 === Od || !Od.isConnected) return;
              const {
                left: Xd,
                top: Kd
              } = function(dd, Od, md) {
                let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const Rd = dd.left + dd.width / 2,
                  Xd = Math.max(SX, md.width - SX - Od.width),
                  Kd = Math.min(Math.max(Rd - Od.width / 2, SX), Xd),
                  hd = md.height - Wd;
                let vd = 0,
                  Qd = hd;
                if (Fd) {
                  const dd = Math.max(0, Fd.top),
                    Wd = Math.min(hd, Fd.bottom);
                  Wd - dd >= Math.max(md.height / 2, Od.height + 24) && (vd = dd, Qd = Wd)
                }
                const td = dd.top + dd.height / 2 < (vd + Qd) / 2 ? Qd - SX - Od.height : vd + SX;
                return {
                  left: Kd,
                  top: Math.max(SX, td)
                }
              }(Od.getBoundingClientRect(), {
                width: Rd.offsetWidth,
                height: Rd.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(jR)) || 0, null !== md && void 0 !== md && md.isConnected ? md.getBoundingClientRect() : null);
              Rd.style.transform = `translate3d(${Math.round(Xd)}px, ${Math.round(Kd)}px, 0)`, Rd.style.visibility = "visible"
            };
          return Wd(), () => {
            cancelAnimationFrame(dd)
          }
        }), [Od]), (0, zd.jsx)("div", {
          ref: Fd,
          className: md,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: Wd
        })
      };
    var uX = md(1443),
      VX = md(9971),
      iX = md(1572),
      AX = md(9977),
      rX = md(9984);
    const GX = {
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
      nX = () => {
        const {
          t: dd
        } = (0, Fd.G)(), Od = (0, Nd.x)(), md = (0, VX.c)(), Wd = (0, zF.j)("_tasks"), Rd = (0, zF.j)("_availableLeaderboards");
        if (!Od) return null;
        const Xd = (dd => {
          let {
            hasShop: Od,
            hasTasksOrLeaderboards: md,
            canInvite: Wd
          } = dd;
          const Fd = [];
          return Od && Fd.push("shop"), md && Fd.push("tasks"), Wd && Fd.push("invite"), Fd.push("leave"), Fd
        })({
          hasShop: md,
          hasTasksOrLeaderboards: !(!Wd && !Rd),
          canInvite: !!pX.featureFlags.canUseInviteLinks
        });
        return (0, zd.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: Xd.map((Od => {
            const {
              icon: md,
              labelKey: Wd
            } = GX[Od], Fd = "leave" === Od ? iX.G : iX.g;
            return (0, zd.jsx)(Fd, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (dd => {
                  switch (dd) {
                    case "shop":
                      return vd.j.lQ(rX.g), void hd.e.set({
                        openEverythingMenuName: Qm.m.SHOP
                      });
                    case "tasks":
                      return void vd.j.lQ("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void vd.j.lQ("toggleMenu", "inviteLink");
                    case "leave":
                      (0, AX.e)()
                  }
                })(Od)
              },
              children: (0, zd.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, zd.jsx)(uX.c, {
                  name: md
                }), (0, zd.jsx)("span", {
                  children: dd(Wd)
                })]
              })
            }, Od)
          }))
        })
      };
    var LX = md(2134);
    const PX = qd.z,
      zX = ["forward", "backward", "left", "right", "sprint"],
      cX = dd => dd.ctrlKey || dd.altKey || "Alt" === dd.key || "ArrowUp" === dd.key || "ArrowDown" === dd.key || "Tab" === dd.code || "/" === dd.key || "Slash" === dd.code;
    class jX {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(qd._).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(dd) {
        this.armed = dd
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || Od ? !dd.repeat && this.swallowedKeys.delete(dd.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(dd.code),
          continues: !1
        } : "Escape" === dd.key || dd.repeat && !this.swallowedKeys.has(dd.code) ? {
          swallow: !1,
          continues: !1
        } : md ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(dd.code), {
          swallow: !0,
          continues: (0, Nd.g)(dd)
        })
      }
      onKeyUp(dd) {
        return this.swallowedKeys.delete(dd.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Fd = (0, qd.s)(dd.values, this.previousHeld),
          Rd = null === md ? -1 : (0, qd.l)(md),
          Xd = Rd >= 0 && Fd[Rd] && !this.previousHeld[Rd],
          Kd = Fd.some(((dd, Od) => dd && !this.previousHeld[Od] && Od !== Rd)),
          hd = Math.hypot(dd.leftStick.x, dd.leftStick.y) >= PX,
          vd = Math.hypot(dd.rightStick.x, dd.rightStick.y) >= PX,
          Qd = hd && !this.leftStickWasPressed || vd && !this.rightStickWasPressed;
        this.previousHeld = Fd, this.leftStickWasPressed = hd, this.rightStickWasPressed = vd;
        let td = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, td = !0);
        const od = !Od && Xd && !Wd,
          Nd = !od && this.armed && !Od && (Kd || Qd);
        return (od || Nd) && (this.consumeNextFrame = !0, this.consumeAfterContinue = Nd, td = !0), {
          continues: Nd,
          back: od,
          consumeHeld: td
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const DX = new Set([...LX.n, ...LX.F]),
      eX = dd => ((dd, Od, md) => {
        const Wd = Object.keys(Od).filter((Wd => !md.has(Wd) && Od[Wd].includes(dd)));
        return Wd.length > 0 && Wd.every((dd => zX.includes(dd)))
      })(dd, LX.y, DX),
      IX = (dd, Od, md) => {
        const Wd = new jX,
          Fd = dd => {
            if (!dd.isTrusted) return;
            const {
              swallow: md,
              continues: Fd
            } = Wd.onKeyDown(dd, !(0, Nd.C)(dd) || (0, WF.k)() || (0, tm.m)(), eX(dd.code));
            md && (dd.stopImmediatePropagation(), cX(dd) && dd.preventDefault()), Fd && ((0, Nd.v)("keyboardMouse"), Od())
          },
          Rd = dd => {
            dd.isTrusted && Wd.onKeyUp(dd) && (dd.stopImmediatePropagation(), cX(dd) && dd.preventDefault())
          },
          Kd = () => {
            Wd.forgetKeys()
          };
        window.addEventListener("keydown", Fd, !0), window.addEventListener("keyup", Rd, !0), window.addEventListener("blur", Kd);
        const hd = Xd.g.onFrame((dd => {
            const Fd = td.b.getActiveConsumerName(),
              Rd = md(),
              Xd = Rd ? (0, Qd.h)("menuBack") : null,
              Kd = null !== Fd && "gameplay" !== Fd,
              {
                continues: hd,
                back: vd,
                consumeHeld: qd
              } = Wd.onPadFrame(dd, Kd, Xd, (0, Nd.l)(dd));
            if (qd) {
              const dd = (0, od.f)().swapSticks ? "right" : "left";
              td.b.consumeAllHeld(Wd.consumeLeavesMoveStick() ? dd : null)
            }
            vd ? null === Rd || void 0 === Rd || Rd() : hd && Od()
          })),
          vd = (0, WF.l)(`pressToContinue:${dd}`, (() => Wd.blocksGameplay()));
        return {
          setArmed: dd => {
            Wd.setArmed(dd)
          },
          dispose: () => {
            window.removeEventListener("keydown", Fd, !0), window.removeEventListener("keyup", Rd, !0), window.removeEventListener("blur", Kd), hd(), vd()
          }
        }
      };
    var lX = md(5901),
      CX = md(4649),
      ZX = md(4327),
      kX = md(9320);
    const fX = dd => {
        let {
          text: Od
        } = dd;
        return (0, zd.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: Od
        })
      },
      MX = dd => {
        let {
          label: Od,
          hint: md,
          options: Wd,
          value: Rd,
          onChange: Xd
        } = dd;
        const {
          t: Kd
        } = (0, Fd.G)();
        return (0, zd.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, zd.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, zd.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, zd.jsx)("div", {
                className: "SliderText",
                children: Od
              }), md && (0, zd.jsx)("div", {
                className: "ControllerSettingsHint",
                children: md
              })]
            }), (0, zd.jsx)(ZX.e, {
              options: Wd.map((dd => ({
                label: "label" in dd ? dd.label : Kd(dd.labelKey),
                value: dd.value
              }))),
              value: Rd,
              onChange: dd => {
                Xd(dd.value)
              }
            })]
          })
        })
      },
      dK = dd => {
        let {
          settingKey: Od,
          label: md,
          range: Wd,
          format: Fd
        } = dd;
        const Rd = (0, od.o)();
        return (0, zd.jsx)(lX.i, {
          name: md,
          min: Wd.min,
          max: Wd.max,
          step: Wd.step,
          padStep: Wd.step,
          initValue: Rd[Od],
          format: Fd,
          onChange: dd => {
            (0, od.m)({
              [Od]: (0, kX.x)(dd, Wd)
            })
          }
        })
      };
    var OK = md(9989),
      mK = md(9992);
    const WK = dd => dd instanceof DOMException && ("SecurityError" === dd.name || "NotAllowedError" === dd.name),
      FK = dd => {
        const [Od] = [...dd.controllers].sort(((dd, Od) => mK.r[dd] - mK.r[Od]));
        return mK.q[Od]
      },
      RK = dd => {
        (0, OK.c)().allowPhoneMotion().catch((Od => {
          dd && WK(Od) ? dd() : console.warn("Could not enable the motion sensor", Od)
        }))
      },
      XK = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      KK = dd => {
        let {
          status: Od
        } = dd;
        const {
          t: md
        } = (0, Fd.G)(), [Wd, Rd] = (0, nd.useState)(null), Xd = `${Od.controllers.join(",")}|${Od.phoneMotion}`;
        (0, nd.useEffect)((() => {
          Rd(null)
        }), [Xd]);
        const Kd = () => {
          (0, OK.c)().connectController().then((dd => {
            Rd(dd > 0 ? "openFailed" : null)
          })).catch((dd => {
            WK(dd) ? Rd("needsClick") : console.warn("Could not connect motion controller", dd)
          }))
        };
        if (Od.hidSupported) {
          let dd = md("controller:settingsGyroConnectHint");
          return "needsClick" === Wd ? dd = md("controller:settingsGyroConnectNeedsClick") : "openFailed" === Wd ? dd = md("controller:settingsGyroOpenFailed") : Od.controllers.length > 0 && (dd = md("controller:settingsGyroConnected", {
            name: FK(Od)
          })), (0, zd.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, zd.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, zd.jsx)("div", {
                className: "ControllerSettingsHint",
                children: dd
              }), (0, zd.jsx)(iX.g, {
                onClick: Kd,
                children: md("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === Od.phoneMotion) return (0, zd.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, zd.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === Wd && (0, zd.jsx)("div", {
              className: "ControllerSettingsHint",
              children: md("controller:settingsGyroAllowNeedsTap")
            }), (0, zd.jsx)(iX.g, {
              onClick: () => {
                RK((() => {
                  Rd("needsTap")
                }))
              },
              children: md("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const hd = XK[Od.phoneMotion];
        return hd ? (0, zd.jsx)("div", {
          className: "ControllerSettingsHint",
          children: md(hd)
        }) : null
      },
      hK = () => {
        const {
          t: dd
        } = (0, Fd.G)(), Od = (0, od.o)(), md = (0, OK.f)(), Wd = (0, Nd.y)(), Rd = !md.hidSupported && md.phoneSupported && !md.padConnected, Xd = (md.hidSupported || md.phoneSupported) && !Rd, Kd = (0, Qd.h)("pause");
        return (0, zd.jsxs)(zd.Fragment, {
          children: [(0, zd.jsx)(fX, {
            text: dd("controller:settingsGyro")
          }), Rd && (0, zd.jsx)("div", {
            className: "ControllerSettingsHint",
            children: dd("controller:settingsGyroPhoneNeedsController")
          }), !Xd && !Rd && (0, zd.jsx)("div", {
            className: "ControllerSettingsHint",
            children: dd(md.hidBlocked || md.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), Xd && (0, zd.jsx)(lX.e, {
            label: dd(md.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: Od.gyroAiming,
            onClick: dd => {
              var Od, md;
              (0, od.m)({
                gyroAiming: dd
              });
              const Wd = null === (Od = null === (md = navigator.userActivation) || void 0 === md ? void 0 : md.isActive) || void 0 === Od || Od;
              if (!dd || !Wd) return;
              const Fd = (0, OK.c)(),
                Rd = Fd.getStatus();
              Rd.hidSupported ? Fd.connectControllerIfNoneGranted().catch((dd => {
                console.warn("Motion controller picker unavailable", dd)
              })) : "needsPermission" === Rd.phoneMotion && RK()
            },
            circleInfoText: dd(md.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), Xd && md.hidSupported && (0, zd.jsx)("div", {
            className: "ControllerSettingsHint",
            children: dd("controller:settingsGyroSteamHint")
          }), Xd && Od.gyroAiming && (0, zd.jsxs)(zd.Fragment, {
            children: [(0, zd.jsx)(KK, {
              status: md
            }), (0, zd.jsx)(dK, {
              settingKey: "gyroSensitivity",
              label: dd("controller:settingsGyroSensitivity"),
              range: kX.S,
              format: kX.L
            }), (0, zd.jsx)(MX, {
              label: dd("controller:settingsGyroActivation"),
              hint: "aiming" === Od.gyroActivation && (0, zd.jsx)(CX.b, {
                text: dd("controller:settingsGyroAimingHint", {
                  button: CX.d
                }),
                glyph: (0, Qd.h)("use")
              }),
              options: kX.Q,
              value: Od.gyroActivation,
              onChange: dd => {
                (0, od.m)({
                  gyroActivation: dd
                })
              }
            }), "button" === Od.gyroActivation && (0, zd.jsx)(MX, {
              label: dd("controller:settingsGyroButton"),
              hint: dd("controller:settingsGyroButtonHint"),
              options: kX.s.filter((dd => dd !== Kd || dd === Od.gyroButton)).map((dd => ({
                label: EF(Wd, dd),
                value: dd
              }))),
              value: Od.gyroButton,
              onChange: dd => {
                (0, od.m)({
                  gyroButton: dd
                })
              }
            })]
          })]
        })
      };
    var vK = md(2010);
    const QK = () => {
      const {
        t: dd
      } = (0, Fd.G)(), Od = (0, od.o)(), md = (0, Nd.y)();
      return (0, zd.jsxs)(zd.Fragment, {
        children: [(0, zd.jsx)(fX, {
          text: dd("controller:settingsAccessibility")
        }), (0, zd.jsx)(lX.e, {
          label: dd("controller:settingsSwapConfirmBack"),
          checked: (0, Qd.J)(Od.swapConfirmBack, md),
          onClick: dd => {
            (0, od.m)({
              swapConfirmBack: dd === (0, Qd.J)(null, md) ? null : dd
            }), vK.g.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: dd("controller:settingsSwapConfirmBackInfo")
        }), (0, zd.jsx)(MX, {
          label: dd("controller:settingsButtonRepeat"),
          hint: dd("controller:settingsButtonRepeatHint"),
          options: kX.p,
          value: Od.buttonRepeat,
          onChange: dd => {
            (0, od.m)({
              buttonRepeat: dd
            })
          }
        }), (0, zd.jsx)(MX, {
          label: dd("controller:settingsTapHoldTime"),
          hint: dd("controller:settingsTapHoldTimeHint"),
          options: kX.tb,
          value: Od.tapHoldTime,
          onChange: dd => {
            (0, od.m)({
              tapHoldTime: dd
            })
          }
        }), (0, zd.jsx)(MX, {
          label: dd("controller:settingsEmoteButton"),
          hint: dd("wheel" === Od.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: kX.E,
          value: Od.emoteButton,
          onChange: dd => {
            (0, od.m)({
              emoteButton: dd
            })
          }
        }), (0, zd.jsx)(MX, {
          label: dd("controller:settingsAttackMode"),
          hint: dd("toggle" === Od.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: kX.n,
          value: Od.attackMode,
          onChange: dd => {
            (0, od.m)({
              attackMode: dd
            })
          }
        }), (0, zd.jsx)(lX.e, {
          label: dd("controller:settingsLargePointer"),
          checked: Od.largePointer,
          onClick: dd => {
            (0, od.m)({
              largePointer: dd
            })
          },
          circleInfoText: dd("controller:settingsLargePointerInfo")
        })]
      })
    };
    var tK = md(9995);
    const oK = new class {
        constructor(dd) {
          this.router = dd, this.current = null
        }
        claim(dd, Od) {
          const md = this.current;
          md && (this.current = null, md.release(), md.onTakenOver());
          const Wd = this.router.register({
              ...dd,
              name: "capture"
            }),
            Fd = {
              release: Wd,
              onTakenOver: Od
            };
          return this.current = Fd, () => {
            this.current === Fd && (this.current = null), Wd()
          }
        }
      }(td.b),
      NK = dd => {
        (0, nd.useEffect)((() => {
          if (!dd) return;
          const Od = dd();
          let md = !1;
          const Wd = () => {
              md || (md = !0, Od.onEnd())
            },
            Fd = oK.claim({
              isActive: () => !md,
              onFrame: dd => {
                Od.onFrame(dd, Wd)
              }
            }, Wd),
            Rd = void 0 === Od.timeoutMs ? void 0 : window.setTimeout(Wd, Od.timeoutMs),
            Xd = dd => {
              "Escape" === dd.key && (dd.preventDefault(), dd.stopPropagation(), Wd())
            };
          return window.addEventListener("keydown", Xd, !0), () => {
            md = !0, Fd(), window.clearTimeout(Rd), window.removeEventListener("keydown", Xd, !0)
          }
        }), [dd])
      },
      qK = dd => {
        let {
          row: Od,
          capturing: md,
          onCapture: Wd,
          holdFillRef: Rd,
          onRebind: Xd,
          swapped: Kd
        } = dd;
        const {
          t: hd
        } = (0, Fd.G)();
        if ("fixed" === Od.kind) return (0, zd.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, zd.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, zd.jsx)("div", {
              className: "ControlName",
              children: hd(Od.labelKey)
            }), (0, zd.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, zd.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, zd.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, zd.jsx)(JF, {
                    glyph: "move" === Od.stick ? (0, Qd.t)() : (0, Qd.q)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: vd
        } = Od, td = (0, Qd.h)(vd), od = (0, Qd.l)(vd), Nd = td !== od && (0, Qd.e)(vd, od);
        return (0, zd.jsxs)("div", {
          className: Pd()("ControlRow PadControlRow", {
            Capturing: md
          }),
          children: [(0, zd.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, zd.jsx)("div", {
              className: "ControlName",
              children: hd(kX.j[vd])
            }), (0, zd.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!md && (0, zd.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, zd.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Wd(vd)
                  },
                  children: (0, zd.jsx)(JF, {
                    glyph: td
                  })
                }), Nd && (0, zd.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: hd("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Xd(vd, od)
                  },
                  children: (0, zd.jsx)(uX.c, {
                    name: "arrows-rotate"
                  })
                })]
              }), md && (0, zd.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, zd.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, zd.jsx)("span", {
                    children: hd("controller:settingsCapturePrompt")
                  }), (0, zd.jsx)("div", {
                    ref: Rd,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, zd.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Wd(null)
                  },
                  children: "\xd7"
                })]
              }), md && (0, zd.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, zd.jsx)(CX.b, {
                  text: hd((0, Qd.e)(vd, (0, Qd.h)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: CX.d
                  }),
                  glyph: (0, Qd.h)("menuBack")
                })
              })]
            })]
          }), Kd.map((dd => (0, zd.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, zd.jsx)(CX.b, {
              text: hd("controller:settingsSwapNotice", {
                action: hd(kX.j[dd]),
                button: CX.d
              }),
              glyph: (0, Qd.h)(dd)
            })
          }, dd))), md && (0, zd.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${kX.v}ms`
            }
          })]
        })
      },
      HK = [],
      yK = dd => {
        let {
          layoutSetting: Od
        } = dd;
        const {
          t: md
        } = (0, Fd.G)(), Wd = (0, od.o)();
        (0, Nd.y)();
        const Rd = (0, nd.useRef)(null),
          [Xd, Kd] = (0, nd.useState)(null),
          hd = (0, nd.useCallback)(((dd, Od) => {
            const md = (0, od.f)().bindings;
            (0, Qd.E)(dd, Od);
            const Wd = (0, Qd.x)(md, dd);
            Kd(Wd.length > 0 ? {
              action: dd,
              swapped: Wd
            } : null)
          }), []),
          [vd, Hd] = ((dd, Od) => {
            const [md, Wd] = (0, nd.useState)(null), Fd = (0, nd.useMemo)((() => md ? () => {
              const Fd = (0, Qd.h)("menuBack"),
                Rd = new kX.e(Fd, (0, Qd.h)("menuConfirm"), (dd => (0, Qd.e)(md, dd)));
              return {
                onFrame: (Wd, Xd) => {
                  var Kd;
                  const hd = Wd.frame.timestampMs,
                    vd = Rd.update({
                      ...Wd,
                      isDown: dd => (0, qd.L)(Wd.frame.values, dd)
                    }, hd);
                  null === (Kd = dd.current) || void 0 === Kd || Kd.style.setProperty("width", 100 * Rd.getBindHoldProgress(hd) + "%"), vd && ("bind" === vd.kind ? (td.b.consumeButton(vd.button), Od(md, vd.button)) : td.b.consumeButton(Fd), Xd())
                },
                onEnd: () => {
                  Wd(null)
                },
                timeoutMs: kX.v
              }
            } : null), [md, dd, Od]);
            return NK(Fd), [md, Wd]
          })(Rd, hd),
          yd = dd => {
            dd && Kd(null), Hd(dd)
          };
        (0, nd.useEffect)((() => {
          if (!Xd) return;
          const dd = window.setTimeout((() => {
            Kd(null)
          }), kX.qb);
          return () => {
            window.clearTimeout(dd)
          }
        }), [Xd]);
        const bd = !Wd.swapSticks && 0 === Object.keys(Wd.bindings).length;
        return (0, zd.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, zd.jsx)("div", {
            className: "SliderText",
            children: md("controller:settingsRemap")
          }), (0, zd.jsx)("div", {
            className: "ControllerSettingsHint",
            children: md("controller:settingsRemapHint")
          }), (0, zd.jsx)(iX.G, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: bd,
            onClick: () => {
              yd(null), Kd(null), (0, Qd.F)()
            },
            children: md("controller:settingsResetAll")
          }), Od, kX.ib.map(((dd, Od) => (0, zd.jsx)(tK.d, {
            title: md(dd.titleKey),
            defaultOpen: 0 === Od,
            children: dd.rows.map((dd => (0, zd.jsx)(qK, {
              row: dd,
              capturing: "action" === dd.kind && dd.action === vd,
              onCapture: yd,
              holdFillRef: Rd,
              onRebind: hd,
              swapped: "action" === dd.kind && (null === Xd || void 0 === Xd ? void 0 : Xd.action) === dd.action ? Xd.swapped : HK
            }, "action" === dd.kind ? dd.action : dd.labelKey)))
          }, dd.titleKey)))]
        })
      },
      bK = dd => {
        let {
          deadzone: Od,
          dotRef: md,
          labelKey: Wd
        } = dd;
        const {
          t: Rd
        } = (0, Fd.G)();
        return (0, zd.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, zd.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, zd.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * Od + "%",
                height: 100 * Od + "%"
              }
            }), (0, zd.jsx)("div", {
              ref: md,
              className: "ControllerTesterDot"
            })]
          }), (0, zd.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: Rd(Wd)
          })]
        })
      },
      TK = (dd, Od, md, Wd) => {
        var Fd;
        dd && (dd.style.left = 50 + 50 * Math.max(-1, Math.min(1, Od.x)) + "%", dd.style.top = 50 + 50 * Math.max(-1, Math.min(1, Od.y)) + "%", null === (Fd = dd.parentElement) || void 0 === Fd || Fd.classList.toggle("Active", Wd || Math.hypot(Od.x, Od.y) > md))
      },
      pK = dd => {
        const Od = {
            deadzone: dd.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          md = {
            deadzone: dd.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return dd.swapSticks ? {
          left: md,
          right: Od
        } : {
          left: Od,
          right: md
        }
      },
      YK = () => {
        const {
          t: dd
        } = (0, Fd.G)(), Od = (() => {
          const [dd, Od] = (0, nd.useState)((() => Xd.g.getActivePad()));
          return (0, pF.f)(Xd.c, (() => {
            Od(Xd.g.getActivePad())
          })), dd
        })(), md = pK((0, od.o)()), Wd = (0, nd.useRef)(null), Rd = (0, nd.useRef)(null), Kd = (0, nd.useRef)([]), hd = (0, nd.useRef)(null), vd = (0, nd.useRef)(null), [Nd, Hd] = (dd => {
          const [Od, md] = (0, nd.useState)(!1), Wd = (0, nd.useMemo)((() => Od ? () => {
            const Od = (0, Qd.h)("menuBack"),
              Wd = new kX.g;
            return {
              onFrame: (md, Fd) => {
                var Rd;
                const Xd = Wd.update({
                  pressed: md.wasPressed(Od),
                  jK: md.isHeld(Od)
                }, md.frame.timestampMs);
                null === (Rd = dd.current) || void 0 === Rd || Rd.style.setProperty("width", 100 * Xd + "%"), Xd >= 1 && (td.b.consumeButton(Od), Fd())
              },
              onEnd: () => {
                md(!1)
              }
            }
          } : null), [Od, dd]);
          return NK(Wd), [Od, md]
        })(Rd);
        (0, nd.useEffect)((() => {
          const dd = dd => {
            for (const md of qd.cb) {
              const Od = (0, qd.l)(md),
                Wd = Kd.current[Od];
              if (!Wd) continue;
              const Fd = dd.values[Od];
              Wd.classList.toggle("Pressed", Fd >= qd.z), (0, qd.O)(Od) && Wd.style.setProperty("--trigger-fill", `${Math.round(100*Fd)}%`)
            }
            const Od = pK((0, od.f)());
            TK(hd.current, dd.leftStick, Od.left.deadzone, dd.values[(0, qd.l)("LS")] >= qd.z), TK(vd.current, dd.rightStick, Od.right.deadzone, dd.values[(0, qd.l)("RS")] >= qd.z)
          };
          return Od || dd((0, qd.w)()), Xd.g.onFrame(dd)
        }), [Od]), (0, nd.useEffect)((() => {
          Od || Hd(!1)
        }), [Od, Hd]), (0, nd.useEffect)((() => {
          var dd;
          Nd && (null === (dd = Wd.current) || void 0 === dd || dd.scrollIntoView({
            block: "nearest"
          }))
        }), [Nd]);
        const yd = kX.fb.find((dd => dd.value === (null === Od || void 0 === Od ? void 0 : Od.family)));
        return (0, zd.jsxs)("div", {
          ref: Wd,
          className: Pd()("SettingBox ControllerTester", {
            Testing: Nd
          }),
          children: [(0, zd.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, zd.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [Od && (0, zd.jsx)("div", {
                children: dd("controller:settingsTesterFamily", {
                  family: yd ? dd(yd.labelKey) : Od.family
                })
              }), Od && (0, zd.jsx)("div", {
                className: "ControllerTesterPadId",
                children: Od.id
              }), !Od && (0, zd.jsx)("div", {
                children: dd("controller:settingsTesterNoPad")
              })]
            }), (Od || Nd) && (0, zd.jsx)(iX.g, {
              className: "ControllerTesterToggle",
              onClick: () => {
                Hd(!Nd)
              },
              children: dd(Nd ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), Od && !Nd && (0, zd.jsx)("div", {
            className: "ControllerSettingsHint",
            children: dd("controller:settingsTesterHint")
          }), Nd && (0, zd.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, zd.jsx)(CX.b, {
              text: dd("controller:settingsTesterTesting", {
                button: CX.d
              }),
              glyph: (0, Qd.h)("menuBack")
            }), (0, zd.jsx)("div", {
              ref: Rd,
              className: "ControllerTesterExitFill"
            })]
          }), (0, zd.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, zd.jsx)(bK, {
              deadzone: md.left.deadzone,
              dotRef: hd,
              labelKey: md.left.labelKey
            }), (0, zd.jsx)("div", {
              className: "ControllerTesterButtons",
              children: qd.cb.map((dd => {
                const md = (0, qd.l)(dd);
                return (0, zd.jsx)("div", {
                  ref: dd => {
                    Kd.current[md] = dd
                  },
                  className: (0, qd.O)(md) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, zd.jsx)(JF, {
                    glyph: dd,
                    family: null === Od || void 0 === Od ? void 0 : Od.family
                  })
                }, dd)
              }))
            }), (0, zd.jsx)(bK, {
              deadzone: md.right.deadzone,
              dotRef: vd,
              labelKey: md.right.labelKey
            })]
          })]
        })
      },
      gK = (0, nd.memo)((function() {
        const {
          t: dd
        } = (0, Fd.G)(), Od = (0, od.o)(), [md, Wd] = (0, nd.useState)(!1);
        return (0, nd.useEffect)((() => {
          if (!md) return;
          const dd = window.setTimeout((() => {
            Wd(!1)
          }), kX.qb);
          return () => {
            window.clearTimeout(dd)
          }
        }), [md]), (0, zd.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, zd.jsx)(fX, {
            text: dd("controller:settingsLook")
          }), (0, zd.jsx)(dK, {
            settingKey: "lookSensitivityX",
            label: dd("controller:settingsLookSensitivityX"),
            range: kX.kb,
            format: kX.N
          }), (0, zd.jsx)(dK, {
            settingKey: "lookSensitivityY",
            label: dd("controller:settingsLookSensitivityY"),
            range: kX.kb,
            format: kX.N
          }), (0, zd.jsx)(dK, {
            settingKey: "aimLookSensitivity",
            label: dd("controller:settingsAimLookSensitivity"),
            range: kX.k,
            format: kX.N
          }), (0, zd.jsx)(MX, {
            label: dd("controller:settingsLookCurve"),
            hint: dd("controller:settingsLookCurveHint"),
            options: kX.$,
            value: Od.lookCurve,
            onChange: dd => {
              (0, od.m)({
                lookCurve: dd
              })
            }
          }), (0, zd.jsx)(lX.e, {
            label: dd("controller:settingsInvertLookX"),
            checked: Od.invertLookX,
            onClick: dd => {
              (0, od.m)({
                invertLookX: dd
              })
            }
          }), (0, zd.jsx)(lX.e, {
            label: dd("controller:settingsInvertLookY"),
            checked: Od.invertLookY,
            onClick: dd => {
              (0, od.m)({
                invertLookY: dd
              })
            }
          }), (0, zd.jsx)(dK, {
            settingKey: "lookDeadzone",
            label: dd("controller:settingsLookDeadzone"),
            range: kX.C,
            format: kX.H
          }), (0, zd.jsx)(hK, {}), (0, zd.jsx)(fX, {
            text: dd("controller:settingsMovement")
          }), (0, zd.jsx)(dK, {
            settingKey: "moveDeadzone",
            label: dd("controller:settingsMoveDeadzone"),
            range: kX.C,
            format: kX.H
          }), (0, zd.jsx)(lX.e, {
            label: dd("controller:settingsAutoSprint"),
            checked: Od.autoSprint,
            onClick: dd => {
              (0, od.m)({
                autoSprint: dd
              })
            },
            circleInfoText: dd("controller:settingsAutoSprintInfo")
          }), (0, zd.jsx)(MX, {
            label: dd("controller:settingsSneak"),
            options: kX.ob,
            value: Od.sneakMode,
            onChange: dd => {
              (0, od.m)({
                sneakMode: dd
              })
            }
          }), (0, zd.jsx)(fX, {
            text: dd("controller:settingsButtons")
          }), (0, zd.jsx)(MX, {
            label: dd("controller:settingsPromptFamily"),
            options: kX.fb,
            value: Od.promptFamily,
            onChange: dd => {
              (0, od.m)({
                promptFamily: dd
              })
            }
          }), (0, zd.jsx)(lX.e, {
            label: dd("controller:settingsHideButtonHints"),
            checked: Od.hideButtonHints,
            onClick: dd => {
              (0, od.m)({
                hideButtonHints: dd
              })
            }
          }), (0, zd.jsx)(lX.e, {
            label: dd("controller:settingsVibration"),
            checked: Od.vibration,
            onClick: dd => {
              (0, od.m)({
                vibration: dd
              }), dd && hF("preview")
            }
          }), (0, zd.jsx)(dK, {
            settingKey: "cursorSpeed",
            label: dd("controller:settingsCursorSpeed"),
            range: kX.A,
            format: kX.N
          }), (0, zd.jsx)(lX.e, {
            label: dd("controller:settingsCursorMagnetism"),
            checked: Od.cursorMagnetism,
            onClick: dd => {
              (0, od.m)({
                cursorMagnetism: dd
              })
            }
          }), (0, zd.jsx)(lX.e, {
            label: dd("controller:settingsMenuBackToCategories"),
            checked: Od.menuBackToCategories,
            onClick: dd => {
              (0, od.m)({
                menuBackToCategories: dd
              })
            }
          }), (0, zd.jsx)(yK, {
            layoutSetting: (0, zd.jsxs)(zd.Fragment, {
              children: [Qd.g.map((md => (0, zd.jsx)(lX.e, {
                label: dd(kX.W[md]),
                checked: (0, Qd.D)(md, Od),
                onClick: dd => {
                  Wd(!(0, Qd.M)(md, dd))
                }
              }, md))), md && (0, zd.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: dd("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, zd.jsx)(QK, {}), (0, zd.jsx)(fX, {
            text: dd("controller:settingsAlternatives")
          }), (0, zd.jsx)("div", {
            className: "ControllerSettingsHint",
            children: dd("controller:settingsAlternativesHint")
          }), (0, zd.jsx)(MX, {
            label: dd("controller:settingsMenuNavigation"),
            hint: dd("controller:settingsMenuNavigationHint"),
            options: kX.cb,
            value: Od.menuNavigation,
            onChange: dd => {
              (0, od.m)({
                menuNavigation: dd
              })
            }
          }), (0, zd.jsx)(MX, {
            label: dd("controller:settingsInventoryNavigation"),
            hint: dd("controller:settingsInventoryNavigationHint"),
            options: kX.V,
            value: Od.inventoryNavigation,
            onChange: dd => {
              (0, od.m)({
                inventoryNavigation: dd
              })
            }
          }), (0, zd.jsx)(MX, {
            label: dd("controller:settingsQuickChat"),
            hint: dd("controller:settingsQuickChatHint"),
            options: kX.hb,
            value: Od.quickChat,
            onChange: dd => {
              (0, od.m)({
                quickChat: dd
              })
            }
          }), (0, zd.jsx)(MX, {
            label: dd("controller:settingsLeaderboardButton"),
            hint: dd("controller:settingsLeaderboardButtonHint"),
            options: kX.X,
            value: Od.leaderboardButton,
            onChange: dd => {
              (0, od.m)({
                leaderboardButton: dd
              })
            }
          }), (0, zd.jsx)(fX, {
            text: dd("controller:settingsTester")
          }), (0, zd.jsx)(YK, {})]
        })
      }));
    (0, Fd.e)(Wd);
    for (const UK of (0, Rd.r)()) UK.connected ? Xd.g.handleConnectionEvent(UK) : Xd.g.handleDisconnectionEvent(UK);
    const wK = () => null !== Xd.g.getActivePad(),
      aK = () => Xm.getState(),
      EK = () => Xm.isSteppingSlots(),
      JK = (dd, Od) => {
        const md = mF.getFocused();
        mF.isActive() && md && dd.contains(md) && mF.setFocus(Od, {
          scroll: !1
        })
      }
  },
  9296: (dd, Od, md) => {
    md.d(Od, {
      c: () => hd,
      e: () => vd
    });
    var Wd = md(1535),
      Fd = md(1528);
    const Rd = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      Xd = "28de",
      Kd = new Set(["1205"]),
      hd = (dd, Od) => {
        const md = (0, Wd.d)(dd);
        if ((null === md || void 0 === md ? void 0 : md.vendor) === Xd) return Kd.has(md.product) ? "steamdeck" : "xbox";
        if (md && Rd[md.vendor]) return Rd[md.vendor];
        if ((0, Fd.e)(dd)) return "nintendo";
        const hd = `${dd} ${null!==Od&&void 0!==Od?Od:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(hd) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(hd) ? "nintendo" : /steam deck/.test(hd) ? "steamdeck" : "xbox"
      },
      vd = dd => {
        var Od;
        return (null === (Od = (0, Wd.d)(dd)) || void 0 === Od ? void 0 : Od.vendor) === Xd
      }
  },
  9331: (dd, Od, md) => {
    md.d(Od, {
      b: () => vd,
      d: () => Kd
    });
    var Wd = md(9287);
    const Fd = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      Rd = new Set(["capture", "gameplay"]),
      Xd = ["Up", "Down", "Left", "Right"],
      Kd = dd => Xd.includes(dd),
      hd = .25;
    const vd = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.jK = new Array(Wd._).fill(!1), this.previousHeld = new Array(Wd._).fill(!1), this.consumedButtons = new Array(Wd._).fill(!1), this.suppressedReleases = new Array(Wd._).fill(!1), this.wakeOwned = new Array(Wd._).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, Wd.w)()
      }
      register(dd) {
        return this.consumers.has(dd.name) && console.warn(`Controller consumer "${dd.name}" registered twice; the newer one replaces it.`), this.consumers.set(dd.name, dd), () => {
          var Od;
          this.consumers.get(dd.name) === dd && (this.activeName === dd.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (Od = this.peek) || void 0 === Od ? void 0 : Od.over) === dd.name && (this.peek = null), this.consumers.delete(dd.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(dd) {
        return this.jK[(0, Wd.l)(dd)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.jK = new Array(Wd._).fill(!1), this.previousHeld = new Array(Wd._).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, Wd.w)()
      }
      dispatch(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = dd, this.previousHeld = this.jK, this.jK = (0, Wd.s)(dd.values, this.previousHeld);
        for (let Rd = 0; Rd < Wd._; Rd++) this.suppressedReleases[Rd] = !this.jK[Rd] && this.consumedButtons[Rd], this.jK[Rd] || (this.consumedButtons[Rd] = !1), this.wakeOwned[Rd] && (this.jK[Rd] ? (this.consumedButtons[Rd] = !0, this.wakeOwned[Rd] = !1) : dd.values[Rd] < Wd.W && (this.wakeOwned[Rd] = !1));
        Math.hypot(dd.leftStick.x, dd.leftStick.y) < hd && (this.leftStickConsumed = !1), Math.hypot(dd.rightStick.x, dd.rightStick.y) < hd && (this.rightStickConsumed = !1);
        const Fd = this.pickActive();
        if ((null === Fd || void 0 === Fd ? void 0 : Fd.name) !== this.activeName) {
          var Xd, Kd, vd, Qd, td, od;
          const dd = this.activeName,
            Od = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            md = null !== (Xd = null === Fd || void 0 === Fd || null === (Kd = Fd.peek) || void 0 === Kd ? void 0 : Kd.call(Fd)) && void 0 !== Xd ? Xd : null,
            Rd = null === dd && !!md && !(null === (vd = this.consumers.get(md.over)) || void 0 === vd || !vd.onPeekFrame),
            hd = md && (md.over === dd || Rd) ? md : null,
            Nd = null !== this.peek && this.peek.over === (null === Fd || void 0 === Fd ? void 0 : Fd.name) ? this.peek : null;
          this.deactivateCurrent(null !== hd, null !== Nd), this.activeName = null !== (Qd = null === Fd || void 0 === Fd ? void 0 : Fd.name) && void 0 !== Qd ? Qd : null, null === dd || this.handOffPending || this.consumeAllHeld();
          const qd = null === (td = null !== hd && void 0 !== hd ? hd : Nd) || void 0 === td ? void 0 : td.stick;
          "left" === qd && Od.left ? this.leftStickConsumed = !1 : "right" === qd && Od.right && (this.rightStickConsumed = !1), this.peek = hd, Fd || null === dd ? Fd && (null === (od = this.idleResume) || void 0 === od ? void 0 : od.name) === Fd.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: dd,
            left: Od.left && this.leftStickConsumed,
            right: Od.right && this.rightStickConsumed
          }, Fd && (this.idleResume = null);
          for (let Fd = 0; Fd < Wd._; Fd++) this.previousHeld[Fd] && !this.jK[Fd] && (this.suppressedReleases[Fd] = !0)
        }
        var Nd, qd;
        (this.handOffPending = !1, Fd) && (md && !Rd.has(Fd.name) && this.consumeWakePress(Fd), Fd.onFrame(this.buildInput(dd, Od, md)), this.peek && (null === (Nd = this.consumers.get(this.peek.over)) || void 0 === Nd || null === (qd = Nd.onPeekFrame) || void 0 === qd || qd.call(Nd, this.buildInput(dd, Od, !1, this.peek.stick))))
      }
      consumeWakePress(dd) {
        for (let Fd = 0; Fd < Wd._; Fd++) {
          var Od, md;
          const Rd = Wd.cb[Fd];
          (null !== (Od = null === (md = dd.wakePressActs) || void 0 === md ? void 0 : md.call(dd, Rd)) && void 0 !== Od ? Od : Xd.includes(Rd)) || (this.jK[Fd] ? this.consumedButtons[Fd] = !0 : this.lastFrame.values[Fd] >= Wd.U && (this.wakeOwned[Fd] = !0))
        }
      }
      pickActive() {
        for (const dd of Fd) {
          const Od = this.consumers.get(dd);
          if (Od && Od.isActive()) return Od
        }
        return null
      }
      deactivateCurrent() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var md, Wd, Fd, Rd;
        this.activeName && (null === (md = this.consumers.get(this.activeName)) || void 0 === md || null === (Wd = md.onDeactivate) || void 0 === Wd || Wd.call(md, dd));
        this.peek && !Od && (null === (Fd = this.consumers.get(this.peek.over)) || void 0 === Fd || null === (Rd = Fd.onDeactivate) || void 0 === Rd || Rd.call(Fd, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let Fd = 0; Fd < Wd._; Fd++) this.jK[Fd] && (this.consumedButtons[Fd] = !0);
        const {
          leftStick: Od,
          rightStick: md
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== dd && (this.leftStickConsumed || Math.hypot(Od.x, Od.y) >= hd), this.rightStickConsumed = "right" !== dd && (this.rightStickConsumed || Math.hypot(md.x, md.y) >= hd)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(dd) {
        const Od = (0, Wd.l)(dd);
        this.jK[Od] && (this.consumedButtons[Od] = !0)
      }
      buildInput(dd, Od, md, Fd) {
        const Rd = this.jK,
          Xd = this.previousHeld,
          Kd = Fd ? new Array(Wd._).fill(!0) : [...this.consumedButtons],
          hd = Fd ? Kd : [...this.suppressedReleases],
          vd = !this.leftStickConsumed && (!Fd || "left" === Fd),
          Qd = !this.rightStickConsumed && (!Fd || "right" === Fd);
        return {
          frame: dd,
          dtMs: Od,
          isHeld: dd => {
            const Od = (0, Wd.l)(dd);
            return Rd[Od] && !Kd[Od]
          },
          wasPressed: dd => {
            const Od = (0, Wd.l)(dd);
            return Rd[Od] && !Xd[Od] && !Kd[Od]
          },
          wasReleased: dd => {
            const Od = (0, Wd.l)(dd);
            return !Rd[Od] && Xd[Od] && !hd[Od]
          },
          value: Od => {
            const md = (0, Wd.l)(Od);
            return Kd[md] ? 0 : dd.values[md]
          },
          leftStick: vd ? dd.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: Qd ? dd.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: md
        }
      }
    }
  },
  9311: (dd, Od, md) => {
    md.d(Od, {
      c: () => td.c,
      e: () => td.f,
      f: () => Bd,
      j: () => Sd,
      m: () => sd,
      o: () => ud
    });
    var Wd = md(66),
      Fd = md(32),
      Rd = md(1566),
      Xd = md(46),
      Kd = md(9313),
      hd = md(9287),
      vd = md(9309),
      Qd = md(9285),
      td = md(2152),
      od = md(9320);
    const Nd = {
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
      qd = "controllerSettings",
      Hd = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      yd = ["auto", ...Kd.c],
      bd = (dd, Od) => "string" === typeof Od && dd.includes(Od),
      Td = dd => Od => "number" === typeof Od && Number.isFinite(Od) ? (0, od.x)(Od, dd) : void 0,
      pd = dd => "boolean" === typeof dd ? dd : void 0,
      Yd = dd => Od => bd(dd, Od) ? Od : void 0,
      gd = {
        lookSensitivityX: Td(od.kb),
        lookSensitivityY: Td(od.kb),
        aimLookSensitivity: Td(od.k),
        invertLookX: pd,
        invertLookY: pd,
        lookCurve: Yd(hd.Q),
        lookDeadzone: Td(od.C),
        moveDeadzone: Td(od.C),
        swapSticks: pd,
        autoSprint: pd,
        sneakMode: Yd(["toggle", "hold"]),
        tapHoldTime: Yd(["short", "medium", "long"]),
        attackMode: Yd(["hold", "toggle"]),
        promptFamily: Yd(yd),
        hideButtonHints: pd,
        vibration: pd,
        cursorSpeed: Td(od.A),
        cursorMagnetism: pd,
        buttonRepeat: Yd(hd.p),
        largePointer: pd,
        menuBackToCategories: pd,
        swapConfirmBack: pd,
        menuNavigation: Yd(["hybrid", "focus", "cursor"]),
        inventoryNavigation: Yd(["hybrid", "slot", "cursor"]),
        quickChat: Yd(["wheel", "off"]),
        leaderboardButton: Yd(["shop", "leaderboard"]),
        gyroAiming: pd,
        gyroSensitivity: Td(od.S),
        gyroActivation: Yd(["always", "aiming", "button"]),
        gyroButton: Yd(hd.cb),
        emoteButton: Yd(["tapHold", "wheel"])
      },
      wd = [{
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
      Ed = dd => {
        const Od = {};
        if ("object" !== typeof dd || null === dd) return Od;
        for (const [md, Wd] of Object.entries(dd)) Object.prototype.hasOwnProperty.call(vd.d, md) && bd(hd.cb, Wd) && (Od[md] = Wd);
        return Od
      },
      Jd = dd => {
        const Od = {};
        for (const md of Object.keys(Nd))("bindings" === md ? Object.keys(dd.bindings).length > 0 : dd[md] !== Nd[md]) && (Od[md] = dd[md]);
        0 !== Object.keys(Od).length ? Xd.k.setItem(qd, Od) : Xd.k.removeItem(qd)
      };
    let Ud = (() => {
        const dd = Xd.k.getItem(qd),
          Od = (dd => {
            const Od = "object" === typeof dd && null !== dd ? dd : {},
              md = {
                ...Nd,
                bindings: Ed(Od.bindings)
              };
            for (const Fd of Object.keys(gd)) {
              const dd = gd[Fd](Od[Fd]);
              void 0 !== dd && (md[Fd] = dd)
            }
            const Wd = Object.keys(Od).filter((dd => !!Object.prototype.hasOwnProperty.call(Nd, dd) && ("bindings" === dd ? "object" !== typeof Od.bindings || null === Od.bindings || Object.keys(Od.bindings).length !== Object.keys(md.bindings).length : md[dd] !== Od[dd])));
            return Wd.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${Wd.join(", ")}`), md
          })(dd);
        return null !== dd && void 0 !== dd && Jd(Od), Od
      })(),
      xd = {
        ...Ud,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const dd = {},
            Od = new URLSearchParams(window.location.search);
          for (const {
              param: md,
              key: Wd
            }
            of wd) {
            const Fd = gd[Wd](Od.get(md));
            void 0 !== Fd && (dd[Wd] = Fd)
          }
          return dd
        })()
      };
    const Bd = () => xd,
      Sd = () => {
        var dd, Od;
        const md = Bd().promptFamily;
        return "auto" !== md ? md : null !== (dd = null === (Od = Qd.g.getActivePad()) || void 0 === Od ? void 0 : Od.family) && void 0 !== dd ? dd : "xbox"
      },
      sd = dd => {
        const Od = xd;
        Ud = {
          ...Ud,
          ...dd
        }, Jd(Ud), xd = {
          ...xd,
          ...dd
        }, (dd => {
          Fd.j.lQ(td.f, xd), Hd.some((Od => dd[Od] !== xd[Od])) && Fd.j.lQ(td.c, xd)
        })(Od)
      },
      ud = () => {
        const [dd, Od] = (0, Wd.useState)(xd);
        return (0, Rd.f)(td.f, Od), dd
      }
  },
  9788: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd
    });
    const Wd = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      Fd = dd => Wd.has(dd)
  },
  9285: (dd, Od, md) => {
    md.d(Od, {
      c: () => Hd.b,
      g: () => pd
    });
    var Wd = md(9287),
      Fd = md(9296);
    const Rd = .1,
      Xd = .3;
    class Kd {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(dd, Od) {
        const md = null === this.lastMs ? 0 : Math.min(Math.max(0, Od - this.lastMs), 100);
        this.lastMs = Od;
        const Wd = Math.hypot(dd.x, dd.y);
        if (Wd >= Xd) return this.anchor = null, void(this.returning = !0);
        Wd >= Rd || (this.returning = !1);
        const Fd = this.anchor;
        if (!Fd || Math.hypot(dd.x - Fd.x, dd.y - Fd.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: dd.x,
          y: dd.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += md, this.steadyMs < 1e3) return;
        const Kd = Math.max(Wd, Math.hypot(Fd.x, Fd.y));
        Kd < Rd ? this.deadzone = 0 : this.returning && (this.deadzone = Kd + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(dd) {
        return Math.hypot(dd.x, dd.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : dd
      }
    }
    const hd = (dd, Od) => {
        var md, Wd;
        return null !== (md = dd && (null === (Wd = Object.getOwnPropertyDescriptor(dd, Od)) || void 0 === Wd ? void 0 : Wd.get)) && void 0 !== md ? md : null
      },
      vd = dd => {
        const Od = dd.vendorName;
        return "string" === typeof Od ? Od : void 0
      },
      Qd = ((dd, Od) => {
        const md = hd(dd, "index"),
          Wd = hd(dd, "id"),
          Fd = hd(dd, "connected"),
          Rd = hd(dd, "mapping"),
          Xd = hd(dd, "buttons"),
          Kd = hd(dd, "axes"),
          Qd = hd(Od, "pressed"),
          td = hd(Od, "value");
        return md && Wd && Fd && Rd && Xd && Kd && Qd && td ? dd => {
          const Od = Xd.call(dd),
            hd = Kd.call(dd),
            od = {
              index: Number(md.call(dd)),
              id: String(Wd.call(dd)),
              connected: !0 === Fd.call(dd),
              mapping: String(Rd.call(dd)),
              buttons: [],
              axes: [],
              vendorName: vd(dd)
            };
          for (let md = 0; md < Od.length; md++) od.buttons.push({
            pressed: !0 === Qd.call(Od[md]),
            value: Number(td.call(Od[md]))
          });
          for (let md = 0; md < hd.length; md++) od.axes.push(Number(hd[md]));
          return od
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      td = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var od = md(1521),
      Nd = md(1528);
    const qd = dd => ({
      pressed: dd,
      value: dd ? 1 : 0
    });
    var Hd = md(2152);
    const yd = Xd,
      bd = dd => {
        const Od = new Array(Wd._).fill(0);
        for (let md = 0; md < Wd._ && md < dd.buttons.length; md++) {
          const Fd = dd.buttons[md];
          Od[md] = Fd.pressed && !(0, Wd.O)(md) ? Math.max(Fd.value, Wd.z) : Fd.value
        }
        return Od
      },
      Td = (dd, Od) => {
        var md, Wd;
        return {
          x: null !== (md = dd.axes[Od]) && void 0 !== md ? md : 0,
          y: null !== (Wd = dd.axes[Od + 1]) && void 0 !== Wd ? Wd : 0
        }
      };
    const pd = new class {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Qd;
        this.readGamepads = dd, this.requireTrustedPads = Od, this.nativeReader = md, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = dd => {
          dd.isTrusted && this.trustedIndices.add(dd.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = dd => {
          this.trustedIndices.delete(dd.gamepad.index)
        }, this.Et = dd => {
          if (this.rafId = 0, !this.running) return;
          const Od = 0 === this.lastTimestampMs ? 16 : Math.min(100, dd - this.lastTimestampMs);
          this.lastTimestampMs = dd;
          try {
            this.poll(dd, Od)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.Et))
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
      onFrame(dd) {
        return this.frameListeners.add(dd), () => {
          this.frameListeners.delete(dd)
        }
      }
      onActivePadChanged(dd) {
        return this.connectionListeners.add(dd), () => {
          this.connectionListeners.delete(dd)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(dd) {
        return this.connectedListeners.add(dd), () => {
          this.connectedListeners.delete(dd)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const dd = this.readPads()[this.activeInfo.index],
          Od = dd ? this.readPad(dd) : null;
        return Od && Od.id === this.activeInfo.id ? dd : null
      }
      poll(dd, Od) {
        var md, Fd;
        const Rd = this.readPads();
        let Xd = null,
          hd = !1;
        const vd = [],
          Qd = Math.max(Rd.length, this.slots.length);
        for (let pd = 0; pd < Qd; pd++) {
          var td;
          const Od = pd < Rd.length ? Rd[pd] : null,
            md = Od ? this.readPad(Od) : null;
          if (!md || !md.connected || !this.isUsable(md)) {
            this.slots[pd] = null;
            continue
          }
          let Fd = this.slots[pd];
          Fd && Fd.id === md.id || (Fd = {
            id: md.id,
            jK: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new Kd,
            rightRest: new Kd
          }, this.slots[pd] = Fd);
          const Qd = Td(md, 0),
            od = Td(md, 2);
          !Fd.leftSettled && Math.hypot(Qd.x, Qd.y) < yd && (Fd.leftSettled = !0), !Fd.rightSettled && Math.hypot(od.x, od.y) < yd && (Fd.rightSettled = !0), Fd.leftRest.observe(Qd, dd), Fd.rightRest.observe(od, dd);
          const Nd = bd(md),
            qd = (0, Wd.s)(Nd, Fd.jK),
            Hd = Fd.jK,
            Yd = qd.map(((dd, Od) => dd && !Hd[Od]));
          Fd.jK = qd;
          const gd = {
            pad: md,
            slot: Fd,
            values: Nd
          };
          pd === (null === (td = this.activeInfo) || void 0 === td ? void 0 : td.index) && md.id === this.activeInfo.id ? (Xd = gd, hd = Yd.includes(!0)) : Yd.includes(!0) && vd.push({
            polled: gd,
            rose: Yd
          })
        }
        const od = this.slots.some((dd => null !== dd));
        if (od !== this.anyPadConnected) {
          this.anyPadConnected = od;
          for (const dd of this.connectedListeners) dd()
        }
        const Nd = null !== (md = null === (Fd = Xd) || void 0 === Fd ? void 0 : Fd.slot.jK) && void 0 !== md ? md : [],
          qd = hd ? void 0 : vd.find((dd => {
            let {
              rose: Od
            } = dd;
            return Od.some(((dd, Od) => dd && !Nd[Od]))
          }));
        if (qd ? (Xd = qd.polled, this.setActive(qd.polled.pad)) : this.activeInfo && !Xd && this.setActive(null), !Xd || !this.activeInfo) return;
        const Hd = ((dd, Od) => {
          let {
            pad: md,
            slot: Fd,
            values: Rd
          } = dd;
          const Xd = (0, Wd.w)(Od);
          return Xd.values = Rd, Fd.leftSettled && (Xd.leftStick = Fd.leftRest.apply(Td(md, 0))), Fd.rightSettled && (Xd.rightStick = Fd.rightRest.apply(Td(md, 2))), Xd
        })(Xd, dd);
        for (const Wd of this.frameListeners) Wd(Hd, Od, this.activeInfo)
      }
      readPad(dd) {
        const Od = this.readSnapshot(dd);
        return Od && (0, Nd.g)(Od) ? (dd => {
          const Od = Od => {
              var md;
              return null !== (md = dd.buttons[Od]) && void 0 !== md ? md : qd(!1)
            },
            md = Od => {
              var md;
              return null !== (md = dd.axes[Od]) && void 0 !== md ? md : 0
            },
            Wd = dd.axes.length > 9,
            Fd = Wd ? (dd => {
              const Od = 0 !== dd;
              return {
                up: Od && (dd >= -1 && dd < -.7 || dd >= .95 && dd <= 1),
                right: Od && dd >= -.75 && dd < -.1,
                down: Od && dd >= -.2 && dd < .45,
                left: Od && dd >= .4 && dd <= 1
              }
            })(md(9)) : {
              up: md(5) < -.5,
              down: md(5) > .5,
              left: md(4) < -.5,
              right: md(4) > .5
            };
          return {
            ...dd,
            mapping: "standard",
            buttons: [Od(1), Od(2), Od(0), Od(3), Od(4), Od(5), Od(6), Od(7), Od(8), Od(9), Od(10), Od(11), qd(Fd.up), qd(Fd.down), qd(Fd.left), qd(Fd.right), Od(12)],
            axes: [md(0), md(1), md(2), md(Wd ? 5 : 3)]
          }
        })(Od) : Od
      }
      readSnapshot(dd) {
        if (this.nativeReader) try {
          return this.nativeReader(dd)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (dd => {
          const Od = dd;
          return {
            index: Od.index,
            id: Od.id,
            connected: Od.connected,
            mapping: Od.mapping,
            buttons: Array.from(Od.buttons, (dd => ({
              pressed: dd.pressed,
              value: dd.value
            }))),
            axes: Array.from(Od.axes),
            vendorName: vd(dd)
          }
        })(dd)
      }
      isUsable(dd) {
        return !(0, od.e)(dd.id) && ("standard" !== dd.mapping ? (this.warnedNonStandardIds.has(dd.id) || (this.warnedNonStandardIds.add(dd.id), console.warn(`Controller "${dd.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(dd.index))
      }
      setActive(dd) {
        this.activeInfo = dd ? {
          index: dd.index,
          id: dd.id,
          family: (0, Fd.c)(dd.id, dd.vendorName)
        } : null;
        for (const Od of this.connectionListeners) Od(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (dd) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", dd)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.Et))
      }
    }((() => td ? td.call(navigator) : []), !0);
    pd.listenForConnections()
  },
  9868: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      d: () => Xd,
      h: () => Kd,
      l: () => Fd
    });
    var Wd = md(9877);
    const Fd = dd => {
        const Od = [];
        dd.holdingGun && Od.push({
          kind: "reload"
        }), dd.touchscreenActionButton && Od.push({
          kind: "touchButton",
          label: dd.touchscreenActionButton
        });
        for (const Rd of null !== (md = null === (Fd = dd.customButtons) || void 0 === Fd ? void 0 : Fd.filter(Wd.g)) && void 0 !== md ? md : []) {
          var md, Fd;
          Od.push({
            kind: "customButton",
            id: Rd.id,
            icon: Rd.icon,
            description: Rd.description
          })
        }
        return Od
      },
      Rd = dd => dd.length >= 2,
      Xd = dd => "specialAction" !== dd.kind,
      Kd = (dd, Od) => {
        if (null === dd || null === Od) return dd === Od;
        if (dd.kind !== Od.kind) return !1;
        switch (dd.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return dd.action === Od.action;
          case "customButton":
            return dd.id === Od.id && dd.icon === Od.icon;
          case "touchButton":
            return dd.label === Od.label
        }
      }
  },
  9797: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd
    });
    const Wd = {
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
  9864: (dd, Od, md) => {
    md.d(Od, {
      b: () => Qd,
      e: () => Nd,
      g: () => td,
      i: () => qd
    });
    var Wd = md(66),
      Fd = md(32),
      Rd = md(1566),
      Xd = md(9868),
      Kd = md(9885);
    let hd = null;
    const vd = () => hd,
      Qd = dd => {
        (0, Xd.h)(hd, dd) || (hd = dd, Fd.j.lQ(Kd.d, hd))
      },
      td = () => {
        const [dd, Od] = (0, Wd.useState)(vd);
        return (0, Rd.f)(Kd.d, Od), dd
      };
    let od = !1;
    const Nd = dd => {
        dd !== od && (od = dd, Fd.j.lQ(Kd.e, dd))
      },
      qd = () => {
        const [dd, Od] = (0, Wd.useState)(od);
        return (0, Rd.f)(Kd.e, Od), dd
      }
  },
  9896: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd,
      f: () => Kd
    });
    var Wd = md(32),
      Fd = md(9885);
    let Rd = !1;
    const Xd = () => Rd,
      Kd = dd => {
        dd !== Rd && (Rd = dd, Wd.j.lQ(Fd.f, Rd))
      }
  },
  9894: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd,
      g: () => hd
    });
    var Wd = md(32),
      Fd = md(9885);
    let Rd = null,
      Xd = 0;
    const Kd = () => Rd,
      hd = dd => {
        null === dd && null === Rd || (Rd = null === dd ? null : {
          id: ++Xd,
          holdMs: dd
        }, Wd.j.lQ(Fd.h, Rd))
      }
  },
  9885: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      d: () => Wd,
      e: () => Fd,
      f: () => Kd,
      h: () => hd,
      j: () => vd,
      k: () => Xd
    });
    const Wd = "controllerActionHintChanged",
      Fd = "controllerActionWheelHintChanged",
      Rd = "controllerOpenChat",
      Xd = "controllerSneakToggledChanged",
      Kd = "controllerAttackLatchedChanged",
      hd = "controllerDropStackHoldChanged",
      vd = "controllerPickBlockHintChanged"
  },
  9902: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd,
      g: () => Kd
    });
    var Wd = md(32),
      Fd = md(9885);
    let Rd = !1;
    const Xd = () => Rd,
      Kd = dd => {
        dd !== Rd && (Rd = dd, Wd.j.lQ(Fd.j, Rd))
      }
  },
  9967: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd,
      d: () => Kd
    });
    var Wd = md(32),
      Fd = md(9885);
    let Rd = !1;
    const Xd = () => Rd,
      Kd = dd => {
        dd !== Rd && (Rd = dd, Wd.j.lQ(Fd.k, Rd))
      }
  },
  9842: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd
    });
    class Wd {
      constructor() {
        this.downAtMs = null
      }
      update(dd, Od, md, Wd) {
        if (dd) return this.downAtMs = md, null;
        if (null === this.downAtMs) return null;
        const Fd = md - this.downAtMs >= Wd;
        return Od ? Fd ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, Fd ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  9349: (dd, Od, md) => {
    md.d(Od, {
      c: () => td,
      g: () => od,
      j: () => Kd,
      l: () => pd,
      n: () => Td
    });
    var Wd = md(46),
      Fd = md(9313),
      Rd = md(9287);
    const Xd = (() => {
        try {
          return md(9351)
        } catch {
          return null
        }
      })(),
      Kd = [...Rd.cb, "LeftStick", "RightStick"],
      hd = new Map,
      vd = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      Qd = (new Set(Object.values(vd)), {
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
      td = (dd, Od) => {
        var md, Wd;
        return null !== (md = null === (Wd = Qd[vd[dd]]) || void 0 === Wd ? void 0 : Wd[Od]) && void 0 !== md ? md : 1
      },
      od = (dd, Od) => {
        const md = `./${vd[dd]}/${Od}.svg`;
        let Wd = hd.get(md);
        return void 0 === Wd && (Wd = Xd ? Xd(md) : "", hd.set(md, Wd)), Wd
      },
      Nd = new Set,
      qd = [],
      Hd = dd => {
        if (!Nd.has(dd)) {
          Nd.add(dd);
          for (const Od of Kd) {
            const md = od(dd, Od);
            if (md) {
              const dd = new Image;
              dd.crossOrigin = "anonymous", dd.src = md, qd.push(dd)
            }
          }
        }
      },
      yd = "controllerGlyphFamily";
    let bd = null;
    const Td = dd => {
        dd !== bd && (bd = dd, Wd.k.setItem(yd, dd), Hd(dd))
      },
      pd = () => {
        const dd = Wd.k.getItem(yd);
        (0, Fd.g)(dd) && dd !== bd && (bd = dd, Hd(dd))
      }
  },
  9989: (dd, Od, md) => {
    md.d(Od, {
      c: () => Pd,
      f: () => zd
    });
    var Wd = md(66),
      Fd = md(32),
      Rd = md(1566),
      Xd = md(9305),
      Kd = md(9285),
      hd = md(9331),
      vd = md(9311);
    const Qd = {
        x: 0,
        y: 0,
        z: 0
      },
      td = Math.PI / 180,
      od = dd => Math.hypot(dd.x, dd.y, dd.z),
      Nd = (dd, Od) => ({
        x: dd.x * Od,
        y: dd.y * Od,
        z: dd.z * Od
      }),
      qd = (dd, Od) => ({
        x: dd.x + Od.x,
        y: dd.y + Od.y,
        z: dd.z + Od.z
      }),
      Hd = (dd, Od) => ({
        x: dd.x - Od.x,
        y: dd.y - Od.y,
        z: dd.z - Od.z
      }),
      yd = dd => {
        const Od = od(dd);
        return 0 === Od ? Qd : Nd(dd, 1 / Od)
      },
      bd = dd => ({
        min: {
          ...dd
        },
        max: {
          ...dd
        }
      }),
      Td = (dd, Od) => ({
        min: {
          x: Math.min(dd.min.x, Od.x),
          y: Math.min(dd.min.y, Od.y),
          z: Math.min(dd.min.z, Od.z)
        },
        max: {
          x: Math.max(dd.max.x, Od.x),
          y: Math.max(dd.max.y, Od.y),
          z: Math.max(dd.max.z, Od.z)
        }
      }),
      pd = (dd, Od) => dd.max.x - dd.min.x <= Od && dd.max.y - dd.min.y <= Od && dd.max.z - dd.min.z <= Od;
    class Yd {
      constructor() {
        this.bias = Qd, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Qd, this.windowSec = 0
      }
      update(dd) {
        const Od = this.gyroRange ? Td(this.gyroRange, dd.gyro) : bd(dd.gyro),
          md = dd.accel ? this.accelRange ? Td(this.accelRange, dd.accel) : bd(dd.accel) : null;
        if (!pd(Od, 1) || md && !pd(md, .01)) return void this.restartWindow(dd);
        if (this.gyroRange = Od, this.accelRange = md, this.sum = qd(this.sum, Nd(dd.gyro, dd.dtSec)), this.windowSec += dd.dtSec, this.windowSec < 1) return;
        const Wd = Nd(this.sum, 1 / this.windowSec);
        if (od(Wd) > 5) return;
        const Fd = Hd(Wd, this.bias);
        let Rd = 0;
        !this.calibrated || this.windowSec >= 3 ? Rd = 1 : od(Fd) <= 1 && (Rd = Math.min(1, dd.dtSec / 1)), this.bias = qd(this.bias, Nd(Fd, Rd)), this.calibrated = this.calibrated || Rd > 0
      }
      correct(dd) {
        return Hd(dd, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = Qd, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Qd, this.windowSec = 0
      }
      restartWindow(dd) {
        this.gyroRange = bd(dd.gyro), this.accelRange = dd.accel ? bd(dd.accel) : null, this.sum = Qd, this.windowSec = 0
      }
    }
    class gd {
      constructor() {
        this.down = null
      }
      update(dd, Od, md) {
        const Wd = yd(Nd(Od, -1));
        if (!this.down) return this.down = Wd, Wd;
        const Fd = Nd(dd, td * md),
          Rd = this.down,
          Xd = {
            x: Rd.x - (Fd.y * Rd.z - Fd.z * Rd.y),
            y: Rd.y - (Fd.z * Rd.x - Fd.x * Rd.z),
            z: Rd.z - (Fd.x * Rd.y - Fd.y * Rd.x)
          },
          Kd = 0 === od(Wd) ? 0 : Math.min(1, md / .25);
        var hd, vd;
        return this.down = yd((vd = Kd, qd(hd = Xd, Nd(Hd(Wd, hd), vd)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class wd {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(dd, Od, md) {
        const Wd = Math.hypot(dd, Od),
          Fd = Math.max(0, Math.min(1, (Wd - 2) / 2)),
          Rd = {
            yaw: dd * (1 - Fd),
            pitch: Od * (1 - Fd),
            dtSec: md
          };
        for (this.entries.push(Rd), this.windowSec += md; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let Xd = 0,
          Kd = 0;
        for (const vd of this.entries) Xd += vd.yaw * vd.dtSec, Kd += vd.pitch * vd.dtSec;
        const hd = this.windowSec > 0 ? {
          yaw: Xd / this.windowSec,
          pitch: Kd / this.windowSec
        } : {
          yaw: Rd.yaw,
          pitch: Rd.pitch
        };
        return {
          yaw: dd * Fd + hd.yaw,
          pitch: Od * Fd + hd.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class Ed {
      constructor() {
        this.calibrator = new Yd, this.gravity = new gd, this.smoother = new wd
      }
      process(dd, Od, md) {
        const Wd = Math.max(0, Math.min(.05, Od));
        this.calibrator.update({
          ...dd,
          dtSec: Wd
        });
        const Fd = this.calibrator.correct(dd.gyro);
        let Rd = Fd.y;
        "player" === md && dd.accel && (Rd = ((dd, Od) => {
          const md = dd.y * Od.y + dd.z * Od.z;
          return -Math.sign(md) * Math.min(1.41 * Math.abs(md), Math.hypot(dd.y, dd.z))
        })(Fd, this.gravity.update(Fd, dd.accel, Wd)));
        const Xd = this.smoother.apply(Rd, Fd.x, Wd),
          Kd = ((dd, Od) => {
            const md = Math.hypot(dd, Od);
            if (md >= 1) return {
              yaw: dd,
              pitch: Od
            };
            const Wd = md / 1;
            return {
              yaw: dd * Wd,
              pitch: Od * Wd
            }
          })(Xd.yaw, Xd.pitch);
        return {
          yawDeg: Kd.yaw * Wd,
          pitchDeg: Kd.pitch * Wd
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
    const Jd = (dd, Od) => {
      var md, Wd, Fd;
      const Rd = Od * td,
        Xd = null !== (md = dd.beta) && void 0 !== md ? md : 0,
        Kd = null !== (Wd = dd.gamma) && void 0 !== Wd ? Wd : 0;
      return {
        x: Xd * Math.cos(Rd) - Kd * Math.sin(Rd),
        y: Xd * Math.sin(Rd) + Kd * Math.cos(Rd),
        z: null !== (Fd = dd.alpha) && void 0 !== Fd ? Fd : 0
      }
    };
    var Ud = md(9992);
    class xd {
      constructor(dd, Od, md) {
        this.hid = dd, this.sink = Od, this.onControllersChanged = md, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = dd => {
          this.openController(dd.device).catch((dd => {
            console.warn("Could not open motion controller", dd)
          }))
        }, this.onDisconnect = dd => {
          this.opening.has(dd.device) && this.disconnectedWhileOpening.add(dd.device);
          const Od = this.controllers.get(dd.device);
          Od && (this.forget(Od), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const dd = await this.hid.getDevices();
        for (const Od of dd) await this.openController(Od).catch((dd => {
          console.warn("Could not open motion controller", dd)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const dd of [...this.controllers.values()]) this.forget(dd);
        this.onControllersChanged()
      }
      async request() {
        const dd = await this.hid.requestDevice({
          filters: Ud.m
        });
        let Od = 0;
        for (const md of dd) await this.openController(md).catch((dd => {
          console.warn("Could not open motion controller", dd), Od++
        }));
        return Od
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((dd => null !== (0, Ud.h)(dd.vendorId, dd.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((dd => dd.kind))
      }
      forget(dd) {
        dd.device.removeEventListener("inputreport", dd.onReport), this.controllers.get(dd.device) === dd && this.controllers.delete(dd.device)
      }
      async openController(dd) {
        const Od = (0, Ud.h)(dd.vendorId, dd.productId);
        if (!Od || !this.running || this.controllers.has(dd) || this.opening.has(dd)) return;
        this.opening.add(dd);
        let md = !1;
        try {
          dd.opened || await dd.open()
        } finally {
          this.opening.delete(dd), md = this.disconnectedWhileOpening.delete(dd)
        }
        if (md) return void dd.close().catch((dd => {
          console.debug("Could not close an unplugged motion controller", dd)
        }));
        if (!this.running) return;
        const Wd = {
          device: dd,
          kind: Od,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: dd => {
            this.onReport(Wd, dd)
          }
        };
        this.controllers.set(dd, Wd), dd.addEventListener("inputreport", Wd.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(Wd)
        } catch (Fd) {
          console.warn(`Could not turn on motion for ${Od}`, Fd), this.controllers.get(dd) === Wd && (this.forget(Wd), this.onControllersChanged())
        }
      }
      async enableMotion(dd) {
        let {
          device: Od,
          kind: md
        } = dd;
        if ((0, Ud.l)(md))
          for (const Wd of Ud.B[md]) await Od.receiveFeatureReport(Wd).catch((dd => {
            console.debug(`Motion controller feature report ${Wd} unavailable`, dd)
          }));
        else
          for (let Wd = 0; Wd < 2; Wd++)
            for (const {
                subcommand: dd,
                args: md
              }
              of Ud.C) await Od.sendReport(Ud.G, (0, Ud.e)(this.switchPacketCounter++, dd, md)), await new Promise((dd => {
              setTimeout(dd, 60)
            }))
      }
      onReport(dd, Od) {
        const md = (0, Ud.u)(dd.kind, Od.reportId, Od.data, dd.device.productId);
        if (!md) return;
        const Wd = null === dd.lastEventMs ? 0 : (Od.timeStamp - dd.lastEventMs) / 1e3;
        dd.lastEventMs = Od.timeStamp;
        let Fd = md.dtSec;
        if (null !== Fd && Wd > 0 && (Fd = Math.max(.001, Math.min(.017, Wd / md.readings.length))), null === Fd && null !== md.sensorClock && (0, Ud.l)(dd.kind)) {
          const Od = (0, Ud.y)(dd.kind, dd.lastClock, md.sensorClock);
          dd.lastClock = md.sensorClock, Fd = 0 === Od ? null : Od
        }
        if (dd.lastReadingMs = Od.timeStamp, this.isPreferred(dd, Od.timeStamp))
          for (const Xd of md.readings) {
            var Rd;
            this.sink(Xd, null !== (Rd = Fd) && void 0 !== Rd ? Rd : Wd, `hid${dd.openedOrder}`)
          }
      }
      isPreferred(dd, Od) {
        const md = dd => 1e6 * Ud.r[dd.kind] + dd.openedOrder;
        for (const Wd of this.controllers.values())
          if (Wd !== dd && Od - Wd.lastReadingMs < 500 && md(Wd) < md(dd)) return !1;
        return !0
      }
    }
    var Bd = md(107);
    const Sd = () => DeviceMotionEvent,
      sd = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, Bd.isMobile)(),
      ud = () => {
        var dd;
        const Od = null === (dd = window.screen.orientation) || void 0 === dd ? void 0 : dd.angle;
        return "number" === typeof Od ? Od : "number" === typeof window.orientation ? window.orientation : 0
      };
    class Vd {
      constructor(dd, Od) {
        this.sink = dd, this.onStateChanged = Od, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((dd => {
            console.warn("Could not enable the motion sensor", dd)
          }))
        }, this.onMotion = dd => {
          const Od = dd.rotationRate;
          if (!Od || null === Od.alpha && null === Od.beta && null === Od.gamma) return;
          const md = null === this.lastEventMs ? 0 : (dd.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = dd.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: Jd(Od, ud()),
            accel: null
          }, md, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof Sd().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const dd = Sd().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof dd) return void this.listen();
        let Od;
        this.disarmGestureRequest();
        try {
          Od = await dd.call(DeviceMotionEvent)
        } catch (md) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), md
        }
        this.wanted && ("granted" === Od ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(dd) {
        this.state !== dd && (this.state = dd, this.onStateChanged())
      }
    }
    const Ad = "controllerGyroStatusChanged",
      rd = {
        mV: 0,
        RV: 0
      },
      Gd = dd => {
        var Od, md;
        return "undefined" === typeof document || (null === (Od = null === (md = document.featurePolicy) || void 0 === md ? void 0 : md.allowsFeature(dd)) || void 0 === Od || Od)
      };
    class nd {
      constructor() {
        this.processor = new Ed, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = dd => {
          const Od = dd.gyroAiming && Kd.g.hasConnectedPad();
          var md, Wd;
          Od !== this.phoneRunning && (this.phoneRunning = Od, Od ? null === (md = this.phone) || void 0 === md || md.start() : null === (Wd = this.phone) || void 0 === Wd || Wd.stop());
          if (dd.gyroAiming !== this.running) {
            var Fd, Rd;
            if (this.running = dd.gyroAiming, this.running) null === (Fd = this.hid) || void 0 === Fd || Fd.start().catch((dd => {
              console.warn("Could not open motion controllers", dd)
            }));
            else null === (Rd = this.hid) || void 0 === Rd || Rd.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          Fd.j.lQ(Ad, this.getStatus())
        };
        const dd = (() => {
            var dd;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (dd = navigator.hid) && void 0 !== dd ? dd : null
          })(),
          Od = Gd("hid");
        this.hidBlocked = null !== dd && !Od, this.hid = dd && Od ? new xd(dd, ((dd, Od, md) => {
          this.lastHidReadingMs = performance.now(), this.feed(dd, Od, "player", md)
        }), this.publishStatus) : null;
        const md = Gd("accelerometer") && Gd("gyroscope");
        this.phoneBlocked = sd() && !md, this.phone = sd() && md ? new Vd(((dd, Od, md) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(dd, Od, "local", md)
        }), this.publishStatus) : null, Fd.j.subscribe(vd.e, this.syncWithSettings), Kd.g.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, vd.f)()), this.publishStatus()
        })), this.syncWithSettings((0, vd.f)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var dd, Od, md, Wd;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (dd = null === (Od = this.hid) || void 0 === Od ? void 0 : Od.getConnectedKinds()) && void 0 !== dd ? dd : [],
          phoneMotion: null !== (md = null === (Wd = this.phone) || void 0 === Wd ? void 0 : Wd.getState()) && void 0 !== md ? md : "off",
          padConnected: Kd.g.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var dd;
        await (null === (dd = this.phone) || void 0 === dd ? void 0 : dd.requestPermission())
      }
      drainLookDelta() {
        const dd = performance.now();
        dd - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = dd;
        const Od = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const md = (0, vd.f)();
        return md.gyroAiming && (dd => {
          let {
            activation: Od,
            isHeld: md,
            useButton: Wd,
            gyroButton: Fd
          } = dd;
          return "always" === Od || md("aiming" === Od ? Wd : Fd)
        })({
          activation: md.gyroActivation,
          isHeld: dd => hd.b.isButtonHeld(dd),
          useButton: (0, Xd.h)("use"),
          gyroButton: md.gyroButton
        }) ? ((dd, Od) => ({
          mV: -dd.yawDeg * Od * td,
          RV: -dd.pitchDeg * Od * td
        }))(Od, md.gyroSensitivity) : rd
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(dd, Od) {
        this.feed(dd, Od, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(dd, Od, md, Wd) {
        this.source !== Wd && (this.processor.reset(), this.source = Wd);
        const Fd = this.processor.process(dd, Od, md);
        this.pendingYawDeg += Fd.yawDeg, this.pendingPitchDeg += Fd.pitchDeg
      }
    }
    let Ld = null;
    const Pd = () => (Ld || (Ld = new nd), Ld),
      zd = () => {
        const [dd, Od] = (0, Wd.useState)((() => Pd().getStatus()));
        return (0, Rd.f)(Ad, Od), (0, Wd.useEffect)((() => {
          Od(Pd().getStatus())
        }), []), dd
      }
  },
  9992: (dd, Od, md) => {
    md.d(Od, {
      B: () => Ed,
      C: () => wd,
      G: () => pd,
      e: () => gd,
      h: () => hd,
      l: () => Wd,
      m: () => Kd,
      q: () => vd,
      r: () => Qd,
      u: () => Td,
      y: () => yd
    });
    const Wd = dd => "dualShock4" === dd || "dualSense" === dd,
      Fd = 1356,
      Rd = 1406,
      Xd = [{
        vendorId: Fd,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: Fd,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: Fd,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: Fd,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: Fd,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: Rd,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: Rd,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: Rd,
        productId: 8199,
        kind: "joyConRight"
      }],
      Kd = Xd.map((dd => {
        let {
          vendorId: Od,
          productId: md
        } = dd;
        return {
          vendorId: Od,
          productId: md
        }
      })),
      hd = (dd, Od) => {
        var md, Wd;
        return null !== (md = null === (Wd = Xd.find((md => md.vendorId === dd && md.productId === Od))) || void 0 === Wd ? void 0 : Wd.kind) && void 0 !== md ? md : null
      },
      vd = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      Qd = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      td = 2e3 / 32767,
      od = 1 / 8192,
      Nd = 936 / 13371,
      qd = (dd, Od, md) => ({
        x: dd.getInt16(Od, !0) * md,
        y: dd.getInt16(Od + 2, !0) * md,
        z: dd.getInt16(Od + 4, !0) * md
      }),
      Hd = dd => 0 === dd.x && 0 === dd.y && 0 === dd.z,
      yd = (dd, Od, md) => null === Od ? null : "dualShock4" === dd ? 16 * (md - Od & 65535) / 3 / 1e6 : (md - Od >>> 0) / 3 / 1e6,
      bd = (dd, Od) => "joyConRight" === Od ? {
        x: dd.y,
        y: -dd.z,
        z: -dd.x
      } : {
        x: -dd.y,
        y: dd.z,
        z: -dd.x
      },
      Td = (dd, Od, md, Fd) => Wd(dd) ? ((dd, Od, md, Wd) => {
        const Fd = ((dd, Od, md) => "dualShock4" === dd ? 1 === Od && md >= 63 ? 0 : 17 === Od && md >= 65 ? 2 : null : 1 === Od && md >= 62 ? 0 : 49 === Od && md >= 63 ? 1 : null)(dd, Od, md.byteLength);
        if (null === Fd) return null;
        if (2976 === Wd && 1 === Od && 0 !== (4 & md.getUint8(30))) return null;
        const Rd = Fd + ("dualShock4" === dd ? 12 : 15),
          Xd = qd(md, Rd, td),
          Kd = qd(md, Rd + 6, od);
        return Hd(Xd) && Hd(Kd) ? null : {
          readings: [{
            gyro: Xd,
            accel: Kd
          }],
          dtSec: null,
          sensorClock: "dualShock4" === dd ? md.getUint16(Fd + 9, !0) : md.getUint32(Fd + 27, !0)
        }
      })(dd, Od, md, Fd) : ((dd, Od, md) => {
        if (48 !== Od && 49 !== Od || md.byteLength < 48) return null;
        const Wd = [];
        for (let Fd = 0; Fd < 3; Fd++) {
          const Od = qd(md, 12 + 12 * Fd, 244e-6),
            Rd = qd(md, 18 + 12 * Fd, Nd);
          if (Hd(Rd) && Hd(Od)) return null;
          Wd.push({
            gyro: bd(Rd, dd),
            accel: bd(Od, dd)
          })
        }
        return {
          readings: Wd,
          dtSec: .005,
          sensorClock: null
        }
      })(dd, Od, md),
      pd = 1,
      Yd = [0, 1, 64, 64, 0, 1, 64, 64],
      gd = (dd, Od, md) => new Uint8Array([15 & dd, ...Yd, Od, ...md]),
      wd = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      Ed = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  9333: (dd, Od, md) => {
    md.d(Od, {
      c: () => nd,
      d: () => ed,
      g: () => wd,
      h: () => Nd.m,
      l: () => zd,
      m: () => Pd,
      p: () => Ed,
      t: () => cd,
      v: () => Nd.w,
      x: () => Nd.C,
      y: () => Id,
      C: () => Nd.K,
      D: () => Vd
    });
    var Wd = md(66),
      Fd = md(29),
      Rd = md(32),
      Xd = md(1566),
      Kd = md(1349),
      hd = md(9311),
      vd = md(9341),
      Qd = md(9296),
      td = md(9285),
      od = md(9349),
      Nd = md(1498),
      qd = md(9287),
      Hd = md(9788),
      yd = md(5019),
      bd = md(127);
    class Td {
      constructor(dd) {
        this.deps = dd, this.pads = new Map
      }
      observe(dd, Od, md) {
        if (!this.deps.touchOnly) return;
        const Wd = this.pads.get(Od.id);
        "proven" !== Wd && md ? (this.pads.set(Od.id, "proven"), void 0 !== Wd && this.deps.onReleased(Od, dd, dd.timestampMs - Wd)) : void 0 === Wd && (this.pads.set(Od.id, dd.timestampMs), this.deps.onHeld(Od, dd)), this.deps.setMayHide("proven" === this.pads.get(Od.id))
      }
    }
    const pd = dd => dd.values.flatMap(((dd, Od) => dd >= qd.U ? [String(Od)] : [])).join(",") || "none",
      Yd = (dd, Od, Wd, Fd, Rd) => {
        const Xd = (0, Nd.e)(),
          Kd = document.visibilityState,
          hd = document.hasFocus(),
          vd = "jK" === dd ? "touch HUD pad held" : "touch HUD pad released";
        Promise.all([Promise.resolve().then((() => md(3986))), Promise.resolve().then((() => md(1368))), Promise.resolve().then((() => md(151)))]).then((md => {
          let [{
            logControllerHudHoldToGtag: Qd
          }, {
            logClientLineFromEveryPage: td
          }, {
            siteUsed: od
          }] = md;
          Qd(dd, Od.family, null === Rd ? void 0 : Math.round(Rd / 1e3)), td(vd, gd(Od, Wd, Fd, Rd, Xd, Kd, hd, od))
        }), (() => {}))
      },
      gd = (dd, Od, md, Wd, Fd, Rd, Xd, Kd) => {
        var hd;
        const vd = {
          pad_id: dd.id.slice(0, 120),
          pad_family: dd.family,
          pad_mapping: null !== (hd = null === md || void 0 === md ? void 0 : md.mapping) && void 0 !== hd ? hd : "unread",
          pad_axes: md ? String(md.axes.length) : "unread",
          pad_buttons: md ? String(md.buttons.length) : "unread",
          pressed: pd(Od),
          ms_since_touch: null === Fd ? "none" : String(Math.round(Od.timestampMs - Fd)),
          visibility: Rd,
          focused: String(Xd),
          site: Kd
        };
        return null !== Wd && (vd.held_ms = String(Math.round(Wd))), vd
      };
    const wd = dd => !dd.repeat && !(0, Hd.e)(dd.key),
      Ed = "PadHidesCursor";
    let Jd = !1;
    const Ud = dd => {
        dd !== Jd && (Jd = dd, document.documentElement.classList.toggle(Ed, dd))
      },
      xd = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(dd) {
          let Od = !1,
            md = !1;
          dd.values.forEach(((dd, Wd) => {
            const Fd = dd >= (this.buttonsDown[Wd] ? qd.W : qd.U);
            Fd && !this.buttonsDown[Wd] && (Od = !0, md = !0), this.buttonsDown[Wd] = Fd
          }));
          return [dd.leftStick, dd.rightStick].forEach(((dd, Wd) => {
            const Fd = this.stickAnchors[Wd];
            Math.hypot(dd.x, dd.y) < (Fd ? qd.W : .3) ? this.stickAnchors[Wd] = null : (!Fd || Math.hypot(dd.x - Fd.x, dd.y - Fd.y) >= .3) && (this.stickAnchors[Wd] = {
              x: dd.x,
              y: dd.y
            }, Od = !0, md ||= !Fd)
          })), Od && (this.lastActivityMs = dd.timestampMs), this.onlyMovedOn = Od && !md, Od
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(dd) {
          return !(dd - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((dd => dd)) || this.stickAnchors.some((dd => null !== dd)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((dd => null !== dd))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      },
      Bd = (Sd = () => td.g.getActiveGamepad(), new Td({
        touchOnly: "touchOnly" === (0, bd.e)(),
        setMayHide: Nd.y,
        onHeld: (dd, Od) => {
          Yd("jK", dd, Od, Sd(), null)
        },
        onReleased: (dd, Od, md) => {
          Yd("released", dd, Od, Sd(), md)
        }
      }));
    var Sd;
    let sd = null,
      ud = !1;
    const Vd = () => ud;
    let Ad = null,
      rd = !1,
      Gd = null;
    const nd = () => Gd;
    let Ld = !1;
    const Pd = (dd, Od) => {
        if (!xd.observe(dd)) return !1;
        if (Bd.observe(dd, Od, xd.isStickOffRest()), Ld && xd.wasOnlyMoveOn() && !(0, Nd.m)()) return !1;
        Ld = !1, ud = !1;
        const md = !(0, Nd.m)();
        return md && (sd = dd, Gd = !Jd && rd && Ad ? {
          ...Ad
        } : null), rd = !1, (0, Nd.w)("gamepad"), Ud(!0), (0, od.n)((0, hd.j)()), md
      },
      zd = dd => !(0, Nd.m)() || dd === sd,
      cd = () => {
        xd.reset()
      },
      jd = () => {
        const dd = Fd.e.get("activeInputDevice"),
          Od = "gamepad" === dd ? td.g.getActivePad() : null;
        return {
          device: dd,
          inGame: (0, Kd.y)(),
          padMovesMouse: null !== Od && (0, Qd.e)(Od.id)
        }
      },
      Dd = dd => {
        document.pointerLockElement ? Ad = null : (Ad ??= {
          x: 0,
          y: 0
        }, Ad.x = dd.clientX, Ad.y = dd.clientY)
      },
      ed = () => {
        const dd = new yd.e,
          Od = Od => {
            dd.reset(), Ld = !1, (0, Nd.w)(Od)
          },
          md = dd => {
            if (dd.isTrusted) {
              if (dd instanceof KeyboardEvent) {
                if ((0, Nd.t)(dd), !wd(dd)) return;
                ud = !0
              }
              if (dd instanceof PointerEvent && "touch" === dd.pointerType) return Ad = null, void Od("touch");
              dd instanceof PointerEvent && (Dd(dd), rd = !0), ("pointerdown" !== dd.type || (dd => {
                let {
                  device: Od,
                  inGame: md,
                  padMovesMouse: Wd
                } = dd;
                return !("gamepad" === Od && Wd && md)
              })(jd())) && Od("keyboardMouse")
            }
          },
          Wd = dd => {
            dd.isTrusted && (Ad = null, Od("touch"))
          },
          Xd = dd => {
            dd.isTrusted && "touch" !== dd.pointerType && !dd.relatedTarget && (Ad = null)
          },
          Kd = md => {
            if (!md.isTrusted || "touch" === md.pointerType) return;
            Dd(md);
            const Wd = md.movementX || 0,
              Rd = md.movementY || 0;
            if (0 === Wd && 0 === Rd) return;
            if (rd = !0, Ud(!1), "keyboardMouse" === Fd.e.get("activeInputDevice")) return;
            const Xd = xd.isHolding(md.timeStamp),
              Kd = jd(),
              hd = (dd => {
                let {
                  device: Od,
                  inGame: md,
                  padMovesMouse: Wd,
                  padHolding: Fd
                } = dd;
                return ("gamepad" !== Od || !Wd) && "keyboardMouse" !== Od && (md || !Fd)
              })({
                ...Kd,
                inGame: Kd.inGame && (0, vd.g)(),
                padHolding: Xd
              });
            hd && dd.add(Wd, Rd, md.timeStamp) && (Od("keyboardMouse"), Ld = xd.isStickOffRest())
          },
          hd = dd => {
            Ud("gamepad" === dd)
          },
          Qd = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", md, Qd), window.addEventListener("pointerdown", md, Qd), window.addEventListener("wheel", md, Qd), window.addEventListener("touchstart", Wd, Qd), window.addEventListener("pointermove", Kd, Qd), window.addEventListener("pointerout", Xd, Qd);
        const td = Rd.j.subscribe("appManagerUpdated|activeInputDevice", hd);
        return hd(Fd.e.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", md, Qd), window.removeEventListener("pointerdown", md, Qd), window.removeEventListener("wheel", md, Qd), window.removeEventListener("touchstart", Wd, Qd), window.removeEventListener("pointermove", Kd, Qd), window.removeEventListener("pointerout", Xd, Qd), Ad = null, Rd.j.unsubscribe(td), Ud(!1)
        }
      },
      Id = () => {
        const [dd, Od] = (0, Wd.useState)(hd.j);
        return (0, Xd.f)(hd.c, (() => {
          Od((0, hd.j)())
        })), (0, Xd.f)(td.c, (() => {
          Od((0, hd.j)())
        })), dd
      }
  },
  9313: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd,
      g: () => Fd
    });
    const Wd = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      Fd = dd => Wd.includes(dd)
  },
  9825: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd,
      d: () => Rd,
      h: () => hd,
      l: () => Kd
    });
    var Wd = md(1566),
      Fd = md(1518);
    const Rd = "controllerInventoryCursorChanged",
      Xd = {
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
      Kd = () => {
        var dd, Od;
        return (0, Wd.i)(Rd, null !== (dd = null === (Od = (0, Fd.h)()) || void 0 === Od ? void 0 : Od.getInventoryCursorState()) && void 0 !== dd ? dd : Xd)
      },
      hd = () => {
        var dd, Od;
        return null !== (dd = null === (Od = (0, Fd.h)()) || void 0 === Od ? void 0 : Od.isPadSteppingSlots()) && void 0 !== dd && dd
      }
  },
  9819: (dd, Od, md) => {
    md.d(Od, {
      d: () => od,
      g: () => Kd,
      i: () => hd,
      k: () => Xd,
      m: () => Rd,
      q: () => Qd,
      s: () => td
    });
    let Wd = null;
    const Fd = new Set,
      Rd = dd => (Wd = dd, () => {
        if (Wd === dd) {
          Wd = null;
          for (const dd of Fd) dd()
        }
      }),
      Xd = dd => (Fd.add(dd), () => {
        Fd.delete(dd)
      }),
      Kd = () => Wd,
      hd = () => null !== Wd;
    let vd = null;
    const Qd = dd => {
        vd = dd
      },
      td = () => {
        const dd = vd;
        return vd = null, dd
      },
      od = (dd, Od) => {
        var md, Wd;
        return null !== (md = null !== (Wd = dd.find((dd => dd.element === Od))) && void 0 !== Wd ? Wd : dd.find((dd => dd.element.contains(Od)))) && void 0 !== md ? md : null
      }
  },
  9828: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd,
      f: () => Xd
    });
    var Wd = md(66);
    const Fd = new WeakMap,
      Rd = dd => {
        var Od, md;
        return null !== (Od = null === (md = Fd.get(dd)) || void 0 === md ? void 0 : md.current) && void 0 !== Od ? Od : null
      },
      Xd = (dd, Od) => {
        const md = (0, Wd.useRef)(Od);
        md.current = Od;
        const Rd = (0, Wd.useRef)(null);
        (0, Wd.useEffect)((() => {
          const Od = dd.current,
            Wd = Rd.current;
          Od !== Wd && (Wd && Fd.get(Wd) === md && Fd.delete(Wd), Rd.current = Od, Od && Fd.set(Od, md))
        })), (0, Wd.useEffect)((() => () => {
          const dd = Rd.current;
          dd && Fd.get(dd) === md && Fd.delete(dd), Rd.current = null
        }), [])
      }
  },
  9965: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd,
      e: () => vd,
      i: () => td,
      m: () => Qd,
      q: () => hd,
      r: () => Nd
    });
    var Wd = md(32),
      Fd = md(2152),
      Rd = md(1518),
      Xd = md(1498);
    const Kd = dd => {
        var Od, md;
        return (0, Xd.m)() && null !== (Od = null === (md = (0, Rd.h)()) || void 0 === md ? void 0 : md.getGlyphForNoaAction(dd)) && void 0 !== Od ? Od : null
      },
      hd = "controllerGlyph:",
      vd = dd => {
        var Od, md;
        return null !== (Od = null === (md = (0, Rd.h)()) || void 0 === md ? void 0 : md.getPadGlyphIconName(dd)) && void 0 !== Od ? Od : `${hd}xbox/${dd}`
      },
      Qd = dd => dd.startsWith(hd),
      td = dd => {
        var Od, md;
        return Qd(dd) && null !== (Od = null === (md = (0, Rd.h)()) || void 0 === md ? void 0 : md.getPadGlyphIconUrl(dd)) && void 0 !== Od ? Od : null
      },
      od = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", Xd.b, Fd.c, Fd.b],
      Nd = dd => {
        const Od = od.map((Od => Wd.j.subscribe(Od, dd)));
        return () => {
          for (const dd of Od) Wd.j.unsubscribe(dd)
        }
      }
  },
  9341: (dd, Od, md) => {
    md.d(Od, {
      e: () => vd,
      g: () => Qd,
      k: () => hd,
      l: () => Kd
    });
    var Wd = md(29),
      Fd = md(1765),
      Rd = md(1893);
    const Xd = new Map,
      Kd = (dd, Od) => (Xd.has(dd) && console.warn(`Gameplay blocker "${dd}" registered twice; the newer one replaces it.`), Xd.set(dd, Od), () => {
        Xd.get(dd) === Od && Xd.delete(dd)
      }),
      hd = () => (0, Rd.c)(document.activeElement),
      vd = function() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [Od, md] of Xd)
          if (!dd.includes(Od) && md()) return Od;
        return null
      },
      Qd = function() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === Wd.e.get("gameState") && (!(0, Fd.m)() && (!hd() && null === vd(dd)))
      }
  },
  9287: (dd, Od, md) => {
    md.d(Od, {
      C: () => pd,
      F: () => sd,
      I: () => Yd,
      L: () => bd,
      O: () => yd,
      Q: () => vd,
      U: () => od,
      W: () => Nd,
      _: () => Fd,
      cb: () => Wd,
      d: () => Vd,
      e: () => Sd,
      eb: () => wd,
      g: () => Qd,
      h: () => hd,
      ib: () => Bd,
      jb: () => ud,
      l: () => Kd,
      mb: () => gd,
      p: () => Jd,
      s: () => Td,
      t: () => Ed,
      w: () => Rd,
      z: () => td
    });
    const Wd = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      Fd = Wd.length,
      Rd = function() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(Fd).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: dd
        }
      },
      Xd = Object.fromEntries(Wd.map(((dd, Od) => [dd, Od]))),
      Kd = dd => Xd[dd],
      hd = function(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const Wd = Math.hypot(dd.x, dd.y);
        if (Wd <= Od) return {
          x: 0,
          y: 0
        };
        const Fd = Math.min(1, (Wd - Od) / Math.max(1e-4, md - Od));
        return {
          x: dd.x / Wd * Fd,
          y: dd.y / Wd * Fd
        }
      },
      vd = ["exponential", "linear", "boost"],
      Qd = (dd, Od) => {
        const md = Math.hypot(dd.x, dd.y);
        if (0 === md) return {
          x: 0,
          y: 0
        };
        const Wd = ((dd, Od) => {
          const md = Math.max(0, Math.min(1, dd));
          return "linear" === Od ? md : md * md
        })(md, Od);
        return {
          x: dd.x / md * Wd,
          y: dd.y / md * Wd
        }
      },
      td = .5,
      od = .3,
      Nd = .2,
      qd = Kd("LT"),
      Hd = Kd("RT"),
      yd = dd => dd === qd || dd === Hd,
      bd = (dd, Od) => {
        const md = Kd(Od);
        return yd(md) ? dd[md] > .35 : dd[md] >= td
      },
      Td = (dd, Od) => dd.map(((dd, md) => yd(md) ? Od[md] ? dd > .35 : dd >= .55 : dd >= td)),
      pd = ["Up", "Down", "Left", "Right"],
      Yd = dd => pd.includes(dd),
      gd = function(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(dd.x, dd.y) < Od ? null : Math.abs(dd.x) > Math.abs(dd.y) ? dd.x > 0 ? "Right" : "Left" : dd.y > 0 ? "Down" : "Up"
      },
      wd = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      Ed = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      Jd = ["default", "slow", "off"],
      Ud = 800,
      xd = 250,
      Bd = (dd, Od) => "off" === Od ? null : "slow" === Od ? {
        initialDelayMs: Math.max(dd.initialDelayMs, Ud),
        intervalMs: Math.max(dd.intervalMs, xd)
      } : dd;
    class Sd {
      constructor(dd) {
        this.readTiming = dd, this.jK = !1, this.timing = null, this.nextFireMs = 0
      }
      update(dd, Od) {
        return dd ? this.jK ? !!(this.timing && Od >= this.nextFireMs) && (this.nextFireMs = Od + this.timing.intervalMs, !0) : (this.jK = !0, this.timing = this.readTiming(), this.nextFireMs = Od + (null !== (md = null === (Wd = this.timing) || void 0 === Wd ? void 0 : Wd.initialDelayMs) && void 0 !== md ? md : 0), !0) : (this.jK = !1, !1);
        var md, Wd
      }
      reset() {
        this.jK = !1
      }
    }
    const sd = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      ud = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class Vd {
      constructor(dd) {
        this.timer = dd, this.direction = null
      }
      update(dd, Od) {
        return dd !== this.direction && (this.timer.reset(), this.direction = dd), this.timer.update(null !== dd, Od) ? dd : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  9835: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd,
      d: () => Rd
    });
    let Wd = -1 / 0;
    const Fd = () => {
        Wd = performance.now()
      },
      Rd = dd => performance.now() - Wd < dd
  },
  9794: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd,
      h: () => Rd
    });
    var Wd = md(9311),
      Fd = md(9287);
    const Rd = dd => (0, Fd.ib)(dd, (0, Wd.f)().buttonRepeat),
      Xd = dd => new Fd.e((() => Rd(dd)))
  },
  9325: (dd, Od, md) => {
    md.d(Od, {
      e: () => hd,
      f: () => Rd,
      g: () => Kd
    });
    var Wd = md(32),
      Fd = md(9311);
    const Rd = (dd, Od) => "OpenShop" === dd ? "shop" === Od : "OpenLobbyLeaderboard" !== dd || "leaderboard" === Od;
    let Xd = !1;
    const Kd = dd => {
        dd !== Xd && (Xd = dd, Wd.j.lQ(Fd.c, (0, Fd.f)()))
      },
      hd = () => ((dd, Od) => "shop" === dd && Od ? "shop" : "leaderboard")((0, Fd.f)().leaderboardButton, Xd)
  },
  9320: (dd, Od, md) => {
    md.d(Od, {
      $: () => Hd,
      A: () => hd,
      C: () => Kd,
      E: () => gd,
      H: () => od,
      L: () => Nd,
      N: () => td,
      Q: () => Yd,
      S: () => vd,
      V: () => bd,
      W: () => xd,
      X: () => pd,
      cb: () => yd,
      e: () => rd,
      fb: () => qd,
      g: () => nd,
      hb: () => Td,
      ib: () => ud,
      j: () => Bd,
      k: () => Xd,
      kb: () => Rd,
      n: () => Ud,
      ob: () => wd,
      p: () => Ed,
      qb: () => Gd,
      s: () => Vd,
      tb: () => Jd,
      v: () => Ad,
      x: () => Qd
    });
    var Wd = md(9309),
      Fd = md(9287);
    const Rd = {
        min: 25,
        max: 500,
        step: 5
      },
      Xd = {
        min: 25,
        max: 100,
        step: 5
      },
      Kd = {
        min: 0,
        max: .4,
        step: .01
      },
      hd = {
        min: 25,
        max: 300,
        step: 5
      },
      vd = {
        min: .5,
        max: 6,
        step: .1
      },
      Qd = (dd, Od) => {
        if (!Number.isFinite(dd)) return Od.min;
        const md = Od.min + Math.round((dd - Od.min) / Od.step) * Od.step,
          Wd = Math.min(Od.max, Math.max(Od.min, md));
        return Math.round(1e3 * Wd) / 1e3
      },
      td = dd => `${Math.round(dd)}%`,
      od = dd => td(100 * dd),
      Nd = dd => `${dd.toFixed(1)}\xd7`,
      qd = [{
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
      Hd = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      yd = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      bd = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      Td = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      pd = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      Yd = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      gd = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      wd = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      Ed = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      Jd = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      Ud = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      xd = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      Bd = {
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
      Sd = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      sd = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      ud = Wd.c.map((dd => {
        let {
          group: Od,
          actions: md
        } = dd;
        const Wd = md.map((dd => ({
          kind: "action",
          action: dd
        })));
        return {
          titleKey: Sd[Od],
          rows: "gameplay" === Od ? [...sd, ...Wd] : Wd
        }
      })),
      Vd = Fd.cb.filter((dd => "Home" !== dd)),
      Ad = 1e4;
    class rd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = dd, this.openButton = Od, this.accepts = md, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(dd, Od) {
        var md;
        this.updateIgnored(dd, Od);
        const Wd = Od - (null !== (md = this.startMs) && void 0 !== md ? md : Od) >= 250;
        for (const Fd of Vd)
          if (Fd !== this.cancelButton && Wd && !this.ignoredUntilMs.has(Fd) && dd.wasPressed(Fd) && this.accepts(Fd)) return {
            kind: "bind",
            button: Fd
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (dd.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = Od
        }
        return null === this.cancelDownAtMs ? null : dd.isHeld(this.cancelButton) && Od - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : dd.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(dd) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (dd - this.cancelDownAtMs) / 700)
      }
      updateIgnored(dd, Od) {
        if (null === this.startMs) {
          this.startMs = Od;
          for (const Od of Vd) dd.isDown(Od) && this.ignoredUntilMs.set(Od, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, Od + 250)
        }
        for (const [md, Wd] of this.ignoredUntilMs) {
          const Fd = dd.isDown(md);
          Wd === 1 / 0 ? Fd || md !== this.openButton ? Fd || this.ignoredUntilMs.delete(md) : this.ignoredUntilMs.set(md, Od + 250) : Od >= Wd ? this.ignoredUntilMs.delete(md) : Fd && this.ignoredUntilMs.set(md, 1 / 0)
        }
      }
    }
    const Gd = 6e3;
    class nd {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(dd, Od) {
        let {
          pressed: md,
          jK: Wd
        } = dd;
        if (md) {
          const dd = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== dd && Od - dd < 1500 ? [...this.pressesAtMs, Od] : [Od], this.pressesAtMs.length >= 3) return 1
        }
        return Wd ? (this.downAtMs ??= Od, Math.min(1, (Od - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  9850: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      d: () => Fd
    });
    let Wd = null;
    const Fd = function(dd) {
        const Od = {
          cycle: dd,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Wd = Od, () => {
          Wd === Od && (Wd = null)
        }
      },
      Rd = () => {
        var dd;
        return null !== (dd = Wd) && void 0 !== dd && dd.canCycle() ? Wd.cycle : null
      }
  },
  5936: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      f: () => Xd
    });
    var Wd = md(66);
    const Fd = new WeakMap,
      Rd = dd => {
        var Od;
        const md = dd.closest("[data-pad-slider]");
        return md && null !== (Od = Fd.get(md)) && void 0 !== Od ? Od : null
      },
      Xd = (dd, Od) => {
        const md = (0, Wd.useRef)(Od);
        md.current = Od, (0, Wd.useEffect)((() => {
          if (dd.current) return ((dd, Od) => (Fd.set(dd, Od), () => {
            Fd.get(dd) === Od && Fd.delete(dd)
          }))(dd.current, {
            adjust: dd => {
              md.current.adjust(dd)
            },
            setFraction: dd => {
              md.current.setFraction(dd)
            },
            endDrag: () => {
              md.current.endDrag()
            }
          })
        }), [dd])
      }
  },
  9953: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd,
      g: () => Xd,
      j: () => Rd,
      m: () => Wd,
      p: () => Kd,
      r: () => vd,
      s: () => Qd
    });
    const Wd = "controllerActionWheelOpen",
      Fd = "controllerActionWheelAim",
      Rd = "controllerActionWheelCommit",
      Xd = "controllerActionWheelClose",
      Kd = "controllerActionWheelPick";
    let hd = !1;
    const vd = () => hd,
      Qd = dd => {
        hd = dd
      }
  },
  9944: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd,
      g: () => Fd
    });
    let Wd = 0;
    const Fd = () => {
        Wd++
      },
      Rd = () => Wd
  },
  9848: (dd, Od, md) => {
    md.d(Od, {
      b: () => hd,
      c: () => Fd,
      g: () => Xd,
      h: () => Rd,
      k: () => Wd,
      m: () => vd
    });
    const Wd = "controllerQuickChatWheelOpen",
      Fd = "controllerQuickChatWheelAim",
      Rd = "controllerQuickChatWheelCommit",
      Xd = "controllerQuickChatWheelClose";
    let Kd = !1;
    const hd = () => Kd,
      vd = dd => {
        Kd = dd
      }
  },
  9861: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      g: () => Fd
    });
    var Wd = md(32);
    const Fd = "localBlockBroken";

    function Rd() {
      return {
        onPlayerChangeBlock(dd, Od, md, Rd, Xd, Kd) {
          "Air" === Kd && Wd.j.lQ(Fd)
        }
      }
    }
  },
  9854: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd
    });
    var Wd = md(1313);

    function Fd(dd, Od) {
      var md, Fd;
      try {
        const md = (0, Wd.d)();
        if ("function" === typeof md) {
          const Wd = new md(dd, Od);
          if (Wd.type === dd) return Wd
        }
      } catch {}
      const Rd = document.createEvent("Event");
      return Rd.initEvent(dd, null !== (md = null === Od || void 0 === Od ? void 0 : Od.bubbles) && void 0 !== md && md, null !== (Fd = null === Od || void 0 === Od ? void 0 : Od.cancelable) && void 0 !== Fd && Fd), Rd
    }
  },
  9907: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd
    });
    var Wd = md(9911),
      Fd = md(701),
      Rd = md(151);

    function Xd(dd) {
      var Od, md;
      if ((0, Fd.O)(dd)) return !0;
      const Xd = null !== (Od = null === (md = Rd.siteUsedData[Rd.siteUsed]) || void 0 === md ? void 0 : md.adConfig.showRewardedAds) && void 0 !== Od && Od;
      for (const Fd in dd) {
        const Od = dd[Fd];
        if (null !== Od && void 0 !== Od && Od.items)
          for (const dd in Od.items)
            if ((0, Wd.f)(Od.items[dd], Xd)) return !1
      }
      return !0
    }
  },
  9958: () => {},
  9351: (dd, Od, md) => {
    var Wd = {
      "./nintendo/A.svg": 9358,
      "./nintendo/B.svg": 9366,
      "./nintendo/Down.svg": 9374,
      "./nintendo/Home.svg": 9379,
      "./nintendo/LB.svg": 9385,
      "./nintendo/LS.svg": 9387,
      "./nintendo/LT.svg": 9393,
      "./nintendo/Left.svg": 9398,
      "./nintendo/LeftStick.svg": 9406,
      "./nintendo/Menu.svg": 9408,
      "./nintendo/RB.svg": 9413,
      "./nintendo/RS.svg": 9417,
      "./nintendo/RT.svg": 9419,
      "./nintendo/Right.svg": 9421,
      "./nintendo/RightStick.svg": 9429,
      "./nintendo/Up.svg": 9437,
      "./nintendo/View.svg": 9439,
      "./nintendo/X.svg": 9444,
      "./nintendo/Y.svg": 9451,
      "./playstation/A.svg": 9458,
      "./playstation/B.svg": 9465,
      "./playstation/Down.svg": 9467,
      "./playstation/Home.svg": 9476,
      "./playstation/LB.svg": 9484,
      "./playstation/LS.svg": 9487,
      "./playstation/LT.svg": 9495,
      "./playstation/Left.svg": 9501,
      "./playstation/LeftStick.svg": 9508,
      "./playstation/Menu.svg": 9513,
      "./playstation/RB.svg": 9518,
      "./playstation/RS.svg": 9521,
      "./playstation/RT.svg": 9526,
      "./playstation/Right.svg": 9532,
      "./playstation/RightStick.svg": 9535,
      "./playstation/Up.svg": 9541,
      "./playstation/View.svg": 9550,
      "./playstation/X.svg": 9555,
      "./playstation/Y.svg": 9562,
      "./steamdeck/A.svg": 9570,
      "./steamdeck/B.svg": 9575,
      "./steamdeck/Down.svg": 9581,
      "./steamdeck/Home.svg": 9587,
      "./steamdeck/LB.svg": 9592,
      "./steamdeck/LS.svg": 9598,
      "./steamdeck/LT.svg": 9602,
      "./steamdeck/Left.svg": 9610,
      "./steamdeck/LeftStick.svg": 9616,
      "./steamdeck/Menu.svg": 9618,
      "./steamdeck/RB.svg": 9626,
      "./steamdeck/RS.svg": 9630,
      "./steamdeck/RT.svg": 9634,
      "./steamdeck/Right.svg": 9639,
      "./steamdeck/RightStick.svg": 9648,
      "./steamdeck/Up.svg": 9651,
      "./steamdeck/View.svg": 9656,
      "./steamdeck/X.svg": 9662,
      "./steamdeck/Y.svg": 9670,
      "./xbox/A.svg": 9672,
      "./xbox/B.svg": 9679,
      "./xbox/Down.svg": 9687,
      "./xbox/Home.svg": 9689,
      "./xbox/LB.svg": 9697,
      "./xbox/LS.svg": 9703,
      "./xbox/LT.svg": 9711,
      "./xbox/Left.svg": 9715,
      "./xbox/LeftStick.svg": 9724,
      "./xbox/Menu.svg": 9726,
      "./xbox/RB.svg": 9730,
      "./xbox/RS.svg": 9737,
      "./xbox/RT.svg": 9741,
      "./xbox/Right.svg": 9749,
      "./xbox/RightStick.svg": 9757,
      "./xbox/Up.svg": 9760,
      "./xbox/View.svg": 9768,
      "./xbox/X.svg": 9777,
      "./xbox/Y.svg": 9779
    };

    function Fd(dd) {
      var Od = Rd(dd);
      return md(Od)
    }

    function Rd(dd) {
      if (!md.o(Wd, dd)) {
        var Od = new Error("Cannot find module '" + dd + "'");
        throw Od.code = "MODULE_NOT_FOUND", Od
      }
      return Wd[dd]
    }
    Fd.keys = function() {
      return Object.keys(Wd)
    }, Fd.resolve = Rd, dd.exports = Fd, Fd.id = 9351
  },
  9358: (dd, Od, md) => {
    dd.exports = md.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  9366: (dd, Od, md) => {
    dd.exports = md.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  9374: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9379: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  9385: (dd, Od, md) => {
    dd.exports = md.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  9387: (dd, Od, md) => {
    dd.exports = md.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9393: (dd, Od, md) => {
    dd.exports = md.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  9398: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9406: (dd, Od, md) => {
    dd.exports = md.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9408: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  9413: (dd, Od, md) => {
    dd.exports = md.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  9417: (dd, Od, md) => {
    dd.exports = md.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9419: (dd, Od, md) => {
    dd.exports = md.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  9421: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9429: (dd, Od, md) => {
    dd.exports = md.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9437: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9439: (dd, Od, md) => {
    dd.exports = md.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  9444: (dd, Od, md) => {
    dd.exports = md.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  9451: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  9458: (dd, Od, md) => {
    dd.exports = md.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  9465: (dd, Od, md) => {
    dd.exports = md.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  9467: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  9476: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  9484: (dd, Od, md) => {
    dd.exports = md.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  9487: (dd, Od, md) => {
    dd.exports = md.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  9495: (dd, Od, md) => {
    dd.exports = md.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  9501: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  9508: (dd, Od, md) => {
    dd.exports = md.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9513: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  9518: (dd, Od, md) => {
    dd.exports = md.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  9521: (dd, Od, md) => {
    dd.exports = md.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  9526: (dd, Od, md) => {
    dd.exports = md.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  9532: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  9535: (dd, Od, md) => {
    dd.exports = md.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9541: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  9550: (dd, Od, md) => {
    dd.exports = md.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  9555: (dd, Od, md) => {
    dd.exports = md.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  9562: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  9570: (dd, Od, md) => {
    dd.exports = md.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  9575: (dd, Od, md) => {
    dd.exports = md.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  9581: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9587: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  9592: (dd, Od, md) => {
    dd.exports = md.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  9598: (dd, Od, md) => {
    dd.exports = md.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9602: (dd, Od, md) => {
    dd.exports = md.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  9610: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9616: (dd, Od, md) => {
    dd.exports = md.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9618: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  9626: (dd, Od, md) => {
    dd.exports = md.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  9630: (dd, Od, md) => {
    dd.exports = md.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9634: (dd, Od, md) => {
    dd.exports = md.p + "static/media/RT.a0523211130959598bed.svg"
  },
  9639: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9648: (dd, Od, md) => {
    dd.exports = md.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9651: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9656: (dd, Od, md) => {
    dd.exports = md.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  9662: (dd, Od, md) => {
    dd.exports = md.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9670: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  9672: (dd, Od, md) => {
    dd.exports = md.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  9679: (dd, Od, md) => {
    dd.exports = md.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  9687: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9689: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  9697: (dd, Od, md) => {
    dd.exports = md.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  9703: (dd, Od, md) => {
    dd.exports = md.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9711: (dd, Od, md) => {
    dd.exports = md.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  9715: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9724: (dd, Od, md) => {
    dd.exports = md.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9726: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  9730: (dd, Od, md) => {
    dd.exports = md.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  9737: (dd, Od, md) => {
    dd.exports = md.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9741: (dd, Od, md) => {
    dd.exports = md.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  9749: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9757: (dd, Od, md) => {
    dd.exports = md.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9760: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9768: (dd, Od, md) => {
    dd.exports = md.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  9777: (dd, Od, md) => {
    dd.exports = md.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9779: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);
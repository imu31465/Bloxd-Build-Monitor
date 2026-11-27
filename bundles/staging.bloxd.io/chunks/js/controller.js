export const id = 34;
export const ids = [34];
export const modules = {
  9901: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Hr,
      f: () => Lr,
      i: () => lr
    });
    var Zr = Qr(72),
      Wr = Qr(5308),
      ar = Qr(1181),
      jr = Qr(1573),
      Ir = Qr(34),
      fr = Qr(4663),
      Er = Qr(3148),
      pr = Qr(1287),
      xr = Qr(3601),
      mr = Qr(2089),
      Nr = Qr(2128),
      Ur = Qr(1251),
      tr = Qr(26),
      hr = Qr(1758),
      zr = Qr(1155),
      Yr = Qr.n(zr),
      nr = Qr(9904),
      er = Qr(9909),
      Kr = Qr(9915),
      yr = Qr(9813),
      Br = Qr(9923),
      Tr = Qr(4293),
      vr = (Qr(9931), Qr(1338));
    let Or = null;

    function Lr() {
      return null !== Or
    }

    function lr() {
      return "pad" === Or
    }

    function Xr() {
      return "inGame" === tr.c.get("gameState") && !(0, hr.l)()
    }

    function Pr(rr) {
      return (0, er.q)(rr, pr.q, er.e, er.g, er.h)
    }
    const Hr = (0, Zr.memo)((function() {
      const {
        t: rr
      } = (0, Ur.E)(), {
        userContext: Sr
      } = (0, ar.c)(), [Qr, tr] = (0, Zr.useState)(null), [zr, Lr] = (0, Zr.useState)(null), lr = (0, Zr.useRef)(null), Hr = (0, Zr.useCallback)((rr => {
        lr.current = rr, Lr(rr)
      }), []), qr = (0, Zr.useRef)(0), Rr = (0, Zr.useRef)(null), gr = (0, Zr.useRef)({
        x: 0,
        y: 0
      }), [Cr, Mr] = (0, Zr.useState)(0), Gr = (0, Zr.useMemo)((() => function(rr) {
        const Sr = [];
        for (let Zr = 0; Zr < pr.q; Zr++) {
          var Qr;
          Sr.push(null !== (Qr = rr[Zr]) && void 0 !== Qr ? Qr : null)
        }
        return Sr
      }((0, xr.i)(Sr.getPlayerCosmetics().emote))), [Sr, Cr]);
      (0, Nr.d)("cosmeticsUpdated", (rr => {
        rr.some((rr => rr.local && "emote" === rr.fW)) && Mr((rr => rr + 1))
      }));
      const kr = (0, Zr.useRef)(!1),
        Ar = (0, Zr.useCallback)((function(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === rr && (0, Kr.c)(), kr.current = Sr, gr.current = {
            x: 0,
            y: 0
          }, Hr(null), tr(rr)
        }), [Hr]),
        Vr = (0, Zr.useCallback)((() => {
          tr(null), Hr(null), gr.current = {
            x: 0,
            y: 0
          }
        }), [Hr]),
        ir = (0, Zr.useCallback)((rr => {
          if (Date.now() < qr.current) return;
          const Sr = (0, Er.h)(rr),
            Qr = !!Sr.holdUntilMove,
            Zr = Qr ? 600 : Math.ceil(1e3 * Sr.animation.animation_length / Er.c) + 200;
          qr.current = Date.now() + Zr, Rr.current = rr, mr.gameBridge.send("playEmote", rr), mr.gameBridge.send("applyTemporaryThirdPerson", Qr ? {} : {
            durationMs: Zr
          })
        }), []);
      (0, jr.c)("requestToggleEmoteWheel", (() => {
        null === Qr ? Xr() && Ar("click") : Vr()
      })), (0, jr.c)("requestEmoteWheelHoldOpen", (() => {
        null === Qr && Xr() && Ar((0, nr.c)() ? "hold" : "click")
      })), (0, jr.c)("requestEmoteWheelPadOpen", (rr => {
        null !== Qr || !Xr() || (0, yr.d)() || (0, Br.p)() || Ar("pad", rr)
      })), (0, jr.c)("requestEmoteRepeatLast", (() => {
        if (null !== Qr || !Xr() || (0, yr.d)() || (0, Br.p)()) return;
        const rr = Rr.current;
        null !== rr && Gr.includes(rr) ? ir(rr) : Ar("pad", !0)
      }));
      const wr = () => {
        const rr = lr.current,
          Sr = null !== rr ? Gr[rr] : null;
        null !== Sr && "pad" === Qr && Date.now() < qr.current || (Vr(), null !== Sr && ir(Sr))
      };
      (0, jr.c)("emoteWheelPadAim", (rr => {
        if ("pad" !== Qr) return;
        const Sr = (0, er.E)(rr, pr.q, lr.current);
        Hr(null !== Sr && null !== Gr[Sr] ? Sr : null)
      })), (0, jr.c)("requestEmoteWheelPadCommit", (rr => {
        "pad" !== Qr || rr && kr.current || wr()
      })), (0, jr.c)("appManagerUpdated|activeInputDevice", (rr => {
        null !== Qr && "pad" === Qr !== ("gamepad" === rr) && Vr()
      })), (0, Zr.useLayoutEffect)((() => (Or = Qr, (0, fr.s)("emoteWheel", "pad" === Qr), Ir.i.Jp(fr.m), () => {
        Or = null, (0, fr.s)("emoteWheel", !1), Ir.i.Jp(fr.m)
      })), [Qr]), (0, jr.c)("requestEmoteWheelHoldRelease", (() => {
        "hold" === Qr && wr()
      })), (0, jr.c)("requestEmoteWheelClose", (() => {
        null !== Qr && Vr()
      })), (0, jr.c)("appManagerUpdated|gameState", (rr => {
        "inGame" !== rr && Vr()
      }));
      const cr = () => {
        (0, hr.l)() && Vr()
      };
      if ((0, jr.c)("appManagerUpdated|openEverythingMenuName", cr), (0, jr.c)("appManagerUpdated|openInGameMenuName", cr), (0, jr.c)("pointerLockUpdate", (rr => {
          rr || "hold" !== Qr || Vr()
        })), (0, Zr.useEffect)((() => {
          if (null === Qr) return;
          const rr = rr => {
            "Escape" === rr.key && (rr.stopImmediatePropagation(), rr.preventDefault(), Vr())
          };
          return document.addEventListener("keydown", rr, !0), () => {
            document.removeEventListener("keydown", rr, !0)
          }
        }), [Qr, Vr]), (0, Wr.b)(!0, "click" === Qr, "EmoteWheelOverlay"), (0, Zr.useEffect)((() => {
          if ("hold" === Qr) return mr.gameBridge.send("holdEmoteWheel", !0), () => {
            mr.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [Qr]), (0, Zr.useEffect)((() => {
          if ("hold" !== Qr) return;
          const rr = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            Sr = er.p * rr,
            Zr = er.m * rr,
            Wr = rr => {
              let Qr = gr.current.x + rr.movementX,
                Wr = gr.current.y + rr.movementY;
              const ar = Math.hypot(Qr, Wr);
              if (ar > Sr) {
                const rr = Sr / ar;
                Qr *= rr, Wr *= rr
              }
              gr.current = {
                x: Qr,
                y: Wr
              }, Hr(function(rr, Sr, Qr, Zr) {
                if (Math.hypot(rr, Sr) < Qr) return null;
                const Wr = (0, er.u)(rr, Sr, pr.q);
                return null === Zr[Wr] ? null : Wr
              }(Qr, Wr, Zr, Gr))
            };
          return document.addEventListener("mousemove", Wr), () => {
            document.removeEventListener("mousemove", Wr)
          }
        }), [Qr, Gr, Hr]), null === Qr) return null;
      const Fr = "hold" === Qr || "pad" === Qr,
        or = null !== zr ? Gr[zr] : null,
        br = null !== or ? (0, Er.h)(or).displayName : rr("emotes:pickEmote");
      return (0, vr.jsx)("div", {
        className: Yr()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === Qr
        }),
        onMouseDown: rr => {
          rr.target === rr.currentTarget && Vr()
        },
        children: (0, vr.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * er.p + "rem",
            height: 2 * er.p + "rem"
          },
          children: [(0, vr.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${er.l} ${er.l}`,
            children: [Gr.map(((Sr, Qr) => {
              const Zr = null !== Sr,
                Wr = Fr && Qr === zr;
              return (0, vr.jsx)("path", {
                d: Pr(Qr),
                className: Yr()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: Wr,
                  EmoteWheelWedgeDisabled: !Zr
                }),
                onClick: rr => {
                  rr.stopPropagation(), null !== Sr && (rr => {
                    Vr(), ir(rr)
                  })(Sr)
                },
                "aria-label": null !== Sr ? (0, Er.h)(Sr).displayName : rr("emotes:emptySlot")
              }, Qr)
            })), (0, vr.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: er.e,
              cy: er.e,
              r: er.h
            }), (0, vr.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: er.e,
              cy: er.e,
              r: er.g
            }), Fr && null !== zr && (0, vr.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: Pr(zr)
            })]
          }), Gr.map(((rr, Sr) => {
            const Qr = null !== rr,
              Zr = Fr && Sr === zr,
              Wr = (0, er.x)(Sr, pr.q),
              ar = er.d * Math.cos(Wr),
              jr = er.d * Math.sin(Wr);
            return (0, vr.jsx)("div", {
              className: Yr()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: Zr,
                EmoteWheelSlotIconDisabled: !Qr
              }),
              style: {
                left: `calc(50% + ${ar}rem)`,
                top: `calc(50% + ${jr}rem)`,
                backgroundImage: Qr ? `url(${(0,Tr.d)("emote",rr)})` : void 0
              },
              "aria-hidden": !0
            }, Sr)
          })), (0, vr.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: br
          })]
        })
      })
    }))
  },
  5951: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ur,
      e: () => er,
      f: () => tr,
      i: () => nr
    });
    var Zr = Qr(72),
      Wr = Qr(5960),
      ar = Qr(5065),
      jr = Qr(1489),
      Ir = Qr(4205),
      fr = Qr(1155),
      Er = Qr.n(fr),
      pr = Qr(1475),
      xr = Qr(1885),
      mr = Qr(5986),
      Nr = Qr(1338);

    function Ur(rr) {
      let {
        label: Sr,
        onClick: Qr,
        checked: Zr,
        circleInfoText: Wr,
        className: Ir,
        disabled: fr,
        note: pr
      } = rr;
      return (0, Nr.jsxs)("div", {
        "aria-disabled": fr || void 0,
        "data-pad-focusable": !0,
        className: Er()("SettingBox CheckboxContainer", {
          [Ir]: Ir,
          SettingBoxDisabled: fr
        }),
        onClick: () => {
          fr || Qr(!Zr)
        },
        children: [(0, Nr.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Nr.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Nr.jsx)(ar.e, {
              className: "SettingsCheckbox",
              checked: Zr,
              disabled: fr,
              onChange: () => {}
            })
          }), (0, Nr.jsxs)("div", {
            className: "CheckboxText",
            children: [Sr, Wr && (0, Nr.jsx)("span", {
              onClick: rr => rr.stopPropagation(),
              children: (0, Nr.jsx)(jr.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Wr
              })
            })]
          })]
        }), pr && (0, Nr.jsx)("div", {
          className: "SettingNote",
          children: pr
        })]
      })
    }

    function tr(rr) {
      let {
        name: Sr,
        onChange: Qr,
        min: Wr,
        max: ar,
        step: Ir,
        initValue: fr,
        circleInfoText: pr,
        format: xr,
        className: mr,
        padStep: Ur,
        disabled: tr = !1,
        selectableMax: hr,
        cappedNote: zr,
        note: nr,
        onChangeComplete: er
      } = rr;
      const [Kr, yr] = (0, Zr.useState)(fr), Br = (0, Zr.useRef)(fr);
      (0, Zr.useEffect)((() => {
        Br.current = fr, yr(fr)
      }), [fr]);
      const Tr = void 0 !== hr && hr < ar,
        vr = Tr ? {
          "--slider-selectable": (hr - Wr) / (ar - Wr)
        } : void 0,
        Or = Tr && zr ? zr : nr;
      return (0, Nr.jsxs)("div", {
        className: Er()("SettingBox SettingsSliderDiv", {
          [mr]: mr,
          SettingBoxDisabled: tr,
          SliderCapped: Tr
        }),
        style: vr,
        children: [(0, Nr.jsxs)("div", {
          className: "SliderText",
          children: [`${Sr}: ${xr?xr(Kr):Kr}`, pr && (0, Nr.jsx)(jr.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: pr
          })]
        }), (0, Nr.jsx)("div", {
          className: "SliderDiv",
          children: (0, Nr.jsx)(Yr, {
            value: Kr,
            min: Wr,
            max: ar,
            step: Ir,
            onChange: rr => {
              if (Tr && rr >= hr && Kr === hr) return;
              const Sr = Tr ? Math.min(rr, hr) : rr;
              Br.current = Sr, yr(Sr), Qr(Sr)
            },
            onChangeComplete: er && (() => {
              er(Br.current)
            }),
            format: xr,
            padStep: Ur,
            disabled: tr
          })
        }), Or && (0, Nr.jsx)("div", {
          className: "SettingNote",
          children: Or
        })]
      })
    }
    const hr = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function zr(rr) {
      var Sr;
      return (null !== (Sr = String(rr).split(".")[1]) && void 0 !== Sr ? Sr : "").length
    }

    function Yr(rr) {
      let {
        value: Sr,
        min: Qr,
        max: ar,
        step: jr,
        onChange: Ir,
        orientation: fr,
        reverse: Er,
        setIsChanging: pr,
        tooltip: xr,
        labels: Ur,
        handleLabel: tr,
        format: Yr,
        onChangeStart: nr,
        onChangeComplete: er,
        padStep: Kr,
        disabled: yr = !1
      } = rr;
      const Br = (0, Zr.useRef)(null),
        Tr = (0, Zr.useRef)(null);
      (0, Zr.useLayoutEffect)((() => {
        var rr, Sr, Qr;
        const Zr = null !== (rr = null === (Sr = Br.current) || void 0 === Sr ? void 0 : Sr.querySelector(".rangeslider")) && void 0 !== rr ? rr : null;
        null === Zr || void 0 === Zr || Zr.setAttribute("data-pad-slider", ""), null === Zr || void 0 === Zr || Zr.setAttribute("data-pad-focusable", ""), null === Zr || void 0 === Zr || null === (Qr = Zr.querySelector(".rangeslider__handle")) || void 0 === Qr || Qr.setAttribute("data-pad-slider-handle", ""), Tr.current = Zr
      }), []), (0, Zr.useLayoutEffect)((() => {
        var rr, Sr;
        yr ? null === (rr = Tr.current) || void 0 === rr || rr.setAttribute("aria-disabled", "true") : null === (Sr = Tr.current) || void 0 === Sr || Sr.removeAttribute("aria-disabled")
      }), [yr]);
      const vr = Math.max(zr(jr), zr(Qr)),
        Or = rr => {
          if (rr >= ar) return ar;
          if (rr <= Qr) return Qr;
          const Sr = Number((Math.round((rr - Qr) / jr) * jr + Qr).toFixed(vr));
          return Math.min(ar, Math.max(Qr, Sr))
        },
        Lr = (0, Zr.useRef)(er);
      Lr.current = er, (0, Zr.useEffect)((() => {
        const rr = Br.current;
        if (!rr) return;
        const Sr = rr => {
          var Sr;
          hr.has(rr.key) && (null === (Sr = Lr.current) || void 0 === Sr || Sr.call(Lr))
        };
        return rr.addEventListener("keyup", Sr), () => {
          rr.removeEventListener("keyup", Sr)
        }
      }), []);
      const lr = (0, Zr.useRef)(!1);
      return (0, mr.c)(Tr, {
        adjust: rr => {
          if (yr) return;
          const Zr = null !== Kr && void 0 !== Kr ? Kr : Math.max(jr, Math.round((ar - Qr) / 20 / jr) * jr),
            Wr = Or(Sr + rr * Zr * (Er ? -1 : 1));
          Wr !== Sr && (null === nr || void 0 === nr || nr(), Ir(Wr), null === er || void 0 === er || er())
        },
        setFraction: rr => {
          if (yr) return;
          const Zr = Or(Qr + (Er ? 1 - rr : rr) * (ar - Qr));
          Zr !== Sr && (lr.current || (lr.current = !0, null === nr || void 0 === nr || nr()), Ir(Zr))
        },
        endDrag: () => {
          lr.current && (lr.current = !1, null === er || void 0 === er || er())
        }
      }), (0, Nr.jsx)("div", {
        ref: Br,
        style: {
          display: "contents"
        },
        children: (0, Nr.jsx)(Wr.c, {
          value: Sr,
          min: Qr,
          max: ar,
          step: jr,
          onChange: rr => {
            Ir(Or(rr))
          },
          orientation: fr,
          reverse: Er,
          tooltip: xr,
          labels: Ur,
          handleLabel: tr,
          format: Yr,
          onChangeStart: () => {
            null === nr || void 0 === nr || nr(), null === pr || void 0 === pr || pr(!0)
          },
          onChangeComplete: () => {
            null === pr || void 0 === pr || pr(!1), null === er || void 0 === er || er()
          }
        })
      })
    }
    async function nr() {
      const rr = pr.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await rr.getResult() && (0, xr.reloadBloxd)()
    }

    function er(rr) {
      let {
        label: Sr,
        options: Qr,
        value: Zr,
        onChange: Wr,
        circleInfoText: ar
      } = rr;
      return (0, Nr.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Nr.jsxs)("div", {
          className: "SliderText",
          children: [Sr, ar && (0, Nr.jsx)(jr.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: ar
          })]
        }), (0, Nr.jsx)(Ir.d, {
          ariaLabel: Sr,
          options: Qr,
          value: Zr,
          onChange: Wr
        })]
      })
    }
  },
  9850: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr,
      f: () => ar
    });
    var Zr = Qr(2140);
    const Wr = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      ar = rr => "string" === typeof rr.icon && "" !== rr.icon && "string" === typeof rr.keycode && Wr.test(rr.keycode),
      jr = rr => "Space" === rr ? "_" : Zr.h[rr]
  },
  9904: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Wr
    });
    var Zr = Qr(26);

    function Wr() {
      return !Zr.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  9909: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      A: () => mr,
      E: () => Nr,
      d: () => ar,
      e: () => Ir,
      g: () => Er,
      h: () => fr,
      l: () => jr,
      m: () => Wr,
      p: () => Zr,
      q: () => Ur,
      u: () => xr,
      x: () => pr
    });
    const Zr = 14,
      Wr = 6,
      ar = (Zr + Wr) / 2,
      jr = 200,
      Ir = jr / 2,
      fr = jr / 2 - 1,
      Er = Wr / Zr * (jr / 2),
      pr = (rr, Sr) => -Math.PI / 2 + 2 * rr * Math.PI / Sr,
      xr = (rr, Sr, Qr) => {
        const Zr = 2 * Math.PI / Qr;
        return (Math.round((Math.atan2(Sr, rr) + Math.PI / 2) / Zr) % Qr + Qr) % Qr
      },
      mr = .5,
      Nr = (rr, Sr, Qr) => Math.hypot(rr.x, rr.y) < mr ? Qr : xr(rr.x, rr.y, Sr),
      Ur = (rr, Sr, Qr, Zr, Wr) => {
        const ar = Math.PI / Sr,
          jr = pr(rr, Sr),
          Ir = jr - ar,
          fr = jr + ar,
          Er = (rr, Sr) => `${Qr+rr*Math.cos(Sr)} ${Qr+rr*Math.sin(Sr)}`;
        return [`M ${Er(Zr,Ir)}`, `L ${Er(Wr,Ir)}`, `A ${Wr} ${Wr} 0 0 1 ${Er(Wr,fr)}`, `L ${Er(Zr,fr)}`, `A ${Zr} ${Zr} 0 0 0 ${Er(Zr,Ir)}`, "Z"].join(" ")
      }
  },
  9950: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr
    });
    var Zr = Qr(72),
      Wr = Qr(9888),
      ar = Qr(3404);

    function jr() {
      const rr = (0, ar.l)("shopInfo"),
        [, Sr] = (0, Zr.useState)((() => (0, Wr.b)(rr)));
      return (0, ar.h)("shopInfo", (rr => {
        Sr((0, Wr.b)(rr))
      })), !(0, Wr.b)(rr)
    }
  },
  9309: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      A: () => Nr,
      B: () => Ur,
      e: () => jr,
      g: () => Wr,
      j: () => ar,
      n: () => mr,
      r: () => xr,
      t: () => Er,
      v: () => Ir,
      y: () => Zr
    });
    const Zr = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      Wr = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "zoom", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: Zr
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      ar = {
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
      jr = [
        ["pickBlock", "perspective"],
        ["zoom", "sneakToggle"]
      ],
      Ir = rr => {
        var Sr;
        return null !== (Sr = jr.find((Sr => Sr.includes(rr)))) && void 0 !== Sr ? Sr : [rr]
      },
      fr = Object.fromEntries(Wr.flatMap((rr => {
        let {
          group: Sr,
          actions: Qr
        } = rr;
        return Qr.map((rr => [rr, Sr]))
      }))),
      Er = rr => fr[rr],
      pr = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      xr = rr => {
        var Sr;
        return [Er(rr), ...null !== (Sr = pr[rr]) && void 0 !== Sr ? Sr : []]
      },
      mr = new Set(["menu", "inventory", "keyboard"]),
      Nr = {
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
      Ur = new Set(["forward", "backward", "left", "right"])
  },
  9306: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      A: () => Pr,
      C: () => Tr,
      E: () => nr,
      F: () => Or,
      H: () => pr,
      I: () => vr,
      L: () => Xr,
      e: () => Yr,
      h: () => Kr,
      k: () => mr,
      o: () => Nr,
      p: () => Hr,
      r: () => lr,
      s: () => Lr,
      w: () => er
    });
    var Zr = Qr(9309),
      Wr = Qr(9313),
      ar = Qr(9292),
      jr = Qr(9329);
    const Ir = rr => {
        var Sr, Qr;
        return null !== (Sr = null === (Qr = Zr.e.find((Sr => {
          let [Qr] = Sr;
          return Qr === rr
        }))) || void 0 === Qr ? void 0 : Qr[1]) && void 0 !== Sr ? Sr : rr
      },
      fr = (rr, Sr) => {
        var Qr;
        const Wr = Ir(Sr);
        return null !== (Qr = rr[Wr]) && void 0 !== Qr ? Qr : Zr.j[Wr]
      },
      Er = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((rr => {
        let [Sr, Qr] = rr;
        return [
          [Sr, Qr],
          [Qr, Sr]
        ]
      }))),
      pr = (rr, Sr) => null !== rr && void 0 !== rr ? rr : "nintendo" === Sr,
      xr = rr => pr((0, Wr.g)().swapConfirmBack, (0, Wr.k)()) && Er.get(rr) || rr,
      mr = rr => fr((0, Wr.g)().bindings, xr(rr)),
      Nr = rr => Zr.j[Ir(xr(rr))],
      Ur = Object.keys(Zr.j),
      tr = rr => "gameplay" === (0, Zr.t)(rr) ? ["gameplay"] : (0, Zr.r)(rr),
      hr = (rr, Sr) => {
        const Qr = tr(Sr);
        return tr(rr).some((rr => Qr.includes(rr)))
      },
      zr = (rr, Sr, Qr) => {
        const Wr = fr(rr, Sr),
          jr = new Set((0, Zr.v)(Sr)),
          Er = [...jr];
        for (let Zr = Er.pop(); Zr; Zr = Er.pop())
          for (const Sr of Ur) {
            const ar = fr(rr, Sr);
            jr.has(Sr) || ar !== Qr && ar !== Wr || !hr(Zr, Sr) || (jr.add(Sr), Er.push(Sr))
          }
        const pr = {
          ...rr
        };
        for (const xr of jr) {
          const Sr = fr(rr, xr) === Wr ? Qr : Wr,
            jr = (0, Zr.r)(xr).some((rr => Zr.n.has(rr)));
          if ((0, ar.E)(Sr) && jr) return null;
          pr[Ir(xr)] = Sr
        }
        for (const ar of Object.keys(pr)) pr[ar] === Zr.j[ar] && delete pr[ar];
        return pr
      },
      Yr = (rr, Sr) => null !== zr((0, Wr.g)().bindings, xr(rr), Sr),
      nr = (rr, Sr) => {
        if (mr(rr) === Sr) return !0;
        const Qr = zr((0, Wr.g)().bindings, xr(rr), Sr);
        return !!Qr && ((0, Wr.o)({
          bindings: Qr
        }), !0)
      },
      er = (rr, Sr) => {
        const Qr = (0, Zr.v)(Sr);
        return Ur.filter((Sr => Ir(Sr) === Sr && !Qr.includes(Sr) && fr(rr, xr(Sr)) !== mr(Sr)))
      },
      Kr = ["southpaw", "triggersSwapped"],
      yr = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      Br = rr => Object.keys(yr[rr]),
      Tr = (rr, Sr) => "southpaw" === rr ? Sr.swapSticks : Br(rr).every((Qr => fr(Sr.bindings, Qr) === yr[rr][Qr])),
      vr = (rr, Sr) => {
        const Qr = (0, Wr.g)();
        let ar = Qr.bindings;
        for (const Wr of Br(rr)) {
          const Qr = Sr ? yr[rr][Wr] : Zr.j[Wr];
          if (ar = zr(ar, Wr, Qr), !ar) return !1
        }
        return (0, Wr.o)({
          swapSticks: "southpaw" === rr ? Sr : Qr.swapSticks,
          bindings: ar
        }), !0
      },
      Or = () => {
        (0, Wr.o)({
          swapSticks: !1,
          bindings: {}
        })
      },
      Lr = () => (0, Wr.g)().swapSticks ? "RightStick" : "LeftStick",
      lr = () => (0, Wr.g)().swapSticks ? "LeftStick" : "RightStick",
      Xr = rr => (0, Wr.g)().swapSticks && (0, ar.E)(rr),
      Pr = rr => Xr(rr) ? Lr() : lr(),
      Hr = rr => {
        if (Zr.B.has(rr)) return Lr();
        const Sr = Zr.A[rr];
        return Sr && ("leaderboard" !== Sr || (0, jr.g)(rr, (0, jr.c)())) ? mr(Sr) : null
      }
  },
  9286: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      ControllerCategory: () => YI,
      ControllerGlyph: () => yW,
      ControllerRoot: () => Yj,
      PadLobbyShortcuts: () => gj,
      PadSneakChip: () => vj,
      PadTooltip: () => Lj,
      attachPressToContinue: () => wj,
      getBoundButton: () => pr.k,
      getControllerSettings: () => mr.g,
      getGlyphForNoaAction: () => pr.p,
      getInventoryCursorState: () => eI,
      getMenuShortcutButton: () => cQ,
      getPadGlyphIconName: () => yj,
      getPadGlyphIconUrl: () => Bj,
      getPadRepeatTiming: () => tr.d,
      handOverPadFocus: () => yI,
      hasActivePad: () => nI,
      isPadSteppingSlots: () => KI
    });
    const Zr = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionZoom":"Zoom (hold)","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var Wr = Qr(1251),
      ar = Qr(1541),
      jr = Qr(9289),
      Ir = Qr(92),
      fr = Qr(26),
      Er = Qr(34),
      pr = Qr(9306),
      xr = Qr(9333),
      mr = Qr(9313),
      Nr = Qr(9337),
      Ur = Qr(9292),
      tr = Qr(9750),
      hr = Qr(9758),
      zr = Qr(1793);
    const Yr = (rr, Sr, Qr) => Math.max(Sr, Math.min(Qr, rr)),
      nr = rr => Math.min(rr.width, rr.height) / 720,
      er = rr => Math.max(.15, rr);
    class Kr {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(rr, Sr) {
        const Qr = Math.hypot(rr.x, rr.y) >= (rr => Math.max(.3, rr))(Sr);
        return this.locked ? (this.locked = Qr, !1) : Qr
      }
    }
    const yr = (rr, Sr) => {
        const Qr = Yr(Sr.dtMs, 0, 100),
          Zr = Qr / 1e3,
          Wr = nr(Sr.viewport) * (Sr.cursorSpeedPercent / 100),
          ar = (0, Ur.h)(Sr.stick, er(Sr.moveDeadzone)),
          jr = Math.hypot(ar.x, ar.y),
          Ir = ((rr, Sr, Qr) => {
            if (Sr < .3) return 0;
            const Zr = Qr / 350;
            return Sr >= .85 ? Math.min(1, rr + Zr) : Math.max(0, rr - Zr)
          })(rr.speedRamp, jr, Qr);
        let fr = rr.x,
          Er = rr.y;
        if (jr > 0) {
          const rr = .45 + .55 * Ir,
            Qr = Sr.context.overInteractive ? .45 : 1,
            pr = 1400 * (rr => {
              const Sr = Yr(rr, 0, 1);
              return .3 * Sr + .7 * Sr * Sr
            })(jr) * Wr * rr * Qr;
          fr += ar.x / jr * pr * Zr, Er += ar.y / jr * pr * Zr
        }
        const pr = Math.hypot(Sr.dpad.x, Sr.dpad.y);
        if (pr > 0) {
          const rr = 500 * Wr;
          fr += Sr.dpad.x / pr * rr * Zr, Er += Sr.dpad.y / pr * rr * Zr
        }
        const xr = Sr.context.magnetTarget;
        if (xr && jr < .3 && 0 === pr) {
          const rr = ((rr, Sr, Qr, Zr, Wr) => {
            const ar = Sr.x - rr.x,
              jr = Sr.y - rr.y,
              Ir = Math.hypot(ar, jr);
            if (0 === Ir) return {
              x: 0,
              y: 0
            };
            const fr = Math.min(Ir, Wr * (1 - Zr / .3));
            let Er = ar / Ir * fr,
              pr = jr / Ir * fr;
            if (Zr > 0) {
              const rr = Qr.x / Zr,
                Sr = Qr.y / Zr,
                Wr = Er * rr + pr * Sr;
              Wr < 0 && (Er -= Wr * rr, pr -= Wr * Sr)
            }
            return {
              x: Er,
              y: pr
            }
          })({
            x: fr,
            y: Er
          }, xr, ar, jr, 120 * nr(Sr.viewport) * Zr);
          fr += rr.x, Er += rr.y
        }
        return {
          x: Yr(fr, 0, Math.max(0, Sr.viewport.width - 1)),
          y: Yr(Er, 0, Math.max(0, Sr.viewport.height - 1)),
          speedRamp: Ir
        }
      },
      Br = rr => {
        const Sr = (0, Ur.h)(rr, .2);
        return 0 !== Sr.x || 0 !== Sr.y
      },
      Tr = (rr, Sr) => {
        const Qr = (0, Ur.h)(rr, .2),
          Zr = Math.hypot(Qr.x, Qr.y);
        if (0 === Zr) return {
          x: 0,
          y: 0
        };
        const Wr = Zr * Zr * 1600,
          ar = Yr(Sr, 0, 100) / 1e3;
        return {
          x: Qr.x / Zr * Wr * ar,
          y: Qr.y / Zr * Wr * ar
        }
      },
      vr = (rr, Sr) => "y" === Sr ? rr.scrollHeight > rr.clientHeight + 1 : rr.scrollWidth > rr.clientWidth + 1,
      Or = (rr, Sr) => {
        if (!vr(rr, Sr)) return !1;
        const Qr = getComputedStyle(rr),
          Zr = "y" === Sr ? Qr.overflowY : Qr.overflowX;
        return "auto" === Zr || "scroll" === Zr
      },
      Lr = (rr, Sr, Qr) => {
        for (let ar = rr instanceof HTMLElement ? rr : null !== (Zr = null === rr || void 0 === rr ? void 0 : rr.parentElement) && void 0 !== Zr ? Zr : null; ar; ar = ar.parentElement) {
          var Zr;
          if (Or(ar, Sr)) return ar;
          if (ar === Qr) return null
        }
        if (Qr) return null;
        const Wr = document.scrollingElement;
        return Wr instanceof HTMLElement && vr(Wr, Sr) ? Wr : null
      },
      lr = new WeakMap,
      Xr = (rr, Sr) => {
        const Qr = performance.now(),
          Zr = lr.get(rr);
        if (Zr && Zr.axis === Sr && Qr - Zr.atMs < 500 && (!Zr.container || Zr.container.isConnected)) return Zr.container;
        const Wr = Pr(rr, Sr);
        return lr.set(rr, {
          axis: Sr,
          atMs: Qr,
          container: Wr
        }), Wr
      },
      Pr = (rr, Sr) => {
        let Qr = Or(rr, Sr) ? rr : null,
          Zr = Qr ? Qr.clientWidth * Qr.clientHeight : 0;
        for (const Wr of rr.querySelectorAll("*")) {
          const rr = Wr.clientWidth * Wr.clientHeight;
          rr > Zr && Or(Wr, Sr) && (Qr = Wr, Zr = rr)
        }
        return Qr
      },
      Hr = (rr, Sr, Qr) => "y" === Sr ? Qr < 0 ? rr.scrollTop > 0 : rr.scrollTop + rr.clientHeight < rr.scrollHeight - 1 : Qr < 0 ? rr.scrollLeft > 0 : rr.scrollLeft + rr.clientWidth < rr.scrollWidth - 1,
      qr = (rr, Sr, Qr) => {
        "y" === Sr ? rr.scrollBy({
          top: Qr,
          behavior: "instant"
        }) : rr.scrollBy({
          left: Qr,
          behavior: "instant"
        })
      },
      Rr = rr => {
        if (!rr || rr === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const Sr = rr.getBoundingClientRect(),
          Qr = Math.max(0, Sr.left),
          Zr = Math.max(0, Sr.top);
        return new DOMRect(Qr, Zr, Math.min(window.innerWidth, Sr.right) - Qr, Math.min(window.innerHeight, Sr.bottom) - Zr)
      },
      gr = (rr, Sr) => rr.left < Sr.right && Sr.left < rr.right && rr.top < Sr.bottom && Sr.top < rr.bottom;
    var Cr = Qr(72),
      Mr = Qr(1155),
      Gr = Qr.n(Mr),
      kr = Qr(1338);
    let Ar = 0,
      Vr = !1;
    class ir {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(rr) {
        this.element = rr, this.shownKey = "", this.gap = null
      }
      show(rr) {
        const Sr = this.element;
        if (!Sr) return;
        const Qr = rr ? this.keepOnScreen(Sr, rr) : null,
          Zr = Qr ? `${Qr.left},${Qr.top},${Qr.width},${Qr.height}` : "";
        if (Zr === this.shownKey) return;
        const Wr = "" === this.shownKey;
        this.shownKey = Zr, Sr.classList.toggle("Visible", null !== Qr), Qr && (Sr.classList.toggle("Snap", Wr), Sr.style.width = `${Qr.width}px`, Sr.style.height = `${Qr.height}px`, Sr.style.transform = `translate(${Qr.left}px, ${Qr.top}px)`, Wr && (Sr.offsetWidth, Sr.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(rr, Sr) {
        var Qr;
        const Zr = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!Vr){Vr=!0;const rr=document.createElement("div");rr.setAttribute("aria-hidden","true"),rr.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(rr),new ResizeObserver((()=>{Ar++})).observe(rr)}return String(Ar)})()}`;
        (null === (Qr = this.gap) || void 0 === Qr ? void 0 : Qr.key) !== Zr && (this.gap = {
          px: parseFloat(getComputedStyle(rr).paddingLeft) || 0,
          key: Zr
        });
        const Wr = this.gap.px + 2,
          ar = Math.max(Sr.left, Wr),
          jr = Math.max(Sr.top, Wr),
          Ir = Math.min(Sr.left + Sr.width, window.innerWidth - Wr),
          fr = Math.min(Sr.top + Sr.height, window.innerHeight - Wr);
        return Ir <= ar || fr <= jr ? Sr : {
          left: ar,
          top: jr,
          width: Ir - ar,
          height: fr - jr
        }
      }
    }
    const wr = rr => {
      let {
        placer: Sr,
        className: Qr
      } = rr;
      const Zr = (0, Cr.useCallback)((rr => {
        Sr.setElement(rr)
      }), [Sr]);
      return (0, kr.jsx)("div", {
        ref: Zr,
        className: Gr()("PadReticle", Qr),
        "aria-hidden": !0
      })
    };
    var cr = Qr(9765);
    const Fr = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const or = new class {
      constructor() {
        this.state = Fr, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(rr) {
        if (Sr = this.state, Qr = rr, (Sr.visible || Qr.visible) && (Sr.visible !== Qr.visible || Sr.x !== Qr.x || Sr.y !== Qr.y || Sr.pressed !== Qr.pressed)) {
          var Sr, Qr;
          this.state = rr;
          for (const Sr of this.listeners) Sr(rr)
        }
      }
      hide() {
        this.set(Fr)
      }
      subscribe(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
    };
    var br = Qr(9774);
    const Jr = (rr, Sr) => {
        let {
          kind: Qr,
          holding: Zr,
          hasPress: Wr,
          hasBack: ar,
          slotHasItem: jr
        } = Sr;
        switch (rr) {
          case "primary":
            return "slot" === Qr ? "slotPrimary" : "recipe" === Qr || "button" === Qr ? Wr ? "pressPrimary" : "click" : "textField" === Qr ? "openKeyboard" : null;
          case "secondary":
            return "slot" === Qr ? "slotSecondary" : "button" !== Qr && "recipe" !== Qr || !Wr ? null : "pressSecondary";
          case "quickMove":
            return "slot" === Qr && jr ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === Qr && jr && !Zr ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return Zr ? "cancel" : ar ? "pressBack" : "close"
        }
      },
      Dr = rr => {
        const Sr = [];
        if (rr.hotbarPicking) return Sr.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), Sr.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), Sr;
        if (rr.holding) "slot" === rr.kind ? (Sr.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), Sr.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === rr.kind && Sr.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), Sr.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), Sr.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), rr.openButtonCloses && Sr.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var Qr;
          "slot" === rr.kind && rr.slotHasItem ? (Sr.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), Sr.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), Sr.push({
            actions: ["inventoryQuickMove"],
            labelKey: rr.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), Sr.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), Sr.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== rr.kind && "recipe" !== rr.kind || !rr.pressHints ? "button" === rr.kind || "recipe" === rr.kind ? Sr.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === rr.kind && Sr.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (rr.pressHints.primary && Sr.push({
            actions: ["inventoryPrimary"],
            labelKey: rr.pressHints.primary
          }), rr.pressHints.secondary && Sr.push({
            actions: ["inventorySecondary"],
            labelKey: rr.pressHints.secondary
          }));
          const Zr = null === (Qr = rr.pressHints) || void 0 === Qr ? void 0 : Qr.back;
          Zr && Sr.push({
            actions: ["inventoryClose"],
            labelKey: Zr
          });
          const Wr = [];
          rr.openButtonCloses && Wr.push("inventory"), Zr || Wr.push("inventoryClose"), Wr.length > 0 && Sr.push({
            actions: Wr,
            labelKey: "inventoryClose"
          })
        }
        return Sr.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), rr.hasCategories ? Sr.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : rr.hasList && Sr.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), Sr
      };
    var dr = Qr(9780),
      sr = Qr(3338);
    class ur {
      constructor(rr) {
        this.probes = rr, this.byContainer = new Map, this.byParent = new Map
      }
      find(rr, Sr) {
        const Qr = Lr(rr, "y", Sr);
        if (!Qr) return null;
        let Zr = this.byContainer.get(Qr);
        return Zr || (this.probes.push({
          element: Qr,
          rect: ZS(Qr.getBoundingClientRect())
        }), Zr = {
          container: Qr,
          box: Rr(Qr),
          group: QS(Qr)
        }, this.byContainer.set(Qr, Zr)), Zr
      }
      findForParent(rr, Sr) {
        let Qr = this.byParent.get(rr);
        return void 0 === Qr && (Qr = this.find(rr, Sr), this.byParent.set(rr, Qr)), Qr
      }
    }
    const rS = new WeakMap;
    let SS = 0;
    const QS = rr => {
        let Sr = rS.get(rr);
        return Sr || (Sr = "el:" + SS++, rS.set(rr, Sr)), Sr
      },
      ZS = rr => ({
        left: rr.left,
        top: rr.top,
        width: rr.width,
        height: rr.height
      }),
      WS = rr => rr.width > 0 && rr.height > 0,
      aS = (rr, Sr) => WS(rr) && rr.left + rr.width > 0 && rr.top + rr.height > 0 && rr.left < Sr.width && rr.top < Sr.height,
      jS = (rr, Sr, Qr) => {
        const Zr = rr.top + rr.height / 2;
        return aS(rr, Sr) && (!Qr || Zr >= Qr.top && Zr <= Qr.bottom)
      },
      IS = rr => ({
        x: rr.left + rr.width / 2,
        y: rr.top + rr.height / 2
      }),
      fS = (rr, Sr, Qr) => rr < 0 ? Qr >= 0 ? 0 : Sr - 1 : ((rr + Qr) % Sr + Sr) % Sr,
      ES = rr => "Left" === rr || "Right" === rr,
      pS = (rr, Sr, Qr) => {
        const Zr = ES(Qr),
          Wr = Zr ? rr.top : rr.left,
          ar = Zr ? rr.height : rr.width,
          jr = Zr ? Sr.top : Sr.left,
          Ir = Zr ? Sr.height : Sr.width,
          fr = Math.max(0, Math.max(jr - (Wr + ar), Wr - (jr + Ir)));
        return ar > 1.5 * Ir ? {
          gap: fr,
          offset: Math.max(0, jr - Wr) + .1 * Math.max(0, Wr - jr)
        } : {
          gap: fr,
          offset: Math.abs(jr + Ir / 2 - (Wr + ar / 2))
        }
      },
      xS = (rr, Sr, Qr) => {
        const Zr = ((rr, Sr, Qr) => {
          const Zr = IS(rr),
            Wr = IS(Sr),
            ar = ES(Qr) ? Math.min(rr.width, Sr.width) / 4 : Math.min(rr.height, Sr.height) / 4;
          switch (Qr) {
            case "Right":
              return Wr.x - Zr.x >= ar ? Math.max(0, Sr.left - (rr.left + rr.width)) : null;
            case "Left":
              return Zr.x - Wr.x >= ar ? Math.max(0, rr.left - (Sr.left + Sr.width)) : null;
            case "Down":
              return Wr.y - Zr.y >= ar ? Math.max(0, Sr.top - (rr.top + rr.height)) : null;
            case "Up":
              return Zr.y - Wr.y >= ar ? Math.max(0, rr.top - (Sr.top + Sr.height)) : null
          }
        })(rr, Sr, Qr);
        if (null === Zr) return null;
        const Wr = pS(rr, Sr, Qr);
        return Zr + 3 * Wr.gap + .5 * Wr.offset
      },
      mS = (rr, Sr) => Sr.visible || null !== Sr.scrollGroup && Sr.scrollGroup === rr.scrollGroup,
      NS = (rr, Sr, Qr, Zr) => {
        let Wr = null,
          ar = 1 / 0;
        for (const jr of Sr) {
          if (jr.key === rr.key || !mS(rr, jr) || !Zr(jr)) continue;
          const Sr = xS(rr.rect, jr.rect, Qr);
          null !== Sr && Sr < ar && (Wr = jr, ar = Sr)
        }
        return Wr
      },
      US = (rr, Sr, Qr) => {
        const Zr = NS(rr, Sr, Qr, (() => !0));
        if (!Zr || ES(Qr) || null === rr.scrollGroup || Zr.scrollGroup === rr.scrollGroup) return Zr;
        const Wr = NS(rr, Sr, Qr, (Sr => 0 === pS(rr.rect, Sr.rect, Qr).gap));
        return null !== Wr && void 0 !== Wr ? Wr : Zr
      },
      tS = (rr, Sr, Qr) => {
        let Zr = null,
          Wr = 1 / 0;
        for (const ar of Sr) {
          if (!ar.visible || Qr && !Qr(ar)) continue;
          const Sr = IS(ar.rect),
            jr = Math.hypot(Sr.x - rr.x, Sr.y - rr.y);
          jr < Wr && (Zr = ar, Wr = jr)
        }
        return Zr
      },
      hS = rr => {
        const {
          rect: Sr,
          clip: Qr
        } = rr;
        if (!Qr) return Sr;
        const Zr = Math.max(Sr.left, Qr.left),
          Wr = Math.max(Sr.top, Qr.top);
        return {
          left: Zr,
          top: Wr,
          width: Math.min(Sr.left + Sr.width, Qr.left + Qr.width) - Zr,
          height: Math.min(Sr.top + Sr.height, Qr.top + Qr.height) - Wr
        }
      },
      zS = (rr, Sr) => Sr.x >= rr.left && Sr.x < rr.left + rr.width && Sr.y >= rr.top && Sr.y < rr.top + rr.height,
      YS = (rr, Sr) => {
        let Qr = null,
          Zr = 1 / 0;
        for (const Wr of Sr) {
          const Sr = hS(Wr);
          (Wr.visible || Wr.clip) && zS(Sr, rr) && (Sr.width * Sr.height < Zr && (Qr = Wr, Zr = Sr.width * Sr.height))
        }
        return Qr
      },
      nS = rr => {
        let Sr = null;
        for (const Qr of rr) {
          if (!Qr.visible) continue;
          if (!Sr) {
            Sr = Qr;
            continue
          }
          const rr = Math.min(Sr.rect.height, Qr.rect.height) / 2,
            Zr = Qr.rect.top - Sr.rect.top;
          (Zr < -rr || Math.abs(Zr) <= rr && Qr.rect.left < Sr.rect.left) && (Sr = Qr)
        }
        return Sr
      },
      eS = (rr, Sr, Qr, Zr, Wr) => {
        const ar = Wr % Sr,
          jr = Math.floor(Wr / Sr);
        return {
          left: rr.left + ar * Qr,
          top: rr.top + jr * Zr,
          width: rr.width,
          height: rr.height
        }
      },
      KS = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      yS = ".LazyLoadedItemWrapper",
      BS = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      TS = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      vS = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      OS = rr => rr.hasAttribute("data-inven-idx") ? "slot" : rr.hasAttribute("data-recipe-key") ? "recipe" : rr.hasAttribute("data-craft-ingredient") || (0, sr.w)(rr) ? "info" : (0, cr.P)(rr) ? "textField" : "button",
      LS = (rr, Sr) => "slot" === Sr ? Number(rr.getAttribute("data-inven-idx")) : null,
      lS = rr => rr.matches(yS) ? rr.querySelector(BS) : rr,
      XS = rr => {
        var Sr, Qr;
        return {
          element: rr,
          recipe: null !== (Sr = rr && (null === (Qr = lS(rr)) || void 0 === Qr ? void 0 : Qr.getAttribute("data-recipe-key"))) && void 0 !== Sr ? Sr : null
        }
      },
      PS = rr => {
        const Sr = lS(rr);
        if (!Sr) return {
          kind: "pending",
          idx: null
        };
        const Qr = OS(Sr);
        return {
          kind: Qr,
          idx: LS(Sr, Qr)
        }
      },
      HS = rr => {
        const Sr = [];
        for (const [Qr, Zr] of TS) {
          rr.matches(Zr) && Sr.push([Qr, rr]);
          for (const Wr of rr.querySelectorAll(Zr)) Sr.push([Qr, Wr])
        }
        return Sr
      },
      qS = (rr, Sr) => {
        for (const [Qr, Zr] of rr)
          if (Zr.contains(Sr)) return Qr;
        return "other"
      },
      RS = (rr, Sr, Qr, Zr, Wr, ar, jr, Ir) => {
        var fr;
        const Er = rr.children,
          pr = ZS(Er[0].getBoundingClientRect()),
          xr = [{
            element: Er[0],
            rect: pr
          }];
        if (ar.push(xr[0]), 0 === pr.width || 0 === pr.height) return;
        let mr = 1;
        for (; mr < Er.length && Math.abs(Er[mr].getBoundingClientRect().top - pr.top) < 1;) mr++;
        const Nr = rr => {
            const Sr = {
              element: Er[rr],
              rect: ZS(Er[rr].getBoundingClientRect())
            };
            return ar.push(Sr), xr.push(Sr), Sr.rect
          },
          Ur = mr > 1 ? Nr(1).left - pr.left : pr.width,
          tr = Er.length > mr ? Nr(mr).top - pr.top : pr.height,
          hr = jr.find(rr, Sr);
        let zr = null;
        if (hr) {
          var Yr;
          const {
            container: rr,
            box: Sr
          } = hr;
          zr = null !== (Yr = Ir.get(rr)) && void 0 !== Yr ? Yr : null, zr || (zr = {
            top: rr.scrollTop,
            left: rr.scrollLeft,
            box: Sr,
            viewport: Zr,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, Ir.set(rr, zr)), zr.probes.push(...xr)
        }
        const nr = Wr.length;
        for (let Br = 0; Br < Er.length; Br++) {
          var er, Kr, yr;
          const rr = Er[Br],
            Sr = eS(pr, mr, Ur, tr, Br),
            ar = rr.firstElementChild ? rr.querySelector(BS) : null,
            jr = ar ? OS(ar) : "pending";
          Wr.push({
            key: QS(rr),
            rect: Sr,
            panel: Qr,
            scrollGroup: null !== (er = null === hr || void 0 === hr ? void 0 : hr.group) && void 0 !== er ? er : null,
            visible: jS(Sr, Zr, null === hr || void 0 === hr ? void 0 : hr.box),
            clip: null !== (Kr = null === hr || void 0 === hr ? void 0 : hr.box) && void 0 !== Kr ? Kr : null,
            element: rr,
            kind: jr,
            idx: ar ? LS(ar, jr) : null,
            scrollContainer: null !== (yr = null === hr || void 0 === hr ? void 0 : hr.container) && void 0 !== yr ? yr : null
          })
        }
        null === (fr = zr) || void 0 === fr || fr.targets.push(...Wr.slice(nr))
      },
      gS = rr => rr instanceof Element && null !== rr.closest(yS),
      CS = rr => null !== rr.scrollContainer && gS(rr.element);
    class MS {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(rr, Sr, Qr, Zr) {
        this.latched = {
          source: rr,
          focusKey: Sr,
          sinceMs: Qr,
          hold: {
            id: ++this.presses,
            holdMs: Zr
          }
        }
      }
      update(rr, Sr, Qr) {
        const Zr = this.latched;
        return Zr ? rr && Sr === Zr.focusKey ? Qr - Zr.sinceMs < Zr.hold.holdMs ? null : (this.latched = null, Zr.source) : (this.latched = null, null) : null
      }
      getHold() {
        var rr, Sr;
        return null !== (rr = null === (Sr = this.latched) || void 0 === Sr ? void 0 : Sr.hold) && void 0 !== rr ? rr : null
      }
      reset() {
        this.latched = null
      }
    }
    var GS = Qr(9784);
    const kS = {
        kind: "none"
      },
      AS = rr => ({
        x: rr.clientX,
        y: rr.clientY
      }),
      VS = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class iS {
      constructor() {
        this.hovered = kS, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(rr, Sr, Qr, Zr, Wr) {
        const ar = null !== Sr ? {
            kind: "slot",
            idx: Sr
          } : Qr ? {
            kind: "element",
            element: Qr
          } : kS,
          jr = `${Wr}|${Math.round(Zr.clientX)},${Math.round(Zr.clientY)}`,
          Ir = (fr = this.hovered, Er = ar, "slot" === fr.kind && "slot" === Er.kind ? fr.idx === Er.idx : "element" === fr.kind && "element" === Er.kind ? fr.element === Er.element : fr.kind === Er.kind);
        var fr, Er;
        if (Ir && jr === this.signature) return;
        const pr = !Ir || Wr !== this.holding || "" === this.signature;
        this.signature = jr, this.holding = Wr, this.lastPoint = Zr;
        const xr = this.hovered;
        if (this.hovered = ar, "slot" === ar.kind) return this.leaveElement(xr, null, Zr), void(pr ? rr.hover(ar.idx, Zr) : rr.moveTo(Zr));
        if (Ir) return void("element" === ar.kind ? (0, cr.p)(ar.element, ar.element, AS(Zr)) : rr.hover(null, Zr));
        rr.hover(null, Zr);
        const mr = "element" === ar.kind ? ar.element : null;
        "element" === xr.kind ? (0, cr.p)(xr.element, mr, AS(Zr)) : mr && (0, cr.p)(null, mr, AS(Zr))
      }
      invalidate() {
        this.signature = ""
      }
      clear(rr) {
        const Sr = this.hovered;
        this.hovered = kS, this.signature = "", "none" !== Sr.kind && (this.leaveElement(Sr, null, this.lastPoint), rr && "slot" === Sr.kind && rr.hover(null, this.lastPoint))
      }
      leaveElement(rr, Sr, Qr) {
        "element" === rr.kind && (0, cr.p)(rr.element, Sr, AS(Qr))
      }
    }
    class wS {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(rr, Sr) {
        Br(rr) && (this.lastTiltedMs = Sr)
      }
      allowsClick(rr) {
        return rr - this.lastTiltedMs > 150
      }
    }
    class cS {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(rr) {
        return 0 !== (0, Ur.h)(rr, .2).y
      }
      step(rr, Sr, Qr) {
        rr !== this.container && (this.container = rr, this.remainder = 0);
        const Zr = Tr(Sr, Qr).y;
        if (0 === Zr) return this.remainder = 0, !1;
        const Wr = this.remainder + Zr,
          ar = Math.trunc(Wr);
        if (this.remainder = Wr - ar, 0 === ar) return !1;
        const jr = rr.scrollTop;
        return rr.scrollTop = jr + ar, rr.scrollTop !== jr
      }
      current() {
        var rr;
        return null !== (rr = this.container) && void 0 !== rr && rr.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var FS = Qr(9790);
    const oS = "[data-pad-inventory-default]",
      bS = ".HotBarGameItemsContainer .InvenItem.Selected",
      JS = {
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
      DS = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      dS = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      sS = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      uS = [...dS, ...sS],
      rQ = () => {
        return rr = (0, pr.k)("inventory"), !uS.map(pr.k).includes(rr) && !(0, Ur.E)(rr);
        var rr
      },
      SQ = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      QQ = (rr, Sr) => {
        const Qr = !(null === Sr || void 0 === Sr || !Sr.isHolding());
        return function(rr, Sr) {
          const Qr = rr.find((rr => rr.visible && Sr(rr)));
          if (Qr) return Qr;
          for (var Zr = arguments.length, Wr = new Array(Zr > 2 ? Zr - 2 : 0), ar = 2; ar < Zr; ar++) Wr[ar - 2] = arguments[ar];
          for (const jr of Wr) {
            const Sr = nS(rr.filter(jr));
            if (Sr) return Sr
          }
          return nS(rr)
        }(rr, (rr => {
          const {
            element: Sr
          } = rr;
          return Sr.matches(oS) || null !== Sr.querySelector(oS) || Sr.matches(bS)
        }), (rr => "slot" === rr.kind ? Qr || null !== rr.idx && !(null === Sr || void 0 === Sr || !Sr.hasItemAt(rr.idx)) : "recipe" === rr.kind || "pending" === rr.kind), (rr => "slot" === rr.kind || "button" === rr.kind))
      };
    class ZQ {
      constructor() {
        this.set = null, this.observer = new MutationObserver((rr => {
          rr.some((rr => !gS(rr.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = rr => {
          this.scrolled(rr.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const rr = [],
              Sr = [];
            let Qr = !1;
            const Zr = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              Wr = new Map,
              ar = new ur(Sr);
            for (const xr of document.querySelectorAll(KS)) {
              const pr = HS(xr);
              Qr ||= null !== xr.querySelector(".CreativeCategoryTab");
              for (const Qr of xr.querySelectorAll(`${yS}:first-child`)) {
                const jr = Qr.parentElement;
                RS(jr, xr, qS(pr, jr), Zr, rr, Sr, ar, Wr)
              }
              for (const Qr of xr.querySelectorAll(BS)) {
                var jr, Ir, fr, Er;
                if (Qr.closest(yS) || Qr.closest("[data-pad-ignore]")) continue;
                const mr = null === (jr = Qr.parentElement) || void 0 === jr ? void 0 : jr.closest(BS);
                if (mr && xr.contains(mr)) continue;
                const Nr = OS(Qr),
                  Ur = LS(Qr, Nr);
                if (-1 === Ur) continue;
                const tr = ZS(Qr.getBoundingClientRect());
                Sr.push({
                  element: Qr,
                  rect: tr
                });
                const hr = ar.findForParent(Qr.parentElement, xr),
                  zr = hr && !Wr.has(hr.container) ? hr : null;
                (zr ? WS(tr) : aS(tr, Zr)) && rr.push({
                  key: QS(Qr),
                  rect: tr,
                  panel: qS(pr, Qr),
                  scrollGroup: null !== (Ir = null === zr || void 0 === zr ? void 0 : zr.group) && void 0 !== Ir ? Ir : null,
                  visible: jS(tr, Zr, null === zr || void 0 === zr ? void 0 : zr.box),
                  clip: null !== (fr = null === zr || void 0 === zr ? void 0 : zr.box) && void 0 !== fr ? fr : null,
                  element: Qr,
                  kind: Nr,
                  idx: Ur,
                  scrollContainer: null !== (Er = null === zr || void 0 === zr ? void 0 : zr.container) && void 0 !== Er ? Er : null
                })
              }
            }
            for (const [xr, mr] of Wr) mr.holdsOthers = Sr.some((rr => rr.element !== xr && xr.contains(rr.element) && !rr.element.closest(yS)));
            const pr = new Map;
            for (const xr of rr) pr.set(xr.element, xr);
            return {
              targets: rr,
              byElement: pr,
              hasCategories: Qr,
              probes: Sr,
              scrollers: Wr
            }
          })(), this.observer.disconnect();
          for (const rr of document.querySelectorAll(KS)) this.observer.observe(rr, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(rr) {
        !this.set || rr instanceof Element && ((rr, Sr) => {
          const Qr = rr.scrollers.get(Sr);
          if (!Qr || Qr.holdsOthers || Sr.scrollLeft !== Qr.left) return !1;
          const Zr = Sr.scrollTop - Qr.top;
          if (0 === Zr) return !0;
          Qr.top = Sr.scrollTop;
          for (const Wr of Qr.probes) Wr.rect.top -= Zr;
          for (const Wr of Qr.targets) Wr.rect.top -= Zr, Wr.visible = jS(Wr.rect, Qr.viewport, Qr.box);
          return !0
        })(this.set, rr) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((rr => {
          return Sr = rr.rect, Qr = rr.element.getBoundingClientRect(), !(Sr.left === Qr.left && Sr.top === Qr.top && Sr.width === Qr.width && Sr.height === Qr.height);
          var Sr, Qr
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const WQ = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(Ur.y.map((rr => [rr, (0, tr.c)(Ur.B)]))), this.stickRepeat = new Ur.b((0, tr.c)(Ur.cb)), this.pageUpTimer = (0, tr.c)(Ur.Y), this.pageDownTimer = (0, tr.c)(Ur.Y), this.stickGate = new Kr, this.pointer = null, this.activePress = null, this.dropLatch = new MS, this.scroller = new cS, this.scrollStickClick = new wS, this.hover = new iS, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new ir, this.targets = new ZQ, this.hasCategories = !1, this.wasShowing = !1, this.state = GS.b, this.isActive = () => (0, dr.h)(), this.isShowing = () => "inventory" === xr.d.getActiveConsumerName() && (0, Nr.p)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, dr.e)()), (0, dr.h)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var rr;
            this.reopenSlotIdx = null !== (rr = this.focused ? PS(this.focused).idx : null) && void 0 !== rr ? rr : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, dr.q)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = rr => {
            (0, Ir.unstable_batchedUpdates)((() => {
              this.frame(rr)
            }))
          }, this.shouldBlockRealPointer = rr => rr.isTrusted && !(0, zr.u)(rr) && this.isShowing(), this.noteRealPointer = rr => {
            rr instanceof MouseEvent && rr.isTrusted && !(0, zr.u)(rr) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = rr.clientX, this.lastRealPointer.y = rr.clientY)
          }, this.wakePressActs = rr => {
            var Sr;
            return rr === (0, pr.k)("inventoryClose") ? !(null !== (Sr = (0, dr.e)()) && void 0 !== Sr && Sr.isHolding()) : !(rr !== (0, pr.k)("inventory") || !rQ()) || ((0, Ur.E)(rr) ? this.isNavButton(rr) : sS.some((Sr => (0, pr.k)(Sr) === rr)))
          }
        }
        frame(rr) {
          var Sr, Qr, Zr, Wr, ar;
          const jr = (0, dr.e)();
          if (!(0, Nr.p)()) return void(this.wasShowing && (this.endInteraction(jr), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), rr.wokeDevice && this.focusWakePointer(!(null === jr || void 0 === jr || !jr.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, mr.g)().inventoryNavigation || this.pointer || this.engagePointer();
          const Ir = performance.now();
          this.handleNavigation(rr, Ir), this.handlePanels(rr), this.handlePaging(rr, Ir), this.handleScroll(rr), this.handleButtons(rr, Ir, jr), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const fr = this.ensureFocus(),
            Er = this.focusContext(jr);
          this.ring.show(fr);
          const xr = "slot" === Er.kind ? Er.idx : null,
            Ur = null !== (Sr = null === (Qr = Er.actionElement) || void 0 === Qr ? void 0 : Qr.querySelector(".DoCraftItem")) && void 0 !== Sr ? Sr : Er.actionElement;
          this.pointer ? (this.hover.sync(jr, xr, Ur, ((rr, Sr) => {
            const Qr = Sr ? VS() : 0;
            return {
              clientX: rr.x - Qr,
              clientY: rr.y - Qr
            }
          })(this.pointer, Er.holding), Er.holding), or.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: rr.isHeld((0, pr.k)("inventoryPrimary"))
          })) : fr && this.focused && this.hover.sync(jr, xr, Ur, ((rr, Sr) => {
            if (!Sr) return {
              clientX: rr.left + rr.width - 10,
              clientY: rr.top + rr.height / 2 - 10
            };
            const Qr = VS();
            return {
              clientX: rr.left + rr.width / 2 - Qr,
              clientY: rr.top + rr.height / 2 - Qr
            }
          })(fr, Er.holding), Er.holding), this.publishState({
            showing: !0,
            kind: Er.kind,
            holding: Er.holding,
            slotHasItem: Er.slotHasItem,
            pressHints: null !== (Zr = null === (Wr = Er.press) || void 0 === Wr ? void 0 : Wr.hints) && void 0 !== Zr ? Zr : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && CS(this.focusTarget),
            openButtonCloses: rQ(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === Er.kind && !(null === (ar = Er.actionElement) || void 0 === ar || !ar.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(rr) {
          var Sr;
          const Qr = (0, Nr.d)();
          if (!Qr) return;
          this.targets.revalidate();
          const Zr = this.getTargets().targets;
          this.setFocus(null !== (Sr = YS(Qr, Zr)) && void 0 !== Sr ? Sr : rr ? tS(Qr, Zr, (rr => {
            let {
              rect: Sr
            } = rr;
            const Zr = Math.max(Sr.left - Qr.x, 0, Qr.x - (Sr.left + Sr.width)),
              Wr = Math.max(Sr.top - Qr.y, 0, Qr.y - (Sr.top + Sr.height));
            return Math.hypot(Zr, Wr) <= Math.min(Sr.width, Sr.height) / 2
          })) : null, !1), "cursor" === (0, mr.g)().inventoryNavigation && (this.pointer = {
            x: Qr.x,
            y: Qr.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const rr = this.lastRealPointer;
          if (!rr || "keyboardMouse" !== fr.c.get("activeInputDevice")) return;
          const Sr = document.elementFromPoint(rr.x, rr.y);
          Sr && (0, cr.p)(null, Sr, rr)
        }
        endInteraction(rr) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const Sr of this.dpadTimers.values()) Sr.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(rr), this.ring.hide(), this.releasePointer(), this.publishState(GS.b)
        }
        getTargets() {
          const rr = this.targets.get();
          return this.hasCategories = rr.hasCategories, rr
        }
        currentTarget() {
          var rr;
          return this.focused && null !== (rr = this.getTargets().byElement.get(this.focused)) && void 0 !== rr ? rr : null
        }
        readFocusRect() {
          const rr = this.focused;
          if (null === rr || void 0 === rr || !rr.isConnected || !rr.closest(KS)) return null;
          const Sr = rr.getBoundingClientRect();
          return Sr.width > 0 && Sr.height > 0 ? {
            left: Sr.left,
            top: Sr.top,
            width: Sr.width,
            height: Sr.height
          } : null
        }
        ensureFocus() {
          const rr = this.readFocusRect();
          if (rr || this.pointer) return rr;
          const {
            targets: Sr,
            byElement: Qr
          } = this.getTargets();
          let Zr = null,
            Wr = !1;
          if (this.lastRect) Zr = tS(IS(this.lastRect), Sr);
          else {
            var ar, jr;
            const rr = ((rr, Sr) => {
                const Qr = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return Qr ? QQ(rr.filter((rr => Qr.contains(rr.element))), Sr) : null
              })(Sr, (0, dr.e)()),
              Ir = Sr.find((rr => null !== rr.idx && rr.idx === this.reopenSlotIdx)),
              fr = document.querySelector(bS);
            Wr = null !== rr || void 0 !== Ir, Zr = null !== (ar = null !== (jr = null !== rr && void 0 !== rr ? rr : Ir) && void 0 !== jr ? jr : fr && Qr.get(fr)) && void 0 !== ar ? ar : nS(Sr)
          }
          return this.setFocus(Zr, Wr), this.lastRect
        }
        setFocus(rr) {
          let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          rr && (this.focused = rr.element, this.focusTarget = rr, this.panelMemory.set(rr.panel, rr.element), Sr && rr.scrollContainer && ((rr, Sr) => {
            const Qr = rr.getBoundingClientRect(),
              Zr = Rr(Sr),
              Wr = Sr.scrollTop;
            return Qr.top < Zr.top ? Sr.scrollTop -= Zr.top - Qr.top : Qr.bottom > Zr.bottom && (Sr.scrollTop += Qr.bottom - Zr.bottom), Sr.scrollTop !== Wr
          })(rr.element, rr.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, mr.g)().inventoryNavigation) {
              if (this.lastRect) {
                const rr = IS(this.lastRect);
                this.pointer = {
                  x: rr.x,
                  y: rr.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const rr = this.lastRect ? IS(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: rr.x,
            y: rr.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, or.hide()
        }
        hoverAtPointer() {
          var rr;
          const Sr = YS(this.pointer, this.getTargets().targets);
          this.focusTarget = Sr, (null === Sr || void 0 === Sr ? void 0 : Sr.element) !== this.focused && (this.focused = null !== (rr = null === Sr || void 0 === Sr ? void 0 : Sr.element) && void 0 !== rr ? rr : null, Sr && (this.panelMemory.set(Sr.panel, Sr.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(rr, Sr) {
          const Qr = this.focusTarget,
            Zr = Qr && (0, mr.g)().cursorMagnetism ? IS(hS(Qr)) : null;
          this.pointer = yr(this.pointer, {
            stick: rr.leftStick,
            moveDeadzone: (0, mr.g)().moveDeadzone,
            dpad: Sr,
            dtMs: rr.dtMs,
            cursorSpeedPercent: (0, mr.g)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: Zr
            }
          })
        }
        move(rr) {
          this.targets.revalidate();
          const Sr = this.currentTarget();
          Sr && this.setFocus(US(Sr, this.getTargets().targets, rr))
        }
        step(rr) {
          const Sr = this.pointer;
          if (Sr && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((rr, Sr, Qr) => {
            var Zr;
            const Wr = {
              key: "",
              rect: {
                left: rr.x,
                top: rr.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (Zr = US(Wr, Sr, Qr)) && void 0 !== Zr ? Zr : tS(rr, Sr)
          })(Sr, this.getTargets().targets, rr));
          this.move(rr)
        }
        isNavButton(rr) {
          return !dS.some((Sr => (0, pr.k)(Sr) === rr)) && !(rr === (0, pr.k)("inventory") && rQ())
        }
        handleNavigation(rr, Sr) {
          const Qr = (0, mr.g)().inventoryNavigation,
            Zr = {
              x: 0,
              y: 0
            };
          let Wr = null;
          for (const fr of Ur.y) {
            const ar = this.isNavButton(fr) && rr.isHeld(fr);
            ar && (Zr.x += JS[fr].x, Zr.y += JS[fr].y), this.dpadTimers.get(fr).update(ar, Sr) && "cursor" !== Qr && (Wr ??= fr)
          }
          const ar = this.stickGate.update(rr.leftStick, (0, mr.g)().moveDeadzone);
          if (Wr && (this.step(Wr), this.stickGate.lock()), "slot" !== Qr) {
            const Sr = ((rr, Sr, Qr, Zr) => "hybrid" !== rr ? "cursor" === rr : !Zr && (Sr || Qr))(Qr, null !== this.pointer, ar, null !== Wr);
            return Sr && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(rr, "cursor" === Qr ? Zr : {
              x: 0,
              y: 0
            }))
          }
          const jr = (0, Ur.h)(rr.leftStick, (0, mr.g)().moveDeadzone),
            Ir = this.stickRepeat.update(ar ? (0, Ur.eb)(jr) : null, Sr);
          Ir && this.move(Ir)
        }
        applyCategoryPlace() {
          const rr = this.placeAfterCategory;
          if (!rr) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const Sr = tS(IS(rr.rect), this.getTargets().targets, (Sr => Sr.scrollGroup === rr.scrollGroup));
          this.setFocus(Sr, !1)
        }
        applyFocusRequest() {
          const rr = (0, dr.q)();
          rr && (this.targets.invalidate(), this.setFocus((0, dr.d)(this.getTargets().targets, rr)))
        }
        handlePanels(rr) {
          var Sr, Qr, Zr;
          const Wr = rr.wasPressed((0, pr.k)("inventoryPanelPrevious")),
            ar = rr.wasPressed((0, pr.k)("inventoryPanelNext"));
          if (!Wr && !ar) return;
          const {
            targets: jr
          } = this.getTargets(), Ir = (fr = ((rr, Sr) => {
            const Qr = [];
            for (const Wr of rr) Wr.visible && !Qr.includes(Wr.panel) && Qr.push(Wr.panel);
            const Zr = rr => {
              const Zr = Sr.indexOf(rr);
              return -1 === Zr ? Sr.length + Qr.indexOf(rr) : Zr
            };
            return Qr.sort(((rr, Sr) => Zr(rr) - Zr(Sr)))
          })(jr, vS), Er = null !== (Sr = null === (Qr = this.focusTarget) || void 0 === Qr ? void 0 : Qr.panel) && void 0 !== Sr ? Sr : null, xr = ar ? 1 : -1, 0 === fr.length ? null : fr[fS(null === Er ? -1 : fr.indexOf(Er), fr.length, xr)]);
          var fr, Er, xr;
          if (null === Ir) return;
          const mr = this.panelMemory.get(Ir),
            Nr = jr.filter((rr => rr.panel === Ir)),
            Ur = null !== (Zr = Nr.find((rr => rr.element === mr && rr.visible))) && void 0 !== Zr ? Zr : QQ(Nr, (0, dr.e)());
          this.setFocus(Ur)
        }
        handlePaging(rr, Sr) {
          const Qr = (0, pr.k)("menuPageUp"),
            Zr = (0, pr.k)("menuPageDown"),
            Wr = this.pageUpTimer.update(rr.isHeld(Qr), Sr),
            ar = this.pageDownTimer.update(rr.isHeld(Zr), Sr);
          if (!Wr && !ar) return;
          const jr = ar ? 1 : -1;
          if (!rr.wasPressed(ar ? Zr : Qr) && this.hasCategories) return;
          if ((rr => {
              const Sr = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === Sr.length) return !1;
              const Qr = Sr.findIndex((rr => rr.classList.contains("Selected"))),
                Zr = Sr[fS(Qr, Sr.length, rr)];
              return (0, cr.o)(Zr, (0, cr.A)(Zr)), !0
            })(jr)) {
            var Ir, fr;
            this.targets.invalidate();
            const rr = null !== (Ir = null === (fr = this.focusTarget) || void 0 === fr ? void 0 : fr.scrollGroup) && void 0 !== Ir ? Ir : null,
              Sr = this.readFocusRect();
            return void(this.placeAfterCategory = null !== rr && Sr && !this.pointer ? {
              rect: Sr,
              scrollGroup: rr
            } : null)
          }
          const {
            targets: Er
          } = this.getTargets(), xr = this.currentTarget(), mr = xr && CS(xr) ? xr : Er.find((rr => CS(rr) && rr.visible));
          if (!mr) return;
          const Nr = ((rr, Sr, Qr, Zr) => {
            if (null === rr.scrollGroup) return null;
            const Wr = IS(rr.rect),
              ar = Wr.x,
              jr = Wr.y + ("Down" === Qr ? Zr : -Zr);
            let Ir = null,
              fr = 1 / 0;
            for (const Er of Sr) {
              if (Er.scrollGroup !== rr.scrollGroup || Er.key === rr.key) continue;
              const Sr = IS(Er.rect);
              if ("Down" === Qr ? Sr.y <= Wr.y : Sr.y >= Wr.y) continue;
              const Zr = Math.hypot(Sr.x - ar, Sr.y - jr);
              Zr < fr && (Ir = Er, fr = Zr)
            }
            return Ir
          })(mr, Er, jr > 0 ? "Down" : "Up", mr.scrollContainer.clientHeight);
          this.setFocus(null !== Nr && void 0 !== Nr ? Nr : mr)
        }
        handleScroll(rr) {
          var Sr, Qr, Zr, Wr, ar, jr;
          if (!this.scroller.isScrolling(rr.rightStick)) return void this.scroller.reset();
          const {
            targets: Ir
          } = this.getTargets(), fr = this.pointer, Er = !fr && this.focusTarget && CS(this.focusTarget) ? this.focusTarget.scrollContainer : null, pr = fr && (null === (Sr = Ir.find((rr => rr.clip && zS(rr.clip, fr)))) || void 0 === Sr ? void 0 : Sr.scrollContainer), xr = null !== (Qr = null !== (Zr = null !== (Wr = this.scroller.current()) && void 0 !== Wr ? Wr : pr) && void 0 !== Zr ? Zr : Er) && void 0 !== Qr ? Qr : null === (ar = Ir.find(CS)) || void 0 === ar ? void 0 : ar.scrollContainer;
          if (!xr || !this.scroller.step(xr, rr.rightStick, rr.dtMs)) return;
          this.targets.scrolled(xr);
          const mr = fr || (null === (jr = this.focusTarget) || void 0 === jr ? void 0 : jr.scrollContainer) !== xr ? null : this.readFocusRect();
          if (!mr) return;
          const Nr = Rr(xr),
            Ur = IS(mr);
          if (Ur.y < Nr.top || Ur.y > Nr.bottom) {
            const rr = this.focusTarget.scrollGroup,
              Sr = tS(Ur, this.getTargets().targets, (Sr => Sr.scrollGroup === rr));
            this.setFocus(Sr, !1)
          }
        }
        focusContext(rr) {
          const {
            kind: Sr,
            idx: Qr
          } = this.focused ? PS(this.focused) : {
            kind: null,
            idx: null
          }, Zr = this.focused ? lS(this.focused) : null, Wr = Zr ? (0, FS.c)(Zr) : null;
          return {
            kind: Sr,
            idx: Qr,
            actionElement: Zr,
            press: Wr,
            hasPress: null !== Wr,
            hasBack: !(null === Wr || void 0 === Wr || !Wr.back),
            holding: rr.isHolding(),
            slotHasItem: null !== Qr && rr.hasItemAt(Qr)
          }
        }
        handleButtons(rr, Sr, Qr) {
          var Zr, Wr;
          if (!this.activePress || rr.isHeld(this.activePress.button) && (Zr = this.activePress.target, Wr = this.focused, null !== Zr.recipe ? XS(Wr).recipe === Zr.recipe : Wr === Zr.element) || this.releasePress(), this.scrollStickClick.update(rr.rightStick, Sr), !this.handleHotbarPick(rr, Qr)) {
            for (const [Zr, Wr] of DS) {
              const ar = (0, pr.k)(Wr);
              if (!rr.wasPressed(ar) || "openButton" === Zr && !rQ()) continue;
              if ("RS" === ar && !this.scrollStickClick.allowsClick(Sr)) continue;
              const jr = this.focusContext(Qr),
                Ir = Jr(Zr, jr);
              Ir && this.runIntent(Ir, jr, ar, Qr)
            }
            this.handleDrop(rr, Sr, Qr)
          }
        }
        handleHotbarPick(rr, Sr) {
          const Qr = this.hotbarPick;
          if (!Qr) return !1;
          const Zr = rr.wasPressed((0, pr.k)("inventoryPrimary")) || rr.wasPressed((0, pr.k)("inventoryHotbarSwap"));
          if (!Zr && !rr.wasPressed((0, pr.k)("inventoryClose")) && !Sr.isHolding()) return !(rr.wasPressed((0, pr.k)("inventory")) && rQ());
          const Wr = this.focusTarget;
          Zr && "hotbar" === (null === Wr || void 0 === Wr ? void 0 : Wr.panel) && null !== Wr.idx && Wr.idx !== Qr.idx && (Sr.swapWithHotbar(Wr.idx, Qr.idx), this.afterAction()), this.hotbarPick = null;
          const ar = Qr.element.isConnected ? this.getTargets().byElement.get(Qr.element) : void 0;
          return ar && this.setFocus(ar), !0
        }
        startHotbarPick(rr) {
          var Sr;
          const {
            targets: Qr,
            byElement: Zr
          } = this.getTargets(), Wr = document.querySelector(bS), ar = null !== (Sr = Wr && Zr.get(Wr)) && void 0 !== Sr ? Sr : Qr.find((rr => "hotbar" === rr.panel));
          ar && this.focused && (this.hotbarPick = {
            idx: rr,
            element: this.focused
          }, this.setFocus(ar))
        }
        focusKey() {
          return this.focused ? QS(this.focused) : null
        }
        handleDrop(rr, Sr, Qr) {
          const Zr = (0, pr.k)("inventoryDrop");
          if (rr.wasPressed(Zr)) {
            const rr = (Wr = this.focusContext(Qr)).holding ? {
              kind: "wI"
            } : "slot" === Wr.kind && Wr.slotHasItem && null !== Wr.idx ? {
              kind: "slot",
              idx: Wr.idx
            } : null;
            return void(rr && (this.dropFrom(rr, !1, Qr), this.dropLatch.press(rr, this.focusKey(), Sr, hr.c[(0, mr.g)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var Wr;
          const ar = this.dropLatch.update(rr.isHeld(Zr), this.focusKey(), Sr);
          ar && ((rr, Sr, Qr) => "wI" === rr.kind ? Sr : !Sr && Qr(rr.idx))(ar, Qr.isHolding(), Qr.hasItemAt) && (this.dropFrom(ar, !0, Qr), this.afterAction())
        }
        dropFrom(rr, Sr, Qr) {
          "wI" === rr.kind ? Qr.dropHeld(Sr, this.slotPoint()) : Qr.dropSlot(rr.idx, Sr)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (rr => {
            const Sr = IS(rr);
            return {
              clientX: Sr.x,
              clientY: Sr.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(rr, Sr, Qr, Zr) {
          const Wr = Sr.idx,
            ar = Sr.actionElement;
          switch (ar && SQ.has(rr) && (0, zr.A)(ar), rr) {
            case "slotPrimary":
              Zr.primary(Wr, this.slotPoint());
              break;
            case "slotSecondary":
              Zr.secondary(Wr, this.slotPoint());
              break;
            case "slotQuickMove":
              Zr.quickMove(Wr, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(Wr);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(Sr.press, "pressPrimary" === rr ? "primary" : "secondary", Qr);
              break;
            case "click":
              (0, cr.o)(ar, (0, cr.A)(ar));
              break;
            case "openKeyboard":
              (0, cr.P)(ar) && (0, cr.M)(ar);
              break;
            case "pressBack":
              Sr.press.back();
              break;
            case "cancel":
              Zr.cancel();
              break;
            case "close":
              return this.releasePress(), void Zr.close()
          }
          this.afterAction()
        }
        startPress(rr, Sr, Qr) {
          this.releasePress(), rr.press(Sr) && (this.activePress = {
            handlers: rr,
            button: Qr,
            target: XS(this.focused)
          })
        }
        releasePress() {
          var rr, Sr, Qr;
          null === (rr = this.activePress) || void 0 === rr || null === (Sr = (Qr = rr.handlers).release) || void 0 === Sr || Sr.call(Qr), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(rr) {
          ((rr, Sr) => {
            var Qr, Zr, Wr, ar, jr, Ir;
            return rr.showing === Sr.showing && rr.kind === Sr.kind && rr.holding === Sr.holding && rr.slotHasItem === Sr.slotHasItem && (null === (Qr = rr.pressHints) || void 0 === Qr ? void 0 : Qr.primary) === (null === (Zr = Sr.pressHints) || void 0 === Zr ? void 0 : Zr.primary) && (null === (Wr = rr.pressHints) || void 0 === Wr ? void 0 : Wr.secondary) === (null === (ar = Sr.pressHints) || void 0 === ar ? void 0 : ar.secondary) && (null === (jr = rr.pressHints) || void 0 === jr ? void 0 : jr.back) === (null === (Ir = Sr.pressHints) || void 0 === Ir ? void 0 : Ir.back) && rr.hasCategories === Sr.hasCategories && rr.hasList === Sr.hasList && rr.openButtonCloses === Sr.openButtonCloses && rr.steppingSlots === Sr.steppingSlots && rr.hotbarPicking === Sr.hotbarPicking && rr.quickMoveToHotbar === Sr.quickMoveToHotbar && rr.dropStackHold === Sr.dropStackHold
          })(rr, this.state) || (this.state = rr, Er.i.Jp(GS.e, rr))
        }
      },
      aQ = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var jQ = Qr(9799),
      IQ = Qr(360),
      fQ = Qr(1758),
      EQ = Qr(9309);
    const pQ = "[data-pad-secondary]",
      xQ = rr => rr instanceof HTMLElement && (0, sr.t)(rr) && !(0, sr.w)(rr),
      mQ = rr => {
        const Sr = rr.querySelector(pQ);
        if (Sr && xQ(Sr)) return Sr;
        for (const Wr of null !== (Qr = null === (Zr = rr.parentElement) || void 0 === Zr ? void 0 : Zr.children) && void 0 !== Qr ? Qr : []) {
          var Qr, Zr;
          if (Wr !== rr && Wr.matches(pQ) && xQ(Wr)) return Wr
        }
        return null
      },
      NQ = (rr, Sr, Qr, Zr) => Math.max(0, Math.max(rr, Qr) - Math.min(Sr, Zr)),
      UQ = (rr, Sr, Qr, Zr) => Math.max(0, Math.min(Sr, Zr) - Math.max(rr, Qr)),
      tQ = (rr, Sr, Qr) => {
        const Zr = (rr.left + rr.right) / 2,
          Wr = (rr.top + rr.bottom) / 2,
          ar = (Sr.left + Sr.right) / 2,
          jr = (Sr.top + Sr.bottom) / 2;
        if ("Left" === Qr || "Right" === Qr) {
          const Ir = "Right" === Qr ? 1 : -1;
          return {
            forwardGap: "Right" === Qr ? Sr.left - rr.right : rr.left - Sr.right,
            centreForward: (ar - Zr) * Ir,
            sidewaysGap: NQ(rr.top, rr.bottom, Sr.top, Sr.bottom),
            sidewaysOverlap: UQ(rr.top, rr.bottom, Sr.top, Sr.bottom),
            centreSideways: Math.abs(jr - Wr),
            startSideways: Math.abs(Sr.top - rr.top),
            fromSidewaysSize: rr.bottom - rr.top,
            toSidewaysSize: Sr.bottom - Sr.top,
            toLength: Sr.right - Sr.left
          }
        }
        const Ir = "Down" === Qr ? 1 : -1;
        return {
          forwardGap: "Down" === Qr ? Sr.top - rr.bottom : rr.top - Sr.bottom,
          centreForward: (jr - Wr) * Ir,
          sidewaysGap: NQ(rr.left, rr.right, Sr.left, Sr.right),
          sidewaysOverlap: UQ(rr.left, rr.right, Sr.left, Sr.right),
          centreSideways: Math.abs(ar - Zr),
          startSideways: Math.abs(Sr.left - rr.left),
          fromSidewaysSize: rr.right - rr.left,
          toSidewaysSize: Sr.right - Sr.left,
          toLength: Sr.bottom - Sr.top
        }
      },
      hQ = rr => rr.centreForward > .5 && rr.forwardGap >= -rr.toLength / 2,
      zQ = rr => {
        const Sr = rr.sidewaysOverlap > 0 ? 0 : 2 * rr.fromSidewaysSize,
          Qr = rr.fromSidewaysSize > 1.5 * rr.toSidewaysSize ? rr.startSideways : rr.centreSideways;
        return Math.max(0, rr.forwardGap) + 3 * rr.sidewaysGap + Sr + .1 * Qr
      },
      YQ = (rr, Sr) => UQ(rr.top, rr.bottom, Sr.top, Sr.bottom) > 0 || Sr.bottom - Sr.top > Sr.right - Sr.left,
      nQ = (rr, Sr, Qr, Zr, Wr, ar) => {
        const jr = Wr ? KQ(rr, Sr, Qr, Wr) : new Set,
          Ir = BQ(rr, Sr, Qr, jr);
        return Ir < 0 && jr.size > 0 && ar ? eQ(rr, Sr, Qr, ar) : Zr && Ir >= 0 ? yQ(rr, Sr, Qr, Zr, Ir, jr) : Ir
      },
      eQ = (rr, Sr, Qr, Zr) => {
        const Wr = new Set,
          ar = BQ(rr, Sr, "Up", Wr) >= 0,
          jr = BQ(rr, Sr, "Down", Wr) >= 0,
          Ir = new Set;
        return Sr.forEach(((Sr, Qr) => {
          const Wr = Sr.top + Sr.bottom < rr.top + rr.bottom;
          Zr[Qr] && !(Wr ? ar : jr) || Ir.add(Qr)
        })), BQ(rr, Sr, Qr, Ir)
      },
      KQ = (rr, Sr, Qr, Zr) => {
        const Wr = new Set;
        return "Left" !== Qr && "Right" !== Qr || Sr.forEach(((Sr, Qr) => {
          Zr[Qr] && UQ(rr.top, rr.bottom, Sr.top, Sr.bottom) <= 0 && Wr.add(Qr)
        })), Wr
      },
      yQ = (rr, Sr, Qr, Zr, Wr, ar) => {
        const jr = tQ(rr, Sr[Wr], Qr).forwardGap;
        let Ir = Wr,
          fr = Zr[Wr],
          Er = 1 / 0;
        return Sr.forEach(((Sr, pr) => {
          const xr = Zr[pr];
          if (ar.has(pr) || xr < fr || xr === fr && Ir === Wr) return;
          const mr = tQ(rr, Sr, Qr);
          if (!hQ(mr) || mr.forwardGap < 0 || mr.forwardGap >= jr) return;
          const Nr = zQ(mr);
          (xr > fr || Nr < Er) && (Ir = pr, fr = xr, Er = Nr)
        })), Ir
      },
      BQ = (rr, Sr, Qr, Zr) => {
        let Wr = -1,
          ar = 1 / 0;
        if (Sr.forEach(((Sr, jr) => {
            const Ir = ((rr, Sr, Qr) => {
              const Zr = tQ(rr, Sr, Qr);
              if (!hQ(Zr)) return null;
              const Wr = Math.max(0, Zr.forwardGap);
              return Zr.sidewaysOverlap <= 0 && Zr.sidewaysGap > 2 * (Wr + 1) ? null : zQ(Zr)
            })(rr, Sr, Qr);
            null !== Ir && Ir < ar && !Zr.has(jr) && (ar = Ir, Wr = jr)
          })), Wr < 0) return -1;
        const jr = Sr[Wr],
          Ir = tQ(rr, jr, Qr).forwardGap;
        let fr = Ir,
          Er = Wr;
        return Sr.forEach(((Sr, ar) => {
          if (ar === Wr || Zr.has(ar) || !((rr, Sr, Qr) => {
              const Zr = "Left" === Qr || "Right" === Qr,
                Wr = Zr ? UQ(rr.top, rr.bottom, Sr.top, Sr.bottom) : UQ(rr.left, rr.right, Sr.left, Sr.right),
                ar = Zr ? Math.min(rr.bottom - rr.top, Sr.bottom - Sr.top) : Math.min(rr.right - rr.left, Sr.right - Sr.left);
              return Wr > 0 && Wr >= ar / 2
            })(Sr, jr, Qr)) return;
          const pr = tQ(rr, Sr, Qr);
          hQ(pr) && pr.forwardGap + pr.toLength <= Ir + 1 && pr.forwardGap < fr && (fr = pr.forwardGap, Er = ar)
        })), Er
      },
      TQ = (rr, Sr) => {
        let Qr = -1,
          Zr = 1 / 0;
        return Sr.forEach(((Sr, Wr) => {
          const ar = Math.max(Sr.left - rr.x, 0, rr.x - Sr.right),
            jr = Math.max(Sr.top - rr.y, 0, rr.y - Sr.bottom),
            Ir = Math.hypot(ar, jr);
          Ir < Zr && (Zr = Ir, Qr = Wr)
        })), Qr
      },
      vQ = (rr, Sr) => {
        const Qr = Math.min(rr.bottom - rr.top, Sr.bottom - Sr.top) / 2;
        return Math.abs(rr.top - Sr.top) > Qr ? rr.top - Sr.top : rr.left - Sr.left
      },
      OQ = rr => {
        let Sr = -1;
        for (let Qr = 0; Qr < rr.length; Qr++)(Sr < 0 || vQ(rr[Qr], rr[Sr]) < 0) && (Sr = Qr);
        return Sr
      };
    var LQ = Qr(1811),
      lQ = Qr(9806),
      XQ = Qr(9813);
    const PQ = rr => {
        if ("death" !== rr || "inGame" !== fr.c.get("gameState") || "off" === (0, mr.g)().quickChat || null === (0, LQ.c)()) return !1;
        const Sr = (0, pr.k)("chat");
        return Sr !== (0, pr.k)("menuConfirm") && Sr !== (0, pr.k)("menuBack")
      },
      HQ = new lQ.c;
    var qQ = Qr(4961),
      RQ = Qr(9818),
      gQ = Qr(9827);
    const CQ = rr => {
        let Sr = null;
        for (const Qr of rr.querySelectorAll("[data-pad-tabs]"))(0, sr.t)(Qr) && (!Sr || Number(Qr.dataset.padTabs) < Number(Sr.dataset.padTabs)) && (Sr = Qr);
        return Sr
      },
      MQ = (rr, Sr, Qr, Zr) => {
        rr.focusWhenFound((() => {
          const Wr = rr.pickInitial(Sr);
          if (Wr && !Qr.has(Wr) && (null === Zr || void 0 === Zr || !Zr.contains(Wr))) return Wr;
          const ar = ((rr, Sr) => {
              const Qr = Sr => rr.getEnabledCandidates(Sr).filter((rr => !rr.closest("[data-pad-tabs]")));
              for (const Zr of (0, sr.j)(Sr)) {
                const rr = Qr(Zr);
                if (rr.length > 0) return rr
              }
              return Qr(Sr)
            })(rr, Sr).filter((rr => !Qr.has(rr))),
            jr = OQ(ar.map((rr => rr.getBoundingClientRect())));
          return jr >= 0 ? ar[jr] : null
        }), 3e3)
      },
      GQ = (rr, Sr, Qr, Zr) => {
        var Wr;
        const ar = ((rr, Sr) => {
          if (0 === rr.length) return null;
          const Qr = rr.findIndex((rr => "true" === rr.dataset.padSelected));
          return Qr < 0 ? Sr > 0 ? rr[0] : rr[rr.length - 1] : rr[(Qr + Sr + rr.length) % rr.length]
        })([...Qr.querySelectorAll("[data-pad-tab]")].filter((rr => (0, sr.t)(rr) && !(0, sr.w)(rr))), Zr);
        if (!ar) return;
        const jr = null !== (Wr = null === rr || void 0 === rr ? void 0 : rr.getFocused()) && void 0 !== Wr ? Wr : null,
          Ir = !(null === jr || void 0 === jr || !jr.isConnected) && Qr.contains(jr),
          fr = rr && !Ir ? new Set(rr.getEnabledCandidates(Sr)) : null;
        (0, cr.c)(ar), rr && (fr ? MQ(rr, Sr, fr, Qr) : rr.setFocus(ar, {
          byUser: !0
        }))
      },
      kQ = rr => {
        var Sr;
        const Qr = Rr(null !== (Sr = Lr(rr, "x")) && void 0 !== Sr ? Sr : rr),
          Zr = (0, sr.f)(rr).filter((rr => !(0, sr.w)(rr))),
          Wr = Zr.filter((rr => gr(rr.getBoundingClientRect(), Qr)));
        return (Wr.length > 0 ? Wr : Zr).sort(((rr, Sr) => vQ(rr.getBoundingClientRect(), Sr.getBoundingClientRect())))
      },
      AQ = (rr, Sr, Qr) => {
        const Zr = [...Sr.querySelectorAll("[data-pad-row]")].filter(sr.t),
          Wr = rr.getFocused(),
          ar = Wr ? Zr.findIndex((rr => rr.contains(Wr))) : -1;
        let jr = 0,
          Ir = Qr > 0 ? 0 : Zr.length - 1;
        if (ar >= 0 && Wr) jr = Math.max(0, kQ(Zr[ar]).indexOf(Wr)), Ir = ar + Qr;
        else if (Wr) {
          const rr = Wr.getBoundingClientRect(),
            Sr = Zr.map((Sr => {
              const Zr = Sr.getBoundingClientRect();
              return Qr > 0 ? Zr.top >= rr.top : Zr.bottom <= rr.bottom
            }));
          Ir = Qr > 0 ? Sr.indexOf(!0) : Sr.lastIndexOf(!0)
        }
        for (let fr = Ir; fr >= 0 && fr < Zr.length; fr += Qr) {
          const Sr = kQ(Zr[fr]);
          if (Sr.length > 0) return void rr.setFocus(Sr[Math.min(jr, Sr.length - 1)], {
            byUser: !0
          })
        }
      },
      VQ = (rr, Sr, Qr) => {
        var Zr, Wr;
        const ar = null !== (Zr = null === rr || void 0 === rr ? void 0 : rr.getFocused()) && void 0 !== Zr ? Zr : null,
          jr = null !== ar && void 0 !== ar && ar.closest("[data-pad-row]") ? "x" : "y",
          Ir = null !== (Wr = ar ? Lr(ar, jr, Sr) : null) && void 0 !== Wr ? Wr : Xr(Sr, jr);
        if (!Ir) return;
        const fr = ar ? (0, cr.A)(ar) : null;
        if (qr(Ir, jr, Qr * ("y" === jr ? Ir.clientHeight : Ir.clientWidth) * .85), !rr || !fr) return;
        const Er = Rr(Ir),
          pr = rr.getEnabledCandidates(Sr).filter((rr => Ir.contains(rr) && gr(rr.getBoundingClientRect(), Er))),
          xr = TQ(fr, pr.map((rr => rr.getBoundingClientRect())));
        xr >= 0 && rr.setFocus(pr[xr], {
          scroll: !1,
          byUser: !0
        })
      };
    let iQ = null;
    const wQ = (rr, Sr) => {
        var Qr, Zr;
        const Wr = Sr.querySelector("[data-pad-friends-column]"),
          ar = rr.getFocused();
        if (!Wr || !ar || !Wr.contains(ar)) return !1;
        const jr = rr.getEnabledCandidates(Sr).filter((rr => !Wr.contains(rr))),
          Ir = TQ((0, cr.A)(ar), jr.map((rr => rr.getBoundingClientRect()))),
          fr = null === (Qr = iQ) || void 0 === Qr ? void 0 : Qr.deref();
        return rr.setFocus(null !== fr && void 0 !== fr && fr.isConnected ? fr : null !== (Zr = jr[Ir]) && void 0 !== Zr ? Zr : null, {
          byUser: !0
        }), !0
      },
      cQ = rr => {
        const Sr = (0, pr.k)(rr);
        return (0, Ur.E)(Sr) || EQ.y.some((rr => (0, pr.k)(rr) === Sr)) ? null : Sr
      },
      FQ = (rr, Sr) => {
        const Qr = cQ(Sr);
        return null !== Qr && rr.wasPressed(Qr)
      },
      oQ = function(rr, Sr, Qr) {
        let Zr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Wr = (rr => {
            var Sr, Qr;
            return null !== (Sr = null === (Qr = CQ(rr)) || void 0 === Qr ? void 0 : Qr.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== Sr ? Sr : null
          })(Sr),
          ar = rr && Wr ? new Set(rr.getEnabledCandidates(Sr)) : null;
        (0, jQ.e)(), Qr === IQ.q.SETTINGS && (0, fQ.i)(fr.c.get("openEverythingMenuName")) ? fr.c.set({
          openEverythingMenuName: Qr
        }) : (0, fQ.s)((0, gQ.e)("padMenuShortcut"), Qr, Zr), rr && ar && Wr && MQ(rr, Sr, ar, Wr.closest("[data-pad-tabs]"))
      },
      bQ = rr => null !== rr.closest(".Dropdown-root") || null !== rr.querySelector(".Dropdown-root.is-open"),
      JQ = rr => null !== (0, RQ.d)() && "popup" !== rr.layer.kind && !CQ(rr.root) && !bQ(rr.root),
      DQ = (0, tr.c)(Ur.Y),
      dQ = (0, tr.c)(Ur.Y),
      sQ = (rr, Sr, Qr) => {
        if (((rr, Sr) => {
            const Qr = (0, pr.k)("chat");
            return PQ(Sr) && rr.isHeld(Qr) ? "hold" === HQ.update(rr.wasPressed(Qr), rr.isHeld(Qr), performance.now(), hr.c[(0, mr.g)().tapHoldTime].wheelMs) && (xr.d.consumeButton(Qr), Er.i.Jp(XQ.k), !0) : (HQ.release(), !1)
          })(Sr, Qr.layer.kind)) return !0;
        const Zr = Qr.root;
        for (const [jr, Ir] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (Sr.wasPressed((0, pr.k)(jr))) {
            const Sr = bQ(Zr) ? null : CQ(Zr);
            if (Sr) GQ(rr, Zr, Sr, Ir);
            else if (JQ(Qr)) {
              var Wr;
              const Sr = rr ? new Set(rr.getEnabledCandidates(Zr)) : null;
              null !== (Wr = (0, RQ.d)()) && void 0 !== Wr && Wr(Ir) && rr && Sr && MQ(rr, Zr, Sr, null)
            } else rr && AQ(rr, Zr, Ir);
            return !0
          } for (const [jr, Ir, fr] of [
            ["menuPageUp", -1, DQ],
            ["menuPageDown", 1, dQ]
          ]) {
          const Qr = (0, pr.k)(jr);
          if (Sr.wasPressed(Qr) && fr.reset(), fr.update(Sr.isHeld(Qr), performance.now())) return VQ(rr, Zr, Ir), !0
        }
        const ar = "popup" === Qr.layer.kind;
        return FQ(Sr, "pause") ? (ar || (0, fQ.p)() && "menu" !== Qr.layer.kind || oQ(rr, Zr, (0, fQ.p)() ? IQ.q.SETTINGS : (0, qQ.c)()), !0) : !!FQ(Sr, "leaderboard") && ("home" === Qr.layer.kind ? (rr => {
          const Sr = [...rr.querySelectorAll("[data-pad-notifications]")].find(sr.t);
          Sr && (0, cr.c)(Sr)
        })(Zr) : ar || oQ(rr, Zr, IQ.q.LOBBY_LEADERBOARD, "inGame" === fr.c.get("gameState")), !0)
      },
      uQ = (rr, Sr, Qr) => {
        if (sQ(rr, Sr, Qr)) return !0;
        const Zr = "home" === Qr.layer.kind;
        if (Sr.wasPressed((0, pr.k)("menuSecondary"))) {
          const Sr = rr.getFocused(),
            Wr = Sr ? mQ(Sr) : null;
          if (Wr) return (0, cr.c)(Wr), !0;
          if (Zr) {
            const Sr = Qr.root.querySelector("[data-pad-search] input");
            return Sr && (0, sr.v)(Sr, Qr.root) ? (rr.setFocus(Sr, {
              byUser: !0
            }), (0, cr.c)(Sr)) : fr.c.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!Zr || !FQ(Sr, "inventory")) && (((rr, Sr) => {
          var Qr, Zr;
          const Wr = Sr.querySelector("[data-pad-friends-column]");
          if (!Wr || !(0, sr.t)(Wr)) return void(0, fQ.s)((0, gQ.e)("padMenuShortcut"), IQ.q.SOCIAL);
          if (wQ(rr, Sr)) return;
          const ar = null !== (Qr = null === (Zr = Wr.querySelector("[data-pad-friends-start]")) || void 0 === Zr ? void 0 : Zr.getBoundingClientRect().top) && void 0 !== Qr ? Qr : -1 / 0,
            jr = rr.getEnabledCandidates(Wr),
            Ir = jr.filter((rr => rr.getBoundingClientRect().top >= ar)),
            fr = Ir.length > 0 ? Ir : jr,
            Er = OQ(fr.map((rr => rr.getBoundingClientRect())));
          rr.setFocus(Er >= 0 ? fr[Er] : null, {
            byUser: !0
          })
        })(rr, Qr.root), !0)
      },
      rZ = rr => {
        var Sr, Qr, Zr;
        const Wr = (0, cr.D)(rr);
        if (null !== Wr) return Wr;
        const ar = (null !== (Sr = null !== (Qr = null !== (Zr = rr.getAttribute("aria-label")) && void 0 !== Zr ? Zr : rr.getAttribute("title")) && void 0 !== Qr ? Qr : rr.textContent) && void 0 !== Sr ? Sr : "").replace(/\s+/g, " ").trim();
        return ar ? `${rr.tagName}:${ar.slice(0,100)}` : null
      };
    class SZ {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(rr) {
        const Sr = this.history.indexOf(rr);
        if (Sr >= 0) {
          for (const rr of this.history.splice(Sr + 1)) this.remembered.delete(rr);
          return !0
        }
        return this.remembered.delete(rr), this.history.push(rr), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(rr) {
        this.remembered.delete(rr);
        const Sr = this.history.indexOf(rr);
        Sr >= 0 && this.history.splice(Sr, 1)
      }
      remember(rr, Sr, Qr, Zr) {
        const Wr = rZ(Sr),
          ar = (0, cr.D)(Sr),
          jr = null !== ar && ((rr, Sr) => {
            let Qr = 0;
            for (const Zr of rr.querySelectorAll("[data-pad-key], [href]"))
              if ((Zr.getAttribute("data-pad-key") === Sr || Zr.getAttribute("href") === Sr) && (Qr++, Qr > 1)) return !0;
            return !1
          })(Qr, ar) ? Math.max(0, this.twins(Zr(), ar).indexOf(Sr)) : 0;
        this.remembered.set(rr, {
          element: new WeakRef(Sr),
          identity: Wr,
          ordinal: jr
        })
      }
      has(rr) {
        return this.remembered.has(rr)
      }
      recall(rr, Sr) {
        var Qr, Zr;
        const Wr = this.remembered.get(rr);
        if (!Wr) return null;
        const ar = Wr.element.deref();
        if (ar && Sr.includes(ar)) return ar;
        if (null === Wr.identity) return null;
        const jr = this.twins(Sr, Wr.identity);
        return null !== (Qr = null !== (Zr = jr[Wr.ordinal]) && void 0 !== Zr ? Zr : jr[0]) && void 0 !== Qr ? Qr : null
      }
      twins(rr, Sr) {
        return rr.filter((rr => rZ(rr) === Sr))
      }
    }
    var QZ = Qr(1330);
    const ZZ = rr => {
        const Sr = [];
        let Qr = rr;
        for (; Qr && Qr !== document.body;) {
          const rr = getComputedStyle(Qr).zIndex;
          "auto" !== rr && Sr.push(Number(rr) || 0), Qr = Qr.parentElement
        }
        return Sr.reverse()
      },
      WZ = (rr, Sr) => {
        const Qr = ((rr, Sr) => {
          const Qr = Math.max(rr.length, Sr.length);
          for (let ar = 0; ar < Qr; ar++) {
            var Zr, Wr;
            const Qr = (null !== (Zr = rr[ar]) && void 0 !== Zr ? Zr : 0) - (null !== (Wr = Sr[ar]) && void 0 !== Wr ? Wr : 0);
            if (0 !== Qr) return Qr
          }
          return 0
        })(ZZ(rr), ZZ(Sr));
        if (0 !== Qr) return Qr > 0;
        if (rr.contains(Sr)) return !1;
        if (Sr.contains(rr)) return !0;
        const Zr = rr.compareDocumentPosition(Sr);
        return !!(Zr & Node.DOCUMENT_POSITION_PRECEDING) || !(Zr & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      aZ = (rr, Sr) => {
        var Qr;
        return null !== (Qr = WZ(rr.root, Sr.root)) && void 0 !== Qr ? Qr : rr.order > Sr.order
      },
      jZ = (rr, Sr) => Sr.some((Sr => !Sr.contains(rr) && !rr.contains(Sr) && !0 === WZ(Sr, rr)));
    let IZ = null,
      fZ = null,
      EZ = -1;
    const pZ = () => {
        var rr;
        const Sr = null === (rr = document.timeline) || void 0 === rr ? void 0 : rr.currentTime,
          Qr = "number" === typeof Sr ? Sr : null;
        if (null !== Qr && Qr === fZ && EZ === (0, QZ.d)()) return IZ;
        let Zr = null;
        const Wr = [],
          ar = [...document.querySelectorAll("[data-pad-covers]")].filter(sr.t);
        for (const jr of (0, QZ.e)()) {
          const rr = jr.getRoot(),
            Sr = !!rr && (0, sr.t)(rr) && !jZ(rr, ar);
          if (jr.shown && !Sr && Wr.push(jr), jr.shown = Sr, !rr || !Sr) continue;
          const Qr = {
            layer: jr,
            root: rr,
            order: jr.order
          };
          Zr && !aZ(Qr, Zr) || (Zr = Qr)
        }
        IZ = Zr, fZ = Qr, EZ = (0, QZ.d)();
        for (const jr of Wr)(0, QZ.i)(jr);
        return IZ
      },
      xZ = () => {
        const rr = pZ();
        return !(null === rr || void 0 === rr || !rr.layer.close) && (rr.layer.close(), fZ = null, !0)
      },
      mZ = () => {
        var rr, Sr;
        return null !== (rr = null === (Sr = pZ()) || void 0 === Sr ? void 0 : Sr.root) && void 0 !== rr ? rr : null
      },
      NZ = rr => rr ? {
        ...rr,
        root: mZ()
      } : null;
    let UZ = null,
      tZ = null,
      hZ = (0, mr.g)().menuNavigation,
      zZ = null;
    const YZ = new Kr;
    let nZ = null;
    Er.i.subscribe(mr.f, (() => {
      const rr = (0, mr.g)().menuNavigation;
      rr !== hZ && (hZ = rr, UZ = null, tZ = null)
    }));
    const eZ = () => {
        var rr;
        return null !== (rr = UZ) && void 0 !== rr ? rr : (0, mr.g)().menuNavigation
      },
      KZ = rr => {
        if (vZ()) {
          if (zZ = NZ(rr), "hybrid" === eZ()) return YZ.lock(), void(tZ = tZ ? null : mZ());
          UZ = "focus" === eZ() ? "cursor" : "focus"
        }
      },
      yZ = () => {
        const rr = zZ;
        return zZ = null, rr
      };
    let BZ = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const TZ = function(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const Qr = BZ.root === rr,
          Zr = Qr ? BZ.firstSeenMs : Sr,
          Wr = BZ.has || Sr - Zr > 1e3;
        return (!Qr || !Wr || Sr - BZ.atMs > 250) && (BZ = {
          root: rr,
          firstSeenMs: Zr,
          atMs: Sr,
          has: (0, sr.n)(rr)
        }), BZ.has
      },
      vZ = () => {
        const rr = mZ();
        return null !== rr && TZ(rr)
      },
      OZ = () => {
        const rr = pZ();
        return tZ && (null === rr || void 0 === rr ? void 0 : rr.root) !== tZ && (tZ = null), (rr => {
          let {
            mode: Sr,
            hasLayer: Qr,
            hasCandidates: Zr,
            hybridCursorEngaged: Wr
          } = rr;
          return Qr ? "cursor" !== Sr && Zr() ? "hybrid" === Sr && Wr ? "cursor" : "focus" : "cursor" : null
        })({
          mode: eZ(),
          hasLayer: null !== rr,
          hasCandidates: () => null !== rr && TZ(rr.root),
          hybridCursorEngaged: null !== tZ
        })
      },
      LZ = () => "hybrid" === eZ() && vZ(),
      lZ = "pad-focused";
    var XZ = Qr(5316),
      PZ = Qr(5986);
    const HZ = "[data-pad-destructive]",
      qZ = `${HZ}, [data-pad-back]`,
      RZ = rr => ({
        rect: rr.getBoundingClientRect(),
        destructive: rr.matches(HZ),
        closes: null !== rr.closest("[data-pad-close-button]"),
        unavailable: rr.matches("[data-pad-unavailable]")
      }),
      gZ = rr => {
        let {
          destructive: Sr,
          closes: Qr,
          unavailable: Zr
        } = rr;
        return Sr ? Qr ? 2 : 3 : Zr ? 1 : 0
      },
      CZ = rr => {
        let Sr = -1;
        for (let Qr = 0; Qr < rr.length; Qr++) {
          if (Sr < 0) {
            Sr = Qr;
            continue
          }
          const Zr = rr[Qr],
            Wr = rr[Sr];
          gZ(Zr) === gZ(Wr) ? vQ(Zr.rect, Wr.rect) < 0 && (Sr = Qr) : gZ(Zr) < gZ(Wr) && (Sr = Qr)
        }
        return Sr
      },
      MZ = "[data-pad-tabs]",
      GZ = "[data-pad-tab]",
      kZ = (rr, Sr) => {
        const Qr = rr.querySelector(`${GZ}[data-pad-selected='true']`);
        return Qr && Sr.includes(Qr) ? Qr : null
      },
      AZ = (rr, Sr) => {
        let Qr = Sr;
        for (let Zr = Sr.parentElement; Zr && !Zr.contains(rr); Zr = Zr.parentElement) Qr = Zr;
        return Qr
      };
    class VZ {
      constructor() {
        this.contentReturn = null
      }
      redirect(rr, Sr, Qr, Zr) {
        var Wr, ar;
        const jr = rr.closest(MZ),
          Ir = Sr.closest(MZ);
        var fr;
        if (Ir && Ir !== jr) return jr || (this.contentReturn = new WeakRef(rr)), null !== (fr = kZ(Ir, Qr)) && void 0 !== fr ? fr : Sr;
        if (!jr || Ir) return Sr;
        const Er = AZ(rr, Sr),
          pr = null === (Wr = this.contentReturn) || void 0 === Wr ? void 0 : Wr.deref();
        return pr && Er.contains(pr) && Qr.includes(pr) ? pr : null !== (ar = this.pickRegionStart(Er, Lr(Sr, "y", Zr), Qr)) && void 0 !== ar ? ar : Sr
      }
      findTabContent(rr, Sr, Qr) {
        const Zr = rr.closest(MZ);
        if (!Zr || !rr.matches(GZ) || Zr.contains(Sr)) return null;
        const Wr = Sr.closest(MZ);
        if (Wr && Number(Wr.dataset.padTabs) <= Number(Zr.dataset.padTabs)) return null;
        const ar = AZ(rr, Sr);
        return Qr.some((rr => ar.contains(rr) && !rr.closest(qZ))) || !Sr.closest(qZ) ? ar : null
      }
      pickContentStart(rr, Sr, Qr) {
        return this.contentReturn = null, this.pickRegionStart(rr, Lr(rr, "y", Qr), Sr)
      }
      pickReplacedContentStart(rr, Sr, Qr, Zr) {
        if (!Sr.contains(rr)) return null;
        const Wr = AZ(Sr, rr),
          ar = Qr.filter((rr => Sr.contains(rr) && !Wr.contains(rr) && !rr.closest(qZ)));
        return 0 === ar.length ? null : (this.contentReturn = null, this.pickRegionStart(Sr, Lr(ar[0], "y", Zr), ar))
      }
      backToStrip(rr, Sr, Qr) {
        if (rr.closest(MZ)) return null;
        const Zr = CQ(Qr);
        for (const Wr of Qr.querySelectorAll(MZ)) {
          if (Number(Wr.dataset.padTabs) <= 1 || Wr === Zr) continue;
          const ar = kZ(Wr, Sr),
            jr = ar ? AZ(rr, Wr).parentElement : null;
          if (ar && jr && jr !== Qr && Qr.contains(jr)) return this.contentReturn = new WeakRef(rr), ar
        }
        return null
      }
      pickRegionStart(rr, Sr, Qr) {
        const Zr = Rr(Sr),
          Wr = rr => {
            const Sr = Qr.filter((Sr => rr.contains(Sr) && !Sr.closest(MZ) && gr(Sr.getBoundingClientRect(), Zr))),
              Wr = CZ(Sr.map(RZ));
            return Wr >= 0 ? Sr[Wr] : null
          };
        for (const ar of (0, sr.j)(rr)) {
          const rr = Wr(ar);
          if (rr) return rr
        }
        for (const ar of rr.querySelectorAll(MZ)) {
          const rr = kZ(ar, Qr);
          if (rr) return rr
        }
        return Wr(rr)
      }
    }
    const iZ = "[data-pad-default-focus], .Dropdown-option.is-selected",
      wZ = ".Dropdown-root.is-open > .Dropdown-menu",
      cZ = "[data-pad-no-step-in]",
      FZ = "[data-pad-tabs]",
      oZ = "[data-pad-press-area]",
      bZ = rr => {
        let Sr = rr;
        for (let Qr = 0; Sr && Qr <= 4; Qr++, Sr = Sr.parentElement) {
          const Qr = Sr.querySelector(".CircleInfo");
          if (Qr) return Sr === rr || Sr.querySelectorAll(sr.b).length <= 1 ? Qr : null;
          if (Sr !== rr && Sr.querySelectorAll(sr.b).length > 1) return null
        }
        return null
      },
      JZ = (rr, Sr, Qr) => {
        (0, cr.p)(rr, Sr, Qr);
        const Zr = null !== rr && void 0 !== rr && rr.isConnected ? bZ(rr) : null,
          Wr = bZ(Sr);
        Zr !== Wr && (0, cr.p)(Zr, Wr, Wr ? (0, cr.A)(Wr) : Qr, {
          leaveBelow: rr,
          enterBelow: Sr
        })
      },
      DZ = rr => rr.getBoundingClientRect(),
      dZ = (rr, Sr, Qr) => {
        const Zr = new Set(Qr);
        for (let Wr = rr; Wr; Wr = Wr === Sr ? null : Wr.parentElement)
          if (Zr.has(Wr)) return Wr;
        return null
      },
      sZ = (rr, Sr) => !rr.root || rr.root === Sr || Sr.matches(wZ) && rr.root.contains(Sr);
    const uZ = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new SZ, this.tabStripNav = new VZ, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, tr.c)(Ur.r), this.dpadRepeats = new Map(Ur.y.map((rr => [rr, (0, tr.c)(Ur.B)]))), this.stickRepeat = new Ur.b((0, tr.c)(Ur.cb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const rr = xr.d.register({
            name: "focus",
            isActive: () => (0, Nr.p)() && "focus" === OZ(),
            onFrame: rr => {
              this.onFrame(rr)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: rr => (0, xr.g)(rr) || rr === (0, pr.k)("menuConfirm") && (0, cr.I)((0, Nr.d)())
          }),
          Sr = (0, QZ.k)((rr => {
            const Sr = (0, QZ.q)(rr);
            null === rr.memoryKey && this.memory.forget(Sr), Sr === this.layerKey && (this.layerKey = null)
          }));
        let Qr = -1 / 0;
        const Zr = jr.d.onFrame((rr => {
            (0, Nr.p)() || rr.timestampMs - Qr < 100 || (Qr = rr.timestampMs, pZ())
          })),
          Wr = rr => {
            rr.isTrusted && rr.target instanceof Element && jr.d.getActivePad() && this.noteChosenStop(rr.target)
          };
        return document.addEventListener("click", Wr, !0), () => {
          rr(), Sr(), Zr(), document.removeEventListener("click", Wr, !0), this.deactivate()
        }
      }
      noteChosenStop(rr) {
        var Sr, Qr;
        const Zr = pZ();
        if (!Zr || !Zr.root.contains(rr)) return;
        const Wr = null !== (Sr = null === (Qr = rr.closest(".Dropdown-root")) || void 0 === Qr ? void 0 : Qr.querySelector(".Dropdown-control")) && void 0 !== Sr ? Sr : rr,
          ar = dZ(Wr, Zr.root, this.getEnabledCandidates(Zr.root));
        if (!ar) return;
        const jr = (0, QZ.q)(Zr.layer);
        jr === this.layerKey && Zr.root === this.layerRoot || this.beginLayer(Zr, jr), this.wasActive ? this.setFocus(ar, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = ar, this.lastFocusedCentre = (0, cr.A)(ar), this.rememberFocus(ar), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
      notify() {
        for (const rr of this.listeners) rr()
      }
      deactivate() {
        var rr;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const rr of this.dpadRepeats.values()) rr.reset();
          this.stickRepeat.reset(), null !== (rr = this.focused) && void 0 !== rr && rr.isConnected && JZ(this.focused, null, (0, cr.A)(this.focused)), this.notify()
        }
      }
      setFocus(rr) {
        var Sr;
        let {
          scroll: Qr = !0,
          byUser: Zr = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (Zr && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), rr === this.focused) return;
        const Wr = null !== (Sr = this.focused) && void 0 !== Sr && Sr.isConnected ? this.focused : null;
        if (this.focused = rr, rr) {
          Qr && (rr.classList.add(lZ), rr.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), Zr && ((rr, Sr) => {
            const Qr = Sr.closest("[data-pad-friends-column]");
            Qr && rr && !Qr.contains(rr) && (iQ = new WeakRef(rr))
          })(Wr, rr);
          const Sr = (0, cr.A)(rr);
          this.lastFocusedCentre = Sr, this.movedInLayer && this.rememberFocus(rr), JZ(Wr, rr, Sr), "false" === rr.getAttribute("aria-pressed") && rr.closest("[data-pad-select-on-focus]") && (0, cr.c)(rr)
        } else Wr && JZ(Wr, null, (0, cr.A)(Wr));
        this.notify()
      }
      rememberFocus(rr) {
        const Sr = this.layerRoot;
        this.layerKey && Sr && this.memory.remember(this.layerKey, rr, Sr, (() => this.getEnabledCandidates(Sr)))
      }
      noteCursorActivation(rr) {
        const Sr = pZ();
        if (!Sr || !Sr.root.contains(rr)) return;
        const Qr = this.getEnabledCandidates(Sr.root),
          Zr = new Set(Qr);
        let Wr = rr;
        for (; Wr && !Zr.has(Wr);) Wr = Wr === Sr.root ? null : Wr.parentElement;
        if (!(Wr instanceof HTMLElement)) return;
        const ar = (0, QZ.q)(Sr.layer);
        this.memory.enter(ar), this.memory.remember(ar, Wr, Sr.root, (() => Qr))
      }
      notePageEnteredByCursor(rr) {
        return this.memory.enter(rr)
      }
      recallStop(rr, Sr) {
        return this.findRemembered(rr, Sr)
      }
      focusWhenFound(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: rr,
          untilMs: performance.now() + Sr,
          holdWhile: Qr
        }
      }
      getEnabledCandidates(rr) {
        return (0, sr.f)(rr).filter((rr => !(0, sr.w)(rr)))
      }
      onFrame(rr) {
        var Sr;
        const Qr = pZ();
        if (!Qr) return;
        const Zr = null !== (Sr = this.findOpenDropdown(Qr)) && void 0 !== Sr ? Sr : Qr,
          Wr = performance.now(),
          ar = (0, QZ.q)(Zr.layer);
        if (ar !== this.layerKey || Zr.root !== this.layerRoot) {
          const Sr = this.focused;
          if (null !== this.layerKey && Zr.root === this.layerRoot && Sr && (0, sr.v)(Sr, Zr.root)) this.continueLayer(ar, Sr), this.wasActive || this.resume(Zr.root, Wr);
          else {
            const Sr = !this.wasActive && !rr.wokeDevice,
              jr = "death" === this.layerKind || Sr,
              Ir = this.enterLayer(Zr, ar);
            "popup" !== Zr.layer.kind || Zr !== Qr || Ir ? "menu" === Zr.layer.kind && jr && "inGame" === fr.c.get("gameState") && !(0, jQ.f)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = Wr + XZ.d) : (this.pressGuardExtends = Sr, this.pressGuardUntilMs = Wr + (Sr ? XZ.d : jr ? 500 : 250))
          }
        } else this.wasActive || this.resume(Zr.root, Wr);
        if (this.layerKind = Zr.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), rr.wokeDevice && this.focusPointedStop(Zr.root), this.validateFocus(Zr, Wr), Wr < this.pressGuardUntilMs && this.pressGuardExtends && (rr.wasPressed((0, pr.k)("menuConfirm")) || rr.wasPressed((0, pr.k)("menuBack"))) && (this.pressGuardUntilMs = Wr + XZ.d), Wr >= this.pressGuardUntilMs && this.handleButtons(rr, Zr)) return;
        const jr = "hybrid" === eZ();
        if (jr && (rr => {
            const Sr = mZ();
            return Sr !== nZ && (nZ = Sr, YZ.lock()), YZ.update(rr, (0, mr.g)().moveDeadzone)
          })(rr.leftStick)) return Ir = this.getHandoff(), zZ = NZ(Ir), tZ = mZ(), void xr.d.handOffHeldInput();
        var Ir;
        this.handleDirections(rr, Zr, Wr, !jr), this.handleScroll(rr, Zr)
      }
      findOpenDropdown(rr) {
        const Sr = rr.root.querySelector(wZ);
        if (!Sr || !(0, sr.t)(Sr)) return null;
        let Qr = this.dropdownLayers.get(Sr);
        return Qr || (this.dropdownLayerCounter++, Qr = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: rr.layer.kind,
          getRoot: () => Sr,
          close: () => {
            (0, cr.n)(Sr)
          },
          memoryKey: null
        }, this.dropdownLayers.set(Sr, Qr)), {
          layer: Qr,
          root: Sr,
          order: rr.order
        }
      }
      focusPointedStop(rr) {
        const Sr = (0, Nr.d)(),
          Qr = Sr ? document.elementFromPoint(Sr.x, Sr.y) : null;
        if (!Qr || !rr.contains(Qr)) return;
        const Zr = dZ(Qr, rr, this.getEnabledCandidates(rr));
        Zr && this.setFocus(Zr, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(rr, Sr) {
        const Qr = this.beginLayer(rr, Sr),
          Zr = yZ();
        return Zr && sZ(Zr, rr.root) ? (this.takeOver(rr.root, Zr, this.enteredLayerAtMs), Qr) : (this.restoreLayerFocus(rr.root, Qr), Qr)
      }
      beginLayer(rr, Sr) {
        return this.layerKey = Sr, this.layerRoot = rr.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(Sr)
      }
      restoreLayerFocus(rr, Sr) {
        const Qr = Sr && this.layerKey ? this.findRemembered(rr, this.layerKey) : null;
        this.restoredFromMemory = null !== Qr, this.setFocus(null !== Qr && void 0 !== Qr ? Qr : this.pickInitial(rr, {
          waitForContent: !0
        }))
      }
      continueLayer(rr, Sr) {
        this.layerKey = rr;
        const Qr = this.memory.enter(rr);
        this.restoreOnFocusLoss = Qr, this.movedInLayer && !Qr && this.rememberFocus(Sr)
      }
      resume(rr, Sr) {
        var Qr;
        const Zr = yZ();
        Zr && sZ(Zr, rr) ? this.takeOver(rr, Zr, Sr) : null !== (Qr = this.focused) && void 0 !== Qr && Qr.isConnected && JZ(null, this.focused, (0, cr.A)(this.focused))
      }
      pickPreferred(rr) {
        var Sr;
        return null !== (Sr = this.layerKey ? this.findRemembered(rr, this.layerKey) : null) && void 0 !== Sr ? Sr : this.pickInitial(rr, {
          waitForContent: !0
        })
      }
      findRemembered(rr, Sr) {
        return this.memory.has(Sr) ? this.memory.recall(Sr, this.getEnabledCandidates(rr)) : null
      }
      getHandoff() {
        var rr, Sr, Qr;
        const Zr = null !== (rr = this.focused) && void 0 !== rr && rr.isConnected ? this.focused : null,
          Wr = null !== (Sr = this.layerRoot) && void 0 !== Sr && Sr.isConnected ? this.layerRoot : null;
        return {
          point: Zr ? (0, cr.A)(Zr) : null !== (Qr = this.lastFocusedCentre) && void 0 !== Qr ? Qr : this.getLayerStartPoint(Wr),
          element: Zr,
          direction: null
        }
      }
      getLayerStartPoint(rr) {
        if (!rr) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const Sr = this.pickInitial(rr, {
          includeDisabled: !0
        });
        return (0, cr.A)(null !== Sr && void 0 !== Sr ? Sr : rr)
      }
      takeOver(rr, Sr, Qr) {
        const {
          element: Zr,
          direction: Wr,
          point: ar
        } = Sr, jr = Zr instanceof HTMLElement && (0, sr.v)(Zr, rr) ? Zr : null;
        if (!Wr) {
          const Sr = this.focused;
          return jr ? this.setFocus(jr, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(rr, ar), void(this.focused && this.focused === Sr && this.focused.isConnected && JZ(null, this.focused, (0, cr.A)(this.focused)))
        }
        if (this.dpadRepeats.get(Wr).update(!0, Qr), jr) return this.setFocus(jr, {
          scroll: !1,
          byUser: !0
        }), void this.move(rr, Wr, Qr, !0);
        const Ir = this.getEnabledCandidates(rr),
          fr = Ir.map(DZ),
          Er = nQ(new DOMRect(ar.x, ar.y, 0, 0), fr, Wr),
          pr = Er >= 0 ? Er : TQ(ar, fr);
        this.setFocus(pr >= 0 ? Ir[pr] : this.pickInitial(rr), {
          byUser: !0
        })
      }
      focusNearest(rr, Sr) {
        const Qr = this.getEnabledCandidates(rr),
          Zr = TQ(Sr, Qr.map(DZ));
        this.setFocus(Zr >= 0 ? Qr[Zr] : this.pickInitial(rr), {
          byUser: !0
        })
      }
      pickDefault(rr) {
        let {
          includeDisabled: Sr = !1,
          exclude: Qr = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Zr = [...rr.querySelectorAll(iZ)].filter((Zr => (null === Qr || void 0 === Qr || !Qr.has(Zr)) && (Sr ? (0, sr.y)(Zr, rr) : (0, sr.v)(Zr, rr)))),
          Wr = CZ(Zr.map(RZ));
        return Wr >= 0 ? Zr[Wr] : null
      }
      pickNewAreaStart(rr, Sr) {
        const Qr = [...rr.querySelectorAll(oZ)].filter(sr.t);
        for (const Zr of [...(0, sr.j)(rr), ...Qr]) {
          if (Sr.has(Zr)) continue;
          const rr = this.getEnabledCandidates(Zr),
            Qr = CZ(rr.map(RZ));
          if (Qr >= 0) return rr[Qr]
        }
        return null
      }
      pickInitial(rr) {
        let {
          includeDisabled: Sr = !1,
          waitForContent: Qr = !1,
          enteredAtMs: Zr = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Wr = this.pickDefault(rr, {
          includeDisabled: Sr
        });
        if (Wr) return Wr;
        const ar = rr => Sr ? (0, sr.f)(rr) : this.getEnabledCandidates(rr);
        let jr = [];
        for (const mr of (0, sr.j)(rr))
          if (jr = ar(mr), jr.length > 0) break;
        if (0 === jr.length) {
          if (Qr && performance.now() - Zr < 1e4 && (0, sr.q)(rr)) return null;
          jr = ar(rr)
        }
        const Ir = jr.map(DZ),
          fr = Rr(null),
          Er = jr.filter(((rr, Sr) => gr(Ir[Sr], fr))),
          pr = Er.length > 0 ? Er : jr,
          xr = CZ(pr.map(RZ));
        return xr >= 0 ? pr[xr] : null
      }
      validateFocus(rr, Sr) {
        if (this.pendingFocus) {
          var Qr, Zr;
          const Wr = this.pendingFocus.find();
          if (Wr && (0, sr.v)(Wr, rr.root)) return this.pendingFocus = null, void this.setFocus(Wr, {
            byUser: !0
          });
          Sr > this.pendingFocus.untilMs && (null === (Qr = (Zr = this.pendingFocus).holdWhile) || void 0 === Qr || !Qr.call(Zr)) && (this.pendingFocus = null)
        }
        const Wr = this.focused,
          ar = !!Wr && (0, sr.v)(Wr, rr.root);
        if (!(!ar && Wr && Wr === this.lastActivated && Sr - this.lastActivatedAtMs < 5e3 && rr.root.contains(Wr) && (0, sr.t)(Wr) && (0, sr.w)(Wr))) {
          if (!ar && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = Sr, void this.restoreLayerFocus(rr.root, !0);
          if ((!ar || !this.movedInLayer && !this.scrolledInLayer) && !(Sr - this.lastRefocusCheckMs < (ar ? 200 : 50)))
            if (this.lastRefocusCheckMs = Sr, ar) {
              const Qr = Sr - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(rr.root) : null,
                Zr = null !== Qr && void 0 !== Qr ? Qr : this.restoredFromMemory ? null : this.pickDefault(rr.root);
              Zr && Zr !== Wr && this.setFocus(Zr)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const Sr = this.pendingFocus;
                return this.focusNearest(rr.root, this.lastFocusedCentre), void(this.pendingFocus = Sr)
              }
              this.setFocus(this.pickPreferred(rr.root))
            }
        }
      }
      handleButtons(rr, Sr) {
        if (rr.wasPressed((0, pr.k)("menuToggleCursor"))) return KZ(this.getHandoff()), !0;
        if (rr.wasPressed((0, pr.k)("menuBack"))) {
          const rr = (0, cr.n)(Sr.root);
          return rr ? this.setFocus(rr, {
            byUser: !0
          }) : wQ(this, Sr.root) || ((0, cr.f)(Sr.root) ? this.returnToOpener(Sr.root) : this.backToStrip(Sr.root) || xZ()), !0
        }
        const Qr = (0, pr.k)("menuConfirm");
        var Zr, Wr;
        rr.wasPressed(Qr) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (Zr = null === (Wr = this.focused) || void 0 === Wr ? void 0 : Wr.getAttribute("data-pad-repeat")) && void 0 !== Zr ? Zr : null, this.confirmRepeated = rr.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (rr.wasReleased(Qr)) {
          const rr = this.confirmPressedOn;
          if (this.confirmPressedOn = null, rr && !this.confirmRepeated && rr === this.focused && rr.isConnected && !(0, sr.w)(rr)) {
            const Qr = rr.matches("[data-pad-tab]") ? rr.closest(FZ) : null;
            Qr ? this.enterTab(rr, Qr, Sr.root, performance.now()) : this.activate(rr)
          }
          return !0
        }
        return this.repeatConfirm(rr, Qr), uQ(this, rr, Sr)
      }
      repeatConfirm(rr, Sr) {
        const Qr = this.confirmPressedOn;
        Qr && null !== this.confirmRepeatKey && rr.isHeld(Sr) && (Qr === this.focused && Qr.isConnected && !(0, sr.w)(Qr) && Qr.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? Qr.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(Qr)) : this.confirmRepeatKey = null)
      }
      backToStrip(rr) {
        const Sr = this.focused;
        if (!(0, mr.g)().menuBackToCategories) return !1;
        const Qr = null !== Sr && void 0 !== Sr && Sr.isConnected ? this.tabStripNav.backToStrip(Sr, this.getEnabledCandidates(rr), rr) : null;
        return Qr && this.setFocus(Qr, {
          byUser: !0
        }), null !== Qr
      }
      returnToOpener(rr) {
        const Sr = this.lastActivatedKey;
        Sr && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var Qr;
          return null !== (Qr = this.getEnabledCandidates(rr).find((rr => (0, cr.D)(rr) === Sr))) && void 0 !== Qr ? Qr : null
        })))
      }
      activate(rr) {
        var Sr;
        if ((0, PZ.b)(rr) || (0, cr.E)(rr)) return;
        this.lastActivatedKey = null !== (Sr = (0, cr.D)(rr)) && void 0 !== Sr ? Sr : this.lastActivatedKey, this.lastActivated = rr, this.lastActivatedAtMs = performance.now(), this.rememberFocus(rr);
        const Qr = this.layerRoot;
        if (Qr) {
          const Sr = new Set(Qr.querySelectorAll(iZ)),
            Zr = new Set(Qr.querySelectorAll(`[data-pad-initial-area], ${oZ}`)),
            Wr = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var Wr;
            return (0, sr.v)(rr, Qr) ? null : null !== (Wr = this.pickDefault(Qr, {
              exclude: Sr
            })) && void 0 !== Wr ? Wr : this.pickNewAreaStart(Qr, Zr)
          }), 5e3, (() => rr.isConnected && (0, sr.w)(rr) && performance.now() - Wr < 6e4))
        }(0, cr.c)(rr), (0, cr.j)(rr)
      }
      handleDirections(rr, Sr, Qr, Zr) {
        const Wr = PQ(Sr.layer.kind) ? (0, pr.k)("chat") : null;
        for (const Ir of Ur.y) {
          this.dpadRepeats.get(Ir).update(rr.isHeld(Ir), Qr) && (Ir !== Wr || rr.wasPressed(Ir)) && this.move(Sr.root, Ir, Qr, !0)
        }
        const ar = Zr ? (0, Ur.h)(rr.leftStick, (0, mr.g)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          jr = this.stickRepeat.update((0, Ur.eb)(ar), Qr);
        if (jr && this.move(Sr.root, jr, Qr, !0), this.retryMove && Qr >= this.retryMove.atMs) {
          const {
            direction: rr
          } = this.retryMove;
          this.retryMove = null, this.move(Sr.root, rr, Qr, !1)
        }
      }
      move(rr, Sr, Qr, Zr) {
        var Wr;
        let ar = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (Wr = this.tabOpenWait) || void 0 === Wr ? void 0 : Wr.wait) && Sr === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const jr = this.focused;
        if (!jr || !jr.isConnected) {
          const Sr = this.pickInitial(rr);
          return void(Sr && this.setFocus(Sr, {
            byUser: !0
          }))
        }
        const Ir = "Left" === Sr || "Right" === Sr,
          fr = Ir ? (0, PZ.b)(jr) : null;
        if (fr) return void fr.adjust("Left" === Sr ? -1 : 1);
        const Er = rr => null !== rr.closest("[data-pad-friends-column]"),
          pr = Er(jr),
          xr = DZ(jr),
          mr = Ir || jr.closest(FZ) ? null : (rr => {
            const Sr = new Map;
            return Qr => {
              const Zr = Qr.closest(FZ);
              if (!Zr) return !1;
              let Wr = Sr.get(Zr);
              if (void 0 === Wr) {
                const Qr = DZ(Zr);
                Wr = YQ(rr, Qr) && (Qr.right <= rr.left || Qr.left >= rr.right), Sr.set(Zr, Wr)
              }
              return Wr
            }
          })(xr),
          Nr = null !== jr.closest(cZ),
          Ur = this.getEnabledCandidates(rr).filter((rr => rr !== jr && (Ir || Er(rr) === pr) && !(null !== mr && void 0 !== mr && mr(rr)) && (Nr || !rr.closest(cZ)))),
          tr = Ur.map(DZ),
          hr = Lr(jr, "y", rr),
          zr = Rr(hr);
        if (!ar && !gr(xr, zr)) {
          const rr = Ur.filter(((rr, Sr) => gr(tr[Sr], zr)));
          if (rr.length > 0) {
            const Sr = {
              x: zr.left + zr.width / 2,
              y: zr.top + zr.height / 2
            };
            return void this.setFocus(rr[TQ(Sr, rr.map(DZ))], {
              byUser: !0
            })
          }
        }
        const Yr = Ir ? ((rr, Sr, Qr) => {
            const Zr = DZ(rr),
              Wr = rr.closest(FZ),
              ar = Wr ? DZ(Wr) : null;
            return Sr.map(((Sr, jr) => {
              const Ir = Qr[jr];
              if (Ir.bottom > Zr.top && Ir.top < Zr.bottom) return !0;
              const fr = Sr.closest(FZ);
              if (Wr && ar) return fr !== Wr && (null !== fr || Ir.bottom <= ar.top || Ir.top >= ar.bottom);
              if (fr) return !YQ(Zr, DZ(fr));
              let Er = rr;
              for (let Qr = rr.parentElement; Qr && !Qr.contains(Sr); Qr = Qr.parentElement) Er = Qr;
              const pr = DZ(Er);
              return Ir.right > pr.left && Ir.left < pr.right
            }))
          })(jr, Ur, tr) : void 0,
          nr = Ir && !jr.closest(FZ) ? (rr => rr.map((rr => !rr.closest(qZ))))(Ur) : void 0,
          er = ((rr, Sr) => {
            const Qr = [];
            for (let Wr = rr; Wr; Wr = Wr.parentElement) Qr.push(Wr);
            const Zr = new Map;
            return Qr.forEach(((rr, Sr) => {
              Zr.set(rr, Qr.length - 1 - Sr)
            })), Sr.map((rr => {
              for (let Sr = rr; Sr; Sr = Sr.parentElement) {
                const rr = Zr.get(Sr);
                if (void 0 !== rr) return rr
              }
              return -1
            }))
          })(jr, Ur),
          Kr = Ir ? "x" : "y",
          yr = Lr(jr, Kr, rr);
        let Br = nQ(xr, tr, Sr, er, Yr, nr);
        if (Br >= 0 && yr && !yr.contains(Ur[Br])) {
          const rr = Ur.flatMap(((rr, Sr) => yr.contains(rr) ? [Sr] : [])),
            Qr = Sr => Sr && rr.map((rr => Sr[rr])),
            Zr = nQ(xr, rr.map((rr => tr[rr])), Sr, rr.map((rr => er[rr])), Qr(Yr), Qr(nr));
          Br = Zr >= 0 ? rr[Zr] : Br
        }
        if (Br >= 0) return void this.moveTo(jr, Ur[Br], Ur, rr, Sr, ar);
        if (!Zr) return;
        const Tr = "Right" === Sr || "Down" === Sr ? 1 : -1;
        if (yr && Hr(yr, Kr, Tr)) {
          const rr = "y" === Kr ? yr.clientHeight : yr.clientWidth;
          qr(yr, Kr, Tr * rr * .5), this.retryMove = {
            direction: Sr,
            atMs: Qr + 80
          }
        }
      }
      moveTo(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = this.tabStripNav.findTabContent(rr, Sr, Qr);
        jr && "true" !== rr.dataset.padSelected ? this.openTab(rr, jr, Zr, Wr) : ar && !jr || this.setFocus(this.tabStripNav.redirect(rr, Sr, Qr, Zr), {
          byUser: !0
        })
      }
      openTab(rr, Sr, Qr, Zr) {
        const Wr = Sr.parentElement;
        (0, cr.c)(rr), this.focusWhenFound((() => "true" !== rr.dataset.padSelected ? null : Sr.isConnected ? this.tabStripNav.pickContentStart(Sr, this.getEnabledCandidates(Qr), Qr) : Wr ? this.tabStripNav.pickReplacedContentStart(rr, Wr, this.getEnabledCandidates(Qr), Qr) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: Zr
        }
      }
      enterTab(rr, Sr, Qr, Zr) {
        this.move(Qr, (rr => {
          const Sr = [...rr.querySelectorAll(GZ)].filter((Sr => Sr.closest(MZ) === rr));
          if (Sr.length >= 2) {
            const rr = Sr[0].getBoundingClientRect(),
              Qr = Sr[1].getBoundingClientRect();
            return Math.abs(Qr.top - rr.top) > Math.abs(Qr.left - rr.left) ? "Right" : "Down"
          }
          const Qr = rr.getBoundingClientRect();
          return Qr.height > Qr.width ? "Right" : "Down"
        })(Sr), Zr, !1, !0), this.focused !== rr || this.pendingFocus || this.activate(rr)
      }
      handleScroll(rr, Sr) {
        const Qr = (0, Ur.h)(rr.rightStick, .2);
        if (0 === Qr.x && 0 === Qr.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const Zr = rr.dtMs / 1e3;
        for (const ar of ["x", "y"]) {
          var Wr;
          const rr = Qr[ar];
          if (0 === rr) continue;
          const jr = null !== (Wr = Lr(this.focused, ar, Sr.root)) && void 0 !== Wr ? Wr : Xr(Sr.root, ar);
          if (!jr) continue;
          const Ir = Math.sign(rr) * rr * rr * 1500 * Zr + this.scrollRemainder[ar],
            fr = Math.trunc(Ir);
          this.scrollRemainder[ar] = Ir - fr, 0 !== fr && (qr(jr, ar, fr), this.scrolledInLayer = !0)
        }
      }
    };
    var rW = Qr(9339);
    var SW = Qr(9832);
    const QW = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      ZW = {
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
          ...QW,
          minIntervalMs: 1e3
        },
        preview: {
          ...QW,
          minIntervalMs: 0
        }
      };
    const WW = new class {
        constructor(rr) {
          this.deps = rr, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = rr => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", rr))
          }
        }
        play(rr, Sr) {
          const Qr = ZW[rr];
          if (!this.deps.isVibrationOn() || Qr.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const Zr = this.lastPlayedMs[rr];
          if (void 0 !== Zr && Sr - Zr < Qr.minIntervalMs) return !1;
          const Wr = this.deps.getActuator();
          if (!Wr) return !1;
          this.lastPlayedMs[rr] = Sr;
          const {
            duration: ar,
            strongMagnitude: jr,
            weakMagnitude: Ir
          } = Qr;
          try {
            Wr.playEffect("dual-rumble", {
              duration: ar,
              strongMagnitude: jr,
              weakMagnitude: Ir
            }).catch(this.logFailure)
          } catch (fr) {
            this.logFailure(fr)
          }
          return !0
        }
      }({
        getActuator: () => (rr => {
          const Sr = null === rr || void 0 === rr ? void 0 : rr.vibrationActuator;
          return "function" === typeof(null === Sr || void 0 === Sr ? void 0 : Sr.playEffect) ? Sr : null
        })(jr.d.getActiveGamepad()),
        isVibrationOn: () => (0, mr.g)().vibration,
        isPadInUse: Nr.p
      }),
      aW = rr => {
        WW.play(rr, performance.now())
      };
    var jW = Qr(9342),
      IW = Qr(4010),
      fW = Qr(124),
      EW = Qr(43),
      pW = Qr(727);
    class xW {
      constructor(rr) {
        this.deps = rr
      }
      check() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const Sr = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!Sr) return "skipped";
        const Qr = rr ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === Qr || this.deps.readReportedVisitId() === Qr ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(Qr), this.deps.jx(Sr, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const mW = "controllerUsageReportedVisit";
    var NW = Qr(1475),
      UW = Qr(1885),
      tW = Qr(712),
      hW = Qr(1573),
      zW = Qr(1304);
    const YW = rr => ({
        translationKey: `controller:${rr}`
      }),
      nW = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: YW("padButtonView"),
        Menu: YW("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: YW("padButtonDpadUp"),
        Down: YW("padButtonDpadDown"),
        Left: YW("padButtonDpadLeft"),
        Right: YW("padButtonDpadRight"),
        Home: YW("padButtonHome"),
        LeftStick: YW("padButtonLeftStick"),
        RightStick: YW("padButtonRightStick")
      },
      eW = {
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
          View: YW("padButtonCreate"),
          Menu: YW("padButtonOptions")
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
      KW = (rr, Sr) => {
        var Qr;
        const Zr = null !== (Qr = eW[rr][Sr]) && void 0 !== Qr ? Qr : nW[Sr];
        return "string" === typeof Zr ? Zr : (0, Wr.z)(zW.f.get().getCurrentLanguageCode(), Zr.translationKey)
      },
      yW = rr => {
        let {
          glyph: Sr,
          family: Qr,
          className: Zr
        } = rr;
        const Wr = (0, Nr.F)(),
          ar = null !== Qr && void 0 !== Qr ? Qr : Wr,
          jr = (0, jW.e)(ar, Sr);
        return (0, kr.jsx)("span", {
          className: Gr()("ControllerGlyph", Zr),
          role: "img",
          "aria-label": KW(ar, Sr),
          style: {
            "--pad-glyph-mask": `url(${jr})`,
            "--pad-glyph-aspect": (0, jW.b)(ar, Sr)
          }
        })
      };
    var BW = Qr(2057);
    const TW = rr => {
      let {
        action: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Wr.E)();
      switch (Sr.kind) {
        case "reload":
          return (0, kr.jsx)("span", {
            children: Qr("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, kr.jsx)(BW.c, {
            text: Sr.description ? [{
              icon: Sr.icon
            }, ` ${Sr.description}`] : [{
              icon: Sr.icon
            }]
          });
        case "touchButton":
          return (0, kr.jsx)(BW.c, {
            text: Sr.label
          })
      }
    };
    var vW = Qr(9837);
    const OW = rr => {
      let {
        hold: Sr
      } = rr;
      return (0, kr.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${Sr.holdMs}ms`
        },
        children: (0, kr.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, Sr.id)
    };
    var LW = Qr(9868),
      lW = Qr(9872),
      XW = Qr(9881),
      PW = Qr(9859);
    const HW = () => {
        const {
          gameState: rr
        } = (0, fr.n)(["gameState"]), Sr = (0, Nr.C)(), [Zr, Wr] = (0, Cr.useState)(!1), [ar, jr] = (0, Cr.useState)(!1);
        return (0, Cr.useEffect)((() => {
          "inGame" === rr && Wr(!0)
        }), [rr]), (0, Cr.useEffect)((() => {
          if (!Zr) return;
          let rr = null,
            Sr = !1;
          return (tW.I ? Promise.all([Qr.e(85), Qr.e(105), Qr.e(307), Qr.e(127), Qr.e(257), Qr.e(255), Qr.e(104)]).then((() => Qr(42391))).then((rr => rr.startWasmPadGameplay)) : Promise.all([Qr.e(85), Qr.e(265), Qr.e(264), Qr.e(113), Qr.e(89), Qr.e(86), Qr.e(87), Qr.e(88), Qr.e(213), Qr.e(261), Qr.e(91), Qr.e(105), Qr.e(253), Qr.e(267), Qr.e(112), Qr.e(124), Qr.e(258), Qr.e(142), Qr.e(241), Qr.e(102), Qr.e(90), Qr.e(251), Qr.e(185), Qr.e(257), Qr.e(123)]).then((() => Qr(42533))).then((rr => rr.startPadGameplay))).then((Qr => {
            Sr || (rr = Qr())
          })).catch((rr => {
            console.error("Pad gameplay failed to load", rr), Sr || jr(!0)
          })), () => {
            var Qr;
            Sr = !0, null === (Qr = rr) || void 0 === Qr || Qr()
          }
        }), [Zr]), (0, Cr.useEffect)((() => {
          ar && Sr && (jr(!1), NW.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((rr => {
            !0 === rr && (0, UW.reloadBloxd)()
          })))
        }), [ar, Sr]), (0, kr.jsxs)(kr.Fragment, {
          children: [(0, kr.jsx)(qW, {}), (0, kr.jsx)(RW, {}), (0, kr.jsx)(gW, {})]
        })
      },
      qW = () => {
        const {
          t: rr
        } = (0, Wr.E)(), Sr = (0, Nr.C)(), {
          gameState: Qr,
          isUiHidden: Zr
        } = (0, fr.n)(["gameState", "isUiHidden"]), {
          hideButtonHints: ar
        } = (0, mr.s)(), jr = (0, vW.k)(), Ir = (0, vW.o)(), [Er, xr] = (0, Cr.useState)(XW.d);
        return (0, hW.c)(PW.r, xr), !Sr || ar || Zr || "inGame" !== Qr || !jr && !Er ? null : (0, kr.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [jr && (0, kr.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, kr.jsx)(yW, {
              glyph: (0, pr.k)("actionButton")
            }), (0, kr.jsx)(TW, {
              action: jr
            }), Ir && (0, kr.jsx)("span", {
              className: "PadActionHintMore",
              children: rr("controller:gameplayActionWheelHint")
            })]
          }), Er && (0, kr.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, kr.jsx)(yW, {
              glyph: (0, pr.k)("pickBlock")
            }), (0, kr.jsx)("span", {
              children: rr("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      RW = () => {
        const {
          t: rr
        } = (0, Wr.E)(), Sr = (0, Nr.C)(), {
          gameState: Qr,
          isUiHidden: Zr
        } = (0, fr.n)(["gameState", "isUiHidden"]), [ar, jr] = (0, Cr.useState)(LW.b);
        return (0, hW.c)(PW.n, jr), Sr && !Zr && "inGame" === Qr && ar ? (0, kr.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, kr.jsx)("span", {
            children: rr("controller:gameplayDropStack")
          }), (0, kr.jsx)(OW, {
            hold: ar
          })]
        }) : null
      },
      gW = () => {
        const {
          t: rr
        } = (0, Wr.E)(), Sr = (0, Nr.C)(), {
          gameState: Qr,
          isUiHidden: Zr
        } = (0, fr.n)(["gameState", "isUiHidden"]), {
          hideButtonHints: ar
        } = (0, mr.s)(), [jr, Ir] = (0, Cr.useState)(lW.d);
        return (0, hW.c)(PW.k, Ir), Sr && !Zr && "inGame" === Qr && jr ? (0, kr.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!ar && (0, kr.jsx)(yW, {
            glyph: (0, pr.k)("attack")
          }), (0, kr.jsx)("span", {
            children: rr("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var CW = Qr(9888),
      MW = Qr(2114),
      GW = Qr(3404),
      kW = Qr(9329);
    const AW = rr => rr && !(0, CW.b)(MW.d.get("shopInfo")),
      VW = () => {
        const rr = "inGame" === (0, fr.n)(["gameState"]).gameState;
        return (0, GW.h)("shopInfo", (() => {
          (0, kW.k)(AW(rr))
        })), (0, Cr.useEffect)((() => {
          (0, kW.k)(AW(rr))
        }), [rr]), null
      },
      iW = () => {
        const {
          t: rr
        } = (0, Wr.E)(), {
          hideButtonHints: Sr
        } = (0, mr.s)();
        (0, Nr.F)();
        const Qr = (0, GS.i)();
        return (0, Cr.useEffect)((() => (() => {
          const rr = xr.d.register({
              name: "inventory",
              isActive: WQ.isActive,
              onFrame: WQ.onFrame,
              onDeactivate: WQ.onDeactivate,
              wakePressActs: WQ.wakePressActs
            }),
            Sr = rr => {
              WQ.noteRealPointer(rr), WQ.shouldBlockRealPointer(rr) && rr.stopPropagation()
            };
          for (const jr of aQ) window.addEventListener(jr, Sr, !0);
          const Qr = (0, dr.j)((() => {
              "inventory" !== xr.d.getActiveConsumerName() && WQ.forgetSurface()
            })),
            Zr = rr => {
              const Sr = rr.target;
              (0, Nr.p)() && (0, br.f)(Sr) && Sr.closest(KS) && (0, dr.h)() && (0, dr.n)(Sr)
            };
          document.addEventListener("focusout", Zr, !0);
          const {
            invalidate: Wr,
            onScroll: ar
          } = WQ.targets;
          return document.addEventListener("scroll", ar, !0), window.addEventListener("resize", Wr), () => {
            rr(), Qr();
            for (const rr of aQ) window.removeEventListener(rr, Sr, !0);
            document.removeEventListener("scroll", ar, !0), document.removeEventListener("focusout", Zr, !0), window.removeEventListener("resize", Wr), WQ.targets.disconnect()
          }
        })()), []), (0, kr.jsxs)(kr.Fragment, {
          children: [(0, kr.jsx)(wr, {
            placer: WQ.ring,
            className: "InventorySlotCursorRing"
          }), Qr.showing && !Sr && (0, kr.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: Dr(Qr).map((Sr => {
              let {
                actions: Zr,
                labelKey: Wr
              } = Sr;
              return (0, kr.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [Zr.map((rr => (0, kr.jsx)(yW, {
                  glyph: (0, pr.k)(rr)
                }, rr))), (0, kr.jsx)("span", {
                  children: rr(`controller:${Wr}`)
                }), "inventoryDrop" === Wr && Qr.dropStackHold && (0, kr.jsx)(OW, {
                  hold: Qr.dropStackHold
                })]
              }, Wr)
            }))
          })]
        })
      },
      wW = [{
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
      cW = rr => Array.from(rr).map((rr => ({
        type: "char",
        char: rr,
        width: 1
      }))),
      FW = function(rr) {
        return {
          type: "command",
          command: rr,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      oW = [FW("page", 2), FW("otherPage"), FW("caretLeft"), FW("space", 3), FW("caretRight"), FW("close", 1.5), FW("submit", 1.5)],
      bW = [FW("page", 2), FW("otherPage"), FW("caretLeft"), FW("space", 2), FW("caretRight"), FW("newline"), FW("close", 1.5), FW("submit", 1.5)],
      JW = [
        [...cW("1234567890"), FW("backspace")], cW("qwertyuiop/"), cW("asdfghjkl'?"), [FW("shift", 2), ...cW("zxcvbnm,.")]
      ],
      DW = [
        [...cW("1234567890"), FW("backspace")], cW("!@#$%^&*()/"), cW('-_=+[]{};:"'), cW("~`|\\<>'\u20ac\xa3,.")
      ],
      dW = {
        letters: JW,
        accents: [
          [...cW("1234567890"), FW("backspace")], cW("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), cW("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [FW("shift", 2), ...cW("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: DW
      },
      sW = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      uW = (rr, Sr) => "letters" === rr ? Sr ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === rr ? "symbols" : "accents"
      },
      ra = function(rr, Sr) {
        const Qr = ((rr, Sr) => [...dW[rr], Sr ? bW : oW])(rr, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === Sr) return Qr;
        const Zr = Math.min(2, Sa(Qr[0]) / Sr);
        return [Array.from({
          length: Sr
        }, ((rr, Sr) => ({
          type: "phrase",
          phraseIndex: Sr,
          width: Zr
        }))), ...Qr]
      },
      Sa = rr => rr.reduce(((rr, Sr) => rr + Sr.width), 0),
      Qa = rr => Math.max(...rr.map(Sa)),
      Za = (rr, Sr) => {
        const Qr = rr[Sr.row];
        let Zr = (Qa(rr) - Sa(Qr)) / 2;
        for (let Wr = 0; Wr < Sr.col; Wr++) Zr += Qr[Wr].width;
        return Zr + Qr[Sr.col].width / 2
      },
      Wa = (rr, Sr, Qr) => {
        let Zr = 0,
          Wr = 1 / 0;
        for (let ar = 0; ar < rr[Sr].length; ar++) {
          const jr = Math.abs(Za(rr, {
            row: Sr,
            col: ar
          }) - Qr);
          jr < Wr - 1e-9 && (Zr = ar, Wr = jr)
        }
        return Zr
      },
      aa = (rr, Sr) => {
        const Qr = Math.max(0, Math.min(rr.length - 1, Sr.row));
        return {
          row: Qr,
          col: Math.max(0, Math.min(rr[Qr].length - 1, Sr.col))
        }
      },
      ja = (rr, Sr, Qr) => "once" === rr && Sr - Qr <= 400 ? "caps" : "off" === rr ? "once" : "off",
      Ia = (rr, Sr) => "once" === rr && (rr => rr.toLowerCase() !== rr.toUpperCase())(Sr) ? "off" : rr,
      fa = (rr, Sr, Qr) => {
        if ("symbols" === Sr || "off" === Qr) return rr;
        const Zr = rr.toUpperCase();
        return 1 === Zr.length ? Zr : rr
      };
    var Ea = Qr(9747),
      pa = Qr(9895);
    const xa = {
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
      ma = ["Up", "nameTag"],
      Na = rr => {
        const Sr = rr.target instanceof HTMLTextAreaElement && !ma.includes(rr.kind);
        return ra(rr.page, "chat" === rr.kind ? pa.c.length : 0, Sr)
      },
      Ua = rr => {
        const Sr = rr.getBoundingClientRect(),
          Qr = window.innerHeight,
          Zr = Sr.top + Sr.height / 2 < Qr / 2 ? "bottom" : "top",
          Wr = "bottom" === Zr ? Qr - Sr.bottom - 6 : Sr.top - 6;
        return {
          placement: Zr,
          maxHeightPx: Math.min(.46 * Qr, Math.max(.3 * Qr, Wr))
        }
      },
      ta = rr => {
        (0, LQ.i)(rr) ? (0, LQ.c)().close(): (uZ.noteChosenStop(rr), rr.blur())
      };
    class ha {
      constructor(rr) {
        this.host = rr, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(rr, Sr) {
        this.phraseTexts = rr, this.phrasesFill = Sr
      }
      pressKey(rr) {
        const Sr = this.host.getState(),
          Qr = Na(Sr),
          Zr = Qr[rr.row][rr.col];
        this.host.setState({
          ...Sr,
          focus: rr,
          preferredX: Za(Qr, rr)
        }), "char" === Zr.type ? this.typeChar(Zr.char) : "command" === Zr.type ? this.runCommand(Zr.command) : this.sendPhrase(Zr.phraseIndex)
      }
      runCommand(rr) {
        const Sr = this.host.getState();
        switch (rr) {
          case "backspace":
            (0, br.c)(Sr.target);
            break;
          case "space":
            (0, br.e)(Sr.target, " ");
            break;
          case "newline":
            (0, br.e)(Sr.target, "\n");
            break;
          case "caretLeft":
            (0, br.h)(Sr.target, -1);
            break;
          case "caretRight":
            (0, br.h)(Sr.target, 1);
            break;
          case "shift": {
            const rr = performance.now();
            this.host.setState({
              ...Sr,
              shift: ja(Sr.shift, rr, this.lastShiftPressMs)
            }), this.lastShiftPressMs = rr;
            break
          }
          case "page":
          case "otherPage": {
            const Qr = uW(Sr.page, Sr.accentsFirst)[rr];
            this.host.setState({
              ...Sr,
              page: Qr,
              focus: aa(Na({
                ...Sr,
                page: Qr
              }), Sr.focus)
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
            (0, LQ.i)(Sr.target) && (0, LQ.c)().selectNextChannel()
        }
      }
      submit() {
        var rr, Sr;
        const {
          target: Qr
        } = this.host.getState();
        this.host.hide(), (0, LQ.i)(Qr) ? (0, LQ.c)().submit() : (uZ.noteChosenStop(Qr), null === (rr = (Sr = (0, LQ.e)(Qr)).submit) || void 0 === rr || rr.call(Sr), document.activeElement === Qr && Qr.blur())
      }
      close() {
        const {
          target: rr
        } = this.host.getState();
        this.host.hide(), ta(rr)
      }
      typeChar(rr) {
        const {
          target: Sr,
          page: Qr,
          shift: Zr
        } = this.host.getState();
        (0, br.e)(Sr, fa(rr, Qr, Zr)), this.host.setState({
          ...this.host.getState(),
          shift: Ia(Zr, rr)
        })
      }
      sendPhrase(rr) {
        if (this.phrasesFill) {
          const {
            target: Sr
          } = this.host.getState(), Qr = this.phraseTexts[rr];
          Qr && (Sr.setSelectionRange(0, Sr.value.length), (0, br.e)(Sr, Qr))
        } else pa.g.claim(performance.now()) && (this.host.hide(), (0, LQ.c)().sendLine(this.phraseTexts[rr]))
      }
    }
    var za = Qr(9769);
    const Ya = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      na = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class ea {
      constructor(rr, Sr) {
        this.host = rr, this.editor = Sr, this.lastDirection = null, this.navRepeat = new Ur.b((0, tr.c)(Ya)), this.commandRepeats = new Map(wW.filter((rr => {
          let {
            repeats: Sr
          } = rr;
          return Sr
        })).map((rr => {
          let {
            command: Sr
          } = rr;
          return [Sr, (0, tr.c)(na)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const rr of this.commandRepeats.values()) rr.reset()
      }
      onVisibleFrame(rr) {
        const Sr = performance.now();
        for (const {
            command: Wr,
            action: ar
          }
          of wW) {
          const Qr = (0, pr.k)(ar),
            Zr = this.commandRepeats.get(Wr);
          if ((Zr ? Zr.update(rr.isHeld(Qr), Sr) : rr.wasPressed(Qr)) && (this.editor.runCommand(Wr), !this.host.getState().visible)) return
        }
        if (rr.wasPressed((0, pr.k)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const Qr = this.readNavDirection(rr);
        this.lastDirection = Qr;
        const Zr = this.navRepeat.update(Qr, Sr);
        Zr && this.navigate(Zr)
      }
      onHiddenFrame(rr, Sr) {
        var Qr;
        if (rr.wasPressed((0, pr.k)("keyboardClose"))) return void ta(Sr);
        const Zr = (0, pr.k)("keyboardType");
        if (rr.wasPressed(Zr)) return xr.d.consumeButton(Zr), void this.host.open(Sr);
        const Wr = this.readNavDirection(rr),
          ar = null !== Wr && Wr !== this.lastDirection;
        if (this.lastDirection = Wr, !ar || (0, LQ.i)(Sr)) return;
        const jr = (null === (Qr = pZ()) || void 0 === Qr ? void 0 : Qr.root.contains(Sr)) || null !== Sr.closest(".EntireInventoryWrapper");
        ta(Sr), jr && xr.d.handOffHeldInput()
      }
      navigate(rr) {
        const Sr = this.host.getState();
        if ("Up" === rr && 0 === Sr.focus.row && "chat" === Sr.kind) return (0, LQ.c)().stepHistory(), void this.host.setState({
          ...Sr
        });
        const Qr = ((rr, Sr, Qr, Zr) => {
          if ("Left" === Qr || "Right" === Qr) {
            const Zr = rr[Sr.row].length,
              Wr = (Sr.col + ("Right" === Qr ? 1 : -1) + Zr) % Zr,
              ar = {
                row: Sr.row,
                col: Wr
              };
            return {
              pos: ar,
              preferredX: Za(rr, ar)
            }
          }
          const Wr = (Sr.row + ("Down" === Qr ? 1 : -1) + rr.length) % rr.length;
          return {
            pos: {
              row: Wr,
              col: Wa(rr, Wr, Zr)
            },
            preferredX: Zr
          }
        })(Na(Sr), Sr.focus, rr, Sr.preferredX);
        this.host.setState({
          ...Sr,
          focus: Qr.pos,
          preferredX: Qr.preferredX
        })
      }
      readNavDirection(rr) {
        for (const Sr of Ur.y)
          if (rr.isHeld(Sr)) return Sr;
        return (0, Ur.eb)((0, Ur.h)(rr.leftStick, (0, mr.g)().moveDeadzone))
      }
    }
    const Ka = ["Up", "Down", "Left", "Right"],
      ya = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const Ba = new class {
      constructor() {
        this.state = xa, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new ha(this), this.padInput = new ea(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(rr) {
        const Sr = rr.visible !== this.state.visible;
        this.state = rr;
        for (const Qr of this.listeners) Qr();
        Sr && Er.i.Jp(za.b, rr.visible)
      }
      subscribe(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
      install() {
        const rr = xr.d.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, br.f)(document.activeElement),
            onFrame: rr => {
              this.onFrame(rr)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: rr => Ka.includes(rr) || !this.state.visible && rr === (0, pr.k)("keyboardType")
          }),
          Sr = rr => {
            const Sr = rr.target;
            (0, br.f)(Sr) && (Sr === this.pendingChatInput || (0, Nr.p)() ? this.open(Sr) : this.state.visible && Sr !== this.state.target && (this.ownedField = null, this.hide()))
          },
          Qr = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          Zr = rr => {
            rr.isTrusted && this.state.visible && (rr => !rr.repeat && !ya.has(rr.key) && !(0, Ea.d)(rr.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(rr.key))(rr) && this.hide()
          },
          Wr = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...Ua(this.state.target)
            })
          };
        document.addEventListener("focusin", Sr, !0), document.addEventListener("focusout", Qr, !0), window.addEventListener("keydown", Zr, !0), window.addEventListener("resize", Wr);
        const ar = Er.i.subscribe(PW.c, (() => {
            this.openChat()
          })),
          jr = Er.i.subscribe(za.f, (rr => {
            this.openForField(rr)
          }));
        return () => {
          rr(), document.removeEventListener("focusin", Sr, !0), document.removeEventListener("focusout", Qr, !0), window.removeEventListener("keydown", Zr, !0), window.removeEventListener("resize", Wr), Er.i.unsubscribe(ar), Er.i.unsubscribe(jr), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const rr = (0, LQ.c)();
        rr ? document.activeElement !== rr.input ? (this.clearPendingChat(), this.pendingChatInput = rr.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), rr.open()) : this.open(rr.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(rr) {
        (0, br.f)(rr) ? (document.activeElement !== rr && rr.focus(), document.activeElement === rr && this.open(rr)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", rr)
      }
      open(rr) {
        var Sr;
        if (this.clearPendingChat(), this.ownedField = rr, this.state.visible && this.state.target === rr) return;
        this.restoreInputMode(), (0, br.l)(rr), this.savedInputMode = rr.getAttribute("inputmode"), rr.setAttribute("inputmode", "none");
        const Qr = {
          ...xa,
          visible: !0,
          target: rr,
          kind: (0, LQ.i)(rr) ? "chat" : null !== (Sr = (0, LQ.e)(rr).kind) && void 0 !== Sr ? Sr : null,
          accentsFirst: (Zr = zW.f.get().getCurrentLanguageCode(), sW.has(Zr)),
          ...Ua(rr)
        };
        var Zr;
        const Wr = Na(Qr),
          ar = ((rr, Sr) => {
            for (let Qr = 0; Qr < rr.length; Qr++) {
              const Zr = rr[Qr].findIndex((rr => "char" === rr.type && rr.char === Sr));
              if (-1 !== Zr) return {
                row: Qr,
                col: Zr
              }
            }
            return null
          })(Wr, "q");
        this.padInput.reset(), this.setState({
          ...Qr,
          focus: ar,
          preferredX: Za(Wr, ar)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(xa))
      }
      onFrame(rr) {
        if (this.releaseLostField()) return;
        const Sr = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(rr) : (0, br.f)(Sr) && this.padInput.onHiddenFrame(rr, Sr)
      }
      releaseLostField() {
        const rr = this.ownedField;
        return !(null === rr || rr.isConnected && document.activeElement === rr) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: rr
        } = this.state;
        rr && (null === this.savedInputMode ? rr.removeAttribute("inputmode") : rr.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var Ta = Qr(9899),
      va = Qr(3830);
    const Oa = new Map(wW.map((rr => {
        let {
          command: Sr,
          action: Qr
        } = rr;
        return [Sr, Qr]
      }))),
      La = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      la = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        Up: "controller:keyboardTargetBookTitle"
      },
      Xa = rr => {
        const Sr = (() => {
          const [, rr] = (0, Cr.useReducer)((rr => rr + 1), 0);
          return rr
        })();
        (0, Cr.useEffect)((() => {
          if (!rr) return;
          const Qr = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const Wr of Qr) rr.addEventListener(Wr, Sr);
          document.addEventListener("selectionchange", Sr);
          const Zr = new MutationObserver(Sr);
          return Zr.observe(rr, {
            attributeFilter: ["placeholder"]
          }), () => {
            Zr.disconnect();
            for (const Zr of Qr) rr.removeEventListener(Zr, Sr);
            document.removeEventListener("selectionchange", Sr)
          }
        }), [rr, Sr])
      },
      Pa = rr => {
        rr.preventDefault()
      },
      Ha = rr => {
        "mouse" !== rr.pointerType && rr.preventDefault()
      },
      qa = () => {
        var rr;
        const {
          t: Sr
        } = (0, Wr.E)(), Qr = (() => {
          const [rr, Sr] = (0, Cr.useState)(Ba.getState());
          return (0, Cr.useEffect)((() => Ba.subscribe((() => {
            Sr(Ba.getState())
          }))), []), rr
        })(), Zr = (0, Nr.C)(), ar = (0, Cr.useRef)(null);
        (0, mr.s)(), (0, Nr.F)(), (0, Cr.useEffect)((() => {
          const rr = Ba.install(),
            Sr = null;
          return () => {
            rr(), null === Sr || void 0 === Sr || Sr()
          }
        }), []);
        const jr = (0, Ta.p)(),
          Ir = Qr.visible && "chat" === Qr.kind ? Qr.target : null;
        Xa(Ir);
        const fr = null !== (rr = null === Ir || void 0 === Ir ? void 0 : Ir.value) && void 0 !== rr ? rr : "",
          Er = (0, pa.b)(fr, fr.startsWith("/") ? (0, va.i)() : [], pa.c.length),
          xr = fr.startsWith("/"),
          Ur = xr ? pa.c.map(((rr, Sr) => {
            var Qr;
            return null !== (Qr = Er[Sr]) && void 0 !== Qr ? Qr : ""
          })) : jr;
        if ((0, Cr.useEffect)((() => {
            Ba.editor.setPhraseRow(Ur, xr)
          })), (0, Cr.useEffect)((() => {
            const rr = ar.current;
            if (rr) return rr.addEventListener("touchstart", Pa, {
              passive: !1
            }), () => {
              rr.removeEventListener("touchstart", Pa)
            }
          }), [Qr.visible]), !Qr.visible) return null;
        const tr = Na(Qr),
          hr = Qa(tr),
          zr = rr => "char" === rr.type ? fa(rr.char, Qr.page, Qr.shift) : "phrase" === rr.type ? Ur[rr.phraseIndex] : (rr => {
            switch (rr) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === Qr.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return La[uW(Qr.page, Qr.accentsFirst)[rr]];
              case "space":
                return Sr("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return Sr("chat" === Qr.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(rr.command),
          Yr = rr => {
            Ba.editor.pressKey(rr)
          };
        return (0, kr.jsxs)("div", {
          ref: ar,
          className: Gr()(LQ.k, "top" === Qr.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: Qr.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": tr.length,
            "--pad-keyboard-height": `${Qr.maxHeightPx}px`
          },
          onPointerDown: Ha,
          onMouseDown: Pa,
          children: [(0, kr.jsx)(Ra, {
            target: Qr.target,
            label: Qr.kind ? Sr(la[Qr.kind]) : Qr.target.placeholder || Sr("controller:keyboardTargetText")
          }), (0, kr.jsx)("div", {
            className: "PadKeyboardRows",
            children: tr.map(((rr, Sr) => (0, kr.jsx)("div", {
              className: Gr()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === rr[0].type
              }),
              children: rr.map(((rr, Wr) => {
                const ar = Zr && Qr.focus.row === Sr && Qr.focus.col === Wr,
                  jr = "command" === rr.type ? Oa.get(rr.command) : void 0;
                return (0, kr.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: rr.width / hr * 100 + "%"
                  },
                  children: (0, kr.jsxs)("div", {
                    className: Gr()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: ar,
                      PadKeyboardKeyCommand: "command" === rr.type,
                      PadKeyboardKeyPhrase: "phrase" === rr.type,
                      PadKeyboardKeyActive: "command" === rr.type && "shift" === rr.command && "off" !== Qr.shift,
                      PadKeyboardKeySubmit: "command" === rr.type && "submit" === rr.command
                    }),
                    role: "button",
                    onClick: () => {
                      Yr({
                        row: Sr,
                        col: Wr
                      })
                    },
                    onTouchEnd: rr => {
                      var Qr, Zr;
                      rr.preventDefault(), Qr = rr.changedTouches[0], Zr = rr.currentTarget.getBoundingClientRect(), Qr && Qr.clientX >= Zr.left && Qr.clientX <= Zr.right && Qr.clientY >= Zr.top && Qr.clientY <= Zr.bottom && Yr({
                        row: Sr,
                        col: Wr
                      })
                    },
                    children: [(0, kr.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: zr(rr)
                    }), Zr && jr && (0, kr.jsx)(yW, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, pr.k)(jr)
                    })]
                  })
                }, Wr)
              }))
            }, Sr)))
          })]
        })
      },
      Ra = rr => {
        let {
          target: Sr,
          label: Qr
        } = rr;
        Xa(Sr);
        const Zr = (0, Cr.useRef)(null),
          Wr = (0, Cr.useRef)(null),
          ar = Sr instanceof HTMLTextAreaElement;
        (0, Cr.useLayoutEffect)((() => {
          const rr = Zr.current,
            Sr = Wr.current;
          ar ? rr.scrollTop = Sr.offsetTop - rr.clientHeight / 2 : rr.scrollLeft = Sr.offsetLeft - rr.clientWidth / 2
        }));
        const {
          value: jr,
          start: Ir,
          end: fr
        } = (0, br.p)(Sr), Er = "password" === Sr.type ? "\u2022".repeat(jr.length) : jr;
        return (0, kr.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, kr.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: Qr
          }), (0, kr.jsxs)("div", {
            ref: Zr,
            className: Gr()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: ar
            }),
            children: [(0, kr.jsx)("span", {
              children: Er.slice(0, Ir)
            }), (0, kr.jsx)("span", {
              ref: Wr,
              className: "PadKeyboardCaret"
            }), Ir !== fr && (0, kr.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: Er.slice(Ir, fr)
            }), (0, kr.jsx)("span", {
              children: Er.slice(fr)
            }), 0 === Er.length && Sr.placeholder && Sr.placeholder !== Qr && (0, kr.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: Sr.placeholder
            })]
          })]
        })
      };
    var ga = Qr(1518),
      Ca = Qr(4663);
    const Ma = function() {
        for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
        return Sr.map(pr.k)
      },
      Ga = (rr, Sr) => {
        const Qr = cQ(rr);
        return Qr ? [{
          glyphs: [Qr],
          labelKey: Sr
        }] : []
      },
      ka = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      Aa = "--pad-hint-bar-clearance",
      Va = "[data-pad-hint-bar-avoid]",
      ia = rr => {
        const Sr = [];
        for (const Qr of rr)(0, sr.t)(Qr) && Sr.push(Qr.getBoundingClientRect());
        return Sr
      },
      wa = rr => {
        if (!rr) return null;
        const Sr = pZ(),
          Qr = Sr ? ia(((rr, Sr) => {
            const Qr = rr.closest(Va);
            return Qr ? [Qr] : ("popup" === Sr ? document : rr).querySelectorAll(Va)
          })(Sr.root, Sr.layer.kind)) : [],
          Zr = !Sr || Sr.root.hasAttribute("data-pad-shows-hud");
        if (((0, Ca.h)(null === Sr || void 0 === Sr ? void 0 : Sr.layer.kind, (0, Ca.j)()) || Zr) && Qr.push(...ia(document.querySelectorAll(ka.join(",")))), 0 === Qr.length) return null;
        const {
          width: Wr,
          height: ar
        } = rr.getBoundingClientRect(), jr = window.innerHeight - 8, Ir = (0, Ca.o)(jr, {
          width: Wr,
          height: ar
        }, window.innerWidth / 2, Qr, 8);
        return Ir === jr ? null : Math.round(window.innerHeight - Ir)
      },
      ca = rr => {
        const Sr = document.documentElement.style,
          Qr = rr ? `${Math.round(window.innerHeight-rr.getBoundingClientRect().top)}px` : "";
        Sr.getPropertyValue(Aa) !== Qr && (Qr ? Sr.setProperty(Aa, Qr) : Sr.removeProperty(Aa))
      },
      Fa = () => {
        const {
          t: rr
        } = (0, Wr.E)(), {
          hideButtonHints: Sr
        } = (0, mr.s)(), Qr = (0, Nr.C)(), [Zr, ar] = (0, Cr.useState)(!1), [jr, Er] = (0, Cr.useState)([]), [tr, hr] = (0, Cr.useState)(null), zr = (0, Cr.useRef)(null), Yr = (0, Cr.useRef)(null);
        (0, hW.c)(za.b, (rr => {
          ar(rr)
        })), (0, hW.c)(Ca.m, (() => {
          var rr;
          null === (rr = Yr.current) || void 0 === rr || rr.call(Yr)
        }));
        const nr = Qr && !Sr && !Zr;
        return (0, Cr.useEffect)((() => {
          if (!nr) return;
          let rr = null;
          const Sr = () => {
            const Sr = (() => {
                var rr;
                const Sr = xr.d.getActiveConsumerName(),
                  Qr = (0, Ca.d)();
                if (Qr) {
                  const rr = (0, pr.k)(Qr),
                    Sr = "emoteWheel" === Qr && "wheel" === (0, mr.g)().emoteButton || !(0, Ur.I)(xr.d.getLastFrame().values, rr) ? {
                      glyphs: Ma("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [rr],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, pr.A)(rr)],
                    labelKey: "controller:wheelChoose"
                  }, Sr, {
                    glyphs: Ma("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const Zr = pZ();
                if (!Zr || "focus" !== Sr && "cursor" !== Sr) return (0, Ca.b)(pr.k);
                const Wr = [],
                  ar = {
                    glyphs: Ma("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  jr = (0, cr.x)(Zr.root),
                  Ir = jr ? !(0, sr.w)(jr) : Boolean(Zr.layer.close),
                  Er = !jr && Zr.layer.closeLabelKey ? Zr.layer.closeLabelKey : ar.labelKey,
                  Nr = Ir ? [{
                    ...ar,
                    labelKey: Er
                  }] : [],
                  tr = PQ(Zr.layer.kind) ? [{
                    glyphs: Ma("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === Sr) return Wr.push({
                  glyphs: Ma("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), Wr.push({
                  glyphs: Ma("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), Wr.push(...Nr), Wr.push(...tr), Wr.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), vZ() && Wr.push({
                  glyphs: Ma("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), Wr;
                const hr = uZ.getFocused();
                hr && (0, PZ.b)(hr) ? Wr.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : hr && (0, cr.E)(hr) ? Wr.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : Wr.push({
                  glyphs: Ma("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const zr = hr ? null === (rr = mQ(hr)) || void 0 === rr ? void 0 : rr.dataset.padSecondary : void 0;
                zr && Wr.push({
                  glyphs: Ma("menuSecondary"),
                  labelKey: zr
                }), Wr.push(...null !== hr && void 0 !== hr && hr.closest("[data-pad-friends-column]") ? [ar] : Nr), Wr.push(...tr);
                const Yr = "home" === Zr.layer.kind;
                bQ(Zr.root) || !CQ(Zr.root) && !JQ(Zr) ? Yr && Wr.push({
                  glyphs: Ma("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : Wr.push({
                  glyphs: Ma("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), Yr && (Wr.push(...Ga("inventory", "controller:menusFriends")), zr || Wr.push({
                  glyphs: Ma("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), Wr.push(...Ga("pause", "controller:menusSettings")), Wr.push(...Ga("leaderboard", "controller:menusNotifications")));
                const nr = fr.c.get("openEverythingMenuName");
                return "inGame" === fr.c.get("gameState") && "popup" !== Zr.layer.kind && null !== nr && ((0, fQ.i)(nr) ? Wr.push(...Ga("leaderboard", "controller:menusClose")) : nr !== IQ.q.LOBBY_LEADERBOARD && Wr.push(...Ga("leaderboard", "controller:menusLobby"))), Wr.push({
                  glyphs: Ma("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), Wr
              })(),
              Qr = wa(zr.current),
              Zr = ((rr, Sr) => `${rr.map((rr=>`${rr.glyphs.join("+")}:${rr.labelKey}`)).join("|")}@${Sr}`)(Sr, Qr);
            Zr !== rr && (rr = Zr, (0, Ir.unstable_batchedUpdates)((() => {
              Er(Sr), hr(Qr)
            }))), ca(zr.current)
          };
          Sr(), Yr.current = Sr;
          const Qr = requestAnimationFrame(Sr),
            Zr = setInterval(Sr, 150);
          return () => {
            Yr.current = null, cancelAnimationFrame(Qr), clearInterval(Zr), ca(null)
          }
        }), [nr]), (0, Cr.useLayoutEffect)((() => {
          if (!nr) return;
          if (0 === jr.length) return void ca(null);
          const rr = wa(zr.current);
          rr === tr ? ca(zr.current) : hr(rr)
        }), [nr, jr, tr]), nr && 0 !== jr.length ? (0, kr.jsx)("div", {
          ref: zr,
          className: "PadButtonHintBar SmallTextBold",
          style: null === tr ? void 0 : {
            bottom: tr
          },
          "aria-hidden": !0,
          children: jr.map((Sr => (0, kr.jsxs)("div", {
            className: "PadButtonHint",
            children: [Sr.glyphs.map((rr => (0, kr.jsx)(yW, {
              glyph: rr,
              className: "PadButtonHintGlyph"
            }, rr))), (0, kr.jsx)("span", {
              children: rr(Sr.labelKey)
            })]
          }, Sr.labelKey)))
        }) : null
      };
    var oa = Qr(1890);
    const ba = [sr.b, "label", "[data-pad-slider]"].join(","),
      Ja = "data-pad-cursor-probe",
      Da = rr => {
        var Sr;
        const Qr = (rr => {
          const Sr = [];
          for (let Zr = rr; Zr && Zr !== document.body && Zr !== document.documentElement && (Sr.push(Zr), !(Sr.length > 8)); Zr = Zr.parentElement);
          const Qr = document.documentElement.classList.contains(Nr.y) ? Sr[Sr.length - 1] : void 0;
          null === Qr || void 0 === Qr || Qr.setAttribute(Ja, "");
          try {
            return Sr.map((rr => ({
              element: rr,
              cursor: getComputedStyle(rr).cursor
            })))
          } finally {
            null === Qr || void 0 === Qr || Qr.removeAttribute(Ja)
          }
        })(rr);
        if ("pointer" !== (null === (Sr = Qr[0]) || void 0 === Sr ? void 0 : Sr.cursor)) return null;
        let Zr = 0;
        for (; Zr + 1 < Qr.length && "pointer" === Qr[Zr + 1].cursor;) Zr++;
        return Qr[Zr].element
      },
      da = (rr, Sr, Qr, Zr) => {
        const Wr = Zr.root.contains(rr) ? Zr.root : null;
        for (let ar = rr; ar && ar !== document.body && ar !== document.documentElement; ar = ar.parentElement) {
          if (ar instanceof HTMLElement && Or(ar, Sr) && Hr(ar, Sr, Qr)) return ar;
          if (ar === Wr) break
        }
        return "home" === Zr.layer.kind || "gamePage" === Zr.layer.kind ? ((rr, Sr) => {
          const Qr = document.scrollingElement;
          return Qr instanceof HTMLElement && ![document.documentElement, document.body].some((Sr => {
            const Qr = getComputedStyle(Sr),
              Zr = "y" === rr ? Qr.overflowY : Qr.overflowX;
            return "hidden" === Zr || "clip" === Zr
          })) && Hr(Qr, rr, Sr) ? Qr : null
        })(Sr, Qr) : null
      };
    const sa = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, tr.c)(Ur.r), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const rr = xr.d.register({
              name: "cursor",
              isActive: () => "cursor" === OZ(),
              onFrame: rr => {
                this.onFrame(rr)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: rr => (0, xr.g)(rr) || rr === (0, pr.k)("menuConfirm") && (0, cr.I)((0, Nr.d)())
            }),
            Sr = (0, QZ.k)((rr => {
              const Sr = rr.getRoot();
              Sr && this.layerPoints.delete(Sr), Sr === this.layerRoot && (this.layerRoot = null)
            })),
            Qr = Er.i.subscribe("appManagerUpdated|activeInputDevice", (rr => {
              "gamepad" !== rr && this.active && !this.hidden && this.hide()
            }));
          return () => {
            rr(), Sr(), Er.i.unsubscribe(Qr), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, Nr.p)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.Jp()
        }
        activate(rr) {
          this.active = !0, this.hidden = !1;
          const Sr = yZ();
          !Sr || Sr.root && Sr.root !== rr.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(rr), this.jumpTo(Sr.point))
        }
        jumpTo(rr) {
          this.state = {
            x: rr.x,
            y: rr.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.Jp())
        }
        onFrame(rr) {
          const Sr = pZ();
          if (!Sr) return;
          if (this.active || this.activate(Sr), this.followPage(Sr)) return;
          this.followLayer(Sr);
          const Qr = rr.wokeDevice ? (0, Nr.d)() : null;
          if (Qr && this.jumpTo(Qr), !(0, Nr.p)()) return void this.hide();
          const Zr = (0, pr.k)("menuToggleCursor");
          if (rr.wasPressed(Zr)) return xr.d.consumeButton(Zr), void KZ(this.getHandoff(null));
          if (this.handBackToFocus(rr)) return;
          const Wr = (0, pr.k)("menuConfirm"),
            ar = (0, pr.k)("menuSecondary");
          if (rr.wasPressed((0, pr.k)("menuBack"))) return (0, cr.n)(Sr.root) || (0, cr.f)(Sr.root) || xZ(), void this.Jp();
          if (sQ(null, rr, Sr)) return rr.wasReleased(Wr) && this.press && (this.updateHit(!1), this.updateConfirm(rr, Wr)), void this.Jp();
          if (document.pointerLockElement) return void this.hide();
          const jr = LZ() ? {
              x: 0,
              y: 0
            } : (rr => {
              const Sr = (rr, Sr) => (rr ? 1 : 0) - (Sr ? 1 : 0);
              return {
                x: Sr(rr.isHeld("Right"), rr.isHeld("Left")),
                y: Sr(rr.isHeld("Down"), rr.isHeld("Up"))
              }
            })(rr),
            Ir = (0, mr.g)().moveDeadzone,
            fr = ((rr, Sr) => {
              const Qr = (0, Ur.h)(rr, er(Sr));
              return Math.hypot(Qr.x, Qr.y)
            })(rr.leftStick, Ir) > 0 || 0 !== jr.x || 0 !== jr.y;
          if (this.hidden) {
            const Sr = rr.wasPressed(Wr),
              Qr = rr.wasPressed(ar);
            if (!fr && !Br(rr.rightStick) && !Sr && !Qr && !rr.wokeDevice) return void this.Jp();
            if (this.hidden = !1, this.updateHit(!1), Sr || Qr) return Sr && (this.press = {
              kind: "ignored"
            }, rr.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.Jp()
          }
          this.movePendingPageStart(fr);
          const Er = this.getPoint();
          this.state = yr(this.state, {
            stick: rr.leftStick,
            moveDeadzone: Ir,
            dpad: jr,
            dtMs: rr.dtMs,
            cursorSpeedPercent: (0, mr.g)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const tr = this.state.x !== Er.x || this.state.y !== Er.y,
            hr = [Wr, ar].some((Sr => rr.wasPressed(Sr) || rr.wasReleased(Sr)));
          (tr || hr || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(tr), this.updateConfirm(rr, Wr), this.updateSecondary(rr, ar), this.updateScroll(rr, Sr), this.Jp()
        }
        followPage(rr) {
          const Sr = "home" === rr.layer.kind || "gamePage" === rr.layer.kind,
            Qr = this.page;
          if (this.page = Sr ? {
              key: (0, QZ.q)(rr.layer),
              root: rr.root
            } : null, !this.page || !Qr || Qr.root !== rr.root || Qr.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(rr), "hybrid" === eZ()) return zZ = null, tZ = null, YZ.lock(), !0;
          const {
            key: Zr
          } = this.page;
          return this.pendingPageStart = {
            root: rr.root,
            key: Zr,
            returning: uZ.notePageEnteredByCursor(Zr),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(rr) {
          const Sr = this.pendingPageStart;
          if (!Sr) return;
          if (rr || Sr.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const Qr = Sr.returning ? uZ.recallStop(Sr.root, Sr.key) : null;
          if (!Qr && Sr.returning && performance.now() - Sr.enteredAtMs < 1e3) return;
          const Zr = null !== Qr && void 0 !== Qr ? Qr : uZ.pickInitial(Sr.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: Sr.enteredAtMs
          });
          Zr && (this.pendingPageStart = null, this.jumpTo((0, cr.A)(Zr)))
        }
        setLayer(rr) {
          this.layerRoot = rr.root, this.layerOrder = rr.order
        }
        followLayer(rr) {
          var Sr;
          if (rr.root === this.layerRoot) return;
          null !== (Sr = this.layerRoot) && void 0 !== Sr && Sr.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const Qr = this.layerPoints.get(rr.root),
            Zr = Qr && rr.order <= this.layerOrder ? Qr : uZ.getLayerStartPoint(rr.root);
          this.setLayer(rr), this.jumpTo(Zr)
        }
        getHandoff(rr) {
          var Sr;
          return {
            point: this.getPoint(),
            element: null !== (Sr = this.interactive) && void 0 !== Sr ? Sr : this.findDraggedSliderNearby(),
            direction: rr
          }
        }
        findDraggedSliderNearby() {
          const rr = this.draggedSlider;
          if (null === rr || void 0 === rr || !rr.isConnected) return null;
          const Sr = rr.getBoundingClientRect(),
            {
              y: Qr
            } = this.getPoint();
          return Qr >= Sr.top - 40 && Qr <= Sr.bottom + 40 ? rr : null
        }
        handBackToFocus(rr) {
          if (!LZ()) return !1;
          const Sr = Ur.y.find((Sr => rr.wasPressed(Sr)));
          return !!Sr && (Qr = this.getHandoff(Sr), zZ = NZ(Qr), tZ = null, YZ.lock(), xr.d.handOffHeldInput(), !0);
          var Qr
        }
        getAssistContext() {
          const rr = this.interactive;
          if (null === rr || void 0 === rr || !rr.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const Sr = rr.getBoundingClientRect();
          if (Sr.width > .4 * window.innerWidth || Sr.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const Qr = (0, mr.g)().cursorMagnetism && !(0, oa.e)(rr) && !rr.closest("[data-pad-slider]"),
            Zr = this.magnet && this.magnet !== rr && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : Sr;
          return {
            overInteractive: !0,
            magnetTarget: Qr ? {
              x: Zr.left + Zr.width / 2,
              y: Zr.top + Zr.height / 2
            } : null
          }
        }
        updateHit(rr) {
          this.lastHitTestMs = performance.now();
          const Sr = this.getPoint(),
            Qr = document.elementFromPoint(Sr.x, Sr.y),
            Zr = Qr && !(0, zr.q)(Qr) && (rr => {
              var Sr;
              const Qr = pZ();
              return !(Qr && !Qr.root.contains(rr) && !rr.closest(".tooltip-container")) || !(null !== (Sr = document.getElementById("root")) && void 0 !== Sr && Sr.contains(rr))
            })(Qr) ? Qr : null;
          if (Zr !== this.hit) return (0, cr.p)(this.hit, Zr, Sr), this.hit = Zr, void this.setInteractive(Zr ? (rr => {
            const Sr = rr.closest(ba);
            if (Sr) {
              var Qr, Zr;
              const rr = null !== (Qr = null === (Zr = Sr.parentElement) || void 0 === Zr ? void 0 : Zr.closest("[data-pad-focusable]")) && void 0 !== Qr ? Qr : Sr;
              return (0, sr.w)(rr) ? {
                element: null,
                magnet: null
              } : {
                element: rr,
                magnet: Sr
              }
            }
            const Wr = Da(rr);
            return {
              element: Wr,
              magnet: Wr
            }
          })(Zr) : {
            element: null,
            magnet: null
          });
          rr && Zr && (0, cr.p)(Zr, Zr, Sr)
        }
        setInteractive(rr) {
          let {
            element: Sr,
            magnet: Qr
          } = rr;
          this.interactive = Sr, this.magnet = Qr
        }
        clearHover() {
          this.hit && (0, cr.p)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const rr = this.hit;
          if (!rr || (0, cr.E)(rr)) return {
            kind: "ignored"
          };
          const Sr = (0, PZ.b)(rr),
            Qr = rr.closest("[data-pad-slider]");
          return Sr && Qr ? {
            kind: "slider",
            slider: Qr,
            adjuster: Sr
          } : ((0, cr.r)(rr, this.getPoint()), {
            kind: "pointer",
            target: rr
          })
        }
        applySliderFraction(rr) {
          var Sr;
          const Qr = rr.slider.getBoundingClientRect(),
            Zr = Qr.height > Qr.width,
            Wr = null === (Sr = rr.slider.querySelector("[data-pad-slider-handle]")) || void 0 === Sr ? void 0 : Sr.getBoundingClientRect(),
            ar = Wr ? Zr ? Wr.height : Wr.width : 0,
            jr = (Zr ? Qr.height : Qr.width) - ar;
          if (jr <= 0) return;
          const Ir = Zr ? Qr.bottom - ar / 2 - this.state.y : this.state.x - Qr.left - ar / 2;
          rr.adjuster.setFraction(Math.max(0, Math.min(1, Ir / jr)))
        }
        updateConfirm(rr, Sr) {
          rr.wasPressed(Sr) && (this.press = rr.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const Qr = this.press;
          if (!Qr) return;
          if (rr.isHeld(Sr)) return "slider" === Qr.kind && this.applySliderFraction(Qr), void this.updateRepeat();
          this.press = null;
          const Zr = this.repeated;
          if (this.endRepeat(), !rr.wasReleased(Sr)) return void this.endPressWithoutClick(Qr);
          const Wr = this.getPoint(),
            ar = this.hit;
          if ("slider" === Qr.kind && Qr.adjuster.endDrag(), "pointer" === Qr.kind) {
            const rr = null !== ar && void 0 !== ar ? ar : Qr.target.isConnected ? Qr.target : null;
            rr && (0, cr.t)(rr, Wr);
            const Sr = ar && Qr.target.isConnected && !Zr ? ((rr, Sr) => {
              for (let Qr = rr; Qr; Qr = Qr.parentElement)
                if (Qr.contains(Sr)) return Qr;
              return null
            })(Qr.target, ar) : null;
            Sr && (uZ.noteCursorActivation(Sr), (0, zr.c)(Sr, new MouseEvent("click", (0, cr.R)(Wr, 0, 0))), (0, cr.j)(Sr), (0, cr.P)(Sr) && (0, cr.M)(Sr))
          }
        }
        beginRepeat() {
          var rr, Sr, Qr;
          const Zr = null !== (rr = null === (Sr = this.hit) || void 0 === Sr ? void 0 : Sr.closest("[data-pad-repeat]")) && void 0 !== rr ? rr : null;
          this.repeatStop = Zr, this.repeatKey = null !== (Qr = null === Zr || void 0 === Zr ? void 0 : Zr.getAttribute("data-pad-repeat")) && void 0 !== Qr ? Qr : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const rr = this.repeatStop;
          if (!rr) return;
          const Sr = this.hit;
          rr.isConnected && !(0, sr.w)(rr) && rr.getAttribute("data-pad-repeat") === this.repeatKey && Sr && rr.contains(Sr) ? rr.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, uZ.noteCursorActivation(rr), (0, zr.c)(rr, new MouseEvent("click", (0, cr.R)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(rr) {
          "slider" === rr.kind && rr.adjuster.endDrag(), "pointer" === rr.kind && rr.target.isConnected && (0, cr.t)(rr.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(rr, Sr) {
          rr.wasPressed(Sr) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !rr.isHeld(Sr) && (this.secondaryArmed = !1, rr.wasReleased(Sr) && this.hit && (0, cr.o)(this.hit, this.getPoint(), 2))
        }
        updateScroll(rr, Sr) {
          const Qr = Tr(rr.rightStick, rr.dtMs);
          if (0 === Qr.x && 0 === Qr.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + Qr.x,
            y: this.scrollRemainder.y + Qr.y
          };
          const Zr = Math.trunc(this.scrollRemainder.x),
            Wr = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - Zr,
            y: this.scrollRemainder.y - Wr
          };
          const ar = this.hit;
          if (!ar) return;
          let jr = !1;
          if (0 !== Wr) {
            const rr = da(ar, "y", Wr > 0 ? 1 : -1, Sr);
            rr && (rr.scrollBy({
              top: Wr,
              behavior: "instant"
            }), jr = !0)
          }
          if (0 !== Zr) {
            const rr = da(ar, "x", Zr > 0 ? 1 : -1, Sr);
            rr && (rr.scrollBy({
              left: Zr,
              behavior: "instant"
            }), jr = !0)
          }
          jr && (this.lastHitTestMs = -1 / 0)
        }
        Jp() {
          or.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      ua = () => {
        const rr = (0, Cr.useMemo)((() => new ir), []),
          Sr = (0, Nr.C)();
        return (0, Cr.useEffect)((() => {
          if (!Sr) return;
          let Qr = 0,
            Zr = {
              of: null,
              atMs: 0,
              list: []
            };
          const Wr = document.getElementsByClassName(lZ),
            ar = rr => {
              for (const Sr of [...Wr]) Sr !== rr && Sr.classList.remove(lZ)
            },
            jr = () => {
              var Sr;
              Qr = requestAnimationFrame(jr);
              const Wr = (() => {
                const rr = uZ.getFocused();
                if (uZ.isActive() && null !== rr && void 0 !== rr && rr.isConnected) return rr;
                const Sr = sa.getHighlighted();
                return null !== Sr && void 0 !== Sr && Sr.isConnected ? Sr : null
              })();
              ar(Wr), Wr && !Wr.classList.contains(lZ) && Wr.classList.add(lZ);
              const Ir = null !== (Sr = null === Wr || void 0 === Wr ? void 0 : Wr.closest("[data-pad-reticle-box]")) && void 0 !== Sr ? Sr : Wr;
              rr.show(Ir ? ((rr, Sr) => {
                let Qr = rr.left,
                  Zr = rr.top,
                  Wr = rr.right,
                  ar = rr.bottom;
                for (const jr of Sr) {
                  if (!jr) continue;
                  const rr = Rr(jr);
                  Qr = Math.max(Qr, rr.left), Zr = Math.max(Zr, rr.top), Wr = Math.min(Wr, rr.right), ar = Math.min(ar, rr.bottom)
                }
                return Wr <= Qr || ar <= Zr ? null : {
                  left: Qr,
                  top: Zr,
                  width: Wr - Qr,
                  height: ar - Zr
                }
              })(Ir.getBoundingClientRect(), (rr => {
                const Sr = performance.now();
                return (Zr.of !== rr || Sr - Zr.atMs > 500) && (Zr = {
                  of: rr,
                  atMs: Sr,
                  list: [Lr(rr, "y"), Lr(rr, "x")]
                }), Zr.list
              })(Ir)) : null)
            };
          return Qr = requestAnimationFrame(jr), () => {
            cancelAnimationFrame(Qr), ar(null), rr.hide()
          }
        }), [Sr, rr]), (0, kr.jsx)(wr, {
          placer: rr,
          className: "PadFocusRing"
        })
      },
      rj = (rr, Sr) => {
        rr.style.transform = `translate3d(${Sr.x}px, ${Sr.y}px, 0)`, rr.classList.toggle("Visible", Sr.visible), rr.classList.toggle("Pressed", Sr.pressed)
      },
      Sj = () => {
        const rr = (0, Cr.useRef)(null);
        return (0, Cr.useEffect)((() => {
          const Sr = or.subscribe((Sr => {
            rr.current && rj(rr.current, Sr)
          }));
          return rr.current && rj(rr.current, or.get()), Sr
        }), []), (0, kr.jsx)("div", {
          ref: rr,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, kr.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      Qj = [{
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      Zj = "PadOverThirdParty",
      Wj = new Set(Qj.map((rr => rr.id))),
      aj = () => {
        const rr = Qj.map((rr => {
            let {
              id: Sr,
              find: Qr,
              startSelectors: Zr
            } = rr;
            return (0, QZ.m)({
              id: Sr,
              kind: "popup",
              getRoot: () => {
                const rr = Qr(),
                  Sr = rr ? ((rr, Sr) => {
                    var Qr;
                    for (const Zr of Sr) {
                      const Sr = rr.querySelector(Zr);
                      if (Sr) return Sr
                    }
                    return null !== (Qr = [...rr.querySelectorAll("button")].find((rr => !rr.matches(".fc-cta-consent")))) && void 0 !== Qr ? Qr : null
                  })(rr, Zr) : null;
                if (rr && Sr && !Sr.hasAttribute("data-pad-default-focus")) {
                  for (const Sr of rr.querySelectorAll("[data-pad-default-focus]")) Sr.removeAttribute("data-pad-default-focus");
                  for (const Sr of rr.querySelectorAll("[data-pad-hint-bar-avoid]")) Sr.removeAttribute("data-pad-hint-bar-avoid");
                  Sr.setAttribute("data-pad-default-focus", ""), ((rr, Sr) => {
                    let Qr = rr;
                    for (let Zr = rr.parentElement; Zr && Sr.contains(Zr) && !(Zr.getBoundingClientRect().height >= window.innerHeight / 2); Zr = Zr.parentElement) Qr = Zr;
                    return Qr
                  })(Sr, rr).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return rr
              },
              close: null,
              memoryKey: null
            })
          })),
          Sr = document.documentElement,
          Qr = jr.d.onFrame((() => {
            const rr = (0, Nr.p)() ? pZ() : null,
              Qr = !!rr && (Zr = rr.layer, Wj.has(Zr.id));
            var Zr;
            Sr.classList.contains(Zj) !== Qr && Sr.classList.toggle(Zj, Qr)
          }));
        return () => {
          for (const Sr of rr) Sr();
          Qr(), Sr.classList.remove(Zj)
        }
      },
      jj = "PadLargePointer",
      Ij = () => {
        (0, Cr.useEffect)((() => {
          const rr = (0, zr.i)(document.body),
            Sr = uZ.install(),
            Qr = sa.install(),
            Zr = aj();
          return () => {
            rr(), Sr(), Qr(), Zr()
          }
        }), []);
        const {
          largePointer: rr
        } = (0, mr.s)(), Sr = (0, ga.z)() && rr;
        return (0, Cr.useEffect)((() => {
          if (Sr) return document.documentElement.classList.add(jj), () => {
            document.documentElement.classList.remove(jj)
          }
        }), [Sr]), (0, Ir.createPortal)((0, kr.jsxs)(kr.Fragment, {
          children: [(0, kr.jsx)(Fa, {}), (0, kr.jsx)(ua, {}), (0, kr.jsx)(Sj, {})]
        }), document.body)
      };
    var fj = Qr(9901),
      Ej = Qr(9923),
      pj = Qr(9909);
    Qr(9931);
    const xj = (rr, Sr) => {
        const [Qr, Zr] = (0, Cr.useState)(!1), [Wr, ar] = (0, Cr.useState)(null), jr = (0, Cr.useRef)(null), Ir = (0, Cr.useCallback)((rr => {
          jr.current = rr, ar(rr)
        }), []), fr = (0, Cr.useCallback)((() => {
          Zr(!1), Ir(null)
        }), [Ir]), pr = (0, Cr.useCallback)((() => {
          Zr(!0)
        }), []), xr = (0, Cr.useCallback)(((rr, Sr) => {
          Ir((0, pj.E)(rr, Sr, jr.current))
        }), [Ir]);
        (0, Cr.useLayoutEffect)((() => (Sr(Qr), (0, Ca.s)(rr, Qr), Er.i.Jp(Ca.m), () => {
          Sr(!1), (0, Ca.s)(rr, !1), Er.i.Jp(Ca.m)
        })), [Qr, rr, Sr]), (0, hW.c)("appManagerUpdated|activeInputDevice", (rr => {
          "gamepad" !== rr && fr()
        })), (0, hW.c)("appManagerUpdated|gameState", (rr => {
          "inGame" !== rr && fr()
        }));
        const mr = () => {
          (0, fQ.l)() && fr()
        };
        return (0, hW.c)("appManagerUpdated|openEverythingMenuName", mr), (0, hW.c)("appManagerUpdated|openInGameMenuName", mr), {
          open: Qr,
          picked: Wr,
          pickedRef: jr,
          show: pr,
          aim: xr,
          close: fr
        }
      },
      mj = rr => {
        let {
          className: Sr,
          slotCount: Qr,
          picked: Zr,
          slotLabel: Wr,
          renderSlot: ar,
          centre: jr
        } = rr;
        const Ir = Array.from({
          length: Qr
        }, ((rr, Sr) => Sr));
        return (0, kr.jsx)("div", {
          className: Gr()("EmoteWheelOverlay PadRadialWheel", Sr),
          children: (0, kr.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * pj.p + "rem",
              height: 2 * pj.p + "rem"
            },
            children: [(0, kr.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${pj.l} ${pj.l}`,
              children: [Ir.map((rr => (0, kr.jsx)("path", {
                d: (0, pj.q)(rr, Qr, pj.e, pj.g, pj.h),
                className: Gr()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: rr === Zr
                }),
                "aria-label": Wr(rr)
              }, rr))), (0, kr.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: pj.e,
                cy: pj.e,
                r: pj.h
              }), (0, kr.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: pj.e,
                cy: pj.e,
                r: pj.g
              }), null !== Zr && (0, kr.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, pj.q)(Zr, Qr, pj.e, pj.g, pj.h)
              })]
            }), Ir.map((rr => {
              const Sr = (0, pj.x)(rr, Qr);
              return (0, kr.jsx)("div", {
                className: Gr()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: rr === Zr
                }),
                style: {
                  left: `calc(50% + ${pj.d*Math.cos(Sr)}rem)`,
                  top: `calc(50% + ${pj.d*Math.sin(Sr)}rem)`
                },
                "aria-hidden": !0,
                children: ar(rr)
              }, rr)
            })), (0, kr.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: jr
            })]
          })
        })
      },
      Nj = pa.c.length,
      Uj = () => {
        const {
          t: rr
        } = (0, Wr.E)(), Sr = xj("chat", XQ.n), Qr = (0, Ta.p)();
        return (0, hW.c)(XQ.k, (() => {
          Sr.open || (0, fj.f)() || (0, Ej.p)() || "inGame" !== fr.c.get("gameState") || (0, fQ.l)() || !(0, LQ.c)() || Sr.show()
        })), (0, hW.c)(XQ.f, (rr => {
          Sr.open && Sr.aim(rr, Nj)
        })), (0, hW.c)(XQ.i, (() => {
          var rr;
          if (!Sr.open) return;
          const Zr = Sr.pickedRef.current;
          null !== Zr ? pa.g.claim(performance.now()) && (Sr.close(), null === (rr = (0, LQ.c)()) || void 0 === rr || rr.sendLine(Qr[Zr])) : Sr.close()
        })), (0, hW.c)(XQ.g, Sr.close), Sr.open ? (0, kr.jsx)(mj, {
          className: "QuickChatWheel",
          slotCount: Nj,
          picked: Sr.picked,
          slotLabel: rr => Qr[rr],
          renderSlot: rr => Qr[rr],
          centre: null !== Sr.picked ? Qr[Sr.picked] : rr("controller:quickChatPick")
        }) : null
      },
      tj = () => {
        const {
          t: rr
        } = (0, Wr.E)(), Sr = xj("actionButton", Ej.r), [Qr, Zr] = (0, Cr.useState)([]);
        if ((0, hW.c)(Ej.m, (rr => {
            Sr.open || (0, fj.f)() || (0, XQ.d)() || "inGame" !== fr.c.get("gameState") || (0, fQ.l)() || (Zr(rr), Sr.show())
          })), (0, hW.c)(Ej.c, (rr => {
            Sr.open && Sr.aim(rr, Qr.length)
          })), (0, hW.c)(Ej.j, (() => {
            if (!Sr.open) return;
            const rr = Sr.pickedRef.current;
            Sr.close(), null !== rr && Er.i.Jp(Ej.n, Qr[rr])
          })), (0, hW.c)(Ej.g, Sr.close), !Sr.open) return null;
        const ar = null !== Sr.picked ? Qr[Sr.picked] : null;
        return (0, kr.jsx)(mj, {
          className: "ActionWheel",
          slotCount: Qr.length,
          picked: Sr.picked,
          slotLabel: Sr => {
            const Zr = Qr[Sr];
            return "reload" === Zr.kind ? rr("controller:gameplayReload") : "customButton" === Zr.kind ? Zr.description || Zr.icon : "touchButton" === Zr.kind && "string" === typeof Zr.label ? Zr.label : ""
          },
          renderSlot: rr => (0, kr.jsx)(TW, {
            action: Qr[rr]
          }),
          centre: ar ? (0, kr.jsx)(TW, {
            action: ar
          }) : rr("controller:actionWheelPick")
        })
      };
    var hj = Qr(109);
    const zj = () => ((0, Cr.useEffect)((() => {
        var rr, Sr;
        const Qr = (0, zr.i)(document.getElementById("root")),
          Zr = (0, Nr.h)(),
          Wr = (() => {
            const rr = [Er.i.subscribe(SW.h, (() => {
                aW("blockBreak")
              })), Er.i.subscribe("damagedByOtherPlayer", (() => {
                aW("damage")
              })), Er.i.subscribe("yourAttackHit", (rr => {
                let {
                  hitSelf: Sr
                } = rr;
                Sr || aW("hit")
              }))],
              Sr = jr.d.onActivePadChanged((rr => {
                rr && aW("connect")
              }));
            return () => {
              for (const Sr of rr) Er.i.unsubscribe(Sr);
              Sr()
            }
          })(),
          ar = (() => {
            const rr = new xW({
              getVisitId: pW.getVisitSessionId,
              peekVisitId: pW.peekVisitSessionId,
              readReportedVisitId: () => {
                const rr = EW.n.getItem(mW);
                return "string" === typeof rr ? rr : null
              },
              writeReportedVisitId: rr => {
                EW.n.setItem(mW, rr)
              },
              isPadActive: Nr.p,
              getPadFamily: () => {
                var rr, Sr;
                return null !== (rr = null === (Sr = jr.d.getActivePad()) || void 0 === Sr ? void 0 : Sr.family) && void 0 !== rr ? rr : null
              },
              canReport: IW.isBloxdGa4Ready,
              getInputType: fW.b,
              jx: IW.logControllerUsedToGtag
            });
            let Sr = 0,
              Qr = null;
            const Zr = Wr => {
                null === Qr && ("notReady" !== rr.check(Wr) || null !== Qr || Sr >= 20 || (Sr++, Qr = setTimeout((() => {
                  Qr = null, Zr(!1)
                }), 3e3)))
              },
              Wr = Er.i.subscribe("appManagerUpdated|activeInputDevice", (() => {
                Zr(!0)
              })),
              ar = (0, pW.onVisitStarted)((() => {
                Sr = 0, Zr(!0)
              }));
            return () => {
              Er.i.unsubscribe(Wr), ar(), null !== Qr && clearTimeout(Qr)
            }
          })(),
          Ir = jr.d.onFrame(((rr, Sr, Qr) => {
            const Zr = (0, Nr.u)(rr, Qr);
            xr.d.dispatch(rr, Sr, Zr)
          }));
        let pr = null !== (rr = null === (Sr = jr.d.getActivePad()) || void 0 === Sr ? void 0 : Sr.family) && void 0 !== rr ? rr : null;
        const Ur = jr.d.onActivePadChanged((rr => {
            var Sr, Qr;
            (xr.d.reset(), (0, Nr.A)(), Er.i.Jp(jr.b, rr), (null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.family) && void 0 !== Sr ? Sr : null) !== pr) && (pr = null !== (Qr = null === rr || void 0 === rr ? void 0 : rr.family) && void 0 !== Qr ? Qr : null, Er.i.Jp(mr.e, (0, mr.g)()));
            !rr && (0, Nr.p)() && (0, Nr.B)(fr.c.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          tr = () => {
            "visible" !== document.visibilityState && xr.d.clear()
          },
          hr = () => {
            xr.d.clear()
          };
        document.addEventListener("visibilitychange", tr), window.addEventListener("blur", hr), jr.d.start(), (0, jW.g)();
        const Yr = null;
        return () => {
          Qr(), Zr(), Wr(), ar(), Ir(), Ur(), document.removeEventListener("visibilitychange", tr), window.removeEventListener("blur", hr), jr.d.stop(), null === Yr || void 0 === Yr || Yr()
        }
      }), []), (0, kr.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, kr.jsx)(HW, {}), (0, kr.jsx)(VW, {}), (0, kr.jsx)(iW, {}), (0, kr.jsx)(qa, {}), (0, kr.jsx)(Ij, {}), (0, kr.jsx)(Uj, {}), (0, kr.jsx)(tj, {})]
      })),
      Yj = () => hj.featureFlags.useControllerSupport ? (0, kr.jsx)(zj, {}) : null;
    var nj = Qr(9319),
      ej = Qr(9937);
    const Kj = new Set(jW.f),
      yj = rr => `${ej.r}${(0,mr.k)()}/${rr}`,
      Bj = rr => {
        if (!(0, ej.p)(rr)) return null;
        const [Sr, Qr] = rr.slice(ej.r.length).split("/");
        return (0, nj.e)(Sr) && Kj.has(Qr) ? (0, jW.e)(Sr, Qr) : null
      };
    var Tj = Qr(9946);
    const vj = () => {
        const {
          t: rr
        } = (0, Wr.E)(), Sr = (0, Nr.C)(), {
          gameState: Qr,
          isUiHidden: Zr
        } = (0, fr.n)(["gameState", "isUiHidden"]), {
          hideButtonHints: ar,
          sneakMode: jr
        } = (0, mr.s)(), [Ir, Er] = (0, Cr.useState)(Tj.b);
        return (0, hW.c)(PW.v, Er), Sr && !Zr && "inGame" === Qr && Ir ? (0, kr.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!ar && (0, kr.jsx)(yW, {
            glyph: (0, pr.k)("toggle" === jr ? "sneak" : "sneakToggle")
          }), (0, kr.jsx)("span", {
            children: rr("controller:gameplaySneaking")
          })]
        }) : null
      },
      Oj = 12,
      Lj = rr => {
        let {
          trigger: Sr,
          className: Qr,
          children: Zr
        } = rr;
        const Wr = (0, Cr.useRef)(null);
        return (0, Cr.useEffect)((() => {
          let rr = 0;
          const Qr = Lr(Sr, "y"),
            Zr = () => {
              rr = requestAnimationFrame(Zr);
              const ar = Wr.current;
              if (!ar || null === Sr || void 0 === Sr || !Sr.isConnected) return;
              const {
                left: jr,
                top: Ir
              } = function(rr, Sr, Qr) {
                let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const ar = rr.left + rr.width / 2,
                  jr = Math.max(Oj, Qr.width - Oj - Sr.width),
                  Ir = Math.min(Math.max(ar - Sr.width / 2, Oj), jr),
                  fr = Qr.height - Zr;
                let Er = 0,
                  pr = fr;
                if (Wr) {
                  const rr = Math.max(0, Wr.top),
                    Zr = Math.min(fr, Wr.bottom);
                  Zr - rr >= Math.max(Qr.height / 2, Sr.height + 24) && (Er = rr, pr = Zr)
                }
                const xr = rr.top + rr.height / 2 < (Er + pr) / 2 ? pr - Oj - Sr.height : Er + Oj;
                return {
                  left: Ir,
                  top: Math.max(Oj, xr)
                }
              }(Sr.getBoundingClientRect(), {
                width: ar.offsetWidth,
                height: ar.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(Aa)) || 0, null !== Qr && void 0 !== Qr && Qr.isConnected ? Qr.getBoundingClientRect() : null);
              ar.style.transform = `translate3d(${Math.round(jr)}px, ${Math.round(Ir)}px, 0)`, ar.style.visibility = "visible"
            };
          return Zr(), () => {
            cancelAnimationFrame(rr)
          }
        }), [Sr]), (0, kr.jsx)("div", {
          ref: Wr,
          className: Qr,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: Zr
        })
      };
    var lj = Qr(1448),
      Xj = Qr(9950),
      Pj = Qr(1576),
      Hj = Qr(9959),
      qj = Qr(9965);
    const Rj = {
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
      gj = () => {
        const {
          t: rr
        } = (0, Wr.E)(), Sr = (0, Nr.C)(), Qr = (0, Xj.d)(), Zr = (0, GW.l)("_tasks"), ar = (0, GW.l)("_availableLeaderboards");
        if (!Sr) return null;
        const jr = (rr => {
          let {
            hasShop: Sr,
            hasTasksOrLeaderboards: Qr,
            canInvite: Zr
          } = rr;
          const Wr = [];
          return Sr && Wr.push("shop"), Qr && Wr.push("tasks"), Zr && Wr.push("invite"), Wr.push("leave"), Wr
        })({
          hasShop: Qr,
          hasTasksOrLeaderboards: !(!Zr && !ar),
          canInvite: !!hj.featureFlags.canUseInviteLinks
        });
        return (0, kr.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: jr.map((Sr => {
            const {
              icon: Qr,
              labelKey: Zr
            } = Rj[Sr], Wr = "leave" === Sr ? Pj.L : Pj.h;
            return (0, kr.jsx)(Wr, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (rr => {
                  switch (rr) {
                    case "shop":
                      return Er.i.Jp(qj.n), void fr.c.set({
                        openEverythingMenuName: IQ.q.SHOP
                      });
                    case "tasks":
                      return void Er.i.Jp("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void Er.i.Jp("toggleMenu", "inviteLink");
                    case "leave":
                      (0, Hj.c)()
                  }
                })(Sr)
              },
              children: (0, kr.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, kr.jsx)(lj.c, {
                  name: Qr
                }), (0, kr.jsx)("span", {
                  children: rr(Zr)
                })]
              })
            }, Sr)
          }))
        })
      };
    var Cj = Qr(2135);
    const Mj = Ur.u,
      Gj = ["forward", "backward", "left", "right", "sprint"],
      kj = rr => rr.ctrlKey || rr.altKey || "Alt" === rr.key || "ArrowUp" === rr.key || "ArrowDown" === rr.key || "Tab" === rr.code || "/" === rr.key || "Slash" === rr.code;
    class Aj {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(Ur.V).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(rr) {
        this.armed = rr
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || Sr ? !rr.repeat && this.swallowedKeys.delete(rr.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(rr.code),
          continues: !1
        } : "Escape" === rr.key || rr.repeat && !this.swallowedKeys.has(rr.code) ? {
          swallow: !1,
          continues: !1
        } : Qr ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(rr.code), {
          swallow: !0,
          continues: (0, Nr.l)(rr)
        })
      }
      onKeyUp(rr) {
        return this.swallowedKeys.delete(rr.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Wr = (0, Ur.o)(rr.values, this.previousHeld),
          ar = null === Qr ? -1 : (0, Ur.l)(Qr),
          jr = ar >= 0 && Wr[ar] && !this.previousHeld[ar],
          Ir = Wr.some(((rr, Sr) => rr && !this.previousHeld[Sr] && Sr !== ar)),
          fr = Math.hypot(rr.leftStick.x, rr.leftStick.y) >= Mj,
          Er = Math.hypot(rr.rightStick.x, rr.rightStick.y) >= Mj,
          pr = fr && !this.leftStickWasPressed || Er && !this.rightStickWasPressed;
        this.previousHeld = Wr, this.leftStickWasPressed = fr, this.rightStickWasPressed = Er;
        let xr = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, xr = !0);
        const mr = !Sr && jr && !Zr,
          Nr = !mr && this.armed && !Sr && (Ir || pr);
        return (mr || Nr) && (this.consumeNextFrame = !0, this.consumeAfterContinue = Nr, xr = !0), {
          continues: Nr,
          back: mr,
          consumeHeld: xr
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const Vj = new Set([...Cj.h, ...Cj.z]),
      ij = rr => ((rr, Sr, Qr) => {
        const Zr = Object.keys(Sr).filter((Zr => !Qr.has(Zr) && Sr[Zr].includes(rr)));
        return Zr.length > 0 && Zr.every((rr => Gj.includes(rr)))
      })(rr, Cj.q, Vj),
      wj = (rr, Sr, Qr) => {
        const Zr = new Aj,
          Wr = rr => {
            if (!rr.isTrusted) return;
            const {
              swallow: Qr,
              continues: Wr
            } = Zr.onKeyDown(rr, !(0, Nr.G)(rr) || (0, rW.g)() || (0, fQ.l)(), ij(rr.code));
            Qr && (rr.stopImmediatePropagation(), kj(rr) && rr.preventDefault()), Wr && ((0, Nr.B)("keyboardMouse"), Sr())
          },
          ar = rr => {
            rr.isTrusted && Zr.onKeyUp(rr) && (rr.stopImmediatePropagation(), kj(rr) && rr.preventDefault())
          },
          Ir = () => {
            Zr.forgetKeys()
          };
        window.addEventListener("keydown", Wr, !0), window.addEventListener("keyup", ar, !0), window.addEventListener("blur", Ir);
        const fr = jr.d.onFrame((rr => {
            const Wr = xr.d.getActiveConsumerName(),
              ar = Qr(),
              jr = ar ? (0, pr.k)("menuBack") : null,
              Ir = null !== Wr && "gameplay" !== Wr,
              {
                continues: fr,
                back: Er,
                consumeHeld: Ur
              } = Zr.onPadFrame(rr, Ir, jr, (0, Nr.s)(rr));
            if (Ur) {
              const rr = (0, mr.g)().swapSticks ? "right" : "left";
              xr.d.consumeAllHeld(Zr.consumeLeavesMoveStick() ? rr : null)
            }
            Er ? null === ar || void 0 === ar || ar() : fr && Sr()
          })),
          Er = (0, rW.j)(`pressToContinue:${rr}`, (() => Zr.blocksGameplay()));
        return {
          setArmed: rr => {
            Zr.setArmed(rr)
          },
          dispose: () => {
            window.removeEventListener("keydown", Wr, !0), window.removeEventListener("keyup", ar, !0), window.removeEventListener("blur", Ir), fr(), Er()
          }
        }
      };
    var cj = Qr(5951),
      Fj = Qr(4670),
      oj = Qr(4323),
      bj = Qr(9327);
    const Jj = rr => {
        let {
          text: Sr
        } = rr;
        return (0, kr.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: Sr
        })
      },
      Dj = rr => {
        let {
          label: Sr,
          hint: Qr,
          options: Zr,
          value: ar,
          onChange: jr
        } = rr;
        const {
          t: Ir
        } = (0, Wr.E)();
        return (0, kr.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, kr.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, kr.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, kr.jsx)("div", {
                className: "SliderText",
                children: Sr
              }), Qr && (0, kr.jsx)("div", {
                className: "ControllerSettingsHint",
                children: Qr
              })]
            }), (0, kr.jsx)(oj.c, {
              options: Zr.map((rr => ({
                label: "label" in rr ? rr.label : Ir(rr.labelKey),
                value: rr.value
              }))),
              value: ar,
              onChange: rr => {
                jr(rr.value)
              }
            })]
          })
        })
      },
      dj = rr => {
        let {
          settingKey: Sr,
          label: Qr,
          range: Zr,
          format: Wr
        } = rr;
        const ar = (0, mr.s)();
        return (0, kr.jsx)(cj.f, {
          name: Qr,
          min: Zr.min,
          max: Zr.max,
          step: Zr.step,
          padStep: Zr.step,
          initValue: ar[Sr],
          format: Wr,
          onChange: rr => {
            (0, mr.o)({
              [Sr]: (0, bj.y)(rr, Zr)
            })
          }
        })
      };
    var sj = Qr(9971),
      uj = Qr(9975);
    const rI = rr => rr instanceof DOMException && ("SecurityError" === rr.name || "NotAllowedError" === rr.name),
      SI = rr => {
        const [Sr] = [...rr.controllers].sort(((rr, Sr) => uj.l[rr] - uj.l[Sr]));
        return uj.k[Sr]
      },
      QI = rr => {
        (0, sj.b)().allowPhoneMotion().catch((Sr => {
          rr && rI(Sr) ? rr() : console.warn("Could not enable the motion sensor", Sr)
        }))
      },
      ZI = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      WI = rr => {
        let {
          status: Sr
        } = rr;
        const {
          t: Qr
        } = (0, Wr.E)(), [Zr, ar] = (0, Cr.useState)(null), jr = `${Sr.controllers.join(",")}|${Sr.phoneMotion}`;
        (0, Cr.useEffect)((() => {
          ar(null)
        }), [jr]);
        const Ir = () => {
          (0, sj.b)().connectController().then((rr => {
            ar(rr > 0 ? "openFailed" : null)
          })).catch((rr => {
            rI(rr) ? ar("needsClick") : console.warn("Could not connect motion controller", rr)
          }))
        };
        if (Sr.hidSupported) {
          let rr = Qr("controller:settingsGyroConnectHint");
          return "needsClick" === Zr ? rr = Qr("controller:settingsGyroConnectNeedsClick") : "openFailed" === Zr ? rr = Qr("controller:settingsGyroOpenFailed") : Sr.controllers.length > 0 && (rr = Qr("controller:settingsGyroConnected", {
            name: SI(Sr)
          })), (0, kr.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, kr.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, kr.jsx)("div", {
                className: "ControllerSettingsHint",
                children: rr
              }), (0, kr.jsx)(Pj.h, {
                onClick: Ir,
                children: Qr("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === Sr.phoneMotion) return (0, kr.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, kr.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === Zr && (0, kr.jsx)("div", {
              className: "ControllerSettingsHint",
              children: Qr("controller:settingsGyroAllowNeedsTap")
            }), (0, kr.jsx)(Pj.h, {
              onClick: () => {
                QI((() => {
                  ar("needsTap")
                }))
              },
              children: Qr("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const fr = ZI[Sr.phoneMotion];
        return fr ? (0, kr.jsx)("div", {
          className: "ControllerSettingsHint",
          children: Qr(fr)
        }) : null
      },
      aI = () => {
        const {
          t: rr
        } = (0, Wr.E)(), Sr = (0, mr.s)(), Qr = (0, sj.e)(), Zr = (0, Nr.F)(), ar = !Qr.hidSupported && Qr.phoneSupported && !Qr.padConnected, jr = (Qr.hidSupported || Qr.phoneSupported) && !ar, Ir = (0, pr.k)("pause");
        return (0, kr.jsxs)(kr.Fragment, {
          children: [(0, kr.jsx)(Jj, {
            text: rr("controller:settingsGyro")
          }), ar && (0, kr.jsx)("div", {
            className: "ControllerSettingsHint",
            children: rr("controller:settingsGyroPhoneNeedsController")
          }), !jr && !ar && (0, kr.jsx)("div", {
            className: "ControllerSettingsHint",
            children: rr(Qr.hidBlocked || Qr.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), jr && (0, kr.jsx)(cj.c, {
            label: rr(Qr.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: Sr.gyroAiming,
            onClick: rr => {
              var Sr, Qr;
              (0, mr.o)({
                gyroAiming: rr
              });
              const Zr = null === (Sr = null === (Qr = navigator.userActivation) || void 0 === Qr ? void 0 : Qr.isActive) || void 0 === Sr || Sr;
              if (!rr || !Zr) return;
              const Wr = (0, sj.b)(),
                ar = Wr.getStatus();
              ar.hidSupported ? Wr.connectControllerIfNoneGranted().catch((rr => {
                console.warn("Motion controller picker unavailable", rr)
              })) : "needsPermission" === ar.phoneMotion && QI()
            },
            circleInfoText: rr(Qr.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), jr && Qr.hidSupported && (0, kr.jsx)("div", {
            className: "ControllerSettingsHint",
            children: rr("controller:settingsGyroSteamHint")
          }), jr && Sr.gyroAiming && (0, kr.jsxs)(kr.Fragment, {
            children: [(0, kr.jsx)(WI, {
              status: Qr
            }), (0, kr.jsx)(dj, {
              settingKey: "gyroSensitivity",
              label: rr("controller:settingsGyroSensitivity"),
              range: bj.W,
              format: bj.N
            }), (0, kr.jsx)(Dj, {
              label: rr("controller:settingsGyroActivation"),
              hint: "aiming" === Sr.gyroActivation && (0, kr.jsx)(Fj.c, {
                text: rr("controller:settingsGyroAimingHint", {
                  button: Fj.e
                }),
                glyph: (0, pr.k)("use")
              }),
              options: bj.S,
              value: Sr.gyroActivation,
              onChange: rr => {
                (0, mr.o)({
                  gyroActivation: rr
                })
              }
            }), "button" === Sr.gyroActivation && (0, kr.jsx)(Dj, {
              label: rr("controller:settingsGyroButton"),
              hint: rr("controller:settingsGyroButtonHint"),
              options: bj.t.filter((rr => rr !== Ir || rr === Sr.gyroButton)).map((rr => ({
                label: KW(Zr, rr),
                value: rr
              }))),
              value: Sr.gyroButton,
              onChange: rr => {
                (0, mr.o)({
                  gyroButton: rr
                })
              }
            })]
          })]
        })
      };
    var jI = Qr(2015);
    const II = () => {
      const {
        t: rr
      } = (0, Wr.E)(), Sr = (0, mr.s)(), Qr = (0, Nr.F)();
      return (0, kr.jsxs)(kr.Fragment, {
        children: [(0, kr.jsx)(Jj, {
          text: rr("controller:settingsAccessibility")
        }), (0, kr.jsx)(cj.c, {
          label: rr("controller:settingsSwapConfirmBack"),
          checked: (0, pr.H)(Sr.swapConfirmBack, Qr),
          onClick: rr => {
            (0, mr.o)({
              swapConfirmBack: rr === (0, pr.H)(null, Qr) ? null : rr
            }), jI.h.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: rr("controller:settingsSwapConfirmBackInfo")
        }), (0, kr.jsx)(Dj, {
          label: rr("controller:settingsButtonRepeat"),
          hint: rr("controller:settingsButtonRepeatHint"),
          options: bj.r,
          value: Sr.buttonRepeat,
          onChange: rr => {
            (0, mr.o)({
              buttonRepeat: rr
            })
          }
        }), (0, kr.jsx)(Dj, {
          label: rr("controller:settingsTapHoldTime"),
          hint: rr("controller:settingsTapHoldTimeHint"),
          options: bj.rb,
          value: Sr.tapHoldTime,
          onChange: rr => {
            (0, mr.o)({
              tapHoldTime: rr
            })
          }
        }), (0, kr.jsx)(Dj, {
          label: rr("controller:settingsEmoteButton"),
          hint: rr("wheel" === Sr.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: bj.I,
          value: Sr.emoteButton,
          onChange: rr => {
            (0, mr.o)({
              emoteButton: rr
            })
          }
        }), (0, kr.jsx)(Dj, {
          label: rr("controller:settingsAttackMode"),
          hint: rr("toggle" === Sr.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: bj.n,
          value: Sr.attackMode,
          onChange: rr => {
            (0, mr.o)({
              attackMode: rr
            })
          }
        }), (0, kr.jsx)(cj.c, {
          label: rr("controller:settingsLargePointer"),
          checked: Sr.largePointer,
          onClick: rr => {
            (0, mr.o)({
              largePointer: rr
            })
          },
          circleInfoText: rr("controller:settingsLargePointerInfo")
        })]
      })
    };
    var fI = Qr(9980);
    const EI = new class {
        constructor(rr) {
          this.router = rr, this.current = null
        }
        claim(rr, Sr) {
          const Qr = this.current;
          Qr && (this.current = null, Qr.release(), Qr.onTakenOver());
          const Zr = this.router.register({
              ...rr,
              name: "capture"
            }),
            Wr = {
              release: Zr,
              onTakenOver: Sr
            };
          return this.current = Wr, () => {
            this.current === Wr && (this.current = null), Zr()
          }
        }
      }(xr.d),
      pI = rr => {
        (0, Cr.useEffect)((() => {
          if (!rr) return;
          const Sr = rr();
          let Qr = !1;
          const Zr = () => {
              Qr || (Qr = !0, Sr.onEnd())
            },
            Wr = EI.claim({
              isActive: () => !Qr,
              onFrame: rr => {
                Sr.onFrame(rr, Zr)
              }
            }, Zr),
            ar = void 0 === Sr.timeoutMs ? void 0 : window.setTimeout(Zr, Sr.timeoutMs),
            jr = rr => {
              "Escape" === rr.key && (rr.preventDefault(), rr.stopPropagation(), Zr())
            };
          return window.addEventListener("keydown", jr, !0), () => {
            Qr = !0, Wr(), window.clearTimeout(ar), window.removeEventListener("keydown", jr, !0)
          }
        }), [rr])
      },
      xI = rr => {
        let {
          row: Sr,
          capturing: Qr,
          onCapture: Zr,
          holdFillRef: ar,
          onRebind: jr,
          swapped: Ir
        } = rr;
        const {
          t: fr
        } = (0, Wr.E)();
        if ("fixed" === Sr.kind) return (0, kr.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, kr.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, kr.jsx)("div", {
              className: "ControlName",
              children: fr(Sr.labelKey)
            }), (0, kr.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, kr.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, kr.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, kr.jsx)(yW, {
                    glyph: "move" === Sr.stick ? (0, pr.s)() : (0, pr.r)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: Er
        } = Sr, xr = (0, pr.k)(Er), mr = (0, pr.o)(Er), Nr = xr !== mr && (0, pr.e)(Er, mr);
        return (0, kr.jsxs)("div", {
          className: Gr()("ControlRow PadControlRow", {
            Capturing: Qr
          }),
          children: [(0, kr.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, kr.jsx)("div", {
              className: "ControlName",
              children: fr(bj.j[Er])
            }), (0, kr.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!Qr && (0, kr.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, kr.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Zr(Er)
                  },
                  children: (0, kr.jsx)(yW, {
                    glyph: xr
                  })
                }), Nr && (0, kr.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: fr("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    jr(Er, mr)
                  },
                  children: (0, kr.jsx)(lj.c, {
                    name: "arrows-rotate"
                  })
                })]
              }), Qr && (0, kr.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, kr.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, kr.jsx)("span", {
                    children: fr("controller:settingsCapturePrompt")
                  }), (0, kr.jsx)("div", {
                    ref: ar,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, kr.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Zr(null)
                  },
                  children: "\xd7"
                })]
              }), Qr && (0, kr.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, kr.jsx)(Fj.c, {
                  text: fr((0, pr.e)(Er, (0, pr.k)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: Fj.e
                  }),
                  glyph: (0, pr.k)("menuBack")
                })
              })]
            })]
          }), Ir.map((rr => (0, kr.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, kr.jsx)(Fj.c, {
              text: fr("controller:settingsSwapNotice", {
                action: fr(bj.j[rr]),
                button: Fj.e
              }),
              glyph: (0, pr.k)(rr)
            })
          }, rr))), Qr && (0, kr.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${bj.v}ms`
            }
          })]
        })
      },
      mI = [],
      NI = rr => {
        let {
          layoutSetting: Sr
        } = rr;
        const {
          t: Qr
        } = (0, Wr.E)(), Zr = (0, mr.s)();
        (0, Nr.F)();
        const ar = (0, Cr.useRef)(null),
          [jr, Ir] = (0, Cr.useState)(null),
          fr = (0, Cr.useCallback)(((rr, Sr) => {
            const Qr = (0, mr.g)().bindings;
            (0, pr.E)(rr, Sr);
            const Zr = (0, pr.w)(Qr, rr);
            Ir(Zr.length > 0 ? {
              action: rr,
              swapped: Zr
            } : null)
          }), []),
          [Er, tr] = ((rr, Sr) => {
            const [Qr, Zr] = (0, Cr.useState)(null), Wr = (0, Cr.useMemo)((() => Qr ? () => {
              const Wr = (0, pr.k)("menuBack"),
                ar = new bj.b(Wr, (0, pr.k)("menuConfirm"), (rr => (0, pr.e)(Qr, rr)));
              return {
                onFrame: (Zr, jr) => {
                  var Ir;
                  const fr = Zr.frame.timestampMs,
                    Er = ar.update({
                      ...Zr,
                      isDown: rr => (0, Ur.I)(Zr.frame.values, rr)
                    }, fr);
                  null === (Ir = rr.current) || void 0 === Ir || Ir.style.setProperty("width", 100 * ar.getBindHoldProgress(fr) + "%"), Er && ("bind" === Er.kind ? (xr.d.consumeButton(Er.button), Sr(Qr, Er.button)) : xr.d.consumeButton(Wr), jr())
                },
                onEnd: () => {
                  Zr(null)
                },
                timeoutMs: bj.v
              }
            } : null), [Qr, rr, Sr]);
            return pI(Wr), [Qr, Zr]
          })(ar, fr),
          hr = rr => {
            rr && Ir(null), tr(rr)
          };
        (0, Cr.useEffect)((() => {
          if (!jr) return;
          const rr = window.setTimeout((() => {
            Ir(null)
          }), bj.qb);
          return () => {
            window.clearTimeout(rr)
          }
        }), [jr]);
        const zr = !Zr.swapSticks && 0 === Object.keys(Zr.bindings).length;
        return (0, kr.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, kr.jsx)("div", {
            className: "SliderText",
            children: Qr("controller:settingsRemap")
          }), (0, kr.jsx)("div", {
            className: "ControllerSettingsHint",
            children: Qr("controller:settingsRemapHint")
          }), (0, kr.jsx)(Pj.L, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: zr,
            onClick: () => {
              hr(null), Ir(null), (0, pr.F)()
            },
            children: Qr("controller:settingsResetAll")
          }), Sr, bj.kb.map(((rr, Sr) => (0, kr.jsx)(fI.e, {
            title: Qr(rr.titleKey),
            defaultOpen: 0 === Sr,
            children: rr.rows.map((rr => (0, kr.jsx)(xI, {
              row: rr,
              capturing: "action" === rr.kind && rr.action === Er,
              onCapture: hr,
              holdFillRef: ar,
              onRebind: fr,
              swapped: "action" === rr.kind && (null === jr || void 0 === jr ? void 0 : jr.action) === rr.action ? jr.swapped : mI
            }, "action" === rr.kind ? rr.action : rr.labelKey)))
          }, rr.titleKey)))]
        })
      },
      UI = rr => {
        let {
          deadzone: Sr,
          dotRef: Qr,
          labelKey: Zr
        } = rr;
        const {
          t: ar
        } = (0, Wr.E)();
        return (0, kr.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, kr.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, kr.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * Sr + "%",
                height: 100 * Sr + "%"
              }
            }), (0, kr.jsx)("div", {
              ref: Qr,
              className: "ControllerTesterDot"
            })]
          }), (0, kr.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: ar(Zr)
          })]
        })
      },
      tI = (rr, Sr, Qr, Zr) => {
        var Wr;
        rr && (rr.style.left = 50 + 50 * Math.max(-1, Math.min(1, Sr.x)) + "%", rr.style.top = 50 + 50 * Math.max(-1, Math.min(1, Sr.y)) + "%", null === (Wr = rr.parentElement) || void 0 === Wr || Wr.classList.toggle("Active", Zr || Math.hypot(Sr.x, Sr.y) > Qr))
      },
      hI = rr => {
        const Sr = {
            deadzone: rr.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          Qr = {
            deadzone: rr.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return rr.swapSticks ? {
          left: Qr,
          right: Sr
        } : {
          left: Sr,
          right: Qr
        }
      },
      zI = () => {
        const {
          t: rr
        } = (0, Wr.E)(), Sr = (() => {
          const [rr, Sr] = (0, Cr.useState)((() => jr.d.getActivePad()));
          return (0, hW.c)(jr.b, (() => {
            Sr(jr.d.getActivePad())
          })), rr
        })(), Qr = hI((0, mr.s)()), Zr = (0, Cr.useRef)(null), ar = (0, Cr.useRef)(null), Ir = (0, Cr.useRef)([]), fr = (0, Cr.useRef)(null), Er = (0, Cr.useRef)(null), [Nr, tr] = (rr => {
          const [Sr, Qr] = (0, Cr.useState)(!1), Zr = (0, Cr.useMemo)((() => Sr ? () => {
            const Sr = (0, pr.k)("menuBack"),
              Zr = new bj.f;
            return {
              onFrame: (Qr, Wr) => {
                var ar;
                const jr = Zr.update({
                  pressed: Qr.wasPressed(Sr),
                  wI: Qr.isHeld(Sr)
                }, Qr.frame.timestampMs);
                null === (ar = rr.current) || void 0 === ar || ar.style.setProperty("width", 100 * jr + "%"), jr >= 1 && (xr.d.consumeButton(Sr), Wr())
              },
              onEnd: () => {
                Qr(!1)
              }
            }
          } : null), [Sr, rr]);
          return pI(Zr), [Sr, Qr]
        })(ar);
        (0, Cr.useEffect)((() => {
          const rr = rr => {
            for (const Qr of Ur.W) {
              const Sr = (0, Ur.l)(Qr),
                Zr = Ir.current[Sr];
              if (!Zr) continue;
              const Wr = rr.values[Sr];
              Zr.classList.toggle("Pressed", Wr >= Ur.u), (0, Ur.J)(Sr) && Zr.style.setProperty("--trigger-fill", `${Math.round(100*Wr)}%`)
            }
            const Sr = hI((0, mr.g)());
            tI(fr.current, rr.leftStick, Sr.left.deadzone, rr.values[(0, Ur.l)("LS")] >= Ur.u), tI(Er.current, rr.rightStick, Sr.right.deadzone, rr.values[(0, Ur.l)("RS")] >= Ur.u)
          };
          return Sr || rr((0, Ur.t)()), jr.d.onFrame(rr)
        }), [Sr]), (0, Cr.useEffect)((() => {
          Sr || tr(!1)
        }), [Sr, tr]), (0, Cr.useEffect)((() => {
          var rr;
          Nr && (null === (rr = Zr.current) || void 0 === rr || rr.scrollIntoView({
            block: "nearest"
          }))
        }), [Nr]);
        const hr = bj.fb.find((rr => rr.value === (null === Sr || void 0 === Sr ? void 0 : Sr.family)));
        return (0, kr.jsxs)("div", {
          ref: Zr,
          className: Gr()("SettingBox ControllerTester", {
            Testing: Nr
          }),
          children: [(0, kr.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, kr.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [Sr && (0, kr.jsx)("div", {
                children: rr("controller:settingsTesterFamily", {
                  family: hr ? rr(hr.labelKey) : Sr.family
                })
              }), Sr && (0, kr.jsx)("div", {
                className: "ControllerTesterPadId",
                children: Sr.id
              }), !Sr && (0, kr.jsx)("div", {
                children: rr("controller:settingsTesterNoPad")
              })]
            }), (Sr || Nr) && (0, kr.jsx)(Pj.h, {
              className: "ControllerTesterToggle",
              onClick: () => {
                tr(!Nr)
              },
              children: rr(Nr ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), Sr && !Nr && (0, kr.jsx)("div", {
            className: "ControllerSettingsHint",
            children: rr("controller:settingsTesterHint")
          }), Nr && (0, kr.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, kr.jsx)(Fj.c, {
              text: rr("controller:settingsTesterTesting", {
                button: Fj.e
              }),
              glyph: (0, pr.k)("menuBack")
            }), (0, kr.jsx)("div", {
              ref: ar,
              className: "ControllerTesterExitFill"
            })]
          }), (0, kr.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, kr.jsx)(UI, {
              deadzone: Qr.left.deadzone,
              dotRef: fr,
              labelKey: Qr.left.labelKey
            }), (0, kr.jsx)("div", {
              className: "ControllerTesterButtons",
              children: Ur.W.map((rr => {
                const Qr = (0, Ur.l)(rr);
                return (0, kr.jsx)("div", {
                  ref: rr => {
                    Ir.current[Qr] = rr
                  },
                  className: (0, Ur.J)(Qr) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, kr.jsx)(yW, {
                    glyph: rr,
                    family: null === Sr || void 0 === Sr ? void 0 : Sr.family
                  })
                }, rr)
              }))
            }), (0, kr.jsx)(UI, {
              deadzone: Qr.right.deadzone,
              dotRef: Er,
              labelKey: Qr.right.labelKey
            })]
          })]
        })
      },
      YI = (0, Cr.memo)((function() {
        const {
          t: rr
        } = (0, Wr.E)(), Sr = (0, mr.s)(), [Qr, Zr] = (0, Cr.useState)(!1);
        return (0, Cr.useEffect)((() => {
          if (!Qr) return;
          const rr = window.setTimeout((() => {
            Zr(!1)
          }), bj.qb);
          return () => {
            window.clearTimeout(rr)
          }
        }), [Qr]), (0, kr.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, kr.jsx)(Jj, {
            text: rr("controller:settingsLook")
          }), (0, kr.jsx)(dj, {
            settingKey: "lookSensitivityX",
            label: rr("controller:settingsLookSensitivityX"),
            range: bj.mb,
            format: bj.R
          }), (0, kr.jsx)(dj, {
            settingKey: "lookSensitivityY",
            label: rr("controller:settingsLookSensitivityY"),
            range: bj.mb,
            format: bj.R
          }), (0, kr.jsx)(dj, {
            settingKey: "aimLookSensitivity",
            label: rr("controller:settingsAimLookSensitivity"),
            range: bj.k,
            format: bj.R
          }), (0, kr.jsx)(Dj, {
            label: rr("controller:settingsLookCurve"),
            hint: rr("controller:settingsLookCurveHint"),
            options: bj.cb,
            value: Sr.lookCurve,
            onChange: rr => {
              (0, mr.o)({
                lookCurve: rr
              })
            }
          }), (0, kr.jsx)(cj.c, {
            label: rr("controller:settingsInvertLookX"),
            checked: Sr.invertLookX,
            onClick: rr => {
              (0, mr.o)({
                invertLookX: rr
              })
            }
          }), (0, kr.jsx)(cj.c, {
            label: rr("controller:settingsInvertLookY"),
            checked: Sr.invertLookY,
            onClick: rr => {
              (0, mr.o)({
                invertLookY: rr
              })
            }
          }), (0, kr.jsx)(dj, {
            settingKey: "lookDeadzone",
            label: rr("controller:settingsLookDeadzone"),
            range: bj.E,
            format: bj.J
          }), (0, kr.jsx)(aI, {}), (0, kr.jsx)(Jj, {
            text: rr("controller:settingsMovement")
          }), (0, kr.jsx)(dj, {
            settingKey: "moveDeadzone",
            label: rr("controller:settingsMoveDeadzone"),
            range: bj.E,
            format: bj.J
          }), (0, kr.jsx)(cj.c, {
            label: rr("controller:settingsAutoSprint"),
            checked: Sr.autoSprint,
            onClick: rr => {
              (0, mr.o)({
                autoSprint: rr
              })
            },
            circleInfoText: rr("controller:settingsAutoSprintInfo")
          }), (0, kr.jsx)(Dj, {
            label: rr("controller:settingsSneak"),
            options: bj.ob,
            value: Sr.sneakMode,
            onChange: rr => {
              (0, mr.o)({
                sneakMode: rr
              })
            }
          }), (0, kr.jsx)(Jj, {
            text: rr("controller:settingsButtons")
          }), (0, kr.jsx)(Dj, {
            label: rr("controller:settingsPromptFamily"),
            options: bj.fb,
            value: Sr.promptFamily,
            onChange: rr => {
              (0, mr.o)({
                promptFamily: rr
              })
            }
          }), (0, kr.jsx)(cj.c, {
            label: rr("controller:settingsHideButtonHints"),
            checked: Sr.hideButtonHints,
            onClick: rr => {
              (0, mr.o)({
                hideButtonHints: rr
              })
            }
          }), (0, kr.jsx)(cj.c, {
            label: rr("controller:settingsVibration"),
            checked: Sr.vibration,
            onClick: rr => {
              (0, mr.o)({
                vibration: rr
              }), rr && aW("preview")
            }
          }), (0, kr.jsx)(dj, {
            settingKey: "cursorSpeed",
            label: rr("controller:settingsCursorSpeed"),
            range: bj.B,
            format: bj.R
          }), (0, kr.jsx)(cj.c, {
            label: rr("controller:settingsCursorMagnetism"),
            checked: Sr.cursorMagnetism,
            onClick: rr => {
              (0, mr.o)({
                cursorMagnetism: rr
              })
            }
          }), (0, kr.jsx)(cj.c, {
            label: rr("controller:settingsMenuBackToCategories"),
            checked: Sr.menuBackToCategories,
            onClick: rr => {
              (0, mr.o)({
                menuBackToCategories: rr
              })
            }
          }), (0, kr.jsx)(NI, {
            layoutSetting: (0, kr.jsxs)(kr.Fragment, {
              children: [pr.h.map((Qr => (0, kr.jsx)(cj.c, {
                label: rr(bj.Z[Qr]),
                checked: (0, pr.C)(Qr, Sr),
                onClick: rr => {
                  Zr(!(0, pr.I)(Qr, rr))
                }
              }, Qr))), Qr && (0, kr.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: rr("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, kr.jsx)(II, {}), (0, kr.jsx)(Jj, {
            text: rr("controller:settingsAlternatives")
          }), (0, kr.jsx)("div", {
            className: "ControllerSettingsHint",
            children: rr("controller:settingsAlternativesHint")
          }), (0, kr.jsx)(Dj, {
            label: rr("controller:settingsMenuNavigation"),
            hint: rr("controller:settingsMenuNavigationHint"),
            options: bj.eb,
            value: Sr.menuNavigation,
            onChange: rr => {
              (0, mr.o)({
                menuNavigation: rr
              })
            }
          }), (0, kr.jsx)(Dj, {
            label: rr("controller:settingsInventoryNavigation"),
            hint: rr("controller:settingsInventoryNavigationHint"),
            options: bj.X,
            value: Sr.inventoryNavigation,
            onChange: rr => {
              (0, mr.o)({
                inventoryNavigation: rr
              })
            }
          }), (0, kr.jsx)(Dj, {
            label: rr("controller:settingsQuickChat"),
            hint: rr("controller:settingsQuickChatHint"),
            options: bj.ib,
            value: Sr.quickChat,
            onChange: rr => {
              (0, mr.o)({
                quickChat: rr
              })
            }
          }), (0, kr.jsx)(Dj, {
            label: rr("controller:settingsLeaderboardButton"),
            hint: rr("controller:settingsLeaderboardButtonHint"),
            options: bj.bb,
            value: Sr.leaderboardButton,
            onChange: rr => {
              (0, mr.o)({
                leaderboardButton: rr
              })
            }
          }), (0, kr.jsx)(Jj, {
            text: rr("controller:settingsTester")
          }), (0, kr.jsx)(zI, {})]
        })
      }));
    (0, Wr.d)(Zr);
    for (const BI of (0, ar.q)()) BI.connected ? jr.d.handleConnectionEvent(BI) : jr.d.handleDisconnectionEvent(BI);
    const nI = () => null !== jr.d.getActivePad(),
      eI = () => WQ.getState(),
      KI = () => WQ.isSteppingSlots(),
      yI = (rr, Sr) => {
        const Qr = uZ.getFocused();
        uZ.isActive() && Qr && rr.contains(Qr) && uZ.setFocus(Sr, {
          scroll: !1
        })
      }
  },
  9300: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => fr,
      e: () => Er
    });
    var Zr = Qr(1561),
      Wr = Qr(1552);
    const ar = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      jr = "28de",
      Ir = new Set(["1205"]),
      fr = (rr, Sr) => {
        const Qr = (0, Zr.c)(rr);
        if ((null === Qr || void 0 === Qr ? void 0 : Qr.vendor) === jr) return Ir.has(Qr.product) ? "steamdeck" : "xbox";
        if (Qr && ar[Qr.vendor]) return ar[Qr.vendor];
        if ((0, Wr.b)(rr)) return "nintendo";
        const fr = `${rr} ${null!==Sr&&void 0!==Sr?Sr:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(fr) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(fr) ? "nintendo" : /steam deck/.test(fr) ? "steamdeck" : "xbox"
      },
      Er = rr => {
        var Sr;
        return (null === (Sr = (0, Zr.c)(rr)) || void 0 === Sr ? void 0 : Sr.vendor) === jr
      }
  },
  9333: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Er,
      g: () => Ir
    });
    var Zr = Qr(9292);
    const Wr = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      ar = new Set(["capture", "gameplay"]),
      jr = ["Up", "Down", "Left", "Right"],
      Ir = rr => jr.includes(rr),
      fr = .25;
    const Er = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.wI = new Array(Zr.V).fill(!1), this.previousHeld = new Array(Zr.V).fill(!1), this.consumedButtons = new Array(Zr.V).fill(!1), this.suppressedReleases = new Array(Zr.V).fill(!1), this.wakeOwned = new Array(Zr.V).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, Zr.t)()
      }
      register(rr) {
        return this.consumers.has(rr.name) && console.warn(`Controller consumer "${rr.name}" registered twice; the newer one replaces it.`), this.consumers.set(rr.name, rr), () => {
          var Sr;
          this.consumers.get(rr.name) === rr && (this.activeName === rr.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (Sr = this.peek) || void 0 === Sr ? void 0 : Sr.over) === rr.name && (this.peek = null), this.consumers.delete(rr.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(rr) {
        return this.wI[(0, Zr.l)(rr)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.wI = new Array(Zr.V).fill(!1), this.previousHeld = new Array(Zr.V).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, Zr.t)()
      }
      dispatch(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = rr, this.previousHeld = this.wI, this.wI = (0, Zr.o)(rr.values, this.previousHeld);
        for (let ar = 0; ar < Zr.V; ar++) this.suppressedReleases[ar] = !this.wI[ar] && this.consumedButtons[ar], this.wI[ar] || (this.consumedButtons[ar] = !1), this.wakeOwned[ar] && (this.wI[ar] ? (this.consumedButtons[ar] = !0, this.wakeOwned[ar] = !1) : rr.values[ar] < Zr.S && (this.wakeOwned[ar] = !1));
        Math.hypot(rr.leftStick.x, rr.leftStick.y) < fr && (this.leftStickConsumed = !1), Math.hypot(rr.rightStick.x, rr.rightStick.y) < fr && (this.rightStickConsumed = !1);
        const Wr = this.pickActive();
        if ((null === Wr || void 0 === Wr ? void 0 : Wr.name) !== this.activeName) {
          var jr, Ir, Er, pr, xr, mr;
          const rr = this.activeName,
            Sr = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            Qr = null !== (jr = null === Wr || void 0 === Wr || null === (Ir = Wr.peek) || void 0 === Ir ? void 0 : Ir.call(Wr)) && void 0 !== jr ? jr : null,
            ar = null === rr && !!Qr && !(null === (Er = this.consumers.get(Qr.over)) || void 0 === Er || !Er.onPeekFrame),
            fr = Qr && (Qr.over === rr || ar) ? Qr : null,
            Nr = null !== this.peek && this.peek.over === (null === Wr || void 0 === Wr ? void 0 : Wr.name) ? this.peek : null;
          this.deactivateCurrent(null !== fr, null !== Nr), this.activeName = null !== (pr = null === Wr || void 0 === Wr ? void 0 : Wr.name) && void 0 !== pr ? pr : null, null === rr || this.handOffPending || this.consumeAllHeld();
          const Ur = null === (xr = null !== fr && void 0 !== fr ? fr : Nr) || void 0 === xr ? void 0 : xr.stick;
          "left" === Ur && Sr.left ? this.leftStickConsumed = !1 : "right" === Ur && Sr.right && (this.rightStickConsumed = !1), this.peek = fr, Wr || null === rr ? Wr && (null === (mr = this.idleResume) || void 0 === mr ? void 0 : mr.name) === Wr.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: rr,
            left: Sr.left && this.leftStickConsumed,
            right: Sr.right && this.rightStickConsumed
          }, Wr && (this.idleResume = null);
          for (let Wr = 0; Wr < Zr.V; Wr++) this.previousHeld[Wr] && !this.wI[Wr] && (this.suppressedReleases[Wr] = !0)
        }
        var Nr, Ur;
        (this.handOffPending = !1, Wr) && (Qr && !ar.has(Wr.name) && this.consumeWakePress(Wr), Wr.onFrame(this.buildInput(rr, Sr, Qr)), this.peek && (null === (Nr = this.consumers.get(this.peek.over)) || void 0 === Nr || null === (Ur = Nr.onPeekFrame) || void 0 === Ur || Ur.call(Nr, this.buildInput(rr, Sr, !1, this.peek.stick))))
      }
      consumeWakePress(rr) {
        for (let Wr = 0; Wr < Zr.V; Wr++) {
          var Sr, Qr;
          const ar = Zr.W[Wr];
          (null !== (Sr = null === (Qr = rr.wakePressActs) || void 0 === Qr ? void 0 : Qr.call(rr, ar)) && void 0 !== Sr ? Sr : jr.includes(ar)) || (this.wI[Wr] ? this.consumedButtons[Wr] = !0 : this.lastFrame.values[Wr] >= Zr.O && (this.wakeOwned[Wr] = !0))
        }
      }
      pickActive() {
        for (const rr of Wr) {
          const Sr = this.consumers.get(rr);
          if (Sr && Sr.isActive()) return Sr
        }
        return null
      }
      deactivateCurrent() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var Qr, Zr, Wr, ar;
        this.activeName && (null === (Qr = this.consumers.get(this.activeName)) || void 0 === Qr || null === (Zr = Qr.onDeactivate) || void 0 === Zr || Zr.call(Qr, rr));
        this.peek && !Sr && (null === (Wr = this.consumers.get(this.peek.over)) || void 0 === Wr || null === (ar = Wr.onDeactivate) || void 0 === ar || ar.call(Wr, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let Wr = 0; Wr < Zr.V; Wr++) this.wI[Wr] && (this.consumedButtons[Wr] = !0);
        const {
          leftStick: Sr,
          rightStick: Qr
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== rr && (this.leftStickConsumed || Math.hypot(Sr.x, Sr.y) >= fr), this.rightStickConsumed = "right" !== rr && (this.rightStickConsumed || Math.hypot(Qr.x, Qr.y) >= fr)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(rr) {
        const Sr = (0, Zr.l)(rr);
        this.wI[Sr] && (this.consumedButtons[Sr] = !0)
      }
      buildInput(rr, Sr, Qr, Wr) {
        const ar = this.wI,
          jr = this.previousHeld,
          Ir = Wr ? new Array(Zr.V).fill(!0) : [...this.consumedButtons],
          fr = Wr ? Ir : [...this.suppressedReleases],
          Er = !this.leftStickConsumed && (!Wr || "left" === Wr),
          pr = !this.rightStickConsumed && (!Wr || "right" === Wr);
        return {
          frame: rr,
          dtMs: Sr,
          isHeld: rr => {
            const Sr = (0, Zr.l)(rr);
            return ar[Sr] && !Ir[Sr]
          },
          wasPressed: rr => {
            const Sr = (0, Zr.l)(rr);
            return ar[Sr] && !jr[Sr] && !Ir[Sr]
          },
          wasReleased: rr => {
            const Sr = (0, Zr.l)(rr);
            return !ar[Sr] && jr[Sr] && !fr[Sr]
          },
          value: Sr => {
            const Qr = (0, Zr.l)(Sr);
            return Ir[Qr] ? 0 : rr.values[Qr]
          },
          leftStick: Er ? rr.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: pr ? rr.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: Qr
        }
      }
    }
  },
  9313: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => xr.f,
      f: () => xr.j,
      g: () => Lr,
      k: () => lr,
      o: () => Xr,
      s: () => Pr
    });
    var Zr = Qr(72),
      Wr = Qr(34),
      ar = Qr(1573),
      jr = Qr(43),
      Ir = Qr(9319),
      fr = Qr(9292),
      Er = Qr(9309),
      pr = Qr(9289),
      xr = Qr(2156),
      mr = Qr(9327);
    const Nr = {
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
      Ur = "controllerSettings",
      tr = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      hr = ["auto", ...Ir.d],
      zr = (rr, Sr) => "string" === typeof Sr && rr.includes(Sr),
      Yr = rr => Sr => "number" === typeof Sr && Number.isFinite(Sr) ? (0, mr.y)(Sr, rr) : void 0,
      nr = rr => "boolean" === typeof rr ? rr : void 0,
      er = rr => Sr => zr(rr, Sr) ? Sr : void 0,
      Kr = {
        lookSensitivityX: Yr(mr.mb),
        lookSensitivityY: Yr(mr.mb),
        aimLookSensitivity: Yr(mr.k),
        invertLookX: nr,
        invertLookY: nr,
        lookCurve: er(fr.N),
        lookDeadzone: Yr(mr.E),
        moveDeadzone: Yr(mr.E),
        swapSticks: nr,
        autoSprint: nr,
        sneakMode: er(["toggle", "hold"]),
        tapHoldTime: er(["short", "medium", "long"]),
        attackMode: er(["hold", "toggle"]),
        promptFamily: er(hr),
        hideButtonHints: nr,
        vibration: nr,
        cursorSpeed: Yr(mr.B),
        cursorMagnetism: nr,
        buttonRepeat: er(fr.m),
        largePointer: nr,
        menuBackToCategories: nr,
        swapConfirmBack: nr,
        menuNavigation: er(["hybrid", "focus", "cursor"]),
        inventoryNavigation: er(["hybrid", "slot", "cursor"]),
        quickChat: er(["wheel", "off"]),
        leaderboardButton: er(["shop", "leaderboard"]),
        gyroAiming: nr,
        gyroSensitivity: Yr(mr.W),
        gyroActivation: er(["always", "aiming", "button"]),
        gyroButton: er(fr.W),
        emoteButton: er(["tapHold", "wheel"])
      },
      yr = [{
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
      Br = rr => {
        const Sr = {};
        if ("object" !== typeof rr || null === rr) return Sr;
        for (const [Qr, Zr] of Object.entries(rr)) Object.prototype.hasOwnProperty.call(Er.j, Qr) && zr(fr.W, Zr) && (Sr[Qr] = Zr);
        return Sr
      },
      Tr = rr => {
        const Sr = {};
        for (const Qr of Object.keys(Nr))("bindings" === Qr ? Object.keys(rr.bindings).length > 0 : rr[Qr] !== Nr[Qr]) && (Sr[Qr] = rr[Qr]);
        0 !== Object.keys(Sr).length ? jr.j.setItem(Ur, Sr) : jr.j.removeItem(Ur)
      };
    let vr = (() => {
        const rr = jr.j.getItem(Ur),
          Sr = (rr => {
            const Sr = "object" === typeof rr && null !== rr ? rr : {},
              Qr = {
                ...Nr,
                bindings: Br(Sr.bindings)
              };
            for (const Wr of Object.keys(Kr)) {
              const rr = Kr[Wr](Sr[Wr]);
              void 0 !== rr && (Qr[Wr] = rr)
            }
            const Zr = Object.keys(Sr).filter((rr => !!Object.prototype.hasOwnProperty.call(Nr, rr) && ("bindings" === rr ? "object" !== typeof Sr.bindings || null === Sr.bindings || Object.keys(Sr.bindings).length !== Object.keys(Qr.bindings).length : Qr[rr] !== Sr[rr])));
            return Zr.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${Zr.join(", ")}`), Qr
          })(rr);
        return null !== rr && void 0 !== rr && Tr(Sr), Sr
      })(),
      Or = {
        ...vr,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const rr = {},
            Sr = new URLSearchParams(window.location.search);
          for (const {
              param: Qr,
              key: Zr
            }
            of yr) {
            const Wr = Kr[Zr](Sr.get(Qr));
            void 0 !== Wr && (rr[Zr] = Wr)
          }
          return rr
        })()
      };
    const Lr = () => Or,
      lr = () => {
        var rr, Sr;
        const Qr = Lr().promptFamily;
        return "auto" !== Qr ? Qr : null !== (rr = null === (Sr = pr.d.getActivePad()) || void 0 === Sr ? void 0 : Sr.family) && void 0 !== rr ? rr : "xbox"
      },
      Xr = rr => {
        const Sr = Or;
        vr = {
          ...vr,
          ...rr
        }, Tr(vr), Or = {
          ...Or,
          ...rr
        }, (rr => {
          Wr.i.Jp(xr.j, Or), tr.some((Sr => rr[Sr] !== Or[Sr])) && Wr.i.Jp(xr.f, Or)
        })(Sr)
      },
      Pr = () => {
        const [rr, Sr] = (0, Zr.useState)(Or);
        return (0, ar.c)(xr.j, Sr), rr
      }
  },
  9747: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    const Zr = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      Wr = rr => Zr.has(rr)
  },
  9289: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => tr.d,
      d: () => nr
    });
    var Zr = Qr(9292),
      Wr = Qr(9300);
    const ar = .1,
      jr = .3;
    class Ir {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(rr, Sr) {
        const Qr = null === this.lastMs ? 0 : Math.min(Math.max(0, Sr - this.lastMs), 100);
        this.lastMs = Sr;
        const Zr = Math.hypot(rr.x, rr.y);
        if (Zr >= jr) return this.anchor = null, void(this.returning = !0);
        Zr >= ar || (this.returning = !1);
        const Wr = this.anchor;
        if (!Wr || Math.hypot(rr.x - Wr.x, rr.y - Wr.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: rr.x,
          y: rr.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += Qr, this.steadyMs < 1e3) return;
        const Ir = Math.max(Zr, Math.hypot(Wr.x, Wr.y));
        Ir < ar ? this.deadzone = 0 : this.returning && (this.deadzone = Ir + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(rr) {
        return Math.hypot(rr.x, rr.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : rr
      }
    }
    const fr = (rr, Sr) => {
        var Qr, Zr;
        return null !== (Qr = rr && (null === (Zr = Object.getOwnPropertyDescriptor(rr, Sr)) || void 0 === Zr ? void 0 : Zr.get)) && void 0 !== Qr ? Qr : null
      },
      Er = rr => {
        const Sr = rr.vendorName;
        return "string" === typeof Sr ? Sr : void 0
      },
      pr = ((rr, Sr) => {
        const Qr = fr(rr, "index"),
          Zr = fr(rr, "id"),
          Wr = fr(rr, "connected"),
          ar = fr(rr, "mapping"),
          jr = fr(rr, "buttons"),
          Ir = fr(rr, "axes"),
          pr = fr(Sr, "pressed"),
          xr = fr(Sr, "value");
        return Qr && Zr && Wr && ar && jr && Ir && pr && xr ? rr => {
          const Sr = jr.call(rr),
            fr = Ir.call(rr),
            mr = {
              index: Number(Qr.call(rr)),
              id: String(Zr.call(rr)),
              connected: !0 === Wr.call(rr),
              mapping: String(ar.call(rr)),
              buttons: [],
              axes: [],
              vendorName: Er(rr)
            };
          for (let Qr = 0; Qr < Sr.length; Qr++) mr.buttons.push({
            pressed: !0 === pr.call(Sr[Qr]),
            value: Number(xr.call(Sr[Qr]))
          });
          for (let Qr = 0; Qr < fr.length; Qr++) mr.axes.push(Number(fr[Qr]));
          return mr
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      xr = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var mr = Qr(1546),
      Nr = Qr(1552);
    const Ur = rr => ({
      pressed: rr,
      value: rr ? 1 : 0
    });
    var tr = Qr(2156);
    const hr = jr,
      zr = rr => {
        const Sr = new Array(Zr.V).fill(0);
        for (let Qr = 0; Qr < Zr.V && Qr < rr.buttons.length; Qr++) {
          const Wr = rr.buttons[Qr];
          Sr[Qr] = Wr.pressed && !(0, Zr.J)(Qr) ? Math.max(Wr.value, Zr.u) : Wr.value
        }
        return Sr
      },
      Yr = (rr, Sr) => {
        var Qr, Zr;
        return {
          x: null !== (Qr = rr.axes[Sr]) && void 0 !== Qr ? Qr : 0,
          y: null !== (Zr = rr.axes[Sr + 1]) && void 0 !== Zr ? Zr : 0
        }
      };
    const nr = new class {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pr;
        this.readGamepads = rr, this.requireTrustedPads = Sr, this.nativeReader = Qr, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = rr => {
          rr.isTrusted && this.trustedIndices.add(rr.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = rr => {
          this.trustedIndices.delete(rr.gamepad.index)
        }, this.lx = rr => {
          if (this.rafId = 0, !this.running) return;
          const Sr = 0 === this.lastTimestampMs ? 16 : Math.min(100, rr - this.lastTimestampMs);
          this.lastTimestampMs = rr;
          try {
            this.poll(rr, Sr)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.lx))
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
      onFrame(rr) {
        return this.frameListeners.add(rr), () => {
          this.frameListeners.delete(rr)
        }
      }
      onActivePadChanged(rr) {
        return this.connectionListeners.add(rr), () => {
          this.connectionListeners.delete(rr)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(rr) {
        return this.connectedListeners.add(rr), () => {
          this.connectedListeners.delete(rr)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const rr = this.readPads()[this.activeInfo.index],
          Sr = rr ? this.readPad(rr) : null;
        return Sr && Sr.id === this.activeInfo.id ? rr : null
      }
      poll(rr, Sr) {
        var Qr, Wr;
        const ar = this.readPads();
        let jr = null,
          fr = !1;
        const Er = [],
          pr = Math.max(ar.length, this.slots.length);
        for (let nr = 0; nr < pr; nr++) {
          var xr;
          const Sr = nr < ar.length ? ar[nr] : null,
            Qr = Sr ? this.readPad(Sr) : null;
          if (!Qr || !Qr.connected || !this.isUsable(Qr)) {
            this.slots[nr] = null;
            continue
          }
          let Wr = this.slots[nr];
          Wr && Wr.id === Qr.id || (Wr = {
            id: Qr.id,
            wI: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new Ir,
            rightRest: new Ir
          }, this.slots[nr] = Wr);
          const pr = Yr(Qr, 0),
            mr = Yr(Qr, 2);
          !Wr.leftSettled && Math.hypot(pr.x, pr.y) < hr && (Wr.leftSettled = !0), !Wr.rightSettled && Math.hypot(mr.x, mr.y) < hr && (Wr.rightSettled = !0), Wr.leftRest.observe(pr, rr), Wr.rightRest.observe(mr, rr);
          const Nr = zr(Qr),
            Ur = (0, Zr.o)(Nr, Wr.wI),
            tr = Wr.wI,
            er = Ur.map(((rr, Sr) => rr && !tr[Sr]));
          Wr.wI = Ur;
          const Kr = {
            pad: Qr,
            slot: Wr,
            values: Nr
          };
          nr === (null === (xr = this.activeInfo) || void 0 === xr ? void 0 : xr.index) && Qr.id === this.activeInfo.id ? (jr = Kr, fr = er.includes(!0)) : er.includes(!0) && Er.push({
            polled: Kr,
            rose: er
          })
        }
        const mr = this.slots.some((rr => null !== rr));
        if (mr !== this.anyPadConnected) {
          this.anyPadConnected = mr;
          for (const rr of this.connectedListeners) rr()
        }
        const Nr = null !== (Qr = null === (Wr = jr) || void 0 === Wr ? void 0 : Wr.slot.wI) && void 0 !== Qr ? Qr : [],
          Ur = fr ? void 0 : Er.find((rr => {
            let {
              rose: Sr
            } = rr;
            return Sr.some(((rr, Sr) => rr && !Nr[Sr]))
          }));
        if (Ur ? (jr = Ur.polled, this.setActive(Ur.polled.pad)) : this.activeInfo && !jr && this.setActive(null), !jr || !this.activeInfo) return;
        const tr = ((rr, Sr) => {
          let {
            pad: Qr,
            slot: Wr,
            values: ar
          } = rr;
          const jr = (0, Zr.t)(Sr);
          return jr.values = ar, Wr.leftSettled && (jr.leftStick = Wr.leftRest.apply(Yr(Qr, 0))), Wr.rightSettled && (jr.rightStick = Wr.rightRest.apply(Yr(Qr, 2))), jr
        })(jr, rr);
        for (const Zr of this.frameListeners) Zr(tr, Sr, this.activeInfo)
      }
      readPad(rr) {
        const Sr = this.readSnapshot(rr);
        return Sr && (0, Nr.e)(Sr) ? (rr => {
          const Sr = Sr => {
              var Qr;
              return null !== (Qr = rr.buttons[Sr]) && void 0 !== Qr ? Qr : Ur(!1)
            },
            Qr = Sr => {
              var Qr;
              return null !== (Qr = rr.axes[Sr]) && void 0 !== Qr ? Qr : 0
            },
            Zr = rr.axes.length > 9,
            Wr = Zr ? (rr => {
              const Sr = 0 !== rr;
              return {
                up: Sr && (rr >= -1 && rr < -.7 || rr >= .95 && rr <= 1),
                right: Sr && rr >= -.75 && rr < -.1,
                down: Sr && rr >= -.2 && rr < .45,
                left: Sr && rr >= .4 && rr <= 1
              }
            })(Qr(9)) : {
              up: Qr(5) < -.5,
              down: Qr(5) > .5,
              left: Qr(4) < -.5,
              right: Qr(4) > .5
            };
          return {
            ...rr,
            mapping: "standard",
            buttons: [Sr(1), Sr(2), Sr(0), Sr(3), Sr(4), Sr(5), Sr(6), Sr(7), Sr(8), Sr(9), Sr(10), Sr(11), Ur(Wr.up), Ur(Wr.down), Ur(Wr.left), Ur(Wr.right), Sr(12)],
            axes: [Qr(0), Qr(1), Qr(2), Qr(Zr ? 5 : 3)]
          }
        })(Sr) : Sr
      }
      readSnapshot(rr) {
        if (this.nativeReader) try {
          return this.nativeReader(rr)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (rr => {
          const Sr = rr;
          return {
            index: Sr.index,
            id: Sr.id,
            connected: Sr.connected,
            mapping: Sr.mapping,
            buttons: Array.from(Sr.buttons, (rr => ({
              pressed: rr.pressed,
              value: rr.value
            }))),
            axes: Array.from(Sr.axes),
            vendorName: Er(rr)
          }
        })(rr)
      }
      isUsable(rr) {
        return !(0, mr.f)(rr.id) && ("standard" !== rr.mapping ? (this.warnedNonStandardIds.has(rr.id) || (this.warnedNonStandardIds.add(rr.id), console.warn(`Controller "${rr.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(rr.index))
      }
      setActive(rr) {
        this.activeInfo = rr ? {
          index: rr.index,
          id: rr.id,
          family: (0, Wr.d)(rr.id, rr.vendorName)
        } : null;
        for (const Sr of this.connectionListeners) Sr(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (rr) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", rr)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.lx))
      }
    }((() => xr ? xr.call(navigator) : []), !0);
    nr.listenForConnections()
  },
  9845: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar,
      e: () => jr,
      h: () => Ir,
      k: () => Wr
    });
    var Zr = Qr(9850);
    const Wr = rr => {
        const Sr = [];
        rr.holdingGun && Sr.push({
          kind: "reload"
        }), rr.touchscreenActionButton && Sr.push({
          kind: "touchButton",
          label: rr.touchscreenActionButton
        });
        for (const ar of null !== (Qr = null === (Wr = rr.customButtons) || void 0 === Wr ? void 0 : Wr.filter(Zr.f)) && void 0 !== Qr ? Qr : []) {
          var Qr, Wr;
          Sr.push({
            kind: "customButton",
            id: ar.id,
            icon: ar.icon,
            description: ar.description
          })
        }
        return Sr
      },
      ar = rr => rr.length >= 2,
      jr = rr => "specialAction" !== rr.kind,
      Ir = (rr, Sr) => {
        if (null === rr || null === Sr) return rr === Sr;
        if (rr.kind !== Sr.kind) return !1;
        switch (rr.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return rr.action === Sr.action;
          case "customButton":
            return rr.id === Sr.id && rr.icon === Sr.icon;
          case "touchButton":
            return rr.label === Sr.label
        }
      }
  },
  9758: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr
    });
    const Zr = {
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
  9837: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => pr,
      g: () => Nr,
      k: () => xr,
      o: () => Ur
    });
    var Zr = Qr(72),
      Wr = Qr(34),
      ar = Qr(1573),
      jr = Qr(9845),
      Ir = Qr(9859);
    let fr = null;
    const Er = () => fr,
      pr = rr => {
        (0, jr.h)(fr, rr) || (fr = rr, Wr.i.Jp(Ir.f, fr))
      },
      xr = () => {
        const [rr, Sr] = (0, Zr.useState)(Er);
        return (0, ar.c)(Ir.f, Sr), rr
      };
    let mr = !1;
    const Nr = rr => {
        rr !== mr && (mr = rr, Wr.i.Jp(Ir.g, rr))
      },
      Ur = () => {
        const [rr, Sr] = (0, Zr.useState)(mr);
        return (0, ar.c)(Ir.g, Sr), rr
      }
  },
  9872: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr,
      g: () => Ir
    });
    var Zr = Qr(34),
      Wr = Qr(9859);
    let ar = !1;
    const jr = () => ar,
      Ir = rr => {
        rr !== ar && (ar = rr, Zr.i.Jp(Wr.k, ar))
      }
  },
  9868: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir,
      c: () => fr
    });
    var Zr = Qr(34),
      Wr = Qr(9859);
    let ar = null,
      jr = 0;
    const Ir = () => ar,
      fr = rr => {
        null === rr && null === ar || (ar = null === rr ? null : {
          id: ++jr,
          holdMs: rr
        }, Zr.i.Jp(Wr.n, ar))
      }
  },
  9859: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar,
      f: () => Zr,
      g: () => Wr,
      k: () => Ir,
      n: () => fr,
      r: () => Er,
      v: () => jr
    });
    const Zr = "controllerActionHintChanged",
      Wr = "controllerActionWheelHintChanged",
      ar = "controllerOpenChat",
      jr = "controllerSneakToggledChanged",
      Ir = "controllerAttackLatchedChanged",
      fr = "controllerDropStackHoldChanged",
      Er = "controllerPickBlockHintChanged"
  },
  9881: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr,
      e: () => Ir
    });
    var Zr = Qr(34),
      Wr = Qr(9859);
    let ar = !1;
    const jr = () => ar,
      Ir = rr => {
        rr !== ar && (ar = rr, Zr.i.Jp(Wr.r, ar))
      }
  },
  9946: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => jr,
      d: () => Ir
    });
    var Zr = Qr(34),
      Wr = Qr(9859);
    let ar = !1;
    const jr = () => ar,
      Ir = rr => {
        rr !== ar && (ar = rr, Zr.i.Jp(Wr.v, ar))
      }
  },
  9806: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr
    });
    class Zr {
      constructor() {
        this.downAtMs = null
      }
      update(rr, Sr, Qr, Zr) {
        if (rr) return this.downAtMs = Qr, null;
        if (null === this.downAtMs) return null;
        const Wr = Qr - this.downAtMs >= Zr;
        return Sr ? Wr ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, Wr ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  9342: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => xr,
      e: () => mr,
      f: () => Ir,
      g: () => nr,
      k: () => Yr
    });
    var Zr = Qr(43),
      Wr = Qr(9319),
      ar = Qr(9292);
    const jr = (() => {
        try {
          return Qr(9344)
        } catch {
          return null
        }
      })(),
      Ir = [...ar.W, "LeftStick", "RightStick"],
      fr = new Map,
      Er = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      pr = (new Set(Object.values(Er)), {
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
      xr = (rr, Sr) => {
        var Qr, Zr;
        return null !== (Qr = null === (Zr = pr[Er[rr]]) || void 0 === Zr ? void 0 : Zr[Sr]) && void 0 !== Qr ? Qr : 1
      },
      mr = (rr, Sr) => {
        const Qr = `./${Er[rr]}/${Sr}.svg`;
        let Zr = fr.get(Qr);
        return void 0 === Zr && (Zr = jr ? jr(Qr) : "", fr.set(Qr, Zr)), Zr
      },
      Nr = new Set,
      Ur = [],
      tr = rr => {
        if (!Nr.has(rr)) {
          Nr.add(rr);
          for (const Sr of Ir) {
            const Qr = mr(rr, Sr);
            if (Qr) {
              const rr = new Image;
              rr.crossOrigin = "anonymous", rr.src = Qr, Ur.push(rr)
            }
          }
        }
      },
      hr = "controllerGlyphFamily";
    let zr = null;
    const Yr = rr => {
        rr !== zr && (zr = rr, Zr.j.setItem(hr, rr), tr(rr))
      },
      nr = () => {
        const rr = Zr.j.getItem(hr);
        (0, Wr.e)(rr) && rr !== zr && (zr = rr, tr(rr))
      }
  },
  9971: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Gr,
      e: () => kr
    });
    var Zr = Qr(72),
      Wr = Qr(34),
      ar = Qr(1573),
      jr = Qr(9306),
      Ir = Qr(9289),
      fr = Qr(9333),
      Er = Qr(9313);
    const pr = {
        x: 0,
        y: 0,
        z: 0
      },
      xr = Math.PI / 180,
      mr = rr => Math.hypot(rr.x, rr.y, rr.z),
      Nr = (rr, Sr) => ({
        x: rr.x * Sr,
        y: rr.y * Sr,
        z: rr.z * Sr
      }),
      Ur = (rr, Sr) => ({
        x: rr.x + Sr.x,
        y: rr.y + Sr.y,
        z: rr.z + Sr.z
      }),
      tr = (rr, Sr) => ({
        x: rr.x - Sr.x,
        y: rr.y - Sr.y,
        z: rr.z - Sr.z
      }),
      hr = rr => {
        const Sr = mr(rr);
        return 0 === Sr ? pr : Nr(rr, 1 / Sr)
      },
      zr = rr => ({
        min: {
          ...rr
        },
        max: {
          ...rr
        }
      }),
      Yr = (rr, Sr) => ({
        min: {
          x: Math.min(rr.min.x, Sr.x),
          y: Math.min(rr.min.y, Sr.y),
          z: Math.min(rr.min.z, Sr.z)
        },
        max: {
          x: Math.max(rr.max.x, Sr.x),
          y: Math.max(rr.max.y, Sr.y),
          z: Math.max(rr.max.z, Sr.z)
        }
      }),
      nr = (rr, Sr) => rr.max.x - rr.min.x <= Sr && rr.max.y - rr.min.y <= Sr && rr.max.z - rr.min.z <= Sr;
    class er {
      constructor() {
        this.bias = pr, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = pr, this.windowSec = 0
      }
      update(rr) {
        const Sr = this.gyroRange ? Yr(this.gyroRange, rr.gyro) : zr(rr.gyro),
          Qr = rr.accel ? this.accelRange ? Yr(this.accelRange, rr.accel) : zr(rr.accel) : null;
        if (!nr(Sr, 1) || Qr && !nr(Qr, .01)) return void this.restartWindow(rr);
        if (this.gyroRange = Sr, this.accelRange = Qr, this.sum = Ur(this.sum, Nr(rr.gyro, rr.dtSec)), this.windowSec += rr.dtSec, this.windowSec < 1) return;
        const Zr = Nr(this.sum, 1 / this.windowSec);
        if (mr(Zr) > 5) return;
        const Wr = tr(Zr, this.bias);
        let ar = 0;
        !this.calibrated || this.windowSec >= 3 ? ar = 1 : mr(Wr) <= 1 && (ar = Math.min(1, rr.dtSec / 1)), this.bias = Ur(this.bias, Nr(Wr, ar)), this.calibrated = this.calibrated || ar > 0
      }
      correct(rr) {
        return tr(rr, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = pr, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = pr, this.windowSec = 0
      }
      restartWindow(rr) {
        this.gyroRange = zr(rr.gyro), this.accelRange = rr.accel ? zr(rr.accel) : null, this.sum = pr, this.windowSec = 0
      }
    }
    class Kr {
      constructor() {
        this.down = null
      }
      update(rr, Sr, Qr) {
        const Zr = hr(Nr(Sr, -1));
        if (!this.down) return this.down = Zr, Zr;
        const Wr = Nr(rr, xr * Qr),
          ar = this.down,
          jr = {
            x: ar.x - (Wr.y * ar.z - Wr.z * ar.y),
            y: ar.y - (Wr.z * ar.x - Wr.x * ar.z),
            z: ar.z - (Wr.x * ar.y - Wr.y * ar.x)
          },
          Ir = 0 === mr(Zr) ? 0 : Math.min(1, Qr / .25);
        var fr, Er;
        return this.down = hr((Er = Ir, Ur(fr = jr, Nr(tr(Zr, fr), Er)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class yr {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(rr, Sr, Qr) {
        const Zr = Math.hypot(rr, Sr),
          Wr = Math.max(0, Math.min(1, (Zr - 2) / 2)),
          ar = {
            yaw: rr * (1 - Wr),
            pitch: Sr * (1 - Wr),
            dtSec: Qr
          };
        for (this.entries.push(ar), this.windowSec += Qr; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let jr = 0,
          Ir = 0;
        for (const Er of this.entries) jr += Er.yaw * Er.dtSec, Ir += Er.pitch * Er.dtSec;
        const fr = this.windowSec > 0 ? {
          yaw: jr / this.windowSec,
          pitch: Ir / this.windowSec
        } : {
          yaw: ar.yaw,
          pitch: ar.pitch
        };
        return {
          yaw: rr * Wr + fr.yaw,
          pitch: Sr * Wr + fr.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class Br {
      constructor() {
        this.calibrator = new er, this.gravity = new Kr, this.smoother = new yr
      }
      process(rr, Sr, Qr) {
        const Zr = Math.max(0, Math.min(.05, Sr));
        this.calibrator.update({
          ...rr,
          dtSec: Zr
        });
        const Wr = this.calibrator.correct(rr.gyro);
        let ar = Wr.y;
        "player" === Qr && rr.accel && (ar = ((rr, Sr) => {
          const Qr = rr.y * Sr.y + rr.z * Sr.z;
          return -Math.sign(Qr) * Math.min(1.41 * Math.abs(Qr), Math.hypot(rr.y, rr.z))
        })(Wr, this.gravity.update(Wr, rr.accel, Zr)));
        const jr = this.smoother.apply(ar, Wr.x, Zr),
          Ir = ((rr, Sr) => {
            const Qr = Math.hypot(rr, Sr);
            if (Qr >= 1) return {
              yaw: rr,
              pitch: Sr
            };
            const Zr = Qr / 1;
            return {
              yaw: rr * Zr,
              pitch: Sr * Zr
            }
          })(jr.yaw, jr.pitch);
        return {
          yawDeg: Ir.yaw * Zr,
          pitchDeg: Ir.pitch * Zr
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
    const Tr = (rr, Sr) => {
      var Qr, Zr, Wr;
      const ar = Sr * xr,
        jr = null !== (Qr = rr.beta) && void 0 !== Qr ? Qr : 0,
        Ir = null !== (Zr = rr.gamma) && void 0 !== Zr ? Zr : 0;
      return {
        x: jr * Math.cos(ar) - Ir * Math.sin(ar),
        y: jr * Math.sin(ar) + Ir * Math.cos(ar),
        z: null !== (Wr = rr.alpha) && void 0 !== Wr ? Wr : 0
      }
    };
    var vr = Qr(9975);
    class Or {
      constructor(rr, Sr, Qr) {
        this.hid = rr, this.sink = Sr, this.onControllersChanged = Qr, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = rr => {
          this.openController(rr.device).catch((rr => {
            console.warn("Could not open motion controller", rr)
          }))
        }, this.onDisconnect = rr => {
          this.opening.has(rr.device) && this.disconnectedWhileOpening.add(rr.device);
          const Sr = this.controllers.get(rr.device);
          Sr && (this.forget(Sr), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const rr = await this.hid.getDevices();
        for (const Sr of rr) await this.openController(Sr).catch((rr => {
          console.warn("Could not open motion controller", rr)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const rr of [...this.controllers.values()]) this.forget(rr);
        this.onControllersChanged()
      }
      async request() {
        const rr = await this.hid.requestDevice({
          filters: vr.h
        });
        let Sr = 0;
        for (const Qr of rr) await this.openController(Qr).catch((rr => {
          console.warn("Could not open motion controller", rr), Sr++
        }));
        return Sr
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((rr => null !== (0, vr.e)(rr.vendorId, rr.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((rr => rr.kind))
      }
      forget(rr) {
        rr.device.removeEventListener("inputreport", rr.onReport), this.controllers.get(rr.device) === rr && this.controllers.delete(rr.device)
      }
      async openController(rr) {
        const Sr = (0, vr.e)(rr.vendorId, rr.productId);
        if (!Sr || !this.running || this.controllers.has(rr) || this.opening.has(rr)) return;
        this.opening.add(rr);
        let Qr = !1;
        try {
          rr.opened || await rr.open()
        } finally {
          this.opening.delete(rr), Qr = this.disconnectedWhileOpening.delete(rr)
        }
        if (Qr) return void rr.close().catch((rr => {
          console.debug("Could not close an unplugged motion controller", rr)
        }));
        if (!this.running) return;
        const Zr = {
          device: rr,
          kind: Sr,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: rr => {
            this.onReport(Zr, rr)
          }
        };
        this.controllers.set(rr, Zr), rr.addEventListener("inputreport", Zr.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(Zr)
        } catch (Wr) {
          console.warn(`Could not turn on motion for ${Sr}`, Wr), this.controllers.get(rr) === Zr && (this.forget(Zr), this.onControllersChanged())
        }
      }
      async enableMotion(rr) {
        let {
          device: Sr,
          kind: Qr
        } = rr;
        if ((0, vr.f)(Qr))
          for (const Zr of vr.r[Qr]) await Sr.receiveFeatureReport(Zr).catch((rr => {
            console.debug(`Motion controller feature report ${Zr} unavailable`, rr)
          }));
        else
          for (let Zr = 0; Zr < 2; Zr++)
            for (const {
                subcommand: rr,
                args: Qr
              }
              of vr.s) await Sr.sendReport(vr.v, (0, vr.b)(this.switchPacketCounter++, rr, Qr)), await new Promise((rr => {
              setTimeout(rr, 60)
            }))
      }
      onReport(rr, Sr) {
        const Qr = (0, vr.m)(rr.kind, Sr.reportId, Sr.data, rr.device.productId);
        if (!Qr) return;
        const Zr = null === rr.lastEventMs ? 0 : (Sr.timeStamp - rr.lastEventMs) / 1e3;
        rr.lastEventMs = Sr.timeStamp;
        let Wr = Qr.dtSec;
        if (null !== Wr && Zr > 0 && (Wr = Math.max(.001, Math.min(.017, Zr / Qr.readings.length))), null === Wr && null !== Qr.sensorClock && (0, vr.f)(rr.kind)) {
          const Sr = (0, vr.p)(rr.kind, rr.lastClock, Qr.sensorClock);
          rr.lastClock = Qr.sensorClock, Wr = 0 === Sr ? null : Sr
        }
        if (rr.lastReadingMs = Sr.timeStamp, this.isPreferred(rr, Sr.timeStamp))
          for (const jr of Qr.readings) {
            var ar;
            this.sink(jr, null !== (ar = Wr) && void 0 !== ar ? ar : Zr, `hid${rr.openedOrder}`)
          }
      }
      isPreferred(rr, Sr) {
        const Qr = rr => 1e6 * vr.l[rr.kind] + rr.openedOrder;
        for (const Zr of this.controllers.values())
          if (Zr !== rr && Sr - Zr.lastReadingMs < 500 && Qr(Zr) < Qr(rr)) return !1;
        return !0
      }
    }
    var Lr = Qr(109);
    const lr = () => DeviceMotionEvent,
      Xr = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, Lr.isMobile)(),
      Pr = () => {
        var rr;
        const Sr = null === (rr = window.screen.orientation) || void 0 === rr ? void 0 : rr.angle;
        return "number" === typeof Sr ? Sr : "number" === typeof window.orientation ? window.orientation : 0
      };
    class Hr {
      constructor(rr, Sr) {
        this.sink = rr, this.onStateChanged = Sr, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((rr => {
            console.warn("Could not enable the motion sensor", rr)
          }))
        }, this.onMotion = rr => {
          const Sr = rr.rotationRate;
          if (!Sr || null === Sr.alpha && null === Sr.beta && null === Sr.gamma) return;
          const Qr = null === this.lastEventMs ? 0 : (rr.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = rr.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: Tr(Sr, Pr()),
            accel: null
          }, Qr, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof lr().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const rr = lr().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof rr) return void this.listen();
        let Sr;
        this.disarmGestureRequest();
        try {
          Sr = await rr.call(DeviceMotionEvent)
        } catch (Qr) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), Qr
        }
        this.wanted && ("granted" === Sr ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(rr) {
        this.state !== rr && (this.state = rr, this.onStateChanged())
      }
    }
    const qr = "controllerGyroStatusChanged",
      Rr = {
        xR: 0,
        yR: 0
      },
      gr = rr => {
        var Sr, Qr;
        return "undefined" === typeof document || (null === (Sr = null === (Qr = document.featurePolicy) || void 0 === Qr ? void 0 : Qr.allowsFeature(rr)) || void 0 === Sr || Sr)
      };
    class Cr {
      constructor() {
        this.processor = new Br, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = rr => {
          const Sr = rr.gyroAiming && Ir.d.hasConnectedPad();
          var Qr, Zr;
          Sr !== this.phoneRunning && (this.phoneRunning = Sr, Sr ? null === (Qr = this.phone) || void 0 === Qr || Qr.start() : null === (Zr = this.phone) || void 0 === Zr || Zr.stop());
          if (rr.gyroAiming !== this.running) {
            var Wr, ar;
            if (this.running = rr.gyroAiming, this.running) null === (Wr = this.hid) || void 0 === Wr || Wr.start().catch((rr => {
              console.warn("Could not open motion controllers", rr)
            }));
            else null === (ar = this.hid) || void 0 === ar || ar.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          Wr.i.Jp(qr, this.getStatus())
        };
        const rr = (() => {
            var rr;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (rr = navigator.hid) && void 0 !== rr ? rr : null
          })(),
          Sr = gr("hid");
        this.hidBlocked = null !== rr && !Sr, this.hid = rr && Sr ? new Or(rr, ((rr, Sr, Qr) => {
          this.lastHidReadingMs = performance.now(), this.feed(rr, Sr, "player", Qr)
        }), this.publishStatus) : null;
        const Qr = gr("accelerometer") && gr("gyroscope");
        this.phoneBlocked = Xr() && !Qr, this.phone = Xr() && Qr ? new Hr(((rr, Sr, Qr) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(rr, Sr, "local", Qr)
        }), this.publishStatus) : null, Wr.i.subscribe(Er.f, this.syncWithSettings), Ir.d.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, Er.g)()), this.publishStatus()
        })), this.syncWithSettings((0, Er.g)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var rr, Sr, Qr, Zr;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (rr = null === (Sr = this.hid) || void 0 === Sr ? void 0 : Sr.getConnectedKinds()) && void 0 !== rr ? rr : [],
          phoneMotion: null !== (Qr = null === (Zr = this.phone) || void 0 === Zr ? void 0 : Zr.getState()) && void 0 !== Qr ? Qr : "off",
          padConnected: Ir.d.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var rr;
        await (null === (rr = this.phone) || void 0 === rr ? void 0 : rr.requestPermission())
      }
      drainLookDelta() {
        const rr = performance.now();
        rr - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = rr;
        const Sr = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const Qr = (0, Er.g)();
        return Qr.gyroAiming && (rr => {
          let {
            activation: Sr,
            isHeld: Qr,
            useButton: Zr,
            gyroButton: Wr
          } = rr;
          return "always" === Sr || Qr("aiming" === Sr ? Zr : Wr)
        })({
          activation: Qr.gyroActivation,
          isHeld: rr => fr.d.isButtonHeld(rr),
          useButton: (0, jr.k)("use"),
          gyroButton: Qr.gyroButton
        }) ? ((rr, Sr) => ({
          xR: -rr.yawDeg * Sr * xr,
          yR: -rr.pitchDeg * Sr * xr
        }))(Sr, Qr.gyroSensitivity) : Rr
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(rr, Sr) {
        this.feed(rr, Sr, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(rr, Sr, Qr, Zr) {
        this.source !== Zr && (this.processor.reset(), this.source = Zr);
        const Wr = this.processor.process(rr, Sr, Qr);
        this.pendingYawDeg += Wr.yawDeg, this.pendingPitchDeg += Wr.pitchDeg
      }
    }
    let Mr = null;
    const Gr = () => (Mr || (Mr = new Cr), Mr),
      kr = () => {
        const [rr, Sr] = (0, Zr.useState)((() => Gr().getStatus()));
        return (0, ar.c)(qr, Sr), (0, Zr.useEffect)((() => {
          Sr(Gr().getStatus())
        }), []), rr
      }
  },
  9975: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Kr,
      e: () => fr,
      f: () => Zr,
      h: () => Ir,
      k: () => Er,
      l: () => pr,
      m: () => Yr,
      p: () => hr,
      r: () => Br,
      s: () => yr,
      v: () => nr
    });
    const Zr = rr => "dualShock4" === rr || "dualSense" === rr,
      Wr = 1356,
      ar = 1406,
      jr = [{
        vendorId: Wr,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: Wr,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: Wr,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: Wr,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: Wr,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: ar,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: ar,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: ar,
        productId: 8199,
        kind: "joyConRight"
      }],
      Ir = jr.map((rr => {
        let {
          vendorId: Sr,
          productId: Qr
        } = rr;
        return {
          vendorId: Sr,
          productId: Qr
        }
      })),
      fr = (rr, Sr) => {
        var Qr, Zr;
        return null !== (Qr = null === (Zr = jr.find((Qr => Qr.vendorId === rr && Qr.productId === Sr))) || void 0 === Zr ? void 0 : Zr.kind) && void 0 !== Qr ? Qr : null
      },
      Er = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      pr = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      xr = 2e3 / 32767,
      mr = 1 / 8192,
      Nr = 936 / 13371,
      Ur = (rr, Sr, Qr) => ({
        x: rr.getInt16(Sr, !0) * Qr,
        y: rr.getInt16(Sr + 2, !0) * Qr,
        z: rr.getInt16(Sr + 4, !0) * Qr
      }),
      tr = rr => 0 === rr.x && 0 === rr.y && 0 === rr.z,
      hr = (rr, Sr, Qr) => null === Sr ? null : "dualShock4" === rr ? 16 * (Qr - Sr & 65535) / 3 / 1e6 : (Qr - Sr >>> 0) / 3 / 1e6,
      zr = (rr, Sr) => "joyConRight" === Sr ? {
        x: rr.y,
        y: -rr.z,
        z: -rr.x
      } : {
        x: -rr.y,
        y: rr.z,
        z: -rr.x
      },
      Yr = (rr, Sr, Qr, Wr) => Zr(rr) ? ((rr, Sr, Qr, Zr) => {
        const Wr = ((rr, Sr, Qr) => "dualShock4" === rr ? 1 === Sr && Qr >= 63 ? 0 : 17 === Sr && Qr >= 65 ? 2 : null : 1 === Sr && Qr >= 62 ? 0 : 49 === Sr && Qr >= 63 ? 1 : null)(rr, Sr, Qr.byteLength);
        if (null === Wr) return null;
        if (2976 === Zr && 1 === Sr && 0 !== (4 & Qr.getUint8(30))) return null;
        const ar = Wr + ("dualShock4" === rr ? 12 : 15),
          jr = Ur(Qr, ar, xr),
          Ir = Ur(Qr, ar + 6, mr);
        return tr(jr) && tr(Ir) ? null : {
          readings: [{
            gyro: jr,
            accel: Ir
          }],
          dtSec: null,
          sensorClock: "dualShock4" === rr ? Qr.getUint16(Wr + 9, !0) : Qr.getUint32(Wr + 27, !0)
        }
      })(rr, Sr, Qr, Wr) : ((rr, Sr, Qr) => {
        if (48 !== Sr && 49 !== Sr || Qr.byteLength < 48) return null;
        const Zr = [];
        for (let Wr = 0; Wr < 3; Wr++) {
          const Sr = Ur(Qr, 12 + 12 * Wr, 244e-6),
            ar = Ur(Qr, 18 + 12 * Wr, Nr);
          if (tr(ar) && tr(Sr)) return null;
          Zr.push({
            gyro: zr(ar, rr),
            accel: zr(Sr, rr)
          })
        }
        return {
          readings: Zr,
          dtSec: .005,
          sensorClock: null
        }
      })(rr, Sr, Qr),
      nr = 1,
      er = [0, 1, 64, 64, 0, 1, 64, 64],
      Kr = (rr, Sr, Qr) => new Uint8Array([15 & rr, ...er, Sr, ...Qr]),
      yr = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      Br = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  9337: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Cr,
      h: () => wr,
      l: () => yr,
      p: () => Nr.j,
      s: () => kr,
      u: () => Gr,
      y: () => Br,
      A: () => Ar,
      B: () => Nr.r,
      C: () => Nr.z,
      F: () => cr,
      G: () => Nr.D,
      I: () => Hr
    });
    var Zr = Qr(72),
      Wr = Qr(26),
      ar = Qr(34),
      jr = Qr(1573),
      Ir = Qr(1353),
      fr = Qr(9313),
      Er = Qr(9339),
      pr = Qr(9300),
      xr = Qr(9289),
      mr = Qr(9342),
      Nr = Qr(1518),
      Ur = Qr(9292),
      tr = Qr(9747),
      hr = Qr(5075),
      zr = Qr(124);
    class Yr {
      constructor(rr) {
        this.deps = rr, this.pads = new Map
      }
      observe(rr, Sr, Qr) {
        if (!this.deps.touchOnly) return;
        const Zr = this.pads.get(Sr.id);
        "proven" !== Zr && Qr ? (this.pads.set(Sr.id, "proven"), void 0 !== Zr && this.deps.onReleased(Sr, rr, rr.timestampMs - Zr)) : void 0 === Zr && (this.pads.set(Sr.id, rr.timestampMs), this.deps.onHeld(Sr, rr)), this.deps.setMayHide("proven" === this.pads.get(Sr.id))
      }
    }
    const nr = rr => rr.values.flatMap(((rr, Sr) => rr >= Ur.O ? [String(Sr)] : [])).join(",") || "none",
      er = (rr, Sr, Zr, Wr, ar) => {
        const jr = (0, Nr.f)(),
          Ir = document.visibilityState,
          fr = document.hasFocus(),
          Er = "wI" === rr ? "touch HUD pad held" : "touch HUD pad released";
        Promise.all([Promise.resolve().then((() => Qr(4010))), Promise.resolve().then((() => Qr(1371))), Promise.resolve().then((() => Qr(139)))]).then((Qr => {
          let [{
            logControllerHudHoldToGtag: pr
          }, {
            logClientLineFromEveryPage: xr
          }, {
            siteUsed: mr
          }] = Qr;
          pr(rr, Sr.family, null === ar ? void 0 : Math.round(ar / 1e3)), xr(Er, Kr(Sr, Zr, Wr, ar, jr, Ir, fr, mr))
        }), (() => {}))
      },
      Kr = (rr, Sr, Qr, Zr, Wr, ar, jr, Ir) => {
        var fr;
        const Er = {
          pad_id: rr.id.slice(0, 120),
          pad_family: rr.family,
          pad_mapping: null !== (fr = null === Qr || void 0 === Qr ? void 0 : Qr.mapping) && void 0 !== fr ? fr : "unread",
          pad_axes: Qr ? String(Qr.axes.length) : "unread",
          pad_buttons: Qr ? String(Qr.buttons.length) : "unread",
          pressed: nr(Sr),
          ms_since_touch: null === Wr ? "none" : String(Math.round(Sr.timestampMs - Wr)),
          visibility: ar,
          focused: String(jr),
          site: Ir
        };
        return null !== Zr && (Er.held_ms = String(Math.round(Zr))), Er
      };
    const yr = rr => !rr.repeat && !(0, tr.d)(rr.key),
      Br = "PadHidesCursor";
    let Tr = !1;
    const vr = rr => {
        rr !== Tr && (Tr = rr, document.documentElement.classList.toggle(Br, rr))
      },
      Or = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(rr) {
          let Sr = !1,
            Qr = !1;
          rr.values.forEach(((rr, Zr) => {
            const Wr = rr >= (this.buttonsDown[Zr] ? Ur.S : Ur.O);
            Wr && !this.buttonsDown[Zr] && (Sr = !0, Qr = !0), this.buttonsDown[Zr] = Wr
          }));
          return [rr.leftStick, rr.rightStick].forEach(((rr, Zr) => {
            const Wr = this.stickAnchors[Zr];
            Math.hypot(rr.x, rr.y) < (Wr ? Ur.S : .3) ? this.stickAnchors[Zr] = null : (!Wr || Math.hypot(rr.x - Wr.x, rr.y - Wr.y) >= .3) && (this.stickAnchors[Zr] = {
              x: rr.x,
              y: rr.y
            }, Sr = !0, Qr ||= !Wr)
          })), Sr && (this.lastActivityMs = rr.timestampMs), this.onlyMovedOn = Sr && !Qr, Sr
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(rr) {
          return !(rr - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((rr => rr)) || this.stickAnchors.some((rr => null !== rr)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((rr => null !== rr))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      },
      Lr = (lr = () => xr.d.getActiveGamepad(), new Yr({
        touchOnly: "touchOnly" === (0, zr.b)(),
        setMayHide: Nr.v,
        onHeld: (rr, Sr) => {
          er("wI", rr, Sr, lr(), null)
        },
        onReleased: (rr, Sr, Qr) => {
          er("released", rr, Sr, lr(), Qr)
        }
      }));
    var lr;
    let Xr = null,
      Pr = !1;
    const Hr = () => Pr;
    let qr = null,
      Rr = !1,
      gr = null;
    const Cr = () => gr;
    let Mr = !1;
    const Gr = (rr, Sr) => {
        if (!Or.observe(rr)) return !1;
        if (Lr.observe(rr, Sr, Or.isStickOffRest()), Mr && Or.wasOnlyMoveOn() && !(0, Nr.j)()) return !1;
        Mr = !1, Pr = !1;
        const Qr = !(0, Nr.j)();
        return Qr && (Xr = rr, gr = !Tr && Rr && qr ? {
          ...qr
        } : null), Rr = !1, (0, Nr.r)("gamepad"), vr(!0), (0, mr.k)((0, fr.k)()), Qr
      },
      kr = rr => !(0, Nr.j)() || rr === Xr,
      Ar = () => {
        Or.reset()
      },
      Vr = () => {
        const rr = Wr.c.get("activeInputDevice"),
          Sr = "gamepad" === rr ? xr.d.getActivePad() : null;
        return {
          device: rr,
          inGame: (0, Ir.v)(),
          padMovesMouse: null !== Sr && (0, pr.e)(Sr.id)
        }
      },
      ir = rr => {
        document.pointerLockElement ? qr = null : (qr ??= {
          x: 0,
          y: 0
        }, qr.x = rr.clientX, qr.y = rr.clientY)
      },
      wr = () => {
        const rr = new hr.d,
          Sr = Sr => {
            rr.reset(), Mr = !1, (0, Nr.r)(Sr)
          },
          Qr = rr => {
            if (rr.isTrusted) {
              if (rr instanceof KeyboardEvent) {
                if ((0, Nr.p)(rr), !yr(rr)) return;
                Pr = !0
              }
              if (rr instanceof PointerEvent && "touch" === rr.pointerType) return qr = null, void Sr("touch");
              rr instanceof PointerEvent && (ir(rr), Rr = !0), ("pointerdown" !== rr.type || (rr => {
                let {
                  device: Sr,
                  inGame: Qr,
                  padMovesMouse: Zr
                } = rr;
                return !("gamepad" === Sr && Zr && Qr)
              })(Vr())) && Sr("keyboardMouse")
            }
          },
          Zr = rr => {
            rr.isTrusted && (qr = null, Sr("touch"))
          },
          jr = rr => {
            rr.isTrusted && "touch" !== rr.pointerType && !rr.relatedTarget && (qr = null)
          },
          Ir = Qr => {
            if (!Qr.isTrusted || "touch" === Qr.pointerType) return;
            ir(Qr);
            const Zr = Qr.movementX || 0,
              ar = Qr.movementY || 0;
            if (0 === Zr && 0 === ar) return;
            if (Rr = !0, vr(!1), "keyboardMouse" === Wr.c.get("activeInputDevice")) return;
            const jr = Or.isHolding(Qr.timeStamp),
              Ir = Vr(),
              fr = (rr => {
                let {
                  device: Sr,
                  inGame: Qr,
                  padMovesMouse: Zr,
                  padHolding: Wr
                } = rr;
                return ("gamepad" !== Sr || !Zr) && "keyboardMouse" !== Sr && (Qr || !Wr)
              })({
                ...Ir,
                inGame: Ir.inGame && (0, Er.f)(),
                padHolding: jr
              });
            fr && rr.add(Zr, ar, Qr.timeStamp) && (Sr("keyboardMouse"), Mr = Or.isStickOffRest())
          },
          fr = rr => {
            vr("gamepad" === rr)
          },
          pr = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", Qr, pr), window.addEventListener("pointerdown", Qr, pr), window.addEventListener("wheel", Qr, pr), window.addEventListener("touchstart", Zr, pr), window.addEventListener("pointermove", Ir, pr), window.addEventListener("pointerout", jr, pr);
        const xr = ar.i.subscribe("appManagerUpdated|activeInputDevice", fr);
        return fr(Wr.c.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", Qr, pr), window.removeEventListener("pointerdown", Qr, pr), window.removeEventListener("wheel", Qr, pr), window.removeEventListener("touchstart", Zr, pr), window.removeEventListener("pointermove", Ir, pr), window.removeEventListener("pointerout", jr, pr), qr = null, ar.i.unsubscribe(xr), vr(!1)
        }
      },
      cr = () => {
        const [rr, Sr] = (0, Zr.useState)(fr.k);
        return (0, jr.c)(fr.e, (() => {
          Sr((0, fr.k)())
        })), (0, jr.c)(xr.b, (() => {
          Sr((0, fr.k)())
        })), rr
      }
  },
  9319: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr,
      e: () => Wr
    });
    const Zr = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      Wr = rr => Zr.includes(rr)
  },
  9784: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => jr,
      e: () => ar,
      g: () => fr,
      i: () => Ir
    });
    var Zr = Qr(1573),
      Wr = Qr(1541);
    const ar = "controllerInventoryCursorChanged",
      jr = {
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
      Ir = () => {
        var rr, Sr;
        return (0, Zr.g)(ar, null !== (rr = null === (Sr = (0, Wr.g)()) || void 0 === Sr ? void 0 : Sr.getInventoryCursorState()) && void 0 !== rr ? rr : jr)
      },
      fr = () => {
        var rr, Sr;
        return null !== (rr = null === (Sr = (0, Wr.g)()) || void 0 === Sr ? void 0 : Sr.isPadSteppingSlots()) && void 0 !== rr && rr
      }
  },
  9780: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => mr,
      e: () => Ir,
      h: () => fr,
      j: () => jr,
      l: () => ar,
      n: () => pr,
      q: () => xr
    });
    let Zr = null;
    const Wr = new Set,
      ar = rr => (Zr = rr, () => {
        if (Zr === rr) {
          Zr = null;
          for (const rr of Wr) rr()
        }
      }),
      jr = rr => (Wr.add(rr), () => {
        Wr.delete(rr)
      }),
      Ir = () => Zr,
      fr = () => null !== Zr;
    let Er = null;
    const pr = rr => {
        Er = rr
      },
      xr = () => {
        const rr = Er;
        return Er = null, rr
      },
      mr = (rr, Sr) => {
        var Qr, Zr;
        return null !== (Qr = null !== (Zr = rr.find((rr => rr.element === Sr))) && void 0 !== Zr ? Zr : rr.find((rr => rr.element.contains(Sr)))) && void 0 !== Qr ? Qr : null
      }
  },
  9790: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar,
      e: () => jr
    });
    var Zr = Qr(72);
    const Wr = new WeakMap,
      ar = rr => {
        var Sr, Qr;
        return null !== (Sr = null === (Qr = Wr.get(rr)) || void 0 === Qr ? void 0 : Qr.current) && void 0 !== Sr ? Sr : null
      },
      jr = (rr, Sr) => {
        const Qr = (0, Zr.useRef)(Sr);
        Qr.current = Sr;
        const ar = (0, Zr.useRef)(null);
        (0, Zr.useEffect)((() => {
          const Sr = rr.current,
            Zr = ar.current;
          Sr !== Zr && (Zr && Wr.get(Zr) === Qr && Wr.delete(Zr), ar.current = Sr, Sr && Wr.set(Sr, Qr))
        })), (0, Zr.useEffect)((() => () => {
          const rr = ar.current;
          rr && Wr.get(rr) === Qr && Wr.delete(rr), ar.current = null
        }), [])
      }
  },
  9937: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir,
      h: () => Er,
      l: () => xr,
      p: () => pr,
      r: () => fr,
      u: () => Nr
    });
    var Zr = Qr(34),
      Wr = Qr(2156),
      ar = Qr(1541),
      jr = Qr(1518);
    const Ir = rr => {
        var Sr, Qr;
        return (0, jr.j)() && null !== (Sr = null === (Qr = (0, ar.g)()) || void 0 === Qr ? void 0 : Qr.getGlyphForNoaAction(rr)) && void 0 !== Sr ? Sr : null
      },
      fr = "controllerGlyph:",
      Er = rr => {
        var Sr, Qr;
        return null !== (Sr = null === (Qr = (0, ar.g)()) || void 0 === Qr ? void 0 : Qr.getPadGlyphIconName(rr)) && void 0 !== Sr ? Sr : `${fr}xbox/${rr}`
      },
      pr = rr => rr.startsWith(fr),
      xr = rr => {
        var Sr, Qr;
        return pr(rr) && null !== (Sr = null === (Qr = (0, ar.g)()) || void 0 === Qr ? void 0 : Qr.getPadGlyphIconUrl(rr)) && void 0 !== Sr ? Sr : null
      },
      mr = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", jr.e, Wr.f, Wr.d],
      Nr = rr => {
        const Sr = mr.map((Sr => Zr.i.subscribe(Sr, rr)));
        return () => {
          for (const rr of Sr) Zr.i.unsubscribe(rr)
        }
      }
  },
  9339: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Er,
      f: () => pr,
      g: () => fr,
      j: () => Ir
    });
    var Zr = Qr(26),
      Wr = Qr(1758),
      ar = Qr(1890);
    const jr = new Map,
      Ir = (rr, Sr) => (jr.has(rr) && console.warn(`Gameplay blocker "${rr}" registered twice; the newer one replaces it.`), jr.set(rr, Sr), () => {
        jr.get(rr) === Sr && jr.delete(rr)
      }),
      fr = () => (0, ar.e)(document.activeElement),
      Er = function() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [Sr, Qr] of jr)
          if (!rr.includes(Sr) && Qr()) return Sr;
        return null
      },
      pr = function() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === Zr.c.get("gameState") && (!(0, Wr.l)() && (!fr() && null === Er(rr)))
      }
  },
  9292: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      B: () => Xr,
      E: () => er,
      I: () => zr,
      J: () => hr,
      N: () => Er,
      O: () => mr,
      S: () => Nr,
      V: () => Wr,
      W: () => Zr,
      Y: () => yr,
      _: () => Lr,
      b: () => Hr,
      cb: () => Pr,
      e: () => lr,
      eb: () => Kr,
      f: () => pr,
      h: () => fr,
      l: () => Ir,
      m: () => Tr,
      o: () => Yr,
      r: () => Br,
      t: () => ar,
      u: () => xr,
      y: () => nr
    });
    const Zr = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      Wr = Zr.length,
      ar = function() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(Wr).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: rr
        }
      },
      jr = Object.fromEntries(Zr.map(((rr, Sr) => [rr, Sr]))),
      Ir = rr => jr[rr],
      fr = function(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const Zr = Math.hypot(rr.x, rr.y);
        if (Zr <= Sr) return {
          x: 0,
          y: 0
        };
        const Wr = Math.min(1, (Zr - Sr) / Math.max(1e-4, Qr - Sr));
        return {
          x: rr.x / Zr * Wr,
          y: rr.y / Zr * Wr
        }
      },
      Er = ["exponential", "linear", "boost"],
      pr = (rr, Sr) => {
        const Qr = Math.hypot(rr.x, rr.y);
        if (0 === Qr) return {
          x: 0,
          y: 0
        };
        const Zr = ((rr, Sr) => {
          const Qr = Math.max(0, Math.min(1, rr));
          return "linear" === Sr ? Qr : Qr * Qr
        })(Qr, Sr);
        return {
          x: rr.x / Qr * Zr,
          y: rr.y / Qr * Zr
        }
      },
      xr = .5,
      mr = .3,
      Nr = .2,
      Ur = Ir("LT"),
      tr = Ir("RT"),
      hr = rr => rr === Ur || rr === tr,
      zr = (rr, Sr) => {
        const Qr = Ir(Sr);
        return hr(Qr) ? rr[Qr] > .35 : rr[Qr] >= xr
      },
      Yr = (rr, Sr) => rr.map(((rr, Qr) => hr(Qr) ? Sr[Qr] ? rr > .35 : rr >= .55 : rr >= xr)),
      nr = ["Up", "Down", "Left", "Right"],
      er = rr => nr.includes(rr),
      Kr = function(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(rr.x, rr.y) < Sr ? null : Math.abs(rr.x) > Math.abs(rr.y) ? rr.x > 0 ? "Right" : "Left" : rr.y > 0 ? "Down" : "Up"
      },
      yr = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      Br = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      Tr = ["default", "slow", "off"],
      vr = 800,
      Or = 250,
      Lr = (rr, Sr) => "off" === Sr ? null : "slow" === Sr ? {
        initialDelayMs: Math.max(rr.initialDelayMs, vr),
        intervalMs: Math.max(rr.intervalMs, Or)
      } : rr;
    class lr {
      constructor(rr) {
        this.readTiming = rr, this.wI = !1, this.timing = null, this.nextFireMs = 0
      }
      update(rr, Sr) {
        return rr ? this.wI ? !!(this.timing && Sr >= this.nextFireMs) && (this.nextFireMs = Sr + this.timing.intervalMs, !0) : (this.wI = !0, this.timing = this.readTiming(), this.nextFireMs = Sr + (null !== (Qr = null === (Zr = this.timing) || void 0 === Zr ? void 0 : Zr.initialDelayMs) && void 0 !== Qr ? Qr : 0), !0) : (this.wI = !1, !1);
        var Qr, Zr
      }
      reset() {
        this.wI = !1
      }
    }
    const Xr = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      Pr = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class Hr {
      constructor(rr) {
        this.timer = rr, this.direction = null
      }
      update(rr, Sr) {
        return rr !== this.direction && (this.timer.reset(), this.direction = rr), this.timer.update(null !== rr, Sr) ? rr : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  9799: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr,
      f: () => ar
    });
    let Zr = -1 / 0;
    const Wr = () => {
        Zr = performance.now()
      },
      ar = rr => performance.now() - Zr < rr
  },
  9750: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      d: () => ar
    });
    var Zr = Qr(9313),
      Wr = Qr(9292);
    const ar = rr => (0, Wr._)(rr, (0, Zr.g)().buttonRepeat),
      jr = rr => new Wr.e((() => ar(rr)))
  },
  9329: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => fr,
      g: () => ar,
      k: () => Ir
    });
    var Zr = Qr(34),
      Wr = Qr(9313);
    const ar = (rr, Sr) => "OpenShop" === rr ? "shop" === Sr : "OpenLobbyLeaderboard" !== rr || "leaderboard" === Sr;
    let jr = !1;
    const Ir = rr => {
        rr !== jr && (jr = rr, Zr.i.Jp(Wr.e, (0, Wr.g)()))
      },
      fr = () => ((rr, Sr) => "shop" === rr && Sr ? "shop" : "leaderboard")((0, Wr.g)().leaderboardButton, jr)
  },
  9327: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      B: () => fr,
      E: () => Ir,
      I: () => Kr,
      J: () => mr,
      N: () => Nr,
      R: () => xr,
      S: () => er,
      W: () => Er,
      X: () => zr,
      Z: () => Or,
      b: () => Rr,
      bb: () => nr,
      cb: () => tr,
      eb: () => hr,
      f: () => Cr,
      fb: () => Ur,
      ib: () => Yr,
      j: () => Lr,
      k: () => jr,
      kb: () => Pr,
      mb: () => ar,
      n: () => vr,
      ob: () => yr,
      qb: () => gr,
      r: () => Br,
      rb: () => Tr,
      t: () => Hr,
      v: () => qr,
      y: () => pr
    });
    var Zr = Qr(9309),
      Wr = Qr(9292);
    const ar = {
        min: 25,
        max: 500,
        step: 5
      },
      jr = {
        min: 25,
        max: 100,
        step: 5
      },
      Ir = {
        min: 0,
        max: .4,
        step: .01
      },
      fr = {
        min: 25,
        max: 300,
        step: 5
      },
      Er = {
        min: .5,
        max: 6,
        step: .1
      },
      pr = (rr, Sr) => {
        if (!Number.isFinite(rr)) return Sr.min;
        const Qr = Sr.min + Math.round((rr - Sr.min) / Sr.step) * Sr.step,
          Zr = Math.min(Sr.max, Math.max(Sr.min, Qr));
        return Math.round(1e3 * Zr) / 1e3
      },
      xr = rr => `${Math.round(rr)}%`,
      mr = rr => xr(100 * rr),
      Nr = rr => `${rr.toFixed(1)}\xd7`,
      Ur = [{
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
      tr = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      hr = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      zr = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      Yr = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      nr = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      er = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      Kr = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      yr = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      Br = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      Tr = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      vr = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      Or = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      Lr = {
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
      lr = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      Xr = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      Pr = Zr.g.map((rr => {
        let {
          group: Sr,
          actions: Qr
        } = rr;
        const Zr = Qr.map((rr => ({
          kind: "action",
          action: rr
        })));
        return {
          titleKey: lr[Sr],
          rows: "gameplay" === Sr ? [...Xr, ...Zr] : Zr
        }
      })),
      Hr = Wr.W.filter((rr => "Home" !== rr)),
      qr = 1e4;
    class Rr {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = rr, this.openButton = Sr, this.accepts = Qr, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(rr, Sr) {
        var Qr;
        this.updateIgnored(rr, Sr);
        const Zr = Sr - (null !== (Qr = this.startMs) && void 0 !== Qr ? Qr : Sr) >= 250;
        for (const Wr of Hr)
          if (Wr !== this.cancelButton && Zr && !this.ignoredUntilMs.has(Wr) && rr.wasPressed(Wr) && this.accepts(Wr)) return {
            kind: "bind",
            button: Wr
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (rr.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = Sr
        }
        return null === this.cancelDownAtMs ? null : rr.isHeld(this.cancelButton) && Sr - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : rr.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(rr) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (rr - this.cancelDownAtMs) / 700)
      }
      updateIgnored(rr, Sr) {
        if (null === this.startMs) {
          this.startMs = Sr;
          for (const Sr of Hr) rr.isDown(Sr) && this.ignoredUntilMs.set(Sr, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, Sr + 250)
        }
        for (const [Qr, Zr] of this.ignoredUntilMs) {
          const Wr = rr.isDown(Qr);
          Zr === 1 / 0 ? Wr || Qr !== this.openButton ? Wr || this.ignoredUntilMs.delete(Qr) : this.ignoredUntilMs.set(Qr, Sr + 250) : Sr >= Zr ? this.ignoredUntilMs.delete(Qr) : Wr && this.ignoredUntilMs.set(Qr, 1 / 0)
        }
      }
    }
    const gr = 6e3;
    class Cr {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(rr, Sr) {
        let {
          pressed: Qr,
          wI: Zr
        } = rr;
        if (Qr) {
          const rr = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== rr && Sr - rr < 1500 ? [...this.pressesAtMs, Sr] : [Sr], this.pressesAtMs.length >= 3) return 1
        }
        return Zr ? (this.downAtMs ??= Sr, Math.min(1, (Sr - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  9818: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      f: () => Wr
    });
    let Zr = null;
    const Wr = function(rr) {
        const Sr = {
          cycle: rr,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Zr = Sr, () => {
          Zr === Sr && (Zr = null)
        }
      },
      ar = () => {
        var rr;
        return null !== (rr = Zr) && void 0 !== rr && rr.canCycle() ? Zr.cycle : null
      }
  },
  5986: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar,
      c: () => jr
    });
    var Zr = Qr(72);
    const Wr = new WeakMap,
      ar = rr => {
        var Sr;
        const Qr = rr.closest("[data-pad-slider]");
        return Qr && null !== (Sr = Wr.get(Qr)) && void 0 !== Sr ? Sr : null
      },
      jr = (rr, Sr) => {
        const Qr = (0, Zr.useRef)(Sr);
        Qr.current = Sr, (0, Zr.useEffect)((() => {
          if (rr.current) return ((rr, Sr) => (Wr.set(rr, Sr), () => {
            Wr.get(rr) === Sr && Wr.delete(rr)
          }))(rr.current, {
            adjust: rr => {
              Qr.current.adjust(rr)
            },
            setFraction: rr => {
              Qr.current.setFraction(rr)
            },
            endDrag: () => {
              Qr.current.endDrag()
            }
          })
        }), [rr])
      }
  },
  9923: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Wr,
      g: () => jr,
      j: () => ar,
      m: () => Zr,
      n: () => Ir,
      p: () => Er,
      r: () => pr
    });
    const Zr = "controllerActionWheelOpen",
      Wr = "controllerActionWheelAim",
      ar = "controllerActionWheelCommit",
      jr = "controllerActionWheelClose",
      Ir = "controllerActionWheelPick";
    let fr = !1;
    const Er = () => fr,
      pr = rr => {
        fr = rr
      }
  },
  9915: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar,
      c: () => Wr
    });
    let Zr = 0;
    const Wr = () => {
        Zr++
      },
      ar = () => Zr
  },
  9813: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => fr,
      f: () => Wr,
      g: () => jr,
      i: () => ar,
      k: () => Zr,
      n: () => Er
    });
    const Zr = "controllerQuickChatWheelOpen",
      Wr = "controllerQuickChatWheelAim",
      ar = "controllerQuickChatWheelCommit",
      jr = "controllerQuickChatWheelClose";
    let Ir = !1;
    const fr = () => Ir,
      Er = rr => {
        Ir = rr
      }
  },
  9832: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      h: () => Wr
    });
    var Zr = Qr(34);
    const Wr = "localBlockBroken";

    function ar() {
      return {
        onPlayerChangeBlock(rr, Sr, Qr, ar, jr, Ir) {
          "Air" === Ir && Zr.i.Jp(Wr)
        }
      }
    }
  },
  9827: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr
    });
    var Zr = Qr(1308);

    function Wr(rr, Sr) {
      var Qr, Wr;
      try {
        const Qr = (0, Zr.b)();
        if ("function" === typeof Qr) {
          const Zr = new Qr(rr, Sr);
          if (Zr.type === rr) return Zr
        }
      } catch {}
      const ar = document.createEvent("Event");
      return ar.initEvent(rr, null !== (Qr = null === Sr || void 0 === Sr ? void 0 : Sr.bubbles) && void 0 !== Qr && Qr, null !== (Wr = null === Sr || void 0 === Sr ? void 0 : Sr.cancelable) && void 0 !== Wr && Wr), ar
    }
  },
  9888: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => jr
    });
    var Zr = Qr(9890),
      Wr = Qr(688),
      ar = Qr(139);

    function jr(rr) {
      var Sr, Qr;
      if ((0, Wr.L)(rr)) return !0;
      const jr = null !== (Sr = null === (Qr = ar.siteUsedData[ar.siteUsed]) || void 0 === Qr ? void 0 : Qr.adConfig.showRewardedAds) && void 0 !== Sr && Sr;
      for (const Wr in rr) {
        const Sr = rr[Wr];
        if (null !== Sr && void 0 !== Sr && Sr.items)
          for (const rr in Sr.items)
            if ((0, Zr.m)(Sr.items[rr], jr)) return !1
      }
      return !0
    }
  },
  9931: () => {},
  9344: (rr, Sr, Qr) => {
    var Zr = {
      "./nintendo/A.svg": 9350,
      "./nintendo/B.svg": 9359,
      "./nintendo/Down.svg": 9366,
      "./nintendo/Home.svg": 9375,
      "./nintendo/LB.svg": 9383,
      "./nintendo/LS.svg": 9386,
      "./nintendo/LT.svg": 9389,
      "./nintendo/Left.svg": 9392,
      "./nintendo/LeftStick.svg": 9400,
      "./nintendo/Menu.svg": 9404,
      "./nintendo/RB.svg": 9409,
      "./nintendo/RS.svg": 9414,
      "./nintendo/RT.svg": 9417,
      "./nintendo/Right.svg": 9420,
      "./nintendo/RightStick.svg": 9423,
      "./nintendo/Up.svg": 9431,
      "./nintendo/View.svg": 9440,
      "./nintendo/X.svg": 9446,
      "./nintendo/Y.svg": 9455,
      "./playstation/A.svg": 9462,
      "./playstation/B.svg": 9470,
      "./playstation/Down.svg": 9472,
      "./playstation/Home.svg": 9478,
      "./playstation/LB.svg": 9483,
      "./playstation/LS.svg": 9485,
      "./playstation/LT.svg": 9489,
      "./playstation/Left.svg": 9491,
      "./playstation/LeftStick.svg": 9498,
      "./playstation/Menu.svg": 9501,
      "./playstation/RB.svg": 9507,
      "./playstation/RS.svg": 9513,
      "./playstation/RT.svg": 9522,
      "./playstation/Right.svg": 9530,
      "./playstation/RightStick.svg": 9538,
      "./playstation/Up.svg": 9545,
      "./playstation/View.svg": 9550,
      "./playstation/X.svg": 9552,
      "./playstation/Y.svg": 9554,
      "./steamdeck/A.svg": 9557,
      "./steamdeck/B.svg": 9563,
      "./steamdeck/Down.svg": 9570,
      "./steamdeck/Home.svg": 9576,
      "./steamdeck/LB.svg": 9582,
      "./steamdeck/LS.svg": 9590,
      "./steamdeck/LT.svg": 9595,
      "./steamdeck/Left.svg": 9598,
      "./steamdeck/LeftStick.svg": 9604,
      "./steamdeck/Menu.svg": 9606,
      "./steamdeck/RB.svg": 9615,
      "./steamdeck/RS.svg": 9619,
      "./steamdeck/RT.svg": 9625,
      "./steamdeck/Right.svg": 9627,
      "./steamdeck/RightStick.svg": 9631,
      "./steamdeck/Up.svg": 9634,
      "./steamdeck/View.svg": 9638,
      "./steamdeck/X.svg": 9643,
      "./steamdeck/Y.svg": 9646,
      "./xbox/A.svg": 9652,
      "./xbox/B.svg": 9660,
      "./xbox/Down.svg": 9667,
      "./xbox/Home.svg": 9673,
      "./xbox/LB.svg": 9675,
      "./xbox/LS.svg": 9677,
      "./xbox/LT.svg": 9682,
      "./xbox/Left.svg": 9685,
      "./xbox/LeftStick.svg": 9694,
      "./xbox/Menu.svg": 9699,
      "./xbox/RB.svg": 9707,
      "./xbox/RS.svg": 9715,
      "./xbox/RT.svg": 9717,
      "./xbox/Right.svg": 9720,
      "./xbox/RightStick.svg": 9727,
      "./xbox/Up.svg": 9731,
      "./xbox/View.svg": 9736,
      "./xbox/X.svg": 9741,
      "./xbox/Y.svg": 9743
    };

    function Wr(rr) {
      var Sr = ar(rr);
      return Qr(Sr)
    }

    function ar(rr) {
      if (!Qr.o(Zr, rr)) {
        var Sr = new Error("Cannot find module '" + rr + "'");
        throw Sr.code = "MODULE_NOT_FOUND", Sr
      }
      return Zr[rr]
    }
    Wr.keys = function() {
      return Object.keys(Zr)
    }, Wr.resolve = ar, rr.exports = Wr, Wr.id = 9344
  },
  9350: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  9359: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  9366: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9375: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  9383: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  9386: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9389: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  9392: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9400: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9404: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  9409: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  9414: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9417: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  9420: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9423: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9431: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9440: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  9446: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  9455: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  9462: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  9470: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  9472: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  9478: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  9483: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  9485: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  9489: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  9491: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  9498: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9501: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  9507: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  9513: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  9522: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  9530: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  9538: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9545: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  9550: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  9552: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  9554: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  9557: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  9563: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  9570: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9576: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  9582: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  9590: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9595: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  9598: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9604: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9606: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  9615: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  9619: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9625: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/RT.a0523211130959598bed.svg"
  },
  9627: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9631: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9634: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9638: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  9643: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9646: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  9652: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  9660: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  9667: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  9673: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  9675: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  9677: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  9682: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  9685: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  9694: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  9699: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  9707: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  9715: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  9717: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  9720: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  9727: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  9731: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  9736: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  9741: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  9743: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);
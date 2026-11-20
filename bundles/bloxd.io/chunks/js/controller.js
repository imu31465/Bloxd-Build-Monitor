export const id = 28;
export const ids = [28];
export const modules = {
  7914: (vv, zv, Pv) => {
    var hv = {
      "./nintendo/A.svg": 7920,
      "./nintendo/B.svg": 7926,
      "./nintendo/Down.svg": 7935,
      "./nintendo/Home.svg": 7940,
      "./nintendo/LB.svg": 7949,
      "./nintendo/LS.svg": 7956,
      "./nintendo/LT.svg": 7964,
      "./nintendo/Left.svg": 7968,
      "./nintendo/LeftStick.svg": 7976,
      "./nintendo/Menu.svg": 7979,
      "./nintendo/RB.svg": 7986,
      "./nintendo/RS.svg": 7988,
      "./nintendo/RT.svg": 7991,
      "./nintendo/Right.svg": 7993,
      "./nintendo/RightStick.svg": 8002,
      "./nintendo/Up.svg": 8005,
      "./nintendo/View.svg": 8007,
      "./nintendo/X.svg": 8015,
      "./nintendo/Y.svg": 8021,
      "./playstation/A.svg": 8026,
      "./playstation/B.svg": 8033,
      "./playstation/Down.svg": 8040,
      "./playstation/Home.svg": 8049,
      "./playstation/LB.svg": 8056,
      "./playstation/LS.svg": 8062,
      "./playstation/LT.svg": 8067,
      "./playstation/Left.svg": 8073,
      "./playstation/LeftStick.svg": 8078,
      "./playstation/Menu.svg": 8080,
      "./playstation/RB.svg": 8089,
      "./playstation/RS.svg": 8096,
      "./playstation/RT.svg": 8098,
      "./playstation/Right.svg": 8103,
      "./playstation/RightStick.svg": 8106,
      "./playstation/Up.svg": 8113,
      "./playstation/View.svg": 8119,
      "./playstation/X.svg": 8122,
      "./playstation/Y.svg": 8129,
      "./steamdeck/A.svg": 8136,
      "./steamdeck/B.svg": 8138,
      "./steamdeck/Down.svg": 8145,
      "./steamdeck/Home.svg": 8150,
      "./steamdeck/LB.svg": 8159,
      "./steamdeck/LS.svg": 8164,
      "./steamdeck/LT.svg": 8171,
      "./steamdeck/Left.svg": 8180,
      "./steamdeck/LeftStick.svg": 8184,
      "./steamdeck/Menu.svg": 8190,
      "./steamdeck/RB.svg": 8195,
      "./steamdeck/RS.svg": 8201,
      "./steamdeck/RT.svg": 8208,
      "./steamdeck/Right.svg": 8212,
      "./steamdeck/RightStick.svg": 8216,
      "./steamdeck/Up.svg": 8218,
      "./steamdeck/View.svg": 8223,
      "./steamdeck/X.svg": 8227,
      "./steamdeck/Y.svg": 8234,
      "./xbox/A.svg": 8238,
      "./xbox/B.svg": 8246,
      "./xbox/Down.svg": 8248,
      "./xbox/Home.svg": 8251,
      "./xbox/LB.svg": 8253,
      "./xbox/LS.svg": 8256,
      "./xbox/LT.svg": 8258,
      "./xbox/Left.svg": 8263,
      "./xbox/LeftStick.svg": 8265,
      "./xbox/Menu.svg": 8268,
      "./xbox/RB.svg": 8274,
      "./xbox/RS.svg": 8281,
      "./xbox/RT.svg": 8285,
      "./xbox/Right.svg": 8292,
      "./xbox/RightStick.svg": 8298,
      "./xbox/Up.svg": 8306,
      "./xbox/View.svg": 8312,
      "./xbox/X.svg": 8321,
      "./xbox/Y.svg": 8329
    };

    function Sv(vv) {
      var zv = ev(vv);
      return Pv(zv)
    }

    function ev(vv) {
      if (!Pv.o(hv, vv)) {
        var zv = new Error("Cannot find module '" + vv + "'");
        throw zv.code = "MODULE_NOT_FOUND", zv
      }
      return hv[vv]
    }
    Sv.keys = function() {
      return Object.keys(hv)
    }, Sv.resolve = ev, vv.exports = Sv, Sv.id = 7914
  },
  4732: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => av,
      f: () => Gv,
      i: () => sv,
      l: () => cv
    });
    var hv = Pv(52),
      Sv = Pv(4738),
      ev = Pv(4129),
      gv = Pv(1344),
      pv = Pv(4765),
      dv = Pv(1035),
      Nv = Pv.n(dv),
      lv = Pv(1336),
      Tv = Pv(1692),
      Wv = Pv(4773),
      wv = Pv(1082);

    function av(vv) {
      let {
        label: zv,
        onClick: Pv,
        checked: hv,
        circleInfoText: Sv,
        className: pv,
        disabled: dv,
        note: lv
      } = vv;
      return (0, wv.jsxs)("div", {
        "aria-disabled": dv || void 0,
        "data-pad-focusable": !0,
        className: Nv()("SettingBox CheckboxContainer", {
          [pv]: pv,
          SettingBoxDisabled: dv
        }),
        onClick: () => {
          dv || Pv(!hv)
        },
        children: [(0, wv.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, wv.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, wv.jsx)(ev.e, {
              className: "SettingsCheckbox",
              checked: hv,
              disabled: dv,
              onChange: () => {}
            })
          }), (0, wv.jsxs)("div", {
            className: "CheckboxText",
            children: [zv, Sv && (0, wv.jsx)("span", {
              onClick: vv => vv.stopPropagation(),
              children: (0, wv.jsx)(gv.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Sv
              })
            })]
          })]
        }), lv && (0, wv.jsx)("div", {
          className: "SettingNote",
          children: lv
        })]
      })
    }

    function sv(vv) {
      let {
        name: zv,
        onChange: Pv,
        min: Sv,
        max: ev,
        step: pv,
        initValue: dv,
        circleInfoText: lv,
        format: Tv,
        className: Wv,
        padStep: av,
        disabled: sv = !1,
        selectableMax: Cv,
        cappedNote: cv,
        onChangeComplete: Gv
      } = vv;
      const [mv, jv] = (0, hv.useState)(dv), fv = (0, hv.useRef)(dv);
      (0, hv.useEffect)((() => {
        fv.current = dv, jv(dv)
      }), [dv]);
      const Fv = void 0 !== Cv && Cv < ev,
        Yv = Fv ? {
          "--slider-selectable": (Cv - Sv) / (ev - Sv)
        } : void 0;
      return (0, wv.jsxs)("div", {
        className: Nv()("SettingBox SettingsSliderDiv", {
          [Wv]: Wv,
          SettingBoxDisabled: sv,
          SliderCapped: Fv
        }),
        style: Yv,
        children: [(0, wv.jsxs)("div", {
          className: "SliderText",
          children: [`${zv}: ${Tv?Tv(mv):mv}`, lv && (0, wv.jsx)(gv.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: lv
          })]
        }), (0, wv.jsx)("div", {
          className: "SliderDiv",
          children: (0, wv.jsx)(iv, {
            value: mv,
            min: Sv,
            max: ev,
            step: pv,
            onChange: vv => {
              if (Fv && vv >= Cv && mv === Cv) return;
              const zv = Fv ? Math.min(vv, Cv) : vv;
              fv.current = zv, jv(zv), Pv(zv)
            },
            onChangeComplete: Gv && (() => {
              Gv(fv.current)
            }),
            format: Tv,
            padStep: av,
            disabled: sv
          })
        }), Fv && cv && (0, wv.jsx)("div", {
          className: "SettingNote",
          children: cv
        })]
      })
    }
    const Cv = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function iv(vv) {
      var zv;
      let {
        value: Pv,
        min: ev,
        max: gv,
        step: pv,
        onChange: dv,
        orientation: Nv,
        reverse: lv,
        setIsChanging: Tv,
        tooltip: av,
        labels: sv,
        handleLabel: iv,
        format: cv,
        onChangeStart: Gv,
        onChangeComplete: mv,
        padStep: jv,
        disabled: fv = !1
      } = vv;
      const Fv = (0, hv.useRef)(null),
        Yv = (0, hv.useRef)(null);
      (0, hv.useLayoutEffect)((() => {
        var vv, zv, Pv;
        const hv = null !== (vv = null === (zv = Fv.current) || void 0 === zv ? void 0 : zv.querySelector(".rangeslider")) && void 0 !== vv ? vv : null;
        null === hv || void 0 === hv || hv.setAttribute("data-pad-slider", ""), null === hv || void 0 === hv || hv.setAttribute("data-pad-focusable", ""), null === hv || void 0 === hv || null === (Pv = hv.querySelector(".rangeslider__handle")) || void 0 === Pv || Pv.setAttribute("data-pad-slider-handle", ""), Yv.current = hv
      }), []), (0, hv.useLayoutEffect)((() => {
        var vv, zv;
        fv ? null === (vv = Yv.current) || void 0 === vv || vv.setAttribute("aria-disabled", "true") : null === (zv = Yv.current) || void 0 === zv || zv.removeAttribute("aria-disabled")
      }), [fv]);
      const nv = (null !== (zv = String(pv).split(".")[1]) && void 0 !== zv ? zv : "").length,
        Ov = vv => {
          const zv = Number((Math.round((vv - ev) / pv) * pv + ev).toFixed(nv));
          return Math.min(gv, Math.max(ev, zv))
        },
        Dv = (0, hv.useRef)(mv);
      Dv.current = mv, (0, hv.useEffect)((() => {
        const vv = Fv.current;
        if (!vv) return;
        const zv = vv => {
          var zv;
          Cv.has(vv.key) && (null === (zv = Dv.current) || void 0 === zv || zv.call(Dv))
        };
        return vv.addEventListener("keyup", zv), () => {
          vv.removeEventListener("keyup", zv)
        }
      }), []);
      const Kv = (0, hv.useRef)(!1);
      return (0, Wv.e)(Yv, {
        adjust: vv => {
          if (fv) return;
          const zv = null !== jv && void 0 !== jv ? jv : Math.max(pv, Math.round((gv - ev) / 20 / pv) * pv),
            hv = Ov(Pv + vv * zv * (lv ? -1 : 1));
          hv !== Pv && (null === Gv || void 0 === Gv || Gv(), dv(hv), null === mv || void 0 === mv || mv())
        },
        setFraction: vv => {
          if (fv) return;
          const zv = Ov(ev + (lv ? 1 - vv : vv) * (gv - ev));
          zv !== Pv && (Kv.current || (Kv.current = !0, null === Gv || void 0 === Gv || Gv()), dv(zv))
        },
        endDrag: () => {
          Kv.current && (Kv.current = !1, null === mv || void 0 === mv || mv())
        }
      }), (0, wv.jsx)("div", {
        ref: Fv,
        style: {
          display: "contents"
        },
        children: (0, wv.jsx)(Sv.d, {
          value: Pv,
          min: ev,
          max: gv,
          step: pv,
          onChange: dv,
          orientation: Nv,
          reverse: lv,
          tooltip: av,
          labels: sv,
          handleLabel: iv,
          format: cv,
          onChangeStart: () => {
            null === Gv || void 0 === Gv || Gv(), null === Tv || void 0 === Tv || Tv(!0)
          },
          onChangeComplete: () => {
            null === Tv || void 0 === Tv || Tv(!1), null === mv || void 0 === mv || mv()
          }
        })
      })
    }
    async function cv() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const zv = lv.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: vv
      });
      !0 === await zv.getResult() && (0, Tv.reloadBloxd)()
    }

    function Gv(vv) {
      let {
        label: zv,
        options: Pv,
        value: hv,
        onChange: Sv,
        circleInfoText: ev
      } = vv;
      return (0, wv.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, wv.jsxs)("div", {
          className: "SliderText",
          children: [zv, ev && (0, wv.jsx)(gv.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: ev
          })]
        }), (0, wv.jsx)(pv.c, {
          ariaLabel: zv,
          options: Pv,
          value: hv,
          onChange: Sv
        })]
      })
    }
  },
  4765: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv
    });
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(1082);

    function gv(vv) {
      let {
        options: zv,
        value: Pv,
        onChange: hv,
        ariaLabel: gv,
        className: pv,
        reselectable: dv = !1,
        keepsFocus: Nv = !1,
        padTabs: lv
      } = vv;
      const Tv = void 0 !== lv;
      return (0, ev.jsx)("div", {
        className: Sv()("SegmentedToggle", pv),
        role: "group",
        "aria-label": gv,
        "data-pad-tabs": lv,
        children: zv.map((vv => {
          const zv = vv.value === Pv;
          return (0, ev.jsx)("button", {
            type: "button",
            "aria-pressed": zv,
            "data-pad-tab": Tv || void 0,
            "data-pad-selected": Tv && zv ? "true" : void 0,
            "data-pad-default-focus": Tv && zv || void 0,
            "aria-label": vv.ariaLabel,
            title: vv.ariaLabel,
            className: Sv()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: zv
            }),
            onMouseDown: Nv ? vv => {
              vv.preventDefault()
            } : void 0,
            onClick: () => {
              zv && !dv || hv(vv.value)
            },
            children: vv.label
          }, vv.value)
        }))
      })
    }
  },
  7864: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Sv,
      g: () => ev,
      i: () => Wv,
      k: () => Tv,
      l: () => Nv,
      o: () => pv,
      p: () => hv,
      q: () => wv,
      r: () => av
    });
    const hv = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      Sv = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: hv
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      ev = {
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
      gv = ["pickBlock", "perspective"],
      pv = vv => gv.includes(vv) ? gv : [vv],
      dv = Object.fromEntries(Sv.flatMap((vv => {
        let {
          group: zv,
          actions: Pv
        } = vv;
        return Pv.map((vv => [vv, zv]))
      }))),
      Nv = vv => dv[vv],
      lv = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      Tv = vv => {
        var zv;
        return [Nv(vv), ...null !== (zv = lv[vv]) && void 0 !== zv ? zv : []]
      },
      Wv = new Set(["menu", "inventory", "keyboard"]),
      wv = {
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
      av = new Set(["forward", "backward", "left", "right"])
  },
  7861: (vv, zv, Pv) => {
    Pv.d(zv, {
      D: () => Ov,
      G: () => lv,
      H: () => nv,
      L: () => Vv,
      c: () => cv,
      e: () => jv,
      f: () => Wv,
      g: () => wv,
      k: () => Rv,
      m: () => Kv,
      o: () => Dv,
      q: () => mv,
      t: () => Uv,
      w: () => Yv,
      z: () => Gv
    });
    var hv = Pv(7864),
      Sv = Pv(7872),
      ev = Pv(7848),
      gv = Pv(7894);
    const pv = vv => "pickBlock" === vv ? "perspective" : vv,
      dv = (vv, zv) => {
        var Pv;
        const Sv = pv(zv);
        return null !== (Pv = vv[Sv]) && void 0 !== Pv ? Pv : hv.g[Sv]
      },
      Nv = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((vv => {
        let [zv, Pv] = vv;
        return [
          [zv, Pv],
          [Pv, zv]
        ]
      }))),
      lv = (vv, zv) => null !== vv && void 0 !== vv ? vv : "nintendo" === zv,
      Tv = vv => lv((0, Sv.g)().swapConfirmBack, (0, Sv.h)()) && Nv.get(vv) || vv,
      Wv = vv => dv((0, Sv.g)().bindings, Tv(vv)),
      wv = vv => hv.g[Tv(vv)],
      av = Object.keys(hv.g),
      sv = vv => "gameplay" === (0, hv.l)(vv) ? ["gameplay"] : (0, hv.k)(vv),
      Cv = (vv, zv) => {
        const Pv = sv(zv);
        return sv(vv).some((vv => Pv.includes(vv)))
      },
      iv = (vv, zv, Pv) => {
        const Sv = dv(vv, zv),
          gv = new Set((0, hv.o)(zv)),
          Nv = [...gv];
        for (let hv = Nv.pop(); hv; hv = Nv.pop())
          for (const zv of av) {
            const ev = dv(vv, zv);
            gv.has(zv) || ev !== Pv && ev !== Sv || !Cv(hv, zv) || (gv.add(zv), Nv.push(zv))
          }
        const lv = {
          ...vv
        };
        for (const Tv of gv) {
          const zv = dv(vv, Tv) === Sv ? Pv : Sv,
            gv = (0, hv.k)(Tv).some((vv => hv.i.has(vv)));
          if ((0, ev.B)(zv) && gv) return null;
          lv[pv(Tv)] = zv
        }
        for (const ev of Object.keys(lv)) lv[ev] === hv.g[ev] && delete lv[ev];
        return lv
      },
      cv = (vv, zv) => null !== iv((0, Sv.g)().bindings, Tv(vv), zv),
      Gv = (vv, zv) => {
        if (Wv(vv) === zv) return !0;
        const Pv = iv((0, Sv.g)().bindings, Tv(vv), zv);
        return !!Pv && ((0, Sv.i)({
          bindings: Pv
        }), !0)
      },
      mv = (vv, zv) => {
        const Pv = (0, hv.o)(zv);
        return av.filter((zv => pv(zv) === zv && !Pv.includes(zv) && dv(vv, Tv(zv)) !== Wv(zv)))
      },
      jv = ["southpaw", "triggersSwapped"],
      fv = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      Fv = vv => Object.keys(fv[vv]),
      Yv = (vv, zv) => "southpaw" === vv ? zv.swapSticks : Fv(vv).every((Pv => dv(zv.bindings, Pv) === fv[vv][Pv])),
      nv = (vv, zv) => {
        const Pv = (0, Sv.g)();
        let ev = Pv.bindings;
        for (const Sv of Fv(vv)) {
          const Pv = zv ? fv[vv][Sv] : hv.g[Sv];
          if (ev = iv(ev, Sv, Pv), !ev) return !1
        }
        return (0, Sv.i)({
          swapSticks: "southpaw" === vv ? zv : Pv.swapSticks,
          bindings: ev
        }), !0
      },
      Ov = () => {
        (0, Sv.i)({
          swapSticks: !1,
          bindings: {}
        })
      },
      Dv = () => (0, Sv.g)().swapSticks ? "RightStick" : "LeftStick",
      Kv = () => (0, Sv.g)().swapSticks ? "LeftStick" : "RightStick",
      Vv = vv => (0, Sv.g)().swapSticks && (0, ev.B)(vv),
      Uv = vv => Vv(vv) ? Dv() : Kv(),
      Rv = vv => {
        if (hv.r.has(vv)) return Dv();
        const zv = hv.q[vv];
        return zv && ("leaderboard" !== zv || (0, gv.h)(vv, (0, gv.e)())) ? Wv(zv) : null
      }
  },
  7843: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      ControllerCategory: () => cp,
      ControllerGlyph: () => jS,
      ControllerRoot: () => cg,
      PadLobbyShortcuts: () => qg,
      PadSneakChip: () => ng,
      PadTooltip: () => Dg,
      attachPressToContinue: () => yg,
      getBoundButton: () => lv.f,
      getControllerSettings: () => Wv.g,
      getGlyphForNoaAction: () => lv.k,
      getInventoryCursorState: () => mp,
      getMenuShortcutButton: () => yP,
      getPadGlyphIconName: () => fg,
      getPadGlyphIconUrl: () => Fg,
      getPadRepeatTiming: () => sv.f,
      handOverPadFocus: () => fp,
      hasActivePad: () => Gp,
      isPadSteppingSlots: () => jp
    });
    const hv = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var Sv = Pv(1175),
      ev = Pv(1387),
      gv = Pv(7845),
      pv = Pv(62),
      dv = Pv(22),
      Nv = Pv(26),
      lv = Pv(7861),
      Tv = Pv(7901),
      Wv = Pv(7872),
      wv = Pv(7903),
      av = Pv(7848),
      sv = Pv(8344),
      Cv = Pv(8347),
      iv = Pv(1630);
    const cv = (vv, zv, Pv) => Math.max(zv, Math.min(Pv, vv)),
      Gv = vv => Math.min(vv.width, vv.height) / 720,
      mv = vv => Math.max(.15, vv);
    class jv {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(vv, zv) {
        const Pv = Math.hypot(vv.x, vv.y) >= (vv => Math.max(.3, vv))(zv);
        return this.locked ? (this.locked = Pv, !1) : Pv
      }
    }
    const fv = (vv, zv) => {
        const Pv = cv(zv.dtMs, 0, 100),
          hv = Pv / 1e3,
          Sv = Gv(zv.viewport) * (zv.cursorSpeedPercent / 100),
          ev = (0, av.i)(zv.stick, mv(zv.moveDeadzone)),
          gv = Math.hypot(ev.x, ev.y),
          pv = ((vv, zv, Pv) => {
            if (zv < .3) return 0;
            const hv = Pv / 350;
            return zv >= .85 ? Math.min(1, vv + hv) : Math.max(0, vv - hv)
          })(vv.speedRamp, gv, Pv);
        let dv = vv.x,
          Nv = vv.y;
        if (gv > 0) {
          const vv = .45 + .55 * pv,
            Pv = zv.context.overInteractive ? .45 : 1,
            lv = 1400 * (vv => {
              const zv = cv(vv, 0, 1);
              return .3 * zv + .7 * zv * zv
            })(gv) * Sv * vv * Pv;
          dv += ev.x / gv * lv * hv, Nv += ev.y / gv * lv * hv
        }
        const lv = Math.hypot(zv.dpad.x, zv.dpad.y);
        if (lv > 0) {
          const vv = 500 * Sv;
          dv += zv.dpad.x / lv * vv * hv, Nv += zv.dpad.y / lv * vv * hv
        }
        const Tv = zv.context.magnetTarget;
        if (Tv && gv < .3 && 0 === lv) {
          const vv = ((vv, zv, Pv, hv, Sv) => {
            const ev = zv.x - vv.x,
              gv = zv.y - vv.y,
              pv = Math.hypot(ev, gv);
            if (0 === pv) return {
              x: 0,
              y: 0
            };
            const dv = Math.min(pv, Sv * (1 - hv / .3));
            let Nv = ev / pv * dv,
              lv = gv / pv * dv;
            if (hv > 0) {
              const vv = Pv.x / hv,
                zv = Pv.y / hv,
                Sv = Nv * vv + lv * zv;
              Sv < 0 && (Nv -= Sv * vv, lv -= Sv * zv)
            }
            return {
              x: Nv,
              y: lv
            }
          })({
            x: dv,
            y: Nv
          }, Tv, ev, gv, 120 * Gv(zv.viewport) * hv);
          dv += vv.x, Nv += vv.y
        }
        return {
          x: cv(dv, 0, Math.max(0, zv.viewport.width - 1)),
          y: cv(Nv, 0, Math.max(0, zv.viewport.height - 1)),
          speedRamp: pv
        }
      },
      Fv = vv => {
        const zv = (0, av.i)(vv, .2);
        return 0 !== zv.x || 0 !== zv.y
      },
      Yv = (vv, zv) => {
        const Pv = (0, av.i)(vv, .2),
          hv = Math.hypot(Pv.x, Pv.y);
        if (0 === hv) return {
          x: 0,
          y: 0
        };
        const Sv = hv * hv * 1600,
          ev = cv(zv, 0, 100) / 1e3;
        return {
          x: Pv.x / hv * Sv * ev,
          y: Pv.y / hv * Sv * ev
        }
      },
      nv = (vv, zv) => "y" === zv ? vv.scrollHeight > vv.clientHeight + 1 : vv.scrollWidth > vv.clientWidth + 1,
      Ov = (vv, zv) => {
        if (!nv(vv, zv)) return !1;
        const Pv = getComputedStyle(vv),
          hv = "y" === zv ? Pv.overflowY : Pv.overflowX;
        return "auto" === hv || "scroll" === hv
      },
      Dv = (vv, zv, Pv) => {
        for (let ev = vv instanceof HTMLElement ? vv : null !== (hv = null === vv || void 0 === vv ? void 0 : vv.parentElement) && void 0 !== hv ? hv : null; ev; ev = ev.parentElement) {
          var hv;
          if (Ov(ev, zv)) return ev;
          if (ev === Pv) return null
        }
        if (Pv) return null;
        const Sv = document.scrollingElement;
        return Sv instanceof HTMLElement && nv(Sv, zv) ? Sv : null
      },
      Kv = new WeakMap,
      Vv = (vv, zv) => {
        const Pv = performance.now(),
          hv = Kv.get(vv);
        if (hv && hv.axis === zv && Pv - hv.atMs < 500 && (!hv.container || hv.container.isConnected)) return hv.container;
        const Sv = Uv(vv, zv);
        return Kv.set(vv, {
          axis: zv,
          atMs: Pv,
          container: Sv
        }), Sv
      },
      Uv = (vv, zv) => {
        let Pv = Ov(vv, zv) ? vv : null,
          hv = Pv ? Pv.clientWidth * Pv.clientHeight : 0;
        for (const Sv of vv.querySelectorAll("*")) {
          const vv = Sv.clientWidth * Sv.clientHeight;
          vv > hv && Ov(Sv, zv) && (Pv = Sv, hv = vv)
        }
        return Pv
      },
      Rv = (vv, zv, Pv) => "y" === zv ? Pv < 0 ? vv.scrollTop > 0 : vv.scrollTop + vv.clientHeight < vv.scrollHeight - 1 : Pv < 0 ? vv.scrollLeft > 0 : vv.scrollLeft + vv.clientWidth < vv.scrollWidth - 1,
      xv = (vv, zv, Pv) => {
        "y" === zv ? vv.scrollBy({
          top: Pv,
          behavior: "instant"
        }) : vv.scrollBy({
          left: Pv,
          behavior: "instant"
        })
      },
      tv = vv => {
        if (!vv || vv === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const zv = vv.getBoundingClientRect(),
          Pv = Math.max(0, zv.left),
          hv = Math.max(0, zv.top);
        return new DOMRect(Pv, hv, Math.min(window.innerWidth, zv.right) - Pv, Math.min(window.innerHeight, zv.bottom) - hv)
      },
      qv = (vv, zv) => vv.left < zv.right && zv.left < vv.right && vv.top < zv.bottom && zv.top < vv.bottom;
    var Iv = Pv(52),
      Qv = Pv(1035),
      Zv = Pv.n(Qv),
      Av = Pv(1082);
    let Lv = 0,
      Hv = !1;
    class Mv {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(vv) {
        this.element = vv, this.shownKey = "", this.gap = null
      }
      show(vv) {
        const zv = this.element;
        if (!zv) return;
        const Pv = vv ? this.keepOnScreen(zv, vv) : null,
          hv = Pv ? `${Pv.left},${Pv.top},${Pv.width},${Pv.height}` : "";
        if (hv === this.shownKey) return;
        const Sv = "" === this.shownKey;
        this.shownKey = hv, zv.classList.toggle("Visible", null !== Pv), Pv && (zv.classList.toggle("Snap", Sv), zv.style.width = `${Pv.width}px`, zv.style.height = `${Pv.height}px`, zv.style.transform = `translate(${Pv.left}px, ${Pv.top}px)`, Sv && (zv.offsetWidth, zv.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(vv, zv) {
        var Pv;
        const hv = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!Hv){Hv=!0;const vv=document.createElement("div");vv.setAttribute("aria-hidden","true"),vv.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(vv),new ResizeObserver((()=>{Lv++})).observe(vv)}return String(Lv)})()}`;
        (null === (Pv = this.gap) || void 0 === Pv ? void 0 : Pv.key) !== hv && (this.gap = {
          px: parseFloat(getComputedStyle(vv).paddingLeft) || 0,
          key: hv
        });
        const Sv = this.gap.px + 2,
          ev = Math.max(zv.left, Sv),
          gv = Math.max(zv.top, Sv),
          pv = Math.min(zv.left + zv.width, window.innerWidth - Sv),
          dv = Math.min(zv.top + zv.height, window.innerHeight - Sv);
        return pv <= ev || dv <= gv ? zv : {
          left: ev,
          top: gv,
          width: pv - ev,
          height: dv - gv
        }
      }
    }
    const yv = vv => {
      let {
        placer: zv,
        className: Pv
      } = vv;
      const hv = (0, Iv.useCallback)((vv => {
        zv.setElement(vv)
      }), [zv]);
      return (0, Av.jsx)("div", {
        ref: hv,
        className: Zv()("PadReticle", Pv),
        "aria-hidden": !0
      })
    };
    var Bv = Pv(8352);
    const Jv = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const Ev = new class {
      constructor() {
        this.state = Jv, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(vv) {
        if (zv = this.state, Pv = vv, (zv.visible || Pv.visible) && (zv.visible !== Pv.visible || zv.x !== Pv.x || zv.y !== Pv.y || zv.pressed !== Pv.pressed)) {
          var zv, Pv;
          this.state = vv;
          for (const zv of this.listeners) zv(vv)
        }
      }
      hide() {
        this.set(Jv)
      }
      subscribe(vv) {
        return this.listeners.add(vv), () => {
          this.listeners.delete(vv)
        }
      }
    };
    var ov = Pv(8366);
    const bv = (vv, zv) => {
        let {
          kind: Pv,
          holding: hv,
          hasPress: Sv,
          hasBack: ev,
          slotHasItem: gv
        } = zv;
        switch (vv) {
          case "primary":
            return "slot" === Pv ? "slotPrimary" : "recipe" === Pv || "button" === Pv ? Sv ? "pressPrimary" : "click" : "textField" === Pv ? "openKeyboard" : null;
          case "secondary":
            return "slot" === Pv ? "slotSecondary" : "button" !== Pv && "recipe" !== Pv || !Sv ? null : "pressSecondary";
          case "quickMove":
            return "slot" === Pv && gv ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === Pv && gv && !hv ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return hv ? "cancel" : ev ? "pressBack" : "close"
        }
      },
      rv = vv => {
        const zv = [];
        if (vv.hotbarPicking) return zv.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), zv.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), zv;
        if (vv.holding) "slot" === vv.kind ? (zv.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), zv.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === vv.kind && zv.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), zv.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), zv.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), vv.openButtonCloses && zv.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var Pv;
          "slot" === vv.kind && vv.slotHasItem ? (zv.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), zv.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), zv.push({
            actions: ["inventoryQuickMove"],
            labelKey: vv.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), zv.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), zv.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== vv.kind && "recipe" !== vv.kind || !vv.pressHints ? "button" === vv.kind || "recipe" === vv.kind ? zv.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === vv.kind && zv.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (vv.pressHints.primary && zv.push({
            actions: ["inventoryPrimary"],
            labelKey: vv.pressHints.primary
          }), vv.pressHints.secondary && zv.push({
            actions: ["inventorySecondary"],
            labelKey: vv.pressHints.secondary
          }));
          const hv = null === (Pv = vv.pressHints) || void 0 === Pv ? void 0 : Pv.back;
          hv && zv.push({
            actions: ["inventoryClose"],
            labelKey: hv
          });
          const Sv = [];
          vv.openButtonCloses && Sv.push("inventory"), hv || Sv.push("inventoryClose"), Sv.length > 0 && zv.push({
            actions: Sv,
            labelKey: "inventoryClose"
          })
        }
        return zv.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), vv.hasCategories ? zv.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : vv.hasList && zv.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), zv
      };
    var kv = Pv(8374),
      Xv = Pv(8368);
    class uv {
      constructor(vv) {
        this.probes = vv, this.byContainer = new Map, this.byParent = new Map
      }
      find(vv, zv) {
        const Pv = Dv(vv, "y", zv);
        if (!Pv) return null;
        let hv = this.byContainer.get(Pv);
        return hv || (this.probes.push({
          element: Pv,
          rect: hz(Pv.getBoundingClientRect())
        }), hv = {
          container: Pv,
          box: tv(Pv),
          group: Pz(Pv)
        }, this.byContainer.set(Pv, hv)), hv
      }
      findForParent(vv, zv) {
        let Pv = this.byParent.get(vv);
        return void 0 === Pv && (Pv = this.find(vv, zv), this.byParent.set(vv, Pv)), Pv
      }
    }
    const vz = new WeakMap;
    let zz = 0;
    const Pz = vv => {
        let zv = vz.get(vv);
        return zv || (zv = "el:" + zz++, vz.set(vv, zv)), zv
      },
      hz = vv => ({
        left: vv.left,
        top: vv.top,
        width: vv.width,
        height: vv.height
      }),
      Sz = vv => vv.width > 0 && vv.height > 0,
      ez = (vv, zv) => Sz(vv) && vv.left + vv.width > 0 && vv.top + vv.height > 0 && vv.left < zv.width && vv.top < zv.height,
      gz = (vv, zv, Pv) => {
        const hv = vv.top + vv.height / 2;
        return ez(vv, zv) && (!Pv || hv >= Pv.top && hv <= Pv.bottom)
      },
      pz = vv => ({
        x: vv.left + vv.width / 2,
        y: vv.top + vv.height / 2
      }),
      dz = (vv, zv, Pv) => vv < 0 ? Pv >= 0 ? 0 : zv - 1 : ((vv + Pv) % zv + zv) % zv,
      Nz = vv => "Left" === vv || "Right" === vv,
      lz = (vv, zv, Pv) => {
        const hv = Nz(Pv),
          Sv = hv ? vv.top : vv.left,
          ev = hv ? vv.height : vv.width,
          gv = hv ? zv.top : zv.left,
          pv = hv ? zv.height : zv.width,
          dv = Math.max(0, Math.max(gv - (Sv + ev), Sv - (gv + pv)));
        return ev > 1.5 * pv ? {
          gap: dv,
          offset: Math.max(0, gv - Sv) + .1 * Math.max(0, Sv - gv)
        } : {
          gap: dv,
          offset: Math.abs(gv + pv / 2 - (Sv + ev / 2))
        }
      },
      Tz = (vv, zv, Pv) => {
        const hv = ((vv, zv, Pv) => {
          const hv = pz(vv),
            Sv = pz(zv),
            ev = Nz(Pv) ? Math.min(vv.width, zv.width) / 4 : Math.min(vv.height, zv.height) / 4;
          switch (Pv) {
            case "Right":
              return Sv.x - hv.x >= ev ? Math.max(0, zv.left - (vv.left + vv.width)) : null;
            case "Left":
              return hv.x - Sv.x >= ev ? Math.max(0, vv.left - (zv.left + zv.width)) : null;
            case "Down":
              return Sv.y - hv.y >= ev ? Math.max(0, zv.top - (vv.top + vv.height)) : null;
            case "Up":
              return hv.y - Sv.y >= ev ? Math.max(0, vv.top - (zv.top + zv.height)) : null
          }
        })(vv, zv, Pv);
        if (null === hv) return null;
        const Sv = lz(vv, zv, Pv);
        return hv + 3 * Sv.gap + .5 * Sv.offset
      },
      Wz = (vv, zv) => zv.visible || null !== zv.scrollGroup && zv.scrollGroup === vv.scrollGroup,
      wz = (vv, zv, Pv, hv) => {
        let Sv = null,
          ev = 1 / 0;
        for (const gv of zv) {
          if (gv.key === vv.key || !Wz(vv, gv) || !hv(gv)) continue;
          const zv = Tz(vv.rect, gv.rect, Pv);
          null !== zv && zv < ev && (Sv = gv, ev = zv)
        }
        return Sv
      },
      az = (vv, zv, Pv) => {
        const hv = wz(vv, zv, Pv, (() => !0));
        if (!hv || Nz(Pv) || null === vv.scrollGroup || hv.scrollGroup === vv.scrollGroup) return hv;
        const Sv = wz(vv, zv, Pv, (zv => 0 === lz(vv.rect, zv.rect, Pv).gap));
        return null !== Sv && void 0 !== Sv ? Sv : hv
      },
      sz = (vv, zv, Pv) => {
        let hv = null,
          Sv = 1 / 0;
        for (const ev of zv) {
          if (!ev.visible || Pv && !Pv(ev)) continue;
          const zv = pz(ev.rect),
            gv = Math.hypot(zv.x - vv.x, zv.y - vv.y);
          gv < Sv && (hv = ev, Sv = gv)
        }
        return hv
      },
      Cz = vv => {
        const {
          rect: zv,
          clip: Pv
        } = vv;
        if (!Pv) return zv;
        const hv = Math.max(zv.left, Pv.left),
          Sv = Math.max(zv.top, Pv.top);
        return {
          left: hv,
          top: Sv,
          width: Math.min(zv.left + zv.width, Pv.left + Pv.width) - hv,
          height: Math.min(zv.top + zv.height, Pv.top + Pv.height) - Sv
        }
      },
      iz = (vv, zv) => zv.x >= vv.left && zv.x < vv.left + vv.width && zv.y >= vv.top && zv.y < vv.top + vv.height,
      cz = (vv, zv) => {
        let Pv = null,
          hv = 1 / 0;
        for (const Sv of zv) {
          const zv = Cz(Sv);
          (Sv.visible || Sv.clip) && iz(zv, vv) && (zv.width * zv.height < hv && (Pv = Sv, hv = zv.width * zv.height))
        }
        return Pv
      },
      Gz = vv => {
        let zv = null;
        for (const Pv of vv) {
          if (!Pv.visible) continue;
          if (!zv) {
            zv = Pv;
            continue
          }
          const vv = Math.min(zv.rect.height, Pv.rect.height) / 2,
            hv = Pv.rect.top - zv.rect.top;
          (hv < -vv || Math.abs(hv) <= vv && Pv.rect.left < zv.rect.left) && (zv = Pv)
        }
        return zv
      },
      mz = (vv, zv, Pv, hv, Sv) => {
        const ev = Sv % zv,
          gv = Math.floor(Sv / zv);
        return {
          left: vv.left + ev * Pv,
          top: vv.top + gv * hv,
          width: vv.width,
          height: vv.height
        }
      },
      jz = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      fz = ".LazyLoadedItemWrapper",
      Fz = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      Yz = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      nz = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      Oz = vv => vv.hasAttribute("data-inven-idx") ? "slot" : vv.hasAttribute("data-recipe-key") ? "recipe" : vv.hasAttribute("data-craft-ingredient") || (0, Xv.v)(vv) ? "info" : (0, Bv.E)(vv) ? "textField" : "button",
      Dz = (vv, zv) => "slot" === zv ? Number(vv.getAttribute("data-inven-idx")) : null,
      Kz = vv => vv.matches(fz) ? vv.querySelector(Fz) : vv,
      Vz = vv => {
        var zv, Pv;
        return {
          element: vv,
          recipe: null !== (zv = vv && (null === (Pv = Kz(vv)) || void 0 === Pv ? void 0 : Pv.getAttribute("data-recipe-key"))) && void 0 !== zv ? zv : null
        }
      },
      Uz = vv => {
        const zv = Kz(vv);
        if (!zv) return {
          kind: "pending",
          idx: null
        };
        const Pv = Oz(zv);
        return {
          kind: Pv,
          idx: Dz(zv, Pv)
        }
      },
      Rz = vv => {
        const zv = [];
        for (const [Pv, hv] of Yz) {
          vv.matches(hv) && zv.push([Pv, vv]);
          for (const Sv of vv.querySelectorAll(hv)) zv.push([Pv, Sv])
        }
        return zv
      },
      xz = (vv, zv) => {
        for (const [Pv, hv] of vv)
          if (hv.contains(zv)) return Pv;
        return "other"
      },
      tz = (vv, zv, Pv, hv, Sv, ev, gv, pv) => {
        var dv;
        const Nv = vv.children,
          lv = hz(Nv[0].getBoundingClientRect()),
          Tv = [{
            element: Nv[0],
            rect: lv
          }];
        if (ev.push(Tv[0]), 0 === lv.width || 0 === lv.height) return;
        let Wv = 1;
        for (; Wv < Nv.length && Math.abs(Nv[Wv].getBoundingClientRect().top - lv.top) < 1;) Wv++;
        const wv = vv => {
            const zv = {
              element: Nv[vv],
              rect: hz(Nv[vv].getBoundingClientRect())
            };
            return ev.push(zv), Tv.push(zv), zv.rect
          },
          av = Wv > 1 ? wv(1).left - lv.left : lv.width,
          sv = Nv.length > Wv ? wv(Wv).top - lv.top : lv.height,
          Cv = gv.find(vv, zv);
        let iv = null;
        if (Cv) {
          var cv;
          const {
            container: vv,
            box: zv
          } = Cv;
          iv = null !== (cv = pv.get(vv)) && void 0 !== cv ? cv : null, iv || (iv = {
            top: vv.scrollTop,
            left: vv.scrollLeft,
            box: zv,
            viewport: hv,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, pv.set(vv, iv)), iv.probes.push(...Tv)
        }
        const Gv = Sv.length;
        for (let Fv = 0; Fv < Nv.length; Fv++) {
          var mv, jv, fv;
          const vv = Nv[Fv],
            zv = mz(lv, Wv, av, sv, Fv),
            ev = vv.firstElementChild ? vv.querySelector(Fz) : null,
            gv = ev ? Oz(ev) : "pending";
          Sv.push({
            key: Pz(vv),
            rect: zv,
            panel: Pv,
            scrollGroup: null !== (mv = null === Cv || void 0 === Cv ? void 0 : Cv.group) && void 0 !== mv ? mv : null,
            visible: gz(zv, hv, null === Cv || void 0 === Cv ? void 0 : Cv.box),
            clip: null !== (jv = null === Cv || void 0 === Cv ? void 0 : Cv.box) && void 0 !== jv ? jv : null,
            element: vv,
            kind: gv,
            idx: ev ? Dz(ev, gv) : null,
            scrollContainer: null !== (fv = null === Cv || void 0 === Cv ? void 0 : Cv.container) && void 0 !== fv ? fv : null
          })
        }
        null === (dv = iv) || void 0 === dv || dv.targets.push(...Sv.slice(Gv))
      },
      qz = vv => vv instanceof Element && null !== vv.closest(fz),
      Iz = vv => null !== vv.scrollContainer && qz(vv.element);
    class Qz {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(vv, zv, Pv, hv) {
        this.latched = {
          source: vv,
          focusKey: zv,
          sinceMs: Pv,
          hold: {
            id: ++this.presses,
            holdMs: hv
          }
        }
      }
      update(vv, zv, Pv) {
        const hv = this.latched;
        return hv ? vv && zv === hv.focusKey ? Pv - hv.sinceMs < hv.hold.holdMs ? null : (this.latched = null, hv.source) : (this.latched = null, null) : null
      }
      getHold() {
        var vv, zv;
        return null !== (vv = null === (zv = this.latched) || void 0 === zv ? void 0 : zv.hold) && void 0 !== vv ? vv : null
      }
      reset() {
        this.latched = null
      }
    }
    var Zz = Pv(8380);
    const Az = {
        kind: "none"
      },
      Lz = vv => ({
        x: vv.clientX,
        y: vv.clientY
      }),
      Hz = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class Mz {
      constructor() {
        this.hovered = Az, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(vv, zv, Pv, hv, Sv) {
        const ev = null !== zv ? {
            kind: "slot",
            idx: zv
          } : Pv ? {
            kind: "element",
            element: Pv
          } : Az,
          gv = `${Sv}|${Math.round(hv.clientX)},${Math.round(hv.clientY)}`,
          pv = (dv = this.hovered, Nv = ev, "slot" === dv.kind && "slot" === Nv.kind ? dv.idx === Nv.idx : "element" === dv.kind && "element" === Nv.kind ? dv.element === Nv.element : dv.kind === Nv.kind);
        var dv, Nv;
        if (pv && gv === this.signature) return;
        const lv = !pv || Sv !== this.holding || "" === this.signature;
        this.signature = gv, this.holding = Sv, this.lastPoint = hv;
        const Tv = this.hovered;
        if (this.hovered = ev, "slot" === ev.kind) return this.leaveElement(Tv, null, hv), void(lv ? vv.hover(ev.idx, hv) : vv.moveTo(hv));
        if (pv) return void("element" === ev.kind ? (0, Bv.n)(ev.element, ev.element, Lz(hv)) : vv.hover(null, hv));
        vv.hover(null, hv);
        const Wv = "element" === ev.kind ? ev.element : null;
        "element" === Tv.kind ? (0, Bv.n)(Tv.element, Wv, Lz(hv)) : Wv && (0, Bv.n)(null, Wv, Lz(hv))
      }
      invalidate() {
        this.signature = ""
      }
      clear(vv) {
        const zv = this.hovered;
        this.hovered = Az, this.signature = "", "none" !== zv.kind && (this.leaveElement(zv, null, this.lastPoint), vv && "slot" === zv.kind && vv.hover(null, this.lastPoint))
      }
      leaveElement(vv, zv, Pv) {
        "element" === vv.kind && (0, Bv.n)(vv.element, zv, Lz(Pv))
      }
    }
    class yz {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(vv, zv) {
        Fv(vv) && (this.lastTiltedMs = zv)
      }
      allowsClick(vv) {
        return vv - this.lastTiltedMs > 150
      }
    }
    class Bz {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(vv) {
        return 0 !== (0, av.i)(vv, .2).y
      }
      step(vv, zv, Pv) {
        vv !== this.container && (this.container = vv, this.remainder = 0);
        const hv = Yv(zv, Pv).y;
        if (0 === hv) return this.remainder = 0, !1;
        const Sv = this.remainder + hv,
          ev = Math.trunc(Sv);
        if (this.remainder = Sv - ev, 0 === ev) return !1;
        const gv = vv.scrollTop;
        return vv.scrollTop = gv + ev, vv.scrollTop !== gv
      }
      current() {
        var vv;
        return null !== (vv = this.container) && void 0 !== vv && vv.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var Jz = Pv(8388);
    const Ez = "[data-pad-inventory-default]",
      oz = ".HotBarGameItemsContainer .InvenItem.Selected",
      bz = {
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
      rz = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      kz = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      Xz = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      uz = [...kz, ...Xz],
      vP = () => {
        return vv = (0, lv.f)("inventory"), !uz.map(lv.f).includes(vv) && !(0, av.B)(vv);
        var vv
      },
      zP = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      PP = (vv, zv) => {
        const Pv = !(null === zv || void 0 === zv || !zv.isHolding());
        return function(vv, zv) {
          const Pv = vv.find((vv => vv.visible && zv(vv)));
          if (Pv) return Pv;
          for (var hv = arguments.length, Sv = new Array(hv > 2 ? hv - 2 : 0), ev = 2; ev < hv; ev++) Sv[ev - 2] = arguments[ev];
          for (const gv of Sv) {
            const zv = Gz(vv.filter(gv));
            if (zv) return zv
          }
          return Gz(vv)
        }(vv, (vv => {
          const {
            element: zv
          } = vv;
          return zv.matches(Ez) || null !== zv.querySelector(Ez) || zv.matches(oz)
        }), (vv => "slot" === vv.kind ? Pv || null !== vv.idx && !(null === zv || void 0 === zv || !zv.hasItemAt(vv.idx)) : "recipe" === vv.kind || "pending" === vv.kind), (vv => "slot" === vv.kind || "button" === vv.kind))
      };
    class hP {
      constructor() {
        this.set = null, this.observer = new MutationObserver((vv => {
          vv.some((vv => !qz(vv.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = vv => {
          this.scrolled(vv.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const vv = [],
              zv = [];
            let Pv = !1;
            const hv = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              Sv = new Map,
              ev = new uv(zv);
            for (const Tv of document.querySelectorAll(jz)) {
              const lv = Rz(Tv);
              Pv ||= null !== Tv.querySelector(".CreativeCategoryTab");
              for (const Pv of Tv.querySelectorAll(`${fz}:first-child`)) {
                const gv = Pv.parentElement;
                tz(gv, Tv, xz(lv, gv), hv, vv, zv, ev, Sv)
              }
              for (const Pv of Tv.querySelectorAll(Fz)) {
                var gv, pv, dv, Nv;
                if (Pv.closest(fz) || Pv.closest("[data-pad-ignore]")) continue;
                const Wv = null === (gv = Pv.parentElement) || void 0 === gv ? void 0 : gv.closest(Fz);
                if (Wv && Tv.contains(Wv)) continue;
                const wv = Oz(Pv),
                  av = Dz(Pv, wv);
                if (-1 === av) continue;
                const sv = hz(Pv.getBoundingClientRect());
                zv.push({
                  element: Pv,
                  rect: sv
                });
                const Cv = ev.findForParent(Pv.parentElement, Tv),
                  iv = Cv && !Sv.has(Cv.container) ? Cv : null;
                (iv ? Sz(sv) : ez(sv, hv)) && vv.push({
                  key: Pz(Pv),
                  rect: sv,
                  panel: xz(lv, Pv),
                  scrollGroup: null !== (pv = null === iv || void 0 === iv ? void 0 : iv.group) && void 0 !== pv ? pv : null,
                  visible: gz(sv, hv, null === iv || void 0 === iv ? void 0 : iv.box),
                  clip: null !== (dv = null === iv || void 0 === iv ? void 0 : iv.box) && void 0 !== dv ? dv : null,
                  element: Pv,
                  kind: wv,
                  idx: av,
                  scrollContainer: null !== (Nv = null === iv || void 0 === iv ? void 0 : iv.container) && void 0 !== Nv ? Nv : null
                })
              }
            }
            for (const [Tv, Wv] of Sv) Wv.holdsOthers = zv.some((vv => vv.element !== Tv && Tv.contains(vv.element) && !vv.element.closest(fz)));
            const lv = new Map;
            for (const Tv of vv) lv.set(Tv.element, Tv);
            return {
              targets: vv,
              byElement: lv,
              hasCategories: Pv,
              probes: zv,
              scrollers: Sv
            }
          })(), this.observer.disconnect();
          for (const vv of document.querySelectorAll(jz)) this.observer.observe(vv, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(vv) {
        !this.set || vv instanceof Element && ((vv, zv) => {
          const Pv = vv.scrollers.get(zv);
          if (!Pv || Pv.holdsOthers || zv.scrollLeft !== Pv.left) return !1;
          const hv = zv.scrollTop - Pv.top;
          if (0 === hv) return !0;
          Pv.top = zv.scrollTop;
          for (const Sv of Pv.probes) Sv.rect.top -= hv;
          for (const Sv of Pv.targets) Sv.rect.top -= hv, Sv.visible = gz(Sv.rect, Pv.viewport, Pv.box);
          return !0
        })(this.set, vv) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((vv => {
          return zv = vv.rect, Pv = vv.element.getBoundingClientRect(), !(zv.left === Pv.left && zv.top === Pv.top && zv.width === Pv.width && zv.height === Pv.height);
          var zv, Pv
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const SP = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(av.x.map((vv => [vv, (0, sv.d)(av.z)]))), this.stickRepeat = new av.c((0, sv.d)(av.W)), this.pageUpTimer = (0, sv.d)(av.Q), this.pageDownTimer = (0, sv.d)(av.Q), this.stickGate = new jv, this.pointer = null, this.activePress = null, this.dropLatch = new Qz, this.scroller = new Bz, this.scrollStickClick = new yz, this.hover = new Mz, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new Mv, this.targets = new hP, this.hasCategories = !1, this.wasShowing = !1, this.state = Zz.e, this.isActive = () => (0, kv.h)(), this.isShowing = () => "inventory" === Tv.b.getActiveConsumerName() && (0, wv.k)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, kv.g)()), (0, kv.h)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var vv;
            this.reopenSlotIdx = null !== (vv = this.focused ? Uz(this.focused).idx : null) && void 0 !== vv ? vv : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, kv.v)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = vv => {
            (0, pv.unstable_batchedUpdates)((() => {
              this.frame(vv)
            }))
          }, this.shouldBlockRealPointer = vv => vv.isTrusted && !(0, iv.q)(vv) && this.isShowing(), this.noteRealPointer = vv => {
            vv instanceof MouseEvent && vv.isTrusted && !(0, iv.q)(vv) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = vv.clientX, this.lastRealPointer.y = vv.clientY)
          }, this.wakePressActs = vv => {
            var zv;
            return vv === (0, lv.f)("inventoryClose") ? !(null !== (zv = (0, kv.g)()) && void 0 !== zv && zv.isHolding()) : !(vv !== (0, lv.f)("inventory") || !vP()) || ((0, av.B)(vv) ? this.isNavButton(vv) : Xz.some((zv => (0, lv.f)(zv) === vv)))
          }
        }
        frame(vv) {
          var zv, Pv, hv, Sv, ev;
          const gv = (0, kv.g)();
          if (!(0, wv.k)()) return void(this.wasShowing && (this.endInteraction(gv), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), vv.wokeDevice && this.focusWakePointer(!(null === gv || void 0 === gv || !gv.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, Wv.g)().inventoryNavigation || this.pointer || this.engagePointer();
          const pv = performance.now();
          this.handleNavigation(vv, pv), this.handlePanels(vv), this.handlePaging(vv, pv), this.handleScroll(vv), this.handleButtons(vv, pv, gv), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const dv = this.ensureFocus(),
            Nv = this.focusContext(gv);
          this.ring.show(dv);
          const Tv = "slot" === Nv.kind ? Nv.idx : null,
            av = null !== (zv = null === (Pv = Nv.actionElement) || void 0 === Pv ? void 0 : Pv.querySelector(".DoCraftItem")) && void 0 !== zv ? zv : Nv.actionElement;
          this.pointer ? (this.hover.sync(gv, Tv, av, ((vv, zv) => {
            const Pv = zv ? Hz() : 0;
            return {
              clientX: vv.x - Pv,
              clientY: vv.y - Pv
            }
          })(this.pointer, Nv.holding), Nv.holding), Ev.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: vv.isHeld((0, lv.f)("inventoryPrimary"))
          })) : dv && this.focused && this.hover.sync(gv, Tv, av, ((vv, zv) => {
            if (!zv) return {
              clientX: vv.left + vv.width - 10,
              clientY: vv.top + vv.height / 2 - 10
            };
            const Pv = Hz();
            return {
              clientX: vv.left + vv.width / 2 - Pv,
              clientY: vv.top + vv.height / 2 - Pv
            }
          })(dv, Nv.holding), Nv.holding), this.publishState({
            showing: !0,
            kind: Nv.kind,
            holding: Nv.holding,
            slotHasItem: Nv.slotHasItem,
            pressHints: null !== (hv = null === (Sv = Nv.press) || void 0 === Sv ? void 0 : Sv.hints) && void 0 !== hv ? hv : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && Iz(this.focusTarget),
            openButtonCloses: vP(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === Nv.kind && !(null === (ev = Nv.actionElement) || void 0 === ev || !ev.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(vv) {
          var zv;
          const Pv = (0, wv.c)();
          if (!Pv) return;
          this.targets.revalidate();
          const hv = this.getTargets().targets;
          this.setFocus(null !== (zv = cz(Pv, hv)) && void 0 !== zv ? zv : vv ? sz(Pv, hv, (vv => {
            let {
              rect: zv
            } = vv;
            const hv = Math.max(zv.left - Pv.x, 0, Pv.x - (zv.left + zv.width)),
              Sv = Math.max(zv.top - Pv.y, 0, Pv.y - (zv.top + zv.height));
            return Math.hypot(hv, Sv) <= Math.min(zv.width, zv.height) / 2
          })) : null, !1), "cursor" === (0, Wv.g)().inventoryNavigation && (this.pointer = {
            x: Pv.x,
            y: Pv.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const vv = this.lastRealPointer;
          if (!vv || "keyboardMouse" !== dv.c.get("activeInputDevice")) return;
          const zv = document.elementFromPoint(vv.x, vv.y);
          zv && (0, Bv.n)(null, zv, vv)
        }
        endInteraction(vv) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const zv of this.dpadTimers.values()) zv.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(vv), this.ring.hide(), this.releasePointer(), this.publishState(Zz.e)
        }
        getTargets() {
          const vv = this.targets.get();
          return this.hasCategories = vv.hasCategories, vv
        }
        currentTarget() {
          var vv;
          return this.focused && null !== (vv = this.getTargets().byElement.get(this.focused)) && void 0 !== vv ? vv : null
        }
        readFocusRect() {
          const vv = this.focused;
          if (null === vv || void 0 === vv || !vv.isConnected || !vv.closest(jz)) return null;
          const zv = vv.getBoundingClientRect();
          return zv.width > 0 && zv.height > 0 ? {
            left: zv.left,
            top: zv.top,
            width: zv.width,
            height: zv.height
          } : null
        }
        ensureFocus() {
          const vv = this.readFocusRect();
          if (vv || this.pointer) return vv;
          const {
            targets: zv,
            byElement: Pv
          } = this.getTargets();
          let hv = null,
            Sv = !1;
          if (this.lastRect) hv = sz(pz(this.lastRect), zv);
          else {
            var ev, gv;
            const vv = ((vv, zv) => {
                const Pv = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return Pv ? PP(vv.filter((vv => Pv.contains(vv.element))), zv) : null
              })(zv, (0, kv.g)()),
              pv = zv.find((vv => null !== vv.idx && vv.idx === this.reopenSlotIdx)),
              dv = document.querySelector(oz);
            Sv = null !== vv || void 0 !== pv, hv = null !== (ev = null !== (gv = null !== vv && void 0 !== vv ? vv : pv) && void 0 !== gv ? gv : dv && Pv.get(dv)) && void 0 !== ev ? ev : Gz(zv)
          }
          return this.setFocus(hv, Sv), this.lastRect
        }
        setFocus(vv) {
          let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          vv && (this.focused = vv.element, this.focusTarget = vv, this.panelMemory.set(vv.panel, vv.element), zv && vv.scrollContainer && ((vv, zv) => {
            const Pv = vv.getBoundingClientRect(),
              hv = tv(zv),
              Sv = zv.scrollTop;
            return Pv.top < hv.top ? zv.scrollTop -= hv.top - Pv.top : Pv.bottom > hv.bottom && (zv.scrollTop += Pv.bottom - hv.bottom), zv.scrollTop !== Sv
          })(vv.element, vv.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, Wv.g)().inventoryNavigation) {
              if (this.lastRect) {
                const vv = pz(this.lastRect);
                this.pointer = {
                  x: vv.x,
                  y: vv.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const vv = this.lastRect ? pz(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: vv.x,
            y: vv.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, Ev.hide()
        }
        hoverAtPointer() {
          var vv;
          const zv = cz(this.pointer, this.getTargets().targets);
          this.focusTarget = zv, (null === zv || void 0 === zv ? void 0 : zv.element) !== this.focused && (this.focused = null !== (vv = null === zv || void 0 === zv ? void 0 : zv.element) && void 0 !== vv ? vv : null, zv && (this.panelMemory.set(zv.panel, zv.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(vv, zv) {
          const Pv = this.focusTarget,
            hv = Pv && (0, Wv.g)().cursorMagnetism ? pz(Cz(Pv)) : null;
          this.pointer = fv(this.pointer, {
            stick: vv.leftStick,
            moveDeadzone: (0, Wv.g)().moveDeadzone,
            dpad: zv,
            dtMs: vv.dtMs,
            cursorSpeedPercent: (0, Wv.g)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: hv
            }
          })
        }
        move(vv) {
          this.targets.revalidate();
          const zv = this.currentTarget();
          zv && this.setFocus(az(zv, this.getTargets().targets, vv))
        }
        step(vv) {
          const zv = this.pointer;
          if (zv && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((vv, zv, Pv) => {
            var hv;
            const Sv = {
              key: "",
              rect: {
                left: vv.x,
                top: vv.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (hv = az(Sv, zv, Pv)) && void 0 !== hv ? hv : sz(vv, zv)
          })(zv, this.getTargets().targets, vv));
          this.move(vv)
        }
        isNavButton(vv) {
          return !kz.some((zv => (0, lv.f)(zv) === vv)) && !(vv === (0, lv.f)("inventory") && vP())
        }
        handleNavigation(vv, zv) {
          const Pv = (0, Wv.g)().inventoryNavigation,
            hv = {
              x: 0,
              y: 0
            };
          let Sv = null;
          for (const dv of av.x) {
            const ev = this.isNavButton(dv) && vv.isHeld(dv);
            ev && (hv.x += bz[dv].x, hv.y += bz[dv].y), this.dpadTimers.get(dv).update(ev, zv) && "cursor" !== Pv && (Sv ??= dv)
          }
          const ev = this.stickGate.update(vv.leftStick, (0, Wv.g)().moveDeadzone);
          if (Sv && (this.step(Sv), this.stickGate.lock()), "slot" !== Pv) {
            const zv = ((vv, zv, Pv, hv) => "hybrid" !== vv ? "cursor" === vv : !hv && (zv || Pv))(Pv, null !== this.pointer, ev, null !== Sv);
            return zv && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(vv, "cursor" === Pv ? hv : {
              x: 0,
              y: 0
            }))
          }
          const gv = (0, av.i)(vv.leftStick, (0, Wv.g)().moveDeadzone),
            pv = this.stickRepeat.update(ev ? (0, av.Z)(gv) : null, zv);
          pv && this.move(pv)
        }
        applyCategoryPlace() {
          const vv = this.placeAfterCategory;
          if (!vv) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const zv = sz(pz(vv.rect), this.getTargets().targets, (zv => zv.scrollGroup === vv.scrollGroup));
          this.setFocus(zv, !1)
        }
        applyFocusRequest() {
          const vv = (0, kv.v)();
          vv && (this.targets.invalidate(), this.setFocus((0, kv.c)(this.getTargets().targets, vv)))
        }
        handlePanels(vv) {
          var zv, Pv, hv;
          const Sv = vv.wasPressed((0, lv.f)("inventoryPanelPrevious")),
            ev = vv.wasPressed((0, lv.f)("inventoryPanelNext"));
          if (!Sv && !ev) return;
          const {
            targets: gv
          } = this.getTargets(), pv = (dv = ((vv, zv) => {
            const Pv = [];
            for (const Sv of vv) Sv.visible && !Pv.includes(Sv.panel) && Pv.push(Sv.panel);
            const hv = vv => {
              const hv = zv.indexOf(vv);
              return -1 === hv ? zv.length + Pv.indexOf(vv) : hv
            };
            return Pv.sort(((vv, zv) => hv(vv) - hv(zv)))
          })(gv, nz), Nv = null !== (zv = null === (Pv = this.focusTarget) || void 0 === Pv ? void 0 : Pv.panel) && void 0 !== zv ? zv : null, Tv = ev ? 1 : -1, 0 === dv.length ? null : dv[dz(null === Nv ? -1 : dv.indexOf(Nv), dv.length, Tv)]);
          var dv, Nv, Tv;
          if (null === pv) return;
          const Wv = this.panelMemory.get(pv),
            wv = gv.filter((vv => vv.panel === pv)),
            av = null !== (hv = wv.find((vv => vv.element === Wv && vv.visible))) && void 0 !== hv ? hv : PP(wv, (0, kv.g)());
          this.setFocus(av)
        }
        handlePaging(vv, zv) {
          const Pv = (0, lv.f)("menuPageUp"),
            hv = (0, lv.f)("menuPageDown"),
            Sv = this.pageUpTimer.update(vv.isHeld(Pv), zv),
            ev = this.pageDownTimer.update(vv.isHeld(hv), zv);
          if (!Sv && !ev) return;
          const gv = ev ? 1 : -1;
          if (!vv.wasPressed(ev ? hv : Pv) && this.hasCategories) return;
          if ((vv => {
              const zv = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === zv.length) return !1;
              const Pv = zv.findIndex((vv => vv.classList.contains("Selected"))),
                hv = zv[dz(Pv, zv.length, vv)];
              return (0, Bv.m)(hv, (0, Bv.r)(hv)), !0
            })(gv)) {
            var pv, dv;
            this.targets.invalidate();
            const vv = null !== (pv = null === (dv = this.focusTarget) || void 0 === dv ? void 0 : dv.scrollGroup) && void 0 !== pv ? pv : null,
              zv = this.readFocusRect();
            return void(this.placeAfterCategory = null !== vv && zv && !this.pointer ? {
              rect: zv,
              scrollGroup: vv
            } : null)
          }
          const {
            targets: Nv
          } = this.getTargets(), Tv = this.currentTarget(), Wv = Tv && Iz(Tv) ? Tv : Nv.find((vv => Iz(vv) && vv.visible));
          if (!Wv) return;
          const wv = ((vv, zv, Pv, hv) => {
            if (null === vv.scrollGroup) return null;
            const Sv = pz(vv.rect),
              ev = Sv.x,
              gv = Sv.y + ("Down" === Pv ? hv : -hv);
            let pv = null,
              dv = 1 / 0;
            for (const Nv of zv) {
              if (Nv.scrollGroup !== vv.scrollGroup || Nv.key === vv.key) continue;
              const zv = pz(Nv.rect);
              if ("Down" === Pv ? zv.y <= Sv.y : zv.y >= Sv.y) continue;
              const hv = Math.hypot(zv.x - ev, zv.y - gv);
              hv < dv && (pv = Nv, dv = hv)
            }
            return pv
          })(Wv, Nv, gv > 0 ? "Down" : "Up", Wv.scrollContainer.clientHeight);
          this.setFocus(null !== wv && void 0 !== wv ? wv : Wv)
        }
        handleScroll(vv) {
          var zv, Pv, hv, Sv, ev, gv;
          if (!this.scroller.isScrolling(vv.rightStick)) return void this.scroller.reset();
          const {
            targets: pv
          } = this.getTargets(), dv = this.pointer, Nv = !dv && this.focusTarget && Iz(this.focusTarget) ? this.focusTarget.scrollContainer : null, lv = dv && (null === (zv = pv.find((vv => vv.clip && iz(vv.clip, dv)))) || void 0 === zv ? void 0 : zv.scrollContainer), Tv = null !== (Pv = null !== (hv = null !== (Sv = this.scroller.current()) && void 0 !== Sv ? Sv : lv) && void 0 !== hv ? hv : Nv) && void 0 !== Pv ? Pv : null === (ev = pv.find(Iz)) || void 0 === ev ? void 0 : ev.scrollContainer;
          if (!Tv || !this.scroller.step(Tv, vv.rightStick, vv.dtMs)) return;
          this.targets.scrolled(Tv);
          const Wv = dv || (null === (gv = this.focusTarget) || void 0 === gv ? void 0 : gv.scrollContainer) !== Tv ? null : this.readFocusRect();
          if (!Wv) return;
          const wv = tv(Tv),
            av = pz(Wv);
          if (av.y < wv.top || av.y > wv.bottom) {
            const vv = this.focusTarget.scrollGroup,
              zv = sz(av, this.getTargets().targets, (zv => zv.scrollGroup === vv));
            this.setFocus(zv, !1)
          }
        }
        focusContext(vv) {
          const {
            kind: zv,
            idx: Pv
          } = this.focused ? Uz(this.focused) : {
            kind: null,
            idx: null
          }, hv = this.focused ? Kz(this.focused) : null, Sv = hv ? (0, Jz.b)(hv) : null;
          return {
            kind: zv,
            idx: Pv,
            actionElement: hv,
            press: Sv,
            hasPress: null !== Sv,
            hasBack: !(null === Sv || void 0 === Sv || !Sv.back),
            holding: vv.isHolding(),
            slotHasItem: null !== Pv && vv.hasItemAt(Pv)
          }
        }
        handleButtons(vv, zv, Pv) {
          var hv, Sv;
          if (!this.activePress || vv.isHeld(this.activePress.button) && (hv = this.activePress.target, Sv = this.focused, null !== hv.recipe ? Vz(Sv).recipe === hv.recipe : Sv === hv.element) || this.releasePress(), this.scrollStickClick.update(vv.rightStick, zv), !this.handleHotbarPick(vv, Pv)) {
            for (const [hv, Sv] of rz) {
              const ev = (0, lv.f)(Sv);
              if (!vv.wasPressed(ev) || "openButton" === hv && !vP()) continue;
              if ("RS" === ev && !this.scrollStickClick.allowsClick(zv)) continue;
              const gv = this.focusContext(Pv),
                pv = bv(hv, gv);
              pv && this.runIntent(pv, gv, ev, Pv)
            }
            this.handleDrop(vv, zv, Pv)
          }
        }
        handleHotbarPick(vv, zv) {
          const Pv = this.hotbarPick;
          if (!Pv) return !1;
          const hv = vv.wasPressed((0, lv.f)("inventoryPrimary")) || vv.wasPressed((0, lv.f)("inventoryHotbarSwap"));
          if (!hv && !vv.wasPressed((0, lv.f)("inventoryClose")) && !zv.isHolding()) return !(vv.wasPressed((0, lv.f)("inventory")) && vP());
          const Sv = this.focusTarget;
          hv && "hotbar" === (null === Sv || void 0 === Sv ? void 0 : Sv.panel) && null !== Sv.idx && Sv.idx !== Pv.idx && (zv.swapWithHotbar(Sv.idx, Pv.idx), this.afterAction()), this.hotbarPick = null;
          const ev = Pv.element.isConnected ? this.getTargets().byElement.get(Pv.element) : void 0;
          return ev && this.setFocus(ev), !0
        }
        startHotbarPick(vv) {
          var zv;
          const {
            targets: Pv,
            byElement: hv
          } = this.getTargets(), Sv = document.querySelector(oz), ev = null !== (zv = Sv && hv.get(Sv)) && void 0 !== zv ? zv : Pv.find((vv => "hotbar" === vv.panel));
          ev && this.focused && (this.hotbarPick = {
            idx: vv,
            element: this.focused
          }, this.setFocus(ev))
        }
        focusKey() {
          return this.focused ? Pz(this.focused) : null
        }
        handleDrop(vv, zv, Pv) {
          const hv = (0, lv.f)("inventoryDrop");
          if (vv.wasPressed(hv)) {
            const vv = (Sv = this.focusContext(Pv)).holding ? {
              kind: "Vp"
            } : "slot" === Sv.kind && Sv.slotHasItem && null !== Sv.idx ? {
              kind: "slot",
              idx: Sv.idx
            } : null;
            return void(vv && (this.dropFrom(vv, !1, Pv), this.dropLatch.press(vv, this.focusKey(), zv, Cv.b[(0, Wv.g)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var Sv;
          const ev = this.dropLatch.update(vv.isHeld(hv), this.focusKey(), zv);
          ev && ((vv, zv, Pv) => "Vp" === vv.kind ? zv : !zv && Pv(vv.idx))(ev, Pv.isHolding(), Pv.hasItemAt) && (this.dropFrom(ev, !0, Pv), this.afterAction())
        }
        dropFrom(vv, zv, Pv) {
          "Vp" === vv.kind ? Pv.dropHeld(zv, this.slotPoint()) : Pv.dropSlot(vv.idx, zv)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (vv => {
            const zv = pz(vv);
            return {
              clientX: zv.x,
              clientY: zv.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(vv, zv, Pv, hv) {
          const Sv = zv.idx,
            ev = zv.actionElement;
          switch (ev && zP.has(vv) && (0, iv.t)(ev), vv) {
            case "slotPrimary":
              hv.primary(Sv, this.slotPoint());
              break;
            case "slotSecondary":
              hv.secondary(Sv, this.slotPoint());
              break;
            case "slotQuickMove":
              hv.quickMove(Sv, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(Sv);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(zv.press, "pressPrimary" === vv ? "primary" : "secondary", Pv);
              break;
            case "click":
              (0, Bv.m)(ev, (0, Bv.r)(ev));
              break;
            case "openKeyboard":
              (0, Bv.E)(ev) && (0, Bv.B)(ev);
              break;
            case "pressBack":
              zv.press.back();
              break;
            case "cancel":
              hv.cancel();
              break;
            case "close":
              return this.releasePress(), void hv.close()
          }
          this.afterAction()
        }
        startPress(vv, zv, Pv) {
          this.releasePress(), vv.press(zv) && (this.activePress = {
            handlers: vv,
            button: Pv,
            target: Vz(this.focused)
          })
        }
        releasePress() {
          var vv, zv, Pv;
          null === (vv = this.activePress) || void 0 === vv || null === (zv = (Pv = vv.handlers).release) || void 0 === zv || zv.call(Pv), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(vv) {
          ((vv, zv) => {
            var Pv, hv, Sv, ev, gv, pv;
            return vv.showing === zv.showing && vv.kind === zv.kind && vv.holding === zv.holding && vv.slotHasItem === zv.slotHasItem && (null === (Pv = vv.pressHints) || void 0 === Pv ? void 0 : Pv.primary) === (null === (hv = zv.pressHints) || void 0 === hv ? void 0 : hv.primary) && (null === (Sv = vv.pressHints) || void 0 === Sv ? void 0 : Sv.secondary) === (null === (ev = zv.pressHints) || void 0 === ev ? void 0 : ev.secondary) && (null === (gv = vv.pressHints) || void 0 === gv ? void 0 : gv.back) === (null === (pv = zv.pressHints) || void 0 === pv ? void 0 : pv.back) && vv.hasCategories === zv.hasCategories && vv.hasList === zv.hasList && vv.openButtonCloses === zv.openButtonCloses && vv.steppingSlots === zv.steppingSlots && vv.hotbarPicking === zv.hotbarPicking && vv.quickMoveToHotbar === zv.quickMoveToHotbar && vv.dropStackHold === zv.dropStackHold
          })(vv, this.state) || (this.state = vv, Nv.j.zC(Zz.h, vv))
        }
      },
      eP = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var gP = Pv(8393),
      pP = Pv(302),
      dP = Pv(1610),
      NP = Pv(7864);
    const lP = "[data-pad-secondary]",
      TP = vv => vv instanceof HTMLElement && (0, Xv.o)(vv) && !(0, Xv.v)(vv),
      WP = vv => {
        const zv = vv.querySelector(lP);
        if (zv && TP(zv)) return zv;
        for (const Sv of null !== (Pv = null === (hv = vv.parentElement) || void 0 === hv ? void 0 : hv.children) && void 0 !== Pv ? Pv : []) {
          var Pv, hv;
          if (Sv !== vv && Sv.matches(lP) && TP(Sv)) return Sv
        }
        return null
      },
      wP = (vv, zv, Pv, hv) => Math.max(0, Math.max(vv, Pv) - Math.min(zv, hv)),
      aP = (vv, zv, Pv, hv) => Math.max(0, Math.min(zv, hv) - Math.max(vv, Pv)),
      sP = (vv, zv, Pv) => {
        const hv = (vv.left + vv.right) / 2,
          Sv = (vv.top + vv.bottom) / 2,
          ev = (zv.left + zv.right) / 2,
          gv = (zv.top + zv.bottom) / 2;
        if ("Left" === Pv || "Right" === Pv) {
          const pv = "Right" === Pv ? 1 : -1;
          return {
            forwardGap: "Right" === Pv ? zv.left - vv.right : vv.left - zv.right,
            centreForward: (ev - hv) * pv,
            sidewaysGap: wP(vv.top, vv.bottom, zv.top, zv.bottom),
            sidewaysOverlap: aP(vv.top, vv.bottom, zv.top, zv.bottom),
            centreSideways: Math.abs(gv - Sv),
            startSideways: Math.abs(zv.top - vv.top),
            fromSidewaysSize: vv.bottom - vv.top,
            toSidewaysSize: zv.bottom - zv.top,
            toLength: zv.right - zv.left
          }
        }
        const pv = "Down" === Pv ? 1 : -1;
        return {
          forwardGap: "Down" === Pv ? zv.top - vv.bottom : vv.top - zv.bottom,
          centreForward: (gv - Sv) * pv,
          sidewaysGap: wP(vv.left, vv.right, zv.left, zv.right),
          sidewaysOverlap: aP(vv.left, vv.right, zv.left, zv.right),
          centreSideways: Math.abs(ev - hv),
          startSideways: Math.abs(zv.left - vv.left),
          fromSidewaysSize: vv.right - vv.left,
          toSidewaysSize: zv.right - zv.left,
          toLength: zv.bottom - zv.top
        }
      },
      CP = vv => vv.centreForward > .5 && vv.forwardGap >= -vv.toLength / 2,
      iP = vv => {
        const zv = vv.sidewaysOverlap > 0 ? 0 : 2 * vv.fromSidewaysSize,
          Pv = vv.fromSidewaysSize > 1.5 * vv.toSidewaysSize ? vv.startSideways : vv.centreSideways;
        return Math.max(0, vv.forwardGap) + 3 * vv.sidewaysGap + zv + .1 * Pv
      },
      cP = (vv, zv) => aP(vv.top, vv.bottom, zv.top, zv.bottom) > 0 || zv.bottom - zv.top > zv.right - zv.left,
      GP = (vv, zv, Pv, hv, Sv, ev) => {
        const gv = Sv ? jP(vv, zv, Pv, Sv) : new Set,
          pv = FP(vv, zv, Pv, gv);
        return pv < 0 && gv.size > 0 && ev ? mP(vv, zv, Pv, ev) : hv && pv >= 0 ? fP(vv, zv, Pv, hv, pv, gv) : pv
      },
      mP = (vv, zv, Pv, hv) => {
        const Sv = new Set,
          ev = FP(vv, zv, "Up", Sv) >= 0,
          gv = FP(vv, zv, "Down", Sv) >= 0,
          pv = new Set;
        return zv.forEach(((zv, Pv) => {
          const Sv = zv.top + zv.bottom < vv.top + vv.bottom;
          hv[Pv] && !(Sv ? ev : gv) || pv.add(Pv)
        })), FP(vv, zv, Pv, pv)
      },
      jP = (vv, zv, Pv, hv) => {
        const Sv = new Set;
        return "Left" !== Pv && "Right" !== Pv || zv.forEach(((zv, Pv) => {
          hv[Pv] && aP(vv.top, vv.bottom, zv.top, zv.bottom) <= 0 && Sv.add(Pv)
        })), Sv
      },
      fP = (vv, zv, Pv, hv, Sv, ev) => {
        const gv = sP(vv, zv[Sv], Pv).forwardGap;
        let pv = Sv,
          dv = hv[Sv],
          Nv = 1 / 0;
        return zv.forEach(((zv, lv) => {
          const Tv = hv[lv];
          if (ev.has(lv) || Tv < dv || Tv === dv && pv === Sv) return;
          const Wv = sP(vv, zv, Pv);
          if (!CP(Wv) || Wv.forwardGap < 0 || Wv.forwardGap >= gv) return;
          const wv = iP(Wv);
          (Tv > dv || wv < Nv) && (pv = lv, dv = Tv, Nv = wv)
        })), pv
      },
      FP = (vv, zv, Pv, hv) => {
        let Sv = -1,
          ev = 1 / 0;
        if (zv.forEach(((zv, gv) => {
            const pv = ((vv, zv, Pv) => {
              const hv = sP(vv, zv, Pv);
              if (!CP(hv)) return null;
              const Sv = Math.max(0, hv.forwardGap);
              return hv.sidewaysOverlap <= 0 && hv.sidewaysGap > 2 * (Sv + 1) ? null : iP(hv)
            })(vv, zv, Pv);
            null !== pv && pv < ev && !hv.has(gv) && (ev = pv, Sv = gv)
          })), Sv < 0) return -1;
        const gv = zv[Sv],
          pv = sP(vv, gv, Pv).forwardGap;
        let dv = pv,
          Nv = Sv;
        return zv.forEach(((zv, ev) => {
          if (ev === Sv || hv.has(ev) || !((vv, zv, Pv) => {
              const hv = "Left" === Pv || "Right" === Pv,
                Sv = hv ? aP(vv.top, vv.bottom, zv.top, zv.bottom) : aP(vv.left, vv.right, zv.left, zv.right),
                ev = hv ? Math.min(vv.bottom - vv.top, zv.bottom - zv.top) : Math.min(vv.right - vv.left, zv.right - zv.left);
              return Sv > 0 && Sv >= ev / 2
            })(zv, gv, Pv)) return;
          const lv = sP(vv, zv, Pv);
          CP(lv) && lv.forwardGap + lv.toLength <= pv + 1 && lv.forwardGap < dv && (dv = lv.forwardGap, Nv = ev)
        })), Nv
      },
      YP = (vv, zv) => {
        let Pv = -1,
          hv = 1 / 0;
        return zv.forEach(((zv, Sv) => {
          const ev = Math.max(zv.left - vv.x, 0, vv.x - zv.right),
            gv = Math.max(zv.top - vv.y, 0, vv.y - zv.bottom),
            pv = Math.hypot(ev, gv);
          pv < hv && (hv = pv, Pv = Sv)
        })), Pv
      },
      nP = (vv, zv) => {
        const Pv = Math.min(vv.bottom - vv.top, zv.bottom - zv.top) / 2;
        return Math.abs(vv.top - zv.top) > Pv ? vv.top - zv.top : vv.left - zv.left
      },
      OP = vv => {
        let zv = -1;
        for (let Pv = 0; Pv < vv.length; Pv++)(zv < 0 || nP(vv[Pv], vv[zv]) < 0) && (zv = Pv);
        return zv
      };
    var DP = Pv(1652),
      KP = Pv(8396),
      VP = Pv(8405);
    const UP = vv => {
        if ("death" !== vv || "inGame" !== dv.c.get("gameState") || "off" === (0, Wv.g)().quickChat || null === (0, DP.e)()) return !1;
        const zv = (0, lv.f)("chat");
        return zv !== (0, lv.f)("menuConfirm") && zv !== (0, lv.f)("menuBack")
      },
      RP = new KP.e;
    var xP = Pv(4074),
      tP = Pv(8413);
    const qP = vv => {
        let zv = null;
        for (const Pv of vv.querySelectorAll("[data-pad-tabs]"))(0, Xv.o)(Pv) && (!zv || Number(Pv.dataset.padTabs) < Number(zv.dataset.padTabs)) && (zv = Pv);
        return zv
      },
      IP = (vv, zv, Pv, hv) => {
        vv.focusWhenFound((() => {
          const Sv = vv.pickInitial(zv);
          if (Sv && !Pv.has(Sv) && (null === hv || void 0 === hv || !hv.contains(Sv))) return Sv;
          const ev = ((vv, zv) => {
              const Pv = zv => vv.getEnabledCandidates(zv).filter((vv => !vv.closest("[data-pad-tabs]")));
              for (const hv of (0, Xv.h)(zv)) {
                const vv = Pv(hv);
                if (vv.length > 0) return vv
              }
              return Pv(zv)
            })(vv, zv).filter((vv => !Pv.has(vv))),
            gv = OP(ev.map((vv => vv.getBoundingClientRect())));
          return gv >= 0 ? ev[gv] : null
        }), 3e3)
      },
      QP = (vv, zv, Pv, hv) => {
        var Sv;
        const ev = ((vv, zv) => {
          if (0 === vv.length) return null;
          const Pv = vv.findIndex((vv => "true" === vv.dataset.padSelected));
          return Pv < 0 ? zv > 0 ? vv[0] : vv[vv.length - 1] : vv[(Pv + zv + vv.length) % vv.length]
        })([...Pv.querySelectorAll("[data-pad-tab]")].filter((vv => (0, Xv.o)(vv) && !(0, Xv.v)(vv))), hv);
        if (!ev) return;
        const gv = null !== (Sv = null === vv || void 0 === vv ? void 0 : vv.getFocused()) && void 0 !== Sv ? Sv : null,
          pv = !(null === gv || void 0 === gv || !gv.isConnected) && Pv.contains(gv),
          dv = vv && !pv ? new Set(vv.getEnabledCandidates(zv)) : null;
        (0, Bv.d)(ev), vv && (dv ? IP(vv, zv, dv, Pv) : vv.setFocus(ev, {
          byUser: !0
        }))
      },
      ZP = vv => {
        var zv;
        const Pv = tv(null !== (zv = Dv(vv, "x")) && void 0 !== zv ? zv : vv),
          hv = (0, Xv.f)(vv).filter((vv => !(0, Xv.v)(vv))),
          Sv = hv.filter((vv => qv(vv.getBoundingClientRect(), Pv)));
        return (Sv.length > 0 ? Sv : hv).sort(((vv, zv) => nP(vv.getBoundingClientRect(), zv.getBoundingClientRect())))
      },
      AP = (vv, zv, Pv) => {
        const hv = [...zv.querySelectorAll("[data-pad-row]")].filter(Xv.o),
          Sv = vv.getFocused(),
          ev = Sv ? hv.findIndex((vv => vv.contains(Sv))) : -1;
        let gv = 0,
          pv = Pv > 0 ? 0 : hv.length - 1;
        if (ev >= 0 && Sv) gv = Math.max(0, ZP(hv[ev]).indexOf(Sv)), pv = ev + Pv;
        else if (Sv) {
          const vv = Sv.getBoundingClientRect(),
            zv = hv.map((zv => {
              const hv = zv.getBoundingClientRect();
              return Pv > 0 ? hv.top >= vv.top : hv.bottom <= vv.bottom
            }));
          pv = Pv > 0 ? zv.indexOf(!0) : zv.lastIndexOf(!0)
        }
        for (let dv = pv; dv >= 0 && dv < hv.length; dv += Pv) {
          const zv = ZP(hv[dv]);
          if (zv.length > 0) return void vv.setFocus(zv[Math.min(gv, zv.length - 1)], {
            byUser: !0
          })
        }
      },
      LP = (vv, zv, Pv) => {
        var hv, Sv;
        const ev = null !== (hv = null === vv || void 0 === vv ? void 0 : vv.getFocused()) && void 0 !== hv ? hv : null,
          gv = null !== ev && void 0 !== ev && ev.closest("[data-pad-row]") ? "x" : "y",
          pv = null !== (Sv = ev ? Dv(ev, gv, zv) : null) && void 0 !== Sv ? Sv : Vv(zv, gv);
        if (!pv) return;
        const dv = ev ? (0, Bv.r)(ev) : null;
        if (xv(pv, gv, Pv * ("y" === gv ? pv.clientHeight : pv.clientWidth) * .85), !vv || !dv) return;
        const Nv = tv(pv),
          lv = vv.getEnabledCandidates(zv).filter((vv => pv.contains(vv) && qv(vv.getBoundingClientRect(), Nv))),
          Tv = YP(dv, lv.map((vv => vv.getBoundingClientRect())));
        Tv >= 0 && vv.setFocus(lv[Tv], {
          scroll: !1,
          byUser: !0
        })
      };
    let HP = null;
    const MP = (vv, zv) => {
        var Pv, hv;
        const Sv = zv.querySelector("[data-pad-friends-column]"),
          ev = vv.getFocused();
        if (!Sv || !ev || !Sv.contains(ev)) return !1;
        const gv = vv.getEnabledCandidates(zv).filter((vv => !Sv.contains(vv))),
          pv = YP((0, Bv.r)(ev), gv.map((vv => vv.getBoundingClientRect()))),
          dv = null === (Pv = HP) || void 0 === Pv ? void 0 : Pv.deref();
        return vv.setFocus(null !== dv && void 0 !== dv && dv.isConnected ? dv : null !== (hv = gv[pv]) && void 0 !== hv ? hv : null, {
          byUser: !0
        }), !0
      },
      yP = vv => {
        const zv = (0, lv.f)(vv);
        return (0, av.B)(zv) || NP.p.some((vv => (0, lv.f)(vv) === zv)) ? null : zv
      },
      BP = (vv, zv) => {
        const Pv = yP(zv);
        return null !== Pv && vv.wasPressed(Pv)
      },
      JP = function(vv, zv, Pv) {
        let hv = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Sv = (vv => {
            var zv, Pv;
            return null !== (zv = null === (Pv = qP(vv)) || void 0 === Pv ? void 0 : Pv.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== zv ? zv : null
          })(zv),
          ev = vv && Sv ? new Set(vv.getEnabledCandidates(zv)) : null;
        (0, gP.e)(), Pv === pP.o.SETTINGS && (0, dP.k)(dv.c.get("openEverythingMenuName")) ? dv.c.set({
          openEverythingMenuName: Pv
        }) : (0, dP.u)(new Event("padMenuShortcut"), Pv, hv), vv && ev && Sv && IP(vv, zv, ev, Sv.closest("[data-pad-tabs]"))
      },
      EP = vv => null !== vv.closest(".Dropdown-root") || null !== vv.querySelector(".Dropdown-root.is-open"),
      oP = vv => null !== (0, tP.b)() && "popup" !== vv.layer.kind && !qP(vv.root) && !EP(vv.root),
      bP = (0, sv.d)(av.Q),
      rP = (0, sv.d)(av.Q),
      kP = (vv, zv, Pv) => {
        if (((vv, zv) => {
            const Pv = (0, lv.f)("chat");
            return UP(zv) && vv.isHeld(Pv) ? "hold" === RP.update(vv.wasPressed(Pv), vv.isHeld(Pv), performance.now(), Cv.b[(0, Wv.g)().tapHoldTime].wheelMs) && (Tv.b.consumeButton(Pv), Nv.j.zC(VP.h), !0) : (RP.release(), !1)
          })(zv, Pv.layer.kind)) return !0;
        const hv = Pv.root;
        for (const [gv, pv] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (zv.wasPressed((0, lv.f)(gv))) {
            const zv = EP(hv) ? null : qP(hv);
            if (zv) QP(vv, hv, zv, pv);
            else if (oP(Pv)) {
              var Sv;
              const zv = vv ? new Set(vv.getEnabledCandidates(hv)) : null;
              null !== (Sv = (0, tP.b)()) && void 0 !== Sv && Sv(pv) && vv && zv && IP(vv, hv, zv, null)
            } else vv && AP(vv, hv, pv);
            return !0
          } for (const [gv, pv, dv] of [
            ["menuPageUp", -1, bP],
            ["menuPageDown", 1, rP]
          ]) {
          const Pv = (0, lv.f)(gv);
          if (zv.wasPressed(Pv) && dv.reset(), dv.update(zv.isHeld(Pv), performance.now())) return LP(vv, hv, pv), !0
        }
        const ev = "popup" === Pv.layer.kind;
        return BP(zv, "pause") ? (ev || (0, dP.p)() && "menu" !== Pv.layer.kind || JP(vv, hv, (0, dP.p)() ? pP.o.SETTINGS : (0, xP.b)()), !0) : !!BP(zv, "leaderboard") && ("home" === Pv.layer.kind ? (vv => {
          const zv = [...vv.querySelectorAll("[data-pad-notifications]")].find(Xv.o);
          zv && (0, Bv.d)(zv)
        })(hv) : ev || JP(vv, hv, pP.o.LOBBY_LEADERBOARD, "inGame" === dv.c.get("gameState")), !0)
      },
      XP = (vv, zv, Pv) => {
        if (kP(vv, zv, Pv)) return !0;
        const hv = "home" === Pv.layer.kind;
        if (zv.wasPressed((0, lv.f)("menuSecondary"))) {
          const zv = vv.getFocused(),
            Sv = zv ? WP(zv) : null;
          if (Sv) return (0, Bv.d)(Sv), !0;
          if (hv) {
            const zv = Pv.root.querySelector("[data-pad-search] input");
            return zv && (0, Xv.r)(zv, Pv.root) ? (vv.setFocus(zv, {
              byUser: !0
            }), (0, Bv.d)(zv)) : dv.c.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!hv || !BP(zv, "inventory")) && (((vv, zv) => {
          var Pv, hv;
          const Sv = zv.querySelector("[data-pad-friends-column]");
          if (!Sv || !(0, Xv.o)(Sv)) return void(0, dP.u)(new Event("padMenuShortcut"), pP.o.SOCIAL);
          if (MP(vv, zv)) return;
          const ev = null !== (Pv = null === (hv = Sv.querySelector("[data-pad-friends-start]")) || void 0 === hv ? void 0 : hv.getBoundingClientRect().top) && void 0 !== Pv ? Pv : -1 / 0,
            gv = vv.getEnabledCandidates(Sv),
            pv = gv.filter((vv => vv.getBoundingClientRect().top >= ev)),
            dv = pv.length > 0 ? pv : gv,
            Nv = OP(dv.map((vv => vv.getBoundingClientRect())));
          vv.setFocus(Nv >= 0 ? dv[Nv] : null, {
            byUser: !0
          })
        })(vv, Pv.root), !0)
      },
      uP = vv => {
        var zv, Pv, hv;
        const Sv = (0, Bv.v)(vv);
        if (null !== Sv) return Sv;
        const ev = (null !== (zv = null !== (Pv = null !== (hv = vv.getAttribute("aria-label")) && void 0 !== hv ? hv : vv.getAttribute("title")) && void 0 !== Pv ? Pv : vv.textContent) && void 0 !== zv ? zv : "").replace(/\s+/g, " ").trim();
        return ev ? `${vv.tagName}:${ev.slice(0,100)}` : null
      };
    class vh {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(vv) {
        const zv = this.history.indexOf(vv);
        if (zv >= 0) {
          for (const vv of this.history.splice(zv + 1)) this.remembered.delete(vv);
          return !0
        }
        return this.remembered.delete(vv), this.history.push(vv), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(vv) {
        this.remembered.delete(vv);
        const zv = this.history.indexOf(vv);
        zv >= 0 && this.history.splice(zv, 1)
      }
      remember(vv, zv, Pv, hv) {
        const Sv = uP(zv),
          ev = (0, Bv.v)(zv),
          gv = null !== ev && ((vv, zv) => {
            let Pv = 0;
            for (const hv of vv.querySelectorAll("[data-pad-key], [href]"))
              if ((hv.getAttribute("data-pad-key") === zv || hv.getAttribute("href") === zv) && (Pv++, Pv > 1)) return !0;
            return !1
          })(Pv, ev) ? Math.max(0, this.twins(hv(), ev).indexOf(zv)) : 0;
        this.remembered.set(vv, {
          element: new WeakRef(zv),
          identity: Sv,
          ordinal: gv
        })
      }
      has(vv) {
        return this.remembered.has(vv)
      }
      recall(vv, zv) {
        var Pv, hv;
        const Sv = this.remembered.get(vv);
        if (!Sv) return null;
        const ev = Sv.element.deref();
        if (ev && zv.includes(ev)) return ev;
        if (null === Sv.identity) return null;
        const gv = this.twins(zv, Sv.identity);
        return null !== (Pv = null !== (hv = gv[Sv.ordinal]) && void 0 !== hv ? hv : gv[0]) && void 0 !== Pv ? Pv : null
      }
      twins(vv, zv) {
        return vv.filter((vv => uP(vv) === zv))
      }
    }
    var zh = Pv(1265);
    const Ph = vv => {
        const zv = [];
        let Pv = vv;
        for (; Pv && Pv !== document.body;) {
          const vv = getComputedStyle(Pv).zIndex;
          "auto" !== vv && zv.push(Number(vv) || 0), Pv = Pv.parentElement
        }
        return zv.reverse()
      },
      hh = (vv, zv) => {
        const Pv = ((vv, zv) => {
          const Pv = Math.max(vv.length, zv.length);
          for (let ev = 0; ev < Pv; ev++) {
            var hv, Sv;
            const Pv = (null !== (hv = vv[ev]) && void 0 !== hv ? hv : 0) - (null !== (Sv = zv[ev]) && void 0 !== Sv ? Sv : 0);
            if (0 !== Pv) return Pv
          }
          return 0
        })(Ph(vv), Ph(zv));
        if (0 !== Pv) return Pv > 0;
        if (vv.contains(zv)) return !1;
        if (zv.contains(vv)) return !0;
        const hv = vv.compareDocumentPosition(zv);
        return !!(hv & Node.DOCUMENT_POSITION_PRECEDING) || !(hv & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      Sh = (vv, zv) => {
        var Pv;
        return null !== (Pv = hh(vv.root, zv.root)) && void 0 !== Pv ? Pv : vv.order > zv.order
      },
      eh = (vv, zv) => zv.some((zv => !zv.contains(vv) && !vv.contains(zv) && !0 === hh(zv, vv)));
    let gh = null,
      ph = null,
      dh = -1;
    const Nh = () => {
        var vv;
        const zv = null === (vv = document.timeline) || void 0 === vv ? void 0 : vv.currentTime,
          Pv = "number" === typeof zv ? zv : null;
        if (null !== Pv && Pv === ph && dh === (0, zh.b)()) return gh;
        let hv = null;
        const Sv = [],
          ev = [...document.querySelectorAll("[data-pad-covers]")].filter(Xv.o);
        for (const gv of (0, zh.f)()) {
          const vv = gv.getRoot(),
            zv = !!vv && (0, Xv.o)(vv) && !eh(vv, ev);
          if (gv.shown && !zv && Sv.push(gv), gv.shown = zv, !vv || !zv) continue;
          const Pv = {
            layer: gv,
            root: vv,
            order: gv.order
          };
          hv && !Sh(Pv, hv) || (hv = Pv)
        }
        gh = hv, ph = Pv, dh = (0, zh.b)();
        for (const gv of Sv)(0, zh.i)(gv);
        return gh
      },
      lh = () => {
        const vv = Nh();
        return !(null === vv || void 0 === vv || !vv.layer.close) && (vv.layer.close(), ph = null, !0)
      },
      Th = () => {
        var vv, zv;
        return null !== (vv = null === (zv = Nh()) || void 0 === zv ? void 0 : zv.root) && void 0 !== vv ? vv : null
      },
      Wh = vv => vv ? {
        ...vv,
        root: Th()
      } : null;
    let wh = null,
      ah = null,
      sh = (0, Wv.g)().menuNavigation,
      Ch = null;
    const ih = new jv;
    let ch = null;
    Nv.j.subscribe(Wv.e, (() => {
      const vv = (0, Wv.g)().menuNavigation;
      vv !== sh && (sh = vv, wh = null, ah = null)
    }));
    const Gh = () => {
        var vv;
        return null !== (vv = wh) && void 0 !== vv ? vv : (0, Wv.g)().menuNavigation
      },
      mh = vv => {
        if (Yh()) {
          if (Ch = Wh(vv), "hybrid" === Gh()) return ih.lock(), void(ah = ah ? null : Th());
          wh = "focus" === Gh() ? "cursor" : "focus"
        }
      },
      jh = () => {
        const vv = Ch;
        return Ch = null, vv
      };
    let fh = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const Fh = function(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const Pv = fh.root === vv,
          hv = Pv ? fh.firstSeenMs : zv,
          Sv = fh.has || zv - hv > 1e3;
        return (!Pv || !Sv || zv - fh.atMs > 250) && (fh = {
          root: vv,
          firstSeenMs: hv,
          atMs: zv,
          has: (0, Xv.j)(vv)
        }), fh.has
      },
      Yh = () => {
        const vv = Th();
        return null !== vv && Fh(vv)
      },
      nh = () => {
        const vv = Nh();
        return ah && (null === vv || void 0 === vv ? void 0 : vv.root) !== ah && (ah = null), (vv => {
          let {
            mode: zv,
            hasLayer: Pv,
            hasCandidates: hv,
            hybridCursorEngaged: Sv
          } = vv;
          return Pv ? "cursor" !== zv && hv() ? "hybrid" === zv && Sv ? "cursor" : "focus" : "cursor" : null
        })({
          mode: Gh(),
          hasLayer: null !== vv,
          hasCandidates: () => null !== vv && Fh(vv.root),
          hybridCursorEngaged: null !== ah
        })
      },
      Oh = () => "hybrid" === Gh() && Yh(),
      Dh = "pad-focused";
    var Kh = Pv(4301),
      Vh = Pv(4773);
    const Uh = "[data-pad-destructive]",
      Rh = `${Uh}, [data-pad-back]`,
      xh = vv => ({
        rect: vv.getBoundingClientRect(),
        destructive: vv.matches(Uh),
        closes: null !== vv.closest("[data-pad-close-button]"),
        unavailable: vv.matches("[data-pad-unavailable]")
      }),
      th = vv => {
        let {
          destructive: zv,
          closes: Pv,
          unavailable: hv
        } = vv;
        return zv ? Pv ? 2 : 3 : hv ? 1 : 0
      },
      qh = vv => {
        let zv = -1;
        for (let Pv = 0; Pv < vv.length; Pv++) {
          if (zv < 0) {
            zv = Pv;
            continue
          }
          const hv = vv[Pv],
            Sv = vv[zv];
          th(hv) === th(Sv) ? nP(hv.rect, Sv.rect) < 0 && (zv = Pv) : th(hv) < th(Sv) && (zv = Pv)
        }
        return zv
      },
      Ih = "[data-pad-tabs]",
      Qh = "[data-pad-tab]",
      Zh = (vv, zv) => {
        const Pv = vv.querySelector(`${Qh}[data-pad-selected='true']`);
        return Pv && zv.includes(Pv) ? Pv : null
      },
      Ah = (vv, zv) => {
        let Pv = zv;
        for (let hv = zv.parentElement; hv && !hv.contains(vv); hv = hv.parentElement) Pv = hv;
        return Pv
      };
    class Lh {
      constructor() {
        this.contentReturn = null
      }
      redirect(vv, zv, Pv, hv) {
        var Sv, ev;
        const gv = vv.closest(Ih),
          pv = zv.closest(Ih);
        var dv;
        if (pv && pv !== gv) return gv || (this.contentReturn = new WeakRef(vv)), null !== (dv = Zh(pv, Pv)) && void 0 !== dv ? dv : zv;
        if (!gv || pv) return zv;
        const Nv = Ah(vv, zv),
          lv = null === (Sv = this.contentReturn) || void 0 === Sv ? void 0 : Sv.deref();
        return lv && Nv.contains(lv) && Pv.includes(lv) ? lv : null !== (ev = this.pickRegionStart(Nv, Dv(zv, "y", hv), Pv)) && void 0 !== ev ? ev : zv
      }
      findTabContent(vv, zv, Pv) {
        const hv = vv.closest(Ih);
        if (!hv || !vv.matches(Qh) || hv.contains(zv)) return null;
        const Sv = zv.closest(Ih);
        if (Sv && Number(Sv.dataset.padTabs) <= Number(hv.dataset.padTabs)) return null;
        const ev = Ah(vv, zv);
        return Pv.some((vv => ev.contains(vv) && !vv.closest(Rh))) || !zv.closest(Rh) ? ev : null
      }
      pickContentStart(vv, zv, Pv) {
        return this.contentReturn = null, this.pickRegionStart(vv, Dv(vv, "y", Pv), zv)
      }
      pickReplacedContentStart(vv, zv, Pv, hv) {
        if (!zv.contains(vv)) return null;
        const Sv = Ah(zv, vv),
          ev = Pv.filter((vv => zv.contains(vv) && !Sv.contains(vv) && !vv.closest(Rh)));
        return 0 === ev.length ? null : (this.contentReturn = null, this.pickRegionStart(zv, Dv(ev[0], "y", hv), ev))
      }
      backToStrip(vv, zv, Pv) {
        if (vv.closest(Ih)) return null;
        const hv = qP(Pv);
        for (const Sv of Pv.querySelectorAll(Ih)) {
          if (Number(Sv.dataset.padTabs) <= 1 || Sv === hv) continue;
          const ev = Zh(Sv, zv),
            gv = ev ? Ah(vv, Sv).parentElement : null;
          if (ev && gv && gv !== Pv && Pv.contains(gv)) return this.contentReturn = new WeakRef(vv), ev
        }
        return null
      }
      pickRegionStart(vv, zv, Pv) {
        const hv = tv(zv),
          Sv = vv => {
            const zv = Pv.filter((zv => vv.contains(zv) && !zv.closest(Ih) && qv(zv.getBoundingClientRect(), hv))),
              Sv = qh(zv.map(xh));
            return Sv >= 0 ? zv[Sv] : null
          };
        for (const ev of (0, Xv.h)(vv)) {
          const vv = Sv(ev);
          if (vv) return vv
        }
        for (const ev of vv.querySelectorAll(Ih)) {
          const vv = Zh(ev, Pv);
          if (vv) return vv
        }
        return Sv(vv)
      }
    }
    const Hh = "[data-pad-default-focus], .Dropdown-option.is-selected",
      Mh = ".Dropdown-root.is-open > .Dropdown-menu",
      yh = "[data-pad-no-step-in]",
      Bh = "[data-pad-tabs]",
      Jh = "[data-pad-press-area]",
      Eh = vv => {
        let zv = vv;
        for (let Pv = 0; zv && Pv <= 4; Pv++, zv = zv.parentElement) {
          const Pv = zv.querySelector(".CircleInfo");
          if (Pv) return zv === vv || zv.querySelectorAll(Xv.d).length <= 1 ? Pv : null;
          if (zv !== vv && zv.querySelectorAll(Xv.d).length > 1) return null
        }
        return null
      },
      oh = (vv, zv, Pv) => {
        (0, Bv.n)(vv, zv, Pv);
        const hv = null !== vv && void 0 !== vv && vv.isConnected ? Eh(vv) : null,
          Sv = Eh(zv);
        hv !== Sv && (0, Bv.n)(hv, Sv, Sv ? (0, Bv.r)(Sv) : Pv, {
          leaveBelow: vv,
          enterBelow: zv
        })
      },
      bh = vv => vv.getBoundingClientRect(),
      rh = (vv, zv, Pv) => {
        const hv = new Set(Pv);
        for (let Sv = vv; Sv; Sv = Sv === zv ? null : Sv.parentElement)
          if (hv.has(Sv)) return Sv;
        return null
      },
      kh = (vv, zv) => !vv.root || vv.root === zv || zv.matches(Mh) && vv.root.contains(zv);
    const Xh = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new vh, this.tabStripNav = new Lh, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, sv.d)(av.s), this.dpadRepeats = new Map(av.x.map((vv => [vv, (0, sv.d)(av.z)]))), this.stickRepeat = new av.c((0, sv.d)(av.W)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const vv = Tv.b.register({
            name: "focus",
            isActive: () => (0, wv.k)() && "focus" === nh(),
            onFrame: vv => {
              this.onFrame(vv)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: vv => (0, Tv.d)(vv) || vv === (0, lv.f)("menuConfirm") && (0, Bv.A)((0, wv.c)())
          }),
          zv = (0, zh.j)((vv => {
            const zv = (0, zh.p)(vv);
            null === vv.memoryKey && this.memory.forget(zv), zv === this.layerKey && (this.layerKey = null)
          }));
        let Pv = -1 / 0;
        const hv = gv.f.onFrame((vv => {
            (0, wv.k)() || vv.timestampMs - Pv < 100 || (Pv = vv.timestampMs, Nh())
          })),
          Sv = vv => {
            vv.isTrusted && vv.target instanceof Element && gv.f.getActivePad() && this.noteChosenStop(vv.target)
          };
        return document.addEventListener("click", Sv, !0), () => {
          vv(), zv(), hv(), document.removeEventListener("click", Sv, !0), this.deactivate()
        }
      }
      noteChosenStop(vv) {
        var zv, Pv;
        const hv = Nh();
        if (!hv || !hv.root.contains(vv)) return;
        const Sv = null !== (zv = null === (Pv = vv.closest(".Dropdown-root")) || void 0 === Pv ? void 0 : Pv.querySelector(".Dropdown-control")) && void 0 !== zv ? zv : vv,
          ev = rh(Sv, hv.root, this.getEnabledCandidates(hv.root));
        if (!ev) return;
        const gv = (0, zh.p)(hv.layer);
        gv === this.layerKey && hv.root === this.layerRoot || this.beginLayer(hv, gv), this.wasActive ? this.setFocus(ev, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = ev, this.lastFocusedCentre = (0, Bv.r)(ev), this.rememberFocus(ev), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(vv) {
        return this.listeners.add(vv), () => {
          this.listeners.delete(vv)
        }
      }
      notify() {
        for (const vv of this.listeners) vv()
      }
      deactivate() {
        var vv;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const vv of this.dpadRepeats.values()) vv.reset();
          this.stickRepeat.reset(), null !== (vv = this.focused) && void 0 !== vv && vv.isConnected && oh(this.focused, null, (0, Bv.r)(this.focused)), this.notify()
        }
      }
      setFocus(vv) {
        var zv;
        let {
          scroll: Pv = !0,
          byUser: hv = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (hv && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), vv === this.focused) return;
        const Sv = null !== (zv = this.focused) && void 0 !== zv && zv.isConnected ? this.focused : null;
        if (this.focused = vv, vv) {
          Pv && (vv.classList.add(Dh), vv.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), hv && ((vv, zv) => {
            const Pv = zv.closest("[data-pad-friends-column]");
            Pv && vv && !Pv.contains(vv) && (HP = new WeakRef(vv))
          })(Sv, vv);
          const zv = (0, Bv.r)(vv);
          this.lastFocusedCentre = zv, this.movedInLayer && this.rememberFocus(vv), oh(Sv, vv, zv), "false" === vv.getAttribute("aria-pressed") && vv.closest("[data-pad-select-on-focus]") && (0, Bv.d)(vv)
        } else Sv && oh(Sv, null, (0, Bv.r)(Sv));
        this.notify()
      }
      rememberFocus(vv) {
        const zv = this.layerRoot;
        this.layerKey && zv && this.memory.remember(this.layerKey, vv, zv, (() => this.getEnabledCandidates(zv)))
      }
      noteCursorActivation(vv) {
        const zv = Nh();
        if (!zv || !zv.root.contains(vv)) return;
        const Pv = this.getEnabledCandidates(zv.root),
          hv = new Set(Pv);
        let Sv = vv;
        for (; Sv && !hv.has(Sv);) Sv = Sv === zv.root ? null : Sv.parentElement;
        if (!(Sv instanceof HTMLElement)) return;
        const ev = (0, zh.p)(zv.layer);
        this.memory.enter(ev), this.memory.remember(ev, Sv, zv.root, (() => Pv))
      }
      notePageEnteredByCursor(vv) {
        return this.memory.enter(vv)
      }
      recallStop(vv, zv) {
        return this.findRemembered(vv, zv)
      }
      focusWhenFound(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: vv,
          untilMs: performance.now() + zv,
          holdWhile: Pv
        }
      }
      getEnabledCandidates(vv) {
        return (0, Xv.f)(vv).filter((vv => !(0, Xv.v)(vv)))
      }
      onFrame(vv) {
        var zv;
        const Pv = Nh();
        if (!Pv) return;
        const hv = null !== (zv = this.findOpenDropdown(Pv)) && void 0 !== zv ? zv : Pv,
          Sv = performance.now(),
          ev = (0, zh.p)(hv.layer);
        if (ev !== this.layerKey || hv.root !== this.layerRoot) {
          const zv = this.focused;
          if (null !== this.layerKey && hv.root === this.layerRoot && zv && (0, Xv.r)(zv, hv.root)) this.continueLayer(ev, zv), this.wasActive || this.resume(hv.root, Sv);
          else {
            const zv = !this.wasActive && !vv.wokeDevice,
              gv = "death" === this.layerKind || zv,
              pv = this.enterLayer(hv, ev);
            "popup" !== hv.layer.kind || hv !== Pv || pv ? "menu" === hv.layer.kind && gv && "inGame" === dv.c.get("gameState") && !(0, gP.g)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = Sv + Kh.d) : (this.pressGuardExtends = zv, this.pressGuardUntilMs = Sv + (zv ? Kh.d : gv ? 500 : 250))
          }
        } else this.wasActive || this.resume(hv.root, Sv);
        if (this.layerKind = hv.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), vv.wokeDevice && this.focusPointedStop(hv.root), this.validateFocus(hv, Sv), Sv < this.pressGuardUntilMs && this.pressGuardExtends && (vv.wasPressed((0, lv.f)("menuConfirm")) || vv.wasPressed((0, lv.f)("menuBack"))) && (this.pressGuardUntilMs = Sv + Kh.d), Sv >= this.pressGuardUntilMs && this.handleButtons(vv, hv)) return;
        const gv = "hybrid" === Gh();
        if (gv && (vv => {
            const zv = Th();
            return zv !== ch && (ch = zv, ih.lock()), ih.update(vv, (0, Wv.g)().moveDeadzone)
          })(vv.leftStick)) return pv = this.getHandoff(), Ch = Wh(pv), ah = Th(), void Tv.b.handOffHeldInput();
        var pv;
        this.handleDirections(vv, hv, Sv, !gv), this.handleScroll(vv, hv)
      }
      findOpenDropdown(vv) {
        const zv = vv.root.querySelector(Mh);
        if (!zv || !(0, Xv.o)(zv)) return null;
        let Pv = this.dropdownLayers.get(zv);
        return Pv || (this.dropdownLayerCounter++, Pv = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: vv.layer.kind,
          getRoot: () => zv,
          close: () => {
            (0, Bv.k)(zv)
          },
          memoryKey: null
        }, this.dropdownLayers.set(zv, Pv)), {
          layer: Pv,
          root: zv,
          order: vv.order
        }
      }
      focusPointedStop(vv) {
        const zv = (0, wv.c)(),
          Pv = zv ? document.elementFromPoint(zv.x, zv.y) : null;
        if (!Pv || !vv.contains(Pv)) return;
        const hv = rh(Pv, vv, this.getEnabledCandidates(vv));
        hv && this.setFocus(hv, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(vv, zv) {
        const Pv = this.beginLayer(vv, zv),
          hv = jh();
        return hv && kh(hv, vv.root) ? (this.takeOver(vv.root, hv, this.enteredLayerAtMs), Pv) : (this.restoreLayerFocus(vv.root, Pv), Pv)
      }
      beginLayer(vv, zv) {
        return this.layerKey = zv, this.layerRoot = vv.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(zv)
      }
      restoreLayerFocus(vv, zv) {
        const Pv = zv && this.layerKey ? this.findRemembered(vv, this.layerKey) : null;
        this.restoredFromMemory = null !== Pv, this.setFocus(null !== Pv && void 0 !== Pv ? Pv : this.pickInitial(vv, {
          waitForContent: !0
        }))
      }
      continueLayer(vv, zv) {
        this.layerKey = vv;
        const Pv = this.memory.enter(vv);
        this.restoreOnFocusLoss = Pv, this.movedInLayer && !Pv && this.rememberFocus(zv)
      }
      resume(vv, zv) {
        var Pv;
        const hv = jh();
        hv && kh(hv, vv) ? this.takeOver(vv, hv, zv) : null !== (Pv = this.focused) && void 0 !== Pv && Pv.isConnected && oh(null, this.focused, (0, Bv.r)(this.focused))
      }
      pickPreferred(vv) {
        var zv;
        return null !== (zv = this.layerKey ? this.findRemembered(vv, this.layerKey) : null) && void 0 !== zv ? zv : this.pickInitial(vv, {
          waitForContent: !0
        })
      }
      findRemembered(vv, zv) {
        return this.memory.has(zv) ? this.memory.recall(zv, this.getEnabledCandidates(vv)) : null
      }
      getHandoff() {
        var vv, zv, Pv;
        const hv = null !== (vv = this.focused) && void 0 !== vv && vv.isConnected ? this.focused : null,
          Sv = null !== (zv = this.layerRoot) && void 0 !== zv && zv.isConnected ? this.layerRoot : null;
        return {
          point: hv ? (0, Bv.r)(hv) : null !== (Pv = this.lastFocusedCentre) && void 0 !== Pv ? Pv : this.getLayerStartPoint(Sv),
          element: hv,
          direction: null
        }
      }
      getLayerStartPoint(vv) {
        if (!vv) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const zv = this.pickInitial(vv, {
          includeDisabled: !0
        });
        return (0, Bv.r)(null !== zv && void 0 !== zv ? zv : vv)
      }
      takeOver(vv, zv, Pv) {
        const {
          element: hv,
          direction: Sv,
          point: ev
        } = zv, gv = hv instanceof HTMLElement && (0, Xv.r)(hv, vv) ? hv : null;
        if (!Sv) {
          const zv = this.focused;
          return gv ? this.setFocus(gv, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(vv, ev), void(this.focused && this.focused === zv && this.focused.isConnected && oh(null, this.focused, (0, Bv.r)(this.focused)))
        }
        if (this.dpadRepeats.get(Sv).update(!0, Pv), gv) return this.setFocus(gv, {
          scroll: !1,
          byUser: !0
        }), void this.move(vv, Sv, Pv, !0);
        const pv = this.getEnabledCandidates(vv),
          dv = pv.map(bh),
          Nv = GP(new DOMRect(ev.x, ev.y, 0, 0), dv, Sv),
          lv = Nv >= 0 ? Nv : YP(ev, dv);
        this.setFocus(lv >= 0 ? pv[lv] : this.pickInitial(vv), {
          byUser: !0
        })
      }
      focusNearest(vv, zv) {
        const Pv = this.getEnabledCandidates(vv),
          hv = YP(zv, Pv.map(bh));
        this.setFocus(hv >= 0 ? Pv[hv] : this.pickInitial(vv), {
          byUser: !0
        })
      }
      pickDefault(vv) {
        let {
          includeDisabled: zv = !1,
          exclude: Pv = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const hv = [...vv.querySelectorAll(Hh)].filter((hv => (null === Pv || void 0 === Pv || !Pv.has(hv)) && (zv ? (0, Xv.z)(hv, vv) : (0, Xv.r)(hv, vv)))),
          Sv = qh(hv.map(xh));
        return Sv >= 0 ? hv[Sv] : null
      }
      pickNewAreaStart(vv, zv) {
        const Pv = [...vv.querySelectorAll(Jh)].filter(Xv.o);
        for (const hv of [...(0, Xv.h)(vv), ...Pv]) {
          if (zv.has(hv)) continue;
          const vv = this.getEnabledCandidates(hv),
            Pv = qh(vv.map(xh));
          if (Pv >= 0) return vv[Pv]
        }
        return null
      }
      pickInitial(vv) {
        let {
          includeDisabled: zv = !1,
          waitForContent: Pv = !1,
          enteredAtMs: hv = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Sv = this.pickDefault(vv, {
          includeDisabled: zv
        });
        if (Sv) return Sv;
        const ev = vv => zv ? (0, Xv.f)(vv) : this.getEnabledCandidates(vv);
        let gv = [];
        for (const Wv of (0, Xv.h)(vv))
          if (gv = ev(Wv), gv.length > 0) break;
        if (0 === gv.length) {
          if (Pv && performance.now() - hv < 1e4 && (0, Xv.n)(vv)) return null;
          gv = ev(vv)
        }
        const pv = gv.map(bh),
          dv = tv(null),
          Nv = gv.filter(((vv, zv) => qv(pv[zv], dv))),
          lv = Nv.length > 0 ? Nv : gv,
          Tv = qh(lv.map(xh));
        return Tv >= 0 ? lv[Tv] : null
      }
      validateFocus(vv, zv) {
        if (this.pendingFocus) {
          var Pv, hv;
          const Sv = this.pendingFocus.find();
          if (Sv && (0, Xv.r)(Sv, vv.root)) return this.pendingFocus = null, void this.setFocus(Sv, {
            byUser: !0
          });
          zv > this.pendingFocus.untilMs && (null === (Pv = (hv = this.pendingFocus).holdWhile) || void 0 === Pv || !Pv.call(hv)) && (this.pendingFocus = null)
        }
        const Sv = this.focused,
          ev = !!Sv && (0, Xv.r)(Sv, vv.root);
        if (!(!ev && Sv && Sv === this.lastActivated && zv - this.lastActivatedAtMs < 5e3 && vv.root.contains(Sv) && (0, Xv.o)(Sv) && (0, Xv.v)(Sv))) {
          if (!ev && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = zv, void this.restoreLayerFocus(vv.root, !0);
          if ((!ev || !this.movedInLayer && !this.scrolledInLayer) && !(zv - this.lastRefocusCheckMs < (ev ? 200 : 50)))
            if (this.lastRefocusCheckMs = zv, ev) {
              const Pv = zv - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(vv.root) : null,
                hv = null !== Pv && void 0 !== Pv ? Pv : this.restoredFromMemory ? null : this.pickDefault(vv.root);
              hv && hv !== Sv && this.setFocus(hv)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const zv = this.pendingFocus;
                return this.focusNearest(vv.root, this.lastFocusedCentre), void(this.pendingFocus = zv)
              }
              this.setFocus(this.pickPreferred(vv.root))
            }
        }
      }
      handleButtons(vv, zv) {
        if (vv.wasPressed((0, lv.f)("menuToggleCursor"))) return mh(this.getHandoff()), !0;
        if (vv.wasPressed((0, lv.f)("menuBack"))) {
          const vv = (0, Bv.k)(zv.root);
          return vv ? this.setFocus(vv, {
            byUser: !0
          }) : MP(this, zv.root) || ((0, Bv.f)(zv.root) ? this.returnToOpener(zv.root) : this.backToStrip(zv.root) || lh()), !0
        }
        const Pv = (0, lv.f)("menuConfirm");
        var hv, Sv;
        vv.wasPressed(Pv) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (hv = null === (Sv = this.focused) || void 0 === Sv ? void 0 : Sv.getAttribute("data-pad-repeat")) && void 0 !== hv ? hv : null, this.confirmRepeated = vv.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (vv.wasReleased(Pv)) {
          const vv = this.confirmPressedOn;
          if (this.confirmPressedOn = null, vv && !this.confirmRepeated && vv === this.focused && vv.isConnected && !(0, Xv.v)(vv)) {
            const Pv = vv.matches("[data-pad-tab]") ? vv.closest(Bh) : null;
            Pv ? this.enterTab(vv, Pv, zv.root, performance.now()) : this.activate(vv)
          }
          return !0
        }
        return this.repeatConfirm(vv, Pv), XP(this, vv, zv)
      }
      repeatConfirm(vv, zv) {
        const Pv = this.confirmPressedOn;
        Pv && null !== this.confirmRepeatKey && vv.isHeld(zv) && (Pv === this.focused && Pv.isConnected && !(0, Xv.v)(Pv) && Pv.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? Pv.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(Pv)) : this.confirmRepeatKey = null)
      }
      backToStrip(vv) {
        const zv = this.focused;
        if (!(0, Wv.g)().menuBackToCategories) return !1;
        const Pv = null !== zv && void 0 !== zv && zv.isConnected ? this.tabStripNav.backToStrip(zv, this.getEnabledCandidates(vv), vv) : null;
        return Pv && this.setFocus(Pv, {
          byUser: !0
        }), null !== Pv
      }
      returnToOpener(vv) {
        const zv = this.lastActivatedKey;
        zv && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var Pv;
          return null !== (Pv = this.getEnabledCandidates(vv).find((vv => (0, Bv.v)(vv) === zv))) && void 0 !== Pv ? Pv : null
        })))
      }
      activate(vv) {
        var zv;
        if ((0, Vh.c)(vv) || (0, Bv.z)(vv)) return;
        this.lastActivatedKey = null !== (zv = (0, Bv.v)(vv)) && void 0 !== zv ? zv : this.lastActivatedKey, this.lastActivated = vv, this.lastActivatedAtMs = performance.now(), this.rememberFocus(vv);
        const Pv = this.layerRoot;
        if (Pv) {
          const zv = new Set(Pv.querySelectorAll(Hh)),
            hv = new Set(Pv.querySelectorAll(`[data-pad-initial-area], ${Jh}`)),
            Sv = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var Sv;
            return (0, Xv.r)(vv, Pv) ? null : null !== (Sv = this.pickDefault(Pv, {
              exclude: zv
            })) && void 0 !== Sv ? Sv : this.pickNewAreaStart(Pv, hv)
          }), 5e3, (() => vv.isConnected && (0, Xv.v)(vv) && performance.now() - Sv < 6e4))
        }(0, Bv.d)(vv), (0, Bv.g)(vv)
      }
      handleDirections(vv, zv, Pv, hv) {
        const Sv = UP(zv.layer.kind) ? (0, lv.f)("chat") : null;
        for (const pv of av.x) {
          this.dpadRepeats.get(pv).update(vv.isHeld(pv), Pv) && (pv !== Sv || vv.wasPressed(pv)) && this.move(zv.root, pv, Pv, !0)
        }
        const ev = hv ? (0, av.i)(vv.leftStick, (0, Wv.g)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          gv = this.stickRepeat.update((0, av.Z)(ev), Pv);
        if (gv && this.move(zv.root, gv, Pv, !0), this.retryMove && Pv >= this.retryMove.atMs) {
          const {
            direction: vv
          } = this.retryMove;
          this.retryMove = null, this.move(zv.root, vv, Pv, !1)
        }
      }
      move(vv, zv, Pv, hv) {
        var Sv;
        let ev = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (Sv = this.tabOpenWait) || void 0 === Sv ? void 0 : Sv.wait) && zv === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const gv = this.focused;
        if (!gv || !gv.isConnected) {
          const zv = this.pickInitial(vv);
          return void(zv && this.setFocus(zv, {
            byUser: !0
          }))
        }
        const pv = "Left" === zv || "Right" === zv,
          dv = pv ? (0, Vh.c)(gv) : null;
        if (dv) return void dv.adjust("Left" === zv ? -1 : 1);
        const Nv = vv => null !== vv.closest("[data-pad-friends-column]"),
          lv = Nv(gv),
          Tv = bh(gv),
          Wv = pv || gv.closest(Bh) ? null : (vv => {
            const zv = new Map;
            return Pv => {
              const hv = Pv.closest(Bh);
              if (!hv) return !1;
              let Sv = zv.get(hv);
              if (void 0 === Sv) {
                const Pv = bh(hv);
                Sv = cP(vv, Pv) && (Pv.right <= vv.left || Pv.left >= vv.right), zv.set(hv, Sv)
              }
              return Sv
            }
          })(Tv),
          wv = null !== gv.closest(yh),
          av = this.getEnabledCandidates(vv).filter((vv => vv !== gv && (pv || Nv(vv) === lv) && !(null !== Wv && void 0 !== Wv && Wv(vv)) && (wv || !vv.closest(yh)))),
          sv = av.map(bh),
          Cv = Dv(gv, "y", vv),
          iv = tv(Cv);
        if (!ev && !qv(Tv, iv)) {
          const vv = av.filter(((vv, zv) => qv(sv[zv], iv)));
          if (vv.length > 0) {
            const zv = {
              x: iv.left + iv.width / 2,
              y: iv.top + iv.height / 2
            };
            return void this.setFocus(vv[YP(zv, vv.map(bh))], {
              byUser: !0
            })
          }
        }
        const cv = pv ? ((vv, zv, Pv) => {
            const hv = bh(vv),
              Sv = vv.closest(Bh),
              ev = Sv ? bh(Sv) : null;
            return zv.map(((zv, gv) => {
              const pv = Pv[gv];
              if (pv.bottom > hv.top && pv.top < hv.bottom) return !0;
              const dv = zv.closest(Bh);
              if (Sv && ev) return dv !== Sv && (null !== dv || pv.bottom <= ev.top || pv.top >= ev.bottom);
              if (dv) return !cP(hv, bh(dv));
              let Nv = vv;
              for (let Pv = vv.parentElement; Pv && !Pv.contains(zv); Pv = Pv.parentElement) Nv = Pv;
              const lv = bh(Nv);
              return pv.right > lv.left && pv.left < lv.right
            }))
          })(gv, av, sv) : void 0,
          Gv = pv && !gv.closest(Bh) ? (vv => vv.map((vv => !vv.closest(Rh))))(av) : void 0,
          mv = ((vv, zv) => {
            const Pv = [];
            for (let Sv = vv; Sv; Sv = Sv.parentElement) Pv.push(Sv);
            const hv = new Map;
            return Pv.forEach(((vv, zv) => {
              hv.set(vv, Pv.length - 1 - zv)
            })), zv.map((vv => {
              for (let zv = vv; zv; zv = zv.parentElement) {
                const vv = hv.get(zv);
                if (void 0 !== vv) return vv
              }
              return -1
            }))
          })(gv, av),
          jv = pv ? "x" : "y",
          fv = Dv(gv, jv, vv);
        let Fv = GP(Tv, sv, zv, mv, cv, Gv);
        if (Fv >= 0 && fv && !fv.contains(av[Fv])) {
          const vv = av.flatMap(((vv, zv) => fv.contains(vv) ? [zv] : [])),
            Pv = zv => zv && vv.map((vv => zv[vv])),
            hv = GP(Tv, vv.map((vv => sv[vv])), zv, vv.map((vv => mv[vv])), Pv(cv), Pv(Gv));
          Fv = hv >= 0 ? vv[hv] : Fv
        }
        if (Fv >= 0) return void this.moveTo(gv, av[Fv], av, vv, zv, ev);
        if (!hv) return;
        const Yv = "Right" === zv || "Down" === zv ? 1 : -1;
        if (fv && Rv(fv, jv, Yv)) {
          const vv = "y" === jv ? fv.clientHeight : fv.clientWidth;
          xv(fv, jv, Yv * vv * .5), this.retryMove = {
            direction: zv,
            atMs: Pv + 80
          }
        }
      }
      moveTo(vv, zv, Pv, hv, Sv, ev) {
        const gv = this.tabStripNav.findTabContent(vv, zv, Pv);
        gv && "true" !== vv.dataset.padSelected ? this.openTab(vv, gv, hv, Sv) : ev && !gv || this.setFocus(this.tabStripNav.redirect(vv, zv, Pv, hv), {
          byUser: !0
        })
      }
      openTab(vv, zv, Pv, hv) {
        const Sv = zv.parentElement;
        (0, Bv.d)(vv), this.focusWhenFound((() => "true" !== vv.dataset.padSelected ? null : zv.isConnected ? this.tabStripNav.pickContentStart(zv, this.getEnabledCandidates(Pv), Pv) : Sv ? this.tabStripNav.pickReplacedContentStart(vv, Sv, this.getEnabledCandidates(Pv), Pv) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: hv
        }
      }
      enterTab(vv, zv, Pv, hv) {
        this.move(Pv, (vv => {
          const zv = [...vv.querySelectorAll(Qh)].filter((zv => zv.closest(Ih) === vv));
          if (zv.length >= 2) {
            const vv = zv[0].getBoundingClientRect(),
              Pv = zv[1].getBoundingClientRect();
            return Math.abs(Pv.top - vv.top) > Math.abs(Pv.left - vv.left) ? "Right" : "Down"
          }
          const Pv = vv.getBoundingClientRect();
          return Pv.height > Pv.width ? "Right" : "Down"
        })(zv), hv, !1, !0), this.focused !== vv || this.pendingFocus || this.activate(vv)
      }
      handleScroll(vv, zv) {
        const Pv = (0, av.i)(vv.rightStick, .2);
        if (0 === Pv.x && 0 === Pv.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const hv = vv.dtMs / 1e3;
        for (const ev of ["x", "y"]) {
          var Sv;
          const vv = Pv[ev];
          if (0 === vv) continue;
          const gv = null !== (Sv = Dv(this.focused, ev, zv.root)) && void 0 !== Sv ? Sv : Vv(zv.root, ev);
          if (!gv) continue;
          const pv = Math.sign(vv) * vv * vv * 1500 * hv + this.scrollRemainder[ev],
            dv = Math.trunc(pv);
          this.scrollRemainder[ev] = pv - dv, 0 !== dv && (xv(gv, ev, dv), this.scrolledInLayer = !0)
        }
      }
    };
    var uh = Pv(7906);
    var vS = Pv(8421);
    const zS = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      PS = {
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
          ...zS,
          minIntervalMs: 1e3
        },
        preview: {
          ...zS,
          minIntervalMs: 0
        }
      };
    const hS = new class {
        constructor(vv) {
          this.deps = vv, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = vv => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", vv))
          }
        }
        play(vv, zv) {
          const Pv = PS[vv];
          if (!this.deps.isVibrationOn() || Pv.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const hv = this.lastPlayedMs[vv];
          if (void 0 !== hv && zv - hv < Pv.minIntervalMs) return !1;
          const Sv = this.deps.getActuator();
          if (!Sv) return !1;
          this.lastPlayedMs[vv] = zv;
          const {
            duration: ev,
            strongMagnitude: gv,
            weakMagnitude: pv
          } = Pv;
          try {
            Sv.playEffect("dual-rumble", {
              duration: ev,
              strongMagnitude: gv,
              weakMagnitude: pv
            }).catch(this.logFailure)
          } catch (dv) {
            this.logFailure(dv)
          }
          return !0
        }
      }({
        getActuator: () => (vv => {
          const zv = null === vv || void 0 === vv ? void 0 : vv.vibrationActuator;
          return "function" === typeof(null === zv || void 0 === zv ? void 0 : zv.playEffect) ? zv : null
        })(gv.f.getActiveGamepad()),
        isVibrationOn: () => (0, Wv.g)().vibration,
        isPadInUse: wv.k
      }),
      SS = vv => {
        hS.play(vv, performance.now())
      };
    var eS = Pv(7910),
      gS = Pv(2702),
      pS = Pv(86),
      dS = Pv(39),
      NS = Pv(650);
    class lS {
      constructor(vv) {
        this.deps = vv
      }
      check() {
        let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const zv = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!zv) return "skipped";
        const Pv = vv ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === Pv || this.deps.readReportedVisitId() === Pv ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(Pv), this.deps.yw(zv, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const TS = "controllerUsageReportedVisit";
    var WS = Pv(1336),
      wS = Pv(1692),
      aS = Pv(635),
      sS = Pv(1439),
      CS = Pv(1234);
    const iS = vv => ({
        translationKey: `controller:${vv}`
      }),
      cS = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: iS("padButtonView"),
        Menu: iS("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: iS("padButtonDpadUp"),
        Down: iS("padButtonDpadDown"),
        Left: iS("padButtonDpadLeft"),
        Right: iS("padButtonDpadRight"),
        Home: iS("padButtonHome"),
        LeftStick: iS("padButtonLeftStick"),
        RightStick: iS("padButtonRightStick")
      },
      GS = {
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
          View: iS("padButtonCreate"),
          Menu: iS("padButtonOptions")
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
      mS = (vv, zv) => {
        var Pv;
        const hv = null !== (Pv = GS[vv][zv]) && void 0 !== Pv ? Pv : cS[zv];
        return "string" === typeof hv ? hv : (0, Sv.r)(CS.f.get().getCurrentLanguageCode(), hv.translationKey)
      },
      jS = vv => {
        let {
          glyph: zv,
          family: Pv,
          className: hv
        } = vv;
        const Sv = (0, wv.A)(),
          ev = null !== Pv && void 0 !== Pv ? Pv : Sv,
          gv = (0, eS.c)(ev, zv);
        return (0, Av.jsx)("span", {
          className: Zv()("ControllerGlyph", hv),
          role: "img",
          "aria-label": mS(ev, zv),
          style: {
            "--pad-glyph-mask": `url(${gv})`,
            "--pad-glyph-aspect": (0, eS.b)(ev, zv)
          }
        })
      };
    var fS = Pv(1858);
    const FS = vv => {
      let {
        action: zv
      } = vv;
      const {
        t: Pv
      } = (0, Sv.x)();
      switch (zv.kind) {
        case "reload":
          return (0, Av.jsx)("span", {
            children: Pv("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, Av.jsx)(fS.c, {
            text: zv.description ? [{
              icon: zv.icon
            }, ` ${zv.description}`] : [{
              icon: zv.icon
            }]
          });
        case "touchButton":
          return (0, Av.jsx)(fS.c, {
            text: zv.label
          })
      }
    };
    var YS = Pv(8424);
    const nS = vv => {
      let {
        hold: zv
      } = vv;
      return (0, Av.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${zv.holdMs}ms`
        },
        children: (0, Av.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, zv.id)
    };
    var OS = Pv(8446),
      DS = Pv(8452),
      KS = Pv(8461),
      VS = Pv(8438);
    const US = () => {
        const {
          gameState: vv
        } = (0, dv.i)(["gameState"]), zv = (0, wv.z)(), [hv, Sv] = (0, Iv.useState)(!1), [ev, gv] = (0, Iv.useState)(!1);
        return (0, Iv.useEffect)((() => {
          "inGame" === vv && Sv(!0)
        }), [vv]), (0, Iv.useEffect)((() => {
          if (!hv) return;
          let vv = null,
            zv = !1;
          return (aS.r ? Promise.all([Pv.e(70), Pv.e(261), Pv.e(199), Pv.e(218), Pv.e(217), Pv.e(85)]).then((() => Pv(39847))).then((vv => vv.startWasmPadGameplay)) : Promise.all([Pv.e(70), Pv.e(227), Pv.e(226), Pv.e(95), Pv.e(73), Pv.e(72), Pv.e(71), Pv.e(219), Pv.e(182), Pv.e(223), Pv.e(75), Pv.e(196), Pv.e(216), Pv.e(94), Pv.e(220), Pv.e(84), Pv.e(235), Pv.e(113), Pv.e(236), Pv.e(74), Pv.e(155), Pv.e(218), Pv.e(188)]).then((() => Pv(39981))).then((vv => vv.startPadGameplay))).then((Pv => {
            zv || (vv = Pv())
          })).catch((vv => {
            console.error("Pad gameplay failed to load", vv), zv || gv(!0)
          })), () => {
            var Pv;
            zv = !0, null === (Pv = vv) || void 0 === Pv || Pv()
          }
        }), [hv]), (0, Iv.useEffect)((() => {
          ev && zv && (gv(!1), WS.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((vv => {
            !0 === vv && (0, wS.reloadBloxd)()
          })))
        }), [ev, zv]), (0, Av.jsxs)(Av.Fragment, {
          children: [(0, Av.jsx)(RS, {}), (0, Av.jsx)(xS, {}), (0, Av.jsx)(tS, {})]
        })
      },
      RS = () => {
        const {
          t: vv
        } = (0, Sv.x)(), zv = (0, wv.z)(), {
          gameState: Pv,
          isUiHidden: hv
        } = (0, dv.i)(["gameState", "isUiHidden"]), {
          hideButtonHints: ev
        } = (0, Wv.k)(), gv = (0, YS.j)(), pv = (0, YS.n)(), [Nv, Tv] = (0, Iv.useState)(KS.e);
        return (0, sS.g)(VS.q, Tv), !zv || ev || hv || "inGame" !== Pv || !gv && !Nv ? null : (0, Av.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [gv && (0, Av.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, Av.jsx)(jS, {
              glyph: (0, lv.f)("actionButton")
            }), (0, Av.jsx)(FS, {
              action: gv
            }), pv && (0, Av.jsx)("span", {
              className: "PadActionHintMore",
              children: vv("controller:gameplayActionWheelHint")
            })]
          }), Nv && (0, Av.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, Av.jsx)(jS, {
              glyph: (0, lv.f)("pickBlock")
            }), (0, Av.jsx)("span", {
              children: vv("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      xS = () => {
        const {
          t: vv
        } = (0, Sv.x)(), zv = (0, wv.z)(), {
          gameState: Pv,
          isUiHidden: hv
        } = (0, dv.i)(["gameState", "isUiHidden"]), [ev, gv] = (0, Iv.useState)(OS.d);
        return (0, sS.g)(VS.m, gv), zv && !hv && "inGame" === Pv && ev ? (0, Av.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, Av.jsx)("span", {
            children: vv("controller:gameplayDropStack")
          }), (0, Av.jsx)(nS, {
            hold: ev
          })]
        }) : null
      },
      tS = () => {
        const {
          t: vv
        } = (0, Sv.x)(), zv = (0, wv.z)(), {
          gameState: Pv,
          isUiHidden: hv
        } = (0, dv.i)(["gameState", "isUiHidden"]), {
          hideButtonHints: ev
        } = (0, Wv.k)(), [gv, pv] = (0, Iv.useState)(DS.e);
        return (0, sS.g)(VS.j, pv), zv && !hv && "inGame" === Pv && gv ? (0, Av.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!ev && (0, Av.jsx)(jS, {
            glyph: (0, lv.f)("attack")
          }), (0, Av.jsx)("span", {
            children: vv("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var qS = Pv(8467),
      IS = Pv(1903),
      QS = Pv(2324),
      ZS = Pv(7894);
    const AS = vv => vv && !(0, qS.b)(IS.c.get("shopInfo")),
      LS = () => {
        const vv = "inGame" === (0, dv.i)(["gameState"]).gameState;
        return (0, QS.e)("shopInfo", (() => {
          (0, ZS.i)(AS(vv))
        })), (0, Iv.useEffect)((() => {
          (0, ZS.i)(AS(vv))
        }), [vv]), null
      },
      HS = () => {
        const {
          t: vv
        } = (0, Sv.x)(), {
          hideButtonHints: zv
        } = (0, Wv.k)();
        (0, wv.A)();
        const Pv = (0, Zz.m)();
        return (0, Iv.useEffect)((() => (() => {
          const vv = Tv.b.register({
              name: "inventory",
              isActive: SP.isActive,
              onFrame: SP.onFrame,
              onDeactivate: SP.onDeactivate,
              wakePressActs: SP.wakePressActs
            }),
            zv = vv => {
              SP.noteRealPointer(vv), SP.shouldBlockRealPointer(vv) && vv.stopPropagation()
            };
          for (const gv of eP) window.addEventListener(gv, zv, !0);
          const Pv = (0, kv.k)((() => {
              "inventory" !== Tv.b.getActiveConsumerName() && SP.forgetSurface()
            })),
            hv = vv => {
              const zv = vv.target;
              (0, wv.k)() && (0, ov.g)(zv) && zv.closest(jz) && (0, kv.h)() && (0, kv.r)(zv)
            };
          document.addEventListener("focusout", hv, !0);
          const {
            invalidate: Sv,
            onScroll: ev
          } = SP.targets;
          return document.addEventListener("scroll", ev, !0), window.addEventListener("resize", Sv), () => {
            vv(), Pv();
            for (const vv of eP) window.removeEventListener(vv, zv, !0);
            document.removeEventListener("scroll", ev, !0), document.removeEventListener("focusout", hv, !0), window.removeEventListener("resize", Sv), SP.targets.disconnect()
          }
        })()), []), (0, Av.jsxs)(Av.Fragment, {
          children: [(0, Av.jsx)(yv, {
            placer: SP.ring,
            className: "InventorySlotCursorRing"
          }), Pv.showing && !zv && (0, Av.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: rv(Pv).map((zv => {
              let {
                actions: hv,
                labelKey: Sv
              } = zv;
              return (0, Av.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [hv.map((vv => (0, Av.jsx)(jS, {
                  glyph: (0, lv.f)(vv)
                }, vv))), (0, Av.jsx)("span", {
                  children: vv(`controller:${Sv}`)
                }), "inventoryDrop" === Sv && Pv.dropStackHold && (0, Av.jsx)(nS, {
                  hold: Pv.dropStackHold
                })]
              }, Sv)
            }))
          })]
        })
      },
      MS = [{
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
      yS = vv => Array.from(vv).map((vv => ({
        type: "char",
        char: vv,
        width: 1
      }))),
      BS = function(vv) {
        return {
          type: "command",
          command: vv,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      JS = [BS("page", 2), BS("otherPage"), BS("caretLeft"), BS("space", 3), BS("caretRight"), BS("close", 1.5), BS("submit", 1.5)],
      ES = [BS("page", 2), BS("otherPage"), BS("caretLeft"), BS("space", 2), BS("caretRight"), BS("newline"), BS("close", 1.5), BS("submit", 1.5)],
      oS = [
        [...yS("1234567890"), BS("backspace")], yS("qwertyuiop/"), yS("asdfghjkl'?"), [BS("shift", 2), ...yS("zxcvbnm,.")]
      ],
      bS = [
        [...yS("1234567890"), BS("backspace")], yS("!@#$%^&*()/"), yS('-_=+[]{};:"'), yS("~`|\\<>'\u20ac\xa3,.")
      ],
      rS = {
        letters: oS,
        accents: [
          [...yS("1234567890"), BS("backspace")], yS("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), yS("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [BS("shift", 2), ...yS("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: bS
      },
      kS = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      XS = (vv, zv) => "letters" === vv ? zv ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === vv ? "symbols" : "accents"
      },
      uS = function(vv, zv) {
        const Pv = ((vv, zv) => [...rS[vv], zv ? ES : JS])(vv, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === zv) return Pv;
        const hv = Math.min(2, ve(Pv[0]) / zv);
        return [Array.from({
          length: zv
        }, ((vv, zv) => ({
          type: "phrase",
          phraseIndex: zv,
          width: hv
        }))), ...Pv]
      },
      ve = vv => vv.reduce(((vv, zv) => vv + zv.width), 0),
      ze = vv => Math.max(...vv.map(ve)),
      Pe = (vv, zv) => {
        const Pv = vv[zv.row];
        let hv = (ze(vv) - ve(Pv)) / 2;
        for (let Sv = 0; Sv < zv.col; Sv++) hv += Pv[Sv].width;
        return hv + Pv[zv.col].width / 2
      },
      he = (vv, zv, Pv) => {
        let hv = 0,
          Sv = 1 / 0;
        for (let ev = 0; ev < vv[zv].length; ev++) {
          const gv = Math.abs(Pe(vv, {
            row: zv,
            col: ev
          }) - Pv);
          gv < Sv - 1e-9 && (hv = ev, Sv = gv)
        }
        return hv
      },
      Se = (vv, zv) => {
        const Pv = Math.max(0, Math.min(vv.length - 1, zv.row));
        return {
          row: Pv,
          col: Math.max(0, Math.min(vv[Pv].length - 1, zv.col))
        }
      },
      ee = (vv, zv, Pv) => "once" === vv && zv - Pv <= 400 ? "caps" : "off" === vv ? "once" : "off",
      ge = (vv, zv) => "once" === vv && (vv => vv.toLowerCase() !== vv.toUpperCase())(zv) ? "off" : vv,
      pe = (vv, zv, Pv) => {
        if ("symbols" === zv || "off" === Pv) return vv;
        const hv = vv.toUpperCase();
        return 1 === hv.length ? hv : vv
      };
    var de = Pv(8338);
    const Ne = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const le = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(vv) {
          return !(vv - this.lastSendMs < 2e3) && (this.lastSendMs = vv, !0)
        }
      },
      Te = {
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
      We = ["el", "nameTag"],
      we = vv => {
        const zv = vv.target instanceof HTMLTextAreaElement && !We.includes(vv.kind);
        return uS(vv.page, "chat" === vv.kind ? Ne.length : 0, zv)
      },
      ae = vv => {
        const zv = vv.getBoundingClientRect(),
          Pv = window.innerHeight,
          hv = zv.top + zv.height / 2 < Pv / 2 ? "bottom" : "top",
          Sv = "bottom" === hv ? Pv - zv.bottom - 6 : zv.top - 6;
        return {
          placement: hv,
          maxHeightPx: Math.min(.46 * Pv, Math.max(.3 * Pv, Sv))
        }
      },
      se = vv => {
        (0, DP.j)(vv) ? (0, DP.e)().close(): (Xh.noteChosenStop(vv), vv.blur())
      };
    class Ce {
      constructor(vv) {
        this.host = vv, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(vv, zv) {
        this.phraseTexts = vv, this.phrasesFill = zv
      }
      pressKey(vv) {
        const zv = this.host.getState(),
          Pv = we(zv),
          hv = Pv[vv.row][vv.col];
        this.host.setState({
          ...zv,
          focus: vv,
          preferredX: Pe(Pv, vv)
        }), "char" === hv.type ? this.typeChar(hv.char) : "command" === hv.type ? this.runCommand(hv.command) : this.sendPhrase(hv.phraseIndex)
      }
      runCommand(vv) {
        const zv = this.host.getState();
        switch (vv) {
          case "backspace":
            (0, ov.e)(zv.target);
            break;
          case "space":
            (0, ov.f)(zv.target, " ");
            break;
          case "newline":
            (0, ov.f)(zv.target, "\n");
            break;
          case "caretLeft":
            (0, ov.k)(zv.target, -1);
            break;
          case "caretRight":
            (0, ov.k)(zv.target, 1);
            break;
          case "shift": {
            const vv = performance.now();
            this.host.setState({
              ...zv,
              shift: ee(zv.shift, vv, this.lastShiftPressMs)
            }), this.lastShiftPressMs = vv;
            break
          }
          case "page":
          case "otherPage": {
            const Pv = XS(zv.page, zv.accentsFirst)[vv];
            this.host.setState({
              ...zv,
              page: Pv,
              focus: Se(we({
                ...zv,
                page: Pv
              }), zv.focus)
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
            (0, DP.j)(zv.target) && (0, DP.e)().selectNextChannel()
        }
      }
      submit() {
        var vv, zv;
        const {
          target: Pv
        } = this.host.getState();
        this.host.hide(), (0, DP.j)(Pv) ? (0, DP.e)().submit() : (Xh.noteChosenStop(Pv), null === (vv = (zv = (0, DP.h)(Pv)).submit) || void 0 === vv || vv.call(zv), document.activeElement === Pv && Pv.blur())
      }
      close() {
        const {
          target: vv
        } = this.host.getState();
        this.host.hide(), se(vv)
      }
      typeChar(vv) {
        const {
          target: zv,
          page: Pv,
          shift: hv
        } = this.host.getState();
        (0, ov.f)(zv, pe(vv, Pv, hv)), this.host.setState({
          ...this.host.getState(),
          shift: ge(hv, vv)
        })
      }
      sendPhrase(vv) {
        if (this.phrasesFill) {
          const {
            target: zv
          } = this.host.getState(), Pv = this.phraseTexts[vv];
          Pv && (zv.setSelectionRange(0, zv.value.length), (0, ov.f)(zv, Pv))
        } else le.claim(performance.now()) && (this.host.hide(), (0, DP.e)().sendLine(this.phraseTexts[vv]))
      }
    }
    var ie = Pv(8359);
    const ce = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      Ge = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class me {
      constructor(vv, zv) {
        this.host = vv, this.editor = zv, this.lastDirection = null, this.navRepeat = new av.c((0, sv.d)(ce)), this.commandRepeats = new Map(MS.filter((vv => {
          let {
            repeats: zv
          } = vv;
          return zv
        })).map((vv => {
          let {
            command: zv
          } = vv;
          return [zv, (0, sv.d)(Ge)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const vv of this.commandRepeats.values()) vv.reset()
      }
      onVisibleFrame(vv) {
        const zv = performance.now();
        for (const {
            command: Sv,
            action: ev
          }
          of MS) {
          const Pv = (0, lv.f)(ev),
            hv = this.commandRepeats.get(Sv);
          if ((hv ? hv.update(vv.isHeld(Pv), zv) : vv.wasPressed(Pv)) && (this.editor.runCommand(Sv), !this.host.getState().visible)) return
        }
        if (vv.wasPressed((0, lv.f)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const Pv = this.readNavDirection(vv);
        this.lastDirection = Pv;
        const hv = this.navRepeat.update(Pv, zv);
        hv && this.navigate(hv)
      }
      onHiddenFrame(vv, zv) {
        var Pv;
        if (vv.wasPressed((0, lv.f)("keyboardClose"))) return void se(zv);
        const hv = (0, lv.f)("keyboardType");
        if (vv.wasPressed(hv)) return Tv.b.consumeButton(hv), void this.host.open(zv);
        const Sv = this.readNavDirection(vv),
          ev = null !== Sv && Sv !== this.lastDirection;
        if (this.lastDirection = Sv, !ev || (0, DP.j)(zv)) return;
        const gv = (null === (Pv = Nh()) || void 0 === Pv ? void 0 : Pv.root.contains(zv)) || null !== zv.closest(".EntireInventoryWrapper");
        se(zv), gv && Tv.b.handOffHeldInput()
      }
      navigate(vv) {
        const zv = this.host.getState();
        if ("Up" === vv && 0 === zv.focus.row && "chat" === zv.kind) return (0, DP.e)().stepHistory(), void this.host.setState({
          ...zv
        });
        const Pv = ((vv, zv, Pv, hv) => {
          if ("Left" === Pv || "Right" === Pv) {
            const hv = vv[zv.row].length,
              Sv = (zv.col + ("Right" === Pv ? 1 : -1) + hv) % hv,
              ev = {
                row: zv.row,
                col: Sv
              };
            return {
              pos: ev,
              preferredX: Pe(vv, ev)
            }
          }
          const Sv = (zv.row + ("Down" === Pv ? 1 : -1) + vv.length) % vv.length;
          return {
            pos: {
              row: Sv,
              col: he(vv, Sv, hv)
            },
            preferredX: hv
          }
        })(we(zv), zv.focus, vv, zv.preferredX);
        this.host.setState({
          ...zv,
          focus: Pv.pos,
          preferredX: Pv.preferredX
        })
      }
      readNavDirection(vv) {
        for (const zv of av.x)
          if (vv.isHeld(zv)) return zv;
        return (0, av.Z)((0, av.i)(vv.leftStick, (0, Wv.g)().moveDeadzone))
      }
    }
    const je = ["Up", "Down", "Left", "Right"],
      fe = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const Fe = new class {
      constructor() {
        this.state = Te, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new Ce(this), this.padInput = new me(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(vv) {
        const zv = vv.visible !== this.state.visible;
        this.state = vv;
        for (const Pv of this.listeners) Pv();
        zv && Nv.j.zC(ie.b, vv.visible)
      }
      subscribe(vv) {
        return this.listeners.add(vv), () => {
          this.listeners.delete(vv)
        }
      }
      install() {
        const vv = Tv.b.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, ov.g)(document.activeElement),
            onFrame: vv => {
              this.onFrame(vv)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: vv => je.includes(vv) || !this.state.visible && vv === (0, lv.f)("keyboardType")
          }),
          zv = vv => {
            const zv = vv.target;
            (0, ov.g)(zv) && (zv === this.pendingChatInput || (0, wv.k)() ? this.open(zv) : this.state.visible && zv !== this.state.target && (this.ownedField = null, this.hide()))
          },
          Pv = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          hv = vv => {
            vv.isTrusted && this.state.visible && (vv => !vv.repeat && !fe.has(vv.key) && !(0, de.e)(vv.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(vv.key))(vv) && this.hide()
          },
          Sv = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...ae(this.state.target)
            })
          };
        document.addEventListener("focusin", zv, !0), document.addEventListener("focusout", Pv, !0), window.addEventListener("keydown", hv, !0), window.addEventListener("resize", Sv);
        const ev = Nv.j.subscribe(VS.b, (() => {
            this.openChat()
          })),
          gv = Nv.j.subscribe(ie.d, (vv => {
            this.openForField(vv)
          }));
        return () => {
          vv(), document.removeEventListener("focusin", zv, !0), document.removeEventListener("focusout", Pv, !0), window.removeEventListener("keydown", hv, !0), window.removeEventListener("resize", Sv), Nv.j.unsubscribe(ev), Nv.j.unsubscribe(gv), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const vv = (0, DP.e)();
        vv ? document.activeElement !== vv.input ? (this.clearPendingChat(), this.pendingChatInput = vv.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), vv.open()) : this.open(vv.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(vv) {
        (0, ov.g)(vv) ? (document.activeElement !== vv && vv.focus(), document.activeElement === vv && this.open(vv)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", vv)
      }
      open(vv) {
        var zv;
        if (this.clearPendingChat(), this.ownedField = vv, this.state.visible && this.state.target === vv) return;
        this.restoreInputMode(), (0, ov.n)(vv), this.savedInputMode = vv.getAttribute("inputmode"), vv.setAttribute("inputmode", "none");
        const Pv = {
          ...Te,
          visible: !0,
          target: vv,
          kind: (0, DP.j)(vv) ? "chat" : null !== (zv = (0, DP.h)(vv).kind) && void 0 !== zv ? zv : null,
          accentsFirst: (hv = CS.f.get().getCurrentLanguageCode(), kS.has(hv)),
          ...ae(vv)
        };
        var hv;
        const Sv = we(Pv),
          ev = ((vv, zv) => {
            for (let Pv = 0; Pv < vv.length; Pv++) {
              const hv = vv[Pv].findIndex((vv => "char" === vv.type && vv.char === zv));
              if (-1 !== hv) return {
                row: Pv,
                col: hv
              }
            }
            return null
          })(Sv, "q");
        this.padInput.reset(), this.setState({
          ...Pv,
          focus: ev,
          preferredX: Pe(Sv, ev)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(Te))
      }
      onFrame(vv) {
        if (this.releaseLostField()) return;
        const zv = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(vv) : (0, ov.g)(zv) && this.padInput.onHiddenFrame(vv, zv)
      }
      releaseLostField() {
        const vv = this.ownedField;
        return !(null === vv || vv.isConnected && document.activeElement === vv) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: vv
        } = this.state;
        vv && (null === this.savedInputMode ? vv.removeAttribute("inputmode") : vv.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var Ye = Pv(8474);
    const ne = new Map(MS.map((vv => {
        let {
          command: zv,
          action: Pv
        } = vv;
        return [zv, Pv]
      }))),
      Oe = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      De = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        el: "controller:keyboardTargetBookTitle"
      },
      Ke = vv => {
        const zv = (() => {
          const [, vv] = (0, Iv.useReducer)((vv => vv + 1), 0);
          return vv
        })();
        (0, Iv.useEffect)((() => {
          if (!vv) return;
          const Pv = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const Sv of Pv) vv.addEventListener(Sv, zv);
          document.addEventListener("selectionchange", zv);
          const hv = new MutationObserver(zv);
          return hv.observe(vv, {
            attributeFilter: ["placeholder"]
          }), () => {
            hv.disconnect();
            for (const hv of Pv) vv.removeEventListener(hv, zv);
            document.removeEventListener("selectionchange", zv)
          }
        }), [vv, zv])
      },
      Ve = vv => {
        vv.preventDefault()
      },
      Ue = vv => {
        "mouse" !== vv.pointerType && vv.preventDefault()
      },
      Re = () => {
        var vv;
        const {
          t: zv
        } = (0, Sv.x)(), Pv = (() => {
          const [vv, zv] = (0, Iv.useState)(Fe.getState());
          return (0, Iv.useEffect)((() => Fe.subscribe((() => {
            zv(Fe.getState())
          }))), []), vv
        })(), hv = (0, wv.z)(), ev = (0, Iv.useRef)(null);
        (0, Wv.k)(), (0, wv.A)(), (0, Iv.useEffect)((() => {
          const vv = Fe.install(),
            zv = null;
          return () => {
            vv(), null === zv || void 0 === zv || zv()
          }
        }), []);
        const gv = (0, Iv.useMemo)((() => Ne.map((vv => zv(vv)))), [zv]),
          pv = Pv.visible && "chat" === Pv.kind ? Pv.target : null;
        Ke(pv);
        const dv = null !== (vv = null === pv || void 0 === pv ? void 0 : pv.value) && void 0 !== vv ? vv : "",
          Nv = ((vv, zv, Pv) => {
            if (!vv.startsWith("/")) return [];
            const hv = [];
            for (let Sv = zv.length - 1; Sv >= 0 && hv.length < Pv; Sv--) {
              const Pv = zv[Sv].trim();
              Pv.startsWith(vv) && Pv !== vv && !hv.includes(Pv) && hv.push(Pv)
            }
            return hv
          })(dv, dv.startsWith("/") ? (0, Ye.d)() : [], Ne.length),
          Tv = dv.startsWith("/"),
          av = Tv ? Ne.map(((vv, zv) => {
            var Pv;
            return null !== (Pv = Nv[zv]) && void 0 !== Pv ? Pv : ""
          })) : gv;
        if ((0, Iv.useEffect)((() => {
            Fe.editor.setPhraseRow(av, Tv)
          })), (0, Iv.useEffect)((() => {
            const vv = ev.current;
            if (vv) return vv.addEventListener("touchstart", Ve, {
              passive: !1
            }), () => {
              vv.removeEventListener("touchstart", Ve)
            }
          }), [Pv.visible]), !Pv.visible) return null;
        const sv = we(Pv),
          Cv = ze(sv),
          iv = vv => "char" === vv.type ? pe(vv.char, Pv.page, Pv.shift) : "phrase" === vv.type ? av[vv.phraseIndex] : (vv => {
            switch (vv) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === Pv.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return Oe[XS(Pv.page, Pv.accentsFirst)[vv]];
              case "space":
                return zv("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return zv("chat" === Pv.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(vv.command),
          cv = vv => {
            Fe.editor.pressKey(vv)
          };
        return (0, Av.jsxs)("div", {
          ref: ev,
          className: Zv()(DP.o, "top" === Pv.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: Pv.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": sv.length,
            "--pad-keyboard-height": `${Pv.maxHeightPx}px`
          },
          onPointerDown: Ue,
          onMouseDown: Ve,
          children: [(0, Av.jsx)(xe, {
            target: Pv.target,
            label: Pv.kind ? zv(De[Pv.kind]) : Pv.target.placeholder || zv("controller:keyboardTargetText")
          }), (0, Av.jsx)("div", {
            className: "PadKeyboardRows",
            children: sv.map(((vv, zv) => (0, Av.jsx)("div", {
              className: Zv()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === vv[0].type
              }),
              children: vv.map(((vv, Sv) => {
                const ev = hv && Pv.focus.row === zv && Pv.focus.col === Sv,
                  gv = "command" === vv.type ? ne.get(vv.command) : void 0;
                return (0, Av.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: vv.width / Cv * 100 + "%"
                  },
                  children: (0, Av.jsxs)("div", {
                    className: Zv()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: ev,
                      PadKeyboardKeyCommand: "command" === vv.type,
                      PadKeyboardKeyPhrase: "phrase" === vv.type,
                      PadKeyboardKeyActive: "command" === vv.type && "shift" === vv.command && "off" !== Pv.shift,
                      PadKeyboardKeySubmit: "command" === vv.type && "submit" === vv.command
                    }),
                    role: "button",
                    onClick: () => {
                      cv({
                        row: zv,
                        col: Sv
                      })
                    },
                    onTouchEnd: vv => {
                      var Pv, hv;
                      vv.preventDefault(), Pv = vv.changedTouches[0], hv = vv.currentTarget.getBoundingClientRect(), Pv && Pv.clientX >= hv.left && Pv.clientX <= hv.right && Pv.clientY >= hv.top && Pv.clientY <= hv.bottom && cv({
                        row: zv,
                        col: Sv
                      })
                    },
                    children: [(0, Av.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: iv(vv)
                    }), hv && gv && (0, Av.jsx)(jS, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, lv.f)(gv)
                    })]
                  })
                }, Sv)
              }))
            }, zv)))
          })]
        })
      },
      xe = vv => {
        let {
          target: zv,
          label: Pv
        } = vv;
        Ke(zv);
        const hv = (0, Iv.useRef)(null),
          Sv = (0, Iv.useRef)(null),
          ev = zv instanceof HTMLTextAreaElement;
        (0, Iv.useLayoutEffect)((() => {
          const vv = hv.current,
            zv = Sv.current;
          ev ? vv.scrollTop = zv.offsetTop - vv.clientHeight / 2 : vv.scrollLeft = zv.offsetLeft - vv.clientWidth / 2
        }));
        const {
          value: gv,
          start: pv,
          end: dv
        } = (0, ov.p)(zv), Nv = "password" === zv.type ? "\u2022".repeat(gv.length) : gv;
        return (0, Av.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, Av.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: Pv
          }), (0, Av.jsxs)("div", {
            ref: hv,
            className: Zv()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: ev
            }),
            children: [(0, Av.jsx)("span", {
              children: Nv.slice(0, pv)
            }), (0, Av.jsx)("span", {
              ref: Sv,
              className: "PadKeyboardCaret"
            }), pv !== dv && (0, Av.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: Nv.slice(pv, dv)
            }), (0, Av.jsx)("span", {
              children: Nv.slice(dv)
            }), 0 === Nv.length && zv.placeholder && zv.placeholder !== Pv && (0, Av.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: zv.placeholder
            })]
          })]
        })
      };
    var te = Pv(1374),
      qe = Pv(3172);
    const Ie = function() {
        for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
        return zv.map(lv.f)
      },
      Qe = (vv, zv) => {
        const Pv = yP(vv);
        return Pv ? [{
          glyphs: [Pv],
          labelKey: zv
        }] : []
      },
      Ze = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      Ae = "--pad-hint-bar-clearance",
      Le = "[data-pad-hint-bar-avoid]",
      He = vv => {
        const zv = [];
        for (const Pv of vv)(0, Xv.o)(Pv) && zv.push(Pv.getBoundingClientRect());
        return zv
      },
      Me = vv => {
        if (!vv) return null;
        const zv = Nh(),
          Pv = zv ? He(((vv, zv) => {
            const Pv = vv.closest(Le);
            return Pv ? [Pv] : ("popup" === zv ? document : vv).querySelectorAll(Le)
          })(zv.root, zv.layer.kind)) : [],
          hv = !zv || zv.root.hasAttribute("data-pad-shows-hud");
        if (((0, qe.i)(null === zv || void 0 === zv ? void 0 : zv.layer.kind, (0, qe.l)()) || hv) && Pv.push(...He(document.querySelectorAll(Ze.join(",")))), 0 === Pv.length) return null;
        const {
          width: Sv,
          height: ev
        } = vv.getBoundingClientRect(), gv = window.innerHeight - 8, pv = (0, qe.o)(gv, {
          width: Sv,
          height: ev
        }, window.innerWidth / 2, Pv, 8);
        return pv === gv ? null : Math.round(window.innerHeight - pv)
      },
      ye = vv => {
        const zv = document.documentElement.style,
          Pv = vv ? `${Math.round(window.innerHeight-vv.getBoundingClientRect().top)}px` : "";
        zv.getPropertyValue(Ae) !== Pv && (Pv ? zv.setProperty(Ae, Pv) : zv.removeProperty(Ae))
      },
      Be = () => {
        const {
          t: vv
        } = (0, Sv.x)(), {
          hideButtonHints: zv
        } = (0, Wv.k)(), Pv = (0, wv.z)(), [hv, ev] = (0, Iv.useState)(!1), [gv, Nv] = (0, Iv.useState)([]), [sv, Cv] = (0, Iv.useState)(null), iv = (0, Iv.useRef)(null), cv = (0, Iv.useRef)(null);
        (0, sS.g)(ie.b, (vv => {
          ev(vv)
        })), (0, sS.g)(qe.n, (() => {
          var vv;
          null === (vv = cv.current) || void 0 === vv || vv.call(cv)
        }));
        const Gv = Pv && !zv && !hv;
        return (0, Iv.useEffect)((() => {
          if (!Gv) return;
          let vv = null;
          const zv = () => {
            const zv = (() => {
                var vv;
                const zv = Tv.b.getActiveConsumerName(),
                  Pv = (0, qe.g)();
                if (Pv) {
                  const vv = (0, lv.f)(Pv),
                    zv = "emoteWheel" === Pv && "wheel" === (0, Wv.g)().emoteButton || !(0, av.C)(Tv.b.getLastFrame().values, vv) ? {
                      glyphs: Ie("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [vv],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, lv.t)(vv)],
                    labelKey: "controller:wheelChoose"
                  }, zv, {
                    glyphs: Ie("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const hv = Nh();
                if (!hv || "focus" !== zv && "cursor" !== zv) return (0, qe.d)(lv.f);
                const Sv = [],
                  ev = {
                    glyphs: Ie("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  gv = (0, Bv.q)(hv.root),
                  pv = gv ? !(0, Xv.v)(gv) : Boolean(hv.layer.close),
                  Nv = !gv && hv.layer.closeLabelKey ? hv.layer.closeLabelKey : ev.labelKey,
                  wv = pv ? [{
                    ...ev,
                    labelKey: Nv
                  }] : [],
                  sv = UP(hv.layer.kind) ? [{
                    glyphs: Ie("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === zv) return Sv.push({
                  glyphs: Ie("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), Sv.push({
                  glyphs: Ie("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), Sv.push(...wv), Sv.push(...sv), Sv.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), Yh() && Sv.push({
                  glyphs: Ie("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), Sv;
                const Cv = Xh.getFocused();
                Cv && (0, Vh.c)(Cv) ? Sv.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : Cv && (0, Bv.z)(Cv) ? Sv.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : Sv.push({
                  glyphs: Ie("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const iv = Cv ? null === (vv = WP(Cv)) || void 0 === vv ? void 0 : vv.dataset.padSecondary : void 0;
                iv && Sv.push({
                  glyphs: Ie("menuSecondary"),
                  labelKey: iv
                }), Sv.push(...null !== Cv && void 0 !== Cv && Cv.closest("[data-pad-friends-column]") ? [ev] : wv), Sv.push(...sv);
                const cv = "home" === hv.layer.kind;
                EP(hv.root) || !qP(hv.root) && !oP(hv) ? cv && Sv.push({
                  glyphs: Ie("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : Sv.push({
                  glyphs: Ie("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), cv && (Sv.push(...Qe("inventory", "controller:menusFriends")), iv || Sv.push({
                  glyphs: Ie("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), Sv.push(...Qe("pause", "controller:menusSettings")), Sv.push(...Qe("leaderboard", "controller:menusNotifications")));
                const Gv = dv.c.get("openEverythingMenuName");
                return "inGame" === dv.c.get("gameState") && "popup" !== hv.layer.kind && null !== Gv && ((0, dP.k)(Gv) ? Sv.push(...Qe("leaderboard", "controller:menusClose")) : Gv !== pP.o.LOBBY_LEADERBOARD && Sv.push(...Qe("leaderboard", "controller:menusLobby"))), Sv.push({
                  glyphs: Ie("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), Sv
              })(),
              Pv = Me(iv.current),
              hv = ((vv, zv) => `${vv.map((vv=>`${vv.glyphs.join("+")}:${vv.labelKey}`)).join("|")}@${zv}`)(zv, Pv);
            hv !== vv && (vv = hv, (0, pv.unstable_batchedUpdates)((() => {
              Nv(zv), Cv(Pv)
            }))), ye(iv.current)
          };
          zv(), cv.current = zv;
          const Pv = requestAnimationFrame(zv),
            hv = setInterval(zv, 150);
          return () => {
            cv.current = null, cancelAnimationFrame(Pv), clearInterval(hv), ye(null)
          }
        }), [Gv]), (0, Iv.useLayoutEffect)((() => {
          if (!Gv) return;
          if (0 === gv.length) return void ye(null);
          const vv = Me(iv.current);
          vv === sv ? ye(iv.current) : Cv(vv)
        }), [Gv, gv, sv]), Gv && 0 !== gv.length ? (0, Av.jsx)("div", {
          ref: iv,
          className: "PadButtonHintBar SmallTextBold",
          style: null === sv ? void 0 : {
            bottom: sv
          },
          "aria-hidden": !0,
          children: gv.map((zv => (0, Av.jsxs)("div", {
            className: "PadButtonHint",
            children: [zv.glyphs.map((vv => (0, Av.jsx)(jS, {
              glyph: vv,
              className: "PadButtonHintGlyph"
            }, vv))), (0, Av.jsx)("span", {
              children: vv(zv.labelKey)
            })]
          }, zv.labelKey)))
        }) : null
      };
    var Je = Pv(1697);
    const Ee = [Xv.d, "label", "[data-pad-slider]"].join(","),
      oe = "data-pad-cursor-probe",
      be = vv => {
        var zv;
        const Pv = (vv => {
          const zv = [];
          for (let hv = vv; hv && hv !== document.body && hv !== document.documentElement && (zv.push(hv), !(zv.length > 8)); hv = hv.parentElement);
          const Pv = document.documentElement.classList.contains(wv.s) ? zv[zv.length - 1] : void 0;
          null === Pv || void 0 === Pv || Pv.setAttribute(oe, "");
          try {
            return zv.map((vv => ({
              element: vv,
              cursor: getComputedStyle(vv).cursor
            })))
          } finally {
            null === Pv || void 0 === Pv || Pv.removeAttribute(oe)
          }
        })(vv);
        if ("pointer" !== (null === (zv = Pv[0]) || void 0 === zv ? void 0 : zv.cursor)) return null;
        let hv = 0;
        for (; hv + 1 < Pv.length && "pointer" === Pv[hv + 1].cursor;) hv++;
        return Pv[hv].element
      },
      re = (vv, zv, Pv, hv) => {
        const Sv = hv.root.contains(vv) ? hv.root : null;
        for (let ev = vv; ev && ev !== document.body && ev !== document.documentElement; ev = ev.parentElement) {
          if (ev instanceof HTMLElement && Ov(ev, zv) && Rv(ev, zv, Pv)) return ev;
          if (ev === Sv) break
        }
        return "home" === hv.layer.kind || "gamePage" === hv.layer.kind ? ((vv, zv) => {
          const Pv = document.scrollingElement;
          return Pv instanceof HTMLElement && ![document.documentElement, document.body].some((zv => {
            const Pv = getComputedStyle(zv),
              hv = "y" === vv ? Pv.overflowY : Pv.overflowX;
            return "hidden" === hv || "clip" === hv
          })) && Rv(Pv, vv, zv) ? Pv : null
        })(zv, Pv) : null
      };
    const ke = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, sv.d)(av.s), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const vv = Tv.b.register({
              name: "cursor",
              isActive: () => "cursor" === nh(),
              onFrame: vv => {
                this.onFrame(vv)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: vv => (0, Tv.d)(vv) || vv === (0, lv.f)("menuConfirm") && (0, Bv.A)((0, wv.c)())
            }),
            zv = (0, zh.j)((vv => {
              const zv = vv.getRoot();
              zv && this.layerPoints.delete(zv), zv === this.layerRoot && (this.layerRoot = null)
            })),
            Pv = Nv.j.subscribe("appManagerUpdated|activeInputDevice", (vv => {
              "gamepad" !== vv && this.active && !this.hidden && this.hide()
            }));
          return () => {
            vv(), zv(), Nv.j.unsubscribe(Pv), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, wv.k)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.zC()
        }
        activate(vv) {
          this.active = !0, this.hidden = !1;
          const zv = jh();
          !zv || zv.root && zv.root !== vv.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(vv), this.jumpTo(zv.point))
        }
        jumpTo(vv) {
          this.state = {
            x: vv.x,
            y: vv.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.zC())
        }
        onFrame(vv) {
          const zv = Nh();
          if (!zv) return;
          if (this.active || this.activate(zv), this.followPage(zv)) return;
          this.followLayer(zv);
          const Pv = vv.wokeDevice ? (0, wv.c)() : null;
          if (Pv && this.jumpTo(Pv), !(0, wv.k)()) return void this.hide();
          const hv = (0, lv.f)("menuToggleCursor");
          if (vv.wasPressed(hv)) return Tv.b.consumeButton(hv), void mh(this.getHandoff(null));
          if (this.handBackToFocus(vv)) return;
          const Sv = (0, lv.f)("menuConfirm"),
            ev = (0, lv.f)("menuSecondary");
          if (vv.wasPressed((0, lv.f)("menuBack"))) return (0, Bv.k)(zv.root) || (0, Bv.f)(zv.root) || lh(), void this.zC();
          if (kP(null, vv, zv)) return vv.wasReleased(Sv) && this.press && (this.updateHit(!1), this.updateConfirm(vv, Sv)), void this.zC();
          if (document.pointerLockElement) return void this.hide();
          const gv = Oh() ? {
              x: 0,
              y: 0
            } : (vv => {
              const zv = (vv, zv) => (vv ? 1 : 0) - (zv ? 1 : 0);
              return {
                x: zv(vv.isHeld("Right"), vv.isHeld("Left")),
                y: zv(vv.isHeld("Down"), vv.isHeld("Up"))
              }
            })(vv),
            pv = (0, Wv.g)().moveDeadzone,
            dv = ((vv, zv) => {
              const Pv = (0, av.i)(vv, mv(zv));
              return Math.hypot(Pv.x, Pv.y)
            })(vv.leftStick, pv) > 0 || 0 !== gv.x || 0 !== gv.y;
          if (this.hidden) {
            const zv = vv.wasPressed(Sv),
              Pv = vv.wasPressed(ev);
            if (!dv && !Fv(vv.rightStick) && !zv && !Pv && !vv.wokeDevice) return void this.zC();
            if (this.hidden = !1, this.updateHit(!1), zv || Pv) return zv && (this.press = {
              kind: "ignored"
            }, vv.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.zC()
          }
          this.movePendingPageStart(dv);
          const Nv = this.getPoint();
          this.state = fv(this.state, {
            stick: vv.leftStick,
            moveDeadzone: pv,
            dpad: gv,
            dtMs: vv.dtMs,
            cursorSpeedPercent: (0, Wv.g)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const sv = this.state.x !== Nv.x || this.state.y !== Nv.y,
            Cv = [Sv, ev].some((zv => vv.wasPressed(zv) || vv.wasReleased(zv)));
          (sv || Cv || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(sv), this.updateConfirm(vv, Sv), this.updateSecondary(vv, ev), this.updateScroll(vv, zv), this.zC()
        }
        followPage(vv) {
          const zv = "home" === vv.layer.kind || "gamePage" === vv.layer.kind,
            Pv = this.page;
          if (this.page = zv ? {
              key: (0, zh.p)(vv.layer),
              root: vv.root
            } : null, !this.page || !Pv || Pv.root !== vv.root || Pv.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(vv), "hybrid" === Gh()) return Ch = null, ah = null, ih.lock(), !0;
          const {
            key: hv
          } = this.page;
          return this.pendingPageStart = {
            root: vv.root,
            key: hv,
            returning: Xh.notePageEnteredByCursor(hv),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(vv) {
          const zv = this.pendingPageStart;
          if (!zv) return;
          if (vv || zv.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const Pv = zv.returning ? Xh.recallStop(zv.root, zv.key) : null;
          if (!Pv && zv.returning && performance.now() - zv.enteredAtMs < 1e3) return;
          const hv = null !== Pv && void 0 !== Pv ? Pv : Xh.pickInitial(zv.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: zv.enteredAtMs
          });
          hv && (this.pendingPageStart = null, this.jumpTo((0, Bv.r)(hv)))
        }
        setLayer(vv) {
          this.layerRoot = vv.root, this.layerOrder = vv.order
        }
        followLayer(vv) {
          var zv;
          if (vv.root === this.layerRoot) return;
          null !== (zv = this.layerRoot) && void 0 !== zv && zv.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const Pv = this.layerPoints.get(vv.root),
            hv = Pv && vv.order <= this.layerOrder ? Pv : Xh.getLayerStartPoint(vv.root);
          this.setLayer(vv), this.jumpTo(hv)
        }
        getHandoff(vv) {
          var zv;
          return {
            point: this.getPoint(),
            element: null !== (zv = this.interactive) && void 0 !== zv ? zv : this.findDraggedSliderNearby(),
            direction: vv
          }
        }
        findDraggedSliderNearby() {
          const vv = this.draggedSlider;
          if (null === vv || void 0 === vv || !vv.isConnected) return null;
          const zv = vv.getBoundingClientRect(),
            {
              y: Pv
            } = this.getPoint();
          return Pv >= zv.top - 40 && Pv <= zv.bottom + 40 ? vv : null
        }
        handBackToFocus(vv) {
          if (!Oh()) return !1;
          const zv = av.x.find((zv => vv.wasPressed(zv)));
          return !!zv && (Pv = this.getHandoff(zv), Ch = Wh(Pv), ah = null, ih.lock(), Tv.b.handOffHeldInput(), !0);
          var Pv
        }
        getAssistContext() {
          const vv = this.interactive;
          if (null === vv || void 0 === vv || !vv.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const zv = vv.getBoundingClientRect();
          if (zv.width > .4 * window.innerWidth || zv.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const Pv = (0, Wv.g)().cursorMagnetism && !(0, Je.c)(vv) && !vv.closest("[data-pad-slider]"),
            hv = this.magnet && this.magnet !== vv && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : zv;
          return {
            overInteractive: !0,
            magnetTarget: Pv ? {
              x: hv.left + hv.width / 2,
              y: hv.top + hv.height / 2
            } : null
          }
        }
        updateHit(vv) {
          this.lastHitTestMs = performance.now();
          const zv = this.getPoint(),
            Pv = document.elementFromPoint(zv.x, zv.y),
            hv = Pv && !(0, iv.n)(Pv) && (vv => {
              var zv;
              const Pv = Nh();
              return !(Pv && !Pv.root.contains(vv) && !vv.closest(".tooltip-container")) || !(null !== (zv = document.getElementById("root")) && void 0 !== zv && zv.contains(vv))
            })(Pv) ? Pv : null;
          if (hv !== this.hit) return (0, Bv.n)(this.hit, hv, zv), this.hit = hv, void this.setInteractive(hv ? (vv => {
            const zv = vv.closest(Ee);
            if (zv) {
              var Pv, hv;
              const vv = null !== (Pv = null === (hv = zv.parentElement) || void 0 === hv ? void 0 : hv.closest("[data-pad-focusable]")) && void 0 !== Pv ? Pv : zv;
              return (0, Xv.v)(vv) ? {
                element: null,
                magnet: null
              } : {
                element: vv,
                magnet: zv
              }
            }
            const Sv = be(vv);
            return {
              element: Sv,
              magnet: Sv
            }
          })(hv) : {
            element: null,
            magnet: null
          });
          vv && hv && (0, Bv.n)(hv, hv, zv)
        }
        setInteractive(vv) {
          let {
            element: zv,
            magnet: Pv
          } = vv;
          this.interactive = zv, this.magnet = Pv
        }
        clearHover() {
          this.hit && (0, Bv.n)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const vv = this.hit;
          if (!vv || (0, Bv.z)(vv)) return {
            kind: "ignored"
          };
          const zv = (0, Vh.c)(vv),
            Pv = vv.closest("[data-pad-slider]");
          return zv && Pv ? {
            kind: "slider",
            slider: Pv,
            adjuster: zv
          } : ((0, Bv.o)(vv, this.getPoint()), {
            kind: "pointer",
            target: vv
          })
        }
        applySliderFraction(vv) {
          var zv;
          const Pv = vv.slider.getBoundingClientRect(),
            hv = Pv.height > Pv.width,
            Sv = null === (zv = vv.slider.querySelector("[data-pad-slider-handle]")) || void 0 === zv ? void 0 : zv.getBoundingClientRect(),
            ev = Sv ? hv ? Sv.height : Sv.width : 0,
            gv = (hv ? Pv.height : Pv.width) - ev;
          if (gv <= 0) return;
          const pv = hv ? Pv.bottom - ev / 2 - this.state.y : this.state.x - Pv.left - ev / 2;
          vv.adjuster.setFraction(Math.max(0, Math.min(1, pv / gv)))
        }
        updateConfirm(vv, zv) {
          vv.wasPressed(zv) && (this.press = vv.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const Pv = this.press;
          if (!Pv) return;
          if (vv.isHeld(zv)) return "slider" === Pv.kind && this.applySliderFraction(Pv), void this.updateRepeat();
          this.press = null;
          const hv = this.repeated;
          if (this.endRepeat(), !vv.wasReleased(zv)) return void this.endPressWithoutClick(Pv);
          const Sv = this.getPoint(),
            ev = this.hit;
          if ("slider" === Pv.kind && Pv.adjuster.endDrag(), "pointer" === Pv.kind) {
            const vv = null !== ev && void 0 !== ev ? ev : Pv.target.isConnected ? Pv.target : null;
            vv && (0, Bv.p)(vv, Sv);
            const zv = ev && Pv.target.isConnected && !hv ? ((vv, zv) => {
              for (let Pv = vv; Pv; Pv = Pv.parentElement)
                if (Pv.contains(zv)) return Pv;
              return null
            })(Pv.target, ev) : null;
            zv && (Xh.noteCursorActivation(zv), (0, iv.d)(zv, new MouseEvent("click", (0, Bv.G)(Sv, 0, 0))), (0, Bv.g)(zv), (0, Bv.E)(zv) && (0, Bv.B)(zv))
          }
        }
        beginRepeat() {
          var vv, zv, Pv;
          const hv = null !== (vv = null === (zv = this.hit) || void 0 === zv ? void 0 : zv.closest("[data-pad-repeat]")) && void 0 !== vv ? vv : null;
          this.repeatStop = hv, this.repeatKey = null !== (Pv = null === hv || void 0 === hv ? void 0 : hv.getAttribute("data-pad-repeat")) && void 0 !== Pv ? Pv : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const vv = this.repeatStop;
          if (!vv) return;
          const zv = this.hit;
          vv.isConnected && !(0, Xv.v)(vv) && vv.getAttribute("data-pad-repeat") === this.repeatKey && zv && vv.contains(zv) ? vv.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, Xh.noteCursorActivation(vv), (0, iv.d)(vv, new MouseEvent("click", (0, Bv.G)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(vv) {
          "slider" === vv.kind && vv.adjuster.endDrag(), "pointer" === vv.kind && vv.target.isConnected && (0, Bv.p)(vv.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(vv, zv) {
          vv.wasPressed(zv) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !vv.isHeld(zv) && (this.secondaryArmed = !1, vv.wasReleased(zv) && this.hit && (0, Bv.m)(this.hit, this.getPoint(), 2))
        }
        updateScroll(vv, zv) {
          const Pv = Yv(vv.rightStick, vv.dtMs);
          if (0 === Pv.x && 0 === Pv.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + Pv.x,
            y: this.scrollRemainder.y + Pv.y
          };
          const hv = Math.trunc(this.scrollRemainder.x),
            Sv = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - hv,
            y: this.scrollRemainder.y - Sv
          };
          const ev = this.hit;
          if (!ev) return;
          let gv = !1;
          if (0 !== Sv) {
            const vv = re(ev, "y", Sv > 0 ? 1 : -1, zv);
            vv && (vv.scrollBy({
              top: Sv,
              behavior: "instant"
            }), gv = !0)
          }
          if (0 !== hv) {
            const vv = re(ev, "x", hv > 0 ? 1 : -1, zv);
            vv && (vv.scrollBy({
              left: hv,
              behavior: "instant"
            }), gv = !0)
          }
          gv && (this.lastHitTestMs = -1 / 0)
        }
        zC() {
          Ev.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      Xe = () => {
        const vv = (0, Iv.useMemo)((() => new Mv), []),
          zv = (0, wv.z)();
        return (0, Iv.useEffect)((() => {
          if (!zv) return;
          let Pv = 0,
            hv = {
              of: null,
              atMs: 0,
              list: []
            };
          const Sv = document.getElementsByClassName(Dh),
            ev = vv => {
              for (const zv of [...Sv]) zv !== vv && zv.classList.remove(Dh)
            },
            gv = () => {
              var zv;
              Pv = requestAnimationFrame(gv);
              const Sv = (() => {
                const vv = Xh.getFocused();
                if (Xh.isActive() && null !== vv && void 0 !== vv && vv.isConnected) return vv;
                const zv = ke.getHighlighted();
                return null !== zv && void 0 !== zv && zv.isConnected ? zv : null
              })();
              ev(Sv), Sv && !Sv.classList.contains(Dh) && Sv.classList.add(Dh);
              const pv = null !== (zv = null === Sv || void 0 === Sv ? void 0 : Sv.closest("[data-pad-reticle-box]")) && void 0 !== zv ? zv : Sv;
              vv.show(pv ? ((vv, zv) => {
                let Pv = vv.left,
                  hv = vv.top,
                  Sv = vv.right,
                  ev = vv.bottom;
                for (const gv of zv) {
                  if (!gv) continue;
                  const vv = tv(gv);
                  Pv = Math.max(Pv, vv.left), hv = Math.max(hv, vv.top), Sv = Math.min(Sv, vv.right), ev = Math.min(ev, vv.bottom)
                }
                return Sv <= Pv || ev <= hv ? null : {
                  left: Pv,
                  top: hv,
                  width: Sv - Pv,
                  height: ev - hv
                }
              })(pv.getBoundingClientRect(), (vv => {
                const zv = performance.now();
                return (hv.of !== vv || zv - hv.atMs > 500) && (hv = {
                  of: vv,
                  atMs: zv,
                  list: [Dv(vv, "y"), Dv(vv, "x")]
                }), hv.list
              })(pv)) : null)
            };
          return Pv = requestAnimationFrame(gv), () => {
            cancelAnimationFrame(Pv), ev(null), vv.hide()
          }
        }), [zv, vv]), (0, Av.jsx)(yv, {
          placer: vv,
          className: "PadFocusRing"
        })
      },
      ue = (vv, zv) => {
        vv.style.transform = `translate3d(${zv.x}px, ${zv.y}px, 0)`, vv.classList.toggle("Visible", zv.visible), vv.classList.toggle("Pressed", zv.pressed)
      },
      vg = () => {
        const vv = (0, Iv.useRef)(null);
        return (0, Iv.useEffect)((() => {
          const zv = Ev.subscribe((zv => {
            vv.current && ue(vv.current, zv)
          }));
          return vv.current && ue(vv.current, Ev.get()), zv
        }), []), (0, Av.jsx)("div", {
          ref: vv,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, Av.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      zg = "#ncmp__modal.ncmp__active",
      Pg = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(zg) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(zg),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      hg = "PadOverThirdParty",
      Sg = new Set(Pg.map((vv => vv.id))),
      eg = () => {
        const vv = Pg.map((vv => {
            let {
              id: zv,
              find: Pv,
              startSelectors: hv
            } = vv;
            return (0, zh.m)({
              id: zv,
              kind: "popup",
              getRoot: () => {
                const vv = Pv(),
                  zv = vv ? ((vv, zv) => {
                    var Pv;
                    for (const hv of zv) {
                      const zv = vv.querySelector(hv);
                      if (zv) return zv
                    }
                    return null !== (Pv = [...vv.querySelectorAll("button")].find((vv => !vv.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== Pv ? Pv : null
                  })(vv, hv) : null;
                if (vv && zv && !zv.hasAttribute("data-pad-default-focus")) {
                  for (const zv of vv.querySelectorAll("[data-pad-default-focus]")) zv.removeAttribute("data-pad-default-focus");
                  for (const zv of vv.querySelectorAll("[data-pad-hint-bar-avoid]")) zv.removeAttribute("data-pad-hint-bar-avoid");
                  zv.setAttribute("data-pad-default-focus", ""), ((vv, zv) => {
                    let Pv = vv;
                    for (let hv = vv.parentElement; hv && zv.contains(hv) && !(hv.getBoundingClientRect().height >= window.innerHeight / 2); hv = hv.parentElement) Pv = hv;
                    return Pv
                  })(zv, vv).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return vv
              },
              close: null,
              memoryKey: null
            })
          })),
          zv = document.documentElement,
          Pv = gv.f.onFrame((() => {
            const vv = (0, wv.k)() ? Nh() : null,
              Pv = !!vv && (hv = vv.layer, Sg.has(hv.id));
            var hv;
            zv.classList.contains(hg) !== Pv && zv.classList.toggle(hg, Pv)
          }));
        return () => {
          for (const zv of vv) zv();
          Pv(), zv.classList.remove(hg)
        }
      },
      gg = "PadLargePointer",
      pg = () => {
        (0, Iv.useEffect)((() => {
          const vv = (0, iv.i)(document.body),
            zv = Xh.install(),
            Pv = ke.install(),
            hv = eg();
          return () => {
            vv(), zv(), Pv(), hv()
          }
        }), []);
        const {
          largePointer: vv
        } = (0, Wv.k)(), zv = (0, te.m)() && vv;
        return (0, Iv.useEffect)((() => {
          if (zv) return document.documentElement.classList.add(gg), () => {
            document.documentElement.classList.remove(gg)
          }
        }), [zv]), (0, pv.createPortal)((0, Av.jsxs)(Av.Fragment, {
          children: [(0, Av.jsx)(Be, {}), (0, Av.jsx)(Xe, {}), (0, Av.jsx)(vg, {})]
        }), document.body)
      };
    var dg = Pv(8484),
      Ng = Pv(8497),
      lg = Pv(8493);
    Pv(8499);
    const Tg = (vv, zv) => {
        const [Pv, hv] = (0, Iv.useState)(!1), [Sv, ev] = (0, Iv.useState)(null), gv = (0, Iv.useRef)(null), pv = (0, Iv.useCallback)((vv => {
          gv.current = vv, ev(vv)
        }), []), dv = (0, Iv.useCallback)((() => {
          hv(!1), pv(null)
        }), [pv]), lv = (0, Iv.useCallback)((() => {
          hv(!0)
        }), []), Tv = (0, Iv.useCallback)(((vv, zv) => {
          pv((0, lg.D)(vv, zv, gv.current))
        }), [pv]);
        (0, Iv.useLayoutEffect)((() => (zv(Pv), (0, qe.v)(vv, Pv), Nv.j.zC(qe.n), () => {
          zv(!1), (0, qe.v)(vv, !1), Nv.j.zC(qe.n)
        })), [Pv, vv, zv]), (0, sS.g)("appManagerUpdated|activeInputDevice", (vv => {
          "gamepad" !== vv && dv()
        })), (0, sS.g)("appManagerUpdated|gameState", (vv => {
          "inGame" !== vv && dv()
        }));
        const Wv = () => {
          (0, dP.o)() && dv()
        };
        return (0, sS.g)("appManagerUpdated|openEverythingMenuName", Wv), (0, sS.g)("appManagerUpdated|openInGameMenuName", Wv), {
          open: Pv,
          picked: Sv,
          pickedRef: gv,
          show: lv,
          aim: Tv,
          close: dv
        }
      },
      Wg = vv => {
        let {
          className: zv,
          slotCount: Pv,
          picked: hv,
          slotLabel: Sv,
          renderSlot: ev,
          centre: gv
        } = vv;
        const pv = Array.from({
          length: Pv
        }, ((vv, zv) => zv));
        return (0, Av.jsx)("div", {
          className: Zv()("EmoteWheelOverlay PadRadialWheel", zv),
          children: (0, Av.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * lg.q + "rem",
              height: 2 * lg.q + "rem"
            },
            children: [(0, Av.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${lg.o} ${lg.o}`,
              children: [pv.map((vv => (0, Av.jsx)("path", {
                d: (0, lg.r)(vv, Pv, lg.e, lg.h, lg.l),
                className: Zv()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: vv === hv
                }),
                "aria-label": Sv(vv)
              }, vv))), (0, Av.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: lg.e,
                cy: lg.e,
                r: lg.l
              }), (0, Av.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: lg.e,
                cy: lg.e,
                r: lg.h
              }), null !== hv && (0, Av.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, lg.r)(hv, Pv, lg.e, lg.h, lg.l)
              })]
            }), pv.map((vv => {
              const zv = (0, lg.y)(vv, Pv);
              return (0, Av.jsx)("div", {
                className: Zv()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: vv === hv
                }),
                style: {
                  left: `calc(50% + ${lg.d*Math.cos(zv)}rem)`,
                  top: `calc(50% + ${lg.d*Math.sin(zv)}rem)`
                },
                "aria-hidden": !0,
                children: ev(vv)
              }, vv)
            })), (0, Av.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: gv
            })]
          })
        })
      },
      wg = Ne.length,
      ag = () => {
        const {
          t: vv
        } = (0, Sv.x)(), zv = Tg("chat", VP.j), Pv = (0, Iv.useMemo)((() => Ne.map((zv => vv(zv)))), [vv]);
        return (0, sS.g)(VP.h, (() => {
          zv.open || (0, dg.f)() || (0, Ng.p)() || "inGame" !== dv.c.get("gameState") || (0, dP.o)() || !(0, DP.e)() || zv.show()
        })), (0, sS.g)(VP.c, (vv => {
          zv.open && zv.aim(vv, wg)
        })), (0, sS.g)(VP.f, (() => {
          var vv;
          if (!zv.open) return;
          const hv = zv.pickedRef.current;
          null !== hv ? le.claim(performance.now()) && (zv.close(), null === (vv = (0, DP.e)()) || void 0 === vv || vv.sendLine(Pv[hv])) : zv.close()
        })), (0, sS.g)(VP.e, zv.close), zv.open ? (0, Av.jsx)(Wg, {
          className: "QuickChatWheel",
          slotCount: wg,
          picked: zv.picked,
          slotLabel: vv => Pv[vv],
          renderSlot: vv => Pv[vv],
          centre: null !== zv.picked ? Pv[zv.picked] : vv("controller:quickChatPick")
        }) : null
      },
      sg = () => {
        const {
          t: vv
        } = (0, Sv.x)(), zv = Tg("actionButton", Ng.q), [Pv, hv] = (0, Iv.useState)([]);
        if ((0, sS.g)(Ng.k, (vv => {
            zv.open || (0, dg.f)() || (0, VP.b)() || "inGame" !== dv.c.get("gameState") || (0, dP.o)() || (hv(vv), zv.show())
          })), (0, sS.g)(Ng.c, (vv => {
            zv.open && zv.aim(vv, Pv.length)
          })), (0, sS.g)(Ng.j, (() => {
            if (!zv.open) return;
            const vv = zv.pickedRef.current;
            zv.close(), null !== vv && Nv.j.zC(Ng.n, Pv[vv])
          })), (0, sS.g)(Ng.g, zv.close), !zv.open) return null;
        const ev = null !== zv.picked ? Pv[zv.picked] : null;
        return (0, Av.jsx)(Wg, {
          className: "ActionWheel",
          slotCount: Pv.length,
          picked: zv.picked,
          slotLabel: zv => {
            const hv = Pv[zv];
            return "reload" === hv.kind ? vv("controller:gameplayReload") : "customButton" === hv.kind ? hv.description || hv.icon : "touchButton" === hv.kind && "string" === typeof hv.label ? hv.label : ""
          },
          renderSlot: vv => (0, Av.jsx)(FS, {
            action: Pv[vv]
          }),
          centre: ev ? (0, Av.jsx)(FS, {
            action: ev
          }) : vv("controller:actionWheelPick")
        })
      };
    var Cg = Pv(73);
    const ig = () => ((0, Iv.useEffect)((() => {
        var vv, zv;
        const Pv = (0, iv.i)(document.getElementById("root")),
          hv = (0, wv.f)(),
          Sv = (() => {
            const vv = [Nv.j.subscribe(vS.i, (() => {
                SS("blockBreak")
              })), Nv.j.subscribe("damagedByOtherPlayer", (() => {
                SS("damage")
              })), Nv.j.subscribe("yourAttackHit", (vv => {
                let {
                  hitSelf: zv
                } = vv;
                zv || SS("hit")
              }))],
              zv = gv.f.onActivePadChanged((vv => {
                vv && SS("connect")
              }));
            return () => {
              for (const zv of vv) Nv.j.unsubscribe(zv);
              zv()
            }
          })(),
          ev = (() => {
            const vv = new lS({
              getVisitId: NS.d,
              peekVisitId: NS.peekVisitSessionId,
              readReportedVisitId: () => {
                const vv = dS.l.getItem(TS);
                return "string" === typeof vv ? vv : null
              },
              writeReportedVisitId: vv => {
                dS.l.setItem(TS, vv)
              },
              isPadActive: wv.k,
              getPadFamily: () => {
                var vv, zv;
                return null !== (vv = null === (zv = gv.f.getActivePad()) || void 0 === zv ? void 0 : zv.family) && void 0 !== vv ? vv : null
              },
              canReport: gS.k,
              getInputType: pS.b,
              yw: gS.q
            });
            let zv = 0,
              Pv = null;
            const hv = Sv => {
                null === Pv && ("notReady" !== vv.check(Sv) || null !== Pv || zv >= 20 || (zv++, Pv = setTimeout((() => {
                  Pv = null, hv(!1)
                }), 3e3)))
              },
              Sv = Nv.j.subscribe("appManagerUpdated|activeInputDevice", (() => {
                hv(!0)
              })),
              ev = (0, NS.i)((() => {
                zv = 0, hv(!0)
              }));
            return () => {
              Nv.j.unsubscribe(Sv), ev(), null !== Pv && clearTimeout(Pv)
            }
          })(),
          pv = gv.f.onFrame(((vv, zv) => {
            const Pv = (0, wv.p)(vv);
            Tv.b.dispatch(vv, zv, Pv)
          }));
        let lv = null !== (vv = null === (zv = gv.f.getActivePad()) || void 0 === zv ? void 0 : zv.family) && void 0 !== vv ? vv : null;
        const av = gv.f.onActivePadChanged((vv => {
            var zv, Pv;
            (Tv.b.reset(), (0, wv.w)(), Nv.j.zC(gv.e, vv), (null !== (zv = null === vv || void 0 === vv ? void 0 : vv.family) && void 0 !== zv ? zv : null) !== lv) && (lv = null !== (Pv = null === vv || void 0 === vv ? void 0 : vv.family) && void 0 !== Pv ? Pv : null, Nv.j.zC(Wv.c, (0, Wv.g)()));
            !vv && (0, wv.k)() && (0, wv.y)(dv.c.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          sv = () => {
            "visible" !== document.visibilityState && Tv.b.clear()
          },
          Cv = () => {
            Tv.b.clear()
          };
        document.addEventListener("visibilitychange", sv), window.addEventListener("blur", Cv), gv.f.start(), (0, eS.g)();
        const cv = null;
        return () => {
          Pv(), hv(), Sv(), ev(), pv(), av(), document.removeEventListener("visibilitychange", sv), window.removeEventListener("blur", Cv), gv.f.stop(), null === cv || void 0 === cv || cv()
        }
      }), []), (0, Av.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, Av.jsx)(US, {}), (0, Av.jsx)(LS, {}), (0, Av.jsx)(HS, {}), (0, Av.jsx)(Re, {}), (0, Av.jsx)(pg, {}), (0, Av.jsx)(ag, {}), (0, Av.jsx)(sg, {})]
      })),
      cg = () => Cg.featureFlags.useControllerSupport ? (0, Av.jsx)(ig, {}) : null;
    var Gg = Pv(7879),
      mg = Pv(8505);
    const jg = new Set(eS.e),
      fg = vv => `${mg.i}${(0,Wv.h)()}/${vv}`,
      Fg = vv => {
        if (!(0, mg.g)(vv)) return null;
        const [zv, Pv] = vv.slice(mg.i.length).split("/");
        return (0, Gg.h)(zv) && jg.has(Pv) ? (0, eS.c)(zv, Pv) : null
      };
    var Yg = Pv(8513);
    const ng = () => {
        const {
          t: vv
        } = (0, Sv.x)(), zv = (0, wv.z)(), {
          gameState: Pv,
          isUiHidden: hv
        } = (0, dv.i)(["gameState", "isUiHidden"]), {
          hideButtonHints: ev,
          sneakMode: gv
        } = (0, Wv.k)(), [pv, Nv] = (0, Iv.useState)(Yg.d);
        return (0, sS.g)(VS.t, Nv), zv && !hv && "inGame" === Pv && pv ? (0, Av.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!ev && (0, Av.jsx)(jS, {
            glyph: (0, lv.f)("toggle" === gv ? "sneak" : "sneakToggle")
          }), (0, Av.jsx)("span", {
            children: vv("controller:gameplaySneaking")
          })]
        }) : null
      },
      Og = 12,
      Dg = vv => {
        let {
          trigger: zv,
          className: Pv,
          children: hv
        } = vv;
        const Sv = (0, Iv.useRef)(null);
        return (0, Iv.useEffect)((() => {
          let vv = 0;
          const Pv = Dv(zv, "y"),
            hv = () => {
              vv = requestAnimationFrame(hv);
              const ev = Sv.current;
              if (!ev || null === zv || void 0 === zv || !zv.isConnected) return;
              const {
                left: gv,
                top: pv
              } = function(vv, zv, Pv) {
                let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const ev = vv.left + vv.width / 2,
                  gv = Math.max(Og, Pv.width - Og - zv.width),
                  pv = Math.min(Math.max(ev - zv.width / 2, Og), gv),
                  dv = Pv.height - hv;
                let Nv = 0,
                  lv = dv;
                if (Sv) {
                  const vv = Math.max(0, Sv.top),
                    hv = Math.min(dv, Sv.bottom);
                  hv - vv >= Math.max(Pv.height / 2, zv.height + 24) && (Nv = vv, lv = hv)
                }
                const Tv = vv.top + vv.height / 2 < (Nv + lv) / 2 ? lv - Og - zv.height : Nv + Og;
                return {
                  left: pv,
                  top: Math.max(Og, Tv)
                }
              }(zv.getBoundingClientRect(), {
                width: ev.offsetWidth,
                height: ev.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(Ae)) || 0, null !== Pv && void 0 !== Pv && Pv.isConnected ? Pv.getBoundingClientRect() : null);
              ev.style.transform = `translate3d(${Math.round(gv)}px, ${Math.round(pv)}px, 0)`, ev.style.visibility = "visible"
            };
          return hv(), () => {
            cancelAnimationFrame(vv)
          }
        }), [zv]), (0, Av.jsx)("div", {
          ref: Sv,
          className: Pv,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: hv
        })
      };
    var Kg = Pv(1042),
      Vg = Pv(8520),
      Ug = Pv(1442),
      Rg = Pv(8529),
      xg = Pv(8531);
    const tg = {
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
      qg = () => {
        const {
          t: vv
        } = (0, Sv.x)(), zv = (0, wv.z)(), Pv = (0, Vg.d)(), hv = (0, QS.i)("_tasks"), ev = (0, QS.i)("_availableLeaderboards");
        if (!zv) return null;
        const gv = (vv => {
          let {
            hasShop: zv,
            hasTasksOrLeaderboards: Pv,
            canInvite: hv
          } = vv;
          const Sv = [];
          return zv && Sv.push("shop"), Pv && Sv.push("tasks"), hv && Sv.push("invite"), Sv.push("leave"), Sv
        })({
          hasShop: Pv,
          hasTasksOrLeaderboards: !(!hv && !ev),
          canInvite: !!Cg.featureFlags.canUseInviteLinks
        });
        return (0, Av.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: gv.map((zv => {
            const {
              icon: Pv,
              labelKey: hv
            } = tg[zv], Sv = "leave" === zv ? Ug.A : Ug.d;
            return (0, Av.jsx)(Sv, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (vv => {
                  switch (vv) {
                    case "shop":
                      return Nv.j.zC(xg.l), void dv.c.set({
                        openEverythingMenuName: pP.o.SHOP
                      });
                    case "tasks":
                      return void Nv.j.zC("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void Nv.j.zC("toggleMenu", "inviteLink");
                    case "leave":
                      (0, Rg.e)()
                  }
                })(zv)
              },
              children: (0, Av.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, Av.jsx)(Kg.b, {
                  name: Pv
                }), (0, Av.jsx)("span", {
                  children: vv(hv)
                })]
              })
            }, zv)
          }))
        })
      };
    var Ig = Pv(1934);
    const Qg = av.w,
      Zg = ["forward", "backward", "left", "right", "sprint"],
      Ag = vv => vv.ctrlKey || vv.altKey || "Alt" === vv.key || "ArrowUp" === vv.key || "ArrowDown" === vv.key || "Tab" === vv.code || "/" === vv.key || "Slash" === vv.code;
    class Lg {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(av.O).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(vv) {
        this.armed = vv
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || zv ? !vv.repeat && this.swallowedKeys.delete(vv.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(vv.code),
          continues: !1
        } : "Escape" === vv.key || vv.repeat && !this.swallowedKeys.has(vv.code) ? {
          swallow: !1,
          continues: !1
        } : Pv ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(vv.code), {
          swallow: !0,
          continues: (0, wv.g)(vv)
        })
      }
      onKeyUp(vv) {
        return this.swallowedKeys.delete(vv.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Sv = (0, av.r)(vv.values, this.previousHeld),
          ev = null === Pv ? -1 : (0, av.m)(Pv),
          gv = ev >= 0 && Sv[ev] && !this.previousHeld[ev],
          pv = Sv.some(((vv, zv) => vv && !this.previousHeld[zv] && zv !== ev)),
          dv = Math.hypot(vv.leftStick.x, vv.leftStick.y) >= Qg,
          Nv = Math.hypot(vv.rightStick.x, vv.rightStick.y) >= Qg,
          lv = dv && !this.leftStickWasPressed || Nv && !this.rightStickWasPressed;
        this.previousHeld = Sv, this.leftStickWasPressed = dv, this.rightStickWasPressed = Nv;
        let Tv = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, Tv = !0);
        const Wv = !zv && gv && !hv,
          wv = !Wv && this.armed && !zv && (pv || lv);
        return (Wv || wv) && (this.consumeNextFrame = !0, this.consumeAfterContinue = wv, Tv = !0), {
          continues: wv,
          back: Wv,
          consumeHeld: Tv
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const Hg = new Set([...Ig.n, ...Ig.I]),
      Mg = vv => ((vv, zv, Pv) => {
        const hv = Object.keys(zv).filter((hv => !Pv.has(hv) && zv[hv].includes(vv)));
        return hv.length > 0 && hv.every((vv => Zg.includes(vv)))
      })(vv, Ig.z, Hg),
      yg = (vv, zv, Pv) => {
        const hv = new Lg,
          Sv = vv => {
            if (!vv.isTrusted) return;
            const {
              swallow: Pv,
              continues: Sv
            } = hv.onKeyDown(vv, !(0, wv.E)(vv) || (0, uh.j)() || (0, dP.o)(), Mg(vv.code));
            Pv && (vv.stopImmediatePropagation(), Ag(vv) && vv.preventDefault()), Sv && ((0, wv.y)("keyboardMouse"), zv())
          },
          ev = vv => {
            vv.isTrusted && hv.onKeyUp(vv) && (vv.stopImmediatePropagation(), Ag(vv) && vv.preventDefault())
          },
          pv = () => {
            hv.forgetKeys()
          };
        window.addEventListener("keydown", Sv, !0), window.addEventListener("keyup", ev, !0), window.addEventListener("blur", pv);
        const dv = gv.f.onFrame((vv => {
            const Sv = Tv.b.getActiveConsumerName(),
              ev = Pv(),
              gv = ev ? (0, lv.f)("menuBack") : null,
              pv = null !== Sv && "gameplay" !== Sv,
              {
                continues: dv,
                back: Nv,
                consumeHeld: av
              } = hv.onPadFrame(vv, pv, gv, (0, wv.m)(vv));
            if (av) {
              const vv = (0, Wv.g)().swapSticks ? "right" : "left";
              Tv.b.consumeAllHeld(hv.consumeLeavesMoveStick() ? vv : null)
            }
            Nv ? null === ev || void 0 === ev || ev() : dv && zv()
          })),
          Nv = (0, uh.m)(`pressToContinue:${vv}`, (() => hv.blocksGameplay()));
        return {
          setArmed: vv => {
            hv.setArmed(vv)
          },
          dispose: () => {
            window.removeEventListener("keydown", Sv, !0), window.removeEventListener("keyup", ev, !0), window.removeEventListener("blur", pv), dv(), Nv()
          }
        }
      };
    var Bg = Pv(4732),
      Jg = Pv(3177),
      Eg = Pv(2917),
      og = Pv(7887);
    const bg = vv => {
        let {
          text: zv
        } = vv;
        return (0, Av.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: zv
        })
      },
      rg = vv => {
        let {
          label: zv,
          hint: Pv,
          options: hv,
          value: ev,
          onChange: gv
        } = vv;
        const {
          t: pv
        } = (0, Sv.x)();
        return (0, Av.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, Av.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, Av.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, Av.jsx)("div", {
                className: "SliderText",
                children: zv
              }), Pv && (0, Av.jsx)("div", {
                className: "ControllerSettingsHint",
                children: Pv
              })]
            }), (0, Av.jsx)(Eg.e, {
              options: hv.map((vv => ({
                label: "label" in vv ? vv.label : pv(vv.labelKey),
                value: vv.value
              }))),
              value: ev,
              onChange: vv => {
                gv(vv.value)
              }
            })]
          })
        })
      },
      kg = vv => {
        let {
          settingKey: zv,
          label: Pv,
          range: hv,
          format: Sv
        } = vv;
        const ev = (0, Wv.k)();
        return (0, Av.jsx)(Bg.i, {
          name: Pv,
          min: hv.min,
          max: hv.max,
          step: hv.step,
          padStep: hv.step,
          initValue: ev[zv],
          format: Sv,
          onChange: vv => {
            (0, Wv.i)({
              [zv]: (0, og.v)(vv, hv)
            })
          }
        })
      };
    var Xg = Pv(8536),
      ug = Pv(8540);
    const vp = vv => vv instanceof DOMException && ("SecurityError" === vv.name || "NotAllowedError" === vv.name),
      zp = vv => {
        const [zv] = [...vv.controllers].sort(((vv, zv) => ug.q[vv] - ug.q[zv]));
        return ug.o[zv]
      },
      Pp = vv => {
        (0, Xg.c)().allowPhoneMotion().catch((zv => {
          vv && vp(zv) ? vv() : console.warn("Could not enable the motion sensor", zv)
        }))
      },
      hp = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      Sp = vv => {
        let {
          status: zv
        } = vv;
        const {
          t: Pv
        } = (0, Sv.x)(), [hv, ev] = (0, Iv.useState)(null), gv = `${zv.controllers.join(",")}|${zv.phoneMotion}`;
        (0, Iv.useEffect)((() => {
          ev(null)
        }), [gv]);
        const pv = () => {
          (0, Xg.c)().connectController().then((vv => {
            ev(vv > 0 ? "openFailed" : null)
          })).catch((vv => {
            vp(vv) ? ev("needsClick") : console.warn("Could not connect motion controller", vv)
          }))
        };
        if (zv.hidSupported) {
          let vv = Pv("controller:settingsGyroConnectHint");
          return "needsClick" === hv ? vv = Pv("controller:settingsGyroConnectNeedsClick") : "openFailed" === hv ? vv = Pv("controller:settingsGyroOpenFailed") : zv.controllers.length > 0 && (vv = Pv("controller:settingsGyroConnected", {
            name: zp(zv)
          })), (0, Av.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, Av.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, Av.jsx)("div", {
                className: "ControllerSettingsHint",
                children: vv
              }), (0, Av.jsx)(Ug.d, {
                onClick: pv,
                children: Pv("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === zv.phoneMotion) return (0, Av.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, Av.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === hv && (0, Av.jsx)("div", {
              className: "ControllerSettingsHint",
              children: Pv("controller:settingsGyroAllowNeedsTap")
            }), (0, Av.jsx)(Ug.d, {
              onClick: () => {
                Pp((() => {
                  ev("needsTap")
                }))
              },
              children: Pv("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const dv = hp[zv.phoneMotion];
        return dv ? (0, Av.jsx)("div", {
          className: "ControllerSettingsHint",
          children: Pv(dv)
        }) : null
      },
      ep = () => {
        const {
          t: vv
        } = (0, Sv.x)(), zv = (0, Wv.k)(), Pv = (0, Xg.e)(), hv = (0, wv.A)(), ev = !Pv.hidSupported && Pv.phoneSupported && !Pv.padConnected, gv = (Pv.hidSupported || Pv.phoneSupported) && !ev, pv = (0, lv.f)("pause");
        return (0, Av.jsxs)(Av.Fragment, {
          children: [(0, Av.jsx)(bg, {
            text: vv("controller:settingsGyro")
          }), ev && (0, Av.jsx)("div", {
            className: "ControllerSettingsHint",
            children: vv("controller:settingsGyroPhoneNeedsController")
          }), !gv && !ev && (0, Av.jsx)("div", {
            className: "ControllerSettingsHint",
            children: vv(Pv.hidBlocked || Pv.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), gv && (0, Av.jsx)(Bg.e, {
            label: vv(Pv.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: zv.gyroAiming,
            onClick: vv => {
              var zv, Pv;
              (0, Wv.i)({
                gyroAiming: vv
              });
              const hv = null === (zv = null === (Pv = navigator.userActivation) || void 0 === Pv ? void 0 : Pv.isActive) || void 0 === zv || zv;
              if (!vv || !hv) return;
              const Sv = (0, Xg.c)(),
                ev = Sv.getStatus();
              ev.hidSupported ? Sv.connectControllerIfNoneGranted().catch((vv => {
                console.warn("Motion controller picker unavailable", vv)
              })) : "needsPermission" === ev.phoneMotion && Pp()
            },
            circleInfoText: vv(Pv.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), gv && Pv.hidSupported && (0, Av.jsx)("div", {
            className: "ControllerSettingsHint",
            children: vv("controller:settingsGyroSteamHint")
          }), gv && zv.gyroAiming && (0, Av.jsxs)(Av.Fragment, {
            children: [(0, Av.jsx)(Sp, {
              status: Pv
            }), (0, Av.jsx)(kg, {
              settingKey: "gyroSensitivity",
              label: vv("controller:settingsGyroSensitivity"),
              range: og.R,
              format: og.I
            }), (0, Av.jsx)(rg, {
              label: vv("controller:settingsGyroActivation"),
              hint: "aiming" === zv.gyroActivation && (0, Av.jsx)(Jg.d, {
                text: vv("controller:settingsGyroAimingHint", {
                  button: Jg.g
                }),
                glyph: (0, lv.f)("use")
              }),
              options: og.O,
              value: zv.gyroActivation,
              onChange: vv => {
                (0, Wv.i)({
                  gyroActivation: vv
                })
              }
            }), "button" === zv.gyroActivation && (0, Av.jsx)(rg, {
              label: vv("controller:settingsGyroButton"),
              hint: vv("controller:settingsGyroButtonHint"),
              options: og.q.filter((vv => vv !== pv || vv === zv.gyroButton)).map((vv => ({
                label: mS(hv, vv),
                value: vv
              }))),
              value: zv.gyroButton,
              onChange: vv => {
                (0, Wv.i)({
                  gyroButton: vv
                })
              }
            })]
          })]
        })
      };
    var gp = Pv(1827);
    const pp = () => {
      const {
        t: vv
      } = (0, Sv.x)(), zv = (0, Wv.k)(), Pv = (0, wv.A)();
      return (0, Av.jsxs)(Av.Fragment, {
        children: [(0, Av.jsx)(bg, {
          text: vv("controller:settingsAccessibility")
        }), (0, Av.jsx)(Bg.e, {
          label: vv("controller:settingsSwapConfirmBack"),
          checked: (0, lv.G)(zv.swapConfirmBack, Pv),
          onClick: vv => {
            (0, Wv.i)({
              swapConfirmBack: vv === (0, lv.G)(null, Pv) ? null : vv
            }), gp.f.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: vv("controller:settingsSwapConfirmBackInfo")
        }), (0, Av.jsx)(rg, {
          label: vv("controller:settingsButtonRepeat"),
          hint: vv("controller:settingsButtonRepeatHint"),
          options: og.m,
          value: zv.buttonRepeat,
          onChange: vv => {
            (0, Wv.i)({
              buttonRepeat: vv
            })
          }
        }), (0, Av.jsx)(rg, {
          label: vv("controller:settingsTapHoldTime"),
          hint: vv("controller:settingsTapHoldTimeHint"),
          options: og.qb,
          value: zv.tapHoldTime,
          onChange: vv => {
            (0, Wv.i)({
              tapHoldTime: vv
            })
          }
        }), (0, Av.jsx)(rg, {
          label: vv("controller:settingsEmoteButton"),
          hint: vv("wheel" === zv.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: og.C,
          value: zv.emoteButton,
          onChange: vv => {
            (0, Wv.i)({
              emoteButton: vv
            })
          }
        }), (0, Av.jsx)(rg, {
          label: vv("controller:settingsAttackMode"),
          hint: vv("toggle" === zv.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: og.j,
          value: zv.attackMode,
          onChange: vv => {
            (0, Wv.i)({
              attackMode: vv
            })
          }
        }), (0, Av.jsx)(Bg.e, {
          label: vv("controller:settingsLargePointer"),
          checked: zv.largePointer,
          onClick: vv => {
            (0, Wv.i)({
              largePointer: vv
            })
          },
          circleInfoText: vv("controller:settingsLargePointerInfo")
        })]
      })
    };
    var dp = Pv(8545);
    const Np = new class {
        constructor(vv) {
          this.router = vv, this.current = null
        }
        claim(vv, zv) {
          const Pv = this.current;
          Pv && (this.current = null, Pv.release(), Pv.onTakenOver());
          const hv = this.router.register({
              ...vv,
              name: "capture"
            }),
            Sv = {
              release: hv,
              onTakenOver: zv
            };
          return this.current = Sv, () => {
            this.current === Sv && (this.current = null), hv()
          }
        }
      }(Tv.b),
      lp = vv => {
        (0, Iv.useEffect)((() => {
          if (!vv) return;
          const zv = vv();
          let Pv = !1;
          const hv = () => {
              Pv || (Pv = !0, zv.onEnd())
            },
            Sv = Np.claim({
              isActive: () => !Pv,
              onFrame: vv => {
                zv.onFrame(vv, hv)
              }
            }, hv),
            ev = void 0 === zv.timeoutMs ? void 0 : window.setTimeout(hv, zv.timeoutMs),
            gv = vv => {
              "Escape" === vv.key && (vv.preventDefault(), vv.stopPropagation(), hv())
            };
          return window.addEventListener("keydown", gv, !0), () => {
            Pv = !0, Sv(), window.clearTimeout(ev), window.removeEventListener("keydown", gv, !0)
          }
        }), [vv])
      },
      Tp = vv => {
        let {
          row: zv,
          capturing: Pv,
          onCapture: hv,
          holdFillRef: ev,
          onRebind: gv,
          swapped: pv
        } = vv;
        const {
          t: dv
        } = (0, Sv.x)();
        if ("fixed" === zv.kind) return (0, Av.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, Av.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, Av.jsx)("div", {
              className: "ControlName",
              children: dv(zv.labelKey)
            }), (0, Av.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, Av.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, Av.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, Av.jsx)(jS, {
                    glyph: "move" === zv.stick ? (0, lv.o)() : (0, lv.m)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: Nv
        } = zv, Tv = (0, lv.f)(Nv), Wv = (0, lv.g)(Nv), wv = Tv !== Wv && (0, lv.c)(Nv, Wv);
        return (0, Av.jsxs)("div", {
          className: Zv()("ControlRow PadControlRow", {
            Capturing: Pv
          }),
          children: [(0, Av.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, Av.jsx)("div", {
              className: "ControlName",
              children: dv(og.g[Nv])
            }), (0, Av.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!Pv && (0, Av.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, Av.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    hv(Nv)
                  },
                  children: (0, Av.jsx)(jS, {
                    glyph: Tv
                  })
                }), wv && (0, Av.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: dv("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    gv(Nv, Wv)
                  },
                  children: (0, Av.jsx)(Kg.b, {
                    name: "arrows-rotate"
                  })
                })]
              }), Pv && (0, Av.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, Av.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, Av.jsx)("span", {
                    children: dv("controller:settingsCapturePrompt")
                  }), (0, Av.jsx)("div", {
                    ref: ev,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, Av.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    hv(null)
                  },
                  children: "\xd7"
                })]
              }), Pv && (0, Av.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, Av.jsx)(Jg.d, {
                  text: dv((0, lv.c)(Nv, (0, lv.f)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: Jg.g
                  }),
                  glyph: (0, lv.f)("menuBack")
                })
              })]
            })]
          }), pv.map((vv => (0, Av.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, Av.jsx)(Jg.d, {
              text: dv("controller:settingsSwapNotice", {
                action: dv(og.g[vv]),
                button: Jg.g
              }),
              glyph: (0, lv.f)(vv)
            })
          }, vv))), Pv && (0, Av.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${og.u}ms`
            }
          })]
        })
      },
      Wp = [],
      wp = vv => {
        let {
          layoutSetting: zv
        } = vv;
        const {
          t: Pv
        } = (0, Sv.x)(), hv = (0, Wv.k)();
        (0, wv.A)();
        const ev = (0, Iv.useRef)(null),
          [gv, pv] = (0, Iv.useState)(null),
          dv = (0, Iv.useCallback)(((vv, zv) => {
            const Pv = (0, Wv.g)().bindings;
            (0, lv.z)(vv, zv);
            const hv = (0, lv.q)(Pv, vv);
            pv(hv.length > 0 ? {
              action: vv,
              swapped: hv
            } : null)
          }), []),
          [Nv, sv] = ((vv, zv) => {
            const [Pv, hv] = (0, Iv.useState)(null), Sv = (0, Iv.useMemo)((() => Pv ? () => {
              const Sv = (0, lv.f)("menuBack"),
                ev = new og.b(Sv, (0, lv.f)("menuConfirm"), (vv => (0, lv.c)(Pv, vv)));
              return {
                onFrame: (hv, gv) => {
                  var pv;
                  const dv = hv.frame.timestampMs,
                    Nv = ev.update({
                      ...hv,
                      isDown: vv => (0, av.C)(hv.frame.values, vv)
                    }, dv);
                  null === (pv = vv.current) || void 0 === pv || pv.style.setProperty("width", 100 * ev.getBindHoldProgress(dv) + "%"), Nv && ("bind" === Nv.kind ? (Tv.b.consumeButton(Nv.button), zv(Pv, Nv.button)) : Tv.b.consumeButton(Sv), gv())
                },
                onEnd: () => {
                  hv(null)
                },
                timeoutMs: og.u
              }
            } : null), [Pv, vv, zv]);
            return lp(Sv), [Pv, hv]
          })(ev, dv),
          Cv = vv => {
            vv && pv(null), sv(vv)
          };
        (0, Iv.useEffect)((() => {
          if (!gv) return;
          const vv = window.setTimeout((() => {
            pv(null)
          }), og.nb);
          return () => {
            window.clearTimeout(vv)
          }
        }), [gv]);
        const iv = !hv.swapSticks && 0 === Object.keys(hv.bindings).length;
        return (0, Av.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, Av.jsx)("div", {
            className: "SliderText",
            children: Pv("controller:settingsRemap")
          }), (0, Av.jsx)("div", {
            className: "ControllerSettingsHint",
            children: Pv("controller:settingsRemapHint")
          }), (0, Av.jsx)(Ug.A, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: iv,
            onClick: () => {
              Cv(null), pv(null), (0, lv.D)()
            },
            children: Pv("controller:settingsResetAll")
          }), zv, og.gb.map(((vv, zv) => (0, Av.jsx)(dp.d, {
            title: Pv(vv.titleKey),
            defaultOpen: 0 === zv,
            children: vv.rows.map((vv => (0, Av.jsx)(Tp, {
              row: vv,
              capturing: "action" === vv.kind && vv.action === Nv,
              onCapture: Cv,
              holdFillRef: ev,
              onRebind: dv,
              swapped: "action" === vv.kind && (null === gv || void 0 === gv ? void 0 : gv.action) === vv.action ? gv.swapped : Wp
            }, "action" === vv.kind ? vv.action : vv.labelKey)))
          }, vv.titleKey)))]
        })
      },
      ap = vv => {
        let {
          deadzone: zv,
          dotRef: Pv,
          labelKey: hv
        } = vv;
        const {
          t: ev
        } = (0, Sv.x)();
        return (0, Av.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, Av.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, Av.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * zv + "%",
                height: 100 * zv + "%"
              }
            }), (0, Av.jsx)("div", {
              ref: Pv,
              className: "ControllerTesterDot"
            })]
          }), (0, Av.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: ev(hv)
          })]
        })
      },
      sp = (vv, zv, Pv, hv) => {
        var Sv;
        vv && (vv.style.left = 50 + 50 * Math.max(-1, Math.min(1, zv.x)) + "%", vv.style.top = 50 + 50 * Math.max(-1, Math.min(1, zv.y)) + "%", null === (Sv = vv.parentElement) || void 0 === Sv || Sv.classList.toggle("Active", hv || Math.hypot(zv.x, zv.y) > Pv))
      },
      Cp = vv => {
        const zv = {
            deadzone: vv.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          Pv = {
            deadzone: vv.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return vv.swapSticks ? {
          left: Pv,
          right: zv
        } : {
          left: zv,
          right: Pv
        }
      },
      ip = () => {
        const {
          t: vv
        } = (0, Sv.x)(), zv = (() => {
          const [vv, zv] = (0, Iv.useState)((() => gv.f.getActivePad()));
          return (0, sS.g)(gv.e, (() => {
            zv(gv.f.getActivePad())
          })), vv
        })(), Pv = Cp((0, Wv.k)()), hv = (0, Iv.useRef)(null), ev = (0, Iv.useRef)(null), pv = (0, Iv.useRef)([]), dv = (0, Iv.useRef)(null), Nv = (0, Iv.useRef)(null), [wv, sv] = (vv => {
          const [zv, Pv] = (0, Iv.useState)(!1), hv = (0, Iv.useMemo)((() => zv ? () => {
            const zv = (0, lv.f)("menuBack"),
              hv = new og.c;
            return {
              onFrame: (Pv, Sv) => {
                var ev;
                const gv = hv.update({
                  pressed: Pv.wasPressed(zv),
                  Vp: Pv.isHeld(zv)
                }, Pv.frame.timestampMs);
                null === (ev = vv.current) || void 0 === ev || ev.style.setProperty("width", 100 * gv + "%"), gv >= 1 && (Tv.b.consumeButton(zv), Sv())
              },
              onEnd: () => {
                Pv(!1)
              }
            }
          } : null), [zv, vv]);
          return lp(hv), [zv, Pv]
        })(ev);
        (0, Iv.useEffect)((() => {
          const vv = vv => {
            for (const Pv of av.P) {
              const zv = (0, av.m)(Pv),
                hv = pv.current[zv];
              if (!hv) continue;
              const Sv = vv.values[zv];
              hv.classList.toggle("Pressed", Sv >= av.w), (0, av.E)(zv) && hv.style.setProperty("--trigger-fill", `${Math.round(100*Sv)}%`)
            }
            const zv = Cp((0, Wv.g)());
            sp(dv.current, vv.leftStick, zv.left.deadzone, vv.values[(0, av.m)("LS")] >= av.w), sp(Nv.current, vv.rightStick, zv.right.deadzone, vv.values[(0, av.m)("RS")] >= av.w)
          };
          return zv || vv((0, av.u)()), gv.f.onFrame(vv)
        }), [zv]), (0, Iv.useEffect)((() => {
          zv || sv(!1)
        }), [zv, sv]), (0, Iv.useEffect)((() => {
          var vv;
          wv && (null === (vv = hv.current) || void 0 === vv || vv.scrollIntoView({
            block: "nearest"
          }))
        }), [wv]);
        const Cv = og.cb.find((vv => vv.value === (null === zv || void 0 === zv ? void 0 : zv.family)));
        return (0, Av.jsxs)("div", {
          ref: hv,
          className: Zv()("SettingBox ControllerTester", {
            Testing: wv
          }),
          children: [(0, Av.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, Av.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [zv && (0, Av.jsx)("div", {
                children: vv("controller:settingsTesterFamily", {
                  family: Cv ? vv(Cv.labelKey) : zv.family
                })
              }), zv && (0, Av.jsx)("div", {
                className: "ControllerTesterPadId",
                children: zv.id
              }), !zv && (0, Av.jsx)("div", {
                children: vv("controller:settingsTesterNoPad")
              })]
            }), (zv || wv) && (0, Av.jsx)(Ug.d, {
              className: "ControllerTesterToggle",
              onClick: () => {
                sv(!wv)
              },
              children: vv(wv ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), zv && !wv && (0, Av.jsx)("div", {
            className: "ControllerSettingsHint",
            children: vv("controller:settingsTesterHint")
          }), wv && (0, Av.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, Av.jsx)(Jg.d, {
              text: vv("controller:settingsTesterTesting", {
                button: Jg.g
              }),
              glyph: (0, lv.f)("menuBack")
            }), (0, Av.jsx)("div", {
              ref: ev,
              className: "ControllerTesterExitFill"
            })]
          }), (0, Av.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, Av.jsx)(ap, {
              deadzone: Pv.left.deadzone,
              dotRef: dv,
              labelKey: Pv.left.labelKey
            }), (0, Av.jsx)("div", {
              className: "ControllerTesterButtons",
              children: av.P.map((vv => {
                const Pv = (0, av.m)(vv);
                return (0, Av.jsx)("div", {
                  ref: vv => {
                    pv.current[Pv] = vv
                  },
                  className: (0, av.E)(Pv) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, Av.jsx)(jS, {
                    glyph: vv,
                    family: null === zv || void 0 === zv ? void 0 : zv.family
                  })
                }, vv)
              }))
            }), (0, Av.jsx)(ap, {
              deadzone: Pv.right.deadzone,
              dotRef: Nv,
              labelKey: Pv.right.labelKey
            })]
          })]
        })
      },
      cp = (0, Iv.memo)((function() {
        const {
          t: vv
        } = (0, Sv.x)(), zv = (0, Wv.k)(), [Pv, hv] = (0, Iv.useState)(!1);
        return (0, Iv.useEffect)((() => {
          if (!Pv) return;
          const vv = window.setTimeout((() => {
            hv(!1)
          }), og.nb);
          return () => {
            window.clearTimeout(vv)
          }
        }), [Pv]), (0, Av.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, Av.jsx)(bg, {
            text: vv("controller:settingsLook")
          }), (0, Av.jsx)(kg, {
            settingKey: "lookSensitivityX",
            label: vv("controller:settingsLookSensitivityX"),
            range: og.jb,
            format: og.L
          }), (0, Av.jsx)(kg, {
            settingKey: "lookSensitivityY",
            label: vv("controller:settingsLookSensitivityY"),
            range: og.jb,
            format: og.L
          }), (0, Av.jsx)(kg, {
            settingKey: "aimLookSensitivity",
            label: vv("controller:settingsAimLookSensitivity"),
            range: og.i,
            format: og.L
          }), (0, Av.jsx)(rg, {
            label: vv("controller:settingsLookCurve"),
            hint: vv("controller:settingsLookCurveHint"),
            options: og.Z,
            value: zv.lookCurve,
            onChange: vv => {
              (0, Wv.i)({
                lookCurve: vv
              })
            }
          }), (0, Av.jsx)(Bg.e, {
            label: vv("controller:settingsInvertLookX"),
            checked: zv.invertLookX,
            onClick: vv => {
              (0, Wv.i)({
                invertLookX: vv
              })
            }
          }), (0, Av.jsx)(Bg.e, {
            label: vv("controller:settingsInvertLookY"),
            checked: zv.invertLookY,
            onClick: vv => {
              (0, Wv.i)({
                invertLookY: vv
              })
            }
          }), (0, Av.jsx)(kg, {
            settingKey: "lookDeadzone",
            label: vv("controller:settingsLookDeadzone"),
            range: og.A,
            format: og.F
          }), (0, Av.jsx)(ep, {}), (0, Av.jsx)(bg, {
            text: vv("controller:settingsMovement")
          }), (0, Av.jsx)(kg, {
            settingKey: "moveDeadzone",
            label: vv("controller:settingsMoveDeadzone"),
            range: og.A,
            format: og.F
          }), (0, Av.jsx)(Bg.e, {
            label: vv("controller:settingsAutoSprint"),
            checked: zv.autoSprint,
            onClick: vv => {
              (0, Wv.i)({
                autoSprint: vv
              })
            },
            circleInfoText: vv("controller:settingsAutoSprintInfo")
          }), (0, Av.jsx)(rg, {
            label: vv("controller:settingsSneak"),
            options: og.lb,
            value: zv.sneakMode,
            onChange: vv => {
              (0, Wv.i)({
                sneakMode: vv
              })
            }
          }), (0, Av.jsx)(bg, {
            text: vv("controller:settingsButtons")
          }), (0, Av.jsx)(rg, {
            label: vv("controller:settingsPromptFamily"),
            options: og.cb,
            value: zv.promptFamily,
            onChange: vv => {
              (0, Wv.i)({
                promptFamily: vv
              })
            }
          }), (0, Av.jsx)(Bg.e, {
            label: vv("controller:settingsHideButtonHints"),
            checked: zv.hideButtonHints,
            onClick: vv => {
              (0, Wv.i)({
                hideButtonHints: vv
              })
            }
          }), (0, Av.jsx)(Bg.e, {
            label: vv("controller:settingsVibration"),
            checked: zv.vibration,
            onClick: vv => {
              (0, Wv.i)({
                vibration: vv
              }), vv && SS("preview")
            }
          }), (0, Av.jsx)(kg, {
            settingKey: "cursorSpeed",
            label: vv("controller:settingsCursorSpeed"),
            range: og.x,
            format: og.L
          }), (0, Av.jsx)(Bg.e, {
            label: vv("controller:settingsCursorMagnetism"),
            checked: zv.cursorMagnetism,
            onClick: vv => {
              (0, Wv.i)({
                cursorMagnetism: vv
              })
            }
          }), (0, Av.jsx)(Bg.e, {
            label: vv("controller:settingsMenuBackToCategories"),
            checked: zv.menuBackToCategories,
            onClick: vv => {
              (0, Wv.i)({
                menuBackToCategories: vv
              })
            }
          }), (0, Av.jsx)(wp, {
            layoutSetting: (0, Av.jsxs)(Av.Fragment, {
              children: [lv.e.map((Pv => (0, Av.jsx)(Bg.e, {
                label: vv(og.U[Pv]),
                checked: (0, lv.w)(Pv, zv),
                onClick: vv => {
                  hv(!(0, lv.H)(Pv, vv))
                }
              }, Pv))), Pv && (0, Av.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: vv("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, Av.jsx)(pp, {}), (0, Av.jsx)(bg, {
            text: vv("controller:settingsAlternatives")
          }), (0, Av.jsx)("div", {
            className: "ControllerSettingsHint",
            children: vv("controller:settingsAlternativesHint")
          }), (0, Av.jsx)(rg, {
            label: vv("controller:settingsMenuNavigation"),
            hint: vv("controller:settingsMenuNavigationHint"),
            options: og._,
            value: zv.menuNavigation,
            onChange: vv => {
              (0, Wv.i)({
                menuNavigation: vv
              })
            }
          }), (0, Av.jsx)(rg, {
            label: vv("controller:settingsInventoryNavigation"),
            hint: vv("controller:settingsInventoryNavigationHint"),
            options: og.S,
            value: zv.inventoryNavigation,
            onChange: vv => {
              (0, Wv.i)({
                inventoryNavigation: vv
              })
            }
          }), (0, Av.jsx)(rg, {
            label: vv("controller:settingsQuickChat"),
            hint: vv("controller:settingsQuickChatHint"),
            options: og.db,
            value: zv.quickChat,
            onChange: vv => {
              (0, Wv.i)({
                quickChat: vv
              })
            }
          }), (0, Av.jsx)(rg, {
            label: vv("controller:settingsLeaderboardButton"),
            hint: vv("controller:settingsLeaderboardButtonHint"),
            options: og.V,
            value: zv.leaderboardButton,
            onChange: vv => {
              (0, Wv.i)({
                leaderboardButton: vv
              })
            }
          }), (0, Av.jsx)(bg, {
            text: vv("controller:settingsTester")
          }), (0, Av.jsx)(ip, {})]
        })
      }));
    (0, Sv.c)(hv);
    for (const Fp of (0, ev.r)()) Fp.connected ? gv.f.handleConnectionEvent(Fp) : gv.f.handleDisconnectionEvent(Fp);
    const Gp = () => null !== gv.f.getActivePad(),
      mp = () => SP.getState(),
      jp = () => SP.isSteppingSlots(),
      fp = (vv, zv) => {
        const Pv = Xh.getFocused();
        Xh.isActive() && Pv && vv.contains(Pv) && Xh.setFocus(zv, {
          scroll: !1
        })
      }
  },
  7855: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => dv,
      f: () => Nv
    });
    var hv = Pv(1411),
      Sv = Pv(1403);
    const ev = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      gv = "28de",
      pv = new Set(["1205"]),
      dv = (vv, zv) => {
        const Pv = (0, hv.d)(vv);
        if ((null === Pv || void 0 === Pv ? void 0 : Pv.vendor) === gv) return pv.has(Pv.product) ? "steamdeck" : "xbox";
        if (Pv && ev[Pv.vendor]) return ev[Pv.vendor];
        if ((0, Sv.d)(vv)) return "nintendo";
        const dv = `${vv} ${null!==zv&&void 0!==zv?zv:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(dv) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(dv) ? "nintendo" : /steam deck/.test(dv) ? "steamdeck" : "xbox"
      },
      Nv = vv => {
        var zv;
        return (null === (zv = (0, hv.d)(vv)) || void 0 === zv ? void 0 : zv.vendor) === gv
      }
  },
  7901: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Nv,
      d: () => pv
    });
    var hv = Pv(7848);
    const Sv = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      ev = new Set(["capture", "gameplay"]),
      gv = ["Up", "Down", "Left", "Right"],
      pv = vv => gv.includes(vv),
      dv = .25;
    const Nv = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.Vp = new Array(hv.O).fill(!1), this.previousHeld = new Array(hv.O).fill(!1), this.consumedButtons = new Array(hv.O).fill(!1), this.suppressedReleases = new Array(hv.O).fill(!1), this.wakeOwned = new Array(hv.O).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, hv.u)()
      }
      register(vv) {
        return this.consumers.has(vv.name) && console.warn(`Controller consumer "${vv.name}" registered twice; the newer one replaces it.`), this.consumers.set(vv.name, vv), () => {
          var zv;
          this.consumers.get(vv.name) === vv && (this.activeName === vv.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (zv = this.peek) || void 0 === zv ? void 0 : zv.over) === vv.name && (this.peek = null), this.consumers.delete(vv.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(vv) {
        return this.Vp[(0, hv.m)(vv)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.Vp = new Array(hv.O).fill(!1), this.previousHeld = new Array(hv.O).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, hv.u)()
      }
      dispatch(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = vv, this.previousHeld = this.Vp, this.Vp = (0, hv.r)(vv.values, this.previousHeld);
        for (let ev = 0; ev < hv.O; ev++) this.suppressedReleases[ev] = !this.Vp[ev] && this.consumedButtons[ev], this.Vp[ev] || (this.consumedButtons[ev] = !1), this.wakeOwned[ev] && (this.Vp[ev] ? (this.consumedButtons[ev] = !0, this.wakeOwned[ev] = !1) : vv.values[ev] < hv.N && (this.wakeOwned[ev] = !1));
        Math.hypot(vv.leftStick.x, vv.leftStick.y) < dv && (this.leftStickConsumed = !1), Math.hypot(vv.rightStick.x, vv.rightStick.y) < dv && (this.rightStickConsumed = !1);
        const Sv = this.pickActive();
        if ((null === Sv || void 0 === Sv ? void 0 : Sv.name) !== this.activeName) {
          var gv, pv, Nv, lv, Tv, Wv;
          const vv = this.activeName,
            zv = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            Pv = null !== (gv = null === Sv || void 0 === Sv || null === (pv = Sv.peek) || void 0 === pv ? void 0 : pv.call(Sv)) && void 0 !== gv ? gv : null,
            ev = null === vv && !!Pv && !(null === (Nv = this.consumers.get(Pv.over)) || void 0 === Nv || !Nv.onPeekFrame),
            dv = Pv && (Pv.over === vv || ev) ? Pv : null,
            wv = null !== this.peek && this.peek.over === (null === Sv || void 0 === Sv ? void 0 : Sv.name) ? this.peek : null;
          this.deactivateCurrent(null !== dv, null !== wv), this.activeName = null !== (lv = null === Sv || void 0 === Sv ? void 0 : Sv.name) && void 0 !== lv ? lv : null, null === vv || this.handOffPending || this.consumeAllHeld();
          const av = null === (Tv = null !== dv && void 0 !== dv ? dv : wv) || void 0 === Tv ? void 0 : Tv.stick;
          "left" === av && zv.left ? this.leftStickConsumed = !1 : "right" === av && zv.right && (this.rightStickConsumed = !1), this.peek = dv, Sv || null === vv ? Sv && (null === (Wv = this.idleResume) || void 0 === Wv ? void 0 : Wv.name) === Sv.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: vv,
            left: zv.left && this.leftStickConsumed,
            right: zv.right && this.rightStickConsumed
          }, Sv && (this.idleResume = null);
          for (let Sv = 0; Sv < hv.O; Sv++) this.previousHeld[Sv] && !this.Vp[Sv] && (this.suppressedReleases[Sv] = !0)
        }
        var wv, av;
        (this.handOffPending = !1, Sv) && (Pv && !ev.has(Sv.name) && this.consumeWakePress(Sv), Sv.onFrame(this.buildInput(vv, zv, Pv)), this.peek && (null === (wv = this.consumers.get(this.peek.over)) || void 0 === wv || null === (av = wv.onPeekFrame) || void 0 === av || av.call(wv, this.buildInput(vv, zv, !1, this.peek.stick))))
      }
      consumeWakePress(vv) {
        for (let Sv = 0; Sv < hv.O; Sv++) {
          var zv, Pv;
          const ev = hv.P[Sv];
          (null !== (zv = null === (Pv = vv.wakePressActs) || void 0 === Pv ? void 0 : Pv.call(vv, ev)) && void 0 !== zv ? zv : gv.includes(ev)) || (this.Vp[Sv] ? this.consumedButtons[Sv] = !0 : this.lastFrame.values[Sv] >= hv.J && (this.wakeOwned[Sv] = !0))
        }
      }
      pickActive() {
        for (const vv of Sv) {
          const zv = this.consumers.get(vv);
          if (zv && zv.isActive()) return zv
        }
        return null
      }
      deactivateCurrent() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var Pv, hv, Sv, ev;
        this.activeName && (null === (Pv = this.consumers.get(this.activeName)) || void 0 === Pv || null === (hv = Pv.onDeactivate) || void 0 === hv || hv.call(Pv, vv));
        this.peek && !zv && (null === (Sv = this.consumers.get(this.peek.over)) || void 0 === Sv || null === (ev = Sv.onDeactivate) || void 0 === ev || ev.call(Sv, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let Sv = 0; Sv < hv.O; Sv++) this.Vp[Sv] && (this.consumedButtons[Sv] = !0);
        const {
          leftStick: zv,
          rightStick: Pv
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== vv && (this.leftStickConsumed || Math.hypot(zv.x, zv.y) >= dv), this.rightStickConsumed = "right" !== vv && (this.rightStickConsumed || Math.hypot(Pv.x, Pv.y) >= dv)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(vv) {
        const zv = (0, hv.m)(vv);
        this.Vp[zv] && (this.consumedButtons[zv] = !0)
      }
      buildInput(vv, zv, Pv, Sv) {
        const ev = this.Vp,
          gv = this.previousHeld,
          pv = Sv ? new Array(hv.O).fill(!0) : [...this.consumedButtons],
          dv = Sv ? pv : [...this.suppressedReleases],
          Nv = !this.leftStickConsumed && (!Sv || "left" === Sv),
          lv = !this.rightStickConsumed && (!Sv || "right" === Sv);
        return {
          frame: vv,
          dtMs: zv,
          isHeld: vv => {
            const zv = (0, hv.m)(vv);
            return ev[zv] && !pv[zv]
          },
          wasPressed: vv => {
            const zv = (0, hv.m)(vv);
            return ev[zv] && !gv[zv] && !pv[zv]
          },
          wasReleased: vv => {
            const zv = (0, hv.m)(vv);
            return !ev[zv] && gv[zv] && !dv[zv]
          },
          value: zv => {
            const Pv = (0, hv.m)(zv);
            return pv[Pv] ? 0 : vv.values[Pv]
          },
          leftStick: Nv ? vv.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: lv ? vv.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: Pv
        }
      }
    }
  },
  7872: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Tv.i,
      e: () => Tv.l,
      g: () => Dv,
      h: () => Kv,
      i: () => Vv,
      k: () => Uv
    });
    var hv = Pv(52),
      Sv = Pv(26),
      ev = Pv(1439),
      gv = Pv(39),
      pv = Pv(7879),
      dv = Pv(7848),
      Nv = Pv(7864),
      lv = Pv(7845),
      Tv = Pv(1963),
      Wv = Pv(7887);
    const wv = {
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
      av = "controllerSettings",
      sv = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      Cv = ["auto", ...pv.e],
      iv = (vv, zv) => "string" === typeof zv && vv.includes(zv),
      cv = vv => zv => "number" === typeof zv && Number.isFinite(zv) ? (0, Wv.v)(zv, vv) : void 0,
      Gv = vv => "boolean" === typeof vv ? vv : void 0,
      mv = vv => zv => iv(vv, zv) ? zv : void 0,
      jv = {
        lookSensitivityX: cv(Wv.jb),
        lookSensitivityY: cv(Wv.jb),
        aimLookSensitivity: cv(Wv.i),
        invertLookX: Gv,
        invertLookY: Gv,
        lookCurve: mv(dv.H),
        lookDeadzone: cv(Wv.A),
        moveDeadzone: cv(Wv.A),
        swapSticks: Gv,
        autoSprint: Gv,
        sneakMode: mv(["toggle", "hold"]),
        tapHoldTime: mv(["short", "medium", "long"]),
        attackMode: mv(["hold", "toggle"]),
        promptFamily: mv(Cv),
        hideButtonHints: Gv,
        vibration: Gv,
        cursorSpeed: cv(Wv.x),
        cursorMagnetism: Gv,
        buttonRepeat: mv(dv.o),
        largePointer: Gv,
        menuBackToCategories: Gv,
        swapConfirmBack: Gv,
        menuNavigation: mv(["hybrid", "focus", "cursor"]),
        inventoryNavigation: mv(["hybrid", "slot", "cursor"]),
        quickChat: mv(["wheel", "off"]),
        leaderboardButton: mv(["shop", "leaderboard"]),
        gyroAiming: Gv,
        gyroSensitivity: cv(Wv.R),
        gyroActivation: mv(["always", "aiming", "button"]),
        gyroButton: mv(dv.P),
        emoteButton: mv(["tapHold", "wheel"])
      },
      fv = [{
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
      Fv = vv => {
        const zv = {};
        if ("object" !== typeof vv || null === vv) return zv;
        for (const [Pv, hv] of Object.entries(vv)) Object.prototype.hasOwnProperty.call(Nv.g, Pv) && iv(dv.P, hv) && (zv[Pv] = hv);
        return zv
      },
      Yv = vv => {
        const zv = {};
        for (const Pv of Object.keys(wv))("bindings" === Pv ? Object.keys(vv.bindings).length > 0 : vv[Pv] !== wv[Pv]) && (zv[Pv] = vv[Pv]);
        0 !== Object.keys(zv).length ? gv.h.setItem(av, zv) : gv.h.removeItem(av)
      };
    let nv = (() => {
        const vv = gv.h.getItem(av),
          zv = (vv => {
            const zv = "object" === typeof vv && null !== vv ? vv : {},
              Pv = {
                ...wv,
                bindings: Fv(zv.bindings)
              };
            for (const Sv of Object.keys(jv)) {
              const vv = jv[Sv](zv[Sv]);
              void 0 !== vv && (Pv[Sv] = vv)
            }
            const hv = Object.keys(zv).filter((vv => !!Object.prototype.hasOwnProperty.call(wv, vv) && ("bindings" === vv ? "object" !== typeof zv.bindings || null === zv.bindings || Object.keys(zv.bindings).length !== Object.keys(Pv.bindings).length : Pv[vv] !== zv[vv])));
            return hv.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${hv.join(", ")}`), Pv
          })(vv);
        return null !== vv && void 0 !== vv && Yv(zv), zv
      })(),
      Ov = {
        ...nv,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const vv = {},
            zv = new URLSearchParams(window.location.search);
          for (const {
              param: Pv,
              key: hv
            }
            of fv) {
            const Sv = jv[hv](zv.get(Pv));
            void 0 !== Sv && (vv[hv] = Sv)
          }
          return vv
        })()
      };
    const Dv = () => Ov,
      Kv = () => {
        var vv, zv;
        const Pv = Dv().promptFamily;
        return "auto" !== Pv ? Pv : null !== (vv = null === (zv = lv.f.getActivePad()) || void 0 === zv ? void 0 : zv.family) && void 0 !== vv ? vv : "xbox"
      },
      Vv = vv => {
        const zv = Ov;
        nv = {
          ...nv,
          ...vv
        }, Yv(nv), Ov = {
          ...Ov,
          ...vv
        }, (vv => {
          Sv.j.zC(Tv.l, Ov), sv.some((zv => vv[zv] !== Ov[zv])) && Sv.j.zC(Tv.i, Ov)
        })(zv)
      },
      Uv = () => {
        const [vv, zv] = (0, hv.useState)(Ov);
        return (0, ev.g)(Tv.l, zv), vv
      }
  },
  8338: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Sv
    });
    const hv = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      Sv = vv => hv.has(vv)
  },
  7845: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => sv.e,
      f: () => Gv
    });
    var hv = Pv(7848),
      Sv = Pv(7855);
    const ev = .1,
      gv = .3;
    class pv {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(vv, zv) {
        const Pv = null === this.lastMs ? 0 : Math.min(Math.max(0, zv - this.lastMs), 100);
        this.lastMs = zv;
        const hv = Math.hypot(vv.x, vv.y);
        if (hv >= gv) return this.anchor = null, void(this.returning = !0);
        hv >= ev || (this.returning = !1);
        const Sv = this.anchor;
        if (!Sv || Math.hypot(vv.x - Sv.x, vv.y - Sv.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: vv.x,
          y: vv.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += Pv, this.steadyMs < 1e3) return;
        const pv = Math.max(hv, Math.hypot(Sv.x, Sv.y));
        pv < ev ? this.deadzone = 0 : this.returning && (this.deadzone = pv + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(vv) {
        return Math.hypot(vv.x, vv.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : vv
      }
    }
    const dv = (vv, zv) => {
        var Pv, hv;
        return null !== (Pv = vv && (null === (hv = Object.getOwnPropertyDescriptor(vv, zv)) || void 0 === hv ? void 0 : hv.get)) && void 0 !== Pv ? Pv : null
      },
      Nv = vv => {
        const zv = vv.vendorName;
        return "string" === typeof zv ? zv : void 0
      },
      lv = ((vv, zv) => {
        const Pv = dv(vv, "index"),
          hv = dv(vv, "id"),
          Sv = dv(vv, "connected"),
          ev = dv(vv, "mapping"),
          gv = dv(vv, "buttons"),
          pv = dv(vv, "axes"),
          lv = dv(zv, "pressed"),
          Tv = dv(zv, "value");
        return Pv && hv && Sv && ev && gv && pv && lv && Tv ? vv => {
          const zv = gv.call(vv),
            dv = pv.call(vv),
            Wv = {
              index: Number(Pv.call(vv)),
              id: String(hv.call(vv)),
              connected: !0 === Sv.call(vv),
              mapping: String(ev.call(vv)),
              buttons: [],
              axes: [],
              vendorName: Nv(vv)
            };
          for (let Pv = 0; Pv < zv.length; Pv++) Wv.buttons.push({
            pressed: !0 === lv.call(zv[Pv]),
            value: Number(Tv.call(zv[Pv]))
          });
          for (let Pv = 0; Pv < dv.length; Pv++) Wv.axes.push(Number(dv[Pv]));
          return Wv
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      Tv = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var Wv = Pv(1395),
      wv = Pv(1403);
    const av = vv => ({
      pressed: vv,
      value: vv ? 1 : 0
    });
    var sv = Pv(1963);
    const Cv = gv,
      iv = vv => {
        const zv = new Array(hv.O).fill(0);
        for (let Pv = 0; Pv < hv.O && Pv < vv.buttons.length; Pv++) {
          const Sv = vv.buttons[Pv];
          zv[Pv] = Sv.pressed && !(0, hv.E)(Pv) ? Math.max(Sv.value, hv.w) : Sv.value
        }
        return zv
      },
      cv = (vv, zv) => {
        var Pv, hv;
        return {
          x: null !== (Pv = vv.axes[zv]) && void 0 !== Pv ? Pv : 0,
          y: null !== (hv = vv.axes[zv + 1]) && void 0 !== hv ? hv : 0
        }
      };
    const Gv = new class {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lv;
        this.readGamepads = vv, this.requireTrustedPads = zv, this.nativeReader = Pv, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = vv => {
          vv.isTrusted && this.trustedIndices.add(vv.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = vv => {
          this.trustedIndices.delete(vv.gamepad.index)
        }, this.MT = vv => {
          if (this.rafId = 0, !this.running) return;
          const zv = 0 === this.lastTimestampMs ? 16 : Math.min(100, vv - this.lastTimestampMs);
          this.lastTimestampMs = vv;
          try {
            this.poll(vv, zv)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.MT))
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
      onFrame(vv) {
        return this.frameListeners.add(vv), () => {
          this.frameListeners.delete(vv)
        }
      }
      onActivePadChanged(vv) {
        return this.connectionListeners.add(vv), () => {
          this.connectionListeners.delete(vv)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(vv) {
        return this.connectedListeners.add(vv), () => {
          this.connectedListeners.delete(vv)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const vv = this.readPads()[this.activeInfo.index],
          zv = vv ? this.readPad(vv) : null;
        return zv && zv.id === this.activeInfo.id ? vv : null
      }
      poll(vv, zv) {
        var Pv, Sv;
        const ev = this.readPads();
        let gv = null,
          dv = !1;
        const Nv = [],
          lv = Math.max(ev.length, this.slots.length);
        for (let Gv = 0; Gv < lv; Gv++) {
          var Tv;
          const zv = Gv < ev.length ? ev[Gv] : null,
            Pv = zv ? this.readPad(zv) : null;
          if (!Pv || !Pv.connected || !this.isUsable(Pv)) {
            this.slots[Gv] = null;
            continue
          }
          let Sv = this.slots[Gv];
          Sv && Sv.id === Pv.id || (Sv = {
            id: Pv.id,
            Vp: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new pv,
            rightRest: new pv
          }, this.slots[Gv] = Sv);
          const lv = cv(Pv, 0),
            Wv = cv(Pv, 2);
          !Sv.leftSettled && Math.hypot(lv.x, lv.y) < Cv && (Sv.leftSettled = !0), !Sv.rightSettled && Math.hypot(Wv.x, Wv.y) < Cv && (Sv.rightSettled = !0), Sv.leftRest.observe(lv, vv), Sv.rightRest.observe(Wv, vv);
          const wv = iv(Pv),
            av = (0, hv.r)(wv, Sv.Vp),
            sv = Sv.Vp,
            mv = av.map(((vv, zv) => vv && !sv[zv]));
          Sv.Vp = av;
          const jv = {
            pad: Pv,
            slot: Sv,
            values: wv
          };
          Gv === (null === (Tv = this.activeInfo) || void 0 === Tv ? void 0 : Tv.index) && Pv.id === this.activeInfo.id ? (gv = jv, dv = mv.includes(!0)) : mv.includes(!0) && Nv.push({
            polled: jv,
            rose: mv
          })
        }
        const Wv = this.slots.some((vv => null !== vv));
        if (Wv !== this.anyPadConnected) {
          this.anyPadConnected = Wv;
          for (const vv of this.connectedListeners) vv()
        }
        const wv = null !== (Pv = null === (Sv = gv) || void 0 === Sv ? void 0 : Sv.slot.Vp) && void 0 !== Pv ? Pv : [],
          av = dv ? void 0 : Nv.find((vv => {
            let {
              rose: zv
            } = vv;
            return zv.some(((vv, zv) => vv && !wv[zv]))
          }));
        if (av ? (gv = av.polled, this.setActive(av.polled.pad)) : this.activeInfo && !gv && this.setActive(null), !gv || !this.activeInfo) return;
        const sv = ((vv, zv) => {
          let {
            pad: Pv,
            slot: Sv,
            values: ev
          } = vv;
          const gv = (0, hv.u)(zv);
          return gv.values = ev, Sv.leftSettled && (gv.leftStick = Sv.leftRest.apply(cv(Pv, 0))), Sv.rightSettled && (gv.rightStick = Sv.rightRest.apply(cv(Pv, 2))), gv
        })(gv, vv);
        for (const hv of this.frameListeners) hv(sv, zv, this.activeInfo)
      }
      readPad(vv) {
        const zv = this.readSnapshot(vv);
        return zv && (0, wv.e)(zv) ? (vv => {
          const zv = zv => {
              var Pv;
              return null !== (Pv = vv.buttons[zv]) && void 0 !== Pv ? Pv : av(!1)
            },
            Pv = zv => {
              var Pv;
              return null !== (Pv = vv.axes[zv]) && void 0 !== Pv ? Pv : 0
            },
            hv = vv.axes.length > 9,
            Sv = hv ? (vv => {
              const zv = 0 !== vv;
              return {
                up: zv && (vv >= -1 && vv < -.7 || vv >= .95 && vv <= 1),
                right: zv && vv >= -.75 && vv < -.1,
                down: zv && vv >= -.2 && vv < .45,
                left: zv && vv >= .4 && vv <= 1
              }
            })(Pv(9)) : {
              up: Pv(5) < -.5,
              down: Pv(5) > .5,
              left: Pv(4) < -.5,
              right: Pv(4) > .5
            };
          return {
            ...vv,
            mapping: "standard",
            buttons: [zv(1), zv(2), zv(0), zv(3), zv(4), zv(5), zv(6), zv(7), zv(8), zv(9), zv(10), zv(11), av(Sv.up), av(Sv.down), av(Sv.left), av(Sv.right), zv(12)],
            axes: [Pv(0), Pv(1), Pv(2), Pv(hv ? 5 : 3)]
          }
        })(zv) : zv
      }
      readSnapshot(vv) {
        if (this.nativeReader) try {
          return this.nativeReader(vv)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (vv => {
          const zv = vv;
          return {
            index: zv.index,
            id: zv.id,
            connected: zv.connected,
            mapping: zv.mapping,
            buttons: Array.from(zv.buttons, (vv => ({
              pressed: vv.pressed,
              value: vv.value
            }))),
            axes: Array.from(zv.axes),
            vendorName: Nv(vv)
          }
        })(vv)
      }
      isUsable(vv) {
        return !(0, Wv.h)(vv.id) && ("standard" !== vv.mapping ? (this.warnedNonStandardIds.has(vv.id) || (this.warnedNonStandardIds.add(vv.id), console.warn(`Controller "${vv.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(vv.index))
      }
      setActive(vv) {
        this.activeInfo = vv ? {
          index: vv.index,
          id: vv.id,
          family: (0, Sv.b)(vv.id, vv.vendorName)
        } : null;
        for (const zv of this.connectionListeners) zv(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (vv) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", vv)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.MT))
      }
    }((() => Tv ? Tv.call(navigator) : []), !0);
    Gv.listenForConnections()
  },
  8347: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => hv
    });
    const hv = {
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
  8452: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      g: () => pv
    });
    var hv = Pv(26),
      Sv = Pv(8438);
    let ev = !1;
    const gv = () => ev,
      pv = vv => {
        vv !== ev && (ev = vv, hv.j.zC(Sv.j, ev))
      }
  },
  8446: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pv,
      f: () => dv
    });
    var hv = Pv(26),
      Sv = Pv(8438);
    let ev = null,
      gv = 0;
    const pv = () => ev,
      dv = vv => {
        null === vv && null === ev || (ev = null === vv ? null : {
          id: ++gv,
          holdMs: vv
        }, hv.j.zC(Sv.m, ev))
      }
  },
  8461: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      i: () => pv
    });
    var hv = Pv(26),
      Sv = Pv(8438);
    let ev = !1;
    const gv = () => ev,
      pv = vv => {
        vv !== ev && (ev = vv, hv.j.zC(Sv.q, ev))
      }
  },
  8513: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => gv,
      e: () => pv
    });
    var hv = Pv(26),
      Sv = Pv(8438);
    let ev = !1;
    const gv = () => ev,
      pv = vv => {
        vv !== ev && (ev = vv, hv.j.zC(Sv.t, ev))
      }
  },
  8396: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv
    });
    class hv {
      constructor() {
        this.downAtMs = null
      }
      update(vv, zv, Pv, hv) {
        if (vv) return this.downAtMs = Pv, null;
        if (null === this.downAtMs) return null;
        const Sv = Pv - this.downAtMs >= hv;
        return zv ? Sv ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, Sv ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  7910: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Tv,
      c: () => Wv,
      e: () => pv,
      g: () => Gv,
      j: () => cv
    });
    var hv = Pv(39),
      Sv = Pv(7879),
      ev = Pv(7848);
    const gv = (() => {
        try {
          return Pv(7914)
        } catch {
          return null
        }
      })(),
      pv = [...ev.P, "LeftStick", "RightStick"],
      dv = new Map,
      Nv = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      lv = (new Set(Object.values(Nv)), {
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
      Tv = (vv, zv) => {
        var Pv, hv;
        return null !== (Pv = null === (hv = lv[Nv[vv]]) || void 0 === hv ? void 0 : hv[zv]) && void 0 !== Pv ? Pv : 1
      },
      Wv = (vv, zv) => {
        const Pv = `./${Nv[vv]}/${zv}.svg`;
        let hv = dv.get(Pv);
        return void 0 === hv && (hv = gv ? gv(Pv) : "", dv.set(Pv, hv)), hv
      },
      wv = new Set,
      av = [],
      sv = vv => {
        if (!wv.has(vv)) {
          wv.add(vv);
          for (const zv of pv) {
            const Pv = Wv(vv, zv);
            if (Pv) {
              const vv = new Image;
              vv.crossOrigin = "anonymous", vv.src = Pv, av.push(vv)
            }
          }
        }
      },
      Cv = "controllerGlyphFamily";
    let iv = null;
    const cv = vv => {
        vv !== iv && (iv = vv, hv.h.setItem(Cv, vv), sv(vv))
      },
      Gv = () => {
        const vv = hv.h.getItem(Cv);
        (0, Sv.h)(vv) && vv !== iv && (iv = vv, sv(vv))
      }
  },
  8536: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Zv,
      e: () => Av
    });
    var hv = Pv(52),
      Sv = Pv(26),
      ev = Pv(1439),
      gv = Pv(7861),
      pv = Pv(7845),
      dv = Pv(7901),
      Nv = Pv(7872);
    const lv = {
        x: 0,
        y: 0,
        z: 0
      },
      Tv = Math.PI / 180,
      Wv = vv => Math.hypot(vv.x, vv.y, vv.z),
      wv = (vv, zv) => ({
        x: vv.x * zv,
        y: vv.y * zv,
        z: vv.z * zv
      }),
      av = (vv, zv) => ({
        x: vv.x + zv.x,
        y: vv.y + zv.y,
        z: vv.z + zv.z
      }),
      sv = (vv, zv) => ({
        x: vv.x - zv.x,
        y: vv.y - zv.y,
        z: vv.z - zv.z
      }),
      Cv = vv => {
        const zv = Wv(vv);
        return 0 === zv ? lv : wv(vv, 1 / zv)
      },
      iv = vv => ({
        min: {
          ...vv
        },
        max: {
          ...vv
        }
      }),
      cv = (vv, zv) => ({
        min: {
          x: Math.min(vv.min.x, zv.x),
          y: Math.min(vv.min.y, zv.y),
          z: Math.min(vv.min.z, zv.z)
        },
        max: {
          x: Math.max(vv.max.x, zv.x),
          y: Math.max(vv.max.y, zv.y),
          z: Math.max(vv.max.z, zv.z)
        }
      }),
      Gv = (vv, zv) => vv.max.x - vv.min.x <= zv && vv.max.y - vv.min.y <= zv && vv.max.z - vv.min.z <= zv;
    class mv {
      constructor() {
        this.bias = lv, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = lv, this.windowSec = 0
      }
      update(vv) {
        const zv = this.gyroRange ? cv(this.gyroRange, vv.gyro) : iv(vv.gyro),
          Pv = vv.accel ? this.accelRange ? cv(this.accelRange, vv.accel) : iv(vv.accel) : null;
        if (!Gv(zv, 1) || Pv && !Gv(Pv, .01)) return void this.restartWindow(vv);
        if (this.gyroRange = zv, this.accelRange = Pv, this.sum = av(this.sum, wv(vv.gyro, vv.dtSec)), this.windowSec += vv.dtSec, this.windowSec < 1) return;
        const hv = wv(this.sum, 1 / this.windowSec);
        if (Wv(hv) > 5) return;
        const Sv = sv(hv, this.bias);
        let ev = 0;
        !this.calibrated || this.windowSec >= 3 ? ev = 1 : Wv(Sv) <= 1 && (ev = Math.min(1, vv.dtSec / 1)), this.bias = av(this.bias, wv(Sv, ev)), this.calibrated = this.calibrated || ev > 0
      }
      correct(vv) {
        return sv(vv, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = lv, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = lv, this.windowSec = 0
      }
      restartWindow(vv) {
        this.gyroRange = iv(vv.gyro), this.accelRange = vv.accel ? iv(vv.accel) : null, this.sum = lv, this.windowSec = 0
      }
    }
    class jv {
      constructor() {
        this.down = null
      }
      update(vv, zv, Pv) {
        const hv = Cv(wv(zv, -1));
        if (!this.down) return this.down = hv, hv;
        const Sv = wv(vv, Tv * Pv),
          ev = this.down,
          gv = {
            x: ev.x - (Sv.y * ev.z - Sv.z * ev.y),
            y: ev.y - (Sv.z * ev.x - Sv.x * ev.z),
            z: ev.z - (Sv.x * ev.y - Sv.y * ev.x)
          },
          pv = 0 === Wv(hv) ? 0 : Math.min(1, Pv / .25);
        var dv, Nv;
        return this.down = Cv((Nv = pv, av(dv = gv, wv(sv(hv, dv), Nv)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class fv {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(vv, zv, Pv) {
        const hv = Math.hypot(vv, zv),
          Sv = Math.max(0, Math.min(1, (hv - 2) / 2)),
          ev = {
            yaw: vv * (1 - Sv),
            pitch: zv * (1 - Sv),
            dtSec: Pv
          };
        for (this.entries.push(ev), this.windowSec += Pv; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let gv = 0,
          pv = 0;
        for (const Nv of this.entries) gv += Nv.yaw * Nv.dtSec, pv += Nv.pitch * Nv.dtSec;
        const dv = this.windowSec > 0 ? {
          yaw: gv / this.windowSec,
          pitch: pv / this.windowSec
        } : {
          yaw: ev.yaw,
          pitch: ev.pitch
        };
        return {
          yaw: vv * Sv + dv.yaw,
          pitch: zv * Sv + dv.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class Fv {
      constructor() {
        this.calibrator = new mv, this.gravity = new jv, this.smoother = new fv
      }
      process(vv, zv, Pv) {
        const hv = Math.max(0, Math.min(.05, zv));
        this.calibrator.update({
          ...vv,
          dtSec: hv
        });
        const Sv = this.calibrator.correct(vv.gyro);
        let ev = Sv.y;
        "player" === Pv && vv.accel && (ev = ((vv, zv) => {
          const Pv = vv.y * zv.y + vv.z * zv.z;
          return -Math.sign(Pv) * Math.min(1.41 * Math.abs(Pv), Math.hypot(vv.y, vv.z))
        })(Sv, this.gravity.update(Sv, vv.accel, hv)));
        const gv = this.smoother.apply(ev, Sv.x, hv),
          pv = ((vv, zv) => {
            const Pv = Math.hypot(vv, zv);
            if (Pv >= 1) return {
              yaw: vv,
              pitch: zv
            };
            const hv = Pv / 1;
            return {
              yaw: vv * hv,
              pitch: zv * hv
            }
          })(gv.yaw, gv.pitch);
        return {
          yawDeg: pv.yaw * hv,
          pitchDeg: pv.pitch * hv
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
    const Yv = (vv, zv) => {
      var Pv, hv, Sv;
      const ev = zv * Tv,
        gv = null !== (Pv = vv.beta) && void 0 !== Pv ? Pv : 0,
        pv = null !== (hv = vv.gamma) && void 0 !== hv ? hv : 0;
      return {
        x: gv * Math.cos(ev) - pv * Math.sin(ev),
        y: gv * Math.sin(ev) + pv * Math.cos(ev),
        z: null !== (Sv = vv.alpha) && void 0 !== Sv ? Sv : 0
      }
    };
    var nv = Pv(8540);
    class Ov {
      constructor(vv, zv, Pv) {
        this.hid = vv, this.sink = zv, this.onControllersChanged = Pv, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = vv => {
          this.openController(vv.device).catch((vv => {
            console.warn("Could not open motion controller", vv)
          }))
        }, this.onDisconnect = vv => {
          this.opening.has(vv.device) && this.disconnectedWhileOpening.add(vv.device);
          const zv = this.controllers.get(vv.device);
          zv && (this.forget(zv), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const vv = await this.hid.getDevices();
        for (const zv of vv) await this.openController(zv).catch((vv => {
          console.warn("Could not open motion controller", vv)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const vv of [...this.controllers.values()]) this.forget(vv);
        this.onControllersChanged()
      }
      async request() {
        const vv = await this.hid.requestDevice({
          filters: nv.m
        });
        let zv = 0;
        for (const Pv of vv) await this.openController(Pv).catch((vv => {
          console.warn("Could not open motion controller", vv), zv++
        }));
        return zv
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((vv => null !== (0, nv.h)(vv.vendorId, vv.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((vv => vv.kind))
      }
      forget(vv) {
        vv.device.removeEventListener("inputreport", vv.onReport), this.controllers.get(vv.device) === vv && this.controllers.delete(vv.device)
      }
      async openController(vv) {
        const zv = (0, nv.h)(vv.vendorId, vv.productId);
        if (!zv || !this.running || this.controllers.has(vv) || this.opening.has(vv)) return;
        this.opening.add(vv);
        let Pv = !1;
        try {
          vv.opened || await vv.open()
        } finally {
          this.opening.delete(vv), Pv = this.disconnectedWhileOpening.delete(vv)
        }
        if (Pv) return void vv.close().catch((vv => {
          console.debug("Could not close an unplugged motion controller", vv)
        }));
        if (!this.running) return;
        const hv = {
          device: vv,
          kind: zv,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: vv => {
            this.onReport(hv, vv)
          }
        };
        this.controllers.set(vv, hv), vv.addEventListener("inputreport", hv.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(hv)
        } catch (Sv) {
          console.warn(`Could not turn on motion for ${zv}`, Sv), this.controllers.get(vv) === hv && (this.forget(hv), this.onControllersChanged())
        }
      }
      async enableMotion(vv) {
        let {
          device: zv,
          kind: Pv
        } = vv;
        if ((0, nv.k)(Pv))
          for (const hv of nv.v[Pv]) await zv.receiveFeatureReport(hv).catch((vv => {
            console.debug(`Motion controller feature report ${hv} unavailable`, vv)
          }));
        else
          for (let hv = 0; hv < 2; hv++)
            for (const {
                subcommand: vv,
                args: Pv
              }
              of nv.x) await zv.sendReport(nv.y, (0, nv.e)(this.switchPacketCounter++, vv, Pv)), await new Promise((vv => {
              setTimeout(vv, 60)
            }))
      }
      onReport(vv, zv) {
        const Pv = (0, nv.r)(vv.kind, zv.reportId, zv.data, vv.device.productId);
        if (!Pv) return;
        const hv = null === vv.lastEventMs ? 0 : (zv.timeStamp - vv.lastEventMs) / 1e3;
        vv.lastEventMs = zv.timeStamp;
        let Sv = Pv.dtSec;
        if (null !== Sv && hv > 0 && (Sv = Math.max(.001, Math.min(.017, hv / Pv.readings.length))), null === Sv && null !== Pv.sensorClock && (0, nv.k)(vv.kind)) {
          const zv = (0, nv.t)(vv.kind, vv.lastClock, Pv.sensorClock);
          vv.lastClock = Pv.sensorClock, Sv = 0 === zv ? null : zv
        }
        if (vv.lastReadingMs = zv.timeStamp, this.isPreferred(vv, zv.timeStamp))
          for (const gv of Pv.readings) {
            var ev;
            this.sink(gv, null !== (ev = Sv) && void 0 !== ev ? ev : hv, `hid${vv.openedOrder}`)
          }
      }
      isPreferred(vv, zv) {
        const Pv = vv => 1e6 * nv.q[vv.kind] + vv.openedOrder;
        for (const hv of this.controllers.values())
          if (hv !== vv && zv - hv.lastReadingMs < 500 && Pv(hv) < Pv(vv)) return !1;
        return !0
      }
    }
    var Dv = Pv(73);
    const Kv = () => DeviceMotionEvent,
      Vv = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, Dv.isMobile)(),
      Uv = () => {
        var vv;
        const zv = null === (vv = window.screen.orientation) || void 0 === vv ? void 0 : vv.angle;
        return "number" === typeof zv ? zv : "number" === typeof window.orientation ? window.orientation : 0
      };
    class Rv {
      constructor(vv, zv) {
        this.sink = vv, this.onStateChanged = zv, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((vv => {
            console.warn("Could not enable the motion sensor", vv)
          }))
        }, this.onMotion = vv => {
          const zv = vv.rotationRate;
          if (!zv || null === zv.alpha && null === zv.beta && null === zv.gamma) return;
          const Pv = null === this.lastEventMs ? 0 : (vv.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = vv.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: Yv(zv, Uv()),
            accel: null
          }, Pv, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof Kv().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const vv = Kv().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof vv) return void this.listen();
        let zv;
        this.disarmGestureRequest();
        try {
          zv = await vv.call(DeviceMotionEvent)
        } catch (Pv) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), Pv
        }
        this.wanted && ("granted" === zv ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(vv) {
        this.state !== vv && (this.state = vv, this.onStateChanged())
      }
    }
    const xv = "controllerGyroStatusChanged",
      tv = {
        ND: 0,
        lD: 0
      },
      qv = vv => {
        var zv, Pv;
        return "undefined" === typeof document || (null === (zv = null === (Pv = document.featurePolicy) || void 0 === Pv ? void 0 : Pv.allowsFeature(vv)) || void 0 === zv || zv)
      };
    class Iv {
      constructor() {
        this.processor = new Fv, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = vv => {
          const zv = vv.gyroAiming && pv.f.hasConnectedPad();
          var Pv, hv;
          zv !== this.phoneRunning && (this.phoneRunning = zv, zv ? null === (Pv = this.phone) || void 0 === Pv || Pv.start() : null === (hv = this.phone) || void 0 === hv || hv.stop());
          if (vv.gyroAiming !== this.running) {
            var Sv, ev;
            if (this.running = vv.gyroAiming, this.running) null === (Sv = this.hid) || void 0 === Sv || Sv.start().catch((vv => {
              console.warn("Could not open motion controllers", vv)
            }));
            else null === (ev = this.hid) || void 0 === ev || ev.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          Sv.j.zC(xv, this.getStatus())
        };
        const vv = (() => {
            var vv;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (vv = navigator.hid) && void 0 !== vv ? vv : null
          })(),
          zv = qv("hid");
        this.hidBlocked = null !== vv && !zv, this.hid = vv && zv ? new Ov(vv, ((vv, zv, Pv) => {
          this.lastHidReadingMs = performance.now(), this.feed(vv, zv, "player", Pv)
        }), this.publishStatus) : null;
        const Pv = qv("accelerometer") && qv("gyroscope");
        this.phoneBlocked = Vv() && !Pv, this.phone = Vv() && Pv ? new Rv(((vv, zv, Pv) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(vv, zv, "local", Pv)
        }), this.publishStatus) : null, Sv.j.subscribe(Nv.e, this.syncWithSettings), pv.f.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, Nv.g)()), this.publishStatus()
        })), this.syncWithSettings((0, Nv.g)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var vv, zv, Pv, hv;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (vv = null === (zv = this.hid) || void 0 === zv ? void 0 : zv.getConnectedKinds()) && void 0 !== vv ? vv : [],
          phoneMotion: null !== (Pv = null === (hv = this.phone) || void 0 === hv ? void 0 : hv.getState()) && void 0 !== Pv ? Pv : "off",
          padConnected: pv.f.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var vv;
        await (null === (vv = this.phone) || void 0 === vv ? void 0 : vv.requestPermission())
      }
      drainLookDelta() {
        const vv = performance.now();
        vv - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = vv;
        const zv = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const Pv = (0, Nv.g)();
        return Pv.gyroAiming && (vv => {
          let {
            activation: zv,
            isHeld: Pv,
            useButton: hv,
            gyroButton: Sv
          } = vv;
          return "always" === zv || Pv("aiming" === zv ? hv : Sv)
        })({
          activation: Pv.gyroActivation,
          isHeld: vv => dv.b.isButtonHeld(vv),
          useButton: (0, gv.f)("use"),
          gyroButton: Pv.gyroButton
        }) ? ((vv, zv) => ({
          ND: -vv.yawDeg * zv * Tv,
          lD: -vv.pitchDeg * zv * Tv
        }))(zv, Pv.gyroSensitivity) : tv
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(vv, zv) {
        this.feed(vv, zv, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(vv, zv, Pv, hv) {
        this.source !== hv && (this.processor.reset(), this.source = hv);
        const Sv = this.processor.process(vv, zv, Pv);
        this.pendingYawDeg += Sv.yawDeg, this.pendingPitchDeg += Sv.pitchDeg
      }
    }
    let Qv = null;
    const Zv = () => (Qv || (Qv = new Iv), Qv),
      Av = () => {
        const [vv, zv] = (0, hv.useState)((() => Zv().getStatus()));
        return (0, ev.g)(xv, zv), (0, hv.useEffect)((() => {
          zv(Zv().getStatus())
        }), []), vv
      }
  },
  8540: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => jv,
      h: () => dv,
      k: () => hv,
      m: () => pv,
      o: () => Nv,
      q: () => lv,
      r: () => cv,
      t: () => Cv,
      v: () => Fv,
      x: () => fv,
      y: () => Gv
    });
    const hv = vv => "dualShock4" === vv || "dualSense" === vv,
      Sv = 1356,
      ev = 1406,
      gv = [{
        vendorId: Sv,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: Sv,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: Sv,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: Sv,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: Sv,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: ev,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: ev,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: ev,
        productId: 8199,
        kind: "joyConRight"
      }],
      pv = gv.map((vv => {
        let {
          vendorId: zv,
          productId: Pv
        } = vv;
        return {
          vendorId: zv,
          productId: Pv
        }
      })),
      dv = (vv, zv) => {
        var Pv, hv;
        return null !== (Pv = null === (hv = gv.find((Pv => Pv.vendorId === vv && Pv.productId === zv))) || void 0 === hv ? void 0 : hv.kind) && void 0 !== Pv ? Pv : null
      },
      Nv = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      lv = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      Tv = 2e3 / 32767,
      Wv = 1 / 8192,
      wv = 936 / 13371,
      av = (vv, zv, Pv) => ({
        x: vv.getInt16(zv, !0) * Pv,
        y: vv.getInt16(zv + 2, !0) * Pv,
        z: vv.getInt16(zv + 4, !0) * Pv
      }),
      sv = vv => 0 === vv.x && 0 === vv.y && 0 === vv.z,
      Cv = (vv, zv, Pv) => null === zv ? null : "dualShock4" === vv ? 16 * (Pv - zv & 65535) / 3 / 1e6 : (Pv - zv >>> 0) / 3 / 1e6,
      iv = (vv, zv) => "joyConRight" === zv ? {
        x: vv.y,
        y: -vv.z,
        z: -vv.x
      } : {
        x: -vv.y,
        y: vv.z,
        z: -vv.x
      },
      cv = (vv, zv, Pv, Sv) => hv(vv) ? ((vv, zv, Pv, hv) => {
        const Sv = ((vv, zv, Pv) => "dualShock4" === vv ? 1 === zv && Pv >= 63 ? 0 : 17 === zv && Pv >= 65 ? 2 : null : 1 === zv && Pv >= 62 ? 0 : 49 === zv && Pv >= 63 ? 1 : null)(vv, zv, Pv.byteLength);
        if (null === Sv) return null;
        if (2976 === hv && 1 === zv && 0 !== (4 & Pv.getUint8(30))) return null;
        const ev = Sv + ("dualShock4" === vv ? 12 : 15),
          gv = av(Pv, ev, Tv),
          pv = av(Pv, ev + 6, Wv);
        return sv(gv) && sv(pv) ? null : {
          readings: [{
            gyro: gv,
            accel: pv
          }],
          dtSec: null,
          sensorClock: "dualShock4" === vv ? Pv.getUint16(Sv + 9, !0) : Pv.getUint32(Sv + 27, !0)
        }
      })(vv, zv, Pv, Sv) : ((vv, zv, Pv) => {
        if (48 !== zv && 49 !== zv || Pv.byteLength < 48) return null;
        const hv = [];
        for (let Sv = 0; Sv < 3; Sv++) {
          const zv = av(Pv, 12 + 12 * Sv, 244e-6),
            ev = av(Pv, 18 + 12 * Sv, wv);
          if (sv(ev) && sv(zv)) return null;
          hv.push({
            gyro: iv(ev, vv),
            accel: iv(zv, vv)
          })
        }
        return {
          readings: hv,
          dtSec: .005,
          sensorClock: null
        }
      })(vv, zv, Pv),
      Gv = 1,
      mv = [0, 1, 64, 64, 0, 1, 64, 64],
      jv = (vv, zv, Pv) => new Uint8Array([15 & vv, ...mv, zv, ...Pv]),
      fv = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      Fv = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  7903: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Kv,
      f: () => Iv,
      g: () => iv,
      k: () => wv.d,
      m: () => Rv,
      p: () => Uv,
      s: () => cv,
      w: () => xv,
      y: () => wv.j,
      z: () => wv.m,
      A: () => Qv,
      E: () => wv.o,
      I: () => Yv
    });
    var hv = Pv(52),
      Sv = Pv(22),
      ev = Pv(26),
      gv = Pv(1439),
      pv = Pv(1272),
      dv = Pv(7872),
      Nv = Pv(7906),
      lv = Pv(7855),
      Tv = Pv(7845),
      Wv = Pv(7910),
      wv = Pv(1374),
      av = Pv(7848),
      sv = Pv(8338),
      Cv = Pv(4140);
    const iv = vv => !vv.repeat && !(0, sv.e)(vv.key),
      cv = "PadHidesCursor";
    let Gv = !1;
    const mv = vv => {
        vv !== Gv && (Gv = vv, document.documentElement.classList.toggle(cv, vv))
      },
      jv = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(vv) {
          let zv = !1,
            Pv = !1;
          vv.values.forEach(((vv, hv) => {
            const Sv = vv >= (this.buttonsDown[hv] ? av.N : av.J);
            Sv && !this.buttonsDown[hv] && (zv = !0, Pv = !0), this.buttonsDown[hv] = Sv
          }));
          return [vv.leftStick, vv.rightStick].forEach(((vv, hv) => {
            const Sv = this.stickAnchors[hv];
            Math.hypot(vv.x, vv.y) < (Sv ? av.N : .3) ? this.stickAnchors[hv] = null : (!Sv || Math.hypot(vv.x - Sv.x, vv.y - Sv.y) >= .3) && (this.stickAnchors[hv] = {
              x: vv.x,
              y: vv.y
            }, zv = !0, Pv ||= !Sv)
          })), zv && (this.lastActivityMs = vv.timestampMs), this.onlyMovedOn = zv && !Pv, zv
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(vv) {
          return !(vv - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((vv => vv)) || this.stickAnchors.some((vv => null !== vv)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((vv => null !== vv))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let fv = null,
      Fv = !1;
    const Yv = () => Fv;
    let nv = null,
      Ov = !1,
      Dv = null;
    const Kv = () => Dv;
    let Vv = !1;
    const Uv = vv => {
        if (!jv.observe(vv)) return !1;
        if (Vv && jv.wasOnlyMoveOn() && !(0, wv.d)()) return !1;
        Vv = !1, Fv = !1;
        const zv = !(0, wv.d)();
        return zv && (fv = vv, Dv = !Gv && Ov && nv ? {
          ...nv
        } : null), Ov = !1, (0, wv.j)("gamepad"), mv(!0), (0, Wv.j)((0, dv.h)()), zv
      },
      Rv = vv => !(0, wv.d)() || vv === fv,
      xv = () => {
        jv.reset()
      },
      tv = () => {
        const vv = Sv.c.get("activeInputDevice"),
          zv = "gamepad" === vv ? Tv.f.getActivePad() : null;
        return {
          device: vv,
          inGame: (0, pv.u)(),
          padMovesMouse: null !== zv && (0, lv.f)(zv.id)
        }
      },
      qv = vv => {
        document.pointerLockElement ? nv = null : (nv ??= {
          x: 0,
          y: 0
        }, nv.x = vv.clientX, nv.y = vv.clientY)
      },
      Iv = () => {
        const vv = new Cv.b,
          zv = zv => {
            vv.reset(), Vv = !1, (0, wv.j)(zv)
          },
          Pv = vv => {
            if (vv.isTrusted) {
              if (vv instanceof KeyboardEvent) {
                if ((0, wv.h)(vv), !iv(vv)) return;
                Fv = !0
              }
              if (vv instanceof PointerEvent && "touch" === vv.pointerType) return nv = null, void zv("touch");
              vv instanceof PointerEvent && (qv(vv), Ov = !0), ("pointerdown" !== vv.type || (vv => {
                let {
                  device: zv,
                  inGame: Pv,
                  padMovesMouse: hv
                } = vv;
                return !("gamepad" === zv && hv && Pv)
              })(tv())) && zv("keyboardMouse")
            }
          },
          hv = vv => {
            vv.isTrusted && (nv = null, zv("touch"))
          },
          gv = vv => {
            vv.isTrusted && "touch" !== vv.pointerType && !vv.relatedTarget && (nv = null)
          },
          pv = Pv => {
            if (!Pv.isTrusted || "touch" === Pv.pointerType) return;
            qv(Pv);
            const hv = Pv.movementX || 0,
              ev = Pv.movementY || 0;
            if (0 === hv && 0 === ev) return;
            if (Ov = !0, mv(!1), "keyboardMouse" === Sv.c.get("activeInputDevice")) return;
            const gv = jv.isHolding(Pv.timeStamp),
              pv = tv(),
              dv = (vv => {
                let {
                  device: zv,
                  inGame: Pv,
                  padMovesMouse: hv,
                  padHolding: Sv
                } = vv;
                return ("gamepad" !== zv || !hv) && "keyboardMouse" !== zv && (Pv || !Sv)
              })({
                ...pv,
                inGame: pv.inGame && (0, Nv.f)(),
                padHolding: gv
              });
            dv && vv.add(hv, ev, Pv.timeStamp) && (zv("keyboardMouse"), Vv = jv.isStickOffRest())
          },
          dv = vv => {
            mv("gamepad" === vv)
          },
          lv = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", Pv, lv), window.addEventListener("pointerdown", Pv, lv), window.addEventListener("wheel", Pv, lv), window.addEventListener("touchstart", hv, lv), window.addEventListener("pointermove", pv, lv), window.addEventListener("pointerout", gv, lv);
        const Tv = ev.j.subscribe("appManagerUpdated|activeInputDevice", dv);
        return dv(Sv.c.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", Pv, lv), window.removeEventListener("pointerdown", Pv, lv), window.removeEventListener("wheel", Pv, lv), window.removeEventListener("touchstart", hv, lv), window.removeEventListener("pointermove", pv, lv), window.removeEventListener("pointerout", gv, lv), nv = null, ev.j.unsubscribe(Tv), mv(!1)
        }
      },
      Qv = () => {
        const [vv, zv] = (0, hv.useState)(dv.h);
        return (0, gv.g)(dv.c, (() => {
          zv((0, dv.h)())
        })), (0, gv.g)(Tv.e, (() => {
          zv((0, dv.h)())
        })), vv
      }
  },
  7879: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv,
      h: () => Sv
    });
    const hv = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      Sv = vv => hv.includes(vv)
  },
  7906: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Nv,
      f: () => lv,
      j: () => dv,
      m: () => pv
    });
    var hv = Pv(22),
      Sv = Pv(1610),
      ev = Pv(1697);
    const gv = new Map,
      pv = (vv, zv) => (gv.has(vv) && console.warn(`Gameplay blocker "${vv}" registered twice; the newer one replaces it.`), gv.set(vv, zv), () => {
        gv.get(vv) === zv && gv.delete(vv)
      }),
      dv = () => (0, ev.c)(document.activeElement),
      Nv = function() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [zv, Pv] of gv)
          if (!vv.includes(zv) && Pv()) return zv;
        return null
      },
      lv = function() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === hv.c.get("gameState") && (!(0, Sv.o)() && (!dv() && null === Nv(vv)))
      }
  },
  7848: (vv, zv, Pv) => {
    Pv.d(zv, {
      B: () => mv,
      C: () => iv,
      E: () => Cv,
      H: () => Nv,
      J: () => Wv,
      N: () => wv,
      O: () => Sv,
      P: () => hv,
      Q: () => fv,
      T: () => Dv,
      W: () => Uv,
      Z: () => jv,
      c: () => Rv,
      f: () => Kv,
      g: () => lv,
      i: () => dv,
      m: () => pv,
      o: () => Yv,
      r: () => cv,
      s: () => Fv,
      u: () => ev,
      w: () => Tv,
      x: () => Gv,
      z: () => Vv
    });
    const hv = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      Sv = hv.length,
      ev = function() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(Sv).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: vv
        }
      },
      gv = Object.fromEntries(hv.map(((vv, zv) => [vv, zv]))),
      pv = vv => gv[vv],
      dv = function(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const hv = Math.hypot(vv.x, vv.y);
        if (hv <= zv) return {
          x: 0,
          y: 0
        };
        const Sv = Math.min(1, (hv - zv) / Math.max(1e-4, Pv - zv));
        return {
          x: vv.x / hv * Sv,
          y: vv.y / hv * Sv
        }
      },
      Nv = ["exponential", "linear", "boost"],
      lv = (vv, zv) => {
        const Pv = Math.hypot(vv.x, vv.y);
        if (0 === Pv) return {
          x: 0,
          y: 0
        };
        const hv = ((vv, zv) => {
          const Pv = Math.max(0, Math.min(1, vv));
          return "linear" === zv ? Pv : Pv * Pv
        })(Pv, zv);
        return {
          x: vv.x / Pv * hv,
          y: vv.y / Pv * hv
        }
      },
      Tv = .5,
      Wv = .3,
      wv = .2,
      av = pv("LT"),
      sv = pv("RT"),
      Cv = vv => vv === av || vv === sv,
      iv = (vv, zv) => {
        const Pv = pv(zv);
        return Cv(Pv) ? vv[Pv] > .35 : vv[Pv] >= Tv
      },
      cv = (vv, zv) => vv.map(((vv, Pv) => Cv(Pv) ? zv[Pv] ? vv > .35 : vv >= .55 : vv >= Tv)),
      Gv = ["Up", "Down", "Left", "Right"],
      mv = vv => Gv.includes(vv),
      jv = function(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(vv.x, vv.y) < zv ? null : Math.abs(vv.x) > Math.abs(vv.y) ? vv.x > 0 ? "Right" : "Left" : vv.y > 0 ? "Down" : "Up"
      },
      fv = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      Fv = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      Yv = ["default", "slow", "off"],
      nv = 800,
      Ov = 250,
      Dv = (vv, zv) => "off" === zv ? null : "slow" === zv ? {
        initialDelayMs: Math.max(vv.initialDelayMs, nv),
        intervalMs: Math.max(vv.intervalMs, Ov)
      } : vv;
    class Kv {
      constructor(vv) {
        this.readTiming = vv, this.Vp = !1, this.timing = null, this.nextFireMs = 0
      }
      update(vv, zv) {
        return vv ? this.Vp ? !!(this.timing && zv >= this.nextFireMs) && (this.nextFireMs = zv + this.timing.intervalMs, !0) : (this.Vp = !0, this.timing = this.readTiming(), this.nextFireMs = zv + (null !== (Pv = null === (hv = this.timing) || void 0 === hv ? void 0 : hv.initialDelayMs) && void 0 !== Pv ? Pv : 0), !0) : (this.Vp = !1, !1);
        var Pv, hv
      }
      reset() {
        this.Vp = !1
      }
    }
    const Vv = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      Uv = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class Rv {
      constructor(vv) {
        this.timer = vv, this.direction = null
      }
      update(vv, zv) {
        return vv !== this.direction && (this.timer.reset(), this.direction = vv), this.timer.update(null !== vv, zv) ? vv : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8393: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Sv,
      g: () => ev
    });
    let hv = -1 / 0;
    const Sv = () => {
        hv = performance.now()
      },
      ev = vv => performance.now() - hv < vv
  },
  8344: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => gv,
      f: () => ev
    });
    var hv = Pv(7872),
      Sv = Pv(7848);
    const ev = vv => (0, Sv.T)(vv, (0, hv.g)().buttonRepeat),
      gv = vv => new Sv.f((() => ev(vv)))
  },
  7894: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => dv,
      h: () => ev,
      i: () => pv
    });
    var hv = Pv(26),
      Sv = Pv(7872);
    const ev = (vv, zv) => "OpenShop" === vv ? "shop" === zv : "OpenLobbyLeaderboard" !== vv || "leaderboard" === zv;
    let gv = !1;
    const pv = vv => {
        vv !== gv && (gv = vv, hv.j.zC(Sv.c, (0, Sv.g)()))
      },
      dv = () => ((vv, zv) => "shop" === vv && zv ? "shop" : "leaderboard")((0, Sv.g)().leaderboardButton, gv)
  },
  7887: (vv, zv, Pv) => {
    Pv.d(zv, {
      A: () => pv,
      C: () => jv,
      F: () => Wv,
      I: () => wv,
      L: () => Tv,
      O: () => mv,
      R: () => Nv,
      S: () => iv,
      U: () => Ov,
      V: () => Gv,
      Z: () => sv,
      _: () => Cv,
      b: () => tv,
      c: () => Iv,
      cb: () => av,
      db: () => cv,
      g: () => Dv,
      gb: () => Uv,
      i: () => gv,
      j: () => nv,
      jb: () => ev,
      lb: () => fv,
      m: () => Fv,
      nb: () => qv,
      q: () => Rv,
      qb: () => Yv,
      u: () => xv,
      v: () => lv,
      x: () => dv
    });
    var hv = Pv(7864),
      Sv = Pv(7848);
    const ev = {
        min: 25,
        max: 500,
        step: 5
      },
      gv = {
        min: 25,
        max: 100,
        step: 5
      },
      pv = {
        min: 0,
        max: .4,
        step: .01
      },
      dv = {
        min: 25,
        max: 300,
        step: 5
      },
      Nv = {
        min: .5,
        max: 6,
        step: .1
      },
      lv = (vv, zv) => {
        if (!Number.isFinite(vv)) return zv.min;
        const Pv = zv.min + Math.round((vv - zv.min) / zv.step) * zv.step,
          hv = Math.min(zv.max, Math.max(zv.min, Pv));
        return Math.round(1e3 * hv) / 1e3
      },
      Tv = vv => `${Math.round(vv)}%`,
      Wv = vv => Tv(100 * vv),
      wv = vv => `${vv.toFixed(1)}\xd7`,
      av = [{
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
      sv = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      Cv = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      iv = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      cv = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      Gv = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      mv = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      jv = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      fv = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      Fv = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      Yv = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      nv = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      Ov = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      Dv = {
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
      Kv = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      Vv = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      Uv = hv.e.map((vv => {
        let {
          group: zv,
          actions: Pv
        } = vv;
        const hv = Pv.map((vv => ({
          kind: "action",
          action: vv
        })));
        return {
          titleKey: Kv[zv],
          rows: "gameplay" === zv ? [...Vv, ...hv] : hv
        }
      })),
      Rv = Sv.P.filter((vv => "Home" !== vv)),
      xv = 1e4;
    class tv {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = vv, this.openButton = zv, this.accepts = Pv, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(vv, zv) {
        var Pv;
        this.updateIgnored(vv, zv);
        const hv = zv - (null !== (Pv = this.startMs) && void 0 !== Pv ? Pv : zv) >= 250;
        for (const Sv of Rv)
          if (Sv !== this.cancelButton && hv && !this.ignoredUntilMs.has(Sv) && vv.wasPressed(Sv) && this.accepts(Sv)) return {
            kind: "bind",
            button: Sv
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (vv.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = zv
        }
        return null === this.cancelDownAtMs ? null : vv.isHeld(this.cancelButton) && zv - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : vv.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(vv) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (vv - this.cancelDownAtMs) / 700)
      }
      updateIgnored(vv, zv) {
        if (null === this.startMs) {
          this.startMs = zv;
          for (const zv of Rv) vv.isDown(zv) && this.ignoredUntilMs.set(zv, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, zv + 250)
        }
        for (const [Pv, hv] of this.ignoredUntilMs) {
          const Sv = vv.isDown(Pv);
          hv === 1 / 0 ? Sv || Pv !== this.openButton ? Sv || this.ignoredUntilMs.delete(Pv) : this.ignoredUntilMs.set(Pv, zv + 250) : zv >= hv ? this.ignoredUntilMs.delete(Pv) : Sv && this.ignoredUntilMs.set(Pv, 1 / 0)
        }
      }
    }
    const qv = 6e3;
    class Iv {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(vv, zv) {
        let {
          pressed: Pv,
          Vp: hv
        } = vv;
        if (Pv) {
          const vv = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== vv && zv - vv < 1500 ? [...this.pressesAtMs, zv] : [zv], this.pressesAtMs.length >= 3) return 1
        }
        return hv ? (this.downAtMs ??= zv, Math.min(1, (zv - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  4773: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev,
      e: () => gv
    });
    var hv = Pv(52);
    const Sv = new WeakMap,
      ev = vv => {
        var zv;
        const Pv = vv.closest("[data-pad-slider]");
        return Pv && null !== (zv = Sv.get(Pv)) && void 0 !== zv ? zv : null
      },
      gv = (vv, zv) => {
        const Pv = (0, hv.useRef)(zv);
        Pv.current = zv, (0, hv.useEffect)((() => {
          if (vv.current) return ((vv, zv) => (Sv.set(vv, zv), () => {
            Sv.get(vv) === zv && Sv.delete(vv)
          }))(vv.current, {
            adjust: vv => {
              Pv.current.adjust(vv)
            },
            setFraction: vv => {
              Pv.current.setFraction(vv)
            },
            endDrag: () => {
              Pv.current.endDrag()
            }
          })
        }), [vv])
      }
  },
  8421: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => ev,
      i: () => Sv
    });
    var hv = Pv(26);
    const Sv = "localBlockBroken";

    function ev() {
      return {
        onPlayerChangeBlock(vv, zv, Pv, ev, gv, pv) {
          "Air" === pv && hv.j.zC(Sv)
        }
      }
    }
  },
  7920: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  7926: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  7935: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7940: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7949: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  7956: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7964: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  7968: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7976: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7979: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  7986: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  7988: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7991: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  7993: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8002: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8005: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8007: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8015: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8021: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8026: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8033: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8040: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8049: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8056: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8062: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8067: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8073: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8078: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8080: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8089: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8096: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8098: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8103: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8106: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8113: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8119: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8122: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8129: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8136: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8138: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8145: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8150: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8159: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8164: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8171: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8180: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8184: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8190: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8195: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8201: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8208: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8212: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8216: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8218: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8223: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8227: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8234: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8238: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8246: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8248: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8251: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8253: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8256: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8258: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8263: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8265: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8268: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8274: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8281: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8285: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8292: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8298: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8306: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8312: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8321: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8329: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);
export const id = 28;
export const ids = [28];
export const modules = {
  8044: (kk, ek, ik) => {
    var Dk = {
      "./nintendo/A.svg": 8050,
      "./nintendo/B.svg": 8052,
      "./nintendo/Down.svg": 8061,
      "./nintendo/Home.svg": 8067,
      "./nintendo/LB.svg": 8069,
      "./nintendo/LS.svg": 8076,
      "./nintendo/LT.svg": 8080,
      "./nintendo/Left.svg": 8085,
      "./nintendo/LeftStick.svg": 8092,
      "./nintendo/Menu.svg": 8098,
      "./nintendo/RB.svg": 8107,
      "./nintendo/RS.svg": 8111,
      "./nintendo/RT.svg": 8118,
      "./nintendo/Right.svg": 8124,
      "./nintendo/RightStick.svg": 8133,
      "./nintendo/Up.svg": 8135,
      "./nintendo/View.svg": 8144,
      "./nintendo/X.svg": 8153,
      "./nintendo/Y.svg": 8157,
      "./playstation/A.svg": 8160,
      "./playstation/B.svg": 8162,
      "./playstation/Down.svg": 8164,
      "./playstation/Home.svg": 8170,
      "./playstation/LB.svg": 8178,
      "./playstation/LS.svg": 8186,
      "./playstation/LT.svg": 8195,
      "./playstation/Left.svg": 8198,
      "./playstation/LeftStick.svg": 8200,
      "./playstation/Menu.svg": 8203,
      "./playstation/RB.svg": 8206,
      "./playstation/RS.svg": 8212,
      "./playstation/RT.svg": 8217,
      "./playstation/Right.svg": 8226,
      "./playstation/RightStick.svg": 8231,
      "./playstation/Up.svg": 8234,
      "./playstation/View.svg": 8239,
      "./playstation/X.svg": 8245,
      "./playstation/Y.svg": 8247,
      "./steamdeck/A.svg": 8255,
      "./steamdeck/B.svg": 8260,
      "./steamdeck/Down.svg": 8266,
      "./steamdeck/Home.svg": 8275,
      "./steamdeck/LB.svg": 8284,
      "./steamdeck/LS.svg": 8292,
      "./steamdeck/LT.svg": 8301,
      "./steamdeck/Left.svg": 8305,
      "./steamdeck/LeftStick.svg": 8312,
      "./steamdeck/Menu.svg": 8316,
      "./steamdeck/RB.svg": 8325,
      "./steamdeck/RS.svg": 8331,
      "./steamdeck/RT.svg": 8339,
      "./steamdeck/Right.svg": 8342,
      "./steamdeck/RightStick.svg": 8346,
      "./steamdeck/Up.svg": 8354,
      "./steamdeck/View.svg": 8361,
      "./steamdeck/X.svg": 8370,
      "./steamdeck/Y.svg": 8376,
      "./xbox/A.svg": 8385,
      "./xbox/B.svg": 8391,
      "./xbox/Down.svg": 8398,
      "./xbox/Home.svg": 8404,
      "./xbox/LB.svg": 8408,
      "./xbox/LS.svg": 8411,
      "./xbox/LT.svg": 8415,
      "./xbox/Left.svg": 8419,
      "./xbox/LeftStick.svg": 8421,
      "./xbox/Menu.svg": 8428,
      "./xbox/RB.svg": 8433,
      "./xbox/RS.svg": 8437,
      "./xbox/RT.svg": 8442,
      "./xbox/Right.svg": 8444,
      "./xbox/RightStick.svg": 8453,
      "./xbox/Up.svg": 8461,
      "./xbox/View.svg": 8470,
      "./xbox/X.svg": 8479,
      "./xbox/Y.svg": 8481
    };

    function fk(kk) {
      var ek = Sk(kk);
      return ik(ek)
    }

    function Sk(kk) {
      if (!ik.o(Dk, kk)) {
        var ek = new Error("Cannot find module '" + kk + "'");
        throw ek.code = "MODULE_NOT_FOUND", ek
      }
      return Dk[kk]
    }
    fk.keys = function() {
      return Object.keys(Dk)
    }, fk.resolve = Sk, kk.exports = fk, fk.id = 8044
  },
  4926: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Uk,
      i: () => yk,
      m: () => Hk,
      q: () => pk
    });
    var Dk = ik(60),
      fk = ik(4935),
      Sk = ik(4319),
      bk = ik(1345),
      rk = ik(4946),
      Pk = ik(1021),
      mk = ik.n(Pk),
      Mk = ik(1333),
      Kk = ik(1688),
      xk = ik(4951),
      nk = ik(1066);

    function Uk(kk) {
      let {
        label: ek,
        onClick: ik,
        checked: Dk,
        circleInfoText: fk,
        className: rk,
        disabled: Pk,
        note: Mk
      } = kk;
      return (0, nk.jsxs)("div", {
        "aria-disabled": Pk || void 0,
        "data-pad-focusable": !0,
        className: mk()("SettingBox CheckboxContainer", {
          [rk]: rk,
          SettingBoxDisabled: Pk
        }),
        onClick: () => {
          Pk || ik(!Dk)
        },
        children: [(0, nk.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, nk.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, nk.jsx)(Sk.d, {
              className: "SettingsCheckbox",
              checked: Dk,
              disabled: Pk,
              onChange: () => {}
            })
          }), (0, nk.jsxs)("div", {
            className: "CheckboxText",
            children: [ek, fk && (0, nk.jsx)("span", {
              onClick: kk => kk.stopPropagation(),
              children: (0, nk.jsx)(bk.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: fk
              })
            })]
          })]
        }), Mk && (0, nk.jsx)("div", {
          className: "SettingNote",
          children: Mk
        })]
      })
    }

    function Hk(kk) {
      let {
        name: ek,
        onChange: ik,
        min: fk,
        max: Sk,
        step: rk,
        initValue: Pk,
        circleInfoText: Mk,
        format: Kk,
        className: xk,
        padStep: Uk,
        disabled: Hk = !1,
        selectableMax: wk,
        cappedNote: pk,
        onChangeComplete: yk
      } = kk;
      const [Yk, Lk] = (0, Dk.useState)(Pk), Ck = (0, Dk.useRef)(Pk);
      (0, Dk.useEffect)((() => {
        Ck.current = Pk, Lk(Pk)
      }), [Pk]);
      const Ak = void 0 !== wk && wk < Sk,
        jk = Ak ? {
          "--slider-selectable": (wk - fk) / (Sk - fk)
        } : void 0;
      return (0, nk.jsxs)("div", {
        className: mk()("SettingBox SettingsSliderDiv", {
          [xk]: xk,
          SettingBoxDisabled: Hk,
          SliderCapped: Ak
        }),
        style: jk,
        children: [(0, nk.jsxs)("div", {
          className: "SliderText",
          children: [`${ek}: ${Kk?Kk(Yk):Yk}`, Mk && (0, nk.jsx)(bk.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Mk
          })]
        }), (0, nk.jsx)("div", {
          className: "SliderDiv",
          children: (0, nk.jsx)(lk, {
            value: Yk,
            min: fk,
            max: Sk,
            step: rk,
            onChange: kk => {
              if (Ak && kk >= wk && Yk === wk) return;
              const ek = Ak ? Math.min(kk, wk) : kk;
              Ck.current = ek, Lk(ek), ik(ek)
            },
            onChangeComplete: yk && (() => {
              yk(Ck.current)
            }),
            format: Kk,
            padStep: Uk,
            disabled: Hk
          })
        }), Ak && pk && (0, nk.jsx)("div", {
          className: "SettingNote",
          children: pk
        })]
      })
    }
    const wk = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function lk(kk) {
      var ek;
      let {
        value: ik,
        min: Sk,
        max: bk,
        step: rk,
        onChange: Pk,
        orientation: mk,
        reverse: Mk,
        setIsChanging: Kk,
        tooltip: Uk,
        labels: Hk,
        handleLabel: lk,
        format: pk,
        onChangeStart: yk,
        onChangeComplete: Yk,
        padStep: Lk,
        disabled: Ck = !1
      } = kk;
      const Ak = (0, Dk.useRef)(null),
        jk = (0, Dk.useRef)(null);
      (0, Dk.useLayoutEffect)((() => {
        var kk, ek, ik;
        const Dk = null !== (kk = null === (ek = Ak.current) || void 0 === ek ? void 0 : ek.querySelector(".rangeslider")) && void 0 !== kk ? kk : null;
        null === Dk || void 0 === Dk || Dk.setAttribute("data-pad-slider", ""), null === Dk || void 0 === Dk || Dk.setAttribute("data-pad-focusable", ""), null === Dk || void 0 === Dk || null === (ik = Dk.querySelector(".rangeslider__handle")) || void 0 === ik || ik.setAttribute("data-pad-slider-handle", ""), jk.current = Dk
      }), []), (0, Dk.useLayoutEffect)((() => {
        var kk, ek;
        Ck ? null === (kk = jk.current) || void 0 === kk || kk.setAttribute("aria-disabled", "true") : null === (ek = jk.current) || void 0 === ek || ek.removeAttribute("aria-disabled")
      }), [Ck]);
      const sk = (null !== (ek = String(rk).split(".")[1]) && void 0 !== ek ? ek : "").length,
        dk = kk => {
          const ek = Number((Math.round((kk - Sk) / rk) * rk + Sk).toFixed(sk));
          return Math.min(bk, Math.max(Sk, ek))
        },
        Vk = (0, Dk.useRef)(Yk);
      Vk.current = Yk, (0, Dk.useEffect)((() => {
        const kk = Ak.current;
        if (!kk) return;
        const ek = kk => {
          var ek;
          wk.has(kk.key) && (null === (ek = Vk.current) || void 0 === ek || ek.call(Vk))
        };
        return kk.addEventListener("keyup", ek), () => {
          kk.removeEventListener("keyup", ek)
        }
      }), []);
      const Fk = (0, Dk.useRef)(!1);
      return (0, xk.f)(jk, {
        adjust: kk => {
          if (Ck) return;
          const ek = null !== Lk && void 0 !== Lk ? Lk : Math.max(rk, Math.round((bk - Sk) / 20 / rk) * rk),
            Dk = dk(ik + kk * ek * (Mk ? -1 : 1));
          Dk !== ik && (null === yk || void 0 === yk || yk(), Pk(Dk), null === Yk || void 0 === Yk || Yk())
        },
        setFraction: kk => {
          if (Ck) return;
          const ek = dk(Sk + (Mk ? 1 - kk : kk) * (bk - Sk));
          ek !== ik && (Fk.current || (Fk.current = !0, null === yk || void 0 === yk || yk()), Pk(ek))
        },
        endDrag: () => {
          Fk.current && (Fk.current = !1, null === Yk || void 0 === Yk || Yk())
        }
      }), (0, nk.jsx)("div", {
        ref: Ak,
        style: {
          display: "contents"
        },
        children: (0, nk.jsx)(fk.e, {
          value: ik,
          min: Sk,
          max: bk,
          step: rk,
          onChange: Pk,
          orientation: mk,
          reverse: Mk,
          tooltip: Uk,
          labels: Hk,
          handleLabel: lk,
          format: pk,
          onChangeStart: () => {
            null === yk || void 0 === yk || yk(), null === Kk || void 0 === Kk || Kk(!0)
          },
          onChangeComplete: () => {
            null === Kk || void 0 === Kk || Kk(!1), null === Yk || void 0 === Yk || Yk()
          }
        })
      })
    }
    async function pk() {
      const kk = Mk.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await kk.getResult() && (0, Kk.reloadBloxd)()
    }

    function yk(kk) {
      let {
        label: ek,
        options: ik,
        value: Dk,
        onChange: fk,
        circleInfoText: Sk
      } = kk;
      return (0, nk.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, nk.jsxs)("div", {
          className: "SliderText",
          children: [ek, Sk && (0, nk.jsx)(bk.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Sk
          })]
        }), (0, nk.jsx)(rk.b, {
          ariaLabel: ek,
          options: ik,
          value: Dk,
          onChange: fk
        })]
      })
    }
  },
  4946: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk
    });
    var Dk = ik(1021),
      fk = ik.n(Dk),
      Sk = ik(1066);

    function bk(kk) {
      let {
        options: ek,
        value: ik,
        onChange: Dk,
        ariaLabel: bk,
        className: rk,
        reselectable: Pk = !1,
        keepsFocus: mk = !1,
        padTabs: Mk
      } = kk;
      const Kk = void 0 !== Mk;
      return (0, Sk.jsx)("div", {
        className: fk()("SegmentedToggle", rk),
        role: "group",
        "aria-label": bk,
        "data-pad-tabs": Mk,
        children: ek.map((kk => {
          const ek = kk.value === ik;
          return (0, Sk.jsx)("button", {
            type: "button",
            "aria-pressed": ek,
            "data-pad-tab": Kk || void 0,
            "data-pad-selected": Kk && ek ? "true" : void 0,
            "data-pad-default-focus": Kk && ek || void 0,
            "aria-label": kk.ariaLabel,
            title: kk.ariaLabel,
            className: fk()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: ek
            }),
            onMouseDown: mk ? kk => {
              kk.preventDefault()
            } : void 0,
            onClick: () => {
              ek && !Pk || Dk(kk.value)
            },
            children: kk.label
          }, kk.value)
        }))
      })
    }
  },
  8002: (kk, ek, ik) => {
    ik.d(ek, {
      A: () => nk,
      E: () => Uk,
      b: () => fk,
      e: () => Sk,
      i: () => xk,
      l: () => Kk,
      p: () => mk,
      t: () => rk,
      w: () => Dk
    });
    const Dk = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      fk = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: Dk
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      Sk = {
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
      bk = ["pickBlock", "perspective"],
      rk = kk => bk.includes(kk) ? bk : [kk],
      Pk = Object.fromEntries(fk.flatMap((kk => {
        let {
          group: ek,
          actions: ik
        } = kk;
        return ik.map((kk => [kk, ek]))
      }))),
      mk = kk => Pk[kk],
      Mk = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      Kk = kk => {
        var ek;
        return [mk(kk), ...null !== (ek = Mk[kk]) && void 0 !== ek ? ek : []]
      },
      xk = new Set(["menu", "inventory", "keyboard"]),
      nk = {
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
      Uk = new Set(["forward", "backward", "left", "right"])
  },
  7994: (kk, ek, ik) => {
    ik.d(ek, {
      A: () => yk,
      C: () => dk,
      E: () => Mk,
      G: () => sk,
      K: () => uk,
      d: () => pk,
      f: () => Lk,
      i: () => xk,
      l: () => nk,
      n: () => Ik,
      p: () => Fk,
      s: () => Vk,
      u: () => Yk,
      w: () => qk,
      y: () => jk
    });
    var Dk = ik(8002),
      fk = ik(8006),
      Sk = ik(7984),
      bk = ik(8019);
    const rk = kk => "pickBlock" === kk ? "perspective" : kk,
      Pk = (kk, ek) => {
        var ik;
        const fk = rk(ek);
        return null !== (ik = kk[fk]) && void 0 !== ik ? ik : Dk.e[fk]
      },
      mk = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((kk => {
        let [ek, ik] = kk;
        return [
          [ek, ik],
          [ik, ek]
        ]
      }))),
      Mk = (kk, ek) => null !== kk && void 0 !== kk ? kk : "nintendo" === ek,
      Kk = kk => Mk((0, fk.h)().swapConfirmBack, (0, fk.k)()) && mk.get(kk) || kk,
      xk = kk => Pk((0, fk.h)().bindings, Kk(kk)),
      nk = kk => Dk.e[Kk(kk)],
      Uk = Object.keys(Dk.e),
      Hk = kk => "gameplay" === (0, Dk.p)(kk) ? ["gameplay"] : (0, Dk.l)(kk),
      wk = (kk, ek) => {
        const ik = Hk(ek);
        return Hk(kk).some((kk => ik.includes(kk)))
      },
      lk = (kk, ek, ik) => {
        const fk = Pk(kk, ek),
          bk = new Set((0, Dk.t)(ek)),
          mk = [...bk];
        for (let Dk = mk.pop(); Dk; Dk = mk.pop())
          for (const ek of Uk) {
            const Sk = Pk(kk, ek);
            bk.has(ek) || Sk !== ik && Sk !== fk || !wk(Dk, ek) || (bk.add(ek), mk.push(ek))
          }
        const Mk = {
          ...kk
        };
        for (const Kk of bk) {
          const ek = Pk(kk, Kk) === fk ? ik : fk,
            bk = (0, Dk.l)(Kk).some((kk => Dk.i.has(kk)));
          if ((0, Sk.G)(ek) && bk) return null;
          Mk[rk(Kk)] = ek
        }
        for (const Sk of Object.keys(Mk)) Mk[Sk] === Dk.e[Sk] && delete Mk[Sk];
        return Mk
      },
      pk = (kk, ek) => null !== lk((0, fk.h)().bindings, Kk(kk), ek),
      yk = (kk, ek) => {
        if (xk(kk) === ek) return !0;
        const ik = lk((0, fk.h)().bindings, Kk(kk), ek);
        return !!ik && ((0, fk.l)({
          bindings: ik
        }), !0)
      },
      Yk = (kk, ek) => {
        const ik = (0, Dk.t)(ek);
        return Uk.filter((ek => rk(ek) === ek && !ik.includes(ek) && Pk(kk, Kk(ek)) !== xk(ek)))
      },
      Lk = ["southpaw", "triggersSwapped"],
      Ck = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      Ak = kk => Object.keys(Ck[kk]),
      jk = (kk, ek) => "southpaw" === kk ? ek.swapSticks : Ak(kk).every((ik => Pk(ek.bindings, ik) === Ck[kk][ik])),
      sk = (kk, ek) => {
        const ik = (0, fk.h)();
        let Sk = ik.bindings;
        for (const fk of Ak(kk)) {
          const ik = ek ? Ck[kk][fk] : Dk.e[fk];
          if (Sk = lk(Sk, fk, ik), !Sk) return !1
        }
        return (0, fk.l)({
          swapSticks: "southpaw" === kk ? ek : ik.swapSticks,
          bindings: Sk
        }), !0
      },
      dk = () => {
        (0, fk.l)({
          swapSticks: !1,
          bindings: {}
        })
      },
      Vk = () => (0, fk.h)().swapSticks ? "RightStick" : "LeftStick",
      Fk = () => (0, fk.h)().swapSticks ? "LeftStick" : "RightStick",
      uk = kk => (0, fk.h)().swapSticks && (0, Sk.G)(kk),
      qk = kk => uk(kk) ? Vk() : Fk(),
      Ik = kk => {
        if (Dk.E.has(kk)) return Vk();
        const ek = Dk.A[kk];
        return ek && ("leaderboard" !== ek || (0, bk.d)(kk, (0, bk.c)())) ? xk(ek) : null
      }
  },
  7970: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      ControllerCategory: () => Ar,
      ControllerGlyph: () => sf,
      ControllerRoot: () => Ab,
      PadLobbyShortcuts: () => tb,
      PadSneakChip: () => qb,
      PadTooltip: () => zb,
      attachPressToContinue: () => gb,
      getBoundButton: () => Mk.i,
      getControllerSettings: () => xk.h,
      getGlyphForNoaAction: () => Mk.n,
      getInventoryCursorState: () => sr,
      getMenuShortcutButton: () => Zi,
      getPadGlyphIconName: () => Vb,
      getPadGlyphIconUrl: () => Fb,
      getPadRepeatTiming: () => Hk.f,
      handOverPadFocus: () => Vr,
      hasActivePad: () => jr,
      isPadSteppingSlots: () => dr
    });
    const Dk = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var fk = ik(1172),
      Sk = ik(1375),
      bk = ik(7975),
      rk = ik(75),
      Pk = ik(22),
      mk = ik(26),
      Mk = ik(7994),
      Kk = ik(8024),
      xk = ik(8006),
      nk = ik(8031),
      Uk = ik(7984),
      Hk = ik(8497),
      wk = ik(8503),
      lk = ik(1642);
    const pk = (kk, ek, ik) => Math.max(ek, Math.min(ik, kk)),
      yk = kk => Math.min(kk.width, kk.height) / 720,
      Yk = kk => Math.max(.15, kk);
    class Lk {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(kk, ek) {
        const ik = Math.hypot(kk.x, kk.y) >= (kk => Math.max(.3, kk))(ek);
        return this.locked ? (this.locked = ik, !1) : ik
      }
    }
    const Ck = (kk, ek) => {
        const ik = pk(ek.dtMs, 0, 100),
          Dk = ik / 1e3,
          fk = yk(ek.viewport) * (ek.cursorSpeedPercent / 100),
          Sk = (0, Uk.j)(ek.stick, Yk(ek.moveDeadzone)),
          bk = Math.hypot(Sk.x, Sk.y),
          rk = ((kk, ek, ik) => {
            if (ek < .3) return 0;
            const Dk = ik / 350;
            return ek >= .85 ? Math.min(1, kk + Dk) : Math.max(0, kk - Dk)
          })(kk.speedRamp, bk, ik);
        let Pk = kk.x,
          mk = kk.y;
        if (bk > 0) {
          const kk = .45 + .55 * rk,
            ik = ek.context.overInteractive ? .45 : 1,
            Mk = 1400 * (kk => {
              const ek = pk(kk, 0, 1);
              return .3 * ek + .7 * ek * ek
            })(bk) * fk * kk * ik;
          Pk += Sk.x / bk * Mk * Dk, mk += Sk.y / bk * Mk * Dk
        }
        const Mk = Math.hypot(ek.dpad.x, ek.dpad.y);
        if (Mk > 0) {
          const kk = 500 * fk;
          Pk += ek.dpad.x / Mk * kk * Dk, mk += ek.dpad.y / Mk * kk * Dk
        }
        const Kk = ek.context.magnetTarget;
        if (Kk && bk < .3 && 0 === Mk) {
          const kk = ((kk, ek, ik, Dk, fk) => {
            const Sk = ek.x - kk.x,
              bk = ek.y - kk.y,
              rk = Math.hypot(Sk, bk);
            if (0 === rk) return {
              x: 0,
              y: 0
            };
            const Pk = Math.min(rk, fk * (1 - Dk / .3));
            let mk = Sk / rk * Pk,
              Mk = bk / rk * Pk;
            if (Dk > 0) {
              const kk = ik.x / Dk,
                ek = ik.y / Dk,
                fk = mk * kk + Mk * ek;
              fk < 0 && (mk -= fk * kk, Mk -= fk * ek)
            }
            return {
              x: mk,
              y: Mk
            }
          })({
            x: Pk,
            y: mk
          }, Kk, Sk, bk, 120 * yk(ek.viewport) * Dk);
          Pk += kk.x, mk += kk.y
        }
        return {
          x: pk(Pk, 0, Math.max(0, ek.viewport.width - 1)),
          y: pk(mk, 0, Math.max(0, ek.viewport.height - 1)),
          speedRamp: rk
        }
      },
      Ak = kk => {
        const ek = (0, Uk.j)(kk, .2);
        return 0 !== ek.x || 0 !== ek.y
      },
      jk = (kk, ek) => {
        const ik = (0, Uk.j)(kk, .2),
          Dk = Math.hypot(ik.x, ik.y);
        if (0 === Dk) return {
          x: 0,
          y: 0
        };
        const fk = Dk * Dk * 1600,
          Sk = pk(ek, 0, 100) / 1e3;
        return {
          x: ik.x / Dk * fk * Sk,
          y: ik.y / Dk * fk * Sk
        }
      },
      sk = (kk, ek) => "y" === ek ? kk.scrollHeight > kk.clientHeight + 1 : kk.scrollWidth > kk.clientWidth + 1,
      dk = (kk, ek) => {
        if (!sk(kk, ek)) return !1;
        const ik = getComputedStyle(kk),
          Dk = "y" === ek ? ik.overflowY : ik.overflowX;
        return "auto" === Dk || "scroll" === Dk
      },
      Vk = (kk, ek, ik) => {
        for (let Sk = kk instanceof HTMLElement ? kk : null !== (Dk = null === kk || void 0 === kk ? void 0 : kk.parentElement) && void 0 !== Dk ? Dk : null; Sk; Sk = Sk.parentElement) {
          var Dk;
          if (dk(Sk, ek)) return Sk;
          if (Sk === ik) return null
        }
        if (ik) return null;
        const fk = document.scrollingElement;
        return fk instanceof HTMLElement && sk(fk, ek) ? fk : null
      },
      Fk = new WeakMap,
      uk = (kk, ek) => {
        const ik = performance.now(),
          Dk = Fk.get(kk);
        if (Dk && Dk.axis === ek && ik - Dk.atMs < 500 && (!Dk.container || Dk.container.isConnected)) return Dk.container;
        const fk = qk(kk, ek);
        return Fk.set(kk, {
          axis: ek,
          atMs: ik,
          container: fk
        }), fk
      },
      qk = (kk, ek) => {
        let ik = dk(kk, ek) ? kk : null,
          Dk = ik ? ik.clientWidth * ik.clientHeight : 0;
        for (const fk of kk.querySelectorAll("*")) {
          const kk = fk.clientWidth * fk.clientHeight;
          kk > Dk && dk(fk, ek) && (ik = fk, Dk = kk)
        }
        return ik
      },
      Ik = (kk, ek, ik) => "y" === ek ? ik < 0 ? kk.scrollTop > 0 : kk.scrollTop + kk.clientHeight < kk.scrollHeight - 1 : ik < 0 ? kk.scrollLeft > 0 : kk.scrollLeft + kk.clientWidth < kk.scrollWidth - 1,
      zk = (kk, ek, ik) => {
        "y" === ek ? kk.scrollBy({
          top: ik,
          behavior: "instant"
        }) : kk.scrollBy({
          left: ik,
          behavior: "instant"
        })
      },
      Qk = kk => {
        if (!kk || kk === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const ek = kk.getBoundingClientRect(),
          ik = Math.max(0, ek.left),
          Dk = Math.max(0, ek.top);
        return new DOMRect(ik, Dk, Math.min(window.innerWidth, ek.right) - ik, Math.min(window.innerHeight, ek.bottom) - Dk)
      },
      vk = (kk, ek) => kk.left < ek.right && ek.left < kk.right && kk.top < ek.bottom && ek.top < kk.bottom;
    var Ek = ik(60),
      hk = ik(1021),
      ak = ik.n(hk),
      Wk = ik(1066);
    let tk = 0,
      Xk = !1;
    class Bk {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(kk) {
        this.element = kk, this.shownKey = "", this.gap = null
      }
      show(kk) {
        const ek = this.element;
        if (!ek) return;
        const ik = kk ? this.keepOnScreen(ek, kk) : null,
          Dk = ik ? `${ik.left},${ik.top},${ik.width},${ik.height}` : "";
        if (Dk === this.shownKey) return;
        const fk = "" === this.shownKey;
        this.shownKey = Dk, ek.classList.toggle("Visible", null !== ik), ik && (ek.classList.toggle("Snap", fk), ek.style.width = `${ik.width}px`, ek.style.height = `${ik.height}px`, ek.style.transform = `translate(${ik.left}px, ${ik.top}px)`, fk && (ek.offsetWidth, ek.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(kk, ek) {
        var ik;
        const Dk = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!Xk){Xk=!0;const kk=document.createElement("div");kk.setAttribute("aria-hidden","true"),kk.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(kk),new ResizeObserver((()=>{tk++})).observe(kk)}return String(tk)})()}`;
        (null === (ik = this.gap) || void 0 === ik ? void 0 : ik.key) !== Dk && (this.gap = {
          px: parseFloat(getComputedStyle(kk).paddingLeft) || 0,
          key: Dk
        });
        const fk = this.gap.px + 2,
          Sk = Math.max(ek.left, fk),
          bk = Math.max(ek.top, fk),
          rk = Math.min(ek.left + ek.width, window.innerWidth - fk),
          Pk = Math.min(ek.top + ek.height, window.innerHeight - fk);
        return rk <= Sk || Pk <= bk ? ek : {
          left: Sk,
          top: bk,
          width: rk - Sk,
          height: Pk - bk
        }
      }
    }
    const ck = kk => {
      let {
        placer: ek,
        className: ik
      } = kk;
      const Dk = (0, Ek.useCallback)((kk => {
        ek.setElement(kk)
      }), [ek]);
      return (0, Wk.jsx)("div", {
        ref: Dk,
        className: ak()("PadReticle", ik),
        "aria-hidden": !0
      })
    };
    var Tk = ik(8505);
    const Zk = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const Ok = new class {
      constructor() {
        this.state = Zk, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(kk) {
        if (ek = this.state, ik = kk, (ek.visible || ik.visible) && (ek.visible !== ik.visible || ek.x !== ik.x || ek.y !== ik.y || ek.pressed !== ik.pressed)) {
          var ek, ik;
          this.state = kk;
          for (const ek of this.listeners) ek(kk)
        }
      }
      hide() {
        this.set(Zk)
      }
      subscribe(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
    };
    var gk = ik(8516);
    const Gk = (kk, ek) => {
        let {
          kind: ik,
          holding: Dk,
          hasPress: fk,
          hasBack: Sk,
          slotHasItem: bk
        } = ek;
        switch (kk) {
          case "primary":
            return "slot" === ik ? "slotPrimary" : "recipe" === ik || "button" === ik ? fk ? "pressPrimary" : "click" : "textField" === ik ? "openKeyboard" : null;
          case "secondary":
            return "slot" === ik ? "slotSecondary" : "button" !== ik && "recipe" !== ik || !fk ? null : "pressSecondary";
          case "quickMove":
            return "slot" === ik && bk ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === ik && bk && !Dk ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return Dk ? "cancel" : Sk ? "pressBack" : "close"
        }
      },
      Nk = kk => {
        const ek = [];
        if (kk.hotbarPicking) return ek.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), ek.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), ek;
        if (kk.holding) "slot" === kk.kind ? (ek.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), ek.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === kk.kind && ek.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), ek.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), ek.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), kk.openButtonCloses && ek.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var ik;
          "slot" === kk.kind && kk.slotHasItem ? (ek.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), ek.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), ek.push({
            actions: ["inventoryQuickMove"],
            labelKey: kk.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), ek.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), ek.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== kk.kind && "recipe" !== kk.kind || !kk.pressHints ? "button" === kk.kind || "recipe" === kk.kind ? ek.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === kk.kind && ek.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (kk.pressHints.primary && ek.push({
            actions: ["inventoryPrimary"],
            labelKey: kk.pressHints.primary
          }), kk.pressHints.secondary && ek.push({
            actions: ["inventorySecondary"],
            labelKey: kk.pressHints.secondary
          }));
          const Dk = null === (ik = kk.pressHints) || void 0 === ik ? void 0 : ik.back;
          Dk && ek.push({
            actions: ["inventoryClose"],
            labelKey: Dk
          });
          const fk = [];
          kk.openButtonCloses && fk.push("inventory"), Dk || fk.push("inventoryClose"), fk.length > 0 && ek.push({
            actions: fk,
            labelKey: "inventoryClose"
          })
        }
        return ek.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), kk.hasCategories ? ek.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : kk.hasList && ek.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), ek
      };
    var Rk = ik(8530),
      Jk = ik(8522);
    class ke {
      constructor(kk) {
        this.probes = kk, this.byContainer = new Map, this.byParent = new Map
      }
      find(kk, ek) {
        const ik = Vk(kk, "y", ek);
        if (!ik) return null;
        let Dk = this.byContainer.get(ik);
        return Dk || (this.probes.push({
          element: ik,
          rect: fe(ik.getBoundingClientRect())
        }), Dk = {
          container: ik,
          box: Qk(ik),
          group: De(ik)
        }, this.byContainer.set(ik, Dk)), Dk
      }
      findForParent(kk, ek) {
        let ik = this.byParent.get(kk);
        return void 0 === ik && (ik = this.find(kk, ek), this.byParent.set(kk, ik)), ik
      }
    }
    const ee = new WeakMap;
    let ie = 0;
    const De = kk => {
        let ek = ee.get(kk);
        return ek || (ek = "el:" + ie++, ee.set(kk, ek)), ek
      },
      fe = kk => ({
        left: kk.left,
        top: kk.top,
        width: kk.width,
        height: kk.height
      }),
      Se = kk => kk.width > 0 && kk.height > 0,
      be = (kk, ek) => Se(kk) && kk.left + kk.width > 0 && kk.top + kk.height > 0 && kk.left < ek.width && kk.top < ek.height,
      re = (kk, ek, ik) => {
        const Dk = kk.top + kk.height / 2;
        return be(kk, ek) && (!ik || Dk >= ik.top && Dk <= ik.bottom)
      },
      Pe = kk => ({
        x: kk.left + kk.width / 2,
        y: kk.top + kk.height / 2
      }),
      me = (kk, ek, ik) => kk < 0 ? ik >= 0 ? 0 : ek - 1 : ((kk + ik) % ek + ek) % ek,
      Me = kk => "Left" === kk || "Right" === kk,
      Ke = (kk, ek, ik) => {
        const Dk = Me(ik),
          fk = Dk ? kk.top : kk.left,
          Sk = Dk ? kk.height : kk.width,
          bk = Dk ? ek.top : ek.left,
          rk = Dk ? ek.height : ek.width,
          Pk = Math.max(0, Math.max(bk - (fk + Sk), fk - (bk + rk)));
        return Sk > 1.5 * rk ? {
          gap: Pk,
          offset: Math.max(0, bk - fk) + .1 * Math.max(0, fk - bk)
        } : {
          gap: Pk,
          offset: Math.abs(bk + rk / 2 - (fk + Sk / 2))
        }
      },
      xe = (kk, ek, ik) => {
        const Dk = ((kk, ek, ik) => {
          const Dk = Pe(kk),
            fk = Pe(ek),
            Sk = Me(ik) ? Math.min(kk.width, ek.width) / 4 : Math.min(kk.height, ek.height) / 4;
          switch (ik) {
            case "Right":
              return fk.x - Dk.x >= Sk ? Math.max(0, ek.left - (kk.left + kk.width)) : null;
            case "Left":
              return Dk.x - fk.x >= Sk ? Math.max(0, kk.left - (ek.left + ek.width)) : null;
            case "Down":
              return fk.y - Dk.y >= Sk ? Math.max(0, ek.top - (kk.top + kk.height)) : null;
            case "Up":
              return Dk.y - fk.y >= Sk ? Math.max(0, kk.top - (ek.top + ek.height)) : null
          }
        })(kk, ek, ik);
        if (null === Dk) return null;
        const fk = Ke(kk, ek, ik);
        return Dk + 3 * fk.gap + .5 * fk.offset
      },
      ne = (kk, ek) => ek.visible || null !== ek.scrollGroup && ek.scrollGroup === kk.scrollGroup,
      Ue = (kk, ek, ik, Dk) => {
        let fk = null,
          Sk = 1 / 0;
        for (const bk of ek) {
          if (bk.key === kk.key || !ne(kk, bk) || !Dk(bk)) continue;
          const ek = xe(kk.rect, bk.rect, ik);
          null !== ek && ek < Sk && (fk = bk, Sk = ek)
        }
        return fk
      },
      He = (kk, ek, ik) => {
        const Dk = Ue(kk, ek, ik, (() => !0));
        if (!Dk || Me(ik) || null === kk.scrollGroup || Dk.scrollGroup === kk.scrollGroup) return Dk;
        const fk = Ue(kk, ek, ik, (ek => 0 === Ke(kk.rect, ek.rect, ik).gap));
        return null !== fk && void 0 !== fk ? fk : Dk
      },
      we = (kk, ek, ik) => {
        let Dk = null,
          fk = 1 / 0;
        for (const Sk of ek) {
          if (!Sk.visible || ik && !ik(Sk)) continue;
          const ek = Pe(Sk.rect),
            bk = Math.hypot(ek.x - kk.x, ek.y - kk.y);
          bk < fk && (Dk = Sk, fk = bk)
        }
        return Dk
      },
      le = kk => {
        const {
          rect: ek,
          clip: ik
        } = kk;
        if (!ik) return ek;
        const Dk = Math.max(ek.left, ik.left),
          fk = Math.max(ek.top, ik.top);
        return {
          left: Dk,
          top: fk,
          width: Math.min(ek.left + ek.width, ik.left + ik.width) - Dk,
          height: Math.min(ek.top + ek.height, ik.top + ik.height) - fk
        }
      },
      pe = (kk, ek) => ek.x >= kk.left && ek.x < kk.left + kk.width && ek.y >= kk.top && ek.y < kk.top + kk.height,
      ye = (kk, ek) => {
        let ik = null,
          Dk = 1 / 0;
        for (const fk of ek) {
          const ek = le(fk);
          (fk.visible || fk.clip) && pe(ek, kk) && (ek.width * ek.height < Dk && (ik = fk, Dk = ek.width * ek.height))
        }
        return ik
      },
      Ye = kk => {
        let ek = null;
        for (const ik of kk) {
          if (!ik.visible) continue;
          if (!ek) {
            ek = ik;
            continue
          }
          const kk = Math.min(ek.rect.height, ik.rect.height) / 2,
            Dk = ik.rect.top - ek.rect.top;
          (Dk < -kk || Math.abs(Dk) <= kk && ik.rect.left < ek.rect.left) && (ek = ik)
        }
        return ek
      },
      Le = (kk, ek, ik, Dk, fk) => {
        const Sk = fk % ek,
          bk = Math.floor(fk / ek);
        return {
          left: kk.left + Sk * ik,
          top: kk.top + bk * Dk,
          width: kk.width,
          height: kk.height
        }
      },
      Ce = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      Ae = ".LazyLoadedItemWrapper",
      je = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      se = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      de = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      Ve = kk => kk.hasAttribute("data-inven-idx") ? "slot" : kk.hasAttribute("data-recipe-key") ? "recipe" : kk.hasAttribute("data-craft-ingredient") || (0, Jk.v)(kk) ? "info" : (0, Tk.H)(kk) ? "textField" : "button",
      Fe = (kk, ek) => "slot" === ek ? Number(kk.getAttribute("data-inven-idx")) : null,
      ue = kk => kk.matches(Ae) ? kk.querySelector(je) : kk,
      qe = kk => {
        var ek, ik;
        return {
          element: kk,
          recipe: null !== (ek = kk && (null === (ik = ue(kk)) || void 0 === ik ? void 0 : ik.getAttribute("data-recipe-key"))) && void 0 !== ek ? ek : null
        }
      },
      Ie = kk => {
        const ek = ue(kk);
        if (!ek) return {
          kind: "pending",
          idx: null
        };
        const ik = Ve(ek);
        return {
          kind: ik,
          idx: Fe(ek, ik)
        }
      },
      ze = kk => {
        const ek = [];
        for (const [ik, Dk] of se) {
          kk.matches(Dk) && ek.push([ik, kk]);
          for (const fk of kk.querySelectorAll(Dk)) ek.push([ik, fk])
        }
        return ek
      },
      Qe = (kk, ek) => {
        for (const [ik, Dk] of kk)
          if (Dk.contains(ek)) return ik;
        return "other"
      },
      ve = (kk, ek, ik, Dk, fk, Sk, bk, rk) => {
        var Pk;
        const mk = kk.children,
          Mk = fe(mk[0].getBoundingClientRect()),
          Kk = [{
            element: mk[0],
            rect: Mk
          }];
        if (Sk.push(Kk[0]), 0 === Mk.width || 0 === Mk.height) return;
        let xk = 1;
        for (; xk < mk.length && Math.abs(mk[xk].getBoundingClientRect().top - Mk.top) < 1;) xk++;
        const nk = kk => {
            const ek = {
              element: mk[kk],
              rect: fe(mk[kk].getBoundingClientRect())
            };
            return Sk.push(ek), Kk.push(ek), ek.rect
          },
          Uk = xk > 1 ? nk(1).left - Mk.left : Mk.width,
          Hk = mk.length > xk ? nk(xk).top - Mk.top : Mk.height,
          wk = bk.find(kk, ek);
        let lk = null;
        if (wk) {
          var pk;
          const {
            container: kk,
            box: ek
          } = wk;
          lk = null !== (pk = rk.get(kk)) && void 0 !== pk ? pk : null, lk || (lk = {
            top: kk.scrollTop,
            left: kk.scrollLeft,
            box: ek,
            viewport: Dk,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, rk.set(kk, lk)), lk.probes.push(...Kk)
        }
        const yk = fk.length;
        for (let Ak = 0; Ak < mk.length; Ak++) {
          var Yk, Lk, Ck;
          const kk = mk[Ak],
            ek = Le(Mk, xk, Uk, Hk, Ak),
            Sk = kk.firstElementChild ? kk.querySelector(je) : null,
            bk = Sk ? Ve(Sk) : "pending";
          fk.push({
            key: De(kk),
            rect: ek,
            panel: ik,
            scrollGroup: null !== (Yk = null === wk || void 0 === wk ? void 0 : wk.group) && void 0 !== Yk ? Yk : null,
            visible: re(ek, Dk, null === wk || void 0 === wk ? void 0 : wk.box),
            clip: null !== (Lk = null === wk || void 0 === wk ? void 0 : wk.box) && void 0 !== Lk ? Lk : null,
            element: kk,
            kind: bk,
            idx: Sk ? Fe(Sk, bk) : null,
            scrollContainer: null !== (Ck = null === wk || void 0 === wk ? void 0 : wk.container) && void 0 !== Ck ? Ck : null
          })
        }
        null === (Pk = lk) || void 0 === Pk || Pk.targets.push(...fk.slice(yk))
      },
      Ee = kk => kk instanceof Element && null !== kk.closest(Ae),
      he = kk => null !== kk.scrollContainer && Ee(kk.element);
    class ae {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(kk, ek, ik, Dk) {
        this.latched = {
          source: kk,
          focusKey: ek,
          sinceMs: ik,
          hold: {
            id: ++this.presses,
            holdMs: Dk
          }
        }
      }
      update(kk, ek, ik) {
        const Dk = this.latched;
        return Dk ? kk && ek === Dk.focusKey ? ik - Dk.sinceMs < Dk.hold.holdMs ? null : (this.latched = null, Dk.source) : (this.latched = null, null) : null
      }
      getHold() {
        var kk, ek;
        return null !== (kk = null === (ek = this.latched) || void 0 === ek ? void 0 : ek.hold) && void 0 !== kk ? kk : null
      }
      reset() {
        this.latched = null
      }
    }
    var We = ik(8536);
    const te = {
        kind: "none"
      },
      Xe = kk => ({
        x: kk.clientX,
        y: kk.clientY
      }),
      Be = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class ce {
      constructor() {
        this.hovered = te, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(kk, ek, ik, Dk, fk) {
        const Sk = null !== ek ? {
            kind: "slot",
            idx: ek
          } : ik ? {
            kind: "element",
            element: ik
          } : te,
          bk = `${fk}|${Math.round(Dk.clientX)},${Math.round(Dk.clientY)}`,
          rk = (Pk = this.hovered, mk = Sk, "slot" === Pk.kind && "slot" === mk.kind ? Pk.idx === mk.idx : "element" === Pk.kind && "element" === mk.kind ? Pk.element === mk.element : Pk.kind === mk.kind);
        var Pk, mk;
        if (rk && bk === this.signature) return;
        const Mk = !rk || fk !== this.holding || "" === this.signature;
        this.signature = bk, this.holding = fk, this.lastPoint = Dk;
        const Kk = this.hovered;
        if (this.hovered = Sk, "slot" === Sk.kind) return this.leaveElement(Kk, null, Dk), void(Mk ? kk.hover(Sk.idx, Dk) : kk.moveTo(Dk));
        if (rk) return void("element" === Sk.kind ? (0, Tk.j)(Sk.element, Sk.element, Xe(Dk)) : kk.hover(null, Dk));
        kk.hover(null, Dk);
        const xk = "element" === Sk.kind ? Sk.element : null;
        "element" === Kk.kind ? (0, Tk.j)(Kk.element, xk, Xe(Dk)) : xk && (0, Tk.j)(null, xk, Xe(Dk))
      }
      invalidate() {
        this.signature = ""
      }
      clear(kk) {
        const ek = this.hovered;
        this.hovered = te, this.signature = "", "none" !== ek.kind && (this.leaveElement(ek, null, this.lastPoint), kk && "slot" === ek.kind && kk.hover(null, this.lastPoint))
      }
      leaveElement(kk, ek, ik) {
        "element" === kk.kind && (0, Tk.j)(kk.element, ek, Xe(ik))
      }
    }
    class Te {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(kk, ek) {
        Ak(kk) && (this.lastTiltedMs = ek)
      }
      allowsClick(kk) {
        return kk - this.lastTiltedMs > 150
      }
    }
    class oe {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(kk) {
        return 0 !== (0, Uk.j)(kk, .2).y
      }
      step(kk, ek, ik) {
        kk !== this.container && (this.container = kk, this.remainder = 0);
        const Dk = jk(ek, ik).y;
        if (0 === Dk) return this.remainder = 0, !1;
        const fk = this.remainder + Dk,
          Sk = Math.trunc(fk);
        if (this.remainder = fk - Sk, 0 === Sk) return !1;
        const bk = kk.scrollTop;
        return kk.scrollTop = bk + Sk, kk.scrollTop !== bk
      }
      current() {
        var kk;
        return null !== (kk = this.container) && void 0 !== kk && kk.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var Ze = ik(8538);
    const Oe = "[data-pad-inventory-default]",
      ge = ".HotBarGameItemsContainer .InvenItem.Selected",
      Ge = {
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
      Ne = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      Re = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      Je = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      ki = [...Re, ...Je],
      ei = () => {
        return kk = (0, Mk.i)("inventory"), !ki.map(Mk.i).includes(kk) && !(0, Uk.G)(kk);
        var kk
      },
      ii = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      Di = (kk, ek) => {
        const ik = !(null === ek || void 0 === ek || !ek.isHolding());
        return function(kk, ek) {
          const ik = kk.find((kk => kk.visible && ek(kk)));
          if (ik) return ik;
          for (var Dk = arguments.length, fk = new Array(Dk > 2 ? Dk - 2 : 0), Sk = 2; Sk < Dk; Sk++) fk[Sk - 2] = arguments[Sk];
          for (const bk of fk) {
            const ek = Ye(kk.filter(bk));
            if (ek) return ek
          }
          return Ye(kk)
        }(kk, (kk => {
          const {
            element: ek
          } = kk;
          return ek.matches(Oe) || null !== ek.querySelector(Oe) || ek.matches(ge)
        }), (kk => "slot" === kk.kind ? ik || null !== kk.idx && !(null === ek || void 0 === ek || !ek.hasItemAt(kk.idx)) : "recipe" === kk.kind || "pending" === kk.kind), (kk => "slot" === kk.kind || "button" === kk.kind))
      };
    class fi {
      constructor() {
        this.set = null, this.observer = new MutationObserver((kk => {
          kk.some((kk => !Ee(kk.target))) && (this.set = null)
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
              ek = [];
            let ik = !1;
            const Dk = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              fk = new Map,
              Sk = new ke(ek);
            for (const Kk of document.querySelectorAll(Ce)) {
              const Mk = ze(Kk);
              ik ||= null !== Kk.querySelector(".CreativeCategoryTab");
              for (const ik of Kk.querySelectorAll(`${Ae}:first-child`)) {
                const bk = ik.parentElement;
                ve(bk, Kk, Qe(Mk, bk), Dk, kk, ek, Sk, fk)
              }
              for (const ik of Kk.querySelectorAll(je)) {
                var bk, rk, Pk, mk;
                if (ik.closest(Ae) || ik.closest("[data-pad-ignore]")) continue;
                const xk = null === (bk = ik.parentElement) || void 0 === bk ? void 0 : bk.closest(je);
                if (xk && Kk.contains(xk)) continue;
                const nk = Ve(ik),
                  Uk = Fe(ik, nk);
                if (-1 === Uk) continue;
                const Hk = fe(ik.getBoundingClientRect());
                ek.push({
                  element: ik,
                  rect: Hk
                });
                const wk = Sk.findForParent(ik.parentElement, Kk),
                  lk = wk && !fk.has(wk.container) ? wk : null;
                (lk ? Se(Hk) : be(Hk, Dk)) && kk.push({
                  key: De(ik),
                  rect: Hk,
                  panel: Qe(Mk, ik),
                  scrollGroup: null !== (rk = null === lk || void 0 === lk ? void 0 : lk.group) && void 0 !== rk ? rk : null,
                  visible: re(Hk, Dk, null === lk || void 0 === lk ? void 0 : lk.box),
                  clip: null !== (Pk = null === lk || void 0 === lk ? void 0 : lk.box) && void 0 !== Pk ? Pk : null,
                  element: ik,
                  kind: nk,
                  idx: Uk,
                  scrollContainer: null !== (mk = null === lk || void 0 === lk ? void 0 : lk.container) && void 0 !== mk ? mk : null
                })
              }
            }
            for (const [Kk, xk] of fk) xk.holdsOthers = ek.some((kk => kk.element !== Kk && Kk.contains(kk.element) && !kk.element.closest(Ae)));
            const Mk = new Map;
            for (const Kk of kk) Mk.set(Kk.element, Kk);
            return {
              targets: kk,
              byElement: Mk,
              hasCategories: ik,
              probes: ek,
              scrollers: fk
            }
          })(), this.observer.disconnect();
          for (const kk of document.querySelectorAll(Ce)) this.observer.observe(kk, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(kk) {
        !this.set || kk instanceof Element && ((kk, ek) => {
          const ik = kk.scrollers.get(ek);
          if (!ik || ik.holdsOthers || ek.scrollLeft !== ik.left) return !1;
          const Dk = ek.scrollTop - ik.top;
          if (0 === Dk) return !0;
          ik.top = ek.scrollTop;
          for (const fk of ik.probes) fk.rect.top -= Dk;
          for (const fk of ik.targets) fk.rect.top -= Dk, fk.visible = re(fk.rect, ik.viewport, ik.box);
          return !0
        })(this.set, kk) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((kk => {
          return ek = kk.rect, ik = kk.element.getBoundingClientRect(), !(ek.left === ik.left && ek.top === ik.top && ek.width === ik.width && ek.height === ik.height);
          var ek, ik
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const Si = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(Uk.B.map((kk => [kk, (0, Hk.c)(Uk.D)]))), this.stickRepeat = new Uk.e((0, Hk.c)(Uk.bb)), this.pageUpTimer = (0, Hk.c)(Uk.Y), this.pageDownTimer = (0, Hk.c)(Uk.Y), this.stickGate = new Lk, this.pointer = null, this.activePress = null, this.dropLatch = new ae, this.scroller = new oe, this.scrollStickClick = new Te, this.hover = new ce, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new Bk, this.targets = new fi, this.hasCategories = !1, this.wasShowing = !1, this.state = We.c, this.isActive = () => (0, Rk.m)(), this.isShowing = () => "inventory" === Kk.c.getActiveConsumerName() && (0, nk.j)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, Rk.i)()), (0, Rk.m)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var kk;
            this.reopenSlotIdx = null !== (kk = this.focused ? Ie(this.focused).idx : null) && void 0 !== kk ? kk : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, Rk.x)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = kk => {
            (0, rk.unstable_batchedUpdates)((() => {
              this.frame(kk)
            }))
          }, this.shouldBlockRealPointer = kk => kk.isTrusted && !(0, lk.s)(kk) && this.isShowing(), this.noteRealPointer = kk => {
            kk instanceof MouseEvent && kk.isTrusted && !(0, lk.s)(kk) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = kk.clientX, this.lastRealPointer.y = kk.clientY)
          }, this.wakePressActs = kk => {
            var ek;
            return kk === (0, Mk.i)("inventoryClose") ? !(null !== (ek = (0, Rk.i)()) && void 0 !== ek && ek.isHolding()) : !(kk !== (0, Mk.i)("inventory") || !ei()) || ((0, Uk.G)(kk) ? this.isNavButton(kk) : Je.some((ek => (0, Mk.i)(ek) === kk)))
          }
        }
        frame(kk) {
          var ek, ik, Dk, fk, Sk;
          const bk = (0, Rk.i)();
          if (!(0, nk.j)()) return void(this.wasShowing && (this.endInteraction(bk), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), kk.wokeDevice && this.focusWakePointer(!(null === bk || void 0 === bk || !bk.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, xk.h)().inventoryNavigation || this.pointer || this.engagePointer();
          const rk = performance.now();
          this.handleNavigation(kk, rk), this.handlePanels(kk), this.handlePaging(kk, rk), this.handleScroll(kk), this.handleButtons(kk, rk, bk), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const Pk = this.ensureFocus(),
            mk = this.focusContext(bk);
          this.ring.show(Pk);
          const Kk = "slot" === mk.kind ? mk.idx : null,
            Uk = null !== (ek = null === (ik = mk.actionElement) || void 0 === ik ? void 0 : ik.querySelector(".DoCraftItem")) && void 0 !== ek ? ek : mk.actionElement;
          this.pointer ? (this.hover.sync(bk, Kk, Uk, ((kk, ek) => {
            const ik = ek ? Be() : 0;
            return {
              clientX: kk.x - ik,
              clientY: kk.y - ik
            }
          })(this.pointer, mk.holding), mk.holding), Ok.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: kk.isHeld((0, Mk.i)("inventoryPrimary"))
          })) : Pk && this.focused && this.hover.sync(bk, Kk, Uk, ((kk, ek) => {
            if (!ek) return {
              clientX: kk.left + kk.width - 10,
              clientY: kk.top + kk.height / 2 - 10
            };
            const ik = Be();
            return {
              clientX: kk.left + kk.width / 2 - ik,
              clientY: kk.top + kk.height / 2 - ik
            }
          })(Pk, mk.holding), mk.holding), this.publishState({
            showing: !0,
            kind: mk.kind,
            holding: mk.holding,
            slotHasItem: mk.slotHasItem,
            pressHints: null !== (Dk = null === (fk = mk.press) || void 0 === fk ? void 0 : fk.hints) && void 0 !== Dk ? Dk : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && he(this.focusTarget),
            openButtonCloses: ei(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === mk.kind && !(null === (Sk = mk.actionElement) || void 0 === Sk || !Sk.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(kk) {
          var ek;
          const ik = (0, nk.c)();
          if (!ik) return;
          this.targets.revalidate();
          const Dk = this.getTargets().targets;
          this.setFocus(null !== (ek = ye(ik, Dk)) && void 0 !== ek ? ek : kk ? we(ik, Dk, (kk => {
            let {
              rect: ek
            } = kk;
            const Dk = Math.max(ek.left - ik.x, 0, ik.x - (ek.left + ek.width)),
              fk = Math.max(ek.top - ik.y, 0, ik.y - (ek.top + ek.height));
            return Math.hypot(Dk, fk) <= Math.min(ek.width, ek.height) / 2
          })) : null, !1), "cursor" === (0, xk.h)().inventoryNavigation && (this.pointer = {
            x: ik.x,
            y: ik.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const kk = this.lastRealPointer;
          if (!kk || "keyboardMouse" !== Pk.b.get("activeInputDevice")) return;
          const ek = document.elementFromPoint(kk.x, kk.y);
          ek && (0, Tk.j)(null, ek, kk)
        }
        endInteraction(kk) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const ek of this.dpadTimers.values()) ek.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(kk), this.ring.hide(), this.releasePointer(), this.publishState(We.c)
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
          if (null === kk || void 0 === kk || !kk.isConnected || !kk.closest(Ce)) return null;
          const ek = kk.getBoundingClientRect();
          return ek.width > 0 && ek.height > 0 ? {
            left: ek.left,
            top: ek.top,
            width: ek.width,
            height: ek.height
          } : null
        }
        ensureFocus() {
          const kk = this.readFocusRect();
          if (kk || this.pointer) return kk;
          const {
            targets: ek,
            byElement: ik
          } = this.getTargets();
          let Dk = null,
            fk = !1;
          if (this.lastRect) Dk = we(Pe(this.lastRect), ek);
          else {
            var Sk, bk;
            const kk = ((kk, ek) => {
                const ik = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return ik ? Di(kk.filter((kk => ik.contains(kk.element))), ek) : null
              })(ek, (0, Rk.i)()),
              rk = ek.find((kk => null !== kk.idx && kk.idx === this.reopenSlotIdx)),
              Pk = document.querySelector(ge);
            fk = null !== kk || void 0 !== rk, Dk = null !== (Sk = null !== (bk = null !== kk && void 0 !== kk ? kk : rk) && void 0 !== bk ? bk : Pk && ik.get(Pk)) && void 0 !== Sk ? Sk : Ye(ek)
          }
          return this.setFocus(Dk, fk), this.lastRect
        }
        setFocus(kk) {
          let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          kk && (this.focused = kk.element, this.focusTarget = kk, this.panelMemory.set(kk.panel, kk.element), ek && kk.scrollContainer && ((kk, ek) => {
            const ik = kk.getBoundingClientRect(),
              Dk = Qk(ek),
              fk = ek.scrollTop;
            return ik.top < Dk.top ? ek.scrollTop -= Dk.top - ik.top : ik.bottom > Dk.bottom && (ek.scrollTop += ik.bottom - Dk.bottom), ek.scrollTop !== fk
          })(kk.element, kk.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, xk.h)().inventoryNavigation) {
              if (this.lastRect) {
                const kk = Pe(this.lastRect);
                this.pointer = {
                  x: kk.x,
                  y: kk.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const kk = this.lastRect ? Pe(this.lastRect) : {
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
          this.pointer = null, Ok.hide()
        }
        hoverAtPointer() {
          var kk;
          const ek = ye(this.pointer, this.getTargets().targets);
          this.focusTarget = ek, (null === ek || void 0 === ek ? void 0 : ek.element) !== this.focused && (this.focused = null !== (kk = null === ek || void 0 === ek ? void 0 : ek.element) && void 0 !== kk ? kk : null, ek && (this.panelMemory.set(ek.panel, ek.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(kk, ek) {
          const ik = this.focusTarget,
            Dk = ik && (0, xk.h)().cursorMagnetism ? Pe(le(ik)) : null;
          this.pointer = Ck(this.pointer, {
            stick: kk.leftStick,
            moveDeadzone: (0, xk.h)().moveDeadzone,
            dpad: ek,
            dtMs: kk.dtMs,
            cursorSpeedPercent: (0, xk.h)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: Dk
            }
          })
        }
        move(kk) {
          this.targets.revalidate();
          const ek = this.currentTarget();
          ek && this.setFocus(He(ek, this.getTargets().targets, kk))
        }
        step(kk) {
          const ek = this.pointer;
          if (ek && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((kk, ek, ik) => {
            var Dk;
            const fk = {
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
            return null !== (Dk = He(fk, ek, ik)) && void 0 !== Dk ? Dk : we(kk, ek)
          })(ek, this.getTargets().targets, kk));
          this.move(kk)
        }
        isNavButton(kk) {
          return !Re.some((ek => (0, Mk.i)(ek) === kk)) && !(kk === (0, Mk.i)("inventory") && ei())
        }
        handleNavigation(kk, ek) {
          const ik = (0, xk.h)().inventoryNavigation,
            Dk = {
              x: 0,
              y: 0
            };
          let fk = null;
          for (const Pk of Uk.B) {
            const Sk = this.isNavButton(Pk) && kk.isHeld(Pk);
            Sk && (Dk.x += Ge[Pk].x, Dk.y += Ge[Pk].y), this.dpadTimers.get(Pk).update(Sk, ek) && "cursor" !== ik && (fk ??= Pk)
          }
          const Sk = this.stickGate.update(kk.leftStick, (0, xk.h)().moveDeadzone);
          if (fk && (this.step(fk), this.stickGate.lock()), "slot" !== ik) {
            const ek = ((kk, ek, ik, Dk) => "hybrid" !== kk ? "cursor" === kk : !Dk && (ek || ik))(ik, null !== this.pointer, Sk, null !== fk);
            return ek && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(kk, "cursor" === ik ? Dk : {
              x: 0,
              y: 0
            }))
          }
          const bk = (0, Uk.j)(kk.leftStick, (0, xk.h)().moveDeadzone),
            rk = this.stickRepeat.update(Sk ? (0, Uk.fb)(bk) : null, ek);
          rk && this.move(rk)
        }
        applyCategoryPlace() {
          const kk = this.placeAfterCategory;
          if (!kk) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const ek = we(Pe(kk.rect), this.getTargets().targets, (ek => ek.scrollGroup === kk.scrollGroup));
          this.setFocus(ek, !1)
        }
        applyFocusRequest() {
          const kk = (0, Rk.x)();
          kk && (this.targets.invalidate(), this.setFocus((0, Rk.e)(this.getTargets().targets, kk)))
        }
        handlePanels(kk) {
          var ek, ik, Dk;
          const fk = kk.wasPressed((0, Mk.i)("inventoryPanelPrevious")),
            Sk = kk.wasPressed((0, Mk.i)("inventoryPanelNext"));
          if (!fk && !Sk) return;
          const {
            targets: bk
          } = this.getTargets(), rk = (Pk = ((kk, ek) => {
            const ik = [];
            for (const fk of kk) fk.visible && !ik.includes(fk.panel) && ik.push(fk.panel);
            const Dk = kk => {
              const Dk = ek.indexOf(kk);
              return -1 === Dk ? ek.length + ik.indexOf(kk) : Dk
            };
            return ik.sort(((kk, ek) => Dk(kk) - Dk(ek)))
          })(bk, de), mk = null !== (ek = null === (ik = this.focusTarget) || void 0 === ik ? void 0 : ik.panel) && void 0 !== ek ? ek : null, Kk = Sk ? 1 : -1, 0 === Pk.length ? null : Pk[me(null === mk ? -1 : Pk.indexOf(mk), Pk.length, Kk)]);
          var Pk, mk, Kk;
          if (null === rk) return;
          const xk = this.panelMemory.get(rk),
            nk = bk.filter((kk => kk.panel === rk)),
            Uk = null !== (Dk = nk.find((kk => kk.element === xk && kk.visible))) && void 0 !== Dk ? Dk : Di(nk, (0, Rk.i)());
          this.setFocus(Uk)
        }
        handlePaging(kk, ek) {
          const ik = (0, Mk.i)("menuPageUp"),
            Dk = (0, Mk.i)("menuPageDown"),
            fk = this.pageUpTimer.update(kk.isHeld(ik), ek),
            Sk = this.pageDownTimer.update(kk.isHeld(Dk), ek);
          if (!fk && !Sk) return;
          const bk = Sk ? 1 : -1;
          if (!kk.wasPressed(Sk ? Dk : ik) && this.hasCategories) return;
          if ((kk => {
              const ek = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === ek.length) return !1;
              const ik = ek.findIndex((kk => kk.classList.contains("Selected"))),
                Dk = ek[me(ik, ek.length, kk)];
              return (0, Tk.i)(Dk, (0, Tk.u)(Dk)), !0
            })(bk)) {
            var rk, Pk;
            this.targets.invalidate();
            const kk = null !== (rk = null === (Pk = this.focusTarget) || void 0 === Pk ? void 0 : Pk.scrollGroup) && void 0 !== rk ? rk : null,
              ek = this.readFocusRect();
            return void(this.placeAfterCategory = null !== kk && ek && !this.pointer ? {
              rect: ek,
              scrollGroup: kk
            } : null)
          }
          const {
            targets: mk
          } = this.getTargets(), Kk = this.currentTarget(), xk = Kk && he(Kk) ? Kk : mk.find((kk => he(kk) && kk.visible));
          if (!xk) return;
          const nk = ((kk, ek, ik, Dk) => {
            if (null === kk.scrollGroup) return null;
            const fk = Pe(kk.rect),
              Sk = fk.x,
              bk = fk.y + ("Down" === ik ? Dk : -Dk);
            let rk = null,
              Pk = 1 / 0;
            for (const mk of ek) {
              if (mk.scrollGroup !== kk.scrollGroup || mk.key === kk.key) continue;
              const ek = Pe(mk.rect);
              if ("Down" === ik ? ek.y <= fk.y : ek.y >= fk.y) continue;
              const Dk = Math.hypot(ek.x - Sk, ek.y - bk);
              Dk < Pk && (rk = mk, Pk = Dk)
            }
            return rk
          })(xk, mk, bk > 0 ? "Down" : "Up", xk.scrollContainer.clientHeight);
          this.setFocus(null !== nk && void 0 !== nk ? nk : xk)
        }
        handleScroll(kk) {
          var ek, ik, Dk, fk, Sk, bk;
          if (!this.scroller.isScrolling(kk.rightStick)) return void this.scroller.reset();
          const {
            targets: rk
          } = this.getTargets(), Pk = this.pointer, mk = !Pk && this.focusTarget && he(this.focusTarget) ? this.focusTarget.scrollContainer : null, Mk = Pk && (null === (ek = rk.find((kk => kk.clip && pe(kk.clip, Pk)))) || void 0 === ek ? void 0 : ek.scrollContainer), Kk = null !== (ik = null !== (Dk = null !== (fk = this.scroller.current()) && void 0 !== fk ? fk : Mk) && void 0 !== Dk ? Dk : mk) && void 0 !== ik ? ik : null === (Sk = rk.find(he)) || void 0 === Sk ? void 0 : Sk.scrollContainer;
          if (!Kk || !this.scroller.step(Kk, kk.rightStick, kk.dtMs)) return;
          this.targets.scrolled(Kk);
          const xk = Pk || (null === (bk = this.focusTarget) || void 0 === bk ? void 0 : bk.scrollContainer) !== Kk ? null : this.readFocusRect();
          if (!xk) return;
          const nk = Qk(Kk),
            Uk = Pe(xk);
          if (Uk.y < nk.top || Uk.y > nk.bottom) {
            const kk = this.focusTarget.scrollGroup,
              ek = we(Uk, this.getTargets().targets, (ek => ek.scrollGroup === kk));
            this.setFocus(ek, !1)
          }
        }
        focusContext(kk) {
          const {
            kind: ek,
            idx: ik
          } = this.focused ? Ie(this.focused) : {
            kind: null,
            idx: null
          }, Dk = this.focused ? ue(this.focused) : null, fk = Dk ? (0, Ze.e)(Dk) : null;
          return {
            kind: ek,
            idx: ik,
            actionElement: Dk,
            press: fk,
            hasPress: null !== fk,
            hasBack: !(null === fk || void 0 === fk || !fk.back),
            holding: kk.isHolding(),
            slotHasItem: null !== ik && kk.hasItemAt(ik)
          }
        }
        handleButtons(kk, ek, ik) {
          var Dk, fk;
          if (!this.activePress || kk.isHeld(this.activePress.button) && (Dk = this.activePress.target, fk = this.focused, null !== Dk.recipe ? qe(fk).recipe === Dk.recipe : fk === Dk.element) || this.releasePress(), this.scrollStickClick.update(kk.rightStick, ek), !this.handleHotbarPick(kk, ik)) {
            for (const [Dk, fk] of Ne) {
              const Sk = (0, Mk.i)(fk);
              if (!kk.wasPressed(Sk) || "openButton" === Dk && !ei()) continue;
              if ("RS" === Sk && !this.scrollStickClick.allowsClick(ek)) continue;
              const bk = this.focusContext(ik),
                rk = Gk(Dk, bk);
              rk && this.runIntent(rk, bk, Sk, ik)
            }
            this.handleDrop(kk, ek, ik)
          }
        }
        handleHotbarPick(kk, ek) {
          const ik = this.hotbarPick;
          if (!ik) return !1;
          const Dk = kk.wasPressed((0, Mk.i)("inventoryPrimary")) || kk.wasPressed((0, Mk.i)("inventoryHotbarSwap"));
          if (!Dk && !kk.wasPressed((0, Mk.i)("inventoryClose")) && !ek.isHolding()) return !(kk.wasPressed((0, Mk.i)("inventory")) && ei());
          const fk = this.focusTarget;
          Dk && "hotbar" === (null === fk || void 0 === fk ? void 0 : fk.panel) && null !== fk.idx && fk.idx !== ik.idx && (ek.swapWithHotbar(fk.idx, ik.idx), this.afterAction()), this.hotbarPick = null;
          const Sk = ik.element.isConnected ? this.getTargets().byElement.get(ik.element) : void 0;
          return Sk && this.setFocus(Sk), !0
        }
        startHotbarPick(kk) {
          var ek;
          const {
            targets: ik,
            byElement: Dk
          } = this.getTargets(), fk = document.querySelector(ge), Sk = null !== (ek = fk && Dk.get(fk)) && void 0 !== ek ? ek : ik.find((kk => "hotbar" === kk.panel));
          Sk && this.focused && (this.hotbarPick = {
            idx: kk,
            element: this.focused
          }, this.setFocus(Sk))
        }
        focusKey() {
          return this.focused ? De(this.focused) : null
        }
        handleDrop(kk, ek, ik) {
          const Dk = (0, Mk.i)("inventoryDrop");
          if (kk.wasPressed(Dk)) {
            const kk = (fk = this.focusContext(ik)).holding ? {
              kind: "XM"
            } : "slot" === fk.kind && fk.slotHasItem && null !== fk.idx ? {
              kind: "slot",
              idx: fk.idx
            } : null;
            return void(kk && (this.dropFrom(kk, !1, ik), this.dropLatch.press(kk, this.focusKey(), ek, wk.b[(0, xk.h)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var fk;
          const Sk = this.dropLatch.update(kk.isHeld(Dk), this.focusKey(), ek);
          Sk && ((kk, ek, ik) => "XM" === kk.kind ? ek : !ek && ik(kk.idx))(Sk, ik.isHolding(), ik.hasItemAt) && (this.dropFrom(Sk, !0, ik), this.afterAction())
        }
        dropFrom(kk, ek, ik) {
          "XM" === kk.kind ? ik.dropHeld(ek, this.slotPoint()) : ik.dropSlot(kk.idx, ek)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (kk => {
            const ek = Pe(kk);
            return {
              clientX: ek.x,
              clientY: ek.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(kk, ek, ik, Dk) {
          const fk = ek.idx,
            Sk = ek.actionElement;
          switch (Sk && ii.has(kk) && (0, lk.u)(Sk), kk) {
            case "slotPrimary":
              Dk.primary(fk, this.slotPoint());
              break;
            case "slotSecondary":
              Dk.secondary(fk, this.slotPoint());
              break;
            case "slotQuickMove":
              Dk.quickMove(fk, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(fk);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(ek.press, "pressPrimary" === kk ? "primary" : "secondary", ik);
              break;
            case "click":
              (0, Tk.i)(Sk, (0, Tk.u)(Sk));
              break;
            case "openKeyboard":
              (0, Tk.H)(Sk) && (0, Tk.G)(Sk);
              break;
            case "pressBack":
              ek.press.back();
              break;
            case "cancel":
              Dk.cancel();
              break;
            case "close":
              return this.releasePress(), void Dk.close()
          }
          this.afterAction()
        }
        startPress(kk, ek, ik) {
          this.releasePress(), kk.press(ek) && (this.activePress = {
            handlers: kk,
            button: ik,
            target: qe(this.focused)
          })
        }
        releasePress() {
          var kk, ek, ik;
          null === (kk = this.activePress) || void 0 === kk || null === (ek = (ik = kk.handlers).release) || void 0 === ek || ek.call(ik), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(kk) {
          ((kk, ek) => {
            var ik, Dk, fk, Sk, bk, rk;
            return kk.showing === ek.showing && kk.kind === ek.kind && kk.holding === ek.holding && kk.slotHasItem === ek.slotHasItem && (null === (ik = kk.pressHints) || void 0 === ik ? void 0 : ik.primary) === (null === (Dk = ek.pressHints) || void 0 === Dk ? void 0 : Dk.primary) && (null === (fk = kk.pressHints) || void 0 === fk ? void 0 : fk.secondary) === (null === (Sk = ek.pressHints) || void 0 === Sk ? void 0 : Sk.secondary) && (null === (bk = kk.pressHints) || void 0 === bk ? void 0 : bk.back) === (null === (rk = ek.pressHints) || void 0 === rk ? void 0 : rk.back) && kk.hasCategories === ek.hasCategories && kk.hasList === ek.hasList && kk.openButtonCloses === ek.openButtonCloses && kk.steppingSlots === ek.steppingSlots && kk.hotbarPicking === ek.hotbarPicking && kk.quickMoveToHotbar === ek.quickMoveToHotbar && kk.dropStackHold === ek.dropStackHold
          })(kk, this.state) || (this.state = kk, mk.j.tm(We.f, kk))
        }
      },
      bi = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var ri = ik(8547),
      Pi = ik(302),
      mi = ik(1614),
      Mi = ik(8002);
    const Ki = "[data-pad-secondary]",
      xi = kk => kk instanceof HTMLElement && (0, Jk.s)(kk) && !(0, Jk.v)(kk),
      ni = kk => {
        const ek = kk.querySelector(Ki);
        if (ek && xi(ek)) return ek;
        for (const fk of null !== (ik = null === (Dk = kk.parentElement) || void 0 === Dk ? void 0 : Dk.children) && void 0 !== ik ? ik : []) {
          var ik, Dk;
          if (fk !== kk && fk.matches(Ki) && xi(fk)) return fk
        }
        return null
      },
      Ui = (kk, ek, ik, Dk) => Math.max(0, Math.max(kk, ik) - Math.min(ek, Dk)),
      Hi = (kk, ek, ik, Dk) => Math.max(0, Math.min(ek, Dk) - Math.max(kk, ik)),
      wi = (kk, ek, ik) => {
        const Dk = (kk.left + kk.right) / 2,
          fk = (kk.top + kk.bottom) / 2,
          Sk = (ek.left + ek.right) / 2,
          bk = (ek.top + ek.bottom) / 2;
        if ("Left" === ik || "Right" === ik) {
          const rk = "Right" === ik ? 1 : -1;
          return {
            forwardGap: "Right" === ik ? ek.left - kk.right : kk.left - ek.right,
            centreForward: (Sk - Dk) * rk,
            sidewaysGap: Ui(kk.top, kk.bottom, ek.top, ek.bottom),
            sidewaysOverlap: Hi(kk.top, kk.bottom, ek.top, ek.bottom),
            centreSideways: Math.abs(bk - fk),
            startSideways: Math.abs(ek.top - kk.top),
            fromSidewaysSize: kk.bottom - kk.top,
            toSidewaysSize: ek.bottom - ek.top,
            toLength: ek.right - ek.left
          }
        }
        const rk = "Down" === ik ? 1 : -1;
        return {
          forwardGap: "Down" === ik ? ek.top - kk.bottom : kk.top - ek.bottom,
          centreForward: (bk - fk) * rk,
          sidewaysGap: Ui(kk.left, kk.right, ek.left, ek.right),
          sidewaysOverlap: Hi(kk.left, kk.right, ek.left, ek.right),
          centreSideways: Math.abs(Sk - Dk),
          startSideways: Math.abs(ek.left - kk.left),
          fromSidewaysSize: kk.right - kk.left,
          toSidewaysSize: ek.right - ek.left,
          toLength: ek.bottom - ek.top
        }
      },
      li = kk => kk.centreForward > .5 && kk.forwardGap >= -kk.toLength / 2,
      yi = kk => {
        const ek = kk.sidewaysOverlap > 0 ? 0 : 2 * kk.fromSidewaysSize,
          ik = kk.fromSidewaysSize > 1.5 * kk.toSidewaysSize ? kk.startSideways : kk.centreSideways;
        return Math.max(0, kk.forwardGap) + 3 * kk.sidewaysGap + ek + .1 * ik
      },
      Yi = (kk, ek) => Hi(kk.top, kk.bottom, ek.top, ek.bottom) > 0 || ek.bottom - ek.top > ek.right - ek.left,
      Li = (kk, ek, ik, Dk, fk, Sk) => {
        const bk = fk ? Ai(kk, ek, ik, fk) : new Set,
          rk = si(kk, ek, ik, bk);
        return rk < 0 && bk.size > 0 && Sk ? Ci(kk, ek, ik, Sk) : Dk && rk >= 0 ? ji(kk, ek, ik, Dk, rk, bk) : rk
      },
      Ci = (kk, ek, ik, Dk) => {
        const fk = new Set,
          Sk = si(kk, ek, "Up", fk) >= 0,
          bk = si(kk, ek, "Down", fk) >= 0,
          rk = new Set;
        return ek.forEach(((ek, ik) => {
          const fk = ek.top + ek.bottom < kk.top + kk.bottom;
          Dk[ik] && !(fk ? Sk : bk) || rk.add(ik)
        })), si(kk, ek, ik, rk)
      },
      Ai = (kk, ek, ik, Dk) => {
        const fk = new Set;
        return "Left" !== ik && "Right" !== ik || ek.forEach(((ek, ik) => {
          Dk[ik] && Hi(kk.top, kk.bottom, ek.top, ek.bottom) <= 0 && fk.add(ik)
        })), fk
      },
      ji = (kk, ek, ik, Dk, fk, Sk) => {
        const bk = wi(kk, ek[fk], ik).forwardGap;
        let rk = fk,
          Pk = Dk[fk],
          mk = 1 / 0;
        return ek.forEach(((ek, Mk) => {
          const Kk = Dk[Mk];
          if (Sk.has(Mk) || Kk < Pk || Kk === Pk && rk === fk) return;
          const xk = wi(kk, ek, ik);
          if (!li(xk) || xk.forwardGap < 0 || xk.forwardGap >= bk) return;
          const nk = yi(xk);
          (Kk > Pk || nk < mk) && (rk = Mk, Pk = Kk, mk = nk)
        })), rk
      },
      si = (kk, ek, ik, Dk) => {
        let fk = -1,
          Sk = 1 / 0;
        if (ek.forEach(((ek, bk) => {
            const rk = ((kk, ek, ik) => {
              const Dk = wi(kk, ek, ik);
              if (!li(Dk)) return null;
              const fk = Math.max(0, Dk.forwardGap);
              return Dk.sidewaysOverlap <= 0 && Dk.sidewaysGap > 2 * (fk + 1) ? null : yi(Dk)
            })(kk, ek, ik);
            null !== rk && rk < Sk && !Dk.has(bk) && (Sk = rk, fk = bk)
          })), fk < 0) return -1;
        const bk = ek[fk],
          rk = wi(kk, bk, ik).forwardGap;
        let Pk = rk,
          mk = fk;
        return ek.forEach(((ek, Sk) => {
          if (Sk === fk || Dk.has(Sk) || !((kk, ek, ik) => {
              const Dk = "Left" === ik || "Right" === ik,
                fk = Dk ? Hi(kk.top, kk.bottom, ek.top, ek.bottom) : Hi(kk.left, kk.right, ek.left, ek.right),
                Sk = Dk ? Math.min(kk.bottom - kk.top, ek.bottom - ek.top) : Math.min(kk.right - kk.left, ek.right - ek.left);
              return fk > 0 && fk >= Sk / 2
            })(ek, bk, ik)) return;
          const Mk = wi(kk, ek, ik);
          li(Mk) && Mk.forwardGap + Mk.toLength <= rk + 1 && Mk.forwardGap < Pk && (Pk = Mk.forwardGap, mk = Sk)
        })), mk
      },
      di = (kk, ek) => {
        let ik = -1,
          Dk = 1 / 0;
        return ek.forEach(((ek, fk) => {
          const Sk = Math.max(ek.left - kk.x, 0, kk.x - ek.right),
            bk = Math.max(ek.top - kk.y, 0, kk.y - ek.bottom),
            rk = Math.hypot(Sk, bk);
          rk < Dk && (Dk = rk, ik = fk)
        })), ik
      },
      Vi = (kk, ek) => {
        const ik = Math.min(kk.bottom - kk.top, ek.bottom - ek.top) / 2;
        return Math.abs(kk.top - ek.top) > ik ? kk.top - ek.top : kk.left - ek.left
      },
      Fi = kk => {
        let ek = -1;
        for (let ik = 0; ik < kk.length; ik++)(ek < 0 || Vi(kk[ik], kk[ek]) < 0) && (ek = ik);
        return ek
      };
    var ui = ik(1650),
      qi = ik(8552),
      Ii = ik(8556);
    const zi = kk => {
        if ("death" !== kk || "inGame" !== Pk.b.get("gameState") || "off" === (0, xk.h)().quickChat || null === (0, ui.e)()) return !1;
        const ek = (0, Mk.i)("chat");
        return ek !== (0, Mk.i)("menuConfirm") && ek !== (0, Mk.i)("menuBack")
      },
      Qi = new qi.d;
    var vi = ik(4253),
      Ei = ik(8560);
    const ai = kk => {
        let ek = null;
        for (const ik of kk.querySelectorAll("[data-pad-tabs]"))(0, Jk.s)(ik) && (!ek || Number(ik.dataset.padTabs) < Number(ek.dataset.padTabs)) && (ek = ik);
        return ek
      },
      Wi = (kk, ek, ik, Dk) => {
        kk.focusWhenFound((() => {
          const fk = kk.pickInitial(ek);
          if (fk && !ik.has(fk) && (null === Dk || void 0 === Dk || !Dk.contains(fk))) return fk;
          const Sk = ((kk, ek) => {
              const ik = ek => kk.getEnabledCandidates(ek).filter((kk => !kk.closest("[data-pad-tabs]")));
              for (const Dk of (0, Jk.j)(ek)) {
                const kk = ik(Dk);
                if (kk.length > 0) return kk
              }
              return ik(ek)
            })(kk, ek).filter((kk => !ik.has(kk))),
            bk = Fi(Sk.map((kk => kk.getBoundingClientRect())));
          return bk >= 0 ? Sk[bk] : null
        }), 3e3)
      },
      ti = (kk, ek, ik, Dk) => {
        var fk;
        const Sk = ((kk, ek) => {
          if (0 === kk.length) return null;
          const ik = kk.findIndex((kk => "true" === kk.dataset.padSelected));
          return ik < 0 ? ek > 0 ? kk[0] : kk[kk.length - 1] : kk[(ik + ek + kk.length) % kk.length]
        })([...ik.querySelectorAll("[data-pad-tab]")].filter((kk => (0, Jk.s)(kk) && !(0, Jk.v)(kk))), Dk);
        if (!Sk) return;
        const bk = null !== (fk = null === kk || void 0 === kk ? void 0 : kk.getFocused()) && void 0 !== fk ? fk : null,
          rk = !(null === bk || void 0 === bk || !bk.isConnected) && ik.contains(bk),
          Pk = kk && !rk ? new Set(kk.getEnabledCandidates(ek)) : null;
        (0, Tk.b)(Sk), kk && (Pk ? Wi(kk, ek, Pk, ik) : kk.setFocus(Sk, {
          byUser: !0
        }))
      },
      Xi = kk => {
        var ek;
        const ik = Qk(null !== (ek = Vk(kk, "x")) && void 0 !== ek ? ek : kk),
          Dk = (0, Jk.h)(kk).filter((kk => !(0, Jk.v)(kk))),
          fk = Dk.filter((kk => vk(kk.getBoundingClientRect(), ik)));
        return (fk.length > 0 ? fk : Dk).sort(((kk, ek) => Vi(kk.getBoundingClientRect(), ek.getBoundingClientRect())))
      },
      Bi = (kk, ek, ik) => {
        const Dk = [...ek.querySelectorAll("[data-pad-row]")].filter(Jk.s),
          fk = kk.getFocused(),
          Sk = fk ? Dk.findIndex((kk => kk.contains(fk))) : -1;
        let bk = 0,
          rk = ik > 0 ? 0 : Dk.length - 1;
        if (Sk >= 0 && fk) bk = Math.max(0, Xi(Dk[Sk]).indexOf(fk)), rk = Sk + ik;
        else if (fk) {
          const kk = fk.getBoundingClientRect(),
            ek = Dk.map((ek => {
              const Dk = ek.getBoundingClientRect();
              return ik > 0 ? Dk.top >= kk.top : Dk.bottom <= kk.bottom
            }));
          rk = ik > 0 ? ek.indexOf(!0) : ek.lastIndexOf(!0)
        }
        for (let Pk = rk; Pk >= 0 && Pk < Dk.length; Pk += ik) {
          const ek = Xi(Dk[Pk]);
          if (ek.length > 0) return void kk.setFocus(ek[Math.min(bk, ek.length - 1)], {
            byUser: !0
          })
        }
      },
      ci = (kk, ek, ik) => {
        var Dk, fk;
        const Sk = null !== (Dk = null === kk || void 0 === kk ? void 0 : kk.getFocused()) && void 0 !== Dk ? Dk : null,
          bk = null !== Sk && void 0 !== Sk && Sk.closest("[data-pad-row]") ? "x" : "y",
          rk = null !== (fk = Sk ? Vk(Sk, bk, ek) : null) && void 0 !== fk ? fk : uk(ek, bk);
        if (!rk) return;
        const Pk = Sk ? (0, Tk.u)(Sk) : null;
        if (zk(rk, bk, ik * ("y" === bk ? rk.clientHeight : rk.clientWidth) * .85), !kk || !Pk) return;
        const mk = Qk(rk),
          Mk = kk.getEnabledCandidates(ek).filter((kk => rk.contains(kk) && vk(kk.getBoundingClientRect(), mk))),
          Kk = di(Pk, Mk.map((kk => kk.getBoundingClientRect())));
        Kk >= 0 && kk.setFocus(Mk[Kk], {
          scroll: !1,
          byUser: !0
        })
      };
    let Ti = null;
    const oi = (kk, ek) => {
        var ik, Dk;
        const fk = ek.querySelector("[data-pad-friends-column]"),
          Sk = kk.getFocused();
        if (!fk || !Sk || !fk.contains(Sk)) return !1;
        const bk = kk.getEnabledCandidates(ek).filter((kk => !fk.contains(kk))),
          rk = di((0, Tk.u)(Sk), bk.map((kk => kk.getBoundingClientRect()))),
          Pk = null === (ik = Ti) || void 0 === ik ? void 0 : ik.deref();
        return kk.setFocus(null !== Pk && void 0 !== Pk && Pk.isConnected ? Pk : null !== (Dk = bk[rk]) && void 0 !== Dk ? Dk : null, {
          byUser: !0
        }), !0
      },
      Zi = kk => {
        const ek = (0, Mk.i)(kk);
        return (0, Uk.G)(ek) || Mi.w.some((kk => (0, Mk.i)(kk) === ek)) ? null : ek
      },
      Oi = (kk, ek) => {
        const ik = Zi(ek);
        return null !== ik && kk.wasPressed(ik)
      },
      gi = function(kk, ek, ik) {
        let Dk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const fk = (kk => {
            var ek, ik;
            return null !== (ek = null === (ik = ai(kk)) || void 0 === ik ? void 0 : ik.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== ek ? ek : null
          })(ek),
          Sk = kk && fk ? new Set(kk.getEnabledCandidates(ek)) : null;
        (0, ri.b)(), ik === Pi.r.SETTINGS && (0, mi.n)(Pk.b.get("openEverythingMenuName")) ? Pk.b.set({
          openEverythingMenuName: ik
        }) : (0, mi.A)(new Event("padMenuShortcut"), ik, Dk), kk && Sk && fk && Wi(kk, ek, Sk, fk.closest("[data-pad-tabs]"))
      },
      Gi = kk => null !== kk.closest(".Dropdown-root") || null !== kk.querySelector(".Dropdown-root.is-open"),
      Ni = kk => null !== (0, Ei.c)() && "popup" !== kk.layer.kind && !ai(kk.root) && !Gi(kk.root),
      Ri = (0, Hk.c)(Uk.Y),
      Ji = (0, Hk.c)(Uk.Y),
      kD = (kk, ek, ik) => {
        if (((kk, ek) => {
            const ik = (0, Mk.i)("chat");
            return zi(ek) && kk.isHeld(ik) ? "hold" === Qi.update(kk.wasPressed(ik), kk.isHeld(ik), performance.now(), wk.b[(0, xk.h)().tapHoldTime].wheelMs) && (Kk.c.consumeButton(ik), mk.j.tm(Ii.l), !0) : (Qi.release(), !1)
          })(ek, ik.layer.kind)) return !0;
        const Dk = ik.root;
        for (const [bk, rk] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (ek.wasPressed((0, Mk.i)(bk))) {
            const ek = Gi(Dk) ? null : ai(Dk);
            if (ek) ti(kk, Dk, ek, rk);
            else if (Ni(ik)) {
              var fk;
              const ek = kk ? new Set(kk.getEnabledCandidates(Dk)) : null;
              null !== (fk = (0, Ei.c)()) && void 0 !== fk && fk(rk) && kk && ek && Wi(kk, Dk, ek, null)
            } else kk && Bi(kk, Dk, rk);
            return !0
          } for (const [bk, rk, Pk] of [
            ["menuPageUp", -1, Ri],
            ["menuPageDown", 1, Ji]
          ]) {
          const ik = (0, Mk.i)(bk);
          if (ek.wasPressed(ik) && Pk.reset(), Pk.update(ek.isHeld(ik), performance.now())) return ci(kk, Dk, rk), !0
        }
        const Sk = "popup" === ik.layer.kind;
        return Oi(ek, "pause") ? (Sk || (0, mi.w)() && "menu" !== ik.layer.kind || gi(kk, Dk, (0, mi.w)() ? Pi.r.SETTINGS : (0, vi.c)()), !0) : !!Oi(ek, "leaderboard") && ("home" === ik.layer.kind ? (kk => {
          const ek = [...kk.querySelectorAll("[data-pad-notifications]")].find(Jk.s);
          ek && (0, Tk.b)(ek)
        })(Dk) : Sk || gi(kk, Dk, Pi.r.LOBBY_LEADERBOARD, "inGame" === Pk.b.get("gameState")), !0)
      },
      eD = (kk, ek, ik) => {
        if (kD(kk, ek, ik)) return !0;
        const Dk = "home" === ik.layer.kind;
        if (ek.wasPressed((0, Mk.i)("menuSecondary"))) {
          const ek = kk.getFocused(),
            fk = ek ? ni(ek) : null;
          if (fk) return (0, Tk.b)(fk), !0;
          if (Dk) {
            const ek = ik.root.querySelector("[data-pad-search] input");
            return ek && (0, Jk.t)(ek, ik.root) ? (kk.setFocus(ek, {
              byUser: !0
            }), (0, Tk.b)(ek)) : Pk.b.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!Dk || !Oi(ek, "inventory")) && (((kk, ek) => {
          var ik, Dk;
          const fk = ek.querySelector("[data-pad-friends-column]");
          if (!fk || !(0, Jk.s)(fk)) return void(0, mi.A)(new Event("padMenuShortcut"), Pi.r.SOCIAL);
          if (oi(kk, ek)) return;
          const Sk = null !== (ik = null === (Dk = fk.querySelector("[data-pad-friends-start]")) || void 0 === Dk ? void 0 : Dk.getBoundingClientRect().top) && void 0 !== ik ? ik : -1 / 0,
            bk = kk.getEnabledCandidates(fk),
            rk = bk.filter((kk => kk.getBoundingClientRect().top >= Sk)),
            Pk = rk.length > 0 ? rk : bk,
            mk = Fi(Pk.map((kk => kk.getBoundingClientRect())));
          kk.setFocus(mk >= 0 ? Pk[mk] : null, {
            byUser: !0
          })
        })(kk, ik.root), !0)
      },
      iD = kk => {
        var ek, ik, Dk;
        const fk = (0, Tk.x)(kk);
        if (null !== fk) return fk;
        const Sk = (null !== (ek = null !== (ik = null !== (Dk = kk.getAttribute("aria-label")) && void 0 !== Dk ? Dk : kk.getAttribute("title")) && void 0 !== ik ? ik : kk.textContent) && void 0 !== ek ? ek : "").replace(/\s+/g, " ").trim();
        return Sk ? `${kk.tagName}:${Sk.slice(0,100)}` : null
      };
    class DD {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(kk) {
        const ek = this.history.indexOf(kk);
        if (ek >= 0) {
          for (const kk of this.history.splice(ek + 1)) this.remembered.delete(kk);
          return !0
        }
        return this.remembered.delete(kk), this.history.push(kk), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(kk) {
        this.remembered.delete(kk);
        const ek = this.history.indexOf(kk);
        ek >= 0 && this.history.splice(ek, 1)
      }
      remember(kk, ek, ik, Dk) {
        const fk = iD(ek),
          Sk = (0, Tk.x)(ek),
          bk = null !== Sk && ((kk, ek) => {
            let ik = 0;
            for (const Dk of kk.querySelectorAll("[data-pad-key], [href]"))
              if ((Dk.getAttribute("data-pad-key") === ek || Dk.getAttribute("href") === ek) && (ik++, ik > 1)) return !0;
            return !1
          })(ik, Sk) ? Math.max(0, this.twins(Dk(), Sk).indexOf(ek)) : 0;
        this.remembered.set(kk, {
          element: new WeakRef(ek),
          identity: fk,
          ordinal: bk
        })
      }
      has(kk) {
        return this.remembered.has(kk)
      }
      recall(kk, ek) {
        var ik, Dk;
        const fk = this.remembered.get(kk);
        if (!fk) return null;
        const Sk = fk.element.deref();
        if (Sk && ek.includes(Sk)) return Sk;
        if (null === fk.identity) return null;
        const bk = this.twins(ek, fk.identity);
        return null !== (ik = null !== (Dk = bk[fk.ordinal]) && void 0 !== Dk ? Dk : bk[0]) && void 0 !== ik ? ik : null
      }
      twins(kk, ek) {
        return kk.filter((kk => iD(kk) === ek))
      }
    }
    var fD = ik(1261);
    const SD = kk => {
        const ek = [];
        let ik = kk;
        for (; ik && ik !== document.body;) {
          const kk = getComputedStyle(ik).zIndex;
          "auto" !== kk && ek.push(Number(kk) || 0), ik = ik.parentElement
        }
        return ek.reverse()
      },
      bD = (kk, ek) => {
        const ik = ((kk, ek) => {
          const ik = Math.max(kk.length, ek.length);
          for (let Sk = 0; Sk < ik; Sk++) {
            var Dk, fk;
            const ik = (null !== (Dk = kk[Sk]) && void 0 !== Dk ? Dk : 0) - (null !== (fk = ek[Sk]) && void 0 !== fk ? fk : 0);
            if (0 !== ik) return ik
          }
          return 0
        })(SD(kk), SD(ek));
        if (0 !== ik) return ik > 0;
        if (kk.contains(ek)) return !1;
        if (ek.contains(kk)) return !0;
        const Dk = kk.compareDocumentPosition(ek);
        return !!(Dk & Node.DOCUMENT_POSITION_PRECEDING) || !(Dk & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      rD = (kk, ek) => {
        var ik;
        return null !== (ik = bD(kk.root, ek.root)) && void 0 !== ik ? ik : kk.order > ek.order
      },
      PD = (kk, ek) => ek.some((ek => !ek.contains(kk) && !kk.contains(ek) && !0 === bD(ek, kk)));
    let mD = null,
      MD = null,
      KD = -1;
    const xD = () => {
        var kk;
        const ek = null === (kk = document.timeline) || void 0 === kk ? void 0 : kk.currentTime,
          ik = "number" === typeof ek ? ek : null;
        if (null !== ik && ik === MD && KD === (0, fD.c)()) return mD;
        let Dk = null;
        const fk = [],
          Sk = [...document.querySelectorAll("[data-pad-covers]")].filter(Jk.s);
        for (const bk of (0, fD.f)()) {
          const kk = bk.getRoot(),
            ek = !!kk && (0, Jk.s)(kk) && !PD(kk, Sk);
          if (bk.shown && !ek && fk.push(bk), bk.shown = ek, !kk || !ek) continue;
          const ik = {
            layer: bk,
            root: kk,
            order: bk.order
          };
          Dk && !rD(ik, Dk) || (Dk = ik)
        }
        mD = Dk, MD = ik, KD = (0, fD.c)();
        for (const bk of fk)(0, fD.i)(bk);
        return mD
      },
      nD = () => {
        const kk = xD();
        return !(null === kk || void 0 === kk || !kk.layer.close) && (kk.layer.close(), MD = null, !0)
      },
      UD = () => {
        var kk, ek;
        return null !== (kk = null === (ek = xD()) || void 0 === ek ? void 0 : ek.root) && void 0 !== kk ? kk : null
      },
      HD = kk => kk ? {
        ...kk,
        root: UD()
      } : null;
    let wD = null,
      lD = null,
      pD = (0, xk.h)().menuNavigation,
      yD = null;
    const YD = new Lk;
    let LD = null;
    mk.j.subscribe(xk.f, (() => {
      const kk = (0, xk.h)().menuNavigation;
      kk !== pD && (pD = kk, wD = null, lD = null)
    }));
    const CD = () => {
        var kk;
        return null !== (kk = wD) && void 0 !== kk ? kk : (0, xk.h)().menuNavigation
      },
      AD = kk => {
        if (VD()) {
          if (yD = HD(kk), "hybrid" === CD()) return YD.lock(), void(lD = lD ? null : UD());
          wD = "focus" === CD() ? "cursor" : "focus"
        }
      },
      jD = () => {
        const kk = yD;
        return yD = null, kk
      };
    let sD = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const dD = function(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const ik = sD.root === kk,
          Dk = ik ? sD.firstSeenMs : ek,
          fk = sD.has || ek - Dk > 1e3;
        return (!ik || !fk || ek - sD.atMs > 250) && (sD = {
          root: kk,
          firstSeenMs: Dk,
          atMs: ek,
          has: (0, Jk.l)(kk)
        }), sD.has
      },
      VD = () => {
        const kk = UD();
        return null !== kk && dD(kk)
      },
      FD = () => {
        const kk = xD();
        return lD && (null === kk || void 0 === kk ? void 0 : kk.root) !== lD && (lD = null), (kk => {
          let {
            mode: ek,
            hasLayer: ik,
            hasCandidates: Dk,
            hybridCursorEngaged: fk
          } = kk;
          return ik ? "cursor" !== ek && Dk() ? "hybrid" === ek && fk ? "cursor" : "focus" : "cursor" : null
        })({
          mode: CD(),
          hasLayer: null !== kk,
          hasCandidates: () => null !== kk && dD(kk.root),
          hybridCursorEngaged: null !== lD
        })
      },
      uD = () => "hybrid" === CD() && VD(),
      qD = "pad-focused";
    var ID = ik(4491),
      zD = ik(4951);
    const QD = "[data-pad-destructive]",
      vD = `${QD}, [data-pad-back]`,
      ED = kk => ({
        rect: kk.getBoundingClientRect(),
        destructive: kk.matches(QD),
        closes: null !== kk.closest("[data-pad-close-button]"),
        unavailable: kk.matches("[data-pad-unavailable]")
      }),
      hD = kk => {
        let {
          destructive: ek,
          closes: ik,
          unavailable: Dk
        } = kk;
        return ek ? ik ? 2 : 3 : Dk ? 1 : 0
      },
      aD = kk => {
        let ek = -1;
        for (let ik = 0; ik < kk.length; ik++) {
          if (ek < 0) {
            ek = ik;
            continue
          }
          const Dk = kk[ik],
            fk = kk[ek];
          hD(Dk) === hD(fk) ? Vi(Dk.rect, fk.rect) < 0 && (ek = ik) : hD(Dk) < hD(fk) && (ek = ik)
        }
        return ek
      },
      WD = "[data-pad-tabs]",
      tD = "[data-pad-tab]",
      XD = (kk, ek) => {
        const ik = kk.querySelector(`${tD}[data-pad-selected='true']`);
        return ik && ek.includes(ik) ? ik : null
      },
      BD = (kk, ek) => {
        let ik = ek;
        for (let Dk = ek.parentElement; Dk && !Dk.contains(kk); Dk = Dk.parentElement) ik = Dk;
        return ik
      };
    class cD {
      constructor() {
        this.contentReturn = null
      }
      redirect(kk, ek, ik, Dk) {
        var fk, Sk;
        const bk = kk.closest(WD),
          rk = ek.closest(WD);
        var Pk;
        if (rk && rk !== bk) return bk || (this.contentReturn = new WeakRef(kk)), null !== (Pk = XD(rk, ik)) && void 0 !== Pk ? Pk : ek;
        if (!bk || rk) return ek;
        const mk = BD(kk, ek),
          Mk = null === (fk = this.contentReturn) || void 0 === fk ? void 0 : fk.deref();
        return Mk && mk.contains(Mk) && ik.includes(Mk) ? Mk : null !== (Sk = this.pickRegionStart(mk, Vk(ek, "y", Dk), ik)) && void 0 !== Sk ? Sk : ek
      }
      findTabContent(kk, ek, ik) {
        const Dk = kk.closest(WD);
        if (!Dk || !kk.matches(tD) || Dk.contains(ek)) return null;
        const fk = ek.closest(WD);
        if (fk && Number(fk.dataset.padTabs) <= Number(Dk.dataset.padTabs)) return null;
        const Sk = BD(kk, ek);
        return ik.some((kk => Sk.contains(kk) && !kk.closest(vD))) || !ek.closest(vD) ? Sk : null
      }
      pickContentStart(kk, ek, ik) {
        return this.contentReturn = null, this.pickRegionStart(kk, Vk(kk, "y", ik), ek)
      }
      pickReplacedContentStart(kk, ek, ik, Dk) {
        if (!ek.contains(kk)) return null;
        const fk = BD(ek, kk),
          Sk = ik.filter((kk => ek.contains(kk) && !fk.contains(kk) && !kk.closest(vD)));
        return 0 === Sk.length ? null : (this.contentReturn = null, this.pickRegionStart(ek, Vk(Sk[0], "y", Dk), Sk))
      }
      backToStrip(kk, ek, ik) {
        if (kk.closest(WD)) return null;
        const Dk = ai(ik);
        for (const fk of ik.querySelectorAll(WD)) {
          if (Number(fk.dataset.padTabs) <= 1 || fk === Dk) continue;
          const Sk = XD(fk, ek),
            bk = Sk ? BD(kk, fk).parentElement : null;
          if (Sk && bk && bk !== ik && ik.contains(bk)) return this.contentReturn = new WeakRef(kk), Sk
        }
        return null
      }
      pickRegionStart(kk, ek, ik) {
        const Dk = Qk(ek),
          fk = kk => {
            const ek = ik.filter((ek => kk.contains(ek) && !ek.closest(WD) && vk(ek.getBoundingClientRect(), Dk))),
              fk = aD(ek.map(ED));
            return fk >= 0 ? ek[fk] : null
          };
        for (const Sk of (0, Jk.j)(kk)) {
          const kk = fk(Sk);
          if (kk) return kk
        }
        for (const Sk of kk.querySelectorAll(WD)) {
          const kk = XD(Sk, ik);
          if (kk) return kk
        }
        return fk(kk)
      }
    }
    const TD = "[data-pad-default-focus], .Dropdown-option.is-selected",
      oD = ".Dropdown-root.is-open > .Dropdown-menu",
      ZD = "[data-pad-no-step-in]",
      OD = "[data-pad-tabs]",
      gD = "[data-pad-press-area]",
      GD = kk => {
        let ek = kk;
        for (let ik = 0; ek && ik <= 4; ik++, ek = ek.parentElement) {
          const ik = ek.querySelector(".CircleInfo");
          if (ik) return ek === kk || ek.querySelectorAll(Jk.d).length <= 1 ? ik : null;
          if (ek !== kk && ek.querySelectorAll(Jk.d).length > 1) return null
        }
        return null
      },
      ND = (kk, ek, ik) => {
        (0, Tk.j)(kk, ek, ik);
        const Dk = null !== kk && void 0 !== kk && kk.isConnected ? GD(kk) : null,
          fk = GD(ek);
        Dk !== fk && (0, Tk.j)(Dk, fk, fk ? (0, Tk.u)(fk) : ik, {
          leaveBelow: kk,
          enterBelow: ek
        })
      },
      RD = kk => kk.getBoundingClientRect(),
      JD = (kk, ek, ik) => {
        const Dk = new Set(ik);
        for (let fk = kk; fk; fk = fk === ek ? null : fk.parentElement)
          if (Dk.has(fk)) return fk;
        return null
      },
      kf = (kk, ek) => !kk.root || kk.root === ek || ek.matches(oD) && kk.root.contains(ek);
    const ef = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new DD, this.tabStripNav = new cD, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, Hk.c)(Uk.u), this.dpadRepeats = new Map(Uk.B.map((kk => [kk, (0, Hk.c)(Uk.D)]))), this.stickRepeat = new Uk.e((0, Hk.c)(Uk.bb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const kk = Kk.c.register({
            name: "focus",
            isActive: () => (0, nk.j)() && "focus" === FD(),
            onFrame: kk => {
              this.onFrame(kk)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: kk => (0, Kk.d)(kk) || kk === (0, Mk.i)("menuConfirm") && (0, Tk.E)((0, nk.c)())
          }),
          ek = (0, fD.j)((kk => {
            const ek = (0, fD.q)(kk);
            null === kk.memoryKey && this.memory.forget(ek), ek === this.layerKey && (this.layerKey = null)
          }));
        let ik = -1 / 0;
        const Dk = bk.f.onFrame((kk => {
            (0, nk.j)() || kk.timestampMs - ik < 100 || (ik = kk.timestampMs, xD())
          })),
          fk = kk => {
            kk.isTrusted && kk.target instanceof Element && bk.f.getActivePad() && this.noteChosenStop(kk.target)
          };
        return document.addEventListener("click", fk, !0), () => {
          kk(), ek(), Dk(), document.removeEventListener("click", fk, !0), this.deactivate()
        }
      }
      noteChosenStop(kk) {
        var ek, ik;
        const Dk = xD();
        if (!Dk || !Dk.root.contains(kk)) return;
        const fk = null !== (ek = null === (ik = kk.closest(".Dropdown-root")) || void 0 === ik ? void 0 : ik.querySelector(".Dropdown-control")) && void 0 !== ek ? ek : kk,
          Sk = JD(fk, Dk.root, this.getEnabledCandidates(Dk.root));
        if (!Sk) return;
        const bk = (0, fD.q)(Dk.layer);
        bk === this.layerKey && Dk.root === this.layerRoot || this.beginLayer(Dk, bk), this.wasActive ? this.setFocus(Sk, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = Sk, this.lastFocusedCentre = (0, Tk.u)(Sk), this.rememberFocus(Sk), this.notify())
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
          this.stickRepeat.reset(), null !== (kk = this.focused) && void 0 !== kk && kk.isConnected && ND(this.focused, null, (0, Tk.u)(this.focused)), this.notify()
        }
      }
      setFocus(kk) {
        var ek;
        let {
          scroll: ik = !0,
          byUser: Dk = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (Dk && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), kk === this.focused) return;
        const fk = null !== (ek = this.focused) && void 0 !== ek && ek.isConnected ? this.focused : null;
        if (this.focused = kk, kk) {
          ik && (kk.classList.add(qD), kk.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), Dk && ((kk, ek) => {
            const ik = ek.closest("[data-pad-friends-column]");
            ik && kk && !ik.contains(kk) && (Ti = new WeakRef(kk))
          })(fk, kk);
          const ek = (0, Tk.u)(kk);
          this.lastFocusedCentre = ek, this.movedInLayer && this.rememberFocus(kk), ND(fk, kk, ek), "false" === kk.getAttribute("aria-pressed") && kk.closest("[data-pad-select-on-focus]") && (0, Tk.b)(kk)
        } else fk && ND(fk, null, (0, Tk.u)(fk));
        this.notify()
      }
      rememberFocus(kk) {
        const ek = this.layerRoot;
        this.layerKey && ek && this.memory.remember(this.layerKey, kk, ek, (() => this.getEnabledCandidates(ek)))
      }
      noteCursorActivation(kk) {
        const ek = xD();
        if (!ek || !ek.root.contains(kk)) return;
        const ik = this.getEnabledCandidates(ek.root),
          Dk = new Set(ik);
        let fk = kk;
        for (; fk && !Dk.has(fk);) fk = fk === ek.root ? null : fk.parentElement;
        if (!(fk instanceof HTMLElement)) return;
        const Sk = (0, fD.q)(ek.layer);
        this.memory.enter(Sk), this.memory.remember(Sk, fk, ek.root, (() => ik))
      }
      notePageEnteredByCursor(kk) {
        return this.memory.enter(kk)
      }
      recallStop(kk, ek) {
        return this.findRemembered(kk, ek)
      }
      focusWhenFound(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: kk,
          untilMs: performance.now() + ek,
          holdWhile: ik
        }
      }
      getEnabledCandidates(kk) {
        return (0, Jk.h)(kk).filter((kk => !(0, Jk.v)(kk)))
      }
      onFrame(kk) {
        var ek;
        const ik = xD();
        if (!ik) return;
        const Dk = null !== (ek = this.findOpenDropdown(ik)) && void 0 !== ek ? ek : ik,
          fk = performance.now(),
          Sk = (0, fD.q)(Dk.layer);
        if (Sk !== this.layerKey || Dk.root !== this.layerRoot) {
          const ek = this.focused;
          if (null !== this.layerKey && Dk.root === this.layerRoot && ek && (0, Jk.t)(ek, Dk.root)) this.continueLayer(Sk, ek), this.wasActive || this.resume(Dk.root, fk);
          else {
            const ek = !this.wasActive && !kk.wokeDevice,
              bk = "death" === this.layerKind || ek,
              rk = this.enterLayer(Dk, Sk);
            "popup" !== Dk.layer.kind || Dk !== ik || rk ? "menu" === Dk.layer.kind && bk && "inGame" === Pk.b.get("gameState") && !(0, ri.d)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = fk + ID.e) : (this.pressGuardExtends = ek, this.pressGuardUntilMs = fk + (ek ? ID.e : bk ? 500 : 250))
          }
        } else this.wasActive || this.resume(Dk.root, fk);
        if (this.layerKind = Dk.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), kk.wokeDevice && this.focusPointedStop(Dk.root), this.validateFocus(Dk, fk), fk < this.pressGuardUntilMs && this.pressGuardExtends && (kk.wasPressed((0, Mk.i)("menuConfirm")) || kk.wasPressed((0, Mk.i)("menuBack"))) && (this.pressGuardUntilMs = fk + ID.e), fk >= this.pressGuardUntilMs && this.handleButtons(kk, Dk)) return;
        const bk = "hybrid" === CD();
        if (bk && (kk => {
            const ek = UD();
            return ek !== LD && (LD = ek, YD.lock()), YD.update(kk, (0, xk.h)().moveDeadzone)
          })(kk.leftStick)) return rk = this.getHandoff(), yD = HD(rk), lD = UD(), void Kk.c.handOffHeldInput();
        var rk;
        this.handleDirections(kk, Dk, fk, !bk), this.handleScroll(kk, Dk)
      }
      findOpenDropdown(kk) {
        const ek = kk.root.querySelector(oD);
        if (!ek || !(0, Jk.s)(ek)) return null;
        let ik = this.dropdownLayers.get(ek);
        return ik || (this.dropdownLayerCounter++, ik = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: kk.layer.kind,
          getRoot: () => ek,
          close: () => {
            (0, Tk.h)(ek)
          },
          memoryKey: null
        }, this.dropdownLayers.set(ek, ik)), {
          layer: ik,
          root: ek,
          order: kk.order
        }
      }
      focusPointedStop(kk) {
        const ek = (0, nk.c)(),
          ik = ek ? document.elementFromPoint(ek.x, ek.y) : null;
        if (!ik || !kk.contains(ik)) return;
        const Dk = JD(ik, kk, this.getEnabledCandidates(kk));
        Dk && this.setFocus(Dk, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(kk, ek) {
        const ik = this.beginLayer(kk, ek),
          Dk = jD();
        return Dk && kf(Dk, kk.root) ? (this.takeOver(kk.root, Dk, this.enteredLayerAtMs), ik) : (this.restoreLayerFocus(kk.root, ik), ik)
      }
      beginLayer(kk, ek) {
        return this.layerKey = ek, this.layerRoot = kk.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(ek)
      }
      restoreLayerFocus(kk, ek) {
        const ik = ek && this.layerKey ? this.findRemembered(kk, this.layerKey) : null;
        this.restoredFromMemory = null !== ik, this.setFocus(null !== ik && void 0 !== ik ? ik : this.pickInitial(kk, {
          waitForContent: !0
        }))
      }
      continueLayer(kk, ek) {
        this.layerKey = kk;
        const ik = this.memory.enter(kk);
        this.restoreOnFocusLoss = ik, this.movedInLayer && !ik && this.rememberFocus(ek)
      }
      resume(kk, ek) {
        var ik;
        const Dk = jD();
        Dk && kf(Dk, kk) ? this.takeOver(kk, Dk, ek) : null !== (ik = this.focused) && void 0 !== ik && ik.isConnected && ND(null, this.focused, (0, Tk.u)(this.focused))
      }
      pickPreferred(kk) {
        var ek;
        return null !== (ek = this.layerKey ? this.findRemembered(kk, this.layerKey) : null) && void 0 !== ek ? ek : this.pickInitial(kk, {
          waitForContent: !0
        })
      }
      findRemembered(kk, ek) {
        return this.memory.has(ek) ? this.memory.recall(ek, this.getEnabledCandidates(kk)) : null
      }
      getHandoff() {
        var kk, ek, ik;
        const Dk = null !== (kk = this.focused) && void 0 !== kk && kk.isConnected ? this.focused : null,
          fk = null !== (ek = this.layerRoot) && void 0 !== ek && ek.isConnected ? this.layerRoot : null;
        return {
          point: Dk ? (0, Tk.u)(Dk) : null !== (ik = this.lastFocusedCentre) && void 0 !== ik ? ik : this.getLayerStartPoint(fk),
          element: Dk,
          direction: null
        }
      }
      getLayerStartPoint(kk) {
        if (!kk) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const ek = this.pickInitial(kk, {
          includeDisabled: !0
        });
        return (0, Tk.u)(null !== ek && void 0 !== ek ? ek : kk)
      }
      takeOver(kk, ek, ik) {
        const {
          element: Dk,
          direction: fk,
          point: Sk
        } = ek, bk = Dk instanceof HTMLElement && (0, Jk.t)(Dk, kk) ? Dk : null;
        if (!fk) {
          const ek = this.focused;
          return bk ? this.setFocus(bk, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(kk, Sk), void(this.focused && this.focused === ek && this.focused.isConnected && ND(null, this.focused, (0, Tk.u)(this.focused)))
        }
        if (this.dpadRepeats.get(fk).update(!0, ik), bk) return this.setFocus(bk, {
          scroll: !1,
          byUser: !0
        }), void this.move(kk, fk, ik, !0);
        const rk = this.getEnabledCandidates(kk),
          Pk = rk.map(RD),
          mk = Li(new DOMRect(Sk.x, Sk.y, 0, 0), Pk, fk),
          Mk = mk >= 0 ? mk : di(Sk, Pk);
        this.setFocus(Mk >= 0 ? rk[Mk] : this.pickInitial(kk), {
          byUser: !0
        })
      }
      focusNearest(kk, ek) {
        const ik = this.getEnabledCandidates(kk),
          Dk = di(ek, ik.map(RD));
        this.setFocus(Dk >= 0 ? ik[Dk] : this.pickInitial(kk), {
          byUser: !0
        })
      }
      pickDefault(kk) {
        let {
          includeDisabled: ek = !1,
          exclude: ik = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Dk = [...kk.querySelectorAll(TD)].filter((Dk => (null === ik || void 0 === ik || !ik.has(Dk)) && (ek ? (0, Jk.z)(Dk, kk) : (0, Jk.t)(Dk, kk)))),
          fk = aD(Dk.map(ED));
        return fk >= 0 ? Dk[fk] : null
      }
      pickNewAreaStart(kk, ek) {
        const ik = [...kk.querySelectorAll(gD)].filter(Jk.s);
        for (const Dk of [...(0, Jk.j)(kk), ...ik]) {
          if (ek.has(Dk)) continue;
          const kk = this.getEnabledCandidates(Dk),
            ik = aD(kk.map(ED));
          if (ik >= 0) return kk[ik]
        }
        return null
      }
      pickInitial(kk) {
        let {
          includeDisabled: ek = !1,
          waitForContent: ik = !1,
          enteredAtMs: Dk = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const fk = this.pickDefault(kk, {
          includeDisabled: ek
        });
        if (fk) return fk;
        const Sk = kk => ek ? (0, Jk.h)(kk) : this.getEnabledCandidates(kk);
        let bk = [];
        for (const xk of (0, Jk.j)(kk))
          if (bk = Sk(xk), bk.length > 0) break;
        if (0 === bk.length) {
          if (ik && performance.now() - Dk < 1e4 && (0, Jk.o)(kk)) return null;
          bk = Sk(kk)
        }
        const rk = bk.map(RD),
          Pk = Qk(null),
          mk = bk.filter(((kk, ek) => vk(rk[ek], Pk))),
          Mk = mk.length > 0 ? mk : bk,
          Kk = aD(Mk.map(ED));
        return Kk >= 0 ? Mk[Kk] : null
      }
      validateFocus(kk, ek) {
        if (this.pendingFocus) {
          var ik, Dk;
          const fk = this.pendingFocus.find();
          if (fk && (0, Jk.t)(fk, kk.root)) return this.pendingFocus = null, void this.setFocus(fk, {
            byUser: !0
          });
          ek > this.pendingFocus.untilMs && (null === (ik = (Dk = this.pendingFocus).holdWhile) || void 0 === ik || !ik.call(Dk)) && (this.pendingFocus = null)
        }
        const fk = this.focused,
          Sk = !!fk && (0, Jk.t)(fk, kk.root);
        if (!(!Sk && fk && fk === this.lastActivated && ek - this.lastActivatedAtMs < 5e3 && kk.root.contains(fk) && (0, Jk.s)(fk) && (0, Jk.v)(fk))) {
          if (!Sk && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = ek, void this.restoreLayerFocus(kk.root, !0);
          if ((!Sk || !this.movedInLayer && !this.scrolledInLayer) && !(ek - this.lastRefocusCheckMs < (Sk ? 200 : 50)))
            if (this.lastRefocusCheckMs = ek, Sk) {
              const ik = ek - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(kk.root) : null,
                Dk = null !== ik && void 0 !== ik ? ik : this.restoredFromMemory ? null : this.pickDefault(kk.root);
              Dk && Dk !== fk && this.setFocus(Dk)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const ek = this.pendingFocus;
                return this.focusNearest(kk.root, this.lastFocusedCentre), void(this.pendingFocus = ek)
              }
              this.setFocus(this.pickPreferred(kk.root))
            }
        }
      }
      handleButtons(kk, ek) {
        if (kk.wasPressed((0, Mk.i)("menuToggleCursor"))) return AD(this.getHandoff()), !0;
        if (kk.wasPressed((0, Mk.i)("menuBack"))) {
          const kk = (0, Tk.h)(ek.root);
          return kk ? this.setFocus(kk, {
            byUser: !0
          }) : oi(this, ek.root) || ((0, Tk.c)(ek.root) ? this.returnToOpener(ek.root) : this.backToStrip(ek.root) || nD()), !0
        }
        const ik = (0, Mk.i)("menuConfirm");
        var Dk, fk;
        kk.wasPressed(ik) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (Dk = null === (fk = this.focused) || void 0 === fk ? void 0 : fk.getAttribute("data-pad-repeat")) && void 0 !== Dk ? Dk : null, this.confirmRepeated = kk.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (kk.wasReleased(ik)) {
          const kk = this.confirmPressedOn;
          if (this.confirmPressedOn = null, kk && !this.confirmRepeated && kk === this.focused && kk.isConnected && !(0, Jk.v)(kk)) {
            const ik = kk.matches("[data-pad-tab]") ? kk.closest(OD) : null;
            ik ? this.enterTab(kk, ik, ek.root, performance.now()) : this.activate(kk)
          }
          return !0
        }
        return this.repeatConfirm(kk, ik), eD(this, kk, ek)
      }
      repeatConfirm(kk, ek) {
        const ik = this.confirmPressedOn;
        ik && null !== this.confirmRepeatKey && kk.isHeld(ek) && (ik === this.focused && ik.isConnected && !(0, Jk.v)(ik) && ik.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? ik.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(ik)) : this.confirmRepeatKey = null)
      }
      backToStrip(kk) {
        const ek = this.focused;
        if (!(0, xk.h)().menuBackToCategories) return !1;
        const ik = null !== ek && void 0 !== ek && ek.isConnected ? this.tabStripNav.backToStrip(ek, this.getEnabledCandidates(kk), kk) : null;
        return ik && this.setFocus(ik, {
          byUser: !0
        }), null !== ik
      }
      returnToOpener(kk) {
        const ek = this.lastActivatedKey;
        ek && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var ik;
          return null !== (ik = this.getEnabledCandidates(kk).find((kk => (0, Tk.x)(kk) === ek))) && void 0 !== ik ? ik : null
        })))
      }
      activate(kk) {
        var ek;
        if ((0, zD.c)(kk) || (0, Tk.B)(kk)) return;
        this.lastActivatedKey = null !== (ek = (0, Tk.x)(kk)) && void 0 !== ek ? ek : this.lastActivatedKey, this.lastActivated = kk, this.lastActivatedAtMs = performance.now(), this.rememberFocus(kk);
        const ik = this.layerRoot;
        if (ik) {
          const ek = new Set(ik.querySelectorAll(TD)),
            Dk = new Set(ik.querySelectorAll(`[data-pad-initial-area], ${gD}`)),
            fk = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var fk;
            return (0, Jk.t)(kk, ik) ? null : null !== (fk = this.pickDefault(ik, {
              exclude: ek
            })) && void 0 !== fk ? fk : this.pickNewAreaStart(ik, Dk)
          }), 5e3, (() => kk.isConnected && (0, Jk.v)(kk) && performance.now() - fk < 6e4))
        }(0, Tk.b)(kk), (0, Tk.d)(kk)
      }
      handleDirections(kk, ek, ik, Dk) {
        const fk = zi(ek.layer.kind) ? (0, Mk.i)("chat") : null;
        for (const rk of Uk.B) {
          this.dpadRepeats.get(rk).update(kk.isHeld(rk), ik) && (rk !== fk || kk.wasPressed(rk)) && this.move(ek.root, rk, ik, !0)
        }
        const Sk = Dk ? (0, Uk.j)(kk.leftStick, (0, xk.h)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          bk = this.stickRepeat.update((0, Uk.fb)(Sk), ik);
        if (bk && this.move(ek.root, bk, ik, !0), this.retryMove && ik >= this.retryMove.atMs) {
          const {
            direction: kk
          } = this.retryMove;
          this.retryMove = null, this.move(ek.root, kk, ik, !1)
        }
      }
      move(kk, ek, ik, Dk) {
        var fk;
        let Sk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (fk = this.tabOpenWait) || void 0 === fk ? void 0 : fk.wait) && ek === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const bk = this.focused;
        if (!bk || !bk.isConnected) {
          const ek = this.pickInitial(kk);
          return void(ek && this.setFocus(ek, {
            byUser: !0
          }))
        }
        const rk = "Left" === ek || "Right" === ek,
          Pk = rk ? (0, zD.c)(bk) : null;
        if (Pk) return void Pk.adjust("Left" === ek ? -1 : 1);
        const mk = kk => null !== kk.closest("[data-pad-friends-column]"),
          Mk = mk(bk),
          Kk = RD(bk),
          xk = rk || bk.closest(OD) ? null : (kk => {
            const ek = new Map;
            return ik => {
              const Dk = ik.closest(OD);
              if (!Dk) return !1;
              let fk = ek.get(Dk);
              if (void 0 === fk) {
                const ik = RD(Dk);
                fk = Yi(kk, ik) && (ik.right <= kk.left || ik.left >= kk.right), ek.set(Dk, fk)
              }
              return fk
            }
          })(Kk),
          nk = null !== bk.closest(ZD),
          Uk = this.getEnabledCandidates(kk).filter((kk => kk !== bk && (rk || mk(kk) === Mk) && !(null !== xk && void 0 !== xk && xk(kk)) && (nk || !kk.closest(ZD)))),
          Hk = Uk.map(RD),
          wk = Vk(bk, "y", kk),
          lk = Qk(wk);
        if (!Sk && !vk(Kk, lk)) {
          const kk = Uk.filter(((kk, ek) => vk(Hk[ek], lk)));
          if (kk.length > 0) {
            const ek = {
              x: lk.left + lk.width / 2,
              y: lk.top + lk.height / 2
            };
            return void this.setFocus(kk[di(ek, kk.map(RD))], {
              byUser: !0
            })
          }
        }
        const pk = rk ? ((kk, ek, ik) => {
            const Dk = RD(kk),
              fk = kk.closest(OD),
              Sk = fk ? RD(fk) : null;
            return ek.map(((ek, bk) => {
              const rk = ik[bk];
              if (rk.bottom > Dk.top && rk.top < Dk.bottom) return !0;
              const Pk = ek.closest(OD);
              if (fk && Sk) return Pk !== fk && (null !== Pk || rk.bottom <= Sk.top || rk.top >= Sk.bottom);
              if (Pk) return !Yi(Dk, RD(Pk));
              let mk = kk;
              for (let ik = kk.parentElement; ik && !ik.contains(ek); ik = ik.parentElement) mk = ik;
              const Mk = RD(mk);
              return rk.right > Mk.left && rk.left < Mk.right
            }))
          })(bk, Uk, Hk) : void 0,
          yk = rk && !bk.closest(OD) ? (kk => kk.map((kk => !kk.closest(vD))))(Uk) : void 0,
          Yk = ((kk, ek) => {
            const ik = [];
            for (let fk = kk; fk; fk = fk.parentElement) ik.push(fk);
            const Dk = new Map;
            return ik.forEach(((kk, ek) => {
              Dk.set(kk, ik.length - 1 - ek)
            })), ek.map((kk => {
              for (let ek = kk; ek; ek = ek.parentElement) {
                const kk = Dk.get(ek);
                if (void 0 !== kk) return kk
              }
              return -1
            }))
          })(bk, Uk),
          Lk = rk ? "x" : "y",
          Ck = Vk(bk, Lk, kk);
        let Ak = Li(Kk, Hk, ek, Yk, pk, yk);
        if (Ak >= 0 && Ck && !Ck.contains(Uk[Ak])) {
          const kk = Uk.flatMap(((kk, ek) => Ck.contains(kk) ? [ek] : [])),
            ik = ek => ek && kk.map((kk => ek[kk])),
            Dk = Li(Kk, kk.map((kk => Hk[kk])), ek, kk.map((kk => Yk[kk])), ik(pk), ik(yk));
          Ak = Dk >= 0 ? kk[Dk] : Ak
        }
        if (Ak >= 0) return void this.moveTo(bk, Uk[Ak], Uk, kk, ek, Sk);
        if (!Dk) return;
        const jk = "Right" === ek || "Down" === ek ? 1 : -1;
        if (Ck && Ik(Ck, Lk, jk)) {
          const kk = "y" === Lk ? Ck.clientHeight : Ck.clientWidth;
          zk(Ck, Lk, jk * kk * .5), this.retryMove = {
            direction: ek,
            atMs: ik + 80
          }
        }
      }
      moveTo(kk, ek, ik, Dk, fk, Sk) {
        const bk = this.tabStripNav.findTabContent(kk, ek, ik);
        bk && "true" !== kk.dataset.padSelected ? this.openTab(kk, bk, Dk, fk) : Sk && !bk || this.setFocus(this.tabStripNav.redirect(kk, ek, ik, Dk), {
          byUser: !0
        })
      }
      openTab(kk, ek, ik, Dk) {
        const fk = ek.parentElement;
        (0, Tk.b)(kk), this.focusWhenFound((() => "true" !== kk.dataset.padSelected ? null : ek.isConnected ? this.tabStripNav.pickContentStart(ek, this.getEnabledCandidates(ik), ik) : fk ? this.tabStripNav.pickReplacedContentStart(kk, fk, this.getEnabledCandidates(ik), ik) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: Dk
        }
      }
      enterTab(kk, ek, ik, Dk) {
        this.move(ik, (kk => {
          const ek = [...kk.querySelectorAll(tD)].filter((ek => ek.closest(WD) === kk));
          if (ek.length >= 2) {
            const kk = ek[0].getBoundingClientRect(),
              ik = ek[1].getBoundingClientRect();
            return Math.abs(ik.top - kk.top) > Math.abs(ik.left - kk.left) ? "Right" : "Down"
          }
          const ik = kk.getBoundingClientRect();
          return ik.height > ik.width ? "Right" : "Down"
        })(ek), Dk, !1, !0), this.focused !== kk || this.pendingFocus || this.activate(kk)
      }
      handleScroll(kk, ek) {
        const ik = (0, Uk.j)(kk.rightStick, .2);
        if (0 === ik.x && 0 === ik.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const Dk = kk.dtMs / 1e3;
        for (const Sk of ["x", "y"]) {
          var fk;
          const kk = ik[Sk];
          if (0 === kk) continue;
          const bk = null !== (fk = Vk(this.focused, Sk, ek.root)) && void 0 !== fk ? fk : uk(ek.root, Sk);
          if (!bk) continue;
          const rk = Math.sign(kk) * kk * kk * 1500 * Dk + this.scrollRemainder[Sk],
            Pk = Math.trunc(rk);
          this.scrollRemainder[Sk] = rk - Pk, 0 !== Pk && (zk(bk, Sk, Pk), this.scrolledInLayer = !0)
        }
      }
    };
    var Df = ik(8034);
    var ff = ik(8567);
    const Sf = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      bf = {
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
          ...Sf,
          minIntervalMs: 1e3
        },
        preview: {
          ...Sf,
          minIntervalMs: 0
        }
      };
    const rf = new class {
        constructor(kk) {
          this.deps = kk, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = kk => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", kk))
          }
        }
        play(kk, ek) {
          const ik = bf[kk];
          if (!this.deps.isVibrationOn() || ik.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const Dk = this.lastPlayedMs[kk];
          if (void 0 !== Dk && ek - Dk < ik.minIntervalMs) return !1;
          const fk = this.deps.getActuator();
          if (!fk) return !1;
          this.lastPlayedMs[kk] = ek;
          const {
            duration: Sk,
            strongMagnitude: bk,
            weakMagnitude: rk
          } = ik;
          try {
            fk.playEffect("dual-rumble", {
              duration: Sk,
              strongMagnitude: bk,
              weakMagnitude: rk
            }).catch(this.logFailure)
          } catch (Pk) {
            this.logFailure(Pk)
          }
          return !0
        }
      }({
        getActuator: () => (kk => {
          const ek = null === kk || void 0 === kk ? void 0 : kk.vibrationActuator;
          return "function" === typeof(null === ek || void 0 === ek ? void 0 : ek.playEffect) ? ek : null
        })(bk.f.getActiveGamepad()),
        isVibrationOn: () => (0, xk.h)().vibration,
        isPadInUse: nk.j
      }),
      Pf = kk => {
        rf.play(kk, performance.now())
      };
    var mf = ik(8037),
      Mf = ik(2849),
      Kf = ik(111),
      xf = ik(38),
      nf = ik(630);
    class Uf {
      constructor(kk) {
        this.deps = kk
      }
      check() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const ek = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!ek) return "skipped";
        const ik = kk ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === ik || this.deps.readReportedVisitId() === ik ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(ik), this.deps.CU(ek, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const Hf = "controllerUsageReportedVisit";
    var wf = ik(1333),
      lf = ik(1688),
      pf = ik(610),
      yf = ik(1406),
      Yf = ik(1223);
    const Lf = kk => ({
        translationKey: `controller:${kk}`
      }),
      Cf = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: Lf("padButtonView"),
        Menu: Lf("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: Lf("padButtonDpadUp"),
        Down: Lf("padButtonDpadDown"),
        Left: Lf("padButtonDpadLeft"),
        Right: Lf("padButtonDpadRight"),
        Home: Lf("padButtonHome"),
        LeftStick: Lf("padButtonLeftStick"),
        RightStick: Lf("padButtonRightStick")
      },
      Af = {
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
          View: Lf("padButtonCreate"),
          Menu: Lf("padButtonOptions")
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
      jf = (kk, ek) => {
        var ik;
        const Dk = null !== (ik = Af[kk][ek]) && void 0 !== ik ? ik : Cf[ek];
        return "string" === typeof Dk ? Dk : (0, fk.x)(Yf.f.get().getCurrentLanguageCode(), Dk.translationKey)
      },
      sf = kk => {
        let {
          glyph: ek,
          family: ik,
          className: Dk
        } = kk;
        const fk = (0, nk.D)(),
          Sk = null !== ik && void 0 !== ik ? ik : fk,
          bk = (0, mf.g)(Sk, ek);
        return (0, Wk.jsx)("span", {
          className: ak()("ControllerGlyph", Dk),
          role: "img",
          "aria-label": jf(Sk, ek),
          style: {
            "--pad-glyph-mask": `url(${bk})`,
            "--pad-glyph-aspect": (0, mf.c)(Sk, ek)
          }
        })
      };
    var df = ik(1858);
    const Vf = kk => {
      let {
        action: ek
      } = kk;
      const {
        t: ik
      } = (0, fk.D)();
      switch (ek.kind) {
        case "reload":
          return (0, Wk.jsx)("span", {
            children: ik("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, Wk.jsx)(df.e, {
            text: ek.description ? [{
              icon: ek.icon
            }, ` ${ek.description}`] : [{
              icon: ek.icon
            }]
          });
        case "touchButton":
          return (0, Wk.jsx)(df.e, {
            text: ek.label
          })
      }
    };
    var Ff = ik(8570);
    const uf = kk => {
      let {
        hold: ek
      } = kk;
      return (0, Wk.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${ek.holdMs}ms`
        },
        children: (0, Wk.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, ek.id)
    };
    var qf = ik(8594),
      If = ik(8596),
      zf = ik(8601),
      Qf = ik(8588);
    const vf = () => {
        const {
          gameState: kk
        } = (0, Pk.n)(["gameState"]), ek = (0, nk.A)(), [Dk, fk] = (0, Ek.useState)(!1), [Sk, bk] = (0, Ek.useState)(!1);
        return (0, Ek.useEffect)((() => {
          "inGame" === kk && fk(!0)
        }), [kk]), (0, Ek.useEffect)((() => {
          if (!Dk) return;
          let kk = null,
            ek = !1;
          return (pf.s ? Promise.all([ik.e(72), ik.e(89), ik.e(265), ik.e(191), ik.e(222), ik.e(221), ik.e(88)]).then((() => ik(40118))).then((kk => kk.startWasmPadGameplay)) : Promise.all([ik.e(72), ik.e(230), ik.e(229), ik.e(96), ik.e(75), ik.e(74), ik.e(73), ik.e(187), ik.e(226), ik.e(77), ik.e(89), ik.e(188), ik.e(220), ik.e(95), ik.e(223), ik.e(238), ik.e(120), ik.e(239), ik.e(86), ik.e(76), ik.e(119), ik.e(160), ik.e(240), ik.e(222), ik.e(199)]).then((() => ik(40252))).then((kk => kk.startPadGameplay))).then((ik => {
            ek || (kk = ik())
          })).catch((kk => {
            console.error("Pad gameplay failed to load", kk), ek || bk(!0)
          })), () => {
            var ik;
            ek = !0, null === (ik = kk) || void 0 === ik || ik()
          }
        }), [Dk]), (0, Ek.useEffect)((() => {
          Sk && ek && (bk(!1), wf.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((kk => {
            !0 === kk && (0, lf.reloadBloxd)()
          })))
        }), [Sk, ek]), (0, Wk.jsxs)(Wk.Fragment, {
          children: [(0, Wk.jsx)(Ef, {}), (0, Wk.jsx)(hf, {}), (0, Wk.jsx)(af, {})]
        })
      },
      Ef = () => {
        const {
          t: kk
        } = (0, fk.D)(), ek = (0, nk.A)(), {
          gameState: ik,
          isUiHidden: Dk
        } = (0, Pk.n)(["gameState", "isUiHidden"]), {
          hideButtonHints: Sk
        } = (0, xk.n)(), bk = (0, Ff.h)(), rk = (0, Ff.j)(), [mk, Kk] = (0, Ek.useState)(zf.e);
        return (0, yf.c)(Qf.s, Kk), !ek || Sk || Dk || "inGame" !== ik || !bk && !mk ? null : (0, Wk.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [bk && (0, Wk.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, Wk.jsx)(sf, {
              glyph: (0, Mk.i)("actionButton")
            }), (0, Wk.jsx)(Vf, {
              action: bk
            }), rk && (0, Wk.jsx)("span", {
              className: "PadActionHintMore",
              children: kk("controller:gameplayActionWheelHint")
            })]
          }), mk && (0, Wk.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, Wk.jsx)(sf, {
              glyph: (0, Mk.i)("pickBlock")
            }), (0, Wk.jsx)("span", {
              children: kk("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      hf = () => {
        const {
          t: kk
        } = (0, fk.D)(), ek = (0, nk.A)(), {
          gameState: ik,
          isUiHidden: Dk
        } = (0, Pk.n)(["gameState", "isUiHidden"]), [Sk, bk] = (0, Ek.useState)(qf.e);
        return (0, yf.c)(Qf.o, bk), ek && !Dk && "inGame" === ik && Sk ? (0, Wk.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, Wk.jsx)("span", {
            children: kk("controller:gameplayDropStack")
          }), (0, Wk.jsx)(uf, {
            hold: Sk
          })]
        }) : null
      },
      af = () => {
        const {
          t: kk
        } = (0, fk.D)(), ek = (0, nk.A)(), {
          gameState: ik,
          isUiHidden: Dk
        } = (0, Pk.n)(["gameState", "isUiHidden"]), {
          hideButtonHints: Sk
        } = (0, xk.n)(), [bk, rk] = (0, Ek.useState)(If.c);
        return (0, yf.c)(Qf.k, rk), ek && !Dk && "inGame" === ik && bk ? (0, Wk.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!Sk && (0, Wk.jsx)(sf, {
            glyph: (0, Mk.i)("attack")
          }), (0, Wk.jsx)("span", {
            children: kk("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var Wf = ik(8607),
      tf = ik(1911),
      Xf = ik(2414),
      Bf = ik(8019);
    const Tf = kk => kk && !(0, Wf.c)(tf.c.get("shopInfo")),
      of = () => {
        const kk = "inGame" === (0, Pk.n)(["gameState"]).gameState;
        return (0, Xf.d)("shopInfo", (() => {
          (0, Bf.e)(Tf(kk))
        })), (0, Ek.useEffect)((() => {
          (0, Bf.e)(Tf(kk))
        }), [kk]), null
      },
      Zf = () => {
        const {
          t: kk
        } = (0, fk.D)(), {
          hideButtonHints: ek
        } = (0, xk.n)();
        (0, nk.D)();
        const ik = (0, We.k)();
        return (0, Ek.useEffect)((() => (() => {
          const kk = Kk.c.register({
              name: "inventory",
              isActive: Si.isActive,
              onFrame: Si.onFrame,
              onDeactivate: Si.onDeactivate,
              wakePressActs: Si.wakePressActs
            }),
            ek = kk => {
              Si.noteRealPointer(kk), Si.shouldBlockRealPointer(kk) && kk.stopPropagation()
            };
          for (const bk of bi) window.addEventListener(bk, ek, !0);
          const ik = (0, Rk.o)((() => {
              "inventory" !== Kk.c.getActiveConsumerName() && Si.forgetSurface()
            })),
            Dk = kk => {
              const ek = kk.target;
              (0, nk.j)() && (0, gk.j)(ek) && ek.closest(Ce) && (0, Rk.m)() && (0, Rk.t)(ek)
            };
          document.addEventListener("focusout", Dk, !0);
          const {
            invalidate: fk,
            onScroll: Sk
          } = Si.targets;
          return document.addEventListener("scroll", Sk, !0), window.addEventListener("resize", fk), () => {
            kk(), ik();
            for (const kk of bi) window.removeEventListener(kk, ek, !0);
            document.removeEventListener("scroll", Sk, !0), document.removeEventListener("focusout", Dk, !0), window.removeEventListener("resize", fk), Si.targets.disconnect()
          }
        })()), []), (0, Wk.jsxs)(Wk.Fragment, {
          children: [(0, Wk.jsx)(ck, {
            placer: Si.ring,
            className: "InventorySlotCursorRing"
          }), ik.showing && !ek && (0, Wk.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: Nk(ik).map((ek => {
              let {
                actions: Dk,
                labelKey: fk
              } = ek;
              return (0, Wk.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [Dk.map((kk => (0, Wk.jsx)(sf, {
                  glyph: (0, Mk.i)(kk)
                }, kk))), (0, Wk.jsx)("span", {
                  children: kk(`controller:${fk}`)
                }), "inventoryDrop" === fk && ik.dropStackHold && (0, Wk.jsx)(uf, {
                  hold: ik.dropStackHold
                })]
              }, fk)
            }))
          })]
        })
      },
      Of = [{
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
      gf = kk => Array.from(kk).map((kk => ({
        type: "char",
        char: kk,
        width: 1
      }))),
      Gf = function(kk) {
        return {
          type: "command",
          command: kk,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      Nf = [Gf("page", 2), Gf("otherPage"), Gf("caretLeft"), Gf("space", 3), Gf("caretRight"), Gf("close", 1.5), Gf("submit", 1.5)],
      Rf = [Gf("page", 2), Gf("otherPage"), Gf("caretLeft"), Gf("space", 2), Gf("caretRight"), Gf("newline"), Gf("close", 1.5), Gf("submit", 1.5)],
      Jf = [
        [...gf("1234567890"), Gf("backspace")], gf("qwertyuiop/"), gf("asdfghjkl'?"), [Gf("shift", 2), ...gf("zxcvbnm,.")]
      ],
      kS = [
        [...gf("1234567890"), Gf("backspace")], gf("!@#$%^&*()/"), gf('-_=+[]{};:"'), gf("~`|\\<>'\u20ac\xa3,.")
      ],
      eS = {
        letters: Jf,
        accents: [
          [...gf("1234567890"), Gf("backspace")], gf("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), gf("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [Gf("shift", 2), ...gf("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: kS
      },
      iS = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      DS = (kk, ek) => "letters" === kk ? ek ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === kk ? "symbols" : "accents"
      },
      fS = function(kk, ek) {
        const ik = ((kk, ek) => [...eS[kk], ek ? Rf : Nf])(kk, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === ek) return ik;
        const Dk = Math.min(2, SS(ik[0]) / ek);
        return [Array.from({
          length: ek
        }, ((kk, ek) => ({
          type: "phrase",
          phraseIndex: ek,
          width: Dk
        }))), ...ik]
      },
      SS = kk => kk.reduce(((kk, ek) => kk + ek.width), 0),
      bS = kk => Math.max(...kk.map(SS)),
      rS = (kk, ek) => {
        const ik = kk[ek.row];
        let Dk = (bS(kk) - SS(ik)) / 2;
        for (let fk = 0; fk < ek.col; fk++) Dk += ik[fk].width;
        return Dk + ik[ek.col].width / 2
      },
      PS = (kk, ek, ik) => {
        let Dk = 0,
          fk = 1 / 0;
        for (let Sk = 0; Sk < kk[ek].length; Sk++) {
          const bk = Math.abs(rS(kk, {
            row: ek,
            col: Sk
          }) - ik);
          bk < fk - 1e-9 && (Dk = Sk, fk = bk)
        }
        return Dk
      },
      mS = (kk, ek) => {
        const ik = Math.max(0, Math.min(kk.length - 1, ek.row));
        return {
          row: ik,
          col: Math.max(0, Math.min(kk[ik].length - 1, ek.col))
        }
      },
      MS = (kk, ek, ik) => "once" === kk && ek - ik <= 400 ? "caps" : "off" === kk ? "once" : "off",
      KS = (kk, ek) => "once" === kk && (kk => kk.toLowerCase() !== kk.toUpperCase())(ek) ? "off" : kk,
      xS = (kk, ek, ik) => {
        if ("symbols" === ek || "off" === ik) return kk;
        const Dk = kk.toUpperCase();
        return 1 === Dk.length ? Dk : kk
      };
    var nS = ik(8488);
    const US = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const HS = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(kk) {
          return !(kk - this.lastSendMs < 2e3) && (this.lastSendMs = kk, !0)
        }
      },
      wS = {
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
      lS = ["cb", "nameTag"],
      pS = kk => {
        const ek = kk.target instanceof HTMLTextAreaElement && !lS.includes(kk.kind);
        return fS(kk.page, "chat" === kk.kind ? US.length : 0, ek)
      },
      yS = kk => {
        const ek = kk.getBoundingClientRect(),
          ik = window.innerHeight,
          Dk = ek.top + ek.height / 2 < ik / 2 ? "bottom" : "top",
          fk = "bottom" === Dk ? ik - ek.bottom - 6 : ek.top - 6;
        return {
          placement: Dk,
          maxHeightPx: Math.min(.46 * ik, Math.max(.3 * ik, fk))
        }
      },
      YS = kk => {
        (0, ui.j)(kk) ? (0, ui.e)().close(): (ef.noteChosenStop(kk), kk.blur())
      };
    class LS {
      constructor(kk) {
        this.host = kk, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(kk, ek) {
        this.phraseTexts = kk, this.phrasesFill = ek
      }
      pressKey(kk) {
        const ek = this.host.getState(),
          ik = pS(ek),
          Dk = ik[kk.row][kk.col];
        this.host.setState({
          ...ek,
          focus: kk,
          preferredX: rS(ik, kk)
        }), "char" === Dk.type ? this.typeChar(Dk.char) : "command" === Dk.type ? this.runCommand(Dk.command) : this.sendPhrase(Dk.phraseIndex)
      }
      runCommand(kk) {
        const ek = this.host.getState();
        switch (kk) {
          case "backspace":
            (0, gk.c)(ek.target);
            break;
          case "space":
            (0, gk.f)(ek.target, " ");
            break;
          case "newline":
            (0, gk.f)(ek.target, "\n");
            break;
          case "caretLeft":
            (0, gk.k)(ek.target, -1);
            break;
          case "caretRight":
            (0, gk.k)(ek.target, 1);
            break;
          case "shift": {
            const kk = performance.now();
            this.host.setState({
              ...ek,
              shift: MS(ek.shift, kk, this.lastShiftPressMs)
            }), this.lastShiftPressMs = kk;
            break
          }
          case "page":
          case "otherPage": {
            const ik = DS(ek.page, ek.accentsFirst)[kk];
            this.host.setState({
              ...ek,
              page: ik,
              focus: mS(pS({
                ...ek,
                page: ik
              }), ek.focus)
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
            (0, ui.j)(ek.target) && (0, ui.e)().selectNextChannel()
        }
      }
      submit() {
        var kk, ek;
        const {
          target: ik
        } = this.host.getState();
        this.host.hide(), (0, ui.j)(ik) ? (0, ui.e)().submit() : (ef.noteChosenStop(ik), null === (kk = (ek = (0, ui.i)(ik)).submit) || void 0 === kk || kk.call(ek), document.activeElement === ik && ik.blur())
      }
      close() {
        const {
          target: kk
        } = this.host.getState();
        this.host.hide(), YS(kk)
      }
      typeChar(kk) {
        const {
          target: ek,
          page: ik,
          shift: Dk
        } = this.host.getState();
        (0, gk.f)(ek, xS(kk, ik, Dk)), this.host.setState({
          ...this.host.getState(),
          shift: KS(Dk, kk)
        })
      }
      sendPhrase(kk) {
        if (this.phrasesFill) {
          const {
            target: ek
          } = this.host.getState(), ik = this.phraseTexts[kk];
          ik && (ek.setSelectionRange(0, ek.value.length), (0, gk.f)(ek, ik))
        } else HS.claim(performance.now()) && (this.host.hide(), (0, ui.e)().sendLine(this.phraseTexts[kk]))
      }
    }
    var CS = ik(8511);
    const AS = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      jS = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class sS {
      constructor(kk, ek) {
        this.host = kk, this.editor = ek, this.lastDirection = null, this.navRepeat = new Uk.e((0, Hk.c)(AS)), this.commandRepeats = new Map(Of.filter((kk => {
          let {
            repeats: ek
          } = kk;
          return ek
        })).map((kk => {
          let {
            command: ek
          } = kk;
          return [ek, (0, Hk.c)(jS)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const kk of this.commandRepeats.values()) kk.reset()
      }
      onVisibleFrame(kk) {
        const ek = performance.now();
        for (const {
            command: fk,
            action: Sk
          }
          of Of) {
          const ik = (0, Mk.i)(Sk),
            Dk = this.commandRepeats.get(fk);
          if ((Dk ? Dk.update(kk.isHeld(ik), ek) : kk.wasPressed(ik)) && (this.editor.runCommand(fk), !this.host.getState().visible)) return
        }
        if (kk.wasPressed((0, Mk.i)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const ik = this.readNavDirection(kk);
        this.lastDirection = ik;
        const Dk = this.navRepeat.update(ik, ek);
        Dk && this.navigate(Dk)
      }
      onHiddenFrame(kk, ek) {
        var ik;
        if (kk.wasPressed((0, Mk.i)("keyboardClose"))) return void YS(ek);
        const Dk = (0, Mk.i)("keyboardType");
        if (kk.wasPressed(Dk)) return Kk.c.consumeButton(Dk), void this.host.open(ek);
        const fk = this.readNavDirection(kk),
          Sk = null !== fk && fk !== this.lastDirection;
        if (this.lastDirection = fk, !Sk || (0, ui.j)(ek)) return;
        const bk = (null === (ik = xD()) || void 0 === ik ? void 0 : ik.root.contains(ek)) || null !== ek.closest(".EntireInventoryWrapper");
        YS(ek), bk && Kk.c.handOffHeldInput()
      }
      navigate(kk) {
        const ek = this.host.getState();
        if ("Up" === kk && 0 === ek.focus.row && "chat" === ek.kind) return (0, ui.e)().stepHistory(), void this.host.setState({
          ...ek
        });
        const ik = ((kk, ek, ik, Dk) => {
          if ("Left" === ik || "Right" === ik) {
            const Dk = kk[ek.row].length,
              fk = (ek.col + ("Right" === ik ? 1 : -1) + Dk) % Dk,
              Sk = {
                row: ek.row,
                col: fk
              };
            return {
              pos: Sk,
              preferredX: rS(kk, Sk)
            }
          }
          const fk = (ek.row + ("Down" === ik ? 1 : -1) + kk.length) % kk.length;
          return {
            pos: {
              row: fk,
              col: PS(kk, fk, Dk)
            },
            preferredX: Dk
          }
        })(pS(ek), ek.focus, kk, ek.preferredX);
        this.host.setState({
          ...ek,
          focus: ik.pos,
          preferredX: ik.preferredX
        })
      }
      readNavDirection(kk) {
        for (const ek of Uk.B)
          if (kk.isHeld(ek)) return ek;
        return (0, Uk.fb)((0, Uk.j)(kk.leftStick, (0, xk.h)().moveDeadzone))
      }
    }
    const dS = ["Up", "Down", "Left", "Right"],
      VS = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const FS = new class {
      constructor() {
        this.state = wS, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new LS(this), this.padInput = new sS(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(kk) {
        const ek = kk.visible !== this.state.visible;
        this.state = kk;
        for (const ik of this.listeners) ik();
        ek && mk.j.tm(CS.e, kk.visible)
      }
      subscribe(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
      install() {
        const kk = Kk.c.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, gk.j)(document.activeElement),
            onFrame: kk => {
              this.onFrame(kk)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: kk => dS.includes(kk) || !this.state.visible && kk === (0, Mk.i)("keyboardType")
          }),
          ek = kk => {
            const ek = kk.target;
            (0, gk.j)(ek) && (ek === this.pendingChatInput || (0, nk.j)() ? this.open(ek) : this.state.visible && ek !== this.state.target && (this.ownedField = null, this.hide()))
          },
          ik = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          Dk = kk => {
            kk.isTrusted && this.state.visible && (kk => !kk.repeat && !VS.has(kk.key) && !(0, nS.e)(kk.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(kk.key))(kk) && this.hide()
          },
          fk = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...yS(this.state.target)
            })
          };
        document.addEventListener("focusin", ek, !0), document.addEventListener("focusout", ik, !0), window.addEventListener("keydown", Dk, !0), window.addEventListener("resize", fk);
        const Sk = mk.j.subscribe(Qf.d, (() => {
            this.openChat()
          })),
          bk = mk.j.subscribe(CS.f, (kk => {
            this.openForField(kk)
          }));
        return () => {
          kk(), document.removeEventListener("focusin", ek, !0), document.removeEventListener("focusout", ik, !0), window.removeEventListener("keydown", Dk, !0), window.removeEventListener("resize", fk), mk.j.unsubscribe(Sk), mk.j.unsubscribe(bk), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const kk = (0, ui.e)();
        kk ? document.activeElement !== kk.input ? (this.clearPendingChat(), this.pendingChatInput = kk.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), kk.open()) : this.open(kk.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(kk) {
        (0, gk.j)(kk) ? (document.activeElement !== kk && kk.focus(), document.activeElement === kk && this.open(kk)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", kk)
      }
      open(kk) {
        var ek;
        if (this.clearPendingChat(), this.ownedField = kk, this.state.visible && this.state.target === kk) return;
        this.restoreInputMode(), (0, gk.o)(kk), this.savedInputMode = kk.getAttribute("inputmode"), kk.setAttribute("inputmode", "none");
        const ik = {
          ...wS,
          visible: !0,
          target: kk,
          kind: (0, ui.j)(kk) ? "chat" : null !== (ek = (0, ui.i)(kk).kind) && void 0 !== ek ? ek : null,
          accentsFirst: (Dk = Yf.f.get().getCurrentLanguageCode(), iS.has(Dk)),
          ...yS(kk)
        };
        var Dk;
        const fk = pS(ik),
          Sk = ((kk, ek) => {
            for (let ik = 0; ik < kk.length; ik++) {
              const Dk = kk[ik].findIndex((kk => "char" === kk.type && kk.char === ek));
              if (-1 !== Dk) return {
                row: ik,
                col: Dk
              }
            }
            return null
          })(fk, "q");
        this.padInput.reset(), this.setState({
          ...ik,
          focus: Sk,
          preferredX: rS(fk, Sk)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(wS))
      }
      onFrame(kk) {
        if (this.releaseLostField()) return;
        const ek = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(kk) : (0, gk.j)(ek) && this.padInput.onHiddenFrame(kk, ek)
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
    var uS = ik(8614);
    const qS = new Map(Of.map((kk => {
        let {
          command: ek,
          action: ik
        } = kk;
        return [ek, ik]
      }))),
      IS = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      zS = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        cb: "controller:keyboardTargetBookTitle"
      },
      QS = kk => {
        const ek = (() => {
          const [, kk] = (0, Ek.useReducer)((kk => kk + 1), 0);
          return kk
        })();
        (0, Ek.useEffect)((() => {
          if (!kk) return;
          const ik = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const fk of ik) kk.addEventListener(fk, ek);
          document.addEventListener("selectionchange", ek);
          const Dk = new MutationObserver(ek);
          return Dk.observe(kk, {
            attributeFilter: ["placeholder"]
          }), () => {
            Dk.disconnect();
            for (const Dk of ik) kk.removeEventListener(Dk, ek);
            document.removeEventListener("selectionchange", ek)
          }
        }), [kk, ek])
      },
      vS = kk => {
        kk.preventDefault()
      },
      ES = kk => {
        "mouse" !== kk.pointerType && kk.preventDefault()
      },
      hS = () => {
        var kk;
        const {
          t: ek
        } = (0, fk.D)(), ik = (() => {
          const [kk, ek] = (0, Ek.useState)(FS.getState());
          return (0, Ek.useEffect)((() => FS.subscribe((() => {
            ek(FS.getState())
          }))), []), kk
        })(), Dk = (0, nk.A)(), Sk = (0, Ek.useRef)(null);
        (0, xk.n)(), (0, nk.D)(), (0, Ek.useEffect)((() => {
          const kk = FS.install(),
            ek = null;
          return () => {
            kk(), null === ek || void 0 === ek || ek()
          }
        }), []);
        const bk = (0, Ek.useMemo)((() => US.map((kk => ek(kk)))), [ek]),
          rk = ik.visible && "chat" === ik.kind ? ik.target : null;
        QS(rk);
        const Pk = null !== (kk = null === rk || void 0 === rk ? void 0 : rk.value) && void 0 !== kk ? kk : "",
          mk = ((kk, ek, ik) => {
            if (!kk.startsWith("/")) return [];
            const Dk = [];
            for (let fk = ek.length - 1; fk >= 0 && Dk.length < ik; fk--) {
              const ik = ek[fk].trim();
              ik.startsWith(kk) && ik !== kk && !Dk.includes(ik) && Dk.push(ik)
            }
            return Dk
          })(Pk, Pk.startsWith("/") ? (0, uS.e)() : [], US.length),
          Kk = Pk.startsWith("/"),
          Uk = Kk ? US.map(((kk, ek) => {
            var ik;
            return null !== (ik = mk[ek]) && void 0 !== ik ? ik : ""
          })) : bk;
        if ((0, Ek.useEffect)((() => {
            FS.editor.setPhraseRow(Uk, Kk)
          })), (0, Ek.useEffect)((() => {
            const kk = Sk.current;
            if (kk) return kk.addEventListener("touchstart", vS, {
              passive: !1
            }), () => {
              kk.removeEventListener("touchstart", vS)
            }
          }), [ik.visible]), !ik.visible) return null;
        const Hk = pS(ik),
          wk = bS(Hk),
          lk = kk => "char" === kk.type ? xS(kk.char, ik.page, ik.shift) : "phrase" === kk.type ? Uk[kk.phraseIndex] : (kk => {
            switch (kk) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === ik.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return IS[DS(ik.page, ik.accentsFirst)[kk]];
              case "space":
                return ek("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return ek("chat" === ik.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(kk.command),
          pk = kk => {
            FS.editor.pressKey(kk)
          };
        return (0, Wk.jsxs)("div", {
          ref: Sk,
          className: ak()(ui.o, "top" === ik.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: ik.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": Hk.length,
            "--pad-keyboard-height": `${ik.maxHeightPx}px`
          },
          onPointerDown: ES,
          onMouseDown: vS,
          children: [(0, Wk.jsx)(aS, {
            target: ik.target,
            label: ik.kind ? ek(zS[ik.kind]) : ik.target.placeholder || ek("controller:keyboardTargetText")
          }), (0, Wk.jsx)("div", {
            className: "PadKeyboardRows",
            children: Hk.map(((kk, ek) => (0, Wk.jsx)("div", {
              className: ak()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === kk[0].type
              }),
              children: kk.map(((kk, fk) => {
                const Sk = Dk && ik.focus.row === ek && ik.focus.col === fk,
                  bk = "command" === kk.type ? qS.get(kk.command) : void 0;
                return (0, Wk.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: kk.width / wk * 100 + "%"
                  },
                  children: (0, Wk.jsxs)("div", {
                    className: ak()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: Sk,
                      PadKeyboardKeyCommand: "command" === kk.type,
                      PadKeyboardKeyPhrase: "phrase" === kk.type,
                      PadKeyboardKeyActive: "command" === kk.type && "shift" === kk.command && "off" !== ik.shift,
                      PadKeyboardKeySubmit: "command" === kk.type && "submit" === kk.command
                    }),
                    role: "button",
                    onClick: () => {
                      pk({
                        row: ek,
                        col: fk
                      })
                    },
                    onTouchEnd: kk => {
                      var ik, Dk;
                      kk.preventDefault(), ik = kk.changedTouches[0], Dk = kk.currentTarget.getBoundingClientRect(), ik && ik.clientX >= Dk.left && ik.clientX <= Dk.right && ik.clientY >= Dk.top && ik.clientY <= Dk.bottom && pk({
                        row: ek,
                        col: fk
                      })
                    },
                    children: [(0, Wk.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: lk(kk)
                    }), Dk && bk && (0, Wk.jsx)(sf, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, Mk.i)(bk)
                    })]
                  })
                }, fk)
              }))
            }, ek)))
          })]
        })
      },
      aS = kk => {
        let {
          target: ek,
          label: ik
        } = kk;
        QS(ek);
        const Dk = (0, Ek.useRef)(null),
          fk = (0, Ek.useRef)(null),
          Sk = ek instanceof HTMLTextAreaElement;
        (0, Ek.useLayoutEffect)((() => {
          const kk = Dk.current,
            ek = fk.current;
          Sk ? kk.scrollTop = ek.offsetTop - kk.clientHeight / 2 : kk.scrollLeft = ek.offsetLeft - kk.clientWidth / 2
        }));
        const {
          value: bk,
          start: rk,
          end: Pk
        } = (0, gk.q)(ek), mk = "password" === ek.type ? "\u2022".repeat(bk.length) : bk;
        return (0, Wk.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, Wk.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: ik
          }), (0, Wk.jsxs)("div", {
            ref: Dk,
            className: ak()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: Sk
            }),
            children: [(0, Wk.jsx)("span", {
              children: mk.slice(0, rk)
            }), (0, Wk.jsx)("span", {
              ref: fk,
              className: "PadKeyboardCaret"
            }), rk !== Pk && (0, Wk.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: mk.slice(rk, Pk)
            }), (0, Wk.jsx)("span", {
              children: mk.slice(Pk)
            }), 0 === mk.length && ek.placeholder && ek.placeholder !== ik && (0, Wk.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: ek.placeholder
            })]
          })]
        })
      };
    var WS = ik(1371),
      tS = ik(3398);
    const XS = function() {
        for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
        return ek.map(Mk.i)
      },
      BS = (kk, ek) => {
        const ik = Zi(kk);
        return ik ? [{
          glyphs: [ik],
          labelKey: ek
        }] : []
      },
      cS = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      TS = "--pad-hint-bar-clearance",
      oS = "[data-pad-hint-bar-avoid]",
      ZS = kk => {
        const ek = [];
        for (const ik of kk)(0, Jk.s)(ik) && ek.push(ik.getBoundingClientRect());
        return ek
      },
      OS = kk => {
        if (!kk) return null;
        const ek = xD(),
          ik = ek ? ZS(((kk, ek) => {
            const ik = kk.closest(oS);
            return ik ? [ik] : ("popup" === ek ? document : kk).querySelectorAll(oS)
          })(ek.root, ek.layer.kind)) : [],
          Dk = !ek || ek.root.hasAttribute("data-pad-shows-hud");
        if (((0, tS.h)(null === ek || void 0 === ek ? void 0 : ek.layer.kind, (0, tS.i)()) || Dk) && ik.push(...ZS(document.querySelectorAll(cS.join(",")))), 0 === ik.length) return null;
        const {
          width: fk,
          height: Sk
        } = kk.getBoundingClientRect(), bk = window.innerHeight - 8, rk = (0, tS.o)(bk, {
          width: fk,
          height: Sk
        }, window.innerWidth / 2, ik, 8);
        return rk === bk ? null : Math.round(window.innerHeight - rk)
      },
      gS = kk => {
        const ek = document.documentElement.style,
          ik = kk ? `${Math.round(window.innerHeight-kk.getBoundingClientRect().top)}px` : "";
        ek.getPropertyValue(TS) !== ik && (ik ? ek.setProperty(TS, ik) : ek.removeProperty(TS))
      },
      GS = () => {
        const {
          t: kk
        } = (0, fk.D)(), {
          hideButtonHints: ek
        } = (0, xk.n)(), ik = (0, nk.A)(), [Dk, Sk] = (0, Ek.useState)(!1), [bk, mk] = (0, Ek.useState)([]), [Hk, wk] = (0, Ek.useState)(null), lk = (0, Ek.useRef)(null), pk = (0, Ek.useRef)(null);
        (0, yf.c)(CS.e, (kk => {
          Sk(kk)
        })), (0, yf.c)(tS.k, (() => {
          var kk;
          null === (kk = pk.current) || void 0 === kk || kk.call(pk)
        }));
        const yk = ik && !ek && !Dk;
        return (0, Ek.useEffect)((() => {
          if (!yk) return;
          let kk = null;
          const ek = () => {
            const ek = (() => {
                var kk;
                const ek = Kk.c.getActiveConsumerName(),
                  ik = (0, tS.f)();
                if (ik) {
                  const kk = (0, Mk.i)(ik),
                    ek = "emoteWheel" === ik && "wheel" === (0, xk.h)().emoteButton || !(0, Uk.J)(Kk.c.getLastFrame().values, kk) ? {
                      glyphs: XS("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [kk],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, Mk.w)(kk)],
                    labelKey: "controller:wheelChoose"
                  }, ek, {
                    glyphs: XS("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const Dk = xD();
                if (!Dk || "focus" !== ek && "cursor" !== ek) return (0, tS.d)(Mk.i);
                const fk = [],
                  Sk = {
                    glyphs: XS("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  bk = (0, Tk.q)(Dk.root),
                  rk = bk ? !(0, Jk.v)(bk) : Boolean(Dk.layer.close),
                  mk = !bk && Dk.layer.closeLabelKey ? Dk.layer.closeLabelKey : Sk.labelKey,
                  nk = rk ? [{
                    ...Sk,
                    labelKey: mk
                  }] : [],
                  Hk = zi(Dk.layer.kind) ? [{
                    glyphs: XS("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === ek) return fk.push({
                  glyphs: XS("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), fk.push({
                  glyphs: XS("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), fk.push(...nk), fk.push(...Hk), fk.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), VD() && fk.push({
                  glyphs: XS("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), fk;
                const wk = ef.getFocused();
                wk && (0, zD.c)(wk) ? fk.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : wk && (0, Tk.B)(wk) ? fk.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : fk.push({
                  glyphs: XS("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const lk = wk ? null === (kk = ni(wk)) || void 0 === kk ? void 0 : kk.dataset.padSecondary : void 0;
                lk && fk.push({
                  glyphs: XS("menuSecondary"),
                  labelKey: lk
                }), fk.push(...null !== wk && void 0 !== wk && wk.closest("[data-pad-friends-column]") ? [Sk] : nk), fk.push(...Hk);
                const pk = "home" === Dk.layer.kind;
                Gi(Dk.root) || !ai(Dk.root) && !Ni(Dk) ? pk && fk.push({
                  glyphs: XS("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : fk.push({
                  glyphs: XS("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), pk && (fk.push(...BS("inventory", "controller:menusFriends")), lk || fk.push({
                  glyphs: XS("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), fk.push(...BS("pause", "controller:menusSettings")), fk.push(...BS("leaderboard", "controller:menusNotifications")));
                const yk = Pk.b.get("openEverythingMenuName");
                return "inGame" === Pk.b.get("gameState") && "popup" !== Dk.layer.kind && null !== yk && ((0, mi.n)(yk) ? fk.push(...BS("leaderboard", "controller:menusClose")) : yk !== Pi.r.LOBBY_LEADERBOARD && fk.push(...BS("leaderboard", "controller:menusLobby"))), fk.push({
                  glyphs: XS("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), fk
              })(),
              ik = OS(lk.current),
              Dk = ((kk, ek) => `${kk.map((kk=>`${kk.glyphs.join("+")}:${kk.labelKey}`)).join("|")}@${ek}`)(ek, ik);
            Dk !== kk && (kk = Dk, (0, rk.unstable_batchedUpdates)((() => {
              mk(ek), wk(ik)
            }))), gS(lk.current)
          };
          ek(), pk.current = ek;
          const ik = requestAnimationFrame(ek),
            Dk = setInterval(ek, 150);
          return () => {
            pk.current = null, cancelAnimationFrame(ik), clearInterval(Dk), gS(null)
          }
        }), [yk]), (0, Ek.useLayoutEffect)((() => {
          if (!yk) return;
          if (0 === bk.length) return void gS(null);
          const kk = OS(lk.current);
          kk === Hk ? gS(lk.current) : wk(kk)
        }), [yk, bk, Hk]), yk && 0 !== bk.length ? (0, Wk.jsx)("div", {
          ref: lk,
          className: "PadButtonHintBar SmallTextBold",
          style: null === Hk ? void 0 : {
            bottom: Hk
          },
          "aria-hidden": !0,
          children: bk.map((ek => (0, Wk.jsxs)("div", {
            className: "PadButtonHint",
            children: [ek.glyphs.map((kk => (0, Wk.jsx)(sf, {
              glyph: kk,
              className: "PadButtonHintGlyph"
            }, kk))), (0, Wk.jsx)("span", {
              children: kk(ek.labelKey)
            })]
          }, ek.labelKey)))
        }) : null
      };
    var NS = ik(1696);
    const RS = [Jk.d, "label", "[data-pad-slider]"].join(","),
      JS = "data-pad-cursor-probe",
      kb = kk => {
        var ek;
        const ik = (kk => {
          const ek = [];
          for (let Dk = kk; Dk && Dk !== document.body && Dk !== document.documentElement && (ek.push(Dk), !(ek.length > 8)); Dk = Dk.parentElement);
          const ik = document.documentElement.classList.contains(nk.s) ? ek[ek.length - 1] : void 0;
          null === ik || void 0 === ik || ik.setAttribute(JS, "");
          try {
            return ek.map((kk => ({
              element: kk,
              cursor: getComputedStyle(kk).cursor
            })))
          } finally {
            null === ik || void 0 === ik || ik.removeAttribute(JS)
          }
        })(kk);
        if ("pointer" !== (null === (ek = ik[0]) || void 0 === ek ? void 0 : ek.cursor)) return null;
        let Dk = 0;
        for (; Dk + 1 < ik.length && "pointer" === ik[Dk + 1].cursor;) Dk++;
        return ik[Dk].element
      },
      eb = (kk, ek, ik, Dk) => {
        const fk = Dk.root.contains(kk) ? Dk.root : null;
        for (let Sk = kk; Sk && Sk !== document.body && Sk !== document.documentElement; Sk = Sk.parentElement) {
          if (Sk instanceof HTMLElement && dk(Sk, ek) && Ik(Sk, ek, ik)) return Sk;
          if (Sk === fk) break
        }
        return "home" === Dk.layer.kind || "gamePage" === Dk.layer.kind ? ((kk, ek) => {
          const ik = document.scrollingElement;
          return ik instanceof HTMLElement && ![document.documentElement, document.body].some((ek => {
            const ik = getComputedStyle(ek),
              Dk = "y" === kk ? ik.overflowY : ik.overflowX;
            return "hidden" === Dk || "clip" === Dk
          })) && Ik(ik, kk, ek) ? ik : null
        })(ek, ik) : null
      };
    const ib = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, Hk.c)(Uk.u), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const kk = Kk.c.register({
              name: "cursor",
              isActive: () => "cursor" === FD(),
              onFrame: kk => {
                this.onFrame(kk)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: kk => (0, Kk.d)(kk) || kk === (0, Mk.i)("menuConfirm") && (0, Tk.E)((0, nk.c)())
            }),
            ek = (0, fD.j)((kk => {
              const ek = kk.getRoot();
              ek && this.layerPoints.delete(ek), ek === this.layerRoot && (this.layerRoot = null)
            })),
            ik = mk.j.subscribe("appManagerUpdated|activeInputDevice", (kk => {
              "gamepad" !== kk && this.active && !this.hidden && this.hide()
            }));
          return () => {
            kk(), ek(), mk.j.unsubscribe(ik), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, nk.j)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.tm()
        }
        activate(kk) {
          this.active = !0, this.hidden = !1;
          const ek = jD();
          !ek || ek.root && ek.root !== kk.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(kk), this.jumpTo(ek.point))
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
          }, this.tm())
        }
        onFrame(kk) {
          const ek = xD();
          if (!ek) return;
          if (this.active || this.activate(ek), this.followPage(ek)) return;
          this.followLayer(ek);
          const ik = kk.wokeDevice ? (0, nk.c)() : null;
          if (ik && this.jumpTo(ik), !(0, nk.j)()) return void this.hide();
          const Dk = (0, Mk.i)("menuToggleCursor");
          if (kk.wasPressed(Dk)) return Kk.c.consumeButton(Dk), void AD(this.getHandoff(null));
          if (this.handBackToFocus(kk)) return;
          const fk = (0, Mk.i)("menuConfirm"),
            Sk = (0, Mk.i)("menuSecondary");
          if (kk.wasPressed((0, Mk.i)("menuBack"))) return (0, Tk.h)(ek.root) || (0, Tk.c)(ek.root) || nD(), void this.tm();
          if (kD(null, kk, ek)) return kk.wasReleased(fk) && this.press && (this.updateHit(!1), this.updateConfirm(kk, fk)), void this.tm();
          if (document.pointerLockElement) return void this.hide();
          const bk = uD() ? {
              x: 0,
              y: 0
            } : (kk => {
              const ek = (kk, ek) => (kk ? 1 : 0) - (ek ? 1 : 0);
              return {
                x: ek(kk.isHeld("Right"), kk.isHeld("Left")),
                y: ek(kk.isHeld("Down"), kk.isHeld("Up"))
              }
            })(kk),
            rk = (0, xk.h)().moveDeadzone,
            Pk = ((kk, ek) => {
              const ik = (0, Uk.j)(kk, Yk(ek));
              return Math.hypot(ik.x, ik.y)
            })(kk.leftStick, rk) > 0 || 0 !== bk.x || 0 !== bk.y;
          if (this.hidden) {
            const ek = kk.wasPressed(fk),
              ik = kk.wasPressed(Sk);
            if (!Pk && !Ak(kk.rightStick) && !ek && !ik && !kk.wokeDevice) return void this.tm();
            if (this.hidden = !1, this.updateHit(!1), ek || ik) return ek && (this.press = {
              kind: "ignored"
            }, kk.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.tm()
          }
          this.movePendingPageStart(Pk);
          const mk = this.getPoint();
          this.state = Ck(this.state, {
            stick: kk.leftStick,
            moveDeadzone: rk,
            dpad: bk,
            dtMs: kk.dtMs,
            cursorSpeedPercent: (0, xk.h)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const Hk = this.state.x !== mk.x || this.state.y !== mk.y,
            wk = [fk, Sk].some((ek => kk.wasPressed(ek) || kk.wasReleased(ek)));
          (Hk || wk || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(Hk), this.updateConfirm(kk, fk), this.updateSecondary(kk, Sk), this.updateScroll(kk, ek), this.tm()
        }
        followPage(kk) {
          const ek = "home" === kk.layer.kind || "gamePage" === kk.layer.kind,
            ik = this.page;
          if (this.page = ek ? {
              key: (0, fD.q)(kk.layer),
              root: kk.root
            } : null, !this.page || !ik || ik.root !== kk.root || ik.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(kk), "hybrid" === CD()) return yD = null, lD = null, YD.lock(), !0;
          const {
            key: Dk
          } = this.page;
          return this.pendingPageStart = {
            root: kk.root,
            key: Dk,
            returning: ef.notePageEnteredByCursor(Dk),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(kk) {
          const ek = this.pendingPageStart;
          if (!ek) return;
          if (kk || ek.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const ik = ek.returning ? ef.recallStop(ek.root, ek.key) : null;
          if (!ik && ek.returning && performance.now() - ek.enteredAtMs < 1e3) return;
          const Dk = null !== ik && void 0 !== ik ? ik : ef.pickInitial(ek.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: ek.enteredAtMs
          });
          Dk && (this.pendingPageStart = null, this.jumpTo((0, Tk.u)(Dk)))
        }
        setLayer(kk) {
          this.layerRoot = kk.root, this.layerOrder = kk.order
        }
        followLayer(kk) {
          var ek;
          if (kk.root === this.layerRoot) return;
          null !== (ek = this.layerRoot) && void 0 !== ek && ek.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const ik = this.layerPoints.get(kk.root),
            Dk = ik && kk.order <= this.layerOrder ? ik : ef.getLayerStartPoint(kk.root);
          this.setLayer(kk), this.jumpTo(Dk)
        }
        getHandoff(kk) {
          var ek;
          return {
            point: this.getPoint(),
            element: null !== (ek = this.interactive) && void 0 !== ek ? ek : this.findDraggedSliderNearby(),
            direction: kk
          }
        }
        findDraggedSliderNearby() {
          const kk = this.draggedSlider;
          if (null === kk || void 0 === kk || !kk.isConnected) return null;
          const ek = kk.getBoundingClientRect(),
            {
              y: ik
            } = this.getPoint();
          return ik >= ek.top - 40 && ik <= ek.bottom + 40 ? kk : null
        }
        handBackToFocus(kk) {
          if (!uD()) return !1;
          const ek = Uk.B.find((ek => kk.wasPressed(ek)));
          return !!ek && (ik = this.getHandoff(ek), yD = HD(ik), lD = null, YD.lock(), Kk.c.handOffHeldInput(), !0);
          var ik
        }
        getAssistContext() {
          const kk = this.interactive;
          if (null === kk || void 0 === kk || !kk.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const ek = kk.getBoundingClientRect();
          if (ek.width > .4 * window.innerWidth || ek.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const ik = (0, xk.h)().cursorMagnetism && !(0, NS.e)(kk) && !kk.closest("[data-pad-slider]"),
            Dk = this.magnet && this.magnet !== kk && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : ek;
          return {
            overInteractive: !0,
            magnetTarget: ik ? {
              x: Dk.left + Dk.width / 2,
              y: Dk.top + Dk.height / 2
            } : null
          }
        }
        updateHit(kk) {
          this.lastHitTestMs = performance.now();
          const ek = this.getPoint(),
            ik = document.elementFromPoint(ek.x, ek.y),
            Dk = ik && !(0, lk.r)(ik) && (kk => {
              var ek;
              const ik = xD();
              return !(ik && !ik.root.contains(kk) && !kk.closest(".tooltip-container")) || !(null !== (ek = document.getElementById("root")) && void 0 !== ek && ek.contains(kk))
            })(ik) ? ik : null;
          if (Dk !== this.hit) return (0, Tk.j)(this.hit, Dk, ek), this.hit = Dk, void this.setInteractive(Dk ? (kk => {
            const ek = kk.closest(RS);
            if (ek) {
              var ik, Dk;
              const kk = null !== (ik = null === (Dk = ek.parentElement) || void 0 === Dk ? void 0 : Dk.closest("[data-pad-focusable]")) && void 0 !== ik ? ik : ek;
              return (0, Jk.v)(kk) ? {
                element: null,
                magnet: null
              } : {
                element: kk,
                magnet: ek
              }
            }
            const fk = kb(kk);
            return {
              element: fk,
              magnet: fk
            }
          })(Dk) : {
            element: null,
            magnet: null
          });
          kk && Dk && (0, Tk.j)(Dk, Dk, ek)
        }
        setInteractive(kk) {
          let {
            element: ek,
            magnet: ik
          } = kk;
          this.interactive = ek, this.magnet = ik
        }
        clearHover() {
          this.hit && (0, Tk.j)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const kk = this.hit;
          if (!kk || (0, Tk.B)(kk)) return {
            kind: "ignored"
          };
          const ek = (0, zD.c)(kk),
            ik = kk.closest("[data-pad-slider]");
          return ek && ik ? {
            kind: "slider",
            slider: ik,
            adjuster: ek
          } : ((0, Tk.m)(kk, this.getPoint()), {
            kind: "pointer",
            target: kk
          })
        }
        applySliderFraction(kk) {
          var ek;
          const ik = kk.slider.getBoundingClientRect(),
            Dk = ik.height > ik.width,
            fk = null === (ek = kk.slider.querySelector("[data-pad-slider-handle]")) || void 0 === ek ? void 0 : ek.getBoundingClientRect(),
            Sk = fk ? Dk ? fk.height : fk.width : 0,
            bk = (Dk ? ik.height : ik.width) - Sk;
          if (bk <= 0) return;
          const rk = Dk ? ik.bottom - Sk / 2 - this.state.y : this.state.x - ik.left - Sk / 2;
          kk.adjuster.setFraction(Math.max(0, Math.min(1, rk / bk)))
        }
        updateConfirm(kk, ek) {
          kk.wasPressed(ek) && (this.press = kk.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const ik = this.press;
          if (!ik) return;
          if (kk.isHeld(ek)) return "slider" === ik.kind && this.applySliderFraction(ik), void this.updateRepeat();
          this.press = null;
          const Dk = this.repeated;
          if (this.endRepeat(), !kk.wasReleased(ek)) return void this.endPressWithoutClick(ik);
          const fk = this.getPoint(),
            Sk = this.hit;
          if ("slider" === ik.kind && ik.adjuster.endDrag(), "pointer" === ik.kind) {
            const kk = null !== Sk && void 0 !== Sk ? Sk : ik.target.isConnected ? ik.target : null;
            kk && (0, Tk.n)(kk, fk);
            const ek = Sk && ik.target.isConnected && !Dk ? ((kk, ek) => {
              for (let ik = kk; ik; ik = ik.parentElement)
                if (ik.contains(ek)) return ik;
              return null
            })(ik.target, Sk) : null;
            ek && (ef.noteCursorActivation(ek), (0, lk.f)(ek, new MouseEvent("click", (0, Tk.L)(fk, 0, 0))), (0, Tk.d)(ek), (0, Tk.H)(ek) && (0, Tk.G)(ek))
          }
        }
        beginRepeat() {
          var kk, ek, ik;
          const Dk = null !== (kk = null === (ek = this.hit) || void 0 === ek ? void 0 : ek.closest("[data-pad-repeat]")) && void 0 !== kk ? kk : null;
          this.repeatStop = Dk, this.repeatKey = null !== (ik = null === Dk || void 0 === Dk ? void 0 : Dk.getAttribute("data-pad-repeat")) && void 0 !== ik ? ik : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const kk = this.repeatStop;
          if (!kk) return;
          const ek = this.hit;
          kk.isConnected && !(0, Jk.v)(kk) && kk.getAttribute("data-pad-repeat") === this.repeatKey && ek && kk.contains(ek) ? kk.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, ef.noteCursorActivation(kk), (0, lk.f)(kk, new MouseEvent("click", (0, Tk.L)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(kk) {
          "slider" === kk.kind && kk.adjuster.endDrag(), "pointer" === kk.kind && kk.target.isConnected && (0, Tk.n)(kk.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(kk, ek) {
          kk.wasPressed(ek) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !kk.isHeld(ek) && (this.secondaryArmed = !1, kk.wasReleased(ek) && this.hit && (0, Tk.i)(this.hit, this.getPoint(), 2))
        }
        updateScroll(kk, ek) {
          const ik = jk(kk.rightStick, kk.dtMs);
          if (0 === ik.x && 0 === ik.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + ik.x,
            y: this.scrollRemainder.y + ik.y
          };
          const Dk = Math.trunc(this.scrollRemainder.x),
            fk = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - Dk,
            y: this.scrollRemainder.y - fk
          };
          const Sk = this.hit;
          if (!Sk) return;
          let bk = !1;
          if (0 !== fk) {
            const kk = eb(Sk, "y", fk > 0 ? 1 : -1, ek);
            kk && (kk.scrollBy({
              top: fk,
              behavior: "instant"
            }), bk = !0)
          }
          if (0 !== Dk) {
            const kk = eb(Sk, "x", Dk > 0 ? 1 : -1, ek);
            kk && (kk.scrollBy({
              left: Dk,
              behavior: "instant"
            }), bk = !0)
          }
          bk && (this.lastHitTestMs = -1 / 0)
        }
        tm() {
          Ok.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      Db = () => {
        const kk = (0, Ek.useMemo)((() => new Bk), []),
          ek = (0, nk.A)();
        return (0, Ek.useEffect)((() => {
          if (!ek) return;
          let ik = 0,
            Dk = {
              of: null,
              atMs: 0,
              list: []
            };
          const fk = document.getElementsByClassName(qD),
            Sk = kk => {
              for (const ek of [...fk]) ek !== kk && ek.classList.remove(qD)
            },
            bk = () => {
              var ek;
              ik = requestAnimationFrame(bk);
              const fk = (() => {
                const kk = ef.getFocused();
                if (ef.isActive() && null !== kk && void 0 !== kk && kk.isConnected) return kk;
                const ek = ib.getHighlighted();
                return null !== ek && void 0 !== ek && ek.isConnected ? ek : null
              })();
              Sk(fk), fk && !fk.classList.contains(qD) && fk.classList.add(qD);
              const rk = null !== (ek = null === fk || void 0 === fk ? void 0 : fk.closest("[data-pad-reticle-box]")) && void 0 !== ek ? ek : fk;
              kk.show(rk ? ((kk, ek) => {
                let ik = kk.left,
                  Dk = kk.top,
                  fk = kk.right,
                  Sk = kk.bottom;
                for (const bk of ek) {
                  if (!bk) continue;
                  const kk = Qk(bk);
                  ik = Math.max(ik, kk.left), Dk = Math.max(Dk, kk.top), fk = Math.min(fk, kk.right), Sk = Math.min(Sk, kk.bottom)
                }
                return fk <= ik || Sk <= Dk ? null : {
                  left: ik,
                  top: Dk,
                  width: fk - ik,
                  height: Sk - Dk
                }
              })(rk.getBoundingClientRect(), (kk => {
                const ek = performance.now();
                return (Dk.of !== kk || ek - Dk.atMs > 500) && (Dk = {
                  of: kk,
                  atMs: ek,
                  list: [Vk(kk, "y"), Vk(kk, "x")]
                }), Dk.list
              })(rk)) : null)
            };
          return ik = requestAnimationFrame(bk), () => {
            cancelAnimationFrame(ik), Sk(null), kk.hide()
          }
        }), [ek, kk]), (0, Wk.jsx)(ck, {
          placer: kk,
          className: "PadFocusRing"
        })
      },
      fb = (kk, ek) => {
        kk.style.transform = `translate3d(${ek.x}px, ${ek.y}px, 0)`, kk.classList.toggle("Visible", ek.visible), kk.classList.toggle("Pressed", ek.pressed)
      },
      Sb = () => {
        const kk = (0, Ek.useRef)(null);
        return (0, Ek.useEffect)((() => {
          const ek = Ok.subscribe((ek => {
            kk.current && fb(kk.current, ek)
          }));
          return kk.current && fb(kk.current, Ok.get()), ek
        }), []), (0, Wk.jsx)("div", {
          ref: kk,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, Wk.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      bb = "#ncmp__modal.ncmp__active",
      rb = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(bb) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(bb),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      Pb = "PadOverThirdParty",
      mb = new Set(rb.map((kk => kk.id))),
      Mb = () => {
        const kk = rb.map((kk => {
            let {
              id: ek,
              find: ik,
              startSelectors: Dk
            } = kk;
            return (0, fD.m)({
              id: ek,
              kind: "popup",
              getRoot: () => {
                const kk = ik(),
                  ek = kk ? ((kk, ek) => {
                    var ik;
                    for (const Dk of ek) {
                      const ek = kk.querySelector(Dk);
                      if (ek) return ek
                    }
                    return null !== (ik = [...kk.querySelectorAll("button")].find((kk => !kk.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== ik ? ik : null
                  })(kk, Dk) : null;
                if (kk && ek && !ek.hasAttribute("data-pad-default-focus")) {
                  for (const ek of kk.querySelectorAll("[data-pad-default-focus]")) ek.removeAttribute("data-pad-default-focus");
                  for (const ek of kk.querySelectorAll("[data-pad-hint-bar-avoid]")) ek.removeAttribute("data-pad-hint-bar-avoid");
                  ek.setAttribute("data-pad-default-focus", ""), ((kk, ek) => {
                    let ik = kk;
                    for (let Dk = kk.parentElement; Dk && ek.contains(Dk) && !(Dk.getBoundingClientRect().height >= window.innerHeight / 2); Dk = Dk.parentElement) ik = Dk;
                    return ik
                  })(ek, kk).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return kk
              },
              close: null,
              memoryKey: null
            })
          })),
          ek = document.documentElement,
          ik = bk.f.onFrame((() => {
            const kk = (0, nk.j)() ? xD() : null,
              ik = !!kk && (Dk = kk.layer, mb.has(Dk.id));
            var Dk;
            ek.classList.contains(Pb) !== ik && ek.classList.toggle(Pb, ik)
          }));
        return () => {
          for (const ek of kk) ek();
          ik(), ek.classList.remove(Pb)
        }
      },
      Kb = "PadLargePointer",
      xb = () => {
        (0, Ek.useEffect)((() => {
          const kk = (0, lk.k)(document.body),
            ek = ef.install(),
            ik = ib.install(),
            Dk = Mb();
          return () => {
            kk(), ek(), ik(), Dk()
          }
        }), []);
        const {
          largePointer: kk
        } = (0, xk.n)(), ek = (0, WS.n)() && kk;
        return (0, Ek.useEffect)((() => {
          if (ek) return document.documentElement.classList.add(Kb), () => {
            document.documentElement.classList.remove(Kb)
          }
        }), [ek]), (0, rk.createPortal)((0, Wk.jsxs)(Wk.Fragment, {
          children: [(0, Wk.jsx)(GS, {}), (0, Wk.jsx)(Db, {}), (0, Wk.jsx)(Sb, {})]
        }), document.body)
      };
    var nb = ik(8624),
      Ub = ik(8647),
      Hb = ik(8637);
    ik(8653);
    const wb = (kk, ek) => {
        const [ik, Dk] = (0, Ek.useState)(!1), [fk, Sk] = (0, Ek.useState)(null), bk = (0, Ek.useRef)(null), rk = (0, Ek.useCallback)((kk => {
          bk.current = kk, Sk(kk)
        }), []), Pk = (0, Ek.useCallback)((() => {
          Dk(!1), rk(null)
        }), [rk]), Mk = (0, Ek.useCallback)((() => {
          Dk(!0)
        }), []), Kk = (0, Ek.useCallback)(((kk, ek) => {
          rk((0, Hb.C)(kk, ek, bk.current))
        }), [rk]);
        (0, Ek.useLayoutEffect)((() => (ek(ik), (0, tS.s)(kk, ik), mk.j.tm(tS.k), () => {
          ek(!1), (0, tS.s)(kk, !1), mk.j.tm(tS.k)
        })), [ik, kk, ek]), (0, yf.c)("appManagerUpdated|activeInputDevice", (kk => {
          "gamepad" !== kk && Pk()
        })), (0, yf.c)("appManagerUpdated|gameState", (kk => {
          "inGame" !== kk && Pk()
        }));
        const xk = () => {
          (0, mi.s)() && Pk()
        };
        return (0, yf.c)("appManagerUpdated|openEverythingMenuName", xk), (0, yf.c)("appManagerUpdated|openInGameMenuName", xk), {
          open: ik,
          picked: fk,
          pickedRef: bk,
          show: Mk,
          aim: Kk,
          close: Pk
        }
      },
      lb = kk => {
        let {
          className: ek,
          slotCount: ik,
          picked: Dk,
          slotLabel: fk,
          renderSlot: Sk,
          centre: bk
        } = kk;
        const rk = Array.from({
          length: ik
        }, ((kk, ek) => ek));
        return (0, Wk.jsx)("div", {
          className: ak()("EmoteWheelOverlay PadRadialWheel", ek),
          children: (0, Wk.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * Hb.o + "rem",
              height: 2 * Hb.o + "rem"
            },
            children: [(0, Wk.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${Hb.i} ${Hb.i}`,
              children: [rk.map((kk => (0, Wk.jsx)("path", {
                d: (0, Hb.p)(kk, ik, Hb.d, Hb.f, Hb.g),
                className: ak()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: kk === Dk
                }),
                "aria-label": fk(kk)
              }, kk))), (0, Wk.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: Hb.d,
                cy: Hb.d,
                r: Hb.g
              }), (0, Wk.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: Hb.d,
                cy: Hb.d,
                r: Hb.f
              }), null !== Dk && (0, Wk.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, Hb.p)(Dk, ik, Hb.d, Hb.f, Hb.g)
              })]
            }), rk.map((kk => {
              const ek = (0, Hb.v)(kk, ik);
              return (0, Wk.jsx)("div", {
                className: ak()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: kk === Dk
                }),
                style: {
                  left: `calc(50% + ${Hb.c*Math.cos(ek)}rem)`,
                  top: `calc(50% + ${Hb.c*Math.sin(ek)}rem)`
                },
                "aria-hidden": !0,
                children: Sk(kk)
              }, kk)
            })), (0, Wk.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: bk
            })]
          })
        })
      },
      pb = US.length,
      yb = () => {
        const {
          t: kk
        } = (0, fk.D)(), ek = wb("chat", Ii.n), ik = (0, Ek.useMemo)((() => US.map((ek => kk(ek)))), [kk]);
        return (0, yf.c)(Ii.l, (() => {
          ek.open || (0, nb.f)() || (0, Ub.q)() || "inGame" !== Pk.b.get("gameState") || (0, mi.s)() || !(0, ui.e)() || ek.show()
        })), (0, yf.c)(Ii.f, (kk => {
          ek.open && ek.aim(kk, pb)
        })), (0, yf.c)(Ii.h, (() => {
          var kk;
          if (!ek.open) return;
          const Dk = ek.pickedRef.current;
          null !== Dk ? HS.claim(performance.now()) && (ek.close(), null === (kk = (0, ui.e)()) || void 0 === kk || kk.sendLine(ik[Dk])) : ek.close()
        })), (0, yf.c)(Ii.g, ek.close), ek.open ? (0, Wk.jsx)(lb, {
          className: "QuickChatWheel",
          slotCount: pb,
          picked: ek.picked,
          slotLabel: kk => ik[kk],
          renderSlot: kk => ik[kk],
          centre: null !== ek.picked ? ik[ek.picked] : kk("controller:quickChatPick")
        }) : null
      },
      Yb = () => {
        const {
          t: kk
        } = (0, fk.D)(), ek = wb("actionButton", Ub.s), [ik, Dk] = (0, Ek.useState)([]);
        if ((0, yf.c)(Ub.n, (kk => {
            ek.open || (0, nb.f)() || (0, Ii.b)() || "inGame" !== Pk.b.get("gameState") || (0, mi.s)() || (Dk(kk), ek.show())
          })), (0, yf.c)(Ub.c, (kk => {
            ek.open && ek.aim(kk, ik.length)
          })), (0, yf.c)(Ub.k, (() => {
            if (!ek.open) return;
            const kk = ek.pickedRef.current;
            ek.close(), null !== kk && mk.j.tm(Ub.o, ik[kk])
          })), (0, yf.c)(Ub.g, ek.close), !ek.open) return null;
        const Sk = null !== ek.picked ? ik[ek.picked] : null;
        return (0, Wk.jsx)(lb, {
          className: "ActionWheel",
          slotCount: ik.length,
          picked: ek.picked,
          slotLabel: ek => {
            const Dk = ik[ek];
            return "reload" === Dk.kind ? kk("controller:gameplayReload") : "customButton" === Dk.kind ? Dk.description || Dk.icon : "touchButton" === Dk.kind && "string" === typeof Dk.label ? Dk.label : ""
          },
          renderSlot: kk => (0, Wk.jsx)(Vf, {
            action: ik[kk]
          }),
          centre: Sk ? (0, Wk.jsx)(Vf, {
            action: Sk
          }) : kk("controller:actionWheelPick")
        })
      };
    var Lb = ik(99);
    const Cb = () => ((0, Ek.useEffect)((() => {
        var kk, ek;
        const ik = (0, lk.k)(document.getElementById("root")),
          Dk = (0, nk.g)(),
          fk = (() => {
            const kk = [mk.j.subscribe(ff.c, (() => {
                Pf("blockBreak")
              })), mk.j.subscribe("damagedByOtherPlayer", (() => {
                Pf("damage")
              })), mk.j.subscribe("yourAttackHit", (kk => {
                let {
                  hitSelf: ek
                } = kk;
                ek || Pf("hit")
              }))],
              ek = bk.f.onActivePadChanged((kk => {
                kk && Pf("connect")
              }));
            return () => {
              for (const ek of kk) mk.j.unsubscribe(ek);
              ek()
            }
          })(),
          Sk = (() => {
            const kk = new Uf({
              getVisitId: nf.d,
              peekVisitId: nf.peekVisitSessionId,
              readReportedVisitId: () => {
                const kk = xf.g.getItem(Hf);
                return "string" === typeof kk ? kk : null
              },
              writeReportedVisitId: kk => {
                xf.g.setItem(Hf, kk)
              },
              isPadActive: nk.j,
              getPadFamily: () => {
                var kk, ek;
                return null !== (kk = null === (ek = bk.f.getActivePad()) || void 0 === ek ? void 0 : ek.family) && void 0 !== kk ? kk : null
              },
              canReport: Mf.g,
              getInputType: Kf.d,
              CU: Mf.l
            });
            let ek = 0,
              ik = null;
            const Dk = fk => {
                null === ik && ("notReady" !== kk.check(fk) || null !== ik || ek >= 20 || (ek++, ik = setTimeout((() => {
                  ik = null, Dk(!1)
                }), 3e3)))
              },
              fk = mk.j.subscribe("appManagerUpdated|activeInputDevice", (() => {
                Dk(!0)
              })),
              Sk = (0, nf.k)((() => {
                ek = 0, Dk(!0)
              }));
            return () => {
              mk.j.unsubscribe(fk), Sk(), null !== ik && clearTimeout(ik)
            }
          })(),
          rk = bk.f.onFrame(((kk, ek) => {
            const ik = (0, nk.p)(kk);
            Kk.c.dispatch(kk, ek, ik)
          }));
        let Mk = null !== (kk = null === (ek = bk.f.getActivePad()) || void 0 === ek ? void 0 : ek.family) && void 0 !== kk ? kk : null;
        const Uk = bk.f.onActivePadChanged((kk => {
            var ek, ik;
            (Kk.c.reset(), (0, nk.u)(), mk.j.tm(bk.d, kk), (null !== (ek = null === kk || void 0 === kk ? void 0 : kk.family) && void 0 !== ek ? ek : null) !== Mk) && (Mk = null !== (ik = null === kk || void 0 === kk ? void 0 : kk.family) && void 0 !== ik ? ik : null, mk.j.tm(xk.b, (0, xk.h)()));
            !kk && (0, nk.j)() && (0, nk.y)(Pk.b.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          Hk = () => {
            "visible" !== document.visibilityState && Kk.c.clear()
          },
          wk = () => {
            Kk.c.clear()
          };
        document.addEventListener("visibilitychange", Hk), window.addEventListener("blur", wk), bk.f.start(), (0, mf.i)();
        const pk = null;
        return () => {
          ik(), Dk(), fk(), Sk(), rk(), Uk(), document.removeEventListener("visibilitychange", Hk), window.removeEventListener("blur", wk), bk.f.stop(), null === pk || void 0 === pk || pk()
        }
      }), []), (0, Wk.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, Wk.jsx)(vf, {}), (0, Wk.jsx)(of, {}), (0, Wk.jsx)(Zf, {}), (0, Wk.jsx)(hS, {}), (0, Wk.jsx)(xb, {}), (0, Wk.jsx)(yb, {}), (0, Wk.jsx)(Yb, {})]
      })),
      Ab = () => Lb.featureFlags.useControllerSupport ? (0, Wk.jsx)(Cb, {}) : null;
    var jb = ik(8010),
      sb = ik(8662);
    const db = new Set(mf.h),
      Vb = kk => `${sb.l}${(0,xk.k)()}/${kk}`,
      Fb = kk => {
        if (!(0, sb.h)(kk)) return null;
        const [ek, ik] = kk.slice(sb.l.length).split("/");
        return (0, jb.f)(ek) && db.has(ik) ? (0, mf.g)(ek, ik) : null
      };
    var ub = ik(8665);
    const qb = () => {
        const {
          t: kk
        } = (0, fk.D)(), ek = (0, nk.A)(), {
          gameState: ik,
          isUiHidden: Dk
        } = (0, Pk.n)(["gameState", "isUiHidden"]), {
          hideButtonHints: Sk,
          sneakMode: bk
        } = (0, xk.n)(), [rk, mk] = (0, Ek.useState)(ub.b);
        return (0, yf.c)(Qf.t, mk), ek && !Dk && "inGame" === ik && rk ? (0, Wk.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!Sk && (0, Wk.jsx)(sf, {
            glyph: (0, Mk.i)("toggle" === bk ? "sneak" : "sneakToggle")
          }), (0, Wk.jsx)("span", {
            children: kk("controller:gameplaySneaking")
          })]
        }) : null
      },
      Ib = 12,
      zb = kk => {
        let {
          trigger: ek,
          className: ik,
          children: Dk
        } = kk;
        const fk = (0, Ek.useRef)(null);
        return (0, Ek.useEffect)((() => {
          let kk = 0;
          const ik = Vk(ek, "y"),
            Dk = () => {
              kk = requestAnimationFrame(Dk);
              const Sk = fk.current;
              if (!Sk || null === ek || void 0 === ek || !ek.isConnected) return;
              const {
                left: bk,
                top: rk
              } = function(kk, ek, ik) {
                let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const Sk = kk.left + kk.width / 2,
                  bk = Math.max(Ib, ik.width - Ib - ek.width),
                  rk = Math.min(Math.max(Sk - ek.width / 2, Ib), bk),
                  Pk = ik.height - Dk;
                let mk = 0,
                  Mk = Pk;
                if (fk) {
                  const kk = Math.max(0, fk.top),
                    Dk = Math.min(Pk, fk.bottom);
                  Dk - kk >= Math.max(ik.height / 2, ek.height + 24) && (mk = kk, Mk = Dk)
                }
                const Kk = kk.top + kk.height / 2 < (mk + Mk) / 2 ? Mk - Ib - ek.height : mk + Ib;
                return {
                  left: rk,
                  top: Math.max(Ib, Kk)
                }
              }(ek.getBoundingClientRect(), {
                width: Sk.offsetWidth,
                height: Sk.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(TS)) || 0, null !== ik && void 0 !== ik && ik.isConnected ? ik.getBoundingClientRect() : null);
              Sk.style.transform = `translate3d(${Math.round(bk)}px, ${Math.round(rk)}px, 0)`, Sk.style.visibility = "visible"
            };
          return Dk(), () => {
            cancelAnimationFrame(kk)
          }
        }), [ek]), (0, Wk.jsx)("div", {
          ref: fk,
          className: ik,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: Dk
        })
      };
    var Qb = ik(1033),
      vb = ik(8674),
      Eb = ik(1410),
      hb = ik(8676),
      ab = ik(8680);
    const Wb = {
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
      tb = () => {
        const {
          t: kk
        } = (0, fk.D)(), ek = (0, nk.A)(), ik = (0, vb.e)(), Dk = (0, Xf.e)("_tasks"), Sk = (0, Xf.e)("_availableLeaderboards");
        if (!ek) return null;
        const bk = (kk => {
          let {
            hasShop: ek,
            hasTasksOrLeaderboards: ik,
            canInvite: Dk
          } = kk;
          const fk = [];
          return ek && fk.push("shop"), ik && fk.push("tasks"), Dk && fk.push("invite"), fk.push("leave"), fk
        })({
          hasShop: ik,
          hasTasksOrLeaderboards: !(!Dk && !Sk),
          canInvite: !!Lb.featureFlags.canUseInviteLinks
        });
        return (0, Wk.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: bk.map((ek => {
            const {
              icon: ik,
              labelKey: Dk
            } = Wb[ek], fk = "leave" === ek ? Eb.R : Eb.f;
            return (0, Wk.jsx)(fk, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (kk => {
                  switch (kk) {
                    case "shop":
                      return mk.j.tm(ab.k), void Pk.b.set({
                        openEverythingMenuName: Pi.r.SHOP
                      });
                    case "tasks":
                      return void mk.j.tm("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void mk.j.tm("toggleMenu", "inviteLink");
                    case "leave":
                      (0, hb.e)()
                  }
                })(ek)
              },
              children: (0, Wk.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, Wk.jsx)(Qb.d, {
                  name: ik
                }), (0, Wk.jsx)("span", {
                  children: kk(Dk)
                })]
              })
            }, ek)
          }))
        })
      };
    var Xb = ik(1931);
    const Bb = Uk.A,
      cb = ["forward", "backward", "left", "right", "sprint"],
      Tb = kk => kk.ctrlKey || kk.altKey || "Alt" === kk.key || "ArrowUp" === kk.key || "ArrowDown" === kk.key || "Tab" === kk.code || "/" === kk.key || "Slash" === kk.code;
    class ob {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(Uk.W).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(kk) {
        this.armed = kk
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || ek ? !kk.repeat && this.swallowedKeys.delete(kk.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(kk.code),
          continues: !1
        } : "Escape" === kk.key || kk.repeat && !this.swallowedKeys.has(kk.code) ? {
          swallow: !1,
          continues: !1
        } : ik ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(kk.code), {
          swallow: !0,
          continues: (0, nk.i)(kk)
        })
      }
      onKeyUp(kk) {
        return this.swallowedKeys.delete(kk.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const fk = (0, Uk.q)(kk.values, this.previousHeld),
          Sk = null === ik ? -1 : (0, Uk.l)(ik),
          bk = Sk >= 0 && fk[Sk] && !this.previousHeld[Sk],
          rk = fk.some(((kk, ek) => kk && !this.previousHeld[ek] && ek !== Sk)),
          Pk = Math.hypot(kk.leftStick.x, kk.leftStick.y) >= Bb,
          mk = Math.hypot(kk.rightStick.x, kk.rightStick.y) >= Bb,
          Mk = Pk && !this.leftStickWasPressed || mk && !this.rightStickWasPressed;
        this.previousHeld = fk, this.leftStickWasPressed = Pk, this.rightStickWasPressed = mk;
        let Kk = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, Kk = !0);
        const xk = !ek && bk && !Dk,
          nk = !xk && this.armed && !ek && (rk || Mk);
        return (xk || nk) && (this.consumeNextFrame = !0, this.consumeAfterContinue = nk, Kk = !0), {
          continues: nk,
          back: xk,
          consumeHeld: Kk
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const Zb = new Set([...Xb.l, ...Xb.D]),
      Ob = kk => ((kk, ek, ik) => {
        const Dk = Object.keys(ek).filter((Dk => !ik.has(Dk) && ek[Dk].includes(kk)));
        return Dk.length > 0 && Dk.every((kk => cb.includes(kk)))
      })(kk, Xb.u, Zb),
      gb = (kk, ek, ik) => {
        const Dk = new ob,
          fk = kk => {
            if (!kk.isTrusted) return;
            const {
              swallow: ik,
              continues: fk
            } = Dk.onKeyDown(kk, !(0, nk.H)(kk) || (0, Df.g)() || (0, mi.s)(), Ob(kk.code));
            ik && (kk.stopImmediatePropagation(), Tb(kk) && kk.preventDefault()), fk && ((0, nk.y)("keyboardMouse"), ek())
          },
          Sk = kk => {
            kk.isTrusted && Dk.onKeyUp(kk) && (kk.stopImmediatePropagation(), Tb(kk) && kk.preventDefault())
          },
          rk = () => {
            Dk.forgetKeys()
          };
        window.addEventListener("keydown", fk, !0), window.addEventListener("keyup", Sk, !0), window.addEventListener("blur", rk);
        const Pk = bk.f.onFrame((kk => {
            const fk = Kk.c.getActiveConsumerName(),
              Sk = ik(),
              bk = Sk ? (0, Mk.i)("menuBack") : null,
              rk = null !== fk && "gameplay" !== fk,
              {
                continues: Pk,
                back: mk,
                consumeHeld: Uk
              } = Dk.onPadFrame(kk, rk, bk, (0, nk.l)(kk));
            if (Uk) {
              const kk = (0, xk.h)().swapSticks ? "right" : "left";
              Kk.c.consumeAllHeld(Dk.consumeLeavesMoveStick() ? kk : null)
            }
            mk ? null === Sk || void 0 === Sk || Sk() : Pk && ek()
          })),
          mk = (0, Df.j)(`pressToContinue:${kk}`, (() => Dk.blocksGameplay()));
        return {
          setArmed: kk => {
            Dk.setArmed(kk)
          },
          dispose: () => {
            window.removeEventListener("keydown", fk, !0), window.removeEventListener("keyup", Sk, !0), window.removeEventListener("blur", rk), Pk(), mk()
          }
        }
      };
    var Gb = ik(4926),
      Nb = ik(3401),
      Rb = ik(3098),
      Jb = ik(8014);
    const kr = kk => {
        let {
          text: ek
        } = kk;
        return (0, Wk.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: ek
        })
      },
      er = kk => {
        let {
          label: ek,
          hint: ik,
          options: Dk,
          value: Sk,
          onChange: bk
        } = kk;
        const {
          t: rk
        } = (0, fk.D)();
        return (0, Wk.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, Wk.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, Wk.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, Wk.jsx)("div", {
                className: "SliderText",
                children: ek
              }), ik && (0, Wk.jsx)("div", {
                className: "ControllerSettingsHint",
                children: ik
              })]
            }), (0, Wk.jsx)(Rb.e, {
              options: Dk.map((kk => ({
                label: "label" in kk ? kk.label : rk(kk.labelKey),
                value: kk.value
              }))),
              value: Sk,
              onChange: kk => {
                bk(kk.value)
              }
            })]
          })
        })
      },
      ir = kk => {
        let {
          settingKey: ek,
          label: ik,
          range: Dk,
          format: fk
        } = kk;
        const Sk = (0, xk.n)();
        return (0, Wk.jsx)(Gb.m, {
          name: ik,
          min: Dk.min,
          max: Dk.max,
          step: Dk.step,
          padStep: Dk.step,
          initValue: Sk[ek],
          format: fk,
          onChange: kk => {
            (0, xk.l)({
              [ek]: (0, Jb.t)(kk, Dk)
            })
          }
        })
      };
    var Dr = ik(8683),
      fr = ik(8691);
    const Sr = kk => kk instanceof DOMException && ("SecurityError" === kk.name || "NotAllowedError" === kk.name),
      br = kk => {
        const [ek] = [...kk.controllers].sort(((kk, ek) => fr.t[kk] - fr.t[ek]));
        return fr.q[ek]
      },
      rr = kk => {
        (0, Dr.c)().allowPhoneMotion().catch((ek => {
          kk && Sr(ek) ? kk() : console.warn("Could not enable the motion sensor", ek)
        }))
      },
      Pr = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      mr = kk => {
        let {
          status: ek
        } = kk;
        const {
          t: ik
        } = (0, fk.D)(), [Dk, Sk] = (0, Ek.useState)(null), bk = `${ek.controllers.join(",")}|${ek.phoneMotion}`;
        (0, Ek.useEffect)((() => {
          Sk(null)
        }), [bk]);
        const rk = () => {
          (0, Dr.c)().connectController().then((kk => {
            Sk(kk > 0 ? "openFailed" : null)
          })).catch((kk => {
            Sr(kk) ? Sk("needsClick") : console.warn("Could not connect motion controller", kk)
          }))
        };
        if (ek.hidSupported) {
          let kk = ik("controller:settingsGyroConnectHint");
          return "needsClick" === Dk ? kk = ik("controller:settingsGyroConnectNeedsClick") : "openFailed" === Dk ? kk = ik("controller:settingsGyroOpenFailed") : ek.controllers.length > 0 && (kk = ik("controller:settingsGyroConnected", {
            name: br(ek)
          })), (0, Wk.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, Wk.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, Wk.jsx)("div", {
                className: "ControllerSettingsHint",
                children: kk
              }), (0, Wk.jsx)(Eb.f, {
                onClick: rk,
                children: ik("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === ek.phoneMotion) return (0, Wk.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, Wk.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === Dk && (0, Wk.jsx)("div", {
              className: "ControllerSettingsHint",
              children: ik("controller:settingsGyroAllowNeedsTap")
            }), (0, Wk.jsx)(Eb.f, {
              onClick: () => {
                rr((() => {
                  Sk("needsTap")
                }))
              },
              children: ik("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const Pk = Pr[ek.phoneMotion];
        return Pk ? (0, Wk.jsx)("div", {
          className: "ControllerSettingsHint",
          children: ik(Pk)
        }) : null
      },
      Mr = () => {
        const {
          t: kk
        } = (0, fk.D)(), ek = (0, xk.n)(), ik = (0, Dr.g)(), Dk = (0, nk.D)(), Sk = !ik.hidSupported && ik.phoneSupported && !ik.padConnected, bk = (ik.hidSupported || ik.phoneSupported) && !Sk, rk = (0, Mk.i)("pause");
        return (0, Wk.jsxs)(Wk.Fragment, {
          children: [(0, Wk.jsx)(kr, {
            text: kk("controller:settingsGyro")
          }), Sk && (0, Wk.jsx)("div", {
            className: "ControllerSettingsHint",
            children: kk("controller:settingsGyroPhoneNeedsController")
          }), !bk && !Sk && (0, Wk.jsx)("div", {
            className: "ControllerSettingsHint",
            children: kk(ik.hidBlocked || ik.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), bk && (0, Wk.jsx)(Gb.e, {
            label: kk(ik.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: ek.gyroAiming,
            onClick: kk => {
              var ek, ik;
              (0, xk.l)({
                gyroAiming: kk
              });
              const Dk = null === (ek = null === (ik = navigator.userActivation) || void 0 === ik ? void 0 : ik.isActive) || void 0 === ek || ek;
              if (!kk || !Dk) return;
              const fk = (0, Dr.c)(),
                Sk = fk.getStatus();
              Sk.hidSupported ? fk.connectControllerIfNoneGranted().catch((kk => {
                console.warn("Motion controller picker unavailable", kk)
              })) : "needsPermission" === Sk.phoneMotion && rr()
            },
            circleInfoText: kk(ik.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), bk && ik.hidSupported && (0, Wk.jsx)("div", {
            className: "ControllerSettingsHint",
            children: kk("controller:settingsGyroSteamHint")
          }), bk && ek.gyroAiming && (0, Wk.jsxs)(Wk.Fragment, {
            children: [(0, Wk.jsx)(mr, {
              status: ik
            }), (0, Wk.jsx)(ir, {
              settingKey: "gyroSensitivity",
              label: kk("controller:settingsGyroSensitivity"),
              range: Jb.K,
              format: Jb.A
            }), (0, Wk.jsx)(er, {
              label: kk("controller:settingsGyroActivation"),
              hint: "aiming" === ek.gyroActivation && (0, Wk.jsx)(Nb.d, {
                text: kk("controller:settingsGyroAimingHint", {
                  button: Nb.e
                }),
                glyph: (0, Mk.i)("use")
              }),
              options: Jb.H,
              value: ek.gyroActivation,
              onChange: kk => {
                (0, xk.l)({
                  gyroActivation: kk
                })
              }
            }), "button" === ek.gyroActivation && (0, Wk.jsx)(er, {
              label: kk("controller:settingsGyroButton"),
              hint: kk("controller:settingsGyroButtonHint"),
              options: Jb.p.filter((kk => kk !== rk || kk === ek.gyroButton)).map((kk => ({
                label: jf(Dk, kk),
                value: kk
              }))),
              value: ek.gyroButton,
              onChange: kk => {
                (0, xk.l)({
                  gyroButton: kk
                })
              }
            })]
          })]
        })
      };
    var Kr = ik(1817);
    const xr = () => {
      const {
        t: kk
      } = (0, fk.D)(), ek = (0, xk.n)(), ik = (0, nk.D)();
      return (0, Wk.jsxs)(Wk.Fragment, {
        children: [(0, Wk.jsx)(kr, {
          text: kk("controller:settingsAccessibility")
        }), (0, Wk.jsx)(Gb.e, {
          label: kk("controller:settingsSwapConfirmBack"),
          checked: (0, Mk.E)(ek.swapConfirmBack, ik),
          onClick: kk => {
            (0, xk.l)({
              swapConfirmBack: kk === (0, Mk.E)(null, ik) ? null : kk
            }), Kr.e.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: kk("controller:settingsSwapConfirmBackInfo")
        }), (0, Wk.jsx)(er, {
          label: kk("controller:settingsButtonRepeat"),
          hint: kk("controller:settingsButtonRepeatHint"),
          options: Jb.n,
          value: ek.buttonRepeat,
          onChange: kk => {
            (0, xk.l)({
              buttonRepeat: kk
            })
          }
        }), (0, Wk.jsx)(er, {
          label: kk("controller:settingsTapHoldTime"),
          hint: kk("controller:settingsTapHoldTimeHint"),
          options: Jb.ob,
          value: ek.tapHoldTime,
          onChange: kk => {
            (0, xk.l)({
              tapHoldTime: kk
            })
          }
        }), (0, Wk.jsx)(er, {
          label: kk("controller:settingsEmoteButton"),
          hint: kk("wheel" === ek.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: Jb.y,
          value: ek.emoteButton,
          onChange: kk => {
            (0, xk.l)({
              emoteButton: kk
            })
          }
        }), (0, Wk.jsx)(er, {
          label: kk("controller:settingsAttackMode"),
          hint: kk("toggle" === ek.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: Jb.l,
          value: ek.attackMode,
          onChange: kk => {
            (0, xk.l)({
              attackMode: kk
            })
          }
        }), (0, Wk.jsx)(Gb.e, {
          label: kk("controller:settingsLargePointer"),
          checked: ek.largePointer,
          onClick: kk => {
            (0, xk.l)({
              largePointer: kk
            })
          },
          circleInfoText: kk("controller:settingsLargePointerInfo")
        })]
      })
    };
    var nr = ik(8694);
    const Ur = new class {
        constructor(kk) {
          this.router = kk, this.current = null
        }
        claim(kk, ek) {
          const ik = this.current;
          ik && (this.current = null, ik.release(), ik.onTakenOver());
          const Dk = this.router.register({
              ...kk,
              name: "capture"
            }),
            fk = {
              release: Dk,
              onTakenOver: ek
            };
          return this.current = fk, () => {
            this.current === fk && (this.current = null), Dk()
          }
        }
      }(Kk.c),
      Hr = kk => {
        (0, Ek.useEffect)((() => {
          if (!kk) return;
          const ek = kk();
          let ik = !1;
          const Dk = () => {
              ik || (ik = !0, ek.onEnd())
            },
            fk = Ur.claim({
              isActive: () => !ik,
              onFrame: kk => {
                ek.onFrame(kk, Dk)
              }
            }, Dk),
            Sk = void 0 === ek.timeoutMs ? void 0 : window.setTimeout(Dk, ek.timeoutMs),
            bk = kk => {
              "Escape" === kk.key && (kk.preventDefault(), kk.stopPropagation(), Dk())
            };
          return window.addEventListener("keydown", bk, !0), () => {
            ik = !0, fk(), window.clearTimeout(Sk), window.removeEventListener("keydown", bk, !0)
          }
        }), [kk])
      },
      wr = kk => {
        let {
          row: ek,
          capturing: ik,
          onCapture: Dk,
          holdFillRef: Sk,
          onRebind: bk,
          swapped: rk
        } = kk;
        const {
          t: Pk
        } = (0, fk.D)();
        if ("fixed" === ek.kind) return (0, Wk.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, Wk.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, Wk.jsx)("div", {
              className: "ControlName",
              children: Pk(ek.labelKey)
            }), (0, Wk.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, Wk.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, Wk.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, Wk.jsx)(sf, {
                    glyph: "move" === ek.stick ? (0, Mk.s)() : (0, Mk.p)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: mk
        } = ek, Kk = (0, Mk.i)(mk), xk = (0, Mk.l)(mk), nk = Kk !== xk && (0, Mk.d)(mk, xk);
        return (0, Wk.jsxs)("div", {
          className: ak()("ControlRow PadControlRow", {
            Capturing: ik
          }),
          children: [(0, Wk.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, Wk.jsx)("div", {
              className: "ControlName",
              children: Pk(Jb.g[mk])
            }), (0, Wk.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!ik && (0, Wk.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, Wk.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Dk(mk)
                  },
                  children: (0, Wk.jsx)(sf, {
                    glyph: Kk
                  })
                }), nk && (0, Wk.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: Pk("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    bk(mk, xk)
                  },
                  children: (0, Wk.jsx)(Qb.d, {
                    name: "arrows-rotate"
                  })
                })]
              }), ik && (0, Wk.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, Wk.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, Wk.jsx)("span", {
                    children: Pk("controller:settingsCapturePrompt")
                  }), (0, Wk.jsx)("div", {
                    ref: Sk,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, Wk.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Dk(null)
                  },
                  children: "\xd7"
                })]
              }), ik && (0, Wk.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, Wk.jsx)(Nb.d, {
                  text: Pk((0, Mk.d)(mk, (0, Mk.i)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: Nb.e
                  }),
                  glyph: (0, Mk.i)("menuBack")
                })
              })]
            })]
          }), rk.map((kk => (0, Wk.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, Wk.jsx)(Nb.d, {
              text: Pk("controller:settingsSwapNotice", {
                action: Pk(Jb.g[kk]),
                button: Nb.e
              }),
              glyph: (0, Mk.i)(kk)
            })
          }, kk))), ik && (0, Wk.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${Jb.r}ms`
            }
          })]
        })
      },
      lr = [],
      pr = kk => {
        let {
          layoutSetting: ek
        } = kk;
        const {
          t: ik
        } = (0, fk.D)(), Dk = (0, xk.n)();
        (0, nk.D)();
        const Sk = (0, Ek.useRef)(null),
          [bk, rk] = (0, Ek.useState)(null),
          Pk = (0, Ek.useCallback)(((kk, ek) => {
            const ik = (0, xk.h)().bindings;
            (0, Mk.A)(kk, ek);
            const Dk = (0, Mk.u)(ik, kk);
            rk(Dk.length > 0 ? {
              action: kk,
              swapped: Dk
            } : null)
          }), []),
          [mk, Hk] = ((kk, ek) => {
            const [ik, Dk] = (0, Ek.useState)(null), fk = (0, Ek.useMemo)((() => ik ? () => {
              const fk = (0, Mk.i)("menuBack"),
                Sk = new Jb.b(fk, (0, Mk.i)("menuConfirm"), (kk => (0, Mk.d)(ik, kk)));
              return {
                onFrame: (Dk, bk) => {
                  var rk;
                  const Pk = Dk.frame.timestampMs,
                    mk = Sk.update({
                      ...Dk,
                      isDown: kk => (0, Uk.J)(Dk.frame.values, kk)
                    }, Pk);
                  null === (rk = kk.current) || void 0 === rk || rk.style.setProperty("width", 100 * Sk.getBindHoldProgress(Pk) + "%"), mk && ("bind" === mk.kind ? (Kk.c.consumeButton(mk.button), ek(ik, mk.button)) : Kk.c.consumeButton(fk), bk())
                },
                onEnd: () => {
                  Dk(null)
                },
                timeoutMs: Jb.r
              }
            } : null), [ik, kk, ek]);
            return Hr(fk), [ik, Dk]
          })(Sk, Pk),
          wk = kk => {
            kk && rk(null), Hk(kk)
          };
        (0, Ek.useEffect)((() => {
          if (!bk) return;
          const kk = window.setTimeout((() => {
            rk(null)
          }), Jb.lb);
          return () => {
            window.clearTimeout(kk)
          }
        }), [bk]);
        const lk = !Dk.swapSticks && 0 === Object.keys(Dk.bindings).length;
        return (0, Wk.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, Wk.jsx)("div", {
            className: "SliderText",
            children: ik("controller:settingsRemap")
          }), (0, Wk.jsx)("div", {
            className: "ControllerSettingsHint",
            children: ik("controller:settingsRemapHint")
          }), (0, Wk.jsx)(Eb.R, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: lk,
            onClick: () => {
              wk(null), rk(null), (0, Mk.C)()
            },
            children: ik("controller:settingsResetAll")
          }), ek, Jb.cb.map(((kk, ek) => (0, Wk.jsx)(nr.c, {
            title: ik(kk.titleKey),
            defaultOpen: 0 === ek,
            children: kk.rows.map((kk => (0, Wk.jsx)(wr, {
              row: kk,
              capturing: "action" === kk.kind && kk.action === mk,
              onCapture: wk,
              holdFillRef: Sk,
              onRebind: Pk,
              swapped: "action" === kk.kind && (null === bk || void 0 === bk ? void 0 : bk.action) === kk.action ? bk.swapped : lr
            }, "action" === kk.kind ? kk.action : kk.labelKey)))
          }, kk.titleKey)))]
        })
      },
      yr = kk => {
        let {
          deadzone: ek,
          dotRef: ik,
          labelKey: Dk
        } = kk;
        const {
          t: Sk
        } = (0, fk.D)();
        return (0, Wk.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, Wk.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, Wk.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * ek + "%",
                height: 100 * ek + "%"
              }
            }), (0, Wk.jsx)("div", {
              ref: ik,
              className: "ControllerTesterDot"
            })]
          }), (0, Wk.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: Sk(Dk)
          })]
        })
      },
      Yr = (kk, ek, ik, Dk) => {
        var fk;
        kk && (kk.style.left = 50 + 50 * Math.max(-1, Math.min(1, ek.x)) + "%", kk.style.top = 50 + 50 * Math.max(-1, Math.min(1, ek.y)) + "%", null === (fk = kk.parentElement) || void 0 === fk || fk.classList.toggle("Active", Dk || Math.hypot(ek.x, ek.y) > ik))
      },
      Lr = kk => {
        const ek = {
            deadzone: kk.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          ik = {
            deadzone: kk.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return kk.swapSticks ? {
          left: ik,
          right: ek
        } : {
          left: ek,
          right: ik
        }
      },
      Cr = () => {
        const {
          t: kk
        } = (0, fk.D)(), ek = (() => {
          const [kk, ek] = (0, Ek.useState)((() => bk.f.getActivePad()));
          return (0, yf.c)(bk.d, (() => {
            ek(bk.f.getActivePad())
          })), kk
        })(), ik = Lr((0, xk.n)()), Dk = (0, Ek.useRef)(null), Sk = (0, Ek.useRef)(null), rk = (0, Ek.useRef)([]), Pk = (0, Ek.useRef)(null), mk = (0, Ek.useRef)(null), [nk, Hk] = (kk => {
          const [ek, ik] = (0, Ek.useState)(!1), Dk = (0, Ek.useMemo)((() => ek ? () => {
            const ek = (0, Mk.i)("menuBack"),
              Dk = new Jb.d;
            return {
              onFrame: (ik, fk) => {
                var Sk;
                const bk = Dk.update({
                  pressed: ik.wasPressed(ek),
                  XM: ik.isHeld(ek)
                }, ik.frame.timestampMs);
                null === (Sk = kk.current) || void 0 === Sk || Sk.style.setProperty("width", 100 * bk + "%"), bk >= 1 && (Kk.c.consumeButton(ek), fk())
              },
              onEnd: () => {
                ik(!1)
              }
            }
          } : null), [ek, kk]);
          return Hr(Dk), [ek, ik]
        })(Sk);
        (0, Ek.useEffect)((() => {
          const kk = kk => {
            for (const ik of Uk.X) {
              const ek = (0, Uk.l)(ik),
                Dk = rk.current[ek];
              if (!Dk) continue;
              const fk = kk.values[ek];
              Dk.classList.toggle("Pressed", fk >= Uk.A), (0, Uk.K)(ek) && Dk.style.setProperty("--trigger-fill", `${Math.round(100*fk)}%`)
            }
            const ek = Lr((0, xk.h)());
            Yr(Pk.current, kk.leftStick, ek.left.deadzone, kk.values[(0, Uk.l)("LS")] >= Uk.A), Yr(mk.current, kk.rightStick, ek.right.deadzone, kk.values[(0, Uk.l)("RS")] >= Uk.A)
          };
          return ek || kk((0, Uk.x)()), bk.f.onFrame(kk)
        }), [ek]), (0, Ek.useEffect)((() => {
          ek || Hk(!1)
        }), [ek, Hk]), (0, Ek.useEffect)((() => {
          var kk;
          nk && (null === (kk = Dk.current) || void 0 === kk || kk.scrollIntoView({
            block: "nearest"
          }))
        }), [nk]);
        const wk = Jb._.find((kk => kk.value === (null === ek || void 0 === ek ? void 0 : ek.family)));
        return (0, Wk.jsxs)("div", {
          ref: Dk,
          className: ak()("SettingBox ControllerTester", {
            Testing: nk
          }),
          children: [(0, Wk.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, Wk.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [ek && (0, Wk.jsx)("div", {
                children: kk("controller:settingsTesterFamily", {
                  family: wk ? kk(wk.labelKey) : ek.family
                })
              }), ek && (0, Wk.jsx)("div", {
                className: "ControllerTesterPadId",
                children: ek.id
              }), !ek && (0, Wk.jsx)("div", {
                children: kk("controller:settingsTesterNoPad")
              })]
            }), (ek || nk) && (0, Wk.jsx)(Eb.f, {
              className: "ControllerTesterToggle",
              onClick: () => {
                Hk(!nk)
              },
              children: kk(nk ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), ek && !nk && (0, Wk.jsx)("div", {
            className: "ControllerSettingsHint",
            children: kk("controller:settingsTesterHint")
          }), nk && (0, Wk.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, Wk.jsx)(Nb.d, {
              text: kk("controller:settingsTesterTesting", {
                button: Nb.e
              }),
              glyph: (0, Mk.i)("menuBack")
            }), (0, Wk.jsx)("div", {
              ref: Sk,
              className: "ControllerTesterExitFill"
            })]
          }), (0, Wk.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, Wk.jsx)(yr, {
              deadzone: ik.left.deadzone,
              dotRef: Pk,
              labelKey: ik.left.labelKey
            }), (0, Wk.jsx)("div", {
              className: "ControllerTesterButtons",
              children: Uk.X.map((kk => {
                const ik = (0, Uk.l)(kk);
                return (0, Wk.jsx)("div", {
                  ref: kk => {
                    rk.current[ik] = kk
                  },
                  className: (0, Uk.K)(ik) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, Wk.jsx)(sf, {
                    glyph: kk,
                    family: null === ek || void 0 === ek ? void 0 : ek.family
                  })
                }, kk)
              }))
            }), (0, Wk.jsx)(yr, {
              deadzone: ik.right.deadzone,
              dotRef: mk,
              labelKey: ik.right.labelKey
            })]
          })]
        })
      },
      Ar = (0, Ek.memo)((function() {
        const {
          t: kk
        } = (0, fk.D)(), ek = (0, xk.n)(), [ik, Dk] = (0, Ek.useState)(!1);
        return (0, Ek.useEffect)((() => {
          if (!ik) return;
          const kk = window.setTimeout((() => {
            Dk(!1)
          }), Jb.lb);
          return () => {
            window.clearTimeout(kk)
          }
        }), [ik]), (0, Wk.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, Wk.jsx)(kr, {
            text: kk("controller:settingsLook")
          }), (0, Wk.jsx)(ir, {
            settingKey: "lookSensitivityX",
            label: kk("controller:settingsLookSensitivityX"),
            range: Jb.gb,
            format: Jb.E
          }), (0, Wk.jsx)(ir, {
            settingKey: "lookSensitivityY",
            label: kk("controller:settingsLookSensitivityY"),
            range: Jb.gb,
            format: Jb.E
          }), (0, Wk.jsx)(ir, {
            settingKey: "aimLookSensitivity",
            label: kk("controller:settingsAimLookSensitivity"),
            range: Jb.k,
            format: Jb.E
          }), (0, Wk.jsx)(er, {
            label: kk("controller:settingsLookCurve"),
            hint: kk("controller:settingsLookCurveHint"),
            options: Jb.W,
            value: ek.lookCurve,
            onChange: kk => {
              (0, xk.l)({
                lookCurve: kk
              })
            }
          }), (0, Wk.jsx)(Gb.e, {
            label: kk("controller:settingsInvertLookX"),
            checked: ek.invertLookX,
            onClick: kk => {
              (0, xk.l)({
                invertLookX: kk
              })
            }
          }), (0, Wk.jsx)(Gb.e, {
            label: kk("controller:settingsInvertLookY"),
            checked: ek.invertLookY,
            onClick: kk => {
              (0, xk.l)({
                invertLookY: kk
              })
            }
          }), (0, Wk.jsx)(ir, {
            settingKey: "lookDeadzone",
            label: kk("controller:settingsLookDeadzone"),
            range: Jb.v,
            format: Jb.z
          }), (0, Wk.jsx)(Mr, {}), (0, Wk.jsx)(kr, {
            text: kk("controller:settingsMovement")
          }), (0, Wk.jsx)(ir, {
            settingKey: "moveDeadzone",
            label: kk("controller:settingsMoveDeadzone"),
            range: Jb.v,
            format: Jb.z
          }), (0, Wk.jsx)(Gb.e, {
            label: kk("controller:settingsAutoSprint"),
            checked: ek.autoSprint,
            onClick: kk => {
              (0, xk.l)({
                autoSprint: kk
              })
            },
            circleInfoText: kk("controller:settingsAutoSprintInfo")
          }), (0, Wk.jsx)(er, {
            label: kk("controller:settingsSneak"),
            options: Jb.kb,
            value: ek.sneakMode,
            onChange: kk => {
              (0, xk.l)({
                sneakMode: kk
              })
            }
          }), (0, Wk.jsx)(kr, {
            text: kk("controller:settingsButtons")
          }), (0, Wk.jsx)(er, {
            label: kk("controller:settingsPromptFamily"),
            options: Jb._,
            value: ek.promptFamily,
            onChange: kk => {
              (0, xk.l)({
                promptFamily: kk
              })
            }
          }), (0, Wk.jsx)(Gb.e, {
            label: kk("controller:settingsHideButtonHints"),
            checked: ek.hideButtonHints,
            onClick: kk => {
              (0, xk.l)({
                hideButtonHints: kk
              })
            }
          }), (0, Wk.jsx)(Gb.e, {
            label: kk("controller:settingsVibration"),
            checked: ek.vibration,
            onClick: kk => {
              (0, xk.l)({
                vibration: kk
              }), kk && Pf("preview")
            }
          }), (0, Wk.jsx)(ir, {
            settingKey: "cursorSpeed",
            label: kk("controller:settingsCursorSpeed"),
            range: Jb.u,
            format: Jb.E
          }), (0, Wk.jsx)(Gb.e, {
            label: kk("controller:settingsCursorMagnetism"),
            checked: ek.cursorMagnetism,
            onClick: kk => {
              (0, xk.l)({
                cursorMagnetism: kk
              })
            }
          }), (0, Wk.jsx)(Gb.e, {
            label: kk("controller:settingsMenuBackToCategories"),
            checked: ek.menuBackToCategories,
            onClick: kk => {
              (0, xk.l)({
                menuBackToCategories: kk
              })
            }
          }), (0, Wk.jsx)(pr, {
            layoutSetting: (0, Wk.jsxs)(Wk.Fragment, {
              children: [Mk.f.map((ik => (0, Wk.jsx)(Gb.e, {
                label: kk(Jb.Q[ik]),
                checked: (0, Mk.y)(ik, ek),
                onClick: kk => {
                  Dk(!(0, Mk.G)(ik, kk))
                }
              }, ik))), ik && (0, Wk.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: kk("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, Wk.jsx)(xr, {}), (0, Wk.jsx)(kr, {
            text: kk("controller:settingsAlternatives")
          }), (0, Wk.jsx)("div", {
            className: "ControllerSettingsHint",
            children: kk("controller:settingsAlternativesHint")
          }), (0, Wk.jsx)(er, {
            label: kk("controller:settingsMenuNavigation"),
            hint: kk("controller:settingsMenuNavigationHint"),
            options: Jb.Y,
            value: ek.menuNavigation,
            onChange: kk => {
              (0, xk.l)({
                menuNavigation: kk
              })
            }
          }), (0, Wk.jsx)(er, {
            label: kk("controller:settingsInventoryNavigation"),
            hint: kk("controller:settingsInventoryNavigationHint"),
            options: Jb.M,
            value: ek.inventoryNavigation,
            onChange: kk => {
              (0, xk.l)({
                inventoryNavigation: kk
              })
            }
          }), (0, Wk.jsx)(er, {
            label: kk("controller:settingsQuickChat"),
            hint: kk("controller:settingsQuickChatHint"),
            options: Jb.ab,
            value: ek.quickChat,
            onChange: kk => {
              (0, xk.l)({
                quickChat: kk
              })
            }
          }), (0, Wk.jsx)(er, {
            label: kk("controller:settingsLeaderboardButton"),
            hint: kk("controller:settingsLeaderboardButtonHint"),
            options: Jb.T,
            value: ek.leaderboardButton,
            onChange: kk => {
              (0, xk.l)({
                leaderboardButton: kk
              })
            }
          }), (0, Wk.jsx)(kr, {
            text: kk("controller:settingsTester")
          }), (0, Wk.jsx)(Cr, {})]
        })
      }));
    (0, fk.e)(Dk);
    for (const Fr of (0, Sk.r)()) Fr.connected ? bk.f.handleConnectionEvent(Fr) : bk.f.handleDisconnectionEvent(Fr);
    const jr = () => null !== bk.f.getActivePad(),
      sr = () => Si.getState(),
      dr = () => Si.isSteppingSlots(),
      Vr = (kk, ek) => {
        const ik = ef.getFocused();
        ef.isActive() && ik && kk.contains(ik) && ef.setFocus(ek, {
          scroll: !1
        })
      }
  },
  7991: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Pk,
      e: () => mk
    });
    var Dk = ik(1390),
      fk = ik(1385);
    const Sk = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      bk = "28de",
      rk = new Set(["1205"]),
      Pk = (kk, ek) => {
        const ik = (0, Dk.d)(kk);
        if ((null === ik || void 0 === ik ? void 0 : ik.vendor) === bk) return rk.has(ik.product) ? "steamdeck" : "xbox";
        if (ik && Sk[ik.vendor]) return Sk[ik.vendor];
        if ((0, fk.c)(kk)) return "nintendo";
        const Pk = `${kk} ${null!==ek&&void 0!==ek?ek:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(Pk) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(Pk) ? "nintendo" : /steam deck/.test(Pk) ? "steamdeck" : "xbox"
      },
      mk = kk => {
        var ek;
        return (null === (ek = (0, Dk.d)(kk)) || void 0 === ek ? void 0 : ek.vendor) === bk
      }
  },
  8024: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => mk,
      d: () => rk
    });
    var Dk = ik(7984);
    const fk = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      Sk = new Set(["capture", "gameplay"]),
      bk = ["Up", "Down", "Left", "Right"],
      rk = kk => bk.includes(kk),
      Pk = .25;
    const mk = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.XM = new Array(Dk.W).fill(!1), this.previousHeld = new Array(Dk.W).fill(!1), this.consumedButtons = new Array(Dk.W).fill(!1), this.suppressedReleases = new Array(Dk.W).fill(!1), this.wakeOwned = new Array(Dk.W).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, Dk.x)()
      }
      register(kk) {
        return this.consumers.has(kk.name) && console.warn(`Controller consumer "${kk.name}" registered twice; the newer one replaces it.`), this.consumers.set(kk.name, kk), () => {
          var ek;
          this.consumers.get(kk.name) === kk && (this.activeName === kk.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (ek = this.peek) || void 0 === ek ? void 0 : ek.over) === kk.name && (this.peek = null), this.consumers.delete(kk.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(kk) {
        return this.XM[(0, Dk.l)(kk)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.XM = new Array(Dk.W).fill(!1), this.previousHeld = new Array(Dk.W).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, Dk.x)()
      }
      dispatch(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = kk, this.previousHeld = this.XM, this.XM = (0, Dk.q)(kk.values, this.previousHeld);
        for (let Sk = 0; Sk < Dk.W; Sk++) this.suppressedReleases[Sk] = !this.XM[Sk] && this.consumedButtons[Sk], this.XM[Sk] || (this.consumedButtons[Sk] = !1), this.wakeOwned[Sk] && (this.XM[Sk] ? (this.consumedButtons[Sk] = !0, this.wakeOwned[Sk] = !1) : kk.values[Sk] < Dk.T && (this.wakeOwned[Sk] = !1));
        Math.hypot(kk.leftStick.x, kk.leftStick.y) < Pk && (this.leftStickConsumed = !1), Math.hypot(kk.rightStick.x, kk.rightStick.y) < Pk && (this.rightStickConsumed = !1);
        const fk = this.pickActive();
        if ((null === fk || void 0 === fk ? void 0 : fk.name) !== this.activeName) {
          var bk, rk, mk, Mk, Kk, xk;
          const kk = this.activeName,
            ek = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            ik = null !== (bk = null === fk || void 0 === fk || null === (rk = fk.peek) || void 0 === rk ? void 0 : rk.call(fk)) && void 0 !== bk ? bk : null,
            Sk = null === kk && !!ik && !(null === (mk = this.consumers.get(ik.over)) || void 0 === mk || !mk.onPeekFrame),
            Pk = ik && (ik.over === kk || Sk) ? ik : null,
            nk = null !== this.peek && this.peek.over === (null === fk || void 0 === fk ? void 0 : fk.name) ? this.peek : null;
          this.deactivateCurrent(null !== Pk, null !== nk), this.activeName = null !== (Mk = null === fk || void 0 === fk ? void 0 : fk.name) && void 0 !== Mk ? Mk : null, null === kk || this.handOffPending || this.consumeAllHeld();
          const Uk = null === (Kk = null !== Pk && void 0 !== Pk ? Pk : nk) || void 0 === Kk ? void 0 : Kk.stick;
          "left" === Uk && ek.left ? this.leftStickConsumed = !1 : "right" === Uk && ek.right && (this.rightStickConsumed = !1), this.peek = Pk, fk || null === kk ? fk && (null === (xk = this.idleResume) || void 0 === xk ? void 0 : xk.name) === fk.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: kk,
            left: ek.left && this.leftStickConsumed,
            right: ek.right && this.rightStickConsumed
          }, fk && (this.idleResume = null);
          for (let fk = 0; fk < Dk.W; fk++) this.previousHeld[fk] && !this.XM[fk] && (this.suppressedReleases[fk] = !0)
        }
        var nk, Uk;
        (this.handOffPending = !1, fk) && (ik && !Sk.has(fk.name) && this.consumeWakePress(fk), fk.onFrame(this.buildInput(kk, ek, ik)), this.peek && (null === (nk = this.consumers.get(this.peek.over)) || void 0 === nk || null === (Uk = nk.onPeekFrame) || void 0 === Uk || Uk.call(nk, this.buildInput(kk, ek, !1, this.peek.stick))))
      }
      consumeWakePress(kk) {
        for (let fk = 0; fk < Dk.W; fk++) {
          var ek, ik;
          const Sk = Dk.X[fk];
          (null !== (ek = null === (ik = kk.wakePressActs) || void 0 === ik ? void 0 : ik.call(kk, Sk)) && void 0 !== ek ? ek : bk.includes(Sk)) || (this.XM[fk] ? this.consumedButtons[fk] = !0 : this.lastFrame.values[fk] >= Dk.S && (this.wakeOwned[fk] = !0))
        }
      }
      pickActive() {
        for (const kk of fk) {
          const ek = this.consumers.get(kk);
          if (ek && ek.isActive()) return ek
        }
        return null
      }
      deactivateCurrent() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var ik, Dk, fk, Sk;
        this.activeName && (null === (ik = this.consumers.get(this.activeName)) || void 0 === ik || null === (Dk = ik.onDeactivate) || void 0 === Dk || Dk.call(ik, kk));
        this.peek && !ek && (null === (fk = this.consumers.get(this.peek.over)) || void 0 === fk || null === (Sk = fk.onDeactivate) || void 0 === Sk || Sk.call(fk, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let fk = 0; fk < Dk.W; fk++) this.XM[fk] && (this.consumedButtons[fk] = !0);
        const {
          leftStick: ek,
          rightStick: ik
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== kk && (this.leftStickConsumed || Math.hypot(ek.x, ek.y) >= Pk), this.rightStickConsumed = "right" !== kk && (this.rightStickConsumed || Math.hypot(ik.x, ik.y) >= Pk)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(kk) {
        const ek = (0, Dk.l)(kk);
        this.XM[ek] && (this.consumedButtons[ek] = !0)
      }
      buildInput(kk, ek, ik, fk) {
        const Sk = this.XM,
          bk = this.previousHeld,
          rk = fk ? new Array(Dk.W).fill(!0) : [...this.consumedButtons],
          Pk = fk ? rk : [...this.suppressedReleases],
          mk = !this.leftStickConsumed && (!fk || "left" === fk),
          Mk = !this.rightStickConsumed && (!fk || "right" === fk);
        return {
          frame: kk,
          dtMs: ek,
          isHeld: kk => {
            const ek = (0, Dk.l)(kk);
            return Sk[ek] && !rk[ek]
          },
          wasPressed: kk => {
            const ek = (0, Dk.l)(kk);
            return Sk[ek] && !bk[ek] && !rk[ek]
          },
          wasReleased: kk => {
            const ek = (0, Dk.l)(kk);
            return !Sk[ek] && bk[ek] && !Pk[ek]
          },
          value: ek => {
            const ik = (0, Dk.l)(ek);
            return rk[ik] ? 0 : kk.values[ik]
          },
          leftStick: mk ? kk.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: Mk ? kk.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: ik
        }
      }
    }
  },
  8006: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Kk.i,
      f: () => Kk.l,
      h: () => Vk,
      k: () => Fk,
      l: () => uk,
      n: () => qk
    });
    var Dk = ik(60),
      fk = ik(26),
      Sk = ik(1406),
      bk = ik(38),
      rk = ik(8010),
      Pk = ik(7984),
      mk = ik(8002),
      Mk = ik(7975),
      Kk = ik(1969),
      xk = ik(8014);
    const nk = {
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
      Uk = "controllerSettings",
      Hk = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      wk = ["auto", ...rk.e],
      lk = (kk, ek) => "string" === typeof ek && kk.includes(ek),
      pk = kk => ek => "number" === typeof ek && Number.isFinite(ek) ? (0, xk.t)(ek, kk) : void 0,
      yk = kk => "boolean" === typeof kk ? kk : void 0,
      Yk = kk => ek => lk(kk, ek) ? ek : void 0,
      Lk = {
        lookSensitivityX: pk(xk.gb),
        lookSensitivityY: pk(xk.gb),
        aimLookSensitivity: pk(xk.k),
        invertLookX: yk,
        invertLookY: yk,
        lookCurve: Yk(Pk.O),
        lookDeadzone: pk(xk.v),
        moveDeadzone: pk(xk.v),
        swapSticks: yk,
        autoSprint: yk,
        sneakMode: Yk(["toggle", "hold"]),
        tapHoldTime: Yk(["short", "medium", "long"]),
        attackMode: Yk(["hold", "toggle"]),
        promptFamily: Yk(wk),
        hideButtonHints: yk,
        vibration: yk,
        cursorSpeed: pk(xk.u),
        cursorMagnetism: yk,
        buttonRepeat: Yk(Pk.n),
        largePointer: yk,
        menuBackToCategories: yk,
        swapConfirmBack: yk,
        menuNavigation: Yk(["hybrid", "focus", "cursor"]),
        inventoryNavigation: Yk(["hybrid", "slot", "cursor"]),
        quickChat: Yk(["wheel", "off"]),
        leaderboardButton: Yk(["shop", "leaderboard"]),
        gyroAiming: yk,
        gyroSensitivity: pk(xk.K),
        gyroActivation: Yk(["always", "aiming", "button"]),
        gyroButton: Yk(Pk.X),
        emoteButton: Yk(["tapHold", "wheel"])
      },
      Ck = [{
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
      Ak = kk => {
        const ek = {};
        if ("object" !== typeof kk || null === kk) return ek;
        for (const [ik, Dk] of Object.entries(kk)) Object.prototype.hasOwnProperty.call(mk.e, ik) && lk(Pk.X, Dk) && (ek[ik] = Dk);
        return ek
      },
      jk = kk => {
        const ek = {};
        for (const ik of Object.keys(nk))("bindings" === ik ? Object.keys(kk.bindings).length > 0 : kk[ik] !== nk[ik]) && (ek[ik] = kk[ik]);
        0 !== Object.keys(ek).length ? bk.f.setItem(Uk, ek) : bk.f.removeItem(Uk)
      };
    let sk = (() => {
        const kk = bk.f.getItem(Uk),
          ek = (kk => {
            const ek = "object" === typeof kk && null !== kk ? kk : {},
              ik = {
                ...nk,
                bindings: Ak(ek.bindings)
              };
            for (const fk of Object.keys(Lk)) {
              const kk = Lk[fk](ek[fk]);
              void 0 !== kk && (ik[fk] = kk)
            }
            const Dk = Object.keys(ek).filter((kk => !!Object.prototype.hasOwnProperty.call(nk, kk) && ("bindings" === kk ? "object" !== typeof ek.bindings || null === ek.bindings || Object.keys(ek.bindings).length !== Object.keys(ik.bindings).length : ik[kk] !== ek[kk])));
            return Dk.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${Dk.join(", ")}`), ik
          })(kk);
        return null !== kk && void 0 !== kk && jk(ek), ek
      })(),
      dk = {
        ...sk,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const kk = {},
            ek = new URLSearchParams(window.location.search);
          for (const {
              param: ik,
              key: Dk
            }
            of Ck) {
            const fk = Lk[Dk](ek.get(ik));
            void 0 !== fk && (kk[Dk] = fk)
          }
          return kk
        })()
      };
    const Vk = () => dk,
      Fk = () => {
        var kk, ek;
        const ik = Vk().promptFamily;
        return "auto" !== ik ? ik : null !== (kk = null === (ek = Mk.f.getActivePad()) || void 0 === ek ? void 0 : ek.family) && void 0 !== kk ? kk : "xbox"
      },
      uk = kk => {
        const ek = dk;
        sk = {
          ...sk,
          ...kk
        }, jk(sk), dk = {
          ...dk,
          ...kk
        }, (kk => {
          fk.j.tm(Kk.l, dk), Hk.some((ek => kk[ek] !== dk[ek])) && fk.j.tm(Kk.i, dk)
        })(ek)
      },
      qk = () => {
        const [kk, ek] = (0, Dk.useState)(dk);
        return (0, Sk.c)(Kk.l, ek), kk
      }
  },
  8488: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk
    });
    const Dk = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      fk = kk => Dk.has(kk)
  },
  7975: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Hk.e,
      f: () => yk
    });
    var Dk = ik(7984),
      fk = ik(7991);
    const Sk = .1,
      bk = .3;
    class rk {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(kk, ek) {
        const ik = null === this.lastMs ? 0 : Math.min(Math.max(0, ek - this.lastMs), 100);
        this.lastMs = ek;
        const Dk = Math.hypot(kk.x, kk.y);
        if (Dk >= bk) return this.anchor = null, void(this.returning = !0);
        Dk >= Sk || (this.returning = !1);
        const fk = this.anchor;
        if (!fk || Math.hypot(kk.x - fk.x, kk.y - fk.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: kk.x,
          y: kk.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += ik, this.steadyMs < 1e3) return;
        const rk = Math.max(Dk, Math.hypot(fk.x, fk.y));
        rk < Sk ? this.deadzone = 0 : this.returning && (this.deadzone = rk + .05, this.anchorLearned = !0)
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
    const Pk = (kk, ek) => {
        var ik, Dk;
        return null !== (ik = kk && (null === (Dk = Object.getOwnPropertyDescriptor(kk, ek)) || void 0 === Dk ? void 0 : Dk.get)) && void 0 !== ik ? ik : null
      },
      mk = kk => {
        const ek = kk.vendorName;
        return "string" === typeof ek ? ek : void 0
      },
      Mk = ((kk, ek) => {
        const ik = Pk(kk, "index"),
          Dk = Pk(kk, "id"),
          fk = Pk(kk, "connected"),
          Sk = Pk(kk, "mapping"),
          bk = Pk(kk, "buttons"),
          rk = Pk(kk, "axes"),
          Mk = Pk(ek, "pressed"),
          Kk = Pk(ek, "value");
        return ik && Dk && fk && Sk && bk && rk && Mk && Kk ? kk => {
          const ek = bk.call(kk),
            Pk = rk.call(kk),
            xk = {
              index: Number(ik.call(kk)),
              id: String(Dk.call(kk)),
              connected: !0 === fk.call(kk),
              mapping: String(Sk.call(kk)),
              buttons: [],
              axes: [],
              vendorName: mk(kk)
            };
          for (let ik = 0; ik < ek.length; ik++) xk.buttons.push({
            pressed: !0 === Mk.call(ek[ik]),
            value: Number(Kk.call(ek[ik]))
          });
          for (let ik = 0; ik < Pk.length; ik++) xk.axes.push(Number(Pk[ik]));
          return xk
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      Kk = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var xk = ik(1378),
      nk = ik(1385);
    const Uk = kk => ({
      pressed: kk,
      value: kk ? 1 : 0
    });
    var Hk = ik(1969);
    const wk = bk,
      lk = kk => {
        const ek = new Array(Dk.W).fill(0);
        for (let ik = 0; ik < Dk.W && ik < kk.buttons.length; ik++) {
          const fk = kk.buttons[ik];
          ek[ik] = fk.pressed && !(0, Dk.K)(ik) ? Math.max(fk.value, Dk.A) : fk.value
        }
        return ek
      },
      pk = (kk, ek) => {
        var ik, Dk;
        return {
          x: null !== (ik = kk.axes[ek]) && void 0 !== ik ? ik : 0,
          y: null !== (Dk = kk.axes[ek + 1]) && void 0 !== Dk ? Dk : 0
        }
      };
    const yk = new class {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Mk;
        this.readGamepads = kk, this.requireTrustedPads = ek, this.nativeReader = ik, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = kk => {
          kk.isTrusted && this.trustedIndices.add(kk.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = kk => {
          this.trustedIndices.delete(kk.gamepad.index)
        }, this.Px = kk => {
          if (this.rafId = 0, !this.running) return;
          const ek = 0 === this.lastTimestampMs ? 16 : Math.min(100, kk - this.lastTimestampMs);
          this.lastTimestampMs = kk;
          try {
            this.poll(kk, ek)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.Px))
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
          ek = kk ? this.readPad(kk) : null;
        return ek && ek.id === this.activeInfo.id ? kk : null
      }
      poll(kk, ek) {
        var ik, fk;
        const Sk = this.readPads();
        let bk = null,
          Pk = !1;
        const mk = [],
          Mk = Math.max(Sk.length, this.slots.length);
        for (let yk = 0; yk < Mk; yk++) {
          var Kk;
          const ek = yk < Sk.length ? Sk[yk] : null,
            ik = ek ? this.readPad(ek) : null;
          if (!ik || !ik.connected || !this.isUsable(ik)) {
            this.slots[yk] = null;
            continue
          }
          let fk = this.slots[yk];
          fk && fk.id === ik.id || (fk = {
            id: ik.id,
            XM: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new rk,
            rightRest: new rk
          }, this.slots[yk] = fk);
          const Mk = pk(ik, 0),
            xk = pk(ik, 2);
          !fk.leftSettled && Math.hypot(Mk.x, Mk.y) < wk && (fk.leftSettled = !0), !fk.rightSettled && Math.hypot(xk.x, xk.y) < wk && (fk.rightSettled = !0), fk.leftRest.observe(Mk, kk), fk.rightRest.observe(xk, kk);
          const nk = lk(ik),
            Uk = (0, Dk.q)(nk, fk.XM),
            Hk = fk.XM,
            Yk = Uk.map(((kk, ek) => kk && !Hk[ek]));
          fk.XM = Uk;
          const Lk = {
            pad: ik,
            slot: fk,
            values: nk
          };
          yk === (null === (Kk = this.activeInfo) || void 0 === Kk ? void 0 : Kk.index) && ik.id === this.activeInfo.id ? (bk = Lk, Pk = Yk.includes(!0)) : Yk.includes(!0) && mk.push({
            polled: Lk,
            rose: Yk
          })
        }
        const xk = this.slots.some((kk => null !== kk));
        if (xk !== this.anyPadConnected) {
          this.anyPadConnected = xk;
          for (const kk of this.connectedListeners) kk()
        }
        const nk = null !== (ik = null === (fk = bk) || void 0 === fk ? void 0 : fk.slot.XM) && void 0 !== ik ? ik : [],
          Uk = Pk ? void 0 : mk.find((kk => {
            let {
              rose: ek
            } = kk;
            return ek.some(((kk, ek) => kk && !nk[ek]))
          }));
        if (Uk ? (bk = Uk.polled, this.setActive(Uk.polled.pad)) : this.activeInfo && !bk && this.setActive(null), !bk || !this.activeInfo) return;
        const Hk = ((kk, ek) => {
          let {
            pad: ik,
            slot: fk,
            values: Sk
          } = kk;
          const bk = (0, Dk.x)(ek);
          return bk.values = Sk, fk.leftSettled && (bk.leftStick = fk.leftRest.apply(pk(ik, 0))), fk.rightSettled && (bk.rightStick = fk.rightRest.apply(pk(ik, 2))), bk
        })(bk, kk);
        for (const Dk of this.frameListeners) Dk(Hk, ek, this.activeInfo)
      }
      readPad(kk) {
        const ek = this.readSnapshot(kk);
        return ek && (0, nk.d)(ek) ? (kk => {
          const ek = ek => {
              var ik;
              return null !== (ik = kk.buttons[ek]) && void 0 !== ik ? ik : Uk(!1)
            },
            ik = ek => {
              var ik;
              return null !== (ik = kk.axes[ek]) && void 0 !== ik ? ik : 0
            },
            Dk = kk.axes.length > 9,
            fk = Dk ? (kk => {
              const ek = 0 !== kk;
              return {
                up: ek && (kk >= -1 && kk < -.7 || kk >= .95 && kk <= 1),
                right: ek && kk >= -.75 && kk < -.1,
                down: ek && kk >= -.2 && kk < .45,
                left: ek && kk >= .4 && kk <= 1
              }
            })(ik(9)) : {
              up: ik(5) < -.5,
              down: ik(5) > .5,
              left: ik(4) < -.5,
              right: ik(4) > .5
            };
          return {
            ...kk,
            mapping: "standard",
            buttons: [ek(1), ek(2), ek(0), ek(3), ek(4), ek(5), ek(6), ek(7), ek(8), ek(9), ek(10), ek(11), Uk(fk.up), Uk(fk.down), Uk(fk.left), Uk(fk.right), ek(12)],
            axes: [ik(0), ik(1), ik(2), ik(Dk ? 5 : 3)]
          }
        })(ek) : ek
      }
      readSnapshot(kk) {
        if (this.nativeReader) try {
          return this.nativeReader(kk)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (kk => {
          const ek = kk;
          return {
            index: ek.index,
            id: ek.id,
            connected: ek.connected,
            mapping: ek.mapping,
            buttons: Array.from(ek.buttons, (kk => ({
              pressed: kk.pressed,
              value: kk.value
            }))),
            axes: Array.from(ek.axes),
            vendorName: mk(kk)
          }
        })(kk)
      }
      isUsable(kk) {
        return !(0, xk.e)(kk.id) && ("standard" !== kk.mapping ? (this.warnedNonStandardIds.has(kk.id) || (this.warnedNonStandardIds.add(kk.id), console.warn(`Controller "${kk.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(kk.index))
      }
      setActive(kk) {
        this.activeInfo = kk ? {
          index: kk.index,
          id: kk.id,
          family: (0, fk.c)(kk.id, kk.vendorName)
        } : null;
        for (const ek of this.connectionListeners) ek(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (kk) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", kk)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.Px))
      }
    }((() => Kk ? Kk.call(navigator) : []), !0);
    yk.listenForConnections()
  },
  8503: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk
    });
    const Dk = {
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
  8596: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => bk,
      d: () => rk
    });
    var Dk = ik(26),
      fk = ik(8588);
    let Sk = !1;
    const bk = () => Sk,
      rk = kk => {
        kk !== Sk && (Sk = kk, Dk.j.tm(fk.k, Sk))
      }
  },
  8594: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => rk,
      g: () => Pk
    });
    var Dk = ik(26),
      fk = ik(8588);
    let Sk = null,
      bk = 0;
    const rk = () => Sk,
      Pk = kk => {
        null === kk && null === Sk || (Sk = null === kk ? null : {
          id: ++bk,
          holdMs: kk
        }, Dk.j.tm(fk.o, Sk))
      }
  },
  8601: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => bk,
      i: () => rk
    });
    var Dk = ik(26),
      fk = ik(8588);
    let Sk = !1;
    const bk = () => Sk,
      rk = kk => {
        kk !== Sk && (Sk = kk, Dk.j.tm(fk.s, Sk))
      }
  },
  8665: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk,
      c: () => rk
    });
    var Dk = ik(26),
      fk = ik(8588);
    let Sk = !1;
    const bk = () => Sk,
      rk = kk => {
        kk !== Sk && (Sk = kk, Dk.j.tm(fk.t, Sk))
      }
  },
  8552: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk
    });
    class Dk {
      constructor() {
        this.downAtMs = null
      }
      update(kk, ek, ik, Dk) {
        if (kk) return this.downAtMs = ik, null;
        if (null === this.downAtMs) return null;
        const fk = ik - this.downAtMs >= Dk;
        return ek ? fk ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, fk ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8037: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Kk,
      g: () => xk,
      h: () => rk,
      i: () => yk,
      m: () => pk
    });
    var Dk = ik(38),
      fk = ik(8010),
      Sk = ik(7984);
    const bk = (() => {
        try {
          return ik(8044)
        } catch {
          return null
        }
      })(),
      rk = [...Sk.X, "LeftStick", "RightStick"],
      Pk = new Map,
      mk = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      Mk = (new Set(Object.values(mk)), {
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
      Kk = (kk, ek) => {
        var ik, Dk;
        return null !== (ik = null === (Dk = Mk[mk[kk]]) || void 0 === Dk ? void 0 : Dk[ek]) && void 0 !== ik ? ik : 1
      },
      xk = (kk, ek) => {
        const ik = `./${mk[kk]}/${ek}.svg`;
        let Dk = Pk.get(ik);
        return void 0 === Dk && (Dk = bk ? bk(ik) : "", Pk.set(ik, Dk)), Dk
      },
      nk = new Set,
      Uk = [],
      Hk = kk => {
        if (!nk.has(kk)) {
          nk.add(kk);
          for (const ek of rk) {
            const ik = xk(kk, ek);
            if (ik) {
              const kk = new Image;
              kk.crossOrigin = "anonymous", kk.src = ik, Uk.push(kk)
            }
          }
        }
      },
      wk = "controllerGlyphFamily";
    let lk = null;
    const pk = kk => {
        kk !== lk && (lk = kk, Dk.f.setItem(wk, kk), Hk(kk))
      },
      yk = () => {
        const kk = Dk.f.getItem(wk);
        (0, fk.f)(kk) && kk !== lk && (lk = kk, Hk(kk))
      }
  },
  8683: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => ak,
      g: () => Wk
    });
    var Dk = ik(60),
      fk = ik(26),
      Sk = ik(1406),
      bk = ik(7994),
      rk = ik(7975),
      Pk = ik(8024),
      mk = ik(8006);
    const Mk = {
        x: 0,
        y: 0,
        z: 0
      },
      Kk = Math.PI / 180,
      xk = kk => Math.hypot(kk.x, kk.y, kk.z),
      nk = (kk, ek) => ({
        x: kk.x * ek,
        y: kk.y * ek,
        z: kk.z * ek
      }),
      Uk = (kk, ek) => ({
        x: kk.x + ek.x,
        y: kk.y + ek.y,
        z: kk.z + ek.z
      }),
      Hk = (kk, ek) => ({
        x: kk.x - ek.x,
        y: kk.y - ek.y,
        z: kk.z - ek.z
      }),
      wk = kk => {
        const ek = xk(kk);
        return 0 === ek ? Mk : nk(kk, 1 / ek)
      },
      lk = kk => ({
        min: {
          ...kk
        },
        max: {
          ...kk
        }
      }),
      pk = (kk, ek) => ({
        min: {
          x: Math.min(kk.min.x, ek.x),
          y: Math.min(kk.min.y, ek.y),
          z: Math.min(kk.min.z, ek.z)
        },
        max: {
          x: Math.max(kk.max.x, ek.x),
          y: Math.max(kk.max.y, ek.y),
          z: Math.max(kk.max.z, ek.z)
        }
      }),
      yk = (kk, ek) => kk.max.x - kk.min.x <= ek && kk.max.y - kk.min.y <= ek && kk.max.z - kk.min.z <= ek;
    class Yk {
      constructor() {
        this.bias = Mk, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Mk, this.windowSec = 0
      }
      update(kk) {
        const ek = this.gyroRange ? pk(this.gyroRange, kk.gyro) : lk(kk.gyro),
          ik = kk.accel ? this.accelRange ? pk(this.accelRange, kk.accel) : lk(kk.accel) : null;
        if (!yk(ek, 1) || ik && !yk(ik, .01)) return void this.restartWindow(kk);
        if (this.gyroRange = ek, this.accelRange = ik, this.sum = Uk(this.sum, nk(kk.gyro, kk.dtSec)), this.windowSec += kk.dtSec, this.windowSec < 1) return;
        const Dk = nk(this.sum, 1 / this.windowSec);
        if (xk(Dk) > 5) return;
        const fk = Hk(Dk, this.bias);
        let Sk = 0;
        !this.calibrated || this.windowSec >= 3 ? Sk = 1 : xk(fk) <= 1 && (Sk = Math.min(1, kk.dtSec / 1)), this.bias = Uk(this.bias, nk(fk, Sk)), this.calibrated = this.calibrated || Sk > 0
      }
      correct(kk) {
        return Hk(kk, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = Mk, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = Mk, this.windowSec = 0
      }
      restartWindow(kk) {
        this.gyroRange = lk(kk.gyro), this.accelRange = kk.accel ? lk(kk.accel) : null, this.sum = Mk, this.windowSec = 0
      }
    }
    class Lk {
      constructor() {
        this.down = null
      }
      update(kk, ek, ik) {
        const Dk = wk(nk(ek, -1));
        if (!this.down) return this.down = Dk, Dk;
        const fk = nk(kk, Kk * ik),
          Sk = this.down,
          bk = {
            x: Sk.x - (fk.y * Sk.z - fk.z * Sk.y),
            y: Sk.y - (fk.z * Sk.x - fk.x * Sk.z),
            z: Sk.z - (fk.x * Sk.y - fk.y * Sk.x)
          },
          rk = 0 === xk(Dk) ? 0 : Math.min(1, ik / .25);
        var Pk, mk;
        return this.down = wk((mk = rk, Uk(Pk = bk, nk(Hk(Dk, Pk), mk)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class Ck {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(kk, ek, ik) {
        const Dk = Math.hypot(kk, ek),
          fk = Math.max(0, Math.min(1, (Dk - 2) / 2)),
          Sk = {
            yaw: kk * (1 - fk),
            pitch: ek * (1 - fk),
            dtSec: ik
          };
        for (this.entries.push(Sk), this.windowSec += ik; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let bk = 0,
          rk = 0;
        for (const mk of this.entries) bk += mk.yaw * mk.dtSec, rk += mk.pitch * mk.dtSec;
        const Pk = this.windowSec > 0 ? {
          yaw: bk / this.windowSec,
          pitch: rk / this.windowSec
        } : {
          yaw: Sk.yaw,
          pitch: Sk.pitch
        };
        return {
          yaw: kk * fk + Pk.yaw,
          pitch: ek * fk + Pk.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class Ak {
      constructor() {
        this.calibrator = new Yk, this.gravity = new Lk, this.smoother = new Ck
      }
      process(kk, ek, ik) {
        const Dk = Math.max(0, Math.min(.05, ek));
        this.calibrator.update({
          ...kk,
          dtSec: Dk
        });
        const fk = this.calibrator.correct(kk.gyro);
        let Sk = fk.y;
        "player" === ik && kk.accel && (Sk = ((kk, ek) => {
          const ik = kk.y * ek.y + kk.z * ek.z;
          return -Math.sign(ik) * Math.min(1.41 * Math.abs(ik), Math.hypot(kk.y, kk.z))
        })(fk, this.gravity.update(fk, kk.accel, Dk)));
        const bk = this.smoother.apply(Sk, fk.x, Dk),
          rk = ((kk, ek) => {
            const ik = Math.hypot(kk, ek);
            if (ik >= 1) return {
              yaw: kk,
              pitch: ek
            };
            const Dk = ik / 1;
            return {
              yaw: kk * Dk,
              pitch: ek * Dk
            }
          })(bk.yaw, bk.pitch);
        return {
          yawDeg: rk.yaw * Dk,
          pitchDeg: rk.pitch * Dk
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
    const jk = (kk, ek) => {
      var ik, Dk, fk;
      const Sk = ek * Kk,
        bk = null !== (ik = kk.beta) && void 0 !== ik ? ik : 0,
        rk = null !== (Dk = kk.gamma) && void 0 !== Dk ? Dk : 0;
      return {
        x: bk * Math.cos(Sk) - rk * Math.sin(Sk),
        y: bk * Math.sin(Sk) + rk * Math.cos(Sk),
        z: null !== (fk = kk.alpha) && void 0 !== fk ? fk : 0
      }
    };
    var sk = ik(8691);
    class dk {
      constructor(kk, ek, ik) {
        this.hid = kk, this.sink = ek, this.onControllersChanged = ik, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = kk => {
          this.openController(kk.device).catch((kk => {
            console.warn("Could not open motion controller", kk)
          }))
        }, this.onDisconnect = kk => {
          this.opening.has(kk.device) && this.disconnectedWhileOpening.add(kk.device);
          const ek = this.controllers.get(kk.device);
          ek && (this.forget(ek), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const kk = await this.hid.getDevices();
        for (const ek of kk) await this.openController(ek).catch((kk => {
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
          filters: sk.p
        });
        let ek = 0;
        for (const ik of kk) await this.openController(ik).catch((kk => {
          console.warn("Could not open motion controller", kk), ek++
        }));
        return ek
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((kk => null !== (0, sk.i)(kk.vendorId, kk.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((kk => kk.kind))
      }
      forget(kk) {
        kk.device.removeEventListener("inputreport", kk.onReport), this.controllers.get(kk.device) === kk && this.controllers.delete(kk.device)
      }
      async openController(kk) {
        const ek = (0, sk.i)(kk.vendorId, kk.productId);
        if (!ek || !this.running || this.controllers.has(kk) || this.opening.has(kk)) return;
        this.opening.add(kk);
        let ik = !1;
        try {
          kk.opened || await kk.open()
        } finally {
          this.opening.delete(kk), ik = this.disconnectedWhileOpening.delete(kk)
        }
        if (ik) return void kk.close().catch((kk => {
          console.debug("Could not close an unplugged motion controller", kk)
        }));
        if (!this.running) return;
        const Dk = {
          device: kk,
          kind: ek,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: kk => {
            this.onReport(Dk, kk)
          }
        };
        this.controllers.set(kk, Dk), kk.addEventListener("inputreport", Dk.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(Dk)
        } catch (fk) {
          console.warn(`Could not turn on motion for ${ek}`, fk), this.controllers.get(kk) === Dk && (this.forget(Dk), this.onControllersChanged())
        }
      }
      async enableMotion(kk) {
        let {
          device: ek,
          kind: ik
        } = kk;
        if ((0, sk.l)(ik))
          for (const Dk of sk.B[ik]) await ek.receiveFeatureReport(Dk).catch((kk => {
            console.debug(`Motion controller feature report ${Dk} unavailable`, kk)
          }));
        else
          for (let Dk = 0; Dk < 2; Dk++)
            for (const {
                subcommand: kk,
                args: ik
              }
              of sk.F) await ek.sendReport(sk.H, (0, sk.e)(this.switchPacketCounter++, kk, ik)), await new Promise((kk => {
              setTimeout(kk, 60)
            }))
      }
      onReport(kk, ek) {
        const ik = (0, sk.u)(kk.kind, ek.reportId, ek.data, kk.device.productId);
        if (!ik) return;
        const Dk = null === kk.lastEventMs ? 0 : (ek.timeStamp - kk.lastEventMs) / 1e3;
        kk.lastEventMs = ek.timeStamp;
        let fk = ik.dtSec;
        if (null !== fk && Dk > 0 && (fk = Math.max(.001, Math.min(.017, Dk / ik.readings.length))), null === fk && null !== ik.sensorClock && (0, sk.l)(kk.kind)) {
          const ek = (0, sk.y)(kk.kind, kk.lastClock, ik.sensorClock);
          kk.lastClock = ik.sensorClock, fk = 0 === ek ? null : ek
        }
        if (kk.lastReadingMs = ek.timeStamp, this.isPreferred(kk, ek.timeStamp))
          for (const bk of ik.readings) {
            var Sk;
            this.sink(bk, null !== (Sk = fk) && void 0 !== Sk ? Sk : Dk, `hid${kk.openedOrder}`)
          }
      }
      isPreferred(kk, ek) {
        const ik = kk => 1e6 * sk.t[kk.kind] + kk.openedOrder;
        for (const Dk of this.controllers.values())
          if (Dk !== kk && ek - Dk.lastReadingMs < 500 && ik(Dk) < ik(kk)) return !1;
        return !0
      }
    }
    var Vk = ik(99);
    const Fk = () => DeviceMotionEvent,
      uk = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, Vk.isMobile)(),
      qk = () => {
        var kk;
        const ek = null === (kk = window.screen.orientation) || void 0 === kk ? void 0 : kk.angle;
        return "number" === typeof ek ? ek : "number" === typeof window.orientation ? window.orientation : 0
      };
    class Ik {
      constructor(kk, ek) {
        this.sink = kk, this.onStateChanged = ek, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((kk => {
            console.warn("Could not enable the motion sensor", kk)
          }))
        }, this.onMotion = kk => {
          const ek = kk.rotationRate;
          if (!ek || null === ek.alpha && null === ek.beta && null === ek.gamma) return;
          const ik = null === this.lastEventMs ? 0 : (kk.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = kk.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: jk(ek, qk()),
            accel: null
          }, ik, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof Fk().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const kk = Fk().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof kk) return void this.listen();
        let ek;
        this.disarmGestureRequest();
        try {
          ek = await kk.call(DeviceMotionEvent)
        } catch (ik) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), ik
        }
        this.wanted && ("granted" === ek ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
    const zk = "controllerGyroStatusChanged",
      Qk = {
        SF: 0,
        mF: 0
      },
      vk = kk => {
        var ek, ik;
        return "undefined" === typeof document || (null === (ek = null === (ik = document.featurePolicy) || void 0 === ik ? void 0 : ik.allowsFeature(kk)) || void 0 === ek || ek)
      };
    class Ek {
      constructor() {
        this.processor = new Ak, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = kk => {
          const ek = kk.gyroAiming && rk.f.hasConnectedPad();
          var ik, Dk;
          ek !== this.phoneRunning && (this.phoneRunning = ek, ek ? null === (ik = this.phone) || void 0 === ik || ik.start() : null === (Dk = this.phone) || void 0 === Dk || Dk.stop());
          if (kk.gyroAiming !== this.running) {
            var fk, Sk;
            if (this.running = kk.gyroAiming, this.running) null === (fk = this.hid) || void 0 === fk || fk.start().catch((kk => {
              console.warn("Could not open motion controllers", kk)
            }));
            else null === (Sk = this.hid) || void 0 === Sk || Sk.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          fk.j.tm(zk, this.getStatus())
        };
        const kk = (() => {
            var kk;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (kk = navigator.hid) && void 0 !== kk ? kk : null
          })(),
          ek = vk("hid");
        this.hidBlocked = null !== kk && !ek, this.hid = kk && ek ? new dk(kk, ((kk, ek, ik) => {
          this.lastHidReadingMs = performance.now(), this.feed(kk, ek, "player", ik)
        }), this.publishStatus) : null;
        const ik = vk("accelerometer") && vk("gyroscope");
        this.phoneBlocked = uk() && !ik, this.phone = uk() && ik ? new Ik(((kk, ek, ik) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(kk, ek, "local", ik)
        }), this.publishStatus) : null, fk.j.subscribe(mk.f, this.syncWithSettings), rk.f.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, mk.h)()), this.publishStatus()
        })), this.syncWithSettings((0, mk.h)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var kk, ek, ik, Dk;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (kk = null === (ek = this.hid) || void 0 === ek ? void 0 : ek.getConnectedKinds()) && void 0 !== kk ? kk : [],
          phoneMotion: null !== (ik = null === (Dk = this.phone) || void 0 === Dk ? void 0 : Dk.getState()) && void 0 !== ik ? ik : "off",
          padConnected: rk.f.hasConnectedPad()
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
        const ek = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const ik = (0, mk.h)();
        return ik.gyroAiming && (kk => {
          let {
            activation: ek,
            isHeld: ik,
            useButton: Dk,
            gyroButton: fk
          } = kk;
          return "always" === ek || ik("aiming" === ek ? Dk : fk)
        })({
          activation: ik.gyroActivation,
          isHeld: kk => Pk.c.isButtonHeld(kk),
          useButton: (0, bk.i)("use"),
          gyroButton: ik.gyroButton
        }) ? ((kk, ek) => ({
          SF: -kk.yawDeg * ek * Kk,
          mF: -kk.pitchDeg * ek * Kk
        }))(ek, ik.gyroSensitivity) : Qk
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(kk, ek) {
        this.feed(kk, ek, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(kk, ek, ik, Dk) {
        this.source !== Dk && (this.processor.reset(), this.source = Dk);
        const fk = this.processor.process(kk, ek, ik);
        this.pendingYawDeg += fk.yawDeg, this.pendingPitchDeg += fk.pitchDeg
      }
    }
    let hk = null;
    const ak = () => (hk || (hk = new Ek), hk),
      Wk = () => {
        const [kk, ek] = (0, Dk.useState)((() => ak().getStatus()));
        return (0, Sk.c)(zk, ek), (0, Dk.useEffect)((() => {
          ek(ak().getStatus())
        }), []), kk
      }
  },
  8691: (kk, ek, ik) => {
    ik.d(ek, {
      B: () => Ak,
      F: () => Ck,
      H: () => yk,
      e: () => Lk,
      i: () => Pk,
      l: () => Dk,
      p: () => rk,
      q: () => mk,
      t: () => Mk,
      u: () => pk,
      y: () => wk
    });
    const Dk = kk => "dualShock4" === kk || "dualSense" === kk,
      fk = 1356,
      Sk = 1406,
      bk = [{
        vendorId: fk,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: fk,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: fk,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: fk,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: fk,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: Sk,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: Sk,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: Sk,
        productId: 8199,
        kind: "joyConRight"
      }],
      rk = bk.map((kk => {
        let {
          vendorId: ek,
          productId: ik
        } = kk;
        return {
          vendorId: ek,
          productId: ik
        }
      })),
      Pk = (kk, ek) => {
        var ik, Dk;
        return null !== (ik = null === (Dk = bk.find((ik => ik.vendorId === kk && ik.productId === ek))) || void 0 === Dk ? void 0 : Dk.kind) && void 0 !== ik ? ik : null
      },
      mk = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      Mk = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      Kk = 2e3 / 32767,
      xk = 1 / 8192,
      nk = 936 / 13371,
      Uk = (kk, ek, ik) => ({
        x: kk.getInt16(ek, !0) * ik,
        y: kk.getInt16(ek + 2, !0) * ik,
        z: kk.getInt16(ek + 4, !0) * ik
      }),
      Hk = kk => 0 === kk.x && 0 === kk.y && 0 === kk.z,
      wk = (kk, ek, ik) => null === ek ? null : "dualShock4" === kk ? 16 * (ik - ek & 65535) / 3 / 1e6 : (ik - ek >>> 0) / 3 / 1e6,
      lk = (kk, ek) => "joyConRight" === ek ? {
        x: kk.y,
        y: -kk.z,
        z: -kk.x
      } : {
        x: -kk.y,
        y: kk.z,
        z: -kk.x
      },
      pk = (kk, ek, ik, fk) => Dk(kk) ? ((kk, ek, ik, Dk) => {
        const fk = ((kk, ek, ik) => "dualShock4" === kk ? 1 === ek && ik >= 63 ? 0 : 17 === ek && ik >= 65 ? 2 : null : 1 === ek && ik >= 62 ? 0 : 49 === ek && ik >= 63 ? 1 : null)(kk, ek, ik.byteLength);
        if (null === fk) return null;
        if (2976 === Dk && 1 === ek && 0 !== (4 & ik.getUint8(30))) return null;
        const Sk = fk + ("dualShock4" === kk ? 12 : 15),
          bk = Uk(ik, Sk, Kk),
          rk = Uk(ik, Sk + 6, xk);
        return Hk(bk) && Hk(rk) ? null : {
          readings: [{
            gyro: bk,
            accel: rk
          }],
          dtSec: null,
          sensorClock: "dualShock4" === kk ? ik.getUint16(fk + 9, !0) : ik.getUint32(fk + 27, !0)
        }
      })(kk, ek, ik, fk) : ((kk, ek, ik) => {
        if (48 !== ek && 49 !== ek || ik.byteLength < 48) return null;
        const Dk = [];
        for (let fk = 0; fk < 3; fk++) {
          const ek = Uk(ik, 12 + 12 * fk, 244e-6),
            Sk = Uk(ik, 18 + 12 * fk, nk);
          if (Hk(Sk) && Hk(ek)) return null;
          Dk.push({
            gyro: lk(Sk, kk),
            accel: lk(ek, kk)
          })
        }
        return {
          readings: Dk,
          dtSec: .005,
          sensorClock: null
        }
      })(kk, ek, ik),
      yk = 1,
      Yk = [0, 1, 64, 64, 0, 1, 64, 64],
      Lk = (kk, ek, ik) => new Uint8Array([15 & kk, ...Yk, ek, ...ik]),
      Ck = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      Ak = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8031: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Fk,
      g: () => Ek,
      i: () => lk,
      j: () => nk.d,
      l: () => Ik,
      p: () => qk,
      s: () => pk,
      u: () => zk,
      y: () => nk.k,
      A: () => nk.n,
      D: () => hk,
      H: () => nk.q,
      L: () => jk
    });
    var Dk = ik(60),
      fk = ik(22),
      Sk = ik(26),
      bk = ik(1406),
      rk = ik(1273),
      Pk = ik(8006),
      mk = ik(8034),
      Mk = ik(7991),
      Kk = ik(7975),
      xk = ik(8037),
      nk = ik(1371),
      Uk = ik(7984),
      Hk = ik(8488),
      wk = ik(4334);
    const lk = kk => !kk.repeat && !(0, Hk.e)(kk.key),
      pk = "PadHidesCursor";
    let yk = !1;
    const Yk = kk => {
        kk !== yk && (yk = kk, document.documentElement.classList.toggle(pk, kk))
      },
      Lk = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(kk) {
          let ek = !1,
            ik = !1;
          kk.values.forEach(((kk, Dk) => {
            const fk = kk >= (this.buttonsDown[Dk] ? Uk.T : Uk.S);
            fk && !this.buttonsDown[Dk] && (ek = !0, ik = !0), this.buttonsDown[Dk] = fk
          }));
          return [kk.leftStick, kk.rightStick].forEach(((kk, Dk) => {
            const fk = this.stickAnchors[Dk];
            Math.hypot(kk.x, kk.y) < (fk ? Uk.T : .3) ? this.stickAnchors[Dk] = null : (!fk || Math.hypot(kk.x - fk.x, kk.y - fk.y) >= .3) && (this.stickAnchors[Dk] = {
              x: kk.x,
              y: kk.y
            }, ek = !0, ik ||= !fk)
          })), ek && (this.lastActivityMs = kk.timestampMs), this.onlyMovedOn = ek && !ik, ek
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
    let Ck = null,
      Ak = !1;
    const jk = () => Ak;
    let sk = null,
      dk = !1,
      Vk = null;
    const Fk = () => Vk;
    let uk = !1;
    const qk = kk => {
        if (!Lk.observe(kk)) return !1;
        if (uk && Lk.wasOnlyMoveOn() && !(0, nk.d)()) return !1;
        uk = !1, Ak = !1;
        const ek = !(0, nk.d)();
        return ek && (Ck = kk, Vk = !yk && dk && sk ? {
          ...sk
        } : null), dk = !1, (0, nk.k)("gamepad"), Yk(!0), (0, xk.m)((0, Pk.k)()), ek
      },
      Ik = kk => !(0, nk.d)() || kk === Ck,
      zk = () => {
        Lk.reset()
      },
      Qk = () => {
        const kk = fk.b.get("activeInputDevice"),
          ek = "gamepad" === kk ? Kk.f.getActivePad() : null;
        return {
          device: kk,
          inGame: (0, rk.w)(),
          padMovesMouse: null !== ek && (0, Mk.e)(ek.id)
        }
      },
      vk = kk => {
        document.pointerLockElement ? sk = null : (sk ??= {
          x: 0,
          y: 0
        }, sk.x = kk.clientX, sk.y = kk.clientY)
      },
      Ek = () => {
        const kk = new wk.c,
          ek = ek => {
            kk.reset(), uk = !1, (0, nk.k)(ek)
          },
          ik = kk => {
            if (kk.isTrusted) {
              if (kk instanceof KeyboardEvent) {
                if ((0, nk.h)(kk), !lk(kk)) return;
                Ak = !0
              }
              if (kk instanceof PointerEvent && "touch" === kk.pointerType) return sk = null, void ek("touch");
              kk instanceof PointerEvent && (vk(kk), dk = !0), ("pointerdown" !== kk.type || (kk => {
                let {
                  device: ek,
                  inGame: ik,
                  padMovesMouse: Dk
                } = kk;
                return !("gamepad" === ek && Dk && ik)
              })(Qk())) && ek("keyboardMouse")
            }
          },
          Dk = kk => {
            kk.isTrusted && (sk = null, ek("touch"))
          },
          bk = kk => {
            kk.isTrusted && "touch" !== kk.pointerType && !kk.relatedTarget && (sk = null)
          },
          rk = ik => {
            if (!ik.isTrusted || "touch" === ik.pointerType) return;
            vk(ik);
            const Dk = ik.movementX || 0,
              Sk = ik.movementY || 0;
            if (0 === Dk && 0 === Sk) return;
            if (dk = !0, Yk(!1), "keyboardMouse" === fk.b.get("activeInputDevice")) return;
            const bk = Lk.isHolding(ik.timeStamp),
              rk = Qk(),
              Pk = (kk => {
                let {
                  device: ek,
                  inGame: ik,
                  padMovesMouse: Dk,
                  padHolding: fk
                } = kk;
                return ("gamepad" !== ek || !Dk) && "keyboardMouse" !== ek && (ik || !fk)
              })({
                ...rk,
                inGame: rk.inGame && (0, mk.e)(),
                padHolding: bk
              });
            Pk && kk.add(Dk, Sk, ik.timeStamp) && (ek("keyboardMouse"), uk = Lk.isStickOffRest())
          },
          Pk = kk => {
            Yk("gamepad" === kk)
          },
          Mk = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", ik, Mk), window.addEventListener("pointerdown", ik, Mk), window.addEventListener("wheel", ik, Mk), window.addEventListener("touchstart", Dk, Mk), window.addEventListener("pointermove", rk, Mk), window.addEventListener("pointerout", bk, Mk);
        const Kk = Sk.j.subscribe("appManagerUpdated|activeInputDevice", Pk);
        return Pk(fk.b.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", ik, Mk), window.removeEventListener("pointerdown", ik, Mk), window.removeEventListener("wheel", ik, Mk), window.removeEventListener("touchstart", Dk, Mk), window.removeEventListener("pointermove", rk, Mk), window.removeEventListener("pointerout", bk, Mk), sk = null, Sk.j.unsubscribe(Kk), Yk(!1)
        }
      },
      hk = () => {
        const [kk, ek] = (0, Dk.useState)(Pk.k);
        return (0, bk.c)(Pk.b, (() => {
          ek((0, Pk.k)())
        })), (0, bk.c)(Kk.d, (() => {
          ek((0, Pk.k)())
        })), kk
      }
  },
  8010: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Dk,
      f: () => fk
    });
    const Dk = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      fk = kk => Dk.includes(kk)
  },
  8034: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => mk,
      e: () => Mk,
      g: () => Pk,
      j: () => rk
    });
    var Dk = ik(22),
      fk = ik(1614),
      Sk = ik(1696);
    const bk = new Map,
      rk = (kk, ek) => (bk.has(kk) && console.warn(`Gameplay blocker "${kk}" registered twice; the newer one replaces it.`), bk.set(kk, ek), () => {
        bk.get(kk) === ek && bk.delete(kk)
      }),
      Pk = () => (0, Sk.e)(document.activeElement),
      mk = function() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [ek, ik] of bk)
          if (!kk.includes(ek) && ik()) return ek;
        return null
      },
      Mk = function() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === Dk.b.get("gameState") && (!(0, fk.s)() && (!Pk() && null === mk(kk)))
      }
  },
  7984: (kk, ek, ik) => {
    ik.d(ek, {
      $: () => Vk,
      A: () => Kk,
      B: () => yk,
      D: () => uk,
      G: () => Yk,
      J: () => lk,
      K: () => wk,
      O: () => mk,
      S: () => xk,
      T: () => nk,
      W: () => fk,
      X: () => Dk,
      Y: () => Ck,
      bb: () => qk,
      e: () => Ik,
      f: () => Fk,
      fb: () => Lk,
      h: () => Mk,
      j: () => Pk,
      l: () => rk,
      n: () => jk,
      q: () => pk,
      u: () => Ak,
      x: () => Sk
    });
    const Dk = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      fk = Dk.length,
      Sk = function() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(fk).fill(0),
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
      bk = Object.fromEntries(Dk.map(((kk, ek) => [kk, ek]))),
      rk = kk => bk[kk],
      Pk = function(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const Dk = Math.hypot(kk.x, kk.y);
        if (Dk <= ek) return {
          x: 0,
          y: 0
        };
        const fk = Math.min(1, (Dk - ek) / Math.max(1e-4, ik - ek));
        return {
          x: kk.x / Dk * fk,
          y: kk.y / Dk * fk
        }
      },
      mk = ["exponential", "linear", "boost"],
      Mk = (kk, ek) => {
        const ik = Math.hypot(kk.x, kk.y);
        if (0 === ik) return {
          x: 0,
          y: 0
        };
        const Dk = ((kk, ek) => {
          const ik = Math.max(0, Math.min(1, kk));
          return "linear" === ek ? ik : ik * ik
        })(ik, ek);
        return {
          x: kk.x / ik * Dk,
          y: kk.y / ik * Dk
        }
      },
      Kk = .5,
      xk = .3,
      nk = .2,
      Uk = rk("LT"),
      Hk = rk("RT"),
      wk = kk => kk === Uk || kk === Hk,
      lk = (kk, ek) => {
        const ik = rk(ek);
        return wk(ik) ? kk[ik] > .35 : kk[ik] >= Kk
      },
      pk = (kk, ek) => kk.map(((kk, ik) => wk(ik) ? ek[ik] ? kk > .35 : kk >= .55 : kk >= Kk)),
      yk = ["Up", "Down", "Left", "Right"],
      Yk = kk => yk.includes(kk),
      Lk = function(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(kk.x, kk.y) < ek ? null : Math.abs(kk.x) > Math.abs(kk.y) ? kk.x > 0 ? "Right" : "Left" : kk.y > 0 ? "Down" : "Up"
      },
      Ck = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      Ak = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      jk = ["default", "slow", "off"],
      sk = 800,
      dk = 250,
      Vk = (kk, ek) => "off" === ek ? null : "slow" === ek ? {
        initialDelayMs: Math.max(kk.initialDelayMs, sk),
        intervalMs: Math.max(kk.intervalMs, dk)
      } : kk;
    class Fk {
      constructor(kk) {
        this.readTiming = kk, this.XM = !1, this.timing = null, this.nextFireMs = 0
      }
      update(kk, ek) {
        return kk ? this.XM ? !!(this.timing && ek >= this.nextFireMs) && (this.nextFireMs = ek + this.timing.intervalMs, !0) : (this.XM = !0, this.timing = this.readTiming(), this.nextFireMs = ek + (null !== (ik = null === (Dk = this.timing) || void 0 === Dk ? void 0 : Dk.initialDelayMs) && void 0 !== ik ? ik : 0), !0) : (this.XM = !1, !1);
        var ik, Dk
      }
      reset() {
        this.XM = !1
      }
    }
    const uk = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      qk = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class Ik {
      constructor(kk) {
        this.timer = kk, this.direction = null
      }
      update(kk, ek) {
        return kk !== this.direction && (this.timer.reset(), this.direction = kk), this.timer.update(null !== kk, ek) ? kk : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8547: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk,
      d: () => Sk
    });
    let Dk = -1 / 0;
    const fk = () => {
        Dk = performance.now()
      },
      Sk = kk => performance.now() - Dk < kk
  },
  8497: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => bk,
      f: () => Sk
    });
    var Dk = ik(8006),
      fk = ik(7984);
    const Sk = kk => (0, fk.$)(kk, (0, Dk.h)().buttonRepeat),
      bk = kk => new fk.f((() => Sk(kk)))
  },
  8019: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Pk,
      d: () => Sk,
      e: () => rk
    });
    var Dk = ik(26),
      fk = ik(8006);
    const Sk = (kk, ek) => "OpenShop" === kk ? "shop" === ek : "OpenLobbyLeaderboard" !== kk || "leaderboard" === ek;
    let bk = !1;
    const rk = kk => {
        kk !== bk && (bk = kk, Dk.j.tm(fk.b, (0, fk.h)()))
      },
      Pk = () => ((kk, ek) => "shop" === kk && ek ? "shop" : "leaderboard")((0, fk.h)().leaderboardButton, bk)
  },
  8014: (kk, ek, ik) => {
    ik.d(ek, {
      A: () => nk,
      E: () => Kk,
      H: () => Yk,
      K: () => mk,
      M: () => lk,
      Q: () => dk,
      T: () => yk,
      W: () => Hk,
      Y: () => wk,
      _: () => Uk,
      ab: () => pk,
      b: () => Qk,
      cb: () => qk,
      d: () => Ek,
      g: () => Vk,
      gb: () => Sk,
      k: () => bk,
      kb: () => Ck,
      l: () => sk,
      lb: () => vk,
      n: () => Ak,
      ob: () => jk,
      p: () => Ik,
      r: () => zk,
      t: () => Mk,
      u: () => Pk,
      v: () => rk,
      y: () => Lk,
      z: () => xk
    });
    var Dk = ik(8002),
      fk = ik(7984);
    const Sk = {
        min: 25,
        max: 500,
        step: 5
      },
      bk = {
        min: 25,
        max: 100,
        step: 5
      },
      rk = {
        min: 0,
        max: .4,
        step: .01
      },
      Pk = {
        min: 25,
        max: 300,
        step: 5
      },
      mk = {
        min: .5,
        max: 6,
        step: .1
      },
      Mk = (kk, ek) => {
        if (!Number.isFinite(kk)) return ek.min;
        const ik = ek.min + Math.round((kk - ek.min) / ek.step) * ek.step,
          Dk = Math.min(ek.max, Math.max(ek.min, ik));
        return Math.round(1e3 * Dk) / 1e3
      },
      Kk = kk => `${Math.round(kk)}%`,
      xk = kk => Kk(100 * kk),
      nk = kk => `${kk.toFixed(1)}\xd7`,
      Uk = [{
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
      Hk = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      wk = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      lk = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      pk = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      yk = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      Yk = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      Lk = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      Ck = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      Ak = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      jk = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      sk = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      dk = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      Vk = {
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
      Fk = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      uk = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      qk = Dk.b.map((kk => {
        let {
          group: ek,
          actions: ik
        } = kk;
        const Dk = ik.map((kk => ({
          kind: "action",
          action: kk
        })));
        return {
          titleKey: Fk[ek],
          rows: "gameplay" === ek ? [...uk, ...Dk] : Dk
        }
      })),
      Ik = fk.X.filter((kk => "Home" !== kk)),
      zk = 1e4;
    class Qk {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = kk, this.openButton = ek, this.accepts = ik, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(kk, ek) {
        var ik;
        this.updateIgnored(kk, ek);
        const Dk = ek - (null !== (ik = this.startMs) && void 0 !== ik ? ik : ek) >= 250;
        for (const fk of Ik)
          if (fk !== this.cancelButton && Dk && !this.ignoredUntilMs.has(fk) && kk.wasPressed(fk) && this.accepts(fk)) return {
            kind: "bind",
            button: fk
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (kk.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = ek
        }
        return null === this.cancelDownAtMs ? null : kk.isHeld(this.cancelButton) && ek - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : kk.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(kk) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (kk - this.cancelDownAtMs) / 700)
      }
      updateIgnored(kk, ek) {
        if (null === this.startMs) {
          this.startMs = ek;
          for (const ek of Ik) kk.isDown(ek) && this.ignoredUntilMs.set(ek, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, ek + 250)
        }
        for (const [ik, Dk] of this.ignoredUntilMs) {
          const fk = kk.isDown(ik);
          Dk === 1 / 0 ? fk || ik !== this.openButton ? fk || this.ignoredUntilMs.delete(ik) : this.ignoredUntilMs.set(ik, ek + 250) : ek >= Dk ? this.ignoredUntilMs.delete(ik) : fk && this.ignoredUntilMs.set(ik, 1 / 0)
        }
      }
    }
    const vk = 6e3;
    class Ek {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(kk, ek) {
        let {
          pressed: ik,
          XM: Dk
        } = kk;
        if (ik) {
          const kk = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== kk && ek - kk < 1500 ? [...this.pressesAtMs, ek] : [ek], this.pressesAtMs.length >= 3) return 1
        }
        return Dk ? (this.downAtMs ??= ek, Math.min(1, (ek - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  4951: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      f: () => bk
    });
    var Dk = ik(60);
    const fk = new WeakMap,
      Sk = kk => {
        var ek;
        const ik = kk.closest("[data-pad-slider]");
        return ik && null !== (ek = fk.get(ik)) && void 0 !== ek ? ek : null
      },
      bk = (kk, ek) => {
        const ik = (0, Dk.useRef)(ek);
        ik.current = ek, (0, Dk.useEffect)((() => {
          if (kk.current) return ((kk, ek) => (fk.set(kk, ek), () => {
            fk.get(kk) === ek && fk.delete(kk)
          }))(kk.current, {
            adjust: kk => {
              ik.current.adjust(kk)
            },
            setFraction: kk => {
              ik.current.setFraction(kk)
            },
            endDrag: () => {
              ik.current.endDrag()
            }
          })
        }), [kk])
      }
  },
  8567: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Sk,
      c: () => fk
    });
    var Dk = ik(26);
    const fk = "localBlockBroken";

    function Sk() {
      return {
        onPlayerChangeBlock(kk, ek, ik, Sk, bk, rk) {
          "Air" === rk && Dk.j.tm(fk)
        }
      }
    }
  },
  8050: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8052: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8061: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8067: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8069: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8076: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8080: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8085: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8092: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8098: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8107: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8111: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8118: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8124: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8133: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8135: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8144: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8153: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8157: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8160: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8162: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8164: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8170: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8178: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8186: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8195: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8198: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8200: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8203: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8206: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8212: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8217: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8226: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8231: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8234: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8239: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8245: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8247: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8255: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8260: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8266: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8275: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8284: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8292: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8301: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8305: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8312: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8316: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8325: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8331: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8339: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8342: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8346: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8354: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8361: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8370: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8376: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8385: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8391: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8398: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8404: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8408: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8411: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8415: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8419: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8421: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8428: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8433: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8437: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8442: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8444: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8453: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8461: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8470: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8479: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8481: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
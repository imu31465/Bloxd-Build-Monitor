export const id = 28;
export const ids = [28];
export const modules = {
  8133: (qq, Eq, gq) => {
    var Yq = {
      "./nintendo/A.svg": 8138,
      "./nintendo/B.svg": 8146,
      "./nintendo/Down.svg": 8152,
      "./nintendo/Home.svg": 8154,
      "./nintendo/LB.svg": 8156,
      "./nintendo/LS.svg": 8161,
      "./nintendo/LT.svg": 8163,
      "./nintendo/Left.svg": 8169,
      "./nintendo/LeftStick.svg": 8174,
      "./nintendo/Menu.svg": 8179,
      "./nintendo/RB.svg": 8183,
      "./nintendo/RS.svg": 8189,
      "./nintendo/RT.svg": 8198,
      "./nintendo/Right.svg": 8202,
      "./nintendo/RightStick.svg": 8206,
      "./nintendo/Up.svg": 8212,
      "./nintendo/View.svg": 8221,
      "./nintendo/X.svg": 8227,
      "./nintendo/Y.svg": 8229,
      "./playstation/A.svg": 8238,
      "./playstation/B.svg": 8246,
      "./playstation/Down.svg": 8251,
      "./playstation/Home.svg": 8258,
      "./playstation/LB.svg": 8267,
      "./playstation/LS.svg": 8274,
      "./playstation/LT.svg": 8282,
      "./playstation/Left.svg": 8286,
      "./playstation/LeftStick.svg": 8293,
      "./playstation/Menu.svg": 8297,
      "./playstation/RB.svg": 8305,
      "./playstation/RS.svg": 8312,
      "./playstation/RT.svg": 8320,
      "./playstation/Right.svg": 8325,
      "./playstation/RightStick.svg": 8329,
      "./playstation/Up.svg": 8333,
      "./playstation/View.svg": 8339,
      "./playstation/X.svg": 8348,
      "./playstation/Y.svg": 8354,
      "./steamdeck/A.svg": 8362,
      "./steamdeck/B.svg": 8370,
      "./steamdeck/Down.svg": 8377,
      "./steamdeck/Home.svg": 8386,
      "./steamdeck/LB.svg": 8392,
      "./steamdeck/LS.svg": 8399,
      "./steamdeck/LT.svg": 8401,
      "./steamdeck/Left.svg": 8408,
      "./steamdeck/LeftStick.svg": 8414,
      "./steamdeck/Menu.svg": 8423,
      "./steamdeck/RB.svg": 8426,
      "./steamdeck/RS.svg": 8432,
      "./steamdeck/RT.svg": 8436,
      "./steamdeck/Right.svg": 8444,
      "./steamdeck/RightStick.svg": 8451,
      "./steamdeck/Up.svg": 8460,
      "./steamdeck/View.svg": 8463,
      "./steamdeck/X.svg": 8471,
      "./steamdeck/Y.svg": 8475,
      "./xbox/A.svg": 8481,
      "./xbox/B.svg": 8484,
      "./xbox/Down.svg": 8490,
      "./xbox/Home.svg": 8497,
      "./xbox/LB.svg": 8499,
      "./xbox/LS.svg": 8502,
      "./xbox/LT.svg": 8505,
      "./xbox/Left.svg": 8511,
      "./xbox/LeftStick.svg": 8516,
      "./xbox/Menu.svg": 8525,
      "./xbox/RB.svg": 8532,
      "./xbox/RS.svg": 8540,
      "./xbox/RT.svg": 8544,
      "./xbox/Right.svg": 8551,
      "./xbox/RightStick.svg": 8557,
      "./xbox/Up.svg": 8564,
      "./xbox/View.svg": 8572,
      "./xbox/X.svg": 8576,
      "./xbox/Y.svg": 8581
    };

    function lq(qq) {
      var Eq = Oq(qq);
      return gq(Eq)
    }

    function Oq(qq) {
      if (!gq.o(Yq, qq)) {
        var Eq = new Error("Cannot find module '" + qq + "'");
        throw Eq.code = "MODULE_NOT_FOUND", Eq
      }
      return Yq[qq]
    }
    lq.keys = function() {
      return Object.keys(Yq)
    }, lq.resolve = Oq, qq.exports = lq, lq.id = 8133
  },
  4828: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => aq,
      f: () => oq,
      h: () => Vq,
      l: () => Hq
    });
    var Yq = gq(57),
      lq = gq(4837),
      Oq = gq(4195),
      mq = gq(1341),
      xq = gq(4858),
      Aq = gq(1018),
      cq = gq.n(Aq),
      uq = gq(1336),
      Bq = gq(1710),
      Wq = gq(4866),
      Nq = gq(1070);

    function aq(qq) {
      let {
        label: Eq,
        onClick: gq,
        checked: Yq,
        circleInfoText: lq,
        className: xq,
        disabled: Aq,
        note: uq
      } = qq;
      return (0, Nq.jsxs)("div", {
        "aria-disabled": Aq || void 0,
        "data-pad-focusable": !0,
        className: cq()("SettingBox CheckboxContainer", {
          [xq]: xq,
          SettingBoxDisabled: Aq
        }),
        onClick: () => {
          Aq || gq(!Yq)
        },
        children: [(0, Nq.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Nq.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Nq.jsx)(Oq.b, {
              className: "SettingsCheckbox",
              checked: Yq,
              disabled: Aq,
              onChange: () => {}
            })
          }), (0, Nq.jsxs)("div", {
            className: "CheckboxText",
            children: [Eq, lq && (0, Nq.jsx)("span", {
              onClick: qq => qq.stopPropagation(),
              children: (0, Nq.jsx)(mq.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: lq
              })
            })]
          })]
        }), uq && (0, Nq.jsx)("div", {
          className: "SettingNote",
          children: uq
        })]
      })
    }

    function Vq(qq) {
      let {
        name: Eq,
        onChange: gq,
        min: lq,
        max: Oq,
        step: xq,
        initValue: Aq,
        circleInfoText: uq,
        format: Bq,
        className: Wq,
        padStep: aq,
        disabled: Vq = !1,
        selectableMax: dq,
        cappedNote: Hq,
        onChangeComplete: oq
      } = qq;
      const [Pq, Qq] = (0, Yq.useState)(Aq), yq = (0, Yq.useRef)(Aq);
      (0, Yq.useEffect)((() => {
        yq.current = Aq, Qq(Aq)
      }), [Aq]);
      const tq = void 0 !== dq && dq < Oq,
        rq = tq ? {
          "--slider-selectable": (dq - lq) / (Oq - lq)
        } : void 0;
      return (0, Nq.jsxs)("div", {
        className: cq()("SettingBox SettingsSliderDiv", {
          [Wq]: Wq,
          SettingBoxDisabled: Vq,
          SliderCapped: tq
        }),
        style: rq,
        children: [(0, Nq.jsxs)("div", {
          className: "SliderText",
          children: [`${Eq}: ${Bq?Bq(Pq):Pq}`, uq && (0, Nq.jsx)(mq.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: uq
          })]
        }), (0, Nq.jsx)("div", {
          className: "SliderDiv",
          children: (0, Nq.jsx)(jq, {
            value: Pq,
            min: lq,
            max: Oq,
            step: xq,
            onChange: qq => {
              if (tq && qq >= dq && Pq === dq) return;
              const Eq = tq ? Math.min(qq, dq) : qq;
              yq.current = Eq, Qq(Eq), gq(Eq)
            },
            onChangeComplete: oq && (() => {
              oq(yq.current)
            }),
            format: Bq,
            padStep: aq,
            disabled: Vq
          })
        }), tq && Hq && (0, Nq.jsx)("div", {
          className: "SettingNote",
          children: Hq
        })]
      })
    }
    const dq = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function jq(qq) {
      var Eq;
      let {
        value: gq,
        min: Oq,
        max: mq,
        step: xq,
        onChange: Aq,
        orientation: cq,
        reverse: uq,
        setIsChanging: Bq,
        tooltip: aq,
        labels: Vq,
        handleLabel: jq,
        format: Hq,
        onChangeStart: oq,
        onChangeComplete: Pq,
        padStep: Qq,
        disabled: yq = !1
      } = qq;
      const tq = (0, Yq.useRef)(null),
        rq = (0, Yq.useRef)(null);
      (0, Yq.useLayoutEffect)((() => {
        var qq, Eq, gq;
        const Yq = null !== (qq = null === (Eq = tq.current) || void 0 === Eq ? void 0 : Eq.querySelector(".rangeslider")) && void 0 !== qq ? qq : null;
        null === Yq || void 0 === Yq || Yq.setAttribute("data-pad-slider", ""), null === Yq || void 0 === Yq || Yq.setAttribute("data-pad-focusable", ""), null === Yq || void 0 === Yq || null === (gq = Yq.querySelector(".rangeslider__handle")) || void 0 === gq || gq.setAttribute("data-pad-slider-handle", ""), rq.current = Yq
      }), []), (0, Yq.useLayoutEffect)((() => {
        var qq, Eq;
        yq ? null === (qq = rq.current) || void 0 === qq || qq.setAttribute("aria-disabled", "true") : null === (Eq = rq.current) || void 0 === Eq || Eq.removeAttribute("aria-disabled")
      }), [yq]);
      const vq = (null !== (Eq = String(xq).split(".")[1]) && void 0 !== Eq ? Eq : "").length,
        hq = qq => {
          const Eq = Number((Math.round((qq - Oq) / xq) * xq + Oq).toFixed(vq));
          return Math.min(mq, Math.max(Oq, Eq))
        },
        nq = (0, Yq.useRef)(Pq);
      nq.current = Pq, (0, Yq.useEffect)((() => {
        const qq = tq.current;
        if (!qq) return;
        const Eq = qq => {
          var Eq;
          dq.has(qq.key) && (null === (Eq = nq.current) || void 0 === Eq || Eq.call(nq))
        };
        return qq.addEventListener("keyup", Eq), () => {
          qq.removeEventListener("keyup", Eq)
        }
      }), []);
      const bq = (0, Yq.useRef)(!1);
      return (0, Wq.i)(rq, {
        adjust: qq => {
          if (yq) return;
          const Eq = null !== Qq && void 0 !== Qq ? Qq : Math.max(xq, Math.round((mq - Oq) / 20 / xq) * xq),
            Yq = hq(gq + qq * Eq * (uq ? -1 : 1));
          Yq !== gq && (null === oq || void 0 === oq || oq(), Aq(Yq), null === Pq || void 0 === Pq || Pq())
        },
        setFraction: qq => {
          if (yq) return;
          const Eq = hq(Oq + (uq ? 1 - qq : qq) * (mq - Oq));
          Eq !== gq && (bq.current || (bq.current = !0, null === oq || void 0 === oq || oq()), Aq(Eq))
        },
        endDrag: () => {
          bq.current && (bq.current = !1, null === Pq || void 0 === Pq || Pq())
        }
      }), (0, Nq.jsx)("div", {
        ref: tq,
        style: {
          display: "contents"
        },
        children: (0, Nq.jsx)(lq.d, {
          value: gq,
          min: Oq,
          max: mq,
          step: xq,
          onChange: Aq,
          orientation: cq,
          reverse: uq,
          tooltip: aq,
          labels: Vq,
          handleLabel: jq,
          format: Hq,
          onChangeStart: () => {
            null === oq || void 0 === oq || oq(), null === Bq || void 0 === Bq || Bq(!0)
          },
          onChangeComplete: () => {
            null === Bq || void 0 === Bq || Bq(!1), null === Pq || void 0 === Pq || Pq()
          }
        })
      })
    }
    async function Hq() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const Eq = uq.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: qq
      });
      !0 === await Eq.getResult() && (0, Bq.reloadBloxd)()
    }

    function oq(qq) {
      let {
        label: Eq,
        options: gq,
        value: Yq,
        onChange: lq,
        circleInfoText: Oq
      } = qq;
      return (0, Nq.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Nq.jsxs)("div", {
          className: "SliderText",
          children: [Eq, Oq && (0, Nq.jsx)(mq.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Oq
          })]
        }), (0, Nq.jsx)(xq.c, {
          ariaLabel: Eq,
          options: gq,
          value: Yq,
          onChange: lq
        })]
      })
    }
  },
  4858: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq
    });
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(1070);

    function mq(qq) {
      let {
        options: Eq,
        value: gq,
        onChange: Yq,
        ariaLabel: mq,
        className: xq,
        reselectable: Aq = !1,
        keepsFocus: cq = !1,
        padTabs: uq
      } = qq;
      const Bq = void 0 !== uq;
      return (0, Oq.jsx)("div", {
        className: lq()("SegmentedToggle", xq),
        role: "group",
        "aria-label": mq,
        "data-pad-tabs": uq,
        children: Eq.map((qq => {
          const Eq = qq.value === gq;
          return (0, Oq.jsx)("button", {
            type: "button",
            "aria-pressed": Eq,
            "data-pad-tab": Bq || void 0,
            "data-pad-selected": Bq && Eq ? "true" : void 0,
            "data-pad-default-focus": Bq && Eq || void 0,
            "aria-label": qq.ariaLabel,
            title: qq.ariaLabel,
            className: lq()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Eq
            }),
            onMouseDown: cq ? qq => {
              qq.preventDefault()
            } : void 0,
            onClick: () => {
              Eq && !Aq || Yq(qq.value)
            },
            children: qq.label
          }, qq.value)
        }))
      })
    }
  },
  8081: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      f: () => Oq,
      g: () => Wq,
      i: () => Bq,
      m: () => cq,
      o: () => xq,
      p: () => Yq,
      t: () => Nq,
      u: () => aq
    });
    const Yq = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      lq = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: Yq
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      Oq = {
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
      mq = ["pickBlock", "perspective"],
      xq = qq => mq.includes(qq) ? mq : [qq],
      Aq = Object.fromEntries(lq.flatMap((qq => {
        let {
          group: Eq,
          actions: gq
        } = qq;
        return gq.map((qq => [qq, Eq]))
      }))),
      cq = qq => Aq[qq],
      uq = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      Bq = qq => {
        var Eq;
        return [cq(qq), ...null !== (Eq = uq[qq]) && void 0 !== Eq ? Eq : []]
      },
      Wq = new Set(["menu", "inventory", "keyboard"]),
      Nq = {
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
      aq = new Set(["forward", "backward", "left", "right"])
  },
  8073: (qq, Eq, gq) => {
    gq.d(Eq, {
      C: () => hq,
      D: () => uq,
      F: () => vq,
      G: () => iq,
      d: () => Hq,
      e: () => Qq,
      i: () => Wq,
      j: () => Nq,
      m: () => fq,
      p: () => bq,
      t: () => nq,
      u: () => Pq,
      v: () => Zq,
      w: () => rq,
      z: () => oq
    });
    var Yq = gq(8081),
      lq = gq(8090),
      Oq = gq(8061),
      mq = gq(8110);
    const xq = qq => "pickBlock" === qq ? "perspective" : qq,
      Aq = (qq, Eq) => {
        var gq;
        const lq = xq(Eq);
        return null !== (gq = qq[lq]) && void 0 !== gq ? gq : Yq.f[lq]
      },
      cq = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((qq => {
        let [Eq, gq] = qq;
        return [
          [Eq, gq],
          [gq, Eq]
        ]
      }))),
      uq = (qq, Eq) => null !== qq && void 0 !== qq ? qq : "nintendo" === Eq,
      Bq = qq => uq((0, lq.i)().swapConfirmBack, (0, lq.k)()) && cq.get(qq) || qq,
      Wq = qq => Aq((0, lq.i)().bindings, Bq(qq)),
      Nq = qq => Yq.f[Bq(qq)],
      aq = Object.keys(Yq.f),
      Vq = qq => "gameplay" === (0, Yq.m)(qq) ? ["gameplay"] : (0, Yq.i)(qq),
      dq = (qq, Eq) => {
        const gq = Vq(Eq);
        return Vq(qq).some((qq => gq.includes(qq)))
      },
      jq = (qq, Eq, gq) => {
        const lq = Aq(qq, Eq),
          mq = new Set((0, Yq.o)(Eq)),
          cq = [...mq];
        for (let Yq = cq.pop(); Yq; Yq = cq.pop())
          for (const Eq of aq) {
            const Oq = Aq(qq, Eq);
            mq.has(Eq) || Oq !== gq && Oq !== lq || !dq(Yq, Eq) || (mq.add(Eq), cq.push(Eq))
          }
        const uq = {
          ...qq
        };
        for (const Bq of mq) {
          const Eq = Aq(qq, Bq) === lq ? gq : lq,
            mq = (0, Yq.i)(Bq).some((qq => Yq.g.has(qq)));
          if ((0, Oq.H)(Eq) && mq) return null;
          uq[xq(Bq)] = Eq
        }
        for (const Oq of Object.keys(uq)) uq[Oq] === Yq.f[Oq] && delete uq[Oq];
        return uq
      },
      Hq = (qq, Eq) => null !== jq((0, lq.i)().bindings, Bq(qq), Eq),
      oq = (qq, Eq) => {
        if (Wq(qq) === Eq) return !0;
        const gq = jq((0, lq.i)().bindings, Bq(qq), Eq);
        return !!gq && ((0, lq.n)({
          bindings: gq
        }), !0)
      },
      Pq = (qq, Eq) => {
        const gq = (0, Yq.o)(Eq);
        return aq.filter((Eq => xq(Eq) === Eq && !gq.includes(Eq) && Aq(qq, Bq(Eq)) !== Wq(Eq)))
      },
      Qq = ["southpaw", "triggersSwapped"],
      yq = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      tq = qq => Object.keys(yq[qq]),
      rq = (qq, Eq) => "southpaw" === qq ? Eq.swapSticks : tq(qq).every((gq => Aq(Eq.bindings, gq) === yq[qq][gq])),
      vq = (qq, Eq) => {
        const gq = (0, lq.i)();
        let Oq = gq.bindings;
        for (const lq of tq(qq)) {
          const gq = Eq ? yq[qq][lq] : Yq.f[lq];
          if (Oq = jq(Oq, lq, gq), !Oq) return !1
        }
        return (0, lq.n)({
          swapSticks: "southpaw" === qq ? Eq : gq.swapSticks,
          bindings: Oq
        }), !0
      },
      hq = () => {
        (0, lq.n)({
          swapSticks: !1,
          bindings: {}
        })
      },
      nq = () => (0, lq.i)().swapSticks ? "RightStick" : "LeftStick",
      bq = () => (0, lq.i)().swapSticks ? "LeftStick" : "RightStick",
      iq = qq => (0, lq.i)().swapSticks && (0, Oq.H)(qq),
      Zq = qq => iq(qq) ? nq() : bq(),
      fq = qq => {
        if (Yq.u.has(qq)) return nq();
        const Eq = Yq.t[qq];
        return Eq && ("leaderboard" !== Eq || (0, mq.d)(qq, (0, mq.c)())) ? Wq(Eq) : null
      }
  },
  8052: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      ControllerCategory: () => ox,
      ControllerGlyph: () => Ql,
      ControllerRoot: () => Hm,
      PadLobbyShortcuts: () => Sm,
      PadSneakChip: () => hm,
      PadTooltip: () => bm,
      attachPressToContinue: () => Fm,
      getBoundButton: () => uq.i,
      getControllerSettings: () => Wq.i,
      getGlyphForNoaAction: () => uq.m,
      getInventoryCursorState: () => Qx,
      getMenuShortcutButton: () => Ug,
      getPadGlyphIconName: () => ym,
      getPadGlyphIconUrl: () => tm,
      getPadRepeatTiming: () => Vq.e,
      handOverPadFocus: () => tx,
      hasActivePad: () => Px,
      isPadSteppingSlots: () => yx
    });
    const Yq = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var lq = gq(1183),
      Oq = gq(1380),
      mq = gq(8057),
      xq = gq(71),
      Aq = gq(24),
      cq = gq(31),
      uq = gq(8073),
      Bq = gq(8118),
      Wq = gq(8090),
      Nq = gq(8120),
      aq = gq(8061),
      Vq = gq(8594),
      dq = gq(8599),
      jq = gq(1646);
    const Hq = (qq, Eq, gq) => Math.max(Eq, Math.min(gq, qq)),
      oq = qq => Math.min(qq.width, qq.height) / 720,
      Pq = qq => Math.max(.15, qq);
    class Qq {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(qq, Eq) {
        const gq = Math.hypot(qq.x, qq.y) >= (qq => Math.max(.3, qq))(Eq);
        return this.locked ? (this.locked = gq, !1) : gq
      }
    }
    const yq = (qq, Eq) => {
        const gq = Hq(Eq.dtMs, 0, 100),
          Yq = gq / 1e3,
          lq = oq(Eq.viewport) * (Eq.cursorSpeedPercent / 100),
          Oq = (0, aq.j)(Eq.stick, Pq(Eq.moveDeadzone)),
          mq = Math.hypot(Oq.x, Oq.y),
          xq = ((qq, Eq, gq) => {
            if (Eq < .3) return 0;
            const Yq = gq / 350;
            return Eq >= .85 ? Math.min(1, qq + Yq) : Math.max(0, qq - Yq)
          })(qq.speedRamp, mq, gq);
        let Aq = qq.x,
          cq = qq.y;
        if (mq > 0) {
          const qq = .45 + .55 * xq,
            gq = Eq.context.overInteractive ? .45 : 1,
            uq = 1400 * (qq => {
              const Eq = Hq(qq, 0, 1);
              return .3 * Eq + .7 * Eq * Eq
            })(mq) * lq * qq * gq;
          Aq += Oq.x / mq * uq * Yq, cq += Oq.y / mq * uq * Yq
        }
        const uq = Math.hypot(Eq.dpad.x, Eq.dpad.y);
        if (uq > 0) {
          const qq = 500 * lq;
          Aq += Eq.dpad.x / uq * qq * Yq, cq += Eq.dpad.y / uq * qq * Yq
        }
        const Bq = Eq.context.magnetTarget;
        if (Bq && mq < .3 && 0 === uq) {
          const qq = ((qq, Eq, gq, Yq, lq) => {
            const Oq = Eq.x - qq.x,
              mq = Eq.y - qq.y,
              xq = Math.hypot(Oq, mq);
            if (0 === xq) return {
              x: 0,
              y: 0
            };
            const Aq = Math.min(xq, lq * (1 - Yq / .3));
            let cq = Oq / xq * Aq,
              uq = mq / xq * Aq;
            if (Yq > 0) {
              const qq = gq.x / Yq,
                Eq = gq.y / Yq,
                lq = cq * qq + uq * Eq;
              lq < 0 && (cq -= lq * qq, uq -= lq * Eq)
            }
            return {
              x: cq,
              y: uq
            }
          })({
            x: Aq,
            y: cq
          }, Bq, Oq, mq, 120 * oq(Eq.viewport) * Yq);
          Aq += qq.x, cq += qq.y
        }
        return {
          x: Hq(Aq, 0, Math.max(0, Eq.viewport.width - 1)),
          y: Hq(cq, 0, Math.max(0, Eq.viewport.height - 1)),
          speedRamp: xq
        }
      },
      tq = qq => {
        const Eq = (0, aq.j)(qq, .2);
        return 0 !== Eq.x || 0 !== Eq.y
      },
      rq = (qq, Eq) => {
        const gq = (0, aq.j)(qq, .2),
          Yq = Math.hypot(gq.x, gq.y);
        if (0 === Yq) return {
          x: 0,
          y: 0
        };
        const lq = Yq * Yq * 1600,
          Oq = Hq(Eq, 0, 100) / 1e3;
        return {
          x: gq.x / Yq * lq * Oq,
          y: gq.y / Yq * lq * Oq
        }
      },
      vq = (qq, Eq) => "y" === Eq ? qq.scrollHeight > qq.clientHeight + 1 : qq.scrollWidth > qq.clientWidth + 1,
      hq = (qq, Eq) => {
        if (!vq(qq, Eq)) return !1;
        const gq = getComputedStyle(qq),
          Yq = "y" === Eq ? gq.overflowY : gq.overflowX;
        return "auto" === Yq || "scroll" === Yq
      },
      nq = (qq, Eq, gq) => {
        for (let Oq = qq instanceof HTMLElement ? qq : null !== (Yq = null === qq || void 0 === qq ? void 0 : qq.parentElement) && void 0 !== Yq ? Yq : null; Oq; Oq = Oq.parentElement) {
          var Yq;
          if (hq(Oq, Eq)) return Oq;
          if (Oq === gq) return null
        }
        if (gq) return null;
        const lq = document.scrollingElement;
        return lq instanceof HTMLElement && vq(lq, Eq) ? lq : null
      },
      bq = new WeakMap,
      iq = (qq, Eq) => {
        const gq = performance.now(),
          Yq = bq.get(qq);
        if (Yq && Yq.axis === Eq && gq - Yq.atMs < 500 && (!Yq.container || Yq.container.isConnected)) return Yq.container;
        const lq = Zq(qq, Eq);
        return bq.set(qq, {
          axis: Eq,
          atMs: gq,
          container: lq
        }), lq
      },
      Zq = (qq, Eq) => {
        let gq = hq(qq, Eq) ? qq : null,
          Yq = gq ? gq.clientWidth * gq.clientHeight : 0;
        for (const lq of qq.querySelectorAll("*")) {
          const qq = lq.clientWidth * lq.clientHeight;
          qq > Yq && hq(lq, Eq) && (gq = lq, Yq = qq)
        }
        return gq
      },
      fq = (qq, Eq, gq) => "y" === Eq ? gq < 0 ? qq.scrollTop > 0 : qq.scrollTop + qq.clientHeight < qq.scrollHeight - 1 : gq < 0 ? qq.scrollLeft > 0 : qq.scrollLeft + qq.clientWidth < qq.scrollWidth - 1,
      Mq = (qq, Eq, gq) => {
        "y" === Eq ? qq.scrollBy({
          top: gq,
          behavior: "instant"
        }) : qq.scrollBy({
          left: gq,
          behavior: "instant"
        })
      },
      Tq = qq => {
        if (!qq || qq === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const Eq = qq.getBoundingClientRect(),
          gq = Math.max(0, Eq.left),
          Yq = Math.max(0, Eq.top);
        return new DOMRect(gq, Yq, Math.min(window.innerWidth, Eq.right) - gq, Math.min(window.innerHeight, Eq.bottom) - Yq)
      },
      zq = (qq, Eq) => qq.left < Eq.right && Eq.left < qq.right && qq.top < Eq.bottom && Eq.top < qq.bottom;
    var Sq = gq(57),
      pq = gq(1018),
      Gq = gq.n(pq),
      Lq = gq(1070);
    let Jq = 0,
      kq = !1;
    class Rq {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(qq) {
        this.element = qq, this.shownKey = "", this.gap = null
      }
      show(qq) {
        const Eq = this.element;
        if (!Eq) return;
        const gq = qq ? this.keepOnScreen(Eq, qq) : null,
          Yq = gq ? `${gq.left},${gq.top},${gq.width},${gq.height}` : "";
        if (Yq === this.shownKey) return;
        const lq = "" === this.shownKey;
        this.shownKey = Yq, Eq.classList.toggle("Visible", null !== gq), gq && (Eq.classList.toggle("Snap", lq), Eq.style.width = `${gq.width}px`, Eq.style.height = `${gq.height}px`, Eq.style.transform = `translate(${gq.left}px, ${gq.top}px)`, lq && (Eq.offsetWidth, Eq.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(qq, Eq) {
        var gq;
        const Yq = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!kq){kq=!0;const qq=document.createElement("div");qq.setAttribute("aria-hidden","true"),qq.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(qq),new ResizeObserver((()=>{Jq++})).observe(qq)}return String(Jq)})()}`;
        (null === (gq = this.gap) || void 0 === gq ? void 0 : gq.key) !== Yq && (this.gap = {
          px: parseFloat(getComputedStyle(qq).paddingLeft) || 0,
          key: Yq
        });
        const lq = this.gap.px + 2,
          Oq = Math.max(Eq.left, lq),
          mq = Math.max(Eq.top, lq),
          xq = Math.min(Eq.left + Eq.width, window.innerWidth - lq),
          Aq = Math.min(Eq.top + Eq.height, window.innerHeight - lq);
        return xq <= Oq || Aq <= mq ? Eq : {
          left: Oq,
          top: mq,
          width: xq - Oq,
          height: Aq - mq
        }
      }
    }
    const Uq = qq => {
      let {
        placer: Eq,
        className: gq
      } = qq;
      const Yq = (0, Sq.useCallback)((qq => {
        Eq.setElement(qq)
      }), [Eq]);
      return (0, Lq.jsx)("div", {
        ref: Yq,
        className: Gq()("PadReticle", gq),
        "aria-hidden": !0
      })
    };
    var Fq = gq(8601);
    const sq = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const Xq = new class {
      constructor() {
        this.state = sq, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(qq) {
        if (Eq = this.state, gq = qq, (Eq.visible || gq.visible) && (Eq.visible !== gq.visible || Eq.x !== gq.x || Eq.y !== gq.y || Eq.pressed !== gq.pressed)) {
          var Eq, gq;
          this.state = qq;
          for (const Eq of this.listeners) Eq(qq)
        }
      }
      hide() {
        this.set(sq)
      }
      subscribe(qq) {
        return this.listeners.add(qq), () => {
          this.listeners.delete(qq)
        }
      }
    };
    var wq = gq(8609);
    const Kq = (qq, Eq) => {
        let {
          kind: gq,
          holding: Yq,
          hasPress: lq,
          hasBack: Oq,
          slotHasItem: mq
        } = Eq;
        switch (qq) {
          case "primary":
            return "slot" === gq ? "slotPrimary" : "recipe" === gq || "button" === gq ? lq ? "pressPrimary" : "click" : "textField" === gq ? "openKeyboard" : null;
          case "secondary":
            return "slot" === gq ? "slotSecondary" : "button" !== gq && "recipe" !== gq || !lq ? null : "pressSecondary";
          case "quickMove":
            return "slot" === gq && mq ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === gq && mq && !Yq ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return Yq ? "cancel" : Oq ? "pressBack" : "close"
        }
      },
      Cq = qq => {
        const Eq = [];
        if (qq.hotbarPicking) return Eq.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), Eq.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), Eq;
        if (qq.holding) "slot" === qq.kind ? (Eq.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), Eq.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === qq.kind && Eq.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), Eq.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), Eq.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), qq.openButtonCloses && Eq.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var gq;
          "slot" === qq.kind && qq.slotHasItem ? (Eq.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), Eq.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), Eq.push({
            actions: ["inventoryQuickMove"],
            labelKey: qq.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), Eq.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), Eq.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== qq.kind && "recipe" !== qq.kind || !qq.pressHints ? "button" === qq.kind || "recipe" === qq.kind ? Eq.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === qq.kind && Eq.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (qq.pressHints.primary && Eq.push({
            actions: ["inventoryPrimary"],
            labelKey: qq.pressHints.primary
          }), qq.pressHints.secondary && Eq.push({
            actions: ["inventorySecondary"],
            labelKey: qq.pressHints.secondary
          }));
          const Yq = null === (gq = qq.pressHints) || void 0 === gq ? void 0 : gq.back;
          Yq && Eq.push({
            actions: ["inventoryClose"],
            labelKey: Yq
          });
          const lq = [];
          qq.openButtonCloses && lq.push("inventory"), Yq || lq.push("inventoryClose"), lq.length > 0 && Eq.push({
            actions: lq,
            labelKey: "inventoryClose"
          })
        }
        return Eq.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), qq.hasCategories ? Eq.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : qq.hasList && Eq.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), Eq
      };
    var Iq = gq(8624),
      eq = gq(8618);
    class Dq {
      constructor(qq) {
        this.probes = qq, this.byContainer = new Map, this.byParent = new Map
      }
      find(qq, Eq) {
        const gq = nq(qq, "y", Eq);
        if (!gq) return null;
        let Yq = this.byContainer.get(gq);
        return Yq || (this.probes.push({
          element: gq,
          rect: YE(gq.getBoundingClientRect())
        }), Yq = {
          container: gq,
          box: Tq(gq),
          group: gE(gq)
        }, this.byContainer.set(gq, Yq)), Yq
      }
      findForParent(qq, Eq) {
        let gq = this.byParent.get(qq);
        return void 0 === gq && (gq = this.find(qq, Eq), this.byParent.set(qq, gq)), gq
      }
    }
    const qE = new WeakMap;
    let EE = 0;
    const gE = qq => {
        let Eq = qE.get(qq);
        return Eq || (Eq = "el:" + EE++, qE.set(qq, Eq)), Eq
      },
      YE = qq => ({
        left: qq.left,
        top: qq.top,
        width: qq.width,
        height: qq.height
      }),
      lE = qq => qq.width > 0 && qq.height > 0,
      OE = (qq, Eq) => lE(qq) && qq.left + qq.width > 0 && qq.top + qq.height > 0 && qq.left < Eq.width && qq.top < Eq.height,
      mE = (qq, Eq, gq) => {
        const Yq = qq.top + qq.height / 2;
        return OE(qq, Eq) && (!gq || Yq >= gq.top && Yq <= gq.bottom)
      },
      xE = qq => ({
        x: qq.left + qq.width / 2,
        y: qq.top + qq.height / 2
      }),
      AE = (qq, Eq, gq) => qq < 0 ? gq >= 0 ? 0 : Eq - 1 : ((qq + gq) % Eq + Eq) % Eq,
      cE = qq => "Left" === qq || "Right" === qq,
      uE = (qq, Eq, gq) => {
        const Yq = cE(gq),
          lq = Yq ? qq.top : qq.left,
          Oq = Yq ? qq.height : qq.width,
          mq = Yq ? Eq.top : Eq.left,
          xq = Yq ? Eq.height : Eq.width,
          Aq = Math.max(0, Math.max(mq - (lq + Oq), lq - (mq + xq)));
        return Oq > 1.5 * xq ? {
          gap: Aq,
          offset: Math.max(0, mq - lq) + .1 * Math.max(0, lq - mq)
        } : {
          gap: Aq,
          offset: Math.abs(mq + xq / 2 - (lq + Oq / 2))
        }
      },
      BE = (qq, Eq, gq) => {
        const Yq = ((qq, Eq, gq) => {
          const Yq = xE(qq),
            lq = xE(Eq),
            Oq = cE(gq) ? Math.min(qq.width, Eq.width) / 4 : Math.min(qq.height, Eq.height) / 4;
          switch (gq) {
            case "Right":
              return lq.x - Yq.x >= Oq ? Math.max(0, Eq.left - (qq.left + qq.width)) : null;
            case "Left":
              return Yq.x - lq.x >= Oq ? Math.max(0, qq.left - (Eq.left + Eq.width)) : null;
            case "Down":
              return lq.y - Yq.y >= Oq ? Math.max(0, Eq.top - (qq.top + qq.height)) : null;
            case "Up":
              return Yq.y - lq.y >= Oq ? Math.max(0, qq.top - (Eq.top + Eq.height)) : null
          }
        })(qq, Eq, gq);
        if (null === Yq) return null;
        const lq = uE(qq, Eq, gq);
        return Yq + 3 * lq.gap + .5 * lq.offset
      },
      WE = (qq, Eq) => Eq.visible || null !== Eq.scrollGroup && Eq.scrollGroup === qq.scrollGroup,
      NE = (qq, Eq, gq, Yq) => {
        let lq = null,
          Oq = 1 / 0;
        for (const mq of Eq) {
          if (mq.key === qq.key || !WE(qq, mq) || !Yq(mq)) continue;
          const Eq = BE(qq.rect, mq.rect, gq);
          null !== Eq && Eq < Oq && (lq = mq, Oq = Eq)
        }
        return lq
      },
      aE = (qq, Eq, gq) => {
        const Yq = NE(qq, Eq, gq, (() => !0));
        if (!Yq || cE(gq) || null === qq.scrollGroup || Yq.scrollGroup === qq.scrollGroup) return Yq;
        const lq = NE(qq, Eq, gq, (Eq => 0 === uE(qq.rect, Eq.rect, gq).gap));
        return null !== lq && void 0 !== lq ? lq : Yq
      },
      VE = (qq, Eq, gq) => {
        let Yq = null,
          lq = 1 / 0;
        for (const Oq of Eq) {
          if (!Oq.visible || gq && !gq(Oq)) continue;
          const Eq = xE(Oq.rect),
            mq = Math.hypot(Eq.x - qq.x, Eq.y - qq.y);
          mq < lq && (Yq = Oq, lq = mq)
        }
        return Yq
      },
      dE = qq => {
        const {
          rect: Eq,
          clip: gq
        } = qq;
        if (!gq) return Eq;
        const Yq = Math.max(Eq.left, gq.left),
          lq = Math.max(Eq.top, gq.top);
        return {
          left: Yq,
          top: lq,
          width: Math.min(Eq.left + Eq.width, gq.left + gq.width) - Yq,
          height: Math.min(Eq.top + Eq.height, gq.top + gq.height) - lq
        }
      },
      jE = (qq, Eq) => Eq.x >= qq.left && Eq.x < qq.left + qq.width && Eq.y >= qq.top && Eq.y < qq.top + qq.height,
      HE = (qq, Eq) => {
        let gq = null,
          Yq = 1 / 0;
        for (const lq of Eq) {
          const Eq = dE(lq);
          (lq.visible || lq.clip) && jE(Eq, qq) && (Eq.width * Eq.height < Yq && (gq = lq, Yq = Eq.width * Eq.height))
        }
        return gq
      },
      oE = qq => {
        let Eq = null;
        for (const gq of qq) {
          if (!gq.visible) continue;
          if (!Eq) {
            Eq = gq;
            continue
          }
          const qq = Math.min(Eq.rect.height, gq.rect.height) / 2,
            Yq = gq.rect.top - Eq.rect.top;
          (Yq < -qq || Math.abs(Yq) <= qq && gq.rect.left < Eq.rect.left) && (Eq = gq)
        }
        return Eq
      },
      PE = (qq, Eq, gq, Yq, lq) => {
        const Oq = lq % Eq,
          mq = Math.floor(lq / Eq);
        return {
          left: qq.left + Oq * gq,
          top: qq.top + mq * Yq,
          width: qq.width,
          height: qq.height
        }
      },
      QE = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      yE = ".LazyLoadedItemWrapper",
      tE = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      rE = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      vE = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      hE = qq => qq.hasAttribute("data-inven-idx") ? "slot" : qq.hasAttribute("data-recipe-key") ? "recipe" : qq.hasAttribute("data-craft-ingredient") || (0, eq.w)(qq) ? "info" : (0, Fq.P)(qq) ? "textField" : "button",
      nE = (qq, Eq) => "slot" === Eq ? Number(qq.getAttribute("data-inven-idx")) : null,
      bE = qq => qq.matches(yE) ? qq.querySelector(tE) : qq,
      iE = qq => {
        var Eq, gq;
        return {
          element: qq,
          recipe: null !== (Eq = qq && (null === (gq = bE(qq)) || void 0 === gq ? void 0 : gq.getAttribute("data-recipe-key"))) && void 0 !== Eq ? Eq : null
        }
      },
      ZE = qq => {
        const Eq = bE(qq);
        if (!Eq) return {
          kind: "pending",
          idx: null
        };
        const gq = hE(Eq);
        return {
          kind: gq,
          idx: nE(Eq, gq)
        }
      },
      fE = qq => {
        const Eq = [];
        for (const [gq, Yq] of rE) {
          qq.matches(Yq) && Eq.push([gq, qq]);
          for (const lq of qq.querySelectorAll(Yq)) Eq.push([gq, lq])
        }
        return Eq
      },
      ME = (qq, Eq) => {
        for (const [gq, Yq] of qq)
          if (Yq.contains(Eq)) return gq;
        return "other"
      },
      TE = (qq, Eq, gq, Yq, lq, Oq, mq, xq) => {
        var Aq;
        const cq = qq.children,
          uq = YE(cq[0].getBoundingClientRect()),
          Bq = [{
            element: cq[0],
            rect: uq
          }];
        if (Oq.push(Bq[0]), 0 === uq.width || 0 === uq.height) return;
        let Wq = 1;
        for (; Wq < cq.length && Math.abs(cq[Wq].getBoundingClientRect().top - uq.top) < 1;) Wq++;
        const Nq = qq => {
            const Eq = {
              element: cq[qq],
              rect: YE(cq[qq].getBoundingClientRect())
            };
            return Oq.push(Eq), Bq.push(Eq), Eq.rect
          },
          aq = Wq > 1 ? Nq(1).left - uq.left : uq.width,
          Vq = cq.length > Wq ? Nq(Wq).top - uq.top : uq.height,
          dq = mq.find(qq, Eq);
        let jq = null;
        if (dq) {
          var Hq;
          const {
            container: qq,
            box: Eq
          } = dq;
          jq = null !== (Hq = xq.get(qq)) && void 0 !== Hq ? Hq : null, jq || (jq = {
            top: qq.scrollTop,
            left: qq.scrollLeft,
            box: Eq,
            viewport: Yq,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, xq.set(qq, jq)), jq.probes.push(...Bq)
        }
        const oq = lq.length;
        for (let tq = 0; tq < cq.length; tq++) {
          var Pq, Qq, yq;
          const qq = cq[tq],
            Eq = PE(uq, Wq, aq, Vq, tq),
            Oq = qq.firstElementChild ? qq.querySelector(tE) : null,
            mq = Oq ? hE(Oq) : "pending";
          lq.push({
            key: gE(qq),
            rect: Eq,
            panel: gq,
            scrollGroup: null !== (Pq = null === dq || void 0 === dq ? void 0 : dq.group) && void 0 !== Pq ? Pq : null,
            visible: mE(Eq, Yq, null === dq || void 0 === dq ? void 0 : dq.box),
            clip: null !== (Qq = null === dq || void 0 === dq ? void 0 : dq.box) && void 0 !== Qq ? Qq : null,
            element: qq,
            kind: mq,
            idx: Oq ? nE(Oq, mq) : null,
            scrollContainer: null !== (yq = null === dq || void 0 === dq ? void 0 : dq.container) && void 0 !== yq ? yq : null
          })
        }
        null === (Aq = jq) || void 0 === Aq || Aq.targets.push(...lq.slice(oq))
      },
      zE = qq => qq instanceof Element && null !== qq.closest(yE),
      SE = qq => null !== qq.scrollContainer && zE(qq.element);
    class pE {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(qq, Eq, gq, Yq) {
        this.latched = {
          source: qq,
          focusKey: Eq,
          sinceMs: gq,
          hold: {
            id: ++this.presses,
            holdMs: Yq
          }
        }
      }
      update(qq, Eq, gq) {
        const Yq = this.latched;
        return Yq ? qq && Eq === Yq.focusKey ? gq - Yq.sinceMs < Yq.hold.holdMs ? null : (this.latched = null, Yq.source) : (this.latched = null, null) : null
      }
      getHold() {
        var qq, Eq;
        return null !== (qq = null === (Eq = this.latched) || void 0 === Eq ? void 0 : Eq.hold) && void 0 !== qq ? qq : null
      }
      reset() {
        this.latched = null
      }
    }
    var GE = gq(8629);
    const LE = {
        kind: "none"
      },
      JE = qq => ({
        x: qq.clientX,
        y: qq.clientY
      }),
      kE = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class RE {
      constructor() {
        this.hovered = LE, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(qq, Eq, gq, Yq, lq) {
        const Oq = null !== Eq ? {
            kind: "slot",
            idx: Eq
          } : gq ? {
            kind: "element",
            element: gq
          } : LE,
          mq = `${lq}|${Math.round(Yq.clientX)},${Math.round(Yq.clientY)}`,
          xq = (Aq = this.hovered, cq = Oq, "slot" === Aq.kind && "slot" === cq.kind ? Aq.idx === cq.idx : "element" === Aq.kind && "element" === cq.kind ? Aq.element === cq.element : Aq.kind === cq.kind);
        var Aq, cq;
        if (xq && mq === this.signature) return;
        const uq = !xq || lq !== this.holding || "" === this.signature;
        this.signature = mq, this.holding = lq, this.lastPoint = Yq;
        const Bq = this.hovered;
        if (this.hovered = Oq, "slot" === Oq.kind) return this.leaveElement(Bq, null, Yq), void(uq ? qq.hover(Oq.idx, Yq) : qq.moveTo(Yq));
        if (xq) return void("element" === Oq.kind ? (0, Fq.s)(Oq.element, Oq.element, JE(Yq)) : qq.hover(null, Yq));
        qq.hover(null, Yq);
        const Wq = "element" === Oq.kind ? Oq.element : null;
        "element" === Bq.kind ? (0, Fq.s)(Bq.element, Wq, JE(Yq)) : Wq && (0, Fq.s)(null, Wq, JE(Yq))
      }
      invalidate() {
        this.signature = ""
      }
      clear(qq) {
        const Eq = this.hovered;
        this.hovered = LE, this.signature = "", "none" !== Eq.kind && (this.leaveElement(Eq, null, this.lastPoint), qq && "slot" === Eq.kind && qq.hover(null, this.lastPoint))
      }
      leaveElement(qq, Eq, gq) {
        "element" === qq.kind && (0, Fq.s)(qq.element, Eq, JE(gq))
      }
    }
    class UE {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(qq, Eq) {
        tq(qq) && (this.lastTiltedMs = Eq)
      }
      allowsClick(qq) {
        return qq - this.lastTiltedMs > 150
      }
    }
    class FE {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(qq) {
        return 0 !== (0, aq.j)(qq, .2).y
      }
      step(qq, Eq, gq) {
        qq !== this.container && (this.container = qq, this.remainder = 0);
        const Yq = rq(Eq, gq).y;
        if (0 === Yq) return this.remainder = 0, !1;
        const lq = this.remainder + Yq,
          Oq = Math.trunc(lq);
        if (this.remainder = lq - Oq, 0 === Oq) return !1;
        const mq = qq.scrollTop;
        return qq.scrollTop = mq + Oq, qq.scrollTop !== mq
      }
      current() {
        var qq;
        return null !== (qq = this.container) && void 0 !== qq && qq.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var sE = gq(8638);
    const XE = "[data-pad-inventory-default]",
      wE = ".HotBarGameItemsContainer .InvenItem.Selected",
      KE = {
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
      CE = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      IE = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      eE = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      DE = [...IE, ...eE],
      qg = () => {
        return qq = (0, uq.i)("inventory"), !DE.map(uq.i).includes(qq) && !(0, aq.H)(qq);
        var qq
      },
      Eg = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      gg = (qq, Eq) => {
        const gq = !(null === Eq || void 0 === Eq || !Eq.isHolding());
        return function(qq, Eq) {
          const gq = qq.find((qq => qq.visible && Eq(qq)));
          if (gq) return gq;
          for (var Yq = arguments.length, lq = new Array(Yq > 2 ? Yq - 2 : 0), Oq = 2; Oq < Yq; Oq++) lq[Oq - 2] = arguments[Oq];
          for (const mq of lq) {
            const Eq = oE(qq.filter(mq));
            if (Eq) return Eq
          }
          return oE(qq)
        }(qq, (qq => {
          const {
            element: Eq
          } = qq;
          return Eq.matches(XE) || null !== Eq.querySelector(XE) || Eq.matches(wE)
        }), (qq => "slot" === qq.kind ? gq || null !== qq.idx && !(null === Eq || void 0 === Eq || !Eq.hasItemAt(qq.idx)) : "recipe" === qq.kind || "pending" === qq.kind), (qq => "slot" === qq.kind || "button" === qq.kind))
      };
    class Yg {
      constructor() {
        this.set = null, this.observer = new MutationObserver((qq => {
          qq.some((qq => !zE(qq.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = qq => {
          this.scrolled(qq.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const qq = [],
              Eq = [];
            let gq = !1;
            const Yq = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              lq = new Map,
              Oq = new Dq(Eq);
            for (const Bq of document.querySelectorAll(QE)) {
              const uq = fE(Bq);
              gq ||= null !== Bq.querySelector(".CreativeCategoryTab");
              for (const gq of Bq.querySelectorAll(`${yE}:first-child`)) {
                const mq = gq.parentElement;
                TE(mq, Bq, ME(uq, mq), Yq, qq, Eq, Oq, lq)
              }
              for (const gq of Bq.querySelectorAll(tE)) {
                var mq, xq, Aq, cq;
                if (gq.closest(yE) || gq.closest("[data-pad-ignore]")) continue;
                const Wq = null === (mq = gq.parentElement) || void 0 === mq ? void 0 : mq.closest(tE);
                if (Wq && Bq.contains(Wq)) continue;
                const Nq = hE(gq),
                  aq = nE(gq, Nq);
                if (-1 === aq) continue;
                const Vq = YE(gq.getBoundingClientRect());
                Eq.push({
                  element: gq,
                  rect: Vq
                });
                const dq = Oq.findForParent(gq.parentElement, Bq),
                  jq = dq && !lq.has(dq.container) ? dq : null;
                (jq ? lE(Vq) : OE(Vq, Yq)) && qq.push({
                  key: gE(gq),
                  rect: Vq,
                  panel: ME(uq, gq),
                  scrollGroup: null !== (xq = null === jq || void 0 === jq ? void 0 : jq.group) && void 0 !== xq ? xq : null,
                  visible: mE(Vq, Yq, null === jq || void 0 === jq ? void 0 : jq.box),
                  clip: null !== (Aq = null === jq || void 0 === jq ? void 0 : jq.box) && void 0 !== Aq ? Aq : null,
                  element: gq,
                  kind: Nq,
                  idx: aq,
                  scrollContainer: null !== (cq = null === jq || void 0 === jq ? void 0 : jq.container) && void 0 !== cq ? cq : null
                })
              }
            }
            for (const [Bq, Wq] of lq) Wq.holdsOthers = Eq.some((qq => qq.element !== Bq && Bq.contains(qq.element) && !qq.element.closest(yE)));
            const uq = new Map;
            for (const Bq of qq) uq.set(Bq.element, Bq);
            return {
              targets: qq,
              byElement: uq,
              hasCategories: gq,
              probes: Eq,
              scrollers: lq
            }
          })(), this.observer.disconnect();
          for (const qq of document.querySelectorAll(QE)) this.observer.observe(qq, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(qq) {
        !this.set || qq instanceof Element && ((qq, Eq) => {
          const gq = qq.scrollers.get(Eq);
          if (!gq || gq.holdsOthers || Eq.scrollLeft !== gq.left) return !1;
          const Yq = Eq.scrollTop - gq.top;
          if (0 === Yq) return !0;
          gq.top = Eq.scrollTop;
          for (const lq of gq.probes) lq.rect.top -= Yq;
          for (const lq of gq.targets) lq.rect.top -= Yq, lq.visible = mE(lq.rect, gq.viewport, gq.box);
          return !0
        })(this.set, qq) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((qq => {
          return Eq = qq.rect, gq = qq.element.getBoundingClientRect(), !(Eq.left === gq.left && Eq.top === gq.top && Eq.width === gq.width && Eq.height === gq.height);
          var Eq, gq
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const lg = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(aq.C.map((qq => [qq, (0, Vq.b)(aq.F)]))), this.stickRepeat = new aq.c((0, Vq.b)(aq.ib)), this.pageUpTimer = (0, Vq.b)(aq.ab), this.pageDownTimer = (0, Vq.b)(aq.ab), this.stickGate = new Qq, this.pointer = null, this.activePress = null, this.dropLatch = new pE, this.scroller = new FE, this.scrollStickClick = new UE, this.hover = new RE, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new Rq, this.targets = new Yg, this.hasCategories = !1, this.wasShowing = !1, this.state = GE.c, this.isActive = () => (0, Iq.e)(), this.isShowing = () => "inventory" === Bq.c.getActiveConsumerName() && (0, Nq.k)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, Iq.d)()), (0, Iq.e)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var qq;
            this.reopenSlotIdx = null !== (qq = this.focused ? ZE(this.focused).idx : null) && void 0 !== qq ? qq : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, Iq.l)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = qq => {
            (0, xq.unstable_batchedUpdates)((() => {
              this.frame(qq)
            }))
          }, this.shouldBlockRealPointer = qq => qq.isTrusted && !(0, jq.s)(qq) && this.isShowing(), this.noteRealPointer = qq => {
            qq instanceof MouseEvent && qq.isTrusted && !(0, jq.s)(qq) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = qq.clientX, this.lastRealPointer.y = qq.clientY)
          }, this.wakePressActs = qq => {
            var Eq;
            return qq === (0, uq.i)("inventoryClose") ? !(null !== (Eq = (0, Iq.d)()) && void 0 !== Eq && Eq.isHolding()) : !(qq !== (0, uq.i)("inventory") || !qg()) || ((0, aq.H)(qq) ? this.isNavButton(qq) : eE.some((Eq => (0, uq.i)(Eq) === qq)))
          }
        }
        frame(qq) {
          var Eq, gq, Yq, lq, Oq;
          const mq = (0, Iq.d)();
          if (!(0, Nq.k)()) return void(this.wasShowing && (this.endInteraction(mq), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), qq.wokeDevice && this.focusWakePointer(!(null === mq || void 0 === mq || !mq.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, Wq.i)().inventoryNavigation || this.pointer || this.engagePointer();
          const xq = performance.now();
          this.handleNavigation(qq, xq), this.handlePanels(qq), this.handlePaging(qq, xq), this.handleScroll(qq), this.handleButtons(qq, xq, mq), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const Aq = this.ensureFocus(),
            cq = this.focusContext(mq);
          this.ring.show(Aq);
          const Bq = "slot" === cq.kind ? cq.idx : null,
            aq = null !== (Eq = null === (gq = cq.actionElement) || void 0 === gq ? void 0 : gq.querySelector(".DoCraftItem")) && void 0 !== Eq ? Eq : cq.actionElement;
          this.pointer ? (this.hover.sync(mq, Bq, aq, ((qq, Eq) => {
            const gq = Eq ? kE() : 0;
            return {
              clientX: qq.x - gq,
              clientY: qq.y - gq
            }
          })(this.pointer, cq.holding), cq.holding), Xq.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: qq.isHeld((0, uq.i)("inventoryPrimary"))
          })) : Aq && this.focused && this.hover.sync(mq, Bq, aq, ((qq, Eq) => {
            if (!Eq) return {
              clientX: qq.left + qq.width - 10,
              clientY: qq.top + qq.height / 2 - 10
            };
            const gq = kE();
            return {
              clientX: qq.left + qq.width / 2 - gq,
              clientY: qq.top + qq.height / 2 - gq
            }
          })(Aq, cq.holding), cq.holding), this.publishState({
            showing: !0,
            kind: cq.kind,
            holding: cq.holding,
            slotHasItem: cq.slotHasItem,
            pressHints: null !== (Yq = null === (lq = cq.press) || void 0 === lq ? void 0 : lq.hints) && void 0 !== Yq ? Yq : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && SE(this.focusTarget),
            openButtonCloses: qg(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === cq.kind && !(null === (Oq = cq.actionElement) || void 0 === Oq || !Oq.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(qq) {
          var Eq;
          const gq = (0, Nq.e)();
          if (!gq) return;
          this.targets.revalidate();
          const Yq = this.getTargets().targets;
          this.setFocus(null !== (Eq = HE(gq, Yq)) && void 0 !== Eq ? Eq : qq ? VE(gq, Yq, (qq => {
            let {
              rect: Eq
            } = qq;
            const Yq = Math.max(Eq.left - gq.x, 0, gq.x - (Eq.left + Eq.width)),
              lq = Math.max(Eq.top - gq.y, 0, gq.y - (Eq.top + Eq.height));
            return Math.hypot(Yq, lq) <= Math.min(Eq.width, Eq.height) / 2
          })) : null, !1), "cursor" === (0, Wq.i)().inventoryNavigation && (this.pointer = {
            x: gq.x,
            y: gq.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const qq = this.lastRealPointer;
          if (!qq || "keyboardMouse" !== Aq.b.get("activeInputDevice")) return;
          const Eq = document.elementFromPoint(qq.x, qq.y);
          Eq && (0, Fq.s)(null, Eq, qq)
        }
        endInteraction(qq) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const Eq of this.dpadTimers.values()) Eq.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(qq), this.ring.hide(), this.releasePointer(), this.publishState(GE.c)
        }
        getTargets() {
          const qq = this.targets.get();
          return this.hasCategories = qq.hasCategories, qq
        }
        currentTarget() {
          var qq;
          return this.focused && null !== (qq = this.getTargets().byElement.get(this.focused)) && void 0 !== qq ? qq : null
        }
        readFocusRect() {
          const qq = this.focused;
          if (null === qq || void 0 === qq || !qq.isConnected || !qq.closest(QE)) return null;
          const Eq = qq.getBoundingClientRect();
          return Eq.width > 0 && Eq.height > 0 ? {
            left: Eq.left,
            top: Eq.top,
            width: Eq.width,
            height: Eq.height
          } : null
        }
        ensureFocus() {
          const qq = this.readFocusRect();
          if (qq || this.pointer) return qq;
          const {
            targets: Eq,
            byElement: gq
          } = this.getTargets();
          let Yq = null,
            lq = !1;
          if (this.lastRect) Yq = VE(xE(this.lastRect), Eq);
          else {
            var Oq, mq;
            const qq = ((qq, Eq) => {
                const gq = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return gq ? gg(qq.filter((qq => gq.contains(qq.element))), Eq) : null
              })(Eq, (0, Iq.d)()),
              xq = Eq.find((qq => null !== qq.idx && qq.idx === this.reopenSlotIdx)),
              Aq = document.querySelector(wE);
            lq = null !== qq || void 0 !== xq, Yq = null !== (Oq = null !== (mq = null !== qq && void 0 !== qq ? qq : xq) && void 0 !== mq ? mq : Aq && gq.get(Aq)) && void 0 !== Oq ? Oq : oE(Eq)
          }
          return this.setFocus(Yq, lq), this.lastRect
        }
        setFocus(qq) {
          let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          qq && (this.focused = qq.element, this.focusTarget = qq, this.panelMemory.set(qq.panel, qq.element), Eq && qq.scrollContainer && ((qq, Eq) => {
            const gq = qq.getBoundingClientRect(),
              Yq = Tq(Eq),
              lq = Eq.scrollTop;
            return gq.top < Yq.top ? Eq.scrollTop -= Yq.top - gq.top : gq.bottom > Yq.bottom && (Eq.scrollTop += gq.bottom - Yq.bottom), Eq.scrollTop !== lq
          })(qq.element, qq.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, Wq.i)().inventoryNavigation) {
              if (this.lastRect) {
                const qq = xE(this.lastRect);
                this.pointer = {
                  x: qq.x,
                  y: qq.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const qq = this.lastRect ? xE(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: qq.x,
            y: qq.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, Xq.hide()
        }
        hoverAtPointer() {
          var qq;
          const Eq = HE(this.pointer, this.getTargets().targets);
          this.focusTarget = Eq, (null === Eq || void 0 === Eq ? void 0 : Eq.element) !== this.focused && (this.focused = null !== (qq = null === Eq || void 0 === Eq ? void 0 : Eq.element) && void 0 !== qq ? qq : null, Eq && (this.panelMemory.set(Eq.panel, Eq.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(qq, Eq) {
          const gq = this.focusTarget,
            Yq = gq && (0, Wq.i)().cursorMagnetism ? xE(dE(gq)) : null;
          this.pointer = yq(this.pointer, {
            stick: qq.leftStick,
            moveDeadzone: (0, Wq.i)().moveDeadzone,
            dpad: Eq,
            dtMs: qq.dtMs,
            cursorSpeedPercent: (0, Wq.i)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: Yq
            }
          })
        }
        move(qq) {
          this.targets.revalidate();
          const Eq = this.currentTarget();
          Eq && this.setFocus(aE(Eq, this.getTargets().targets, qq))
        }
        step(qq) {
          const Eq = this.pointer;
          if (Eq && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((qq, Eq, gq) => {
            var Yq;
            const lq = {
              key: "",
              rect: {
                left: qq.x,
                top: qq.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (Yq = aE(lq, Eq, gq)) && void 0 !== Yq ? Yq : VE(qq, Eq)
          })(Eq, this.getTargets().targets, qq));
          this.move(qq)
        }
        isNavButton(qq) {
          return !IE.some((Eq => (0, uq.i)(Eq) === qq)) && !(qq === (0, uq.i)("inventory") && qg())
        }
        handleNavigation(qq, Eq) {
          const gq = (0, Wq.i)().inventoryNavigation,
            Yq = {
              x: 0,
              y: 0
            };
          let lq = null;
          for (const Aq of aq.C) {
            const Oq = this.isNavButton(Aq) && qq.isHeld(Aq);
            Oq && (Yq.x += KE[Aq].x, Yq.y += KE[Aq].y), this.dpadTimers.get(Aq).update(Oq, Eq) && "cursor" !== gq && (lq ??= Aq)
          }
          const Oq = this.stickGate.update(qq.leftStick, (0, Wq.i)().moveDeadzone);
          if (lq && (this.step(lq), this.stickGate.lock()), "slot" !== gq) {
            const Eq = ((qq, Eq, gq, Yq) => "hybrid" !== qq ? "cursor" === qq : !Yq && (Eq || gq))(gq, null !== this.pointer, Oq, null !== lq);
            return Eq && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(qq, "cursor" === gq ? Yq : {
              x: 0,
              y: 0
            }))
          }
          const mq = (0, aq.j)(qq.leftStick, (0, Wq.i)().moveDeadzone),
            xq = this.stickRepeat.update(Oq ? (0, aq.kb)(mq) : null, Eq);
          xq && this.move(xq)
        }
        applyCategoryPlace() {
          const qq = this.placeAfterCategory;
          if (!qq) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const Eq = VE(xE(qq.rect), this.getTargets().targets, (Eq => Eq.scrollGroup === qq.scrollGroup));
          this.setFocus(Eq, !1)
        }
        applyFocusRequest() {
          const qq = (0, Iq.l)();
          qq && (this.targets.invalidate(), this.setFocus((0, Iq.c)(this.getTargets().targets, qq)))
        }
        handlePanels(qq) {
          var Eq, gq, Yq;
          const lq = qq.wasPressed((0, uq.i)("inventoryPanelPrevious")),
            Oq = qq.wasPressed((0, uq.i)("inventoryPanelNext"));
          if (!lq && !Oq) return;
          const {
            targets: mq
          } = this.getTargets(), xq = (Aq = ((qq, Eq) => {
            const gq = [];
            for (const lq of qq) lq.visible && !gq.includes(lq.panel) && gq.push(lq.panel);
            const Yq = qq => {
              const Yq = Eq.indexOf(qq);
              return -1 === Yq ? Eq.length + gq.indexOf(qq) : Yq
            };
            return gq.sort(((qq, Eq) => Yq(qq) - Yq(Eq)))
          })(mq, vE), cq = null !== (Eq = null === (gq = this.focusTarget) || void 0 === gq ? void 0 : gq.panel) && void 0 !== Eq ? Eq : null, Bq = Oq ? 1 : -1, 0 === Aq.length ? null : Aq[AE(null === cq ? -1 : Aq.indexOf(cq), Aq.length, Bq)]);
          var Aq, cq, Bq;
          if (null === xq) return;
          const Wq = this.panelMemory.get(xq),
            Nq = mq.filter((qq => qq.panel === xq)),
            aq = null !== (Yq = Nq.find((qq => qq.element === Wq && qq.visible))) && void 0 !== Yq ? Yq : gg(Nq, (0, Iq.d)());
          this.setFocus(aq)
        }
        handlePaging(qq, Eq) {
          const gq = (0, uq.i)("menuPageUp"),
            Yq = (0, uq.i)("menuPageDown"),
            lq = this.pageUpTimer.update(qq.isHeld(gq), Eq),
            Oq = this.pageDownTimer.update(qq.isHeld(Yq), Eq);
          if (!lq && !Oq) return;
          const mq = Oq ? 1 : -1;
          if (!qq.wasPressed(Oq ? Yq : gq) && this.hasCategories) return;
          if ((qq => {
              const Eq = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === Eq.length) return !1;
              const gq = Eq.findIndex((qq => qq.classList.contains("Selected"))),
                Yq = Eq[AE(gq, Eq.length, qq)];
              return (0, Fq.p)(Yq, (0, Fq.D)(Yq)), !0
            })(mq)) {
            var xq, Aq;
            this.targets.invalidate();
            const qq = null !== (xq = null === (Aq = this.focusTarget) || void 0 === Aq ? void 0 : Aq.scrollGroup) && void 0 !== xq ? xq : null,
              Eq = this.readFocusRect();
            return void(this.placeAfterCategory = null !== qq && Eq && !this.pointer ? {
              rect: Eq,
              scrollGroup: qq
            } : null)
          }
          const {
            targets: cq
          } = this.getTargets(), Bq = this.currentTarget(), Wq = Bq && SE(Bq) ? Bq : cq.find((qq => SE(qq) && qq.visible));
          if (!Wq) return;
          const Nq = ((qq, Eq, gq, Yq) => {
            if (null === qq.scrollGroup) return null;
            const lq = xE(qq.rect),
              Oq = lq.x,
              mq = lq.y + ("Down" === gq ? Yq : -Yq);
            let xq = null,
              Aq = 1 / 0;
            for (const cq of Eq) {
              if (cq.scrollGroup !== qq.scrollGroup || cq.key === qq.key) continue;
              const Eq = xE(cq.rect);
              if ("Down" === gq ? Eq.y <= lq.y : Eq.y >= lq.y) continue;
              const Yq = Math.hypot(Eq.x - Oq, Eq.y - mq);
              Yq < Aq && (xq = cq, Aq = Yq)
            }
            return xq
          })(Wq, cq, mq > 0 ? "Down" : "Up", Wq.scrollContainer.clientHeight);
          this.setFocus(null !== Nq && void 0 !== Nq ? Nq : Wq)
        }
        handleScroll(qq) {
          var Eq, gq, Yq, lq, Oq, mq;
          if (!this.scroller.isScrolling(qq.rightStick)) return void this.scroller.reset();
          const {
            targets: xq
          } = this.getTargets(), Aq = this.pointer, cq = !Aq && this.focusTarget && SE(this.focusTarget) ? this.focusTarget.scrollContainer : null, uq = Aq && (null === (Eq = xq.find((qq => qq.clip && jE(qq.clip, Aq)))) || void 0 === Eq ? void 0 : Eq.scrollContainer), Bq = null !== (gq = null !== (Yq = null !== (lq = this.scroller.current()) && void 0 !== lq ? lq : uq) && void 0 !== Yq ? Yq : cq) && void 0 !== gq ? gq : null === (Oq = xq.find(SE)) || void 0 === Oq ? void 0 : Oq.scrollContainer;
          if (!Bq || !this.scroller.step(Bq, qq.rightStick, qq.dtMs)) return;
          this.targets.scrolled(Bq);
          const Wq = Aq || (null === (mq = this.focusTarget) || void 0 === mq ? void 0 : mq.scrollContainer) !== Bq ? null : this.readFocusRect();
          if (!Wq) return;
          const Nq = Tq(Bq),
            aq = xE(Wq);
          if (aq.y < Nq.top || aq.y > Nq.bottom) {
            const qq = this.focusTarget.scrollGroup,
              Eq = VE(aq, this.getTargets().targets, (Eq => Eq.scrollGroup === qq));
            this.setFocus(Eq, !1)
          }
        }
        focusContext(qq) {
          const {
            kind: Eq,
            idx: gq
          } = this.focused ? ZE(this.focused) : {
            kind: null,
            idx: null
          }, Yq = this.focused ? bE(this.focused) : null, lq = Yq ? (0, sE.d)(Yq) : null;
          return {
            kind: Eq,
            idx: gq,
            actionElement: Yq,
            press: lq,
            hasPress: null !== lq,
            hasBack: !(null === lq || void 0 === lq || !lq.back),
            holding: qq.isHolding(),
            slotHasItem: null !== gq && qq.hasItemAt(gq)
          }
        }
        handleButtons(qq, Eq, gq) {
          var Yq, lq;
          if (!this.activePress || qq.isHeld(this.activePress.button) && (Yq = this.activePress.target, lq = this.focused, null !== Yq.recipe ? iE(lq).recipe === Yq.recipe : lq === Yq.element) || this.releasePress(), this.scrollStickClick.update(qq.rightStick, Eq), !this.handleHotbarPick(qq, gq)) {
            for (const [Yq, lq] of CE) {
              const Oq = (0, uq.i)(lq);
              if (!qq.wasPressed(Oq) || "openButton" === Yq && !qg()) continue;
              if ("RS" === Oq && !this.scrollStickClick.allowsClick(Eq)) continue;
              const mq = this.focusContext(gq),
                xq = Kq(Yq, mq);
              xq && this.runIntent(xq, mq, Oq, gq)
            }
            this.handleDrop(qq, Eq, gq)
          }
        }
        handleHotbarPick(qq, Eq) {
          const gq = this.hotbarPick;
          if (!gq) return !1;
          const Yq = qq.wasPressed((0, uq.i)("inventoryPrimary")) || qq.wasPressed((0, uq.i)("inventoryHotbarSwap"));
          if (!Yq && !qq.wasPressed((0, uq.i)("inventoryClose")) && !Eq.isHolding()) return !(qq.wasPressed((0, uq.i)("inventory")) && qg());
          const lq = this.focusTarget;
          Yq && "hotbar" === (null === lq || void 0 === lq ? void 0 : lq.panel) && null !== lq.idx && lq.idx !== gq.idx && (Eq.swapWithHotbar(lq.idx, gq.idx), this.afterAction()), this.hotbarPick = null;
          const Oq = gq.element.isConnected ? this.getTargets().byElement.get(gq.element) : void 0;
          return Oq && this.setFocus(Oq), !0
        }
        startHotbarPick(qq) {
          var Eq;
          const {
            targets: gq,
            byElement: Yq
          } = this.getTargets(), lq = document.querySelector(wE), Oq = null !== (Eq = lq && Yq.get(lq)) && void 0 !== Eq ? Eq : gq.find((qq => "hotbar" === qq.panel));
          Oq && this.focused && (this.hotbarPick = {
            idx: qq,
            element: this.focused
          }, this.setFocus(Oq))
        }
        focusKey() {
          return this.focused ? gE(this.focused) : null
        }
        handleDrop(qq, Eq, gq) {
          const Yq = (0, uq.i)("inventoryDrop");
          if (qq.wasPressed(Yq)) {
            const qq = (lq = this.focusContext(gq)).holding ? {
              kind: "Fc"
            } : "slot" === lq.kind && lq.slotHasItem && null !== lq.idx ? {
              kind: "slot",
              idx: lq.idx
            } : null;
            return void(qq && (this.dropFrom(qq, !1, gq), this.dropLatch.press(qq, this.focusKey(), Eq, dq.d[(0, Wq.i)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var lq;
          const Oq = this.dropLatch.update(qq.isHeld(Yq), this.focusKey(), Eq);
          Oq && ((qq, Eq, gq) => "Fc" === qq.kind ? Eq : !Eq && gq(qq.idx))(Oq, gq.isHolding(), gq.hasItemAt) && (this.dropFrom(Oq, !0, gq), this.afterAction())
        }
        dropFrom(qq, Eq, gq) {
          "Fc" === qq.kind ? gq.dropHeld(Eq, this.slotPoint()) : gq.dropSlot(qq.idx, Eq)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (qq => {
            const Eq = xE(qq);
            return {
              clientX: Eq.x,
              clientY: Eq.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(qq, Eq, gq, Yq) {
          const lq = Eq.idx,
            Oq = Eq.actionElement;
          switch (Oq && Eg.has(qq) && (0, jq.w)(Oq), qq) {
            case "slotPrimary":
              Yq.primary(lq, this.slotPoint());
              break;
            case "slotSecondary":
              Yq.secondary(lq, this.slotPoint());
              break;
            case "slotQuickMove":
              Yq.quickMove(lq, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(lq);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(Eq.press, "pressPrimary" === qq ? "primary" : "secondary", gq);
              break;
            case "click":
              (0, Fq.p)(Oq, (0, Fq.D)(Oq));
              break;
            case "openKeyboard":
              (0, Fq.P)(Oq) && (0, Fq.L)(Oq);
              break;
            case "pressBack":
              Eq.press.back();
              break;
            case "cancel":
              Yq.cancel();
              break;
            case "close":
              return this.releasePress(), void Yq.close()
          }
          this.afterAction()
        }
        startPress(qq, Eq, gq) {
          this.releasePress(), qq.press(Eq) && (this.activePress = {
            handlers: qq,
            button: gq,
            target: iE(this.focused)
          })
        }
        releasePress() {
          var qq, Eq, gq;
          null === (qq = this.activePress) || void 0 === qq || null === (Eq = (gq = qq.handlers).release) || void 0 === Eq || Eq.call(gq), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(qq) {
          ((qq, Eq) => {
            var gq, Yq, lq, Oq, mq, xq;
            return qq.showing === Eq.showing && qq.kind === Eq.kind && qq.holding === Eq.holding && qq.slotHasItem === Eq.slotHasItem && (null === (gq = qq.pressHints) || void 0 === gq ? void 0 : gq.primary) === (null === (Yq = Eq.pressHints) || void 0 === Yq ? void 0 : Yq.primary) && (null === (lq = qq.pressHints) || void 0 === lq ? void 0 : lq.secondary) === (null === (Oq = Eq.pressHints) || void 0 === Oq ? void 0 : Oq.secondary) && (null === (mq = qq.pressHints) || void 0 === mq ? void 0 : mq.back) === (null === (xq = Eq.pressHints) || void 0 === xq ? void 0 : xq.back) && qq.hasCategories === Eq.hasCategories && qq.hasList === Eq.hasList && qq.openButtonCloses === Eq.openButtonCloses && qq.steppingSlots === Eq.steppingSlots && qq.hotbarPicking === Eq.hotbarPicking && qq.quickMoveToHotbar === Eq.quickMoveToHotbar && qq.dropStackHold === Eq.dropStackHold
          })(qq, this.state) || (this.state = qq, cq.i.TV(GE.e, qq))
        }
      },
      Og = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var mg = gq(8646),
      xg = gq(296),
      Ag = gq(1622),
      cg = gq(8081);
    const ug = "[data-pad-secondary]",
      Bg = qq => qq instanceof HTMLElement && (0, eq.p)(qq) && !(0, eq.w)(qq),
      Wg = qq => {
        const Eq = qq.querySelector(ug);
        if (Eq && Bg(Eq)) return Eq;
        for (const lq of null !== (gq = null === (Yq = qq.parentElement) || void 0 === Yq ? void 0 : Yq.children) && void 0 !== gq ? gq : []) {
          var gq, Yq;
          if (lq !== qq && lq.matches(ug) && Bg(lq)) return lq
        }
        return null
      },
      Ng = (qq, Eq, gq, Yq) => Math.max(0, Math.max(qq, gq) - Math.min(Eq, Yq)),
      ag = (qq, Eq, gq, Yq) => Math.max(0, Math.min(Eq, Yq) - Math.max(qq, gq)),
      Vg = (qq, Eq, gq) => {
        const Yq = (qq.left + qq.right) / 2,
          lq = (qq.top + qq.bottom) / 2,
          Oq = (Eq.left + Eq.right) / 2,
          mq = (Eq.top + Eq.bottom) / 2;
        if ("Left" === gq || "Right" === gq) {
          const xq = "Right" === gq ? 1 : -1;
          return {
            forwardGap: "Right" === gq ? Eq.left - qq.right : qq.left - Eq.right,
            centreForward: (Oq - Yq) * xq,
            sidewaysGap: Ng(qq.top, qq.bottom, Eq.top, Eq.bottom),
            sidewaysOverlap: ag(qq.top, qq.bottom, Eq.top, Eq.bottom),
            centreSideways: Math.abs(mq - lq),
            startSideways: Math.abs(Eq.top - qq.top),
            fromSidewaysSize: qq.bottom - qq.top,
            toSidewaysSize: Eq.bottom - Eq.top,
            toLength: Eq.right - Eq.left
          }
        }
        const xq = "Down" === gq ? 1 : -1;
        return {
          forwardGap: "Down" === gq ? Eq.top - qq.bottom : qq.top - Eq.bottom,
          centreForward: (mq - lq) * xq,
          sidewaysGap: Ng(qq.left, qq.right, Eq.left, Eq.right),
          sidewaysOverlap: ag(qq.left, qq.right, Eq.left, Eq.right),
          centreSideways: Math.abs(Oq - Yq),
          startSideways: Math.abs(Eq.left - qq.left),
          fromSidewaysSize: qq.right - qq.left,
          toSidewaysSize: Eq.right - Eq.left,
          toLength: Eq.bottom - Eq.top
        }
      },
      dg = qq => qq.centreForward > .5 && qq.forwardGap >= -qq.toLength / 2,
      jg = qq => {
        const Eq = qq.sidewaysOverlap > 0 ? 0 : 2 * qq.fromSidewaysSize,
          gq = qq.fromSidewaysSize > 1.5 * qq.toSidewaysSize ? qq.startSideways : qq.centreSideways;
        return Math.max(0, qq.forwardGap) + 3 * qq.sidewaysGap + Eq + .1 * gq
      },
      Hg = (qq, Eq) => ag(qq.top, qq.bottom, Eq.top, Eq.bottom) > 0 || Eq.bottom - Eq.top > Eq.right - Eq.left,
      og = (qq, Eq, gq, Yq, lq, Oq) => {
        const mq = lq ? Qg(qq, Eq, gq, lq) : new Set,
          xq = tg(qq, Eq, gq, mq);
        return xq < 0 && mq.size > 0 && Oq ? Pg(qq, Eq, gq, Oq) : Yq && xq >= 0 ? yg(qq, Eq, gq, Yq, xq, mq) : xq
      },
      Pg = (qq, Eq, gq, Yq) => {
        const lq = new Set,
          Oq = tg(qq, Eq, "Up", lq) >= 0,
          mq = tg(qq, Eq, "Down", lq) >= 0,
          xq = new Set;
        return Eq.forEach(((Eq, gq) => {
          const lq = Eq.top + Eq.bottom < qq.top + qq.bottom;
          Yq[gq] && !(lq ? Oq : mq) || xq.add(gq)
        })), tg(qq, Eq, gq, xq)
      },
      Qg = (qq, Eq, gq, Yq) => {
        const lq = new Set;
        return "Left" !== gq && "Right" !== gq || Eq.forEach(((Eq, gq) => {
          Yq[gq] && ag(qq.top, qq.bottom, Eq.top, Eq.bottom) <= 0 && lq.add(gq)
        })), lq
      },
      yg = (qq, Eq, gq, Yq, lq, Oq) => {
        const mq = Vg(qq, Eq[lq], gq).forwardGap;
        let xq = lq,
          Aq = Yq[lq],
          cq = 1 / 0;
        return Eq.forEach(((Eq, uq) => {
          const Bq = Yq[uq];
          if (Oq.has(uq) || Bq < Aq || Bq === Aq && xq === lq) return;
          const Wq = Vg(qq, Eq, gq);
          if (!dg(Wq) || Wq.forwardGap < 0 || Wq.forwardGap >= mq) return;
          const Nq = jg(Wq);
          (Bq > Aq || Nq < cq) && (xq = uq, Aq = Bq, cq = Nq)
        })), xq
      },
      tg = (qq, Eq, gq, Yq) => {
        let lq = -1,
          Oq = 1 / 0;
        if (Eq.forEach(((Eq, mq) => {
            const xq = ((qq, Eq, gq) => {
              const Yq = Vg(qq, Eq, gq);
              if (!dg(Yq)) return null;
              const lq = Math.max(0, Yq.forwardGap);
              return Yq.sidewaysOverlap <= 0 && Yq.sidewaysGap > 2 * (lq + 1) ? null : jg(Yq)
            })(qq, Eq, gq);
            null !== xq && xq < Oq && !Yq.has(mq) && (Oq = xq, lq = mq)
          })), lq < 0) return -1;
        const mq = Eq[lq],
          xq = Vg(qq, mq, gq).forwardGap;
        let Aq = xq,
          cq = lq;
        return Eq.forEach(((Eq, Oq) => {
          if (Oq === lq || Yq.has(Oq) || !((qq, Eq, gq) => {
              const Yq = "Left" === gq || "Right" === gq,
                lq = Yq ? ag(qq.top, qq.bottom, Eq.top, Eq.bottom) : ag(qq.left, qq.right, Eq.left, Eq.right),
                Oq = Yq ? Math.min(qq.bottom - qq.top, Eq.bottom - Eq.top) : Math.min(qq.right - qq.left, Eq.right - Eq.left);
              return lq > 0 && lq >= Oq / 2
            })(Eq, mq, gq)) return;
          const uq = Vg(qq, Eq, gq);
          dg(uq) && uq.forwardGap + uq.toLength <= xq + 1 && uq.forwardGap < Aq && (Aq = uq.forwardGap, cq = Oq)
        })), cq
      },
      rg = (qq, Eq) => {
        let gq = -1,
          Yq = 1 / 0;
        return Eq.forEach(((Eq, lq) => {
          const Oq = Math.max(Eq.left - qq.x, 0, qq.x - Eq.right),
            mq = Math.max(Eq.top - qq.y, 0, qq.y - Eq.bottom),
            xq = Math.hypot(Oq, mq);
          xq < Yq && (Yq = xq, gq = lq)
        })), gq
      },
      vg = (qq, Eq) => {
        const gq = Math.min(qq.bottom - qq.top, Eq.bottom - Eq.top) / 2;
        return Math.abs(qq.top - Eq.top) > gq ? qq.top - Eq.top : qq.left - Eq.left
      },
      hg = qq => {
        let Eq = -1;
        for (let gq = 0; gq < qq.length; gq++)(Eq < 0 || vg(qq[gq], qq[Eq]) < 0) && (Eq = gq);
        return Eq
      };
    var ng = gq(1668),
      bg = gq(8655),
      ig = gq(8662);
    const Zg = qq => {
        if ("death" !== qq || "inGame" !== Aq.b.get("gameState") || "off" === (0, Wq.i)().quickChat || null === (0, ng.b)()) return !1;
        const Eq = (0, uq.i)("chat");
        return Eq !== (0, uq.i)("menuConfirm") && Eq !== (0, uq.i)("menuBack")
      },
      fg = new bg.d;
    var Mg = gq(4144),
      Tg = gq(8669);
    const zg = qq => {
        let Eq = null;
        for (const gq of qq.querySelectorAll("[data-pad-tabs]"))(0, eq.p)(gq) && (!Eq || Number(gq.dataset.padTabs) < Number(Eq.dataset.padTabs)) && (Eq = gq);
        return Eq
      },
      Sg = (qq, Eq, gq, Yq) => {
        qq.focusWhenFound((() => {
          const lq = qq.pickInitial(Eq);
          if (lq && !gq.has(lq) && (null === Yq || void 0 === Yq || !Yq.contains(lq))) return lq;
          const Oq = ((qq, Eq) => {
              const gq = Eq => qq.getEnabledCandidates(Eq).filter((qq => !qq.closest("[data-pad-tabs]")));
              for (const Yq of (0, eq.h)(Eq)) {
                const qq = gq(Yq);
                if (qq.length > 0) return qq
              }
              return gq(Eq)
            })(qq, Eq).filter((qq => !gq.has(qq))),
            mq = hg(Oq.map((qq => qq.getBoundingClientRect())));
          return mq >= 0 ? Oq[mq] : null
        }), 3e3)
      },
      pg = (qq, Eq, gq, Yq) => {
        var lq;
        const Oq = ((qq, Eq) => {
          if (0 === qq.length) return null;
          const gq = qq.findIndex((qq => "true" === qq.dataset.padSelected));
          return gq < 0 ? Eq > 0 ? qq[0] : qq[qq.length - 1] : qq[(gq + Eq + qq.length) % qq.length]
        })([...gq.querySelectorAll("[data-pad-tab]")].filter((qq => (0, eq.p)(qq) && !(0, eq.w)(qq))), Yq);
        if (!Oq) return;
        const mq = null !== (lq = null === qq || void 0 === qq ? void 0 : qq.getFocused()) && void 0 !== lq ? lq : null,
          xq = !(null === mq || void 0 === mq || !mq.isConnected) && gq.contains(mq),
          Aq = qq && !xq ? new Set(qq.getEnabledCandidates(Eq)) : null;
        (0, Fq.b)(Oq), qq && (Aq ? Sg(qq, Eq, Aq, gq) : qq.setFocus(Oq, {
          byUser: !0
        }))
      },
      Gg = qq => {
        var Eq;
        const gq = Tq(null !== (Eq = nq(qq, "x")) && void 0 !== Eq ? Eq : qq),
          Yq = (0, eq.f)(qq).filter((qq => !(0, eq.w)(qq))),
          lq = Yq.filter((qq => zq(qq.getBoundingClientRect(), gq)));
        return (lq.length > 0 ? lq : Yq).sort(((qq, Eq) => vg(qq.getBoundingClientRect(), Eq.getBoundingClientRect())))
      },
      Lg = (qq, Eq, gq) => {
        const Yq = [...Eq.querySelectorAll("[data-pad-row]")].filter(eq.p),
          lq = qq.getFocused(),
          Oq = lq ? Yq.findIndex((qq => qq.contains(lq))) : -1;
        let mq = 0,
          xq = gq > 0 ? 0 : Yq.length - 1;
        if (Oq >= 0 && lq) mq = Math.max(0, Gg(Yq[Oq]).indexOf(lq)), xq = Oq + gq;
        else if (lq) {
          const qq = lq.getBoundingClientRect(),
            Eq = Yq.map((Eq => {
              const Yq = Eq.getBoundingClientRect();
              return gq > 0 ? Yq.top >= qq.top : Yq.bottom <= qq.bottom
            }));
          xq = gq > 0 ? Eq.indexOf(!0) : Eq.lastIndexOf(!0)
        }
        for (let Aq = xq; Aq >= 0 && Aq < Yq.length; Aq += gq) {
          const Eq = Gg(Yq[Aq]);
          if (Eq.length > 0) return void qq.setFocus(Eq[Math.min(mq, Eq.length - 1)], {
            byUser: !0
          })
        }
      },
      Jg = (qq, Eq, gq) => {
        var Yq, lq;
        const Oq = null !== (Yq = null === qq || void 0 === qq ? void 0 : qq.getFocused()) && void 0 !== Yq ? Yq : null,
          mq = null !== Oq && void 0 !== Oq && Oq.closest("[data-pad-row]") ? "x" : "y",
          xq = null !== (lq = Oq ? nq(Oq, mq, Eq) : null) && void 0 !== lq ? lq : iq(Eq, mq);
        if (!xq) return;
        const Aq = Oq ? (0, Fq.D)(Oq) : null;
        if (Mq(xq, mq, gq * ("y" === mq ? xq.clientHeight : xq.clientWidth) * .85), !qq || !Aq) return;
        const cq = Tq(xq),
          uq = qq.getEnabledCandidates(Eq).filter((qq => xq.contains(qq) && zq(qq.getBoundingClientRect(), cq))),
          Bq = rg(Aq, uq.map((qq => qq.getBoundingClientRect())));
        Bq >= 0 && qq.setFocus(uq[Bq], {
          scroll: !1,
          byUser: !0
        })
      };
    let kg = null;
    const Rg = (qq, Eq) => {
        var gq, Yq;
        const lq = Eq.querySelector("[data-pad-friends-column]"),
          Oq = qq.getFocused();
        if (!lq || !Oq || !lq.contains(Oq)) return !1;
        const mq = qq.getEnabledCandidates(Eq).filter((qq => !lq.contains(qq))),
          xq = rg((0, Fq.D)(Oq), mq.map((qq => qq.getBoundingClientRect()))),
          Aq = null === (gq = kg) || void 0 === gq ? void 0 : gq.deref();
        return qq.setFocus(null !== Aq && void 0 !== Aq && Aq.isConnected ? Aq : null !== (Yq = mq[xq]) && void 0 !== Yq ? Yq : null, {
          byUser: !0
        }), !0
      },
      Ug = qq => {
        const Eq = (0, uq.i)(qq);
        return (0, aq.H)(Eq) || cg.p.some((qq => (0, uq.i)(qq) === Eq)) ? null : Eq
      },
      Fg = (qq, Eq) => {
        const gq = Ug(Eq);
        return null !== gq && qq.wasPressed(gq)
      },
      sg = function(qq, Eq, gq) {
        let Yq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const lq = (qq => {
            var Eq, gq;
            return null !== (Eq = null === (gq = zg(qq)) || void 0 === gq ? void 0 : gq.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== Eq ? Eq : null
          })(Eq),
          Oq = qq && lq ? new Set(qq.getEnabledCandidates(Eq)) : null;
        (0, mg.c)(), gq === xg.p.SETTINGS && (0, Ag.l)(Aq.b.get("openEverythingMenuName")) ? Aq.b.set({
          openEverythingMenuName: gq
        }) : (0, Ag.u)(new Event("padMenuShortcut"), gq, Yq), qq && Oq && lq && Sg(qq, Eq, Oq, lq.closest("[data-pad-tabs]"))
      },
      Xg = qq => null !== qq.closest(".Dropdown-root") || null !== qq.querySelector(".Dropdown-root.is-open"),
      wg = qq => null !== (0, Tg.e)() && "popup" !== qq.layer.kind && !zg(qq.root) && !Xg(qq.root),
      Kg = (0, Vq.b)(aq.ab),
      Cg = (0, Vq.b)(aq.ab),
      Ig = (qq, Eq, gq) => {
        if (((qq, Eq) => {
            const gq = (0, uq.i)("chat");
            return Zg(Eq) && qq.isHeld(gq) ? "hold" === fg.update(qq.wasPressed(gq), qq.isHeld(gq), performance.now(), dq.d[(0, Wq.i)().tapHoldTime].wheelMs) && (Bq.c.consumeButton(gq), cq.i.TV(ig.k), !0) : (fg.release(), !1)
          })(Eq, gq.layer.kind)) return !0;
        const Yq = gq.root;
        for (const [mq, xq] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (Eq.wasPressed((0, uq.i)(mq))) {
            const Eq = Xg(Yq) ? null : zg(Yq);
            if (Eq) pg(qq, Yq, Eq, xq);
            else if (wg(gq)) {
              var lq;
              const Eq = qq ? new Set(qq.getEnabledCandidates(Yq)) : null;
              null !== (lq = (0, Tg.e)()) && void 0 !== lq && lq(xq) && qq && Eq && Sg(qq, Yq, Eq, null)
            } else qq && Lg(qq, Yq, xq);
            return !0
          } for (const [mq, xq, Aq] of [
            ["menuPageUp", -1, Kg],
            ["menuPageDown", 1, Cg]
          ]) {
          const gq = (0, uq.i)(mq);
          if (Eq.wasPressed(gq) && Aq.reset(), Aq.update(Eq.isHeld(gq), performance.now())) return Jg(qq, Yq, xq), !0
        }
        const Oq = "popup" === gq.layer.kind;
        return Fg(Eq, "pause") ? (Oq || (0, Ag.r)() && "menu" !== gq.layer.kind || sg(qq, Yq, (0, Ag.r)() ? xg.p.SETTINGS : (0, Mg.b)()), !0) : !!Fg(Eq, "leaderboard") && ("home" === gq.layer.kind ? (qq => {
          const Eq = [...qq.querySelectorAll("[data-pad-notifications]")].find(eq.p);
          Eq && (0, Fq.b)(Eq)
        })(Yq) : Oq || sg(qq, Yq, xg.p.LOBBY_LEADERBOARD, "inGame" === Aq.b.get("gameState")), !0)
      },
      eg = (qq, Eq, gq) => {
        if (Ig(qq, Eq, gq)) return !0;
        const Yq = "home" === gq.layer.kind;
        if (Eq.wasPressed((0, uq.i)("menuSecondary"))) {
          const Eq = qq.getFocused(),
            lq = Eq ? Wg(Eq) : null;
          if (lq) return (0, Fq.b)(lq), !0;
          if (Yq) {
            const Eq = gq.root.querySelector("[data-pad-search] input");
            return Eq && (0, eq.t)(Eq, gq.root) ? (qq.setFocus(Eq, {
              byUser: !0
            }), (0, Fq.b)(Eq)) : Aq.b.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!Yq || !Fg(Eq, "inventory")) && (((qq, Eq) => {
          var gq, Yq;
          const lq = Eq.querySelector("[data-pad-friends-column]");
          if (!lq || !(0, eq.p)(lq)) return void(0, Ag.u)(new Event("padMenuShortcut"), xg.p.SOCIAL);
          if (Rg(qq, Eq)) return;
          const Oq = null !== (gq = null === (Yq = lq.querySelector("[data-pad-friends-start]")) || void 0 === Yq ? void 0 : Yq.getBoundingClientRect().top) && void 0 !== gq ? gq : -1 / 0,
            mq = qq.getEnabledCandidates(lq),
            xq = mq.filter((qq => qq.getBoundingClientRect().top >= Oq)),
            Aq = xq.length > 0 ? xq : mq,
            cq = hg(Aq.map((qq => qq.getBoundingClientRect())));
          qq.setFocus(cq >= 0 ? Aq[cq] : null, {
            byUser: !0
          })
        })(qq, gq.root), !0)
      },
      Dg = qq => {
        var Eq, gq, Yq;
        const lq = (0, Fq.F)(qq);
        if (null !== lq) return lq;
        const Oq = (null !== (Eq = null !== (gq = null !== (Yq = qq.getAttribute("aria-label")) && void 0 !== Yq ? Yq : qq.getAttribute("title")) && void 0 !== gq ? gq : qq.textContent) && void 0 !== Eq ? Eq : "").replace(/\s+/g, " ").trim();
        return Oq ? `${qq.tagName}:${Oq.slice(0,100)}` : null
      };
    class qY {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(qq) {
        const Eq = this.history.indexOf(qq);
        if (Eq >= 0) {
          for (const qq of this.history.splice(Eq + 1)) this.remembered.delete(qq);
          return !0
        }
        return this.remembered.delete(qq), this.history.push(qq), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(qq) {
        this.remembered.delete(qq);
        const Eq = this.history.indexOf(qq);
        Eq >= 0 && this.history.splice(Eq, 1)
      }
      remember(qq, Eq, gq, Yq) {
        const lq = Dg(Eq),
          Oq = (0, Fq.F)(Eq),
          mq = null !== Oq && ((qq, Eq) => {
            let gq = 0;
            for (const Yq of qq.querySelectorAll("[data-pad-key], [href]"))
              if ((Yq.getAttribute("data-pad-key") === Eq || Yq.getAttribute("href") === Eq) && (gq++, gq > 1)) return !0;
            return !1
          })(gq, Oq) ? Math.max(0, this.twins(Yq(), Oq).indexOf(Eq)) : 0;
        this.remembered.set(qq, {
          element: new WeakRef(Eq),
          identity: lq,
          ordinal: mq
        })
      }
      has(qq) {
        return this.remembered.has(qq)
      }
      recall(qq, Eq) {
        var gq, Yq;
        const lq = this.remembered.get(qq);
        if (!lq) return null;
        const Oq = lq.element.deref();
        if (Oq && Eq.includes(Oq)) return Oq;
        if (null === lq.identity) return null;
        const mq = this.twins(Eq, lq.identity);
        return null !== (gq = null !== (Yq = mq[lq.ordinal]) && void 0 !== Yq ? Yq : mq[0]) && void 0 !== gq ? gq : null
      }
      twins(qq, Eq) {
        return qq.filter((qq => Dg(qq) === Eq))
      }
    }
    var EY = gq(1267);
    const gY = qq => {
        const Eq = [];
        let gq = qq;
        for (; gq && gq !== document.body;) {
          const qq = getComputedStyle(gq).zIndex;
          "auto" !== qq && Eq.push(Number(qq) || 0), gq = gq.parentElement
        }
        return Eq.reverse()
      },
      YY = (qq, Eq) => {
        const gq = ((qq, Eq) => {
          const gq = Math.max(qq.length, Eq.length);
          for (let Oq = 0; Oq < gq; Oq++) {
            var Yq, lq;
            const gq = (null !== (Yq = qq[Oq]) && void 0 !== Yq ? Yq : 0) - (null !== (lq = Eq[Oq]) && void 0 !== lq ? lq : 0);
            if (0 !== gq) return gq
          }
          return 0
        })(gY(qq), gY(Eq));
        if (0 !== gq) return gq > 0;
        if (qq.contains(Eq)) return !1;
        if (Eq.contains(qq)) return !0;
        const Yq = qq.compareDocumentPosition(Eq);
        return !!(Yq & Node.DOCUMENT_POSITION_PRECEDING) || !(Yq & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      lY = (qq, Eq) => {
        var gq;
        return null !== (gq = YY(qq.root, Eq.root)) && void 0 !== gq ? gq : qq.order > Eq.order
      },
      OY = (qq, Eq) => Eq.some((Eq => !Eq.contains(qq) && !qq.contains(Eq) && !0 === YY(Eq, qq)));
    let mY = null,
      xY = null,
      AY = -1;
    const cY = () => {
        var qq;
        const Eq = null === (qq = document.timeline) || void 0 === qq ? void 0 : qq.currentTime,
          gq = "number" === typeof Eq ? Eq : null;
        if (null !== gq && gq === xY && AY === (0, EY.e)()) return mY;
        let Yq = null;
        const lq = [],
          Oq = [...document.querySelectorAll("[data-pad-covers]")].filter(eq.p);
        for (const mq of (0, EY.g)()) {
          const qq = mq.getRoot(),
            Eq = !!qq && (0, eq.p)(qq) && !OY(qq, Oq);
          if (mq.shown && !Eq && lq.push(mq), mq.shown = Eq, !qq || !Eq) continue;
          const gq = {
            layer: mq,
            root: qq,
            order: mq.order
          };
          Yq && !lY(gq, Yq) || (Yq = gq)
        }
        mY = Yq, xY = gq, AY = (0, EY.e)();
        for (const mq of lq)(0, EY.i)(mq);
        return mY
      },
      uY = () => {
        const qq = cY();
        return !(null === qq || void 0 === qq || !qq.layer.close) && (qq.layer.close(), xY = null, !0)
      },
      BY = () => {
        var qq, Eq;
        return null !== (qq = null === (Eq = cY()) || void 0 === Eq ? void 0 : Eq.root) && void 0 !== qq ? qq : null
      },
      WY = qq => qq ? {
        ...qq,
        root: BY()
      } : null;
    let NY = null,
      aY = null,
      VY = (0, Wq.i)().menuNavigation,
      dY = null;
    const jY = new Qq;
    let HY = null;
    cq.i.subscribe(Wq.f, (() => {
      const qq = (0, Wq.i)().menuNavigation;
      qq !== VY && (VY = qq, NY = null, aY = null)
    }));
    const oY = () => {
        var qq;
        return null !== (qq = NY) && void 0 !== qq ? qq : (0, Wq.i)().menuNavigation
      },
      PY = qq => {
        if (rY()) {
          if (dY = WY(qq), "hybrid" === oY()) return jY.lock(), void(aY = aY ? null : BY());
          NY = "focus" === oY() ? "cursor" : "focus"
        }
      },
      QY = () => {
        const qq = dY;
        return dY = null, qq
      };
    let yY = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const tY = function(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const gq = yY.root === qq,
          Yq = gq ? yY.firstSeenMs : Eq,
          lq = yY.has || Eq - Yq > 1e3;
        return (!gq || !lq || Eq - yY.atMs > 250) && (yY = {
          root: qq,
          firstSeenMs: Yq,
          atMs: Eq,
          has: (0, eq.k)(qq)
        }), yY.has
      },
      rY = () => {
        const qq = BY();
        return null !== qq && tY(qq)
      },
      vY = () => {
        const qq = cY();
        return aY && (null === qq || void 0 === qq ? void 0 : qq.root) !== aY && (aY = null), (qq => {
          let {
            mode: Eq,
            hasLayer: gq,
            hasCandidates: Yq,
            hybridCursorEngaged: lq
          } = qq;
          return gq ? "cursor" !== Eq && Yq() ? "hybrid" === Eq && lq ? "cursor" : "focus" : "cursor" : null
        })({
          mode: oY(),
          hasLayer: null !== qq,
          hasCandidates: () => null !== qq && tY(qq.root),
          hybridCursorEngaged: null !== aY
        })
      },
      hY = () => "hybrid" === oY() && rY(),
      nY = "pad-focused";
    var bY = gq(4372),
      iY = gq(4866);
    const ZY = "[data-pad-destructive]",
      fY = `${ZY}, [data-pad-back]`,
      MY = qq => ({
        rect: qq.getBoundingClientRect(),
        destructive: qq.matches(ZY),
        closes: null !== qq.closest("[data-pad-close-button]"),
        unavailable: qq.matches("[data-pad-unavailable]")
      }),
      TY = qq => {
        let {
          destructive: Eq,
          closes: gq,
          unavailable: Yq
        } = qq;
        return Eq ? gq ? 2 : 3 : Yq ? 1 : 0
      },
      zY = qq => {
        let Eq = -1;
        for (let gq = 0; gq < qq.length; gq++) {
          if (Eq < 0) {
            Eq = gq;
            continue
          }
          const Yq = qq[gq],
            lq = qq[Eq];
          TY(Yq) === TY(lq) ? vg(Yq.rect, lq.rect) < 0 && (Eq = gq) : TY(Yq) < TY(lq) && (Eq = gq)
        }
        return Eq
      },
      SY = "[data-pad-tabs]",
      pY = "[data-pad-tab]",
      GY = (qq, Eq) => {
        const gq = qq.querySelector(`${pY}[data-pad-selected='true']`);
        return gq && Eq.includes(gq) ? gq : null
      },
      LY = (qq, Eq) => {
        let gq = Eq;
        for (let Yq = Eq.parentElement; Yq && !Yq.contains(qq); Yq = Yq.parentElement) gq = Yq;
        return gq
      };
    class JY {
      constructor() {
        this.contentReturn = null
      }
      redirect(qq, Eq, gq, Yq) {
        var lq, Oq;
        const mq = qq.closest(SY),
          xq = Eq.closest(SY);
        var Aq;
        if (xq && xq !== mq) return mq || (this.contentReturn = new WeakRef(qq)), null !== (Aq = GY(xq, gq)) && void 0 !== Aq ? Aq : Eq;
        if (!mq || xq) return Eq;
        const cq = LY(qq, Eq),
          uq = null === (lq = this.contentReturn) || void 0 === lq ? void 0 : lq.deref();
        return uq && cq.contains(uq) && gq.includes(uq) ? uq : null !== (Oq = this.pickRegionStart(cq, nq(Eq, "y", Yq), gq)) && void 0 !== Oq ? Oq : Eq
      }
      findTabContent(qq, Eq, gq) {
        const Yq = qq.closest(SY);
        if (!Yq || !qq.matches(pY) || Yq.contains(Eq)) return null;
        const lq = Eq.closest(SY);
        if (lq && Number(lq.dataset.padTabs) <= Number(Yq.dataset.padTabs)) return null;
        const Oq = LY(qq, Eq);
        return gq.some((qq => Oq.contains(qq) && !qq.closest(fY))) || !Eq.closest(fY) ? Oq : null
      }
      pickContentStart(qq, Eq, gq) {
        return this.contentReturn = null, this.pickRegionStart(qq, nq(qq, "y", gq), Eq)
      }
      pickReplacedContentStart(qq, Eq, gq, Yq) {
        if (!Eq.contains(qq)) return null;
        const lq = LY(Eq, qq),
          Oq = gq.filter((qq => Eq.contains(qq) && !lq.contains(qq) && !qq.closest(fY)));
        return 0 === Oq.length ? null : (this.contentReturn = null, this.pickRegionStart(Eq, nq(Oq[0], "y", Yq), Oq))
      }
      backToStrip(qq, Eq, gq) {
        if (qq.closest(SY)) return null;
        const Yq = zg(gq);
        for (const lq of gq.querySelectorAll(SY)) {
          if (Number(lq.dataset.padTabs) <= 1 || lq === Yq) continue;
          const Oq = GY(lq, Eq),
            mq = Oq ? LY(qq, lq).parentElement : null;
          if (Oq && mq && mq !== gq && gq.contains(mq)) return this.contentReturn = new WeakRef(qq), Oq
        }
        return null
      }
      pickRegionStart(qq, Eq, gq) {
        const Yq = Tq(Eq),
          lq = qq => {
            const Eq = gq.filter((Eq => qq.contains(Eq) && !Eq.closest(SY) && zq(Eq.getBoundingClientRect(), Yq))),
              lq = zY(Eq.map(MY));
            return lq >= 0 ? Eq[lq] : null
          };
        for (const Oq of (0, eq.h)(qq)) {
          const qq = lq(Oq);
          if (qq) return qq
        }
        for (const Oq of qq.querySelectorAll(SY)) {
          const qq = GY(Oq, gq);
          if (qq) return qq
        }
        return lq(qq)
      }
    }
    const kY = "[data-pad-default-focus], .Dropdown-option.is-selected",
      RY = ".Dropdown-root.is-open > .Dropdown-menu",
      UY = "[data-pad-no-step-in]",
      FY = "[data-pad-tabs]",
      sY = "[data-pad-press-area]",
      XY = qq => {
        let Eq = qq;
        for (let gq = 0; Eq && gq <= 4; gq++, Eq = Eq.parentElement) {
          const gq = Eq.querySelector(".CircleInfo");
          if (gq) return Eq === qq || Eq.querySelectorAll(eq.e).length <= 1 ? gq : null;
          if (Eq !== qq && Eq.querySelectorAll(eq.e).length > 1) return null
        }
        return null
      },
      wY = (qq, Eq, gq) => {
        (0, Fq.s)(qq, Eq, gq);
        const Yq = null !== qq && void 0 !== qq && qq.isConnected ? XY(qq) : null,
          lq = XY(Eq);
        Yq !== lq && (0, Fq.s)(Yq, lq, lq ? (0, Fq.D)(lq) : gq, {
          leaveBelow: qq,
          enterBelow: Eq
        })
      },
      KY = qq => qq.getBoundingClientRect(),
      CY = (qq, Eq, gq) => {
        const Yq = new Set(gq);
        for (let lq = qq; lq; lq = lq === Eq ? null : lq.parentElement)
          if (Yq.has(lq)) return lq;
        return null
      },
      IY = (qq, Eq) => !qq.root || qq.root === Eq || Eq.matches(RY) && qq.root.contains(Eq);
    const eY = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new qY, this.tabStripNav = new JY, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, Vq.b)(aq.x), this.dpadRepeats = new Map(aq.C.map((qq => [qq, (0, Vq.b)(aq.F)]))), this.stickRepeat = new aq.c((0, Vq.b)(aq.ib)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const qq = Bq.c.register({
            name: "focus",
            isActive: () => (0, Nq.k)() && "focus" === vY(),
            onFrame: qq => {
              this.onFrame(qq)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: qq => (0, Bq.g)(qq) || qq === (0, uq.i)("menuConfirm") && (0, Fq.H)((0, Nq.e)())
          }),
          Eq = (0, EY.m)((qq => {
            const Eq = (0, EY.t)(qq);
            null === qq.memoryKey && this.memory.forget(Eq), Eq === this.layerKey && (this.layerKey = null)
          }));
        let gq = -1 / 0;
        const Yq = mq.h.onFrame((qq => {
            (0, Nq.k)() || qq.timestampMs - gq < 100 || (gq = qq.timestampMs, cY())
          })),
          lq = qq => {
            qq.isTrusted && qq.target instanceof Element && mq.h.getActivePad() && this.noteChosenStop(qq.target)
          };
        return document.addEventListener("click", lq, !0), () => {
          qq(), Eq(), Yq(), document.removeEventListener("click", lq, !0), this.deactivate()
        }
      }
      noteChosenStop(qq) {
        var Eq, gq;
        const Yq = cY();
        if (!Yq || !Yq.root.contains(qq)) return;
        const lq = null !== (Eq = null === (gq = qq.closest(".Dropdown-root")) || void 0 === gq ? void 0 : gq.querySelector(".Dropdown-control")) && void 0 !== Eq ? Eq : qq,
          Oq = CY(lq, Yq.root, this.getEnabledCandidates(Yq.root));
        if (!Oq) return;
        const mq = (0, EY.t)(Yq.layer);
        mq === this.layerKey && Yq.root === this.layerRoot || this.beginLayer(Yq, mq), this.wasActive ? this.setFocus(Oq, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = Oq, this.lastFocusedCentre = (0, Fq.D)(Oq), this.rememberFocus(Oq), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(qq) {
        return this.listeners.add(qq), () => {
          this.listeners.delete(qq)
        }
      }
      notify() {
        for (const qq of this.listeners) qq()
      }
      deactivate() {
        var qq;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const qq of this.dpadRepeats.values()) qq.reset();
          this.stickRepeat.reset(), null !== (qq = this.focused) && void 0 !== qq && qq.isConnected && wY(this.focused, null, (0, Fq.D)(this.focused)), this.notify()
        }
      }
      setFocus(qq) {
        var Eq;
        let {
          scroll: gq = !0,
          byUser: Yq = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (Yq && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), qq === this.focused) return;
        const lq = null !== (Eq = this.focused) && void 0 !== Eq && Eq.isConnected ? this.focused : null;
        if (this.focused = qq, qq) {
          gq && (qq.classList.add(nY), qq.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), Yq && ((qq, Eq) => {
            const gq = Eq.closest("[data-pad-friends-column]");
            gq && qq && !gq.contains(qq) && (kg = new WeakRef(qq))
          })(lq, qq);
          const Eq = (0, Fq.D)(qq);
          this.lastFocusedCentre = Eq, this.movedInLayer && this.rememberFocus(qq), wY(lq, qq, Eq), "false" === qq.getAttribute("aria-pressed") && qq.closest("[data-pad-select-on-focus]") && (0, Fq.b)(qq)
        } else lq && wY(lq, null, (0, Fq.D)(lq));
        this.notify()
      }
      rememberFocus(qq) {
        const Eq = this.layerRoot;
        this.layerKey && Eq && this.memory.remember(this.layerKey, qq, Eq, (() => this.getEnabledCandidates(Eq)))
      }
      noteCursorActivation(qq) {
        const Eq = cY();
        if (!Eq || !Eq.root.contains(qq)) return;
        const gq = this.getEnabledCandidates(Eq.root),
          Yq = new Set(gq);
        let lq = qq;
        for (; lq && !Yq.has(lq);) lq = lq === Eq.root ? null : lq.parentElement;
        if (!(lq instanceof HTMLElement)) return;
        const Oq = (0, EY.t)(Eq.layer);
        this.memory.enter(Oq), this.memory.remember(Oq, lq, Eq.root, (() => gq))
      }
      notePageEnteredByCursor(qq) {
        return this.memory.enter(qq)
      }
      recallStop(qq, Eq) {
        return this.findRemembered(qq, Eq)
      }
      focusWhenFound(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: qq,
          untilMs: performance.now() + Eq,
          holdWhile: gq
        }
      }
      getEnabledCandidates(qq) {
        return (0, eq.f)(qq).filter((qq => !(0, eq.w)(qq)))
      }
      onFrame(qq) {
        var Eq;
        const gq = cY();
        if (!gq) return;
        const Yq = null !== (Eq = this.findOpenDropdown(gq)) && void 0 !== Eq ? Eq : gq,
          lq = performance.now(),
          Oq = (0, EY.t)(Yq.layer);
        if (Oq !== this.layerKey || Yq.root !== this.layerRoot) {
          const Eq = this.focused;
          if (null !== this.layerKey && Yq.root === this.layerRoot && Eq && (0, eq.t)(Eq, Yq.root)) this.continueLayer(Oq, Eq), this.wasActive || this.resume(Yq.root, lq);
          else {
            const Eq = !this.wasActive && !qq.wokeDevice,
              mq = "death" === this.layerKind || Eq,
              xq = this.enterLayer(Yq, Oq);
            "popup" !== Yq.layer.kind || Yq !== gq || xq ? "menu" === Yq.layer.kind && mq && "inGame" === Aq.b.get("gameState") && !(0, mg.g)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = lq + bY.b) : (this.pressGuardExtends = Eq, this.pressGuardUntilMs = lq + (Eq ? bY.b : mq ? 500 : 250))
          }
        } else this.wasActive || this.resume(Yq.root, lq);
        if (this.layerKind = Yq.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), qq.wokeDevice && this.focusPointedStop(Yq.root), this.validateFocus(Yq, lq), lq < this.pressGuardUntilMs && this.pressGuardExtends && (qq.wasPressed((0, uq.i)("menuConfirm")) || qq.wasPressed((0, uq.i)("menuBack"))) && (this.pressGuardUntilMs = lq + bY.b), lq >= this.pressGuardUntilMs && this.handleButtons(qq, Yq)) return;
        const mq = "hybrid" === oY();
        if (mq && (qq => {
            const Eq = BY();
            return Eq !== HY && (HY = Eq, jY.lock()), jY.update(qq, (0, Wq.i)().moveDeadzone)
          })(qq.leftStick)) return xq = this.getHandoff(), dY = WY(xq), aY = BY(), void Bq.c.handOffHeldInput();
        var xq;
        this.handleDirections(qq, Yq, lq, !mq), this.handleScroll(qq, Yq)
      }
      findOpenDropdown(qq) {
        const Eq = qq.root.querySelector(RY);
        if (!Eq || !(0, eq.p)(Eq)) return null;
        let gq = this.dropdownLayers.get(Eq);
        return gq || (this.dropdownLayerCounter++, gq = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: qq.layer.kind,
          getRoot: () => Eq,
          close: () => {
            (0, Fq.l)(Eq)
          },
          memoryKey: null
        }, this.dropdownLayers.set(Eq, gq)), {
          layer: gq,
          root: Eq,
          order: qq.order
        }
      }
      focusPointedStop(qq) {
        const Eq = (0, Nq.e)(),
          gq = Eq ? document.elementFromPoint(Eq.x, Eq.y) : null;
        if (!gq || !qq.contains(gq)) return;
        const Yq = CY(gq, qq, this.getEnabledCandidates(qq));
        Yq && this.setFocus(Yq, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(qq, Eq) {
        const gq = this.beginLayer(qq, Eq),
          Yq = QY();
        return Yq && IY(Yq, qq.root) ? (this.takeOver(qq.root, Yq, this.enteredLayerAtMs), gq) : (this.restoreLayerFocus(qq.root, gq), gq)
      }
      beginLayer(qq, Eq) {
        return this.layerKey = Eq, this.layerRoot = qq.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(Eq)
      }
      restoreLayerFocus(qq, Eq) {
        const gq = Eq && this.layerKey ? this.findRemembered(qq, this.layerKey) : null;
        this.restoredFromMemory = null !== gq, this.setFocus(null !== gq && void 0 !== gq ? gq : this.pickInitial(qq, {
          waitForContent: !0
        }))
      }
      continueLayer(qq, Eq) {
        this.layerKey = qq;
        const gq = this.memory.enter(qq);
        this.restoreOnFocusLoss = gq, this.movedInLayer && !gq && this.rememberFocus(Eq)
      }
      resume(qq, Eq) {
        var gq;
        const Yq = QY();
        Yq && IY(Yq, qq) ? this.takeOver(qq, Yq, Eq) : null !== (gq = this.focused) && void 0 !== gq && gq.isConnected && wY(null, this.focused, (0, Fq.D)(this.focused))
      }
      pickPreferred(qq) {
        var Eq;
        return null !== (Eq = this.layerKey ? this.findRemembered(qq, this.layerKey) : null) && void 0 !== Eq ? Eq : this.pickInitial(qq, {
          waitForContent: !0
        })
      }
      findRemembered(qq, Eq) {
        return this.memory.has(Eq) ? this.memory.recall(Eq, this.getEnabledCandidates(qq)) : null
      }
      getHandoff() {
        var qq, Eq, gq;
        const Yq = null !== (qq = this.focused) && void 0 !== qq && qq.isConnected ? this.focused : null,
          lq = null !== (Eq = this.layerRoot) && void 0 !== Eq && Eq.isConnected ? this.layerRoot : null;
        return {
          point: Yq ? (0, Fq.D)(Yq) : null !== (gq = this.lastFocusedCentre) && void 0 !== gq ? gq : this.getLayerStartPoint(lq),
          element: Yq,
          direction: null
        }
      }
      getLayerStartPoint(qq) {
        if (!qq) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const Eq = this.pickInitial(qq, {
          includeDisabled: !0
        });
        return (0, Fq.D)(null !== Eq && void 0 !== Eq ? Eq : qq)
      }
      takeOver(qq, Eq, gq) {
        const {
          element: Yq,
          direction: lq,
          point: Oq
        } = Eq, mq = Yq instanceof HTMLElement && (0, eq.t)(Yq, qq) ? Yq : null;
        if (!lq) {
          const Eq = this.focused;
          return mq ? this.setFocus(mq, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(qq, Oq), void(this.focused && this.focused === Eq && this.focused.isConnected && wY(null, this.focused, (0, Fq.D)(this.focused)))
        }
        if (this.dpadRepeats.get(lq).update(!0, gq), mq) return this.setFocus(mq, {
          scroll: !1,
          byUser: !0
        }), void this.move(qq, lq, gq, !0);
        const xq = this.getEnabledCandidates(qq),
          Aq = xq.map(KY),
          cq = og(new DOMRect(Oq.x, Oq.y, 0, 0), Aq, lq),
          uq = cq >= 0 ? cq : rg(Oq, Aq);
        this.setFocus(uq >= 0 ? xq[uq] : this.pickInitial(qq), {
          byUser: !0
        })
      }
      focusNearest(qq, Eq) {
        const gq = this.getEnabledCandidates(qq),
          Yq = rg(Eq, gq.map(KY));
        this.setFocus(Yq >= 0 ? gq[Yq] : this.pickInitial(qq), {
          byUser: !0
        })
      }
      pickDefault(qq) {
        let {
          includeDisabled: Eq = !1,
          exclude: gq = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Yq = [...qq.querySelectorAll(kY)].filter((Yq => (null === gq || void 0 === gq || !gq.has(Yq)) && (Eq ? (0, eq.y)(Yq, qq) : (0, eq.t)(Yq, qq)))),
          lq = zY(Yq.map(MY));
        return lq >= 0 ? Yq[lq] : null
      }
      pickNewAreaStart(qq, Eq) {
        const gq = [...qq.querySelectorAll(sY)].filter(eq.p);
        for (const Yq of [...(0, eq.h)(qq), ...gq]) {
          if (Eq.has(Yq)) continue;
          const qq = this.getEnabledCandidates(Yq),
            gq = zY(qq.map(MY));
          if (gq >= 0) return qq[gq]
        }
        return null
      }
      pickInitial(qq) {
        let {
          includeDisabled: Eq = !1,
          waitForContent: gq = !1,
          enteredAtMs: Yq = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const lq = this.pickDefault(qq, {
          includeDisabled: Eq
        });
        if (lq) return lq;
        const Oq = qq => Eq ? (0, eq.f)(qq) : this.getEnabledCandidates(qq);
        let mq = [];
        for (const Wq of (0, eq.h)(qq))
          if (mq = Oq(Wq), mq.length > 0) break;
        if (0 === mq.length) {
          if (gq && performance.now() - Yq < 1e4 && (0, eq.l)(qq)) return null;
          mq = Oq(qq)
        }
        const xq = mq.map(KY),
          Aq = Tq(null),
          cq = mq.filter(((qq, Eq) => zq(xq[Eq], Aq))),
          uq = cq.length > 0 ? cq : mq,
          Bq = zY(uq.map(MY));
        return Bq >= 0 ? uq[Bq] : null
      }
      validateFocus(qq, Eq) {
        if (this.pendingFocus) {
          var gq, Yq;
          const lq = this.pendingFocus.find();
          if (lq && (0, eq.t)(lq, qq.root)) return this.pendingFocus = null, void this.setFocus(lq, {
            byUser: !0
          });
          Eq > this.pendingFocus.untilMs && (null === (gq = (Yq = this.pendingFocus).holdWhile) || void 0 === gq || !gq.call(Yq)) && (this.pendingFocus = null)
        }
        const lq = this.focused,
          Oq = !!lq && (0, eq.t)(lq, qq.root);
        if (!(!Oq && lq && lq === this.lastActivated && Eq - this.lastActivatedAtMs < 5e3 && qq.root.contains(lq) && (0, eq.p)(lq) && (0, eq.w)(lq))) {
          if (!Oq && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = Eq, void this.restoreLayerFocus(qq.root, !0);
          if ((!Oq || !this.movedInLayer && !this.scrolledInLayer) && !(Eq - this.lastRefocusCheckMs < (Oq ? 200 : 50)))
            if (this.lastRefocusCheckMs = Eq, Oq) {
              const gq = Eq - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(qq.root) : null,
                Yq = null !== gq && void 0 !== gq ? gq : this.restoredFromMemory ? null : this.pickDefault(qq.root);
              Yq && Yq !== lq && this.setFocus(Yq)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const Eq = this.pendingFocus;
                return this.focusNearest(qq.root, this.lastFocusedCentre), void(this.pendingFocus = Eq)
              }
              this.setFocus(this.pickPreferred(qq.root))
            }
        }
      }
      handleButtons(qq, Eq) {
        if (qq.wasPressed((0, uq.i)("menuToggleCursor"))) return PY(this.getHandoff()), !0;
        if (qq.wasPressed((0, uq.i)("menuBack"))) {
          const qq = (0, Fq.l)(Eq.root);
          return qq ? this.setFocus(qq, {
            byUser: !0
          }) : Rg(this, Eq.root) || ((0, Fq.f)(Eq.root) ? this.returnToOpener(Eq.root) : this.backToStrip(Eq.root) || uY()), !0
        }
        const gq = (0, uq.i)("menuConfirm");
        var Yq, lq;
        qq.wasPressed(gq) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (Yq = null === (lq = this.focused) || void 0 === lq ? void 0 : lq.getAttribute("data-pad-repeat")) && void 0 !== Yq ? Yq : null, this.confirmRepeated = qq.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (qq.wasReleased(gq)) {
          const qq = this.confirmPressedOn;
          if (this.confirmPressedOn = null, qq && !this.confirmRepeated && qq === this.focused && qq.isConnected && !(0, eq.w)(qq)) {
            const gq = qq.matches("[data-pad-tab]") ? qq.closest(FY) : null;
            gq ? this.enterTab(qq, gq, Eq.root, performance.now()) : this.activate(qq)
          }
          return !0
        }
        return this.repeatConfirm(qq, gq), eg(this, qq, Eq)
      }
      repeatConfirm(qq, Eq) {
        const gq = this.confirmPressedOn;
        gq && null !== this.confirmRepeatKey && qq.isHeld(Eq) && (gq === this.focused && gq.isConnected && !(0, eq.w)(gq) && gq.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? gq.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(gq)) : this.confirmRepeatKey = null)
      }
      backToStrip(qq) {
        const Eq = this.focused;
        if (!(0, Wq.i)().menuBackToCategories) return !1;
        const gq = null !== Eq && void 0 !== Eq && Eq.isConnected ? this.tabStripNav.backToStrip(Eq, this.getEnabledCandidates(qq), qq) : null;
        return gq && this.setFocus(gq, {
          byUser: !0
        }), null !== gq
      }
      returnToOpener(qq) {
        const Eq = this.lastActivatedKey;
        Eq && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var gq;
          return null !== (gq = this.getEnabledCandidates(qq).find((qq => (0, Fq.F)(qq) === Eq))) && void 0 !== gq ? gq : null
        })))
      }
      activate(qq) {
        var Eq;
        if ((0, iY.e)(qq) || (0, Fq.G)(qq)) return;
        this.lastActivatedKey = null !== (Eq = (0, Fq.F)(qq)) && void 0 !== Eq ? Eq : this.lastActivatedKey, this.lastActivated = qq, this.lastActivatedAtMs = performance.now(), this.rememberFocus(qq);
        const gq = this.layerRoot;
        if (gq) {
          const Eq = new Set(gq.querySelectorAll(kY)),
            Yq = new Set(gq.querySelectorAll(`[data-pad-initial-area], ${sY}`)),
            lq = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var lq;
            return (0, eq.t)(qq, gq) ? null : null !== (lq = this.pickDefault(gq, {
              exclude: Eq
            })) && void 0 !== lq ? lq : this.pickNewAreaStart(gq, Yq)
          }), 5e3, (() => qq.isConnected && (0, eq.w)(qq) && performance.now() - lq < 6e4))
        }(0, Fq.b)(qq), (0, Fq.i)(qq)
      }
      handleDirections(qq, Eq, gq, Yq) {
        const lq = Zg(Eq.layer.kind) ? (0, uq.i)("chat") : null;
        for (const xq of aq.C) {
          this.dpadRepeats.get(xq).update(qq.isHeld(xq), gq) && (xq !== lq || qq.wasPressed(xq)) && this.move(Eq.root, xq, gq, !0)
        }
        const Oq = Yq ? (0, aq.j)(qq.leftStick, (0, Wq.i)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          mq = this.stickRepeat.update((0, aq.kb)(Oq), gq);
        if (mq && this.move(Eq.root, mq, gq, !0), this.retryMove && gq >= this.retryMove.atMs) {
          const {
            direction: qq
          } = this.retryMove;
          this.retryMove = null, this.move(Eq.root, qq, gq, !1)
        }
      }
      move(qq, Eq, gq, Yq) {
        var lq;
        let Oq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (lq = this.tabOpenWait) || void 0 === lq ? void 0 : lq.wait) && Eq === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const mq = this.focused;
        if (!mq || !mq.isConnected) {
          const Eq = this.pickInitial(qq);
          return void(Eq && this.setFocus(Eq, {
            byUser: !0
          }))
        }
        const xq = "Left" === Eq || "Right" === Eq,
          Aq = xq ? (0, iY.e)(mq) : null;
        if (Aq) return void Aq.adjust("Left" === Eq ? -1 : 1);
        const cq = qq => null !== qq.closest("[data-pad-friends-column]"),
          uq = cq(mq),
          Bq = KY(mq),
          Wq = xq || mq.closest(FY) ? null : (qq => {
            const Eq = new Map;
            return gq => {
              const Yq = gq.closest(FY);
              if (!Yq) return !1;
              let lq = Eq.get(Yq);
              if (void 0 === lq) {
                const gq = KY(Yq);
                lq = Hg(qq, gq) && (gq.right <= qq.left || gq.left >= qq.right), Eq.set(Yq, lq)
              }
              return lq
            }
          })(Bq),
          Nq = null !== mq.closest(UY),
          aq = this.getEnabledCandidates(qq).filter((qq => qq !== mq && (xq || cq(qq) === uq) && !(null !== Wq && void 0 !== Wq && Wq(qq)) && (Nq || !qq.closest(UY)))),
          Vq = aq.map(KY),
          dq = nq(mq, "y", qq),
          jq = Tq(dq);
        if (!Oq && !zq(Bq, jq)) {
          const qq = aq.filter(((qq, Eq) => zq(Vq[Eq], jq)));
          if (qq.length > 0) {
            const Eq = {
              x: jq.left + jq.width / 2,
              y: jq.top + jq.height / 2
            };
            return void this.setFocus(qq[rg(Eq, qq.map(KY))], {
              byUser: !0
            })
          }
        }
        const Hq = xq ? ((qq, Eq, gq) => {
            const Yq = KY(qq),
              lq = qq.closest(FY),
              Oq = lq ? KY(lq) : null;
            return Eq.map(((Eq, mq) => {
              const xq = gq[mq];
              if (xq.bottom > Yq.top && xq.top < Yq.bottom) return !0;
              const Aq = Eq.closest(FY);
              if (lq && Oq) return Aq !== lq && (null !== Aq || xq.bottom <= Oq.top || xq.top >= Oq.bottom);
              if (Aq) return !Hg(Yq, KY(Aq));
              let cq = qq;
              for (let gq = qq.parentElement; gq && !gq.contains(Eq); gq = gq.parentElement) cq = gq;
              const uq = KY(cq);
              return xq.right > uq.left && xq.left < uq.right
            }))
          })(mq, aq, Vq) : void 0,
          oq = xq && !mq.closest(FY) ? (qq => qq.map((qq => !qq.closest(fY))))(aq) : void 0,
          Pq = ((qq, Eq) => {
            const gq = [];
            for (let lq = qq; lq; lq = lq.parentElement) gq.push(lq);
            const Yq = new Map;
            return gq.forEach(((qq, Eq) => {
              Yq.set(qq, gq.length - 1 - Eq)
            })), Eq.map((qq => {
              for (let Eq = qq; Eq; Eq = Eq.parentElement) {
                const qq = Yq.get(Eq);
                if (void 0 !== qq) return qq
              }
              return -1
            }))
          })(mq, aq),
          Qq = xq ? "x" : "y",
          yq = nq(mq, Qq, qq);
        let tq = og(Bq, Vq, Eq, Pq, Hq, oq);
        if (tq >= 0 && yq && !yq.contains(aq[tq])) {
          const qq = aq.flatMap(((qq, Eq) => yq.contains(qq) ? [Eq] : [])),
            gq = Eq => Eq && qq.map((qq => Eq[qq])),
            Yq = og(Bq, qq.map((qq => Vq[qq])), Eq, qq.map((qq => Pq[qq])), gq(Hq), gq(oq));
          tq = Yq >= 0 ? qq[Yq] : tq
        }
        if (tq >= 0) return void this.moveTo(mq, aq[tq], aq, qq, Eq, Oq);
        if (!Yq) return;
        const rq = "Right" === Eq || "Down" === Eq ? 1 : -1;
        if (yq && fq(yq, Qq, rq)) {
          const qq = "y" === Qq ? yq.clientHeight : yq.clientWidth;
          Mq(yq, Qq, rq * qq * .5), this.retryMove = {
            direction: Eq,
            atMs: gq + 80
          }
        }
      }
      moveTo(qq, Eq, gq, Yq, lq, Oq) {
        const mq = this.tabStripNav.findTabContent(qq, Eq, gq);
        mq && "true" !== qq.dataset.padSelected ? this.openTab(qq, mq, Yq, lq) : Oq && !mq || this.setFocus(this.tabStripNav.redirect(qq, Eq, gq, Yq), {
          byUser: !0
        })
      }
      openTab(qq, Eq, gq, Yq) {
        const lq = Eq.parentElement;
        (0, Fq.b)(qq), this.focusWhenFound((() => "true" !== qq.dataset.padSelected ? null : Eq.isConnected ? this.tabStripNav.pickContentStart(Eq, this.getEnabledCandidates(gq), gq) : lq ? this.tabStripNav.pickReplacedContentStart(qq, lq, this.getEnabledCandidates(gq), gq) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: Yq
        }
      }
      enterTab(qq, Eq, gq, Yq) {
        this.move(gq, (qq => {
          const Eq = [...qq.querySelectorAll(pY)].filter((Eq => Eq.closest(SY) === qq));
          if (Eq.length >= 2) {
            const qq = Eq[0].getBoundingClientRect(),
              gq = Eq[1].getBoundingClientRect();
            return Math.abs(gq.top - qq.top) > Math.abs(gq.left - qq.left) ? "Right" : "Down"
          }
          const gq = qq.getBoundingClientRect();
          return gq.height > gq.width ? "Right" : "Down"
        })(Eq), Yq, !1, !0), this.focused !== qq || this.pendingFocus || this.activate(qq)
      }
      handleScroll(qq, Eq) {
        const gq = (0, aq.j)(qq.rightStick, .2);
        if (0 === gq.x && 0 === gq.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const Yq = qq.dtMs / 1e3;
        for (const Oq of ["x", "y"]) {
          var lq;
          const qq = gq[Oq];
          if (0 === qq) continue;
          const mq = null !== (lq = nq(this.focused, Oq, Eq.root)) && void 0 !== lq ? lq : iq(Eq.root, Oq);
          if (!mq) continue;
          const xq = Math.sign(qq) * qq * qq * 1500 * Yq + this.scrollRemainder[Oq],
            Aq = Math.trunc(xq);
          this.scrollRemainder[Oq] = xq - Aq, 0 !== Aq && (Mq(mq, Oq, Aq), this.scrolledInLayer = !0)
        }
      }
    };
    var DY = gq(8123);
    var ql = gq(8678);
    const El = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      gl = {
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
          ...El,
          minIntervalMs: 1e3
        },
        preview: {
          ...El,
          minIntervalMs: 0
        }
      };
    const Yl = new class {
        constructor(qq) {
          this.deps = qq, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = qq => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", qq))
          }
        }
        play(qq, Eq) {
          const gq = gl[qq];
          if (!this.deps.isVibrationOn() || gq.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const Yq = this.lastPlayedMs[qq];
          if (void 0 !== Yq && Eq - Yq < gq.minIntervalMs) return !1;
          const lq = this.deps.getActuator();
          if (!lq) return !1;
          this.lastPlayedMs[qq] = Eq;
          const {
            duration: Oq,
            strongMagnitude: mq,
            weakMagnitude: xq
          } = gq;
          try {
            lq.playEffect("dual-rumble", {
              duration: Oq,
              strongMagnitude: mq,
              weakMagnitude: xq
            }).catch(this.logFailure)
          } catch (Aq) {
            this.logFailure(Aq)
          }
          return !0
        }
      }({
        getActuator: () => (qq => {
          const Eq = null === qq || void 0 === qq ? void 0 : qq.vibrationActuator;
          return "function" === typeof(null === Eq || void 0 === Eq ? void 0 : Eq.playEffect) ? Eq : null
        })(mq.h.getActiveGamepad()),
        isVibrationOn: () => (0, Wq.i)().vibration,
        isPadInUse: Nq.k
      }),
      ll = qq => {
        Yl.play(qq, performance.now())
      };
    var Ol = gq(8130),
      ml = gq(2834),
      xl = gq(114),
      Al = gq(38),
      cl = gq(623);
    class ul {
      constructor(qq) {
        this.deps = qq
      }
      check() {
        let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const Eq = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!Eq) return "skipped";
        const gq = qq ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === gq || this.deps.readReportedVisitId() === gq ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(gq), this.deps.SN(Eq, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const Bl = "controllerUsageReportedVisit";
    var Wl = gq(1336),
      Nl = gq(1710),
      al = gq(611),
      Vl = gq(1416),
      dl = gq(1241);
    const jl = qq => ({
        translationKey: `controller:${qq}`
      }),
      Hl = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: jl("padButtonView"),
        Menu: jl("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: jl("padButtonDpadUp"),
        Down: jl("padButtonDpadDown"),
        Left: jl("padButtonDpadLeft"),
        Right: jl("padButtonDpadRight"),
        Home: jl("padButtonHome"),
        LeftStick: jl("padButtonLeftStick"),
        RightStick: jl("padButtonRightStick")
      },
      ol = {
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
          View: jl("padButtonCreate"),
          Menu: jl("padButtonOptions")
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
      Pl = (qq, Eq) => {
        var gq;
        const Yq = null !== (gq = ol[qq][Eq]) && void 0 !== gq ? gq : Hl[Eq];
        return "string" === typeof Yq ? Yq : (0, lq.s)(dl.h.get().getCurrentLanguageCode(), Yq.translationKey)
      },
      Ql = qq => {
        let {
          glyph: Eq,
          family: gq,
          className: Yq
        } = qq;
        const lq = (0, Nq.B)(),
          Oq = null !== gq && void 0 !== gq ? gq : lq,
          mq = (0, Ol.i)(Oq, Eq);
        return (0, Lq.jsx)("span", {
          className: Gq()("ControllerGlyph", Yq),
          role: "img",
          "aria-label": Pl(Oq, Eq),
          style: {
            "--pad-glyph-mask": `url(${mq})`,
            "--pad-glyph-aspect": (0, Ol.e)(Oq, Eq)
          }
        })
      };
    var yl = gq(1876);
    const tl = qq => {
      let {
        action: Eq
      } = qq;
      const {
        t: gq
      } = (0, lq.v)();
      switch (Eq.kind) {
        case "reload":
          return (0, Lq.jsx)("span", {
            children: gq("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, Lq.jsx)(yl.c, {
            text: Eq.description ? [{
              icon: Eq.icon
            }, ` ${Eq.description}`] : [{
              icon: Eq.icon
            }]
          });
        case "touchButton":
          return (0, Lq.jsx)(yl.c, {
            text: Eq.label
          })
      }
    };
    var rl = gq(8686);
    const vl = qq => {
      let {
        hold: Eq
      } = qq;
      return (0, Lq.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${Eq.holdMs}ms`
        },
        children: (0, Lq.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, Eq.id)
    };
    var hl = gq(8709),
      nl = gq(8712),
      bl = gq(8718),
      il = gq(8704);
    const Zl = () => {
        const {
          gameState: qq
        } = (0, Aq.j)(["gameState"]), Eq = (0, Nq.y)(), [Yq, lq] = (0, Sq.useState)(!1), [Oq, mq] = (0, Sq.useState)(!1);
        return (0, Sq.useEffect)((() => {
          "inGame" === qq && lq(!0)
        }), [qq]), (0, Sq.useEffect)((() => {
          if (!Yq) return;
          let qq = null,
            Eq = !1;
          return (al.v ? Promise.all([gq.e(70), gq.e(261), gq.e(200), gq.e(219), gq.e(218), gq.e(85)]).then((() => gq(40287))).then((qq => qq.startWasmPadGameplay)) : Promise.all([gq.e(70), gq.e(227), gq.e(226), gq.e(95), gq.e(73), gq.e(72), gq.e(71), gq.e(183), gq.e(223), gq.e(75), gq.e(197), gq.e(217), gq.e(94), gq.e(220), gq.e(84), gq.e(235), gq.e(114), gq.e(236), gq.e(74), gq.e(113), gq.e(156), gq.e(219), gq.e(189)]).then((() => gq(40400))).then((qq => qq.startPadGameplay))).then((gq => {
            Eq || (qq = gq())
          })).catch((qq => {
            console.error("Pad gameplay failed to load", qq), Eq || mq(!0)
          })), () => {
            var gq;
            Eq = !0, null === (gq = qq) || void 0 === gq || gq()
          }
        }), [Yq]), (0, Sq.useEffect)((() => {
          Oq && Eq && (mq(!1), Wl.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((qq => {
            !0 === qq && (0, Nl.reloadBloxd)()
          })))
        }), [Oq, Eq]), (0, Lq.jsxs)(Lq.Fragment, {
          children: [(0, Lq.jsx)(fl, {}), (0, Lq.jsx)(Ml, {}), (0, Lq.jsx)(Tl, {})]
        })
      },
      fl = () => {
        const {
          t: qq
        } = (0, lq.v)(), Eq = (0, Nq.y)(), {
          gameState: gq,
          isUiHidden: Yq
        } = (0, Aq.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: Oq
        } = (0, Wq.r)(), mq = (0, rl.h)(), xq = (0, rl.i)(), [cq, Bq] = (0, Sq.useState)(bl.c);
        return (0, Vl.f)(il.n, Bq), !Eq || Oq || Yq || "inGame" !== gq || !mq && !cq ? null : (0, Lq.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [mq && (0, Lq.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, Lq.jsx)(Ql, {
              glyph: (0, uq.i)("actionButton")
            }), (0, Lq.jsx)(tl, {
              action: mq
            }), xq && (0, Lq.jsx)("span", {
              className: "PadActionHintMore",
              children: qq("controller:gameplayActionWheelHint")
            })]
          }), cq && (0, Lq.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, Lq.jsx)(Ql, {
              glyph: (0, uq.i)("pickBlock")
            }), (0, Lq.jsx)("span", {
              children: qq("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      Ml = () => {
        const {
          t: qq
        } = (0, lq.v)(), Eq = (0, Nq.y)(), {
          gameState: gq,
          isUiHidden: Yq
        } = (0, Aq.j)(["gameState", "isUiHidden"]), [Oq, mq] = (0, Sq.useState)(hl.d);
        return (0, Vl.f)(il.j, mq), Eq && !Yq && "inGame" === gq && Oq ? (0, Lq.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, Lq.jsx)("span", {
            children: qq("controller:gameplayDropStack")
          }), (0, Lq.jsx)(vl, {
            hold: Oq
          })]
        }) : null
      },
      Tl = () => {
        const {
          t: qq
        } = (0, lq.v)(), Eq = (0, Nq.y)(), {
          gameState: gq,
          isUiHidden: Yq
        } = (0, Aq.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: Oq
        } = (0, Wq.r)(), [mq, xq] = (0, Sq.useState)(nl.b);
        return (0, Vl.f)(il.i, xq), Eq && !Yq && "inGame" === gq && mq ? (0, Lq.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!Oq && (0, Lq.jsx)(Ql, {
            glyph: (0, uq.i)("attack")
          }), (0, Lq.jsx)("span", {
            children: qq("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var zl = gq(8723),
      Sl = gq(1926),
      pl = gq(2383),
      Gl = gq(8110);
    const Ll = qq => qq && !(0, zl.d)(Sl.c.get("shopInfo")),
      Jl = () => {
        const qq = "inGame" === (0, Aq.j)(["gameState"]).gameState;
        return (0, pl.g)("shopInfo", (() => {
          (0, Gl.f)(Ll(qq))
        })), (0, Sq.useEffect)((() => {
          (0, Gl.f)(Ll(qq))
        }), [qq]), null
      },
      kl = () => {
        const {
          t: qq
        } = (0, lq.v)(), {
          hideButtonHints: Eq
        } = (0, Wq.r)();
        (0, Nq.B)();
        const gq = (0, GE.j)();
        return (0, Sq.useEffect)((() => (() => {
          const qq = Bq.c.register({
              name: "inventory",
              isActive: lg.isActive,
              onFrame: lg.onFrame,
              onDeactivate: lg.onDeactivate,
              wakePressActs: lg.wakePressActs
            }),
            Eq = qq => {
              lg.noteRealPointer(qq), lg.shouldBlockRealPointer(qq) && qq.stopPropagation()
            };
          for (const mq of Og) window.addEventListener(mq, Eq, !0);
          const gq = (0, Iq.g)((() => {
              "inventory" !== Bq.c.getActiveConsumerName() && lg.forgetSurface()
            })),
            Yq = qq => {
              const Eq = qq.target;
              (0, Nq.k)() && (0, wq.k)(Eq) && Eq.closest(QE) && (0, Iq.e)() && (0, Iq.j)(Eq)
            };
          document.addEventListener("focusout", Yq, !0);
          const {
            invalidate: lq,
            onScroll: Oq
          } = lg.targets;
          return document.addEventListener("scroll", Oq, !0), window.addEventListener("resize", lq), () => {
            qq(), gq();
            for (const qq of Og) window.removeEventListener(qq, Eq, !0);
            document.removeEventListener("scroll", Oq, !0), document.removeEventListener("focusout", Yq, !0), window.removeEventListener("resize", lq), lg.targets.disconnect()
          }
        })()), []), (0, Lq.jsxs)(Lq.Fragment, {
          children: [(0, Lq.jsx)(Uq, {
            placer: lg.ring,
            className: "InventorySlotCursorRing"
          }), gq.showing && !Eq && (0, Lq.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: Cq(gq).map((Eq => {
              let {
                actions: Yq,
                labelKey: lq
              } = Eq;
              return (0, Lq.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [Yq.map((qq => (0, Lq.jsx)(Ql, {
                  glyph: (0, uq.i)(qq)
                }, qq))), (0, Lq.jsx)("span", {
                  children: qq(`controller:${lq}`)
                }), "inventoryDrop" === lq && gq.dropStackHold && (0, Lq.jsx)(vl, {
                  hold: gq.dropStackHold
                })]
              }, lq)
            }))
          })]
        })
      },
      Rl = [{
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
      Ul = qq => Array.from(qq).map((qq => ({
        type: "char",
        char: qq,
        width: 1
      }))),
      Fl = function(qq) {
        return {
          type: "command",
          command: qq,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      sl = [Fl("page", 2), Fl("otherPage"), Fl("caretLeft"), Fl("space", 3), Fl("caretRight"), Fl("close", 1.5), Fl("submit", 1.5)],
      Xl = [Fl("page", 2), Fl("otherPage"), Fl("caretLeft"), Fl("space", 2), Fl("caretRight"), Fl("newline"), Fl("close", 1.5), Fl("submit", 1.5)],
      wl = [
        [...Ul("1234567890"), Fl("backspace")], Ul("qwertyuiop/"), Ul("asdfghjkl'?"), [Fl("shift", 2), ...Ul("zxcvbnm,.")]
      ],
      Kl = [
        [...Ul("1234567890"), Fl("backspace")], Ul("!@#$%^&*()/"), Ul('-_=+[]{};:"'), Ul("~`|\\<>'\u20ac\xa3,.")
      ],
      Cl = {
        letters: wl,
        accents: [
          [...Ul("1234567890"), Fl("backspace")], Ul("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), Ul("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [Fl("shift", 2), ...Ul("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: Kl
      },
      Il = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      el = (qq, Eq) => "letters" === qq ? Eq ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === qq ? "symbols" : "accents"
      },
      Dl = function(qq, Eq) {
        const gq = ((qq, Eq) => [...Cl[qq], Eq ? Xl : sl])(qq, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === Eq) return gq;
        const Yq = Math.min(2, qO(gq[0]) / Eq);
        return [Array.from({
          length: Eq
        }, ((qq, Eq) => ({
          type: "phrase",
          phraseIndex: Eq,
          width: Yq
        }))), ...gq]
      },
      qO = qq => qq.reduce(((qq, Eq) => qq + Eq.width), 0),
      EO = qq => Math.max(...qq.map(qO)),
      gO = (qq, Eq) => {
        const gq = qq[Eq.row];
        let Yq = (EO(qq) - qO(gq)) / 2;
        for (let lq = 0; lq < Eq.col; lq++) Yq += gq[lq].width;
        return Yq + gq[Eq.col].width / 2
      },
      YO = (qq, Eq, gq) => {
        let Yq = 0,
          lq = 1 / 0;
        for (let Oq = 0; Oq < qq[Eq].length; Oq++) {
          const mq = Math.abs(gO(qq, {
            row: Eq,
            col: Oq
          }) - gq);
          mq < lq - 1e-9 && (Yq = Oq, lq = mq)
        }
        return Yq
      },
      lO = (qq, Eq) => {
        const gq = Math.max(0, Math.min(qq.length - 1, Eq.row));
        return {
          row: gq,
          col: Math.max(0, Math.min(qq[gq].length - 1, Eq.col))
        }
      },
      OO = (qq, Eq, gq) => "once" === qq && Eq - gq <= 400 ? "caps" : "off" === qq ? "once" : "off",
      mO = (qq, Eq) => "once" === qq && (qq => qq.toLowerCase() !== qq.toUpperCase())(Eq) ? "off" : qq,
      xO = (qq, Eq, gq) => {
        if ("symbols" === Eq || "off" === gq) return qq;
        const Yq = qq.toUpperCase();
        return 1 === Yq.length ? Yq : qq
      };
    var AO = gq(8586);
    const cO = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const uO = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(qq) {
          return !(qq - this.lastSendMs < 2e3) && (this.lastSendMs = qq, !0)
        }
      },
      BO = {
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
      WO = ["vc", "nameTag"],
      NO = qq => {
        const Eq = qq.target instanceof HTMLTextAreaElement && !WO.includes(qq.kind);
        return Dl(qq.page, "chat" === qq.kind ? cO.length : 0, Eq)
      },
      aO = qq => {
        const Eq = qq.getBoundingClientRect(),
          gq = window.innerHeight,
          Yq = Eq.top + Eq.height / 2 < gq / 2 ? "bottom" : "top",
          lq = "bottom" === Yq ? gq - Eq.bottom - 6 : Eq.top - 6;
        return {
          placement: Yq,
          maxHeightPx: Math.min(.46 * gq, Math.max(.3 * gq, lq))
        }
      },
      VO = qq => {
        (0, ng.h)(qq) ? (0, ng.b)().close(): (eY.noteChosenStop(qq), qq.blur())
      };
    class dO {
      constructor(qq) {
        this.host = qq, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(qq, Eq) {
        this.phraseTexts = qq, this.phrasesFill = Eq
      }
      pressKey(qq) {
        const Eq = this.host.getState(),
          gq = NO(Eq),
          Yq = gq[qq.row][qq.col];
        this.host.setState({
          ...Eq,
          focus: qq,
          preferredX: gO(gq, qq)
        }), "char" === Yq.type ? this.typeChar(Yq.char) : "command" === Yq.type ? this.runCommand(Yq.command) : this.sendPhrase(Yq.phraseIndex)
      }
      runCommand(qq) {
        const Eq = this.host.getState();
        switch (qq) {
          case "backspace":
            (0, wq.e)(Eq.target);
            break;
          case "space":
            (0, wq.i)(Eq.target, " ");
            break;
          case "newline":
            (0, wq.i)(Eq.target, "\n");
            break;
          case "caretLeft":
            (0, wq.m)(Eq.target, -1);
            break;
          case "caretRight":
            (0, wq.m)(Eq.target, 1);
            break;
          case "shift": {
            const qq = performance.now();
            this.host.setState({
              ...Eq,
              shift: OO(Eq.shift, qq, this.lastShiftPressMs)
            }), this.lastShiftPressMs = qq;
            break
          }
          case "page":
          case "otherPage": {
            const gq = el(Eq.page, Eq.accentsFirst)[qq];
            this.host.setState({
              ...Eq,
              page: gq,
              focus: lO(NO({
                ...Eq,
                page: gq
              }), Eq.focus)
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
            (0, ng.h)(Eq.target) && (0, ng.b)().selectNextChannel()
        }
      }
      submit() {
        var qq, Eq;
        const {
          target: gq
        } = this.host.getState();
        this.host.hide(), (0, ng.h)(gq) ? (0, ng.b)().submit() : (eY.noteChosenStop(gq), null === (qq = (Eq = (0, ng.e)(gq)).submit) || void 0 === qq || qq.call(Eq), document.activeElement === gq && gq.blur())
      }
      close() {
        const {
          target: qq
        } = this.host.getState();
        this.host.hide(), VO(qq)
      }
      typeChar(qq) {
        const {
          target: Eq,
          page: gq,
          shift: Yq
        } = this.host.getState();
        (0, wq.i)(Eq, xO(qq, gq, Yq)), this.host.setState({
          ...this.host.getState(),
          shift: mO(Yq, qq)
        })
      }
      sendPhrase(qq) {
        if (this.phrasesFill) {
          const {
            target: Eq
          } = this.host.getState(), gq = this.phraseTexts[qq];
          gq && (Eq.setSelectionRange(0, Eq.value.length), (0, wq.i)(Eq, gq))
        } else uO.claim(performance.now()) && (this.host.hide(), (0, ng.b)().sendLine(this.phraseTexts[qq]))
      }
    }
    var jO = gq(8604);
    const HO = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      oO = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class PO {
      constructor(qq, Eq) {
        this.host = qq, this.editor = Eq, this.lastDirection = null, this.navRepeat = new aq.c((0, Vq.b)(HO)), this.commandRepeats = new Map(Rl.filter((qq => {
          let {
            repeats: Eq
          } = qq;
          return Eq
        })).map((qq => {
          let {
            command: Eq
          } = qq;
          return [Eq, (0, Vq.b)(oO)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const qq of this.commandRepeats.values()) qq.reset()
      }
      onVisibleFrame(qq) {
        const Eq = performance.now();
        for (const {
            command: lq,
            action: Oq
          }
          of Rl) {
          const gq = (0, uq.i)(Oq),
            Yq = this.commandRepeats.get(lq);
          if ((Yq ? Yq.update(qq.isHeld(gq), Eq) : qq.wasPressed(gq)) && (this.editor.runCommand(lq), !this.host.getState().visible)) return
        }
        if (qq.wasPressed((0, uq.i)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const gq = this.readNavDirection(qq);
        this.lastDirection = gq;
        const Yq = this.navRepeat.update(gq, Eq);
        Yq && this.navigate(Yq)
      }
      onHiddenFrame(qq, Eq) {
        var gq;
        if (qq.wasPressed((0, uq.i)("keyboardClose"))) return void VO(Eq);
        const Yq = (0, uq.i)("keyboardType");
        if (qq.wasPressed(Yq)) return Bq.c.consumeButton(Yq), void this.host.open(Eq);
        const lq = this.readNavDirection(qq),
          Oq = null !== lq && lq !== this.lastDirection;
        if (this.lastDirection = lq, !Oq || (0, ng.h)(Eq)) return;
        const mq = (null === (gq = cY()) || void 0 === gq ? void 0 : gq.root.contains(Eq)) || null !== Eq.closest(".EntireInventoryWrapper");
        VO(Eq), mq && Bq.c.handOffHeldInput()
      }
      navigate(qq) {
        const Eq = this.host.getState();
        if ("Up" === qq && 0 === Eq.focus.row && "chat" === Eq.kind) return (0, ng.b)().stepHistory(), void this.host.setState({
          ...Eq
        });
        const gq = ((qq, Eq, gq, Yq) => {
          if ("Left" === gq || "Right" === gq) {
            const Yq = qq[Eq.row].length,
              lq = (Eq.col + ("Right" === gq ? 1 : -1) + Yq) % Yq,
              Oq = {
                row: Eq.row,
                col: lq
              };
            return {
              pos: Oq,
              preferredX: gO(qq, Oq)
            }
          }
          const lq = (Eq.row + ("Down" === gq ? 1 : -1) + qq.length) % qq.length;
          return {
            pos: {
              row: lq,
              col: YO(qq, lq, Yq)
            },
            preferredX: Yq
          }
        })(NO(Eq), Eq.focus, qq, Eq.preferredX);
        this.host.setState({
          ...Eq,
          focus: gq.pos,
          preferredX: gq.preferredX
        })
      }
      readNavDirection(qq) {
        for (const Eq of aq.C)
          if (qq.isHeld(Eq)) return Eq;
        return (0, aq.kb)((0, aq.j)(qq.leftStick, (0, Wq.i)().moveDeadzone))
      }
    }
    const QO = ["Up", "Down", "Left", "Right"],
      yO = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const tO = new class {
      constructor() {
        this.state = BO, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new dO(this), this.padInput = new PO(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(qq) {
        const Eq = qq.visible !== this.state.visible;
        this.state = qq;
        for (const gq of this.listeners) gq();
        Eq && cq.i.TV(jO.d, qq.visible)
      }
      subscribe(qq) {
        return this.listeners.add(qq), () => {
          this.listeners.delete(qq)
        }
      }
      install() {
        const qq = Bq.c.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, wq.k)(document.activeElement),
            onFrame: qq => {
              this.onFrame(qq)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: qq => QO.includes(qq) || !this.state.visible && qq === (0, uq.i)("keyboardType")
          }),
          Eq = qq => {
            const Eq = qq.target;
            (0, wq.k)(Eq) && (Eq === this.pendingChatInput || (0, Nq.k)() ? this.open(Eq) : this.state.visible && Eq !== this.state.target && (this.ownedField = null, this.hide()))
          },
          gq = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          Yq = qq => {
            qq.isTrusted && this.state.visible && (qq => !qq.repeat && !yO.has(qq.key) && !(0, AO.b)(qq.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(qq.key))(qq) && this.hide()
          },
          lq = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...aO(this.state.target)
            })
          };
        document.addEventListener("focusin", Eq, !0), document.addEventListener("focusout", gq, !0), window.addEventListener("keydown", Yq, !0), window.addEventListener("resize", lq);
        const Oq = cq.i.subscribe(il.b, (() => {
            this.openChat()
          })),
          mq = cq.i.subscribe(jO.e, (qq => {
            this.openForField(qq)
          }));
        return () => {
          qq(), document.removeEventListener("focusin", Eq, !0), document.removeEventListener("focusout", gq, !0), window.removeEventListener("keydown", Yq, !0), window.removeEventListener("resize", lq), cq.i.unsubscribe(Oq), cq.i.unsubscribe(mq), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const qq = (0, ng.b)();
        qq ? document.activeElement !== qq.input ? (this.clearPendingChat(), this.pendingChatInput = qq.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), qq.open()) : this.open(qq.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(qq) {
        (0, wq.k)(qq) ? (document.activeElement !== qq && qq.focus(), document.activeElement === qq && this.open(qq)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", qq)
      }
      open(qq) {
        var Eq;
        if (this.clearPendingChat(), this.ownedField = qq, this.state.visible && this.state.target === qq) return;
        this.restoreInputMode(), (0, wq.p)(qq), this.savedInputMode = qq.getAttribute("inputmode"), qq.setAttribute("inputmode", "none");
        const gq = {
          ...BO,
          visible: !0,
          target: qq,
          kind: (0, ng.h)(qq) ? "chat" : null !== (Eq = (0, ng.e)(qq).kind) && void 0 !== Eq ? Eq : null,
          accentsFirst: (Yq = dl.h.get().getCurrentLanguageCode(), Il.has(Yq)),
          ...aO(qq)
        };
        var Yq;
        const lq = NO(gq),
          Oq = ((qq, Eq) => {
            for (let gq = 0; gq < qq.length; gq++) {
              const Yq = qq[gq].findIndex((qq => "char" === qq.type && qq.char === Eq));
              if (-1 !== Yq) return {
                row: gq,
                col: Yq
              }
            }
            return null
          })(lq, "q");
        this.padInput.reset(), this.setState({
          ...gq,
          focus: Oq,
          preferredX: gO(lq, Oq)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(BO))
      }
      onFrame(qq) {
        if (this.releaseLostField()) return;
        const Eq = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(qq) : (0, wq.k)(Eq) && this.padInput.onHiddenFrame(qq, Eq)
      }
      releaseLostField() {
        const qq = this.ownedField;
        return !(null === qq || qq.isConnected && document.activeElement === qq) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: qq
        } = this.state;
        qq && (null === this.savedInputMode ? qq.removeAttribute("inputmode") : qq.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var rO = gq(8734);
    const vO = new Map(Rl.map((qq => {
        let {
          command: Eq,
          action: gq
        } = qq;
        return [Eq, gq]
      }))),
      hO = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      nO = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        vc: "controller:keyboardTargetBookTitle"
      },
      bO = qq => {
        const Eq = (() => {
          const [, qq] = (0, Sq.useReducer)((qq => qq + 1), 0);
          return qq
        })();
        (0, Sq.useEffect)((() => {
          if (!qq) return;
          const gq = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const lq of gq) qq.addEventListener(lq, Eq);
          document.addEventListener("selectionchange", Eq);
          const Yq = new MutationObserver(Eq);
          return Yq.observe(qq, {
            attributeFilter: ["placeholder"]
          }), () => {
            Yq.disconnect();
            for (const Yq of gq) qq.removeEventListener(Yq, Eq);
            document.removeEventListener("selectionchange", Eq)
          }
        }), [qq, Eq])
      },
      iO = qq => {
        qq.preventDefault()
      },
      ZO = qq => {
        "mouse" !== qq.pointerType && qq.preventDefault()
      },
      fO = () => {
        var qq;
        const {
          t: Eq
        } = (0, lq.v)(), gq = (() => {
          const [qq, Eq] = (0, Sq.useState)(tO.getState());
          return (0, Sq.useEffect)((() => tO.subscribe((() => {
            Eq(tO.getState())
          }))), []), qq
        })(), Yq = (0, Nq.y)(), Oq = (0, Sq.useRef)(null);
        (0, Wq.r)(), (0, Nq.B)(), (0, Sq.useEffect)((() => {
          const qq = tO.install(),
            Eq = null;
          return () => {
            qq(), null === Eq || void 0 === Eq || Eq()
          }
        }), []);
        const mq = (0, Sq.useMemo)((() => cO.map((qq => Eq(qq)))), [Eq]),
          xq = gq.visible && "chat" === gq.kind ? gq.target : null;
        bO(xq);
        const Aq = null !== (qq = null === xq || void 0 === xq ? void 0 : xq.value) && void 0 !== qq ? qq : "",
          cq = ((qq, Eq, gq) => {
            if (!qq.startsWith("/")) return [];
            const Yq = [];
            for (let lq = Eq.length - 1; lq >= 0 && Yq.length < gq; lq--) {
              const gq = Eq[lq].trim();
              gq.startsWith(qq) && gq !== qq && !Yq.includes(gq) && Yq.push(gq)
            }
            return Yq
          })(Aq, Aq.startsWith("/") ? (0, rO.f)() : [], cO.length),
          Bq = Aq.startsWith("/"),
          aq = Bq ? cO.map(((qq, Eq) => {
            var gq;
            return null !== (gq = cq[Eq]) && void 0 !== gq ? gq : ""
          })) : mq;
        if ((0, Sq.useEffect)((() => {
            tO.editor.setPhraseRow(aq, Bq)
          })), (0, Sq.useEffect)((() => {
            const qq = Oq.current;
            if (qq) return qq.addEventListener("touchstart", iO, {
              passive: !1
            }), () => {
              qq.removeEventListener("touchstart", iO)
            }
          }), [gq.visible]), !gq.visible) return null;
        const Vq = NO(gq),
          dq = EO(Vq),
          jq = qq => "char" === qq.type ? xO(qq.char, gq.page, gq.shift) : "phrase" === qq.type ? aq[qq.phraseIndex] : (qq => {
            switch (qq) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === gq.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return hO[el(gq.page, gq.accentsFirst)[qq]];
              case "space":
                return Eq("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return Eq("chat" === gq.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(qq.command),
          Hq = qq => {
            tO.editor.pressKey(qq)
          };
        return (0, Lq.jsxs)("div", {
          ref: Oq,
          className: Gq()(ng.m, "top" === gq.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: gq.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": Vq.length,
            "--pad-keyboard-height": `${gq.maxHeightPx}px`
          },
          onPointerDown: ZO,
          onMouseDown: iO,
          children: [(0, Lq.jsx)(MO, {
            target: gq.target,
            label: gq.kind ? Eq(nO[gq.kind]) : gq.target.placeholder || Eq("controller:keyboardTargetText")
          }), (0, Lq.jsx)("div", {
            className: "PadKeyboardRows",
            children: Vq.map(((qq, Eq) => (0, Lq.jsx)("div", {
              className: Gq()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === qq[0].type
              }),
              children: qq.map(((qq, lq) => {
                const Oq = Yq && gq.focus.row === Eq && gq.focus.col === lq,
                  mq = "command" === qq.type ? vO.get(qq.command) : void 0;
                return (0, Lq.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: qq.width / dq * 100 + "%"
                  },
                  children: (0, Lq.jsxs)("div", {
                    className: Gq()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: Oq,
                      PadKeyboardKeyCommand: "command" === qq.type,
                      PadKeyboardKeyPhrase: "phrase" === qq.type,
                      PadKeyboardKeyActive: "command" === qq.type && "shift" === qq.command && "off" !== gq.shift,
                      PadKeyboardKeySubmit: "command" === qq.type && "submit" === qq.command
                    }),
                    role: "button",
                    onClick: () => {
                      Hq({
                        row: Eq,
                        col: lq
                      })
                    },
                    onTouchEnd: qq => {
                      var gq, Yq;
                      qq.preventDefault(), gq = qq.changedTouches[0], Yq = qq.currentTarget.getBoundingClientRect(), gq && gq.clientX >= Yq.left && gq.clientX <= Yq.right && gq.clientY >= Yq.top && gq.clientY <= Yq.bottom && Hq({
                        row: Eq,
                        col: lq
                      })
                    },
                    children: [(0, Lq.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: jq(qq)
                    }), Yq && mq && (0, Lq.jsx)(Ql, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, uq.i)(mq)
                    })]
                  })
                }, lq)
              }))
            }, Eq)))
          })]
        })
      },
      MO = qq => {
        let {
          target: Eq,
          label: gq
        } = qq;
        bO(Eq);
        const Yq = (0, Sq.useRef)(null),
          lq = (0, Sq.useRef)(null),
          Oq = Eq instanceof HTMLTextAreaElement;
        (0, Sq.useLayoutEffect)((() => {
          const qq = Yq.current,
            Eq = lq.current;
          Oq ? qq.scrollTop = Eq.offsetTop - qq.clientHeight / 2 : qq.scrollLeft = Eq.offsetLeft - qq.clientWidth / 2
        }));
        const {
          value: mq,
          start: xq,
          end: Aq
        } = (0, wq.t)(Eq), cq = "password" === Eq.type ? "\u2022".repeat(mq.length) : mq;
        return (0, Lq.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, Lq.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: gq
          }), (0, Lq.jsxs)("div", {
            ref: Yq,
            className: Gq()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: Oq
            }),
            children: [(0, Lq.jsx)("span", {
              children: cq.slice(0, xq)
            }), (0, Lq.jsx)("span", {
              ref: lq,
              className: "PadKeyboardCaret"
            }), xq !== Aq && (0, Lq.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: cq.slice(xq, Aq)
            }), (0, Lq.jsx)("span", {
              children: cq.slice(Aq)
            }), 0 === cq.length && Eq.placeholder && Eq.placeholder !== gq && (0, Lq.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: Eq.placeholder
            })]
          })]
        })
      };
    var TO = gq(1367),
      zO = gq(3294);
    const SO = function() {
        for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
        return Eq.map(uq.i)
      },
      pO = (qq, Eq) => {
        const gq = Ug(qq);
        return gq ? [{
          glyphs: [gq],
          labelKey: Eq
        }] : []
      },
      GO = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      LO = "--pad-hint-bar-clearance",
      JO = "[data-pad-hint-bar-avoid]",
      kO = qq => {
        const Eq = [];
        for (const gq of qq)(0, eq.p)(gq) && Eq.push(gq.getBoundingClientRect());
        return Eq
      },
      RO = qq => {
        if (!qq) return null;
        const Eq = cY(),
          gq = Eq ? kO(((qq, Eq) => {
            const gq = qq.closest(JO);
            return gq ? [gq] : ("popup" === Eq ? document : qq).querySelectorAll(JO)
          })(Eq.root, Eq.layer.kind)) : [],
          Yq = !Eq || Eq.root.hasAttribute("data-pad-shows-hud");
        if (((0, zO.g)(null === Eq || void 0 === Eq ? void 0 : Eq.layer.kind, (0, zO.h)()) || Yq) && gq.push(...kO(document.querySelectorAll(GO.join(",")))), 0 === gq.length) return null;
        const {
          width: lq,
          height: Oq
        } = qq.getBoundingClientRect(), mq = window.innerHeight - 8, xq = (0, zO.l)(mq, {
          width: lq,
          height: Oq
        }, window.innerWidth / 2, gq, 8);
        return xq === mq ? null : Math.round(window.innerHeight - xq)
      },
      UO = qq => {
        const Eq = document.documentElement.style,
          gq = qq ? `${Math.round(window.innerHeight-qq.getBoundingClientRect().top)}px` : "";
        Eq.getPropertyValue(LO) !== gq && (gq ? Eq.setProperty(LO, gq) : Eq.removeProperty(LO))
      },
      FO = () => {
        const {
          t: qq
        } = (0, lq.v)(), {
          hideButtonHints: Eq
        } = (0, Wq.r)(), gq = (0, Nq.y)(), [Yq, Oq] = (0, Sq.useState)(!1), [mq, cq] = (0, Sq.useState)([]), [Vq, dq] = (0, Sq.useState)(null), jq = (0, Sq.useRef)(null), Hq = (0, Sq.useRef)(null);
        (0, Vl.f)(jO.d, (qq => {
          Oq(qq)
        })), (0, Vl.f)(zO.j, (() => {
          var qq;
          null === (qq = Hq.current) || void 0 === qq || qq.call(Hq)
        }));
        const oq = gq && !Eq && !Yq;
        return (0, Sq.useEffect)((() => {
          if (!oq) return;
          let qq = null;
          const Eq = () => {
            const Eq = (() => {
                var qq;
                const Eq = Bq.c.getActiveConsumerName(),
                  gq = (0, zO.d)();
                if (gq) {
                  const qq = (0, uq.i)(gq),
                    Eq = "emoteWheel" === gq && "wheel" === (0, Wq.i)().emoteButton || !(0, aq.J)(Bq.c.getLastFrame().values, qq) ? {
                      glyphs: SO("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [qq],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, uq.v)(qq)],
                    labelKey: "controller:wheelChoose"
                  }, Eq, {
                    glyphs: SO("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const Yq = cY();
                if (!Yq || "focus" !== Eq && "cursor" !== Eq) return (0, zO.b)(uq.i);
                const lq = [],
                  Oq = {
                    glyphs: SO("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  mq = (0, Fq.B)(Yq.root),
                  xq = mq ? !(0, eq.w)(mq) : Boolean(Yq.layer.close),
                  cq = !mq && Yq.layer.closeLabelKey ? Yq.layer.closeLabelKey : Oq.labelKey,
                  Nq = xq ? [{
                    ...Oq,
                    labelKey: cq
                  }] : [],
                  Vq = Zg(Yq.layer.kind) ? [{
                    glyphs: SO("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === Eq) return lq.push({
                  glyphs: SO("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), lq.push({
                  glyphs: SO("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), lq.push(...Nq), lq.push(...Vq), lq.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), rY() && lq.push({
                  glyphs: SO("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), lq;
                const dq = eY.getFocused();
                dq && (0, iY.e)(dq) ? lq.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : dq && (0, Fq.G)(dq) ? lq.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : lq.push({
                  glyphs: SO("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const jq = dq ? null === (qq = Wg(dq)) || void 0 === qq ? void 0 : qq.dataset.padSecondary : void 0;
                jq && lq.push({
                  glyphs: SO("menuSecondary"),
                  labelKey: jq
                }), lq.push(...null !== dq && void 0 !== dq && dq.closest("[data-pad-friends-column]") ? [Oq] : Nq), lq.push(...Vq);
                const Hq = "home" === Yq.layer.kind;
                Xg(Yq.root) || !zg(Yq.root) && !wg(Yq) ? Hq && lq.push({
                  glyphs: SO("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : lq.push({
                  glyphs: SO("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), Hq && (lq.push(...pO("inventory", "controller:menusFriends")), jq || lq.push({
                  glyphs: SO("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), lq.push(...pO("pause", "controller:menusSettings")), lq.push(...pO("leaderboard", "controller:menusNotifications")));
                const oq = Aq.b.get("openEverythingMenuName");
                return "inGame" === Aq.b.get("gameState") && "popup" !== Yq.layer.kind && null !== oq && ((0, Ag.l)(oq) ? lq.push(...pO("leaderboard", "controller:menusClose")) : oq !== xg.p.LOBBY_LEADERBOARD && lq.push(...pO("leaderboard", "controller:menusLobby"))), lq.push({
                  glyphs: SO("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), lq
              })(),
              gq = RO(jq.current),
              Yq = ((qq, Eq) => `${qq.map((qq=>`${qq.glyphs.join("+")}:${qq.labelKey}`)).join("|")}@${Eq}`)(Eq, gq);
            Yq !== qq && (qq = Yq, (0, xq.unstable_batchedUpdates)((() => {
              cq(Eq), dq(gq)
            }))), UO(jq.current)
          };
          Eq(), Hq.current = Eq;
          const gq = requestAnimationFrame(Eq),
            Yq = setInterval(Eq, 150);
          return () => {
            Hq.current = null, cancelAnimationFrame(gq), clearInterval(Yq), UO(null)
          }
        }), [oq]), (0, Sq.useLayoutEffect)((() => {
          if (!oq) return;
          if (0 === mq.length) return void UO(null);
          const qq = RO(jq.current);
          qq === Vq ? UO(jq.current) : dq(qq)
        }), [oq, mq, Vq]), oq && 0 !== mq.length ? (0, Lq.jsx)("div", {
          ref: jq,
          className: "PadButtonHintBar SmallTextBold",
          style: null === Vq ? void 0 : {
            bottom: Vq
          },
          "aria-hidden": !0,
          children: mq.map((Eq => (0, Lq.jsxs)("div", {
            className: "PadButtonHint",
            children: [Eq.glyphs.map((qq => (0, Lq.jsx)(Ql, {
              glyph: qq,
              className: "PadButtonHintGlyph"
            }, qq))), (0, Lq.jsx)("span", {
              children: qq(Eq.labelKey)
            })]
          }, Eq.labelKey)))
        }) : null
      };
    var sO = gq(1716);
    const XO = [eq.e, "label", "[data-pad-slider]"].join(","),
      wO = "data-pad-cursor-probe",
      KO = qq => {
        var Eq;
        const gq = (qq => {
          const Eq = [];
          for (let Yq = qq; Yq && Yq !== document.body && Yq !== document.documentElement && (Eq.push(Yq), !(Eq.length > 8)); Yq = Yq.parentElement);
          const gq = document.documentElement.classList.contains(Nq.r) ? Eq[Eq.length - 1] : void 0;
          null === gq || void 0 === gq || gq.setAttribute(wO, "");
          try {
            return Eq.map((qq => ({
              element: qq,
              cursor: getComputedStyle(qq).cursor
            })))
          } finally {
            null === gq || void 0 === gq || gq.removeAttribute(wO)
          }
        })(qq);
        if ("pointer" !== (null === (Eq = gq[0]) || void 0 === Eq ? void 0 : Eq.cursor)) return null;
        let Yq = 0;
        for (; Yq + 1 < gq.length && "pointer" === gq[Yq + 1].cursor;) Yq++;
        return gq[Yq].element
      },
      CO = (qq, Eq, gq, Yq) => {
        const lq = Yq.root.contains(qq) ? Yq.root : null;
        for (let Oq = qq; Oq && Oq !== document.body && Oq !== document.documentElement; Oq = Oq.parentElement) {
          if (Oq instanceof HTMLElement && hq(Oq, Eq) && fq(Oq, Eq, gq)) return Oq;
          if (Oq === lq) break
        }
        return "home" === Yq.layer.kind || "gamePage" === Yq.layer.kind ? ((qq, Eq) => {
          const gq = document.scrollingElement;
          return gq instanceof HTMLElement && ![document.documentElement, document.body].some((Eq => {
            const gq = getComputedStyle(Eq),
              Yq = "y" === qq ? gq.overflowY : gq.overflowX;
            return "hidden" === Yq || "clip" === Yq
          })) && fq(gq, qq, Eq) ? gq : null
        })(Eq, gq) : null
      };
    const IO = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, Vq.b)(aq.x), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const qq = Bq.c.register({
              name: "cursor",
              isActive: () => "cursor" === vY(),
              onFrame: qq => {
                this.onFrame(qq)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: qq => (0, Bq.g)(qq) || qq === (0, uq.i)("menuConfirm") && (0, Fq.H)((0, Nq.e)())
            }),
            Eq = (0, EY.m)((qq => {
              const Eq = qq.getRoot();
              Eq && this.layerPoints.delete(Eq), Eq === this.layerRoot && (this.layerRoot = null)
            })),
            gq = cq.i.subscribe("appManagerUpdated|activeInputDevice", (qq => {
              "gamepad" !== qq && this.active && !this.hidden && this.hide()
            }));
          return () => {
            qq(), Eq(), cq.i.unsubscribe(gq), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, Nq.k)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.TV()
        }
        activate(qq) {
          this.active = !0, this.hidden = !1;
          const Eq = QY();
          !Eq || Eq.root && Eq.root !== qq.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(qq), this.jumpTo(Eq.point))
        }
        jumpTo(qq) {
          this.state = {
            x: qq.x,
            y: qq.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.TV())
        }
        onFrame(qq) {
          const Eq = cY();
          if (!Eq) return;
          if (this.active || this.activate(Eq), this.followPage(Eq)) return;
          this.followLayer(Eq);
          const gq = qq.wokeDevice ? (0, Nq.e)() : null;
          if (gq && this.jumpTo(gq), !(0, Nq.k)()) return void this.hide();
          const Yq = (0, uq.i)("menuToggleCursor");
          if (qq.wasPressed(Yq)) return Bq.c.consumeButton(Yq), void PY(this.getHandoff(null));
          if (this.handBackToFocus(qq)) return;
          const lq = (0, uq.i)("menuConfirm"),
            Oq = (0, uq.i)("menuSecondary");
          if (qq.wasPressed((0, uq.i)("menuBack"))) return (0, Fq.l)(Eq.root) || (0, Fq.f)(Eq.root) || uY(), void this.TV();
          if (Ig(null, qq, Eq)) return qq.wasReleased(lq) && this.press && (this.updateHit(!1), this.updateConfirm(qq, lq)), void this.TV();
          if (document.pointerLockElement) return void this.hide();
          const mq = hY() ? {
              x: 0,
              y: 0
            } : (qq => {
              const Eq = (qq, Eq) => (qq ? 1 : 0) - (Eq ? 1 : 0);
              return {
                x: Eq(qq.isHeld("Right"), qq.isHeld("Left")),
                y: Eq(qq.isHeld("Down"), qq.isHeld("Up"))
              }
            })(qq),
            xq = (0, Wq.i)().moveDeadzone,
            Aq = ((qq, Eq) => {
              const gq = (0, aq.j)(qq, Pq(Eq));
              return Math.hypot(gq.x, gq.y)
            })(qq.leftStick, xq) > 0 || 0 !== mq.x || 0 !== mq.y;
          if (this.hidden) {
            const Eq = qq.wasPressed(lq),
              gq = qq.wasPressed(Oq);
            if (!Aq && !tq(qq.rightStick) && !Eq && !gq && !qq.wokeDevice) return void this.TV();
            if (this.hidden = !1, this.updateHit(!1), Eq || gq) return Eq && (this.press = {
              kind: "ignored"
            }, qq.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.TV()
          }
          this.movePendingPageStart(Aq);
          const cq = this.getPoint();
          this.state = yq(this.state, {
            stick: qq.leftStick,
            moveDeadzone: xq,
            dpad: mq,
            dtMs: qq.dtMs,
            cursorSpeedPercent: (0, Wq.i)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const Vq = this.state.x !== cq.x || this.state.y !== cq.y,
            dq = [lq, Oq].some((Eq => qq.wasPressed(Eq) || qq.wasReleased(Eq)));
          (Vq || dq || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(Vq), this.updateConfirm(qq, lq), this.updateSecondary(qq, Oq), this.updateScroll(qq, Eq), this.TV()
        }
        followPage(qq) {
          const Eq = "home" === qq.layer.kind || "gamePage" === qq.layer.kind,
            gq = this.page;
          if (this.page = Eq ? {
              key: (0, EY.t)(qq.layer),
              root: qq.root
            } : null, !this.page || !gq || gq.root !== qq.root || gq.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(qq), "hybrid" === oY()) return dY = null, aY = null, jY.lock(), !0;
          const {
            key: Yq
          } = this.page;
          return this.pendingPageStart = {
            root: qq.root,
            key: Yq,
            returning: eY.notePageEnteredByCursor(Yq),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(qq) {
          const Eq = this.pendingPageStart;
          if (!Eq) return;
          if (qq || Eq.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const gq = Eq.returning ? eY.recallStop(Eq.root, Eq.key) : null;
          if (!gq && Eq.returning && performance.now() - Eq.enteredAtMs < 1e3) return;
          const Yq = null !== gq && void 0 !== gq ? gq : eY.pickInitial(Eq.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: Eq.enteredAtMs
          });
          Yq && (this.pendingPageStart = null, this.jumpTo((0, Fq.D)(Yq)))
        }
        setLayer(qq) {
          this.layerRoot = qq.root, this.layerOrder = qq.order
        }
        followLayer(qq) {
          var Eq;
          if (qq.root === this.layerRoot) return;
          null !== (Eq = this.layerRoot) && void 0 !== Eq && Eq.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const gq = this.layerPoints.get(qq.root),
            Yq = gq && qq.order <= this.layerOrder ? gq : eY.getLayerStartPoint(qq.root);
          this.setLayer(qq), this.jumpTo(Yq)
        }
        getHandoff(qq) {
          var Eq;
          return {
            point: this.getPoint(),
            element: null !== (Eq = this.interactive) && void 0 !== Eq ? Eq : this.findDraggedSliderNearby(),
            direction: qq
          }
        }
        findDraggedSliderNearby() {
          const qq = this.draggedSlider;
          if (null === qq || void 0 === qq || !qq.isConnected) return null;
          const Eq = qq.getBoundingClientRect(),
            {
              y: gq
            } = this.getPoint();
          return gq >= Eq.top - 40 && gq <= Eq.bottom + 40 ? qq : null
        }
        handBackToFocus(qq) {
          if (!hY()) return !1;
          const Eq = aq.C.find((Eq => qq.wasPressed(Eq)));
          return !!Eq && (gq = this.getHandoff(Eq), dY = WY(gq), aY = null, jY.lock(), Bq.c.handOffHeldInput(), !0);
          var gq
        }
        getAssistContext() {
          const qq = this.interactive;
          if (null === qq || void 0 === qq || !qq.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const Eq = qq.getBoundingClientRect();
          if (Eq.width > .4 * window.innerWidth || Eq.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const gq = (0, Wq.i)().cursorMagnetism && !(0, sO.b)(qq) && !qq.closest("[data-pad-slider]"),
            Yq = this.magnet && this.magnet !== qq && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : Eq;
          return {
            overInteractive: !0,
            magnetTarget: gq ? {
              x: Yq.left + Yq.width / 2,
              y: Yq.top + Yq.height / 2
            } : null
          }
        }
        updateHit(qq) {
          this.lastHitTestMs = performance.now();
          const Eq = this.getPoint(),
            gq = document.elementFromPoint(Eq.x, Eq.y),
            Yq = gq && !(0, jq.q)(gq) && (qq => {
              var Eq;
              const gq = cY();
              return !(gq && !gq.root.contains(qq) && !qq.closest(".tooltip-container")) || !(null !== (Eq = document.getElementById("root")) && void 0 !== Eq && Eq.contains(qq))
            })(gq) ? gq : null;
          if (Yq !== this.hit) return (0, Fq.s)(this.hit, Yq, Eq), this.hit = Yq, void this.setInteractive(Yq ? (qq => {
            const Eq = qq.closest(XO);
            if (Eq) {
              var gq, Yq;
              const qq = null !== (gq = null === (Yq = Eq.parentElement) || void 0 === Yq ? void 0 : Yq.closest("[data-pad-focusable]")) && void 0 !== gq ? gq : Eq;
              return (0, eq.w)(qq) ? {
                element: null,
                magnet: null
              } : {
                element: qq,
                magnet: Eq
              }
            }
            const lq = KO(qq);
            return {
              element: lq,
              magnet: lq
            }
          })(Yq) : {
            element: null,
            magnet: null
          });
          qq && Yq && (0, Fq.s)(Yq, Yq, Eq)
        }
        setInteractive(qq) {
          let {
            element: Eq,
            magnet: gq
          } = qq;
          this.interactive = Eq, this.magnet = gq
        }
        clearHover() {
          this.hit && (0, Fq.s)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const qq = this.hit;
          if (!qq || (0, Fq.G)(qq)) return {
            kind: "ignored"
          };
          const Eq = (0, iY.e)(qq),
            gq = qq.closest("[data-pad-slider]");
          return Eq && gq ? {
            kind: "slider",
            slider: gq,
            adjuster: Eq
          } : ((0, Fq.v)(qq, this.getPoint()), {
            kind: "pointer",
            target: qq
          })
        }
        applySliderFraction(qq) {
          var Eq;
          const gq = qq.slider.getBoundingClientRect(),
            Yq = gq.height > gq.width,
            lq = null === (Eq = qq.slider.querySelector("[data-pad-slider-handle]")) || void 0 === Eq ? void 0 : Eq.getBoundingClientRect(),
            Oq = lq ? Yq ? lq.height : lq.width : 0,
            mq = (Yq ? gq.height : gq.width) - Oq;
          if (mq <= 0) return;
          const xq = Yq ? gq.bottom - Oq / 2 - this.state.y : this.state.x - gq.left - Oq / 2;
          qq.adjuster.setFraction(Math.max(0, Math.min(1, xq / mq)))
        }
        updateConfirm(qq, Eq) {
          qq.wasPressed(Eq) && (this.press = qq.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const gq = this.press;
          if (!gq) return;
          if (qq.isHeld(Eq)) return "slider" === gq.kind && this.applySliderFraction(gq), void this.updateRepeat();
          this.press = null;
          const Yq = this.repeated;
          if (this.endRepeat(), !qq.wasReleased(Eq)) return void this.endPressWithoutClick(gq);
          const lq = this.getPoint(),
            Oq = this.hit;
          if ("slider" === gq.kind && gq.adjuster.endDrag(), "pointer" === gq.kind) {
            const qq = null !== Oq && void 0 !== Oq ? Oq : gq.target.isConnected ? gq.target : null;
            qq && (0, Fq.y)(qq, lq);
            const Eq = Oq && gq.target.isConnected && !Yq ? ((qq, Eq) => {
              for (let gq = qq; gq; gq = gq.parentElement)
                if (gq.contains(Eq)) return gq;
              return null
            })(gq.target, Oq) : null;
            Eq && (eY.noteCursorActivation(Eq), (0, jq.h)(Eq, new MouseEvent("click", (0, Fq.S)(lq, 0, 0))), (0, Fq.i)(Eq), (0, Fq.P)(Eq) && (0, Fq.L)(Eq))
          }
        }
        beginRepeat() {
          var qq, Eq, gq;
          const Yq = null !== (qq = null === (Eq = this.hit) || void 0 === Eq ? void 0 : Eq.closest("[data-pad-repeat]")) && void 0 !== qq ? qq : null;
          this.repeatStop = Yq, this.repeatKey = null !== (gq = null === Yq || void 0 === Yq ? void 0 : Yq.getAttribute("data-pad-repeat")) && void 0 !== gq ? gq : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const qq = this.repeatStop;
          if (!qq) return;
          const Eq = this.hit;
          qq.isConnected && !(0, eq.w)(qq) && qq.getAttribute("data-pad-repeat") === this.repeatKey && Eq && qq.contains(Eq) ? qq.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, eY.noteCursorActivation(qq), (0, jq.h)(qq, new MouseEvent("click", (0, Fq.S)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(qq) {
          "slider" === qq.kind && qq.adjuster.endDrag(), "pointer" === qq.kind && qq.target.isConnected && (0, Fq.y)(qq.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(qq, Eq) {
          qq.wasPressed(Eq) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !qq.isHeld(Eq) && (this.secondaryArmed = !1, qq.wasReleased(Eq) && this.hit && (0, Fq.p)(this.hit, this.getPoint(), 2))
        }
        updateScroll(qq, Eq) {
          const gq = rq(qq.rightStick, qq.dtMs);
          if (0 === gq.x && 0 === gq.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + gq.x,
            y: this.scrollRemainder.y + gq.y
          };
          const Yq = Math.trunc(this.scrollRemainder.x),
            lq = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - Yq,
            y: this.scrollRemainder.y - lq
          };
          const Oq = this.hit;
          if (!Oq) return;
          let mq = !1;
          if (0 !== lq) {
            const qq = CO(Oq, "y", lq > 0 ? 1 : -1, Eq);
            qq && (qq.scrollBy({
              top: lq,
              behavior: "instant"
            }), mq = !0)
          }
          if (0 !== Yq) {
            const qq = CO(Oq, "x", Yq > 0 ? 1 : -1, Eq);
            qq && (qq.scrollBy({
              left: Yq,
              behavior: "instant"
            }), mq = !0)
          }
          mq && (this.lastHitTestMs = -1 / 0)
        }
        TV() {
          Xq.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      eO = () => {
        const qq = (0, Sq.useMemo)((() => new Rq), []),
          Eq = (0, Nq.y)();
        return (0, Sq.useEffect)((() => {
          if (!Eq) return;
          let gq = 0,
            Yq = {
              of: null,
              atMs: 0,
              list: []
            };
          const lq = document.getElementsByClassName(nY),
            Oq = qq => {
              for (const Eq of [...lq]) Eq !== qq && Eq.classList.remove(nY)
            },
            mq = () => {
              var Eq;
              gq = requestAnimationFrame(mq);
              const lq = (() => {
                const qq = eY.getFocused();
                if (eY.isActive() && null !== qq && void 0 !== qq && qq.isConnected) return qq;
                const Eq = IO.getHighlighted();
                return null !== Eq && void 0 !== Eq && Eq.isConnected ? Eq : null
              })();
              Oq(lq), lq && !lq.classList.contains(nY) && lq.classList.add(nY);
              const xq = null !== (Eq = null === lq || void 0 === lq ? void 0 : lq.closest("[data-pad-reticle-box]")) && void 0 !== Eq ? Eq : lq;
              qq.show(xq ? ((qq, Eq) => {
                let gq = qq.left,
                  Yq = qq.top,
                  lq = qq.right,
                  Oq = qq.bottom;
                for (const mq of Eq) {
                  if (!mq) continue;
                  const qq = Tq(mq);
                  gq = Math.max(gq, qq.left), Yq = Math.max(Yq, qq.top), lq = Math.min(lq, qq.right), Oq = Math.min(Oq, qq.bottom)
                }
                return lq <= gq || Oq <= Yq ? null : {
                  left: gq,
                  top: Yq,
                  width: lq - gq,
                  height: Oq - Yq
                }
              })(xq.getBoundingClientRect(), (qq => {
                const Eq = performance.now();
                return (Yq.of !== qq || Eq - Yq.atMs > 500) && (Yq = {
                  of: qq,
                  atMs: Eq,
                  list: [nq(qq, "y"), nq(qq, "x")]
                }), Yq.list
              })(xq)) : null)
            };
          return gq = requestAnimationFrame(mq), () => {
            cancelAnimationFrame(gq), Oq(null), qq.hide()
          }
        }), [Eq, qq]), (0, Lq.jsx)(Uq, {
          placer: qq,
          className: "PadFocusRing"
        })
      },
      DO = (qq, Eq) => {
        qq.style.transform = `translate3d(${Eq.x}px, ${Eq.y}px, 0)`, qq.classList.toggle("Visible", Eq.visible), qq.classList.toggle("Pressed", Eq.pressed)
      },
      qm = () => {
        const qq = (0, Sq.useRef)(null);
        return (0, Sq.useEffect)((() => {
          const Eq = Xq.subscribe((Eq => {
            qq.current && DO(qq.current, Eq)
          }));
          return qq.current && DO(qq.current, Xq.get()), Eq
        }), []), (0, Lq.jsx)("div", {
          ref: qq,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, Lq.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      Em = "#ncmp__modal.ncmp__active",
      gm = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(Em) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(Em),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      Ym = "PadOverThirdParty",
      lm = new Set(gm.map((qq => qq.id))),
      Om = () => {
        const qq = gm.map((qq => {
            let {
              id: Eq,
              find: gq,
              startSelectors: Yq
            } = qq;
            return (0, EY.q)({
              id: Eq,
              kind: "popup",
              getRoot: () => {
                const qq = gq(),
                  Eq = qq ? ((qq, Eq) => {
                    var gq;
                    for (const Yq of Eq) {
                      const Eq = qq.querySelector(Yq);
                      if (Eq) return Eq
                    }
                    return null !== (gq = [...qq.querySelectorAll("button")].find((qq => !qq.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== gq ? gq : null
                  })(qq, Yq) : null;
                if (qq && Eq && !Eq.hasAttribute("data-pad-default-focus")) {
                  for (const Eq of qq.querySelectorAll("[data-pad-default-focus]")) Eq.removeAttribute("data-pad-default-focus");
                  for (const Eq of qq.querySelectorAll("[data-pad-hint-bar-avoid]")) Eq.removeAttribute("data-pad-hint-bar-avoid");
                  Eq.setAttribute("data-pad-default-focus", ""), ((qq, Eq) => {
                    let gq = qq;
                    for (let Yq = qq.parentElement; Yq && Eq.contains(Yq) && !(Yq.getBoundingClientRect().height >= window.innerHeight / 2); Yq = Yq.parentElement) gq = Yq;
                    return gq
                  })(Eq, qq).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return qq
              },
              close: null,
              memoryKey: null
            })
          })),
          Eq = document.documentElement,
          gq = mq.h.onFrame((() => {
            const qq = (0, Nq.k)() ? cY() : null,
              gq = !!qq && (Yq = qq.layer, lm.has(Yq.id));
            var Yq;
            Eq.classList.contains(Ym) !== gq && Eq.classList.toggle(Ym, gq)
          }));
        return () => {
          for (const Eq of qq) Eq();
          gq(), Eq.classList.remove(Ym)
        }
      },
      mm = "PadLargePointer",
      xm = () => {
        (0, Sq.useEffect)((() => {
          const qq = (0, jq.m)(document.body),
            Eq = eY.install(),
            gq = IO.install(),
            Yq = Om();
          return () => {
            qq(), Eq(), gq(), Yq()
          }
        }), []);
        const {
          largePointer: qq
        } = (0, Wq.r)(), Eq = (0, TO.q)() && qq;
        return (0, Sq.useEffect)((() => {
          if (Eq) return document.documentElement.classList.add(mm), () => {
            document.documentElement.classList.remove(mm)
          }
        }), [Eq]), (0, xq.createPortal)((0, Lq.jsxs)(Lq.Fragment, {
          children: [(0, Lq.jsx)(FO, {}), (0, Lq.jsx)(eO, {}), (0, Lq.jsx)(qm, {})]
        }), document.body)
      };
    var Am = gq(8750),
      cm = gq(8780),
      um = gq(8764);
    gq(8787);
    const Bm = (qq, Eq) => {
        const [gq, Yq] = (0, Sq.useState)(!1), [lq, Oq] = (0, Sq.useState)(null), mq = (0, Sq.useRef)(null), xq = (0, Sq.useCallback)((qq => {
          mq.current = qq, Oq(qq)
        }), []), Aq = (0, Sq.useCallback)((() => {
          Yq(!1), xq(null)
        }), [xq]), uq = (0, Sq.useCallback)((() => {
          Yq(!0)
        }), []), Bq = (0, Sq.useCallback)(((qq, Eq) => {
          xq((0, um.C)(qq, Eq, mq.current))
        }), [xq]);
        (0, Sq.useLayoutEffect)((() => (Eq(gq), (0, zO.s)(qq, gq), cq.i.TV(zO.j), () => {
          Eq(!1), (0, zO.s)(qq, !1), cq.i.TV(zO.j)
        })), [gq, qq, Eq]), (0, Vl.f)("appManagerUpdated|activeInputDevice", (qq => {
          "gamepad" !== qq && Aq()
        })), (0, Vl.f)("appManagerUpdated|gameState", (qq => {
          "inGame" !== qq && Aq()
        }));
        const Wq = () => {
          (0, Ag.p)() && Aq()
        };
        return (0, Vl.f)("appManagerUpdated|openEverythingMenuName", Wq), (0, Vl.f)("appManagerUpdated|openInGameMenuName", Wq), {
          open: gq,
          picked: lq,
          pickedRef: mq,
          show: uq,
          aim: Bq,
          close: Aq
        }
      },
      Wm = qq => {
        let {
          className: Eq,
          slotCount: gq,
          picked: Yq,
          slotLabel: lq,
          renderSlot: Oq,
          centre: mq
        } = qq;
        const xq = Array.from({
          length: gq
        }, ((qq, Eq) => Eq));
        return (0, Lq.jsx)("div", {
          className: Gq()("EmoteWheelOverlay PadRadialWheel", Eq),
          children: (0, Lq.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * um.r + "rem",
              height: 2 * um.r + "rem"
            },
            children: [(0, Lq.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${um.l} ${um.l}`,
              children: [xq.map((qq => (0, Lq.jsx)("path", {
                d: (0, um.s)(qq, gq, um.d, um.g, um.j),
                className: Gq()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: qq === Yq
                }),
                "aria-label": lq(qq)
              }, qq))), (0, Lq.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: um.d,
                cy: um.d,
                r: um.j
              }), (0, Lq.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: um.d,
                cy: um.d,
                r: um.g
              }), null !== Yq && (0, Lq.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, um.s)(Yq, gq, um.d, um.g, um.j)
              })]
            }), xq.map((qq => {
              const Eq = (0, um.w)(qq, gq);
              return (0, Lq.jsx)("div", {
                className: Gq()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: qq === Yq
                }),
                style: {
                  left: `calc(50% + ${um.c*Math.cos(Eq)}rem)`,
                  top: `calc(50% + ${um.c*Math.sin(Eq)}rem)`
                },
                "aria-hidden": !0,
                children: Oq(qq)
              }, qq)
            })), (0, Lq.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: mq
            })]
          })
        })
      },
      Nm = cO.length,
      am = () => {
        const {
          t: qq
        } = (0, lq.v)(), Eq = Bm("chat", ig.m), gq = (0, Sq.useMemo)((() => cO.map((Eq => qq(Eq)))), [qq]);
        return (0, Vl.f)(ig.k, (() => {
          Eq.open || (0, Am.e)() || (0, cm.r)() || "inGame" !== Aq.b.get("gameState") || (0, Ag.p)() || !(0, ng.b)() || Eq.show()
        })), (0, Vl.f)(ig.g, (qq => {
          Eq.open && Eq.aim(qq, Nm)
        })), (0, Vl.f)(ig.i, (() => {
          var qq;
          if (!Eq.open) return;
          const Yq = Eq.pickedRef.current;
          null !== Yq ? uO.claim(performance.now()) && (Eq.close(), null === (qq = (0, ng.b)()) || void 0 === qq || qq.sendLine(gq[Yq])) : Eq.close()
        })), (0, Vl.f)(ig.h, Eq.close), Eq.open ? (0, Lq.jsx)(Wm, {
          className: "QuickChatWheel",
          slotCount: Nm,
          picked: Eq.picked,
          slotLabel: qq => gq[qq],
          renderSlot: qq => gq[qq],
          centre: null !== Eq.picked ? gq[Eq.picked] : qq("controller:quickChatPick")
        }) : null
      },
      Vm = () => {
        const {
          t: qq
        } = (0, lq.v)(), Eq = Bm("actionButton", cm.u), [gq, Yq] = (0, Sq.useState)([]);
        if ((0, Vl.f)(cm.m, (qq => {
            Eq.open || (0, Am.e)() || (0, ig.d)() || "inGame" !== Aq.b.get("gameState") || (0, Ag.p)() || (Yq(qq), Eq.show())
          })), (0, Vl.f)(cm.c, (qq => {
            Eq.open && Eq.aim(qq, gq.length)
          })), (0, Vl.f)(cm.i, (() => {
            if (!Eq.open) return;
            const qq = Eq.pickedRef.current;
            Eq.close(), null !== qq && cq.i.TV(cm.p, gq[qq])
          })), (0, Vl.f)(cm.g, Eq.close), !Eq.open) return null;
        const Oq = null !== Eq.picked ? gq[Eq.picked] : null;
        return (0, Lq.jsx)(Wm, {
          className: "ActionWheel",
          slotCount: gq.length,
          picked: Eq.picked,
          slotLabel: Eq => {
            const Yq = gq[Eq];
            return "reload" === Yq.kind ? qq("controller:gameplayReload") : "customButton" === Yq.kind ? Yq.description || Yq.icon : "touchButton" === Yq.kind && "string" === typeof Yq.label ? Yq.label : ""
          },
          renderSlot: qq => (0, Lq.jsx)(tl, {
            action: gq[qq]
          }),
          centre: Oq ? (0, Lq.jsx)(tl, {
            action: Oq
          }) : qq("controller:actionWheelPick")
        })
      };
    var dm = gq(96);
    const jm = () => ((0, Sq.useEffect)((() => {
        var qq, Eq;
        const gq = (0, jq.m)(document.getElementById("root")),
          Yq = (0, Nq.h)(),
          lq = (() => {
            const qq = [cq.i.subscribe(ql.f, (() => {
                ll("blockBreak")
              })), cq.i.subscribe("damagedByOtherPlayer", (() => {
                ll("damage")
              })), cq.i.subscribe("yourAttackHit", (qq => {
                let {
                  hitSelf: Eq
                } = qq;
                Eq || ll("hit")
              }))],
              Eq = mq.h.onActivePadChanged((qq => {
                qq && ll("connect")
              }));
            return () => {
              for (const Eq of qq) cq.i.unsubscribe(Eq);
              Eq()
            }
          })(),
          Oq = (() => {
            const qq = new ul({
              getVisitId: cl.e,
              peekVisitId: cl.peekVisitSessionId,
              readReportedVisitId: () => {
                const qq = Al.k.getItem(Bl);
                return "string" === typeof qq ? qq : null
              },
              writeReportedVisitId: qq => {
                Al.k.setItem(Bl, qq)
              },
              isPadActive: Nq.k,
              getPadFamily: () => {
                var qq, Eq;
                return null !== (qq = null === (Eq = mq.h.getActivePad()) || void 0 === Eq ? void 0 : Eq.family) && void 0 !== qq ? qq : null
              },
              canReport: ml.h,
              getInputType: xl.d,
              SN: ml.o
            });
            let Eq = 0,
              gq = null;
            const Yq = lq => {
                null === gq && ("notReady" !== qq.check(lq) || null !== gq || Eq >= 20 || (Eq++, gq = setTimeout((() => {
                  gq = null, Yq(!1)
                }), 3e3)))
              },
              lq = cq.i.subscribe("appManagerUpdated|activeInputDevice", (() => {
                Yq(!0)
              })),
              Oq = (0, cl.l)((() => {
                Eq = 0, Yq(!0)
              }));
            return () => {
              cq.i.unsubscribe(lq), Oq(), null !== gq && clearTimeout(gq)
            }
          })(),
          xq = mq.h.onFrame(((qq, Eq) => {
            const gq = (0, Nq.q)(qq);
            Bq.c.dispatch(qq, Eq, gq)
          }));
        let uq = null !== (qq = null === (Eq = mq.h.getActivePad()) || void 0 === Eq ? void 0 : Eq.family) && void 0 !== qq ? qq : null;
        const aq = mq.h.onActivePadChanged((qq => {
            var Eq, gq;
            (Bq.c.reset(), (0, Nq.t)(), cq.i.TV(mq.d, qq), (null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.family) && void 0 !== Eq ? Eq : null) !== uq) && (uq = null !== (gq = null === qq || void 0 === qq ? void 0 : qq.family) && void 0 !== gq ? gq : null, cq.i.TV(Wq.c, (0, Wq.i)()));
            !qq && (0, Nq.k)() && (0, Nq.w)(Aq.b.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          Vq = () => {
            "visible" !== document.visibilityState && Bq.c.clear()
          },
          dq = () => {
            Bq.c.clear()
          };
        document.addEventListener("visibilitychange", Vq), window.addEventListener("blur", dq), mq.h.start(), (0, Ol.o)();
        const Hq = null;
        return () => {
          gq(), Yq(), lq(), Oq(), xq(), aq(), document.removeEventListener("visibilitychange", Vq), window.removeEventListener("blur", dq), mq.h.stop(), null === Hq || void 0 === Hq || Hq()
        }
      }), []), (0, Lq.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, Lq.jsx)(Zl, {}), (0, Lq.jsx)(Jl, {}), (0, Lq.jsx)(kl, {}), (0, Lq.jsx)(fO, {}), (0, Lq.jsx)(xm, {}), (0, Lq.jsx)(am, {}), (0, Lq.jsx)(Vm, {})]
      })),
      Hm = () => dm.featureFlags.useControllerSupport ? (0, Lq.jsx)(jm, {}) : null;
    var om = gq(8095),
      Pm = gq(8800);
    const Qm = new Set(Ol.k),
      ym = qq => `${Pm.n}${(0,Wq.k)()}/${qq}`,
      tm = qq => {
        if (!(0, Pm.j)(qq)) return null;
        const [Eq, gq] = qq.slice(Pm.n.length).split("/");
        return (0, om.f)(Eq) && Qm.has(gq) ? (0, Ol.i)(Eq, gq) : null
      };
    var rm = gq(8803);
    const hm = () => {
        const {
          t: qq
        } = (0, lq.v)(), Eq = (0, Nq.y)(), {
          gameState: gq,
          isUiHidden: Yq
        } = (0, Aq.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: Oq,
          sneakMode: mq
        } = (0, Wq.r)(), [xq, cq] = (0, Sq.useState)(rm.c);
        return (0, Vl.f)(il.o, cq), Eq && !Yq && "inGame" === gq && xq ? (0, Lq.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!Oq && (0, Lq.jsx)(Ql, {
            glyph: (0, uq.i)("toggle" === mq ? "sneak" : "sneakToggle")
          }), (0, Lq.jsx)("span", {
            children: qq("controller:gameplaySneaking")
          })]
        }) : null
      },
      nm = 12,
      bm = qq => {
        let {
          trigger: Eq,
          className: gq,
          children: Yq
        } = qq;
        const lq = (0, Sq.useRef)(null);
        return (0, Sq.useEffect)((() => {
          let qq = 0;
          const gq = nq(Eq, "y"),
            Yq = () => {
              qq = requestAnimationFrame(Yq);
              const Oq = lq.current;
              if (!Oq || null === Eq || void 0 === Eq || !Eq.isConnected) return;
              const {
                left: mq,
                top: xq
              } = function(qq, Eq, gq) {
                let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const Oq = qq.left + qq.width / 2,
                  mq = Math.max(nm, gq.width - nm - Eq.width),
                  xq = Math.min(Math.max(Oq - Eq.width / 2, nm), mq),
                  Aq = gq.height - Yq;
                let cq = 0,
                  uq = Aq;
                if (lq) {
                  const qq = Math.max(0, lq.top),
                    Yq = Math.min(Aq, lq.bottom);
                  Yq - qq >= Math.max(gq.height / 2, Eq.height + 24) && (cq = qq, uq = Yq)
                }
                const Bq = qq.top + qq.height / 2 < (cq + uq) / 2 ? uq - nm - Eq.height : cq + nm;
                return {
                  left: xq,
                  top: Math.max(nm, Bq)
                }
              }(Eq.getBoundingClientRect(), {
                width: Oq.offsetWidth,
                height: Oq.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(LO)) || 0, null !== gq && void 0 !== gq && gq.isConnected ? gq.getBoundingClientRect() : null);
              Oq.style.transform = `translate3d(${Math.round(mq)}px, ${Math.round(xq)}px, 0)`, Oq.style.visibility = "visible"
            };
          return Yq(), () => {
            cancelAnimationFrame(qq)
          }
        }), [Eq]), (0, Lq.jsx)("div", {
          ref: lq,
          className: gq,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: Yq
        })
      };
    var im = gq(1025),
      Zm = gq(8812),
      fm = gq(1422),
      Mm = gq(8814),
      Tm = gq(8823);
    const zm = {
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
      Sm = () => {
        const {
          t: qq
        } = (0, lq.v)(), Eq = (0, Nq.y)(), gq = (0, Zm.e)(), Yq = (0, pl.h)("_tasks"), Oq = (0, pl.h)("_availableLeaderboards");
        if (!Eq) return null;
        const mq = (qq => {
          let {
            hasShop: Eq,
            hasTasksOrLeaderboards: gq,
            canInvite: Yq
          } = qq;
          const lq = [];
          return Eq && lq.push("shop"), gq && lq.push("tasks"), Yq && lq.push("invite"), lq.push("leave"), lq
        })({
          hasShop: gq,
          hasTasksOrLeaderboards: !(!Yq && !Oq),
          canInvite: !!dm.featureFlags.canUseInviteLinks
        });
        return (0, Lq.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: mq.map((Eq => {
            const {
              icon: gq,
              labelKey: Yq
            } = zm[Eq], lq = "leave" === Eq ? fm.K : fm.g;
            return (0, Lq.jsx)(lq, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (qq => {
                  switch (qq) {
                    case "shop":
                      return cq.i.TV(Tm.m), void Aq.b.set({
                        openEverythingMenuName: xg.p.SHOP
                      });
                    case "tasks":
                      return void cq.i.TV("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void cq.i.TV("toggleMenu", "inviteLink");
                    case "leave":
                      (0, Mm.b)()
                  }
                })(Eq)
              },
              children: (0, Lq.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, Lq.jsx)(im.d, {
                  name: gq
                }), (0, Lq.jsx)("span", {
                  children: qq(Yq)
                })]
              })
            }, Eq)
          }))
        })
      };
    var pm = gq(1952);
    const Gm = aq.A,
      Lm = ["forward", "backward", "left", "right", "sprint"],
      Jm = qq => qq.ctrlKey || qq.altKey || "Alt" === qq.key || "ArrowUp" === qq.key || "ArrowDown" === qq.key || "Tab" === qq.code || "/" === qq.key || "Slash" === qq.code;
    class km {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(aq.X).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(qq) {
        this.armed = qq
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || Eq ? !qq.repeat && this.swallowedKeys.delete(qq.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(qq.code),
          continues: !1
        } : "Escape" === qq.key || qq.repeat && !this.swallowedKeys.has(qq.code) ? {
          swallow: !1,
          continues: !1
        } : gq ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(qq.code), {
          swallow: !0,
          continues: (0, Nq.i)(qq)
        })
      }
      onKeyUp(qq) {
        return this.swallowedKeys.delete(qq.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const lq = (0, aq.t)(qq.values, this.previousHeld),
          Oq = null === gq ? -1 : (0, aq.m)(gq),
          mq = Oq >= 0 && lq[Oq] && !this.previousHeld[Oq],
          xq = lq.some(((qq, Eq) => qq && !this.previousHeld[Eq] && Eq !== Oq)),
          Aq = Math.hypot(qq.leftStick.x, qq.leftStick.y) >= Gm,
          cq = Math.hypot(qq.rightStick.x, qq.rightStick.y) >= Gm,
          uq = Aq && !this.leftStickWasPressed || cq && !this.rightStickWasPressed;
        this.previousHeld = lq, this.leftStickWasPressed = Aq, this.rightStickWasPressed = cq;
        let Bq = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, Bq = !0);
        const Wq = !Eq && mq && !Yq,
          Nq = !Wq && this.armed && !Eq && (xq || uq);
        return (Wq || Nq) && (this.consumeNextFrame = !0, this.consumeAfterContinue = Nq, Bq = !0), {
          continues: Nq,
          back: Wq,
          consumeHeld: Bq
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const Rm = new Set([...pm.k, ...pm.A]),
      Um = qq => ((qq, Eq, gq) => {
        const Yq = Object.keys(Eq).filter((Yq => !gq.has(Yq) && Eq[Yq].includes(qq)));
        return Yq.length > 0 && Yq.every((qq => Lm.includes(qq)))
      })(qq, pm.u, Rm),
      Fm = (qq, Eq, gq) => {
        const Yq = new km,
          lq = qq => {
            if (!qq.isTrusted) return;
            const {
              swallow: gq,
              continues: lq
            } = Yq.onKeyDown(qq, !(0, Nq.D)(qq) || (0, DY.g)() || (0, Ag.p)(), Um(qq.code));
            gq && (qq.stopImmediatePropagation(), Jm(qq) && qq.preventDefault()), lq && ((0, Nq.w)("keyboardMouse"), Eq())
          },
          Oq = qq => {
            qq.isTrusted && Yq.onKeyUp(qq) && (qq.stopImmediatePropagation(), Jm(qq) && qq.preventDefault())
          },
          xq = () => {
            Yq.forgetKeys()
          };
        window.addEventListener("keydown", lq, !0), window.addEventListener("keyup", Oq, !0), window.addEventListener("blur", xq);
        const Aq = mq.h.onFrame((qq => {
            const lq = Bq.c.getActiveConsumerName(),
              Oq = gq(),
              mq = Oq ? (0, uq.i)("menuBack") : null,
              xq = null !== lq && "gameplay" !== lq,
              {
                continues: Aq,
                back: cq,
                consumeHeld: aq
              } = Yq.onPadFrame(qq, xq, mq, (0, Nq.n)(qq));
            if (aq) {
              const qq = (0, Wq.i)().swapSticks ? "right" : "left";
              Bq.c.consumeAllHeld(Yq.consumeLeavesMoveStick() ? qq : null)
            }
            cq ? null === Oq || void 0 === Oq || Oq() : Aq && Eq()
          })),
          cq = (0, DY.i)(`pressToContinue:${qq}`, (() => Yq.blocksGameplay()));
        return {
          setArmed: qq => {
            Yq.setArmed(qq)
          },
          dispose: () => {
            window.removeEventListener("keydown", lq, !0), window.removeEventListener("keyup", Oq, !0), window.removeEventListener("blur", xq), Aq(), cq()
          }
        }
      };
    var sm = gq(4828),
      Xm = gq(3296),
      wm = gq(3040),
      Km = gq(8104);
    const Cm = qq => {
        let {
          text: Eq
        } = qq;
        return (0, Lq.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: Eq
        })
      },
      Im = qq => {
        let {
          label: Eq,
          hint: gq,
          options: Yq,
          value: Oq,
          onChange: mq
        } = qq;
        const {
          t: xq
        } = (0, lq.v)();
        return (0, Lq.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, Lq.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, Lq.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, Lq.jsx)("div", {
                className: "SliderText",
                children: Eq
              }), gq && (0, Lq.jsx)("div", {
                className: "ControllerSettingsHint",
                children: gq
              })]
            }), (0, Lq.jsx)(wm.d, {
              options: Yq.map((qq => ({
                label: "label" in qq ? qq.label : xq(qq.labelKey),
                value: qq.value
              }))),
              value: Oq,
              onChange: qq => {
                mq(qq.value)
              }
            })]
          })
        })
      },
      em = qq => {
        let {
          settingKey: Eq,
          label: gq,
          range: Yq,
          format: lq
        } = qq;
        const Oq = (0, Wq.r)();
        return (0, Lq.jsx)(sm.h, {
          name: gq,
          min: Yq.min,
          max: Yq.max,
          step: Yq.step,
          padStep: Yq.step,
          initValue: Oq[Eq],
          format: lq,
          onChange: qq => {
            (0, Wq.n)({
              [Eq]: (0, Km.z)(qq, Yq)
            })
          }
        })
      };
    var Dm = gq(8826),
      qx = gq(8829);
    const Ex = qq => qq instanceof DOMException && ("SecurityError" === qq.name || "NotAllowedError" === qq.name),
      gx = qq => {
        const [Eq] = [...qq.controllers].sort(((qq, Eq) => qx.o[qq] - qx.o[Eq]));
        return qx.n[Eq]
      },
      Yx = qq => {
        (0, Dm.b)().allowPhoneMotion().catch((Eq => {
          qq && Ex(Eq) ? qq() : console.warn("Could not enable the motion sensor", Eq)
        }))
      },
      lx = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      Ox = qq => {
        let {
          status: Eq
        } = qq;
        const {
          t: gq
        } = (0, lq.v)(), [Yq, Oq] = (0, Sq.useState)(null), mq = `${Eq.controllers.join(",")}|${Eq.phoneMotion}`;
        (0, Sq.useEffect)((() => {
          Oq(null)
        }), [mq]);
        const xq = () => {
          (0, Dm.b)().connectController().then((qq => {
            Oq(qq > 0 ? "openFailed" : null)
          })).catch((qq => {
            Ex(qq) ? Oq("needsClick") : console.warn("Could not connect motion controller", qq)
          }))
        };
        if (Eq.hidSupported) {
          let qq = gq("controller:settingsGyroConnectHint");
          return "needsClick" === Yq ? qq = gq("controller:settingsGyroConnectNeedsClick") : "openFailed" === Yq ? qq = gq("controller:settingsGyroOpenFailed") : Eq.controllers.length > 0 && (qq = gq("controller:settingsGyroConnected", {
            name: gx(Eq)
          })), (0, Lq.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, Lq.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, Lq.jsx)("div", {
                className: "ControllerSettingsHint",
                children: qq
              }), (0, Lq.jsx)(fm.g, {
                onClick: xq,
                children: gq("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === Eq.phoneMotion) return (0, Lq.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, Lq.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === Yq && (0, Lq.jsx)("div", {
              className: "ControllerSettingsHint",
              children: gq("controller:settingsGyroAllowNeedsTap")
            }), (0, Lq.jsx)(fm.g, {
              onClick: () => {
                Yx((() => {
                  Oq("needsTap")
                }))
              },
              children: gq("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const Aq = lx[Eq.phoneMotion];
        return Aq ? (0, Lq.jsx)("div", {
          className: "ControllerSettingsHint",
          children: gq(Aq)
        }) : null
      },
      mx = () => {
        const {
          t: qq
        } = (0, lq.v)(), Eq = (0, Wq.r)(), gq = (0, Dm.c)(), Yq = (0, Nq.B)(), Oq = !gq.hidSupported && gq.phoneSupported && !gq.padConnected, mq = (gq.hidSupported || gq.phoneSupported) && !Oq, xq = (0, uq.i)("pause");
        return (0, Lq.jsxs)(Lq.Fragment, {
          children: [(0, Lq.jsx)(Cm, {
            text: qq("controller:settingsGyro")
          }), Oq && (0, Lq.jsx)("div", {
            className: "ControllerSettingsHint",
            children: qq("controller:settingsGyroPhoneNeedsController")
          }), !mq && !Oq && (0, Lq.jsx)("div", {
            className: "ControllerSettingsHint",
            children: qq(gq.hidBlocked || gq.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), mq && (0, Lq.jsx)(sm.d, {
            label: qq(gq.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: Eq.gyroAiming,
            onClick: qq => {
              var Eq, gq;
              (0, Wq.n)({
                gyroAiming: qq
              });
              const Yq = null === (Eq = null === (gq = navigator.userActivation) || void 0 === gq ? void 0 : gq.isActive) || void 0 === Eq || Eq;
              if (!qq || !Yq) return;
              const lq = (0, Dm.b)(),
                Oq = lq.getStatus();
              Oq.hidSupported ? lq.connectControllerIfNoneGranted().catch((qq => {
                console.warn("Motion controller picker unavailable", qq)
              })) : "needsPermission" === Oq.phoneMotion && Yx()
            },
            circleInfoText: qq(gq.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), mq && gq.hidSupported && (0, Lq.jsx)("div", {
            className: "ControllerSettingsHint",
            children: qq("controller:settingsGyroSteamHint")
          }), mq && Eq.gyroAiming && (0, Lq.jsxs)(Lq.Fragment, {
            children: [(0, Lq.jsx)(Ox, {
              status: gq
            }), (0, Lq.jsx)(em, {
              settingKey: "gyroSensitivity",
              label: qq("controller:settingsGyroSensitivity"),
              range: Km.T,
              format: Km.O
            }), (0, Lq.jsx)(Im, {
              label: qq("controller:settingsGyroActivation"),
              hint: "aiming" === Eq.gyroActivation && (0, Lq.jsx)(Xm.c, {
                text: qq("controller:settingsGyroAimingHint", {
                  button: Xm.e
                }),
                glyph: (0, uq.i)("use")
              }),
              options: Km.S,
              value: Eq.gyroActivation,
              onChange: qq => {
                (0, Wq.n)({
                  gyroActivation: qq
                })
              }
            }), "button" === Eq.gyroActivation && (0, Lq.jsx)(Im, {
              label: qq("controller:settingsGyroButton"),
              hint: qq("controller:settingsGyroButtonHint"),
              options: Km.w.filter((qq => qq !== xq || qq === Eq.gyroButton)).map((qq => ({
                label: Pl(Yq, qq),
                value: qq
              }))),
              value: Eq.gyroButton,
              onChange: qq => {
                (0, Wq.n)({
                  gyroButton: qq
                })
              }
            })]
          })]
        })
      };
    var xx = gq(1824);
    const Ax = () => {
      const {
        t: qq
      } = (0, lq.v)(), Eq = (0, Wq.r)(), gq = (0, Nq.B)();
      return (0, Lq.jsxs)(Lq.Fragment, {
        children: [(0, Lq.jsx)(Cm, {
          text: qq("controller:settingsAccessibility")
        }), (0, Lq.jsx)(sm.d, {
          label: qq("controller:settingsSwapConfirmBack"),
          checked: (0, uq.D)(Eq.swapConfirmBack, gq),
          onClick: qq => {
            (0, Wq.n)({
              swapConfirmBack: qq === (0, uq.D)(null, gq) ? null : qq
            }), xx.g.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: qq("controller:settingsSwapConfirmBackInfo")
        }), (0, Lq.jsx)(Im, {
          label: qq("controller:settingsButtonRepeat"),
          hint: qq("controller:settingsButtonRepeatHint"),
          options: Km.t,
          value: Eq.buttonRepeat,
          onChange: qq => {
            (0, Wq.n)({
              buttonRepeat: qq
            })
          }
        }), (0, Lq.jsx)(Im, {
          label: qq("controller:settingsTapHoldTime"),
          hint: qq("controller:settingsTapHoldTimeHint"),
          options: Km.Cb,
          value: Eq.tapHoldTime,
          onChange: qq => {
            (0, Wq.n)({
              tapHoldTime: qq
            })
          }
        }), (0, Lq.jsx)(Im, {
          label: qq("controller:settingsEmoteButton"),
          hint: qq("wheel" === Eq.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: Km.J,
          value: Eq.emoteButton,
          onChange: qq => {
            (0, Wq.n)({
              emoteButton: qq
            })
          }
        }), (0, Lq.jsx)(Im, {
          label: qq("controller:settingsAttackMode"),
          hint: qq("toggle" === Eq.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: Km.r,
          value: Eq.attackMode,
          onChange: qq => {
            (0, Wq.n)({
              attackMode: qq
            })
          }
        }), (0, Lq.jsx)(sm.d, {
          label: qq("controller:settingsLargePointer"),
          checked: Eq.largePointer,
          onClick: qq => {
            (0, Wq.n)({
              largePointer: qq
            })
          },
          circleInfoText: qq("controller:settingsLargePointerInfo")
        })]
      })
    };
    var cx = gq(8834);
    const ux = new class {
        constructor(qq) {
          this.router = qq, this.current = null
        }
        claim(qq, Eq) {
          const gq = this.current;
          gq && (this.current = null, gq.release(), gq.onTakenOver());
          const Yq = this.router.register({
              ...qq,
              name: "capture"
            }),
            lq = {
              release: Yq,
              onTakenOver: Eq
            };
          return this.current = lq, () => {
            this.current === lq && (this.current = null), Yq()
          }
        }
      }(Bq.c),
      Bx = qq => {
        (0, Sq.useEffect)((() => {
          if (!qq) return;
          const Eq = qq();
          let gq = !1;
          const Yq = () => {
              gq || (gq = !0, Eq.onEnd())
            },
            lq = ux.claim({
              isActive: () => !gq,
              onFrame: qq => {
                Eq.onFrame(qq, Yq)
              }
            }, Yq),
            Oq = void 0 === Eq.timeoutMs ? void 0 : window.setTimeout(Yq, Eq.timeoutMs),
            mq = qq => {
              "Escape" === qq.key && (qq.preventDefault(), qq.stopPropagation(), Yq())
            };
          return window.addEventListener("keydown", mq, !0), () => {
            gq = !0, lq(), window.clearTimeout(Oq), window.removeEventListener("keydown", mq, !0)
          }
        }), [qq])
      },
      Wx = qq => {
        let {
          row: Eq,
          capturing: gq,
          onCapture: Yq,
          holdFillRef: Oq,
          onRebind: mq,
          swapped: xq
        } = qq;
        const {
          t: Aq
        } = (0, lq.v)();
        if ("fixed" === Eq.kind) return (0, Lq.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, Lq.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, Lq.jsx)("div", {
              className: "ControlName",
              children: Aq(Eq.labelKey)
            }), (0, Lq.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, Lq.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, Lq.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, Lq.jsx)(Ql, {
                    glyph: "move" === Eq.stick ? (0, uq.t)() : (0, uq.p)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: cq
        } = Eq, Bq = (0, uq.i)(cq), Wq = (0, uq.j)(cq), Nq = Bq !== Wq && (0, uq.d)(cq, Wq);
        return (0, Lq.jsxs)("div", {
          className: Gq()("ControlRow PadControlRow", {
            Capturing: gq
          }),
          children: [(0, Lq.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, Lq.jsx)("div", {
              className: "ControlName",
              children: Aq(Km.l[cq])
            }), (0, Lq.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!gq && (0, Lq.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, Lq.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Yq(cq)
                  },
                  children: (0, Lq.jsx)(Ql, {
                    glyph: Bq
                  })
                }), Nq && (0, Lq.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: Aq("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    mq(cq, Wq)
                  },
                  children: (0, Lq.jsx)(im.d, {
                    name: "arrows-rotate"
                  })
                })]
              }), gq && (0, Lq.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, Lq.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, Lq.jsx)("span", {
                    children: Aq("controller:settingsCapturePrompt")
                  }), (0, Lq.jsx)("div", {
                    ref: Oq,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, Lq.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Yq(null)
                  },
                  children: "\xd7"
                })]
              }), gq && (0, Lq.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, Lq.jsx)(Xm.c, {
                  text: Aq((0, uq.d)(cq, (0, uq.i)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: Xm.e
                  }),
                  glyph: (0, uq.i)("menuBack")
                })
              })]
            })]
          }), xq.map((qq => (0, Lq.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, Lq.jsx)(Xm.c, {
              text: Aq("controller:settingsSwapNotice", {
                action: Aq(Km.l[qq]),
                button: Xm.e
              }),
              glyph: (0, uq.i)(qq)
            })
          }, qq))), gq && (0, Lq.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${Km.x}ms`
            }
          })]
        })
      },
      Nx = [],
      ax = qq => {
        let {
          layoutSetting: Eq
        } = qq;
        const {
          t: gq
        } = (0, lq.v)(), Yq = (0, Wq.r)();
        (0, Nq.B)();
        const Oq = (0, Sq.useRef)(null),
          [mq, xq] = (0, Sq.useState)(null),
          Aq = (0, Sq.useCallback)(((qq, Eq) => {
            const gq = (0, Wq.i)().bindings;
            (0, uq.z)(qq, Eq);
            const Yq = (0, uq.u)(gq, qq);
            xq(Yq.length > 0 ? {
              action: qq,
              swapped: Yq
            } : null)
          }), []),
          [cq, Vq] = ((qq, Eq) => {
            const [gq, Yq] = (0, Sq.useState)(null), lq = (0, Sq.useMemo)((() => gq ? () => {
              const lq = (0, uq.i)("menuBack"),
                Oq = new Km.d(lq, (0, uq.i)("menuConfirm"), (qq => (0, uq.d)(gq, qq)));
              return {
                onFrame: (Yq, mq) => {
                  var xq;
                  const Aq = Yq.frame.timestampMs,
                    cq = Oq.update({
                      ...Yq,
                      isDown: qq => (0, aq.J)(Yq.frame.values, qq)
                    }, Aq);
                  null === (xq = qq.current) || void 0 === xq || xq.style.setProperty("width", 100 * Oq.getBindHoldProgress(Aq) + "%"), cq && ("bind" === cq.kind ? (Bq.c.consumeButton(cq.button), Eq(gq, cq.button)) : Bq.c.consumeButton(lq), mq())
                },
                onEnd: () => {
                  Yq(null)
                },
                timeoutMs: Km.x
              }
            } : null), [gq, qq, Eq]);
            return Bx(lq), [gq, Yq]
          })(Oq, Aq),
          dq = qq => {
            qq && xq(null), Vq(qq)
          };
        (0, Sq.useEffect)((() => {
          if (!mq) return;
          const qq = window.setTimeout((() => {
            xq(null)
          }), Km.Bb);
          return () => {
            window.clearTimeout(qq)
          }
        }), [mq]);
        const jq = !Yq.swapSticks && 0 === Object.keys(Yq.bindings).length;
        return (0, Lq.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, Lq.jsx)("div", {
            className: "SliderText",
            children: gq("controller:settingsRemap")
          }), (0, Lq.jsx)("div", {
            className: "ControllerSettingsHint",
            children: gq("controller:settingsRemapHint")
          }), (0, Lq.jsx)(fm.K, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: jq,
            onClick: () => {
              dq(null), xq(null), (0, uq.C)()
            },
            children: gq("controller:settingsResetAll")
          }), Eq, Km.rb.map(((qq, Eq) => (0, Lq.jsx)(cx.b, {
            title: gq(qq.titleKey),
            defaultOpen: 0 === Eq,
            children: qq.rows.map((qq => (0, Lq.jsx)(Wx, {
              row: qq,
              capturing: "action" === qq.kind && qq.action === cq,
              onCapture: dq,
              holdFillRef: Oq,
              onRebind: Aq,
              swapped: "action" === qq.kind && (null === mq || void 0 === mq ? void 0 : mq.action) === qq.action ? mq.swapped : Nx
            }, "action" === qq.kind ? qq.action : qq.labelKey)))
          }, qq.titleKey)))]
        })
      },
      Vx = qq => {
        let {
          deadzone: Eq,
          dotRef: gq,
          labelKey: Yq
        } = qq;
        const {
          t: Oq
        } = (0, lq.v)();
        return (0, Lq.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, Lq.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, Lq.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * Eq + "%",
                height: 100 * Eq + "%"
              }
            }), (0, Lq.jsx)("div", {
              ref: gq,
              className: "ControllerTesterDot"
            })]
          }), (0, Lq.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: Oq(Yq)
          })]
        })
      },
      dx = (qq, Eq, gq, Yq) => {
        var lq;
        qq && (qq.style.left = 50 + 50 * Math.max(-1, Math.min(1, Eq.x)) + "%", qq.style.top = 50 + 50 * Math.max(-1, Math.min(1, Eq.y)) + "%", null === (lq = qq.parentElement) || void 0 === lq || lq.classList.toggle("Active", Yq || Math.hypot(Eq.x, Eq.y) > gq))
      },
      jx = qq => {
        const Eq = {
            deadzone: qq.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          gq = {
            deadzone: qq.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return qq.swapSticks ? {
          left: gq,
          right: Eq
        } : {
          left: Eq,
          right: gq
        }
      },
      Hx = () => {
        const {
          t: qq
        } = (0, lq.v)(), Eq = (() => {
          const [qq, Eq] = (0, Sq.useState)((() => mq.h.getActivePad()));
          return (0, Vl.f)(mq.d, (() => {
            Eq(mq.h.getActivePad())
          })), qq
        })(), gq = jx((0, Wq.r)()), Yq = (0, Sq.useRef)(null), Oq = (0, Sq.useRef)(null), xq = (0, Sq.useRef)([]), Aq = (0, Sq.useRef)(null), cq = (0, Sq.useRef)(null), [Nq, Vq] = (qq => {
          const [Eq, gq] = (0, Sq.useState)(!1), Yq = (0, Sq.useMemo)((() => Eq ? () => {
            const Eq = (0, uq.i)("menuBack"),
              Yq = new Km.h;
            return {
              onFrame: (gq, lq) => {
                var Oq;
                const mq = Yq.update({
                  pressed: gq.wasPressed(Eq),
                  Fc: gq.isHeld(Eq)
                }, gq.frame.timestampMs);
                null === (Oq = qq.current) || void 0 === Oq || Oq.style.setProperty("width", 100 * mq + "%"), mq >= 1 && (Bq.c.consumeButton(Eq), lq())
              },
              onEnd: () => {
                gq(!1)
              }
            }
          } : null), [Eq, qq]);
          return Bx(Yq), [Eq, gq]
        })(Oq);
        (0, Sq.useEffect)((() => {
          const qq = qq => {
            for (const gq of aq.$) {
              const Eq = (0, aq.m)(gq),
                Yq = xq.current[Eq];
              if (!Yq) continue;
              const lq = qq.values[Eq];
              Yq.classList.toggle("Pressed", lq >= aq.A), (0, aq.K)(Eq) && Yq.style.setProperty("--trigger-fill", `${Math.round(100*lq)}%`)
            }
            const Eq = jx((0, Wq.i)());
            dx(Aq.current, qq.leftStick, Eq.left.deadzone, qq.values[(0, aq.m)("LS")] >= aq.A), dx(cq.current, qq.rightStick, Eq.right.deadzone, qq.values[(0, aq.m)("RS")] >= aq.A)
          };
          return Eq || qq((0, aq.y)()), mq.h.onFrame(qq)
        }), [Eq]), (0, Sq.useEffect)((() => {
          Eq || Vq(!1)
        }), [Eq, Vq]), (0, Sq.useEffect)((() => {
          var qq;
          Nq && (null === (qq = Yq.current) || void 0 === qq || qq.scrollIntoView({
            block: "nearest"
          }))
        }), [Nq]);
        const dq = Km.nb.find((qq => qq.value === (null === Eq || void 0 === Eq ? void 0 : Eq.family)));
        return (0, Lq.jsxs)("div", {
          ref: Yq,
          className: Gq()("SettingBox ControllerTester", {
            Testing: Nq
          }),
          children: [(0, Lq.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, Lq.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [Eq && (0, Lq.jsx)("div", {
                children: qq("controller:settingsTesterFamily", {
                  family: dq ? qq(dq.labelKey) : Eq.family
                })
              }), Eq && (0, Lq.jsx)("div", {
                className: "ControllerTesterPadId",
                children: Eq.id
              }), !Eq && (0, Lq.jsx)("div", {
                children: qq("controller:settingsTesterNoPad")
              })]
            }), (Eq || Nq) && (0, Lq.jsx)(fm.g, {
              className: "ControllerTesterToggle",
              onClick: () => {
                Vq(!Nq)
              },
              children: qq(Nq ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), Eq && !Nq && (0, Lq.jsx)("div", {
            className: "ControllerSettingsHint",
            children: qq("controller:settingsTesterHint")
          }), Nq && (0, Lq.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, Lq.jsx)(Xm.c, {
              text: qq("controller:settingsTesterTesting", {
                button: Xm.e
              }),
              glyph: (0, uq.i)("menuBack")
            }), (0, Lq.jsx)("div", {
              ref: Oq,
              className: "ControllerTesterExitFill"
            })]
          }), (0, Lq.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, Lq.jsx)(Vx, {
              deadzone: gq.left.deadzone,
              dotRef: Aq,
              labelKey: gq.left.labelKey
            }), (0, Lq.jsx)("div", {
              className: "ControllerTesterButtons",
              children: aq.$.map((qq => {
                const gq = (0, aq.m)(qq);
                return (0, Lq.jsx)("div", {
                  ref: qq => {
                    xq.current[gq] = qq
                  },
                  className: (0, aq.K)(gq) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, Lq.jsx)(Ql, {
                    glyph: qq,
                    family: null === Eq || void 0 === Eq ? void 0 : Eq.family
                  })
                }, qq)
              }))
            }), (0, Lq.jsx)(Vx, {
              deadzone: gq.right.deadzone,
              dotRef: cq,
              labelKey: gq.right.labelKey
            })]
          })]
        })
      },
      ox = (0, Sq.memo)((function() {
        const {
          t: qq
        } = (0, lq.v)(), Eq = (0, Wq.r)(), [gq, Yq] = (0, Sq.useState)(!1);
        return (0, Sq.useEffect)((() => {
          if (!gq) return;
          const qq = window.setTimeout((() => {
            Yq(!1)
          }), Km.Bb);
          return () => {
            window.clearTimeout(qq)
          }
        }), [gq]), (0, Lq.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, Lq.jsx)(Cm, {
            text: qq("controller:settingsLook")
          }), (0, Lq.jsx)(em, {
            settingKey: "lookSensitivityX",
            label: qq("controller:settingsLookSensitivityX"),
            range: Km.vb,
            format: Km.P
          }), (0, Lq.jsx)(em, {
            settingKey: "lookSensitivityY",
            label: qq("controller:settingsLookSensitivityY"),
            range: Km.vb,
            format: Km.P
          }), (0, Lq.jsx)(em, {
            settingKey: "aimLookSensitivity",
            label: qq("controller:settingsAimLookSensitivity"),
            range: Km.n,
            format: Km.P
          }), (0, Lq.jsx)(Im, {
            label: qq("controller:settingsLookCurve"),
            hint: qq("controller:settingsLookCurveHint"),
            options: Km.hb,
            value: Eq.lookCurve,
            onChange: qq => {
              (0, Wq.n)({
                lookCurve: qq
              })
            }
          }), (0, Lq.jsx)(sm.d, {
            label: qq("controller:settingsInvertLookX"),
            checked: Eq.invertLookX,
            onClick: qq => {
              (0, Wq.n)({
                invertLookX: qq
              })
            }
          }), (0, Lq.jsx)(sm.d, {
            label: qq("controller:settingsInvertLookY"),
            checked: Eq.invertLookY,
            onClick: qq => {
              (0, Wq.n)({
                invertLookY: qq
              })
            }
          }), (0, Lq.jsx)(em, {
            settingKey: "lookDeadzone",
            label: qq("controller:settingsLookDeadzone"),
            range: Km.F,
            format: Km.K
          }), (0, Lq.jsx)(mx, {}), (0, Lq.jsx)(Cm, {
            text: qq("controller:settingsMovement")
          }), (0, Lq.jsx)(em, {
            settingKey: "moveDeadzone",
            label: qq("controller:settingsMoveDeadzone"),
            range: Km.F,
            format: Km.K
          }), (0, Lq.jsx)(sm.d, {
            label: qq("controller:settingsAutoSprint"),
            checked: Eq.autoSprint,
            onClick: qq => {
              (0, Wq.n)({
                autoSprint: qq
              })
            },
            circleInfoText: qq("controller:settingsAutoSprintInfo")
          }), (0, Lq.jsx)(Im, {
            label: qq("controller:settingsSneak"),
            options: Km.yb,
            value: Eq.sneakMode,
            onChange: qq => {
              (0, Wq.n)({
                sneakMode: qq
              })
            }
          }), (0, Lq.jsx)(Cm, {
            text: qq("controller:settingsButtons")
          }), (0, Lq.jsx)(Im, {
            label: qq("controller:settingsPromptFamily"),
            options: Km.nb,
            value: Eq.promptFamily,
            onChange: qq => {
              (0, Wq.n)({
                promptFamily: qq
              })
            }
          }), (0, Lq.jsx)(sm.d, {
            label: qq("controller:settingsHideButtonHints"),
            checked: Eq.hideButtonHints,
            onClick: qq => {
              (0, Wq.n)({
                hideButtonHints: qq
              })
            }
          }), (0, Lq.jsx)(sm.d, {
            label: qq("controller:settingsVibration"),
            checked: Eq.vibration,
            onClick: qq => {
              (0, Wq.n)({
                vibration: qq
              }), qq && ll("preview")
            }
          }), (0, Lq.jsx)(em, {
            settingKey: "cursorSpeed",
            label: qq("controller:settingsCursorSpeed"),
            range: Km.C,
            format: Km.P
          }), (0, Lq.jsx)(sm.d, {
            label: qq("controller:settingsCursorMagnetism"),
            checked: Eq.cursorMagnetism,
            onClick: qq => {
              (0, Wq.n)({
                cursorMagnetism: qq
              })
            }
          }), (0, Lq.jsx)(sm.d, {
            label: qq("controller:settingsMenuBackToCategories"),
            checked: Eq.menuBackToCategories,
            onClick: qq => {
              (0, Wq.n)({
                menuBackToCategories: qq
              })
            }
          }), (0, Lq.jsx)(ax, {
            layoutSetting: (0, Lq.jsxs)(Lq.Fragment, {
              children: [uq.e.map((gq => (0, Lq.jsx)(sm.d, {
                label: qq(Km.$[gq]),
                checked: (0, uq.w)(gq, Eq),
                onClick: qq => {
                  Yq(!(0, uq.F)(gq, qq))
                }
              }, gq))), gq && (0, Lq.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: qq("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, Lq.jsx)(Ax, {}), (0, Lq.jsx)(Cm, {
            text: qq("controller:settingsAlternatives")
          }), (0, Lq.jsx)("div", {
            className: "ControllerSettingsHint",
            children: qq("controller:settingsAlternativesHint")
          }), (0, Lq.jsx)(Im, {
            label: qq("controller:settingsMenuNavigation"),
            hint: qq("controller:settingsMenuNavigationHint"),
            options: Km.kb,
            value: Eq.menuNavigation,
            onChange: qq => {
              (0, Wq.n)({
                menuNavigation: qq
              })
            }
          }), (0, Lq.jsx)(Im, {
            label: qq("controller:settingsInventoryNavigation"),
            hint: qq("controller:settingsInventoryNavigationHint"),
            options: Km.X,
            value: Eq.inventoryNavigation,
            onChange: qq => {
              (0, Wq.n)({
                inventoryNavigation: qq
              })
            }
          }), (0, Lq.jsx)(Im, {
            label: qq("controller:settingsQuickChat"),
            hint: qq("controller:settingsQuickChatHint"),
            options: Km.ob,
            value: Eq.quickChat,
            onChange: qq => {
              (0, Wq.n)({
                quickChat: qq
              })
            }
          }), (0, Lq.jsx)(Im, {
            label: qq("controller:settingsLeaderboardButton"),
            hint: qq("controller:settingsLeaderboardButtonHint"),
            options: Km.db,
            value: Eq.leaderboardButton,
            onChange: qq => {
              (0, Wq.n)({
                leaderboardButton: qq
              })
            }
          }), (0, Lq.jsx)(Cm, {
            text: qq("controller:settingsTester")
          }), (0, Lq.jsx)(Hx, {})]
        })
      }));
    (0, lq.b)(Yq);
    for (const rx of (0, Oq.q)()) rx.connected ? mq.h.handleConnectionEvent(rx) : mq.h.handleDisconnectionEvent(rx);
    const Px = () => null !== mq.h.getActivePad(),
      Qx = () => lg.getState(),
      yx = () => lg.isSteppingSlots(),
      tx = (qq, Eq) => {
        const gq = eY.getFocused();
        eY.isActive() && gq && qq.contains(gq) && eY.setFocus(Eq, {
          scroll: !1
        })
      }
  },
  8064: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Aq,
      e: () => cq
    });
    var Yq = gq(1397),
      lq = gq(1388);
    const Oq = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      mq = "28de",
      xq = new Set(["1205"]),
      Aq = (qq, Eq) => {
        const gq = (0, Yq.d)(qq);
        if ((null === gq || void 0 === gq ? void 0 : gq.vendor) === mq) return xq.has(gq.product) ? "steamdeck" : "xbox";
        if (gq && Oq[gq.vendor]) return Oq[gq.vendor];
        if ((0, lq.d)(qq)) return "nintendo";
        const Aq = `${qq} ${null!==Eq&&void 0!==Eq?Eq:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(Aq) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(Aq) ? "nintendo" : /steam deck/.test(Aq) ? "steamdeck" : "xbox"
      },
      cq = qq => {
        var Eq;
        return (null === (Eq = (0, Yq.d)(qq)) || void 0 === Eq ? void 0 : Eq.vendor) === mq
      }
  },
  8118: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => cq,
      g: () => xq
    });
    var Yq = gq(8061);
    const lq = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      Oq = new Set(["capture", "gameplay"]),
      mq = ["Up", "Down", "Left", "Right"],
      xq = qq => mq.includes(qq),
      Aq = .25;
    const cq = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.Fc = new Array(Yq.X).fill(!1), this.previousHeld = new Array(Yq.X).fill(!1), this.consumedButtons = new Array(Yq.X).fill(!1), this.suppressedReleases = new Array(Yq.X).fill(!1), this.wakeOwned = new Array(Yq.X).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, Yq.y)()
      }
      register(qq) {
        return this.consumers.has(qq.name) && console.warn(`Controller consumer "${qq.name}" registered twice; the newer one replaces it.`), this.consumers.set(qq.name, qq), () => {
          var Eq;
          this.consumers.get(qq.name) === qq && (this.activeName === qq.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (Eq = this.peek) || void 0 === Eq ? void 0 : Eq.over) === qq.name && (this.peek = null), this.consumers.delete(qq.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(qq) {
        return this.Fc[(0, Yq.m)(qq)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.Fc = new Array(Yq.X).fill(!1), this.previousHeld = new Array(Yq.X).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, Yq.y)()
      }
      dispatch(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = qq, this.previousHeld = this.Fc, this.Fc = (0, Yq.t)(qq.values, this.previousHeld);
        for (let Oq = 0; Oq < Yq.X; Oq++) this.suppressedReleases[Oq] = !this.Fc[Oq] && this.consumedButtons[Oq], this.Fc[Oq] || (this.consumedButtons[Oq] = !1), this.wakeOwned[Oq] && (this.Fc[Oq] ? (this.consumedButtons[Oq] = !0, this.wakeOwned[Oq] = !1) : qq.values[Oq] < Yq.U && (this.wakeOwned[Oq] = !1));
        Math.hypot(qq.leftStick.x, qq.leftStick.y) < Aq && (this.leftStickConsumed = !1), Math.hypot(qq.rightStick.x, qq.rightStick.y) < Aq && (this.rightStickConsumed = !1);
        const lq = this.pickActive();
        if ((null === lq || void 0 === lq ? void 0 : lq.name) !== this.activeName) {
          var mq, xq, cq, uq, Bq, Wq;
          const qq = this.activeName,
            Eq = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            gq = null !== (mq = null === lq || void 0 === lq || null === (xq = lq.peek) || void 0 === xq ? void 0 : xq.call(lq)) && void 0 !== mq ? mq : null,
            Oq = null === qq && !!gq && !(null === (cq = this.consumers.get(gq.over)) || void 0 === cq || !cq.onPeekFrame),
            Aq = gq && (gq.over === qq || Oq) ? gq : null,
            Nq = null !== this.peek && this.peek.over === (null === lq || void 0 === lq ? void 0 : lq.name) ? this.peek : null;
          this.deactivateCurrent(null !== Aq, null !== Nq), this.activeName = null !== (uq = null === lq || void 0 === lq ? void 0 : lq.name) && void 0 !== uq ? uq : null, null === qq || this.handOffPending || this.consumeAllHeld();
          const aq = null === (Bq = null !== Aq && void 0 !== Aq ? Aq : Nq) || void 0 === Bq ? void 0 : Bq.stick;
          "left" === aq && Eq.left ? this.leftStickConsumed = !1 : "right" === aq && Eq.right && (this.rightStickConsumed = !1), this.peek = Aq, lq || null === qq ? lq && (null === (Wq = this.idleResume) || void 0 === Wq ? void 0 : Wq.name) === lq.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: qq,
            left: Eq.left && this.leftStickConsumed,
            right: Eq.right && this.rightStickConsumed
          }, lq && (this.idleResume = null);
          for (let lq = 0; lq < Yq.X; lq++) this.previousHeld[lq] && !this.Fc[lq] && (this.suppressedReleases[lq] = !0)
        }
        var Nq, aq;
        (this.handOffPending = !1, lq) && (gq && !Oq.has(lq.name) && this.consumeWakePress(lq), lq.onFrame(this.buildInput(qq, Eq, gq)), this.peek && (null === (Nq = this.consumers.get(this.peek.over)) || void 0 === Nq || null === (aq = Nq.onPeekFrame) || void 0 === aq || aq.call(Nq, this.buildInput(qq, Eq, !1, this.peek.stick))))
      }
      consumeWakePress(qq) {
        for (let lq = 0; lq < Yq.X; lq++) {
          var Eq, gq;
          const Oq = Yq.$[lq];
          (null !== (Eq = null === (gq = qq.wakePressActs) || void 0 === gq ? void 0 : gq.call(qq, Oq)) && void 0 !== Eq ? Eq : mq.includes(Oq)) || (this.Fc[lq] ? this.consumedButtons[lq] = !0 : this.lastFrame.values[lq] >= Yq.R && (this.wakeOwned[lq] = !0))
        }
      }
      pickActive() {
        for (const qq of lq) {
          const Eq = this.consumers.get(qq);
          if (Eq && Eq.isActive()) return Eq
        }
        return null
      }
      deactivateCurrent() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var gq, Yq, lq, Oq;
        this.activeName && (null === (gq = this.consumers.get(this.activeName)) || void 0 === gq || null === (Yq = gq.onDeactivate) || void 0 === Yq || Yq.call(gq, qq));
        this.peek && !Eq && (null === (lq = this.consumers.get(this.peek.over)) || void 0 === lq || null === (Oq = lq.onDeactivate) || void 0 === Oq || Oq.call(lq, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let lq = 0; lq < Yq.X; lq++) this.Fc[lq] && (this.consumedButtons[lq] = !0);
        const {
          leftStick: Eq,
          rightStick: gq
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== qq && (this.leftStickConsumed || Math.hypot(Eq.x, Eq.y) >= Aq), this.rightStickConsumed = "right" !== qq && (this.rightStickConsumed || Math.hypot(gq.x, gq.y) >= Aq)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(qq) {
        const Eq = (0, Yq.m)(qq);
        this.Fc[Eq] && (this.consumedButtons[Eq] = !0)
      }
      buildInput(qq, Eq, gq, lq) {
        const Oq = this.Fc,
          mq = this.previousHeld,
          xq = lq ? new Array(Yq.X).fill(!0) : [...this.consumedButtons],
          Aq = lq ? xq : [...this.suppressedReleases],
          cq = !this.leftStickConsumed && (!lq || "left" === lq),
          uq = !this.rightStickConsumed && (!lq || "right" === lq);
        return {
          frame: qq,
          dtMs: Eq,
          isHeld: qq => {
            const Eq = (0, Yq.m)(qq);
            return Oq[Eq] && !xq[Eq]
          },
          wasPressed: qq => {
            const Eq = (0, Yq.m)(qq);
            return Oq[Eq] && !mq[Eq] && !xq[Eq]
          },
          wasReleased: qq => {
            const Eq = (0, Yq.m)(qq);
            return !Oq[Eq] && mq[Eq] && !Aq[Eq]
          },
          value: Eq => {
            const gq = (0, Yq.m)(Eq);
            return xq[gq] ? 0 : qq.values[gq]
          },
          leftStick: cq ? qq.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: uq ? qq.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: gq
        }
      }
    }
  },
  8090: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Bq.c,
      f: () => Bq.f,
      i: () => nq,
      k: () => bq,
      n: () => iq,
      r: () => Zq
    });
    var Yq = gq(57),
      lq = gq(31),
      Oq = gq(1416),
      mq = gq(38),
      xq = gq(8095),
      Aq = gq(8061),
      cq = gq(8081),
      uq = gq(8057),
      Bq = gq(1985),
      Wq = gq(8104);
    const Nq = {
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
      aq = "controllerSettings",
      Vq = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      dq = ["auto", ...xq.d],
      jq = (qq, Eq) => "string" === typeof Eq && qq.includes(Eq),
      Hq = qq => Eq => "number" === typeof Eq && Number.isFinite(Eq) ? (0, Wq.z)(Eq, qq) : void 0,
      oq = qq => "boolean" === typeof qq ? qq : void 0,
      Pq = qq => Eq => jq(qq, Eq) ? Eq : void 0,
      Qq = {
        lookSensitivityX: Hq(Wq.vb),
        lookSensitivityY: Hq(Wq.vb),
        aimLookSensitivity: Hq(Wq.n),
        invertLookX: oq,
        invertLookY: oq,
        lookCurve: Pq(Aq.N),
        lookDeadzone: Hq(Wq.F),
        moveDeadzone: Hq(Wq.F),
        swapSticks: oq,
        autoSprint: oq,
        sneakMode: Pq(["toggle", "hold"]),
        tapHoldTime: Pq(["short", "medium", "long"]),
        attackMode: Pq(["hold", "toggle"]),
        promptFamily: Pq(dq),
        hideButtonHints: oq,
        vibration: oq,
        cursorSpeed: Hq(Wq.C),
        cursorMagnetism: oq,
        buttonRepeat: Pq(Aq.p),
        largePointer: oq,
        menuBackToCategories: oq,
        swapConfirmBack: oq,
        menuNavigation: Pq(["hybrid", "focus", "cursor"]),
        inventoryNavigation: Pq(["hybrid", "slot", "cursor"]),
        quickChat: Pq(["wheel", "off"]),
        leaderboardButton: Pq(["shop", "leaderboard"]),
        gyroAiming: oq,
        gyroSensitivity: Hq(Wq.T),
        gyroActivation: Pq(["always", "aiming", "button"]),
        gyroButton: Pq(Aq.$),
        emoteButton: Pq(["tapHold", "wheel"])
      },
      yq = [{
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
      tq = qq => {
        const Eq = {};
        if ("object" !== typeof qq || null === qq) return Eq;
        for (const [gq, Yq] of Object.entries(qq)) Object.prototype.hasOwnProperty.call(cq.f, gq) && jq(Aq.$, Yq) && (Eq[gq] = Yq);
        return Eq
      },
      rq = qq => {
        const Eq = {};
        for (const gq of Object.keys(Nq))("bindings" === gq ? Object.keys(qq.bindings).length > 0 : qq[gq] !== Nq[gq]) && (Eq[gq] = qq[gq]);
        0 !== Object.keys(Eq).length ? mq.i.setItem(aq, Eq) : mq.i.removeItem(aq)
      };
    let vq = (() => {
        const qq = mq.i.getItem(aq),
          Eq = (qq => {
            const Eq = "object" === typeof qq && null !== qq ? qq : {},
              gq = {
                ...Nq,
                bindings: tq(Eq.bindings)
              };
            for (const lq of Object.keys(Qq)) {
              const qq = Qq[lq](Eq[lq]);
              void 0 !== qq && (gq[lq] = qq)
            }
            const Yq = Object.keys(Eq).filter((qq => !!Object.prototype.hasOwnProperty.call(Nq, qq) && ("bindings" === qq ? "object" !== typeof Eq.bindings || null === Eq.bindings || Object.keys(Eq.bindings).length !== Object.keys(gq.bindings).length : gq[qq] !== Eq[qq])));
            return Yq.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${Yq.join(", ")}`), gq
          })(qq);
        return null !== qq && void 0 !== qq && rq(Eq), Eq
      })(),
      hq = {
        ...vq,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const qq = {},
            Eq = new URLSearchParams(window.location.search);
          for (const {
              param: gq,
              key: Yq
            }
            of yq) {
            const lq = Qq[Yq](Eq.get(gq));
            void 0 !== lq && (qq[Yq] = lq)
          }
          return qq
        })()
      };
    const nq = () => hq,
      bq = () => {
        var qq, Eq;
        const gq = nq().promptFamily;
        return "auto" !== gq ? gq : null !== (qq = null === (Eq = uq.h.getActivePad()) || void 0 === Eq ? void 0 : Eq.family) && void 0 !== qq ? qq : "xbox"
      },
      iq = qq => {
        const Eq = hq;
        vq = {
          ...vq,
          ...qq
        }, rq(vq), hq = {
          ...hq,
          ...qq
        }, (qq => {
          lq.i.TV(Bq.f, hq), Vq.some((Eq => qq[Eq] !== hq[Eq])) && lq.i.TV(Bq.c, hq)
        })(Eq)
      },
      Zq = () => {
        const [qq, Eq] = (0, Yq.useState)(hq);
        return (0, Oq.f)(Bq.f, Eq), qq
      }
  },
  8586: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq
    });
    const Yq = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      lq = qq => Yq.has(qq)
  },
  8057: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Vq.b,
      h: () => oq
    });
    var Yq = gq(8061),
      lq = gq(8064);
    const Oq = .1,
      mq = .3;
    class xq {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(qq, Eq) {
        const gq = null === this.lastMs ? 0 : Math.min(Math.max(0, Eq - this.lastMs), 100);
        this.lastMs = Eq;
        const Yq = Math.hypot(qq.x, qq.y);
        if (Yq >= mq) return this.anchor = null, void(this.returning = !0);
        Yq >= Oq || (this.returning = !1);
        const lq = this.anchor;
        if (!lq || Math.hypot(qq.x - lq.x, qq.y - lq.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: qq.x,
          y: qq.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += gq, this.steadyMs < 1e3) return;
        const xq = Math.max(Yq, Math.hypot(lq.x, lq.y));
        xq < Oq ? this.deadzone = 0 : this.returning && (this.deadzone = xq + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(qq) {
        return Math.hypot(qq.x, qq.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : qq
      }
    }
    const Aq = (qq, Eq) => {
        var gq, Yq;
        return null !== (gq = qq && (null === (Yq = Object.getOwnPropertyDescriptor(qq, Eq)) || void 0 === Yq ? void 0 : Yq.get)) && void 0 !== gq ? gq : null
      },
      cq = qq => {
        const Eq = qq.vendorName;
        return "string" === typeof Eq ? Eq : void 0
      },
      uq = ((qq, Eq) => {
        const gq = Aq(qq, "index"),
          Yq = Aq(qq, "id"),
          lq = Aq(qq, "connected"),
          Oq = Aq(qq, "mapping"),
          mq = Aq(qq, "buttons"),
          xq = Aq(qq, "axes"),
          uq = Aq(Eq, "pressed"),
          Bq = Aq(Eq, "value");
        return gq && Yq && lq && Oq && mq && xq && uq && Bq ? qq => {
          const Eq = mq.call(qq),
            Aq = xq.call(qq),
            Wq = {
              index: Number(gq.call(qq)),
              id: String(Yq.call(qq)),
              connected: !0 === lq.call(qq),
              mapping: String(Oq.call(qq)),
              buttons: [],
              axes: [],
              vendorName: cq(qq)
            };
          for (let gq = 0; gq < Eq.length; gq++) Wq.buttons.push({
            pressed: !0 === uq.call(Eq[gq]),
            value: Number(Bq.call(Eq[gq]))
          });
          for (let gq = 0; gq < Aq.length; gq++) Wq.axes.push(Number(Aq[gq]));
          return Wq
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      Bq = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var Wq = gq(1384),
      Nq = gq(1388);
    const aq = qq => ({
      pressed: qq,
      value: qq ? 1 : 0
    });
    var Vq = gq(1985);
    const dq = mq,
      jq = qq => {
        const Eq = new Array(Yq.X).fill(0);
        for (let gq = 0; gq < Yq.X && gq < qq.buttons.length; gq++) {
          const lq = qq.buttons[gq];
          Eq[gq] = lq.pressed && !(0, Yq.K)(gq) ? Math.max(lq.value, Yq.A) : lq.value
        }
        return Eq
      },
      Hq = (qq, Eq) => {
        var gq, Yq;
        return {
          x: null !== (gq = qq.axes[Eq]) && void 0 !== gq ? gq : 0,
          y: null !== (Yq = qq.axes[Eq + 1]) && void 0 !== Yq ? Yq : 0
        }
      };
    const oq = new class {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uq;
        this.readGamepads = qq, this.requireTrustedPads = Eq, this.nativeReader = gq, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = qq => {
          qq.isTrusted && this.trustedIndices.add(qq.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = qq => {
          this.trustedIndices.delete(qq.gamepad.index)
        }, this.SB = qq => {
          if (this.rafId = 0, !this.running) return;
          const Eq = 0 === this.lastTimestampMs ? 16 : Math.min(100, qq - this.lastTimestampMs);
          this.lastTimestampMs = qq;
          try {
            this.poll(qq, Eq)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.SB))
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
      onFrame(qq) {
        return this.frameListeners.add(qq), () => {
          this.frameListeners.delete(qq)
        }
      }
      onActivePadChanged(qq) {
        return this.connectionListeners.add(qq), () => {
          this.connectionListeners.delete(qq)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(qq) {
        return this.connectedListeners.add(qq), () => {
          this.connectedListeners.delete(qq)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const qq = this.readPads()[this.activeInfo.index],
          Eq = qq ? this.readPad(qq) : null;
        return Eq && Eq.id === this.activeInfo.id ? qq : null
      }
      poll(qq, Eq) {
        var gq, lq;
        const Oq = this.readPads();
        let mq = null,
          Aq = !1;
        const cq = [],
          uq = Math.max(Oq.length, this.slots.length);
        for (let oq = 0; oq < uq; oq++) {
          var Bq;
          const Eq = oq < Oq.length ? Oq[oq] : null,
            gq = Eq ? this.readPad(Eq) : null;
          if (!gq || !gq.connected || !this.isUsable(gq)) {
            this.slots[oq] = null;
            continue
          }
          let lq = this.slots[oq];
          lq && lq.id === gq.id || (lq = {
            id: gq.id,
            Fc: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new xq,
            rightRest: new xq
          }, this.slots[oq] = lq);
          const uq = Hq(gq, 0),
            Wq = Hq(gq, 2);
          !lq.leftSettled && Math.hypot(uq.x, uq.y) < dq && (lq.leftSettled = !0), !lq.rightSettled && Math.hypot(Wq.x, Wq.y) < dq && (lq.rightSettled = !0), lq.leftRest.observe(uq, qq), lq.rightRest.observe(Wq, qq);
          const Nq = jq(gq),
            aq = (0, Yq.t)(Nq, lq.Fc),
            Vq = lq.Fc,
            Pq = aq.map(((qq, Eq) => qq && !Vq[Eq]));
          lq.Fc = aq;
          const Qq = {
            pad: gq,
            slot: lq,
            values: Nq
          };
          oq === (null === (Bq = this.activeInfo) || void 0 === Bq ? void 0 : Bq.index) && gq.id === this.activeInfo.id ? (mq = Qq, Aq = Pq.includes(!0)) : Pq.includes(!0) && cq.push({
            polled: Qq,
            rose: Pq
          })
        }
        const Wq = this.slots.some((qq => null !== qq));
        if (Wq !== this.anyPadConnected) {
          this.anyPadConnected = Wq;
          for (const qq of this.connectedListeners) qq()
        }
        const Nq = null !== (gq = null === (lq = mq) || void 0 === lq ? void 0 : lq.slot.Fc) && void 0 !== gq ? gq : [],
          aq = Aq ? void 0 : cq.find((qq => {
            let {
              rose: Eq
            } = qq;
            return Eq.some(((qq, Eq) => qq && !Nq[Eq]))
          }));
        if (aq ? (mq = aq.polled, this.setActive(aq.polled.pad)) : this.activeInfo && !mq && this.setActive(null), !mq || !this.activeInfo) return;
        const Vq = ((qq, Eq) => {
          let {
            pad: gq,
            slot: lq,
            values: Oq
          } = qq;
          const mq = (0, Yq.y)(Eq);
          return mq.values = Oq, lq.leftSettled && (mq.leftStick = lq.leftRest.apply(Hq(gq, 0))), lq.rightSettled && (mq.rightStick = lq.rightRest.apply(Hq(gq, 2))), mq
        })(mq, qq);
        for (const Yq of this.frameListeners) Yq(Vq, Eq, this.activeInfo)
      }
      readPad(qq) {
        const Eq = this.readSnapshot(qq);
        return Eq && (0, Nq.h)(Eq) ? (qq => {
          const Eq = Eq => {
              var gq;
              return null !== (gq = qq.buttons[Eq]) && void 0 !== gq ? gq : aq(!1)
            },
            gq = Eq => {
              var gq;
              return null !== (gq = qq.axes[Eq]) && void 0 !== gq ? gq : 0
            },
            Yq = qq.axes.length > 9,
            lq = Yq ? (qq => {
              const Eq = 0 !== qq;
              return {
                up: Eq && (qq >= -1 && qq < -.7 || qq >= .95 && qq <= 1),
                right: Eq && qq >= -.75 && qq < -.1,
                down: Eq && qq >= -.2 && qq < .45,
                left: Eq && qq >= .4 && qq <= 1
              }
            })(gq(9)) : {
              up: gq(5) < -.5,
              down: gq(5) > .5,
              left: gq(4) < -.5,
              right: gq(4) > .5
            };
          return {
            ...qq,
            mapping: "standard",
            buttons: [Eq(1), Eq(2), Eq(0), Eq(3), Eq(4), Eq(5), Eq(6), Eq(7), Eq(8), Eq(9), Eq(10), Eq(11), aq(lq.up), aq(lq.down), aq(lq.left), aq(lq.right), Eq(12)],
            axes: [gq(0), gq(1), gq(2), gq(Yq ? 5 : 3)]
          }
        })(Eq) : Eq
      }
      readSnapshot(qq) {
        if (this.nativeReader) try {
          return this.nativeReader(qq)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (qq => {
          const Eq = qq;
          return {
            index: Eq.index,
            id: Eq.id,
            connected: Eq.connected,
            mapping: Eq.mapping,
            buttons: Array.from(Eq.buttons, (qq => ({
              pressed: qq.pressed,
              value: qq.value
            }))),
            axes: Array.from(Eq.axes),
            vendorName: cq(qq)
          }
        })(qq)
      }
      isUsable(qq) {
        return !(0, Wq.e)(qq.id) && ("standard" !== qq.mapping ? (this.warnedNonStandardIds.has(qq.id) || (this.warnedNonStandardIds.add(qq.id), console.warn(`Controller "${qq.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(qq.index))
      }
      setActive(qq) {
        this.activeInfo = qq ? {
          index: qq.index,
          id: qq.id,
          family: (0, lq.b)(qq.id, qq.vendorName)
        } : null;
        for (const Eq of this.connectionListeners) Eq(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (qq) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", qq)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.SB))
      }
    }((() => Bq ? Bq.call(navigator) : []), !0);
    oq.listenForConnections()
  },
  8599: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq
    });
    const Yq = {
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
  8712: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq,
      d: () => xq
    });
    var Yq = gq(31),
      lq = gq(8704);
    let Oq = !1;
    const mq = () => Oq,
      xq = qq => {
        qq !== Oq && (Oq = qq, Yq.i.TV(lq.i, Oq))
      }
  },
  8709: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => xq,
      h: () => Aq
    });
    var Yq = gq(31),
      lq = gq(8704);
    let Oq = null,
      mq = 0;
    const xq = () => Oq,
      Aq = qq => {
        null === qq && null === Oq || (Oq = null === qq ? null : {
          id: ++mq,
          holdMs: qq
        }, Yq.i.TV(lq.j, Oq))
      }
  },
  8718: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq,
      g: () => xq
    });
    var Yq = gq(31),
      lq = gq(8704);
    let Oq = !1;
    const mq = () => Oq,
      xq = qq => {
        qq !== Oq && (Oq = qq, Yq.i.TV(lq.n, Oq))
      }
  },
  8803: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq,
      f: () => xq
    });
    var Yq = gq(31),
      lq = gq(8704);
    let Oq = !1;
    const mq = () => Oq,
      xq = qq => {
        qq !== Oq && (Oq = qq, Yq.i.TV(lq.o, Oq))
      }
  },
  8655: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq
    });
    class Yq {
      constructor() {
        this.downAtMs = null
      }
      update(qq, Eq, gq, Yq) {
        if (qq) return this.downAtMs = gq, null;
        if (null === this.downAtMs) return null;
        const lq = gq - this.downAtMs >= Yq;
        return Eq ? lq ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, lq ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8130: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Bq,
      i: () => Wq,
      k: () => xq,
      o: () => oq,
      r: () => Hq
    });
    var Yq = gq(38),
      lq = gq(8095),
      Oq = gq(8061);
    const mq = (() => {
        try {
          return gq(8133)
        } catch {
          return null
        }
      })(),
      xq = [...Oq.$, "LeftStick", "RightStick"],
      Aq = new Map,
      cq = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      uq = (new Set(Object.values(cq)), {
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
      Bq = (qq, Eq) => {
        var gq, Yq;
        return null !== (gq = null === (Yq = uq[cq[qq]]) || void 0 === Yq ? void 0 : Yq[Eq]) && void 0 !== gq ? gq : 1
      },
      Wq = (qq, Eq) => {
        const gq = `./${cq[qq]}/${Eq}.svg`;
        let Yq = Aq.get(gq);
        return void 0 === Yq && (Yq = mq ? mq(gq) : "", Aq.set(gq, Yq)), Yq
      },
      Nq = new Set,
      aq = [],
      Vq = qq => {
        if (!Nq.has(qq)) {
          Nq.add(qq);
          for (const Eq of xq) {
            const gq = Wq(qq, Eq);
            if (gq) {
              const qq = new Image;
              qq.crossOrigin = "anonymous", qq.src = gq, aq.push(qq)
            }
          }
        }
      },
      dq = "controllerGlyphFamily";
    let jq = null;
    const Hq = qq => {
        qq !== jq && (jq = qq, Yq.i.setItem(dq, qq), Vq(qq))
      },
      oq = () => {
        const qq = Yq.i.getItem(dq);
        (0, lq.f)(qq) && qq !== jq && (jq = qq, Vq(qq))
      }
  },
  8826: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Gq,
      c: () => Lq
    });
    var Yq = gq(57),
      lq = gq(31),
      Oq = gq(1416),
      mq = gq(8073),
      xq = gq(8057),
      Aq = gq(8118),
      cq = gq(8090);
    const uq = {
        x: 0,
        y: 0,
        z: 0
      },
      Bq = Math.PI / 180,
      Wq = qq => Math.hypot(qq.x, qq.y, qq.z),
      Nq = (qq, Eq) => ({
        x: qq.x * Eq,
        y: qq.y * Eq,
        z: qq.z * Eq
      }),
      aq = (qq, Eq) => ({
        x: qq.x + Eq.x,
        y: qq.y + Eq.y,
        z: qq.z + Eq.z
      }),
      Vq = (qq, Eq) => ({
        x: qq.x - Eq.x,
        y: qq.y - Eq.y,
        z: qq.z - Eq.z
      }),
      dq = qq => {
        const Eq = Wq(qq);
        return 0 === Eq ? uq : Nq(qq, 1 / Eq)
      },
      jq = qq => ({
        min: {
          ...qq
        },
        max: {
          ...qq
        }
      }),
      Hq = (qq, Eq) => ({
        min: {
          x: Math.min(qq.min.x, Eq.x),
          y: Math.min(qq.min.y, Eq.y),
          z: Math.min(qq.min.z, Eq.z)
        },
        max: {
          x: Math.max(qq.max.x, Eq.x),
          y: Math.max(qq.max.y, Eq.y),
          z: Math.max(qq.max.z, Eq.z)
        }
      }),
      oq = (qq, Eq) => qq.max.x - qq.min.x <= Eq && qq.max.y - qq.min.y <= Eq && qq.max.z - qq.min.z <= Eq;
    class Pq {
      constructor() {
        this.bias = uq, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = uq, this.windowSec = 0
      }
      update(qq) {
        const Eq = this.gyroRange ? Hq(this.gyroRange, qq.gyro) : jq(qq.gyro),
          gq = qq.accel ? this.accelRange ? Hq(this.accelRange, qq.accel) : jq(qq.accel) : null;
        if (!oq(Eq, 1) || gq && !oq(gq, .01)) return void this.restartWindow(qq);
        if (this.gyroRange = Eq, this.accelRange = gq, this.sum = aq(this.sum, Nq(qq.gyro, qq.dtSec)), this.windowSec += qq.dtSec, this.windowSec < 1) return;
        const Yq = Nq(this.sum, 1 / this.windowSec);
        if (Wq(Yq) > 5) return;
        const lq = Vq(Yq, this.bias);
        let Oq = 0;
        !this.calibrated || this.windowSec >= 3 ? Oq = 1 : Wq(lq) <= 1 && (Oq = Math.min(1, qq.dtSec / 1)), this.bias = aq(this.bias, Nq(lq, Oq)), this.calibrated = this.calibrated || Oq > 0
      }
      correct(qq) {
        return Vq(qq, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = uq, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = uq, this.windowSec = 0
      }
      restartWindow(qq) {
        this.gyroRange = jq(qq.gyro), this.accelRange = qq.accel ? jq(qq.accel) : null, this.sum = uq, this.windowSec = 0
      }
    }
    class Qq {
      constructor() {
        this.down = null
      }
      update(qq, Eq, gq) {
        const Yq = dq(Nq(Eq, -1));
        if (!this.down) return this.down = Yq, Yq;
        const lq = Nq(qq, Bq * gq),
          Oq = this.down,
          mq = {
            x: Oq.x - (lq.y * Oq.z - lq.z * Oq.y),
            y: Oq.y - (lq.z * Oq.x - lq.x * Oq.z),
            z: Oq.z - (lq.x * Oq.y - lq.y * Oq.x)
          },
          xq = 0 === Wq(Yq) ? 0 : Math.min(1, gq / .25);
        var Aq, cq;
        return this.down = dq((cq = xq, aq(Aq = mq, Nq(Vq(Yq, Aq), cq)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class yq {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(qq, Eq, gq) {
        const Yq = Math.hypot(qq, Eq),
          lq = Math.max(0, Math.min(1, (Yq - 2) / 2)),
          Oq = {
            yaw: qq * (1 - lq),
            pitch: Eq * (1 - lq),
            dtSec: gq
          };
        for (this.entries.push(Oq), this.windowSec += gq; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let mq = 0,
          xq = 0;
        for (const cq of this.entries) mq += cq.yaw * cq.dtSec, xq += cq.pitch * cq.dtSec;
        const Aq = this.windowSec > 0 ? {
          yaw: mq / this.windowSec,
          pitch: xq / this.windowSec
        } : {
          yaw: Oq.yaw,
          pitch: Oq.pitch
        };
        return {
          yaw: qq * lq + Aq.yaw,
          pitch: Eq * lq + Aq.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class tq {
      constructor() {
        this.calibrator = new Pq, this.gravity = new Qq, this.smoother = new yq
      }
      process(qq, Eq, gq) {
        const Yq = Math.max(0, Math.min(.05, Eq));
        this.calibrator.update({
          ...qq,
          dtSec: Yq
        });
        const lq = this.calibrator.correct(qq.gyro);
        let Oq = lq.y;
        "player" === gq && qq.accel && (Oq = ((qq, Eq) => {
          const gq = qq.y * Eq.y + qq.z * Eq.z;
          return -Math.sign(gq) * Math.min(1.41 * Math.abs(gq), Math.hypot(qq.y, qq.z))
        })(lq, this.gravity.update(lq, qq.accel, Yq)));
        const mq = this.smoother.apply(Oq, lq.x, Yq),
          xq = ((qq, Eq) => {
            const gq = Math.hypot(qq, Eq);
            if (gq >= 1) return {
              yaw: qq,
              pitch: Eq
            };
            const Yq = gq / 1;
            return {
              yaw: qq * Yq,
              pitch: Eq * Yq
            }
          })(mq.yaw, mq.pitch);
        return {
          yawDeg: xq.yaw * Yq,
          pitchDeg: xq.pitch * Yq
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
    const rq = (qq, Eq) => {
      var gq, Yq, lq;
      const Oq = Eq * Bq,
        mq = null !== (gq = qq.beta) && void 0 !== gq ? gq : 0,
        xq = null !== (Yq = qq.gamma) && void 0 !== Yq ? Yq : 0;
      return {
        x: mq * Math.cos(Oq) - xq * Math.sin(Oq),
        y: mq * Math.sin(Oq) + xq * Math.cos(Oq),
        z: null !== (lq = qq.alpha) && void 0 !== lq ? lq : 0
      }
    };
    var vq = gq(8829);
    class hq {
      constructor(qq, Eq, gq) {
        this.hid = qq, this.sink = Eq, this.onControllersChanged = gq, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = qq => {
          this.openController(qq.device).catch((qq => {
            console.warn("Could not open motion controller", qq)
          }))
        }, this.onDisconnect = qq => {
          this.opening.has(qq.device) && this.disconnectedWhileOpening.add(qq.device);
          const Eq = this.controllers.get(qq.device);
          Eq && (this.forget(Eq), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const qq = await this.hid.getDevices();
        for (const Eq of qq) await this.openController(Eq).catch((qq => {
          console.warn("Could not open motion controller", qq)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const qq of [...this.controllers.values()]) this.forget(qq);
        this.onControllersChanged()
      }
      async request() {
        const qq = await this.hid.requestDevice({
          filters: vq.m
        });
        let Eq = 0;
        for (const gq of qq) await this.openController(gq).catch((qq => {
          console.warn("Could not open motion controller", qq), Eq++
        }));
        return Eq
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((qq => null !== (0, vq.f)(qq.vendorId, qq.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((qq => qq.kind))
      }
      forget(qq) {
        qq.device.removeEventListener("inputreport", qq.onReport), this.controllers.get(qq.device) === qq && this.controllers.delete(qq.device)
      }
      async openController(qq) {
        const Eq = (0, vq.f)(qq.vendorId, qq.productId);
        if (!Eq || !this.running || this.controllers.has(qq) || this.opening.has(qq)) return;
        this.opening.add(qq);
        let gq = !1;
        try {
          qq.opened || await qq.open()
        } finally {
          this.opening.delete(qq), gq = this.disconnectedWhileOpening.delete(qq)
        }
        if (gq) return void qq.close().catch((qq => {
          console.debug("Could not close an unplugged motion controller", qq)
        }));
        if (!this.running) return;
        const Yq = {
          device: qq,
          kind: Eq,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: qq => {
            this.onReport(Yq, qq)
          }
        };
        this.controllers.set(qq, Yq), qq.addEventListener("inputreport", Yq.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(Yq)
        } catch (lq) {
          console.warn(`Could not turn on motion for ${Eq}`, lq), this.controllers.get(qq) === Yq && (this.forget(Yq), this.onControllersChanged())
        }
      }
      async enableMotion(qq) {
        let {
          device: Eq,
          kind: gq
        } = qq;
        if ((0, vq.i)(gq))
          for (const Yq of vq.w[gq]) await Eq.receiveFeatureReport(Yq).catch((qq => {
            console.debug(`Motion controller feature report ${Yq} unavailable`, qq)
          }));
        else
          for (let Yq = 0; Yq < 2; Yq++)
            for (const {
                subcommand: qq,
                args: gq
              }
              of vq.A) await Eq.sendReport(vq.C, (0, vq.c)(this.switchPacketCounter++, qq, gq)), await new Promise((qq => {
              setTimeout(qq, 60)
            }))
      }
      onReport(qq, Eq) {
        const gq = (0, vq.q)(qq.kind, Eq.reportId, Eq.data, qq.device.productId);
        if (!gq) return;
        const Yq = null === qq.lastEventMs ? 0 : (Eq.timeStamp - qq.lastEventMs) / 1e3;
        qq.lastEventMs = Eq.timeStamp;
        let lq = gq.dtSec;
        if (null !== lq && Yq > 0 && (lq = Math.max(.001, Math.min(.017, Yq / gq.readings.length))), null === lq && null !== gq.sensorClock && (0, vq.i)(qq.kind)) {
          const Eq = (0, vq.u)(qq.kind, qq.lastClock, gq.sensorClock);
          qq.lastClock = gq.sensorClock, lq = 0 === Eq ? null : Eq
        }
        if (qq.lastReadingMs = Eq.timeStamp, this.isPreferred(qq, Eq.timeStamp))
          for (const mq of gq.readings) {
            var Oq;
            this.sink(mq, null !== (Oq = lq) && void 0 !== Oq ? Oq : Yq, `hid${qq.openedOrder}`)
          }
      }
      isPreferred(qq, Eq) {
        const gq = qq => 1e6 * vq.o[qq.kind] + qq.openedOrder;
        for (const Yq of this.controllers.values())
          if (Yq !== qq && Eq - Yq.lastReadingMs < 500 && gq(Yq) < gq(qq)) return !1;
        return !0
      }
    }
    var nq = gq(96);
    const bq = () => DeviceMotionEvent,
      iq = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, nq.isMobile)(),
      Zq = () => {
        var qq;
        const Eq = null === (qq = window.screen.orientation) || void 0 === qq ? void 0 : qq.angle;
        return "number" === typeof Eq ? Eq : "number" === typeof window.orientation ? window.orientation : 0
      };
    class fq {
      constructor(qq, Eq) {
        this.sink = qq, this.onStateChanged = Eq, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((qq => {
            console.warn("Could not enable the motion sensor", qq)
          }))
        }, this.onMotion = qq => {
          const Eq = qq.rotationRate;
          if (!Eq || null === Eq.alpha && null === Eq.beta && null === Eq.gamma) return;
          const gq = null === this.lastEventMs ? 0 : (qq.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = qq.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: rq(Eq, Zq()),
            accel: null
          }, gq, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof bq().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const qq = bq().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof qq) return void this.listen();
        let Eq;
        this.disarmGestureRequest();
        try {
          Eq = await qq.call(DeviceMotionEvent)
        } catch (gq) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), gq
        }
        this.wanted && ("granted" === Eq ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(qq) {
        this.state !== qq && (this.state = qq, this.onStateChanged())
      }
    }
    const Mq = "controllerGyroStatusChanged",
      Tq = {
        VJ: 0,
        dJ: 0
      },
      zq = qq => {
        var Eq, gq;
        return "undefined" === typeof document || (null === (Eq = null === (gq = document.featurePolicy) || void 0 === gq ? void 0 : gq.allowsFeature(qq)) || void 0 === Eq || Eq)
      };
    class Sq {
      constructor() {
        this.processor = new tq, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = qq => {
          const Eq = qq.gyroAiming && xq.h.hasConnectedPad();
          var gq, Yq;
          Eq !== this.phoneRunning && (this.phoneRunning = Eq, Eq ? null === (gq = this.phone) || void 0 === gq || gq.start() : null === (Yq = this.phone) || void 0 === Yq || Yq.stop());
          if (qq.gyroAiming !== this.running) {
            var lq, Oq;
            if (this.running = qq.gyroAiming, this.running) null === (lq = this.hid) || void 0 === lq || lq.start().catch((qq => {
              console.warn("Could not open motion controllers", qq)
            }));
            else null === (Oq = this.hid) || void 0 === Oq || Oq.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          lq.i.TV(Mq, this.getStatus())
        };
        const qq = (() => {
            var qq;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (qq = navigator.hid) && void 0 !== qq ? qq : null
          })(),
          Eq = zq("hid");
        this.hidBlocked = null !== qq && !Eq, this.hid = qq && Eq ? new hq(qq, ((qq, Eq, gq) => {
          this.lastHidReadingMs = performance.now(), this.feed(qq, Eq, "player", gq)
        }), this.publishStatus) : null;
        const gq = zq("accelerometer") && zq("gyroscope");
        this.phoneBlocked = iq() && !gq, this.phone = iq() && gq ? new fq(((qq, Eq, gq) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(qq, Eq, "local", gq)
        }), this.publishStatus) : null, lq.i.subscribe(cq.f, this.syncWithSettings), xq.h.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, cq.i)()), this.publishStatus()
        })), this.syncWithSettings((0, cq.i)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var qq, Eq, gq, Yq;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (qq = null === (Eq = this.hid) || void 0 === Eq ? void 0 : Eq.getConnectedKinds()) && void 0 !== qq ? qq : [],
          phoneMotion: null !== (gq = null === (Yq = this.phone) || void 0 === Yq ? void 0 : Yq.getState()) && void 0 !== gq ? gq : "off",
          padConnected: xq.h.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var qq;
        await (null === (qq = this.phone) || void 0 === qq ? void 0 : qq.requestPermission())
      }
      drainLookDelta() {
        const qq = performance.now();
        qq - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = qq;
        const Eq = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const gq = (0, cq.i)();
        return gq.gyroAiming && (qq => {
          let {
            activation: Eq,
            isHeld: gq,
            useButton: Yq,
            gyroButton: lq
          } = qq;
          return "always" === Eq || gq("aiming" === Eq ? Yq : lq)
        })({
          activation: gq.gyroActivation,
          isHeld: qq => Aq.c.isButtonHeld(qq),
          useButton: (0, mq.i)("use"),
          gyroButton: gq.gyroButton
        }) ? ((qq, Eq) => ({
          VJ: -qq.yawDeg * Eq * Bq,
          dJ: -qq.pitchDeg * Eq * Bq
        }))(Eq, gq.gyroSensitivity) : Tq
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(qq, Eq) {
        this.feed(qq, Eq, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(qq, Eq, gq, Yq) {
        this.source !== Yq && (this.processor.reset(), this.source = Yq);
        const lq = this.processor.process(qq, Eq, gq);
        this.pendingYawDeg += lq.yawDeg, this.pendingPitchDeg += lq.pitchDeg
      }
    }
    let pq = null;
    const Gq = () => (pq || (pq = new Sq), pq),
      Lq = () => {
        const [qq, Eq] = (0, Yq.useState)((() => Gq().getStatus()));
        return (0, Oq.f)(Mq, Eq), (0, Yq.useEffect)((() => {
          Eq(Gq().getStatus())
        }), []), qq
      }
  },
  8829: (qq, Eq, gq) => {
    gq.d(Eq, {
      A: () => yq,
      C: () => oq,
      c: () => Qq,
      f: () => Aq,
      i: () => Yq,
      m: () => xq,
      n: () => cq,
      o: () => uq,
      q: () => Hq,
      u: () => dq,
      w: () => tq
    });
    const Yq = qq => "dualShock4" === qq || "dualSense" === qq,
      lq = 1356,
      Oq = 1406,
      mq = [{
        vendorId: lq,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: lq,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: lq,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: lq,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: lq,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: Oq,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: Oq,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: Oq,
        productId: 8199,
        kind: "joyConRight"
      }],
      xq = mq.map((qq => {
        let {
          vendorId: Eq,
          productId: gq
        } = qq;
        return {
          vendorId: Eq,
          productId: gq
        }
      })),
      Aq = (qq, Eq) => {
        var gq, Yq;
        return null !== (gq = null === (Yq = mq.find((gq => gq.vendorId === qq && gq.productId === Eq))) || void 0 === Yq ? void 0 : Yq.kind) && void 0 !== gq ? gq : null
      },
      cq = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      uq = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      Bq = 2e3 / 32767,
      Wq = 1 / 8192,
      Nq = 936 / 13371,
      aq = (qq, Eq, gq) => ({
        x: qq.getInt16(Eq, !0) * gq,
        y: qq.getInt16(Eq + 2, !0) * gq,
        z: qq.getInt16(Eq + 4, !0) * gq
      }),
      Vq = qq => 0 === qq.x && 0 === qq.y && 0 === qq.z,
      dq = (qq, Eq, gq) => null === Eq ? null : "dualShock4" === qq ? 16 * (gq - Eq & 65535) / 3 / 1e6 : (gq - Eq >>> 0) / 3 / 1e6,
      jq = (qq, Eq) => "joyConRight" === Eq ? {
        x: qq.y,
        y: -qq.z,
        z: -qq.x
      } : {
        x: -qq.y,
        y: qq.z,
        z: -qq.x
      },
      Hq = (qq, Eq, gq, lq) => Yq(qq) ? ((qq, Eq, gq, Yq) => {
        const lq = ((qq, Eq, gq) => "dualShock4" === qq ? 1 === Eq && gq >= 63 ? 0 : 17 === Eq && gq >= 65 ? 2 : null : 1 === Eq && gq >= 62 ? 0 : 49 === Eq && gq >= 63 ? 1 : null)(qq, Eq, gq.byteLength);
        if (null === lq) return null;
        if (2976 === Yq && 1 === Eq && 0 !== (4 & gq.getUint8(30))) return null;
        const Oq = lq + ("dualShock4" === qq ? 12 : 15),
          mq = aq(gq, Oq, Bq),
          xq = aq(gq, Oq + 6, Wq);
        return Vq(mq) && Vq(xq) ? null : {
          readings: [{
            gyro: mq,
            accel: xq
          }],
          dtSec: null,
          sensorClock: "dualShock4" === qq ? gq.getUint16(lq + 9, !0) : gq.getUint32(lq + 27, !0)
        }
      })(qq, Eq, gq, lq) : ((qq, Eq, gq) => {
        if (48 !== Eq && 49 !== Eq || gq.byteLength < 48) return null;
        const Yq = [];
        for (let lq = 0; lq < 3; lq++) {
          const Eq = aq(gq, 12 + 12 * lq, 244e-6),
            Oq = aq(gq, 18 + 12 * lq, Nq);
          if (Vq(Oq) && Vq(Eq)) return null;
          Yq.push({
            gyro: jq(Oq, qq),
            accel: jq(Eq, qq)
          })
        }
        return {
          readings: Yq,
          dtSec: .005,
          sensorClock: null
        }
      })(qq, Eq, gq),
      oq = 1,
      Pq = [0, 1, 64, 64, 0, 1, 64, 64],
      Qq = (qq, Eq, gq) => new Uint8Array([15 & qq, ...Pq, Eq, ...gq]),
      yq = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      tq = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8120: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => bq,
      h: () => Sq,
      i: () => jq,
      k: () => Nq.c,
      n: () => fq,
      q: () => Zq,
      r: () => Hq,
      t: () => Mq,
      w: () => Nq.m,
      y: () => Nq.q,
      B: () => pq,
      D: () => Nq.r,
      E: () => rq
    });
    var Yq = gq(57),
      lq = gq(24),
      Oq = gq(31),
      mq = gq(1416),
      xq = gq(1274),
      Aq = gq(8090),
      cq = gq(8123),
      uq = gq(8064),
      Bq = gq(8057),
      Wq = gq(8130),
      Nq = gq(1367),
      aq = gq(8061),
      Vq = gq(8586),
      dq = gq(4207);
    const jq = qq => !qq.repeat && !(0, Vq.b)(qq.key),
      Hq = "PadHidesCursor";
    let oq = !1;
    const Pq = qq => {
        qq !== oq && (oq = qq, document.documentElement.classList.toggle(Hq, qq))
      },
      Qq = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(qq) {
          let Eq = !1,
            gq = !1;
          qq.values.forEach(((qq, Yq) => {
            const lq = qq >= (this.buttonsDown[Yq] ? aq.U : aq.R);
            lq && !this.buttonsDown[Yq] && (Eq = !0, gq = !0), this.buttonsDown[Yq] = lq
          }));
          return [qq.leftStick, qq.rightStick].forEach(((qq, Yq) => {
            const lq = this.stickAnchors[Yq];
            Math.hypot(qq.x, qq.y) < (lq ? aq.U : .3) ? this.stickAnchors[Yq] = null : (!lq || Math.hypot(qq.x - lq.x, qq.y - lq.y) >= .3) && (this.stickAnchors[Yq] = {
              x: qq.x,
              y: qq.y
            }, Eq = !0, gq ||= !lq)
          })), Eq && (this.lastActivityMs = qq.timestampMs), this.onlyMovedOn = Eq && !gq, Eq
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(qq) {
          return !(qq - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((qq => qq)) || this.stickAnchors.some((qq => null !== qq)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((qq => null !== qq))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let yq = null,
      tq = !1;
    const rq = () => tq;
    let vq = null,
      hq = !1,
      nq = null;
    const bq = () => nq;
    let iq = !1;
    const Zq = qq => {
        if (!Qq.observe(qq)) return !1;
        if (iq && Qq.wasOnlyMoveOn() && !(0, Nq.c)()) return !1;
        iq = !1, tq = !1;
        const Eq = !(0, Nq.c)();
        return Eq && (yq = qq, nq = !oq && hq && vq ? {
          ...vq
        } : null), hq = !1, (0, Nq.m)("gamepad"), Pq(!0), (0, Wq.r)((0, Aq.k)()), Eq
      },
      fq = qq => !(0, Nq.c)() || qq === yq,
      Mq = () => {
        Qq.reset()
      },
      Tq = () => {
        const qq = lq.b.get("activeInputDevice"),
          Eq = "gamepad" === qq ? Bq.h.getActivePad() : null;
        return {
          device: qq,
          inGame: (0, xq.p)(),
          padMovesMouse: null !== Eq && (0, uq.e)(Eq.id)
        }
      },
      zq = qq => {
        document.pointerLockElement ? vq = null : (vq ??= {
          x: 0,
          y: 0
        }, vq.x = qq.clientX, vq.y = qq.clientY)
      },
      Sq = () => {
        const qq = new dq.c,
          Eq = Eq => {
            qq.reset(), iq = !1, (0, Nq.m)(Eq)
          },
          gq = qq => {
            if (qq.isTrusted) {
              if (qq instanceof KeyboardEvent) {
                if ((0, Nq.i)(qq), !jq(qq)) return;
                tq = !0
              }
              if (qq instanceof PointerEvent && "touch" === qq.pointerType) return vq = null, void Eq("touch");
              qq instanceof PointerEvent && (zq(qq), hq = !0), ("pointerdown" !== qq.type || (qq => {
                let {
                  device: Eq,
                  inGame: gq,
                  padMovesMouse: Yq
                } = qq;
                return !("gamepad" === Eq && Yq && gq)
              })(Tq())) && Eq("keyboardMouse")
            }
          },
          Yq = qq => {
            qq.isTrusted && (vq = null, Eq("touch"))
          },
          mq = qq => {
            qq.isTrusted && "touch" !== qq.pointerType && !qq.relatedTarget && (vq = null)
          },
          xq = gq => {
            if (!gq.isTrusted || "touch" === gq.pointerType) return;
            zq(gq);
            const Yq = gq.movementX || 0,
              Oq = gq.movementY || 0;
            if (0 === Yq && 0 === Oq) return;
            if (hq = !0, Pq(!1), "keyboardMouse" === lq.b.get("activeInputDevice")) return;
            const mq = Qq.isHolding(gq.timeStamp),
              xq = Tq(),
              Aq = (qq => {
                let {
                  device: Eq,
                  inGame: gq,
                  padMovesMouse: Yq,
                  padHolding: lq
                } = qq;
                return ("gamepad" !== Eq || !Yq) && "keyboardMouse" !== Eq && (gq || !lq)
              })({
                ...xq,
                inGame: xq.inGame && (0, cq.d)(),
                padHolding: mq
              });
            Aq && qq.add(Yq, Oq, gq.timeStamp) && (Eq("keyboardMouse"), iq = Qq.isStickOffRest())
          },
          Aq = qq => {
            Pq("gamepad" === qq)
          },
          uq = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", gq, uq), window.addEventListener("pointerdown", gq, uq), window.addEventListener("wheel", gq, uq), window.addEventListener("touchstart", Yq, uq), window.addEventListener("pointermove", xq, uq), window.addEventListener("pointerout", mq, uq);
        const Bq = Oq.i.subscribe("appManagerUpdated|activeInputDevice", Aq);
        return Aq(lq.b.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", gq, uq), window.removeEventListener("pointerdown", gq, uq), window.removeEventListener("wheel", gq, uq), window.removeEventListener("touchstart", Yq, uq), window.removeEventListener("pointermove", xq, uq), window.removeEventListener("pointerout", mq, uq), vq = null, Oq.i.unsubscribe(Bq), Pq(!1)
        }
      },
      pq = () => {
        const [qq, Eq] = (0, Yq.useState)(Aq.k);
        return (0, mq.f)(Aq.c, (() => {
          Eq((0, Aq.k)())
        })), (0, mq.f)(Bq.d, (() => {
          Eq((0, Aq.k)())
        })), qq
      }
  },
  8095: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq,
      f: () => lq
    });
    const Yq = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      lq = qq => Yq.includes(qq)
  },
  8123: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => cq,
      d: () => uq,
      g: () => Aq,
      i: () => xq
    });
    var Yq = gq(24),
      lq = gq(1622),
      Oq = gq(1716);
    const mq = new Map,
      xq = (qq, Eq) => (mq.has(qq) && console.warn(`Gameplay blocker "${qq}" registered twice; the newer one replaces it.`), mq.set(qq, Eq), () => {
        mq.get(qq) === Eq && mq.delete(qq)
      }),
      Aq = () => (0, Oq.b)(document.activeElement),
      cq = function() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [Eq, gq] of mq)
          if (!qq.includes(Eq) && gq()) return Eq;
        return null
      },
      uq = function() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === Yq.b.get("gameState") && (!(0, lq.p)() && (!Aq() && null === cq(qq)))
      }
  },
  8061: (qq, Eq, gq) => {
    gq.d(Eq, {
      $: () => Yq,
      A: () => Bq,
      C: () => oq,
      F: () => iq,
      H: () => Pq,
      J: () => jq,
      K: () => dq,
      N: () => cq,
      R: () => Wq,
      U: () => Nq,
      X: () => lq,
      ab: () => yq,
      c: () => fq,
      d: () => bq,
      eb: () => nq,
      f: () => uq,
      ib: () => Zq,
      j: () => Aq,
      kb: () => Qq,
      m: () => xq,
      p: () => rq,
      t: () => Hq,
      x: () => tq,
      y: () => Oq
    });
    const Yq = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      lq = Yq.length,
      Oq = function() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(lq).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: qq
        }
      },
      mq = Object.fromEntries(Yq.map(((qq, Eq) => [qq, Eq]))),
      xq = qq => mq[qq],
      Aq = function(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const Yq = Math.hypot(qq.x, qq.y);
        if (Yq <= Eq) return {
          x: 0,
          y: 0
        };
        const lq = Math.min(1, (Yq - Eq) / Math.max(1e-4, gq - Eq));
        return {
          x: qq.x / Yq * lq,
          y: qq.y / Yq * lq
        }
      },
      cq = ["exponential", "linear", "boost"],
      uq = (qq, Eq) => {
        const gq = Math.hypot(qq.x, qq.y);
        if (0 === gq) return {
          x: 0,
          y: 0
        };
        const Yq = ((qq, Eq) => {
          const gq = Math.max(0, Math.min(1, qq));
          return "linear" === Eq ? gq : gq * gq
        })(gq, Eq);
        return {
          x: qq.x / gq * Yq,
          y: qq.y / gq * Yq
        }
      },
      Bq = .5,
      Wq = .3,
      Nq = .2,
      aq = xq("LT"),
      Vq = xq("RT"),
      dq = qq => qq === aq || qq === Vq,
      jq = (qq, Eq) => {
        const gq = xq(Eq);
        return dq(gq) ? qq[gq] > .35 : qq[gq] >= Bq
      },
      Hq = (qq, Eq) => qq.map(((qq, gq) => dq(gq) ? Eq[gq] ? qq > .35 : qq >= .55 : qq >= Bq)),
      oq = ["Up", "Down", "Left", "Right"],
      Pq = qq => oq.includes(qq),
      Qq = function(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(qq.x, qq.y) < Eq ? null : Math.abs(qq.x) > Math.abs(qq.y) ? qq.x > 0 ? "Right" : "Left" : qq.y > 0 ? "Down" : "Up"
      },
      yq = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      tq = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      rq = ["default", "slow", "off"],
      vq = 800,
      hq = 250,
      nq = (qq, Eq) => "off" === Eq ? null : "slow" === Eq ? {
        initialDelayMs: Math.max(qq.initialDelayMs, vq),
        intervalMs: Math.max(qq.intervalMs, hq)
      } : qq;
    class bq {
      constructor(qq) {
        this.readTiming = qq, this.Fc = !1, this.timing = null, this.nextFireMs = 0
      }
      update(qq, Eq) {
        return qq ? this.Fc ? !!(this.timing && Eq >= this.nextFireMs) && (this.nextFireMs = Eq + this.timing.intervalMs, !0) : (this.Fc = !0, this.timing = this.readTiming(), this.nextFireMs = Eq + (null !== (gq = null === (Yq = this.timing) || void 0 === Yq ? void 0 : Yq.initialDelayMs) && void 0 !== gq ? gq : 0), !0) : (this.Fc = !1, !1);
        var gq, Yq
      }
      reset() {
        this.Fc = !1
      }
    }
    const iq = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      Zq = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class fq {
      constructor(qq) {
        this.timer = qq, this.direction = null
      }
      update(qq, Eq) {
        return qq !== this.direction && (this.timer.reset(), this.direction = qq), this.timer.update(null !== qq, Eq) ? qq : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8646: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq,
      g: () => Oq
    });
    let Yq = -1 / 0;
    const lq = () => {
        Yq = performance.now()
      },
      Oq = qq => performance.now() - Yq < qq
  },
  8594: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq,
      e: () => Oq
    });
    var Yq = gq(8090),
      lq = gq(8061);
    const Oq = qq => (0, lq.eb)(qq, (0, Yq.i)().buttonRepeat),
      mq = qq => new lq.d((() => Oq(qq)))
  },
  8110: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Aq,
      d: () => Oq,
      f: () => xq
    });
    var Yq = gq(31),
      lq = gq(8090);
    const Oq = (qq, Eq) => "OpenShop" === qq ? "shop" === Eq : "OpenLobbyLeaderboard" !== qq || "leaderboard" === Eq;
    let mq = !1;
    const xq = qq => {
        qq !== mq && (mq = qq, Yq.i.TV(lq.c, (0, lq.i)()))
      },
      Aq = () => ((qq, Eq) => "shop" === qq && Eq ? "shop" : "leaderboard")((0, lq.i)().leaderboardButton, mq)
  },
  8104: (qq, Eq, gq) => {
    gq.d(Eq, {
      $: () => hq,
      Bb: () => zq,
      C: () => Aq,
      Cb: () => rq,
      F: () => xq,
      J: () => Qq,
      K: () => Wq,
      O: () => Nq,
      P: () => Bq,
      S: () => Pq,
      T: () => cq,
      X: () => jq,
      d: () => Tq,
      db: () => oq,
      h: () => Sq,
      hb: () => Vq,
      kb: () => dq,
      l: () => nq,
      n: () => mq,
      nb: () => aq,
      ob: () => Hq,
      r: () => vq,
      rb: () => Zq,
      t: () => tq,
      vb: () => Oq,
      w: () => fq,
      x: () => Mq,
      yb: () => yq,
      z: () => uq
    });
    var Yq = gq(8081),
      lq = gq(8061);
    const Oq = {
        min: 25,
        max: 500,
        step: 5
      },
      mq = {
        min: 25,
        max: 100,
        step: 5
      },
      xq = {
        min: 0,
        max: .4,
        step: .01
      },
      Aq = {
        min: 25,
        max: 300,
        step: 5
      },
      cq = {
        min: .5,
        max: 6,
        step: .1
      },
      uq = (qq, Eq) => {
        if (!Number.isFinite(qq)) return Eq.min;
        const gq = Eq.min + Math.round((qq - Eq.min) / Eq.step) * Eq.step,
          Yq = Math.min(Eq.max, Math.max(Eq.min, gq));
        return Math.round(1e3 * Yq) / 1e3
      },
      Bq = qq => `${Math.round(qq)}%`,
      Wq = qq => Bq(100 * qq),
      Nq = qq => `${qq.toFixed(1)}\xd7`,
      aq = [{
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
      Vq = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      dq = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      jq = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      Hq = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      oq = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      Pq = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      Qq = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      yq = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      tq = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      rq = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      vq = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      hq = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      nq = {
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
      bq = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      iq = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      Zq = Yq.b.map((qq => {
        let {
          group: Eq,
          actions: gq
        } = qq;
        const Yq = gq.map((qq => ({
          kind: "action",
          action: qq
        })));
        return {
          titleKey: bq[Eq],
          rows: "gameplay" === Eq ? [...iq, ...Yq] : Yq
        }
      })),
      fq = lq.$.filter((qq => "Home" !== qq)),
      Mq = 1e4;
    class Tq {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = qq, this.openButton = Eq, this.accepts = gq, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(qq, Eq) {
        var gq;
        this.updateIgnored(qq, Eq);
        const Yq = Eq - (null !== (gq = this.startMs) && void 0 !== gq ? gq : Eq) >= 250;
        for (const lq of fq)
          if (lq !== this.cancelButton && Yq && !this.ignoredUntilMs.has(lq) && qq.wasPressed(lq) && this.accepts(lq)) return {
            kind: "bind",
            button: lq
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (qq.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = Eq
        }
        return null === this.cancelDownAtMs ? null : qq.isHeld(this.cancelButton) && Eq - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : qq.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(qq) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (qq - this.cancelDownAtMs) / 700)
      }
      updateIgnored(qq, Eq) {
        if (null === this.startMs) {
          this.startMs = Eq;
          for (const Eq of fq) qq.isDown(Eq) && this.ignoredUntilMs.set(Eq, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, Eq + 250)
        }
        for (const [gq, Yq] of this.ignoredUntilMs) {
          const lq = qq.isDown(gq);
          Yq === 1 / 0 ? lq || gq !== this.openButton ? lq || this.ignoredUntilMs.delete(gq) : this.ignoredUntilMs.set(gq, Eq + 250) : Eq >= Yq ? this.ignoredUntilMs.delete(gq) : lq && this.ignoredUntilMs.set(gq, 1 / 0)
        }
      }
    }
    const zq = 6e3;
    class Sq {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(qq, Eq) {
        let {
          pressed: gq,
          Fc: Yq
        } = qq;
        if (gq) {
          const qq = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== qq && Eq - qq < 1500 ? [...this.pressesAtMs, Eq] : [Eq], this.pressesAtMs.length >= 3) return 1
        }
        return Yq ? (this.downAtMs ??= Eq, Math.min(1, (Eq - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  4866: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq,
      i: () => mq
    });
    var Yq = gq(57);
    const lq = new WeakMap,
      Oq = qq => {
        var Eq;
        const gq = qq.closest("[data-pad-slider]");
        return gq && null !== (Eq = lq.get(gq)) && void 0 !== Eq ? Eq : null
      },
      mq = (qq, Eq) => {
        const gq = (0, Yq.useRef)(Eq);
        gq.current = Eq, (0, Yq.useEffect)((() => {
          if (qq.current) return ((qq, Eq) => (lq.set(qq, Eq), () => {
            lq.get(qq) === Eq && lq.delete(qq)
          }))(qq.current, {
            adjust: qq => {
              gq.current.adjust(qq)
            },
            setFraction: qq => {
              gq.current.setFraction(qq)
            },
            endDrag: () => {
              gq.current.endDrag()
            }
          })
        }), [qq])
      }
  },
  8678: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq,
      f: () => lq
    });
    var Yq = gq(31);
    const lq = "localBlockBroken";

    function Oq() {
      return {
        onPlayerChangeBlock(qq, Eq, gq, Oq, mq, xq) {
          "Air" === xq && Yq.i.TV(lq)
        }
      }
    }
  },
  8138: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8146: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8152: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8154: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8156: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8161: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8163: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8169: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8174: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8179: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8183: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8189: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8198: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8202: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8206: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8212: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8221: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8227: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8229: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8238: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8246: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8251: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8258: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8267: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8274: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8282: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8286: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8293: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8297: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8305: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8312: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8320: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8325: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8329: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8333: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8339: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8348: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8354: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8362: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8370: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8377: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8386: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8392: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8399: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8401: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8408: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8414: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8423: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8426: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8432: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8436: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8444: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8451: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8460: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8463: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8471: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8475: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8481: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8484: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8490: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8497: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8499: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8502: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8505: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8511: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8516: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8525: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8532: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8540: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8544: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8551: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8557: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8564: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8572: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8576: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8581: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);
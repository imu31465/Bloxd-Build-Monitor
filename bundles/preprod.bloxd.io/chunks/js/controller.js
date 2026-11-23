export const id = 28;
export const ids = [28];
export const modules = {
  8232: (CC, zC, ZC) => {
    var QC = {
      "./nintendo/A.svg": 8238,
      "./nintendo/B.svg": 8242,
      "./nintendo/Down.svg": 8244,
      "./nintendo/Home.svg": 8251,
      "./nintendo/LB.svg": 8255,
      "./nintendo/LS.svg": 8258,
      "./nintendo/LT.svg": 8265,
      "./nintendo/Left.svg": 8269,
      "./nintendo/LeftStick.svg": 8273,
      "./nintendo/Menu.svg": 8275,
      "./nintendo/RB.svg": 8284,
      "./nintendo/RS.svg": 8287,
      "./nintendo/RT.svg": 8295,
      "./nintendo/Right.svg": 8298,
      "./nintendo/RightStick.svg": 8304,
      "./nintendo/Up.svg": 8308,
      "./nintendo/View.svg": 8316,
      "./nintendo/X.svg": 8323,
      "./nintendo/Y.svg": 8332,
      "./playstation/A.svg": 8340,
      "./playstation/B.svg": 8349,
      "./playstation/Down.svg": 8354,
      "./playstation/Home.svg": 8358,
      "./playstation/LB.svg": 8367,
      "./playstation/LS.svg": 8370,
      "./playstation/LT.svg": 8378,
      "./playstation/Left.svg": 8386,
      "./playstation/LeftStick.svg": 8390,
      "./playstation/Menu.svg": 8395,
      "./playstation/RB.svg": 8402,
      "./playstation/RS.svg": 8404,
      "./playstation/RT.svg": 8409,
      "./playstation/Right.svg": 8415,
      "./playstation/RightStick.svg": 8417,
      "./playstation/Up.svg": 8421,
      "./playstation/View.svg": 8426,
      "./playstation/X.svg": 8431,
      "./playstation/Y.svg": 8436,
      "./steamdeck/A.svg": 8443,
      "./steamdeck/B.svg": 8450,
      "./steamdeck/Down.svg": 8453,
      "./steamdeck/Home.svg": 8457,
      "./steamdeck/LB.svg": 8460,
      "./steamdeck/LS.svg": 8464,
      "./steamdeck/LT.svg": 8468,
      "./steamdeck/Left.svg": 8477,
      "./steamdeck/LeftStick.svg": 8483,
      "./steamdeck/Menu.svg": 8488,
      "./steamdeck/RB.svg": 8495,
      "./steamdeck/RS.svg": 8503,
      "./steamdeck/RT.svg": 8507,
      "./steamdeck/Right.svg": 8516,
      "./steamdeck/RightStick.svg": 8520,
      "./steamdeck/Up.svg": 8525,
      "./steamdeck/View.svg": 8531,
      "./steamdeck/X.svg": 8539,
      "./steamdeck/Y.svg": 8547,
      "./xbox/A.svg": 8553,
      "./xbox/B.svg": 8556,
      "./xbox/Down.svg": 8564,
      "./xbox/Home.svg": 8573,
      "./xbox/LB.svg": 8581,
      "./xbox/LS.svg": 8587,
      "./xbox/LT.svg": 8592,
      "./xbox/Left.svg": 8596,
      "./xbox/LeftStick.svg": 8599,
      "./xbox/Menu.svg": 8608,
      "./xbox/RB.svg": 8610,
      "./xbox/RS.svg": 8618,
      "./xbox/RT.svg": 8621,
      "./xbox/Right.svg": 8625,
      "./xbox/RightStick.svg": 8628,
      "./xbox/Up.svg": 8636,
      "./xbox/View.svg": 8641,
      "./xbox/X.svg": 8645,
      "./xbox/Y.svg": 8649
    };

    function wC(CC) {
      var zC = bC(CC);
      return ZC(zC)
    }

    function bC(CC) {
      if (!ZC.o(QC, CC)) {
        var zC = new Error("Cannot find module '" + CC + "'");
        throw zC.code = "MODULE_NOT_FOUND", zC
      }
      return QC[CC]
    }
    wC.keys = function() {
      return Object.keys(QC)
    }, wC.resolve = bC, CC.exports = wC, wC.id = 8232
  },
  8799: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => dC,
      g: () => eC,
      h: () => hC
    });
    var QC = ZC(48),
      wC = ZC(4479),
      bC = ZC(1076),
      nC = ZC(1383),
      fC = ZC(28),
      oC = ZC(3407),
      qC = ZC(2173),
      FC = ZC(1183),
      WC = ZC(2534),
      NC = ZC(1840),
      MC = ZC(1877),
      gC = ZC(1143),
      SC = ZC(20),
      pC = ZC(1557),
      PC = ZC(1002),
      GC = ZC.n(PC),
      RC = ZC(8801),
      AC = ZC(8803),
      xC = ZC(8807),
      JC = ZC(8729),
      IC = ZC(8812),
      iC = (ZC(8815), ZC(1056));
    let vC = null;

    function eC() {
      return null !== vC
    }

    function hC() {
      return "pad" === vC
    }

    function KC() {
      return "inGame" === SC.b.get("gameState") && !(0, pC.s)()
    }

    function YC(CC) {
      return (0, AC.r)(CC, FC.r, AC.f, AC.h, AC.j)
    }
    const dC = (0, QC.memo)((function() {
      const {
        t: CC
      } = (0, gC.y)(), {
        userContext: zC
      } = (0, bC.e)(), [ZC, SC] = (0, QC.useState)(null), [PC, eC] = (0, QC.useState)(null), hC = (0, QC.useRef)(null), dC = (0, QC.useCallback)((CC => {
        hC.current = CC, eC(CC)
      }), []), mC = (0, QC.useRef)(0), HC = (0, QC.useRef)(null), EC = (0, QC.useRef)({
        x: 0,
        y: 0
      }), [lC, XC] = (0, QC.useState)(0), cC = (0, QC.useMemo)((() => function(CC) {
        const zC = [];
        for (let QC = 0; QC < FC.r; QC++) {
          var ZC;
          zC.push(null !== (ZC = CC[QC]) && void 0 !== ZC ? ZC : null)
        }
        return zC
      }((0, WC.h)(zC.getPlayerCosmetics().emote))), [zC, lC]);
      (0, MC.b)("cosmeticsUpdated", (CC => {
        CC.some((CC => CC.local && "emote" === CC.JQ)) && XC((CC => CC + 1))
      }));
      const uC = (0, QC.useRef)(!1),
        rC = (0, QC.useCallback)((function(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === CC && (0, xC.d)(), uC.current = zC, EC.current = {
            x: 0,
            y: 0
          }, dC(null), SC(CC)
        }), [dC]),
        sC = (0, QC.useCallback)((() => {
          SC(null), dC(null), EC.current = {
            x: 0,
            y: 0
          }
        }), [dC]),
        TC = (0, QC.useCallback)((CC => {
          if (Date.now() < mC.current) return;
          const zC = (0, qC.h)(CC),
            ZC = !!zC.holdUntilMove,
            QC = ZC ? 600 : Math.ceil(1e3 * zC.animation.animation_length / qC.d) + 200;
          mC.current = Date.now() + QC, HC.current = CC, NC.gameBridge.send("playEmote", CC), NC.gameBridge.send("applyTemporaryThirdPerson", ZC ? {} : {
            durationMs: QC
          })
        }), []);
      (0, nC.c)("requestToggleEmoteWheel", (() => {
        null === ZC ? KC() && rC("click") : sC()
      })), (0, nC.c)("requestEmoteWheelHoldOpen", (() => {
        null === ZC && KC() && rC((0, RC.d)() ? "hold" : "click")
      })), (0, nC.c)("requestEmoteWheelPadOpen", (CC => {
        null !== ZC || !KC() || (0, JC.d)() || (0, IC.u)() || rC("pad", CC)
      })), (0, nC.c)("requestEmoteRepeatLast", (() => {
        if (null !== ZC || !KC() || (0, JC.d)() || (0, IC.u)()) return;
        const CC = HC.current;
        null !== CC && cC.includes(CC) ? TC(CC) : rC("pad", !0)
      }));
      const aC = () => {
        const CC = hC.current,
          zC = null !== CC ? cC[CC] : null;
        null !== zC && "pad" === ZC && Date.now() < mC.current || (sC(), null !== zC && TC(zC))
      };
      (0, nC.c)("emoteWheelPadAim", (CC => {
        if ("pad" !== ZC) return;
        const zC = (0, AC.y)(CC, FC.r, hC.current);
        dC(null !== zC && null !== cC[zC] ? zC : null)
      })), (0, nC.c)("requestEmoteWheelPadCommit", (CC => {
        "pad" !== ZC || CC && uC.current || aC()
      })), (0, nC.c)("appManagerUpdated|activeInputDevice", (CC => {
        null !== ZC && "pad" === ZC !== ("gamepad" === CC) && sC()
      })), (0, QC.useLayoutEffect)((() => (vC = ZC, (0, oC.t)("emoteWheel", "pad" === ZC), fC.o.bp(oC.n), () => {
        vC = null, (0, oC.t)("emoteWheel", !1), fC.o.bp(oC.n)
      })), [ZC]), (0, nC.c)("requestEmoteWheelHoldRelease", (() => {
        "hold" === ZC && aC()
      })), (0, nC.c)("requestEmoteWheelClose", (() => {
        null !== ZC && sC()
      })), (0, nC.c)("appManagerUpdated|gameState", (CC => {
        "inGame" !== CC && sC()
      }));
      const tC = () => {
        (0, pC.s)() && sC()
      };
      if ((0, nC.c)("appManagerUpdated|openEverythingMenuName", tC), (0, nC.c)("appManagerUpdated|openInGameMenuName", tC), (0, nC.c)("pointerLockUpdate", (CC => {
          CC || "hold" !== ZC || sC()
        })), (0, QC.useEffect)((() => {
          if (null === ZC) return;
          const CC = CC => {
            "Escape" === CC.key && (CC.stopImmediatePropagation(), CC.preventDefault(), sC())
          };
          return document.addEventListener("keydown", CC, !0), () => {
            document.removeEventListener("keydown", CC, !0)
          }
        }), [ZC, sC]), (0, wC.b)(!0, "click" === ZC, "EmoteWheelOverlay"), (0, QC.useEffect)((() => {
          if ("hold" === ZC) return NC.gameBridge.send("holdEmoteWheel", !0), () => {
            NC.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [ZC]), (0, QC.useEffect)((() => {
          if ("hold" !== ZC) return;
          const CC = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            zC = AC.n * CC,
            QC = AC.l * CC,
            wC = CC => {
              let ZC = EC.current.x + CC.movementX,
                wC = EC.current.y + CC.movementY;
              const bC = Math.hypot(ZC, wC);
              if (bC > zC) {
                const CC = zC / bC;
                ZC *= CC, wC *= CC
              }
              EC.current = {
                x: ZC,
                y: wC
              }, dC(function(CC, zC, ZC, QC) {
                if (Math.hypot(CC, zC) < ZC) return null;
                const wC = (0, AC.t)(CC, zC, FC.r);
                return null === QC[wC] ? null : wC
              }(ZC, wC, QC, cC))
            };
          return document.addEventListener("mousemove", wC), () => {
            document.removeEventListener("mousemove", wC)
          }
        }), [ZC, cC, dC]), null === ZC) return null;
      const DC = "hold" === ZC || "pad" === ZC,
        jC = null !== PC ? cC[PC] : null,
        yC = null !== jC ? (0, qC.h)(jC).displayName : CC("emotes:pickEmote");
      return (0, iC.jsx)("div", {
        className: GC()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === ZC
        }),
        onMouseDown: CC => {
          CC.target === CC.currentTarget && sC()
        },
        children: (0, iC.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * AC.n + "rem",
            height: 2 * AC.n + "rem"
          },
          children: [(0, iC.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${AC.k} ${AC.k}`,
            children: [cC.map(((zC, ZC) => {
              const QC = null !== zC,
                wC = DC && ZC === PC;
              return (0, iC.jsx)("path", {
                d: YC(ZC),
                className: GC()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: wC,
                  EmoteWheelWedgeDisabled: !QC
                }),
                onClick: CC => {
                  CC.stopPropagation(), null !== zC && (CC => {
                    sC(), TC(CC)
                  })(zC)
                },
                "aria-label": null !== zC ? (0, qC.h)(zC).displayName : CC("emotes:emptySlot")
              }, ZC)
            })), (0, iC.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: AC.f,
              cy: AC.f,
              r: AC.j
            }), (0, iC.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: AC.f,
              cy: AC.f,
              r: AC.h
            }), DC && null !== PC && (0, iC.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: YC(PC)
            })]
          }), cC.map(((CC, zC) => {
            const ZC = null !== CC,
              QC = DC && zC === PC,
              wC = (0, AC.u)(zC, FC.r),
              bC = AC.c * Math.cos(wC),
              nC = AC.c * Math.sin(wC);
            return (0, iC.jsx)("div", {
              className: GC()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: QC,
                EmoteWheelSlotIconDisabled: !ZC
              }),
              style: {
                left: `calc(50% + ${bC}rem)`,
                top: `calc(50% + ${nC}rem)`,
                backgroundImage: ZC ? `url(/textures/charSkins/previews/emote_${CC}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, zC)
          })), (0, iC.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: yC
          })]
        })
      })
    }))
  },
  4942: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => gC,
      e: () => RC,
      f: () => SC,
      h: () => GC
    });
    var QC = ZC(48),
      wC = ZC(4947),
      bC = ZC(4300),
      nC = ZC(1321),
      fC = ZC(4971),
      oC = ZC(1002),
      qC = ZC.n(oC),
      FC = ZC(1307),
      WC = ZC(1645),
      NC = ZC(4979),
      MC = ZC(1056);

    function gC(CC) {
      let {
        label: zC,
        onClick: ZC,
        checked: QC,
        circleInfoText: wC,
        className: fC,
        disabled: oC,
        note: FC
      } = CC;
      return (0, MC.jsxs)("div", {
        "aria-disabled": oC || void 0,
        "data-pad-focusable": !0,
        className: qC()("SettingBox CheckboxContainer", {
          [fC]: fC,
          SettingBoxDisabled: oC
        }),
        onClick: () => {
          oC || ZC(!QC)
        },
        children: [(0, MC.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, MC.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, MC.jsx)(bC.e, {
              className: "SettingsCheckbox",
              checked: QC,
              disabled: oC,
              onChange: () => {}
            })
          }), (0, MC.jsxs)("div", {
            className: "CheckboxText",
            children: [zC, wC && (0, MC.jsx)("span", {
              onClick: CC => CC.stopPropagation(),
              children: (0, MC.jsx)(nC.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: wC
              })
            })]
          })]
        }), FC && (0, MC.jsx)("div", {
          className: "SettingNote",
          children: FC
        })]
      })
    }

    function SC(CC) {
      let {
        name: zC,
        onChange: ZC,
        min: wC,
        max: bC,
        step: fC,
        initValue: oC,
        circleInfoText: FC,
        format: WC,
        className: NC,
        padStep: gC,
        disabled: SC = !1,
        selectableMax: pC,
        cappedNote: GC,
        onChangeComplete: RC
      } = CC;
      const [AC, xC] = (0, QC.useState)(oC), JC = (0, QC.useRef)(oC);
      (0, QC.useEffect)((() => {
        JC.current = oC, xC(oC)
      }), [oC]);
      const IC = void 0 !== pC && pC < bC,
        iC = IC ? {
          "--slider-selectable": (pC - wC) / (bC - wC)
        } : void 0;
      return (0, MC.jsxs)("div", {
        className: qC()("SettingBox SettingsSliderDiv", {
          [NC]: NC,
          SettingBoxDisabled: SC,
          SliderCapped: IC
        }),
        style: iC,
        children: [(0, MC.jsxs)("div", {
          className: "SliderText",
          children: [`${zC}: ${WC?WC(AC):AC}`, FC && (0, MC.jsx)(nC.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: FC
          })]
        }), (0, MC.jsx)("div", {
          className: "SliderDiv",
          children: (0, MC.jsx)(PC, {
            value: AC,
            min: wC,
            max: bC,
            step: fC,
            onChange: CC => {
              if (IC && CC >= pC && AC === pC) return;
              const zC = IC ? Math.min(CC, pC) : CC;
              JC.current = zC, xC(zC), ZC(zC)
            },
            onChangeComplete: RC && (() => {
              RC(JC.current)
            }),
            format: WC,
            padStep: gC,
            disabled: SC
          })
        }), IC && GC && (0, MC.jsx)("div", {
          className: "SettingNote",
          children: GC
        })]
      })
    }
    const pC = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function PC(CC) {
      var zC;
      let {
        value: ZC,
        min: bC,
        max: nC,
        step: fC,
        onChange: oC,
        orientation: qC,
        reverse: FC,
        setIsChanging: WC,
        tooltip: gC,
        labels: SC,
        handleLabel: PC,
        format: GC,
        onChangeStart: RC,
        onChangeComplete: AC,
        padStep: xC,
        disabled: JC = !1
      } = CC;
      const IC = (0, QC.useRef)(null),
        iC = (0, QC.useRef)(null);
      (0, QC.useLayoutEffect)((() => {
        var CC, zC, ZC;
        const QC = null !== (CC = null === (zC = IC.current) || void 0 === zC ? void 0 : zC.querySelector(".rangeslider")) && void 0 !== CC ? CC : null;
        null === QC || void 0 === QC || QC.setAttribute("data-pad-slider", ""), null === QC || void 0 === QC || QC.setAttribute("data-pad-focusable", ""), null === QC || void 0 === QC || null === (ZC = QC.querySelector(".rangeslider__handle")) || void 0 === ZC || ZC.setAttribute("data-pad-slider-handle", ""), iC.current = QC
      }), []), (0, QC.useLayoutEffect)((() => {
        var CC, zC;
        JC ? null === (CC = iC.current) || void 0 === CC || CC.setAttribute("aria-disabled", "true") : null === (zC = iC.current) || void 0 === zC || zC.removeAttribute("aria-disabled")
      }), [JC]);
      const vC = (null !== (zC = String(fC).split(".")[1]) && void 0 !== zC ? zC : "").length,
        eC = CC => {
          const zC = Number((Math.round((CC - bC) / fC) * fC + bC).toFixed(vC));
          return Math.min(nC, Math.max(bC, zC))
        },
        hC = (0, QC.useRef)(AC);
      hC.current = AC, (0, QC.useEffect)((() => {
        const CC = IC.current;
        if (!CC) return;
        const zC = CC => {
          var zC;
          pC.has(CC.key) && (null === (zC = hC.current) || void 0 === zC || zC.call(hC))
        };
        return CC.addEventListener("keyup", zC), () => {
          CC.removeEventListener("keyup", zC)
        }
      }), []);
      const KC = (0, QC.useRef)(!1);
      return (0, NC.g)(iC, {
        adjust: CC => {
          if (JC) return;
          const zC = null !== xC && void 0 !== xC ? xC : Math.max(fC, Math.round((nC - bC) / 20 / fC) * fC),
            QC = eC(ZC + CC * zC * (FC ? -1 : 1));
          QC !== ZC && (null === RC || void 0 === RC || RC(), oC(QC), null === AC || void 0 === AC || AC())
        },
        setFraction: CC => {
          if (JC) return;
          const zC = eC(bC + (FC ? 1 - CC : CC) * (nC - bC));
          zC !== ZC && (KC.current || (KC.current = !0, null === RC || void 0 === RC || RC()), oC(zC))
        },
        endDrag: () => {
          KC.current && (KC.current = !1, null === AC || void 0 === AC || AC())
        }
      }), (0, MC.jsx)("div", {
        ref: IC,
        style: {
          display: "contents"
        },
        children: (0, MC.jsx)(wC.b, {
          value: ZC,
          min: bC,
          max: nC,
          step: fC,
          onChange: oC,
          orientation: qC,
          reverse: FC,
          tooltip: gC,
          labels: SC,
          handleLabel: PC,
          format: GC,
          onChangeStart: () => {
            null === RC || void 0 === RC || RC(), null === WC || void 0 === WC || WC(!0)
          },
          onChangeComplete: () => {
            null === WC || void 0 === WC || WC(!1), null === AC || void 0 === AC || AC()
          }
        })
      })
    }
    async function GC() {
      const CC = FC.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await CC.getResult() && (0, WC.reloadBloxd)()
    }

    function RC(CC) {
      let {
        label: zC,
        options: ZC,
        value: QC,
        onChange: wC,
        circleInfoText: bC
      } = CC;
      return (0, MC.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, MC.jsxs)("div", {
          className: "SliderText",
          children: [zC, bC && (0, MC.jsx)(nC.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: bC
          })]
        }), (0, MC.jsx)(fC.b, {
          ariaLabel: zC,
          options: ZC,
          value: QC,
          onChange: wC
        })]
      })
    }
  },
  4971: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => nC
    });
    var QC = ZC(1002),
      wC = ZC.n(QC),
      bC = ZC(1056);

    function nC(CC) {
      let {
        options: zC,
        value: ZC,
        onChange: QC,
        ariaLabel: nC,
        className: fC,
        reselectable: oC = !1,
        keepsFocus: qC = !1,
        padTabs: FC
      } = CC;
      const WC = void 0 !== FC;
      return (0, bC.jsx)("div", {
        className: wC()("SegmentedToggle", fC),
        role: "group",
        "aria-label": nC,
        "data-pad-tabs": FC,
        children: zC.map((CC => {
          const zC = CC.value === ZC;
          return (0, bC.jsx)("button", {
            type: "button",
            "aria-pressed": zC,
            "data-pad-tab": WC || void 0,
            "data-pad-selected": WC && zC ? "true" : void 0,
            "data-pad-default-focus": WC && zC || void 0,
            "aria-label": CC.ariaLabel,
            title: CC.ariaLabel,
            className: wC()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: zC
            }),
            onMouseDown: qC ? CC => {
              CC.preventDefault()
            } : void 0,
            onClick: () => {
              zC && !oC || QC(CC.value)
            },
            children: CC.label
          }, CC.value)
        }))
      })
    }
  },
  8785: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => WC,
      h: () => gC,
      l: () => SC,
      m: () => MC,
      o: () => NC
    });
    var QC = ZC(48),
      wC = ZC(8792),
      bC = ZC(28),
      nC = ZC(1840),
      fC = ZC(38),
      oC = ZC(1209),
      qC = ZC(1865);
    const FC = 50;
    const WC = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = CC => {
          if (0 === this.listeners.size) {
            var zC, ZC;
            this.state = {
              ...this.state,
              channel: null !== (zC = null === (ZC = qC.e.get("chatChannels")) || void 0 === ZC ? void 0 : ZC[0]) && void 0 !== zC ? zC : null
            };
            const CC = bC.o.subscribe("reportPlayer", (CC => {
              let {
                playerEId: zC
              } = CC;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, zC]
              })
            }));
            this.stopListening = [nC.gameBridge.subscribe("chatReceived", (CC => {
              let {
                serverChatMsgId: zC,
                content: ZC,
                author: QC
              } = CC;
              this.addMessage(zC, ZC, QC)
            })), () => {
              bC.o.unsubscribe(CC)
            }, qC.e.subscribe("chatChannels", (CC => {
              var zC;
              this.setState({
                ...this.state,
                channel: null !== (zC = null === CC || void 0 === CC ? void 0 : CC[0]) && void 0 !== zC ? zC : null
              })
            }))]
          }
          return this.listeners.add(CC), () => {
            if (this.listeners.delete(CC), 0 === this.listeners.size) {
              for (const CC of this.stopListening) CC();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const QC = {
          serverChatMsgId: CC,
          content: zC,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: ZC
        };
        this.setState({
          ...this.state,
          messages: [QC, ...this.state.messages].slice(0, wC.i)
        })
      }
      selectNextChannel() {
        const CC = qC.e.get("chatChannels");
        if (CC) {
          const zC = CC.findIndex((CC => {
            var zC;
            return CC.channelName === (null === (zC = this.state.channel) || void 0 === zC ? void 0 : zC.channelName)
          }));
          this.setState({
            ...this.state,
            channel: CC[(zC + 1) % CC.length]
          })
        }
      }
      setState(CC) {
        this.state = CC;
        for (const zC of this.listeners) zC()
      }
    };

    function NC() {
      const [CC, zC] = (0, QC.useState)(WC.getState);
      return (0, QC.useEffect)((() => {
        const CC = WC.subscribe((() => {
          zC(WC.getState())
        }));
        return zC(WC.getState()), CC
      }), []), CC
    }

    function MC(CC) {
      var zC, ZC;
      if (CC.startsWith("/report")) {
        var QC;
        const zC = null !== (QC = CC.replace("/report", "").trim().split(" ")[0]) && void 0 !== QC ? QC : "";
        if ("" === zC) return void WC.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const ZC = nC.gameBridge.latest("players"),
          wC = nC.gameBridge.latest("hiddenPlayerNames"),
          fC = CC => {
            var QC, bC;
            const nC = null !== (QC = null === (bC = ZC.byId[CC]) || void 0 === bC ? void 0 : bC.name) && void 0 !== QC ? QC : null;
            return null !== nC && (nC === zC || (0, oC.e)(nC, wC) === zC)
          };
        if (null !== ZC.localId && fC(ZC.localId)) return void WC.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const CC of ZC.ids)
          if (fC(CC)) return bC.o.bp("OpenReportMenu", {
            playerEId: CC,
            playerName: ZC.byId[CC].name,
            cq: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        WC.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      nC.gameBridge.send("sendChatMessage", {
          cq: CC,
          channelName: null !== (zC = null === (ZC = WC.getState().channel) || void 0 === ZC ? void 0 : ZC.channelName) && void 0 !== zC ? zC : null
        }),
        function(CC) {
          var zC;
          const ZC = null !== (zC = fC.i.getItem("recentlySentChatMsgs")) && void 0 !== zC ? zC : [];
          ZC.push(CC), ZC.length > FC && ZC.shift();
          fC.i.setItem("recentlySentChatMsgs", ZC)
        }(CC)
    }

    function gC() {
      var CC;
      return null !== (CC = fC.i.getItem("recentlySentChatMsgs")) && void 0 !== CC ? CC : []
    }

    function SC(CC) {
      var zC;
      let ZC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const QC = null !== (zC = fC.i.getItem("recentlySentChatMsgs")) && void 0 !== zC ? zC : [],
        wC = QC.length + 1,
        bC = ZC ? (CC % wC + wC) % wC : Math.min(QC.length, Math.max(0, CC));
      return {
        stepsBack: bC,
        text: 0 === bC ? "" : QC[QC.length - bC]
      }
    }
  },
  8753: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC,
      d: () => bC
    });
    var QC = ZC(1894);
    const wC = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      bC = CC => "string" === typeof CC.icon && "" !== CC.icon && "string" === typeof CC.keycode && wC.test(CC.keycode),
      nC = CC => "Space" === CC ? "_" : QC.l[CC]
  },
  8801: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC
    });
    var QC = ZC(20);

    function wC() {
      return !QC.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8803: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      f: () => fC,
      h: () => qC,
      j: () => oC,
      k: () => nC,
      l: () => wC,
      n: () => QC,
      r: () => gC,
      t: () => WC,
      u: () => FC,
      w: () => NC,
      y: () => MC
    });
    const QC = 14,
      wC = 6,
      bC = (QC + wC) / 2,
      nC = 200,
      fC = nC / 2,
      oC = nC / 2 - 1,
      qC = wC / QC * (nC / 2),
      FC = (CC, zC) => -Math.PI / 2 + 2 * CC * Math.PI / zC,
      WC = (CC, zC, ZC) => {
        const QC = 2 * Math.PI / ZC;
        return (Math.round((Math.atan2(zC, CC) + Math.PI / 2) / QC) % ZC + ZC) % ZC
      },
      NC = .5,
      MC = (CC, zC, ZC) => Math.hypot(CC.x, CC.y) < NC ? ZC : WC(CC.x, CC.y, zC),
      gC = (CC, zC, ZC, QC, wC) => {
        const bC = Math.PI / zC,
          nC = FC(CC, zC),
          fC = nC - bC,
          oC = nC + bC,
          qC = (CC, zC) => `${ZC+CC*Math.cos(zC)} ${ZC+CC*Math.sin(zC)}`;
        return [`M ${qC(QC,fC)}`, `L ${qC(wC,fC)}`, `A ${wC} ${wC} 0 0 1 ${qC(wC,oC)}`, `L ${qC(QC,oC)}`, `A ${QC} ${QC} 0 0 0 ${qC(QC,fC)}`, "Z"].join(" ")
      }
  },
  8838: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC
    });
    var QC = ZC(48),
      wC = ZC(8774),
      bC = ZC(2369);

    function nC() {
      const CC = (0, bC.h)("shopInfo"),
        [, zC] = (0, QC.useReducer)((CC => CC + 1), 0);
      return (0, bC.e)("shopInfo", zC), !(0, wC.d)(CC)
    }
  },
  8180: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC,
      f: () => bC,
      h: () => NC,
      k: () => WC,
      m: () => qC,
      o: () => fC,
      q: () => QC,
      r: () => MC,
      u: () => gC
    });
    const QC = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      wC = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: QC
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      bC = {
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
      nC = ["pickBlock", "perspective"],
      fC = CC => nC.includes(CC) ? nC : [CC],
      oC = Object.fromEntries(wC.flatMap((CC => {
        let {
          group: zC,
          actions: ZC
        } = CC;
        return ZC.map((CC => [CC, zC]))
      }))),
      qC = CC => oC[CC],
      FC = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      WC = CC => {
        var zC;
        return [qC(CC), ...null !== (zC = FC[CC]) && void 0 !== zC ? zC : []]
      },
      NC = new Set(["menu", "inventory", "keyboard"]),
      MC = {
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
      gC = new Set(["forward", "backward", "left", "right"])
  },
  8174: (CC, zC, ZC) => {
    ZC.d(zC, {
      B: () => eC,
      C: () => FC,
      G: () => vC,
      J: () => YC,
      d: () => GC,
      h: () => xC,
      i: () => NC,
      j: () => MC,
      l: () => mC,
      o: () => KC,
      s: () => hC,
      t: () => AC,
      u: () => dC,
      x: () => iC,
      z: () => RC
    });
    var QC = ZC(8180),
      wC = ZC(8184),
      bC = ZC(8167),
      nC = ZC(8203);
    const fC = CC => "pickBlock" === CC ? "perspective" : CC,
      oC = (CC, zC) => {
        var ZC;
        const wC = fC(zC);
        return null !== (ZC = CC[wC]) && void 0 !== ZC ? ZC : QC.f[wC]
      },
      qC = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((CC => {
        let [zC, ZC] = CC;
        return [
          [zC, ZC],
          [ZC, zC]
        ]
      }))),
      FC = (CC, zC) => null !== CC && void 0 !== CC ? CC : "nintendo" === zC,
      WC = CC => FC((0, wC.k)().swapConfirmBack, (0, wC.l)()) && qC.get(CC) || CC,
      NC = CC => oC((0, wC.k)().bindings, WC(CC)),
      MC = CC => QC.f[WC(CC)],
      gC = Object.keys(QC.f),
      SC = CC => "gameplay" === (0, QC.m)(CC) ? ["gameplay"] : (0, QC.k)(CC),
      pC = (CC, zC) => {
        const ZC = SC(zC);
        return SC(CC).some((CC => ZC.includes(CC)))
      },
      PC = (CC, zC, ZC) => {
        const wC = oC(CC, zC),
          nC = new Set((0, QC.o)(zC)),
          qC = [...nC];
        for (let QC = qC.pop(); QC; QC = qC.pop())
          for (const zC of gC) {
            const bC = oC(CC, zC);
            nC.has(zC) || bC !== ZC && bC !== wC || !pC(QC, zC) || (nC.add(zC), qC.push(zC))
          }
        const FC = {
          ...CC
        };
        for (const WC of nC) {
          const zC = oC(CC, WC) === wC ? ZC : wC,
            nC = (0, QC.k)(WC).some((CC => QC.h.has(CC)));
          if ((0, bC.E)(zC) && nC) return null;
          FC[fC(WC)] = zC
        }
        for (const bC of Object.keys(FC)) FC[bC] === QC.f[bC] && delete FC[bC];
        return FC
      },
      GC = (CC, zC) => null !== PC((0, wC.k)().bindings, WC(CC), zC),
      RC = (CC, zC) => {
        if (NC(CC) === zC) return !0;
        const ZC = PC((0, wC.k)().bindings, WC(CC), zC);
        return !!ZC && ((0, wC.n)({
          bindings: ZC
        }), !0)
      },
      AC = (CC, zC) => {
        const ZC = (0, QC.o)(zC);
        return gC.filter((zC => fC(zC) === zC && !ZC.includes(zC) && oC(CC, WC(zC)) !== NC(zC)))
      },
      xC = ["southpaw", "triggersSwapped"],
      JC = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      IC = CC => Object.keys(JC[CC]),
      iC = (CC, zC) => "southpaw" === CC ? zC.swapSticks : IC(CC).every((ZC => oC(zC.bindings, ZC) === JC[CC][ZC])),
      vC = (CC, zC) => {
        const ZC = (0, wC.k)();
        let bC = ZC.bindings;
        for (const wC of IC(CC)) {
          const ZC = zC ? JC[CC][wC] : QC.f[wC];
          if (bC = PC(bC, wC, ZC), !bC) return !1
        }
        return (0, wC.n)({
          swapSticks: "southpaw" === CC ? zC : ZC.swapSticks,
          bindings: bC
        }), !0
      },
      eC = () => {
        (0, wC.n)({
          swapSticks: !1,
          bindings: {}
        })
      },
      hC = () => (0, wC.k)().swapSticks ? "RightStick" : "LeftStick",
      KC = () => (0, wC.k)().swapSticks ? "LeftStick" : "RightStick",
      YC = CC => (0, wC.k)().swapSticks && (0, bC.E)(CC),
      dC = CC => YC(CC) ? hC() : KC(),
      mC = CC => {
        if (QC.u.has(CC)) return hC();
        const zC = QC.r[CC];
        return zC && ("leaderboard" !== zC || (0, nC.d)(CC, (0, nC.b)())) ? NC(zC) : null
      }
  },
  8157: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      ControllerCategory: () => Jf,
      ControllerGlyph: () => xw,
      ControllerRoot: () => An,
      PadLobbyShortcuts: () => rn,
      PadSneakChip: () => Kn,
      PadTooltip: () => dn,
      attachPressToContinue: () => Ln,
      getBoundButton: () => FC.i,
      getControllerSettings: () => NC.k,
      getGlyphForNoaAction: () => FC.l,
      getInventoryCursorState: () => vf,
      getMenuShortcutButton: () => tZ,
      getPadGlyphIconName: () => vn,
      getPadGlyphIconUrl: () => en,
      getPadRepeatTiming: () => SC.f,
      handOverPadFocus: () => hf,
      hasActivePad: () => If,
      isPadSteppingSlots: () => ef
    });
    const QC = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var wC = ZC(1143),
      bC = ZC(1357),
      nC = ZC(8160),
      fC = ZC(60),
      oC = ZC(20),
      qC = ZC(28),
      FC = ZC(8174),
      WC = ZC(8208),
      NC = ZC(8184),
      MC = ZC(8215),
      gC = ZC(8167),
      SC = ZC(8659),
      pC = ZC(8664),
      PC = ZC(1584);
    const GC = (CC, zC, ZC) => Math.max(zC, Math.min(ZC, CC)),
      RC = CC => Math.min(CC.width, CC.height) / 720,
      AC = CC => Math.max(.15, CC);
    class xC {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(CC, zC) {
        const ZC = Math.hypot(CC.x, CC.y) >= (CC => Math.max(.3, CC))(zC);
        return this.locked ? (this.locked = ZC, !1) : ZC
      }
    }
    const JC = (CC, zC) => {
        const ZC = GC(zC.dtMs, 0, 100),
          QC = ZC / 1e3,
          wC = RC(zC.viewport) * (zC.cursorSpeedPercent / 100),
          bC = (0, gC.i)(zC.stick, AC(zC.moveDeadzone)),
          nC = Math.hypot(bC.x, bC.y),
          fC = ((CC, zC, ZC) => {
            if (zC < .3) return 0;
            const QC = ZC / 350;
            return zC >= .85 ? Math.min(1, CC + QC) : Math.max(0, CC - QC)
          })(CC.speedRamp, nC, ZC);
        let oC = CC.x,
          qC = CC.y;
        if (nC > 0) {
          const CC = .45 + .55 * fC,
            ZC = zC.context.overInteractive ? .45 : 1,
            FC = 1400 * (CC => {
              const zC = GC(CC, 0, 1);
              return .3 * zC + .7 * zC * zC
            })(nC) * wC * CC * ZC;
          oC += bC.x / nC * FC * QC, qC += bC.y / nC * FC * QC
        }
        const FC = Math.hypot(zC.dpad.x, zC.dpad.y);
        if (FC > 0) {
          const CC = 500 * wC;
          oC += zC.dpad.x / FC * CC * QC, qC += zC.dpad.y / FC * CC * QC
        }
        const WC = zC.context.magnetTarget;
        if (WC && nC < .3 && 0 === FC) {
          const CC = ((CC, zC, ZC, QC, wC) => {
            const bC = zC.x - CC.x,
              nC = zC.y - CC.y,
              fC = Math.hypot(bC, nC);
            if (0 === fC) return {
              x: 0,
              y: 0
            };
            const oC = Math.min(fC, wC * (1 - QC / .3));
            let qC = bC / fC * oC,
              FC = nC / fC * oC;
            if (QC > 0) {
              const CC = ZC.x / QC,
                zC = ZC.y / QC,
                wC = qC * CC + FC * zC;
              wC < 0 && (qC -= wC * CC, FC -= wC * zC)
            }
            return {
              x: qC,
              y: FC
            }
          })({
            x: oC,
            y: qC
          }, WC, bC, nC, 120 * RC(zC.viewport) * QC);
          oC += CC.x, qC += CC.y
        }
        return {
          x: GC(oC, 0, Math.max(0, zC.viewport.width - 1)),
          y: GC(qC, 0, Math.max(0, zC.viewport.height - 1)),
          speedRamp: fC
        }
      },
      IC = CC => {
        const zC = (0, gC.i)(CC, .2);
        return 0 !== zC.x || 0 !== zC.y
      },
      iC = (CC, zC) => {
        const ZC = (0, gC.i)(CC, .2),
          QC = Math.hypot(ZC.x, ZC.y);
        if (0 === QC) return {
          x: 0,
          y: 0
        };
        const wC = QC * QC * 1600,
          bC = GC(zC, 0, 100) / 1e3;
        return {
          x: ZC.x / QC * wC * bC,
          y: ZC.y / QC * wC * bC
        }
      },
      vC = (CC, zC) => "y" === zC ? CC.scrollHeight > CC.clientHeight + 1 : CC.scrollWidth > CC.clientWidth + 1,
      eC = (CC, zC) => {
        if (!vC(CC, zC)) return !1;
        const ZC = getComputedStyle(CC),
          QC = "y" === zC ? ZC.overflowY : ZC.overflowX;
        return "auto" === QC || "scroll" === QC
      },
      hC = (CC, zC, ZC) => {
        for (let bC = CC instanceof HTMLElement ? CC : null !== (QC = null === CC || void 0 === CC ? void 0 : CC.parentElement) && void 0 !== QC ? QC : null; bC; bC = bC.parentElement) {
          var QC;
          if (eC(bC, zC)) return bC;
          if (bC === ZC) return null
        }
        if (ZC) return null;
        const wC = document.scrollingElement;
        return wC instanceof HTMLElement && vC(wC, zC) ? wC : null
      },
      KC = new WeakMap,
      YC = (CC, zC) => {
        const ZC = performance.now(),
          QC = KC.get(CC);
        if (QC && QC.axis === zC && ZC - QC.atMs < 500 && (!QC.container || QC.container.isConnected)) return QC.container;
        const wC = dC(CC, zC);
        return KC.set(CC, {
          axis: zC,
          atMs: ZC,
          container: wC
        }), wC
      },
      dC = (CC, zC) => {
        let ZC = eC(CC, zC) ? CC : null,
          QC = ZC ? ZC.clientWidth * ZC.clientHeight : 0;
        for (const wC of CC.querySelectorAll("*")) {
          const CC = wC.clientWidth * wC.clientHeight;
          CC > QC && eC(wC, zC) && (ZC = wC, QC = CC)
        }
        return ZC
      },
      mC = (CC, zC, ZC) => "y" === zC ? ZC < 0 ? CC.scrollTop > 0 : CC.scrollTop + CC.clientHeight < CC.scrollHeight - 1 : ZC < 0 ? CC.scrollLeft > 0 : CC.scrollLeft + CC.clientWidth < CC.scrollWidth - 1,
      HC = (CC, zC, ZC) => {
        "y" === zC ? CC.scrollBy({
          top: ZC,
          behavior: "instant"
        }) : CC.scrollBy({
          left: ZC,
          behavior: "instant"
        })
      },
      EC = CC => {
        if (!CC || CC === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const zC = CC.getBoundingClientRect(),
          ZC = Math.max(0, zC.left),
          QC = Math.max(0, zC.top);
        return new DOMRect(ZC, QC, Math.min(window.innerWidth, zC.right) - ZC, Math.min(window.innerHeight, zC.bottom) - QC)
      },
      lC = (CC, zC) => CC.left < zC.right && zC.left < CC.right && CC.top < zC.bottom && zC.top < CC.bottom;
    var XC = ZC(48),
      cC = ZC(1002),
      uC = ZC.n(cC),
      rC = ZC(1056);
    let sC = 0,
      TC = !1;
    class aC {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(CC) {
        this.element = CC, this.shownKey = "", this.gap = null
      }
      show(CC) {
        const zC = this.element;
        if (!zC) return;
        const ZC = CC ? this.keepOnScreen(zC, CC) : null,
          QC = ZC ? `${ZC.left},${ZC.top},${ZC.width},${ZC.height}` : "";
        if (QC === this.shownKey) return;
        const wC = "" === this.shownKey;
        this.shownKey = QC, zC.classList.toggle("Visible", null !== ZC), ZC && (zC.classList.toggle("Snap", wC), zC.style.width = `${ZC.width}px`, zC.style.height = `${ZC.height}px`, zC.style.transform = `translate(${ZC.left}px, ${ZC.top}px)`, wC && (zC.offsetWidth, zC.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(CC, zC) {
        var ZC;
        const QC = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!TC){TC=!0;const CC=document.createElement("div");CC.setAttribute("aria-hidden","true"),CC.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(CC),new ResizeObserver((()=>{sC++})).observe(CC)}return String(sC)})()}`;
        (null === (ZC = this.gap) || void 0 === ZC ? void 0 : ZC.key) !== QC && (this.gap = {
          px: parseFloat(getComputedStyle(CC).paddingLeft) || 0,
          key: QC
        });
        const wC = this.gap.px + 2,
          bC = Math.max(zC.left, wC),
          nC = Math.max(zC.top, wC),
          fC = Math.min(zC.left + zC.width, window.innerWidth - wC),
          oC = Math.min(zC.top + zC.height, window.innerHeight - wC);
        return fC <= bC || oC <= nC ? zC : {
          left: bC,
          top: nC,
          width: fC - bC,
          height: oC - nC
        }
      }
    }
    const tC = CC => {
      let {
        placer: zC,
        className: ZC
      } = CC;
      const QC = (0, XC.useCallback)((CC => {
        zC.setElement(CC)
      }), [zC]);
      return (0, rC.jsx)("div", {
        ref: QC,
        className: uC()("PadReticle", ZC),
        "aria-hidden": !0
      })
    };
    var DC = ZC(8673);
    const jC = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const yC = new class {
      constructor() {
        this.state = jC, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(CC) {
        if (zC = this.state, ZC = CC, (zC.visible || ZC.visible) && (zC.visible !== ZC.visible || zC.x !== ZC.x || zC.y !== ZC.y || zC.pressed !== ZC.pressed)) {
          var zC, ZC;
          this.state = CC;
          for (const zC of this.listeners) zC(CC)
        }
      }
      hide() {
        this.set(jC)
      }
      subscribe(CC) {
        return this.listeners.add(CC), () => {
          this.listeners.delete(CC)
        }
      }
    };
    var LC = ZC(8685);
    const UC = (CC, zC) => {
        let {
          kind: ZC,
          holding: QC,
          hasPress: wC,
          hasBack: bC,
          slotHasItem: nC
        } = zC;
        switch (CC) {
          case "primary":
            return "slot" === ZC ? "slotPrimary" : "recipe" === ZC || "button" === ZC ? wC ? "pressPrimary" : "click" : "textField" === ZC ? "openKeyboard" : null;
          case "secondary":
            return "slot" === ZC ? "slotSecondary" : "button" !== ZC && "recipe" !== ZC || !wC ? null : "pressSecondary";
          case "quickMove":
            return "slot" === ZC && nC ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === ZC && nC && !QC ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return QC ? "cancel" : bC ? "pressBack" : "close"
        }
      },
      BC = CC => {
        const zC = [];
        if (CC.hotbarPicking) return zC.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), zC.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), zC;
        if (CC.holding) "slot" === CC.kind ? (zC.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), zC.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === CC.kind && zC.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), zC.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), zC.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), CC.openButtonCloses && zC.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var ZC;
          "slot" === CC.kind && CC.slotHasItem ? (zC.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), zC.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), zC.push({
            actions: ["inventoryQuickMove"],
            labelKey: CC.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), zC.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), zC.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== CC.kind && "recipe" !== CC.kind || !CC.pressHints ? "button" === CC.kind || "recipe" === CC.kind ? zC.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === CC.kind && zC.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (CC.pressHints.primary && zC.push({
            actions: ["inventoryPrimary"],
            labelKey: CC.pressHints.primary
          }), CC.pressHints.secondary && zC.push({
            actions: ["inventorySecondary"],
            labelKey: CC.pressHints.secondary
          }));
          const QC = null === (ZC = CC.pressHints) || void 0 === ZC ? void 0 : ZC.back;
          QC && zC.push({
            actions: ["inventoryClose"],
            labelKey: QC
          });
          const wC = [];
          CC.openButtonCloses && wC.push("inventory"), QC || wC.push("inventoryClose"), wC.length > 0 && zC.push({
            actions: wC,
            labelKey: "inventoryClose"
          })
        }
        return zC.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), CC.hasCategories ? zC.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : CC.hasList && zC.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), zC
      };
    var OC = ZC(8698),
      kC = ZC(8691);
    class VC {
      constructor(CC) {
        this.probes = CC, this.byContainer = new Map, this.byParent = new Map
      }
      find(CC, zC) {
        const ZC = hC(CC, "y", zC);
        if (!ZC) return null;
        let QC = this.byContainer.get(ZC);
        return QC || (this.probes.push({
          element: ZC,
          rect: Qz(ZC.getBoundingClientRect())
        }), QC = {
          container: ZC,
          box: EC(ZC),
          group: Zz(ZC)
        }, this.byContainer.set(ZC, QC)), QC
      }
      findForParent(CC, zC) {
        let ZC = this.byParent.get(CC);
        return void 0 === ZC && (ZC = this.find(CC, zC), this.byParent.set(CC, ZC)), ZC
      }
    }
    const Cz = new WeakMap;
    let zz = 0;
    const Zz = CC => {
        let zC = Cz.get(CC);
        return zC || (zC = "el:" + zz++, Cz.set(CC, zC)), zC
      },
      Qz = CC => ({
        left: CC.left,
        top: CC.top,
        width: CC.width,
        height: CC.height
      }),
      wz = CC => CC.width > 0 && CC.height > 0,
      bz = (CC, zC) => wz(CC) && CC.left + CC.width > 0 && CC.top + CC.height > 0 && CC.left < zC.width && CC.top < zC.height,
      nz = (CC, zC, ZC) => {
        const QC = CC.top + CC.height / 2;
        return bz(CC, zC) && (!ZC || QC >= ZC.top && QC <= ZC.bottom)
      },
      fz = CC => ({
        x: CC.left + CC.width / 2,
        y: CC.top + CC.height / 2
      }),
      oz = (CC, zC, ZC) => CC < 0 ? ZC >= 0 ? 0 : zC - 1 : ((CC + ZC) % zC + zC) % zC,
      qz = CC => "Left" === CC || "Right" === CC,
      Fz = (CC, zC, ZC) => {
        const QC = qz(ZC),
          wC = QC ? CC.top : CC.left,
          bC = QC ? CC.height : CC.width,
          nC = QC ? zC.top : zC.left,
          fC = QC ? zC.height : zC.width,
          oC = Math.max(0, Math.max(nC - (wC + bC), wC - (nC + fC)));
        return bC > 1.5 * fC ? {
          gap: oC,
          offset: Math.max(0, nC - wC) + .1 * Math.max(0, wC - nC)
        } : {
          gap: oC,
          offset: Math.abs(nC + fC / 2 - (wC + bC / 2))
        }
      },
      Wz = (CC, zC, ZC) => {
        const QC = ((CC, zC, ZC) => {
          const QC = fz(CC),
            wC = fz(zC),
            bC = qz(ZC) ? Math.min(CC.width, zC.width) / 4 : Math.min(CC.height, zC.height) / 4;
          switch (ZC) {
            case "Right":
              return wC.x - QC.x >= bC ? Math.max(0, zC.left - (CC.left + CC.width)) : null;
            case "Left":
              return QC.x - wC.x >= bC ? Math.max(0, CC.left - (zC.left + zC.width)) : null;
            case "Down":
              return wC.y - QC.y >= bC ? Math.max(0, zC.top - (CC.top + CC.height)) : null;
            case "Up":
              return QC.y - wC.y >= bC ? Math.max(0, CC.top - (zC.top + zC.height)) : null
          }
        })(CC, zC, ZC);
        if (null === QC) return null;
        const wC = Fz(CC, zC, ZC);
        return QC + 3 * wC.gap + .5 * wC.offset
      },
      Nz = (CC, zC) => zC.visible || null !== zC.scrollGroup && zC.scrollGroup === CC.scrollGroup,
      Mz = (CC, zC, ZC, QC) => {
        let wC = null,
          bC = 1 / 0;
        for (const nC of zC) {
          if (nC.key === CC.key || !Nz(CC, nC) || !QC(nC)) continue;
          const zC = Wz(CC.rect, nC.rect, ZC);
          null !== zC && zC < bC && (wC = nC, bC = zC)
        }
        return wC
      },
      gz = (CC, zC, ZC) => {
        const QC = Mz(CC, zC, ZC, (() => !0));
        if (!QC || qz(ZC) || null === CC.scrollGroup || QC.scrollGroup === CC.scrollGroup) return QC;
        const wC = Mz(CC, zC, ZC, (zC => 0 === Fz(CC.rect, zC.rect, ZC).gap));
        return null !== wC && void 0 !== wC ? wC : QC
      },
      Sz = (CC, zC, ZC) => {
        let QC = null,
          wC = 1 / 0;
        for (const bC of zC) {
          if (!bC.visible || ZC && !ZC(bC)) continue;
          const zC = fz(bC.rect),
            nC = Math.hypot(zC.x - CC.x, zC.y - CC.y);
          nC < wC && (QC = bC, wC = nC)
        }
        return QC
      },
      pz = CC => {
        const {
          rect: zC,
          clip: ZC
        } = CC;
        if (!ZC) return zC;
        const QC = Math.max(zC.left, ZC.left),
          wC = Math.max(zC.top, ZC.top);
        return {
          left: QC,
          top: wC,
          width: Math.min(zC.left + zC.width, ZC.left + ZC.width) - QC,
          height: Math.min(zC.top + zC.height, ZC.top + ZC.height) - wC
        }
      },
      Pz = (CC, zC) => zC.x >= CC.left && zC.x < CC.left + CC.width && zC.y >= CC.top && zC.y < CC.top + CC.height,
      Gz = (CC, zC) => {
        let ZC = null,
          QC = 1 / 0;
        for (const wC of zC) {
          const zC = pz(wC);
          (wC.visible || wC.clip) && Pz(zC, CC) && (zC.width * zC.height < QC && (ZC = wC, QC = zC.width * zC.height))
        }
        return ZC
      },
      Rz = CC => {
        let zC = null;
        for (const ZC of CC) {
          if (!ZC.visible) continue;
          if (!zC) {
            zC = ZC;
            continue
          }
          const CC = Math.min(zC.rect.height, ZC.rect.height) / 2,
            QC = ZC.rect.top - zC.rect.top;
          (QC < -CC || Math.abs(QC) <= CC && ZC.rect.left < zC.rect.left) && (zC = ZC)
        }
        return zC
      },
      Az = (CC, zC, ZC, QC, wC) => {
        const bC = wC % zC,
          nC = Math.floor(wC / zC);
        return {
          left: CC.left + bC * ZC,
          top: CC.top + nC * QC,
          width: CC.width,
          height: CC.height
        }
      },
      xz = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      Jz = ".LazyLoadedItemWrapper",
      Iz = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      iz = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      vz = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      ez = CC => CC.hasAttribute("data-inven-idx") ? "slot" : CC.hasAttribute("data-recipe-key") ? "recipe" : CC.hasAttribute("data-craft-ingredient") || (0, kC.p)(CC) ? "info" : (0, DC.I)(CC) ? "textField" : "button",
      hz = (CC, zC) => "slot" === zC ? Number(CC.getAttribute("data-inven-idx")) : null,
      Kz = CC => CC.matches(Jz) ? CC.querySelector(Iz) : CC,
      Yz = CC => {
        var zC, ZC;
        return {
          element: CC,
          recipe: null !== (zC = CC && (null === (ZC = Kz(CC)) || void 0 === ZC ? void 0 : ZC.getAttribute("data-recipe-key"))) && void 0 !== zC ? zC : null
        }
      },
      dz = CC => {
        const zC = Kz(CC);
        if (!zC) return {
          kind: "pending",
          idx: null
        };
        const ZC = ez(zC);
        return {
          kind: ZC,
          idx: hz(zC, ZC)
        }
      },
      mz = CC => {
        const zC = [];
        for (const [ZC, QC] of iz) {
          CC.matches(QC) && zC.push([ZC, CC]);
          for (const wC of CC.querySelectorAll(QC)) zC.push([ZC, wC])
        }
        return zC
      },
      Hz = (CC, zC) => {
        for (const [ZC, QC] of CC)
          if (QC.contains(zC)) return ZC;
        return "other"
      },
      Ez = (CC, zC, ZC, QC, wC, bC, nC, fC) => {
        var oC;
        const qC = CC.children,
          FC = Qz(qC[0].getBoundingClientRect()),
          WC = [{
            element: qC[0],
            rect: FC
          }];
        if (bC.push(WC[0]), 0 === FC.width || 0 === FC.height) return;
        let NC = 1;
        for (; NC < qC.length && Math.abs(qC[NC].getBoundingClientRect().top - FC.top) < 1;) NC++;
        const MC = CC => {
            const zC = {
              element: qC[CC],
              rect: Qz(qC[CC].getBoundingClientRect())
            };
            return bC.push(zC), WC.push(zC), zC.rect
          },
          gC = NC > 1 ? MC(1).left - FC.left : FC.width,
          SC = qC.length > NC ? MC(NC).top - FC.top : FC.height,
          pC = nC.find(CC, zC);
        let PC = null;
        if (pC) {
          var GC;
          const {
            container: CC,
            box: zC
          } = pC;
          PC = null !== (GC = fC.get(CC)) && void 0 !== GC ? GC : null, PC || (PC = {
            top: CC.scrollTop,
            left: CC.scrollLeft,
            box: zC,
            viewport: QC,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, fC.set(CC, PC)), PC.probes.push(...WC)
        }
        const RC = wC.length;
        for (let IC = 0; IC < qC.length; IC++) {
          var AC, xC, JC;
          const CC = qC[IC],
            zC = Az(FC, NC, gC, SC, IC),
            bC = CC.firstElementChild ? CC.querySelector(Iz) : null,
            nC = bC ? ez(bC) : "pending";
          wC.push({
            key: Zz(CC),
            rect: zC,
            panel: ZC,
            scrollGroup: null !== (AC = null === pC || void 0 === pC ? void 0 : pC.group) && void 0 !== AC ? AC : null,
            visible: nz(zC, QC, null === pC || void 0 === pC ? void 0 : pC.box),
            clip: null !== (xC = null === pC || void 0 === pC ? void 0 : pC.box) && void 0 !== xC ? xC : null,
            element: CC,
            kind: nC,
            idx: bC ? hz(bC, nC) : null,
            scrollContainer: null !== (JC = null === pC || void 0 === pC ? void 0 : pC.container) && void 0 !== JC ? JC : null
          })
        }
        null === (oC = PC) || void 0 === oC || oC.targets.push(...wC.slice(RC))
      },
      lz = CC => CC instanceof Element && null !== CC.closest(Jz),
      Xz = CC => null !== CC.scrollContainer && lz(CC.element);
    class cz {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(CC, zC, ZC, QC) {
        this.latched = {
          source: CC,
          focusKey: zC,
          sinceMs: ZC,
          hold: {
            id: ++this.presses,
            holdMs: QC
          }
        }
      }
      update(CC, zC, ZC) {
        const QC = this.latched;
        return QC ? CC && zC === QC.focusKey ? ZC - QC.sinceMs < QC.hold.holdMs ? null : (this.latched = null, QC.source) : (this.latched = null, null) : null
      }
      getHold() {
        var CC, zC;
        return null !== (CC = null === (zC = this.latched) || void 0 === zC ? void 0 : zC.hold) && void 0 !== CC ? CC : null
      }
      reset() {
        this.latched = null
      }
    }
    var uz = ZC(8700);
    const rz = {
        kind: "none"
      },
      sz = CC => ({
        x: CC.clientX,
        y: CC.clientY
      }),
      Tz = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class az {
      constructor() {
        this.hovered = rz, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(CC, zC, ZC, QC, wC) {
        const bC = null !== zC ? {
            kind: "slot",
            idx: zC
          } : ZC ? {
            kind: "element",
            element: ZC
          } : rz,
          nC = `${wC}|${Math.round(QC.clientX)},${Math.round(QC.clientY)}`,
          fC = (oC = this.hovered, qC = bC, "slot" === oC.kind && "slot" === qC.kind ? oC.idx === qC.idx : "element" === oC.kind && "element" === qC.kind ? oC.element === qC.element : oC.kind === qC.kind);
        var oC, qC;
        if (fC && nC === this.signature) return;
        const FC = !fC || wC !== this.holding || "" === this.signature;
        this.signature = nC, this.holding = wC, this.lastPoint = QC;
        const WC = this.hovered;
        if (this.hovered = bC, "slot" === bC.kind) return this.leaveElement(WC, null, QC), void(FC ? CC.hover(bC.idx, QC) : CC.moveTo(QC));
        if (fC) return void("element" === bC.kind ? (0, DC.p)(bC.element, bC.element, sz(QC)) : CC.hover(null, QC));
        CC.hover(null, QC);
        const NC = "element" === bC.kind ? bC.element : null;
        "element" === WC.kind ? (0, DC.p)(WC.element, NC, sz(QC)) : NC && (0, DC.p)(null, NC, sz(QC))
      }
      invalidate() {
        this.signature = ""
      }
      clear(CC) {
        const zC = this.hovered;
        this.hovered = rz, this.signature = "", "none" !== zC.kind && (this.leaveElement(zC, null, this.lastPoint), CC && "slot" === zC.kind && CC.hover(null, this.lastPoint))
      }
      leaveElement(CC, zC, ZC) {
        "element" === CC.kind && (0, DC.p)(CC.element, zC, sz(ZC))
      }
    }
    class tz {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(CC, zC) {
        IC(CC) && (this.lastTiltedMs = zC)
      }
      allowsClick(CC) {
        return CC - this.lastTiltedMs > 150
      }
    }
    class Dz {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(CC) {
        return 0 !== (0, gC.i)(CC, .2).y
      }
      step(CC, zC, ZC) {
        CC !== this.container && (this.container = CC, this.remainder = 0);
        const QC = iC(zC, ZC).y;
        if (0 === QC) return this.remainder = 0, !1;
        const wC = this.remainder + QC,
          bC = Math.trunc(wC);
        if (this.remainder = wC - bC, 0 === bC) return !1;
        const nC = CC.scrollTop;
        return CC.scrollTop = nC + bC, CC.scrollTop !== nC
      }
      current() {
        var CC;
        return null !== (CC = this.container) && void 0 !== CC && CC.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var jz = ZC(8704);
    const yz = "[data-pad-inventory-default]",
      Lz = ".HotBarGameItemsContainer .InvenItem.Selected",
      Uz = {
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
      Bz = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      Oz = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      kz = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      Vz = [...Oz, ...kz],
      CZ = () => {
        return CC = (0, FC.i)("inventory"), !Vz.map(FC.i).includes(CC) && !(0, gC.E)(CC);
        var CC
      },
      zZ = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      ZZ = (CC, zC) => {
        const ZC = !(null === zC || void 0 === zC || !zC.isHolding());
        return function(CC, zC) {
          const ZC = CC.find((CC => CC.visible && zC(CC)));
          if (ZC) return ZC;
          for (var QC = arguments.length, wC = new Array(QC > 2 ? QC - 2 : 0), bC = 2; bC < QC; bC++) wC[bC - 2] = arguments[bC];
          for (const nC of wC) {
            const zC = Rz(CC.filter(nC));
            if (zC) return zC
          }
          return Rz(CC)
        }(CC, (CC => {
          const {
            element: zC
          } = CC;
          return zC.matches(yz) || null !== zC.querySelector(yz) || zC.matches(Lz)
        }), (CC => "slot" === CC.kind ? ZC || null !== CC.idx && !(null === zC || void 0 === zC || !zC.hasItemAt(CC.idx)) : "recipe" === CC.kind || "pending" === CC.kind), (CC => "slot" === CC.kind || "button" === CC.kind))
      };
    class QZ {
      constructor() {
        this.set = null, this.observer = new MutationObserver((CC => {
          CC.some((CC => !lz(CC.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = CC => {
          this.scrolled(CC.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const CC = [],
              zC = [];
            let ZC = !1;
            const QC = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              wC = new Map,
              bC = new VC(zC);
            for (const WC of document.querySelectorAll(xz)) {
              const FC = mz(WC);
              ZC ||= null !== WC.querySelector(".CreativeCategoryTab");
              for (const ZC of WC.querySelectorAll(`${Jz}:first-child`)) {
                const nC = ZC.parentElement;
                Ez(nC, WC, Hz(FC, nC), QC, CC, zC, bC, wC)
              }
              for (const ZC of WC.querySelectorAll(Iz)) {
                var nC, fC, oC, qC;
                if (ZC.closest(Jz) || ZC.closest("[data-pad-ignore]")) continue;
                const NC = null === (nC = ZC.parentElement) || void 0 === nC ? void 0 : nC.closest(Iz);
                if (NC && WC.contains(NC)) continue;
                const MC = ez(ZC),
                  gC = hz(ZC, MC);
                if (-1 === gC) continue;
                const SC = Qz(ZC.getBoundingClientRect());
                zC.push({
                  element: ZC,
                  rect: SC
                });
                const pC = bC.findForParent(ZC.parentElement, WC),
                  PC = pC && !wC.has(pC.container) ? pC : null;
                (PC ? wz(SC) : bz(SC, QC)) && CC.push({
                  key: Zz(ZC),
                  rect: SC,
                  panel: Hz(FC, ZC),
                  scrollGroup: null !== (fC = null === PC || void 0 === PC ? void 0 : PC.group) && void 0 !== fC ? fC : null,
                  visible: nz(SC, QC, null === PC || void 0 === PC ? void 0 : PC.box),
                  clip: null !== (oC = null === PC || void 0 === PC ? void 0 : PC.box) && void 0 !== oC ? oC : null,
                  element: ZC,
                  kind: MC,
                  idx: gC,
                  scrollContainer: null !== (qC = null === PC || void 0 === PC ? void 0 : PC.container) && void 0 !== qC ? qC : null
                })
              }
            }
            for (const [WC, NC] of wC) NC.holdsOthers = zC.some((CC => CC.element !== WC && WC.contains(CC.element) && !CC.element.closest(Jz)));
            const FC = new Map;
            for (const WC of CC) FC.set(WC.element, WC);
            return {
              targets: CC,
              byElement: FC,
              hasCategories: ZC,
              probes: zC,
              scrollers: wC
            }
          })(), this.observer.disconnect();
          for (const CC of document.querySelectorAll(xz)) this.observer.observe(CC, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(CC) {
        !this.set || CC instanceof Element && ((CC, zC) => {
          const ZC = CC.scrollers.get(zC);
          if (!ZC || ZC.holdsOthers || zC.scrollLeft !== ZC.left) return !1;
          const QC = zC.scrollTop - ZC.top;
          if (0 === QC) return !0;
          ZC.top = zC.scrollTop;
          for (const wC of ZC.probes) wC.rect.top -= QC;
          for (const wC of ZC.targets) wC.rect.top -= QC, wC.visible = nz(wC.rect, ZC.viewport, ZC.box);
          return !0
        })(this.set, CC) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((CC => {
          return zC = CC.rect, ZC = CC.element.getBoundingClientRect(), !(zC.left === ZC.left && zC.top === ZC.top && zC.width === ZC.width && zC.height === ZC.height);
          var zC, ZC
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const wZ = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(gC.y.map((CC => [CC, (0, SC.d)(gC.C)]))), this.stickRepeat = new gC.c((0, SC.d)(gC.eb)), this.pageUpTimer = (0, SC.d)(gC.ab), this.pageDownTimer = (0, SC.d)(gC.ab), this.stickGate = new xC, this.pointer = null, this.activePress = null, this.dropLatch = new cz, this.scroller = new Dz, this.scrollStickClick = new tz, this.hover = new az, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new aC, this.targets = new QZ, this.hasCategories = !1, this.wasShowing = !1, this.state = uz.d, this.isActive = () => (0, OC.h)(), this.isShowing = () => "inventory" === WC.c.getActiveConsumerName() && (0, MC.k)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, OC.e)()), (0, OC.h)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var CC;
            this.reopenSlotIdx = null !== (CC = this.focused ? dz(this.focused).idx : null) && void 0 !== CC ? CC : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, OC.u)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = CC => {
            (0, fC.unstable_batchedUpdates)((() => {
              this.frame(CC)
            }))
          }, this.shouldBlockRealPointer = CC => CC.isTrusted && !(0, PC.v)(CC) && this.isShowing(), this.noteRealPointer = CC => {
            CC instanceof MouseEvent && CC.isTrusted && !(0, PC.v)(CC) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = CC.clientX, this.lastRealPointer.y = CC.clientY)
          }, this.wakePressActs = CC => {
            var zC;
            return CC === (0, FC.i)("inventoryClose") ? !(null !== (zC = (0, OC.e)()) && void 0 !== zC && zC.isHolding()) : !(CC !== (0, FC.i)("inventory") || !CZ()) || ((0, gC.E)(CC) ? this.isNavButton(CC) : kz.some((zC => (0, FC.i)(zC) === CC)))
          }
        }
        frame(CC) {
          var zC, ZC, QC, wC, bC;
          const nC = (0, OC.e)();
          if (!(0, MC.k)()) return void(this.wasShowing && (this.endInteraction(nC), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), CC.wokeDevice && this.focusWakePointer(!(null === nC || void 0 === nC || !nC.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, NC.k)().inventoryNavigation || this.pointer || this.engagePointer();
          const fC = performance.now();
          this.handleNavigation(CC, fC), this.handlePanels(CC), this.handlePaging(CC, fC), this.handleScroll(CC), this.handleButtons(CC, fC, nC), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const oC = this.ensureFocus(),
            qC = this.focusContext(nC);
          this.ring.show(oC);
          const WC = "slot" === qC.kind ? qC.idx : null,
            gC = null !== (zC = null === (ZC = qC.actionElement) || void 0 === ZC ? void 0 : ZC.querySelector(".DoCraftItem")) && void 0 !== zC ? zC : qC.actionElement;
          this.pointer ? (this.hover.sync(nC, WC, gC, ((CC, zC) => {
            const ZC = zC ? Tz() : 0;
            return {
              clientX: CC.x - ZC,
              clientY: CC.y - ZC
            }
          })(this.pointer, qC.holding), qC.holding), yC.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: CC.isHeld((0, FC.i)("inventoryPrimary"))
          })) : oC && this.focused && this.hover.sync(nC, WC, gC, ((CC, zC) => {
            if (!zC) return {
              clientX: CC.left + CC.width - 10,
              clientY: CC.top + CC.height / 2 - 10
            };
            const ZC = Tz();
            return {
              clientX: CC.left + CC.width / 2 - ZC,
              clientY: CC.top + CC.height / 2 - ZC
            }
          })(oC, qC.holding), qC.holding), this.publishState({
            showing: !0,
            kind: qC.kind,
            holding: qC.holding,
            slotHasItem: qC.slotHasItem,
            pressHints: null !== (QC = null === (wC = qC.press) || void 0 === wC ? void 0 : wC.hints) && void 0 !== QC ? QC : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && Xz(this.focusTarget),
            openButtonCloses: CZ(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === qC.kind && !(null === (bC = qC.actionElement) || void 0 === bC || !bC.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(CC) {
          var zC;
          const ZC = (0, MC.b)();
          if (!ZC) return;
          this.targets.revalidate();
          const QC = this.getTargets().targets;
          this.setFocus(null !== (zC = Gz(ZC, QC)) && void 0 !== zC ? zC : CC ? Sz(ZC, QC, (CC => {
            let {
              rect: zC
            } = CC;
            const QC = Math.max(zC.left - ZC.x, 0, ZC.x - (zC.left + zC.width)),
              wC = Math.max(zC.top - ZC.y, 0, ZC.y - (zC.top + zC.height));
            return Math.hypot(QC, wC) <= Math.min(zC.width, zC.height) / 2
          })) : null, !1), "cursor" === (0, NC.k)().inventoryNavigation && (this.pointer = {
            x: ZC.x,
            y: ZC.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const CC = this.lastRealPointer;
          if (!CC || "keyboardMouse" !== oC.b.get("activeInputDevice")) return;
          const zC = document.elementFromPoint(CC.x, CC.y);
          zC && (0, DC.p)(null, zC, CC)
        }
        endInteraction(CC) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const zC of this.dpadTimers.values()) zC.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(CC), this.ring.hide(), this.releasePointer(), this.publishState(uz.d)
        }
        getTargets() {
          const CC = this.targets.get();
          return this.hasCategories = CC.hasCategories, CC
        }
        currentTarget() {
          var CC;
          return this.focused && null !== (CC = this.getTargets().byElement.get(this.focused)) && void 0 !== CC ? CC : null
        }
        readFocusRect() {
          const CC = this.focused;
          if (null === CC || void 0 === CC || !CC.isConnected || !CC.closest(xz)) return null;
          const zC = CC.getBoundingClientRect();
          return zC.width > 0 && zC.height > 0 ? {
            left: zC.left,
            top: zC.top,
            width: zC.width,
            height: zC.height
          } : null
        }
        ensureFocus() {
          const CC = this.readFocusRect();
          if (CC || this.pointer) return CC;
          const {
            targets: zC,
            byElement: ZC
          } = this.getTargets();
          let QC = null,
            wC = !1;
          if (this.lastRect) QC = Sz(fz(this.lastRect), zC);
          else {
            var bC, nC;
            const CC = ((CC, zC) => {
                const ZC = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return ZC ? ZZ(CC.filter((CC => ZC.contains(CC.element))), zC) : null
              })(zC, (0, OC.e)()),
              fC = zC.find((CC => null !== CC.idx && CC.idx === this.reopenSlotIdx)),
              oC = document.querySelector(Lz);
            wC = null !== CC || void 0 !== fC, QC = null !== (bC = null !== (nC = null !== CC && void 0 !== CC ? CC : fC) && void 0 !== nC ? nC : oC && ZC.get(oC)) && void 0 !== bC ? bC : Rz(zC)
          }
          return this.setFocus(QC, wC), this.lastRect
        }
        setFocus(CC) {
          let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          CC && (this.focused = CC.element, this.focusTarget = CC, this.panelMemory.set(CC.panel, CC.element), zC && CC.scrollContainer && ((CC, zC) => {
            const ZC = CC.getBoundingClientRect(),
              QC = EC(zC),
              wC = zC.scrollTop;
            return ZC.top < QC.top ? zC.scrollTop -= QC.top - ZC.top : ZC.bottom > QC.bottom && (zC.scrollTop += ZC.bottom - QC.bottom), zC.scrollTop !== wC
          })(CC.element, CC.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, NC.k)().inventoryNavigation) {
              if (this.lastRect) {
                const CC = fz(this.lastRect);
                this.pointer = {
                  x: CC.x,
                  y: CC.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const CC = this.lastRect ? fz(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: CC.x,
            y: CC.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, yC.hide()
        }
        hoverAtPointer() {
          var CC;
          const zC = Gz(this.pointer, this.getTargets().targets);
          this.focusTarget = zC, (null === zC || void 0 === zC ? void 0 : zC.element) !== this.focused && (this.focused = null !== (CC = null === zC || void 0 === zC ? void 0 : zC.element) && void 0 !== CC ? CC : null, zC && (this.panelMemory.set(zC.panel, zC.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(CC, zC) {
          const ZC = this.focusTarget,
            QC = ZC && (0, NC.k)().cursorMagnetism ? fz(pz(ZC)) : null;
          this.pointer = JC(this.pointer, {
            stick: CC.leftStick,
            moveDeadzone: (0, NC.k)().moveDeadzone,
            dpad: zC,
            dtMs: CC.dtMs,
            cursorSpeedPercent: (0, NC.k)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: QC
            }
          })
        }
        move(CC) {
          this.targets.revalidate();
          const zC = this.currentTarget();
          zC && this.setFocus(gz(zC, this.getTargets().targets, CC))
        }
        step(CC) {
          const zC = this.pointer;
          if (zC && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((CC, zC, ZC) => {
            var QC;
            const wC = {
              key: "",
              rect: {
                left: CC.x,
                top: CC.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (QC = gz(wC, zC, ZC)) && void 0 !== QC ? QC : Sz(CC, zC)
          })(zC, this.getTargets().targets, CC));
          this.move(CC)
        }
        isNavButton(CC) {
          return !Oz.some((zC => (0, FC.i)(zC) === CC)) && !(CC === (0, FC.i)("inventory") && CZ())
        }
        handleNavigation(CC, zC) {
          const ZC = (0, NC.k)().inventoryNavigation,
            QC = {
              x: 0,
              y: 0
            };
          let wC = null;
          for (const oC of gC.y) {
            const bC = this.isNavButton(oC) && CC.isHeld(oC);
            bC && (QC.x += Uz[oC].x, QC.y += Uz[oC].y), this.dpadTimers.get(oC).update(bC, zC) && "cursor" !== ZC && (wC ??= oC)
          }
          const bC = this.stickGate.update(CC.leftStick, (0, NC.k)().moveDeadzone);
          if (wC && (this.step(wC), this.stickGate.lock()), "slot" !== ZC) {
            const zC = ((CC, zC, ZC, QC) => "hybrid" !== CC ? "cursor" === CC : !QC && (zC || ZC))(ZC, null !== this.pointer, bC, null !== wC);
            return zC && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(CC, "cursor" === ZC ? QC : {
              x: 0,
              y: 0
            }))
          }
          const nC = (0, gC.i)(CC.leftStick, (0, NC.k)().moveDeadzone),
            fC = this.stickRepeat.update(bC ? (0, gC.ib)(nC) : null, zC);
          fC && this.move(fC)
        }
        applyCategoryPlace() {
          const CC = this.placeAfterCategory;
          if (!CC) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const zC = Sz(fz(CC.rect), this.getTargets().targets, (zC => zC.scrollGroup === CC.scrollGroup));
          this.setFocus(zC, !1)
        }
        applyFocusRequest() {
          const CC = (0, OC.u)();
          CC && (this.targets.invalidate(), this.setFocus((0, OC.c)(this.getTargets().targets, CC)))
        }
        handlePanels(CC) {
          var zC, ZC, QC;
          const wC = CC.wasPressed((0, FC.i)("inventoryPanelPrevious")),
            bC = CC.wasPressed((0, FC.i)("inventoryPanelNext"));
          if (!wC && !bC) return;
          const {
            targets: nC
          } = this.getTargets(), fC = (oC = ((CC, zC) => {
            const ZC = [];
            for (const wC of CC) wC.visible && !ZC.includes(wC.panel) && ZC.push(wC.panel);
            const QC = CC => {
              const QC = zC.indexOf(CC);
              return -1 === QC ? zC.length + ZC.indexOf(CC) : QC
            };
            return ZC.sort(((CC, zC) => QC(CC) - QC(zC)))
          })(nC, vz), qC = null !== (zC = null === (ZC = this.focusTarget) || void 0 === ZC ? void 0 : ZC.panel) && void 0 !== zC ? zC : null, WC = bC ? 1 : -1, 0 === oC.length ? null : oC[oz(null === qC ? -1 : oC.indexOf(qC), oC.length, WC)]);
          var oC, qC, WC;
          if (null === fC) return;
          const NC = this.panelMemory.get(fC),
            MC = nC.filter((CC => CC.panel === fC)),
            gC = null !== (QC = MC.find((CC => CC.element === NC && CC.visible))) && void 0 !== QC ? QC : ZZ(MC, (0, OC.e)());
          this.setFocus(gC)
        }
        handlePaging(CC, zC) {
          const ZC = (0, FC.i)("menuPageUp"),
            QC = (0, FC.i)("menuPageDown"),
            wC = this.pageUpTimer.update(CC.isHeld(ZC), zC),
            bC = this.pageDownTimer.update(CC.isHeld(QC), zC);
          if (!wC && !bC) return;
          const nC = bC ? 1 : -1;
          if (!CC.wasPressed(bC ? QC : ZC) && this.hasCategories) return;
          if ((CC => {
              const zC = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === zC.length) return !1;
              const ZC = zC.findIndex((CC => CC.classList.contains("Selected"))),
                QC = zC[oz(ZC, zC.length, CC)];
              return (0, DC.m)(QC, (0, DC.A)(QC)), !0
            })(nC)) {
            var fC, oC;
            this.targets.invalidate();
            const CC = null !== (fC = null === (oC = this.focusTarget) || void 0 === oC ? void 0 : oC.scrollGroup) && void 0 !== fC ? fC : null,
              zC = this.readFocusRect();
            return void(this.placeAfterCategory = null !== CC && zC && !this.pointer ? {
              rect: zC,
              scrollGroup: CC
            } : null)
          }
          const {
            targets: qC
          } = this.getTargets(), WC = this.currentTarget(), NC = WC && Xz(WC) ? WC : qC.find((CC => Xz(CC) && CC.visible));
          if (!NC) return;
          const MC = ((CC, zC, ZC, QC) => {
            if (null === CC.scrollGroup) return null;
            const wC = fz(CC.rect),
              bC = wC.x,
              nC = wC.y + ("Down" === ZC ? QC : -QC);
            let fC = null,
              oC = 1 / 0;
            for (const qC of zC) {
              if (qC.scrollGroup !== CC.scrollGroup || qC.key === CC.key) continue;
              const zC = fz(qC.rect);
              if ("Down" === ZC ? zC.y <= wC.y : zC.y >= wC.y) continue;
              const QC = Math.hypot(zC.x - bC, zC.y - nC);
              QC < oC && (fC = qC, oC = QC)
            }
            return fC
          })(NC, qC, nC > 0 ? "Down" : "Up", NC.scrollContainer.clientHeight);
          this.setFocus(null !== MC && void 0 !== MC ? MC : NC)
        }
        handleScroll(CC) {
          var zC, ZC, QC, wC, bC, nC;
          if (!this.scroller.isScrolling(CC.rightStick)) return void this.scroller.reset();
          const {
            targets: fC
          } = this.getTargets(), oC = this.pointer, qC = !oC && this.focusTarget && Xz(this.focusTarget) ? this.focusTarget.scrollContainer : null, FC = oC && (null === (zC = fC.find((CC => CC.clip && Pz(CC.clip, oC)))) || void 0 === zC ? void 0 : zC.scrollContainer), WC = null !== (ZC = null !== (QC = null !== (wC = this.scroller.current()) && void 0 !== wC ? wC : FC) && void 0 !== QC ? QC : qC) && void 0 !== ZC ? ZC : null === (bC = fC.find(Xz)) || void 0 === bC ? void 0 : bC.scrollContainer;
          if (!WC || !this.scroller.step(WC, CC.rightStick, CC.dtMs)) return;
          this.targets.scrolled(WC);
          const NC = oC || (null === (nC = this.focusTarget) || void 0 === nC ? void 0 : nC.scrollContainer) !== WC ? null : this.readFocusRect();
          if (!NC) return;
          const MC = EC(WC),
            gC = fz(NC);
          if (gC.y < MC.top || gC.y > MC.bottom) {
            const CC = this.focusTarget.scrollGroup,
              zC = Sz(gC, this.getTargets().targets, (zC => zC.scrollGroup === CC));
            this.setFocus(zC, !1)
          }
        }
        focusContext(CC) {
          const {
            kind: zC,
            idx: ZC
          } = this.focused ? dz(this.focused) : {
            kind: null,
            idx: null
          }, QC = this.focused ? Kz(this.focused) : null, wC = QC ? (0, jz.d)(QC) : null;
          return {
            kind: zC,
            idx: ZC,
            actionElement: QC,
            press: wC,
            hasPress: null !== wC,
            hasBack: !(null === wC || void 0 === wC || !wC.back),
            holding: CC.isHolding(),
            slotHasItem: null !== ZC && CC.hasItemAt(ZC)
          }
        }
        handleButtons(CC, zC, ZC) {
          var QC, wC;
          if (!this.activePress || CC.isHeld(this.activePress.button) && (QC = this.activePress.target, wC = this.focused, null !== QC.recipe ? Yz(wC).recipe === QC.recipe : wC === QC.element) || this.releasePress(), this.scrollStickClick.update(CC.rightStick, zC), !this.handleHotbarPick(CC, ZC)) {
            for (const [QC, wC] of Bz) {
              const bC = (0, FC.i)(wC);
              if (!CC.wasPressed(bC) || "openButton" === QC && !CZ()) continue;
              if ("RS" === bC && !this.scrollStickClick.allowsClick(zC)) continue;
              const nC = this.focusContext(ZC),
                fC = UC(QC, nC);
              fC && this.runIntent(fC, nC, bC, ZC)
            }
            this.handleDrop(CC, zC, ZC)
          }
        }
        handleHotbarPick(CC, zC) {
          const ZC = this.hotbarPick;
          if (!ZC) return !1;
          const QC = CC.wasPressed((0, FC.i)("inventoryPrimary")) || CC.wasPressed((0, FC.i)("inventoryHotbarSwap"));
          if (!QC && !CC.wasPressed((0, FC.i)("inventoryClose")) && !zC.isHolding()) return !(CC.wasPressed((0, FC.i)("inventory")) && CZ());
          const wC = this.focusTarget;
          QC && "hotbar" === (null === wC || void 0 === wC ? void 0 : wC.panel) && null !== wC.idx && wC.idx !== ZC.idx && (zC.swapWithHotbar(wC.idx, ZC.idx), this.afterAction()), this.hotbarPick = null;
          const bC = ZC.element.isConnected ? this.getTargets().byElement.get(ZC.element) : void 0;
          return bC && this.setFocus(bC), !0
        }
        startHotbarPick(CC) {
          var zC;
          const {
            targets: ZC,
            byElement: QC
          } = this.getTargets(), wC = document.querySelector(Lz), bC = null !== (zC = wC && QC.get(wC)) && void 0 !== zC ? zC : ZC.find((CC => "hotbar" === CC.panel));
          bC && this.focused && (this.hotbarPick = {
            idx: CC,
            element: this.focused
          }, this.setFocus(bC))
        }
        focusKey() {
          return this.focused ? Zz(this.focused) : null
        }
        handleDrop(CC, zC, ZC) {
          const QC = (0, FC.i)("inventoryDrop");
          if (CC.wasPressed(QC)) {
            const CC = (wC = this.focusContext(ZC)).holding ? {
              kind: "vq"
            } : "slot" === wC.kind && wC.slotHasItem && null !== wC.idx ? {
              kind: "slot",
              idx: wC.idx
            } : null;
            return void(CC && (this.dropFrom(CC, !1, ZC), this.dropLatch.press(CC, this.focusKey(), zC, pC.b[(0, NC.k)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var wC;
          const bC = this.dropLatch.update(CC.isHeld(QC), this.focusKey(), zC);
          bC && ((CC, zC, ZC) => "vq" === CC.kind ? zC : !zC && ZC(CC.idx))(bC, ZC.isHolding(), ZC.hasItemAt) && (this.dropFrom(bC, !0, ZC), this.afterAction())
        }
        dropFrom(CC, zC, ZC) {
          "vq" === CC.kind ? ZC.dropHeld(zC, this.slotPoint()) : ZC.dropSlot(CC.idx, zC)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (CC => {
            const zC = fz(CC);
            return {
              clientX: zC.x,
              clientY: zC.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(CC, zC, ZC, QC) {
          const wC = zC.idx,
            bC = zC.actionElement;
          switch (bC && zZ.has(CC) && (0, PC.D)(bC), CC) {
            case "slotPrimary":
              QC.primary(wC, this.slotPoint());
              break;
            case "slotSecondary":
              QC.secondary(wC, this.slotPoint());
              break;
            case "slotQuickMove":
              QC.quickMove(wC, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(wC);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(zC.press, "pressPrimary" === CC ? "primary" : "secondary", ZC);
              break;
            case "click":
              (0, DC.m)(bC, (0, DC.A)(bC));
              break;
            case "openKeyboard":
              (0, DC.I)(bC) && (0, DC.H)(bC);
              break;
            case "pressBack":
              zC.press.back();
              break;
            case "cancel":
              QC.cancel();
              break;
            case "close":
              return this.releasePress(), void QC.close()
          }
          this.afterAction()
        }
        startPress(CC, zC, ZC) {
          this.releasePress(), CC.press(zC) && (this.activePress = {
            handlers: CC,
            button: ZC,
            target: Yz(this.focused)
          })
        }
        releasePress() {
          var CC, zC, ZC;
          null === (CC = this.activePress) || void 0 === CC || null === (zC = (ZC = CC.handlers).release) || void 0 === zC || zC.call(ZC), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(CC) {
          ((CC, zC) => {
            var ZC, QC, wC, bC, nC, fC;
            return CC.showing === zC.showing && CC.kind === zC.kind && CC.holding === zC.holding && CC.slotHasItem === zC.slotHasItem && (null === (ZC = CC.pressHints) || void 0 === ZC ? void 0 : ZC.primary) === (null === (QC = zC.pressHints) || void 0 === QC ? void 0 : QC.primary) && (null === (wC = CC.pressHints) || void 0 === wC ? void 0 : wC.secondary) === (null === (bC = zC.pressHints) || void 0 === bC ? void 0 : bC.secondary) && (null === (nC = CC.pressHints) || void 0 === nC ? void 0 : nC.back) === (null === (fC = zC.pressHints) || void 0 === fC ? void 0 : fC.back) && CC.hasCategories === zC.hasCategories && CC.hasList === zC.hasList && CC.openButtonCloses === zC.openButtonCloses && CC.steppingSlots === zC.steppingSlots && CC.hotbarPicking === zC.hotbarPicking && CC.quickMoveToHotbar === zC.quickMoveToHotbar && CC.dropStackHold === zC.dropStackHold
          })(CC, this.state) || (this.state = CC, qC.o.bp(uz.h, CC))
        }
      },
      bZ = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var nZ = ZC(8713),
      fZ = ZC(310),
      oZ = ZC(1557),
      qZ = ZC(8180);
    const FZ = "[data-pad-secondary]",
      WZ = CC => CC instanceof HTMLElement && (0, kC.m)(CC) && !(0, kC.p)(CC),
      NZ = CC => {
        const zC = CC.querySelector(FZ);
        if (zC && WZ(zC)) return zC;
        for (const wC of null !== (ZC = null === (QC = CC.parentElement) || void 0 === QC ? void 0 : QC.children) && void 0 !== ZC ? ZC : []) {
          var ZC, QC;
          if (wC !== CC && wC.matches(FZ) && WZ(wC)) return wC
        }
        return null
      },
      MZ = (CC, zC, ZC, QC) => Math.max(0, Math.max(CC, ZC) - Math.min(zC, QC)),
      gZ = (CC, zC, ZC, QC) => Math.max(0, Math.min(zC, QC) - Math.max(CC, ZC)),
      SZ = (CC, zC, ZC) => {
        const QC = (CC.left + CC.right) / 2,
          wC = (CC.top + CC.bottom) / 2,
          bC = (zC.left + zC.right) / 2,
          nC = (zC.top + zC.bottom) / 2;
        if ("Left" === ZC || "Right" === ZC) {
          const fC = "Right" === ZC ? 1 : -1;
          return {
            forwardGap: "Right" === ZC ? zC.left - CC.right : CC.left - zC.right,
            centreForward: (bC - QC) * fC,
            sidewaysGap: MZ(CC.top, CC.bottom, zC.top, zC.bottom),
            sidewaysOverlap: gZ(CC.top, CC.bottom, zC.top, zC.bottom),
            centreSideways: Math.abs(nC - wC),
            startSideways: Math.abs(zC.top - CC.top),
            fromSidewaysSize: CC.bottom - CC.top,
            toSidewaysSize: zC.bottom - zC.top,
            toLength: zC.right - zC.left
          }
        }
        const fC = "Down" === ZC ? 1 : -1;
        return {
          forwardGap: "Down" === ZC ? zC.top - CC.bottom : CC.top - zC.bottom,
          centreForward: (nC - wC) * fC,
          sidewaysGap: MZ(CC.left, CC.right, zC.left, zC.right),
          sidewaysOverlap: gZ(CC.left, CC.right, zC.left, zC.right),
          centreSideways: Math.abs(bC - QC),
          startSideways: Math.abs(zC.left - CC.left),
          fromSidewaysSize: CC.right - CC.left,
          toSidewaysSize: zC.right - zC.left,
          toLength: zC.bottom - zC.top
        }
      },
      pZ = CC => CC.centreForward > .5 && CC.forwardGap >= -CC.toLength / 2,
      PZ = CC => {
        const zC = CC.sidewaysOverlap > 0 ? 0 : 2 * CC.fromSidewaysSize,
          ZC = CC.fromSidewaysSize > 1.5 * CC.toSidewaysSize ? CC.startSideways : CC.centreSideways;
        return Math.max(0, CC.forwardGap) + 3 * CC.sidewaysGap + zC + .1 * ZC
      },
      GZ = (CC, zC) => gZ(CC.top, CC.bottom, zC.top, zC.bottom) > 0 || zC.bottom - zC.top > zC.right - zC.left,
      RZ = (CC, zC, ZC, QC, wC, bC) => {
        const nC = wC ? xZ(CC, zC, ZC, wC) : new Set,
          fC = IZ(CC, zC, ZC, nC);
        return fC < 0 && nC.size > 0 && bC ? AZ(CC, zC, ZC, bC) : QC && fC >= 0 ? JZ(CC, zC, ZC, QC, fC, nC) : fC
      },
      AZ = (CC, zC, ZC, QC) => {
        const wC = new Set,
          bC = IZ(CC, zC, "Up", wC) >= 0,
          nC = IZ(CC, zC, "Down", wC) >= 0,
          fC = new Set;
        return zC.forEach(((zC, ZC) => {
          const wC = zC.top + zC.bottom < CC.top + CC.bottom;
          QC[ZC] && !(wC ? bC : nC) || fC.add(ZC)
        })), IZ(CC, zC, ZC, fC)
      },
      xZ = (CC, zC, ZC, QC) => {
        const wC = new Set;
        return "Left" !== ZC && "Right" !== ZC || zC.forEach(((zC, ZC) => {
          QC[ZC] && gZ(CC.top, CC.bottom, zC.top, zC.bottom) <= 0 && wC.add(ZC)
        })), wC
      },
      JZ = (CC, zC, ZC, QC, wC, bC) => {
        const nC = SZ(CC, zC[wC], ZC).forwardGap;
        let fC = wC,
          oC = QC[wC],
          qC = 1 / 0;
        return zC.forEach(((zC, FC) => {
          const WC = QC[FC];
          if (bC.has(FC) || WC < oC || WC === oC && fC === wC) return;
          const NC = SZ(CC, zC, ZC);
          if (!pZ(NC) || NC.forwardGap < 0 || NC.forwardGap >= nC) return;
          const MC = PZ(NC);
          (WC > oC || MC < qC) && (fC = FC, oC = WC, qC = MC)
        })), fC
      },
      IZ = (CC, zC, ZC, QC) => {
        let wC = -1,
          bC = 1 / 0;
        if (zC.forEach(((zC, nC) => {
            const fC = ((CC, zC, ZC) => {
              const QC = SZ(CC, zC, ZC);
              if (!pZ(QC)) return null;
              const wC = Math.max(0, QC.forwardGap);
              return QC.sidewaysOverlap <= 0 && QC.sidewaysGap > 2 * (wC + 1) ? null : PZ(QC)
            })(CC, zC, ZC);
            null !== fC && fC < bC && !QC.has(nC) && (bC = fC, wC = nC)
          })), wC < 0) return -1;
        const nC = zC[wC],
          fC = SZ(CC, nC, ZC).forwardGap;
        let oC = fC,
          qC = wC;
        return zC.forEach(((zC, bC) => {
          if (bC === wC || QC.has(bC) || !((CC, zC, ZC) => {
              const QC = "Left" === ZC || "Right" === ZC,
                wC = QC ? gZ(CC.top, CC.bottom, zC.top, zC.bottom) : gZ(CC.left, CC.right, zC.left, zC.right),
                bC = QC ? Math.min(CC.bottom - CC.top, zC.bottom - zC.top) : Math.min(CC.right - CC.left, zC.right - zC.left);
              return wC > 0 && wC >= bC / 2
            })(zC, nC, ZC)) return;
          const FC = SZ(CC, zC, ZC);
          pZ(FC) && FC.forwardGap + FC.toLength <= fC + 1 && FC.forwardGap < oC && (oC = FC.forwardGap, qC = bC)
        })), qC
      },
      iZ = (CC, zC) => {
        let ZC = -1,
          QC = 1 / 0;
        return zC.forEach(((zC, wC) => {
          const bC = Math.max(zC.left - CC.x, 0, CC.x - zC.right),
            nC = Math.max(zC.top - CC.y, 0, CC.y - zC.bottom),
            fC = Math.hypot(bC, nC);
          fC < QC && (QC = fC, ZC = wC)
        })), ZC
      },
      vZ = (CC, zC) => {
        const ZC = Math.min(CC.bottom - CC.top, zC.bottom - zC.top) / 2;
        return Math.abs(CC.top - zC.top) > ZC ? CC.top - zC.top : CC.left - zC.left
      },
      eZ = CC => {
        let zC = -1;
        for (let ZC = 0; ZC < CC.length; ZC++)(zC < 0 || vZ(CC[ZC], CC[zC]) < 0) && (zC = ZC);
        return zC
      };
    var hZ = ZC(1600),
      KZ = ZC(8721),
      YZ = ZC(8729);
    const dZ = CC => {
        if ("death" !== CC || "inGame" !== oC.b.get("gameState") || "off" === (0, NC.k)().quickChat || null === (0, hZ.e)()) return !1;
        const zC = (0, FC.i)("chat");
        return zC !== (0, FC.i)("menuConfirm") && zC !== (0, FC.i)("menuBack")
      },
      mZ = new KZ.d;
    var HZ = ZC(4227),
      EZ = ZC(8735);
    const lZ = CC => {
        let zC = null;
        for (const ZC of CC.querySelectorAll("[data-pad-tabs]"))(0, kC.m)(ZC) && (!zC || Number(ZC.dataset.padTabs) < Number(zC.dataset.padTabs)) && (zC = ZC);
        return zC
      },
      XZ = (CC, zC, ZC, QC) => {
        CC.focusWhenFound((() => {
          const wC = CC.pickInitial(zC);
          if (wC && !ZC.has(wC) && (null === QC || void 0 === QC || !QC.contains(wC))) return wC;
          const bC = ((CC, zC) => {
              const ZC = zC => CC.getEnabledCandidates(zC).filter((CC => !CC.closest("[data-pad-tabs]")));
              for (const QC of (0, kC.g)(zC)) {
                const CC = ZC(QC);
                if (CC.length > 0) return CC
              }
              return ZC(zC)
            })(CC, zC).filter((CC => !ZC.has(CC))),
            nC = eZ(bC.map((CC => CC.getBoundingClientRect())));
          return nC >= 0 ? bC[nC] : null
        }), 3e3)
      },
      cZ = (CC, zC, ZC, QC) => {
        var wC;
        const bC = ((CC, zC) => {
          if (0 === CC.length) return null;
          const ZC = CC.findIndex((CC => "true" === CC.dataset.padSelected));
          return ZC < 0 ? zC > 0 ? CC[0] : CC[CC.length - 1] : CC[(ZC + zC + CC.length) % CC.length]
        })([...ZC.querySelectorAll("[data-pad-tab]")].filter((CC => (0, kC.m)(CC) && !(0, kC.p)(CC))), QC);
        if (!bC) return;
        const nC = null !== (wC = null === CC || void 0 === CC ? void 0 : CC.getFocused()) && void 0 !== wC ? wC : null,
          fC = !(null === nC || void 0 === nC || !nC.isConnected) && ZC.contains(nC),
          oC = CC && !fC ? new Set(CC.getEnabledCandidates(zC)) : null;
        (0, DC.d)(bC), CC && (oC ? XZ(CC, zC, oC, ZC) : CC.setFocus(bC, {
          byUser: !0
        }))
      },
      uZ = CC => {
        var zC;
        const ZC = EC(null !== (zC = hC(CC, "x")) && void 0 !== zC ? zC : CC),
          QC = (0, kC.d)(CC).filter((CC => !(0, kC.p)(CC))),
          wC = QC.filter((CC => lC(CC.getBoundingClientRect(), ZC)));
        return (wC.length > 0 ? wC : QC).sort(((CC, zC) => vZ(CC.getBoundingClientRect(), zC.getBoundingClientRect())))
      },
      rZ = (CC, zC, ZC) => {
        const QC = [...zC.querySelectorAll("[data-pad-row]")].filter(kC.m),
          wC = CC.getFocused(),
          bC = wC ? QC.findIndex((CC => CC.contains(wC))) : -1;
        let nC = 0,
          fC = ZC > 0 ? 0 : QC.length - 1;
        if (bC >= 0 && wC) nC = Math.max(0, uZ(QC[bC]).indexOf(wC)), fC = bC + ZC;
        else if (wC) {
          const CC = wC.getBoundingClientRect(),
            zC = QC.map((zC => {
              const QC = zC.getBoundingClientRect();
              return ZC > 0 ? QC.top >= CC.top : QC.bottom <= CC.bottom
            }));
          fC = ZC > 0 ? zC.indexOf(!0) : zC.lastIndexOf(!0)
        }
        for (let oC = fC; oC >= 0 && oC < QC.length; oC += ZC) {
          const zC = uZ(QC[oC]);
          if (zC.length > 0) return void CC.setFocus(zC[Math.min(nC, zC.length - 1)], {
            byUser: !0
          })
        }
      },
      sZ = (CC, zC, ZC) => {
        var QC, wC;
        const bC = null !== (QC = null === CC || void 0 === CC ? void 0 : CC.getFocused()) && void 0 !== QC ? QC : null,
          nC = null !== bC && void 0 !== bC && bC.closest("[data-pad-row]") ? "x" : "y",
          fC = null !== (wC = bC ? hC(bC, nC, zC) : null) && void 0 !== wC ? wC : YC(zC, nC);
        if (!fC) return;
        const oC = bC ? (0, DC.A)(bC) : null;
        if (HC(fC, nC, ZC * ("y" === nC ? fC.clientHeight : fC.clientWidth) * .85), !CC || !oC) return;
        const qC = EC(fC),
          FC = CC.getEnabledCandidates(zC).filter((CC => fC.contains(CC) && lC(CC.getBoundingClientRect(), qC))),
          WC = iZ(oC, FC.map((CC => CC.getBoundingClientRect())));
        WC >= 0 && CC.setFocus(FC[WC], {
          scroll: !1,
          byUser: !0
        })
      };
    let TZ = null;
    const aZ = (CC, zC) => {
        var ZC, QC;
        const wC = zC.querySelector("[data-pad-friends-column]"),
          bC = CC.getFocused();
        if (!wC || !bC || !wC.contains(bC)) return !1;
        const nC = CC.getEnabledCandidates(zC).filter((CC => !wC.contains(CC))),
          fC = iZ((0, DC.A)(bC), nC.map((CC => CC.getBoundingClientRect()))),
          oC = null === (ZC = TZ) || void 0 === ZC ? void 0 : ZC.deref();
        return CC.setFocus(null !== oC && void 0 !== oC && oC.isConnected ? oC : null !== (QC = nC[fC]) && void 0 !== QC ? QC : null, {
          byUser: !0
        }), !0
      },
      tZ = CC => {
        const zC = (0, FC.i)(CC);
        return (0, gC.E)(zC) || qZ.q.some((CC => (0, FC.i)(CC) === zC)) ? null : zC
      },
      DZ = (CC, zC) => {
        const ZC = tZ(zC);
        return null !== ZC && CC.wasPressed(ZC)
      },
      jZ = function(CC, zC, ZC) {
        let QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const wC = (CC => {
            var zC, ZC;
            return null !== (zC = null === (ZC = lZ(CC)) || void 0 === ZC ? void 0 : ZC.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== zC ? zC : null
          })(zC),
          bC = CC && wC ? new Set(CC.getEnabledCandidates(zC)) : null;
        (0, nZ.b)(), ZC === fZ.o.SETTINGS && (0, oZ.l)(oC.b.get("openEverythingMenuName")) ? oC.b.set({
          openEverythingMenuName: ZC
        }) : (0, oZ.A)(new Event("padMenuShortcut"), ZC, QC), CC && bC && wC && XZ(CC, zC, bC, wC.closest("[data-pad-tabs]"))
      },
      yZ = CC => null !== CC.closest(".Dropdown-root") || null !== CC.querySelector(".Dropdown-root.is-open"),
      LZ = CC => null !== (0, EZ.c)() && "popup" !== CC.layer.kind && !lZ(CC.root) && !yZ(CC.root),
      UZ = (0, SC.d)(gC.ab),
      BZ = (0, SC.d)(gC.ab),
      OZ = (CC, zC, ZC) => {
        if (((CC, zC) => {
            const ZC = (0, FC.i)("chat");
            return dZ(zC) && CC.isHeld(ZC) ? "hold" === mZ.update(CC.wasPressed(ZC), CC.isHeld(ZC), performance.now(), pC.b[(0, NC.k)().tapHoldTime].wheelMs) && (WC.c.consumeButton(ZC), qC.o.bp(YZ.n), !0) : (mZ.release(), !1)
          })(zC, ZC.layer.kind)) return !0;
        const QC = ZC.root;
        for (const [nC, fC] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (zC.wasPressed((0, FC.i)(nC))) {
            const zC = yZ(QC) ? null : lZ(QC);
            if (zC) cZ(CC, QC, zC, fC);
            else if (LZ(ZC)) {
              var wC;
              const zC = CC ? new Set(CC.getEnabledCandidates(QC)) : null;
              null !== (wC = (0, EZ.c)()) && void 0 !== wC && wC(fC) && CC && zC && XZ(CC, QC, zC, null)
            } else CC && rZ(CC, QC, fC);
            return !0
          } for (const [nC, fC, oC] of [
            ["menuPageUp", -1, UZ],
            ["menuPageDown", 1, BZ]
          ]) {
          const ZC = (0, FC.i)(nC);
          if (zC.wasPressed(ZC) && oC.reset(), oC.update(zC.isHeld(ZC), performance.now())) return sZ(CC, QC, fC), !0
        }
        const bC = "popup" === ZC.layer.kind;
        return DZ(zC, "pause") ? (bC || (0, oZ.w)() && "menu" !== ZC.layer.kind || jZ(CC, QC, (0, oZ.w)() ? fZ.o.SETTINGS : (0, HZ.e)()), !0) : !!DZ(zC, "leaderboard") && ("home" === ZC.layer.kind ? (CC => {
          const zC = [...CC.querySelectorAll("[data-pad-notifications]")].find(kC.m);
          zC && (0, DC.d)(zC)
        })(QC) : bC || jZ(CC, QC, fZ.o.LOBBY_LEADERBOARD, "inGame" === oC.b.get("gameState")), !0)
      },
      kZ = (CC, zC, ZC) => {
        if (OZ(CC, zC, ZC)) return !0;
        const QC = "home" === ZC.layer.kind;
        if (zC.wasPressed((0, FC.i)("menuSecondary"))) {
          const zC = CC.getFocused(),
            wC = zC ? NZ(zC) : null;
          if (wC) return (0, DC.d)(wC), !0;
          if (QC) {
            const zC = ZC.root.querySelector("[data-pad-search] input");
            return zC && (0, kC.o)(zC, ZC.root) ? (CC.setFocus(zC, {
              byUser: !0
            }), (0, DC.d)(zC)) : oC.b.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!QC || !DZ(zC, "inventory")) && (((CC, zC) => {
          var ZC, QC;
          const wC = zC.querySelector("[data-pad-friends-column]");
          if (!wC || !(0, kC.m)(wC)) return void(0, oZ.A)(new Event("padMenuShortcut"), fZ.o.SOCIAL);
          if (aZ(CC, zC)) return;
          const bC = null !== (ZC = null === (QC = wC.querySelector("[data-pad-friends-start]")) || void 0 === QC ? void 0 : QC.getBoundingClientRect().top) && void 0 !== ZC ? ZC : -1 / 0,
            nC = CC.getEnabledCandidates(wC),
            fC = nC.filter((CC => CC.getBoundingClientRect().top >= bC)),
            oC = fC.length > 0 ? fC : nC,
            qC = eZ(oC.map((CC => CC.getBoundingClientRect())));
          CC.setFocus(qC >= 0 ? oC[qC] : null, {
            byUser: !0
          })
        })(CC, ZC.root), !0)
      },
      VZ = CC => {
        var zC, ZC, QC;
        const wC = (0, DC.C)(CC);
        if (null !== wC) return wC;
        const bC = (null !== (zC = null !== (ZC = null !== (QC = CC.getAttribute("aria-label")) && void 0 !== QC ? QC : CC.getAttribute("title")) && void 0 !== ZC ? ZC : CC.textContent) && void 0 !== zC ? zC : "").replace(/\s+/g, " ").trim();
        return bC ? `${CC.tagName}:${bC.slice(0,100)}` : null
      };
    class CQ {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(CC) {
        const zC = this.history.indexOf(CC);
        if (zC >= 0) {
          for (const CC of this.history.splice(zC + 1)) this.remembered.delete(CC);
          return !0
        }
        return this.remembered.delete(CC), this.history.push(CC), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(CC) {
        this.remembered.delete(CC);
        const zC = this.history.indexOf(CC);
        zC >= 0 && this.history.splice(zC, 1)
      }
      remember(CC, zC, ZC, QC) {
        const wC = VZ(zC),
          bC = (0, DC.C)(zC),
          nC = null !== bC && ((CC, zC) => {
            let ZC = 0;
            for (const QC of CC.querySelectorAll("[data-pad-key], [href]"))
              if ((QC.getAttribute("data-pad-key") === zC || QC.getAttribute("href") === zC) && (ZC++, ZC > 1)) return !0;
            return !1
          })(ZC, bC) ? Math.max(0, this.twins(QC(), bC).indexOf(zC)) : 0;
        this.remembered.set(CC, {
          element: new WeakRef(zC),
          identity: wC,
          ordinal: nC
        })
      }
      has(CC) {
        return this.remembered.has(CC)
      }
      recall(CC, zC) {
        var ZC, QC;
        const wC = this.remembered.get(CC);
        if (!wC) return null;
        const bC = wC.element.deref();
        if (bC && zC.includes(bC)) return bC;
        if (null === wC.identity) return null;
        const nC = this.twins(zC, wC.identity);
        return null !== (ZC = null !== (QC = nC[wC.ordinal]) && void 0 !== QC ? QC : nC[0]) && void 0 !== ZC ? ZC : null
      }
      twins(CC, zC) {
        return CC.filter((CC => VZ(CC) === zC))
      }
    }
    var zQ = ZC(1228);
    const ZQ = CC => {
        const zC = [];
        let ZC = CC;
        for (; ZC && ZC !== document.body;) {
          const CC = getComputedStyle(ZC).zIndex;
          "auto" !== CC && zC.push(Number(CC) || 0), ZC = ZC.parentElement
        }
        return zC.reverse()
      },
      QQ = (CC, zC) => {
        const ZC = ((CC, zC) => {
          const ZC = Math.max(CC.length, zC.length);
          for (let bC = 0; bC < ZC; bC++) {
            var QC, wC;
            const ZC = (null !== (QC = CC[bC]) && void 0 !== QC ? QC : 0) - (null !== (wC = zC[bC]) && void 0 !== wC ? wC : 0);
            if (0 !== ZC) return ZC
          }
          return 0
        })(ZQ(CC), ZQ(zC));
        if (0 !== ZC) return ZC > 0;
        if (CC.contains(zC)) return !1;
        if (zC.contains(CC)) return !0;
        const QC = CC.compareDocumentPosition(zC);
        return !!(QC & Node.DOCUMENT_POSITION_PRECEDING) || !(QC & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      wQ = (CC, zC) => {
        var ZC;
        return null !== (ZC = QQ(CC.root, zC.root)) && void 0 !== ZC ? ZC : CC.order > zC.order
      },
      bQ = (CC, zC) => zC.some((zC => !zC.contains(CC) && !CC.contains(zC) && !0 === QQ(zC, CC)));
    let nQ = null,
      fQ = null,
      oQ = -1;
    const qQ = () => {
        var CC;
        const zC = null === (CC = document.timeline) || void 0 === CC ? void 0 : CC.currentTime,
          ZC = "number" === typeof zC ? zC : null;
        if (null !== ZC && ZC === fQ && oQ === (0, zQ.c)()) return nQ;
        let QC = null;
        const wC = [],
          bC = [...document.querySelectorAll("[data-pad-covers]")].filter(kC.m);
        for (const nC of (0, zQ.d)()) {
          const CC = nC.getRoot(),
            zC = !!CC && (0, kC.m)(CC) && !bQ(CC, bC);
          if (nC.shown && !zC && wC.push(nC), nC.shown = zC, !CC || !zC) continue;
          const ZC = {
            layer: nC,
            root: CC,
            order: nC.order
          };
          QC && !wQ(ZC, QC) || (QC = ZC)
        }
        nQ = QC, fQ = ZC, oQ = (0, zQ.c)();
        for (const nC of wC)(0, zQ.h)(nC);
        return nQ
      },
      FQ = () => {
        const CC = qQ();
        return !(null === CC || void 0 === CC || !CC.layer.close) && (CC.layer.close(), fQ = null, !0)
      },
      WQ = () => {
        var CC, zC;
        return null !== (CC = null === (zC = qQ()) || void 0 === zC ? void 0 : zC.root) && void 0 !== CC ? CC : null
      },
      NQ = CC => CC ? {
        ...CC,
        root: WQ()
      } : null;
    let MQ = null,
      gQ = null,
      SQ = (0, NC.k)().menuNavigation,
      pQ = null;
    const PQ = new xC;
    let GQ = null;
    qC.o.subscribe(NC.g, (() => {
      const CC = (0, NC.k)().menuNavigation;
      CC !== SQ && (SQ = CC, MQ = null, gQ = null)
    }));
    const RQ = () => {
        var CC;
        return null !== (CC = MQ) && void 0 !== CC ? CC : (0, NC.k)().menuNavigation
      },
      AQ = CC => {
        if (iQ()) {
          if (pQ = NQ(CC), "hybrid" === RQ()) return PQ.lock(), void(gQ = gQ ? null : WQ());
          MQ = "focus" === RQ() ? "cursor" : "focus"
        }
      },
      xQ = () => {
        const CC = pQ;
        return pQ = null, CC
      };
    let JQ = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const IQ = function(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const ZC = JQ.root === CC,
          QC = ZC ? JQ.firstSeenMs : zC,
          wC = JQ.has || zC - QC > 1e3;
        return (!ZC || !wC || zC - JQ.atMs > 250) && (JQ = {
          root: CC,
          firstSeenMs: QC,
          atMs: zC,
          has: (0, kC.i)(CC)
        }), JQ.has
      },
      iQ = () => {
        const CC = WQ();
        return null !== CC && IQ(CC)
      },
      vQ = () => {
        const CC = qQ();
        return gQ && (null === CC || void 0 === CC ? void 0 : CC.root) !== gQ && (gQ = null), (CC => {
          let {
            mode: zC,
            hasLayer: ZC,
            hasCandidates: QC,
            hybridCursorEngaged: wC
          } = CC;
          return ZC ? "cursor" !== zC && QC() ? "hybrid" === zC && wC ? "cursor" : "focus" : "cursor" : null
        })({
          mode: RQ(),
          hasLayer: null !== CC,
          hasCandidates: () => null !== CC && IQ(CC.root),
          hybridCursorEngaged: null !== gQ
        })
      },
      eQ = () => "hybrid" === RQ() && iQ(),
      hQ = "pad-focused";
    var KQ = ZC(4486),
      YQ = ZC(4979);
    const dQ = "[data-pad-destructive]",
      mQ = `${dQ}, [data-pad-back]`,
      HQ = CC => ({
        rect: CC.getBoundingClientRect(),
        destructive: CC.matches(dQ),
        closes: null !== CC.closest("[data-pad-close-button]"),
        unavailable: CC.matches("[data-pad-unavailable]")
      }),
      EQ = CC => {
        let {
          destructive: zC,
          closes: ZC,
          unavailable: QC
        } = CC;
        return zC ? ZC ? 2 : 3 : QC ? 1 : 0
      },
      lQ = CC => {
        let zC = -1;
        for (let ZC = 0; ZC < CC.length; ZC++) {
          if (zC < 0) {
            zC = ZC;
            continue
          }
          const QC = CC[ZC],
            wC = CC[zC];
          EQ(QC) === EQ(wC) ? vZ(QC.rect, wC.rect) < 0 && (zC = ZC) : EQ(QC) < EQ(wC) && (zC = ZC)
        }
        return zC
      },
      XQ = "[data-pad-tabs]",
      cQ = "[data-pad-tab]",
      uQ = (CC, zC) => {
        const ZC = CC.querySelector(`${cQ}[data-pad-selected='true']`);
        return ZC && zC.includes(ZC) ? ZC : null
      },
      rQ = (CC, zC) => {
        let ZC = zC;
        for (let QC = zC.parentElement; QC && !QC.contains(CC); QC = QC.parentElement) ZC = QC;
        return ZC
      };
    class sQ {
      constructor() {
        this.contentReturn = null
      }
      redirect(CC, zC, ZC, QC) {
        var wC, bC;
        const nC = CC.closest(XQ),
          fC = zC.closest(XQ);
        var oC;
        if (fC && fC !== nC) return nC || (this.contentReturn = new WeakRef(CC)), null !== (oC = uQ(fC, ZC)) && void 0 !== oC ? oC : zC;
        if (!nC || fC) return zC;
        const qC = rQ(CC, zC),
          FC = null === (wC = this.contentReturn) || void 0 === wC ? void 0 : wC.deref();
        return FC && qC.contains(FC) && ZC.includes(FC) ? FC : null !== (bC = this.pickRegionStart(qC, hC(zC, "y", QC), ZC)) && void 0 !== bC ? bC : zC
      }
      findTabContent(CC, zC, ZC) {
        const QC = CC.closest(XQ);
        if (!QC || !CC.matches(cQ) || QC.contains(zC)) return null;
        const wC = zC.closest(XQ);
        if (wC && Number(wC.dataset.padTabs) <= Number(QC.dataset.padTabs)) return null;
        const bC = rQ(CC, zC);
        return ZC.some((CC => bC.contains(CC) && !CC.closest(mQ))) || !zC.closest(mQ) ? bC : null
      }
      pickContentStart(CC, zC, ZC) {
        return this.contentReturn = null, this.pickRegionStart(CC, hC(CC, "y", ZC), zC)
      }
      pickReplacedContentStart(CC, zC, ZC, QC) {
        if (!zC.contains(CC)) return null;
        const wC = rQ(zC, CC),
          bC = ZC.filter((CC => zC.contains(CC) && !wC.contains(CC) && !CC.closest(mQ)));
        return 0 === bC.length ? null : (this.contentReturn = null, this.pickRegionStart(zC, hC(bC[0], "y", QC), bC))
      }
      backToStrip(CC, zC, ZC) {
        if (CC.closest(XQ)) return null;
        const QC = lZ(ZC);
        for (const wC of ZC.querySelectorAll(XQ)) {
          if (Number(wC.dataset.padTabs) <= 1 || wC === QC) continue;
          const bC = uQ(wC, zC),
            nC = bC ? rQ(CC, wC).parentElement : null;
          if (bC && nC && nC !== ZC && ZC.contains(nC)) return this.contentReturn = new WeakRef(CC), bC
        }
        return null
      }
      pickRegionStart(CC, zC, ZC) {
        const QC = EC(zC),
          wC = CC => {
            const zC = ZC.filter((zC => CC.contains(zC) && !zC.closest(XQ) && lC(zC.getBoundingClientRect(), QC))),
              wC = lQ(zC.map(HQ));
            return wC >= 0 ? zC[wC] : null
          };
        for (const bC of (0, kC.g)(CC)) {
          const CC = wC(bC);
          if (CC) return CC
        }
        for (const bC of CC.querySelectorAll(XQ)) {
          const CC = uQ(bC, ZC);
          if (CC) return CC
        }
        return wC(CC)
      }
    }
    const TQ = "[data-pad-default-focus], .Dropdown-option.is-selected",
      aQ = ".Dropdown-root.is-open > .Dropdown-menu",
      tQ = "[data-pad-no-step-in]",
      DQ = "[data-pad-tabs]",
      jQ = "[data-pad-press-area]",
      yQ = CC => {
        let zC = CC;
        for (let ZC = 0; zC && ZC <= 4; ZC++, zC = zC.parentElement) {
          const ZC = zC.querySelector(".CircleInfo");
          if (ZC) return zC === CC || zC.querySelectorAll(kC.b).length <= 1 ? ZC : null;
          if (zC !== CC && zC.querySelectorAll(kC.b).length > 1) return null
        }
        return null
      },
      LQ = (CC, zC, ZC) => {
        (0, DC.p)(CC, zC, ZC);
        const QC = null !== CC && void 0 !== CC && CC.isConnected ? yQ(CC) : null,
          wC = yQ(zC);
        QC !== wC && (0, DC.p)(QC, wC, wC ? (0, DC.A)(wC) : ZC, {
          leaveBelow: CC,
          enterBelow: zC
        })
      },
      UQ = CC => CC.getBoundingClientRect(),
      BQ = (CC, zC, ZC) => {
        const QC = new Set(ZC);
        for (let wC = CC; wC; wC = wC === zC ? null : wC.parentElement)
          if (QC.has(wC)) return wC;
        return null
      },
      OQ = (CC, zC) => !CC.root || CC.root === zC || zC.matches(aQ) && CC.root.contains(zC);
    const kQ = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new CQ, this.tabStripNav = new sQ, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, SC.d)(gC.s), this.dpadRepeats = new Map(gC.y.map((CC => [CC, (0, SC.d)(gC.C)]))), this.stickRepeat = new gC.c((0, SC.d)(gC.eb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const CC = WC.c.register({
            name: "focus",
            isActive: () => (0, MC.k)() && "focus" === vQ(),
            onFrame: CC => {
              this.onFrame(CC)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: CC => (0, WC.d)(CC) || CC === (0, FC.i)("menuConfirm") && (0, DC.G)((0, MC.b)())
          }),
          zC = (0, zQ.j)((CC => {
            const zC = (0, zQ.r)(CC);
            null === CC.memoryKey && this.memory.forget(zC), zC === this.layerKey && (this.layerKey = null)
          }));
        let ZC = -1 / 0;
        const QC = nC.f.onFrame((CC => {
            (0, MC.k)() || CC.timestampMs - ZC < 100 || (ZC = CC.timestampMs, qQ())
          })),
          wC = CC => {
            CC.isTrusted && CC.target instanceof Element && nC.f.getActivePad() && this.noteChosenStop(CC.target)
          };
        return document.addEventListener("click", wC, !0), () => {
          CC(), zC(), QC(), document.removeEventListener("click", wC, !0), this.deactivate()
        }
      }
      noteChosenStop(CC) {
        var zC, ZC;
        const QC = qQ();
        if (!QC || !QC.root.contains(CC)) return;
        const wC = null !== (zC = null === (ZC = CC.closest(".Dropdown-root")) || void 0 === ZC ? void 0 : ZC.querySelector(".Dropdown-control")) && void 0 !== zC ? zC : CC,
          bC = BQ(wC, QC.root, this.getEnabledCandidates(QC.root));
        if (!bC) return;
        const nC = (0, zQ.r)(QC.layer);
        nC === this.layerKey && QC.root === this.layerRoot || this.beginLayer(QC, nC), this.wasActive ? this.setFocus(bC, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = bC, this.lastFocusedCentre = (0, DC.A)(bC), this.rememberFocus(bC), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(CC) {
        return this.listeners.add(CC), () => {
          this.listeners.delete(CC)
        }
      }
      notify() {
        for (const CC of this.listeners) CC()
      }
      deactivate() {
        var CC;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const CC of this.dpadRepeats.values()) CC.reset();
          this.stickRepeat.reset(), null !== (CC = this.focused) && void 0 !== CC && CC.isConnected && LQ(this.focused, null, (0, DC.A)(this.focused)), this.notify()
        }
      }
      setFocus(CC) {
        var zC;
        let {
          scroll: ZC = !0,
          byUser: QC = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (QC && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), CC === this.focused) return;
        const wC = null !== (zC = this.focused) && void 0 !== zC && zC.isConnected ? this.focused : null;
        if (this.focused = CC, CC) {
          ZC && (CC.classList.add(hQ), CC.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), QC && ((CC, zC) => {
            const ZC = zC.closest("[data-pad-friends-column]");
            ZC && CC && !ZC.contains(CC) && (TZ = new WeakRef(CC))
          })(wC, CC);
          const zC = (0, DC.A)(CC);
          this.lastFocusedCentre = zC, this.movedInLayer && this.rememberFocus(CC), LQ(wC, CC, zC), "false" === CC.getAttribute("aria-pressed") && CC.closest("[data-pad-select-on-focus]") && (0, DC.d)(CC)
        } else wC && LQ(wC, null, (0, DC.A)(wC));
        this.notify()
      }
      rememberFocus(CC) {
        const zC = this.layerRoot;
        this.layerKey && zC && this.memory.remember(this.layerKey, CC, zC, (() => this.getEnabledCandidates(zC)))
      }
      noteCursorActivation(CC) {
        const zC = qQ();
        if (!zC || !zC.root.contains(CC)) return;
        const ZC = this.getEnabledCandidates(zC.root),
          QC = new Set(ZC);
        let wC = CC;
        for (; wC && !QC.has(wC);) wC = wC === zC.root ? null : wC.parentElement;
        if (!(wC instanceof HTMLElement)) return;
        const bC = (0, zQ.r)(zC.layer);
        this.memory.enter(bC), this.memory.remember(bC, wC, zC.root, (() => ZC))
      }
      notePageEnteredByCursor(CC) {
        return this.memory.enter(CC)
      }
      recallStop(CC, zC) {
        return this.findRemembered(CC, zC)
      }
      focusWhenFound(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: CC,
          untilMs: performance.now() + zC,
          holdWhile: ZC
        }
      }
      getEnabledCandidates(CC) {
        return (0, kC.d)(CC).filter((CC => !(0, kC.p)(CC)))
      }
      onFrame(CC) {
        var zC;
        const ZC = qQ();
        if (!ZC) return;
        const QC = null !== (zC = this.findOpenDropdown(ZC)) && void 0 !== zC ? zC : ZC,
          wC = performance.now(),
          bC = (0, zQ.r)(QC.layer);
        if (bC !== this.layerKey || QC.root !== this.layerRoot) {
          const zC = this.focused;
          if (null !== this.layerKey && QC.root === this.layerRoot && zC && (0, kC.o)(zC, QC.root)) this.continueLayer(bC, zC), this.wasActive || this.resume(QC.root, wC);
          else {
            const zC = !this.wasActive && !CC.wokeDevice,
              nC = "death" === this.layerKind || zC,
              fC = this.enterLayer(QC, bC);
            "popup" !== QC.layer.kind || QC !== ZC || fC ? "menu" === QC.layer.kind && nC && "inGame" === oC.b.get("gameState") && !(0, nZ.d)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = wC + KQ.e) : (this.pressGuardExtends = zC, this.pressGuardUntilMs = wC + (zC ? KQ.e : nC ? 500 : 250))
          }
        } else this.wasActive || this.resume(QC.root, wC);
        if (this.layerKind = QC.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), CC.wokeDevice && this.focusPointedStop(QC.root), this.validateFocus(QC, wC), wC < this.pressGuardUntilMs && this.pressGuardExtends && (CC.wasPressed((0, FC.i)("menuConfirm")) || CC.wasPressed((0, FC.i)("menuBack"))) && (this.pressGuardUntilMs = wC + KQ.e), wC >= this.pressGuardUntilMs && this.handleButtons(CC, QC)) return;
        const nC = "hybrid" === RQ();
        if (nC && (CC => {
            const zC = WQ();
            return zC !== GQ && (GQ = zC, PQ.lock()), PQ.update(CC, (0, NC.k)().moveDeadzone)
          })(CC.leftStick)) return fC = this.getHandoff(), pQ = NQ(fC), gQ = WQ(), void WC.c.handOffHeldInput();
        var fC;
        this.handleDirections(CC, QC, wC, !nC), this.handleScroll(CC, QC)
      }
      findOpenDropdown(CC) {
        const zC = CC.root.querySelector(aQ);
        if (!zC || !(0, kC.m)(zC)) return null;
        let ZC = this.dropdownLayers.get(zC);
        return ZC || (this.dropdownLayerCounter++, ZC = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: CC.layer.kind,
          getRoot: () => zC,
          close: () => {
            (0, DC.i)(zC)
          },
          memoryKey: null
        }, this.dropdownLayers.set(zC, ZC)), {
          layer: ZC,
          root: zC,
          order: CC.order
        }
      }
      focusPointedStop(CC) {
        const zC = (0, MC.b)(),
          ZC = zC ? document.elementFromPoint(zC.x, zC.y) : null;
        if (!ZC || !CC.contains(ZC)) return;
        const QC = BQ(ZC, CC, this.getEnabledCandidates(CC));
        QC && this.setFocus(QC, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(CC, zC) {
        const ZC = this.beginLayer(CC, zC),
          QC = xQ();
        return QC && OQ(QC, CC.root) ? (this.takeOver(CC.root, QC, this.enteredLayerAtMs), ZC) : (this.restoreLayerFocus(CC.root, ZC), ZC)
      }
      beginLayer(CC, zC) {
        return this.layerKey = zC, this.layerRoot = CC.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(zC)
      }
      restoreLayerFocus(CC, zC) {
        const ZC = zC && this.layerKey ? this.findRemembered(CC, this.layerKey) : null;
        this.restoredFromMemory = null !== ZC, this.setFocus(null !== ZC && void 0 !== ZC ? ZC : this.pickInitial(CC, {
          waitForContent: !0
        }))
      }
      continueLayer(CC, zC) {
        this.layerKey = CC;
        const ZC = this.memory.enter(CC);
        this.restoreOnFocusLoss = ZC, this.movedInLayer && !ZC && this.rememberFocus(zC)
      }
      resume(CC, zC) {
        var ZC;
        const QC = xQ();
        QC && OQ(QC, CC) ? this.takeOver(CC, QC, zC) : null !== (ZC = this.focused) && void 0 !== ZC && ZC.isConnected && LQ(null, this.focused, (0, DC.A)(this.focused))
      }
      pickPreferred(CC) {
        var zC;
        return null !== (zC = this.layerKey ? this.findRemembered(CC, this.layerKey) : null) && void 0 !== zC ? zC : this.pickInitial(CC, {
          waitForContent: !0
        })
      }
      findRemembered(CC, zC) {
        return this.memory.has(zC) ? this.memory.recall(zC, this.getEnabledCandidates(CC)) : null
      }
      getHandoff() {
        var CC, zC, ZC;
        const QC = null !== (CC = this.focused) && void 0 !== CC && CC.isConnected ? this.focused : null,
          wC = null !== (zC = this.layerRoot) && void 0 !== zC && zC.isConnected ? this.layerRoot : null;
        return {
          point: QC ? (0, DC.A)(QC) : null !== (ZC = this.lastFocusedCentre) && void 0 !== ZC ? ZC : this.getLayerStartPoint(wC),
          element: QC,
          direction: null
        }
      }
      getLayerStartPoint(CC) {
        if (!CC) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const zC = this.pickInitial(CC, {
          includeDisabled: !0
        });
        return (0, DC.A)(null !== zC && void 0 !== zC ? zC : CC)
      }
      takeOver(CC, zC, ZC) {
        const {
          element: QC,
          direction: wC,
          point: bC
        } = zC, nC = QC instanceof HTMLElement && (0, kC.o)(QC, CC) ? QC : null;
        if (!wC) {
          const zC = this.focused;
          return nC ? this.setFocus(nC, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(CC, bC), void(this.focused && this.focused === zC && this.focused.isConnected && LQ(null, this.focused, (0, DC.A)(this.focused)))
        }
        if (this.dpadRepeats.get(wC).update(!0, ZC), nC) return this.setFocus(nC, {
          scroll: !1,
          byUser: !0
        }), void this.move(CC, wC, ZC, !0);
        const fC = this.getEnabledCandidates(CC),
          oC = fC.map(UQ),
          qC = RZ(new DOMRect(bC.x, bC.y, 0, 0), oC, wC),
          FC = qC >= 0 ? qC : iZ(bC, oC);
        this.setFocus(FC >= 0 ? fC[FC] : this.pickInitial(CC), {
          byUser: !0
        })
      }
      focusNearest(CC, zC) {
        const ZC = this.getEnabledCandidates(CC),
          QC = iZ(zC, ZC.map(UQ));
        this.setFocus(QC >= 0 ? ZC[QC] : this.pickInitial(CC), {
          byUser: !0
        })
      }
      pickDefault(CC) {
        let {
          includeDisabled: zC = !1,
          exclude: ZC = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const QC = [...CC.querySelectorAll(TQ)].filter((QC => (null === ZC || void 0 === ZC || !ZC.has(QC)) && (zC ? (0, kC.s)(QC, CC) : (0, kC.o)(QC, CC)))),
          wC = lQ(QC.map(HQ));
        return wC >= 0 ? QC[wC] : null
      }
      pickNewAreaStart(CC, zC) {
        const ZC = [...CC.querySelectorAll(jQ)].filter(kC.m);
        for (const QC of [...(0, kC.g)(CC), ...ZC]) {
          if (zC.has(QC)) continue;
          const CC = this.getEnabledCandidates(QC),
            ZC = lQ(CC.map(HQ));
          if (ZC >= 0) return CC[ZC]
        }
        return null
      }
      pickInitial(CC) {
        let {
          includeDisabled: zC = !1,
          waitForContent: ZC = !1,
          enteredAtMs: QC = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const wC = this.pickDefault(CC, {
          includeDisabled: zC
        });
        if (wC) return wC;
        const bC = CC => zC ? (0, kC.d)(CC) : this.getEnabledCandidates(CC);
        let nC = [];
        for (const NC of (0, kC.g)(CC))
          if (nC = bC(NC), nC.length > 0) break;
        if (0 === nC.length) {
          if (ZC && performance.now() - QC < 1e4 && (0, kC.l)(CC)) return null;
          nC = bC(CC)
        }
        const fC = nC.map(UQ),
          oC = EC(null),
          qC = nC.filter(((CC, zC) => lC(fC[zC], oC))),
          FC = qC.length > 0 ? qC : nC,
          WC = lQ(FC.map(HQ));
        return WC >= 0 ? FC[WC] : null
      }
      validateFocus(CC, zC) {
        if (this.pendingFocus) {
          var ZC, QC;
          const wC = this.pendingFocus.find();
          if (wC && (0, kC.o)(wC, CC.root)) return this.pendingFocus = null, void this.setFocus(wC, {
            byUser: !0
          });
          zC > this.pendingFocus.untilMs && (null === (ZC = (QC = this.pendingFocus).holdWhile) || void 0 === ZC || !ZC.call(QC)) && (this.pendingFocus = null)
        }
        const wC = this.focused,
          bC = !!wC && (0, kC.o)(wC, CC.root);
        if (!(!bC && wC && wC === this.lastActivated && zC - this.lastActivatedAtMs < 5e3 && CC.root.contains(wC) && (0, kC.m)(wC) && (0, kC.p)(wC))) {
          if (!bC && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = zC, void this.restoreLayerFocus(CC.root, !0);
          if ((!bC || !this.movedInLayer && !this.scrolledInLayer) && !(zC - this.lastRefocusCheckMs < (bC ? 200 : 50)))
            if (this.lastRefocusCheckMs = zC, bC) {
              const ZC = zC - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(CC.root) : null,
                QC = null !== ZC && void 0 !== ZC ? ZC : this.restoredFromMemory ? null : this.pickDefault(CC.root);
              QC && QC !== wC && this.setFocus(QC)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const zC = this.pendingFocus;
                return this.focusNearest(CC.root, this.lastFocusedCentre), void(this.pendingFocus = zC)
              }
              this.setFocus(this.pickPreferred(CC.root))
            }
        }
      }
      handleButtons(CC, zC) {
        if (CC.wasPressed((0, FC.i)("menuToggleCursor"))) return AQ(this.getHandoff()), !0;
        if (CC.wasPressed((0, FC.i)("menuBack"))) {
          const CC = (0, DC.i)(zC.root);
          return CC ? this.setFocus(CC, {
            byUser: !0
          }) : aZ(this, zC.root) || ((0, DC.g)(zC.root) ? this.returnToOpener(zC.root) : this.backToStrip(zC.root) || FQ()), !0
        }
        const ZC = (0, FC.i)("menuConfirm");
        var QC, wC;
        CC.wasPressed(ZC) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (QC = null === (wC = this.focused) || void 0 === wC ? void 0 : wC.getAttribute("data-pad-repeat")) && void 0 !== QC ? QC : null, this.confirmRepeated = CC.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (CC.wasReleased(ZC)) {
          const CC = this.confirmPressedOn;
          if (this.confirmPressedOn = null, CC && !this.confirmRepeated && CC === this.focused && CC.isConnected && !(0, kC.p)(CC)) {
            const ZC = CC.matches("[data-pad-tab]") ? CC.closest(DQ) : null;
            ZC ? this.enterTab(CC, ZC, zC.root, performance.now()) : this.activate(CC)
          }
          return !0
        }
        return this.repeatConfirm(CC, ZC), kZ(this, CC, zC)
      }
      repeatConfirm(CC, zC) {
        const ZC = this.confirmPressedOn;
        ZC && null !== this.confirmRepeatKey && CC.isHeld(zC) && (ZC === this.focused && ZC.isConnected && !(0, kC.p)(ZC) && ZC.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? ZC.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(ZC)) : this.confirmRepeatKey = null)
      }
      backToStrip(CC) {
        const zC = this.focused;
        if (!(0, NC.k)().menuBackToCategories) return !1;
        const ZC = null !== zC && void 0 !== zC && zC.isConnected ? this.tabStripNav.backToStrip(zC, this.getEnabledCandidates(CC), CC) : null;
        return ZC && this.setFocus(ZC, {
          byUser: !0
        }), null !== ZC
      }
      returnToOpener(CC) {
        const zC = this.lastActivatedKey;
        zC && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var ZC;
          return null !== (ZC = this.getEnabledCandidates(CC).find((CC => (0, DC.C)(CC) === zC))) && void 0 !== ZC ? ZC : null
        })))
      }
      activate(CC) {
        var zC;
        if ((0, YQ.c)(CC) || (0, DC.D)(CC)) return;
        this.lastActivatedKey = null !== (zC = (0, DC.C)(CC)) && void 0 !== zC ? zC : this.lastActivatedKey, this.lastActivated = CC, this.lastActivatedAtMs = performance.now(), this.rememberFocus(CC);
        const ZC = this.layerRoot;
        if (ZC) {
          const zC = new Set(ZC.querySelectorAll(TQ)),
            QC = new Set(ZC.querySelectorAll(`[data-pad-initial-area], ${jQ}`)),
            wC = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var wC;
            return (0, kC.o)(CC, ZC) ? null : null !== (wC = this.pickDefault(ZC, {
              exclude: zC
            })) && void 0 !== wC ? wC : this.pickNewAreaStart(ZC, QC)
          }), 5e3, (() => CC.isConnected && (0, kC.p)(CC) && performance.now() - wC < 6e4))
        }(0, DC.d)(CC), (0, DC.h)(CC)
      }
      handleDirections(CC, zC, ZC, QC) {
        const wC = dZ(zC.layer.kind) ? (0, FC.i)("chat") : null;
        for (const fC of gC.y) {
          this.dpadRepeats.get(fC).update(CC.isHeld(fC), ZC) && (fC !== wC || CC.wasPressed(fC)) && this.move(zC.root, fC, ZC, !0)
        }
        const bC = QC ? (0, gC.i)(CC.leftStick, (0, NC.k)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          nC = this.stickRepeat.update((0, gC.ib)(bC), ZC);
        if (nC && this.move(zC.root, nC, ZC, !0), this.retryMove && ZC >= this.retryMove.atMs) {
          const {
            direction: CC
          } = this.retryMove;
          this.retryMove = null, this.move(zC.root, CC, ZC, !1)
        }
      }
      move(CC, zC, ZC, QC) {
        var wC;
        let bC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (wC = this.tabOpenWait) || void 0 === wC ? void 0 : wC.wait) && zC === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const nC = this.focused;
        if (!nC || !nC.isConnected) {
          const zC = this.pickInitial(CC);
          return void(zC && this.setFocus(zC, {
            byUser: !0
          }))
        }
        const fC = "Left" === zC || "Right" === zC,
          oC = fC ? (0, YQ.c)(nC) : null;
        if (oC) return void oC.adjust("Left" === zC ? -1 : 1);
        const qC = CC => null !== CC.closest("[data-pad-friends-column]"),
          FC = qC(nC),
          WC = UQ(nC),
          NC = fC || nC.closest(DQ) ? null : (CC => {
            const zC = new Map;
            return ZC => {
              const QC = ZC.closest(DQ);
              if (!QC) return !1;
              let wC = zC.get(QC);
              if (void 0 === wC) {
                const ZC = UQ(QC);
                wC = GZ(CC, ZC) && (ZC.right <= CC.left || ZC.left >= CC.right), zC.set(QC, wC)
              }
              return wC
            }
          })(WC),
          MC = null !== nC.closest(tQ),
          gC = this.getEnabledCandidates(CC).filter((CC => CC !== nC && (fC || qC(CC) === FC) && !(null !== NC && void 0 !== NC && NC(CC)) && (MC || !CC.closest(tQ)))),
          SC = gC.map(UQ),
          pC = hC(nC, "y", CC),
          PC = EC(pC);
        if (!bC && !lC(WC, PC)) {
          const CC = gC.filter(((CC, zC) => lC(SC[zC], PC)));
          if (CC.length > 0) {
            const zC = {
              x: PC.left + PC.width / 2,
              y: PC.top + PC.height / 2
            };
            return void this.setFocus(CC[iZ(zC, CC.map(UQ))], {
              byUser: !0
            })
          }
        }
        const GC = fC ? ((CC, zC, ZC) => {
            const QC = UQ(CC),
              wC = CC.closest(DQ),
              bC = wC ? UQ(wC) : null;
            return zC.map(((zC, nC) => {
              const fC = ZC[nC];
              if (fC.bottom > QC.top && fC.top < QC.bottom) return !0;
              const oC = zC.closest(DQ);
              if (wC && bC) return oC !== wC && (null !== oC || fC.bottom <= bC.top || fC.top >= bC.bottom);
              if (oC) return !GZ(QC, UQ(oC));
              let qC = CC;
              for (let ZC = CC.parentElement; ZC && !ZC.contains(zC); ZC = ZC.parentElement) qC = ZC;
              const FC = UQ(qC);
              return fC.right > FC.left && fC.left < FC.right
            }))
          })(nC, gC, SC) : void 0,
          RC = fC && !nC.closest(DQ) ? (CC => CC.map((CC => !CC.closest(mQ))))(gC) : void 0,
          AC = ((CC, zC) => {
            const ZC = [];
            for (let wC = CC; wC; wC = wC.parentElement) ZC.push(wC);
            const QC = new Map;
            return ZC.forEach(((CC, zC) => {
              QC.set(CC, ZC.length - 1 - zC)
            })), zC.map((CC => {
              for (let zC = CC; zC; zC = zC.parentElement) {
                const CC = QC.get(zC);
                if (void 0 !== CC) return CC
              }
              return -1
            }))
          })(nC, gC),
          xC = fC ? "x" : "y",
          JC = hC(nC, xC, CC);
        let IC = RZ(WC, SC, zC, AC, GC, RC);
        if (IC >= 0 && JC && !JC.contains(gC[IC])) {
          const CC = gC.flatMap(((CC, zC) => JC.contains(CC) ? [zC] : [])),
            ZC = zC => zC && CC.map((CC => zC[CC])),
            QC = RZ(WC, CC.map((CC => SC[CC])), zC, CC.map((CC => AC[CC])), ZC(GC), ZC(RC));
          IC = QC >= 0 ? CC[QC] : IC
        }
        if (IC >= 0) return void this.moveTo(nC, gC[IC], gC, CC, zC, bC);
        if (!QC) return;
        const iC = "Right" === zC || "Down" === zC ? 1 : -1;
        if (JC && mC(JC, xC, iC)) {
          const CC = "y" === xC ? JC.clientHeight : JC.clientWidth;
          HC(JC, xC, iC * CC * .5), this.retryMove = {
            direction: zC,
            atMs: ZC + 80
          }
        }
      }
      moveTo(CC, zC, ZC, QC, wC, bC) {
        const nC = this.tabStripNav.findTabContent(CC, zC, ZC);
        nC && "true" !== CC.dataset.padSelected ? this.openTab(CC, nC, QC, wC) : bC && !nC || this.setFocus(this.tabStripNav.redirect(CC, zC, ZC, QC), {
          byUser: !0
        })
      }
      openTab(CC, zC, ZC, QC) {
        const wC = zC.parentElement;
        (0, DC.d)(CC), this.focusWhenFound((() => "true" !== CC.dataset.padSelected ? null : zC.isConnected ? this.tabStripNav.pickContentStart(zC, this.getEnabledCandidates(ZC), ZC) : wC ? this.tabStripNav.pickReplacedContentStart(CC, wC, this.getEnabledCandidates(ZC), ZC) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: QC
        }
      }
      enterTab(CC, zC, ZC, QC) {
        this.move(ZC, (CC => {
          const zC = [...CC.querySelectorAll(cQ)].filter((zC => zC.closest(XQ) === CC));
          if (zC.length >= 2) {
            const CC = zC[0].getBoundingClientRect(),
              ZC = zC[1].getBoundingClientRect();
            return Math.abs(ZC.top - CC.top) > Math.abs(ZC.left - CC.left) ? "Right" : "Down"
          }
          const ZC = CC.getBoundingClientRect();
          return ZC.height > ZC.width ? "Right" : "Down"
        })(zC), QC, !1, !0), this.focused !== CC || this.pendingFocus || this.activate(CC)
      }
      handleScroll(CC, zC) {
        const ZC = (0, gC.i)(CC.rightStick, .2);
        if (0 === ZC.x && 0 === ZC.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const QC = CC.dtMs / 1e3;
        for (const bC of ["x", "y"]) {
          var wC;
          const CC = ZC[bC];
          if (0 === CC) continue;
          const nC = null !== (wC = hC(this.focused, bC, zC.root)) && void 0 !== wC ? wC : YC(zC.root, bC);
          if (!nC) continue;
          const fC = Math.sign(CC) * CC * CC * 1500 * QC + this.scrollRemainder[bC],
            oC = Math.trunc(fC);
          this.scrollRemainder[bC] = fC - oC, 0 !== oC && (HC(nC, bC, oC), this.scrolledInLayer = !0)
        }
      }
    };
    var VQ = ZC(8223);
    var Cw = ZC(8738);
    const zw = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      Zw = {
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
          ...zw,
          minIntervalMs: 1e3
        },
        preview: {
          ...zw,
          minIntervalMs: 0
        }
      };
    const Qw = new class {
        constructor(CC) {
          this.deps = CC, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = CC => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", CC))
          }
        }
        play(CC, zC) {
          const ZC = Zw[CC];
          if (!this.deps.isVibrationOn() || ZC.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const QC = this.lastPlayedMs[CC];
          if (void 0 !== QC && zC - QC < ZC.minIntervalMs) return !1;
          const wC = this.deps.getActuator();
          if (!wC) return !1;
          this.lastPlayedMs[CC] = zC;
          const {
            duration: bC,
            strongMagnitude: nC,
            weakMagnitude: fC
          } = ZC;
          try {
            wC.playEffect("dual-rumble", {
              duration: bC,
              strongMagnitude: nC,
              weakMagnitude: fC
            }).catch(this.logFailure)
          } catch (oC) {
            this.logFailure(oC)
          }
          return !0
        }
      }({
        getActuator: () => (CC => {
          const zC = null === CC || void 0 === CC ? void 0 : CC.vibrationActuator;
          return "function" === typeof(null === zC || void 0 === zC ? void 0 : zC.playEffect) ? zC : null
        })(nC.f.getActiveGamepad()),
        isVibrationOn: () => (0, NC.k)().vibration,
        isPadInUse: MC.k
      }),
      ww = CC => {
        Qw.play(CC, performance.now())
      };
    var bw = ZC(8229),
      nw = ZC(2909),
      fw = ZC(91),
      ow = ZC(38),
      qw = ZC(625);
    class Fw {
      constructor(CC) {
        this.deps = CC
      }
      check() {
        let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const zC = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!zC) return "skipped";
        const ZC = CC ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === ZC || this.deps.readReportedVisitId() === ZC ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(ZC), this.deps.Cg(zC, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const Ww = "controllerUsageReportedVisit";
    var Nw = ZC(1307),
      Mw = ZC(1645),
      gw = ZC(615),
      Sw = ZC(1383),
      pw = ZC(1192);
    const Pw = CC => ({
        translationKey: `controller:${CC}`
      }),
      Gw = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: Pw("padButtonView"),
        Menu: Pw("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: Pw("padButtonDpadUp"),
        Down: Pw("padButtonDpadDown"),
        Left: Pw("padButtonDpadLeft"),
        Right: Pw("padButtonDpadRight"),
        Home: Pw("padButtonHome"),
        LeftStick: Pw("padButtonLeftStick"),
        RightStick: Pw("padButtonRightStick")
      },
      Rw = {
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
          View: Pw("padButtonCreate"),
          Menu: Pw("padButtonOptions")
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
      Aw = (CC, zC) => {
        var ZC;
        const QC = null !== (ZC = Rw[CC][zC]) && void 0 !== ZC ? ZC : Gw[zC];
        return "string" === typeof QC ? QC : (0, wC.u)(pw.h.get().getCurrentLanguageCode(), QC.translationKey)
      },
      xw = CC => {
        let {
          glyph: zC,
          family: ZC,
          className: QC
        } = CC;
        const wC = (0, MC.z)(),
          bC = null !== ZC && void 0 !== ZC ? ZC : wC,
          nC = (0, bw.i)(bC, zC);
        return (0, rC.jsx)("span", {
          className: uC()("ControllerGlyph", QC),
          role: "img",
          "aria-label": Aw(bC, zC),
          style: {
            "--pad-glyph-mask": `url(${nC})`,
            "--pad-glyph-aspect": (0, bw.e)(bC, zC)
          }
        })
      };
    var Jw = ZC(1811);
    const Iw = CC => {
      let {
        action: zC
      } = CC;
      const {
        t: ZC
      } = (0, wC.y)();
      switch (zC.kind) {
        case "reload":
          return (0, rC.jsx)("span", {
            children: ZC("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, rC.jsx)(Jw.e, {
            text: zC.description ? [{
              icon: zC.icon
            }, ` ${zC.description}`] : [{
              icon: zC.icon
            }]
          });
        case "touchButton":
          return (0, rC.jsx)(Jw.e, {
            text: zC.label
          })
      }
    };
    var iw = ZC(8746);
    const vw = CC => {
      let {
        hold: zC
      } = CC;
      return (0, rC.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${zC.holdMs}ms`
        },
        children: (0, rC.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, zC.id)
    };
    var ew = ZC(8762),
      hw = ZC(8768),
      Kw = ZC(8770),
      Yw = ZC(8757);
    const dw = () => {
        const {
          gameState: CC
        } = (0, oC.k)(["gameState"]), zC = (0, MC.w)(), [QC, wC] = (0, XC.useState)(!1), [bC, nC] = (0, XC.useState)(!1);
        return (0, XC.useEffect)((() => {
          "inGame" === CC && wC(!0)
        }), [CC]), (0, XC.useEffect)((() => {
          if (!QC) return;
          let CC = null,
            zC = !1;
          return (gw.z ? Promise.all([ZC.e(72), ZC.e(89), ZC.e(269), ZC.e(189), ZC.e(224), ZC.e(223), ZC.e(88)]).then((() => ZC(40372))).then((CC => CC.startWasmPadGameplay)) : Promise.all([ZC.e(72), ZC.e(232), ZC.e(231), ZC.e(96), ZC.e(75), ZC.e(74), ZC.e(73), ZC.e(185), ZC.e(228), ZC.e(77), ZC.e(89), ZC.e(186), ZC.e(222), ZC.e(95), ZC.e(225), ZC.e(240), ZC.e(120), ZC.e(211), ZC.e(86), ZC.e(241), ZC.e(76), ZC.e(119), ZC.e(242), ZC.e(224), ZC.e(158)]).then((() => ZC(40504))).then((CC => CC.startPadGameplay))).then((ZC => {
            zC || (CC = ZC())
          })).catch((CC => {
            console.error("Pad gameplay failed to load", CC), zC || nC(!0)
          })), () => {
            var ZC;
            zC = !0, null === (ZC = CC) || void 0 === ZC || ZC()
          }
        }), [QC]), (0, XC.useEffect)((() => {
          bC && zC && (nC(!1), Nw.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((CC => {
            !0 === CC && (0, Mw.reloadBloxd)()
          })))
        }), [bC, zC]), (0, rC.jsxs)(rC.Fragment, {
          children: [(0, rC.jsx)(mw, {}), (0, rC.jsx)(Hw, {}), (0, rC.jsx)(Ew, {})]
        })
      },
      mw = () => {
        const {
          t: CC
        } = (0, wC.y)(), zC = (0, MC.w)(), {
          gameState: ZC,
          isUiHidden: QC
        } = (0, oC.k)(["gameState", "isUiHidden"]), {
          hideButtonHints: bC
        } = (0, NC.q)(), nC = (0, iw.g)(), fC = (0, iw.j)(), [qC, WC] = (0, XC.useState)(Kw.c);
        return (0, Sw.c)(Yw.n, WC), !zC || bC || QC || "inGame" !== ZC || !nC && !qC ? null : (0, rC.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [nC && (0, rC.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, rC.jsx)(xw, {
              glyph: (0, FC.i)("actionButton")
            }), (0, rC.jsx)(Iw, {
              action: nC
            }), fC && (0, rC.jsx)("span", {
              className: "PadActionHintMore",
              children: CC("controller:gameplayActionWheelHint")
            })]
          }), qC && (0, rC.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, rC.jsx)(xw, {
              glyph: (0, FC.i)("pickBlock")
            }), (0, rC.jsx)("span", {
              children: CC("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      Hw = () => {
        const {
          t: CC
        } = (0, wC.y)(), zC = (0, MC.w)(), {
          gameState: ZC,
          isUiHidden: QC
        } = (0, oC.k)(["gameState", "isUiHidden"]), [bC, nC] = (0, XC.useState)(ew.c);
        return (0, Sw.c)(Yw.m, nC), zC && !QC && "inGame" === ZC && bC ? (0, rC.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, rC.jsx)("span", {
            children: CC("controller:gameplayDropStack")
          }), (0, rC.jsx)(vw, {
            hold: bC
          })]
        }) : null
      },
      Ew = () => {
        const {
          t: CC
        } = (0, wC.y)(), zC = (0, MC.w)(), {
          gameState: ZC,
          isUiHidden: QC
        } = (0, oC.k)(["gameState", "isUiHidden"]), {
          hideButtonHints: bC
        } = (0, NC.q)(), [nC, fC] = (0, XC.useState)(hw.c);
        return (0, Sw.c)(Yw.l, fC), zC && !QC && "inGame" === ZC && nC ? (0, rC.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!bC && (0, rC.jsx)(xw, {
            glyph: (0, FC.i)("attack")
          }), (0, rC.jsx)("span", {
            children: CC("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var lw = ZC(8774),
      Xw = ZC(1865),
      uw = ZC(2369),
      rw = ZC(8203);
    const sw = CC => CC && !(0, lw.d)(Xw.e.get("shopInfo")),
      Tw = () => {
        const CC = "inGame" === (0, oC.k)(["gameState"]).gameState;
        return (0, uw.e)("shopInfo", (() => {
          (0, rw.h)(sw(CC))
        })), (0, XC.useEffect)((() => {
          (0, rw.h)(sw(CC))
        }), [CC]), null
      },
      aw = () => {
        const {
          t: CC
        } = (0, wC.y)(), {
          hideButtonHints: zC
        } = (0, NC.q)();
        (0, MC.z)();
        const ZC = (0, uz.n)();
        return (0, XC.useEffect)((() => (() => {
          const CC = WC.c.register({
              name: "inventory",
              isActive: wZ.isActive,
              onFrame: wZ.onFrame,
              onDeactivate: wZ.onDeactivate,
              wakePressActs: wZ.wakePressActs
            }),
            zC = CC => {
              wZ.noteRealPointer(CC), wZ.shouldBlockRealPointer(CC) && CC.stopPropagation()
            };
          for (const nC of bZ) window.addEventListener(nC, zC, !0);
          const ZC = (0, OC.k)((() => {
              "inventory" !== WC.c.getActiveConsumerName() && wZ.forgetSurface()
            })),
            QC = CC => {
              const zC = CC.target;
              (0, MC.k)() && (0, LC.k)(zC) && zC.closest(xz) && (0, OC.h)() && (0, OC.r)(zC)
            };
          document.addEventListener("focusout", QC, !0);
          const {
            invalidate: wC,
            onScroll: bC
          } = wZ.targets;
          return document.addEventListener("scroll", bC, !0), window.addEventListener("resize", wC), () => {
            CC(), ZC();
            for (const CC of bZ) window.removeEventListener(CC, zC, !0);
            document.removeEventListener("scroll", bC, !0), document.removeEventListener("focusout", QC, !0), window.removeEventListener("resize", wC), wZ.targets.disconnect()
          }
        })()), []), (0, rC.jsxs)(rC.Fragment, {
          children: [(0, rC.jsx)(tC, {
            placer: wZ.ring,
            className: "InventorySlotCursorRing"
          }), ZC.showing && !zC && (0, rC.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: BC(ZC).map((zC => {
              let {
                actions: QC,
                labelKey: wC
              } = zC;
              return (0, rC.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [QC.map((CC => (0, rC.jsx)(xw, {
                  glyph: (0, FC.i)(CC)
                }, CC))), (0, rC.jsx)("span", {
                  children: CC(`controller:${wC}`)
                }), "inventoryDrop" === wC && ZC.dropStackHold && (0, rC.jsx)(vw, {
                  hold: ZC.dropStackHold
                })]
              }, wC)
            }))
          })]
        })
      },
      tw = [{
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
      Dw = CC => Array.from(CC).map((CC => ({
        type: "char",
        char: CC,
        width: 1
      }))),
      jw = function(CC) {
        return {
          type: "command",
          command: CC,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      yw = [jw("page", 2), jw("otherPage"), jw("caretLeft"), jw("space", 3), jw("caretRight"), jw("close", 1.5), jw("submit", 1.5)],
      Lw = [jw("page", 2), jw("otherPage"), jw("caretLeft"), jw("space", 2), jw("caretRight"), jw("newline"), jw("close", 1.5), jw("submit", 1.5)],
      Uw = [
        [...Dw("1234567890"), jw("backspace")], Dw("qwertyuiop/"), Dw("asdfghjkl'?"), [jw("shift", 2), ...Dw("zxcvbnm,.")]
      ],
      Bw = [
        [...Dw("1234567890"), jw("backspace")], Dw("!@#$%^&*()/"), Dw('-_=+[]{};:"'), Dw("~`|\\<>'\u20ac\xa3,.")
      ],
      Ow = {
        letters: Uw,
        accents: [
          [...Dw("1234567890"), jw("backspace")], Dw("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), Dw("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [jw("shift", 2), ...Dw("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: Bw
      },
      kw = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      Vw = (CC, zC) => "letters" === CC ? zC ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === CC ? "symbols" : "accents"
      },
      Cb = function(CC, zC) {
        const ZC = ((CC, zC) => [...Ow[CC], zC ? Lw : yw])(CC, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === zC) return ZC;
        const QC = Math.min(2, zb(ZC[0]) / zC);
        return [Array.from({
          length: zC
        }, ((CC, zC) => ({
          type: "phrase",
          phraseIndex: zC,
          width: QC
        }))), ...ZC]
      },
      zb = CC => CC.reduce(((CC, zC) => CC + zC.width), 0),
      Zb = CC => Math.max(...CC.map(zb)),
      Qb = (CC, zC) => {
        const ZC = CC[zC.row];
        let QC = (Zb(CC) - zb(ZC)) / 2;
        for (let wC = 0; wC < zC.col; wC++) QC += ZC[wC].width;
        return QC + ZC[zC.col].width / 2
      },
      wb = (CC, zC, ZC) => {
        let QC = 0,
          wC = 1 / 0;
        for (let bC = 0; bC < CC[zC].length; bC++) {
          const nC = Math.abs(Qb(CC, {
            row: zC,
            col: bC
          }) - ZC);
          nC < wC - 1e-9 && (QC = bC, wC = nC)
        }
        return QC
      },
      bb = (CC, zC) => {
        const ZC = Math.max(0, Math.min(CC.length - 1, zC.row));
        return {
          row: ZC,
          col: Math.max(0, Math.min(CC[ZC].length - 1, zC.col))
        }
      },
      nb = (CC, zC, ZC) => "once" === CC && zC - ZC <= 400 ? "caps" : "off" === CC ? "once" : "off",
      fb = (CC, zC) => "once" === CC && (CC => CC.toLowerCase() !== CC.toUpperCase())(zC) ? "off" : CC,
      ob = (CC, zC, ZC) => {
        if ("symbols" === zC || "off" === ZC) return CC;
        const QC = CC.toUpperCase();
        return 1 === QC.length ? QC : CC
      };
    var qb = ZC(8655);
    const Fb = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const Wb = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(CC) {
          return !(CC - this.lastSendMs < 2e3) && (this.lastSendMs = CC, !0)
        }
      },
      Nb = {
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
      Mb = ["hq", "nameTag"],
      gb = CC => {
        const zC = CC.target instanceof HTMLTextAreaElement && !Mb.includes(CC.kind);
        return Cb(CC.page, "chat" === CC.kind ? Fb.length : 0, zC)
      },
      Sb = CC => {
        const zC = CC.getBoundingClientRect(),
          ZC = window.innerHeight,
          QC = zC.top + zC.height / 2 < ZC / 2 ? "bottom" : "top",
          wC = "bottom" === QC ? ZC - zC.bottom - 6 : zC.top - 6;
        return {
          placement: QC,
          maxHeightPx: Math.min(.46 * ZC, Math.max(.3 * ZC, wC))
        }
      },
      pb = CC => {
        (0, hZ.k)(CC) ? (0, hZ.e)().close(): (kQ.noteChosenStop(CC), CC.blur())
      };
    class Pb {
      constructor(CC) {
        this.host = CC, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(CC, zC) {
        this.phraseTexts = CC, this.phrasesFill = zC
      }
      pressKey(CC) {
        const zC = this.host.getState(),
          ZC = gb(zC),
          QC = ZC[CC.row][CC.col];
        this.host.setState({
          ...zC,
          focus: CC,
          preferredX: Qb(ZC, CC)
        }), "char" === QC.type ? this.typeChar(QC.char) : "command" === QC.type ? this.runCommand(QC.command) : this.sendPhrase(QC.phraseIndex)
      }
      runCommand(CC) {
        const zC = this.host.getState();
        switch (CC) {
          case "backspace":
            (0, LC.d)(zC.target);
            break;
          case "space":
            (0, LC.h)(zC.target, " ");
            break;
          case "newline":
            (0, LC.h)(zC.target, "\n");
            break;
          case "caretLeft":
            (0, LC.m)(zC.target, -1);
            break;
          case "caretRight":
            (0, LC.m)(zC.target, 1);
            break;
          case "shift": {
            const CC = performance.now();
            this.host.setState({
              ...zC,
              shift: nb(zC.shift, CC, this.lastShiftPressMs)
            }), this.lastShiftPressMs = CC;
            break
          }
          case "page":
          case "otherPage": {
            const ZC = Vw(zC.page, zC.accentsFirst)[CC];
            this.host.setState({
              ...zC,
              page: ZC,
              focus: bb(gb({
                ...zC,
                page: ZC
              }), zC.focus)
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
            (0, hZ.k)(zC.target) && (0, hZ.e)().selectNextChannel()
        }
      }
      submit() {
        var CC, zC;
        const {
          target: ZC
        } = this.host.getState();
        this.host.hide(), (0, hZ.k)(ZC) ? (0, hZ.e)().submit() : (kQ.noteChosenStop(ZC), null === (CC = (zC = (0, hZ.g)(ZC)).submit) || void 0 === CC || CC.call(zC), document.activeElement === ZC && ZC.blur())
      }
      close() {
        const {
          target: CC
        } = this.host.getState();
        this.host.hide(), pb(CC)
      }
      typeChar(CC) {
        const {
          target: zC,
          page: ZC,
          shift: QC
        } = this.host.getState();
        (0, LC.h)(zC, ob(CC, ZC, QC)), this.host.setState({
          ...this.host.getState(),
          shift: fb(QC, CC)
        })
      }
      sendPhrase(CC) {
        if (this.phrasesFill) {
          const {
            target: zC
          } = this.host.getState(), ZC = this.phraseTexts[CC];
          ZC && (zC.setSelectionRange(0, zC.value.length), (0, LC.h)(zC, ZC))
        } else Wb.claim(performance.now()) && (this.host.hide(), (0, hZ.e)().sendLine(this.phraseTexts[CC]))
      }
    }
    var Gb = ZC(8682);
    const Rb = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      Ab = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class xb {
      constructor(CC, zC) {
        this.host = CC, this.editor = zC, this.lastDirection = null, this.navRepeat = new gC.c((0, SC.d)(Rb)), this.commandRepeats = new Map(tw.filter((CC => {
          let {
            repeats: zC
          } = CC;
          return zC
        })).map((CC => {
          let {
            command: zC
          } = CC;
          return [zC, (0, SC.d)(Ab)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const CC of this.commandRepeats.values()) CC.reset()
      }
      onVisibleFrame(CC) {
        const zC = performance.now();
        for (const {
            command: wC,
            action: bC
          }
          of tw) {
          const ZC = (0, FC.i)(bC),
            QC = this.commandRepeats.get(wC);
          if ((QC ? QC.update(CC.isHeld(ZC), zC) : CC.wasPressed(ZC)) && (this.editor.runCommand(wC), !this.host.getState().visible)) return
        }
        if (CC.wasPressed((0, FC.i)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const ZC = this.readNavDirection(CC);
        this.lastDirection = ZC;
        const QC = this.navRepeat.update(ZC, zC);
        QC && this.navigate(QC)
      }
      onHiddenFrame(CC, zC) {
        var ZC;
        if (CC.wasPressed((0, FC.i)("keyboardClose"))) return void pb(zC);
        const QC = (0, FC.i)("keyboardType");
        if (CC.wasPressed(QC)) return WC.c.consumeButton(QC), void this.host.open(zC);
        const wC = this.readNavDirection(CC),
          bC = null !== wC && wC !== this.lastDirection;
        if (this.lastDirection = wC, !bC || (0, hZ.k)(zC)) return;
        const nC = (null === (ZC = qQ()) || void 0 === ZC ? void 0 : ZC.root.contains(zC)) || null !== zC.closest(".EntireInventoryWrapper");
        pb(zC), nC && WC.c.handOffHeldInput()
      }
      navigate(CC) {
        const zC = this.host.getState();
        if ("Up" === CC && 0 === zC.focus.row && "chat" === zC.kind) return (0, hZ.e)().stepHistory(), void this.host.setState({
          ...zC
        });
        const ZC = ((CC, zC, ZC, QC) => {
          if ("Left" === ZC || "Right" === ZC) {
            const QC = CC[zC.row].length,
              wC = (zC.col + ("Right" === ZC ? 1 : -1) + QC) % QC,
              bC = {
                row: zC.row,
                col: wC
              };
            return {
              pos: bC,
              preferredX: Qb(CC, bC)
            }
          }
          const wC = (zC.row + ("Down" === ZC ? 1 : -1) + CC.length) % CC.length;
          return {
            pos: {
              row: wC,
              col: wb(CC, wC, QC)
            },
            preferredX: QC
          }
        })(gb(zC), zC.focus, CC, zC.preferredX);
        this.host.setState({
          ...zC,
          focus: ZC.pos,
          preferredX: ZC.preferredX
        })
      }
      readNavDirection(CC) {
        for (const zC of gC.y)
          if (CC.isHeld(zC)) return zC;
        return (0, gC.ib)((0, gC.i)(CC.leftStick, (0, NC.k)().moveDeadzone))
      }
    }
    const Jb = ["Up", "Down", "Left", "Right"],
      Ib = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const ib = new class {
      constructor() {
        this.state = Nb, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new Pb(this), this.padInput = new xb(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(CC) {
        const zC = CC.visible !== this.state.visible;
        this.state = CC;
        for (const ZC of this.listeners) ZC();
        zC && qC.o.bp(Gb.b, CC.visible)
      }
      subscribe(CC) {
        return this.listeners.add(CC), () => {
          this.listeners.delete(CC)
        }
      }
      install() {
        const CC = WC.c.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, LC.k)(document.activeElement),
            onFrame: CC => {
              this.onFrame(CC)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: CC => Jb.includes(CC) || !this.state.visible && CC === (0, FC.i)("keyboardType")
          }),
          zC = CC => {
            const zC = CC.target;
            (0, LC.k)(zC) && (zC === this.pendingChatInput || (0, MC.k)() ? this.open(zC) : this.state.visible && zC !== this.state.target && (this.ownedField = null, this.hide()))
          },
          ZC = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          QC = CC => {
            CC.isTrusted && this.state.visible && (CC => !CC.repeat && !Ib.has(CC.key) && !(0, qb.c)(CC.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(CC.key))(CC) && this.hide()
          },
          wC = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...Sb(this.state.target)
            })
          };
        document.addEventListener("focusin", zC, !0), document.addEventListener("focusout", ZC, !0), window.addEventListener("keydown", QC, !0), window.addEventListener("resize", wC);
        const bC = qC.o.subscribe(Yw.e, (() => {
            this.openChat()
          })),
          nC = qC.o.subscribe(Gb.c, (CC => {
            this.openForField(CC)
          }));
        return () => {
          CC(), document.removeEventListener("focusin", zC, !0), document.removeEventListener("focusout", ZC, !0), window.removeEventListener("keydown", QC, !0), window.removeEventListener("resize", wC), qC.o.unsubscribe(bC), qC.o.unsubscribe(nC), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const CC = (0, hZ.e)();
        CC ? document.activeElement !== CC.input ? (this.clearPendingChat(), this.pendingChatInput = CC.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), CC.open()) : this.open(CC.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(CC) {
        (0, LC.k)(CC) ? (document.activeElement !== CC && CC.focus(), document.activeElement === CC && this.open(CC)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", CC)
      }
      open(CC) {
        var zC;
        if (this.clearPendingChat(), this.ownedField = CC, this.state.visible && this.state.target === CC) return;
        this.restoreInputMode(), (0, LC.q)(CC), this.savedInputMode = CC.getAttribute("inputmode"), CC.setAttribute("inputmode", "none");
        const ZC = {
          ...Nb,
          visible: !0,
          target: CC,
          kind: (0, hZ.k)(CC) ? "chat" : null !== (zC = (0, hZ.g)(CC).kind) && void 0 !== zC ? zC : null,
          accentsFirst: (QC = pw.h.get().getCurrentLanguageCode(), kw.has(QC)),
          ...Sb(CC)
        };
        var QC;
        const wC = gb(ZC),
          bC = ((CC, zC) => {
            for (let ZC = 0; ZC < CC.length; ZC++) {
              const QC = CC[ZC].findIndex((CC => "char" === CC.type && CC.char === zC));
              if (-1 !== QC) return {
                row: ZC,
                col: QC
              }
            }
            return null
          })(wC, "q");
        this.padInput.reset(), this.setState({
          ...ZC,
          focus: bC,
          preferredX: Qb(wC, bC)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(Nb))
      }
      onFrame(CC) {
        if (this.releaseLostField()) return;
        const zC = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(CC) : (0, LC.k)(zC) && this.padInput.onHiddenFrame(CC, zC)
      }
      releaseLostField() {
        const CC = this.ownedField;
        return !(null === CC || CC.isConnected && document.activeElement === CC) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: CC
        } = this.state;
        CC && (null === this.savedInputMode ? CC.removeAttribute("inputmode") : CC.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var vb = ZC(8785);
    const eb = new Map(tw.map((CC => {
        let {
          command: zC,
          action: ZC
        } = CC;
        return [zC, ZC]
      }))),
      hb = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      Kb = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        hq: "controller:keyboardTargetBookTitle"
      },
      Yb = CC => {
        const zC = (() => {
          const [, CC] = (0, XC.useReducer)((CC => CC + 1), 0);
          return CC
        })();
        (0, XC.useEffect)((() => {
          if (!CC) return;
          const ZC = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const wC of ZC) CC.addEventListener(wC, zC);
          document.addEventListener("selectionchange", zC);
          const QC = new MutationObserver(zC);
          return QC.observe(CC, {
            attributeFilter: ["placeholder"]
          }), () => {
            QC.disconnect();
            for (const QC of ZC) CC.removeEventListener(QC, zC);
            document.removeEventListener("selectionchange", zC)
          }
        }), [CC, zC])
      },
      db = CC => {
        CC.preventDefault()
      },
      mb = CC => {
        "mouse" !== CC.pointerType && CC.preventDefault()
      },
      Hb = () => {
        var CC;
        const {
          t: zC
        } = (0, wC.y)(), ZC = (() => {
          const [CC, zC] = (0, XC.useState)(ib.getState());
          return (0, XC.useEffect)((() => ib.subscribe((() => {
            zC(ib.getState())
          }))), []), CC
        })(), QC = (0, MC.w)(), bC = (0, XC.useRef)(null);
        (0, NC.q)(), (0, MC.z)(), (0, XC.useEffect)((() => {
          const CC = ib.install(),
            zC = null;
          return () => {
            CC(), null === zC || void 0 === zC || zC()
          }
        }), []);
        const nC = (0, XC.useMemo)((() => Fb.map((CC => zC(CC)))), [zC]),
          fC = ZC.visible && "chat" === ZC.kind ? ZC.target : null;
        Yb(fC);
        const oC = null !== (CC = null === fC || void 0 === fC ? void 0 : fC.value) && void 0 !== CC ? CC : "",
          qC = ((CC, zC, ZC) => {
            if (!CC.startsWith("/")) return [];
            const QC = [];
            for (let wC = zC.length - 1; wC >= 0 && QC.length < ZC; wC--) {
              const ZC = zC[wC].trim();
              ZC.startsWith(CC) && ZC !== CC && !QC.includes(ZC) && QC.push(ZC)
            }
            return QC
          })(oC, oC.startsWith("/") ? (0, vb.h)() : [], Fb.length),
          WC = oC.startsWith("/"),
          gC = WC ? Fb.map(((CC, zC) => {
            var ZC;
            return null !== (ZC = qC[zC]) && void 0 !== ZC ? ZC : ""
          })) : nC;
        if ((0, XC.useEffect)((() => {
            ib.editor.setPhraseRow(gC, WC)
          })), (0, XC.useEffect)((() => {
            const CC = bC.current;
            if (CC) return CC.addEventListener("touchstart", db, {
              passive: !1
            }), () => {
              CC.removeEventListener("touchstart", db)
            }
          }), [ZC.visible]), !ZC.visible) return null;
        const SC = gb(ZC),
          pC = Zb(SC),
          PC = CC => "char" === CC.type ? ob(CC.char, ZC.page, ZC.shift) : "phrase" === CC.type ? gC[CC.phraseIndex] : (CC => {
            switch (CC) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === ZC.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return hb[Vw(ZC.page, ZC.accentsFirst)[CC]];
              case "space":
                return zC("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return zC("chat" === ZC.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(CC.command),
          GC = CC => {
            ib.editor.pressKey(CC)
          };
        return (0, rC.jsxs)("div", {
          ref: bC,
          className: uC()(hZ.o, "top" === ZC.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: ZC.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": SC.length,
            "--pad-keyboard-height": `${ZC.maxHeightPx}px`
          },
          onPointerDown: mb,
          onMouseDown: db,
          children: [(0, rC.jsx)(Eb, {
            target: ZC.target,
            label: ZC.kind ? zC(Kb[ZC.kind]) : ZC.target.placeholder || zC("controller:keyboardTargetText")
          }), (0, rC.jsx)("div", {
            className: "PadKeyboardRows",
            children: SC.map(((CC, zC) => (0, rC.jsx)("div", {
              className: uC()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === CC[0].type
              }),
              children: CC.map(((CC, wC) => {
                const bC = QC && ZC.focus.row === zC && ZC.focus.col === wC,
                  nC = "command" === CC.type ? eb.get(CC.command) : void 0;
                return (0, rC.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: CC.width / pC * 100 + "%"
                  },
                  children: (0, rC.jsxs)("div", {
                    className: uC()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: bC,
                      PadKeyboardKeyCommand: "command" === CC.type,
                      PadKeyboardKeyPhrase: "phrase" === CC.type,
                      PadKeyboardKeyActive: "command" === CC.type && "shift" === CC.command && "off" !== ZC.shift,
                      PadKeyboardKeySubmit: "command" === CC.type && "submit" === CC.command
                    }),
                    role: "button",
                    onClick: () => {
                      GC({
                        row: zC,
                        col: wC
                      })
                    },
                    onTouchEnd: CC => {
                      var ZC, QC;
                      CC.preventDefault(), ZC = CC.changedTouches[0], QC = CC.currentTarget.getBoundingClientRect(), ZC && ZC.clientX >= QC.left && ZC.clientX <= QC.right && ZC.clientY >= QC.top && ZC.clientY <= QC.bottom && GC({
                        row: zC,
                        col: wC
                      })
                    },
                    children: [(0, rC.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: PC(CC)
                    }), QC && nC && (0, rC.jsx)(xw, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, FC.i)(nC)
                    })]
                  })
                }, wC)
              }))
            }, zC)))
          })]
        })
      },
      Eb = CC => {
        let {
          target: zC,
          label: ZC
        } = CC;
        Yb(zC);
        const QC = (0, XC.useRef)(null),
          wC = (0, XC.useRef)(null),
          bC = zC instanceof HTMLTextAreaElement;
        (0, XC.useLayoutEffect)((() => {
          const CC = QC.current,
            zC = wC.current;
          bC ? CC.scrollTop = zC.offsetTop - CC.clientHeight / 2 : CC.scrollLeft = zC.offsetLeft - CC.clientWidth / 2
        }));
        const {
          value: nC,
          start: fC,
          end: oC
        } = (0, LC.t)(zC), qC = "password" === zC.type ? "\u2022".repeat(nC.length) : nC;
        return (0, rC.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, rC.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: ZC
          }), (0, rC.jsxs)("div", {
            ref: QC,
            className: uC()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: bC
            }),
            children: [(0, rC.jsx)("span", {
              children: qC.slice(0, fC)
            }), (0, rC.jsx)("span", {
              ref: wC,
              className: "PadKeyboardCaret"
            }), fC !== oC && (0, rC.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: qC.slice(fC, oC)
            }), (0, rC.jsx)("span", {
              children: qC.slice(oC)
            }), 0 === qC.length && zC.placeholder && zC.placeholder !== ZC && (0, rC.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: zC.placeholder
            })]
          })]
        })
      };
    var lb = ZC(1347),
      Xb = ZC(3407);
    const cb = function() {
        for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
        return zC.map(FC.i)
      },
      ub = (CC, zC) => {
        const ZC = tZ(CC);
        return ZC ? [{
          glyphs: [ZC],
          labelKey: zC
        }] : []
      },
      rb = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      sb = "--pad-hint-bar-clearance",
      Tb = "[data-pad-hint-bar-avoid]",
      ab = CC => {
        const zC = [];
        for (const ZC of CC)(0, kC.m)(ZC) && zC.push(ZC.getBoundingClientRect());
        return zC
      },
      tb = CC => {
        if (!CC) return null;
        const zC = qQ(),
          ZC = zC ? ab(((CC, zC) => {
            const ZC = CC.closest(Tb);
            return ZC ? [ZC] : ("popup" === zC ? document : CC).querySelectorAll(Tb)
          })(zC.root, zC.layer.kind)) : [],
          QC = !zC || zC.root.hasAttribute("data-pad-shows-hud");
        if (((0, Xb.i)(null === zC || void 0 === zC ? void 0 : zC.layer.kind, (0, Xb.m)()) || QC) && ZC.push(...ab(document.querySelectorAll(rb.join(",")))), 0 === ZC.length) return null;
        const {
          width: wC,
          height: bC
        } = CC.getBoundingClientRect(), nC = window.innerHeight - 8, fC = (0, Xb.p)(nC, {
          width: wC,
          height: bC
        }, window.innerWidth / 2, ZC, 8);
        return fC === nC ? null : Math.round(window.innerHeight - fC)
      },
      Db = CC => {
        const zC = document.documentElement.style,
          ZC = CC ? `${Math.round(window.innerHeight-CC.getBoundingClientRect().top)}px` : "";
        zC.getPropertyValue(sb) !== ZC && (ZC ? zC.setProperty(sb, ZC) : zC.removeProperty(sb))
      },
      jb = () => {
        const {
          t: CC
        } = (0, wC.y)(), {
          hideButtonHints: zC
        } = (0, NC.q)(), ZC = (0, MC.w)(), [QC, bC] = (0, XC.useState)(!1), [nC, qC] = (0, XC.useState)([]), [SC, pC] = (0, XC.useState)(null), PC = (0, XC.useRef)(null), GC = (0, XC.useRef)(null);
        (0, Sw.c)(Gb.b, (CC => {
          bC(CC)
        })), (0, Sw.c)(Xb.n, (() => {
          var CC;
          null === (CC = GC.current) || void 0 === CC || CC.call(GC)
        }));
        const RC = ZC && !zC && !QC;
        return (0, XC.useEffect)((() => {
          if (!RC) return;
          let CC = null;
          const zC = () => {
            const zC = (() => {
                var CC;
                const zC = WC.c.getActiveConsumerName(),
                  ZC = (0, Xb.h)();
                if (ZC) {
                  const CC = (0, FC.i)(ZC),
                    zC = "emoteWheel" === ZC && "wheel" === (0, NC.k)().emoteButton || !(0, gC.I)(WC.c.getLastFrame().values, CC) ? {
                      glyphs: cb("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [CC],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, FC.u)(CC)],
                    labelKey: "controller:wheelChoose"
                  }, zC, {
                    glyphs: cb("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const QC = qQ();
                if (!QC || "focus" !== zC && "cursor" !== zC) return (0, Xb.e)(FC.i);
                const wC = [],
                  bC = {
                    glyphs: cb("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  nC = (0, DC.y)(QC.root),
                  fC = nC ? !(0, kC.p)(nC) : Boolean(QC.layer.close),
                  qC = !nC && QC.layer.closeLabelKey ? QC.layer.closeLabelKey : bC.labelKey,
                  MC = fC ? [{
                    ...bC,
                    labelKey: qC
                  }] : [],
                  SC = dZ(QC.layer.kind) ? [{
                    glyphs: cb("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === zC) return wC.push({
                  glyphs: cb("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), wC.push({
                  glyphs: cb("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), wC.push(...MC), wC.push(...SC), wC.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), iQ() && wC.push({
                  glyphs: cb("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), wC;
                const pC = kQ.getFocused();
                pC && (0, YQ.c)(pC) ? wC.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : pC && (0, DC.D)(pC) ? wC.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : wC.push({
                  glyphs: cb("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const PC = pC ? null === (CC = NZ(pC)) || void 0 === CC ? void 0 : CC.dataset.padSecondary : void 0;
                PC && wC.push({
                  glyphs: cb("menuSecondary"),
                  labelKey: PC
                }), wC.push(...null !== pC && void 0 !== pC && pC.closest("[data-pad-friends-column]") ? [bC] : MC), wC.push(...SC);
                const GC = "home" === QC.layer.kind;
                yZ(QC.root) || !lZ(QC.root) && !LZ(QC) ? GC && wC.push({
                  glyphs: cb("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : wC.push({
                  glyphs: cb("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), GC && (wC.push(...ub("inventory", "controller:menusFriends")), PC || wC.push({
                  glyphs: cb("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), wC.push(...ub("pause", "controller:menusSettings")), wC.push(...ub("leaderboard", "controller:menusNotifications")));
                const RC = oC.b.get("openEverythingMenuName");
                return "inGame" === oC.b.get("gameState") && "popup" !== QC.layer.kind && null !== RC && ((0, oZ.l)(RC) ? wC.push(...ub("leaderboard", "controller:menusClose")) : RC !== fZ.o.LOBBY_LEADERBOARD && wC.push(...ub("leaderboard", "controller:menusLobby"))), wC.push({
                  glyphs: cb("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), wC
              })(),
              ZC = tb(PC.current),
              QC = ((CC, zC) => `${CC.map((CC=>`${CC.glyphs.join("+")}:${CC.labelKey}`)).join("|")}@${zC}`)(zC, ZC);
            QC !== CC && (CC = QC, (0, fC.unstable_batchedUpdates)((() => {
              qC(zC), pC(ZC)
            }))), Db(PC.current)
          };
          zC(), GC.current = zC;
          const ZC = requestAnimationFrame(zC),
            QC = setInterval(zC, 150);
          return () => {
            GC.current = null, cancelAnimationFrame(ZC), clearInterval(QC), Db(null)
          }
        }), [RC]), (0, XC.useLayoutEffect)((() => {
          if (!RC) return;
          if (0 === nC.length) return void Db(null);
          const CC = tb(PC.current);
          CC === SC ? Db(PC.current) : pC(CC)
        }), [RC, nC, SC]), RC && 0 !== nC.length ? (0, rC.jsx)("div", {
          ref: PC,
          className: "PadButtonHintBar SmallTextBold",
          style: null === SC ? void 0 : {
            bottom: SC
          },
          "aria-hidden": !0,
          children: nC.map((zC => (0, rC.jsxs)("div", {
            className: "PadButtonHint",
            children: [zC.glyphs.map((CC => (0, rC.jsx)(xw, {
              glyph: CC,
              className: "PadButtonHintGlyph"
            }, CC))), (0, rC.jsx)("span", {
              children: CC(zC.labelKey)
            })]
          }, zC.labelKey)))
        }) : null
      };
    var yb = ZC(1654);
    const Lb = [kC.b, "label", "[data-pad-slider]"].join(","),
      Ub = "data-pad-cursor-probe",
      Bb = CC => {
        var zC;
        const ZC = (CC => {
          const zC = [];
          for (let QC = CC; QC && QC !== document.body && QC !== document.documentElement && (zC.push(QC), !(zC.length > 8)); QC = QC.parentElement);
          const ZC = document.documentElement.classList.contains(MC.p) ? zC[zC.length - 1] : void 0;
          null === ZC || void 0 === ZC || ZC.setAttribute(Ub, "");
          try {
            return zC.map((CC => ({
              element: CC,
              cursor: getComputedStyle(CC).cursor
            })))
          } finally {
            null === ZC || void 0 === ZC || ZC.removeAttribute(Ub)
          }
        })(CC);
        if ("pointer" !== (null === (zC = ZC[0]) || void 0 === zC ? void 0 : zC.cursor)) return null;
        let QC = 0;
        for (; QC + 1 < ZC.length && "pointer" === ZC[QC + 1].cursor;) QC++;
        return ZC[QC].element
      },
      Ob = (CC, zC, ZC, QC) => {
        const wC = QC.root.contains(CC) ? QC.root : null;
        for (let bC = CC; bC && bC !== document.body && bC !== document.documentElement; bC = bC.parentElement) {
          if (bC instanceof HTMLElement && eC(bC, zC) && mC(bC, zC, ZC)) return bC;
          if (bC === wC) break
        }
        return "home" === QC.layer.kind || "gamePage" === QC.layer.kind ? ((CC, zC) => {
          const ZC = document.scrollingElement;
          return ZC instanceof HTMLElement && ![document.documentElement, document.body].some((zC => {
            const ZC = getComputedStyle(zC),
              QC = "y" === CC ? ZC.overflowY : ZC.overflowX;
            return "hidden" === QC || "clip" === QC
          })) && mC(ZC, CC, zC) ? ZC : null
        })(zC, ZC) : null
      };
    const kb = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, SC.d)(gC.s), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const CC = WC.c.register({
              name: "cursor",
              isActive: () => "cursor" === vQ(),
              onFrame: CC => {
                this.onFrame(CC)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: CC => (0, WC.d)(CC) || CC === (0, FC.i)("menuConfirm") && (0, DC.G)((0, MC.b)())
            }),
            zC = (0, zQ.j)((CC => {
              const zC = CC.getRoot();
              zC && this.layerPoints.delete(zC), zC === this.layerRoot && (this.layerRoot = null)
            })),
            ZC = qC.o.subscribe("appManagerUpdated|activeInputDevice", (CC => {
              "gamepad" !== CC && this.active && !this.hidden && this.hide()
            }));
          return () => {
            CC(), zC(), qC.o.unsubscribe(ZC), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, MC.k)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.bp()
        }
        activate(CC) {
          this.active = !0, this.hidden = !1;
          const zC = xQ();
          !zC || zC.root && zC.root !== CC.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(CC), this.jumpTo(zC.point))
        }
        jumpTo(CC) {
          this.state = {
            x: CC.x,
            y: CC.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.bp())
        }
        onFrame(CC) {
          const zC = qQ();
          if (!zC) return;
          if (this.active || this.activate(zC), this.followPage(zC)) return;
          this.followLayer(zC);
          const ZC = CC.wokeDevice ? (0, MC.b)() : null;
          if (ZC && this.jumpTo(ZC), !(0, MC.k)()) return void this.hide();
          const QC = (0, FC.i)("menuToggleCursor");
          if (CC.wasPressed(QC)) return WC.c.consumeButton(QC), void AQ(this.getHandoff(null));
          if (this.handBackToFocus(CC)) return;
          const wC = (0, FC.i)("menuConfirm"),
            bC = (0, FC.i)("menuSecondary");
          if (CC.wasPressed((0, FC.i)("menuBack"))) return (0, DC.i)(zC.root) || (0, DC.g)(zC.root) || FQ(), void this.bp();
          if (OZ(null, CC, zC)) return CC.wasReleased(wC) && this.press && (this.updateHit(!1), this.updateConfirm(CC, wC)), void this.bp();
          if (document.pointerLockElement) return void this.hide();
          const nC = eQ() ? {
              x: 0,
              y: 0
            } : (CC => {
              const zC = (CC, zC) => (CC ? 1 : 0) - (zC ? 1 : 0);
              return {
                x: zC(CC.isHeld("Right"), CC.isHeld("Left")),
                y: zC(CC.isHeld("Down"), CC.isHeld("Up"))
              }
            })(CC),
            fC = (0, NC.k)().moveDeadzone,
            oC = ((CC, zC) => {
              const ZC = (0, gC.i)(CC, AC(zC));
              return Math.hypot(ZC.x, ZC.y)
            })(CC.leftStick, fC) > 0 || 0 !== nC.x || 0 !== nC.y;
          if (this.hidden) {
            const zC = CC.wasPressed(wC),
              ZC = CC.wasPressed(bC);
            if (!oC && !IC(CC.rightStick) && !zC && !ZC && !CC.wokeDevice) return void this.bp();
            if (this.hidden = !1, this.updateHit(!1), zC || ZC) return zC && (this.press = {
              kind: "ignored"
            }, CC.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.bp()
          }
          this.movePendingPageStart(oC);
          const qC = this.getPoint();
          this.state = JC(this.state, {
            stick: CC.leftStick,
            moveDeadzone: fC,
            dpad: nC,
            dtMs: CC.dtMs,
            cursorSpeedPercent: (0, NC.k)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const SC = this.state.x !== qC.x || this.state.y !== qC.y,
            pC = [wC, bC].some((zC => CC.wasPressed(zC) || CC.wasReleased(zC)));
          (SC || pC || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(SC), this.updateConfirm(CC, wC), this.updateSecondary(CC, bC), this.updateScroll(CC, zC), this.bp()
        }
        followPage(CC) {
          const zC = "home" === CC.layer.kind || "gamePage" === CC.layer.kind,
            ZC = this.page;
          if (this.page = zC ? {
              key: (0, zQ.r)(CC.layer),
              root: CC.root
            } : null, !this.page || !ZC || ZC.root !== CC.root || ZC.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(CC), "hybrid" === RQ()) return pQ = null, gQ = null, PQ.lock(), !0;
          const {
            key: QC
          } = this.page;
          return this.pendingPageStart = {
            root: CC.root,
            key: QC,
            returning: kQ.notePageEnteredByCursor(QC),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(CC) {
          const zC = this.pendingPageStart;
          if (!zC) return;
          if (CC || zC.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const ZC = zC.returning ? kQ.recallStop(zC.root, zC.key) : null;
          if (!ZC && zC.returning && performance.now() - zC.enteredAtMs < 1e3) return;
          const QC = null !== ZC && void 0 !== ZC ? ZC : kQ.pickInitial(zC.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: zC.enteredAtMs
          });
          QC && (this.pendingPageStart = null, this.jumpTo((0, DC.A)(QC)))
        }
        setLayer(CC) {
          this.layerRoot = CC.root, this.layerOrder = CC.order
        }
        followLayer(CC) {
          var zC;
          if (CC.root === this.layerRoot) return;
          null !== (zC = this.layerRoot) && void 0 !== zC && zC.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const ZC = this.layerPoints.get(CC.root),
            QC = ZC && CC.order <= this.layerOrder ? ZC : kQ.getLayerStartPoint(CC.root);
          this.setLayer(CC), this.jumpTo(QC)
        }
        getHandoff(CC) {
          var zC;
          return {
            point: this.getPoint(),
            element: null !== (zC = this.interactive) && void 0 !== zC ? zC : this.findDraggedSliderNearby(),
            direction: CC
          }
        }
        findDraggedSliderNearby() {
          const CC = this.draggedSlider;
          if (null === CC || void 0 === CC || !CC.isConnected) return null;
          const zC = CC.getBoundingClientRect(),
            {
              y: ZC
            } = this.getPoint();
          return ZC >= zC.top - 40 && ZC <= zC.bottom + 40 ? CC : null
        }
        handBackToFocus(CC) {
          if (!eQ()) return !1;
          const zC = gC.y.find((zC => CC.wasPressed(zC)));
          return !!zC && (ZC = this.getHandoff(zC), pQ = NQ(ZC), gQ = null, PQ.lock(), WC.c.handOffHeldInput(), !0);
          var ZC
        }
        getAssistContext() {
          const CC = this.interactive;
          if (null === CC || void 0 === CC || !CC.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const zC = CC.getBoundingClientRect();
          if (zC.width > .4 * window.innerWidth || zC.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const ZC = (0, NC.k)().cursorMagnetism && !(0, yb.d)(CC) && !CC.closest("[data-pad-slider]"),
            QC = this.magnet && this.magnet !== CC && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : zC;
          return {
            overInteractive: !0,
            magnetTarget: ZC ? {
              x: QC.left + QC.width / 2,
              y: QC.top + QC.height / 2
            } : null
          }
        }
        updateHit(CC) {
          this.lastHitTestMs = performance.now();
          const zC = this.getPoint(),
            ZC = document.elementFromPoint(zC.x, zC.y),
            QC = ZC && !(0, PC.u)(ZC) && (CC => {
              var zC;
              const ZC = qQ();
              return !(ZC && !ZC.root.contains(CC) && !CC.closest(".tooltip-container")) || !(null !== (zC = document.getElementById("root")) && void 0 !== zC && zC.contains(CC))
            })(ZC) ? ZC : null;
          if (QC !== this.hit) return (0, DC.p)(this.hit, QC, zC), this.hit = QC, void this.setInteractive(QC ? (CC => {
            const zC = CC.closest(Lb);
            if (zC) {
              var ZC, QC;
              const CC = null !== (ZC = null === (QC = zC.parentElement) || void 0 === QC ? void 0 : QC.closest("[data-pad-focusable]")) && void 0 !== ZC ? ZC : zC;
              return (0, kC.p)(CC) ? {
                element: null,
                magnet: null
              } : {
                element: CC,
                magnet: zC
              }
            }
            const wC = Bb(CC);
            return {
              element: wC,
              magnet: wC
            }
          })(QC) : {
            element: null,
            magnet: null
          });
          CC && QC && (0, DC.p)(QC, QC, zC)
        }
        setInteractive(CC) {
          let {
            element: zC,
            magnet: ZC
          } = CC;
          this.interactive = zC, this.magnet = ZC
        }
        clearHover() {
          this.hit && (0, DC.p)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const CC = this.hit;
          if (!CC || (0, DC.D)(CC)) return {
            kind: "ignored"
          };
          const zC = (0, YQ.c)(CC),
            ZC = CC.closest("[data-pad-slider]");
          return zC && ZC ? {
            kind: "slider",
            slider: ZC,
            adjuster: zC
          } : ((0, DC.t)(CC, this.getPoint()), {
            kind: "pointer",
            target: CC
          })
        }
        applySliderFraction(CC) {
          var zC;
          const ZC = CC.slider.getBoundingClientRect(),
            QC = ZC.height > ZC.width,
            wC = null === (zC = CC.slider.querySelector("[data-pad-slider-handle]")) || void 0 === zC ? void 0 : zC.getBoundingClientRect(),
            bC = wC ? QC ? wC.height : wC.width : 0,
            nC = (QC ? ZC.height : ZC.width) - bC;
          if (nC <= 0) return;
          const fC = QC ? ZC.bottom - bC / 2 - this.state.y : this.state.x - ZC.left - bC / 2;
          CC.adjuster.setFraction(Math.max(0, Math.min(1, fC / nC)))
        }
        updateConfirm(CC, zC) {
          CC.wasPressed(zC) && (this.press = CC.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const ZC = this.press;
          if (!ZC) return;
          if (CC.isHeld(zC)) return "slider" === ZC.kind && this.applySliderFraction(ZC), void this.updateRepeat();
          this.press = null;
          const QC = this.repeated;
          if (this.endRepeat(), !CC.wasReleased(zC)) return void this.endPressWithoutClick(ZC);
          const wC = this.getPoint(),
            bC = this.hit;
          if ("slider" === ZC.kind && ZC.adjuster.endDrag(), "pointer" === ZC.kind) {
            const CC = null !== bC && void 0 !== bC ? bC : ZC.target.isConnected ? ZC.target : null;
            CC && (0, DC.u)(CC, wC);
            const zC = bC && ZC.target.isConnected && !QC ? ((CC, zC) => {
              for (let ZC = CC; ZC; ZC = ZC.parentElement)
                if (ZC.contains(zC)) return ZC;
              return null
            })(ZC.target, bC) : null;
            zC && (kQ.noteCursorActivation(zC), (0, PC.f)(zC, new MouseEvent("click", (0, DC.J)(wC, 0, 0))), (0, DC.h)(zC), (0, DC.I)(zC) && (0, DC.H)(zC))
          }
        }
        beginRepeat() {
          var CC, zC, ZC;
          const QC = null !== (CC = null === (zC = this.hit) || void 0 === zC ? void 0 : zC.closest("[data-pad-repeat]")) && void 0 !== CC ? CC : null;
          this.repeatStop = QC, this.repeatKey = null !== (ZC = null === QC || void 0 === QC ? void 0 : QC.getAttribute("data-pad-repeat")) && void 0 !== ZC ? ZC : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const CC = this.repeatStop;
          if (!CC) return;
          const zC = this.hit;
          CC.isConnected && !(0, kC.p)(CC) && CC.getAttribute("data-pad-repeat") === this.repeatKey && zC && CC.contains(zC) ? CC.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, kQ.noteCursorActivation(CC), (0, PC.f)(CC, new MouseEvent("click", (0, DC.J)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(CC) {
          "slider" === CC.kind && CC.adjuster.endDrag(), "pointer" === CC.kind && CC.target.isConnected && (0, DC.u)(CC.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(CC, zC) {
          CC.wasPressed(zC) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !CC.isHeld(zC) && (this.secondaryArmed = !1, CC.wasReleased(zC) && this.hit && (0, DC.m)(this.hit, this.getPoint(), 2))
        }
        updateScroll(CC, zC) {
          const ZC = iC(CC.rightStick, CC.dtMs);
          if (0 === ZC.x && 0 === ZC.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + ZC.x,
            y: this.scrollRemainder.y + ZC.y
          };
          const QC = Math.trunc(this.scrollRemainder.x),
            wC = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - QC,
            y: this.scrollRemainder.y - wC
          };
          const bC = this.hit;
          if (!bC) return;
          let nC = !1;
          if (0 !== wC) {
            const CC = Ob(bC, "y", wC > 0 ? 1 : -1, zC);
            CC && (CC.scrollBy({
              top: wC,
              behavior: "instant"
            }), nC = !0)
          }
          if (0 !== QC) {
            const CC = Ob(bC, "x", QC > 0 ? 1 : -1, zC);
            CC && (CC.scrollBy({
              left: QC,
              behavior: "instant"
            }), nC = !0)
          }
          nC && (this.lastHitTestMs = -1 / 0)
        }
        bp() {
          yC.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      Vb = () => {
        const CC = (0, XC.useMemo)((() => new aC), []),
          zC = (0, MC.w)();
        return (0, XC.useEffect)((() => {
          if (!zC) return;
          let ZC = 0,
            QC = {
              of: null,
              atMs: 0,
              list: []
            };
          const wC = document.getElementsByClassName(hQ),
            bC = CC => {
              for (const zC of [...wC]) zC !== CC && zC.classList.remove(hQ)
            },
            nC = () => {
              var zC;
              ZC = requestAnimationFrame(nC);
              const wC = (() => {
                const CC = kQ.getFocused();
                if (kQ.isActive() && null !== CC && void 0 !== CC && CC.isConnected) return CC;
                const zC = kb.getHighlighted();
                return null !== zC && void 0 !== zC && zC.isConnected ? zC : null
              })();
              bC(wC), wC && !wC.classList.contains(hQ) && wC.classList.add(hQ);
              const fC = null !== (zC = null === wC || void 0 === wC ? void 0 : wC.closest("[data-pad-reticle-box]")) && void 0 !== zC ? zC : wC;
              CC.show(fC ? ((CC, zC) => {
                let ZC = CC.left,
                  QC = CC.top,
                  wC = CC.right,
                  bC = CC.bottom;
                for (const nC of zC) {
                  if (!nC) continue;
                  const CC = EC(nC);
                  ZC = Math.max(ZC, CC.left), QC = Math.max(QC, CC.top), wC = Math.min(wC, CC.right), bC = Math.min(bC, CC.bottom)
                }
                return wC <= ZC || bC <= QC ? null : {
                  left: ZC,
                  top: QC,
                  width: wC - ZC,
                  height: bC - QC
                }
              })(fC.getBoundingClientRect(), (CC => {
                const zC = performance.now();
                return (QC.of !== CC || zC - QC.atMs > 500) && (QC = {
                  of: CC,
                  atMs: zC,
                  list: [hC(CC, "y"), hC(CC, "x")]
                }), QC.list
              })(fC)) : null)
            };
          return ZC = requestAnimationFrame(nC), () => {
            cancelAnimationFrame(ZC), bC(null), CC.hide()
          }
        }), [zC, CC]), (0, rC.jsx)(tC, {
          placer: CC,
          className: "PadFocusRing"
        })
      },
      Cn = (CC, zC) => {
        CC.style.transform = `translate3d(${zC.x}px, ${zC.y}px, 0)`, CC.classList.toggle("Visible", zC.visible), CC.classList.toggle("Pressed", zC.pressed)
      },
      zn = () => {
        const CC = (0, XC.useRef)(null);
        return (0, XC.useEffect)((() => {
          const zC = yC.subscribe((zC => {
            CC.current && Cn(CC.current, zC)
          }));
          return CC.current && Cn(CC.current, yC.get()), zC
        }), []), (0, rC.jsx)("div", {
          ref: CC,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, rC.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      Zn = "#ncmp__modal.ncmp__active",
      Qn = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(Zn) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(Zn),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      wn = "PadOverThirdParty",
      bn = new Set(Qn.map((CC => CC.id))),
      nn = () => {
        const CC = Qn.map((CC => {
            let {
              id: zC,
              find: ZC,
              startSelectors: QC
            } = CC;
            return (0, zQ.n)({
              id: zC,
              kind: "popup",
              getRoot: () => {
                const CC = ZC(),
                  zC = CC ? ((CC, zC) => {
                    var ZC;
                    for (const QC of zC) {
                      const zC = CC.querySelector(QC);
                      if (zC) return zC
                    }
                    return null !== (ZC = [...CC.querySelectorAll("button")].find((CC => !CC.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== ZC ? ZC : null
                  })(CC, QC) : null;
                if (CC && zC && !zC.hasAttribute("data-pad-default-focus")) {
                  for (const zC of CC.querySelectorAll("[data-pad-default-focus]")) zC.removeAttribute("data-pad-default-focus");
                  for (const zC of CC.querySelectorAll("[data-pad-hint-bar-avoid]")) zC.removeAttribute("data-pad-hint-bar-avoid");
                  zC.setAttribute("data-pad-default-focus", ""), ((CC, zC) => {
                    let ZC = CC;
                    for (let QC = CC.parentElement; QC && zC.contains(QC) && !(QC.getBoundingClientRect().height >= window.innerHeight / 2); QC = QC.parentElement) ZC = QC;
                    return ZC
                  })(zC, CC).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return CC
              },
              close: null,
              memoryKey: null
            })
          })),
          zC = document.documentElement,
          ZC = nC.f.onFrame((() => {
            const CC = (0, MC.k)() ? qQ() : null,
              ZC = !!CC && (QC = CC.layer, bn.has(QC.id));
            var QC;
            zC.classList.contains(wn) !== ZC && zC.classList.toggle(wn, ZC)
          }));
        return () => {
          for (const zC of CC) zC();
          ZC(), zC.classList.remove(wn)
        }
      },
      fn = "PadLargePointer",
      qn = () => {
        (0, XC.useEffect)((() => {
          const CC = (0, PC.n)(document.body),
            zC = kQ.install(),
            ZC = kb.install(),
            QC = nn();
          return () => {
            CC(), zC(), ZC(), QC()
          }
        }), []);
        const {
          largePointer: CC
        } = (0, NC.q)(), zC = (0, lb.p)() && CC;
        return (0, XC.useEffect)((() => {
          if (zC) return document.documentElement.classList.add(fn), () => {
            document.documentElement.classList.remove(fn)
          }
        }), [zC]), (0, fC.createPortal)((0, rC.jsxs)(rC.Fragment, {
          children: [(0, rC.jsx)(jb, {}), (0, rC.jsx)(Vb, {}), (0, rC.jsx)(zn, {})]
        }), document.body)
      };
    var Fn = ZC(8799),
      Wn = ZC(8812),
      Nn = ZC(8803);
    ZC(8815);
    const Mn = (CC, zC) => {
        const [ZC, QC] = (0, XC.useState)(!1), [wC, bC] = (0, XC.useState)(null), nC = (0, XC.useRef)(null), fC = (0, XC.useCallback)((CC => {
          nC.current = CC, bC(CC)
        }), []), oC = (0, XC.useCallback)((() => {
          QC(!1), fC(null)
        }), [fC]), FC = (0, XC.useCallback)((() => {
          QC(!0)
        }), []), WC = (0, XC.useCallback)(((CC, zC) => {
          fC((0, Nn.y)(CC, zC, nC.current))
        }), [fC]);
        (0, XC.useLayoutEffect)((() => (zC(ZC), (0, Xb.t)(CC, ZC), qC.o.bp(Xb.n), () => {
          zC(!1), (0, Xb.t)(CC, !1), qC.o.bp(Xb.n)
        })), [ZC, CC, zC]), (0, Sw.c)("appManagerUpdated|activeInputDevice", (CC => {
          "gamepad" !== CC && oC()
        })), (0, Sw.c)("appManagerUpdated|gameState", (CC => {
          "inGame" !== CC && oC()
        }));
        const NC = () => {
          (0, oZ.s)() && oC()
        };
        return (0, Sw.c)("appManagerUpdated|openEverythingMenuName", NC), (0, Sw.c)("appManagerUpdated|openInGameMenuName", NC), {
          open: ZC,
          picked: wC,
          pickedRef: nC,
          show: FC,
          aim: WC,
          close: oC
        }
      },
      gn = CC => {
        let {
          className: zC,
          slotCount: ZC,
          picked: QC,
          slotLabel: wC,
          renderSlot: bC,
          centre: nC
        } = CC;
        const fC = Array.from({
          length: ZC
        }, ((CC, zC) => zC));
        return (0, rC.jsx)("div", {
          className: uC()("EmoteWheelOverlay PadRadialWheel", zC),
          children: (0, rC.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * Nn.n + "rem",
              height: 2 * Nn.n + "rem"
            },
            children: [(0, rC.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${Nn.k} ${Nn.k}`,
              children: [fC.map((CC => (0, rC.jsx)("path", {
                d: (0, Nn.r)(CC, ZC, Nn.f, Nn.h, Nn.j),
                className: uC()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: CC === QC
                }),
                "aria-label": wC(CC)
              }, CC))), (0, rC.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: Nn.f,
                cy: Nn.f,
                r: Nn.j
              }), (0, rC.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: Nn.f,
                cy: Nn.f,
                r: Nn.h
              }), null !== QC && (0, rC.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, Nn.r)(QC, ZC, Nn.f, Nn.h, Nn.j)
              })]
            }), fC.map((CC => {
              const zC = (0, Nn.u)(CC, ZC);
              return (0, rC.jsx)("div", {
                className: uC()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: CC === QC
                }),
                style: {
                  left: `calc(50% + ${Nn.c*Math.cos(zC)}rem)`,
                  top: `calc(50% + ${Nn.c*Math.sin(zC)}rem)`
                },
                "aria-hidden": !0,
                children: bC(CC)
              }, CC)
            })), (0, rC.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: nC
            })]
          })
        })
      },
      Sn = Fb.length,
      pn = () => {
        const {
          t: CC
        } = (0, wC.y)(), zC = Mn("chat", YZ.r), ZC = (0, XC.useMemo)((() => Fb.map((zC => CC(zC)))), [CC]);
        return (0, Sw.c)(YZ.n, (() => {
          zC.open || (0, Fn.g)() || (0, Wn.u)() || "inGame" !== oC.b.get("gameState") || (0, oZ.s)() || !(0, hZ.e)() || zC.show()
        })), (0, Sw.c)(YZ.e, (CC => {
          zC.open && zC.aim(CC, Sn)
        })), (0, Sw.c)(YZ.l, (() => {
          var CC;
          if (!zC.open) return;
          const QC = zC.pickedRef.current;
          null !== QC ? Wb.claim(performance.now()) && (zC.close(), null === (CC = (0, hZ.e)()) || void 0 === CC || CC.sendLine(ZC[QC])) : zC.close()
        })), (0, Sw.c)(YZ.h, zC.close), zC.open ? (0, rC.jsx)(gn, {
          className: "QuickChatWheel",
          slotCount: Sn,
          picked: zC.picked,
          slotLabel: CC => ZC[CC],
          renderSlot: CC => ZC[CC],
          centre: null !== zC.picked ? ZC[zC.picked] : CC("controller:quickChatPick")
        }) : null
      },
      Pn = () => {
        const {
          t: CC
        } = (0, wC.y)(), zC = Mn("actionButton", Wn.y), [ZC, QC] = (0, XC.useState)([]);
        if ((0, Sw.c)(Wn.o, (CC => {
            zC.open || (0, Fn.g)() || (0, YZ.d)() || "inGame" !== oC.b.get("gameState") || (0, oZ.s)() || (QC(CC), zC.show())
          })), (0, Sw.c)(Wn.e, (CC => {
            zC.open && zC.aim(CC, ZC.length)
          })), (0, Sw.c)(Wn.k, (() => {
            if (!zC.open) return;
            const CC = zC.pickedRef.current;
            zC.close(), null !== CC && qC.o.bp(Wn.r, ZC[CC])
          })), (0, Sw.c)(Wn.i, zC.close), !zC.open) return null;
        const bC = null !== zC.picked ? ZC[zC.picked] : null;
        return (0, rC.jsx)(gn, {
          className: "ActionWheel",
          slotCount: ZC.length,
          picked: zC.picked,
          slotLabel: zC => {
            const QC = ZC[zC];
            return "reload" === QC.kind ? CC("controller:gameplayReload") : "customButton" === QC.kind ? QC.description || QC.icon : "touchButton" === QC.kind && "string" === typeof QC.label ? QC.label : ""
          },
          renderSlot: CC => (0, rC.jsx)(Iw, {
            action: ZC[CC]
          }),
          centre: bC ? (0, rC.jsx)(Iw, {
            action: bC
          }) : CC("controller:actionWheelPick")
        })
      };
    var Gn = ZC(77);
    const Rn = () => ((0, XC.useEffect)((() => {
        var CC, zC;
        const ZC = (0, PC.n)(document.getElementById("root")),
          QC = (0, MC.f)(),
          wC = (() => {
            const CC = [qC.o.subscribe(Cw.f, (() => {
                ww("blockBreak")
              })), qC.o.subscribe("damagedByOtherPlayer", (() => {
                ww("damage")
              })), qC.o.subscribe("yourAttackHit", (CC => {
                let {
                  hitSelf: zC
                } = CC;
                zC || ww("hit")
              }))],
              zC = nC.f.onActivePadChanged((CC => {
                CC && ww("connect")
              }));
            return () => {
              for (const zC of CC) qC.o.unsubscribe(zC);
              zC()
            }
          })(),
          bC = (() => {
            const CC = new Fw({
              getVisitId: qw.d,
              peekVisitId: qw.peekVisitSessionId,
              readReportedVisitId: () => {
                const CC = ow.k.getItem(Ww);
                return "string" === typeof CC ? CC : null
              },
              writeReportedVisitId: CC => {
                ow.k.setItem(Ww, CC)
              },
              isPadActive: MC.k,
              getPadFamily: () => {
                var CC, zC;
                return null !== (CC = null === (zC = nC.f.getActivePad()) || void 0 === zC ? void 0 : zC.family) && void 0 !== CC ? CC : null
              },
              canReport: nw.g,
              getInputType: fw.c,
              Cg: nw.l
            });
            let zC = 0,
              ZC = null;
            const QC = wC => {
                null === ZC && ("notReady" !== CC.check(wC) || null !== ZC || zC >= 20 || (zC++, ZC = setTimeout((() => {
                  ZC = null, QC(!1)
                }), 3e3)))
              },
              wC = qC.o.subscribe("appManagerUpdated|activeInputDevice", (() => {
                QC(!0)
              })),
              bC = (0, qw.j)((() => {
                zC = 0, QC(!0)
              }));
            return () => {
              qC.o.unsubscribe(wC), bC(), null !== ZC && clearTimeout(ZC)
            }
          })(),
          fC = nC.f.onFrame(((CC, zC) => {
            const ZC = (0, MC.o)(CC);
            WC.c.dispatch(CC, zC, ZC)
          }));
        let FC = null !== (CC = null === (zC = nC.f.getActivePad()) || void 0 === zC ? void 0 : zC.family) && void 0 !== CC ? CC : null;
        const gC = nC.f.onActivePadChanged((CC => {
            var zC, ZC;
            (WC.c.reset(), (0, MC.s)(), qC.o.bp(nC.e, CC), (null !== (zC = null === CC || void 0 === CC ? void 0 : CC.family) && void 0 !== zC ? zC : null) !== FC) && (FC = null !== (ZC = null === CC || void 0 === CC ? void 0 : CC.family) && void 0 !== ZC ? ZC : null, qC.o.bp(NC.e, (0, NC.k)()));
            !CC && (0, MC.k)() && (0, MC.u)(oC.b.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          SC = () => {
            "visible" !== document.visibilityState && WC.c.clear()
          },
          pC = () => {
            WC.c.clear()
          };
        document.addEventListener("visibilitychange", SC), window.addEventListener("blur", pC), nC.f.start(), (0, bw.n)();
        const GC = null;
        return () => {
          ZC(), QC(), wC(), bC(), fC(), gC(), document.removeEventListener("visibilitychange", SC), window.removeEventListener("blur", pC), nC.f.stop(), null === GC || void 0 === GC || GC()
        }
      }), []), (0, rC.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, rC.jsx)(dw, {}), (0, rC.jsx)(Tw, {}), (0, rC.jsx)(aw, {}), (0, rC.jsx)(Hb, {}), (0, rC.jsx)(qn, {}), (0, rC.jsx)(pn, {}), (0, rC.jsx)(Pn, {})]
      })),
      An = () => Gn.featureFlags.useControllerSupport ? (0, rC.jsx)(Rn, {}) : null;
    var xn = ZC(8190),
      Jn = ZC(8824);
    const In = new Set(bw.l),
      vn = CC => `${Jn.n}${(0,NC.l)()}/${CC}`,
      en = CC => {
        if (!(0, Jn.j)(CC)) return null;
        const [zC, ZC] = CC.slice(Jn.n.length).split("/");
        return (0, xn.f)(zC) && In.has(ZC) ? (0, bw.i)(zC, ZC) : null
      };
    var hn = ZC(8831);
    const Kn = () => {
        const {
          t: CC
        } = (0, wC.y)(), zC = (0, MC.w)(), {
          gameState: ZC,
          isUiHidden: QC
        } = (0, oC.k)(["gameState", "isUiHidden"]), {
          hideButtonHints: bC,
          sneakMode: nC
        } = (0, NC.q)(), [fC, qC] = (0, XC.useState)(hn.b);
        return (0, Sw.c)(Yw.q, qC), zC && !QC && "inGame" === ZC && fC ? (0, rC.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!bC && (0, rC.jsx)(xw, {
            glyph: (0, FC.i)("toggle" === nC ? "sneak" : "sneakToggle")
          }), (0, rC.jsx)("span", {
            children: CC("controller:gameplaySneaking")
          })]
        }) : null
      },
      Yn = 12,
      dn = CC => {
        let {
          trigger: zC,
          className: ZC,
          children: QC
        } = CC;
        const wC = (0, XC.useRef)(null);
        return (0, XC.useEffect)((() => {
          let CC = 0;
          const ZC = hC(zC, "y"),
            QC = () => {
              CC = requestAnimationFrame(QC);
              const bC = wC.current;
              if (!bC || null === zC || void 0 === zC || !zC.isConnected) return;
              const {
                left: nC,
                top: fC
              } = function(CC, zC, ZC) {
                let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const bC = CC.left + CC.width / 2,
                  nC = Math.max(Yn, ZC.width - Yn - zC.width),
                  fC = Math.min(Math.max(bC - zC.width / 2, Yn), nC),
                  oC = ZC.height - QC;
                let qC = 0,
                  FC = oC;
                if (wC) {
                  const CC = Math.max(0, wC.top),
                    QC = Math.min(oC, wC.bottom);
                  QC - CC >= Math.max(ZC.height / 2, zC.height + 24) && (qC = CC, FC = QC)
                }
                const WC = CC.top + CC.height / 2 < (qC + FC) / 2 ? FC - Yn - zC.height : qC + Yn;
                return {
                  left: fC,
                  top: Math.max(Yn, WC)
                }
              }(zC.getBoundingClientRect(), {
                width: bC.offsetWidth,
                height: bC.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(sb)) || 0, null !== ZC && void 0 !== ZC && ZC.isConnected ? ZC.getBoundingClientRect() : null);
              bC.style.transform = `translate3d(${Math.round(nC)}px, ${Math.round(fC)}px, 0)`, bC.style.visibility = "visible"
            };
          return QC(), () => {
            cancelAnimationFrame(CC)
          }
        }), [zC]), (0, rC.jsx)("div", {
          ref: wC,
          className: ZC,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: QC
        })
      };
    var mn = ZC(1013),
      Hn = ZC(8838),
      En = ZC(1388),
      Xn = ZC(8844),
      cn = ZC(8847);
    const un = {
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
      rn = () => {
        const {
          t: CC
        } = (0, wC.y)(), zC = (0, MC.w)(), ZC = (0, Hn.d)(), QC = (0, uw.h)("_tasks"), bC = (0, uw.h)("_availableLeaderboards");
        if (!zC) return null;
        const nC = (CC => {
          let {
            hasShop: zC,
            hasTasksOrLeaderboards: ZC,
            canInvite: QC
          } = CC;
          const wC = [];
          return zC && wC.push("shop"), ZC && wC.push("tasks"), QC && wC.push("invite"), wC.push("leave"), wC
        })({
          hasShop: ZC,
          hasTasksOrLeaderboards: !(!QC && !bC),
          canInvite: !!Gn.featureFlags.canUseInviteLinks
        });
        return (0, rC.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: nC.map((zC => {
            const {
              icon: ZC,
              labelKey: QC
            } = un[zC], wC = "leave" === zC ? En.I : En.g;
            return (0, rC.jsx)(wC, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (CC => {
                  switch (CC) {
                    case "shop":
                      return qC.o.bp(cn.m), void oC.b.set({
                        openEverythingMenuName: fZ.o.SHOP
                      });
                    case "tasks":
                      return void qC.o.bp("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void qC.o.bp("toggleMenu", "inviteLink");
                    case "leave":
                      (0, Xn.c)()
                  }
                })(zC)
              },
              children: (0, rC.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, rC.jsx)(mn.c, {
                  name: ZC
                }), (0, rC.jsx)("span", {
                  children: CC(QC)
                })]
              })
            }, zC)
          }))
        })
      };
    var sn = ZC(1887);
    const Tn = gC.x,
      an = ["forward", "backward", "left", "right", "sprint"],
      tn = CC => CC.ctrlKey || CC.altKey || "Alt" === CC.key || "ArrowUp" === CC.key || "ArrowDown" === CC.key || "Tab" === CC.code || "/" === CC.key || "Slash" === CC.code;
    class Dn {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(gC.V).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(CC) {
        this.armed = CC
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || zC ? !CC.repeat && this.swallowedKeys.delete(CC.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(CC.code),
          continues: !1
        } : "Escape" === CC.key || CC.repeat && !this.swallowedKeys.has(CC.code) ? {
          swallow: !1,
          continues: !1
        } : ZC ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(CC.code), {
          swallow: !0,
          continues: (0, MC.i)(CC)
        })
      }
      onKeyUp(CC) {
        return this.swallowedKeys.delete(CC.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const wC = (0, gC.q)(CC.values, this.previousHeld),
          bC = null === ZC ? -1 : (0, gC.k)(ZC),
          nC = bC >= 0 && wC[bC] && !this.previousHeld[bC],
          fC = wC.some(((CC, zC) => CC && !this.previousHeld[zC] && zC !== bC)),
          oC = Math.hypot(CC.leftStick.x, CC.leftStick.y) >= Tn,
          qC = Math.hypot(CC.rightStick.x, CC.rightStick.y) >= Tn,
          FC = oC && !this.leftStickWasPressed || qC && !this.rightStickWasPressed;
        this.previousHeld = wC, this.leftStickWasPressed = oC, this.rightStickWasPressed = qC;
        let WC = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, WC = !0);
        const NC = !zC && nC && !QC,
          MC = !NC && this.armed && !zC && (fC || FC);
        return (NC || MC) && (this.consumeNextFrame = !0, this.consumeAfterContinue = MC, WC = !0), {
          continues: MC,
          back: NC,
          consumeHeld: WC
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const jn = new Set([...sn.g, ...sn.w]),
      yn = CC => ((CC, zC, ZC) => {
        const QC = Object.keys(zC).filter((QC => !ZC.has(QC) && zC[QC].includes(CC)));
        return QC.length > 0 && QC.every((CC => an.includes(CC)))
      })(CC, sn.o, jn),
      Ln = (CC, zC, ZC) => {
        const QC = new Dn,
          wC = CC => {
            if (!CC.isTrusted) return;
            const {
              swallow: ZC,
              continues: wC
            } = QC.onKeyDown(CC, !(0, MC.B)(CC) || (0, VQ.i)() || (0, oZ.s)(), yn(CC.code));
            ZC && (CC.stopImmediatePropagation(), tn(CC) && CC.preventDefault()), wC && ((0, MC.u)("keyboardMouse"), zC())
          },
          bC = CC => {
            CC.isTrusted && QC.onKeyUp(CC) && (CC.stopImmediatePropagation(), tn(CC) && CC.preventDefault())
          },
          fC = () => {
            QC.forgetKeys()
          };
        window.addEventListener("keydown", wC, !0), window.addEventListener("keyup", bC, !0), window.addEventListener("blur", fC);
        const oC = nC.f.onFrame((CC => {
            const wC = WC.c.getActiveConsumerName(),
              bC = ZC(),
              nC = bC ? (0, FC.i)("menuBack") : null,
              fC = null !== wC && "gameplay" !== wC,
              {
                continues: oC,
                back: qC,
                consumeHeld: gC
              } = QC.onPadFrame(CC, fC, nC, (0, MC.n)(CC));
            if (gC) {
              const CC = (0, NC.k)().swapSticks ? "right" : "left";
              WC.c.consumeAllHeld(QC.consumeLeavesMoveStick() ? CC : null)
            }
            qC ? null === bC || void 0 === bC || bC() : oC && zC()
          })),
          qC = (0, VQ.m)(`pressToContinue:${CC}`, (() => QC.blocksGameplay()));
        return {
          setArmed: CC => {
            QC.setArmed(CC)
          },
          dispose: () => {
            window.removeEventListener("keydown", wC, !0), window.removeEventListener("keyup", bC, !0), window.removeEventListener("blur", fC), oC(), qC()
          }
        }
      };
    var Un = ZC(4942),
      Bn = ZC(3414),
      On = ZC(3113),
      kn = ZC(8198);
    const Vn = CC => {
        let {
          text: zC
        } = CC;
        return (0, rC.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: zC
        })
      },
      Cf = CC => {
        let {
          label: zC,
          hint: ZC,
          options: QC,
          value: bC,
          onChange: nC
        } = CC;
        const {
          t: fC
        } = (0, wC.y)();
        return (0, rC.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, rC.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, rC.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, rC.jsx)("div", {
                className: "SliderText",
                children: zC
              }), ZC && (0, rC.jsx)("div", {
                className: "ControllerSettingsHint",
                children: ZC
              })]
            }), (0, rC.jsx)(On.b, {
              options: QC.map((CC => ({
                label: "label" in CC ? CC.label : fC(CC.labelKey),
                value: CC.value
              }))),
              value: bC,
              onChange: CC => {
                nC(CC.value)
              }
            })]
          })
        })
      },
      zf = CC => {
        let {
          settingKey: zC,
          label: ZC,
          range: QC,
          format: wC
        } = CC;
        const bC = (0, NC.q)();
        return (0, rC.jsx)(Un.f, {
          name: ZC,
          min: QC.min,
          max: QC.max,
          step: QC.step,
          padStep: QC.step,
          initValue: bC[zC],
          format: wC,
          onChange: CC => {
            (0, NC.n)({
              [zC]: (0, kn.D)(CC, QC)
            })
          }
        })
      };
    var Zf = ZC(8850),
      Qf = ZC(8852);
    const wf = CC => CC instanceof DOMException && ("SecurityError" === CC.name || "NotAllowedError" === CC.name),
      bf = CC => {
        const [zC] = [...CC.controllers].sort(((CC, zC) => Qf.p[CC] - Qf.p[zC]));
        return Qf.o[zC]
      },
      nf = CC => {
        (0, Zf.b)().allowPhoneMotion().catch((zC => {
          CC && wf(zC) ? CC() : console.warn("Could not enable the motion sensor", zC)
        }))
      },
      ff = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      of = CC => {
        let {
          status: zC
        } = CC;
        const {
          t: ZC
        } = (0, wC.y)(), [QC, bC] = (0, XC.useState)(null), nC = `${zC.controllers.join(",")}|${zC.phoneMotion}`;
        (0, XC.useEffect)((() => {
          bC(null)
        }), [nC]);
        const fC = () => {
          (0, Zf.b)().connectController().then((CC => {
            bC(CC > 0 ? "openFailed" : null)
          })).catch((CC => {
            wf(CC) ? bC("needsClick") : console.warn("Could not connect motion controller", CC)
          }))
        };
        if (zC.hidSupported) {
          let CC = ZC("controller:settingsGyroConnectHint");
          return "needsClick" === QC ? CC = ZC("controller:settingsGyroConnectNeedsClick") : "openFailed" === QC ? CC = ZC("controller:settingsGyroOpenFailed") : zC.controllers.length > 0 && (CC = ZC("controller:settingsGyroConnected", {
            name: bf(zC)
          })), (0, rC.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, rC.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, rC.jsx)("div", {
                className: "ControllerSettingsHint",
                children: CC
              }), (0, rC.jsx)(En.g, {
                onClick: fC,
                children: ZC("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === zC.phoneMotion) return (0, rC.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, rC.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === QC && (0, rC.jsx)("div", {
              className: "ControllerSettingsHint",
              children: ZC("controller:settingsGyroAllowNeedsTap")
            }), (0, rC.jsx)(En.g, {
              onClick: () => {
                nf((() => {
                  bC("needsTap")
                }))
              },
              children: ZC("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const oC = ff[zC.phoneMotion];
        return oC ? (0, rC.jsx)("div", {
          className: "ControllerSettingsHint",
          children: ZC(oC)
        }) : null
      },
      qf = () => {
        const {
          t: CC
        } = (0, wC.y)(), zC = (0, NC.q)(), ZC = (0, Zf.c)(), QC = (0, MC.z)(), bC = !ZC.hidSupported && ZC.phoneSupported && !ZC.padConnected, nC = (ZC.hidSupported || ZC.phoneSupported) && !bC, fC = (0, FC.i)("pause");
        return (0, rC.jsxs)(rC.Fragment, {
          children: [(0, rC.jsx)(Vn, {
            text: CC("controller:settingsGyro")
          }), bC && (0, rC.jsx)("div", {
            className: "ControllerSettingsHint",
            children: CC("controller:settingsGyroPhoneNeedsController")
          }), !nC && !bC && (0, rC.jsx)("div", {
            className: "ControllerSettingsHint",
            children: CC(ZC.hidBlocked || ZC.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), nC && (0, rC.jsx)(Un.b, {
            label: CC(ZC.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: zC.gyroAiming,
            onClick: CC => {
              var zC, ZC;
              (0, NC.n)({
                gyroAiming: CC
              });
              const QC = null === (zC = null === (ZC = navigator.userActivation) || void 0 === ZC ? void 0 : ZC.isActive) || void 0 === zC || zC;
              if (!CC || !QC) return;
              const wC = (0, Zf.b)(),
                bC = wC.getStatus();
              bC.hidSupported ? wC.connectControllerIfNoneGranted().catch((CC => {
                console.warn("Motion controller picker unavailable", CC)
              })) : "needsPermission" === bC.phoneMotion && nf()
            },
            circleInfoText: CC(ZC.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), nC && ZC.hidSupported && (0, rC.jsx)("div", {
            className: "ControllerSettingsHint",
            children: CC("controller:settingsGyroSteamHint")
          }), nC && zC.gyroAiming && (0, rC.jsxs)(rC.Fragment, {
            children: [(0, rC.jsx)(of, {
              status: ZC
            }), (0, rC.jsx)(zf, {
              settingKey: "gyroSensitivity",
              label: CC("controller:settingsGyroSensitivity"),
              range: kn.Y,
              format: kn.Q
            }), (0, rC.jsx)(Cf, {
              label: CC("controller:settingsGyroActivation"),
              hint: "aiming" === zC.gyroActivation && (0, rC.jsx)(Bn.c, {
                text: CC("controller:settingsGyroAimingHint", {
                  button: Bn.d
                }),
                glyph: (0, FC.i)("use")
              }),
              options: kn.X,
              value: zC.gyroActivation,
              onChange: CC => {
                (0, NC.n)({
                  gyroActivation: CC
                })
              }
            }), "button" === zC.gyroActivation && (0, rC.jsx)(Cf, {
              label: CC("controller:settingsGyroButton"),
              hint: CC("controller:settingsGyroButtonHint"),
              options: kn.w.filter((CC => CC !== fC || CC === zC.gyroButton)).map((CC => ({
                label: Aw(QC, CC),
                value: CC
              }))),
              value: zC.gyroButton,
              onChange: CC => {
                (0, NC.n)({
                  gyroButton: CC
                })
              }
            })]
          })]
        })
      };
    var Ff = ZC(1774);
    const Wf = () => {
      const {
        t: CC
      } = (0, wC.y)(), zC = (0, NC.q)(), ZC = (0, MC.z)();
      return (0, rC.jsxs)(rC.Fragment, {
        children: [(0, rC.jsx)(Vn, {
          text: CC("controller:settingsAccessibility")
        }), (0, rC.jsx)(Un.b, {
          label: CC("controller:settingsSwapConfirmBack"),
          checked: (0, FC.C)(zC.swapConfirmBack, ZC),
          onClick: CC => {
            (0, NC.n)({
              swapConfirmBack: CC === (0, FC.C)(null, ZC) ? null : CC
            }), Ff.d.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: CC("controller:settingsSwapConfirmBackInfo")
        }), (0, rC.jsx)(Cf, {
          label: CC("controller:settingsButtonRepeat"),
          hint: CC("controller:settingsButtonRepeatHint"),
          options: kn.s,
          value: zC.buttonRepeat,
          onChange: CC => {
            (0, NC.n)({
              buttonRepeat: CC
            })
          }
        }), (0, rC.jsx)(Cf, {
          label: CC("controller:settingsTapHoldTime"),
          hint: CC("controller:settingsTapHoldTimeHint"),
          options: kn.Cb,
          value: zC.tapHoldTime,
          onChange: CC => {
            (0, NC.n)({
              tapHoldTime: CC
            })
          }
        }), (0, rC.jsx)(Cf, {
          label: CC("controller:settingsEmoteButton"),
          hint: CC("wheel" === zC.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: kn.K,
          value: zC.emoteButton,
          onChange: CC => {
            (0, NC.n)({
              emoteButton: CC
            })
          }
        }), (0, rC.jsx)(Cf, {
          label: CC("controller:settingsAttackMode"),
          hint: CC("toggle" === zC.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: kn.o,
          value: zC.attackMode,
          onChange: CC => {
            (0, NC.n)({
              attackMode: CC
            })
          }
        }), (0, rC.jsx)(Un.b, {
          label: CC("controller:settingsLargePointer"),
          checked: zC.largePointer,
          onClick: CC => {
            (0, NC.n)({
              largePointer: CC
            })
          },
          circleInfoText: CC("controller:settingsLargePointerInfo")
        })]
      })
    };
    var Nf = ZC(8859);
    const Mf = new class {
        constructor(CC) {
          this.router = CC, this.current = null
        }
        claim(CC, zC) {
          const ZC = this.current;
          ZC && (this.current = null, ZC.release(), ZC.onTakenOver());
          const QC = this.router.register({
              ...CC,
              name: "capture"
            }),
            wC = {
              release: QC,
              onTakenOver: zC
            };
          return this.current = wC, () => {
            this.current === wC && (this.current = null), QC()
          }
        }
      }(WC.c),
      gf = CC => {
        (0, XC.useEffect)((() => {
          if (!CC) return;
          const zC = CC();
          let ZC = !1;
          const QC = () => {
              ZC || (ZC = !0, zC.onEnd())
            },
            wC = Mf.claim({
              isActive: () => !ZC,
              onFrame: CC => {
                zC.onFrame(CC, QC)
              }
            }, QC),
            bC = void 0 === zC.timeoutMs ? void 0 : window.setTimeout(QC, zC.timeoutMs),
            nC = CC => {
              "Escape" === CC.key && (CC.preventDefault(), CC.stopPropagation(), QC())
            };
          return window.addEventListener("keydown", nC, !0), () => {
            ZC = !0, wC(), window.clearTimeout(bC), window.removeEventListener("keydown", nC, !0)
          }
        }), [CC])
      },
      Sf = CC => {
        let {
          row: zC,
          capturing: ZC,
          onCapture: QC,
          holdFillRef: bC,
          onRebind: nC,
          swapped: fC
        } = CC;
        const {
          t: oC
        } = (0, wC.y)();
        if ("fixed" === zC.kind) return (0, rC.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, rC.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, rC.jsx)("div", {
              className: "ControlName",
              children: oC(zC.labelKey)
            }), (0, rC.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, rC.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, rC.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, rC.jsx)(xw, {
                    glyph: "move" === zC.stick ? (0, FC.s)() : (0, FC.o)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: qC
        } = zC, WC = (0, FC.i)(qC), NC = (0, FC.j)(qC), MC = WC !== NC && (0, FC.d)(qC, NC);
        return (0, rC.jsxs)("div", {
          className: uC()("ControlRow PadControlRow", {
            Capturing: ZC
          }),
          children: [(0, rC.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, rC.jsx)("div", {
              className: "ControlName",
              children: oC(kn.i[qC])
            }), (0, rC.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!ZC && (0, rC.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, rC.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    QC(qC)
                  },
                  children: (0, rC.jsx)(xw, {
                    glyph: WC
                  })
                }), MC && (0, rC.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: oC("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    nC(qC, NC)
                  },
                  children: (0, rC.jsx)(mn.c, {
                    name: "arrows-rotate"
                  })
                })]
              }), ZC && (0, rC.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, rC.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, rC.jsx)("span", {
                    children: oC("controller:settingsCapturePrompt")
                  }), (0, rC.jsx)("div", {
                    ref: bC,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, rC.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    QC(null)
                  },
                  children: "\xd7"
                })]
              }), ZC && (0, rC.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, rC.jsx)(Bn.c, {
                  text: oC((0, FC.d)(qC, (0, FC.i)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: Bn.d
                  }),
                  glyph: (0, FC.i)("menuBack")
                })
              })]
            })]
          }), fC.map((CC => (0, rC.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, rC.jsx)(Bn.c, {
              text: oC("controller:settingsSwapNotice", {
                action: oC(kn.i[CC]),
                button: Bn.d
              }),
              glyph: (0, FC.i)(CC)
            })
          }, CC))), ZC && (0, rC.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${kn.A}ms`
            }
          })]
        })
      },
      pf = [],
      Pf = CC => {
        let {
          layoutSetting: zC
        } = CC;
        const {
          t: ZC
        } = (0, wC.y)(), QC = (0, NC.q)();
        (0, MC.z)();
        const bC = (0, XC.useRef)(null),
          [nC, fC] = (0, XC.useState)(null),
          oC = (0, XC.useCallback)(((CC, zC) => {
            const ZC = (0, NC.k)().bindings;
            (0, FC.z)(CC, zC);
            const QC = (0, FC.t)(ZC, CC);
            fC(QC.length > 0 ? {
              action: CC,
              swapped: QC
            } : null)
          }), []),
          [qC, SC] = ((CC, zC) => {
            const [ZC, QC] = (0, XC.useState)(null), wC = (0, XC.useMemo)((() => ZC ? () => {
              const wC = (0, FC.i)("menuBack"),
                bC = new kn.c(wC, (0, FC.i)("menuConfirm"), (CC => (0, FC.d)(ZC, CC)));
              return {
                onFrame: (QC, nC) => {
                  var fC;
                  const oC = QC.frame.timestampMs,
                    qC = bC.update({
                      ...QC,
                      isDown: CC => (0, gC.I)(QC.frame.values, CC)
                    }, oC);
                  null === (fC = CC.current) || void 0 === fC || fC.style.setProperty("width", 100 * bC.getBindHoldProgress(oC) + "%"), qC && ("bind" === qC.kind ? (WC.c.consumeButton(qC.button), zC(ZC, qC.button)) : WC.c.consumeButton(wC), nC())
                },
                onEnd: () => {
                  QC(null)
                },
                timeoutMs: kn.A
              }
            } : null), [ZC, CC, zC]);
            return gf(wC), [ZC, QC]
          })(bC, oC),
          pC = CC => {
            CC && fC(null), SC(CC)
          };
        (0, XC.useEffect)((() => {
          if (!nC) return;
          const CC = window.setTimeout((() => {
            fC(null)
          }), kn.yb);
          return () => {
            window.clearTimeout(CC)
          }
        }), [nC]);
        const PC = !QC.swapSticks && 0 === Object.keys(QC.bindings).length;
        return (0, rC.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, rC.jsx)("div", {
            className: "SliderText",
            children: ZC("controller:settingsRemap")
          }), (0, rC.jsx)("div", {
            className: "ControllerSettingsHint",
            children: ZC("controller:settingsRemapHint")
          }), (0, rC.jsx)(En.I, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: PC,
            onClick: () => {
              pC(null), fC(null), (0, FC.B)()
            },
            children: ZC("controller:settingsResetAll")
          }), zC, kn.qb.map(((CC, zC) => (0, rC.jsx)(Nf.c, {
            title: ZC(CC.titleKey),
            defaultOpen: 0 === zC,
            children: CC.rows.map((CC => (0, rC.jsx)(Sf, {
              row: CC,
              capturing: "action" === CC.kind && CC.action === qC,
              onCapture: pC,
              holdFillRef: bC,
              onRebind: oC,
              swapped: "action" === CC.kind && (null === nC || void 0 === nC ? void 0 : nC.action) === CC.action ? nC.swapped : pf
            }, "action" === CC.kind ? CC.action : CC.labelKey)))
          }, CC.titleKey)))]
        })
      },
      Gf = CC => {
        let {
          deadzone: zC,
          dotRef: ZC,
          labelKey: QC
        } = CC;
        const {
          t: bC
        } = (0, wC.y)();
        return (0, rC.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, rC.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, rC.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * zC + "%",
                height: 100 * zC + "%"
              }
            }), (0, rC.jsx)("div", {
              ref: ZC,
              className: "ControllerTesterDot"
            })]
          }), (0, rC.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: bC(QC)
          })]
        })
      },
      Rf = (CC, zC, ZC, QC) => {
        var wC;
        CC && (CC.style.left = 50 + 50 * Math.max(-1, Math.min(1, zC.x)) + "%", CC.style.top = 50 + 50 * Math.max(-1, Math.min(1, zC.y)) + "%", null === (wC = CC.parentElement) || void 0 === wC || wC.classList.toggle("Active", QC || Math.hypot(zC.x, zC.y) > ZC))
      },
      Af = CC => {
        const zC = {
            deadzone: CC.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          ZC = {
            deadzone: CC.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return CC.swapSticks ? {
          left: ZC,
          right: zC
        } : {
          left: zC,
          right: ZC
        }
      },
      xf = () => {
        const {
          t: CC
        } = (0, wC.y)(), zC = (() => {
          const [CC, zC] = (0, XC.useState)((() => nC.f.getActivePad()));
          return (0, Sw.c)(nC.e, (() => {
            zC(nC.f.getActivePad())
          })), CC
        })(), ZC = Af((0, NC.q)()), QC = (0, XC.useRef)(null), bC = (0, XC.useRef)(null), fC = (0, XC.useRef)([]), oC = (0, XC.useRef)(null), qC = (0, XC.useRef)(null), [MC, SC] = (CC => {
          const [zC, ZC] = (0, XC.useState)(!1), QC = (0, XC.useMemo)((() => zC ? () => {
            const zC = (0, FC.i)("menuBack"),
              QC = new kn.f;
            return {
              onFrame: (ZC, wC) => {
                var bC;
                const nC = QC.update({
                  pressed: ZC.wasPressed(zC),
                  vq: ZC.isHeld(zC)
                }, ZC.frame.timestampMs);
                null === (bC = CC.current) || void 0 === bC || bC.style.setProperty("width", 100 * nC + "%"), nC >= 1 && (WC.c.consumeButton(zC), wC())
              },
              onEnd: () => {
                ZC(!1)
              }
            }
          } : null), [zC, CC]);
          return gf(QC), [zC, ZC]
        })(bC);
        (0, XC.useEffect)((() => {
          const CC = CC => {
            for (const ZC of gC.Z) {
              const zC = (0, gC.k)(ZC),
                QC = fC.current[zC];
              if (!QC) continue;
              const wC = CC.values[zC];
              QC.classList.toggle("Pressed", wC >= gC.x), (0, gC.K)(zC) && QC.style.setProperty("--trigger-fill", `${Math.round(100*wC)}%`)
            }
            const zC = Af((0, NC.k)());
            Rf(oC.current, CC.leftStick, zC.left.deadzone, CC.values[(0, gC.k)("LS")] >= gC.x), Rf(qC.current, CC.rightStick, zC.right.deadzone, CC.values[(0, gC.k)("RS")] >= gC.x)
          };
          return zC || CC((0, gC.t)()), nC.f.onFrame(CC)
        }), [zC]), (0, XC.useEffect)((() => {
          zC || SC(!1)
        }), [zC, SC]), (0, XC.useEffect)((() => {
          var CC;
          MC && (null === (CC = QC.current) || void 0 === CC || CC.scrollIntoView({
            block: "nearest"
          }))
        }), [MC]);
        const pC = kn.lb.find((CC => CC.value === (null === zC || void 0 === zC ? void 0 : zC.family)));
        return (0, rC.jsxs)("div", {
          ref: QC,
          className: uC()("SettingBox ControllerTester", {
            Testing: MC
          }),
          children: [(0, rC.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, rC.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [zC && (0, rC.jsx)("div", {
                children: CC("controller:settingsTesterFamily", {
                  family: pC ? CC(pC.labelKey) : zC.family
                })
              }), zC && (0, rC.jsx)("div", {
                className: "ControllerTesterPadId",
                children: zC.id
              }), !zC && (0, rC.jsx)("div", {
                children: CC("controller:settingsTesterNoPad")
              })]
            }), (zC || MC) && (0, rC.jsx)(En.g, {
              className: "ControllerTesterToggle",
              onClick: () => {
                SC(!MC)
              },
              children: CC(MC ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), zC && !MC && (0, rC.jsx)("div", {
            className: "ControllerSettingsHint",
            children: CC("controller:settingsTesterHint")
          }), MC && (0, rC.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, rC.jsx)(Bn.c, {
              text: CC("controller:settingsTesterTesting", {
                button: Bn.d
              }),
              glyph: (0, FC.i)("menuBack")
            }), (0, rC.jsx)("div", {
              ref: bC,
              className: "ControllerTesterExitFill"
            })]
          }), (0, rC.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, rC.jsx)(Gf, {
              deadzone: ZC.left.deadzone,
              dotRef: oC,
              labelKey: ZC.left.labelKey
            }), (0, rC.jsx)("div", {
              className: "ControllerTesterButtons",
              children: gC.Z.map((CC => {
                const ZC = (0, gC.k)(CC);
                return (0, rC.jsx)("div", {
                  ref: CC => {
                    fC.current[ZC] = CC
                  },
                  className: (0, gC.K)(ZC) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, rC.jsx)(xw, {
                    glyph: CC,
                    family: null === zC || void 0 === zC ? void 0 : zC.family
                  })
                }, CC)
              }))
            }), (0, rC.jsx)(Gf, {
              deadzone: ZC.right.deadzone,
              dotRef: qC,
              labelKey: ZC.right.labelKey
            })]
          })]
        })
      },
      Jf = (0, XC.memo)((function() {
        const {
          t: CC
        } = (0, wC.y)(), zC = (0, NC.q)(), [ZC, QC] = (0, XC.useState)(!1);
        return (0, XC.useEffect)((() => {
          if (!ZC) return;
          const CC = window.setTimeout((() => {
            QC(!1)
          }), kn.yb);
          return () => {
            window.clearTimeout(CC)
          }
        }), [ZC]), (0, rC.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, rC.jsx)(Vn, {
            text: CC("controller:settingsLook")
          }), (0, rC.jsx)(zf, {
            settingKey: "lookSensitivityX",
            label: CC("controller:settingsLookSensitivityX"),
            range: kn.rb,
            format: kn.U
          }), (0, rC.jsx)(zf, {
            settingKey: "lookSensitivityY",
            label: CC("controller:settingsLookSensitivityY"),
            range: kn.rb,
            format: kn.U
          }), (0, rC.jsx)(zf, {
            settingKey: "aimLookSensitivity",
            label: CC("controller:settingsAimLookSensitivity"),
            range: kn.l,
            format: kn.U
          }), (0, rC.jsx)(Cf, {
            label: CC("controller:settingsLookCurve"),
            hint: CC("controller:settingsLookCurveHint"),
            options: kn.fb,
            value: zC.lookCurve,
            onChange: CC => {
              (0, NC.n)({
                lookCurve: CC
              })
            }
          }), (0, rC.jsx)(Un.b, {
            label: CC("controller:settingsInvertLookX"),
            checked: zC.invertLookX,
            onClick: CC => {
              (0, NC.n)({
                invertLookX: CC
              })
            }
          }), (0, rC.jsx)(Un.b, {
            label: CC("controller:settingsInvertLookY"),
            checked: zC.invertLookY,
            onClick: CC => {
              (0, NC.n)({
                invertLookY: CC
              })
            }
          }), (0, rC.jsx)(zf, {
            settingKey: "lookDeadzone",
            label: CC("controller:settingsLookDeadzone"),
            range: kn.I,
            format: kn.O
          }), (0, rC.jsx)(qf, {}), (0, rC.jsx)(Vn, {
            text: CC("controller:settingsMovement")
          }), (0, rC.jsx)(zf, {
            settingKey: "moveDeadzone",
            label: CC("controller:settingsMoveDeadzone"),
            range: kn.I,
            format: kn.O
          }), (0, rC.jsx)(Un.b, {
            label: CC("controller:settingsAutoSprint"),
            checked: zC.autoSprint,
            onClick: CC => {
              (0, NC.n)({
                autoSprint: CC
              })
            },
            circleInfoText: CC("controller:settingsAutoSprintInfo")
          }), (0, rC.jsx)(Cf, {
            label: CC("controller:settingsSneak"),
            options: kn.ub,
            value: zC.sneakMode,
            onChange: CC => {
              (0, NC.n)({
                sneakMode: CC
              })
            }
          }), (0, rC.jsx)(Vn, {
            text: CC("controller:settingsButtons")
          }), (0, rC.jsx)(Cf, {
            label: CC("controller:settingsPromptFamily"),
            options: kn.lb,
            value: zC.promptFamily,
            onChange: CC => {
              (0, NC.n)({
                promptFamily: CC
              })
            }
          }), (0, rC.jsx)(Un.b, {
            label: CC("controller:settingsHideButtonHints"),
            checked: zC.hideButtonHints,
            onClick: CC => {
              (0, NC.n)({
                hideButtonHints: CC
              })
            }
          }), (0, rC.jsx)(Un.b, {
            label: CC("controller:settingsVibration"),
            checked: zC.vibration,
            onClick: CC => {
              (0, NC.n)({
                vibration: CC
              }), CC && ww("preview")
            }
          }), (0, rC.jsx)(zf, {
            settingKey: "cursorSpeed",
            label: CC("controller:settingsCursorSpeed"),
            range: kn.H,
            format: kn.U
          }), (0, rC.jsx)(Un.b, {
            label: CC("controller:settingsCursorMagnetism"),
            checked: zC.cursorMagnetism,
            onClick: CC => {
              (0, NC.n)({
                cursorMagnetism: CC
              })
            }
          }), (0, rC.jsx)(Un.b, {
            label: CC("controller:settingsMenuBackToCategories"),
            checked: zC.menuBackToCategories,
            onClick: CC => {
              (0, NC.n)({
                menuBackToCategories: CC
              })
            }
          }), (0, rC.jsx)(Pf, {
            layoutSetting: (0, rC.jsxs)(rC.Fragment, {
              children: [FC.h.map((ZC => (0, rC.jsx)(Un.b, {
                label: CC(kn.bb[ZC]),
                checked: (0, FC.x)(ZC, zC),
                onClick: CC => {
                  QC(!(0, FC.G)(ZC, CC))
                }
              }, ZC))), ZC && (0, rC.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: CC("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, rC.jsx)(Wf, {}), (0, rC.jsx)(Vn, {
            text: CC("controller:settingsAlternatives")
          }), (0, rC.jsx)("div", {
            className: "ControllerSettingsHint",
            children: CC("controller:settingsAlternativesHint")
          }), (0, rC.jsx)(Cf, {
            label: CC("controller:settingsMenuNavigation"),
            hint: CC("controller:settingsMenuNavigationHint"),
            options: kn.jb,
            value: zC.menuNavigation,
            onChange: CC => {
              (0, NC.n)({
                menuNavigation: CC
              })
            }
          }), (0, rC.jsx)(Cf, {
            label: CC("controller:settingsInventoryNavigation"),
            hint: CC("controller:settingsInventoryNavigationHint"),
            options: kn.$,
            value: zC.inventoryNavigation,
            onChange: CC => {
              (0, NC.n)({
                inventoryNavigation: CC
              })
            }
          }), (0, rC.jsx)(Cf, {
            label: CC("controller:settingsQuickChat"),
            hint: CC("controller:settingsQuickChatHint"),
            options: kn.ob,
            value: zC.quickChat,
            onChange: CC => {
              (0, NC.n)({
                quickChat: CC
              })
            }
          }), (0, rC.jsx)(Cf, {
            label: CC("controller:settingsLeaderboardButton"),
            hint: CC("controller:settingsLeaderboardButtonHint"),
            options: kn.eb,
            value: zC.leaderboardButton,
            onChange: CC => {
              (0, NC.n)({
                leaderboardButton: CC
              })
            }
          }), (0, rC.jsx)(Vn, {
            text: CC("controller:settingsTester")
          }), (0, rC.jsx)(xf, {})]
        })
      }));
    (0, wC.b)(QC);
    for (const Kf of (0, bC.q)()) Kf.connected ? nC.f.handleConnectionEvent(Kf) : nC.f.handleDisconnectionEvent(Kf);
    const If = () => null !== nC.f.getActivePad(),
      vf = () => wZ.getState(),
      ef = () => wZ.isSteppingSlots(),
      hf = (CC, zC) => {
        const ZC = kQ.getFocused();
        kQ.isActive() && ZC && CC.contains(ZC) && kQ.setFocus(zC, {
          scroll: !1
        })
      }
  },
  8170: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => oC,
      e: () => qC
    });
    var QC = ZC(1371),
      wC = ZC(1368);
    const bC = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      nC = "28de",
      fC = new Set(["1205"]),
      oC = (CC, zC) => {
        const ZC = (0, QC.c)(CC);
        if ((null === ZC || void 0 === ZC ? void 0 : ZC.vendor) === nC) return fC.has(ZC.product) ? "steamdeck" : "xbox";
        if (ZC && bC[ZC.vendor]) return bC[ZC.vendor];
        if ((0, wC.b)(CC)) return "nintendo";
        const oC = `${CC} ${null!==zC&&void 0!==zC?zC:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(oC) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(oC) ? "nintendo" : /steam deck/.test(oC) ? "steamdeck" : "xbox"
      },
      qC = CC => {
        var zC;
        return (null === (zC = (0, QC.c)(CC)) || void 0 === zC ? void 0 : zC.vendor) === nC
      }
  },
  8208: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => qC,
      d: () => fC
    });
    var QC = ZC(8167);
    const wC = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      bC = new Set(["capture", "gameplay"]),
      nC = ["Up", "Down", "Left", "Right"],
      fC = CC => nC.includes(CC),
      oC = .25;
    const qC = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.vq = new Array(QC.V).fill(!1), this.previousHeld = new Array(QC.V).fill(!1), this.consumedButtons = new Array(QC.V).fill(!1), this.suppressedReleases = new Array(QC.V).fill(!1), this.wakeOwned = new Array(QC.V).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, QC.t)()
      }
      register(CC) {
        return this.consumers.has(CC.name) && console.warn(`Controller consumer "${CC.name}" registered twice; the newer one replaces it.`), this.consumers.set(CC.name, CC), () => {
          var zC;
          this.consumers.get(CC.name) === CC && (this.activeName === CC.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (zC = this.peek) || void 0 === zC ? void 0 : zC.over) === CC.name && (this.peek = null), this.consumers.delete(CC.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(CC) {
        return this.vq[(0, QC.k)(CC)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.vq = new Array(QC.V).fill(!1), this.previousHeld = new Array(QC.V).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, QC.t)()
      }
      dispatch(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = CC, this.previousHeld = this.vq, this.vq = (0, QC.q)(CC.values, this.previousHeld);
        for (let bC = 0; bC < QC.V; bC++) this.suppressedReleases[bC] = !this.vq[bC] && this.consumedButtons[bC], this.vq[bC] || (this.consumedButtons[bC] = !1), this.wakeOwned[bC] && (this.vq[bC] ? (this.consumedButtons[bC] = !0, this.wakeOwned[bC] = !1) : CC.values[bC] < QC.U && (this.wakeOwned[bC] = !1));
        Math.hypot(CC.leftStick.x, CC.leftStick.y) < oC && (this.leftStickConsumed = !1), Math.hypot(CC.rightStick.x, CC.rightStick.y) < oC && (this.rightStickConsumed = !1);
        const wC = this.pickActive();
        if ((null === wC || void 0 === wC ? void 0 : wC.name) !== this.activeName) {
          var nC, fC, qC, FC, WC, NC;
          const CC = this.activeName,
            zC = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            ZC = null !== (nC = null === wC || void 0 === wC || null === (fC = wC.peek) || void 0 === fC ? void 0 : fC.call(wC)) && void 0 !== nC ? nC : null,
            bC = null === CC && !!ZC && !(null === (qC = this.consumers.get(ZC.over)) || void 0 === qC || !qC.onPeekFrame),
            oC = ZC && (ZC.over === CC || bC) ? ZC : null,
            MC = null !== this.peek && this.peek.over === (null === wC || void 0 === wC ? void 0 : wC.name) ? this.peek : null;
          this.deactivateCurrent(null !== oC, null !== MC), this.activeName = null !== (FC = null === wC || void 0 === wC ? void 0 : wC.name) && void 0 !== FC ? FC : null, null === CC || this.handOffPending || this.consumeAllHeld();
          const gC = null === (WC = null !== oC && void 0 !== oC ? oC : MC) || void 0 === WC ? void 0 : WC.stick;
          "left" === gC && zC.left ? this.leftStickConsumed = !1 : "right" === gC && zC.right && (this.rightStickConsumed = !1), this.peek = oC, wC || null === CC ? wC && (null === (NC = this.idleResume) || void 0 === NC ? void 0 : NC.name) === wC.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: CC,
            left: zC.left && this.leftStickConsumed,
            right: zC.right && this.rightStickConsumed
          }, wC && (this.idleResume = null);
          for (let wC = 0; wC < QC.V; wC++) this.previousHeld[wC] && !this.vq[wC] && (this.suppressedReleases[wC] = !0)
        }
        var MC, gC;
        (this.handOffPending = !1, wC) && (ZC && !bC.has(wC.name) && this.consumeWakePress(wC), wC.onFrame(this.buildInput(CC, zC, ZC)), this.peek && (null === (MC = this.consumers.get(this.peek.over)) || void 0 === MC || null === (gC = MC.onPeekFrame) || void 0 === gC || gC.call(MC, this.buildInput(CC, zC, !1, this.peek.stick))))
      }
      consumeWakePress(CC) {
        for (let wC = 0; wC < QC.V; wC++) {
          var zC, ZC;
          const bC = QC.Z[wC];
          (null !== (zC = null === (ZC = CC.wakePressActs) || void 0 === ZC ? void 0 : ZC.call(CC, bC)) && void 0 !== zC ? zC : nC.includes(bC)) || (this.vq[wC] ? this.consumedButtons[wC] = !0 : this.lastFrame.values[wC] >= QC.S && (this.wakeOwned[wC] = !0))
        }
      }
      pickActive() {
        for (const CC of wC) {
          const zC = this.consumers.get(CC);
          if (zC && zC.isActive()) return zC
        }
        return null
      }
      deactivateCurrent() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var ZC, QC, wC, bC;
        this.activeName && (null === (ZC = this.consumers.get(this.activeName)) || void 0 === ZC || null === (QC = ZC.onDeactivate) || void 0 === QC || QC.call(ZC, CC));
        this.peek && !zC && (null === (wC = this.consumers.get(this.peek.over)) || void 0 === wC || null === (bC = wC.onDeactivate) || void 0 === bC || bC.call(wC, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let wC = 0; wC < QC.V; wC++) this.vq[wC] && (this.consumedButtons[wC] = !0);
        const {
          leftStick: zC,
          rightStick: ZC
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== CC && (this.leftStickConsumed || Math.hypot(zC.x, zC.y) >= oC), this.rightStickConsumed = "right" !== CC && (this.rightStickConsumed || Math.hypot(ZC.x, ZC.y) >= oC)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(CC) {
        const zC = (0, QC.k)(CC);
        this.vq[zC] && (this.consumedButtons[zC] = !0)
      }
      buildInput(CC, zC, ZC, wC) {
        const bC = this.vq,
          nC = this.previousHeld,
          fC = wC ? new Array(QC.V).fill(!0) : [...this.consumedButtons],
          oC = wC ? fC : [...this.suppressedReleases],
          qC = !this.leftStickConsumed && (!wC || "left" === wC),
          FC = !this.rightStickConsumed && (!wC || "right" === wC);
        return {
          frame: CC,
          dtMs: zC,
          isHeld: CC => {
            const zC = (0, QC.k)(CC);
            return bC[zC] && !fC[zC]
          },
          wasPressed: CC => {
            const zC = (0, QC.k)(CC);
            return bC[zC] && !nC[zC] && !fC[zC]
          },
          wasReleased: CC => {
            const zC = (0, QC.k)(CC);
            return !bC[zC] && nC[zC] && !oC[zC]
          },
          value: zC => {
            const ZC = (0, QC.k)(zC);
            return fC[ZC] ? 0 : CC.values[ZC]
          },
          leftStick: qC ? CC.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: FC ? CC.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: ZC
        }
      }
    }
  },
  8184: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => WC.g,
      g: () => WC.j,
      k: () => hC,
      l: () => KC,
      n: () => YC,
      q: () => dC
    });
    var QC = ZC(48),
      wC = ZC(28),
      bC = ZC(1383),
      nC = ZC(38),
      fC = ZC(8190),
      oC = ZC(8167),
      qC = ZC(8180),
      FC = ZC(8160),
      WC = ZC(1911),
      NC = ZC(8198);
    const MC = {
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
      gC = "controllerSettings",
      SC = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      pC = ["auto", ...fC.c],
      PC = (CC, zC) => "string" === typeof zC && CC.includes(zC),
      GC = CC => zC => "number" === typeof zC && Number.isFinite(zC) ? (0, NC.D)(zC, CC) : void 0,
      RC = CC => "boolean" === typeof CC ? CC : void 0,
      AC = CC => zC => PC(CC, zC) ? zC : void 0,
      xC = {
        lookSensitivityX: GC(NC.rb),
        lookSensitivityY: GC(NC.rb),
        aimLookSensitivity: GC(NC.l),
        invertLookX: RC,
        invertLookY: RC,
        lookCurve: AC(oC.O),
        lookDeadzone: GC(NC.I),
        moveDeadzone: GC(NC.I),
        swapSticks: RC,
        autoSprint: RC,
        sneakMode: AC(["toggle", "hold"]),
        tapHoldTime: AC(["short", "medium", "long"]),
        attackMode: AC(["hold", "toggle"]),
        promptFamily: AC(pC),
        hideButtonHints: RC,
        vibration: RC,
        cursorSpeed: GC(NC.H),
        cursorMagnetism: RC,
        buttonRepeat: AC(oC.m),
        largePointer: RC,
        menuBackToCategories: RC,
        swapConfirmBack: RC,
        menuNavigation: AC(["hybrid", "focus", "cursor"]),
        inventoryNavigation: AC(["hybrid", "slot", "cursor"]),
        quickChat: AC(["wheel", "off"]),
        leaderboardButton: AC(["shop", "leaderboard"]),
        gyroAiming: RC,
        gyroSensitivity: GC(NC.Y),
        gyroActivation: AC(["always", "aiming", "button"]),
        gyroButton: AC(oC.Z),
        emoteButton: AC(["tapHold", "wheel"])
      },
      JC = [{
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
      IC = CC => {
        const zC = {};
        if ("object" !== typeof CC || null === CC) return zC;
        for (const [ZC, QC] of Object.entries(CC)) Object.prototype.hasOwnProperty.call(qC.f, ZC) && PC(oC.Z, QC) && (zC[ZC] = QC);
        return zC
      },
      iC = CC => {
        const zC = {};
        for (const ZC of Object.keys(MC))("bindings" === ZC ? Object.keys(CC.bindings).length > 0 : CC[ZC] !== MC[ZC]) && (zC[ZC] = CC[ZC]);
        0 !== Object.keys(zC).length ? nC.i.setItem(gC, zC) : nC.i.removeItem(gC)
      };
    let vC = (() => {
        const CC = nC.i.getItem(gC),
          zC = (CC => {
            const zC = "object" === typeof CC && null !== CC ? CC : {},
              ZC = {
                ...MC,
                bindings: IC(zC.bindings)
              };
            for (const wC of Object.keys(xC)) {
              const CC = xC[wC](zC[wC]);
              void 0 !== CC && (ZC[wC] = CC)
            }
            const QC = Object.keys(zC).filter((CC => !!Object.prototype.hasOwnProperty.call(MC, CC) && ("bindings" === CC ? "object" !== typeof zC.bindings || null === zC.bindings || Object.keys(zC.bindings).length !== Object.keys(ZC.bindings).length : ZC[CC] !== zC[CC])));
            return QC.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${QC.join(", ")}`), ZC
          })(CC);
        return null !== CC && void 0 !== CC && iC(zC), zC
      })(),
      eC = {
        ...vC,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const CC = {},
            zC = new URLSearchParams(window.location.search);
          for (const {
              param: ZC,
              key: QC
            }
            of JC) {
            const wC = xC[QC](zC.get(ZC));
            void 0 !== wC && (CC[QC] = wC)
          }
          return CC
        })()
      };
    const hC = () => eC,
      KC = () => {
        var CC, zC;
        const ZC = hC().promptFamily;
        return "auto" !== ZC ? ZC : null !== (CC = null === (zC = FC.f.getActivePad()) || void 0 === zC ? void 0 : zC.family) && void 0 !== CC ? CC : "xbox"
      },
      YC = CC => {
        const zC = eC;
        vC = {
          ...vC,
          ...CC
        }, iC(vC), eC = {
          ...eC,
          ...CC
        }, (CC => {
          wC.o.bp(WC.j, eC), SC.some((zC => CC[zC] !== eC[zC])) && wC.o.bp(WC.g, eC)
        })(zC)
      },
      dC = () => {
        const [CC, zC] = (0, QC.useState)(eC);
        return (0, bC.c)(WC.j, zC), CC
      }
  },
  8655: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC
    });
    const QC = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      wC = CC => QC.has(CC)
  },
  8160: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => SC.d,
      f: () => RC
    });
    var QC = ZC(8167),
      wC = ZC(8170);
    const bC = .1,
      nC = .3;
    class fC {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(CC, zC) {
        const ZC = null === this.lastMs ? 0 : Math.min(Math.max(0, zC - this.lastMs), 100);
        this.lastMs = zC;
        const QC = Math.hypot(CC.x, CC.y);
        if (QC >= nC) return this.anchor = null, void(this.returning = !0);
        QC >= bC || (this.returning = !1);
        const wC = this.anchor;
        if (!wC || Math.hypot(CC.x - wC.x, CC.y - wC.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: CC.x,
          y: CC.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += ZC, this.steadyMs < 1e3) return;
        const fC = Math.max(QC, Math.hypot(wC.x, wC.y));
        fC < bC ? this.deadzone = 0 : this.returning && (this.deadzone = fC + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(CC) {
        return Math.hypot(CC.x, CC.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : CC
      }
    }
    const oC = (CC, zC) => {
        var ZC, QC;
        return null !== (ZC = CC && (null === (QC = Object.getOwnPropertyDescriptor(CC, zC)) || void 0 === QC ? void 0 : QC.get)) && void 0 !== ZC ? ZC : null
      },
      qC = CC => {
        const zC = CC.vendorName;
        return "string" === typeof zC ? zC : void 0
      },
      FC = ((CC, zC) => {
        const ZC = oC(CC, "index"),
          QC = oC(CC, "id"),
          wC = oC(CC, "connected"),
          bC = oC(CC, "mapping"),
          nC = oC(CC, "buttons"),
          fC = oC(CC, "axes"),
          FC = oC(zC, "pressed"),
          WC = oC(zC, "value");
        return ZC && QC && wC && bC && nC && fC && FC && WC ? CC => {
          const zC = nC.call(CC),
            oC = fC.call(CC),
            NC = {
              index: Number(ZC.call(CC)),
              id: String(QC.call(CC)),
              connected: !0 === wC.call(CC),
              mapping: String(bC.call(CC)),
              buttons: [],
              axes: [],
              vendorName: qC(CC)
            };
          for (let ZC = 0; ZC < zC.length; ZC++) NC.buttons.push({
            pressed: !0 === FC.call(zC[ZC]),
            value: Number(WC.call(zC[ZC]))
          });
          for (let ZC = 0; ZC < oC.length; ZC++) NC.axes.push(Number(oC[ZC]));
          return NC
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      WC = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var NC = ZC(1365),
      MC = ZC(1368);
    const gC = CC => ({
      pressed: CC,
      value: CC ? 1 : 0
    });
    var SC = ZC(1911);
    const pC = nC,
      PC = CC => {
        const zC = new Array(QC.V).fill(0);
        for (let ZC = 0; ZC < QC.V && ZC < CC.buttons.length; ZC++) {
          const wC = CC.buttons[ZC];
          zC[ZC] = wC.pressed && !(0, QC.K)(ZC) ? Math.max(wC.value, QC.x) : wC.value
        }
        return zC
      },
      GC = (CC, zC) => {
        var ZC, QC;
        return {
          x: null !== (ZC = CC.axes[zC]) && void 0 !== ZC ? ZC : 0,
          y: null !== (QC = CC.axes[zC + 1]) && void 0 !== QC ? QC : 0
        }
      };
    const RC = new class {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FC;
        this.readGamepads = CC, this.requireTrustedPads = zC, this.nativeReader = ZC, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = CC => {
          CC.isTrusted && this.trustedIndices.add(CC.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = CC => {
          this.trustedIndices.delete(CC.gamepad.index)
        }, this.ZN = CC => {
          if (this.rafId = 0, !this.running) return;
          const zC = 0 === this.lastTimestampMs ? 16 : Math.min(100, CC - this.lastTimestampMs);
          this.lastTimestampMs = CC;
          try {
            this.poll(CC, zC)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.ZN))
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
      onFrame(CC) {
        return this.frameListeners.add(CC), () => {
          this.frameListeners.delete(CC)
        }
      }
      onActivePadChanged(CC) {
        return this.connectionListeners.add(CC), () => {
          this.connectionListeners.delete(CC)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(CC) {
        return this.connectedListeners.add(CC), () => {
          this.connectedListeners.delete(CC)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const CC = this.readPads()[this.activeInfo.index],
          zC = CC ? this.readPad(CC) : null;
        return zC && zC.id === this.activeInfo.id ? CC : null
      }
      poll(CC, zC) {
        var ZC, wC;
        const bC = this.readPads();
        let nC = null,
          oC = !1;
        const qC = [],
          FC = Math.max(bC.length, this.slots.length);
        for (let RC = 0; RC < FC; RC++) {
          var WC;
          const zC = RC < bC.length ? bC[RC] : null,
            ZC = zC ? this.readPad(zC) : null;
          if (!ZC || !ZC.connected || !this.isUsable(ZC)) {
            this.slots[RC] = null;
            continue
          }
          let wC = this.slots[RC];
          wC && wC.id === ZC.id || (wC = {
            id: ZC.id,
            vq: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new fC,
            rightRest: new fC
          }, this.slots[RC] = wC);
          const FC = GC(ZC, 0),
            NC = GC(ZC, 2);
          !wC.leftSettled && Math.hypot(FC.x, FC.y) < pC && (wC.leftSettled = !0), !wC.rightSettled && Math.hypot(NC.x, NC.y) < pC && (wC.rightSettled = !0), wC.leftRest.observe(FC, CC), wC.rightRest.observe(NC, CC);
          const MC = PC(ZC),
            gC = (0, QC.q)(MC, wC.vq),
            SC = wC.vq,
            AC = gC.map(((CC, zC) => CC && !SC[zC]));
          wC.vq = gC;
          const xC = {
            pad: ZC,
            slot: wC,
            values: MC
          };
          RC === (null === (WC = this.activeInfo) || void 0 === WC ? void 0 : WC.index) && ZC.id === this.activeInfo.id ? (nC = xC, oC = AC.includes(!0)) : AC.includes(!0) && qC.push({
            polled: xC,
            rose: AC
          })
        }
        const NC = this.slots.some((CC => null !== CC));
        if (NC !== this.anyPadConnected) {
          this.anyPadConnected = NC;
          for (const CC of this.connectedListeners) CC()
        }
        const MC = null !== (ZC = null === (wC = nC) || void 0 === wC ? void 0 : wC.slot.vq) && void 0 !== ZC ? ZC : [],
          gC = oC ? void 0 : qC.find((CC => {
            let {
              rose: zC
            } = CC;
            return zC.some(((CC, zC) => CC && !MC[zC]))
          }));
        if (gC ? (nC = gC.polled, this.setActive(gC.polled.pad)) : this.activeInfo && !nC && this.setActive(null), !nC || !this.activeInfo) return;
        const SC = ((CC, zC) => {
          let {
            pad: ZC,
            slot: wC,
            values: bC
          } = CC;
          const nC = (0, QC.t)(zC);
          return nC.values = bC, wC.leftSettled && (nC.leftStick = wC.leftRest.apply(GC(ZC, 0))), wC.rightSettled && (nC.rightStick = wC.rightRest.apply(GC(ZC, 2))), nC
        })(nC, CC);
        for (const QC of this.frameListeners) QC(SC, zC, this.activeInfo)
      }
      readPad(CC) {
        const zC = this.readSnapshot(CC);
        return zC && (0, MC.e)(zC) ? (CC => {
          const zC = zC => {
              var ZC;
              return null !== (ZC = CC.buttons[zC]) && void 0 !== ZC ? ZC : gC(!1)
            },
            ZC = zC => {
              var ZC;
              return null !== (ZC = CC.axes[zC]) && void 0 !== ZC ? ZC : 0
            },
            QC = CC.axes.length > 9,
            wC = QC ? (CC => {
              const zC = 0 !== CC;
              return {
                up: zC && (CC >= -1 && CC < -.7 || CC >= .95 && CC <= 1),
                right: zC && CC >= -.75 && CC < -.1,
                down: zC && CC >= -.2 && CC < .45,
                left: zC && CC >= .4 && CC <= 1
              }
            })(ZC(9)) : {
              up: ZC(5) < -.5,
              down: ZC(5) > .5,
              left: ZC(4) < -.5,
              right: ZC(4) > .5
            };
          return {
            ...CC,
            mapping: "standard",
            buttons: [zC(1), zC(2), zC(0), zC(3), zC(4), zC(5), zC(6), zC(7), zC(8), zC(9), zC(10), zC(11), gC(wC.up), gC(wC.down), gC(wC.left), gC(wC.right), zC(12)],
            axes: [ZC(0), ZC(1), ZC(2), ZC(QC ? 5 : 3)]
          }
        })(zC) : zC
      }
      readSnapshot(CC) {
        if (this.nativeReader) try {
          return this.nativeReader(CC)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (CC => {
          const zC = CC;
          return {
            index: zC.index,
            id: zC.id,
            connected: zC.connected,
            mapping: zC.mapping,
            buttons: Array.from(zC.buttons, (CC => ({
              pressed: CC.pressed,
              value: CC.value
            }))),
            axes: Array.from(zC.axes),
            vendorName: qC(CC)
          }
        })(CC)
      }
      isUsable(CC) {
        return !(0, NC.f)(CC.id) && ("standard" !== CC.mapping ? (this.warnedNonStandardIds.has(CC.id) || (this.warnedNonStandardIds.add(CC.id), console.warn(`Controller "${CC.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(CC.index))
      }
      setActive(CC) {
        this.activeInfo = CC ? {
          index: CC.index,
          id: CC.id,
          family: (0, wC.c)(CC.id, CC.vendorName)
        } : null;
        for (const zC of this.connectionListeners) zC(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (CC) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", CC)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.ZN))
      }
    }((() => WC ? WC.call(navigator) : []), !0);
    RC.listenForConnections()
  },
  8750: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      f: () => nC,
      j: () => fC,
      l: () => wC
    });
    var QC = ZC(8753);
    const wC = CC => {
        const zC = [];
        CC.holdingGun && zC.push({
          kind: "reload"
        }), CC.touchscreenActionButton && zC.push({
          kind: "touchButton",
          label: CC.touchscreenActionButton
        });
        for (const bC of null !== (ZC = null === (wC = CC.customButtons) || void 0 === wC ? void 0 : wC.filter(QC.d)) && void 0 !== ZC ? ZC : []) {
          var ZC, wC;
          zC.push({
            kind: "customButton",
            id: bC.id,
            icon: bC.icon,
            description: bC.description
          })
        }
        return zC
      },
      bC = CC => CC.length >= 2,
      nC = CC => "specialAction" !== CC.kind,
      fC = (CC, zC) => {
        if (null === CC || null === zC) return CC === zC;
        if (CC.kind !== zC.kind) return !1;
        switch (CC.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return CC.action === zC.action;
          case "customButton":
            return CC.id === zC.id && CC.icon === zC.icon;
          case "touchButton":
            return CC.label === zC.label
        }
      }
  },
  8664: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC
    });
    const QC = {
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
  8746: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => FC,
      f: () => MC,
      g: () => WC,
      j: () => gC
    });
    var QC = ZC(48),
      wC = ZC(28),
      bC = ZC(1383),
      nC = ZC(8750),
      fC = ZC(8757);
    let oC = null;
    const qC = () => oC,
      FC = CC => {
        (0, nC.j)(oC, CC) || (oC = CC, wC.o.bp(fC.f, oC))
      },
      WC = () => {
        const [CC, zC] = (0, QC.useState)(qC);
        return (0, bC.c)(fC.f, zC), CC
      };
    let NC = !1;
    const MC = CC => {
        CC !== NC && (NC = CC, wC.o.bp(fC.h, CC))
      },
      gC = () => {
        const [CC, zC] = (0, QC.useState)(NC);
        return (0, bC.c)(fC.h, zC), CC
      }
  },
  8768: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC,
      g: () => fC
    });
    var QC = ZC(28),
      wC = ZC(8757);
    let bC = !1;
    const nC = () => bC,
      fC = CC => {
        CC !== bC && (bC = CC, QC.o.bp(wC.l, bC))
      }
  },
  8762: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => fC,
      g: () => oC
    });
    var QC = ZC(28),
      wC = ZC(8757);
    let bC = null,
      nC = 0;
    const fC = () => bC,
      oC = CC => {
        null === CC && null === bC || (bC = null === CC ? null : {
          id: ++nC,
          holdMs: CC
        }, QC.o.bp(wC.m, bC))
      }
  },
  8757: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC,
      f: () => QC,
      h: () => wC,
      l: () => fC,
      m: () => oC,
      n: () => qC,
      q: () => nC
    });
    const QC = "controllerActionHintChanged",
      wC = "controllerActionWheelHintChanged",
      bC = "controllerOpenChat",
      nC = "controllerSneakToggledChanged",
      fC = "controllerAttackLatchedChanged",
      oC = "controllerDropStackHoldChanged",
      qC = "controllerPickBlockHintChanged"
  },
  8770: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC,
      f: () => fC
    });
    var QC = ZC(28),
      wC = ZC(8757);
    let bC = !1;
    const nC = () => bC,
      fC = CC => {
        CC !== bC && (bC = CC, QC.o.bp(wC.n, bC))
      }
  },
  8831: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => nC,
      e: () => fC
    });
    var QC = ZC(28),
      wC = ZC(8757);
    let bC = !1;
    const nC = () => bC,
      fC = CC => {
        CC !== bC && (bC = CC, QC.o.bp(wC.q, bC))
      }
  },
  8721: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC
    });
    class QC {
      constructor() {
        this.downAtMs = null
      }
      update(CC, zC, ZC, QC) {
        if (CC) return this.downAtMs = ZC, null;
        if (null === this.downAtMs) return null;
        const wC = ZC - this.downAtMs >= QC;
        return zC ? wC ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, wC ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8229: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => WC,
      i: () => NC,
      l: () => fC,
      n: () => RC,
      o: () => GC
    });
    var QC = ZC(38),
      wC = ZC(8190),
      bC = ZC(8167);
    const nC = (() => {
        try {
          return ZC(8232)
        } catch {
          return null
        }
      })(),
      fC = [...bC.Z, "LeftStick", "RightStick"],
      oC = new Map,
      qC = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      FC = (new Set(Object.values(qC)), {
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
      WC = (CC, zC) => {
        var ZC, QC;
        return null !== (ZC = null === (QC = FC[qC[CC]]) || void 0 === QC ? void 0 : QC[zC]) && void 0 !== ZC ? ZC : 1
      },
      NC = (CC, zC) => {
        const ZC = `./${qC[CC]}/${zC}.svg`;
        let QC = oC.get(ZC);
        return void 0 === QC && (QC = nC ? nC(ZC) : "", oC.set(ZC, QC)), QC
      },
      MC = new Set,
      gC = [],
      SC = CC => {
        if (!MC.has(CC)) {
          MC.add(CC);
          for (const zC of fC) {
            const ZC = NC(CC, zC);
            if (ZC) {
              const CC = new Image;
              CC.crossOrigin = "anonymous", CC.src = ZC, gC.push(CC)
            }
          }
        }
      },
      pC = "controllerGlyphFamily";
    let PC = null;
    const GC = CC => {
        CC !== PC && (PC = CC, QC.i.setItem(pC, CC), SC(CC))
      },
      RC = () => {
        const CC = QC.i.getItem(pC);
        (0, wC.f)(CC) && CC !== PC && (PC = CC, SC(CC))
      }
  },
  8850: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => uC,
      c: () => rC
    });
    var QC = ZC(48),
      wC = ZC(28),
      bC = ZC(1383),
      nC = ZC(8174),
      fC = ZC(8160),
      oC = ZC(8208),
      qC = ZC(8184);
    const FC = {
        x: 0,
        y: 0,
        z: 0
      },
      WC = Math.PI / 180,
      NC = CC => Math.hypot(CC.x, CC.y, CC.z),
      MC = (CC, zC) => ({
        x: CC.x * zC,
        y: CC.y * zC,
        z: CC.z * zC
      }),
      gC = (CC, zC) => ({
        x: CC.x + zC.x,
        y: CC.y + zC.y,
        z: CC.z + zC.z
      }),
      SC = (CC, zC) => ({
        x: CC.x - zC.x,
        y: CC.y - zC.y,
        z: CC.z - zC.z
      }),
      pC = CC => {
        const zC = NC(CC);
        return 0 === zC ? FC : MC(CC, 1 / zC)
      },
      PC = CC => ({
        min: {
          ...CC
        },
        max: {
          ...CC
        }
      }),
      GC = (CC, zC) => ({
        min: {
          x: Math.min(CC.min.x, zC.x),
          y: Math.min(CC.min.y, zC.y),
          z: Math.min(CC.min.z, zC.z)
        },
        max: {
          x: Math.max(CC.max.x, zC.x),
          y: Math.max(CC.max.y, zC.y),
          z: Math.max(CC.max.z, zC.z)
        }
      }),
      RC = (CC, zC) => CC.max.x - CC.min.x <= zC && CC.max.y - CC.min.y <= zC && CC.max.z - CC.min.z <= zC;
    class AC {
      constructor() {
        this.bias = FC, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = FC, this.windowSec = 0
      }
      update(CC) {
        const zC = this.gyroRange ? GC(this.gyroRange, CC.gyro) : PC(CC.gyro),
          ZC = CC.accel ? this.accelRange ? GC(this.accelRange, CC.accel) : PC(CC.accel) : null;
        if (!RC(zC, 1) || ZC && !RC(ZC, .01)) return void this.restartWindow(CC);
        if (this.gyroRange = zC, this.accelRange = ZC, this.sum = gC(this.sum, MC(CC.gyro, CC.dtSec)), this.windowSec += CC.dtSec, this.windowSec < 1) return;
        const QC = MC(this.sum, 1 / this.windowSec);
        if (NC(QC) > 5) return;
        const wC = SC(QC, this.bias);
        let bC = 0;
        !this.calibrated || this.windowSec >= 3 ? bC = 1 : NC(wC) <= 1 && (bC = Math.min(1, CC.dtSec / 1)), this.bias = gC(this.bias, MC(wC, bC)), this.calibrated = this.calibrated || bC > 0
      }
      correct(CC) {
        return SC(CC, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = FC, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = FC, this.windowSec = 0
      }
      restartWindow(CC) {
        this.gyroRange = PC(CC.gyro), this.accelRange = CC.accel ? PC(CC.accel) : null, this.sum = FC, this.windowSec = 0
      }
    }
    class xC {
      constructor() {
        this.down = null
      }
      update(CC, zC, ZC) {
        const QC = pC(MC(zC, -1));
        if (!this.down) return this.down = QC, QC;
        const wC = MC(CC, WC * ZC),
          bC = this.down,
          nC = {
            x: bC.x - (wC.y * bC.z - wC.z * bC.y),
            y: bC.y - (wC.z * bC.x - wC.x * bC.z),
            z: bC.z - (wC.x * bC.y - wC.y * bC.x)
          },
          fC = 0 === NC(QC) ? 0 : Math.min(1, ZC / .25);
        var oC, qC;
        return this.down = pC((qC = fC, gC(oC = nC, MC(SC(QC, oC), qC)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class JC {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(CC, zC, ZC) {
        const QC = Math.hypot(CC, zC),
          wC = Math.max(0, Math.min(1, (QC - 2) / 2)),
          bC = {
            yaw: CC * (1 - wC),
            pitch: zC * (1 - wC),
            dtSec: ZC
          };
        for (this.entries.push(bC), this.windowSec += ZC; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let nC = 0,
          fC = 0;
        for (const qC of this.entries) nC += qC.yaw * qC.dtSec, fC += qC.pitch * qC.dtSec;
        const oC = this.windowSec > 0 ? {
          yaw: nC / this.windowSec,
          pitch: fC / this.windowSec
        } : {
          yaw: bC.yaw,
          pitch: bC.pitch
        };
        return {
          yaw: CC * wC + oC.yaw,
          pitch: zC * wC + oC.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class IC {
      constructor() {
        this.calibrator = new AC, this.gravity = new xC, this.smoother = new JC
      }
      process(CC, zC, ZC) {
        const QC = Math.max(0, Math.min(.05, zC));
        this.calibrator.update({
          ...CC,
          dtSec: QC
        });
        const wC = this.calibrator.correct(CC.gyro);
        let bC = wC.y;
        "player" === ZC && CC.accel && (bC = ((CC, zC) => {
          const ZC = CC.y * zC.y + CC.z * zC.z;
          return -Math.sign(ZC) * Math.min(1.41 * Math.abs(ZC), Math.hypot(CC.y, CC.z))
        })(wC, this.gravity.update(wC, CC.accel, QC)));
        const nC = this.smoother.apply(bC, wC.x, QC),
          fC = ((CC, zC) => {
            const ZC = Math.hypot(CC, zC);
            if (ZC >= 1) return {
              yaw: CC,
              pitch: zC
            };
            const QC = ZC / 1;
            return {
              yaw: CC * QC,
              pitch: zC * QC
            }
          })(nC.yaw, nC.pitch);
        return {
          yawDeg: fC.yaw * QC,
          pitchDeg: fC.pitch * QC
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
    const iC = (CC, zC) => {
      var ZC, QC, wC;
      const bC = zC * WC,
        nC = null !== (ZC = CC.beta) && void 0 !== ZC ? ZC : 0,
        fC = null !== (QC = CC.gamma) && void 0 !== QC ? QC : 0;
      return {
        x: nC * Math.cos(bC) - fC * Math.sin(bC),
        y: nC * Math.sin(bC) + fC * Math.cos(bC),
        z: null !== (wC = CC.alpha) && void 0 !== wC ? wC : 0
      }
    };
    var vC = ZC(8852);
    class eC {
      constructor(CC, zC, ZC) {
        this.hid = CC, this.sink = zC, this.onControllersChanged = ZC, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = CC => {
          this.openController(CC.device).catch((CC => {
            console.warn("Could not open motion controller", CC)
          }))
        }, this.onDisconnect = CC => {
          this.opening.has(CC.device) && this.disconnectedWhileOpening.add(CC.device);
          const zC = this.controllers.get(CC.device);
          zC && (this.forget(zC), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const CC = await this.hid.getDevices();
        for (const zC of CC) await this.openController(zC).catch((CC => {
          console.warn("Could not open motion controller", CC)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const CC of [...this.controllers.values()]) this.forget(CC);
        this.onControllersChanged()
      }
      async request() {
        const CC = await this.hid.requestDevice({
          filters: vC.k
        });
        let zC = 0;
        for (const ZC of CC) await this.openController(ZC).catch((CC => {
          console.warn("Could not open motion controller", CC), zC++
        }));
        return zC
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((CC => null !== (0, vC.d)(CC.vendorId, CC.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((CC => CC.kind))
      }
      forget(CC) {
        CC.device.removeEventListener("inputreport", CC.onReport), this.controllers.get(CC.device) === CC && this.controllers.delete(CC.device)
      }
      async openController(CC) {
        const zC = (0, vC.d)(CC.vendorId, CC.productId);
        if (!zC || !this.running || this.controllers.has(CC) || this.opening.has(CC)) return;
        this.opening.add(CC);
        let ZC = !1;
        try {
          CC.opened || await CC.open()
        } finally {
          this.opening.delete(CC), ZC = this.disconnectedWhileOpening.delete(CC)
        }
        if (ZC) return void CC.close().catch((CC => {
          console.debug("Could not close an unplugged motion controller", CC)
        }));
        if (!this.running) return;
        const QC = {
          device: CC,
          kind: zC,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: CC => {
            this.onReport(QC, CC)
          }
        };
        this.controllers.set(CC, QC), CC.addEventListener("inputreport", QC.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(QC)
        } catch (wC) {
          console.warn(`Could not turn on motion for ${zC}`, wC), this.controllers.get(CC) === QC && (this.forget(QC), this.onControllersChanged())
        }
      }
      async enableMotion(CC) {
        let {
          device: zC,
          kind: ZC
        } = CC;
        if ((0, vC.g)(ZC))
          for (const QC of vC.x[ZC]) await zC.receiveFeatureReport(QC).catch((CC => {
            console.debug(`Motion controller feature report ${QC} unavailable`, CC)
          }));
        else
          for (let QC = 0; QC < 2; QC++)
            for (const {
                subcommand: CC,
                args: ZC
              }
              of vC.z) await zC.sendReport(vC.D, (0, vC.b)(this.switchPacketCounter++, CC, ZC)), await new Promise((CC => {
              setTimeout(CC, 60)
            }))
      }
      onReport(CC, zC) {
        const ZC = (0, vC.r)(CC.kind, zC.reportId, zC.data, CC.device.productId);
        if (!ZC) return;
        const QC = null === CC.lastEventMs ? 0 : (zC.timeStamp - CC.lastEventMs) / 1e3;
        CC.lastEventMs = zC.timeStamp;
        let wC = ZC.dtSec;
        if (null !== wC && QC > 0 && (wC = Math.max(.001, Math.min(.017, QC / ZC.readings.length))), null === wC && null !== ZC.sensorClock && (0, vC.g)(CC.kind)) {
          const zC = (0, vC.t)(CC.kind, CC.lastClock, ZC.sensorClock);
          CC.lastClock = ZC.sensorClock, wC = 0 === zC ? null : zC
        }
        if (CC.lastReadingMs = zC.timeStamp, this.isPreferred(CC, zC.timeStamp))
          for (const nC of ZC.readings) {
            var bC;
            this.sink(nC, null !== (bC = wC) && void 0 !== bC ? bC : QC, `hid${CC.openedOrder}`)
          }
      }
      isPreferred(CC, zC) {
        const ZC = CC => 1e6 * vC.p[CC.kind] + CC.openedOrder;
        for (const QC of this.controllers.values())
          if (QC !== CC && zC - QC.lastReadingMs < 500 && ZC(QC) < ZC(CC)) return !1;
        return !0
      }
    }
    var hC = ZC(77);
    const KC = () => DeviceMotionEvent,
      YC = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, hC.isMobile)(),
      dC = () => {
        var CC;
        const zC = null === (CC = window.screen.orientation) || void 0 === CC ? void 0 : CC.angle;
        return "number" === typeof zC ? zC : "number" === typeof window.orientation ? window.orientation : 0
      };
    class mC {
      constructor(CC, zC) {
        this.sink = CC, this.onStateChanged = zC, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((CC => {
            console.warn("Could not enable the motion sensor", CC)
          }))
        }, this.onMotion = CC => {
          const zC = CC.rotationRate;
          if (!zC || null === zC.alpha && null === zC.beta && null === zC.gamma) return;
          const ZC = null === this.lastEventMs ? 0 : (CC.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = CC.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: iC(zC, dC()),
            accel: null
          }, ZC, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof KC().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const CC = KC().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof CC) return void this.listen();
        let zC;
        this.disarmGestureRequest();
        try {
          zC = await CC.call(DeviceMotionEvent)
        } catch (ZC) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), ZC
        }
        this.wanted && ("granted" === zC ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(CC) {
        this.state !== CC && (this.state = CC, this.onStateChanged())
      }
    }
    const HC = "controllerGyroStatusChanged",
      EC = {
        VY: 0,
        Zm: 0
      },
      lC = CC => {
        var zC, ZC;
        return "undefined" === typeof document || (null === (zC = null === (ZC = document.featurePolicy) || void 0 === ZC ? void 0 : ZC.allowsFeature(CC)) || void 0 === zC || zC)
      };
    class XC {
      constructor() {
        this.processor = new IC, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = CC => {
          const zC = CC.gyroAiming && fC.f.hasConnectedPad();
          var ZC, QC;
          zC !== this.phoneRunning && (this.phoneRunning = zC, zC ? null === (ZC = this.phone) || void 0 === ZC || ZC.start() : null === (QC = this.phone) || void 0 === QC || QC.stop());
          if (CC.gyroAiming !== this.running) {
            var wC, bC;
            if (this.running = CC.gyroAiming, this.running) null === (wC = this.hid) || void 0 === wC || wC.start().catch((CC => {
              console.warn("Could not open motion controllers", CC)
            }));
            else null === (bC = this.hid) || void 0 === bC || bC.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          wC.o.bp(HC, this.getStatus())
        };
        const CC = (() => {
            var CC;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (CC = navigator.hid) && void 0 !== CC ? CC : null
          })(),
          zC = lC("hid");
        this.hidBlocked = null !== CC && !zC, this.hid = CC && zC ? new eC(CC, ((CC, zC, ZC) => {
          this.lastHidReadingMs = performance.now(), this.feed(CC, zC, "player", ZC)
        }), this.publishStatus) : null;
        const ZC = lC("accelerometer") && lC("gyroscope");
        this.phoneBlocked = YC() && !ZC, this.phone = YC() && ZC ? new mC(((CC, zC, ZC) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(CC, zC, "local", ZC)
        }), this.publishStatus) : null, wC.o.subscribe(qC.g, this.syncWithSettings), fC.f.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, qC.k)()), this.publishStatus()
        })), this.syncWithSettings((0, qC.k)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var CC, zC, ZC, QC;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (CC = null === (zC = this.hid) || void 0 === zC ? void 0 : zC.getConnectedKinds()) && void 0 !== CC ? CC : [],
          phoneMotion: null !== (ZC = null === (QC = this.phone) || void 0 === QC ? void 0 : QC.getState()) && void 0 !== ZC ? ZC : "off",
          padConnected: fC.f.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var CC;
        await (null === (CC = this.phone) || void 0 === CC ? void 0 : CC.requestPermission())
      }
      drainLookDelta() {
        const CC = performance.now();
        CC - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = CC;
        const zC = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const ZC = (0, qC.k)();
        return ZC.gyroAiming && (CC => {
          let {
            activation: zC,
            isHeld: ZC,
            useButton: QC,
            gyroButton: wC
          } = CC;
          return "always" === zC || ZC("aiming" === zC ? QC : wC)
        })({
          activation: ZC.gyroActivation,
          isHeld: CC => oC.c.isButtonHeld(CC),
          useButton: (0, nC.i)("use"),
          gyroButton: ZC.gyroButton
        }) ? ((CC, zC) => ({
          VY: -CC.yawDeg * zC * WC,
          Zm: -CC.pitchDeg * zC * WC
        }))(zC, ZC.gyroSensitivity) : EC
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(CC, zC) {
        this.feed(CC, zC, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(CC, zC, ZC, QC) {
        this.source !== QC && (this.processor.reset(), this.source = QC);
        const wC = this.processor.process(CC, zC, ZC);
        this.pendingYawDeg += wC.yawDeg, this.pendingPitchDeg += wC.pitchDeg
      }
    }
    let cC = null;
    const uC = () => (cC || (cC = new XC), cC),
      rC = () => {
        const [CC, zC] = (0, QC.useState)((() => uC().getStatus()));
        return (0, bC.c)(HC, zC), (0, QC.useEffect)((() => {
          zC(uC().getStatus())
        }), []), CC
      }
  },
  8852: (CC, zC, ZC) => {
    ZC.d(zC, {
      D: () => RC,
      b: () => xC,
      d: () => oC,
      g: () => QC,
      k: () => fC,
      o: () => qC,
      p: () => FC,
      r: () => GC,
      t: () => pC,
      x: () => IC,
      z: () => JC
    });
    const QC = CC => "dualShock4" === CC || "dualSense" === CC,
      wC = 1356,
      bC = 1406,
      nC = [{
        vendorId: wC,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: wC,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: wC,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: wC,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: wC,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: bC,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: bC,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: bC,
        productId: 8199,
        kind: "joyConRight"
      }],
      fC = nC.map((CC => {
        let {
          vendorId: zC,
          productId: ZC
        } = CC;
        return {
          vendorId: zC,
          productId: ZC
        }
      })),
      oC = (CC, zC) => {
        var ZC, QC;
        return null !== (ZC = null === (QC = nC.find((ZC => ZC.vendorId === CC && ZC.productId === zC))) || void 0 === QC ? void 0 : QC.kind) && void 0 !== ZC ? ZC : null
      },
      qC = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      FC = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      WC = 2e3 / 32767,
      NC = 1 / 8192,
      MC = 936 / 13371,
      gC = (CC, zC, ZC) => ({
        x: CC.getInt16(zC, !0) * ZC,
        y: CC.getInt16(zC + 2, !0) * ZC,
        z: CC.getInt16(zC + 4, !0) * ZC
      }),
      SC = CC => 0 === CC.x && 0 === CC.y && 0 === CC.z,
      pC = (CC, zC, ZC) => null === zC ? null : "dualShock4" === CC ? 16 * (ZC - zC & 65535) / 3 / 1e6 : (ZC - zC >>> 0) / 3 / 1e6,
      PC = (CC, zC) => "joyConRight" === zC ? {
        x: CC.y,
        y: -CC.z,
        z: -CC.x
      } : {
        x: -CC.y,
        y: CC.z,
        z: -CC.x
      },
      GC = (CC, zC, ZC, wC) => QC(CC) ? ((CC, zC, ZC, QC) => {
        const wC = ((CC, zC, ZC) => "dualShock4" === CC ? 1 === zC && ZC >= 63 ? 0 : 17 === zC && ZC >= 65 ? 2 : null : 1 === zC && ZC >= 62 ? 0 : 49 === zC && ZC >= 63 ? 1 : null)(CC, zC, ZC.byteLength);
        if (null === wC) return null;
        if (2976 === QC && 1 === zC && 0 !== (4 & ZC.getUint8(30))) return null;
        const bC = wC + ("dualShock4" === CC ? 12 : 15),
          nC = gC(ZC, bC, WC),
          fC = gC(ZC, bC + 6, NC);
        return SC(nC) && SC(fC) ? null : {
          readings: [{
            gyro: nC,
            accel: fC
          }],
          dtSec: null,
          sensorClock: "dualShock4" === CC ? ZC.getUint16(wC + 9, !0) : ZC.getUint32(wC + 27, !0)
        }
      })(CC, zC, ZC, wC) : ((CC, zC, ZC) => {
        if (48 !== zC && 49 !== zC || ZC.byteLength < 48) return null;
        const QC = [];
        for (let wC = 0; wC < 3; wC++) {
          const zC = gC(ZC, 12 + 12 * wC, 244e-6),
            bC = gC(ZC, 18 + 12 * wC, MC);
          if (SC(bC) && SC(zC)) return null;
          QC.push({
            gyro: PC(bC, CC),
            accel: PC(zC, CC)
          })
        }
        return {
          readings: QC,
          dtSec: .005,
          sensorClock: null
        }
      })(CC, zC, ZC),
      RC = 1,
      AC = [0, 1, 64, 64, 0, 1, 64, 64],
      xC = (CC, zC, ZC) => new Uint8Array([15 & CC, ...AC, zC, ...ZC]),
      JC = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      IC = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8215: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => KC,
      f: () => XC,
      i: () => PC,
      k: () => MC.h,
      n: () => mC,
      o: () => dC,
      p: () => GC,
      s: () => HC,
      u: () => MC.n,
      w: () => MC.p,
      z: () => cC,
      B: () => MC.r,
      C: () => iC
    });
    var QC = ZC(48),
      wC = ZC(20),
      bC = ZC(28),
      nC = ZC(1383),
      fC = ZC(1240),
      oC = ZC(8184),
      qC = ZC(8223),
      FC = ZC(8170),
      WC = ZC(8160),
      NC = ZC(8229),
      MC = ZC(1347),
      gC = ZC(8167),
      SC = ZC(8655),
      pC = ZC(4311);
    const PC = CC => !CC.repeat && !(0, SC.c)(CC.key),
      GC = "PadHidesCursor";
    let RC = !1;
    const AC = CC => {
        CC !== RC && (RC = CC, document.documentElement.classList.toggle(GC, CC))
      },
      xC = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(CC) {
          let zC = !1,
            ZC = !1;
          CC.values.forEach(((CC, QC) => {
            const wC = CC >= (this.buttonsDown[QC] ? gC.U : gC.S);
            wC && !this.buttonsDown[QC] && (zC = !0, ZC = !0), this.buttonsDown[QC] = wC
          }));
          return [CC.leftStick, CC.rightStick].forEach(((CC, QC) => {
            const wC = this.stickAnchors[QC];
            Math.hypot(CC.x, CC.y) < (wC ? gC.U : .3) ? this.stickAnchors[QC] = null : (!wC || Math.hypot(CC.x - wC.x, CC.y - wC.y) >= .3) && (this.stickAnchors[QC] = {
              x: CC.x,
              y: CC.y
            }, zC = !0, ZC ||= !wC)
          })), zC && (this.lastActivityMs = CC.timestampMs), this.onlyMovedOn = zC && !ZC, zC
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(CC) {
          return !(CC - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((CC => CC)) || this.stickAnchors.some((CC => null !== CC)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((CC => null !== CC))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let JC = null,
      IC = !1;
    const iC = () => IC;
    let vC = null,
      eC = !1,
      hC = null;
    const KC = () => hC;
    let YC = !1;
    const dC = CC => {
        if (!xC.observe(CC)) return !1;
        if (YC && xC.wasOnlyMoveOn() && !(0, MC.h)()) return !1;
        YC = !1, IC = !1;
        const zC = !(0, MC.h)();
        return zC && (JC = CC, hC = !RC && eC && vC ? {
          ...vC
        } : null), eC = !1, (0, MC.n)("gamepad"), AC(!0), (0, NC.o)((0, oC.l)()), zC
      },
      mC = CC => !(0, MC.h)() || CC === JC,
      HC = () => {
        xC.reset()
      },
      EC = () => {
        const CC = wC.b.get("activeInputDevice"),
          zC = "gamepad" === CC ? WC.f.getActivePad() : null;
        return {
          device: CC,
          inGame: (0, fC.x)(),
          padMovesMouse: null !== zC && (0, FC.e)(zC.id)
        }
      },
      lC = CC => {
        document.pointerLockElement ? vC = null : (vC ??= {
          x: 0,
          y: 0
        }, vC.x = CC.clientX, vC.y = CC.clientY)
      },
      XC = () => {
        const CC = new pC.d,
          zC = zC => {
            CC.reset(), YC = !1, (0, MC.n)(zC)
          },
          ZC = CC => {
            if (CC.isTrusted) {
              if (CC instanceof KeyboardEvent) {
                if ((0, MC.l)(CC), !PC(CC)) return;
                IC = !0
              }
              if (CC instanceof PointerEvent && "touch" === CC.pointerType) return vC = null, void zC("touch");
              CC instanceof PointerEvent && (lC(CC), eC = !0), ("pointerdown" !== CC.type || (CC => {
                let {
                  device: zC,
                  inGame: ZC,
                  padMovesMouse: QC
                } = CC;
                return !("gamepad" === zC && QC && ZC)
              })(EC())) && zC("keyboardMouse")
            }
          },
          QC = CC => {
            CC.isTrusted && (vC = null, zC("touch"))
          },
          nC = CC => {
            CC.isTrusted && "touch" !== CC.pointerType && !CC.relatedTarget && (vC = null)
          },
          fC = ZC => {
            if (!ZC.isTrusted || "touch" === ZC.pointerType) return;
            lC(ZC);
            const QC = ZC.movementX || 0,
              bC = ZC.movementY || 0;
            if (0 === QC && 0 === bC) return;
            if (eC = !0, AC(!1), "keyboardMouse" === wC.b.get("activeInputDevice")) return;
            const nC = xC.isHolding(ZC.timeStamp),
              fC = EC(),
              oC = (CC => {
                let {
                  device: zC,
                  inGame: ZC,
                  padMovesMouse: QC,
                  padHolding: wC
                } = CC;
                return ("gamepad" !== zC || !QC) && "keyboardMouse" !== zC && (ZC || !wC)
              })({
                ...fC,
                inGame: fC.inGame && (0, qC.e)(),
                padHolding: nC
              });
            oC && CC.add(QC, bC, ZC.timeStamp) && (zC("keyboardMouse"), YC = xC.isStickOffRest())
          },
          oC = CC => {
            AC("gamepad" === CC)
          },
          FC = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", ZC, FC), window.addEventListener("pointerdown", ZC, FC), window.addEventListener("wheel", ZC, FC), window.addEventListener("touchstart", QC, FC), window.addEventListener("pointermove", fC, FC), window.addEventListener("pointerout", nC, FC);
        const WC = bC.o.subscribe("appManagerUpdated|activeInputDevice", oC);
        return oC(wC.b.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", ZC, FC), window.removeEventListener("pointerdown", ZC, FC), window.removeEventListener("wheel", ZC, FC), window.removeEventListener("touchstart", QC, FC), window.removeEventListener("pointermove", fC, FC), window.removeEventListener("pointerout", nC, FC), vC = null, bC.o.unsubscribe(WC), AC(!1)
        }
      },
      cC = () => {
        const [CC, zC] = (0, QC.useState)(oC.l);
        return (0, nC.c)(oC.e, (() => {
          zC((0, oC.l)())
        })), (0, nC.c)(WC.e, (() => {
          zC((0, oC.l)())
        })), CC
      }
  },
  8190: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC,
      f: () => wC
    });
    const QC = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      wC = CC => QC.includes(CC)
  },
  8700: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC,
      h: () => bC,
      j: () => oC,
      n: () => fC
    });
    var QC = ZC(1383),
      wC = ZC(1357);
    const bC = "controllerInventoryCursorChanged",
      nC = {
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
      fC = () => {
        var CC, zC;
        return (0, QC.f)(bC, null !== (CC = null === (zC = (0, wC.f)()) || void 0 === zC ? void 0 : zC.getInventoryCursorState()) && void 0 !== CC ? CC : nC)
      },
      oC = () => {
        var CC, zC;
        return null !== (CC = null === (zC = (0, wC.f)()) || void 0 === zC ? void 0 : zC.isPadSteppingSlots()) && void 0 !== CC && CC
      }
  },
  8698: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => NC,
      e: () => fC,
      h: () => oC,
      k: () => nC,
      n: () => bC,
      r: () => FC,
      u: () => WC
    });
    let QC = null;
    const wC = new Set,
      bC = CC => (QC = CC, () => {
        if (QC === CC) {
          QC = null;
          for (const CC of wC) CC()
        }
      }),
      nC = CC => (wC.add(CC), () => {
        wC.delete(CC)
      }),
      fC = () => QC,
      oC = () => null !== QC;
    let qC = null;
    const FC = CC => {
        qC = CC
      },
      WC = () => {
        const CC = qC;
        return qC = null, CC
      },
      NC = (CC, zC) => {
        var ZC, QC;
        return null !== (ZC = null !== (QC = CC.find((CC => CC.element === zC))) && void 0 !== QC ? QC : CC.find((CC => CC.element.contains(zC)))) && void 0 !== ZC ? ZC : null
      }
  },
  8704: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC,
      e: () => nC
    });
    var QC = ZC(48);
    const wC = new WeakMap,
      bC = CC => {
        var zC, ZC;
        return null !== (zC = null === (ZC = wC.get(CC)) || void 0 === ZC ? void 0 : ZC.current) && void 0 !== zC ? zC : null
      },
      nC = (CC, zC) => {
        const ZC = (0, QC.useRef)(zC);
        ZC.current = zC;
        const bC = (0, QC.useRef)(null);
        (0, QC.useEffect)((() => {
          const zC = CC.current,
            QC = bC.current;
          zC !== QC && (QC && wC.get(QC) === ZC && wC.delete(QC), bC.current = zC, zC && wC.set(zC, ZC))
        })), (0, QC.useEffect)((() => () => {
          const CC = bC.current;
          CC && wC.get(CC) === ZC && wC.delete(CC), bC.current = null
        }), [])
      }
  },
  8824: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => fC,
      f: () => qC,
      i: () => WC,
      j: () => FC,
      n: () => oC,
      q: () => MC
    });
    var QC = ZC(28),
      wC = ZC(1911),
      bC = ZC(1357),
      nC = ZC(1347);
    const fC = CC => {
        var zC, ZC;
        return (0, nC.h)() && null !== (zC = null === (ZC = (0, bC.f)()) || void 0 === ZC ? void 0 : ZC.getGlyphForNoaAction(CC)) && void 0 !== zC ? zC : null
      },
      oC = "controllerGlyph:",
      qC = CC => {
        var zC, ZC;
        return null !== (zC = null === (ZC = (0, bC.f)()) || void 0 === ZC ? void 0 : ZC.getPadGlyphIconName(CC)) && void 0 !== zC ? zC : `${oC}xbox/${CC}`
      },
      FC = CC => CC.startsWith(oC),
      WC = CC => {
        var zC, ZC;
        return FC(CC) && null !== (zC = null === (ZC = (0, bC.f)()) || void 0 === ZC ? void 0 : ZC.getPadGlyphIconUrl(CC)) && void 0 !== zC ? zC : null
      },
      NC = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", nC.e, wC.g, wC.d],
      MC = CC => {
        const zC = NC.map((zC => QC.o.subscribe(zC, CC)));
        return () => {
          for (const CC of zC) QC.o.unsubscribe(CC)
        }
      }
  },
  8223: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => qC,
      e: () => FC,
      i: () => oC,
      m: () => fC
    });
    var QC = ZC(20),
      wC = ZC(1557),
      bC = ZC(1654);
    const nC = new Map,
      fC = (CC, zC) => (nC.has(CC) && console.warn(`Gameplay blocker "${CC}" registered twice; the newer one replaces it.`), nC.set(CC, zC), () => {
        nC.get(CC) === zC && nC.delete(CC)
      }),
      oC = () => (0, bC.d)(document.activeElement),
      qC = function() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [zC, ZC] of nC)
          if (!CC.includes(zC) && ZC()) return zC;
        return null
      },
      FC = function() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === QC.b.get("gameState") && (!(0, wC.s)() && (!oC() && null === qC(CC)))
      }
  },
  8167: (CC, zC, ZC) => {
    ZC.d(zC, {
      C: () => YC,
      E: () => AC,
      I: () => PC,
      K: () => pC,
      O: () => qC,
      S: () => NC,
      U: () => MC,
      V: () => wC,
      Z: () => QC,
      ab: () => JC,
      bb: () => hC,
      c: () => mC,
      d: () => KC,
      eb: () => dC,
      h: () => FC,
      i: () => oC,
      ib: () => xC,
      k: () => fC,
      m: () => iC,
      q: () => GC,
      s: () => IC,
      t: () => bC,
      x: () => WC,
      y: () => RC
    });
    const QC = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      wC = QC.length,
      bC = function() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(wC).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: CC
        }
      },
      nC = Object.fromEntries(QC.map(((CC, zC) => [CC, zC]))),
      fC = CC => nC[CC],
      oC = function(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const QC = Math.hypot(CC.x, CC.y);
        if (QC <= zC) return {
          x: 0,
          y: 0
        };
        const wC = Math.min(1, (QC - zC) / Math.max(1e-4, ZC - zC));
        return {
          x: CC.x / QC * wC,
          y: CC.y / QC * wC
        }
      },
      qC = ["exponential", "linear", "boost"],
      FC = (CC, zC) => {
        const ZC = Math.hypot(CC.x, CC.y);
        if (0 === ZC) return {
          x: 0,
          y: 0
        };
        const QC = ((CC, zC) => {
          const ZC = Math.max(0, Math.min(1, CC));
          return "linear" === zC ? ZC : ZC * ZC
        })(ZC, zC);
        return {
          x: CC.x / ZC * QC,
          y: CC.y / ZC * QC
        }
      },
      WC = .5,
      NC = .3,
      MC = .2,
      gC = fC("LT"),
      SC = fC("RT"),
      pC = CC => CC === gC || CC === SC,
      PC = (CC, zC) => {
        const ZC = fC(zC);
        return pC(ZC) ? CC[ZC] > .35 : CC[ZC] >= WC
      },
      GC = (CC, zC) => CC.map(((CC, ZC) => pC(ZC) ? zC[ZC] ? CC > .35 : CC >= .55 : CC >= WC)),
      RC = ["Up", "Down", "Left", "Right"],
      AC = CC => RC.includes(CC),
      xC = function(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(CC.x, CC.y) < zC ? null : Math.abs(CC.x) > Math.abs(CC.y) ? CC.x > 0 ? "Right" : "Left" : CC.y > 0 ? "Down" : "Up"
      },
      JC = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      IC = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      iC = ["default", "slow", "off"],
      vC = 800,
      eC = 250,
      hC = (CC, zC) => "off" === zC ? null : "slow" === zC ? {
        initialDelayMs: Math.max(CC.initialDelayMs, vC),
        intervalMs: Math.max(CC.intervalMs, eC)
      } : CC;
    class KC {
      constructor(CC) {
        this.readTiming = CC, this.vq = !1, this.timing = null, this.nextFireMs = 0
      }
      update(CC, zC) {
        return CC ? this.vq ? !!(this.timing && zC >= this.nextFireMs) && (this.nextFireMs = zC + this.timing.intervalMs, !0) : (this.vq = !0, this.timing = this.readTiming(), this.nextFireMs = zC + (null !== (ZC = null === (QC = this.timing) || void 0 === QC ? void 0 : QC.initialDelayMs) && void 0 !== ZC ? ZC : 0), !0) : (this.vq = !1, !1);
        var ZC, QC
      }
      reset() {
        this.vq = !1
      }
    }
    const YC = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      dC = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class mC {
      constructor(CC) {
        this.timer = CC, this.direction = null
      }
      update(CC, zC) {
        return CC !== this.direction && (this.timer.reset(), this.direction = CC), this.timer.update(null !== CC, zC) ? CC : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8713: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC,
      d: () => bC
    });
    let QC = -1 / 0;
    const wC = () => {
        QC = performance.now()
      },
      bC = CC => performance.now() - QC < CC
  },
  8659: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC,
      f: () => bC
    });
    var QC = ZC(8184),
      wC = ZC(8167);
    const bC = CC => (0, wC.bb)(CC, (0, QC.k)().buttonRepeat),
      nC = CC => new wC.d((() => bC(CC)))
  },
  8203: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => oC,
      d: () => bC,
      h: () => fC
    });
    var QC = ZC(28),
      wC = ZC(8184);
    const bC = (CC, zC) => "OpenShop" === CC ? "shop" === zC : "OpenLobbyLeaderboard" !== CC || "leaderboard" === zC;
    let nC = !1;
    const fC = CC => {
        CC !== nC && (nC = CC, QC.o.bp(wC.e, (0, wC.k)()))
      },
      oC = () => ((CC, zC) => "shop" === CC && zC ? "shop" : "leaderboard")((0, wC.k)().leaderboardButton, nC)
  },
  8198: (CC, zC, ZC) => {
    ZC.d(zC, {
      $: () => PC,
      A: () => HC,
      Cb: () => iC,
      D: () => FC,
      H: () => oC,
      I: () => fC,
      K: () => xC,
      O: () => NC,
      Q: () => MC,
      U: () => WC,
      X: () => AC,
      Y: () => qC,
      bb: () => eC,
      c: () => EC,
      eb: () => RC,
      f: () => XC,
      fb: () => SC,
      i: () => hC,
      jb: () => pC,
      l: () => nC,
      lb: () => gC,
      o: () => vC,
      ob: () => GC,
      qb: () => dC,
      rb: () => bC,
      s: () => IC,
      ub: () => JC,
      w: () => mC,
      yb: () => lC
    });
    var QC = ZC(8180),
      wC = ZC(8167);
    const bC = {
        min: 25,
        max: 500,
        step: 5
      },
      nC = {
        min: 25,
        max: 100,
        step: 5
      },
      fC = {
        min: 0,
        max: .4,
        step: .01
      },
      oC = {
        min: 25,
        max: 300,
        step: 5
      },
      qC = {
        min: .5,
        max: 6,
        step: .1
      },
      FC = (CC, zC) => {
        if (!Number.isFinite(CC)) return zC.min;
        const ZC = zC.min + Math.round((CC - zC.min) / zC.step) * zC.step,
          QC = Math.min(zC.max, Math.max(zC.min, ZC));
        return Math.round(1e3 * QC) / 1e3
      },
      WC = CC => `${Math.round(CC)}%`,
      NC = CC => WC(100 * CC),
      MC = CC => `${CC.toFixed(1)}\xd7`,
      gC = [{
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
      SC = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      pC = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      PC = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      GC = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      RC = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      AC = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      xC = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      JC = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      IC = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      iC = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      vC = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      eC = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      hC = {
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
      KC = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      YC = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      dC = QC.c.map((CC => {
        let {
          group: zC,
          actions: ZC
        } = CC;
        const QC = ZC.map((CC => ({
          kind: "action",
          action: CC
        })));
        return {
          titleKey: KC[zC],
          rows: "gameplay" === zC ? [...YC, ...QC] : QC
        }
      })),
      mC = wC.Z.filter((CC => "Home" !== CC)),
      HC = 1e4;
    class EC {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = CC, this.openButton = zC, this.accepts = ZC, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(CC, zC) {
        var ZC;
        this.updateIgnored(CC, zC);
        const QC = zC - (null !== (ZC = this.startMs) && void 0 !== ZC ? ZC : zC) >= 250;
        for (const wC of mC)
          if (wC !== this.cancelButton && QC && !this.ignoredUntilMs.has(wC) && CC.wasPressed(wC) && this.accepts(wC)) return {
            kind: "bind",
            button: wC
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (CC.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = zC
        }
        return null === this.cancelDownAtMs ? null : CC.isHeld(this.cancelButton) && zC - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : CC.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(CC) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (CC - this.cancelDownAtMs) / 700)
      }
      updateIgnored(CC, zC) {
        if (null === this.startMs) {
          this.startMs = zC;
          for (const zC of mC) CC.isDown(zC) && this.ignoredUntilMs.set(zC, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, zC + 250)
        }
        for (const [ZC, QC] of this.ignoredUntilMs) {
          const wC = CC.isDown(ZC);
          QC === 1 / 0 ? wC || ZC !== this.openButton ? wC || this.ignoredUntilMs.delete(ZC) : this.ignoredUntilMs.set(ZC, zC + 250) : zC >= QC ? this.ignoredUntilMs.delete(ZC) : wC && this.ignoredUntilMs.set(ZC, 1 / 0)
        }
      }
    }
    const lC = 6e3;
    class XC {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(CC, zC) {
        let {
          pressed: ZC,
          vq: QC
        } = CC;
        if (ZC) {
          const CC = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== CC && zC - CC < 1500 ? [...this.pressesAtMs, zC] : [zC], this.pressesAtMs.length >= 3) return 1
        }
        return QC ? (this.downAtMs ??= zC, Math.min(1, (zC - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  8735: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      f: () => wC
    });
    let QC = null;
    const wC = function(CC) {
        const zC = {
          cycle: CC,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return QC = zC, () => {
          QC === zC && (QC = null)
        }
      },
      bC = () => {
        var CC;
        return null !== (CC = QC) && void 0 !== CC && CC.canCycle() ? QC.cycle : null
      }
  },
  4979: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      g: () => nC
    });
    var QC = ZC(48);
    const wC = new WeakMap,
      bC = CC => {
        var zC;
        const ZC = CC.closest("[data-pad-slider]");
        return ZC && null !== (zC = wC.get(ZC)) && void 0 !== zC ? zC : null
      },
      nC = (CC, zC) => {
        const ZC = (0, QC.useRef)(zC);
        ZC.current = zC, (0, QC.useEffect)((() => {
          if (CC.current) return ((CC, zC) => (wC.set(CC, zC), () => {
            wC.get(CC) === zC && wC.delete(CC)
          }))(CC.current, {
            adjust: CC => {
              ZC.current.adjust(CC)
            },
            setFraction: CC => {
              ZC.current.setFraction(CC)
            },
            endDrag: () => {
              ZC.current.endDrag()
            }
          })
        }), [CC])
      }
  },
  8812: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => wC,
      i: () => nC,
      k: () => bC,
      o: () => QC,
      r: () => fC,
      u: () => qC,
      y: () => FC
    });
    const QC = "controllerActionWheelOpen",
      wC = "controllerActionWheelAim",
      bC = "controllerActionWheelCommit",
      nC = "controllerActionWheelClose",
      fC = "controllerActionWheelPick";
    let oC = !1;
    const qC = () => oC,
      FC = CC => {
        oC = CC
      }
  },
  8807: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => bC,
      d: () => wC
    });
    let QC = 0;
    const wC = () => {
        QC++
      },
      bC = () => QC
  },
  8729: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => oC,
      e: () => wC,
      h: () => nC,
      l: () => bC,
      n: () => QC,
      r: () => qC
    });
    const QC = "controllerQuickChatWheelOpen",
      wC = "controllerQuickChatWheelAim",
      bC = "controllerQuickChatWheelCommit",
      nC = "controllerQuickChatWheelClose";
    let fC = !1;
    const oC = () => fC,
      qC = CC => {
        fC = CC
      }
  },
  8738: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => bC,
      f: () => wC
    });
    var QC = ZC(28);
    const wC = "localBlockBroken";

    function bC() {
      return {
        onPlayerChangeBlock(CC, zC, ZC, bC, nC, fC) {
          "Air" === fC && QC.o.bp(wC)
        }
      }
    }
  },
  8774: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC
    });
    var QC = ZC(8776),
      wC = ZC(600),
      bC = ZC(113);

    function nC(CC) {
      var zC, ZC;
      if ((0, wC.H)(CC)) return !0;
      const nC = null !== (zC = null === (ZC = bC.s[bC.y]) || void 0 === ZC ? void 0 : ZC.adConfig.showRewardedAds) && void 0 !== zC && zC;
      for (const wC in CC) {
        const zC = CC[wC];
        if (null !== zC && void 0 !== zC && zC.items)
          for (const CC in zC.items)
            if ((0, QC.k)(zC.items[CC], nC)) return !1
      }
      return !0
    }
  },
  8792: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => wC,
      i: () => QC
    });
    const QC = 100;

    function wC(CC) {
      let {
        translationKeys: zC = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return CC.map((CC => {
        var ZC;
        return null !== (ZC = function(CC, zC) {
          if ("string" === typeof CC) return CC;
          const ZC = "str" in CC ? CC.str : CC;
          if ("string" === typeof ZC) return ZC;
          if ("entityName" in ZC) return ZC.entityName;
          if (zC && "translationKey" in ZC) return `{${ZC.translationKey}${void 0===ZC.params?"":` ${JSON.stringify(ZC.params)}`}}`;
          return null
        }(CC, zC)) && void 0 !== ZC ? ZC : " "
      })).join("")
    }
  },
  8815: () => {},
  8238: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8242: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8244: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8251: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8255: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8258: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8265: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8269: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8273: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8275: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8284: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8287: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8295: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8298: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8304: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8308: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8316: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8323: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8332: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8340: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8349: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8354: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8358: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8367: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8370: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8378: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8386: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8390: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8395: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8402: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8404: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8409: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8415: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8417: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8421: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8426: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8431: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8436: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8443: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8450: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8453: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8457: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8460: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8464: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8468: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8477: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8483: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8488: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8495: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8503: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8507: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8516: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8520: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8525: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8531: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8539: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8547: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8553: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8556: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8564: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8573: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8581: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8587: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8592: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8596: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8599: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8608: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8610: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8618: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8621: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8625: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8628: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8636: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8641: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8645: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8649: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);
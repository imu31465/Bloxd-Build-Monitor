export const id = 221;
export const ids = [221];
export const modules = {
  37536: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      isMoreOptionsInFooter: () => pW,
      showOnboardingPopup: () => fW
    });
    var mW = OW(62),
      EW = OW(1172),
      NW = OW(1422),
      PW = OW(1532),
      LW = OW(1102),
      cW = OW(4994),
      wW = OW(1659),
      tW = OW(344),
      ZW = OW(1653),
      xW = OW(3083),
      lW = OW(1089),
      AW = OW.n(lW),
      bW = OW(1111),
      jW = OW(37541),
      UW = OW(3247),
      kW = OW(4723),
      sW = OW(1107),
      MW = OW(1391),
      KW = OW(1283);
    const SW = "OnboardingMorePanel";

    function YW(WW) {
      let {
        open: iW,
        onToggle: OW
      } = WW;
      const {
        t: mW
      } = (0, EW.B)();
      return (0, KW.jsxs)("button", {
        type: "button",
        className: "OnboardingMoreOptions",
        "aria-expanded": iW,
        "aria-controls": iW ? SW : void 0,
        onClick: () => {
          iW || (0, cW.l)("more"), OW()
        },
        children: [mW("homePage:onboardingMoreOptions"), (0, KW.jsx)(MW.c, {
          name: iW ? "caret-up" : "caret-down"
        })]
      })
    }
    const yW = Object.entries(wW.e).filter((WW => {
      let [, iW] = WW;
      return "default" === iW.cosmeticPack
    }));

    function TW(WW) {
      return ZW.e.default.colourGroups[WW].colours.map(((WW, iW) => {
        let {
          rbg: OW,
          order: mW
        } = WW;
        return {
          rbg: OW,
          order: mW,
          index: iW
        }
      })).sort(((WW, iW) => WW.order - iW.order))
    }
    const JW = TW("eyes"),
      hW = TW("skin");

    function HW(WW, iW) {
      var OW;
      if (void 0 === iW || "default" !== (null === (OW = (0, xW.l)(WW, iW)) || void 0 === OW ? void 0 : OW.cosmeticPack)) return null;
      const mW = (0, xW.h)(iW);
      return mW && [mW[0], Number(mW[1])]
    }

    function nW(WW, iW, OW) {
      return `${WW}_${iW}_${OW}`
    }

    function uW(WW) {
      let {
        label: iW,
        colours: OW,
        picked: mW,
        onPick: NW
      } = WW;
      const {
        t: PW
      } = (0, EW.B)();
      return (0, KW.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, KW.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: iW
        }), (0, KW.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": iW,
          children: OW.map(((WW, iW) => {
            let {
              rbg: OW,
              index: EW
            } = WW;
            return (0, KW.jsx)("button", {
              type: "button",
              className: AW()("OnboardingSwatch", {
                OnboardingSwatchSelected: EW === mW
              }),
              style: {
                backgroundColor: `rgb(${OW.join(",")})`
              },
              role: "radio",
              "aria-checked": EW === mW,
              "aria-label": PW("homePage:onboardingColour", {
                number: iW + 1
              }),
              onClick: () => {
                NW(EW)
              }
            }, EW)
          }))
        })]
      })
    }

    function oW(WW) {
      let {
        moreOptions: iW,
        onToggleMoreOptions: OW,
        moreOptionsBelowPresets: NW
      } = WW;
      const {
        t: PW
      } = (0, EW.B)(), {
        userContext: LW,
        isUserContextUpdating: wW
      } = (0, sW.e)(), [, ZW] = (0, mW.useReducer)((WW => WW + 1), 0), xW = (0, mW.useRef)({}), lW = (0, mW.useRef)(null), MW = (0, mW.useRef)({}), TW = (0, kW.c)(), oW = {
        ...LW.getPlayerCosmetics(),
        ...lW.current
      }, dW = (0, mW.useRef)(null);
      (0, mW.useEffect)((() => {
        var WW;
        iW && (null === (WW = dW.current) || void 0 === WW || WW.scrollIntoView({
          block: "nearest"
        }))
      }), [iW]);
      const eW = (WW, iW) => {
          (0, jW.d)(WW, Object.entries(iW)), TW.current ? ZW() : WW.publishUpdateIfCurrent()
        },
        vW = function(WW) {
          let {
            isDefault: iW = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const OW = {
            ...!wW && LW.isLoggedIn() ? MW.current : lW.current,
            ...WW
          };
          if (!wW) return lW.current = null, MW.current = {}, void eW(LW, OW);
          lW.current = OW, iW || (MW.current = {
            ...MW.current,
            ...WW
          }), ZW(), bW.userContextManager.getCurrentUserContext().then((WW => {
            if (lW.current !== OW) return;
            lW.current = null;
            const iW = MW.current;
            MW.current = {};
            const mW = WW.isLoggedIn() ? iW : OW;
            0 !== Object.keys(mW).length ? eW(WW, mW) : TW.current && ZW()
          })).catch((WW => {
            console.warn("Couldn't put on the onboarding look held for the account", WW), lW.current === OW && (lW.current = null, MW.current = {}, TW.current && ZW())
          }))
        },
        gW = (0, mW.useRef)(!1);
      (0, mW.useEffect)((() => {
        gW.current || (gW.current = !0, !wW && LW.isLoggedIn() || vW((0, tW.cc)(yW)[1].cosmetics, {
          isDefault: !0
        }))
      }), []), (0, mW.useEffect)((() => () => {
        LW.publishUpdateIfCurrent()
      }), [LW]);
      const DW = HW("eyes", oW.eyes),
        VW = HW("skin", oW.skin);
      return (0, KW.jsxs)(KW.Fragment, {
        children: [(0, KW.jsx)("div", {
          className: "OnboardingPresets",
          children: yW.map(((WW, iW) => {
            let [OW, {
              cosmetics: mW
            }] = WW;
            const EW = function(WW, iW) {
              return Object.entries(iW).every((iW => {
                let [OW, mW] = iW;
                return "skin" === OW || ("eyes" === OW ? (null === (EW = HW("eyes", WW.eyes)) || void 0 === EW ? void 0 : EW[0]) === (null === (NW = HW("eyes", mW)) || void 0 === NW ? void 0 : NW[0]) : WW[OW] === mW);
                var EW, NW
              }))
            }(oW, mW);
            return (0, KW.jsx)("button", {
              type: "button",
              className: AW()("OnboardingPreset", {
                OnboardingPresetSelected: EW
              }),
              "aria-label": PW("homePage:onboardingPreset", {
                number: iW + 1
              }),
              "aria-pressed": EW,
              onClick: () => {
                (0, cW.l)(`preset.${OW}`);
                const {
                  eyes: WW,
                  skin: iW
                } = xW.current;
                vW({
                  ...mW,
                  ...void 0 !== WW && {
                    eyes: nW("eyes", HW("eyes", mW.eyes)[0], WW)
                  },
                  ...void 0 !== iW && {
                    skin: nW("skin", "0", iW)
                  }
                })
              },
              children: (0, KW.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${OW}_preview.png)`
                }
              })
            }, OW)
          }))
        }), NW && (0, KW.jsx)(YW, {
          open: iW,
          onToggle: OW
        }), iW && (0, KW.jsxs)("div", {
          ref: dW,
          id: SW,
          className: "OnboardingMore",
          children: [(0, KW.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, KW.jsx)(UW.e, {
              cosmetics: oW
            })
          }), (0, KW.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, KW.jsx)(uW, {
              label: PW("homePage:onboardingEyeColour"),
              colours: JW,
              picked: null === DW || void 0 === DW ? void 0 : DW[1],
              onPick: WW => {
                var iW;
                (0, cW.l)("eyes"), xW.current.eyes = WW, vW({
                  eyes: nW("eyes", null !== (iW = null === DW || void 0 === DW ? void 0 : DW[0]) && void 0 !== iW ? iW : "0", WW)
                })
              }
            }), (0, KW.jsx)(uW, {
              label: PW("homePage:onboardingSkinColour"),
              colours: hW,
              picked: null === VW || void 0 === VW ? void 0 : VW[1],
              onPick: WW => {
                (0, cW.l)("skin"), xW.current.skin = WW, vW({
                  skin: nW("skin", "0", WW)
                })
              }
            })]
          })]
        })]
      })
    }
    var dW = OW(1259),
      eW = OW(25),
      vW = OW(35118),
      gW = OW(1383),
      DW = OW(1782);

    function VW(WW) {
      const {
        t: iW
      } = (0, EW.B)(), {
        userContext: OW,
        isUserContextUpdating: NW
      } = (0, sW.e)(), LW = NW ? null : OW.getPlayerName(), wW = (0, mW.useRef)(null), [tW, ZW] = (0, mW.useState)((() => null === LW ? (0, dW.d)() : null)), [xW, lW] = (0, mW.useState)(null), [AW, bW] = (0, mW.useState)(!1), jW = (0, mW.useRef)("EZ"), UW = (0, kW.c)(), SW = (0, mW.useRef)(null !== tW), YW = (0, mW.useRef)(!1), yW = (0, mW.useRef)(null), TW = null !== tW && void 0 !== tW ? tW : LW, JW = (0, mW.useRef)(null), hW = WW => {
        wW.current && (wW.current.value = WW), ZW(WW)
      }, HW = (0, mW.useRef)(!1);
      (0, mW.useEffect)((() => {
        var WW, iW;
        !AW && HW.current && (HW.current = !1, null === (WW = wW.current) || void 0 === WW || WW.focus(), null === (iW = wW.current) || void 0 === iW || iW.select())
      }), [AW]);
      const nW = (0, mW.useRef)(null);
      (0, mW.useEffect)((() => {
        var WW;
        null !== xW && (null === (WW = nW.current) || void 0 === WW || WW.scrollIntoView({
          block: "nearest"
        }))
      }), [xW]);
      const uW = (WW, iW) => {
        const OW = document.activeElement === wW.current || HW.current;
        bW(!0), lW(null), WW.then((WW => {
          UW.current && (bW(!1), HW.current = OW, iW(WW))
        }))
      };
      (0, mW.useEffect)((() => {
        var WW, iW;
        eW.d.get("isTouchScreen") || (null === (WW = wW.current) || void 0 === WW || WW.focus(), null === (iW = wW.current) || void 0 === iW || iW.select())
      }), []);
      const oW = () => {
          (0, cW.p)(jW.current), WW()
        },
        VW = (WW, iW) => {
          var OW, mW;
          if (yW.current === WW) return jW.current = null !== (OW = null === (mW = JW.current) || void 0 === mW ? void 0 : mW.outcome) && void 0 !== OW ? OW : "EZ", void oW();
          yW.current = WW, lW(iW)
        },
        pW = WW => "refused" === WW.outcome ? WW.message : iW((0, vW.i)(WW.failure)),
        fW = WW => !(WW.length >= dW.j) && (lW({
          kind: "error",
          message: iW("homePage:changeNameMinLengthError", {
            length: dW.j
          })
        }), !0),
        CW = WW => {
          var mW, EW, NW;
          WW.toLowerCase() !== (null === (mW = null !== (EW = null === (NW = JW.current) || void 0 === NW ? void 0 : NW.name) && void 0 !== EW ? EW : LW) || void 0 === mW ? void 0 : mW.toLowerCase()) ? fW(WW) || uW((0, vW.e)(OW, WW), (OW => {
            "taken" !== OW.outcome ? "refused" !== OW.outcome && "failed" !== OW.outcome ? OW.name !== WW ? (jW.current = "suffixed", JW.current = {
              name: OW.name,
              outcome: jW.current
            }, hW(OW.name), lW({
              kind: "suffixed",
              taken: WW,
              name: OW.name
            })) : oW() : VW(WW, {
              kind: "error",
              message: pW(OW)
            }) : VW(WW, {
              kind: "error",
              message: iW("homePage:onboardingNameAllTaken")
            })
          })) : oW()
        };
      (0, mW.useEffect)((() => {
        if (!AW || null !== LW || !YW.current) return;
        const WW = setTimeout((() => {
          YW.current = !1, bW(!1), VW(TW, {
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(WW)
        }
      }), [AW, LW]), (0, mW.useEffect)((() => {
        if (null === LW) return;
        const WW = SW.current && "EZ" === jW.current && OW.isLoggedIn();
        SW.current = !1, yW.current = null, "noAccount" === (null === xW || void 0 === xW ? void 0 : xW.kind) && lW(null), WW && hW(LW), YW.current && (YW.current = !1, bW(!1), CW(WW ? LW : TW))
      }), [LW]);
      const XW = "error" === (null === xW || void 0 === xW ? void 0 : xW.kind) ? xW.message : "noAccount" === (null === xW || void 0 === xW ? void 0 : xW.kind) ? iW("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, KW.jsxs)("div", {
          className: "OnboardingNameField",
          ref: nW,
          children: [(0, KW.jsx)("div", {
            className: "OnboardingSubtitle",
            children: iW("general:name")
          }), null === TW && (0, KW.jsx)(gW.d, {}), null !== TW && (0, KW.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, KW.jsx)(DW.b, {
              className: "OnboardingNameInput",
              ariaLabel: iW("general:name"),
              maxLength: dW.f,
              defaultValue: TW,
              domRef: wW,
              forcedText: AW ? TW : null,
              onEnter: () => {
                var WW;
                null === (WW = wW.current) || void 0 === WW || WW.blur()
              },
              onValueChange: WW => {
                const OW = (0, dW.p)(WW);
                OW !== WW && wW.current && (wW.current.value = OW), lW(OW !== WW ? {
                  kind: "error",
                  message: iW("homePage:nameCharacters")
                } : null), OW !== TW && (jW.current = "changed"), ZW(OW)
              }
            }), (0, KW.jsx)(PW.f, {
              className: "OnboardingRandomName",
              ariaLabel: iW("homePage:onboardingRandomName"),
              disabled: AW,
              onClick: () => {
                (() => {
                  if (lW(null), null === LW || OW.isLoggedIn()) return hW((0, dW.d)()), void(jW.current = "rolled");
                  uW((0, vW.m)(OW), (WW => {
                    var iW, mW;
                    if ("refused" === WW.outcome || "failed" === WW.outcome) return hW(OW.getPlayerName()), jW.current = null !== (iW = null === (mW = JW.current) || void 0 === mW ? void 0 : mW.outcome) && void 0 !== iW ? iW : "EZ", void lW({
                      kind: "error",
                      message: pW(WW)
                    });
                    jW.current = "rolled", JW.current = {
                      name: WW.name,
                      outcome: "rolled"
                    }, hW(WW.name)
                  }))
                })()
              },
              children: (0, KW.jsx)(MW.c, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === xW || void 0 === xW ? void 0 : xW.kind) && (0, KW.jsx)("div", {
            className: "OnboardingNameNote",
            children: iW("homePage:onboardingNameSuffixed", {
              taken: xW.taken,
              name: xW.name
            })
          }), null !== XW && (0, KW.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: XW
          })]
        }),
        submit: () => {
          if (!AW && null !== TW) {
            if (null === LW) {
              if (fW(TW)) return;
              return HW.current = document.activeElement === wW.current, YW.current = !0, bW(!0), void lW(null)
            }
            CW(TW)
          }
        },
        busy: AW,
        ready: null !== TW
      }
    }

    function pW(WW) {
      return WW < 500
    }

    function fW() {
      const WW = {
          finished: !1
        },
        iW = {
          press: null
        };
      return NW.NotificationProvider.showCustomPopup({
        body: OW => (0, KW.jsx)(CW, {
          onFinish: () => {
            (0, cW.j)(), WW.finished = !0, OW()
          },
          doneRef: iW
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        disableExitButton: !0,
        ignoreBackgroundPress: !0,
        dismiss: () => {
          var WW;
          null === (WW = iW.press) || void 0 === WW || WW.call(iW)
        },
        onClose: () => {
          WW.finished || (0, cW.f)()
        }
      })
    }

    function CW(WW) {
      let {
        onFinish: iW,
        doneRef: OW
      } = WW;
      const {
        t: NW
      } = (0, EW.B)(), wW = VW(iW), tW = wW.ready && !wW.busy ? wW.submit : null;
      (0, mW.useEffect)((() => (OW.press = tW, () => {
        OW.press = null
      })));
      const [ZW, xW] = (0, mW.useState)(!1), lW = (0, LW.l)(((WW, iW) => pW(iW))), AW = () => {
        xW(!ZW)
      };
      return (0, mW.useEffect)((() => {
        (0, cW.t)()
      }), []), (0, KW.jsxs)("div", {
        className: "Onboarding",
        children: [(0, KW.jsx)("div", {
          className: "OnboardingTitle",
          children: NW("homePage:onboardingTitle")
        }), (0, KW.jsxs)("div", {
          className: "OnboardingBody",
          children: [wW.field, (0, KW.jsx)(oW, {
            moreOptions: ZW,
            onToggleMoreOptions: AW,
            moreOptionsBelowPresets: !lW
          })]
        }), (0, KW.jsxs)("div", {
          className: "OnboardingFooter",
          children: [lW && (0, KW.jsx)(YW, {
            open: ZW,
            onToggle: AW
          }), (0, KW.jsx)(PW.n, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: wW.busy,
            disabled: !wW.ready,
            onClick: wW.submit,
            children: NW("homePage:onboardingDone")
          })]
        })]
      })
    }
  },
  37541: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW
    });
    var mW = OW(2037),
      EW = OW(1584);
    const NW = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(WW, iW) {
        WW !== this.userContext && this.sendHeld(), this.userContext = WW;
        for (const [mW, EW] of iW) this.pending.set(mW, EW);
        if (null !== this.timer) return;
        const OW = this.lastSentAt + 1100 - Date.now();
        OW <= 0 ? this.send(WW) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), OW), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(WW) {
        const iW = Array.from(this.pending, (WW => {
          let [iW, OW] = WW;
          return {
            NE: iW,
            PE: OW
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), EW.e.updateCosmetics(WW, iW).catch((WW => {
          console.error("Failed to update cosmetics", WW)
        }))
      }
    };

    function PW(WW, iW) {
      for (const [OW, mW] of iW) WW.setPlayerCosmetics(OW, mW);
      if (null === mW.gameBridge.latest("connectedGame").websocketUrl) NW.save(WW, iW);
      else
        for (const [OW, EW] of iW) mW.gameBridge.send("updateMyCosmetic", {
          NE: OW,
          PE: EW
        })
    }
  },
  35118: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => kW,
      i: () => wW,
      l: () => bW,
      m: () => AW
    });
    var mW = OW(154),
      EW = OW(1259),
      NW = OW(1185),
      PW = OW(1111),
      LW = OW(1850);
    const cW = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function wW(WW) {
      return cW[WW]
    }

    function tW(WW) {
      return (0, LW.c)(WW) ? "outdated" : WW instanceof mW.c ? 429 === WW.httpCode ? "busy" : "server" : "offline"
    }

    function ZW(WW, iW, OW) {
      return (0, PW.postJsonWithMetricsCookiesAndJsonResponse)(`${NW.clientSideServerUrls.indexUrl}${iW}`, OW, {
        retries: 3
      }, WW.getMetricsCookies()).catch((WW => (console.error("Bad response from the server when trying to change name:", iW, WW), {
        outcome: "failed",
        failure: tW(WW)
      })))
    }

    function xW(WW) {
      return "outcome" in WW && "failed" === WW.outcome
    }

    function lW(WW) {
      return console.error("Error when trying to get with new name from DB", WW), {
        outcome: "refused",
        message: WW
      }
    }
    async function AW(WW) {
      const iW = await ZW(WW, "/index/name/random", {});
      return xW(iW) ? iW : "err" in iW ? lW(iW.err) : (WW.setPlayerName(iW.name), {
        outcome: "changed",
        name: iW.name
      })
    }
    async function bW(WW, iW) {
      const OW = await ZW(WW, "/index/name/update", {
        name: iW
      });
      return xW(OW) ? OW : "err" in OW ? lW(OW.err) : OW.nameExists ? {
        outcome: "taken"
      } : (WW.setPlayerName(iW), {
        outcome: "changed",
        name: iW
      })
    }

    function jW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const mW = 1 === iW ? 1 : 10 ** (iW - 1),
        NW = String(mW + Math.floor(OW() * (10 ** iW - mW)));
      return `${WW.slice(0,EW.f-iW)}${NW}`
    }
    const UW = [1, 2, 3, 4];
    async function kW(WW, iW) {
      const OW = await bW(WW, iW);
      if ("taken" !== OW.outcome) return OW;
      for (const mW of UW) {
        const OW = jW(iW, mW),
          EW = await bW(WW, OW);
        if ("taken" !== EW.outcome) return EW
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);
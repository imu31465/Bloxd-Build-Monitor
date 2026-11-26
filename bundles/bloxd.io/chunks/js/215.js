export const id = 215;
export const ids = [215];
export const modules = {
  37257: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      isMoreOptionsInFooter: () => RH,
      showOnboardingPopup: () => jH
    });
    var AH = LH(45),
      rH = LH(1123),
      SH = LH(1352),
      hH = LH(1455),
      tH = LH(1056),
      zH = LH(4716),
      CH = LH(1565),
      EH = LH(317),
      XH = LH(1556),
      GH = LH(2339),
      YH = LH(1038),
      uH = LH.n(YH),
      QH = LH(1070),
      WH = LH(37264),
      MH = LH(2530),
      xH = LH(3879),
      vH = LH(1061),
      PH = LH(1315),
      TH = LH(1225);
    const UH = "OnboardingMorePanel";

    function VH(HH) {
      let {
        open: BH,
        onToggle: LH
      } = HH;
      const {
        t: AH
      } = (0, rH.B)();
      return (0, TH.jsxs)("button", {
        type: "button",
        className: "OnboardingMoreOptions",
        "aria-expanded": BH,
        "aria-controls": BH ? UH : void 0,
        onClick: () => {
          BH || (0, zH.i)("more"), LH()
        },
        children: [AH("homePage:onboardingMoreOptions"), (0, TH.jsx)(PH.c, {
          name: BH ? "caret-up" : "caret-down"
        })]
      })
    }
    const OH = Object.entries(CH.c).filter((HH => {
      let [, BH] = HH;
      return "default" === BH.cosmeticPack
    }));

    function bH(HH) {
      return XH.b.default.colourGroups[HH].colours.map(((HH, BH) => {
        let {
          rbg: LH,
          order: AH
        } = HH;
        return {
          rbg: LH,
          order: AH,
          index: BH
        }
      })).sort(((HH, BH) => HH.order - BH.order))
    }
    const kH = bH("eyes"),
      mH = bH("skin");

    function oH(HH, BH) {
      var LH;
      if (void 0 === BH || "default" !== (null === (LH = (0, GH.h)(HH, BH)) || void 0 === LH ? void 0 : LH.cosmeticPack)) return null;
      const AH = (0, GH.f)(BH);
      return AH && [AH[0], Number(AH[1])]
    }

    function IH(HH, BH, LH) {
      return `${HH}_${BH}_${LH}`
    }

    function fH(HH) {
      let {
        label: BH,
        colours: LH,
        picked: AH,
        onPick: SH
      } = HH;
      const {
        t: hH
      } = (0, rH.B)();
      return (0, TH.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, TH.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: BH
        }), (0, TH.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": BH,
          children: LH.map(((HH, BH) => {
            let {
              rbg: LH,
              index: rH
            } = HH;
            return (0, TH.jsx)("button", {
              type: "button",
              className: uH()("OnboardingSwatch", {
                OnboardingSwatchSelected: rH === AH
              }),
              style: {
                backgroundColor: `rgb(${LH.join(",")})`
              },
              role: "radio",
              "aria-checked": rH === AH,
              "aria-label": hH("homePage:onboardingColour", {
                number: BH + 1
              }),
              onClick: () => {
                SH(rH)
              }
            }, rH)
          }))
        })]
      })
    }

    function lH(HH) {
      let {
        moreOptions: BH,
        onToggleMoreOptions: LH,
        moreOptionsBelowPresets: SH
      } = HH;
      const {
        t: hH
      } = (0, rH.B)(), {
        userContext: tH,
        isUserContextUpdating: CH
      } = (0, vH.e)(), [, XH] = (0, AH.useReducer)((HH => HH + 1), 0), GH = (0, AH.useRef)({}), YH = (0, AH.useRef)(null), PH = (0, AH.useRef)({}), bH = (0, xH.c)(), lH = {
        ...tH.getPlayerCosmetics(),
        ...YH.current
      }, KH = (0, AH.useRef)(null);
      (0, AH.useEffect)((() => {
        var HH;
        BH && (null === (HH = KH.current) || void 0 === HH || HH.scrollIntoView({
          block: "nearest"
        }))
      }), [BH]);
      const cH = (HH, BH) => {
          (0, WH.d)(HH, Object.entries(BH)), bH.current ? XH() : HH.publishUpdateIfCurrent()
        },
        eH = function(HH) {
          let {
            isDefault: BH = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const LH = {
            ...!CH && tH.isLoggedIn() ? PH.current : YH.current,
            ...HH
          };
          if (!CH) return YH.current = null, PH.current = {}, void cH(tH, LH);
          YH.current = LH, BH || (PH.current = {
            ...PH.current,
            ...HH
          }), XH(), QH.userContextManager.getCurrentUserContext().then((HH => {
            if (YH.current !== LH) return;
            YH.current = null;
            const BH = PH.current;
            PH.current = {};
            const AH = HH.isLoggedIn() ? BH : LH;
            0 !== Object.keys(AH).length ? cH(HH, AH) : bH.current && XH()
          })).catch((HH => {
            console.warn("Couldn't put on the onboarding look held for the account", HH), YH.current === LH && (YH.current = null, PH.current = {}, bH.current && XH())
          }))
        },
        qH = (0, AH.useRef)(!1);
      (0, AH.useEffect)((() => {
        qH.current || (qH.current = !0, !CH && tH.isLoggedIn() || eH((0, EH.hc)(OH)[1].cosmetics, {
          isDefault: !0
        }))
      }), []), (0, AH.useEffect)((() => () => {
        tH.publishUpdateIfCurrent()
      }), [tH]);
      const gH = oH("eyes", lH.eyes),
        NH = oH("skin", lH.skin);
      return (0, TH.jsxs)(TH.Fragment, {
        children: [(0, TH.jsx)("div", {
          className: "OnboardingPresets",
          children: OH.map(((HH, BH) => {
            let [LH, {
              cosmetics: AH
            }] = HH;
            const rH = function(HH, BH) {
              return Object.entries(BH).every((BH => {
                let [LH, AH] = BH;
                return "skin" === LH || ("eyes" === LH ? (null === (rH = oH("eyes", HH.eyes)) || void 0 === rH ? void 0 : rH[0]) === (null === (SH = oH("eyes", AH)) || void 0 === SH ? void 0 : SH[0]) : HH[LH] === AH);
                var rH, SH
              }))
            }(lH, AH);
            return (0, TH.jsx)("button", {
              type: "button",
              className: uH()("OnboardingPreset", {
                OnboardingPresetSelected: rH
              }),
              "aria-label": hH("homePage:onboardingPreset", {
                number: BH + 1
              }),
              "aria-pressed": rH,
              onClick: () => {
                (0, zH.i)(`preset.${LH}`);
                const {
                  eyes: HH,
                  skin: BH
                } = GH.current;
                eH({
                  ...AH,
                  ...void 0 !== HH && {
                    eyes: IH("eyes", oH("eyes", AH.eyes)[0], HH)
                  },
                  ...void 0 !== BH && {
                    skin: IH("skin", "0", BH)
                  }
                })
              },
              children: (0, TH.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${LH}_preview.png)`
                }
              })
            }, LH)
          }))
        }), SH && (0, TH.jsx)(VH, {
          open: BH,
          onToggle: LH
        }), BH && (0, TH.jsxs)("div", {
          ref: KH,
          id: UH,
          className: "OnboardingMore",
          children: [(0, TH.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, TH.jsx)(MH.c, {
              cosmetics: lH
            })
          }), (0, TH.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, TH.jsx)(fH, {
              label: hH("homePage:onboardingEyeColour"),
              colours: kH,
              picked: null === gH || void 0 === gH ? void 0 : gH[1],
              onPick: HH => {
                var BH;
                (0, zH.i)("eyes"), GH.current.eyes = HH, eH({
                  eyes: IH("eyes", null !== (BH = null === gH || void 0 === gH ? void 0 : gH[0]) && void 0 !== BH ? BH : "0", HH)
                })
              }
            }), (0, TH.jsx)(fH, {
              label: hH("homePage:onboardingSkinColour"),
              colours: mH,
              picked: null === NH || void 0 === NH ? void 0 : NH[1],
              onPick: HH => {
                (0, zH.i)("skin"), GH.current.skin = HH, eH({
                  skin: IH("skin", "0", HH)
                })
              }
            })]
          })]
        })]
      })
    }
    var KH = LH(1206),
      cH = LH(15),
      eH = LH(34867),
      qH = LH(1313),
      gH = LH(1706);

    function NH(HH) {
      const {
        t: BH
      } = (0, rH.B)(), {
        userContext: LH,
        isUserContextUpdating: SH
      } = (0, vH.e)(), tH = SH ? null : LH.getPlayerName(), CH = (0, AH.useRef)(null), [EH, XH] = (0, AH.useState)((() => null === tH ? (0, KH.c)() : null)), [GH, YH] = (0, AH.useState)(null), [uH, QH] = (0, AH.useState)(!1), WH = (0, AH.useRef)("hX"), MH = (0, xH.c)(), UH = (0, AH.useRef)(null !== EH), VH = (0, AH.useRef)(!1), OH = (0, AH.useRef)(null), bH = null !== EH && void 0 !== EH ? EH : tH, kH = (0, AH.useRef)(null), mH = HH => {
        CH.current && (CH.current.value = HH), XH(HH)
      }, oH = (0, AH.useRef)(!1);
      (0, AH.useEffect)((() => {
        var HH, BH;
        !uH && oH.current && (oH.current = !1, null === (HH = CH.current) || void 0 === HH || HH.focus(), null === (BH = CH.current) || void 0 === BH || BH.select())
      }), [uH]);
      const IH = (0, AH.useRef)(null);
      (0, AH.useEffect)((() => {
        var HH;
        null !== GH && (null === (HH = IH.current) || void 0 === HH || HH.scrollIntoView({
          block: "nearest"
        }))
      }), [GH]);
      const fH = (HH, BH) => {
        const LH = document.activeElement === CH.current || oH.current;
        QH(!0), YH(null), HH.then((HH => {
          MH.current && (QH(!1), oH.current = LH, BH(HH))
        }))
      };
      (0, AH.useEffect)((() => {
        var HH, BH;
        cH.c.get("isTouchScreen") || (null === (HH = CH.current) || void 0 === HH || HH.focus(), null === (BH = CH.current) || void 0 === BH || BH.select())
      }), []);
      const lH = () => {
          (0, zH.m)(WH.current), HH()
        },
        NH = (HH, BH) => {
          var LH, AH;
          if (OH.current === HH) return WH.current = null !== (LH = null === (AH = kH.current) || void 0 === AH ? void 0 : AH.outcome) && void 0 !== LH ? LH : "hX", void lH();
          OH.current = HH, YH(BH)
        },
        RH = HH => "refused" === HH.outcome ? HH.message : BH((0, eH.e)(HH.failure)),
        jH = HH => !(HH.length >= KH.h) && (YH({
          kind: "error",
          message: BH("homePage:changeNameMinLengthError", {
            length: KH.h
          })
        }), !0),
        nH = HH => {
          var AH, rH, SH;
          HH.toLowerCase() !== (null === (AH = null !== (rH = null === (SH = kH.current) || void 0 === SH ? void 0 : SH.name) && void 0 !== rH ? rH : tH) || void 0 === AH ? void 0 : AH.toLowerCase()) ? jH(HH) || fH((0, eH.c)(LH, HH), (LH => {
            "taken" !== LH.outcome ? "refused" !== LH.outcome && "failed" !== LH.outcome ? LH.name !== HH ? (WH.current = "suffixed", kH.current = {
              name: LH.name,
              outcome: WH.current
            }, mH(LH.name), YH({
              kind: "suffixed",
              taken: HH,
              name: LH.name
            })) : lH() : NH(HH, {
              kind: "error",
              message: RH(LH)
            }) : NH(HH, {
              kind: "error",
              message: BH("homePage:onboardingNameAllTaken")
            })
          })) : lH()
        };
      (0, AH.useEffect)((() => {
        if (!uH || null !== tH || !VH.current) return;
        const HH = setTimeout((() => {
          VH.current = !1, QH(!1), NH(bH, {
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(HH)
        }
      }), [uH, tH]), (0, AH.useEffect)((() => {
        if (null === tH) return;
        const HH = UH.current && "hX" === WH.current && LH.isLoggedIn();
        UH.current = !1, OH.current = null, "noAccount" === (null === GH || void 0 === GH ? void 0 : GH.kind) && YH(null), HH && mH(tH), VH.current && (VH.current = !1, QH(!1), nH(HH ? tH : bH))
      }), [tH]);
      const FH = "error" === (null === GH || void 0 === GH ? void 0 : GH.kind) ? GH.message : "noAccount" === (null === GH || void 0 === GH ? void 0 : GH.kind) ? BH("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, TH.jsxs)("div", {
          className: "OnboardingNameField",
          ref: IH,
          children: [(0, TH.jsx)("div", {
            className: "OnboardingSubtitle",
            children: BH("general:name")
          }), null === bH && (0, TH.jsx)(qH.d, {}), null !== bH && (0, TH.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, TH.jsx)(gH.e, {
              className: "OnboardingNameInput",
              ariaLabel: BH("general:name"),
              maxLength: KH.e,
              defaultValue: bH,
              domRef: CH,
              forcedText: uH ? bH : null,
              onEnter: () => {
                var HH;
                null === (HH = CH.current) || void 0 === HH || HH.blur()
              },
              onValueChange: HH => {
                const LH = (0, KH.n)(HH);
                LH !== HH && CH.current && (CH.current.value = LH), YH(LH !== HH ? {
                  kind: "error",
                  message: BH("homePage:nameCharacters")
                } : null), LH !== bH && (WH.current = "changed"), XH(LH)
              }
            }), (0, TH.jsx)(hH.i, {
              className: "OnboardingRandomName",
              ariaLabel: BH("homePage:onboardingRandomName"),
              disabled: uH,
              onClick: () => {
                (() => {
                  if (YH(null), null === tH || LH.isLoggedIn()) return mH((0, KH.c)()), void(WH.current = "rolled");
                  fH((0, eH.m)(LH), (HH => {
                    var BH, AH;
                    if ("refused" === HH.outcome || "failed" === HH.outcome) return mH(LH.getPlayerName()), WH.current = null !== (BH = null === (AH = kH.current) || void 0 === AH ? void 0 : AH.outcome) && void 0 !== BH ? BH : "hX", void YH({
                      kind: "error",
                      message: RH(HH)
                    });
                    WH.current = "rolled", kH.current = {
                      name: HH.name,
                      outcome: "rolled"
                    }, mH(HH.name)
                  }))
                })()
              },
              children: (0, TH.jsx)(PH.c, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === GH || void 0 === GH ? void 0 : GH.kind) && (0, TH.jsx)("div", {
            className: "OnboardingNameNote",
            children: BH("homePage:onboardingNameSuffixed", {
              taken: GH.taken,
              name: GH.name
            })
          }), null !== FH && (0, TH.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: FH
          })]
        }),
        submit: () => {
          if (!uH && null !== bH) {
            if (null === tH) {
              if (jH(bH)) return;
              return oH.current = document.activeElement === CH.current, VH.current = !0, QH(!0), void YH(null)
            }
            nH(bH)
          }
        },
        busy: uH,
        ready: null !== bH
      }
    }

    function RH(HH) {
      return HH < 500
    }

    function jH() {
      const HH = {
          finished: !1
        },
        BH = {
          press: null
        };
      return SH.NotificationProvider.showCustomPopup({
        body: LH => (0, TH.jsx)(nH, {
          onFinish: () => {
            (0, zH.g)(), HH.finished = !0, LH()
          },
          doneRef: BH
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        disableExitButton: !0,
        ignoreBackgroundPress: !0,
        dismiss: () => {
          var HH;
          null === (HH = BH.press) || void 0 === HH || HH.call(BH)
        },
        onClose: () => {
          HH.finished || (0, zH.d)()
        }
      })
    }

    function nH(HH) {
      let {
        onFinish: BH,
        doneRef: LH
      } = HH;
      const {
        t: SH
      } = (0, rH.B)(), CH = NH(BH), EH = CH.ready && !CH.busy ? CH.submit : null;
      (0, AH.useEffect)((() => (LH.press = EH, () => {
        LH.press = null
      })));
      const [XH, GH] = (0, AH.useState)(!1), YH = (0, tH.n)(((HH, BH) => RH(BH))), uH = () => {
        GH(!XH)
      };
      return (0, AH.useEffect)((() => {
        (0, zH.p)()
      }), []), (0, TH.jsxs)("div", {
        className: "Onboarding",
        children: [(0, TH.jsx)("div", {
          className: "OnboardingTitle",
          children: SH("homePage:onboardingTitle")
        }), (0, TH.jsxs)("div", {
          className: "OnboardingBody",
          children: [CH.field, (0, TH.jsx)(lH, {
            moreOptions: XH,
            onToggleMoreOptions: uH,
            moreOptionsBelowPresets: !YH
          })]
        }), (0, TH.jsxs)("div", {
          className: "OnboardingFooter",
          children: [YH && (0, TH.jsx)(VH, {
            open: XH,
            onToggle: uH
          }), (0, TH.jsx)(hH.u, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: CH.busy,
            disabled: !CH.ready,
            onClick: CH.submit,
            children: SH("homePage:onboardingDone")
          })]
        })]
      })
    }
  },
  37264: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH
    });
    var AH = LH(1998),
      rH = LH(1502);
    const SH = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(HH, BH) {
        HH !== this.userContext && this.sendHeld(), this.userContext = HH;
        for (const [AH, rH] of BH) this.pending.set(AH, rH);
        if (null !== this.timer) return;
        const LH = this.lastSentAt + 1100 - Date.now();
        LH <= 0 ? this.send(HH) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), LH), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(HH) {
        const BH = Array.from(this.pending, (HH => {
          let [BH, LH] = HH;
          return {
            rh: BH,
            Sh: LH
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), rH.d.updateCosmetics(HH, BH).catch((HH => {
          console.error("Failed to update cosmetics", HH)
        }))
      }
    };

    function hH(HH, BH) {
      for (const [LH, AH] of BH) HH.setPlayerCosmetics(LH, AH);
      if (null === AH.gameBridge.latest("connectedGame").websocketUrl) SH.save(HH, BH);
      else
        for (const [LH, rH] of BH) AH.gameBridge.send("updateMyCosmetic", {
          rh: LH,
          Sh: rH
        })
    }
  },
  34867: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => xH,
      e: () => CH,
      i: () => QH,
      m: () => uH
    });
    var AH = LH(152),
      rH = LH(1206),
      SH = LH(1131),
      hH = LH(1070),
      tH = LH(1781);
    const zH = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function CH(HH) {
      return zH[HH]
    }

    function EH(HH) {
      return (0, tH.e)(HH) ? "outdated" : HH instanceof AH.e ? 429 === HH.httpCode ? "busy" : "server" : "offline"
    }

    function XH(HH, BH, LH) {
      return (0, hH.postJsonWithMetricsCookiesAndJsonResponse)(`${SH.clientSideServerUrls.indexUrl}${BH}`, LH, {
        retries: 3
      }, HH.getMetricsCookies()).catch((HH => (console.error("Bad response from the server when trying to change name:", BH, HH), {
        outcome: "failed",
        failure: EH(HH)
      })))
    }

    function GH(HH) {
      return "outcome" in HH && "failed" === HH.outcome
    }

    function YH(HH) {
      return console.error("Error when trying to get with new name from DB", HH), {
        outcome: "refused",
        message: HH
      }
    }
    async function uH(HH) {
      const BH = await XH(HH, "/index/name/random", {});
      return GH(BH) ? BH : "err" in BH ? YH(BH.err) : (HH.setPlayerName(BH.name), {
        outcome: "changed",
        name: BH.name
      })
    }
    async function QH(HH, BH) {
      const LH = await XH(HH, "/index/name/update", {
        name: BH
      });
      return GH(LH) ? LH : "err" in LH ? YH(LH.err) : LH.nameExists ? {
        outcome: "taken"
      } : (HH.setPlayerName(BH), {
        outcome: "changed",
        name: BH
      })
    }

    function WH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const AH = 1 === BH ? 1 : 10 ** (BH - 1),
        SH = String(AH + Math.floor(LH() * (10 ** BH - AH)));
      return `${HH.slice(0,rH.e-BH)}${SH}`
    }
    const MH = [1, 2, 3, 4];
    async function xH(HH, BH) {
      const LH = await QH(HH, BH);
      if ("taken" !== LH.outcome) return LH;
      for (const AH of MH) {
        const LH = WH(BH, AH),
          rH = await QH(HH, LH);
        if ("taken" !== rH.outcome) return rH
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);
export const id = 202;
export const ids = [202];
export const modules = {
  36678: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      showOnboardingPopup: () => CQ
    });
    var wQ = XQ(61),
      qQ = XQ(1226),
      TQ = XQ(1404),
      zQ = XQ(1507),
      sQ = XQ(4631),
      FQ = XQ(1626),
      PQ = XQ(1620),
      gQ = XQ(2313),
      JQ = XQ(1081),
      rQ = XQ.n(JQ),
      IQ = XQ(1165),
      jQ = XQ(36684),
      BQ = XQ(1094),
      yQ = XQ(2451),
      VQ = XQ(3736),
      DQ = XQ(1162),
      pQ = XQ(1145);
    const GQ = Object.entries(FQ.c).filter((QQ => {
      let [, WQ] = QQ;
      return "default" === WQ.cosmeticPack
    }));

    function UQ(QQ) {
      return PQ.d.default.colourGroups[QQ].colours.map(((QQ, WQ) => {
        let {
          rbg: XQ,
          order: wQ
        } = QQ;
        return {
          rbg: XQ,
          order: wQ,
          index: WQ
        }
      })).sort(((QQ, WQ) => QQ.order - WQ.order))
    }
    const bQ = UQ("eyes"),
      vQ = UQ("skin");

    function dQ(QQ, WQ) {
      var XQ;
      if (void 0 === WQ || "default" !== (null === (XQ = (0, gQ.j)(QQ, WQ)) || void 0 === XQ ? void 0 : XQ.cosmeticPack)) return null;
      const wQ = (0, gQ.g)(WQ);
      return wQ && [wQ[0], Number(wQ[1])]
    }

    function HQ(QQ, WQ, XQ) {
      return `${QQ}_${WQ}_${XQ}`
    }

    function aQ(QQ) {
      let {
        label: WQ,
        colours: XQ,
        picked: wQ,
        onPick: TQ
      } = QQ;
      const {
        t: zQ
      } = (0, qQ.C)();
      return (0, pQ.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, pQ.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: WQ
        }), (0, pQ.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": WQ,
          children: XQ.map(((QQ, WQ) => {
            let {
              rbg: XQ,
              index: qQ
            } = QQ;
            return (0, pQ.jsx)("button", {
              type: "button",
              className: rQ()("OnboardingSwatch", {
                OnboardingSwatchSelected: qQ === wQ
              }),
              style: {
                backgroundColor: `rgb(${XQ.join(",")})`
              },
              role: "radio",
              "aria-checked": qQ === wQ,
              "aria-label": zQ("homePage:onboardingColour", {
                number: WQ + 1
              }),
              onClick: () => {
                TQ(qQ)
              }
            }, qQ)
          }))
        })]
      })
    }

    function lQ() {
      const {
        t: QQ
      } = (0, qQ.C)(), {
        userContext: WQ,
        isUserContextUpdating: XQ
      } = (0, DQ.c)(), [TQ, zQ] = (0, wQ.useState)(!1), [, FQ] = (0, wQ.useReducer)((QQ => QQ + 1), 0), PQ = (0, wQ.useRef)({}), gQ = (0, wQ.useRef)(null), JQ = (0, VQ.d)(), UQ = {
        ...WQ.getPlayerCosmetics(),
        ...gQ.current
      }, lQ = (0, wQ.useRef)(null);
      (0, wQ.useEffect)((() => {
        var QQ;
        TQ && (null === (QQ = lQ.current) || void 0 === QQ || QQ.scrollIntoView({
          block: "nearest"
        }))
      }), [TQ]);
      const hQ = (QQ, WQ) => {
          (0, jQ.e)(QQ, Object.entries(WQ)), JQ.current ? FQ() : QQ.publishUpdateIfCurrent()
        },
        iQ = QQ => {
          const wQ = {
            ...gQ.current,
            ...QQ
          };
          if (!XQ) return gQ.current = null, void hQ(WQ, wQ);
          gQ.current = wQ, FQ(), IQ.userContextManager.getCurrentUserContext().then((QQ => {
            gQ.current === wQ && (gQ.current = null, hQ(QQ, wQ))
          })).catch((QQ => {
            console.warn("Couldn't put on the onboarding look held for the account", QQ), gQ.current === wQ && (gQ.current = null, JQ.current && FQ())
          }))
        };
      (0, wQ.useEffect)((() => () => {
        WQ.publishUpdateIfCurrent()
      }), [WQ]);
      const cQ = dQ("eyes", UQ.eyes),
        AQ = dQ("skin", UQ.skin);
      return (0, pQ.jsxs)(pQ.Fragment, {
        children: [(0, pQ.jsx)("div", {
          className: "OnboardingPresets",
          children: GQ.map(((WQ, XQ) => {
            let [wQ, {
              cosmetics: qQ
            }] = WQ;
            const TQ = function(QQ, WQ) {
              return Object.entries(WQ).every((WQ => {
                let [XQ, wQ] = WQ;
                return "skin" === XQ || ("eyes" === XQ ? (null === (qQ = dQ("eyes", QQ.eyes)) || void 0 === qQ ? void 0 : qQ[0]) === (null === (TQ = dQ("eyes", wQ)) || void 0 === TQ ? void 0 : TQ[0]) : QQ[XQ] === wQ);
                var qQ, TQ
              }))
            }(UQ, qQ);
            return (0, pQ.jsx)("button", {
              type: "button",
              className: rQ()("OnboardingPreset", {
                OnboardingPresetSelected: TQ
              }),
              "aria-label": QQ("homePage:onboardingPreset", {
                number: XQ + 1
              }),
              "aria-pressed": TQ,
              onClick: () => {
                (0, sQ.h)(`preset.${wQ}`);
                const {
                  eyes: QQ,
                  skin: WQ
                } = PQ.current;
                iQ({
                  ...qQ,
                  ...void 0 !== QQ && {
                    eyes: HQ("eyes", dQ("eyes", qQ.eyes)[0], QQ)
                  },
                  ...void 0 !== WQ && {
                    skin: HQ("skin", "0", WQ)
                  }
                })
              },
              children: (0, pQ.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${wQ}_preview.png)`
                }
              })
            }, wQ)
          }))
        }), (0, pQ.jsxs)("button", {
          type: "button",
          className: "OnboardingMoreOptions",
          "aria-expanded": TQ,
          onClick: () => {
            TQ || (0, sQ.h)("more"), zQ(!TQ)
          },
          children: [QQ("homePage:onboardingMoreOptions"), (0, pQ.jsx)(BQ.d, {
            name: TQ ? "caret-up" : "caret-down"
          })]
        }), TQ && (0, pQ.jsxs)("div", {
          ref: lQ,
          className: "OnboardingMore",
          children: [(0, pQ.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, pQ.jsx)(yQ.d, {
              cosmetics: UQ
            })
          }), (0, pQ.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, pQ.jsx)(aQ, {
              label: QQ("homePage:onboardingEyeColour"),
              colours: bQ,
              picked: null === cQ || void 0 === cQ ? void 0 : cQ[1],
              onPick: QQ => {
                var WQ;
                (0, sQ.h)("eyes"), PQ.current.eyes = QQ, iQ({
                  eyes: HQ("eyes", null !== (WQ = null === cQ || void 0 === cQ ? void 0 : cQ[0]) && void 0 !== WQ ? WQ : "0", QQ)
                })
              }
            }), (0, pQ.jsx)(aQ, {
              label: QQ("homePage:onboardingSkinColour"),
              colours: vQ,
              picked: null === AQ || void 0 === AQ ? void 0 : AQ[1],
              onPick: QQ => {
                (0, sQ.h)("skin"), PQ.current.skin = QQ, iQ({
                  skin: HQ("skin", "0", QQ)
                })
              }
            })]
          })]
        })]
      })
    }
    var hQ = XQ(1302),
      iQ = XQ(26),
      cQ = XQ(34405),
      AQ = XQ(1391),
      RQ = XQ(1739);

    function EQ(QQ) {
      const {
        t: WQ
      } = (0, qQ.C)(), {
        userContext: XQ,
        isUserContextUpdating: TQ
      } = (0, DQ.c)(), FQ = TQ ? null : XQ.getPlayerName(), PQ = (0, wQ.useRef)(null), [gQ, JQ] = (0, wQ.useState)((() => null === FQ ? (0, hQ.g)() : null)), [rQ, IQ] = (0, wQ.useState)(null), [jQ, yQ] = (0, wQ.useState)(!1), GQ = (0, wQ.useRef)("HI"), UQ = (0, VQ.d)(), bQ = (0, wQ.useRef)(null !== gQ), vQ = (0, wQ.useRef)(!1), dQ = null !== gQ && void 0 !== gQ ? gQ : FQ, HQ = (0, wQ.useRef)(null), aQ = QQ => {
        PQ.current && (PQ.current.value = QQ), JQ(QQ)
      }, lQ = (0, wQ.useRef)(!1);
      (0, wQ.useEffect)((() => {
        var QQ, WQ;
        !jQ && lQ.current && (lQ.current = !1, null === (QQ = PQ.current) || void 0 === QQ || QQ.focus(), null === (WQ = PQ.current) || void 0 === WQ || WQ.select())
      }), [jQ]);
      const EQ = (0, wQ.useRef)(null);
      (0, wQ.useEffect)((() => {
        var QQ;
        null !== rQ && (null === (QQ = EQ.current) || void 0 === QQ || QQ.scrollIntoView({
          block: "nearest"
        }))
      }), [rQ]);
      const CQ = (QQ, WQ) => {
        const XQ = document.activeElement === PQ.current || lQ.current;
        yQ(!0), IQ(null), QQ.then((QQ => {
          UQ.current && (yQ(!1), lQ.current = XQ, WQ(QQ))
        }))
      };
      (0, wQ.useEffect)((() => {
        var QQ, WQ;
        iQ.b.get("isTouchScreen") || (null === (QQ = PQ.current) || void 0 === QQ || QQ.focus(), null === (WQ = PQ.current) || void 0 === WQ || WQ.select())
      }), []);
      const uQ = () => {
          (0, sQ.l)(GQ.current), QQ()
        },
        LQ = QQ => "refused" === QQ.outcome ? QQ.message : WQ((0, cQ.h)(QQ.failure)),
        kQ = QQ => !(QQ.length >= hQ.m) && (IQ({
          kind: "error",
          message: WQ("homePage:changeNameMinLengthError", {
            length: hQ.m
          })
        }), !0),
        fQ = QQ => {
          var wQ, qQ, TQ;
          QQ.toLowerCase() !== (null === (wQ = null !== (qQ = null === (TQ = HQ.current) || void 0 === TQ ? void 0 : TQ.name) && void 0 !== qQ ? qQ : FQ) || void 0 === wQ ? void 0 : wQ.toLowerCase()) ? kQ(QQ) || CQ((0, cQ.e)(XQ, QQ), (XQ => {
            "taken" !== XQ.outcome ? "refused" !== XQ.outcome && "failed" !== XQ.outcome ? XQ.name !== QQ ? (GQ.current = "suffixed", HQ.current = {
              name: XQ.name,
              outcome: GQ.current
            }, aQ(XQ.name), IQ({
              kind: "suffixed",
              taken: QQ,
              name: XQ.name
            })) : uQ() : IQ({
              kind: "error",
              message: LQ(XQ)
            }) : IQ({
              kind: "error",
              message: WQ("homePage:onboardingNameAllTaken")
            })
          })) : uQ()
        };
      (0, wQ.useEffect)((() => {
        if (!jQ || null !== FQ || !vQ.current) return;
        const QQ = setTimeout((() => {
          vQ.current = !1, yQ(!1), IQ({
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(QQ)
        }
      }), [jQ, FQ]), (0, wQ.useEffect)((() => {
        if (null === FQ) return;
        const QQ = bQ.current && "HI" === GQ.current && XQ.isLoggedIn();
        bQ.current = !1, "noAccount" === (null === rQ || void 0 === rQ ? void 0 : rQ.kind) && IQ(null), QQ && aQ(FQ), vQ.current && (vQ.current = !1, yQ(!1), fQ(QQ ? FQ : dQ))
      }), [FQ]);
      const SQ = "error" === (null === rQ || void 0 === rQ ? void 0 : rQ.kind) ? rQ.message : "noAccount" === (null === rQ || void 0 === rQ ? void 0 : rQ.kind) ? WQ("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, pQ.jsxs)("div", {
          className: "OnboardingNameField",
          ref: EQ,
          children: [(0, pQ.jsx)("div", {
            className: "OnboardingSubtitle",
            children: WQ("general:name")
          }), null === dQ && (0, pQ.jsx)(AQ.e, {}), null !== dQ && (0, pQ.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, pQ.jsx)(RQ.e, {
              className: "OnboardingNameInput",
              ariaLabel: WQ("general:name"),
              maxLength: hQ.j,
              defaultValue: dQ,
              domRef: PQ,
              forcedText: jQ ? dQ : null,
              onEnter: () => {
                var QQ;
                null === (QQ = PQ.current) || void 0 === QQ || QQ.blur()
              },
              onValueChange: QQ => {
                const XQ = (0, hQ.t)(QQ);
                XQ !== QQ && PQ.current && (PQ.current.value = XQ), IQ(XQ !== QQ ? {
                  kind: "error",
                  message: WQ("homePage:nameCharacters")
                } : null), XQ !== dQ && (GQ.current = "changed"), JQ(XQ)
              }
            }), (0, pQ.jsx)(zQ.h, {
              className: "OnboardingRandomName",
              ariaLabel: WQ("homePage:onboardingRandomName"),
              disabled: jQ,
              onClick: () => {
                (() => {
                  if (IQ(null), null === FQ || XQ.isLoggedIn()) return aQ((0, hQ.g)()), void(GQ.current = "rolled");
                  CQ((0, cQ.m)(XQ), (QQ => {
                    var WQ, wQ;
                    if ("refused" === QQ.outcome || "failed" === QQ.outcome) return aQ(XQ.getPlayerName()), GQ.current = null !== (WQ = null === (wQ = HQ.current) || void 0 === wQ ? void 0 : wQ.outcome) && void 0 !== WQ ? WQ : "HI", void IQ({
                      kind: "error",
                      message: LQ(QQ)
                    });
                    GQ.current = "rolled", HQ.current = {
                      name: QQ.name,
                      outcome: "rolled"
                    }, aQ(QQ.name)
                  }))
                })()
              },
              children: (0, pQ.jsx)(BQ.d, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === rQ || void 0 === rQ ? void 0 : rQ.kind) && (0, pQ.jsx)("div", {
            className: "OnboardingNameNote",
            children: WQ("homePage:onboardingNameSuffixed", {
              taken: rQ.taken,
              name: rQ.name
            })
          }), null !== SQ && (0, pQ.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: SQ
          })]
        }),
        submit: () => {
          if (!jQ && null !== dQ) {
            if (null === FQ) {
              if (kQ(dQ)) return;
              return lQ.current = document.activeElement === PQ.current, vQ.current = !0, yQ(!0), void IQ(null)
            }
            fQ(dQ)
          }
        },
        busy: jQ,
        ready: null !== dQ
      }
    }

    function CQ() {
      const QQ = {
        finished: !1
      };
      return TQ.NotificationProvider.showCustomPopup({
        body: WQ => (0, pQ.jsx)(uQ, {
          onFinish: () => {
            (0, sQ.e)(), QQ.finished = !0, WQ()
          }
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        ignoreBackgroundPress: !0,
        onClose: () => {
          QQ.finished || (0, sQ.c)()
        }
      })
    }

    function uQ(QQ) {
      let {
        onFinish: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, qQ.C)(), TQ = EQ(WQ);
      return (0, wQ.useEffect)((() => {
        (0, sQ.o)()
      }), []), (0, pQ.jsxs)("div", {
        className: "Onboarding",
        children: [(0, pQ.jsx)("div", {
          className: "OnboardingTitle",
          children: XQ("homePage:onboardingTitle")
        }), (0, pQ.jsxs)("div", {
          className: "OnboardingBody",
          children: [TQ.field, (0, pQ.jsx)(lQ, {})]
        }), (0, pQ.jsx)("div", {
          className: "OnboardingFooter",
          children: (0, pQ.jsx)(zQ.s, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: TQ.busy,
            disabled: !TQ.ready,
            onClick: TQ.submit,
            children: XQ("homePage:onboardingDone")
          })
        })]
      })
    }
  },
  36684: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ
    });
    var wQ = XQ(2003),
      qQ = XQ(1548);
    const TQ = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(QQ, WQ) {
        QQ !== this.userContext && this.sendHeld(), this.userContext = QQ;
        for (const [wQ, qQ] of WQ) this.pending.set(wQ, qQ);
        if (null !== this.timer) return;
        const XQ = this.lastSentAt + 1100 - Date.now();
        XQ <= 0 ? this.send(QQ) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), XQ), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(QQ) {
        const WQ = Array.from(this.pending, (QQ => {
          let [WQ, XQ] = QQ;
          return {
            dT: WQ,
            HT: XQ
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), qQ.e.updateCosmetics(QQ, WQ).catch((QQ => {
          console.error("Failed to update cosmetics", QQ)
        }))
      }
    };

    function zQ(QQ, WQ) {
      for (const [XQ, wQ] of WQ) QQ.setPlayerCosmetics(XQ, wQ);
      if (null === wQ.gameBridge.latest("connectedGame").websocketUrl) TQ.save(QQ, WQ);
      else
        for (const [XQ, qQ] of WQ) wQ.gameBridge.send("updateMyCosmetic", {
          dT: XQ,
          HT: qQ
        })
    }
  },
  34405: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => DQ,
      h: () => PQ,
      k: () => BQ,
      m: () => jQ
    });
    var wQ = XQ(193),
      qQ = XQ(1302),
      TQ = XQ(1238),
      zQ = XQ(1165),
      sQ = XQ(1795);
    const FQ = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function PQ(QQ) {
      return FQ[QQ]
    }

    function gQ(QQ) {
      return (0, sQ.d)(QQ) ? "outdated" : QQ instanceof wQ.b ? 429 === QQ.httpCode ? "busy" : "server" : "offline"
    }

    function JQ(QQ, WQ, XQ) {
      return (0, zQ.postJsonWithMetricsCookiesAndJsonResponse)(`${TQ.clientSideServerUrls.indexUrl}${WQ}`, XQ, {
        retries: 3
      }, QQ.getMetricsCookies()).catch((QQ => (console.error("Bad response from the server when trying to change name:", WQ, QQ), {
        outcome: "failed",
        failure: gQ(QQ)
      })))
    }

    function rQ(QQ) {
      return "outcome" in QQ && "failed" === QQ.outcome
    }

    function IQ(QQ) {
      return console.error("Error when trying to get with new name from DB", QQ), {
        outcome: "refused",
        message: QQ
      }
    }
    async function jQ(QQ) {
      const WQ = await JQ(QQ, "/index/name/random", {});
      return rQ(WQ) ? WQ : "err" in WQ ? IQ(WQ.err) : (QQ.setPlayerName(WQ.name), {
        outcome: "changed",
        name: WQ.name
      })
    }
    async function BQ(QQ, WQ) {
      const XQ = await JQ(QQ, "/index/name/update", {
        name: WQ
      });
      return rQ(XQ) ? XQ : "err" in XQ ? IQ(XQ.err) : XQ.nameExists ? {
        outcome: "taken"
      } : (QQ.setPlayerName(WQ), {
        outcome: "changed",
        name: WQ
      })
    }

    function yQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const wQ = 1 === WQ ? 1 : 10 ** (WQ - 1),
        TQ = String(wQ + Math.floor(XQ() * (10 ** WQ - wQ)));
      return `${QQ.slice(0,qQ.j-WQ)}${TQ}`
    }
    const VQ = [1, 2, 3, 4];
    async function DQ(QQ, WQ) {
      const XQ = await BQ(QQ, WQ);
      if ("taken" !== XQ.outcome) return XQ;
      for (const wQ of VQ) {
        const XQ = yQ(WQ, wQ),
          qQ = await BQ(QQ, XQ);
        if ("taken" !== qQ.outcome) return qQ
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
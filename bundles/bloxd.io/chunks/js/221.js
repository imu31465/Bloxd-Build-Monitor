export const id = 221;
export const ids = [221];
export const modules = {
  37320: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      isMoreOptionsInFooter: () => fM,
      showOnboardingPopup: () => YM
    });
    var OM = iM(44),
      SM = iM(1188),
      jM = iM(1429),
      aM = iM(1520),
      PM = iM(1135),
      nM = iM(4675),
      QM = iM(1645),
      zM = iM(1641),
      LM = iM(2362),
      mM = iM(1116),
      HM = iM.n(mM),
      hM = iM(1144),
      JM = iM(37322),
      dM = iM(2488),
      yM = iM(3881),
      lM = iM(1142),
      EM = iM(1398),
      UM = iM(1303);
    const GM = "OnboardingMorePanel";

    function CM(MM) {
      let {
        open: rM,
        onToggle: iM
      } = MM;
      const {
        t: OM
      } = (0, SM.A)();
      return (0, UM.jsxs)("button", {
        type: "button",
        className: "OnboardingMoreOptions",
        "aria-expanded": rM,
        "aria-controls": rM ? GM : void 0,
        onClick: () => {
          rM || (0, nM.i)("more"), iM()
        },
        children: [OM("homePage:onboardingMoreOptions"), (0, UM.jsx)(EM.b, {
          name: rM ? "caret-up" : "caret-down"
        })]
      })
    }
    const eM = Object.entries(QM.d).filter((MM => {
      let [, rM] = MM;
      return "default" === rM.cosmeticPack
    }));

    function bM(MM) {
      return zM.d.default.colourGroups[MM].colours.map(((MM, rM) => {
        let {
          rbg: iM,
          order: OM
        } = MM;
        return {
          rbg: iM,
          order: OM,
          index: rM
        }
      })).sort(((MM, rM) => MM.order - rM.order))
    }
    const wM = bM("eyes"),
      tM = bM("skin");

    function gM(MM, rM) {
      var iM;
      if (void 0 === rM || "default" !== (null === (iM = (0, LM.m)(MM, rM)) || void 0 === iM ? void 0 : iM.cosmeticPack)) return null;
      const OM = (0, LM.i)(rM);
      return OM && [OM[0], Number(OM[1])]
    }

    function uM(MM, rM, iM) {
      return `${MM}_${rM}_${iM}`
    }

    function RM(MM) {
      let {
        label: rM,
        colours: iM,
        picked: OM,
        onPick: jM
      } = MM;
      const {
        t: aM
      } = (0, SM.A)();
      return (0, UM.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, UM.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: rM
        }), (0, UM.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": rM,
          children: iM.map(((MM, rM) => {
            let {
              rbg: iM,
              index: SM
            } = MM;
            return (0, UM.jsx)("button", {
              type: "button",
              className: HM()("OnboardingSwatch", {
                OnboardingSwatchSelected: SM === OM
              }),
              style: {
                backgroundColor: `rgb(${iM.join(",")})`
              },
              role: "radio",
              "aria-checked": SM === OM,
              "aria-label": aM("homePage:onboardingColour", {
                number: rM + 1
              }),
              onClick: () => {
                jM(SM)
              }
            }, SM)
          }))
        })]
      })
    }

    function pM(MM) {
      let {
        moreOptions: rM,
        onToggleMoreOptions: iM,
        moreOptionsBelowPresets: jM
      } = MM;
      const {
        t: aM
      } = (0, SM.A)(), {
        userContext: PM,
        isUserContextUpdating: QM
      } = (0, lM.b)(), [, zM] = (0, OM.useReducer)((MM => MM + 1), 0), LM = (0, OM.useRef)({}), mM = (0, OM.useRef)(null), EM = (0, yM.b)(), bM = {
        ...PM.getPlayerCosmetics(),
        ...mM.current
      }, pM = (0, OM.useRef)(null);
      (0, OM.useEffect)((() => {
        var MM;
        rM && (null === (MM = pM.current) || void 0 === MM || MM.scrollIntoView({
          block: "nearest"
        }))
      }), [rM]);
      const WM = (MM, rM) => {
          (0, JM.d)(MM, Object.entries(rM)), EM.current ? zM() : MM.publishUpdateIfCurrent()
        },
        sM = MM => {
          const rM = {
            ...mM.current,
            ...MM
          };
          if (!QM) return mM.current = null, void WM(PM, rM);
          mM.current = rM, zM(), hM.userContextManager.getCurrentUserContext().then((MM => {
            mM.current === rM && (mM.current = null, WM(MM, rM))
          })).catch((MM => {
            console.warn("Couldn't put on the onboarding look held for the account", MM), mM.current === rM && (mM.current = null, EM.current && zM())
          }))
        };
      (0, OM.useEffect)((() => () => {
        PM.publishUpdateIfCurrent()
      }), [PM]);
      const DM = gM("eyes", bM.eyes),
        kM = gM("skin", bM.skin);
      return (0, UM.jsxs)(UM.Fragment, {
        children: [(0, UM.jsx)("div", {
          className: "OnboardingPresets",
          children: eM.map(((MM, rM) => {
            let [iM, {
              cosmetics: OM
            }] = MM;
            const SM = function(MM, rM) {
              return Object.entries(rM).every((rM => {
                let [iM, OM] = rM;
                return "skin" === iM || ("eyes" === iM ? (null === (SM = gM("eyes", MM.eyes)) || void 0 === SM ? void 0 : SM[0]) === (null === (jM = gM("eyes", OM)) || void 0 === jM ? void 0 : jM[0]) : MM[iM] === OM);
                var SM, jM
              }))
            }(bM, OM);
            return (0, UM.jsx)("button", {
              type: "button",
              className: HM()("OnboardingPreset", {
                OnboardingPresetSelected: SM
              }),
              "aria-label": aM("homePage:onboardingPreset", {
                number: rM + 1
              }),
              "aria-pressed": SM,
              onClick: () => {
                (0, nM.i)(`preset.${iM}`);
                const {
                  eyes: MM,
                  skin: rM
                } = LM.current;
                sM({
                  ...OM,
                  ...void 0 !== MM && {
                    eyes: uM("eyes", gM("eyes", OM.eyes)[0], MM)
                  },
                  ...void 0 !== rM && {
                    skin: uM("skin", "0", rM)
                  }
                })
              },
              children: (0, UM.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${iM}_preview.png)`
                }
              })
            }, iM)
          }))
        }), jM && (0, UM.jsx)(CM, {
          open: rM,
          onToggle: iM
        }), rM && (0, UM.jsxs)("div", {
          ref: pM,
          id: GM,
          className: "OnboardingMore",
          children: [(0, UM.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, UM.jsx)(dM.c, {
              cosmetics: bM
            })
          }), (0, UM.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, UM.jsx)(RM, {
              label: aM("homePage:onboardingEyeColour"),
              colours: wM,
              picked: null === DM || void 0 === DM ? void 0 : DM[1],
              onPick: MM => {
                var rM;
                (0, nM.i)("eyes"), LM.current.eyes = MM, sM({
                  eyes: uM("eyes", null !== (rM = null === DM || void 0 === DM ? void 0 : DM[0]) && void 0 !== rM ? rM : "0", MM)
                })
              }
            }), (0, UM.jsx)(RM, {
              label: aM("homePage:onboardingSkinColour"),
              colours: tM,
              picked: null === kM || void 0 === kM ? void 0 : kM[1],
              onPick: MM => {
                (0, nM.i)("skin"), LM.current.skin = MM, sM({
                  skin: uM("skin", "0", MM)
                })
              }
            })]
          })]
        })]
      })
    }
    var WM = iM(1279),
      sM = iM(19),
      DM = iM(34929),
      kM = iM(1396),
      ZM = iM(1763);

    function oM(MM) {
      const {
        t: rM
      } = (0, SM.A)(), {
        userContext: iM,
        isUserContextUpdating: jM
      } = (0, lM.b)(), PM = jM ? null : iM.getPlayerName(), QM = (0, OM.useRef)(null), [zM, LM] = (0, OM.useState)((() => null === PM ? (0, WM.f)() : null)), [mM, HM] = (0, OM.useState)(null), [hM, JM] = (0, OM.useState)(!1), dM = (0, OM.useRef)("ML"), GM = (0, yM.b)(), CM = (0, OM.useRef)(null !== zM), eM = (0, OM.useRef)(!1), bM = null !== zM && void 0 !== zM ? zM : PM, wM = (0, OM.useRef)(null), tM = MM => {
        QM.current && (QM.current.value = MM), LM(MM)
      }, gM = (0, OM.useRef)(!1);
      (0, OM.useEffect)((() => {
        var MM, rM;
        !hM && gM.current && (gM.current = !1, null === (MM = QM.current) || void 0 === MM || MM.focus(), null === (rM = QM.current) || void 0 === rM || rM.select())
      }), [hM]);
      const uM = (0, OM.useRef)(null);
      (0, OM.useEffect)((() => {
        var MM;
        null !== mM && (null === (MM = uM.current) || void 0 === MM || MM.scrollIntoView({
          block: "nearest"
        }))
      }), [mM]);
      const RM = (MM, rM) => {
        const iM = document.activeElement === QM.current || gM.current;
        JM(!0), HM(null), MM.then((MM => {
          GM.current && (JM(!1), gM.current = iM, rM(MM))
        }))
      };
      (0, OM.useEffect)((() => {
        var MM, rM;
        sM.d.get("isTouchScreen") || (null === (MM = QM.current) || void 0 === MM || MM.focus(), null === (rM = QM.current) || void 0 === rM || rM.select())
      }), []);
      const pM = () => {
          (0, nM.l)(dM.current), MM()
        },
        oM = MM => "refused" === MM.outcome ? MM.message : rM((0, DM.i)(MM.failure)),
        fM = MM => !(MM.length >= WM.i) && (HM({
          kind: "error",
          message: rM("homePage:changeNameMinLengthError", {
            length: WM.i
          })
        }), !0),
        YM = MM => {
          var OM, SM, jM;
          MM.toLowerCase() !== (null === (OM = null !== (SM = null === (jM = wM.current) || void 0 === jM ? void 0 : jM.name) && void 0 !== SM ? SM : PM) || void 0 === OM ? void 0 : OM.toLowerCase()) ? fM(MM) || RM((0, DM.e)(iM, MM), (iM => {
            "taken" !== iM.outcome ? "refused" !== iM.outcome && "failed" !== iM.outcome ? iM.name !== MM ? (dM.current = "suffixed", wM.current = {
              name: iM.name,
              outcome: dM.current
            }, tM(iM.name), HM({
              kind: "suffixed",
              taken: MM,
              name: iM.name
            })) : pM() : HM({
              kind: "error",
              message: oM(iM)
            }) : HM({
              kind: "error",
              message: rM("homePage:onboardingNameAllTaken")
            })
          })) : pM()
        };
      (0, OM.useEffect)((() => {
        if (!hM || null !== PM || !eM.current) return;
        const MM = setTimeout((() => {
          eM.current = !1, JM(!1), HM({
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(MM)
        }
      }), [hM, PM]), (0, OM.useEffect)((() => {
        if (null === PM) return;
        const MM = CM.current && "ML" === dM.current && iM.isLoggedIn();
        CM.current = !1, "noAccount" === (null === mM || void 0 === mM ? void 0 : mM.kind) && HM(null), MM && tM(PM), eM.current && (eM.current = !1, JM(!1), YM(MM ? PM : bM))
      }), [PM]);
      const NM = "error" === (null === mM || void 0 === mM ? void 0 : mM.kind) ? mM.message : "noAccount" === (null === mM || void 0 === mM ? void 0 : mM.kind) ? rM("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, UM.jsxs)("div", {
          className: "OnboardingNameField",
          ref: uM,
          children: [(0, UM.jsx)("div", {
            className: "OnboardingSubtitle",
            children: rM("general:name")
          }), null === bM && (0, UM.jsx)(kM.d, {}), null !== bM && (0, UM.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, UM.jsx)(ZM.b, {
              className: "OnboardingNameInput",
              ariaLabel: rM("general:name"),
              maxLength: WM.g,
              defaultValue: bM,
              domRef: QM,
              forcedText: hM ? bM : null,
              onEnter: () => {
                var MM;
                null === (MM = QM.current) || void 0 === MM || MM.blur()
              },
              onValueChange: MM => {
                const iM = (0, WM.l)(MM);
                iM !== MM && QM.current && (QM.current.value = iM), HM(iM !== MM ? {
                  kind: "error",
                  message: rM("homePage:nameCharacters")
                } : null), iM !== bM && (dM.current = "changed"), LM(iM)
              }
            }), (0, UM.jsx)(aM.e, {
              className: "OnboardingRandomName",
              ariaLabel: rM("homePage:onboardingRandomName"),
              disabled: hM,
              onClick: () => {
                (() => {
                  if (HM(null), null === PM || iM.isLoggedIn()) return tM((0, WM.f)()), void(dM.current = "rolled");
                  RM((0, DM.n)(iM), (MM => {
                    var rM, OM;
                    if ("refused" === MM.outcome || "failed" === MM.outcome) return tM(iM.getPlayerName()), dM.current = null !== (rM = null === (OM = wM.current) || void 0 === OM ? void 0 : OM.outcome) && void 0 !== rM ? rM : "ML", void HM({
                      kind: "error",
                      message: oM(MM)
                    });
                    dM.current = "rolled", wM.current = {
                      name: MM.name,
                      outcome: "rolled"
                    }, tM(MM.name)
                  }))
                })()
              },
              children: (0, UM.jsx)(EM.b, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === mM || void 0 === mM ? void 0 : mM.kind) && (0, UM.jsx)("div", {
            className: "OnboardingNameNote",
            children: rM("homePage:onboardingNameSuffixed", {
              taken: mM.taken,
              name: mM.name
            })
          }), null !== NM && (0, UM.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: NM
          })]
        }),
        submit: () => {
          if (!hM && null !== bM) {
            if (null === PM) {
              if (fM(bM)) return;
              return gM.current = document.activeElement === QM.current, eM.current = !0, JM(!0), void HM(null)
            }
            YM(bM)
          }
        },
        busy: hM,
        ready: null !== bM
      }
    }

    function fM(MM) {
      return MM < 500
    }

    function YM() {
      const MM = {
        finished: !1
      };
      return jM.NotificationProvider.showCustomPopup({
        body: rM => (0, UM.jsx)(NM, {
          onFinish: () => {
            (0, nM.h)(), MM.finished = !0, rM()
          }
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        ignoreBackgroundPress: !0,
        onClose: () => {
          MM.finished || (0, nM.e)()
        }
      })
    }

    function NM(MM) {
      let {
        onFinish: rM
      } = MM;
      const {
        t: iM
      } = (0, SM.A)(), jM = oM(rM), [QM, zM] = (0, OM.useState)(!1), LM = (0, PM.k)(((MM, rM) => fM(rM))), mM = () => {
        zM(!QM)
      };
      return (0, OM.useEffect)((() => {
        (0, nM.o)()
      }), []), (0, UM.jsxs)("div", {
        className: "Onboarding",
        children: [(0, UM.jsx)("div", {
          className: "OnboardingTitle",
          children: iM("homePage:onboardingTitle")
        }), (0, UM.jsxs)("div", {
          className: "OnboardingBody",
          children: [jM.field, (0, UM.jsx)(pM, {
            moreOptions: QM,
            onToggleMoreOptions: mM,
            moreOptionsBelowPresets: !LM
          })]
        }), (0, UM.jsxs)("div", {
          className: "OnboardingFooter",
          children: [LM && (0, UM.jsx)(CM, {
            open: QM,
            onToggle: mM
          }), (0, UM.jsx)(aM.p, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: jM.busy,
            disabled: !jM.ready,
            onClick: jM.submit,
            children: iM("homePage:onboardingDone")
          })]
        })]
      })
    }
  },
  37322: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM
    });
    var OM = iM(2039),
      SM = iM(1573);
    const jM = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(MM, rM) {
        MM !== this.userContext && this.sendHeld(), this.userContext = MM;
        for (const [OM, SM] of rM) this.pending.set(OM, SM);
        if (null !== this.timer) return;
        const iM = this.lastSentAt + 1100 - Date.now();
        iM <= 0 ? this.send(MM) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), iM), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(MM) {
        const rM = Array.from(this.pending, (MM => {
          let [rM, iM] = MM;
          return {
            Ii: rM,
            Ki: iM
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), SM.c.updateCosmetics(MM, rM).catch((MM => {
          console.error("Failed to update cosmetics", MM)
        }))
      }
    };

    function aM(MM, rM) {
      for (const [iM, OM] of rM) MM.setPlayerCosmetics(iM, OM);
      if (null === OM.gameBridge.latest("connectedGame").websocketUrl) jM.save(MM, rM);
      else
        for (const [iM, SM] of rM) OM.gameBridge.send("updateMyCosmetic", {
          Ii: iM,
          Ki: SM
        })
    }
  },
  34929: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => lM,
      i: () => QM,
      j: () => JM,
      n: () => hM
    });
    var OM = iM(143),
      SM = iM(1279),
      jM = iM(1202),
      aM = iM(1144),
      PM = iM(1826);
    const nM = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function QM(MM) {
      return nM[MM]
    }

    function zM(MM) {
      return (0, PM.c)(MM) ? "outdated" : MM instanceof OM.e ? 429 === MM.httpCode ? "busy" : "server" : "offline"
    }

    function LM(MM, rM, iM) {
      return (0, aM.postJsonWithMetricsCookiesAndJsonResponse)(`${jM.clientSideServerUrls.indexUrl}${rM}`, iM, {
        retries: 3
      }, MM.getMetricsCookies()).catch((MM => (console.error("Bad response from the server when trying to change name:", rM, MM), {
        outcome: "failed",
        failure: zM(MM)
      })))
    }

    function mM(MM) {
      return "outcome" in MM && "failed" === MM.outcome
    }

    function HM(MM) {
      return console.error("Error when trying to get with new name from DB", MM), {
        outcome: "refused",
        message: MM
      }
    }
    async function hM(MM) {
      const rM = await LM(MM, "/index/name/random", {});
      return mM(rM) ? rM : "err" in rM ? HM(rM.err) : (MM.setPlayerName(rM.name), {
        outcome: "changed",
        name: rM.name
      })
    }
    async function JM(MM, rM) {
      const iM = await LM(MM, "/index/name/update", {
        name: rM
      });
      return mM(iM) ? iM : "err" in iM ? HM(iM.err) : iM.nameExists ? {
        outcome: "taken"
      } : (MM.setPlayerName(rM), {
        outcome: "changed",
        name: rM
      })
    }

    function dM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const OM = 1 === rM ? 1 : 10 ** (rM - 1),
        jM = String(OM + Math.floor(iM() * (10 ** rM - OM)));
      return `${MM.slice(0,SM.g-rM)}${jM}`
    }
    const yM = [1, 2, 3, 4];
    async function lM(MM, rM) {
      const iM = await JM(MM, rM);
      if ("taken" !== iM.outcome) return iM;
      for (const OM of yM) {
        const iM = dM(rM, OM),
          SM = await JM(MM, iM);
        if ("taken" !== SM.outcome) return SM
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);
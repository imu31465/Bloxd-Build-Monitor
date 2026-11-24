export const id = 195;
export const ids = [195];
export const modules = {
  36388: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      showOnboardingPopup: () => yS
    });
    var tS = gS(64),
      bS = gS(1281),
      XS = gS(1435),
      xS = gS(1528),
      NS = gS(4446),
      qS = gS(1657),
      uS = gS(1653),
      IS = gS(2340),
      fS = gS(1121),
      kS = gS.n(fS),
      aS = gS(1216),
      KS = gS(36393),
      jS = gS(1127),
      GS = gS(2480),
      CS = gS(3623),
      nS = gS(1211),
      PS = gS(1181);
    const QS = Object.entries(qS.c).filter((SS => {
      let [, HS] = SS;
      return "default" === HS.cosmeticPack
    }));

    function DS(SS) {
      return uS.c.default.colourGroups[SS].colours.map(((SS, HS) => {
        let {
          rbg: gS,
          order: tS
        } = SS;
        return {
          rbg: gS,
          order: tS,
          index: HS
        }
      })).sort(((SS, HS) => SS.order - HS.order))
    }
    const wS = DS("eyes"),
      hS = DS("skin");

    function ZS(SS, HS) {
      var gS;
      if (void 0 === HS || "default" !== (null === (gS = (0, IS.j)(SS, HS)) || void 0 === gS ? void 0 : gS.cosmeticPack)) return null;
      const tS = (0, IS.i)(HS);
      return tS && [tS[0], Number(tS[1])]
    }

    function JS(SS, HS, gS) {
      return `${SS}_${HS}_${gS}`
    }

    function OS(SS) {
      let {
        label: HS,
        colours: gS,
        picked: tS,
        onPick: XS
      } = SS;
      const {
        t: xS
      } = (0, bS.F)();
      return (0, PS.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, PS.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: HS
        }), (0, PS.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": HS,
          children: gS.map(((SS, HS) => {
            let {
              rbg: gS,
              index: bS
            } = SS;
            return (0, PS.jsx)("button", {
              type: "button",
              className: kS()("OnboardingSwatch", {
                OnboardingSwatchSelected: bS === tS
              }),
              style: {
                backgroundColor: `rgb(${gS.join(",")})`
              },
              role: "radio",
              "aria-checked": bS === tS,
              "aria-label": xS("homePage:onboardingColour", {
                number: HS + 1
              }),
              onClick: () => {
                XS(bS)
              }
            }, bS)
          }))
        })]
      })
    }

    function dS() {
      const {
        t: SS
      } = (0, bS.F)(), {
        userContext: HS,
        isUserContextUpdating: gS
      } = (0, nS.b)(), [XS, xS] = (0, tS.useState)(!1), [, qS] = (0, tS.useReducer)((SS => SS + 1), 0), uS = (0, tS.useRef)({}), IS = (0, tS.useRef)(null), fS = (0, CS.b)(), DS = {
        ...HS.getPlayerCosmetics(),
        ...IS.current
      }, dS = (0, tS.useRef)(null);
      (0, tS.useEffect)((() => {
        var SS;
        XS && (null === (SS = dS.current) || void 0 === SS || SS.scrollIntoView({
          block: "nearest"
        }))
      }), [XS]);
      const cS = (SS, HS) => {
          (0, KS.e)(SS, Object.entries(HS)), fS.current ? qS() : SS.publishUpdateIfCurrent()
        },
        vS = SS => {
          const tS = {
            ...IS.current,
            ...SS
          };
          if (!gS) return IS.current = null, void cS(HS, tS);
          IS.current = tS, qS(), aS.userContextManager.getCurrentUserContext().then((SS => {
            IS.current === tS && (IS.current = null, cS(SS, tS))
          })).catch((SS => {
            console.warn("Couldn't put on the onboarding look held for the account", SS), IS.current === tS && (IS.current = null, fS.current && qS())
          }))
        };
      (0, tS.useEffect)((() => () => {
        HS.publishUpdateIfCurrent()
      }), [HS]);
      const ES = ZS("eyes", DS.eyes),
        LS = ZS("skin", DS.skin);
      return (0, PS.jsxs)(PS.Fragment, {
        children: [(0, PS.jsx)("div", {
          className: "OnboardingPresets",
          children: QS.map(((HS, gS) => {
            let [tS, {
              cosmetics: bS
            }] = HS;
            const XS = function(SS, HS) {
              return Object.entries(HS).every((HS => {
                let [gS, tS] = HS;
                return "skin" === gS || ("eyes" === gS ? (null === (bS = ZS("eyes", SS.eyes)) || void 0 === bS ? void 0 : bS[0]) === (null === (XS = ZS("eyes", tS)) || void 0 === XS ? void 0 : XS[0]) : SS[gS] === tS);
                var bS, XS
              }))
            }(DS, bS);
            return (0, PS.jsx)("button", {
              type: "button",
              className: kS()("OnboardingPreset", {
                OnboardingPresetSelected: XS
              }),
              "aria-label": SS("homePage:onboardingPreset", {
                number: gS + 1
              }),
              "aria-pressed": XS,
              onClick: () => {
                (0, NS.i)(`preset.${tS}`);
                const {
                  eyes: SS,
                  skin: HS
                } = uS.current;
                vS({
                  ...bS,
                  ...void 0 !== SS && {
                    eyes: JS("eyes", ZS("eyes", bS.eyes)[0], SS)
                  },
                  ...void 0 !== HS && {
                    skin: JS("skin", "0", HS)
                  }
                })
              },
              children: (0, PS.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${tS}_preview.png)`
                }
              })
            }, tS)
          }))
        }), (0, PS.jsxs)("button", {
          type: "button",
          className: "OnboardingMoreOptions",
          "aria-expanded": XS,
          onClick: () => {
            XS || (0, NS.i)("more"), xS(!XS)
          },
          children: [SS("homePage:onboardingMoreOptions"), (0, PS.jsx)(jS.d, {
            name: XS ? "caret-up" : "caret-down"
          })]
        }), XS && (0, PS.jsxs)("div", {
          ref: dS,
          className: "OnboardingMore",
          children: [(0, PS.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, PS.jsx)(GS.e, {
              cosmetics: DS
            })
          }), (0, PS.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, PS.jsx)(OS, {
              label: SS("homePage:onboardingEyeColour"),
              colours: wS,
              picked: null === ES || void 0 === ES ? void 0 : ES[1],
              onPick: SS => {
                var HS;
                (0, NS.i)("eyes"), uS.current.eyes = SS, vS({
                  eyes: JS("eyes", null !== (HS = null === ES || void 0 === ES ? void 0 : ES[0]) && void 0 !== HS ? HS : "0", SS)
                })
              }
            }), (0, PS.jsx)(OS, {
              label: SS("homePage:onboardingSkinColour"),
              colours: hS,
              picked: null === LS || void 0 === LS ? void 0 : LS[1],
              onPick: SS => {
                (0, NS.i)("skin"), uS.current.skin = SS, vS({
                  skin: JS("skin", "0", SS)
                })
              }
            })]
          })]
        })]
      })
    }
    var cS = gS(1348),
      vS = gS(24),
      ES = gS(34124),
      LS = gS(1419),
      YS = gS(1774);

    function AS(SS) {
      const {
        t: HS
      } = (0, bS.F)(), {
        userContext: gS,
        isUserContextUpdating: XS
      } = (0, nS.b)(), qS = XS ? null : gS.getPlayerName(), uS = (0, tS.useRef)(null), [IS, fS] = (0, tS.useState)((() => null === qS ? (0, cS.f)() : null)), [kS, aS] = (0, tS.useState)(null), [KS, GS] = (0, tS.useState)(!1), QS = (0, tS.useRef)("ia"), DS = (0, CS.b)(), wS = (0, tS.useRef)(null !== IS), hS = (0, tS.useRef)(!1), ZS = null !== IS && void 0 !== IS ? IS : qS, JS = (0, tS.useRef)(null), OS = SS => {
        uS.current && (uS.current.value = SS), fS(SS)
      }, dS = (0, tS.useRef)(!1);
      (0, tS.useEffect)((() => {
        var SS, HS;
        !KS && dS.current && (dS.current = !1, null === (SS = uS.current) || void 0 === SS || SS.focus(), null === (HS = uS.current) || void 0 === HS || HS.select())
      }), [KS]);
      const AS = (0, tS.useRef)(null);
      (0, tS.useEffect)((() => {
        var SS;
        null !== kS && (null === (SS = AS.current) || void 0 === SS || SS.scrollIntoView({
          block: "nearest"
        }))
      }), [kS]);
      const yS = (SS, HS) => {
        const gS = document.activeElement === uS.current || dS.current;
        GS(!0), aS(null), SS.then((SS => {
          DS.current && (GS(!1), dS.current = gS, HS(SS))
        }))
      };
      (0, tS.useEffect)((() => {
        var SS, HS;
        vS.b.get("isTouchScreen") || (null === (SS = uS.current) || void 0 === SS || SS.focus(), null === (HS = uS.current) || void 0 === HS || HS.select())
      }), []);
      const VS = () => {
          (0, NS.l)(QS.current), SS()
        },
        iS = SS => "refused" === SS.outcome ? SS.message : HS((0, ES.c)(SS.failure)),
        WS = SS => !(SS.length >= cS.i) && (aS({
          kind: "error",
          message: HS("homePage:changeNameMinLengthError", {
            length: cS.i
          })
        }), !0),
        zS = SS => {
          var tS, bS, XS;
          SS.toLowerCase() !== (null === (tS = null !== (bS = null === (XS = JS.current) || void 0 === XS ? void 0 : XS.name) && void 0 !== bS ? bS : qS) || void 0 === tS ? void 0 : tS.toLowerCase()) ? WS(SS) || yS((0, ES.b)(gS, SS), (gS => {
            "taken" !== gS.outcome ? "refused" !== gS.outcome && "failed" !== gS.outcome ? gS.name !== SS ? (QS.current = "suffixed", JS.current = {
              name: gS.name,
              outcome: QS.current
            }, OS(gS.name), aS({
              kind: "suffixed",
              taken: SS,
              name: gS.name
            })) : VS() : aS({
              kind: "error",
              message: iS(gS)
            }) : aS({
              kind: "error",
              message: HS("homePage:onboardingNameAllTaken")
            })
          })) : VS()
        };
      (0, tS.useEffect)((() => {
        if (!KS || null !== qS || !hS.current) return;
        const SS = setTimeout((() => {
          hS.current = !1, GS(!1), aS({
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(SS)
        }
      }), [KS, qS]), (0, tS.useEffect)((() => {
        if (null === qS) return;
        const SS = wS.current && "ia" === QS.current && gS.isLoggedIn();
        wS.current = !1, "noAccount" === (null === kS || void 0 === kS ? void 0 : kS.kind) && aS(null), SS && OS(qS), hS.current && (hS.current = !1, GS(!1), zS(SS ? qS : ZS))
      }), [qS]);
      const US = "error" === (null === kS || void 0 === kS ? void 0 : kS.kind) ? kS.message : "noAccount" === (null === kS || void 0 === kS ? void 0 : kS.kind) ? HS("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, PS.jsxs)("div", {
          className: "OnboardingNameField",
          ref: AS,
          children: [(0, PS.jsx)("div", {
            className: "OnboardingSubtitle",
            children: HS("general:name")
          }), null === ZS && (0, PS.jsx)(LS.c, {}), null !== ZS && (0, PS.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, PS.jsx)(YS.e, {
              className: "OnboardingNameInput",
              ariaLabel: HS("general:name"),
              maxLength: cS.g,
              defaultValue: ZS,
              domRef: uS,
              forcedText: KS ? ZS : null,
              onEnter: () => {
                var SS;
                null === (SS = uS.current) || void 0 === SS || SS.blur()
              },
              onValueChange: SS => {
                const gS = (0, cS.l)(SS);
                gS !== SS && uS.current && (uS.current.value = gS), aS(gS !== SS ? {
                  kind: "error",
                  message: HS("homePage:nameCharacters")
                } : null), gS !== ZS && (QS.current = "changed"), fS(gS)
              }
            }), (0, PS.jsx)(xS.g, {
              className: "OnboardingRandomName",
              ariaLabel: HS("homePage:onboardingRandomName"),
              disabled: KS,
              onClick: () => {
                (() => {
                  if (aS(null), null === qS || gS.isLoggedIn()) return OS((0, cS.f)()), void(QS.current = "rolled");
                  yS((0, ES.h)(gS), (SS => {
                    var HS, tS;
                    if ("refused" === SS.outcome || "failed" === SS.outcome) return OS(gS.getPlayerName()), QS.current = null !== (HS = null === (tS = JS.current) || void 0 === tS ? void 0 : tS.outcome) && void 0 !== HS ? HS : "ia", void aS({
                      kind: "error",
                      message: iS(SS)
                    });
                    QS.current = "rolled", JS.current = {
                      name: SS.name,
                      outcome: "rolled"
                    }, OS(SS.name)
                  }))
                })()
              },
              children: (0, PS.jsx)(jS.d, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === kS || void 0 === kS ? void 0 : kS.kind) && (0, PS.jsx)("div", {
            className: "OnboardingNameNote",
            children: HS("homePage:onboardingNameSuffixed", {
              taken: kS.taken,
              name: kS.name
            })
          }), null !== US && (0, PS.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: US
          })]
        }),
        submit: () => {
          if (!KS && null !== ZS) {
            if (null === qS) {
              if (WS(ZS)) return;
              return dS.current = document.activeElement === uS.current, hS.current = !0, GS(!0), void aS(null)
            }
            zS(ZS)
          }
        },
        busy: KS,
        ready: null !== ZS
      }
    }

    function yS() {
      const SS = {
        finished: !1
      };
      XS.NotificationProvider.showCustomPopup({
        body: HS => (0, PS.jsx)(VS, {
          onFinish: () => {
            (0, NS.f)(), SS.finished = !0, HS()
          }
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        ignoreBackgroundPress: !0,
        onClose: () => {
          SS.finished || (0, NS.b)()
        }
      })
    }

    function VS(SS) {
      let {
        onFinish: HS
      } = SS;
      const {
        t: gS
      } = (0, bS.F)(), XS = AS(HS);
      return (0, tS.useEffect)((() => {
        (0, NS.n)()
      }), []), (0, PS.jsxs)("div", {
        className: "Onboarding",
        children: [(0, PS.jsx)("div", {
          className: "OnboardingTitle",
          children: gS("homePage:onboardingTitle")
        }), (0, PS.jsxs)("div", {
          className: "OnboardingBody",
          children: [XS.field, (0, PS.jsx)(dS, {})]
        }), (0, PS.jsx)("div", {
          className: "OnboardingFooter",
          children: (0, PS.jsx)(xS.p, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: XS.busy,
            disabled: !XS.ready,
            onClick: XS.submit,
            children: gS("homePage:onboardingDone")
          })
        })]
      })
    }
  },
  36393: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS
    });
    var tS = gS(2060),
      bS = gS(1588);
    const XS = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(SS, HS) {
        SS !== this.userContext && this.sendHeld(), this.userContext = SS;
        for (const [tS, bS] of HS) this.pending.set(tS, bS);
        if (null !== this.timer) return;
        const gS = this.lastSentAt + 1100 - Date.now();
        gS <= 0 ? this.send(SS) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), gS), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(SS) {
        const HS = Array.from(this.pending, (SS => {
          let [HS, gS] = SS;
          return {
            wt: HS,
            ht: gS
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), bS.b.updateCosmetics(SS, HS).catch((SS => {
          console.error("Failed to update cosmetics", SS)
        }))
      }
    };

    function xS(SS, HS) {
      for (const [gS, tS] of HS) SS.setPlayerCosmetics(gS, tS);
      if (null === tS.gameBridge.latest("connectedGame").websocketUrl) XS.save(SS, HS);
      else
        for (const [gS, bS] of HS) tS.gameBridge.send("updateMyCosmetic", {
          wt: gS,
          ht: bS
        })
    }
  },
  34124: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => nS,
      c: () => uS,
      g: () => jS,
      h: () => KS
    });
    var tS = gS(160),
      bS = gS(1348),
      XS = gS(1286),
      xS = gS(1216),
      NS = gS(1835);
    const qS = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function uS(SS) {
      return qS[SS]
    }

    function IS(SS) {
      return (0, NS.b)(SS) ? "outdated" : SS instanceof tS.b ? 429 === SS.httpCode ? "busy" : "server" : "offline"
    }

    function fS(SS, HS, gS) {
      return (0, xS.postJsonWithMetricsCookiesAndJsonResponse)(`${XS.clientSideServerUrls.indexUrl}${HS}`, gS, {
        retries: 3
      }, SS.getMetricsCookies()).catch((SS => (console.error("Bad response from the server when trying to change name:", HS, SS), {
        outcome: "failed",
        failure: IS(SS)
      })))
    }

    function kS(SS) {
      return "outcome" in SS && "failed" === SS.outcome
    }

    function aS(SS) {
      return console.error("Error when trying to get with new name from DB", SS), {
        outcome: "refused",
        message: SS
      }
    }
    async function KS(SS) {
      const HS = await fS(SS, "/index/name/random", {});
      return kS(HS) ? HS : "err" in HS ? aS(HS.err) : (SS.setPlayerName(HS.name), {
        outcome: "changed",
        name: HS.name
      })
    }
    async function jS(SS, HS) {
      const gS = await fS(SS, "/index/name/update", {
        name: HS
      });
      return kS(gS) ? gS : "err" in gS ? aS(gS.err) : gS.nameExists ? {
        outcome: "taken"
      } : (SS.setPlayerName(HS), {
        outcome: "changed",
        name: HS
      })
    }

    function GS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const tS = 1 === HS ? 1 : 10 ** (HS - 1),
        XS = String(tS + Math.floor(gS() * (10 ** HS - tS)));
      return `${SS.slice(0,bS.g-HS)}${XS}`
    }
    const CS = [1, 2, 3, 4];
    async function nS(SS, HS) {
      const gS = await jS(SS, HS);
      if ("taken" !== gS.outcome) return gS;
      for (const tS of CS) {
        const gS = GS(HS, tS),
          bS = await jS(SS, gS);
        if ("taken" !== bS.outcome) return bS
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);
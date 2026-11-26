export const id = 221;
export const ids = [221];
export const modules = {
  37528: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      isMoreOptionsInFooter: () => oV,
      showOnboardingPopup: () => cV
    });
    var JV = xV(62),
      YV = xV(1220),
      UV = xV(1439),
      yV = xV(1551),
      pV = xV(1159),
      QV = xV(4740),
      nV = xV(1656),
      wV = xV(1649),
      ZV = xV(2385),
      vV = xV(1146),
      rV = xV.n(vV),
      kV = xV(1173),
      bV = xV(37533),
      EV = xV(2524),
      BV = xV(3931),
      jV = xV(1168),
      qV = xV(1414),
      tV = xV(1321);
    const FV = "OnboardingMorePanel";

    function TV(VV) {
      let {
        open: eV,
        onToggle: xV
      } = VV;
      const {
        t: JV
      } = (0, YV.A)();
      return (0, tV.jsxs)("button", {
        type: "button",
        className: "OnboardingMoreOptions",
        "aria-expanded": eV,
        "aria-controls": eV ? FV : void 0,
        onClick: () => {
          eV || (0, QV.j)("more"), xV()
        },
        children: [JV("homePage:onboardingMoreOptions"), (0, tV.jsx)(qV.b, {
          name: eV ? "caret-up" : "caret-down"
        })]
      })
    }
    const PV = Object.entries(nV.c).filter((VV => {
      let [, eV] = VV;
      return "default" === eV.cosmeticPack
    }));

    function AV(VV) {
      return wV.d.default.colourGroups[VV].colours.map(((VV, eV) => {
        let {
          rbg: xV,
          order: JV
        } = VV;
        return {
          rbg: xV,
          order: JV,
          index: eV
        }
      })).sort(((VV, eV) => VV.order - eV.order))
    }
    const NV = AV("eyes"),
      XV = AV("skin");

    function MV(VV, eV) {
      var xV;
      if (void 0 === eV || "default" !== (null === (xV = (0, ZV.h)(VV, eV)) || void 0 === xV ? void 0 : xV.cosmeticPack)) return null;
      const JV = (0, ZV.g)(eV);
      return JV && [JV[0], Number(JV[1])]
    }

    function zV(VV, eV, xV) {
      return `${VV}_${eV}_${xV}`
    }

    function GV(VV) {
      let {
        label: eV,
        colours: xV,
        picked: JV,
        onPick: UV
      } = VV;
      const {
        t: yV
      } = (0, YV.A)();
      return (0, tV.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, tV.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: eV
        }), (0, tV.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": eV,
          children: xV.map(((VV, eV) => {
            let {
              rbg: xV,
              index: YV
            } = VV;
            return (0, tV.jsx)("button", {
              type: "button",
              className: rV()("OnboardingSwatch", {
                OnboardingSwatchSelected: YV === JV
              }),
              style: {
                backgroundColor: `rgb(${xV.join(",")})`
              },
              role: "radio",
              "aria-checked": YV === JV,
              "aria-label": yV("homePage:onboardingColour", {
                number: eV + 1
              }),
              onClick: () => {
                UV(YV)
              }
            }, YV)
          }))
        })]
      })
    }

    function WV(VV) {
      let {
        moreOptions: eV,
        onToggleMoreOptions: xV,
        moreOptionsBelowPresets: UV
      } = VV;
      const {
        t: yV
      } = (0, YV.A)(), {
        userContext: pV,
        isUserContextUpdating: nV
      } = (0, jV.d)(), [, wV] = (0, JV.useReducer)((VV => VV + 1), 0), ZV = (0, JV.useRef)({}), vV = (0, JV.useRef)(null), qV = (0, BV.e)(), AV = {
        ...pV.getPlayerCosmetics(),
        ...vV.current
      }, WV = (0, JV.useRef)(null);
      (0, JV.useEffect)((() => {
        var VV;
        eV && (null === (VV = WV.current) || void 0 === VV || VV.scrollIntoView({
          block: "nearest"
        }))
      }), [eV]);
      const RV = (VV, eV) => {
          (0, bV.c)(VV, Object.entries(eV)), qV.current ? wV() : VV.publishUpdateIfCurrent()
        },
        gV = VV => {
          const eV = {
            ...vV.current,
            ...VV
          };
          if (!nV) return vV.current = null, void RV(pV, eV);
          vV.current = eV, wV(), kV.userContextManager.getCurrentUserContext().then((VV => {
            vV.current === eV && (vV.current = null, RV(VV, eV))
          })).catch((VV => {
            console.warn("Couldn't put on the onboarding look held for the account", VV), vV.current === eV && (vV.current = null, qV.current && wV())
          }))
        };
      (0, JV.useEffect)((() => () => {
        pV.publishUpdateIfCurrent()
      }), [pV]);
      const DV = MV("eyes", AV.eyes),
        iV = MV("skin", AV.skin);
      return (0, tV.jsxs)(tV.Fragment, {
        children: [(0, tV.jsx)("div", {
          className: "OnboardingPresets",
          children: PV.map(((VV, eV) => {
            let [xV, {
              cosmetics: JV
            }] = VV;
            const YV = function(VV, eV) {
              return Object.entries(eV).every((eV => {
                let [xV, JV] = eV;
                return "skin" === xV || ("eyes" === xV ? (null === (YV = MV("eyes", VV.eyes)) || void 0 === YV ? void 0 : YV[0]) === (null === (UV = MV("eyes", JV)) || void 0 === UV ? void 0 : UV[0]) : VV[xV] === JV);
                var YV, UV
              }))
            }(AV, JV);
            return (0, tV.jsx)("button", {
              type: "button",
              className: rV()("OnboardingPreset", {
                OnboardingPresetSelected: YV
              }),
              "aria-label": yV("homePage:onboardingPreset", {
                number: eV + 1
              }),
              "aria-pressed": YV,
              onClick: () => {
                (0, QV.j)(`preset.${xV}`);
                const {
                  eyes: VV,
                  skin: eV
                } = ZV.current;
                gV({
                  ...JV,
                  ...void 0 !== VV && {
                    eyes: zV("eyes", MV("eyes", JV.eyes)[0], VV)
                  },
                  ...void 0 !== eV && {
                    skin: zV("skin", "0", eV)
                  }
                })
              },
              children: (0, tV.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${xV}_preview.png)`
                }
              })
            }, xV)
          }))
        }), UV && (0, tV.jsx)(TV, {
          open: eV,
          onToggle: xV
        }), eV && (0, tV.jsxs)("div", {
          ref: WV,
          id: FV,
          className: "OnboardingMore",
          children: [(0, tV.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, tV.jsx)(EV.e, {
              cosmetics: AV
            })
          }), (0, tV.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, tV.jsx)(GV, {
              label: yV("homePage:onboardingEyeColour"),
              colours: NV,
              picked: null === DV || void 0 === DV ? void 0 : DV[1],
              onPick: VV => {
                var eV;
                (0, QV.j)("eyes"), ZV.current.eyes = VV, gV({
                  eyes: zV("eyes", null !== (eV = null === DV || void 0 === DV ? void 0 : DV[0]) && void 0 !== eV ? eV : "0", VV)
                })
              }
            }), (0, tV.jsx)(GV, {
              label: yV("homePage:onboardingSkinColour"),
              colours: XV,
              picked: null === iV || void 0 === iV ? void 0 : iV[1],
              onPick: VV => {
                (0, QV.j)("skin"), ZV.current.skin = VV, gV({
                  skin: zV("skin", "0", VV)
                })
              }
            })]
          })]
        })]
      })
    }
    var RV = xV(1293),
      gV = xV(27),
      DV = xV(35205),
      iV = xV(1408),
      CV = xV(1772);

    function aV(VV) {
      const {
        t: eV
      } = (0, YV.A)(), {
        userContext: xV,
        isUserContextUpdating: UV
      } = (0, jV.d)(), pV = UV ? null : xV.getPlayerName(), nV = (0, JV.useRef)(null), [wV, ZV] = (0, JV.useState)((() => null === pV ? (0, RV.d)() : null)), [vV, rV] = (0, JV.useState)(null), [kV, bV] = (0, JV.useState)(!1), EV = (0, JV.useRef)("ZZ"), FV = (0, BV.e)(), TV = (0, JV.useRef)(null !== wV), PV = (0, JV.useRef)(!1), AV = null !== wV && void 0 !== wV ? wV : pV, NV = (0, JV.useRef)(null), XV = VV => {
        nV.current && (nV.current.value = VV), ZV(VV)
      }, MV = (0, JV.useRef)(!1);
      (0, JV.useEffect)((() => {
        var VV, eV;
        !kV && MV.current && (MV.current = !1, null === (VV = nV.current) || void 0 === VV || VV.focus(), null === (eV = nV.current) || void 0 === eV || eV.select())
      }), [kV]);
      const zV = (0, JV.useRef)(null);
      (0, JV.useEffect)((() => {
        var VV;
        null !== vV && (null === (VV = zV.current) || void 0 === VV || VV.scrollIntoView({
          block: "nearest"
        }))
      }), [vV]);
      const GV = (VV, eV) => {
        const xV = document.activeElement === nV.current || MV.current;
        bV(!0), rV(null), VV.then((VV => {
          FV.current && (bV(!1), MV.current = xV, eV(VV))
        }))
      };
      (0, JV.useEffect)((() => {
        var VV, eV;
        gV.b.get("isTouchScreen") || (null === (VV = nV.current) || void 0 === VV || VV.focus(), null === (eV = nV.current) || void 0 === eV || eV.select())
      }), []);
      const WV = () => {
          (0, QV.m)(EV.current), VV()
        },
        aV = VV => "refused" === VV.outcome ? VV.message : eV((0, DV.e)(VV.failure)),
        oV = VV => !(VV.length >= RV.h) && (rV({
          kind: "error",
          message: eV("homePage:changeNameMinLengthError", {
            length: RV.h
          })
        }), !0),
        cV = VV => {
          var JV, YV, UV;
          VV.toLowerCase() !== (null === (JV = null !== (YV = null === (UV = NV.current) || void 0 === UV ? void 0 : UV.name) && void 0 !== YV ? YV : pV) || void 0 === JV ? void 0 : JV.toLowerCase()) ? oV(VV) || GV((0, DV.d)(xV, VV), (xV => {
            "taken" !== xV.outcome ? "refused" !== xV.outcome && "failed" !== xV.outcome ? xV.name !== VV ? (EV.current = "suffixed", NV.current = {
              name: xV.name,
              outcome: EV.current
            }, XV(xV.name), rV({
              kind: "suffixed",
              taken: VV,
              name: xV.name
            })) : WV() : rV({
              kind: "error",
              message: aV(xV)
            }) : rV({
              kind: "error",
              message: eV("homePage:onboardingNameAllTaken")
            })
          })) : WV()
        };
      (0, JV.useEffect)((() => {
        if (!kV || null !== pV || !PV.current) return;
        const VV = setTimeout((() => {
          PV.current = !1, bV(!1), rV({
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(VV)
        }
      }), [kV, pV]), (0, JV.useEffect)((() => {
        if (null === pV) return;
        const VV = TV.current && "ZZ" === EV.current && xV.isLoggedIn();
        TV.current = !1, "noAccount" === (null === vV || void 0 === vV ? void 0 : vV.kind) && rV(null), VV && XV(pV), PV.current && (PV.current = !1, bV(!1), cV(VV ? pV : AV))
      }), [pV]);
      const hV = "error" === (null === vV || void 0 === vV ? void 0 : vV.kind) ? vV.message : "noAccount" === (null === vV || void 0 === vV ? void 0 : vV.kind) ? eV("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, tV.jsxs)("div", {
          className: "OnboardingNameField",
          ref: zV,
          children: [(0, tV.jsx)("div", {
            className: "OnboardingSubtitle",
            children: eV("general:name")
          }), null === AV && (0, tV.jsx)(iV.d, {}), null !== AV && (0, tV.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, tV.jsx)(CV.d, {
              className: "OnboardingNameInput",
              ariaLabel: eV("general:name"),
              maxLength: RV.f,
              defaultValue: AV,
              domRef: nV,
              forcedText: kV ? AV : null,
              onEnter: () => {
                var VV;
                null === (VV = nV.current) || void 0 === VV || VV.blur()
              },
              onValueChange: VV => {
                const xV = (0, RV.o)(VV);
                xV !== VV && nV.current && (nV.current.value = xV), rV(xV !== VV ? {
                  kind: "error",
                  message: eV("homePage:nameCharacters")
                } : null), xV !== AV && (EV.current = "changed"), ZV(xV)
              }
            }), (0, tV.jsx)(yV.f, {
              className: "OnboardingRandomName",
              ariaLabel: eV("homePage:onboardingRandomName"),
              disabled: kV,
              onClick: () => {
                (() => {
                  if (rV(null), null === pV || xV.isLoggedIn()) return XV((0, RV.d)()), void(EV.current = "rolled");
                  GV((0, DV.j)(xV), (VV => {
                    var eV, JV;
                    if ("refused" === VV.outcome || "failed" === VV.outcome) return XV(xV.getPlayerName()), EV.current = null !== (eV = null === (JV = NV.current) || void 0 === JV ? void 0 : JV.outcome) && void 0 !== eV ? eV : "ZZ", void rV({
                      kind: "error",
                      message: aV(VV)
                    });
                    EV.current = "rolled", NV.current = {
                      name: VV.name,
                      outcome: "rolled"
                    }, XV(VV.name)
                  }))
                })()
              },
              children: (0, tV.jsx)(qV.b, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === vV || void 0 === vV ? void 0 : vV.kind) && (0, tV.jsx)("div", {
            className: "OnboardingNameNote",
            children: eV("homePage:onboardingNameSuffixed", {
              taken: vV.taken,
              name: vV.name
            })
          }), null !== hV && (0, tV.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: hV
          })]
        }),
        submit: () => {
          if (!kV && null !== AV) {
            if (null === pV) {
              if (oV(AV)) return;
              return MV.current = document.activeElement === nV.current, PV.current = !0, bV(!0), void rV(null)
            }
            cV(AV)
          }
        },
        busy: kV,
        ready: null !== AV
      }
    }

    function oV(VV) {
      return VV < 500
    }

    function cV() {
      const VV = {
        finished: !1
      };
      return UV.NotificationProvider.showCustomPopup({
        body: eV => (0, tV.jsx)(hV, {
          onFinish: () => {
            (0, QV.f)(), VV.finished = !0, eV()
          }
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        ignoreBackgroundPress: !0,
        onClose: () => {
          VV.finished || (0, QV.d)()
        }
      })
    }

    function hV(VV) {
      let {
        onFinish: eV
      } = VV;
      const {
        t: xV
      } = (0, YV.A)(), UV = aV(eV), [nV, wV] = (0, JV.useState)(!1), ZV = (0, pV.n)(((VV, eV) => oV(eV))), vV = () => {
        wV(!nV)
      };
      return (0, JV.useEffect)((() => {
        (0, QV.o)()
      }), []), (0, tV.jsxs)("div", {
        className: "Onboarding",
        children: [(0, tV.jsx)("div", {
          className: "OnboardingTitle",
          children: xV("homePage:onboardingTitle")
        }), (0, tV.jsxs)("div", {
          className: "OnboardingBody",
          children: [UV.field, (0, tV.jsx)(WV, {
            moreOptions: nV,
            onToggleMoreOptions: vV,
            moreOptionsBelowPresets: !ZV
          })]
        }), (0, tV.jsxs)("div", {
          className: "OnboardingFooter",
          children: [ZV && (0, tV.jsx)(TV, {
            open: nV,
            onToggle: vV
          }), (0, tV.jsx)(yV.m, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: UV.busy,
            disabled: !UV.ready,
            onClick: UV.submit,
            children: xV("homePage:onboardingDone")
          })]
        })]
      })
    }
  },
  37533: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV
    });
    var JV = xV(2051),
      YV = xV(1603);
    const UV = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(VV, eV) {
        VV !== this.userContext && this.sendHeld(), this.userContext = VV;
        for (const [JV, YV] of eV) this.pending.set(JV, YV);
        if (null !== this.timer) return;
        const xV = this.lastSentAt + 1100 - Date.now();
        xV <= 0 ? this.send(VV) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), xV), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(VV) {
        const eV = Array.from(this.pending, (VV => {
          let [eV, xV] = VV;
          return {
            YJ: eV,
            UJ: xV
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), YV.b.updateCosmetics(VV, eV).catch((VV => {
          console.error("Failed to update cosmetics", VV)
        }))
      }
    };

    function yV(VV, eV) {
      for (const [xV, JV] of eV) VV.setPlayerCosmetics(xV, JV);
      if (null === JV.gameBridge.latest("connectedGame").websocketUrl) UV.save(VV, eV);
      else
        for (const [xV, YV] of eV) JV.gameBridge.send("updateMyCosmetic", {
          YJ: xV,
          UJ: YV
        })
    }
  },
  35205: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => jV,
      e: () => nV,
      g: () => bV,
      j: () => kV
    });
    var JV = xV(165),
      YV = xV(1293),
      UV = xV(1230),
      yV = xV(1173),
      pV = xV(1829);
    const QV = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function nV(VV) {
      return QV[VV]
    }

    function wV(VV) {
      return (0, pV.c)(VV) ? "outdated" : VV instanceof JV.b ? 429 === VV.httpCode ? "busy" : "server" : "offline"
    }

    function ZV(VV, eV, xV) {
      return (0, yV.postJsonWithMetricsCookiesAndJsonResponse)(`${UV.clientSideServerUrls.indexUrl}${eV}`, xV, {
        retries: 3
      }, VV.getMetricsCookies()).catch((VV => (console.error("Bad response from the server when trying to change name:", eV, VV), {
        outcome: "failed",
        failure: wV(VV)
      })))
    }

    function vV(VV) {
      return "outcome" in VV && "failed" === VV.outcome
    }

    function rV(VV) {
      return console.error("Error when trying to get with new name from DB", VV), {
        outcome: "refused",
        message: VV
      }
    }
    async function kV(VV) {
      const eV = await ZV(VV, "/index/name/random", {});
      return vV(eV) ? eV : "err" in eV ? rV(eV.err) : (VV.setPlayerName(eV.name), {
        outcome: "changed",
        name: eV.name
      })
    }
    async function bV(VV, eV) {
      const xV = await ZV(VV, "/index/name/update", {
        name: eV
      });
      return vV(xV) ? xV : "err" in xV ? rV(xV.err) : xV.nameExists ? {
        outcome: "taken"
      } : (VV.setPlayerName(eV), {
        outcome: "changed",
        name: eV
      })
    }

    function EV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const JV = 1 === eV ? 1 : 10 ** (eV - 1),
        UV = String(JV + Math.floor(xV() * (10 ** eV - JV)));
      return `${VV.slice(0,YV.f-eV)}${UV}`
    }
    const BV = [1, 2, 3, 4];
    async function jV(VV, eV) {
      const xV = await bV(VV, eV);
      if ("taken" !== xV.outcome) return xV;
      for (const JV of BV) {
        const xV = EV(eV, JV),
          YV = await bV(VV, xV);
        if ("taken" !== YV.outcome) return YV
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);
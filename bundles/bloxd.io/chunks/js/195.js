export const id = 195;
export const ids = [195];
export const modules = {
  36367: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      showOnboardingPopup: () => iD
    });
    var pD = wD(58),
      sD = wD(1200),
      KD = wD(1355),
      rD = wD(1447),
      LD = wD(4342),
      cD = wD(1570),
      gD = wD(1562),
      RD = wD(2197),
      AD = wD(1044),
      UD = wD.n(AD),
      fD = wD(1130),
      ID = wD(36374),
      BD = wD(1057),
      GD = wD(2356),
      hD = wD(3482),
      nD = wD(1127),
      MD = wD(1096);
    const OD = Object.entries(cD.b).filter((DD => {
      let [, zD] = DD;
      return "default" === zD.cosmeticPack
    }));

    function JD(DD) {
      return gD.e.default.colourGroups[DD].colours.map(((DD, zD) => {
        let {
          rbg: wD,
          order: pD
        } = DD;
        return {
          rbg: wD,
          order: pD,
          index: zD
        }
      })).sort(((DD, zD) => DD.order - zD.order))
    }
    const ED = JD("eyes"),
      QD = JD("skin");

    function XD(DD, zD) {
      var wD;
      if (void 0 === zD || "default" !== (null === (wD = (0, RD.l)(DD, zD)) || void 0 === wD ? void 0 : wD.cosmeticPack)) return null;
      const pD = (0, RD.i)(zD);
      return pD && [pD[0], Number(pD[1])]
    }

    function VD(DD, zD, wD) {
      return `${DD}_${zD}_${wD}`
    }

    function PD(DD) {
      let {
        label: zD,
        colours: wD,
        picked: pD,
        onPick: KD
      } = DD;
      const {
        t: rD
      } = (0, sD.E)();
      return (0, MD.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, MD.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: zD
        }), (0, MD.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": zD,
          children: wD.map(((DD, zD) => {
            let {
              rbg: wD,
              index: sD
            } = DD;
            return (0, MD.jsx)("button", {
              type: "button",
              className: UD()("OnboardingSwatch", {
                OnboardingSwatchSelected: sD === pD
              }),
              style: {
                backgroundColor: `rgb(${wD.join(",")})`
              },
              role: "radio",
              "aria-checked": sD === pD,
              "aria-label": rD("homePage:onboardingColour", {
                number: zD + 1
              }),
              onClick: () => {
                KD(sD)
              }
            }, sD)
          }))
        })]
      })
    }

    function CD() {
      const {
        t: DD
      } = (0, sD.E)(), {
        userContext: zD,
        isUserContextUpdating: wD
      } = (0, nD.c)(), [KD, rD] = (0, pD.useState)(!1), [, cD] = (0, pD.useReducer)((DD => DD + 1), 0), gD = (0, pD.useRef)({}), RD = (0, pD.useRef)(null), AD = (0, hD.c)(), JD = {
        ...zD.getPlayerCosmetics(),
        ...RD.current
      }, CD = (0, pD.useRef)(null);
      (0, pD.useEffect)((() => {
        var DD;
        KD && (null === (DD = CD.current) || void 0 === DD || DD.scrollIntoView({
          block: "nearest"
        }))
      }), [KD]);
      const xD = (DD, zD) => {
          (0, ID.b)(DD, Object.entries(zD)), AD.current ? cD() : DD.publishUpdateIfCurrent()
        },
        TD = DD => {
          const pD = {
            ...RD.current,
            ...DD
          };
          if (!wD) return RD.current = null, void xD(zD, pD);
          RD.current = pD, cD(), fD.userContextManager.getCurrentUserContext().then((DD => {
            RD.current === pD && (RD.current = null, xD(DD, pD))
          })).catch((DD => {
            console.warn("Couldn't put on the onboarding look held for the account", DD), RD.current === pD && (RD.current = null, AD.current && cD())
          }))
        };
      (0, pD.useEffect)((() => () => {
        zD.publishUpdateIfCurrent()
      }), [zD]);
      const bD = XD("eyes", JD.eyes),
        jD = XD("skin", JD.skin);
      return (0, MD.jsxs)(MD.Fragment, {
        children: [(0, MD.jsx)("div", {
          className: "OnboardingPresets",
          children: OD.map(((zD, wD) => {
            let [pD, {
              cosmetics: sD
            }] = zD;
            const KD = function(DD, zD) {
              return Object.entries(zD).every((zD => {
                let [wD, pD] = zD;
                return "skin" === wD || ("eyes" === wD ? (null === (sD = XD("eyes", DD.eyes)) || void 0 === sD ? void 0 : sD[0]) === (null === (KD = XD("eyes", pD)) || void 0 === KD ? void 0 : KD[0]) : DD[wD] === pD);
                var sD, KD
              }))
            }(JD, sD);
            return (0, MD.jsx)("button", {
              type: "button",
              className: UD()("OnboardingPreset", {
                OnboardingPresetSelected: KD
              }),
              "aria-label": DD("homePage:onboardingPreset", {
                number: wD + 1
              }),
              "aria-pressed": KD,
              onClick: () => {
                (0, LD.h)(`preset.${pD}`);
                const {
                  eyes: DD,
                  skin: zD
                } = gD.current;
                TD({
                  ...sD,
                  ...void 0 !== DD && {
                    eyes: VD("eyes", XD("eyes", sD.eyes)[0], DD)
                  },
                  ...void 0 !== zD && {
                    skin: VD("skin", "0", zD)
                  }
                })
              },
              children: (0, MD.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${pD}_preview.png)`
                }
              })
            }, pD)
          }))
        }), (0, MD.jsxs)("button", {
          type: "button",
          className: "OnboardingMoreOptions",
          "aria-expanded": KD,
          onClick: () => {
            KD || (0, LD.h)("more"), rD(!KD)
          },
          children: [DD("homePage:onboardingMoreOptions"), (0, MD.jsx)(BD.e, {
            name: KD ? "caret-up" : "caret-down"
          })]
        }), KD && (0, MD.jsxs)("div", {
          ref: CD,
          className: "OnboardingMore",
          children: [(0, MD.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, MD.jsx)(GD.c, {
              cosmetics: JD
            })
          }), (0, MD.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, MD.jsx)(PD, {
              label: DD("homePage:onboardingEyeColour"),
              colours: ED,
              picked: null === bD || void 0 === bD ? void 0 : bD[1],
              onPick: DD => {
                var zD;
                (0, LD.h)("eyes"), gD.current.eyes = DD, TD({
                  eyes: VD("eyes", null !== (zD = null === bD || void 0 === bD ? void 0 : bD[0]) && void 0 !== zD ? zD : "0", DD)
                })
              }
            }), (0, MD.jsx)(PD, {
              label: DD("homePage:onboardingSkinColour"),
              colours: QD,
              picked: null === jD || void 0 === jD ? void 0 : jD[1],
              onPick: DD => {
                (0, LD.h)("skin"), gD.current.skin = DD, TD({
                  skin: VD("skin", "0", DD)
                })
              }
            })]
          })]
        })]
      })
    }
    var xD = wD(1270),
      TD = wD(20),
      bD = wD(34109),
      jD = wD(1346),
      dD = wD(1687);

    function SD(DD) {
      const {
        t: zD
      } = (0, sD.E)(), {
        userContext: wD,
        isUserContextUpdating: KD
      } = (0, nD.c)(), cD = KD ? null : wD.getPlayerName(), gD = (0, pD.useRef)(null), [RD, AD] = (0, pD.useState)((() => null === cD ? (0, xD.h)() : null)), [UD, fD] = (0, pD.useState)(null), [ID, GD] = (0, pD.useState)(!1), OD = (0, pD.useRef)("Nf"), JD = (0, hD.c)(), ED = (0, pD.useRef)(null !== RD), QD = (0, pD.useRef)(!1), XD = null !== RD && void 0 !== RD ? RD : cD, VD = (0, pD.useRef)(null), PD = DD => {
        gD.current && (gD.current.value = DD), AD(DD)
      }, CD = (0, pD.useRef)(!1);
      (0, pD.useEffect)((() => {
        var DD, zD;
        !ID && CD.current && (CD.current = !1, null === (DD = gD.current) || void 0 === DD || DD.focus(), null === (zD = gD.current) || void 0 === zD || zD.select())
      }), [ID]);
      const SD = (0, pD.useRef)(null);
      (0, pD.useEffect)((() => {
        var DD;
        null !== UD && (null === (DD = SD.current) || void 0 === DD || DD.scrollIntoView({
          block: "nearest"
        }))
      }), [UD]);
      const iD = (DD, zD) => {
        const wD = document.activeElement === gD.current || CD.current;
        GD(!0), fD(null), DD.then((DD => {
          JD.current && (GD(!1), CD.current = wD, zD(DD))
        }))
      };
      (0, pD.useEffect)((() => {
        var DD, zD;
        TD.e.get("isTouchScreen") || (null === (DD = gD.current) || void 0 === DD || DD.focus(), null === (zD = gD.current) || void 0 === zD || zD.select())
      }), []);
      const lD = () => {
          (0, LD.i)(OD.current), DD()
        },
        WD = DD => "refused" === DD.outcome ? DD.message : zD((0, bD.g)(DD.failure)),
        ND = DD => !(DD.length >= xD.n) && (fD({
          kind: "error",
          message: zD("homePage:changeNameMinLengthError", {
            length: xD.n
          })
        }), !0),
        ZD = DD => {
          var pD, sD, KD;
          DD.toLowerCase() !== (null === (pD = null !== (sD = null === (KD = VD.current) || void 0 === KD ? void 0 : KD.name) && void 0 !== sD ? sD : cD) || void 0 === pD ? void 0 : pD.toLowerCase()) ? ND(DD) || iD((0, bD.d)(wD, DD), (wD => {
            "taken" !== wD.outcome ? "refused" !== wD.outcome && "failed" !== wD.outcome ? wD.name !== DD ? (OD.current = "suffixed", VD.current = {
              name: wD.name,
              outcome: OD.current
            }, PD(wD.name), fD({
              kind: "suffixed",
              taken: DD,
              name: wD.name
            })) : lD() : fD({
              kind: "error",
              message: WD(wD)
            }) : fD({
              kind: "error",
              message: zD("homePage:onboardingNameAllTaken")
            })
          })) : lD()
        };
      (0, pD.useEffect)((() => {
        if (!ID || null !== cD || !QD.current) return;
        const DD = setTimeout((() => {
          QD.current = !1, GD(!1), fD({
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(DD)
        }
      }), [ID, cD]), (0, pD.useEffect)((() => {
        if (null === cD) return;
        const DD = ED.current && "Nf" === OD.current && wD.isLoggedIn();
        ED.current = !1, "noAccount" === (null === UD || void 0 === UD ? void 0 : UD.kind) && fD(null), DD && PD(cD), QD.current && (QD.current = !1, GD(!1), ZD(DD ? cD : XD))
      }), [cD]);
      const yD = "error" === (null === UD || void 0 === UD ? void 0 : UD.kind) ? UD.message : "noAccount" === (null === UD || void 0 === UD ? void 0 : UD.kind) ? zD("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, MD.jsxs)("div", {
          className: "OnboardingNameField",
          ref: SD,
          children: [(0, MD.jsx)("div", {
            className: "OnboardingSubtitle",
            children: zD("general:name")
          }), null === XD && (0, MD.jsx)(jD.e, {}), null !== XD && (0, MD.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, MD.jsx)(dD.e, {
              className: "OnboardingNameInput",
              ariaLabel: zD("general:name"),
              maxLength: xD.l,
              defaultValue: XD,
              domRef: gD,
              forcedText: ID ? XD : null,
              onEnter: () => {
                var DD;
                null === (DD = gD.current) || void 0 === DD || DD.blur()
              },
              onValueChange: DD => {
                const wD = (0, xD.u)(DD);
                wD !== DD && gD.current && (gD.current.value = wD), fD(wD !== DD ? {
                  kind: "error",
                  message: zD("homePage:nameCharacters")
                } : null), wD !== XD && (OD.current = "changed"), AD(wD)
              }
            }), (0, MD.jsx)(rD.f, {
              className: "OnboardingRandomName",
              ariaLabel: zD("homePage:onboardingRandomName"),
              disabled: ID,
              onClick: () => {
                (() => {
                  if (fD(null), null === cD || wD.isLoggedIn()) return PD((0, xD.h)()), void(OD.current = "rolled");
                  iD((0, bD.n)(wD), (DD => {
                    var zD, pD;
                    if ("refused" === DD.outcome || "failed" === DD.outcome) return PD(wD.getPlayerName()), OD.current = null !== (zD = null === (pD = VD.current) || void 0 === pD ? void 0 : pD.outcome) && void 0 !== zD ? zD : "Nf", void fD({
                      kind: "error",
                      message: WD(DD)
                    });
                    OD.current = "rolled", VD.current = {
                      name: DD.name,
                      outcome: "rolled"
                    }, PD(DD.name)
                  }))
                })()
              },
              children: (0, MD.jsx)(BD.e, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === UD || void 0 === UD ? void 0 : UD.kind) && (0, MD.jsx)("div", {
            className: "OnboardingNameNote",
            children: zD("homePage:onboardingNameSuffixed", {
              taken: UD.taken,
              name: UD.name
            })
          }), null !== yD && (0, MD.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: yD
          })]
        }),
        submit: () => {
          if (!ID && null !== XD) {
            if (null === cD) {
              if (ND(XD)) return;
              return CD.current = document.activeElement === gD.current, QD.current = !0, GD(!0), void fD(null)
            }
            ZD(XD)
          }
        },
        busy: ID,
        ready: null !== XD
      }
    }

    function iD() {
      const DD = {
        finished: !1
      };
      KD.NotificationProvider.showCustomPopup({
        body: zD => (0, MD.jsx)(lD, {
          onFinish: () => {
            (0, LD.f)(), DD.finished = !0, zD()
          }
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        ignoreBackgroundPress: !0,
        onClose: () => {
          DD.finished || (0, LD.d)()
        }
      })
    }

    function lD(DD) {
      let {
        onFinish: zD
      } = DD;
      const {
        t: wD
      } = (0, sD.E)(), KD = SD(zD);
      return (0, pD.useEffect)((() => {
        (0, LD.j)()
      }), []), (0, MD.jsxs)("div", {
        className: "Onboarding",
        children: [(0, MD.jsx)("div", {
          className: "OnboardingTitle",
          children: wD("homePage:onboardingTitle")
        }), (0, MD.jsxs)("div", {
          className: "OnboardingBody",
          children: [KD.field, (0, MD.jsx)(CD, {})]
        }), (0, MD.jsx)("div", {
          className: "OnboardingFooter",
          children: (0, MD.jsx)(rD.o, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: KD.busy,
            disabled: !KD.ready,
            onClick: KD.submit,
            children: wD("homePage:onboardingDone")
          })
        })]
      })
    }
  },
  36374: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD
    });
    var pD = wD(1925),
      sD = wD(1495);
    const KD = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(DD, zD) {
        DD !== this.userContext && this.sendHeld(), this.userContext = DD;
        for (const [pD, sD] of zD) this.pending.set(pD, sD);
        if (null !== this.timer) return;
        const wD = this.lastSentAt + 1100 - Date.now();
        wD <= 0 ? this.send(DD) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), wD), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(DD) {
        const zD = Array.from(this.pending, (DD => {
          let [zD, wD] = DD;
          return {
            Pp: zD,
            Cp: wD
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), sD.d.updateCosmetics(DD, zD).catch((DD => {
          console.error("Failed to update cosmetics", DD)
        }))
      }
    };

    function rD(DD, zD) {
      for (const [wD, pD] of zD) DD.setPlayerCosmetics(wD, pD);
      if (null === pD.gameBridge.latest("connectedGame").websocketUrl) KD.save(DD, zD);
      else
        for (const [wD, sD] of zD) pD.gameBridge.send("updateMyCosmetic", {
          Pp: wD,
          Cp: sD
        })
    }
  },
  34109: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => nD,
      g: () => gD,
      k: () => BD,
      n: () => ID
    });
    var pD = wD(157),
      sD = wD(1270),
      KD = wD(1211),
      rD = wD(1130),
      LD = wD(1733);
    const cD = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function gD(DD) {
      return cD[DD]
    }

    function RD(DD) {
      return (0, LD.c)(DD) ? "outdated" : DD instanceof pD.c ? 429 === DD.httpCode ? "busy" : "server" : "offline"
    }

    function AD(DD, zD, wD) {
      return (0, rD.postJsonWithMetricsCookiesAndJsonResponse)(`${KD.clientSideServerUrls.indexUrl}${zD}`, wD, {
        retries: 3
      }, DD.getMetricsCookies()).catch((DD => (console.error("Bad response from the server when trying to change name:", zD, DD), {
        outcome: "failed",
        failure: RD(DD)
      })))
    }

    function UD(DD) {
      return "outcome" in DD && "failed" === DD.outcome
    }

    function fD(DD) {
      return console.error("Error when trying to get with new name from DB", DD), {
        outcome: "refused",
        message: DD
      }
    }
    async function ID(DD) {
      const zD = await AD(DD, "/index/name/random", {});
      return UD(zD) ? zD : "err" in zD ? fD(zD.err) : (DD.setPlayerName(zD.name), {
        outcome: "changed",
        name: zD.name
      })
    }
    async function BD(DD, zD) {
      const wD = await AD(DD, "/index/name/update", {
        name: zD
      });
      return UD(wD) ? wD : "err" in wD ? fD(wD.err) : wD.nameExists ? {
        outcome: "taken"
      } : (DD.setPlayerName(zD), {
        outcome: "changed",
        name: zD
      })
    }

    function GD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const pD = 1 === zD ? 1 : 10 ** (zD - 1),
        KD = String(pD + Math.floor(wD() * (10 ** zD - pD)));
      return `${DD.slice(0,sD.l-zD)}${KD}`
    }
    const hD = [1, 2, 3, 4];
    async function nD(DD, zD) {
      const wD = await BD(DD, zD);
      if ("taken" !== wD.outcome) return wD;
      for (const pD of hD) {
        const wD = GD(zD, pD),
          sD = await BD(DD, wD);
        if ("taken" !== sD.outcome) return sD
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);
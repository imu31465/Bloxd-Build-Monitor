export const id = 197;
export const ids = [197];
export const modules = {
  36715: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      showOnboardingPopup: () => jG
    });
    var wG = ZG(51),
      SG = ZG(1151),
      LG = ZG(1311),
      yG = ZG(1393),
      kG = ZG(4341),
      UG = ZG(1509),
      YG = ZG(1501),
      VG = ZG(2222),
      pG = ZG(1006),
      fG = ZG.n(pG),
      QG = ZG(1096),
      KG = ZG(36724),
      hG = ZG(1016),
      dG = ZG(2359),
      JG = ZG(3465),
      rG = ZG(1092),
      zG = ZG(1067);
    const EG = Object.entries(UG.d).filter((GG => {
      let [, bG] = GG;
      return "default" === bG.cosmeticPack
    }));

    function oG(GG) {
      return YG.c.default.colourGroups[GG].colours.map(((GG, bG) => {
        let {
          rbg: ZG,
          order: wG
        } = GG;
        return {
          rbg: ZG,
          order: wG,
          index: bG
        }
      })).sort(((GG, bG) => GG.order - bG.order))
    }
    const XG = oG("eyes"),
      uG = oG("skin");

    function iG(GG, bG) {
      var ZG;
      if (void 0 === bG || "default" !== (null === (ZG = (0, VG.k)(GG, bG)) || void 0 === ZG ? void 0 : ZG.cosmeticPack)) return null;
      const wG = (0, VG.g)(bG);
      return wG && [wG[0], Number(wG[1])]
    }

    function CG(GG, bG, ZG) {
      return `${GG}_${bG}_${ZG}`
    }

    function WG(GG) {
      let {
        label: bG,
        colours: ZG,
        picked: wG,
        onPick: LG
      } = GG;
      const {
        t: yG
      } = (0, SG.w)();
      return (0, zG.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, zG.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: bG
        }), (0, zG.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": bG,
          children: ZG.map(((GG, bG) => {
            let {
              rbg: ZG,
              index: SG
            } = GG;
            return (0, zG.jsx)("button", {
              type: "button",
              className: fG()("OnboardingSwatch", {
                OnboardingSwatchSelected: SG === wG
              }),
              style: {
                backgroundColor: `rgb(${ZG.join(",")})`
              },
              role: "radio",
              "aria-checked": SG === wG,
              "aria-label": yG("homePage:onboardingColour", {
                number: bG + 1
              }),
              onClick: () => {
                LG(SG)
              }
            }, SG)
          }))
        })]
      })
    }

    function mG() {
      const {
        t: GG
      } = (0, SG.w)(), {
        userContext: bG,
        isUserContextUpdating: ZG
      } = (0, rG.e)(), [LG, yG] = (0, wG.useState)(!1), [, UG] = (0, wG.useReducer)((GG => GG + 1), 0), YG = (0, wG.useRef)({}), VG = (0, wG.useRef)(null), pG = (0, JG.c)(), oG = {
        ...bG.getPlayerCosmetics(),
        ...VG.current
      }, mG = (0, wG.useRef)(null);
      (0, wG.useEffect)((() => {
        var GG;
        LG && (null === (GG = mG.current) || void 0 === GG || GG.scrollIntoView({
          block: "nearest"
        }))
      }), [LG]);
      const IG = (GG, bG) => {
          (0, KG.d)(GG, Object.entries(bG)), pG.current ? UG() : GG.publishUpdateIfCurrent()
        },
        FG = GG => {
          const wG = {
            ...VG.current,
            ...GG
          };
          if (!ZG) return VG.current = null, void IG(bG, wG);
          VG.current = wG, UG(), QG.userContextManager.getCurrentUserContext().then((GG => {
            VG.current === wG && (VG.current = null, IG(GG, wG))
          })).catch((GG => {
            console.warn("Couldn't put on the onboarding look held for the account", GG), VG.current === wG && (VG.current = null, pG.current && UG())
          }))
        };
      (0, wG.useEffect)((() => () => {
        bG.publishUpdateIfCurrent()
      }), [bG]);
      const vG = iG("eyes", oG.eyes),
        aG = iG("skin", oG.skin);
      return (0, zG.jsxs)(zG.Fragment, {
        children: [(0, zG.jsx)("div", {
          className: "OnboardingPresets",
          children: EG.map(((bG, ZG) => {
            let [wG, {
              cosmetics: SG
            }] = bG;
            const LG = function(GG, bG) {
              return Object.entries(bG).every((bG => {
                let [ZG, wG] = bG;
                return "skin" === ZG || ("eyes" === ZG ? (null === (SG = iG("eyes", GG.eyes)) || void 0 === SG ? void 0 : SG[0]) === (null === (LG = iG("eyes", wG)) || void 0 === LG ? void 0 : LG[0]) : GG[ZG] === wG);
                var SG, LG
              }))
            }(oG, SG);
            return (0, zG.jsx)("button", {
              type: "button",
              className: fG()("OnboardingPreset", {
                OnboardingPresetSelected: LG
              }),
              "aria-label": GG("homePage:onboardingPreset", {
                number: ZG + 1
              }),
              "aria-pressed": LG,
              onClick: () => {
                (0, kG.k)(`preset.${wG}`);
                const {
                  eyes: GG,
                  skin: bG
                } = YG.current;
                FG({
                  ...SG,
                  ...void 0 !== GG && {
                    eyes: CG("eyes", iG("eyes", SG.eyes)[0], GG)
                  },
                  ...void 0 !== bG && {
                    skin: CG("skin", "0", bG)
                  }
                })
              },
              children: (0, zG.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${wG}_preview.png)`
                }
              })
            }, wG)
          }))
        }), (0, zG.jsxs)("button", {
          type: "button",
          className: "OnboardingMoreOptions",
          "aria-expanded": LG,
          onClick: () => {
            LG || (0, kG.k)("more"), yG(!LG)
          },
          children: [GG("homePage:onboardingMoreOptions"), (0, zG.jsx)(hG.c, {
            name: LG ? "caret-up" : "caret-down"
          })]
        }), LG && (0, zG.jsxs)("div", {
          ref: mG,
          className: "OnboardingMore",
          children: [(0, zG.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, zG.jsx)(dG.c, {
              cosmetics: oG
            })
          }), (0, zG.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, zG.jsx)(WG, {
              label: GG("homePage:onboardingEyeColour"),
              colours: XG,
              picked: null === vG || void 0 === vG ? void 0 : vG[1],
              onPick: GG => {
                var bG;
                (0, kG.k)("eyes"), YG.current.eyes = GG, FG({
                  eyes: CG("eyes", null !== (bG = null === vG || void 0 === vG ? void 0 : vG[0]) && void 0 !== bG ? bG : "0", GG)
                })
              }
            }), (0, zG.jsx)(WG, {
              label: GG("homePage:onboardingSkinColour"),
              colours: uG,
              picked: null === aG || void 0 === aG ? void 0 : aG[1],
              onPick: GG => {
                (0, kG.k)("skin"), YG.current.skin = GG, FG({
                  skin: CG("skin", "0", GG)
                })
              }
            })]
          })]
        })]
      })
    }
    var IG = ZG(1230),
      FG = ZG(17),
      vG = ZG(34370),
      aG = ZG(1302),
      cG = ZG(1621);

    function lG(GG) {
      const {
        t: bG
      } = (0, SG.w)(), {
        userContext: ZG,
        isUserContextUpdating: LG
      } = (0, rG.e)(), UG = LG ? null : ZG.getPlayerName(), YG = (0, wG.useRef)(null), [VG, pG] = (0, wG.useState)((() => null === UG ? (0, IG.f)() : null)), [fG, QG] = (0, wG.useState)(null), [KG, dG] = (0, wG.useState)(!1), EG = (0, wG.useRef)("vQ"), oG = (0, JG.c)(), XG = (0, wG.useRef)(null !== VG), uG = (0, wG.useRef)(!1), iG = null !== VG && void 0 !== VG ? VG : UG, CG = (0, wG.useRef)(null), WG = GG => {
        YG.current && (YG.current.value = GG), pG(GG)
      }, mG = (0, wG.useRef)(!1);
      (0, wG.useEffect)((() => {
        var GG, bG;
        !KG && mG.current && (mG.current = !1, null === (GG = YG.current) || void 0 === GG || GG.focus(), null === (bG = YG.current) || void 0 === bG || bG.select())
      }), [KG]);
      const lG = (0, wG.useRef)(null);
      (0, wG.useEffect)((() => {
        var GG;
        null !== fG && (null === (GG = lG.current) || void 0 === GG || GG.scrollIntoView({
          block: "nearest"
        }))
      }), [fG]);
      const jG = (GG, bG) => {
        const ZG = document.activeElement === YG.current || mG.current;
        dG(!0), QG(null), GG.then((GG => {
          oG.current && (dG(!1), mG.current = ZG, bG(GG))
        }))
      };
      (0, wG.useEffect)((() => {
        var GG, bG;
        FG.e.get("isTouchScreen") || (null === (GG = YG.current) || void 0 === GG || GG.focus(), null === (bG = YG.current) || void 0 === bG || bG.select())
      }), []);
      const PG = () => {
          (0, kG.n)(EG.current), GG()
        },
        MG = GG => "refused" === GG.outcome ? GG.message : bG((0, vG.g)(GG.failure)),
        AG = GG => !(GG.length >= IG.k) && (QG({
          kind: "error",
          message: bG("homePage:changeNameMinLengthError", {
            length: IG.k
          })
        }), !0),
        sG = GG => {
          var wG, SG, LG;
          GG.toLowerCase() !== (null === (wG = null !== (SG = null === (LG = CG.current) || void 0 === LG ? void 0 : LG.name) && void 0 !== SG ? SG : UG) || void 0 === wG ? void 0 : wG.toLowerCase()) ? AG(GG) || jG((0, vG.d)(ZG, GG), (ZG => {
            "taken" !== ZG.outcome ? "refused" !== ZG.outcome && "failed" !== ZG.outcome ? ZG.name !== GG ? (EG.current = "suffixed", CG.current = {
              name: ZG.name,
              outcome: EG.current
            }, WG(ZG.name), QG({
              kind: "suffixed",
              taken: GG,
              name: ZG.name
            })) : PG() : QG({
              kind: "error",
              message: MG(ZG)
            }) : QG({
              kind: "error",
              message: bG("homePage:onboardingNameAllTaken")
            })
          })) : PG()
        };
      (0, wG.useEffect)((() => {
        if (!KG || null !== UG || !uG.current) return;
        const GG = setTimeout((() => {
          uG.current = !1, dG(!1), QG({
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(GG)
        }
      }), [KG, UG]), (0, wG.useEffect)((() => {
        if (null === UG) return;
        const GG = XG.current && "vQ" === EG.current && ZG.isLoggedIn();
        XG.current = !1, "noAccount" === (null === fG || void 0 === fG ? void 0 : fG.kind) && QG(null), GG && WG(UG), uG.current && (uG.current = !1, dG(!1), sG(GG ? UG : iG))
      }), [UG]);
      const qG = "error" === (null === fG || void 0 === fG ? void 0 : fG.kind) ? fG.message : "noAccount" === (null === fG || void 0 === fG ? void 0 : fG.kind) ? bG("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, zG.jsxs)("div", {
          className: "OnboardingNameField",
          ref: lG,
          children: [(0, zG.jsx)("div", {
            className: "OnboardingSubtitle",
            children: bG("general:name")
          }), null === iG && (0, zG.jsx)(aG.b, {}), null !== iG && (0, zG.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, zG.jsx)(cG.b, {
              className: "OnboardingNameInput",
              ariaLabel: bG("general:name"),
              maxLength: IG.g,
              defaultValue: iG,
              domRef: YG,
              forcedText: KG ? iG : null,
              onEnter: () => {
                var GG;
                null === (GG = YG.current) || void 0 === GG || GG.blur()
              },
              onValueChange: GG => {
                const ZG = (0, IG.n)(GG);
                ZG !== GG && YG.current && (YG.current.value = ZG), QG(ZG !== GG ? {
                  kind: "error",
                  message: bG("homePage:nameCharacters")
                } : null), ZG !== iG && (EG.current = "changed"), pG(ZG)
              }
            }), (0, zG.jsx)(yG.d, {
              className: "OnboardingRandomName",
              ariaLabel: bG("homePage:onboardingRandomName"),
              disabled: KG,
              onClick: () => {
                (() => {
                  if (QG(null), null === UG || ZG.isLoggedIn()) return WG((0, IG.f)()), void(EG.current = "rolled");
                  jG((0, vG.j)(ZG), (GG => {
                    var bG, wG;
                    if ("refused" === GG.outcome || "failed" === GG.outcome) return WG(ZG.getPlayerName()), EG.current = null !== (bG = null === (wG = CG.current) || void 0 === wG ? void 0 : wG.outcome) && void 0 !== bG ? bG : "vQ", void QG({
                      kind: "error",
                      message: MG(GG)
                    });
                    EG.current = "rolled", CG.current = {
                      name: GG.name,
                      outcome: "rolled"
                    }, WG(GG.name)
                  }))
                })()
              },
              children: (0, zG.jsx)(hG.c, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === fG || void 0 === fG ? void 0 : fG.kind) && (0, zG.jsx)("div", {
            className: "OnboardingNameNote",
            children: bG("homePage:onboardingNameSuffixed", {
              taken: fG.taken,
              name: fG.name
            })
          }), null !== qG && (0, zG.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: qG
          })]
        }),
        submit: () => {
          if (!KG && null !== iG) {
            if (null === UG) {
              if (AG(iG)) return;
              return mG.current = document.activeElement === YG.current, uG.current = !0, dG(!0), void QG(null)
            }
            sG(iG)
          }
        },
        busy: KG,
        ready: null !== iG
      }
    }

    function jG() {
      const GG = {
        finished: !1
      };
      return LG.NotificationProvider.showCustomPopup({
        body: bG => (0, zG.jsx)(PG, {
          onFinish: () => {
            (0, kG.h)(), GG.finished = !0, bG()
          }
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        ignoreBackgroundPress: !0,
        onClose: () => {
          GG.finished || (0, kG.e)()
        }
      })
    }

    function PG(GG) {
      let {
        onFinish: bG
      } = GG;
      const {
        t: ZG
      } = (0, SG.w)(), LG = lG(bG);
      return (0, wG.useEffect)((() => {
        (0, kG.r)()
      }), []), (0, zG.jsxs)("div", {
        className: "Onboarding",
        children: [(0, zG.jsx)("div", {
          className: "OnboardingTitle",
          children: ZG("homePage:onboardingTitle")
        }), (0, zG.jsxs)("div", {
          className: "OnboardingBody",
          children: [LG.field, (0, zG.jsx)(mG, {})]
        }), (0, zG.jsx)("div", {
          className: "OnboardingFooter",
          children: (0, zG.jsx)(yG.k, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: LG.busy,
            disabled: !LG.ready,
            onClick: LG.submit,
            children: ZG("homePage:onboardingDone")
          })
        })]
      })
    }
  },
  36724: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG
    });
    var wG = ZG(1895),
      SG = ZG(1431);
    const LG = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(GG, bG) {
        GG !== this.userContext && this.sendHeld(), this.userContext = GG;
        for (const [wG, SG] of bG) this.pending.set(wG, SG);
        if (null !== this.timer) return;
        const ZG = this.lastSentAt + 1100 - Date.now();
        ZG <= 0 ? this.send(GG) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), ZG), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(GG) {
        const bG = Array.from(this.pending, (GG => {
          let [bG, ZG] = GG;
          return {
            FL: bG,
            vL: ZG
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), SG.d.updateCosmetics(GG, bG).catch((GG => {
          console.error("Failed to update cosmetics", GG)
        }))
      }
    };

    function yG(GG, bG) {
      for (const [ZG, wG] of bG) GG.setPlayerCosmetics(ZG, wG);
      if (null === wG.gameBridge.latest("connectedGame").websocketUrl) LG.save(GG, bG);
      else
        for (const [ZG, SG] of bG) wG.gameBridge.send("updateMyCosmetic", {
          FL: ZG,
          vL: SG
        })
    }
  },
  34370: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => rG,
      g: () => YG,
      h: () => hG,
      j: () => KG
    });
    var wG = ZG(140),
      SG = ZG(1230),
      LG = ZG(1163),
      yG = ZG(1096),
      kG = ZG(1694);
    const UG = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function YG(GG) {
      return UG[GG]
    }

    function VG(GG) {
      return (0, kG.d)(GG) ? "outdated" : GG instanceof wG.b ? 429 === GG.httpCode ? "busy" : "server" : "offline"
    }

    function pG(GG, bG, ZG) {
      return (0, yG.postJsonWithMetricsCookiesAndJsonResponse)(`${LG.clientSideServerUrls.indexUrl}${bG}`, ZG, {
        retries: 3
      }, GG.getMetricsCookies()).catch((GG => (console.error("Bad response from the server when trying to change name:", bG, GG), {
        outcome: "failed",
        failure: VG(GG)
      })))
    }

    function fG(GG) {
      return "outcome" in GG && "failed" === GG.outcome
    }

    function QG(GG) {
      return console.error("Error when trying to get with new name from DB", GG), {
        outcome: "refused",
        message: GG
      }
    }
    async function KG(GG) {
      const bG = await pG(GG, "/index/name/random", {});
      return fG(bG) ? bG : "err" in bG ? QG(bG.err) : (GG.setPlayerName(bG.name), {
        outcome: "changed",
        name: bG.name
      })
    }
    async function hG(GG, bG) {
      const ZG = await pG(GG, "/index/name/update", {
        name: bG
      });
      return fG(ZG) ? ZG : "err" in ZG ? QG(ZG.err) : ZG.nameExists ? {
        outcome: "taken"
      } : (GG.setPlayerName(bG), {
        outcome: "changed",
        name: bG
      })
    }

    function dG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const wG = 1 === bG ? 1 : 10 ** (bG - 1),
        LG = String(wG + Math.floor(ZG() * (10 ** bG - wG)));
      return `${GG.slice(0,SG.g-bG)}${LG}`
    }
    const JG = [1, 2, 3, 4];
    async function rG(GG, bG) {
      const ZG = await hG(GG, bG);
      if ("taken" !== ZG.outcome) return ZG;
      for (const wG of JG) {
        const ZG = dG(bG, wG),
          SG = await hG(GG, ZG);
        if ("taken" !== SG.outcome) return SG
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);
export const id = 211;
export const ids = [211];
export const modules = {
  37087: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      isMoreOptionsInFooter: () => MU,
      showOnboardingPopup: () => vU
    });
    var cU = zU(61),
      yU = zU(1193),
      QU = zU(1410),
      AU = zU(1494),
      FU = zU(1124),
      oU = zU(4715),
      DU = zU(1613),
      EU = zU(344),
      YU = zU(1605),
      NU = zU(2334),
      IU = zU(1106),
      pU = zU.n(IU),
      aU = zU(1131),
      tU = zU(37090),
      gU = zU(2500),
      kU = zU(3873),
      GU = zU(1129),
      BU = zU(1390),
      ZU = zU(1305);
    const RU = "OnboardingMorePanel";

    function PU(UU) {
      let {
        open: XU,
        onToggle: zU
      } = UU;
      const {
        t: cU
      } = (0, yU.I)();
      return (0, ZU.jsxs)("button", {
        type: "button",
        className: "OnboardingMoreOptions",
        "aria-expanded": XU,
        "aria-controls": XU ? RU : void 0,
        onClick: () => {
          XU || (0, oU.j)("more"), zU()
        },
        children: [cU("homePage:onboardingMoreOptions"), (0, ZU.jsx)(BU.d, {
          name: XU ? "caret-up" : "caret-down"
        })]
      })
    }
    const WU = Object.entries(DU.d).filter((UU => {
      let [, XU] = UU;
      return "default" === XU.cosmeticPack
    }));

    function dU(UU) {
      return YU.c.default.colourGroups[UU].colours.map(((UU, XU) => {
        let {
          rbg: zU,
          order: cU
        } = UU;
        return {
          rbg: zU,
          order: cU,
          index: XU
        }
      })).sort(((UU, XU) => UU.order - XU.order))
    }
    const LU = dU("eyes"),
      eU = dU("skin");

    function CU(UU, XU) {
      var zU;
      if (void 0 === XU || "default" !== (null === (zU = (0, NU.g)(UU, XU)) || void 0 === zU ? void 0 : zU.cosmeticPack)) return null;
      const cU = (0, NU.f)(XU);
      return cU && [cU[0], Number(cU[1])]
    }

    function wU(UU, XU, zU) {
      return `${UU}_${XU}_${zU}`
    }

    function qU(UU) {
      let {
        label: XU,
        colours: zU,
        picked: cU,
        onPick: QU
      } = UU;
      const {
        t: AU
      } = (0, yU.I)();
      return (0, ZU.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, ZU.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: XU
        }), (0, ZU.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": XU,
          children: zU.map(((UU, XU) => {
            let {
              rbg: zU,
              index: yU
            } = UU;
            return (0, ZU.jsx)("button", {
              type: "button",
              className: pU()("OnboardingSwatch", {
                OnboardingSwatchSelected: yU === cU
              }),
              style: {
                backgroundColor: `rgb(${zU.join(",")})`
              },
              role: "radio",
              "aria-checked": yU === cU,
              "aria-label": AU("homePage:onboardingColour", {
                number: XU + 1
              }),
              onClick: () => {
                QU(yU)
              }
            }, yU)
          }))
        })]
      })
    }

    function OU(UU) {
      let {
        moreOptions: XU,
        onToggleMoreOptions: zU,
        moreOptionsBelowPresets: QU
      } = UU;
      const {
        t: AU
      } = (0, yU.I)(), {
        userContext: FU,
        isUserContextUpdating: DU
      } = (0, GU.d)(), [, YU] = (0, cU.useReducer)((UU => UU + 1), 0), NU = (0, cU.useRef)({}), IU = (0, cU.useRef)(null), BU = (0, cU.useRef)({}), dU = (0, kU.b)(), OU = {
        ...FU.getPlayerCosmetics(),
        ...IU.current
      }, SU = (0, cU.useRef)(null);
      (0, cU.useEffect)((() => {
        var UU;
        XU && (null === (UU = SU.current) || void 0 === UU || UU.scrollIntoView({
          block: "nearest"
        }))
      }), [XU]);
      const rU = (UU, XU) => {
          (0, tU.e)(UU, Object.entries(XU)), dU.current ? YU() : UU.publishUpdateIfCurrent()
        },
        uU = function(UU) {
          let {
            isDefault: XU = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const zU = {
            ...!DU && FU.isLoggedIn() ? BU.current : IU.current,
            ...UU
          };
          if (!DU) return IU.current = null, BU.current = {}, void rU(FU, zU);
          IU.current = zU, XU || (BU.current = {
            ...BU.current,
            ...UU
          }), YU(), aU.userContextManager.getCurrentUserContext().then((UU => {
            if (IU.current !== zU) return;
            IU.current = null;
            const XU = BU.current;
            BU.current = {};
            const cU = UU.isLoggedIn() ? XU : zU;
            0 !== Object.keys(cU).length ? rU(UU, cU) : dU.current && YU()
          })).catch((UU => {
            console.warn("Couldn't put on the onboarding look held for the account", UU), IU.current === zU && (IU.current = null, BU.current = {}, dU.current && YU())
          }))
        },
        fU = (0, cU.useRef)(!1);
      (0, cU.useEffect)((() => {
        fU.current || (fU.current = !0, !DU && FU.isLoggedIn() || uU((0, EU.hc)(WU)[1].cosmetics, {
          isDefault: !0
        }))
      }), []), (0, cU.useEffect)((() => () => {
        FU.publishUpdateIfCurrent()
      }), [FU]);
      const iU = CU("eyes", OU.eyes),
        HU = CU("skin", OU.skin);
      return (0, ZU.jsxs)(ZU.Fragment, {
        children: [(0, ZU.jsx)("div", {
          className: "OnboardingPresets",
          children: WU.map(((UU, XU) => {
            let [zU, {
              cosmetics: cU
            }] = UU;
            const yU = function(UU, XU) {
              return Object.entries(XU).every((XU => {
                let [zU, cU] = XU;
                return "skin" === zU || ("eyes" === zU ? (null === (yU = CU("eyes", UU.eyes)) || void 0 === yU ? void 0 : yU[0]) === (null === (QU = CU("eyes", cU)) || void 0 === QU ? void 0 : QU[0]) : UU[zU] === cU);
                var yU, QU
              }))
            }(OU, cU);
            return (0, ZU.jsx)("button", {
              type: "button",
              className: pU()("OnboardingPreset", {
                OnboardingPresetSelected: yU
              }),
              "aria-label": AU("homePage:onboardingPreset", {
                number: XU + 1
              }),
              "aria-pressed": yU,
              onClick: () => {
                (0, oU.j)(`preset.${zU}`);
                const {
                  eyes: UU,
                  skin: XU
                } = NU.current;
                uU({
                  ...cU,
                  ...void 0 !== UU && {
                    eyes: wU("eyes", CU("eyes", cU.eyes)[0], UU)
                  },
                  ...void 0 !== XU && {
                    skin: wU("skin", "0", XU)
                  }
                })
              },
              children: (0, ZU.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${zU}_preview.png)`
                }
              })
            }, zU)
          }))
        }), QU && (0, ZU.jsx)(PU, {
          open: XU,
          onToggle: zU
        }), XU && (0, ZU.jsxs)("div", {
          ref: SU,
          id: RU,
          className: "OnboardingMore",
          children: [(0, ZU.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, ZU.jsx)(gU.b, {
              cosmetics: OU
            })
          }), (0, ZU.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, ZU.jsx)(qU, {
              label: AU("homePage:onboardingEyeColour"),
              colours: LU,
              picked: null === iU || void 0 === iU ? void 0 : iU[1],
              onPick: UU => {
                var XU;
                (0, oU.j)("eyes"), NU.current.eyes = UU, uU({
                  eyes: wU("eyes", null !== (XU = null === iU || void 0 === iU ? void 0 : iU[0]) && void 0 !== XU ? XU : "0", UU)
                })
              }
            }), (0, ZU.jsx)(qU, {
              label: AU("homePage:onboardingSkinColour"),
              colours: eU,
              picked: null === HU || void 0 === HU ? void 0 : HU[1],
              onPick: UU => {
                (0, oU.j)("skin"), NU.current.skin = UU, uU({
                  skin: wU("skin", "0", UU)
                })
              }
            })]
          })]
        })]
      })
    }
    var SU = zU(1280),
      rU = zU(27),
      uU = zU(34762),
      fU = zU(1384),
      iU = zU(1726);

    function HU(UU) {
      const {
        t: XU
      } = (0, yU.I)(), {
        userContext: zU,
        isUserContextUpdating: QU
      } = (0, GU.d)(), FU = QU ? null : zU.getPlayerName(), DU = (0, cU.useRef)(null), [EU, YU] = (0, cU.useState)((() => null === FU ? (0, SU.f)() : null)), [NU, IU] = (0, cU.useState)(null), [pU, aU] = (0, cU.useState)(!1), tU = (0, cU.useRef)("cY"), gU = (0, kU.b)(), RU = (0, cU.useRef)(null !== EU), PU = (0, cU.useRef)(!1), WU = (0, cU.useRef)(null), dU = null !== EU && void 0 !== EU ? EU : FU, LU = (0, cU.useRef)(null), eU = UU => {
        DU.current && (DU.current.value = UU), YU(UU)
      }, CU = (0, cU.useRef)(!1);
      (0, cU.useEffect)((() => {
        var UU, XU;
        !pU && CU.current && (CU.current = !1, null === (UU = DU.current) || void 0 === UU || UU.focus(), null === (XU = DU.current) || void 0 === XU || XU.select())
      }), [pU]);
      const wU = (0, cU.useRef)(null);
      (0, cU.useEffect)((() => {
        var UU;
        null !== NU && (null === (UU = wU.current) || void 0 === UU || UU.scrollIntoView({
          block: "nearest"
        }))
      }), [NU]);
      const qU = (UU, XU) => {
        const zU = document.activeElement === DU.current || CU.current;
        aU(!0), IU(null), UU.then((UU => {
          gU.current && (aU(!1), CU.current = zU, XU(UU))
        }))
      };
      (0, cU.useEffect)((() => {
        var UU, XU;
        rU.e.get("isTouchScreen") || (null === (UU = DU.current) || void 0 === UU || UU.focus(), null === (XU = DU.current) || void 0 === XU || XU.select())
      }), []);
      const OU = () => {
          (0, oU.m)(tU.current), UU()
        },
        HU = (UU, XU) => {
          var zU, cU;
          if (WU.current === UU) return tU.current = null !== (zU = null === (cU = LU.current) || void 0 === cU ? void 0 : cU.outcome) && void 0 !== zU ? zU : "cY", void OU();
          WU.current = UU, IU(XU)
        },
        MU = UU => "refused" === UU.outcome ? UU.message : XU((0, uU.f)(UU.failure)),
        vU = UU => !(UU.length >= SU.j) && (IU({
          kind: "error",
          message: XU("homePage:changeNameMinLengthError", {
            length: SU.j
          })
        }), !0),
        VU = UU => {
          var cU, yU, QU;
          UU.toLowerCase() !== (null === (cU = null !== (yU = null === (QU = LU.current) || void 0 === QU ? void 0 : QU.name) && void 0 !== yU ? yU : FU) || void 0 === cU ? void 0 : cU.toLowerCase()) ? vU(UU) || qU((0, uU.e)(zU, UU), (zU => {
            "taken" !== zU.outcome ? "refused" !== zU.outcome && "failed" !== zU.outcome ? zU.name !== UU ? (tU.current = "suffixed", LU.current = {
              name: zU.name,
              outcome: tU.current
            }, eU(zU.name), IU({
              kind: "suffixed",
              taken: UU,
              name: zU.name
            })) : OU() : HU(UU, {
              kind: "error",
              message: MU(zU)
            }) : HU(UU, {
              kind: "error",
              message: XU("homePage:onboardingNameAllTaken")
            })
          })) : OU()
        };
      (0, cU.useEffect)((() => {
        if (!pU || null !== FU || !PU.current) return;
        const UU = setTimeout((() => {
          PU.current = !1, aU(!1), HU(dU, {
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(UU)
        }
      }), [pU, FU]), (0, cU.useEffect)((() => {
        if (null === FU) return;
        const UU = RU.current && "cY" === tU.current && zU.isLoggedIn();
        RU.current = !1, WU.current = null, "noAccount" === (null === NU || void 0 === NU ? void 0 : NU.kind) && IU(null), UU && eU(FU), PU.current && (PU.current = !1, aU(!1), VU(UU ? FU : dU))
      }), [FU]);
      const sU = "error" === (null === NU || void 0 === NU ? void 0 : NU.kind) ? NU.message : "noAccount" === (null === NU || void 0 === NU ? void 0 : NU.kind) ? XU("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, ZU.jsxs)("div", {
          className: "OnboardingNameField",
          ref: wU,
          children: [(0, ZU.jsx)("div", {
            className: "OnboardingSubtitle",
            children: XU("general:name")
          }), null === dU && (0, ZU.jsx)(fU.b, {}), null !== dU && (0, ZU.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, ZU.jsx)(iU.e, {
              className: "OnboardingNameInput",
              ariaLabel: XU("general:name"),
              maxLength: SU.h,
              defaultValue: dU,
              domRef: DU,
              forcedText: pU ? dU : null,
              onEnter: () => {
                var UU;
                null === (UU = DU.current) || void 0 === UU || UU.blur()
              },
              onValueChange: UU => {
                const zU = (0, SU.o)(UU);
                zU !== UU && DU.current && (DU.current.value = zU), IU(zU !== UU ? {
                  kind: "error",
                  message: XU("homePage:nameCharacters")
                } : null), zU !== dU && (tU.current = "changed"), YU(zU)
              }
            }), (0, ZU.jsx)(AU.f, {
              className: "OnboardingRandomName",
              ariaLabel: XU("homePage:onboardingRandomName"),
              disabled: pU,
              onClick: () => {
                (() => {
                  if (IU(null), null === FU || zU.isLoggedIn()) return eU((0, SU.f)()), void(tU.current = "rolled");
                  qU((0, uU.l)(zU), (UU => {
                    var XU, cU;
                    if ("refused" === UU.outcome || "failed" === UU.outcome) return eU(zU.getPlayerName()), tU.current = null !== (XU = null === (cU = LU.current) || void 0 === cU ? void 0 : cU.outcome) && void 0 !== XU ? XU : "cY", void IU({
                      kind: "error",
                      message: MU(UU)
                    });
                    tU.current = "rolled", LU.current = {
                      name: UU.name,
                      outcome: "rolled"
                    }, eU(UU.name)
                  }))
                })()
              },
              children: (0, ZU.jsx)(BU.d, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === NU || void 0 === NU ? void 0 : NU.kind) && (0, ZU.jsx)("div", {
            className: "OnboardingNameNote",
            children: XU("homePage:onboardingNameSuffixed", {
              taken: NU.taken,
              name: NU.name
            })
          }), null !== sU && (0, ZU.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: sU
          })]
        }),
        submit: () => {
          if (!pU && null !== dU) {
            if (null === FU) {
              if (vU(dU)) return;
              return CU.current = document.activeElement === DU.current, PU.current = !0, aU(!0), void IU(null)
            }
            VU(dU)
          }
        },
        busy: pU,
        ready: null !== dU
      }
    }

    function MU(UU) {
      return UU < 500
    }

    function vU() {
      const UU = {
          finished: !1
        },
        XU = {
          press: null
        };
      return QU.NotificationProvider.showCustomPopup({
        body: zU => (0, ZU.jsx)(VU, {
          onFinish: () => {
            (0, oU.f)(), UU.finished = !0, zU()
          },
          doneRef: XU
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        disableExitButton: !0,
        ignoreBackgroundPress: !0,
        dismiss: () => {
          var UU;
          null === (UU = XU.press) || void 0 === UU || UU.call(XU)
        },
        onClose: () => {
          UU.finished || (0, oU.b)()
        }
      })
    }

    function VU(UU) {
      let {
        onFinish: XU,
        doneRef: zU
      } = UU;
      const {
        t: QU
      } = (0, yU.I)(), DU = HU(XU), EU = DU.ready && !DU.busy ? DU.submit : null;
      (0, cU.useEffect)((() => (zU.press = EU, () => {
        zU.press = null
      })));
      const [YU, NU] = (0, cU.useState)(!1), IU = (0, FU.l)(((UU, XU) => MU(XU))), pU = () => {
        NU(!YU)
      };
      return (0, cU.useEffect)((() => {
        (0, oU.p)()
      }), []), (0, ZU.jsxs)("div", {
        className: "Onboarding",
        children: [(0, ZU.jsx)("div", {
          className: "OnboardingTitle",
          children: QU("homePage:onboardingTitle")
        }), (0, ZU.jsxs)("div", {
          className: "OnboardingBody",
          children: [DU.field, (0, ZU.jsx)(OU, {
            moreOptions: YU,
            onToggleMoreOptions: pU,
            moreOptionsBelowPresets: !IU
          })]
        }), (0, ZU.jsxs)("div", {
          className: "OnboardingFooter",
          children: [IU && (0, ZU.jsx)(PU, {
            open: YU,
            onToggle: pU
          }), (0, ZU.jsx)(AU.l, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: DU.busy,
            disabled: !DU.ready,
            onClick: DU.submit,
            children: QU("homePage:onboardingDone")
          })]
        })]
      })
    }
  },
  37090: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU
    });
    var cU = zU(2005),
      yU = zU(1545);
    const QU = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(UU, XU) {
        UU !== this.userContext && this.sendHeld(), this.userContext = UU;
        for (const [cU, yU] of XU) this.pending.set(cU, yU);
        if (null !== this.timer) return;
        const zU = this.lastSentAt + 1100 - Date.now();
        zU <= 0 ? this.send(UU) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), zU), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(UU) {
        const XU = Array.from(this.pending, (UU => {
          let [XU, zU] = UU;
          return {
            FU: XU,
            oU: zU
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), yU.c.updateCosmetics(UU, XU).catch((UU => {
          console.error("Failed to update cosmetics", UU)
        }))
      }
    };

    function AU(UU, XU) {
      for (const [zU, cU] of XU) UU.setPlayerCosmetics(zU, cU);
      if (null === cU.gameBridge.latest("connectedGame").websocketUrl) QU.save(UU, XU);
      else
        for (const [zU, yU] of XU) cU.gameBridge.send("updateMyCosmetic", {
          FU: zU,
          oU: yU
        })
    }
  },
  34762: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => kU,
      f: () => DU,
      h: () => aU,
      l: () => pU
    });
    var cU = zU(173),
      yU = zU(1280),
      QU = zU(1203),
      AU = zU(1131),
      FU = zU(1791);
    const oU = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function DU(UU) {
      return oU[UU]
    }

    function EU(UU) {
      return (0, FU.b)(UU) ? "outdated" : UU instanceof cU.e ? 429 === UU.httpCode ? "busy" : "server" : "offline"
    }

    function YU(UU, XU, zU) {
      return (0, AU.postJsonWithMetricsCookiesAndJsonResponse)(`${QU.clientSideServerUrls.indexUrl}${XU}`, zU, {
        retries: 3
      }, UU.getMetricsCookies()).catch((UU => (console.error("Bad response from the server when trying to change name:", XU, UU), {
        outcome: "failed",
        failure: EU(UU)
      })))
    }

    function NU(UU) {
      return "outcome" in UU && "failed" === UU.outcome
    }

    function IU(UU) {
      return console.error("Error when trying to get with new name from DB", UU), {
        outcome: "refused",
        message: UU
      }
    }
    async function pU(UU) {
      const XU = await YU(UU, "/index/name/random", {});
      return NU(XU) ? XU : "err" in XU ? IU(XU.err) : (UU.setPlayerName(XU.name), {
        outcome: "changed",
        name: XU.name
      })
    }
    async function aU(UU, XU) {
      const zU = await YU(UU, "/index/name/update", {
        name: XU
      });
      return NU(zU) ? zU : "err" in zU ? IU(zU.err) : zU.nameExists ? {
        outcome: "taken"
      } : (UU.setPlayerName(XU), {
        outcome: "changed",
        name: XU
      })
    }

    function tU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const cU = 1 === XU ? 1 : 10 ** (XU - 1),
        QU = String(cU + Math.floor(zU() * (10 ** XU - cU)));
      return `${UU.slice(0,yU.h-XU)}${QU}`
    }
    const gU = [1, 2, 3, 4];
    async function kU(UU, XU) {
      const zU = await aU(UU, XU);
      if ("taken" !== zU.outcome) return zU;
      for (const cU of gU) {
        const zU = tU(XU, cU),
          yU = await aU(UU, zU);
        if ("taken" !== yU.outcome) return yU
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
export const id = 197;
export const ids = [197];
export const modules = {
  36458: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      showOnboardingPopup: () => QT
    });
    var WT = mT(63),
      zT = mT(1288),
      MT = mT(1457),
      gT = mT(1569),
      nT = mT(4412),
      HT = mT(1688),
      kT = mT(1685),
      jT = mT(2348),
      lT = mT(1126),
      LT = mT.n(lT),
      pT = mT(1231),
      BT = mT(36465),
      ZT = mT(1135),
      cT = mT(2493),
      vT = mT(3582),
      fT = mT(1225),
      qT = mT(1188);
    const iT = Object.entries(HT.e).filter((TT => {
      let [, UT] = TT;
      return "default" === UT.cosmeticPack
    }));

    function bT(TT) {
      return kT.b.default.colourGroups[TT].colours.map(((TT, UT) => {
        let {
          rbg: mT,
          order: WT
        } = TT;
        return {
          rbg: mT,
          order: WT,
          index: UT
        }
      })).sort(((TT, UT) => TT.order - UT.order))
    }
    const OT = bT("eyes"),
      eT = bT("skin");

    function YT(TT, UT) {
      var mT;
      if (void 0 === UT || "default" !== (null === (mT = (0, jT.j)(TT, UT)) || void 0 === mT ? void 0 : mT.cosmeticPack)) return null;
      const WT = (0, jT.i)(UT);
      return WT && [WT[0], Number(WT[1])]
    }

    function JT(TT, UT, mT) {
      return `${TT}_${UT}_${mT}`
    }

    function xT(TT) {
      let {
        label: UT,
        colours: mT,
        picked: WT,
        onPick: MT
      } = TT;
      const {
        t: gT
      } = (0, zT.z)();
      return (0, qT.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, qT.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: UT
        }), (0, qT.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": UT,
          children: mT.map(((TT, UT) => {
            let {
              rbg: mT,
              index: zT
            } = TT;
            return (0, qT.jsx)("button", {
              type: "button",
              className: LT()("OnboardingSwatch", {
                OnboardingSwatchSelected: zT === WT
              }),
              style: {
                backgroundColor: `rgb(${mT.join(",")})`
              },
              role: "radio",
              "aria-checked": zT === WT,
              "aria-label": gT("homePage:onboardingColour", {
                number: UT + 1
              }),
              onClick: () => {
                MT(zT)
              }
            }, zT)
          }))
        })]
      })
    }

    function dT() {
      const {
        t: TT
      } = (0, zT.z)(), {
        userContext: UT,
        isUserContextUpdating: mT
      } = (0, fT.d)(), [MT, gT] = (0, WT.useState)(!1), [, HT] = (0, WT.useReducer)((TT => TT + 1), 0), kT = (0, WT.useRef)({}), jT = (0, WT.useRef)(null), lT = (0, vT.c)(), bT = {
        ...UT.getPlayerCosmetics(),
        ...jT.current
      }, dT = (0, WT.useRef)(null);
      (0, WT.useEffect)((() => {
        var TT;
        MT && (null === (TT = dT.current) || void 0 === TT || TT.scrollIntoView({
          block: "nearest"
        }))
      }), [MT]);
      const wT = (TT, UT) => {
          (0, BT.b)(TT, Object.entries(UT)), lT.current ? HT() : TT.publishUpdateIfCurrent()
        },
        tT = TT => {
          const WT = {
            ...jT.current,
            ...TT
          };
          if (!mT) return jT.current = null, void wT(UT, WT);
          jT.current = WT, HT(), pT.userContextManager.getCurrentUserContext().then((TT => {
            jT.current === WT && (jT.current = null, wT(TT, WT))
          })).catch((TT => {
            console.warn("Couldn't put on the onboarding look held for the account", TT), jT.current === WT && (jT.current = null, lT.current && HT())
          }))
        };
      (0, WT.useEffect)((() => () => {
        UT.publishUpdateIfCurrent()
      }), [UT]);
      const aT = YT("eyes", bT.eyes),
        yT = YT("skin", bT.skin);
      return (0, qT.jsxs)(qT.Fragment, {
        children: [(0, qT.jsx)("div", {
          className: "OnboardingPresets",
          children: iT.map(((UT, mT) => {
            let [WT, {
              cosmetics: zT
            }] = UT;
            const MT = function(TT, UT) {
              return Object.entries(UT).every((UT => {
                let [mT, WT] = UT;
                return "skin" === mT || ("eyes" === mT ? (null === (zT = YT("eyes", TT.eyes)) || void 0 === zT ? void 0 : zT[0]) === (null === (MT = YT("eyes", WT)) || void 0 === MT ? void 0 : MT[0]) : TT[mT] === WT);
                var zT, MT
              }))
            }(bT, zT);
            return (0, qT.jsx)("button", {
              type: "button",
              className: LT()("OnboardingPreset", {
                OnboardingPresetSelected: MT
              }),
              "aria-label": TT("homePage:onboardingPreset", {
                number: mT + 1
              }),
              "aria-pressed": MT,
              onClick: () => {
                (0, nT.i)(`preset.${WT}`);
                const {
                  eyes: TT,
                  skin: UT
                } = kT.current;
                tT({
                  ...zT,
                  ...void 0 !== TT && {
                    eyes: JT("eyes", YT("eyes", zT.eyes)[0], TT)
                  },
                  ...void 0 !== UT && {
                    skin: JT("skin", "0", UT)
                  }
                })
              },
              children: (0, qT.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${WT}_preview.png)`
                }
              })
            }, WT)
          }))
        }), (0, qT.jsxs)("button", {
          type: "button",
          className: "OnboardingMoreOptions",
          "aria-expanded": MT,
          onClick: () => {
            MT || (0, nT.i)("more"), gT(!MT)
          },
          children: [TT("homePage:onboardingMoreOptions"), (0, qT.jsx)(ZT.c, {
            name: MT ? "caret-up" : "caret-down"
          })]
        }), MT && (0, qT.jsxs)("div", {
          ref: dT,
          className: "OnboardingMore",
          children: [(0, qT.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, qT.jsx)(cT.e, {
              cosmetics: bT
            })
          }), (0, qT.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, qT.jsx)(xT, {
              label: TT("homePage:onboardingEyeColour"),
              colours: OT,
              picked: null === aT || void 0 === aT ? void 0 : aT[1],
              onPick: TT => {
                var UT;
                (0, nT.i)("eyes"), kT.current.eyes = TT, tT({
                  eyes: JT("eyes", null !== (UT = null === aT || void 0 === aT ? void 0 : aT[0]) && void 0 !== UT ? UT : "0", TT)
                })
              }
            }), (0, qT.jsx)(xT, {
              label: TT("homePage:onboardingSkinColour"),
              colours: eT,
              picked: null === yT || void 0 === yT ? void 0 : yT[1],
              onPick: TT => {
                (0, nT.i)("skin"), kT.current.skin = TT, tT({
                  skin: JT("skin", "0", TT)
                })
              }
            })]
          })]
        })]
      })
    }
    var wT = mT(1367),
      tT = mT(25),
      aT = mT(34164),
      yT = mT(1446),
      XT = mT(1792);

    function IT(TT) {
      const {
        t: UT
      } = (0, zT.z)(), {
        userContext: mT,
        isUserContextUpdating: MT
      } = (0, fT.d)(), HT = MT ? null : mT.getPlayerName(), kT = (0, WT.useRef)(null), [jT, lT] = (0, WT.useState)((() => null === HT ? (0, wT.f)() : null)), [LT, pT] = (0, WT.useState)(null), [BT, cT] = (0, WT.useState)(!1), iT = (0, WT.useRef)("Jp"), bT = (0, vT.c)(), OT = (0, WT.useRef)(null !== jT), eT = (0, WT.useRef)(!1), YT = null !== jT && void 0 !== jT ? jT : HT, JT = (0, WT.useRef)(null), xT = TT => {
        kT.current && (kT.current.value = TT), lT(TT)
      }, dT = (0, WT.useRef)(!1);
      (0, WT.useEffect)((() => {
        var TT, UT;
        !BT && dT.current && (dT.current = !1, null === (TT = kT.current) || void 0 === TT || TT.focus(), null === (UT = kT.current) || void 0 === UT || UT.select())
      }), [BT]);
      const IT = (0, WT.useRef)(null);
      (0, WT.useEffect)((() => {
        var TT;
        null !== LT && (null === (TT = IT.current) || void 0 === TT || TT.scrollIntoView({
          block: "nearest"
        }))
      }), [LT]);
      const QT = (TT, UT) => {
        const mT = document.activeElement === kT.current || dT.current;
        cT(!0), pT(null), TT.then((TT => {
          bT.current && (cT(!1), dT.current = mT, UT(TT))
        }))
      };
      (0, WT.useEffect)((() => {
        var TT, UT;
        tT.b.get("isTouchScreen") || (null === (TT = kT.current) || void 0 === TT || TT.focus(), null === (UT = kT.current) || void 0 === UT || UT.select())
      }), []);
      const sT = () => {
          (0, nT.k)(iT.current), TT()
        },
        FT = TT => "refused" === TT.outcome ? TT.message : UT((0, aT.g)(TT.failure)),
        PT = TT => !(TT.length >= wT.i) && (pT({
          kind: "error",
          message: UT("homePage:changeNameMinLengthError", {
            length: wT.i
          })
        }), !0),
        VT = TT => {
          var WT, zT, MT;
          TT.toLowerCase() !== (null === (WT = null !== (zT = null === (MT = JT.current) || void 0 === MT ? void 0 : MT.name) && void 0 !== zT ? zT : HT) || void 0 === WT ? void 0 : WT.toLowerCase()) ? PT(TT) || QT((0, aT.e)(mT, TT), (mT => {
            "taken" !== mT.outcome ? "refused" !== mT.outcome && "failed" !== mT.outcome ? mT.name !== TT ? (iT.current = "suffixed", JT.current = {
              name: mT.name,
              outcome: iT.current
            }, xT(mT.name), pT({
              kind: "suffixed",
              taken: TT,
              name: mT.name
            })) : sT() : pT({
              kind: "error",
              message: FT(mT)
            }) : pT({
              kind: "error",
              message: UT("homePage:onboardingNameAllTaken")
            })
          })) : sT()
        };
      (0, WT.useEffect)((() => {
        if (!BT || null !== HT || !eT.current) return;
        const TT = setTimeout((() => {
          eT.current = !1, cT(!1), pT({
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(TT)
        }
      }), [BT, HT]), (0, WT.useEffect)((() => {
        if (null === HT) return;
        const TT = OT.current && "Jp" === iT.current && mT.isLoggedIn();
        OT.current = !1, "noAccount" === (null === LT || void 0 === LT ? void 0 : LT.kind) && pT(null), TT && xT(HT), eT.current && (eT.current = !1, cT(!1), VT(TT ? HT : YT))
      }), [HT]);
      const uT = "error" === (null === LT || void 0 === LT ? void 0 : LT.kind) ? LT.message : "noAccount" === (null === LT || void 0 === LT ? void 0 : LT.kind) ? UT("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, qT.jsxs)("div", {
          className: "OnboardingNameField",
          ref: IT,
          children: [(0, qT.jsx)("div", {
            className: "OnboardingSubtitle",
            children: UT("general:name")
          }), null === YT && (0, qT.jsx)(yT.c, {}), null !== YT && (0, qT.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, qT.jsx)(XT.e, {
              className: "OnboardingNameInput",
              ariaLabel: UT("general:name"),
              maxLength: wT.h,
              defaultValue: YT,
              domRef: kT,
              forcedText: BT ? YT : null,
              onEnter: () => {
                var TT;
                null === (TT = kT.current) || void 0 === TT || TT.blur()
              },
              onValueChange: TT => {
                const mT = (0, wT.n)(TT);
                mT !== TT && kT.current && (kT.current.value = mT), pT(mT !== TT ? {
                  kind: "error",
                  message: UT("homePage:nameCharacters")
                } : null), mT !== YT && (iT.current = "changed"), lT(mT)
              }
            }), (0, qT.jsx)(gT.e, {
              className: "OnboardingRandomName",
              ariaLabel: UT("homePage:onboardingRandomName"),
              disabled: BT,
              onClick: () => {
                (() => {
                  if (pT(null), null === HT || mT.isLoggedIn()) return xT((0, wT.f)()), void(iT.current = "rolled");
                  QT((0, aT.m)(mT), (TT => {
                    var UT, WT;
                    if ("refused" === TT.outcome || "failed" === TT.outcome) return xT(mT.getPlayerName()), iT.current = null !== (UT = null === (WT = JT.current) || void 0 === WT ? void 0 : WT.outcome) && void 0 !== UT ? UT : "Jp", void pT({
                      kind: "error",
                      message: FT(TT)
                    });
                    iT.current = "rolled", JT.current = {
                      name: TT.name,
                      outcome: "rolled"
                    }, xT(TT.name)
                  }))
                })()
              },
              children: (0, qT.jsx)(ZT.c, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === LT || void 0 === LT ? void 0 : LT.kind) && (0, qT.jsx)("div", {
            className: "OnboardingNameNote",
            children: UT("homePage:onboardingNameSuffixed", {
              taken: LT.taken,
              name: LT.name
            })
          }), null !== uT && (0, qT.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: uT
          })]
        }),
        submit: () => {
          if (!BT && null !== YT) {
            if (null === HT) {
              if (PT(YT)) return;
              return dT.current = document.activeElement === kT.current, eT.current = !0, cT(!0), void pT(null)
            }
            VT(YT)
          }
        },
        busy: BT,
        ready: null !== YT
      }
    }

    function QT() {
      const TT = {
        finished: !1
      };
      return MT.NotificationProvider.showCustomPopup({
        body: UT => (0, qT.jsx)(sT, {
          onFinish: () => {
            (0, nT.e)(), TT.finished = !0, UT()
          }
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        ignoreBackgroundPress: !0,
        onClose: () => {
          TT.finished || (0, nT.c)()
        }
      })
    }

    function sT(TT) {
      let {
        onFinish: UT
      } = TT;
      const {
        t: mT
      } = (0, zT.z)(), MT = IT(UT);
      return (0, WT.useEffect)((() => {
        (0, nT.m)()
      }), []), (0, qT.jsxs)("div", {
        className: "Onboarding",
        children: [(0, qT.jsx)("div", {
          className: "OnboardingTitle",
          children: mT("homePage:onboardingTitle")
        }), (0, qT.jsxs)("div", {
          className: "OnboardingBody",
          children: [MT.field, (0, qT.jsx)(dT, {})]
        }), (0, qT.jsx)("div", {
          className: "OnboardingFooter",
          children: (0, qT.jsx)(gT.l, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: MT.busy,
            disabled: !MT.ready,
            onClick: MT.submit,
            children: mT("homePage:onboardingDone")
          })
        })]
      })
    }
  },
  36465: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => gT
    });
    var WT = mT(2046),
      zT = mT(1613);
    const MT = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(TT, UT) {
        TT !== this.userContext && this.sendHeld(), this.userContext = TT;
        for (const [WT, zT] of UT) this.pending.set(WT, zT);
        if (null !== this.timer) return;
        const mT = this.lastSentAt + 1100 - Date.now();
        mT <= 0 ? this.send(TT) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), mT), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(TT) {
        const UT = Array.from(this.pending, (TT => {
          let [UT, mT] = TT;
          return {
            wM: UT,
            tM: mT
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), zT.b.updateCosmetics(TT, UT).catch((TT => {
          console.error("Failed to update cosmetics", TT)
        }))
      }
    };

    function gT(TT, UT) {
      for (const [mT, WT] of UT) TT.setPlayerCosmetics(mT, WT);
      if (null === WT.gameBridge.latest("connectedGame").websocketUrl) MT.save(TT, UT);
      else
        for (const [mT, zT] of UT) WT.gameBridge.send("updateMyCosmetic", {
          wM: mT,
          tM: zT
        })
    }
  },
  34164: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => fT,
      g: () => kT,
      k: () => ZT,
      m: () => BT
    });
    var WT = mT(166),
      zT = mT(1367),
      MT = mT(1302),
      gT = mT(1231),
      nT = mT(1854);
    const HT = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function kT(TT) {
      return HT[TT]
    }

    function jT(TT) {
      return (0, nT.d)(TT) ? "outdated" : TT instanceof WT.d ? 429 === TT.httpCode ? "busy" : "server" : "offline"
    }

    function lT(TT, UT, mT) {
      return (0, gT.postJsonWithMetricsCookiesAndJsonResponse)(`${MT.clientSideServerUrls.indexUrl}${UT}`, mT, {
        retries: 3
      }, TT.getMetricsCookies()).catch((TT => (console.error("Bad response from the server when trying to change name:", UT, TT), {
        outcome: "failed",
        failure: jT(TT)
      })))
    }

    function LT(TT) {
      return "outcome" in TT && "failed" === TT.outcome
    }

    function pT(TT) {
      return console.error("Error when trying to get with new name from DB", TT), {
        outcome: "refused",
        message: TT
      }
    }
    async function BT(TT) {
      const UT = await lT(TT, "/index/name/random", {});
      return LT(UT) ? UT : "err" in UT ? pT(UT.err) : (TT.setPlayerName(UT.name), {
        outcome: "changed",
        name: UT.name
      })
    }
    async function ZT(TT, UT) {
      const mT = await lT(TT, "/index/name/update", {
        name: UT
      });
      return LT(mT) ? mT : "err" in mT ? pT(mT.err) : mT.nameExists ? {
        outcome: "taken"
      } : (TT.setPlayerName(UT), {
        outcome: "changed",
        name: UT
      })
    }

    function cT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const WT = 1 === UT ? 1 : 10 ** (UT - 1),
        MT = String(WT + Math.floor(mT() * (10 ** UT - WT)));
      return `${TT.slice(0,zT.h-UT)}${MT}`
    }
    const vT = [1, 2, 3, 4];
    async function fT(TT, UT) {
      const mT = await ZT(TT, UT);
      if ("taken" !== mT.outcome) return mT;
      for (const WT of vT) {
        const mT = cT(UT, WT),
          zT = await ZT(TT, mT);
        if ("taken" !== zT.outcome) return zT
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
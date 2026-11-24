export const id = 197;
export const ids = [197];
export const modules = {
  36404: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      showOnboardingPopup: () => RB
    });
    var TB = ZB(63),
      JB = ZB(1248),
      oB = ZB(1403),
      GB = ZB(1516),
      vB = ZB(4506),
      kB = ZB(1630),
      cB = ZB(1627),
      nB = ZB(2326),
      hB = ZB(1091),
      zB = ZB.n(hB),
      FB = ZB(1186),
      NB = ZB(36406),
      gB = ZB(1102),
      qB = ZB(2460),
      yB = ZB(3668),
      UB = ZB(1179),
      WB = ZB(1153);
    const dB = Object.entries(kB.d).filter((BB => {
      let [, IB] = BB;
      return "default" === IB.cosmeticPack
    }));

    function CB(BB) {
      return cB.d.default.colourGroups[BB].colours.map(((BB, IB) => {
        let {
          rbg: ZB,
          order: TB
        } = BB;
        return {
          rbg: ZB,
          order: TB,
          index: IB
        }
      })).sort(((BB, IB) => BB.order - IB.order))
    }
    const QB = CB("eyes"),
      sB = CB("skin");

    function wB(BB, IB) {
      var ZB;
      if (void 0 === IB || "default" !== (null === (ZB = (0, nB.h)(BB, IB)) || void 0 === ZB ? void 0 : ZB.cosmeticPack)) return null;
      const TB = (0, nB.g)(IB);
      return TB && [TB[0], Number(TB[1])]
    }

    function OB(BB, IB, ZB) {
      return `${BB}_${IB}_${ZB}`
    }

    function YB(BB) {
      let {
        label: IB,
        colours: ZB,
        picked: TB,
        onPick: oB
      } = BB;
      const {
        t: GB
      } = (0, JB.G)();
      return (0, WB.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, WB.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: IB
        }), (0, WB.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": IB,
          children: ZB.map(((BB, IB) => {
            let {
              rbg: ZB,
              index: JB
            } = BB;
            return (0, WB.jsx)("button", {
              type: "button",
              className: zB()("OnboardingSwatch", {
                OnboardingSwatchSelected: JB === TB
              }),
              style: {
                backgroundColor: `rgb(${ZB.join(",")})`
              },
              role: "radio",
              "aria-checked": JB === TB,
              "aria-label": GB("homePage:onboardingColour", {
                number: IB + 1
              }),
              onClick: () => {
                oB(JB)
              }
            }, JB)
          }))
        })]
      })
    }

    function iB() {
      const {
        t: BB
      } = (0, JB.G)(), {
        userContext: IB,
        isUserContextUpdating: ZB
      } = (0, UB.d)(), [oB, GB] = (0, TB.useState)(!1), [, kB] = (0, TB.useReducer)((BB => BB + 1), 0), cB = (0, TB.useRef)({}), nB = (0, TB.useRef)(null), hB = (0, yB.d)(), CB = {
        ...IB.getPlayerCosmetics(),
        ...nB.current
      }, iB = (0, TB.useRef)(null);
      (0, TB.useEffect)((() => {
        var BB;
        oB && (null === (BB = iB.current) || void 0 === BB || BB.scrollIntoView({
          block: "nearest"
        }))
      }), [oB]);
      const pB = (BB, IB) => {
          (0, NB.d)(BB, Object.entries(IB)), hB.current ? kB() : BB.publishUpdateIfCurrent()
        },
        aB = BB => {
          const TB = {
            ...nB.current,
            ...BB
          };
          if (!ZB) return nB.current = null, void pB(IB, TB);
          nB.current = TB, kB(), FB.userContextManager.getCurrentUserContext().then((BB => {
            nB.current === TB && (nB.current = null, pB(BB, TB))
          })).catch((BB => {
            console.warn("Couldn't put on the onboarding look held for the account", BB), nB.current === TB && (nB.current = null, hB.current && kB())
          }))
        };
      (0, TB.useEffect)((() => () => {
        IB.publishUpdateIfCurrent()
      }), [IB]);
      const HB = wB("eyes", CB.eyes),
        MB = wB("skin", CB.skin);
      return (0, WB.jsxs)(WB.Fragment, {
        children: [(0, WB.jsx)("div", {
          className: "OnboardingPresets",
          children: dB.map(((IB, ZB) => {
            let [TB, {
              cosmetics: JB
            }] = IB;
            const oB = function(BB, IB) {
              return Object.entries(IB).every((IB => {
                let [ZB, TB] = IB;
                return "skin" === ZB || ("eyes" === ZB ? (null === (JB = wB("eyes", BB.eyes)) || void 0 === JB ? void 0 : JB[0]) === (null === (oB = wB("eyes", TB)) || void 0 === oB ? void 0 : oB[0]) : BB[ZB] === TB);
                var JB, oB
              }))
            }(CB, JB);
            return (0, WB.jsx)("button", {
              type: "button",
              className: zB()("OnboardingPreset", {
                OnboardingPresetSelected: oB
              }),
              "aria-label": BB("homePage:onboardingPreset", {
                number: ZB + 1
              }),
              "aria-pressed": oB,
              onClick: () => {
                (0, vB.l)(`preset.${TB}`);
                const {
                  eyes: BB,
                  skin: IB
                } = cB.current;
                aB({
                  ...JB,
                  ...void 0 !== BB && {
                    eyes: OB("eyes", wB("eyes", JB.eyes)[0], BB)
                  },
                  ...void 0 !== IB && {
                    skin: OB("skin", "0", IB)
                  }
                })
              },
              children: (0, WB.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${TB}_preview.png)`
                }
              })
            }, TB)
          }))
        }), (0, WB.jsxs)("button", {
          type: "button",
          className: "OnboardingMoreOptions",
          "aria-expanded": oB,
          onClick: () => {
            oB || (0, vB.l)("more"), GB(!oB)
          },
          children: [BB("homePage:onboardingMoreOptions"), (0, WB.jsx)(gB.d, {
            name: oB ? "caret-up" : "caret-down"
          })]
        }), oB && (0, WB.jsxs)("div", {
          ref: iB,
          className: "OnboardingMore",
          children: [(0, WB.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, WB.jsx)(qB.b, {
              cosmetics: CB
            })
          }), (0, WB.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, WB.jsx)(YB, {
              label: BB("homePage:onboardingEyeColour"),
              colours: QB,
              picked: null === HB || void 0 === HB ? void 0 : HB[1],
              onPick: BB => {
                var IB;
                (0, vB.l)("eyes"), cB.current.eyes = BB, aB({
                  eyes: OB("eyes", null !== (IB = null === HB || void 0 === HB ? void 0 : HB[0]) && void 0 !== IB ? IB : "0", BB)
                })
              }
            }), (0, WB.jsx)(YB, {
              label: BB("homePage:onboardingSkinColour"),
              colours: sB,
              picked: null === MB || void 0 === MB ? void 0 : MB[1],
              onPick: BB => {
                (0, vB.l)("skin"), cB.current.skin = BB, aB({
                  skin: OB("skin", "0", BB)
                })
              }
            })]
          })]
        })]
      })
    }
    var pB = ZB(1333),
      aB = ZB(20),
      HB = ZB(34069),
      MB = ZB(1397),
      jB = ZB(1746);

    function PB(BB) {
      const {
        t: IB
      } = (0, JB.G)(), {
        userContext: ZB,
        isUserContextUpdating: oB
      } = (0, UB.d)(), kB = oB ? null : ZB.getPlayerName(), cB = (0, TB.useRef)(null), [nB, hB] = (0, TB.useState)((() => null === kB ? (0, pB.f)() : null)), [zB, FB] = (0, TB.useState)(null), [NB, qB] = (0, TB.useState)(!1), dB = (0, TB.useRef)("XF"), CB = (0, yB.d)(), QB = (0, TB.useRef)(null !== nB), sB = (0, TB.useRef)(!1), wB = null !== nB && void 0 !== nB ? nB : kB, OB = (0, TB.useRef)(null), YB = BB => {
        cB.current && (cB.current.value = BB), hB(BB)
      }, iB = (0, TB.useRef)(!1);
      (0, TB.useEffect)((() => {
        var BB, IB;
        !NB && iB.current && (iB.current = !1, null === (BB = cB.current) || void 0 === BB || BB.focus(), null === (IB = cB.current) || void 0 === IB || IB.select())
      }), [NB]);
      const PB = (0, TB.useRef)(null);
      (0, TB.useEffect)((() => {
        var BB;
        null !== zB && (null === (BB = PB.current) || void 0 === BB || BB.scrollIntoView({
          block: "nearest"
        }))
      }), [zB]);
      const RB = (BB, IB) => {
        const ZB = document.activeElement === cB.current || iB.current;
        qB(!0), FB(null), BB.then((BB => {
          CB.current && (qB(!1), iB.current = ZB, IB(BB))
        }))
      };
      (0, TB.useEffect)((() => {
        var BB, IB;
        aB.d.get("isTouchScreen") || (null === (BB = cB.current) || void 0 === BB || BB.focus(), null === (IB = cB.current) || void 0 === IB || IB.select())
      }), []);
      const rB = () => {
          (0, vB.m)(dB.current), BB()
        },
        mB = BB => "refused" === BB.outcome ? BB.message : IB((0, HB.d)(BB.failure)),
        XB = BB => !(BB.length >= pB.n) && (FB({
          kind: "error",
          message: IB("homePage:changeNameMinLengthError", {
            length: pB.n
          })
        }), !0),
        LB = BB => {
          var TB, JB, oB;
          BB.toLowerCase() !== (null === (TB = null !== (JB = null === (oB = OB.current) || void 0 === oB ? void 0 : oB.name) && void 0 !== JB ? JB : kB) || void 0 === TB ? void 0 : TB.toLowerCase()) ? XB(BB) || RB((0, HB.b)(ZB, BB), (ZB => {
            "taken" !== ZB.outcome ? "refused" !== ZB.outcome && "failed" !== ZB.outcome ? ZB.name !== BB ? (dB.current = "suffixed", OB.current = {
              name: ZB.name,
              outcome: dB.current
            }, YB(ZB.name), FB({
              kind: "suffixed",
              taken: BB,
              name: ZB.name
            })) : rB() : FB({
              kind: "error",
              message: mB(ZB)
            }) : FB({
              kind: "error",
              message: IB("homePage:onboardingNameAllTaken")
            })
          })) : rB()
        };
      (0, TB.useEffect)((() => {
        if (!NB || null !== kB || !sB.current) return;
        const BB = setTimeout((() => {
          sB.current = !1, qB(!1), FB({
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(BB)
        }
      }), [NB, kB]), (0, TB.useEffect)((() => {
        if (null === kB) return;
        const BB = QB.current && "XF" === dB.current && ZB.isLoggedIn();
        QB.current = !1, "noAccount" === (null === zB || void 0 === zB ? void 0 : zB.kind) && FB(null), BB && YB(kB), sB.current && (sB.current = !1, qB(!1), LB(BB ? kB : wB))
      }), [kB]);
      const eB = "error" === (null === zB || void 0 === zB ? void 0 : zB.kind) ? zB.message : "noAccount" === (null === zB || void 0 === zB ? void 0 : zB.kind) ? IB("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, WB.jsxs)("div", {
          className: "OnboardingNameField",
          ref: PB,
          children: [(0, WB.jsx)("div", {
            className: "OnboardingSubtitle",
            children: IB("general:name")
          }), null === wB && (0, WB.jsx)(MB.d, {}), null !== wB && (0, WB.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, WB.jsx)(jB.c, {
              className: "OnboardingNameInput",
              ariaLabel: IB("general:name"),
              maxLength: pB.j,
              defaultValue: wB,
              domRef: cB,
              forcedText: NB ? wB : null,
              onEnter: () => {
                var BB;
                null === (BB = cB.current) || void 0 === BB || BB.blur()
              },
              onValueChange: BB => {
                const ZB = (0, pB.t)(BB);
                ZB !== BB && cB.current && (cB.current.value = ZB), FB(ZB !== BB ? {
                  kind: "error",
                  message: IB("homePage:nameCharacters")
                } : null), ZB !== wB && (dB.current = "changed"), hB(ZB)
              }
            }), (0, WB.jsx)(GB.g, {
              className: "OnboardingRandomName",
              ariaLabel: IB("homePage:onboardingRandomName"),
              disabled: NB,
              onClick: () => {
                (() => {
                  if (FB(null), null === kB || ZB.isLoggedIn()) return YB((0, pB.f)()), void(dB.current = "rolled");
                  RB((0, HB.h)(ZB), (BB => {
                    var IB, TB;
                    if ("refused" === BB.outcome || "failed" === BB.outcome) return YB(ZB.getPlayerName()), dB.current = null !== (IB = null === (TB = OB.current) || void 0 === TB ? void 0 : TB.outcome) && void 0 !== IB ? IB : "XF", void FB({
                      kind: "error",
                      message: mB(BB)
                    });
                    dB.current = "rolled", OB.current = {
                      name: BB.name,
                      outcome: "rolled"
                    }, YB(BB.name)
                  }))
                })()
              },
              children: (0, WB.jsx)(gB.d, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === zB || void 0 === zB ? void 0 : zB.kind) && (0, WB.jsx)("div", {
            className: "OnboardingNameNote",
            children: IB("homePage:onboardingNameSuffixed", {
              taken: zB.taken,
              name: zB.name
            })
          }), null !== eB && (0, WB.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: eB
          })]
        }),
        submit: () => {
          if (!NB && null !== wB) {
            if (null === kB) {
              if (XB(wB)) return;
              return iB.current = document.activeElement === cB.current, sB.current = !0, qB(!0), void FB(null)
            }
            LB(wB)
          }
        },
        busy: NB,
        ready: null !== wB
      }
    }

    function RB() {
      const BB = {
        finished: !1
      };
      return oB.NotificationProvider.showCustomPopup({
        body: IB => (0, WB.jsx)(rB, {
          onFinish: () => {
            (0, vB.h)(), BB.finished = !0, IB()
          }
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        ignoreBackgroundPress: !0,
        onClose: () => {
          BB.finished || (0, vB.d)()
        }
      })
    }

    function rB(BB) {
      let {
        onFinish: IB
      } = BB;
      const {
        t: ZB
      } = (0, JB.G)(), oB = PB(IB);
      return (0, TB.useEffect)((() => {
        (0, vB.p)()
      }), []), (0, WB.jsxs)("div", {
        className: "Onboarding",
        children: [(0, WB.jsx)("div", {
          className: "OnboardingTitle",
          children: ZB("homePage:onboardingTitle")
        }), (0, WB.jsxs)("div", {
          className: "OnboardingBody",
          children: [oB.field, (0, WB.jsx)(iB, {})]
        }), (0, WB.jsx)("div", {
          className: "OnboardingFooter",
          children: (0, WB.jsx)(GB.p, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: oB.busy,
            disabled: !oB.ready,
            onClick: oB.submit,
            children: ZB("homePage:onboardingDone")
          })
        })]
      })
    }
  },
  36406: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB
    });
    var TB = ZB(1995),
      JB = ZB(1561);
    const oB = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(BB, IB) {
        BB !== this.userContext && this.sendHeld(), this.userContext = BB;
        for (const [TB, JB] of IB) this.pending.set(TB, JB);
        if (null !== this.timer) return;
        const ZB = this.lastSentAt + 1100 - Date.now();
        ZB <= 0 ? this.send(BB) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), ZB), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(BB) {
        const IB = Array.from(this.pending, (BB => {
          let [IB, ZB] = BB;
          return {
            Ho: IB,
            Mo: ZB
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), JB.c.updateCosmetics(BB, IB).catch((BB => {
          console.error("Failed to update cosmetics", BB)
        }))
      }
    };

    function GB(BB, IB) {
      for (const [ZB, TB] of IB) BB.setPlayerCosmetics(ZB, TB);
      if (null === TB.gameBridge.latest("connectedGame").websocketUrl) oB.save(BB, IB);
      else
        for (const [ZB, JB] of IB) TB.gameBridge.send("updateMyCosmetic", {
          Ho: ZB,
          Mo: JB
        })
    }
  },
  34069: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => UB,
      d: () => cB,
      f: () => gB,
      h: () => NB
    });
    var TB = ZB(168),
      JB = ZB(1333),
      oB = ZB(1258),
      GB = ZB(1186),
      vB = ZB(1796);
    const kB = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function cB(BB) {
      return kB[BB]
    }

    function nB(BB) {
      return (0, vB.d)(BB) ? "outdated" : BB instanceof TB.d ? 429 === BB.httpCode ? "busy" : "server" : "offline"
    }

    function hB(BB, IB, ZB) {
      return (0, GB.postJsonWithMetricsCookiesAndJsonResponse)(`${oB.clientSideServerUrls.indexUrl}${IB}`, ZB, {
        retries: 3
      }, BB.getMetricsCookies()).catch((BB => (console.error("Bad response from the server when trying to change name:", IB, BB), {
        outcome: "failed",
        failure: nB(BB)
      })))
    }

    function zB(BB) {
      return "outcome" in BB && "failed" === BB.outcome
    }

    function FB(BB) {
      return console.error("Error when trying to get with new name from DB", BB), {
        outcome: "refused",
        message: BB
      }
    }
    async function NB(BB) {
      const IB = await hB(BB, "/index/name/random", {});
      return zB(IB) ? IB : "err" in IB ? FB(IB.err) : (BB.setPlayerName(IB.name), {
        outcome: "changed",
        name: IB.name
      })
    }
    async function gB(BB, IB) {
      const ZB = await hB(BB, "/index/name/update", {
        name: IB
      });
      return zB(ZB) ? ZB : "err" in ZB ? FB(ZB.err) : ZB.nameExists ? {
        outcome: "taken"
      } : (BB.setPlayerName(IB), {
        outcome: "changed",
        name: IB
      })
    }

    function qB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const TB = 1 === IB ? 1 : 10 ** (IB - 1),
        oB = String(TB + Math.floor(ZB() * (10 ** IB - TB)));
      return `${BB.slice(0,JB.j-IB)}${oB}`
    }
    const yB = [1, 2, 3, 4];
    async function UB(BB, IB) {
      const ZB = await gB(BB, IB);
      if ("taken" !== ZB.outcome) return ZB;
      for (const TB of yB) {
        const ZB = qB(IB, TB),
          JB = await gB(BB, ZB);
        if ("taken" !== JB.outcome) return JB
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
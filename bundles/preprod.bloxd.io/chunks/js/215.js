export const id = 215;
export const ids = [215];
export const modules = {
  37060: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      isMoreOptionsInFooter: () => wB,
      showOnboardingPopup: () => EB
    });
    var YB = GB(56),
      DB = GB(1175),
      QB = GB(1400),
      oB = GB(1485),
      jB = GB(1108),
      yB = GB(4732),
      JB = GB(1611),
      MB = GB(353),
      PB = GB(1606),
      zB = GB(2392),
      lB = GB(1090),
      pB = GB.n(lB),
      qB = GB(1121),
      ZB = GB(37063),
      NB = GB(2554),
      RB = GB(3928),
      WB = GB(1112),
      AB = GB(1383),
      VB = GB(1282);
    const SB = "OnboardingMorePanel";

    function nB(BB) {
      let {
        open: OB,
        onToggle: GB
      } = BB;
      const {
        t: YB
      } = (0, DB.H)();
      return (0, VB.jsxs)("button", {
        type: "button",
        className: "OnboardingMoreOptions",
        "aria-expanded": OB,
        "aria-controls": OB ? SB : void 0,
        onClick: () => {
          OB || (0, yB.j)("more"), GB()
        },
        children: [YB("homePage:onboardingMoreOptions"), (0, VB.jsx)(AB.b, {
          name: OB ? "caret-up" : "caret-down"
        })]
      })
    }
    const UB = Object.entries(JB.d).filter((BB => {
      let [, OB] = BB;
      return "default" === OB.cosmeticPack
    }));

    function fB(BB) {
      return PB.d.default.colourGroups[BB].colours.map(((BB, OB) => {
        let {
          rbg: GB,
          order: YB
        } = BB;
        return {
          rbg: GB,
          order: YB,
          index: OB
        }
      })).sort(((BB, OB) => BB.order - OB.order))
    }
    const kB = fB("eyes"),
      dB = fB("skin");

    function KB(BB, OB) {
      var GB;
      if (void 0 === OB || "default" !== (null === (GB = (0, zB.n)(BB, OB)) || void 0 === GB ? void 0 : GB.cosmeticPack)) return null;
      const YB = (0, zB.l)(OB);
      return YB && [YB[0], Number(YB[1])]
    }

    function uB(BB, OB, GB) {
      return `${BB}_${OB}_${GB}`
    }

    function mB(BB) {
      let {
        label: OB,
        colours: GB,
        picked: YB,
        onPick: QB
      } = BB;
      const {
        t: oB
      } = (0, DB.H)();
      return (0, VB.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, VB.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: OB
        }), (0, VB.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": OB,
          children: GB.map(((BB, OB) => {
            let {
              rbg: GB,
              index: DB
            } = BB;
            return (0, VB.jsx)("button", {
              type: "button",
              className: pB()("OnboardingSwatch", {
                OnboardingSwatchSelected: DB === YB
              }),
              style: {
                backgroundColor: `rgb(${GB.join(",")})`
              },
              role: "radio",
              "aria-checked": DB === YB,
              "aria-label": oB("homePage:onboardingColour", {
                number: OB + 1
              }),
              onClick: () => {
                QB(DB)
              }
            }, DB)
          }))
        })]
      })
    }

    function IB(BB) {
      let {
        moreOptions: OB,
        onToggleMoreOptions: GB,
        moreOptionsBelowPresets: QB
      } = BB;
      const {
        t: oB
      } = (0, DB.H)(), {
        userContext: jB,
        isUserContextUpdating: JB
      } = (0, WB.d)(), [, PB] = (0, YB.useReducer)((BB => BB + 1), 0), zB = (0, YB.useRef)({}), lB = (0, YB.useRef)(null), AB = (0, YB.useRef)({}), fB = (0, RB.c)(), IB = {
        ...jB.getPlayerCosmetics(),
        ...lB.current
      }, FB = (0, YB.useRef)(null);
      (0, YB.useEffect)((() => {
        var BB;
        OB && (null === (BB = FB.current) || void 0 === BB || BB.scrollIntoView({
          block: "nearest"
        }))
      }), [OB]);
      const iB = (BB, OB) => {
          (0, ZB.d)(BB, Object.entries(OB)), fB.current ? PB() : BB.publishUpdateIfCurrent()
        },
        LB = function(BB) {
          let {
            isDefault: OB = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const GB = {
            ...!JB && jB.isLoggedIn() ? AB.current : lB.current,
            ...BB
          };
          if (!JB) return lB.current = null, AB.current = {}, void iB(jB, GB);
          lB.current = GB, OB || (AB.current = {
            ...AB.current,
            ...BB
          }), PB(), qB.userContextManager.getCurrentUserContext().then((BB => {
            if (lB.current !== GB) return;
            lB.current = null;
            const OB = AB.current;
            AB.current = {};
            const YB = BB.isLoggedIn() ? OB : GB;
            0 !== Object.keys(YB).length ? iB(BB, YB) : fB.current && PB()
          })).catch((BB => {
            console.warn("Couldn't put on the onboarding look held for the account", BB), lB.current === GB && (lB.current = null, AB.current = {}, fB.current && PB())
          }))
        },
        gB = (0, YB.useRef)(!1);
      (0, YB.useEffect)((() => {
        gB.current || (gB.current = !0, !JB && jB.isLoggedIn() || LB((0, MB.mc)(UB)[1].cosmetics, {
          isDefault: !0
        }))
      }), []), (0, YB.useEffect)((() => () => {
        jB.publishUpdateIfCurrent()
      }), [jB]);
      const rB = KB("eyes", IB.eyes),
        XB = KB("skin", IB.skin);
      return (0, VB.jsxs)(VB.Fragment, {
        children: [(0, VB.jsx)("div", {
          className: "OnboardingPresets",
          children: UB.map(((BB, OB) => {
            let [GB, {
              cosmetics: YB
            }] = BB;
            const DB = function(BB, OB) {
              return Object.entries(OB).every((OB => {
                let [GB, YB] = OB;
                return "skin" === GB || ("eyes" === GB ? (null === (DB = KB("eyes", BB.eyes)) || void 0 === DB ? void 0 : DB[0]) === (null === (QB = KB("eyes", YB)) || void 0 === QB ? void 0 : QB[0]) : BB[GB] === YB);
                var DB, QB
              }))
            }(IB, YB);
            return (0, VB.jsx)("button", {
              type: "button",
              className: pB()("OnboardingPreset", {
                OnboardingPresetSelected: DB
              }),
              "aria-label": oB("homePage:onboardingPreset", {
                number: OB + 1
              }),
              "aria-pressed": DB,
              onClick: () => {
                (0, yB.j)(`preset.${GB}`);
                const {
                  eyes: BB,
                  skin: OB
                } = zB.current;
                LB({
                  ...YB,
                  ...void 0 !== BB && {
                    eyes: uB("eyes", KB("eyes", YB.eyes)[0], BB)
                  },
                  ...void 0 !== OB && {
                    skin: uB("skin", "0", OB)
                  }
                })
              },
              children: (0, VB.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${GB}_preview.png)`
                }
              })
            }, GB)
          }))
        }), QB && (0, VB.jsx)(nB, {
          open: OB,
          onToggle: GB
        }), OB && (0, VB.jsxs)("div", {
          ref: FB,
          id: SB,
          className: "OnboardingMore",
          children: [(0, VB.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, VB.jsx)(NB.b, {
              cosmetics: IB
            })
          }), (0, VB.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, VB.jsx)(mB, {
              label: oB("homePage:onboardingEyeColour"),
              colours: kB,
              picked: null === rB || void 0 === rB ? void 0 : rB[1],
              onPick: BB => {
                var OB;
                (0, yB.j)("eyes"), zB.current.eyes = BB, LB({
                  eyes: uB("eyes", null !== (OB = null === rB || void 0 === rB ? void 0 : rB[0]) && void 0 !== OB ? OB : "0", BB)
                })
              }
            }), (0, VB.jsx)(mB, {
              label: oB("homePage:onboardingSkinColour"),
              colours: dB,
              picked: null === XB || void 0 === XB ? void 0 : XB[1],
              onPick: BB => {
                (0, yB.j)("skin"), zB.current.skin = BB, LB({
                  skin: uB("skin", "0", BB)
                })
              }
            })]
          })]
        })]
      })
    }
    var FB = GB(1262),
      iB = GB(16),
      LB = GB(34683),
      gB = GB(1375),
      rB = GB(1735);

    function XB(BB) {
      const {
        t: OB
      } = (0, DB.H)(), {
        userContext: GB,
        isUserContextUpdating: QB
      } = (0, WB.d)(), jB = QB ? null : GB.getPlayerName(), JB = (0, YB.useRef)(null), [MB, PB] = (0, YB.useState)((() => null === jB ? (0, FB.h)() : null)), [zB, lB] = (0, YB.useState)(null), [pB, qB] = (0, YB.useState)(!1), ZB = (0, YB.useRef)("GP"), NB = (0, RB.c)(), SB = (0, YB.useRef)(null !== MB), nB = (0, YB.useRef)(!1), UB = (0, YB.useRef)(null), fB = null !== MB && void 0 !== MB ? MB : jB, kB = (0, YB.useRef)(null), dB = BB => {
        JB.current && (JB.current.value = BB), PB(BB)
      }, KB = (0, YB.useRef)(!1);
      (0, YB.useEffect)((() => {
        var BB, OB;
        !pB && KB.current && (KB.current = !1, null === (BB = JB.current) || void 0 === BB || BB.focus(), null === (OB = JB.current) || void 0 === OB || OB.select())
      }), [pB]);
      const uB = (0, YB.useRef)(null);
      (0, YB.useEffect)((() => {
        var BB;
        null !== zB && (null === (BB = uB.current) || void 0 === BB || BB.scrollIntoView({
          block: "nearest"
        }))
      }), [zB]);
      const mB = (BB, OB) => {
        const GB = document.activeElement === JB.current || KB.current;
        qB(!0), lB(null), BB.then((BB => {
          NB.current && (qB(!1), KB.current = GB, OB(BB))
        }))
      };
      (0, YB.useEffect)((() => {
        var BB, OB;
        iB.c.get("isTouchScreen") || (null === (BB = JB.current) || void 0 === BB || BB.focus(), null === (OB = JB.current) || void 0 === OB || OB.select())
      }), []);
      const IB = () => {
          (0, yB.l)(ZB.current), BB()
        },
        XB = (BB, OB) => {
          var GB, YB;
          if (UB.current === BB) return ZB.current = null !== (GB = null === (YB = kB.current) || void 0 === YB ? void 0 : YB.outcome) && void 0 !== GB ? GB : "GP", void IB();
          UB.current = BB, lB(OB)
        },
        wB = BB => "refused" === BB.outcome ? BB.message : OB((0, LB.e)(BB.failure)),
        EB = BB => !(BB.length >= FB.o) && (lB({
          kind: "error",
          message: OB("homePage:changeNameMinLengthError", {
            length: FB.o
          })
        }), !0),
        cB = BB => {
          var YB, DB, QB;
          BB.toLowerCase() !== (null === (YB = null !== (DB = null === (QB = kB.current) || void 0 === QB ? void 0 : QB.name) && void 0 !== DB ? DB : jB) || void 0 === YB ? void 0 : YB.toLowerCase()) ? EB(BB) || mB((0, LB.d)(GB, BB), (GB => {
            "taken" !== GB.outcome ? "refused" !== GB.outcome && "failed" !== GB.outcome ? GB.name !== BB ? (ZB.current = "suffixed", kB.current = {
              name: GB.name,
              outcome: ZB.current
            }, dB(GB.name), lB({
              kind: "suffixed",
              taken: BB,
              name: GB.name
            })) : IB() : XB(BB, {
              kind: "error",
              message: wB(GB)
            }) : XB(BB, {
              kind: "error",
              message: OB("homePage:onboardingNameAllTaken")
            })
          })) : IB()
        };
      (0, YB.useEffect)((() => {
        if (!pB || null !== jB || !nB.current) return;
        const BB = setTimeout((() => {
          nB.current = !1, qB(!1), XB(fB, {
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(BB)
        }
      }), [pB, jB]), (0, YB.useEffect)((() => {
        if (null === jB) return;
        const BB = SB.current && "GP" === ZB.current && GB.isLoggedIn();
        SB.current = !1, UB.current = null, "noAccount" === (null === zB || void 0 === zB ? void 0 : zB.kind) && lB(null), BB && dB(jB), nB.current && (nB.current = !1, qB(!1), cB(BB ? jB : fB))
      }), [jB]);
      const hB = "error" === (null === zB || void 0 === zB ? void 0 : zB.kind) ? zB.message : "noAccount" === (null === zB || void 0 === zB ? void 0 : zB.kind) ? OB("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, VB.jsxs)("div", {
          className: "OnboardingNameField",
          ref: uB,
          children: [(0, VB.jsx)("div", {
            className: "OnboardingSubtitle",
            children: OB("general:name")
          }), null === fB && (0, VB.jsx)(gB.b, {}), null !== fB && (0, VB.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, VB.jsx)(rB.b, {
              className: "OnboardingNameInput",
              ariaLabel: OB("general:name"),
              maxLength: FB.l,
              defaultValue: fB,
              domRef: JB,
              forcedText: pB ? fB : null,
              onEnter: () => {
                var BB;
                null === (BB = JB.current) || void 0 === BB || BB.blur()
              },
              onValueChange: BB => {
                const GB = (0, FB.u)(BB);
                GB !== BB && JB.current && (JB.current.value = GB), lB(GB !== BB ? {
                  kind: "error",
                  message: OB("homePage:nameCharacters")
                } : null), GB !== fB && (ZB.current = "changed"), PB(GB)
              }
            }), (0, VB.jsx)(oB.f, {
              className: "OnboardingRandomName",
              ariaLabel: OB("homePage:onboardingRandomName"),
              disabled: pB,
              onClick: () => {
                (() => {
                  if (lB(null), null === jB || GB.isLoggedIn()) return dB((0, FB.h)()), void(ZB.current = "rolled");
                  mB((0, LB.g)(GB), (BB => {
                    var OB, YB;
                    if ("refused" === BB.outcome || "failed" === BB.outcome) return dB(GB.getPlayerName()), ZB.current = null !== (OB = null === (YB = kB.current) || void 0 === YB ? void 0 : YB.outcome) && void 0 !== OB ? OB : "GP", void lB({
                      kind: "error",
                      message: wB(BB)
                    });
                    ZB.current = "rolled", kB.current = {
                      name: BB.name,
                      outcome: "rolled"
                    }, dB(BB.name)
                  }))
                })()
              },
              children: (0, VB.jsx)(AB.b, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === zB || void 0 === zB ? void 0 : zB.kind) && (0, VB.jsx)("div", {
            className: "OnboardingNameNote",
            children: OB("homePage:onboardingNameSuffixed", {
              taken: zB.taken,
              name: zB.name
            })
          }), null !== hB && (0, VB.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: hB
          })]
        }),
        submit: () => {
          if (!pB && null !== fB) {
            if (null === jB) {
              if (EB(fB)) return;
              return KB.current = document.activeElement === JB.current, nB.current = !0, qB(!0), void lB(null)
            }
            cB(fB)
          }
        },
        busy: pB,
        ready: null !== fB
      }
    }

    function wB(BB) {
      return BB < 500
    }

    function EB() {
      const BB = {
          finished: !1
        },
        OB = {
          press: null
        };
      return QB.NotificationProvider.showCustomPopup({
        body: GB => (0, VB.jsx)(cB, {
          onFinish: () => {
            (0, yB.f)(), BB.finished = !0, GB()
          },
          doneRef: OB
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        disableExitButton: !0,
        ignoreBackgroundPress: !0,
        dismiss: () => {
          var BB;
          null === (BB = OB.press) || void 0 === BB || BB.call(OB)
        },
        onClose: () => {
          BB.finished || (0, yB.d)()
        }
      })
    }

    function cB(BB) {
      let {
        onFinish: OB,
        doneRef: GB
      } = BB;
      const {
        t: QB
      } = (0, DB.H)(), JB = XB(OB), MB = JB.ready && !JB.busy ? JB.submit : null;
      (0, YB.useEffect)((() => (GB.press = MB, () => {
        GB.press = null
      })));
      const [PB, zB] = (0, YB.useState)(!1), lB = (0, jB.h)(((BB, OB) => wB(OB))), pB = () => {
        zB(!PB)
      };
      return (0, YB.useEffect)((() => {
        (0, yB.n)()
      }), []), (0, VB.jsxs)("div", {
        className: "Onboarding",
        children: [(0, VB.jsx)("div", {
          className: "OnboardingTitle",
          children: QB("homePage:onboardingTitle")
        }), (0, VB.jsxs)("div", {
          className: "OnboardingBody",
          children: [JB.field, (0, VB.jsx)(IB, {
            moreOptions: PB,
            onToggleMoreOptions: pB,
            moreOptionsBelowPresets: !lB
          })]
        }), (0, VB.jsxs)("div", {
          className: "OnboardingFooter",
          children: [lB && (0, VB.jsx)(nB, {
            open: PB,
            onToggle: pB
          }), (0, VB.jsx)(oB.q, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: JB.busy,
            disabled: !JB.ready,
            onClick: JB.submit,
            children: QB("homePage:onboardingDone")
          })]
        })]
      })
    }
  },
  37063: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB
    });
    var YB = GB(2023),
      DB = GB(1540);
    const QB = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(BB, OB) {
        BB !== this.userContext && this.sendHeld(), this.userContext = BB;
        for (const [YB, DB] of OB) this.pending.set(YB, DB);
        if (null !== this.timer) return;
        const GB = this.lastSentAt + 1100 - Date.now();
        GB <= 0 ? this.send(BB) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), GB), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(BB) {
        const OB = Array.from(this.pending, (BB => {
          let [OB, GB] = BB;
          return {
            UB: OB,
            fB: GB
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), DB.b.updateCosmetics(BB, OB).catch((BB => {
          console.error("Failed to update cosmetics", BB)
        }))
      }
    };

    function oB(BB, OB) {
      for (const [GB, YB] of OB) BB.setPlayerCosmetics(GB, YB);
      if (null === YB.gameBridge.latest("connectedGame").websocketUrl) QB.save(BB, OB);
      else
        for (const [GB, DB] of OB) YB.gameBridge.send("updateMyCosmetic", {
          UB: GB,
          fB: DB
        })
    }
  },
  34683: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => RB,
      e: () => JB,
      f: () => qB,
      g: () => pB
    });
    var YB = GB(162),
      DB = GB(1262),
      QB = GB(1186),
      oB = GB(1121),
      jB = GB(1813);
    const yB = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function JB(BB) {
      return yB[BB]
    }

    function MB(BB) {
      return (0, jB.b)(BB) ? "outdated" : BB instanceof YB.d ? 429 === BB.httpCode ? "busy" : "server" : "offline"
    }

    function PB(BB, OB, GB) {
      return (0, oB.postJsonWithMetricsCookiesAndJsonResponse)(`${QB.clientSideServerUrls.indexUrl}${OB}`, GB, {
        retries: 3
      }, BB.getMetricsCookies()).catch((BB => (console.error("Bad response from the server when trying to change name:", OB, BB), {
        outcome: "failed",
        failure: MB(BB)
      })))
    }

    function zB(BB) {
      return "outcome" in BB && "failed" === BB.outcome
    }

    function lB(BB) {
      return console.error("Error when trying to get with new name from DB", BB), {
        outcome: "refused",
        message: BB
      }
    }
    async function pB(BB) {
      const OB = await PB(BB, "/index/name/random", {});
      return zB(OB) ? OB : "err" in OB ? lB(OB.err) : (BB.setPlayerName(OB.name), {
        outcome: "changed",
        name: OB.name
      })
    }
    async function qB(BB, OB) {
      const GB = await PB(BB, "/index/name/update", {
        name: OB
      });
      return zB(GB) ? GB : "err" in GB ? lB(GB.err) : GB.nameExists ? {
        outcome: "taken"
      } : (BB.setPlayerName(OB), {
        outcome: "changed",
        name: OB
      })
    }

    function ZB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const YB = 1 === OB ? 1 : 10 ** (OB - 1),
        QB = String(YB + Math.floor(GB() * (10 ** OB - YB)));
      return `${BB.slice(0,DB.l-OB)}${QB}`
    }
    const NB = [1, 2, 3, 4];
    async function RB(BB, OB) {
      const GB = await qB(BB, OB);
      if ("taken" !== GB.outcome) return GB;
      for (const YB of NB) {
        const GB = ZB(OB, YB),
          DB = await qB(BB, GB);
        if ("taken" !== DB.outcome) return DB
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
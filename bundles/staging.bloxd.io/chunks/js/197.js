export const id = 197;
export const ids = [197];
export const modules = {
  36462: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      showOnboardingPopup: () => hB
    });
    var QB = zB(62),
      nB = zB(1240),
      dB = zB(1381),
      IB = zB(1478),
      NB = zB(4426),
      uB = zB(1585),
      UB = zB(1583),
      aB = zB(2302),
      pB = zB(1091),
      rB = zB.n(pB),
      sB = zB(1173),
      JB = zB(36467),
      mB = zB(1108),
      yB = zB(2458),
      kB = zB(3593),
      GB = zB(1169),
      LB = zB(1148);
    const gB = Object.entries(uB.d).filter((BB => {
      let [, jB] = BB;
      return "default" === jB.cosmeticPack
    }));

    function tB(BB) {
      return UB.e.default.colourGroups[BB].colours.map(((BB, jB) => {
        let {
          rbg: zB,
          order: QB
        } = BB;
        return {
          rbg: zB,
          order: QB,
          index: jB
        }
      })).sort(((BB, jB) => BB.order - jB.order))
    }
    const SB = tB("eyes"),
      MB = tB("skin");

    function EB(BB, jB) {
      var zB;
      if (void 0 === jB || "default" !== (null === (zB = (0, aB.j)(BB, jB)) || void 0 === zB ? void 0 : zB.cosmeticPack)) return null;
      const QB = (0, aB.f)(jB);
      return QB && [QB[0], Number(QB[1])]
    }

    function iB(BB, jB, zB) {
      return `${BB}_${jB}_${zB}`
    }

    function qB(BB) {
      let {
        label: jB,
        colours: zB,
        picked: QB,
        onPick: dB
      } = BB;
      const {
        t: IB
      } = (0, nB.D)();
      return (0, LB.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, LB.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: jB
        }), (0, LB.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": jB,
          children: zB.map(((BB, jB) => {
            let {
              rbg: zB,
              index: nB
            } = BB;
            return (0, LB.jsx)("button", {
              type: "button",
              className: rB()("OnboardingSwatch", {
                OnboardingSwatchSelected: nB === QB
              }),
              style: {
                backgroundColor: `rgb(${zB.join(",")})`
              },
              role: "radio",
              "aria-checked": nB === QB,
              "aria-label": IB("homePage:onboardingColour", {
                number: jB + 1
              }),
              onClick: () => {
                dB(nB)
              }
            }, nB)
          }))
        })]
      })
    }

    function fB() {
      const {
        t: BB
      } = (0, nB.D)(), {
        userContext: jB,
        isUserContextUpdating: zB
      } = (0, GB.d)(), [dB, IB] = (0, QB.useState)(!1), [, uB] = (0, QB.useReducer)((BB => BB + 1), 0), UB = (0, QB.useRef)({}), aB = (0, QB.useRef)(null), pB = (0, kB.d)(), tB = {
        ...jB.getPlayerCosmetics(),
        ...aB.current
      }, fB = (0, QB.useRef)(null);
      (0, QB.useEffect)((() => {
        var BB;
        dB && (null === (BB = fB.current) || void 0 === BB || BB.scrollIntoView({
          block: "nearest"
        }))
      }), [dB]);
      const oB = (BB, jB) => {
          (0, JB.b)(BB, Object.entries(jB)), pB.current ? uB() : BB.publishUpdateIfCurrent()
        },
        HB = BB => {
          const QB = {
            ...aB.current,
            ...BB
          };
          if (!zB) return aB.current = null, void oB(jB, QB);
          aB.current = QB, uB(), sB.userContextManager.getCurrentUserContext().then((BB => {
            aB.current === QB && (aB.current = null, oB(BB, QB))
          })).catch((BB => {
            console.warn("Couldn't put on the onboarding look held for the account", BB), aB.current === QB && (aB.current = null, pB.current && uB())
          }))
        };
      (0, QB.useEffect)((() => () => {
        jB.publishUpdateIfCurrent()
      }), [jB]);
      const DB = EB("eyes", tB.eyes),
        FB = EB("skin", tB.skin);
      return (0, LB.jsxs)(LB.Fragment, {
        children: [(0, LB.jsx)("div", {
          className: "OnboardingPresets",
          children: gB.map(((jB, zB) => {
            let [QB, {
              cosmetics: nB
            }] = jB;
            const dB = function(BB, jB) {
              return Object.entries(jB).every((jB => {
                let [zB, QB] = jB;
                return "skin" === zB || ("eyes" === zB ? (null === (nB = EB("eyes", BB.eyes)) || void 0 === nB ? void 0 : nB[0]) === (null === (dB = EB("eyes", QB)) || void 0 === dB ? void 0 : dB[0]) : BB[zB] === QB);
                var nB, dB
              }))
            }(tB, nB);
            return (0, LB.jsx)("button", {
              type: "button",
              className: rB()("OnboardingPreset", {
                OnboardingPresetSelected: dB
              }),
              "aria-label": BB("homePage:onboardingPreset", {
                number: zB + 1
              }),
              "aria-pressed": dB,
              onClick: () => {
                (0, NB.i)(`preset.${QB}`);
                const {
                  eyes: BB,
                  skin: jB
                } = UB.current;
                HB({
                  ...nB,
                  ...void 0 !== BB && {
                    eyes: iB("eyes", EB("eyes", nB.eyes)[0], BB)
                  },
                  ...void 0 !== jB && {
                    skin: iB("skin", "0", jB)
                  }
                })
              },
              children: (0, LB.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${QB}_preview.png)`
                }
              })
            }, QB)
          }))
        }), (0, LB.jsxs)("button", {
          type: "button",
          className: "OnboardingMoreOptions",
          "aria-expanded": dB,
          onClick: () => {
            dB || (0, NB.i)("more"), IB(!dB)
          },
          children: [BB("homePage:onboardingMoreOptions"), (0, LB.jsx)(mB.c, {
            name: dB ? "caret-up" : "caret-down"
          })]
        }), dB && (0, LB.jsxs)("div", {
          ref: fB,
          className: "OnboardingMore",
          children: [(0, LB.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, LB.jsx)(yB.c, {
              cosmetics: tB
            })
          }), (0, LB.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, LB.jsx)(qB, {
              label: BB("homePage:onboardingEyeColour"),
              colours: SB,
              picked: null === DB || void 0 === DB ? void 0 : DB[1],
              onPick: BB => {
                var jB;
                (0, NB.i)("eyes"), UB.current.eyes = BB, HB({
                  eyes: iB("eyes", null !== (jB = null === DB || void 0 === DB ? void 0 : DB[0]) && void 0 !== jB ? jB : "0", BB)
                })
              }
            }), (0, LB.jsx)(qB, {
              label: BB("homePage:onboardingSkinColour"),
              colours: MB,
              picked: null === FB || void 0 === FB ? void 0 : FB[1],
              onPick: BB => {
                (0, NB.i)("skin"), UB.current.skin = BB, HB({
                  skin: iB("skin", "0", BB)
                })
              }
            })]
          })]
        })]
      })
    }
    var oB = zB(1297),
      HB = zB(28),
      DB = zB(34138),
      FB = zB(1369),
      YB = zB(1710);

    function VB(BB) {
      const {
        t: jB
      } = (0, nB.D)(), {
        userContext: zB,
        isUserContextUpdating: dB
      } = (0, GB.d)(), uB = dB ? null : zB.getPlayerName(), UB = (0, QB.useRef)(null), [aB, pB] = (0, QB.useState)((() => null === uB ? (0, oB.e)() : null)), [rB, sB] = (0, QB.useState)(null), [JB, yB] = (0, QB.useState)(!1), gB = (0, QB.useRef)("Cs"), tB = (0, kB.d)(), SB = (0, QB.useRef)(null !== aB), MB = (0, QB.useRef)(!1), EB = null !== aB && void 0 !== aB ? aB : uB, iB = (0, QB.useRef)(null), qB = BB => {
        UB.current && (UB.current.value = BB), pB(BB)
      }, fB = (0, QB.useRef)(!1);
      (0, QB.useEffect)((() => {
        var BB, jB;
        !JB && fB.current && (fB.current = !1, null === (BB = UB.current) || void 0 === BB || BB.focus(), null === (jB = UB.current) || void 0 === jB || jB.select())
      }), [JB]);
      const VB = (0, QB.useRef)(null);
      (0, QB.useEffect)((() => {
        var BB;
        null !== rB && (null === (BB = VB.current) || void 0 === BB || BB.scrollIntoView({
          block: "nearest"
        }))
      }), [rB]);
      const hB = (BB, jB) => {
        const zB = document.activeElement === UB.current || fB.current;
        yB(!0), sB(null), BB.then((BB => {
          tB.current && (yB(!1), fB.current = zB, jB(BB))
        }))
      };
      (0, QB.useEffect)((() => {
        var BB, jB;
        HB.c.get("isTouchScreen") || (null === (BB = UB.current) || void 0 === BB || BB.focus(), null === (jB = UB.current) || void 0 === jB || jB.select())
      }), []);
      const XB = () => {
          (0, NB.l)(gB.current), BB()
        },
        ZB = BB => "refused" === BB.outcome ? BB.message : jB((0, DB.f)(BB.failure)),
        AB = BB => !(BB.length >= oB.k) && (sB({
          kind: "error",
          message: jB("homePage:changeNameMinLengthError", {
            length: oB.k
          })
        }), !0),
        TB = BB => {
          var QB, nB, dB;
          BB.toLowerCase() !== (null === (QB = null !== (nB = null === (dB = iB.current) || void 0 === dB ? void 0 : dB.name) && void 0 !== nB ? nB : uB) || void 0 === QB ? void 0 : QB.toLowerCase()) ? AB(BB) || hB((0, DB.b)(zB, BB), (zB => {
            "taken" !== zB.outcome ? "refused" !== zB.outcome && "failed" !== zB.outcome ? zB.name !== BB ? (gB.current = "suffixed", iB.current = {
              name: zB.name,
              outcome: gB.current
            }, qB(zB.name), sB({
              kind: "suffixed",
              taken: BB,
              name: zB.name
            })) : XB() : sB({
              kind: "error",
              message: ZB(zB)
            }) : sB({
              kind: "error",
              message: jB("homePage:onboardingNameAllTaken")
            })
          })) : XB()
        };
      (0, QB.useEffect)((() => {
        if (!JB || null !== uB || !MB.current) return;
        const BB = setTimeout((() => {
          MB.current = !1, yB(!1), sB({
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(BB)
        }
      }), [JB, uB]), (0, QB.useEffect)((() => {
        if (null === uB) return;
        const BB = SB.current && "Cs" === gB.current && zB.isLoggedIn();
        SB.current = !1, "noAccount" === (null === rB || void 0 === rB ? void 0 : rB.kind) && sB(null), BB && qB(uB), MB.current && (MB.current = !1, yB(!1), TB(BB ? uB : EB))
      }), [uB]);
      const PB = "error" === (null === rB || void 0 === rB ? void 0 : rB.kind) ? rB.message : "noAccount" === (null === rB || void 0 === rB ? void 0 : rB.kind) ? jB("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, LB.jsxs)("div", {
          className: "OnboardingNameField",
          ref: VB,
          children: [(0, LB.jsx)("div", {
            className: "OnboardingSubtitle",
            children: jB("general:name")
          }), null === EB && (0, LB.jsx)(FB.e, {}), null !== EB && (0, LB.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, LB.jsx)(YB.d, {
              className: "OnboardingNameInput",
              ariaLabel: jB("general:name"),
              maxLength: oB.g,
              defaultValue: EB,
              domRef: UB,
              forcedText: JB ? EB : null,
              onEnter: () => {
                var BB;
                null === (BB = UB.current) || void 0 === BB || BB.blur()
              },
              onValueChange: BB => {
                const zB = (0, oB.m)(BB);
                zB !== BB && UB.current && (UB.current.value = zB), sB(zB !== BB ? {
                  kind: "error",
                  message: jB("homePage:nameCharacters")
                } : null), zB !== EB && (gB.current = "changed"), pB(zB)
              }
            }), (0, LB.jsx)(IB.f, {
              className: "OnboardingRandomName",
              ariaLabel: jB("homePage:onboardingRandomName"),
              disabled: JB,
              onClick: () => {
                (() => {
                  if (sB(null), null === uB || zB.isLoggedIn()) return qB((0, oB.e)()), void(gB.current = "rolled");
                  hB((0, DB.k)(zB), (BB => {
                    var jB, QB;
                    if ("refused" === BB.outcome || "failed" === BB.outcome) return qB(zB.getPlayerName()), gB.current = null !== (jB = null === (QB = iB.current) || void 0 === QB ? void 0 : QB.outcome) && void 0 !== jB ? jB : "Cs", void sB({
                      kind: "error",
                      message: ZB(BB)
                    });
                    gB.current = "rolled", iB.current = {
                      name: BB.name,
                      outcome: "rolled"
                    }, qB(BB.name)
                  }))
                })()
              },
              children: (0, LB.jsx)(mB.c, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === rB || void 0 === rB ? void 0 : rB.kind) && (0, LB.jsx)("div", {
            className: "OnboardingNameNote",
            children: jB("homePage:onboardingNameSuffixed", {
              taken: rB.taken,
              name: rB.name
            })
          }), null !== PB && (0, LB.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: PB
          })]
        }),
        submit: () => {
          if (!JB && null !== EB) {
            if (null === uB) {
              if (AB(EB)) return;
              return fB.current = document.activeElement === UB.current, MB.current = !0, yB(!0), void sB(null)
            }
            TB(EB)
          }
        },
        busy: JB,
        ready: null !== EB
      }
    }

    function hB() {
      const BB = {
        finished: !1
      };
      return dB.NotificationProvider.showCustomPopup({
        body: jB => (0, LB.jsx)(XB, {
          onFinish: () => {
            (0, NB.g)(), BB.finished = !0, jB()
          }
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        ignoreBackgroundPress: !0,
        onClose: () => {
          BB.finished || (0, NB.d)()
        }
      })
    }

    function XB(BB) {
      let {
        onFinish: jB
      } = BB;
      const {
        t: zB
      } = (0, nB.D)(), dB = VB(jB);
      return (0, QB.useEffect)((() => {
        (0, NB.o)()
      }), []), (0, LB.jsxs)("div", {
        className: "Onboarding",
        children: [(0, LB.jsx)("div", {
          className: "OnboardingTitle",
          children: zB("homePage:onboardingTitle")
        }), (0, LB.jsxs)("div", {
          className: "OnboardingBody",
          children: [dB.field, (0, LB.jsx)(fB, {})]
        }), (0, LB.jsx)("div", {
          className: "OnboardingFooter",
          children: (0, LB.jsx)(IB.m, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: dB.busy,
            disabled: !dB.ready,
            onClick: dB.submit,
            children: zB("homePage:onboardingDone")
          })
        })]
      })
    }
  },
  36467: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB
    });
    var QB = zB(1982),
      nB = zB(1532);
    const dB = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(BB, jB) {
        BB !== this.userContext && this.sendHeld(), this.userContext = BB;
        for (const [QB, nB] of jB) this.pending.set(QB, nB);
        if (null !== this.timer) return;
        const zB = this.lastSentAt + 1100 - Date.now();
        zB <= 0 ? this.send(BB) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), zB), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(BB) {
        const jB = Array.from(this.pending, (BB => {
          let [jB, zB] = BB;
          return {
            Wd: jB,
            ld: zB
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), nB.b.updateCosmetics(BB, jB).catch((BB => {
          console.error("Failed to update cosmetics", BB)
        }))
      }
    };

    function IB(BB, jB) {
      for (const [zB, QB] of jB) BB.setPlayerCosmetics(zB, QB);
      if (null === QB.gameBridge.latest("connectedGame").websocketUrl) dB.save(BB, jB);
      else
        for (const [zB, nB] of jB) QB.gameBridge.send("updateMyCosmetic", {
          Wd: zB,
          ld: nB
        })
    }
  },
  34138: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => GB,
      f: () => UB,
      g: () => mB,
      k: () => JB
    });
    var QB = zB(174),
      nB = zB(1297),
      dB = zB(1244),
      IB = zB(1173),
      NB = zB(1770);
    const uB = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function UB(BB) {
      return uB[BB]
    }

    function aB(BB) {
      return (0, NB.e)(BB) ? "outdated" : BB instanceof QB.c ? 429 === BB.httpCode ? "busy" : "server" : "offline"
    }

    function pB(BB, jB, zB) {
      return (0, IB.postJsonWithMetricsCookiesAndJsonResponse)(`${dB.clientSideServerUrls.indexUrl}${jB}`, zB, {
        retries: 3
      }, BB.getMetricsCookies()).catch((BB => (console.error("Bad response from the server when trying to change name:", jB, BB), {
        outcome: "failed",
        failure: aB(BB)
      })))
    }

    function rB(BB) {
      return "outcome" in BB && "failed" === BB.outcome
    }

    function sB(BB) {
      return console.error("Error when trying to get with new name from DB", BB), {
        outcome: "refused",
        message: BB
      }
    }
    async function JB(BB) {
      const jB = await pB(BB, "/index/name/random", {});
      return rB(jB) ? jB : "err" in jB ? sB(jB.err) : (BB.setPlayerName(jB.name), {
        outcome: "changed",
        name: jB.name
      })
    }
    async function mB(BB, jB) {
      const zB = await pB(BB, "/index/name/update", {
        name: jB
      });
      return rB(zB) ? zB : "err" in zB ? sB(zB.err) : zB.nameExists ? {
        outcome: "taken"
      } : (BB.setPlayerName(jB), {
        outcome: "changed",
        name: jB
      })
    }

    function yB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const QB = 1 === jB ? 1 : 10 ** (jB - 1),
        dB = String(QB + Math.floor(zB() * (10 ** jB - QB)));
      return `${BB.slice(0,nB.g-jB)}${dB}`
    }
    const kB = [1, 2, 3, 4];
    async function GB(BB, jB) {
      const zB = await mB(BB, jB);
      if ("taken" !== zB.outcome) return zB;
      for (const QB of kB) {
        const zB = yB(jB, QB),
          nB = await mB(BB, zB);
        if ("taken" !== nB.outcome) return nB
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
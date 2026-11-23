export const id = 195;
export const ids = [195];
export const modules = {
  36264: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      showOnboardingPopup: () => lC
    });
    var QC = ZC(48),
      wC = ZC(1143),
      bC = ZC(1307),
      nC = ZC(1388),
      fC = ZC(4256),
      oC = ZC(1501),
      qC = ZC(1493),
      FC = ZC(2166),
      WC = ZC(1002),
      NC = ZC.n(WC),
      MC = ZC(1078),
      gC = ZC(36271),
      SC = ZC(1013),
      pC = ZC(2318),
      PC = ZC(3452),
      GC = ZC(1076),
      RC = ZC(1056);
    const AC = Object.entries(oC.b).filter((CC => {
      let [, zC] = CC;
      return "default" === zC.cosmeticPack
    }));

    function xC(CC) {
      return qC.d.default.colourGroups[CC].colours.map(((CC, zC) => {
        let {
          rbg: ZC,
          order: QC
        } = CC;
        return {
          rbg: ZC,
          order: QC,
          index: zC
        }
      })).sort(((CC, zC) => CC.order - zC.order))
    }
    const JC = xC("eyes"),
      IC = xC("skin");

    function iC(CC, zC) {
      var ZC;
      if (void 0 === zC || "default" !== (null === (ZC = (0, FC.j)(CC, zC)) || void 0 === ZC ? void 0 : ZC.cosmeticPack)) return null;
      const QC = (0, FC.h)(zC);
      return QC && [QC[0], Number(QC[1])]
    }

    function vC(CC, zC, ZC) {
      return `${CC}_${zC}_${ZC}`
    }

    function eC(CC) {
      let {
        label: zC,
        colours: ZC,
        picked: QC,
        onPick: bC
      } = CC;
      const {
        t: nC
      } = (0, wC.y)();
      return (0, RC.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, RC.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: zC
        }), (0, RC.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": zC,
          children: ZC.map(((CC, zC) => {
            let {
              rbg: ZC,
              index: wC
            } = CC;
            return (0, RC.jsx)("button", {
              type: "button",
              className: NC()("OnboardingSwatch", {
                OnboardingSwatchSelected: wC === QC
              }),
              style: {
                backgroundColor: `rgb(${ZC.join(",")})`
              },
              role: "radio",
              "aria-checked": wC === QC,
              "aria-label": nC("homePage:onboardingColour", {
                number: zC + 1
              }),
              onClick: () => {
                bC(wC)
              }
            }, wC)
          }))
        })]
      })
    }

    function hC() {
      const {
        t: CC
      } = (0, wC.y)(), {
        userContext: zC,
        isUserContextUpdating: ZC
      } = (0, GC.e)(), [bC, nC] = (0, QC.useState)(!1), [, oC] = (0, QC.useReducer)((CC => CC + 1), 0), qC = (0, QC.useRef)({}), FC = (0, QC.useRef)(null), WC = (0, PC.e)(), xC = {
        ...zC.getPlayerCosmetics(),
        ...FC.current
      }, hC = (0, QC.useRef)(null);
      (0, QC.useEffect)((() => {
        var CC;
        bC && (null === (CC = hC.current) || void 0 === CC || CC.scrollIntoView({
          block: "nearest"
        }))
      }), [bC]);
      const KC = (CC, zC) => {
          (0, gC.e)(CC, Object.entries(zC)), WC.current ? oC() : CC.publishUpdateIfCurrent()
        },
        YC = CC => {
          const QC = {
            ...FC.current,
            ...CC
          };
          if (!ZC) return FC.current = null, void KC(zC, QC);
          FC.current = QC, oC(), MC.userContextManager.getCurrentUserContext().then((CC => {
            FC.current === QC && (FC.current = null, KC(CC, QC))
          })).catch((CC => {
            console.warn("Couldn't put on the onboarding look held for the account", CC), FC.current === QC && (FC.current = null, WC.current && oC())
          }))
        };
      (0, QC.useEffect)((() => () => {
        zC.publishUpdateIfCurrent()
      }), [zC]);
      const dC = iC("eyes", xC.eyes),
        mC = iC("skin", xC.skin);
      return (0, RC.jsxs)(RC.Fragment, {
        children: [(0, RC.jsx)("div", {
          className: "OnboardingPresets",
          children: AC.map(((zC, ZC) => {
            let [QC, {
              cosmetics: wC
            }] = zC;
            const bC = function(CC, zC) {
              return Object.entries(zC).every((zC => {
                let [ZC, QC] = zC;
                return "skin" === ZC || ("eyes" === ZC ? (null === (wC = iC("eyes", CC.eyes)) || void 0 === wC ? void 0 : wC[0]) === (null === (bC = iC("eyes", QC)) || void 0 === bC ? void 0 : bC[0]) : CC[ZC] === QC);
                var wC, bC
              }))
            }(xC, wC);
            return (0, RC.jsx)("button", {
              type: "button",
              className: NC()("OnboardingPreset", {
                OnboardingPresetSelected: bC
              }),
              "aria-label": CC("homePage:onboardingPreset", {
                number: ZC + 1
              }),
              "aria-pressed": bC,
              onClick: () => {
                (0, fC.h)(`preset.${QC}`);
                const {
                  eyes: CC,
                  skin: zC
                } = qC.current;
                YC({
                  ...wC,
                  ...void 0 !== CC && {
                    eyes: vC("eyes", iC("eyes", wC.eyes)[0], CC)
                  },
                  ...void 0 !== zC && {
                    skin: vC("skin", "0", zC)
                  }
                })
              },
              children: (0, RC.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${QC}_preview.png)`
                }
              })
            }, QC)
          }))
        }), (0, RC.jsxs)("button", {
          type: "button",
          className: "OnboardingMoreOptions",
          "aria-expanded": bC,
          onClick: () => {
            bC || (0, fC.h)("more"), nC(!bC)
          },
          children: [CC("homePage:onboardingMoreOptions"), (0, RC.jsx)(SC.c, {
            name: bC ? "caret-up" : "caret-down"
          })]
        }), bC && (0, RC.jsxs)("div", {
          ref: hC,
          className: "OnboardingMore",
          children: [(0, RC.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, RC.jsx)(pC.c, {
              cosmetics: xC
            })
          }), (0, RC.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, RC.jsx)(eC, {
              label: CC("homePage:onboardingEyeColour"),
              colours: JC,
              picked: null === dC || void 0 === dC ? void 0 : dC[1],
              onPick: CC => {
                var zC;
                (0, fC.h)("eyes"), qC.current.eyes = CC, YC({
                  eyes: vC("eyes", null !== (zC = null === dC || void 0 === dC ? void 0 : dC[0]) && void 0 !== zC ? zC : "0", CC)
                })
              }
            }), (0, RC.jsx)(eC, {
              label: CC("homePage:onboardingSkinColour"),
              colours: IC,
              picked: null === mC || void 0 === mC ? void 0 : mC[1],
              onPick: CC => {
                (0, fC.h)("skin"), qC.current.skin = CC, YC({
                  skin: vC("skin", "0", CC)
                })
              }
            })]
          })]
        })]
      })
    }
    var KC = ZC(1211),
      YC = ZC(20),
      dC = ZC(34053),
      mC = ZC(1295),
      HC = ZC(1593);

    function EC(CC) {
      const {
        t: zC
      } = (0, wC.y)(), {
        userContext: ZC,
        isUserContextUpdating: bC
      } = (0, GC.e)(), oC = bC ? null : ZC.getPlayerName(), qC = (0, QC.useRef)(null), [FC, WC] = (0, QC.useState)((() => null === oC ? (0, KC.e)() : null)), [NC, MC] = (0, QC.useState)(null), [gC, pC] = (0, QC.useState)(!1), AC = (0, QC.useRef)("lM"), xC = (0, PC.e)(), JC = (0, QC.useRef)(null !== FC), IC = (0, QC.useRef)(!1), iC = null !== FC && void 0 !== FC ? FC : oC, vC = (0, QC.useRef)(null), eC = CC => {
        qC.current && (qC.current.value = CC), WC(CC)
      }, hC = (0, QC.useRef)(!1);
      (0, QC.useEffect)((() => {
        var CC, zC;
        !gC && hC.current && (hC.current = !1, null === (CC = qC.current) || void 0 === CC || CC.focus(), null === (zC = qC.current) || void 0 === zC || zC.select())
      }), [gC]);
      const EC = (0, QC.useRef)(null);
      (0, QC.useEffect)((() => {
        var CC;
        null !== NC && (null === (CC = EC.current) || void 0 === CC || CC.scrollIntoView({
          block: "nearest"
        }))
      }), [NC]);
      const lC = (CC, zC) => {
        const ZC = document.activeElement === qC.current || hC.current;
        pC(!0), MC(null), CC.then((CC => {
          xC.current && (pC(!1), hC.current = ZC, zC(CC))
        }))
      };
      (0, QC.useEffect)((() => {
        var CC, zC;
        YC.b.get("isTouchScreen") || (null === (CC = qC.current) || void 0 === CC || CC.focus(), null === (zC = qC.current) || void 0 === zC || zC.select())
      }), []);
      const XC = () => {
          (0, fC.k)(AC.current), CC()
        },
        cC = CC => "refused" === CC.outcome ? CC.message : zC((0, dC.e)(CC.failure)),
        uC = CC => !(CC.length >= KC.l) && (MC({
          kind: "error",
          message: zC("homePage:changeNameMinLengthError", {
            length: KC.l
          })
        }), !0),
        rC = CC => {
          var QC, wC, bC;
          CC.toLowerCase() !== (null === (QC = null !== (wC = null === (bC = vC.current) || void 0 === bC ? void 0 : bC.name) && void 0 !== wC ? wC : oC) || void 0 === QC ? void 0 : QC.toLowerCase()) ? uC(CC) || lC((0, dC.b)(ZC, CC), (ZC => {
            "taken" !== ZC.outcome ? "refused" !== ZC.outcome && "failed" !== ZC.outcome ? ZC.name !== CC ? (AC.current = "suffixed", vC.current = {
              name: ZC.name,
              outcome: AC.current
            }, eC(ZC.name), MC({
              kind: "suffixed",
              taken: CC,
              name: ZC.name
            })) : XC() : MC({
              kind: "error",
              message: cC(ZC)
            }) : MC({
              kind: "error",
              message: zC("homePage:onboardingNameAllTaken")
            })
          })) : XC()
        };
      (0, QC.useEffect)((() => {
        if (!gC || null !== oC || !IC.current) return;
        const CC = setTimeout((() => {
          IC.current = !1, pC(!1), MC({
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(CC)
        }
      }), [gC, oC]), (0, QC.useEffect)((() => {
        if (null === oC) return;
        const CC = JC.current && "lM" === AC.current && ZC.isLoggedIn();
        JC.current = !1, "noAccount" === (null === NC || void 0 === NC ? void 0 : NC.kind) && MC(null), CC && eC(oC), IC.current && (IC.current = !1, pC(!1), rC(CC ? oC : iC))
      }), [oC]);
      const sC = "error" === (null === NC || void 0 === NC ? void 0 : NC.kind) ? NC.message : "noAccount" === (null === NC || void 0 === NC ? void 0 : NC.kind) ? zC("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, RC.jsxs)("div", {
          className: "OnboardingNameField",
          ref: EC,
          children: [(0, RC.jsx)("div", {
            className: "OnboardingSubtitle",
            children: zC("general:name")
          }), null === iC && (0, RC.jsx)(mC.d, {}), null !== iC && (0, RC.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, RC.jsx)(HC.c, {
              className: "OnboardingNameInput",
              ariaLabel: zC("general:name"),
              maxLength: KC.i,
              defaultValue: iC,
              domRef: qC,
              forcedText: gC ? iC : null,
              onEnter: () => {
                var CC;
                null === (CC = qC.current) || void 0 === CC || CC.blur()
              },
              onValueChange: CC => {
                const ZC = (0, KC.q)(CC);
                ZC !== CC && qC.current && (qC.current.value = ZC), MC(ZC !== CC ? {
                  kind: "error",
                  message: zC("homePage:nameCharacters")
                } : null), ZC !== iC && (AC.current = "changed"), WC(ZC)
              }
            }), (0, RC.jsx)(nC.g, {
              className: "OnboardingRandomName",
              ariaLabel: zC("homePage:onboardingRandomName"),
              disabled: gC,
              onClick: () => {
                (() => {
                  if (MC(null), null === oC || ZC.isLoggedIn()) return eC((0, KC.e)()), void(AC.current = "rolled");
                  lC((0, dC.i)(ZC), (CC => {
                    var zC, QC;
                    if ("refused" === CC.outcome || "failed" === CC.outcome) return eC(ZC.getPlayerName()), AC.current = null !== (zC = null === (QC = vC.current) || void 0 === QC ? void 0 : QC.outcome) && void 0 !== zC ? zC : "lM", void MC({
                      kind: "error",
                      message: cC(CC)
                    });
                    AC.current = "rolled", vC.current = {
                      name: CC.name,
                      outcome: "rolled"
                    }, eC(CC.name)
                  }))
                })()
              },
              children: (0, RC.jsx)(SC.c, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === NC || void 0 === NC ? void 0 : NC.kind) && (0, RC.jsx)("div", {
            className: "OnboardingNameNote",
            children: zC("homePage:onboardingNameSuffixed", {
              taken: NC.taken,
              name: NC.name
            })
          }), null !== sC && (0, RC.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: sC
          })]
        }),
        submit: () => {
          if (!gC && null !== iC) {
            if (null === oC) {
              if (uC(iC)) return;
              return hC.current = document.activeElement === qC.current, IC.current = !0, pC(!0), void MC(null)
            }
            rC(iC)
          }
        },
        busy: gC,
        ready: null !== iC
      }
    }

    function lC() {
      const CC = {
        finished: !1
      };
      bC.NotificationProvider.showCustomPopup({
        body: zC => (0, RC.jsx)(XC, {
          onFinish: () => {
            (0, fC.e)(), CC.finished = !0, zC()
          }
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        ignoreBackgroundPress: !0,
        onClose: () => {
          CC.finished || (0, fC.d)()
        }
      })
    }

    function XC(CC) {
      let {
        onFinish: zC
      } = CC;
      const {
        t: ZC
      } = (0, wC.y)(), bC = EC(zC);
      return (0, QC.useEffect)((() => {
        (0, fC.o)()
      }), []), (0, RC.jsxs)("div", {
        className: "Onboarding",
        children: [(0, RC.jsx)("div", {
          className: "OnboardingTitle",
          children: ZC("homePage:onboardingTitle")
        }), (0, RC.jsxs)("div", {
          className: "OnboardingBody",
          children: [bC.field, (0, RC.jsx)(hC, {})]
        }), (0, RC.jsx)("div", {
          className: "OnboardingFooter",
          children: (0, RC.jsx)(nC.o, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: bC.busy,
            disabled: !bC.ready,
            onClick: bC.submit,
            children: ZC("homePage:onboardingDone")
          })
        })]
      })
    }
  },
  36271: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC
    });
    var QC = ZC(1840),
      wC = ZC(1439);
    const bC = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(CC, zC) {
        CC !== this.userContext && this.sendHeld(), this.userContext = CC;
        for (const [QC, wC] of zC) this.pending.set(QC, wC);
        if (null !== this.timer) return;
        const ZC = this.lastSentAt + 1100 - Date.now();
        ZC <= 0 ? this.send(CC) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), ZC), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(CC) {
        const zC = Array.from(this.pending, (CC => {
          let [zC, ZC] = CC;
          return {
            JQ: zC,
            IQ: ZC
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), wC.d.updateCosmetics(CC, zC).catch((CC => {
          console.error("Failed to update cosmetics", CC)
        }))
      }
    };

    function nC(CC, zC) {
      for (const [ZC, QC] of zC) CC.setPlayerCosmetics(ZC, QC);
      if (null === QC.gameBridge.latest("connectedGame").websocketUrl) bC.save(CC, zC);
      else
        for (const [ZC, wC] of zC) QC.gameBridge.send("updateMyCosmetic", {
          JQ: ZC,
          IQ: wC
        })
    }
  },
  34053: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => GC,
      e: () => qC,
      h: () => SC,
      i: () => gC
    });
    var QC = ZC(134),
      wC = ZC(1211),
      bC = ZC(1149),
      nC = ZC(1078),
      fC = ZC(1642);
    const oC = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function qC(CC) {
      return oC[CC]
    }

    function FC(CC) {
      return (0, fC.c)(CC) ? "outdated" : CC instanceof QC.d ? 429 === CC.httpCode ? "busy" : "server" : "offline"
    }

    function WC(CC, zC, ZC) {
      return (0, nC.postJsonWithMetricsCookiesAndJsonResponse)(`${bC.clientSideServerUrls.indexUrl}${zC}`, ZC, {
        retries: 3
      }, CC.getMetricsCookies()).catch((CC => (console.error("Bad response from the server when trying to change name:", zC, CC), {
        outcome: "failed",
        failure: FC(CC)
      })))
    }

    function NC(CC) {
      return "outcome" in CC && "failed" === CC.outcome
    }

    function MC(CC) {
      return console.error("Error when trying to get with new name from DB", CC), {
        outcome: "refused",
        message: CC
      }
    }
    async function gC(CC) {
      const zC = await WC(CC, "/index/name/random", {});
      return NC(zC) ? zC : "err" in zC ? MC(zC.err) : (CC.setPlayerName(zC.name), {
        outcome: "changed",
        name: zC.name
      })
    }
    async function SC(CC, zC) {
      const ZC = await WC(CC, "/index/name/update", {
        name: zC
      });
      return NC(ZC) ? ZC : "err" in ZC ? MC(ZC.err) : ZC.nameExists ? {
        outcome: "taken"
      } : (CC.setPlayerName(zC), {
        outcome: "changed",
        name: zC
      })
    }

    function pC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const QC = 1 === zC ? 1 : 10 ** (zC - 1),
        bC = String(QC + Math.floor(ZC() * (10 ** zC - QC)));
      return `${CC.slice(0,wC.i-zC)}${bC}`
    }
    const PC = [1, 2, 3, 4];
    async function GC(CC, zC) {
      const ZC = await SC(CC, zC);
      if ("taken" !== ZC.outcome) return ZC;
      for (const QC of PC) {
        const ZC = pC(zC, QC),
          wC = await SC(CC, ZC);
        if ("taken" !== wC.outcome) return wC
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);
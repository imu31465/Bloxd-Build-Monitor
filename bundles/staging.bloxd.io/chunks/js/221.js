export const id = 221;
export const ids = [221];
export const modules = {
  37442: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      isMoreOptionsInFooter: () => IR,
      showOnboardingPopup: () => mR
    });
    var yR = GR(66),
      tR = GR(1270),
      uR = GR(1493),
      ZR = GR(1590),
      qR = GR(1187),
      iR = GR(5096),
      fR = GR(1718),
      VR = GR(377),
      KR = GR(1716),
      wR = GR(3178),
      rR = GR(1163),
      eR = GR.n(rR),
      aR = GR(1201),
      LR = GR(37444),
      nR = GR(3361),
      UR = GR(4829),
      WR = GR(1196),
      AR = GR(1468),
      CR = GR(1378);
    const XR = "OnboardingMorePanel";

    function MR(RR) {
      let {
        open: JR,
        onToggle: GR
      } = RR;
      const {
        t: yR
      } = (0, tR.A)();
      return (0, CR.jsxs)("button", {
        type: "button",
        className: "OnboardingMoreOptions",
        "aria-expanded": JR,
        "aria-controls": JR ? XR : void 0,
        onClick: () => {
          JR || (0, iR.l)("more"), GR()
        },
        children: [yR("homePage:onboardingMoreOptions"), (0, CR.jsx)(AR.d, {
          name: JR ? "caret-up" : "caret-down"
        })]
      })
    }
    const BR = Object.entries(fR.b).filter((RR => {
      let [, JR] = RR;
      return "default" === JR.cosmeticPack
    }));

    function lR(RR) {
      return KR.b.default.colourGroups[RR].colours.map(((RR, JR) => {
        let {
          rbg: GR,
          order: yR
        } = RR;
        return {
          rbg: GR,
          order: yR,
          index: JR
        }
      })).sort(((RR, JR) => RR.order - JR.order))
    }
    const pR = lR("eyes"),
      gR = lR("skin");

    function bR(RR, JR) {
      var GR;
      if (void 0 === JR || "default" !== (null === (GR = (0, wR.m)(RR, JR)) || void 0 === GR ? void 0 : GR.cosmeticPack)) return null;
      const yR = (0, wR.i)(JR);
      return yR && [yR[0], Number(yR[1])]
    }

    function vR(RR, JR, GR) {
      return `${RR}_${JR}_${GR}`
    }

    function OR(RR) {
      let {
        label: JR,
        colours: GR,
        picked: yR,
        onPick: uR
      } = RR;
      const {
        t: ZR
      } = (0, tR.A)();
      return (0, CR.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, CR.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: JR
        }), (0, CR.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": JR,
          children: GR.map(((RR, JR) => {
            let {
              rbg: GR,
              index: tR
            } = RR;
            return (0, CR.jsx)("button", {
              type: "button",
              className: eR()("OnboardingSwatch", {
                OnboardingSwatchSelected: tR === yR
              }),
              style: {
                backgroundColor: `rgb(${GR.join(",")})`
              },
              role: "radio",
              "aria-checked": tR === yR,
              "aria-label": ZR("homePage:onboardingColour", {
                number: JR + 1
              }),
              onClick: () => {
                uR(tR)
              }
            }, tR)
          }))
        })]
      })
    }

    function xR(RR) {
      let {
        moreOptions: JR,
        onToggleMoreOptions: GR,
        moreOptionsBelowPresets: uR
      } = RR;
      const {
        t: ZR
      } = (0, tR.A)(), {
        userContext: qR,
        isUserContextUpdating: fR
      } = (0, WR.d)(), [, KR] = (0, yR.useReducer)((RR => RR + 1), 0), wR = (0, yR.useRef)({}), rR = (0, yR.useRef)(null), AR = (0, yR.useRef)({}), lR = (0, UR.d)(), xR = {
        ...qR.getPlayerCosmetics(),
        ...rR.current
      }, NR = (0, yR.useRef)(null);
      (0, yR.useEffect)((() => {
        var RR;
        JR && (null === (RR = NR.current) || void 0 === RR || RR.scrollIntoView({
          block: "nearest"
        }))
      }), [JR]);
      const DR = (RR, JR) => {
          (0, LR.e)(RR, Object.entries(JR)), lR.current ? KR() : RR.publishUpdateIfCurrent()
        },
        HR = function(RR) {
          let {
            isDefault: JR = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const GR = {
            ...!fR && qR.isLoggedIn() ? AR.current : rR.current,
            ...RR
          };
          if (!fR) return rR.current = null, AR.current = {}, void DR(qR, GR);
          rR.current = GR, JR || (AR.current = {
            ...AR.current,
            ...RR
          }), KR(), aR.userContextManager.getCurrentUserContext().then((RR => {
            if (rR.current !== GR) return;
            rR.current = null;
            const JR = AR.current;
            AR.current = {};
            const yR = RR.isLoggedIn() ? JR : GR;
            0 !== Object.keys(yR).length ? DR(RR, yR) : lR.current && KR()
          })).catch((RR => {
            console.warn("Couldn't put on the onboarding look held for the account", RR), rR.current === GR && (rR.current = null, AR.current = {}, lR.current && KR())
          }))
        },
        oR = (0, yR.useRef)(!1);
      (0, yR.useEffect)((() => {
        oR.current || (oR.current = !0, !fR && qR.isLoggedIn() || HR((0, VR.ec)(BR)[1].cosmetics, {
          isDefault: !0
        }))
      }), []), (0, yR.useEffect)((() => () => {
        qR.publishUpdateIfCurrent()
      }), [qR]);
      const cR = bR("eyes", xR.eyes),
        PR = bR("skin", xR.skin);
      return (0, CR.jsxs)(CR.Fragment, {
        children: [(0, CR.jsx)("div", {
          className: "OnboardingPresets",
          children: BR.map(((RR, JR) => {
            let [GR, {
              cosmetics: yR
            }] = RR;
            const tR = function(RR, JR) {
              return Object.entries(JR).every((JR => {
                let [GR, yR] = JR;
                return "skin" === GR || ("eyes" === GR ? (null === (tR = bR("eyes", RR.eyes)) || void 0 === tR ? void 0 : tR[0]) === (null === (uR = bR("eyes", yR)) || void 0 === uR ? void 0 : uR[0]) : RR[GR] === yR);
                var tR, uR
              }))
            }(xR, yR);
            return (0, CR.jsx)("button", {
              type: "button",
              className: eR()("OnboardingPreset", {
                OnboardingPresetSelected: tR
              }),
              "aria-label": ZR("homePage:onboardingPreset", {
                number: JR + 1
              }),
              "aria-pressed": tR,
              onClick: () => {
                (0, iR.l)(`preset.${GR}`);
                const {
                  eyes: RR,
                  skin: JR
                } = wR.current;
                HR({
                  ...yR,
                  ...void 0 !== RR && {
                    eyes: vR("eyes", bR("eyes", yR.eyes)[0], RR)
                  },
                  ...void 0 !== JR && {
                    skin: vR("skin", "0", JR)
                  }
                })
              },
              children: (0, CR.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${GR}_preview.png)`
                }
              })
            }, GR)
          }))
        }), uR && (0, CR.jsx)(MR, {
          open: JR,
          onToggle: GR
        }), JR && (0, CR.jsxs)("div", {
          ref: NR,
          id: XR,
          className: "OnboardingMore",
          children: [(0, CR.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, CR.jsx)(nR.c, {
              cosmetics: xR
            })
          }), (0, CR.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, CR.jsx)(OR, {
              label: ZR("homePage:onboardingEyeColour"),
              colours: pR,
              picked: null === cR || void 0 === cR ? void 0 : cR[1],
              onPick: RR => {
                var JR;
                (0, iR.l)("eyes"), wR.current.eyes = RR, HR({
                  eyes: vR("eyes", null !== (JR = null === cR || void 0 === cR ? void 0 : cR[0]) && void 0 !== JR ? JR : "0", RR)
                })
              }
            }), (0, CR.jsx)(OR, {
              label: ZR("homePage:onboardingSkinColour"),
              colours: gR,
              picked: null === PR || void 0 === PR ? void 0 : PR[1],
              onPick: RR => {
                (0, iR.l)("skin"), wR.current.skin = RR, HR({
                  skin: vR("skin", "0", RR)
                })
              }
            })]
          })]
        })]
      })
    }
    var NR = GR(1359),
      DR = GR(25),
      HR = GR(35035),
      oR = GR(1465),
      cR = GR(1867);

    function PR(RR) {
      const {
        t: JR
      } = (0, tR.A)(), {
        userContext: GR,
        isUserContextUpdating: uR
      } = (0, WR.d)(), qR = uR ? null : GR.getPlayerName(), fR = (0, yR.useRef)(null), [VR, KR] = (0, yR.useState)((() => null === qR ? (0, NR.g)() : null)), [wR, rR] = (0, yR.useState)(null), [eR, aR] = (0, yR.useState)(!1), LR = (0, yR.useRef)("tK"), nR = (0, UR.d)(), XR = (0, yR.useRef)(null !== VR), MR = (0, yR.useRef)(!1), BR = (0, yR.useRef)(null), lR = null !== VR && void 0 !== VR ? VR : qR, pR = (0, yR.useRef)(null), gR = RR => {
        fR.current && (fR.current.value = RR), KR(RR)
      }, bR = (0, yR.useRef)(!1);
      (0, yR.useEffect)((() => {
        var RR, JR;
        !eR && bR.current && (bR.current = !1, null === (RR = fR.current) || void 0 === RR || RR.focus(), null === (JR = fR.current) || void 0 === JR || JR.select())
      }), [eR]);
      const vR = (0, yR.useRef)(null);
      (0, yR.useEffect)((() => {
        var RR;
        null !== wR && (null === (RR = vR.current) || void 0 === RR || RR.scrollIntoView({
          block: "nearest"
        }))
      }), [wR]);
      const OR = (RR, JR) => {
        const GR = document.activeElement === fR.current || bR.current;
        aR(!0), rR(null), RR.then((RR => {
          nR.current && (aR(!1), bR.current = GR, JR(RR))
        }))
      };
      (0, yR.useEffect)((() => {
        var RR, JR;
        DR.d.get("isTouchScreen") || (null === (RR = fR.current) || void 0 === RR || RR.focus(), null === (JR = fR.current) || void 0 === JR || JR.select())
      }), []);
      const xR = () => {
          (0, iR.o)(LR.current), RR()
        },
        PR = (RR, JR) => {
          var GR, yR;
          if (BR.current === RR) return LR.current = null !== (GR = null === (yR = pR.current) || void 0 === yR ? void 0 : yR.outcome) && void 0 !== GR ? GR : "tK", void xR();
          BR.current = RR, rR(JR)
        },
        IR = RR => "refused" === RR.outcome ? RR.message : JR((0, HR.e)(RR.failure)),
        mR = RR => !(RR.length >= NR.j) && (rR({
          kind: "error",
          message: JR("homePage:changeNameMinLengthError", {
            length: NR.j
          })
        }), !0),
        zR = RR => {
          var yR, tR, uR;
          RR.toLowerCase() !== (null === (yR = null !== (tR = null === (uR = pR.current) || void 0 === uR ? void 0 : uR.name) && void 0 !== tR ? tR : qR) || void 0 === yR ? void 0 : yR.toLowerCase()) ? mR(RR) || OR((0, HR.c)(GR, RR), (GR => {
            "taken" !== GR.outcome ? "refused" !== GR.outcome && "failed" !== GR.outcome ? GR.name !== RR ? (LR.current = "suffixed", pR.current = {
              name: GR.name,
              outcome: LR.current
            }, gR(GR.name), rR({
              kind: "suffixed",
              taken: RR,
              name: GR.name
            })) : xR() : PR(RR, {
              kind: "error",
              message: IR(GR)
            }) : PR(RR, {
              kind: "error",
              message: JR("homePage:onboardingNameAllTaken")
            })
          })) : xR()
        };
      (0, yR.useEffect)((() => {
        if (!eR || null !== qR || !MR.current) return;
        const RR = setTimeout((() => {
          MR.current = !1, aR(!1), PR(lR, {
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(RR)
        }
      }), [eR, qR]), (0, yR.useEffect)((() => {
        if (null === qR) return;
        const RR = XR.current && "tK" === LR.current && GR.isLoggedIn();
        XR.current = !1, BR.current = null, "noAccount" === (null === wR || void 0 === wR ? void 0 : wR.kind) && rR(null), RR && gR(qR), MR.current && (MR.current = !1, aR(!1), zR(RR ? qR : lR))
      }), [qR]);
      const SR = "error" === (null === wR || void 0 === wR ? void 0 : wR.kind) ? wR.message : "noAccount" === (null === wR || void 0 === wR ? void 0 : wR.kind) ? JR("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, CR.jsxs)("div", {
          className: "OnboardingNameField",
          ref: vR,
          children: [(0, CR.jsx)("div", {
            className: "OnboardingSubtitle",
            children: JR("general:name")
          }), null === lR && (0, CR.jsx)(oR.d, {}), null !== lR && (0, CR.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, CR.jsx)(cR.b, {
              className: "OnboardingNameInput",
              ariaLabel: JR("general:name"),
              maxLength: NR.i,
              defaultValue: lR,
              domRef: fR,
              forcedText: eR ? lR : null,
              onEnter: () => {
                var RR;
                null === (RR = fR.current) || void 0 === RR || RR.blur()
              },
              onValueChange: RR => {
                const GR = (0, NR.q)(RR);
                GR !== RR && fR.current && (fR.current.value = GR), rR(GR !== RR ? {
                  kind: "error",
                  message: JR("homePage:nameCharacters")
                } : null), GR !== lR && (LR.current = "changed"), KR(GR)
              }
            }), (0, CR.jsx)(ZR.g, {
              className: "OnboardingRandomName",
              ariaLabel: JR("homePage:onboardingRandomName"),
              disabled: eR,
              onClick: () => {
                (() => {
                  if (rR(null), null === qR || GR.isLoggedIn()) return gR((0, NR.g)()), void(LR.current = "rolled");
                  OR((0, HR.j)(GR), (RR => {
                    var JR, yR;
                    if ("refused" === RR.outcome || "failed" === RR.outcome) return gR(GR.getPlayerName()), LR.current = null !== (JR = null === (yR = pR.current) || void 0 === yR ? void 0 : yR.outcome) && void 0 !== JR ? JR : "tK", void rR({
                      kind: "error",
                      message: IR(RR)
                    });
                    LR.current = "rolled", pR.current = {
                      name: RR.name,
                      outcome: "rolled"
                    }, gR(RR.name)
                  }))
                })()
              },
              children: (0, CR.jsx)(AR.d, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === wR || void 0 === wR ? void 0 : wR.kind) && (0, CR.jsx)("div", {
            className: "OnboardingNameNote",
            children: JR("homePage:onboardingNameSuffixed", {
              taken: wR.taken,
              name: wR.name
            })
          }), null !== SR && (0, CR.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: SR
          })]
        }),
        submit: () => {
          if (!eR && null !== lR) {
            if (null === qR) {
              if (mR(lR)) return;
              return bR.current = document.activeElement === fR.current, MR.current = !0, aR(!0), void rR(null)
            }
            zR(lR)
          }
        },
        busy: eR,
        ready: null !== lR
      }
    }

    function IR(RR) {
      return RR < 500
    }

    function mR() {
      const RR = {
          finished: !1
        },
        JR = {
          press: null
        };
      return uR.NotificationProvider.showCustomPopup({
        body: GR => (0, CR.jsx)(zR, {
          onFinish: () => {
            (0, iR.j)(), RR.finished = !0, GR()
          },
          doneRef: JR
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        disableExitButton: !0,
        ignoreBackgroundPress: !0,
        dismiss: () => {
          var RR;
          null === (RR = JR.press) || void 0 === RR || RR.call(JR)
        },
        onClose: () => {
          RR.finished || (0, iR.h)()
        }
      })
    }

    function zR(RR) {
      let {
        onFinish: JR,
        doneRef: GR
      } = RR;
      const {
        t: uR
      } = (0, tR.A)(), fR = PR(JR), VR = fR.ready && !fR.busy ? fR.submit : null;
      (0, yR.useEffect)((() => (GR.press = VR, () => {
        GR.press = null
      })));
      const [KR, wR] = (0, yR.useState)(!1), rR = (0, qR.o)(((RR, JR) => IR(JR))), eR = () => {
        wR(!KR)
      };
      return (0, yR.useEffect)((() => {
        (0, iR.q)()
      }), []), (0, CR.jsxs)("div", {
        className: "Onboarding",
        children: [(0, CR.jsx)("div", {
          className: "OnboardingTitle",
          children: uR("homePage:onboardingTitle")
        }), (0, CR.jsxs)("div", {
          className: "OnboardingBody",
          children: [fR.field, (0, CR.jsx)(xR, {
            moreOptions: KR,
            onToggleMoreOptions: eR,
            moreOptionsBelowPresets: !rR
          })]
        }), (0, CR.jsxs)("div", {
          className: "OnboardingFooter",
          children: [rR && (0, CR.jsx)(MR, {
            open: KR,
            onToggle: eR
          }), (0, CR.jsx)(ZR.n, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: fR.busy,
            disabled: !fR.ready,
            onClick: fR.submit,
            children: uR("homePage:onboardingDone")
          })]
        })]
      })
    }
  },
  37444: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => ZR
    });
    var yR = GR(2134),
      tR = GR(1647);
    const uR = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(RR, JR) {
        RR !== this.userContext && this.sendHeld(), this.userContext = RR;
        for (const [yR, tR] of JR) this.pending.set(yR, tR);
        if (null !== this.timer) return;
        const GR = this.lastSentAt + 1100 - Date.now();
        GR <= 0 ? this.send(RR) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), GR), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(RR) {
        const JR = Array.from(this.pending, (RR => {
          let [JR, GR] = RR;
          return {
            ft: JR,
            Vt: GR
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), tR.c.updateCosmetics(RR, JR).catch((RR => {
          console.error("Failed to update cosmetics", RR)
        }))
      }
    };

    function ZR(RR, JR) {
      for (const [GR, yR] of JR) RR.setPlayerCosmetics(GR, yR);
      if (null === yR.gameBridge.latest("connectedGame").websocketUrl) uR.save(RR, JR);
      else
        for (const [GR, tR] of JR) yR.gameBridge.send("updateMyCosmetic", {
          ft: GR,
          Vt: tR
        })
    }
  },
  35035: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => UR,
      e: () => fR,
      f: () => aR,
      j: () => eR
    });
    var yR = GR(163),
      tR = GR(1359),
      uR = GR(1282),
      ZR = GR(1201),
      qR = GR(1939);
    const iR = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function fR(RR) {
      return iR[RR]
    }

    function VR(RR) {
      return (0, qR.b)(RR) ? "outdated" : RR instanceof yR.d ? 429 === RR.httpCode ? "busy" : "server" : "offline"
    }

    function KR(RR, JR, GR) {
      return (0, ZR.postJsonWithMetricsCookiesAndJsonResponse)(`${uR.clientSideServerUrls.indexUrl}${JR}`, GR, {
        retries: 3
      }, RR.getMetricsCookies()).catch((RR => (console.error("Bad response from the server when trying to change name:", JR, RR), {
        outcome: "failed",
        failure: VR(RR)
      })))
    }

    function wR(RR) {
      return "outcome" in RR && "failed" === RR.outcome
    }

    function rR(RR) {
      return console.error("Error when trying to get with new name from DB", RR), {
        outcome: "refused",
        message: RR
      }
    }
    async function eR(RR) {
      const JR = await KR(RR, "/index/name/random", {});
      return wR(JR) ? JR : "err" in JR ? rR(JR.err) : (RR.setPlayerName(JR.name), {
        outcome: "changed",
        name: JR.name
      })
    }
    async function aR(RR, JR) {
      const GR = await KR(RR, "/index/name/update", {
        name: JR
      });
      return wR(GR) ? GR : "err" in GR ? rR(GR.err) : GR.nameExists ? {
        outcome: "taken"
      } : (RR.setPlayerName(JR), {
        outcome: "changed",
        name: JR
      })
    }

    function LR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const yR = 1 === JR ? 1 : 10 ** (JR - 1),
        uR = String(yR + Math.floor(GR() * (10 ** JR - yR)));
      return `${RR.slice(0,tR.i-JR)}${uR}`
    }
    const nR = [1, 2, 3, 4];
    async function UR(RR, JR) {
      const GR = await aR(RR, JR);
      if ("taken" !== GR.outcome) return GR;
      for (const yR of nR) {
        const GR = LR(JR, yR),
          tR = await aR(RR, GR);
        if ("taken" !== tR.outcome) return tR
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);
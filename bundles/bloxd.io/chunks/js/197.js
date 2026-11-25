export const id = 197;
export const ids = [197];
export const modules = {
  36618: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      showOnboardingPopup: () => Ft
    });
    var Ot = Vt(63),
      qt = Vt(1286),
      Dt = Vt(1450),
      mt = Vt(1556),
      dt = Vt(4430),
      jt = Vt(1657),
      Ht = Vt(1652),
      Xt = Vt(2290),
      Qt = Vt(1140),
      lt = Vt.n(Qt),
      Et = Vt(1223),
      ft = Vt(36623),
      wt = Vt(1152),
      yt = Vt(2435),
      Nt = Vt(3555),
      Mt = Vt(1218),
      bt = Vt(1188);
    const Jt = Object.entries(jt.d).filter((tt => {
      let [, et] = tt;
      return "default" === et.cosmeticPack
    }));

    function Ct(tt) {
      return Ht.d.default.colourGroups[tt].colours.map(((tt, et) => {
        let {
          rbg: Vt,
          order: Ot
        } = tt;
        return {
          rbg: Vt,
          order: Ot,
          index: et
        }
      })).sort(((tt, et) => tt.order - et.order))
    }
    const ut = Ct("eyes"),
      Kt = Ct("skin");

    function ht(tt, et) {
      var Vt;
      if (void 0 === et || "default" !== (null === (Vt = (0, Xt.n)(tt, et)) || void 0 === Vt ? void 0 : Vt.cosmeticPack)) return null;
      const Ot = (0, Xt.j)(et);
      return Ot && [Ot[0], Number(Ot[1])]
    }

    function vt(tt, et, Vt) {
      return `${tt}_${et}_${Vt}`
    }

    function Wt(tt) {
      let {
        label: et,
        colours: Vt,
        picked: Ot,
        onPick: Dt
      } = tt;
      const {
        t: mt
      } = (0, qt.H)();
      return (0, bt.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, bt.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: et
        }), (0, bt.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": et,
          children: Vt.map(((tt, et) => {
            let {
              rbg: Vt,
              index: qt
            } = tt;
            return (0, bt.jsx)("button", {
              type: "button",
              className: lt()("OnboardingSwatch", {
                OnboardingSwatchSelected: qt === Ot
              }),
              style: {
                backgroundColor: `rgb(${Vt.join(",")})`
              },
              role: "radio",
              "aria-checked": qt === Ot,
              "aria-label": mt("homePage:onboardingColour", {
                number: et + 1
              }),
              onClick: () => {
                Dt(qt)
              }
            }, qt)
          }))
        })]
      })
    }

    function St() {
      const {
        t: tt
      } = (0, qt.H)(), {
        userContext: et,
        isUserContextUpdating: Vt
      } = (0, Mt.d)(), [Dt, mt] = (0, Ot.useState)(!1), [, jt] = (0, Ot.useReducer)((tt => tt + 1), 0), Ht = (0, Ot.useRef)({}), Xt = (0, Ot.useRef)(null), Qt = (0, Nt.b)(), Ct = {
        ...et.getPlayerCosmetics(),
        ...Xt.current
      }, St = (0, Ot.useRef)(null);
      (0, Ot.useEffect)((() => {
        var tt;
        Dt && (null === (tt = St.current) || void 0 === tt || tt.scrollIntoView({
          block: "nearest"
        }))
      }), [Dt]);
      const ct = (tt, et) => {
          (0, ft.b)(tt, Object.entries(et)), Qt.current ? jt() : tt.publishUpdateIfCurrent()
        },
        Rt = tt => {
          const Ot = {
            ...Xt.current,
            ...tt
          };
          if (!Vt) return Xt.current = null, void ct(et, Ot);
          Xt.current = Ot, jt(), Et.userContextManager.getCurrentUserContext().then((tt => {
            Xt.current === Ot && (Xt.current = null, ct(tt, Ot))
          })).catch((tt => {
            console.warn("Couldn't put on the onboarding look held for the account", tt), Xt.current === Ot && (Xt.current = null, Qt.current && jt())
          }))
        };
      (0, Ot.useEffect)((() => () => {
        et.publishUpdateIfCurrent()
      }), [et]);
      const It = ht("eyes", Ct.eyes),
        Pt = ht("skin", Ct.skin);
      return (0, bt.jsxs)(bt.Fragment, {
        children: [(0, bt.jsx)("div", {
          className: "OnboardingPresets",
          children: Jt.map(((et, Vt) => {
            let [Ot, {
              cosmetics: qt
            }] = et;
            const Dt = function(tt, et) {
              return Object.entries(et).every((et => {
                let [Vt, Ot] = et;
                return "skin" === Vt || ("eyes" === Vt ? (null === (qt = ht("eyes", tt.eyes)) || void 0 === qt ? void 0 : qt[0]) === (null === (Dt = ht("eyes", Ot)) || void 0 === Dt ? void 0 : Dt[0]) : tt[Vt] === Ot);
                var qt, Dt
              }))
            }(Ct, qt);
            return (0, bt.jsx)("button", {
              type: "button",
              className: lt()("OnboardingPreset", {
                OnboardingPresetSelected: Dt
              }),
              "aria-label": tt("homePage:onboardingPreset", {
                number: Vt + 1
              }),
              "aria-pressed": Dt,
              onClick: () => {
                (0, dt.j)(`preset.${Ot}`);
                const {
                  eyes: tt,
                  skin: et
                } = Ht.current;
                Rt({
                  ...qt,
                  ...void 0 !== tt && {
                    eyes: vt("eyes", ht("eyes", qt.eyes)[0], tt)
                  },
                  ...void 0 !== et && {
                    skin: vt("skin", "0", et)
                  }
                })
              },
              children: (0, bt.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${Ot}_preview.png)`
                }
              })
            }, Ot)
          }))
        }), (0, bt.jsxs)("button", {
          type: "button",
          className: "OnboardingMoreOptions",
          "aria-expanded": Dt,
          onClick: () => {
            Dt || (0, dt.j)("more"), mt(!Dt)
          },
          children: [tt("homePage:onboardingMoreOptions"), (0, bt.jsx)(wt.b, {
            name: Dt ? "caret-up" : "caret-down"
          })]
        }), Dt && (0, bt.jsxs)("div", {
          ref: St,
          className: "OnboardingMore",
          children: [(0, bt.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, bt.jsx)(yt.c, {
              cosmetics: Ct
            })
          }), (0, bt.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, bt.jsx)(Wt, {
              label: tt("homePage:onboardingEyeColour"),
              colours: ut,
              picked: null === It || void 0 === It ? void 0 : It[1],
              onPick: tt => {
                var et;
                (0, dt.j)("eyes"), Ht.current.eyes = tt, Rt({
                  eyes: vt("eyes", null !== (et = null === It || void 0 === It ? void 0 : It[0]) && void 0 !== et ? et : "0", tt)
                })
              }
            }), (0, bt.jsx)(Wt, {
              label: tt("homePage:onboardingSkinColour"),
              colours: Kt,
              picked: null === Pt || void 0 === Pt ? void 0 : Pt[1],
              onPick: tt => {
                (0, dt.j)("skin"), Ht.current.skin = tt, Rt({
                  skin: vt("skin", "0", tt)
                })
              }
            })]
          })]
        })]
      })
    }
    var ct = Vt(1363),
      Rt = Vt(26),
      It = Vt(34272),
      Pt = Vt(1436),
      Zt = Vt(1770);

    function Lt(tt) {
      const {
        t: et
      } = (0, qt.H)(), {
        userContext: Vt,
        isUserContextUpdating: Dt
      } = (0, Mt.d)(), jt = Dt ? null : Vt.getPlayerName(), Ht = (0, Ot.useRef)(null), [Xt, Qt] = (0, Ot.useState)((() => null === jt ? (0, ct.f)() : null)), [lt, Et] = (0, Ot.useState)(null), [ft, yt] = (0, Ot.useState)(!1), Jt = (0, Ot.useRef)("hE"), Ct = (0, Nt.b)(), ut = (0, Ot.useRef)(null !== Xt), Kt = (0, Ot.useRef)(!1), ht = null !== Xt && void 0 !== Xt ? Xt : jt, vt = (0, Ot.useRef)(null), Wt = tt => {
        Ht.current && (Ht.current.value = tt), Qt(tt)
      }, St = (0, Ot.useRef)(!1);
      (0, Ot.useEffect)((() => {
        var tt, et;
        !ft && St.current && (St.current = !1, null === (tt = Ht.current) || void 0 === tt || tt.focus(), null === (et = Ht.current) || void 0 === et || et.select())
      }), [ft]);
      const Lt = (0, Ot.useRef)(null);
      (0, Ot.useEffect)((() => {
        var tt;
        null !== lt && (null === (tt = Lt.current) || void 0 === tt || tt.scrollIntoView({
          block: "nearest"
        }))
      }), [lt]);
      const Ft = (tt, et) => {
        const Vt = document.activeElement === Ht.current || St.current;
        yt(!0), Et(null), tt.then((tt => {
          Ct.current && (yt(!1), St.current = Vt, et(tt))
        }))
      };
      (0, Ot.useEffect)((() => {
        var tt, et;
        Rt.b.get("isTouchScreen") || (null === (tt = Ht.current) || void 0 === tt || tt.focus(), null === (et = Ht.current) || void 0 === et || et.select())
      }), []);
      const kt = () => {
          (0, dt.m)(Jt.current), tt()
        },
        Gt = tt => "refused" === tt.outcome ? tt.message : et((0, It.g)(tt.failure)),
        zt = tt => !(tt.length >= ct.k) && (Et({
          kind: "error",
          message: et("homePage:changeNameMinLengthError", {
            length: ct.k
          })
        }), !0),
        ot = tt => {
          var Ot, qt, Dt;
          tt.toLowerCase() !== (null === (Ot = null !== (qt = null === (Dt = vt.current) || void 0 === Dt ? void 0 : Dt.name) && void 0 !== qt ? qt : jt) || void 0 === Ot ? void 0 : Ot.toLowerCase()) ? zt(tt) || Ft((0, It.d)(Vt, tt), (Vt => {
            "taken" !== Vt.outcome ? "refused" !== Vt.outcome && "failed" !== Vt.outcome ? Vt.name !== tt ? (Jt.current = "suffixed", vt.current = {
              name: Vt.name,
              outcome: Jt.current
            }, Wt(Vt.name), Et({
              kind: "suffixed",
              taken: tt,
              name: Vt.name
            })) : kt() : Et({
              kind: "error",
              message: Gt(Vt)
            }) : Et({
              kind: "error",
              message: et("homePage:onboardingNameAllTaken")
            })
          })) : kt()
        };
      (0, Ot.useEffect)((() => {
        if (!ft || null !== jt || !Kt.current) return;
        const tt = setTimeout((() => {
          Kt.current = !1, yt(!1), Et({
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(tt)
        }
      }), [ft, jt]), (0, Ot.useEffect)((() => {
        if (null === jt) return;
        const tt = ut.current && "hE" === Jt.current && Vt.isLoggedIn();
        ut.current = !1, "noAccount" === (null === lt || void 0 === lt ? void 0 : lt.kind) && Et(null), tt && Wt(jt), Kt.current && (Kt.current = !1, yt(!1), ot(tt ? jt : ht))
      }), [jt]);
      const rt = "error" === (null === lt || void 0 === lt ? void 0 : lt.kind) ? lt.message : "noAccount" === (null === lt || void 0 === lt ? void 0 : lt.kind) ? et("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, bt.jsxs)("div", {
          className: "OnboardingNameField",
          ref: Lt,
          children: [(0, bt.jsx)("div", {
            className: "OnboardingSubtitle",
            children: et("general:name")
          }), null === ht && (0, bt.jsx)(Pt.b, {}), null !== ht && (0, bt.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, bt.jsx)(Zt.d, {
              className: "OnboardingNameInput",
              ariaLabel: et("general:name"),
              maxLength: ct.g,
              defaultValue: ht,
              domRef: Ht,
              forcedText: ft ? ht : null,
              onEnter: () => {
                var tt;
                null === (tt = Ht.current) || void 0 === tt || tt.blur()
              },
              onValueChange: tt => {
                const Vt = (0, ct.n)(tt);
                Vt !== tt && Ht.current && (Ht.current.value = Vt), Et(Vt !== tt ? {
                  kind: "error",
                  message: et("homePage:nameCharacters")
                } : null), Vt !== ht && (Jt.current = "changed"), Qt(Vt)
              }
            }), (0, bt.jsx)(mt.f, {
              className: "OnboardingRandomName",
              ariaLabel: et("homePage:onboardingRandomName"),
              disabled: ft,
              onClick: () => {
                (() => {
                  if (Et(null), null === jt || Vt.isLoggedIn()) return Wt((0, ct.f)()), void(Jt.current = "rolled");
                  Ft((0, It.m)(Vt), (tt => {
                    var et, Ot;
                    if ("refused" === tt.outcome || "failed" === tt.outcome) return Wt(Vt.getPlayerName()), Jt.current = null !== (et = null === (Ot = vt.current) || void 0 === Ot ? void 0 : Ot.outcome) && void 0 !== et ? et : "hE", void Et({
                      kind: "error",
                      message: Gt(tt)
                    });
                    Jt.current = "rolled", vt.current = {
                      name: tt.name,
                      outcome: "rolled"
                    }, Wt(tt.name)
                  }))
                })()
              },
              children: (0, bt.jsx)(wt.b, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === lt || void 0 === lt ? void 0 : lt.kind) && (0, bt.jsx)("div", {
            className: "OnboardingNameNote",
            children: et("homePage:onboardingNameSuffixed", {
              taken: lt.taken,
              name: lt.name
            })
          }), null !== rt && (0, bt.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: rt
          })]
        }),
        submit: () => {
          if (!ft && null !== ht) {
            if (null === jt) {
              if (zt(ht)) return;
              return St.current = document.activeElement === Ht.current, Kt.current = !0, yt(!0), void Et(null)
            }
            ot(ht)
          }
        },
        busy: ft,
        ready: null !== ht
      }
    }

    function Ft() {
      const tt = {
        finished: !1
      };
      return Dt.NotificationProvider.showCustomPopup({
        body: et => (0, bt.jsx)(kt, {
          onFinish: () => {
            (0, dt.g)(), tt.finished = !0, et()
          }
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        ignoreBackgroundPress: !0,
        onClose: () => {
          tt.finished || (0, dt.e)()
        }
      })
    }

    function kt(tt) {
      let {
        onFinish: et
      } = tt;
      const {
        t: Vt
      } = (0, qt.H)(), Dt = Lt(et);
      return (0, Ot.useEffect)((() => {
        (0, dt.o)()
      }), []), (0, bt.jsxs)("div", {
        className: "Onboarding",
        children: [(0, bt.jsx)("div", {
          className: "OnboardingTitle",
          children: Vt("homePage:onboardingTitle")
        }), (0, bt.jsxs)("div", {
          className: "OnboardingBody",
          children: [Dt.field, (0, bt.jsx)(St, {})]
        }), (0, bt.jsx)("div", {
          className: "OnboardingFooter",
          children: (0, bt.jsx)(mt.m, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: Dt.busy,
            disabled: !Dt.ready,
            onClick: Dt.submit,
            children: Vt("homePage:onboardingDone")
          })
        })]
      })
    }
  },
  36623: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => mt
    });
    var Ot = Vt(2024),
      qt = Vt(1600);
    const Dt = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(tt, et) {
        tt !== this.userContext && this.sendHeld(), this.userContext = tt;
        for (const [Ot, qt] of et) this.pending.set(Ot, qt);
        if (null !== this.timer) return;
        const Vt = this.lastSentAt + 1100 - Date.now();
        Vt <= 0 ? this.send(tt) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), Vt), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(tt) {
        const et = Array.from(this.pending, (tt => {
          let [et, Vt] = tt;
          return {
            kD: et,
            GD: Vt
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), qt.e.updateCosmetics(tt, et).catch((tt => {
          console.error("Failed to update cosmetics", tt)
        }))
      }
    };

    function mt(tt, et) {
      for (const [Vt, Ot] of et) tt.setPlayerCosmetics(Vt, Ot);
      if (null === Ot.gameBridge.latest("connectedGame").websocketUrl) Dt.save(tt, et);
      else
        for (const [Vt, qt] of et) Ot.gameBridge.send("updateMyCosmetic", {
          kD: Vt,
          GD: qt
        })
    }
  },
  34272: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Mt,
      g: () => Ht,
      k: () => wt,
      m: () => ft
    });
    var Ot = Vt(184),
      qt = Vt(1363),
      Dt = Vt(1293),
      mt = Vt(1223),
      dt = Vt(1824);
    const jt = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function Ht(tt) {
      return jt[tt]
    }

    function Xt(tt) {
      return (0, dt.e)(tt) ? "outdated" : tt instanceof Ot.e ? 429 === tt.httpCode ? "busy" : "server" : "offline"
    }

    function Qt(tt, et, Vt) {
      return (0, mt.postJsonWithMetricsCookiesAndJsonResponse)(`${Dt.clientSideServerUrls.indexUrl}${et}`, Vt, {
        retries: 3
      }, tt.getMetricsCookies()).catch((tt => (console.error("Bad response from the server when trying to change name:", et, tt), {
        outcome: "failed",
        failure: Xt(tt)
      })))
    }

    function lt(tt) {
      return "outcome" in tt && "failed" === tt.outcome
    }

    function Et(tt) {
      return console.error("Error when trying to get with new name from DB", tt), {
        outcome: "refused",
        message: tt
      }
    }
    async function ft(tt) {
      const et = await Qt(tt, "/index/name/random", {});
      return lt(et) ? et : "err" in et ? Et(et.err) : (tt.setPlayerName(et.name), {
        outcome: "changed",
        name: et.name
      })
    }
    async function wt(tt, et) {
      const Vt = await Qt(tt, "/index/name/update", {
        name: et
      });
      return lt(Vt) ? Vt : "err" in Vt ? Et(Vt.err) : Vt.nameExists ? {
        outcome: "taken"
      } : (tt.setPlayerName(et), {
        outcome: "changed",
        name: et
      })
    }

    function yt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const Ot = 1 === et ? 1 : 10 ** (et - 1),
        Dt = String(Ot + Math.floor(Vt() * (10 ** et - Ot)));
      return `${tt.slice(0,qt.g-et)}${Dt}`
    }
    const Nt = [1, 2, 3, 4];
    async function Mt(tt, et) {
      const Vt = await wt(tt, et);
      if ("taken" !== Vt.outcome) return Vt;
      for (const Ot of Nt) {
        const Vt = yt(et, Ot),
          qt = await wt(tt, Vt);
        if ("taken" !== qt.outcome) return qt
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);
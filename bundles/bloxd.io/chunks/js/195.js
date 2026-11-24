export const id = 195;
export const ids = [195];
export const modules = {
  36461: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      showOnboardingPopup: () => Pm
    });
    var hm = fm(59),
      Am = fm(1208),
      am = fm(1354),
      xm = fm(1454),
      wm = fm(4252),
      Dm = fm(1572),
      im = fm(1563),
      Rm = fm(2208),
      pm = fm(1080),
      Em = fm.n(pm),
      om = fm(1162),
      Om = fm(36470),
      Ym = fm(1089),
      qm = fm(2332),
      jm = fm(3486),
      Vm = fm(1160),
      Im = fm(1135);
    const Km = Object.entries(Dm.e).filter((mm => {
      let [, Tm] = mm;
      return "default" === Tm.cosmeticPack
    }));

    function Qm(mm) {
      return im.b.default.colourGroups[mm].colours.map(((mm, Tm) => {
        let {
          rbg: fm,
          order: hm
        } = mm;
        return {
          rbg: fm,
          order: hm,
          index: Tm
        }
      })).sort(((mm, Tm) => mm.order - Tm.order))
    }
    const nm = Qm("eyes"),
      Jm = Qm("skin");

    function cm(mm, Tm) {
      var fm;
      if (void 0 === Tm || "default" !== (null === (fm = (0, Rm.g)(mm, Tm)) || void 0 === fm ? void 0 : fm.cosmeticPack)) return null;
      const hm = (0, Rm.e)(Tm);
      return hm && [hm[0], Number(hm[1])]
    }

    function zm(mm, Tm, fm) {
      return `${mm}_${Tm}_${fm}`
    }

    function Zm(mm) {
      let {
        label: Tm,
        colours: fm,
        picked: hm,
        onPick: am
      } = mm;
      const {
        t: xm
      } = (0, Am.A)();
      return (0, Im.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, Im.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: Tm
        }), (0, Im.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": Tm,
          children: fm.map(((mm, Tm) => {
            let {
              rbg: fm,
              index: Am
            } = mm;
            return (0, Im.jsx)("button", {
              type: "button",
              className: Em()("OnboardingSwatch", {
                OnboardingSwatchSelected: Am === hm
              }),
              style: {
                backgroundColor: `rgb(${fm.join(",")})`
              },
              role: "radio",
              "aria-checked": Am === hm,
              "aria-label": xm("homePage:onboardingColour", {
                number: Tm + 1
              }),
              onClick: () => {
                am(Am)
              }
            }, Am)
          }))
        })]
      })
    }

    function km() {
      const {
        t: mm
      } = (0, Am.A)(), {
        userContext: Tm,
        isUserContextUpdating: fm
      } = (0, Vm.e)(), [am, xm] = (0, hm.useState)(!1), [, Dm] = (0, hm.useReducer)((mm => mm + 1), 0), im = (0, hm.useRef)({}), Rm = (0, hm.useRef)(null), pm = (0, jm.c)(), Qm = {
        ...Tm.getPlayerCosmetics(),
        ...Rm.current
      }, km = (0, hm.useRef)(null);
      (0, hm.useEffect)((() => {
        var mm;
        am && (null === (mm = km.current) || void 0 === mm || mm.scrollIntoView({
          block: "nearest"
        }))
      }), [am]);
      const bm = (mm, Tm) => {
          (0, Om.c)(mm, Object.entries(Tm)), pm.current ? Dm() : mm.publishUpdateIfCurrent()
        },
        Sm = mm => {
          const hm = {
            ...Rm.current,
            ...mm
          };
          if (!fm) return Rm.current = null, void bm(Tm, hm);
          Rm.current = hm, Dm(), om.userContextManager.getCurrentUserContext().then((mm => {
            Rm.current === hm && (Rm.current = null, bm(mm, hm))
          })).catch((mm => {
            console.warn("Couldn't put on the onboarding look held for the account", mm), Rm.current === hm && (Rm.current = null, pm.current && Dm())
          }))
        };
      (0, hm.useEffect)((() => () => {
        Tm.publishUpdateIfCurrent()
      }), [Tm]);
      const em = cm("eyes", Qm.eyes),
        Nm = cm("skin", Qm.skin);
      return (0, Im.jsxs)(Im.Fragment, {
        children: [(0, Im.jsx)("div", {
          className: "OnboardingPresets",
          children: Km.map(((Tm, fm) => {
            let [hm, {
              cosmetics: Am
            }] = Tm;
            const am = function(mm, Tm) {
              return Object.entries(Tm).every((Tm => {
                let [fm, hm] = Tm;
                return "skin" === fm || ("eyes" === fm ? (null === (Am = cm("eyes", mm.eyes)) || void 0 === Am ? void 0 : Am[0]) === (null === (am = cm("eyes", hm)) || void 0 === am ? void 0 : am[0]) : mm[fm] === hm);
                var Am, am
              }))
            }(Qm, Am);
            return (0, Im.jsx)("button", {
              type: "button",
              className: Em()("OnboardingPreset", {
                OnboardingPresetSelected: am
              }),
              "aria-label": mm("homePage:onboardingPreset", {
                number: fm + 1
              }),
              "aria-pressed": am,
              onClick: () => {
                (0, wm.g)(`preset.${hm}`);
                const {
                  eyes: mm,
                  skin: Tm
                } = im.current;
                Sm({
                  ...Am,
                  ...void 0 !== mm && {
                    eyes: zm("eyes", cm("eyes", Am.eyes)[0], mm)
                  },
                  ...void 0 !== Tm && {
                    skin: zm("skin", "0", Tm)
                  }
                })
              },
              children: (0, Im.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${hm}_preview.png)`
                }
              })
            }, hm)
          }))
        }), (0, Im.jsxs)("button", {
          type: "button",
          className: "OnboardingMoreOptions",
          "aria-expanded": am,
          onClick: () => {
            am || (0, wm.g)("more"), xm(!am)
          },
          children: [mm("homePage:onboardingMoreOptions"), (0, Im.jsx)(Ym.c, {
            name: am ? "caret-up" : "caret-down"
          })]
        }), am && (0, Im.jsxs)("div", {
          ref: km,
          className: "OnboardingMore",
          children: [(0, Im.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, Im.jsx)(qm.d, {
              cosmetics: Qm
            })
          }), (0, Im.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, Im.jsx)(Zm, {
              label: mm("homePage:onboardingEyeColour"),
              colours: nm,
              picked: null === em || void 0 === em ? void 0 : em[1],
              onPick: mm => {
                var Tm;
                (0, wm.g)("eyes"), im.current.eyes = mm, Sm({
                  eyes: zm("eyes", null !== (Tm = null === em || void 0 === em ? void 0 : em[0]) && void 0 !== Tm ? Tm : "0", mm)
                })
              }
            }), (0, Im.jsx)(Zm, {
              label: mm("homePage:onboardingSkinColour"),
              colours: Jm,
              picked: null === Nm || void 0 === Nm ? void 0 : Nm[1],
              onPick: mm => {
                (0, wm.g)("skin"), im.current.skin = mm, Sm({
                  skin: zm("skin", "0", mm)
                })
              }
            })]
          })]
        })]
      })
    }
    var bm = fm(1270),
      Sm = fm(23),
      em = fm(34173),
      Nm = fm(1345),
      Gm = fm(1676);

    function Xm(mm) {
      const {
        t: Tm
      } = (0, Am.A)(), {
        userContext: fm,
        isUserContextUpdating: am
      } = (0, Vm.e)(), Dm = am ? null : fm.getPlayerName(), im = (0, hm.useRef)(null), [Rm, pm] = (0, hm.useState)((() => null === Dm ? (0, bm.g)() : null)), [Em, om] = (0, hm.useState)(null), [Om, qm] = (0, hm.useState)(!1), Km = (0, hm.useRef)("mO"), Qm = (0, jm.c)(), nm = (0, hm.useRef)(null !== Rm), Jm = (0, hm.useRef)(!1), cm = null !== Rm && void 0 !== Rm ? Rm : Dm, zm = (0, hm.useRef)(null), Zm = mm => {
        im.current && (im.current.value = mm), pm(mm)
      }, km = (0, hm.useRef)(!1);
      (0, hm.useEffect)((() => {
        var mm, Tm;
        !Om && km.current && (km.current = !1, null === (mm = im.current) || void 0 === mm || mm.focus(), null === (Tm = im.current) || void 0 === Tm || Tm.select())
      }), [Om]);
      const Xm = (0, hm.useRef)(null);
      (0, hm.useEffect)((() => {
        var mm;
        null !== Em && (null === (mm = Xm.current) || void 0 === mm || mm.scrollIntoView({
          block: "nearest"
        }))
      }), [Em]);
      const Pm = (mm, Tm) => {
        const fm = document.activeElement === im.current || km.current;
        qm(!0), om(null), mm.then((mm => {
          Qm.current && (qm(!1), km.current = fm, Tm(mm))
        }))
      };
      (0, hm.useEffect)((() => {
        var mm, Tm;
        Sm.c.get("isTouchScreen") || (null === (mm = im.current) || void 0 === mm || mm.focus(), null === (Tm = im.current) || void 0 === Tm || Tm.select())
      }), []);
      const Hm = () => {
          (0, wm.h)(Km.current), mm()
        },
        ym = mm => "refused" === mm.outcome ? mm.message : Tm((0, em.e)(mm.failure)),
        Cm = mm => !(mm.length >= bm.m) && (om({
          kind: "error",
          message: Tm("homePage:changeNameMinLengthError", {
            length: bm.m
          })
        }), !0),
        rm = mm => {
          var hm, Am, am;
          mm.toLowerCase() !== (null === (hm = null !== (Am = null === (am = zm.current) || void 0 === am ? void 0 : am.name) && void 0 !== Am ? Am : Dm) || void 0 === hm ? void 0 : hm.toLowerCase()) ? Cm(mm) || Pm((0, em.d)(fm, mm), (fm => {
            "taken" !== fm.outcome ? "refused" !== fm.outcome && "failed" !== fm.outcome ? fm.name !== mm ? (Km.current = "suffixed", zm.current = {
              name: fm.name,
              outcome: Km.current
            }, Zm(fm.name), om({
              kind: "suffixed",
              taken: mm,
              name: fm.name
            })) : Hm() : om({
              kind: "error",
              message: ym(fm)
            }) : om({
              kind: "error",
              message: Tm("homePage:onboardingNameAllTaken")
            })
          })) : Hm()
        };
      (0, hm.useEffect)((() => {
        if (!Om || null !== Dm || !Jm.current) return;
        const mm = setTimeout((() => {
          Jm.current = !1, qm(!1), om({
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(mm)
        }
      }), [Om, Dm]), (0, hm.useEffect)((() => {
        if (null === Dm) return;
        const mm = nm.current && "mO" === Km.current && fm.isLoggedIn();
        nm.current = !1, "noAccount" === (null === Em || void 0 === Em ? void 0 : Em.kind) && om(null), mm && Zm(Dm), Jm.current && (Jm.current = !1, qm(!1), rm(mm ? Dm : cm))
      }), [Dm]);
      const sm = "error" === (null === Em || void 0 === Em ? void 0 : Em.kind) ? Em.message : "noAccount" === (null === Em || void 0 === Em ? void 0 : Em.kind) ? Tm("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, Im.jsxs)("div", {
          className: "OnboardingNameField",
          ref: Xm,
          children: [(0, Im.jsx)("div", {
            className: "OnboardingSubtitle",
            children: Tm("general:name")
          }), null === cm && (0, Im.jsx)(Nm.c, {}), null !== cm && (0, Im.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, Im.jsx)(Gm.e, {
              className: "OnboardingNameInput",
              ariaLabel: Tm("general:name"),
              maxLength: bm.j,
              defaultValue: cm,
              domRef: im,
              forcedText: Om ? cm : null,
              onEnter: () => {
                var mm;
                null === (mm = im.current) || void 0 === mm || mm.blur()
              },
              onValueChange: mm => {
                const fm = (0, bm.r)(mm);
                fm !== mm && im.current && (im.current.value = fm), om(fm !== mm ? {
                  kind: "error",
                  message: Tm("homePage:nameCharacters")
                } : null), fm !== cm && (Km.current = "changed"), pm(fm)
              }
            }), (0, Im.jsx)(xm.e, {
              className: "OnboardingRandomName",
              ariaLabel: Tm("homePage:onboardingRandomName"),
              disabled: Om,
              onClick: () => {
                (() => {
                  if (om(null), null === Dm || fm.isLoggedIn()) return Zm((0, bm.g)()), void(Km.current = "rolled");
                  Pm((0, em.j)(fm), (mm => {
                    var Tm, hm;
                    if ("refused" === mm.outcome || "failed" === mm.outcome) return Zm(fm.getPlayerName()), Km.current = null !== (Tm = null === (hm = zm.current) || void 0 === hm ? void 0 : hm.outcome) && void 0 !== Tm ? Tm : "mO", void om({
                      kind: "error",
                      message: ym(mm)
                    });
                    Km.current = "rolled", zm.current = {
                      name: mm.name,
                      outcome: "rolled"
                    }, Zm(mm.name)
                  }))
                })()
              },
              children: (0, Im.jsx)(Ym.c, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === Em || void 0 === Em ? void 0 : Em.kind) && (0, Im.jsx)("div", {
            className: "OnboardingNameNote",
            children: Tm("homePage:onboardingNameSuffixed", {
              taken: Em.taken,
              name: Em.name
            })
          }), null !== sm && (0, Im.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: sm
          })]
        }),
        submit: () => {
          if (!Om && null !== cm) {
            if (null === Dm) {
              if (Cm(cm)) return;
              return km.current = document.activeElement === im.current, Jm.current = !0, qm(!0), void om(null)
            }
            rm(cm)
          }
        },
        busy: Om,
        ready: null !== cm
      }
    }

    function Pm() {
      const mm = {
        finished: !1
      };
      am.NotificationProvider.showCustomPopup({
        body: Tm => (0, Im.jsx)(Hm, {
          onFinish: () => {
            (0, wm.e)(), mm.finished = !0, Tm()
          }
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        ignoreBackgroundPress: !0,
        onClose: () => {
          mm.finished || (0, wm.d)()
        }
      })
    }

    function Hm(mm) {
      let {
        onFinish: Tm
      } = mm;
      const {
        t: fm
      } = (0, Am.A)(), am = Xm(Tm);
      return (0, hm.useEffect)((() => {
        (0, wm.k)()
      }), []), (0, Im.jsxs)("div", {
        className: "Onboarding",
        children: [(0, Im.jsx)("div", {
          className: "OnboardingTitle",
          children: fm("homePage:onboardingTitle")
        }), (0, Im.jsxs)("div", {
          className: "OnboardingBody",
          children: [am.field, (0, Im.jsx)(km, {})]
        }), (0, Im.jsx)("div", {
          className: "OnboardingFooter",
          children: (0, Im.jsx)(xm.m, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: am.busy,
            disabled: !am.ready,
            onClick: am.submit,
            children: fm("homePage:onboardingDone")
          })
        })]
      })
    }
  },
  36470: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    var hm = fm(1905),
      Am = fm(1494);
    const am = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(mm, Tm) {
        mm !== this.userContext && this.sendHeld(), this.userContext = mm;
        for (const [hm, Am] of Tm) this.pending.set(hm, Am);
        if (null !== this.timer) return;
        const fm = this.lastSentAt + 1100 - Date.now();
        fm <= 0 ? this.send(mm) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), fm), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(mm) {
        const Tm = Array.from(this.pending, (mm => {
          let [Tm, fm] = mm;
          return {
            Sh: Tm,
            eh: fm
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), Am.d.updateCosmetics(mm, Tm).catch((mm => {
          console.error("Failed to update cosmetics", mm)
        }))
      }
    };

    function xm(mm, Tm) {
      for (const [fm, hm] of Tm) mm.setPlayerCosmetics(fm, hm);
      if (null === hm.gameBridge.latest("connectedGame").websocketUrl) am.save(mm, Tm);
      else
        for (const [fm, Am] of Tm) hm.gameBridge.send("updateMyCosmetic", {
          Sh: fm,
          eh: Am
        })
    }
  },
  34173: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Vm,
      e: () => im,
      h: () => Ym,
      j: () => Om
    });
    var hm = fm(168),
      Am = fm(1270),
      am = fm(1214),
      xm = fm(1162),
      wm = fm(1706);
    const Dm = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function im(mm) {
      return Dm[mm]
    }

    function Rm(mm) {
      return (0, wm.c)(mm) ? "outdated" : mm instanceof hm.d ? 429 === mm.httpCode ? "busy" : "server" : "offline"
    }

    function pm(mm, Tm, fm) {
      return (0, xm.postJsonWithMetricsCookiesAndJsonResponse)(`${am.clientSideServerUrls.indexUrl}${Tm}`, fm, {
        retries: 3
      }, mm.getMetricsCookies()).catch((mm => (console.error("Bad response from the server when trying to change name:", Tm, mm), {
        outcome: "failed",
        failure: Rm(mm)
      })))
    }

    function Em(mm) {
      return "outcome" in mm && "failed" === mm.outcome
    }

    function om(mm) {
      return console.error("Error when trying to get with new name from DB", mm), {
        outcome: "refused",
        message: mm
      }
    }
    async function Om(mm) {
      const Tm = await pm(mm, "/index/name/random", {});
      return Em(Tm) ? Tm : "err" in Tm ? om(Tm.err) : (mm.setPlayerName(Tm.name), {
        outcome: "changed",
        name: Tm.name
      })
    }
    async function Ym(mm, Tm) {
      const fm = await pm(mm, "/index/name/update", {
        name: Tm
      });
      return Em(fm) ? fm : "err" in fm ? om(fm.err) : fm.nameExists ? {
        outcome: "taken"
      } : (mm.setPlayerName(Tm), {
        outcome: "changed",
        name: Tm
      })
    }

    function qm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const hm = 1 === Tm ? 1 : 10 ** (Tm - 1),
        am = String(hm + Math.floor(fm() * (10 ** Tm - hm)));
      return `${mm.slice(0,Am.j-Tm)}${am}`
    }
    const jm = [1, 2, 3, 4];
    async function Vm(mm, Tm) {
      const fm = await Ym(mm, Tm);
      if ("taken" !== fm.outcome) return fm;
      for (const hm of jm) {
        const fm = qm(Tm, hm),
          Am = await Ym(mm, fm);
        if ("taken" !== Am.outcome) return Am
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);
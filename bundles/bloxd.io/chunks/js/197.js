export const id = 197;
export const ids = [197];
export const modules = {
  36772: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      showOnboardingPopup: () => ru
    });
    var su = ju(58),
      Uu = ju(1244),
      Zu = ju(1405),
      Xu = ju(1506),
      lu = ju(4485),
      qu = ju(1614),
      fu = ju(1611),
      Cu = ju(2329),
      bu = ju(1105),
      cu = ju.n(bu),
      Nu = ju(1183),
      Ou = ju(36774),
      Yu = ju(1116),
      hu = ju(2479),
      Du = ju(3678),
      gu = ju(1178),
      Mu = ju(1154);
    const eu = Object.entries(qu.d).filter((uu => {
      let [, Eu] = uu;
      return "default" === Eu.cosmeticPack
    }));

    function Gu(uu) {
      return fu.e.default.colourGroups[uu].colours.map(((uu, Eu) => {
        let {
          rbg: ju,
          order: su
        } = uu;
        return {
          rbg: ju,
          order: su,
          index: Eu
        }
      })).sort(((uu, Eu) => uu.order - Eu.order))
    }
    const pu = Gu("eyes"),
      wu = Gu("skin");

    function Ju(uu, Eu) {
      var ju;
      if (void 0 === Eu || "default" !== (null === (ju = (0, Cu.m)(uu, Eu)) || void 0 === ju ? void 0 : ju.cosmeticPack)) return null;
      const su = (0, Cu.j)(Eu);
      return su && [su[0], Number(su[1])]
    }

    function du(uu, Eu, ju) {
      return `${uu}_${Eu}_${ju}`
    }

    function au(uu) {
      let {
        label: Eu,
        colours: ju,
        picked: su,
        onPick: Zu
      } = uu;
      const {
        t: Xu
      } = (0, Uu.A)();
      return (0, Mu.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, Mu.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: Eu
        }), (0, Mu.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": Eu,
          children: ju.map(((uu, Eu) => {
            let {
              rbg: ju,
              index: Uu
            } = uu;
            return (0, Mu.jsx)("button", {
              type: "button",
              className: cu()("OnboardingSwatch", {
                OnboardingSwatchSelected: Uu === su
              }),
              style: {
                backgroundColor: `rgb(${ju.join(",")})`
              },
              role: "radio",
              "aria-checked": Uu === su,
              "aria-label": Xu("homePage:onboardingColour", {
                number: Eu + 1
              }),
              onClick: () => {
                Zu(Uu)
              }
            }, Uu)
          }))
        })]
      })
    }

    function Pu() {
      const {
        t: uu
      } = (0, Uu.A)(), {
        userContext: Eu,
        isUserContextUpdating: ju
      } = (0, gu.c)(), [Zu, Xu] = (0, su.useState)(!1), [, qu] = (0, su.useReducer)((uu => uu + 1), 0), fu = (0, su.useRef)({}), Cu = (0, su.useRef)(null), bu = (0, Du.c)(), Gu = {
        ...Eu.getPlayerCosmetics(),
        ...Cu.current
      }, Pu = (0, su.useRef)(null);
      (0, su.useEffect)((() => {
        var uu;
        Zu && (null === (uu = Pu.current) || void 0 === uu || uu.scrollIntoView({
          block: "nearest"
        }))
      }), [Zu]);
      const ou = (uu, Eu) => {
          (0, Ou.c)(uu, Object.entries(Eu)), bu.current ? qu() : uu.publishUpdateIfCurrent()
        },
        ku = uu => {
          const su = {
            ...Cu.current,
            ...uu
          };
          if (!ju) return Cu.current = null, void ou(Eu, su);
          Cu.current = su, qu(), Nu.userContextManager.getCurrentUserContext().then((uu => {
            Cu.current === su && (Cu.current = null, ou(uu, su))
          })).catch((uu => {
            console.warn("Couldn't put on the onboarding look held for the account", uu), Cu.current === su && (Cu.current = null, bu.current && qu())
          }))
        };
      (0, su.useEffect)((() => () => {
        Eu.publishUpdateIfCurrent()
      }), [Eu]);
      const mu = Ju("eyes", Gu.eyes),
        vu = Ju("skin", Gu.skin);
      return (0, Mu.jsxs)(Mu.Fragment, {
        children: [(0, Mu.jsx)("div", {
          className: "OnboardingPresets",
          children: eu.map(((Eu, ju) => {
            let [su, {
              cosmetics: Uu
            }] = Eu;
            const Zu = function(uu, Eu) {
              return Object.entries(Eu).every((Eu => {
                let [ju, su] = Eu;
                return "skin" === ju || ("eyes" === ju ? (null === (Uu = Ju("eyes", uu.eyes)) || void 0 === Uu ? void 0 : Uu[0]) === (null === (Zu = Ju("eyes", su)) || void 0 === Zu ? void 0 : Zu[0]) : uu[ju] === su);
                var Uu, Zu
              }))
            }(Gu, Uu);
            return (0, Mu.jsx)("button", {
              type: "button",
              className: cu()("OnboardingPreset", {
                OnboardingPresetSelected: Zu
              }),
              "aria-label": uu("homePage:onboardingPreset", {
                number: ju + 1
              }),
              "aria-pressed": Zu,
              onClick: () => {
                (0, lu.i)(`preset.${su}`);
                const {
                  eyes: uu,
                  skin: Eu
                } = fu.current;
                ku({
                  ...Uu,
                  ...void 0 !== uu && {
                    eyes: du("eyes", Ju("eyes", Uu.eyes)[0], uu)
                  },
                  ...void 0 !== Eu && {
                    skin: du("skin", "0", Eu)
                  }
                })
              },
              children: (0, Mu.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${su}_preview.png)`
                }
              })
            }, su)
          }))
        }), (0, Mu.jsxs)("button", {
          type: "button",
          className: "OnboardingMoreOptions",
          "aria-expanded": Zu,
          onClick: () => {
            Zu || (0, lu.i)("more"), Xu(!Zu)
          },
          children: [uu("homePage:onboardingMoreOptions"), (0, Mu.jsx)(Yu.e, {
            name: Zu ? "caret-up" : "caret-down"
          })]
        }), Zu && (0, Mu.jsxs)("div", {
          ref: Pu,
          className: "OnboardingMore",
          children: [(0, Mu.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, Mu.jsx)(hu.d, {
              cosmetics: Gu
            })
          }), (0, Mu.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, Mu.jsx)(au, {
              label: uu("homePage:onboardingEyeColour"),
              colours: pu,
              picked: null === mu || void 0 === mu ? void 0 : mu[1],
              onPick: uu => {
                var Eu;
                (0, lu.i)("eyes"), fu.current.eyes = uu, ku({
                  eyes: du("eyes", null !== (Eu = null === mu || void 0 === mu ? void 0 : mu[0]) && void 0 !== Eu ? Eu : "0", uu)
                })
              }
            }), (0, Mu.jsx)(au, {
              label: uu("homePage:onboardingSkinColour"),
              colours: wu,
              picked: null === vu || void 0 === vu ? void 0 : vu[1],
              onPick: uu => {
                (0, lu.i)("skin"), fu.current.skin = uu, ku({
                  skin: du("skin", "0", uu)
                })
              }
            })]
          })]
        })]
      })
    }
    var ou = ju(1320),
      ku = ju(22),
      mu = ju(34452),
      vu = ju(1393),
      Ku = ju(1723);

    function Vu(uu) {
      const {
        t: Eu
      } = (0, Uu.A)(), {
        userContext: ju,
        isUserContextUpdating: Zu
      } = (0, gu.c)(), qu = Zu ? null : ju.getPlayerName(), fu = (0, su.useRef)(null), [Cu, bu] = (0, su.useState)((() => null === qu ? (0, ou.f)() : null)), [cu, Nu] = (0, su.useState)(null), [Ou, hu] = (0, su.useState)(!1), eu = (0, su.useRef)("oN"), Gu = (0, Du.c)(), pu = (0, su.useRef)(null !== Cu), wu = (0, su.useRef)(!1), Ju = null !== Cu && void 0 !== Cu ? Cu : qu, du = (0, su.useRef)(null), au = uu => {
        fu.current && (fu.current.value = uu), bu(uu)
      }, Pu = (0, su.useRef)(!1);
      (0, su.useEffect)((() => {
        var uu, Eu;
        !Ou && Pu.current && (Pu.current = !1, null === (uu = fu.current) || void 0 === uu || uu.focus(), null === (Eu = fu.current) || void 0 === Eu || Eu.select())
      }), [Ou]);
      const Vu = (0, su.useRef)(null);
      (0, su.useEffect)((() => {
        var uu;
        null !== cu && (null === (uu = Vu.current) || void 0 === uu || uu.scrollIntoView({
          block: "nearest"
        }))
      }), [cu]);
      const ru = (uu, Eu) => {
        const ju = document.activeElement === fu.current || Pu.current;
        hu(!0), Nu(null), uu.then((uu => {
          Gu.current && (hu(!1), Pu.current = ju, Eu(uu))
        }))
      };
      (0, su.useEffect)((() => {
        var uu, Eu;
        ku.d.get("isTouchScreen") || (null === (uu = fu.current) || void 0 === uu || uu.focus(), null === (Eu = fu.current) || void 0 === Eu || Eu.select())
      }), []);
      const Qu = () => {
          (0, lu.j)(eu.current), uu()
        },
        iu = uu => "refused" === uu.outcome ? uu.message : Eu((0, mu.d)(uu.failure)),
        Wu = uu => !(uu.length >= ou.j) && (Nu({
          kind: "error",
          message: Eu("homePage:changeNameMinLengthError", {
            length: ou.j
          })
        }), !0),
        Su = uu => {
          var su, Uu, Zu;
          uu.toLowerCase() !== (null === (su = null !== (Uu = null === (Zu = du.current) || void 0 === Zu ? void 0 : Zu.name) && void 0 !== Uu ? Uu : qu) || void 0 === su ? void 0 : su.toLowerCase()) ? Wu(uu) || ru((0, mu.c)(ju, uu), (ju => {
            "taken" !== ju.outcome ? "refused" !== ju.outcome && "failed" !== ju.outcome ? ju.name !== uu ? (eu.current = "suffixed", du.current = {
              name: ju.name,
              outcome: eu.current
            }, au(ju.name), Nu({
              kind: "suffixed",
              taken: uu,
              name: ju.name
            })) : Qu() : Nu({
              kind: "error",
              message: iu(ju)
            }) : Nu({
              kind: "error",
              message: Eu("homePage:onboardingNameAllTaken")
            })
          })) : Qu()
        };
      (0, su.useEffect)((() => {
        if (!Ou || null !== qu || !wu.current) return;
        const uu = setTimeout((() => {
          wu.current = !1, hu(!1), Nu({
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(uu)
        }
      }), [Ou, qu]), (0, su.useEffect)((() => {
        if (null === qu) return;
        const uu = pu.current && "oN" === eu.current && ju.isLoggedIn();
        pu.current = !1, "noAccount" === (null === cu || void 0 === cu ? void 0 : cu.kind) && Nu(null), uu && au(qu), wu.current && (wu.current = !1, hu(!1), Su(uu ? qu : Ju))
      }), [qu]);
      const Iu = "error" === (null === cu || void 0 === cu ? void 0 : cu.kind) ? cu.message : "noAccount" === (null === cu || void 0 === cu ? void 0 : cu.kind) ? Eu("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, Mu.jsxs)("div", {
          className: "OnboardingNameField",
          ref: Vu,
          children: [(0, Mu.jsx)("div", {
            className: "OnboardingSubtitle",
            children: Eu("general:name")
          }), null === Ju && (0, Mu.jsx)(vu.b, {}), null !== Ju && (0, Mu.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, Mu.jsx)(Ku.d, {
              className: "OnboardingNameInput",
              ariaLabel: Eu("general:name"),
              maxLength: ou.g,
              defaultValue: Ju,
              domRef: fu,
              forcedText: Ou ? Ju : null,
              onEnter: () => {
                var uu;
                null === (uu = fu.current) || void 0 === uu || uu.blur()
              },
              onValueChange: uu => {
                const ju = (0, ou.m)(uu);
                ju !== uu && fu.current && (fu.current.value = ju), Nu(ju !== uu ? {
                  kind: "error",
                  message: Eu("homePage:nameCharacters")
                } : null), ju !== Ju && (eu.current = "changed"), bu(ju)
              }
            }), (0, Mu.jsx)(Xu.f, {
              className: "OnboardingRandomName",
              ariaLabel: Eu("homePage:onboardingRandomName"),
              disabled: Ou,
              onClick: () => {
                (() => {
                  if (Nu(null), null === qu || ju.isLoggedIn()) return au((0, ou.f)()), void(eu.current = "rolled");
                  ru((0, mu.g)(ju), (uu => {
                    var Eu, su;
                    if ("refused" === uu.outcome || "failed" === uu.outcome) return au(ju.getPlayerName()), eu.current = null !== (Eu = null === (su = du.current) || void 0 === su ? void 0 : su.outcome) && void 0 !== Eu ? Eu : "oN", void Nu({
                      kind: "error",
                      message: iu(uu)
                    });
                    eu.current = "rolled", du.current = {
                      name: uu.name,
                      outcome: "rolled"
                    }, au(uu.name)
                  }))
                })()
              },
              children: (0, Mu.jsx)(Yu.e, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === cu || void 0 === cu ? void 0 : cu.kind) && (0, Mu.jsx)("div", {
            className: "OnboardingNameNote",
            children: Eu("homePage:onboardingNameSuffixed", {
              taken: cu.taken,
              name: cu.name
            })
          }), null !== Iu && (0, Mu.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: Iu
          })]
        }),
        submit: () => {
          if (!Ou && null !== Ju) {
            if (null === qu) {
              if (Wu(Ju)) return;
              return Pu.current = document.activeElement === fu.current, wu.current = !0, hu(!0), void Nu(null)
            }
            Su(Ju)
          }
        },
        busy: Ou,
        ready: null !== Ju
      }
    }

    function ru() {
      const uu = {
        finished: !1
      };
      return Zu.NotificationProvider.showCustomPopup({
        body: Eu => (0, Mu.jsx)(Qu, {
          onFinish: () => {
            (0, lu.e)(), uu.finished = !0, Eu()
          }
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        ignoreBackgroundPress: !0,
        onClose: () => {
          uu.finished || (0, lu.b)()
        }
      })
    }

    function Qu(uu) {
      let {
        onFinish: Eu
      } = uu;
      const {
        t: ju
      } = (0, Uu.A)(), Zu = Vu(Eu);
      return (0, su.useEffect)((() => {
        (0, lu.n)()
      }), []), (0, Mu.jsxs)("div", {
        className: "Onboarding",
        children: [(0, Mu.jsx)("div", {
          className: "OnboardingTitle",
          children: ju("homePage:onboardingTitle")
        }), (0, Mu.jsxs)("div", {
          className: "OnboardingBody",
          children: [Zu.field, (0, Mu.jsx)(Pu, {})]
        }), (0, Mu.jsx)("div", {
          className: "OnboardingFooter",
          children: (0, Mu.jsx)(Xu.p, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: Zu.busy,
            disabled: !Zu.ready,
            onClick: Zu.submit,
            children: ju("homePage:onboardingDone")
          })
        })]
      })
    }
  },
  36774: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu
    });
    var su = ju(1986),
      Uu = ju(1559);
    const Zu = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(uu, Eu) {
        uu !== this.userContext && this.sendHeld(), this.userContext = uu;
        for (const [su, Uu] of Eu) this.pending.set(su, Uu);
        if (null !== this.timer) return;
        const ju = this.lastSentAt + 1100 - Date.now();
        ju <= 0 ? this.send(uu) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), ju), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(uu) {
        const Eu = Array.from(this.pending, (uu => {
          let [Eu, ju] = uu;
          return {
            iZ: Eu,
            WZ: ju
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), Uu.b.updateCosmetics(uu, Eu).catch((uu => {
          console.error("Failed to update cosmetics", uu)
        }))
      }
    };

    function Xu(uu, Eu) {
      for (const [ju, su] of Eu) uu.setPlayerCosmetics(ju, su);
      if (null === su.gameBridge.latest("connectedGame").websocketUrl) Zu.save(uu, Eu);
      else
        for (const [ju, Uu] of Eu) su.gameBridge.send("updateMyCosmetic", {
          iZ: ju,
          WZ: Uu
        })
    }
  },
  34452: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => gu,
      d: () => fu,
      e: () => Yu,
      g: () => Ou
    });
    var su = ju(166),
      Uu = ju(1320),
      Zu = ju(1255),
      Xu = ju(1183),
      lu = ju(1776);
    const qu = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function fu(uu) {
      return qu[uu]
    }

    function Cu(uu) {
      return (0, lu.b)(uu) ? "outdated" : uu instanceof su.b ? 429 === uu.httpCode ? "busy" : "server" : "offline"
    }

    function bu(uu, Eu, ju) {
      return (0, Xu.postJsonWithMetricsCookiesAndJsonResponse)(`${Zu.clientSideServerUrls.indexUrl}${Eu}`, ju, {
        retries: 3
      }, uu.getMetricsCookies()).catch((uu => (console.error("Bad response from the server when trying to change name:", Eu, uu), {
        outcome: "failed",
        failure: Cu(uu)
      })))
    }

    function cu(uu) {
      return "outcome" in uu && "failed" === uu.outcome
    }

    function Nu(uu) {
      return console.error("Error when trying to get with new name from DB", uu), {
        outcome: "refused",
        message: uu
      }
    }
    async function Ou(uu) {
      const Eu = await bu(uu, "/index/name/random", {});
      return cu(Eu) ? Eu : "err" in Eu ? Nu(Eu.err) : (uu.setPlayerName(Eu.name), {
        outcome: "changed",
        name: Eu.name
      })
    }
    async function Yu(uu, Eu) {
      const ju = await bu(uu, "/index/name/update", {
        name: Eu
      });
      return cu(ju) ? ju : "err" in ju ? Nu(ju.err) : ju.nameExists ? {
        outcome: "taken"
      } : (uu.setPlayerName(Eu), {
        outcome: "changed",
        name: Eu
      })
    }

    function hu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const su = 1 === Eu ? 1 : 10 ** (Eu - 1),
        Zu = String(su + Math.floor(ju() * (10 ** Eu - su)));
      return `${uu.slice(0,Uu.g-Eu)}${Zu}`
    }
    const Du = [1, 2, 3, 4];
    async function gu(uu, Eu) {
      const ju = await Yu(uu, Eu);
      if ("taken" !== ju.outcome) return ju;
      for (const su of Du) {
        const ju = hu(Eu, su),
          Uu = await Yu(uu, ju);
        if ("taken" !== Uu.outcome) return Uu
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);
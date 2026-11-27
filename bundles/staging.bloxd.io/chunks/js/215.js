export const id = 215;
export const ids = [215];
export const modules = {
  37169: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      isMoreOptionsInFooter: () => ve,
      showOnboardingPopup: () => ue
    });
    var ye = He(59),
      be = He(1127),
      Me = He(1340),
      Ke = He(1438),
      Ue = He(1070),
      Fe = He(4690),
      Je = He(1557),
      oe = He(347),
      Re = He(1553),
      ke = He(2278),
      qe = He(1053),
      fe = He.n(qe),
      Te = He(1083),
      pe = He(37175),
      Xe = He(2425),
      ze = He(3871),
      Be = He(1075),
      Ee = He(1323),
      ge = He(1228);
    const Oe = "OnboardingMorePanel";

    function de(ee) {
      let {
        open: ie,
        onToggle: He
      } = ee;
      const {
        t: ye
      } = (0, be.v)();
      return (0, ge.jsxs)("button", {
        type: "button",
        className: "OnboardingMoreOptions",
        "aria-expanded": ie,
        "aria-controls": ie ? Oe : void 0,
        onClick: () => {
          ie || (0, Fe.i)("more"), He()
        },
        children: [ye("homePage:onboardingMoreOptions"), (0, ge.jsx)(Ee.e, {
          name: ie ? "caret-up" : "caret-down"
        })]
      })
    }
    const We = Object.entries(Je.b).filter((ee => {
      let [, ie] = ee;
      return "default" === ie.cosmeticPack
    }));

    function te(ee) {
      return Re.b.default.colourGroups[ee].colours.map(((ee, ie) => {
        let {
          rbg: He,
          order: ye
        } = ee;
        return {
          rbg: He,
          order: ye,
          index: ie
        }
      })).sort(((ee, ie) => ee.order - ie.order))
    }
    const Ze = te("eyes"),
      we = te("skin");

    function De(ee, ie) {
      var He;
      if (void 0 === ie || "default" !== (null === (He = (0, ke.h)(ee, ie)) || void 0 === He ? void 0 : He.cosmeticPack)) return null;
      const ye = (0, ke.g)(ie);
      return ye && [ye[0], Number(ye[1])]
    }

    function Pe(ee, ie, He) {
      return `${ee}_${ie}_${He}`
    }

    function Ae(ee) {
      let {
        label: ie,
        colours: He,
        picked: ye,
        onPick: Me
      } = ee;
      const {
        t: Ke
      } = (0, be.v)();
      return (0, ge.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, ge.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: ie
        }), (0, ge.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": ie,
          children: He.map(((ee, ie) => {
            let {
              rbg: He,
              index: be
            } = ee;
            return (0, ge.jsx)("button", {
              type: "button",
              className: fe()("OnboardingSwatch", {
                OnboardingSwatchSelected: be === ye
              }),
              style: {
                backgroundColor: `rgb(${He.join(",")})`
              },
              role: "radio",
              "aria-checked": be === ye,
              "aria-label": Ke("homePage:onboardingColour", {
                number: ie + 1
              }),
              onClick: () => {
                Me(be)
              }
            }, be)
          }))
        })]
      })
    }

    function Ye(ee) {
      let {
        moreOptions: ie,
        onToggleMoreOptions: He,
        moreOptionsBelowPresets: Me
      } = ee;
      const {
        t: Ke
      } = (0, be.v)(), {
        userContext: Ue,
        isUserContextUpdating: Je
      } = (0, Be.b)(), [, Re] = (0, ye.useReducer)((ee => ee + 1), 0), ke = (0, ye.useRef)({}), qe = (0, ye.useRef)(null), Ee = (0, ye.useRef)({}), te = (0, ze.c)(), Ye = {
        ...Ue.getPlayerCosmetics(),
        ...qe.current
      }, Ve = (0, ye.useRef)(null);
      (0, ye.useEffect)((() => {
        var ee;
        ie && (null === (ee = Ve.current) || void 0 === ee || ee.scrollIntoView({
          block: "nearest"
        }))
      }), [ie]);
      const ae = (ee, ie) => {
          (0, pe.d)(ee, Object.entries(ie)), te.current ? Re() : ee.publishUpdateIfCurrent()
        },
        ce = function(ee) {
          let {
            isDefault: ie = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const He = {
            ...!Je && Ue.isLoggedIn() ? Ee.current : qe.current,
            ...ee
          };
          if (!Je) return qe.current = null, Ee.current = {}, void ae(Ue, He);
          qe.current = He, ie || (Ee.current = {
            ...Ee.current,
            ...ee
          }), Re(), Te.userContextManager.getCurrentUserContext().then((ee => {
            if (qe.current !== He) return;
            qe.current = null;
            const ie = Ee.current;
            Ee.current = {};
            const ye = ee.isLoggedIn() ? ie : He;
            0 !== Object.keys(ye).length ? ae(ee, ye) : te.current && Re()
          })).catch((ee => {
            console.warn("Couldn't put on the onboarding look held for the account", ee), qe.current === He && (qe.current = null, Ee.current = {}, te.current && Re())
          }))
        },
        xe = (0, ye.useRef)(!1);
      (0, ye.useEffect)((() => {
        xe.current || (xe.current = !0, !Je && Ue.isLoggedIn() || ce((0, oe.gc)(We)[1].cosmetics, {
          isDefault: !0
        }))
      }), []), (0, ye.useEffect)((() => () => {
        Ue.publishUpdateIfCurrent()
      }), [Ue]);
      const Le = De("eyes", Ye.eyes),
        Ce = De("skin", Ye.skin);
      return (0, ge.jsxs)(ge.Fragment, {
        children: [(0, ge.jsx)("div", {
          className: "OnboardingPresets",
          children: We.map(((ee, ie) => {
            let [He, {
              cosmetics: ye
            }] = ee;
            const be = function(ee, ie) {
              return Object.entries(ie).every((ie => {
                let [He, ye] = ie;
                return "skin" === He || ("eyes" === He ? (null === (be = De("eyes", ee.eyes)) || void 0 === be ? void 0 : be[0]) === (null === (Me = De("eyes", ye)) || void 0 === Me ? void 0 : Me[0]) : ee[He] === ye);
                var be, Me
              }))
            }(Ye, ye);
            return (0, ge.jsx)("button", {
              type: "button",
              className: fe()("OnboardingPreset", {
                OnboardingPresetSelected: be
              }),
              "aria-label": Ke("homePage:onboardingPreset", {
                number: ie + 1
              }),
              "aria-pressed": be,
              onClick: () => {
                (0, Fe.i)(`preset.${He}`);
                const {
                  eyes: ee,
                  skin: ie
                } = ke.current;
                ce({
                  ...ye,
                  ...void 0 !== ee && {
                    eyes: Pe("eyes", De("eyes", ye.eyes)[0], ee)
                  },
                  ...void 0 !== ie && {
                    skin: Pe("skin", "0", ie)
                  }
                })
              },
              children: (0, ge.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${He}_preview.png)`
                }
              })
            }, He)
          }))
        }), Me && (0, ge.jsx)(de, {
          open: ie,
          onToggle: He
        }), ie && (0, ge.jsxs)("div", {
          ref: Ve,
          id: Oe,
          className: "OnboardingMore",
          children: [(0, ge.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, ge.jsx)(Xe.c, {
              cosmetics: Ye
            })
          }), (0, ge.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, ge.jsx)(Ae, {
              label: Ke("homePage:onboardingEyeColour"),
              colours: Ze,
              picked: null === Le || void 0 === Le ? void 0 : Le[1],
              onPick: ee => {
                var ie;
                (0, Fe.i)("eyes"), ke.current.eyes = ee, ce({
                  eyes: Pe("eyes", null !== (ie = null === Le || void 0 === Le ? void 0 : Le[0]) && void 0 !== ie ? ie : "0", ee)
                })
              }
            }), (0, ge.jsx)(Ae, {
              label: Ke("homePage:onboardingSkinColour"),
              colours: we,
              picked: null === Ce || void 0 === Ce ? void 0 : Ce[1],
              onPick: ee => {
                (0, Fe.i)("skin"), ke.current.skin = ee, ce({
                  skin: Pe("skin", "0", ee)
                })
              }
            })]
          })]
        })]
      })
    }
    var Ve = He(1207),
      ae = He(18),
      ce = He(34758),
      xe = He(1320),
      Le = He(1674);

    function Ce(ee) {
      const {
        t: ie
      } = (0, be.v)(), {
        userContext: He,
        isUserContextUpdating: Me
      } = (0, Be.b)(), Ue = Me ? null : He.getPlayerName(), Je = (0, ye.useRef)(null), [oe, Re] = (0, ye.useState)((() => null === Ue ? (0, Ve.f)() : null)), [ke, qe] = (0, ye.useState)(null), [fe, Te] = (0, ye.useState)(!1), pe = (0, ye.useRef)("KR"), Xe = (0, ze.c)(), Oe = (0, ye.useRef)(null !== oe), de = (0, ye.useRef)(!1), We = (0, ye.useRef)(null), te = null !== oe && void 0 !== oe ? oe : Ue, Ze = (0, ye.useRef)(null), we = ee => {
        Je.current && (Je.current.value = ee), Re(ee)
      }, De = (0, ye.useRef)(!1);
      (0, ye.useEffect)((() => {
        var ee, ie;
        !fe && De.current && (De.current = !1, null === (ee = Je.current) || void 0 === ee || ee.focus(), null === (ie = Je.current) || void 0 === ie || ie.select())
      }), [fe]);
      const Pe = (0, ye.useRef)(null);
      (0, ye.useEffect)((() => {
        var ee;
        null !== ke && (null === (ee = Pe.current) || void 0 === ee || ee.scrollIntoView({
          block: "nearest"
        }))
      }), [ke]);
      const Ae = (ee, ie) => {
        const He = document.activeElement === Je.current || De.current;
        Te(!0), qe(null), ee.then((ee => {
          Xe.current && (Te(!1), De.current = He, ie(ee))
        }))
      };
      (0, ye.useEffect)((() => {
        var ee, ie;
        ae.e.get("isTouchScreen") || (null === (ee = Je.current) || void 0 === ee || ee.focus(), null === (ie = Je.current) || void 0 === ie || ie.select())
      }), []);
      const Ye = () => {
          (0, Fe.m)(pe.current), ee()
        },
        Ce = (ee, ie) => {
          var He, ye;
          if (We.current === ee) return pe.current = null !== (He = null === (ye = Ze.current) || void 0 === ye ? void 0 : ye.outcome) && void 0 !== He ? He : "KR", void Ye();
          We.current = ee, qe(ie)
        },
        ve = ee => "refused" === ee.outcome ? ee.message : ie((0, ce.i)(ee.failure)),
        ue = ee => !(ee.length >= Ve.i) && (qe({
          kind: "error",
          message: ie("homePage:changeNameMinLengthError", {
            length: Ve.i
          })
        }), !0),
        me = ee => {
          var ye, be, Me;
          ee.toLowerCase() !== (null === (ye = null !== (be = null === (Me = Ze.current) || void 0 === Me ? void 0 : Me.name) && void 0 !== be ? be : Ue) || void 0 === ye ? void 0 : ye.toLowerCase()) ? ue(ee) || Ae((0, ce.e)(He, ee), (He => {
            "taken" !== He.outcome ? "refused" !== He.outcome && "failed" !== He.outcome ? He.name !== ee ? (pe.current = "suffixed", Ze.current = {
              name: He.name,
              outcome: pe.current
            }, we(He.name), qe({
              kind: "suffixed",
              taken: ee,
              name: He.name
            })) : Ye() : Ce(ee, {
              kind: "error",
              message: ve(He)
            }) : Ce(ee, {
              kind: "error",
              message: ie("homePage:onboardingNameAllTaken")
            })
          })) : Ye()
        };
      (0, ye.useEffect)((() => {
        if (!fe || null !== Ue || !de.current) return;
        const ee = setTimeout((() => {
          de.current = !1, Te(!1), Ce(te, {
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(ee)
        }
      }), [fe, Ue]), (0, ye.useEffect)((() => {
        if (null === Ue) return;
        const ee = Oe.current && "KR" === pe.current && He.isLoggedIn();
        Oe.current = !1, We.current = null, "noAccount" === (null === ke || void 0 === ke ? void 0 : ke.kind) && qe(null), ee && we(Ue), de.current && (de.current = !1, Te(!1), me(ee ? Ue : te))
      }), [Ue]);
      const le = "error" === (null === ke || void 0 === ke ? void 0 : ke.kind) ? ke.message : "noAccount" === (null === ke || void 0 === ke ? void 0 : ke.kind) ? ie("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, ge.jsxs)("div", {
          className: "OnboardingNameField",
          ref: Pe,
          children: [(0, ge.jsx)("div", {
            className: "OnboardingSubtitle",
            children: ie("general:name")
          }), null === te && (0, ge.jsx)(xe.b, {}), null !== te && (0, ge.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, ge.jsx)(Le.d, {
              className: "OnboardingNameInput",
              ariaLabel: ie("general:name"),
              maxLength: Ve.g,
              defaultValue: te,
              domRef: Je,
              forcedText: fe ? te : null,
              onEnter: () => {
                var ee;
                null === (ee = Je.current) || void 0 === ee || ee.blur()
              },
              onValueChange: ee => {
                const He = (0, Ve.l)(ee);
                He !== ee && Je.current && (Je.current.value = He), qe(He !== ee ? {
                  kind: "error",
                  message: ie("homePage:nameCharacters")
                } : null), He !== te && (pe.current = "changed"), Re(He)
              }
            }), (0, ge.jsx)(Ke.c, {
              className: "OnboardingRandomName",
              ariaLabel: ie("homePage:onboardingRandomName"),
              disabled: fe,
              onClick: () => {
                (() => {
                  if (qe(null), null === Ue || He.isLoggedIn()) return we((0, Ve.f)()), void(pe.current = "rolled");
                  Ae((0, ce.l)(He), (ee => {
                    var ie, ye;
                    if ("refused" === ee.outcome || "failed" === ee.outcome) return we(He.getPlayerName()), pe.current = null !== (ie = null === (ye = Ze.current) || void 0 === ye ? void 0 : ye.outcome) && void 0 !== ie ? ie : "KR", void qe({
                      kind: "error",
                      message: ve(ee)
                    });
                    pe.current = "rolled", Ze.current = {
                      name: ee.name,
                      outcome: "rolled"
                    }, we(ee.name)
                  }))
                })()
              },
              children: (0, ge.jsx)(Ee.e, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === ke || void 0 === ke ? void 0 : ke.kind) && (0, ge.jsx)("div", {
            className: "OnboardingNameNote",
            children: ie("homePage:onboardingNameSuffixed", {
              taken: ke.taken,
              name: ke.name
            })
          }), null !== le && (0, ge.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: le
          })]
        }),
        submit: () => {
          if (!fe && null !== te) {
            if (null === Ue) {
              if (ue(te)) return;
              return De.current = document.activeElement === Je.current, de.current = !0, Te(!0), void qe(null)
            }
            me(te)
          }
        },
        busy: fe,
        ready: null !== te
      }
    }

    function ve(ee) {
      return ee < 500
    }

    function ue() {
      const ee = {
          finished: !1
        },
        ie = {
          press: null
        };
      return Me.NotificationProvider.showCustomPopup({
        body: He => (0, ge.jsx)(me, {
          onFinish: () => {
            (0, Fe.g)(), ee.finished = !0, He()
          },
          doneRef: ie
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        disableExitButton: !0,
        ignoreBackgroundPress: !0,
        dismiss: () => {
          var ee;
          null === (ee = ie.press) || void 0 === ee || ee.call(ie)
        },
        onClose: () => {
          ee.finished || (0, Fe.d)()
        }
      })
    }

    function me(ee) {
      let {
        onFinish: ie,
        doneRef: He
      } = ee;
      const {
        t: Me
      } = (0, be.v)(), Je = Ce(ie), oe = Je.ready && !Je.busy ? Je.submit : null;
      (0, ye.useEffect)((() => (He.press = oe, () => {
        He.press = null
      })));
      const [Re, ke] = (0, ye.useState)(!1), qe = (0, Ue.k)(((ee, ie) => ve(ie))), fe = () => {
        ke(!Re)
      };
      return (0, ye.useEffect)((() => {
        (0, Fe.n)()
      }), []), (0, ge.jsxs)("div", {
        className: "Onboarding",
        children: [(0, ge.jsx)("div", {
          className: "OnboardingTitle",
          children: Me("homePage:onboardingTitle")
        }), (0, ge.jsxs)("div", {
          className: "OnboardingBody",
          children: [Je.field, (0, ge.jsx)(Ye, {
            moreOptions: Re,
            onToggleMoreOptions: fe,
            moreOptionsBelowPresets: !qe
          })]
        }), (0, ge.jsxs)("div", {
          className: "OnboardingFooter",
          children: [qe && (0, ge.jsx)(de, {
            open: Re,
            onToggle: fe
          }), (0, ge.jsx)(Ke.m, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: Je.busy,
            disabled: !Je.ready,
            onClick: Je.submit,
            children: Me("homePage:onboardingDone")
          })]
        })]
      })
    }
  },
  37175: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    var ye = He(1983),
      be = He(1490);
    const Me = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(ee, ie) {
        ee !== this.userContext && this.sendHeld(), this.userContext = ee;
        for (const [ye, be] of ie) this.pending.set(ye, be);
        if (null !== this.timer) return;
        const He = this.lastSentAt + 1100 - Date.now();
        He <= 0 ? this.send(ee) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), He), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(ee) {
        const ie = Array.from(this.pending, (ee => {
          let [ie, He] = ee;
          return {
            te: ie,
            Ze: He
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), be.b.updateCosmetics(ee, ie).catch((ee => {
          console.error("Failed to update cosmetics", ee)
        }))
      }
    };

    function Ke(ee, ie) {
      for (const [He, ye] of ie) ee.setPlayerCosmetics(He, ye);
      if (null === ye.gameBridge.latest("connectedGame").websocketUrl) Me.save(ee, ie);
      else
        for (const [He, be] of ie) ye.gameBridge.send("updateMyCosmetic", {
          te: He,
          Ze: be
        })
    }
  },
  34758: (ee, ie, He) => {
    He.d(ie, {
      e: () => ze,
      i: () => Je,
      j: () => Te,
      l: () => fe
    });
    var ye = He(153),
      be = He(1207),
      Me = He(1141),
      Ke = He(1083),
      Ue = He(1763);
    const Fe = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function Je(ee) {
      return Fe[ee]
    }

    function oe(ee) {
      return (0, Ue.b)(ee) ? "outdated" : ee instanceof ye.b ? 429 === ee.httpCode ? "busy" : "server" : "offline"
    }

    function Re(ee, ie, He) {
      return (0, Ke.postJsonWithMetricsCookiesAndJsonResponse)(`${Me.clientSideServerUrls.indexUrl}${ie}`, He, {
        retries: 3
      }, ee.getMetricsCookies()).catch((ee => (console.error("Bad response from the server when trying to change name:", ie, ee), {
        outcome: "failed",
        failure: oe(ee)
      })))
    }

    function ke(ee) {
      return "outcome" in ee && "failed" === ee.outcome
    }

    function qe(ee) {
      return console.error("Error when trying to get with new name from DB", ee), {
        outcome: "refused",
        message: ee
      }
    }
    async function fe(ee) {
      const ie = await Re(ee, "/index/name/random", {});
      return ke(ie) ? ie : "err" in ie ? qe(ie.err) : (ee.setPlayerName(ie.name), {
        outcome: "changed",
        name: ie.name
      })
    }
    async function Te(ee, ie) {
      const He = await Re(ee, "/index/name/update", {
        name: ie
      });
      return ke(He) ? He : "err" in He ? qe(He.err) : He.nameExists ? {
        outcome: "taken"
      } : (ee.setPlayerName(ie), {
        outcome: "changed",
        name: ie
      })
    }

    function pe(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const ye = 1 === ie ? 1 : 10 ** (ie - 1),
        Me = String(ye + Math.floor(He() * (10 ** ie - ye)));
      return `${ee.slice(0,be.g-ie)}${Me}`
    }
    const Xe = [1, 2, 3, 4];
    async function ze(ee, ie) {
      const He = await Te(ee, ie);
      if ("taken" !== He.outcome) return He;
      for (const ye of Xe) {
        const He = pe(ie, ye),
          be = await Te(ee, He);
        if ("taken" !== be.outcome) return be
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);
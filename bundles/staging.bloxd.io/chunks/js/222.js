export const id = 222;
export const ids = [222];
export const modules = {
  37819: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      isMoreOptionsInFooter: () => kr,
      showOnboardingPopup: () => Ar
    });
    var Zr = Qr(72),
      Wr = Qr(1251),
      ar = Qr(1475),
      jr = Qr(1576),
      Ir = Qr(1177),
      fr = Qr(5009),
      Er = Qr(1686),
      pr = Qr(379),
      xr = Qr(1684),
      mr = Qr(3139),
      Nr = Qr(1155),
      Ur = Qr.n(Nr),
      tr = Qr(1187),
      hr = Qr(37827),
      zr = Qr(3320),
      Yr = Qr(4746),
      nr = Qr(1181),
      er = Qr(1448),
      Kr = Qr(1338);
    const yr = "OnboardingMorePanel";

    function Br(rr) {
      let {
        open: Sr,
        onToggle: Qr
      } = rr;
      const {
        t: Zr
      } = (0, Wr.E)();
      return (0, Kr.jsxs)("button", {
        type: "button",
        className: "OnboardingMoreOptions",
        "aria-expanded": Sr,
        "aria-controls": Sr ? yr : void 0,
        onClick: () => {
          Sr || (0, fr.k)("more"), Qr()
        },
        children: [Zr("homePage:onboardingMoreOptions"), (0, Kr.jsx)(er.c, {
          name: Sr ? "caret-up" : "caret-down"
        })]
      })
    }
    const Tr = Object.entries(Er.e).filter((rr => {
      let [, Sr] = rr;
      return "default" === Sr.cosmeticPack
    }));

    function vr(rr) {
      return xr.b.default.colourGroups[rr].colours.map(((rr, Sr) => {
        let {
          rbg: Qr,
          order: Zr
        } = rr;
        return {
          rbg: Qr,
          order: Zr,
          index: Sr
        }
      })).sort(((rr, Sr) => rr.order - Sr.order))
    }
    const Or = vr("eyes"),
      Lr = vr("skin");

    function lr(rr, Sr) {
      var Qr;
      if (void 0 === Sr || "default" !== (null === (Qr = (0, mr.k)(rr, Sr)) || void 0 === Qr ? void 0 : Qr.cosmeticPack)) return null;
      const Zr = (0, mr.g)(Sr);
      return Zr && [Zr[0], Number(Zr[1])]
    }

    function Xr(rr, Sr, Qr) {
      return `${rr}_${Sr}_${Qr}`
    }

    function Pr(rr) {
      let {
        label: Sr,
        colours: Qr,
        picked: Zr,
        onPick: ar
      } = rr;
      const {
        t: jr
      } = (0, Wr.E)();
      return (0, Kr.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, Kr.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: Sr
        }), (0, Kr.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": Sr,
          children: Qr.map(((rr, Sr) => {
            let {
              rbg: Qr,
              index: Wr
            } = rr;
            return (0, Kr.jsx)("button", {
              type: "button",
              className: Ur()("OnboardingSwatch", {
                OnboardingSwatchSelected: Wr === Zr
              }),
              style: {
                backgroundColor: `rgb(${Qr.join(",")})`
              },
              role: "radio",
              "aria-checked": Wr === Zr,
              "aria-label": jr("homePage:onboardingColour", {
                number: Sr + 1
              }),
              onClick: () => {
                ar(Wr)
              }
            }, Wr)
          }))
        })]
      })
    }

    function Hr(rr) {
      let {
        moreOptions: Sr,
        onToggleMoreOptions: Qr,
        moreOptionsBelowPresets: ar
      } = rr;
      const {
        t: jr
      } = (0, Wr.E)(), {
        userContext: Ir,
        isUserContextUpdating: Er
      } = (0, nr.c)(), [, xr] = (0, Zr.useReducer)((rr => rr + 1), 0), mr = (0, Zr.useRef)({}), Nr = (0, Zr.useRef)(null), er = (0, Zr.useRef)({}), vr = (0, Yr.b)(), Hr = {
        ...Ir.getPlayerCosmetics(),
        ...Nr.current
      }, qr = (0, Zr.useRef)(null);
      (0, Zr.useEffect)((() => {
        var rr;
        Sr && (null === (rr = qr.current) || void 0 === rr || rr.scrollIntoView({
          block: "nearest"
        }))
      }), [Sr]);
      const Rr = (rr, Sr) => {
          (0, hr.b)(rr, Object.entries(Sr)), vr.current ? xr() : rr.publishUpdateIfCurrent()
        },
        gr = function(rr) {
          let {
            isDefault: Sr = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const Qr = {
            ...!Er && Ir.isLoggedIn() ? er.current : Nr.current,
            ...rr
          };
          if (!Er) return Nr.current = null, er.current = {}, void Rr(Ir, Qr);
          Nr.current = Qr, Sr || (er.current = {
            ...er.current,
            ...rr
          }), xr(), tr.userContextManager.getCurrentUserContext().then((rr => {
            if (Nr.current !== Qr) return;
            Nr.current = null;
            const Sr = er.current;
            er.current = {};
            const Zr = rr.isLoggedIn() ? Sr : Qr;
            0 !== Object.keys(Zr).length ? Rr(rr, Zr) : vr.current && xr()
          })).catch((rr => {
            console.warn("Couldn't put on the onboarding look held for the account", rr), Nr.current === Qr && (Nr.current = null, er.current = {}, vr.current && xr())
          }))
        },
        Cr = (0, Zr.useRef)(!1);
      (0, Zr.useEffect)((() => {
        Cr.current || (Cr.current = !0, !Er && Ir.isLoggedIn() || gr((0, pr.Yb)(Tr)[1].cosmetics, {
          isDefault: !0
        }))
      }), []), (0, Zr.useEffect)((() => () => {
        Ir.publishUpdateIfCurrent()
      }), [Ir]);
      const Mr = lr("eyes", Hr.eyes),
        Gr = lr("skin", Hr.skin);
      return (0, Kr.jsxs)(Kr.Fragment, {
        children: [(0, Kr.jsx)("div", {
          className: "OnboardingPresets",
          children: Tr.map(((rr, Sr) => {
            let [Qr, {
              cosmetics: Zr
            }] = rr;
            const Wr = function(rr, Sr) {
              return Object.entries(Sr).every((Sr => {
                let [Qr, Zr] = Sr;
                return "skin" === Qr || ("eyes" === Qr ? (null === (Wr = lr("eyes", rr.eyes)) || void 0 === Wr ? void 0 : Wr[0]) === (null === (ar = lr("eyes", Zr)) || void 0 === ar ? void 0 : ar[0]) : rr[Qr] === Zr);
                var Wr, ar
              }))
            }(Hr, Zr);
            return (0, Kr.jsx)("button", {
              type: "button",
              className: Ur()("OnboardingPreset", {
                OnboardingPresetSelected: Wr
              }),
              "aria-label": jr("homePage:onboardingPreset", {
                number: Sr + 1
              }),
              "aria-pressed": Wr,
              onClick: () => {
                (0, fr.k)(`preset.${Qr}`);
                const {
                  eyes: rr,
                  skin: Sr
                } = mr.current;
                gr({
                  ...Zr,
                  ...void 0 !== rr && {
                    eyes: Xr("eyes", lr("eyes", Zr.eyes)[0], rr)
                  },
                  ...void 0 !== Sr && {
                    skin: Xr("skin", "0", Sr)
                  }
                })
              },
              children: (0, Kr.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${Qr}_preview.png)`
                }
              })
            }, Qr)
          }))
        }), ar && (0, Kr.jsx)(Br, {
          open: Sr,
          onToggle: Qr
        }), Sr && (0, Kr.jsxs)("div", {
          ref: qr,
          id: yr,
          className: "OnboardingMore",
          children: [(0, Kr.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, Kr.jsx)(zr.b, {
              cosmetics: Hr
            })
          }), (0, Kr.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, Kr.jsx)(Pr, {
              label: jr("homePage:onboardingEyeColour"),
              colours: Or,
              picked: null === Mr || void 0 === Mr ? void 0 : Mr[1],
              onPick: rr => {
                var Sr;
                (0, fr.k)("eyes"), mr.current.eyes = rr, gr({
                  eyes: Xr("eyes", null !== (Sr = null === Mr || void 0 === Mr ? void 0 : Mr[0]) && void 0 !== Sr ? Sr : "0", rr)
                })
              }
            }), (0, Kr.jsx)(Pr, {
              label: jr("homePage:onboardingSkinColour"),
              colours: Lr,
              picked: null === Gr || void 0 === Gr ? void 0 : Gr[1],
              onPick: rr => {
                (0, fr.k)("skin"), mr.current.skin = rr, gr({
                  skin: Xr("skin", "0", rr)
                })
              }
            })]
          })]
        })]
      })
    }
    var qr = Qr(1321),
      Rr = Qr(26),
      gr = Qr(35341),
      Cr = Qr(1444),
      Mr = Qr(1804);

    function Gr(rr) {
      const {
        t: Sr
      } = (0, Wr.E)(), {
        userContext: Qr,
        isUserContextUpdating: ar
      } = (0, nr.c)(), Ir = ar ? null : Qr.getPlayerName(), Er = (0, Zr.useRef)(null), [pr, xr] = (0, Zr.useState)((() => null === Ir ? (0, qr.f)() : null)), [mr, Nr] = (0, Zr.useState)(null), [Ur, tr] = (0, Zr.useState)(!1), hr = (0, Zr.useRef)("sp"), zr = (0, Yr.b)(), yr = (0, Zr.useRef)(null !== pr), Br = (0, Zr.useRef)(!1), Tr = (0, Zr.useRef)(null), vr = null !== pr && void 0 !== pr ? pr : Ir, Or = (0, Zr.useRef)(null), Lr = rr => {
        Er.current && (Er.current.value = rr), xr(rr)
      }, lr = (0, Zr.useRef)(!1);
      (0, Zr.useEffect)((() => {
        var rr, Sr;
        !Ur && lr.current && (lr.current = !1, null === (rr = Er.current) || void 0 === rr || rr.focus(), null === (Sr = Er.current) || void 0 === Sr || Sr.select())
      }), [Ur]);
      const Xr = (0, Zr.useRef)(null);
      (0, Zr.useEffect)((() => {
        var rr;
        null !== mr && (null === (rr = Xr.current) || void 0 === rr || rr.scrollIntoView({
          block: "nearest"
        }))
      }), [mr]);
      const Pr = (rr, Sr) => {
        const Qr = document.activeElement === Er.current || lr.current;
        tr(!0), Nr(null), rr.then((rr => {
          zr.current && (tr(!1), lr.current = Qr, Sr(rr))
        }))
      };
      (0, Zr.useEffect)((() => {
        var rr, Sr;
        Rr.c.get("isTouchScreen") || (null === (rr = Er.current) || void 0 === rr || rr.focus(), null === (Sr = Er.current) || void 0 === Sr || Sr.select())
      }), []);
      const Hr = () => {
          (0, fr.m)(hr.current), rr()
        },
        Gr = (rr, Sr) => {
          var Qr, Zr;
          if (Tr.current === rr) return hr.current = null !== (Qr = null === (Zr = Or.current) || void 0 === Zr ? void 0 : Zr.outcome) && void 0 !== Qr ? Qr : "sp", void Hr();
          Tr.current = rr, Nr(Sr)
        },
        kr = rr => "refused" === rr.outcome ? rr.message : Sr((0, gr.g)(rr.failure)),
        Ar = rr => !(rr.length >= qr.j) && (Nr({
          kind: "error",
          message: Sr("homePage:changeNameMinLengthError", {
            length: qr.j
          })
        }), !0),
        Vr = rr => {
          var Zr, Wr, ar;
          rr.toLowerCase() !== (null === (Zr = null !== (Wr = null === (ar = Or.current) || void 0 === ar ? void 0 : ar.name) && void 0 !== Wr ? Wr : Ir) || void 0 === Zr ? void 0 : Zr.toLowerCase()) ? Ar(rr) || Pr((0, gr.d)(Qr, rr), (Qr => {
            "taken" !== Qr.outcome ? "refused" !== Qr.outcome && "failed" !== Qr.outcome ? Qr.name !== rr ? (hr.current = "suffixed", Or.current = {
              name: Qr.name,
              outcome: hr.current
            }, Lr(Qr.name), Nr({
              kind: "suffixed",
              taken: rr,
              name: Qr.name
            })) : Hr() : Gr(rr, {
              kind: "error",
              message: kr(Qr)
            }) : Gr(rr, {
              kind: "error",
              message: Sr("homePage:onboardingNameAllTaken")
            })
          })) : Hr()
        };
      (0, Zr.useEffect)((() => {
        if (!Ur || null !== Ir || !Br.current) return;
        const rr = setTimeout((() => {
          Br.current = !1, tr(!1), Gr(vr, {
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(rr)
        }
      }), [Ur, Ir]), (0, Zr.useEffect)((() => {
        if (null === Ir) return;
        const rr = yr.current && "sp" === hr.current && Qr.isLoggedIn();
        yr.current = !1, Tr.current = null, "noAccount" === (null === mr || void 0 === mr ? void 0 : mr.kind) && Nr(null), rr && Lr(Ir), Br.current && (Br.current = !1, tr(!1), Vr(rr ? Ir : vr))
      }), [Ir]);
      const ir = "error" === (null === mr || void 0 === mr ? void 0 : mr.kind) ? mr.message : "noAccount" === (null === mr || void 0 === mr ? void 0 : mr.kind) ? Sr("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, Kr.jsxs)("div", {
          className: "OnboardingNameField",
          ref: Xr,
          children: [(0, Kr.jsx)("div", {
            className: "OnboardingSubtitle",
            children: Sr("general:name")
          }), null === vr && (0, Kr.jsx)(Cr.c, {}), null !== vr && (0, Kr.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, Kr.jsx)(Mr.b, {
              className: "OnboardingNameInput",
              ariaLabel: Sr("general:name"),
              maxLength: qr.h,
              defaultValue: vr,
              domRef: Er,
              forcedText: Ur ? vr : null,
              onEnter: () => {
                var rr;
                null === (rr = Er.current) || void 0 === rr || rr.blur()
              },
              onValueChange: rr => {
                const Qr = (0, qr.r)(rr);
                Qr !== rr && Er.current && (Er.current.value = Qr), Nr(Qr !== rr ? {
                  kind: "error",
                  message: Sr("homePage:nameCharacters")
                } : null), Qr !== vr && (hr.current = "changed"), xr(Qr)
              }
            }), (0, Kr.jsx)(jr.h, {
              className: "OnboardingRandomName",
              ariaLabel: Sr("homePage:onboardingRandomName"),
              disabled: Ur,
              onClick: () => {
                (() => {
                  if (Nr(null), null === Ir || Qr.isLoggedIn()) return Lr((0, qr.f)()), void(hr.current = "rolled");
                  Pr((0, gr.n)(Qr), (rr => {
                    var Sr, Zr;
                    if ("refused" === rr.outcome || "failed" === rr.outcome) return Lr(Qr.getPlayerName()), hr.current = null !== (Sr = null === (Zr = Or.current) || void 0 === Zr ? void 0 : Zr.outcome) && void 0 !== Sr ? Sr : "sp", void Nr({
                      kind: "error",
                      message: kr(rr)
                    });
                    hr.current = "rolled", Or.current = {
                      name: rr.name,
                      outcome: "rolled"
                    }, Lr(rr.name)
                  }))
                })()
              },
              children: (0, Kr.jsx)(er.c, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === mr || void 0 === mr ? void 0 : mr.kind) && (0, Kr.jsx)("div", {
            className: "OnboardingNameNote",
            children: Sr("homePage:onboardingNameSuffixed", {
              taken: mr.taken,
              name: mr.name
            })
          }), null !== ir && (0, Kr.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: ir
          })]
        }),
        submit: () => {
          if (!Ur && null !== vr) {
            if (null === Ir) {
              if (Ar(vr)) return;
              return lr.current = document.activeElement === Er.current, Br.current = !0, tr(!0), void Nr(null)
            }
            Vr(vr)
          }
        },
        busy: Ur,
        ready: null !== vr
      }
    }

    function kr(rr) {
      return rr < 500
    }

    function Ar() {
      const rr = {
          finished: !1
        },
        Sr = {
          press: null
        };
      return ar.NotificationProvider.showCustomPopup({
        body: Qr => (0, Kr.jsx)(Vr, {
          onFinish: () => {
            (0, fr.i)(), rr.finished = !0, Qr()
          },
          doneRef: Sr
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        disableExitButton: !0,
        ignoreBackgroundPress: !0,
        dismiss: () => {
          var rr;
          null === (rr = Sr.press) || void 0 === rr || rr.call(Sr)
        },
        onClose: () => {
          rr.finished || (0, fr.g)()
        }
      })
    }

    function Vr(rr) {
      let {
        onFinish: Sr,
        doneRef: Qr
      } = rr;
      const {
        t: ar
      } = (0, Wr.E)(), Er = Gr(Sr), pr = Er.ready && !Er.busy ? Er.submit : null;
      (0, Zr.useEffect)((() => (Qr.press = pr, () => {
        Qr.press = null
      })));
      const [xr, mr] = (0, Zr.useState)(!1), Nr = (0, Ir.t)(((rr, Sr) => kr(Sr))), Ur = () => {
        mr(!xr)
      };
      return (0, Zr.useEffect)((() => {
        (0, fr.o)()
      }), []), (0, Kr.jsxs)("div", {
        className: "Onboarding",
        children: [(0, Kr.jsx)("div", {
          className: "OnboardingTitle",
          children: ar("homePage:onboardingTitle")
        }), (0, Kr.jsxs)("div", {
          className: "OnboardingBody",
          children: [Er.field, (0, Kr.jsx)(Hr, {
            moreOptions: xr,
            onToggleMoreOptions: Ur,
            moreOptionsBelowPresets: !Nr
          })]
        }), (0, Kr.jsxs)("div", {
          className: "OnboardingFooter",
          children: [Nr && (0, Kr.jsx)(Br, {
            open: xr,
            onToggle: Ur
          }), (0, Kr.jsx)(jr.p, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: Er.busy,
            disabled: !Er.ready,
            onClick: Er.submit,
            children: ar("homePage:onboardingDone")
          })]
        })]
      })
    }
  },
  37827: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => jr
    });
    var Zr = Qr(2089),
      Wr = Qr(1629);
    const ar = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(rr, Sr) {
        rr !== this.userContext && this.sendHeld(), this.userContext = rr;
        for (const [Zr, Wr] of Sr) this.pending.set(Zr, Wr);
        if (null !== this.timer) return;
        const Qr = this.lastSentAt + 1100 - Date.now();
        Qr <= 0 ? this.send(rr) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), Qr), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(rr) {
        const Sr = Array.from(this.pending, (rr => {
          let [Sr, Qr] = rr;
          return {
            fW: Sr,
            EW: Qr
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), Wr.c.updateCosmetics(rr, Sr).catch((rr => {
          console.error("Failed to update cosmetics", rr)
        }))
      }
    };

    function jr(rr, Sr) {
      for (const [Qr, Zr] of Sr) rr.setPlayerCosmetics(Qr, Zr);
      if (null === Zr.gameBridge.latest("connectedGame").websocketUrl) ar.save(rr, Sr);
      else
        for (const [Qr, Wr] of Sr) Zr.gameBridge.send("updateMyCosmetic", {
          fW: Qr,
          EW: Wr
        })
    }
  },
  35341: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Yr,
      g: () => Er,
      k: () => tr,
      n: () => Ur
    });
    var Zr = Qr(161),
      Wr = Qr(1321),
      ar = Qr(1262),
      jr = Qr(1187),
      Ir = Qr(1879);
    const fr = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function Er(rr) {
      return fr[rr]
    }

    function pr(rr) {
      return (0, Ir.c)(rr) ? "outdated" : rr instanceof Zr.b ? 429 === rr.httpCode ? "busy" : "server" : "offline"
    }

    function xr(rr, Sr, Qr) {
      return (0, jr.postJsonWithMetricsCookiesAndJsonResponse)(`${ar.clientSideServerUrls.indexUrl}${Sr}`, Qr, {
        retries: 3
      }, rr.getMetricsCookies()).catch((rr => (console.error("Bad response from the server when trying to change name:", Sr, rr), {
        outcome: "failed",
        failure: pr(rr)
      })))
    }

    function mr(rr) {
      return "outcome" in rr && "failed" === rr.outcome
    }

    function Nr(rr) {
      return console.error("Error when trying to get with new name from DB", rr), {
        outcome: "refused",
        message: rr
      }
    }
    async function Ur(rr) {
      const Sr = await xr(rr, "/index/name/random", {});
      return mr(Sr) ? Sr : "err" in Sr ? Nr(Sr.err) : (rr.setPlayerName(Sr.name), {
        outcome: "changed",
        name: Sr.name
      })
    }
    async function tr(rr, Sr) {
      const Qr = await xr(rr, "/index/name/update", {
        name: Sr
      });
      return mr(Qr) ? Qr : "err" in Qr ? Nr(Qr.err) : Qr.nameExists ? {
        outcome: "taken"
      } : (rr.setPlayerName(Sr), {
        outcome: "changed",
        name: Sr
      })
    }

    function hr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const Zr = 1 === Sr ? 1 : 10 ** (Sr - 1),
        ar = String(Zr + Math.floor(Qr() * (10 ** Sr - Zr)));
      return `${rr.slice(0,Wr.h-Sr)}${ar}`
    }
    const zr = [1, 2, 3, 4];
    async function Yr(rr, Sr) {
      const Qr = await tr(rr, Sr);
      if ("taken" !== Qr.outcome) return Qr;
      for (const Zr of zr) {
        const Qr = hr(Sr, Zr),
          Wr = await tr(rr, Qr);
        if ("taken" !== Wr.outcome) return Wr
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);
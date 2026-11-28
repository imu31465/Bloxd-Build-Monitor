export const id = 222;
export const ids = [222];
export const modules = {
  37608: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      isMoreOptionsInFooter: () => vb,
      showOnboardingPopup: () => Qb
    });
    var eb = Mb(64),
      Hb = Mb(1259),
      pb = Mb(1504),
      Vb = Mb(1616),
      gb = Mb(1174),
      lb = Mb(5135),
      Lb = Mb(1735),
      Ib = Mb(382),
      Ob = Mb(1726),
      Ub = Mb(3217),
      tb = Mb(1159),
      Cb = Mb.n(tb),
      Eb = Mb(1186),
      Fb = Mb(37611),
      Bb = Mb(3402),
      sb = Mb(4883),
      mb = Mb(1179),
      hb = Mb(1475),
      zb = Mb(1364);
    const Xb = "OnboardingMorePanel";

    function xb(bb) {
      let {
        open: wb,
        onToggle: Mb
      } = bb;
      const {
        t: eb
      } = (0, Hb.C)();
      return (0, zb.jsxs)("button", {
        type: "button",
        className: "OnboardingMoreOptions",
        "aria-expanded": wb,
        "aria-controls": wb ? Xb : void 0,
        onClick: () => {
          wb || (0, lb.l)("more"), Mb()
        },
        children: [eb("homePage:onboardingMoreOptions"), (0, zb.jsx)(hb.b, {
          name: wb ? "caret-up" : "caret-down"
        })]
      })
    }
    const jb = Object.entries(Lb.d).filter((bb => {
      let [, wb] = bb;
      return "default" === wb.cosmeticPack
    }));

    function Kb(bb) {
      return Ob.c.default.colourGroups[bb].colours.map(((bb, wb) => {
        let {
          rbg: Mb,
          order: eb
        } = bb;
        return {
          rbg: Mb,
          order: eb,
          index: wb
        }
      })).sort(((bb, wb) => bb.order - wb.order))
    }
    const rb = Kb("eyes"),
      Rb = Kb("skin");

    function Db(bb, wb) {
      var Mb;
      if (void 0 === wb || "default" !== (null === (Mb = (0, Ub.l)(bb, wb)) || void 0 === Mb ? void 0 : Mb.cosmeticPack)) return null;
      const eb = (0, Ub.i)(wb);
      return eb && [eb[0], Number(eb[1])]
    }

    function cb(bb, wb, Mb) {
      return `${bb}_${wb}_${Mb}`
    }

    function Yb(bb) {
      let {
        label: wb,
        colours: Mb,
        picked: eb,
        onPick: pb
      } = bb;
      const {
        t: Vb
      } = (0, Hb.C)();
      return (0, zb.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, zb.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: wb
        }), (0, zb.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": wb,
          children: Mb.map(((bb, wb) => {
            let {
              rbg: Mb,
              index: Hb
            } = bb;
            return (0, zb.jsx)("button", {
              type: "button",
              className: Cb()("OnboardingSwatch", {
                OnboardingSwatchSelected: Hb === eb
              }),
              style: {
                backgroundColor: `rgb(${Mb.join(",")})`
              },
              role: "radio",
              "aria-checked": Hb === eb,
              "aria-label": Vb("homePage:onboardingColour", {
                number: wb + 1
              }),
              onClick: () => {
                pb(Hb)
              }
            }, Hb)
          }))
        })]
      })
    }

    function Zb(bb) {
      let {
        moreOptions: wb,
        onToggleMoreOptions: Mb,
        moreOptionsBelowPresets: pb
      } = bb;
      const {
        t: Vb
      } = (0, Hb.C)(), {
        userContext: gb,
        isUserContextUpdating: Lb
      } = (0, mb.e)(), [, Ob] = (0, eb.useReducer)((bb => bb + 1), 0), Ub = (0, eb.useRef)({}), tb = (0, eb.useRef)(null), hb = (0, eb.useRef)({}), Kb = (0, sb.d)(), Zb = {
        ...gb.getPlayerCosmetics(),
        ...tb.current
      }, fb = (0, eb.useRef)(null);
      (0, eb.useEffect)((() => {
        var bb;
        wb && (null === (bb = fb.current) || void 0 === bb || bb.scrollIntoView({
          block: "nearest"
        }))
      }), [wb]);
      const Ab = (bb, wb) => {
          (0, Fb.c)(bb, Object.entries(wb)), Kb.current ? Ob() : bb.publishUpdateIfCurrent()
        },
        Wb = function(bb) {
          let {
            isDefault: wb = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const Mb = {
            ...!Lb && gb.isLoggedIn() ? hb.current : tb.current,
            ...bb
          };
          if (!Lb) return tb.current = null, hb.current = {}, void Ab(gb, Mb);
          tb.current = Mb, wb || (hb.current = {
            ...hb.current,
            ...bb
          }), Ob(), Eb.userContextManager.getCurrentUserContext().then((bb => {
            if (tb.current !== Mb) return;
            tb.current = null;
            const wb = hb.current;
            hb.current = {};
            const eb = bb.isLoggedIn() ? wb : Mb;
            0 !== Object.keys(eb).length ? Ab(bb, eb) : Kb.current && Ob()
          })).catch((bb => {
            console.warn("Couldn't put on the onboarding look held for the account", bb), tb.current === Mb && (tb.current = null, hb.current = {}, Kb.current && Ob())
          }))
        },
        Jb = (0, eb.useRef)(!1);
      (0, eb.useEffect)((() => {
        Jb.current || (Jb.current = !0, !Lb && gb.isLoggedIn() || Wb((0, Ib.jc)(jb)[1].cosmetics, {
          isDefault: !0
        }))
      }), []), (0, eb.useEffect)((() => () => {
        gb.publishUpdateIfCurrent()
      }), [gb]);
      const Sb = Db("eyes", Zb.eyes),
        Nb = Db("skin", Zb.skin);
      return (0, zb.jsxs)(zb.Fragment, {
        children: [(0, zb.jsx)("div", {
          className: "OnboardingPresets",
          children: jb.map(((bb, wb) => {
            let [Mb, {
              cosmetics: eb
            }] = bb;
            const Hb = function(bb, wb) {
              return Object.entries(wb).every((wb => {
                let [Mb, eb] = wb;
                return "skin" === Mb || ("eyes" === Mb ? (null === (Hb = Db("eyes", bb.eyes)) || void 0 === Hb ? void 0 : Hb[0]) === (null === (pb = Db("eyes", eb)) || void 0 === pb ? void 0 : pb[0]) : bb[Mb] === eb);
                var Hb, pb
              }))
            }(Zb, eb);
            return (0, zb.jsx)("button", {
              type: "button",
              className: Cb()("OnboardingPreset", {
                OnboardingPresetSelected: Hb
              }),
              "aria-label": Vb("homePage:onboardingPreset", {
                number: wb + 1
              }),
              "aria-pressed": Hb,
              onClick: () => {
                (0, lb.l)(`preset.${Mb}`);
                const {
                  eyes: bb,
                  skin: wb
                } = Ub.current;
                Wb({
                  ...eb,
                  ...void 0 !== bb && {
                    eyes: cb("eyes", Db("eyes", eb.eyes)[0], bb)
                  },
                  ...void 0 !== wb && {
                    skin: cb("skin", "0", wb)
                  }
                })
              },
              children: (0, zb.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${Mb}_preview.png)`
                }
              })
            }, Mb)
          }))
        }), pb && (0, zb.jsx)(xb, {
          open: wb,
          onToggle: Mb
        }), wb && (0, zb.jsxs)("div", {
          ref: fb,
          id: Xb,
          className: "OnboardingMore",
          children: [(0, zb.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, zb.jsx)(Bb.e, {
              cosmetics: Zb
            })
          }), (0, zb.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, zb.jsx)(Yb, {
              label: Vb("homePage:onboardingEyeColour"),
              colours: rb,
              picked: null === Sb || void 0 === Sb ? void 0 : Sb[1],
              onPick: bb => {
                var wb;
                (0, lb.l)("eyes"), Ub.current.eyes = bb, Wb({
                  eyes: cb("eyes", null !== (wb = null === Sb || void 0 === Sb ? void 0 : Sb[0]) && void 0 !== wb ? wb : "0", bb)
                })
              }
            }), (0, zb.jsx)(Yb, {
              label: Vb("homePage:onboardingSkinColour"),
              colours: Rb,
              picked: null === Nb || void 0 === Nb ? void 0 : Nb[1],
              onPick: bb => {
                (0, lb.l)("skin"), Ub.current.skin = bb, Wb({
                  skin: cb("skin", "0", bb)
                })
              }
            })]
          })]
        })]
      })
    }
    var fb = Mb(1333),
      Ab = Mb(26),
      Wb = Mb(35223),
      Jb = Mb(1468),
      Sb = Mb(1876);

    function Nb(bb) {
      const {
        t: wb
      } = (0, Hb.C)(), {
        userContext: Mb,
        isUserContextUpdating: pb
      } = (0, mb.e)(), gb = pb ? null : Mb.getPlayerName(), Lb = (0, eb.useRef)(null), [Ib, Ob] = (0, eb.useState)((() => null === gb ? (0, fb.f)() : null)), [Ub, tb] = (0, eb.useState)(null), [Cb, Eb] = (0, eb.useState)(!1), Fb = (0, eb.useRef)("nI"), Bb = (0, sb.d)(), Xb = (0, eb.useRef)(null !== Ib), xb = (0, eb.useRef)(!1), jb = (0, eb.useRef)(null), Kb = null !== Ib && void 0 !== Ib ? Ib : gb, rb = (0, eb.useRef)(null), Rb = bb => {
        Lb.current && (Lb.current.value = bb), Ob(bb)
      }, Db = (0, eb.useRef)(!1);
      (0, eb.useEffect)((() => {
        var bb, wb;
        !Cb && Db.current && (Db.current = !1, null === (bb = Lb.current) || void 0 === bb || bb.focus(), null === (wb = Lb.current) || void 0 === wb || wb.select())
      }), [Cb]);
      const cb = (0, eb.useRef)(null);
      (0, eb.useEffect)((() => {
        var bb;
        null !== Ub && (null === (bb = cb.current) || void 0 === bb || bb.scrollIntoView({
          block: "nearest"
        }))
      }), [Ub]);
      const Yb = (bb, wb) => {
        const Mb = document.activeElement === Lb.current || Db.current;
        Eb(!0), tb(null), bb.then((bb => {
          Bb.current && (Eb(!1), Db.current = Mb, wb(bb))
        }))
      };
      (0, eb.useEffect)((() => {
        var bb, wb;
        Ab.c.get("isTouchScreen") || (null === (bb = Lb.current) || void 0 === bb || bb.focus(), null === (wb = Lb.current) || void 0 === wb || wb.select())
      }), []);
      const Zb = () => {
          (0, lb.o)(Fb.current), bb()
        },
        Nb = (bb, wb) => {
          var Mb, eb;
          if (jb.current === bb) return Fb.current = null !== (Mb = null === (eb = rb.current) || void 0 === eb ? void 0 : eb.outcome) && void 0 !== Mb ? Mb : "nI", void Zb();
          jb.current = bb, tb(wb)
        },
        vb = bb => "refused" === bb.outcome ? bb.message : wb((0, Wb.g)(bb.failure)),
        Qb = bb => !(bb.length >= fb.k) && (tb({
          kind: "error",
          message: wb("homePage:changeNameMinLengthError", {
            length: fb.k
          })
        }), !0),
        Gb = bb => {
          var eb, Hb, pb;
          bb.toLowerCase() !== (null === (eb = null !== (Hb = null === (pb = rb.current) || void 0 === pb ? void 0 : pb.name) && void 0 !== Hb ? Hb : gb) || void 0 === eb ? void 0 : eb.toLowerCase()) ? Qb(bb) || Yb((0, Wb.c)(Mb, bb), (Mb => {
            "taken" !== Mb.outcome ? "refused" !== Mb.outcome && "failed" !== Mb.outcome ? Mb.name !== bb ? (Fb.current = "suffixed", rb.current = {
              name: Mb.name,
              outcome: Fb.current
            }, Rb(Mb.name), tb({
              kind: "suffixed",
              taken: bb,
              name: Mb.name
            })) : Zb() : Nb(bb, {
              kind: "error",
              message: vb(Mb)
            }) : Nb(bb, {
              kind: "error",
              message: wb("homePage:onboardingNameAllTaken")
            })
          })) : Zb()
        };
      (0, eb.useEffect)((() => {
        if (!Cb || null !== gb || !xb.current) return;
        const bb = setTimeout((() => {
          xb.current = !1, Eb(!1), Nb(Kb, {
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(bb)
        }
      }), [Cb, gb]), (0, eb.useEffect)((() => {
        if (null === gb) return;
        const bb = Xb.current && "nI" === Fb.current && Mb.isLoggedIn();
        Xb.current = !1, jb.current = null, "noAccount" === (null === Ub || void 0 === Ub ? void 0 : Ub.kind) && tb(null), bb && Rb(gb), xb.current && (xb.current = !1, Eb(!1), Gb(bb ? gb : Kb))
      }), [gb]);
      const qb = "error" === (null === Ub || void 0 === Ub ? void 0 : Ub.kind) ? Ub.message : "noAccount" === (null === Ub || void 0 === Ub ? void 0 : Ub.kind) ? wb("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, zb.jsxs)("div", {
          className: "OnboardingNameField",
          ref: cb,
          children: [(0, zb.jsx)("div", {
            className: "OnboardingSubtitle",
            children: wb("general:name")
          }), null === Kb && (0, zb.jsx)(Jb.c, {}), null !== Kb && (0, zb.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, zb.jsx)(Sb.d, {
              className: "OnboardingNameInput",
              ariaLabel: wb("general:name"),
              maxLength: fb.g,
              defaultValue: Kb,
              domRef: Lb,
              forcedText: Cb ? Kb : null,
              onEnter: () => {
                var bb;
                null === (bb = Lb.current) || void 0 === bb || bb.blur()
              },
              onValueChange: bb => {
                const Mb = (0, fb.m)(bb);
                Mb !== bb && Lb.current && (Lb.current.value = Mb), tb(Mb !== bb ? {
                  kind: "error",
                  message: wb("homePage:nameCharacters")
                } : null), Mb !== Kb && (Fb.current = "changed"), Ob(Mb)
              }
            }), (0, zb.jsx)(Vb.f, {
              className: "OnboardingRandomName",
              ariaLabel: wb("homePage:onboardingRandomName"),
              disabled: Cb,
              onClick: () => {
                (() => {
                  if (tb(null), null === gb || Mb.isLoggedIn()) return Rb((0, fb.f)()), void(Fb.current = "rolled");
                  Yb((0, Wb.k)(Mb), (bb => {
                    var wb, eb;
                    if ("refused" === bb.outcome || "failed" === bb.outcome) return Rb(Mb.getPlayerName()), Fb.current = null !== (wb = null === (eb = rb.current) || void 0 === eb ? void 0 : eb.outcome) && void 0 !== wb ? wb : "nI", void tb({
                      kind: "error",
                      message: vb(bb)
                    });
                    Fb.current = "rolled", rb.current = {
                      name: bb.name,
                      outcome: "rolled"
                    }, Rb(bb.name)
                  }))
                })()
              },
              children: (0, zb.jsx)(hb.b, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === Ub || void 0 === Ub ? void 0 : Ub.kind) && (0, zb.jsx)("div", {
            className: "OnboardingNameNote",
            children: wb("homePage:onboardingNameSuffixed", {
              taken: Ub.taken,
              name: Ub.name
            })
          }), null !== qb && (0, zb.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: qb
          })]
        }),
        submit: () => {
          if (!Cb && null !== Kb) {
            if (null === gb) {
              if (Qb(Kb)) return;
              return Db.current = document.activeElement === Lb.current, xb.current = !0, Eb(!0), void tb(null)
            }
            Gb(Kb)
          }
        },
        busy: Cb,
        ready: null !== Kb
      }
    }

    function vb(bb) {
      return bb < 500
    }

    function Qb() {
      const bb = {
          finished: !1
        },
        wb = {
          press: null
        };
      return pb.NotificationProvider.showCustomPopup({
        body: Mb => (0, zb.jsx)(Gb, {
          onFinish: () => {
            (0, lb.i)(), bb.finished = !0, Mb()
          },
          doneRef: wb
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        disableExitButton: !0,
        ignoreBackgroundPress: !0,
        dismiss: () => {
          var bb;
          null === (bb = wb.press) || void 0 === bb || bb.call(wb)
        },
        onClose: () => {
          bb.finished || (0, lb.f)()
        }
      })
    }

    function Gb(bb) {
      let {
        onFinish: wb,
        doneRef: Mb
      } = bb;
      const {
        t: pb
      } = (0, Hb.C)(), Lb = Nb(wb), Ib = Lb.ready && !Lb.busy ? Lb.submit : null;
      (0, eb.useEffect)((() => (Mb.press = Ib, () => {
        Mb.press = null
      })));
      const [Ob, Ub] = (0, eb.useState)(!1), tb = (0, gb.q)(((bb, wb) => vb(wb))), Cb = () => {
        Ub(!Ob)
      };
      return (0, eb.useEffect)((() => {
        (0, lb.s)()
      }), []), (0, zb.jsxs)("div", {
        className: "Onboarding",
        children: [(0, zb.jsx)("div", {
          className: "OnboardingTitle",
          children: pb("homePage:onboardingTitle")
        }), (0, zb.jsxs)("div", {
          className: "OnboardingBody",
          children: [Lb.field, (0, zb.jsx)(Zb, {
            moreOptions: Ob,
            onToggleMoreOptions: Cb,
            moreOptionsBelowPresets: !tb
          })]
        }), (0, zb.jsxs)("div", {
          className: "OnboardingFooter",
          children: [tb && (0, zb.jsx)(xb, {
            open: Ob,
            onToggle: Cb
          }), (0, zb.jsx)(Vb.p, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: Lb.busy,
            disabled: !Lb.ready,
            onClick: Lb.submit,
            children: pb("homePage:onboardingDone")
          })]
        })]
      })
    }
  },
  37611: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb
    });
    var eb = Mb(2142),
      Hb = Mb(1677);
    const pb = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(bb, wb) {
        bb !== this.userContext && this.sendHeld(), this.userContext = bb;
        for (const [eb, Hb] of wb) this.pending.set(eb, Hb);
        if (null !== this.timer) return;
        const Mb = this.lastSentAt + 1100 - Date.now();
        Mb <= 0 ? this.send(bb) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), Mb), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(bb) {
        const wb = Array.from(this.pending, (bb => {
          let [wb, Mb] = bb;
          return {
            gH: wb,
            lH: Mb
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), Hb.e.updateCosmetics(bb, wb).catch((bb => {
          console.error("Failed to update cosmetics", bb)
        }))
      }
    };

    function Vb(bb, wb) {
      for (const [Mb, eb] of wb) bb.setPlayerCosmetics(Mb, eb);
      if (null === eb.gameBridge.latest("connectedGame").websocketUrl) pb.save(bb, wb);
      else
        for (const [Mb, Hb] of wb) eb.gameBridge.send("updateMyCosmetic", {
          gH: Mb,
          lH: Hb
        })
    }
  },
  35223: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => sb,
      g: () => Lb,
      j: () => Eb,
      k: () => Cb
    });
    var eb = Mb(192),
      Hb = Mb(1333),
      pb = Mb(1271),
      Vb = Mb(1186),
      gb = Mb(1958);
    const lb = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function Lb(bb) {
      return lb[bb]
    }

    function Ib(bb) {
      return (0, gb.b)(bb) ? "outdated" : bb instanceof eb.b ? 429 === bb.httpCode ? "busy" : "server" : "offline"
    }

    function Ob(bb, wb, Mb) {
      return (0, Vb.postJsonWithMetricsCookiesAndJsonResponse)(`${pb.clientSideServerUrls.indexUrl}${wb}`, Mb, {
        retries: 3
      }, bb.getMetricsCookies()).catch((bb => (console.error("Bad response from the server when trying to change name:", wb, bb), {
        outcome: "failed",
        failure: Ib(bb)
      })))
    }

    function Ub(bb) {
      return "outcome" in bb && "failed" === bb.outcome
    }

    function tb(bb) {
      return console.error("Error when trying to get with new name from DB", bb), {
        outcome: "refused",
        message: bb
      }
    }
    async function Cb(bb) {
      const wb = await Ob(bb, "/index/name/random", {});
      return Ub(wb) ? wb : "err" in wb ? tb(wb.err) : (bb.setPlayerName(wb.name), {
        outcome: "changed",
        name: wb.name
      })
    }
    async function Eb(bb, wb) {
      const Mb = await Ob(bb, "/index/name/update", {
        name: wb
      });
      return Ub(Mb) ? Mb : "err" in Mb ? tb(Mb.err) : Mb.nameExists ? {
        outcome: "taken"
      } : (bb.setPlayerName(wb), {
        outcome: "changed",
        name: wb
      })
    }

    function Fb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const eb = 1 === wb ? 1 : 10 ** (wb - 1),
        pb = String(eb + Math.floor(Mb() * (10 ** wb - eb)));
      return `${bb.slice(0,Hb.g-wb)}${pb}`
    }
    const Bb = [1, 2, 3, 4];
    async function sb(bb, wb) {
      const Mb = await Eb(bb, wb);
      if ("taken" !== Mb.outcome) return Mb;
      for (const eb of Bb) {
        const Mb = Fb(wb, eb),
          Hb = await Eb(bb, Mb);
        if ("taken" !== Hb.outcome) return Hb
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
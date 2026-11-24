export const id = 197;
export const ids = [197];
export const modules = {
  36593: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      showOnboardingPopup: () => Bp
    });
    var Op = cp(62),
      op = cp(1201),
      Ip = cp(1372),
      Sp = cp(1480),
      xp = cp(4417),
      Lp = cp(1579),
      Yp = cp(1577),
      Dp = cp(2276),
      Ap = cp(1049),
      Pp = cp.n(Ap),
      Wp = cp(1149),
      yp = cp(36602),
      Up = cp(1060),
      wp = cp(2429),
      vp = cp(3587),
      tp = cp(1141),
      Hp = cp(1112);
    const dp = Object.entries(Lp.b).filter((pp => {
      let [, ip] = pp;
      return "default" === ip.cosmeticPack
    }));

    function ep(pp) {
      return Yp.e.default.colourGroups[pp].colours.map(((pp, ip) => {
        let {
          rbg: cp,
          order: Op
        } = pp;
        return {
          rbg: cp,
          order: Op,
          index: ip
        }
      })).sort(((pp, ip) => pp.order - ip.order))
    }
    const jp = ep("eyes"),
      kp = ep("skin");

    function mp(pp, ip) {
      var cp;
      if (void 0 === ip || "default" !== (null === (cp = (0, Dp.m)(pp, ip)) || void 0 === cp ? void 0 : cp.cosmeticPack)) return null;
      const Op = (0, Dp.j)(ip);
      return Op && [Op[0], Number(Op[1])]
    }

    function Rp(pp, ip, cp) {
      return `${pp}_${ip}_${cp}`
    }

    function qp(pp) {
      let {
        label: ip,
        colours: cp,
        picked: Op,
        onPick: Ip
      } = pp;
      const {
        t: Sp
      } = (0, op.H)();
      return (0, Hp.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, Hp.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: ip
        }), (0, Hp.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": ip,
          children: cp.map(((pp, ip) => {
            let {
              rbg: cp,
              index: op
            } = pp;
            return (0, Hp.jsx)("button", {
              type: "button",
              className: Pp()("OnboardingSwatch", {
                OnboardingSwatchSelected: op === Op
              }),
              style: {
                backgroundColor: `rgb(${cp.join(",")})`
              },
              role: "radio",
              "aria-checked": op === Op,
              "aria-label": Sp("homePage:onboardingColour", {
                number: ip + 1
              }),
              onClick: () => {
                Ip(op)
              }
            }, op)
          }))
        })]
      })
    }

    function Mp() {
      const {
        t: pp
      } = (0, op.H)(), {
        userContext: ip,
        isUserContextUpdating: cp
      } = (0, tp.b)(), [Ip, Sp] = (0, Op.useState)(!1), [, Lp] = (0, Op.useReducer)((pp => pp + 1), 0), Yp = (0, Op.useRef)({}), Dp = (0, Op.useRef)(null), Ap = (0, vp.b)(), ep = {
        ...ip.getPlayerCosmetics(),
        ...Dp.current
      }, Mp = (0, Op.useRef)(null);
      (0, Op.useEffect)((() => {
        var pp;
        Ip && (null === (pp = Mp.current) || void 0 === pp || pp.scrollIntoView({
          block: "nearest"
        }))
      }), [Ip]);
      const Cp = (pp, ip) => {
          (0, yp.b)(pp, Object.entries(ip)), Ap.current ? Lp() : pp.publishUpdateIfCurrent()
        },
        Ep = pp => {
          const Op = {
            ...Dp.current,
            ...pp
          };
          if (!cp) return Dp.current = null, void Cp(ip, Op);
          Dp.current = Op, Lp(), Wp.userContextManager.getCurrentUserContext().then((pp => {
            Dp.current === Op && (Dp.current = null, Cp(pp, Op))
          })).catch((pp => {
            console.warn("Couldn't put on the onboarding look held for the account", pp), Dp.current === Op && (Dp.current = null, Ap.current && Lp())
          }))
        };
      (0, Op.useEffect)((() => () => {
        ip.publishUpdateIfCurrent()
      }), [ip]);
      const Xp = mp("eyes", ep.eyes),
        lp = mp("skin", ep.skin);
      return (0, Hp.jsxs)(Hp.Fragment, {
        children: [(0, Hp.jsx)("div", {
          className: "OnboardingPresets",
          children: dp.map(((ip, cp) => {
            let [Op, {
              cosmetics: op
            }] = ip;
            const Ip = function(pp, ip) {
              return Object.entries(ip).every((ip => {
                let [cp, Op] = ip;
                return "skin" === cp || ("eyes" === cp ? (null === (op = mp("eyes", pp.eyes)) || void 0 === op ? void 0 : op[0]) === (null === (Ip = mp("eyes", Op)) || void 0 === Ip ? void 0 : Ip[0]) : pp[cp] === Op);
                var op, Ip
              }))
            }(ep, op);
            return (0, Hp.jsx)("button", {
              type: "button",
              className: Pp()("OnboardingPreset", {
                OnboardingPresetSelected: Ip
              }),
              "aria-label": pp("homePage:onboardingPreset", {
                number: cp + 1
              }),
              "aria-pressed": Ip,
              onClick: () => {
                (0, xp.k)(`preset.${Op}`);
                const {
                  eyes: pp,
                  skin: ip
                } = Yp.current;
                Ep({
                  ...op,
                  ...void 0 !== pp && {
                    eyes: Rp("eyes", mp("eyes", op.eyes)[0], pp)
                  },
                  ...void 0 !== ip && {
                    skin: Rp("skin", "0", ip)
                  }
                })
              },
              children: (0, Hp.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${Op}_preview.png)`
                }
              })
            }, Op)
          }))
        }), (0, Hp.jsxs)("button", {
          type: "button",
          className: "OnboardingMoreOptions",
          "aria-expanded": Ip,
          onClick: () => {
            Ip || (0, xp.k)("more"), Sp(!Ip)
          },
          children: [pp("homePage:onboardingMoreOptions"), (0, Hp.jsx)(Up.d, {
            name: Ip ? "caret-up" : "caret-down"
          })]
        }), Ip && (0, Hp.jsxs)("div", {
          ref: Mp,
          className: "OnboardingMore",
          children: [(0, Hp.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, Hp.jsx)(wp.c, {
              cosmetics: ep
            })
          }), (0, Hp.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, Hp.jsx)(qp, {
              label: pp("homePage:onboardingEyeColour"),
              colours: jp,
              picked: null === Xp || void 0 === Xp ? void 0 : Xp[1],
              onPick: pp => {
                var ip;
                (0, xp.k)("eyes"), Yp.current.eyes = pp, Ep({
                  eyes: Rp("eyes", null !== (ip = null === Xp || void 0 === Xp ? void 0 : Xp[0]) && void 0 !== ip ? ip : "0", pp)
                })
              }
            }), (0, Hp.jsx)(qp, {
              label: pp("homePage:onboardingSkinColour"),
              colours: kp,
              picked: null === lp || void 0 === lp ? void 0 : lp[1],
              onPick: pp => {
                (0, xp.k)("skin"), Yp.current.skin = pp, Ep({
                  skin: Rp("skin", "0", pp)
                })
              }
            })]
          })]
        })]
      })
    }
    var Cp = cp(1284),
      Ep = cp(25),
      Xp = cp(34316),
      lp = cp(1361),
      Qp = cp(1692);

    function Jp(pp) {
      const {
        t: ip
      } = (0, op.H)(), {
        userContext: cp,
        isUserContextUpdating: Ip
      } = (0, tp.b)(), Lp = Ip ? null : cp.getPlayerName(), Yp = (0, Op.useRef)(null), [Dp, Ap] = (0, Op.useState)((() => null === Lp ? (0, Cp.e)() : null)), [Pp, Wp] = (0, Op.useState)(null), [yp, wp] = (0, Op.useState)(!1), dp = (0, Op.useRef)("aW"), ep = (0, vp.b)(), jp = (0, Op.useRef)(null !== Dp), kp = (0, Op.useRef)(!1), mp = null !== Dp && void 0 !== Dp ? Dp : Lp, Rp = (0, Op.useRef)(null), qp = pp => {
        Yp.current && (Yp.current.value = pp), Ap(pp)
      }, Mp = (0, Op.useRef)(!1);
      (0, Op.useEffect)((() => {
        var pp, ip;
        !yp && Mp.current && (Mp.current = !1, null === (pp = Yp.current) || void 0 === pp || pp.focus(), null === (ip = Yp.current) || void 0 === ip || ip.select())
      }), [yp]);
      const Jp = (0, Op.useRef)(null);
      (0, Op.useEffect)((() => {
        var pp;
        null !== Pp && (null === (pp = Jp.current) || void 0 === pp || pp.scrollIntoView({
          block: "nearest"
        }))
      }), [Pp]);
      const Bp = (pp, ip) => {
        const cp = document.activeElement === Yp.current || Mp.current;
        wp(!0), Wp(null), pp.then((pp => {
          ep.current && (wp(!1), Mp.current = cp, ip(pp))
        }))
      };
      (0, Op.useEffect)((() => {
        var pp, ip;
        Ep.c.get("isTouchScreen") || (null === (pp = Yp.current) || void 0 === pp || pp.focus(), null === (ip = Yp.current) || void 0 === ip || ip.select())
      }), []);
      const Np = () => {
          (0, xp.n)(dp.current), pp()
        },
        Tp = pp => "refused" === pp.outcome ? pp.message : ip((0, Xp.h)(pp.failure)),
        fp = pp => !(pp.length >= Cp.m) && (Wp({
          kind: "error",
          message: ip("homePage:changeNameMinLengthError", {
            length: Cp.m
          })
        }), !0),
        bp = pp => {
          var Op, op, Ip;
          pp.toLowerCase() !== (null === (Op = null !== (op = null === (Ip = Rp.current) || void 0 === Ip ? void 0 : Ip.name) && void 0 !== op ? op : Lp) || void 0 === Op ? void 0 : Op.toLowerCase()) ? fp(pp) || Bp((0, Xp.d)(cp, pp), (cp => {
            "taken" !== cp.outcome ? "refused" !== cp.outcome && "failed" !== cp.outcome ? cp.name !== pp ? (dp.current = "suffixed", Rp.current = {
              name: cp.name,
              outcome: dp.current
            }, qp(cp.name), Wp({
              kind: "suffixed",
              taken: pp,
              name: cp.name
            })) : Np() : Wp({
              kind: "error",
              message: Tp(cp)
            }) : Wp({
              kind: "error",
              message: ip("homePage:onboardingNameAllTaken")
            })
          })) : Np()
        };
      (0, Op.useEffect)((() => {
        if (!yp || null !== Lp || !kp.current) return;
        const pp = setTimeout((() => {
          kp.current = !1, wp(!1), Wp({
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(pp)
        }
      }), [yp, Lp]), (0, Op.useEffect)((() => {
        if (null === Lp) return;
        const pp = jp.current && "aW" === dp.current && cp.isLoggedIn();
        jp.current = !1, "noAccount" === (null === Pp || void 0 === Pp ? void 0 : Pp.kind) && Wp(null), pp && qp(Lp), kp.current && (kp.current = !1, wp(!1), bp(pp ? Lp : mp))
      }), [Lp]);
      const hp = "error" === (null === Pp || void 0 === Pp ? void 0 : Pp.kind) ? Pp.message : "noAccount" === (null === Pp || void 0 === Pp ? void 0 : Pp.kind) ? ip("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, Hp.jsxs)("div", {
          className: "OnboardingNameField",
          ref: Jp,
          children: [(0, Hp.jsx)("div", {
            className: "OnboardingSubtitle",
            children: ip("general:name")
          }), null === mp && (0, Hp.jsx)(lp.c, {}), null !== mp && (0, Hp.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, Hp.jsx)(Qp.c, {
              className: "OnboardingNameInput",
              ariaLabel: ip("general:name"),
              maxLength: Cp.i,
              defaultValue: mp,
              domRef: Yp,
              forcedText: yp ? mp : null,
              onEnter: () => {
                var pp;
                null === (pp = Yp.current) || void 0 === pp || pp.blur()
              },
              onValueChange: pp => {
                const cp = (0, Cp.p)(pp);
                cp !== pp && Yp.current && (Yp.current.value = cp), Wp(cp !== pp ? {
                  kind: "error",
                  message: ip("homePage:nameCharacters")
                } : null), cp !== mp && (dp.current = "changed"), Ap(cp)
              }
            }), (0, Hp.jsx)(Sp.f, {
              className: "OnboardingRandomName",
              ariaLabel: ip("homePage:onboardingRandomName"),
              disabled: yp,
              onClick: () => {
                (() => {
                  if (Wp(null), null === Lp || cp.isLoggedIn()) return qp((0, Cp.e)()), void(dp.current = "rolled");
                  Bp((0, Xp.n)(cp), (pp => {
                    var ip, Op;
                    if ("refused" === pp.outcome || "failed" === pp.outcome) return qp(cp.getPlayerName()), dp.current = null !== (ip = null === (Op = Rp.current) || void 0 === Op ? void 0 : Op.outcome) && void 0 !== ip ? ip : "aW", void Wp({
                      kind: "error",
                      message: Tp(pp)
                    });
                    dp.current = "rolled", Rp.current = {
                      name: pp.name,
                      outcome: "rolled"
                    }, qp(pp.name)
                  }))
                })()
              },
              children: (0, Hp.jsx)(Up.d, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === Pp || void 0 === Pp ? void 0 : Pp.kind) && (0, Hp.jsx)("div", {
            className: "OnboardingNameNote",
            children: ip("homePage:onboardingNameSuffixed", {
              taken: Pp.taken,
              name: Pp.name
            })
          }), null !== hp && (0, Hp.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: hp
          })]
        }),
        submit: () => {
          if (!yp && null !== mp) {
            if (null === Lp) {
              if (fp(mp)) return;
              return Mp.current = document.activeElement === Yp.current, kp.current = !0, wp(!0), void Wp(null)
            }
            bp(mp)
          }
        },
        busy: yp,
        ready: null !== mp
      }
    }

    function Bp() {
      const pp = {
        finished: !1
      };
      return Ip.NotificationProvider.showCustomPopup({
        body: ip => (0, Hp.jsx)(Np, {
          onFinish: () => {
            (0, xp.g)(), pp.finished = !0, ip()
          }
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        ignoreBackgroundPress: !0,
        onClose: () => {
          pp.finished || (0, xp.d)()
        }
      })
    }

    function Np(pp) {
      let {
        onFinish: ip
      } = pp;
      const {
        t: cp
      } = (0, op.H)(), Ip = Jp(ip);
      return (0, Op.useEffect)((() => {
        (0, xp.p)()
      }), []), (0, Hp.jsxs)("div", {
        className: "Onboarding",
        children: [(0, Hp.jsx)("div", {
          className: "OnboardingTitle",
          children: cp("homePage:onboardingTitle")
        }), (0, Hp.jsxs)("div", {
          className: "OnboardingBody",
          children: [Ip.field, (0, Hp.jsx)(Mp, {})]
        }), (0, Hp.jsx)("div", {
          className: "OnboardingFooter",
          children: (0, Hp.jsx)(Sp.o, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: Ip.busy,
            disabled: !Ip.ready,
            onClick: Ip.submit,
            children: cp("homePage:onboardingDone")
          })
        })]
      })
    }
  },
  36602: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    var Op = cp(1956),
      op = cp(1520);
    const Ip = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(pp, ip) {
        pp !== this.userContext && this.sendHeld(), this.userContext = pp;
        for (const [Op, op] of ip) this.pending.set(Op, op);
        if (null !== this.timer) return;
        const cp = this.lastSentAt + 1100 - Date.now();
        cp <= 0 ? this.send(pp) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), cp), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(pp) {
        const ip = Array.from(this.pending, (pp => {
          let [ip, cp] = pp;
          return {
            KI: ip,
            VI: cp
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), op.b.updateCosmetics(pp, ip).catch((pp => {
          console.error("Failed to update cosmetics", pp)
        }))
      }
    };

    function Sp(pp, ip) {
      for (const [cp, Op] of ip) pp.setPlayerCosmetics(cp, Op);
      if (null === Op.gameBridge.latest("connectedGame").websocketUrl) Ip.save(pp, ip);
      else
        for (const [cp, op] of ip) Op.gameBridge.send("updateMyCosmetic", {
          KI: cp,
          VI: op
        })
    }
  },
  34316: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => tp,
      h: () => Yp,
      l: () => Up,
      n: () => yp
    });
    var Op = cp(156),
      op = cp(1284),
      Ip = cp(1211),
      Sp = cp(1149),
      xp = cp(1758);
    const Lp = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function Yp(pp) {
      return Lp[pp]
    }

    function Dp(pp) {
      return (0, xp.e)(pp) ? "outdated" : pp instanceof Op.e ? 429 === pp.httpCode ? "busy" : "server" : "offline"
    }

    function Ap(pp, ip, cp) {
      return (0, Sp.postJsonWithMetricsCookiesAndJsonResponse)(`${Ip.clientSideServerUrls.indexUrl}${ip}`, cp, {
        retries: 3
      }, pp.getMetricsCookies()).catch((pp => (console.error("Bad response from the server when trying to change name:", ip, pp), {
        outcome: "failed",
        failure: Dp(pp)
      })))
    }

    function Pp(pp) {
      return "outcome" in pp && "failed" === pp.outcome
    }

    function Wp(pp) {
      return console.error("Error when trying to get with new name from DB", pp), {
        outcome: "refused",
        message: pp
      }
    }
    async function yp(pp) {
      const ip = await Ap(pp, "/index/name/random", {});
      return Pp(ip) ? ip : "err" in ip ? Wp(ip.err) : (pp.setPlayerName(ip.name), {
        outcome: "changed",
        name: ip.name
      })
    }
    async function Up(pp, ip) {
      const cp = await Ap(pp, "/index/name/update", {
        name: ip
      });
      return Pp(cp) ? cp : "err" in cp ? Wp(cp.err) : cp.nameExists ? {
        outcome: "taken"
      } : (pp.setPlayerName(ip), {
        outcome: "changed",
        name: ip
      })
    }

    function wp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const Op = 1 === ip ? 1 : 10 ** (ip - 1),
        Ip = String(Op + Math.floor(cp() * (10 ** ip - Op)));
      return `${pp.slice(0,op.i-ip)}${Ip}`
    }
    const vp = [1, 2, 3, 4];
    async function tp(pp, ip) {
      const cp = await Up(pp, ip);
      if ("taken" !== cp.outcome) return cp;
      for (const Op of vp) {
        const cp = wp(ip, Op),
          op = await Up(pp, cp);
        if ("taken" !== op.outcome) return op
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);
export const id = 222;
export const ids = [222];
export const modules = {
  37924: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      isMoreOptionsInFooter: () => zd,
      showOnboardingPopup: () => cd
    });
    var Wd = md(66),
      Fd = md(1238),
      Rd = md(1462),
      Xd = md(1572),
      Kd = md(1178),
      hd = md(4964),
      vd = md(1685),
      Qd = md(405),
      td = md(1679),
      od = md(3143),
      Nd = md(1155),
      qd = md.n(Nd),
      Hd = md(1189),
      yd = md(37929),
      bd = md(3307),
      Td = md(4717),
      pd = md(1186),
      Yd = md(1443),
      gd = md(1341);
    const wd = "OnboardingMorePanel";

    function Ed(dd) {
      let {
        open: Od,
        onToggle: md
      } = dd;
      const {
        t: Wd
      } = (0, Fd.G)();
      return (0, gd.jsxs)("button", {
        type: "button",
        className: "OnboardingMoreOptions",
        "aria-expanded": Od,
        "aria-controls": Od ? wd : void 0,
        onClick: () => {
          Od || (0, hd.l)("more"), md()
        },
        children: [Wd("homePage:onboardingMoreOptions"), (0, gd.jsx)(Yd.c, {
          name: Od ? "caret-up" : "caret-down"
        })]
      })
    }
    const Jd = Object.entries(vd.b).filter((dd => {
      let [, Od] = dd;
      return "default" === Od.cosmeticPack
    }));

    function Ud(dd) {
      return td.c.default.colourGroups[dd].colours.map(((dd, Od) => {
        let {
          rbg: md,
          order: Wd
        } = dd;
        return {
          rbg: md,
          order: Wd,
          index: Od
        }
      })).sort(((dd, Od) => dd.order - Od.order))
    }
    const xd = Ud("eyes"),
      Bd = Ud("skin");

    function Sd(dd, Od) {
      var md;
      if (void 0 === Od || "default" !== (null === (md = (0, od.i)(dd, Od)) || void 0 === md ? void 0 : md.cosmeticPack)) return null;
      const Wd = (0, od.h)(Od);
      return Wd && [Wd[0], Number(Wd[1])]
    }

    function sd(dd, Od, md) {
      return `${dd}_${Od}_${md}`
    }

    function ud(dd) {
      let {
        label: Od,
        colours: md,
        picked: Wd,
        onPick: Rd
      } = dd;
      const {
        t: Xd
      } = (0, Fd.G)();
      return (0, gd.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, gd.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: Od
        }), (0, gd.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": Od,
          children: md.map(((dd, Od) => {
            let {
              rbg: md,
              index: Fd
            } = dd;
            return (0, gd.jsx)("button", {
              type: "button",
              className: qd()("OnboardingSwatch", {
                OnboardingSwatchSelected: Fd === Wd
              }),
              style: {
                backgroundColor: `rgb(${md.join(",")})`
              },
              role: "radio",
              "aria-checked": Fd === Wd,
              "aria-label": Xd("homePage:onboardingColour", {
                number: Od + 1
              }),
              onClick: () => {
                Rd(Fd)
              }
            }, Fd)
          }))
        })]
      })
    }

    function Vd(dd) {
      let {
        moreOptions: Od,
        onToggleMoreOptions: md,
        moreOptionsBelowPresets: Rd
      } = dd;
      const {
        t: Xd
      } = (0, Fd.G)(), {
        userContext: Kd,
        isUserContextUpdating: vd
      } = (0, pd.d)(), [, td] = (0, Wd.useReducer)((dd => dd + 1), 0), od = (0, Wd.useRef)({}), Nd = (0, Wd.useRef)(null), Yd = (0, Wd.useRef)({}), Ud = (0, Td.b)(), Vd = {
        ...Kd.getPlayerCosmetics(),
        ...Nd.current
      }, Ad = (0, Wd.useRef)(null);
      (0, Wd.useEffect)((() => {
        var dd;
        Od && (null === (dd = Ad.current) || void 0 === dd || dd.scrollIntoView({
          block: "nearest"
        }))
      }), [Od]);
      const rd = (dd, Od) => {
          (0, yd.d)(dd, Object.entries(Od)), Ud.current ? td() : dd.publishUpdateIfCurrent()
        },
        Gd = function(dd) {
          let {
            isDefault: Od = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const md = {
            ...!vd && Kd.isLoggedIn() ? Yd.current : Nd.current,
            ...dd
          };
          if (!vd) return Nd.current = null, Yd.current = {}, void rd(Kd, md);
          Nd.current = md, Od || (Yd.current = {
            ...Yd.current,
            ...dd
          }), td(), Hd.userContextManager.getCurrentUserContext().then((dd => {
            if (Nd.current !== md) return;
            Nd.current = null;
            const Od = Yd.current;
            Yd.current = {};
            const Wd = dd.isLoggedIn() ? Od : md;
            0 !== Object.keys(Wd).length ? rd(dd, Wd) : Ud.current && td()
          })).catch((dd => {
            console.warn("Couldn't put on the onboarding look held for the account", dd), Nd.current === md && (Nd.current = null, Yd.current = {}, Ud.current && td())
          }))
        },
        nd = (0, Wd.useRef)(!1);
      (0, Wd.useEffect)((() => {
        nd.current || (nd.current = !0, !vd && Kd.isLoggedIn() || Gd((0, Qd.Vb)(Jd)[1].cosmetics, {
          isDefault: !0
        }))
      }), []), (0, Wd.useEffect)((() => () => {
        Kd.publishUpdateIfCurrent()
      }), [Kd]);
      const Ld = Sd("eyes", Vd.eyes),
        Pd = Sd("skin", Vd.skin);
      return (0, gd.jsxs)(gd.Fragment, {
        children: [(0, gd.jsx)("div", {
          className: "OnboardingPresets",
          children: Jd.map(((dd, Od) => {
            let [md, {
              cosmetics: Wd
            }] = dd;
            const Fd = function(dd, Od) {
              return Object.entries(Od).every((Od => {
                let [md, Wd] = Od;
                return "skin" === md || ("eyes" === md ? (null === (Fd = Sd("eyes", dd.eyes)) || void 0 === Fd ? void 0 : Fd[0]) === (null === (Rd = Sd("eyes", Wd)) || void 0 === Rd ? void 0 : Rd[0]) : dd[md] === Wd);
                var Fd, Rd
              }))
            }(Vd, Wd);
            return (0, gd.jsx)("button", {
              type: "button",
              className: qd()("OnboardingPreset", {
                OnboardingPresetSelected: Fd
              }),
              "aria-label": Xd("homePage:onboardingPreset", {
                number: Od + 1
              }),
              "aria-pressed": Fd,
              onClick: () => {
                (0, hd.l)(`preset.${md}`);
                const {
                  eyes: dd,
                  skin: Od
                } = od.current;
                Gd({
                  ...Wd,
                  ...void 0 !== dd && {
                    eyes: sd("eyes", Sd("eyes", Wd.eyes)[0], dd)
                  },
                  ...void 0 !== Od && {
                    skin: sd("skin", "0", Od)
                  }
                })
              },
              children: (0, gd.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${md}_preview.png)`
                }
              })
            }, md)
          }))
        }), Rd && (0, gd.jsx)(Ed, {
          open: Od,
          onToggle: md
        }), Od && (0, gd.jsxs)("div", {
          ref: Ad,
          id: wd,
          className: "OnboardingMore",
          children: [(0, gd.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, gd.jsx)(bd.e, {
              cosmetics: Vd
            })
          }), (0, gd.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, gd.jsx)(ud, {
              label: Xd("homePage:onboardingEyeColour"),
              colours: xd,
              picked: null === Ld || void 0 === Ld ? void 0 : Ld[1],
              onPick: dd => {
                var Od;
                (0, hd.l)("eyes"), od.current.eyes = dd, Gd({
                  eyes: sd("eyes", null !== (Od = null === Ld || void 0 === Ld ? void 0 : Ld[0]) && void 0 !== Od ? Od : "0", dd)
                })
              }
            }), (0, gd.jsx)(ud, {
              label: Xd("homePage:onboardingSkinColour"),
              colours: Bd,
              picked: null === Pd || void 0 === Pd ? void 0 : Pd[1],
              onPick: dd => {
                (0, hd.l)("skin"), od.current.skin = dd, Gd({
                  skin: sd("skin", "0", dd)
                })
              }
            })]
          })]
        })]
      })
    }
    var Ad = md(1322),
      rd = md(29),
      Gd = md(35428),
      nd = md(1436),
      Ld = md(1808);

    function Pd(dd) {
      const {
        t: Od
      } = (0, Fd.G)(), {
        userContext: md,
        isUserContextUpdating: Rd
      } = (0, pd.d)(), Kd = Rd ? null : md.getPlayerName(), vd = (0, Wd.useRef)(null), [Qd, td] = (0, Wd.useState)((() => null === Kd ? (0, Ad.e)() : null)), [od, Nd] = (0, Wd.useState)(null), [qd, Hd] = (0, Wd.useState)(!1), yd = (0, Wd.useRef)("kQ"), bd = (0, Td.b)(), wd = (0, Wd.useRef)(null !== Qd), Ed = (0, Wd.useRef)(!1), Jd = (0, Wd.useRef)(null), Ud = null !== Qd && void 0 !== Qd ? Qd : Kd, xd = (0, Wd.useRef)(null), Bd = dd => {
        vd.current && (vd.current.value = dd), td(dd)
      }, Sd = (0, Wd.useRef)(!1);
      (0, Wd.useEffect)((() => {
        var dd, Od;
        !qd && Sd.current && (Sd.current = !1, null === (dd = vd.current) || void 0 === dd || dd.focus(), null === (Od = vd.current) || void 0 === Od || Od.select())
      }), [qd]);
      const sd = (0, Wd.useRef)(null);
      (0, Wd.useEffect)((() => {
        var dd;
        null !== od && (null === (dd = sd.current) || void 0 === dd || dd.scrollIntoView({
          block: "nearest"
        }))
      }), [od]);
      const ud = (dd, Od) => {
        const md = document.activeElement === vd.current || Sd.current;
        Hd(!0), Nd(null), dd.then((dd => {
          bd.current && (Hd(!1), Sd.current = md, Od(dd))
        }))
      };
      (0, Wd.useEffect)((() => {
        var dd, Od;
        rd.e.get("isTouchScreen") || (null === (dd = vd.current) || void 0 === dd || dd.focus(), null === (Od = vd.current) || void 0 === Od || Od.select())
      }), []);
      const Vd = () => {
          (0, hd.o)(yd.current), dd()
        },
        Pd = (dd, Od) => {
          var md, Wd;
          if (Jd.current === dd) return yd.current = null !== (md = null === (Wd = xd.current) || void 0 === Wd ? void 0 : Wd.outcome) && void 0 !== md ? md : "kQ", void Vd();
          Jd.current = dd, Nd(Od)
        },
        zd = dd => "refused" === dd.outcome ? dd.message : Od((0, Gd.i)(dd.failure)),
        cd = dd => !(dd.length >= Ad.i) && (Nd({
          kind: "error",
          message: Od("homePage:changeNameMinLengthError", {
            length: Ad.i
          })
        }), !0),
        jd = dd => {
          var Wd, Fd, Rd;
          dd.toLowerCase() !== (null === (Wd = null !== (Fd = null === (Rd = xd.current) || void 0 === Rd ? void 0 : Rd.name) && void 0 !== Fd ? Fd : Kd) || void 0 === Wd ? void 0 : Wd.toLowerCase()) ? cd(dd) || ud((0, Gd.e)(md, dd), (md => {
            "taken" !== md.outcome ? "refused" !== md.outcome && "failed" !== md.outcome ? md.name !== dd ? (yd.current = "suffixed", xd.current = {
              name: md.name,
              outcome: yd.current
            }, Bd(md.name), Nd({
              kind: "suffixed",
              taken: dd,
              name: md.name
            })) : Vd() : Pd(dd, {
              kind: "error",
              message: zd(md)
            }) : Pd(dd, {
              kind: "error",
              message: Od("homePage:onboardingNameAllTaken")
            })
          })) : Vd()
        };
      (0, Wd.useEffect)((() => {
        if (!qd || null !== Kd || !Ed.current) return;
        const dd = setTimeout((() => {
          Ed.current = !1, Hd(!1), Pd(Ud, {
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(dd)
        }
      }), [qd, Kd]), (0, Wd.useEffect)((() => {
        if (null === Kd) return;
        const dd = wd.current && "kQ" === yd.current && md.isLoggedIn();
        wd.current = !1, Jd.current = null, "noAccount" === (null === od || void 0 === od ? void 0 : od.kind) && Nd(null), dd && Bd(Kd), Ed.current && (Ed.current = !1, Hd(!1), jd(dd ? Kd : Ud))
      }), [Kd]);
      const Dd = "error" === (null === od || void 0 === od ? void 0 : od.kind) ? od.message : "noAccount" === (null === od || void 0 === od ? void 0 : od.kind) ? Od("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, gd.jsxs)("div", {
          className: "OnboardingNameField",
          ref: sd,
          children: [(0, gd.jsx)("div", {
            className: "OnboardingSubtitle",
            children: Od("general:name")
          }), null === Ud && (0, gd.jsx)(nd.c, {}), null !== Ud && (0, gd.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, gd.jsx)(Ld.c, {
              className: "OnboardingNameInput",
              ariaLabel: Od("general:name"),
              maxLength: Ad.g,
              defaultValue: Ud,
              domRef: vd,
              forcedText: qd ? Ud : null,
              onEnter: () => {
                var dd;
                null === (dd = vd.current) || void 0 === dd || dd.blur()
              },
              onValueChange: dd => {
                const md = (0, Ad.m)(dd);
                md !== dd && vd.current && (vd.current.value = md), Nd(md !== dd ? {
                  kind: "error",
                  message: Od("homePage:nameCharacters")
                } : null), md !== Ud && (yd.current = "changed"), td(md)
              }
            }), (0, gd.jsx)(Xd.g, {
              className: "OnboardingRandomName",
              ariaLabel: Od("homePage:onboardingRandomName"),
              disabled: qd,
              onClick: () => {
                (() => {
                  if (Nd(null), null === Kd || md.isLoggedIn()) return Bd((0, Ad.e)()), void(yd.current = "rolled");
                  ud((0, Gd.m)(md), (dd => {
                    var Od, Wd;
                    if ("refused" === dd.outcome || "failed" === dd.outcome) return Bd(md.getPlayerName()), yd.current = null !== (Od = null === (Wd = xd.current) || void 0 === Wd ? void 0 : Wd.outcome) && void 0 !== Od ? Od : "kQ", void Nd({
                      kind: "error",
                      message: zd(dd)
                    });
                    yd.current = "rolled", xd.current = {
                      name: dd.name,
                      outcome: "rolled"
                    }, Bd(dd.name)
                  }))
                })()
              },
              children: (0, gd.jsx)(Yd.c, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === od || void 0 === od ? void 0 : od.kind) && (0, gd.jsx)("div", {
            className: "OnboardingNameNote",
            children: Od("homePage:onboardingNameSuffixed", {
              taken: od.taken,
              name: od.name
            })
          }), null !== Dd && (0, gd.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: Dd
          })]
        }),
        submit: () => {
          if (!qd && null !== Ud) {
            if (null === Kd) {
              if (cd(Ud)) return;
              return Sd.current = document.activeElement === vd.current, Ed.current = !0, Hd(!0), void Nd(null)
            }
            jd(Ud)
          }
        },
        busy: qd,
        ready: null !== Ud
      }
    }

    function zd(dd) {
      return dd < 500
    }

    function cd() {
      const dd = {
          finished: !1
        },
        Od = {
          press: null
        };
      return Rd.NotificationProvider.showCustomPopup({
        body: md => (0, gd.jsx)(jd, {
          onFinish: () => {
            (0, hd.j)(), dd.finished = !0, md()
          },
          doneRef: Od
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        disableExitButton: !0,
        ignoreBackgroundPress: !0,
        dismiss: () => {
          var dd;
          null === (dd = Od.press) || void 0 === dd || dd.call(Od)
        },
        onClose: () => {
          dd.finished || (0, hd.h)()
        }
      })
    }

    function jd(dd) {
      let {
        onFinish: Od,
        doneRef: md
      } = dd;
      const {
        t: Rd
      } = (0, Fd.G)(), vd = Pd(Od), Qd = vd.ready && !vd.busy ? vd.submit : null;
      (0, Wd.useEffect)((() => (md.press = Qd, () => {
        md.press = null
      })));
      const [td, od] = (0, Wd.useState)(!1), Nd = (0, Kd.l)(((dd, Od) => zd(Od))), qd = () => {
        od(!td)
      };
      return (0, Wd.useEffect)((() => {
        (0, hd.p)()
      }), []), (0, gd.jsxs)("div", {
        className: "Onboarding",
        children: [(0, gd.jsx)("div", {
          className: "OnboardingTitle",
          children: Rd("homePage:onboardingTitle")
        }), (0, gd.jsxs)("div", {
          className: "OnboardingBody",
          children: [vd.field, (0, gd.jsx)(Vd, {
            moreOptions: td,
            onToggleMoreOptions: qd,
            moreOptionsBelowPresets: !Nd
          })]
        }), (0, gd.jsxs)("div", {
          className: "OnboardingFooter",
          children: [Nd && (0, gd.jsx)(Ed, {
            open: td,
            onToggle: qd
          }), (0, gd.jsx)(Xd.m, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: vd.busy,
            disabled: !vd.ready,
            onClick: vd.submit,
            children: Rd("homePage:onboardingDone")
          })]
        })]
      })
    }
  },
  37929: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd
    });
    var Wd = md(2092),
      Fd = md(1627);
    const Rd = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(dd, Od) {
        dd !== this.userContext && this.sendHeld(), this.userContext = dd;
        for (const [Wd, Fd] of Od) this.pending.set(Wd, Fd);
        if (null !== this.timer) return;
        const md = this.lastSentAt + 1100 - Date.now();
        md <= 0 ? this.send(dd) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), md), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(dd) {
        const Od = Array.from(this.pending, (dd => {
          let [Od, md] = dd;
          return {
            KF: Od,
            hF: md
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), Fd.e.updateCosmetics(dd, Od).catch((dd => {
          console.error("Failed to update cosmetics", dd)
        }))
      }
    };

    function Xd(dd, Od) {
      for (const [md, Wd] of Od) dd.setPlayerCosmetics(md, Wd);
      if (null === Wd.gameBridge.latest("connectedGame").websocketUrl) Rd.save(dd, Od);
      else
        for (const [md, Fd] of Od) Wd.gameBridge.send("updateMyCosmetic", {
          KF: md,
          hF: Fd
        })
    }
  },
  35428: (dd, Od, md) => {
    md.d(Od, {
      e: () => Td,
      i: () => vd,
      l: () => Hd,
      m: () => qd
    });
    var Wd = md(180),
      Fd = md(1322),
      Rd = md(1253),
      Xd = md(1189),
      Kd = md(1881);
    const hd = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function vd(dd) {
      return hd[dd]
    }

    function Qd(dd) {
      return (0, Kd.c)(dd) ? "outdated" : dd instanceof Wd.e ? 429 === dd.httpCode ? "busy" : "server" : "offline"
    }

    function td(dd, Od, md) {
      return (0, Xd.postJsonWithMetricsCookiesAndJsonResponse)(`${Rd.clientSideServerUrls.indexUrl}${Od}`, md, {
        retries: 3
      }, dd.getMetricsCookies()).catch((dd => (console.error("Bad response from the server when trying to change name:", Od, dd), {
        outcome: "failed",
        failure: Qd(dd)
      })))
    }

    function od(dd) {
      return "outcome" in dd && "failed" === dd.outcome
    }

    function Nd(dd) {
      return console.error("Error when trying to get with new name from DB", dd), {
        outcome: "refused",
        message: dd
      }
    }
    async function qd(dd) {
      const Od = await td(dd, "/index/name/random", {});
      return od(Od) ? Od : "err" in Od ? Nd(Od.err) : (dd.setPlayerName(Od.name), {
        outcome: "changed",
        name: Od.name
      })
    }
    async function Hd(dd, Od) {
      const md = await td(dd, "/index/name/update", {
        name: Od
      });
      return od(md) ? md : "err" in md ? Nd(md.err) : md.nameExists ? {
        outcome: "taken"
      } : (dd.setPlayerName(Od), {
        outcome: "changed",
        name: Od
      })
    }

    function yd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const Wd = 1 === Od ? 1 : 10 ** (Od - 1),
        Rd = String(Wd + Math.floor(md() * (10 ** Od - Wd)));
      return `${dd.slice(0,Fd.g-Od)}${Rd}`
    }
    const bd = [1, 2, 3, 4];
    async function Td(dd, Od) {
      const md = await Hd(dd, Od);
      if ("taken" !== md.outcome) return md;
      for (const Wd of bd) {
        const md = yd(Od, Wd),
          Fd = await Hd(dd, md);
        if ("taken" !== Fd.outcome) return Fd
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);
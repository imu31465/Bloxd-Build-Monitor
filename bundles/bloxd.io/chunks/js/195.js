export const id = 195;
export const ids = [195];
export const modules = {
  36370: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      showOnboardingPopup: () => Rk
    });
    var Xk = Ik(58),
      Tk = Ik(1179),
      ik = Ik(1324),
      yk = Ik(1406),
      lk = Ik(4294),
      ak = Ik(1518),
      qk = Ik(1515),
      Lk = Ik(2148),
      tk = Ik(1055),
      Zk = Ik.n(tk),
      jk = Ik(1120),
      ek = Ik(36375),
      wk = Ik(1066),
      Hk = Ik(2300),
      Jk = Ik(3428),
      xk = Ik(1118),
      Pk = Ik(1096);
    const Kk = Object.entries(ak.c).filter((kk => {
      let [, Fk] = kk;
      return "default" === Fk.cosmeticPack
    }));

    function Qk(kk) {
      return qk.d.default.colourGroups[kk].colours.map(((kk, Fk) => {
        let {
          rbg: Ik,
          order: Xk
        } = kk;
        return {
          rbg: Ik,
          order: Xk,
          index: Fk
        }
      })).sort(((kk, Fk) => kk.order - Fk.order))
    }
    const sk = Qk("eyes"),
      Vk = Qk("skin");

    function zk(kk, Fk) {
      var Ik;
      if (void 0 === Fk || "default" !== (null === (Ik = (0, Lk.k)(kk, Fk)) || void 0 === Ik ? void 0 : Ik.cosmeticPack)) return null;
      const Xk = (0, Lk.j)(Fk);
      return Xk && [Xk[0], Number(Xk[1])]
    }

    function Sk(kk, Fk, Ik) {
      return `${kk}_${Fk}_${Ik}`
    }

    function vk(kk) {
      let {
        label: Fk,
        colours: Ik,
        picked: Xk,
        onPick: ik
      } = kk;
      const {
        t: yk
      } = (0, Tk.y)();
      return (0, Pk.jsxs)("div", {
        className: "OnboardingColours",
        children: [(0, Pk.jsx)("div", {
          className: "OnboardingColoursLabel",
          children: Fk
        }), (0, Pk.jsx)("div", {
          className: "OnboardingSwatches",
          role: "radiogroup",
          "aria-label": Fk,
          children: Ik.map(((kk, Fk) => {
            let {
              rbg: Ik,
              index: Tk
            } = kk;
            return (0, Pk.jsx)("button", {
              type: "button",
              className: Zk()("OnboardingSwatch", {
                OnboardingSwatchSelected: Tk === Xk
              }),
              style: {
                backgroundColor: `rgb(${Ik.join(",")})`
              },
              role: "radio",
              "aria-checked": Tk === Xk,
              "aria-label": yk("homePage:onboardingColour", {
                number: Fk + 1
              }),
              onClick: () => {
                ik(Tk)
              }
            }, Tk)
          }))
        })]
      })
    }

    function Ek() {
      const {
        t: kk
      } = (0, Tk.y)(), {
        userContext: Fk,
        isUserContextUpdating: Ik
      } = (0, xk.d)(), [ik, yk] = (0, Xk.useState)(!1), [, ak] = (0, Xk.useReducer)((kk => kk + 1), 0), qk = (0, Xk.useRef)({}), Lk = (0, Xk.useRef)(null), tk = (0, Jk.d)(), Qk = {
        ...Fk.getPlayerCosmetics(),
        ...Lk.current
      }, Ek = (0, Xk.useRef)(null);
      (0, Xk.useEffect)((() => {
        var kk;
        ik && (null === (kk = Ek.current) || void 0 === kk || kk.scrollIntoView({
          block: "nearest"
        }))
      }), [ik]);
      const Ok = (kk, Fk) => {
          (0, ek.e)(kk, Object.entries(Fk)), tk.current ? ak() : kk.publishUpdateIfCurrent()
        },
        nk = kk => {
          const Xk = {
            ...Lk.current,
            ...kk
          };
          if (!Ik) return Lk.current = null, void Ok(Fk, Xk);
          Lk.current = Xk, ak(), jk.userContextManager.getCurrentUserContext().then((kk => {
            Lk.current === Xk && (Lk.current = null, Ok(kk, Xk))
          })).catch((kk => {
            console.warn("Couldn't put on the onboarding look held for the account", kk), Lk.current === Xk && (Lk.current = null, tk.current && ak())
          }))
        };
      (0, Xk.useEffect)((() => () => {
        Fk.publishUpdateIfCurrent()
      }), [Fk]);
      const Gk = zk("eyes", Qk.eyes),
        pk = zk("skin", Qk.skin);
      return (0, Pk.jsxs)(Pk.Fragment, {
        children: [(0, Pk.jsx)("div", {
          className: "OnboardingPresets",
          children: Kk.map(((Fk, Ik) => {
            let [Xk, {
              cosmetics: Tk
            }] = Fk;
            const ik = function(kk, Fk) {
              return Object.entries(Fk).every((Fk => {
                let [Ik, Xk] = Fk;
                return "skin" === Ik || ("eyes" === Ik ? (null === (Tk = zk("eyes", kk.eyes)) || void 0 === Tk ? void 0 : Tk[0]) === (null === (ik = zk("eyes", Xk)) || void 0 === ik ? void 0 : ik[0]) : kk[Ik] === Xk);
                var Tk, ik
              }))
            }(Qk, Tk);
            return (0, Pk.jsx)("button", {
              type: "button",
              className: Zk()("OnboardingPreset", {
                OnboardingPresetSelected: ik
              }),
              "aria-label": kk("homePage:onboardingPreset", {
                number: Ik + 1
              }),
              "aria-pressed": ik,
              onClick: () => {
                (0, lk.d)(`preset.${Xk}`);
                const {
                  eyes: kk,
                  skin: Fk
                } = qk.current;
                nk({
                  ...Tk,
                  ...void 0 !== kk && {
                    eyes: Sk("eyes", zk("eyes", Tk.eyes)[0], kk)
                  },
                  ...void 0 !== Fk && {
                    skin: Sk("skin", "0", Fk)
                  }
                })
              },
              children: (0, Pk.jsx)("div", {
                className: "OnboardingPresetImage",
                style: {
                  backgroundImage: `url(/textures/charSkins/previews/character_${Xk}_preview.png)`
                }
              })
            }, Xk)
          }))
        }), (0, Pk.jsxs)("button", {
          type: "button",
          className: "OnboardingMoreOptions",
          "aria-expanded": ik,
          onClick: () => {
            ik || (0, lk.d)("more"), yk(!ik)
          },
          children: [kk("homePage:onboardingMoreOptions"), (0, Pk.jsx)(wk.e, {
            name: ik ? "caret-up" : "caret-down"
          })]
        }), ik && (0, Pk.jsxs)("div", {
          ref: Ek,
          className: "OnboardingMore",
          children: [(0, Pk.jsx)("div", {
            className: "OnboardingMorePreview",
            children: (0, Pk.jsx)(Hk.e, {
              cosmetics: Qk
            })
          }), (0, Pk.jsxs)("div", {
            className: "OnboardingMoreColours",
            children: [(0, Pk.jsx)(vk, {
              label: kk("homePage:onboardingEyeColour"),
              colours: sk,
              picked: null === Gk || void 0 === Gk ? void 0 : Gk[1],
              onPick: kk => {
                var Fk;
                (0, lk.d)("eyes"), qk.current.eyes = kk, nk({
                  eyes: Sk("eyes", null !== (Fk = null === Gk || void 0 === Gk ? void 0 : Gk[0]) && void 0 !== Fk ? Fk : "0", kk)
                })
              }
            }), (0, Pk.jsx)(vk, {
              label: kk("homePage:onboardingSkinColour"),
              colours: Vk,
              picked: null === pk || void 0 === pk ? void 0 : pk[1],
              onPick: kk => {
                (0, lk.d)("skin"), qk.current.skin = kk, nk({
                  skin: Sk("skin", "0", kk)
                })
              }
            })]
          })]
        })]
      })
    }
    var Ok = Ik(1253),
      nk = Ik(25),
      Gk = Ik(34051),
      pk = Ik(1318),
      uk = Ik(1617);

    function bk(kk) {
      const {
        t: Fk
      } = (0, Tk.y)(), {
        userContext: Ik,
        isUserContextUpdating: ik
      } = (0, xk.d)(), ak = ik ? null : Ik.getPlayerName(), qk = (0, Xk.useRef)(null), [Lk, tk] = (0, Xk.useState)((() => null === ak ? (0, Ok.g)() : null)), [Zk, jk] = (0, Xk.useState)(null), [ek, Hk] = (0, Xk.useState)(!1), Kk = (0, Xk.useRef)("Gj"), Qk = (0, Jk.d)(), sk = (0, Xk.useRef)(null !== Lk), Vk = (0, Xk.useRef)(!1), zk = null !== Lk && void 0 !== Lk ? Lk : ak, Sk = (0, Xk.useRef)(null), vk = kk => {
        qk.current && (qk.current.value = kk), tk(kk)
      }, Ek = (0, Xk.useRef)(!1);
      (0, Xk.useEffect)((() => {
        var kk, Fk;
        !ek && Ek.current && (Ek.current = !1, null === (kk = qk.current) || void 0 === kk || kk.focus(), null === (Fk = qk.current) || void 0 === Fk || Fk.select())
      }), [ek]);
      const bk = (0, Xk.useRef)(null);
      (0, Xk.useEffect)((() => {
        var kk;
        null !== Zk && (null === (kk = bk.current) || void 0 === kk || kk.scrollIntoView({
          block: "nearest"
        }))
      }), [Zk]);
      const Rk = (kk, Fk) => {
        const Ik = document.activeElement === qk.current || Ek.current;
        Hk(!0), jk(null), kk.then((kk => {
          Qk.current && (Hk(!1), Ek.current = Ik, Fk(kk))
        }))
      };
      (0, Xk.useEffect)((() => {
        var kk, Fk;
        nk.d.get("isTouchScreen") || (null === (kk = qk.current) || void 0 === kk || kk.focus(), null === (Fk = qk.current) || void 0 === Fk || Fk.select())
      }), []);
      const Uk = () => {
          (0, lk.e)(Kk.current), kk()
        },
        Ck = kk => "refused" === kk.outcome ? kk.message : Fk((0, Gk.f)(kk.failure)),
        Nk = kk => !(kk.length >= Ok.m) && (jk({
          kind: "error",
          message: Fk("homePage:changeNameMinLengthError", {
            length: Ok.m
          })
        }), !0),
        ck = kk => {
          var Xk, Tk, ik;
          kk.toLowerCase() !== (null === (Xk = null !== (Tk = null === (ik = Sk.current) || void 0 === ik ? void 0 : ik.name) && void 0 !== Tk ? Tk : ak) || void 0 === Xk ? void 0 : Xk.toLowerCase()) ? Nk(kk) || Rk((0, Gk.e)(Ik, kk), (Ik => {
            "taken" !== Ik.outcome ? "refused" !== Ik.outcome && "failed" !== Ik.outcome ? Ik.name !== kk ? (Kk.current = "suffixed", Sk.current = {
              name: Ik.name,
              outcome: Kk.current
            }, vk(Ik.name), jk({
              kind: "suffixed",
              taken: kk,
              name: Ik.name
            })) : Uk() : jk({
              kind: "error",
              message: Ck(Ik)
            }) : jk({
              kind: "error",
              message: Fk("homePage:onboardingNameAllTaken")
            })
          })) : Uk()
        };
      (0, Xk.useEffect)((() => {
        if (!ek || null !== ak || !Vk.current) return;
        const kk = setTimeout((() => {
          Vk.current = !1, Hk(!1), jk({
            kind: "noAccount"
          })
        }), 2e4);
        return () => {
          clearTimeout(kk)
        }
      }), [ek, ak]), (0, Xk.useEffect)((() => {
        if (null === ak) return;
        const kk = sk.current && "Gj" === Kk.current && Ik.isLoggedIn();
        sk.current = !1, "noAccount" === (null === Zk || void 0 === Zk ? void 0 : Zk.kind) && jk(null), kk && vk(ak), Vk.current && (Vk.current = !1, Hk(!1), ck(kk ? ak : zk))
      }), [ak]);
      const Wk = "error" === (null === Zk || void 0 === Zk ? void 0 : Zk.kind) ? Zk.message : "noAccount" === (null === Zk || void 0 === Zk ? void 0 : Zk.kind) ? Fk("homePage:onboardingNameNoAccount") : null;
      return {
        field: (0, Pk.jsxs)("div", {
          className: "OnboardingNameField",
          ref: bk,
          children: [(0, Pk.jsx)("div", {
            className: "OnboardingSubtitle",
            children: Fk("general:name")
          }), null === zk && (0, Pk.jsx)(pk.c, {}), null !== zk && (0, Pk.jsxs)("div", {
            className: "OnboardingNameRow",
            children: [(0, Pk.jsx)(uk.c, {
              className: "OnboardingNameInput",
              ariaLabel: Fk("general:name"),
              maxLength: Ok.j,
              defaultValue: zk,
              domRef: qk,
              forcedText: ek ? zk : null,
              onEnter: () => {
                var kk;
                null === (kk = qk.current) || void 0 === kk || kk.blur()
              },
              onValueChange: kk => {
                const Ik = (0, Ok.r)(kk);
                Ik !== kk && qk.current && (qk.current.value = Ik), jk(Ik !== kk ? {
                  kind: "error",
                  message: Fk("homePage:nameCharacters")
                } : null), Ik !== zk && (Kk.current = "changed"), tk(Ik)
              }
            }), (0, Pk.jsx)(yk.d, {
              className: "OnboardingRandomName",
              ariaLabel: Fk("homePage:onboardingRandomName"),
              disabled: ek,
              onClick: () => {
                (() => {
                  if (jk(null), null === ak || Ik.isLoggedIn()) return vk((0, Ok.g)()), void(Kk.current = "rolled");
                  Rk((0, Gk.l)(Ik), (kk => {
                    var Fk, Xk;
                    if ("refused" === kk.outcome || "failed" === kk.outcome) return vk(Ik.getPlayerName()), Kk.current = null !== (Fk = null === (Xk = Sk.current) || void 0 === Xk ? void 0 : Xk.outcome) && void 0 !== Fk ? Fk : "Gj", void jk({
                      kind: "error",
                      message: Ck(kk)
                    });
                    Kk.current = "rolled", Sk.current = {
                      name: kk.name,
                      outcome: "rolled"
                    }, vk(kk.name)
                  }))
                })()
              },
              children: (0, Pk.jsx)(wk.e, {
                name: "dice"
              })
            })]
          }), "suffixed" === (null === Zk || void 0 === Zk ? void 0 : Zk.kind) && (0, Pk.jsx)("div", {
            className: "OnboardingNameNote",
            children: Fk("homePage:onboardingNameSuffixed", {
              taken: Zk.taken,
              name: Zk.name
            })
          }), null !== Wk && (0, Pk.jsx)("div", {
            className: "OnboardingNameNote OnboardingNameError",
            children: Wk
          })]
        }),
        submit: () => {
          if (!ek && null !== zk) {
            if (null === ak) {
              if (Nk(zk)) return;
              return Ek.current = document.activeElement === qk.current, Vk.current = !0, Hk(!0), void jk(null)
            }
            ck(zk)
          }
        },
        busy: ek,
        ready: null !== zk
      }
    }

    function Rk() {
      const kk = {
        finished: !1
      };
      ik.NotificationProvider.showCustomPopup({
        body: Fk => (0, Pk.jsx)(Uk, {
          onFinish: () => {
            (0, lk.c)(), kk.finished = !0, Fk()
          }
        }),
        middleScreenPopupClassName: "OnboardingPopup",
        ignoreBackgroundPress: !0,
        onClose: () => {
          kk.finished || (0, lk.b)()
        }
      })
    }

    function Uk(kk) {
      let {
        onFinish: Fk
      } = kk;
      const {
        t: Ik
      } = (0, Tk.y)(), ik = bk(Fk);
      return (0, Xk.useEffect)((() => {
        (0, lk.i)()
      }), []), (0, Pk.jsxs)("div", {
        className: "Onboarding",
        children: [(0, Pk.jsx)("div", {
          className: "OnboardingTitle",
          children: Ik("homePage:onboardingTitle")
        }), (0, Pk.jsxs)("div", {
          className: "OnboardingBody",
          children: [ik.field, (0, Pk.jsx)(Ek, {})]
        }), (0, Pk.jsx)("div", {
          className: "OnboardingFooter",
          children: (0, Pk.jsx)(yk.m, {
            className: "OnboardingPrimaryButton",
            padDefaultFocus: !0,
            loading: ik.busy,
            disabled: !ik.ready,
            onClick: ik.submit,
            children: Ik("homePage:onboardingDone")
          })
        })]
      })
    }
  },
  36375: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk
    });
    var Xk = Ik(1875),
      Tk = Ik(1453);
    const ik = new class {
      constructor() {
        this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
      }
      save(kk, Fk) {
        kk !== this.userContext && this.sendHeld(), this.userContext = kk;
        for (const [Xk, Tk] of Fk) this.pending.set(Xk, Tk);
        if (null !== this.timer) return;
        const Ik = this.lastSentAt + 1100 - Date.now();
        Ik <= 0 ? this.send(kk) : (this.timer = setTimeout((() => {
          this.sendHeld()
        }), Ik), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.sendHeld()
        }))))
      }
      sendHeld() {
        null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
      }
      send(kk) {
        const Fk = Array.from(this.pending, (kk => {
          let [Fk, Ik] = kk;
          return {
            VX: Fk,
            zX: Ik
          }
        }));
        this.pending.clear(), this.lastSentAt = Date.now(), Tk.e.updateCosmetics(kk, Fk).catch((kk => {
          console.error("Failed to update cosmetics", kk)
        }))
      }
    };

    function yk(kk, Fk) {
      for (const [Ik, Xk] of Fk) kk.setPlayerCosmetics(Ik, Xk);
      if (null === Xk.gameBridge.latest("connectedGame").websocketUrl) ik.save(kk, Fk);
      else
        for (const [Ik, Tk] of Fk) Xk.gameBridge.send("updateMyCosmetic", {
          VX: Ik,
          zX: Tk
        })
    }
  },
  34051: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => xk,
      f: () => qk,
      h: () => wk,
      l: () => ek
    });
    var Xk = Ik(149),
      Tk = Ik(1253),
      ik = Ik(1194),
      yk = Ik(1120),
      lk = Ik(1658);
    const ak = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function qk(kk) {
      return ak[kk]
    }

    function Lk(kk) {
      return (0, lk.d)(kk) ? "outdated" : kk instanceof Xk.b ? 429 === kk.httpCode ? "busy" : "server" : "offline"
    }

    function tk(kk, Fk, Ik) {
      return (0, yk.postJsonWithMetricsCookiesAndJsonResponse)(`${ik.clientSideServerUrls.indexUrl}${Fk}`, Ik, {
        retries: 3
      }, kk.getMetricsCookies()).catch((kk => (console.error("Bad response from the server when trying to change name:", Fk, kk), {
        outcome: "failed",
        failure: Lk(kk)
      })))
    }

    function Zk(kk) {
      return "outcome" in kk && "failed" === kk.outcome
    }

    function jk(kk) {
      return console.error("Error when trying to get with new name from DB", kk), {
        outcome: "refused",
        message: kk
      }
    }
    async function ek(kk) {
      const Fk = await tk(kk, "/index/name/random", {});
      return Zk(Fk) ? Fk : "err" in Fk ? jk(Fk.err) : (kk.setPlayerName(Fk.name), {
        outcome: "changed",
        name: Fk.name
      })
    }
    async function wk(kk, Fk) {
      const Ik = await tk(kk, "/index/name/update", {
        name: Fk
      });
      return Zk(Ik) ? Ik : "err" in Ik ? jk(Ik.err) : Ik.nameExists ? {
        outcome: "taken"
      } : (kk.setPlayerName(Fk), {
        outcome: "changed",
        name: Fk
      })
    }

    function Hk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const Xk = 1 === Fk ? 1 : 10 ** (Fk - 1),
        ik = String(Xk + Math.floor(Ik() * (10 ** Fk - Xk)));
      return `${kk.slice(0,Tk.j-Fk)}${ik}`
    }
    const Jk = [1, 2, 3, 4];
    async function xk(kk, Fk) {
      const Ik = await wk(kk, Fk);
      if ("taken" !== Ik.outcome) return Ik;
      for (const Xk of Jk) {
        const Ik = Hk(Fk, Xk),
          Tk = await wk(kk, Ik);
        if ("taken" !== Tk.outcome) return Tk
      }
      return {
        outcome: "taken"
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
export const id = 152;
export const ids = [152];
export const modules = {
  8699: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => bd,
      g: () => Md,
      j: () => Fd
    });
    var pd = kd(56),
      Nd = kd(4397),
      Wd = kd(1140),
      Pd = kd(1459),
      Zd = kd(29),
      gd = kd(3256),
      Cd = kd(2203),
      Kd = kd(1260),
      od = kd(8734),
      ld = kd(1932),
      Qd = kd(1968),
      Ld = kd(1211),
      Od = kd(22),
      ed = kd(1670),
      Rd = kd(1044),
      Id = kd.n(Rd),
      Gd = kd(8706),
      vd = kd(8712),
      xd = kd(8717),
      qd = kd(8613),
      Bd = kd(8724),
      sd = (kd(8728), kd(1103));
    let ad = null;

    function Md() {
      return null !== ad
    }

    function Fd() {
      return "pad" === ad
    }

    function Yd() {
      return "inGame" === Od.d.get("gameState") && !(0, ed.n)()
    }

    function md(dd) {
      return (0, vd.q)(dd, Kd.n, vd.e, vd.f, vd.g)
    }
    const bd = (0, pd.memo)((function() {
      const {
        t: dd
      } = (0, Ld.B)(), {
        userContext: Jd
      } = (0, Wd.c)(), [kd, Od] = (0, pd.useState)(null), [Rd, Md] = (0, pd.useState)(null), Fd = (0, pd.useRef)(null), bd = (0, pd.useCallback)((dd => {
        Fd.current = dd, Md(dd)
      }), []), Sd = (0, pd.useRef)(0), jd = (0, pd.useRef)(null), Xd = (0, pd.useRef)({
        x: 0,
        y: 0
      }), [fd, nd] = (0, pd.useState)(0), Ud = (0, pd.useMemo)((() => function(dd) {
        const Jd = [];
        for (let pd = 0; pd < Kd.n; pd++) {
          var kd;
          Jd.push(null !== (kd = dd[pd]) && void 0 !== kd ? kd : null)
        }
        return Jd
      }((0, od.d)(Jd.getPlayerCosmetics().emote))), [Jd, fd]);
      (0, Qd.d)("cosmeticsUpdated", (dd => {
        dd.some((dd => dd.local && "emote" === dd.np)) && nd((dd => dd + 1))
      }));
      const yd = (0, pd.useRef)(!1),
        Dd = (0, pd.useCallback)((function(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === dd && (0, xd.h)(), yd.current = Jd, Xd.current = {
            x: 0,
            y: 0
          }, bd(null), Od(dd)
        }), [bd]),
        Td = (0, pd.useCallback)((() => {
          Od(null), bd(null), Xd.current = {
            x: 0,
            y: 0
          }
        }), [bd]),
        Ed = (0, pd.useCallback)((dd => {
          if (Date.now() < Sd.current) return;
          const Jd = (0, Cd.h)(dd),
            kd = !!Jd.holdUntilMove,
            pd = kd ? 600 : Math.ceil(1e3 * Jd.animation.animation_length / Cd.d) + 200;
          Sd.current = Date.now() + pd, jd.current = dd, ld.gameBridge.send("playEmote", dd), ld.gameBridge.send("applyTemporaryThirdPerson", kd ? {} : {
            durationMs: pd
          })
        }), []);
      (0, Pd.h)("requestToggleEmoteWheel", (() => {
        null === kd ? Yd() && Dd("click") : Td()
      })), (0, Pd.h)("requestEmoteWheelHoldOpen", (() => {
        null === kd && Yd() && Dd((0, Gd.c)() ? "hold" : "click")
      })), (0, Pd.h)("requestEmoteWheelPadOpen", (dd => {
        null !== kd || !Yd() || (0, qd.b)() || (0, Bd.o)() || Dd("pad", dd)
      })), (0, Pd.h)("requestEmoteRepeatLast", (() => {
        if (null !== kd || !Yd() || (0, qd.b)() || (0, Bd.o)()) return;
        const dd = jd.current;
        null !== dd && Ud.includes(dd) ? Ed(dd) : Dd("pad", !0)
      }));
      const cd = () => {
        const dd = Fd.current,
          Jd = null !== dd ? Ud[dd] : null;
        null !== Jd && "pad" === kd && Date.now() < Sd.current || (Td(), null !== Jd && Ed(Jd))
      };
      (0, Pd.h)("emoteWheelPadAim", (dd => {
        if ("pad" !== kd) return;
        const Jd = (0, vd.E)(dd, Kd.n, Fd.current);
        bd(null !== Jd && null !== Ud[Jd] ? Jd : null)
      })), (0, Pd.h)("requestEmoteWheelPadCommit", (dd => {
        "pad" !== kd || dd && yd.current || cd()
      })), (0, Pd.h)("appManagerUpdated|activeInputDevice", (dd => {
        null !== kd && "pad" === kd !== ("gamepad" === dd) && Td()
      })), (0, pd.useLayoutEffect)((() => (ad = kd, (0, gd.p)("emoteWheel", "pad" === kd), Zd.j.nO(gd.k), () => {
        ad = null, (0, gd.p)("emoteWheel", !1), Zd.j.nO(gd.k)
      })), [kd]), (0, Pd.h)("requestEmoteWheelHoldRelease", (() => {
        "hold" === kd && cd()
      })), (0, Pd.h)("requestEmoteWheelClose", (() => {
        null !== kd && Td()
      })), (0, Pd.h)("appManagerUpdated|gameState", (dd => {
        "inGame" !== dd && Td()
      }));
      const hd = () => {
        (0, ed.n)() && Td()
      };
      if ((0, Pd.h)("appManagerUpdated|openEverythingMenuName", hd), (0, Pd.h)("appManagerUpdated|openInGameMenuName", hd), (0, Pd.h)("pointerLockUpdate", (dd => {
          dd || "hold" !== kd || Td()
        })), (0, pd.useEffect)((() => {
          if (null === kd) return;
          const dd = dd => {
            "Escape" === dd.key && (dd.stopImmediatePropagation(), dd.preventDefault(), Td())
          };
          return document.addEventListener("keydown", dd, !0), () => {
            document.removeEventListener("keydown", dd, !0)
          }
        }), [kd, Td]), (0, Nd.d)(!0, "click" === kd, "EmoteWheelOverlay"), (0, pd.useEffect)((() => {
          if ("hold" === kd) return ld.gameBridge.send("holdEmoteWheel", !0), () => {
            ld.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [kd]), (0, pd.useEffect)((() => {
          if ("hold" !== kd) return;
          const dd = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            Jd = vd.o * dd,
            pd = vd.n * dd,
            Nd = dd => {
              let kd = Xd.current.x + dd.movementX,
                Nd = Xd.current.y + dd.movementY;
              const Wd = Math.hypot(kd, Nd);
              if (Wd > Jd) {
                const dd = Jd / Wd;
                kd *= dd, Nd *= dd
              }
              Xd.current = {
                x: kd,
                y: Nd
              }, bd(function(dd, Jd, kd, pd) {
                if (Math.hypot(dd, Jd) < kd) return null;
                const Nd = (0, vd.s)(dd, Jd, Kd.n);
                return null === pd[Nd] ? null : Nd
              }(kd, Nd, pd, Ud))
            };
          return document.addEventListener("mousemove", Nd), () => {
            document.removeEventListener("mousemove", Nd)
          }
        }), [kd, Ud, bd]), null === kd) return null;
      const rd = "hold" === kd || "pad" === kd,
        ud = null !== Rd ? Ud[Rd] : null,
        td = null !== ud ? (0, Cd.h)(ud).displayName : dd("emotes:pickEmote");
      return (0, sd.jsx)("div", {
        className: Id()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === kd
        }),
        onMouseDown: dd => {
          dd.target === dd.currentTarget && Td()
        },
        children: (0, sd.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * vd.o + "rem",
            height: 2 * vd.o + "rem"
          },
          children: [(0, sd.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${vd.k} ${vd.k}`,
            children: [Ud.map(((Jd, kd) => {
              const pd = null !== Jd,
                Nd = rd && kd === Rd;
              return (0, sd.jsx)("path", {
                d: md(kd),
                className: Id()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: Nd,
                  EmoteWheelWedgeDisabled: !pd
                }),
                onClick: dd => {
                  dd.stopPropagation(), null !== Jd && (dd => {
                    Td(), Ed(dd)
                  })(Jd)
                },
                "aria-label": null !== Jd ? (0, Cd.h)(Jd).displayName : dd("emotes:emptySlot")
              }, kd)
            })), (0, sd.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: vd.e,
              cy: vd.e,
              r: vd.g
            }), (0, sd.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: vd.e,
              cy: vd.e,
              r: vd.f
            }), rd && null !== Rd && (0, sd.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: md(Rd)
            })]
          }), Ud.map(((dd, Jd) => {
            const kd = null !== dd,
              pd = rd && Jd === Rd,
              Nd = (0, vd.w)(Jd, Kd.n),
              Wd = vd.c * Math.cos(Nd),
              Pd = vd.c * Math.sin(Nd);
            return (0, sd.jsx)("div", {
              className: Id()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: pd,
                EmoteWheelSlotIconDisabled: !kd
              }),
              style: {
                left: `calc(50% + ${Wd}rem)`,
                top: `calc(50% + ${Pd}rem)`,
                backgroundImage: kd ? `url(/textures/charSkins/previews/emote_${dd}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, Jd)
          })), (0, sd.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: td
          })]
        })
      })
    }))
  },
  8688: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => od,
      f: () => Ld,
      i: () => Od,
      m: () => Qd,
      q: () => ld
    });
    var pd = kd(56),
      Nd = kd(8691),
      Wd = kd(29),
      Pd = kd(1932),
      Zd = kd(33),
      gd = kd(1279),
      Cd = kd(1955);
    const Kd = 50;
    const od = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = dd => {
          if (0 === this.listeners.size) {
            var Jd, kd;
            this.state = {
              ...this.state,
              channel: null !== (Jd = null === (kd = Cd.b.get("chatChannels")) || void 0 === kd ? void 0 : kd[0]) && void 0 !== Jd ? Jd : null
            };
            const dd = Wd.j.subscribe("reportPlayer", (dd => {
              let {
                playerEId: Jd
              } = dd;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, Jd]
              })
            }));
            this.stopListening = [Pd.gameBridge.subscribe("chatReceived", (dd => {
              let {
                serverChatMsgId: Jd,
                content: kd,
                author: pd
              } = dd;
              this.addMessage(Jd, kd, pd)
            })), () => {
              Wd.j.unsubscribe(dd)
            }, Cd.b.subscribe("chatChannels", (dd => {
              var Jd;
              this.setState({
                ...this.state,
                channel: null !== (Jd = null === dd || void 0 === dd ? void 0 : dd[0]) && void 0 !== Jd ? Jd : null
              })
            }))]
          }
          return this.listeners.add(dd), () => {
            if (this.listeners.delete(dd), 0 === this.listeners.size) {
              for (const dd of this.stopListening) dd();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const pd = {
          serverChatMsgId: dd,
          content: Jd,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: kd
        };
        this.setState({
          ...this.state,
          messages: [pd, ...this.state.messages].slice(0, Nd.h)
        })
      }
      selectNextChannel() {
        const dd = Cd.b.get("chatChannels");
        if (dd) {
          const Jd = dd.findIndex((dd => {
            var Jd;
            return dd.channelName === (null === (Jd = this.state.channel) || void 0 === Jd ? void 0 : Jd.channelName)
          }));
          this.setState({
            ...this.state,
            channel: dd[(Jd + 1) % dd.length]
          })
        }
      }
      setState(dd) {
        this.state = dd;
        for (const Jd of this.listeners) Jd()
      }
    };

    function ld() {
      const [dd, Jd] = (0, pd.useState)(od.getState);
      return (0, pd.useEffect)((() => {
        const dd = od.subscribe((() => {
          Jd(od.getState())
        }));
        return Jd(od.getState()), dd
      }), []), dd
    }

    function Qd(dd) {
      var Jd, kd;
      if (dd.startsWith("/report")) {
        var pd;
        const Jd = null !== (pd = dd.replace("/report", "").trim().split(" ")[0]) && void 0 !== pd ? pd : "";
        if ("" === Jd) return void od.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const kd = Pd.gameBridge.latest("players"),
          Nd = Pd.gameBridge.latest("hiddenPlayerNames"),
          Zd = dd => {
            var pd, Wd;
            const Pd = null !== (pd = null === (Wd = kd.byId[dd]) || void 0 === Wd ? void 0 : Wd.name) && void 0 !== pd ? pd : null;
            return null !== Pd && (Pd === Jd || (0, gd.d)(Pd, Nd) === Jd)
          };
        if (null !== kd.localId && Zd(kd.localId)) return void od.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const dd of kd.ids)
          if (Zd(dd)) return Wd.j.nO("OpenReportMenu", {
            playerEId: dd,
            playerName: kd.byId[dd].name,
            IC: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        od.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      Pd.gameBridge.send("sendChatMessage", {
          IC: dd,
          channelName: null !== (Jd = null === (kd = od.getState().channel) || void 0 === kd ? void 0 : kd.channelName) && void 0 !== Jd ? Jd : null
        }),
        function(dd) {
          var Jd;
          const kd = null !== (Jd = Zd.i.getItem("recentlySentChatMsgs")) && void 0 !== Jd ? Jd : [];
          kd.push(dd), kd.length > Kd && kd.shift();
          Zd.i.setItem("recentlySentChatMsgs", kd)
        }(dd)
    }

    function Ld() {
      var dd;
      return null !== (dd = Zd.i.getItem("recentlySentChatMsgs")) && void 0 !== dd ? dd : []
    }

    function Od(dd) {
      var Jd;
      let kd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const pd = null !== (Jd = Zd.i.getItem("recentlySentChatMsgs")) && void 0 !== Jd ? Jd : [],
        Nd = pd.length + 1,
        Wd = kd ? (dd % Nd + Nd) % Nd : Math.min(pd.length, Math.max(0, dd));
      return {
        stepsBack: Wd,
        text: 0 === Wd ? "" : pd[pd.length - Wd]
      }
    }
  },
  8639: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Pd,
      f: () => Wd
    });
    var pd = kd(1982);
    const Nd = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      Wd = dd => "string" === typeof dd.icon && "" !== dd.icon && "string" === typeof dd.keycode && Nd.test(dd.keycode),
      Pd = dd => "Space" === dd ? "_" : pd.g[dd]
  },
  8706: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd
    });
    var pd = kd(22);

    function Nd() {
      return !pd.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8815: (dd, Jd, kd) => {
    function pd(dd) {
      return {
        x: (dd.left + dd.right) / 2,
        y: (dd.top + dd.bottom) / 2
      }
    }

    function Nd(dd) {
      return 0 === dd.length ? null : dd.reduce(((dd, Jd) => ({
        left: Math.min(dd.left, Jd.left),
        top: Math.min(dd.top, Jd.top),
        right: Math.max(dd.right, Jd.right),
        bottom: Math.max(dd.bottom, Jd.bottom)
      })))
    }

    function Wd(dd, Jd) {
      const kd = Math.max(0, (Jd - (dd.right - dd.left)) / 2),
        pd = Math.max(0, (Jd - (dd.bottom - dd.top)) / 2);
      return {
        left: dd.left - kd,
        top: dd.top - pd,
        right: dd.right + kd,
        bottom: dd.bottom + pd
      }
    }

    function Pd(dd, Jd) {
      return Jd.x >= dd.left && Jd.x <= dd.right && Jd.y >= dd.top && Jd.y <= dd.bottom
    }

    function Zd(dd, Jd, kd) {
      let Nd = null,
        Zd = 1 / 0;
      for (const {
          id: pd,
          box: Wd
        }
        of Jd) {
        const Jd = (Wd.right - Wd.left) * (Wd.bottom - Wd.top);
        Pd(Wd, dd) && Jd < Zd && (Zd = Jd, Nd = pd)
      }
      if (null !== Nd) return Nd;
      let gd = 1 / 0;
      for (const {
          id: Cd,
          box: Kd
        }
        of Jd) {
        if (!Pd(Wd(Kd, kd), dd)) continue;
        const Jd = pd(Kd),
          Zd = Math.hypot(dd.x - Jd.x, dd.y - Jd.y);
        Zd < gd && (gd = Zd, Nd = Cd)
      }
      return Nd
    }

    function gd(dd, Jd, kd) {
      return {
        left: kd.left,
        top: kd.top,
        right: dd - kd.right,
        bottom: Jd - kd.bottom
      }
    }

    function Cd(dd, Jd, kd, pd) {
      const Nd = (dd, Jd, kd) => Math.max(Math.min(Jd, 0), Math.min(Math.max(kd, 0), dd));
      return {
        x: Nd(Jd, pd.left - dd.left, pd.right - dd.right),
        y: Nd(kd, pd.top - dd.top, pd.bottom - dd.bottom)
      }
    }

    function Kd(dd, Jd, kd, pd, Nd) {
      const Wd = dd.dx * pd + Jd,
        Pd = dd.dy * Nd + kd,
        Zd = dd => Math.max(-1, Math.min(1, dd));
      return {
        dx: Zd(Wd / pd),
        dy: Zd(Pd / Nd)
      }
    }

    function od(dd, Jd, kd, pd) {
      return Jd <= 0 || kd <= 0 ? 1 : Math.max(.05, Math.min(1, dd / Jd, pd / kd))
    }

    function ld(dd, Jd, kd) {
      return Math.min(dd.right, Jd.right) - Math.max(dd.left, Jd.left) > kd && Math.min(dd.bottom, Jd.bottom) - Math.max(dd.top, Jd.top) > kd
    }

    function Qd(dd, Jd) {
      const kd = (dd, Jd, kd, pd) => Jd - dd > pd - kd ? kd - dd > Jd - pd ? pd - Jd : kd - dd : dd < kd ? kd - dd : Jd > pd ? pd - Jd : 0;
      return {
        x: kd(dd.left, dd.right, Jd.left, Jd.right),
        y: kd(dd.top, dd.bottom, Jd.top, Jd.bottom)
      }
    }

    function Ld(dd, Jd) {
      let {
        avoid: kd = null,
        bounds: pd = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, Nd = 0, Wd = 1 / 0;
      return dd.forEach(((dd, Pd) => {
        const Zd = Jd.filter((Jd => ld(dd, Jd, 0))).length,
          gd = null !== pd && (dd.left < pd.left || dd.top < pd.top || dd.right > pd.right || dd.bottom > pd.bottom),
          Cd = Zd + (kd && ld(dd, kd, 0) ? 1e3 : 0) + (gd ? 1e6 : 0);
        Cd < Wd && (Nd = Pd, Wd = Cd)
      })), Nd
    }
    kd.d(Jd, {
      A: () => Qd,
      B: () => Nd,
      c: () => pd,
      g: () => Pd,
      i: () => ld,
      k: () => Cd,
      o: () => Wd,
      p: () => Ld,
      s: () => Kd,
      u: () => Zd,
      v: () => od,
      w: () => gd
    })
  },
  8712: (dd, Jd, kd) => {
    kd.d(Jd, {
      A: () => ld,
      E: () => Qd,
      c: () => Wd,
      e: () => Zd,
      f: () => Cd,
      g: () => gd,
      k: () => Pd,
      n: () => Nd,
      o: () => pd,
      q: () => Ld,
      s: () => od,
      w: () => Kd
    });
    const pd = 14,
      Nd = 6,
      Wd = (pd + Nd) / 2,
      Pd = 200,
      Zd = Pd / 2,
      gd = Pd / 2 - 1,
      Cd = Nd / pd * (Pd / 2),
      Kd = (dd, Jd) => -Math.PI / 2 + 2 * dd * Math.PI / Jd,
      od = (dd, Jd, kd) => {
        const pd = 2 * Math.PI / kd;
        return (Math.round((Math.atan2(Jd, dd) + Math.PI / 2) / pd) % kd + kd) % kd
      },
      ld = .5,
      Qd = (dd, Jd, kd) => Math.hypot(dd.x, dd.y) < ld ? kd : od(dd.x, dd.y, Jd),
      Ld = (dd, Jd, kd, pd, Nd) => {
        const Wd = Math.PI / Jd,
          Pd = Kd(dd, Jd),
          Zd = Pd - Wd,
          gd = Pd + Wd,
          Cd = (dd, Jd) => `${kd+dd*Math.cos(Jd)} ${kd+dd*Math.sin(Jd)}`;
        return [`M ${Cd(pd,Zd)}`, `L ${Cd(Nd,Zd)}`, `A ${Nd} ${Nd} 0 0 1 ${Cd(Nd,gd)}`, `L ${Cd(pd,gd)}`, `A ${pd} ${pd} 0 0 0 ${Cd(pd,Zd)}`, "Z"].join(" ")
      }
  },
  8749: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd
    });
    var pd = kd(56),
      Nd = kd(8673),
      Wd = kd(2357);

    function Pd() {
      const dd = (0, Wd.j)("shopInfo"),
        [, Jd] = (0, pd.useReducer)((dd => dd + 1), 0);
      return (0, Wd.g)("shopInfo", Jd), !(0, Nd.e)(dd)
    }
  },
  8635: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd,
      g: () => Pd,
      j: () => Zd,
      m: () => Nd
    });
    var pd = kd(8639);
    const Nd = dd => {
        const Jd = [];
        dd.holdingGun && Jd.push({
          kind: "reload"
        }), dd.touchscreenActionButton && Jd.push({
          kind: "touchButton",
          label: dd.touchscreenActionButton
        });
        for (const Wd of null !== (kd = null === (Nd = dd.customButtons) || void 0 === Nd ? void 0 : Nd.filter(pd.f)) && void 0 !== kd ? kd : []) {
          var kd, Nd;
          Jd.push({
            kind: "customButton",
            id: Wd.id,
            icon: Wd.icon,
            description: Wd.description
          })
        }
        return Jd
      },
      Wd = dd => dd.length >= 2,
      Pd = dd => "specialAction" !== dd.kind,
      Zd = (dd, Jd) => {
        if (null === dd || null === Jd) return dd === Jd;
        if (dd.kind !== Jd.kind) return !1;
        switch (dd.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return dd.action === Jd.action;
          case "customButton":
            return dd.id === Jd.id && dd.icon === Jd.icon;
          case "touchButton":
            return dd.label === Jd.label
        }
      }
  },
  8630: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Kd,
      i: () => Qd,
      l: () => od,
      o: () => Ld
    });
    var pd = kd(56),
      Nd = kd(29),
      Wd = kd(1459),
      Pd = kd(8635),
      Zd = kd(8646);
    let gd = null;
    const Cd = () => gd,
      Kd = dd => {
        (0, Pd.j)(gd, dd) || (gd = dd, Nd.j.nO(Zd.f, gd))
      },
      od = () => {
        const [dd, Jd] = (0, pd.useState)(Cd);
        return (0, Wd.h)(Zd.f, Jd), dd
      };
    let ld = !1;
    const Qd = dd => {
        dd !== ld && (ld = dd, Nd.j.nO(Zd.g, dd))
      },
      Ld = () => {
        const [dd, Jd] = (0, pd.useState)(ld);
        return (0, Wd.h)(Zd.g, Jd), dd
      }
  },
  8646: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd,
      f: () => pd,
      g: () => Nd,
      h: () => Zd,
      i: () => gd,
      m: () => Cd,
      o: () => Pd
    });
    const pd = "controllerActionHintChanged",
      Nd = "controllerActionWheelHintChanged",
      Wd = "controllerOpenChat",
      Pd = "controllerSneakToggledChanged",
      Zd = "controllerAttackLatchedChanged",
      gd = "controllerDropStackHoldChanged",
      Cd = "controllerPickBlockHintChanged"
  },
  8593: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd,
      c: () => Wd,
      f: () => gd,
      h: () => Zd
    });
    var pd = kd(1459),
      Nd = kd(1417);
    const Wd = "controllerInventoryCursorChanged",
      Pd = {
        showing: !1,
        kind: null,
        holding: !1,
        slotHasItem: !1,
        pressHints: null,
        hasCategories: !1,
        hasList: !1,
        openButtonCloses: !1,
        steppingSlots: !1,
        quickMoveToHotbar: !1,
        dropStackHold: null,
        hotbarPicking: !1
      },
      Zd = () => {
        var dd, Jd;
        return (0, pd.i)(Wd, null !== (dd = null === (Jd = (0, Nd.g)()) || void 0 === Jd ? void 0 : Jd.getInventoryCursorState()) && void 0 !== dd ? dd : Pd)
      },
      gd = () => {
        var dd, Jd;
        return null !== (dd = null === (Jd = (0, Nd.g)()) || void 0 === Jd ? void 0 : Jd.isPadSteppingSlots()) && void 0 !== dd && dd
      }
  },
  8588: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => ld,
      c: () => Zd,
      f: () => gd,
      j: () => Pd,
      k: () => Wd,
      l: () => Kd,
      n: () => od
    });
    let pd = null;
    const Nd = new Set,
      Wd = dd => (pd = dd, () => {
        if (pd === dd) {
          pd = null;
          for (const dd of Nd) dd()
        }
      }),
      Pd = dd => (Nd.add(dd), () => {
        Nd.delete(dd)
      }),
      Zd = () => pd,
      gd = () => null !== pd;
    let Cd = null;
    const Kd = dd => {
        Cd = dd
      },
      od = () => {
        const dd = Cd;
        return Cd = null, dd
      },
      ld = (dd, Jd) => {
        var kd, pd;
        return null !== (kd = null !== (pd = dd.find((dd => dd.element === Jd))) && void 0 !== pd ? pd : dd.find((dd => dd.element.contains(Jd)))) && void 0 !== kd ? kd : null
      }
  },
  8598: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd,
      d: () => Pd
    });
    var pd = kd(56);
    const Nd = new WeakMap,
      Wd = dd => {
        var Jd, kd;
        return null !== (Jd = null === (kd = Nd.get(dd)) || void 0 === kd ? void 0 : kd.current) && void 0 !== Jd ? Jd : null
      },
      Pd = (dd, Jd) => {
        const kd = (0, pd.useRef)(Jd);
        kd.current = Jd;
        const Wd = (0, pd.useRef)(null);
        (0, pd.useEffect)((() => {
          const Jd = dd.current,
            pd = Wd.current;
          Jd !== pd && (pd && Nd.get(pd) === kd && Nd.delete(pd), Wd.current = Jd, Jd && Nd.set(Jd, kd))
        })), (0, pd.useEffect)((() => () => {
          const dd = Wd.current;
          dd && Nd.get(dd) === kd && Nd.delete(dd), Wd.current = null
        }), [])
      }
  },
  8737: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Zd,
      g: () => Cd,
      i: () => od,
      m: () => Kd,
      p: () => gd,
      q: () => Qd
    });
    var pd = kd(29),
      Nd = kd(1994),
      Wd = kd(1417),
      Pd = kd(1404);
    const Zd = dd => {
        var Jd, kd;
        return (0, Pd.d)() && null !== (Jd = null === (kd = (0, Wd.g)()) || void 0 === kd ? void 0 : kd.getGlyphForNoaAction(dd)) && void 0 !== Jd ? Jd : null
      },
      gd = "controllerGlyph:",
      Cd = dd => {
        var Jd, kd;
        return null !== (Jd = null === (kd = (0, Wd.g)()) || void 0 === kd ? void 0 : kd.getPadGlyphIconName(dd)) && void 0 !== Jd ? Jd : `${gd}xbox/${dd}`
      },
      Kd = dd => dd.startsWith(gd),
      od = dd => {
        var Jd, kd;
        return Kd(dd) && null !== (Jd = null === (kd = (0, Wd.g)()) || void 0 === kd ? void 0 : kd.getPadGlyphIconUrl(dd)) && void 0 !== Jd ? Jd : null
      },
      ld = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", Pd.c, Nd.f, Nd.d],
      Qd = dd => {
        const Jd = ld.map((Jd => pd.j.subscribe(Jd, dd)));
        return () => {
          for (const dd of Jd) pd.j.unsubscribe(dd)
        }
      }
  },
  8565: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd,
      d: () => pd
    });
    const pd = "controllerOpenKeyboard",
      Nd = "controllerKeyboardVisible"
  },
  8620: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      g: () => Nd
    });
    let pd = null;
    const Nd = function(dd) {
        const Jd = {
          cycle: dd,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return pd = Jd, () => {
          pd === Jd && (pd = null)
        }
      },
      Wd = () => {
        var dd;
        return null !== (dd = pd) && void 0 !== dd && dd.canCycle() ? pd.cycle : null
      }
  },
  8724: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd,
      d: () => Pd,
      f: () => Wd,
      j: () => pd,
      l: () => Zd,
      o: () => Cd,
      q: () => Kd
    });
    const pd = "controllerActionWheelOpen",
      Nd = "controllerActionWheelAim",
      Wd = "controllerActionWheelCommit",
      Pd = "controllerActionWheelClose",
      Zd = "controllerActionWheelPick";
    let gd = !1;
    const Cd = () => gd,
      Kd = dd => {
        gd = dd
      }
  },
  8717: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      h: () => Nd
    });
    let pd = 0;
    const Nd = () => {
        pd++
      },
      Wd = () => pd
  },
  8613: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => gd,
      d: () => Nd,
      g: () => Pd,
      k: () => Wd,
      l: () => pd,
      o: () => Cd
    });
    const pd = "controllerQuickChatWheelOpen",
      Nd = "controllerQuickChatWheelAim",
      Wd = "controllerQuickChatWheelCommit",
      Pd = "controllerQuickChatWheelClose";
    let Zd = !1;
    const gd = () => Zd,
      Cd = dd => {
        Zd = dd
      }
  },
  8809: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Zd,
      d: () => gd
    });
    var pd = kd(22),
      Nd = kd(1348),
      Wd = kd(95);
    const Pd = {
      blockMined: {
        pattern: [18],
        priority: 1,
        minGapMs: 120
      },
      hitLanded: {
        pattern: [20],
        priority: 2,
        minGapMs: 80
      },
      damageTaken: {
        pattern: [45],
        priority: 3,
        minGapMs: 250
      },
      fishBite: {
        pattern: null,
        priority: 3,
        minGapMs: 0
      },
      death: {
        pattern: [60, 70, 120],
        priority: 4,
        minGapMs: 0
      },
      lockReady: {
        pattern: [8],
        priority: 2,
        minGapMs: 0
      },
      lockLocked: {
        pattern: [15, 50, 15],
        priority: 2,
        minGapMs: 0
      },
      autorunLedgeStop: {
        pattern: [40],
        priority: 3,
        minGapMs: 0
      }
    };

    function Zd() {
      return (0, Wd.isMobile)() && "function" === typeof navigator.vibrate
    }
    const gd = new class {
      constructor(dd) {
        this.deps = dd, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(dd, Jd) {
        var kd;
        if (!this.deps.enabled()) return;
        const pd = Pd[dd],
          Nd = null !== Jd && void 0 !== Jd ? Jd : pd.pattern;
        if (null === Nd) return void console.warn("No vibration pattern for", dd);
        const Wd = this.deps.now();
        Wd - this.lastAnyAt < 40 && pd.priority < this.playingPriority || Wd - (null !== (kd = this.lastAt.get(dd)) && void 0 !== kd ? kd : -1 / 0) < pd.minGapMs || Wd < this.playingUntil && pd.priority < this.playingPriority || (this.lastAt.set(dd, Wd), this.lastAnyAt = Wd, this.playingUntil = Wd + Nd.reduce(((dd, Jd) => dd + Jd), 0), this.playingPriority = pd.priority, this.deps.vibrate(Nd))
      }
    }({
      vibrate: dd => {
        navigator.vibrate([...dd])
      },
      now: () => performance.now(),
      enabled: () => Zd() && pd.d.get("isTouchScreen") && pd.d.get("clientEscMenuOptions").vibration && !(0, Nd.g)()
    })
  },
  8673: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd
    });
    var pd = kd(8681),
      Nd = kd(610),
      Wd = kd(126);

    function Pd(dd) {
      var Jd, kd;
      if ((0, Nd.I)(dd)) return !0;
      const Pd = null !== (Jd = null === (kd = Wd.q[Wd.t]) || void 0 === kd ? void 0 : kd.adConfig.showRewardedAds) && void 0 !== Jd && Jd;
      for (const Nd in dd) {
        const Jd = dd[Nd];
        if (null !== Jd && void 0 !== Jd && Jd.items)
          for (const dd in Jd.items)
            if ((0, pd.k)(Jd.items[dd], Pd)) return !1
      }
      return !0
    }
  },
  8691: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd,
      h: () => pd
    });
    const pd = 100;

    function Nd(dd) {
      let {
        translationKeys: Jd = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return dd.map((dd => {
        var kd;
        return null !== (kd = function(dd, Jd) {
          if ("string" === typeof dd) return dd;
          const kd = "str" in dd ? dd.str : dd;
          if ("string" === typeof kd) return kd;
          if ("entityName" in kd) return kd.entityName;
          if (Jd && "translationKey" in kd) return `{${kd.translationKey}${void 0===kd.params?"":` ${JSON.stringify(kd.params)}`}}`;
          return null
        }(dd, Jd)) && void 0 !== kd ? kd : " "
      })).join("")
    }
  },
  8734: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Kd,
      d: () => Zd,
      e: () => gd
    });
    var pd = kd(2196),
      Nd = kd(1260),
      Wd = kd(2203);
    const Pd = ",";

    function Zd(dd) {
      if (!dd) return [];
      const Jd = new Set,
        kd = [];
      for (const pd of dd.split(Pd)) {
        const dd = pd.trim();
        if ((0, Wd.i)(dd) && !Jd.has(dd) && (Jd.add(dd), kd.push(dd), kd.length >= Nd.n)) break
      }
      return kd
    }

    function gd(dd) {
      const Jd = new Set,
        kd = [];
      for (const pd of dd)
        if ((0, Wd.i)(pd) && !Jd.has(pd) && (Jd.add(pd), kd.push(pd), kd.length >= Nd.n)) break;
      return kd.join(Pd)
    }

    function Cd() {
      return gd(Wd.e)
    }

    function Kd(dd) {
      var Jd;
      return "emote" === dd ? Cd() : null !== (Jd = od[dd][0]) && void 0 !== Jd ? Jd : ld[dd]
    }
    const od = Nd.x.reduce(((dd, Jd) => {
        const kd = [];
        for (const Wd in pd.e[Jd]) {
          var Nd;
          "default" === (null === (Nd = (0, pd.h)(Jd, Wd)) || void 0 === Nd ? void 0 : Nd.cosmeticPack) && kd.push(Wd)
        }
        return dd[Jd] = kd, dd
      }), {}),
      ld = Nd.x.reduce(((dd, Jd) => (dd[Jd] = Object.keys(pd.e[Jd])[0], dd)), {})
  },
  8681: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      return !dd.hidden && (Jd || !dd.isRewardedAd)
    }

    function Nd(dd) {
      return "object" === typeof dd ? dd.option : dd
    }

    function Wd(dd, Jd) {
      var kd;
      if ("dropdown" === (null === (kd = dd.userInput) || void 0 === kd ? void 0 : kd.type) && "object" === typeof dd.userInput.dropdownOptions[0]) {
        for (const kd of dd.userInput.dropdownOptions)
          if (Nd(kd) === Jd) return "object" === typeof kd ? kd.cost : dd.cost;
        console.error("Didn't find matching option for dropdown item. Item:", dd, "input:", Jd)
      }
      return dd.cost
    }

    function Pd(dd, Jd, kd) {
      var pd;
      const Nd = null !== (pd = kd.excludedPlayers) && void 0 !== pd ? pd : [Jd];
      return dd.filter((dd => !Nd.includes(dd)))
    }
    kd.d(Jd, {
      d: () => Wd,
      h: () => Nd,
      i: () => Pd,
      k: () => pd
    })
  },
  8728: () => {}
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);
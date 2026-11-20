export const id = 151;
export const ids = [151];
export const modules = {
  8484: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Uv,
      f: () => Ov,
      i: () => Dv
    });
    var hv = Pv(52),
      Sv = Pv(4292),
      ev = Pv(1108),
      gv = Pv(1439),
      pv = Pv(26),
      dv = Pv(3172),
      Nv = Pv(2169),
      lv = Pv(1226),
      Tv = Pv(8501),
      Wv = Pv(1876),
      wv = Pv(1923),
      av = Pv(1175),
      sv = Pv(22),
      Cv = Pv(1610),
      iv = Pv(1035),
      cv = Pv.n(iv),
      Gv = Pv(8487),
      mv = Pv(8493),
      jv = Pv(8495),
      fv = Pv(8405),
      Fv = Pv(8497),
      Yv = (Pv(8499), Pv(1082));
    let nv = null;

    function Ov() {
      return null !== nv
    }

    function Dv() {
      return "pad" === nv
    }

    function Kv() {
      return "inGame" === sv.c.get("gameState") && !(0, Cv.o)()
    }

    function Vv(vv) {
      return (0, mv.r)(vv, lv.m, mv.e, mv.h, mv.l)
    }
    const Uv = (0, hv.memo)((function() {
      const {
        t: vv
      } = (0, av.x)(), {
        userContext: zv
      } = (0, ev.d)(), [Pv, sv] = (0, hv.useState)(null), [iv, Ov] = (0, hv.useState)(null), Dv = (0, hv.useRef)(null), Uv = (0, hv.useCallback)((vv => {
        Dv.current = vv, Ov(vv)
      }), []), Rv = (0, hv.useRef)(0), xv = (0, hv.useRef)(null), tv = (0, hv.useRef)({
        x: 0,
        y: 0
      }), [qv, Iv] = (0, hv.useState)(0), Qv = (0, hv.useMemo)((() => function(vv) {
        const zv = [];
        for (let hv = 0; hv < lv.m; hv++) {
          var Pv;
          zv.push(null !== (Pv = vv[hv]) && void 0 !== Pv ? Pv : null)
        }
        return zv
      }((0, Tv.c)(zv.getPlayerCosmetics().emote))), [zv, qv]);
      (0, wv.d)("cosmeticsUpdated", (vv => {
        vv.some((vv => vv.local && "emote" === vv.GP)) && Iv((vv => vv + 1))
      }));
      const Zv = (0, hv.useRef)(!1),
        Av = (0, hv.useCallback)((function(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === vv && (0, jv.f)(), Zv.current = zv, tv.current = {
            x: 0,
            y: 0
          }, Uv(null), sv(vv)
        }), [Uv]),
        Lv = (0, hv.useCallback)((() => {
          sv(null), Uv(null), tv.current = {
            x: 0,
            y: 0
          }
        }), [Uv]),
        Hv = (0, hv.useCallback)((vv => {
          if (Date.now() < Rv.current) return;
          const zv = (0, Nv.l)(vv),
            Pv = !!zv.holdUntilMove,
            hv = Pv ? 600 : Math.ceil(1e3 * zv.animation.animation_length / Nv.e) + 200;
          Rv.current = Date.now() + hv, xv.current = vv, Wv.gameBridge.send("playEmote", vv), Wv.gameBridge.send("applyTemporaryThirdPerson", Pv ? {} : {
            durationMs: hv
          })
        }), []);
      (0, gv.g)("requestToggleEmoteWheel", (() => {
        null === Pv ? Kv() && Av("click") : Lv()
      })), (0, gv.g)("requestEmoteWheelHoldOpen", (() => {
        null === Pv && Kv() && Av((0, Gv.c)() ? "hold" : "click")
      })), (0, gv.g)("requestEmoteWheelPadOpen", (vv => {
        null !== Pv || !Kv() || (0, fv.b)() || (0, Fv.p)() || Av("pad", vv)
      })), (0, gv.g)("requestEmoteRepeatLast", (() => {
        if (null !== Pv || !Kv() || (0, fv.b)() || (0, Fv.p)()) return;
        const vv = xv.current;
        null !== vv && Qv.includes(vv) ? Hv(vv) : Av("pad", !0)
      }));
      const Mv = () => {
        const vv = Dv.current,
          zv = null !== vv ? Qv[vv] : null;
        null !== zv && "pad" === Pv && Date.now() < Rv.current || (Lv(), null !== zv && Hv(zv))
      };
      (0, gv.g)("emoteWheelPadAim", (vv => {
        if ("pad" !== Pv) return;
        const zv = (0, mv.D)(vv, lv.m, Dv.current);
        Uv(null !== zv && null !== Qv[zv] ? zv : null)
      })), (0, gv.g)("requestEmoteWheelPadCommit", (vv => {
        "pad" !== Pv || vv && Zv.current || Mv()
      })), (0, gv.g)("appManagerUpdated|activeInputDevice", (vv => {
        null !== Pv && "pad" === Pv !== ("gamepad" === vv) && Lv()
      })), (0, hv.useLayoutEffect)((() => (nv = Pv, (0, dv.v)("emoteWheel", "pad" === Pv), pv.j.zC(dv.n), () => {
        nv = null, (0, dv.v)("emoteWheel", !1), pv.j.zC(dv.n)
      })), [Pv]), (0, gv.g)("requestEmoteWheelHoldRelease", (() => {
        "hold" === Pv && Mv()
      })), (0, gv.g)("requestEmoteWheelClose", (() => {
        null !== Pv && Lv()
      })), (0, gv.g)("appManagerUpdated|gameState", (vv => {
        "inGame" !== vv && Lv()
      }));
      const yv = () => {
        (0, Cv.o)() && Lv()
      };
      if ((0, gv.g)("appManagerUpdated|openEverythingMenuName", yv), (0, gv.g)("appManagerUpdated|openInGameMenuName", yv), (0, gv.g)("pointerLockUpdate", (vv => {
          vv || "hold" !== Pv || Lv()
        })), (0, hv.useEffect)((() => {
          if (null === Pv) return;
          const vv = vv => {
            "Escape" === vv.key && (vv.stopImmediatePropagation(), vv.preventDefault(), Lv())
          };
          return document.addEventListener("keydown", vv, !0), () => {
            document.removeEventListener("keydown", vv, !0)
          }
        }), [Pv, Lv]), (0, Sv.e)(!0, "click" === Pv, "EmoteWheelOverlay"), (0, hv.useEffect)((() => {
          if ("hold" === Pv) return Wv.gameBridge.send("holdEmoteWheel", !0), () => {
            Wv.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [Pv]), (0, hv.useEffect)((() => {
          if ("hold" !== Pv) return;
          const vv = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            zv = mv.q * vv,
            hv = mv.p * vv,
            Sv = vv => {
              let Pv = tv.current.x + vv.movementX,
                Sv = tv.current.y + vv.movementY;
              const ev = Math.hypot(Pv, Sv);
              if (ev > zv) {
                const vv = zv / ev;
                Pv *= vv, Sv *= vv
              }
              tv.current = {
                x: Pv,
                y: Sv
              }, Uv(function(vv, zv, Pv, hv) {
                if (Math.hypot(vv, zv) < Pv) return null;
                const Sv = (0, mv.v)(vv, zv, lv.m);
                return null === hv[Sv] ? null : Sv
              }(Pv, Sv, hv, Qv))
            };
          return document.addEventListener("mousemove", Sv), () => {
            document.removeEventListener("mousemove", Sv)
          }
        }), [Pv, Qv, Uv]), null === Pv) return null;
      const Bv = "hold" === Pv || "pad" === Pv,
        Jv = null !== iv ? Qv[iv] : null,
        Ev = null !== Jv ? (0, Nv.l)(Jv).displayName : vv("emotes:pickEmote");
      return (0, Yv.jsx)("div", {
        className: cv()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === Pv
        }),
        onMouseDown: vv => {
          vv.target === vv.currentTarget && Lv()
        },
        children: (0, Yv.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * mv.q + "rem",
            height: 2 * mv.q + "rem"
          },
          children: [(0, Yv.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${mv.o} ${mv.o}`,
            children: [Qv.map(((zv, Pv) => {
              const hv = null !== zv,
                Sv = Bv && Pv === iv;
              return (0, Yv.jsx)("path", {
                d: Vv(Pv),
                className: cv()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: Sv,
                  EmoteWheelWedgeDisabled: !hv
                }),
                onClick: vv => {
                  vv.stopPropagation(), null !== zv && (vv => {
                    Lv(), Hv(vv)
                  })(zv)
                },
                "aria-label": null !== zv ? (0, Nv.l)(zv).displayName : vv("emotes:emptySlot")
              }, Pv)
            })), (0, Yv.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: mv.e,
              cy: mv.e,
              r: mv.l
            }), (0, Yv.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: mv.e,
              cy: mv.e,
              r: mv.h
            }), Bv && null !== iv && (0, Yv.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: Vv(iv)
            })]
          }), Qv.map(((vv, zv) => {
            const Pv = null !== vv,
              hv = Bv && zv === iv,
              Sv = (0, mv.y)(zv, lv.m),
              ev = mv.d * Math.cos(Sv),
              gv = mv.d * Math.sin(Sv);
            return (0, Yv.jsx)("div", {
              className: cv()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: hv,
                EmoteWheelSlotIconDisabled: !Pv
              }),
              style: {
                left: `calc(50% + ${ev}rem)`,
                top: `calc(50% + ${gv}rem)`,
                backgroundImage: Pv ? `url(/textures/charSkins/previews/emote_${vv}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, zv)
          })), (0, Yv.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: Ev
          })]
        })
      })
    }))
  },
  8474: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Tv,
      d: () => av,
      h: () => sv,
      j: () => wv,
      l: () => Wv
    });
    var hv = Pv(52),
      Sv = Pv(8481),
      ev = Pv(26),
      gv = Pv(1876),
      pv = Pv(39),
      dv = Pv(1243),
      Nv = Pv(1903);
    const lv = 50;
    const Tv = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = vv => {
          if (0 === this.listeners.size) {
            var zv, Pv;
            this.state = {
              ...this.state,
              channel: null !== (zv = null === (Pv = Nv.c.get("chatChannels")) || void 0 === Pv ? void 0 : Pv[0]) && void 0 !== zv ? zv : null
            };
            const vv = ev.j.subscribe("reportPlayer", (vv => {
              let {
                playerEId: zv
              } = vv;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, zv]
              })
            }));
            this.stopListening = [gv.gameBridge.subscribe("chatReceived", (vv => {
              let {
                serverChatMsgId: zv,
                content: Pv,
                author: hv
              } = vv;
              this.addMessage(zv, Pv, hv)
            })), () => {
              ev.j.unsubscribe(vv)
            }, Nv.c.subscribe("chatChannels", (vv => {
              var zv;
              this.setState({
                ...this.state,
                channel: null !== (zv = null === vv || void 0 === vv ? void 0 : vv[0]) && void 0 !== zv ? zv : null
              })
            }))]
          }
          return this.listeners.add(vv), () => {
            if (this.listeners.delete(vv), 0 === this.listeners.size) {
              for (const vv of this.stopListening) vv();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const hv = {
          serverChatMsgId: vv,
          content: zv,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: Pv
        };
        this.setState({
          ...this.state,
          messages: [hv, ...this.state.messages].slice(0, Sv.f)
        })
      }
      selectNextChannel() {
        const vv = Nv.c.get("chatChannels");
        if (vv) {
          const zv = vv.findIndex((vv => {
            var zv;
            return vv.channelName === (null === (zv = this.state.channel) || void 0 === zv ? void 0 : zv.channelName)
          }));
          this.setState({
            ...this.state,
            channel: vv[(zv + 1) % vv.length]
          })
        }
      }
      setState(vv) {
        this.state = vv;
        for (const zv of this.listeners) zv()
      }
    };

    function Wv() {
      const [vv, zv] = (0, hv.useState)(Tv.getState);
      return (0, hv.useEffect)((() => {
        const vv = Tv.subscribe((() => {
          zv(Tv.getState())
        }));
        return zv(Tv.getState()), vv
      }), []), vv
    }

    function wv(vv) {
      var zv, Pv;
      if (vv.startsWith("/report")) {
        var hv;
        const zv = null !== (hv = vv.replace("/report", "").trim().split(" ")[0]) && void 0 !== hv ? hv : "";
        if ("" === zv) return void Tv.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const Pv = gv.gameBridge.latest("players"),
          Sv = gv.gameBridge.latest("hiddenPlayerNames"),
          pv = vv => {
            var hv, ev;
            const gv = null !== (hv = null === (ev = Pv.byId[vv]) || void 0 === ev ? void 0 : ev.name) && void 0 !== hv ? hv : null;
            return null !== gv && (gv === zv || (0, dv.b)(gv, Sv) === zv)
          };
        if (null !== Pv.localId && pv(Pv.localId)) return void Tv.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const vv of Pv.ids)
          if (pv(vv)) return ev.j.zC("OpenReportMenu", {
            playerEId: vv,
            playerName: Pv.byId[vv].name,
            al: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        Tv.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      gv.gameBridge.send("sendChatMessage", {
          al: vv,
          channelName: null !== (zv = null === (Pv = Tv.getState().channel) || void 0 === Pv ? void 0 : Pv.channelName) && void 0 !== zv ? zv : null
        }),
        function(vv) {
          var zv;
          const Pv = null !== (zv = pv.h.getItem("recentlySentChatMsgs")) && void 0 !== zv ? zv : [];
          Pv.push(vv), Pv.length > lv && Pv.shift();
          pv.h.setItem("recentlySentChatMsgs", Pv)
        }(vv)
    }

    function av() {
      var vv;
      return null !== (vv = pv.h.getItem("recentlySentChatMsgs")) && void 0 !== vv ? vv : []
    }

    function sv(vv) {
      var zv;
      let Pv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const hv = null !== (zv = pv.h.getItem("recentlySentChatMsgs")) && void 0 !== zv ? zv : [],
        Sv = hv.length + 1,
        ev = Pv ? (vv % Sv + Sv) % Sv : Math.min(hv.length, Math.max(0, vv));
      return {
        stepsBack: ev,
        text: 0 === ev ? "" : hv[hv.length - ev]
      }
    }
  },
  8433: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv,
      e: () => ev
    });
    var hv = Pv(1946);
    const Sv = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      ev = vv => "string" === typeof vv.icon && "" !== vv.icon && "string" === typeof vv.keycode && Sv.test(vv.keycode),
      gv = vv => "Space" === vv ? "_" : hv.e[vv]
  },
  8487: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv
    });
    var hv = Pv(22);

    function Sv() {
      return !hv.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8563: (vv, zv, Pv) => {
    function hv(vv) {
      return {
        x: (vv.left + vv.right) / 2,
        y: (vv.top + vv.bottom) / 2
      }
    }

    function Sv(vv) {
      return 0 === vv.length ? null : vv.reduce(((vv, zv) => ({
        left: Math.min(vv.left, zv.left),
        top: Math.min(vv.top, zv.top),
        right: Math.max(vv.right, zv.right),
        bottom: Math.max(vv.bottom, zv.bottom)
      })))
    }

    function ev(vv, zv) {
      const Pv = Math.max(0, (zv - (vv.right - vv.left)) / 2),
        hv = Math.max(0, (zv - (vv.bottom - vv.top)) / 2);
      return {
        left: vv.left - Pv,
        top: vv.top - hv,
        right: vv.right + Pv,
        bottom: vv.bottom + hv
      }
    }

    function gv(vv, zv) {
      return zv.x >= vv.left && zv.x <= vv.right && zv.y >= vv.top && zv.y <= vv.bottom
    }

    function pv(vv, zv, Pv) {
      let Sv = null,
        pv = 1 / 0;
      for (const {
          id: hv,
          box: ev
        }
        of zv) {
        const zv = (ev.right - ev.left) * (ev.bottom - ev.top);
        gv(ev, vv) && zv < pv && (pv = zv, Sv = hv)
      }
      if (null !== Sv) return Sv;
      let dv = 1 / 0;
      for (const {
          id: Nv,
          box: lv
        }
        of zv) {
        if (!gv(ev(lv, Pv), vv)) continue;
        const zv = hv(lv),
          pv = Math.hypot(vv.x - zv.x, vv.y - zv.y);
        pv < dv && (dv = pv, Sv = Nv)
      }
      return Sv
    }

    function dv(vv, zv, Pv) {
      return {
        left: Pv.left,
        top: Pv.top,
        right: vv - Pv.right,
        bottom: zv - Pv.bottom
      }
    }

    function Nv(vv, zv, Pv, hv) {
      const Sv = (vv, zv, Pv) => Math.max(Math.min(zv, 0), Math.min(Math.max(Pv, 0), vv));
      return {
        x: Sv(zv, hv.left - vv.left, hv.right - vv.right),
        y: Sv(Pv, hv.top - vv.top, hv.bottom - vv.bottom)
      }
    }

    function lv(vv, zv, Pv, hv, Sv) {
      const ev = vv.dx * hv + zv,
        gv = vv.dy * Sv + Pv,
        pv = vv => Math.max(-1, Math.min(1, vv));
      return {
        dx: pv(ev / hv),
        dy: pv(gv / Sv)
      }
    }

    function Tv(vv, zv, Pv, hv) {
      return zv <= 0 || Pv <= 0 ? 1 : Math.max(.05, Math.min(1, vv / zv, hv / Pv))
    }

    function Wv(vv, zv, Pv) {
      return Math.min(vv.right, zv.right) - Math.max(vv.left, zv.left) > Pv && Math.min(vv.bottom, zv.bottom) - Math.max(vv.top, zv.top) > Pv
    }

    function wv(vv, zv) {
      const Pv = (vv, zv, Pv, hv) => zv - vv > hv - Pv ? Pv - vv > zv - hv ? hv - zv : Pv - vv : vv < Pv ? Pv - vv : zv > hv ? hv - zv : 0;
      return {
        x: Pv(vv.left, vv.right, zv.left, zv.right),
        y: Pv(vv.top, vv.bottom, zv.top, zv.bottom)
      }
    }

    function av(vv, zv) {
      let {
        avoid: Pv = null,
        bounds: hv = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, Sv = 0, ev = 1 / 0;
      return vv.forEach(((vv, gv) => {
        const pv = zv.filter((zv => Wv(vv, zv, 0))).length,
          dv = null !== hv && (vv.left < hv.left || vv.top < hv.top || vv.right > hv.right || vv.bottom > hv.bottom),
          Nv = pv + (Pv && Wv(vv, Pv, 0) ? 1e3 : 0) + (dv ? 1e6 : 0);
        Nv < ev && (Sv = gv, ev = Nv)
      })), Sv
    }
    Pv.d(zv, {
      C: () => wv,
      F: () => Sv,
      b: () => hv,
      f: () => gv,
      h: () => Wv,
      j: () => Nv,
      m: () => ev,
      p: () => av,
      s: () => lv,
      u: () => pv,
      v: () => Tv,
      z: () => dv
    })
  },
  8493: (vv, zv, Pv) => {
    Pv.d(zv, {
      A: () => Wv,
      D: () => wv,
      d: () => ev,
      e: () => pv,
      h: () => Nv,
      l: () => dv,
      o: () => gv,
      p: () => Sv,
      q: () => hv,
      r: () => av,
      v: () => Tv,
      y: () => lv
    });
    const hv = 14,
      Sv = 6,
      ev = (hv + Sv) / 2,
      gv = 200,
      pv = gv / 2,
      dv = gv / 2 - 1,
      Nv = Sv / hv * (gv / 2),
      lv = (vv, zv) => -Math.PI / 2 + 2 * vv * Math.PI / zv,
      Tv = (vv, zv, Pv) => {
        const hv = 2 * Math.PI / Pv;
        return (Math.round((Math.atan2(zv, vv) + Math.PI / 2) / hv) % Pv + Pv) % Pv
      },
      Wv = .5,
      wv = (vv, zv, Pv) => Math.hypot(vv.x, vv.y) < Wv ? Pv : Tv(vv.x, vv.y, zv),
      av = (vv, zv, Pv, hv, Sv) => {
        const ev = Math.PI / zv,
          gv = lv(vv, zv),
          pv = gv - ev,
          dv = gv + ev,
          Nv = (vv, zv) => `${Pv+vv*Math.cos(zv)} ${Pv+vv*Math.sin(zv)}`;
        return [`M ${Nv(hv,pv)}`, `L ${Nv(Sv,pv)}`, `A ${Sv} ${Sv} 0 0 1 ${Nv(Sv,dv)}`, `L ${Nv(hv,dv)}`, `A ${hv} ${hv} 0 0 0 ${Nv(hv,pv)}`, "Z"].join(" ")
      }
  },
  8520: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => gv
    });
    var hv = Pv(52),
      Sv = Pv(8467),
      ev = Pv(2324);

    function gv() {
      const vv = (0, ev.i)("shopInfo"),
        [, zv] = (0, hv.useReducer)((vv => vv + 1), 0);
      return (0, ev.e)("shopInfo", zv), !(0, Sv.b)(vv)
    }
  },
  8426: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev,
      g: () => gv,
      j: () => pv,
      k: () => Sv
    });
    var hv = Pv(8433);
    const Sv = vv => {
        const zv = [];
        vv.holdingGun && zv.push({
          kind: "reload"
        }), vv.touchscreenActionButton && zv.push({
          kind: "touchButton",
          label: vv.touchscreenActionButton
        });
        for (const ev of null !== (Pv = null === (Sv = vv.customButtons) || void 0 === Sv ? void 0 : Sv.filter(hv.e)) && void 0 !== Pv ? Pv : []) {
          var Pv, Sv;
          zv.push({
            kind: "customButton",
            id: ev.id,
            icon: ev.icon,
            description: ev.description
          })
        }
        return zv
      },
      ev = vv => vv.length >= 2,
      gv = vv => "specialAction" !== vv.kind,
      pv = (vv, zv) => {
        if (null === vv || null === zv) return vv === zv;
        if (vv.kind !== zv.kind) return !1;
        switch (vv.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return vv.action === zv.action;
          case "customButton":
            return vv.id === zv.id && vv.icon === zv.icon;
          case "touchButton":
            return vv.label === zv.label
        }
      }
  },
  8424: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => lv,
      f: () => wv,
      j: () => Tv,
      n: () => av
    });
    var hv = Pv(52),
      Sv = Pv(26),
      ev = Pv(1439),
      gv = Pv(8426),
      pv = Pv(8438);
    let dv = null;
    const Nv = () => dv,
      lv = vv => {
        (0, gv.j)(dv, vv) || (dv = vv, Sv.j.zC(pv.e, dv))
      },
      Tv = () => {
        const [vv, zv] = (0, hv.useState)(Nv);
        return (0, ev.g)(pv.e, zv), vv
      };
    let Wv = !1;
    const wv = vv => {
        vv !== Wv && (Wv = vv, Sv.j.zC(pv.g, vv))
      },
      av = () => {
        const [vv, zv] = (0, hv.useState)(Wv);
        return (0, ev.g)(pv.g, zv), vv
      }
  },
  8438: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      e: () => hv,
      g: () => Sv,
      j: () => pv,
      m: () => dv,
      q: () => Nv,
      t: () => gv
    });
    const hv = "controllerActionHintChanged",
      Sv = "controllerActionWheelHintChanged",
      ev = "controllerOpenChat",
      gv = "controllerSneakToggledChanged",
      pv = "controllerAttackLatchedChanged",
      dv = "controllerDropStackHoldChanged",
      Nv = "controllerPickBlockHintChanged"
  },
  8380: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      h: () => ev,
      j: () => dv,
      m: () => pv
    });
    var hv = Pv(1439),
      Sv = Pv(1387);
    const ev = "controllerInventoryCursorChanged",
      gv = {
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
      pv = () => {
        var vv, zv;
        return (0, hv.j)(ev, null !== (vv = null === (zv = (0, Sv.f)()) || void 0 === zv ? void 0 : zv.getInventoryCursorState()) && void 0 !== vv ? vv : gv)
      },
      dv = () => {
        var vv, zv;
        return null !== (vv = null === (zv = (0, Sv.f)()) || void 0 === zv ? void 0 : zv.isPadSteppingSlots()) && void 0 !== vv && vv
      }
  },
  8374: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Wv,
      g: () => pv,
      h: () => dv,
      k: () => gv,
      n: () => ev,
      r: () => lv,
      v: () => Tv
    });
    let hv = null;
    const Sv = new Set,
      ev = vv => (hv = vv, () => {
        if (hv === vv) {
          hv = null;
          for (const vv of Sv) vv()
        }
      }),
      gv = vv => (Sv.add(vv), () => {
        Sv.delete(vv)
      }),
      pv = () => hv,
      dv = () => null !== hv;
    let Nv = null;
    const lv = vv => {
        Nv = vv
      },
      Tv = () => {
        const vv = Nv;
        return Nv = null, vv
      },
      Wv = (vv, zv) => {
        var Pv, hv;
        return null !== (Pv = null !== (hv = vv.find((vv => vv.element === zv))) && void 0 !== hv ? hv : vv.find((vv => vv.element.contains(zv)))) && void 0 !== Pv ? Pv : null
      }
  },
  8388: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      d: () => gv
    });
    var hv = Pv(52);
    const Sv = new WeakMap,
      ev = vv => {
        var zv, Pv;
        return null !== (zv = null === (Pv = Sv.get(vv)) || void 0 === Pv ? void 0 : Pv.current) && void 0 !== zv ? zv : null
      },
      gv = (vv, zv) => {
        const Pv = (0, hv.useRef)(zv);
        Pv.current = zv;
        const ev = (0, hv.useRef)(null);
        (0, hv.useEffect)((() => {
          const zv = vv.current,
            hv = ev.current;
          zv !== hv && (hv && Sv.get(hv) === Pv && Sv.delete(hv), ev.current = zv, zv && Sv.set(zv, Pv))
        })), (0, hv.useEffect)((() => () => {
          const vv = ev.current;
          vv && Sv.get(vv) === Pv && Sv.delete(vv), ev.current = null
        }), [])
      }
  },
  8505: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => pv,
      c: () => Nv,
      e: () => Tv,
      g: () => lv,
      i: () => dv,
      l: () => wv
    });
    var hv = Pv(26),
      Sv = Pv(1963),
      ev = Pv(1387),
      gv = Pv(1374);
    const pv = vv => {
        var zv, Pv;
        return (0, gv.d)() && null !== (zv = null === (Pv = (0, ev.f)()) || void 0 === Pv ? void 0 : Pv.getGlyphForNoaAction(vv)) && void 0 !== zv ? zv : null
      },
      dv = "controllerGlyph:",
      Nv = vv => {
        var zv, Pv;
        return null !== (zv = null === (Pv = (0, ev.f)()) || void 0 === Pv ? void 0 : Pv.getPadGlyphIconName(vv)) && void 0 !== zv ? zv : `${dv}xbox/${vv}`
      },
      lv = vv => vv.startsWith(dv),
      Tv = vv => {
        var zv, Pv;
        return lv(vv) && null !== (zv = null === (Pv = (0, ev.f)()) || void 0 === Pv ? void 0 : Pv.getPadGlyphIconUrl(vv)) && void 0 !== zv ? zv : null
      },
      Wv = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", gv.c, Sv.i, Sv.e],
      wv = vv => {
        const zv = Wv.map((zv => hv.j.subscribe(zv, vv)));
        return () => {
          for (const vv of zv) hv.j.unsubscribe(vv)
        }
      }
  },
  8359: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv,
      d: () => hv
    });
    const hv = "controllerOpenKeyboard",
      Sv = "controllerKeyboardVisible"
  },
  8413: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      f: () => Sv
    });
    let hv = null;
    const Sv = function(vv) {
        const zv = {
          cycle: vv,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return hv = zv, () => {
          hv === zv && (hv = null)
        }
      },
      ev = () => {
        var vv;
        return null !== (vv = hv) && void 0 !== vv && vv.canCycle() ? hv.cycle : null
      }
  },
  8497: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv,
      g: () => gv,
      j: () => ev,
      k: () => hv,
      n: () => pv,
      p: () => Nv,
      q: () => lv
    });
    const hv = "controllerActionWheelOpen",
      Sv = "controllerActionWheelAim",
      ev = "controllerActionWheelCommit",
      gv = "controllerActionWheelClose",
      pv = "controllerActionWheelPick";
    let dv = !1;
    const Nv = () => dv,
      lv = vv => {
        dv = vv
      }
  },
  8495: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      f: () => Sv
    });
    let hv = 0;
    const Sv = () => {
        hv++
      },
      ev = () => hv
  },
  8405: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => dv,
      c: () => Sv,
      e: () => gv,
      f: () => ev,
      h: () => hv,
      j: () => Nv
    });
    const hv = "controllerQuickChatWheelOpen",
      Sv = "controllerQuickChatWheelAim",
      ev = "controllerQuickChatWheelCommit",
      gv = "controllerQuickChatWheelClose";
    let pv = !1;
    const dv = () => pv,
      Nv = vv => {
        pv = vv
      }
  },
  8561: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pv,
      e: () => dv
    });
    var hv = Pv(22),
      Sv = Pv(1306),
      ev = Pv(73);
    const gv = {
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

    function pv() {
      return (0, ev.isMobile)() && "function" === typeof navigator.vibrate
    }
    const dv = new class {
      constructor(vv) {
        this.deps = vv, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(vv, zv) {
        var Pv;
        if (!this.deps.enabled()) return;
        const hv = gv[vv],
          Sv = null !== zv && void 0 !== zv ? zv : hv.pattern;
        if (null === Sv) return void console.warn("No vibration pattern for", vv);
        const ev = this.deps.now();
        ev - this.lastAnyAt < 40 && hv.priority < this.playingPriority || ev - (null !== (Pv = this.lastAt.get(vv)) && void 0 !== Pv ? Pv : -1 / 0) < hv.minGapMs || ev < this.playingUntil && hv.priority < this.playingPriority || (this.lastAt.set(vv, ev), this.lastAnyAt = ev, this.playingUntil = ev + Sv.reduce(((vv, zv) => vv + zv), 0), this.playingPriority = hv.priority, this.deps.vibrate(Sv))
      }
    }({
      vibrate: vv => {
        navigator.vibrate([...vv])
      },
      now: () => performance.now(),
      enabled: () => pv() && hv.c.get("isTouchScreen") && hv.c.get("clientEscMenuOptions").vibration && !(0, Sv.g)()
    })
  },
  8467: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => gv
    });
    var hv = Pv(8470),
      Sv = Pv(626),
      ev = Pv(108);

    function gv(vv) {
      var zv, Pv;
      if ((0, Sv.N)(vv)) return !0;
      const gv = null !== (zv = null === (Pv = ev.k[ev.o]) || void 0 === Pv ? void 0 : Pv.adConfig.showRewardedAds) && void 0 !== zv && zv;
      for (const Sv in vv) {
        const zv = vv[Sv];
        if (null !== zv && void 0 !== zv && zv.items)
          for (const vv in zv.items)
            if ((0, hv.k)(zv.items[vv], gv)) return !1
      }
      return !0
    }
  },
  8481: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv,
      f: () => hv
    });
    const hv = 100;

    function Sv(vv) {
      let {
        translationKeys: zv = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return vv.map((vv => {
        var Pv;
        return null !== (Pv = function(vv, zv) {
          if ("string" === typeof vv) return vv;
          const Pv = "str" in vv ? vv.str : vv;
          if ("string" === typeof Pv) return Pv;
          if ("entityName" in Pv) return Pv.entityName;
          if (zv && "translationKey" in Pv) return `{${Pv.translationKey}${void 0===Pv.params?"":` ${JSON.stringify(Pv.params)}`}}`;
          return null
        }(vv, zv)) && void 0 !== Pv ? Pv : " "
      })).join("")
    }
  },
  8501: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => lv,
      c: () => pv,
      f: () => dv
    });
    var hv = Pv(2160),
      Sv = Pv(1226),
      ev = Pv(2169);
    const gv = ",";

    function pv(vv) {
      if (!vv) return [];
      const zv = new Set,
        Pv = [];
      for (const hv of vv.split(gv)) {
        const vv = hv.trim();
        if ((0, ev.n)(vv) && !zv.has(vv) && (zv.add(vv), Pv.push(vv), Pv.length >= Sv.m)) break
      }
      return Pv
    }

    function dv(vv) {
      const zv = new Set,
        Pv = [];
      for (const hv of vv)
        if ((0, ev.n)(hv) && !zv.has(hv) && (zv.add(hv), Pv.push(hv), Pv.length >= Sv.m)) break;
      return Pv.join(gv)
    }

    function Nv() {
      return dv(ev.i)
    }

    function lv(vv) {
      var zv;
      return "emote" === vv ? Nv() : null !== (zv = Tv[vv][0]) && void 0 !== zv ? zv : Wv[vv]
    }
    const Tv = Sv.u.reduce(((vv, zv) => {
        const Pv = [];
        for (const ev in hv.i[zv]) {
          var Sv;
          "default" === (null === (Sv = (0, hv.o)(zv, ev)) || void 0 === Sv ? void 0 : Sv.cosmeticPack) && Pv.push(ev)
        }
        return vv[zv] = Pv, vv
      }), {}),
      Wv = Sv.u.reduce(((vv, zv) => (vv[zv] = Object.keys(hv.i[zv])[0], vv)), {})
  },
  8470: (vv, zv, Pv) => {
    function hv(vv, zv) {
      return !vv.hidden && (zv || !vv.isRewardedAd)
    }

    function Sv(vv) {
      return "object" === typeof vv ? vv.option : vv
    }

    function ev(vv, zv) {
      var Pv;
      if ("dropdown" === (null === (Pv = vv.userInput) || void 0 === Pv ? void 0 : Pv.type) && "object" === typeof vv.userInput.dropdownOptions[0]) {
        for (const Pv of vv.userInput.dropdownOptions)
          if (Sv(Pv) === zv) return "object" === typeof Pv ? Pv.cost : vv.cost;
        console.error("Didn't find matching option for dropdown item. Item:", vv, "input:", zv)
      }
      return vv.cost
    }

    function gv(vv, zv, Pv) {
      var hv;
      const Sv = null !== (hv = Pv.excludedPlayers) && void 0 !== hv ? hv : [zv];
      return vv.filter((vv => !Sv.includes(vv)))
    }
    Pv.d(zv, {
      d: () => ev,
      f: () => Sv,
      h: () => gv,
      k: () => hv
    })
  },
  8499: () => {}
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);
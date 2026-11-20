export const id = 150;
export const ids = [150];
export const modules = {
  8402: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Pb,
      c: () => gb,
      d: () => Bb
    });
    var kb = sb(64),
      Wb = sb(4282),
      ab = sb(1117),
      Tb = sb(1423),
      Ub = sb(26),
      Ib = sb(3194),
      Hb = sb(2144),
      fb = sb(1253),
      Mb = sb(8431),
      Xb = sb(1870),
      nb = sb(1912),
      mb = sb(1197),
      lb = sb(19),
      Qb = sb(1626),
      eb = sb(1033),
      Cb = sb.n(eb),
      Nb = sb(8406),
      Vb = sb(8414),
      Lb = sb(8421),
      ub = sb(8323),
      Yb = sb(8425),
      hb = (sb(8427), sb(1087));
    let Jb = null;

    function gb() {
      return null !== Jb
    }

    function Bb() {
      return "pad" === Jb
    }

    function tb() {
      return "inGame" === lb.d.get("gameState") && !(0, Qb.q)()
    }

    function yb(bb) {
      return (0, Vb.r)(bb, fb.j, Vb.f, Vb.g, Vb.k)
    }
    const Pb = (0, kb.memo)((function() {
      const {
        t: bb
      } = (0, mb.E)(), {
        userContext: cb
      } = (0, ab.c)(), [sb, lb] = (0, kb.useState)(null), [eb, gb] = (0, kb.useState)(null), Bb = (0, kb.useRef)(null), Pb = (0, kb.useCallback)((bb => {
        Bb.current = bb, gb(bb)
      }), []), Db = (0, kb.useRef)(0), Eb = (0, kb.useRef)(null), ib = (0, kb.useRef)({
        x: 0,
        y: 0
      }), [Ob, Gb] = (0, kb.useState)(0), Kb = (0, kb.useMemo)((() => function(bb) {
        const cb = [];
        for (let kb = 0; kb < fb.j; kb++) {
          var sb;
          cb.push(null !== (sb = bb[kb]) && void 0 !== sb ? sb : null)
        }
        return cb
      }((0, Mb.h)(cb.getPlayerCosmetics().emote))), [cb, Ob]);
      (0, nb.c)("cosmeticsUpdated", (bb => {
        bb.some((bb => bb.local && "emote" === bb.mk)) && Gb((bb => bb + 1))
      }));
      const Zb = (0, kb.useRef)(!1),
        zb = (0, kb.useCallback)((function(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === bb && (0, Lb.g)(), Zb.current = cb, ib.current = {
            x: 0,
            y: 0
          }, Pb(null), lb(bb)
        }), [Pb]),
        qb = (0, kb.useCallback)((() => {
          lb(null), Pb(null), ib.current = {
            x: 0,
            y: 0
          }
        }), [Pb]),
        db = (0, kb.useCallback)((bb => {
          if (Date.now() < Db.current) return;
          const cb = (0, Hb.h)(bb),
            sb = !!cb.holdUntilMove,
            kb = sb ? 600 : Math.ceil(1e3 * cb.animation.animation_length / Hb.d) + 200;
          Db.current = Date.now() + kb, Eb.current = bb, Xb.gameBridge.send("playEmote", bb), Xb.gameBridge.send("applyTemporaryThirdPerson", sb ? {} : {
            durationMs: kb
          })
        }), []);
      (0, Tb.f)("requestToggleEmoteWheel", (() => {
        null === sb ? tb() && zb("click") : qb()
      })), (0, Tb.f)("requestEmoteWheelHoldOpen", (() => {
        null === sb && tb() && zb((0, Nb.e)() ? "hold" : "click")
      })), (0, Tb.f)("requestEmoteWheelPadOpen", (bb => {
        null !== sb || !tb() || (0, ub.c)() || (0, Yb.q)() || zb("pad", bb)
      })), (0, Tb.f)("requestEmoteRepeatLast", (() => {
        if (null !== sb || !tb() || (0, ub.c)() || (0, Yb.q)()) return;
        const bb = Eb.current;
        null !== bb && Kb.includes(bb) ? db(bb) : zb("pad", !0)
      }));
      const Ab = () => {
        const bb = Bb.current,
          cb = null !== bb ? Kb[bb] : null;
        null !== cb && "pad" === sb && Date.now() < Db.current || (qb(), null !== cb && db(cb))
      };
      (0, Tb.f)("emoteWheelPadAim", (bb => {
        if ("pad" !== sb) return;
        const cb = (0, Vb.C)(bb, fb.j, Bb.current);
        Pb(null !== cb && null !== Kb[cb] ? cb : null)
      })), (0, Tb.f)("requestEmoteWheelPadCommit", (bb => {
        "pad" !== sb || bb && Zb.current || Ab()
      })), (0, Tb.f)("appManagerUpdated|activeInputDevice", (bb => {
        null !== sb && "pad" === sb !== ("gamepad" === bb) && qb()
      })), (0, kb.useLayoutEffect)((() => (Jb = sb, (0, Ib.w)("emoteWheel", "pad" === sb), Ub.j.QQ(Ib.k), () => {
        Jb = null, (0, Ib.w)("emoteWheel", !1), Ub.j.QQ(Ib.k)
      })), [sb]), (0, Tb.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === sb && Ab()
      })), (0, Tb.f)("requestEmoteWheelClose", (() => {
        null !== sb && qb()
      })), (0, Tb.f)("appManagerUpdated|gameState", (bb => {
        "inGame" !== bb && qb()
      }));
      const wb = () => {
        (0, Qb.q)() && qb()
      };
      if ((0, Tb.f)("appManagerUpdated|openEverythingMenuName", wb), (0, Tb.f)("appManagerUpdated|openInGameMenuName", wb), (0, Tb.f)("pointerLockUpdate", (bb => {
          bb || "hold" !== sb || qb()
        })), (0, kb.useEffect)((() => {
          if (null === sb) return;
          const bb = bb => {
            "Escape" === bb.key && (bb.stopImmediatePropagation(), bb.preventDefault(), qb())
          };
          return document.addEventListener("keydown", bb, !0), () => {
            document.removeEventListener("keydown", bb, !0)
          }
        }), [sb, qb]), (0, Wb.d)(!0, "click" === sb, "EmoteWheelOverlay"), (0, kb.useEffect)((() => {
          if ("hold" === sb) return Xb.gameBridge.send("holdEmoteWheel", !0), () => {
            Xb.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [sb]), (0, kb.useEffect)((() => {
          if ("hold" !== sb) return;
          const bb = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            cb = Vb.q * bb,
            kb = Vb.o * bb,
            Wb = bb => {
              let sb = ib.current.x + bb.movementX,
                Wb = ib.current.y + bb.movementY;
              const ab = Math.hypot(sb, Wb);
              if (ab > cb) {
                const bb = cb / ab;
                sb *= bb, Wb *= bb
              }
              ib.current = {
                x: sb,
                y: Wb
              }, Pb(function(bb, cb, sb, kb) {
                if (Math.hypot(bb, cb) < sb) return null;
                const Wb = (0, Vb.t)(bb, cb, fb.j);
                return null === kb[Wb] ? null : Wb
              }(sb, Wb, kb, Kb))
            };
          return document.addEventListener("mousemove", Wb), () => {
            document.removeEventListener("mousemove", Wb)
          }
        }), [sb, Kb, Pb]), null === sb) return null;
      const rb = "hold" === sb || "pad" === sb,
        ob = null !== eb ? Kb[eb] : null,
        Sb = null !== ob ? (0, Hb.h)(ob).displayName : bb("emotes:pickEmote");
      return (0, hb.jsx)("div", {
        className: Cb()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === sb
        }),
        onMouseDown: bb => {
          bb.target === bb.currentTarget && qb()
        },
        children: (0, hb.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * Vb.q + "rem",
            height: 2 * Vb.q + "rem"
          },
          children: [(0, hb.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${Vb.l} ${Vb.l}`,
            children: [Kb.map(((cb, sb) => {
              const kb = null !== cb,
                Wb = rb && sb === eb;
              return (0, hb.jsx)("path", {
                d: yb(sb),
                className: Cb()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: Wb,
                  EmoteWheelWedgeDisabled: !kb
                }),
                onClick: bb => {
                  bb.stopPropagation(), null !== cb && (bb => {
                    qb(), db(bb)
                  })(cb)
                },
                "aria-label": null !== cb ? (0, Hb.h)(cb).displayName : bb("emotes:emptySlot")
              }, sb)
            })), (0, hb.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: Vb.f,
              cy: Vb.f,
              r: Vb.k
            }), (0, hb.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: Vb.f,
              cy: Vb.f,
              r: Vb.g
            }), rb && null !== eb && (0, hb.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: yb(eb)
            })]
          }), Kb.map(((bb, cb) => {
            const sb = null !== bb,
              kb = rb && cb === eb,
              Wb = (0, Vb.w)(cb, fb.j),
              ab = Vb.b * Math.cos(Wb),
              Tb = Vb.b * Math.sin(Wb);
            return (0, hb.jsx)("div", {
              className: Cb()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: kb,
                EmoteWheelSlotIconDisabled: !sb
              }),
              style: {
                left: `calc(50% + ${ab}rem)`,
                top: `calc(50% + ${Tb}rem)`,
                backgroundImage: sb ? `url(/textures/charSkins/previews/emote_${bb}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, cb)
          })), (0, hb.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: Sb
          })]
        })
      })
    }))
  },
  8394: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Mb,
      e: () => mb,
      f: () => lb,
      h: () => nb,
      l: () => Xb
    });
    var kb = sb(64),
      Wb = sb(8396),
      ab = sb(26),
      Tb = sb(1870),
      Ub = sb(37),
      Ib = sb(1269),
      Hb = sb(1895);
    const fb = 50;
    const Mb = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = bb => {
          if (0 === this.listeners.size) {
            var cb, sb;
            this.state = {
              ...this.state,
              channel: null !== (cb = null === (sb = Hb.e.get("chatChannels")) || void 0 === sb ? void 0 : sb[0]) && void 0 !== cb ? cb : null
            };
            const bb = ab.j.subscribe("reportPlayer", (bb => {
              let {
                playerEId: cb
              } = bb;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, cb]
              })
            }));
            this.stopListening = [Tb.gameBridge.subscribe("chatReceived", (bb => {
              let {
                serverChatMsgId: cb,
                content: sb,
                author: kb
              } = bb;
              this.addMessage(cb, sb, kb)
            })), () => {
              ab.j.unsubscribe(bb)
            }, Hb.e.subscribe("chatChannels", (bb => {
              var cb;
              this.setState({
                ...this.state,
                channel: null !== (cb = null === bb || void 0 === bb ? void 0 : bb[0]) && void 0 !== cb ? cb : null
              })
            }))]
          }
          return this.listeners.add(bb), () => {
            if (this.listeners.delete(bb), 0 === this.listeners.size) {
              for (const bb of this.stopListening) bb();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const kb = {
          serverChatMsgId: bb,
          content: cb,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: sb
        };
        this.setState({
          ...this.state,
          messages: [kb, ...this.state.messages].slice(0, Wb.f)
        })
      }
      selectNextChannel() {
        const bb = Hb.e.get("chatChannels");
        if (bb) {
          const cb = bb.findIndex((bb => {
            var cb;
            return bb.channelName === (null === (cb = this.state.channel) || void 0 === cb ? void 0 : cb.channelName)
          }));
          this.setState({
            ...this.state,
            channel: bb[(cb + 1) % bb.length]
          })
        }
      }
      setState(bb) {
        this.state = bb;
        for (const cb of this.listeners) cb()
      }
    };

    function Xb() {
      const [bb, cb] = (0, kb.useState)(Mb.getState);
      return (0, kb.useEffect)((() => {
        const bb = Mb.subscribe((() => {
          cb(Mb.getState())
        }));
        return cb(Mb.getState()), bb
      }), []), bb
    }

    function nb(bb) {
      var cb, sb;
      if (bb.startsWith("/report")) {
        var kb;
        const cb = null !== (kb = bb.replace("/report", "").trim().split(" ")[0]) && void 0 !== kb ? kb : "";
        if ("" === cb) return void Mb.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const sb = Tb.gameBridge.latest("players"),
          Wb = Tb.gameBridge.latest("hiddenPlayerNames"),
          Ub = bb => {
            var kb, ab;
            const Tb = null !== (kb = null === (ab = sb.byId[bb]) || void 0 === ab ? void 0 : ab.name) && void 0 !== kb ? kb : null;
            return null !== Tb && (Tb === cb || (0, Ib.c)(Tb, Wb) === cb)
          };
        if (null !== sb.localId && Ub(sb.localId)) return void Mb.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const bb of sb.ids)
          if (Ub(bb)) return ab.j.QQ("OpenReportMenu", {
            playerEId: bb,
            playerName: sb.byId[bb].name,
            jT: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        Mb.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      Tb.gameBridge.send("sendChatMessage", {
          jT: bb,
          channelName: null !== (cb = null === (sb = Mb.getState().channel) || void 0 === sb ? void 0 : sb.channelName) && void 0 !== cb ? cb : null
        }),
        function(bb) {
          var cb;
          const sb = null !== (cb = Ub.h.getItem("recentlySentChatMsgs")) && void 0 !== cb ? cb : [];
          sb.push(bb), sb.length > fb && sb.shift();
          Ub.h.setItem("recentlySentChatMsgs", sb)
        }(bb)
    }

    function mb() {
      var bb;
      return null !== (bb = Ub.h.getItem("recentlySentChatMsgs")) && void 0 !== bb ? bb : []
    }

    function lb(bb) {
      var cb;
      let sb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const kb = null !== (cb = Ub.h.getItem("recentlySentChatMsgs")) && void 0 !== cb ? cb : [],
        Wb = kb.length + 1,
        ab = sb ? (bb % Wb + Wb) % Wb : Math.min(kb.length, Math.max(0, bb));
      return {
        stepsBack: ab,
        text: 0 === ab ? "" : kb[kb.length - ab]
      }
    }
  },
  8352: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Tb,
      f: () => ab
    });
    var kb = sb(1927);
    const Wb = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      ab = bb => "string" === typeof bb.icon && "" !== bb.icon && "string" === typeof bb.keycode && Wb.test(bb.keycode),
      Tb = bb => "Space" === bb ? "_" : kb.l[bb]
  },
  8406: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb
    });
    var kb = sb(19);

    function Wb() {
      return !kb.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8496: (bb, cb, sb) => {
    function kb(bb) {
      return {
        x: (bb.left + bb.right) / 2,
        y: (bb.top + bb.bottom) / 2
      }
    }

    function Wb(bb) {
      return 0 === bb.length ? null : bb.reduce(((bb, cb) => ({
        left: Math.min(bb.left, cb.left),
        top: Math.min(bb.top, cb.top),
        right: Math.max(bb.right, cb.right),
        bottom: Math.max(bb.bottom, cb.bottom)
      })))
    }

    function ab(bb, cb) {
      const sb = Math.max(0, (cb - (bb.right - bb.left)) / 2),
        kb = Math.max(0, (cb - (bb.bottom - bb.top)) / 2);
      return {
        left: bb.left - sb,
        top: bb.top - kb,
        right: bb.right + sb,
        bottom: bb.bottom + kb
      }
    }

    function Tb(bb, cb) {
      return cb.x >= bb.left && cb.x <= bb.right && cb.y >= bb.top && cb.y <= bb.bottom
    }

    function Ub(bb, cb, sb) {
      let Wb = null,
        Ub = 1 / 0;
      for (const {
          id: kb,
          box: ab
        }
        of cb) {
        const cb = (ab.right - ab.left) * (ab.bottom - ab.top);
        Tb(ab, bb) && cb < Ub && (Ub = cb, Wb = kb)
      }
      if (null !== Wb) return Wb;
      let Ib = 1 / 0;
      for (const {
          id: Hb,
          box: fb
        }
        of cb) {
        if (!Tb(ab(fb, sb), bb)) continue;
        const cb = kb(fb),
          Ub = Math.hypot(bb.x - cb.x, bb.y - cb.y);
        Ub < Ib && (Ib = Ub, Wb = Hb)
      }
      return Wb
    }

    function Ib(bb, cb, sb) {
      return {
        left: sb.left,
        top: sb.top,
        right: bb - sb.right,
        bottom: cb - sb.bottom
      }
    }

    function Hb(bb, cb, sb, kb) {
      const Wb = (bb, cb, sb) => Math.max(Math.min(cb, 0), Math.min(Math.max(sb, 0), bb));
      return {
        x: Wb(cb, kb.left - bb.left, kb.right - bb.right),
        y: Wb(sb, kb.top - bb.top, kb.bottom - bb.bottom)
      }
    }

    function fb(bb, cb, sb, kb, Wb) {
      const ab = bb.dx * kb + cb,
        Tb = bb.dy * Wb + sb,
        Ub = bb => Math.max(-1, Math.min(1, bb));
      return {
        dx: Ub(ab / kb),
        dy: Ub(Tb / Wb)
      }
    }

    function Mb(bb, cb, sb, kb) {
      return cb <= 0 || sb <= 0 ? 1 : Math.max(.05, Math.min(1, bb / cb, kb / sb))
    }

    function Xb(bb, cb, sb) {
      return Math.min(bb.right, cb.right) - Math.max(bb.left, cb.left) > sb && Math.min(bb.bottom, cb.bottom) - Math.max(bb.top, cb.top) > sb
    }

    function nb(bb, cb) {
      const sb = (bb, cb, sb, kb) => cb - bb > kb - sb ? sb - bb > cb - kb ? kb - cb : sb - bb : bb < sb ? sb - bb : cb > kb ? kb - cb : 0;
      return {
        x: sb(bb.left, bb.right, cb.left, cb.right),
        y: sb(bb.top, bb.bottom, cb.top, cb.bottom)
      }
    }

    function mb(bb, cb) {
      let {
        avoid: sb = null,
        bounds: kb = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, Wb = 0, ab = 1 / 0;
      return bb.forEach(((bb, Tb) => {
        const Ub = cb.filter((cb => Xb(bb, cb, 0))).length,
          Ib = null !== kb && (bb.left < kb.left || bb.top < kb.top || bb.right > kb.right || bb.bottom > kb.bottom),
          Hb = Ub + (sb && Xb(bb, sb, 0) ? 1e3 : 0) + (Ib ? 1e6 : 0);
        Hb < ab && (Wb = Tb, ab = Hb)
      })), Wb
    }
    sb.d(cb, {
      B: () => Ib,
      E: () => nb,
      F: () => Wb,
      d: () => kb,
      f: () => Tb,
      j: () => Xb,
      l: () => Hb,
      n: () => ab,
      q: () => mb,
      t: () => fb,
      x: () => Ub,
      y: () => Mb
    })
  },
  8414: (bb, cb, sb) => {
    sb.d(cb, {
      A: () => Xb,
      C: () => nb,
      b: () => ab,
      f: () => Ub,
      g: () => Hb,
      k: () => Ib,
      l: () => Tb,
      o: () => Wb,
      q: () => kb,
      r: () => mb,
      t: () => Mb,
      w: () => fb
    });
    const kb = 14,
      Wb = 6,
      ab = (kb + Wb) / 2,
      Tb = 200,
      Ub = Tb / 2,
      Ib = Tb / 2 - 1,
      Hb = Wb / kb * (Tb / 2),
      fb = (bb, cb) => -Math.PI / 2 + 2 * bb * Math.PI / cb,
      Mb = (bb, cb, sb) => {
        const kb = 2 * Math.PI / sb;
        return (Math.round((Math.atan2(cb, bb) + Math.PI / 2) / kb) % sb + sb) % sb
      },
      Xb = .5,
      nb = (bb, cb, sb) => Math.hypot(bb.x, bb.y) < Xb ? sb : Mb(bb.x, bb.y, cb),
      mb = (bb, cb, sb, kb, Wb) => {
        const ab = Math.PI / cb,
          Tb = fb(bb, cb),
          Ub = Tb - ab,
          Ib = Tb + ab,
          Hb = (bb, cb) => `${sb+bb*Math.cos(cb)} ${sb+bb*Math.sin(cb)}`;
        return [`M ${Hb(kb,Ub)}`, `L ${Hb(Wb,Ub)}`, `A ${Wb} ${Wb} 0 0 1 ${Hb(Wb,Ib)}`, `L ${Hb(kb,Ib)}`, `A ${kb} ${kb} 0 0 0 ${Hb(kb,Ub)}`, "Z"].join(" ")
      }
  },
  8451: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Tb
    });
    var kb = sb(64),
      Wb = sb(8383),
      ab = sb(2337);

    function Tb() {
      const bb = (0, ab.d)("shopInfo"),
        [, cb] = (0, kb.useReducer)((bb => bb + 1), 0);
      return (0, ab.c)("shopInfo", cb), !(0, Wb.d)(bb)
    }
  },
  8347: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => ab,
      e: () => Tb,
      i: () => Ub,
      m: () => Wb
    });
    var kb = sb(8352);
    const Wb = bb => {
        const cb = [];
        bb.holdingGun && cb.push({
          kind: "reload"
        }), bb.touchscreenActionButton && cb.push({
          kind: "touchButton",
          label: bb.touchscreenActionButton
        });
        for (const ab of null !== (sb = null === (Wb = bb.customButtons) || void 0 === Wb ? void 0 : Wb.filter(kb.f)) && void 0 !== sb ? sb : []) {
          var sb, Wb;
          cb.push({
            kind: "customButton",
            id: ab.id,
            icon: ab.icon,
            description: ab.description
          })
        }
        return cb
      },
      ab = bb => bb.length >= 2,
      Tb = bb => "specialAction" !== bb.kind,
      Ub = (bb, cb) => {
        if (null === bb || null === cb) return bb === cb;
        if (bb.kind !== cb.kind) return !1;
        switch (bb.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return bb.action === cb.action;
          case "customButton":
            return bb.id === cb.id && bb.icon === cb.icon;
          case "touchButton":
            return bb.label === cb.label
        }
      }
  },
  8345: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => fb,
      e: () => nb,
      h: () => Mb,
      l: () => mb
    });
    var kb = sb(64),
      Wb = sb(26),
      ab = sb(1423),
      Tb = sb(8347),
      Ub = sb(8359);
    let Ib = null;
    const Hb = () => Ib,
      fb = bb => {
        (0, Tb.i)(Ib, bb) || (Ib = bb, Wb.j.QQ(Ub.i, Ib))
      },
      Mb = () => {
        const [bb, cb] = (0, kb.useState)(Hb);
        return (0, ab.f)(Ub.i, cb), bb
      };
    let Xb = !1;
    const nb = bb => {
        bb !== Xb && (Xb = bb, Wb.j.QQ(Ub.l, bb))
      },
      mb = () => {
        const [bb, cb] = (0, kb.useState)(Xb);
        return (0, ab.f)(Ub.l, cb), bb
      }
  },
  8359: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      i: () => kb,
      l: () => Wb,
      n: () => Ub,
      q: () => Ib,
      s: () => Hb,
      t: () => Tb
    });
    const kb = "controllerActionHintChanged",
      Wb = "controllerActionWheelHintChanged",
      ab = "controllerOpenChat",
      Tb = "controllerSneakToggledChanged",
      Ub = "controllerAttackLatchedChanged",
      Ib = "controllerDropStackHoldChanged",
      Hb = "controllerPickBlockHintChanged"
  },
  8301: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Tb,
      c: () => ab,
      e: () => Ib,
      g: () => Ub
    });
    var kb = sb(1423),
      Wb = sb(1381);
    const ab = "controllerInventoryCursorChanged",
      Tb = {
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
      Ub = () => {
        var bb, cb;
        return (0, kb.h)(ab, null !== (bb = null === (cb = (0, Wb.g)()) || void 0 === cb ? void 0 : cb.getInventoryCursorState()) && void 0 !== bb ? bb : Tb)
      },
      Ib = () => {
        var bb, cb;
        return null !== (bb = null === (cb = (0, Wb.g)()) || void 0 === cb ? void 0 : cb.isPadSteppingSlots()) && void 0 !== bb && bb
      }
  },
  8292: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Xb,
      g: () => Ub,
      h: () => Ib,
      i: () => Tb,
      l: () => ab,
      n: () => fb,
      r: () => Mb
    });
    let kb = null;
    const Wb = new Set,
      ab = bb => (kb = bb, () => {
        if (kb === bb) {
          kb = null;
          for (const bb of Wb) bb()
        }
      }),
      Tb = bb => (Wb.add(bb), () => {
        Wb.delete(bb)
      }),
      Ub = () => kb,
      Ib = () => null !== kb;
    let Hb = null;
    const fb = bb => {
        Hb = bb
      },
      Mb = () => {
        const bb = Hb;
        return Hb = null, bb
      },
      Xb = (bb, cb) => {
        var sb, kb;
        return null !== (sb = null !== (kb = bb.find((bb => bb.element === cb))) && void 0 !== kb ? kb : bb.find((bb => bb.element.contains(cb)))) && void 0 !== sb ? sb : null
      }
  },
  8304: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      f: () => Tb
    });
    var kb = sb(64);
    const Wb = new WeakMap,
      ab = bb => {
        var cb, sb;
        return null !== (cb = null === (sb = Wb.get(bb)) || void 0 === sb ? void 0 : sb.current) && void 0 !== cb ? cb : null
      },
      Tb = (bb, cb) => {
        const sb = (0, kb.useRef)(cb);
        sb.current = cb;
        const ab = (0, kb.useRef)(null);
        (0, kb.useEffect)((() => {
          const cb = bb.current,
            kb = ab.current;
          cb !== kb && (kb && Wb.get(kb) === sb && Wb.delete(kb), ab.current = cb, cb && Wb.set(cb, sb))
        })), (0, kb.useEffect)((() => () => {
          const bb = ab.current;
          bb && Wb.get(bb) === sb && Wb.delete(bb), ab.current = null
        }), [])
      }
  },
  8434: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ub,
      c: () => Hb,
      e: () => Mb,
      h: () => fb,
      l: () => Ib,
      p: () => nb
    });
    var kb = sb(26),
      Wb = sb(1943),
      ab = sb(1381),
      Tb = sb(1371);
    const Ub = bb => {
        var cb, sb;
        return (0, Tb.g)() && null !== (cb = null === (sb = (0, ab.g)()) || void 0 === sb ? void 0 : sb.getGlyphForNoaAction(bb)) && void 0 !== cb ? cb : null
      },
      Ib = "controllerGlyph:",
      Hb = bb => {
        var cb, sb;
        return null !== (cb = null === (sb = (0, ab.g)()) || void 0 === sb ? void 0 : sb.getPadGlyphIconName(bb)) && void 0 !== cb ? cb : `${Ib}xbox/${bb}`
      },
      fb = bb => bb.startsWith(Ib),
      Mb = bb => {
        var cb, sb;
        return fb(bb) && null !== (cb = null === (sb = (0, ab.g)()) || void 0 === sb ? void 0 : sb.getPadGlyphIconUrl(bb)) && void 0 !== cb ? cb : null
      },
      Xb = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", Tb.d, Wb.e, Wb.b],
      nb = bb => {
        const cb = Xb.map((cb => kb.j.subscribe(cb, bb)));
        return () => {
          for (const bb of cb) kb.j.unsubscribe(bb)
        }
      }
  },
  8288: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb,
      h: () => kb
    });
    const kb = "controllerOpenKeyboard",
      Wb = "controllerKeyboardVisible"
  },
  8330: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      e: () => Wb
    });
    let kb = null;
    const Wb = function(bb) {
        const cb = {
          cycle: bb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return kb = cb, () => {
          kb === cb && (kb = null)
        }
      },
      ab = () => {
        var bb;
        return null !== (bb = kb) && void 0 !== bb && bb.canCycle() ? kb.cycle : null
      }
  },
  8425: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb,
      i: () => Tb,
      j: () => ab,
      l: () => kb,
      n: () => Ub,
      q: () => Hb,
      r: () => fb
    });
    const kb = "controllerActionWheelOpen",
      Wb = "controllerActionWheelAim",
      ab = "controllerActionWheelCommit",
      Tb = "controllerActionWheelClose",
      Ub = "controllerActionWheelPick";
    let Ib = !1;
    const Hb = () => Ib,
      fb = bb => {
        Ib = bb
      }
  },
  8421: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      g: () => Wb
    });
    let kb = 0;
    const Wb = () => {
        kb++
      },
      ab = () => kb
  },
  8323: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ib,
      f: () => Wb,
      h: () => Tb,
      l: () => ab,
      p: () => kb,
      r: () => Hb
    });
    const kb = "controllerQuickChatWheelOpen",
      Wb = "controllerQuickChatWheelAim",
      ab = "controllerQuickChatWheelCommit",
      Tb = "controllerQuickChatWheelClose";
    let Ub = !1;
    const Ib = () => Ub,
      Hb = bb => {
        Ub = bb
      }
  },
  8487: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ub,
      f: () => Ib
    });
    var kb = sb(19),
      Wb = sb(1312),
      ab = sb(117);
    const Tb = {
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

    function Ub() {
      return (0, ab.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Ib = new class {
      constructor(bb) {
        this.deps = bb, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(bb, cb) {
        var sb;
        if (!this.deps.enabled()) return;
        const kb = Tb[bb],
          Wb = null !== cb && void 0 !== cb ? cb : kb.pattern;
        if (null === Wb) return void console.warn("No vibration pattern for", bb);
        const ab = this.deps.now();
        ab - this.lastAnyAt < 40 && kb.priority < this.playingPriority || ab - (null !== (sb = this.lastAt.get(bb)) && void 0 !== sb ? sb : -1 / 0) < kb.minGapMs || ab < this.playingUntil && kb.priority < this.playingPriority || (this.lastAt.set(bb, ab), this.lastAnyAt = ab, this.playingUntil = ab + Wb.reduce(((bb, cb) => bb + cb), 0), this.playingPriority = kb.priority, this.deps.vibrate(Wb))
      }
    }({
      vibrate: bb => {
        navigator.vibrate([...bb])
      },
      now: () => performance.now(),
      enabled: () => Ub() && kb.d.get("isTouchScreen") && kb.d.get("clientEscMenuOptions").vibration && !(0, Wb.h)()
    })
  },
  8383: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb
    });
    var kb = sb(8389),
      Wb = sb(628),
      ab = sb(167);

    function Tb(bb) {
      var cb, sb;
      if ((0, Wb.L)(bb)) return !0;
      const Tb = null !== (cb = null === (sb = ab.n[ab.r]) || void 0 === sb ? void 0 : sb.adConfig.showRewardedAds) && void 0 !== cb && cb;
      for (const Wb in bb) {
        const cb = bb[Wb];
        if (null !== cb && void 0 !== cb && cb.items)
          for (const bb in cb.items)
            if ((0, kb.o)(cb.items[bb], Tb)) return !1
      }
      return !0
    }
  },
  8396: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb,
      f: () => kb
    });
    const kb = 100;

    function Wb(bb) {
      let {
        translationKeys: cb = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return bb.map((bb => {
        var sb;
        return null !== (sb = function(bb, cb) {
          if ("string" === typeof bb) return bb;
          const sb = "str" in bb ? bb.str : bb;
          if ("string" === typeof sb) return sb;
          if ("entityName" in sb) return sb.entityName;
          if (cb && "translationKey" in sb) return `{${sb.translationKey}${void 0===sb.params?"":` ${JSON.stringify(sb.params)}`}}`;
          return null
        }(bb, cb)) && void 0 !== sb ? sb : " "
      })).join("")
    }
  },
  8431: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => fb,
      h: () => Ub,
      l: () => Ib
    });
    var kb = sb(2141),
      Wb = sb(1253),
      ab = sb(2144);
    const Tb = ",";

    function Ub(bb) {
      if (!bb) return [];
      const cb = new Set,
        sb = [];
      for (const kb of bb.split(Tb)) {
        const bb = kb.trim();
        if ((0, ab.k)(bb) && !cb.has(bb) && (cb.add(bb), sb.push(bb), sb.length >= Wb.j)) break
      }
      return sb
    }

    function Ib(bb) {
      const cb = new Set,
        sb = [];
      for (const kb of bb)
        if ((0, ab.k)(kb) && !cb.has(kb) && (cb.add(kb), sb.push(kb), sb.length >= Wb.j)) break;
      return sb.join(Tb)
    }

    function Hb() {
      return Ib(ab.f)
    }

    function fb(bb) {
      var cb;
      return "emote" === bb ? Hb() : null !== (cb = Mb[bb][0]) && void 0 !== cb ? cb : Xb[bb]
    }
    const Mb = Wb.p.reduce(((bb, cb) => {
        const sb = [];
        for (const ab in kb.d[cb]) {
          var Wb;
          "default" === (null === (Wb = (0, kb.i)(cb, ab)) || void 0 === Wb ? void 0 : Wb.cosmeticPack) && sb.push(ab)
        }
        return bb[cb] = sb, bb
      }), {}),
      Xb = Wb.p.reduce(((bb, cb) => (bb[cb] = Object.keys(kb.d[cb])[0], bb)), {})
  },
  8389: (bb, cb, sb) => {
    function kb(bb, cb) {
      return !bb.hidden && (cb || !bb.isRewardedAd)
    }

    function Wb(bb) {
      return "object" === typeof bb ? bb.option : bb
    }

    function ab(bb, cb) {
      var sb;
      if ("dropdown" === (null === (sb = bb.userInput) || void 0 === sb ? void 0 : sb.type) && "object" === typeof bb.userInput.dropdownOptions[0]) {
        for (const sb of bb.userInput.dropdownOptions)
          if (Wb(sb) === cb) return "object" === typeof sb ? sb.cost : bb.cost;
        console.error("Didn't find matching option for dropdown item. Item:", bb, "input:", cb)
      }
      return bb.cost
    }

    function Tb(bb, cb, sb) {
      var kb;
      const Wb = null !== (kb = sb.excludedPlayers) && void 0 !== kb ? kb : [cb];
      return bb.filter((bb => !Wb.includes(bb)))
    }
    sb.d(cb, {
      e: () => ab,
      g: () => Wb,
      k: () => Tb,
      o: () => kb
    })
  },
  8427: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
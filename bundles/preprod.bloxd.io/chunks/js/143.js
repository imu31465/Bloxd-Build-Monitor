export const id = 143;
export const ids = [143];
export const modules = {
  7923: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Yy,
      f: () => Ry,
      g: () => vb
    });
    var Uy = Wy(55),
      hy = Wy(3742),
      fy = Wy(980),
      Zy = Wy(1268),
      cb = Wy(23),
      Py = Wy(2723),
      oy = Wy(1849),
      By = Wy(1102),
      Ky = Wy(7955),
      ey = Wy(1572),
      qb = Wy(1612),
      sy = Wy(1042),
      Sy = Wy(19),
      Ey = Wy(1458),
      ly = Wy(898),
      mb = Wy.n(ly),
      Cy = Wy(7929),
      Ty = Wy(7932),
      Vy = Wy(7938),
      Jy = Wy(7905),
      gb = Wy(7946),
      Gy = (Wy(7952), Wy(952));
    let Oy = null;

    function Ry() {
      return null !== Oy
    }

    function vb() {
      return "pad" === Oy
    }

    function ib() {
      return "inGame" === Sy.d.get("gameState") && !(0, Ey.n)()
    }

    function My(yb) {
      return (0, Ty.l)(yb, By.o, Ty.d, Ty.e, Ty.f)
    }
    const Yy = (0, Uy.memo)((function() {
      const {
        t: yb
      } = (0, sy.D)(), {
        userContext: bb
      } = (0, fy.c)(), [Wy, Sy] = (0, Uy.useState)(null), [ly, Ry] = (0, Uy.useState)(null), vb = (0, Uy.useRef)(null), Yy = (0, Uy.useCallback)((yb => {
        vb.current = yb, Ry(yb)
      }), []), Xy = (0, Uy.useRef)(0), ny = (0, Uy.useRef)(null), uy = (0, Uy.useRef)({
        x: 0,
        y: 0
      }), [rb, Hy] = (0, Uy.useState)(0), ab = (0, Uy.useMemo)((() => function(yb) {
        const bb = [];
        for (let Uy = 0; Uy < By.o; Uy++) {
          var Wy;
          bb.push(null !== (Wy = yb[Uy]) && void 0 !== Wy ? Wy : null)
        }
        return bb
      }((0, Ky.g)(bb.getPlayerCosmetics().emote))), [bb, rb]);
      (0, qb.e)("cosmeticsUpdated", (yb => {
        yb.some((yb => yb.local && "emote" === yb.Kl)) && Hy((yb => yb + 1))
      }));
      const Fy = (0, Uy.useRef)(!1),
        py = (0, Uy.useCallback)((function(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === yb && (0, Vy.e)(), Fy.current = bb, uy.current = {
            x: 0,
            y: 0
          }, Yy(null), Sy(yb)
        }), [Yy]),
        Ly = (0, Uy.useCallback)((() => {
          Sy(null), Yy(null), uy.current = {
            x: 0,
            y: 0
          }
        }), [Yy]),
        Qy = (0, Uy.useCallback)((yb => {
          if (Date.now() < Xy.current) return;
          const bb = (0, oy.f)(yb),
            Wy = !!bb.holdUntilMove,
            Uy = Wy ? 600 : Math.ceil(1e3 * bb.animation.animation_length / oy.c) + 200;
          Xy.current = Date.now() + Uy, ny.current = yb, ey.gameBridge.send("playEmote", yb), ey.gameBridge.send("applyTemporaryThirdPerson", Wy ? {} : {
            durationMs: Uy
          })
        }), []);
      (0, Zy.i)("requestToggleEmoteWheel", (() => {
        null === Wy ? ib() && py("click") : Ly()
      })), (0, Zy.i)("requestEmoteWheelHoldOpen", (() => {
        null === Wy && ib() && py((0, Cy.d)() ? "hold" : "click")
      })), (0, Zy.i)("requestEmoteWheelPadOpen", (yb => {
        null !== Wy || !ib() || (0, Jy.b)() || (0, gb.p)() || py("pad", yb)
      })), (0, Zy.i)("requestEmoteRepeatLast", (() => {
        if (null !== Wy || !ib() || (0, Jy.b)() || (0, gb.p)()) return;
        const yb = ny.current;
        null !== yb && ab.includes(yb) ? Qy(yb) : py("pad", !0)
      }));
      const jb = () => {
        const yb = vb.current,
          bb = null !== yb ? ab[yb] : null;
        null !== bb && "pad" === Wy && Date.now() < Xy.current || (Ly(), null !== bb && Qy(bb))
      };
      (0, Zy.i)("emoteWheelPadAim", (yb => {
        if ("pad" !== Wy) return;
        const bb = (0, Ty.x)(yb, By.o, vb.current);
        Yy(null !== bb && null !== ab[bb] ? bb : null)
      })), (0, Zy.i)("requestEmoteWheelPadCommit", (yb => {
        "pad" !== Wy || yb && Fy.current || jb()
      })), (0, Zy.i)("appManagerUpdated|activeInputDevice", (yb => {
        null !== Wy && "pad" === Wy !== ("gamepad" === yb) && Ly()
      })), (0, Uy.useLayoutEffect)((() => (Oy = Wy, (0, Py.s)("emoteWheel", "pad" === Wy), cb.g.EZ(Py.n), () => {
        Oy = null, (0, Py.s)("emoteWheel", !1), cb.g.EZ(Py.n)
      })), [Wy]), (0, Zy.i)("requestEmoteWheelHoldRelease", (() => {
        "hold" === Wy && jb()
      })), (0, Zy.i)("requestEmoteWheelClose", (() => {
        null !== Wy && Ly()
      })), (0, Zy.i)("appManagerUpdated|gameState", (yb => {
        "inGame" !== yb && Ly()
      }));
      const Dy = () => {
        (0, Ey.n)() && Ly()
      };
      if ((0, Zy.i)("appManagerUpdated|openEverythingMenuName", Dy), (0, Zy.i)("appManagerUpdated|openInGameMenuName", Dy), (0, Zy.i)("pointerLockUpdate", (yb => {
          yb || "hold" !== Wy || Ly()
        })), (0, Uy.useEffect)((() => {
          if (null === Wy) return;
          const yb = yb => {
            "Escape" === yb.key && (yb.stopImmediatePropagation(), yb.preventDefault(), Ly())
          };
          return document.addEventListener("keydown", yb, !0), () => {
            document.removeEventListener("keydown", yb, !0)
          }
        }), [Wy, Ly]), (0, hy.b)(!0, "click" === Wy, "EmoteWheelOverlay"), (0, Uy.useEffect)((() => {
          if ("hold" === Wy) return ey.gameBridge.send("holdEmoteWheel", !0), () => {
            ey.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [Wy]), (0, Uy.useEffect)((() => {
          if ("hold" !== Wy) return;
          const yb = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            bb = Ty.k * yb,
            Uy = Ty.h * yb,
            hy = yb => {
              let Wy = uy.current.x + yb.movementX,
                hy = uy.current.y + yb.movementY;
              const fy = Math.hypot(Wy, hy);
              if (fy > bb) {
                const yb = bb / fy;
                Wy *= yb, hy *= yb
              }
              uy.current = {
                x: Wy,
                y: hy
              }, Yy(function(yb, bb, Wy, Uy) {
                if (Math.hypot(yb, bb) < Wy) return null;
                const hy = (0, Ty.o)(yb, bb, By.o);
                return null === Uy[hy] ? null : hy
              }(Wy, hy, Uy, ab))
            };
          return document.addEventListener("mousemove", hy), () => {
            document.removeEventListener("mousemove", hy)
          }
        }), [Wy, ab, Yy]), null === Wy) return null;
      const tb = "hold" === Wy || "pad" === Wy,
        wy = null !== ly ? ab[ly] : null,
        kb = null !== wy ? (0, oy.f)(wy).displayName : yb("emotes:pickEmote");
      return (0, Gy.jsx)("div", {
        className: mb()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === Wy
        }),
        onMouseDown: yb => {
          yb.target === yb.currentTarget && Ly()
        },
        children: (0, Gy.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * Ty.k + "rem",
            height: 2 * Ty.k + "rem"
          },
          children: [(0, Gy.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${Ty.g} ${Ty.g}`,
            children: [ab.map(((bb, Wy) => {
              const Uy = null !== bb,
                hy = tb && Wy === ly;
              return (0, Gy.jsx)("path", {
                d: My(Wy),
                className: mb()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: hy,
                  EmoteWheelWedgeDisabled: !Uy
                }),
                onClick: yb => {
                  yb.stopPropagation(), null !== bb && (yb => {
                    Ly(), Qy(yb)
                  })(bb)
                },
                "aria-label": null !== bb ? (0, oy.f)(bb).displayName : yb("emotes:emptySlot")
              }, Wy)
            })), (0, Gy.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: Ty.d,
              cy: Ty.d,
              r: Ty.f
            }), (0, Gy.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: Ty.d,
              cy: Ty.d,
              r: Ty.e
            }), tb && null !== ly && (0, Gy.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: My(ly)
            })]
          }), ab.map(((yb, bb) => {
            const Wy = null !== yb,
              Uy = tb && bb === ly,
              hy = (0, Ty.q)(bb, By.o),
              fy = Ty.b * Math.cos(hy),
              Zy = Ty.b * Math.sin(hy);
            return (0, Gy.jsx)("div", {
              className: mb()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: Uy,
                EmoteWheelSlotIconDisabled: !Wy
              }),
              style: {
                left: `calc(50% + ${fy}rem)`,
                top: `calc(50% + ${Zy}rem)`,
                backgroundImage: Wy ? `url(/textures/charSkins/previews/emote_${yb}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, bb)
          })), (0, Gy.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: kb
          })]
        })
      })
    }))
  },
  7915: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => ey,
      f: () => Sy,
      g: () => Ey,
      k: () => sy,
      n: () => qb
    });
    var Uy = Wy(55),
      hy = Wy(7918),
      fy = Wy(23),
      Zy = Wy(1572),
      cb = Wy(586),
      Py = Wy(33),
      oy = Wy(1122),
      By = Wy(1595);
    const Ky = 50;
    const ey = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = yb => {
          if (0 === this.listeners.size) {
            var bb, Wy;
            this.state = {
              ...this.state,
              channel: null !== (bb = null === (Wy = By.c.get("chatChannels")) || void 0 === Wy ? void 0 : Wy[0]) && void 0 !== bb ? bb : null
            };
            const yb = fy.g.subscribe("reportPlayer", (yb => {
              let {
                playerEId: bb
              } = yb;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, bb]
              })
            }));
            this.stopListening = [Zy.gameBridge.subscribe("chatReceived", (yb => {
              let {
                serverChatMsgId: bb,
                content: Wy,
                author: Uy
              } = yb;
              this.addMessage(bb, Wy, Uy)
            })), () => {
              fy.g.unsubscribe(yb)
            }, By.c.subscribe("chatChannels", (yb => {
              var bb;
              this.setState({
                ...this.state,
                channel: null !== (bb = null === yb || void 0 === yb ? void 0 : yb[0]) && void 0 !== bb ? bb : null
              })
            }))]
          }
          return this.listeners.add(yb), () => {
            if (this.listeners.delete(yb), 0 === this.listeners.size) {
              for (const yb of this.stopListening) yb();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Uy = {
          serverChatMsgId: yb,
          content: bb,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: Wy
        };
        this.setState({
          ...this.state,
          messages: [Uy, ...this.state.messages].slice(0, hy.f)
        })
      }
      selectNextChannel() {
        const yb = By.c.get("chatChannels");
        if (yb) {
          const bb = yb.findIndex((yb => {
            var bb;
            return yb.channelName === (null === (bb = this.state.channel) || void 0 === bb ? void 0 : bb.channelName)
          }));
          this.setState({
            ...this.state,
            channel: yb[(bb + 1) % yb.length]
          })
        }
      }
      setState(yb) {
        this.state = yb;
        for (const bb of this.listeners) bb()
      }
    };

    function qb() {
      const [yb, bb] = (0, Uy.useState)(ey.getState);
      return (0, Uy.useEffect)((() => {
        const yb = ey.subscribe((() => {
          bb(ey.getState())
        }));
        return bb(ey.getState()), yb
      }), []), yb
    }

    function sy(yb) {
      var bb, Wy;
      if (cb.j && "/" !== yb[0]) ey.addMessage(null, [{
        str: "Cannot send chat messages in bloxdk12. Use /help for a list of commands."
      }]);
      else {
        if (yb.startsWith("/report")) {
          var Uy;
          const bb = null !== (Uy = yb.replace("/report", "").trim().split(" ")[0]) && void 0 !== Uy ? Uy : "";
          if ("" === bb) return void ey.addMessage(null, [{
            str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
          }]);
          const Wy = Zy.gameBridge.latest("players"),
            hy = Zy.gameBridge.latest("hiddenPlayerNames"),
            cb = yb => {
              var Uy, fy;
              const Zy = null !== (Uy = null === (fy = Wy.byId[yb]) || void 0 === fy ? void 0 : fy.name) && void 0 !== Uy ? Uy : null;
              return null !== Zy && (Zy === bb || (0, oy.d)(Zy, hy) === bb)
            };
          if (null !== Wy.localId && cb(Wy.localId)) return void ey.addMessage(null, [{
            str: "You cannot report yourself."
          }]);
          for (const yb of Wy.ids)
            if (cb(yb)) return fy.g.EZ("OpenReportMenu", {
              playerEId: yb,
              playerName: Wy.byId[yb].name,
              vc: null,
              serverChatMsgId: null
            }), void console.log("Opening report menu...");
          ey.addMessage(null, [{
            str: "Player not found in lobby."
          }])
        }
        Zy.gameBridge.send("sendChatMessage", {
            vc: yb,
            channelName: null !== (bb = null === (Wy = ey.getState().channel) || void 0 === Wy ? void 0 : Wy.channelName) && void 0 !== bb ? bb : null
          }),
          function(yb) {
            var bb;
            const Wy = null !== (bb = Py.e.getItem("recentlySentChatMsgs")) && void 0 !== bb ? bb : [];
            Wy.push(yb), Wy.length > Ky && Wy.shift();
            Py.e.setItem("recentlySentChatMsgs", Wy)
          }(yb)
      }
    }

    function Sy() {
      var yb;
      return null !== (yb = Py.e.getItem("recentlySentChatMsgs")) && void 0 !== yb ? yb : []
    }

    function Ey(yb) {
      var bb;
      let Wy = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Uy = null !== (bb = Py.e.getItem("recentlySentChatMsgs")) && void 0 !== bb ? bb : [],
        hy = Uy.length + 1,
        fy = Wy ? (yb % hy + hy) % hy : Math.min(Uy.length, Math.max(0, yb));
      return {
        stepsBack: fy,
        text: 0 === fy ? "" : Uy[Uy.length - fy]
      }
    }
  },
  7857: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy,
      f: () => fy
    });
    var Uy = Wy(1634);
    const hy = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      fy = yb => "string" === typeof yb.icon && "" !== yb.icon && "string" === typeof yb.keycode && hy.test(yb.keycode),
      Zy = yb => "Space" === yb ? "_" : Uy.h[yb]
  },
  7929: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy
    });
    var Uy = Wy(19);

    function hy() {
      return !Uy.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  7932: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy,
      d: () => cb,
      e: () => oy,
      f: () => Py,
      g: () => Zy,
      h: () => hy,
      k: () => Uy,
      l: () => sy,
      o: () => Ky,
      q: () => By,
      t: () => ey,
      x: () => qb
    });
    const Uy = 14,
      hy = 6,
      fy = (Uy + hy) / 2,
      Zy = 200,
      cb = Zy / 2,
      Py = Zy / 2 - 1,
      oy = hy / Uy * (Zy / 2),
      By = (yb, bb) => -Math.PI / 2 + 2 * yb * Math.PI / bb,
      Ky = (yb, bb, Wy) => {
        const Uy = 2 * Math.PI / Wy;
        return (Math.round((Math.atan2(bb, yb) + Math.PI / 2) / Uy) % Wy + Wy) % Wy
      },
      ey = .5,
      qb = (yb, bb, Wy) => Math.hypot(yb.x, yb.y) < ey ? Wy : Ky(yb.x, yb.y, bb),
      sy = (yb, bb, Wy, Uy, hy) => {
        const fy = Math.PI / bb,
          Zy = By(yb, bb),
          cb = Zy - fy,
          Py = Zy + fy,
          oy = (yb, bb) => `${Wy+yb*Math.cos(bb)} ${Wy+yb*Math.sin(bb)}`;
        return [`M ${oy(Uy,cb)}`, `L ${oy(hy,cb)}`, `A ${hy} ${hy} 0 0 1 ${oy(hy,Py)}`, `L ${oy(Uy,Py)}`, `A ${Uy} ${Uy} 0 0 0 ${oy(Uy,cb)}`, "Z"].join(" ")
      }
  },
  7974: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy
    });
    var Uy = Wy(55),
      hy = Wy(7884),
      fy = Wy(2005);

    function Zy() {
      const yb = (0, fy.k)("shopInfo"),
        [, bb] = (0, Uy.useReducer)((yb => yb + 1), 0);
      return (0, fy.g)("shopInfo", bb), !(0, hy.d)(yb)
    }
  },
  7855: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => fy,
      g: () => Zy,
      h: () => cb,
      j: () => hy
    });
    var Uy = Wy(7857);
    const hy = yb => {
        const bb = [];
        yb.holdingGun && bb.push({
          kind: "reload"
        }), yb.touchscreenActionButton && bb.push({
          kind: "touchButton",
          label: yb.touchscreenActionButton
        });
        for (const fy of null !== (Wy = null === (hy = yb.customButtons) || void 0 === hy ? void 0 : hy.filter(Uy.f)) && void 0 !== Wy ? Wy : []) {
          var Wy, hy;
          bb.push({
            kind: "customButton",
            id: fy.id,
            icon: fy.icon,
            description: fy.description
          })
        }
        return bb
      },
      fy = yb => yb.length >= 2,
      Zy = yb => "specialAction" !== yb.kind,
      cb = (yb, bb) => {
        if (null === yb || null === bb) return yb === bb;
        if (yb.kind !== bb.kind) return !1;
        switch (yb.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return yb.action === bb.action;
          case "customButton":
            return yb.id === bb.id && yb.icon === bb.icon;
          case "touchButton":
            return yb.label === bb.label
        }
      }
  },
  7846: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => By,
      i: () => qb,
      j: () => Ky,
      m: () => sy
    });
    var Uy = Wy(55),
      hy = Wy(23),
      fy = Wy(1268),
      Zy = Wy(7855),
      cb = Wy(7864);
    let Py = null;
    const oy = () => Py,
      By = yb => {
        (0, Zy.h)(Py, yb) || (Py = yb, hy.g.EZ(cb.e, Py))
      },
      Ky = () => {
        const [yb, bb] = (0, Uy.useState)(oy);
        return (0, fy.i)(cb.e, bb), yb
      };
    let ey = !1;
    const qb = yb => {
        yb !== ey && (ey = yb, hy.g.EZ(cb.h, yb))
      },
      sy = () => {
        const [yb, bb] = (0, Uy.useState)(ey);
        return (0, fy.i)(cb.h, bb), yb
      }
  },
  7864: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy,
      e: () => Uy,
      h: () => hy,
      j: () => cb,
      n: () => Py,
      q: () => oy,
      t: () => Zy
    });
    const Uy = "controllerActionHintChanged",
      hy = "controllerActionWheelHintChanged",
      fy = "controllerOpenChat",
      Zy = "controllerSneakToggledChanged",
      cb = "controllerAttackLatchedChanged",
      Py = "controllerDropStackHoldChanged",
      oy = "controllerPickBlockHintChanged"
  },
  7821: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy,
      e: () => fy,
      g: () => Py,
      j: () => cb
    });
    var Uy = Wy(1268),
      hy = Wy(1245);
    const fy = "controllerInventoryCursorChanged",
      Zy = {
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
      cb = () => {
        var yb, bb;
        return (0, Uy.m)(fy, null !== (yb = null === (bb = (0, hy.g)()) || void 0 === bb ? void 0 : bb.getInventoryCursorState()) && void 0 !== yb ? yb : Zy)
      },
      Py = () => {
        var yb, bb;
        return null !== (yb = null === (bb = (0, hy.g)()) || void 0 === bb ? void 0 : bb.isPadSteppingSlots()) && void 0 !== yb && yb
      }
  },
  7812: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => ey,
      c: () => cb,
      d: () => Py,
      g: () => Zy,
      j: () => fy,
      l: () => By,
      o: () => Ky
    });
    let Uy = null;
    const hy = new Set,
      fy = yb => (Uy = yb, () => {
        if (Uy === yb) {
          Uy = null;
          for (const yb of hy) yb()
        }
      }),
      Zy = yb => (hy.add(yb), () => {
        hy.delete(yb)
      }),
      cb = () => Uy,
      Py = () => null !== Uy;
    let oy = null;
    const By = yb => {
        oy = yb
      },
      Ky = () => {
        const yb = oy;
        return oy = null, yb
      },
      ey = (yb, bb) => {
        var Wy, Uy;
        return null !== (Wy = null !== (Uy = yb.find((yb => yb.element === bb))) && void 0 !== Uy ? Uy : yb.find((yb => yb.element.contains(bb)))) && void 0 !== Wy ? Wy : null
      }
  },
  7829: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => fy,
      f: () => Zy
    });
    var Uy = Wy(55);
    const hy = new WeakMap,
      fy = yb => {
        var bb, Wy;
        return null !== (bb = null === (Wy = hy.get(yb)) || void 0 === Wy ? void 0 : Wy.current) && void 0 !== bb ? bb : null
      },
      Zy = (yb, bb) => {
        const Wy = (0, Uy.useRef)(bb);
        Wy.current = bb;
        const fy = (0, Uy.useRef)(null);
        (0, Uy.useEffect)((() => {
          const bb = yb.current,
            Uy = fy.current;
          bb !== Uy && (Uy && hy.get(Uy) === Wy && hy.delete(Uy), fy.current = bb, bb && hy.set(bb, Wy))
        })), (0, Uy.useEffect)((() => () => {
          const yb = fy.current;
          yb && hy.get(yb) === Wy && hy.delete(yb), fy.current = null
        }), [])
      }
  },
  7960: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => cb,
      g: () => oy,
      i: () => Ky,
      k: () => By,
      l: () => Py,
      o: () => qb
    });
    var Uy = Wy(23),
      hy = Wy(1647),
      fy = Wy(1245),
      Zy = Wy(1239);
    const cb = yb => {
        var bb, Wy;
        return (0, Zy.f)() && null !== (bb = null === (Wy = (0, fy.g)()) || void 0 === Wy ? void 0 : Wy.getGlyphForNoaAction(yb)) && void 0 !== bb ? bb : null
      },
      Py = "controllerGlyph:",
      oy = yb => {
        var bb, Wy;
        return null !== (bb = null === (Wy = (0, fy.g)()) || void 0 === Wy ? void 0 : Wy.getPadGlyphIconName(yb)) && void 0 !== bb ? bb : `${Py}xbox/${yb}`
      },
      By = yb => yb.startsWith(Py),
      Ky = yb => {
        var bb, Wy;
        return By(yb) && null !== (bb = null === (Wy = (0, fy.g)()) || void 0 === Wy ? void 0 : Wy.getPadGlyphIconUrl(yb)) && void 0 !== bb ? bb : null
      },
      ey = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", Zy.e, hy.f, hy.e],
      qb = yb => {
        const bb = ey.map((bb => Uy.g.subscribe(bb, yb)));
        return () => {
          for (const yb of bb) Uy.g.unsubscribe(yb)
        }
      }
  },
  7805: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => hy,
      d: () => Uy
    });
    const Uy = "controllerOpenKeyboard",
      hy = "controllerKeyboardVisible"
  },
  7911: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy,
      f: () => hy
    });
    let Uy = null;
    const hy = function(yb) {
        const bb = {
          cycle: yb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Uy = bb, () => {
          Uy === bb && (Uy = null)
        }
      },
      fy = () => {
        var yb;
        return null !== (yb = Uy) && void 0 !== yb && yb.canCycle() ? Uy.cycle : null
      }
  },
  7946: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy,
      e: () => Zy,
      h: () => fy,
      k: () => Uy,
      l: () => cb,
      p: () => oy,
      t: () => By
    });
    const Uy = "controllerActionWheelOpen",
      hy = "controllerActionWheelAim",
      fy = "controllerActionWheelCommit",
      Zy = "controllerActionWheelClose",
      cb = "controllerActionWheelPick";
    let Py = !1;
    const oy = () => Py,
      By = yb => {
        Py = yb
      }
  },
  7938: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy,
      e: () => hy
    });
    let Uy = 0;
    const hy = () => {
        Uy++
      },
      fy = () => Uy
  },
  7905: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Py,
      f: () => hy,
      j: () => Zy,
      m: () => fy,
      p: () => Uy,
      s: () => oy
    });
    const Uy = "controllerQuickChatWheelOpen",
      hy = "controllerQuickChatWheelAim",
      fy = "controllerQuickChatWheelCommit",
      Zy = "controllerQuickChatWheelClose";
    let cb = !1;
    const Py = () => cb,
      oy = yb => {
        cb = yb
      }
  },
  8026: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => cb,
      e: () => Py
    });
    var Uy = Wy(19),
      hy = Wy(1177),
      fy = Wy(94);
    const Zy = {
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

    function cb() {
      return (0, fy.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Py = new class {
      constructor(yb) {
        this.deps = yb, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(yb, bb) {
        var Wy;
        if (!this.deps.enabled()) return;
        const Uy = Zy[yb],
          hy = null !== bb && void 0 !== bb ? bb : Uy.pattern;
        if (null === hy) return void console.warn("No vibration pattern for", yb);
        const fy = this.deps.now();
        fy - this.lastAnyAt < 40 && Uy.priority < this.playingPriority || fy - (null !== (Wy = this.lastAt.get(yb)) && void 0 !== Wy ? Wy : -1 / 0) < Uy.minGapMs || fy < this.playingUntil && Uy.priority < this.playingPriority || (this.lastAt.set(yb, fy), this.lastAnyAt = fy, this.playingUntil = fy + hy.reduce(((yb, bb) => yb + bb), 0), this.playingPriority = Uy.priority, this.deps.vibrate(hy))
      }
    }({
      vibrate: yb => {
        navigator.vibrate([...yb])
      },
      now: () => performance.now(),
      enabled: () => cb() && Uy.d.get("isTouchScreen") && Uy.d.get("clientEscMenuOptions").vibration && !(0, hy.f)()
    })
  },
  7884: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy
    });
    var Uy = Wy(7892),
      hy = Wy(547),
      fy = Wy(139);

    function Zy(yb) {
      var bb, Wy;
      if ((0, hy.D)(yb)) return !0;
      const Zy = null !== (bb = null === (Wy = fy.r[fy.u]) || void 0 === Wy ? void 0 : Wy.adConfig.showRewardedAds) && void 0 !== bb && bb;
      for (const hy in yb) {
        const bb = yb[hy];
        if (null !== bb && void 0 !== bb && bb.items)
          for (const yb in bb.items)
            if ((0, Uy.k)(bb.items[yb], Zy)) return !1
      }
      return !0
    }
  },
  7918: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy,
      f: () => Uy
    });
    const Uy = 100;

    function hy(yb) {
      let {
        translationKeys: bb = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return yb.map((yb => {
        var Wy;
        return null !== (Wy = function(yb, bb) {
          if ("string" === typeof yb) return yb;
          const Wy = "str" in yb ? yb.str : yb;
          if ("string" === typeof Wy) return Wy;
          if ("entityName" in Wy) return Wy.entityName;
          if (bb && "translationKey" in Wy) return `{${Wy.translationKey}${void 0===Wy.params?"":` ${JSON.stringify(Wy.params)}`}}`;
          return null
        }(yb, bb)) && void 0 !== Wy ? Wy : " "
      })).join("")
    }
  },
  7955: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => By,
      g: () => cb,
      j: () => Py
    });
    var Uy = Wy(1844),
      hy = Wy(1102),
      fy = Wy(1849);
    const Zy = ",";

    function cb(yb) {
      if (!yb) return [];
      const bb = new Set,
        Wy = [];
      for (const Uy of yb.split(Zy)) {
        const yb = Uy.trim();
        if ((0, fy.g)(yb) && !bb.has(yb) && (bb.add(yb), Wy.push(yb), Wy.length >= hy.o)) break
      }
      return Wy
    }

    function Py(yb) {
      const bb = new Set,
        Wy = [];
      for (const Uy of yb)
        if ((0, fy.g)(Uy) && !bb.has(Uy) && (bb.add(Uy), Wy.push(Uy), Wy.length >= hy.o)) break;
      return Wy.join(Zy)
    }

    function oy() {
      return Py(fy.d)
    }

    function By(yb) {
      var bb;
      return "emote" === yb ? oy() : null !== (bb = Ky[yb][0]) && void 0 !== bb ? bb : ey[yb]
    }
    const Ky = hy.x.reduce(((yb, bb) => {
        const Wy = [];
        for (const fy in Uy.g[bb]) {
          var hy;
          "default" === (null === (hy = (0, Uy.m)(bb, fy)) || void 0 === hy ? void 0 : hy.cosmeticPack) && Wy.push(fy)
        }
        return yb[bb] = Wy, yb
      }), {}),
      ey = hy.x.reduce(((yb, bb) => (yb[bb] = Object.keys(Uy.g[bb])[0], yb)), {})
  },
  7892: (yb, bb, Wy) => {
    function Uy(yb, bb) {
      return !yb.hidden && (bb || !yb.isRewardedAd)
    }

    function hy(yb) {
      return "object" === typeof yb ? yb.option : yb
    }

    function fy(yb, bb) {
      var Wy;
      if ("dropdown" === (null === (Wy = yb.userInput) || void 0 === Wy ? void 0 : Wy.type) && "object" === typeof yb.userInput.dropdownOptions[0]) {
        for (const Wy of yb.userInput.dropdownOptions)
          if (hy(Wy) === bb) return "object" === typeof Wy ? Wy.cost : yb.cost;
        console.error("Didn't find matching option for dropdown item. Item:", yb, "input:", bb)
      }
      return yb.cost
    }

    function Zy(yb, bb, Wy) {
      var Uy;
      const hy = null !== (Uy = Wy.excludedPlayers) && void 0 !== Uy ? Uy : [bb];
      return yb.filter((yb => !hy.includes(yb)))
    }
    Wy.d(bb, {
      b: () => fy,
      d: () => hy,
      h: () => Zy,
      k: () => Uy
    })
  },
  7952: () => {}
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);
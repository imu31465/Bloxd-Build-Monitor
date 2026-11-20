export const id = 150;
export const ids = [150];
export const modules = {
  8291: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Tz,
      g: () => Cz,
      i: () => ez
    });
    var Fz = sz(65),
      Wz = sz(4180),
      Xz = sz(1116),
      Oz = sz(1416),
      oz = sz(34),
      vz = sz(3088),
      Uz = sz(2145),
      Kz = sz(1223),
      uz = sz(8318),
      Nz = sz(1857),
      bz = sz(1901),
      wz = sz(1173),
      Dz = sz(30),
      gz = sz(1571),
      Hz = sz(1020),
      Bz = sz.n(Hz),
      Pz = sz(8295),
      rz = sz(8298),
      Yz = sz(8302),
      xz = sz(8230),
      mz = sz(8310),
      Jz = (sz(8314), sz(1087));
    let Iz = null;

    function Cz() {
      return null !== Iz
    }

    function ez() {
      return "pad" === Iz
    }

    function Zz() {
      return "inGame" === Dz.b.get("gameState") && !(0, gz.r)()
    }

    function Gz(zz) {
      return (0, rz.r)(zz, Kz.n, rz.d, rz.e, rz.f)
    }
    const Tz = (0, Fz.memo)((function() {
      const {
        t: zz
      } = (0, wz.B)(), {
        userContext: tz
      } = (0, Xz.b)(), [sz, Dz] = (0, Fz.useState)(null), [Hz, Cz] = (0, Fz.useState)(null), ez = (0, Fz.useRef)(null), Tz = (0, Fz.useCallback)((zz => {
        ez.current = zz, Cz(zz)
      }), []), cz = (0, Fz.useRef)(0), jz = (0, Fz.useRef)(null), Az = (0, Fz.useRef)({
        x: 0,
        y: 0
      }), [yz, Mz] = (0, Fz.useState)(0), dz = (0, Fz.useMemo)((() => function(zz) {
        const tz = [];
        for (let Fz = 0; Fz < Kz.n; Fz++) {
          var sz;
          tz.push(null !== (sz = zz[Fz]) && void 0 !== sz ? sz : null)
        }
        return tz
      }((0, uz.f)(tz.getPlayerCosmetics().emote))), [tz, yz]);
      (0, bz.d)("cosmeticsUpdated", (zz => {
        zz.some((zz => zz.local && "emote" === zz.wF)) && Mz((zz => zz + 1))
      }));
      const hz = (0, Fz.useRef)(!1),
        Qz = (0, Fz.useCallback)((function(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === zz && (0, Yz.i)(), hz.current = tz, Az.current = {
            x: 0,
            y: 0
          }, Tz(null), Dz(zz)
        }), [Tz]),
        kz = (0, Fz.useCallback)((() => {
          Dz(null), Tz(null), Az.current = {
            x: 0,
            y: 0
          }
        }), [Tz]),
        iz = (0, Fz.useCallback)((zz => {
          if (Date.now() < cz.current) return;
          const tz = (0, Uz.d)(zz),
            sz = !!tz.holdUntilMove,
            Fz = sz ? 600 : Math.ceil(1e3 * tz.animation.animation_length / Uz.b) + 200;
          cz.current = Date.now() + Fz, jz.current = zz, Nz.gameBridge.send("playEmote", zz), Nz.gameBridge.send("applyTemporaryThirdPerson", sz ? {} : {
            durationMs: Fz
          })
        }), []);
      (0, Oz.g)("requestToggleEmoteWheel", (() => {
        null === sz ? Zz() && Qz("click") : kz()
      })), (0, Oz.g)("requestEmoteWheelHoldOpen", (() => {
        null === sz && Zz() && Qz((0, Pz.c)() ? "hold" : "click")
      })), (0, Oz.g)("requestEmoteWheelPadOpen", (zz => {
        null !== sz || !Zz() || (0, xz.c)() || (0, mz.n)() || Qz("pad", zz)
      })), (0, Oz.g)("requestEmoteRepeatLast", (() => {
        if (null !== sz || !Zz() || (0, xz.c)() || (0, mz.n)()) return;
        const zz = jz.current;
        null !== zz && dz.includes(zz) ? iz(zz) : Qz("pad", !0)
      }));
      const Lz = () => {
        const zz = ez.current,
          tz = null !== zz ? dz[zz] : null;
        null !== tz && "pad" === sz && Date.now() < cz.current || (kz(), null !== tz && iz(tz))
      };
      (0, Oz.g)("emoteWheelPadAim", (zz => {
        if ("pad" !== sz) return;
        const tz = (0, rz.z)(zz, Kz.n, ez.current);
        Tz(null !== tz && null !== dz[tz] ? tz : null)
      })), (0, Oz.g)("requestEmoteWheelPadCommit", (zz => {
        "pad" !== sz || zz && hz.current || Lz()
      })), (0, Oz.g)("appManagerUpdated|activeInputDevice", (zz => {
        null !== sz && "pad" === sz !== ("gamepad" === zz) && kz()
      })), (0, Fz.useLayoutEffect)((() => (Iz = sz, (0, vz.s)("emoteWheel", "pad" === sz), oz.o.Yg(vz.l), () => {
        Iz = null, (0, vz.s)("emoteWheel", !1), oz.o.Yg(vz.l)
      })), [sz]), (0, Oz.g)("requestEmoteWheelHoldRelease", (() => {
        "hold" === sz && Lz()
      })), (0, Oz.g)("requestEmoteWheelClose", (() => {
        null !== sz && kz()
      })), (0, Oz.g)("appManagerUpdated|gameState", (zz => {
        "inGame" !== zz && kz()
      }));
      const lz = () => {
        (0, gz.r)() && kz()
      };
      if ((0, Oz.g)("appManagerUpdated|openEverythingMenuName", lz), (0, Oz.g)("appManagerUpdated|openInGameMenuName", lz), (0, Oz.g)("pointerLockUpdate", (zz => {
          zz || "hold" !== sz || kz()
        })), (0, Fz.useEffect)((() => {
          if (null === sz) return;
          const zz = zz => {
            "Escape" === zz.key && (zz.stopImmediatePropagation(), zz.preventDefault(), kz())
          };
          return document.addEventListener("keydown", zz, !0), () => {
            document.removeEventListener("keydown", zz, !0)
          }
        }), [sz, kz]), (0, Wz.b)(!0, "click" === sz, "EmoteWheelOverlay"), (0, Fz.useEffect)((() => {
          if ("hold" === sz) return Nz.gameBridge.send("holdEmoteWheel", !0), () => {
            Nz.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [sz]), (0, Fz.useEffect)((() => {
          if ("hold" !== sz) return;
          const zz = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            tz = rz.n * zz,
            Fz = rz.m * zz,
            Wz = zz => {
              let sz = Az.current.x + zz.movementX,
                Wz = Az.current.y + zz.movementY;
              const Xz = Math.hypot(sz, Wz);
              if (Xz > tz) {
                const zz = tz / Xz;
                sz *= zz, Wz *= zz
              }
              Az.current = {
                x: sz,
                y: Wz
              }, Tz(function(zz, tz, sz, Fz) {
                if (Math.hypot(zz, tz) < sz) return null;
                const Wz = (0, rz.s)(zz, tz, Kz.n);
                return null === Fz[Wz] ? null : Wz
              }(sz, Wz, Fz, dz))
            };
          return document.addEventListener("mousemove", Wz), () => {
            document.removeEventListener("mousemove", Wz)
          }
        }), [sz, dz, Tz]), null === sz) return null;
      const nz = "hold" === sz || "pad" === sz,
        az = null !== Hz ? dz[Hz] : null,
        qz = null !== az ? (0, Uz.d)(az).displayName : zz("emotes:pickEmote");
      return (0, Jz.jsx)("div", {
        className: Bz()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === sz
        }),
        onMouseDown: zz => {
          zz.target === zz.currentTarget && kz()
        },
        children: (0, Jz.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * rz.n + "rem",
            height: 2 * rz.n + "rem"
          },
          children: [(0, Jz.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${rz.i} ${rz.i}`,
            children: [dz.map(((tz, sz) => {
              const Fz = null !== tz,
                Wz = nz && sz === Hz;
              return (0, Jz.jsx)("path", {
                d: Gz(sz),
                className: Bz()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: Wz,
                  EmoteWheelWedgeDisabled: !Fz
                }),
                onClick: zz => {
                  zz.stopPropagation(), null !== tz && (zz => {
                    kz(), iz(zz)
                  })(tz)
                },
                "aria-label": null !== tz ? (0, Uz.d)(tz).displayName : zz("emotes:emptySlot")
              }, sz)
            })), (0, Jz.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: rz.d,
              cy: rz.d,
              r: rz.f
            }), (0, Jz.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: rz.d,
              cy: rz.d,
              r: rz.e
            }), nz && null !== Hz && (0, Jz.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: Gz(Hz)
            })]
          }), dz.map(((zz, tz) => {
            const sz = null !== zz,
              Fz = nz && tz === Hz,
              Wz = (0, rz.u)(tz, Kz.n),
              Xz = rz.b * Math.cos(Wz),
              Oz = rz.b * Math.sin(Wz);
            return (0, Jz.jsx)("div", {
              className: Bz()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: Fz,
                EmoteWheelSlotIconDisabled: !sz
              }),
              style: {
                left: `calc(50% + ${Xz}rem)`,
                top: `calc(50% + ${Oz}rem)`,
                backgroundImage: sz ? `url(/textures/charSkins/previews/emote_${zz}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, tz)
          })), (0, Jz.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: qz
          })]
        })
      })
    }))
  },
  8283: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => uz,
      d: () => wz,
      h: () => Dz,
      l: () => bz,
      m: () => Nz
    });
    var Fz = sz(65),
      Wz = sz(8288),
      Xz = sz(34),
      Oz = sz(1857),
      oz = sz(44),
      vz = sz(1244),
      Uz = sz(1884);
    const Kz = 50;
    const uz = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = zz => {
          if (0 === this.listeners.size) {
            var tz, sz;
            this.state = {
              ...this.state,
              channel: null !== (tz = null === (sz = Uz.e.get("chatChannels")) || void 0 === sz ? void 0 : sz[0]) && void 0 !== tz ? tz : null
            };
            const zz = Xz.o.subscribe("reportPlayer", (zz => {
              let {
                playerEId: tz
              } = zz;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, tz]
              })
            }));
            this.stopListening = [Oz.gameBridge.subscribe("chatReceived", (zz => {
              let {
                serverChatMsgId: tz,
                content: sz,
                author: Fz
              } = zz;
              this.addMessage(tz, sz, Fz)
            })), () => {
              Xz.o.unsubscribe(zz)
            }, Uz.e.subscribe("chatChannels", (zz => {
              var tz;
              this.setState({
                ...this.state,
                channel: null !== (tz = null === zz || void 0 === zz ? void 0 : zz[0]) && void 0 !== tz ? tz : null
              })
            }))]
          }
          return this.listeners.add(zz), () => {
            if (this.listeners.delete(zz), 0 === this.listeners.size) {
              for (const zz of this.stopListening) zz();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Fz = {
          serverChatMsgId: zz,
          content: tz,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: sz
        };
        this.setState({
          ...this.state,
          messages: [Fz, ...this.state.messages].slice(0, Wz.e)
        })
      }
      selectNextChannel() {
        const zz = Uz.e.get("chatChannels");
        if (zz) {
          const tz = zz.findIndex((zz => {
            var tz;
            return zz.channelName === (null === (tz = this.state.channel) || void 0 === tz ? void 0 : tz.channelName)
          }));
          this.setState({
            ...this.state,
            channel: zz[(tz + 1) % zz.length]
          })
        }
      }
      setState(zz) {
        this.state = zz;
        for (const tz of this.listeners) tz()
      }
    };

    function Nz() {
      const [zz, tz] = (0, Fz.useState)(uz.getState);
      return (0, Fz.useEffect)((() => {
        const zz = uz.subscribe((() => {
          tz(uz.getState())
        }));
        return tz(uz.getState()), zz
      }), []), zz
    }

    function bz(zz) {
      var tz, sz;
      if (zz.startsWith("/report")) {
        var Fz;
        const tz = null !== (Fz = zz.replace("/report", "").trim().split(" ")[0]) && void 0 !== Fz ? Fz : "";
        if ("" === tz) return void uz.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const sz = Oz.gameBridge.latest("players"),
          Wz = Oz.gameBridge.latest("hiddenPlayerNames"),
          oz = zz => {
            var Fz, Xz;
            const Oz = null !== (Fz = null === (Xz = sz.byId[zz]) || void 0 === Xz ? void 0 : Xz.name) && void 0 !== Fz ? Fz : null;
            return null !== Oz && (Oz === tz || (0, vz.c)(Oz, Wz) === tz)
          };
        if (null !== sz.localId && oz(sz.localId)) return void uz.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const zz of sz.ids)
          if (oz(zz)) return Xz.o.Yg("OpenReportMenu", {
            playerEId: zz,
            playerName: sz.byId[zz].name,
            RO: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        uz.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      Oz.gameBridge.send("sendChatMessage", {
          RO: zz,
          channelName: null !== (tz = null === (sz = uz.getState().channel) || void 0 === sz ? void 0 : sz.channelName) && void 0 !== tz ? tz : null
        }),
        function(zz) {
          var tz;
          const sz = null !== (tz = oz.f.getItem("recentlySentChatMsgs")) && void 0 !== tz ? tz : [];
          sz.push(zz), sz.length > Kz && sz.shift();
          oz.f.setItem("recentlySentChatMsgs", sz)
        }(zz)
    }

    function wz() {
      var zz;
      return null !== (zz = oz.f.getItem("recentlySentChatMsgs")) && void 0 !== zz ? zz : []
    }

    function Dz(zz) {
      var tz;
      let sz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Fz = null !== (tz = oz.f.getItem("recentlySentChatMsgs")) && void 0 !== tz ? tz : [],
        Wz = Fz.length + 1,
        Xz = sz ? (zz % Wz + Wz) % Wz : Math.min(Fz.length, Math.max(0, zz));
      return {
        stepsBack: Xz,
        text: 0 === Xz ? "" : Fz[Fz.length - Xz]
      }
    }
  },
  8257: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz,
      e: () => Xz
    });
    var Fz = sz(1920);
    const Wz = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      Xz = zz => "string" === typeof zz.icon && "" !== zz.icon && "string" === typeof zz.keycode && Wz.test(zz.keycode),
      Oz = zz => "Space" === zz ? "_" : Fz.i[zz]
  },
  8295: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz
    });
    var Fz = sz(30);

    function Wz() {
      return !Fz.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8381: (zz, tz, sz) => {
    function Fz(zz) {
      return {
        x: (zz.left + zz.right) / 2,
        y: (zz.top + zz.bottom) / 2
      }
    }

    function Wz(zz) {
      return 0 === zz.length ? null : zz.reduce(((zz, tz) => ({
        left: Math.min(zz.left, tz.left),
        top: Math.min(zz.top, tz.top),
        right: Math.max(zz.right, tz.right),
        bottom: Math.max(zz.bottom, tz.bottom)
      })))
    }

    function Xz(zz, tz) {
      const sz = Math.max(0, (tz - (zz.right - zz.left)) / 2),
        Fz = Math.max(0, (tz - (zz.bottom - zz.top)) / 2);
      return {
        left: zz.left - sz,
        top: zz.top - Fz,
        right: zz.right + sz,
        bottom: zz.bottom + Fz
      }
    }

    function Oz(zz, tz) {
      return tz.x >= zz.left && tz.x <= zz.right && tz.y >= zz.top && tz.y <= zz.bottom
    }

    function oz(zz, tz, sz) {
      let Wz = null,
        oz = 1 / 0;
      for (const {
          id: Fz,
          box: Xz
        }
        of tz) {
        const tz = (Xz.right - Xz.left) * (Xz.bottom - Xz.top);
        Oz(Xz, zz) && tz < oz && (oz = tz, Wz = Fz)
      }
      if (null !== Wz) return Wz;
      let vz = 1 / 0;
      for (const {
          id: Uz,
          box: Kz
        }
        of tz) {
        if (!Oz(Xz(Kz, sz), zz)) continue;
        const tz = Fz(Kz),
          oz = Math.hypot(zz.x - tz.x, zz.y - tz.y);
        oz < vz && (vz = oz, Wz = Uz)
      }
      return Wz
    }

    function vz(zz, tz, sz) {
      return {
        left: sz.left,
        top: sz.top,
        right: zz - sz.right,
        bottom: tz - sz.bottom
      }
    }

    function Uz(zz, tz, sz, Fz) {
      const Wz = (zz, tz, sz) => Math.max(Math.min(tz, 0), Math.min(Math.max(sz, 0), zz));
      return {
        x: Wz(tz, Fz.left - zz.left, Fz.right - zz.right),
        y: Wz(sz, Fz.top - zz.top, Fz.bottom - zz.bottom)
      }
    }

    function Kz(zz, tz, sz, Fz, Wz) {
      const Xz = zz.dx * Fz + tz,
        Oz = zz.dy * Wz + sz,
        oz = zz => Math.max(-1, Math.min(1, zz));
      return {
        dx: oz(Xz / Fz),
        dy: oz(Oz / Wz)
      }
    }

    function uz(zz, tz, sz, Fz) {
      return tz <= 0 || sz <= 0 ? 1 : Math.max(.05, Math.min(1, zz / tz, Fz / sz))
    }

    function Nz(zz, tz, sz) {
      return Math.min(zz.right, tz.right) - Math.max(zz.left, tz.left) > sz && Math.min(zz.bottom, tz.bottom) - Math.max(zz.top, tz.top) > sz
    }

    function bz(zz, tz) {
      const sz = (zz, tz, sz, Fz) => tz - zz > Fz - sz ? sz - zz > tz - Fz ? Fz - tz : sz - zz : zz < sz ? sz - zz : tz > Fz ? Fz - tz : 0;
      return {
        x: sz(zz.left, zz.right, tz.left, tz.right),
        y: sz(zz.top, zz.bottom, tz.top, tz.bottom)
      }
    }

    function wz(zz, tz) {
      let {
        avoid: sz = null,
        bounds: Fz = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, Wz = 0, Xz = 1 / 0;
      return zz.forEach(((zz, Oz) => {
        const oz = tz.filter((tz => Nz(zz, tz, 0))).length,
          vz = null !== Fz && (zz.left < Fz.left || zz.top < Fz.top || zz.right > Fz.right || zz.bottom > Fz.bottom),
          Uz = oz + (sz && Nz(zz, sz, 0) ? 1e3 : 0) + (vz ? 1e6 : 0);
        Uz < Xz && (Wz = Oz, Xz = Uz)
      })), Wz
    }
    sz.d(tz, {
      B: () => Wz,
      c: () => Fz,
      d: () => Oz,
      f: () => Nz,
      h: () => Uz,
      k: () => Xz,
      l: () => wz,
      p: () => Kz,
      r: () => oz,
      v: () => uz,
      w: () => vz,
      y: () => bz
    })
  },
  8298: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Xz,
      d: () => oz,
      e: () => Uz,
      f: () => vz,
      i: () => Oz,
      m: () => Wz,
      n: () => Fz,
      r: () => wz,
      s: () => uz,
      u: () => Kz,
      w: () => Nz,
      z: () => bz
    });
    const Fz = 14,
      Wz = 6,
      Xz = (Fz + Wz) / 2,
      Oz = 200,
      oz = Oz / 2,
      vz = Oz / 2 - 1,
      Uz = Wz / Fz * (Oz / 2),
      Kz = (zz, tz) => -Math.PI / 2 + 2 * zz * Math.PI / tz,
      uz = (zz, tz, sz) => {
        const Fz = 2 * Math.PI / sz;
        return (Math.round((Math.atan2(tz, zz) + Math.PI / 2) / Fz) % sz + sz) % sz
      },
      Nz = .5,
      bz = (zz, tz, sz) => Math.hypot(zz.x, zz.y) < Nz ? sz : uz(zz.x, zz.y, tz),
      wz = (zz, tz, sz, Fz, Wz) => {
        const Xz = Math.PI / tz,
          Oz = Kz(zz, tz),
          oz = Oz - Xz,
          vz = Oz + Xz,
          Uz = (zz, tz) => `${sz+zz*Math.cos(tz)} ${sz+zz*Math.sin(tz)}`;
        return [`M ${Uz(Fz,oz)}`, `L ${Uz(Wz,oz)}`, `A ${Wz} ${Wz} 0 0 1 ${Uz(Wz,vz)}`, `L ${Uz(Fz,vz)}`, `A ${Fz} ${Fz} 0 0 0 ${Uz(Fz,oz)}`, "Z"].join(" ")
      }
  },
  8332: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz
    });
    var Fz = sz(65),
      Wz = sz(8275),
      Xz = sz(2290);

    function Oz() {
      const zz = (0, Xz.e)("shopInfo"),
        [, tz] = (0, Fz.useReducer)((zz => zz + 1), 0);
      return (0, Xz.d)("shopInfo", tz), !(0, Wz.b)(zz)
    }
  },
  8255: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Xz,
      f: () => Oz,
      i: () => oz,
      j: () => Wz
    });
    var Fz = sz(8257);
    const Wz = zz => {
        const tz = [];
        zz.holdingGun && tz.push({
          kind: "reload"
        }), zz.touchscreenActionButton && tz.push({
          kind: "touchButton",
          label: zz.touchscreenActionButton
        });
        for (const Xz of null !== (sz = null === (Wz = zz.customButtons) || void 0 === Wz ? void 0 : Wz.filter(Fz.e)) && void 0 !== sz ? sz : []) {
          var sz, Wz;
          tz.push({
            kind: "customButton",
            id: Xz.id,
            icon: Xz.icon,
            description: Xz.description
          })
        }
        return tz
      },
      Xz = zz => zz.length >= 2,
      Oz = zz => "specialAction" !== zz.kind,
      oz = (zz, tz) => {
        if (null === zz || null === tz) return zz === tz;
        if (zz.kind !== tz.kind) return !1;
        switch (zz.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return zz.action === tz.action;
          case "customButton":
            return zz.id === tz.id && zz.icon === tz.icon;
          case "touchButton":
            return zz.label === tz.label
        }
      }
  },
  8253: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Kz,
      f: () => bz,
      i: () => uz,
      j: () => wz
    });
    var Fz = sz(65),
      Wz = sz(34),
      Xz = sz(1416),
      Oz = sz(8255),
      oz = sz(8261);
    let vz = null;
    const Uz = () => vz,
      Kz = zz => {
        (0, Oz.i)(vz, zz) || (vz = zz, Wz.o.Yg(oz.h, vz))
      },
      uz = () => {
        const [zz, tz] = (0, Fz.useState)(Uz);
        return (0, Xz.g)(oz.h, tz), zz
      };
    let Nz = !1;
    const bz = zz => {
        zz !== Nz && (Nz = zz, Wz.o.Yg(oz.l, zz))
      },
      wz = () => {
        const [zz, tz] = (0, Fz.useState)(Nz);
        return (0, Xz.g)(oz.l, tz), zz
      }
  },
  8261: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Xz,
      h: () => Fz,
      l: () => Wz,
      p: () => oz,
      s: () => vz,
      u: () => Uz,
      y: () => Oz
    });
    const Fz = "controllerActionHintChanged",
      Wz = "controllerActionWheelHintChanged",
      Xz = "controllerOpenChat",
      Oz = "controllerSneakToggledChanged",
      oz = "controllerAttackLatchedChanged",
      vz = "controllerDropStackHoldChanged",
      Uz = "controllerPickBlockHintChanged"
  },
  8214: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz,
      f: () => Xz,
      h: () => vz,
      i: () => oz
    });
    var Fz = sz(1416),
      Wz = sz(1375);
    const Xz = "controllerInventoryCursorChanged",
      Oz = {
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
      oz = () => {
        var zz, tz;
        return (0, Fz.h)(Xz, null !== (zz = null === (tz = (0, Wz.c)()) || void 0 === tz ? void 0 : tz.getInventoryCursorState()) && void 0 !== zz ? zz : Oz)
      },
      vz = () => {
        var zz, tz;
        return null !== (zz = null === (tz = (0, Wz.c)()) || void 0 === tz ? void 0 : tz.isPadSteppingSlots()) && void 0 !== zz && zz
      }
  },
  8207: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Nz,
      h: () => oz,
      i: () => vz,
      j: () => Oz,
      l: () => Xz,
      o: () => Kz,
      r: () => uz
    });
    let Fz = null;
    const Wz = new Set,
      Xz = zz => (Fz = zz, () => {
        if (Fz === zz) {
          Fz = null;
          for (const zz of Wz) zz()
        }
      }),
      Oz = zz => (Wz.add(zz), () => {
        Wz.delete(zz)
      }),
      oz = () => Fz,
      vz = () => null !== Fz;
    let Uz = null;
    const Kz = zz => {
        Uz = zz
      },
      uz = () => {
        const zz = Uz;
        return Uz = null, zz
      },
      Nz = (zz, tz) => {
        var sz, Fz;
        return null !== (sz = null !== (Fz = zz.find((zz => zz.element === tz))) && void 0 !== Fz ? Fz : zz.find((zz => zz.element.contains(tz)))) && void 0 !== sz ? sz : null
      }
  },
  8216: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Xz,
      c: () => Oz
    });
    var Fz = sz(65);
    const Wz = new WeakMap,
      Xz = zz => {
        var tz, sz;
        return null !== (tz = null === (sz = Wz.get(zz)) || void 0 === sz ? void 0 : sz.current) && void 0 !== tz ? tz : null
      },
      Oz = (zz, tz) => {
        const sz = (0, Fz.useRef)(tz);
        sz.current = tz;
        const Xz = (0, Fz.useRef)(null);
        (0, Fz.useEffect)((() => {
          const tz = zz.current,
            Fz = Xz.current;
          tz !== Fz && (Fz && Wz.get(Fz) === sz && Wz.delete(Fz), Xz.current = tz, tz && Wz.set(tz, sz))
        })), (0, Fz.useEffect)((() => () => {
          const zz = Xz.current;
          zz && Wz.get(zz) === sz && Wz.delete(zz), Xz.current = null
        }), [])
      }
  },
  8321: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => oz,
      f: () => Uz,
      g: () => uz,
      h: () => Kz,
      j: () => vz,
      k: () => bz
    });
    var Fz = sz(34),
      Wz = sz(1935),
      Xz = sz(1375),
      Oz = sz(1358);
    const oz = zz => {
        var tz, sz;
        return (0, Oz.c)() && null !== (tz = null === (sz = (0, Xz.c)()) || void 0 === sz ? void 0 : sz.getGlyphForNoaAction(zz)) && void 0 !== tz ? tz : null
      },
      vz = "controllerGlyph:",
      Uz = zz => {
        var tz, sz;
        return null !== (tz = null === (sz = (0, Xz.c)()) || void 0 === sz ? void 0 : sz.getPadGlyphIconName(zz)) && void 0 !== tz ? tz : `${vz}xbox/${zz}`
      },
      Kz = zz => zz.startsWith(vz),
      uz = zz => {
        var tz, sz;
        return Kz(zz) && null !== (tz = null === (sz = (0, Xz.c)()) || void 0 === sz ? void 0 : sz.getPadGlyphIconUrl(zz)) && void 0 !== tz ? tz : null
      },
      Nz = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", Oz.b, Wz.d, Wz.b],
      bz = zz => {
        const tz = Nz.map((tz => Fz.o.subscribe(tz, zz)));
        return () => {
          for (const zz of tz) Fz.o.unsubscribe(zz)
        }
      }
  },
  8204: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Wz,
      e: () => Fz
    });
    const Fz = "controllerOpenKeyboard",
      Wz = "controllerKeyboardVisible"
  },
  8238: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Xz,
      f: () => Wz
    });
    let Fz = null;
    const Wz = function(zz) {
        const tz = {
          cycle: zz,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Fz = tz, () => {
          Fz === tz && (Fz = null)
        }
      },
      Xz = () => {
        var zz;
        return null !== (zz = Fz) && void 0 !== zz && zz.canCycle() ? Fz.cycle : null
      }
  },
  8310: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Wz,
      f: () => Oz,
      j: () => Xz,
      k: () => Fz,
      l: () => oz,
      n: () => Uz,
      o: () => Kz
    });
    const Fz = "controllerActionWheelOpen",
      Wz = "controllerActionWheelAim",
      Xz = "controllerActionWheelCommit",
      Oz = "controllerActionWheelClose",
      oz = "controllerActionWheelPick";
    let vz = !1;
    const Uz = () => vz,
      Kz = zz => {
        vz = zz
      }
  },
  8302: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      i: () => Wz
    });
    let Fz = 0;
    const Wz = () => {
        Fz++
      },
      Xz = () => Fz
  },
  8230: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => vz,
      d: () => Wz,
      h: () => Oz,
      k: () => Xz,
      o: () => Fz,
      s: () => Uz
    });
    const Fz = "controllerQuickChatWheelOpen",
      Wz = "controllerQuickChatWheelAim",
      Xz = "controllerQuickChatWheelCommit",
      Oz = "controllerQuickChatWheelClose";
    let oz = !1;
    const vz = () => oz,
      Uz = zz => {
        oz = zz
      }
  },
  8376: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => oz,
      e: () => vz
    });
    var Fz = sz(30),
      Wz = sz(1293),
      Xz = sz(106);
    const Oz = {
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

    function oz() {
      return (0, Xz.isMobile)() && "function" === typeof navigator.vibrate
    }
    const vz = new class {
      constructor(zz) {
        this.deps = zz, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(zz, tz) {
        var sz;
        if (!this.deps.enabled()) return;
        const Fz = Oz[zz],
          Wz = null !== tz && void 0 !== tz ? tz : Fz.pattern;
        if (null === Wz) return void console.warn("No vibration pattern for", zz);
        const Xz = this.deps.now();
        Xz - this.lastAnyAt < 40 && Fz.priority < this.playingPriority || Xz - (null !== (sz = this.lastAt.get(zz)) && void 0 !== sz ? sz : -1 / 0) < Fz.minGapMs || Xz < this.playingUntil && Fz.priority < this.playingPriority || (this.lastAt.set(zz, Xz), this.lastAnyAt = Xz, this.playingUntil = Xz + Wz.reduce(((zz, tz) => zz + tz), 0), this.playingPriority = Fz.priority, this.deps.vibrate(Wz))
      }
    }({
      vibrate: zz => {
        navigator.vibrate([...zz])
      },
      now: () => performance.now(),
      enabled: () => oz() && Fz.b.get("isTouchScreen") && Fz.b.get("clientEscMenuOptions").vibration && !(0, Wz.e)()
    })
  },
  8275: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz
    });
    var Fz = sz(8279),
      Wz = sz(580),
      Xz = sz(133);

    function Oz(zz) {
      var tz, sz;
      if ((0, Wz.G)(zz)) return !0;
      const Oz = null !== (tz = null === (sz = Xz.r[Xz.t]) || void 0 === sz ? void 0 : sz.adConfig.showRewardedAds) && void 0 !== tz && tz;
      for (const Wz in zz) {
        const tz = zz[Wz];
        if (null !== tz && void 0 !== tz && tz.items)
          for (const zz in tz.items)
            if ((0, Fz.k)(tz.items[zz], Oz)) return !1
      }
      return !0
    }
  },
  8288: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz,
      e: () => Fz
    });
    const Fz = 100;

    function Wz(zz) {
      let {
        translationKeys: tz = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return zz.map((zz => {
        var sz;
        return null !== (sz = function(zz, tz) {
          if ("string" === typeof zz) return zz;
          const sz = "str" in zz ? zz.str : zz;
          if ("string" === typeof sz) return sz;
          if ("entityName" in sz) return sz.entityName;
          if (tz && "translationKey" in sz) return `{${sz.translationKey}${void 0===sz.params?"":` ${JSON.stringify(sz.params)}`}}`;
          return null
        }(zz, tz)) && void 0 !== sz ? sz : " "
      })).join("")
    }
  },
  8318: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Kz,
      f: () => oz,
      j: () => vz
    });
    var Fz = sz(2140),
      Wz = sz(1223),
      Xz = sz(2145);
    const Oz = ",";

    function oz(zz) {
      if (!zz) return [];
      const tz = new Set,
        sz = [];
      for (const Fz of zz.split(Oz)) {
        const zz = Fz.trim();
        if ((0, Xz.g)(zz) && !tz.has(zz) && (tz.add(zz), sz.push(zz), sz.length >= Wz.n)) break
      }
      return sz
    }

    function vz(zz) {
      const tz = new Set,
        sz = [];
      for (const Fz of zz)
        if ((0, Xz.g)(Fz) && !tz.has(Fz) && (tz.add(Fz), sz.push(Fz), sz.length >= Wz.n)) break;
      return sz.join(Oz)
    }

    function Uz() {
      return vz(Xz.c)
    }

    function Kz(zz) {
      var tz;
      return "emote" === zz ? Uz() : null !== (tz = uz[zz][0]) && void 0 !== tz ? tz : Nz[zz]
    }
    const uz = Wz.u.reduce(((zz, tz) => {
        const sz = [];
        for (const Xz in Fz.h[tz]) {
          var Wz;
          "default" === (null === (Wz = (0, Fz.n)(tz, Xz)) || void 0 === Wz ? void 0 : Wz.cosmeticPack) && sz.push(Xz)
        }
        return zz[tz] = sz, zz
      }), {}),
      Nz = Wz.u.reduce(((zz, tz) => (zz[tz] = Object.keys(Fz.h[tz])[0], zz)), {})
  },
  8279: (zz, tz, sz) => {
    function Fz(zz, tz) {
      return !zz.hidden && (tz || !zz.isRewardedAd)
    }

    function Wz(zz) {
      return "object" === typeof zz ? zz.option : zz
    }

    function Xz(zz, tz) {
      var sz;
      if ("dropdown" === (null === (sz = zz.userInput) || void 0 === sz ? void 0 : sz.type) && "object" === typeof zz.userInput.dropdownOptions[0]) {
        for (const sz of zz.userInput.dropdownOptions)
          if (Wz(sz) === tz) return "object" === typeof sz ? sz.cost : zz.cost;
        console.error("Didn't find matching option for dropdown item. Item:", zz, "input:", tz)
      }
      return zz.cost
    }

    function Oz(zz, tz, sz) {
      var Fz;
      const Wz = null !== (Fz = sz.excludedPlayers) && void 0 !== Fz ? Fz : [tz];
      return zz.filter((zz => !Wz.includes(zz)))
    }
    sz.d(tz, {
      b: () => Xz,
      e: () => Wz,
      i: () => Oz,
      k: () => Fz
    })
  },
  8314: () => {}
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);
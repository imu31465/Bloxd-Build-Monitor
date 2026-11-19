export const id = 150;
export const ids = [150];
export const modules = {
  8459: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Pz,
      e: () => Jz,
      f: () => Az
    });
    var Ez = bz(56),
      nz = bz(4300),
      iz = bz(1114),
      lz = bz(1417),
      Mz = bz(22),
      tz = bz(3174),
      Hz = bz(2136),
      Oz = bz(1226),
      pz = bz(8494),
      dz = bz(1871),
      Fz = bz(1912),
      Zz = bz(1181),
      Rz = bz(20),
      Kz = bz(1595),
      wz = bz(1038),
      Xz = bz.n(wz),
      fz = bz(8466),
      sz = bz(8474),
      rz = bz(8477),
      oz = bz(8371),
      Nz = bz(8481),
      vz = (bz(8488), bz(1089));
    let xz = null;

    function Jz() {
      return null !== xz
    }

    function Az() {
      return "pad" === xz
    }

    function Tz() {
      return "inGame" === Rz.e.get("gameState") && !(0, Kz.l)()
    }

    function Lz(zz) {
      return (0, sz.x)(zz, Oz.o, sz.g, sz.j, sz.k)
    }
    const Pz = (0, Ez.memo)((function() {
      const {
        t: zz
      } = (0, Zz.F)(), {
        userContext: uz
      } = (0, iz.c)(), [bz, Rz] = (0, Ez.useState)(null), [wz, Jz] = (0, Ez.useState)(null), Az = (0, Ez.useRef)(null), Pz = (0, Ez.useCallback)((zz => {
        Az.current = zz, Jz(zz)
      }), []), Gz = (0, Ez.useRef)(0), az = (0, Ez.useRef)(null), Vz = (0, Ez.useRef)({
        x: 0,
        y: 0
      }), [mz, qz] = (0, Ez.useState)(0), hz = (0, Ez.useMemo)((() => function(zz) {
        const uz = [];
        for (let Ez = 0; Ez < Oz.o; Ez++) {
          var bz;
          uz.push(null !== (bz = zz[Ez]) && void 0 !== bz ? bz : null)
        }
        return uz
      }((0, pz.e)(uz.getPlayerCosmetics().emote))), [uz, mz]);
      (0, Fz.d)("cosmeticsUpdated", (zz => {
        zz.some((zz => zz.local && "emote" === zz.kb)) && qz((zz => zz + 1))
      }));
      const Uz = (0, Ez.useRef)(!1),
        cz = (0, Ez.useCallback)((function(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === zz && (0, rz.f)(), Uz.current = uz, Vz.current = {
            x: 0,
            y: 0
          }, Pz(null), Rz(zz)
        }), [Pz]),
        gz = (0, Ez.useCallback)((() => {
          Rz(null), Pz(null), Vz.current = {
            x: 0,
            y: 0
          }
        }), [Pz]),
        Sz = (0, Ez.useCallback)((zz => {
          if (Date.now() < Gz.current) return;
          const uz = (0, Hz.j)(zz),
            bz = !!uz.holdUntilMove,
            Ez = bz ? 600 : Math.ceil(1e3 * uz.animation.animation_length / Hz.d) + 200;
          Gz.current = Date.now() + Ez, az.current = zz, dz.gameBridge.send("playEmote", zz), dz.gameBridge.send("applyTemporaryThirdPerson", bz ? {} : {
            durationMs: Ez
          })
        }), []);
      (0, lz.g)("requestToggleEmoteWheel", (() => {
        null === bz ? Tz() && cz("click") : gz()
      })), (0, lz.g)("requestEmoteWheelHoldOpen", (() => {
        null === bz && Tz() && cz((0, fz.c)() ? "hold" : "click")
      })), (0, lz.g)("requestEmoteWheelPadOpen", (zz => {
        null !== bz || !Tz() || (0, oz.b)() || (0, Nz.o)() || cz("pad", zz)
      })), (0, lz.g)("requestEmoteRepeatLast", (() => {
        if (null !== bz || !Tz() || (0, oz.b)() || (0, Nz.o)()) return;
        const zz = az.current;
        null !== zz && hz.includes(zz) ? Sz(zz) : cz("pad", !0)
      }));
      const yz = () => {
        const zz = Az.current,
          uz = null !== zz ? hz[zz] : null;
        null !== uz && "pad" === bz && Date.now() < Gz.current || (gz(), null !== uz && Sz(uz))
      };
      (0, lz.g)("emoteWheelPadAim", (zz => {
        if ("pad" !== bz) return;
        const uz = (0, sz.E)(zz, Oz.o, Az.current);
        Pz(null !== uz && null !== hz[uz] ? uz : null)
      })), (0, lz.g)("requestEmoteWheelPadCommit", (zz => {
        "pad" !== bz || zz && Uz.current || yz()
      })), (0, lz.g)("appManagerUpdated|activeInputDevice", (zz => {
        null !== bz && "pad" === bz !== ("gamepad" === zz) && gz()
      })), (0, Ez.useLayoutEffect)((() => (xz = bz, (0, tz.A)("emoteWheel", "pad" === bz), Mz.k.sK(tz.r), () => {
        xz = null, (0, tz.A)("emoteWheel", !1), Mz.k.sK(tz.r)
      })), [bz]), (0, lz.g)("requestEmoteWheelHoldRelease", (() => {
        "hold" === bz && yz()
      })), (0, lz.g)("requestEmoteWheelClose", (() => {
        null !== bz && gz()
      })), (0, lz.g)("appManagerUpdated|gameState", (zz => {
        "inGame" !== zz && gz()
      }));
      const Dz = () => {
        (0, Kz.l)() && gz()
      };
      if ((0, lz.g)("appManagerUpdated|openEverythingMenuName", Dz), (0, lz.g)("appManagerUpdated|openInGameMenuName", Dz), (0, lz.g)("pointerLockUpdate", (zz => {
          zz || "hold" !== bz || gz()
        })), (0, Ez.useEffect)((() => {
          if (null === bz) return;
          const zz = zz => {
            "Escape" === zz.key && (zz.stopImmediatePropagation(), zz.preventDefault(), gz())
          };
          return document.addEventListener("keydown", zz, !0), () => {
            document.removeEventListener("keydown", zz, !0)
          }
        }), [bz, gz]), (0, nz.e)(!0, "click" === bz, "EmoteWheelOverlay"), (0, Ez.useEffect)((() => {
          if ("hold" === bz) return dz.gameBridge.send("holdEmoteWheel", !0), () => {
            dz.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [bz]), (0, Ez.useEffect)((() => {
          if ("hold" !== bz) return;
          const zz = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            uz = sz.t * zz,
            Ez = sz.q * zz,
            nz = zz => {
              let bz = Vz.current.x + zz.movementX,
                nz = Vz.current.y + zz.movementY;
              const iz = Math.hypot(bz, nz);
              if (iz > uz) {
                const zz = uz / iz;
                bz *= zz, nz *= zz
              }
              Vz.current = {
                x: bz,
                y: nz
              }, Pz(function(zz, uz, bz, Ez) {
                if (Math.hypot(zz, uz) < bz) return null;
                const nz = (0, sz.z)(zz, uz, Oz.o);
                return null === Ez[nz] ? null : nz
              }(bz, nz, Ez, hz))
            };
          return document.addEventListener("mousemove", nz), () => {
            document.removeEventListener("mousemove", nz)
          }
        }), [bz, hz, Pz]), null === bz) return null;
      const Qz = "hold" === bz || "pad" === bz,
        Wz = null !== wz ? hz[wz] : null,
        ez = null !== Wz ? (0, Hz.j)(Wz).displayName : zz("emotes:pickEmote");
      return (0, vz.jsx)("div", {
        className: Xz()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === bz
        }),
        onMouseDown: zz => {
          zz.target === zz.currentTarget && gz()
        },
        children: (0, vz.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * sz.t + "rem",
            height: 2 * sz.t + "rem"
          },
          children: [(0, vz.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${sz.m} ${sz.m}`,
            children: [hz.map(((uz, bz) => {
              const Ez = null !== uz,
                nz = Qz && bz === wz;
              return (0, vz.jsx)("path", {
                d: Lz(bz),
                className: Xz()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: nz,
                  EmoteWheelWedgeDisabled: !Ez
                }),
                onClick: zz => {
                  zz.stopPropagation(), null !== uz && (zz => {
                    gz(), Sz(zz)
                  })(uz)
                },
                "aria-label": null !== uz ? (0, Hz.j)(uz).displayName : zz("emotes:emptySlot")
              }, bz)
            })), (0, vz.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: sz.g,
              cy: sz.g,
              r: sz.k
            }), (0, vz.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: sz.g,
              cy: sz.g,
              r: sz.j
            }), Qz && null !== wz && (0, vz.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: Lz(wz)
            })]
          }), hz.map(((zz, uz) => {
            const bz = null !== zz,
              Ez = Qz && uz === wz,
              nz = (0, sz.A)(uz, Oz.o),
              iz = sz.e * Math.cos(nz),
              lz = sz.e * Math.sin(nz);
            return (0, vz.jsx)("div", {
              className: Xz()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: Ez,
                EmoteWheelSlotIconDisabled: !bz
              }),
              style: {
                left: `calc(50% + ${iz}rem)`,
                top: `calc(50% + ${lz}rem)`,
                backgroundImage: bz ? `url(/textures/charSkins/previews/emote_${zz}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, uz)
          })), (0, vz.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: ez
          })]
        })
      })
    }))
  },
  8442: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => pz,
      h: () => Zz,
      i: () => Rz,
      l: () => Fz,
      n: () => dz
    });
    var Ez = bz(56),
      nz = bz(8450),
      iz = bz(22),
      lz = bz(1871),
      Mz = bz(33),
      tz = bz(1249),
      Hz = bz(1892);
    const Oz = 50;
    const pz = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = zz => {
          if (0 === this.listeners.size) {
            var uz, bz;
            this.state = {
              ...this.state,
              channel: null !== (uz = null === (bz = Hz.b.get("chatChannels")) || void 0 === bz ? void 0 : bz[0]) && void 0 !== uz ? uz : null
            };
            const zz = iz.k.subscribe("reportPlayer", (zz => {
              let {
                playerEId: uz
              } = zz;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, uz]
              })
            }));
            this.stopListening = [lz.gameBridge.subscribe("chatReceived", (zz => {
              let {
                serverChatMsgId: uz,
                content: bz,
                author: Ez
              } = zz;
              this.addMessage(uz, bz, Ez)
            })), () => {
              iz.k.unsubscribe(zz)
            }, Hz.b.subscribe("chatChannels", (zz => {
              var uz;
              this.setState({
                ...this.state,
                channel: null !== (uz = null === zz || void 0 === zz ? void 0 : zz[0]) && void 0 !== uz ? uz : null
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
      addMessage(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Ez = {
          serverChatMsgId: zz,
          content: uz,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: bz
        };
        this.setState({
          ...this.state,
          messages: [Ez, ...this.state.messages].slice(0, nz.e)
        })
      }
      selectNextChannel() {
        const zz = Hz.b.get("chatChannels");
        if (zz) {
          const uz = zz.findIndex((zz => {
            var uz;
            return zz.channelName === (null === (uz = this.state.channel) || void 0 === uz ? void 0 : uz.channelName)
          }));
          this.setState({
            ...this.state,
            channel: zz[(uz + 1) % zz.length]
          })
        }
      }
      setState(zz) {
        this.state = zz;
        for (const uz of this.listeners) uz()
      }
    };

    function dz() {
      const [zz, uz] = (0, Ez.useState)(pz.getState);
      return (0, Ez.useEffect)((() => {
        const zz = pz.subscribe((() => {
          uz(pz.getState())
        }));
        return uz(pz.getState()), zz
      }), []), zz
    }

    function Fz(zz) {
      var uz, bz;
      if (zz.startsWith("/report")) {
        var Ez;
        const uz = null !== (Ez = zz.replace("/report", "").trim().split(" ")[0]) && void 0 !== Ez ? Ez : "";
        if ("" === uz) return void pz.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const bz = lz.gameBridge.latest("players"),
          nz = lz.gameBridge.latest("hiddenPlayerNames"),
          Mz = zz => {
            var Ez, iz;
            const lz = null !== (Ez = null === (iz = bz.byId[zz]) || void 0 === iz ? void 0 : iz.name) && void 0 !== Ez ? Ez : null;
            return null !== lz && (lz === uz || (0, tz.b)(lz, nz) === uz)
          };
        if (null !== bz.localId && Mz(bz.localId)) return void pz.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const zz of bz.ids)
          if (Mz(zz)) return iz.k.sK("OpenReportMenu", {
            playerEId: zz,
            playerName: bz.byId[zz].name,
            zM: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        pz.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      lz.gameBridge.send("sendChatMessage", {
          zM: zz,
          channelName: null !== (uz = null === (bz = pz.getState().channel) || void 0 === bz ? void 0 : bz.channelName) && void 0 !== uz ? uz : null
        }),
        function(zz) {
          var uz;
          const bz = null !== (uz = Mz.g.getItem("recentlySentChatMsgs")) && void 0 !== uz ? uz : [];
          bz.push(zz), bz.length > Oz && bz.shift();
          Mz.g.setItem("recentlySentChatMsgs", bz)
        }(zz)
    }

    function Zz() {
      var zz;
      return null !== (zz = Mz.g.getItem("recentlySentChatMsgs")) && void 0 !== zz ? zz : []
    }

    function Rz(zz) {
      var uz;
      let bz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Ez = null !== (uz = Mz.g.getItem("recentlySentChatMsgs")) && void 0 !== uz ? uz : [],
        nz = Ez.length + 1,
        iz = bz ? (zz % nz + nz) % nz : Math.min(Ez.length, Math.max(0, zz));
      return {
        stepsBack: iz,
        text: 0 === iz ? "" : Ez[Ez.length - iz]
      }
    }
  },
  8402: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => lz,
      e: () => iz
    });
    var Ez = bz(1934);
    const nz = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      iz = zz => "string" === typeof zz.icon && "" !== zz.icon && "string" === typeof zz.keycode && nz.test(zz.keycode),
      lz = zz => "Space" === zz ? "_" : Ez.k[zz]
  },
  8466: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz
    });
    var Ez = bz(20);

    function nz() {
      return !Ez.e.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8563: (zz, uz, bz) => {
    function Ez(zz) {
      return {
        x: (zz.left + zz.right) / 2,
        y: (zz.top + zz.bottom) / 2
      }
    }

    function nz(zz) {
      return 0 === zz.length ? null : zz.reduce(((zz, uz) => ({
        left: Math.min(zz.left, uz.left),
        top: Math.min(zz.top, uz.top),
        right: Math.max(zz.right, uz.right),
        bottom: Math.max(zz.bottom, uz.bottom)
      })))
    }

    function iz(zz, uz) {
      const bz = Math.max(0, (uz - (zz.right - zz.left)) / 2),
        Ez = Math.max(0, (uz - (zz.bottom - zz.top)) / 2);
      return {
        left: zz.left - bz,
        top: zz.top - Ez,
        right: zz.right + bz,
        bottom: zz.bottom + Ez
      }
    }

    function lz(zz, uz) {
      return uz.x >= zz.left && uz.x <= zz.right && uz.y >= zz.top && uz.y <= zz.bottom
    }

    function Mz(zz, uz, bz) {
      let nz = null,
        Mz = 1 / 0;
      for (const {
          id: Ez,
          box: iz
        }
        of uz) {
        const uz = (iz.right - iz.left) * (iz.bottom - iz.top);
        lz(iz, zz) && uz < Mz && (Mz = uz, nz = Ez)
      }
      if (null !== nz) return nz;
      let tz = 1 / 0;
      for (const {
          id: Hz,
          box: Oz
        }
        of uz) {
        if (!lz(iz(Oz, bz), zz)) continue;
        const uz = Ez(Oz),
          Mz = Math.hypot(zz.x - uz.x, zz.y - uz.y);
        Mz < tz && (tz = Mz, nz = Hz)
      }
      return nz
    }

    function tz(zz, uz, bz) {
      return {
        left: bz.left,
        top: bz.top,
        right: zz - bz.right,
        bottom: uz - bz.bottom
      }
    }

    function Hz(zz, uz, bz, Ez) {
      const nz = (zz, uz, bz) => Math.max(Math.min(uz, 0), Math.min(Math.max(bz, 0), zz));
      return {
        x: nz(uz, Ez.left - zz.left, Ez.right - zz.right),
        y: nz(bz, Ez.top - zz.top, Ez.bottom - zz.bottom)
      }
    }

    function Oz(zz, uz, bz, Ez, nz) {
      const iz = zz.dx * Ez + uz,
        lz = zz.dy * nz + bz,
        Mz = zz => Math.max(-1, Math.min(1, zz));
      return {
        dx: Mz(iz / Ez),
        dy: Mz(lz / nz)
      }
    }

    function pz(zz, uz, bz, Ez) {
      return uz <= 0 || bz <= 0 ? 1 : Math.max(.05, Math.min(1, zz / uz, Ez / bz))
    }

    function dz(zz, uz, bz) {
      return Math.min(zz.right, uz.right) - Math.max(zz.left, uz.left) > bz && Math.min(zz.bottom, uz.bottom) - Math.max(zz.top, uz.top) > bz
    }

    function Fz(zz, uz) {
      const bz = (zz, uz, bz, Ez) => uz - zz > Ez - bz ? bz - zz > uz - Ez ? Ez - uz : bz - zz : zz < bz ? bz - zz : uz > Ez ? Ez - uz : 0;
      return {
        x: bz(zz.left, zz.right, uz.left, uz.right),
        y: bz(zz.top, zz.bottom, uz.top, uz.bottom)
      }
    }

    function Zz(zz, uz) {
      let {
        avoid: bz = null,
        bounds: Ez = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, nz = 0, iz = 1 / 0;
      return zz.forEach(((zz, lz) => {
        const Mz = uz.filter((uz => dz(zz, uz, 0))).length,
          tz = null !== Ez && (zz.left < Ez.left || zz.top < Ez.top || zz.right > Ez.right || zz.bottom > Ez.bottom),
          Hz = Mz + (bz && dz(zz, bz, 0) ? 1e3 : 0) + (tz ? 1e6 : 0);
        Hz < iz && (nz = lz, iz = Hz)
      })), nz
    }
    bz.d(uz, {
      e: () => Ez,
      h: () => lz,
      i: () => dz,
      l: () => Hz,
      n: () => iz,
      o: () => Zz,
      p: () => Oz,
      q: () => Mz,
      r: () => pz,
      u: () => tz,
      w: () => Fz,
      x: () => nz
    })
  },
  8474: (zz, uz, bz) => {
    bz.d(uz, {
      A: () => Oz,
      C: () => dz,
      E: () => Fz,
      e: () => iz,
      g: () => Mz,
      j: () => Hz,
      k: () => tz,
      m: () => lz,
      q: () => nz,
      t: () => Ez,
      x: () => Zz,
      z: () => pz
    });
    const Ez = 14,
      nz = 6,
      iz = (Ez + nz) / 2,
      lz = 200,
      Mz = lz / 2,
      tz = lz / 2 - 1,
      Hz = nz / Ez * (lz / 2),
      Oz = (zz, uz) => -Math.PI / 2 + 2 * zz * Math.PI / uz,
      pz = (zz, uz, bz) => {
        const Ez = 2 * Math.PI / bz;
        return (Math.round((Math.atan2(uz, zz) + Math.PI / 2) / Ez) % bz + bz) % bz
      },
      dz = .5,
      Fz = (zz, uz, bz) => Math.hypot(zz.x, zz.y) < dz ? bz : pz(zz.x, zz.y, uz),
      Zz = (zz, uz, bz, Ez, nz) => {
        const iz = Math.PI / uz,
          lz = Oz(zz, uz),
          Mz = lz - iz,
          tz = lz + iz,
          Hz = (zz, uz) => `${bz+zz*Math.cos(uz)} ${bz+zz*Math.sin(uz)}`;
        return [`M ${Hz(Ez,Mz)}`, `L ${Hz(nz,Mz)}`, `A ${nz} ${nz} 0 0 1 ${Hz(nz,tz)}`, `L ${Hz(Ez,tz)}`, `A ${Ez} ${Ez} 0 0 0 ${Hz(Ez,Mz)}`, "Z"].join(" ")
      }
  },
  8514: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz
    });
    var Ez = bz(56),
      nz = bz(8427),
      iz = bz(2313);

    function lz() {
      const zz = (0, iz.g)("shopInfo"),
        [, uz] = (0, Ez.useReducer)((zz => zz + 1), 0);
      return (0, iz.f)("shopInfo", uz), !(0, nz.e)(zz)
    }
  },
  8396: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz,
      h: () => lz,
      l: () => Mz,
      m: () => nz
    });
    var Ez = bz(8402);
    const nz = zz => {
        const uz = [];
        zz.holdingGun && uz.push({
          kind: "reload"
        }), zz.touchscreenActionButton && uz.push({
          kind: "touchButton",
          label: zz.touchscreenActionButton
        });
        for (const iz of null !== (bz = null === (nz = zz.customButtons) || void 0 === nz ? void 0 : nz.filter(Ez.e)) && void 0 !== bz ? bz : []) {
          var bz, nz;
          uz.push({
            kind: "customButton",
            id: iz.id,
            icon: iz.icon,
            description: iz.description
          })
        }
        return uz
      },
      iz = zz => zz.length >= 2,
      lz = zz => "specialAction" !== zz.kind,
      Mz = (zz, uz) => {
        if (null === zz || null === uz) return zz === uz;
        if (zz.kind !== uz.kind) return !1;
        switch (zz.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return zz.action === uz.action;
          case "customButton":
            return zz.id === uz.id && zz.icon === uz.icon;
          case "touchButton":
            return zz.label === uz.label
        }
      }
  },
  8387: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Oz,
      h: () => Fz,
      k: () => pz,
      n: () => Zz
    });
    var Ez = bz(56),
      nz = bz(22),
      iz = bz(1417),
      lz = bz(8396),
      Mz = bz(8407);
    let tz = null;
    const Hz = () => tz,
      Oz = zz => {
        (0, lz.l)(tz, zz) || (tz = zz, nz.k.sK(Mz.f, tz))
      },
      pz = () => {
        const [zz, uz] = (0, Ez.useState)(Hz);
        return (0, iz.g)(Mz.f, uz), zz
      };
    let dz = !1;
    const Fz = zz => {
        zz !== dz && (dz = zz, nz.k.sK(Mz.i, zz))
      },
      Zz = () => {
        const [zz, uz] = (0, Ez.useState)(dz);
        return (0, iz.g)(Mz.i, uz), zz
      }
  },
  8407: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      f: () => Ez,
      i: () => nz,
      j: () => Mz,
      m: () => tz,
      q: () => Hz,
      u: () => lz
    });
    const Ez = "controllerActionHintChanged",
      nz = "controllerActionWheelHintChanged",
      iz = "controllerOpenChat",
      lz = "controllerSneakToggledChanged",
      Mz = "controllerAttackLatchedChanged",
      tz = "controllerDropStackHoldChanged",
      Hz = "controllerPickBlockHintChanged"
  },
  8349: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz,
      e: () => iz,
      i: () => tz,
      k: () => Mz
    });
    var Ez = bz(1417),
      nz = bz(1377);
    const iz = "controllerInventoryCursorChanged",
      lz = {
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
      Mz = () => {
        var zz, uz;
        return (0, Ez.h)(iz, null !== (zz = null === (uz = (0, nz.f)()) || void 0 === uz ? void 0 : uz.getInventoryCursorState()) && void 0 !== zz ? zz : lz)
      },
      tz = () => {
        var zz, uz;
        return null !== (zz = null === (uz = (0, nz.f)()) || void 0 === uz ? void 0 : uz.isPadSteppingSlots()) && void 0 !== zz && zz
      }
  },
  8342: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => dz,
      d: () => Mz,
      g: () => tz,
      h: () => lz,
      j: () => iz,
      n: () => Oz,
      r: () => pz
    });
    let Ez = null;
    const nz = new Set,
      iz = zz => (Ez = zz, () => {
        if (Ez === zz) {
          Ez = null;
          for (const zz of nz) zz()
        }
      }),
      lz = zz => (nz.add(zz), () => {
        nz.delete(zz)
      }),
      Mz = () => Ez,
      tz = () => null !== Ez;
    let Hz = null;
    const Oz = zz => {
        Hz = zz
      },
      pz = () => {
        const zz = Hz;
        return Hz = null, zz
      },
      dz = (zz, uz) => {
        var bz, Ez;
        return null !== (bz = null !== (Ez = zz.find((zz => zz.element === uz))) && void 0 !== Ez ? Ez : zz.find((zz => zz.element.contains(uz)))) && void 0 !== bz ? bz : null
      }
  },
  8356: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => iz,
      g: () => lz
    });
    var Ez = bz(56);
    const nz = new WeakMap,
      iz = zz => {
        var uz, bz;
        return null !== (uz = null === (bz = nz.get(zz)) || void 0 === bz ? void 0 : bz.current) && void 0 !== uz ? uz : null
      },
      lz = (zz, uz) => {
        const bz = (0, Ez.useRef)(uz);
        bz.current = uz;
        const iz = (0, Ez.useRef)(null);
        (0, Ez.useEffect)((() => {
          const uz = zz.current,
            Ez = iz.current;
          uz !== Ez && (Ez && nz.get(Ez) === bz && nz.delete(Ez), iz.current = uz, uz && nz.set(uz, bz))
        })), (0, Ez.useEffect)((() => () => {
          const zz = iz.current;
          zz && nz.get(zz) === bz && nz.delete(zz), iz.current = null
        }), [])
      }
  },
  8499: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Mz,
      e: () => Hz,
      f: () => pz,
      i: () => Oz,
      m: () => tz,
      q: () => Fz
    });
    var Ez = bz(22),
      nz = bz(1949),
      iz = bz(1377),
      lz = bz(1362);
    const Mz = zz => {
        var uz, bz;
        return (0, lz.f)() && null !== (uz = null === (bz = (0, iz.f)()) || void 0 === bz ? void 0 : bz.getGlyphForNoaAction(zz)) && void 0 !== uz ? uz : null
      },
      tz = "controllerGlyph:",
      Hz = zz => {
        var uz, bz;
        return null !== (uz = null === (bz = (0, iz.f)()) || void 0 === bz ? void 0 : bz.getPadGlyphIconName(zz)) && void 0 !== uz ? uz : `${tz}xbox/${zz}`
      },
      Oz = zz => zz.startsWith(tz),
      pz = zz => {
        var uz, bz;
        return Oz(zz) && null !== (uz = null === (bz = (0, iz.f)()) || void 0 === bz ? void 0 : bz.getPadGlyphIconUrl(zz)) && void 0 !== uz ? uz : null
      },
      dz = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", lz.e, nz.e, nz.c],
      Fz = zz => {
        const uz = dz.map((uz => Ez.k.subscribe(uz, zz)));
        return () => {
          for (const zz of uz) Ez.k.unsubscribe(zz)
        }
      }
  },
  8337: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz,
      d: () => Ez
    });
    const Ez = "controllerOpenKeyboard",
      nz = "controllerKeyboardVisible"
  },
  8378: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      e: () => nz
    });
    let Ez = null;
    const nz = function(zz) {
        const uz = {
          cycle: zz,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Ez = uz, () => {
          Ez === uz && (Ez = null)
        }
      },
      iz = () => {
        var zz;
        return null !== (zz = Ez) && void 0 !== zz && zz.canCycle() ? Ez.cycle : null
      }
  },
  8481: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz,
      f: () => lz,
      g: () => iz,
      h: () => Ez,
      l: () => Mz,
      o: () => Hz,
      p: () => Oz
    });
    const Ez = "controllerActionWheelOpen",
      nz = "controllerActionWheelAim",
      iz = "controllerActionWheelCommit",
      lz = "controllerActionWheelClose",
      Mz = "controllerActionWheelPick";
    let tz = !1;
    const Hz = () => tz,
      Oz = zz => {
        tz = zz
      }
  },
  8477: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      f: () => nz
    });
    let Ez = 0;
    const nz = () => {
        Ez++
      },
      iz = () => Ez
  },
  8371: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => tz,
      f: () => nz,
      j: () => lz,
      n: () => iz,
      p: () => Ez,
      r: () => Hz
    });
    const Ez = "controllerQuickChatWheelOpen",
      nz = "controllerQuickChatWheelAim",
      iz = "controllerQuickChatWheelCommit",
      lz = "controllerQuickChatWheelClose";
    let Mz = !1;
    const tz = () => Mz,
      Hz = zz => {
        Mz = zz
      }
  },
  8554: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Mz,
      e: () => tz
    });
    var Ez = bz(20),
      nz = bz(1296),
      iz = bz(96);
    const lz = {
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

    function Mz() {
      return (0, iz.isMobile)() && "function" === typeof navigator.vibrate
    }
    const tz = new class {
      constructor(zz) {
        this.deps = zz, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(zz, uz) {
        var bz;
        if (!this.deps.enabled()) return;
        const Ez = lz[zz],
          nz = null !== uz && void 0 !== uz ? uz : Ez.pattern;
        if (null === nz) return void console.warn("No vibration pattern for", zz);
        const iz = this.deps.now();
        iz - this.lastAnyAt < 40 && Ez.priority < this.playingPriority || iz - (null !== (bz = this.lastAt.get(zz)) && void 0 !== bz ? bz : -1 / 0) < Ez.minGapMs || iz < this.playingUntil && Ez.priority < this.playingPriority || (this.lastAt.set(zz, iz), this.lastAnyAt = iz, this.playingUntil = iz + nz.reduce(((zz, uz) => zz + uz), 0), this.playingPriority = Ez.priority, this.deps.vibrate(nz))
      }
    }({
      vibrate: zz => {
        navigator.vibrate([...zz])
      },
      now: () => performance.now(),
      enabled: () => Mz() && Ez.e.get("isTouchScreen") && Ez.e.get("clientEscMenuOptions").vibration && !(0, nz.d)()
    })
  },
  8427: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz
    });
    var Ez = bz(8434),
      nz = bz(588),
      iz = bz(128);

    function lz(zz) {
      var uz, bz;
      if ((0, nz.F)(zz)) return !0;
      const lz = null !== (uz = null === (bz = iz.r[iz.x]) || void 0 === bz ? void 0 : bz.adConfig.showRewardedAds) && void 0 !== uz && uz;
      for (const nz in zz) {
        const uz = zz[nz];
        if (null !== uz && void 0 !== uz && uz.items)
          for (const zz in uz.items)
            if ((0, Ez.j)(uz.items[zz], lz)) return !1
      }
      return !0
    }
  },
  8450: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz,
      e: () => Ez
    });
    const Ez = 100;

    function nz(zz) {
      let {
        translationKeys: uz = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return zz.map((zz => {
        var bz;
        return null !== (bz = function(zz, uz) {
          if ("string" === typeof zz) return zz;
          const bz = "str" in zz ? zz.str : zz;
          if ("string" === typeof bz) return bz;
          if ("entityName" in bz) return bz.entityName;
          if (uz && "translationKey" in bz) return `{${bz.translationKey}${void 0===bz.params?"":` ${JSON.stringify(bz.params)}`}}`;
          return null
        }(zz, uz)) && void 0 !== bz ? bz : " "
      })).join("")
    }
  },
  8494: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Oz,
      e: () => Mz,
      g: () => tz
    });
    var Ez = bz(2132),
      nz = bz(1226),
      iz = bz(2136);
    const lz = ",";

    function Mz(zz) {
      if (!zz) return [];
      const uz = new Set,
        bz = [];
      for (const Ez of zz.split(lz)) {
        const zz = Ez.trim();
        if ((0, iz.l)(zz) && !uz.has(zz) && (uz.add(zz), bz.push(zz), bz.length >= nz.o)) break
      }
      return bz
    }

    function tz(zz) {
      const uz = new Set,
        bz = [];
      for (const Ez of zz)
        if ((0, iz.l)(Ez) && !uz.has(Ez) && (uz.add(Ez), bz.push(Ez), bz.length >= nz.o)) break;
      return bz.join(lz)
    }

    function Hz() {
      return tz(iz.g)
    }

    function Oz(zz) {
      var uz;
      return "emote" === zz ? Hz() : null !== (uz = pz[zz][0]) && void 0 !== uz ? uz : dz[zz]
    }
    const pz = nz.u.reduce(((zz, uz) => {
        const bz = [];
        for (const iz in Ez.h[uz]) {
          var nz;
          "default" === (null === (nz = (0, Ez.m)(uz, iz)) || void 0 === nz ? void 0 : nz.cosmeticPack) && bz.push(iz)
        }
        return zz[uz] = bz, zz
      }), {}),
      dz = nz.u.reduce(((zz, uz) => (zz[uz] = Object.keys(Ez.h[uz])[0], zz)), {})
  },
  8434: (zz, uz, bz) => {
    function Ez(zz, uz) {
      return !zz.hidden && (uz || !zz.isRewardedAd)
    }

    function nz(zz) {
      return "object" === typeof zz ? zz.option : zz
    }

    function iz(zz, uz) {
      var bz;
      if ("dropdown" === (null === (bz = zz.userInput) || void 0 === bz ? void 0 : bz.type) && "object" === typeof zz.userInput.dropdownOptions[0]) {
        for (const bz of zz.userInput.dropdownOptions)
          if (nz(bz) === uz) return "object" === typeof bz ? bz.cost : zz.cost;
        console.error("Didn't find matching option for dropdown item. Item:", zz, "input:", uz)
      }
      return zz.cost
    }

    function lz(zz, uz, bz) {
      var Ez;
      const nz = null !== (Ez = bz.excludedPlayers) && void 0 !== Ez ? Ez : [uz];
      return zz.filter((zz => !nz.includes(zz)))
    }
    bz.d(uz, {
      b: () => iz,
      e: () => nz,
      f: () => lz,
      j: () => Ez
    })
  },
  8488: () => {}
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);
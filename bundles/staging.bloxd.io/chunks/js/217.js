export const id = 217;
export const ids = [217];
export const modules = {
  36329: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Yz,
      g: () => rz
    });
    var Fz = sz(3948),
      Wz = sz(1416),
      Xz = sz(65),
      Oz = sz(6057),
      oz = sz(3930),
      vz = sz(1269),
      Uz = sz(1857),
      Kz = sz(1831),
      uz = sz(1419),
      Nz = sz(1173),
      bz = sz(36336),
      wz = sz(1020),
      Dz = sz.n(wz),
      gz = sz(1287),
      Hz = sz(1036),
      Bz = sz(1264),
      Pz = sz(1087);
    const rz = "SleepingOverlay";

    function Yz() {
      const {
        t: zz
      } = (0, Nz.B)(), [tz, sz] = (0, Xz.useState)(!1), [wz, Yz] = (0, Xz.useState)(null), [mz, Jz] = (0, Xz.useState)(1), [Iz, Cz] = (0, Xz.useState)(!1), [ez, Zz] = (0, Xz.useState)(!1), Gz = (0, Xz.useRef)(0), Tz = (0, Xz.useRef)(!1), cz = (0, Xz.useRef)(!1), jz = (0, Xz.useRef)(), Az = (0, Xz.useRef)(null);

      function yz() {
        const zz = null !== wz && void 0 !== wz ? wz : "Rested Speed";
        Uz.gameBridge.send("wakeUp", ez ? zz : null), Az.current = null, sz(!1), Yz(null), Jz(1), Cz(!1), Zz(!1)
      }

      function Mz() {
        return !Iz && (yz(), !0)
      }
      return (0, Wz.g)("PlayerPhysicsTypeUpdate", (zz => {
        zz !== Az.current && (Az.current = zz, zz === Oz.r.SLEEPING ? (cz.current || (Gz.current = Uz.gameBridge.lookup("cameraZoom", null), cz.current = !0), Tz.current = !0, Uz.gameBridge.send("setCameraZoom", 3), sz(!0), Jz(function() {
          for (const zz of Uz.gameBridge.lookup("blocksStandingOn", null)) {
            if (bz.c.leafBeds.includes(zz)) return console.log(`Found leaf bed: ${zz}`), 1;
            if (bz.c.woolBeds.includes(zz)) return console.log(`Found woold bed: ${zz}`), 2;
            if (bz.c.strongBeds.includes(zz)) return console.log(`Found strong bed ${zz}`), 3
          }
          return 1
        }())) : (cz.current = !1, sz(!1), Yz(null), Jz(1)))
      })), (0, Xz.useEffect)((() => () => {
        (0, vz.m)(rz)
      }), []), (0, Xz.useEffect)((() => {
        tz ? (0, vz.n)(rz) : ((0, vz.m)(rz), Tz.current && (Uz.gameBridge.send("setCameraZoom", Gz.current), Tz.current = !1))
      }), [tz]), (0, Bz.s)("overlay", jz, Mz, tz), (0, Pz.jsx)(Fz.d, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: tz,
        timeout: 300,
        nodeRef: jz,
        unmountOnExit: !0,
        children: (0, Pz.jsx)("div", {
          ref: jz,
          onClick: zz => {
            Mz() && zz.stopPropagation()
          },
          children: (0, Pz.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Pz.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: oz.i.map((tz => (0, Pz.jsxs)(xz, {
                restedEffect: tz,
                ko: wz,
                setChosenRestedEffect: Yz,
                children: [(0, Pz.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Pz.jsx)(Kz.c, {
                    text: [{
                      icon: tz
                    }]
                  }), oz.f[tz].shortName]
                }), (0, Pz.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: zz(oz.f[tz].description, {
                    time: oz.f[tz].effectLevelDurations[mz] / 6e4
                  })
                })]
              }, tz)))
            }), (0, Pz.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Pz.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Pz.jsxs)(uz.h, {
                className: "SleepingOverlayWakeUpButton",
                onClick: zz => {
                  ez ? yz() : (Cz(!0), (0, gz.gb)((() => {
                    Cz(!1), Zz(!0)
                  }), !0)), zz.stopPropagation()
                },
                loading: Iz,
                children: [!ez && (0, Pz.jsxs)(Pz.Fragment, {
                  children: [(0, Pz.jsx)(Hz.c, {
                    name: "film"
                  }), " ", zz("classicGame:watchAdToGetRestedPerk")]
                }), ez && zz("classicGame:wakeUp")]
              }), (0, Pz.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Pz.jsx)("div", {
                  className: Dz()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === mz
                  }),
                  children: (0, Pz.jsx)(Kz.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Pz.jsx)("div", {
                  className: Dz()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === mz
                  }),
                  children: (0, Pz.jsx)(Kz.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Pz.jsx)("div", {
                  className: Dz()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === mz
                  }),
                  children: (0, Pz.jsx)(Kz.c, {
                    text: [{
                      icon: "Red Strongbed"
                    }]
                  })
                })]
              })]
            })]
          })
        })
      })
    }
    const xz = (0, Xz.memo)((function(zz) {
      let {
        children: tz,
        restedEffect: sz,
        ko: Fz,
        setChosenRestedEffect: Wz
      } = zz;
      return sz === Fz ? (0, Pz.jsx)(uz.p, {
        onClick: zz => {
          zz.stopPropagation()
        },
        children: tz
      }) : (0, Pz.jsx)(uz.l, {
        onClick: zz => {
          Wz(sz), zz.stopPropagation()
        },
        children: tz
      })
    }))
  },
  39702: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Sz
    });
    var Fz = sz(30),
      Wz = sz(34),
      Xz = sz(3967),
      Oz = sz(308),
      oz = sz(1571),
      vz = sz(7682),
      Uz = sz(3976),
      Kz = sz(8218),
      uz = sz(7717),
      Nz = sz(7691),
      bz = sz(7724),
      wz = sz(1628),
      Dz = sz(7731),
      gz = sz(8186),
      Hz = sz(8302),
      Bz = sz(8230),
      Pz = sz(8310),
      rz = sz(1857),
      Yz = sz(7674),
      xz = sz(8255),
      mz = sz(8253),
      Jz = sz(8227);
    class Iz {
      constructor() {
        this.lostAtMs = null
      }
      update(zz, tz) {
        return zz ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= tz, tz - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class Cz {
      constructor(zz, tz) {
        this.press = zz, this.release = tz, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(zz, tz, sz, Fz) {
        if (zz && null === this.downAtMs) return this.downAtMs = sz, this.latched = Fz, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? zz && this.end() : !tz && sz - this.downAtMs >= 40 && this.end())
      }
      isLatched() {
        return null !== this.downAtMs && this.latched
      }
      unlatch() {
        this.latched = !1
      }
      cancel() {
        null !== this.downAtMs && this.end()
      }
      end() {
        const zz = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(zz)
      }
    }
    const ez = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      Zz = zz => {
        let tz = null;
        const sz = new Jz.e,
          Fz = () => {
            tz && (((zz, tz, sz) => {
              switch (sz.kind) {
                case "reload":
                  return void tz.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void tz.specialActionUp(sz.action);
                case "customButton":
                  return void rz.gameBridge.send("pressCustomButton", {
                    id: sz.id,
                    down: !1
                  });
                case "touchButton":
                  zz.pressTouchButton(!1)
              }
            })(zz, tz.bodies, tz.action), tz = null)
          },
          Xz = (sz, Wz, Xz, Oz) => {
            Fz(), tz = {
              action: Wz,
              bodies: sz,
              heldBy: Xz,
              atMs: Oz
            }, ((zz, tz, sz) => {
              switch (sz.kind) {
                case "reload":
                  return tz.reloadGun(), void tz.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void tz.specialActionDown(sz.action);
                case "customButton":
                  return void rz.gameBridge.send("pressCustomButton", {
                    id: sz.id,
                    down: !0
                  });
                case "touchButton":
                  zz.pressTouchButton(!0)
              }
            })(zz, sz, Wz)
          };
        return {
          update: (Oz, oz, Uz, Kz) => {
            var Nz;
            const bz = (0, xz.j)(zz.contextActionInputs()),
              wz = null !== (Nz = bz[0]) && void 0 !== Nz ? Nz : ez;
            (0, mz.e)((0, xz.f)(wz) ? wz : null);
            const Dz = (0, xz.d)(bz);
            (0, mz.f)(Dz);
            const gz = (0, vz.f)("actionButton");
            if (Dz) {
              const zz = sz.update(oz.wasPressed(gz), oz.isHeld(gz), Uz, Kz);
              "tap" === zz ? Xz(Oz, wz, [gz], Uz) : "hold" === zz && (uz.c.consumeButton(gz), Wz.o.Yg(Pz.k, bz))
            } else sz.release(), oz.wasPressed(gz) && Xz(Oz, wz, [gz], Uz);
            tz && Uz - tz.atMs >= 40 && !tz.heldBy.some((zz => (0, Yz.I)(oz.frame.values, zz))) && Fz()
          },
          pressPicked: (zz, tz) => {
            Xz(zz, tz, [(0, vz.f)("menuConfirm"), (0, vz.f)("actionButton")], performance.now())
          },
          release: () => {
            sz.release(), Fz(), (0, mz.e)(null), (0, mz.f)(!1)
          }
        }
      };
    var Gz = sz(7665);
    var Tz = sz(39694),
      cz = sz(8261),
      jz = sz(7713),
      Az = sz(8345);
    var yz = sz(39688),
      Mz = sz(8351),
      dz = sz(39707),
      hz = sz(8325),
      Qz = sz(8263),
      kz = sz(8266),
      iz = sz(8271),
      Lz = sz(8195);
    const lz = () => Lz.c[(0, Nz.k)().tapHoldTime].wheelMs,
      nz = () => ((0, Kz.c)(), new Event("controllerMenuKey")),
      az = (zz, tz, sz) => new Cz((() => {
        const sz = zz.bodies();
        return {
          bodies: sz,
          press: tz(sz)
        }
      }), (zz => {
        let {
          bodies: tz,
          press: Fz
        } = zz;
        sz(tz, Fz)
      })),
      qz = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      Sz = zz => {
        const tz = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let sz = qz;
        const Kz = new dz.e,
          rz = Wz.o.subscribe("appManagerUpdated|activeInputDevice", (tz => {
            zz.deviceChanged(tz)
          }));
        let xz = null,
          mz = 0;
        const Cz = () => {
          xz = null, (0, Qz.g)(null)
        };
        let ez = !1;
        const Sz = new Iz,
          Vz = zz.look,
          Rz = new Jz.e,
          pz = new Jz.e,
          fz = Zz(zz),
          Ez = Wz.o.subscribe(Pz.l, (tz => {
            fz.pressPicked(zz.bodies(), tz)
          })),
          zt = az(zz, (zz => zz.primaryFireDown()), ((zz, tz) => {
            zz.primaryFireUp(tz)
          })),
          tt = az(zz, (zz => zz.altFireDown()), ((zz, tz) => {
            zz.altFireUp(tz)
          }));
        let st = !1,
          Ft = !1,
          Wt = !1;
        const Xt = (0, gz.e)(Yz.W),
          Ot = (0, gz.e)(Yz.W),
          ot = new Jz.e;
        let vt = !1;
        const Ut = () => {
            Xt.reset(), Ot.reset(), ot.release(), (0, iz.g)(!1), Vz.release(), zt.cancel(), (0, kz.f)(!1), tt.cancel(), fz.release(), Rz.release(), pz.release(), Cz()
          },
          Kt = function() {
            let Fz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            Ut(), Ft = !1, Fz || (st = !1, sz = qz, Object.assign(tz, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), zz.stopMoving())
          },
          ut = function(Fz, Wz, Xz) {
            let Oz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const oz = (0, Nz.k)(),
              Uz = (0, yz.e)(Wz, oz.moveDeadzone),
              uz = (0, vz.f)("sprint");
            sz = (0, yz.s)(sz, {
              sprintPressed: Fz.wasPressed(uz),
              magnitude: Uz.magnitude,
              autoSprint: oz.autoSprint,
              nowMs: Xz
            }), tz.running = sz.running, tz.sprintHeld = Fz.isHeld(uz), tz.x = Uz.x, tz.y = Uz.y, tz.magnitude = Uz.speed, tz.headingOffset = Uz.headingOffset, st = Uz.magnitude > 0;
            const bz = (0, vz.f)("jump");
            if (tz.jumpHeld = Fz.isHeld(bz), tz.jumpPressed = Fz.wasPressed(bz), tz.jumpPressed && zz.bodies().jumpDown(), Oz) return void zz.move(tz, null);
            const wz = (0, vz.f)("sneak"),
              Dz = Kz.filter({
                sneakHeld: Fz.isHeld(wz),
                sneakPressed: Fz.wasPressed(wz),
                sneakTogglePressed: Fz.wasPressed((0, vz.f)("sneakToggle"))
              }, Xz);
            zz.move(tz, {
              ...Dz,
              mode: oz.sneakMode
            })
          },
          Nt = (zz, tz) => {
            const sz = (0, vz.f)("chat");
            if ("off" === (0, Nz.k)().quickChat) return void(zz.wasPressed(sz) && (uz.c.consumeButton(sz), Wz.o.Yg(cz.d)));
            const Fz = Rz.update(zz.wasPressed(sz), zz.isHeld(sz), tz, lz());
            "tap" === Fz || "hold" === Fz && null === (0, wz.c)() ? Wz.o.Yg(cz.d) : "hold" === Fz && (uz.c.consumeButton(sz), Wz.o.Yg(Bz.o))
          },
          bt = (tz, sz) => {
            ((zz, tz) => {
              const sz = (0, Hz.e)(),
                Fz = (0, vz.f)("emoteWheel");
              if ("wheel" === (0, Nz.k)().emoteButton) return zz.wasPressed(Fz) && (uz.c.consumeButton(Fz), Wz.o.Yg("requestEmoteWheelPadOpen", !0)), (0, Hz.e)() !== sz;
              const Xz = pz.update(zz.wasPressed(Fz), zz.isHeld(Fz), tz, lz());
              return "tap" === Xz ? Wz.o.Yg("requestEmoteRepeatLast") : "hold" === Xz && (uz.c.consumeButton(Fz), Wz.o.Yg("requestEmoteWheelPadOpen", !1)), (0, Hz.e)() !== sz
            })(tz, sz) || Nt(tz, sz), tz.wasPressed((0, vz.f)("inventory")) && (uz.c.consumeButton((0, vz.f)("inventory")), (0, oz.y)(nz(), "inventory", zz.hasFullInventory())), tz.wasPressed((0, vz.f)("pause")) && (uz.c.consumeButton((0, vz.f)("pause")), (0, Uz.e)() === Oz.r.SOCIAL ? (0, oz.w)(nz(), Oz.r.SOCIAL) : (0, oz.j)(nz())), tz.wasPressed((0, vz.f)("leaderboard")) && !(0, Xz.g)() && (uz.c.consumeButton((0, vz.f)("leaderboard")), ((zz, tz) => {
              if ("shop" === (0, jz.c)()) return Wz.o.Yg(Az.i), void(0, oz.w)(zz, Oz.r.SHOP, !0);
              (0, oz.w)(zz, Oz.r.LOBBY_LEADERBOARD, tz)
            })(nz(), zz.hasLobbyLeaderboard()))
          },
          wt = (tz, sz) => {
            const Fz = zz.bodies();
            ((tz, sz) => {
              const Fz = (0, vz.f)("attack"),
                Wz = tz.wasPressed(Fz);
              Wz && !zt.isLatched() && (ez = zz.targetsBlock()), zt.update(Wz, tz.isHeld(Fz), sz, "toggle" === (0, Nz.k)().attackMode), zt.isLatched() && ez ? Sz.update(zz.targetsBlock(), sz) && zt.unlatch() : Sz.reset(), (0, kz.f)(zt.isLatched())
            })(tz, sz), tt.update(tz.wasPressed((0, vz.f)("use")), tz.isHeld((0, vz.f)("use")), sz, !1), Xt.update(tz.isHeld((0, vz.f)("hotbarPrevious")), sz) && zz.scrollHotbar(-1), Ot.update(tz.isHeld((0, vz.f)("hotbarNext")), sz) && zz.scrollHotbar(1), ((tz, sz, Fz) => {
              const Wz = (0, vz.f)("perspective"),
                Xz = (0, vz.f)("pickBlock"),
                Oz = zz.pickBlockAllowed();
              (0, iz.g)(Oz && !vt && zz.targetsBlock());
              const oz = () => {
                sz.pickBlock() && (vt = !0, (0, iz.g)(!1))
              };
              if (!Oz || Xz !== Wz) return ot.release(), tz.wasPressed(Wz) && sz.swapCameraZoom(), void(Oz && tz.wasPressed(Xz) && oz());
              const Uz = ot.update(tz.wasPressed(Xz), tz.isHeld(Xz), Fz, lz());
              "tap" === Uz ? oz() : "hold" === Uz && sz.swapCameraZoom()
            })(tz, Fz, sz), ((tz, sz, Fz) => {
              const Wz = (0, vz.f)("drop");
              if (tz.wasPressed(Wz)) {
                sz.dropItem(!1);
                const zz = (0, Nz.k)();
                "off" !== zz.buttonRepeat && (xz = Fz, mz = Lz.c[zz.tapHoldTime].dropStackMs, (0, Qz.g)(mz))
              }
              null !== xz && (!tz.isHeld(Wz) || zz.selectedSlotEmpty() ? Cz() : Fz - xz >= mz && (Cz(), sz.dropItem(!0)))
            })(tz, Fz, sz), fz.update(Fz, tz, sz, lz()), bt(tz, sz)
          },
          Dt = uz.c.register({
            name: "gameplay",
            isActive: () => {
              const tz = st && "keyboardMouse" === Fz.b.get("activeInputDevice") && !(0, bz.H)(),
                sz = (0, bz.k)() ? [Tz.e] : [];
              return ((0, bz.k)() || tz) && (0, Dz.d)(sz) && zz.hasPlayer()
            },
            onFrame: zz => {
              const tz = performance.now(),
                sz = (0, Nz.k)(),
                Fz = (0, yz.v)(zz, (0, yz.j)(sz, (0, vz.f)("pause"), (0, Mz.b)().isSupported())),
                Wz = (0, yz.g)(Fz, sz.swapSticks);
              return (0, bz.k)() ? (Ft = !1, (0, Dz.d)() ? (Wt = !1, Vz.update(Wz.look, sz, Fz.isHeld((0, vz.f)("use"))), ut(Fz, Wz.move, tz), void wt(Fz, tz)) : (Wt || (Wt = !0, Kz.lostToPadScreen(), Kt()), void Nt(Fz, tz))) : (Ft || (Ut(), Ft = !0), void ut(Fz, Wz.move, tz))
            },
            onDeactivate: zz => {
              (0, bz.k)() && Kz.lostToPadScreen(), Kt(zz)
            },
            onPeekFrame: tz => {
              (0, bz.k)() && (0, Dz.d)(Tz.i) && zz.hasPlayer() ? ut(tz, (0, yz.g)(tz, (0, Nz.k)().swapSticks).move, performance.now(), !0) : Kt()
            }
          }),
          gt = (0, Tz.g)(zz),
          Ht = (() => {
            const zz = Wz.o.subscribe(Gz.c, (zz => {
              !zz && (0, bz.k)() && "inGame" === Fz.b.get("gameState") && Wz.o.Yg("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              Wz.o.unsubscribe(zz)
            }
          })();
        return () => {
          Kt(), zz.uninstall(), (0, hz.g)(!1), (0, iz.g)(!1), Wz.o.unsubscribe(rz), Wz.o.unsubscribe(Ez), Dt(), gt(), Ht(), Vz.uninstall()
        }
      }
  },
  39694: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => wz,
      g: () => gz,
      i: () => bz
    });
    var Fz = sz(1269),
      Wz = sz(3967),
      Xz = sz(8291),
      Oz = sz(36329),
      oz = sz(1658),
      vz = sz(1170),
      Uz = sz(7731),
      Kz = sz(8230),
      uz = sz(8310);
    const Nz = {
        emoteWheel: Xz.g,
        quickChatWheel: Kz.c,
        actionWheel: uz.n
      },
      bz = Object.keys(Nz),
      wz = "dead",
      Dz = zz => (0, Fz.j)().includes(zz),
      gz = zz => {
        const tz = [(0, Uz.i)(wz, (() => zz.hasPlayer() && zz.isPlayerDead())), (0, Uz.i)("sleeping", (() => Dz(Oz.g))), (0, Uz.i)("turnstile", (() => Dz(vz.e))), (0, Uz.i)("videoAd", oz.d), (0, Uz.i)("replay", (() => (0, Wz.g)() || zz.isReplayMode())), (0, Uz.i)("freeCamera", (() => zz.isFreeCameraOn())), ...Object.entries(Nz).map((zz => {
          let [tz, sz] = zz;
          return (0, Uz.i)(tz, sz)
        }))];
        return () => {
          for (const zz of tz) zz()
        }
      }
  },
  39688: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Wz,
      e: () => vz,
      g: () => oz,
      j: () => Kz,
      k: () => Oz,
      o: () => Xz,
      s: () => Uz,
      v: () => uz
    });
    var Fz = sz(7674);
    class Wz {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(zz, tz, sz) {
        const Wz = (0, Fz.k)(zz, tz.lookDeadzone);
        if (Math.hypot(Wz.x, Wz.y) < .9 || Math.abs(Wz.x) < Math.abs(Wz.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = sz);
        const Xz = (Oz = tz.lookSensitivityX, Math.min(1, 100 / Oz));
        var Oz;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (sz - this.fullTiltSinceMs - 250 * Xz) / (200 * Xz)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const Xz = (zz, tz, sz, Wz, Xz) => {
        let Oz = 1;
        return "boost" === sz.lookCurve ? Oz = zz.update(tz, sz, Xz) : zz.reset(),
          function(zz, tz) {
            let {
              yawBoost: sz = 1,
              aiming: Wz = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const Xz = (0, Fz.h)((0, Fz.k)(zz, tz.lookDeadzone), tz.lookCurve),
              Oz = 220 * Math.PI / 180,
              oz = Wz ? tz.aimLookSensitivity / 100 : 1,
              vz = tz.lookSensitivityX / 100 * oz,
              Uz = tz.lookSensitivityY / 100 * oz;
            return {
              yawRadPerSec: Xz.x * Oz * vz * sz * (tz.invertLookX ? -1 : 1),
              pitchRadPerSec: Xz.y * Oz * .7 * Uz * (tz.invertLookY ? -1 : 1)
            }
          }(tz, sz, {
            yawBoost: Oz,
            aiming: Wz
          })
      },
      Oz = (zz, tz) => {
        const sz = Math.max(0, Math.min(250, tz)) / 1e3;
        return {
          mJ: zz.yawRadPerSec * sz,
          eJ: zz.pitchRadPerSec * sz
        }
      },
      oz = (zz, tz) => tz ? {
        move: zz.rightStick,
        look: zz.leftStick
      } : {
        move: zz.leftStick,
        look: zz.rightStick
      },
      vz = (zz, tz) => {
        const sz = (0, Fz.k)(zz, tz),
          Wz = Math.min(1, Math.hypot(sz.x, sz.y));
        return {
          magnitude: Wz,
          speed: Math.min(1, Wz / .8),
          headingOffset: 0 === Wz ? 0 : Math.atan2(sz.x, -sz.y),
          x: sz.x,
          y: sz.y
        }
      },
      Uz = (zz, tz) => {
        let {
          sprintPressed: sz,
          magnitude: Fz,
          autoSprint: Wz,
          nowMs: Xz
        } = tz;
        const Oz = sz ? Xz : zz.latchedAtMs,
          oz = (zz => {
            let {
              running: tz,
              magnitude: sz,
              sprintPressed: Fz,
              autoSprint: Wz
            } = zz;
            return !(sz < .5) && (!!Fz || !!(Wz && sz >= .9) || tz)
          })({
            running: zz.running,
            magnitude: Fz,
            sprintPressed: Xz - Oz <= 1e3,
            autoSprint: Wz
          });
        return {
          running: oz,
          latchedAtMs: oz ? -1 / 0 : Oz
        }
      },
      Kz = (zz, tz, sz) => sz && zz.gyroAiming && "button" === zz.gyroActivation && zz.gyroButton !== tz ? zz.gyroButton : null,
      uz = (zz, tz) => tz ? {
        ...zz,
        isHeld: sz => sz !== tz && zz.isHeld(sz),
        wasPressed: sz => sz !== tz && zz.wasPressed(sz),
        wasReleased: sz => sz !== tz && zz.wasReleased(sz),
        value: sz => sz === tz ? 0 : zz.value(sz)
      } : zz
  },
  39707: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz,
      f: () => Fz
    });
    const Fz = zz => {
      let {
        mode: tz,
        sneakHeld: sz,
        sneakPressed: Fz,
        sneakTogglePressed: Wz,
        descending: Xz,
        canCrouch: Oz,
        toggled: oz
      } = zz;
      return Oz ? Xz ? {
        crouchHeld: sz,
        toggled: !1
      } : "hold" === tz ? {
        crouchHeld: sz,
        toggled: Wz ? !oz : oz
      } : {
        crouchHeld: !1,
        toggled: Fz || Wz ? !oz : oz
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class Wz {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(zz, tz) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = tz, this.graceEndsMs = tz + 500);
        const sz = tz < this.graceEndsMs;
        return sz && (zz.sneakPressed || zz.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, tz + 300))), zz.sneakHeld ? sz && zz.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: zz.sneakHeld && !this.ignoringHeld,
          sneakPressed: zz.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: zz.sneakTogglePressed && !sz
        }
      }
    }
  },
  39683: (zz, tz, sz) => {
    sz(8351)
  },
  39686: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Pz
    });
    var Fz = sz(34),
      Wz = sz(8291),
      Xz = sz(8298),
      Oz = sz(7682),
      oz = sz(7717),
      vz = sz(7691),
      Uz = sz(39688),
      Kz = sz(39694),
      uz = sz(7731),
      Nz = sz(7674),
      bz = sz(8230),
      wz = sz(8310);
    const Dz = [{
        isOpen: Wz.i,
        openButton: () => (0, Oz.f)("emoteWheel"),
        aim: zz => {
          Fz.o.Yg("emoteWheelPadAim", zz)
        },
        commit: zz => {
          Fz.o.Yg("requestEmoteWheelPadCommit", zz)
        },
        close: () => {
          Fz.o.Yg("requestEmoteWheelClose")
        }
      }, {
        isOpen: bz.c,
        openButton: () => (0, Oz.f)("chat"),
        aim: zz => {
          Fz.o.Yg(bz.d, zz)
        },
        commit: zz => {
          Fz.o.Yg(bz.k, zz)
        },
        close: () => {
          Fz.o.Yg(bz.h)
        },
        keptOpenBy: [Kz.e]
      }, {
        isOpen: wz.n,
        openButton: () => (0, Oz.f)("actionButton"),
        aim: zz => {
          Fz.o.Yg(wz.d, zz)
        },
        commit: zz => {
          Fz.o.Yg(wz.j, zz)
        },
        close: () => {
          Fz.o.Yg(wz.f)
        }
      }],
      gz = () => {
        var zz;
        return null !== (zz = Dz.find((zz => zz.isOpen()))) && void 0 !== zz ? zz : null
      },
      Hz = zz => (0, Oz.I)(zz.openButton()),
      Bz = (zz, tz) => !(0, Nz.I)(zz.frame.values, tz),
      Pz = () => {
        let zz = null,
          tz = !1,
          sz = !1;
        return oz.c.register({
          name: "wheel",
          isActive: () => null !== gz(),
          peek: () => {
            const zz = gz();
            return zz && Hz(zz) ? null : {
              over: "gameplay",
              stick: (0, vz.k)().swapSticks ? "right" : "left"
            }
          },
          onFrame: Fz => {
            var Wz;
            const Nz = gz();
            if (!Nz) return;
            if (null !== (0, uz.c)([...Kz.i, ...null !== (Wz = Nz.keptOpenBy) && void 0 !== Wz ? Wz : []])) return void Nz.close();
            const bz = Nz.openButton(),
              wz = (0, Uz.g)(Fz.frame, (0, vz.k)().swapSticks),
              Dz = Hz(Nz) ? wz.move : wz.look;
            zz !== Nz ? (zz = Nz, tz = !Bz(Fz, bz) || Math.hypot(Dz.x, Dz.y) >= Xz.w, sz = !1) : sz && (sz = !1, Bz(Fz, bz) && (tz = !1)), Nz.aim(Dz);
            const Pz = (0, Oz.f)("menuConfirm"),
              rz = (0, Oz.f)("menuBack");
            return Fz.wasPressed(rz) ? (oz.c.consumeButton(rz), void Nz.close()) : Fz.wasPressed(Pz) || Fz.wasPressed(bz) ? (oz.c.consumeButton(Pz), oz.c.consumeButton(bz), void Nz.commit(!1)) : void(tz && Bz(Fz, bz) && (tz = !1, Nz.commit(!0)))
          },
          onDeactivate: () => {
            sz = null !== zz && gz() === zz, sz || (zz = null, tz = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);
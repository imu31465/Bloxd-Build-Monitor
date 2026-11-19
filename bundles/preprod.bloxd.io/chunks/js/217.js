export const id = 217;
export const ids = [217];
export const modules = {
  36361: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => rz,
      g: () => sz
    });
    var Ez = bz(4055),
      nz = bz(1417),
      iz = bz(56),
      lz = bz(6204),
      Mz = bz(4041),
      tz = bz(1269),
      Hz = bz(1871),
      Oz = bz(1846),
      pz = bz(1419),
      dz = bz(1181),
      Fz = bz(36363),
      Zz = bz(1038),
      Rz = bz.n(Zz),
      Kz = bz(1283),
      wz = bz(1047),
      Xz = bz(1266),
      fz = bz(1089);
    const sz = "SleepingOverlay";

    function rz() {
      const {
        t: zz
      } = (0, dz.F)(), [uz, bz] = (0, iz.useState)(!1), [Zz, rz] = (0, iz.useState)(null), [Nz, vz] = (0, iz.useState)(1), [xz, Jz] = (0, iz.useState)(!1), [Az, Tz] = (0, iz.useState)(!1), Lz = (0, iz.useRef)(0), Pz = (0, iz.useRef)(!1), Gz = (0, iz.useRef)(!1), az = (0, iz.useRef)(), Vz = (0, iz.useRef)(null);

      function mz() {
        const zz = null !== Zz && void 0 !== Zz ? Zz : "Rested Speed";
        Hz.gameBridge.send("wakeUp", Az ? zz : null), Vz.current = null, bz(!1), rz(null), vz(1), Jz(!1), Tz(!1)
      }

      function qz() {
        return !xz && (mz(), !0)
      }
      return (0, nz.g)("PlayerPhysicsTypeUpdate", (zz => {
        zz !== Vz.current && (Vz.current = zz, zz === lz.m.SLEEPING ? (Gz.current || (Lz.current = Hz.gameBridge.lookup("cameraZoom", null), Gz.current = !0), Pz.current = !0, Hz.gameBridge.send("setCameraZoom", 3), bz(!0), vz(function() {
          for (const zz of Hz.gameBridge.lookup("blocksStandingOn", null)) {
            if (Fz.e.leafBeds.includes(zz)) return console.log(`Found leaf bed: ${zz}`), 1;
            if (Fz.e.woolBeds.includes(zz)) return console.log(`Found woold bed: ${zz}`), 2;
            if (Fz.e.strongBeds.includes(zz)) return console.log(`Found strong bed ${zz}`), 3
          }
          return 1
        }())) : (Gz.current = !1, bz(!1), rz(null), vz(1)))
      })), (0, iz.useEffect)((() => () => {
        (0, tz.k)(sz)
      }), []), (0, iz.useEffect)((() => {
        uz ? (0, tz.m)(sz) : ((0, tz.k)(sz), Pz.current && (Hz.gameBridge.send("setCameraZoom", Lz.current), Pz.current = !1))
      }), [uz]), (0, Xz.u)("overlay", az, qz, uz), (0, fz.jsx)(Ez.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: uz,
        timeout: 300,
        nodeRef: az,
        unmountOnExit: !0,
        children: (0, fz.jsx)("div", {
          ref: az,
          onClick: zz => {
            qz() && zz.stopPropagation()
          },
          children: (0, fz.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, fz.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: Mz.g.map((uz => (0, fz.jsxs)(oz, {
                restedEffect: uz,
                qM: Zz,
                setChosenRestedEffect: rz,
                children: [(0, fz.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, fz.jsx)(Oz.b, {
                    text: [{
                      icon: uz
                    }]
                  }), Mz.f[uz].shortName]
                }), (0, fz.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: zz(Mz.f[uz].description, {
                    time: Mz.f[uz].effectLevelDurations[Nz] / 6e4
                  })
                })]
              }, uz)))
            }), (0, fz.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, fz.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, fz.jsxs)(pz.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: zz => {
                  Az ? mz() : (Jz(!0), (0, Kz.Y)((() => {
                    Jz(!1), Tz(!0)
                  }), !0)), zz.stopPropagation()
                },
                loading: xz,
                children: [!Az && (0, fz.jsxs)(fz.Fragment, {
                  children: [(0, fz.jsx)(wz.c, {
                    name: "film"
                  }), " ", zz("classicGame:watchAdToGetRestedPerk")]
                }), Az && zz("classicGame:wakeUp")]
              }), (0, fz.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, fz.jsx)("div", {
                  className: Rz()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === Nz
                  }),
                  children: (0, fz.jsx)(Oz.b, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, fz.jsx)("div", {
                  className: Rz()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === Nz
                  }),
                  children: (0, fz.jsx)(Oz.b, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, fz.jsx)("div", {
                  className: Rz()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === Nz
                  }),
                  children: (0, fz.jsx)(Oz.b, {
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
    const oz = (0, iz.memo)((function(zz) {
      let {
        children: uz,
        restedEffect: bz,
        qM: Ez,
        setChosenRestedEffect: nz
      } = zz;
      return bz === Ez ? (0, fz.jsx)(pz.q, {
        onClick: zz => {
          zz.stopPropagation()
        },
        children: uz
      }) : (0, fz.jsx)(pz.j, {
        onClick: zz => {
          nz(bz), zz.stopPropagation()
        },
        children: uz
      })
    }))
  },
  39724: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => jz
    });
    var Ez = bz(20),
      nz = bz(22),
      iz = bz(4078),
      lz = bz(316),
      Mz = bz(1595),
      tz = bz(7851),
      Hz = bz(4090),
      Oz = bz(8358),
      pz = bz(7879),
      dz = bz(7863),
      Fz = bz(7888),
      Zz = bz(1633),
      Rz = bz(7895),
      Kz = bz(8326),
      wz = bz(8477),
      Xz = bz(8371),
      fz = bz(8481),
      sz = bz(1871),
      rz = bz(7837),
      oz = bz(8396),
      Nz = bz(8387),
      vz = bz(8364);
    class xz {
      constructor() {
        this.lostAtMs = null
      }
      update(zz, uz) {
        return zz ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= uz, uz - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class Jz {
      constructor(zz, uz) {
        this.press = zz, this.release = uz, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(zz, uz, bz, Ez) {
        if (zz && null === this.downAtMs) return this.downAtMs = bz, this.latched = Ez, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? zz && this.end() : !uz && bz - this.downAtMs >= 40 && this.end())
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
    const Az = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      Tz = zz => {
        let uz = null;
        const bz = new vz.d,
          Ez = () => {
            uz && (((zz, uz, bz) => {
              switch (bz.kind) {
                case "reload":
                  return void uz.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void uz.specialActionUp(bz.action);
                case "customButton":
                  return void sz.gameBridge.send("pressCustomButton", {
                    id: bz.id,
                    down: !1
                  });
                case "touchButton":
                  zz.pressTouchButton(!1)
              }
            })(zz, uz.bodies, uz.action), uz = null)
          },
          iz = (bz, nz, iz, lz) => {
            Ez(), uz = {
              action: nz,
              bodies: bz,
              heldBy: iz,
              atMs: lz
            }, ((zz, uz, bz) => {
              switch (bz.kind) {
                case "reload":
                  return uz.reloadGun(), void uz.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void uz.specialActionDown(bz.action);
                case "customButton":
                  return void sz.gameBridge.send("pressCustomButton", {
                    id: bz.id,
                    down: !0
                  });
                case "touchButton":
                  zz.pressTouchButton(!0)
              }
            })(zz, bz, nz)
          };
        return {
          update: (lz, Mz, Hz, Oz) => {
            var dz;
            const Fz = (0, oz.m)(zz.contextActionInputs()),
              Zz = null !== (dz = Fz[0]) && void 0 !== dz ? dz : Az;
            (0, Nz.d)((0, oz.h)(Zz) ? Zz : null);
            const Rz = (0, oz.d)(Fz);
            (0, Nz.h)(Rz);
            const Kz = (0, tz.i)("actionButton");
            if (Rz) {
              const zz = bz.update(Mz.wasPressed(Kz), Mz.isHeld(Kz), Hz, Oz);
              "tap" === zz ? iz(lz, Zz, [Kz], Hz) : "hold" === zz && (pz.b.consumeButton(Kz), nz.k.sK(fz.h, Fz))
            } else bz.release(), Mz.wasPressed(Kz) && iz(lz, Zz, [Kz], Hz);
            uz && Hz - uz.atMs >= 40 && !uz.heldBy.some((zz => (0, rz.S)(Mz.frame.values, zz))) && Ez()
          },
          pressPicked: (zz, uz) => {
            iz(zz, uz, [(0, tz.i)("menuConfirm"), (0, tz.i)("actionButton")], performance.now())
          },
          release: () => {
            bz.release(), Ez(), (0, Nz.d)(null), (0, Nz.h)(!1)
          }
        }
      };
    var Lz = bz(7835);
    var Pz = bz(39719),
      Gz = bz(8407),
      az = bz(7877),
      Vz = bz(8524);
    var mz = bz(39712),
      qz = bz(8530),
      hz = bz(39731),
      Uz = bz(8507),
      cz = bz(8412),
      gz = bz(8415),
      Sz = bz(8421),
      yz = bz(8328);
    const Dz = () => yz.b[(0, dz.g)().tapHoldTime].wheelMs,
      Qz = () => ((0, Oz.e)(), new Event("controllerMenuKey")),
      Wz = (zz, uz, bz) => new Jz((() => {
        const bz = zz.bodies();
        return {
          bodies: bz,
          press: uz(bz)
        }
      }), (zz => {
        let {
          bodies: uz,
          press: Ez
        } = zz;
        bz(uz, Ez)
      })),
      ez = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      jz = zz => {
        const uz = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let bz = ez;
        const Oz = new hz.e,
          sz = nz.k.subscribe("appManagerUpdated|activeInputDevice", (uz => {
            zz.deviceChanged(uz)
          }));
        let oz = null,
          Nz = 0;
        const Jz = () => {
          oz = null, (0, cz.h)(null)
        };
        let Az = !1;
        const jz = new xz,
          Iz = zz.look,
          Bz = new vz.d,
          Cz = new vz.d,
          Yz = Tz(zz),
          kz = nz.k.subscribe(fz.l, (uz => {
            Yz.pressPicked(zz.bodies(), uz)
          })),
          zu = Wz(zz, (zz => zz.primaryFireDown()), ((zz, uz) => {
            zz.primaryFireUp(uz)
          })),
          uu = Wz(zz, (zz => zz.altFireDown()), ((zz, uz) => {
            zz.altFireUp(uz)
          }));
        let bu = !1,
          Eu = !1,
          nu = !1;
        const iu = (0, Kz.e)(rz.hb),
          lu = (0, Kz.e)(rz.hb),
          Mu = new vz.d;
        let tu = !1;
        const Hu = () => {
            iu.reset(), lu.reset(), Mu.release(), (0, Sz.h)(!1), Iz.release(), zu.cancel(), (0, gz.d)(!1), uu.cancel(), Yz.release(), Bz.release(), Cz.release(), Jz()
          },
          Ou = function() {
            let Ez = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            Hu(), Eu = !1, Ez || (bu = !1, bz = ez, Object.assign(uz, {
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
          pu = function(Ez, nz, iz) {
            let lz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const Mz = (0, dz.g)(),
              Hz = (0, mz.h)(nz, Mz.moveDeadzone),
              pz = (0, tz.i)("sprint");
            bz = (0, mz.w)(bz, {
              sprintPressed: Ez.wasPressed(pz),
              magnitude: Hz.magnitude,
              autoSprint: Mz.autoSprint,
              nowMs: iz
            }), uz.running = bz.running, uz.sprintHeld = Ez.isHeld(pz), uz.x = Hz.x, uz.y = Hz.y, uz.magnitude = Hz.speed, uz.headingOffset = Hz.headingOffset, bu = Hz.magnitude > 0;
            const Fz = (0, tz.i)("jump");
            if (uz.jumpHeld = Ez.isHeld(Fz), uz.jumpPressed = Ez.wasPressed(Fz), uz.jumpPressed && zz.bodies().jumpDown(), lz) return void zz.move(uz, null);
            const Zz = (0, tz.i)("sneak"),
              Rz = Oz.filter({
                sneakHeld: Ez.isHeld(Zz),
                sneakPressed: Ez.wasPressed(Zz),
                sneakTogglePressed: Ez.wasPressed((0, tz.i)("sneakToggle"))
              }, iz);
            zz.move(uz, {
              ...Rz,
              mode: Mz.sneakMode
            })
          },
          du = (zz, uz) => {
            const bz = (0, tz.i)("chat");
            if ("off" === (0, dz.g)().quickChat) return void(zz.wasPressed(bz) && (pz.b.consumeButton(bz), nz.k.sK(Gz.b)));
            const Ez = Bz.update(zz.wasPressed(bz), zz.isHeld(bz), uz, Dz());
            "tap" === Ez || "hold" === Ez && null === (0, Zz.e)() ? nz.k.sK(Gz.b) : "hold" === Ez && (pz.b.consumeButton(bz), nz.k.sK(Xz.p))
          },
          Fu = (uz, bz) => {
            ((zz, uz) => {
              const bz = (0, wz.c)(),
                Ez = (0, tz.i)("emoteWheel");
              if ("wheel" === (0, dz.g)().emoteButton) return zz.wasPressed(Ez) && (pz.b.consumeButton(Ez), nz.k.sK("requestEmoteWheelPadOpen", !0)), (0, wz.c)() !== bz;
              const iz = Cz.update(zz.wasPressed(Ez), zz.isHeld(Ez), uz, Dz());
              return "tap" === iz ? nz.k.sK("requestEmoteRepeatLast") : "hold" === iz && (pz.b.consumeButton(Ez), nz.k.sK("requestEmoteWheelPadOpen", !1)), (0, wz.c)() !== bz
            })(uz, bz) || du(uz, bz), uz.wasPressed((0, tz.i)("inventory")) && (pz.b.consumeButton((0, tz.i)("inventory")), (0, Mz.x)(Qz(), "inventory", zz.hasFullInventory())), uz.wasPressed((0, tz.i)("pause")) && (pz.b.consumeButton((0, tz.i)("pause")), (0, Hz.e)() === lz.r.SOCIAL ? (0, Mz.t)(Qz(), lz.r.SOCIAL) : (0, Mz.d)(Qz())), uz.wasPressed((0, tz.i)("leaderboard")) && !(0, iz.f)() && (pz.b.consumeButton((0, tz.i)("leaderboard")), ((zz, uz) => {
              if ("shop" === (0, az.e)()) return nz.k.sK(Vz.l), void(0, Mz.t)(zz, lz.r.SHOP, !0);
              (0, Mz.t)(zz, lz.r.LOBBY_LEADERBOARD, uz)
            })(Qz(), zz.hasLobbyLeaderboard()))
          },
          Zu = (uz, bz) => {
            const Ez = zz.bodies();
            ((uz, bz) => {
              const Ez = (0, tz.i)("attack"),
                nz = uz.wasPressed(Ez);
              nz && !zu.isLatched() && (Az = zz.targetsBlock()), zu.update(nz, uz.isHeld(Ez), bz, "toggle" === (0, dz.g)().attackMode), zu.isLatched() && Az ? jz.update(zz.targetsBlock(), bz) && zu.unlatch() : jz.reset(), (0, gz.d)(zu.isLatched())
            })(uz, bz), uu.update(uz.wasPressed((0, tz.i)("use")), uz.isHeld((0, tz.i)("use")), bz, !1), iu.update(uz.isHeld((0, tz.i)("hotbarPrevious")), bz) && zz.scrollHotbar(-1), lu.update(uz.isHeld((0, tz.i)("hotbarNext")), bz) && zz.scrollHotbar(1), ((uz, bz, Ez) => {
              const nz = (0, tz.i)("perspective"),
                iz = (0, tz.i)("pickBlock"),
                lz = zz.pickBlockAllowed();
              (0, Sz.h)(lz && !tu && zz.targetsBlock());
              const Mz = () => {
                bz.pickBlock() && (tu = !0, (0, Sz.h)(!1))
              };
              if (!lz || iz !== nz) return Mu.release(), uz.wasPressed(nz) && bz.swapCameraZoom(), void(lz && uz.wasPressed(iz) && Mz());
              const Hz = Mu.update(uz.wasPressed(iz), uz.isHeld(iz), Ez, Dz());
              "tap" === Hz ? Mz() : "hold" === Hz && bz.swapCameraZoom()
            })(uz, Ez, bz), ((uz, bz, Ez) => {
              const nz = (0, tz.i)("drop");
              if (uz.wasPressed(nz)) {
                bz.dropItem(!1);
                const zz = (0, dz.g)();
                "off" !== zz.buttonRepeat && (oz = Ez, Nz = yz.b[zz.tapHoldTime].dropStackMs, (0, cz.h)(Nz))
              }
              null !== oz && (!uz.isHeld(nz) || zz.selectedSlotEmpty() ? Jz() : Ez - oz >= Nz && (Jz(), bz.dropItem(!0)))
            })(uz, Ez, bz), Yz.update(Ez, uz, bz, Dz()), Fu(uz, bz)
          },
          Ru = pz.b.register({
            name: "gameplay",
            isActive: () => {
              const uz = bu && "keyboardMouse" === Ez.e.get("activeInputDevice") && !(0, Fz.H)(),
                bz = (0, Fz.h)() ? [Pz.b] : [];
              return ((0, Fz.h)() || uz) && (0, Rz.c)(bz) && zz.hasPlayer()
            },
            onFrame: zz => {
              const uz = performance.now(),
                bz = (0, dz.g)(),
                Ez = (0, mz.y)(zz, (0, mz.l)(bz, (0, tz.i)("pause"), (0, qz.e)().isSupported())),
                nz = (0, mz.i)(Ez, bz.swapSticks);
              return (0, Fz.h)() ? (Eu = !1, (0, Rz.c)() ? (nu = !1, Iz.update(nz.look, bz, Ez.isHeld((0, tz.i)("use"))), pu(Ez, nz.move, uz), void Zu(Ez, uz)) : (nu || (nu = !0, Oz.lostToPadScreen(), Ou()), void du(Ez, uz))) : (Eu || (Hu(), Eu = !0), void pu(Ez, nz.move, uz))
            },
            onDeactivate: zz => {
              (0, Fz.h)() && Oz.lostToPadScreen(), Ou(zz)
            },
            onPeekFrame: uz => {
              (0, Fz.h)() && (0, Rz.c)(Pz.d) && zz.hasPlayer() ? pu(uz, (0, mz.i)(uz, (0, dz.g)().swapSticks).move, performance.now(), !0) : Ou()
            }
          }),
          Ku = (0, Pz.c)(zz),
          wu = (() => {
            const zz = nz.k.subscribe(Lz.c, (zz => {
              !zz && (0, Fz.h)() && "inGame" === Ez.e.get("gameState") && nz.k.sK("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              nz.k.unsubscribe(zz)
            }
          })();
        return () => {
          Ou(), zz.uninstall(), (0, Uz.e)(!1), (0, Sz.h)(!1), nz.k.unsubscribe(sz), nz.k.unsubscribe(kz), Ru(), Ku(), wu(), Iz.uninstall()
        }
      }
  },
  39719: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Zz,
      c: () => Kz,
      d: () => Fz
    });
    var Ez = bz(1269),
      nz = bz(4078),
      iz = bz(8459),
      lz = bz(36361),
      Mz = bz(1665),
      tz = bz(1176),
      Hz = bz(7895),
      Oz = bz(8371),
      pz = bz(8481);
    const dz = {
        emoteWheel: iz.e,
        quickChatWheel: Oz.b,
        actionWheel: pz.o
      },
      Fz = Object.keys(dz),
      Zz = "dead",
      Rz = zz => (0, Ez.h)().includes(zz),
      Kz = zz => {
        const uz = [(0, Hz.f)(Zz, (() => zz.hasPlayer() && zz.isPlayerDead())), (0, Hz.f)("sleeping", (() => Rz(lz.g))), (0, Hz.f)("turnstile", (() => Rz(tz.g))), (0, Hz.f)("videoAd", Mz.g), (0, Hz.f)("replay", (() => (0, nz.f)() || zz.isReplayMode())), (0, Hz.f)("freeCamera", (() => zz.isFreeCameraOn())), ...Object.entries(dz).map((zz => {
          let [uz, bz] = zz;
          return (0, Hz.f)(uz, bz)
        }))];
        return () => {
          for (const zz of uz) zz()
        }
      }
  },
  39712: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz,
      h: () => tz,
      i: () => Mz,
      l: () => Oz,
      p: () => lz,
      t: () => iz,
      w: () => Hz,
      y: () => pz
    });
    var Ez = bz(7837);
    class nz {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(zz, uz, bz) {
        const nz = (0, Ez.m)(zz, uz.lookDeadzone);
        if (Math.hypot(nz.x, nz.y) < .9 || Math.abs(nz.x) < Math.abs(nz.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = bz);
        const iz = (lz = uz.lookSensitivityX, Math.min(1, 100 / lz));
        var lz;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (bz - this.fullTiltSinceMs - 250 * iz) / (200 * iz)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const iz = (zz, uz, bz, nz, iz) => {
        let lz = 1;
        return "boost" === bz.lookCurve ? lz = zz.update(uz, bz, iz) : zz.reset(),
          function(zz, uz) {
            let {
              yawBoost: bz = 1,
              aiming: nz = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const iz = (0, Ez.i)((0, Ez.m)(zz, uz.lookDeadzone), uz.lookCurve),
              lz = 220 * Math.PI / 180,
              Mz = nz ? uz.aimLookSensitivity / 100 : 1,
              tz = uz.lookSensitivityX / 100 * Mz,
              Hz = uz.lookSensitivityY / 100 * Mz;
            return {
              yawRadPerSec: iz.x * lz * tz * bz * (uz.invertLookX ? -1 : 1),
              pitchRadPerSec: iz.y * lz * .7 * Hz * (uz.invertLookY ? -1 : 1)
            }
          }(uz, bz, {
            yawBoost: lz,
            aiming: nz
          })
      },
      lz = (zz, uz) => {
        const bz = Math.max(0, Math.min(250, uz)) / 1e3;
        return {
          QJ: zz.yawRadPerSec * bz,
          eJ: zz.pitchRadPerSec * bz
        }
      },
      Mz = (zz, uz) => uz ? {
        move: zz.rightStick,
        look: zz.leftStick
      } : {
        move: zz.leftStick,
        look: zz.rightStick
      },
      tz = (zz, uz) => {
        const bz = (0, Ez.m)(zz, uz),
          nz = Math.min(1, Math.hypot(bz.x, bz.y));
        return {
          magnitude: nz,
          speed: Math.min(1, nz / .8),
          headingOffset: 0 === nz ? 0 : Math.atan2(bz.x, -bz.y),
          x: bz.x,
          y: bz.y
        }
      },
      Hz = (zz, uz) => {
        let {
          sprintPressed: bz,
          magnitude: Ez,
          autoSprint: nz,
          nowMs: iz
        } = uz;
        const lz = bz ? iz : zz.latchedAtMs,
          Mz = (zz => {
            let {
              running: uz,
              magnitude: bz,
              sprintPressed: Ez,
              autoSprint: nz
            } = zz;
            return !(bz < .5) && (!!Ez || !!(nz && bz >= .9) || uz)
          })({
            running: zz.running,
            magnitude: Ez,
            sprintPressed: iz - lz <= 1e3,
            autoSprint: nz
          });
        return {
          running: Mz,
          latchedAtMs: Mz ? -1 / 0 : lz
        }
      },
      Oz = (zz, uz, bz) => bz && zz.gyroAiming && "button" === zz.gyroActivation && zz.gyroButton !== uz ? zz.gyroButton : null,
      pz = (zz, uz) => uz ? {
        ...zz,
        isHeld: bz => bz !== uz && zz.isHeld(bz),
        wasPressed: bz => bz !== uz && zz.wasPressed(bz),
        wasReleased: bz => bz !== uz && zz.wasReleased(bz),
        value: bz => bz === uz ? 0 : zz.value(bz)
      } : zz
  },
  39731: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz,
      i: () => Ez
    });
    const Ez = zz => {
      let {
        mode: uz,
        sneakHeld: bz,
        sneakPressed: Ez,
        sneakTogglePressed: nz,
        descending: iz,
        canCrouch: lz,
        toggled: Mz
      } = zz;
      return lz ? iz ? {
        crouchHeld: bz,
        toggled: !1
      } : "hold" === uz ? {
        crouchHeld: bz,
        toggled: nz ? !Mz : Mz
      } : {
        crouchHeld: !1,
        toggled: Ez || nz ? !Mz : Mz
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class nz {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(zz, uz) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = uz, this.graceEndsMs = uz + 500);
        const bz = uz < this.graceEndsMs;
        return bz && (zz.sneakPressed || zz.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, uz + 300))), zz.sneakHeld ? bz && zz.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: zz.sneakHeld && !this.ignoringHeld,
          sneakPressed: zz.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: zz.sneakTogglePressed && !bz
        }
      }
    }
  },
  39704: (zz, uz, bz) => {
    bz(8530)
  },
  39708: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => fz
    });
    var Ez = bz(22),
      nz = bz(8459),
      iz = bz(8474),
      lz = bz(7851),
      Mz = bz(7879),
      tz = bz(7863),
      Hz = bz(39712),
      Oz = bz(39719),
      pz = bz(7895),
      dz = bz(7837),
      Fz = bz(8371),
      Zz = bz(8481);
    const Rz = [{
        isOpen: nz.f,
        openButton: () => (0, lz.i)("emoteWheel"),
        aim: zz => {
          Ez.k.sK("emoteWheelPadAim", zz)
        },
        commit: zz => {
          Ez.k.sK("requestEmoteWheelPadCommit", zz)
        },
        close: () => {
          Ez.k.sK("requestEmoteWheelClose")
        }
      }, {
        isOpen: Fz.b,
        openButton: () => (0, lz.i)("chat"),
        aim: zz => {
          Ez.k.sK(Fz.f, zz)
        },
        commit: zz => {
          Ez.k.sK(Fz.n, zz)
        },
        close: () => {
          Ez.k.sK(Fz.j)
        },
        keptOpenBy: [Oz.b]
      }, {
        isOpen: Zz.o,
        openButton: () => (0, lz.i)("actionButton"),
        aim: zz => {
          Ez.k.sK(Zz.c, zz)
        },
        commit: zz => {
          Ez.k.sK(Zz.g, zz)
        },
        close: () => {
          Ez.k.sK(Zz.f)
        }
      }],
      Kz = () => {
        var zz;
        return null !== (zz = Rz.find((zz => zz.isOpen()))) && void 0 !== zz ? zz : null
      },
      wz = zz => (0, lz.P)(zz.openButton()),
      Xz = (zz, uz) => !(0, dz.S)(zz.frame.values, uz),
      fz = () => {
        let zz = null,
          uz = !1,
          bz = !1;
        return Mz.b.register({
          name: "wheel",
          isActive: () => null !== Kz(),
          peek: () => {
            const zz = Kz();
            return zz && wz(zz) ? null : {
              over: "gameplay",
              stick: (0, tz.g)().swapSticks ? "right" : "left"
            }
          },
          onFrame: Ez => {
            var nz;
            const dz = Kz();
            if (!dz) return;
            if (null !== (0, pz.b)([...Oz.d, ...null !== (nz = dz.keptOpenBy) && void 0 !== nz ? nz : []])) return void dz.close();
            const Fz = dz.openButton(),
              Zz = (0, Hz.i)(Ez.frame, (0, tz.g)().swapSticks),
              Rz = wz(dz) ? Zz.move : Zz.look;
            zz !== dz ? (zz = dz, uz = !Xz(Ez, Fz) || Math.hypot(Rz.x, Rz.y) >= iz.C, bz = !1) : bz && (bz = !1, Xz(Ez, Fz) && (uz = !1)), dz.aim(Rz);
            const fz = (0, lz.i)("menuConfirm"),
              sz = (0, lz.i)("menuBack");
            return Ez.wasPressed(sz) ? (Mz.b.consumeButton(sz), void dz.close()) : Ez.wasPressed(fz) || Ez.wasPressed(Fz) ? (Mz.b.consumeButton(fz), Mz.b.consumeButton(Fz), void dz.commit(!1)) : void(uz && Xz(Ez, Fz) && (uz = !1, dz.commit(!0)))
          },
          onDeactivate: () => {
            bz = null !== zz && Kz() === zz, bz || (zz = null, uz = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);
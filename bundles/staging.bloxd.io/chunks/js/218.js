export const id = 218;
export const ids = [218];
export const modules = {
  36427: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => jv,
      c: () => mv
    });
    var hv = Pv(4036),
      Sv = Pv(1439),
      ev = Pv(52),
      gv = Pv(6192),
      pv = Pv(4021),
      dv = Pv(1272),
      Nv = Pv(1876),
      lv = Pv(1858),
      Tv = Pv(1442),
      Wv = Pv(1175),
      wv = Pv(36434),
      av = Pv(1035),
      sv = Pv.n(av),
      Cv = Pv(1295),
      iv = Pv(1042),
      cv = Pv(1265),
      Gv = Pv(1082);
    const mv = "SleepingOverlay";

    function jv() {
      const {
        t: vv
      } = (0, Wv.x)(), [zv, Pv] = (0, ev.useState)(!1), [av, jv] = (0, ev.useState)(null), [Fv, Yv] = (0, ev.useState)(1), [nv, Ov] = (0, ev.useState)(!1), [Dv, Kv] = (0, ev.useState)(!1), Vv = (0, ev.useRef)(0), Uv = (0, ev.useRef)(!1), Rv = (0, ev.useRef)(!1), xv = (0, ev.useRef)(), tv = (0, ev.useRef)(null);

      function qv() {
        const vv = null !== av && void 0 !== av ? av : "Rested Speed";
        Nv.gameBridge.send("wakeUp", Dv ? vv : null), tv.current = null, Pv(!1), jv(null), Yv(1), Ov(!1), Kv(!1)
      }

      function Iv() {
        return !nv && (qv(), !0)
      }
      return (0, Sv.g)("PlayerPhysicsTypeUpdate", (vv => {
        vv !== tv.current && (tv.current = vv, vv === gv.s.SLEEPING ? (Rv.current || (Vv.current = Nv.gameBridge.lookup("cameraZoom", null), Rv.current = !0), Uv.current = !0, Nv.gameBridge.send("setCameraZoom", 3), Pv(!0), Yv(function() {
          for (const vv of Nv.gameBridge.lookup("blocksStandingOn", null)) {
            if (wv.b.leafBeds.includes(vv)) return console.log(`Found leaf bed: ${vv}`), 1;
            if (wv.b.woolBeds.includes(vv)) return console.log(`Found woold bed: ${vv}`), 2;
            if (wv.b.strongBeds.includes(vv)) return console.log(`Found strong bed ${vv}`), 3
          }
          return 1
        }())) : (Rv.current = !1, Pv(!1), jv(null), Yv(1)))
      })), (0, ev.useEffect)((() => () => {
        (0, dv.q)(mv)
      }), []), (0, ev.useEffect)((() => {
        zv ? (0, dv.r)(mv) : ((0, dv.q)(mv), Uv.current && (Nv.gameBridge.send("setCameraZoom", Vv.current), Uv.current = !1))
      }), [zv]), (0, cv.q)("overlay", xv, Iv, zv), (0, Gv.jsx)(hv.c, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: zv,
        timeout: 300,
        nodeRef: xv,
        unmountOnExit: !0,
        children: (0, Gv.jsx)("div", {
          ref: xv,
          onClick: vv => {
            Iv() && vv.stopPropagation()
          },
          children: (0, Gv.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Gv.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: pv.j.map((zv => (0, Gv.jsxs)(fv, {
                restedEffect: zv,
                pl: av,
                setChosenRestedEffect: jv,
                children: [(0, Gv.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Gv.jsx)(lv.c, {
                    text: [{
                      icon: zv
                    }]
                  }), pv.i[zv].shortName]
                }), (0, Gv.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: vv(pv.i[zv].description, {
                    time: pv.i[zv].effectLevelDurations[Fv] / 6e4
                  })
                })]
              }, zv)))
            }), (0, Gv.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Gv.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Gv.jsxs)(Tv.d, {
                className: "SleepingOverlayWakeUpButton",
                onClick: vv => {
                  Dv ? qv() : (Ov(!0), (0, Cv.ab)((() => {
                    Ov(!1), Kv(!0)
                  }), !0)), vv.stopPropagation()
                },
                loading: nv,
                children: [!Dv && (0, Gv.jsxs)(Gv.Fragment, {
                  children: [(0, Gv.jsx)(iv.b, {
                    name: "film"
                  }), " ", vv("classicGame:watchAdToGetRestedPerk")]
                }), Dv && vv("classicGame:wakeUp")]
              }), (0, Gv.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Gv.jsx)("div", {
                  className: sv()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === Fv
                  }),
                  children: (0, Gv.jsx)(lv.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Gv.jsx)("div", {
                  className: sv()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === Fv
                  }),
                  children: (0, Gv.jsx)(lv.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Gv.jsx)("div", {
                  className: sv()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === Fv
                  }),
                  children: (0, Gv.jsx)(lv.c, {
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
    const fv = (0, ev.memo)((function(vv) {
      let {
        children: zv,
        restedEffect: Pv,
        pl: hv,
        setChosenRestedEffect: Sv
      } = vv;
      return Pv === hv ? (0, Gv.jsx)(Tv.j, {
        onClick: vv => {
          vv.stopPropagation()
        },
        children: zv
      }) : (0, Gv.jsx)(Tv.e, {
        onClick: vv => {
          Sv(Pv), vv.stopPropagation()
        },
        children: zv
      })
    }))
  },
  39874: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => ov
    });
    var hv = Pv(22),
      Sv = Pv(26),
      ev = Pv(4058),
      gv = Pv(302),
      pv = Pv(1610),
      dv = Pv(7861),
      Nv = Pv(4074),
      lv = Pv(8393),
      Tv = Pv(7901),
      Wv = Pv(7872),
      wv = Pv(7903),
      av = Pv(1652),
      sv = Pv(7906),
      Cv = Pv(8344),
      iv = Pv(8495),
      cv = Pv(8405),
      Gv = Pv(8497),
      mv = Pv(1876),
      jv = Pv(7848),
      fv = Pv(8426),
      Fv = Pv(8424),
      Yv = Pv(8396);
    class nv {
      constructor() {
        this.lostAtMs = null
      }
      update(vv, zv) {
        return vv ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= zv, zv - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class Ov {
      constructor(vv, zv) {
        this.press = vv, this.release = zv, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(vv, zv, Pv, hv) {
        if (vv && null === this.downAtMs) return this.downAtMs = Pv, this.latched = hv, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? vv && this.end() : !zv && Pv - this.downAtMs >= 40 && this.end())
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
        const vv = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(vv)
      }
    }
    const Dv = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      Kv = vv => {
        let zv = null;
        const Pv = new Yv.e,
          hv = () => {
            zv && (((vv, zv, Pv) => {
              switch (Pv.kind) {
                case "reload":
                  return void zv.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void zv.specialActionUp(Pv.action);
                case "customButton":
                  return void mv.gameBridge.send("pressCustomButton", {
                    id: Pv.id,
                    down: !1
                  });
                case "touchButton":
                  vv.pressTouchButton(!1)
              }
            })(vv, zv.bodies, zv.action), zv = null)
          },
          ev = (Pv, Sv, ev, gv) => {
            hv(), zv = {
              action: Sv,
              bodies: Pv,
              heldBy: ev,
              atMs: gv
            }, ((vv, zv, Pv) => {
              switch (Pv.kind) {
                case "reload":
                  return zv.reloadGun(), void zv.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void zv.specialActionDown(Pv.action);
                case "customButton":
                  return void mv.gameBridge.send("pressCustomButton", {
                    id: Pv.id,
                    down: !0
                  });
                case "touchButton":
                  vv.pressTouchButton(!0)
              }
            })(vv, Pv, Sv)
          };
        return {
          update: (gv, pv, Nv, lv) => {
            var Wv;
            const wv = (0, fv.k)(vv.contextActionInputs()),
              av = null !== (Wv = wv[0]) && void 0 !== Wv ? Wv : Dv;
            (0, Fv.d)((0, fv.g)(av) ? av : null);
            const sv = (0, fv.c)(wv);
            (0, Fv.f)(sv);
            const Cv = (0, dv.f)("actionButton");
            if (sv) {
              const vv = Pv.update(pv.wasPressed(Cv), pv.isHeld(Cv), Nv, lv);
              "tap" === vv ? ev(gv, av, [Cv], Nv) : "hold" === vv && (Tv.b.consumeButton(Cv), Sv.j.zC(Gv.k, wv))
            } else Pv.release(), pv.wasPressed(Cv) && ev(gv, av, [Cv], Nv);
            zv && Nv - zv.atMs >= 40 && !zv.heldBy.some((vv => (0, jv.C)(pv.frame.values, vv))) && hv()
          },
          pressPicked: (vv, zv) => {
            ev(vv, zv, [(0, dv.f)("menuConfirm"), (0, dv.f)("actionButton")], performance.now())
          },
          release: () => {
            Pv.release(), hv(), (0, Fv.d)(null), (0, Fv.f)(!1)
          }
        }
      };
    var Vv = Pv(7845);
    var Uv = Pv(39867),
      Rv = Pv(8438),
      xv = Pv(7894),
      tv = Pv(8531);
    var qv = Pv(39861),
      Iv = Pv(8536),
      Qv = Pv(39882),
      Zv = Pv(8513),
      Av = Pv(8446),
      Lv = Pv(8452),
      Hv = Pv(8461),
      Mv = Pv(8347);
    const yv = () => Mv.b[(0, Wv.g)().tapHoldTime].wheelMs,
      Bv = () => ((0, lv.e)(), new Event("controllerMenuKey")),
      Jv = (vv, zv, Pv) => new Ov((() => {
        const Pv = vv.bodies();
        return {
          bodies: Pv,
          press: zv(Pv)
        }
      }), (vv => {
        let {
          bodies: zv,
          press: hv
        } = vv;
        Pv(zv, hv)
      })),
      Ev = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      ov = vv => {
        const zv = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let Pv = Ev;
        const lv = new Qv.d,
          mv = Sv.j.subscribe("appManagerUpdated|activeInputDevice", (zv => {
            vv.deviceChanged(zv)
          }));
        let fv = null,
          Fv = 0;
        const Ov = () => {
          fv = null, (0, Av.f)(null)
        };
        let Dv = !1;
        const ov = new nv,
          bv = vv.look,
          rv = new Yv.e,
          kv = new Yv.e,
          Xv = Kv(vv),
          uv = Sv.j.subscribe(Gv.n, (zv => {
            Xv.pressPicked(vv.bodies(), zv)
          })),
          vz = Jv(vv, (vv => vv.primaryFireDown()), ((vv, zv) => {
            vv.primaryFireUp(zv)
          })),
          zz = Jv(vv, (vv => vv.altFireDown()), ((vv, zv) => {
            vv.altFireUp(zv)
          }));
        let Pz = !1,
          hz = !1,
          Sz = !1;
        const ez = (0, Cv.d)(jv.Q),
          gz = (0, Cv.d)(jv.Q),
          pz = new Yv.e;
        let dz = !1;
        const Nz = () => {
            ez.reset(), gz.reset(), pz.release(), (0, Hv.i)(!1), bv.release(), vz.cancel(), (0, Lv.g)(!1), zz.cancel(), Xv.release(), rv.release(), kv.release(), Ov()
          },
          lz = function() {
            let hv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            Nz(), hz = !1, hv || (Pz = !1, Pv = Ev, Object.assign(zv, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), vv.stopMoving())
          },
          Tz = function(hv, Sv, ev) {
            let gv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const pv = (0, Wv.g)(),
              Nv = (0, qv.h)(Sv, pv.moveDeadzone),
              Tv = (0, dv.f)("sprint");
            Pv = (0, qv.s)(Pv, {
              sprintPressed: hv.wasPressed(Tv),
              magnitude: Nv.magnitude,
              autoSprint: pv.autoSprint,
              nowMs: ev
            }), zv.running = Pv.running, zv.sprintHeld = hv.isHeld(Tv), zv.x = Nv.x, zv.y = Nv.y, zv.magnitude = Nv.speed, zv.headingOffset = Nv.headingOffset, Pz = Nv.magnitude > 0;
            const wv = (0, dv.f)("jump");
            if (zv.jumpHeld = hv.isHeld(wv), zv.jumpPressed = hv.wasPressed(wv), zv.jumpPressed && vv.bodies().jumpDown(), gv) return void vv.move(zv, null);
            const av = (0, dv.f)("sneak"),
              sv = lv.filter({
                sneakHeld: hv.isHeld(av),
                sneakPressed: hv.wasPressed(av),
                sneakTogglePressed: hv.wasPressed((0, dv.f)("sneakToggle"))
              }, ev);
            vv.move(zv, {
              ...sv,
              mode: pv.sneakMode
            })
          },
          Wz = (vv, zv) => {
            const Pv = (0, dv.f)("chat");
            if ("off" === (0, Wv.g)().quickChat) return void(vv.wasPressed(Pv) && (Tv.b.consumeButton(Pv), Sv.j.zC(Rv.b)));
            const hv = rv.update(vv.wasPressed(Pv), vv.isHeld(Pv), zv, yv());
            "tap" === hv || "hold" === hv && null === (0, av.e)() ? Sv.j.zC(Rv.b) : "hold" === hv && (Tv.b.consumeButton(Pv), Sv.j.zC(cv.h))
          },
          wz = (zv, Pv) => {
            ((vv, zv) => {
              const Pv = (0, iv.b)(),
                hv = (0, dv.f)("emoteWheel");
              if ("wheel" === (0, Wv.g)().emoteButton) return vv.wasPressed(hv) && (Tv.b.consumeButton(hv), Sv.j.zC("requestEmoteWheelPadOpen", !0)), (0, iv.b)() !== Pv;
              const ev = kv.update(vv.wasPressed(hv), vv.isHeld(hv), zv, yv());
              return "tap" === ev ? Sv.j.zC("requestEmoteRepeatLast") : "hold" === ev && (Tv.b.consumeButton(hv), Sv.j.zC("requestEmoteWheelPadOpen", !1)), (0, iv.b)() !== Pv
            })(zv, Pv) || Wz(zv, Pv), zv.wasPressed((0, dv.f)("inventory")) && (Tv.b.consumeButton((0, dv.f)("inventory")), (0, pv.v)(Bv(), "inventory", vv.hasFullInventory())), zv.wasPressed((0, dv.f)("pause")) && (Tv.b.consumeButton((0, dv.f)("pause")), (0, Nv.b)() === gv.o.SOCIAL ? (0, pv.u)(Bv(), gv.o.SOCIAL) : (0, pv.h)(Bv())), zv.wasPressed((0, dv.f)("leaderboard")) && !(0, ev.f)() && (Tv.b.consumeButton((0, dv.f)("leaderboard")), ((vv, zv) => {
              if ("shop" === (0, xv.e)()) return Sv.j.zC(tv.l), void(0, pv.u)(vv, gv.o.SHOP, !0);
              (0, pv.u)(vv, gv.o.LOBBY_LEADERBOARD, zv)
            })(Bv(), vv.hasLobbyTab()))
          },
          az = (zv, Pv) => {
            const hv = vv.bodies();
            ((zv, Pv) => {
              const hv = (0, dv.f)("attack"),
                Sv = zv.wasPressed(hv);
              Sv && !vz.isLatched() && (Dv = vv.targetsBlock()), vz.update(Sv, zv.isHeld(hv), Pv, "toggle" === (0, Wv.g)().attackMode), vz.isLatched() && Dv ? ov.update(vv.targetsBlock(), Pv) && vz.unlatch() : ov.reset(), (0, Lv.g)(vz.isLatched())
            })(zv, Pv), zz.update(zv.wasPressed((0, dv.f)("use")), zv.isHeld((0, dv.f)("use")), Pv, !1), ez.update(zv.isHeld((0, dv.f)("hotbarPrevious")), Pv) && vv.scrollHotbar(-1), gz.update(zv.isHeld((0, dv.f)("hotbarNext")), Pv) && vv.scrollHotbar(1), ((zv, Pv, hv) => {
              const Sv = (0, dv.f)("perspective"),
                ev = (0, dv.f)("pickBlock"),
                gv = vv.pickBlockAllowed();
              (0, Hv.i)(gv && !dz && vv.targetsBlock());
              const pv = () => {
                Pv.pickBlock() && (dz = !0, (0, Hv.i)(!1))
              };
              if (!gv || ev !== Sv) return pz.release(), zv.wasPressed(Sv) && Pv.swapCameraZoom(), void(gv && zv.wasPressed(ev) && pv());
              const Nv = pz.update(zv.wasPressed(ev), zv.isHeld(ev), hv, yv());
              "tap" === Nv ? pv() : "hold" === Nv && Pv.swapCameraZoom()
            })(zv, hv, Pv), ((zv, Pv, hv) => {
              const Sv = (0, dv.f)("drop");
              if (zv.wasPressed(Sv)) {
                Pv.dropItem(!1);
                const vv = (0, Wv.g)();
                "off" !== vv.buttonRepeat && (fv = hv, Fv = Mv.b[vv.tapHoldTime].dropStackMs, (0, Av.f)(Fv))
              }
              null !== fv && (!zv.isHeld(Sv) || vv.selectedSlotEmpty() ? Ov() : hv - fv >= Fv && (Ov(), Pv.dropItem(!0)))
            })(zv, hv, Pv), Xv.update(hv, zv, Pv, yv()), wz(zv, Pv)
          },
          sz = Tv.b.register({
            name: "gameplay",
            isActive: () => {
              const zv = Pz && "keyboardMouse" === hv.c.get("activeInputDevice") && !(0, wv.I)(),
                Pv = (0, wv.k)() ? [Uv.d] : [];
              return ((0, wv.k)() || zv) && (0, sv.f)(Pv) && vv.hasPlayer()
            },
            onFrame: vv => {
              const zv = performance.now(),
                Pv = (0, Wv.g)(),
                hv = (0, qv.v)(vv, (0, qv.l)(Pv, (0, dv.f)("pause"), (0, Iv.c)().isSupported())),
                Sv = (0, qv.i)(hv, Pv.swapSticks);
              return (0, wv.k)() ? (hz = !1, (0, sv.f)() ? (Sz = !1, bv.update(Sv.look, Pv, hv.isHeld((0, dv.f)("use"))), Tz(hv, Sv.move, zv), void az(hv, zv)) : (Sz || (Sz = !0, lv.lostToPadScreen(), lz()), void Wz(hv, zv))) : (hz || (Nz(), hz = !0), void Tz(hv, Sv.move, zv))
            },
            onDeactivate: vv => {
              (0, wv.k)() && lv.lostToPadScreen(), lz(vv)
            },
            onPeekFrame: zv => {
              (0, wv.k)() && (0, sv.f)(Uv.i) && vv.hasPlayer() ? Tz(zv, (0, qv.i)(zv, (0, Wv.g)().swapSticks).move, performance.now(), !0) : lz()
            }
          }),
          Cz = (0, Uv.f)(vv),
          iz = (() => {
            const vv = Sv.j.subscribe(Vv.e, (vv => {
              !vv && (0, wv.k)() && "inGame" === hv.c.get("gameState") && Sv.j.zC("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              Sv.j.unsubscribe(vv)
            }
          })();
        return () => {
          lz(), vv.uninstall(), (0, Zv.e)(!1), (0, Hv.i)(!1), Sv.j.unsubscribe(mv), Sv.j.unsubscribe(uv), sz(), Cz(), iz(), bv.uninstall()
        }
      }
  },
  39867: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => av,
      f: () => Cv,
      i: () => wv
    });
    var hv = Pv(1272),
      Sv = Pv(4058),
      ev = Pv(8484),
      gv = Pv(36427),
      pv = Pv(1684),
      dv = Pv(1168),
      Nv = Pv(7906),
      lv = Pv(8405),
      Tv = Pv(8497);
    const Wv = {
        emoteWheel: ev.f,
        quickChatWheel: lv.b,
        actionWheel: Tv.p
      },
      wv = Object.keys(Wv),
      av = "dead",
      sv = vv => (0, hv.o)().includes(vv),
      Cv = vv => {
        const zv = [(0, Nv.m)(av, (() => vv.hasPlayer() && vv.isPlayerDead())), (0, Nv.m)("sleeping", (() => sv(gv.c))), (0, Nv.m)("turnstile", (() => sv(dv.h))), (0, Nv.m)("videoAd", pv.g), (0, Nv.m)("replay", (() => (0, Sv.f)() || vv.isReplayMode())), (0, Nv.m)("freeCamera", (() => vv.isFreeCameraOn())), ...Object.entries(Wv).map((vv => {
          let [zv, Pv] = vv;
          return (0, Nv.m)(zv, Pv)
        }))];
        return () => {
          for (const vv of zv) vv()
        }
      }
  },
  39861: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Sv,
      h: () => dv,
      i: () => pv,
      l: () => lv,
      p: () => gv,
      q: () => ev,
      s: () => Nv,
      v: () => Tv
    });
    var hv = Pv(7848);
    class Sv {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(vv, zv, Pv) {
        const Sv = (0, hv.i)(vv, zv.lookDeadzone);
        if (Math.hypot(Sv.x, Sv.y) < .9 || Math.abs(Sv.x) < Math.abs(Sv.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = Pv);
        const ev = (gv = zv.lookSensitivityX, Math.min(1, 100 / gv));
        var gv;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (Pv - this.fullTiltSinceMs - 250 * ev) / (200 * ev)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const ev = (vv, zv, Pv, Sv, ev) => {
        let gv = 1;
        return "boost" === Pv.lookCurve ? gv = vv.update(zv, Pv, ev) : vv.reset(),
          function(vv, zv) {
            let {
              yawBoost: Pv = 1,
              aiming: Sv = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const ev = (0, hv.g)((0, hv.i)(vv, zv.lookDeadzone), zv.lookCurve),
              gv = 220 * Math.PI / 180,
              pv = Sv ? zv.aimLookSensitivity / 100 : 1,
              dv = zv.lookSensitivityX / 100 * pv,
              Nv = zv.lookSensitivityY / 100 * pv;
            return {
              yawRadPerSec: ev.x * gv * dv * Pv * (zv.invertLookX ? -1 : 1),
              pitchRadPerSec: ev.y * gv * .7 * Nv * (zv.invertLookY ? -1 : 1)
            }
          }(zv, Pv, {
            yawBoost: gv,
            aiming: Sv
          })
      },
      gv = (vv, zv) => {
        const Pv = Math.max(0, Math.min(250, zv)) / 1e3;
        return {
          ND: vv.yawRadPerSec * Pv,
          lD: vv.pitchRadPerSec * Pv
        }
      },
      pv = (vv, zv) => zv ? {
        move: vv.rightStick,
        look: vv.leftStick
      } : {
        move: vv.leftStick,
        look: vv.rightStick
      },
      dv = (vv, zv) => {
        const Pv = (0, hv.i)(vv, zv),
          Sv = Math.min(1, Math.hypot(Pv.x, Pv.y));
        return {
          magnitude: Sv,
          speed: Math.min(1, Sv / .8),
          headingOffset: 0 === Sv ? 0 : Math.atan2(Pv.x, -Pv.y),
          x: Pv.x,
          y: Pv.y
        }
      },
      Nv = (vv, zv) => {
        let {
          sprintPressed: Pv,
          magnitude: hv,
          autoSprint: Sv,
          nowMs: ev
        } = zv;
        const gv = Pv ? ev : vv.latchedAtMs,
          pv = (vv => {
            let {
              running: zv,
              magnitude: Pv,
              sprintPressed: hv,
              autoSprint: Sv
            } = vv;
            return !(Pv < .5) && (!!hv || !!(Sv && Pv >= .9) || zv)
          })({
            running: vv.running,
            magnitude: hv,
            sprintPressed: ev - gv <= 1e3,
            autoSprint: Sv
          });
        return {
          running: pv,
          latchedAtMs: pv ? -1 / 0 : gv
        }
      },
      lv = (vv, zv, Pv) => Pv && vv.gyroAiming && "button" === vv.gyroActivation && vv.gyroButton !== zv ? vv.gyroButton : null,
      Tv = (vv, zv) => zv ? {
        ...vv,
        isHeld: Pv => Pv !== zv && vv.isHeld(Pv),
        wasPressed: Pv => Pv !== zv && vv.wasPressed(Pv),
        wasReleased: Pv => Pv !== zv && vv.wasReleased(Pv),
        value: Pv => Pv === zv ? 0 : vv.value(Pv)
      } : vv
  },
  39882: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Sv,
      g: () => hv
    });
    const hv = vv => {
      let {
        mode: zv,
        sneakHeld: Pv,
        sneakPressed: hv,
        sneakTogglePressed: Sv,
        descending: ev,
        canCrouch: gv,
        toggled: pv
      } = vv;
      return gv ? ev ? {
        crouchHeld: Pv,
        toggled: !1
      } : "hold" === zv ? {
        crouchHeld: Pv,
        toggled: Sv ? !pv : pv
      } : {
        crouchHeld: !1,
        toggled: hv || Sv ? !pv : pv
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class Sv {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(vv, zv) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = zv, this.graceEndsMs = zv + 500);
        const Pv = zv < this.graceEndsMs;
        return Pv && (vv.sneakPressed || vv.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, zv + 300))), vv.sneakHeld ? Pv && vv.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: vv.sneakHeld && !this.ignoringHeld,
          sneakPressed: vv.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: vv.sneakTogglePressed && !Pv
        }
      }
    }
  },
  39851: (vv, zv, Pv) => {
    Pv(8536)
  },
  39854: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Gv
    });
    var hv = Pv(26),
      Sv = Pv(8484),
      ev = Pv(8493),
      gv = Pv(7861),
      pv = Pv(7901),
      dv = Pv(7872),
      Nv = Pv(39861),
      lv = Pv(39867),
      Tv = Pv(7906),
      Wv = Pv(7848),
      wv = Pv(8405),
      av = Pv(8497);
    const sv = [{
        isOpen: Sv.i,
        openButton: () => (0, gv.f)("emoteWheel"),
        aim: vv => {
          hv.j.zC("emoteWheelPadAim", vv)
        },
        commit: vv => {
          hv.j.zC("requestEmoteWheelPadCommit", vv)
        },
        close: () => {
          hv.j.zC("requestEmoteWheelClose")
        }
      }, {
        isOpen: wv.b,
        openButton: () => (0, gv.f)("chat"),
        aim: vv => {
          hv.j.zC(wv.c, vv)
        },
        commit: vv => {
          hv.j.zC(wv.f, vv)
        },
        close: () => {
          hv.j.zC(wv.e)
        },
        keptOpenBy: [lv.d]
      }, {
        isOpen: av.p,
        openButton: () => (0, gv.f)("actionButton"),
        aim: vv => {
          hv.j.zC(av.c, vv)
        },
        commit: vv => {
          hv.j.zC(av.j, vv)
        },
        close: () => {
          hv.j.zC(av.g)
        }
      }],
      Cv = () => {
        var vv;
        return null !== (vv = sv.find((vv => vv.isOpen()))) && void 0 !== vv ? vv : null
      },
      iv = vv => (0, gv.L)(vv.openButton()),
      cv = (vv, zv) => !(0, Wv.C)(vv.frame.values, zv),
      Gv = () => {
        let vv = null,
          zv = !1,
          Pv = !1;
        return pv.b.register({
          name: "wheel",
          isActive: () => null !== Cv(),
          peek: () => {
            const vv = Cv();
            return vv && iv(vv) ? null : {
              over: "gameplay",
              stick: (0, dv.g)().swapSticks ? "right" : "left"
            }
          },
          onFrame: hv => {
            var Sv;
            const Wv = Cv();
            if (!Wv) return;
            if (null !== (0, Tv.e)([...lv.i, ...null !== (Sv = Wv.keptOpenBy) && void 0 !== Sv ? Sv : []])) return void Wv.close();
            const wv = Wv.openButton(),
              av = (0, Nv.i)(hv.frame, (0, dv.g)().swapSticks),
              sv = iv(Wv) ? av.move : av.look;
            vv !== Wv ? (vv = Wv, zv = !cv(hv, wv) || Math.hypot(sv.x, sv.y) >= ev.A, Pv = !1) : Pv && (Pv = !1, cv(hv, wv) && (zv = !1)), Wv.aim(sv);
            const Gv = (0, gv.f)("menuConfirm"),
              mv = (0, gv.f)("menuBack");
            return hv.wasPressed(mv) ? (pv.b.consumeButton(mv), void Wv.close()) : hv.wasPressed(Gv) || hv.wasPressed(wv) ? (pv.b.consumeButton(Gv), pv.b.consumeButton(wv), void Wv.commit(!1)) : void(zv && cv(hv, wv) && (zv = !1, Wv.commit(!0)))
          },
          onDeactivate: () => {
            Pv = null !== vv && Cv() === vv, Pv || (vv = null, zv = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);
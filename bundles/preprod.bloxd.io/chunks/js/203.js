export const id = 203;
export const ids = [203];
export const modules = {
  35649: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Vy,
      e: () => Ty
    });
    var Uy = Wy(3539),
      hy = Wy(1268),
      fy = Wy(55),
      Zy = Wy(5736),
      cb = Wy(3528),
      Py = Wy(1145),
      oy = Wy(1572),
      By = Wy(1546),
      Ky = Wy(1273),
      ey = Wy(1042),
      qb = Wy(35658),
      sy = Wy(898),
      Sy = Wy.n(sy),
      Ey = Wy(1162),
      ly = Wy(910),
      mb = Wy(1136),
      Cy = Wy(952);
    const Ty = "SleepingOverlay";

    function Vy() {
      const {
        t: yb
      } = (0, ey.D)(), [bb, Wy] = (0, fy.useState)(!1), [sy, Vy] = (0, fy.useState)(null), [gb, Gy] = (0, fy.useState)(1), [Oy, Ry] = (0, fy.useState)(!1), [vb, ib] = (0, fy.useState)(!1), My = (0, fy.useRef)(0), Yy = (0, fy.useRef)(!1), Xy = (0, fy.useRef)(!1), ny = (0, fy.useRef)(), uy = (0, fy.useRef)(null);

      function rb() {
        const yb = null !== sy && void 0 !== sy ? sy : "Rested Speed";
        oy.gameBridge.send("wakeUp", vb ? yb : null), uy.current = null, Wy(!1), Vy(null), Gy(1), Ry(!1), ib(!1)
      }

      function Hy() {
        return !Oy && (rb(), !0)
      }
      return (0, hy.i)("PlayerPhysicsTypeUpdate", (yb => {
        yb !== uy.current && (uy.current = yb, yb === Zy.q.SLEEPING ? (Xy.current || (My.current = oy.gameBridge.lookup("cameraZoom", null), Xy.current = !0), Yy.current = !0, oy.gameBridge.send("setCameraZoom", 3), Wy(!0), Gy(function() {
          for (const yb of oy.gameBridge.lookup("blocksStandingOn", null)) {
            if (qb.e.leafBeds.includes(yb)) return console.log(`Found leaf bed: ${yb}`), 1;
            if (qb.e.woolBeds.includes(yb)) return console.log(`Found woold bed: ${yb}`), 2;
            if (qb.e.strongBeds.includes(yb)) return console.log(`Found strong bed ${yb}`), 3
          }
          return 1
        }())) : (Xy.current = !1, Wy(!1), Vy(null), Gy(1)))
      })), (0, fy.useEffect)((() => () => {
        (0, Py.g)(Ty)
      }), []), (0, fy.useEffect)((() => {
        bb ? (0, Py.h)(Ty) : ((0, Py.g)(Ty), Yy.current && (oy.gameBridge.send("setCameraZoom", My.current), Yy.current = !1))
      }), [bb]), (0, mb.x)("overlay", ny, Hy, bb), (0, Cy.jsx)(Uy.e, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: bb,
        timeout: 300,
        nodeRef: ny,
        unmountOnExit: !0,
        children: (0, Cy.jsx)("div", {
          ref: ny,
          onClick: yb => {
            Hy() && yb.stopPropagation()
          },
          children: (0, Cy.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Cy.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: cb.f.map((bb => (0, Cy.jsxs)(Jy, {
                restedEffect: bb,
                KD: sy,
                setChosenRestedEffect: Vy,
                children: [(0, Cy.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Cy.jsx)(By.d, {
                    text: [{
                      icon: bb
                    }]
                  }), cb.c[bb].shortName]
                }), (0, Cy.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: yb(cb.c[bb].description, {
                    time: cb.c[bb].effectLevelDurations[gb] / 6e4
                  })
                })]
              }, bb)))
            }), (0, Cy.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Cy.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Cy.jsxs)(Ky.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: yb => {
                  vb ? rb() : (Ry(!0), (0, Ey.V)((() => {
                    Ry(!1), ib(!0)
                  }), !0)), yb.stopPropagation()
                },
                loading: Oy,
                children: [!vb && (0, Cy.jsxs)(Cy.Fragment, {
                  children: [(0, Cy.jsx)(ly.e, {
                    name: "film"
                  }), " ", yb("classicGame:watchAdToGetRestedPerk")]
                }), vb && yb("classicGame:wakeUp")]
              }), (0, Cy.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Cy.jsx)("div", {
                  className: Sy()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === gb
                  }),
                  children: (0, Cy.jsx)(By.d, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Cy.jsx)("div", {
                  className: Sy()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === gb
                  }),
                  children: (0, Cy.jsx)(By.d, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Cy.jsx)("div", {
                  className: Sy()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === gb
                  }),
                  children: (0, Cy.jsx)(By.d, {
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
    const Jy = (0, fy.memo)((function(yb) {
      let {
        children: bb,
        restedEffect: Wy,
        KD: Uy,
        setChosenRestedEffect: hy
      } = yb;
      return Wy === Uy ? (0, Cy.jsx)(Ky.i, {
        onClick: yb => {
          yb.stopPropagation()
        },
        children: bb
      }) : (0, Cy.jsx)(Ky.g, {
        onClick: yb => {
          hy(Wy), yb.stopPropagation()
        },
        children: bb
      })
    }))
  },
  39081: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Ny
    });
    var Uy = Wy(19),
      hy = Wy(23),
      fy = Wy(3553),
      Zy = Wy(248),
      cb = Wy(1458),
      Py = Wy(7335),
      oy = Wy(3569),
      By = Wy(7896),
      Ky = Wy(7365),
      ey = Wy(7345),
      qb = Wy(7370),
      sy = Wy(1490),
      Sy = Wy(7375),
      Ey = Wy(7796),
      ly = Wy(7938),
      mb = Wy(7905),
      Cy = Wy(7946),
      Ty = Wy(1572),
      Vy = Wy(7326),
      Jy = Wy(7855),
      gb = Wy(7846),
      Gy = Wy(7900);
    class Oy {
      constructor() {
        this.lostAtMs = null
      }
      update(yb, bb) {
        return yb ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= bb, bb - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class Ry {
      constructor(yb, bb) {
        this.press = yb, this.release = bb, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(yb, bb, Wy, Uy) {
        if (yb && null === this.downAtMs) return this.downAtMs = Wy, this.latched = Uy, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? yb && this.end() : !bb && Wy - this.downAtMs >= 40 && this.end())
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
        const yb = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(yb)
      }
    }
    const vb = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      ib = yb => {
        let bb = null;
        const Wy = new Gy.e,
          Uy = () => {
            bb && (((yb, bb, Wy) => {
              switch (Wy.kind) {
                case "reload":
                  return void bb.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void bb.specialActionUp(Wy.action);
                case "customButton":
                  return void Ty.gameBridge.send("pressCustomButton", {
                    id: Wy.id,
                    down: !1
                  });
                case "touchButton":
                  yb.pressTouchButton(!1)
              }
            })(yb, bb.bodies, bb.action), bb = null)
          },
          fy = (Wy, hy, fy, Zy) => {
            Uy(), bb = {
              action: hy,
              bodies: Wy,
              heldBy: fy,
              atMs: Zy
            }, ((yb, bb, Wy) => {
              switch (Wy.kind) {
                case "reload":
                  return bb.reloadGun(), void bb.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void bb.specialActionDown(Wy.action);
                case "customButton":
                  return void Ty.gameBridge.send("pressCustomButton", {
                    id: Wy.id,
                    down: !0
                  });
                case "touchButton":
                  yb.pressTouchButton(!0)
              }
            })(yb, Wy, hy)
          };
        return {
          update: (Zy, cb, oy, By) => {
            var ey;
            const qb = (0, Jy.j)(yb.contextActionInputs()),
              sy = null !== (ey = qb[0]) && void 0 !== ey ? ey : vb;
            (0, gb.e)((0, Jy.g)(sy) ? sy : null);
            const Sy = (0, Jy.e)(qb);
            (0, gb.i)(Sy);
            const Ey = (0, Py.e)("actionButton");
            if (Sy) {
              const yb = Wy.update(cb.wasPressed(Ey), cb.isHeld(Ey), oy, By);
              "tap" === yb ? fy(Zy, sy, [Ey], oy) : "hold" === yb && (Ky.b.consumeButton(Ey), hy.g.EZ(Cy.k, qb))
            } else Wy.release(), cb.wasPressed(Ey) && fy(Zy, sy, [Ey], oy);
            bb && oy - bb.atMs >= 40 && !bb.heldBy.some((yb => (0, Vy.M)(cb.frame.values, yb))) && Uy()
          },
          pressPicked: (yb, bb) => {
            fy(yb, bb, [(0, Py.e)("menuConfirm"), (0, Py.e)("actionButton")], performance.now())
          },
          release: () => {
            Wy.release(), Uy(), (0, gb.e)(null), (0, gb.i)(!1)
          }
        }
      };
    var My = Wy(7317);
    var Yy = Wy(39075),
      Xy = Wy(7864),
      ny = Wy(7361),
      uy = Wy(7987);
    var rb = Wy(39068),
      Hy = Wy(7993),
      ab = Wy(39090),
      Fy = Wy(7968),
      py = Wy(7868),
      Ly = Wy(7873),
      Qy = Wy(7880),
      jb = Wy(7800);
    const Dy = () => jb.c[(0, ey.g)().tapHoldTime].wheelMs,
      tb = () => ((0, By.c)(), new Event("controllerMenuKey")),
      wy = (yb, bb, Wy) => new Ry((() => {
        const Wy = yb.bodies();
        return {
          bodies: Wy,
          press: bb(Wy)
        }
      }), (yb => {
        let {
          bodies: bb,
          press: Uy
        } = yb;
        Wy(bb, Uy)
      })),
      kb = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      Ny = yb => {
        const bb = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let Wy = kb;
        const By = new ab.e,
          Ty = hy.g.subscribe("appManagerUpdated|activeInputDevice", (bb => {
            yb.deviceChanged(bb)
          }));
        let Jy = null,
          gb = 0;
        const Ry = () => {
          Jy = null, (0, py.d)(null)
        };
        let vb = !1;
        const Ny = new Oy,
          zb = yb.look,
          Iy = new Gy.e,
          xb = new Gy.e,
          Ay = ib(yb),
          dy = hy.g.subscribe(Cy.l, (bb => {
            Ay.pressPicked(yb.bodies(), bb)
          })),
          yW = wy(yb, (yb => yb.primaryFireDown()), ((yb, bb) => {
            yb.primaryFireUp(bb)
          })),
          bW = wy(yb, (yb => yb.altFireDown()), ((yb, bb) => {
            yb.altFireUp(bb)
          }));
        let Wb = !1,
          Ub = !1,
          hb = !1;
        const fb = (0, Ey.b)(Vy.ib),
          Zb = (0, Ey.b)(Vy.ib),
          cW = new Gy.e;
        let Pb = !1;
        const ob = () => {
            fb.reset(), Zb.reset(), cW.release(), (0, Qy.i)(!1), zb.release(), yW.cancel(), (0, Ly.g)(!1), bW.cancel(), Ay.release(), Iy.release(), xb.release(), Ry()
          },
          Bb = function() {
            let Uy = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            ob(), Ub = !1, Uy || (Wb = !1, Wy = kb, Object.assign(bb, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), yb.stopMoving())
          },
          Kb = function(Uy, hy, fy) {
            let Zy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const cb = (0, ey.g)(),
              oy = (0, rb.d)(hy, cb.moveDeadzone),
              Ky = (0, Py.e)("sprint");
            Wy = (0, rb.l)(Wy, {
              sprintPressed: Uy.wasPressed(Ky),
              magnitude: oy.magnitude,
              autoSprint: cb.autoSprint,
              nowMs: fy
            }), bb.running = Wy.running, bb.sprintHeld = Uy.isHeld(Ky), bb.x = oy.x, bb.y = oy.y, bb.magnitude = oy.speed, bb.headingOffset = oy.headingOffset, Wb = oy.magnitude > 0;
            const qb = (0, Py.e)("jump");
            if (bb.jumpHeld = Uy.isHeld(qb), bb.jumpPressed = Uy.wasPressed(qb), bb.jumpPressed && yb.bodies().jumpDown(), Zy) return void yb.move(bb, null);
            const sy = (0, Py.e)("sneak"),
              Sy = By.filter({
                sneakHeld: Uy.isHeld(sy),
                sneakPressed: Uy.wasPressed(sy),
                sneakTogglePressed: Uy.wasPressed((0, Py.e)("sneakToggle"))
              }, fy);
            yb.move(bb, {
              ...Sy,
              mode: cb.sneakMode
            })
          },
          eb = (yb, bb) => {
            const Wy = (0, Py.e)("chat");
            if ("off" === (0, ey.g)().quickChat) return void(yb.wasPressed(Wy) && (Ky.b.consumeButton(Wy), hy.g.EZ(Xy.d)));
            const Uy = Iy.update(yb.wasPressed(Wy), yb.isHeld(Wy), bb, Dy());
            "tap" === Uy || "hold" === Uy && null === (0, sy.c)() ? hy.g.EZ(Xy.d) : "hold" === Uy && (Ky.b.consumeButton(Wy), hy.g.EZ(mb.p))
          },
          qW = (bb, Wy) => {
            ((yb, bb) => {
              const Wy = (0, ly.b)(),
                Uy = (0, Py.e)("emoteWheel");
              if ("wheel" === (0, ey.g)().emoteButton) return yb.wasPressed(Uy) && (Ky.b.consumeButton(Uy), hy.g.EZ("requestEmoteWheelPadOpen", !0)), (0, ly.b)() !== Wy;
              const fy = xb.update(yb.wasPressed(Uy), yb.isHeld(Uy), bb, Dy());
              return "tap" === fy ? hy.g.EZ("requestEmoteRepeatLast") : "hold" === fy && (Ky.b.consumeButton(Uy), hy.g.EZ("requestEmoteWheelPadOpen", !1)), (0, ly.b)() !== Wy
            })(bb, Wy) || eb(bb, Wy), bb.wasPressed((0, Py.e)("inventory")) && (Ky.b.consumeButton((0, Py.e)("inventory")), (0, cb.u)(tb(), "inventory", yb.hasFullInventory())), bb.wasPressed((0, Py.e)("pause")) && (Ky.b.consumeButton((0, Py.e)("pause")), (0, oy.c)() === Zy.o.SOCIAL ? (0, cb.r)(tb(), Zy.o.SOCIAL) : (0, cb.i)(tb())), bb.wasPressed((0, Py.e)("leaderboard")) && !(0, fy.e)() && (Ky.b.consumeButton((0, Py.e)("leaderboard")), ((yb, bb) => {
              if ("shop" === (0, ny.d)()) return hy.g.EZ(uy.m), void(0, cb.r)(yb, Zy.o.SHOP, !0);
              (0, cb.r)(yb, Zy.o.LOBBY_LEADERBOARD, bb)
            })(tb(), yb.hasLobbyLeaderboard()))
          },
          sb = (bb, Wy) => {
            const Uy = yb.bodies();
            ((bb, Wy) => {
              const Uy = (0, Py.e)("attack"),
                hy = bb.wasPressed(Uy);
              hy && !yW.isLatched() && (vb = yb.targetsBlock()), yW.update(hy, bb.isHeld(Uy), Wy, "toggle" === (0, ey.g)().attackMode), yW.isLatched() && vb ? Ny.update(yb.targetsBlock(), Wy) && yW.unlatch() : Ny.reset(), (0, Ly.g)(yW.isLatched())
            })(bb, Wy), bW.update(bb.wasPressed((0, Py.e)("use")), bb.isHeld((0, Py.e)("use")), Wy, !1), fb.update(bb.isHeld((0, Py.e)("hotbarPrevious")), Wy) && yb.scrollHotbar(-1), Zb.update(bb.isHeld((0, Py.e)("hotbarNext")), Wy) && yb.scrollHotbar(1), ((bb, Wy, Uy) => {
              const hy = (0, Py.e)("perspective"),
                fy = (0, Py.e)("Fq"),
                Zy = yb.pickBlockAllowed();
              (0, Qy.i)(Zy && !Pb && yb.targetsBlock());
              const cb = () => {
                Wy.Fq() && (Pb = !0, (0, Qy.i)(!1))
              };
              if (!Zy || fy !== hy) return cW.release(), bb.wasPressed(hy) && Wy.swapCameraZoom(), void(Zy && bb.wasPressed(fy) && cb());
              const oy = cW.update(bb.wasPressed(fy), bb.isHeld(fy), Uy, Dy());
              "tap" === oy ? cb() : "hold" === oy && Wy.swapCameraZoom()
            })(bb, Uy, Wy), ((bb, Wy, Uy) => {
              const hy = (0, Py.e)("drop");
              if (bb.wasPressed(hy)) {
                Wy.dropItem(!1);
                const yb = (0, ey.g)();
                "off" !== yb.buttonRepeat && (Jy = Uy, gb = jb.c[yb.tapHoldTime].dropStackMs, (0, py.d)(gb))
              }
              null !== Jy && (!bb.isHeld(hy) || yb.selectedSlotEmpty() ? Ry() : Uy - Jy >= gb && (Ry(), Wy.dropItem(!0)))
            })(bb, Uy, Wy), Ay.update(Uy, bb, Wy, Dy()), qW(bb, Wy)
          },
          Sb = Ky.b.register({
            name: "gameplay",
            isActive: () => {
              const bb = Wb && "keyboardMouse" === Uy.d.get("activeInputDevice") && !(0, qb.I)(),
                Wy = (0, qb.o)() ? [Yy.e] : [];
              return ((0, qb.o)() || bb) && (0, Sy.e)(Wy) && yb.hasPlayer()
            },
            onFrame: yb => {
              const bb = performance.now(),
                Wy = (0, ey.g)(),
                Uy = (0, rb.n)(yb, (0, rb.h)(Wy, (0, Py.e)("pause"), (0, Hy.b)().isSupported())),
                hy = (0, rb.f)(Uy, Wy.swapSticks);
              return (0, qb.o)() ? (Ub = !1, (0, Sy.e)() ? (hb = !1, zb.update(hy.look, Wy, Uy.isHeld((0, Py.e)("use"))), Kb(Uy, hy.move, bb), void sb(Uy, bb)) : (hb || (hb = !0, By.lostToPadScreen(), Bb()), void eb(Uy, bb))) : (Ub || (ob(), Ub = !0), void Kb(Uy, hy.move, bb))
            },
            onDeactivate: yb => {
              (0, qb.o)() && By.lostToPadScreen(), Bb(yb)
            },
            onPeekFrame: bb => {
              (0, qb.o)() && (0, Sy.e)(Yy.l) && yb.hasPlayer() ? Kb(bb, (0, rb.f)(bb, (0, ey.g)().swapSticks).move, performance.now(), !0) : Bb()
            }
          }),
          Eb = (0, Yy.i)(yb),
          lb = (() => {
            const yb = hy.g.subscribe(My.c, (yb => {
              !yb && (0, qb.o)() && "inGame" === Uy.d.get("gameState") && hy.g.EZ("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              hy.g.unsubscribe(yb)
            }
          })();
        return () => {
          Bb(), yb.uninstall(), (0, Fy.e)(!1), (0, Qy.i)(!1), hy.g.unsubscribe(Ty), hy.g.unsubscribe(dy), Sb(), Eb(), lb(), zb.uninstall()
        }
      }
  },
  39075: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => sy,
      i: () => Ey,
      l: () => qb
    });
    var Uy = Wy(1145),
      hy = Wy(3553),
      fy = Wy(7923),
      Zy = Wy(35649),
      cb = Wy(1162),
      Py = Wy(1034),
      oy = Wy(7375),
      By = Wy(7905),
      Ky = Wy(7946);
    const ey = {
        emoteWheel: fy.f,
        quickChatWheel: By.b,
        actionWheel: Ky.p
      },
      qb = Object.keys(ey),
      sy = "dead",
      Sy = yb => (0, Uy.e)().includes(yb),
      Ey = yb => {
        const bb = [(0, oy.j)(sy, (() => yb.hasPlayer() && yb.isPlayerDead())), (0, oy.j)("sleeping", (() => Sy(Zy.e))), (0, oy.j)("turnstile", (() => Sy(Py.e))), (0, oy.j)("videoAd", cb.C), (0, oy.j)("replay", (() => (0, hy.e)() || yb.isReplayMode())), (0, oy.j)("freeCamera", (() => yb.isFreeCameraOn())), ...Object.entries(ey).map((yb => {
          let [bb, Wy] = yb;
          return (0, oy.j)(bb, Wy)
        }))];
        return () => {
          for (const yb of bb) yb()
        }
      }
  },
  39068: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => hy,
      d: () => Py,
      f: () => cb,
      h: () => By,
      i: () => Zy,
      k: () => fy,
      l: () => oy,
      n: () => Ky
    });
    var Uy = Wy(7326);
    class hy {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(yb, bb, Wy) {
        const hy = (0, Uy.k)(yb, bb.lookDeadzone);
        if (Math.hypot(hy.x, hy.y) < .9 || Math.abs(hy.x) < Math.abs(hy.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = Wy);
        const fy = (Zy = bb.lookSensitivityX, Math.min(1, 100 / Zy));
        var Zy;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (Wy - this.fullTiltSinceMs - 250 * fy) / (200 * fy)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const fy = (yb, bb, Wy, hy, fy) => {
        let Zy = 1;
        return "boost" === Wy.lookCurve ? Zy = yb.update(bb, Wy, fy) : yb.reset(),
          function(yb, bb) {
            let {
              yawBoost: Wy = 1,
              aiming: hy = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const fy = (0, Uy.i)((0, Uy.k)(yb, bb.lookDeadzone), bb.lookCurve),
              Zy = 220 * Math.PI / 180,
              cb = hy ? bb.aimLookSensitivity / 100 : 1,
              Py = bb.lookSensitivityX / 100 * cb,
              oy = bb.lookSensitivityY / 100 * cb;
            return {
              yawRadPerSec: fy.x * Zy * Py * Wy * (bb.invertLookX ? -1 : 1),
              pitchRadPerSec: fy.y * Zy * .7 * oy * (bb.invertLookY ? -1 : 1)
            }
          }(bb, Wy, {
            yawBoost: Zy,
            aiming: hy
          })
      },
      Zy = (yb, bb) => {
        const Wy = Math.max(0, Math.min(250, bb)) / 1e3;
        return {
          aWy: yb.yawRadPerSec * Wy,
          Fby: yb.pitchRadPerSec * Wy
        }
      },
      cb = (yb, bb) => bb ? {
        move: yb.rightStick,
        look: yb.leftStick
      } : {
        move: yb.leftStick,
        look: yb.rightStick
      },
      Py = (yb, bb) => {
        const Wy = (0, Uy.k)(yb, bb),
          hy = Math.min(1, Math.hypot(Wy.x, Wy.y));
        return {
          magnitude: hy,
          speed: Math.min(1, hy / .8),
          headingOffset: 0 === hy ? 0 : Math.atan2(Wy.x, -Wy.y),
          x: Wy.x,
          y: Wy.y
        }
      },
      oy = (yb, bb) => {
        let {
          sprintPressed: Wy,
          magnitude: Uy,
          autoSprint: hy,
          nowMs: fy
        } = bb;
        const Zy = Wy ? fy : yb.latchedAtMs,
          cb = (yb => {
            let {
              running: bb,
              magnitude: Wy,
              sprintPressed: Uy,
              autoSprint: hy
            } = yb;
            return !(Wy < .5) && (!!Uy || !!(hy && Wy >= .9) || bb)
          })({
            running: yb.running,
            magnitude: Uy,
            sprintPressed: fy - Zy <= 1e3,
            autoSprint: hy
          });
        return {
          running: cb,
          latchedAtMs: cb ? -1 / 0 : Zy
        }
      },
      By = (yb, bb, Wy) => Wy && yb.gyroAiming && "button" === yb.gyroActivation && yb.gyroButton !== bb ? yb.gyroButton : null,
      Ky = (yb, bb) => bb ? {
        ...yb,
        isHeld: Wy => Wy !== bb && yb.isHeld(Wy),
        wasPressed: Wy => Wy !== bb && yb.wasPressed(Wy),
        wasReleased: Wy => Wy !== bb && yb.wasReleased(Wy),
        value: Wy => Wy === bb ? 0 : yb.value(Wy)
      } : yb
  },
  39090: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => hy,
      i: () => Uy
    });
    const Uy = yb => {
      let {
        mode: bb,
        sneakHeld: Wy,
        sneakPressed: Uy,
        sneakTogglePressed: hy,
        descending: fy,
        canCrouch: Zy,
        toggled: cb
      } = yb;
      return Zy ? fy ? {
        crouchHeld: Wy,
        toggled: !1
      } : "hold" === bb ? {
        crouchHeld: Wy,
        toggled: hy ? !cb : cb
      } : {
        crouchHeld: !1,
        toggled: Uy || hy ? !cb : cb
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class hy {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(yb, bb) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = bb, this.graceEndsMs = bb + 500);
        const Wy = bb < this.graceEndsMs;
        return Wy && (yb.sneakPressed || yb.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, bb + 300))), yb.sneakHeld ? Wy && yb.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: yb.sneakHeld && !this.ignoringHeld,
          sneakPressed: yb.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: yb.sneakTogglePressed && !Wy
        }
      }
    }
  },
  39051: (yb, bb, Wy) => {
    Wy(7993)
  },
  39060: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Cy
    });
    var Uy = Wy(23),
      hy = Wy(7923),
      fy = Wy(7932),
      Zy = Wy(7335),
      cb = Wy(7365),
      Py = Wy(7345),
      oy = Wy(39068),
      By = Wy(39075),
      Ky = Wy(7375),
      ey = Wy(7326),
      qb = Wy(7905),
      sy = Wy(7946);
    const Sy = [{
        isOpen: hy.g,
        openButton: () => (0, Zy.e)("emoteWheel"),
        aim: yb => {
          Uy.g.EZ("emoteWheelPadAim", yb)
        },
        commit: yb => {
          Uy.g.EZ("requestEmoteWheelPadCommit", yb)
        },
        close: () => {
          Uy.g.EZ("requestEmoteWheelClose")
        }
      }, {
        isOpen: qb.b,
        openButton: () => (0, Zy.e)("chat"),
        aim: yb => {
          Uy.g.EZ(qb.f, yb)
        },
        commit: yb => {
          Uy.g.EZ(qb.m, yb)
        },
        close: () => {
          Uy.g.EZ(qb.j)
        },
        keptOpenBy: [By.e]
      }, {
        isOpen: sy.p,
        openButton: () => (0, Zy.e)("actionButton"),
        aim: yb => {
          Uy.g.EZ(sy.c, yb)
        },
        commit: yb => {
          Uy.g.EZ(sy.h, yb)
        },
        close: () => {
          Uy.g.EZ(sy.e)
        }
      }],
      Ey = () => {
        var yb;
        return null !== (yb = Sy.find((yb => yb.isOpen()))) && void 0 !== yb ? yb : null
      },
      ly = yb => (0, Zy.F)(yb.openButton()),
      mb = (yb, bb) => !(0, ey.M)(yb.frame.values, bb),
      Cy = () => {
        let yb = null,
          bb = !1,
          Wy = !1;
        return cb.b.register({
          name: "wheel",
          isActive: () => null !== Ey(),
          peek: () => {
            const yb = Ey();
            return yb && ly(yb) ? null : {
              over: "gameplay",
              stick: (0, Py.g)().swapSticks ? "right" : "left"
            }
          },
          onFrame: Uy => {
            var hy;
            const ey = Ey();
            if (!ey) return;
            if (null !== (0, Ky.c)([...By.l, ...null !== (hy = ey.keptOpenBy) && void 0 !== hy ? hy : []])) return void ey.close();
            const qb = ey.openButton(),
              sy = (0, oy.f)(Uy.frame, (0, Py.g)().swapSticks),
              Sy = ly(ey) ? sy.move : sy.look;
            yb !== ey ? (yb = ey, bb = !mb(Uy, qb) || Math.hypot(Sy.x, Sy.y) >= fy.t, Wy = !1) : Wy && (Wy = !1, mb(Uy, qb) && (bb = !1)), ey.aim(Sy);
            const Cy = (0, Zy.e)("menuConfirm"),
              Ty = (0, Zy.e)("menuBack");
            return Uy.wasPressed(Ty) ? (cb.b.consumeButton(Ty), void ey.close()) : Uy.wasPressed(Cy) || Uy.wasPressed(qb) ? (cb.b.consumeButton(Cy), cb.b.consumeButton(qb), void ey.commit(!1)) : void(bb && mb(Uy, qb) && (bb = !1, ey.commit(!0)))
          },
          onDeactivate: () => {
            Wy = null !== yb && Ey() === yb, Wy || (yb = null, bb = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);
export const id = 257;
export const ids = [257];
export const modules = {
  38385: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Kr,
      h: () => er
    });
    var Zr = Qr(3011),
      Wr = Qr(1573),
      ar = Qr(72),
      jr = Qr(7424),
      Ir = Qr(2989),
      fr = Qr(1353),
      Er = Qr(2089),
      pr = Qr(2057),
      xr = Qr(1576),
      mr = Qr(1251),
      Nr = Qr(38390),
      Ur = Qr(1155),
      tr = Qr.n(Ur),
      hr = Qr(1413),
      zr = Qr(1448),
      Yr = Qr(1330),
      nr = Qr(1338);
    const er = "SleepingOverlay";

    function Kr() {
      const {
        t: rr
      } = (0, mr.E)(), [Sr, Qr] = (0, ar.useState)(!1), [Ur, Kr] = (0, ar.useState)(null), [Br, Tr] = (0, ar.useState)(1), [vr, Or] = (0, ar.useState)(!1), [Lr, lr] = (0, ar.useState)(!1), Xr = (0, ar.useRef)(0), Pr = (0, ar.useRef)(!1), Hr = (0, ar.useRef)(!1), qr = (0, ar.useRef)(), Rr = (0, ar.useRef)(null);

      function gr() {
        const rr = null !== Ur && void 0 !== Ur ? Ur : "Rested Speed";
        Er.gameBridge.send("wakeUp", Lr ? rr : null), Rr.current = null, Qr(!1), Kr(null), Tr(1), Or(!1), lr(!1)
      }

      function Cr() {
        return !vr && (gr(), !0)
      }
      return (0, Wr.c)("PlayerPhysicsTypeUpdate", (rr => {
        rr !== Rr.current && (Rr.current = rr, rr === jr.n.SLEEPING ? (Hr.current || (Xr.current = Er.gameBridge.lookup("cameraZoom", null), Hr.current = !0), Pr.current = !0, Er.gameBridge.send("setCameraZoom", 3), Qr(!0), Tr(function() {
          for (const rr of Er.gameBridge.lookup("blocksStandingOn", null)) {
            if (Nr.c.leafBeds.includes(rr)) return console.log(`Found leaf bed: ${rr}`), 1;
            if (Nr.c.woolBeds.includes(rr)) return console.log(`Found woold bed: ${rr}`), 2;
            if (Nr.c.strongBeds.includes(rr)) return console.log(`Found strong bed ${rr}`), 3
          }
          return 1
        }())) : (Hr.current = !1, Qr(!1), Kr(null), Tr(1)))
      })), (0, ar.useEffect)((() => () => {
        (0, fr.s)(er)
      }), []), (0, ar.useEffect)((() => {
        Sr ? (0, fr.t)(er) : ((0, fr.s)(er), Pr.current && (Er.gameBridge.send("setCameraZoom", Xr.current), Pr.current = !1))
      }), [Sr]), (0, Yr.u)("overlay", qr, Cr, Sr), (0, nr.jsx)(Zr.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: Sr,
        timeout: 300,
        nodeRef: qr,
        unmountOnExit: !0,
        children: (0, nr.jsx)("div", {
          ref: qr,
          onClick: rr => {
            Cr() && rr.stopPropagation()
          },
          children: (0, nr.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, nr.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: Ir.h.map((Sr => (0, nr.jsxs)(yr, {
                restedEffect: Sr,
                JE: Ur,
                setChosenRestedEffect: Kr,
                children: [(0, nr.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, nr.jsx)(pr.c, {
                    text: [{
                      icon: Sr
                    }]
                  }), Ir.e[Sr].shortName]
                }), (0, nr.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: rr(Ir.e[Sr].description, {
                    time: Ir.e[Sr].effectLevelDurations[Br] / 6e4
                  })
                })]
              }, Sr)))
            }), (0, nr.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, nr.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, nr.jsxs)(xr.h, {
                className: "SleepingOverlayWakeUpButton",
                onClick: rr => {
                  Lr ? gr() : (Or(!0), (0, hr.V)((() => {
                    Or(!1), lr(!0)
                  }), !0)), rr.stopPropagation()
                },
                loading: vr,
                children: [!Lr && (0, nr.jsxs)(nr.Fragment, {
                  children: [(0, nr.jsx)(zr.c, {
                    name: "film"
                  }), " ", rr("classicGame:watchAdToGetRestedPerk")]
                }), Lr && rr("classicGame:wakeUp")]
              }), (0, nr.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, nr.jsx)("div", {
                  className: tr()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === Br
                  }),
                  children: (0, nr.jsx)(pr.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, nr.jsx)("div", {
                  className: tr()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === Br
                  }),
                  children: (0, nr.jsx)(pr.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, nr.jsx)("div", {
                  className: tr()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === Br
                  }),
                  children: (0, nr.jsx)(pr.c, {
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
    const yr = (0, ar.memo)((function(rr) {
      let {
        children: Sr,
        restedEffect: Qr,
        JE: Zr,
        setChosenRestedEffect: Wr
      } = rr;
      return Qr === Zr ? (0, nr.jsx)(xr.p, {
        onClick: rr => {
          rr.stopPropagation()
        },
        children: Sr
      }) : (0, nr.jsx)(xr.k, {
        onClick: rr => {
          Wr(Qr), rr.stopPropagation()
        },
        children: Sr
      })
    }))
  },
  42424: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => sr
    });
    var Zr = Qr(26),
      Wr = Qr(34),
      ar = Qr(4937),
      jr = Qr(360),
      Ir = Qr(1758),
      fr = Qr(9306),
      Er = Qr(4961),
      pr = Qr(9799),
      xr = Qr(9333),
      mr = Qr(9313),
      Nr = Qr(9337),
      Ur = Qr(1518),
      tr = Qr(1811),
      hr = Qr(9339),
      zr = Qr(9750),
      Yr = Qr(9915),
      nr = Qr(9813),
      er = Qr(9923),
      Kr = Qr(2089),
      yr = Qr(9292),
      Br = Qr(9845),
      Tr = Qr(9837),
      vr = Qr(9806);
    class Or {
      constructor() {
        this.lostAtMs = null
      }
      update(rr, Sr) {
        return rr ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= Sr, Sr - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class Lr {
      constructor(rr, Sr) {
        this.press = rr, this.release = Sr, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(rr, Sr, Qr, Zr) {
        if (rr && null === this.downAtMs) return this.downAtMs = Qr, this.latched = Zr, void(this.token = this.press(Zr));
        null !== this.downAtMs && (this.latched ? rr && this.end() : !Sr && Qr - this.downAtMs >= 40 && this.end())
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
        const rr = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(rr)
      }
    }
    const lr = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      Xr = rr => {
        let Sr = null;
        const Qr = new vr.c,
          Zr = () => {
            Sr && (((rr, Sr, Qr) => {
              switch (Qr.kind) {
                case "reload":
                  return void Sr.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void Sr.specialActionUp(Qr.action);
                case "customButton":
                  return void Kr.gameBridge.send("pressCustomButton", {
                    id: Qr.id,
                    down: !1
                  });
                case "touchButton":
                  rr.pressTouchButton(!1)
              }
            })(rr, Sr.bodies, Sr.action), Sr = null)
          },
          ar = (Qr, Wr, ar, jr) => {
            Zr(), Sr = {
              action: Wr,
              bodies: Qr,
              heldBy: ar,
              atMs: jr
            }, ((rr, Sr, Qr) => {
              switch (Qr.kind) {
                case "reload":
                  return Sr.reloadGun(), void Sr.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void Sr.specialActionDown(Qr.action);
                case "customButton":
                  return void Kr.gameBridge.send("pressCustomButton", {
                    id: Qr.id,
                    down: !0
                  });
                case "touchButton":
                  rr.pressTouchButton(!0)
              }
            })(rr, Qr, Wr)
          };
        return {
          update: (jr, Ir, Er, pr) => {
            var mr;
            const Nr = (0, Br.k)(rr.contextActionInputs()),
              Ur = null !== (mr = Nr[0]) && void 0 !== mr ? mr : lr;
            (0, Tr.c)((0, Br.e)(Ur) ? Ur : null);
            const tr = (0, Br.c)(Nr);
            (0, Tr.g)(tr);
            const hr = (0, fr.k)("actionButton");
            if (tr) {
              const rr = Qr.update(Ir.wasPressed(hr), Ir.isHeld(hr), Er, pr);
              "tap" === rr ? ar(jr, Ur, [hr], Er) : "hold" === rr && (xr.d.consumeButton(hr), Wr.i.Jp(er.m, Nr))
            } else Qr.release(), Ir.wasPressed(hr) && ar(jr, Ur, [hr], Er);
            Sr && Er - Sr.atMs >= 40 && !Sr.heldBy.some((rr => (0, yr.I)(Ir.frame.values, rr))) && Zr()
          },
          pressPicked: (rr, Sr) => {
            ar(rr, Sr, [(0, fr.k)("menuConfirm"), (0, fr.k)("actionButton")], performance.now())
          },
          release: () => {
            Qr.release(), Zr(), (0, Tr.c)(null), (0, Tr.g)(!1)
          }
        }
      };
    var Pr = Qr(9289);
    var Hr = Qr(42418),
      qr = Qr(9859),
      Rr = Qr(3425),
      gr = Qr(9329),
      Cr = Qr(9965);
    var Mr = Qr(42412),
      Gr = Qr(9971),
      kr = Qr(42429),
      Ar = Qr(9946),
      Vr = Qr(9868),
      ir = Qr(9872),
      wr = Qr(9881);
    class cr {
      constructor(rr) {
        this.bodies = rr, this.gesture = new vr.c, this.zoomBodies = null
      }
      update(rr, Sr, Qr, Zr, Wr) {
        if (!Wr) return this.release(), rr.wasPressed(Sr);
        if (null !== this.zoomBodies) return rr.isHeld(Sr) || this.endZoom(), !1;
        const ar = this.gesture.update(rr.wasPressed(Sr), rr.isHeld(Sr), Qr, Zr);
        return "hold" === ar && rr.isHeld(Sr) && (this.zoomBodies = this.bodies(), this.zoomBodies.zoom(!0)), "tap" === ar
      }
      release() {
        this.gesture.release(), this.endZoom()
      }
      endZoom() {
        var rr;
        null === (rr = this.zoomBodies) || void 0 === rr || rr.zoom(!1), this.zoomBodies = null
      }
    }
    var Fr = Qr(9758),
      or = Qr(9827);
    const br = () => Fr.c[(0, mr.g)().tapHoldTime].wheelMs,
      Jr = () => ((0, pr.e)(), (0, or.e)("controllerMenuKey")),
      Dr = (rr, Sr, Qr) => new Lr((Qr => {
        const Zr = rr.bodies();
        return {
          bodies: Zr,
          press: Sr(Zr, Qr)
        }
      }), (rr => {
        let {
          bodies: Sr,
          press: Zr
        } = rr;
        Qr(Sr, Zr)
      })),
      dr = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      sr = rr => {
        const Sr = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let Qr = dr;
        const pr = new kr.b,
          Kr = Wr.i.subscribe("appManagerUpdated|activeInputDevice", (Sr => {
            rr.deviceChanged(Sr)
          }));
        let Br = null,
          Tr = 0;
        const Lr = () => {
          Br = null, (0, Vr.c)(null)
        };
        let lr = !1;
        const or = new Or,
          sr = rr.look,
          ur = new vr.c,
          rS = new vr.c,
          SS = Xr(rr),
          QS = Wr.i.subscribe(er.n, (Sr => {
            SS.pressPicked(rr.bodies(), Sr)
          })),
          ZS = Dr(rr, ((rr, Sr) => rr.primaryFireDown(!Sr)), ((rr, Sr) => {
            rr.primaryFireUp(Sr)
          })),
          WS = Dr(rr, (rr => rr.altFireDown()), ((rr, Sr) => {
            rr.altFireUp(Sr)
          }));
        let aS = !1,
          jS = -1 / 0,
          IS = !1,
          fS = !1;
        const ES = (0, zr.c)(yr.Y),
          pS = (0, zr.c)(yr.Y),
          xS = new vr.c;
        let mS = !1;
        const NS = new cr((() => rr.bodies())),
          US = () => {
            ES.reset(), pS.reset(), xS.release(), NS.release(), (0, wr.e)(!1), sr.release(), ZS.cancel(), (0, ir.g)(!1), WS.cancel(), SS.release(), ur.release(), rS.release(), Lr()
          },
          tS = function() {
            let Zr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            US(), IS = !1, Zr || (aS = !1, Qr = dr, Object.assign(Sr, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), rr.stopMoving())
          };
        let hS = !1;
        const zS = function(Zr, ar, jr) {
            let Ir = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, Ur.h)()) return void(hS || (hS = !0, aS = !1, rr.stopMoving()));
            hS = !1;
            const Er = (0, mr.g)(),
              xr = (0, Mr.d)(ar, Er.moveDeadzone),
              Nr = (0, fr.k)("sprint");
            Qr = (0, Mr.s)(Qr, {
              sprintPressed: Zr.wasPressed(Nr),
              magnitude: xr.magnitude,
              autoSprint: Er.autoSprint,
              nowMs: jr
            }), Sr.running = Qr.running, Sr.sprintHeld = Zr.isHeld(Nr), Sr.x = xr.x, Sr.y = xr.y, Sr.magnitude = xr.speed, Sr.headingOffset = xr.headingOffset, xr.magnitude > 0 && (!aS || jr - jS >= 1e3) && (jS = jr, Wr.i.Jp("stickMoved")), aS = xr.magnitude > 0;
            const tr = (0, fr.k)("jump");
            if (Sr.jumpHeld = Zr.isHeld(tr), Sr.jumpPressed = Zr.wasPressed(tr), Sr.jumpPressed && rr.bodies().jumpDown(), Ir) return void rr.move(Sr, null);
            const hr = (0, fr.k)("sneak"),
              zr = pr.filter({
                sneakHeld: Zr.isHeld(hr),
                sneakPressed: Zr.wasPressed(hr),
                sneakTogglePressed: NS.update(Zr, (0, fr.k)("sneakToggle"), jr, br(), rr.zoomAllowed())
              }, jr);
            rr.move(Sr, {
              ...zr,
              mode: Er.sneakMode
            })
          },
          YS = (rr, Sr) => {
            const Qr = (0, fr.k)("chat");
            if ("off" === (0, mr.g)().quickChat) return void(rr.wasPressed(Qr) && (xr.d.consumeButton(Qr), Wr.i.Jp(qr.c)));
            const Zr = ur.update(rr.wasPressed(Qr), rr.isHeld(Qr), Sr, br());
            "tap" === Zr || "hold" === Zr && null === (0, tr.c)() ? Wr.i.Jp(qr.c) : "hold" === Zr && (xr.d.consumeButton(Qr), Wr.i.Jp(nr.k))
          },
          nS = (Sr, Qr) => {
            ((rr, Sr) => {
              const Qr = (0, Yr.b)(),
                Zr = (0, fr.k)("emoteWheel");
              if ("wheel" === (0, mr.g)().emoteButton) return rr.wasPressed(Zr) && (xr.d.consumeButton(Zr), Wr.i.Jp("requestEmoteWheelPadOpen", !0)), (0, Yr.b)() !== Qr;
              const ar = rS.update(rr.wasPressed(Zr), rr.isHeld(Zr), Sr, br());
              return "tap" === ar ? Wr.i.Jp("requestEmoteRepeatLast") : "hold" === ar && (xr.d.consumeButton(Zr), Wr.i.Jp("requestEmoteWheelPadOpen", !1)), (0, Yr.b)() !== Qr
            })(Sr, Qr) || YS(Sr, Qr), Sr.wasPressed((0, fr.k)("inventory")) && (xr.d.consumeButton((0, fr.k)("inventory")), (0, Ir.v)(Jr(), "inventory", rr.hasFullInventory())), Sr.wasPressed((0, fr.k)("pause")) && (xr.d.consumeButton((0, fr.k)("pause")), (0, Er.c)() === jr.q.SOCIAL ? (0, Ir.s)(Jr(), jr.q.SOCIAL) : (0, Ir.g)(Jr())), Sr.wasPressed((0, fr.k)("leaderboard")) && !(0, ar.f)() && (xr.d.consumeButton((0, fr.k)("leaderboard")), ((rr, Sr) => {
              if ("shop" === (0, gr.c)()) return Wr.i.Jp(Cr.n), void(0, Ir.s)(rr, jr.q.SHOP, !0);
              (0, Ir.w)(rr, Sr, (0, Rr.o)())
            })(Jr(), rr.hasLobbyTab()))
          },
          eS = (Sr, Qr) => {
            const Zr = rr.bodies();
            ((Sr, Qr) => {
              const Zr = (0, fr.k)("attack"),
                Wr = Sr.wasPressed(Zr);
              Wr && !ZS.isLatched() && (lr = rr.targetsBlock()), ZS.update(Wr, Sr.isHeld(Zr), Qr, "toggle" === (0, mr.g)().attackMode), ZS.isLatched() && lr ? or.update(rr.targetsBlock(), Qr) && ZS.unlatch() : or.reset(), (0, ir.g)(ZS.isLatched())
            })(Sr, Qr), WS.update(Sr.wasPressed((0, fr.k)("use")), Sr.isHeld((0, fr.k)("use")), Qr, !1), ES.update(Sr.isHeld((0, fr.k)("hotbarPrevious")), Qr) && rr.scrollHotbar(-1), pS.update(Sr.isHeld((0, fr.k)("hotbarNext")), Qr) && rr.scrollHotbar(1), ((Sr, Qr, Zr) => {
              const Wr = (0, fr.k)("perspective"),
                ar = (0, fr.k)("pickBlock"),
                jr = rr.pickBlockAllowed();
              (0, wr.e)(jr && !mS && rr.targetsBlock());
              const Ir = () => {
                Qr.pickBlock() && (mS = !0, (0, wr.e)(!1))
              };
              if (!jr || ar !== Wr) return xS.release(), Sr.wasPressed(Wr) && Qr.swapCameraZoom(), void(jr && Sr.wasPressed(ar) && Ir());
              const Er = xS.update(Sr.wasPressed(ar), Sr.isHeld(ar), Zr, br());
              "tap" === Er ? Ir() : "hold" === Er && Qr.swapCameraZoom()
            })(Sr, Zr, Qr), ((Sr, Qr, Zr) => {
              const Wr = (0, fr.k)("drop");
              if (Sr.wasPressed(Wr)) {
                Qr.dropItem(!1);
                const rr = (0, mr.g)();
                "off" !== rr.buttonRepeat && (Br = Zr, Tr = Fr.c[rr.tapHoldTime].dropStackMs, (0, Vr.c)(Tr))
              }
              null !== Br && (!Sr.isHeld(Wr) || rr.selectedSlotEmpty() ? Lr() : Zr - Br >= Tr && (Lr(), Qr.dropItem(!0)))
            })(Sr, Zr, Qr), SS.update(Zr, Sr, Qr, br()), nS(Sr, Qr)
          },
          KS = xr.d.register({
            name: "gameplay",
            isActive: () => {
              const Sr = aS && "keyboardMouse" === Zr.c.get("activeInputDevice") && !(0, Nr.I)(),
                Qr = (0, Nr.p)() ? [Hr.d] : [];
              return ((0, Nr.p)() || Sr) && (0, hr.f)(Qr) && rr.hasPlayer()
            },
            onFrame: rr => {
              const Sr = performance.now(),
                Qr = (0, mr.g)(),
                Zr = (0, Mr.t)(rr, (0, Mr.j)(Qr, (0, fr.k)("pause"), (0, Gr.b)().isSupported())),
                Wr = (0, Mr.f)(Zr, Qr.swapSticks);
              return (0, Nr.p)() ? (IS = !1, (0, hr.f)() ? (fS = !1, sr.update(Wr.look, Qr, Zr.isHeld((0, fr.k)("use"))), zS(Zr, Wr.move, Sr), void eS(Zr, Sr)) : (fS || (fS = !0, pr.lostToPadScreen(), tS()), void YS(Zr, Sr))) : (IS || (US(), IS = !0), void zS(Zr, Wr.move, Sr))
            },
            onDeactivate: rr => {
              (0, Nr.p)() && pr.lostToPadScreen(), tS(rr)
            },
            onPeekFrame: Sr => {
              (0, Nr.p)() && (0, hr.f)(Hr.f) && rr.hasPlayer() ? zS(Sr, (0, Mr.f)(Sr, (0, mr.g)().swapSticks).move, performance.now(), !0) : tS()
            }
          }),
          yS = (0, Hr.e)(rr),
          BS = (() => {
            const rr = Wr.i.subscribe(Pr.b, (rr => {
              !rr && (0, Nr.p)() && "inGame" === Zr.c.get("gameState") && Wr.i.Jp("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              Wr.i.unsubscribe(rr)
            }
          })();
        return () => {
          tS(), rr.uninstall(), (0, Ar.d)(!1), (0, wr.e)(!1), Wr.i.unsubscribe(Kr), Wr.i.unsubscribe(QS), KS(), yS(), BS(), sr.uninstall()
        }
      }
  },
  42418: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ur,
      e: () => hr,
      f: () => Nr
    });
    var Zr = Qr(1353),
      Wr = Qr(4937),
      ar = Qr(9901),
      jr = Qr(38385),
      Ir = Qr(1849),
      fr = Qr(1246),
      Er = Qr(9339),
      pr = Qr(9813),
      xr = Qr(9923);
    const mr = {
        emoteWheel: ar.f,
        quickChatWheel: pr.d,
        actionWheel: xr.p
      },
      Nr = Object.keys(mr),
      Ur = "dead",
      tr = rr => (0, Zr.p)().includes(rr),
      hr = rr => {
        const Sr = [(0, Er.j)(Ur, (() => rr.hasPlayer() && rr.isPlayerDead())), (0, Er.j)("sleeping", (() => tr(jr.h))), (0, Er.j)("turnstile", (() => tr(fr.g))), (0, Er.j)("videoAd", Ir.d), (0, Er.j)("replay", (() => (0, Wr.f)() || rr.isReplayMode())), (0, Er.j)("freeCamera", (() => rr.isFreeCameraOn())), ...Object.entries(mr).map((rr => {
          let [Sr, Qr] = rr;
          return (0, Er.j)(Sr, Qr)
        }))];
        return () => {
          for (const rr of Sr) rr()
        }
      }
  },
  42412: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Wr,
      d: () => fr,
      f: () => Ir,
      j: () => pr,
      m: () => jr,
      q: () => ar,
      s: () => Er,
      t: () => xr
    });
    var Zr = Qr(9292);
    class Wr {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(rr, Sr, Qr) {
        const Wr = (0, Zr.h)(rr, Sr.lookDeadzone);
        if (Math.hypot(Wr.x, Wr.y) < .9 || Math.abs(Wr.x) < Math.abs(Wr.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = Qr);
        const ar = (jr = Sr.lookSensitivityX, Math.min(1, 100 / jr));
        var jr;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (Qr - this.fullTiltSinceMs - 250 * ar) / (200 * ar)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const ar = (rr, Sr, Qr, Wr, ar) => {
        let jr = 1;
        return "boost" === Qr.lookCurve ? jr = rr.update(Sr, Qr, ar) : rr.reset(),
          function(rr, Sr) {
            let {
              yawBoost: Qr = 1,
              aiming: Wr = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const ar = (0, Zr.f)((0, Zr.h)(rr, Sr.lookDeadzone), Sr.lookCurve),
              jr = 220 * Math.PI / 180,
              Ir = Wr ? Sr.aimLookSensitivity / 100 : 1,
              fr = Sr.lookSensitivityX / 100 * Ir,
              Er = Sr.lookSensitivityY / 100 * Ir;
            return {
              yawRadPerSec: ar.x * jr * fr * Qr * (Sr.invertLookX ? -1 : 1),
              pitchRadPerSec: ar.y * jr * .7 * Er * (Sr.invertLookY ? -1 : 1)
            }
          }(Sr, Qr, {
            yawBoost: jr,
            aiming: Wr
          })
      },
      jr = (rr, Sr) => {
        const Qr = Math.max(0, Math.min(250, Sr)) / 1e3;
        return {
          xR: rr.yawRadPerSec * Qr,
          yR: rr.pitchRadPerSec * Qr
        }
      },
      Ir = (rr, Sr) => Sr ? {
        move: rr.rightStick,
        look: rr.leftStick
      } : {
        move: rr.leftStick,
        look: rr.rightStick
      },
      fr = (rr, Sr) => {
        const Qr = (0, Zr.h)(rr, Sr),
          Wr = Math.min(1, Math.hypot(Qr.x, Qr.y));
        return {
          magnitude: Wr,
          speed: Math.min(1, Wr / .8),
          headingOffset: 0 === Wr ? 0 : Math.atan2(Qr.x, -Qr.y),
          x: Qr.x,
          y: Qr.y
        }
      },
      Er = (rr, Sr) => {
        let {
          sprintPressed: Qr,
          magnitude: Zr,
          autoSprint: Wr,
          nowMs: ar
        } = Sr;
        const jr = Qr ? ar : rr.latchedAtMs,
          Ir = (rr => {
            let {
              running: Sr,
              magnitude: Qr,
              sprintPressed: Zr,
              autoSprint: Wr
            } = rr;
            return !(Qr < .5) && (!!Zr || !!(Wr && Qr >= .9) || Sr)
          })({
            running: rr.running,
            magnitude: Zr,
            sprintPressed: ar - jr <= 1e3,
            autoSprint: Wr
          });
        return {
          running: Ir,
          latchedAtMs: Ir ? -1 / 0 : jr
        }
      },
      pr = (rr, Sr, Qr) => Qr && rr.gyroAiming && "button" === rr.gyroActivation && rr.gyroButton !== Sr ? rr.gyroButton : null,
      xr = (rr, Sr) => Sr ? {
        ...rr,
        isHeld: Qr => Qr !== Sr && rr.isHeld(Qr),
        wasPressed: Qr => Qr !== Sr && rr.wasPressed(Qr),
        wasReleased: Qr => Qr !== Sr && rr.wasReleased(Qr),
        value: Qr => Qr === Sr ? 0 : rr.value(Qr)
      } : rr
  },
  42429: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr,
      c: () => Zr
    });
    const Zr = rr => {
      let {
        mode: Sr,
        sneakHeld: Qr,
        sneakPressed: Zr,
        sneakTogglePressed: Wr,
        descending: ar,
        canCrouch: jr,
        toggled: Ir
      } = rr;
      return jr ? ar ? {
        crouchHeld: Qr,
        toggled: !1
      } : "hold" === Sr ? {
        crouchHeld: Qr,
        toggled: Wr ? !Ir : Ir
      } : {
        crouchHeld: !1,
        toggled: Zr || Wr ? !Ir : Ir
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class Wr {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(rr, Sr) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = Sr, this.graceEndsMs = Sr + 500);
        const Qr = Sr < this.graceEndsMs;
        return Qr && (rr.sneakPressed || rr.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, Sr + 300))), rr.sneakHeld ? Qr && rr.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: rr.sneakHeld && !this.ignoringHeld,
          sneakPressed: rr.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: rr.sneakTogglePressed && !Qr
        }
      }
    }
  },
  42398: (rr, Sr, Qr) => {
    Qr(9971)
  },
  42404: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => nr
    });
    var Zr = Qr(34),
      Wr = Qr(9901),
      ar = Qr(9909),
      jr = Qr(9306),
      Ir = Qr(9333),
      fr = Qr(9313),
      Er = Qr(42412),
      pr = Qr(42418),
      xr = Qr(9339),
      mr = Qr(9292),
      Nr = Qr(9813),
      Ur = Qr(9923);
    const tr = [{
        isOpen: Wr.i,
        openButton: () => (0, jr.k)("emoteWheel"),
        aim: rr => {
          Zr.i.Jp("emoteWheelPadAim", rr)
        },
        commit: rr => {
          Zr.i.Jp("requestEmoteWheelPadCommit", rr)
        },
        close: () => {
          Zr.i.Jp("requestEmoteWheelClose")
        }
      }, {
        isOpen: Nr.d,
        openButton: () => (0, jr.k)("chat"),
        aim: rr => {
          Zr.i.Jp(Nr.f, rr)
        },
        commit: rr => {
          Zr.i.Jp(Nr.i, rr)
        },
        close: () => {
          Zr.i.Jp(Nr.g)
        },
        keptOpenBy: [pr.d]
      }, {
        isOpen: Ur.p,
        openButton: () => (0, jr.k)("actionButton"),
        aim: rr => {
          Zr.i.Jp(Ur.c, rr)
        },
        commit: rr => {
          Zr.i.Jp(Ur.j, rr)
        },
        close: () => {
          Zr.i.Jp(Ur.g)
        }
      }],
      hr = () => {
        var rr;
        return null !== (rr = tr.find((rr => rr.isOpen()))) && void 0 !== rr ? rr : null
      },
      zr = rr => (0, jr.L)(rr.openButton()),
      Yr = (rr, Sr) => !(0, mr.I)(rr.frame.values, Sr),
      nr = () => {
        let rr = null,
          Sr = !1,
          Qr = !1;
        return Ir.d.register({
          name: "wheel",
          isActive: () => null !== hr(),
          peek: () => {
            const rr = hr();
            return rr && zr(rr) ? null : {
              over: "gameplay",
              stick: (0, fr.g)().swapSticks ? "right" : "left"
            }
          },
          onFrame: Zr => {
            var Wr;
            const mr = hr();
            if (!mr) return;
            if (null !== (0, xr.e)([...pr.f, ...null !== (Wr = mr.keptOpenBy) && void 0 !== Wr ? Wr : []])) return void mr.close();
            const Nr = mr.openButton(),
              Ur = (0, Er.f)(Zr.frame, (0, fr.g)().swapSticks),
              tr = zr(mr) ? Ur.move : Ur.look;
            rr !== mr ? (rr = mr, Sr = !Yr(Zr, Nr) || Math.hypot(tr.x, tr.y) >= ar.A, Qr = !1) : Qr && (Qr = !1, Yr(Zr, Nr) && (Sr = !1)), mr.aim(tr);
            const nr = (0, jr.k)("menuConfirm"),
              er = (0, jr.k)("menuBack");
            return Zr.wasPressed(er) ? (Ir.d.consumeButton(er), void mr.close()) : Zr.wasPressed(nr) || Zr.wasPressed(Nr) ? (Ir.d.consumeButton(nr), Ir.d.consumeButton(Nr), void mr.commit(!1)) : void(Sr && Yr(Zr, Nr) && (Sr = !1, mr.commit(!0)))
          },
          onDeactivate: () => {
            Qr = null !== rr && hr() === rr, Qr || (rr = null, Sr = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);
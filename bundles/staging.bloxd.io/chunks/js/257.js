export const id = 257;
export const ids = [257];
export const modules = {
  38133: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => zb,
      e: () => hb
    });
    var eb = Mb(3088),
      Hb = Mb(1611),
      pb = Mb(64),
      Vb = Mb(7634),
      gb = Mb(3067),
      lb = Mb(1373),
      Lb = Mb(2142),
      Ib = Mb(2116),
      Ob = Mb(1616),
      Ub = Mb(1259),
      tb = Mb(38139),
      Cb = Mb(1159),
      Eb = Mb.n(Cb),
      Fb = Mb(1436),
      Bb = Mb(1475),
      sb = Mb(1350),
      mb = Mb(1364);
    const hb = "SleepingOverlay";

    function zb() {
      const {
        t: bb
      } = (0, Ub.C)(), [wb, Mb] = (0, pb.useState)(!1), [Cb, zb] = (0, pb.useState)(null), [xb, jb] = (0, pb.useState)(1), [Kb, rb] = (0, pb.useState)(!1), [Rb, Db] = (0, pb.useState)(!1), cb = (0, pb.useRef)(0), Yb = (0, pb.useRef)(!1), Zb = (0, pb.useRef)(!1), fb = (0, pb.useRef)(), Ab = (0, pb.useRef)(null);

      function Wb() {
        const bb = null !== Cb && void 0 !== Cb ? Cb : "Rested Speed";
        Lb.gameBridge.send("wakeUp", Rb ? bb : null), Ab.current = null, Mb(!1), zb(null), jb(1), rb(!1), Db(!1)
      }

      function Jb() {
        return !Kb && (Wb(), !0)
      }
      return (0, Hb.e)("PlayerPhysicsTypeUpdate", (bb => {
        bb !== Ab.current && (Ab.current = bb, bb === Vb.r.SLEEPING ? (Zb.current || (cb.current = Lb.gameBridge.lookup("cameraZoom", null), Zb.current = !0), Yb.current = !0, Lb.gameBridge.send("setCameraZoom", 3), Mb(!0), jb(function() {
          for (const bb of Lb.gameBridge.lookup("blocksStandingOn", null)) {
            if (tb.b.leafBeds.includes(bb)) return console.log(`Found leaf bed: ${bb}`), 1;
            if (tb.b.woolBeds.includes(bb)) return console.log(`Found woold bed: ${bb}`), 2;
            if (tb.b.strongBeds.includes(bb)) return console.log(`Found strong bed ${bb}`), 3
          }
          return 1
        }())) : (Zb.current = !1, Mb(!1), zb(null), jb(1)))
      })), (0, pb.useEffect)((() => () => {
        (0, lb.w)(hb)
      }), []), (0, pb.useEffect)((() => {
        wb ? (0, lb.y)(hb) : ((0, lb.w)(hb), Yb.current && (Lb.gameBridge.send("setCameraZoom", cb.current), Yb.current = !1))
      }), [wb]), (0, sb.r)("overlay", fb, Jb, wb), (0, mb.jsx)(eb.e, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: wb,
        timeout: 300,
        nodeRef: fb,
        unmountOnExit: !0,
        children: (0, mb.jsx)("div", {
          ref: fb,
          onClick: bb => {
            Jb() && bb.stopPropagation()
          },
          children: (0, mb.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, mb.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: gb.g.map((wb => (0, mb.jsxs)(Xb, {
                restedEffect: wb,
                dL: Cb,
                setChosenRestedEffect: zb,
                children: [(0, mb.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, mb.jsx)(Ib.d, {
                    text: [{
                      icon: wb
                    }]
                  }), gb.c[wb].shortName]
                }), (0, mb.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: bb(gb.c[wb].description, {
                    time: gb.c[wb].effectLevelDurations[xb] / 6e4
                  })
                })]
              }, wb)))
            }), (0, mb.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, mb.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, mb.jsxs)(Ob.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: bb => {
                  Rb ? Wb() : (rb(!0), (0, Fb.Q)((() => {
                    rb(!1), Db(!0)
                  }), !0)), bb.stopPropagation()
                },
                loading: Kb,
                children: [!Rb && (0, mb.jsxs)(mb.Fragment, {
                  children: [(0, mb.jsx)(Bb.b, {
                    name: "film"
                  }), " ", bb("classicGame:watchAdToGetRestedPerk")]
                }), Rb && bb("classicGame:wakeUp")]
              }), (0, mb.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, mb.jsx)("div", {
                  className: Eb()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === xb
                  }),
                  children: (0, mb.jsx)(Ib.d, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, mb.jsx)("div", {
                  className: Eb()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === xb
                  }),
                  children: (0, mb.jsx)(Ib.d, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, mb.jsx)("div", {
                  className: Eb()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === xb
                  }),
                  children: (0, mb.jsx)(Ib.d, {
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
    const Xb = (0, pb.memo)((function(bb) {
      let {
        children: wb,
        restedEffect: Mb,
        dL: eb,
        setChosenRestedEffect: Hb
      } = bb;
      return Mb === eb ? (0, mb.jsx)(Ob.p, {
        onClick: bb => {
          bb.stopPropagation()
        },
        children: wb
      }) : (0, mb.jsx)(Ob.j, {
        onClick: bb => {
          Hb(Mb), bb.stopPropagation()
        },
        children: wb
      })
    }))
  },
  42249: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Tb
    });
    var eb = Mb(26),
      Hb = Mb(29),
      pb = Mb(5062),
      Vb = Mb(366),
      gb = Mb(1821),
      lb = Mb(9525),
      Lb = Mb(5086),
      Ib = Mb(10049),
      Ob = Mb(9557),
      Ub = Mb(9536),
      tb = Mb(9560),
      Cb = Mb(1549),
      Eb = Mb(1882),
      Fb = Mb(9568),
      Bb = Mb(10004),
      sb = Mb(10144),
      mb = Mb(10061),
      hb = Mb(10149),
      zb = Mb(2142),
      Xb = Mb(9515),
      xb = Mb(10083),
      jb = Mb(10077),
      Kb = Mb(10053);
    class rb {
      constructor() {
        this.lostAtMs = null
      }
      update(bb, wb) {
        return bb ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= wb, wb - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class Rb {
      constructor(bb, wb) {
        this.press = bb, this.release = wb, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(bb, wb, Mb, eb) {
        if (bb && null === this.downAtMs) return this.downAtMs = Mb, this.latched = eb, void(this.token = this.press(eb));
        null !== this.downAtMs && (this.latched ? bb && this.end() : !wb && Mb - this.downAtMs >= 40 && this.end())
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
        const bb = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(bb)
      }
    }
    const Db = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      cb = bb => {
        let wb = null;
        const Mb = new Kb.b,
          eb = () => {
            wb && (((bb, wb, Mb) => {
              switch (Mb.kind) {
                case "reload":
                  return void wb.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void wb.specialActionUp(Mb.action);
                case "customButton":
                  return void zb.gameBridge.send("pressCustomButton", {
                    id: Mb.id,
                    down: !1
                  });
                case "touchButton":
                  bb.pressTouchButton(!1)
              }
            })(bb, wb.bodies, wb.action), wb = null)
          },
          pb = (Mb, Hb, pb, Vb) => {
            eb(), wb = {
              action: Hb,
              bodies: Mb,
              heldBy: pb,
              atMs: Vb
            }, ((bb, wb, Mb) => {
              switch (Mb.kind) {
                case "reload":
                  return wb.reloadGun(), void wb.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void wb.specialActionDown(Mb.action);
                case "customButton":
                  return void zb.gameBridge.send("pressCustomButton", {
                    id: Mb.id,
                    down: !0
                  });
                case "touchButton":
                  bb.pressTouchButton(!0)
              }
            })(bb, Mb, Hb)
          };
        return {
          update: (Vb, gb, Lb, Ib) => {
            var Ub;
            const tb = (0, xb.j)(bb.contextActionInputs()),
              Cb = null !== (Ub = tb[0]) && void 0 !== Ub ? Ub : Db;
            (0, jb.b)((0, xb.e)(Cb) ? Cb : null);
            const Eb = (0, xb.b)(tb);
            (0, jb.e)(Eb);
            const Fb = (0, lb.h)("actionButton");
            if (Eb) {
              const bb = Mb.update(gb.wasPressed(Fb), gb.isHeld(Fb), Lb, Ib);
              "tap" === bb ? pb(Vb, Cb, [Fb], Lb) : "hold" === bb && (Ob.d.consumeButton(Fb), Hb.k.iI(hb.i, tb))
            } else Mb.release(), gb.wasPressed(Fb) && pb(Vb, Cb, [Fb], Lb);
            wb && Lb - wb.atMs >= 40 && !wb.heldBy.some((bb => (0, Xb.I)(gb.frame.values, bb))) && eb()
          },
          pressPicked: (bb, wb) => {
            pb(bb, wb, [(0, lb.h)("menuConfirm"), (0, lb.h)("actionButton")], performance.now())
          },
          release: () => {
            Mb.release(), eb(), (0, jb.b)(null), (0, jb.e)(!1)
          }
        }
      };
    var Yb = Mb(9513);
    var Zb = Mb(42243),
      fb = Mb(10091),
      Ab = Mb(3531),
      Wb = Mb(9553),
      Jb = Mb(10177);
    var Sb = Mb(42236),
      Nb = Mb(10183),
      vb = Mb(42251),
      Qb = Mb(10160),
      Gb = Mb(10096),
      qb = Mb(10101),
      ab = Mb(10107);
    class ib {
      constructor(bb) {
        this.bodies = bb, this.gesture = new Kb.b, this.zoomBodies = null
      }
      update(bb, wb, Mb, eb, Hb) {
        if (!Hb) return this.release(), bb.wasPressed(wb);
        if (null !== this.zoomBodies) return bb.isHeld(wb) || this.endZoom(), !1;
        const pb = this.gesture.update(bb.wasPressed(wb), bb.isHeld(wb), Mb, eb);
        return "hold" === pb && bb.isHeld(wb) && (this.zoomBodies = this.bodies(), this.zoomBodies.zoom(!0)), "tap" === pb
      }
      release() {
        this.gesture.release(), this.endZoom()
      }
      endZoom() {
        var bb;
        null === (bb = this.zoomBodies) || void 0 === bb || bb.zoom(!1), this.zoomBodies = null
      }
    }
    var ub = Mb(10012),
      db = Mb(10071);
    const Pb = () => ub.d[(0, Ub.h)().tapHoldTime].wheelMs,
      nb = () => ((0, Ib.c)(), (0, db.b)("controllerMenuKey")),
      yb = (bb, wb, Mb) => new Rb((Mb => {
        const eb = bb.bodies();
        return {
          bodies: eb,
          press: wb(eb, Mb)
        }
      }), (bb => {
        let {
          bodies: wb,
          press: eb
        } = bb;
        Mb(wb, eb)
      })),
      ob = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      Tb = bb => {
        const wb = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let Mb = ob;
        const Ib = new vb.b,
          zb = Hb.k.subscribe("appManagerUpdated|activeInputDevice", (wb => {
            bb.deviceChanged(wb)
          }));
        let xb = null,
          jb = 0;
        const Rb = () => {
          xb = null, (0, Gb.h)(null)
        };
        let Db = !1;
        const db = new rb,
          Tb = bb.look,
          kb = new Kb.b,
          bw = new Kb.b,
          ww = cb(bb),
          Mw = Hb.k.subscribe(hb.j, (wb => {
            ww.pressPicked(bb.bodies(), wb)
          })),
          ew = yb(bb, ((bb, wb) => bb.primaryFireDown(!wb)), ((bb, wb) => {
            bb.primaryFireUp(wb)
          })),
          Hw = yb(bb, (bb => bb.altFireDown()), ((bb, wb) => {
            bb.altFireUp(wb)
          }));
        let pw = !1,
          Vw = -1 / 0,
          gw = !1,
          lw = !1;
        const Lw = (0, Bb.d)(Xb.cb),
          Iw = (0, Bb.d)(Xb.cb),
          Ow = new Kb.b;
        let Uw = !1;
        const tw = new ib((() => bb.bodies())),
          Cw = () => {
            Lw.reset(), Iw.reset(), Ow.release(), tw.release(), (0, ab.f)(!1), Tb.release(), ew.cancel(), (0, qb.f)(!1), Hw.cancel(), ww.release(), kb.release(), bw.release(), Rb()
          },
          Ew = function() {
            let eb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            Cw(), gw = !1, eb || (pw = !1, Mb = ob, Object.assign(wb, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), bb.stopMoving())
          };
        let Fw = !1;
        const Bw = function(eb, pb, Vb) {
            let gb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, Cb.h)()) return void(Fw || (Fw = !0, pw = !1, bb.stopMoving()));
            Fw = !1;
            const Lb = (0, Ub.h)(),
              Ob = (0, Sb.e)(pb, Lb.moveDeadzone),
              tb = (0, lb.h)("sprint");
            Mb = (0, Sb.v)(Mb, {
              sprintPressed: eb.wasPressed(tb),
              magnitude: Ob.magnitude,
              autoSprint: Lb.autoSprint,
              nowMs: Vb
            }), wb.running = Mb.running, wb.sprintHeld = eb.isHeld(tb), wb.x = Ob.x, wb.y = Ob.y, wb.magnitude = Ob.speed, wb.headingOffset = Ob.headingOffset, Ob.magnitude > 0 && (!pw || Vb - Vw >= 1e3) && (Vw = Vb, Hb.k.iI("stickMoved")), pw = Ob.magnitude > 0;
            const Eb = (0, lb.h)("jump");
            if (wb.jumpHeld = eb.isHeld(Eb), wb.jumpPressed = eb.wasPressed(Eb), wb.jumpPressed && bb.bodies().jumpDown(), gb) return void bb.move(wb, null);
            const Fb = (0, lb.h)("sneak"),
              Bb = Ib.filter({
                sneakHeld: eb.isHeld(Fb),
                sneakPressed: eb.wasPressed(Fb),
                sneakTogglePressed: tw.update(eb, (0, lb.h)("sneakToggle"), Vb, Pb(), bb.zoomAllowed())
              }, Vb);
            bb.move(wb, {
              ...Bb,
              mode: Lb.sneakMode
            })
          },
          sw = (bb, wb) => {
            const Mb = (0, lb.h)("chat");
            if ("off" === (0, Ub.h)().quickChat) return void(bb.wasPressed(Mb) && (Ob.d.consumeButton(Mb), Hb.k.iI(fb.c)));
            const eb = kb.update(bb.wasPressed(Mb), bb.isHeld(Mb), wb, Pb());
            "tap" === eb || "hold" === eb && null === (0, Eb.d)() ? Hb.k.iI(fb.c) : "hold" === eb && (Ob.d.consumeButton(Mb), Hb.k.iI(mb.j))
          },
          mw = (wb, Mb) => {
            ((bb, wb) => {
              const Mb = (0, sb.c)(),
                eb = (0, lb.h)("emoteWheel");
              if ("wheel" === (0, Ub.h)().emoteButton) return bb.wasPressed(eb) && (Ob.d.consumeButton(eb), Hb.k.iI("requestEmoteWheelPadOpen", !0)), (0, sb.c)() !== Mb;
              const pb = bw.update(bb.wasPressed(eb), bb.isHeld(eb), wb, Pb());
              return "tap" === pb ? Hb.k.iI("requestEmoteRepeatLast") : "hold" === pb && (Ob.d.consumeButton(eb), Hb.k.iI("requestEmoteWheelPadOpen", !1)), (0, sb.c)() !== Mb
            })(wb, Mb) || sw(wb, Mb), wb.wasPressed((0, lb.h)("inventory")) && (Ob.d.consumeButton((0, lb.h)("inventory")), (0, gb.A)(nb(), "inventory", bb.hasFullInventory())), wb.wasPressed((0, lb.h)("pause")) && (Ob.d.consumeButton((0, lb.h)("pause")), (0, Lb.b)() === Vb.l.SOCIAL ? (0, gb.x)(nb(), Vb.l.SOCIAL) : (0, gb.i)(nb())), wb.wasPressed((0, lb.h)("leaderboard")) && !(0, pb.c)() && (Ob.d.consumeButton((0, lb.h)("leaderboard")), ((bb, wb) => {
              if ("shop" === (0, Wb.e)()) return Hb.k.iI(Jb.m), void(0, gb.x)(bb, Vb.l.SHOP, !0);
              (0, gb.D)(bb, wb, (0, Ab.r)())
            })(nb(), bb.hasLobbyTab()))
          },
          hw = (wb, Mb) => {
            const eb = bb.bodies();
            ((wb, Mb) => {
              const eb = (0, lb.h)("attack"),
                Hb = wb.wasPressed(eb);
              Hb && !ew.isLatched() && (Db = bb.targetsBlock()), ew.update(Hb, wb.isHeld(eb), Mb, "toggle" === (0, Ub.h)().attackMode), ew.isLatched() && Db ? db.update(bb.targetsBlock(), Mb) && ew.unlatch() : db.reset(), (0, qb.f)(ew.isLatched())
            })(wb, Mb), Hw.update(wb.wasPressed((0, lb.h)("use")), wb.isHeld((0, lb.h)("use")), Mb, !1), Lw.update(wb.isHeld((0, lb.h)("hotbarPrevious")), Mb) && bb.scrollHotbar(-1), Iw.update(wb.isHeld((0, lb.h)("hotbarNext")), Mb) && bb.scrollHotbar(1), ((wb, Mb, eb) => {
              const Hb = (0, lb.h)("perspective"),
                pb = (0, lb.h)("pickBlock"),
                Vb = bb.pickBlockAllowed();
              (0, ab.f)(Vb && !Uw && bb.targetsBlock());
              const gb = () => {
                Mb.pickBlock() && (Uw = !0, (0, ab.f)(!1))
              };
              if (!Vb || pb !== Hb) return Ow.release(), wb.wasPressed(Hb) && Mb.swapCameraZoom(), void(Vb && wb.wasPressed(pb) && gb());
              const Lb = Ow.update(wb.wasPressed(pb), wb.isHeld(pb), eb, Pb());
              "tap" === Lb ? gb() : "hold" === Lb && Mb.swapCameraZoom()
            })(wb, eb, Mb), ((wb, Mb, eb) => {
              const Hb = (0, lb.h)("drop");
              if (wb.wasPressed(Hb)) {
                Mb.dropItem(!1);
                const bb = (0, Ub.h)();
                "off" !== bb.buttonRepeat && (xb = eb, jb = ub.d[bb.tapHoldTime].dropStackMs, (0, Gb.h)(jb))
              }
              null !== xb && (!wb.isHeld(Hb) || bb.selectedSlotEmpty() ? Rb() : eb - xb >= jb && (Rb(), Mb.dropItem(!0)))
            })(wb, eb, Mb), ww.update(eb, wb, Mb, Pb()), mw(wb, Mb)
          },
          zw = Ob.d.register({
            name: "gameplay",
            isActive: () => {
              const wb = pw && "keyboardMouse" === eb.c.get("activeInputDevice") && !(0, tb.M)(),
                Mb = (0, tb.n)() ? [Zb.d] : [];
              return ((0, tb.n)() || wb) && (0, Fb.h)(Mb) && bb.hasPlayer()
            },
            onFrame: bb => {
              const wb = performance.now(),
                Mb = (0, Ub.h)(),
                eb = (0, Sb.z)(bb, (0, Sb.l)(Mb, (0, lb.h)("pause"), (0, Nb.c)().isSupported())),
                Hb = (0, Sb.h)(eb, Mb.swapSticks);
              return (0, tb.n)() ? (gw = !1, (0, Fb.h)() ? (lw = !1, Tb.update(Hb.look, Mb, eb.isHeld((0, lb.h)("use"))), Bw(eb, Hb.move, wb), void hw(eb, wb)) : (lw || (lw = !0, Ib.lostToPadScreen(), Ew()), void sw(eb, wb))) : (gw || (Cw(), gw = !0), void Bw(eb, Hb.move, wb))
            },
            onDeactivate: bb => {
              (0, tb.n)() && Ib.lostToPadScreen(), Ew(bb)
            },
            onPeekFrame: wb => {
              (0, tb.n)() && (0, Fb.h)(Zb.i) && bb.hasPlayer() ? Bw(wb, (0, Sb.h)(wb, (0, Ub.h)().swapSticks).move, performance.now(), !0) : Ew()
            }
          }),
          Xw = (0, Zb.h)(bb),
          xw = (() => {
            const bb = Hb.k.subscribe(Yb.b, (bb => {
              !bb && (0, tb.n)() && "inGame" === eb.c.get("gameState") && Hb.k.iI("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              Hb.k.unsubscribe(bb)
            }
          })();
        return () => {
          Ew(), bb.uninstall(), (0, Qb.c)(!1), (0, ab.f)(!1), Hb.k.unsubscribe(zb), Hb.k.unsubscribe(Mw), zw(), Xw(), xw(), Tb.uninstall()
        }
      }
  },
  42243: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Cb,
      h: () => Fb,
      i: () => tb
    });
    var eb = Mb(1373),
      Hb = Mb(5062),
      pb = Mb(10130),
      Vb = Mb(38133),
      gb = Mb(1934),
      lb = Mb(1255),
      Lb = Mb(9568),
      Ib = Mb(10061),
      Ob = Mb(10149);
    const Ub = {
        emoteWheel: pb.g,
        quickChatWheel: Ib.c,
        actionWheel: Ob.n
      },
      tb = Object.keys(Ub),
      Cb = "dead",
      Eb = bb => (0, eb.u)().includes(bb),
      Fb = bb => {
        const wb = [(0, Lb.l)(Cb, (() => bb.hasPlayer() && bb.isPlayerDead())), (0, Lb.l)("sleeping", (() => Eb(Vb.e))), (0, Lb.l)("turnstile", (() => Eb(lb.f))), (0, Lb.l)("videoAd", gb.g), (0, Lb.l)("replay", (() => (0, Hb.c)() || bb.isReplayMode())), (0, Lb.l)("freeCamera", (() => bb.isFreeCameraOn())), ...Object.entries(Ub).map((bb => {
          let [wb, Mb] = bb;
          return (0, Lb.l)(wb, Mb)
        }))];
        return () => {
          for (const bb of wb) bb()
        }
      }
  },
  42236: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb,
      e: () => lb,
      h: () => gb,
      l: () => Ib,
      p: () => Vb,
      s: () => pb,
      v: () => Lb,
      z: () => Ob
    });
    var eb = Mb(9515);
    class Hb {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(bb, wb, Mb) {
        const Hb = (0, eb.m)(bb, wb.lookDeadzone);
        if (Math.hypot(Hb.x, Hb.y) < .9 || Math.abs(Hb.x) < Math.abs(Hb.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = Mb);
        const pb = (Vb = wb.lookSensitivityX, Math.min(1, 100 / Vb));
        var Vb;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (Mb - this.fullTiltSinceMs - 250 * pb) / (200 * pb)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const pb = (bb, wb, Mb, Hb, pb) => {
        let Vb = 1;
        return "boost" === Mb.lookCurve ? Vb = bb.update(wb, Mb, pb) : bb.reset(),
          function(bb, wb) {
            let {
              yawBoost: Mb = 1,
              aiming: Hb = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const pb = (0, eb.j)((0, eb.m)(bb, wb.lookDeadzone), wb.lookCurve),
              Vb = 220 * Math.PI / 180,
              gb = Hb ? wb.aimLookSensitivity / 100 : 1,
              lb = wb.lookSensitivityX / 100 * gb,
              Lb = wb.lookSensitivityY / 100 * gb;
            return {
              yawRadPerSec: pb.x * Vb * lb * Mb * (wb.invertLookX ? -1 : 1),
              pitchRadPerSec: pb.y * Vb * .7 * Lb * (wb.invertLookY ? -1 : 1)
            }
          }(wb, Mb, {
            yawBoost: Vb,
            aiming: Hb
          })
      },
      Vb = (bb, wb) => {
        const Mb = Math.max(0, Math.min(250, wb)) / 1e3;
        return {
          DW: bb.yawRadPerSec * Mb,
          cW: bb.pitchRadPerSec * Mb
        }
      },
      gb = (bb, wb) => wb ? {
        move: bb.rightStick,
        look: bb.leftStick
      } : {
        move: bb.leftStick,
        look: bb.rightStick
      },
      lb = (bb, wb) => {
        const Mb = (0, eb.m)(bb, wb),
          Hb = Math.min(1, Math.hypot(Mb.x, Mb.y));
        return {
          magnitude: Hb,
          speed: Math.min(1, Hb / .8),
          headingOffset: 0 === Hb ? 0 : Math.atan2(Mb.x, -Mb.y),
          x: Mb.x,
          y: Mb.y
        }
      },
      Lb = (bb, wb) => {
        let {
          sprintPressed: Mb,
          magnitude: eb,
          autoSprint: Hb,
          nowMs: pb
        } = wb;
        const Vb = Mb ? pb : bb.latchedAtMs,
          gb = (bb => {
            let {
              running: wb,
              magnitude: Mb,
              sprintPressed: eb,
              autoSprint: Hb
            } = bb;
            return !(Mb < .5) && (!!eb || !!(Hb && Mb >= .9) || wb)
          })({
            running: bb.running,
            magnitude: eb,
            sprintPressed: pb - Vb <= 1e3,
            autoSprint: Hb
          });
        return {
          running: gb,
          latchedAtMs: gb ? -1 / 0 : Vb
        }
      },
      Ib = (bb, wb, Mb) => Mb && bb.gyroAiming && "button" === bb.gyroActivation && bb.gyroButton !== wb ? bb.gyroButton : null,
      Ob = (bb, wb) => wb ? {
        ...bb,
        isHeld: Mb => Mb !== wb && bb.isHeld(Mb),
        wasPressed: Mb => Mb !== wb && bb.wasPressed(Mb),
        wasReleased: Mb => Mb !== wb && bb.wasReleased(Mb),
        value: Mb => Mb === wb ? 0 : bb.value(Mb)
      } : bb
  },
  42251: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb,
      c: () => eb
    });
    const eb = bb => {
      let {
        mode: wb,
        sneakHeld: Mb,
        sneakPressed: eb,
        sneakTogglePressed: Hb,
        descending: pb,
        canCrouch: Vb,
        toggled: gb
      } = bb;
      return Vb ? pb ? {
        crouchHeld: Mb,
        toggled: !1
      } : "hold" === wb ? {
        crouchHeld: Mb,
        toggled: Hb ? !gb : gb
      } : {
        crouchHeld: !1,
        toggled: eb || Hb ? !gb : gb
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class Hb {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(bb, wb) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = wb, this.graceEndsMs = wb + 500);
        const Mb = wb < this.graceEndsMs;
        return Mb && (bb.sneakPressed || bb.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, wb + 300))), bb.sneakHeld ? Mb && bb.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: bb.sneakHeld && !this.ignoringHeld,
          sneakPressed: bb.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: bb.sneakTogglePressed && !Mb
        }
      }
    }
  },
  42222: (bb, wb, Mb) => {
    Mb(10183)
  },
  42230: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => mb
    });
    var eb = Mb(29),
      Hb = Mb(10130),
      pb = Mb(10137),
      Vb = Mb(9525),
      gb = Mb(9557),
      lb = Mb(9536),
      Lb = Mb(42236),
      Ib = Mb(42243),
      Ob = Mb(9568),
      Ub = Mb(9515),
      tb = Mb(10061),
      Cb = Mb(10149);
    const Eb = [{
        isOpen: Hb.h,
        openButton: () => (0, Vb.h)("emoteWheel"),
        aim: bb => {
          eb.k.iI("emoteWheelPadAim", bb)
        },
        commit: bb => {
          eb.k.iI("requestEmoteWheelPadCommit", bb)
        },
        close: () => {
          eb.k.iI("requestEmoteWheelClose")
        }
      }, {
        isOpen: tb.c,
        openButton: () => (0, Vb.h)("chat"),
        aim: bb => {
          eb.k.iI(tb.d, bb)
        },
        commit: bb => {
          eb.k.iI(tb.g, bb)
        },
        close: () => {
          eb.k.iI(tb.f)
        },
        keptOpenBy: [Ib.d]
      }, {
        isOpen: Cb.n,
        openButton: () => (0, Vb.h)("actionButton"),
        aim: bb => {
          eb.k.iI(Cb.d, bb)
        },
        commit: bb => {
          eb.k.iI(Cb.g, bb)
        },
        close: () => {
          eb.k.iI(Cb.f)
        }
      }],
      Fb = () => {
        var bb;
        return null !== (bb = Eb.find((bb => bb.isOpen()))) && void 0 !== bb ? bb : null
      },
      Bb = bb => (0, Vb.O)(bb.openButton()),
      sb = (bb, wb) => !(0, Ub.I)(bb.frame.values, wb),
      mb = () => {
        let bb = null,
          wb = !1,
          Mb = !1;
        return gb.d.register({
          name: "wheel",
          isActive: () => null !== Fb(),
          peek: () => {
            const bb = Fb();
            return bb && Bb(bb) ? null : {
              over: "gameplay",
              stick: (0, lb.h)().swapSticks ? "right" : "left"
            }
          },
          onFrame: eb => {
            var Hb;
            const Ub = Fb();
            if (!Ub) return;
            if (null !== (0, Ob.d)([...Ib.i, ...null !== (Hb = Ub.keptOpenBy) && void 0 !== Hb ? Hb : []])) return void Ub.close();
            const tb = Ub.openButton(),
              Cb = (0, Lb.h)(eb.frame, (0, lb.h)().swapSticks),
              Eb = Bb(Ub) ? Cb.move : Cb.look;
            bb !== Ub ? (bb = Ub, wb = !sb(eb, tb) || Math.hypot(Eb.x, Eb.y) >= pb.C, Mb = !1) : Mb && (Mb = !1, sb(eb, tb) && (wb = !1)), Ub.aim(Eb);
            const mb = (0, Vb.h)("menuConfirm"),
              hb = (0, Vb.h)("menuBack");
            return eb.wasPressed(hb) ? (gb.d.consumeButton(hb), void Ub.close()) : eb.wasPressed(mb) || eb.wasPressed(tb) ? (gb.d.consumeButton(mb), gb.d.consumeButton(tb), void Ub.commit(!1)) : void(wb && sb(eb, tb) && (wb = !1, Ub.commit(!0)))
          },
          onDeactivate: () => {
            Mb = null !== bb && Fb() === bb, Mb || (bb = null, wb = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
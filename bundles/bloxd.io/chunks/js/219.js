export const id = 219;
export const ids = [219];
export const modules = {
  36579: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Cb,
      e: () => Wb
    });
    var Bb = hb(4030),
      Ob = hb(1348),
      Gb = hb(49),
      Ub = hb(6213),
      Lb = hb(4018),
      Yb = hb(1184),
      Sb = hb(1811),
      ab = hb(1789),
      Hb = hb(1357),
      wb = hb(1095),
      Zb = hb(36584),
      Xb = hb(958),
      pb = hb.n(Xb),
      ob = hb(1206),
      Ab = hb(966),
      lb = hb(1177),
      Kb = hb(1007);
    const Wb = "SleepingOverlay";

    function Cb() {
      const {
        t: bb
      } = (0, wb.K)(), [ub, hb] = (0, Gb.useState)(!1), [Xb, Cb] = (0, Gb.useState)(null), [rb, jb] = (0, Gb.useState)(1), [nb, Db] = (0, Gb.useState)(!1), [xb, zb] = (0, Gb.useState)(!1), gb = (0, Gb.useRef)(0), ib = (0, Gb.useRef)(!1), vb = (0, Gb.useRef)(!1), tb = (0, Gb.useRef)(), Jb = (0, Gb.useRef)(null);

      function eb() {
        const bb = null !== Xb && void 0 !== Xb ? Xb : "Rested Speed";
        Sb.gameBridge.send("wakeUp", xb ? bb : null), Jb.current = null, hb(!1), Cb(null), jb(1), Db(!1), zb(!1)
      }

      function Nb() {
        return !nb && (eb(), !0)
      }
      return (0, Ob.h)("PlayerPhysicsTypeUpdate", (bb => {
        bb !== Jb.current && (Jb.current = bb, bb === Ub.n.SLEEPING ? (vb.current || (gb.current = Sb.gameBridge.lookup("cameraZoom", null), vb.current = !0), ib.current = !0, Sb.gameBridge.send("setCameraZoom", 3), hb(!0), jb(function() {
          for (const bb of Sb.gameBridge.lookup("blocksStandingOn", null)) {
            if (Zb.e.leafBeds.includes(bb)) return console.log(`Found leaf bed: ${bb}`), 1;
            if (Zb.e.woolBeds.includes(bb)) return console.log(`Found woold bed: ${bb}`), 2;
            if (Zb.e.strongBeds.includes(bb)) return console.log(`Found strong bed ${bb}`), 3
          }
          return 1
        }())) : (vb.current = !1, hb(!1), Cb(null), jb(1)))
      })), (0, Gb.useEffect)((() => () => {
        (0, Yb.j)(Wb)
      }), []), (0, Gb.useEffect)((() => {
        ub ? (0, Yb.l)(Wb) : ((0, Yb.j)(Wb), ib.current && (Sb.gameBridge.send("setCameraZoom", gb.current), ib.current = !1))
      }), [ub]), (0, lb.v)("overlay", tb, Nb, ub), (0, Kb.jsx)(Bb.e, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: ub,
        timeout: 300,
        nodeRef: tb,
        unmountOnExit: !0,
        children: (0, Kb.jsx)("div", {
          ref: tb,
          onClick: bb => {
            Nb() && bb.stopPropagation()
          },
          children: (0, Kb.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Kb.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: Lb.h.map((ub => (0, Kb.jsxs)(db, {
                restedEffect: ub,
                KU: Xb,
                setChosenRestedEffect: Cb,
                children: [(0, Kb.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Kb.jsx)(ab.c, {
                    text: [{
                      icon: ub
                    }]
                  }), Lb.g[ub].shortName]
                }), (0, Kb.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: bb(Lb.g[ub].description, {
                    time: Lb.g[ub].effectLevelDurations[rb] / 6e4
                  })
                })]
              }, ub)))
            }), (0, Kb.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Kb.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Kb.jsxs)(Hb.e, {
                className: "SleepingOverlayWakeUpButton",
                onClick: bb => {
                  xb ? eb() : (Db(!0), (0, ob.bb)((() => {
                    Db(!1), zb(!0)
                  }), !0)), bb.stopPropagation()
                },
                loading: nb,
                children: [!xb && (0, Kb.jsxs)(Kb.Fragment, {
                  children: [(0, Kb.jsx)(Ab.e, {
                    name: "film"
                  }), " ", bb("classicGame:watchAdToGetRestedPerk")]
                }), xb && bb("classicGame:wakeUp")]
              }), (0, Kb.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Kb.jsx)("div", {
                  className: pb()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === rb
                  }),
                  children: (0, Kb.jsx)(ab.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Kb.jsx)("div", {
                  className: pb()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === rb
                  }),
                  children: (0, Kb.jsx)(ab.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Kb.jsx)("div", {
                  className: pb()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === rb
                  }),
                  children: (0, Kb.jsx)(ab.c, {
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
    const db = (0, Gb.memo)((function(bb) {
      let {
        children: ub,
        restedEffect: hb,
        KU: Bb,
        setChosenRestedEffect: Ob
      } = bb;
      return hb === Bb ? (0, Kb.jsx)(Hb.m, {
        onClick: bb => {
          bb.stopPropagation()
        },
        children: ub
      }) : (0, Kb.jsx)(Hb.g, {
        onClick: bb => {
          Ob(hb), bb.stopPropagation()
        },
        children: ub
      })
    }))
  },
  40026: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => fb
    });
    var Bb = hb(13),
      Ob = hb(16),
      Gb = hb(4053),
      Ub = hb(298),
      Lb = hb(1537),
      Yb = hb(7843),
      Sb = hb(4068),
      ab = hb(8424),
      Hb = hb(7882),
      wb = hb(7857),
      Zb = hb(7886),
      Xb = hb(1587),
      pb = hb(7888),
      ob = hb(8377),
      Ab = hb(8529),
      lb = hb(8442),
      Kb = hb(8537),
      Wb = hb(1811),
      Cb = hb(7836),
      db = hb(8460),
      rb = hb(8452),
      jb = hb(8433);
    class nb {
      constructor() {
        this.lostAtMs = null
      }
      update(bb, ub) {
        return bb ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= ub, ub - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class Db {
      constructor(bb, ub) {
        this.press = bb, this.release = ub, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(bb, ub, hb, Bb) {
        if (bb && null === this.downAtMs) return this.downAtMs = hb, this.latched = Bb, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? bb && this.end() : !ub && hb - this.downAtMs >= 40 && this.end())
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
    const xb = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      zb = bb => {
        let ub = null;
        const hb = new jb.e,
          Bb = () => {
            ub && (((bb, ub, hb) => {
              switch (hb.kind) {
                case "reload":
                  return void ub.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void ub.specialActionUp(hb.action);
                case "customButton":
                  return void Wb.gameBridge.send("pressCustomButton", {
                    id: hb.id,
                    down: !1
                  });
                case "touchButton":
                  bb.pressTouchButton(!1)
              }
            })(bb, ub.bodies, ub.action), ub = null)
          },
          Gb = (hb, Ob, Gb, Ub) => {
            Bb(), ub = {
              action: Ob,
              bodies: hb,
              heldBy: Gb,
              atMs: Ub
            }, ((bb, ub, hb) => {
              switch (hb.kind) {
                case "reload":
                  return ub.reloadGun(), void ub.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void ub.specialActionDown(hb.action);
                case "customButton":
                  return void Wb.gameBridge.send("pressCustomButton", {
                    id: hb.id,
                    down: !0
                  });
                case "touchButton":
                  bb.pressTouchButton(!0)
              }
            })(bb, hb, Ob)
          };
        return {
          update: (Ub, Lb, Sb, ab) => {
            var wb;
            const Zb = (0, db.k)(bb.contextActionInputs()),
              Xb = null !== (wb = Zb[0]) && void 0 !== wb ? wb : xb;
            (0, rb.e)((0, db.g)(Xb) ? Xb : null);
            const pb = (0, db.d)(Zb);
            (0, rb.g)(pb);
            const ob = (0, Yb.f)("actionButton");
            if (pb) {
              const bb = hb.update(Lb.wasPressed(ob), Lb.isHeld(ob), Sb, ab);
              "tap" === bb ? Gb(Ub, Xb, [ob], Sb) : "hold" === bb && (Hb.c.consumeButton(ob), Ob.i.vp(Kb.l, Zb))
            } else hb.release(), Lb.wasPressed(ob) && Gb(Ub, Xb, [ob], Sb);
            ub && Sb - ub.atMs >= 40 && !ub.heldBy.some((bb => (0, Cb.L)(Lb.frame.values, bb))) && Bb()
          },
          pressPicked: (bb, ub) => {
            Gb(bb, ub, [(0, Yb.f)("menuConfirm"), (0, Yb.f)("actionButton")], performance.now())
          },
          release: () => {
            hb.release(), Bb(), (0, rb.e)(null), (0, rb.g)(!1)
          }
        }
      };
    var gb = hb(7830);
    var ib = hb(40020),
      vb = hb(8467),
      tb = hb(7874),
      Jb = hb(8581);
    var eb = hb(40017),
      Nb = hb(8589),
      sb = hb(40033),
      Mb = hb(8558),
      mb = hb(8470),
      Ib = hb(8475),
      Pb = hb(8480),
      qb = hb(8384);
    const Eb = () => qb.c[(0, wb.e)().tapHoldTime].wheelMs,
      yb = () => ((0, ab.d)(), new Event("controllerMenuKey")),
      Vb = (bb, ub, hb) => new Db((() => {
        const hb = bb.bodies();
        return {
          bodies: hb,
          press: ub(hb)
        }
      }), (bb => {
        let {
          bodies: ub,
          press: Bb
        } = bb;
        hb(ub, Bb)
      })),
      Fb = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      fb = bb => {
        const ub = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let hb = Fb;
        const ab = new sb.b,
          Wb = Ob.i.subscribe("appManagerUpdated|activeInputDevice", (ub => {
            bb.deviceChanged(ub)
          }));
        let db = null,
          rb = 0;
        const Db = () => {
          db = null, (0, mb.f)(null)
        };
        let xb = !1;
        const fb = new nb,
          kb = bb.look,
          Tb = new jb.e,
          cb = new jb.e,
          Qb = zb(bb),
          Rb = Ob.i.subscribe(Kb.o, (ub => {
            Qb.pressPicked(bb.bodies(), ub)
          })),
          bu = Vb(bb, (bb => bb.primaryFireDown()), ((bb, ub) => {
            bb.primaryFireUp(ub)
          })),
          uu = Vb(bb, (bb => bb.altFireDown()), ((bb, ub) => {
            bb.altFireUp(ub)
          }));
        let hu = !1,
          Bu = !1,
          Ou = !1;
        const Gu = (0, ob.c)(Cb.$),
          Uu = (0, ob.c)(Cb.$),
          Lu = new jb.e;
        let Yu = !1;
        const Su = () => {
            Gu.reset(), Uu.reset(), Lu.release(), (0, Pb.i)(!1), kb.release(), bu.cancel(), (0, Ib.h)(!1), uu.cancel(), Qb.release(), Tb.release(), cb.release(), Db()
          },
          au = function() {
            let Bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            Su(), Bu = !1, Bb || (hu = !1, hb = Fb, Object.assign(ub, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), bb.stopMoving())
          },
          Hu = function(Bb, Ob, Gb) {
            let Ub = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const Lb = (0, wb.e)(),
              Sb = (0, eb.d)(Ob, Lb.moveDeadzone),
              Hb = (0, Yb.f)("sprint");
            hb = (0, eb.u)(hb, {
              sprintPressed: Bb.wasPressed(Hb),
              magnitude: Sb.magnitude,
              autoSprint: Lb.autoSprint,
              nowMs: Gb
            }), ub.running = hb.running, ub.sprintHeld = Bb.isHeld(Hb), ub.x = Sb.x, ub.y = Sb.y, ub.magnitude = Sb.speed, ub.headingOffset = Sb.headingOffset, hu = Sb.magnitude > 0;
            const Zb = (0, Yb.f)("jump");
            if (ub.jumpHeld = Bb.isHeld(Zb), ub.jumpPressed = Bb.wasPressed(Zb), ub.jumpPressed && bb.bodies().jumpDown(), Ub) return void bb.move(ub, null);
            const Xb = (0, Yb.f)("sneak"),
              pb = ab.filter({
                sneakHeld: Bb.isHeld(Xb),
                sneakPressed: Bb.wasPressed(Xb),
                sneakTogglePressed: Bb.wasPressed((0, Yb.f)("sneakToggle"))
              }, Gb);
            bb.move(ub, {
              ...pb,
              mode: Lb.sneakMode
            })
          },
          wu = (bb, ub) => {
            const hb = (0, Yb.f)("chat");
            if ("off" === (0, wb.e)().quickChat) return void(bb.wasPressed(hb) && (Hb.c.consumeButton(hb), Ob.i.vp(vb.e)));
            const Bb = Tb.update(bb.wasPressed(hb), bb.isHeld(hb), ub, Eb());
            "tap" === Bb || "hold" === Bb && null === (0, Xb.e)() ? Ob.i.vp(vb.e) : "hold" === Bb && (Hb.c.consumeButton(hb), Ob.i.vp(lb.l))
          },
          Zu = (ub, hb) => {
            ((bb, ub) => {
              const hb = (0, Ab.d)(),
                Bb = (0, Yb.f)("emoteWheel");
              if ("wheel" === (0, wb.e)().emoteButton) return bb.wasPressed(Bb) && (Hb.c.consumeButton(Bb), Ob.i.vp("requestEmoteWheelPadOpen", !0)), (0, Ab.d)() !== hb;
              const Gb = cb.update(bb.wasPressed(Bb), bb.isHeld(Bb), ub, Eb());
              return "tap" === Gb ? Ob.i.vp("requestEmoteRepeatLast") : "hold" === Gb && (Hb.c.consumeButton(Bb), Ob.i.vp("requestEmoteWheelPadOpen", !1)), (0, Ab.d)() !== hb
            })(ub, hb) || wu(ub, hb), ub.wasPressed((0, Yb.f)("inventory")) && (Hb.c.consumeButton((0, Yb.f)("inventory")), (0, Lb.C)(yb(), "inventory", bb.hasFullInventory())), ub.wasPressed((0, Yb.f)("pause")) && (Hb.c.consumeButton((0, Yb.f)("pause")), (0, Sb.b)() === Ub.u.SOCIAL ? (0, Lb.B)(yb(), Ub.u.SOCIAL) : (0, Lb.k)(yb())), ub.wasPressed((0, Yb.f)("leaderboard")) && !(0, Gb.d)() && (Hb.c.consumeButton((0, Yb.f)("leaderboard")), ((bb, ub) => {
              if ("shop" === (0, tb.c)()) return Ob.i.vp(Jb.l), void(0, Lb.B)(bb, Ub.u.SHOP, !0);
              (0, Lb.B)(bb, Ub.u.LOBBY_LEADERBOARD, ub)
            })(yb(), bb.hasLobbyTab()))
          },
          Xu = (ub, hb) => {
            const Bb = bb.bodies();
            ((ub, hb) => {
              const Bb = (0, Yb.f)("attack"),
                Ob = ub.wasPressed(Bb);
              Ob && !bu.isLatched() && (xb = bb.targetsBlock()), bu.update(Ob, ub.isHeld(Bb), hb, "toggle" === (0, wb.e)().attackMode), bu.isLatched() && xb ? fb.update(bb.targetsBlock(), hb) && bu.unlatch() : fb.reset(), (0, Ib.h)(bu.isLatched())
            })(ub, hb), uu.update(ub.wasPressed((0, Yb.f)("use")), ub.isHeld((0, Yb.f)("use")), hb, !1), Gu.update(ub.isHeld((0, Yb.f)("hotbarPrevious")), hb) && bb.scrollHotbar(-1), Uu.update(ub.isHeld((0, Yb.f)("hotbarNext")), hb) && bb.scrollHotbar(1), ((ub, hb, Bb) => {
              const Ob = (0, Yb.f)("perspective"),
                Gb = (0, Yb.f)("pickBlock"),
                Ub = bb.pickBlockAllowed();
              (0, Pb.i)(Ub && !Yu && bb.targetsBlock());
              const Lb = () => {
                hb.pickBlock() && (Yu = !0, (0, Pb.i)(!1))
              };
              if (!Ub || Gb !== Ob) return Lu.release(), ub.wasPressed(Ob) && hb.swapCameraZoom(), void(Ub && ub.wasPressed(Gb) && Lb());
              const Sb = Lu.update(ub.wasPressed(Gb), ub.isHeld(Gb), Bb, Eb());
              "tap" === Sb ? Lb() : "hold" === Sb && hb.swapCameraZoom()
            })(ub, Bb, hb), ((ub, hb, Bb) => {
              const Ob = (0, Yb.f)("drop");
              if (ub.wasPressed(Ob)) {
                hb.dropItem(!1);
                const bb = (0, wb.e)();
                "off" !== bb.buttonRepeat && (db = Bb, rb = qb.c[bb.tapHoldTime].dropStackMs, (0, mb.f)(rb))
              }
              null !== db && (!ub.isHeld(Ob) || bb.selectedSlotEmpty() ? Db() : Bb - db >= rb && (Db(), hb.dropItem(!0)))
            })(ub, Bb, hb), Qb.update(Bb, ub, hb, Eb()), Zu(ub, hb)
          },
          pu = Hb.c.register({
            name: "gameplay",
            isActive: () => {
              const ub = hu && "keyboardMouse" === Bb.d.get("activeInputDevice") && !(0, Zb.z)(),
                hb = (0, Zb.k)() ? [ib.d] : [];
              return ((0, Zb.k)() || ub) && (0, pb.c)(hb) && bb.hasPlayer()
            },
            onFrame: bb => {
              const ub = performance.now(),
                hb = (0, wb.e)(),
                Bb = (0, eb.w)(bb, (0, eb.j)(hb, (0, Yb.f)("pause"), (0, Nb.d)().isSupported())),
                Ob = (0, eb.g)(Bb, hb.swapSticks);
              return (0, Zb.k)() ? (Bu = !1, (0, pb.c)() ? (Ou = !1, kb.update(Ob.look, hb, Bb.isHeld((0, Yb.f)("use"))), Hu(Bb, Ob.move, ub), void Xu(Bb, ub)) : (Ou || (Ou = !0, ab.lostToPadScreen(), au()), void wu(Bb, ub))) : (Bu || (Su(), Bu = !0), void Hu(Bb, Ob.move, ub))
            },
            onDeactivate: bb => {
              (0, Zb.k)() && ab.lostToPadScreen(), au(bb)
            },
            onPeekFrame: ub => {
              (0, Zb.k)() && (0, pb.c)(ib.i) && bb.hasPlayer() ? Hu(ub, (0, eb.g)(ub, (0, wb.e)().swapSticks).move, performance.now(), !0) : au()
            }
          }),
          ou = (0, ib.h)(bb),
          Au = (() => {
            const bb = Ob.i.subscribe(gb.c, (bb => {
              !bb && (0, Zb.k)() && "inGame" === Bb.d.get("gameState") && Ob.i.vp("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              Ob.i.unsubscribe(bb)
            }
          })();
        return () => {
          au(), bb.uninstall(), (0, Mb.g)(!1), (0, Pb.i)(!1), Ob.i.unsubscribe(Wb), Ob.i.unsubscribe(Rb), pu(), ou(), Au(), kb.uninstall()
        }
      }
  },
  40020: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Xb,
      h: () => ob,
      i: () => Zb
    });
    var Bb = hb(1184),
      Ob = hb(4053),
      Gb = hb(8517),
      Ub = hb(36579),
      Lb = hb(1613),
      Yb = hb(1086),
      Sb = hb(7888),
      ab = hb(8442),
      Hb = hb(8537);
    const wb = {
        emoteWheel: Gb.g,
        quickChatWheel: ab.c,
        actionWheel: Hb.s
      },
      Zb = Object.keys(wb),
      Xb = "dead",
      pb = bb => (0, Bb.h)().includes(bb),
      ob = bb => {
        const ub = [(0, Sb.i)(Xb, (() => bb.hasPlayer() && bb.isPlayerDead())), (0, Sb.i)("sleeping", (() => pb(Ub.e))), (0, Sb.i)("turnstile", (() => pb(Yb.c))), (0, Sb.i)("videoAd", Lb.c), (0, Sb.i)("replay", (() => (0, Ob.d)() || bb.isReplayMode())), (0, Sb.i)("freeCamera", (() => bb.isFreeCameraOn())), ...Object.entries(wb).map((bb => {
          let [ub, hb] = bb;
          return (0, Sb.i)(ub, hb)
        }))];
        return () => {
          for (const bb of ub) bb()
        }
      }
  },
  40017: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob,
      d: () => Yb,
      g: () => Lb,
      j: () => ab,
      n: () => Ub,
      q: () => Gb,
      u: () => Sb,
      w: () => Hb
    });
    var Bb = hb(7836);
    class Ob {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(bb, ub, hb) {
        const Ob = (0, Bb.j)(bb, ub.lookDeadzone);
        if (Math.hypot(Ob.x, Ob.y) < .9 || Math.abs(Ob.x) < Math.abs(Ob.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = hb);
        const Gb = (Ub = ub.lookSensitivityX, Math.min(1, 100 / Ub));
        var Ub;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (hb - this.fullTiltSinceMs - 250 * Gb) / (200 * Gb)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const Gb = (bb, ub, hb, Ob, Gb) => {
        let Ub = 1;
        return "boost" === hb.lookCurve ? Ub = bb.update(ub, hb, Gb) : bb.reset(),
          function(bb, ub) {
            let {
              yawBoost: hb = 1,
              aiming: Ob = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const Gb = (0, Bb.h)((0, Bb.j)(bb, ub.lookDeadzone), ub.lookCurve),
              Ub = 220 * Math.PI / 180,
              Lb = Ob ? ub.aimLookSensitivity / 100 : 1,
              Yb = ub.lookSensitivityX / 100 * Lb,
              Sb = ub.lookSensitivityY / 100 * Lb;
            return {
              yawRadPerSec: Gb.x * Ub * Yb * hb * (ub.invertLookX ? -1 : 1),
              pitchRadPerSec: Gb.y * Ub * .7 * Sb * (ub.invertLookY ? -1 : 1)
            }
          }(ub, hb, {
            yawBoost: Ub,
            aiming: Ob
          })
      },
      Ub = (bb, ub) => {
        const hb = Math.max(0, Math.min(250, ub)) / 1e3;
        return {
          MJ: bb.yawRadPerSec * hb,
          mJ: bb.pitchRadPerSec * hb
        }
      },
      Lb = (bb, ub) => ub ? {
        move: bb.rightStick,
        look: bb.leftStick
      } : {
        move: bb.leftStick,
        look: bb.rightStick
      },
      Yb = (bb, ub) => {
        const hb = (0, Bb.j)(bb, ub),
          Ob = Math.min(1, Math.hypot(hb.x, hb.y));
        return {
          magnitude: Ob,
          speed: Math.min(1, Ob / .8),
          headingOffset: 0 === Ob ? 0 : Math.atan2(hb.x, -hb.y),
          x: hb.x,
          y: hb.y
        }
      },
      Sb = (bb, ub) => {
        let {
          sprintPressed: hb,
          magnitude: Bb,
          autoSprint: Ob,
          nowMs: Gb
        } = ub;
        const Ub = hb ? Gb : bb.latchedAtMs,
          Lb = (bb => {
            let {
              running: ub,
              magnitude: hb,
              sprintPressed: Bb,
              autoSprint: Ob
            } = bb;
            return !(hb < .5) && (!!Bb || !!(Ob && hb >= .9) || ub)
          })({
            running: bb.running,
            magnitude: Bb,
            sprintPressed: Gb - Ub <= 1e3,
            autoSprint: Ob
          });
        return {
          running: Lb,
          latchedAtMs: Lb ? -1 / 0 : Ub
        }
      },
      ab = (bb, ub, hb) => hb && bb.gyroAiming && "button" === bb.gyroActivation && bb.gyroButton !== ub ? bb.gyroButton : null,
      Hb = (bb, ub) => ub ? {
        ...bb,
        isHeld: hb => hb !== ub && bb.isHeld(hb),
        wasPressed: hb => hb !== ub && bb.wasPressed(hb),
        wasReleased: hb => hb !== ub && bb.wasReleased(hb),
        value: hb => hb === ub ? 0 : bb.value(hb)
      } : bb
  },
  40033: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob,
      e: () => Bb
    });
    const Bb = bb => {
      let {
        mode: ub,
        sneakHeld: hb,
        sneakPressed: Bb,
        sneakTogglePressed: Ob,
        descending: Gb,
        canCrouch: Ub,
        toggled: Lb
      } = bb;
      return Ub ? Gb ? {
        crouchHeld: hb,
        toggled: !1
      } : "hold" === ub ? {
        crouchHeld: hb,
        toggled: Ob ? !Lb : Lb
      } : {
        crouchHeld: !1,
        toggled: Bb || Ob ? !Lb : Lb
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class Ob {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(bb, ub) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = ub, this.graceEndsMs = ub + 500);
        const hb = ub < this.graceEndsMs;
        return hb && (bb.sneakPressed || bb.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, ub + 300))), bb.sneakHeld ? hb && bb.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: bb.sneakHeld && !this.ignoringHeld,
          sneakPressed: bb.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: bb.sneakTogglePressed && !hb
        }
      }
    }
  },
  40006: (bb, ub, hb) => {
    hb(8589)
  },
  40014: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Kb
    });
    var Bb = hb(16),
      Ob = hb(8517),
      Gb = hb(8522),
      Ub = hb(7843),
      Lb = hb(7882),
      Yb = hb(7857),
      Sb = hb(40017),
      ab = hb(40020),
      Hb = hb(7888),
      wb = hb(7836),
      Zb = hb(8442),
      Xb = hb(8537);
    const pb = [{
        isOpen: Ob.i,
        openButton: () => (0, Ub.f)("emoteWheel"),
        aim: bb => {
          Bb.i.vp("emoteWheelPadAim", bb)
        },
        commit: bb => {
          Bb.i.vp("requestEmoteWheelPadCommit", bb)
        },
        close: () => {
          Bb.i.vp("requestEmoteWheelClose")
        }
      }, {
        isOpen: Zb.c,
        openButton: () => (0, Ub.f)("chat"),
        aim: bb => {
          Bb.i.vp(Zb.e, bb)
        },
        commit: bb => {
          Bb.i.vp(Zb.k, bb)
        },
        close: () => {
          Bb.i.vp(Zb.g)
        },
        keptOpenBy: [ab.d]
      }, {
        isOpen: Xb.s,
        openButton: () => (0, Ub.f)("actionButton"),
        aim: bb => {
          Bb.i.vp(Xb.e, bb)
        },
        commit: bb => {
          Bb.i.vp(Xb.k, bb)
        },
        close: () => {
          Bb.i.vp(Xb.i)
        }
      }],
      ob = () => {
        var bb;
        return null !== (bb = pb.find((bb => bb.isOpen()))) && void 0 !== bb ? bb : null
      },
      Ab = bb => (0, Ub.M)(bb.openButton()),
      lb = (bb, ub) => !(0, wb.L)(bb.frame.values, ub),
      Kb = () => {
        let bb = null,
          ub = !1,
          hb = !1;
        return Lb.c.register({
          name: "wheel",
          isActive: () => null !== ob(),
          peek: () => {
            const bb = ob();
            return bb && Ab(bb) ? null : {
              over: "gameplay",
              stick: (0, Yb.e)().swapSticks ? "right" : "left"
            }
          },
          onFrame: Bb => {
            var Ob;
            const wb = ob();
            if (!wb) return;
            if (null !== (0, Hb.b)([...ab.i, ...null !== (Ob = wb.keptOpenBy) && void 0 !== Ob ? Ob : []])) return void wb.close();
            const Zb = wb.openButton(),
              Xb = (0, Sb.g)(Bb.frame, (0, Yb.e)().swapSticks),
              pb = Ab(wb) ? Xb.move : Xb.look;
            bb !== wb ? (bb = wb, ub = !lb(Bb, Zb) || Math.hypot(pb.x, pb.y) >= Gb.v, hb = !1) : hb && (hb = !1, lb(Bb, Zb) && (ub = !1)), wb.aim(pb);
            const Kb = (0, Ub.f)("menuConfirm"),
              Wb = (0, Ub.f)("menuBack");
            return Bb.wasPressed(Wb) ? (Lb.c.consumeButton(Wb), void wb.close()) : Bb.wasPressed(Kb) || Bb.wasPressed(Zb) ? (Lb.c.consumeButton(Kb), Lb.c.consumeButton(Zb), void wb.commit(!1)) : void(ub && lb(Bb, Zb) && (ub = !1, wb.commit(!0)))
          },
          onDeactivate: () => {
            hb = null !== bb && ob() === bb, hb || (bb = null, ub = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
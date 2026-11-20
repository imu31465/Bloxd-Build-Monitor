export const id = 217;
export const ids = [217];
export const modules = {
  36496: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Lb,
      e: () => Vb
    });
    var kb = sb(4039),
      Wb = sb(1423),
      ab = sb(64),
      Tb = sb(6134),
      Ub = sb(4031),
      Ib = sb(1287),
      Hb = sb(1870),
      fb = sb(1839),
      Mb = sb(1431),
      Xb = sb(1197),
      nb = sb(36502),
      mb = sb(1033),
      lb = sb.n(mb),
      Qb = sb(1302),
      eb = sb(1039),
      Cb = sb(1278),
      Nb = sb(1087);
    const Vb = "SleepingOverlay";

    function Lb() {
      const {
        t: bb
      } = (0, Xb.E)(), [cb, sb] = (0, ab.useState)(!1), [mb, Lb] = (0, ab.useState)(null), [Yb, hb] = (0, ab.useState)(1), [Jb, gb] = (0, ab.useState)(!1), [Bb, tb] = (0, ab.useState)(!1), yb = (0, ab.useRef)(0), Pb = (0, ab.useRef)(!1), Db = (0, ab.useRef)(!1), Eb = (0, ab.useRef)(), ib = (0, ab.useRef)(null);

      function Ob() {
        const bb = null !== mb && void 0 !== mb ? mb : "Rested Speed";
        Hb.gameBridge.send("wakeUp", Bb ? bb : null), ib.current = null, sb(!1), Lb(null), hb(1), gb(!1), tb(!1)
      }

      function Gb() {
        return !Jb && (Ob(), !0)
      }
      return (0, Wb.f)("PlayerPhysicsTypeUpdate", (bb => {
        bb !== ib.current && (ib.current = bb, bb === Tb.t.SLEEPING ? (Db.current || (yb.current = Hb.gameBridge.lookup("cameraZoom", null), Db.current = !0), Pb.current = !0, Hb.gameBridge.send("setCameraZoom", 3), sb(!0), hb(function() {
          for (const bb of Hb.gameBridge.lookup("blocksStandingOn", null)) {
            if (nb.d.leafBeds.includes(bb)) return console.log(`Found leaf bed: ${bb}`), 1;
            if (nb.d.woolBeds.includes(bb)) return console.log(`Found woold bed: ${bb}`), 2;
            if (nb.d.strongBeds.includes(bb)) return console.log(`Found strong bed ${bb}`), 3
          }
          return 1
        }())) : (Db.current = !1, sb(!1), Lb(null), hb(1)))
      })), (0, ab.useEffect)((() => () => {
        (0, Ib.k)(Vb)
      }), []), (0, ab.useEffect)((() => {
        cb ? (0, Ib.n)(Vb) : ((0, Ib.k)(Vb), Pb.current && (Hb.gameBridge.send("setCameraZoom", yb.current), Pb.current = !1))
      }), [cb]), (0, Cb.o)("overlay", Eb, Gb, cb), (0, Nb.jsx)(kb.c, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: cb,
        timeout: 300,
        nodeRef: Eb,
        unmountOnExit: !0,
        children: (0, Nb.jsx)("div", {
          ref: Eb,
          onClick: bb => {
            Gb() && bb.stopPropagation()
          },
          children: (0, Nb.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Nb.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: Ub.e.map((cb => (0, Nb.jsxs)(ub, {
                restedEffect: cb,
                iU: mb,
                setChosenRestedEffect: Lb,
                children: [(0, Nb.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Nb.jsx)(fb.d, {
                    text: [{
                      icon: cb
                    }]
                  }), Ub.d[cb].shortName]
                }), (0, Nb.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: bb(Ub.d[cb].description, {
                    time: Ub.d[cb].effectLevelDurations[Yb] / 6e4
                  })
                })]
              }, cb)))
            }), (0, Nb.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Nb.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Nb.jsxs)(Mb.d, {
                className: "SleepingOverlayWakeUpButton",
                onClick: bb => {
                  Bb ? Ob() : (gb(!0), (0, Qb.ab)((() => {
                    gb(!1), tb(!0)
                  }), !0)), bb.stopPropagation()
                },
                loading: Jb,
                children: [!Bb && (0, Nb.jsxs)(Nb.Fragment, {
                  children: [(0, Nb.jsx)(eb.b, {
                    name: "film"
                  }), " ", bb("classicGame:watchAdToGetRestedPerk")]
                }), Bb && bb("classicGame:wakeUp")]
              }), (0, Nb.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Nb.jsx)("div", {
                  className: lb()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === Yb
                  }),
                  children: (0, Nb.jsx)(fb.d, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Nb.jsx)("div", {
                  className: lb()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === Yb
                  }),
                  children: (0, Nb.jsx)(fb.d, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Nb.jsx)("div", {
                  className: lb()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === Yb
                  }),
                  children: (0, Nb.jsx)(fb.d, {
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
    const ub = (0, ab.memo)((function(bb) {
      let {
        children: cb,
        restedEffect: sb,
        iU: kb,
        setChosenRestedEffect: Wb
      } = bb;
      return sb === kb ? (0, Nb.jsx)(Mb.n, {
        onClick: bb => {
          bb.stopPropagation()
        },
        children: cb
      }) : (0, Nb.jsx)(Mb.h, {
        onClick: bb => {
          Wb(sb), bb.stopPropagation()
        },
        children: cb
      })
    }))
  },
  39989: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Rb
    });
    var kb = sb(19),
      Wb = sb(26),
      ab = sb(4060),
      Tb = sb(334),
      Ub = sb(1626),
      Ib = sb(7782),
      Hb = sb(4069),
      fb = sb(8311),
      Mb = sb(7812),
      Xb = sb(7789),
      nb = sb(7814),
      mb = sb(1666),
      lb = sb(7818),
      Qb = sb(8281),
      eb = sb(8421),
      Cb = sb(8323),
      Nb = sb(8425),
      Vb = sb(1870),
      Lb = sb(7774),
      ub = sb(8347),
      Yb = sb(8345),
      hb = sb(8315);
    class Jb {
      constructor() {
        this.lostAtMs = null
      }
      update(bb, cb) {
        return bb ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= cb, cb - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class gb {
      constructor(bb, cb) {
        this.press = bb, this.release = cb, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(bb, cb, sb, kb) {
        if (bb && null === this.downAtMs) return this.downAtMs = sb, this.latched = kb, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? bb && this.end() : !cb && sb - this.downAtMs >= 40 && this.end())
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
    const Bb = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      tb = bb => {
        let cb = null;
        const sb = new hb.b,
          kb = () => {
            cb && (((bb, cb, sb) => {
              switch (sb.kind) {
                case "reload":
                  return void cb.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void cb.specialActionUp(sb.action);
                case "customButton":
                  return void Vb.gameBridge.send("pressCustomButton", {
                    id: sb.id,
                    down: !1
                  });
                case "touchButton":
                  bb.pressTouchButton(!1)
              }
            })(bb, cb.bodies, cb.action), cb = null)
          },
          ab = (sb, Wb, ab, Tb) => {
            kb(), cb = {
              action: Wb,
              bodies: sb,
              heldBy: ab,
              atMs: Tb
            }, ((bb, cb, sb) => {
              switch (sb.kind) {
                case "reload":
                  return cb.reloadGun(), void cb.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void cb.specialActionDown(sb.action);
                case "customButton":
                  return void Vb.gameBridge.send("pressCustomButton", {
                    id: sb.id,
                    down: !0
                  });
                case "touchButton":
                  bb.pressTouchButton(!0)
              }
            })(bb, sb, Wb)
          };
        return {
          update: (Tb, Ub, Hb, fb) => {
            var Xb;
            const nb = (0, ub.m)(bb.contextActionInputs()),
              mb = null !== (Xb = nb[0]) && void 0 !== Xb ? Xb : Bb;
            (0, Yb.b)((0, ub.e)(mb) ? mb : null);
            const lb = (0, ub.d)(nb);
            (0, Yb.e)(lb);
            const Qb = (0, Ib.i)("actionButton");
            if (lb) {
              const bb = sb.update(Ub.wasPressed(Qb), Ub.isHeld(Qb), Hb, fb);
              "tap" === bb ? ab(Tb, mb, [Qb], Hb) : "hold" === bb && (Mb.e.consumeButton(Qb), Wb.j.QQ(Nb.l, nb))
            } else sb.release(), Ub.wasPressed(Qb) && ab(Tb, mb, [Qb], Hb);
            cb && Hb - cb.atMs >= 40 && !cb.heldBy.some((bb => (0, Lb.G)(Ub.frame.values, bb))) && kb()
          },
          pressPicked: (bb, cb) => {
            ab(bb, cb, [(0, Ib.i)("menuConfirm"), (0, Ib.i)("actionButton")], performance.now())
          },
          release: () => {
            sb.release(), kb(), (0, Yb.b)(null), (0, Yb.e)(!1)
          }
        }
      };
    var yb = sb(7771);
    var Pb = sb(39981),
      Db = sb(8359),
      Eb = sb(7807),
      ib = sb(8466);
    var Ob = sb(39977),
      Gb = sb(8468),
      Kb = sb(39998),
      Zb = sb(8442),
      zb = sb(8366),
      qb = sb(8375),
      db = sb(8379),
      Ab = sb(8285);
    const wb = () => Ab.d[(0, Xb.g)().tapHoldTime].wheelMs,
      rb = () => ((0, fb.b)(), new Event("controllerMenuKey")),
      ob = (bb, cb, sb) => new gb((() => {
        const sb = bb.bodies();
        return {
          bodies: sb,
          press: cb(sb)
        }
      }), (bb => {
        let {
          bodies: cb,
          press: kb
        } = bb;
        sb(cb, kb)
      })),
      Sb = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      Rb = bb => {
        const cb = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let sb = Sb;
        const fb = new Kb.e,
          Vb = Wb.j.subscribe("appManagerUpdated|activeInputDevice", (cb => {
            bb.deviceChanged(cb)
          }));
        let ub = null,
          Yb = 0;
        const gb = () => {
          ub = null, (0, zb.d)(null)
        };
        let Bb = !1;
        const Rb = new Jb,
          vb = bb.look,
          Fb = new hb.b,
          xb = new hb.b,
          jb = tb(bb),
          pb = Wb.j.subscribe(Nb.n, (cb => {
            jb.pressPicked(bb.bodies(), cb)
          })),
          bc = ob(bb, (bb => bb.primaryFireDown()), ((bb, cb) => {
            bb.primaryFireUp(cb)
          })),
          cc = ob(bb, (bb => bb.altFireDown()), ((bb, cb) => {
            bb.altFireUp(cb)
          }));
        let sc = !1,
          kc = !1,
          Wc = !1;
        const ac = (0, Qb.e)(Lb.T),
          Tc = (0, Qb.e)(Lb.T),
          Uc = new hb.b;
        let Ic = !1;
        const Hc = () => {
            ac.reset(), Tc.reset(), Uc.release(), (0, db.h)(!1), vb.release(), bc.cancel(), (0, qb.e)(!1), cc.cancel(), jb.release(), Fb.release(), xb.release(), gb()
          },
          fc = function() {
            let kb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            Hc(), kc = !1, kb || (sc = !1, sb = Sb, Object.assign(cb, {
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
          Mc = function(kb, Wb, ab) {
            let Tb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const Ub = (0, Xb.g)(),
              Hb = (0, Ob.d)(Wb, Ub.moveDeadzone),
              Mb = (0, Ib.i)("sprint");
            sb = (0, Ob.o)(sb, {
              sprintPressed: kb.wasPressed(Mb),
              magnitude: Hb.magnitude,
              autoSprint: Ub.autoSprint,
              nowMs: ab
            }), cb.running = sb.running, cb.sprintHeld = kb.isHeld(Mb), cb.x = Hb.x, cb.y = Hb.y, cb.magnitude = Hb.speed, cb.headingOffset = Hb.headingOffset, sc = Hb.magnitude > 0;
            const nb = (0, Ib.i)("jump");
            if (cb.jumpHeld = kb.isHeld(nb), cb.jumpPressed = kb.wasPressed(nb), cb.jumpPressed && bb.bodies().jumpDown(), Tb) return void bb.move(cb, null);
            const mb = (0, Ib.i)("sneak"),
              lb = fb.filter({
                sneakHeld: kb.isHeld(mb),
                sneakPressed: kb.wasPressed(mb),
                sneakTogglePressed: kb.wasPressed((0, Ib.i)("sneakToggle"))
              }, ab);
            bb.move(cb, {
              ...lb,
              mode: Ub.sneakMode
            })
          },
          Xc = (bb, cb) => {
            const sb = (0, Ib.i)("chat");
            if ("off" === (0, Xb.g)().quickChat) return void(bb.wasPressed(sb) && (Mb.e.consumeButton(sb), Wb.j.QQ(Db.e)));
            const kb = Fb.update(bb.wasPressed(sb), bb.isHeld(sb), cb, wb());
            "tap" === kb || "hold" === kb && null === (0, mb.e)() ? Wb.j.QQ(Db.e) : "hold" === kb && (Mb.e.consumeButton(sb), Wb.j.QQ(Cb.p))
          },
          nc = (cb, sb) => {
            ((bb, cb) => {
              const sb = (0, eb.e)(),
                kb = (0, Ib.i)("emoteWheel");
              if ("wheel" === (0, Xb.g)().emoteButton) return bb.wasPressed(kb) && (Mb.e.consumeButton(kb), Wb.j.QQ("requestEmoteWheelPadOpen", !0)), (0, eb.e)() !== sb;
              const ab = xb.update(bb.wasPressed(kb), bb.isHeld(kb), cb, wb());
              return "tap" === ab ? Wb.j.QQ("requestEmoteRepeatLast") : "hold" === ab && (Mb.e.consumeButton(kb), Wb.j.QQ("requestEmoteWheelPadOpen", !1)), (0, eb.e)() !== sb
            })(cb, sb) || Xc(cb, sb), cb.wasPressed((0, Ib.i)("inventory")) && (Mb.e.consumeButton((0, Ib.i)("inventory")), (0, Ub.y)(rb(), "inventory", bb.hasFullInventory())), cb.wasPressed((0, Ib.i)("pause")) && (Mb.e.consumeButton((0, Ib.i)("pause")), (0, Hb.c)() === Tb.r.SOCIAL ? (0, Ub.v)(rb(), Tb.r.SOCIAL) : (0, Ub.i)(rb())), cb.wasPressed((0, Ib.i)("leaderboard")) && !(0, ab.f)() && (Mb.e.consumeButton((0, Ib.i)("leaderboard")), ((bb, cb) => {
              if ("shop" === (0, Eb.d)()) return Wb.j.QQ(ib.h), void(0, Ub.v)(bb, Tb.r.SHOP, !0);
              (0, Ub.v)(bb, Tb.r.LOBBY_LEADERBOARD, cb)
            })(rb(), bb.hasLobbyLeaderboard()))
          },
          mc = (cb, sb) => {
            const kb = bb.bodies();
            ((cb, sb) => {
              const kb = (0, Ib.i)("attack"),
                Wb = cb.wasPressed(kb);
              Wb && !bc.isLatched() && (Bb = bb.targetsBlock()), bc.update(Wb, cb.isHeld(kb), sb, "toggle" === (0, Xb.g)().attackMode), bc.isLatched() && Bb ? Rb.update(bb.targetsBlock(), sb) && bc.unlatch() : Rb.reset(), (0, qb.e)(bc.isLatched())
            })(cb, sb), cc.update(cb.wasPressed((0, Ib.i)("use")), cb.isHeld((0, Ib.i)("use")), sb, !1), ac.update(cb.isHeld((0, Ib.i)("hotbarPrevious")), sb) && bb.scrollHotbar(-1), Tc.update(cb.isHeld((0, Ib.i)("hotbarNext")), sb) && bb.scrollHotbar(1), ((cb, sb, kb) => {
              const Wb = (0, Ib.i)("perspective"),
                ab = (0, Ib.i)("pickBlock"),
                Tb = bb.pickBlockAllowed();
              (0, db.h)(Tb && !Ic && bb.targetsBlock());
              const Ub = () => {
                sb.pickBlock() && (Ic = !0, (0, db.h)(!1))
              };
              if (!Tb || ab !== Wb) return Uc.release(), cb.wasPressed(Wb) && sb.swapCameraZoom(), void(Tb && cb.wasPressed(ab) && Ub());
              const Hb = Uc.update(cb.wasPressed(ab), cb.isHeld(ab), kb, wb());
              "tap" === Hb ? Ub() : "hold" === Hb && sb.swapCameraZoom()
            })(cb, kb, sb), ((cb, sb, kb) => {
              const Wb = (0, Ib.i)("drop");
              if (cb.wasPressed(Wb)) {
                sb.dropItem(!1);
                const bb = (0, Xb.g)();
                "off" !== bb.buttonRepeat && (ub = kb, Yb = Ab.d[bb.tapHoldTime].dropStackMs, (0, zb.d)(Yb))
              }
              null !== ub && (!cb.isHeld(Wb) || bb.selectedSlotEmpty() ? gb() : kb - ub >= Yb && (gb(), sb.dropItem(!0)))
            })(cb, kb, sb), jb.update(kb, cb, sb, wb()), nc(cb, sb)
          },
          lc = Mb.e.register({
            name: "gameplay",
            isActive: () => {
              const cb = sc && "keyboardMouse" === kb.d.get("activeInputDevice") && !(0, nb.F)(),
                sb = (0, nb.k)() ? [Pb.d] : [];
              return ((0, nb.k)() || cb) && (0, lb.i)(sb) && bb.hasPlayer()
            },
            onFrame: bb => {
              const cb = performance.now(),
                sb = (0, Xb.g)(),
                kb = (0, Ob.p)(bb, (0, Ob.i)(sb, (0, Ib.i)("pause"), (0, Gb.d)().isSupported())),
                Wb = (0, Ob.h)(kb, sb.swapSticks);
              return (0, nb.k)() ? (kc = !1, (0, lb.i)() ? (Wc = !1, vb.update(Wb.look, sb, kb.isHeld((0, Ib.i)("use"))), Mc(kb, Wb.move, cb), void mc(kb, cb)) : (Wc || (Wc = !0, fb.lostToPadScreen(), fc()), void Xc(kb, cb))) : (kc || (Hc(), kc = !0), void Mc(kb, Wb.move, cb))
            },
            onDeactivate: bb => {
              (0, nb.k)() && fb.lostToPadScreen(), fc(bb)
            },
            onPeekFrame: cb => {
              (0, nb.k)() && (0, lb.i)(Pb.h) && bb.hasPlayer() ? Mc(cb, (0, Ob.h)(cb, (0, Xb.g)().swapSticks).move, performance.now(), !0) : fc()
            }
          }),
          Qc = (0, Pb.g)(bb),
          ec = (() => {
            const bb = Wb.j.subscribe(yb.e, (bb => {
              !bb && (0, nb.k)() && "inGame" === kb.d.get("gameState") && Wb.j.QQ("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              Wb.j.unsubscribe(bb)
            }
          })();
        return () => {
          fc(), bb.uninstall(), (0, Zb.h)(!1), (0, db.h)(!1), Wb.j.unsubscribe(Vb), Wb.j.unsubscribe(pb), lc(), Qc(), ec(), vb.uninstall()
        }
      }
  },
  39981: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => mb,
      g: () => Qb,
      h: () => nb
    });
    var kb = sb(1287),
      Wb = sb(4060),
      ab = sb(8402),
      Tb = sb(36496),
      Ub = sb(1702),
      Ib = sb(1191),
      Hb = sb(7818),
      fb = sb(8323),
      Mb = sb(8425);
    const Xb = {
        emoteWheel: ab.c,
        quickChatWheel: fb.c,
        actionWheel: Mb.q
      },
      nb = Object.keys(Xb),
      mb = "dead",
      lb = bb => (0, kb.j)().includes(bb),
      Qb = bb => {
        const cb = [(0, Hb.o)(mb, (() => bb.hasPlayer() && bb.isPlayerDead())), (0, Hb.o)("sleeping", (() => lb(Tb.e))), (0, Hb.o)("turnstile", (() => lb(Ib.g))), (0, Hb.o)("videoAd", Ub.g), (0, Hb.o)("replay", (() => (0, Wb.f)() || bb.isReplayMode())), (0, Hb.o)("freeCamera", (() => bb.isFreeCameraOn())), ...Object.entries(Xb).map((bb => {
          let [cb, sb] = bb;
          return (0, Hb.o)(cb, sb)
        }))];
        return () => {
          for (const bb of cb) bb()
        }
      }
  },
  39977: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb,
      d: () => Ib,
      h: () => Ub,
      i: () => fb,
      j: () => Tb,
      m: () => ab,
      o: () => Hb,
      p: () => Mb
    });
    var kb = sb(7774);
    class Wb {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(bb, cb, sb) {
        const Wb = (0, kb.m)(bb, cb.lookDeadzone);
        if (Math.hypot(Wb.x, Wb.y) < .9 || Math.abs(Wb.x) < Math.abs(Wb.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = sb);
        const ab = (Tb = cb.lookSensitivityX, Math.min(1, 100 / Tb));
        var Tb;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (sb - this.fullTiltSinceMs - 250 * ab) / (200 * ab)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const ab = (bb, cb, sb, Wb, ab) => {
        let Tb = 1;
        return "boost" === sb.lookCurve ? Tb = bb.update(cb, sb, ab) : bb.reset(),
          function(bb, cb) {
            let {
              yawBoost: sb = 1,
              aiming: Wb = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const ab = (0, kb.i)((0, kb.m)(bb, cb.lookDeadzone), cb.lookCurve),
              Tb = 220 * Math.PI / 180,
              Ub = Wb ? cb.aimLookSensitivity / 100 : 1,
              Ib = cb.lookSensitivityX / 100 * Ub,
              Hb = cb.lookSensitivityY / 100 * Ub;
            return {
              yawRadPerSec: ab.x * Tb * Ib * sb * (cb.invertLookX ? -1 : 1),
              pitchRadPerSec: ab.y * Tb * .7 * Hb * (cb.invertLookY ? -1 : 1)
            }
          }(cb, sb, {
            yawBoost: Tb,
            aiming: Wb
          })
      },
      Tb = (bb, cb) => {
        const sb = Math.max(0, Math.min(250, cb)) / 1e3;
        return {
          Eu: bb.yawRadPerSec * sb,
          bY: bb.pitchRadPerSec * sb
        }
      },
      Ub = (bb, cb) => cb ? {
        move: bb.rightStick,
        look: bb.leftStick
      } : {
        move: bb.leftStick,
        look: bb.rightStick
      },
      Ib = (bb, cb) => {
        const sb = (0, kb.m)(bb, cb),
          Wb = Math.min(1, Math.hypot(sb.x, sb.y));
        return {
          magnitude: Wb,
          speed: Math.min(1, Wb / .8),
          headingOffset: 0 === Wb ? 0 : Math.atan2(sb.x, -sb.y),
          x: sb.x,
          y: sb.y
        }
      },
      Hb = (bb, cb) => {
        let {
          sprintPressed: sb,
          magnitude: kb,
          autoSprint: Wb,
          nowMs: ab
        } = cb;
        const Tb = sb ? ab : bb.latchedAtMs,
          Ub = (bb => {
            let {
              running: cb,
              magnitude: sb,
              sprintPressed: kb,
              autoSprint: Wb
            } = bb;
            return !(sb < .5) && (!!kb || !!(Wb && sb >= .9) || cb)
          })({
            running: bb.running,
            magnitude: kb,
            sprintPressed: ab - Tb <= 1e3,
            autoSprint: Wb
          });
        return {
          running: Ub,
          latchedAtMs: Ub ? -1 / 0 : Tb
        }
      },
      fb = (bb, cb, sb) => sb && bb.gyroAiming && "button" === bb.gyroActivation && bb.gyroButton !== cb ? bb.gyroButton : null,
      Mb = (bb, cb) => cb ? {
        ...bb,
        isHeld: sb => sb !== cb && bb.isHeld(sb),
        wasPressed: sb => sb !== cb && bb.wasPressed(sb),
        wasReleased: sb => sb !== cb && bb.wasReleased(sb),
        value: sb => sb === cb ? 0 : bb.value(sb)
      } : bb
  },
  39998: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb,
      f: () => kb
    });
    const kb = bb => {
      let {
        mode: cb,
        sneakHeld: sb,
        sneakPressed: kb,
        sneakTogglePressed: Wb,
        descending: ab,
        canCrouch: Tb,
        toggled: Ub
      } = bb;
      return Tb ? ab ? {
        crouchHeld: sb,
        toggled: !1
      } : "hold" === cb ? {
        crouchHeld: sb,
        toggled: Wb ? !Ub : Ub
      } : {
        crouchHeld: !1,
        toggled: kb || Wb ? !Ub : Ub
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class Wb {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(bb, cb) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = cb, this.graceEndsMs = cb + 500);
        const sb = cb < this.graceEndsMs;
        return sb && (bb.sneakPressed || bb.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, cb + 300))), bb.sneakHeld ? sb && bb.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: bb.sneakHeld && !this.ignoringHeld,
          sneakPressed: bb.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: bb.sneakTogglePressed && !sb
        }
      }
    }
  },
  39969: (bb, cb, sb) => {
    sb(8468)
  },
  39971: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Nb
    });
    var kb = sb(26),
      Wb = sb(8402),
      ab = sb(8414),
      Tb = sb(7782),
      Ub = sb(7812),
      Ib = sb(7789),
      Hb = sb(39977),
      fb = sb(39981),
      Mb = sb(7818),
      Xb = sb(7774),
      nb = sb(8323),
      mb = sb(8425);
    const lb = [{
        isOpen: Wb.d,
        openButton: () => (0, Tb.i)("emoteWheel"),
        aim: bb => {
          kb.j.QQ("emoteWheelPadAim", bb)
        },
        commit: bb => {
          kb.j.QQ("requestEmoteWheelPadCommit", bb)
        },
        close: () => {
          kb.j.QQ("requestEmoteWheelClose")
        }
      }, {
        isOpen: nb.c,
        openButton: () => (0, Tb.i)("chat"),
        aim: bb => {
          kb.j.QQ(nb.f, bb)
        },
        commit: bb => {
          kb.j.QQ(nb.l, bb)
        },
        close: () => {
          kb.j.QQ(nb.h)
        },
        keptOpenBy: [fb.d]
      }, {
        isOpen: mb.q,
        openButton: () => (0, Tb.i)("actionButton"),
        aim: bb => {
          kb.j.QQ(mb.e, bb)
        },
        commit: bb => {
          kb.j.QQ(mb.j, bb)
        },
        close: () => {
          kb.j.QQ(mb.i)
        }
      }],
      Qb = () => {
        var bb;
        return null !== (bb = lb.find((bb => bb.isOpen()))) && void 0 !== bb ? bb : null
      },
      eb = bb => (0, Tb.M)(bb.openButton()),
      Cb = (bb, cb) => !(0, Xb.G)(bb.frame.values, cb),
      Nb = () => {
        let bb = null,
          cb = !1,
          sb = !1;
        return Ub.e.register({
          name: "wheel",
          isActive: () => null !== Qb(),
          peek: () => {
            const bb = Qb();
            return bb && eb(bb) ? null : {
              over: "gameplay",
              stick: (0, Ib.g)().swapSticks ? "right" : "left"
            }
          },
          onFrame: kb => {
            var Wb;
            const Xb = Qb();
            if (!Xb) return;
            if (null !== (0, Mb.e)([...fb.h, ...null !== (Wb = Xb.keptOpenBy) && void 0 !== Wb ? Wb : []])) return void Xb.close();
            const nb = Xb.openButton(),
              mb = (0, Hb.h)(kb.frame, (0, Ib.g)().swapSticks),
              lb = eb(Xb) ? mb.move : mb.look;
            bb !== Xb ? (bb = Xb, cb = !Cb(kb, nb) || Math.hypot(lb.x, lb.y) >= ab.A, sb = !1) : sb && (sb = !1, Cb(kb, nb) && (cb = !1)), Xb.aim(lb);
            const Nb = (0, Tb.i)("menuConfirm"),
              Vb = (0, Tb.i)("menuBack");
            return kb.wasPressed(Vb) ? (Ub.e.consumeButton(Vb), void Xb.close()) : kb.wasPressed(Nb) || kb.wasPressed(nb) ? (Ub.e.consumeButton(Nb), Ub.e.consumeButton(nb), void Xb.commit(!1)) : void(cb && Cb(kb, nb) && (cb = !1, Xb.commit(!0)))
          },
          onDeactivate: () => {
            sb = null !== bb && Qb() === bb, sb || (bb = null, cb = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
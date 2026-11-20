export const id = 217;
export const ids = [217];
export const modules = {
  36256: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => xb,
      g: () => zb
    });
    var Ab = Ub(3970),
      Mb = Ub(1345),
      Tb = Ub(52),
      Eb = Ub(6091),
      Yb = Ub(3961),
      Bb = Ub(1216),
      eb = Ub(1824),
      vb = Ub(1794),
      Lb = Ub(1352),
      Pb = Ub(1134),
      Xb = Ub(36260),
      jb = Ub(984),
      Rb = Ub.n(jb),
      kb = Ub(1238),
      yb = Ub(990),
      Zb = Ub(1213),
      Db = Ub(1023);
    const zb = "SleepingOverlay";

    function xb() {
      const {
        t: bb
      } = (0, Pb.A)(), [ab, Ub] = (0, Tb.useState)(!1), [jb, xb] = (0, Tb.useState)(null), [fb, mb] = (0, Tb.useState)(1), [pb, Nb] = (0, Tb.useState)(!1), [Wb, Hb] = (0, Tb.useState)(!1), Ib = (0, Tb.useRef)(0), db = (0, Tb.useRef)(!1), Fb = (0, Tb.useRef)(!1), hb = (0, Tb.useRef)(), Gb = (0, Tb.useRef)(null);

      function Qb() {
        const bb = null !== jb && void 0 !== jb ? jb : "Rested Speed";
        eb.gameBridge.send("wakeUp", Wb ? bb : null), Gb.current = null, Ub(!1), xb(null), mb(1), Nb(!1), Hb(!1)
      }

      function qb() {
        return !pb && (Qb(), !0)
      }
      return (0, Mb.f)("PlayerPhysicsTypeUpdate", (bb => {
        bb !== Gb.current && (Gb.current = bb, bb === Eb.p.SLEEPING ? (Fb.current || (Ib.current = eb.gameBridge.lookup("cameraZoom", null), Fb.current = !0), db.current = !0, eb.gameBridge.send("setCameraZoom", 3), Ub(!0), mb(function() {
          for (const bb of eb.gameBridge.lookup("blocksStandingOn", null)) {
            if (Xb.d.leafBeds.includes(bb)) return console.log(`Found leaf bed: ${bb}`), 1;
            if (Xb.d.woolBeds.includes(bb)) return console.log(`Found woold bed: ${bb}`), 2;
            if (Xb.d.strongBeds.includes(bb)) return console.log(`Found strong bed ${bb}`), 3
          }
          return 1
        }())) : (Fb.current = !1, Ub(!1), xb(null), mb(1)))
      })), (0, Tb.useEffect)((() => () => {
        (0, Bb.g)(zb)
      }), []), (0, Tb.useEffect)((() => {
        ab ? (0, Bb.h)(zb) : ((0, Bb.g)(zb), db.current && (eb.gameBridge.send("setCameraZoom", Ib.current), db.current = !1))
      }), [ab]), (0, Zb.r)("overlay", hb, qb, ab), (0, Db.jsx)(Ab.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: ab,
        timeout: 300,
        nodeRef: hb,
        unmountOnExit: !0,
        children: (0, Db.jsx)("div", {
          ref: hb,
          onClick: bb => {
            qb() && bb.stopPropagation()
          },
          children: (0, Db.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Db.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: Yb.i.map((ab => (0, Db.jsxs)(ib, {
                restedEffect: ab,
                EY: jb,
                setChosenRestedEffect: xb,
                children: [(0, Db.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Db.jsx)(vb.c, {
                    text: [{
                      icon: ab
                    }]
                  }), Yb.f[ab].shortName]
                }), (0, Db.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: bb(Yb.f[ab].description, {
                    time: Yb.f[ab].effectLevelDurations[fb] / 6e4
                  })
                })]
              }, ab)))
            }), (0, Db.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Db.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Db.jsxs)(Lb.g, {
                className: "SleepingOverlayWakeUpButton",
                onClick: bb => {
                  Wb ? Qb() : (Nb(!0), (0, kb.Z)((() => {
                    Nb(!1), Hb(!0)
                  }), !0)), bb.stopPropagation()
                },
                loading: pb,
                children: [!Wb && (0, Db.jsxs)(Db.Fragment, {
                  children: [(0, Db.jsx)(yb.e, {
                    name: "film"
                  }), " ", bb("classicGame:watchAdToGetRestedPerk")]
                }), Wb && bb("classicGame:wakeUp")]
              }), (0, Db.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Db.jsx)("div", {
                  className: Rb()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === fb
                  }),
                  children: (0, Db.jsx)(vb.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Db.jsx)("div", {
                  className: Rb()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === fb
                  }),
                  children: (0, Db.jsx)(vb.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Db.jsx)("div", {
                  className: Rb()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === fb
                  }),
                  children: (0, Db.jsx)(vb.c, {
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
    const ib = (0, Tb.memo)((function(bb) {
      let {
        children: ab,
        restedEffect: Ub,
        EY: Ab,
        setChosenRestedEffect: Mb
      } = bb;
      return Ub === Ab ? (0, Db.jsx)(Lb.m, {
        onClick: bb => {
          bb.stopPropagation()
        },
        children: ab
      }) : (0, Db.jsx)(Lb.h, {
        onClick: bb => {
          Mb(Ub), bb.stopPropagation()
        },
        children: ab
      })
    }))
  },
  39689: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Vb
    });
    var Ab = Ub(19),
      Mb = Ub(22),
      Tb = Ub(3996),
      Eb = Ub(307),
      Yb = Ub(1548),
      Bb = Ub(7750),
      eb = Ub(4011),
      vb = Ub(8258),
      Lb = Ub(7782),
      Pb = Ub(7759),
      Xb = Ub(7788),
      jb = Ub(1597),
      Rb = Ub(7793),
      kb = Ub(8222),
      yb = Ub(8370),
      Zb = Ub(8272),
      Db = Ub(8378),
      zb = Ub(1824),
      xb = Ub(7739),
      ib = Ub(8298),
      fb = Ub(8293),
      mb = Ub(8264);
    class pb {
      constructor() {
        this.lostAtMs = null
      }
      update(bb, ab) {
        return bb ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= ab, ab - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class Nb {
      constructor(bb, ab) {
        this.press = bb, this.release = ab, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(bb, ab, Ub, Ab) {
        if (bb && null === this.downAtMs) return this.downAtMs = Ub, this.latched = Ab, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? bb && this.end() : !ab && Ub - this.downAtMs >= 40 && this.end())
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
    const Wb = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      Hb = bb => {
        let ab = null;
        const Ub = new mb.c,
          Ab = () => {
            ab && (((bb, ab, Ub) => {
              switch (Ub.kind) {
                case "reload":
                  return void ab.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void ab.specialActionUp(Ub.action);
                case "customButton":
                  return void zb.gameBridge.send("pressCustomButton", {
                    id: Ub.id,
                    down: !1
                  });
                case "touchButton":
                  bb.pressTouchButton(!1)
              }
            })(bb, ab.bodies, ab.action), ab = null)
          },
          Tb = (Ub, Mb, Tb, Eb) => {
            Ab(), ab = {
              action: Mb,
              bodies: Ub,
              heldBy: Tb,
              atMs: Eb
            }, ((bb, ab, Ub) => {
              switch (Ub.kind) {
                case "reload":
                  return ab.reloadGun(), void ab.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void ab.specialActionDown(Ub.action);
                case "customButton":
                  return void zb.gameBridge.send("pressCustomButton", {
                    id: Ub.id,
                    down: !0
                  });
                case "touchButton":
                  bb.pressTouchButton(!0)
              }
            })(bb, Ub, Mb)
          };
        return {
          update: (Eb, Yb, eb, vb) => {
            var Pb;
            const Xb = (0, ib.h)(bb.contextActionInputs()),
              jb = null !== (Pb = Xb[0]) && void 0 !== Pb ? Pb : Wb;
            (0, fb.d)((0, ib.e)(jb) ? jb : null);
            const Rb = (0, ib.d)(Xb);
            (0, fb.e)(Rb);
            const kb = (0, Bb.h)("actionButton");
            if (Rb) {
              const bb = Ub.update(Yb.wasPressed(kb), Yb.isHeld(kb), eb, vb);
              "tap" === bb ? Tb(Eb, jb, [kb], eb) : "hold" === bb && (Lb.c.consumeButton(kb), Mb.m.IR(Db.k, Xb))
            } else Ub.release(), Yb.wasPressed(kb) && Tb(Eb, jb, [kb], eb);
            ab && eb - ab.atMs >= 40 && !ab.heldBy.some((bb => (0, xb.D)(Yb.frame.values, bb))) && Ab()
          },
          pressPicked: (bb, ab) => {
            Tb(bb, ab, [(0, Bb.h)("menuConfirm"), (0, Bb.h)("actionButton")], performance.now())
          },
          release: () => {
            Ub.release(), Ab(), (0, fb.d)(null), (0, fb.e)(!1)
          }
        }
      };
    var Ib = Ub(7736);
    var db = Ub(39687),
      Fb = Ub(8311),
      hb = Ub(7773),
      Gb = Ub(8418);
    var Qb = Ub(39679),
      qb = Ub(8423),
      ub = Ub(39695),
      rb = Ub(8394),
      Kb = Ub(8315),
      ob = Ub(8320),
      lb = Ub(8323),
      tb = Ub(8225);
    const wb = () => tb.c[(0, Pb.i)().tapHoldTime].wheelMs,
      sb = () => ((0, vb.d)(), new Event("controllerMenuKey")),
      gb = (bb, ab, Ub) => new Nb((() => {
        const Ub = bb.bodies();
        return {
          bodies: Ub,
          press: ab(Ub)
        }
      }), (bb => {
        let {
          bodies: ab,
          press: Ab
        } = bb;
        Ub(ab, Ab)
      })),
      Cb = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      Vb = bb => {
        const ab = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let Ub = Cb;
        const vb = new ub.c,
          zb = Mb.m.subscribe("appManagerUpdated|activeInputDevice", (ab => {
            bb.deviceChanged(ab)
          }));
        let ib = null,
          fb = 0;
        const Nb = () => {
          ib = null, (0, Kb.h)(null)
        };
        let Wb = !1;
        const Vb = new pb,
          Ob = bb.look,
          cb = new mb.c,
          Jb = new mb.c,
          nb = Hb(bb),
          Sb = Mb.m.subscribe(Db.n, (ab => {
            nb.pressPicked(bb.bodies(), ab)
          })),
          ba = gb(bb, (bb => bb.primaryFireDown()), ((bb, ab) => {
            bb.primaryFireUp(ab)
          })),
          aa = gb(bb, (bb => bb.altFireDown()), ((bb, ab) => {
            bb.altFireUp(ab)
          }));
        let Ua = !1,
          Aa = !1,
          Ma = !1;
        const Ta = (0, kb.c)(xb.Q),
          Ea = (0, kb.c)(xb.Q),
          Ya = new mb.c;
        let Ba = !1;
        const ea = () => {
            Ta.reset(), Ea.reset(), Ya.release(), (0, lb.f)(!1), Ob.release(), ba.cancel(), (0, ob.e)(!1), aa.cancel(), nb.release(), cb.release(), Jb.release(), Nb()
          },
          va = function() {
            let Ab = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            ea(), Aa = !1, Ab || (Ua = !1, Ub = Cb, Object.assign(ab, {
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
          La = function(Ab, Mb, Tb) {
            let Eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const Yb = (0, Pb.i)(),
              eb = (0, Qb.e)(Mb, Yb.moveDeadzone),
              Lb = (0, Bb.h)("sprint");
            Ub = (0, Qb.v)(Ub, {
              sprintPressed: Ab.wasPressed(Lb),
              magnitude: eb.magnitude,
              autoSprint: Yb.autoSprint,
              nowMs: Tb
            }), ab.running = Ub.running, ab.sprintHeld = Ab.isHeld(Lb), ab.x = eb.x, ab.y = eb.y, ab.magnitude = eb.speed, ab.headingOffset = eb.headingOffset, Ua = eb.magnitude > 0;
            const Xb = (0, Bb.h)("jump");
            if (ab.jumpHeld = Ab.isHeld(Xb), ab.jumpPressed = Ab.wasPressed(Xb), ab.jumpPressed && bb.bodies().jumpDown(), Eb) return void bb.move(ab, null);
            const jb = (0, Bb.h)("sneak"),
              Rb = vb.filter({
                sneakHeld: Ab.isHeld(jb),
                sneakPressed: Ab.wasPressed(jb),
                sneakTogglePressed: Ab.wasPressed((0, Bb.h)("sneakToggle"))
              }, Tb);
            bb.move(ab, {
              ...Rb,
              mode: Yb.sneakMode
            })
          },
          Pa = (bb, ab) => {
            const Ub = (0, Bb.h)("chat");
            if ("off" === (0, Pb.i)().quickChat) return void(bb.wasPressed(Ub) && (Lb.c.consumeButton(Ub), Mb.m.IR(Fb.b)));
            const Ab = cb.update(bb.wasPressed(Ub), bb.isHeld(Ub), ab, wb());
            "tap" === Ab || "hold" === Ab && null === (0, jb.b)() ? Mb.m.IR(Fb.b) : "hold" === Ab && (Lb.c.consumeButton(Ub), Mb.m.IR(Zb.o))
          },
          Xa = (ab, Ub) => {
            ((bb, ab) => {
              const Ub = (0, yb.e)(),
                Ab = (0, Bb.h)("emoteWheel");
              if ("wheel" === (0, Pb.i)().emoteButton) return bb.wasPressed(Ab) && (Lb.c.consumeButton(Ab), Mb.m.IR("requestEmoteWheelPadOpen", !0)), (0, yb.e)() !== Ub;
              const Tb = Jb.update(bb.wasPressed(Ab), bb.isHeld(Ab), ab, wb());
              return "tap" === Tb ? Mb.m.IR("requestEmoteRepeatLast") : "hold" === Tb && (Lb.c.consumeButton(Ab), Mb.m.IR("requestEmoteWheelPadOpen", !1)), (0, yb.e)() !== Ub
            })(ab, Ub) || Pa(ab, Ub), ab.wasPressed((0, Bb.h)("inventory")) && (Lb.c.consumeButton((0, Bb.h)("inventory")), (0, Yb.u)(sb(), "inventory", bb.hasFullInventory())), ab.wasPressed((0, Bb.h)("pause")) && (Lb.c.consumeButton((0, Bb.h)("pause")), (0, eb.d)() === Eb.j.SOCIAL ? (0, Yb.q)(sb(), Eb.j.SOCIAL) : (0, Yb.f)(sb())), ab.wasPressed((0, Bb.h)("leaderboard")) && !(0, Tb.h)() && (Lb.c.consumeButton((0, Bb.h)("leaderboard")), ((bb, ab) => {
              if ("shop" === (0, hb.c)()) return Mb.m.IR(Gb.m), void(0, Yb.q)(bb, Eb.j.SHOP, !0);
              (0, Yb.q)(bb, Eb.j.LOBBY_LEADERBOARD, ab)
            })(sb(), bb.hasLobbyLeaderboard()))
          },
          ja = (ab, Ub) => {
            const Ab = bb.bodies();
            ((ab, Ub) => {
              const Ab = (0, Bb.h)("attack"),
                Mb = ab.wasPressed(Ab);
              Mb && !ba.isLatched() && (Wb = bb.targetsBlock()), ba.update(Mb, ab.isHeld(Ab), Ub, "toggle" === (0, Pb.i)().attackMode), ba.isLatched() && Wb ? Vb.update(bb.targetsBlock(), Ub) && ba.unlatch() : Vb.reset(), (0, ob.e)(ba.isLatched())
            })(ab, Ub), aa.update(ab.wasPressed((0, Bb.h)("use")), ab.isHeld((0, Bb.h)("use")), Ub, !1), Ta.update(ab.isHeld((0, Bb.h)("hotbarPrevious")), Ub) && bb.scrollHotbar(-1), Ea.update(ab.isHeld((0, Bb.h)("hotbarNext")), Ub) && bb.scrollHotbar(1), ((ab, Ub, Ab) => {
              const Mb = (0, Bb.h)("perspective"),
                Tb = (0, Bb.h)("pickBlock"),
                Eb = bb.pickBlockAllowed();
              (0, lb.f)(Eb && !Ba && bb.targetsBlock());
              const Yb = () => {
                Ub.pickBlock() && (Ba = !0, (0, lb.f)(!1))
              };
              if (!Eb || Tb !== Mb) return Ya.release(), ab.wasPressed(Mb) && Ub.swapCameraZoom(), void(Eb && ab.wasPressed(Tb) && Yb());
              const eb = Ya.update(ab.wasPressed(Tb), ab.isHeld(Tb), Ab, wb());
              "tap" === eb ? Yb() : "hold" === eb && Ub.swapCameraZoom()
            })(ab, Ab, Ub), ((ab, Ub, Ab) => {
              const Mb = (0, Bb.h)("drop");
              if (ab.wasPressed(Mb)) {
                Ub.dropItem(!1);
                const bb = (0, Pb.i)();
                "off" !== bb.buttonRepeat && (ib = Ab, fb = tb.c[bb.tapHoldTime].dropStackMs, (0, Kb.h)(fb))
              }
              null !== ib && (!ab.isHeld(Mb) || bb.selectedSlotEmpty() ? Nb() : Ab - ib >= fb && (Nb(), Ub.dropItem(!0)))
            })(ab, Ab, Ub), nb.update(Ab, ab, Ub, wb()), Xa(ab, Ub)
          },
          Ra = Lb.c.register({
            name: "gameplay",
            isActive: () => {
              const ab = Ua && "keyboardMouse" === Ab.c.get("activeInputDevice") && !(0, Xb.D)(),
                Ub = (0, Xb.n)() ? [db.c] : [];
              return ((0, Xb.n)() || ab) && (0, Rb.c)(Ub) && bb.hasPlayer()
            },
            onFrame: bb => {
              const ab = performance.now(),
                Ub = (0, Pb.i)(),
                Ab = (0, Qb.w)(bb, (0, Qb.l)(Ub, (0, Bb.h)("pause"), (0, qb.b)().isSupported())),
                Mb = (0, Qb.h)(Ab, Ub.swapSticks);
              return (0, Xb.n)() ? (Aa = !1, (0, Rb.c)() ? (Ma = !1, Ob.update(Mb.look, Ub, Ab.isHeld((0, Bb.h)("use"))), La(Ab, Mb.move, ab), void ja(Ab, ab)) : (Ma || (Ma = !0, vb.lostToPadScreen(), va()), void Pa(Ab, ab))) : (Aa || (ea(), Aa = !0), void La(Ab, Mb.move, ab))
            },
            onDeactivate: bb => {
              (0, Xb.n)() && vb.lostToPadScreen(), va(bb)
            },
            onPeekFrame: ab => {
              (0, Xb.n)() && (0, Rb.c)(db.j) && bb.hasPlayer() ? La(ab, (0, Qb.h)(ab, (0, Pb.i)().swapSticks).move, performance.now(), !0) : va()
            }
          }),
          ka = (0, db.f)(bb),
          ya = (() => {
            const bb = Mb.m.subscribe(Ib.d, (bb => {
              !bb && (0, Xb.n)() && "inGame" === Ab.c.get("gameState") && Mb.m.IR("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              Mb.m.unsubscribe(bb)
            }
          })();
        return () => {
          va(), bb.uninstall(), (0, rb.f)(!1), (0, lb.f)(!1), Mb.m.unsubscribe(zb), Mb.m.unsubscribe(Sb), Ra(), ka(), ya(), Ob.uninstall()
        }
      }
  },
  39687: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => jb,
      f: () => kb,
      j: () => Xb
    });
    var Ab = Ub(1216),
      Mb = Ub(3996),
      Tb = Ub(8352),
      Eb = Ub(36256),
      Yb = Ub(1635),
      Bb = Ub(1125),
      eb = Ub(7793),
      vb = Ub(8272),
      Lb = Ub(8378);
    const Pb = {
        emoteWheel: Tb.e,
        quickChatWheel: vb.c,
        actionWheel: Lb.r
      },
      Xb = Object.keys(Pb),
      jb = "dead",
      Rb = bb => (0, Ab.f)().includes(bb),
      kb = bb => {
        const ab = [(0, eb.h)(jb, (() => bb.hasPlayer() && bb.isPlayerDead())), (0, eb.h)("sleeping", (() => Rb(Eb.g))), (0, eb.h)("turnstile", (() => Rb(Bb.f))), (0, eb.h)("videoAd", Yb.f), (0, eb.h)("replay", (() => (0, Mb.h)() || bb.isReplayMode())), (0, eb.h)("freeCamera", (() => bb.isFreeCameraOn())), ...Object.entries(Pb).map((bb => {
          let [ab, Ub] = bb;
          return (0, eb.h)(ab, Ub)
        }))];
        return () => {
          for (const bb of ab) bb()
        }
      }
  },
  39679: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb,
      e: () => Bb,
      h: () => Yb,
      l: () => vb,
      p: () => Eb,
      s: () => Tb,
      v: () => eb,
      w: () => Lb
    });
    var Ab = Ub(7739);
    class Mb {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(bb, ab, Ub) {
        const Mb = (0, Ab.i)(bb, ab.lookDeadzone);
        if (Math.hypot(Mb.x, Mb.y) < .9 || Math.abs(Mb.x) < Math.abs(Mb.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = Ub);
        const Tb = (Eb = ab.lookSensitivityX, Math.min(1, 100 / Eb));
        var Eb;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (Ub - this.fullTiltSinceMs - 250 * Tb) / (200 * Tb)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const Tb = (bb, ab, Ub, Mb, Tb) => {
        let Eb = 1;
        return "boost" === Ub.lookCurve ? Eb = bb.update(ab, Ub, Tb) : bb.reset(),
          function(bb, ab) {
            let {
              yawBoost: Ub = 1,
              aiming: Mb = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const Tb = (0, Ab.h)((0, Ab.i)(bb, ab.lookDeadzone), ab.lookCurve),
              Eb = 220 * Math.PI / 180,
              Yb = Mb ? ab.aimLookSensitivity / 100 : 1,
              Bb = ab.lookSensitivityX / 100 * Yb,
              eb = ab.lookSensitivityY / 100 * Yb;
            return {
              yawRadPerSec: Tb.x * Eb * Bb * Ub * (ab.invertLookX ? -1 : 1),
              pitchRadPerSec: Tb.y * Eb * .7 * eb * (ab.invertLookY ? -1 : 1)
            }
          }(ab, Ub, {
            yawBoost: Eb,
            aiming: Mb
          })
      },
      Eb = (bb, ab) => {
        const Ub = Math.max(0, Math.min(250, ab)) / 1e3;
        return {
          XN: bb.yawRadPerSec * Ub,
          kN: bb.pitchRadPerSec * Ub
        }
      },
      Yb = (bb, ab) => ab ? {
        move: bb.rightStick,
        look: bb.leftStick
      } : {
        move: bb.leftStick,
        look: bb.rightStick
      },
      Bb = (bb, ab) => {
        const Ub = (0, Ab.i)(bb, ab),
          Mb = Math.min(1, Math.hypot(Ub.x, Ub.y));
        return {
          magnitude: Mb,
          speed: Math.min(1, Mb / .8),
          headingOffset: 0 === Mb ? 0 : Math.atan2(Ub.x, -Ub.y),
          x: Ub.x,
          y: Ub.y
        }
      },
      eb = (bb, ab) => {
        let {
          sprintPressed: Ub,
          magnitude: Ab,
          autoSprint: Mb,
          nowMs: Tb
        } = ab;
        const Eb = Ub ? Tb : bb.latchedAtMs,
          Yb = (bb => {
            let {
              running: ab,
              magnitude: Ub,
              sprintPressed: Ab,
              autoSprint: Mb
            } = bb;
            return !(Ub < .5) && (!!Ab || !!(Mb && Ub >= .9) || ab)
          })({
            running: bb.running,
            magnitude: Ab,
            sprintPressed: Tb - Eb <= 1e3,
            autoSprint: Mb
          });
        return {
          running: Yb,
          latchedAtMs: Yb ? -1 / 0 : Eb
        }
      },
      vb = (bb, ab, Ub) => Ub && bb.gyroAiming && "button" === bb.gyroActivation && bb.gyroButton !== ab ? bb.gyroButton : null,
      Lb = (bb, ab) => ab ? {
        ...bb,
        isHeld: Ub => Ub !== ab && bb.isHeld(Ub),
        wasPressed: Ub => Ub !== ab && bb.wasPressed(Ub),
        wasReleased: Ub => Ub !== ab && bb.wasReleased(Ub),
        value: Ub => Ub === ab ? 0 : bb.value(Ub)
      } : bb
  },
  39695: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb,
      g: () => Ab
    });
    const Ab = bb => {
      let {
        mode: ab,
        sneakHeld: Ub,
        sneakPressed: Ab,
        sneakTogglePressed: Mb,
        descending: Tb,
        canCrouch: Eb,
        toggled: Yb
      } = bb;
      return Eb ? Tb ? {
        crouchHeld: Ub,
        toggled: !1
      } : "hold" === ab ? {
        crouchHeld: Ub,
        toggled: Mb ? !Yb : Yb
      } : {
        crouchHeld: !1,
        toggled: Ab || Mb ? !Yb : Yb
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class Mb {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(bb, ab) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = ab, this.graceEndsMs = ab + 500);
        const Ub = ab < this.graceEndsMs;
        return Ub && (bb.sneakPressed || bb.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, ab + 300))), bb.sneakHeld ? Ub && bb.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: bb.sneakHeld && !this.ignoringHeld,
          sneakPressed: bb.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: bb.sneakTogglePressed && !Ub
        }
      }
    }
  },
  39663: (bb, ab, Ub) => {
    Ub(8423)
  },
  39671: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Db
    });
    var Ab = Ub(22),
      Mb = Ub(8352),
      Tb = Ub(8365),
      Eb = Ub(7750),
      Yb = Ub(7782),
      Bb = Ub(7759),
      eb = Ub(39679),
      vb = Ub(39687),
      Lb = Ub(7793),
      Pb = Ub(7739),
      Xb = Ub(8272),
      jb = Ub(8378);
    const Rb = [{
        isOpen: Mb.i,
        openButton: () => (0, Eb.h)("emoteWheel"),
        aim: bb => {
          Ab.m.IR("emoteWheelPadAim", bb)
        },
        commit: bb => {
          Ab.m.IR("requestEmoteWheelPadCommit", bb)
        },
        close: () => {
          Ab.m.IR("requestEmoteWheelClose")
        }
      }, {
        isOpen: Xb.c,
        openButton: () => (0, Eb.h)("chat"),
        aim: bb => {
          Ab.m.IR(Xb.d, bb)
        },
        commit: bb => {
          Ab.m.IR(Xb.k, bb)
        },
        close: () => {
          Ab.m.IR(Xb.g)
        },
        keptOpenBy: [vb.c]
      }, {
        isOpen: jb.r,
        openButton: () => (0, Eb.h)("actionButton"),
        aim: bb => {
          Ab.m.IR(jb.c, bb)
        },
        commit: bb => {
          Ab.m.IR(jb.h, bb)
        },
        close: () => {
          Ab.m.IR(jb.e)
        }
      }],
      kb = () => {
        var bb;
        return null !== (bb = Rb.find((bb => bb.isOpen()))) && void 0 !== bb ? bb : null
      },
      yb = bb => (0, Eb.M)(bb.openButton()),
      Zb = (bb, ab) => !(0, Pb.D)(bb.frame.values, ab),
      Db = () => {
        let bb = null,
          ab = !1,
          Ub = !1;
        return Yb.c.register({
          name: "wheel",
          isActive: () => null !== kb(),
          peek: () => {
            const bb = kb();
            return bb && yb(bb) ? null : {
              over: "gameplay",
              stick: (0, Bb.i)().swapSticks ? "right" : "left"
            }
          },
          onFrame: Ab => {
            var Mb;
            const Pb = kb();
            if (!Pb) return;
            if (null !== (0, Lb.b)([...vb.j, ...null !== (Mb = Pb.keptOpenBy) && void 0 !== Mb ? Mb : []])) return void Pb.close();
            const Xb = Pb.openButton(),
              jb = (0, eb.h)(Ab.frame, (0, Bb.i)().swapSticks),
              Rb = yb(Pb) ? jb.move : jb.look;
            bb !== Pb ? (bb = Pb, ab = !Zb(Ab, Xb) || Math.hypot(Rb.x, Rb.y) >= Tb.B, Ub = !1) : Ub && (Ub = !1, Zb(Ab, Xb) && (ab = !1)), Pb.aim(Rb);
            const Db = (0, Eb.h)("menuConfirm"),
              zb = (0, Eb.h)("menuBack");
            return Ab.wasPressed(zb) ? (Yb.c.consumeButton(zb), void Pb.close()) : Ab.wasPressed(Db) || Ab.wasPressed(Xb) ? (Yb.c.consumeButton(Db), Yb.c.consumeButton(Xb), void Pb.commit(!1)) : void(ab && Zb(Ab, Xb) && (ab = !1, Pb.commit(!0)))
          },
          onDeactivate: () => {
            Ub = null !== bb && kb() === bb, Ub || (bb = null, ab = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
export const id = 229;
export const ids = [229];
export const modules = {
  37134: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => ep,
      g: () => dp
    });
    var Op = cp(4355),
      op = cp(1476),
      Ip = cp(62),
      Sp = cp(6605),
      xp = cp(4343),
      Lp = cp(1308),
      Yp = cp(1956),
      Dp = cp(1929),
      Ap = cp(1480),
      Pp = cp(1201),
      Wp = cp(37142),
      yp = cp(1049),
      Up = cp.n(yp),
      wp = cp(1334),
      vp = cp(1060),
      tp = cp(1295),
      Hp = cp(1112);
    const dp = "SleepingOverlay";

    function ep() {
      const {
        t: pp
      } = (0, Pp.H)(), [ip, cp] = (0, Ip.useState)(!1), [yp, ep] = (0, Ip.useState)(null), [kp, mp] = (0, Ip.useState)(1), [Rp, qp] = (0, Ip.useState)(!1), [Mp, Cp] = (0, Ip.useState)(!1), Ep = (0, Ip.useRef)(0), Xp = (0, Ip.useRef)(!1), lp = (0, Ip.useRef)(!1), Qp = (0, Ip.useRef)(), Jp = (0, Ip.useRef)(null);

      function Bp() {
        const pp = null !== yp && void 0 !== yp ? yp : "Rested Speed";
        Yp.gameBridge.send("wakeUp", Mp ? pp : null), Jp.current = null, cp(!1), ep(null), mp(1), qp(!1), Cp(!1)
      }

      function Np() {
        return !Rp && (Bp(), !0)
      }
      return (0, op.f)("PlayerPhysicsTypeUpdate", (pp => {
        pp !== Jp.current && (Jp.current = pp, pp === Sp.l.SLEEPING ? (lp.current || (Ep.current = Yp.gameBridge.lookup("cameraZoom", null), lp.current = !0), Xp.current = !0, Yp.gameBridge.send("setCameraZoom", 3), cp(!0), mp(function() {
          for (const pp of Yp.gameBridge.lookup("blocksStandingOn", null)) {
            if (Wp.c.leafBeds.includes(pp)) return console.log(`Found leaf bed: ${pp}`), 1;
            if (Wp.c.woolBeds.includes(pp)) return console.log(`Found woold bed: ${pp}`), 2;
            if (Wp.c.strongBeds.includes(pp)) return console.log(`Found strong bed ${pp}`), 3
          }
          return 1
        }())) : (lp.current = !1, cp(!1), ep(null), mp(1)))
      })), (0, Ip.useEffect)((() => () => {
        (0, Lp.r)(dp)
      }), []), (0, Ip.useEffect)((() => {
        ip ? (0, Lp.s)(dp) : ((0, Lp.r)(dp), Xp.current && (Yp.gameBridge.send("setCameraZoom", Ep.current), Xp.current = !1))
      }), [ip]), (0, tp.x)("overlay", Qp, Np, ip), (0, Hp.jsx)(Op.d, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: ip,
        timeout: 300,
        nodeRef: Qp,
        unmountOnExit: !0,
        children: (0, Hp.jsx)("div", {
          ref: Qp,
          onClick: pp => {
            Np() && pp.stopPropagation()
          },
          children: (0, Hp.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Hp.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: xp.h.map((ip => (0, Hp.jsxs)(jp, {
                restedEffect: ip,
                rL: yp,
                setChosenRestedEffect: ep,
                children: [(0, Hp.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Hp.jsx)(Dp.e, {
                    text: [{
                      icon: ip
                    }]
                  }), xp.f[ip].shortName]
                }), (0, Hp.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: pp(xp.f[ip].description, {
                    time: xp.f[ip].effectLevelDurations[kp] / 6e4
                  })
                })]
              }, ip)))
            }), (0, Hp.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Hp.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Hp.jsxs)(Ap.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: pp => {
                  Mp ? Bp() : (qp(!0), (0, wp.Y)((() => {
                    qp(!1), Cp(!0)
                  }), !0)), pp.stopPropagation()
                },
                loading: Rp,
                children: [!Mp && (0, Hp.jsxs)(Hp.Fragment, {
                  children: [(0, Hp.jsx)(vp.d, {
                    name: "film"
                  }), " ", pp("classicGame:watchAdToGetRestedPerk")]
                }), Mp && pp("classicGame:wakeUp")]
              }), (0, Hp.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Hp.jsx)("div", {
                  className: Up()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === kp
                  }),
                  children: (0, Hp.jsx)(Dp.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Hp.jsx)("div", {
                  className: Up()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === kp
                  }),
                  children: (0, Hp.jsx)(Dp.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Hp.jsx)("div", {
                  className: Up()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === kp
                  }),
                  children: (0, Hp.jsx)(Dp.e, {
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
    const jp = (0, Ip.memo)((function(pp) {
      let {
        children: ip,
        restedEffect: cp,
        rL: Op,
        setChosenRestedEffect: op
      } = pp;
      return cp === Op ? (0, Hp.jsx)(Ap.o, {
        onClick: pp => {
          pp.stopPropagation()
        },
        children: ip
      }) : (0, Hp.jsx)(Ap.j, {
        onClick: pp => {
          op(cp), pp.stopPropagation()
        },
        children: ip
      })
    }))
  },
  40758: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => sp
    });
    var Op = cp(25),
      op = cp(34),
      Ip = cp(4371),
      Sp = cp(322),
      xp = cp(1650),
      Lp = cp(8310),
      Yp = cp(4379),
      Dp = cp(8835),
      Ap = cp(8336),
      Pp = cp(8320),
      Wp = cp(8338),
      yp = cp(1419),
      Up = cp(1698),
      wp = cp(8346),
      vp = cp(8793),
      tp = cp(8919),
      Hp = cp(8843),
      dp = cp(8928),
      ep = cp(1956),
      jp = cp(8298),
      kp = cp(8872),
      mp = cp(8869),
      Rp = cp(8839);
    class qp {
      constructor() {
        this.lostAtMs = null
      }
      update(pp, ip) {
        return pp ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= ip, ip - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class Mp {
      constructor(pp, ip) {
        this.press = pp, this.release = ip, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(pp, ip, cp, Op) {
        if (pp && null === this.downAtMs) return this.downAtMs = cp, this.latched = Op, void(this.token = this.press(Op));
        null !== this.downAtMs && (this.latched ? pp && this.end() : !ip && cp - this.downAtMs >= 40 && this.end())
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
        const pp = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(pp)
      }
    }
    const Cp = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      Ep = pp => {
        let ip = null;
        const cp = new Rp.e,
          Op = () => {
            ip && (((pp, ip, cp) => {
              switch (cp.kind) {
                case "reload":
                  return void ip.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void ip.specialActionUp(cp.action);
                case "customButton":
                  return void ep.gameBridge.send("pressCustomButton", {
                    id: cp.id,
                    down: !1
                  });
                case "touchButton":
                  pp.pressTouchButton(!1)
              }
            })(pp, ip.bodies, ip.action), ip = null)
          },
          Ip = (cp, op, Ip, Sp) => {
            Op(), ip = {
              action: op,
              bodies: cp,
              heldBy: Ip,
              atMs: Sp
            }, ((pp, ip, cp) => {
              switch (cp.kind) {
                case "reload":
                  return ip.reloadGun(), void ip.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void ip.specialActionDown(cp.action);
                case "customButton":
                  return void ep.gameBridge.send("pressCustomButton", {
                    id: cp.id,
                    down: !0
                  });
                case "touchButton":
                  pp.pressTouchButton(!0)
              }
            })(pp, cp, op)
          };
        return {
          update: (Sp, xp, Yp, Dp) => {
            var Pp;
            const Wp = (0, kp.l)(pp.contextActionInputs()),
              yp = null !== (Pp = Wp[0]) && void 0 !== Pp ? Pp : Cp;
            (0, mp.d)((0, kp.g)(yp) ? yp : null);
            const Up = (0, kp.c)(Wp);
            (0, mp.f)(Up);
            const wp = (0, Lp.g)("actionButton");
            if (Up) {
              const pp = cp.update(xp.wasPressed(wp), xp.isHeld(wp), Yp, Dp);
              "tap" === pp ? Ip(Sp, yp, [wp], Yp) : "hold" === pp && (Ap.d.consumeButton(wp), op.m.GA(dp.p, Wp))
            } else cp.release(), xp.wasPressed(wp) && Ip(Sp, yp, [wp], Yp);
            ip && Yp - ip.atMs >= 40 && !ip.heldBy.some((pp => (0, jp.D)(xp.frame.values, pp))) && Op()
          },
          pressPicked: (pp, ip) => {
            Ip(pp, ip, [(0, Lp.g)("menuConfirm"), (0, Lp.g)("actionButton")], performance.now())
          },
          release: () => {
            cp.release(), Op(), (0, mp.d)(null), (0, mp.f)(!1)
          }
        }
      };
    var Xp = cp(8290);
    var lp = cp(40751),
      Qp = cp(8883),
      Jp = cp(8334),
      Bp = cp(8972);
    var Np = cp(40747),
      Tp = cp(8979),
      fp = cp(40763),
      bp = cp(8952),
      hp = cp(8885),
      ap = cp(8887),
      np = cp(8890),
      Fp = cp(8801),
      gp = cp(8858);
    const Gp = () => Fp.e[(0, Pp.h)().tapHoldTime].wheelMs,
      rp = () => ((0, Dp.b)(), (0, gp.b)("controllerMenuKey")),
      Zp = (pp, ip, cp) => new Mp((cp => {
        const Op = pp.bodies();
        return {
          bodies: Op,
          press: ip(Op, cp)
        }
      }), (pp => {
        let {
          bodies: ip,
          press: Op
        } = pp;
        cp(ip, Op)
      })),
      zp = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      sp = pp => {
        const ip = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let cp = zp;
        const Dp = new fp.d,
          ep = op.m.subscribe("appManagerUpdated|activeInputDevice", (ip => {
            pp.deviceChanged(ip)
          }));
        let kp = null,
          mp = 0;
        const Mp = () => {
          kp = null, (0, hp.h)(null)
        };
        let Cp = !1;
        const gp = new qp,
          sp = pp.look,
          Kp = new Rp.e,
          Vp = new Rp.e,
          ii = Ep(pp),
          ci = op.m.subscribe(dp.t, (ip => {
            ii.pressPicked(pp.bodies(), ip)
          })),
          Oi = Zp(pp, ((pp, ip) => pp.primaryFireDown(!ip)), ((pp, ip) => {
            pp.primaryFireUp(ip)
          })),
          oi = Zp(pp, (pp => pp.altFireDown()), ((pp, ip) => {
            pp.altFireUp(ip)
          }));
        let Ii = !1,
          Si = !1,
          xi = !1;
        const Li = (0, vp.e)(jp.R),
          Yi = (0, vp.e)(jp.R),
          Di = new Rp.e;
        let Ai = !1;
        const Pi = () => {
            Li.reset(), Yi.reset(), Di.release(), (0, np.f)(!1), sp.release(), Oi.cancel(), (0, ap.f)(!1), oi.cancel(), ii.release(), Kp.release(), Vp.release(), Mp()
          },
          Wi = function() {
            let Op = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            Pi(), Si = !1, Op || (Ii = !1, cp = zp, Object.assign(ip, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), pp.stopMoving())
          };
        let yi = !1;
        const Ui = function(Op, op, Ip) {
            let Sp = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, yp.f)()) return void(yi || (yi = !0, Ii = !1, pp.stopMoving()));
            yi = !1;
            const xp = (0, Pp.h)(),
              Yp = (0, Np.f)(op, xp.moveDeadzone),
              Ap = (0, Lp.g)("sprint");
            cp = (0, Np.q)(cp, {
              sprintPressed: Op.wasPressed(Ap),
              magnitude: Yp.magnitude,
              autoSprint: xp.autoSprint,
              nowMs: Ip
            }), ip.running = cp.running, ip.sprintHeld = Op.isHeld(Ap), ip.x = Yp.x, ip.y = Yp.y, ip.magnitude = Yp.speed, ip.headingOffset = Yp.headingOffset, Ii = Yp.magnitude > 0;
            const Wp = (0, Lp.g)("jump");
            if (ip.jumpHeld = Op.isHeld(Wp), ip.jumpPressed = Op.wasPressed(Wp), ip.jumpPressed && pp.bodies().jumpDown(), Sp) return void pp.move(ip, null);
            const Up = (0, Lp.g)("sneak"),
              wp = Dp.filter({
                sneakHeld: Op.isHeld(Up),
                sneakPressed: Op.wasPressed(Up),
                sneakTogglePressed: Op.wasPressed((0, Lp.g)("sneakToggle"))
              }, Ip);
            pp.move(ip, {
              ...wp,
              mode: xp.sneakMode
            })
          },
          wi = (pp, ip) => {
            const cp = (0, Lp.g)("chat");
            if ("off" === (0, Pp.h)().quickChat) return void(pp.wasPressed(cp) && (Ap.d.consumeButton(cp), op.m.GA(Qp.d)));
            const Op = Kp.update(pp.wasPressed(cp), pp.isHeld(cp), ip, Gp());
            "tap" === Op || "hold" === Op && null === (0, Up.b)() ? op.m.GA(Qp.d) : "hold" === Op && (Ap.d.consumeButton(cp), op.m.GA(Hp.n))
          },
          vi = (ip, cp) => {
            ((pp, ip) => {
              const cp = (0, tp.c)(),
                Op = (0, Lp.g)("emoteWheel");
              if ("wheel" === (0, Pp.h)().emoteButton) return pp.wasPressed(Op) && (Ap.d.consumeButton(Op), op.m.GA("requestEmoteWheelPadOpen", !0)), (0, tp.c)() !== cp;
              const Ip = Vp.update(pp.wasPressed(Op), pp.isHeld(Op), ip, Gp());
              return "tap" === Ip ? op.m.GA("requestEmoteRepeatLast") : "hold" === Ip && (Ap.d.consumeButton(Op), op.m.GA("requestEmoteWheelPadOpen", !1)), (0, tp.c)() !== cp
            })(ip, cp) || wi(ip, cp), ip.wasPressed((0, Lp.g)("inventory")) && (Ap.d.consumeButton((0, Lp.g)("inventory")), (0, xp.s)(rp(), "inventory", pp.hasFullInventory())), ip.wasPressed((0, Lp.g)("pause")) && (Ap.d.consumeButton((0, Lp.g)("pause")), (0, Yp.d)() === Sp.n.SOCIAL ? (0, xp.q)(rp(), Sp.n.SOCIAL) : (0, xp.h)(rp())), ip.wasPressed((0, Lp.g)("leaderboard")) && !(0, Ip.g)() && (Ap.d.consumeButton((0, Lp.g)("leaderboard")), ((pp, ip) => {
              if ("shop" === (0, Jp.d)()) return op.m.GA(Bp.i), void(0, xp.q)(pp, Sp.n.SHOP, !0);
              (0, xp.q)(pp, Sp.n.LOBBY_LEADERBOARD, ip)
            })(rp(), pp.hasLobbyTab()))
          },
          ti = (ip, cp) => {
            const Op = pp.bodies();
            ((ip, cp) => {
              const Op = (0, Lp.g)("attack"),
                op = ip.wasPressed(Op);
              op && !Oi.isLatched() && (Cp = pp.targetsBlock()), Oi.update(op, ip.isHeld(Op), cp, "toggle" === (0, Pp.h)().attackMode), Oi.isLatched() && Cp ? gp.update(pp.targetsBlock(), cp) && Oi.unlatch() : gp.reset(), (0, ap.f)(Oi.isLatched())
            })(ip, cp), oi.update(ip.wasPressed((0, Lp.g)("use")), ip.isHeld((0, Lp.g)("use")), cp, !1), Li.update(ip.isHeld((0, Lp.g)("hotbarPrevious")), cp) && pp.scrollHotbar(-1), Yi.update(ip.isHeld((0, Lp.g)("hotbarNext")), cp) && pp.scrollHotbar(1), ((ip, cp, Op) => {
              const op = (0, Lp.g)("perspective"),
                Ip = (0, Lp.g)("pickBlock"),
                Sp = pp.pickBlockAllowed();
              (0, np.f)(Sp && !Ai && pp.targetsBlock());
              const xp = () => {
                cp.pickBlock() && (Ai = !0, (0, np.f)(!1))
              };
              if (!Sp || Ip !== op) return Di.release(), ip.wasPressed(op) && cp.swapCameraZoom(), void(Sp && ip.wasPressed(Ip) && xp());
              const Yp = Di.update(ip.wasPressed(Ip), ip.isHeld(Ip), Op, Gp());
              "tap" === Yp ? xp() : "hold" === Yp && cp.swapCameraZoom()
            })(ip, Op, cp), ((ip, cp, Op) => {
              const op = (0, Lp.g)("drop");
              if (ip.wasPressed(op)) {
                cp.dropItem(!1);
                const pp = (0, Pp.h)();
                "off" !== pp.buttonRepeat && (kp = Op, mp = Fp.e[pp.tapHoldTime].dropStackMs, (0, hp.h)(mp))
              }
              null !== kp && (!ip.isHeld(op) || pp.selectedSlotEmpty() ? Mp() : Op - kp >= mp && (Mp(), cp.dropItem(!0)))
            })(ip, Op, cp), ii.update(Op, ip, cp, Gp()), vi(ip, cp)
          },
          Hi = Ap.d.register({
            name: "gameplay",
            isActive: () => {
              const ip = Ii && "keyboardMouse" === Op.c.get("activeInputDevice") && !(0, Wp.N)(),
                cp = (0, Wp.n)() ? [lp.b] : [];
              return ((0, Wp.n)() || ip) && (0, wp.e)(cp) && pp.hasPlayer()
            },
            onFrame: pp => {
              const ip = performance.now(),
                cp = (0, Pp.h)(),
                Op = (0, Np.t)(pp, (0, Np.l)(cp, (0, Lp.g)("pause"), (0, Tp.e)().isSupported())),
                op = (0, Np.h)(Op, cp.swapSticks);
              return (0, Wp.n)() ? (Si = !1, (0, wp.e)() ? (xi = !1, sp.update(op.look, cp, Op.isHeld((0, Lp.g)("use"))), Ui(Op, op.move, ip), void ti(Op, ip)) : (xi || (xi = !0, Dp.lostToPadScreen(), Wi()), void wi(Op, ip))) : (Si || (Pi(), Si = !0), void Ui(Op, op.move, ip))
            },
            onDeactivate: pp => {
              (0, Wp.n)() && Dp.lostToPadScreen(), Wi(pp)
            },
            onPeekFrame: ip => {
              (0, Wp.n)() && (0, wp.e)(lp.i) && pp.hasPlayer() ? Ui(ip, (0, Np.h)(ip, (0, Pp.h)().swapSticks).move, performance.now(), !0) : Wi()
            }
          }),
          di = (0, lp.e)(pp),
          ei = (() => {
            const pp = op.m.subscribe(Xp.c, (pp => {
              !pp && (0, Wp.n)() && "inGame" === Op.c.get("gameState") && op.m.GA("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              op.m.unsubscribe(pp)
            }
          })();
        return () => {
          Wi(), pp.uninstall(), (0, bp.e)(!1), (0, np.f)(!1), op.m.unsubscribe(ep), op.m.unsubscribe(ci), Hi(), di(), ei(), sp.uninstall()
        }
      }
  },
  40751: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => yp,
      e: () => wp,
      i: () => Wp
    });
    var Op = cp(1308),
      op = cp(4371),
      Ip = cp(8900),
      Sp = cp(37134),
      xp = cp(1749),
      Lp = cp(1198),
      Yp = cp(8346),
      Dp = cp(8843),
      Ap = cp(8928);
    const Pp = {
        emoteWheel: Ip.f,
        quickChatWheel: Dp.d,
        actionWheel: Ap.x
      },
      Wp = Object.keys(Pp),
      yp = "dead",
      Up = pp => (0, Op.q)().includes(pp),
      wp = pp => {
        const ip = [(0, Yp.i)(yp, (() => pp.hasPlayer() && pp.isPlayerDead())), (0, Yp.i)("sleeping", (() => Up(Sp.g))), (0, Yp.i)("turnstile", (() => Up(Lp.c))), (0, Yp.i)("videoAd", xp.d), (0, Yp.i)("replay", (() => (0, op.g)() || pp.isReplayMode())), (0, Yp.i)("freeCamera", (() => pp.isFreeCameraOn())), ...Object.entries(Pp).map((pp => {
          let [ip, cp] = pp;
          return (0, Yp.i)(ip, cp)
        }))];
        return () => {
          for (const pp of ip) pp()
        }
      }
  },
  40747: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op,
      f: () => Lp,
      h: () => xp,
      l: () => Dp,
      m: () => Sp,
      o: () => Ip,
      q: () => Yp,
      t: () => Ap
    });
    var Op = cp(8298);
    class op {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(pp, ip, cp) {
        const op = (0, Op.h)(pp, ip.lookDeadzone);
        if (Math.hypot(op.x, op.y) < .9 || Math.abs(op.x) < Math.abs(op.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = cp);
        const Ip = (Sp = ip.lookSensitivityX, Math.min(1, 100 / Sp));
        var Sp;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (cp - this.fullTiltSinceMs - 250 * Ip) / (200 * Ip)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const Ip = (pp, ip, cp, op, Ip) => {
        let Sp = 1;
        return "boost" === cp.lookCurve ? Sp = pp.update(ip, cp, Ip) : pp.reset(),
          function(pp, ip) {
            let {
              yawBoost: cp = 1,
              aiming: op = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const Ip = (0, Op.d)((0, Op.h)(pp, ip.lookDeadzone), ip.lookCurve),
              Sp = 220 * Math.PI / 180,
              xp = op ? ip.aimLookSensitivity / 100 : 1,
              Lp = ip.lookSensitivityX / 100 * xp,
              Yp = ip.lookSensitivityY / 100 * xp;
            return {
              yawRadPerSec: Ip.x * Sp * Lp * cp * (ip.invertLookX ? -1 : 1),
              pitchRadPerSec: Ip.y * Sp * .7 * Yp * (ip.invertLookY ? -1 : 1)
            }
          }(ip, cp, {
            yawBoost: Sp,
            aiming: op
          })
      },
      Sp = (pp, ip) => {
        const cp = Math.max(0, Math.min(250, ip)) / 1e3;
        return {
          QE: pp.yawRadPerSec * cp,
          TE: pp.pitchRadPerSec * cp
        }
      },
      xp = (pp, ip) => ip ? {
        move: pp.rightStick,
        look: pp.leftStick
      } : {
        move: pp.leftStick,
        look: pp.rightStick
      },
      Lp = (pp, ip) => {
        const cp = (0, Op.h)(pp, ip),
          op = Math.min(1, Math.hypot(cp.x, cp.y));
        return {
          magnitude: op,
          speed: Math.min(1, op / .8),
          headingOffset: 0 === op ? 0 : Math.atan2(cp.x, -cp.y),
          x: cp.x,
          y: cp.y
        }
      },
      Yp = (pp, ip) => {
        let {
          sprintPressed: cp,
          magnitude: Op,
          autoSprint: op,
          nowMs: Ip
        } = ip;
        const Sp = cp ? Ip : pp.latchedAtMs,
          xp = (pp => {
            let {
              running: ip,
              magnitude: cp,
              sprintPressed: Op,
              autoSprint: op
            } = pp;
            return !(cp < .5) && (!!Op || !!(op && cp >= .9) || ip)
          })({
            running: pp.running,
            magnitude: Op,
            sprintPressed: Ip - Sp <= 1e3,
            autoSprint: op
          });
        return {
          running: xp,
          latchedAtMs: xp ? -1 / 0 : Sp
        }
      },
      Dp = (pp, ip, cp) => cp && pp.gyroAiming && "button" === pp.gyroActivation && pp.gyroButton !== ip ? pp.gyroButton : null,
      Ap = (pp, ip) => ip ? {
        ...pp,
        isHeld: cp => cp !== ip && pp.isHeld(cp),
        wasPressed: cp => cp !== ip && pp.wasPressed(cp),
        wasReleased: cp => cp !== ip && pp.wasReleased(cp),
        value: cp => cp === ip ? 0 : pp.value(cp)
      } : pp
  },
  40763: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op,
      g: () => Op
    });
    const Op = pp => {
      let {
        mode: ip,
        sneakHeld: cp,
        sneakPressed: Op,
        sneakTogglePressed: op,
        descending: Ip,
        canCrouch: Sp,
        toggled: xp
      } = pp;
      return Sp ? Ip ? {
        crouchHeld: cp,
        toggled: !1
      } : "hold" === ip ? {
        crouchHeld: cp,
        toggled: op ? !xp : xp
      } : {
        crouchHeld: !1,
        toggled: Op || op ? !xp : xp
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class op {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(pp, ip) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = ip, this.graceEndsMs = ip + 500);
        const cp = ip < this.graceEndsMs;
        return cp && (pp.sneakPressed || pp.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, ip + 300))), pp.sneakHeld ? cp && pp.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: pp.sneakHeld && !this.ignoringHeld,
          sneakPressed: pp.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: pp.sneakTogglePressed && !cp
        }
      }
    }
  },
  40736: (pp, ip, cp) => {
    cp(8979)
  },
  40739: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Hp
    });
    var Op = cp(34),
      op = cp(8900),
      Ip = cp(8917),
      Sp = cp(8310),
      xp = cp(8336),
      Lp = cp(8320),
      Yp = cp(40747),
      Dp = cp(40751),
      Ap = cp(8346),
      Pp = cp(8298),
      Wp = cp(8843),
      yp = cp(8928);
    const Up = [{
        isOpen: op.h,
        openButton: () => (0, Sp.g)("emoteWheel"),
        aim: pp => {
          Op.m.GA("emoteWheelPadAim", pp)
        },
        commit: pp => {
          Op.m.GA("requestEmoteWheelPadCommit", pp)
        },
        close: () => {
          Op.m.GA("requestEmoteWheelClose")
        }
      }, {
        isOpen: Wp.d,
        openButton: () => (0, Sp.g)("chat"),
        aim: pp => {
          Op.m.GA(Wp.h, pp)
        },
        commit: pp => {
          Op.m.GA(Wp.m, pp)
        },
        close: () => {
          Op.m.GA(Wp.l)
        },
        keptOpenBy: [Dp.b]
      }, {
        isOpen: yp.x,
        openButton: () => (0, Sp.g)("actionButton"),
        aim: pp => {
          Op.m.GA(yp.e, pp)
        },
        commit: pp => {
          Op.m.GA(yp.l, pp)
        },
        close: () => {
          Op.m.GA(yp.i)
        }
      }],
      wp = () => {
        var pp;
        return null !== (pp = Up.find((pp => pp.isOpen()))) && void 0 !== pp ? pp : null
      },
      vp = pp => (0, Sp.K)(pp.openButton()),
      tp = (pp, ip) => !(0, Pp.D)(pp.frame.values, ip),
      Hp = () => {
        let pp = null,
          ip = !1,
          cp = !1;
        return xp.d.register({
          name: "wheel",
          isActive: () => null !== wp(),
          peek: () => {
            const pp = wp();
            return pp && vp(pp) ? null : {
              over: "gameplay",
              stick: (0, Lp.h)().swapSticks ? "right" : "left"
            }
          },
          onFrame: Op => {
            var op;
            const Pp = wp();
            if (!Pp) return;
            if (null !== (0, Ap.d)([...Dp.i, ...null !== (op = Pp.keptOpenBy) && void 0 !== op ? op : []])) return void Pp.close();
            const Wp = Pp.openButton(),
              yp = (0, Yp.h)(Op.frame, (0, Lp.h)().swapSticks),
              Up = vp(Pp) ? yp.move : yp.look;
            pp !== Pp ? (pp = Pp, ip = !tp(Op, Wp) || Math.hypot(Up.x, Up.y) >= Ip.z, cp = !1) : cp && (cp = !1, tp(Op, Wp) && (ip = !1)), Pp.aim(Up);
            const Hp = (0, Sp.g)("menuConfirm"),
              dp = (0, Sp.g)("menuBack");
            return Op.wasPressed(dp) ? (xp.d.consumeButton(dp), void Pp.close()) : Op.wasPressed(Hp) || Op.wasPressed(Wp) ? (xp.d.consumeButton(Hp), xp.d.consumeButton(Wp), void Pp.commit(!1)) : void(ip && tp(Op, Wp) && (ip = !1, Pp.commit(!0)))
          },
          onDeactivate: () => {
            cp = null !== pp && wp() === pp, cp || (pp = null, ip = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);
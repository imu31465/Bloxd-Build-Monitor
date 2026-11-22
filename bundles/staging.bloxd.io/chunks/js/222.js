export const id = 222;
export const ids = [222];
export const modules = {
  36523: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Lk,
      e: () => Yk
    });
    var Dk = ik(4210),
      fk = ik(1406),
      Sk = ik(60),
      bk = ik(6328),
      rk = ik(4197),
      Pk = ik(1273),
      mk = ik(1893),
      Mk = ik(1858),
      Kk = ik(1410),
      xk = ik(1172),
      nk = ik(36528),
      Uk = ik(1021),
      Hk = ik.n(Uk),
      wk = ik(1291),
      lk = ik(1033),
      pk = ik(1261),
      yk = ik(1066);
    const Yk = "SleepingOverlay";

    function Lk() {
      const {
        t: kk
      } = (0, xk.D)(), [ek, ik] = (0, Sk.useState)(!1), [Uk, Lk] = (0, Sk.useState)(null), [Ak, jk] = (0, Sk.useState)(1), [sk, dk] = (0, Sk.useState)(!1), [Vk, Fk] = (0, Sk.useState)(!1), uk = (0, Sk.useRef)(0), qk = (0, Sk.useRef)(!1), Ik = (0, Sk.useRef)(!1), zk = (0, Sk.useRef)(), Qk = (0, Sk.useRef)(null);

      function vk() {
        const kk = null !== Uk && void 0 !== Uk ? Uk : "Rested Speed";
        mk.gameBridge.send("wakeUp", Vk ? kk : null), Qk.current = null, ik(!1), Lk(null), jk(1), dk(!1), Fk(!1)
      }

      function Ek() {
        return !sk && (vk(), !0)
      }
      return (0, fk.c)("PlayerPhysicsTypeUpdate", (kk => {
        kk !== Qk.current && (Qk.current = kk, kk === bk.o.SLEEPING ? (Ik.current || (uk.current = mk.gameBridge.lookup("cameraZoom", null), Ik.current = !0), qk.current = !0, mk.gameBridge.send("setCameraZoom", 3), ik(!0), jk(function() {
          for (const kk of mk.gameBridge.lookup("blocksStandingOn", null)) {
            if (nk.e.leafBeds.includes(kk)) return console.log(`Found leaf bed: ${kk}`), 1;
            if (nk.e.woolBeds.includes(kk)) return console.log(`Found woold bed: ${kk}`), 2;
            if (nk.e.strongBeds.includes(kk)) return console.log(`Found strong bed ${kk}`), 3
          }
          return 1
        }())) : (Ik.current = !1, ik(!1), Lk(null), jk(1)))
      })), (0, Sk.useEffect)((() => () => {
        (0, Pk.p)(Yk)
      }), []), (0, Sk.useEffect)((() => {
        ek ? (0, Pk.s)(Yk) : ((0, Pk.p)(Yk), qk.current && (mk.gameBridge.send("setCameraZoom", uk.current), qk.current = !1))
      }), [ek]), (0, pk.u)("overlay", zk, Ek, ek), (0, yk.jsx)(Dk.d, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: ek,
        timeout: 300,
        nodeRef: zk,
        unmountOnExit: !0,
        children: (0, yk.jsx)("div", {
          ref: zk,
          onClick: kk => {
            Ek() && kk.stopPropagation()
          },
          children: (0, yk.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, yk.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: rk.f.map((ek => (0, yk.jsxs)(Ck, {
                restedEffect: ek,
                SP: Uk,
                setChosenRestedEffect: Lk,
                children: [(0, yk.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, yk.jsx)(Mk.e, {
                    text: [{
                      icon: ek
                    }]
                  }), rk.e[ek].shortName]
                }), (0, yk.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: kk(rk.e[ek].description, {
                    time: rk.e[ek].effectLevelDurations[Ak] / 6e4
                  })
                })]
              }, ek)))
            }), (0, yk.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, yk.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, yk.jsxs)(Kk.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: kk => {
                  Vk ? vk() : (dk(!0), (0, wk.X)((() => {
                    dk(!1), Fk(!0)
                  }), !0)), kk.stopPropagation()
                },
                loading: sk,
                children: [!Vk && (0, yk.jsxs)(yk.Fragment, {
                  children: [(0, yk.jsx)(lk.d, {
                    name: "film"
                  }), " ", kk("classicGame:watchAdToGetRestedPerk")]
                }), Vk && kk("classicGame:wakeUp")]
              }), (0, yk.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, yk.jsx)("div", {
                  className: Hk()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === Ak
                  }),
                  children: (0, yk.jsx)(Mk.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, yk.jsx)("div", {
                  className: Hk()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === Ak
                  }),
                  children: (0, yk.jsx)(Mk.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, yk.jsx)("div", {
                  className: Hk()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === Ak
                  }),
                  children: (0, yk.jsx)(Mk.e, {
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
    const Ck = (0, Sk.memo)((function(kk) {
      let {
        children: ek,
        restedEffect: ik,
        SP: Dk,
        setChosenRestedEffect: fk
      } = kk;
      return ik === Dk ? (0, yk.jsx)(Kk.r, {
        onClick: kk => {
          kk.stopPropagation()
        },
        children: ek
      }) : (0, yk.jsx)(Kk.j, {
        onClick: kk => {
          fk(ik), kk.stopPropagation()
        },
        children: ek
      })
    }))
  },
  40145: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => gk
    });
    var Dk = ik(22),
      fk = ik(26),
      Sk = ik(4239),
      bk = ik(302),
      rk = ik(1614),
      Pk = ik(7994),
      mk = ik(4253),
      Mk = ik(8547),
      Kk = ik(8024),
      xk = ik(8006),
      nk = ik(8031),
      Uk = ik(1650),
      Hk = ik(8034),
      wk = ik(8497),
      lk = ik(8645),
      pk = ik(8556),
      yk = ik(8647),
      Yk = ik(1893),
      Lk = ik(7984),
      Ck = ik(8576),
      Ak = ik(8570),
      jk = ik(8552);
    class sk {
      constructor() {
        this.lostAtMs = null
      }
      update(kk, ek) {
        return kk ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= ek, ek - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class dk {
      constructor(kk, ek) {
        this.press = kk, this.release = ek, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(kk, ek, ik, Dk) {
        if (kk && null === this.downAtMs) return this.downAtMs = ik, this.latched = Dk, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? kk && this.end() : !ek && ik - this.downAtMs >= 40 && this.end())
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
        const kk = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(kk)
      }
    }
    const Vk = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      Fk = kk => {
        let ek = null;
        const ik = new jk.d,
          Dk = () => {
            ek && (((kk, ek, ik) => {
              switch (ik.kind) {
                case "reload":
                  return void ek.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void ek.specialActionUp(ik.action);
                case "customButton":
                  return void Yk.gameBridge.send("pressCustomButton", {
                    id: ik.id,
                    down: !1
                  });
                case "touchButton":
                  kk.pressTouchButton(!1)
              }
            })(kk, ek.bodies, ek.action), ek = null)
          },
          Sk = (ik, fk, Sk, bk) => {
            Dk(), ek = {
              action: fk,
              bodies: ik,
              heldBy: Sk,
              atMs: bk
            }, ((kk, ek, ik) => {
              switch (ik.kind) {
                case "reload":
                  return ek.reloadGun(), void ek.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void ek.specialActionDown(ik.action);
                case "customButton":
                  return void Yk.gameBridge.send("pressCustomButton", {
                    id: ik.id,
                    down: !0
                  });
                case "touchButton":
                  kk.pressTouchButton(!0)
              }
            })(kk, ik, fk)
          };
        return {
          update: (bk, rk, mk, Mk) => {
            var xk;
            const nk = (0, Ck.l)(kk.contextActionInputs()),
              Uk = null !== (xk = nk[0]) && void 0 !== xk ? xk : Vk;
            (0, Ak.c)((0, Ck.d)(Uk) ? Uk : null);
            const Hk = (0, Ck.b)(nk);
            (0, Ak.e)(Hk);
            const wk = (0, Pk.i)("actionButton");
            if (Hk) {
              const kk = ik.update(rk.wasPressed(wk), rk.isHeld(wk), mk, Mk);
              "tap" === kk ? Sk(bk, Uk, [wk], mk) : "hold" === kk && (Kk.c.consumeButton(wk), fk.j.tm(yk.n, nk))
            } else ik.release(), rk.wasPressed(wk) && Sk(bk, Uk, [wk], mk);
            ek && mk - ek.atMs >= 40 && !ek.heldBy.some((kk => (0, Lk.J)(rk.frame.values, kk))) && Dk()
          },
          pressPicked: (kk, ek) => {
            Sk(kk, ek, [(0, Pk.i)("menuConfirm"), (0, Pk.i)("actionButton")], performance.now())
          },
          release: () => {
            ik.release(), Dk(), (0, Ak.c)(null), (0, Ak.e)(!1)
          }
        }
      };
    var uk = ik(7975);
    var qk = ik(40138),
      Ik = ik(8588),
      zk = ik(8019),
      Qk = ik(8680);
    var vk = ik(40133),
      Ek = ik(8683),
      hk = ik(40152),
      ak = ik(8665),
      Wk = ik(8594),
      tk = ik(8596),
      Xk = ik(8601),
      Bk = ik(8503);
    const ck = () => Bk.b[(0, xk.h)().tapHoldTime].wheelMs,
      Tk = () => ((0, Mk.b)(), new Event("controllerMenuKey")),
      Zk = (kk, ek, ik) => new dk((() => {
        const ik = kk.bodies();
        return {
          bodies: ik,
          press: ek(ik)
        }
      }), (kk => {
        let {
          bodies: ek,
          press: Dk
        } = kk;
        ik(ek, Dk)
      })),
      Ok = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      gk = kk => {
        const ek = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let ik = Ok;
        const Mk = new hk.b,
          Yk = fk.j.subscribe("appManagerUpdated|activeInputDevice", (ek => {
            kk.deviceChanged(ek)
          }));
        let Ck = null,
          Ak = 0;
        const dk = () => {
          Ck = null, (0, Wk.g)(null)
        };
        let Vk = !1;
        const gk = new sk,
          Gk = kk.look,
          Nk = new jk.d,
          Rk = new jk.d,
          Jk = Fk(kk),
          ke = fk.j.subscribe(yk.o, (ek => {
            Jk.pressPicked(kk.bodies(), ek)
          })),
          ee = Zk(kk, (kk => kk.primaryFireDown()), ((kk, ek) => {
            kk.primaryFireUp(ek)
          })),
          ie = Zk(kk, (kk => kk.altFireDown()), ((kk, ek) => {
            kk.altFireUp(ek)
          }));
        let De = !1,
          fe = !1,
          Se = !1;
        const be = (0, wk.c)(Lk.Y),
          re = (0, wk.c)(Lk.Y),
          Pe = new jk.d;
        let me = !1;
        const Me = () => {
            be.reset(), re.reset(), Pe.release(), (0, Xk.i)(!1), Gk.release(), ee.cancel(), (0, tk.d)(!1), ie.cancel(), Jk.release(), Nk.release(), Rk.release(), dk()
          },
          Ke = function() {
            let Dk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            Me(), fe = !1, Dk || (De = !1, ik = Ok, Object.assign(ek, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), kk.stopMoving())
          },
          xe = function(Dk, fk, Sk) {
            let bk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const rk = (0, xk.h)(),
              mk = (0, vk.e)(fk, rk.moveDeadzone),
              Kk = (0, Pk.i)("sprint");
            ik = (0, vk.t)(ik, {
              sprintPressed: Dk.wasPressed(Kk),
              magnitude: mk.magnitude,
              autoSprint: rk.autoSprint,
              nowMs: Sk
            }), ek.running = ik.running, ek.sprintHeld = Dk.isHeld(Kk), ek.x = mk.x, ek.y = mk.y, ek.magnitude = mk.speed, ek.headingOffset = mk.headingOffset, De = mk.magnitude > 0;
            const nk = (0, Pk.i)("jump");
            if (ek.jumpHeld = Dk.isHeld(nk), ek.jumpPressed = Dk.wasPressed(nk), ek.jumpPressed && kk.bodies().jumpDown(), bk) return void kk.move(ek, null);
            const Uk = (0, Pk.i)("sneak"),
              Hk = Mk.filter({
                sneakHeld: Dk.isHeld(Uk),
                sneakPressed: Dk.wasPressed(Uk),
                sneakTogglePressed: Dk.wasPressed((0, Pk.i)("sneakToggle"))
              }, Sk);
            kk.move(ek, {
              ...Hk,
              mode: rk.sneakMode
            })
          },
          ne = (kk, ek) => {
            const ik = (0, Pk.i)("chat");
            if ("off" === (0, xk.h)().quickChat) return void(kk.wasPressed(ik) && (Kk.c.consumeButton(ik), fk.j.tm(Ik.d)));
            const Dk = Nk.update(kk.wasPressed(ik), kk.isHeld(ik), ek, ck());
            "tap" === Dk || "hold" === Dk && null === (0, Uk.e)() ? fk.j.tm(Ik.d) : "hold" === Dk && (Kk.c.consumeButton(ik), fk.j.tm(pk.l))
          },
          Ue = (ek, ik) => {
            ((kk, ek) => {
              const ik = (0, lk.c)(),
                Dk = (0, Pk.i)("emoteWheel");
              if ("wheel" === (0, xk.h)().emoteButton) return kk.wasPressed(Dk) && (Kk.c.consumeButton(Dk), fk.j.tm("requestEmoteWheelPadOpen", !0)), (0, lk.c)() !== ik;
              const Sk = Rk.update(kk.wasPressed(Dk), kk.isHeld(Dk), ek, ck());
              return "tap" === Sk ? fk.j.tm("requestEmoteRepeatLast") : "hold" === Sk && (Kk.c.consumeButton(Dk), fk.j.tm("requestEmoteWheelPadOpen", !1)), (0, lk.c)() !== ik
            })(ek, ik) || ne(ek, ik), ek.wasPressed((0, Pk.i)("inventory")) && (Kk.c.consumeButton((0, Pk.i)("inventory")), (0, rk.D)(Tk(), "inventory", kk.hasFullInventory())), ek.wasPressed((0, Pk.i)("pause")) && (Kk.c.consumeButton((0, Pk.i)("pause")), (0, mk.c)() === bk.r.SOCIAL ? (0, rk.A)(Tk(), bk.r.SOCIAL) : (0, rk.k)(Tk())), ek.wasPressed((0, Pk.i)("leaderboard")) && !(0, Sk.g)() && (Kk.c.consumeButton((0, Pk.i)("leaderboard")), ((kk, ek) => {
              if ("shop" === (0, zk.c)()) return fk.j.tm(Qk.k), void(0, rk.A)(kk, bk.r.SHOP, !0);
              (0, rk.A)(kk, bk.r.LOBBY_LEADERBOARD, ek)
            })(Tk(), kk.hasLobbyTab()))
          },
          He = (ek, ik) => {
            const Dk = kk.bodies();
            ((ek, ik) => {
              const Dk = (0, Pk.i)("attack"),
                fk = ek.wasPressed(Dk);
              fk && !ee.isLatched() && (Vk = kk.targetsBlock()), ee.update(fk, ek.isHeld(Dk), ik, "toggle" === (0, xk.h)().attackMode), ee.isLatched() && Vk ? gk.update(kk.targetsBlock(), ik) && ee.unlatch() : gk.reset(), (0, tk.d)(ee.isLatched())
            })(ek, ik), ie.update(ek.wasPressed((0, Pk.i)("use")), ek.isHeld((0, Pk.i)("use")), ik, !1), be.update(ek.isHeld((0, Pk.i)("hotbarPrevious")), ik) && kk.scrollHotbar(-1), re.update(ek.isHeld((0, Pk.i)("hotbarNext")), ik) && kk.scrollHotbar(1), ((ek, ik, Dk) => {
              const fk = (0, Pk.i)("perspective"),
                Sk = (0, Pk.i)("pickBlock"),
                bk = kk.pickBlockAllowed();
              (0, Xk.i)(bk && !me && kk.targetsBlock());
              const rk = () => {
                ik.pickBlock() && (me = !0, (0, Xk.i)(!1))
              };
              if (!bk || Sk !== fk) return Pe.release(), ek.wasPressed(fk) && ik.swapCameraZoom(), void(bk && ek.wasPressed(Sk) && rk());
              const mk = Pe.update(ek.wasPressed(Sk), ek.isHeld(Sk), Dk, ck());
              "tap" === mk ? rk() : "hold" === mk && ik.swapCameraZoom()
            })(ek, Dk, ik), ((ek, ik, Dk) => {
              const fk = (0, Pk.i)("drop");
              if (ek.wasPressed(fk)) {
                ik.dropItem(!1);
                const kk = (0, xk.h)();
                "off" !== kk.buttonRepeat && (Ck = Dk, Ak = Bk.b[kk.tapHoldTime].dropStackMs, (0, Wk.g)(Ak))
              }
              null !== Ck && (!ek.isHeld(fk) || kk.selectedSlotEmpty() ? dk() : Dk - Ck >= Ak && (dk(), ik.dropItem(!0)))
            })(ek, Dk, ik), Jk.update(Dk, ek, ik, ck()), Ue(ek, ik)
          },
          we = Kk.c.register({
            name: "gameplay",
            isActive: () => {
              const ek = De && "keyboardMouse" === Dk.b.get("activeInputDevice") && !(0, nk.L)(),
                ik = (0, nk.j)() ? [qk.d] : [];
              return ((0, nk.j)() || ek) && (0, Hk.e)(ik) && kk.hasPlayer()
            },
            onFrame: kk => {
              const ek = performance.now(),
                ik = (0, xk.h)(),
                Dk = (0, vk.x)(kk, (0, vk.m)(ik, (0, Pk.i)("pause"), (0, Ek.c)().isSupported())),
                fk = (0, vk.i)(Dk, ik.swapSticks);
              return (0, nk.j)() ? (fe = !1, (0, Hk.e)() ? (Se = !1, Gk.update(fk.look, ik, Dk.isHeld((0, Pk.i)("use"))), xe(Dk, fk.move, ek), void He(Dk, ek)) : (Se || (Se = !0, Mk.lostToPadScreen(), Ke()), void ne(Dk, ek))) : (fe || (Me(), fe = !0), void xe(Dk, fk.move, ek))
            },
            onDeactivate: kk => {
              (0, nk.j)() && Mk.lostToPadScreen(), Ke(kk)
            },
            onPeekFrame: ek => {
              (0, nk.j)() && (0, Hk.e)(qk.i) && kk.hasPlayer() ? xe(ek, (0, vk.i)(ek, (0, xk.h)().swapSticks).move, performance.now(), !0) : Ke()
            }
          }),
          le = (0, qk.e)(kk),
          pe = (() => {
            const kk = fk.j.subscribe(uk.d, (kk => {
              !kk && (0, nk.j)() && "inGame" === Dk.b.get("gameState") && fk.j.tm("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              fk.j.unsubscribe(kk)
            }
          })();
        return () => {
          Ke(), kk.uninstall(), (0, ak.c)(!1), (0, Xk.i)(!1), fk.j.unsubscribe(Yk), fk.j.unsubscribe(ke), we(), le(), pe(), Gk.uninstall()
        }
      }
  },
  40138: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Uk,
      e: () => wk,
      i: () => nk
    });
    var Dk = ik(1273),
      fk = ik(4239),
      Sk = ik(8624),
      bk = ik(36523),
      rk = ik(1684),
      Pk = ik(1167),
      mk = ik(8034),
      Mk = ik(8556),
      Kk = ik(8647);
    const xk = {
        emoteWheel: Sk.f,
        quickChatWheel: Mk.b,
        actionWheel: Kk.q
      },
      nk = Object.keys(xk),
      Uk = "dead",
      Hk = kk => (0, Dk.l)().includes(kk),
      wk = kk => {
        const ek = [(0, mk.j)(Uk, (() => kk.hasPlayer() && kk.isPlayerDead())), (0, mk.j)("sleeping", (() => Hk(bk.e))), (0, mk.j)("turnstile", (() => Hk(Pk.g))), (0, mk.j)("videoAd", rk.c), (0, mk.j)("replay", (() => (0, fk.g)() || kk.isReplayMode())), (0, mk.j)("freeCamera", (() => kk.isFreeCameraOn())), ...Object.entries(xk).map((kk => {
          let [ek, ik] = kk;
          return (0, mk.j)(ek, ik)
        }))];
        return () => {
          for (const kk of ek) kk()
        }
      }
  },
  40133: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk,
      e: () => Pk,
      i: () => rk,
      m: () => Mk,
      p: () => bk,
      r: () => Sk,
      t: () => mk,
      x: () => Kk
    });
    var Dk = ik(7984);
    class fk {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(kk, ek, ik) {
        const fk = (0, Dk.j)(kk, ek.lookDeadzone);
        if (Math.hypot(fk.x, fk.y) < .9 || Math.abs(fk.x) < Math.abs(fk.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = ik);
        const Sk = (bk = ek.lookSensitivityX, Math.min(1, 100 / bk));
        var bk;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (ik - this.fullTiltSinceMs - 250 * Sk) / (200 * Sk)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const Sk = (kk, ek, ik, fk, Sk) => {
        let bk = 1;
        return "boost" === ik.lookCurve ? bk = kk.update(ek, ik, Sk) : kk.reset(),
          function(kk, ek) {
            let {
              yawBoost: ik = 1,
              aiming: fk = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const Sk = (0, Dk.h)((0, Dk.j)(kk, ek.lookDeadzone), ek.lookCurve),
              bk = 220 * Math.PI / 180,
              rk = fk ? ek.aimLookSensitivity / 100 : 1,
              Pk = ek.lookSensitivityX / 100 * rk,
              mk = ek.lookSensitivityY / 100 * rk;
            return {
              yawRadPerSec: Sk.x * bk * Pk * ik * (ek.invertLookX ? -1 : 1),
              pitchRadPerSec: Sk.y * bk * .7 * mk * (ek.invertLookY ? -1 : 1)
            }
          }(ek, ik, {
            yawBoost: bk,
            aiming: fk
          })
      },
      bk = (kk, ek) => {
        const ik = Math.max(0, Math.min(250, ek)) / 1e3;
        return {
          SF: kk.yawRadPerSec * ik,
          mF: kk.pitchRadPerSec * ik
        }
      },
      rk = (kk, ek) => ek ? {
        move: kk.rightStick,
        look: kk.leftStick
      } : {
        move: kk.leftStick,
        look: kk.rightStick
      },
      Pk = (kk, ek) => {
        const ik = (0, Dk.j)(kk, ek),
          fk = Math.min(1, Math.hypot(ik.x, ik.y));
        return {
          magnitude: fk,
          speed: Math.min(1, fk / .8),
          headingOffset: 0 === fk ? 0 : Math.atan2(ik.x, -ik.y),
          x: ik.x,
          y: ik.y
        }
      },
      mk = (kk, ek) => {
        let {
          sprintPressed: ik,
          magnitude: Dk,
          autoSprint: fk,
          nowMs: Sk
        } = ek;
        const bk = ik ? Sk : kk.latchedAtMs,
          rk = (kk => {
            let {
              running: ek,
              magnitude: ik,
              sprintPressed: Dk,
              autoSprint: fk
            } = kk;
            return !(ik < .5) && (!!Dk || !!(fk && ik >= .9) || ek)
          })({
            running: kk.running,
            magnitude: Dk,
            sprintPressed: Sk - bk <= 1e3,
            autoSprint: fk
          });
        return {
          running: rk,
          latchedAtMs: rk ? -1 / 0 : bk
        }
      },
      Mk = (kk, ek, ik) => ik && kk.gyroAiming && "button" === kk.gyroActivation && kk.gyroButton !== ek ? kk.gyroButton : null,
      Kk = (kk, ek) => ek ? {
        ...kk,
        isHeld: ik => ik !== ek && kk.isHeld(ik),
        wasPressed: ik => ik !== ek && kk.wasPressed(ik),
        wasReleased: ik => ik !== ek && kk.wasReleased(ik),
        value: ik => ik === ek ? 0 : kk.value(ik)
      } : kk
  },
  40152: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk,
      e: () => Dk
    });
    const Dk = kk => {
      let {
        mode: ek,
        sneakHeld: ik,
        sneakPressed: Dk,
        sneakTogglePressed: fk,
        descending: Sk,
        canCrouch: bk,
        toggled: rk
      } = kk;
      return bk ? Sk ? {
        crouchHeld: ik,
        toggled: !1
      } : "hold" === ek ? {
        crouchHeld: ik,
        toggled: fk ? !rk : rk
      } : {
        crouchHeld: !1,
        toggled: Dk || fk ? !rk : rk
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class fk {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(kk, ek) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = ek, this.graceEndsMs = ek + 500);
        const ik = ek < this.graceEndsMs;
        return ik && (kk.sneakPressed || kk.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, ek + 300))), kk.sneakHeld ? ik && kk.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: kk.sneakHeld && !this.ignoringHeld,
          sneakPressed: kk.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: kk.sneakTogglePressed && !ik
        }
      }
    }
  },
  40123: (kk, ek, ik) => {
    ik(8683)
  },
  40130: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => yk
    });
    var Dk = ik(26),
      fk = ik(8624),
      Sk = ik(8637),
      bk = ik(7994),
      rk = ik(8024),
      Pk = ik(8006),
      mk = ik(40133),
      Mk = ik(40138),
      Kk = ik(8034),
      xk = ik(7984),
      nk = ik(8556),
      Uk = ik(8647);
    const Hk = [{
        isOpen: fk.j,
        openButton: () => (0, bk.i)("emoteWheel"),
        aim: kk => {
          Dk.j.tm("emoteWheelPadAim", kk)
        },
        commit: kk => {
          Dk.j.tm("requestEmoteWheelPadCommit", kk)
        },
        close: () => {
          Dk.j.tm("requestEmoteWheelClose")
        }
      }, {
        isOpen: nk.b,
        openButton: () => (0, bk.i)("chat"),
        aim: kk => {
          Dk.j.tm(nk.f, kk)
        },
        commit: kk => {
          Dk.j.tm(nk.h, kk)
        },
        close: () => {
          Dk.j.tm(nk.g)
        },
        keptOpenBy: [Mk.d]
      }, {
        isOpen: Uk.q,
        openButton: () => (0, bk.i)("actionButton"),
        aim: kk => {
          Dk.j.tm(Uk.c, kk)
        },
        commit: kk => {
          Dk.j.tm(Uk.k, kk)
        },
        close: () => {
          Dk.j.tm(Uk.g)
        }
      }],
      wk = () => {
        var kk;
        return null !== (kk = Hk.find((kk => kk.isOpen()))) && void 0 !== kk ? kk : null
      },
      lk = kk => (0, bk.K)(kk.openButton()),
      pk = (kk, ek) => !(0, xk.J)(kk.frame.values, ek),
      yk = () => {
        let kk = null,
          ek = !1,
          ik = !1;
        return rk.c.register({
          name: "wheel",
          isActive: () => null !== wk(),
          peek: () => {
            const kk = wk();
            return kk && lk(kk) ? null : {
              over: "gameplay",
              stick: (0, Pk.h)().swapSticks ? "right" : "left"
            }
          },
          onFrame: Dk => {
            var fk;
            const xk = wk();
            if (!xk) return;
            if (null !== (0, Kk.c)([...Mk.i, ...null !== (fk = xk.keptOpenBy) && void 0 !== fk ? fk : []])) return void xk.close();
            const nk = xk.openButton(),
              Uk = (0, mk.i)(Dk.frame, (0, Pk.h)().swapSticks),
              Hk = lk(xk) ? Uk.move : Uk.look;
            kk !== xk ? (kk = xk, ek = !pk(Dk, nk) || Math.hypot(Hk.x, Hk.y) >= Sk.y, ik = !1) : ik && (ik = !1, pk(Dk, nk) && (ek = !1)), xk.aim(Hk);
            const yk = (0, bk.i)("menuConfirm"),
              Yk = (0, bk.i)("menuBack");
            return Dk.wasPressed(Yk) ? (rk.c.consumeButton(Yk), void xk.close()) : Dk.wasPressed(yk) || Dk.wasPressed(nk) ? (rk.c.consumeButton(yk), rk.c.consumeButton(nk), void xk.commit(!1)) : void(ek && pk(Dk, nk) && (ek = !1, xk.commit(!0)))
          },
          onDeactivate: () => {
            ik = null !== kk && wk() === kk, ik || (kk = null, ek = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
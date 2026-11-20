export const id = 217;
export const ids = [217];
export const modules = {
  36597: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Yk,
      c: () => ik
    });
    var Rk = Bk(4015),
      tk = Bk(1387),
      ak = Bk(61),
      Xk = Bk(6167),
      bk = Bk(4004),
      wk = Bk(1239),
      dk = Bk(1847),
      sk = Bk(1812),
      Vk = Bk(1389),
      Jk = Bk(1149),
      Ak = Bk(36605),
      ek = Bk(1020),
      yk = Bk.n(ek),
      fk = Bk(1259),
      mk = Bk(1028),
      Wk = Bk(1230),
      vk = Bk(1069);
    const ik = "SleepingOverlay";

    function Yk() {
      const {
        t: kk
      } = (0, Jk.x)(), [Fk, Bk] = (0, ak.useState)(!1), [ek, Yk] = (0, ak.useState)(null), [Ok, Ek] = (0, ak.useState)(1), [Sk, Nk] = (0, ak.useState)(!1), [Hk, uk] = (0, ak.useState)(!1), Mk = (0, ak.useRef)(0), gk = (0, ak.useRef)(!1), Uk = (0, ak.useRef)(!1), ck = (0, ak.useRef)(), Gk = (0, ak.useRef)(null);

      function Tk() {
        const kk = null !== ek && void 0 !== ek ? ek : "Rested Speed";
        dk.gameBridge.send("wakeUp", Hk ? kk : null), Gk.current = null, Bk(!1), Yk(null), Ek(1), Nk(!1), uk(!1)
      }

      function rk() {
        return !Sk && (Tk(), !0)
      }
      return (0, tk.f)("PlayerPhysicsTypeUpdate", (kk => {
        kk !== Gk.current && (Gk.current = kk, kk === Xk.l.SLEEPING ? (Uk.current || (Mk.current = dk.gameBridge.lookup("cameraZoom", null), Uk.current = !0), gk.current = !0, dk.gameBridge.send("setCameraZoom", 3), Bk(!0), Ek(function() {
          for (const kk of dk.gameBridge.lookup("blocksStandingOn", null)) {
            if (Ak.b.leafBeds.includes(kk)) return console.log(`Found leaf bed: ${kk}`), 1;
            if (Ak.b.woolBeds.includes(kk)) return console.log(`Found woold bed: ${kk}`), 2;
            if (Ak.b.strongBeds.includes(kk)) return console.log(`Found strong bed ${kk}`), 3
          }
          return 1
        }())) : (Uk.current = !1, Bk(!1), Yk(null), Ek(1)))
      })), (0, ak.useEffect)((() => () => {
        (0, wk.l)(ik)
      }), []), (0, ak.useEffect)((() => {
        Fk ? (0, wk.m)(ik) : ((0, wk.l)(ik), gk.current && (dk.gameBridge.send("setCameraZoom", Mk.current), gk.current = !1))
      }), [Fk]), (0, Wk.s)("overlay", ck, rk, Fk), (0, vk.jsx)(Rk.e, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: Fk,
        timeout: 300,
        nodeRef: ck,
        unmountOnExit: !0,
        children: (0, vk.jsx)("div", {
          ref: ck,
          onClick: kk => {
            rk() && kk.stopPropagation()
          },
          children: (0, vk.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, vk.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: bk.i.map((Fk => (0, vk.jsxs)(Lk, {
                restedEffect: Fk,
                ob: ek,
                setChosenRestedEffect: Yk,
                children: [(0, vk.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, vk.jsx)(sk.d, {
                    text: [{
                      icon: Fk
                    }]
                  }), bk.h[Fk].shortName]
                }), (0, vk.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: kk(bk.h[Fk].description, {
                    time: bk.h[Fk].effectLevelDurations[Ok] / 6e4
                  })
                })]
              }, Fk)))
            }), (0, vk.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, vk.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, vk.jsxs)(Vk.g, {
                className: "SleepingOverlayWakeUpButton",
                onClick: kk => {
                  Hk ? Tk() : (Nk(!0), (0, fk.Q)((() => {
                    Nk(!1), uk(!0)
                  }), !0)), kk.stopPropagation()
                },
                loading: Sk,
                children: [!Hk && (0, vk.jsxs)(vk.Fragment, {
                  children: [(0, vk.jsx)(mk.d, {
                    name: "film"
                  }), " ", kk("classicGame:watchAdToGetRestedPerk")]
                }), Hk && kk("classicGame:wakeUp")]
              }), (0, vk.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, vk.jsx)("div", {
                  className: yk()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === Ok
                  }),
                  children: (0, vk.jsx)(sk.d, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, vk.jsx)("div", {
                  className: yk()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === Ok
                  }),
                  children: (0, vk.jsx)(sk.d, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, vk.jsx)("div", {
                  className: yk()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === Ok
                  }),
                  children: (0, vk.jsx)(sk.d, {
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
    const Lk = (0, ak.memo)((function(kk) {
      let {
        children: Fk,
        restedEffect: Bk,
        ob: Rk,
        setChosenRestedEffect: tk
      } = kk;
      return Bk === Rk ? (0, vk.jsx)(Vk.o, {
        onClick: kk => {
          kk.stopPropagation()
        },
        children: Fk
      }) : (0, vk.jsx)(Vk.j, {
        onClick: kk => {
          tk(Bk), kk.stopPropagation()
        },
        children: Fk
      })
    }))
  },
  39984: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => jk
    });
    var Rk = Bk(22),
      tk = Bk(29),
      ak = Bk(4044),
      Xk = Bk(279),
      bk = Bk(1585),
      wk = Bk(7826),
      dk = Bk(4060),
      sk = Bk(8360),
      Vk = Bk(7861),
      Jk = Bk(7840),
      Ak = Bk(7870),
      ek = Bk(1623),
      yk = Bk(7874),
      fk = Bk(8325),
      mk = Bk(8478),
      Wk = Bk(8369),
      vk = Bk(8484),
      ik = Bk(1847),
      Yk = Bk(7815),
      Lk = Bk(8396),
      Ok = Bk(8388),
      Ek = Bk(8364);
    class Sk {
      constructor() {
        this.lostAtMs = null
      }
      update(kk, Fk) {
        return kk ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= Fk, Fk - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class Nk {
      constructor(kk, Fk) {
        this.press = kk, this.release = Fk, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(kk, Fk, Bk, Rk) {
        if (kk && null === this.downAtMs) return this.downAtMs = Bk, this.latched = Rk, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? kk && this.end() : !Fk && Bk - this.downAtMs >= 40 && this.end())
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
    const Hk = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      uk = kk => {
        let Fk = null;
        const Bk = new Ek.d,
          Rk = () => {
            Fk && (((kk, Fk, Bk) => {
              switch (Bk.kind) {
                case "reload":
                  return void Fk.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void Fk.specialActionUp(Bk.action);
                case "customButton":
                  return void ik.gameBridge.send("pressCustomButton", {
                    id: Bk.id,
                    down: !1
                  });
                case "touchButton":
                  kk.pressTouchButton(!1)
              }
            })(kk, Fk.bodies, Fk.action), Fk = null)
          },
          ak = (Bk, tk, ak, Xk) => {
            Rk(), Fk = {
              action: tk,
              bodies: Bk,
              heldBy: ak,
              atMs: Xk
            }, ((kk, Fk, Bk) => {
              switch (Bk.kind) {
                case "reload":
                  return Fk.reloadGun(), void Fk.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void Fk.specialActionDown(Bk.action);
                case "customButton":
                  return void ik.gameBridge.send("pressCustomButton", {
                    id: Bk.id,
                    down: !0
                  });
                case "touchButton":
                  kk.pressTouchButton(!0)
              }
            })(kk, Bk, tk)
          };
        return {
          update: (Xk, bk, dk, sk) => {
            var Jk;
            const Ak = (0, Lk.o)(kk.contextActionInputs()),
              ek = null !== (Jk = Ak[0]) && void 0 !== Jk ? Jk : Hk;
            (0, Ok.e)((0, Lk.i)(ek) ? ek : null);
            const yk = (0, Lk.e)(Ak);
            (0, Ok.g)(yk);
            const fk = (0, wk.f)("actionButton");
            if (yk) {
              const kk = Bk.update(bk.wasPressed(fk), bk.isHeld(fk), dk, sk);
              "tap" === kk ? ak(Xk, ek, [fk], dk) : "hold" === kk && (Vk.d.consumeButton(fk), tk.o.Hf(vk.k, Ak))
            } else Bk.release(), bk.wasPressed(fk) && ak(Xk, ek, [fk], dk);
            Fk && dk - Fk.atMs >= 40 && !Fk.heldBy.some((kk => (0, Yk.L)(bk.frame.values, kk))) && Rk()
          },
          pressPicked: (kk, Fk) => {
            ak(kk, Fk, [(0, wk.f)("menuConfirm"), (0, wk.f)("actionButton")], performance.now())
          },
          release: () => {
            Bk.release(), Rk(), (0, Ok.e)(null), (0, Ok.g)(!1)
          }
        }
      };
    var Mk = Bk(7810);
    var gk = Bk(39977),
      Uk = Bk(8407),
      ck = Bk(7852),
      Gk = Bk(8521);
    var Tk = Bk(39970),
      rk = Bk(8529),
      Dk = Bk(39993),
      zk = Bk(8509),
      Pk = Bk(8415),
      hk = Bk(8422),
      qk = Bk(8428),
      Ck = Bk(8334);
    const Zk = () => Ck.e[(0, Jk.g)().tapHoldTime].wheelMs,
      pk = () => ((0, sk.c)(), new Event("controllerMenuKey")),
      Kk = (kk, Fk, Bk) => new Nk((() => {
        const Bk = kk.bodies();
        return {
          bodies: Bk,
          press: Fk(Bk)
        }
      }), (kk => {
        let {
          bodies: Fk,
          press: Rk
        } = kk;
        Bk(Fk, Rk)
      })),
      xk = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      jk = kk => {
        const Fk = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let Bk = xk;
        const sk = new Dk.d,
          ik = tk.o.subscribe("appManagerUpdated|activeInputDevice", (Fk => {
            kk.deviceChanged(Fk)
          }));
        let Lk = null,
          Ok = 0;
        const Nk = () => {
          Lk = null, (0, Pk.e)(null)
        };
        let Hk = !1;
        const jk = new Sk,
          lk = kk.look,
          nk = new Ek.d,
          Ik = new Ek.d,
          Qk = uk(kk),
          kF = tk.o.subscribe(vk.n, (Fk => {
            Qk.pressPicked(kk.bodies(), Fk)
          })),
          FF = Kk(kk, (kk => kk.primaryFireDown()), ((kk, Fk) => {
            kk.primaryFireUp(Fk)
          })),
          BF = Kk(kk, (kk => kk.altFireDown()), ((kk, Fk) => {
            kk.altFireUp(Fk)
          }));
        let RF = !1,
          tF = !1,
          aF = !1;
        const XF = (0, fk.c)(Yk.ab),
          bF = (0, fk.c)(Yk.ab),
          wF = new Ek.d;
        let dF = !1;
        const sF = () => {
            XF.reset(), bF.reset(), wF.release(), (0, qk.e)(!1), lk.release(), FF.cancel(), (0, hk.g)(!1), BF.cancel(), Qk.release(), nk.release(), Ik.release(), Nk()
          },
          VF = function() {
            let Rk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            sF(), tF = !1, Rk || (RF = !1, Bk = xk, Object.assign(Fk, {
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
          JF = function(Rk, tk, ak) {
            let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const bk = (0, Jk.g)(),
              dk = (0, Tk.c)(tk, bk.moveDeadzone),
              Vk = (0, wk.f)("sprint");
            Bk = (0, Tk.n)(Bk, {
              sprintPressed: Rk.wasPressed(Vk),
              magnitude: dk.magnitude,
              autoSprint: bk.autoSprint,
              nowMs: ak
            }), Fk.running = Bk.running, Fk.sprintHeld = Rk.isHeld(Vk), Fk.x = dk.x, Fk.y = dk.y, Fk.magnitude = dk.speed, Fk.headingOffset = dk.headingOffset, RF = dk.magnitude > 0;
            const Ak = (0, wk.f)("jump");
            if (Fk.jumpHeld = Rk.isHeld(Ak), Fk.jumpPressed = Rk.wasPressed(Ak), Fk.jumpPressed && kk.bodies().jumpDown(), Xk) return void kk.move(Fk, null);
            const ek = (0, wk.f)("sneak"),
              yk = sk.filter({
                sneakHeld: Rk.isHeld(ek),
                sneakPressed: Rk.wasPressed(ek),
                sneakTogglePressed: Rk.wasPressed((0, wk.f)("sneakToggle"))
              }, ak);
            kk.move(Fk, {
              ...yk,
              mode: bk.sneakMode
            })
          },
          AF = (kk, Fk) => {
            const Bk = (0, wk.f)("chat");
            if ("off" === (0, Jk.g)().quickChat) return void(kk.wasPressed(Bk) && (Vk.d.consumeButton(Bk), tk.o.Hf(Uk.c)));
            const Rk = nk.update(kk.wasPressed(Bk), kk.isHeld(Bk), Fk, Zk());
            "tap" === Rk || "hold" === Rk && null === (0, ek.e)() ? tk.o.Hf(Uk.c) : "hold" === Rk && (Vk.d.consumeButton(Bk), tk.o.Hf(Wk.m))
          },
          eF = (Fk, Bk) => {
            ((kk, Fk) => {
              const Bk = (0, mk.c)(),
                Rk = (0, wk.f)("emoteWheel");
              if ("wheel" === (0, Jk.g)().emoteButton) return kk.wasPressed(Rk) && (Vk.d.consumeButton(Rk), tk.o.Hf("requestEmoteWheelPadOpen", !0)), (0, mk.c)() !== Bk;
              const ak = Ik.update(kk.wasPressed(Rk), kk.isHeld(Rk), Fk, Zk());
              return "tap" === ak ? tk.o.Hf("requestEmoteRepeatLast") : "hold" === ak && (Vk.d.consumeButton(Rk), tk.o.Hf("requestEmoteWheelPadOpen", !1)), (0, mk.c)() !== Bk
            })(Fk, Bk) || AF(Fk, Bk), Fk.wasPressed((0, wk.f)("inventory")) && (Vk.d.consumeButton((0, wk.f)("inventory")), (0, bk.B)(pk(), "inventory", kk.hasFullInventory())), Fk.wasPressed((0, wk.f)("pause")) && (Vk.d.consumeButton((0, wk.f)("pause")), (0, dk.e)() === Xk.p.SOCIAL ? (0, bk.x)(pk(), Xk.p.SOCIAL) : (0, bk.g)(pk())), Fk.wasPressed((0, wk.f)("leaderboard")) && !(0, ak.e)() && (Vk.d.consumeButton((0, wk.f)("leaderboard")), ((kk, Fk) => {
              if ("shop" === (0, ck.d)()) return tk.o.Hf(Gk.j), void(0, bk.x)(kk, Xk.p.SHOP, !0);
              (0, bk.x)(kk, Xk.p.LOBBY_LEADERBOARD, Fk)
            })(pk(), kk.hasLobbyLeaderboard()))
          },
          yF = (Fk, Bk) => {
            const Rk = kk.bodies();
            ((Fk, Bk) => {
              const Rk = (0, wk.f)("attack"),
                tk = Fk.wasPressed(Rk);
              tk && !FF.isLatched() && (Hk = kk.targetsBlock()), FF.update(tk, Fk.isHeld(Rk), Bk, "toggle" === (0, Jk.g)().attackMode), FF.isLatched() && Hk ? jk.update(kk.targetsBlock(), Bk) && FF.unlatch() : jk.reset(), (0, hk.g)(FF.isLatched())
            })(Fk, Bk), BF.update(Fk.wasPressed((0, wk.f)("use")), Fk.isHeld((0, wk.f)("use")), Bk, !1), XF.update(Fk.isHeld((0, wk.f)("hotbarPrevious")), Bk) && kk.scrollHotbar(-1), bF.update(Fk.isHeld((0, wk.f)("hotbarNext")), Bk) && kk.scrollHotbar(1), ((Fk, Bk, Rk) => {
              const tk = (0, wk.f)("perspective"),
                ak = (0, wk.f)("pickBlock"),
                Xk = kk.pickBlockAllowed();
              (0, qk.e)(Xk && !dF && kk.targetsBlock());
              const bk = () => {
                Bk.pickBlock() && (dF = !0, (0, qk.e)(!1))
              };
              if (!Xk || ak !== tk) return wF.release(), Fk.wasPressed(tk) && Bk.swapCameraZoom(), void(Xk && Fk.wasPressed(ak) && bk());
              const dk = wF.update(Fk.wasPressed(ak), Fk.isHeld(ak), Rk, Zk());
              "tap" === dk ? bk() : "hold" === dk && Bk.swapCameraZoom()
            })(Fk, Rk, Bk), ((Fk, Bk, Rk) => {
              const tk = (0, wk.f)("drop");
              if (Fk.wasPressed(tk)) {
                Bk.dropItem(!1);
                const kk = (0, Jk.g)();
                "off" !== kk.buttonRepeat && (Lk = Rk, Ok = Ck.e[kk.tapHoldTime].dropStackMs, (0, Pk.e)(Ok))
              }
              null !== Lk && (!Fk.isHeld(tk) || kk.selectedSlotEmpty() ? Nk() : Rk - Lk >= Ok && (Nk(), Bk.dropItem(!0)))
            })(Fk, Rk, Bk), Qk.update(Rk, Fk, Bk, Zk()), eF(Fk, Bk)
          },
          fF = Vk.d.register({
            name: "gameplay",
            isActive: () => {
              const Fk = RF && "keyboardMouse" === Rk.c.get("activeInputDevice") && !(0, Ak.M)(),
                Bk = (0, Ak.m)() ? [gk.d] : [];
              return ((0, Ak.m)() || Fk) && (0, yk.d)(Bk) && kk.hasPlayer()
            },
            onFrame: kk => {
              const Fk = performance.now(),
                Bk = (0, Jk.g)(),
                Rk = (0, Tk.o)(kk, (0, Tk.h)(Bk, (0, wk.f)("pause"), (0, rk.e)().isSupported())),
                tk = (0, Tk.g)(Rk, Bk.swapSticks);
              return (0, Ak.m)() ? (tF = !1, (0, yk.d)() ? (aF = !1, lk.update(tk.look, Bk, Rk.isHeld((0, wk.f)("use"))), JF(Rk, tk.move, Fk), void yF(Rk, Fk)) : (aF || (aF = !0, sk.lostToPadScreen(), VF()), void AF(Rk, Fk))) : (tF || (sF(), tF = !0), void JF(Rk, tk.move, Fk))
            },
            onDeactivate: kk => {
              (0, Ak.m)() && sk.lostToPadScreen(), VF(kk)
            },
            onPeekFrame: Fk => {
              (0, Ak.m)() && (0, yk.d)(gk.j) && kk.hasPlayer() ? JF(Fk, (0, Tk.g)(Fk, (0, Jk.g)().swapSticks).move, performance.now(), !0) : VF()
            }
          }),
          mF = (0, gk.h)(kk),
          WF = (() => {
            const kk = tk.o.subscribe(Mk.c, (kk => {
              !kk && (0, Ak.m)() && "inGame" === Rk.c.get("gameState") && tk.o.Hf("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              tk.o.unsubscribe(kk)
            }
          })();
        return () => {
          VF(), kk.uninstall(), (0, zk.c)(!1), (0, qk.e)(!1), tk.o.unsubscribe(ik), tk.o.unsubscribe(kF), fF(), mF(), WF(), lk.uninstall()
        }
      }
  },
  39977: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ek,
      h: () => fk,
      j: () => Ak
    });
    var Rk = Bk(1239),
      tk = Bk(4044),
      ak = Bk(8462),
      Xk = Bk(36597),
      bk = Bk(1646),
      wk = Bk(1143),
      dk = Bk(7874),
      sk = Bk(8369),
      Vk = Bk(8484);
    const Jk = {
        emoteWheel: ak.e,
        quickChatWheel: sk.b,
        actionWheel: Vk.p
      },
      Ak = Object.keys(Jk),
      ek = "dead",
      yk = kk => (0, Rk.k)().includes(kk),
      fk = kk => {
        const Fk = [(0, dk.k)(ek, (() => kk.hasPlayer() && kk.isPlayerDead())), (0, dk.k)("sleeping", (() => yk(Xk.c))), (0, dk.k)("turnstile", (() => yk(wk.e))), (0, dk.k)("videoAd", bk.f), (0, dk.k)("replay", (() => (0, tk.e)() || kk.isReplayMode())), (0, dk.k)("freeCamera", (() => kk.isFreeCameraOn())), ...Object.entries(Jk).map((kk => {
          let [Fk, Bk] = kk;
          return (0, dk.k)(Fk, Bk)
        }))];
        return () => {
          for (const kk of Fk) kk()
        }
      }
  },
  39970: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => tk,
      c: () => wk,
      g: () => bk,
      h: () => sk,
      j: () => Xk,
      m: () => ak,
      n: () => dk,
      o: () => Vk
    });
    var Rk = Bk(7815);
    class tk {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(kk, Fk, Bk) {
        const tk = (0, Rk.i)(kk, Fk.lookDeadzone);
        if (Math.hypot(tk.x, tk.y) < .9 || Math.abs(tk.x) < Math.abs(tk.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = Bk);
        const ak = (Xk = Fk.lookSensitivityX, Math.min(1, 100 / Xk));
        var Xk;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (Bk - this.fullTiltSinceMs - 250 * ak) / (200 * ak)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const ak = (kk, Fk, Bk, tk, ak) => {
        let Xk = 1;
        return "boost" === Bk.lookCurve ? Xk = kk.update(Fk, Bk, ak) : kk.reset(),
          function(kk, Fk) {
            let {
              yawBoost: Bk = 1,
              aiming: tk = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const ak = (0, Rk.e)((0, Rk.i)(kk, Fk.lookDeadzone), Fk.lookCurve),
              Xk = 220 * Math.PI / 180,
              bk = tk ? Fk.aimLookSensitivity / 100 : 1,
              wk = Fk.lookSensitivityX / 100 * bk,
              dk = Fk.lookSensitivityY / 100 * bk;
            return {
              yawRadPerSec: ak.x * Xk * wk * Bk * (Fk.invertLookX ? -1 : 1),
              pitchRadPerSec: ak.y * Xk * .7 * dk * (Fk.invertLookY ? -1 : 1)
            }
          }(Fk, Bk, {
            yawBoost: Xk,
            aiming: tk
          })
      },
      Xk = (kk, Fk) => {
        const Bk = Math.max(0, Math.min(250, Fk)) / 1e3;
        return {
          ZE: kk.yawRadPerSec * Bk,
          pE: kk.pitchRadPerSec * Bk
        }
      },
      bk = (kk, Fk) => Fk ? {
        move: kk.rightStick,
        look: kk.leftStick
      } : {
        move: kk.leftStick,
        look: kk.rightStick
      },
      wk = (kk, Fk) => {
        const Bk = (0, Rk.i)(kk, Fk),
          tk = Math.min(1, Math.hypot(Bk.x, Bk.y));
        return {
          magnitude: tk,
          speed: Math.min(1, tk / .8),
          headingOffset: 0 === tk ? 0 : Math.atan2(Bk.x, -Bk.y),
          x: Bk.x,
          y: Bk.y
        }
      },
      dk = (kk, Fk) => {
        let {
          sprintPressed: Bk,
          magnitude: Rk,
          autoSprint: tk,
          nowMs: ak
        } = Fk;
        const Xk = Bk ? ak : kk.latchedAtMs,
          bk = (kk => {
            let {
              running: Fk,
              magnitude: Bk,
              sprintPressed: Rk,
              autoSprint: tk
            } = kk;
            return !(Bk < .5) && (!!Rk || !!(tk && Bk >= .9) || Fk)
          })({
            running: kk.running,
            magnitude: Rk,
            sprintPressed: ak - Xk <= 1e3,
            autoSprint: tk
          });
        return {
          running: bk,
          latchedAtMs: bk ? -1 / 0 : Xk
        }
      },
      sk = (kk, Fk, Bk) => Bk && kk.gyroAiming && "button" === kk.gyroActivation && kk.gyroButton !== Fk ? kk.gyroButton : null,
      Vk = (kk, Fk) => Fk ? {
        ...kk,
        isHeld: Bk => Bk !== Fk && kk.isHeld(Bk),
        wasPressed: Bk => Bk !== Fk && kk.wasPressed(Bk),
        wasReleased: Bk => Bk !== Fk && kk.wasReleased(Bk),
        value: Bk => Bk === Fk ? 0 : kk.value(Bk)
      } : kk
  },
  39993: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => tk,
      f: () => Rk
    });
    const Rk = kk => {
      let {
        mode: Fk,
        sneakHeld: Bk,
        sneakPressed: Rk,
        sneakTogglePressed: tk,
        descending: ak,
        canCrouch: Xk,
        toggled: bk
      } = kk;
      return Xk ? ak ? {
        crouchHeld: Bk,
        toggled: !1
      } : "hold" === Fk ? {
        crouchHeld: Bk,
        toggled: tk ? !bk : bk
      } : {
        crouchHeld: !1,
        toggled: Rk || tk ? !bk : bk
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class tk {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(kk, Fk) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = Fk, this.graceEndsMs = Fk + 500);
        const Bk = Fk < this.graceEndsMs;
        return Bk && (kk.sneakPressed || kk.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, Fk + 300))), kk.sneakHeld ? Bk && kk.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: kk.sneakHeld && !this.ignoringHeld,
          sneakPressed: kk.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: kk.sneakTogglePressed && !Bk
        }
      }
    }
  },
  39957: (kk, Fk, Bk) => {
    Bk(8529)
  },
  39962: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => vk
    });
    var Rk = Bk(29),
      tk = Bk(8462),
      ak = Bk(8476),
      Xk = Bk(7826),
      bk = Bk(7861),
      wk = Bk(7840),
      dk = Bk(39970),
      sk = Bk(39977),
      Vk = Bk(7874),
      Jk = Bk(7815),
      Ak = Bk(8369),
      ek = Bk(8484);
    const yk = [{
        isOpen: tk.i,
        openButton: () => (0, Xk.f)("emoteWheel"),
        aim: kk => {
          Rk.o.Hf("emoteWheelPadAim", kk)
        },
        commit: kk => {
          Rk.o.Hf("requestEmoteWheelPadCommit", kk)
        },
        close: () => {
          Rk.o.Hf("requestEmoteWheelClose")
        }
      }, {
        isOpen: Ak.b,
        openButton: () => (0, Xk.f)("chat"),
        aim: kk => {
          Rk.o.Hf(Ak.f, kk)
        },
        commit: kk => {
          Rk.o.Hf(Ak.i, kk)
        },
        close: () => {
          Rk.o.Hf(Ak.h)
        },
        keptOpenBy: [sk.d]
      }, {
        isOpen: ek.p,
        openButton: () => (0, Xk.f)("actionButton"),
        aim: kk => {
          Rk.o.Hf(ek.b, kk)
        },
        commit: kk => {
          Rk.o.Hf(ek.g, kk)
        },
        close: () => {
          Rk.o.Hf(ek.d)
        }
      }],
      fk = () => {
        var kk;
        return null !== (kk = yk.find((kk => kk.isOpen()))) && void 0 !== kk ? kk : null
      },
      mk = kk => (0, Xk.F)(kk.openButton()),
      Wk = (kk, Fk) => !(0, Jk.L)(kk.frame.values, Fk),
      vk = () => {
        let kk = null,
          Fk = !1,
          Bk = !1;
        return bk.d.register({
          name: "wheel",
          isActive: () => null !== fk(),
          peek: () => {
            const kk = fk();
            return kk && mk(kk) ? null : {
              over: "gameplay",
              stick: (0, wk.g)().swapSticks ? "right" : "left"
            }
          },
          onFrame: Rk => {
            var tk;
            const Jk = fk();
            if (!Jk) return;
            if (null !== (0, Vk.c)([...sk.j, ...null !== (tk = Jk.keptOpenBy) && void 0 !== tk ? tk : []])) return void Jk.close();
            const Ak = Jk.openButton(),
              ek = (0, dk.g)(Rk.frame, (0, wk.g)().swapSticks),
              yk = mk(Jk) ? ek.move : ek.look;
            kk !== Jk ? (kk = Jk, Fk = !Wk(Rk, Ak) || Math.hypot(yk.x, yk.y) >= ak.D, Bk = !1) : Bk && (Bk = !1, Wk(Rk, Ak) && (Fk = !1)), Jk.aim(yk);
            const vk = (0, Xk.f)("menuConfirm"),
              ik = (0, Xk.f)("menuBack");
            return Rk.wasPressed(ik) ? (bk.d.consumeButton(ik), void Jk.close()) : Rk.wasPressed(vk) || Rk.wasPressed(Ak) ? (bk.d.consumeButton(vk), bk.d.consumeButton(Ak), void Jk.commit(!1)) : void(Fk && Wk(Rk, Ak) && (Fk = !1, Jk.commit(!0)))
          },
          onDeactivate: () => {
            Bk = null !== kk && fk() === kk, Bk || (kk = null, Fk = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
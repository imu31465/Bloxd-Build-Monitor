export const id = 224;
export const ids = [224];
export const modules = {
  36965: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Qk,
      f: () => Kk
    });
    var Xk = Ik(4227),
      Tk = Ik(1402),
      ik = Ik(58),
      yk = Ik(6475),
      lk = Ik(4216),
      ak = Ik(1270),
      qk = Ik(1875),
      Lk = Ik(1849),
      tk = Ik(1406),
      Zk = Ik(1179),
      jk = Ik(36969),
      ek = Ik(1055),
      wk = Ik.n(ek),
      Hk = Ik(1287),
      Jk = Ik(1066),
      xk = Ik(1263),
      Pk = Ik(1096);
    const Kk = "SleepingOverlay";

    function Qk() {
      const {
        t: kk
      } = (0, Zk.y)(), [Fk, Ik] = (0, ik.useState)(!1), [ek, Qk] = (0, ik.useState)(null), [Vk, zk] = (0, ik.useState)(1), [Sk, vk] = (0, ik.useState)(!1), [Ek, Ok] = (0, ik.useState)(!1), nk = (0, ik.useRef)(0), Gk = (0, ik.useRef)(!1), pk = (0, ik.useRef)(!1), uk = (0, ik.useRef)(), bk = (0, ik.useRef)(null);

      function Rk() {
        const kk = null !== ek && void 0 !== ek ? ek : "Rested Speed";
        qk.gameBridge.send("wakeUp", Ek ? kk : null), bk.current = null, Ik(!1), Qk(null), zk(1), vk(!1), Ok(!1)
      }

      function Uk() {
        return !Sk && (Rk(), !0)
      }
      return (0, Tk.d)("PlayerPhysicsTypeUpdate", (kk => {
        kk !== bk.current && (bk.current = kk, kk === yk.n.SLEEPING ? (pk.current || (nk.current = qk.gameBridge.lookup("cameraZoom", null), pk.current = !0), Gk.current = !0, qk.gameBridge.send("setCameraZoom", 3), Ik(!0), zk(function() {
          for (const kk of qk.gameBridge.lookup("blocksStandingOn", null)) {
            if (jk.e.leafBeds.includes(kk)) return console.log(`Found leaf bed: ${kk}`), 1;
            if (jk.e.woolBeds.includes(kk)) return console.log(`Found woold bed: ${kk}`), 2;
            if (jk.e.strongBeds.includes(kk)) return console.log(`Found strong bed ${kk}`), 3
          }
          return 1
        }())) : (pk.current = !1, Ik(!1), Qk(null), zk(1)))
      })), (0, ik.useEffect)((() => () => {
        (0, ak.l)(Kk)
      }), []), (0, ik.useEffect)((() => {
        Fk ? (0, ak.m)(Kk) : ((0, ak.l)(Kk), Gk.current && (qk.gameBridge.send("setCameraZoom", nk.current), Gk.current = !1))
      }), [Fk]), (0, xk.t)("overlay", uk, Uk, Fk), (0, Pk.jsx)(Xk.e, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: Fk,
        timeout: 300,
        nodeRef: uk,
        unmountOnExit: !0,
        children: (0, Pk.jsx)("div", {
          ref: uk,
          onClick: kk => {
            Uk() && kk.stopPropagation()
          },
          children: (0, Pk.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Pk.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: lk.f.map((Fk => (0, Pk.jsxs)(sk, {
                restedEffect: Fk,
                Aq: ek,
                setChosenRestedEffect: Qk,
                children: [(0, Pk.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Pk.jsx)(Lk.c, {
                    text: [{
                      icon: Fk
                    }]
                  }), lk.d[Fk].shortName]
                }), (0, Pk.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: kk(lk.d[Fk].description, {
                    time: lk.d[Fk].effectLevelDurations[Vk] / 6e4
                  })
                })]
              }, Fk)))
            }), (0, Pk.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Pk.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Pk.jsxs)(tk.d, {
                className: "SleepingOverlayWakeUpButton",
                onClick: kk => {
                  Ek ? Rk() : (vk(!0), (0, Hk.$)((() => {
                    vk(!1), Ok(!0)
                  }), !0)), kk.stopPropagation()
                },
                loading: Sk,
                children: [!Ek && (0, Pk.jsxs)(Pk.Fragment, {
                  children: [(0, Pk.jsx)(Jk.e, {
                    name: "film"
                  }), " ", kk("classicGame:watchAdToGetRestedPerk")]
                }), Ek && kk("classicGame:wakeUp")]
              }), (0, Pk.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Pk.jsx)("div", {
                  className: wk()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === Vk
                  }),
                  children: (0, Pk.jsx)(Lk.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Pk.jsx)("div", {
                  className: wk()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === Vk
                  }),
                  children: (0, Pk.jsx)(Lk.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Pk.jsx)("div", {
                  className: wk()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === Vk
                  }),
                  children: (0, Pk.jsx)(Lk.c, {
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
    const sk = (0, ik.memo)((function(kk) {
      let {
        children: Fk,
        restedEffect: Ik,
        Aq: Xk,
        setChosenRestedEffect: Tk
      } = kk;
      return Ik === Xk ? (0, Pk.jsx)(tk.m, {
        onClick: kk => {
          kk.stopPropagation()
        },
        children: Fk
      }) : (0, Pk.jsx)(tk.g, {
        onClick: kk => {
          Tk(Ik), kk.stopPropagation()
        },
        children: Fk
      })
    }))
  },
  40570: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => mk
    });
    var Xk = Ik(25),
      Tk = Ik(34),
      ik = Ik(4246),
      yk = Ik(318),
      lk = Ik(1580),
      ak = Ik(8152),
      qk = Ik(4261),
      Lk = Ik(8677),
      tk = Ik(8180),
      Zk = Ik(8161),
      jk = Ik(8185),
      ek = Ik(1623),
      wk = Ik(8194),
      Hk = Ik(8624),
      Jk = Ik(8791),
      xk = Ik(8686),
      Pk = Ik(8800),
      Kk = Ik(1875),
      Qk = Ik(8142),
      sk = Ik(8706),
      Vk = Ik(8703),
      zk = Ik(8680);
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
    class vk {
      constructor(kk, Fk) {
        this.press = kk, this.release = Fk, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(kk, Fk, Ik, Xk) {
        if (kk && null === this.downAtMs) return this.downAtMs = Ik, this.latched = Xk, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? kk && this.end() : !Fk && Ik - this.downAtMs >= 40 && this.end())
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
    const Ek = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      Ok = kk => {
        let Fk = null;
        const Ik = new zk.e,
          Xk = () => {
            Fk && (((kk, Fk, Ik) => {
              switch (Ik.kind) {
                case "reload":
                  return void Fk.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void Fk.specialActionUp(Ik.action);
                case "customButton":
                  return void Kk.gameBridge.send("pressCustomButton", {
                    id: Ik.id,
                    down: !1
                  });
                case "touchButton":
                  kk.pressTouchButton(!1)
              }
            })(kk, Fk.bodies, Fk.action), Fk = null)
          },
          ik = (Ik, Tk, ik, yk) => {
            Xk(), Fk = {
              action: Tk,
              bodies: Ik,
              heldBy: ik,
              atMs: yk
            }, ((kk, Fk, Ik) => {
              switch (Ik.kind) {
                case "reload":
                  return Fk.reloadGun(), void Fk.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void Fk.specialActionDown(Ik.action);
                case "customButton":
                  return void Kk.gameBridge.send("pressCustomButton", {
                    id: Ik.id,
                    down: !0
                  });
                case "touchButton":
                  kk.pressTouchButton(!0)
              }
            })(kk, Ik, Tk)
          };
        return {
          update: (yk, lk, qk, Lk) => {
            var Zk;
            const jk = (0, sk.j)(kk.contextActionInputs()),
              ek = null !== (Zk = jk[0]) && void 0 !== Zk ? Zk : Ek;
            (0, Vk.b)((0, sk.d)(ek) ? ek : null);
            const wk = (0, sk.b)(jk);
            (0, Vk.f)(wk);
            const Hk = (0, ak.j)("actionButton");
            if (wk) {
              const kk = Ik.update(lk.wasPressed(Hk), lk.isHeld(Hk), qk, Lk);
              "tap" === kk ? ik(yk, ek, [Hk], qk) : "hold" === kk && (tk.b.consumeButton(Hk), Tk.g.GL(Pk.l, jk))
            } else Ik.release(), lk.wasPressed(Hk) && ik(yk, ek, [Hk], qk);
            Fk && qk - Fk.atMs >= 40 && !Fk.heldBy.some((kk => (0, Qk.H)(lk.frame.values, kk))) && Xk()
          },
          pressPicked: (kk, Fk) => {
            ik(kk, Fk, [(0, ak.j)("menuConfirm"), (0, ak.j)("actionButton")], performance.now())
          },
          release: () => {
            Ik.release(), Xk(), (0, Vk.b)(null), (0, Vk.f)(!1)
          }
        }
      };
    var nk = Ik(8138);
    var Gk = Ik(40567),
      pk = Ik(8715),
      uk = Ik(8176),
      bk = Ik(8825);
    var Rk = Ik(40560),
      Uk = Ik(8833),
      Ck = Ik(40577),
      Nk = Ik(8814),
      ck = Ik(8720),
      Wk = Ik(8728),
      fk = Ik(8734),
      Bk = Ik(8632);
    const dk = () => Bk.b[(0, Zk.k)().tapHoldTime].wheelMs,
      Yk = () => ((0, Lk.b)(), new Event("controllerMenuKey")),
      Ak = (kk, Fk, Ik) => new vk((() => {
        const Ik = kk.bodies();
        return {
          bodies: Ik,
          press: Fk(Ik)
        }
      }), (kk => {
        let {
          bodies: Fk,
          press: Xk
        } = kk;
        Ik(Fk, Xk)
      })),
      gk = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      mk = kk => {
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
        let Ik = gk;
        const Lk = new Ck.d,
          Kk = Tk.g.subscribe("appManagerUpdated|activeInputDevice", (Fk => {
            kk.deviceChanged(Fk)
          }));
        let sk = null,
          Vk = 0;
        const vk = () => {
          sk = null, (0, ck.e)(null)
        };
        let Ek = !1;
        const mk = new Sk,
          hk = kk.look,
          rk = new zk.e,
          Dk = new zk.e,
          Mk = Ok(kk),
          kF = Tk.g.subscribe(Pk.n, (Fk => {
            Mk.pressPicked(kk.bodies(), Fk)
          })),
          FF = Ak(kk, (kk => kk.primaryFireDown()), ((kk, Fk) => {
            kk.primaryFireUp(Fk)
          })),
          IF = Ak(kk, (kk => kk.altFireDown()), ((kk, Fk) => {
            kk.altFireUp(Fk)
          }));
        let XF = !1,
          TF = !1,
          iF = !1;
        const yF = (0, Hk.e)(Qk.$),
          lF = (0, Hk.e)(Qk.$),
          aF = new zk.e;
        let qF = !1;
        const LF = () => {
            yF.reset(), lF.reset(), aF.release(), (0, fk.f)(!1), hk.release(), FF.cancel(), (0, Wk.f)(!1), IF.cancel(), Mk.release(), rk.release(), Dk.release(), vk()
          },
          tF = function() {
            let Xk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            LF(), TF = !1, Xk || (XF = !1, Ik = gk, Object.assign(Fk, {
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
          ZF = function(Xk, Tk, ik) {
            let yk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const lk = (0, Zk.k)(),
              qk = (0, Rk.e)(Tk, lk.moveDeadzone),
              tk = (0, ak.j)("sprint");
            Ik = (0, Rk.u)(Ik, {
              sprintPressed: Xk.wasPressed(tk),
              magnitude: qk.magnitude,
              autoSprint: lk.autoSprint,
              nowMs: ik
            }), Fk.running = Ik.running, Fk.sprintHeld = Xk.isHeld(tk), Fk.x = qk.x, Fk.y = qk.y, Fk.magnitude = qk.speed, Fk.headingOffset = qk.headingOffset, XF = qk.magnitude > 0;
            const jk = (0, ak.j)("jump");
            if (Fk.jumpHeld = Xk.isHeld(jk), Fk.jumpPressed = Xk.wasPressed(jk), Fk.jumpPressed && kk.bodies().jumpDown(), yk) return void kk.move(Fk, null);
            const ek = (0, ak.j)("sneak"),
              wk = Lk.filter({
                sneakHeld: Xk.isHeld(ek),
                sneakPressed: Xk.wasPressed(ek),
                sneakTogglePressed: Xk.wasPressed((0, ak.j)("sneakToggle"))
              }, ik);
            kk.move(Fk, {
              ...wk,
              mode: lk.sneakMode
            })
          },
          jF = (kk, Fk) => {
            const Ik = (0, ak.j)("chat");
            if ("off" === (0, Zk.k)().quickChat) return void(kk.wasPressed(Ik) && (tk.b.consumeButton(Ik), Tk.g.GL(pk.d)));
            const Xk = rk.update(kk.wasPressed(Ik), kk.isHeld(Ik), Fk, dk());
            "tap" === Xk || "hold" === Xk && null === (0, ek.c)() ? Tk.g.GL(pk.d) : "hold" === Xk && (tk.b.consumeButton(Ik), Tk.g.GL(xk.p))
          },
          eF = (Fk, Ik) => {
            ((kk, Fk) => {
              const Ik = (0, Jk.b)(),
                Xk = (0, ak.j)("emoteWheel");
              if ("wheel" === (0, Zk.k)().emoteButton) return kk.wasPressed(Xk) && (tk.b.consumeButton(Xk), Tk.g.GL("requestEmoteWheelPadOpen", !0)), (0, Jk.b)() !== Ik;
              const ik = Dk.update(kk.wasPressed(Xk), kk.isHeld(Xk), Fk, dk());
              return "tap" === ik ? Tk.g.GL("requestEmoteRepeatLast") : "hold" === ik && (tk.b.consumeButton(Xk), Tk.g.GL("requestEmoteWheelPadOpen", !1)), (0, Jk.b)() !== Ik
            })(Fk, Ik) || jF(Fk, Ik), Fk.wasPressed((0, ak.j)("inventory")) && (tk.b.consumeButton((0, ak.j)("inventory")), (0, lk.C)(Yk(), "inventory", kk.hasFullInventory())), Fk.wasPressed((0, ak.j)("pause")) && (tk.b.consumeButton((0, ak.j)("pause")), (0, qk.d)() === yk.r.SOCIAL ? (0, lk.z)(Yk(), yk.r.SOCIAL) : (0, lk.i)(Yk())), Fk.wasPressed((0, ak.j)("leaderboard")) && !(0, ik.h)() && (tk.b.consumeButton((0, ak.j)("leaderboard")), ((kk, Fk) => {
              if ("shop" === (0, uk.e)()) return Tk.g.GL(bk.h), void(0, lk.z)(kk, yk.r.SHOP, !0);
              (0, lk.z)(kk, yk.r.LOBBY_LEADERBOARD, Fk)
            })(Yk(), kk.hasLobbyTab()))
          },
          wF = (Fk, Ik) => {
            const Xk = kk.bodies();
            ((Fk, Ik) => {
              const Xk = (0, ak.j)("attack"),
                Tk = Fk.wasPressed(Xk);
              Tk && !FF.isLatched() && (Ek = kk.targetsBlock()), FF.update(Tk, Fk.isHeld(Xk), Ik, "toggle" === (0, Zk.k)().attackMode), FF.isLatched() && Ek ? mk.update(kk.targetsBlock(), Ik) && FF.unlatch() : mk.reset(), (0, Wk.f)(FF.isLatched())
            })(Fk, Ik), IF.update(Fk.wasPressed((0, ak.j)("use")), Fk.isHeld((0, ak.j)("use")), Ik, !1), yF.update(Fk.isHeld((0, ak.j)("hotbarPrevious")), Ik) && kk.scrollHotbar(-1), lF.update(Fk.isHeld((0, ak.j)("hotbarNext")), Ik) && kk.scrollHotbar(1), ((Fk, Ik, Xk) => {
              const Tk = (0, ak.j)("perspective"),
                ik = (0, ak.j)("pickBlock"),
                yk = kk.pickBlockAllowed();
              (0, fk.f)(yk && !qF && kk.targetsBlock());
              const lk = () => {
                Ik.pickBlock() && (qF = !0, (0, fk.f)(!1))
              };
              if (!yk || ik !== Tk) return aF.release(), Fk.wasPressed(Tk) && Ik.swapCameraZoom(), void(yk && Fk.wasPressed(ik) && lk());
              const qk = aF.update(Fk.wasPressed(ik), Fk.isHeld(ik), Xk, dk());
              "tap" === qk ? lk() : "hold" === qk && Ik.swapCameraZoom()
            })(Fk, Xk, Ik), ((Fk, Ik, Xk) => {
              const Tk = (0, ak.j)("drop");
              if (Fk.wasPressed(Tk)) {
                Ik.dropItem(!1);
                const kk = (0, Zk.k)();
                "off" !== kk.buttonRepeat && (sk = Xk, Vk = Bk.b[kk.tapHoldTime].dropStackMs, (0, ck.e)(Vk))
              }
              null !== sk && (!Fk.isHeld(Tk) || kk.selectedSlotEmpty() ? vk() : Xk - sk >= Vk && (vk(), Ik.dropItem(!0)))
            })(Fk, Xk, Ik), Mk.update(Xk, Fk, Ik, dk()), eF(Fk, Ik)
          },
          HF = tk.b.register({
            name: "gameplay",
            isActive: () => {
              const Fk = XF && "keyboardMouse" === Xk.d.get("activeInputDevice") && !(0, jk.N)(),
                Ik = (0, jk.n)() ? [Gk.d] : [];
              return ((0, jk.n)() || Fk) && (0, wk.e)(Ik) && kk.hasPlayer()
            },
            onFrame: kk => {
              const Fk = performance.now(),
                Ik = (0, Zk.k)(),
                Xk = (0, Rk.x)(kk, (0, Rk.k)(Ik, (0, ak.j)("pause"), (0, Uk.c)().isSupported())),
                Tk = (0, Rk.h)(Xk, Ik.swapSticks);
              return (0, jk.n)() ? (TF = !1, (0, wk.e)() ? (iF = !1, hk.update(Tk.look, Ik, Xk.isHeld((0, ak.j)("use"))), ZF(Xk, Tk.move, Fk), void wF(Xk, Fk)) : (iF || (iF = !0, Lk.lostToPadScreen(), tF()), void jF(Xk, Fk))) : (TF || (LF(), TF = !0), void ZF(Xk, Tk.move, Fk))
            },
            onDeactivate: kk => {
              (0, jk.n)() && Lk.lostToPadScreen(), tF(kk)
            },
            onPeekFrame: Fk => {
              (0, jk.n)() && (0, wk.e)(Gk.i) && kk.hasPlayer() ? ZF(Fk, (0, Rk.h)(Fk, (0, Zk.k)().swapSticks).move, performance.now(), !0) : tF()
            }
          }),
          JF = (0, Gk.h)(kk),
          xF = (() => {
            const kk = Tk.g.subscribe(nk.d, (kk => {
              !kk && (0, jk.n)() && "inGame" === Xk.d.get("gameState") && Tk.g.GL("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              Tk.g.unsubscribe(kk)
            }
          })();
        return () => {
          tF(), kk.uninstall(), (0, Nk.g)(!1), (0, fk.f)(!1), Tk.g.unsubscribe(Kk), Tk.g.unsubscribe(kF), HF(), JF(), xF(), hk.uninstall()
        }
      }
  },
  40567: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ek,
      h: () => Hk,
      i: () => jk
    });
    var Xk = Ik(1270),
      Tk = Ik(4246),
      ik = Ik(8772),
      yk = Ik(36965),
      lk = Ik(1652),
      ak = Ik(1177),
      qk = Ik(8194),
      Lk = Ik(8686),
      tk = Ik(8800);
    const Zk = {
        emoteWheel: ik.f,
        quickChatWheel: Lk.e,
        actionWheel: tk.q
      },
      jk = Object.keys(Zk),
      ek = "dead",
      wk = kk => (0, Xk.j)().includes(kk),
      Hk = kk => {
        const Fk = [(0, qk.g)(ek, (() => kk.hasPlayer() && kk.isPlayerDead())), (0, qk.g)("sleeping", (() => wk(yk.f))), (0, qk.g)("turnstile", (() => wk(ak.h))), (0, qk.g)("videoAd", lk.c), (0, qk.g)("replay", (() => (0, Tk.h)() || kk.isReplayMode())), (0, qk.g)("freeCamera", (() => kk.isFreeCameraOn())), ...Object.entries(Zk).map((kk => {
          let [Fk, Ik] = kk;
          return (0, qk.g)(Fk, Ik)
        }))];
        return () => {
          for (const kk of Fk) kk()
        }
      }
  },
  40560: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk,
      e: () => ak,
      h: () => lk,
      k: () => Lk,
      o: () => yk,
      s: () => ik,
      u: () => qk,
      x: () => tk
    });
    var Xk = Ik(8142);
    class Tk {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(kk, Fk, Ik) {
        const Tk = (0, Xk.j)(kk, Fk.lookDeadzone);
        if (Math.hypot(Tk.x, Tk.y) < .9 || Math.abs(Tk.x) < Math.abs(Tk.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = Ik);
        const ik = (yk = Fk.lookSensitivityX, Math.min(1, 100 / yk));
        var yk;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (Ik - this.fullTiltSinceMs - 250 * ik) / (200 * ik)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const ik = (kk, Fk, Ik, Tk, ik) => {
        let yk = 1;
        return "boost" === Ik.lookCurve ? yk = kk.update(Fk, Ik, ik) : kk.reset(),
          function(kk, Fk) {
            let {
              yawBoost: Ik = 1,
              aiming: Tk = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const ik = (0, Xk.i)((0, Xk.j)(kk, Fk.lookDeadzone), Fk.lookCurve),
              yk = 220 * Math.PI / 180,
              lk = Tk ? Fk.aimLookSensitivity / 100 : 1,
              ak = Fk.lookSensitivityX / 100 * lk,
              qk = Fk.lookSensitivityY / 100 * lk;
            return {
              yawRadPerSec: ik.x * yk * ak * Ik * (Fk.invertLookX ? -1 : 1),
              pitchRadPerSec: ik.y * yk * .7 * qk * (Fk.invertLookY ? -1 : 1)
            }
          }(Fk, Ik, {
            yawBoost: yk,
            aiming: Tk
          })
      },
      yk = (kk, Fk) => {
        const Ik = Math.max(0, Math.min(250, Fk)) / 1e3;
        return {
          JG: kk.yawRadPerSec * Ik,
          xG: kk.pitchRadPerSec * Ik
        }
      },
      lk = (kk, Fk) => Fk ? {
        move: kk.rightStick,
        look: kk.leftStick
      } : {
        move: kk.leftStick,
        look: kk.rightStick
      },
      ak = (kk, Fk) => {
        const Ik = (0, Xk.j)(kk, Fk),
          Tk = Math.min(1, Math.hypot(Ik.x, Ik.y));
        return {
          magnitude: Tk,
          speed: Math.min(1, Tk / .8),
          headingOffset: 0 === Tk ? 0 : Math.atan2(Ik.x, -Ik.y),
          x: Ik.x,
          y: Ik.y
        }
      },
      qk = (kk, Fk) => {
        let {
          sprintPressed: Ik,
          magnitude: Xk,
          autoSprint: Tk,
          nowMs: ik
        } = Fk;
        const yk = Ik ? ik : kk.latchedAtMs,
          lk = (kk => {
            let {
              running: Fk,
              magnitude: Ik,
              sprintPressed: Xk,
              autoSprint: Tk
            } = kk;
            return !(Ik < .5) && (!!Xk || !!(Tk && Ik >= .9) || Fk)
          })({
            running: kk.running,
            magnitude: Xk,
            sprintPressed: ik - yk <= 1e3,
            autoSprint: Tk
          });
        return {
          running: lk,
          latchedAtMs: lk ? -1 / 0 : yk
        }
      },
      Lk = (kk, Fk, Ik) => Ik && kk.gyroAiming && "button" === kk.gyroActivation && kk.gyroButton !== Fk ? kk.gyroButton : null,
      tk = (kk, Fk) => Fk ? {
        ...kk,
        isHeld: Ik => Ik !== Fk && kk.isHeld(Ik),
        wasPressed: Ik => Ik !== Fk && kk.wasPressed(Ik),
        wasReleased: Ik => Ik !== Fk && kk.wasReleased(Ik),
        value: Ik => Ik === Fk ? 0 : kk.value(Ik)
      } : kk
  },
  40577: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Tk,
      h: () => Xk
    });
    const Xk = kk => {
      let {
        mode: Fk,
        sneakHeld: Ik,
        sneakPressed: Xk,
        sneakTogglePressed: Tk,
        descending: ik,
        canCrouch: yk,
        toggled: lk
      } = kk;
      return yk ? ik ? {
        crouchHeld: Ik,
        toggled: !1
      } : "hold" === Fk ? {
        crouchHeld: Ik,
        toggled: Tk ? !lk : lk
      } : {
        crouchHeld: !1,
        toggled: Xk || Tk ? !lk : lk
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class Tk {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(kk, Fk) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = Fk, this.graceEndsMs = Fk + 500);
        const Ik = Fk < this.graceEndsMs;
        return Ik && (kk.sneakPressed || kk.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, Fk + 300))), kk.sneakHeld ? Ik && kk.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: kk.sneakHeld && !this.ignoringHeld,
          sneakPressed: kk.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: kk.sneakTogglePressed && !Ik
        }
      }
    }
  },
  40546: (kk, Fk, Ik) => {
    Ik(8833)
  },
  40554: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Pk
    });
    var Xk = Ik(34),
      Tk = Ik(8772),
      ik = Ik(8784),
      yk = Ik(8152),
      lk = Ik(8180),
      ak = Ik(8161),
      qk = Ik(40560),
      Lk = Ik(40567),
      tk = Ik(8194),
      Zk = Ik(8142),
      jk = Ik(8686),
      ek = Ik(8800);
    const wk = [{
        isOpen: Tk.g,
        openButton: () => (0, yk.j)("emoteWheel"),
        aim: kk => {
          Xk.g.GL("emoteWheelPadAim", kk)
        },
        commit: kk => {
          Xk.g.GL("requestEmoteWheelPadCommit", kk)
        },
        close: () => {
          Xk.g.GL("requestEmoteWheelClose")
        }
      }, {
        isOpen: jk.e,
        openButton: () => (0, yk.j)("chat"),
        aim: kk => {
          Xk.g.GL(jk.g, kk)
        },
        commit: kk => {
          Xk.g.GL(jk.n, kk)
        },
        close: () => {
          Xk.g.GL(jk.j)
        },
        keptOpenBy: [Lk.d]
      }, {
        isOpen: ek.q,
        openButton: () => (0, yk.j)("actionButton"),
        aim: kk => {
          Xk.g.GL(ek.d, kk)
        },
        commit: kk => {
          Xk.g.GL(ek.h, kk)
        },
        close: () => {
          Xk.g.GL(ek.f)
        }
      }],
      Hk = () => {
        var kk;
        return null !== (kk = wk.find((kk => kk.isOpen()))) && void 0 !== kk ? kk : null
      },
      Jk = kk => (0, yk.O)(kk.openButton()),
      xk = (kk, Fk) => !(0, Zk.H)(kk.frame.values, Fk),
      Pk = () => {
        let kk = null,
          Fk = !1,
          Ik = !1;
        return lk.b.register({
          name: "wheel",
          isActive: () => null !== Hk(),
          peek: () => {
            const kk = Hk();
            return kk && Jk(kk) ? null : {
              over: "gameplay",
              stick: (0, ak.k)().swapSticks ? "right" : "left"
            }
          },
          onFrame: Xk => {
            var Tk;
            const Zk = Hk();
            if (!Zk) return;
            if (null !== (0, tk.d)([...Lk.i, ...null !== (Tk = Zk.keptOpenBy) && void 0 !== Tk ? Tk : []])) return void Zk.close();
            const jk = Zk.openButton(),
              ek = (0, qk.h)(Xk.frame, (0, ak.k)().swapSticks),
              wk = Jk(Zk) ? ek.move : ek.look;
            kk !== Zk ? (kk = Zk, Fk = !xk(Xk, jk) || Math.hypot(wk.x, wk.y) >= ik.I, Ik = !1) : Ik && (Ik = !1, xk(Xk, jk) && (Fk = !1)), Zk.aim(wk);
            const Pk = (0, yk.j)("menuConfirm"),
              Kk = (0, yk.j)("menuBack");
            return Xk.wasPressed(Kk) ? (lk.b.consumeButton(Kk), void Zk.close()) : Xk.wasPressed(Pk) || Xk.wasPressed(jk) ? (lk.b.consumeButton(Pk), lk.b.consumeButton(jk), void Zk.commit(!1)) : void(Fk && xk(Xk, jk) && (Fk = !1, Zk.commit(!0)))
          },
          onDeactivate: () => {
            Ik = null !== kk && Hk() === kk, Ik || (kk = null, Fk = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
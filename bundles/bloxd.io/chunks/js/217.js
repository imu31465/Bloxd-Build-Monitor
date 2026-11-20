export const id = 217;
export const ids = [217];
export const modules = {
  36693: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => bu,
      g: () => du
    });
    var Eu = yu(4066),
      Ku = yu(1400),
      Qu = yu(64),
      mu = yu(6268),
      Ju = yu(4061),
      Nu = yu(1250),
      Xu = yu(1855),
      Vu = yu(1825),
      ru = yu(1408),
      Bu = yu(1170),
      xu = yu(36702),
      Su = yu(1035),
      pu = yu.n(Su),
      Tu = yu(1269),
      Wu = yu(1043),
      ju = yu(1247),
      Hu = yu(1079);
    const du = "SleepingOverlay";

    function bu() {
      const {
        t: uu
      } = (0, Bu.E)(), [Ru, yu] = (0, Qu.useState)(!1), [Su, bu] = (0, Qu.useState)(null), [ku, eu] = (0, Qu.useState)(1), [Au, Du] = (0, Qu.useState)(!1), [Mu, Iu] = (0, Qu.useState)(!1), Gu = (0, Qu.useRef)(0), Uu = (0, Qu.useRef)(!1), nu = (0, Qu.useRef)(!1), su = (0, Qu.useRef)(), tu = (0, Qu.useRef)(null);

      function lu() {
        const uu = null !== Su && void 0 !== Su ? Su : "Rested Speed";
        Xu.gameBridge.send("wakeUp", Mu ? uu : null), tu.current = null, yu(!1), bu(null), eu(1), Du(!1), Iu(!1)
      }

      function gu() {
        return !Au && (lu(), !0)
      }
      return (0, Ku.e)("PlayerPhysicsTypeUpdate", (uu => {
        uu !== tu.current && (tu.current = uu, uu === mu.n.SLEEPING ? (nu.current || (Gu.current = Xu.gameBridge.lookup("cameraZoom", null), nu.current = !0), Uu.current = !0, Xu.gameBridge.send("setCameraZoom", 3), yu(!0), eu(function() {
          for (const uu of Xu.gameBridge.lookup("blocksStandingOn", null)) {
            if (xu.d.leafBeds.includes(uu)) return console.log(`Found leaf bed: ${uu}`), 1;
            if (xu.d.woolBeds.includes(uu)) return console.log(`Found woold bed: ${uu}`), 2;
            if (xu.d.strongBeds.includes(uu)) return console.log(`Found strong bed ${uu}`), 3
          }
          return 1
        }())) : (nu.current = !1, yu(!1), bu(null), eu(1)))
      })), (0, Qu.useEffect)((() => () => {
        (0, Nu.m)(du)
      }), []), (0, Qu.useEffect)((() => {
        Ru ? (0, Nu.o)(du) : ((0, Nu.m)(du), Uu.current && (Xu.gameBridge.send("setCameraZoom", Gu.current), Uu.current = !1))
      }), [Ru]), (0, ju.t)("overlay", su, gu, Ru), (0, Hu.jsx)(Eu.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: Ru,
        timeout: 300,
        nodeRef: su,
        unmountOnExit: !0,
        children: (0, Hu.jsx)("div", {
          ref: su,
          onClick: uu => {
            gu() && uu.stopPropagation()
          },
          children: (0, Hu.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Hu.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: Ju.g.map((Ru => (0, Hu.jsxs)(Cu, {
                restedEffect: Ru,
                BJ: Su,
                setChosenRestedEffect: bu,
                children: [(0, Hu.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Hu.jsx)(Vu.d, {
                    text: [{
                      icon: Ru
                    }]
                  }), Ju.f[Ru].shortName]
                }), (0, Hu.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: uu(Ju.f[Ru].description, {
                    time: Ju.f[Ru].effectLevelDurations[ku] / 6e4
                  })
                })]
              }, Ru)))
            }), (0, Hu.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Hu.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Hu.jsxs)(ru.e, {
                className: "SleepingOverlayWakeUpButton",
                onClick: uu => {
                  Mu ? lu() : (Du(!0), (0, Tu.jb)((() => {
                    Du(!1), Iu(!0)
                  }), !0)), uu.stopPropagation()
                },
                loading: Au,
                children: [!Mu && (0, Hu.jsxs)(Hu.Fragment, {
                  children: [(0, Hu.jsx)(Wu.c, {
                    name: "film"
                  }), " ", uu("classicGame:watchAdToGetRestedPerk")]
                }), Mu && uu("classicGame:wakeUp")]
              }), (0, Hu.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Hu.jsx)("div", {
                  className: pu()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === ku
                  }),
                  children: (0, Hu.jsx)(Vu.d, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Hu.jsx)("div", {
                  className: pu()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === ku
                  }),
                  children: (0, Hu.jsx)(Vu.d, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Hu.jsx)("div", {
                  className: pu()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === ku
                  }),
                  children: (0, Hu.jsx)(Vu.d, {
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
    const Cu = (0, Qu.memo)((function(uu) {
      let {
        children: Ru,
        restedEffect: yu,
        BJ: Eu,
        setChosenRestedEffect: Ku
      } = uu;
      return yu === Eu ? (0, Hu.jsx)(ru.l, {
        onClick: uu => {
          uu.stopPropagation()
        },
        children: Ru
      }) : (0, Hu.jsx)(ru.f, {
        onClick: uu => {
          Ku(yu), uu.stopPropagation()
        },
        children: Ru
      })
    }))
  },
  40145: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => ou
    });
    var Eu = yu(27),
      Ku = yu(34),
      Qu = yu(4091),
      mu = yu(330),
      Ju = yu(1583),
      Nu = yu(7912),
      Xu = yu(4096),
      Vu = yu(8439),
      ru = yu(7940),
      Bu = yu(7920),
      xu = yu(7949),
      Su = yu(1621),
      pu = yu(7952),
      Tu = yu(8405),
      Wu = yu(8531),
      ju = yu(8445),
      Hu = yu(8539),
      du = yu(1855),
      bu = yu(7901),
      Cu = yu(8465),
      ku = yu(8456),
      eu = yu(8441);
    class Au {
      constructor() {
        this.lostAtMs = null
      }
      update(uu, Ru) {
        return uu ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= Ru, Ru - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class Du {
      constructor(uu, Ru) {
        this.press = uu, this.release = Ru, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(uu, Ru, yu, Eu) {
        if (uu && null === this.downAtMs) return this.downAtMs = yu, this.latched = Eu, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? uu && this.end() : !Ru && yu - this.downAtMs >= 40 && this.end())
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
        const uu = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(uu)
      }
    }
    const Mu = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      Iu = uu => {
        let Ru = null;
        const yu = new eu.d,
          Eu = () => {
            Ru && (((uu, Ru, yu) => {
              switch (yu.kind) {
                case "reload":
                  return void Ru.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void Ru.specialActionUp(yu.action);
                case "customButton":
                  return void du.gameBridge.send("pressCustomButton", {
                    id: yu.id,
                    down: !1
                  });
                case "touchButton":
                  uu.pressTouchButton(!1)
              }
            })(uu, Ru.bodies, Ru.action), Ru = null)
          },
          Qu = (yu, Ku, Qu, mu) => {
            Eu(), Ru = {
              action: Ku,
              bodies: yu,
              heldBy: Qu,
              atMs: mu
            }, ((uu, Ru, yu) => {
              switch (yu.kind) {
                case "reload":
                  return Ru.reloadGun(), void Ru.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void Ru.specialActionDown(yu.action);
                case "customButton":
                  return void du.gameBridge.send("pressCustomButton", {
                    id: yu.id,
                    down: !0
                  });
                case "touchButton":
                  uu.pressTouchButton(!0)
              }
            })(uu, yu, Ku)
          };
        return {
          update: (mu, Ju, Xu, Vu) => {
            var Bu;
            const xu = (0, Cu.l)(uu.contextActionInputs()),
              Su = null !== (Bu = xu[0]) && void 0 !== Bu ? Bu : Mu;
            (0, ku.d)((0, Cu.f)(Su) ? Su : null);
            const pu = (0, Cu.b)(xu);
            (0, ku.f)(pu);
            const Tu = (0, Nu.j)("actionButton");
            if (pu) {
              const uu = yu.update(Ju.wasPressed(Tu), Ju.isHeld(Tu), Xu, Vu);
              "tap" === uu ? Qu(mu, Su, [Tu], Xu) : "hold" === uu && (ru.d.consumeButton(Tu), Ku.k.Op(Hu.m, xu))
            } else yu.release(), Ju.wasPressed(Tu) && Qu(mu, Su, [Tu], Xu);
            Ru && Xu - Ru.atMs >= 40 && !Ru.heldBy.some((uu => (0, bu.K)(Ju.frame.values, uu))) && Eu()
          },
          pressPicked: (uu, Ru) => {
            Qu(uu, Ru, [(0, Nu.j)("menuConfirm"), (0, Nu.j)("actionButton")], performance.now())
          },
          release: () => {
            yu.release(), Eu(), (0, ku.d)(null), (0, ku.f)(!1)
          }
        }
      };
    var Gu = yu(7895);
    var Uu = yu(40141),
      nu = yu(8475),
      su = yu(7935),
      tu = yu(8585);
    var lu = yu(40132),
      gu = yu(8594),
      cu = yu(40152),
      Lu = yu(8566),
      zu = yu(8482),
      Fu = yu(8486),
      wu = yu(8489),
      Zu = yu(8410);
    const hu = () => Zu.e[(0, Bu.g)().tapHoldTime].wheelMs,
      Pu = () => ((0, Vu.d)(), new Event("controllerMenuKey")),
      iu = (uu, Ru, yu) => new Du((() => {
        const yu = uu.bodies();
        return {
          bodies: yu,
          press: Ru(yu)
        }
      }), (uu => {
        let {
          bodies: Ru,
          press: Eu
        } = uu;
        yu(Ru, Eu)
      })),
      Yu = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      ou = uu => {
        const Ru = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let yu = Yu;
        const Vu = new cu.d,
          du = Ku.k.subscribe("appManagerUpdated|activeInputDevice", (Ru => {
            uu.deviceChanged(Ru)
          }));
        let Cu = null,
          ku = 0;
        const Du = () => {
          Cu = null, (0, zu.e)(null)
        };
        let Mu = !1;
        const ou = new Au,
          qu = uu.look,
          Ou = new eu.d,
          vu = new eu.d,
          au = Iu(uu),
          fu = Ku.k.subscribe(Hu.q, (Ru => {
            au.pressPicked(uu.bodies(), Ru)
          })),
          uR = iu(uu, (uu => uu.primaryFireDown()), ((uu, Ru) => {
            uu.primaryFireUp(Ru)
          })),
          RR = iu(uu, (uu => uu.altFireDown()), ((uu, Ru) => {
            uu.altFireUp(Ru)
          }));
        let yR = !1,
          ER = !1,
          KR = !1;
        const QR = (0, Tu.e)(bu.cb),
          mR = (0, Tu.e)(bu.cb),
          JR = new eu.d;
        let NR = !1;
        const XR = () => {
            QR.reset(), mR.reset(), JR.release(), (0, wu.d)(!1), qu.release(), uR.cancel(), (0, Fu.e)(!1), RR.cancel(), au.release(), Ou.release(), vu.release(), Du()
          },
          VR = function() {
            let Eu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            XR(), ER = !1, Eu || (yR = !1, yu = Yu, Object.assign(Ru, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), uu.stopMoving())
          },
          rR = function(Eu, Ku, Qu) {
            let mu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const Ju = (0, Bu.g)(),
              Xu = (0, lu.f)(Ku, Ju.moveDeadzone),
              ru = (0, Nu.j)("sprint");
            yu = (0, lu.r)(yu, {
              sprintPressed: Eu.wasPressed(ru),
              magnitude: Xu.magnitude,
              autoSprint: Ju.autoSprint,
              nowMs: Qu
            }), Ru.running = yu.running, Ru.sprintHeld = Eu.isHeld(ru), Ru.x = Xu.x, Ru.y = Xu.y, Ru.magnitude = Xu.speed, Ru.headingOffset = Xu.headingOffset, yR = Xu.magnitude > 0;
            const xu = (0, Nu.j)("jump");
            if (Ru.jumpHeld = Eu.isHeld(xu), Ru.jumpPressed = Eu.wasPressed(xu), Ru.jumpPressed && uu.bodies().jumpDown(), mu) return void uu.move(Ru, null);
            const Su = (0, Nu.j)("sneak"),
              pu = Vu.filter({
                sneakHeld: Eu.isHeld(Su),
                sneakPressed: Eu.wasPressed(Su),
                sneakTogglePressed: Eu.wasPressed((0, Nu.j)("sneakToggle"))
              }, Qu);
            uu.move(Ru, {
              ...pu,
              mode: Ju.sneakMode
            })
          },
          BR = (uu, Ru) => {
            const yu = (0, Nu.j)("chat");
            if ("off" === (0, Bu.g)().quickChat) return void(uu.wasPressed(yu) && (ru.d.consumeButton(yu), Ku.k.Op(nu.b)));
            const Eu = Ou.update(uu.wasPressed(yu), uu.isHeld(yu), Ru, hu());
            "tap" === Eu || "hold" === Eu && null === (0, Su.c)() ? Ku.k.Op(nu.b) : "hold" === Eu && (ru.d.consumeButton(yu), Ku.k.Op(ju.r))
          },
          xR = (Ru, yu) => {
            ((uu, Ru) => {
              const yu = (0, Wu.e)(),
                Eu = (0, Nu.j)("emoteWheel");
              if ("wheel" === (0, Bu.g)().emoteButton) return uu.wasPressed(Eu) && (ru.d.consumeButton(Eu), Ku.k.Op("requestEmoteWheelPadOpen", !0)), (0, Wu.e)() !== yu;
              const Qu = vu.update(uu.wasPressed(Eu), uu.isHeld(Eu), Ru, hu());
              return "tap" === Qu ? Ku.k.Op("requestEmoteRepeatLast") : "hold" === Qu && (ru.d.consumeButton(Eu), Ku.k.Op("requestEmoteWheelPadOpen", !1)), (0, Wu.e)() !== yu
            })(Ru, yu) || BR(Ru, yu), Ru.wasPressed((0, Nu.j)("inventory")) && (ru.d.consumeButton((0, Nu.j)("inventory")), (0, Ju.y)(Pu(), "inventory", uu.hasFullInventory())), Ru.wasPressed((0, Nu.j)("pause")) && (ru.d.consumeButton((0, Nu.j)("pause")), (0, Xu.e)() === mu.s.SOCIAL ? (0, Ju.u)(Pu(), mu.s.SOCIAL) : (0, Ju.k)(Pu())), Ru.wasPressed((0, Nu.j)("leaderboard")) && !(0, Qu.f)() && (ru.d.consumeButton((0, Nu.j)("leaderboard")), ((uu, Ru) => {
              if ("shop" === (0, su.c)()) return Ku.k.Op(tu.p), void(0, Ju.u)(uu, mu.s.SHOP, !0);
              (0, Ju.u)(uu, mu.s.LOBBY_LEADERBOARD, Ru)
            })(Pu(), uu.hasLobbyLeaderboard()))
          },
          SR = (Ru, yu) => {
            const Eu = uu.bodies();
            ((Ru, yu) => {
              const Eu = (0, Nu.j)("attack"),
                Ku = Ru.wasPressed(Eu);
              Ku && !uR.isLatched() && (Mu = uu.targetsBlock()), uR.update(Ku, Ru.isHeld(Eu), yu, "toggle" === (0, Bu.g)().attackMode), uR.isLatched() && Mu ? ou.update(uu.targetsBlock(), yu) && uR.unlatch() : ou.reset(), (0, Fu.e)(uR.isLatched())
            })(Ru, yu), RR.update(Ru.wasPressed((0, Nu.j)("use")), Ru.isHeld((0, Nu.j)("use")), yu, !1), QR.update(Ru.isHeld((0, Nu.j)("hotbarPrevious")), yu) && uu.scrollHotbar(-1), mR.update(Ru.isHeld((0, Nu.j)("hotbarNext")), yu) && uu.scrollHotbar(1), ((Ru, yu, Eu) => {
              const Ku = (0, Nu.j)("perspective"),
                Qu = (0, Nu.j)("pickBlock"),
                mu = uu.pickBlockAllowed();
              (0, wu.d)(mu && !NR && uu.targetsBlock());
              const Ju = () => {
                yu.pickBlock() && (NR = !0, (0, wu.d)(!1))
              };
              if (!mu || Qu !== Ku) return JR.release(), Ru.wasPressed(Ku) && yu.swapCameraZoom(), void(mu && Ru.wasPressed(Qu) && Ju());
              const Xu = JR.update(Ru.wasPressed(Qu), Ru.isHeld(Qu), Eu, hu());
              "tap" === Xu ? Ju() : "hold" === Xu && yu.swapCameraZoom()
            })(Ru, Eu, yu), ((Ru, yu, Eu) => {
              const Ku = (0, Nu.j)("drop");
              if (Ru.wasPressed(Ku)) {
                yu.dropItem(!1);
                const uu = (0, Bu.g)();
                "off" !== uu.buttonRepeat && (Cu = Eu, ku = Zu.e[uu.tapHoldTime].dropStackMs, (0, zu.e)(ku))
              }
              null !== Cu && (!Ru.isHeld(Ku) || uu.selectedSlotEmpty() ? Du() : Eu - Cu >= ku && (Du(), yu.dropItem(!0)))
            })(Ru, Eu, yu), au.update(Eu, Ru, yu, hu()), xR(Ru, yu)
          },
          pR = ru.d.register({
            name: "gameplay",
            isActive: () => {
              const Ru = yR && "keyboardMouse" === Eu.d.get("activeInputDevice") && !(0, xu.y)(),
                yu = (0, xu.h)() ? [Uu.d] : [];
              return ((0, xu.h)() || Ru) && (0, pu.e)(yu) && uu.hasPlayer()
            },
            onFrame: uu => {
              const Ru = performance.now(),
                yu = (0, Bu.g)(),
                Eu = (0, lu.t)(uu, (0, lu.m)(yu, (0, Nu.j)("pause"), (0, gu.d)().isSupported())),
                Ku = (0, lu.j)(Eu, yu.swapSticks);
              return (0, xu.h)() ? (ER = !1, (0, pu.e)() ? (KR = !1, qu.update(Ku.look, yu, Eu.isHeld((0, Nu.j)("use"))), rR(Eu, Ku.move, Ru), void SR(Eu, Ru)) : (KR || (KR = !0, Vu.lostToPadScreen(), VR()), void BR(Eu, Ru))) : (ER || (XR(), ER = !0), void rR(Eu, Ku.move, Ru))
            },
            onDeactivate: uu => {
              (0, xu.h)() && Vu.lostToPadScreen(), VR(uu)
            },
            onPeekFrame: Ru => {
              (0, xu.h)() && (0, pu.e)(Uu.h) && uu.hasPlayer() ? rR(Ru, (0, lu.j)(Ru, (0, Bu.g)().swapSticks).move, performance.now(), !0) : VR()
            }
          }),
          TR = (0, Uu.g)(uu),
          WR = (() => {
            const uu = Ku.k.subscribe(Gu.b, (uu => {
              !uu && (0, xu.h)() && "inGame" === Eu.d.get("gameState") && Ku.k.Op("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              Ku.k.unsubscribe(uu)
            }
          })();
        return () => {
          VR(), uu.uninstall(), (0, Lu.c)(!1), (0, wu.d)(!1), Ku.k.unsubscribe(du), Ku.k.unsubscribe(fu), pR(), TR(), WR(), qu.uninstall()
        }
      }
  },
  40141: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Su,
      g: () => Tu,
      h: () => xu
    });
    var Eu = yu(1250),
      Ku = yu(4091),
      Qu = yu(8510),
      mu = yu(36693),
      Ju = yu(1652),
      Nu = yu(1161),
      Xu = yu(7952),
      Vu = yu(8445),
      ru = yu(8539);
    const Bu = {
        emoteWheel: Qu.i,
        quickChatWheel: Vu.e,
        actionWheel: ru.t
      },
      xu = Object.keys(Bu),
      Su = "dead",
      pu = uu => (0, Eu.k)().includes(uu),
      Tu = uu => {
        const Ru = [(0, Xu.l)(Su, (() => uu.hasPlayer() && uu.isPlayerDead())), (0, Xu.l)("sleeping", (() => pu(mu.g))), (0, Xu.l)("turnstile", (() => pu(Nu.f))), (0, Xu.l)("videoAd", Ju.h), (0, Xu.l)("replay", (() => (0, Ku.f)() || uu.isReplayMode())), (0, Xu.l)("freeCamera", (() => uu.isFreeCameraOn())), ...Object.entries(Bu).map((uu => {
          let [Ru, yu] = uu;
          return (0, Xu.l)(Ru, yu)
        }))];
        return () => {
          for (const uu of Ru) uu()
        }
      }
  },
  40132: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      f: () => Nu,
      j: () => Ju,
      m: () => Vu,
      n: () => mu,
      p: () => Qu,
      r: () => Xu,
      t: () => ru
    });
    var Eu = yu(7901);
    class Ku {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(uu, Ru, yu) {
        const Ku = (0, Eu.n)(uu, Ru.lookDeadzone);
        if (Math.hypot(Ku.x, Ku.y) < .9 || Math.abs(Ku.x) < Math.abs(Ku.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = yu);
        const Qu = (mu = Ru.lookSensitivityX, Math.min(1, 100 / mu));
        var mu;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (yu - this.fullTiltSinceMs - 250 * Qu) / (200 * Qu)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const Qu = (uu, Ru, yu, Ku, Qu) => {
        let mu = 1;
        return "boost" === yu.lookCurve ? mu = uu.update(Ru, yu, Qu) : uu.reset(),
          function(uu, Ru) {
            let {
              yawBoost: yu = 1,
              aiming: Ku = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const Qu = (0, Eu.j)((0, Eu.n)(uu, Ru.lookDeadzone), Ru.lookCurve),
              mu = 220 * Math.PI / 180,
              Ju = Ku ? Ru.aimLookSensitivity / 100 : 1,
              Nu = Ru.lookSensitivityX / 100 * Ju,
              Xu = Ru.lookSensitivityY / 100 * Ju;
            return {
              yawRadPerSec: Qu.x * mu * Nu * yu * (Ru.invertLookX ? -1 : 1),
              pitchRadPerSec: Qu.y * mu * .7 * Xu * (Ru.invertLookY ? -1 : 1)
            }
          }(Ru, yu, {
            yawBoost: mu,
            aiming: Ku
          })
      },
      mu = (uu, Ru) => {
        const yu = Math.max(0, Math.min(250, Ru)) / 1e3;
        return {
          RD: uu.yawRadPerSec * yu,
          mD: uu.pitchRadPerSec * yu
        }
      },
      Ju = (uu, Ru) => Ru ? {
        move: uu.rightStick,
        look: uu.leftStick
      } : {
        move: uu.leftStick,
        look: uu.rightStick
      },
      Nu = (uu, Ru) => {
        const yu = (0, Eu.n)(uu, Ru),
          Ku = Math.min(1, Math.hypot(yu.x, yu.y));
        return {
          magnitude: Ku,
          speed: Math.min(1, Ku / .8),
          headingOffset: 0 === Ku ? 0 : Math.atan2(yu.x, -yu.y),
          x: yu.x,
          y: yu.y
        }
      },
      Xu = (uu, Ru) => {
        let {
          sprintPressed: yu,
          magnitude: Eu,
          autoSprint: Ku,
          nowMs: Qu
        } = Ru;
        const mu = yu ? Qu : uu.latchedAtMs,
          Ju = (uu => {
            let {
              running: Ru,
              magnitude: yu,
              sprintPressed: Eu,
              autoSprint: Ku
            } = uu;
            return !(yu < .5) && (!!Eu || !!(Ku && yu >= .9) || Ru)
          })({
            running: uu.running,
            magnitude: Eu,
            sprintPressed: Qu - mu <= 1e3,
            autoSprint: Ku
          });
        return {
          running: Ju,
          latchedAtMs: Ju ? -1 / 0 : mu
        }
      },
      Vu = (uu, Ru, yu) => yu && uu.gyroAiming && "button" === uu.gyroActivation && uu.gyroButton !== Ru ? uu.gyroButton : null,
      ru = (uu, Ru) => Ru ? {
        ...uu,
        isHeld: yu => yu !== Ru && uu.isHeld(yu),
        wasPressed: yu => yu !== Ru && uu.wasPressed(yu),
        wasReleased: yu => yu !== Ru && uu.wasReleased(yu),
        value: yu => yu === Ru ? 0 : uu.value(yu)
      } : uu
  },
  40152: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku,
      h: () => Eu
    });
    const Eu = uu => {
      let {
        mode: Ru,
        sneakHeld: yu,
        sneakPressed: Eu,
        sneakTogglePressed: Ku,
        descending: Qu,
        canCrouch: mu,
        toggled: Ju
      } = uu;
      return mu ? Qu ? {
        crouchHeld: yu,
        toggled: !1
      } : "hold" === Ru ? {
        crouchHeld: yu,
        toggled: Ku ? !Ju : Ju
      } : {
        crouchHeld: !1,
        toggled: Eu || Ku ? !Ju : Ju
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class Ku {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(uu, Ru) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = Ru, this.graceEndsMs = Ru + 500);
        const yu = Ru < this.graceEndsMs;
        return yu && (uu.sneakPressed || uu.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, Ru + 300))), uu.sneakHeld ? yu && uu.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: uu.sneakHeld && !this.ignoringHeld,
          sneakPressed: uu.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: uu.sneakTogglePressed && !yu
        }
      }
    }
  },
  40125: (uu, Ru, yu) => {
    yu(8594)
  },
  40127: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Hu
    });
    var Eu = yu(34),
      Ku = yu(8510),
      Qu = yu(8525),
      mu = yu(7912),
      Ju = yu(7940),
      Nu = yu(7920),
      Xu = yu(40132),
      Vu = yu(40141),
      ru = yu(7952),
      Bu = yu(7901),
      xu = yu(8445),
      Su = yu(8539);
    const pu = [{
        isOpen: Ku.l,
        openButton: () => (0, mu.j)("emoteWheel"),
        aim: uu => {
          Eu.k.Op("emoteWheelPadAim", uu)
        },
        commit: uu => {
          Eu.k.Op("requestEmoteWheelPadCommit", uu)
        },
        close: () => {
          Eu.k.Op("requestEmoteWheelClose")
        }
      }, {
        isOpen: xu.e,
        openButton: () => (0, mu.j)("chat"),
        aim: uu => {
          Eu.k.Op(xu.f, uu)
        },
        commit: uu => {
          Eu.k.Op(xu.n, uu)
        },
        close: () => {
          Eu.k.Op(xu.j)
        },
        keptOpenBy: [Vu.d]
      }, {
        isOpen: Su.t,
        openButton: () => (0, mu.j)("actionButton"),
        aim: uu => {
          Eu.k.Op(Su.d, uu)
        },
        commit: uu => {
          Eu.k.Op(Su.k, uu)
        },
        close: () => {
          Eu.k.Op(Su.g)
        }
      }],
      Tu = () => {
        var uu;
        return null !== (uu = pu.find((uu => uu.isOpen()))) && void 0 !== uu ? uu : null
      },
      Wu = uu => (0, mu.H)(uu.openButton()),
      ju = (uu, Ru) => !(0, Bu.K)(uu.frame.values, Ru),
      Hu = () => {
        let uu = null,
          Ru = !1,
          yu = !1;
        return Ju.d.register({
          name: "wheel",
          isActive: () => null !== Tu(),
          peek: () => {
            const uu = Tu();
            return uu && Wu(uu) ? null : {
              over: "gameplay",
              stick: (0, Nu.g)().swapSticks ? "right" : "left"
            }
          },
          onFrame: Eu => {
            var Ku;
            const Bu = Tu();
            if (!Bu) return;
            if (null !== (0, ru.c)([...Vu.h, ...null !== (Ku = Bu.keptOpenBy) && void 0 !== Ku ? Ku : []])) return void Bu.close();
            const xu = Bu.openButton(),
              Su = (0, Xu.j)(Eu.frame, (0, Nu.g)().swapSticks),
              pu = Wu(Bu) ? Su.move : Su.look;
            uu !== Bu ? (uu = Bu, Ru = !ju(Eu, xu) || Math.hypot(pu.x, pu.y) >= Qu.y, yu = !1) : yu && (yu = !1, ju(Eu, xu) && (Ru = !1)), Bu.aim(pu);
            const Hu = (0, mu.j)("menuConfirm"),
              du = (0, mu.j)("menuBack");
            return Eu.wasPressed(du) ? (Ju.d.consumeButton(du), void Bu.close()) : Eu.wasPressed(Hu) || Eu.wasPressed(xu) ? (Ju.d.consumeButton(Hu), Ju.d.consumeButton(xu), void Bu.commit(!1)) : void(Ru && ju(Eu, xu) && (Ru = !1, Bu.commit(!0)))
          },
          onDeactivate: () => {
            yu = null !== uu && Tu() === uu, yu || (uu = null, Ru = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);
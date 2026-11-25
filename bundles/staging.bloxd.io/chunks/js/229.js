export const id = 229;
export const ids = [229];
export const modules = {
  37322: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Gu,
      c: () => eu
    });
    var su = ju(4437),
      Uu = ju(1499),
      Zu = ju(58),
      Xu = ju(6677),
      lu = ju(4430),
      qu = ju(1343),
      fu = ju(1986),
      Cu = ju(1964),
      bu = ju(1506),
      cu = ju(1244),
      Nu = ju(37328),
      Ou = ju(1105),
      Yu = ju.n(Ou),
      hu = ju(1362),
      Du = ju(1116),
      gu = ju(1330),
      Mu = ju(1154);
    const eu = "SleepingOverlay";

    function Gu() {
      const {
        t: uu
      } = (0, cu.A)(), [Eu, ju] = (0, Zu.useState)(!1), [Ou, Gu] = (0, Zu.useState)(null), [wu, Ju] = (0, Zu.useState)(1), [du, au] = (0, Zu.useState)(!1), [Pu, ou] = (0, Zu.useState)(!1), ku = (0, Zu.useRef)(0), mu = (0, Zu.useRef)(!1), vu = (0, Zu.useRef)(!1), Ku = (0, Zu.useRef)(), Vu = (0, Zu.useRef)(null);

      function ru() {
        const uu = null !== Ou && void 0 !== Ou ? Ou : "Rested Speed";
        fu.gameBridge.send("wakeUp", Pu ? uu : null), Vu.current = null, ju(!1), Gu(null), Ju(1), au(!1), ou(!1)
      }

      function Qu() {
        return !du && (ru(), !0)
      }
      return (0, Uu.f)("PlayerPhysicsTypeUpdate", (uu => {
        uu !== Vu.current && (Vu.current = uu, uu === Xu.v.SLEEPING ? (vu.current || (ku.current = fu.gameBridge.lookup("cameraZoom", null), vu.current = !0), mu.current = !0, fu.gameBridge.send("setCameraZoom", 3), ju(!0), Ju(function() {
          for (const uu of fu.gameBridge.lookup("blocksStandingOn", null)) {
            if (Nu.b.leafBeds.includes(uu)) return console.log(`Found leaf bed: ${uu}`), 1;
            if (Nu.b.woolBeds.includes(uu)) return console.log(`Found woold bed: ${uu}`), 2;
            if (Nu.b.strongBeds.includes(uu)) return console.log(`Found strong bed ${uu}`), 3
          }
          return 1
        }())) : (vu.current = !1, ju(!1), Gu(null), Ju(1)))
      })), (0, Zu.useEffect)((() => () => {
        (0, qu.q)(eu)
      }), []), (0, Zu.useEffect)((() => {
        Eu ? (0, qu.t)(eu) : ((0, qu.q)(eu), mu.current && (fu.gameBridge.send("setCameraZoom", ku.current), mu.current = !1))
      }), [Eu]), (0, gu.w)("overlay", Ku, Qu, Eu), (0, Mu.jsx)(su.d, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: Eu,
        timeout: 300,
        nodeRef: Ku,
        unmountOnExit: !0,
        children: (0, Mu.jsx)("div", {
          ref: Ku,
          onClick: uu => {
            Qu() && uu.stopPropagation()
          },
          children: (0, Mu.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Mu.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: lu.j.map((Eu => (0, Mu.jsxs)(pu, {
                restedEffect: Eu,
                wq: Ou,
                setChosenRestedEffect: Gu,
                children: [(0, Mu.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Mu.jsx)(Cu.d, {
                    text: [{
                      icon: Eu
                    }]
                  }), lu.i[Eu].shortName]
                }), (0, Mu.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: uu(lu.i[Eu].description, {
                    time: lu.i[Eu].effectLevelDurations[wu] / 6e4
                  })
                })]
              }, Eu)))
            }), (0, Mu.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Mu.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Mu.jsxs)(bu.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: uu => {
                  Pu ? ru() : (au(!0), (0, hu.O)((() => {
                    au(!1), ou(!0)
                  }), !0)), uu.stopPropagation()
                },
                loading: du,
                children: [!Pu && (0, Mu.jsxs)(Mu.Fragment, {
                  children: [(0, Mu.jsx)(Du.e, {
                    name: "film"
                  }), " ", uu("classicGame:watchAdToGetRestedPerk")]
                }), Pu && uu("classicGame:wakeUp")]
              }), (0, Mu.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Mu.jsx)("div", {
                  className: Yu()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === wu
                  }),
                  children: (0, Mu.jsx)(Cu.d, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Mu.jsx)("div", {
                  className: Yu()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === wu
                  }),
                  children: (0, Mu.jsx)(Cu.d, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Mu.jsx)("div", {
                  className: Yu()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === wu
                  }),
                  children: (0, Mu.jsx)(Cu.d, {
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
    const pu = (0, Zu.memo)((function(uu) {
      let {
        children: Eu,
        restedEffect: ju,
        wq: su,
        setChosenRestedEffect: Uu
      } = uu;
      return ju === su ? (0, Mu.jsx)(bu.p, {
        onClick: uu => {
          uu.stopPropagation()
        },
        children: Eu
      }) : (0, Mu.jsx)(bu.i, {
        onClick: uu => {
          Uu(ju), uu.stopPropagation()
        },
        children: Eu
      })
    }))
  },
  40819: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => nu
    });
    var su = ju(22),
      Uu = ju(24),
      Zu = ju(4452),
      Xu = ju(337),
      lu = ju(1687),
      qu = ju(8398),
      fu = ju(4460),
      Cu = ju(8922),
      bu = ju(8437),
      cu = ju(8411),
      Nu = ju(8443),
      Ou = ju(1443),
      Yu = ju(1727),
      hu = ju(8447),
      Du = ju(8876),
      gu = ju(9015),
      Mu = ju(8933),
      eu = ju(9017),
      Gu = ju(1986),
      pu = ju(8383),
      wu = ju(8961),
      Ju = ju(8956),
      du = ju(8924);
    class au {
      constructor() {
        this.lostAtMs = null
      }
      update(uu, Eu) {
        return uu ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= Eu, Eu - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class Pu {
      constructor(uu, Eu) {
        this.press = uu, this.release = Eu, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(uu, Eu, ju, su) {
        if (uu && null === this.downAtMs) return this.downAtMs = ju, this.latched = su, void(this.token = this.press(su));
        null !== this.downAtMs && (this.latched ? uu && this.end() : !Eu && ju - this.downAtMs >= 40 && this.end())
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
    const ou = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      ku = uu => {
        let Eu = null;
        const ju = new du.e,
          su = () => {
            Eu && (((uu, Eu, ju) => {
              switch (ju.kind) {
                case "reload":
                  return void Eu.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void Eu.specialActionUp(ju.action);
                case "customButton":
                  return void Gu.gameBridge.send("pressCustomButton", {
                    id: ju.id,
                    down: !1
                  });
                case "touchButton":
                  uu.pressTouchButton(!1)
              }
            })(uu, Eu.bodies, Eu.action), Eu = null)
          },
          Zu = (ju, Uu, Zu, Xu) => {
            su(), Eu = {
              action: Uu,
              bodies: ju,
              heldBy: Zu,
              atMs: Xu
            }, ((uu, Eu, ju) => {
              switch (ju.kind) {
                case "reload":
                  return Eu.reloadGun(), void Eu.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void Eu.specialActionDown(ju.action);
                case "customButton":
                  return void Gu.gameBridge.send("pressCustomButton", {
                    id: ju.id,
                    down: !0
                  });
                case "touchButton":
                  uu.pressTouchButton(!0)
              }
            })(uu, ju, Uu)
          };
        return {
          update: (Xu, lu, fu, Cu) => {
            var cu;
            const Nu = (0, wu.g)(uu.contextActionInputs()),
              Ou = null !== (cu = Nu[0]) && void 0 !== cu ? cu : ou;
            (0, Ju.e)((0, wu.e)(Ou) ? Ou : null);
            const Yu = (0, wu.d)(Nu);
            (0, Ju.g)(Yu);
            const hu = (0, qu.i)("actionButton");
            if (Yu) {
              const uu = ju.update(lu.wasPressed(hu), lu.isHeld(hu), fu, Cu);
              "tap" === uu ? Zu(Xu, Ou, [hu], fu) : "hold" === uu && (bu.d.consumeButton(hu), Uu.h.TY(eu.l, Nu))
            } else ju.release(), lu.wasPressed(hu) && Zu(Xu, Ou, [hu], fu);
            Eu && fu - Eu.atMs >= 40 && !Eu.heldBy.some((uu => (0, pu.L)(lu.frame.values, uu))) && su()
          },
          pressPicked: (uu, Eu) => {
            Zu(uu, Eu, [(0, qu.i)("menuConfirm"), (0, qu.i)("actionButton")], performance.now())
          },
          release: () => {
            ju.release(), su(), (0, Ju.e)(null), (0, Ju.g)(!1)
          }
        }
      };
    var mu = ju(8378);
    var vu = ju(40815),
      Ku = ju(8973),
      Vu = ju(8430),
      ru = ju(9047);
    var Qu = ju(40810),
      iu = ju(9056),
      Wu = ju(40826),
      Su = ju(9034),
      Iu = ju(8977),
      Fu = ju(8980),
      Bu = ju(8988),
      Lu = ju(8881),
      tu = ju(8944);
    const xu = () => Lu.b[(0, cu.f)().tapHoldTime].wheelMs,
      Tu = () => ((0, Cu.d)(), (0, tu.b)("controllerMenuKey")),
      Hu = (uu, Eu, ju) => new Pu((ju => {
        const su = uu.bodies();
        return {
          bodies: su,
          press: Eu(su, ju)
        }
      }), (uu => {
        let {
          bodies: Eu,
          press: su
        } = uu;
        ju(Eu, su)
      })),
      Au = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      nu = uu => {
        const Eu = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let ju = Au;
        const Cu = new Wu.e,
          Gu = Uu.h.subscribe("appManagerUpdated|activeInputDevice", (Eu => {
            uu.deviceChanged(Eu)
          }));
        let wu = null,
          Ju = 0;
        const Pu = () => {
          wu = null, (0, Iu.g)(null)
        };
        let ou = !1;
        const tu = new au,
          nu = uu.look,
          yu = new du.e,
          zu = new du.e,
          Ru = ku(uu),
          uE = Uu.h.subscribe(eu.n, (Eu => {
            Ru.pressPicked(uu.bodies(), Eu)
          })),
          EE = Hu(uu, ((uu, Eu) => uu.primaryFireDown(!Eu)), ((uu, Eu) => {
            uu.primaryFireUp(Eu)
          })),
          jE = Hu(uu, (uu => uu.altFireDown()), ((uu, Eu) => {
            uu.altFireUp(Eu)
          }));
        let sE = !1,
          UE = !1,
          ZE = !1;
        const XE = (0, Du.b)(pu.eb),
          lE = (0, Du.b)(pu.eb),
          qE = new du.e;
        let fE = !1;
        const CE = () => {
            XE.reset(), lE.reset(), qE.release(), (0, Bu.e)(!1), nu.release(), EE.cancel(), (0, Fu.h)(!1), jE.cancel(), Ru.release(), yu.release(), zu.release(), Pu()
          },
          bE = function() {
            let su = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            CE(), UE = !1, su || (sE = !1, ju = Au, Object.assign(Eu, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), uu.stopMoving())
          };
        let cE = !1;
        const NE = function(su, Uu, Zu) {
            let Xu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, Ou.f)()) return void(cE || (cE = !0, sE = !1, uu.stopMoving()));
            cE = !1;
            const lu = (0, cu.f)(),
              fu = (0, Qu.h)(Uu, lu.moveDeadzone),
              bu = (0, qu.i)("sprint");
            ju = (0, Qu.v)(ju, {
              sprintPressed: su.wasPressed(bu),
              magnitude: fu.magnitude,
              autoSprint: lu.autoSprint,
              nowMs: Zu
            }), Eu.running = ju.running, Eu.sprintHeld = su.isHeld(bu), Eu.x = fu.x, Eu.y = fu.y, Eu.magnitude = fu.speed, Eu.headingOffset = fu.headingOffset, sE = fu.magnitude > 0;
            const Nu = (0, qu.i)("jump");
            if (Eu.jumpHeld = su.isHeld(Nu), Eu.jumpPressed = su.wasPressed(Nu), Eu.jumpPressed && uu.bodies().jumpDown(), Xu) return void uu.move(Eu, null);
            const Yu = (0, qu.i)("sneak"),
              hu = Cu.filter({
                sneakHeld: su.isHeld(Yu),
                sneakPressed: su.wasPressed(Yu),
                sneakTogglePressed: su.wasPressed((0, qu.i)("sneakToggle"))
              }, Zu);
            uu.move(Eu, {
              ...hu,
              mode: lu.sneakMode
            })
          },
          OE = (uu, Eu) => {
            const ju = (0, qu.i)("chat");
            if ("off" === (0, cu.f)().quickChat) return void(uu.wasPressed(ju) && (bu.d.consumeButton(ju), Uu.h.TY(Ku.e)));
            const su = yu.update(uu.wasPressed(ju), uu.isHeld(ju), Eu, xu());
            "tap" === su || "hold" === su && null === (0, Yu.c)() ? Uu.h.TY(Ku.e) : "hold" === su && (bu.d.consumeButton(ju), Uu.h.TY(Mu.k))
          },
          YE = (Eu, ju) => {
            ((uu, Eu) => {
              const ju = (0, gu.e)(),
                su = (0, qu.i)("emoteWheel");
              if ("wheel" === (0, cu.f)().emoteButton) return uu.wasPressed(su) && (bu.d.consumeButton(su), Uu.h.TY("requestEmoteWheelPadOpen", !0)), (0, gu.e)() !== ju;
              const Zu = zu.update(uu.wasPressed(su), uu.isHeld(su), Eu, xu());
              return "tap" === Zu ? Uu.h.TY("requestEmoteRepeatLast") : "hold" === Zu && (bu.d.consumeButton(su), Uu.h.TY("requestEmoteWheelPadOpen", !1)), (0, gu.e)() !== ju
            })(Eu, ju) || OE(Eu, ju), Eu.wasPressed((0, qu.i)("inventory")) && (bu.d.consumeButton((0, qu.i)("inventory")), (0, lu.z)(Tu(), "inventory", uu.hasFullInventory())), Eu.wasPressed((0, qu.i)("pause")) && (bu.d.consumeButton((0, qu.i)("pause")), (0, fu.e)() === Xu.o.SOCIAL ? (0, lu.x)(Tu(), Xu.o.SOCIAL) : (0, lu.j)(Tu())), Eu.wasPressed((0, qu.i)("leaderboard")) && !(0, Zu.f)() && (bu.d.consumeButton((0, qu.i)("leaderboard")), ((uu, Eu) => {
              if ("shop" === (0, Vu.c)()) return Uu.h.TY(ru.k), void(0, lu.x)(uu, Xu.o.SHOP, !0);
              (0, lu.x)(uu, Xu.o.LOBBY_LEADERBOARD, Eu)
            })(Tu(), uu.hasLobbyTab()))
          },
          hE = (Eu, ju) => {
            const su = uu.bodies();
            ((Eu, ju) => {
              const su = (0, qu.i)("attack"),
                Uu = Eu.wasPressed(su);
              Uu && !EE.isLatched() && (ou = uu.targetsBlock()), EE.update(Uu, Eu.isHeld(su), ju, "toggle" === (0, cu.f)().attackMode), EE.isLatched() && ou ? tu.update(uu.targetsBlock(), ju) && EE.unlatch() : tu.reset(), (0, Fu.h)(EE.isLatched())
            })(Eu, ju), jE.update(Eu.wasPressed((0, qu.i)("use")), Eu.isHeld((0, qu.i)("use")), ju, !1), XE.update(Eu.isHeld((0, qu.i)("hotbarPrevious")), ju) && uu.scrollHotbar(-1), lE.update(Eu.isHeld((0, qu.i)("hotbarNext")), ju) && uu.scrollHotbar(1), ((Eu, ju, su) => {
              const Uu = (0, qu.i)("perspective"),
                Zu = (0, qu.i)("pickBlock"),
                Xu = uu.pickBlockAllowed();
              (0, Bu.e)(Xu && !fE && uu.targetsBlock());
              const lu = () => {
                ju.pickBlock() && (fE = !0, (0, Bu.e)(!1))
              };
              if (!Xu || Zu !== Uu) return qE.release(), Eu.wasPressed(Uu) && ju.swapCameraZoom(), void(Xu && Eu.wasPressed(Zu) && lu());
              const fu = qE.update(Eu.wasPressed(Zu), Eu.isHeld(Zu), su, xu());
              "tap" === fu ? lu() : "hold" === fu && ju.swapCameraZoom()
            })(Eu, su, ju), ((Eu, ju, su) => {
              const Uu = (0, qu.i)("drop");
              if (Eu.wasPressed(Uu)) {
                ju.dropItem(!1);
                const uu = (0, cu.f)();
                "off" !== uu.buttonRepeat && (wu = su, Ju = Lu.b[uu.tapHoldTime].dropStackMs, (0, Iu.g)(Ju))
              }
              null !== wu && (!Eu.isHeld(Uu) || uu.selectedSlotEmpty() ? Pu() : su - wu >= Ju && (Pu(), ju.dropItem(!0)))
            })(Eu, su, ju), Ru.update(su, Eu, ju, xu()), YE(Eu, ju)
          },
          DE = bu.d.register({
            name: "gameplay",
            isActive: () => {
              const Eu = sE && "keyboardMouse" === su.d.get("activeInputDevice") && !(0, Nu.F)(),
                ju = (0, Nu.l)() ? [vu.d] : [];
              return ((0, Nu.l)() || Eu) && (0, hu.h)(ju) && uu.hasPlayer()
            },
            onFrame: uu => {
              const Eu = performance.now(),
                ju = (0, cu.f)(),
                su = (0, Qu.z)(uu, (0, Qu.l)(ju, (0, qu.i)("pause"), (0, iu.b)().isSupported())),
                Uu = (0, Qu.k)(su, ju.swapSticks);
              return (0, Nu.l)() ? (UE = !1, (0, hu.h)() ? (ZE = !1, nu.update(Uu.look, ju, su.isHeld((0, qu.i)("use"))), NE(su, Uu.move, Eu), void hE(su, Eu)) : (ZE || (ZE = !0, Cu.lostToPadScreen(), bE()), void OE(su, Eu))) : (UE || (CE(), UE = !0), void NE(su, Uu.move, Eu))
            },
            onDeactivate: uu => {
              (0, Nu.l)() && Cu.lostToPadScreen(), bE(uu)
            },
            onPeekFrame: Eu => {
              (0, Nu.l)() && (0, hu.h)(vu.l) && uu.hasPlayer() ? NE(Eu, (0, Qu.k)(Eu, (0, cu.f)().swapSticks).move, performance.now(), !0) : bE()
            }
          }),
          gE = (0, vu.h)(uu),
          ME = (() => {
            const uu = Uu.h.subscribe(mu.c, (uu => {
              !uu && (0, Nu.l)() && "inGame" === su.d.get("gameState") && Uu.h.TY("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              Uu.h.unsubscribe(uu)
            }
          })();
        return () => {
          bE(), uu.uninstall(), (0, Su.g)(!1), (0, Bu.e)(!1), Uu.h.unsubscribe(Gu), Uu.h.unsubscribe(uE), DE(), gE(), ME(), nu.uninstall()
        }
      }
  },
  40815: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Ou,
      h: () => hu,
      l: () => Nu
    });
    var su = ju(1343),
      Uu = ju(4452),
      Zu = ju(8997),
      Xu = ju(37322),
      lu = ju(1767),
      qu = ju(1236),
      fu = ju(8447),
      Cu = ju(8933),
      bu = ju(9017);
    const cu = {
        emoteWheel: Zu.h,
        quickChatWheel: Cu.d,
        actionWheel: bu.o
      },
      Nu = Object.keys(cu),
      Ou = "dead",
      Yu = uu => (0, su.p)().includes(uu),
      hu = uu => {
        const Eu = [(0, fu.p)(Ou, (() => uu.hasPlayer() && uu.isPlayerDead())), (0, fu.p)("sleeping", (() => Yu(Xu.c))), (0, fu.p)("turnstile", (() => Yu(qu.d))), (0, fu.p)("videoAd", lu.d), (0, fu.p)("replay", (() => (0, Uu.f)() || uu.isReplayMode())), (0, fu.p)("freeCamera", (() => uu.isFreeCameraOn())), ...Object.entries(cu).map((uu => {
          let [Eu, ju] = uu;
          return (0, fu.p)(Eu, ju)
        }))];
        return () => {
          for (const uu of Eu) uu()
        }
      }
  },
  40810: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu,
      h: () => qu,
      k: () => lu,
      l: () => Cu,
      o: () => Xu,
      r: () => Zu,
      v: () => fu,
      z: () => bu
    });
    var su = ju(8383);
    class Uu {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(uu, Eu, ju) {
        const Uu = (0, su.i)(uu, Eu.lookDeadzone);
        if (Math.hypot(Uu.x, Uu.y) < .9 || Math.abs(Uu.x) < Math.abs(Uu.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = ju);
        const Zu = (Xu = Eu.lookSensitivityX, Math.min(1, 100 / Xu));
        var Xu;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (ju - this.fullTiltSinceMs - 250 * Zu) / (200 * Zu)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const Zu = (uu, Eu, ju, Uu, Zu) => {
        let Xu = 1;
        return "boost" === ju.lookCurve ? Xu = uu.update(Eu, ju, Zu) : uu.reset(),
          function(uu, Eu) {
            let {
              yawBoost: ju = 1,
              aiming: Uu = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const Zu = (0, su.f)((0, su.i)(uu, Eu.lookDeadzone), Eu.lookCurve),
              Xu = 220 * Math.PI / 180,
              lu = Uu ? Eu.aimLookSensitivity / 100 : 1,
              qu = Eu.lookSensitivityX / 100 * lu,
              fu = Eu.lookSensitivityY / 100 * lu;
            return {
              yawRadPerSec: Zu.x * Xu * qu * ju * (Eu.invertLookX ? -1 : 1),
              pitchRadPerSec: Zu.y * Xu * .7 * fu * (Eu.invertLookY ? -1 : 1)
            }
          }(Eu, ju, {
            yawBoost: Xu,
            aiming: Uu
          })
      },
      Xu = (uu, Eu) => {
        const ju = Math.max(0, Math.min(250, Eu)) / 1e3;
        return {
          hK: uu.yawRadPerSec * ju,
          VK: uu.pitchRadPerSec * ju
        }
      },
      lu = (uu, Eu) => Eu ? {
        move: uu.rightStick,
        look: uu.leftStick
      } : {
        move: uu.leftStick,
        look: uu.rightStick
      },
      qu = (uu, Eu) => {
        const ju = (0, su.i)(uu, Eu),
          Uu = Math.min(1, Math.hypot(ju.x, ju.y));
        return {
          magnitude: Uu,
          speed: Math.min(1, Uu / .8),
          headingOffset: 0 === Uu ? 0 : Math.atan2(ju.x, -ju.y),
          x: ju.x,
          y: ju.y
        }
      },
      fu = (uu, Eu) => {
        let {
          sprintPressed: ju,
          magnitude: su,
          autoSprint: Uu,
          nowMs: Zu
        } = Eu;
        const Xu = ju ? Zu : uu.latchedAtMs,
          lu = (uu => {
            let {
              running: Eu,
              magnitude: ju,
              sprintPressed: su,
              autoSprint: Uu
            } = uu;
            return !(ju < .5) && (!!su || !!(Uu && ju >= .9) || Eu)
          })({
            running: uu.running,
            magnitude: su,
            sprintPressed: Zu - Xu <= 1e3,
            autoSprint: Uu
          });
        return {
          running: lu,
          latchedAtMs: lu ? -1 / 0 : Xu
        }
      },
      Cu = (uu, Eu, ju) => ju && uu.gyroAiming && "button" === uu.gyroActivation && uu.gyroButton !== Eu ? uu.gyroButton : null,
      bu = (uu, Eu) => Eu ? {
        ...uu,
        isHeld: ju => ju !== Eu && uu.isHeld(ju),
        wasPressed: ju => ju !== Eu && uu.wasPressed(ju),
        wasReleased: ju => ju !== Eu && uu.wasReleased(ju),
        value: ju => ju === Eu ? 0 : uu.value(ju)
      } : uu
  },
  40826: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu,
      h: () => su
    });
    const su = uu => {
      let {
        mode: Eu,
        sneakHeld: ju,
        sneakPressed: su,
        sneakTogglePressed: Uu,
        descending: Zu,
        canCrouch: Xu,
        toggled: lu
      } = uu;
      return Xu ? Zu ? {
        crouchHeld: ju,
        toggled: !1
      } : "hold" === Eu ? {
        crouchHeld: ju,
        toggled: Uu ? !lu : lu
      } : {
        crouchHeld: !1,
        toggled: su || Uu ? !lu : lu
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class Uu {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(uu, Eu) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = Eu, this.graceEndsMs = Eu + 500);
        const ju = Eu < this.graceEndsMs;
        return ju && (uu.sneakPressed || uu.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, Eu + 300))), uu.sneakHeld ? ju && uu.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: uu.sneakHeld && !this.ignoringHeld,
          sneakPressed: uu.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: uu.sneakTogglePressed && !ju
        }
      }
    }
  },
  40798: (uu, Eu, ju) => {
    ju(9056)
  },
  40806: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Mu
    });
    var su = ju(24),
      Uu = ju(8997),
      Zu = ju(9013),
      Xu = ju(8398),
      lu = ju(8437),
      qu = ju(8411),
      fu = ju(40810),
      Cu = ju(40815),
      bu = ju(8447),
      cu = ju(8383),
      Nu = ju(8933),
      Ou = ju(9017);
    const Yu = [{
        isOpen: Uu.i,
        openButton: () => (0, Xu.i)("emoteWheel"),
        aim: uu => {
          su.h.TY("emoteWheelPadAim", uu)
        },
        commit: uu => {
          su.h.TY("requestEmoteWheelPadCommit", uu)
        },
        close: () => {
          su.h.TY("requestEmoteWheelClose")
        }
      }, {
        isOpen: Nu.d,
        openButton: () => (0, Xu.i)("chat"),
        aim: uu => {
          su.h.TY(Nu.f, uu)
        },
        commit: uu => {
          su.h.TY(Nu.h, uu)
        },
        close: () => {
          su.h.TY(Nu.g)
        },
        keptOpenBy: [Cu.d]
      }, {
        isOpen: Ou.o,
        openButton: () => (0, Xu.i)("actionButton"),
        aim: uu => {
          su.h.TY(Ou.e, uu)
        },
        commit: uu => {
          su.h.TY(Ou.h, uu)
        },
        close: () => {
          su.h.TY(Ou.f)
        }
      }],
      hu = () => {
        var uu;
        return null !== (uu = Yu.find((uu => uu.isOpen()))) && void 0 !== uu ? uu : null
      },
      Du = uu => (0, Xu.G)(uu.openButton()),
      gu = (uu, Eu) => !(0, cu.L)(uu.frame.values, Eu),
      Mu = () => {
        let uu = null,
          Eu = !1,
          ju = !1;
        return lu.d.register({
          name: "wheel",
          isActive: () => null !== hu(),
          peek: () => {
            const uu = hu();
            return uu && Du(uu) ? null : {
              over: "gameplay",
              stick: (0, qu.f)().swapSticks ? "right" : "left"
            }
          },
          onFrame: su => {
            var Uu;
            const cu = hu();
            if (!cu) return;
            if (null !== (0, bu.d)([...Cu.l, ...null !== (Uu = cu.keptOpenBy) && void 0 !== Uu ? Uu : []])) return void cu.close();
            const Nu = cu.openButton(),
              Ou = (0, fu.k)(su.frame, (0, qu.f)().swapSticks),
              Yu = Du(cu) ? Ou.move : Ou.look;
            uu !== cu ? (uu = cu, Eu = !gu(su, Nu) || Math.hypot(Yu.x, Yu.y) >= Zu.w, ju = !1) : ju && (ju = !1, gu(su, Nu) && (Eu = !1)), cu.aim(Yu);
            const Mu = (0, Xu.i)("menuConfirm"),
              eu = (0, Xu.i)("menuBack");
            return su.wasPressed(eu) ? (lu.d.consumeButton(eu), void cu.close()) : su.wasPressed(Mu) || su.wasPressed(Nu) ? (lu.d.consumeButton(Mu), lu.d.consumeButton(Nu), void cu.commit(!1)) : void(Eu && gu(su, Nu) && (Eu = !1, cu.commit(!0)))
          },
          onDeactivate: () => {
            ju = null !== uu && hu() === uu, ju || (uu = null, Eu = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);
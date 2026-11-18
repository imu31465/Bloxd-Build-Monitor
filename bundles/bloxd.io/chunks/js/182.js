export const id = 182;
export const ids = [182];
export const modules = {
  35935: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => QJ,
      c: () => mJ
    });
    var FJ = ZJ(3737),
      UJ = ZJ(1326),
      eJ = ZJ(47),
      XJ = ZJ(5817),
      AJ = ZJ(3728),
      qJ = ZJ(1184),
      jJ = ZJ(1703),
      YJ = ZJ(1675),
      hJ = ZJ(1329),
      DJ = ZJ(1086),
      sJ = ZJ(35944),
      nJ = ZJ(926),
      GJ = ZJ.n(nJ),
      fJ = ZJ(1201),
      xJ = ZJ(942),
      rJ = ZJ(1181),
      vJ = ZJ(990);
    const mJ = "SleepingOverlay";

    function QJ() {
      const {
        t: JJ
      } = (0, DJ.F)(), [cJ, ZJ] = (0, eJ.useState)(!1), [nJ, QJ] = (0, eJ.useState)(null), [VJ, KJ] = (0, eJ.useState)(1), [yJ, SJ] = (0, eJ.useState)(!1), [IJ, MJ] = (0, eJ.useState)(!1), bJ = (0, eJ.useRef)(0), wJ = (0, eJ.useRef)(!1), WJ = (0, eJ.useRef)(!1), gJ = (0, eJ.useRef)(), HJ = (0, eJ.useRef)(null);

      function PJ() {
        const JJ = null !== nJ && void 0 !== nJ ? nJ : "Rested Speed";
        jJ.gameBridge.send("wakeUp", IJ ? JJ : null), HJ.current = null, ZJ(!1), QJ(null), KJ(1), SJ(!1), MJ(!1)
      }

      function kJ() {
        return !yJ && (PJ(), !0)
      }
      return (0, UJ.i)("PlayerPhysicsTypeUpdate", (JJ => {
        JJ !== HJ.current && (HJ.current = JJ, JJ === XJ.s.SLEEPING ? (WJ.current || (bJ.current = jJ.gameBridge.lookup("cameraZoom", null), WJ.current = !0), wJ.current = !0, jJ.gameBridge.send("setCameraZoom", 3), ZJ(!0), KJ(function() {
          for (const JJ of jJ.gameBridge.lookup("blocksStandingOn", null)) {
            if (sJ.c.leafBeds.includes(JJ)) return console.log(`Found leaf bed: ${JJ}`), 1;
            if (sJ.c.woolBeds.includes(JJ)) return console.log(`Found woold bed: ${JJ}`), 2;
            if (sJ.c.strongBeds.includes(JJ)) return console.log(`Found strong bed ${JJ}`), 3
          }
          return 1
        }())) : (WJ.current = !1, ZJ(!1), QJ(null), KJ(1)))
      })), (0, eJ.useEffect)((() => () => {
        (0, qJ.e)(mJ)
      }), []), (0, eJ.useEffect)((() => {
        cJ ? (0, qJ.h)(mJ) : ((0, qJ.e)(mJ), wJ.current && (jJ.gameBridge.send("setCameraZoom", bJ.current), wJ.current = !1))
      }), [cJ]), (0, rJ.p)("overlay", gJ, kJ, cJ), (0, vJ.jsx)(FJ.d, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: cJ,
        timeout: 300,
        nodeRef: gJ,
        unmountOnExit: !0,
        children: (0, vJ.jsx)("div", {
          ref: gJ,
          onClick: JJ => {
            kJ() && JJ.stopPropagation()
          },
          children: (0, vJ.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, vJ.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: AJ.i.map((cJ => (0, vJ.jsxs)(EJ, {
                restedEffect: cJ,
                YX: nJ,
                setChosenRestedEffect: QJ,
                children: [(0, vJ.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, vJ.jsx)(YJ.d, {
                    text: [{
                      icon: cJ
                    }]
                  }), AJ.g[cJ].shortName]
                }), (0, vJ.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: JJ(AJ.g[cJ].description, {
                    time: AJ.g[cJ].effectLevelDurations[VJ] / 6e4
                  })
                })]
              }, cJ)))
            }), (0, vJ.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, vJ.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, vJ.jsxs)(hJ.d, {
                className: "SleepingOverlayWakeUpButton",
                onClick: JJ => {
                  IJ ? PJ() : (SJ(!0), (0, fJ.bb)((() => {
                    SJ(!1), MJ(!0)
                  }), !0)), JJ.stopPropagation()
                },
                loading: yJ,
                children: [!IJ && (0, vJ.jsxs)(vJ.Fragment, {
                  children: [(0, vJ.jsx)(xJ.c, {
                    name: "film"
                  }), " ", JJ("classicGame:watchAdToGetRestedPerk")]
                }), IJ && JJ("classicGame:wakeUp")]
              }), (0, vJ.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, vJ.jsx)("div", {
                  className: GJ()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === VJ
                  }),
                  children: (0, vJ.jsx)(YJ.d, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, vJ.jsx)("div", {
                  className: GJ()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === VJ
                  }),
                  children: (0, vJ.jsx)(YJ.d, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, vJ.jsx)("div", {
                  className: GJ()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === VJ
                  }),
                  children: (0, vJ.jsx)(YJ.d, {
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
    const EJ = (0, eJ.memo)((function(JJ) {
      let {
        children: cJ,
        restedEffect: ZJ,
        YX: FJ,
        setChosenRestedEffect: UJ
      } = JJ;
      return ZJ === FJ ? (0, vJ.jsx)(hJ.m, {
        onClick: JJ => {
          JJ.stopPropagation()
        },
        children: cJ
      }) : (0, vJ.jsx)(hJ.g, {
        onClick: JJ => {
          UJ(ZJ), JJ.stopPropagation()
        },
        children: cJ
      })
    }))
  },
  39341: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => LJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17),
      eJ = ZJ(3758),
      XJ = ZJ(227),
      AJ = ZJ(1528),
      qJ = ZJ(7477),
      jJ = ZJ(3766),
      YJ = ZJ(8058),
      hJ = ZJ(7517),
      DJ = ZJ(7494),
      sJ = ZJ(7525),
      nJ = ZJ(1569),
      GJ = ZJ(7527),
      fJ = ZJ(7963),
      xJ = ZJ(8095),
      rJ = ZJ(8066),
      vJ = ZJ(8104),
      mJ = ZJ(1703),
      QJ = ZJ(7473),
      EJ = ZJ(8011),
      VJ = ZJ(8004),
      KJ = ZJ(8061);
    class yJ {
      constructor() {
        this.lostAtMs = null
      }
      update(JJ, cJ) {
        return JJ ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= cJ, cJ - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class SJ {
      constructor(JJ, cJ) {
        this.press = JJ, this.release = cJ, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(JJ, cJ, ZJ, FJ) {
        if (JJ && null === this.downAtMs) return this.downAtMs = ZJ, this.latched = FJ, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? JJ && this.end() : !cJ && ZJ - this.downAtMs >= 40 && this.end())
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
        const JJ = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(JJ)
      }
    }
    const IJ = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      MJ = JJ => {
        let cJ = null;
        const ZJ = new KJ.d,
          FJ = () => {
            cJ && (((JJ, cJ, ZJ) => {
              switch (ZJ.kind) {
                case "reload":
                  return void cJ.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void cJ.specialActionUp(ZJ.action);
                case "customButton":
                  return void mJ.gameBridge.send("pressCustomButton", {
                    id: ZJ.id,
                    down: !1
                  });
                case "touchButton":
                  JJ.pressTouchButton(!1)
              }
            })(JJ, cJ.bodies, cJ.action), cJ = null)
          },
          eJ = (ZJ, UJ, eJ, XJ) => {
            FJ(), cJ = {
              action: UJ,
              bodies: ZJ,
              heldBy: eJ,
              atMs: XJ
            }, ((JJ, cJ, ZJ) => {
              switch (ZJ.kind) {
                case "reload":
                  return cJ.reloadGun(), void cJ.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void cJ.specialActionDown(ZJ.action);
                case "customButton":
                  return void mJ.gameBridge.send("pressCustomButton", {
                    id: ZJ.id,
                    down: !0
                  });
                case "touchButton":
                  JJ.pressTouchButton(!0)
              }
            })(JJ, ZJ, UJ)
          };
        return {
          update: (XJ, AJ, jJ, YJ) => {
            var DJ;
            const sJ = (0, EJ.i)(JJ.contextActionInputs()),
              nJ = null !== (DJ = sJ[0]) && void 0 !== DJ ? DJ : IJ;
            (0, VJ.d)((0, EJ.g)(nJ) ? nJ : null);
            const GJ = (0, EJ.c)(sJ);
            (0, VJ.e)(GJ);
            const fJ = (0, qJ.j)("actionButton");
            if (GJ) {
              const JJ = ZJ.update(AJ.wasPressed(fJ), AJ.isHeld(fJ), jJ, YJ);
              "tap" === JJ ? eJ(XJ, nJ, [fJ], jJ) : "hold" === JJ && (hJ.e.consumeButton(fJ), UJ.i.Uf(vJ.i, sJ))
            } else ZJ.release(), AJ.wasPressed(fJ) && eJ(XJ, nJ, [fJ], jJ);
            cJ && jJ - cJ.atMs >= 40 && !cJ.heldBy.some((JJ => (0, QJ.K)(AJ.frame.values, JJ))) && FJ()
          },
          pressPicked: (JJ, cJ) => {
            eJ(JJ, cJ, [(0, qJ.j)("menuConfirm"), (0, qJ.j)("actionButton")], performance.now())
          },
          release: () => {
            ZJ.release(), FJ(), (0, VJ.d)(null), (0, VJ.e)(!1)
          }
        }
      };
    var bJ = ZJ(7465);
    var wJ = ZJ(39333),
      WJ = ZJ(8024),
      gJ = ZJ(7515),
      HJ = ZJ(8145);
    var PJ = ZJ(39325),
      kJ = ZJ(8151),
      pJ = ZJ(39347),
      dJ = ZJ(8128),
      zJ = ZJ(8029),
      NJ = ZJ(8034),
      OJ = ZJ(8038),
      TJ = ZJ(7972);
    const CJ = () => TJ.e[(0, DJ.k)().tapHoldTime].wheelMs,
      uJ = () => ((0, YJ.b)(), new Event("controllerMenuKey")),
      iJ = (JJ, cJ, ZJ) => new SJ((() => {
        const ZJ = JJ.bodies();
        return {
          bodies: ZJ,
          press: cJ(ZJ)
        }
      }), (JJ => {
        let {
          bodies: cJ,
          press: FJ
        } = JJ;
        ZJ(cJ, FJ)
      })),
      RJ = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      LJ = JJ => {
        const cJ = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let ZJ = RJ;
        const YJ = new pJ.b,
          mJ = UJ.i.subscribe("appManagerUpdated|activeInputDevice", (cJ => {
            JJ.deviceChanged(cJ)
          }));
        let EJ = null,
          VJ = 0;
        const SJ = () => {
          EJ = null, (0, zJ.f)(null)
        };
        let IJ = !1;
        const LJ = new yJ,
          aJ = JJ.look,
          BJ = new KJ.d,
          tJ = new KJ.d,
          oJ = MJ(JJ),
          lJ = UJ.i.subscribe(vJ.j, (cJ => {
            oJ.pressPicked(JJ.bodies(), cJ)
          })),
          Jc = iJ(JJ, (JJ => JJ.primaryFireDown()), ((JJ, cJ) => {
            JJ.primaryFireUp(cJ)
          })),
          cc = iJ(JJ, (JJ => JJ.altFireDown()), ((JJ, cJ) => {
            JJ.altFireUp(cJ)
          }));
        let Zc = !1,
          Fc = !1,
          Uc = !1;
        const ec = (0, fJ.e)(QJ.$),
          Xc = (0, fJ.e)(QJ.$),
          Ac = new KJ.d;
        let qc = !1;
        const jc = () => {
            ec.reset(), Xc.reset(), Ac.release(), (0, OJ.e)(!1), aJ.release(), Jc.cancel(), (0, NJ.c)(!1), cc.cancel(), oJ.release(), BJ.release(), tJ.release(), SJ()
          },
          Yc = function() {
            let FJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            jc(), Fc = !1, FJ || (Zc = !1, ZJ = RJ, Object.assign(cJ, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), JJ.stopMoving())
          },
          hc = function(FJ, UJ, eJ) {
            let XJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const AJ = (0, DJ.k)(),
              jJ = (0, PJ.e)(UJ, AJ.moveDeadzone),
              hJ = (0, qJ.j)("sprint");
            ZJ = (0, PJ.q)(ZJ, {
              sprintPressed: FJ.wasPressed(hJ),
              magnitude: jJ.magnitude,
              autoSprint: AJ.autoSprint,
              nowMs: eJ
            }), cJ.running = ZJ.running, cJ.sprintHeld = FJ.isHeld(hJ), cJ.x = jJ.x, cJ.y = jJ.y, cJ.magnitude = jJ.speed, cJ.headingOffset = jJ.headingOffset, Zc = jJ.magnitude > 0;
            const sJ = (0, qJ.j)("jump");
            if (cJ.jumpHeld = FJ.isHeld(sJ), cJ.jumpPressed = FJ.wasPressed(sJ), cJ.jumpPressed && JJ.bodies().jumpDown(), XJ) return void JJ.move(cJ, null);
            const nJ = (0, qJ.j)("sneak"),
              GJ = YJ.filter({
                sneakHeld: FJ.isHeld(nJ),
                sneakPressed: FJ.wasPressed(nJ),
                sneakTogglePressed: FJ.wasPressed((0, qJ.j)("sneakToggle"))
              }, eJ);
            JJ.move(cJ, {
              ...GJ,
              mode: AJ.sneakMode
            })
          },
          Dc = (JJ, cJ) => {
            const ZJ = (0, qJ.j)("chat");
            if ("off" === (0, DJ.k)().quickChat) return void(JJ.wasPressed(ZJ) && (hJ.e.consumeButton(ZJ), UJ.i.Uf(WJ.c)));
            const FJ = BJ.update(JJ.wasPressed(ZJ), JJ.isHeld(ZJ), cJ, CJ());
            "tap" === FJ || "hold" === FJ && null === (0, nJ.e)() ? UJ.i.Uf(WJ.c) : "hold" === FJ && (hJ.e.consumeButton(ZJ), UJ.i.Uf(rJ.o))
          },
          sc = (cJ, ZJ) => {
            ((JJ, cJ) => {
              const ZJ = (0, xJ.d)(),
                FJ = (0, qJ.j)("emoteWheel");
              if ("wheel" === (0, DJ.k)().emoteButton) return JJ.wasPressed(FJ) && (hJ.e.consumeButton(FJ), UJ.i.Uf("requestEmoteWheelPadOpen", !0)), (0, xJ.d)() !== ZJ;
              const eJ = tJ.update(JJ.wasPressed(FJ), JJ.isHeld(FJ), cJ, CJ());
              return "tap" === eJ ? UJ.i.Uf("requestEmoteRepeatLast") : "hold" === eJ && (hJ.e.consumeButton(FJ), UJ.i.Uf("requestEmoteWheelPadOpen", !1)), (0, xJ.d)() !== ZJ
            })(cJ, ZJ) || Dc(cJ, ZJ), cJ.wasPressed((0, qJ.j)("inventory")) && (hJ.e.consumeButton((0, qJ.j)("inventory")), (0, AJ.t)(uJ(), "inventory", JJ.hasFullInventory())), cJ.wasPressed((0, qJ.j)("pause")) && (hJ.e.consumeButton((0, qJ.j)("pause")), (0, jJ.b)() === XJ.m.SOCIAL ? (0, AJ.s)(uJ(), XJ.m.SOCIAL) : (0, AJ.i)(uJ())), cJ.wasPressed((0, qJ.j)("leaderboard")) && !(0, eJ.c)() && (hJ.e.consumeButton((0, qJ.j)("leaderboard")), ((JJ, cJ) => {
              if ("shop" === (0, gJ.e)()) return UJ.i.Uf(HJ.j), void(0, AJ.s)(JJ, XJ.m.SHOP, !0);
              (0, AJ.s)(JJ, XJ.m.LOBBY_LEADERBOARD, cJ)
            })(uJ(), JJ.hasLobbyLeaderboard()))
          },
          nc = (cJ, ZJ) => {
            const FJ = JJ.bodies();
            ((cJ, ZJ) => {
              const FJ = (0, qJ.j)("attack"),
                UJ = cJ.wasPressed(FJ);
              UJ && !Jc.isLatched() && (IJ = JJ.targetsBlock()), Jc.update(UJ, cJ.isHeld(FJ), ZJ, "toggle" === (0, DJ.k)().attackMode), Jc.isLatched() && IJ ? LJ.update(JJ.targetsBlock(), ZJ) && Jc.unlatch() : LJ.reset(), (0, NJ.c)(Jc.isLatched())
            })(cJ, ZJ), cc.update(cJ.wasPressed((0, qJ.j)("use")), cJ.isHeld((0, qJ.j)("use")), ZJ, !1), ec.update(cJ.isHeld((0, qJ.j)("hotbarPrevious")), ZJ) && JJ.scrollHotbar(-1), Xc.update(cJ.isHeld((0, qJ.j)("hotbarNext")), ZJ) && JJ.scrollHotbar(1), ((cJ, ZJ, FJ) => {
              const UJ = (0, qJ.j)("perspective"),
                eJ = (0, qJ.j)("Am"),
                XJ = JJ.pickBlockAllowed();
              (0, OJ.e)(XJ && !qc && JJ.targetsBlock());
              const AJ = () => {
                ZJ.Am() && (qc = !0, (0, OJ.e)(!1))
              };
              if (!XJ || eJ !== UJ) return Ac.release(), cJ.wasPressed(UJ) && ZJ.swapCameraZoom(), void(XJ && cJ.wasPressed(eJ) && AJ());
              const jJ = Ac.update(cJ.wasPressed(eJ), cJ.isHeld(eJ), FJ, CJ());
              "tap" === jJ ? AJ() : "hold" === jJ && ZJ.swapCameraZoom()
            })(cJ, FJ, ZJ), ((cJ, ZJ, FJ) => {
              const UJ = (0, qJ.j)("drop");
              if (cJ.wasPressed(UJ)) {
                ZJ.dropItem(!1);
                const JJ = (0, DJ.k)();
                "off" !== JJ.buttonRepeat && (EJ = FJ, VJ = TJ.e[JJ.tapHoldTime].dropStackMs, (0, zJ.f)(VJ))
              }
              null !== EJ && (!cJ.isHeld(UJ) || JJ.selectedSlotEmpty() ? SJ() : FJ - EJ >= VJ && (SJ(), ZJ.dropItem(!0)))
            })(cJ, FJ, ZJ), oJ.update(FJ, cJ, ZJ, CJ()), sc(cJ, ZJ)
          },
          Gc = hJ.e.register({
            name: "gameplay",
            isActive: () => {
              const cJ = Zc && "keyboardMouse" === FJ.d.get("activeInputDevice") && !(0, sJ.A)(),
                ZJ = (0, sJ.h)() ? [wJ.b] : [];
              return ((0, sJ.h)() || cJ) && (0, GJ.h)(ZJ) && JJ.hasPlayer()
            },
            onFrame: JJ => {
              const cJ = performance.now(),
                ZJ = (0, DJ.k)(),
                FJ = (0, PJ.s)(JJ, (0, PJ.g)(ZJ, (0, qJ.j)("pause"), (0, kJ.c)().isSupported())),
                UJ = (0, PJ.f)(FJ, ZJ.swapSticks);
              return (0, sJ.h)() ? (Fc = !1, (0, GJ.h)() ? (Uc = !1, aJ.update(UJ.look, ZJ, FJ.isHeld((0, qJ.j)("use"))), hc(FJ, UJ.move, cJ), void nc(FJ, cJ)) : (Uc || (Uc = !0, YJ.lostToPadScreen(), Yc()), void Dc(FJ, cJ))) : (Fc || (jc(), Fc = !0), void hc(FJ, UJ.move, cJ))
            },
            onDeactivate: JJ => {
              (0, sJ.h)() && YJ.lostToPadScreen(), Yc(JJ)
            },
            onPeekFrame: cJ => {
              (0, sJ.h)() && (0, GJ.h)(wJ.e) && JJ.hasPlayer() ? hc(cJ, (0, PJ.f)(cJ, (0, DJ.k)().swapSticks).move, performance.now(), !0) : Yc()
            }
          }),
          fc = (0, wJ.c)(JJ),
          xc = (() => {
            const JJ = UJ.i.subscribe(bJ.d, (JJ => {
              !JJ && (0, sJ.h)() && "inGame" === FJ.d.get("gameState") && UJ.i.Uf("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              UJ.i.unsubscribe(JJ)
            }
          })();
        return () => {
          Yc(), JJ.uninstall(), (0, dJ.i)(!1), (0, OJ.e)(!1), UJ.i.unsubscribe(mJ), UJ.i.unsubscribe(lJ), Gc(), fc(), xc(), aJ.uninstall()
        }
      }
  },
  39333: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => nJ,
      c: () => fJ,
      e: () => sJ
    });
    var FJ = ZJ(1184),
      UJ = ZJ(3758),
      eJ = ZJ(8079),
      XJ = ZJ(35935),
      AJ = ZJ(1201),
      qJ = ZJ(1077),
      jJ = ZJ(7527),
      YJ = ZJ(8066),
      hJ = ZJ(8104);
    const DJ = {
        emoteWheel: eJ.e,
        quickChatWheel: YJ.d,
        actionWheel: hJ.m
      },
      sJ = Object.keys(DJ),
      nJ = "dead",
      GJ = JJ => (0, FJ.d)().includes(JJ),
      fJ = JJ => {
        const cJ = [(0, jJ.n)(nJ, (() => JJ.hasPlayer() && JJ.isPlayerDead())), (0, jJ.n)("sleeping", (() => GJ(XJ.c))), (0, jJ.n)("turnstile", (() => GJ(qJ.d))), (0, jJ.n)("videoAd", AJ.I), (0, jJ.n)("replay", (() => (0, UJ.c)() || JJ.isReplayMode())), (0, jJ.n)("freeCamera", (() => JJ.isFreeCameraOn())), ...Object.entries(DJ).map((JJ => {
          let [cJ, ZJ] = JJ;
          return (0, jJ.n)(cJ, ZJ)
        }))];
        return () => {
          for (const JJ of cJ) JJ()
        }
      }
  },
  39325: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ,
      e: () => qJ,
      f: () => AJ,
      g: () => YJ,
      j: () => XJ,
      n: () => eJ,
      q: () => jJ,
      s: () => hJ
    });
    var FJ = ZJ(7473);
    class UJ {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(JJ, cJ, ZJ) {
        const UJ = (0, FJ.m)(JJ, cJ.lookDeadzone);
        if (Math.hypot(UJ.x, UJ.y) < .9 || Math.abs(UJ.x) < Math.abs(UJ.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = ZJ);
        const eJ = (XJ = cJ.lookSensitivityX, Math.min(1, 100 / XJ));
        var XJ;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (ZJ - this.fullTiltSinceMs - 250 * eJ) / (200 * eJ)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const eJ = (JJ, cJ, ZJ, UJ, eJ) => {
        let XJ = 1;
        return "boost" === ZJ.lookCurve ? XJ = JJ.update(cJ, ZJ, eJ) : JJ.reset(),
          function(JJ, cJ) {
            let {
              yawBoost: ZJ = 1,
              aiming: UJ = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const eJ = (0, FJ.i)((0, FJ.m)(JJ, cJ.lookDeadzone), cJ.lookCurve),
              XJ = 220 * Math.PI / 180,
              AJ = UJ ? cJ.aimLookSensitivity / 100 : 1,
              qJ = cJ.lookSensitivityX / 100 * AJ,
              jJ = cJ.lookSensitivityY / 100 * AJ;
            return {
              yawRadPerSec: eJ.x * XJ * qJ * ZJ * (cJ.invertLookX ? -1 : 1),
              pitchRadPerSec: eJ.y * XJ * .7 * jJ * (cJ.invertLookY ? -1 : 1)
            }
          }(cJ, ZJ, {
            yawBoost: XJ,
            aiming: UJ
          })
      },
      XJ = (JJ, cJ) => {
        const ZJ = Math.max(0, Math.min(250, cJ)) / 1e3;
        return {
          bK: JJ.yawRadPerSec * ZJ,
          zK: JJ.pitchRadPerSec * ZJ
        }
      },
      AJ = (JJ, cJ) => cJ ? {
        move: JJ.rightStick,
        look: JJ.leftStick
      } : {
        move: JJ.leftStick,
        look: JJ.rightStick
      },
      qJ = (JJ, cJ) => {
        const ZJ = (0, FJ.m)(JJ, cJ),
          UJ = Math.min(1, Math.hypot(ZJ.x, ZJ.y));
        return {
          magnitude: UJ,
          speed: Math.min(1, UJ / .8),
          headingOffset: 0 === UJ ? 0 : Math.atan2(ZJ.x, -ZJ.y),
          x: ZJ.x,
          y: ZJ.y
        }
      },
      jJ = (JJ, cJ) => {
        let {
          sprintPressed: ZJ,
          magnitude: FJ,
          autoSprint: UJ,
          nowMs: eJ
        } = cJ;
        const XJ = ZJ ? eJ : JJ.latchedAtMs,
          AJ = (JJ => {
            let {
              running: cJ,
              magnitude: ZJ,
              sprintPressed: FJ,
              autoSprint: UJ
            } = JJ;
            return !(ZJ < .5) && (!!FJ || !!(UJ && ZJ >= .9) || cJ)
          })({
            running: JJ.running,
            magnitude: FJ,
            sprintPressed: eJ - XJ <= 1e3,
            autoSprint: UJ
          });
        return {
          running: AJ,
          latchedAtMs: AJ ? -1 / 0 : XJ
        }
      },
      YJ = (JJ, cJ, ZJ) => ZJ && JJ.gyroAiming && "button" === JJ.gyroActivation && JJ.gyroButton !== cJ ? JJ.gyroButton : null,
      hJ = (JJ, cJ) => cJ ? {
        ...JJ,
        isHeld: ZJ => ZJ !== cJ && JJ.isHeld(ZJ),
        wasPressed: ZJ => ZJ !== cJ && JJ.wasPressed(ZJ),
        wasReleased: ZJ => ZJ !== cJ && JJ.wasReleased(ZJ),
        value: ZJ => ZJ === cJ ? 0 : JJ.value(ZJ)
      } : JJ
  },
  39347: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ,
      d: () => FJ
    });
    const FJ = JJ => {
      let {
        mode: cJ,
        sneakHeld: ZJ,
        sneakPressed: FJ,
        sneakTogglePressed: UJ,
        descending: eJ,
        canCrouch: XJ,
        toggled: AJ
      } = JJ;
      return XJ ? eJ ? {
        crouchHeld: ZJ,
        toggled: !1
      } : "hold" === cJ ? {
        crouchHeld: ZJ,
        toggled: UJ ? !AJ : AJ
      } : {
        crouchHeld: !1,
        toggled: FJ || UJ ? !AJ : AJ
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class UJ {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(JJ, cJ) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = cJ, this.graceEndsMs = cJ + 500);
        const ZJ = cJ < this.graceEndsMs;
        return ZJ && (JJ.sneakPressed || JJ.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, cJ + 300))), JJ.sneakHeld ? ZJ && JJ.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: JJ.sneakHeld && !this.ignoringHeld,
          sneakPressed: JJ.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: JJ.sneakTogglePressed && !ZJ
        }
      }
    }
  },
  39312: (JJ, cJ, ZJ) => {
    ZJ(8151)
  },
  39317: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => vJ
    });
    var FJ = ZJ(17),
      UJ = ZJ(8079),
      eJ = ZJ(8092),
      XJ = ZJ(7477),
      AJ = ZJ(7517),
      qJ = ZJ(7494),
      jJ = ZJ(39325),
      YJ = ZJ(39333),
      hJ = ZJ(7527),
      DJ = ZJ(7473),
      sJ = ZJ(8066),
      nJ = ZJ(8104);
    const GJ = [{
        isOpen: UJ.i,
        openButton: () => (0, XJ.j)("emoteWheel"),
        aim: JJ => {
          FJ.i.Uf("emoteWheelPadAim", JJ)
        },
        commit: JJ => {
          FJ.i.Uf("requestEmoteWheelPadCommit", JJ)
        },
        close: () => {
          FJ.i.Uf("requestEmoteWheelClose")
        }
      }, {
        isOpen: sJ.d,
        openButton: () => (0, XJ.j)("chat"),
        aim: JJ => {
          FJ.i.Uf(sJ.g, JJ)
        },
        commit: JJ => {
          FJ.i.Uf(sJ.k, JJ)
        },
        close: () => {
          FJ.i.Uf(sJ.h)
        },
        keptOpenBy: [YJ.b]
      }, {
        isOpen: nJ.m,
        openButton: () => (0, XJ.j)("actionButton"),
        aim: JJ => {
          FJ.i.Uf(nJ.b, JJ)
        },
        commit: JJ => {
          FJ.i.Uf(nJ.e, JJ)
        },
        close: () => {
          FJ.i.Uf(nJ.c)
        }
      }],
      fJ = () => {
        var JJ;
        return null !== (JJ = GJ.find((JJ => JJ.isOpen()))) && void 0 !== JJ ? JJ : null
      },
      xJ = JJ => (0, XJ.L)(JJ.openButton()),
      rJ = (JJ, cJ) => !(0, DJ.K)(JJ.frame.values, cJ),
      vJ = () => {
        let JJ = null,
          cJ = !1,
          ZJ = !1;
        return AJ.e.register({
          name: "wheel",
          isActive: () => null !== fJ(),
          peek: () => {
            const JJ = fJ();
            return JJ && xJ(JJ) ? null : {
              over: "gameplay",
              stick: (0, qJ.k)().swapSticks ? "right" : "left"
            }
          },
          onFrame: FJ => {
            var UJ;
            const DJ = fJ();
            if (!DJ) return;
            if (null !== (0, hJ.d)([...YJ.e, ...null !== (UJ = DJ.keptOpenBy) && void 0 !== UJ ? UJ : []])) return void DJ.close();
            const sJ = DJ.openButton(),
              nJ = (0, jJ.f)(FJ.frame, (0, qJ.k)().swapSticks),
              GJ = xJ(DJ) ? nJ.move : nJ.look;
            JJ !== DJ ? (JJ = DJ, cJ = !rJ(FJ, sJ) || Math.hypot(GJ.x, GJ.y) >= eJ.B, ZJ = !1) : ZJ && (ZJ = !1, rJ(FJ, sJ) && (cJ = !1)), DJ.aim(GJ);
            const vJ = (0, XJ.j)("menuConfirm"),
              mJ = (0, XJ.j)("menuBack");
            return FJ.wasPressed(mJ) ? (AJ.e.consumeButton(mJ), void DJ.close()) : FJ.wasPressed(vJ) || FJ.wasPressed(sJ) ? (AJ.e.consumeButton(vJ), AJ.e.consumeButton(sJ), void DJ.commit(!1)) : void(cJ && rJ(FJ, sJ) && (cJ = !1, DJ.commit(!0)))
          },
          onDeactivate: () => {
            ZJ = null !== JJ && fJ() === JJ, ZJ || (JJ = null, cJ = !1)
          }
        })
      }
  },
  8719: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      h: () => eJ
    });
    var FJ = ZJ(8687);
    const UJ = "Air",
      eJ = Object.freeze(new FJ.h(UJ, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);
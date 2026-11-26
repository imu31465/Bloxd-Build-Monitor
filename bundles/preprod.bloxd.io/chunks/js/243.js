export const id = 243;
export const ids = [243];
export const modules = {
  37653: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => ZU,
      e: () => BU
    });
    var cU = zU(4622),
      yU = zU(1492),
      QU = zU(61),
      AU = zU(7056),
      FU = zU(4612),
      oU = zU(1310),
      DU = zU(2005),
      EU = zU(1978),
      YU = zU(1494),
      NU = zU(1193),
      IU = zU(37659),
      pU = zU(1106),
      aU = zU.n(pU),
      tU = zU(1349),
      gU = zU(1390),
      kU = zU(1294),
      GU = zU(1305);
    const BU = "SleepingOverlay";

    function ZU() {
      const {
        t: UU
      } = (0, NU.I)(), [XU, zU] = (0, QU.useState)(!1), [pU, ZU] = (0, QU.useState)(null), [PU, WU] = (0, QU.useState)(1), [dU, LU] = (0, QU.useState)(!1), [eU, CU] = (0, QU.useState)(!1), wU = (0, QU.useRef)(0), qU = (0, QU.useRef)(!1), OU = (0, QU.useRef)(!1), SU = (0, QU.useRef)(), rU = (0, QU.useRef)(null);

      function uU() {
        const UU = null !== pU && void 0 !== pU ? pU : "Rested Speed";
        DU.gameBridge.send("wakeUp", eU ? UU : null), rU.current = null, zU(!1), ZU(null), WU(1), LU(!1), CU(!1)
      }

      function fU() {
        return !dU && (uU(), !0)
      }
      return (0, yU.f)("PlayerPhysicsTypeUpdate", (UU => {
        UU !== rU.current && (rU.current = UU, UU === AU.o.SLEEPING ? (OU.current || (wU.current = DU.gameBridge.lookup("cameraZoom", null), OU.current = !0), qU.current = !0, DU.gameBridge.send("setCameraZoom", 3), zU(!0), WU(function() {
          for (const UU of DU.gameBridge.lookup("blocksStandingOn", null)) {
            if (IU.b.leafBeds.includes(UU)) return console.log(`Found leaf bed: ${UU}`), 1;
            if (IU.b.woolBeds.includes(UU)) return console.log(`Found woold bed: ${UU}`), 2;
            if (IU.b.strongBeds.includes(UU)) return console.log(`Found strong bed ${UU}`), 3
          }
          return 1
        }())) : (OU.current = !1, zU(!1), ZU(null), WU(1)))
      })), (0, QU.useEffect)((() => () => {
        (0, oU.s)(BU)
      }), []), (0, QU.useEffect)((() => {
        XU ? (0, oU.u)(BU) : ((0, oU.s)(BU), qU.current && (DU.gameBridge.send("setCameraZoom", wU.current), qU.current = !1))
      }), [XU]), (0, kU.t)("overlay", SU, fU, XU), (0, GU.jsx)(cU.c, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: XU,
        timeout: 300,
        nodeRef: SU,
        unmountOnExit: !0,
        children: (0, GU.jsx)("div", {
          ref: SU,
          onClick: UU => {
            fU() && UU.stopPropagation()
          },
          children: (0, GU.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, GU.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: FU.f.map((XU => (0, GU.jsxs)(RU, {
                restedEffect: XU,
                xD: pU,
                setChosenRestedEffect: ZU,
                children: [(0, GU.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, GU.jsx)(EU.d, {
                    text: [{
                      icon: XU
                    }]
                  }), FU.d[XU].shortName]
                }), (0, GU.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: UU(FU.d[XU].description, {
                    time: FU.d[XU].effectLevelDurations[PU] / 6e4
                  })
                })]
              }, XU)))
            }), (0, GU.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, GU.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, GU.jsxs)(YU.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: UU => {
                  eU ? uU() : (LU(!0), (0, tU.Z)((() => {
                    LU(!1), CU(!0)
                  }), !0)), UU.stopPropagation()
                },
                loading: dU,
                children: [!eU && (0, GU.jsxs)(GU.Fragment, {
                  children: [(0, GU.jsx)(gU.d, {
                    name: "film"
                  }), " ", UU("classicGame:watchAdToGetRestedPerk")]
                }), eU && UU("classicGame:wakeUp")]
              }), (0, GU.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, GU.jsx)("div", {
                  className: aU()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === PU
                  }),
                  children: (0, GU.jsx)(EU.d, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, GU.jsx)("div", {
                  className: aU()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === PU
                  }),
                  children: (0, GU.jsx)(EU.d, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, GU.jsx)("div", {
                  className: aU()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === PU
                  }),
                  children: (0, GU.jsx)(EU.d, {
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
    const RU = (0, QU.memo)((function(UU) {
      let {
        children: XU,
        restedEffect: zU,
        xD: cU,
        setChosenRestedEffect: yU
      } = UU;
      return zU === cU ? (0, GU.jsx)(YU.l, {
        onClick: UU => {
          UU.stopPropagation()
        },
        children: XU
      }) : (0, GU.jsx)(YU.j, {
        onClick: UU => {
          yU(zU), UU.stopPropagation()
        },
        children: XU
      })
    }))
  },
  41640: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => KU
    });
    var cU = zU(27),
      yU = zU(31),
      QU = zU(4651),
      AU = zU(320),
      FU = zU(1680),
      oU = zU(8751),
      DU = zU(4675),
      EU = zU(9264),
      YU = zU(8780),
      NU = zU(8764),
      IU = zU(8783),
      pU = zU(1444),
      aU = zU(1732),
      tU = zU(8785),
      gU = zU(9228),
      kU = zU(9381),
      GU = zU(9273),
      BU = zU(9383),
      ZU = zU(2005),
      RU = zU(8740),
      PU = zU(9301),
      WU = zU(9294),
      dU = zU(9270);
    class LU {
      constructor() {
        this.lostAtMs = null
      }
      update(UU, XU) {
        return UU ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= XU, XU - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class eU {
      constructor(UU, XU) {
        this.press = UU, this.release = XU, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(UU, XU, zU, cU) {
        if (UU && null === this.downAtMs) return this.downAtMs = zU, this.latched = cU, void(this.token = this.press(cU));
        null !== this.downAtMs && (this.latched ? UU && this.end() : !XU && zU - this.downAtMs >= 40 && this.end())
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
        const UU = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(UU)
      }
    }
    const CU = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      wU = UU => {
        let XU = null;
        const zU = new dU.b,
          cU = () => {
            XU && (((UU, XU, zU) => {
              switch (zU.kind) {
                case "reload":
                  return void XU.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void XU.specialActionUp(zU.action);
                case "customButton":
                  return void ZU.gameBridge.send("pressCustomButton", {
                    id: zU.id,
                    down: !1
                  });
                case "touchButton":
                  UU.pressTouchButton(!1)
              }
            })(UU, XU.bodies, XU.action), XU = null)
          },
          QU = (zU, yU, QU, AU) => {
            cU(), XU = {
              action: yU,
              bodies: zU,
              heldBy: QU,
              atMs: AU
            }, ((UU, XU, zU) => {
              switch (zU.kind) {
                case "reload":
                  return XU.reloadGun(), void XU.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void XU.specialActionDown(zU.action);
                case "customButton":
                  return void ZU.gameBridge.send("pressCustomButton", {
                    id: zU.id,
                    down: !0
                  });
                case "touchButton":
                  UU.pressTouchButton(!0)
              }
            })(UU, zU, yU)
          };
        return {
          update: (AU, FU, DU, EU) => {
            var NU;
            const IU = (0, PU.n)(UU.contextActionInputs()),
              pU = null !== (NU = IU[0]) && void 0 !== NU ? NU : CU;
            (0, WU.d)((0, PU.i)(pU) ? pU : null);
            const aU = (0, PU.e)(IU);
            (0, WU.f)(aU);
            const tU = (0, oU.h)("actionButton");
            if (aU) {
              const UU = zU.update(FU.wasPressed(tU), FU.isHeld(tU), DU, EU);
              "tap" === UU ? QU(AU, pU, [tU], DU) : "hold" === UU && (YU.d.consumeButton(tU), yU.k.UY(BU.k, IU))
            } else zU.release(), FU.wasPressed(tU) && QU(AU, pU, [tU], DU);
            XU && DU - XU.atMs >= 40 && !XU.heldBy.some((UU => (0, RU.I)(FU.frame.values, UU))) && cU()
          },
          pressPicked: (UU, XU) => {
            QU(UU, XU, [(0, oU.h)("menuConfirm"), (0, oU.h)("actionButton")], performance.now())
          },
          release: () => {
            zU.release(), cU(), (0, WU.d)(null), (0, WU.f)(!1)
          }
        }
      };
    var qU = zU(8733);
    var OU = zU(41638),
      SU = zU(9314),
      rU = zU(8774),
      uU = zU(9422);
    var fU = zU(41636),
      iU = zU(9431),
      HU = zU(41644),
      MU = zU(9404),
      vU = zU(9320),
      VU = zU(9329),
      sU = zU(9336),
      nU = zU(9231),
      mU = zU(9287);
    const lU = () => nU.c[(0, NU.i)().tapHoldTime].wheelMs,
      xU = () => ((0, EU.d)(), (0, mU.b)("controllerMenuKey")),
      JU = (UU, XU, zU) => new eU((zU => {
        const cU = UU.bodies();
        return {
          bodies: cU,
          press: XU(cU, zU)
        }
      }), (UU => {
        let {
          bodies: XU,
          press: cU
        } = UU;
        zU(XU, cU)
      })),
      jU = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      KU = UU => {
        const XU = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let zU = jU;
        const EU = new HU.b,
          ZU = yU.k.subscribe("appManagerUpdated|activeInputDevice", (XU => {
            UU.deviceChanged(XU)
          }));
        let PU = null,
          WU = 0;
        const eU = () => {
          PU = null, (0, vU.g)(null)
        };
        let CU = !1;
        const mU = new LU,
          KU = UU.look,
          bU = new dU.b,
          TU = new dU.b,
          hU = wU(UU),
          UX = yU.k.subscribe(BU.m, (XU => {
            hU.pressPicked(UU.bodies(), XU)
          })),
          XX = JU(UU, ((UU, XU) => UU.primaryFireDown(!XU)), ((UU, XU) => {
            UU.primaryFireUp(XU)
          })),
          zX = JU(UU, (UU => UU.altFireDown()), ((UU, XU) => {
            UU.altFireUp(XU)
          }));
        let cX = !1,
          yX = -1 / 0,
          QX = !1,
          AX = !1;
        const FX = (0, gU.d)(RU.bb),
          oX = (0, gU.d)(RU.bb),
          DX = new dU.b;
        let EX = !1;
        const YX = () => {
            FX.reset(), oX.reset(), DX.release(), (0, sU.g)(!1), KU.release(), XX.cancel(), (0, VU.c)(!1), zX.cancel(), hU.release(), bU.release(), TU.release(), eU()
          },
          NX = function() {
            let cU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            YX(), QX = !1, cU || (cX = !1, zU = jU, Object.assign(XU, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), UU.stopMoving())
          };
        let IX = !1;
        const pX = function(cU, QU, AU) {
            let FU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, pU.j)()) return void(IX || (IX = !0, cX = !1, UU.stopMoving()));
            IX = !1;
            const DU = (0, NU.i)(),
              YU = (0, fU.d)(QU, DU.moveDeadzone),
              IU = (0, oU.h)("sprint");
            zU = (0, fU.o)(zU, {
              sprintPressed: cU.wasPressed(IU),
              magnitude: YU.magnitude,
              autoSprint: DU.autoSprint,
              nowMs: AU
            }), XU.running = zU.running, XU.sprintHeld = cU.isHeld(IU), XU.x = YU.x, XU.y = YU.y, XU.magnitude = YU.speed, XU.headingOffset = YU.headingOffset, YU.magnitude > 0 && (!cX || AU - yX >= 1e3) && (yX = AU, yU.k.UY("stickMoved")), cX = YU.magnitude > 0;
            const aU = (0, oU.h)("jump");
            if (XU.jumpHeld = cU.isHeld(aU), XU.jumpPressed = cU.wasPressed(aU), XU.jumpPressed && UU.bodies().jumpDown(), FU) return void UU.move(XU, null);
            const tU = (0, oU.h)("sneak"),
              gU = EU.filter({
                sneakHeld: cU.isHeld(tU),
                sneakPressed: cU.wasPressed(tU),
                sneakTogglePressed: cU.wasPressed((0, oU.h)("sneakToggle"))
              }, AU);
            UU.move(XU, {
              ...gU,
              mode: DU.sneakMode
            })
          },
          aX = (UU, XU) => {
            const zU = (0, oU.h)("chat");
            if ("off" === (0, NU.i)().quickChat) return void(UU.wasPressed(zU) && (YU.d.consumeButton(zU), yU.k.UY(SU.e)));
            const cU = bU.update(UU.wasPressed(zU), UU.isHeld(zU), XU, lU());
            "tap" === cU || "hold" === cU && null === (0, aU.b)() ? yU.k.UY(SU.e) : "hold" === cU && (YU.d.consumeButton(zU), yU.k.UY(GU.p))
          },
          tX = (XU, zU) => {
            ((UU, XU) => {
              const zU = (0, kU.b)(),
                cU = (0, oU.h)("emoteWheel");
              if ("wheel" === (0, NU.i)().emoteButton) return UU.wasPressed(cU) && (YU.d.consumeButton(cU), yU.k.UY("requestEmoteWheelPadOpen", !0)), (0, kU.b)() !== zU;
              const QU = TU.update(UU.wasPressed(cU), UU.isHeld(cU), XU, lU());
              return "tap" === QU ? yU.k.UY("requestEmoteRepeatLast") : "hold" === QU && (YU.d.consumeButton(cU), yU.k.UY("requestEmoteWheelPadOpen", !1)), (0, kU.b)() !== zU
            })(XU, zU) || aX(XU, zU), XU.wasPressed((0, oU.h)("inventory")) && (YU.d.consumeButton((0, oU.h)("inventory")), (0, FU.A)(xU(), "inventory", UU.hasFullInventory())), XU.wasPressed((0, oU.h)("pause")) && (YU.d.consumeButton((0, oU.h)("pause")), (0, DU.d)() === AU.s.SOCIAL ? (0, FU.x)(xU(), AU.s.SOCIAL) : (0, FU.g)(xU())), XU.wasPressed((0, oU.h)("leaderboard")) && !(0, QU.g)() && (YU.d.consumeButton((0, oU.h)("leaderboard")), ((UU, XU) => {
              if ("shop" === (0, rU.d)()) return yU.k.UY(uU.k), void(0, FU.x)(UU, AU.s.SHOP, !0);
              (0, FU.x)(UU, AU.s.LOBBY_LEADERBOARD, XU)
            })(xU(), UU.hasLobbyTab()))
          },
          gX = (XU, zU) => {
            const cU = UU.bodies();
            ((XU, zU) => {
              const cU = (0, oU.h)("attack"),
                yU = XU.wasPressed(cU);
              yU && !XX.isLatched() && (CU = UU.targetsBlock()), XX.update(yU, XU.isHeld(cU), zU, "toggle" === (0, NU.i)().attackMode), XX.isLatched() && CU ? mU.update(UU.targetsBlock(), zU) && XX.unlatch() : mU.reset(), (0, VU.c)(XX.isLatched())
            })(XU, zU), zX.update(XU.wasPressed((0, oU.h)("use")), XU.isHeld((0, oU.h)("use")), zU, !1), FX.update(XU.isHeld((0, oU.h)("hotbarPrevious")), zU) && UU.scrollHotbar(-1), oX.update(XU.isHeld((0, oU.h)("hotbarNext")), zU) && UU.scrollHotbar(1), ((XU, zU, cU) => {
              const yU = (0, oU.h)("perspective"),
                QU = (0, oU.h)("pickBlock"),
                AU = UU.pickBlockAllowed();
              (0, sU.g)(AU && !EX && UU.targetsBlock());
              const FU = () => {
                zU.pickBlock() && (EX = !0, (0, sU.g)(!1))
              };
              if (!AU || QU !== yU) return DX.release(), XU.wasPressed(yU) && zU.swapCameraZoom(), void(AU && XU.wasPressed(QU) && FU());
              const DU = DX.update(XU.wasPressed(QU), XU.isHeld(QU), cU, lU());
              "tap" === DU ? FU() : "hold" === DU && zU.swapCameraZoom()
            })(XU, cU, zU), ((XU, zU, cU) => {
              const yU = (0, oU.h)("drop");
              if (XU.wasPressed(yU)) {
                zU.dropItem(!1);
                const UU = (0, NU.i)();
                "off" !== UU.buttonRepeat && (PU = cU, WU = nU.c[UU.tapHoldTime].dropStackMs, (0, vU.g)(WU))
              }
              null !== PU && (!XU.isHeld(yU) || UU.selectedSlotEmpty() ? eU() : cU - PU >= WU && (eU(), zU.dropItem(!0)))
            })(XU, cU, zU), hU.update(cU, XU, zU, lU()), tX(XU, zU)
          },
          kX = YU.d.register({
            name: "gameplay",
            isActive: () => {
              const XU = cX && "keyboardMouse" === cU.e.get("activeInputDevice") && !(0, IU.I)(),
                zU = (0, IU.k)() ? [OU.b] : [];
              return ((0, IU.k)() || XU) && (0, tU.e)(zU) && UU.hasPlayer()
            },
            onFrame: UU => {
              const XU = performance.now(),
                zU = (0, NU.i)(),
                cU = (0, fU.p)(UU, (0, fU.j)(zU, (0, oU.h)("pause"), (0, iU.b)().isSupported())),
                yU = (0, fU.h)(cU, zU.swapSticks);
              return (0, IU.k)() ? (QX = !1, (0, tU.e)() ? (AX = !1, KU.update(yU.look, zU, cU.isHeld((0, oU.h)("use"))), pX(cU, yU.move, XU), void gX(cU, XU)) : (AX || (AX = !0, EU.lostToPadScreen(), NX()), void aX(cU, XU))) : (QX || (YX(), QX = !0), void pX(cU, yU.move, XU))
            },
            onDeactivate: UU => {
              (0, IU.k)() && EU.lostToPadScreen(), NX(UU)
            },
            onPeekFrame: XU => {
              (0, IU.k)() && (0, tU.e)(OU.h) && UU.hasPlayer() ? pX(XU, (0, fU.h)(XU, (0, NU.i)().swapSticks).move, performance.now(), !0) : NX()
            }
          }),
          GX = (0, OU.d)(UU),
          BX = (() => {
            const UU = yU.k.subscribe(qU.d, (UU => {
              !UU && (0, IU.k)() && "inGame" === cU.e.get("gameState") && yU.k.UY("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              yU.k.unsubscribe(UU)
            }
          })();
        return () => {
          NX(), UU.uninstall(), (0, MU.f)(!1), (0, sU.g)(!1), yU.k.unsubscribe(ZU), yU.k.unsubscribe(UX), kX(), GX(), BX(), KU.uninstall()
        }
      }
  },
  41638: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => pU,
      d: () => tU,
      h: () => IU
    });
    var cU = zU(1310),
      yU = zU(4651),
      QU = zU(9355),
      AU = zU(37653),
      FU = zU(1769),
      oU = zU(1190),
      DU = zU(8785),
      EU = zU(9273),
      YU = zU(9383);
    const NU = {
        emoteWheel: QU.e,
        quickChatWheel: EU.c,
        actionWheel: YU.q
      },
      IU = Object.keys(NU),
      pU = "dead",
      aU = UU => (0, cU.p)().includes(UU),
      tU = UU => {
        const XU = [(0, DU.k)(pU, (() => UU.hasPlayer() && UU.isPlayerDead())), (0, DU.k)("sleeping", (() => aU(AU.e))), (0, DU.k)("turnstile", (() => aU(oU.f))), (0, DU.k)("videoAd", FU.e), (0, DU.k)("replay", (() => (0, yU.g)() || UU.isReplayMode())), (0, DU.k)("freeCamera", (() => UU.isFreeCameraOn())), ...Object.entries(NU).map((UU => {
          let [XU, zU] = UU;
          return (0, DU.k)(XU, zU)
        }))];
        return () => {
          for (const UU of XU) UU()
        }
      }
  },
  41636: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU,
      d: () => oU,
      h: () => FU,
      j: () => EU,
      k: () => AU,
      n: () => QU,
      o: () => DU,
      p: () => YU
    });
    var cU = zU(8740);
    class yU {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(UU, XU, zU) {
        const yU = (0, cU.j)(UU, XU.lookDeadzone);
        if (Math.hypot(yU.x, yU.y) < .9 || Math.abs(yU.x) < Math.abs(yU.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = zU);
        const QU = (AU = XU.lookSensitivityX, Math.min(1, 100 / AU));
        var AU;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (zU - this.fullTiltSinceMs - 250 * QU) / (200 * QU)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const QU = (UU, XU, zU, yU, QU) => {
        let AU = 1;
        return "boost" === zU.lookCurve ? AU = UU.update(XU, zU, QU) : UU.reset(),
          function(UU, XU) {
            let {
              yawBoost: zU = 1,
              aiming: yU = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const QU = (0, cU.g)((0, cU.j)(UU, XU.lookDeadzone), XU.lookCurve),
              AU = 220 * Math.PI / 180,
              FU = yU ? XU.aimLookSensitivity / 100 : 1,
              oU = XU.lookSensitivityX / 100 * FU,
              DU = XU.lookSensitivityY / 100 * FU;
            return {
              yawRadPerSec: QU.x * AU * oU * zU * (XU.invertLookX ? -1 : 1),
              pitchRadPerSec: QU.y * AU * .7 * DU * (XU.invertLookY ? -1 : 1)
            }
          }(XU, zU, {
            yawBoost: AU,
            aiming: yU
          })
      },
      AU = (UU, XU) => {
        const zU = Math.max(0, Math.min(250, XU)) / 1e3;
        return {
          zq: UU.yawRadPerSec * zU,
          Qq: UU.pitchRadPerSec * zU
        }
      },
      FU = (UU, XU) => XU ? {
        move: UU.rightStick,
        look: UU.leftStick
      } : {
        move: UU.leftStick,
        look: UU.rightStick
      },
      oU = (UU, XU) => {
        const zU = (0, cU.j)(UU, XU),
          yU = Math.min(1, Math.hypot(zU.x, zU.y));
        return {
          magnitude: yU,
          speed: Math.min(1, yU / .8),
          headingOffset: 0 === yU ? 0 : Math.atan2(zU.x, -zU.y),
          x: zU.x,
          y: zU.y
        }
      },
      DU = (UU, XU) => {
        let {
          sprintPressed: zU,
          magnitude: cU,
          autoSprint: yU,
          nowMs: QU
        } = XU;
        const AU = zU ? QU : UU.latchedAtMs,
          FU = (UU => {
            let {
              running: XU,
              magnitude: zU,
              sprintPressed: cU,
              autoSprint: yU
            } = UU;
            return !(zU < .5) && (!!cU || !!(yU && zU >= .9) || XU)
          })({
            running: UU.running,
            magnitude: cU,
            sprintPressed: QU - AU <= 1e3,
            autoSprint: yU
          });
        return {
          running: FU,
          latchedAtMs: FU ? -1 / 0 : AU
        }
      },
      EU = (UU, XU, zU) => zU && UU.gyroAiming && "button" === UU.gyroActivation && UU.gyroButton !== XU ? UU.gyroButton : null,
      YU = (UU, XU) => XU ? {
        ...UU,
        isHeld: zU => zU !== XU && UU.isHeld(zU),
        wasPressed: zU => zU !== XU && UU.wasPressed(zU),
        wasReleased: zU => zU !== XU && UU.wasReleased(zU),
        value: zU => zU === XU ? 0 : UU.value(zU)
      } : UU
  },
  41644: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU,
      e: () => cU
    });
    const cU = UU => {
      let {
        mode: XU,
        sneakHeld: zU,
        sneakPressed: cU,
        sneakTogglePressed: yU,
        descending: QU,
        canCrouch: AU,
        toggled: FU
      } = UU;
      return AU ? QU ? {
        crouchHeld: zU,
        toggled: !1
      } : "hold" === XU ? {
        crouchHeld: zU,
        toggled: yU ? !FU : FU
      } : {
        crouchHeld: !1,
        toggled: cU || yU ? !FU : FU
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class yU {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(UU, XU) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = XU, this.graceEndsMs = XU + 500);
        const zU = XU < this.graceEndsMs;
        return zU && (UU.sneakPressed || UU.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, XU + 300))), UU.sneakHeld ? zU && UU.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: UU.sneakHeld && !this.ignoringHeld,
          sneakPressed: UU.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: UU.sneakTogglePressed && !zU
        }
      }
    }
  },
  41624: (UU, XU, zU) => {
    zU(9431)
  },
  41633: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => GU
    });
    var cU = zU(31),
      yU = zU(9355),
      QU = zU(9373),
      AU = zU(8751),
      FU = zU(8780),
      oU = zU(8764),
      DU = zU(41636),
      EU = zU(41638),
      YU = zU(8785),
      NU = zU(8740),
      IU = zU(9273),
      pU = zU(9383);
    const aU = [{
        isOpen: yU.i,
        openButton: () => (0, AU.h)("emoteWheel"),
        aim: UU => {
          cU.k.UY("emoteWheelPadAim", UU)
        },
        commit: UU => {
          cU.k.UY("requestEmoteWheelPadCommit", UU)
        },
        close: () => {
          cU.k.UY("requestEmoteWheelClose")
        }
      }, {
        isOpen: IU.c,
        openButton: () => (0, AU.h)("chat"),
        aim: UU => {
          cU.k.UY(IU.g, UU)
        },
        commit: UU => {
          cU.k.UY(IU.m, UU)
        },
        close: () => {
          cU.k.UY(IU.k)
        },
        keptOpenBy: [EU.b]
      }, {
        isOpen: pU.q,
        openButton: () => (0, AU.h)("actionButton"),
        aim: UU => {
          cU.k.UY(pU.e, UU)
        },
        commit: UU => {
          cU.k.UY(pU.j, UU)
        },
        close: () => {
          cU.k.UY(pU.g)
        }
      }],
      tU = () => {
        var UU;
        return null !== (UU = aU.find((UU => UU.isOpen()))) && void 0 !== UU ? UU : null
      },
      gU = UU => (0, AU.I)(UU.openButton()),
      kU = (UU, XU) => !(0, NU.I)(UU.frame.values, XU),
      GU = () => {
        let UU = null,
          XU = !1,
          zU = !1;
        return FU.d.register({
          name: "wheel",
          isActive: () => null !== tU(),
          peek: () => {
            const UU = tU();
            return UU && gU(UU) ? null : {
              over: "gameplay",
              stick: (0, oU.i)().swapSticks ? "right" : "left"
            }
          },
          onFrame: cU => {
            var yU;
            const NU = tU();
            if (!NU) return;
            if (null !== (0, YU.b)([...EU.h, ...null !== (yU = NU.keptOpenBy) && void 0 !== yU ? yU : []])) return void NU.close();
            const IU = NU.openButton(),
              pU = (0, DU.h)(cU.frame, (0, oU.i)().swapSticks),
              aU = gU(NU) ? pU.move : pU.look;
            UU !== NU ? (UU = NU, XU = !kU(cU, IU) || Math.hypot(aU.x, aU.y) >= QU.y, zU = !1) : zU && (zU = !1, kU(cU, IU) && (XU = !1)), NU.aim(aU);
            const GU = (0, AU.h)("menuConfirm"),
              BU = (0, AU.h)("menuBack");
            return cU.wasPressed(BU) ? (FU.d.consumeButton(BU), void NU.close()) : cU.wasPressed(GU) || cU.wasPressed(IU) ? (FU.d.consumeButton(GU), FU.d.consumeButton(IU), void NU.commit(!1)) : void(XU && kU(cU, IU) && (XU = !1, NU.commit(!0)))
          },
          onDeactivate: () => {
            zU = null !== UU && tU() === UU, zU || (UU = null, XU = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
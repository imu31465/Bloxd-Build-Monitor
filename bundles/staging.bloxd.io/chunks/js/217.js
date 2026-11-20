export const id = 217;
export const ids = [217];
export const modules = {
  36459: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => mU,
      g: () => xU
    });
    var tU = gU(3945),
      pU = gU(1410),
      EU = gU(56),
      PU = gU(6152),
      TU = gU(3940),
      qU = gU(1287),
      KU = gU(1800),
      cU = gU(1777),
      GU = gU(1412),
      jU = gU(1181),
      uU = gU(36467),
      CU = gU(1037),
      hU = gU.n(CU),
      QU = gU(1305),
      eU = gU(1049),
      WU = gU(1283),
      fU = gU(1090);
    const xU = "SleepingOverlay";

    function mU() {
      const {
        t: UU
      } = (0, jU.B)(), [RU, gU] = (0, EU.useState)(!1), [CU, mU] = (0, EU.useState)(null), [JU, wU] = (0, EU.useState)(1), [nU, bU] = (0, EU.useState)(!1), [oU, ZU] = (0, EU.useState)(!1), aU = (0, EU.useRef)(0), YU = (0, EU.useRef)(!1), BU = (0, EU.useRef)(!1), VU = (0, EU.useRef)(), rU = (0, EU.useRef)(null);

      function XU() {
        const UU = null !== CU && void 0 !== CU ? CU : "Rested Speed";
        KU.gameBridge.send("wakeUp", oU ? UU : null), rU.current = null, gU(!1), mU(null), wU(1), bU(!1), ZU(!1)
      }

      function vU() {
        return !nU && (XU(), !0)
      }
      return (0, pU.e)("PlayerPhysicsTypeUpdate", (UU => {
        UU !== rU.current && (rU.current = UU, UU === PU.u.SLEEPING ? (BU.current || (aU.current = KU.gameBridge.lookup("cameraZoom", null), BU.current = !0), YU.current = !0, KU.gameBridge.send("setCameraZoom", 3), gU(!0), wU(function() {
          for (const UU of KU.gameBridge.lookup("blocksStandingOn", null)) {
            if (uU.c.leafBeds.includes(UU)) return console.log(`Found leaf bed: ${UU}`), 1;
            if (uU.c.woolBeds.includes(UU)) return console.log(`Found woold bed: ${UU}`), 2;
            if (uU.c.strongBeds.includes(UU)) return console.log(`Found strong bed ${UU}`), 3
          }
          return 1
        }())) : (BU.current = !1, gU(!1), mU(null), wU(1)))
      })), (0, EU.useEffect)((() => () => {
        (0, qU.k)(xU)
      }), []), (0, EU.useEffect)((() => {
        RU ? (0, qU.o)(xU) : ((0, qU.k)(xU), YU.current && (KU.gameBridge.send("setCameraZoom", aU.current), YU.current = !1))
      }), [RU]), (0, WU.q)("overlay", VU, vU, RU), (0, fU.jsx)(tU.e, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: RU,
        timeout: 300,
        nodeRef: VU,
        unmountOnExit: !0,
        children: (0, fU.jsx)("div", {
          ref: VU,
          onClick: UU => {
            vU() && UU.stopPropagation()
          },
          children: (0, fU.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, fU.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: TU.i.map((RU => (0, fU.jsxs)(IU, {
                restedEffect: RU,
                jT: CU,
                setChosenRestedEffect: mU,
                children: [(0, fU.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, fU.jsx)(cU.e, {
                    text: [{
                      icon: RU
                    }]
                  }), TU.f[RU].shortName]
                }), (0, fU.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: UU(TU.f[RU].description, {
                    time: TU.f[RU].effectLevelDurations[JU] / 6e4
                  })
                })]
              }, RU)))
            }), (0, fU.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, fU.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, fU.jsxs)(GU.e, {
                className: "SleepingOverlayWakeUpButton",
                onClick: UU => {
                  oU ? XU() : (bU(!0), (0, QU.fb)((() => {
                    bU(!1), ZU(!0)
                  }), !0)), UU.stopPropagation()
                },
                loading: nU,
                children: [!oU && (0, fU.jsxs)(fU.Fragment, {
                  children: [(0, fU.jsx)(eU.c, {
                    name: "film"
                  }), " ", UU("classicGame:watchAdToGetRestedPerk")]
                }), oU && UU("classicGame:wakeUp")]
              }), (0, fU.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, fU.jsx)("div", {
                  className: hU()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === JU
                  }),
                  children: (0, fU.jsx)(cU.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, fU.jsx)("div", {
                  className: hU()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === JU
                  }),
                  children: (0, fU.jsx)(cU.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, fU.jsx)("div", {
                  className: hU()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === JU
                  }),
                  children: (0, fU.jsx)(cU.e, {
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
    const IU = (0, EU.memo)((function(UU) {
      let {
        children: RU,
        restedEffect: gU,
        jT: tU,
        setChosenRestedEffect: pU
      } = UU;
      return gU === tU ? (0, fU.jsx)(GU.j, {
        onClick: UU => {
          UU.stopPropagation()
        },
        children: RU
      }) : (0, fU.jsx)(GU.g, {
        onClick: UU => {
          pU(gU), UU.stopPropagation()
        },
        children: RU
      })
    }))
  },
  39942: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => MU
    });
    var tU = gU(21),
      pU = gU(24),
      EU = gU(3967),
      PU = gU(299),
      TU = gU(1567),
      qU = gU(7820),
      KU = gU(3984),
      cU = gU(8326),
      GU = gU(7849),
      jU = gU(7828),
      uU = gU(7854),
      CU = gU(1609),
      hU = gU(7862),
      QU = gU(8298),
      eU = gU(8440),
      WU = gU(8336),
      fU = gU(8442),
      xU = gU(1800),
      mU = gU(7807),
      IU = gU(8363),
      JU = gU(8355),
      wU = gU(8331);
    class nU {
      constructor() {
        this.lostAtMs = null
      }
      update(UU, RU) {
        return UU ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= RU, RU - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class bU {
      constructor(UU, RU) {
        this.press = UU, this.release = RU, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(UU, RU, gU, tU) {
        if (UU && null === this.downAtMs) return this.downAtMs = gU, this.latched = tU, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? UU && this.end() : !RU && gU - this.downAtMs >= 40 && this.end())
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
    const oU = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      ZU = UU => {
        let RU = null;
        const gU = new wU.b,
          tU = () => {
            RU && (((UU, RU, gU) => {
              switch (gU.kind) {
                case "reload":
                  return void RU.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void RU.specialActionUp(gU.action);
                case "customButton":
                  return void xU.gameBridge.send("pressCustomButton", {
                    id: gU.id,
                    down: !1
                  });
                case "touchButton":
                  UU.pressTouchButton(!1)
              }
            })(UU, RU.bodies, RU.action), RU = null)
          },
          EU = (gU, pU, EU, PU) => {
            tU(), RU = {
              action: pU,
              bodies: gU,
              heldBy: EU,
              atMs: PU
            }, ((UU, RU, gU) => {
              switch (gU.kind) {
                case "reload":
                  return RU.reloadGun(), void RU.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void RU.specialActionDown(gU.action);
                case "customButton":
                  return void xU.gameBridge.send("pressCustomButton", {
                    id: gU.id,
                    down: !0
                  });
                case "touchButton":
                  UU.pressTouchButton(!0)
              }
            })(UU, gU, pU)
          };
        return {
          update: (PU, TU, KU, cU) => {
            var jU;
            const uU = (0, IU.j)(UU.contextActionInputs()),
              CU = null !== (jU = uU[0]) && void 0 !== jU ? jU : oU;
            (0, JU.d)((0, IU.h)(CU) ? CU : null);
            const hU = (0, IU.d)(uU);
            (0, JU.g)(hU);
            const QU = (0, qU.f)("actionButton");
            if (hU) {
              const UU = gU.update(TU.wasPressed(QU), TU.isHeld(QU), KU, cU);
              "tap" === UU ? EU(PU, CU, [QU], KU) : "hold" === UU && (GU.e.consumeButton(QU), pU.p.yh(fU.n, uU))
            } else gU.release(), TU.wasPressed(QU) && EU(PU, CU, [QU], KU);
            RU && KU - RU.atMs >= 40 && !RU.heldBy.some((UU => (0, mU.C)(TU.frame.values, UU))) && tU()
          },
          pressPicked: (UU, RU) => {
            EU(UU, RU, [(0, qU.f)("menuConfirm"), (0, qU.f)("actionButton")], performance.now())
          },
          release: () => {
            gU.release(), tU(), (0, JU.d)(null), (0, JU.g)(!1)
          }
        }
      };
    var aU = gU(7801);
    var YU = gU(39936),
      BU = gU(8376),
      VU = gU(7843),
      rU = gU(8475);
    var XU = gU(39934),
      vU = gU(8480),
      dU = gU(39949),
      HU = gU(8457),
      SU = gU(8382),
      sU = gU(8385),
      yU = gU(8391),
      kU = gU(8303);
    const FU = () => kU.d[(0, jU.h)().tapHoldTime].wheelMs,
      iU = () => ((0, cU.c)(), new Event("controllerMenuKey")),
      AU = (UU, RU, gU) => new bU((() => {
        const gU = UU.bodies();
        return {
          bodies: gU,
          press: RU(gU)
        }
      }), (UU => {
        let {
          bodies: RU,
          press: tU
        } = UU;
        gU(RU, tU)
      })),
      zU = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      MU = UU => {
        const RU = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let gU = zU;
        const cU = new dU.e,
          xU = pU.p.subscribe("appManagerUpdated|activeInputDevice", (RU => {
            UU.deviceChanged(RU)
          }));
        let IU = null,
          JU = 0;
        const bU = () => {
          IU = null, (0, SU.d)(null)
        };
        let oU = !1;
        const MU = new nU,
          DU = UU.look,
          LU = new wU.b,
          NU = new wU.b,
          lU = ZU(UU),
          OU = pU.p.subscribe(fU.r, (RU => {
            lU.pressPicked(UU.bodies(), RU)
          })),
          UR = AU(UU, (UU => UU.primaryFireDown()), ((UU, RU) => {
            UU.primaryFireUp(RU)
          })),
          RR = AU(UU, (UU => UU.altFireDown()), ((UU, RU) => {
            UU.altFireUp(RU)
          }));
        let gR = !1,
          tR = !1,
          pR = !1;
        const ER = (0, QU.e)(mU.Q),
          PR = (0, QU.e)(mU.Q),
          TR = new wU.b;
        let qR = !1;
        const KR = () => {
            ER.reset(), PR.reset(), TR.release(), (0, yU.c)(!1), DU.release(), UR.cancel(), (0, sU.e)(!1), RR.cancel(), lU.release(), LU.release(), NU.release(), bU()
          },
          cR = function() {
            let tU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            KR(), tR = !1, tU || (gR = !1, gU = zU, Object.assign(RU, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), UU.stopMoving())
          },
          GR = function(tU, pU, EU) {
            let PU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const TU = (0, jU.h)(),
              KU = (0, XU.g)(pU, TU.moveDeadzone),
              GU = (0, qU.f)("sprint");
            gU = (0, XU.r)(gU, {
              sprintPressed: tU.wasPressed(GU),
              magnitude: KU.magnitude,
              autoSprint: TU.autoSprint,
              nowMs: EU
            }), RU.running = gU.running, RU.sprintHeld = tU.isHeld(GU), RU.x = KU.x, RU.y = KU.y, RU.magnitude = KU.speed, RU.headingOffset = KU.headingOffset, gR = KU.magnitude > 0;
            const uU = (0, qU.f)("jump");
            if (RU.jumpHeld = tU.isHeld(uU), RU.jumpPressed = tU.wasPressed(uU), RU.jumpPressed && UU.bodies().jumpDown(), PU) return void UU.move(RU, null);
            const CU = (0, qU.f)("sneak"),
              hU = cU.filter({
                sneakHeld: tU.isHeld(CU),
                sneakPressed: tU.wasPressed(CU),
                sneakTogglePressed: tU.wasPressed((0, qU.f)("sneakToggle"))
              }, EU);
            UU.move(RU, {
              ...hU,
              mode: TU.sneakMode
            })
          },
          jR = (UU, RU) => {
            const gU = (0, qU.f)("chat");
            if ("off" === (0, jU.h)().quickChat) return void(UU.wasPressed(gU) && (GU.e.consumeButton(gU), pU.p.yh(BU.c)));
            const tU = LU.update(UU.wasPressed(gU), UU.isHeld(gU), RU, FU());
            "tap" === tU || "hold" === tU && null === (0, CU.c)() ? pU.p.yh(BU.c) : "hold" === tU && (GU.e.consumeButton(gU), pU.p.yh(WU.o))
          },
          uR = (RU, gU) => {
            ((UU, RU) => {
              const gU = (0, eU.c)(),
                tU = (0, qU.f)("emoteWheel");
              if ("wheel" === (0, jU.h)().emoteButton) return UU.wasPressed(tU) && (GU.e.consumeButton(tU), pU.p.yh("requestEmoteWheelPadOpen", !0)), (0, eU.c)() !== gU;
              const EU = NU.update(UU.wasPressed(tU), UU.isHeld(tU), RU, FU());
              return "tap" === EU ? pU.p.yh("requestEmoteRepeatLast") : "hold" === EU && (GU.e.consumeButton(tU), pU.p.yh("requestEmoteWheelPadOpen", !1)), (0, eU.c)() !== gU
            })(RU, gU) || jR(RU, gU), RU.wasPressed((0, qU.f)("inventory")) && (GU.e.consumeButton((0, qU.f)("inventory")), (0, TU.y)(iU(), "inventory", UU.hasFullInventory())), RU.wasPressed((0, qU.f)("pause")) && (GU.e.consumeButton((0, qU.f)("pause")), (0, KU.d)() === PU.n.SOCIAL ? (0, TU.w)(iU(), PU.n.SOCIAL) : (0, TU.g)(iU())), RU.wasPressed((0, qU.f)("leaderboard")) && !(0, EU.e)() && (GU.e.consumeButton((0, qU.f)("leaderboard")), ((UU, RU) => {
              if ("shop" === (0, VU.b)()) return pU.p.yh(rU.j), void(0, TU.w)(UU, PU.n.SHOP, !0);
              (0, TU.w)(UU, PU.n.LOBBY_LEADERBOARD, RU)
            })(iU(), UU.hasLobbyLeaderboard()))
          },
          CR = (RU, gU) => {
            const tU = UU.bodies();
            ((RU, gU) => {
              const tU = (0, qU.f)("attack"),
                pU = RU.wasPressed(tU);
              pU && !UR.isLatched() && (oU = UU.targetsBlock()), UR.update(pU, RU.isHeld(tU), gU, "toggle" === (0, jU.h)().attackMode), UR.isLatched() && oU ? MU.update(UU.targetsBlock(), gU) && UR.unlatch() : MU.reset(), (0, sU.e)(UR.isLatched())
            })(RU, gU), RR.update(RU.wasPressed((0, qU.f)("use")), RU.isHeld((0, qU.f)("use")), gU, !1), ER.update(RU.isHeld((0, qU.f)("hotbarPrevious")), gU) && UU.scrollHotbar(-1), PR.update(RU.isHeld((0, qU.f)("hotbarNext")), gU) && UU.scrollHotbar(1), ((RU, gU, tU) => {
              const pU = (0, qU.f)("perspective"),
                EU = (0, qU.f)("pickBlock"),
                PU = UU.pickBlockAllowed();
              (0, yU.c)(PU && !qR && UU.targetsBlock());
              const TU = () => {
                gU.pickBlock() && (qR = !0, (0, yU.c)(!1))
              };
              if (!PU || EU !== pU) return TR.release(), RU.wasPressed(pU) && gU.swapCameraZoom(), void(PU && RU.wasPressed(EU) && TU());
              const KU = TR.update(RU.wasPressed(EU), RU.isHeld(EU), tU, FU());
              "tap" === KU ? TU() : "hold" === KU && gU.swapCameraZoom()
            })(RU, tU, gU), ((RU, gU, tU) => {
              const pU = (0, qU.f)("drop");
              if (RU.wasPressed(pU)) {
                gU.dropItem(!1);
                const UU = (0, jU.h)();
                "off" !== UU.buttonRepeat && (IU = tU, JU = kU.d[UU.tapHoldTime].dropStackMs, (0, SU.d)(JU))
              }
              null !== IU && (!RU.isHeld(pU) || UU.selectedSlotEmpty() ? bU() : tU - IU >= JU && (bU(), gU.dropItem(!0)))
            })(RU, tU, gU), lU.update(tU, RU, gU, FU()), uR(RU, gU)
          },
          hR = GU.e.register({
            name: "gameplay",
            isActive: () => {
              const RU = gR && "keyboardMouse" === tU.b.get("activeInputDevice") && !(0, uU.F)(),
                gU = (0, uU.i)() ? [YU.d] : [];
              return ((0, uU.i)() || RU) && (0, hU.d)(gU) && UU.hasPlayer()
            },
            onFrame: UU => {
              const RU = performance.now(),
                gU = (0, jU.h)(),
                tU = (0, XU.t)(UU, (0, XU.l)(gU, (0, qU.f)("pause"), (0, vU.c)().isSupported())),
                pU = (0, XU.i)(tU, gU.swapSticks);
              return (0, uU.i)() ? (tR = !1, (0, hU.d)() ? (pR = !1, DU.update(pU.look, gU, tU.isHeld((0, qU.f)("use"))), GR(tU, pU.move, RU), void CR(tU, RU)) : (pR || (pR = !0, cU.lostToPadScreen(), cR()), void jR(tU, RU))) : (tR || (KR(), tR = !0), void GR(tU, pU.move, RU))
            },
            onDeactivate: UU => {
              (0, uU.i)() && cU.lostToPadScreen(), cR(UU)
            },
            onPeekFrame: RU => {
              (0, uU.i)() && (0, hU.d)(YU.i) && UU.hasPlayer() ? GR(RU, (0, XU.i)(RU, (0, jU.h)().swapSticks).move, performance.now(), !0) : cR()
            }
          }),
          QR = (0, YU.h)(UU),
          eR = (() => {
            const UU = pU.p.subscribe(aU.e, (UU => {
              !UU && (0, uU.i)() && "inGame" === tU.b.get("gameState") && pU.p.yh("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              pU.p.unsubscribe(UU)
            }
          })();
        return () => {
          cR(), UU.uninstall(), (0, HU.h)(!1), (0, yU.c)(!1), pU.p.unsubscribe(xU), pU.p.unsubscribe(OU), hR(), QR(), eR(), DU.uninstall()
        }
      }
  },
  39936: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => CU,
      h: () => QU,
      i: () => uU
    });
    var tU = gU(1287),
      pU = gU(3967),
      EU = gU(8425),
      PU = gU(36459),
      TU = gU(1629),
      qU = gU(1177),
      KU = gU(7862),
      cU = gU(8336),
      GU = gU(8442);
    const jU = {
        emoteWheel: EU.h,
        quickChatWheel: cU.d,
        actionWheel: GU.v
      },
      uU = Object.keys(jU),
      CU = "dead",
      hU = UU => (0, tU.j)().includes(UU),
      QU = UU => {
        const RU = [(0, KU.l)(CU, (() => UU.hasPlayer() && UU.isPlayerDead())), (0, KU.l)("sleeping", (() => hU(PU.g))), (0, KU.l)("turnstile", (() => hU(qU.e))), (0, KU.l)("videoAd", TU.f), (0, KU.l)("replay", (() => (0, pU.e)() || UU.isReplayMode())), (0, KU.l)("freeCamera", (() => UU.isFreeCameraOn())), ...Object.entries(jU).map((UU => {
          let [RU, gU] = UU;
          return (0, KU.l)(RU, gU)
        }))];
        return () => {
          for (const UU of RU) UU()
        }
      }
  },
  39934: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU,
      g: () => qU,
      i: () => TU,
      l: () => cU,
      o: () => PU,
      p: () => EU,
      r: () => KU,
      t: () => GU
    });
    var tU = gU(7807);
    class pU {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(UU, RU, gU) {
        const pU = (0, tU.g)(UU, RU.lookDeadzone);
        if (Math.hypot(pU.x, pU.y) < .9 || Math.abs(pU.x) < Math.abs(pU.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = gU);
        const EU = (PU = RU.lookSensitivityX, Math.min(1, 100 / PU));
        var PU;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (gU - this.fullTiltSinceMs - 250 * EU) / (200 * EU)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const EU = (UU, RU, gU, pU, EU) => {
        let PU = 1;
        return "boost" === gU.lookCurve ? PU = UU.update(RU, gU, EU) : UU.reset(),
          function(UU, RU) {
            let {
              yawBoost: gU = 1,
              aiming: pU = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const EU = (0, tU.e)((0, tU.g)(UU, RU.lookDeadzone), RU.lookCurve),
              PU = 220 * Math.PI / 180,
              TU = pU ? RU.aimLookSensitivity / 100 : 1,
              qU = RU.lookSensitivityX / 100 * TU,
              KU = RU.lookSensitivityY / 100 * TU;
            return {
              yawRadPerSec: EU.x * PU * qU * gU * (RU.invertLookX ? -1 : 1),
              pitchRadPerSec: EU.y * PU * .7 * KU * (RU.invertLookY ? -1 : 1)
            }
          }(RU, gU, {
            yawBoost: PU,
            aiming: pU
          })
      },
      PU = (UU, RU) => {
        const gU = Math.max(0, Math.min(250, RU)) / 1e3;
        return {
          Xw: UU.yawRadPerSec * gU,
          Ow: UU.pitchRadPerSec * gU
        }
      },
      TU = (UU, RU) => RU ? {
        move: UU.rightStick,
        look: UU.leftStick
      } : {
        move: UU.leftStick,
        look: UU.rightStick
      },
      qU = (UU, RU) => {
        const gU = (0, tU.g)(UU, RU),
          pU = Math.min(1, Math.hypot(gU.x, gU.y));
        return {
          magnitude: pU,
          speed: Math.min(1, pU / .8),
          headingOffset: 0 === pU ? 0 : Math.atan2(gU.x, -gU.y),
          x: gU.x,
          y: gU.y
        }
      },
      KU = (UU, RU) => {
        let {
          sprintPressed: gU,
          magnitude: tU,
          autoSprint: pU,
          nowMs: EU
        } = RU;
        const PU = gU ? EU : UU.latchedAtMs,
          TU = (UU => {
            let {
              running: RU,
              magnitude: gU,
              sprintPressed: tU,
              autoSprint: pU
            } = UU;
            return !(gU < .5) && (!!tU || !!(pU && gU >= .9) || RU)
          })({
            running: UU.running,
            magnitude: tU,
            sprintPressed: EU - PU <= 1e3,
            autoSprint: pU
          });
        return {
          running: TU,
          latchedAtMs: TU ? -1 / 0 : PU
        }
      },
      cU = (UU, RU, gU) => gU && UU.gyroAiming && "button" === UU.gyroActivation && UU.gyroButton !== RU ? UU.gyroButton : null,
      GU = (UU, RU) => RU ? {
        ...UU,
        isHeld: gU => gU !== RU && UU.isHeld(gU),
        wasPressed: gU => gU !== RU && UU.wasPressed(gU),
        wasReleased: gU => gU !== RU && UU.wasReleased(gU),
        value: gU => gU === RU ? 0 : UU.value(gU)
      } : UU
  },
  39949: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU,
      f: () => tU
    });
    const tU = UU => {
      let {
        mode: RU,
        sneakHeld: gU,
        sneakPressed: tU,
        sneakTogglePressed: pU,
        descending: EU,
        canCrouch: PU,
        toggled: TU
      } = UU;
      return PU ? EU ? {
        crouchHeld: gU,
        toggled: !1
      } : "hold" === RU ? {
        crouchHeld: gU,
        toggled: pU ? !TU : TU
      } : {
        crouchHeld: !1,
        toggled: tU || pU ? !TU : TU
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class pU {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(UU, RU) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = RU, this.graceEndsMs = RU + 500);
        const gU = RU < this.graceEndsMs;
        return gU && (UU.sneakPressed || UU.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, RU + 300))), UU.sneakHeld ? gU && UU.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: UU.sneakHeld && !this.ignoringHeld,
          sneakPressed: UU.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: UU.sneakTogglePressed && !gU
        }
      }
    }
  },
  39924: (UU, RU, gU) => {
    gU(8480)
  },
  39928: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => fU
    });
    var tU = gU(24),
      pU = gU(8425),
      EU = gU(8431),
      PU = gU(7820),
      TU = gU(7849),
      qU = gU(7828),
      KU = gU(39934),
      cU = gU(39936),
      GU = gU(7862),
      jU = gU(7807),
      uU = gU(8336),
      CU = gU(8442);
    const hU = [{
        isOpen: pU.k,
        openButton: () => (0, PU.f)("emoteWheel"),
        aim: UU => {
          tU.p.yh("emoteWheelPadAim", UU)
        },
        commit: UU => {
          tU.p.yh("requestEmoteWheelPadCommit", UU)
        },
        close: () => {
          tU.p.yh("requestEmoteWheelClose")
        }
      }, {
        isOpen: uU.d,
        openButton: () => (0, PU.f)("chat"),
        aim: UU => {
          tU.p.yh(uU.f, UU)
        },
        commit: UU => {
          tU.p.yh(uU.k, UU)
        },
        close: () => {
          tU.p.yh(uU.i)
        },
        keptOpenBy: [cU.d]
      }, {
        isOpen: CU.v,
        openButton: () => (0, PU.f)("actionButton"),
        aim: UU => {
          tU.p.yh(CU.d, UU)
        },
        commit: UU => {
          tU.p.yh(CU.j, UU)
        },
        close: () => {
          tU.p.yh(CU.f)
        }
      }],
      QU = () => {
        var UU;
        return null !== (UU = hU.find((UU => UU.isOpen()))) && void 0 !== UU ? UU : null
      },
      eU = UU => (0, PU.H)(UU.openButton()),
      WU = (UU, RU) => !(0, jU.C)(UU.frame.values, RU),
      fU = () => {
        let UU = null,
          RU = !1,
          gU = !1;
        return TU.e.register({
          name: "wheel",
          isActive: () => null !== QU(),
          peek: () => {
            const UU = QU();
            return UU && eU(UU) ? null : {
              over: "gameplay",
              stick: (0, qU.h)().swapSticks ? "right" : "left"
            }
          },
          onFrame: tU => {
            var pU;
            const jU = QU();
            if (!jU) return;
            if (null !== (0, GU.b)([...cU.i, ...null !== (pU = jU.keptOpenBy) && void 0 !== pU ? pU : []])) return void jU.close();
            const uU = jU.openButton(),
              CU = (0, KU.i)(tU.frame, (0, qU.h)().swapSticks),
              hU = eU(jU) ? CU.move : CU.look;
            UU !== jU ? (UU = jU, RU = !WU(tU, uU) || Math.hypot(hU.x, hU.y) >= EU.z, gU = !1) : gU && (gU = !1, WU(tU, uU) && (RU = !1)), jU.aim(hU);
            const fU = (0, PU.f)("menuConfirm"),
              xU = (0, PU.f)("menuBack");
            return tU.wasPressed(xU) ? (TU.e.consumeButton(xU), void jU.close()) : tU.wasPressed(fU) || tU.wasPressed(uU) ? (TU.e.consumeButton(fU), TU.e.consumeButton(uU), void jU.commit(!1)) : void(RU && WU(tU, uU) && (RU = !1, jU.commit(!0)))
          },
          onDeactivate: () => {
            gU = null !== UU && QU() === UU, gU || (UU = null, RU = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
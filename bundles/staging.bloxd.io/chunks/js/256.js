export const id = 256;
export const ids = [256];
export const modules = {
  38029: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => CR,
      h: () => AR
    });
    var yR = GR(3040),
      tR = GR(1581),
      uR = GR(66),
      ZR = GR(7588),
      qR = GR(3022),
      iR = GR(1383),
      fR = GR(2134),
      VR = GR(2105),
      KR = GR(1590),
      wR = GR(1270),
      rR = GR(38034),
      eR = GR(1163),
      aR = GR.n(eR),
      LR = GR(1444),
      nR = GR(1468),
      UR = GR(1366),
      WR = GR(1378);
    const AR = "SleepingOverlay";

    function CR() {
      const {
        t: RR
      } = (0, wR.A)(), [JR, GR] = (0, uR.useState)(!1), [eR, CR] = (0, uR.useState)(null), [MR, BR] = (0, uR.useState)(1), [lR, pR] = (0, uR.useState)(!1), [gR, bR] = (0, uR.useState)(!1), vR = (0, uR.useRef)(0), OR = (0, uR.useRef)(!1), xR = (0, uR.useRef)(!1), NR = (0, uR.useRef)(), DR = (0, uR.useRef)(null);

      function HR() {
        const RR = null !== eR && void 0 !== eR ? eR : "Rested Speed";
        fR.gameBridge.send("wakeUp", gR ? RR : null), DR.current = null, GR(!1), CR(null), BR(1), pR(!1), bR(!1)
      }

      function oR() {
        return !lR && (HR(), !0)
      }
      return (0, tR.f)("PlayerPhysicsTypeUpdate", (RR => {
        RR !== DR.current && (DR.current = RR, RR === ZR.k.SLEEPING ? (xR.current || (vR.current = fR.gameBridge.lookup("cameraZoom", null), xR.current = !0), OR.current = !0, fR.gameBridge.send("setCameraZoom", 3), GR(!0), BR(function() {
          for (const RR of fR.gameBridge.lookup("blocksStandingOn", null)) {
            if (rR.b.leafBeds.includes(RR)) return console.log(`Found leaf bed: ${RR}`), 1;
            if (rR.b.woolBeds.includes(RR)) return console.log(`Found woold bed: ${RR}`), 2;
            if (rR.b.strongBeds.includes(RR)) return console.log(`Found strong bed ${RR}`), 3
          }
          return 1
        }())) : (xR.current = !1, GR(!1), CR(null), BR(1)))
      })), (0, uR.useEffect)((() => () => {
        (0, iR.q)(AR)
      }), []), (0, uR.useEffect)((() => {
        JR ? (0, iR.s)(AR) : ((0, iR.q)(AR), OR.current && (fR.gameBridge.send("setCameraZoom", vR.current), OR.current = !1))
      }), [JR]), (0, UR.u)("overlay", NR, oR, JR), (0, WR.jsx)(yR.d, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: JR,
        timeout: 300,
        nodeRef: NR,
        unmountOnExit: !0,
        children: (0, WR.jsx)("div", {
          ref: NR,
          onClick: RR => {
            oR() && RR.stopPropagation()
          },
          children: (0, WR.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, WR.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: qR.j.map((JR => (0, WR.jsxs)(XR, {
                restedEffect: JR,
                GV: eR,
                setChosenRestedEffect: CR,
                children: [(0, WR.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, WR.jsx)(VR.c, {
                    text: [{
                      icon: JR
                    }]
                  }), qR.f[JR].shortName]
                }), (0, WR.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: RR(qR.f[JR].description, {
                    time: qR.f[JR].effectLevelDurations[MR] / 6e4
                  })
                })]
              }, JR)))
            }), (0, WR.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, WR.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, WR.jsxs)(KR.g, {
                className: "SleepingOverlayWakeUpButton",
                onClick: RR => {
                  gR ? HR() : (pR(!0), (0, LR.eb)((() => {
                    pR(!1), bR(!0)
                  }), !0)), RR.stopPropagation()
                },
                loading: lR,
                children: [!gR && (0, WR.jsxs)(WR.Fragment, {
                  children: [(0, WR.jsx)(nR.d, {
                    name: "film"
                  }), " ", RR("classicGame:watchAdToGetRestedPerk")]
                }), gR && RR("classicGame:wakeUp")]
              }), (0, WR.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, WR.jsx)("div", {
                  className: aR()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === MR
                  }),
                  children: (0, WR.jsx)(VR.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, WR.jsx)("div", {
                  className: aR()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === MR
                  }),
                  children: (0, WR.jsx)(VR.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, WR.jsx)("div", {
                  className: aR()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === MR
                  }),
                  children: (0, WR.jsx)(VR.c, {
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
    const XR = (0, uR.memo)((function(RR) {
      let {
        children: JR,
        restedEffect: GR,
        GV: yR,
        setChosenRestedEffect: tR
      } = RR;
      return GR === yR ? (0, WR.jsx)(KR.n, {
        onClick: RR => {
          RR.stopPropagation()
        },
        children: JR
      }) : (0, WR.jsx)(KR.i, {
        onClick: RR => {
          tR(GR), RR.stopPropagation()
        },
        children: JR
      })
    }))
  },
  42097: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => sR
    });
    var yR = GR(25),
      tR = GR(32),
      uR = GR(5028),
      ZR = GR(359),
      qR = GR(1800),
      iR = GR(9495),
      fR = GR(5049),
      VR = GR(10035),
      KR = GR(9523),
      wR = GR(9504),
      rR = GR(9528),
      eR = GR(1532),
      aR = GR(1874),
      LR = GR(9533),
      nR = GR(9980),
      UR = GR(10162),
      WR = GR(10042),
      AR = GR(10170),
      CR = GR(2134),
      XR = GR(9483),
      MR = GR(10080),
      BR = GR(10072),
      lR = GR(10037);
    class pR {
      constructor() {
        this.lostAtMs = null
      }
      update(RR, JR) {
        return RR ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= JR, JR - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class gR {
      constructor(RR, JR) {
        this.press = RR, this.release = JR, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(RR, JR, GR, yR) {
        if (RR && null === this.downAtMs) return this.downAtMs = GR, this.latched = yR, void(this.token = this.press(yR));
        null !== this.downAtMs && (this.latched ? RR && this.end() : !JR && GR - this.downAtMs >= 40 && this.end())
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
        const RR = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(RR)
      }
    }
    const bR = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      vR = RR => {
        let JR = null;
        const GR = new lR.c,
          yR = () => {
            JR && (((RR, JR, GR) => {
              switch (GR.kind) {
                case "reload":
                  return void JR.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void JR.specialActionUp(GR.action);
                case "customButton":
                  return void CR.gameBridge.send("pressCustomButton", {
                    id: GR.id,
                    down: !1
                  });
                case "touchButton":
                  RR.pressTouchButton(!1)
              }
            })(RR, JR.bodies, JR.action), JR = null)
          },
          uR = (GR, tR, uR, ZR) => {
            yR(), JR = {
              action: tR,
              bodies: GR,
              heldBy: uR,
              atMs: ZR
            }, ((RR, JR, GR) => {
              switch (GR.kind) {
                case "reload":
                  return JR.reloadGun(), void JR.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void JR.specialActionDown(GR.action);
                case "customButton":
                  return void CR.gameBridge.send("pressCustomButton", {
                    id: GR.id,
                    down: !0
                  });
                case "touchButton":
                  RR.pressTouchButton(!0)
              }
            })(RR, GR, tR)
          };
        return {
          update: (ZR, qR, fR, VR) => {
            var wR;
            const rR = (0, MR.k)(RR.contextActionInputs()),
              eR = null !== (wR = rR[0]) && void 0 !== wR ? wR : bR;
            (0, BR.c)((0, MR.d)(eR) ? eR : null);
            const aR = (0, MR.c)(rR);
            (0, BR.d)(aR);
            const LR = (0, iR.h)("actionButton");
            if (aR) {
              const RR = GR.update(qR.wasPressed(LR), qR.isHeld(LR), fR, VR);
              "tap" === RR ? uR(ZR, eR, [LR], fR) : "hold" === RR && (KR.e.consumeButton(LR), tR.n.JK(AR.j, rR))
            } else GR.release(), qR.wasPressed(LR) && uR(ZR, eR, [LR], fR);
            JR && fR - JR.atMs >= 40 && !JR.heldBy.some((RR => (0, XR.J)(qR.frame.values, RR))) && yR()
          },
          pressPicked: (RR, JR) => {
            uR(RR, JR, [(0, iR.h)("menuConfirm"), (0, iR.h)("actionButton")], performance.now())
          },
          release: () => {
            GR.release(), yR(), (0, BR.c)(null), (0, BR.d)(!1)
          }
        }
      };
    var OR = GR(9481);
    var xR = GR(42091),
      NR = GR(10094),
      DR = GR(3494),
      HR = GR(9520),
      oR = GR(10199);
    var cR = GR(42088),
      PR = GR(10203),
      IR = GR(42103),
      mR = GR(10181),
      zR = GR(10099),
      SR = GR(10106),
      jR = GR(10114);
    class dR {
      constructor(RR) {
        this.bodies = RR, this.gesture = new lR.c, this.zoomBodies = null
      }
      update(RR, JR, GR, yR, tR) {
        if (!tR) return this.release(), RR.wasPressed(JR);
        if (null !== this.zoomBodies) return RR.isHeld(JR) || this.endZoom(), !1;
        const uR = this.gesture.update(RR.wasPressed(JR), RR.isHeld(JR), GR, yR);
        return "hold" === uR && RR.isHeld(JR) && (this.zoomBodies = this.bodies(), this.zoomBodies.zoom(!0)), "tap" === uR
      }
      release() {
        this.gesture.release(), this.endZoom()
      }
      endZoom() {
        var RR;
        null === (RR = this.zoomBodies) || void 0 === RR || RR.zoom(!1), this.zoomBodies = null
      }
    }
    var ER = GR(9987),
      YR = GR(10057);
    const kR = () => ER.b[(0, wR.l)().tapHoldTime].wheelMs,
      QR = () => ((0, VR.e)(), (0, YR.e)("controllerMenuKey")),
      FR = (RR, JR, GR) => new gR((GR => {
        const yR = RR.bodies();
        return {
          bodies: yR,
          press: JR(yR, GR)
        }
      }), (RR => {
        let {
          bodies: JR,
          press: yR
        } = RR;
        GR(JR, yR)
      })),
      TR = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      sR = RR => {
        const JR = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let GR = TR;
        const VR = new IR.d,
          CR = tR.n.subscribe("appManagerUpdated|activeInputDevice", (JR => {
            RR.deviceChanged(JR)
          }));
        let MR = null,
          BR = 0;
        const gR = () => {
          MR = null, (0, zR.c)(null)
        };
        let bR = !1;
        const YR = new pR,
          sR = RR.look,
          hR = new lR.c,
          RJ = new lR.c,
          JJ = vR(RR),
          GJ = tR.n.subscribe(AR.m, (JR => {
            JJ.pressPicked(RR.bodies(), JR)
          })),
          yJ = FR(RR, ((RR, JR) => RR.primaryFireDown(!JR)), ((RR, JR) => {
            RR.primaryFireUp(JR)
          })),
          tJ = FR(RR, (RR => RR.altFireDown()), ((RR, JR) => {
            RR.altFireUp(JR)
          }));
        let uJ = !1,
          ZJ = -1 / 0,
          qJ = !1,
          iJ = !1;
        const fJ = (0, nR.c)(XR.bb),
          VJ = (0, nR.c)(XR.bb),
          KJ = new lR.c;
        let wJ = !1;
        const rJ = new dR((() => RR.bodies())),
          eJ = () => {
            fJ.reset(), VJ.reset(), KJ.release(), rJ.release(), (0, jR.g)(!1), sR.release(), yJ.cancel(), (0, SR.e)(!1), tJ.cancel(), JJ.release(), hR.release(), RJ.release(), gR()
          },
          aJ = function() {
            let yR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            eJ(), qJ = !1, yR || (uJ = !1, GR = TR, Object.assign(JR, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), RR.stopMoving())
          };
        let LJ = !1;
        const nJ = function(yR, uR, ZR) {
            let qR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, eR.g)()) return void(LJ || (LJ = !0, uJ = !1, RR.stopMoving()));
            LJ = !1;
            const fR = (0, wR.l)(),
              KR = (0, cR.i)(uR, fR.moveDeadzone),
              rR = (0, iR.h)("sprint");
            GR = (0, cR.v)(GR, {
              sprintPressed: yR.wasPressed(rR),
              magnitude: KR.magnitude,
              autoSprint: fR.autoSprint,
              nowMs: ZR
            }), JR.running = GR.running, JR.sprintHeld = yR.isHeld(rR), JR.x = KR.x, JR.y = KR.y, JR.magnitude = KR.speed, JR.headingOffset = KR.headingOffset, KR.magnitude > 0 && (!uJ || ZR - ZJ >= 1e3) && (ZJ = ZR, tR.n.JK("stickMoved")), uJ = KR.magnitude > 0;
            const aR = (0, iR.h)("jump");
            if (JR.jumpHeld = yR.isHeld(aR), JR.jumpPressed = yR.wasPressed(aR), JR.jumpPressed && RR.bodies().jumpDown(), qR) return void RR.move(JR, null);
            const LR = (0, iR.h)("sneak"),
              nR = VR.filter({
                sneakHeld: yR.isHeld(LR),
                sneakPressed: yR.wasPressed(LR),
                sneakTogglePressed: rJ.update(yR, (0, iR.h)("sneakToggle"), ZR, kR(), RR.zoomAllowed())
              }, ZR);
            RR.move(JR, {
              ...nR,
              mode: fR.sneakMode
            })
          },
          UJ = (RR, JR) => {
            const GR = (0, iR.h)("chat");
            if ("off" === (0, wR.l)().quickChat) return void(RR.wasPressed(GR) && (KR.e.consumeButton(GR), tR.n.JK(NR.e)));
            const yR = hR.update(RR.wasPressed(GR), RR.isHeld(GR), JR, kR());
            "tap" === yR || "hold" === yR && null === (0, aR.e)() ? tR.n.JK(NR.e) : "hold" === yR && (KR.e.consumeButton(GR), tR.n.JK(WR.o))
          },
          WJ = (JR, GR) => {
            ((RR, JR) => {
              const GR = (0, UR.d)(),
                yR = (0, iR.h)("emoteWheel");
              if ("wheel" === (0, wR.l)().emoteButton) return RR.wasPressed(yR) && (KR.e.consumeButton(yR), tR.n.JK("requestEmoteWheelPadOpen", !0)), (0, UR.d)() !== GR;
              const uR = RJ.update(RR.wasPressed(yR), RR.isHeld(yR), JR, kR());
              return "tap" === uR ? tR.n.JK("requestEmoteRepeatLast") : "hold" === uR && (KR.e.consumeButton(yR), tR.n.JK("requestEmoteWheelPadOpen", !1)), (0, UR.d)() !== GR
            })(JR, GR) || UJ(JR, GR), JR.wasPressed((0, iR.h)("inventory")) && (KR.e.consumeButton((0, iR.h)("inventory")), (0, qR.y)(QR(), "inventory", RR.hasFullInventory())), JR.wasPressed((0, iR.h)("pause")) && (KR.e.consumeButton((0, iR.h)("pause")), (0, fR.b)() === ZR.o.SOCIAL ? (0, qR.v)(QR(), ZR.o.SOCIAL) : (0, qR.f)(QR())), JR.wasPressed((0, iR.h)("leaderboard")) && !(0, uR.g)() && (KR.e.consumeButton((0, iR.h)("leaderboard")), ((RR, JR) => {
              if ("shop" === (0, HR.b)()) return tR.n.JK(oR.i), void(0, qR.v)(RR, ZR.o.SHOP, !0);
              (0, qR.A)(RR, JR, (0, DR.l)())
            })(QR(), RR.hasLobbyTab()))
          },
          AJ = (JR, GR) => {
            const yR = RR.bodies();
            ((JR, GR) => {
              const yR = (0, iR.h)("attack"),
                tR = JR.wasPressed(yR);
              tR && !yJ.isLatched() && (bR = RR.targetsBlock()), yJ.update(tR, JR.isHeld(yR), GR, "toggle" === (0, wR.l)().attackMode), yJ.isLatched() && bR ? YR.update(RR.targetsBlock(), GR) && yJ.unlatch() : YR.reset(), (0, SR.e)(yJ.isLatched())
            })(JR, GR), tJ.update(JR.wasPressed((0, iR.h)("use")), JR.isHeld((0, iR.h)("use")), GR, !1), fJ.update(JR.isHeld((0, iR.h)("hotbarPrevious")), GR) && RR.scrollHotbar(-1), VJ.update(JR.isHeld((0, iR.h)("hotbarNext")), GR) && RR.scrollHotbar(1), ((JR, GR, yR) => {
              const tR = (0, iR.h)("perspective"),
                uR = (0, iR.h)("pickBlock"),
                ZR = RR.pickBlockAllowed();
              (0, jR.g)(ZR && !wJ && RR.targetsBlock());
              const qR = () => {
                GR.pickBlock() && (wJ = !0, (0, jR.g)(!1))
              };
              if (!ZR || uR !== tR) return KJ.release(), JR.wasPressed(tR) && GR.swapCameraZoom(), void(ZR && JR.wasPressed(uR) && qR());
              const fR = KJ.update(JR.wasPressed(uR), JR.isHeld(uR), yR, kR());
              "tap" === fR ? qR() : "hold" === fR && GR.swapCameraZoom()
            })(JR, yR, GR), ((JR, GR, yR) => {
              const tR = (0, iR.h)("drop");
              if (JR.wasPressed(tR)) {
                GR.dropItem(!1);
                const RR = (0, wR.l)();
                "off" !== RR.buttonRepeat && (MR = yR, BR = ER.b[RR.tapHoldTime].dropStackMs, (0, zR.c)(BR))
              }
              null !== MR && (!JR.isHeld(tR) || RR.selectedSlotEmpty() ? gR() : yR - MR >= BR && (gR(), GR.dropItem(!0)))
            })(JR, yR, GR), JJ.update(yR, JR, GR, kR()), WJ(JR, GR)
          },
          CJ = KR.e.register({
            name: "gameplay",
            isActive: () => {
              const JR = uJ && "keyboardMouse" === yR.d.get("activeInputDevice") && !(0, rR.y)(),
                GR = (0, rR.k)() ? [xR.b] : [];
              return ((0, rR.k)() || JR) && (0, LR.i)(GR) && RR.hasPlayer()
            },
            onFrame: RR => {
              const JR = performance.now(),
                GR = (0, wR.l)(),
                yR = (0, cR.x)(RR, (0, cR.o)(GR, (0, iR.h)("pause"), (0, PR.e)().isSupported())),
                tR = (0, cR.m)(yR, GR.swapSticks);
              return (0, rR.k)() ? (qJ = !1, (0, LR.i)() ? (iJ = !1, sR.update(tR.look, GR, yR.isHeld((0, iR.h)("use"))), nJ(yR, tR.move, JR), void AJ(yR, JR)) : (iJ || (iJ = !0, VR.lostToPadScreen(), aJ()), void UJ(yR, JR))) : (qJ || (eJ(), qJ = !0), void nJ(yR, tR.move, JR))
            },
            onDeactivate: RR => {
              (0, rR.k)() && VR.lostToPadScreen(), aJ(RR)
            },
            onPeekFrame: JR => {
              (0, rR.k)() && (0, LR.i)(xR.f) && RR.hasPlayer() ? nJ(JR, (0, cR.m)(JR, (0, wR.l)().swapSticks).move, performance.now(), !0) : aJ()
            }
          }),
          XJ = (0, xR.e)(RR),
          MJ = (() => {
            const RR = tR.n.subscribe(OR.d, (RR => {
              !RR && (0, rR.k)() && "inGame" === yR.d.get("gameState") && tR.n.JK("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              tR.n.unsubscribe(RR)
            }
          })();
        return () => {
          aJ(), RR.uninstall(), (0, mR.f)(!1), (0, jR.g)(!1), tR.n.unsubscribe(CR), tR.n.unsubscribe(GJ), CJ(), XJ(), MJ(), sR.uninstall()
        }
      }
  },
  42091: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => eR,
      e: () => LR,
      f: () => rR
    });
    var yR = GR(1383),
      tR = GR(5028),
      uR = GR(10143),
      ZR = GR(38029),
      qR = GR(1921),
      iR = GR(1266),
      fR = GR(9533),
      VR = GR(10042),
      KR = GR(10170);
    const wR = {
        emoteWheel: uR.g,
        quickChatWheel: VR.e,
        actionWheel: KR.n
      },
      rR = Object.keys(wR),
      eR = "dead",
      aR = RR => (0, yR.n)().includes(RR),
      LR = RR => {
        const JR = [(0, fR.o)(eR, (() => RR.hasPlayer() && RR.isPlayerDead())), (0, fR.o)("sleeping", (() => aR(ZR.h))), (0, fR.o)("turnstile", (() => aR(iR.e))), (0, fR.o)("videoAd", qR.e), (0, fR.o)("replay", (() => (0, tR.g)() || RR.isReplayMode())), (0, fR.o)("freeCamera", (() => RR.isFreeCameraOn())), ...Object.entries(wR).map((RR => {
          let [JR, GR] = RR;
          return (0, fR.o)(JR, GR)
        }))];
        return () => {
          for (const RR of JR) RR()
        }
      }
  },
  42088: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR,
      i: () => iR,
      m: () => qR,
      o: () => VR,
      q: () => ZR,
      r: () => uR,
      v: () => fR,
      x: () => KR
    });
    var yR = GR(9483);
    class tR {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(RR, JR, GR) {
        const tR = (0, yR.k)(RR, JR.lookDeadzone);
        if (Math.hypot(tR.x, tR.y) < .9 || Math.abs(tR.x) < Math.abs(tR.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = GR);
        const uR = (ZR = JR.lookSensitivityX, Math.min(1, 100 / ZR));
        var ZR;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (GR - this.fullTiltSinceMs - 250 * uR) / (200 * uR)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const uR = (RR, JR, GR, tR, uR) => {
        let ZR = 1;
        return "boost" === GR.lookCurve ? ZR = RR.update(JR, GR, uR) : RR.reset(),
          function(RR, JR) {
            let {
              yawBoost: GR = 1,
              aiming: tR = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const uR = (0, yR.h)((0, yR.k)(RR, JR.lookDeadzone), JR.lookCurve),
              ZR = 220 * Math.PI / 180,
              qR = tR ? JR.aimLookSensitivity / 100 : 1,
              iR = JR.lookSensitivityX / 100 * qR,
              fR = JR.lookSensitivityY / 100 * qR;
            return {
              yawRadPerSec: uR.x * ZR * iR * GR * (JR.invertLookX ? -1 : 1),
              pitchRadPerSec: uR.y * ZR * .7 * fR * (JR.invertLookY ? -1 : 1)
            }
          }(JR, GR, {
            yawBoost: ZR,
            aiming: tR
          })
      },
      ZR = (RR, JR) => {
        const GR = Math.max(0, Math.min(250, JR)) / 1e3;
        return {
          bD: RR.yawRadPerSec * GR,
          PD: RR.pitchRadPerSec * GR
        }
      },
      qR = (RR, JR) => JR ? {
        move: RR.rightStick,
        look: RR.leftStick
      } : {
        move: RR.leftStick,
        look: RR.rightStick
      },
      iR = (RR, JR) => {
        const GR = (0, yR.k)(RR, JR),
          tR = Math.min(1, Math.hypot(GR.x, GR.y));
        return {
          magnitude: tR,
          speed: Math.min(1, tR / .8),
          headingOffset: 0 === tR ? 0 : Math.atan2(GR.x, -GR.y),
          x: GR.x,
          y: GR.y
        }
      },
      fR = (RR, JR) => {
        let {
          sprintPressed: GR,
          magnitude: yR,
          autoSprint: tR,
          nowMs: uR
        } = JR;
        const ZR = GR ? uR : RR.latchedAtMs,
          qR = (RR => {
            let {
              running: JR,
              magnitude: GR,
              sprintPressed: yR,
              autoSprint: tR
            } = RR;
            return !(GR < .5) && (!!yR || !!(tR && GR >= .9) || JR)
          })({
            running: RR.running,
            magnitude: yR,
            sprintPressed: uR - ZR <= 1e3,
            autoSprint: tR
          });
        return {
          running: qR,
          latchedAtMs: qR ? -1 / 0 : ZR
        }
      },
      VR = (RR, JR, GR) => GR && RR.gyroAiming && "button" === RR.gyroActivation && RR.gyroButton !== JR ? RR.gyroButton : null,
      KR = (RR, JR) => JR ? {
        ...RR,
        isHeld: GR => GR !== JR && RR.isHeld(GR),
        wasPressed: GR => GR !== JR && RR.wasPressed(GR),
        wasReleased: GR => GR !== JR && RR.wasReleased(GR),
        value: GR => GR === JR ? 0 : RR.value(GR)
      } : RR
  },
  42103: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR,
      e: () => yR
    });
    const yR = RR => {
      let {
        mode: JR,
        sneakHeld: GR,
        sneakPressed: yR,
        sneakTogglePressed: tR,
        descending: uR,
        canCrouch: ZR,
        toggled: qR
      } = RR;
      return ZR ? uR ? {
        crouchHeld: GR,
        toggled: !1
      } : "hold" === JR ? {
        crouchHeld: GR,
        toggled: tR ? !qR : qR
      } : {
        crouchHeld: !1,
        toggled: yR || tR ? !qR : qR
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class tR {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(RR, JR) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = JR, this.graceEndsMs = JR + 500);
        const GR = JR < this.graceEndsMs;
        return GR && (RR.sneakPressed || RR.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, JR + 300))), RR.sneakHeld ? GR && RR.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: RR.sneakHeld && !this.ignoringHeld,
          sneakPressed: RR.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: RR.sneakTogglePressed && !GR
        }
      }
    }
  },
  42078: (RR, JR, GR) => {
    GR(10203)
  },
  42086: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => WR
    });
    var yR = GR(32),
      tR = GR(10143),
      uR = GR(10158),
      ZR = GR(9495),
      qR = GR(9523),
      iR = GR(9504),
      fR = GR(42088),
      VR = GR(42091),
      KR = GR(9533),
      wR = GR(9483),
      rR = GR(10042),
      eR = GR(10170);
    const aR = [{
        isOpen: tR.k,
        openButton: () => (0, ZR.h)("emoteWheel"),
        aim: RR => {
          yR.n.JK("emoteWheelPadAim", RR)
        },
        commit: RR => {
          yR.n.JK("requestEmoteWheelPadCommit", RR)
        },
        close: () => {
          yR.n.JK("requestEmoteWheelClose")
        }
      }, {
        isOpen: rR.e,
        openButton: () => (0, ZR.h)("chat"),
        aim: RR => {
          yR.n.JK(rR.f, RR)
        },
        commit: RR => {
          yR.n.JK(rR.l, RR)
        },
        close: () => {
          yR.n.JK(rR.h)
        },
        keptOpenBy: [VR.b]
      }, {
        isOpen: eR.n,
        openButton: () => (0, ZR.h)("actionButton"),
        aim: RR => {
          yR.n.JK(eR.b, RR)
        },
        commit: RR => {
          yR.n.JK(eR.g, RR)
        },
        close: () => {
          yR.n.JK(eR.f)
        }
      }],
      LR = () => {
        var RR;
        return null !== (RR = aR.find((RR => RR.isOpen()))) && void 0 !== RR ? RR : null
      },
      nR = RR => (0, ZR.K)(RR.openButton()),
      UR = (RR, JR) => !(0, wR.J)(RR.frame.values, JR),
      WR = () => {
        let RR = null,
          JR = !1,
          GR = !1;
        return qR.e.register({
          name: "wheel",
          isActive: () => null !== LR(),
          peek: () => {
            const RR = LR();
            return RR && nR(RR) ? null : {
              over: "gameplay",
              stick: (0, iR.l)().swapSticks ? "right" : "left"
            }
          },
          onFrame: yR => {
            var tR;
            const wR = LR();
            if (!wR) return;
            if (null !== (0, KR.e)([...VR.f, ...null !== (tR = wR.keptOpenBy) && void 0 !== tR ? tR : []])) return void wR.close();
            const rR = wR.openButton(),
              eR = (0, fR.m)(yR.frame, (0, iR.l)().swapSticks),
              aR = nR(wR) ? eR.move : eR.look;
            RR !== wR ? (RR = wR, JR = !UR(yR, rR) || Math.hypot(aR.x, aR.y) >= uR.I, GR = !1) : GR && (GR = !1, UR(yR, rR) && (JR = !1)), wR.aim(aR);
            const WR = (0, ZR.h)("menuConfirm"),
              AR = (0, ZR.h)("menuBack");
            return yR.wasPressed(AR) ? (qR.e.consumeButton(AR), void wR.close()) : yR.wasPressed(WR) || yR.wasPressed(rR) ? (qR.e.consumeButton(WR), qR.e.consumeButton(rR), void wR.commit(!1)) : void(JR && UR(yR, rR) && (JR = !1, wR.commit(!0)))
          },
          onDeactivate: () => {
            GR = null !== RR && LR() === RR, GR || (RR = null, JR = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);
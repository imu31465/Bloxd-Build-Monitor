export const id = 251;
export const ids = [251];
export const modules = {
  37791: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => TH,
      f: () => PH
    });
    var AH = LH(4631),
      rH = LH(1450),
      SH = LH(45),
      hH = LH(7007),
      tH = LH(4624),
      zH = LH(1241),
      CH = LH(1998),
      EH = LH(1967),
      XH = LH(1455),
      GH = LH(1123),
      YH = LH(37793),
      uH = LH(1038),
      QH = LH.n(uH),
      WH = LH(1287),
      MH = LH(1315),
      xH = LH(1214),
      vH = LH(1225);
    const PH = "SleepingOverlay";

    function TH() {
      const {
        t: HH
      } = (0, GH.B)(), [BH, LH] = (0, SH.useState)(!1), [uH, TH] = (0, SH.useState)(null), [VH, OH] = (0, SH.useState)(1), [bH, kH] = (0, SH.useState)(!1), [mH, oH] = (0, SH.useState)(!1), IH = (0, SH.useRef)(0), fH = (0, SH.useRef)(!1), lH = (0, SH.useRef)(!1), KH = (0, SH.useRef)(), cH = (0, SH.useRef)(null);

      function eH() {
        const HH = null !== uH && void 0 !== uH ? uH : "Rested Speed";
        CH.gameBridge.send("wakeUp", mH ? HH : null), cH.current = null, LH(!1), TH(null), OH(1), kH(!1), oH(!1)
      }

      function qH() {
        return !bH && (eH(), !0)
      }
      return (0, rH.d)("PlayerPhysicsTypeUpdate", (HH => {
        HH !== cH.current && (cH.current = HH, HH === hH.o.SLEEPING ? (lH.current || (IH.current = CH.gameBridge.lookup("cameraZoom", null), lH.current = !0), fH.current = !0, CH.gameBridge.send("setCameraZoom", 3), LH(!0), OH(function() {
          for (const HH of CH.gameBridge.lookup("blocksStandingOn", null)) {
            if (YH.d.leafBeds.includes(HH)) return console.log(`Found leaf bed: ${HH}`), 1;
            if (YH.d.woolBeds.includes(HH)) return console.log(`Found woold bed: ${HH}`), 2;
            if (YH.d.strongBeds.includes(HH)) return console.log(`Found strong bed ${HH}`), 3
          }
          return 1
        }())) : (lH.current = !1, LH(!1), TH(null), OH(1)))
      })), (0, SH.useEffect)((() => () => {
        (0, zH.t)(PH)
      }), []), (0, SH.useEffect)((() => {
        BH ? (0, zH.x)(PH) : ((0, zH.t)(PH), fH.current && (CH.gameBridge.send("setCameraZoom", IH.current), fH.current = !1))
      }), [BH]), (0, xH.r)("overlay", KH, qH, BH), (0, vH.jsx)(AH.e, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: BH,
        timeout: 300,
        nodeRef: KH,
        unmountOnExit: !0,
        children: (0, vH.jsx)("div", {
          ref: KH,
          onClick: HH => {
            qH() && HH.stopPropagation()
          },
          children: (0, vH.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, vH.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: tH.h.map((BH => (0, vH.jsxs)(UH, {
                restedEffect: BH,
                dh: uH,
                setChosenRestedEffect: TH,
                children: [(0, vH.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, vH.jsx)(EH.b, {
                    text: [{
                      icon: BH
                    }]
                  }), tH.e[BH].shortName]
                }), (0, vH.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: HH(tH.e[BH].description, {
                    time: tH.e[BH].effectLevelDurations[VH] / 6e4
                  })
                })]
              }, BH)))
            }), (0, vH.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, vH.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, vH.jsxs)(XH.i, {
                className: "SleepingOverlayWakeUpButton",
                onClick: HH => {
                  mH ? eH() : (kH(!0), (0, WH.$)((() => {
                    kH(!1), oH(!0)
                  }), !0)), HH.stopPropagation()
                },
                loading: bH,
                children: [!mH && (0, vH.jsxs)(vH.Fragment, {
                  children: [(0, vH.jsx)(MH.c, {
                    name: "film"
                  }), " ", HH("classicGame:watchAdToGetRestedPerk")]
                }), mH && HH("classicGame:wakeUp")]
              }), (0, vH.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, vH.jsx)("div", {
                  className: QH()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === VH
                  }),
                  children: (0, vH.jsx)(EH.b, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, vH.jsx)("div", {
                  className: QH()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === VH
                  }),
                  children: (0, vH.jsx)(EH.b, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, vH.jsx)("div", {
                  className: QH()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === VH
                  }),
                  children: (0, vH.jsx)(EH.b, {
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
    const UH = (0, SH.memo)((function(HH) {
      let {
        children: BH,
        restedEffect: LH,
        dh: AH,
        setChosenRestedEffect: rH
      } = HH;
      return LH === AH ? (0, vH.jsx)(XH.u, {
        onClick: HH => {
          HH.stopPropagation()
        },
        children: BH
      }) : (0, vH.jsx)(XH.m, {
        onClick: HH => {
          rH(LH), HH.stopPropagation()
        },
        children: BH
      })
    }))
  },
  41884: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => JH
    });
    var AH = LH(15),
      rH = LH(18),
      SH = LH(4657),
      hH = LH(304),
      tH = LH(1659),
      zH = LH(8870),
      CH = LH(4685),
      EH = LH(9390),
      XH = LH(8901),
      GH = LH(8878),
      YH = LH(8908),
      uH = LH(1390),
      QH = LH(1711),
      WH = LH(8913),
      MH = LH(9342),
      xH = LH(9505),
      vH = LH(9407),
      PH = LH(9509),
      TH = LH(1998),
      UH = LH(8857),
      VH = LH(9442),
      OH = LH(9433),
      bH = LH(9399);
    class kH {
      constructor() {
        this.lostAtMs = null
      }
      update(HH, BH) {
        return HH ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= BH, BH - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class mH {
      constructor(HH, BH) {
        this.press = HH, this.release = BH, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(HH, BH, LH, AH) {
        if (HH && null === this.downAtMs) return this.downAtMs = LH, this.latched = AH, void(this.token = this.press(AH));
        null !== this.downAtMs && (this.latched ? HH && this.end() : !BH && LH - this.downAtMs >= 40 && this.end())
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
        const HH = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(HH)
      }
    }
    const oH = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      IH = HH => {
        let BH = null;
        const LH = new bH.b,
          AH = () => {
            BH && (((HH, BH, LH) => {
              switch (LH.kind) {
                case "reload":
                  return void BH.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void BH.specialActionUp(LH.action);
                case "customButton":
                  return void TH.gameBridge.send("pressCustomButton", {
                    id: LH.id,
                    down: !1
                  });
                case "touchButton":
                  HH.pressTouchButton(!1)
              }
            })(HH, BH.bodies, BH.action), BH = null)
          },
          SH = (LH, rH, SH, hH) => {
            AH(), BH = {
              action: rH,
              bodies: LH,
              heldBy: SH,
              atMs: hH
            }, ((HH, BH, LH) => {
              switch (LH.kind) {
                case "reload":
                  return BH.reloadGun(), void BH.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void BH.specialActionDown(LH.action);
                case "customButton":
                  return void TH.gameBridge.send("pressCustomButton", {
                    id: LH.id,
                    down: !0
                  });
                case "touchButton":
                  HH.pressTouchButton(!0)
              }
            })(HH, LH, rH)
          };
        return {
          update: (hH, tH, CH, EH) => {
            var GH;
            const YH = (0, VH.k)(HH.contextActionInputs()),
              uH = null !== (GH = YH[0]) && void 0 !== GH ? GH : oH;
            (0, OH.e)((0, VH.e)(uH) ? uH : null);
            const QH = (0, VH.b)(YH);
            (0, OH.i)(QH);
            const WH = (0, zH.k)("actionButton");
            if (QH) {
              const HH = LH.update(tH.wasPressed(WH), tH.isHeld(WH), CH, EH);
              "tap" === HH ? SH(hH, uH, [WH], CH) : "hold" === HH && (XH.b.consumeButton(WH), rH.k.AX(PH.l, YH))
            } else LH.release(), tH.wasPressed(WH) && SH(hH, uH, [WH], CH);
            BH && CH - BH.atMs >= 40 && !BH.heldBy.some((HH => (0, UH.G)(tH.frame.values, HH))) && AH()
          },
          pressPicked: (HH, BH) => {
            SH(HH, BH, [(0, zH.k)("menuConfirm"), (0, zH.k)("actionButton")], performance.now())
          },
          release: () => {
            LH.release(), AH(), (0, OH.e)(null), (0, OH.i)(!1)
          }
        }
      };
    var fH = LH(8855);
    var lH = LH(41875),
      KH = LH(9450),
      cH = LH(8897),
      eH = LH(9540);
    var qH = LH(41871),
      gH = LH(9543),
      NH = LH(41889),
      RH = LH(9522),
      jH = LH(9453),
      nH = LH(9458),
      FH = LH(9463),
      DH = LH(9347),
      wH = LH(9419);
    const ZH = () => DH.c[(0, GH.g)().tapHoldTime].wheelMs,
      dH = () => ((0, EH.c)(), (0, wH.c)("controllerMenuKey")),
      aH = (HH, BH, LH) => new mH((LH => {
        const AH = HH.bodies();
        return {
          bodies: AH,
          press: BH(AH, LH)
        }
      }), (HH => {
        let {
          bodies: BH,
          press: AH
        } = HH;
        LH(BH, AH)
      })),
      sH = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      JH = HH => {
        const BH = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let LH = sH;
        const EH = new NH.b,
          TH = rH.k.subscribe("appManagerUpdated|activeInputDevice", (BH => {
            HH.deviceChanged(BH)
          }));
        let VH = null,
          OH = 0;
        const mH = () => {
          VH = null, (0, jH.e)(null)
        };
        let oH = !1;
        const wH = new kH,
          JH = HH.look,
          iH = new bH.b,
          pH = new bH.b,
          yH = IH(HH),
          HB = rH.k.subscribe(PH.p, (BH => {
            yH.pressPicked(HH.bodies(), BH)
          })),
          BB = aH(HH, ((HH, BH) => HH.primaryFireDown(!BH)), ((HH, BH) => {
            HH.primaryFireUp(BH)
          })),
          LB = aH(HH, (HH => HH.altFireDown()), ((HH, BH) => {
            HH.altFireUp(BH)
          }));
        let AB = !1,
          rB = -1 / 0,
          SB = !1,
          hB = !1;
        const tB = (0, MH.d)(UH.T),
          zB = (0, MH.d)(UH.T),
          CB = new bH.b;
        let EB = !1;
        const XB = () => {
            tB.reset(), zB.reset(), CB.release(), (0, FH.e)(!1), JH.release(), BB.cancel(), (0, nH.g)(!1), LB.cancel(), yH.release(), iH.release(), pH.release(), mH()
          },
          GB = function() {
            let AH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            XB(), SB = !1, AH || (AB = !1, LH = sH, Object.assign(BH, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), HH.stopMoving())
          };
        let YB = !1;
        const uB = function(AH, SH, hH) {
            let tH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, uH.j)()) return void(YB || (YB = !0, AB = !1, HH.stopMoving()));
            YB = !1;
            const CH = (0, GH.g)(),
              XH = (0, qH.f)(SH, CH.moveDeadzone),
              YH = (0, zH.k)("sprint");
            LH = (0, qH.s)(LH, {
              sprintPressed: AH.wasPressed(YH),
              magnitude: XH.magnitude,
              autoSprint: CH.autoSprint,
              nowMs: hH
            }), BH.running = LH.running, BH.sprintHeld = AH.isHeld(YH), BH.x = XH.x, BH.y = XH.y, BH.magnitude = XH.speed, BH.headingOffset = XH.headingOffset, XH.magnitude > 0 && (!AB || hH - rB >= 1e3) && (rB = hH, rH.k.AX("stickMoved")), AB = XH.magnitude > 0;
            const QH = (0, zH.k)("jump");
            if (BH.jumpHeld = AH.isHeld(QH), BH.jumpPressed = AH.wasPressed(QH), BH.jumpPressed && HH.bodies().jumpDown(), tH) return void HH.move(BH, null);
            const WH = (0, zH.k)("sneak"),
              MH = EH.filter({
                sneakHeld: AH.isHeld(WH),
                sneakPressed: AH.wasPressed(WH),
                sneakTogglePressed: AH.wasPressed((0, zH.k)("sneakToggle"))
              }, hH);
            HH.move(BH, {
              ...MH,
              mode: CH.sneakMode
            })
          },
          QB = (HH, BH) => {
            const LH = (0, zH.k)("chat");
            if ("off" === (0, GH.g)().quickChat) return void(HH.wasPressed(LH) && (XH.b.consumeButton(LH), rH.k.AX(KH.c)));
            const AH = iH.update(HH.wasPressed(LH), HH.isHeld(LH), BH, ZH());
            "tap" === AH || "hold" === AH && null === (0, QH.e)() ? rH.k.AX(KH.c) : "hold" === AH && (XH.b.consumeButton(LH), rH.k.AX(vH.p))
          },
          WB = (BH, LH) => {
            ((HH, BH) => {
              const LH = (0, xH.c)(),
                AH = (0, zH.k)("emoteWheel");
              if ("wheel" === (0, GH.g)().emoteButton) return HH.wasPressed(AH) && (XH.b.consumeButton(AH), rH.k.AX("requestEmoteWheelPadOpen", !0)), (0, xH.c)() !== LH;
              const SH = pH.update(HH.wasPressed(AH), HH.isHeld(AH), BH, ZH());
              return "tap" === SH ? rH.k.AX("requestEmoteRepeatLast") : "hold" === SH && (XH.b.consumeButton(AH), rH.k.AX("requestEmoteWheelPadOpen", !1)), (0, xH.c)() !== LH
            })(BH, LH) || QB(BH, LH), BH.wasPressed((0, zH.k)("inventory")) && (XH.b.consumeButton((0, zH.k)("inventory")), (0, tH.F)(dH(), "inventory", HH.hasFullInventory())), BH.wasPressed((0, zH.k)("pause")) && (XH.b.consumeButton((0, zH.k)("pause")), (0, CH.e)() === hH.o.SOCIAL ? (0, tH.B)(dH(), hH.o.SOCIAL) : (0, tH.j)(dH())), BH.wasPressed((0, zH.k)("leaderboard")) && !(0, SH.f)() && (XH.b.consumeButton((0, zH.k)("leaderboard")), ((HH, BH) => {
              if ("shop" === (0, cH.b)()) return rH.k.AX(eH.n), void(0, tH.B)(HH, hH.o.SHOP, !0);
              (0, tH.B)(HH, hH.o.LOBBY_LEADERBOARD, BH)
            })(dH(), HH.hasLobbyTab()))
          },
          MB = (BH, LH) => {
            const AH = HH.bodies();
            ((BH, LH) => {
              const AH = (0, zH.k)("attack"),
                rH = BH.wasPressed(AH);
              rH && !BB.isLatched() && (oH = HH.targetsBlock()), BB.update(rH, BH.isHeld(AH), LH, "toggle" === (0, GH.g)().attackMode), BB.isLatched() && oH ? wH.update(HH.targetsBlock(), LH) && BB.unlatch() : wH.reset(), (0, nH.g)(BB.isLatched())
            })(BH, LH), LB.update(BH.wasPressed((0, zH.k)("use")), BH.isHeld((0, zH.k)("use")), LH, !1), tB.update(BH.isHeld((0, zH.k)("hotbarPrevious")), LH) && HH.scrollHotbar(-1), zB.update(BH.isHeld((0, zH.k)("hotbarNext")), LH) && HH.scrollHotbar(1), ((BH, LH, AH) => {
              const rH = (0, zH.k)("perspective"),
                SH = (0, zH.k)("pickBlock"),
                hH = HH.pickBlockAllowed();
              (0, FH.e)(hH && !EB && HH.targetsBlock());
              const tH = () => {
                LH.pickBlock() && (EB = !0, (0, FH.e)(!1))
              };
              if (!hH || SH !== rH) return CB.release(), BH.wasPressed(rH) && LH.swapCameraZoom(), void(hH && BH.wasPressed(SH) && tH());
              const CH = CB.update(BH.wasPressed(SH), BH.isHeld(SH), AH, ZH());
              "tap" === CH ? tH() : "hold" === CH && LH.swapCameraZoom()
            })(BH, AH, LH), ((BH, LH, AH) => {
              const rH = (0, zH.k)("drop");
              if (BH.wasPressed(rH)) {
                LH.dropItem(!1);
                const HH = (0, GH.g)();
                "off" !== HH.buttonRepeat && (VH = AH, OH = DH.c[HH.tapHoldTime].dropStackMs, (0, jH.e)(OH))
              }
              null !== VH && (!BH.isHeld(rH) || HH.selectedSlotEmpty() ? mH() : AH - VH >= OH && (mH(), LH.dropItem(!0)))
            })(BH, AH, LH), yH.update(AH, BH, LH, ZH()), WB(BH, LH)
          },
          xB = XH.b.register({
            name: "gameplay",
            isActive: () => {
              const BH = AB && "keyboardMouse" === AH.c.get("activeInputDevice") && !(0, YH.D)(),
                LH = (0, YH.j)() ? [lH.b] : [];
              return ((0, YH.j)() || BH) && (0, WH.d)(LH) && HH.hasPlayer()
            },
            onFrame: HH => {
              const BH = performance.now(),
                LH = (0, GH.g)(),
                AH = (0, qH.t)(HH, (0, qH.m)(LH, (0, zH.k)("pause"), (0, gH.d)().isSupported())),
                rH = (0, qH.j)(AH, LH.swapSticks);
              return (0, YH.j)() ? (SB = !1, (0, WH.d)() ? (hB = !1, JH.update(rH.look, LH, AH.isHeld((0, zH.k)("use"))), uB(AH, rH.move, BH), void MB(AH, BH)) : (hB || (hB = !0, EH.lostToPadScreen(), GB()), void QB(AH, BH))) : (SB || (XB(), SB = !0), void uB(AH, rH.move, BH))
            },
            onDeactivate: HH => {
              (0, YH.j)() && EH.lostToPadScreen(), GB(HH)
            },
            onPeekFrame: BH => {
              (0, YH.j)() && (0, WH.d)(lH.h) && HH.hasPlayer() ? uB(BH, (0, qH.j)(BH, (0, GH.g)().swapSticks).move, performance.now(), !0) : GB()
            }
          }),
          vB = (0, lH.e)(HH),
          PB = (() => {
            const HH = rH.k.subscribe(fH.e, (HH => {
              !HH && (0, YH.j)() && "inGame" === AH.c.get("gameState") && rH.k.AX("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              rH.k.unsubscribe(HH)
            }
          })();
        return () => {
          GB(), HH.uninstall(), (0, RH.h)(!1), (0, FH.e)(!1), rH.k.unsubscribe(TH), rH.k.unsubscribe(HB), xB(), vB(), PB(), JH.uninstall()
        }
      }
  },
  41875: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => uH,
      e: () => WH,
      h: () => YH
    });
    var AH = LH(1241),
      rH = LH(4657),
      SH = LH(9484),
      hH = LH(37791),
      tH = LH(1757),
      zH = LH(1115),
      CH = LH(8913),
      EH = LH(9407),
      XH = LH(9509);
    const GH = {
        emoteWheel: SH.g,
        quickChatWheel: EH.e,
        actionWheel: XH.r
      },
      YH = Object.keys(GH),
      uH = "dead",
      QH = HH => (0, AH.p)().includes(HH),
      WH = HH => {
        const BH = [(0, CH.h)(uH, (() => HH.hasPlayer() && HH.isPlayerDead())), (0, CH.h)("sleeping", (() => QH(hH.f))), (0, CH.h)("turnstile", (() => QH(zH.h))), (0, CH.h)("videoAd", tH.e), (0, CH.h)("replay", (() => (0, rH.f)() || HH.isReplayMode())), (0, CH.h)("freeCamera", (() => HH.isFreeCameraOn())), ...Object.entries(GH).map((HH => {
          let [BH, LH] = HH;
          return (0, CH.h)(BH, LH)
        }))];
        return () => {
          for (const HH of BH) HH()
        }
      }
  },
  41871: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rH,
      f: () => zH,
      j: () => tH,
      m: () => EH,
      p: () => hH,
      q: () => SH,
      s: () => CH,
      t: () => XH
    });
    var AH = LH(8857);
    class rH {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(HH, BH, LH) {
        const rH = (0, AH.f)(HH, BH.lookDeadzone);
        if (Math.hypot(rH.x, rH.y) < .9 || Math.abs(rH.x) < Math.abs(rH.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = LH);
        const SH = (hH = BH.lookSensitivityX, Math.min(1, 100 / hH));
        var hH;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (LH - this.fullTiltSinceMs - 250 * SH) / (200 * SH)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const SH = (HH, BH, LH, rH, SH) => {
        let hH = 1;
        return "boost" === LH.lookCurve ? hH = HH.update(BH, LH, SH) : HH.reset(),
          function(HH, BH) {
            let {
              yawBoost: LH = 1,
              aiming: rH = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const SH = (0, AH.e)((0, AH.f)(HH, BH.lookDeadzone), BH.lookCurve),
              hH = 220 * Math.PI / 180,
              tH = rH ? BH.aimLookSensitivity / 100 : 1,
              zH = BH.lookSensitivityX / 100 * tH,
              CH = BH.lookSensitivityY / 100 * tH;
            return {
              yawRadPerSec: SH.x * hH * zH * LH * (BH.invertLookX ? -1 : 1),
              pitchRadPerSec: SH.y * hH * .7 * CH * (BH.invertLookY ? -1 : 1)
            }
          }(BH, LH, {
            yawBoost: hH,
            aiming: rH
          })
      },
      hH = (HH, BH) => {
        const LH = Math.max(0, Math.min(250, BH)) / 1e3;
        return {
          lq: HH.yawRadPerSec * LH,
          Fq: HH.pitchRadPerSec * LH
        }
      },
      tH = (HH, BH) => BH ? {
        move: HH.rightStick,
        look: HH.leftStick
      } : {
        move: HH.leftStick,
        look: HH.rightStick
      },
      zH = (HH, BH) => {
        const LH = (0, AH.f)(HH, BH),
          rH = Math.min(1, Math.hypot(LH.x, LH.y));
        return {
          magnitude: rH,
          speed: Math.min(1, rH / .8),
          headingOffset: 0 === rH ? 0 : Math.atan2(LH.x, -LH.y),
          x: LH.x,
          y: LH.y
        }
      },
      CH = (HH, BH) => {
        let {
          sprintPressed: LH,
          magnitude: AH,
          autoSprint: rH,
          nowMs: SH
        } = BH;
        const hH = LH ? SH : HH.latchedAtMs,
          tH = (HH => {
            let {
              running: BH,
              magnitude: LH,
              sprintPressed: AH,
              autoSprint: rH
            } = HH;
            return !(LH < .5) && (!!AH || !!(rH && LH >= .9) || BH)
          })({
            running: HH.running,
            magnitude: AH,
            sprintPressed: SH - hH <= 1e3,
            autoSprint: rH
          });
        return {
          running: tH,
          latchedAtMs: tH ? -1 / 0 : hH
        }
      },
      EH = (HH, BH, LH) => LH && HH.gyroAiming && "button" === HH.gyroActivation && HH.gyroButton !== BH ? HH.gyroButton : null,
      XH = (HH, BH) => BH ? {
        ...HH,
        isHeld: LH => LH !== BH && HH.isHeld(LH),
        wasPressed: LH => LH !== BH && HH.wasPressed(LH),
        wasReleased: LH => LH !== BH && HH.wasReleased(LH),
        value: LH => LH === BH ? 0 : HH.value(LH)
      } : HH
  },
  41889: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rH,
      d: () => AH
    });
    const AH = HH => {
      let {
        mode: BH,
        sneakHeld: LH,
        sneakPressed: AH,
        sneakTogglePressed: rH,
        descending: SH,
        canCrouch: hH,
        toggled: tH
      } = HH;
      return hH ? SH ? {
        crouchHeld: LH,
        toggled: !1
      } : "hold" === BH ? {
        crouchHeld: LH,
        toggled: rH ? !tH : tH
      } : {
        crouchHeld: !1,
        toggled: AH || rH ? !tH : tH
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class rH {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(HH, BH) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = BH, this.graceEndsMs = BH + 500);
        const LH = BH < this.graceEndsMs;
        return LH && (HH.sneakPressed || HH.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, BH + 300))), HH.sneakHeld ? LH && HH.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: HH.sneakHeld && !this.ignoringHeld,
          sneakPressed: HH.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: HH.sneakTogglePressed && !LH
        }
      }
    }
  },
  41860: (HH, BH, LH) => {
    LH(9543)
  },
  41864: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => vH
    });
    var AH = LH(18),
      rH = LH(9484),
      SH = LH(9499),
      hH = LH(8870),
      tH = LH(8901),
      zH = LH(8878),
      CH = LH(41871),
      EH = LH(41875),
      XH = LH(8913),
      GH = LH(8857),
      YH = LH(9407),
      uH = LH(9509);
    const QH = [{
        isOpen: rH.i,
        openButton: () => (0, hH.k)("emoteWheel"),
        aim: HH => {
          AH.k.AX("emoteWheelPadAim", HH)
        },
        commit: HH => {
          AH.k.AX("requestEmoteWheelPadCommit", HH)
        },
        close: () => {
          AH.k.AX("requestEmoteWheelClose")
        }
      }, {
        isOpen: YH.e,
        openButton: () => (0, hH.k)("chat"),
        aim: HH => {
          AH.k.AX(YH.i, HH)
        },
        commit: HH => {
          AH.k.AX(YH.o, HH)
        },
        close: () => {
          AH.k.AX(YH.k)
        },
        keptOpenBy: [EH.b]
      }, {
        isOpen: uH.r,
        openButton: () => (0, hH.k)("actionButton"),
        aim: HH => {
          AH.k.AX(uH.d, HH)
        },
        commit: HH => {
          AH.k.AX(uH.i, HH)
        },
        close: () => {
          AH.k.AX(uH.f)
        }
      }],
      WH = () => {
        var HH;
        return null !== (HH = QH.find((HH => HH.isOpen()))) && void 0 !== HH ? HH : null
      },
      MH = HH => (0, hH.N)(HH.openButton()),
      xH = (HH, BH) => !(0, GH.G)(HH.frame.values, BH),
      vH = () => {
        let HH = null,
          BH = !1,
          LH = !1;
        return tH.b.register({
          name: "wheel",
          isActive: () => null !== WH(),
          peek: () => {
            const HH = WH();
            return HH && MH(HH) ? null : {
              over: "gameplay",
              stick: (0, zH.g)().swapSticks ? "right" : "left"
            }
          },
          onFrame: AH => {
            var rH;
            const GH = WH();
            if (!GH) return;
            if (null !== (0, XH.b)([...EH.h, ...null !== (rH = GH.keptOpenBy) && void 0 !== rH ? rH : []])) return void GH.close();
            const YH = GH.openButton(),
              uH = (0, CH.j)(AH.frame, (0, zH.g)().swapSticks),
              QH = MH(GH) ? uH.move : uH.look;
            HH !== GH ? (HH = GH, BH = !xH(AH, YH) || Math.hypot(QH.x, QH.y) >= SH.D, LH = !1) : LH && (LH = !1, xH(AH, YH) && (BH = !1)), GH.aim(QH);
            const vH = (0, hH.k)("menuConfirm"),
              PH = (0, hH.k)("menuBack");
            return AH.wasPressed(PH) ? (tH.b.consumeButton(PH), void GH.close()) : AH.wasPressed(vH) || AH.wasPressed(YH) ? (tH.b.consumeButton(vH), tH.b.consumeButton(YH), void GH.commit(!1)) : void(BH && xH(AH, YH) && (BH = !1, GH.commit(!0)))
          },
          onDeactivate: () => {
            LH = null !== HH && WH() === HH, LH || (HH = null, BH = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);
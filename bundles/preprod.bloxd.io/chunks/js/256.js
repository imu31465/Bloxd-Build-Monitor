export const id = 256;
export const ids = [256];
export const modules = {
  38079: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => KW,
      c: () => MW
    });
    var mW = OW(2962),
      EW = OW(1526),
      NW = OW(62),
      PW = OW(7453),
      LW = OW(2946),
      cW = OW(1294),
      wW = OW(2037),
      tW = OW(2021),
      ZW = OW(1532),
      xW = OW(1172),
      lW = OW(38088),
      AW = OW(1089),
      bW = OW.n(AW),
      jW = OW(1339),
      UW = OW(1391),
      kW = OW(1269),
      sW = OW(1283);
    const MW = "SleepingOverlay";

    function KW() {
      const {
        t: WW
      } = (0, xW.B)(), [iW, OW] = (0, NW.useState)(!1), [AW, KW] = (0, NW.useState)(null), [YW, yW] = (0, NW.useState)(1), [TW, JW] = (0, NW.useState)(!1), [hW, HW] = (0, NW.useState)(!1), nW = (0, NW.useRef)(0), uW = (0, NW.useRef)(!1), oW = (0, NW.useRef)(!1), dW = (0, NW.useRef)(), eW = (0, NW.useRef)(null);

      function vW() {
        const WW = null !== AW && void 0 !== AW ? AW : "Rested Speed";
        wW.gameBridge.send("wakeUp", hW ? WW : null), eW.current = null, OW(!1), KW(null), yW(1), JW(!1), HW(!1)
      }

      function gW() {
        return !TW && (vW(), !0)
      }
      return (0, EW.e)("PlayerPhysicsTypeUpdate", (WW => {
        WW !== eW.current && (eW.current = WW, WW === PW.p.SLEEPING ? (oW.current || (nW.current = wW.gameBridge.lookup("cameraZoom", null), oW.current = !0), uW.current = !0, wW.gameBridge.send("setCameraZoom", 3), OW(!0), yW(function() {
          for (const WW of wW.gameBridge.lookup("blocksStandingOn", null)) {
            if (lW.b.leafBeds.includes(WW)) return console.log(`Found leaf bed: ${WW}`), 1;
            if (lW.b.woolBeds.includes(WW)) return console.log(`Found woold bed: ${WW}`), 2;
            if (lW.b.strongBeds.includes(WW)) return console.log(`Found strong bed ${WW}`), 3
          }
          return 1
        }())) : (oW.current = !1, OW(!1), KW(null), yW(1)))
      })), (0, NW.useEffect)((() => () => {
        (0, cW.v)(MW)
      }), []), (0, NW.useEffect)((() => {
        iW ? (0, cW.y)(MW) : ((0, cW.v)(MW), uW.current && (wW.gameBridge.send("setCameraZoom", nW.current), uW.current = !1))
      }), [iW]), (0, kW.r)("overlay", dW, gW, iW), (0, sW.jsx)(mW.e, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: iW,
        timeout: 300,
        nodeRef: dW,
        unmountOnExit: !0,
        children: (0, sW.jsx)("div", {
          ref: dW,
          onClick: WW => {
            gW() && WW.stopPropagation()
          },
          children: (0, sW.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, sW.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: LW.e.map((iW => (0, sW.jsxs)(SW, {
                restedEffect: iW,
                rw: AW,
                setChosenRestedEffect: KW,
                children: [(0, sW.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, sW.jsx)(tW.d, {
                    text: [{
                      icon: iW
                    }]
                  }), LW.c[iW].shortName]
                }), (0, sW.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: WW(LW.c[iW].description, {
                    time: LW.c[iW].effectLevelDurations[YW] / 6e4
                  })
                })]
              }, iW)))
            }), (0, sW.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, sW.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, sW.jsxs)(ZW.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: WW => {
                  hW ? vW() : (JW(!0), (0, jW.Y)((() => {
                    JW(!1), HW(!0)
                  }), !0)), WW.stopPropagation()
                },
                loading: TW,
                children: [!hW && (0, sW.jsxs)(sW.Fragment, {
                  children: [(0, sW.jsx)(UW.c, {
                    name: "film"
                  }), " ", WW("classicGame:watchAdToGetRestedPerk")]
                }), hW && WW("classicGame:wakeUp")]
              }), (0, sW.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, sW.jsx)("div", {
                  className: bW()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === YW
                  }),
                  children: (0, sW.jsx)(tW.d, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, sW.jsx)("div", {
                  className: bW()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === YW
                  }),
                  children: (0, sW.jsx)(tW.d, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, sW.jsx)("div", {
                  className: bW()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === YW
                  }),
                  children: (0, sW.jsx)(tW.d, {
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
    const SW = (0, NW.memo)((function(WW) {
      let {
        children: iW,
        restedEffect: OW,
        rw: mW,
        setChosenRestedEffect: EW
      } = WW;
      return OW === mW ? (0, sW.jsx)(ZW.n, {
        onClick: WW => {
          WW.stopPropagation()
        },
        children: iW
      }) : (0, sW.jsx)(ZW.h, {
        onClick: WW => {
          EW(OW), WW.stopPropagation()
        },
        children: iW
      })
    }))
  },
  42086: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => FW
    });
    var mW = OW(25),
      EW = OW(27),
      NW = OW(4920),
      PW = OW(327),
      LW = OW(1729),
      cW = OW(9379),
      wW = OW(4948),
      tW = OW(9942),
      ZW = OW(9413),
      xW = OW(9384),
      lW = OW(9417),
      AW = OW(1459),
      bW = OW(1784),
      jW = OW(9421),
      UW = OW(9905),
      kW = OW(10033),
      sW = OW(9952),
      MW = OW(10038),
      KW = OW(2037),
      SW = OW(9364),
      YW = OW(9968),
      yW = OW(9966),
      TW = OW(9946);
    class JW {
      constructor() {
        this.lostAtMs = null
      }
      update(WW, iW) {
        return WW ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= iW, iW - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class hW {
      constructor(WW, iW) {
        this.press = WW, this.release = iW, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(WW, iW, OW, mW) {
        if (WW && null === this.downAtMs) return this.downAtMs = OW, this.latched = mW, void(this.token = this.press(mW));
        null !== this.downAtMs && (this.latched ? WW && this.end() : !iW && OW - this.downAtMs >= 40 && this.end())
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
        const WW = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(WW)
      }
    }
    const HW = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      nW = WW => {
        let iW = null;
        const OW = new TW.e,
          mW = () => {
            iW && (((WW, iW, OW) => {
              switch (OW.kind) {
                case "reload":
                  return void iW.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void iW.specialActionUp(OW.action);
                case "customButton":
                  return void KW.gameBridge.send("pressCustomButton", {
                    id: OW.id,
                    down: !1
                  });
                case "touchButton":
                  WW.pressTouchButton(!1)
              }
            })(WW, iW.bodies, iW.action), iW = null)
          },
          NW = (OW, EW, NW, PW) => {
            mW(), iW = {
              action: EW,
              bodies: OW,
              heldBy: NW,
              atMs: PW
            }, ((WW, iW, OW) => {
              switch (OW.kind) {
                case "reload":
                  return iW.reloadGun(), void iW.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void iW.specialActionDown(OW.action);
                case "customButton":
                  return void KW.gameBridge.send("pressCustomButton", {
                    id: OW.id,
                    down: !0
                  });
                case "touchButton":
                  WW.pressTouchButton(!0)
              }
            })(WW, OW, EW)
          };
        return {
          update: (PW, LW, wW, tW) => {
            var xW;
            const lW = (0, YW.j)(WW.contextActionInputs()),
              AW = null !== (xW = lW[0]) && void 0 !== xW ? xW : HW;
            (0, yW.b)((0, YW.f)(AW) ? AW : null);
            const bW = (0, YW.c)(lW);
            (0, yW.e)(bW);
            const jW = (0, cW.h)("actionButton");
            if (bW) {
              const WW = OW.update(LW.wasPressed(jW), LW.isHeld(jW), wW, tW);
              "tap" === WW ? NW(PW, AW, [jW], wW) : "hold" === WW && (ZW.c.consumeButton(jW), EW.l.iZ(MW.j, lW))
            } else OW.release(), LW.wasPressed(jW) && NW(PW, AW, [jW], wW);
            iW && wW - iW.atMs >= 40 && !iW.heldBy.some((WW => (0, SW.F)(LW.frame.values, WW))) && mW()
          },
          pressPicked: (WW, iW) => {
            NW(WW, iW, [(0, cW.h)("menuConfirm"), (0, cW.h)("actionButton")], performance.now())
          },
          release: () => {
            OW.release(), mW(), (0, yW.b)(null), (0, yW.e)(!1)
          }
        }
      };
    var uW = OW(9357);
    var oW = OW(42078),
      dW = OW(9976),
      eW = OW(3361),
      vW = OW(9407),
      gW = OW(10071);
    var DW = OW(42075),
      VW = OW(10079),
      pW = OW(42089),
      fW = OW(10053),
      CW = OW(9980),
      XW = OW(9986),
      BW = OW(9988);
    class qW {
      constructor(WW) {
        this.bodies = WW, this.gesture = new TW.e, this.zoomBodies = null
      }
      update(WW, iW, OW, mW, EW) {
        if (!EW) return this.release(), WW.wasPressed(iW);
        if (null !== this.zoomBodies) return WW.isHeld(iW) || this.endZoom(), !1;
        const NW = this.gesture.update(WW.wasPressed(iW), WW.isHeld(iW), OW, mW);
        return "hold" === NW && WW.isHeld(iW) && (this.zoomBodies = this.bodies(), this.zoomBodies.zoom(!0)), "tap" === NW
      }
      release() {
        this.gesture.release(), this.endZoom()
      }
      endZoom() {
        var WW;
        null === (WW = this.zoomBodies) || void 0 === WW || WW.zoom(!1), this.zoomBodies = null
      }
    }
    var RW = OW(9908),
      GW = OW(9957);
    const IW = () => RW.d[(0, xW.m)().tapHoldTime].wheelMs,
      aW = () => ((0, tW.e)(), (0, GW.e)("controllerMenuKey")),
      rW = (WW, iW, OW) => new hW((OW => {
        const mW = WW.bodies();
        return {
          bodies: mW,
          press: iW(mW, OW)
        }
      }), (WW => {
        let {
          bodies: iW,
          press: mW
        } = WW;
        OW(iW, mW)
      })),
      zW = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      FW = WW => {
        const iW = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let OW = zW;
        const tW = new pW.c,
          KW = EW.l.subscribe("appManagerUpdated|activeInputDevice", (iW => {
            WW.deviceChanged(iW)
          }));
        let YW = null,
          yW = 0;
        const hW = () => {
          YW = null, (0, CW.e)(null)
        };
        let HW = !1;
        const GW = new JW,
          FW = WW.look,
          QW = new TW.e,
          Wi = new TW.e,
          ii = nW(WW),
          Oi = EW.l.subscribe(MW.l, (iW => {
            ii.pressPicked(WW.bodies(), iW)
          })),
          mi = rW(WW, ((WW, iW) => WW.primaryFireDown(!iW)), ((WW, iW) => {
            WW.primaryFireUp(iW)
          })),
          Ei = rW(WW, (WW => WW.altFireDown()), ((WW, iW) => {
            WW.altFireUp(iW)
          }));
        let Ni = !1,
          Pi = -1 / 0,
          Li = !1,
          ci = !1;
        const wi = (0, UW.c)(SW.R),
          ti = (0, UW.c)(SW.R),
          Zi = new TW.e;
        let xi = !1;
        const li = new qW((() => WW.bodies())),
          Ai = () => {
            wi.reset(), ti.reset(), Zi.release(), li.release(), (0, BW.d)(!1), FW.release(), mi.cancel(), (0, XW.g)(!1), Ei.cancel(), ii.release(), QW.release(), Wi.release(), hW()
          },
          bi = function() {
            let mW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            Ai(), Li = !1, mW || (Ni = !1, OW = zW, Object.assign(iW, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), WW.stopMoving())
          };
        let ji = !1;
        const Ui = function(mW, NW, PW) {
            let LW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, AW.j)()) return void(ji || (ji = !0, Ni = !1, WW.stopMoving()));
            ji = !1;
            const wW = (0, xW.m)(),
              ZW = (0, DW.f)(NW, wW.moveDeadzone),
              lW = (0, cW.h)("sprint");
            OW = (0, DW.t)(OW, {
              sprintPressed: mW.wasPressed(lW),
              magnitude: ZW.magnitude,
              autoSprint: wW.autoSprint,
              nowMs: PW
            }), iW.running = OW.running, iW.sprintHeld = mW.isHeld(lW), iW.x = ZW.x, iW.y = ZW.y, iW.magnitude = ZW.speed, iW.headingOffset = ZW.headingOffset, ZW.magnitude > 0 && (!Ni || PW - Pi >= 1e3) && (Pi = PW, EW.l.iZ("stickMoved")), Ni = ZW.magnitude > 0;
            const bW = (0, cW.h)("jump");
            if (iW.jumpHeld = mW.isHeld(bW), iW.jumpPressed = mW.wasPressed(bW), iW.jumpPressed && WW.bodies().jumpDown(), LW) return void WW.move(iW, null);
            const jW = (0, cW.h)("sneak"),
              UW = tW.filter({
                sneakHeld: mW.isHeld(jW),
                sneakPressed: mW.wasPressed(jW),
                sneakTogglePressed: li.update(mW, (0, cW.h)("sneakToggle"), PW, IW(), WW.zoomAllowed())
              }, PW);
            WW.move(iW, {
              ...UW,
              mode: wW.sneakMode
            })
          },
          ki = (WW, iW) => {
            const OW = (0, cW.h)("chat");
            if ("off" === (0, xW.m)().quickChat) return void(WW.wasPressed(OW) && (ZW.c.consumeButton(OW), EW.l.iZ(dW.e)));
            const mW = QW.update(WW.wasPressed(OW), WW.isHeld(OW), iW, IW());
            "tap" === mW || "hold" === mW && null === (0, bW.b)() ? EW.l.iZ(dW.e) : "hold" === mW && (ZW.c.consumeButton(OW), EW.l.iZ(sW.o))
          },
          si = (iW, OW) => {
            ((WW, iW) => {
              const OW = (0, kW.e)(),
                mW = (0, cW.h)("emoteWheel");
              if ("wheel" === (0, xW.m)().emoteButton) return WW.wasPressed(mW) && (ZW.c.consumeButton(mW), EW.l.iZ("requestEmoteWheelPadOpen", !0)), (0, kW.e)() !== OW;
              const NW = Wi.update(WW.wasPressed(mW), WW.isHeld(mW), iW, IW());
              return "tap" === NW ? EW.l.iZ("requestEmoteRepeatLast") : "hold" === NW && (ZW.c.consumeButton(mW), EW.l.iZ("requestEmoteWheelPadOpen", !1)), (0, kW.e)() !== OW
            })(iW, OW) || ki(iW, OW), iW.wasPressed((0, cW.h)("inventory")) && (ZW.c.consumeButton((0, cW.h)("inventory")), (0, LW.t)(aW(), "inventory", WW.hasFullInventory())), iW.wasPressed((0, cW.h)("pause")) && (ZW.c.consumeButton((0, cW.h)("pause")), (0, wW.e)() === PW.m.SOCIAL ? (0, LW.s)(aW(), PW.m.SOCIAL) : (0, LW.h)(aW())), iW.wasPressed((0, cW.h)("leaderboard")) && !(0, NW.f)() && (ZW.c.consumeButton((0, cW.h)("leaderboard")), ((WW, iW) => {
              if ("shop" === (0, vW.b)()) return EW.l.iZ(gW.i), void(0, LW.s)(WW, PW.m.SHOP, !0);
              (0, LW.x)(WW, iW, (0, eW.u)())
            })(aW(), WW.hasLobbyTab()))
          },
          Mi = (iW, OW) => {
            const mW = WW.bodies();
            ((iW, OW) => {
              const mW = (0, cW.h)("attack"),
                EW = iW.wasPressed(mW);
              EW && !mi.isLatched() && (HW = WW.targetsBlock()), mi.update(EW, iW.isHeld(mW), OW, "toggle" === (0, xW.m)().attackMode), mi.isLatched() && HW ? GW.update(WW.targetsBlock(), OW) && mi.unlatch() : GW.reset(), (0, XW.g)(mi.isLatched())
            })(iW, OW), Ei.update(iW.wasPressed((0, cW.h)("use")), iW.isHeld((0, cW.h)("use")), OW, !1), wi.update(iW.isHeld((0, cW.h)("hotbarPrevious")), OW) && WW.scrollHotbar(-1), ti.update(iW.isHeld((0, cW.h)("hotbarNext")), OW) && WW.scrollHotbar(1), ((iW, OW, mW) => {
              const EW = (0, cW.h)("perspective"),
                NW = (0, cW.h)("pickBlock"),
                PW = WW.pickBlockAllowed();
              (0, BW.d)(PW && !xi && WW.targetsBlock());
              const LW = () => {
                OW.pickBlock() && (xi = !0, (0, BW.d)(!1))
              };
              if (!PW || NW !== EW) return Zi.release(), iW.wasPressed(EW) && OW.swapCameraZoom(), void(PW && iW.wasPressed(NW) && LW());
              const wW = Zi.update(iW.wasPressed(NW), iW.isHeld(NW), mW, IW());
              "tap" === wW ? LW() : "hold" === wW && OW.swapCameraZoom()
            })(iW, mW, OW), ((iW, OW, mW) => {
              const EW = (0, cW.h)("drop");
              if (iW.wasPressed(EW)) {
                OW.dropItem(!1);
                const WW = (0, xW.m)();
                "off" !== WW.buttonRepeat && (YW = mW, yW = RW.d[WW.tapHoldTime].dropStackMs, (0, CW.e)(yW))
              }
              null !== YW && (!iW.isHeld(EW) || WW.selectedSlotEmpty() ? hW() : mW - YW >= yW && (hW(), OW.dropItem(!0)))
            })(iW, mW, OW), ii.update(mW, iW, OW, IW()), si(iW, OW)
          },
          Ki = ZW.c.register({
            name: "gameplay",
            isActive: () => {
              const iW = Ni && "keyboardMouse" === mW.d.get("activeInputDevice") && !(0, lW.I)(),
                OW = (0, lW.l)() ? [oW.e] : [];
              return ((0, lW.l)() || iW) && (0, jW.f)(OW) && WW.hasPlayer()
            },
            onFrame: WW => {
              const iW = performance.now(),
                OW = (0, xW.m)(),
                mW = (0, DW.u)(WW, (0, DW.k)(OW, (0, cW.h)("pause"), (0, VW.d)().isSupported())),
                EW = (0, DW.g)(mW, OW.swapSticks);
              return (0, lW.l)() ? (Li = !1, (0, jW.f)() ? (ci = !1, FW.update(EW.look, OW, mW.isHeld((0, cW.h)("use"))), Ui(mW, EW.move, iW), void Mi(mW, iW)) : (ci || (ci = !0, tW.lostToPadScreen(), bi()), void ki(mW, iW))) : (Li || (Ai(), Li = !0), void Ui(mW, EW.move, iW))
            },
            onDeactivate: WW => {
              (0, lW.l)() && tW.lostToPadScreen(), bi(WW)
            },
            onPeekFrame: iW => {
              (0, lW.l)() && (0, jW.f)(oW.j) && WW.hasPlayer() ? Ui(iW, (0, DW.g)(iW, (0, xW.m)().swapSticks).move, performance.now(), !0) : bi()
            }
          }),
          Si = (0, oW.i)(WW),
          Yi = (() => {
            const WW = EW.l.subscribe(uW.c, (WW => {
              !WW && (0, lW.l)() && "inGame" === mW.d.get("gameState") && EW.l.iZ("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              EW.l.unsubscribe(WW)
            }
          })();
        return () => {
          bi(), WW.uninstall(), (0, fW.g)(!1), (0, BW.d)(!1), EW.l.unsubscribe(KW), EW.l.unsubscribe(Oi), Ki(), Si(), Yi(), FW.uninstall()
        }
      }
  },
  42078: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => AW,
      i: () => jW,
      j: () => lW
    });
    var mW = OW(1294),
      EW = OW(4920),
      NW = OW(10025),
      PW = OW(38079),
      LW = OW(1822),
      cW = OW(1167),
      wW = OW(9421),
      tW = OW(9952),
      ZW = OW(10038);
    const xW = {
        emoteWheel: NW.f,
        quickChatWheel: tW.e,
        actionWheel: ZW.o
      },
      lW = Object.keys(xW),
      AW = "dead",
      bW = WW => (0, mW.t)().includes(WW),
      jW = WW => {
        const iW = [(0, wW.k)(AW, (() => WW.hasPlayer() && WW.isPlayerDead())), (0, wW.k)("sleeping", (() => bW(PW.c))), (0, wW.k)("turnstile", (() => bW(cW.e))), (0, wW.k)("videoAd", LW.f), (0, wW.k)("replay", (() => (0, EW.f)() || WW.isReplayMode())), (0, wW.k)("freeCamera", (() => WW.isFreeCameraOn())), ...Object.entries(xW).map((WW => {
          let [iW, OW] = WW;
          return (0, wW.k)(iW, OW)
        }))];
        return () => {
          for (const WW of iW) WW()
        }
      }
  },
  42075: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW,
      f: () => cW,
      g: () => LW,
      k: () => tW,
      o: () => PW,
      p: () => NW,
      t: () => wW,
      u: () => ZW
    });
    var mW = OW(9364);
    class EW {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(WW, iW, OW) {
        const EW = (0, mW.l)(WW, iW.lookDeadzone);
        if (Math.hypot(EW.x, EW.y) < .9 || Math.abs(EW.x) < Math.abs(EW.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = OW);
        const NW = (PW = iW.lookSensitivityX, Math.min(1, 100 / PW));
        var PW;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (OW - this.fullTiltSinceMs - 250 * NW) / (200 * NW)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const NW = (WW, iW, OW, EW, NW) => {
        let PW = 1;
        return "boost" === OW.lookCurve ? PW = WW.update(iW, OW, NW) : WW.reset(),
          function(WW, iW) {
            let {
              yawBoost: OW = 1,
              aiming: EW = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const NW = (0, mW.h)((0, mW.l)(WW, iW.lookDeadzone), iW.lookCurve),
              PW = 220 * Math.PI / 180,
              LW = EW ? iW.aimLookSensitivity / 100 : 1,
              cW = iW.lookSensitivityX / 100 * LW,
              wW = iW.lookSensitivityY / 100 * LW;
            return {
              yawRadPerSec: NW.x * PW * cW * OW * (iW.invertLookX ? -1 : 1),
              pitchRadPerSec: NW.y * PW * .7 * wW * (iW.invertLookY ? -1 : 1)
            }
          }(iW, OW, {
            yawBoost: PW,
            aiming: EW
          })
      },
      PW = (WW, iW) => {
        const OW = Math.max(0, Math.min(250, iW)) / 1e3;
        return {
          jH: WW.yawRadPerSec * OW,
          UH: WW.pitchRadPerSec * OW
        }
      },
      LW = (WW, iW) => iW ? {
        move: WW.rightStick,
        look: WW.leftStick
      } : {
        move: WW.leftStick,
        look: WW.rightStick
      },
      cW = (WW, iW) => {
        const OW = (0, mW.l)(WW, iW),
          EW = Math.min(1, Math.hypot(OW.x, OW.y));
        return {
          magnitude: EW,
          speed: Math.min(1, EW / .8),
          headingOffset: 0 === EW ? 0 : Math.atan2(OW.x, -OW.y),
          x: OW.x,
          y: OW.y
        }
      },
      wW = (WW, iW) => {
        let {
          sprintPressed: OW,
          magnitude: mW,
          autoSprint: EW,
          nowMs: NW
        } = iW;
        const PW = OW ? NW : WW.latchedAtMs,
          LW = (WW => {
            let {
              running: iW,
              magnitude: OW,
              sprintPressed: mW,
              autoSprint: EW
            } = WW;
            return !(OW < .5) && (!!mW || !!(EW && OW >= .9) || iW)
          })({
            running: WW.running,
            magnitude: mW,
            sprintPressed: NW - PW <= 1e3,
            autoSprint: EW
          });
        return {
          running: LW,
          latchedAtMs: LW ? -1 / 0 : PW
        }
      },
      tW = (WW, iW, OW) => OW && WW.gyroAiming && "button" === WW.gyroActivation && WW.gyroButton !== iW ? WW.gyroButton : null,
      ZW = (WW, iW) => iW ? {
        ...WW,
        isHeld: OW => OW !== iW && WW.isHeld(OW),
        wasPressed: OW => OW !== iW && WW.wasPressed(OW),
        wasReleased: OW => OW !== iW && WW.wasReleased(OW),
        value: OW => OW === iW ? 0 : WW.value(OW)
      } : WW
  },
  42089: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => EW,
      f: () => mW
    });
    const mW = WW => {
      let {
        mode: iW,
        sneakHeld: OW,
        sneakPressed: mW,
        sneakTogglePressed: EW,
        descending: NW,
        canCrouch: PW,
        toggled: LW
      } = WW;
      return PW ? NW ? {
        crouchHeld: OW,
        toggled: !1
      } : "hold" === iW ? {
        crouchHeld: OW,
        toggled: EW ? !LW : LW
      } : {
        crouchHeld: !1,
        toggled: mW || EW ? !LW : LW
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class EW {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(WW, iW) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = iW, this.graceEndsMs = iW + 500);
        const OW = iW < this.graceEndsMs;
        return OW && (WW.sneakPressed || WW.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, iW + 300))), WW.sneakHeld ? OW && WW.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: WW.sneakHeld && !this.ignoringHeld,
          sneakPressed: WW.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: WW.sneakTogglePressed && !OW
        }
      }
    }
  },
  42060: (WW, iW, OW) => {
    OW(10079)
  },
  42067: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => sW
    });
    var mW = OW(27),
      EW = OW(10025),
      NW = OW(10031),
      PW = OW(9379),
      LW = OW(9413),
      cW = OW(9384),
      wW = OW(42075),
      tW = OW(42078),
      ZW = OW(9421),
      xW = OW(9364),
      lW = OW(9952),
      AW = OW(10038);
    const bW = [{
        isOpen: EW.g,
        openButton: () => (0, PW.h)("emoteWheel"),
        aim: WW => {
          mW.l.iZ("emoteWheelPadAim", WW)
        },
        commit: WW => {
          mW.l.iZ("requestEmoteWheelPadCommit", WW)
        },
        close: () => {
          mW.l.iZ("requestEmoteWheelClose")
        }
      }, {
        isOpen: lW.e,
        openButton: () => (0, PW.h)("chat"),
        aim: WW => {
          mW.l.iZ(lW.g, WW)
        },
        commit: WW => {
          mW.l.iZ(lW.k, WW)
        },
        close: () => {
          mW.l.iZ(lW.i)
        },
        keptOpenBy: [tW.e]
      }, {
        isOpen: AW.o,
        openButton: () => (0, PW.h)("actionButton"),
        aim: WW => {
          mW.l.iZ(AW.d, WW)
        },
        commit: WW => {
          mW.l.iZ(AW.i, WW)
        },
        close: () => {
          mW.l.iZ(AW.f)
        }
      }],
      jW = () => {
        var WW;
        return null !== (WW = bW.find((WW => WW.isOpen()))) && void 0 !== WW ? WW : null
      },
      UW = WW => (0, PW.Q)(WW.openButton()),
      kW = (WW, iW) => !(0, xW.F)(WW.frame.values, iW),
      sW = () => {
        let WW = null,
          iW = !1,
          OW = !1;
        return LW.c.register({
          name: "wheel",
          isActive: () => null !== jW(),
          peek: () => {
            const WW = jW();
            return WW && UW(WW) ? null : {
              over: "gameplay",
              stick: (0, cW.m)().swapSticks ? "right" : "left"
            }
          },
          onFrame: mW => {
            var EW;
            const xW = jW();
            if (!xW) return;
            if (null !== (0, ZW.c)([...tW.j, ...null !== (EW = xW.keptOpenBy) && void 0 !== EW ? EW : []])) return void xW.close();
            const lW = xW.openButton(),
              AW = (0, wW.g)(mW.frame, (0, cW.m)().swapSticks),
              bW = UW(xW) ? AW.move : AW.look;
            WW !== xW ? (WW = xW, iW = !kW(mW, lW) || Math.hypot(bW.x, bW.y) >= NW.A, OW = !1) : OW && (OW = !1, kW(mW, lW) && (iW = !1)), xW.aim(bW);
            const sW = (0, PW.h)("menuConfirm"),
              MW = (0, PW.h)("menuBack");
            return mW.wasPressed(MW) ? (LW.c.consumeButton(MW), void xW.close()) : mW.wasPressed(sW) || mW.wasPressed(lW) ? (LW.c.consumeButton(sW), LW.c.consumeButton(lW), void xW.commit(!1)) : void(iW && kW(mW, lW) && (iW = !1, xW.commit(!0)))
          },
          onDeactivate: () => {
            OW = null !== WW && jW() === WW, OW || (WW = null, iW = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);
export const id = 247;
export const ids = [247];
export const modules = {
  38106: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => FV,
      e: () => tV
    });
    var JV = xV(4650),
      YV = xV(1542),
      UV = xV(62),
      yV = xV(7024),
      pV = xV(4646),
      QV = xV(1332),
      nV = xV(2051),
      wV = xV(2021),
      ZV = xV(1551),
      vV = xV(1220),
      rV = xV(38112),
      kV = xV(1146),
      bV = xV.n(kV),
      EV = xV(1382),
      BV = xV(1414),
      jV = xV(1309),
      qV = xV(1321);
    const tV = "SleepingOverlay";

    function FV() {
      const {
        t: VV
      } = (0, vV.A)(), [eV, xV] = (0, UV.useState)(!1), [kV, FV] = (0, UV.useState)(null), [PV, AV] = (0, UV.useState)(1), [NV, XV] = (0, UV.useState)(!1), [MV, zV] = (0, UV.useState)(!1), GV = (0, UV.useRef)(0), WV = (0, UV.useRef)(!1), RV = (0, UV.useRef)(!1), gV = (0, UV.useRef)(), DV = (0, UV.useRef)(null);

      function iV() {
        const VV = null !== kV && void 0 !== kV ? kV : "Rested Speed";
        nV.gameBridge.send("wakeUp", MV ? VV : null), DV.current = null, xV(!1), FV(null), AV(1), XV(!1), zV(!1)
      }

      function CV() {
        return !NV && (iV(), !0)
      }
      return (0, YV.g)("PlayerPhysicsTypeUpdate", (VV => {
        VV !== DV.current && (DV.current = VV, VV === yV.q.SLEEPING ? (RV.current || (GV.current = nV.gameBridge.lookup("cameraZoom", null), RV.current = !0), WV.current = !0, nV.gameBridge.send("setCameraZoom", 3), xV(!0), AV(function() {
          for (const VV of nV.gameBridge.lookup("blocksStandingOn", null)) {
            if (rV.b.leafBeds.includes(VV)) return console.log(`Found leaf bed: ${VV}`), 1;
            if (rV.b.woolBeds.includes(VV)) return console.log(`Found woold bed: ${VV}`), 2;
            if (rV.b.strongBeds.includes(VV)) return console.log(`Found strong bed ${VV}`), 3
          }
          return 1
        }())) : (RV.current = !1, xV(!1), FV(null), AV(1)))
      })), (0, UV.useEffect)((() => () => {
        (0, QV.m)(tV)
      }), []), (0, UV.useEffect)((() => {
        eV ? (0, QV.p)(tV) : ((0, QV.m)(tV), WV.current && (nV.gameBridge.send("setCameraZoom", GV.current), WV.current = !1))
      }), [eV]), (0, jV.s)("overlay", gV, CV, eV), (0, qV.jsx)(JV.e, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: eV,
        timeout: 300,
        nodeRef: gV,
        unmountOnExit: !0,
        children: (0, qV.jsx)("div", {
          ref: gV,
          onClick: VV => {
            CV() && VV.stopPropagation()
          },
          children: (0, qV.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, qV.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: pV.g.map((eV => (0, qV.jsxs)(TV, {
                restedEffect: eV,
                Vw: kV,
                setChosenRestedEffect: FV,
                children: [(0, qV.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, qV.jsx)(wV.b, {
                    text: [{
                      icon: eV
                    }]
                  }), pV.f[eV].shortName]
                }), (0, qV.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: VV(pV.f[eV].description, {
                    time: pV.f[eV].effectLevelDurations[PV] / 6e4
                  })
                })]
              }, eV)))
            }), (0, qV.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, qV.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, qV.jsxs)(ZV.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: VV => {
                  MV ? iV() : (XV(!0), (0, EV.$)((() => {
                    XV(!1), zV(!0)
                  }), !0)), VV.stopPropagation()
                },
                loading: NV,
                children: [!MV && (0, qV.jsxs)(qV.Fragment, {
                  children: [(0, qV.jsx)(BV.b, {
                    name: "film"
                  }), " ", VV("classicGame:watchAdToGetRestedPerk")]
                }), MV && VV("classicGame:wakeUp")]
              }), (0, qV.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, qV.jsx)("div", {
                  className: bV()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === PV
                  }),
                  children: (0, qV.jsx)(wV.b, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, qV.jsx)("div", {
                  className: bV()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === PV
                  }),
                  children: (0, qV.jsx)(wV.b, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, qV.jsx)("div", {
                  className: bV()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === PV
                  }),
                  children: (0, qV.jsx)(wV.b, {
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
    const TV = (0, UV.memo)((function(VV) {
      let {
        children: eV,
        restedEffect: xV,
        Vw: JV,
        setChosenRestedEffect: YV
      } = VV;
      return xV === JV ? (0, qV.jsx)(ZV.m, {
        onClick: VV => {
          VV.stopPropagation()
        },
        children: eV
      }) : (0, qV.jsx)(ZV.j, {
        onClick: VV => {
          YV(xV), VV.stopPropagation()
        },
        children: eV
      })
    }))
  },
  41841: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => SV
    });
    var JV = xV(27),
      YV = xV(32),
      UV = xV(4674),
      yV = xV(364),
      pV = xV(1725),
      QV = xV(8796),
      nV = xV(4690),
      wV = xV(9320),
      ZV = xV(8831),
      vV = xV(8811),
      rV = xV(8836),
      kV = xV(1473),
      bV = xV(1775),
      EV = xV(8843),
      BV = xV(9276),
      jV = xV(9420),
      qV = xV(9333),
      tV = xV(9422),
      FV = xV(2051),
      TV = xV(8786),
      PV = xV(9355),
      AV = xV(9346),
      NV = xV(9326);
    class XV {
      constructor() {
        this.lostAtMs = null
      }
      update(VV, eV) {
        return VV ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= eV, eV - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class MV {
      constructor(VV, eV) {
        this.press = VV, this.release = eV, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(VV, eV, xV, JV) {
        if (VV && null === this.downAtMs) return this.downAtMs = xV, this.latched = JV, void(this.token = this.press(JV));
        null !== this.downAtMs && (this.latched ? VV && this.end() : !eV && xV - this.downAtMs >= 40 && this.end())
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
        const VV = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(VV)
      }
    }
    const zV = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      GV = VV => {
        let eV = null;
        const xV = new NV.d,
          JV = () => {
            eV && (((VV, eV, xV) => {
              switch (xV.kind) {
                case "reload":
                  return void eV.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void eV.specialActionUp(xV.action);
                case "customButton":
                  return void FV.gameBridge.send("pressCustomButton", {
                    id: xV.id,
                    down: !1
                  });
                case "touchButton":
                  VV.pressTouchButton(!1)
              }
            })(VV, eV.bodies, eV.action), eV = null)
          },
          UV = (xV, YV, UV, yV) => {
            JV(), eV = {
              action: YV,
              bodies: xV,
              heldBy: UV,
              atMs: yV
            }, ((VV, eV, xV) => {
              switch (xV.kind) {
                case "reload":
                  return eV.reloadGun(), void eV.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void eV.specialActionDown(xV.action);
                case "customButton":
                  return void FV.gameBridge.send("pressCustomButton", {
                    id: xV.id,
                    down: !0
                  });
                case "touchButton":
                  VV.pressTouchButton(!0)
              }
            })(VV, xV, YV)
          };
        return {
          update: (yV, pV, nV, wV) => {
            var vV;
            const rV = (0, PV.h)(VV.contextActionInputs()),
              kV = null !== (vV = rV[0]) && void 0 !== vV ? vV : zV;
            (0, AV.b)((0, PV.c)(kV) ? kV : null);
            const bV = (0, PV.b)(rV);
            (0, AV.d)(bV);
            const EV = (0, QV.i)("actionButton");
            if (bV) {
              const VV = xV.update(pV.wasPressed(EV), pV.isHeld(EV), nV, wV);
              "tap" === VV ? UV(yV, kV, [EV], nV) : "hold" === VV && (ZV.c.consumeButton(EV), YV.h.QZ(tV.j, rV))
            } else xV.release(), pV.wasPressed(EV) && UV(yV, kV, [EV], nV);
            eV && nV - eV.atMs >= 40 && !eV.heldBy.some((VV => (0, TV.M)(pV.frame.values, VV))) && JV()
          },
          pressPicked: (VV, eV) => {
            UV(VV, eV, [(0, QV.i)("menuConfirm"), (0, QV.i)("actionButton")], performance.now())
          },
          release: () => {
            xV.release(), JV(), (0, AV.b)(null), (0, AV.d)(!1)
          }
        }
      };
    var WV = xV(8777);
    var RV = xV(41837),
      gV = xV(9372),
      DV = xV(8828),
      iV = xV(9453);
    var CV = xV(41831),
      aV = xV(9462),
      oV = xV(41850),
      cV = xV(9435),
      hV = xV(9379),
      lV = xV(9386),
      LV = xV(9390),
      fV = xV(9281),
      mV = xV(9338);
    const KV = () => fV.b[(0, vV.i)().tapHoldTime].wheelMs,
      HV = () => ((0, wV.d)(), (0, mV.c)("controllerMenuKey")),
      uV = (VV, eV, xV) => new MV((xV => {
        const JV = VV.bodies();
        return {
          bodies: JV,
          press: eV(JV, xV)
        }
      }), (VV => {
        let {
          bodies: eV,
          press: JV
        } = VV;
        xV(eV, JV)
      })),
      sV = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      SV = VV => {
        const eV = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let xV = sV;
        const wV = new oV.c,
          FV = YV.h.subscribe("appManagerUpdated|activeInputDevice", (eV => {
            VV.deviceChanged(eV)
          }));
        let PV = null,
          AV = 0;
        const MV = () => {
          PV = null, (0, hV.f)(null)
        };
        let zV = !1;
        const mV = new XV,
          SV = VV.look,
          IV = new NV.d,
          dV = new NV.d,
          OV = GV(VV),
          Ve = YV.h.subscribe(tV.n, (eV => {
            OV.pressPicked(VV.bodies(), eV)
          })),
          ee = uV(VV, ((VV, eV) => VV.primaryFireDown(!eV)), ((VV, eV) => {
            VV.primaryFireUp(eV)
          })),
          xe = uV(VV, (VV => VV.altFireDown()), ((VV, eV) => {
            VV.altFireUp(eV)
          }));
        let Je = !1,
          Ye = !1,
          Ue = !1;
        const ye = (0, BV.e)(TV.ab),
          pe = (0, BV.e)(TV.ab),
          Qe = new NV.d;
        let ne = !1;
        const we = () => {
            ye.reset(), pe.reset(), Qe.release(), (0, LV.f)(!1), SV.release(), ee.cancel(), (0, lV.e)(!1), xe.cancel(), OV.release(), IV.release(), dV.release(), MV()
          },
          Ze = function() {
            let JV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            we(), Ye = !1, JV || (Je = !1, xV = sV, Object.assign(eV, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), VV.stopMoving())
          };
        let ve = !1;
        const re = function(JV, YV, UV) {
            let yV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, kV.l)()) return void(ve || (ve = !0, Je = !1, VV.stopMoving()));
            ve = !1;
            const pV = (0, vV.i)(),
              nV = (0, CV.f)(YV, pV.moveDeadzone),
              ZV = (0, QV.i)("sprint");
            xV = (0, CV.u)(xV, {
              sprintPressed: JV.wasPressed(ZV),
              magnitude: nV.magnitude,
              autoSprint: pV.autoSprint,
              nowMs: UV
            }), eV.running = xV.running, eV.sprintHeld = JV.isHeld(ZV), eV.x = nV.x, eV.y = nV.y, eV.magnitude = nV.speed, eV.headingOffset = nV.headingOffset, Je = nV.magnitude > 0;
            const rV = (0, QV.i)("jump");
            if (eV.jumpHeld = JV.isHeld(rV), eV.jumpPressed = JV.wasPressed(rV), eV.jumpPressed && VV.bodies().jumpDown(), yV) return void VV.move(eV, null);
            const bV = (0, QV.i)("sneak"),
              EV = wV.filter({
                sneakHeld: JV.isHeld(bV),
                sneakPressed: JV.wasPressed(bV),
                sneakTogglePressed: JV.wasPressed((0, QV.i)("sneakToggle"))
              }, UV);
            VV.move(eV, {
              ...EV,
              mode: pV.sneakMode
            })
          },
          ke = (VV, eV) => {
            const xV = (0, QV.i)("chat");
            if ("off" === (0, vV.i)().quickChat) return void(VV.wasPressed(xV) && (ZV.c.consumeButton(xV), YV.h.QZ(gV.d)));
            const JV = IV.update(VV.wasPressed(xV), VV.isHeld(xV), eV, KV());
            "tap" === JV || "hold" === JV && null === (0, bV.e)() ? YV.h.QZ(gV.d) : "hold" === JV && (ZV.c.consumeButton(xV), YV.h.QZ(qV.o))
          },
          be = (eV, xV) => {
            ((VV, eV) => {
              const xV = (0, jV.e)(),
                JV = (0, QV.i)("emoteWheel");
              if ("wheel" === (0, vV.i)().emoteButton) return VV.wasPressed(JV) && (ZV.c.consumeButton(JV), YV.h.QZ("requestEmoteWheelPadOpen", !0)), (0, jV.e)() !== xV;
              const UV = dV.update(VV.wasPressed(JV), VV.isHeld(JV), eV, KV());
              return "tap" === UV ? YV.h.QZ("requestEmoteRepeatLast") : "hold" === UV && (ZV.c.consumeButton(JV), YV.h.QZ("requestEmoteWheelPadOpen", !1)), (0, jV.e)() !== xV
            })(eV, xV) || ke(eV, xV), eV.wasPressed((0, QV.i)("inventory")) && (ZV.c.consumeButton((0, QV.i)("inventory")), (0, pV.w)(HV(), "inventory", VV.hasFullInventory())), eV.wasPressed((0, QV.i)("pause")) && (ZV.c.consumeButton((0, QV.i)("pause")), (0, nV.b)() === yV.q.SOCIAL ? (0, pV.t)(HV(), yV.q.SOCIAL) : (0, pV.i)(HV())), eV.wasPressed((0, QV.i)("leaderboard")) && !(0, UV.g)() && (ZV.c.consumeButton((0, QV.i)("leaderboard")), ((VV, eV) => {
              if ("shop" === (0, DV.c)()) return YV.h.QZ(iV.h), void(0, pV.t)(VV, yV.q.SHOP, !0);
              (0, pV.t)(VV, yV.q.LOBBY_LEADERBOARD, eV)
            })(HV(), VV.hasLobbyTab()))
          },
          Ee = (eV, xV) => {
            const JV = VV.bodies();
            ((eV, xV) => {
              const JV = (0, QV.i)("attack"),
                YV = eV.wasPressed(JV);
              YV && !ee.isLatched() && (zV = VV.targetsBlock()), ee.update(YV, eV.isHeld(JV), xV, "toggle" === (0, vV.i)().attackMode), ee.isLatched() && zV ? mV.update(VV.targetsBlock(), xV) && ee.unlatch() : mV.reset(), (0, lV.e)(ee.isLatched())
            })(eV, xV), xe.update(eV.wasPressed((0, QV.i)("use")), eV.isHeld((0, QV.i)("use")), xV, !1), ye.update(eV.isHeld((0, QV.i)("hotbarPrevious")), xV) && VV.scrollHotbar(-1), pe.update(eV.isHeld((0, QV.i)("hotbarNext")), xV) && VV.scrollHotbar(1), ((eV, xV, JV) => {
              const YV = (0, QV.i)("perspective"),
                UV = (0, QV.i)("pickBlock"),
                yV = VV.pickBlockAllowed();
              (0, LV.f)(yV && !ne && VV.targetsBlock());
              const pV = () => {
                xV.pickBlock() && (ne = !0, (0, LV.f)(!1))
              };
              if (!yV || UV !== YV) return Qe.release(), eV.wasPressed(YV) && xV.swapCameraZoom(), void(yV && eV.wasPressed(UV) && pV());
              const nV = Qe.update(eV.wasPressed(UV), eV.isHeld(UV), JV, KV());
              "tap" === nV ? pV() : "hold" === nV && xV.swapCameraZoom()
            })(eV, JV, xV), ((eV, xV, JV) => {
              const YV = (0, QV.i)("drop");
              if (eV.wasPressed(YV)) {
                xV.dropItem(!1);
                const VV = (0, vV.i)();
                "off" !== VV.buttonRepeat && (PV = JV, AV = fV.b[VV.tapHoldTime].dropStackMs, (0, hV.f)(AV))
              }
              null !== PV && (!eV.isHeld(YV) || VV.selectedSlotEmpty() ? MV() : JV - PV >= AV && (MV(), xV.dropItem(!0)))
            })(eV, JV, xV), OV.update(JV, eV, xV, KV()), be(eV, xV)
          },
          Be = ZV.c.register({
            name: "gameplay",
            isActive: () => {
              const eV = Je && "keyboardMouse" === JV.b.get("activeInputDevice") && !(0, rV.A)(),
                xV = (0, rV.j)() ? [RV.c] : [];
              return ((0, rV.j)() || eV) && (0, EV.h)(xV) && VV.hasPlayer()
            },
            onFrame: VV => {
              const eV = performance.now(),
                xV = (0, vV.i)(),
                JV = (0, CV.v)(VV, (0, CV.k)(xV, (0, QV.i)("pause"), (0, aV.c)().isSupported())),
                YV = (0, CV.i)(JV, xV.swapSticks);
              return (0, rV.j)() ? (Ye = !1, (0, EV.h)() ? (Ue = !1, SV.update(YV.look, xV, JV.isHeld((0, QV.i)("use"))), re(JV, YV.move, eV), void Ee(JV, eV)) : (Ue || (Ue = !0, wV.lostToPadScreen(), Ze()), void ke(JV, eV))) : (Ye || (we(), Ye = !0), void re(JV, YV.move, eV))
            },
            onDeactivate: VV => {
              (0, rV.j)() && wV.lostToPadScreen(), Ze(VV)
            },
            onPeekFrame: eV => {
              (0, rV.j)() && (0, EV.h)(RV.g) && VV.hasPlayer() ? re(eV, (0, CV.i)(eV, (0, vV.i)().swapSticks).move, performance.now(), !0) : Ze()
            }
          }),
          je = (0, RV.f)(VV),
          qe = (() => {
            const VV = YV.h.subscribe(WV.c, (VV => {
              !VV && (0, rV.j)() && "inGame" === JV.b.get("gameState") && YV.h.QZ("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              YV.h.unsubscribe(VV)
            }
          })();
        return () => {
          Ze(), VV.uninstall(), (0, cV.h)(!1), (0, LV.f)(!1), YV.h.unsubscribe(FV), YV.h.unsubscribe(Ve), Be(), je(), qe(), SV.uninstall()
        }
      }
  },
  41837: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => kV,
      f: () => EV,
      g: () => rV
    });
    var JV = xV(1332),
      YV = xV(4674),
      UV = xV(9408),
      yV = xV(38106),
      pV = xV(1817),
      QV = xV(1218),
      nV = xV(8843),
      wV = xV(9333),
      ZV = xV(9422);
    const vV = {
        emoteWheel: UV.e,
        quickChatWheel: wV.c,
        actionWheel: ZV.r
      },
      rV = Object.keys(vV),
      kV = "dead",
      bV = VV => (0, JV.k)().includes(VV),
      EV = VV => {
        const eV = [(0, nV.o)(kV, (() => VV.hasPlayer() && VV.isPlayerDead())), (0, nV.o)("sleeping", (() => bV(yV.e))), (0, nV.o)("turnstile", (() => bV(QV.h))), (0, nV.o)("videoAd", pV.e), (0, nV.o)("replay", (() => (0, YV.g)() || VV.isReplayMode())), (0, nV.o)("freeCamera", (() => VV.isFreeCameraOn())), ...Object.entries(vV).map((VV => {
          let [eV, xV] = VV;
          return (0, nV.o)(eV, xV)
        }))];
        return () => {
          for (const VV of eV) VV()
        }
      }
  },
  41831: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV,
      f: () => QV,
      i: () => pV,
      k: () => wV,
      n: () => yV,
      q: () => UV,
      u: () => nV,
      v: () => ZV
    });
    var JV = xV(8786);
    class YV {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(VV, eV, xV) {
        const YV = (0, JV.k)(VV, eV.lookDeadzone);
        if (Math.hypot(YV.x, YV.y) < .9 || Math.abs(YV.x) < Math.abs(YV.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = xV);
        const UV = (yV = eV.lookSensitivityX, Math.min(1, 100 / yV));
        var yV;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (xV - this.fullTiltSinceMs - 250 * UV) / (200 * UV)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const UV = (VV, eV, xV, YV, UV) => {
        let yV = 1;
        return "boost" === xV.lookCurve ? yV = VV.update(eV, xV, UV) : VV.reset(),
          function(VV, eV) {
            let {
              yawBoost: xV = 1,
              aiming: YV = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const UV = (0, JV.j)((0, JV.k)(VV, eV.lookDeadzone), eV.lookCurve),
              yV = 220 * Math.PI / 180,
              pV = YV ? eV.aimLookSensitivity / 100 : 1,
              QV = eV.lookSensitivityX / 100 * pV,
              nV = eV.lookSensitivityY / 100 * pV;
            return {
              yawRadPerSec: UV.x * yV * QV * xV * (eV.invertLookX ? -1 : 1),
              pitchRadPerSec: UV.y * yV * .7 * nV * (eV.invertLookY ? -1 : 1)
            }
          }(eV, xV, {
            yawBoost: yV,
            aiming: YV
          })
      },
      yV = (VV, eV) => {
        const xV = Math.max(0, Math.min(250, eV)) / 1e3;
        return {
          uR: VV.yawRadPerSec * xV,
          eD: VV.pitchRadPerSec * xV
        }
      },
      pV = (VV, eV) => eV ? {
        move: VV.rightStick,
        look: VV.leftStick
      } : {
        move: VV.leftStick,
        look: VV.rightStick
      },
      QV = (VV, eV) => {
        const xV = (0, JV.k)(VV, eV),
          YV = Math.min(1, Math.hypot(xV.x, xV.y));
        return {
          magnitude: YV,
          speed: Math.min(1, YV / .8),
          headingOffset: 0 === YV ? 0 : Math.atan2(xV.x, -xV.y),
          x: xV.x,
          y: xV.y
        }
      },
      nV = (VV, eV) => {
        let {
          sprintPressed: xV,
          magnitude: JV,
          autoSprint: YV,
          nowMs: UV
        } = eV;
        const yV = xV ? UV : VV.latchedAtMs,
          pV = (VV => {
            let {
              running: eV,
              magnitude: xV,
              sprintPressed: JV,
              autoSprint: YV
            } = VV;
            return !(xV < .5) && (!!JV || !!(YV && xV >= .9) || eV)
          })({
            running: VV.running,
            magnitude: JV,
            sprintPressed: UV - yV <= 1e3,
            autoSprint: YV
          });
        return {
          running: pV,
          latchedAtMs: pV ? -1 / 0 : yV
        }
      },
      wV = (VV, eV, xV) => xV && VV.gyroAiming && "button" === VV.gyroActivation && VV.gyroButton !== eV ? VV.gyroButton : null,
      ZV = (VV, eV) => eV ? {
        ...VV,
        isHeld: xV => xV !== eV && VV.isHeld(xV),
        wasPressed: xV => xV !== eV && VV.wasPressed(xV),
        wasReleased: xV => xV !== eV && VV.wasReleased(xV),
        value: xV => xV === eV ? 0 : VV.value(xV)
      } : VV
  },
  41850: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV,
      e: () => JV
    });
    const JV = VV => {
      let {
        mode: eV,
        sneakHeld: xV,
        sneakPressed: JV,
        sneakTogglePressed: YV,
        descending: UV,
        canCrouch: yV,
        toggled: pV
      } = VV;
      return yV ? UV ? {
        crouchHeld: xV,
        toggled: !1
      } : "hold" === eV ? {
        crouchHeld: xV,
        toggled: YV ? !pV : pV
      } : {
        crouchHeld: !1,
        toggled: JV || YV ? !pV : pV
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class YV {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(VV, eV) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = eV, this.graceEndsMs = eV + 500);
        const xV = eV < this.graceEndsMs;
        return xV && (VV.sneakPressed || VV.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, eV + 300))), VV.sneakHeld ? xV && VV.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: VV.sneakHeld && !this.ignoringHeld,
          sneakPressed: VV.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: VV.sneakTogglePressed && !xV
        }
      }
    }
  },
  41825: (VV, eV, xV) => {
    xV(9462)
  },
  41827: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => qV
    });
    var JV = xV(32),
      YV = xV(9408),
      UV = xV(9416),
      yV = xV(8796),
      pV = xV(8831),
      QV = xV(8811),
      nV = xV(41831),
      wV = xV(41837),
      ZV = xV(8843),
      vV = xV(8786),
      rV = xV(9333),
      kV = xV(9422);
    const bV = [{
        isOpen: YV.i,
        openButton: () => (0, yV.i)("emoteWheel"),
        aim: VV => {
          JV.h.QZ("emoteWheelPadAim", VV)
        },
        commit: VV => {
          JV.h.QZ("requestEmoteWheelPadCommit", VV)
        },
        close: () => {
          JV.h.QZ("requestEmoteWheelClose")
        }
      }, {
        isOpen: rV.c,
        openButton: () => (0, yV.i)("chat"),
        aim: VV => {
          JV.h.QZ(rV.f, VV)
        },
        commit: VV => {
          JV.h.QZ(rV.k, VV)
        },
        close: () => {
          JV.h.QZ(rV.g)
        },
        keptOpenBy: [wV.c]
      }, {
        isOpen: kV.r,
        openButton: () => (0, yV.i)("actionButton"),
        aim: VV => {
          JV.h.QZ(kV.d, VV)
        },
        commit: VV => {
          JV.h.QZ(kV.g, VV)
        },
        close: () => {
          JV.h.QZ(kV.f)
        }
      }],
      EV = () => {
        var VV;
        return null !== (VV = bV.find((VV => VV.isOpen()))) && void 0 !== VV ? VV : null
      },
      BV = VV => (0, yV.L)(VV.openButton()),
      jV = (VV, eV) => !(0, vV.M)(VV.frame.values, eV),
      qV = () => {
        let VV = null,
          eV = !1,
          xV = !1;
        return pV.c.register({
          name: "wheel",
          isActive: () => null !== EV(),
          peek: () => {
            const VV = EV();
            return VV && BV(VV) ? null : {
              over: "gameplay",
              stick: (0, QV.i)().swapSticks ? "right" : "left"
            }
          },
          onFrame: JV => {
            var YV;
            const vV = EV();
            if (!vV) return;
            if (null !== (0, ZV.e)([...wV.g, ...null !== (YV = vV.keptOpenBy) && void 0 !== YV ? YV : []])) return void vV.close();
            const rV = vV.openButton(),
              kV = (0, nV.i)(JV.frame, (0, QV.i)().swapSticks),
              bV = BV(vV) ? kV.move : kV.look;
            VV !== vV ? (VV = vV, eV = !jV(JV, rV) || Math.hypot(bV.x, bV.y) >= UV.C, xV = !1) : xV && (xV = !1, jV(JV, rV) && (eV = !1)), vV.aim(bV);
            const qV = (0, yV.i)("menuConfirm"),
              tV = (0, yV.i)("menuBack");
            return JV.wasPressed(tV) ? (pV.c.consumeButton(tV), void vV.close()) : JV.wasPressed(qV) || JV.wasPressed(rV) ? (pV.c.consumeButton(qV), pV.c.consumeButton(rV), void vV.commit(!1)) : void(eV && jV(JV, rV) && (eV = !1, vV.commit(!0)))
          },
          onDeactivate: () => {
            xV = null !== VV && EV() === VV, xV || (VV = null, eV = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);
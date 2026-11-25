export const id = 247;
export const ids = [247];
export const modules = {
  37852: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => GM,
      d: () => UM
    });
    var OM = iM(4589),
      SM = iM(1516),
      jM = iM(44),
      aM = iM(6944),
      PM = iM(4581),
      nM = iM(1313),
      QM = iM(2039),
      zM = iM(2006),
      LM = iM(1520),
      mM = iM(1188),
      HM = iM(37855),
      hM = iM(1116),
      JM = iM.n(hM),
      dM = iM(1360),
      yM = iM(1398),
      lM = iM(1287),
      EM = iM(1303);
    const UM = "SleepingOverlay";

    function GM() {
      const {
        t: MM
      } = (0, mM.A)(), [rM, iM] = (0, jM.useState)(!1), [hM, GM] = (0, jM.useState)(null), [eM, bM] = (0, jM.useState)(1), [wM, tM] = (0, jM.useState)(!1), [gM, uM] = (0, jM.useState)(!1), RM = (0, jM.useRef)(0), pM = (0, jM.useRef)(!1), WM = (0, jM.useRef)(!1), sM = (0, jM.useRef)(), DM = (0, jM.useRef)(null);

      function kM() {
        const MM = null !== hM && void 0 !== hM ? hM : "Rested Speed";
        QM.gameBridge.send("wakeUp", gM ? MM : null), DM.current = null, iM(!1), GM(null), bM(1), tM(!1), uM(!1)
      }

      function ZM() {
        return !wM && (kM(), !0)
      }
      return (0, SM.d)("PlayerPhysicsTypeUpdate", (MM => {
        MM !== DM.current && (DM.current = MM, MM === aM.n.SLEEPING ? (WM.current || (RM.current = QM.gameBridge.lookup("cameraZoom", null), WM.current = !0), pM.current = !0, QM.gameBridge.send("setCameraZoom", 3), iM(!0), bM(function() {
          for (const MM of QM.gameBridge.lookup("blocksStandingOn", null)) {
            if (HM.c.leafBeds.includes(MM)) return console.log(`Found leaf bed: ${MM}`), 1;
            if (HM.c.woolBeds.includes(MM)) return console.log(`Found woold bed: ${MM}`), 2;
            if (HM.c.strongBeds.includes(MM)) return console.log(`Found strong bed ${MM}`), 3
          }
          return 1
        }())) : (WM.current = !1, iM(!1), GM(null), bM(1)))
      })), (0, jM.useEffect)((() => () => {
        (0, nM.v)(UM)
      }), []), (0, jM.useEffect)((() => {
        rM ? (0, nM.z)(UM) : ((0, nM.v)(UM), pM.current && (QM.gameBridge.send("setCameraZoom", RM.current), pM.current = !1))
      }), [rM]), (0, lM.v)("overlay", sM, ZM, rM), (0, EM.jsx)(OM.d, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: rM,
        timeout: 300,
        nodeRef: sM,
        unmountOnExit: !0,
        children: (0, EM.jsx)("div", {
          ref: sM,
          onClick: MM => {
            ZM() && MM.stopPropagation()
          },
          children: (0, EM.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, EM.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: PM.j.map((rM => (0, EM.jsxs)(CM, {
                restedEffect: rM,
                vQ: hM,
                setChosenRestedEffect: GM,
                children: [(0, EM.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, EM.jsx)(zM.b, {
                    text: [{
                      icon: rM
                    }]
                  }), PM.g[rM].shortName]
                }), (0, EM.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: MM(PM.g[rM].description, {
                    time: PM.g[rM].effectLevelDurations[eM] / 6e4
                  })
                })]
              }, rM)))
            }), (0, EM.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, EM.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, EM.jsxs)(LM.e, {
                className: "SleepingOverlayWakeUpButton",
                onClick: MM => {
                  gM ? kM() : (tM(!0), (0, dM.Z)((() => {
                    tM(!1), uM(!0)
                  }), !0)), MM.stopPropagation()
                },
                loading: wM,
                children: [!gM && (0, EM.jsxs)(EM.Fragment, {
                  children: [(0, EM.jsx)(yM.b, {
                    name: "film"
                  }), " ", MM("classicGame:watchAdToGetRestedPerk")]
                }), gM && MM("classicGame:wakeUp")]
              }), (0, EM.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, EM.jsx)("div", {
                  className: JM()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === eM
                  }),
                  children: (0, EM.jsx)(zM.b, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, EM.jsx)("div", {
                  className: JM()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === eM
                  }),
                  children: (0, EM.jsx)(zM.b, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, EM.jsx)("div", {
                  className: JM()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === eM
                  }),
                  children: (0, EM.jsx)(zM.b, {
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
    const CM = (0, jM.memo)((function(MM) {
      let {
        children: rM,
        restedEffect: iM,
        vQ: OM,
        setChosenRestedEffect: SM
      } = MM;
      return iM === OM ? (0, EM.jsx)(LM.p, {
        onClick: MM => {
          MM.stopPropagation()
        },
        children: rM
      }) : (0, EM.jsx)(LM.i, {
        onClick: MM => {
          SM(iM), MM.stopPropagation()
        },
        children: rM
      })
    }))
  },
  41656: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => qM
    });
    var OM = iM(19),
      SM = iM(22),
      jM = iM(4613),
      aM = iM(313),
      PM = iM(1717),
      nM = iM(8731),
      QM = iM(4633),
      zM = iM(9315),
      LM = iM(8776),
      mM = iM(8743),
      HM = iM(8785),
      hM = iM(1464),
      JM = iM(1765),
      dM = iM(8792),
      yM = iM(9259),
      lM = iM(9403),
      EM = iM(9324),
      UM = iM(9408),
      GM = iM(2039),
      CM = iM(8723),
      eM = iM(9347),
      bM = iM(9339),
      wM = iM(9322);
    class tM {
      constructor() {
        this.lostAtMs = null
      }
      update(MM, rM) {
        return MM ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= rM, rM - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class gM {
      constructor(MM, rM) {
        this.press = MM, this.release = rM, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(MM, rM, iM, OM) {
        if (MM && null === this.downAtMs) return this.downAtMs = iM, this.latched = OM, void(this.token = this.press(OM));
        null !== this.downAtMs && (this.latched ? MM && this.end() : !rM && iM - this.downAtMs >= 40 && this.end())
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
        const MM = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(MM)
      }
    }
    const uM = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      RM = MM => {
        let rM = null;
        const iM = new wM.c,
          OM = () => {
            rM && (((MM, rM, iM) => {
              switch (iM.kind) {
                case "reload":
                  return void rM.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void rM.specialActionUp(iM.action);
                case "customButton":
                  return void GM.gameBridge.send("pressCustomButton", {
                    id: iM.id,
                    down: !1
                  });
                case "touchButton":
                  MM.pressTouchButton(!1)
              }
            })(MM, rM.bodies, rM.action), rM = null)
          },
          jM = (iM, SM, jM, aM) => {
            OM(), rM = {
              action: SM,
              bodies: iM,
              heldBy: jM,
              atMs: aM
            }, ((MM, rM, iM) => {
              switch (iM.kind) {
                case "reload":
                  return rM.reloadGun(), void rM.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void rM.specialActionDown(iM.action);
                case "customButton":
                  return void GM.gameBridge.send("pressCustomButton", {
                    id: iM.id,
                    down: !0
                  });
                case "touchButton":
                  MM.pressTouchButton(!0)
              }
            })(MM, iM, SM)
          };
        return {
          update: (aM, PM, QM, zM) => {
            var mM;
            const HM = (0, eM.i)(MM.contextActionInputs()),
              hM = null !== (mM = HM[0]) && void 0 !== mM ? mM : uM;
            (0, bM.d)((0, eM.f)(hM) ? hM : null);
            const JM = (0, eM.c)(HM);
            (0, bM.g)(JM);
            const dM = (0, nM.m)("actionButton");
            if (JM) {
              const MM = iM.update(PM.wasPressed(dM), PM.isHeld(dM), QM, zM);
              "tap" === MM ? jM(aM, hM, [dM], QM) : "hold" === MM && (LM.d.consumeButton(dM), SM.i.Tz(UM.l, HM))
            } else iM.release(), PM.wasPressed(dM) && jM(aM, hM, [dM], QM);
            rM && QM - rM.atMs >= 40 && !rM.heldBy.some((MM => (0, CM.J)(PM.frame.values, MM))) && OM()
          },
          pressPicked: (MM, rM) => {
            jM(MM, rM, [(0, nM.m)("menuConfirm"), (0, nM.m)("actionButton")], performance.now())
          },
          release: () => {
            iM.release(), OM(), (0, bM.d)(null), (0, bM.g)(!1)
          }
        }
      };
    var pM = iM(8717);
    var WM = iM(41652),
      sM = iM(9353),
      DM = iM(8767),
      kM = iM(9442);
    var ZM = iM(41650),
      oM = iM(9451),
      fM = iM(41665),
      YM = iM(9425),
      NM = iM(9357),
      AM = iM(9362),
      xM = iM(9364),
      vM = iM(9264),
      FM = iM(9331);
    const BM = () => vM.c[(0, mM.j)().tapHoldTime].wheelMs,
      XM = () => ((0, zM.d)(), (0, FM.d)("controllerMenuKey")),
      IM = (MM, rM, iM) => new gM((iM => {
        const OM = MM.bodies();
        return {
          bodies: OM,
          press: rM(OM, iM)
        }
      }), (MM => {
        let {
          bodies: rM,
          press: OM
        } = MM;
        iM(rM, OM)
      })),
      KM = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      qM = MM => {
        const rM = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let iM = KM;
        const zM = new fM.c,
          GM = SM.i.subscribe("appManagerUpdated|activeInputDevice", (rM => {
            MM.deviceChanged(rM)
          }));
        let eM = null,
          bM = 0;
        const gM = () => {
          eM = null, (0, NM.g)(null)
        };
        let uM = !1;
        const FM = new tM,
          qM = MM.look,
          TM = new wM.c,
          VM = new wM.c,
          cM = RM(MM),
          Mr = SM.i.subscribe(UM.p, (rM => {
            cM.pressPicked(MM.bodies(), rM)
          })),
          rr = IM(MM, ((MM, rM) => MM.primaryFireDown(!rM)), ((MM, rM) => {
            MM.primaryFireUp(rM)
          })),
          ir = IM(MM, (MM => MM.altFireDown()), ((MM, rM) => {
            MM.altFireUp(rM)
          }));
        let Or = !1,
          Sr = !1,
          jr = !1;
        const ar = (0, yM.d)(CM.$),
          Pr = (0, yM.d)(CM.$),
          nr = new wM.c;
        let Qr = !1;
        const zr = () => {
            ar.reset(), Pr.reset(), nr.release(), (0, xM.f)(!1), qM.release(), rr.cancel(), (0, AM.g)(!1), ir.cancel(), cM.release(), TM.release(), VM.release(), gM()
          },
          Lr = function() {
            let OM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            zr(), Sr = !1, OM || (Or = !1, iM = KM, Object.assign(rM, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), MM.stopMoving())
          };
        let mr = !1;
        const Hr = function(OM, SM, jM) {
            let aM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, hM.h)()) return void(mr || (mr = !0, Or = !1, MM.stopMoving()));
            mr = !1;
            const PM = (0, mM.j)(),
              QM = (0, ZM.f)(SM, PM.moveDeadzone),
              LM = (0, nM.m)("sprint");
            iM = (0, ZM.o)(iM, {
              sprintPressed: OM.wasPressed(LM),
              magnitude: QM.magnitude,
              autoSprint: PM.autoSprint,
              nowMs: jM
            }), rM.running = iM.running, rM.sprintHeld = OM.isHeld(LM), rM.x = QM.x, rM.y = QM.y, rM.magnitude = QM.speed, rM.headingOffset = QM.headingOffset, Or = QM.magnitude > 0;
            const HM = (0, nM.m)("jump");
            if (rM.jumpHeld = OM.isHeld(HM), rM.jumpPressed = OM.wasPressed(HM), rM.jumpPressed && MM.bodies().jumpDown(), aM) return void MM.move(rM, null);
            const JM = (0, nM.m)("sneak"),
              dM = zM.filter({
                sneakHeld: OM.isHeld(JM),
                sneakPressed: OM.wasPressed(JM),
                sneakTogglePressed: OM.wasPressed((0, nM.m)("sneakToggle"))
              }, jM);
            MM.move(rM, {
              ...dM,
              mode: PM.sneakMode
            })
          },
          hr = (MM, rM) => {
            const iM = (0, nM.m)("chat");
            if ("off" === (0, mM.j)().quickChat) return void(MM.wasPressed(iM) && (LM.d.consumeButton(iM), SM.i.Tz(sM.d)));
            const OM = TM.update(MM.wasPressed(iM), MM.isHeld(iM), rM, BM());
            "tap" === OM || "hold" === OM && null === (0, JM.e)() ? SM.i.Tz(sM.d) : "hold" === OM && (LM.d.consumeButton(iM), SM.i.Tz(EM.k))
          },
          Jr = (rM, iM) => {
            ((MM, rM) => {
              const iM = (0, lM.c)(),
                OM = (0, nM.m)("emoteWheel");
              if ("wheel" === (0, mM.j)().emoteButton) return MM.wasPressed(OM) && (LM.d.consumeButton(OM), SM.i.Tz("requestEmoteWheelPadOpen", !0)), (0, lM.c)() !== iM;
              const jM = VM.update(MM.wasPressed(OM), MM.isHeld(OM), rM, BM());
              return "tap" === jM ? SM.i.Tz("requestEmoteRepeatLast") : "hold" === jM && (LM.d.consumeButton(OM), SM.i.Tz("requestEmoteWheelPadOpen", !1)), (0, lM.c)() !== iM
            })(rM, iM) || hr(rM, iM), rM.wasPressed((0, nM.m)("inventory")) && (LM.d.consumeButton((0, nM.m)("inventory")), (0, PM.C)(XM(), "inventory", MM.hasFullInventory())), rM.wasPressed((0, nM.m)("pause")) && (LM.d.consumeButton((0, nM.m)("pause")), (0, QM.d)() === aM.m.SOCIAL ? (0, PM.B)(XM(), aM.m.SOCIAL) : (0, PM.k)(XM())), rM.wasPressed((0, nM.m)("leaderboard")) && !(0, jM.f)() && (LM.d.consumeButton((0, nM.m)("leaderboard")), ((MM, rM) => {
              if ("shop" === (0, DM.d)()) return SM.i.Tz(kM.n), void(0, PM.B)(MM, aM.m.SHOP, !0);
              (0, PM.B)(MM, aM.m.LOBBY_LEADERBOARD, rM)
            })(XM(), MM.hasLobbyTab()))
          },
          dr = (rM, iM) => {
            const OM = MM.bodies();
            ((rM, iM) => {
              const OM = (0, nM.m)("attack"),
                SM = rM.wasPressed(OM);
              SM && !rr.isLatched() && (uM = MM.targetsBlock()), rr.update(SM, rM.isHeld(OM), iM, "toggle" === (0, mM.j)().attackMode), rr.isLatched() && uM ? FM.update(MM.targetsBlock(), iM) && rr.unlatch() : FM.reset(), (0, AM.g)(rr.isLatched())
            })(rM, iM), ir.update(rM.wasPressed((0, nM.m)("use")), rM.isHeld((0, nM.m)("use")), iM, !1), ar.update(rM.isHeld((0, nM.m)("hotbarPrevious")), iM) && MM.scrollHotbar(-1), Pr.update(rM.isHeld((0, nM.m)("hotbarNext")), iM) && MM.scrollHotbar(1), ((rM, iM, OM) => {
              const SM = (0, nM.m)("perspective"),
                jM = (0, nM.m)("pickBlock"),
                aM = MM.pickBlockAllowed();
              (0, xM.f)(aM && !Qr && MM.targetsBlock());
              const PM = () => {
                iM.pickBlock() && (Qr = !0, (0, xM.f)(!1))
              };
              if (!aM || jM !== SM) return nr.release(), rM.wasPressed(SM) && iM.swapCameraZoom(), void(aM && rM.wasPressed(jM) && PM());
              const QM = nr.update(rM.wasPressed(jM), rM.isHeld(jM), OM, BM());
              "tap" === QM ? PM() : "hold" === QM && iM.swapCameraZoom()
            })(rM, OM, iM), ((rM, iM, OM) => {
              const SM = (0, nM.m)("drop");
              if (rM.wasPressed(SM)) {
                iM.dropItem(!1);
                const MM = (0, mM.j)();
                "off" !== MM.buttonRepeat && (eM = OM, bM = vM.c[MM.tapHoldTime].dropStackMs, (0, NM.g)(bM))
              }
              null !== eM && (!rM.isHeld(SM) || MM.selectedSlotEmpty() ? gM() : OM - eM >= bM && (gM(), iM.dropItem(!0)))
            })(rM, OM, iM), cM.update(OM, rM, iM, BM()), Jr(rM, iM)
          },
          yr = LM.d.register({
            name: "gameplay",
            isActive: () => {
              const rM = Or && "keyboardMouse" === OM.d.get("activeInputDevice") && !(0, HM.D)(),
                iM = (0, HM.g)() ? [WM.c] : [];
              return ((0, HM.g)() || rM) && (0, dM.c)(iM) && MM.hasPlayer()
            },
            onFrame: MM => {
              const rM = performance.now(),
                iM = (0, mM.j)(),
                OM = (0, ZM.s)(MM, (0, ZM.i)(iM, (0, nM.m)("pause"), (0, oM.b)().isSupported())),
                SM = (0, ZM.h)(OM, iM.swapSticks);
              return (0, HM.g)() ? (Sr = !1, (0, dM.c)() ? (jr = !1, qM.update(SM.look, iM, OM.isHeld((0, nM.m)("use"))), Hr(OM, SM.move, rM), void dr(OM, rM)) : (jr || (jr = !0, zM.lostToPadScreen(), Lr()), void hr(OM, rM))) : (Sr || (zr(), Sr = !0), void Hr(OM, SM.move, rM))
            },
            onDeactivate: MM => {
              (0, HM.g)() && zM.lostToPadScreen(), Lr(MM)
            },
            onPeekFrame: rM => {
              (0, HM.g)() && (0, dM.c)(WM.h) && MM.hasPlayer() ? Hr(rM, (0, ZM.h)(rM, (0, mM.j)().swapSticks).move, performance.now(), !0) : Lr()
            }
          }),
          lr = (0, WM.d)(MM),
          Er = (() => {
            const MM = SM.i.subscribe(pM.c, (MM => {
              !MM && (0, HM.g)() && "inGame" === OM.d.get("gameState") && SM.i.Tz("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              SM.i.unsubscribe(MM)
            }
          })();
        return () => {
          Lr(), MM.uninstall(), (0, YM.g)(!1), (0, xM.f)(!1), SM.i.unsubscribe(GM), SM.i.unsubscribe(Mr), yr(), lr(), Er(), qM.uninstall()
        }
      }
  },
  41652: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => hM,
      d: () => dM,
      h: () => HM
    });
    var OM = iM(1313),
      SM = iM(4613),
      jM = iM(9383),
      aM = iM(37852),
      PM = iM(1818),
      nM = iM(1181),
      QM = iM(8792),
      zM = iM(9324),
      LM = iM(9408);
    const mM = {
        emoteWheel: jM.g,
        quickChatWheel: zM.c,
        actionWheel: LM.s
      },
      HM = Object.keys(mM),
      hM = "dead",
      JM = MM => (0, OM.u)().includes(MM),
      dM = MM => {
        const rM = [(0, QM.e)(hM, (() => MM.hasPlayer() && MM.isPlayerDead())), (0, QM.e)("sleeping", (() => JM(aM.d))), (0, QM.e)("turnstile", (() => JM(nM.f))), (0, QM.e)("videoAd", PM.e), (0, QM.e)("replay", (() => (0, SM.f)() || MM.isReplayMode())), (0, QM.e)("freeCamera", (() => MM.isFreeCameraOn())), ...Object.entries(mM).map((MM => {
          let [rM, iM] = MM;
          return (0, QM.e)(rM, iM)
        }))];
        return () => {
          for (const MM of rM) MM()
        }
      }
  },
  41650: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM,
      f: () => nM,
      h: () => PM,
      i: () => zM,
      l: () => aM,
      n: () => jM,
      o: () => QM,
      s: () => LM
    });
    var OM = iM(8723);
    class SM {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(MM, rM, iM) {
        const SM = (0, OM.i)(MM, rM.lookDeadzone);
        if (Math.hypot(SM.x, SM.y) < .9 || Math.abs(SM.x) < Math.abs(SM.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = iM);
        const jM = (aM = rM.lookSensitivityX, Math.min(1, 100 / aM));
        var aM;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (iM - this.fullTiltSinceMs - 250 * jM) / (200 * jM)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const jM = (MM, rM, iM, SM, jM) => {
        let aM = 1;
        return "boost" === iM.lookCurve ? aM = MM.update(rM, iM, jM) : MM.reset(),
          function(MM, rM) {
            let {
              yawBoost: iM = 1,
              aiming: SM = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const jM = (0, OM.h)((0, OM.i)(MM, rM.lookDeadzone), rM.lookCurve),
              aM = 220 * Math.PI / 180,
              PM = SM ? rM.aimLookSensitivity / 100 : 1,
              nM = rM.lookSensitivityX / 100 * PM,
              QM = rM.lookSensitivityY / 100 * PM;
            return {
              yawRadPerSec: jM.x * aM * nM * iM * (rM.invertLookX ? -1 : 1),
              pitchRadPerSec: jM.y * aM * .7 * QM * (rM.invertLookY ? -1 : 1)
            }
          }(rM, iM, {
            yawBoost: aM,
            aiming: SM
          })
      },
      aM = (MM, rM) => {
        const iM = Math.max(0, Math.min(250, rM)) / 1e3;
        return {
          PD: MM.yawRadPerSec * iM,
          nD: MM.pitchRadPerSec * iM
        }
      },
      PM = (MM, rM) => rM ? {
        move: MM.rightStick,
        look: MM.leftStick
      } : {
        move: MM.leftStick,
        look: MM.rightStick
      },
      nM = (MM, rM) => {
        const iM = (0, OM.i)(MM, rM),
          SM = Math.min(1, Math.hypot(iM.x, iM.y));
        return {
          magnitude: SM,
          speed: Math.min(1, SM / .8),
          headingOffset: 0 === SM ? 0 : Math.atan2(iM.x, -iM.y),
          x: iM.x,
          y: iM.y
        }
      },
      QM = (MM, rM) => {
        let {
          sprintPressed: iM,
          magnitude: OM,
          autoSprint: SM,
          nowMs: jM
        } = rM;
        const aM = iM ? jM : MM.latchedAtMs,
          PM = (MM => {
            let {
              running: rM,
              magnitude: iM,
              sprintPressed: OM,
              autoSprint: SM
            } = MM;
            return !(iM < .5) && (!!OM || !!(SM && iM >= .9) || rM)
          })({
            running: MM.running,
            magnitude: OM,
            sprintPressed: jM - aM <= 1e3,
            autoSprint: SM
          });
        return {
          running: PM,
          latchedAtMs: PM ? -1 / 0 : aM
        }
      },
      zM = (MM, rM, iM) => iM && MM.gyroAiming && "button" === MM.gyroActivation && MM.gyroButton !== rM ? MM.gyroButton : null,
      LM = (MM, rM) => rM ? {
        ...MM,
        isHeld: iM => iM !== rM && MM.isHeld(iM),
        wasPressed: iM => iM !== rM && MM.wasPressed(iM),
        wasReleased: iM => iM !== rM && MM.wasReleased(iM),
        value: iM => iM === rM ? 0 : MM.value(iM)
      } : MM
  },
  41665: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM,
      e: () => OM
    });
    const OM = MM => {
      let {
        mode: rM,
        sneakHeld: iM,
        sneakPressed: OM,
        sneakTogglePressed: SM,
        descending: jM,
        canCrouch: aM,
        toggled: PM
      } = MM;
      return aM ? jM ? {
        crouchHeld: iM,
        toggled: !1
      } : "hold" === rM ? {
        crouchHeld: iM,
        toggled: SM ? !PM : PM
      } : {
        crouchHeld: !1,
        toggled: OM || SM ? !PM : PM
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class SM {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(MM, rM) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = rM, this.graceEndsMs = rM + 500);
        const iM = rM < this.graceEndsMs;
        return iM && (MM.sneakPressed || MM.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, rM + 300))), MM.sneakHeld ? iM && MM.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: MM.sneakHeld && !this.ignoringHeld,
          sneakPressed: MM.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: MM.sneakTogglePressed && !iM
        }
      }
    }
  },
  41640: (MM, rM, iM) => {
    iM(9451)
  },
  41642: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => EM
    });
    var OM = iM(22),
      SM = iM(9383),
      jM = iM(9400),
      aM = iM(8731),
      PM = iM(8776),
      nM = iM(8743),
      QM = iM(41650),
      zM = iM(41652),
      LM = iM(8792),
      mM = iM(8723),
      HM = iM(9324),
      hM = iM(9408);
    const JM = [{
        isOpen: SM.i,
        openButton: () => (0, aM.m)("emoteWheel"),
        aim: MM => {
          OM.i.Tz("emoteWheelPadAim", MM)
        },
        commit: MM => {
          OM.i.Tz("requestEmoteWheelPadCommit", MM)
        },
        close: () => {
          OM.i.Tz("requestEmoteWheelClose")
        }
      }, {
        isOpen: HM.c,
        openButton: () => (0, aM.m)("chat"),
        aim: MM => {
          OM.i.Tz(HM.e, MM)
        },
        commit: MM => {
          OM.i.Tz(HM.j, MM)
        },
        close: () => {
          OM.i.Tz(HM.h)
        },
        keptOpenBy: [zM.c]
      }, {
        isOpen: hM.s,
        openButton: () => (0, aM.m)("actionButton"),
        aim: MM => {
          OM.i.Tz(hM.b, MM)
        },
        commit: MM => {
          OM.i.Tz(hM.j, MM)
        },
        close: () => {
          OM.i.Tz(hM.f)
        }
      }],
      dM = () => {
        var MM;
        return null !== (MM = JM.find((MM => MM.isOpen()))) && void 0 !== MM ? MM : null
      },
      yM = MM => (0, aM.X)(MM.openButton()),
      lM = (MM, rM) => !(0, mM.J)(MM.frame.values, rM),
      EM = () => {
        let MM = null,
          rM = !1,
          iM = !1;
        return PM.d.register({
          name: "wheel",
          isActive: () => null !== dM(),
          peek: () => {
            const MM = dM();
            return MM && yM(MM) ? null : {
              over: "gameplay",
              stick: (0, nM.j)().swapSticks ? "right" : "left"
            }
          },
          onFrame: OM => {
            var SM;
            const mM = dM();
            if (!mM) return;
            if (null !== (0, LM.b)([...zM.h, ...null !== (SM = mM.keptOpenBy) && void 0 !== SM ? SM : []])) return void mM.close();
            const HM = mM.openButton(),
              hM = (0, QM.h)(OM.frame, (0, nM.j)().swapSticks),
              JM = yM(mM) ? hM.move : hM.look;
            MM !== mM ? (MM = mM, rM = !lM(OM, HM) || Math.hypot(JM.x, JM.y) >= jM.E, iM = !1) : iM && (iM = !1, lM(OM, HM) && (rM = !1)), mM.aim(JM);
            const EM = (0, aM.m)("menuConfirm"),
              UM = (0, aM.m)("menuBack");
            return OM.wasPressed(UM) ? (PM.d.consumeButton(UM), void mM.close()) : OM.wasPressed(EM) || OM.wasPressed(HM) ? (PM.d.consumeButton(EM), PM.d.consumeButton(HM), void mM.commit(!1)) : void(rM && lM(OM, HM) && (rM = !1, mM.commit(!0)))
          },
          onDeactivate: () => {
            iM = null !== MM && dM() === MM, iM || (MM = null, rM = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);
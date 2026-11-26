export const id = 251;
export const ids = [251];
export const modules = {
  37619: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => VB,
      f: () => AB
    });
    var YB = GB(4662),
      DB = GB(1480),
      QB = GB(56),
      oB = GB(6991),
      jB = GB(4649),
      yB = GB(1293),
      JB = GB(2023),
      MB = GB(2e3),
      PB = GB(1485),
      zB = GB(1175),
      lB = GB(37627),
      pB = GB(1090),
      qB = GB.n(pB),
      ZB = GB(1338),
      NB = GB(1383),
      RB = GB(1268),
      WB = GB(1282);
    const AB = "SleepingOverlay";

    function VB() {
      const {
        t: BB
      } = (0, zB.H)(), [OB, GB] = (0, QB.useState)(!1), [pB, VB] = (0, QB.useState)(null), [nB, UB] = (0, QB.useState)(1), [fB, kB] = (0, QB.useState)(!1), [dB, KB] = (0, QB.useState)(!1), uB = (0, QB.useRef)(0), mB = (0, QB.useRef)(!1), IB = (0, QB.useRef)(!1), FB = (0, QB.useRef)(), iB = (0, QB.useRef)(null);

      function LB() {
        const BB = null !== pB && void 0 !== pB ? pB : "Rested Speed";
        JB.gameBridge.send("wakeUp", dB ? BB : null), iB.current = null, GB(!1), VB(null), UB(1), kB(!1), KB(!1)
      }

      function gB() {
        return !fB && (LB(), !0)
      }
      return (0, DB.f)("PlayerPhysicsTypeUpdate", (BB => {
        BB !== iB.current && (iB.current = BB, BB === oB.o.SLEEPING ? (IB.current || (uB.current = JB.gameBridge.lookup("cameraZoom", null), IB.current = !0), mB.current = !0, JB.gameBridge.send("setCameraZoom", 3), GB(!0), UB(function() {
          for (const BB of JB.gameBridge.lookup("blocksStandingOn", null)) {
            if (lB.d.leafBeds.includes(BB)) return console.log(`Found leaf bed: ${BB}`), 1;
            if (lB.d.woolBeds.includes(BB)) return console.log(`Found woold bed: ${BB}`), 2;
            if (lB.d.strongBeds.includes(BB)) return console.log(`Found strong bed ${BB}`), 3
          }
          return 1
        }())) : (IB.current = !1, GB(!1), VB(null), UB(1)))
      })), (0, QB.useEffect)((() => () => {
        (0, yB.o)(AB)
      }), []), (0, QB.useEffect)((() => {
        OB ? (0, yB.p)(AB) : ((0, yB.o)(AB), mB.current && (JB.gameBridge.send("setCameraZoom", uB.current), mB.current = !1))
      }), [OB]), (0, RB.v)("overlay", FB, gB, OB), (0, WB.jsx)(YB.e, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: OB,
        timeout: 300,
        nodeRef: FB,
        unmountOnExit: !0,
        children: (0, WB.jsx)("div", {
          ref: FB,
          onClick: BB => {
            gB() && BB.stopPropagation()
          },
          children: (0, WB.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, WB.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: jB.i.map((OB => (0, WB.jsxs)(SB, {
                restedEffect: OB,
                fJ: pB,
                setChosenRestedEffect: VB,
                children: [(0, WB.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, WB.jsx)(MB.b, {
                    text: [{
                      icon: OB
                    }]
                  }), jB.e[OB].shortName]
                }), (0, WB.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: BB(jB.e[OB].description, {
                    time: jB.e[OB].effectLevelDurations[nB] / 6e4
                  })
                })]
              }, OB)))
            }), (0, WB.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, WB.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, WB.jsxs)(PB.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: BB => {
                  dB ? LB() : (kB(!0), (0, ZB.V)((() => {
                    kB(!1), KB(!0)
                  }), !0)), BB.stopPropagation()
                },
                loading: fB,
                children: [!dB && (0, WB.jsxs)(WB.Fragment, {
                  children: [(0, WB.jsx)(NB.b, {
                    name: "film"
                  }), " ", BB("classicGame:watchAdToGetRestedPerk")]
                }), dB && BB("classicGame:wakeUp")]
              }), (0, WB.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, WB.jsx)("div", {
                  className: qB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === nB
                  }),
                  children: (0, WB.jsx)(MB.b, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, WB.jsx)("div", {
                  className: qB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === nB
                  }),
                  children: (0, WB.jsx)(MB.b, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, WB.jsx)("div", {
                  className: qB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === nB
                  }),
                  children: (0, WB.jsx)(MB.b, {
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
    const SB = (0, QB.memo)((function(BB) {
      let {
        children: OB,
        restedEffect: GB,
        fJ: YB,
        setChosenRestedEffect: DB
      } = BB;
      return GB === YB ? (0, WB.jsx)(PB.q, {
        onClick: BB => {
          BB.stopPropagation()
        },
        children: OB
      }) : (0, WB.jsx)(PB.j, {
        onClick: BB => {
          DB(GB), BB.stopPropagation()
        },
        children: OB
      })
    }))
  },
  41562: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => vB
    });
    var YB = GB(16),
      DB = GB(25),
      QB = GB(4678),
      oB = GB(331),
      jB = GB(1699),
      yB = GB(8890),
      JB = GB(4696),
      MB = GB(9376),
      PB = GB(8915),
      zB = GB(8902),
      lB = GB(8919),
      pB = GB(1434),
      qB = GB(1739),
      ZB = GB(8924),
      NB = GB(9328),
      RB = GB(9472),
      WB = GB(9384),
      AB = GB(9478),
      VB = GB(2023),
      SB = GB(8878),
      nB = GB(9410),
      UB = GB(9402),
      fB = GB(9381);
    class kB {
      constructor() {
        this.lostAtMs = null
      }
      update(BB, OB) {
        return BB ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= OB, OB - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class dB {
      constructor(BB, OB) {
        this.press = BB, this.release = OB, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(BB, OB, GB, YB) {
        if (BB && null === this.downAtMs) return this.downAtMs = GB, this.latched = YB, void(this.token = this.press(YB));
        null !== this.downAtMs && (this.latched ? BB && this.end() : !OB && GB - this.downAtMs >= 40 && this.end())
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
        const BB = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(BB)
      }
    }
    const KB = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      uB = BB => {
        let OB = null;
        const GB = new fB.c,
          YB = () => {
            OB && (((BB, OB, GB) => {
              switch (GB.kind) {
                case "reload":
                  return void OB.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void OB.specialActionUp(GB.action);
                case "customButton":
                  return void VB.gameBridge.send("pressCustomButton", {
                    id: GB.id,
                    down: !1
                  });
                case "touchButton":
                  BB.pressTouchButton(!1)
              }
            })(BB, OB.bodies, OB.action), OB = null)
          },
          QB = (GB, DB, QB, oB) => {
            YB(), OB = {
              action: DB,
              bodies: GB,
              heldBy: QB,
              atMs: oB
            }, ((BB, OB, GB) => {
              switch (GB.kind) {
                case "reload":
                  return OB.reloadGun(), void OB.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void OB.specialActionDown(GB.action);
                case "customButton":
                  return void VB.gameBridge.send("pressCustomButton", {
                    id: GB.id,
                    down: !0
                  });
                case "touchButton":
                  BB.pressTouchButton(!0)
              }
            })(BB, GB, DB)
          };
        return {
          update: (oB, jB, JB, MB) => {
            var zB;
            const lB = (0, nB.m)(BB.contextActionInputs()),
              pB = null !== (zB = lB[0]) && void 0 !== zB ? zB : KB;
            (0, UB.e)((0, nB.e)(pB) ? pB : null);
            const qB = (0, nB.d)(lB);
            (0, UB.h)(qB);
            const ZB = (0, yB.h)("actionButton");
            if (qB) {
              const BB = GB.update(jB.wasPressed(ZB), jB.isHeld(ZB), JB, MB);
              "tap" === BB ? QB(oB, pB, [ZB], JB) : "hold" === BB && (PB.c.consumeButton(ZB), DB.o.tM(AB.m, lB))
            } else GB.release(), jB.wasPressed(ZB) && QB(oB, pB, [ZB], JB);
            OB && JB - OB.atMs >= 40 && !OB.heldBy.some((BB => (0, SB.P)(jB.frame.values, BB))) && YB()
          },
          pressPicked: (BB, OB) => {
            QB(BB, OB, [(0, yB.h)("menuConfirm"), (0, yB.h)("actionButton")], performance.now())
          },
          release: () => {
            GB.release(), YB(), (0, UB.e)(null), (0, UB.h)(!1)
          }
        }
      };
    var mB = GB(8870);
    var IB = GB(41557),
      FB = GB(9418),
      iB = GB(8913),
      LB = GB(9513);
    var gB = GB(41555),
      rB = GB(9518),
      XB = GB(41570),
      wB = GB(9490),
      EB = GB(9421),
      cB = GB(9424),
      hB = GB(9433),
      aB = GB(9337),
      eB = GB(9394);
    const TB = () => aB.d[(0, zB.k)().tapHoldTime].wheelMs,
      bB = () => ((0, MB.d)(), (0, eB.b)("controllerMenuKey")),
      CB = (BB, OB, GB) => new dB((GB => {
        const YB = BB.bodies();
        return {
          bodies: YB,
          press: OB(YB, GB)
        }
      }), (BB => {
        let {
          bodies: OB,
          press: YB
        } = BB;
        GB(OB, YB)
      })),
      HB = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      vB = BB => {
        const OB = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let GB = HB;
        const MB = new XB.c,
          VB = DB.o.subscribe("appManagerUpdated|activeInputDevice", (OB => {
            BB.deviceChanged(OB)
          }));
        let nB = null,
          UB = 0;
        const dB = () => {
          nB = null, (0, EB.f)(null)
        };
        let KB = !1;
        const eB = new kB,
          vB = BB.look,
          sB = new fB.c,
          xB = new fB.c,
          tB = uB(BB),
          BO = DB.o.subscribe(AB.p, (OB => {
            tB.pressPicked(BB.bodies(), OB)
          })),
          OO = CB(BB, ((BB, OB) => BB.primaryFireDown(!OB)), ((BB, OB) => {
            BB.primaryFireUp(OB)
          })),
          GO = CB(BB, (BB => BB.altFireDown()), ((BB, OB) => {
            BB.altFireUp(OB)
          }));
        let YO = !1,
          DO = -1 / 0,
          QO = !1,
          oO = !1;
        const jO = (0, NB.d)(SB.eb),
          yO = (0, NB.d)(SB.eb),
          JO = new fB.c;
        let MO = !1;
        const PO = () => {
            jO.reset(), yO.reset(), JO.release(), (0, hB.e)(!1), vB.release(), OO.cancel(), (0, cB.f)(!1), GO.cancel(), tB.release(), sB.release(), xB.release(), dB()
          },
          zO = function() {
            let YB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            PO(), QO = !1, YB || (YO = !1, GB = HB, Object.assign(OB, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), BB.stopMoving())
          };
        let lO = !1;
        const pO = function(YB, QB, oB) {
            let jB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, pB.i)()) return void(lO || (lO = !0, YO = !1, BB.stopMoving()));
            lO = !1;
            const JB = (0, zB.k)(),
              PB = (0, gB.f)(QB, JB.moveDeadzone),
              lB = (0, yB.h)("sprint");
            GB = (0, gB.r)(GB, {
              sprintPressed: YB.wasPressed(lB),
              magnitude: PB.magnitude,
              autoSprint: JB.autoSprint,
              nowMs: oB
            }), OB.running = GB.running, OB.sprintHeld = YB.isHeld(lB), OB.x = PB.x, OB.y = PB.y, OB.magnitude = PB.speed, OB.headingOffset = PB.headingOffset, PB.magnitude > 0 && (!YO || oB - DO >= 1e3) && (DO = oB, DB.o.tM("stickMoved")), YO = PB.magnitude > 0;
            const qB = (0, yB.h)("jump");
            if (OB.jumpHeld = YB.isHeld(qB), OB.jumpPressed = YB.wasPressed(qB), OB.jumpPressed && BB.bodies().jumpDown(), jB) return void BB.move(OB, null);
            const ZB = (0, yB.h)("sneak"),
              NB = MB.filter({
                sneakHeld: YB.isHeld(ZB),
                sneakPressed: YB.wasPressed(ZB),
                sneakTogglePressed: YB.wasPressed((0, yB.h)("sneakToggle"))
              }, oB);
            BB.move(OB, {
              ...NB,
              mode: JB.sneakMode
            })
          },
          qO = (BB, OB) => {
            const GB = (0, yB.h)("chat");
            if ("off" === (0, zB.k)().quickChat) return void(BB.wasPressed(GB) && (PB.c.consumeButton(GB), DB.o.tM(FB.e)));
            const YB = sB.update(BB.wasPressed(GB), BB.isHeld(GB), OB, TB());
            "tap" === YB || "hold" === YB && null === (0, qB.b)() ? DB.o.tM(FB.e) : "hold" === YB && (PB.c.consumeButton(GB), DB.o.tM(WB.r))
          },
          ZO = (OB, GB) => {
            ((BB, OB) => {
              const GB = (0, RB.e)(),
                YB = (0, yB.h)("emoteWheel");
              if ("wheel" === (0, zB.k)().emoteButton) return BB.wasPressed(YB) && (PB.c.consumeButton(YB), DB.o.tM("requestEmoteWheelPadOpen", !0)), (0, RB.e)() !== GB;
              const QB = xB.update(BB.wasPressed(YB), BB.isHeld(YB), OB, TB());
              return "tap" === QB ? DB.o.tM("requestEmoteRepeatLast") : "hold" === QB && (PB.c.consumeButton(YB), DB.o.tM("requestEmoteWheelPadOpen", !1)), (0, RB.e)() !== GB
            })(OB, GB) || qO(OB, GB), OB.wasPressed((0, yB.h)("inventory")) && (PB.c.consumeButton((0, yB.h)("inventory")), (0, jB.D)(bB(), "inventory", BB.hasFullInventory())), OB.wasPressed((0, yB.h)("pause")) && (PB.c.consumeButton((0, yB.h)("pause")), (0, JB.b)() === oB.p.SOCIAL ? (0, jB.A)(bB(), oB.p.SOCIAL) : (0, jB.i)(bB())), OB.wasPressed((0, yB.h)("leaderboard")) && !(0, QB.i)() && (PB.c.consumeButton((0, yB.h)("leaderboard")), ((BB, OB) => {
              if ("shop" === (0, iB.c)()) return DB.o.tM(LB.k), void(0, jB.A)(BB, oB.p.SHOP, !0);
              (0, jB.A)(BB, oB.p.LOBBY_LEADERBOARD, OB)
            })(bB(), BB.hasLobbyTab()))
          },
          NO = (OB, GB) => {
            const YB = BB.bodies();
            ((OB, GB) => {
              const YB = (0, yB.h)("attack"),
                DB = OB.wasPressed(YB);
              DB && !OO.isLatched() && (KB = BB.targetsBlock()), OO.update(DB, OB.isHeld(YB), GB, "toggle" === (0, zB.k)().attackMode), OO.isLatched() && KB ? eB.update(BB.targetsBlock(), GB) && OO.unlatch() : eB.reset(), (0, cB.f)(OO.isLatched())
            })(OB, GB), GO.update(OB.wasPressed((0, yB.h)("use")), OB.isHeld((0, yB.h)("use")), GB, !1), jO.update(OB.isHeld((0, yB.h)("hotbarPrevious")), GB) && BB.scrollHotbar(-1), yO.update(OB.isHeld((0, yB.h)("hotbarNext")), GB) && BB.scrollHotbar(1), ((OB, GB, YB) => {
              const DB = (0, yB.h)("perspective"),
                QB = (0, yB.h)("pickBlock"),
                oB = BB.pickBlockAllowed();
              (0, hB.e)(oB && !MO && BB.targetsBlock());
              const jB = () => {
                GB.pickBlock() && (MO = !0, (0, hB.e)(!1))
              };
              if (!oB || QB !== DB) return JO.release(), OB.wasPressed(DB) && GB.swapCameraZoom(), void(oB && OB.wasPressed(QB) && jB());
              const JB = JO.update(OB.wasPressed(QB), OB.isHeld(QB), YB, TB());
              "tap" === JB ? jB() : "hold" === JB && GB.swapCameraZoom()
            })(OB, YB, GB), ((OB, GB, YB) => {
              const DB = (0, yB.h)("drop");
              if (OB.wasPressed(DB)) {
                GB.dropItem(!1);
                const BB = (0, zB.k)();
                "off" !== BB.buttonRepeat && (nB = YB, UB = aB.d[BB.tapHoldTime].dropStackMs, (0, EB.f)(UB))
              }
              null !== nB && (!OB.isHeld(DB) || BB.selectedSlotEmpty() ? dB() : YB - nB >= UB && (dB(), GB.dropItem(!0)))
            })(OB, YB, GB), tB.update(YB, OB, GB, TB()), ZO(OB, GB)
          },
          RO = PB.c.register({
            name: "gameplay",
            isActive: () => {
              const OB = YO && "keyboardMouse" === YB.c.get("activeInputDevice") && !(0, lB.K)(),
                GB = (0, lB.k)() ? [IB.d] : [];
              return ((0, lB.k)() || OB) && (0, ZB.i)(GB) && BB.hasPlayer()
            },
            onFrame: BB => {
              const OB = performance.now(),
                GB = (0, zB.k)(),
                YB = (0, gB.s)(BB, (0, gB.l)(GB, (0, yB.h)("pause"), (0, rB.b)().isSupported())),
                DB = (0, gB.h)(YB, GB.swapSticks);
              return (0, lB.k)() ? (QO = !1, (0, ZB.i)() ? (oO = !1, vB.update(DB.look, GB, YB.isHeld((0, yB.h)("use"))), pO(YB, DB.move, OB), void NO(YB, OB)) : (oO || (oO = !0, MB.lostToPadScreen(), zO()), void qO(YB, OB))) : (QO || (PO(), QO = !0), void pO(YB, DB.move, OB))
            },
            onDeactivate: BB => {
              (0, lB.k)() && MB.lostToPadScreen(), zO(BB)
            },
            onPeekFrame: OB => {
              (0, lB.k)() && (0, ZB.i)(IB.k) && BB.hasPlayer() ? pO(OB, (0, gB.h)(OB, (0, zB.k)().swapSticks).move, performance.now(), !0) : zO()
            }
          }),
          WO = (0, IB.g)(BB),
          AO = (() => {
            const BB = DB.o.subscribe(mB.c, (BB => {
              !BB && (0, lB.k)() && "inGame" === YB.c.get("gameState") && DB.o.tM("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              DB.o.unsubscribe(BB)
            }
          })();
        return () => {
          zO(), BB.uninstall(), (0, wB.h)(!1), (0, hB.e)(!1), DB.o.unsubscribe(VB), DB.o.unsubscribe(BO), RO(), WO(), AO(), vB.uninstall()
        }
      }
  },
  41557: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => pB,
      g: () => ZB,
      k: () => lB
    });
    var YB = GB(1293),
      DB = GB(4678),
      QB = GB(9457),
      oB = GB(37619),
      jB = GB(1790),
      yB = GB(1173),
      JB = GB(8924),
      MB = GB(9384),
      PB = GB(9478);
    const zB = {
        emoteWheel: QB.f,
        quickChatWheel: MB.e,
        actionWheel: PB.q
      },
      lB = Object.keys(zB),
      pB = "dead",
      qB = BB => (0, YB.n)().includes(BB),
      ZB = BB => {
        const OB = [(0, JB.m)(pB, (() => BB.hasPlayer() && BB.isPlayerDead())), (0, JB.m)("sleeping", (() => qB(oB.f))), (0, JB.m)("turnstile", (() => qB(yB.f))), (0, JB.m)("videoAd", jB.g), (0, JB.m)("replay", (() => (0, DB.i)() || BB.isReplayMode())), (0, JB.m)("freeCamera", (() => BB.isFreeCameraOn())), ...Object.entries(zB).map((BB => {
          let [OB, GB] = BB;
          return (0, JB.m)(OB, GB)
        }))];
        return () => {
          for (const BB of OB) BB()
        }
      }
  },
  41555: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB,
      f: () => yB,
      h: () => jB,
      l: () => MB,
      n: () => oB,
      q: () => QB,
      r: () => JB,
      s: () => PB
    });
    var YB = GB(8878);
    class DB {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(BB, OB, GB) {
        const DB = (0, YB.n)(BB, OB.lookDeadzone);
        if (Math.hypot(DB.x, DB.y) < .9 || Math.abs(DB.x) < Math.abs(DB.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = GB);
        const QB = (oB = OB.lookSensitivityX, Math.min(1, 100 / oB));
        var oB;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (GB - this.fullTiltSinceMs - 250 * QB) / (200 * QB)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const QB = (BB, OB, GB, DB, QB) => {
        let oB = 1;
        return "boost" === GB.lookCurve ? oB = BB.update(OB, GB, QB) : BB.reset(),
          function(BB, OB) {
            let {
              yawBoost: GB = 1,
              aiming: DB = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const QB = (0, YB.m)((0, YB.n)(BB, OB.lookDeadzone), OB.lookCurve),
              oB = 220 * Math.PI / 180,
              jB = DB ? OB.aimLookSensitivity / 100 : 1,
              yB = OB.lookSensitivityX / 100 * jB,
              JB = OB.lookSensitivityY / 100 * jB;
            return {
              yawRadPerSec: QB.x * oB * yB * GB * (OB.invertLookX ? -1 : 1),
              pitchRadPerSec: QB.y * oB * .7 * JB * (OB.invertLookY ? -1 : 1)
            }
          }(OB, GB, {
            yawBoost: oB,
            aiming: DB
          })
      },
      oB = (BB, OB) => {
        const GB = Math.max(0, Math.min(250, OB)) / 1e3;
        return {
          Rm: BB.yawRadPerSec * GB,
          Wm: BB.pitchRadPerSec * GB
        }
      },
      jB = (BB, OB) => OB ? {
        move: BB.rightStick,
        look: BB.leftStick
      } : {
        move: BB.leftStick,
        look: BB.rightStick
      },
      yB = (BB, OB) => {
        const GB = (0, YB.n)(BB, OB),
          DB = Math.min(1, Math.hypot(GB.x, GB.y));
        return {
          magnitude: DB,
          speed: Math.min(1, DB / .8),
          headingOffset: 0 === DB ? 0 : Math.atan2(GB.x, -GB.y),
          x: GB.x,
          y: GB.y
        }
      },
      JB = (BB, OB) => {
        let {
          sprintPressed: GB,
          magnitude: YB,
          autoSprint: DB,
          nowMs: QB
        } = OB;
        const oB = GB ? QB : BB.latchedAtMs,
          jB = (BB => {
            let {
              running: OB,
              magnitude: GB,
              sprintPressed: YB,
              autoSprint: DB
            } = BB;
            return !(GB < .5) && (!!YB || !!(DB && GB >= .9) || OB)
          })({
            running: BB.running,
            magnitude: YB,
            sprintPressed: QB - oB <= 1e3,
            autoSprint: DB
          });
        return {
          running: jB,
          latchedAtMs: jB ? -1 / 0 : oB
        }
      },
      MB = (BB, OB, GB) => GB && BB.gyroAiming && "button" === BB.gyroActivation && BB.gyroButton !== OB ? BB.gyroButton : null,
      PB = (BB, OB) => OB ? {
        ...BB,
        isHeld: GB => GB !== OB && BB.isHeld(GB),
        wasPressed: GB => GB !== OB && BB.wasPressed(GB),
        wasReleased: GB => GB !== OB && BB.wasReleased(GB),
        value: GB => GB === OB ? 0 : BB.value(GB)
      } : BB
  },
  41570: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      g: () => YB
    });
    const YB = BB => {
      let {
        mode: OB,
        sneakHeld: GB,
        sneakPressed: YB,
        sneakTogglePressed: DB,
        descending: QB,
        canCrouch: oB,
        toggled: jB
      } = BB;
      return oB ? QB ? {
        crouchHeld: GB,
        toggled: !1
      } : "hold" === OB ? {
        crouchHeld: GB,
        toggled: DB ? !jB : jB
      } : {
        crouchHeld: !1,
        toggled: YB || DB ? !jB : jB
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class DB {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(BB, OB) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = OB, this.graceEndsMs = OB + 500);
        const GB = OB < this.graceEndsMs;
        return GB && (BB.sneakPressed || BB.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, OB + 300))), BB.sneakHeld ? GB && BB.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: BB.sneakHeld && !this.ignoringHeld,
          sneakPressed: BB.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: BB.sneakTogglePressed && !GB
        }
      }
    }
  },
  41548: (BB, OB, GB) => {
    GB(9518)
  },
  41553: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => WB
    });
    var YB = GB(25),
      DB = GB(9457),
      QB = GB(9469),
      oB = GB(8890),
      jB = GB(8915),
      yB = GB(8902),
      JB = GB(41555),
      MB = GB(41557),
      PB = GB(8924),
      zB = GB(8878),
      lB = GB(9384),
      pB = GB(9478);
    const qB = [{
        isOpen: DB.h,
        openButton: () => (0, oB.h)("emoteWheel"),
        aim: BB => {
          YB.o.tM("emoteWheelPadAim", BB)
        },
        commit: BB => {
          YB.o.tM("requestEmoteWheelPadCommit", BB)
        },
        close: () => {
          YB.o.tM("requestEmoteWheelClose")
        }
      }, {
        isOpen: lB.e,
        openButton: () => (0, oB.h)("chat"),
        aim: BB => {
          YB.o.tM(lB.i, BB)
        },
        commit: BB => {
          YB.o.tM(lB.n, BB)
        },
        close: () => {
          YB.o.tM(lB.k)
        },
        keptOpenBy: [MB.d]
      }, {
        isOpen: pB.q,
        openButton: () => (0, oB.h)("actionButton"),
        aim: BB => {
          YB.o.tM(pB.b, BB)
        },
        commit: BB => {
          YB.o.tM(pB.i, BB)
        },
        close: () => {
          YB.o.tM(pB.f)
        }
      }],
      ZB = () => {
        var BB;
        return null !== (BB = qB.find((BB => BB.isOpen()))) && void 0 !== BB ? BB : null
      },
      NB = BB => (0, oB.O)(BB.openButton()),
      RB = (BB, OB) => !(0, zB.P)(BB.frame.values, OB),
      WB = () => {
        let BB = null,
          OB = !1,
          GB = !1;
        return jB.c.register({
          name: "wheel",
          isActive: () => null !== ZB(),
          peek: () => {
            const BB = ZB();
            return BB && NB(BB) ? null : {
              over: "gameplay",
              stick: (0, yB.k)().swapSticks ? "right" : "left"
            }
          },
          onFrame: YB => {
            var DB;
            const zB = ZB();
            if (!zB) return;
            if (null !== (0, PB.e)([...MB.k, ...null !== (DB = zB.keptOpenBy) && void 0 !== DB ? DB : []])) return void zB.close();
            const lB = zB.openButton(),
              pB = (0, JB.h)(YB.frame, (0, yB.k)().swapSticks),
              qB = NB(zB) ? pB.move : pB.look;
            BB !== zB ? (BB = zB, OB = !RB(YB, lB) || Math.hypot(qB.x, qB.y) >= QB.B, GB = !1) : GB && (GB = !1, RB(YB, lB) && (OB = !1)), zB.aim(qB);
            const WB = (0, oB.h)("menuConfirm"),
              AB = (0, oB.h)("menuBack");
            return YB.wasPressed(AB) ? (jB.c.consumeButton(AB), void zB.close()) : YB.wasPressed(WB) || YB.wasPressed(lB) ? (jB.c.consumeButton(WB), jB.c.consumeButton(lB), void zB.commit(!1)) : void(OB && RB(YB, lB) && (OB = !1, zB.commit(!0)))
          },
          onDeactivate: () => {
            GB = null !== BB && ZB() === BB, GB || (BB = null, OB = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
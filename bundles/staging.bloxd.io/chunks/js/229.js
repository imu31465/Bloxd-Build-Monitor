export const id = 229;
export const ids = [229];
export const modules = {
  36953: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => CB,
      d: () => dB
    });
    var TB = ZB(4433),
      JB = ZB(1507),
      oB = ZB(63),
      GB = ZB(6635),
      vB = ZB(4419),
      kB = ZB(1353),
      cB = ZB(1995),
      nB = ZB(1960),
      hB = ZB(1516),
      zB = ZB(1248),
      FB = ZB(36958),
      NB = ZB(1091),
      gB = ZB.n(NB),
      qB = ZB(1370),
      yB = ZB(1102),
      UB = ZB(1343),
      WB = ZB(1153);
    const dB = "SleepingOverlay";

    function CB() {
      const {
        t: BB
      } = (0, zB.G)(), [IB, ZB] = (0, oB.useState)(!1), [NB, CB] = (0, oB.useState)(null), [sB, wB] = (0, oB.useState)(1), [OB, YB] = (0, oB.useState)(!1), [iB, pB] = (0, oB.useState)(!1), aB = (0, oB.useRef)(0), HB = (0, oB.useRef)(!1), MB = (0, oB.useRef)(!1), jB = (0, oB.useRef)(), PB = (0, oB.useRef)(null);

      function RB() {
        const BB = null !== NB && void 0 !== NB ? NB : "Rested Speed";
        cB.gameBridge.send("wakeUp", iB ? BB : null), PB.current = null, ZB(!1), CB(null), wB(1), YB(!1), pB(!1)
      }

      function rB() {
        return !OB && (RB(), !0)
      }
      return (0, JB.d)("PlayerPhysicsTypeUpdate", (BB => {
        BB !== PB.current && (PB.current = BB, BB === GB.o.SLEEPING ? (MB.current || (aB.current = cB.gameBridge.lookup("cameraZoom", null), MB.current = !0), HB.current = !0, cB.gameBridge.send("setCameraZoom", 3), ZB(!0), wB(function() {
          for (const BB of cB.gameBridge.lookup("blocksStandingOn", null)) {
            if (FB.c.leafBeds.includes(BB)) return console.log(`Found leaf bed: ${BB}`), 1;
            if (FB.c.woolBeds.includes(BB)) return console.log(`Found woold bed: ${BB}`), 2;
            if (FB.c.strongBeds.includes(BB)) return console.log(`Found strong bed ${BB}`), 3
          }
          return 1
        }())) : (MB.current = !1, ZB(!1), CB(null), wB(1)))
      })), (0, oB.useEffect)((() => () => {
        (0, kB.p)(dB)
      }), []), (0, oB.useEffect)((() => {
        IB ? (0, kB.t)(dB) : ((0, kB.p)(dB), HB.current && (cB.gameBridge.send("setCameraZoom", aB.current), HB.current = !1))
      }), [IB]), (0, UB.t)("overlay", jB, rB, IB), (0, WB.jsx)(TB.d, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: IB,
        timeout: 300,
        nodeRef: jB,
        unmountOnExit: !0,
        children: (0, WB.jsx)("div", {
          ref: jB,
          onClick: BB => {
            rB() && BB.stopPropagation()
          },
          children: (0, WB.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, WB.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: vB.i.map((IB => (0, WB.jsxs)(QB, {
                restedEffect: IB,
                sk: NB,
                setChosenRestedEffect: CB,
                children: [(0, WB.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, WB.jsx)(nB.e, {
                    text: [{
                      icon: IB
                    }]
                  }), vB.f[IB].shortName]
                }), (0, WB.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: BB(vB.f[IB].description, {
                    time: vB.f[IB].effectLevelDurations[sB] / 6e4
                  })
                })]
              }, IB)))
            }), (0, WB.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, WB.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, WB.jsxs)(hB.g, {
                className: "SleepingOverlayWakeUpButton",
                onClick: BB => {
                  iB ? RB() : (YB(!0), (0, qB._)((() => {
                    YB(!1), pB(!0)
                  }), !0)), BB.stopPropagation()
                },
                loading: OB,
                children: [!iB && (0, WB.jsxs)(WB.Fragment, {
                  children: [(0, WB.jsx)(yB.d, {
                    name: "film"
                  }), " ", BB("classicGame:watchAdToGetRestedPerk")]
                }), iB && BB("classicGame:wakeUp")]
              }), (0, WB.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, WB.jsx)("div", {
                  className: gB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === sB
                  }),
                  children: (0, WB.jsx)(nB.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, WB.jsx)("div", {
                  className: gB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === sB
                  }),
                  children: (0, WB.jsx)(nB.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, WB.jsx)("div", {
                  className: gB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === sB
                  }),
                  children: (0, WB.jsx)(nB.e, {
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
    const QB = (0, oB.memo)((function(BB) {
      let {
        children: IB,
        restedEffect: ZB,
        sk: TB,
        setChosenRestedEffect: JB
      } = BB;
      return ZB === TB ? (0, WB.jsx)(hB.p, {
        onClick: BB => {
          BB.stopPropagation()
        },
        children: IB
      }) : (0, WB.jsx)(hB.k, {
        onClick: BB => {
          JB(ZB), BB.stopPropagation()
        },
        children: IB
      })
    }))
  },
  40619: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => DB
    });
    var TB = ZB(20),
      JB = ZB(24),
      oB = ZB(4459),
      GB = ZB(342),
      vB = ZB(1711),
      kB = ZB(8291),
      cB = ZB(4469),
      nB = ZB(8824),
      hB = ZB(8325),
      zB = ZB(8303),
      FB = ZB(8334),
      NB = ZB(1454),
      gB = ZB(1752),
      qB = ZB(8341),
      yB = ZB(8766),
      UB = ZB(8917),
      WB = ZB(8835),
      dB = ZB(8920),
      CB = ZB(1995),
      QB = ZB(8282),
      sB = ZB(8859),
      wB = ZB(8857),
      OB = ZB(8827);
    class YB {
      constructor() {
        this.lostAtMs = null
      }
      update(BB, IB) {
        return BB ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= IB, IB - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class iB {
      constructor(BB, IB) {
        this.press = BB, this.release = IB, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(BB, IB, ZB, TB) {
        if (BB && null === this.downAtMs) return this.downAtMs = ZB, this.latched = TB, void(this.token = this.press(TB));
        null !== this.downAtMs && (this.latched ? BB && this.end() : !IB && ZB - this.downAtMs >= 40 && this.end())
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
    const pB = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      aB = BB => {
        let IB = null;
        const ZB = new OB.e,
          TB = () => {
            IB && (((BB, IB, ZB) => {
              switch (ZB.kind) {
                case "reload":
                  return void IB.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void IB.specialActionUp(ZB.action);
                case "customButton":
                  return void CB.gameBridge.send("pressCustomButton", {
                    id: ZB.id,
                    down: !1
                  });
                case "touchButton":
                  BB.pressTouchButton(!1)
              }
            })(BB, IB.bodies, IB.action), IB = null)
          },
          oB = (ZB, JB, oB, GB) => {
            TB(), IB = {
              action: JB,
              bodies: ZB,
              heldBy: oB,
              atMs: GB
            }, ((BB, IB, ZB) => {
              switch (ZB.kind) {
                case "reload":
                  return IB.reloadGun(), void IB.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void IB.specialActionDown(ZB.action);
                case "customButton":
                  return void CB.gameBridge.send("pressCustomButton", {
                    id: ZB.id,
                    down: !0
                  });
                case "touchButton":
                  BB.pressTouchButton(!0)
              }
            })(BB, ZB, JB)
          };
        return {
          update: (GB, vB, cB, nB) => {
            var zB;
            const FB = (0, sB.g)(BB.contextActionInputs()),
              NB = null !== (zB = FB[0]) && void 0 !== zB ? zB : pB;
            (0, wB.d)((0, sB.c)(NB) ? NB : null);
            const gB = (0, sB.b)(FB);
            (0, wB.h)(gB);
            const qB = (0, kB.g)("actionButton");
            if (gB) {
              const BB = ZB.update(vB.wasPressed(qB), vB.isHeld(qB), cB, nB);
              "tap" === BB ? oB(GB, NB, [qB], cB) : "hold" === BB && (hB.c.consumeButton(qB), JB.l.Gq(dB.i, FB))
            } else ZB.release(), vB.wasPressed(qB) && oB(GB, NB, [qB], cB);
            IB && cB - IB.atMs >= 40 && !IB.heldBy.some((BB => (0, QB.J)(vB.frame.values, BB))) && TB()
          },
          pressPicked: (BB, IB) => {
            oB(BB, IB, [(0, kB.g)("menuConfirm"), (0, kB.g)("actionButton")], performance.now())
          },
          release: () => {
            ZB.release(), TB(), (0, wB.d)(null), (0, wB.h)(!1)
          }
        }
      };
    var HB = ZB(8277);
    var MB = ZB(40613),
      jB = ZB(8871),
      PB = ZB(8316),
      RB = ZB(8951);
    var rB = ZB(40606),
      mB = ZB(8956),
      XB = ZB(40627),
      LB = ZB(8937),
      eB = ZB(8877),
      uB = ZB(8881),
      fB = ZB(8883),
      lB = ZB(8771),
      AB = ZB(8843);
    const tB = () => lB.c[(0, zB.i)().tapHoldTime].wheelMs,
      bB = () => ((0, nB.c)(), (0, AB.e)("controllerMenuKey")),
      xB = (BB, IB, ZB) => new iB((ZB => {
        const TB = BB.bodies();
        return {
          bodies: TB,
          press: IB(TB, ZB)
        }
      }), (BB => {
        let {
          bodies: IB,
          press: TB
        } = BB;
        ZB(IB, TB)
      })),
      EB = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      DB = BB => {
        const IB = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let ZB = EB;
        const nB = new XB.e,
          CB = JB.l.subscribe("appManagerUpdated|activeInputDevice", (IB => {
            BB.deviceChanged(IB)
          }));
        let sB = null,
          wB = 0;
        const iB = () => {
          sB = null, (0, eB.e)(null)
        };
        let pB = !1;
        const AB = new YB,
          DB = BB.look,
          KB = new OB.e,
          VB = new OB.e,
          SB = aB(BB),
          BI = JB.l.subscribe(dB.l, (IB => {
            SB.pressPicked(BB.bodies(), IB)
          })),
          II = xB(BB, ((BB, IB) => BB.primaryFireDown(!IB)), ((BB, IB) => {
            BB.primaryFireUp(IB)
          })),
          ZI = xB(BB, (BB => BB.altFireDown()), ((BB, IB) => {
            BB.altFireUp(IB)
          }));
        let TI = !1,
          JI = !1,
          oI = !1;
        const GI = (0, yB.d)(QB.Y),
          vI = (0, yB.d)(QB.Y),
          kI = new OB.e;
        let cI = !1;
        const nI = () => {
            GI.reset(), vI.reset(), kI.release(), (0, fB.h)(!1), DB.release(), II.cancel(), (0, uB.c)(!1), ZI.cancel(), SB.release(), KB.release(), VB.release(), iB()
          },
          hI = function() {
            let TB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            nI(), JI = !1, TB || (TI = !1, ZB = EB, Object.assign(IB, {
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
        let zI = !1;
        const FI = function(TB, JB, oB) {
            let GB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, NB.h)()) return void(zI || (zI = !0, TI = !1, BB.stopMoving()));
            zI = !1;
            const vB = (0, zB.i)(),
              cB = (0, rB.e)(JB, vB.moveDeadzone),
              hB = (0, kB.g)("sprint");
            ZB = (0, rB.p)(ZB, {
              sprintPressed: TB.wasPressed(hB),
              magnitude: cB.magnitude,
              autoSprint: vB.autoSprint,
              nowMs: oB
            }), IB.running = ZB.running, IB.sprintHeld = TB.isHeld(hB), IB.x = cB.x, IB.y = cB.y, IB.magnitude = cB.speed, IB.headingOffset = cB.headingOffset, TI = cB.magnitude > 0;
            const FB = (0, kB.g)("jump");
            if (IB.jumpHeld = TB.isHeld(FB), IB.jumpPressed = TB.wasPressed(FB), IB.jumpPressed && BB.bodies().jumpDown(), GB) return void BB.move(IB, null);
            const gB = (0, kB.g)("sneak"),
              qB = nB.filter({
                sneakHeld: TB.isHeld(gB),
                sneakPressed: TB.wasPressed(gB),
                sneakTogglePressed: TB.wasPressed((0, kB.g)("sneakToggle"))
              }, oB);
            BB.move(IB, {
              ...qB,
              mode: vB.sneakMode
            })
          },
          NI = (BB, IB) => {
            const ZB = (0, kB.g)("chat");
            if ("off" === (0, zB.i)().quickChat) return void(BB.wasPressed(ZB) && (hB.c.consumeButton(ZB), JB.l.Gq(jB.e)));
            const TB = KB.update(BB.wasPressed(ZB), BB.isHeld(ZB), IB, tB());
            "tap" === TB || "hold" === TB && null === (0, gB.d)() ? JB.l.Gq(jB.e) : "hold" === TB && (hB.c.consumeButton(ZB), JB.l.Gq(WB.l))
          },
          gI = (IB, ZB) => {
            ((BB, IB) => {
              const ZB = (0, UB.d)(),
                TB = (0, kB.g)("emoteWheel");
              if ("wheel" === (0, zB.i)().emoteButton) return BB.wasPressed(TB) && (hB.c.consumeButton(TB), JB.l.Gq("requestEmoteWheelPadOpen", !0)), (0, UB.d)() !== ZB;
              const oB = VB.update(BB.wasPressed(TB), BB.isHeld(TB), IB, tB());
              return "tap" === oB ? JB.l.Gq("requestEmoteRepeatLast") : "hold" === oB && (hB.c.consumeButton(TB), JB.l.Gq("requestEmoteWheelPadOpen", !1)), (0, UB.d)() !== ZB
            })(IB, ZB) || NI(IB, ZB), IB.wasPressed((0, kB.g)("inventory")) && (hB.c.consumeButton((0, kB.g)("inventory")), (0, vB.A)(bB(), "inventory", BB.hasFullInventory())), IB.wasPressed((0, kB.g)("pause")) && (hB.c.consumeButton((0, kB.g)("pause")), (0, cB.d)() === GB.q.SOCIAL ? (0, vB.x)(bB(), GB.q.SOCIAL) : (0, vB.f)(bB())), IB.wasPressed((0, kB.g)("leaderboard")) && !(0, oB.f)() && (hB.c.consumeButton((0, kB.g)("leaderboard")), ((BB, IB) => {
              if ("shop" === (0, PB.b)()) return JB.l.Gq(RB.k), void(0, vB.x)(BB, GB.q.SHOP, !0);
              (0, vB.x)(BB, GB.q.LOBBY_LEADERBOARD, IB)
            })(bB(), BB.hasLobbyTab()))
          },
          qI = (IB, ZB) => {
            const TB = BB.bodies();
            ((IB, ZB) => {
              const TB = (0, kB.g)("attack"),
                JB = IB.wasPressed(TB);
              JB && !II.isLatched() && (pB = BB.targetsBlock()), II.update(JB, IB.isHeld(TB), ZB, "toggle" === (0, zB.i)().attackMode), II.isLatched() && pB ? AB.update(BB.targetsBlock(), ZB) && II.unlatch() : AB.reset(), (0, uB.c)(II.isLatched())
            })(IB, ZB), ZI.update(IB.wasPressed((0, kB.g)("use")), IB.isHeld((0, kB.g)("use")), ZB, !1), GI.update(IB.isHeld((0, kB.g)("hotbarPrevious")), ZB) && BB.scrollHotbar(-1), vI.update(IB.isHeld((0, kB.g)("hotbarNext")), ZB) && BB.scrollHotbar(1), ((IB, ZB, TB) => {
              const JB = (0, kB.g)("perspective"),
                oB = (0, kB.g)("pickBlock"),
                GB = BB.pickBlockAllowed();
              (0, fB.h)(GB && !cI && BB.targetsBlock());
              const vB = () => {
                ZB.pickBlock() && (cI = !0, (0, fB.h)(!1))
              };
              if (!GB || oB !== JB) return kI.release(), IB.wasPressed(JB) && ZB.swapCameraZoom(), void(GB && IB.wasPressed(oB) && vB());
              const cB = kI.update(IB.wasPressed(oB), IB.isHeld(oB), TB, tB());
              "tap" === cB ? vB() : "hold" === cB && ZB.swapCameraZoom()
            })(IB, TB, ZB), ((IB, ZB, TB) => {
              const JB = (0, kB.g)("drop");
              if (IB.wasPressed(JB)) {
                ZB.dropItem(!1);
                const BB = (0, zB.i)();
                "off" !== BB.buttonRepeat && (sB = TB, wB = lB.c[BB.tapHoldTime].dropStackMs, (0, eB.e)(wB))
              }
              null !== sB && (!IB.isHeld(JB) || BB.selectedSlotEmpty() ? iB() : TB - sB >= wB && (iB(), ZB.dropItem(!0)))
            })(IB, TB, ZB), SB.update(TB, IB, ZB, tB()), gI(IB, ZB)
          },
          yI = hB.c.register({
            name: "gameplay",
            isActive: () => {
              const IB = TI && "keyboardMouse" === TB.d.get("activeInputDevice") && !(0, FB.H)(),
                ZB = (0, FB.i)() ? [MB.d] : [];
              return ((0, FB.i)() || IB) && (0, qB.h)(ZB) && BB.hasPlayer()
            },
            onFrame: BB => {
              const IB = performance.now(),
                ZB = (0, zB.i)(),
                TB = (0, rB.q)(BB, (0, rB.h)(ZB, (0, kB.g)("pause"), (0, mB.d)().isSupported())),
                JB = (0, rB.g)(TB, ZB.swapSticks);
              return (0, FB.i)() ? (JI = !1, (0, qB.h)() ? (oI = !1, DB.update(JB.look, ZB, TB.isHeld((0, kB.g)("use"))), FI(TB, JB.move, IB), void qI(TB, IB)) : (oI || (oI = !0, nB.lostToPadScreen(), hI()), void NI(TB, IB))) : (JI || (nI(), JI = !0), void FI(TB, JB.move, IB))
            },
            onDeactivate: BB => {
              (0, FB.i)() && nB.lostToPadScreen(), hI(BB)
            },
            onPeekFrame: IB => {
              (0, FB.i)() && (0, qB.h)(MB.i) && BB.hasPlayer() ? FI(IB, (0, rB.g)(IB, (0, zB.i)().swapSticks).move, performance.now(), !0) : hI()
            }
          }),
          UI = (0, MB.f)(BB),
          WI = (() => {
            const BB = JB.l.subscribe(HB.e, (BB => {
              !BB && (0, FB.i)() && "inGame" === TB.d.get("gameState") && JB.l.Gq("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              JB.l.unsubscribe(BB)
            }
          })();
        return () => {
          hI(), BB.uninstall(), (0, LB.f)(!1), (0, fB.h)(!1), JB.l.unsubscribe(CB), JB.l.unsubscribe(BI), yI(), UI(), WI(), DB.uninstall()
        }
      }
  },
  40613: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => NB,
      f: () => qB,
      i: () => FB
    });
    var TB = ZB(1353),
      JB = ZB(4459),
      oB = ZB(8895),
      GB = ZB(36953),
      vB = ZB(1787),
      kB = ZB(1243),
      cB = ZB(8341),
      nB = ZB(8835),
      hB = ZB(8920);
    const zB = {
        emoteWheel: oB.e,
        quickChatWheel: nB.c,
        actionWheel: hB.p
      },
      FB = Object.keys(zB),
      NB = "dead",
      gB = BB => (0, TB.l)().includes(BB),
      qB = BB => {
        const IB = [(0, cB.k)(NB, (() => BB.hasPlayer() && BB.isPlayerDead())), (0, cB.k)("sleeping", (() => gB(GB.d))), (0, cB.k)("turnstile", (() => gB(kB.f))), (0, cB.k)("videoAd", vB.g), (0, cB.k)("replay", (() => (0, JB.f)() || BB.isReplayMode())), (0, cB.k)("freeCamera", (() => BB.isFreeCameraOn())), ...Object.entries(zB).map((BB => {
          let [IB, ZB] = BB;
          return (0, cB.k)(IB, ZB)
        }))];
        return () => {
          for (const BB of IB) BB()
        }
      }
  },
  40606: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB,
      e: () => kB,
      g: () => vB,
      h: () => nB,
      i: () => GB,
      l: () => oB,
      p: () => cB,
      q: () => hB
    });
    var TB = ZB(8282);
    class JB {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(BB, IB, ZB) {
        const JB = (0, TB.i)(BB, IB.lookDeadzone);
        if (Math.hypot(JB.x, JB.y) < .9 || Math.abs(JB.x) < Math.abs(JB.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = ZB);
        const oB = (GB = IB.lookSensitivityX, Math.min(1, 100 / GB));
        var GB;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (ZB - this.fullTiltSinceMs - 250 * oB) / (200 * oB)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const oB = (BB, IB, ZB, JB, oB) => {
        let GB = 1;
        return "boost" === ZB.lookCurve ? GB = BB.update(IB, ZB, oB) : BB.reset(),
          function(BB, IB) {
            let {
              yawBoost: ZB = 1,
              aiming: JB = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const oB = (0, TB.h)((0, TB.i)(BB, IB.lookDeadzone), IB.lookCurve),
              GB = 220 * Math.PI / 180,
              vB = JB ? IB.aimLookSensitivity / 100 : 1,
              kB = IB.lookSensitivityX / 100 * vB,
              cB = IB.lookSensitivityY / 100 * vB;
            return {
              yawRadPerSec: oB.x * GB * kB * ZB * (IB.invertLookX ? -1 : 1),
              pitchRadPerSec: oB.y * GB * .7 * cB * (IB.invertLookY ? -1 : 1)
            }
          }(IB, ZB, {
            yawBoost: GB,
            aiming: JB
          })
      },
      GB = (BB, IB) => {
        const ZB = Math.max(0, Math.min(250, IB)) / 1e3;
        return {
          YH: BB.yawRadPerSec * ZB,
          iH: BB.pitchRadPerSec * ZB
        }
      },
      vB = (BB, IB) => IB ? {
        move: BB.rightStick,
        look: BB.leftStick
      } : {
        move: BB.leftStick,
        look: BB.rightStick
      },
      kB = (BB, IB) => {
        const ZB = (0, TB.i)(BB, IB),
          JB = Math.min(1, Math.hypot(ZB.x, ZB.y));
        return {
          magnitude: JB,
          speed: Math.min(1, JB / .8),
          headingOffset: 0 === JB ? 0 : Math.atan2(ZB.x, -ZB.y),
          x: ZB.x,
          y: ZB.y
        }
      },
      cB = (BB, IB) => {
        let {
          sprintPressed: ZB,
          magnitude: TB,
          autoSprint: JB,
          nowMs: oB
        } = IB;
        const GB = ZB ? oB : BB.latchedAtMs,
          vB = (BB => {
            let {
              running: IB,
              magnitude: ZB,
              sprintPressed: TB,
              autoSprint: JB
            } = BB;
            return !(ZB < .5) && (!!TB || !!(JB && ZB >= .9) || IB)
          })({
            running: BB.running,
            magnitude: TB,
            sprintPressed: oB - GB <= 1e3,
            autoSprint: JB
          });
        return {
          running: vB,
          latchedAtMs: vB ? -1 / 0 : GB
        }
      },
      nB = (BB, IB, ZB) => ZB && BB.gyroAiming && "button" === BB.gyroActivation && BB.gyroButton !== IB ? BB.gyroButton : null,
      hB = (BB, IB) => IB ? {
        ...BB,
        isHeld: ZB => ZB !== IB && BB.isHeld(ZB),
        wasPressed: ZB => ZB !== IB && BB.wasPressed(ZB),
        wasReleased: ZB => ZB !== IB && BB.wasReleased(ZB),
        value: ZB => ZB === IB ? 0 : BB.value(ZB)
      } : BB
  },
  40627: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB,
      g: () => TB
    });
    const TB = BB => {
      let {
        mode: IB,
        sneakHeld: ZB,
        sneakPressed: TB,
        sneakTogglePressed: JB,
        descending: oB,
        canCrouch: GB,
        toggled: vB
      } = BB;
      return GB ? oB ? {
        crouchHeld: ZB,
        toggled: !1
      } : "hold" === IB ? {
        crouchHeld: ZB,
        toggled: JB ? !vB : vB
      } : {
        crouchHeld: !1,
        toggled: TB || JB ? !vB : vB
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class JB {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(BB, IB) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = IB, this.graceEndsMs = IB + 500);
        const ZB = IB < this.graceEndsMs;
        return ZB && (BB.sneakPressed || BB.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, IB + 300))), BB.sneakHeld ? ZB && BB.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: BB.sneakHeld && !this.ignoringHeld,
          sneakPressed: BB.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: BB.sneakTogglePressed && !ZB
        }
      }
    }
  },
  40595: (BB, IB, ZB) => {
    ZB(8956)
  },
  40599: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => WB
    });
    var TB = ZB(24),
      JB = ZB(8895),
      oB = ZB(8913),
      GB = ZB(8291),
      vB = ZB(8325),
      kB = ZB(8303),
      cB = ZB(40606),
      nB = ZB(40613),
      hB = ZB(8341),
      zB = ZB(8282),
      FB = ZB(8835),
      NB = ZB(8920);
    const gB = [{
        isOpen: JB.h,
        openButton: () => (0, GB.g)("emoteWheel"),
        aim: BB => {
          TB.l.Gq("emoteWheelPadAim", BB)
        },
        commit: BB => {
          TB.l.Gq("requestEmoteWheelPadCommit", BB)
        },
        close: () => {
          TB.l.Gq("requestEmoteWheelClose")
        }
      }, {
        isOpen: FB.c,
        openButton: () => (0, GB.g)("chat"),
        aim: BB => {
          TB.l.Gq(FB.d, BB)
        },
        commit: BB => {
          TB.l.Gq(FB.j, BB)
        },
        close: () => {
          TB.l.Gq(FB.g)
        },
        keptOpenBy: [nB.d]
      }, {
        isOpen: NB.p,
        openButton: () => (0, GB.g)("actionButton"),
        aim: BB => {
          TB.l.Gq(NB.c, BB)
        },
        commit: BB => {
          TB.l.Gq(NB.g, BB)
        },
        close: () => {
          TB.l.Gq(NB.e)
        }
      }],
      qB = () => {
        var BB;
        return null !== (BB = gB.find((BB => BB.isOpen()))) && void 0 !== BB ? BB : null
      },
      yB = BB => (0, GB.O)(BB.openButton()),
      UB = (BB, IB) => !(0, zB.J)(BB.frame.values, IB),
      WB = () => {
        let BB = null,
          IB = !1,
          ZB = !1;
        return vB.c.register({
          name: "wheel",
          isActive: () => null !== qB(),
          peek: () => {
            const BB = qB();
            return BB && yB(BB) ? null : {
              over: "gameplay",
              stick: (0, kB.i)().swapSticks ? "right" : "left"
            }
          },
          onFrame: TB => {
            var JB;
            const zB = qB();
            if (!zB) return;
            if (null !== (0, hB.d)([...nB.i, ...null !== (JB = zB.keptOpenBy) && void 0 !== JB ? JB : []])) return void zB.close();
            const FB = zB.openButton(),
              NB = (0, cB.g)(TB.frame, (0, kB.i)().swapSticks),
              gB = yB(zB) ? NB.move : NB.look;
            BB !== zB ? (BB = zB, IB = !UB(TB, FB) || Math.hypot(gB.x, gB.y) >= oB.D, ZB = !1) : ZB && (ZB = !1, UB(TB, FB) && (IB = !1)), zB.aim(gB);
            const WB = (0, GB.g)("menuConfirm"),
              dB = (0, GB.g)("menuBack");
            return TB.wasPressed(dB) ? (vB.c.consumeButton(dB), void zB.close()) : TB.wasPressed(WB) || TB.wasPressed(FB) ? (vB.c.consumeButton(WB), vB.c.consumeButton(FB), void zB.commit(!1)) : void(IB && UB(TB, FB) && (IB = !1, zB.commit(!0)))
          },
          onDeactivate: () => {
            ZB = null !== BB && qB() === BB, ZB || (BB = null, IB = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
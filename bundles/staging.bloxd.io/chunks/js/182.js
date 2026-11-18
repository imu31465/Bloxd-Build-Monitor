export const id = 182;
export const ids = [182];
export const modules = {
  35880: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => NB,
      e: () => iB
    });
    var VB = dB(3741),
      yB = dB(1317),
      pB = dB(62),
      lB = dB(5839),
      JB = dB(3725),
      YB = dB(1173),
      gB = dB(1679),
      oB = dB(1657),
      kB = dB(1324),
      LB = dB(1078),
      OB = dB(35886),
      DB = dB(933),
      uB = dB.n(DB),
      HB = dB(1201),
      EB = dB(946),
      vB = dB(1165),
      mB = dB(980);
    const iB = "SleepingOverlay";

    function NB() {
      const {
        t: BB
      } = (0, LB.z)(), [TB, dB] = (0, pB.useState)(!1), [DB, NB] = (0, pB.useState)(null), [fB, sB] = (0, pB.useState)(1), [MB, zB] = (0, pB.useState)(!1), [wB, UB] = (0, pB.useState)(!1), FB = (0, pB.useRef)(0), KB = (0, pB.useRef)(!1), rB = (0, pB.useRef)(!1), IB = (0, pB.useRef)(), cB = (0, pB.useRef)(null);

      function SB() {
        const BB = null !== DB && void 0 !== DB ? DB : "Rested Speed";
        gB.gameBridge.send("wakeUp", wB ? BB : null), cB.current = null, dB(!1), NB(null), sB(1), zB(!1), UB(!1)
      }

      function PB() {
        return !MB && (SB(), !0)
      }
      return (0, yB.e)("PlayerPhysicsTypeUpdate", (BB => {
        BB !== cB.current && (cB.current = BB, BB === lB.q.SLEEPING ? (rB.current || (FB.current = gB.gameBridge.lookup("cameraZoom", null), rB.current = !0), KB.current = !0, gB.gameBridge.send("setCameraZoom", 3), dB(!0), sB(function() {
          for (const BB of gB.gameBridge.lookup("blocksStandingOn", null)) {
            if (OB.e.leafBeds.includes(BB)) return console.log(`Found leaf bed: ${BB}`), 1;
            if (OB.e.woolBeds.includes(BB)) return console.log(`Found woold bed: ${BB}`), 2;
            if (OB.e.strongBeds.includes(BB)) return console.log(`Found strong bed ${BB}`), 3
          }
          return 1
        }())) : (rB.current = !1, dB(!1), NB(null), sB(1)))
      })), (0, pB.useEffect)((() => () => {
        (0, YB.l)(iB)
      }), []), (0, pB.useEffect)((() => {
        TB ? (0, YB.p)(iB) : ((0, YB.l)(iB), KB.current && (gB.gameBridge.send("setCameraZoom", FB.current), KB.current = !1))
      }), [TB]), (0, vB.y)("overlay", IB, PB, TB), (0, mB.jsx)(VB.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: TB,
        timeout: 300,
        nodeRef: IB,
        unmountOnExit: !0,
        children: (0, mB.jsx)("div", {
          ref: IB,
          onClick: BB => {
            PB() && BB.stopPropagation()
          },
          children: (0, mB.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, mB.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: JB.j.map((TB => (0, mB.jsxs)(tB, {
                restedEffect: TB,
                oo: DB,
                setChosenRestedEffect: NB,
                children: [(0, mB.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, mB.jsx)(oB.e, {
                    text: [{
                      icon: TB
                    }]
                  }), JB.g[TB].shortName]
                }), (0, mB.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: BB(JB.g[TB].description, {
                    time: JB.g[TB].effectLevelDurations[fB] / 6e4
                  })
                })]
              }, TB)))
            }), (0, mB.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, mB.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, mB.jsxs)(kB.d, {
                className: "SleepingOverlayWakeUpButton",
                onClick: BB => {
                  wB ? SB() : (zB(!0), (0, HB.$)((() => {
                    zB(!1), UB(!0)
                  }), !0)), BB.stopPropagation()
                },
                loading: MB,
                children: [!wB && (0, mB.jsxs)(mB.Fragment, {
                  children: [(0, mB.jsx)(EB.e, {
                    name: "film"
                  }), " ", BB("classicGame:watchAdToGetRestedPerk")]
                }), wB && BB("classicGame:wakeUp")]
              }), (0, mB.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, mB.jsx)("div", {
                  className: uB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === fB
                  }),
                  children: (0, mB.jsx)(oB.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, mB.jsx)("div", {
                  className: uB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === fB
                  }),
                  children: (0, mB.jsx)(oB.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, mB.jsx)("div", {
                  className: uB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === fB
                  }),
                  children: (0, mB.jsx)(oB.e, {
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
    const tB = (0, pB.memo)((function(BB) {
      let {
        children: TB,
        restedEffect: dB,
        oo: VB,
        setChosenRestedEffect: yB
      } = BB;
      return dB === VB ? (0, mB.jsx)(kB.k, {
        onClick: BB => {
          BB.stopPropagation()
        },
        children: TB
      }) : (0, mB.jsx)(kB.g, {
        onClick: BB => {
          yB(dB), BB.stopPropagation()
        },
        children: TB
      })
    }))
  },
  39301: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => xB
    });
    var VB = dB(21),
      yB = dB(24),
      pB = dB(3762),
      lB = dB(270),
      JB = dB(1507),
      YB = dB(7511),
      gB = dB(3767),
      oB = dB(8079),
      kB = dB(7535),
      LB = dB(7515),
      OB = dB(7543),
      DB = dB(1564),
      uB = dB(7552),
      HB = dB(7997),
      EB = dB(8134),
      vB = dB(8094),
      mB = dB(8140),
      iB = dB(1679),
      NB = dB(7500),
      tB = dB(8038),
      fB = dB(8031),
      sB = dB(8085);
    class MB {
      constructor() {
        this.lostAtMs = null
      }
      update(BB, TB) {
        return BB ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= TB, TB - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class zB {
      constructor(BB, TB) {
        this.press = BB, this.release = TB, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(BB, TB, dB, VB) {
        if (BB && null === this.downAtMs) return this.downAtMs = dB, this.latched = VB, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? BB && this.end() : !TB && dB - this.downAtMs >= 40 && this.end())
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
    const wB = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      UB = BB => {
        let TB = null;
        const dB = new sB.e,
          VB = () => {
            TB && (((BB, TB, dB) => {
              switch (dB.kind) {
                case "reload":
                  return void TB.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void TB.specialActionUp(dB.action);
                case "customButton":
                  return void iB.gameBridge.send("pressCustomButton", {
                    id: dB.id,
                    down: !1
                  });
                case "touchButton":
                  BB.pressTouchButton(!1)
              }
            })(BB, TB.bodies, TB.action), TB = null)
          },
          pB = (dB, yB, pB, lB) => {
            VB(), TB = {
              action: yB,
              bodies: dB,
              heldBy: pB,
              atMs: lB
            }, ((BB, TB, dB) => {
              switch (dB.kind) {
                case "reload":
                  return TB.reloadGun(), void TB.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void TB.specialActionDown(dB.action);
                case "customButton":
                  return void iB.gameBridge.send("pressCustomButton", {
                    id: dB.id,
                    down: !0
                  });
                case "touchButton":
                  BB.pressTouchButton(!0)
              }
            })(BB, dB, yB)
          };
        return {
          update: (lB, JB, gB, oB) => {
            var LB;
            const OB = (0, tB.i)(BB.contextActionInputs()),
              DB = null !== (LB = OB[0]) && void 0 !== LB ? LB : wB;
            (0, fB.d)((0, tB.f)(DB) ? DB : null);
            const uB = (0, tB.b)(OB);
            (0, fB.e)(uB);
            const HB = (0, YB.m)("actionButton");
            if (uB) {
              const BB = dB.update(JB.wasPressed(HB), JB.isHeld(HB), gB, oB);
              "tap" === BB ? pB(lB, DB, [HB], gB) : "hold" === BB && (kB.d.consumeButton(HB), yB.h.yH(mB.l, OB))
            } else dB.release(), JB.wasPressed(HB) && pB(lB, DB, [HB], gB);
            TB && gB - TB.atMs >= 40 && !TB.heldBy.some((BB => (0, NB.H)(JB.frame.values, BB))) && VB()
          },
          pressPicked: (BB, TB) => {
            pB(BB, TB, [(0, YB.m)("menuConfirm"), (0, YB.m)("actionButton")], performance.now())
          },
          release: () => {
            dB.release(), VB(), (0, fB.d)(null), (0, fB.e)(!1)
          }
        }
      };
    var FB = dB(7493);
    var KB = dB(39297),
      rB = dB(8045),
      IB = dB(7532),
      cB = dB(8178);
    var SB = dB(39293),
      PB = dB(8183),
      QB = dB(39306),
      RB = dB(8166),
      aB = dB(8050),
      ZB = dB(8058),
      XB = dB(8067),
      WB = dB(8006);
    const hB = () => WB.c[(0, LB.h)().tapHoldTime].wheelMs,
      CB = () => ((0, oB.c)(), new Event("controllerMenuKey")),
      GB = (BB, TB, dB) => new zB((() => {
        const dB = BB.bodies();
        return {
          bodies: dB,
          press: TB(dB)
        }
      }), (BB => {
        let {
          bodies: TB,
          press: VB
        } = BB;
        dB(TB, VB)
      })),
      qB = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      xB = BB => {
        const TB = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let dB = qB;
        const oB = new QB.e,
          iB = yB.h.subscribe("appManagerUpdated|activeInputDevice", (TB => {
            BB.deviceChanged(TB)
          }));
        let tB = null,
          fB = 0;
        const zB = () => {
          tB = null, (0, aB.f)(null)
        };
        let wB = !1;
        const xB = new MB,
          jB = BB.look,
          AB = new sB.e,
          bB = new sB.e,
          nB = UB(BB),
          eB = yB.h.subscribe(mB.o, (TB => {
            nB.pressPicked(BB.bodies(), TB)
          })),
          BT = GB(BB, (BB => BB.primaryFireDown()), ((BB, TB) => {
            BB.primaryFireUp(TB)
          })),
          TT = GB(BB, (BB => BB.altFireDown()), ((BB, TB) => {
            BB.altFireUp(TB)
          }));
        let dT = !1,
          VT = !1,
          yT = !1;
        const pT = (0, HB.d)(NB.Y),
          lT = (0, HB.d)(NB.Y),
          JT = new sB.e;
        let YT = !1;
        const gT = () => {
            pT.reset(), lT.reset(), JT.release(), (0, XB.i)(!1), jB.release(), BT.cancel(), (0, ZB.g)(!1), TT.cancel(), nB.release(), AB.release(), bB.release(), zB()
          },
          oT = function() {
            let VB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            gT(), VT = !1, VB || (dT = !1, dB = qB, Object.assign(TB, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), BB.stopMoving())
          },
          kT = function(VB, yB, pB) {
            let lB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const JB = (0, LB.h)(),
              gB = (0, SB.f)(yB, JB.moveDeadzone),
              kB = (0, YB.m)("sprint");
            dB = (0, SB.t)(dB, {
              sprintPressed: VB.wasPressed(kB),
              magnitude: gB.magnitude,
              autoSprint: JB.autoSprint,
              nowMs: pB
            }), TB.running = dB.running, TB.sprintHeld = VB.isHeld(kB), TB.x = gB.x, TB.y = gB.y, TB.magnitude = gB.speed, TB.headingOffset = gB.headingOffset, dT = gB.magnitude > 0;
            const OB = (0, YB.m)("jump");
            if (TB.jumpHeld = VB.isHeld(OB), TB.jumpPressed = VB.wasPressed(OB), TB.jumpPressed && BB.bodies().jumpDown(), lB) return void BB.move(TB, null);
            const DB = (0, YB.m)("sneak"),
              uB = oB.filter({
                sneakHeld: VB.isHeld(DB),
                sneakPressed: VB.wasPressed(DB),
                sneakTogglePressed: VB.wasPressed((0, YB.m)("sneakToggle"))
              }, pB);
            BB.move(TB, {
              ...uB,
              mode: JB.sneakMode
            })
          },
          LT = (BB, TB) => {
            const dB = (0, YB.m)("chat");
            if ("off" === (0, LB.h)().quickChat) return void(BB.wasPressed(dB) && (kB.d.consumeButton(dB), yB.h.yH(rB.d)));
            const VB = AB.update(BB.wasPressed(dB), BB.isHeld(dB), TB, hB());
            "tap" === VB || "hold" === VB && null === (0, DB.d)() ? yB.h.yH(rB.d) : "hold" === VB && (kB.d.consumeButton(dB), yB.h.yH(vB.p))
          },
          OT = (TB, dB) => {
            ((BB, TB) => {
              const dB = (0, EB.e)(),
                VB = (0, YB.m)("emoteWheel");
              if ("wheel" === (0, LB.h)().emoteButton) return BB.wasPressed(VB) && (kB.d.consumeButton(VB), yB.h.yH("requestEmoteWheelPadOpen", !0)), (0, EB.e)() !== dB;
              const pB = bB.update(BB.wasPressed(VB), BB.isHeld(VB), TB, hB());
              return "tap" === pB ? yB.h.yH("requestEmoteRepeatLast") : "hold" === pB && (kB.d.consumeButton(VB), yB.h.yH("requestEmoteWheelPadOpen", !1)), (0, EB.e)() !== dB
            })(TB, dB) || LT(TB, dB), TB.wasPressed((0, YB.m)("inventory")) && (kB.d.consumeButton((0, YB.m)("inventory")), (0, JB.u)(CB(), "inventory", BB.hasFullInventory())), TB.wasPressed((0, YB.m)("pause")) && (kB.d.consumeButton((0, YB.m)("pause")), (0, gB.e)() === lB.m.SOCIAL ? (0, JB.s)(CB(), lB.m.SOCIAL) : (0, JB.i)(CB())), TB.wasPressed((0, YB.m)("leaderboard")) && !(0, pB.g)() && (kB.d.consumeButton((0, YB.m)("leaderboard")), ((BB, TB) => {
              if ("shop" === (0, IB.e)()) return yB.h.yH(cB.k), void(0, JB.s)(BB, lB.m.SHOP, !0);
              (0, JB.s)(BB, lB.m.LOBBY_LEADERBOARD, TB)
            })(CB(), BB.hasLobbyLeaderboard()))
          },
          DT = (TB, dB) => {
            const VB = BB.bodies();
            ((TB, dB) => {
              const VB = (0, YB.m)("attack"),
                yB = TB.wasPressed(VB);
              yB && !BT.isLatched() && (wB = BB.targetsBlock()), BT.update(yB, TB.isHeld(VB), dB, "toggle" === (0, LB.h)().attackMode), BT.isLatched() && wB ? xB.update(BB.targetsBlock(), dB) && BT.unlatch() : xB.reset(), (0, ZB.g)(BT.isLatched())
            })(TB, dB), TT.update(TB.wasPressed((0, YB.m)("use")), TB.isHeld((0, YB.m)("use")), dB, !1), pT.update(TB.isHeld((0, YB.m)("hotbarPrevious")), dB) && BB.scrollHotbar(-1), lT.update(TB.isHeld((0, YB.m)("hotbarNext")), dB) && BB.scrollHotbar(1), ((TB, dB, VB) => {
              const yB = (0, YB.m)("perspective"),
                pB = (0, YB.m)("aE"),
                lB = BB.pickBlockAllowed();
              (0, XB.i)(lB && !YT && BB.targetsBlock());
              const JB = () => {
                dB.aE() && (YT = !0, (0, XB.i)(!1))
              };
              if (!lB || pB !== yB) return JT.release(), TB.wasPressed(yB) && dB.swapCameraZoom(), void(lB && TB.wasPressed(pB) && JB());
              const gB = JT.update(TB.wasPressed(pB), TB.isHeld(pB), VB, hB());
              "tap" === gB ? JB() : "hold" === gB && dB.swapCameraZoom()
            })(TB, VB, dB), ((TB, dB, VB) => {
              const yB = (0, YB.m)("drop");
              if (TB.wasPressed(yB)) {
                dB.dropItem(!1);
                const BB = (0, LB.h)();
                "off" !== BB.buttonRepeat && (tB = VB, fB = WB.c[BB.tapHoldTime].dropStackMs, (0, aB.f)(fB))
              }
              null !== tB && (!TB.isHeld(yB) || BB.selectedSlotEmpty() ? zB() : VB - tB >= fB && (zB(), dB.dropItem(!0)))
            })(TB, VB, dB), nB.update(VB, TB, dB, hB()), OT(TB, dB)
          },
          uT = kB.d.register({
            name: "gameplay",
            isActive: () => {
              const TB = dT && "keyboardMouse" === VB.d.get("activeInputDevice") && !(0, OB.H)(),
                dB = (0, OB.k)() ? [KB.e] : [];
              return ((0, OB.k)() || TB) && (0, uB.d)(dB) && BB.hasPlayer()
            },
            onFrame: BB => {
              const TB = performance.now(),
                dB = (0, LB.h)(),
                VB = (0, SB.w)(BB, (0, SB.l)(dB, (0, YB.m)("pause"), (0, PB.e)().isSupported())),
                yB = (0, SB.j)(VB, dB.swapSticks);
              return (0, OB.k)() ? (VT = !1, (0, uB.d)() ? (yT = !1, jB.update(yB.look, dB, VB.isHeld((0, YB.m)("use"))), kT(VB, yB.move, TB), void DT(VB, TB)) : (yT || (yT = !0, oB.lostToPadScreen(), oT()), void LT(VB, TB))) : (VT || (gT(), VT = !0), void kT(VB, yB.move, TB))
            },
            onDeactivate: BB => {
              (0, OB.k)() && oB.lostToPadScreen(), oT(BB)
            },
            onPeekFrame: TB => {
              (0, OB.k)() && (0, uB.d)(KB.h) && BB.hasPlayer() ? kT(TB, (0, SB.j)(TB, (0, LB.h)().swapSticks).move, performance.now(), !0) : oT()
            }
          }),
          HT = (0, KB.g)(BB),
          ET = (() => {
            const BB = yB.h.subscribe(FB.b, (BB => {
              !BB && (0, OB.k)() && "inGame" === VB.d.get("gameState") && yB.h.yH("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              yB.h.unsubscribe(BB)
            }
          })();
        return () => {
          oT(), BB.uninstall(), (0, RB.i)(!1), (0, XB.i)(!1), yB.h.unsubscribe(iB), yB.h.unsubscribe(eB), uT(), HT(), ET(), jB.uninstall()
        }
      }
  },
  39297: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => DB,
      g: () => HB,
      h: () => OB
    });
    var VB = dB(1173),
      yB = dB(3762),
      pB = dB(8122),
      lB = dB(35880),
      JB = dB(1201),
      YB = dB(1074),
      gB = dB(7552),
      oB = dB(8094),
      kB = dB(8140);
    const LB = {
        emoteWheel: pB.i,
        quickChatWheel: oB.e,
        actionWheel: kB.r
      },
      OB = Object.keys(LB),
      DB = "dead",
      uB = BB => (0, VB.i)().includes(BB),
      HB = BB => {
        const TB = [(0, gB.l)(DB, (() => BB.hasPlayer() && BB.isPlayerDead())), (0, gB.l)("sleeping", (() => uB(lB.e))), (0, gB.l)("turnstile", (() => uB(YB.h))), (0, gB.l)("videoAd", JB.H), (0, gB.l)("replay", (() => (0, yB.g)() || BB.isReplayMode())), (0, gB.l)("freeCamera", (() => BB.isFreeCameraOn())), ...Object.entries(LB).map((BB => {
          let [TB, dB] = BB;
          return (0, gB.l)(TB, dB)
        }))];
        return () => {
          for (const BB of TB) BB()
        }
      }
  },
  39293: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => yB,
      f: () => YB,
      j: () => JB,
      l: () => oB,
      p: () => lB,
      r: () => pB,
      t: () => gB,
      w: () => kB
    });
    var VB = dB(7500);
    class yB {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(BB, TB, dB) {
        const yB = (0, VB.k)(BB, TB.lookDeadzone);
        if (Math.hypot(yB.x, yB.y) < .9 || Math.abs(yB.x) < Math.abs(yB.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = dB);
        const pB = (lB = TB.lookSensitivityX, Math.min(1, 100 / lB));
        var lB;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (dB - this.fullTiltSinceMs - 250 * pB) / (200 * pB)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const pB = (BB, TB, dB, yB, pB) => {
        let lB = 1;
        return "boost" === dB.lookCurve ? lB = BB.update(TB, dB, pB) : BB.reset(),
          function(BB, TB) {
            let {
              yawBoost: dB = 1,
              aiming: yB = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const pB = (0, VB.i)((0, VB.k)(BB, TB.lookDeadzone), TB.lookCurve),
              lB = 220 * Math.PI / 180,
              JB = yB ? TB.aimLookSensitivity / 100 : 1,
              YB = TB.lookSensitivityX / 100 * JB,
              gB = TB.lookSensitivityY / 100 * JB;
            return {
              yawRadPerSec: pB.x * lB * YB * dB * (TB.invertLookX ? -1 : 1),
              pitchRadPerSec: pB.y * lB * .7 * gB * (TB.invertLookY ? -1 : 1)
            }
          }(TB, dB, {
            yawBoost: lB,
            aiming: yB
          })
      },
      lB = (BB, TB) => {
        const dB = Math.max(0, Math.min(250, TB)) / 1e3;
        return {
          pU: BB.yawRadPerSec * dB,
          kU: BB.pitchRadPerSec * dB
        }
      },
      JB = (BB, TB) => TB ? {
        move: BB.rightStick,
        look: BB.leftStick
      } : {
        move: BB.leftStick,
        look: BB.rightStick
      },
      YB = (BB, TB) => {
        const dB = (0, VB.k)(BB, TB),
          yB = Math.min(1, Math.hypot(dB.x, dB.y));
        return {
          magnitude: yB,
          speed: Math.min(1, yB / .8),
          headingOffset: 0 === yB ? 0 : Math.atan2(dB.x, -dB.y),
          x: dB.x,
          y: dB.y
        }
      },
      gB = (BB, TB) => {
        let {
          sprintPressed: dB,
          magnitude: VB,
          autoSprint: yB,
          nowMs: pB
        } = TB;
        const lB = dB ? pB : BB.latchedAtMs,
          JB = (BB => {
            let {
              running: TB,
              magnitude: dB,
              sprintPressed: VB,
              autoSprint: yB
            } = BB;
            return !(dB < .5) && (!!VB || !!(yB && dB >= .9) || TB)
          })({
            running: BB.running,
            magnitude: VB,
            sprintPressed: pB - lB <= 1e3,
            autoSprint: yB
          });
        return {
          running: JB,
          latchedAtMs: JB ? -1 / 0 : lB
        }
      },
      oB = (BB, TB, dB) => dB && BB.gyroAiming && "button" === BB.gyroActivation && BB.gyroButton !== TB ? BB.gyroButton : null,
      kB = (BB, TB) => TB ? {
        ...BB,
        isHeld: dB => dB !== TB && BB.isHeld(dB),
        wasPressed: dB => dB !== TB && BB.wasPressed(dB),
        wasReleased: dB => dB !== TB && BB.wasReleased(dB),
        value: dB => dB === TB ? 0 : BB.value(dB)
      } : BB
  },
  39306: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => yB,
      h: () => VB
    });
    const VB = BB => {
      let {
        mode: TB,
        sneakHeld: dB,
        sneakPressed: VB,
        sneakTogglePressed: yB,
        descending: pB,
        canCrouch: lB,
        toggled: JB
      } = BB;
      return lB ? pB ? {
        crouchHeld: dB,
        toggled: !1
      } : "hold" === TB ? {
        crouchHeld: dB,
        toggled: yB ? !JB : JB
      } : {
        crouchHeld: !1,
        toggled: VB || yB ? !JB : JB
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class yB {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(BB, TB) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = TB, this.graceEndsMs = TB + 500);
        const dB = TB < this.graceEndsMs;
        return dB && (BB.sneakPressed || BB.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, TB + 300))), BB.sneakHeld ? dB && BB.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: BB.sneakHeld && !this.ignoringHeld,
          sneakPressed: BB.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: BB.sneakTogglePressed && !dB
        }
      }
    }
  },
  39277: (BB, TB, dB) => {
    dB(8183)
  },
  39286: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => mB
    });
    var VB = dB(24),
      yB = dB(8122),
      pB = dB(8130),
      lB = dB(7511),
      JB = dB(7535),
      YB = dB(7515),
      gB = dB(39293),
      oB = dB(39297),
      kB = dB(7552),
      LB = dB(7500),
      OB = dB(8094),
      DB = dB(8140);
    const uB = [{
        isOpen: yB.j,
        openButton: () => (0, lB.m)("emoteWheel"),
        aim: BB => {
          VB.h.yH("emoteWheelPadAim", BB)
        },
        commit: BB => {
          VB.h.yH("requestEmoteWheelPadCommit", BB)
        },
        close: () => {
          VB.h.yH("requestEmoteWheelClose")
        }
      }, {
        isOpen: OB.e,
        openButton: () => (0, lB.m)("chat"),
        aim: BB => {
          VB.h.yH(OB.g, BB)
        },
        commit: BB => {
          VB.h.yH(OB.m, BB)
        },
        close: () => {
          VB.h.yH(OB.i)
        },
        keptOpenBy: [oB.e]
      }, {
        isOpen: DB.r,
        openButton: () => (0, lB.m)("actionButton"),
        aim: BB => {
          VB.h.yH(DB.d, BB)
        },
        commit: BB => {
          VB.h.yH(DB.h, BB)
        },
        close: () => {
          VB.h.yH(DB.g)
        }
      }],
      HB = () => {
        var BB;
        return null !== (BB = uB.find((BB => BB.isOpen()))) && void 0 !== BB ? BB : null
      },
      EB = BB => (0, lB.cb)(BB.openButton()),
      vB = (BB, TB) => !(0, LB.H)(BB.frame.values, TB),
      mB = () => {
        let BB = null,
          TB = !1,
          dB = !1;
        return JB.d.register({
          name: "wheel",
          isActive: () => null !== HB(),
          peek: () => {
            const BB = HB();
            return BB && EB(BB) ? null : {
              over: "gameplay",
              stick: (0, YB.h)().swapSticks ? "right" : "left"
            }
          },
          onFrame: VB => {
            var yB;
            const LB = HB();
            if (!LB) return;
            if (null !== (0, kB.c)([...oB.h, ...null !== (yB = LB.keptOpenBy) && void 0 !== yB ? yB : []])) return void LB.close();
            const OB = LB.openButton(),
              DB = (0, gB.j)(VB.frame, (0, YB.h)().swapSticks),
              uB = EB(LB) ? DB.move : DB.look;
            BB !== LB ? (BB = LB, TB = !vB(VB, OB) || Math.hypot(uB.x, uB.y) >= pB.B, dB = !1) : dB && (dB = !1, vB(VB, OB) && (TB = !1)), LB.aim(uB);
            const mB = (0, lB.m)("menuConfirm"),
              iB = (0, lB.m)("menuBack");
            return VB.wasPressed(iB) ? (JB.d.consumeButton(iB), void LB.close()) : VB.wasPressed(mB) || VB.wasPressed(OB) ? (JB.d.consumeButton(mB), JB.d.consumeButton(OB), void LB.commit(!1)) : void(TB && vB(VB, OB) && (TB = !1, LB.commit(!0)))
          },
          onDeactivate: () => {
            dB = null !== BB && HB() === BB, dB || (BB = null, TB = !1)
          }
        })
      }
  },
  8746: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB,
      d: () => pB
    });
    var VB = dB(8698);
    const yB = "Air",
      pB = Object.freeze(new VB.h(yB, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
export const id = 229;
export const ids = [229];
export const modules = {
  36994: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => tB,
      e: () => gB
    });
    var QB = zB(4352),
      nB = zB(1471),
      dB = zB(62),
      IB = zB(6428),
      NB = zB(4340),
      uB = zB(1316),
      UB = zB(1982),
      aB = zB(1952),
      pB = zB(1478),
      rB = zB(1240),
      sB = zB(36998),
      JB = zB(1091),
      mB = zB.n(JB),
      yB = zB(1343),
      kB = zB(1108),
      GB = zB(1306),
      LB = zB(1148);
    const gB = "SleepingOverlay";

    function tB() {
      const {
        t: BB
      } = (0, rB.D)(), [jB, zB] = (0, dB.useState)(!1), [JB, tB] = (0, dB.useState)(null), [MB, EB] = (0, dB.useState)(1), [iB, qB] = (0, dB.useState)(!1), [fB, oB] = (0, dB.useState)(!1), HB = (0, dB.useRef)(0), DB = (0, dB.useRef)(!1), FB = (0, dB.useRef)(!1), YB = (0, dB.useRef)(), VB = (0, dB.useRef)(null);

      function hB() {
        const BB = null !== JB && void 0 !== JB ? JB : "Rested Speed";
        UB.gameBridge.send("wakeUp", fB ? BB : null), VB.current = null, zB(!1), tB(null), EB(1), qB(!1), oB(!1)
      }

      function XB() {
        return !iB && (hB(), !0)
      }
      return (0, nB.f)("PlayerPhysicsTypeUpdate", (BB => {
        BB !== VB.current && (VB.current = BB, BB === IB.t.SLEEPING ? (FB.current || (HB.current = UB.gameBridge.lookup("cameraZoom", null), FB.current = !0), DB.current = !0, UB.gameBridge.send("setCameraZoom", 3), zB(!0), EB(function() {
          for (const BB of UB.gameBridge.lookup("blocksStandingOn", null)) {
            if (sB.e.leafBeds.includes(BB)) return console.log(`Found leaf bed: ${BB}`), 1;
            if (sB.e.woolBeds.includes(BB)) return console.log(`Found woold bed: ${BB}`), 2;
            if (sB.e.strongBeds.includes(BB)) return console.log(`Found strong bed ${BB}`), 3
          }
          return 1
        }())) : (FB.current = !1, zB(!1), tB(null), EB(1)))
      })), (0, dB.useEffect)((() => () => {
        (0, uB.s)(gB)
      }), []), (0, dB.useEffect)((() => {
        jB ? (0, uB.u)(gB) : ((0, uB.s)(gB), DB.current && (UB.gameBridge.send("setCameraZoom", HB.current), DB.current = !1))
      }), [jB]), (0, GB.v)("overlay", YB, XB, jB), (0, LB.jsx)(QB.d, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: jB,
        timeout: 300,
        nodeRef: YB,
        unmountOnExit: !0,
        children: (0, LB.jsx)("div", {
          ref: YB,
          onClick: BB => {
            XB() && BB.stopPropagation()
          },
          children: (0, LB.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, LB.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: NB.f.map((jB => (0, LB.jsxs)(SB, {
                restedEffect: jB,
                ou: JB,
                setChosenRestedEffect: tB,
                children: [(0, LB.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, LB.jsx)(aB.e, {
                    text: [{
                      icon: jB
                    }]
                  }), NB.d[jB].shortName]
                }), (0, LB.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: BB(NB.d[jB].description, {
                    time: NB.d[jB].effectLevelDurations[MB] / 6e4
                  })
                })]
              }, jB)))
            }), (0, LB.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, LB.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, LB.jsxs)(pB.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: BB => {
                  fB ? hB() : (qB(!0), (0, yB.V)((() => {
                    qB(!1), oB(!0)
                  }), !0)), BB.stopPropagation()
                },
                loading: iB,
                children: [!fB && (0, LB.jsxs)(LB.Fragment, {
                  children: [(0, LB.jsx)(kB.c, {
                    name: "film"
                  }), " ", BB("classicGame:watchAdToGetRestedPerk")]
                }), fB && BB("classicGame:wakeUp")]
              }), (0, LB.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, LB.jsx)("div", {
                  className: mB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === MB
                  }),
                  children: (0, LB.jsx)(aB.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, LB.jsx)("div", {
                  className: mB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === MB
                  }),
                  children: (0, LB.jsx)(aB.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, LB.jsx)("div", {
                  className: mB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === MB
                  }),
                  children: (0, LB.jsx)(aB.e, {
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
    const SB = (0, dB.memo)((function(BB) {
      let {
        children: jB,
        restedEffect: zB,
        ou: QB,
        setChosenRestedEffect: nB
      } = BB;
      return zB === QB ? (0, LB.jsx)(pB.m, {
        onClick: BB => {
          BB.stopPropagation()
        },
        children: jB
      }) : (0, LB.jsx)(pB.h, {
        onClick: BB => {
          nB(zB), BB.stopPropagation()
        },
        children: jB
      })
    }))
  },
  40667: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => bB
    });
    var QB = zB(28),
      nB = zB(31),
      dB = zB(4369),
      IB = zB(363),
      NB = zB(1664),
      uB = zB(8145),
      UB = zB(4383),
      aB = zB(8704),
      pB = zB(8173),
      rB = zB(8155),
      sB = zB(8179),
      JB = zB(1418),
      mB = zB(1718),
      yB = zB(8184),
      kB = zB(8652),
      GB = zB(8795),
      LB = zB(8718),
      gB = zB(8798),
      tB = zB(1982),
      SB = zB(8131),
      MB = zB(8733),
      EB = zB(8730),
      iB = zB(8711);
    class qB {
      constructor() {
        this.lostAtMs = null
      }
      update(BB, jB) {
        return BB ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= jB, jB - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class fB {
      constructor(BB, jB) {
        this.press = BB, this.release = jB, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(BB, jB, zB, QB) {
        if (BB && null === this.downAtMs) return this.downAtMs = zB, this.latched = QB, void(this.token = this.press(QB));
        null !== this.downAtMs && (this.latched ? BB && this.end() : !jB && zB - this.downAtMs >= 40 && this.end())
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
    const oB = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      HB = BB => {
        let jB = null;
        const zB = new iB.e,
          QB = () => {
            jB && (((BB, jB, zB) => {
              switch (zB.kind) {
                case "reload":
                  return void jB.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void jB.specialActionUp(zB.action);
                case "customButton":
                  return void tB.gameBridge.send("pressCustomButton", {
                    id: zB.id,
                    down: !1
                  });
                case "touchButton":
                  BB.pressTouchButton(!1)
              }
            })(BB, jB.bodies, jB.action), jB = null)
          },
          dB = (zB, nB, dB, IB) => {
            QB(), jB = {
              action: nB,
              bodies: zB,
              heldBy: dB,
              atMs: IB
            }, ((BB, jB, zB) => {
              switch (zB.kind) {
                case "reload":
                  return jB.reloadGun(), void jB.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void jB.specialActionDown(zB.action);
                case "customButton":
                  return void tB.gameBridge.send("pressCustomButton", {
                    id: zB.id,
                    down: !0
                  });
                case "touchButton":
                  BB.pressTouchButton(!0)
              }
            })(BB, zB, nB)
          };
        return {
          update: (IB, NB, UB, aB) => {
            var rB;
            const sB = (0, MB.l)(BB.contextActionInputs()),
              JB = null !== (rB = sB[0]) && void 0 !== rB ? rB : oB;
            (0, EB.b)((0, MB.g)(JB) ? JB : null);
            const mB = (0, MB.c)(sB);
            (0, EB.c)(mB);
            const yB = (0, uB.h)("actionButton");
            if (mB) {
              const BB = zB.update(NB.wasPressed(yB), NB.isHeld(yB), UB, aB);
              "tap" === BB ? dB(IB, JB, [yB], UB) : "hold" === BB && (pB.c.consumeButton(yB), nB.n.Ly(gB.f, sB))
            } else zB.release(), NB.wasPressed(yB) && dB(IB, JB, [yB], UB);
            jB && UB - jB.atMs >= 40 && !jB.heldBy.some((BB => (0, SB.P)(NB.frame.values, BB))) && QB()
          },
          pressPicked: (BB, jB) => {
            dB(BB, jB, [(0, uB.h)("menuConfirm"), (0, uB.h)("actionButton")], performance.now())
          },
          release: () => {
            zB.release(), QB(), (0, EB.b)(null), (0, EB.c)(!1)
          }
        }
      };
    var DB = zB(8122);
    var FB = zB(40659),
      YB = zB(8747),
      VB = zB(8165),
      hB = zB(8841);
    var XB = zB(40650),
      ZB = zB(8850),
      AB = zB(40675),
      TB = zB(8821),
      PB = zB(8750),
      WB = zB(8759),
      eB = zB(8761),
      lB = zB(8655),
      wB = zB(8724);
    const xB = () => lB.c[(0, rB.j)().tapHoldTime].wheelMs,
      KB = () => ((0, aB.e)(), (0, wB.e)("controllerMenuKey")),
      CB = (BB, jB, zB) => new fB((zB => {
        const QB = BB.bodies();
        return {
          bodies: QB,
          press: jB(QB, zB)
        }
      }), (BB => {
        let {
          bodies: jB,
          press: QB
        } = BB;
        zB(jB, QB)
      })),
      cB = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      bB = BB => {
        const jB = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let zB = cB;
        const aB = new AB.c,
          tB = nB.n.subscribe("appManagerUpdated|activeInputDevice", (jB => {
            BB.deviceChanged(jB)
          }));
        let MB = null,
          EB = 0;
        const fB = () => {
          MB = null, (0, PB.d)(null)
        };
        let oB = !1;
        const wB = new qB,
          bB = BB.look,
          vB = new iB.e,
          RB = new iB.e,
          OB = HB(BB),
          Bj = nB.n.subscribe(gB.g, (jB => {
            OB.pressPicked(BB.bodies(), jB)
          })),
          jj = CB(BB, ((BB, jB) => BB.primaryFireDown(!jB)), ((BB, jB) => {
            BB.primaryFireUp(jB)
          })),
          zj = CB(BB, (BB => BB.altFireDown()), ((BB, jB) => {
            BB.altFireUp(jB)
          }));
        let Qj = !1,
          nj = !1,
          dj = !1;
        const Ij = (0, kB.b)(SB.cb),
          Nj = (0, kB.b)(SB.cb),
          uj = new iB.e;
        let Uj = !1;
        const aj = () => {
            Ij.reset(), Nj.reset(), uj.release(), (0, eB.e)(!1), bB.release(), jj.cancel(), (0, WB.f)(!1), zj.cancel(), OB.release(), vB.release(), RB.release(), fB()
          },
          pj = function() {
            let QB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            aj(), nj = !1, QB || (Qj = !1, zB = cB, Object.assign(jB, {
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
        let rj = !1;
        const sj = function(QB, nB, dB) {
            let IB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, JB.h)()) return void(rj || (rj = !0, Qj = !1, BB.stopMoving()));
            rj = !1;
            const NB = (0, rB.j)(),
              UB = (0, XB.f)(nB, NB.moveDeadzone),
              pB = (0, uB.h)("sprint");
            zB = (0, XB.u)(zB, {
              sprintPressed: QB.wasPressed(pB),
              magnitude: UB.magnitude,
              autoSprint: NB.autoSprint,
              nowMs: dB
            }), jB.running = zB.running, jB.sprintHeld = QB.isHeld(pB), jB.x = UB.x, jB.y = UB.y, jB.magnitude = UB.speed, jB.headingOffset = UB.headingOffset, Qj = UB.magnitude > 0;
            const sB = (0, uB.h)("jump");
            if (jB.jumpHeld = QB.isHeld(sB), jB.jumpPressed = QB.wasPressed(sB), jB.jumpPressed && BB.bodies().jumpDown(), IB) return void BB.move(jB, null);
            const mB = (0, uB.h)("sneak"),
              yB = aB.filter({
                sneakHeld: QB.isHeld(mB),
                sneakPressed: QB.wasPressed(mB),
                sneakTogglePressed: QB.wasPressed((0, uB.h)("sneakToggle"))
              }, dB);
            BB.move(jB, {
              ...yB,
              mode: NB.sneakMode
            })
          },
          Jj = (BB, jB) => {
            const zB = (0, uB.h)("chat");
            if ("off" === (0, rB.j)().quickChat) return void(BB.wasPressed(zB) && (pB.c.consumeButton(zB), nB.n.Ly(YB.e)));
            const QB = vB.update(BB.wasPressed(zB), BB.isHeld(zB), jB, xB());
            "tap" === QB || "hold" === QB && null === (0, mB.e)() ? nB.n.Ly(YB.e) : "hold" === QB && (pB.c.consumeButton(zB), nB.n.Ly(LB.i))
          },
          mj = (jB, zB) => {
            ((BB, jB) => {
              const zB = (0, GB.c)(),
                QB = (0, uB.h)("emoteWheel");
              if ("wheel" === (0, rB.j)().emoteButton) return BB.wasPressed(QB) && (pB.c.consumeButton(QB), nB.n.Ly("requestEmoteWheelPadOpen", !0)), (0, GB.c)() !== zB;
              const dB = RB.update(BB.wasPressed(QB), BB.isHeld(QB), jB, xB());
              return "tap" === dB ? nB.n.Ly("requestEmoteRepeatLast") : "hold" === dB && (pB.c.consumeButton(QB), nB.n.Ly("requestEmoteWheelPadOpen", !1)), (0, GB.c)() !== zB
            })(jB, zB) || Jj(jB, zB), jB.wasPressed((0, uB.h)("inventory")) && (pB.c.consumeButton((0, uB.h)("inventory")), (0, NB.u)(KB(), "inventory", BB.hasFullInventory())), jB.wasPressed((0, uB.h)("pause")) && (pB.c.consumeButton((0, uB.h)("pause")), (0, UB.b)() === IB.o.SOCIAL ? (0, NB.t)(KB(), IB.o.SOCIAL) : (0, NB.e)(KB())), jB.wasPressed((0, uB.h)("leaderboard")) && !(0, dB.g)() && (pB.c.consumeButton((0, uB.h)("leaderboard")), ((BB, jB) => {
              if ("shop" === (0, VB.c)()) return nB.n.Ly(hB.k), void(0, NB.t)(BB, IB.o.SHOP, !0);
              (0, NB.t)(BB, IB.o.LOBBY_LEADERBOARD, jB)
            })(KB(), BB.hasLobbyTab()))
          },
          yj = (jB, zB) => {
            const QB = BB.bodies();
            ((jB, zB) => {
              const QB = (0, uB.h)("attack"),
                nB = jB.wasPressed(QB);
              nB && !jj.isLatched() && (oB = BB.targetsBlock()), jj.update(nB, jB.isHeld(QB), zB, "toggle" === (0, rB.j)().attackMode), jj.isLatched() && oB ? wB.update(BB.targetsBlock(), zB) && jj.unlatch() : wB.reset(), (0, WB.f)(jj.isLatched())
            })(jB, zB), zj.update(jB.wasPressed((0, uB.h)("use")), jB.isHeld((0, uB.h)("use")), zB, !1), Ij.update(jB.isHeld((0, uB.h)("hotbarPrevious")), zB) && BB.scrollHotbar(-1), Nj.update(jB.isHeld((0, uB.h)("hotbarNext")), zB) && BB.scrollHotbar(1), ((jB, zB, QB) => {
              const nB = (0, uB.h)("perspective"),
                dB = (0, uB.h)("pickBlock"),
                IB = BB.pickBlockAllowed();
              (0, eB.e)(IB && !Uj && BB.targetsBlock());
              const NB = () => {
                zB.pickBlock() && (Uj = !0, (0, eB.e)(!1))
              };
              if (!IB || dB !== nB) return uj.release(), jB.wasPressed(nB) && zB.swapCameraZoom(), void(IB && jB.wasPressed(dB) && NB());
              const UB = uj.update(jB.wasPressed(dB), jB.isHeld(dB), QB, xB());
              "tap" === UB ? NB() : "hold" === UB && zB.swapCameraZoom()
            })(jB, QB, zB), ((jB, zB, QB) => {
              const nB = (0, uB.h)("drop");
              if (jB.wasPressed(nB)) {
                zB.dropItem(!1);
                const BB = (0, rB.j)();
                "off" !== BB.buttonRepeat && (MB = QB, EB = lB.c[BB.tapHoldTime].dropStackMs, (0, PB.d)(EB))
              }
              null !== MB && (!jB.isHeld(nB) || BB.selectedSlotEmpty() ? fB() : QB - MB >= EB && (fB(), zB.dropItem(!0)))
            })(jB, QB, zB), OB.update(QB, jB, zB, xB()), mj(jB, zB)
          },
          kj = pB.c.register({
            name: "gameplay",
            isActive: () => {
              const jB = Qj && "keyboardMouse" === QB.c.get("activeInputDevice") && !(0, sB.L)(),
                zB = (0, sB.m)() ? [FB.d] : [];
              return ((0, sB.m)() || jB) && (0, yB.f)(zB) && BB.hasPlayer()
            },
            onFrame: BB => {
              const jB = performance.now(),
                zB = (0, rB.j)(),
                QB = (0, XB.y)(BB, (0, XB.m)(zB, (0, uB.h)("pause"), (0, ZB.b)().isSupported())),
                nB = (0, XB.j)(QB, zB.swapSticks);
              return (0, sB.m)() ? (nj = !1, (0, yB.f)() ? (dj = !1, bB.update(nB.look, zB, QB.isHeld((0, uB.h)("use"))), sj(QB, nB.move, jB), void yj(QB, jB)) : (dj || (dj = !0, aB.lostToPadScreen(), pj()), void Jj(QB, jB))) : (nj || (aj(), nj = !0), void sj(QB, nB.move, jB))
            },
            onDeactivate: BB => {
              (0, sB.m)() && aB.lostToPadScreen(), pj(BB)
            },
            onPeekFrame: jB => {
              (0, sB.m)() && (0, yB.f)(FB.f) && BB.hasPlayer() ? sj(jB, (0, XB.j)(jB, (0, rB.j)().swapSticks).move, performance.now(), !0) : pj()
            }
          }),
          Gj = (0, FB.e)(BB),
          Lj = (() => {
            const BB = nB.n.subscribe(DB.d, (BB => {
              !BB && (0, sB.m)() && "inGame" === QB.c.get("gameState") && nB.n.Ly("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              nB.n.unsubscribe(BB)
            }
          })();
        return () => {
          pj(), BB.uninstall(), (0, TB.f)(!1), (0, eB.e)(!1), nB.n.unsubscribe(tB), nB.n.unsubscribe(Bj), kj(), Gj(), Lj(), bB.uninstall()
        }
      }
  },
  40659: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => JB,
      e: () => yB,
      f: () => sB
    });
    var QB = zB(1316),
      nB = zB(4369),
      dB = zB(8776),
      IB = zB(36994),
      NB = zB(1760),
      uB = zB(1238),
      UB = zB(8184),
      aB = zB(8718),
      pB = zB(8798);
    const rB = {
        emoteWheel: dB.h,
        quickChatWheel: aB.d,
        actionWheel: pB.j
      },
      sB = Object.keys(rB),
      JB = "dead",
      mB = BB => (0, QB.o)().includes(BB),
      yB = BB => {
        const jB = [(0, UB.n)(JB, (() => BB.hasPlayer() && BB.isPlayerDead())), (0, UB.n)("sleeping", (() => mB(IB.e))), (0, UB.n)("turnstile", (() => mB(uB.h))), (0, UB.n)("videoAd", NB.i), (0, UB.n)("replay", (() => (0, nB.g)() || BB.isReplayMode())), (0, UB.n)("freeCamera", (() => BB.isFreeCameraOn())), ...Object.entries(rB).map((BB => {
          let [jB, zB] = BB;
          return (0, UB.n)(jB, zB)
        }))];
        return () => {
          for (const BB of jB) BB()
        }
      }
  },
  40650: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB,
      f: () => uB,
      j: () => NB,
      m: () => aB,
      q: () => IB,
      r: () => dB,
      u: () => UB,
      y: () => pB
    });
    var QB = zB(8131);
    class nB {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(BB, jB, zB) {
        const nB = (0, QB.k)(BB, jB.lookDeadzone);
        if (Math.hypot(nB.x, nB.y) < .9 || Math.abs(nB.x) < Math.abs(nB.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = zB);
        const dB = (IB = jB.lookSensitivityX, Math.min(1, 100 / IB));
        var IB;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (zB - this.fullTiltSinceMs - 250 * dB) / (200 * dB)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const dB = (BB, jB, zB, nB, dB) => {
        let IB = 1;
        return "boost" === zB.lookCurve ? IB = BB.update(jB, zB, dB) : BB.reset(),
          function(BB, jB) {
            let {
              yawBoost: zB = 1,
              aiming: nB = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const dB = (0, QB.i)((0, QB.k)(BB, jB.lookDeadzone), jB.lookCurve),
              IB = 220 * Math.PI / 180,
              NB = nB ? jB.aimLookSensitivity / 100 : 1,
              uB = jB.lookSensitivityX / 100 * NB,
              UB = jB.lookSensitivityY / 100 * NB;
            return {
              yawRadPerSec: dB.x * IB * uB * zB * (jB.invertLookX ? -1 : 1),
              pitchRadPerSec: dB.y * IB * .7 * UB * (jB.invertLookY ? -1 : 1)
            }
          }(jB, zB, {
            yawBoost: IB,
            aiming: nB
          })
      },
      IB = (BB, jB) => {
        const zB = Math.max(0, Math.min(250, jB)) / 1e3;
        return {
          bD: BB.yawRadPerSec * zB,
          RD: BB.pitchRadPerSec * zB
        }
      },
      NB = (BB, jB) => jB ? {
        move: BB.rightStick,
        look: BB.leftStick
      } : {
        move: BB.leftStick,
        look: BB.rightStick
      },
      uB = (BB, jB) => {
        const zB = (0, QB.k)(BB, jB),
          nB = Math.min(1, Math.hypot(zB.x, zB.y));
        return {
          magnitude: nB,
          speed: Math.min(1, nB / .8),
          headingOffset: 0 === nB ? 0 : Math.atan2(zB.x, -zB.y),
          x: zB.x,
          y: zB.y
        }
      },
      UB = (BB, jB) => {
        let {
          sprintPressed: zB,
          magnitude: QB,
          autoSprint: nB,
          nowMs: dB
        } = jB;
        const IB = zB ? dB : BB.latchedAtMs,
          NB = (BB => {
            let {
              running: jB,
              magnitude: zB,
              sprintPressed: QB,
              autoSprint: nB
            } = BB;
            return !(zB < .5) && (!!QB || !!(nB && zB >= .9) || jB)
          })({
            running: BB.running,
            magnitude: QB,
            sprintPressed: dB - IB <= 1e3,
            autoSprint: nB
          });
        return {
          running: NB,
          latchedAtMs: NB ? -1 / 0 : IB
        }
      },
      aB = (BB, jB, zB) => zB && BB.gyroAiming && "button" === BB.gyroActivation && BB.gyroButton !== jB ? BB.gyroButton : null,
      pB = (BB, jB) => jB ? {
        ...BB,
        isHeld: zB => zB !== jB && BB.isHeld(zB),
        wasPressed: zB => zB !== jB && BB.wasPressed(zB),
        wasReleased: zB => zB !== jB && BB.wasReleased(zB),
        value: zB => zB === jB ? 0 : BB.value(zB)
      } : BB
  },
  40675: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB,
      g: () => QB
    });
    const QB = BB => {
      let {
        mode: jB,
        sneakHeld: zB,
        sneakPressed: QB,
        sneakTogglePressed: nB,
        descending: dB,
        canCrouch: IB,
        toggled: NB
      } = BB;
      return IB ? dB ? {
        crouchHeld: zB,
        toggled: !1
      } : "hold" === jB ? {
        crouchHeld: zB,
        toggled: nB ? !NB : NB
      } : {
        crouchHeld: !1,
        toggled: QB || nB ? !NB : NB
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class nB {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(BB, jB) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = jB, this.graceEndsMs = jB + 500);
        const zB = jB < this.graceEndsMs;
        return zB && (BB.sneakPressed || BB.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, jB + 300))), BB.sneakHeld ? zB && BB.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: BB.sneakHeld && !this.ignoringHeld,
          sneakPressed: BB.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: BB.sneakTogglePressed && !zB
        }
      }
    }
  },
  40640: (BB, jB, zB) => {
    zB(8850)
  },
  40647: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => LB
    });
    var QB = zB(31),
      nB = zB(8776),
      dB = zB(8792),
      IB = zB(8145),
      NB = zB(8173),
      uB = zB(8155),
      UB = zB(40650),
      aB = zB(40659),
      pB = zB(8184),
      rB = zB(8131),
      sB = zB(8718),
      JB = zB(8798);
    const mB = [{
        isOpen: nB.l,
        openButton: () => (0, IB.h)("emoteWheel"),
        aim: BB => {
          QB.n.Ly("emoteWheelPadAim", BB)
        },
        commit: BB => {
          QB.n.Ly("requestEmoteWheelPadCommit", BB)
        },
        close: () => {
          QB.n.Ly("requestEmoteWheelClose")
        }
      }, {
        isOpen: sB.d,
        openButton: () => (0, IB.h)("chat"),
        aim: BB => {
          QB.n.Ly(sB.e, BB)
        },
        commit: BB => {
          QB.n.Ly(sB.h, BB)
        },
        close: () => {
          QB.n.Ly(sB.f)
        },
        keptOpenBy: [aB.d]
      }, {
        isOpen: JB.j,
        openButton: () => (0, IB.h)("actionButton"),
        aim: BB => {
          QB.n.Ly(JB.b, BB)
        },
        commit: BB => {
          QB.n.Ly(JB.e, BB)
        },
        close: () => {
          QB.n.Ly(JB.c)
        }
      }],
      yB = () => {
        var BB;
        return null !== (BB = mB.find((BB => BB.isOpen()))) && void 0 !== BB ? BB : null
      },
      kB = BB => (0, IB.O)(BB.openButton()),
      GB = (BB, jB) => !(0, rB.P)(BB.frame.values, jB),
      LB = () => {
        let BB = null,
          jB = !1,
          zB = !1;
        return NB.c.register({
          name: "wheel",
          isActive: () => null !== yB(),
          peek: () => {
            const BB = yB();
            return BB && kB(BB) ? null : {
              over: "gameplay",
              stick: (0, uB.j)().swapSticks ? "right" : "left"
            }
          },
          onFrame: QB => {
            var nB;
            const rB = yB();
            if (!rB) return;
            if (null !== (0, pB.d)([...aB.f, ...null !== (nB = rB.keptOpenBy) && void 0 !== nB ? nB : []])) return void rB.close();
            const sB = rB.openButton(),
              JB = (0, UB.j)(QB.frame, (0, uB.j)().swapSticks),
              mB = kB(rB) ? JB.move : JB.look;
            BB !== rB ? (BB = rB, jB = !GB(QB, sB) || Math.hypot(mB.x, mB.y) >= dB.w, zB = !1) : zB && (zB = !1, GB(QB, sB) && (jB = !1)), rB.aim(mB);
            const LB = (0, IB.h)("menuConfirm"),
              gB = (0, IB.h)("menuBack");
            return QB.wasPressed(gB) ? (NB.c.consumeButton(gB), void rB.close()) : QB.wasPressed(LB) || QB.wasPressed(sB) ? (NB.c.consumeButton(LB), NB.c.consumeButton(sB), void rB.commit(!1)) : void(jB && GB(QB, sB) && (jB = !1, rB.commit(!0)))
          },
          onDeactivate: () => {
            zB = null !== BB && yB() === BB, zB || (BB = null, jB = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
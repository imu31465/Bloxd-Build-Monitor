export const id = 224;
export const ids = [224];
export const modules = {
  36955: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => DS,
      g: () => QS
    });
    var tS = gS(4373),
      bS = gS(1522),
      XS = gS(64),
      xS = gS(6672),
      NS = gS(4361),
      qS = gS(1366),
      uS = gS(2060),
      IS = gS(2031),
      fS = gS(1528),
      kS = gS(1281),
      aS = gS(36959),
      KS = gS(1121),
      jS = gS.n(KS),
      GS = gS(1390),
      CS = gS(1127),
      nS = gS(1359),
      PS = gS(1181);
    const QS = "SleepingOverlay";

    function DS() {
      const {
        t: SS
      } = (0, kS.F)(), [HS, gS] = (0, XS.useState)(!1), [KS, DS] = (0, XS.useState)(null), [hS, ZS] = (0, XS.useState)(1), [JS, OS] = (0, XS.useState)(!1), [dS, cS] = (0, XS.useState)(!1), vS = (0, XS.useRef)(0), ES = (0, XS.useRef)(!1), LS = (0, XS.useRef)(!1), YS = (0, XS.useRef)(), AS = (0, XS.useRef)(null);

      function yS() {
        const SS = null !== KS && void 0 !== KS ? KS : "Rested Speed";
        uS.gameBridge.send("wakeUp", dS ? SS : null), AS.current = null, gS(!1), DS(null), ZS(1), OS(!1), cS(!1)
      }

      function VS() {
        return !JS && (yS(), !0)
      }
      return (0, bS.g)("PlayerPhysicsTypeUpdate", (SS => {
        SS !== AS.current && (AS.current = SS, SS === xS.o.SLEEPING ? (LS.current || (vS.current = uS.gameBridge.lookup("cameraZoom", null), LS.current = !0), ES.current = !0, uS.gameBridge.send("setCameraZoom", 3), gS(!0), ZS(function() {
          for (const SS of uS.gameBridge.lookup("blocksStandingOn", null)) {
            if (aS.b.leafBeds.includes(SS)) return console.log(`Found leaf bed: ${SS}`), 1;
            if (aS.b.woolBeds.includes(SS)) return console.log(`Found woold bed: ${SS}`), 2;
            if (aS.b.strongBeds.includes(SS)) return console.log(`Found strong bed ${SS}`), 3
          }
          return 1
        }())) : (LS.current = !1, gS(!1), DS(null), ZS(1)))
      })), (0, XS.useEffect)((() => () => {
        (0, qS.q)(QS)
      }), []), (0, XS.useEffect)((() => {
        HS ? (0, qS.u)(QS) : ((0, qS.q)(QS), ES.current && (uS.gameBridge.send("setCameraZoom", vS.current), ES.current = !1))
      }), [HS]), (0, nS.s)("overlay", YS, VS, HS), (0, PS.jsx)(tS.e, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: HS,
        timeout: 300,
        nodeRef: YS,
        unmountOnExit: !0,
        children: (0, PS.jsx)("div", {
          ref: YS,
          onClick: SS => {
            VS() && SS.stopPropagation()
          },
          children: (0, PS.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, PS.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: NS.i.map((HS => (0, PS.jsxs)(wS, {
                restedEffect: HS,
                Tu: KS,
                setChosenRestedEffect: DS,
                children: [(0, PS.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, PS.jsx)(IS.c, {
                    text: [{
                      icon: HS
                    }]
                  }), NS.g[HS].shortName]
                }), (0, PS.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: SS(NS.g[HS].description, {
                    time: NS.g[HS].effectLevelDurations[hS] / 6e4
                  })
                })]
              }, HS)))
            }), (0, PS.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, PS.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, PS.jsxs)(fS.g, {
                className: "SleepingOverlayWakeUpButton",
                onClick: SS => {
                  dS ? yS() : (OS(!0), (0, GS.db)((() => {
                    OS(!1), cS(!0)
                  }), !0)), SS.stopPropagation()
                },
                loading: JS,
                children: [!dS && (0, PS.jsxs)(PS.Fragment, {
                  children: [(0, PS.jsx)(CS.d, {
                    name: "film"
                  }), " ", SS("classicGame:watchAdToGetRestedPerk")]
                }), dS && SS("classicGame:wakeUp")]
              }), (0, PS.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, PS.jsx)("div", {
                  className: jS()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === hS
                  }),
                  children: (0, PS.jsx)(IS.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, PS.jsx)("div", {
                  className: jS()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === hS
                  }),
                  children: (0, PS.jsx)(IS.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, PS.jsx)("div", {
                  className: jS()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === hS
                  }),
                  children: (0, PS.jsx)(IS.c, {
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
    const wS = (0, XS.memo)((function(SS) {
      let {
        children: HS,
        restedEffect: gS,
        Tu: tS,
        setChosenRestedEffect: bS
      } = SS;
      return gS === tS ? (0, PS.jsx)(fS.p, {
        onClick: SS => {
          SS.stopPropagation()
        },
        children: HS
      }) : (0, PS.jsx)(fS.j, {
        onClick: SS => {
          bS(gS), SS.stopPropagation()
        },
        children: HS
      })
    }))
  },
  40599: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => TS
    });
    var tS = gS(24),
      bS = gS(31),
      XS = gS(4396),
      xS = gS(369),
      NS = gS(1733),
      qS = gS(8339),
      uS = gS(4408),
      IS = gS(8903),
      fS = gS(8385),
      kS = gS(8353),
      aS = gS(8393),
      KS = gS(1783),
      jS = gS(8400),
      GS = gS(8854),
      CS = gS(9006),
      nS = gS(8912),
      PS = gS(9012),
      QS = gS(2060),
      DS = gS(8327),
      wS = gS(8938),
      hS = gS(8930),
      ZS = gS(8910);
    class JS {
      constructor() {
        this.lostAtMs = null
      }
      update(SS, HS) {
        return SS ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= HS, HS - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class OS {
      constructor(SS, HS) {
        this.press = SS, this.release = HS, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(SS, HS, gS, tS) {
        if (SS && null === this.downAtMs) return this.downAtMs = gS, this.latched = tS, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? SS && this.end() : !HS && gS - this.downAtMs >= 40 && this.end())
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
        const SS = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(SS)
      }
    }
    const dS = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      cS = SS => {
        let HS = null;
        const gS = new ZS.b,
          tS = () => {
            HS && (((SS, HS, gS) => {
              switch (gS.kind) {
                case "reload":
                  return void HS.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void HS.specialActionUp(gS.action);
                case "customButton":
                  return void QS.gameBridge.send("pressCustomButton", {
                    id: gS.id,
                    down: !1
                  });
                case "touchButton":
                  SS.pressTouchButton(!1)
              }
            })(SS, HS.bodies, HS.action), HS = null)
          },
          XS = (gS, bS, XS, xS) => {
            tS(), HS = {
              action: bS,
              bodies: gS,
              heldBy: XS,
              atMs: xS
            }, ((SS, HS, gS) => {
              switch (gS.kind) {
                case "reload":
                  return HS.reloadGun(), void HS.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void HS.specialActionDown(gS.action);
                case "customButton":
                  return void QS.gameBridge.send("pressCustomButton", {
                    id: gS.id,
                    down: !0
                  });
                case "touchButton":
                  SS.pressTouchButton(!0)
              }
            })(SS, gS, bS)
          };
        return {
          update: (xS, NS, uS, IS) => {
            var kS;
            const aS = (0, wS.i)(SS.contextActionInputs()),
              KS = null !== (kS = aS[0]) && void 0 !== kS ? kS : dS;
            (0, hS.b)((0, wS.g)(KS) ? KS : null);
            const jS = (0, wS.d)(aS);
            (0, hS.c)(jS);
            const GS = (0, qS.h)("actionButton");
            if (jS) {
              const SS = gS.update(NS.wasPressed(GS), NS.isHeld(GS), uS, IS);
              "tap" === SS ? XS(xS, KS, [GS], uS) : "hold" === SS && (fS.e.consumeButton(GS), bS.k.cj(PS.l, aS))
            } else gS.release(), NS.wasPressed(GS) && XS(xS, KS, [GS], uS);
            HS && uS - HS.atMs >= 40 && !HS.heldBy.some((SS => (0, DS.L)(NS.frame.values, SS))) && tS()
          },
          pressPicked: (SS, HS) => {
            XS(SS, HS, [(0, qS.h)("menuConfirm"), (0, qS.h)("actionButton")], performance.now())
          },
          release: () => {
            gS.release(), tS(), (0, hS.b)(null), (0, hS.c)(!1)
          }
        }
      };
    var vS = gS(8319);
    var ES = gS(40591),
      LS = gS(8948),
      YS = gS(8376),
      AS = gS(9043);
    var yS = gS(40589),
      VS = gS(9048),
      iS = gS(40608),
      WS = gS(9025),
      zS = gS(8951),
      US = gS(8959),
      pS = gS(8965),
      sS = gS(8858);
    const BS = () => sS.e[(0, kS.f)().tapHoldTime].wheelMs,
      MS = () => ((0, IS.d)(), new Event("controllerMenuKey")),
      FS = (SS, HS, gS) => new OS((() => {
        const gS = SS.bodies();
        return {
          bodies: gS,
          press: HS(gS)
        }
      }), (SS => {
        let {
          bodies: HS,
          press: tS
        } = SS;
        gS(HS, tS)
      })),
      RS = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      TS = SS => {
        const HS = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let gS = RS;
        const IS = new iS.d,
          QS = bS.k.subscribe("appManagerUpdated|activeInputDevice", (HS => {
            SS.deviceChanged(HS)
          }));
        let wS = null,
          hS = 0;
        const OS = () => {
          wS = null, (0, zS.f)(null)
        };
        let dS = !1;
        const TS = new JS,
          oS = SS.look,
          lS = new ZS.b,
          mS = new ZS.b,
          eS = cS(SS),
          rS = bS.k.subscribe(PS.n, (HS => {
            eS.pressPicked(SS.bodies(), HS)
          })),
          SH = FS(SS, (SS => SS.primaryFireDown()), ((SS, HS) => {
            SS.primaryFireUp(HS)
          })),
          HH = FS(SS, (SS => SS.altFireDown()), ((SS, HS) => {
            SS.altFireUp(HS)
          }));
        let gH = !1,
          tH = !1,
          bH = !1;
        const XH = (0, GS.d)(DS.ab),
          xH = (0, GS.d)(DS.ab),
          NH = new ZS.b;
        let qH = !1;
        const uH = () => {
            XH.reset(), xH.reset(), NH.release(), (0, pS.f)(!1), oS.release(), SH.cancel(), (0, US.c)(!1), HH.cancel(), eS.release(), lS.release(), mS.release(), OS()
          },
          IH = function() {
            let tS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            uH(), tH = !1, tS || (gH = !1, gS = RS, Object.assign(HS, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), SS.stopMoving())
          },
          fH = function(tS, bS, XS) {
            let xS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const NS = (0, kS.f)(),
              uS = (0, yS.c)(bS, NS.moveDeadzone),
              fS = (0, qS.h)("sprint");
            gS = (0, yS.t)(gS, {
              sprintPressed: tS.wasPressed(fS),
              magnitude: uS.magnitude,
              autoSprint: NS.autoSprint,
              nowMs: XS
            }), HS.running = gS.running, HS.sprintHeld = tS.isHeld(fS), HS.x = uS.x, HS.y = uS.y, HS.magnitude = uS.speed, HS.headingOffset = uS.headingOffset, gH = uS.magnitude > 0;
            const aS = (0, qS.h)("jump");
            if (HS.jumpHeld = tS.isHeld(aS), HS.jumpPressed = tS.wasPressed(aS), HS.jumpPressed && SS.bodies().jumpDown(), xS) return void SS.move(HS, null);
            const KS = (0, qS.h)("sneak"),
              jS = IS.filter({
                sneakHeld: tS.isHeld(KS),
                sneakPressed: tS.wasPressed(KS),
                sneakTogglePressed: tS.wasPressed((0, qS.h)("sneakToggle"))
              }, XS);
            SS.move(HS, {
              ...jS,
              mode: NS.sneakMode
            })
          },
          kH = (SS, HS) => {
            const gS = (0, qS.h)("chat");
            if ("off" === (0, kS.f)().quickChat) return void(SS.wasPressed(gS) && (fS.e.consumeButton(gS), bS.k.cj(LS.d)));
            const tS = lS.update(SS.wasPressed(gS), SS.isHeld(gS), HS, BS());
            "tap" === tS || "hold" === tS && null === (0, KS.e)() ? bS.k.cj(LS.d) : "hold" === tS && (fS.e.consumeButton(gS), bS.k.cj(nS.k))
          },
          aH = (HS, gS) => {
            ((SS, HS) => {
              const gS = (0, CS.d)(),
                tS = (0, qS.h)("emoteWheel");
              if ("wheel" === (0, kS.f)().emoteButton) return SS.wasPressed(tS) && (fS.e.consumeButton(tS), bS.k.cj("requestEmoteWheelPadOpen", !0)), (0, CS.d)() !== gS;
              const XS = mS.update(SS.wasPressed(tS), SS.isHeld(tS), HS, BS());
              return "tap" === XS ? bS.k.cj("requestEmoteRepeatLast") : "hold" === XS && (fS.e.consumeButton(tS), bS.k.cj("requestEmoteWheelPadOpen", !1)), (0, CS.d)() !== gS
            })(HS, gS) || kH(HS, gS), HS.wasPressed((0, qS.h)("inventory")) && (fS.e.consumeButton((0, qS.h)("inventory")), (0, NS.s)(MS(), "inventory", SS.hasFullInventory())), HS.wasPressed((0, qS.h)("pause")) && (fS.e.consumeButton((0, qS.h)("pause")), (0, uS.e)() === xS.q.SOCIAL ? (0, NS.r)(MS(), xS.q.SOCIAL) : (0, NS.i)(MS())), HS.wasPressed((0, qS.h)("leaderboard")) && !(0, XS.g)() && (fS.e.consumeButton((0, qS.h)("leaderboard")), ((SS, HS) => {
              if ("shop" === (0, YS.d)()) return bS.k.cj(AS.i), void(0, NS.r)(SS, xS.q.SHOP, !0);
              (0, NS.r)(SS, xS.q.LOBBY_LEADERBOARD, HS)
            })(MS(), SS.hasLobbyTab()))
          },
          KH = (HS, gS) => {
            const tS = SS.bodies();
            ((HS, gS) => {
              const tS = (0, qS.h)("attack"),
                bS = HS.wasPressed(tS);
              bS && !SH.isLatched() && (dS = SS.targetsBlock()), SH.update(bS, HS.isHeld(tS), gS, "toggle" === (0, kS.f)().attackMode), SH.isLatched() && dS ? TS.update(SS.targetsBlock(), gS) && SH.unlatch() : TS.reset(), (0, US.c)(SH.isLatched())
            })(HS, gS), HH.update(HS.wasPressed((0, qS.h)("use")), HS.isHeld((0, qS.h)("use")), gS, !1), XH.update(HS.isHeld((0, qS.h)("hotbarPrevious")), gS) && SS.scrollHotbar(-1), xH.update(HS.isHeld((0, qS.h)("hotbarNext")), gS) && SS.scrollHotbar(1), ((HS, gS, tS) => {
              const bS = (0, qS.h)("perspective"),
                XS = (0, qS.h)("pickBlock"),
                xS = SS.pickBlockAllowed();
              (0, pS.f)(xS && !qH && SS.targetsBlock());
              const NS = () => {
                gS.pickBlock() && (qH = !0, (0, pS.f)(!1))
              };
              if (!xS || XS !== bS) return NH.release(), HS.wasPressed(bS) && gS.swapCameraZoom(), void(xS && HS.wasPressed(XS) && NS());
              const uS = NH.update(HS.wasPressed(XS), HS.isHeld(XS), tS, BS());
              "tap" === uS ? NS() : "hold" === uS && gS.swapCameraZoom()
            })(HS, tS, gS), ((HS, gS, tS) => {
              const bS = (0, qS.h)("drop");
              if (HS.wasPressed(bS)) {
                gS.dropItem(!1);
                const SS = (0, kS.f)();
                "off" !== SS.buttonRepeat && (wS = tS, hS = sS.e[SS.tapHoldTime].dropStackMs, (0, zS.f)(hS))
              }
              null !== wS && (!HS.isHeld(bS) || SS.selectedSlotEmpty() ? OS() : tS - wS >= hS && (OS(), gS.dropItem(!0)))
            })(HS, tS, gS), eS.update(tS, HS, gS, BS()), aH(HS, gS)
          },
          jH = fS.e.register({
            name: "gameplay",
            isActive: () => {
              const HS = gH && "keyboardMouse" === tS.b.get("activeInputDevice") && !(0, aS.I)(),
                gS = (0, aS.m)() ? [ES.e] : [];
              return ((0, aS.m)() || HS) && (0, jS.d)(gS) && SS.hasPlayer()
            },
            onFrame: SS => {
              const HS = performance.now(),
                gS = (0, kS.f)(),
                tS = (0, yS.x)(SS, (0, yS.j)(gS, (0, qS.h)("pause"), (0, VS.d)().isSupported())),
                bS = (0, yS.f)(tS, gS.swapSticks);
              return (0, aS.m)() ? (tH = !1, (0, jS.d)() ? (bH = !1, oS.update(bS.look, gS, tS.isHeld((0, qS.h)("use"))), fH(tS, bS.move, HS), void KH(tS, HS)) : (bH || (bH = !0, IS.lostToPadScreen(), IH()), void kH(tS, HS))) : (tH || (uH(), tH = !0), void fH(tS, bS.move, HS))
            },
            onDeactivate: SS => {
              (0, aS.m)() && IS.lostToPadScreen(), IH(SS)
            },
            onPeekFrame: HS => {
              (0, aS.m)() && (0, jS.d)(ES.h) && SS.hasPlayer() ? fH(HS, (0, yS.f)(HS, (0, kS.f)().swapSticks).move, performance.now(), !0) : IH()
            }
          }),
          GH = (0, ES.g)(SS),
          CH = (() => {
            const SS = bS.k.subscribe(vS.e, (SS => {
              !SS && (0, aS.m)() && "inGame" === tS.b.get("gameState") && bS.k.cj("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              bS.k.unsubscribe(SS)
            }
          })();
        return () => {
          IH(), SS.uninstall(), (0, WS.f)(!1), (0, pS.f)(!1), bS.k.unsubscribe(QS), bS.k.unsubscribe(rS), jH(), GH(), CH(), oS.uninstall()
        }
      }
  },
  40591: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => KS,
      g: () => GS,
      h: () => aS
    });
    var tS = gS(1366),
      bS = gS(4396),
      XS = gS(8988),
      xS = gS(36955),
      NS = gS(1830),
      qS = gS(1274),
      uS = gS(8400),
      IS = gS(8912),
      fS = gS(9012);
    const kS = {
        emoteWheel: XS.h,
        quickChatWheel: IS.b,
        actionWheel: fS.q
      },
      aS = Object.keys(kS),
      KS = "dead",
      jS = SS => (0, tS.p)().includes(SS),
      GS = SS => {
        const HS = [(0, uS.h)(KS, (() => SS.hasPlayer() && SS.isPlayerDead())), (0, uS.h)("sleeping", (() => jS(xS.g))), (0, uS.h)("turnstile", (() => jS(qS.g))), (0, uS.h)("videoAd", NS.g), (0, uS.h)("replay", (() => (0, bS.g)() || SS.isReplayMode())), (0, uS.h)("freeCamera", (() => SS.isFreeCameraOn())), ...Object.entries(kS).map((SS => {
          let [HS, gS] = SS;
          return (0, uS.h)(HS, gS)
        }))];
        return () => {
          for (const SS of HS) SS()
        }
      }
  },
  40589: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => bS,
      c: () => qS,
      f: () => NS,
      j: () => IS,
      m: () => xS,
      p: () => XS,
      t: () => uS,
      x: () => fS
    });
    var tS = gS(8327);
    class bS {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(SS, HS, gS) {
        const bS = (0, tS.l)(SS, HS.lookDeadzone);
        if (Math.hypot(bS.x, bS.y) < .9 || Math.abs(bS.x) < Math.abs(bS.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = gS);
        const XS = (xS = HS.lookSensitivityX, Math.min(1, 100 / xS));
        var xS;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (gS - this.fullTiltSinceMs - 250 * XS) / (200 * XS)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const XS = (SS, HS, gS, bS, XS) => {
        let xS = 1;
        return "boost" === gS.lookCurve ? xS = SS.update(HS, gS, XS) : SS.reset(),
          function(SS, HS) {
            let {
              yawBoost: gS = 1,
              aiming: bS = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const XS = (0, tS.h)((0, tS.l)(SS, HS.lookDeadzone), HS.lookCurve),
              xS = 220 * Math.PI / 180,
              NS = bS ? HS.aimLookSensitivity / 100 : 1,
              qS = HS.lookSensitivityX / 100 * NS,
              uS = HS.lookSensitivityY / 100 * NS;
            return {
              yawRadPerSec: XS.x * xS * qS * gS * (HS.invertLookX ? -1 : 1),
              pitchRadPerSec: XS.y * xS * .7 * uS * (HS.invertLookY ? -1 : 1)
            }
          }(HS, gS, {
            yawBoost: xS,
            aiming: bS
          })
      },
      xS = (SS, HS) => {
        const gS = Math.max(0, Math.min(250, HS)) / 1e3;
        return {
          tL: SS.yawRadPerSec * gS,
          qL: SS.pitchRadPerSec * gS
        }
      },
      NS = (SS, HS) => HS ? {
        move: SS.rightStick,
        look: SS.leftStick
      } : {
        move: SS.leftStick,
        look: SS.rightStick
      },
      qS = (SS, HS) => {
        const gS = (0, tS.l)(SS, HS),
          bS = Math.min(1, Math.hypot(gS.x, gS.y));
        return {
          magnitude: bS,
          speed: Math.min(1, bS / .8),
          headingOffset: 0 === bS ? 0 : Math.atan2(gS.x, -gS.y),
          x: gS.x,
          y: gS.y
        }
      },
      uS = (SS, HS) => {
        let {
          sprintPressed: gS,
          magnitude: tS,
          autoSprint: bS,
          nowMs: XS
        } = HS;
        const xS = gS ? XS : SS.latchedAtMs,
          NS = (SS => {
            let {
              running: HS,
              magnitude: gS,
              sprintPressed: tS,
              autoSprint: bS
            } = SS;
            return !(gS < .5) && (!!tS || !!(bS && gS >= .9) || HS)
          })({
            running: SS.running,
            magnitude: tS,
            sprintPressed: XS - xS <= 1e3,
            autoSprint: bS
          });
        return {
          running: NS,
          latchedAtMs: NS ? -1 / 0 : xS
        }
      },
      IS = (SS, HS, gS) => gS && SS.gyroAiming && "button" === SS.gyroActivation && SS.gyroButton !== HS ? SS.gyroButton : null,
      fS = (SS, HS) => HS ? {
        ...SS,
        isHeld: gS => gS !== HS && SS.isHeld(gS),
        wasPressed: gS => gS !== HS && SS.wasPressed(gS),
        wasReleased: gS => gS !== HS && SS.wasReleased(gS),
        value: gS => gS === HS ? 0 : SS.value(gS)
      } : SS
  },
  40608: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS,
      g: () => tS
    });
    const tS = SS => {
      let {
        mode: HS,
        sneakHeld: gS,
        sneakPressed: tS,
        sneakTogglePressed: bS,
        descending: XS,
        canCrouch: xS,
        toggled: NS
      } = SS;
      return xS ? XS ? {
        crouchHeld: gS,
        toggled: !1
      } : "hold" === HS ? {
        crouchHeld: gS,
        toggled: bS ? !NS : NS
      } : {
        crouchHeld: !1,
        toggled: tS || bS ? !NS : NS
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class bS {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(SS, HS) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = HS, this.graceEndsMs = HS + 500);
        const gS = HS < this.graceEndsMs;
        return gS && (SS.sneakPressed || SS.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, HS + 300))), SS.sneakHeld ? gS && SS.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: SS.sneakHeld && !this.ignoringHeld,
          sneakPressed: SS.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: SS.sneakTogglePressed && !gS
        }
      }
    }
  },
  40573: (SS, HS, gS) => {
    gS(9048)
  },
  40581: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => PS
    });
    var tS = gS(31),
      bS = gS(8988),
      XS = gS(8998),
      xS = gS(8339),
      NS = gS(8385),
      qS = gS(8353),
      uS = gS(40589),
      IS = gS(40591),
      fS = gS(8400),
      kS = gS(8327),
      aS = gS(8912),
      KS = gS(9012);
    const jS = [{
        isOpen: bS.l,
        openButton: () => (0, xS.h)("emoteWheel"),
        aim: SS => {
          tS.k.cj("emoteWheelPadAim", SS)
        },
        commit: SS => {
          tS.k.cj("requestEmoteWheelPadCommit", SS)
        },
        close: () => {
          tS.k.cj("requestEmoteWheelClose")
        }
      }, {
        isOpen: aS.b,
        openButton: () => (0, xS.h)("chat"),
        aim: SS => {
          tS.k.cj(aS.d, SS)
        },
        commit: SS => {
          tS.k.cj(aS.j, SS)
        },
        close: () => {
          tS.k.cj(aS.h)
        },
        keptOpenBy: [IS.e]
      }, {
        isOpen: KS.q,
        openButton: () => (0, xS.h)("actionButton"),
        aim: SS => {
          tS.k.cj(KS.c, SS)
        },
        commit: SS => {
          tS.k.cj(KS.k, SS)
        },
        close: () => {
          tS.k.cj(KS.g)
        }
      }],
      GS = () => {
        var SS;
        return null !== (SS = jS.find((SS => SS.isOpen()))) && void 0 !== SS ? SS : null
      },
      CS = SS => (0, xS.F)(SS.openButton()),
      nS = (SS, HS) => !(0, kS.L)(SS.frame.values, HS),
      PS = () => {
        let SS = null,
          HS = !1,
          gS = !1;
        return NS.e.register({
          name: "wheel",
          isActive: () => null !== GS(),
          peek: () => {
            const SS = GS();
            return SS && CS(SS) ? null : {
              over: "gameplay",
              stick: (0, qS.f)().swapSticks ? "right" : "left"
            }
          },
          onFrame: tS => {
            var bS;
            const kS = GS();
            if (!kS) return;
            if (null !== (0, fS.c)([...IS.h, ...null !== (bS = kS.keptOpenBy) && void 0 !== bS ? bS : []])) return void kS.close();
            const aS = kS.openButton(),
              KS = (0, uS.f)(tS.frame, (0, qS.f)().swapSticks),
              jS = CS(kS) ? KS.move : KS.look;
            SS !== kS ? (SS = kS, HS = !nS(tS, aS) || Math.hypot(jS.x, jS.y) >= XS.H, gS = !1) : gS && (gS = !1, nS(tS, aS) && (HS = !1)), kS.aim(jS);
            const PS = (0, xS.h)("menuConfirm"),
              QS = (0, xS.h)("menuBack");
            return tS.wasPressed(QS) ? (NS.e.consumeButton(QS), void kS.close()) : tS.wasPressed(PS) || tS.wasPressed(aS) ? (NS.e.consumeButton(PS), NS.e.consumeButton(aS), void kS.commit(!1)) : void(HS && nS(tS, aS) && (HS = !1, kS.commit(!0)))
          },
          onDeactivate: () => {
            gS = null !== SS && GS() === SS, gS || (SS = null, HS = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);
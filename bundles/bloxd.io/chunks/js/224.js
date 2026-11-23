export const id = 224;
export const ids = [224];
export const modules = {
  36792: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => xC,
      e: () => AC
    });
    var QC = ZC(4198),
      wC = ZC(1383),
      bC = ZC(48),
      nC = ZC(6484),
      fC = ZC(4185),
      oC = ZC(1240),
      qC = ZC(1840),
      FC = ZC(1811),
      WC = ZC(1388),
      NC = ZC(1143),
      MC = ZC(36794),
      gC = ZC(1002),
      SC = ZC.n(gC),
      pC = ZC(1263),
      PC = ZC(1013),
      GC = ZC(1228),
      RC = ZC(1056);
    const AC = "SleepingOverlay";

    function xC() {
      const {
        t: CC
      } = (0, NC.y)(), [zC, ZC] = (0, bC.useState)(!1), [gC, xC] = (0, bC.useState)(null), [IC, iC] = (0, bC.useState)(1), [vC, eC] = (0, bC.useState)(!1), [hC, KC] = (0, bC.useState)(!1), YC = (0, bC.useRef)(0), dC = (0, bC.useRef)(!1), mC = (0, bC.useRef)(!1), HC = (0, bC.useRef)(), EC = (0, bC.useRef)(null);

      function lC() {
        const CC = null !== gC && void 0 !== gC ? gC : "Rested Speed";
        qC.gameBridge.send("wakeUp", hC ? CC : null), EC.current = null, ZC(!1), xC(null), iC(1), eC(!1), KC(!1)
      }

      function XC() {
        return !vC && (lC(), !0)
      }
      return (0, wC.c)("PlayerPhysicsTypeUpdate", (CC => {
        CC !== EC.current && (EC.current = CC, CC === nC.r.SLEEPING ? (mC.current || (YC.current = qC.gameBridge.lookup("cameraZoom", null), mC.current = !0), dC.current = !0, qC.gameBridge.send("setCameraZoom", 3), ZC(!0), iC(function() {
          for (const CC of qC.gameBridge.lookup("blocksStandingOn", null)) {
            if (MC.e.leafBeds.includes(CC)) return console.log(`Found leaf bed: ${CC}`), 1;
            if (MC.e.woolBeds.includes(CC)) return console.log(`Found woold bed: ${CC}`), 2;
            if (MC.e.strongBeds.includes(CC)) return console.log(`Found strong bed ${CC}`), 3
          }
          return 1
        }())) : (mC.current = !1, ZC(!1), xC(null), iC(1)))
      })), (0, bC.useEffect)((() => () => {
        (0, oC.s)(AC)
      }), []), (0, bC.useEffect)((() => {
        zC ? (0, oC.u)(AC) : ((0, oC.s)(AC), dC.current && (qC.gameBridge.send("setCameraZoom", YC.current), dC.current = !1))
      }), [zC]), (0, GC.u)("overlay", HC, XC, zC), (0, RC.jsx)(QC.c, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: zC,
        timeout: 300,
        nodeRef: HC,
        unmountOnExit: !0,
        children: (0, RC.jsx)("div", {
          ref: HC,
          onClick: CC => {
            XC() && CC.stopPropagation()
          },
          children: (0, RC.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, RC.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: fC.h.map((zC => (0, RC.jsxs)(JC, {
                restedEffect: zC,
                wF: gC,
                setChosenRestedEffect: xC,
                children: [(0, RC.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, RC.jsx)(FC.e, {
                    text: [{
                      icon: zC
                    }]
                  }), fC.g[zC].shortName]
                }), (0, RC.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: CC(fC.g[zC].description, {
                    time: fC.g[zC].effectLevelDurations[IC] / 6e4
                  })
                })]
              }, zC)))
            }), (0, RC.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, RC.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, RC.jsxs)(WC.g, {
                className: "SleepingOverlayWakeUpButton",
                onClick: CC => {
                  hC ? lC() : (eC(!0), (0, pC.U)((() => {
                    eC(!1), KC(!0)
                  }), !0)), CC.stopPropagation()
                },
                loading: vC,
                children: [!hC && (0, RC.jsxs)(RC.Fragment, {
                  children: [(0, RC.jsx)(PC.c, {
                    name: "film"
                  }), " ", CC("classicGame:watchAdToGetRestedPerk")]
                }), hC && CC("classicGame:wakeUp")]
              }), (0, RC.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, RC.jsx)("div", {
                  className: SC()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === IC
                  }),
                  children: (0, RC.jsx)(FC.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, RC.jsx)("div", {
                  className: SC()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === IC
                  }),
                  children: (0, RC.jsx)(FC.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, RC.jsx)("div", {
                  className: SC()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === IC
                  }),
                  children: (0, RC.jsx)(FC.e, {
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
    const JC = (0, bC.memo)((function(CC) {
      let {
        children: zC,
        restedEffect: ZC,
        wF: QC,
        setChosenRestedEffect: wC
      } = CC;
      return ZC === QC ? (0, RC.jsx)(WC.o, {
        onClick: CC => {
          CC.stopPropagation()
        },
        children: zC
      }) : (0, RC.jsx)(WC.i, {
        onClick: CC => {
          wC(ZC), CC.stopPropagation()
        },
        children: zC
      })
    }))
  },
  40405: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => LC
    });
    var QC = ZC(20),
      wC = ZC(28),
      bC = ZC(4219),
      nC = ZC(310),
      fC = ZC(1557),
      oC = ZC(8174),
      qC = ZC(4227),
      FC = ZC(8713),
      WC = ZC(8208),
      NC = ZC(8184),
      MC = ZC(8215),
      gC = ZC(1600),
      SC = ZC(8223),
      pC = ZC(8659),
      PC = ZC(8807),
      GC = ZC(8729),
      RC = ZC(8812),
      AC = ZC(1840),
      xC = ZC(8167),
      JC = ZC(8750),
      IC = ZC(8746),
      iC = ZC(8721);
    class vC {
      constructor() {
        this.lostAtMs = null
      }
      update(CC, zC) {
        return CC ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= zC, zC - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class eC {
      constructor(CC, zC) {
        this.press = CC, this.release = zC, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(CC, zC, ZC, QC) {
        if (CC && null === this.downAtMs) return this.downAtMs = ZC, this.latched = QC, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? CC && this.end() : !zC && ZC - this.downAtMs >= 40 && this.end())
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
        const CC = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(CC)
      }
    }
    const hC = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      KC = CC => {
        let zC = null;
        const ZC = new iC.d,
          QC = () => {
            zC && (((CC, zC, ZC) => {
              switch (ZC.kind) {
                case "reload":
                  return void zC.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void zC.specialActionUp(ZC.action);
                case "customButton":
                  return void AC.gameBridge.send("pressCustomButton", {
                    id: ZC.id,
                    down: !1
                  });
                case "touchButton":
                  CC.pressTouchButton(!1)
              }
            })(CC, zC.bodies, zC.action), zC = null)
          },
          bC = (ZC, wC, bC, nC) => {
            QC(), zC = {
              action: wC,
              bodies: ZC,
              heldBy: bC,
              atMs: nC
            }, ((CC, zC, ZC) => {
              switch (ZC.kind) {
                case "reload":
                  return zC.reloadGun(), void zC.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void zC.specialActionDown(ZC.action);
                case "customButton":
                  return void AC.gameBridge.send("pressCustomButton", {
                    id: ZC.id,
                    down: !0
                  });
                case "touchButton":
                  CC.pressTouchButton(!0)
              }
            })(CC, ZC, wC)
          };
        return {
          update: (nC, fC, qC, FC) => {
            var NC;
            const MC = (0, JC.l)(CC.contextActionInputs()),
              gC = null !== (NC = MC[0]) && void 0 !== NC ? NC : hC;
            (0, IC.b)((0, JC.f)(gC) ? gC : null);
            const SC = (0, JC.c)(MC);
            (0, IC.f)(SC);
            const pC = (0, oC.i)("actionButton");
            if (SC) {
              const CC = ZC.update(fC.wasPressed(pC), fC.isHeld(pC), qC, FC);
              "tap" === CC ? bC(nC, gC, [pC], qC) : "hold" === CC && (WC.c.consumeButton(pC), wC.o.bp(RC.o, MC))
            } else ZC.release(), fC.wasPressed(pC) && bC(nC, gC, [pC], qC);
            zC && qC - zC.atMs >= 40 && !zC.heldBy.some((CC => (0, xC.I)(fC.frame.values, CC))) && QC()
          },
          pressPicked: (CC, zC) => {
            bC(CC, zC, [(0, oC.i)("menuConfirm"), (0, oC.i)("actionButton")], performance.now())
          },
          release: () => {
            ZC.release(), QC(), (0, IC.b)(null), (0, IC.f)(!1)
          }
        }
      };
    var YC = ZC(8160);
    var dC = ZC(40396),
      mC = ZC(8757),
      HC = ZC(8203),
      EC = ZC(8847);
    var lC = ZC(40392),
      XC = ZC(8850),
      cC = ZC(40410),
      uC = ZC(8831),
      rC = ZC(8762),
      sC = ZC(8768),
      TC = ZC(8770),
      aC = ZC(8664);
    const tC = () => aC.b[(0, NC.k)().tapHoldTime].wheelMs,
      DC = () => ((0, FC.b)(), new Event("controllerMenuKey")),
      jC = (CC, zC, ZC) => new eC((() => {
        const ZC = CC.bodies();
        return {
          bodies: ZC,
          press: zC(ZC)
        }
      }), (CC => {
        let {
          bodies: zC,
          press: QC
        } = CC;
        ZC(zC, QC)
      })),
      yC = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      LC = CC => {
        const zC = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let ZC = yC;
        const FC = new cC.b,
          AC = wC.o.subscribe("appManagerUpdated|activeInputDevice", (zC => {
            CC.deviceChanged(zC)
          }));
        let JC = null,
          IC = 0;
        const eC = () => {
          JC = null, (0, rC.g)(null)
        };
        let hC = !1;
        const LC = new vC,
          UC = CC.look,
          BC = new iC.d,
          OC = new iC.d,
          kC = KC(CC),
          VC = wC.o.subscribe(RC.r, (zC => {
            kC.pressPicked(CC.bodies(), zC)
          })),
          Cz = jC(CC, (CC => CC.primaryFireDown()), ((CC, zC) => {
            CC.primaryFireUp(zC)
          })),
          zz = jC(CC, (CC => CC.altFireDown()), ((CC, zC) => {
            CC.altFireUp(zC)
          }));
        let Zz = !1,
          Qz = !1,
          wz = !1;
        const bz = (0, pC.d)(xC.ab),
          nz = (0, pC.d)(xC.ab),
          fz = new iC.d;
        let oz = !1;
        const qz = () => {
            bz.reset(), nz.reset(), fz.release(), (0, TC.f)(!1), UC.release(), Cz.cancel(), (0, sC.g)(!1), zz.cancel(), kC.release(), BC.release(), OC.release(), eC()
          },
          Fz = function() {
            let QC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            qz(), Qz = !1, QC || (Zz = !1, ZC = yC, Object.assign(zC, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), CC.stopMoving())
          },
          Wz = function(QC, wC, bC) {
            let nC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const fC = (0, NC.k)(),
              qC = (0, lC.f)(wC, fC.moveDeadzone),
              WC = (0, oC.i)("sprint");
            ZC = (0, lC.t)(ZC, {
              sprintPressed: QC.wasPressed(WC),
              magnitude: qC.magnitude,
              autoSprint: fC.autoSprint,
              nowMs: bC
            }), zC.running = ZC.running, zC.sprintHeld = QC.isHeld(WC), zC.x = qC.x, zC.y = qC.y, zC.magnitude = qC.speed, zC.headingOffset = qC.headingOffset, Zz = qC.magnitude > 0;
            const MC = (0, oC.i)("jump");
            if (zC.jumpHeld = QC.isHeld(MC), zC.jumpPressed = QC.wasPressed(MC), zC.jumpPressed && CC.bodies().jumpDown(), nC) return void CC.move(zC, null);
            const gC = (0, oC.i)("sneak"),
              SC = FC.filter({
                sneakHeld: QC.isHeld(gC),
                sneakPressed: QC.wasPressed(gC),
                sneakTogglePressed: QC.wasPressed((0, oC.i)("sneakToggle"))
              }, bC);
            CC.move(zC, {
              ...SC,
              mode: fC.sneakMode
            })
          },
          Nz = (CC, zC) => {
            const ZC = (0, oC.i)("chat");
            if ("off" === (0, NC.k)().quickChat) return void(CC.wasPressed(ZC) && (WC.c.consumeButton(ZC), wC.o.bp(mC.e)));
            const QC = BC.update(CC.wasPressed(ZC), CC.isHeld(ZC), zC, tC());
            "tap" === QC || "hold" === QC && null === (0, gC.e)() ? wC.o.bp(mC.e) : "hold" === QC && (WC.c.consumeButton(ZC), wC.o.bp(GC.n))
          },
          Mz = (zC, ZC) => {
            ((CC, zC) => {
              const ZC = (0, PC.b)(),
                QC = (0, oC.i)("emoteWheel");
              if ("wheel" === (0, NC.k)().emoteButton) return CC.wasPressed(QC) && (WC.c.consumeButton(QC), wC.o.bp("requestEmoteWheelPadOpen", !0)), (0, PC.b)() !== ZC;
              const bC = OC.update(CC.wasPressed(QC), CC.isHeld(QC), zC, tC());
              return "tap" === bC ? wC.o.bp("requestEmoteRepeatLast") : "hold" === bC && (WC.c.consumeButton(QC), wC.o.bp("requestEmoteWheelPadOpen", !1)), (0, PC.b)() !== ZC
            })(zC, ZC) || Nz(zC, ZC), zC.wasPressed((0, oC.i)("inventory")) && (WC.c.consumeButton((0, oC.i)("inventory")), (0, fC.D)(DC(), "inventory", CC.hasFullInventory())), zC.wasPressed((0, oC.i)("pause")) && (WC.c.consumeButton((0, oC.i)("pause")), (0, qC.e)() === nC.o.SOCIAL ? (0, fC.A)(DC(), nC.o.SOCIAL) : (0, fC.i)(DC())), zC.wasPressed((0, oC.i)("leaderboard")) && !(0, bC.g)() && (WC.c.consumeButton((0, oC.i)("leaderboard")), ((CC, zC) => {
              if ("shop" === (0, HC.b)()) return wC.o.bp(EC.m), void(0, fC.A)(CC, nC.o.SHOP, !0);
              (0, fC.A)(CC, nC.o.LOBBY_LEADERBOARD, zC)
            })(DC(), CC.hasLobbyTab()))
          },
          gz = (zC, ZC) => {
            const QC = CC.bodies();
            ((zC, ZC) => {
              const QC = (0, oC.i)("attack"),
                wC = zC.wasPressed(QC);
              wC && !Cz.isLatched() && (hC = CC.targetsBlock()), Cz.update(wC, zC.isHeld(QC), ZC, "toggle" === (0, NC.k)().attackMode), Cz.isLatched() && hC ? LC.update(CC.targetsBlock(), ZC) && Cz.unlatch() : LC.reset(), (0, sC.g)(Cz.isLatched())
            })(zC, ZC), zz.update(zC.wasPressed((0, oC.i)("use")), zC.isHeld((0, oC.i)("use")), ZC, !1), bz.update(zC.isHeld((0, oC.i)("hotbarPrevious")), ZC) && CC.scrollHotbar(-1), nz.update(zC.isHeld((0, oC.i)("hotbarNext")), ZC) && CC.scrollHotbar(1), ((zC, ZC, QC) => {
              const wC = (0, oC.i)("perspective"),
                bC = (0, oC.i)("pickBlock"),
                nC = CC.pickBlockAllowed();
              (0, TC.f)(nC && !oz && CC.targetsBlock());
              const fC = () => {
                ZC.pickBlock() && (oz = !0, (0, TC.f)(!1))
              };
              if (!nC || bC !== wC) return fz.release(), zC.wasPressed(wC) && ZC.swapCameraZoom(), void(nC && zC.wasPressed(bC) && fC());
              const qC = fz.update(zC.wasPressed(bC), zC.isHeld(bC), QC, tC());
              "tap" === qC ? fC() : "hold" === qC && ZC.swapCameraZoom()
            })(zC, QC, ZC), ((zC, ZC, QC) => {
              const wC = (0, oC.i)("drop");
              if (zC.wasPressed(wC)) {
                ZC.dropItem(!1);
                const CC = (0, NC.k)();
                "off" !== CC.buttonRepeat && (JC = QC, IC = aC.b[CC.tapHoldTime].dropStackMs, (0, rC.g)(IC))
              }
              null !== JC && (!zC.isHeld(wC) || CC.selectedSlotEmpty() ? eC() : QC - JC >= IC && (eC(), ZC.dropItem(!0)))
            })(zC, QC, ZC), kC.update(QC, zC, ZC, tC()), Mz(zC, ZC)
          },
          Sz = WC.c.register({
            name: "gameplay",
            isActive: () => {
              const zC = Zz && "keyboardMouse" === QC.b.get("activeInputDevice") && !(0, MC.C)(),
                ZC = (0, MC.k)() ? [dC.d] : [];
              return ((0, MC.k)() || zC) && (0, SC.e)(ZC) && CC.hasPlayer()
            },
            onFrame: CC => {
              const zC = performance.now(),
                ZC = (0, NC.k)(),
                QC = (0, lC.w)(CC, (0, lC.l)(ZC, (0, oC.i)("pause"), (0, XC.b)().isSupported())),
                wC = (0, lC.j)(QC, ZC.swapSticks);
              return (0, MC.k)() ? (Qz = !1, (0, SC.e)() ? (wz = !1, UC.update(wC.look, ZC, QC.isHeld((0, oC.i)("use"))), Wz(QC, wC.move, zC), void gz(QC, zC)) : (wz || (wz = !0, FC.lostToPadScreen(), Fz()), void Nz(QC, zC))) : (Qz || (qz(), Qz = !0), void Wz(QC, wC.move, zC))
            },
            onDeactivate: CC => {
              (0, MC.k)() && FC.lostToPadScreen(), Fz(CC)
            },
            onPeekFrame: zC => {
              (0, MC.k)() && (0, SC.e)(dC.g) && CC.hasPlayer() ? Wz(zC, (0, lC.j)(zC, (0, NC.k)().swapSticks).move, performance.now(), !0) : Fz()
            }
          }),
          pz = (0, dC.e)(CC),
          Pz = (() => {
            const CC = wC.o.subscribe(YC.e, (CC => {
              !CC && (0, MC.k)() && "inGame" === QC.b.get("gameState") && wC.o.bp("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              wC.o.unsubscribe(CC)
            }
          })();
        return () => {
          Fz(), CC.uninstall(), (0, uC.e)(!1), (0, TC.f)(!1), wC.o.unsubscribe(AC), wC.o.unsubscribe(VC), Sz(), pz(), Pz(), UC.uninstall()
        }
      }
  },
  40396: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => gC,
      e: () => pC,
      g: () => MC
    });
    var QC = ZC(1240),
      wC = ZC(4219),
      bC = ZC(8799),
      nC = ZC(36792),
      fC = ZC(1637),
      oC = ZC(1134),
      qC = ZC(8223),
      FC = ZC(8729),
      WC = ZC(8812);
    const NC = {
        emoteWheel: bC.g,
        quickChatWheel: FC.d,
        actionWheel: WC.u
      },
      MC = Object.keys(NC),
      gC = "dead",
      SC = CC => (0, QC.p)().includes(CC),
      pC = CC => {
        const zC = [(0, qC.m)(gC, (() => CC.hasPlayer() && CC.isPlayerDead())), (0, qC.m)("sleeping", (() => SC(nC.e))), (0, qC.m)("turnstile", (() => SC(oC.d))), (0, qC.m)("videoAd", fC.f), (0, qC.m)("replay", (() => (0, wC.g)() || CC.isReplayMode())), (0, qC.m)("freeCamera", (() => CC.isFreeCameraOn())), ...Object.entries(NC).map((CC => {
          let [zC, ZC] = CC;
          return (0, qC.m)(zC, ZC)
        }))];
        return () => {
          for (const CC of zC) CC()
        }
      }
  },
  40392: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC,
      f: () => oC,
      j: () => fC,
      l: () => FC,
      n: () => nC,
      p: () => bC,
      t: () => qC,
      w: () => WC
    });
    var QC = ZC(8167);
    class wC {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(CC, zC, ZC) {
        const wC = (0, QC.i)(CC, zC.lookDeadzone);
        if (Math.hypot(wC.x, wC.y) < .9 || Math.abs(wC.x) < Math.abs(wC.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = ZC);
        const bC = (nC = zC.lookSensitivityX, Math.min(1, 100 / nC));
        var nC;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (ZC - this.fullTiltSinceMs - 250 * bC) / (200 * bC)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const bC = (CC, zC, ZC, wC, bC) => {
        let nC = 1;
        return "boost" === ZC.lookCurve ? nC = CC.update(zC, ZC, bC) : CC.reset(),
          function(CC, zC) {
            let {
              yawBoost: ZC = 1,
              aiming: wC = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const bC = (0, QC.h)((0, QC.i)(CC, zC.lookDeadzone), zC.lookCurve),
              nC = 220 * Math.PI / 180,
              fC = wC ? zC.aimLookSensitivity / 100 : 1,
              oC = zC.lookSensitivityX / 100 * fC,
              qC = zC.lookSensitivityY / 100 * fC;
            return {
              yawRadPerSec: bC.x * nC * oC * ZC * (zC.invertLookX ? -1 : 1),
              pitchRadPerSec: bC.y * nC * .7 * qC * (zC.invertLookY ? -1 : 1)
            }
          }(zC, ZC, {
            yawBoost: nC,
            aiming: wC
          })
      },
      nC = (CC, zC) => {
        const ZC = Math.max(0, Math.min(250, zC)) / 1e3;
        return {
          VY: CC.yawRadPerSec * ZC,
          Zm: CC.pitchRadPerSec * ZC
        }
      },
      fC = (CC, zC) => zC ? {
        move: CC.rightStick,
        look: CC.leftStick
      } : {
        move: CC.leftStick,
        look: CC.rightStick
      },
      oC = (CC, zC) => {
        const ZC = (0, QC.i)(CC, zC),
          wC = Math.min(1, Math.hypot(ZC.x, ZC.y));
        return {
          magnitude: wC,
          speed: Math.min(1, wC / .8),
          headingOffset: 0 === wC ? 0 : Math.atan2(ZC.x, -ZC.y),
          x: ZC.x,
          y: ZC.y
        }
      },
      qC = (CC, zC) => {
        let {
          sprintPressed: ZC,
          magnitude: QC,
          autoSprint: wC,
          nowMs: bC
        } = zC;
        const nC = ZC ? bC : CC.latchedAtMs,
          fC = (CC => {
            let {
              running: zC,
              magnitude: ZC,
              sprintPressed: QC,
              autoSprint: wC
            } = CC;
            return !(ZC < .5) && (!!QC || !!(wC && ZC >= .9) || zC)
          })({
            running: CC.running,
            magnitude: QC,
            sprintPressed: bC - nC <= 1e3,
            autoSprint: wC
          });
        return {
          running: fC,
          latchedAtMs: fC ? -1 / 0 : nC
        }
      },
      FC = (CC, zC, ZC) => ZC && CC.gyroAiming && "button" === CC.gyroActivation && CC.gyroButton !== zC ? CC.gyroButton : null,
      WC = (CC, zC) => zC ? {
        ...CC,
        isHeld: ZC => ZC !== zC && CC.isHeld(ZC),
        wasPressed: ZC => ZC !== zC && CC.wasPressed(ZC),
        wasReleased: ZC => ZC !== zC && CC.wasReleased(ZC),
        value: ZC => ZC === zC ? 0 : CC.value(ZC)
      } : CC
  },
  40410: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC,
      e: () => QC
    });
    const QC = CC => {
      let {
        mode: zC,
        sneakHeld: ZC,
        sneakPressed: QC,
        sneakTogglePressed: wC,
        descending: bC,
        canCrouch: nC,
        toggled: fC
      } = CC;
      return nC ? bC ? {
        crouchHeld: ZC,
        toggled: !1
      } : "hold" === zC ? {
        crouchHeld: ZC,
        toggled: wC ? !fC : fC
      } : {
        crouchHeld: !1,
        toggled: QC || wC ? !fC : fC
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class wC {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(CC, zC) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = zC, this.graceEndsMs = zC + 500);
        const ZC = zC < this.graceEndsMs;
        return ZC && (CC.sneakPressed || CC.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, zC + 300))), CC.sneakHeld ? ZC && CC.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: CC.sneakHeld && !this.ignoringHeld,
          sneakPressed: CC.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: CC.sneakTogglePressed && !ZC
        }
      }
    }
  },
  40381: (CC, zC, ZC) => {
    ZC(8850)
  },
  40389: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => RC
    });
    var QC = ZC(28),
      wC = ZC(8799),
      bC = ZC(8803),
      nC = ZC(8174),
      fC = ZC(8208),
      oC = ZC(8184),
      qC = ZC(40392),
      FC = ZC(40396),
      WC = ZC(8223),
      NC = ZC(8167),
      MC = ZC(8729),
      gC = ZC(8812);
    const SC = [{
        isOpen: wC.h,
        openButton: () => (0, nC.i)("emoteWheel"),
        aim: CC => {
          QC.o.bp("emoteWheelPadAim", CC)
        },
        commit: CC => {
          QC.o.bp("requestEmoteWheelPadCommit", CC)
        },
        close: () => {
          QC.o.bp("requestEmoteWheelClose")
        }
      }, {
        isOpen: MC.d,
        openButton: () => (0, nC.i)("chat"),
        aim: CC => {
          QC.o.bp(MC.e, CC)
        },
        commit: CC => {
          QC.o.bp(MC.l, CC)
        },
        close: () => {
          QC.o.bp(MC.h)
        },
        keptOpenBy: [FC.d]
      }, {
        isOpen: gC.u,
        openButton: () => (0, nC.i)("actionButton"),
        aim: CC => {
          QC.o.bp(gC.e, CC)
        },
        commit: CC => {
          QC.o.bp(gC.k, CC)
        },
        close: () => {
          QC.o.bp(gC.i)
        }
      }],
      pC = () => {
        var CC;
        return null !== (CC = SC.find((CC => CC.isOpen()))) && void 0 !== CC ? CC : null
      },
      PC = CC => (0, nC.J)(CC.openButton()),
      GC = (CC, zC) => !(0, NC.I)(CC.frame.values, zC),
      RC = () => {
        let CC = null,
          zC = !1,
          ZC = !1;
        return fC.c.register({
          name: "wheel",
          isActive: () => null !== pC(),
          peek: () => {
            const CC = pC();
            return CC && PC(CC) ? null : {
              over: "gameplay",
              stick: (0, oC.k)().swapSticks ? "right" : "left"
            }
          },
          onFrame: QC => {
            var wC;
            const NC = pC();
            if (!NC) return;
            if (null !== (0, WC.b)([...FC.g, ...null !== (wC = NC.keptOpenBy) && void 0 !== wC ? wC : []])) return void NC.close();
            const MC = NC.openButton(),
              gC = (0, qC.j)(QC.frame, (0, oC.k)().swapSticks),
              SC = PC(NC) ? gC.move : gC.look;
            CC !== NC ? (CC = NC, zC = !GC(QC, MC) || Math.hypot(SC.x, SC.y) >= bC.w, ZC = !1) : ZC && (ZC = !1, GC(QC, MC) && (zC = !1)), NC.aim(SC);
            const RC = (0, nC.i)("menuConfirm"),
              AC = (0, nC.i)("menuBack");
            return QC.wasPressed(AC) ? (fC.c.consumeButton(AC), void NC.close()) : QC.wasPressed(RC) || QC.wasPressed(MC) ? (fC.c.consumeButton(RC), fC.c.consumeButton(MC), void NC.commit(!1)) : void(zC && GC(QC, MC) && (zC = !1, NC.commit(!0)))
          },
          onDeactivate: () => {
            ZC = null !== CC && pC() === CC, ZC || (CC = null, zC = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);
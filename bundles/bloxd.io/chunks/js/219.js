export const id = 219;
export const ids = [219];
export const modules = {
  36549: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => cQ,
      g: () => pQ
    });
    var LQ = wQ(4144),
      qQ = wQ(1447),
      oQ = wQ(53),
      DQ = wQ(6314),
      kQ = wQ(4127),
      vQ = wQ(1302),
      mQ = wQ(1897),
      uQ = wQ(1873),
      HQ = wQ(1451),
      bQ = wQ(1207),
      YQ = wQ(36554),
      xQ = wQ(1070),
      AQ = wQ.n(xQ),
      tQ = wQ(1326),
      eQ = wQ(1079),
      MQ = wQ(1295),
      GQ = wQ(1107);
    const pQ = "SleepingOverlay";

    function cQ() {
      const {
        t: QQ
      } = (0, bQ.y)(), [FQ, wQ] = (0, oQ.useState)(!1), [xQ, cQ] = (0, oQ.useState)(null), [SQ, iQ] = (0, oQ.useState)(1), [WQ, RQ] = (0, oQ.useState)(!1), [OQ, sQ] = (0, oQ.useState)(!1), rQ = (0, oQ.useRef)(0), IQ = (0, oQ.useRef)(!1), UQ = (0, oQ.useRef)(!1), NQ = (0, oQ.useRef)(), TQ = (0, oQ.useRef)(null);

      function KQ() {
        const QQ = null !== xQ && void 0 !== xQ ? xQ : "Rested Speed";
        mQ.gameBridge.send("wakeUp", OQ ? QQ : null), TQ.current = null, wQ(!1), cQ(null), iQ(1), RQ(!1), sQ(!1)
      }

      function zQ() {
        return !WQ && (KQ(), !0)
      }
      return (0, qQ.g)("PlayerPhysicsTypeUpdate", (QQ => {
        QQ !== TQ.current && (TQ.current = QQ, QQ === DQ.r.SLEEPING ? (UQ.current || (rQ.current = mQ.gameBridge.lookup("cameraZoom", null), UQ.current = !0), IQ.current = !0, mQ.gameBridge.send("setCameraZoom", 3), wQ(!0), iQ(function() {
          for (const QQ of mQ.gameBridge.lookup("blocksStandingOn", null)) {
            if (YQ.d.leafBeds.includes(QQ)) return console.log(`Found leaf bed: ${QQ}`), 1;
            if (YQ.d.woolBeds.includes(QQ)) return console.log(`Found woold bed: ${QQ}`), 2;
            if (YQ.d.strongBeds.includes(QQ)) return console.log(`Found strong bed ${QQ}`), 3
          }
          return 1
        }())) : (UQ.current = !1, wQ(!1), cQ(null), iQ(1)))
      })), (0, oQ.useEffect)((() => () => {
        (0, vQ.l)(pQ)
      }), []), (0, oQ.useEffect)((() => {
        FQ ? (0, vQ.n)(pQ) : ((0, vQ.l)(pQ), IQ.current && (mQ.gameBridge.send("setCameraZoom", rQ.current), IQ.current = !1))
      }), [FQ]), (0, MQ.m)("overlay", NQ, zQ, FQ), (0, GQ.jsx)(LQ.c, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: FQ,
        timeout: 300,
        nodeRef: NQ,
        unmountOnExit: !0,
        children: (0, GQ.jsx)("div", {
          ref: NQ,
          onClick: QQ => {
            zQ() && QQ.stopPropagation()
          },
          children: (0, GQ.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, GQ.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: kQ.h.map((FQ => (0, GQ.jsxs)(CQ, {
                restedEffect: FQ,
                cD: xQ,
                setChosenRestedEffect: cQ,
                children: [(0, GQ.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, GQ.jsx)(uQ.e, {
                    text: [{
                      icon: FQ
                    }]
                  }), kQ.g[FQ].shortName]
                }), (0, GQ.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: QQ(kQ.g[FQ].description, {
                    time: kQ.g[FQ].effectLevelDurations[SQ] / 6e4
                  })
                })]
              }, FQ)))
            }), (0, GQ.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, GQ.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, GQ.jsxs)(HQ.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: QQ => {
                  OQ ? KQ() : (RQ(!0), (0, tQ.db)((() => {
                    RQ(!1), sQ(!0)
                  }), !0)), QQ.stopPropagation()
                },
                loading: WQ,
                children: [!OQ && (0, GQ.jsxs)(GQ.Fragment, {
                  children: [(0, GQ.jsx)(eQ.c, {
                    name: "film"
                  }), " ", QQ("classicGame:watchAdToGetRestedPerk")]
                }), OQ && QQ("classicGame:wakeUp")]
              }), (0, GQ.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, GQ.jsx)("div", {
                  className: AQ()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === SQ
                  }),
                  children: (0, GQ.jsx)(uQ.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, GQ.jsx)("div", {
                  className: AQ()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === SQ
                  }),
                  children: (0, GQ.jsx)(uQ.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, GQ.jsx)("div", {
                  className: AQ()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === SQ
                  }),
                  children: (0, GQ.jsx)(uQ.e, {
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
    const CQ = (0, oQ.memo)((function(QQ) {
      let {
        children: FQ,
        restedEffect: wQ,
        cD: LQ,
        setChosenRestedEffect: qQ
      } = QQ;
      return wQ === LQ ? (0, GQ.jsx)(HQ.m, {
        onClick: QQ => {
          QQ.stopPropagation()
        },
        children: FQ
      }) : (0, GQ.jsx)(HQ.i, {
        onClick: QQ => {
          qQ(wQ), QQ.stopPropagation()
        },
        children: FQ
      })
    }))
  },
  39989: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => gQ
    });
    var LQ = wQ(17),
      qQ = wQ(22),
      oQ = wQ(4159),
      DQ = wQ(307),
      kQ = wQ(1641),
      vQ = wQ(7959),
      mQ = wQ(4170),
      uQ = wQ(8447),
      HQ = wQ(7994),
      bQ = wQ(7972),
      YQ = wQ(7996),
      xQ = wQ(1690),
      AQ = wQ(8005),
      tQ = wQ(8397),
      eQ = wQ(8557),
      MQ = wQ(8462),
      GQ = wQ(8566),
      pQ = wQ(1897),
      cQ = wQ(7950),
      CQ = wQ(8485),
      SQ = wQ(8477),
      iQ = wQ(8456);
    class WQ {
      constructor() {
        this.lostAtMs = null
      }
      update(QQ, FQ) {
        return QQ ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= FQ, FQ - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class RQ {
      constructor(QQ, FQ) {
        this.press = QQ, this.release = FQ, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(QQ, FQ, wQ, LQ) {
        if (QQ && null === this.downAtMs) return this.downAtMs = wQ, this.latched = LQ, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? QQ && this.end() : !FQ && wQ - this.downAtMs >= 40 && this.end())
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
        const QQ = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(QQ)
      }
    }
    const OQ = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      sQ = QQ => {
        let FQ = null;
        const wQ = new iQ.c,
          LQ = () => {
            FQ && (((QQ, FQ, wQ) => {
              switch (wQ.kind) {
                case "reload":
                  return void FQ.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void FQ.specialActionUp(wQ.action);
                case "customButton":
                  return void pQ.gameBridge.send("pressCustomButton", {
                    id: wQ.id,
                    down: !1
                  });
                case "touchButton":
                  QQ.pressTouchButton(!1)
              }
            })(QQ, FQ.bodies, FQ.action), FQ = null)
          },
          oQ = (wQ, qQ, oQ, DQ) => {
            LQ(), FQ = {
              action: qQ,
              bodies: wQ,
              heldBy: oQ,
              atMs: DQ
            }, ((QQ, FQ, wQ) => {
              switch (wQ.kind) {
                case "reload":
                  return FQ.reloadGun(), void FQ.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void FQ.specialActionDown(wQ.action);
                case "customButton":
                  return void pQ.gameBridge.send("pressCustomButton", {
                    id: wQ.id,
                    down: !0
                  });
                case "touchButton":
                  QQ.pressTouchButton(!0)
              }
            })(QQ, wQ, qQ)
          };
        return {
          update: (DQ, kQ, mQ, uQ) => {
            var bQ;
            const YQ = (0, CQ.j)(QQ.contextActionInputs()),
              xQ = null !== (bQ = YQ[0]) && void 0 !== bQ ? bQ : OQ;
            (0, SQ.b)((0, CQ.f)(xQ) ? xQ : null);
            const AQ = (0, CQ.b)(YQ);
            (0, SQ.d)(AQ);
            const tQ = (0, vQ.g)("actionButton");
            if (AQ) {
              const QQ = wQ.update(kQ.wasPressed(tQ), kQ.isHeld(tQ), mQ, uQ);
              "tap" === QQ ? oQ(DQ, xQ, [tQ], mQ) : "hold" === QQ && (HQ.b.consumeButton(tQ), qQ.l.GA(GQ.l, YQ))
            } else wQ.release(), kQ.wasPressed(tQ) && oQ(DQ, xQ, [tQ], mQ);
            FQ && mQ - FQ.atMs >= 40 && !FQ.heldBy.some((QQ => (0, cQ.J)(kQ.frame.values, QQ))) && LQ()
          },
          pressPicked: (QQ, FQ) => {
            oQ(QQ, FQ, [(0, vQ.g)("menuConfirm"), (0, vQ.g)("actionButton")], performance.now())
          },
          release: () => {
            wQ.release(), LQ(), (0, SQ.b)(null), (0, SQ.d)(!1)
          }
        }
      };
    var rQ = wQ(7945);
    var IQ = wQ(39983),
      UQ = wQ(8497),
      NQ = wQ(7986),
      TQ = wQ(8611);
    var KQ = wQ(39978),
      zQ = wQ(8614),
      lQ = wQ(39994),
      jQ = wQ(8596),
      aQ = wQ(8503),
      XQ = wQ(8506),
      fQ = wQ(8510),
      VQ = wQ(8399);
    const hQ = () => VQ.b[(0, bQ.h)().tapHoldTime].wheelMs,
      JQ = () => ((0, uQ.b)(), new Event("controllerMenuKey")),
      EQ = (QQ, FQ, wQ) => new RQ((() => {
        const wQ = QQ.bodies();
        return {
          bodies: wQ,
          press: FQ(wQ)
        }
      }), (QQ => {
        let {
          bodies: FQ,
          press: LQ
        } = QQ;
        wQ(FQ, LQ)
      })),
      nQ = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      gQ = QQ => {
        const FQ = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let wQ = nQ;
        const uQ = new lQ.d,
          pQ = qQ.l.subscribe("appManagerUpdated|activeInputDevice", (FQ => {
            QQ.deviceChanged(FQ)
          }));
        let CQ = null,
          SQ = 0;
        const RQ = () => {
          CQ = null, (0, aQ.d)(null)
        };
        let OQ = !1;
        const gQ = new WQ,
          PQ = QQ.look,
          ZQ = new iQ.c,
          yQ = new iQ.c,
          BQ = sQ(QQ),
          dQ = qQ.l.subscribe(GQ.o, (FQ => {
            BQ.pressPicked(QQ.bodies(), FQ)
          })),
          QF = EQ(QQ, (QQ => QQ.primaryFireDown()), ((QQ, FQ) => {
            QQ.primaryFireUp(FQ)
          })),
          FF = EQ(QQ, (QQ => QQ.altFireDown()), ((QQ, FQ) => {
            QQ.altFireUp(FQ)
          }));
        let wF = !1,
          LF = !1,
          qF = !1;
        const oF = (0, tQ.d)(cQ.Z),
          DF = (0, tQ.d)(cQ.Z),
          kF = new iQ.c;
        let vF = !1;
        const mF = () => {
            oF.reset(), DF.reset(), kF.release(), (0, fQ.f)(!1), PQ.release(), QF.cancel(), (0, XQ.f)(!1), FF.cancel(), BQ.release(), ZQ.release(), yQ.release(), RQ()
          },
          uF = function() {
            let LQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            mF(), LF = !1, LQ || (wF = !1, wQ = nQ, Object.assign(FQ, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), QQ.stopMoving())
          },
          HF = function(LQ, qQ, oQ) {
            let DQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const kQ = (0, bQ.h)(),
              mQ = (0, KQ.e)(qQ, kQ.moveDeadzone),
              HQ = (0, vQ.g)("sprint");
            wQ = (0, KQ.p)(wQ, {
              sprintPressed: LQ.wasPressed(HQ),
              magnitude: mQ.magnitude,
              autoSprint: kQ.autoSprint,
              nowMs: oQ
            }), FQ.running = wQ.running, FQ.sprintHeld = LQ.isHeld(HQ), FQ.x = mQ.x, FQ.y = mQ.y, FQ.magnitude = mQ.speed, FQ.headingOffset = mQ.headingOffset, wF = mQ.magnitude > 0;
            const YQ = (0, vQ.g)("jump");
            if (FQ.jumpHeld = LQ.isHeld(YQ), FQ.jumpPressed = LQ.wasPressed(YQ), FQ.jumpPressed && QQ.bodies().jumpDown(), DQ) return void QQ.move(FQ, null);
            const xQ = (0, vQ.g)("sneak"),
              AQ = uQ.filter({
                sneakHeld: LQ.isHeld(xQ),
                sneakPressed: LQ.wasPressed(xQ),
                sneakTogglePressed: LQ.wasPressed((0, vQ.g)("sneakToggle"))
              }, oQ);
            QQ.move(FQ, {
              ...AQ,
              mode: kQ.sneakMode
            })
          },
          bF = (QQ, FQ) => {
            const wQ = (0, vQ.g)("chat");
            if ("off" === (0, bQ.h)().quickChat) return void(QQ.wasPressed(wQ) && (HQ.b.consumeButton(wQ), qQ.l.GA(UQ.b)));
            const LQ = ZQ.update(QQ.wasPressed(wQ), QQ.isHeld(wQ), FQ, hQ());
            "tap" === LQ || "hold" === LQ && null === (0, xQ.d)() ? qQ.l.GA(UQ.b) : "hold" === LQ && (HQ.b.consumeButton(wQ), qQ.l.GA(MQ.l))
          },
          YF = (FQ, wQ) => {
            ((QQ, FQ) => {
              const wQ = (0, eQ.d)(),
                LQ = (0, vQ.g)("emoteWheel");
              if ("wheel" === (0, bQ.h)().emoteButton) return QQ.wasPressed(LQ) && (HQ.b.consumeButton(LQ), qQ.l.GA("requestEmoteWheelPadOpen", !0)), (0, eQ.d)() !== wQ;
              const oQ = yQ.update(QQ.wasPressed(LQ), QQ.isHeld(LQ), FQ, hQ());
              return "tap" === oQ ? qQ.l.GA("requestEmoteRepeatLast") : "hold" === oQ && (HQ.b.consumeButton(LQ), qQ.l.GA("requestEmoteWheelPadOpen", !1)), (0, eQ.d)() !== wQ
            })(FQ, wQ) || bF(FQ, wQ), FQ.wasPressed((0, vQ.g)("inventory")) && (HQ.b.consumeButton((0, vQ.g)("inventory")), (0, kQ.w)(JQ(), "inventory", QQ.hasFullInventory())), FQ.wasPressed((0, vQ.g)("pause")) && (HQ.b.consumeButton((0, vQ.g)("pause")), (0, mQ.c)() === DQ.n.SOCIAL ? (0, kQ.s)(JQ(), DQ.n.SOCIAL) : (0, kQ.h)(JQ())), FQ.wasPressed((0, vQ.g)("leaderboard")) && !(0, oQ.f)() && (HQ.b.consumeButton((0, vQ.g)("leaderboard")), ((QQ, FQ) => {
              if ("shop" === (0, NQ.c)()) return qQ.l.GA(TQ.k), void(0, kQ.s)(QQ, DQ.n.SHOP, !0);
              (0, kQ.s)(QQ, DQ.n.LOBBY_LEADERBOARD, FQ)
            })(JQ(), QQ.hasLobbyTab()))
          },
          xF = (FQ, wQ) => {
            const LQ = QQ.bodies();
            ((FQ, wQ) => {
              const LQ = (0, vQ.g)("attack"),
                qQ = FQ.wasPressed(LQ);
              qQ && !QF.isLatched() && (OQ = QQ.targetsBlock()), QF.update(qQ, FQ.isHeld(LQ), wQ, "toggle" === (0, bQ.h)().attackMode), QF.isLatched() && OQ ? gQ.update(QQ.targetsBlock(), wQ) && QF.unlatch() : gQ.reset(), (0, XQ.f)(QF.isLatched())
            })(FQ, wQ), FF.update(FQ.wasPressed((0, vQ.g)("use")), FQ.isHeld((0, vQ.g)("use")), wQ, !1), oF.update(FQ.isHeld((0, vQ.g)("hotbarPrevious")), wQ) && QQ.scrollHotbar(-1), DF.update(FQ.isHeld((0, vQ.g)("hotbarNext")), wQ) && QQ.scrollHotbar(1), ((FQ, wQ, LQ) => {
              const qQ = (0, vQ.g)("perspective"),
                oQ = (0, vQ.g)("pickBlock"),
                DQ = QQ.pickBlockAllowed();
              (0, fQ.f)(DQ && !vF && QQ.targetsBlock());
              const kQ = () => {
                wQ.pickBlock() && (vF = !0, (0, fQ.f)(!1))
              };
              if (!DQ || oQ !== qQ) return kF.release(), FQ.wasPressed(qQ) && wQ.swapCameraZoom(), void(DQ && FQ.wasPressed(oQ) && kQ());
              const mQ = kF.update(FQ.wasPressed(oQ), FQ.isHeld(oQ), LQ, hQ());
              "tap" === mQ ? kQ() : "hold" === mQ && wQ.swapCameraZoom()
            })(FQ, LQ, wQ), ((FQ, wQ, LQ) => {
              const qQ = (0, vQ.g)("drop");
              if (FQ.wasPressed(qQ)) {
                wQ.dropItem(!1);
                const QQ = (0, bQ.h)();
                "off" !== QQ.buttonRepeat && (CQ = LQ, SQ = VQ.b[QQ.tapHoldTime].dropStackMs, (0, aQ.d)(SQ))
              }
              null !== CQ && (!FQ.isHeld(qQ) || QQ.selectedSlotEmpty() ? RQ() : LQ - CQ >= SQ && (RQ(), wQ.dropItem(!0)))
            })(FQ, LQ, wQ), BQ.update(LQ, FQ, wQ, hQ()), YF(FQ, wQ)
          },
          AF = HQ.b.register({
            name: "gameplay",
            isActive: () => {
              const FQ = wF && "keyboardMouse" === LQ.c.get("activeInputDevice") && !(0, YQ.J)(),
                wQ = (0, YQ.j)() ? [IQ.c] : [];
              return ((0, YQ.j)() || FQ) && (0, AQ.g)(wQ) && QQ.hasPlayer()
            },
            onFrame: QQ => {
              const FQ = performance.now(),
                wQ = (0, bQ.h)(),
                LQ = (0, KQ.q)(QQ, (0, KQ.k)(wQ, (0, vQ.g)("pause"), (0, zQ.d)().isSupported())),
                qQ = (0, KQ.i)(LQ, wQ.swapSticks);
              return (0, YQ.j)() ? (LF = !1, (0, AQ.g)() ? (qF = !1, PQ.update(qQ.look, wQ, LQ.isHeld((0, vQ.g)("use"))), HF(LQ, qQ.move, FQ), void xF(LQ, FQ)) : (qF || (qF = !0, uQ.lostToPadScreen(), uF()), void bF(LQ, FQ))) : (LF || (mF(), LF = !0), void HF(LQ, qQ.move, FQ))
            },
            onDeactivate: QQ => {
              (0, YQ.j)() && uQ.lostToPadScreen(), uF(QQ)
            },
            onPeekFrame: FQ => {
              (0, YQ.j)() && (0, AQ.g)(IQ.i) && QQ.hasPlayer() ? HF(FQ, (0, KQ.i)(FQ, (0, bQ.h)().swapSticks).move, performance.now(), !0) : uF()
            }
          }),
          tF = (0, IQ.g)(QQ),
          eF = (() => {
            const QQ = qQ.l.subscribe(rQ.e, (QQ => {
              !QQ && (0, YQ.j)() && "inGame" === LQ.c.get("gameState") && qQ.l.GA("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              qQ.l.unsubscribe(QQ)
            }
          })();
        return () => {
          uF(), QQ.uninstall(), (0, jQ.i)(!1), (0, fQ.f)(!1), qQ.l.unsubscribe(pQ), qQ.l.unsubscribe(dQ), AF(), tF(), eF(), PQ.uninstall()
        }
      }
  },
  39983: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => xQ,
      g: () => tQ,
      i: () => YQ
    });
    var LQ = wQ(1302),
      qQ = wQ(4159),
      oQ = wQ(8537),
      DQ = wQ(36549),
      kQ = wQ(1723),
      vQ = wQ(1201),
      mQ = wQ(8005),
      uQ = wQ(8462),
      HQ = wQ(8566);
    const bQ = {
        emoteWheel: oQ.i,
        quickChatWheel: uQ.e,
        actionWheel: HQ.r
      },
      YQ = Object.keys(bQ),
      xQ = "dead",
      AQ = QQ => (0, LQ.k)().includes(QQ),
      tQ = QQ => {
        const FQ = [(0, mQ.m)(xQ, (() => QQ.hasPlayer() && QQ.isPlayerDead())), (0, mQ.m)("sleeping", (() => AQ(DQ.g))), (0, mQ.m)("turnstile", (() => AQ(vQ.c))), (0, mQ.m)("videoAd", kQ.e), (0, mQ.m)("replay", (() => (0, qQ.f)() || QQ.isReplayMode())), (0, mQ.m)("freeCamera", (() => QQ.isFreeCameraOn())), ...Object.entries(bQ).map((QQ => {
          let [FQ, wQ] = QQ;
          return (0, mQ.m)(FQ, wQ)
        }))];
        return () => {
          for (const QQ of FQ) QQ()
        }
      }
  },
  39978: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ,
      e: () => vQ,
      i: () => kQ,
      k: () => uQ,
      m: () => DQ,
      o: () => oQ,
      p: () => mQ,
      q: () => HQ
    });
    var LQ = wQ(7950);
    class qQ {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(QQ, FQ, wQ) {
        const qQ = (0, LQ.j)(QQ, FQ.lookDeadzone);
        if (Math.hypot(qQ.x, qQ.y) < .9 || Math.abs(qQ.x) < Math.abs(qQ.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = wQ);
        const oQ = (DQ = FQ.lookSensitivityX, Math.min(1, 100 / DQ));
        var DQ;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (wQ - this.fullTiltSinceMs - 250 * oQ) / (200 * oQ)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const oQ = (QQ, FQ, wQ, qQ, oQ) => {
        let DQ = 1;
        return "boost" === wQ.lookCurve ? DQ = QQ.update(FQ, wQ, oQ) : QQ.reset(),
          function(QQ, FQ) {
            let {
              yawBoost: wQ = 1,
              aiming: qQ = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const oQ = (0, LQ.i)((0, LQ.j)(QQ, FQ.lookDeadzone), FQ.lookCurve),
              DQ = 220 * Math.PI / 180,
              kQ = qQ ? FQ.aimLookSensitivity / 100 : 1,
              vQ = FQ.lookSensitivityX / 100 * kQ,
              mQ = FQ.lookSensitivityY / 100 * kQ;
            return {
              yawRadPerSec: oQ.x * DQ * vQ * wQ * (FQ.invertLookX ? -1 : 1),
              pitchRadPerSec: oQ.y * DQ * .7 * mQ * (FQ.invertLookY ? -1 : 1)
            }
          }(FQ, wQ, {
            yawBoost: DQ,
            aiming: qQ
          })
      },
      DQ = (QQ, FQ) => {
        const wQ = Math.max(0, Math.min(250, FQ)) / 1e3;
        return {
          PU: QQ.yawRadPerSec * wQ,
          dU: QQ.pitchRadPerSec * wQ
        }
      },
      kQ = (QQ, FQ) => FQ ? {
        move: QQ.rightStick,
        look: QQ.leftStick
      } : {
        move: QQ.leftStick,
        look: QQ.rightStick
      },
      vQ = (QQ, FQ) => {
        const wQ = (0, LQ.j)(QQ, FQ),
          qQ = Math.min(1, Math.hypot(wQ.x, wQ.y));
        return {
          magnitude: qQ,
          speed: Math.min(1, qQ / .8),
          headingOffset: 0 === qQ ? 0 : Math.atan2(wQ.x, -wQ.y),
          x: wQ.x,
          y: wQ.y
        }
      },
      mQ = (QQ, FQ) => {
        let {
          sprintPressed: wQ,
          magnitude: LQ,
          autoSprint: qQ,
          nowMs: oQ
        } = FQ;
        const DQ = wQ ? oQ : QQ.latchedAtMs,
          kQ = (QQ => {
            let {
              running: FQ,
              magnitude: wQ,
              sprintPressed: LQ,
              autoSprint: qQ
            } = QQ;
            return !(wQ < .5) && (!!LQ || !!(qQ && wQ >= .9) || FQ)
          })({
            running: QQ.running,
            magnitude: LQ,
            sprintPressed: oQ - DQ <= 1e3,
            autoSprint: qQ
          });
        return {
          running: kQ,
          latchedAtMs: kQ ? -1 / 0 : DQ
        }
      },
      uQ = (QQ, FQ, wQ) => wQ && QQ.gyroAiming && "button" === QQ.gyroActivation && QQ.gyroButton !== FQ ? QQ.gyroButton : null,
      HQ = (QQ, FQ) => FQ ? {
        ...QQ,
        isHeld: wQ => wQ !== FQ && QQ.isHeld(wQ),
        wasPressed: wQ => wQ !== FQ && QQ.wasPressed(wQ),
        wasReleased: wQ => wQ !== FQ && QQ.wasReleased(wQ),
        value: wQ => wQ === FQ ? 0 : QQ.value(wQ)
      } : QQ
  },
  39994: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      g: () => LQ
    });
    const LQ = QQ => {
      let {
        mode: FQ,
        sneakHeld: wQ,
        sneakPressed: LQ,
        sneakTogglePressed: qQ,
        descending: oQ,
        canCrouch: DQ,
        toggled: kQ
      } = QQ;
      return DQ ? oQ ? {
        crouchHeld: wQ,
        toggled: !1
      } : "hold" === FQ ? {
        crouchHeld: wQ,
        toggled: qQ ? !kQ : kQ
      } : {
        crouchHeld: !1,
        toggled: LQ || qQ ? !kQ : kQ
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class qQ {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(QQ, FQ) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = FQ, this.graceEndsMs = FQ + 500);
        const wQ = FQ < this.graceEndsMs;
        return wQ && (QQ.sneakPressed || QQ.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, FQ + 300))), QQ.sneakHeld ? wQ && QQ.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: QQ.sneakHeld && !this.ignoringHeld,
          sneakPressed: QQ.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: QQ.sneakTogglePressed && !wQ
        }
      }
    }
  },
  39969: (QQ, FQ, wQ) => {
    wQ(8614)
  },
  39973: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => GQ
    });
    var LQ = wQ(22),
      qQ = wQ(8537),
      oQ = wQ(8550),
      DQ = wQ(7959),
      kQ = wQ(7994),
      vQ = wQ(7972),
      mQ = wQ(39978),
      uQ = wQ(39983),
      HQ = wQ(8005),
      bQ = wQ(7950),
      YQ = wQ(8462),
      xQ = wQ(8566);
    const AQ = [{
        isOpen: qQ.m,
        openButton: () => (0, DQ.g)("emoteWheel"),
        aim: QQ => {
          LQ.l.GA("emoteWheelPadAim", QQ)
        },
        commit: QQ => {
          LQ.l.GA("requestEmoteWheelPadCommit", QQ)
        },
        close: () => {
          LQ.l.GA("requestEmoteWheelClose")
        }
      }, {
        isOpen: YQ.e,
        openButton: () => (0, DQ.g)("chat"),
        aim: QQ => {
          LQ.l.GA(YQ.g, QQ)
        },
        commit: QQ => {
          LQ.l.GA(YQ.j, QQ)
        },
        close: () => {
          LQ.l.GA(YQ.h)
        },
        keptOpenBy: [uQ.c]
      }, {
        isOpen: xQ.r,
        openButton: () => (0, DQ.g)("actionButton"),
        aim: QQ => {
          LQ.l.GA(xQ.d, QQ)
        },
        commit: QQ => {
          LQ.l.GA(xQ.i, QQ)
        },
        close: () => {
          LQ.l.GA(xQ.g)
        }
      }],
      tQ = () => {
        var QQ;
        return null !== (QQ = AQ.find((QQ => QQ.isOpen()))) && void 0 !== QQ ? QQ : null
      },
      eQ = QQ => (0, DQ.M)(QQ.openButton()),
      MQ = (QQ, FQ) => !(0, bQ.J)(QQ.frame.values, FQ),
      GQ = () => {
        let QQ = null,
          FQ = !1,
          wQ = !1;
        return kQ.b.register({
          name: "wheel",
          isActive: () => null !== tQ(),
          peek: () => {
            const QQ = tQ();
            return QQ && eQ(QQ) ? null : {
              over: "gameplay",
              stick: (0, vQ.h)().swapSticks ? "right" : "left"
            }
          },
          onFrame: LQ => {
            var qQ;
            const bQ = tQ();
            if (!bQ) return;
            if (null !== (0, HQ.e)([...uQ.i, ...null !== (qQ = bQ.keptOpenBy) && void 0 !== qQ ? qQ : []])) return void bQ.close();
            const YQ = bQ.openButton(),
              xQ = (0, mQ.i)(LQ.frame, (0, vQ.h)().swapSticks),
              AQ = eQ(bQ) ? xQ.move : xQ.look;
            QQ !== bQ ? (QQ = bQ, FQ = !MQ(LQ, YQ) || Math.hypot(AQ.x, AQ.y) >= oQ.A, wQ = !1) : wQ && (wQ = !1, MQ(LQ, YQ) && (FQ = !1)), bQ.aim(AQ);
            const GQ = (0, DQ.g)("menuConfirm"),
              pQ = (0, DQ.g)("menuBack");
            return LQ.wasPressed(pQ) ? (kQ.b.consumeButton(pQ), void bQ.close()) : LQ.wasPressed(GQ) || LQ.wasPressed(YQ) ? (kQ.b.consumeButton(GQ), kQ.b.consumeButton(YQ), void bQ.commit(!1)) : void(FQ && MQ(LQ, YQ) && (FQ = !1, bQ.commit(!0)))
          },
          onDeactivate: () => {
            wQ = null !== QQ && tQ() === QQ, wQ || (QQ = null, FQ = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
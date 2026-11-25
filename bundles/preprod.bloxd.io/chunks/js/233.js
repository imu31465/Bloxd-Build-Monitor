export const id = 233;
export const ids = [233];
export const modules = {
  37207: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => UQ,
      h: () => GQ
    });
    var wQ = XQ(4553),
      qQ = XQ(1498),
      TQ = XQ(61),
      zQ = XQ(6873),
      sQ = XQ(4541),
      FQ = XQ(1335),
      PQ = XQ(2003),
      gQ = XQ(1975),
      JQ = XQ(1507),
      rQ = XQ(1226),
      IQ = XQ(37212),
      jQ = XQ(1081),
      BQ = XQ.n(jQ),
      yQ = XQ(1360),
      VQ = XQ(1094),
      DQ = XQ(1318),
      pQ = XQ(1145);
    const GQ = "SleepingOverlay";

    function UQ() {
      const {
        t: QQ
      } = (0, rQ.C)(), [WQ, XQ] = (0, TQ.useState)(!1), [jQ, UQ] = (0, TQ.useState)(null), [vQ, dQ] = (0, TQ.useState)(1), [HQ, aQ] = (0, TQ.useState)(!1), [lQ, hQ] = (0, TQ.useState)(!1), iQ = (0, TQ.useRef)(0), cQ = (0, TQ.useRef)(!1), AQ = (0, TQ.useRef)(!1), RQ = (0, TQ.useRef)(), EQ = (0, TQ.useRef)(null);

      function CQ() {
        const QQ = null !== jQ && void 0 !== jQ ? jQ : "Rested Speed";
        PQ.gameBridge.send("wakeUp", lQ ? QQ : null), EQ.current = null, XQ(!1), UQ(null), dQ(1), aQ(!1), hQ(!1)
      }

      function uQ() {
        return !HQ && (CQ(), !0)
      }
      return (0, qQ.f)("PlayerPhysicsTypeUpdate", (QQ => {
        QQ !== EQ.current && (EQ.current = QQ, QQ === zQ.s.SLEEPING ? (AQ.current || (iQ.current = PQ.gameBridge.lookup("cameraZoom", null), AQ.current = !0), cQ.current = !0, PQ.gameBridge.send("setCameraZoom", 3), XQ(!0), dQ(function() {
          for (const QQ of PQ.gameBridge.lookup("blocksStandingOn", null)) {
            if (IQ.e.leafBeds.includes(QQ)) return console.log(`Found leaf bed: ${QQ}`), 1;
            if (IQ.e.woolBeds.includes(QQ)) return console.log(`Found woold bed: ${QQ}`), 2;
            if (IQ.e.strongBeds.includes(QQ)) return console.log(`Found strong bed ${QQ}`), 3
          }
          return 1
        }())) : (AQ.current = !1, XQ(!1), UQ(null), dQ(1)))
      })), (0, TQ.useEffect)((() => () => {
        (0, FQ.y)(GQ)
      }), []), (0, TQ.useEffect)((() => {
        WQ ? (0, FQ.z)(GQ) : ((0, FQ.y)(GQ), cQ.current && (PQ.gameBridge.send("setCameraZoom", iQ.current), cQ.current = !1))
      }), [WQ]), (0, DQ.k)("overlay", RQ, uQ, WQ), (0, pQ.jsx)(wQ.c, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: WQ,
        timeout: 300,
        nodeRef: RQ,
        unmountOnExit: !0,
        children: (0, pQ.jsx)("div", {
          ref: RQ,
          onClick: QQ => {
            uQ() && QQ.stopPropagation()
          },
          children: (0, pQ.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, pQ.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: sQ.l.map((WQ => (0, pQ.jsxs)(bQ, {
                restedEffect: WQ,
                dF: jQ,
                setChosenRestedEffect: UQ,
                children: [(0, pQ.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, pQ.jsx)(gQ.e, {
                    text: [{
                      icon: WQ
                    }]
                  }), sQ.h[WQ].shortName]
                }), (0, pQ.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: QQ(sQ.h[WQ].description, {
                    time: sQ.h[WQ].effectLevelDurations[vQ] / 6e4
                  })
                })]
              }, WQ)))
            }), (0, pQ.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, pQ.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, pQ.jsxs)(JQ.h, {
                className: "SleepingOverlayWakeUpButton",
                onClick: QQ => {
                  lQ ? CQ() : (aQ(!0), (0, yQ.X)((() => {
                    aQ(!1), hQ(!0)
                  }), !0)), QQ.stopPropagation()
                },
                loading: HQ,
                children: [!lQ && (0, pQ.jsxs)(pQ.Fragment, {
                  children: [(0, pQ.jsx)(VQ.d, {
                    name: "film"
                  }), " ", QQ("classicGame:watchAdToGetRestedPerk")]
                }), lQ && QQ("classicGame:wakeUp")]
              }), (0, pQ.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, pQ.jsx)("div", {
                  className: BQ()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === vQ
                  }),
                  children: (0, pQ.jsx)(gQ.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, pQ.jsx)("div", {
                  className: BQ()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === vQ
                  }),
                  children: (0, pQ.jsx)(gQ.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, pQ.jsx)("div", {
                  className: BQ()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === vQ
                  }),
                  children: (0, pQ.jsx)(gQ.e, {
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
    const bQ = (0, TQ.memo)((function(QQ) {
      let {
        children: WQ,
        restedEffect: XQ,
        dF: wQ,
        setChosenRestedEffect: qQ
      } = QQ;
      return XQ === wQ ? (0, pQ.jsx)(JQ.s, {
        onClick: QQ => {
          QQ.stopPropagation()
        },
        children: WQ
      }) : (0, pQ.jsx)(JQ.l, {
        onClick: QQ => {
          qQ(XQ), QQ.stopPropagation()
        },
        children: WQ
      })
    }))
  },
  40802: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => OQ
    });
    var wQ = XQ(26),
      qQ = XQ(31),
      TQ = XQ(4572),
      zQ = XQ(382),
      sQ = XQ(1698),
      FQ = XQ(8561),
      PQ = XQ(4582),
      gQ = XQ(9084),
      JQ = XQ(8596),
      rQ = XQ(8572),
      IQ = XQ(8605),
      jQ = XQ(1454),
      BQ = XQ(1744),
      yQ = XQ(8608),
      VQ = XQ(9041),
      DQ = XQ(9174),
      pQ = XQ(9096),
      GQ = XQ(9176),
      UQ = XQ(2003),
      bQ = XQ(8545),
      vQ = XQ(9111),
      dQ = XQ(9106),
      HQ = XQ(9093);
    class aQ {
      constructor() {
        this.lostAtMs = null
      }
      update(QQ, WQ) {
        return QQ ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= WQ, WQ - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class lQ {
      constructor(QQ, WQ) {
        this.press = QQ, this.release = WQ, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(QQ, WQ, XQ, wQ) {
        if (QQ && null === this.downAtMs) return this.downAtMs = XQ, this.latched = wQ, void(this.token = this.press(wQ));
        null !== this.downAtMs && (this.latched ? QQ && this.end() : !WQ && XQ - this.downAtMs >= 40 && this.end())
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
    const hQ = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      iQ = QQ => {
        let WQ = null;
        const XQ = new HQ.d,
          wQ = () => {
            WQ && (((QQ, WQ, XQ) => {
              switch (XQ.kind) {
                case "reload":
                  return void WQ.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void WQ.specialActionUp(XQ.action);
                case "customButton":
                  return void UQ.gameBridge.send("pressCustomButton", {
                    id: XQ.id,
                    down: !1
                  });
                case "touchButton":
                  QQ.pressTouchButton(!1)
              }
            })(QQ, WQ.bodies, WQ.action), WQ = null)
          },
          TQ = (XQ, qQ, TQ, zQ) => {
            wQ(), WQ = {
              action: qQ,
              bodies: XQ,
              heldBy: TQ,
              atMs: zQ
            }, ((QQ, WQ, XQ) => {
              switch (XQ.kind) {
                case "reload":
                  return WQ.reloadGun(), void WQ.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void WQ.specialActionDown(XQ.action);
                case "customButton":
                  return void UQ.gameBridge.send("pressCustomButton", {
                    id: XQ.id,
                    down: !0
                  });
                case "touchButton":
                  QQ.pressTouchButton(!0)
              }
            })(QQ, XQ, qQ)
          };
        return {
          update: (zQ, sQ, PQ, gQ) => {
            var rQ;
            const IQ = (0, vQ.i)(QQ.contextActionInputs()),
              jQ = null !== (rQ = IQ[0]) && void 0 !== rQ ? rQ : hQ;
            (0, dQ.e)((0, vQ.e)(jQ) ? jQ : null);
            const BQ = (0, vQ.d)(IQ);
            (0, dQ.i)(BQ);
            const yQ = (0, FQ.g)("actionButton");
            if (BQ) {
              const QQ = XQ.update(sQ.wasPressed(yQ), sQ.isHeld(yQ), PQ, gQ);
              "tap" === QQ ? TQ(zQ, jQ, [yQ], PQ) : "hold" === QQ && (JQ.b.consumeButton(yQ), qQ.k.mB(GQ.n, IQ))
            } else XQ.release(), sQ.wasPressed(yQ) && TQ(zQ, jQ, [yQ], PQ);
            WQ && PQ - WQ.atMs >= 40 && !WQ.heldBy.some((QQ => (0, bQ.O)(sQ.frame.values, QQ))) && wQ()
          },
          pressPicked: (QQ, WQ) => {
            TQ(QQ, WQ, [(0, FQ.g)("menuConfirm"), (0, FQ.g)("actionButton")], performance.now())
          },
          release: () => {
            XQ.release(), wQ(), (0, dQ.e)(null), (0, dQ.i)(!1)
          }
        }
      };
    var cQ = XQ(8536);
    var AQ = XQ(40798),
      RQ = XQ(9128),
      EQ = XQ(8590),
      CQ = XQ(9211);
    var uQ = XQ(40796),
      LQ = XQ(9220),
      kQ = XQ(40807),
      fQ = XQ(9189),
      SQ = XQ(9130),
      tQ = XQ(9137),
      oQ = XQ(9143),
      eQ = XQ(9043),
      nQ = XQ(9101);
    const xQ = () => eQ.b[(0, rQ.g)().tapHoldTime].wheelMs,
      YQ = () => ((0, gQ.b)(), (0, nQ.d)("controllerMenuKey")),
      NQ = (QQ, WQ, XQ) => new lQ((XQ => {
        const wQ = QQ.bodies();
        return {
          bodies: wQ,
          press: WQ(wQ, XQ)
        }
      }), (QQ => {
        let {
          bodies: WQ,
          press: wQ
        } = QQ;
        XQ(WQ, wQ)
      })),
      ZQ = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      OQ = QQ => {
        const WQ = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let XQ = ZQ;
        const gQ = new kQ.d,
          UQ = qQ.k.subscribe("appManagerUpdated|activeInputDevice", (WQ => {
            QQ.deviceChanged(WQ)
          }));
        let vQ = null,
          dQ = 0;
        const lQ = () => {
          vQ = null, (0, SQ.i)(null)
        };
        let hQ = !1;
        const nQ = new aQ,
          OQ = QQ.look,
          KQ = new HQ.d,
          mQ = new HQ.d,
          MQ = iQ(QQ),
          QW = qQ.k.subscribe(GQ.r, (WQ => {
            MQ.pressPicked(QQ.bodies(), WQ)
          })),
          WW = NQ(QQ, ((QQ, WQ) => QQ.primaryFireDown(!WQ)), ((QQ, WQ) => {
            QQ.primaryFireUp(WQ)
          })),
          XW = NQ(QQ, (QQ => QQ.altFireDown()), ((QQ, WQ) => {
            QQ.altFireUp(WQ)
          }));
        let wW = !1,
          qW = !1,
          TW = !1;
        const zW = (0, VQ.d)(bQ.cb),
          sW = (0, VQ.d)(bQ.cb),
          FW = new HQ.d;
        let PW = !1;
        const gW = () => {
            zW.reset(), sW.reset(), FW.release(), (0, oQ.g)(!1), OQ.release(), WW.cancel(), (0, tQ.e)(!1), XW.cancel(), MQ.release(), KQ.release(), mQ.release(), lQ()
          },
          JW = function() {
            let wQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            gW(), qW = !1, wQ || (wW = !1, XQ = ZQ, Object.assign(WQ, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), QQ.stopMoving())
          };
        let rW = !1;
        const IW = function(wQ, qQ, TQ) {
            let zQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, jQ.j)()) return void(rW || (rW = !0, wW = !1, QQ.stopMoving()));
            rW = !1;
            const sQ = (0, rQ.g)(),
              PQ = (0, uQ.f)(qQ, sQ.moveDeadzone),
              JQ = (0, FQ.g)("sprint");
            XQ = (0, uQ.q)(XQ, {
              sprintPressed: wQ.wasPressed(JQ),
              magnitude: PQ.magnitude,
              autoSprint: sQ.autoSprint,
              nowMs: TQ
            }), WQ.running = XQ.running, WQ.sprintHeld = wQ.isHeld(JQ), WQ.x = PQ.x, WQ.y = PQ.y, WQ.magnitude = PQ.speed, WQ.headingOffset = PQ.headingOffset, wW = PQ.magnitude > 0;
            const IQ = (0, FQ.g)("jump");
            if (WQ.jumpHeld = wQ.isHeld(IQ), WQ.jumpPressed = wQ.wasPressed(IQ), WQ.jumpPressed && QQ.bodies().jumpDown(), zQ) return void QQ.move(WQ, null);
            const BQ = (0, FQ.g)("sneak"),
              yQ = gQ.filter({
                sneakHeld: wQ.isHeld(BQ),
                sneakPressed: wQ.wasPressed(BQ),
                sneakTogglePressed: wQ.wasPressed((0, FQ.g)("sneakToggle"))
              }, TQ);
            QQ.move(WQ, {
              ...yQ,
              mode: sQ.sneakMode
            })
          },
          jW = (QQ, WQ) => {
            const XQ = (0, FQ.g)("chat");
            if ("off" === (0, rQ.g)().quickChat) return void(QQ.wasPressed(XQ) && (JQ.b.consumeButton(XQ), qQ.k.mB(RQ.c)));
            const wQ = KQ.update(QQ.wasPressed(XQ), QQ.isHeld(XQ), WQ, xQ());
            "tap" === wQ || "hold" === wQ && null === (0, BQ.d)() ? qQ.k.mB(RQ.c) : "hold" === wQ && (JQ.b.consumeButton(XQ), qQ.k.mB(pQ.p))
          },
          BW = (WQ, XQ) => {
            ((QQ, WQ) => {
              const XQ = (0, DQ.b)(),
                wQ = (0, FQ.g)("emoteWheel");
              if ("wheel" === (0, rQ.g)().emoteButton) return QQ.wasPressed(wQ) && (JQ.b.consumeButton(wQ), qQ.k.mB("requestEmoteWheelPadOpen", !0)), (0, DQ.b)() !== XQ;
              const TQ = mQ.update(QQ.wasPressed(wQ), QQ.isHeld(wQ), WQ, xQ());
              return "tap" === TQ ? qQ.k.mB("requestEmoteRepeatLast") : "hold" === TQ && (JQ.b.consumeButton(wQ), qQ.k.mB("requestEmoteWheelPadOpen", !1)), (0, DQ.b)() !== XQ
            })(WQ, XQ) || jW(WQ, XQ), WQ.wasPressed((0, FQ.g)("inventory")) && (JQ.b.consumeButton((0, FQ.g)("inventory")), (0, sQ.A)(YQ(), "inventory", QQ.hasFullInventory())), WQ.wasPressed((0, FQ.g)("pause")) && (JQ.b.consumeButton((0, FQ.g)("pause")), (0, PQ.e)() === zQ.r.SOCIAL ? (0, sQ.w)(YQ(), zQ.r.SOCIAL) : (0, sQ.i)(YQ())), WQ.wasPressed((0, FQ.g)("leaderboard")) && !(0, TQ.f)() && (JQ.b.consumeButton((0, FQ.g)("leaderboard")), ((QQ, WQ) => {
              if ("shop" === (0, EQ.d)()) return qQ.k.mB(CQ.k), void(0, sQ.w)(QQ, zQ.r.SHOP, !0);
              (0, sQ.w)(QQ, zQ.r.LOBBY_LEADERBOARD, WQ)
            })(YQ(), QQ.hasLobbyTab()))
          },
          yW = (WQ, XQ) => {
            const wQ = QQ.bodies();
            ((WQ, XQ) => {
              const wQ = (0, FQ.g)("attack"),
                qQ = WQ.wasPressed(wQ);
              qQ && !WW.isLatched() && (hQ = QQ.targetsBlock()), WW.update(qQ, WQ.isHeld(wQ), XQ, "toggle" === (0, rQ.g)().attackMode), WW.isLatched() && hQ ? nQ.update(QQ.targetsBlock(), XQ) && WW.unlatch() : nQ.reset(), (0, tQ.e)(WW.isLatched())
            })(WQ, XQ), XW.update(WQ.wasPressed((0, FQ.g)("use")), WQ.isHeld((0, FQ.g)("use")), XQ, !1), zW.update(WQ.isHeld((0, FQ.g)("hotbarPrevious")), XQ) && QQ.scrollHotbar(-1), sW.update(WQ.isHeld((0, FQ.g)("hotbarNext")), XQ) && QQ.scrollHotbar(1), ((WQ, XQ, wQ) => {
              const qQ = (0, FQ.g)("perspective"),
                TQ = (0, FQ.g)("pickBlock"),
                zQ = QQ.pickBlockAllowed();
              (0, oQ.g)(zQ && !PW && QQ.targetsBlock());
              const sQ = () => {
                XQ.pickBlock() && (PW = !0, (0, oQ.g)(!1))
              };
              if (!zQ || TQ !== qQ) return FW.release(), WQ.wasPressed(qQ) && XQ.swapCameraZoom(), void(zQ && WQ.wasPressed(TQ) && sQ());
              const PQ = FW.update(WQ.wasPressed(TQ), WQ.isHeld(TQ), wQ, xQ());
              "tap" === PQ ? sQ() : "hold" === PQ && XQ.swapCameraZoom()
            })(WQ, wQ, XQ), ((WQ, XQ, wQ) => {
              const qQ = (0, FQ.g)("drop");
              if (WQ.wasPressed(qQ)) {
                XQ.dropItem(!1);
                const QQ = (0, rQ.g)();
                "off" !== QQ.buttonRepeat && (vQ = wQ, dQ = eQ.b[QQ.tapHoldTime].dropStackMs, (0, SQ.i)(dQ))
              }
              null !== vQ && (!WQ.isHeld(qQ) || QQ.selectedSlotEmpty() ? lQ() : wQ - vQ >= dQ && (lQ(), XQ.dropItem(!0)))
            })(WQ, wQ, XQ), MQ.update(wQ, WQ, XQ, xQ()), BW(WQ, XQ)
          },
          VW = JQ.b.register({
            name: "gameplay",
            isActive: () => {
              const WQ = wW && "keyboardMouse" === wQ.b.get("activeInputDevice") && !(0, IQ.C)(),
                XQ = (0, IQ.i)() ? [AQ.e] : [];
              return ((0, IQ.i)() || WQ) && (0, yQ.e)(XQ) && QQ.hasPlayer()
            },
            onFrame: QQ => {
              const WQ = performance.now(),
                XQ = (0, rQ.g)(),
                wQ = (0, uQ.t)(QQ, (0, uQ.k)(XQ, (0, FQ.g)("pause"), (0, LQ.d)().isSupported())),
                qQ = (0, uQ.j)(wQ, XQ.swapSticks);
              return (0, IQ.i)() ? (qW = !1, (0, yQ.e)() ? (TW = !1, OQ.update(qQ.look, XQ, wQ.isHeld((0, FQ.g)("use"))), IW(wQ, qQ.move, WQ), void yW(wQ, WQ)) : (TW || (TW = !0, gQ.lostToPadScreen(), JW()), void jW(wQ, WQ))) : (qW || (gW(), qW = !0), void IW(wQ, qQ.move, WQ))
            },
            onDeactivate: QQ => {
              (0, IQ.i)() && gQ.lostToPadScreen(), JW(QQ)
            },
            onPeekFrame: WQ => {
              (0, IQ.i)() && (0, yQ.e)(AQ.m) && QQ.hasPlayer() ? IW(WQ, (0, uQ.j)(WQ, (0, rQ.g)().swapSticks).move, performance.now(), !0) : JW()
            }
          }),
          DW = (0, AQ.i)(QQ),
          pW = (() => {
            const QQ = qQ.k.subscribe(cQ.e, (QQ => {
              !QQ && (0, IQ.i)() && "inGame" === wQ.b.get("gameState") && qQ.k.mB("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              qQ.k.unsubscribe(QQ)
            }
          })();
        return () => {
          JW(), QQ.uninstall(), (0, fQ.g)(!1), (0, oQ.g)(!1), qQ.k.unsubscribe(UQ), qQ.k.unsubscribe(QW), VW(), DW(), pW(), OQ.uninstall()
        }
      }
  },
  40798: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => jQ,
      i: () => yQ,
      m: () => IQ
    });
    var wQ = XQ(1335),
      qQ = XQ(4572),
      TQ = XQ(9159),
      zQ = XQ(37207),
      sQ = XQ(1783),
      FQ = XQ(1221),
      PQ = XQ(8608),
      gQ = XQ(9096),
      JQ = XQ(9176);
    const rQ = {
        emoteWheel: TQ.c,
        quickChatWheel: gQ.d,
        actionWheel: JQ.t
      },
      IQ = Object.keys(rQ),
      jQ = "dead",
      BQ = QQ => (0, wQ.u)().includes(QQ),
      yQ = QQ => {
        const WQ = [(0, PQ.h)(jQ, (() => QQ.hasPlayer() && QQ.isPlayerDead())), (0, PQ.h)("sleeping", (() => BQ(zQ.h))), (0, PQ.h)("turnstile", (() => BQ(FQ.c))), (0, PQ.h)("videoAd", sQ.e), (0, PQ.h)("replay", (() => (0, qQ.f)() || QQ.isReplayMode())), (0, PQ.h)("freeCamera", (() => QQ.isFreeCameraOn())), ...Object.entries(rQ).map((QQ => {
          let [WQ, XQ] = QQ;
          return (0, PQ.h)(WQ, XQ)
        }))];
        return () => {
          for (const QQ of WQ) QQ()
        }
      }
  },
  40796: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ,
      f: () => FQ,
      j: () => sQ,
      k: () => gQ,
      o: () => zQ,
      p: () => TQ,
      q: () => PQ,
      t: () => JQ
    });
    var wQ = XQ(8545);
    class qQ {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(QQ, WQ, XQ) {
        const qQ = (0, wQ.p)(QQ, WQ.lookDeadzone);
        if (Math.hypot(qQ.x, qQ.y) < .9 || Math.abs(qQ.x) < Math.abs(qQ.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = XQ);
        const TQ = (zQ = WQ.lookSensitivityX, Math.min(1, 100 / zQ));
        var zQ;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (XQ - this.fullTiltSinceMs - 250 * TQ) / (200 * TQ)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const TQ = (QQ, WQ, XQ, qQ, TQ) => {
        let zQ = 1;
        return "boost" === XQ.lookCurve ? zQ = QQ.update(WQ, XQ, TQ) : QQ.reset(),
          function(QQ, WQ) {
            let {
              yawBoost: XQ = 1,
              aiming: qQ = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const TQ = (0, wQ.l)((0, wQ.p)(QQ, WQ.lookDeadzone), WQ.lookCurve),
              zQ = 220 * Math.PI / 180,
              sQ = qQ ? WQ.aimLookSensitivity / 100 : 1,
              FQ = WQ.lookSensitivityX / 100 * sQ,
              PQ = WQ.lookSensitivityY / 100 * sQ;
            return {
              yawRadPerSec: TQ.x * zQ * FQ * XQ * (WQ.invertLookX ? -1 : 1),
              pitchRadPerSec: TQ.y * zQ * .7 * PQ * (WQ.invertLookY ? -1 : 1)
            }
          }(WQ, XQ, {
            yawBoost: zQ,
            aiming: qQ
          })
      },
      zQ = (QQ, WQ) => {
        const XQ = Math.max(0, Math.min(250, WQ)) / 1e3;
        return {
          jR: QQ.yawRadPerSec * XQ,
          yR: QQ.pitchRadPerSec * XQ
        }
      },
      sQ = (QQ, WQ) => WQ ? {
        move: QQ.rightStick,
        look: QQ.leftStick
      } : {
        move: QQ.leftStick,
        look: QQ.rightStick
      },
      FQ = (QQ, WQ) => {
        const XQ = (0, wQ.p)(QQ, WQ),
          qQ = Math.min(1, Math.hypot(XQ.x, XQ.y));
        return {
          magnitude: qQ,
          speed: Math.min(1, qQ / .8),
          headingOffset: 0 === qQ ? 0 : Math.atan2(XQ.x, -XQ.y),
          x: XQ.x,
          y: XQ.y
        }
      },
      PQ = (QQ, WQ) => {
        let {
          sprintPressed: XQ,
          magnitude: wQ,
          autoSprint: qQ,
          nowMs: TQ
        } = WQ;
        const zQ = XQ ? TQ : QQ.latchedAtMs,
          sQ = (QQ => {
            let {
              running: WQ,
              magnitude: XQ,
              sprintPressed: wQ,
              autoSprint: qQ
            } = QQ;
            return !(XQ < .5) && (!!wQ || !!(qQ && XQ >= .9) || WQ)
          })({
            running: QQ.running,
            magnitude: wQ,
            sprintPressed: TQ - zQ <= 1e3,
            autoSprint: qQ
          });
        return {
          running: sQ,
          latchedAtMs: sQ ? -1 / 0 : zQ
        }
      },
      gQ = (QQ, WQ, XQ) => XQ && QQ.gyroAiming && "button" === QQ.gyroActivation && QQ.gyroButton !== WQ ? QQ.gyroButton : null,
      JQ = (QQ, WQ) => WQ ? {
        ...QQ,
        isHeld: XQ => XQ !== WQ && QQ.isHeld(XQ),
        wasPressed: XQ => XQ !== WQ && QQ.wasPressed(XQ),
        wasReleased: XQ => XQ !== WQ && QQ.wasReleased(XQ),
        value: XQ => XQ === WQ ? 0 : QQ.value(XQ)
      } : QQ
  },
  40807: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ,
      g: () => wQ
    });
    const wQ = QQ => {
      let {
        mode: WQ,
        sneakHeld: XQ,
        sneakPressed: wQ,
        sneakTogglePressed: qQ,
        descending: TQ,
        canCrouch: zQ,
        toggled: sQ
      } = QQ;
      return zQ ? TQ ? {
        crouchHeld: XQ,
        toggled: !1
      } : "hold" === WQ ? {
        crouchHeld: XQ,
        toggled: qQ ? !sQ : sQ
      } : {
        crouchHeld: !1,
        toggled: wQ || qQ ? !sQ : sQ
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
      filter(QQ, WQ) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = WQ, this.graceEndsMs = WQ + 500);
        const XQ = WQ < this.graceEndsMs;
        return XQ && (QQ.sneakPressed || QQ.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, WQ + 300))), QQ.sneakHeld ? XQ && QQ.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: QQ.sneakHeld && !this.ignoringHeld,
          sneakPressed: QQ.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: QQ.sneakTogglePressed && !XQ
        }
      }
    }
  },
  40787: (QQ, WQ, XQ) => {
    XQ(9220)
  },
  40790: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => pQ
    });
    var wQ = XQ(31),
      qQ = XQ(9159),
      TQ = XQ(9170),
      zQ = XQ(8561),
      sQ = XQ(8596),
      FQ = XQ(8572),
      PQ = XQ(40796),
      gQ = XQ(40798),
      JQ = XQ(8608),
      rQ = XQ(8545),
      IQ = XQ(9096),
      jQ = XQ(9176);
    const BQ = [{
        isOpen: qQ.g,
        openButton: () => (0, zQ.g)("emoteWheel"),
        aim: QQ => {
          wQ.k.mB("emoteWheelPadAim", QQ)
        },
        commit: QQ => {
          wQ.k.mB("requestEmoteWheelPadCommit", QQ)
        },
        close: () => {
          wQ.k.mB("requestEmoteWheelClose")
        }
      }, {
        isOpen: IQ.d,
        openButton: () => (0, zQ.g)("chat"),
        aim: QQ => {
          wQ.k.mB(IQ.g, QQ)
        },
        commit: QQ => {
          wQ.k.mB(IQ.l, QQ)
        },
        close: () => {
          wQ.k.mB(IQ.k)
        },
        keptOpenBy: [gQ.e]
      }, {
        isOpen: jQ.t,
        openButton: () => (0, zQ.g)("actionButton"),
        aim: QQ => {
          wQ.k.mB(jQ.e, QQ)
        },
        commit: QQ => {
          wQ.k.mB(jQ.j, QQ)
        },
        close: () => {
          wQ.k.mB(jQ.g)
        }
      }],
      yQ = () => {
        var QQ;
        return null !== (QQ = BQ.find((QQ => QQ.isOpen()))) && void 0 !== QQ ? QQ : null
      },
      VQ = QQ => (0, zQ.E)(QQ.openButton()),
      DQ = (QQ, WQ) => !(0, rQ.O)(QQ.frame.values, WQ),
      pQ = () => {
        let QQ = null,
          WQ = !1,
          XQ = !1;
        return sQ.b.register({
          name: "wheel",
          isActive: () => null !== yQ(),
          peek: () => {
            const QQ = yQ();
            return QQ && VQ(QQ) ? null : {
              over: "gameplay",
              stick: (0, FQ.g)().swapSticks ? "right" : "left"
            }
          },
          onFrame: wQ => {
            var qQ;
            const rQ = yQ();
            if (!rQ) return;
            if (null !== (0, JQ.b)([...gQ.m, ...null !== (qQ = rQ.keptOpenBy) && void 0 !== qQ ? qQ : []])) return void rQ.close();
            const IQ = rQ.openButton(),
              jQ = (0, PQ.j)(wQ.frame, (0, FQ.g)().swapSticks),
              BQ = VQ(rQ) ? jQ.move : jQ.look;
            QQ !== rQ ? (QQ = rQ, WQ = !DQ(wQ, IQ) || Math.hypot(BQ.x, BQ.y) >= TQ.G, XQ = !1) : XQ && (XQ = !1, DQ(wQ, IQ) && (WQ = !1)), rQ.aim(BQ);
            const pQ = (0, zQ.g)("menuConfirm"),
              GQ = (0, zQ.g)("menuBack");
            return wQ.wasPressed(GQ) ? (sQ.b.consumeButton(GQ), void rQ.close()) : wQ.wasPressed(pQ) || wQ.wasPressed(IQ) ? (sQ.b.consumeButton(pQ), sQ.b.consumeButton(IQ), void rQ.commit(!1)) : void(WQ && DQ(wQ, IQ) && (WQ = !1, rQ.commit(!0)))
          },
          onDeactivate: () => {
            XQ = null !== QQ && yQ() === QQ, XQ || (QQ = null, WQ = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
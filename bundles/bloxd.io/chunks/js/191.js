export const id = 191;
export const ids = [191];
export const modules = {
  36311: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => SY,
      i: () => VY
    });
    var FY = DY(3832),
      AY = DY(1430),
      IY = DY(61),
      RY = DY(6041),
      OY = DY(3823),
      gY = DY(1287),
      aY = DY(1808),
      vY = DY(1778),
      uY = DY(1437),
      sY = DY(1211),
      iY = DY(36314),
      yY = DY(1092),
      QY = DY.n(yY),
      oY = DY(1314),
      WY = DY(1098),
      EY = DY(1284),
      mY = DY(1125);
    const VY = "SleepingOverlay";

    function SY() {
      const {
        t: YY
      } = (0, sY.C)(), [rY, DY] = (0, IY.useState)(!1), [yY, SY] = (0, IY.useState)(null), [TY, eY] = (0, IY.useState)(1), [NY, BY] = (0, IY.useState)(!1), [cY, KY] = (0, IY.useState)(!1), HY = (0, IY.useRef)(0), zY = (0, IY.useRef)(!1), ZY = (0, IY.useRef)(!1), CY = (0, IY.useRef)(), fY = (0, IY.useRef)(null);

      function jY() {
        const YY = null !== yY && void 0 !== yY ? yY : "Rested Speed";
        aY.gameBridge.send("wakeUp", cY ? YY : null), fY.current = null, DY(!1), SY(null), eY(1), BY(!1), KY(!1)
      }

      function hY() {
        return !NY && (jY(), !0)
      }
      return (0, AY.g)("PlayerPhysicsTypeUpdate", (YY => {
        YY !== fY.current && (fY.current = YY, YY === RY.n.SLEEPING ? (ZY.current || (HY.current = aY.gameBridge.lookup("cameraZoom", null), ZY.current = !0), zY.current = !0, aY.gameBridge.send("setCameraZoom", 3), DY(!0), eY(function() {
          for (const YY of aY.gameBridge.lookup("blocksStandingOn", null)) {
            if (iY.c.leafBeds.includes(YY)) return console.log(`Found leaf bed: ${YY}`), 1;
            if (iY.c.woolBeds.includes(YY)) return console.log(`Found woold bed: ${YY}`), 2;
            if (iY.c.strongBeds.includes(YY)) return console.log(`Found strong bed ${YY}`), 3
          }
          return 1
        }())) : (ZY.current = !1, DY(!1), SY(null), eY(1)))
      })), (0, IY.useEffect)((() => () => {
        (0, gY.j)(VY)
      }), []), (0, IY.useEffect)((() => {
        rY ? (0, gY.k)(VY) : ((0, gY.j)(VY), zY.current && (aY.gameBridge.send("setCameraZoom", HY.current), zY.current = !1))
      }), [rY]), (0, EY.t)("overlay", CY, hY, rY), (0, mY.jsx)(FY.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: rY,
        timeout: 300,
        nodeRef: CY,
        unmountOnExit: !0,
        children: (0, mY.jsx)("div", {
          ref: CY,
          onClick: YY => {
            hY() && YY.stopPropagation()
          },
          children: (0, mY.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, mY.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: OY.d.map((rY => (0, mY.jsxs)(lY, {
                restedEffect: rY,
                eR: yY,
                setChosenRestedEffect: SY,
                children: [(0, mY.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, mY.jsx)(vY.b, {
                    text: [{
                      icon: rY
                    }]
                  }), OY.c[rY].shortName]
                }), (0, mY.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: YY(OY.c[rY].description, {
                    time: OY.c[rY].effectLevelDurations[TY] / 6e4
                  })
                })]
              }, rY)))
            }), (0, mY.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, mY.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, mY.jsxs)(uY.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: YY => {
                  cY ? jY() : (BY(!0), (0, oY.V)((() => {
                    BY(!1), KY(!0)
                  }), !0)), YY.stopPropagation()
                },
                loading: NY,
                children: [!cY && (0, mY.jsxs)(mY.Fragment, {
                  children: [(0, mY.jsx)(WY.e, {
                    name: "film"
                  }), " ", YY("classicGame:watchAdToGetRestedPerk")]
                }), cY && YY("classicGame:wakeUp")]
              }), (0, mY.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, mY.jsx)("div", {
                  className: QY()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === TY
                  }),
                  children: (0, mY.jsx)(vY.b, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, mY.jsx)("div", {
                  className: QY()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === TY
                  }),
                  children: (0, mY.jsx)(vY.b, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, mY.jsx)("div", {
                  className: QY()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === TY
                  }),
                  children: (0, mY.jsx)(vY.b, {
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
    const lY = (0, IY.memo)((function(YY) {
      let {
        children: rY,
        restedEffect: DY,
        eR: FY,
        setChosenRestedEffect: AY
      } = YY;
      return DY === FY ? (0, mY.jsx)(uY.n, {
        onClick: YY => {
          YY.stopPropagation()
        },
        children: rY
      }) : (0, mY.jsx)(uY.j, {
        onClick: YY => {
          AY(DY), YY.stopPropagation()
        },
        children: rY
      })
    }))
  },
  39674: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => xY
    });
    var FY = DY(19),
      AY = DY(25),
      IY = DY(3852),
      RY = DY(332),
      OY = DY(1619),
      gY = DY(7614),
      aY = DY(3863),
      vY = DY(8098),
      uY = DY(7642),
      sY = DY(7623),
      iY = DY(7647),
      yY = DY(1663),
      QY = DY(7655),
      oY = DY(8080),
      WY = DY(8225),
      EY = DY(8104),
      mY = DY(8230),
      VY = DY(1808),
      SY = DY(7598),
      lY = DY(8129),
      TY = DY(8126),
      eY = DY(8102);
    class NY {
      constructor() {
        this.lostAtMs = null
      }
      update(YY, rY) {
        return YY ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= rY, rY - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class BY {
      constructor(YY, rY) {
        this.press = YY, this.release = rY, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(YY, rY, DY, FY) {
        if (YY && null === this.downAtMs) return this.downAtMs = DY, this.latched = FY, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? YY && this.end() : !rY && DY - this.downAtMs >= 40 && this.end())
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
        const YY = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(YY)
      }
    }
    const cY = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      KY = YY => {
        let rY = null;
        const DY = new eY.d,
          FY = () => {
            rY && (((YY, rY, DY) => {
              switch (DY.kind) {
                case "reload":
                  return void rY.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void rY.specialActionUp(DY.action);
                case "customButton":
                  return void VY.gameBridge.send("pressCustomButton", {
                    id: DY.id,
                    down: !1
                  });
                case "touchButton":
                  YY.pressTouchButton(!1)
              }
            })(YY, rY.bodies, rY.action), rY = null)
          },
          IY = (DY, AY, IY, RY) => {
            FY(), rY = {
              action: AY,
              bodies: DY,
              heldBy: IY,
              atMs: RY
            }, ((YY, rY, DY) => {
              switch (DY.kind) {
                case "reload":
                  return rY.reloadGun(), void rY.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void rY.specialActionDown(DY.action);
                case "customButton":
                  return void VY.gameBridge.send("pressCustomButton", {
                    id: DY.id,
                    down: !0
                  });
                case "touchButton":
                  YY.pressTouchButton(!0)
              }
            })(YY, DY, AY)
          };
        return {
          update: (RY, OY, aY, vY) => {
            var sY;
            const iY = (0, lY.l)(YY.contextActionInputs()),
              yY = null !== (sY = iY[0]) && void 0 !== sY ? sY : cY;
            (0, TY.c)((0, lY.h)(yY) ? yY : null);
            const QY = (0, lY.d)(iY);
            (0, TY.g)(QY);
            const oY = (0, gY.i)("actionButton");
            if (QY) {
              const YY = DY.update(OY.wasPressed(oY), OY.isHeld(oY), aY, vY);
              "tap" === YY ? IY(RY, yY, [oY], aY) : "hold" === YY && (uY.b.consumeButton(oY), AY.g.vo(mY.l, iY))
            } else DY.release(), OY.wasPressed(oY) && IY(RY, yY, [oY], aY);
            rY && aY - rY.atMs >= 40 && !rY.heldBy.some((YY => (0, SY.E)(OY.frame.values, YY))) && FY()
          },
          pressPicked: (YY, rY) => {
            IY(YY, rY, [(0, gY.i)("menuConfirm"), (0, gY.i)("actionButton")], performance.now())
          },
          release: () => {
            DY.release(), FY(), (0, TY.c)(null), (0, TY.g)(!1)
          }
        }
      };
    var HY = DY(7594);
    var zY = DY(39667),
      ZY = DY(8146),
      CY = DY(7637),
      fY = DY(8255);
    var jY = DY(39663),
      hY = DY(8263),
      dY = DY(39677),
      JY = DY(8248),
      MY = DY(8153),
      wY = DY(8159),
      bY = DY(8166),
      XY = DY(8082);
    const qY = () => XY.c[(0, sY.i)().tapHoldTime].wheelMs,
      pY = () => ((0, vY.d)(), new Event("controllerMenuKey")),
      kY = (YY, rY, DY) => new BY((() => {
        const DY = YY.bodies();
        return {
          bodies: DY,
          press: rY(DY)
        }
      }), (YY => {
        let {
          bodies: rY,
          press: FY
        } = YY;
        DY(rY, FY)
      })),
      GY = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      xY = YY => {
        const rY = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let DY = GY;
        const vY = new dY.b,
          VY = AY.g.subscribe("appManagerUpdated|activeInputDevice", (rY => {
            YY.deviceChanged(rY)
          }));
        let lY = null,
          TY = 0;
        const BY = () => {
          lY = null, (0, MY.d)(null)
        };
        let cY = !1;
        const xY = new NY,
          nY = YY.look,
          PY = new eY.d,
          UY = new eY.d,
          LY = KY(YY),
          tY = AY.g.subscribe(mY.n, (rY => {
            LY.pressPicked(YY.bodies(), rY)
          })),
          Yr = kY(YY, (YY => YY.primaryFireDown()), ((YY, rY) => {
            YY.primaryFireUp(rY)
          })),
          rr = kY(YY, (YY => YY.altFireDown()), ((YY, rY) => {
            YY.altFireUp(rY)
          }));
        let Dr = !1,
          Fr = !1,
          Ar = !1;
        const Ir = (0, oY.b)(SY.Z),
          Rr = (0, oY.b)(SY.Z),
          Or = new eY.d;
        let gr = !1;
        const ar = () => {
            Ir.reset(), Rr.reset(), Or.release(), (0, bY.g)(!1), nY.release(), Yr.cancel(), (0, wY.c)(!1), rr.cancel(), LY.release(), PY.release(), UY.release(), BY()
          },
          vr = function() {
            let FY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            ar(), Fr = !1, FY || (Dr = !1, DY = GY, Object.assign(rY, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), YY.stopMoving())
          },
          ur = function(FY, AY, IY) {
            let RY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const OY = (0, sY.i)(),
              aY = (0, jY.f)(AY, OY.moveDeadzone),
              uY = (0, gY.i)("sprint");
            DY = (0, jY.p)(DY, {
              sprintPressed: FY.wasPressed(uY),
              magnitude: aY.magnitude,
              autoSprint: OY.autoSprint,
              nowMs: IY
            }), rY.running = DY.running, rY.sprintHeld = FY.isHeld(uY), rY.x = aY.x, rY.y = aY.y, rY.magnitude = aY.speed, rY.headingOffset = aY.headingOffset, Dr = aY.magnitude > 0;
            const iY = (0, gY.i)("jump");
            if (rY.jumpHeld = FY.isHeld(iY), rY.jumpPressed = FY.wasPressed(iY), rY.jumpPressed && YY.bodies().jumpDown(), RY) return void YY.move(rY, null);
            const yY = (0, gY.i)("sneak"),
              QY = vY.filter({
                sneakHeld: FY.isHeld(yY),
                sneakPressed: FY.wasPressed(yY),
                sneakTogglePressed: FY.wasPressed((0, gY.i)("sneakToggle"))
              }, IY);
            YY.move(rY, {
              ...QY,
              mode: OY.sneakMode
            })
          },
          sr = (YY, rY) => {
            const DY = (0, gY.i)("chat");
            if ("off" === (0, sY.i)().quickChat) return void(YY.wasPressed(DY) && (uY.b.consumeButton(DY), AY.g.vo(ZY.e)));
            const FY = PY.update(YY.wasPressed(DY), YY.isHeld(DY), rY, qY());
            "tap" === FY || "hold" === FY && null === (0, yY.b)() ? AY.g.vo(ZY.e) : "hold" === FY && (uY.b.consumeButton(DY), AY.g.vo(EY.k))
          },
          ir = (rY, DY) => {
            ((YY, rY) => {
              const DY = (0, WY.d)(),
                FY = (0, gY.i)("emoteWheel");
              if ("wheel" === (0, sY.i)().emoteButton) return YY.wasPressed(FY) && (uY.b.consumeButton(FY), AY.g.vo("requestEmoteWheelPadOpen", !0)), (0, WY.d)() !== DY;
              const IY = UY.update(YY.wasPressed(FY), YY.isHeld(FY), rY, qY());
              return "tap" === IY ? AY.g.vo("requestEmoteRepeatLast") : "hold" === IY && (uY.b.consumeButton(FY), AY.g.vo("requestEmoteWheelPadOpen", !1)), (0, WY.d)() !== DY
            })(rY, DY) || sr(rY, DY), rY.wasPressed((0, gY.i)("inventory")) && (uY.b.consumeButton((0, gY.i)("inventory")), (0, OY.x)(pY(), "inventory", YY.hasFullInventory())), rY.wasPressed((0, gY.i)("pause")) && (uY.b.consumeButton((0, gY.i)("pause")), (0, aY.c)() === RY.t.SOCIAL ? (0, OY.v)(pY(), RY.t.SOCIAL) : (0, OY.h)(pY())), rY.wasPressed((0, gY.i)("leaderboard")) && !(0, IY.c)() && (uY.b.consumeButton((0, gY.i)("leaderboard")), ((YY, rY) => {
              if ("shop" === (0, CY.c)()) return AY.g.vo(fY.m), void(0, OY.v)(YY, RY.t.SHOP, !0);
              (0, OY.v)(YY, RY.t.LOBBY_LEADERBOARD, rY)
            })(pY(), YY.hasLobbyLeaderboard()))
          },
          yr = (rY, DY) => {
            const FY = YY.bodies();
            ((rY, DY) => {
              const FY = (0, gY.i)("attack"),
                AY = rY.wasPressed(FY);
              AY && !Yr.isLatched() && (cY = YY.targetsBlock()), Yr.update(AY, rY.isHeld(FY), DY, "toggle" === (0, sY.i)().attackMode), Yr.isLatched() && cY ? xY.update(YY.targetsBlock(), DY) && Yr.unlatch() : xY.reset(), (0, wY.c)(Yr.isLatched())
            })(rY, DY), rr.update(rY.wasPressed((0, gY.i)("use")), rY.isHeld((0, gY.i)("use")), DY, !1), Ir.update(rY.isHeld((0, gY.i)("hotbarPrevious")), DY) && YY.scrollHotbar(-1), Rr.update(rY.isHeld((0, gY.i)("hotbarNext")), DY) && YY.scrollHotbar(1), ((rY, DY, FY) => {
              const AY = (0, gY.i)("perspective"),
                IY = (0, gY.i)("pickBlock"),
                RY = YY.pickBlockAllowed();
              (0, bY.g)(RY && !gr && YY.targetsBlock());
              const OY = () => {
                DY.pickBlock() && (gr = !0, (0, bY.g)(!1))
              };
              if (!RY || IY !== AY) return Or.release(), rY.wasPressed(AY) && DY.swapCameraZoom(), void(RY && rY.wasPressed(IY) && OY());
              const aY = Or.update(rY.wasPressed(IY), rY.isHeld(IY), FY, qY());
              "tap" === aY ? OY() : "hold" === aY && DY.swapCameraZoom()
            })(rY, FY, DY), ((rY, DY, FY) => {
              const AY = (0, gY.i)("drop");
              if (rY.wasPressed(AY)) {
                DY.dropItem(!1);
                const YY = (0, sY.i)();
                "off" !== YY.buttonRepeat && (lY = FY, TY = XY.c[YY.tapHoldTime].dropStackMs, (0, MY.d)(TY))
              }
              null !== lY && (!rY.isHeld(AY) || YY.selectedSlotEmpty() ? BY() : FY - lY >= TY && (BY(), DY.dropItem(!0)))
            })(rY, FY, DY), LY.update(FY, rY, DY, qY()), ir(rY, DY)
          },
          Qr = uY.b.register({
            name: "gameplay",
            isActive: () => {
              const rY = Dr && "keyboardMouse" === FY.b.get("activeInputDevice") && !(0, iY.E)(),
                DY = (0, iY.i)() ? [zY.c] : [];
              return ((0, iY.i)() || rY) && (0, QY.e)(DY) && YY.hasPlayer()
            },
            onFrame: YY => {
              const rY = performance.now(),
                DY = (0, sY.i)(),
                FY = (0, jY.t)(YY, (0, jY.j)(DY, (0, gY.i)("pause"), (0, hY.e)().isSupported())),
                AY = (0, jY.h)(FY, DY.swapSticks);
              return (0, iY.i)() ? (Fr = !1, (0, QY.e)() ? (Ar = !1, nY.update(AY.look, DY, FY.isHeld((0, gY.i)("use"))), ur(FY, AY.move, rY), void yr(FY, rY)) : (Ar || (Ar = !0, vY.lostToPadScreen(), vr()), void sr(FY, rY))) : (Fr || (ar(), Fr = !0), void ur(FY, AY.move, rY))
            },
            onDeactivate: YY => {
              (0, iY.i)() && vY.lostToPadScreen(), vr(YY)
            },
            onPeekFrame: rY => {
              (0, iY.i)() && (0, QY.e)(zY.g) && YY.hasPlayer() ? ur(rY, (0, jY.h)(rY, (0, sY.i)().swapSticks).move, performance.now(), !0) : vr()
            }
          }),
          or = (0, zY.e)(YY),
          Wr = (() => {
            const YY = AY.g.subscribe(HY.c, (YY => {
              !YY && (0, iY.i)() && "inGame" === FY.b.get("gameState") && AY.g.vo("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              AY.g.unsubscribe(YY)
            }
          })();
        return () => {
          vr(), YY.uninstall(), (0, JY.g)(!1), (0, bY.g)(!1), AY.g.unsubscribe(VY), AY.g.unsubscribe(tY), Qr(), or(), Wr(), nY.uninstall()
        }
      }
  },
  39667: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => yY,
      e: () => oY,
      g: () => iY
    });
    var FY = DY(1287),
      AY = DY(3852),
      IY = DY(8202),
      RY = DY(36311),
      OY = DY(1692),
      gY = DY(1208),
      aY = DY(7655),
      vY = DY(8104),
      uY = DY(8230);
    const sY = {
        emoteWheel: IY.i,
        quickChatWheel: vY.d,
        actionWheel: uY.o
      },
      iY = Object.keys(sY),
      yY = "dead",
      QY = YY => (0, FY.h)().includes(YY),
      oY = YY => {
        const rY = [(0, aY.k)(yY, (() => YY.hasPlayer() && YY.isPlayerDead())), (0, aY.k)("sleeping", (() => QY(RY.i))), (0, aY.k)("turnstile", (() => QY(gY.e))), (0, aY.k)("videoAd", OY.g), (0, aY.k)("replay", (() => (0, AY.c)() || YY.isReplayMode())), (0, aY.k)("freeCamera", (() => YY.isFreeCameraOn())), ...Object.entries(sY).map((YY => {
          let [rY, DY] = YY;
          return (0, aY.k)(rY, DY)
        }))];
        return () => {
          for (const YY of rY) YY()
        }
      }
  },
  39663: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY,
      f: () => gY,
      h: () => OY,
      j: () => vY,
      m: () => RY,
      n: () => IY,
      p: () => aY,
      t: () => uY
    });
    var FY = DY(7598);
    class AY {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(YY, rY, DY) {
        const AY = (0, FY.g)(YY, rY.lookDeadzone);
        if (Math.hypot(AY.x, AY.y) < .9 || Math.abs(AY.x) < Math.abs(AY.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = DY);
        const IY = (RY = rY.lookSensitivityX, Math.min(1, 100 / RY));
        var RY;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (DY - this.fullTiltSinceMs - 250 * IY) / (200 * IY)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const IY = (YY, rY, DY, AY, IY) => {
        let RY = 1;
        return "boost" === DY.lookCurve ? RY = YY.update(rY, DY, IY) : YY.reset(),
          function(YY, rY) {
            let {
              yawBoost: DY = 1,
              aiming: AY = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const IY = (0, FY.f)((0, FY.g)(YY, rY.lookDeadzone), rY.lookCurve),
              RY = 220 * Math.PI / 180,
              OY = AY ? rY.aimLookSensitivity / 100 : 1,
              gY = rY.lookSensitivityX / 100 * OY,
              aY = rY.lookSensitivityY / 100 * OY;
            return {
              yawRadPerSec: IY.x * RY * gY * DY * (rY.invertLookX ? -1 : 1),
              pitchRadPerSec: IY.y * RY * .7 * aY * (rY.invertLookY ? -1 : 1)
            }
          }(rY, DY, {
            yawBoost: RY,
            aiming: AY
          })
      },
      RY = (YY, rY) => {
        const DY = Math.max(0, Math.min(250, rY)) / 1e3;
        return {
          Tl: YY.yawRadPerSec * DY,
          Bl: YY.pitchRadPerSec * DY
        }
      },
      OY = (YY, rY) => rY ? {
        move: YY.rightStick,
        look: YY.leftStick
      } : {
        move: YY.leftStick,
        look: YY.rightStick
      },
      gY = (YY, rY) => {
        const DY = (0, FY.g)(YY, rY),
          AY = Math.min(1, Math.hypot(DY.x, DY.y));
        return {
          magnitude: AY,
          speed: Math.min(1, AY / .8),
          headingOffset: 0 === AY ? 0 : Math.atan2(DY.x, -DY.y),
          x: DY.x,
          y: DY.y
        }
      },
      aY = (YY, rY) => {
        let {
          sprintPressed: DY,
          magnitude: FY,
          autoSprint: AY,
          nowMs: IY
        } = rY;
        const RY = DY ? IY : YY.latchedAtMs,
          OY = (YY => {
            let {
              running: rY,
              magnitude: DY,
              sprintPressed: FY,
              autoSprint: AY
            } = YY;
            return !(DY < .5) && (!!FY || !!(AY && DY >= .9) || rY)
          })({
            running: YY.running,
            magnitude: FY,
            sprintPressed: IY - RY <= 1e3,
            autoSprint: AY
          });
        return {
          running: OY,
          latchedAtMs: OY ? -1 / 0 : RY
        }
      },
      vY = (YY, rY, DY) => DY && YY.gyroAiming && "button" === YY.gyroActivation && YY.gyroButton !== rY ? YY.gyroButton : null,
      uY = (YY, rY) => rY ? {
        ...YY,
        isHeld: DY => DY !== rY && YY.isHeld(DY),
        wasPressed: DY => DY !== rY && YY.wasPressed(DY),
        wasReleased: DY => DY !== rY && YY.wasReleased(DY),
        value: DY => DY === rY ? 0 : YY.value(DY)
      } : YY
  },
  39677: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY,
      e: () => FY
    });
    const FY = YY => {
      let {
        mode: rY,
        sneakHeld: DY,
        sneakPressed: FY,
        sneakTogglePressed: AY,
        descending: IY,
        canCrouch: RY,
        toggled: OY
      } = YY;
      return RY ? IY ? {
        crouchHeld: DY,
        toggled: !1
      } : "hold" === rY ? {
        crouchHeld: DY,
        toggled: AY ? !OY : OY
      } : {
        crouchHeld: !1,
        toggled: FY || AY ? !OY : OY
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class AY {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(YY, rY) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = rY, this.graceEndsMs = rY + 500);
        const DY = rY < this.graceEndsMs;
        return DY && (YY.sneakPressed || YY.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, rY + 300))), YY.sneakHeld ? DY && YY.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: YY.sneakHeld && !this.ignoringHeld,
          sneakPressed: YY.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: YY.sneakTogglePressed && !DY
        }
      }
    }
  },
  39651: (YY, rY, DY) => {
    DY(8263)
  },
  39658: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => mY
    });
    var FY = DY(25),
      AY = DY(8202),
      IY = DY(8216),
      RY = DY(7614),
      OY = DY(7642),
      gY = DY(7623),
      aY = DY(39663),
      vY = DY(39667),
      uY = DY(7655),
      sY = DY(7598),
      iY = DY(8104),
      yY = DY(8230);
    const QY = [{
        isOpen: AY.l,
        openButton: () => (0, RY.i)("emoteWheel"),
        aim: YY => {
          FY.g.vo("emoteWheelPadAim", YY)
        },
        commit: YY => {
          FY.g.vo("requestEmoteWheelPadCommit", YY)
        },
        close: () => {
          FY.g.vo("requestEmoteWheelClose")
        }
      }, {
        isOpen: iY.d,
        openButton: () => (0, RY.i)("chat"),
        aim: YY => {
          FY.g.vo(iY.g, YY)
        },
        commit: YY => {
          FY.g.vo(iY.i, YY)
        },
        close: () => {
          FY.g.vo(iY.h)
        },
        keptOpenBy: [vY.c]
      }, {
        isOpen: yY.o,
        openButton: () => (0, RY.i)("actionButton"),
        aim: YY => {
          FY.g.vo(yY.c, YY)
        },
        commit: YY => {
          FY.g.vo(yY.h, YY)
        },
        close: () => {
          FY.g.vo(yY.e)
        }
      }],
      oY = () => {
        var YY;
        return null !== (YY = QY.find((YY => YY.isOpen()))) && void 0 !== YY ? YY : null
      },
      WY = YY => (0, RY.J)(YY.openButton()),
      EY = (YY, rY) => !(0, sY.E)(YY.frame.values, rY),
      mY = () => {
        let YY = null,
          rY = !1,
          DY = !1;
        return OY.b.register({
          name: "wheel",
          isActive: () => null !== oY(),
          peek: () => {
            const YY = oY();
            return YY && WY(YY) ? null : {
              over: "gameplay",
              stick: (0, gY.i)().swapSticks ? "right" : "left"
            }
          },
          onFrame: FY => {
            var AY;
            const sY = oY();
            if (!sY) return;
            if (null !== (0, uY.b)([...vY.g, ...null !== (AY = sY.keptOpenBy) && void 0 !== AY ? AY : []])) return void sY.close();
            const iY = sY.openButton(),
              yY = (0, aY.h)(FY.frame, (0, gY.i)().swapSticks),
              QY = WY(sY) ? yY.move : yY.look;
            YY !== sY ? (YY = sY, rY = !EY(FY, iY) || Math.hypot(QY.x, QY.y) >= IY.G, DY = !1) : DY && (DY = !1, EY(FY, iY) && (rY = !1)), sY.aim(QY);
            const mY = (0, RY.i)("menuConfirm"),
              VY = (0, RY.i)("menuBack");
            return FY.wasPressed(VY) ? (OY.b.consumeButton(VY), void sY.close()) : FY.wasPressed(mY) || FY.wasPressed(iY) ? (OY.b.consumeButton(mY), OY.b.consumeButton(iY), void sY.commit(!1)) : void(rY && EY(FY, iY) && (rY = !1, sY.commit(!0)))
          },
          onDeactivate: () => {
            DY = null !== YY && oY() === YY, DY || (YY = null, rY = !1)
          }
        })
      }
  },
  8908: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY,
      g: () => IY
    });
    var FY = DY(8870);
    const AY = "Air",
      IY = Object.freeze(new FY.h(AY, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);
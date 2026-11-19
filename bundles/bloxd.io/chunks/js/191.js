export const id = 191;
export const ids = [191];
export const modules = {
  35874: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => wT,
      f: () => hT
    });
    var iT = IT(3826),
      zT = IT(1403),
      kT = IT(46),
      WT = IT(5975),
      XT = IT(3814),
      BT = IT(1253),
      FT = IT(1751),
      ST = IT(1729),
      DT = IT(1408),
      LT = IT(1171),
      xT = IT(35877),
      cT = IT(1042),
      KT = IT.n(cT),
      MT = IT(1280),
      rT = IT(1055),
      AT = IT(1249),
      gT = IT(1083);
    const hT = "SleepingOverlay";

    function wT() {
      const {
        t: TT
      } = (0, LT.t)(), [oT, IT] = (0, kT.useState)(!1), [cT, wT] = (0, kT.useState)(null), [eT, RT] = (0, kT.useState)(1), [uT, vT] = (0, kT.useState)(!1), [ET, fT] = (0, kT.useState)(!1), CT = (0, kT.useRef)(0), jT = (0, kT.useRef)(!1), JT = (0, kT.useRef)(!1), UT = (0, kT.useRef)(), aT = (0, kT.useRef)(null);

      function YT() {
        const TT = null !== cT && void 0 !== cT ? cT : "Rested Speed";
        FT.gameBridge.send("wakeUp", ET ? TT : null), aT.current = null, IT(!1), wT(null), RT(1), vT(!1), fT(!1)
      }

      function QT() {
        return !uT && (YT(), !0)
      }
      return (0, zT.g)("PlayerPhysicsTypeUpdate", (TT => {
        TT !== aT.current && (aT.current = TT, TT === WT.r.SLEEPING ? (JT.current || (CT.current = FT.gameBridge.lookup("cameraZoom", null), JT.current = !0), jT.current = !0, FT.gameBridge.send("setCameraZoom", 3), IT(!0), RT(function() {
          for (const TT of FT.gameBridge.lookup("blocksStandingOn", null)) {
            if (xT.d.leafBeds.includes(TT)) return console.log(`Found leaf bed: ${TT}`), 1;
            if (xT.d.woolBeds.includes(TT)) return console.log(`Found woold bed: ${TT}`), 2;
            if (xT.d.strongBeds.includes(TT)) return console.log(`Found strong bed ${TT}`), 3
          }
          return 1
        }())) : (JT.current = !1, IT(!1), wT(null), RT(1)))
      })), (0, kT.useEffect)((() => () => {
        (0, BT.n)(hT)
      }), []), (0, kT.useEffect)((() => {
        oT ? (0, BT.o)(hT) : ((0, BT.n)(hT), jT.current && (FT.gameBridge.send("setCameraZoom", CT.current), jT.current = !1))
      }), [oT]), (0, AT.s)("overlay", UT, QT, oT), (0, gT.jsx)(iT.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: oT,
        timeout: 300,
        nodeRef: UT,
        unmountOnExit: !0,
        children: (0, gT.jsx)("div", {
          ref: UT,
          onClick: TT => {
            QT() && TT.stopPropagation()
          },
          children: (0, gT.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, gT.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: XT.i.map((oT => (0, gT.jsxs)(mT, {
                restedEffect: oT,
                pW: cT,
                setChosenRestedEffect: wT,
                children: [(0, gT.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, gT.jsx)(ST.c, {
                    text: [{
                      icon: oT
                    }]
                  }), XT.f[oT].shortName]
                }), (0, gT.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: TT(XT.f[oT].description, {
                    time: XT.f[oT].effectLevelDurations[eT] / 6e4
                  })
                })]
              }, oT)))
            }), (0, gT.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, gT.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, gT.jsxs)(DT.e, {
                className: "SleepingOverlayWakeUpButton",
                onClick: TT => {
                  ET ? YT() : (vT(!0), (0, MT.ab)((() => {
                    vT(!1), fT(!0)
                  }), !0)), TT.stopPropagation()
                },
                loading: uT,
                children: [!ET && (0, gT.jsxs)(gT.Fragment, {
                  children: [(0, gT.jsx)(rT.e, {
                    name: "film"
                  }), " ", TT("classicGame:watchAdToGetRestedPerk")]
                }), ET && TT("classicGame:wakeUp")]
              }), (0, gT.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, gT.jsx)("div", {
                  className: KT()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === eT
                  }),
                  children: (0, gT.jsx)(ST.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, gT.jsx)("div", {
                  className: KT()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === eT
                  }),
                  children: (0, gT.jsx)(ST.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, gT.jsx)("div", {
                  className: KT()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === eT
                  }),
                  children: (0, gT.jsx)(ST.c, {
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
    const mT = (0, kT.memo)((function(TT) {
      let {
        children: oT,
        restedEffect: IT,
        pW: iT,
        setChosenRestedEffect: zT
      } = TT;
      return IT === iT ? (0, gT.jsx)(DT.m, {
        onClick: TT => {
          TT.stopPropagation()
        },
        children: oT
      }) : (0, gT.jsx)(DT.i, {
        onClick: TT => {
          zT(IT), TT.stopPropagation()
        },
        children: oT
      })
    }))
  },
  39342: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => bT
    });
    var iT = IT(12),
      zT = IT(16),
      kT = IT(3841),
      WT = IT(306),
      XT = IT(1585),
      BT = IT(7618),
      FT = IT(3854),
      ST = IT(8123),
      DT = IT(7655),
      LT = IT(7629),
      xT = IT(7658),
      cT = IT(1632),
      KT = IT(7667),
      MT = IT(8080),
      rT = IT(8231),
      AT = IT(8135),
      gT = IT(8238),
      hT = IT(1751),
      wT = IT(7605),
      mT = IT(8152),
      eT = IT(8149),
      RT = IT(8129);
    class uT {
      constructor() {
        this.lostAtMs = null
      }
      update(TT, oT) {
        return TT ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= oT, oT - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class vT {
      constructor(TT, oT) {
        this.press = TT, this.release = oT, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(TT, oT, IT, iT) {
        if (TT && null === this.downAtMs) return this.downAtMs = IT, this.latched = iT, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? TT && this.end() : !oT && IT - this.downAtMs >= 40 && this.end())
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
        const TT = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(TT)
      }
    }
    const ET = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      fT = TT => {
        let oT = null;
        const IT = new RT.d,
          iT = () => {
            oT && (((TT, oT, IT) => {
              switch (IT.kind) {
                case "reload":
                  return void oT.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void oT.specialActionUp(IT.action);
                case "customButton":
                  return void hT.gameBridge.send("pressCustomButton", {
                    id: IT.id,
                    down: !1
                  });
                case "touchButton":
                  TT.pressTouchButton(!1)
              }
            })(TT, oT.bodies, oT.action), oT = null)
          },
          kT = (IT, zT, kT, WT) => {
            iT(), oT = {
              action: zT,
              bodies: IT,
              heldBy: kT,
              atMs: WT
            }, ((TT, oT, IT) => {
              switch (IT.kind) {
                case "reload":
                  return oT.reloadGun(), void oT.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void oT.specialActionDown(IT.action);
                case "customButton":
                  return void hT.gameBridge.send("pressCustomButton", {
                    id: IT.id,
                    down: !0
                  });
                case "touchButton":
                  TT.pressTouchButton(!0)
              }
            })(TT, IT, zT)
          };
        return {
          update: (WT, XT, FT, ST) => {
            var LT;
            const xT = (0, mT.h)(TT.contextActionInputs()),
              cT = null !== (LT = xT[0]) && void 0 !== LT ? LT : ET;
            (0, eT.b)((0, mT.f)(cT) ? cT : null);
            const KT = (0, mT.c)(xT);
            (0, eT.c)(KT);
            const MT = (0, BT.k)("actionButton");
            if (KT) {
              const TT = IT.update(XT.wasPressed(MT), XT.isHeld(MT), FT, ST);
              "tap" === TT ? kT(WT, cT, [MT], FT) : "hold" === TT && (DT.c.consumeButton(MT), zT.h.XM(gT.k, xT))
            } else IT.release(), XT.wasPressed(MT) && kT(WT, cT, [MT], FT);
            oT && FT - oT.atMs >= 40 && !oT.heldBy.some((TT => (0, wT.O)(XT.frame.values, TT))) && iT()
          },
          pressPicked: (TT, oT) => {
            kT(TT, oT, [(0, BT.k)("menuConfirm"), (0, BT.k)("actionButton")], performance.now())
          },
          release: () => {
            IT.release(), iT(), (0, eT.b)(null), (0, eT.c)(!1)
          }
        }
      };
    var CT = IT(7599);
    var jT = IT(39338),
      JT = IT(8163),
      UT = IT(7647),
      aT = IT(8276);
    var YT = IT(39329),
      QT = IT(8280),
      OT = IT(39346),
      HT = IT(8258),
      nT = IT(8172),
      qT = IT(8181),
      ZT = IT(8190),
      lT = IT(8089);
    const sT = () => lT.c[(0, LT.j)().tapHoldTime].wheelMs,
      tT = () => ((0, ST.e)(), new Event("controllerMenuKey")),
      GT = (TT, oT, IT) => new vT((() => {
        const IT = TT.bodies();
        return {
          bodies: IT,
          press: oT(IT)
        }
      }), (TT => {
        let {
          bodies: oT,
          press: iT
        } = TT;
        IT(oT, iT)
      })),
      pT = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      bT = TT => {
        const oT = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let IT = pT;
        const ST = new OT.e,
          hT = zT.h.subscribe("appManagerUpdated|activeInputDevice", (oT => {
            TT.deviceChanged(oT)
          }));
        let mT = null,
          eT = 0;
        const vT = () => {
          mT = null, (0, nT.f)(null)
        };
        let ET = !1;
        const bT = new uT,
          yT = TT.look,
          NT = new RT.d,
          PT = new RT.d,
          dT = fT(TT),
          VT = zT.h.subscribe(gT.n, (oT => {
            dT.pressPicked(TT.bodies(), oT)
          })),
          To = GT(TT, (TT => TT.primaryFireDown()), ((TT, oT) => {
            TT.primaryFireUp(oT)
          })),
          oo = GT(TT, (TT => TT.altFireDown()), ((TT, oT) => {
            TT.altFireUp(oT)
          }));
        let Io = !1,
          io = !1,
          zo = !1;
        const ko = (0, MT.d)(wT._),
          Wo = (0, MT.d)(wT._),
          Xo = new RT.d;
        let Bo = !1;
        const Fo = () => {
            ko.reset(), Wo.reset(), Xo.release(), (0, ZT.e)(!1), yT.release(), To.cancel(), (0, qT.g)(!1), oo.cancel(), dT.release(), NT.release(), PT.release(), vT()
          },
          So = function() {
            let iT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            Fo(), io = !1, iT || (Io = !1, IT = pT, Object.assign(oT, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), TT.stopMoving())
          },
          Do = function(iT, zT, kT) {
            let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const XT = (0, LT.j)(),
              FT = (0, YT.f)(zT, XT.moveDeadzone),
              DT = (0, BT.k)("sprint");
            IT = (0, YT.o)(IT, {
              sprintPressed: iT.wasPressed(DT),
              magnitude: FT.magnitude,
              autoSprint: XT.autoSprint,
              nowMs: kT
            }), oT.running = IT.running, oT.sprintHeld = iT.isHeld(DT), oT.x = FT.x, oT.y = FT.y, oT.magnitude = FT.speed, oT.headingOffset = FT.headingOffset, Io = FT.magnitude > 0;
            const xT = (0, BT.k)("jump");
            if (oT.jumpHeld = iT.isHeld(xT), oT.jumpPressed = iT.wasPressed(xT), oT.jumpPressed && TT.bodies().jumpDown(), WT) return void TT.move(oT, null);
            const cT = (0, BT.k)("sneak"),
              KT = ST.filter({
                sneakHeld: iT.isHeld(cT),
                sneakPressed: iT.wasPressed(cT),
                sneakTogglePressed: iT.wasPressed((0, BT.k)("sneakToggle"))
              }, kT);
            TT.move(oT, {
              ...KT,
              mode: XT.sneakMode
            })
          },
          Lo = (TT, oT) => {
            const IT = (0, BT.k)("chat");
            if ("off" === (0, LT.j)().quickChat) return void(TT.wasPressed(IT) && (DT.c.consumeButton(IT), zT.h.XM(JT.e)));
            const iT = NT.update(TT.wasPressed(IT), TT.isHeld(IT), oT, sT());
            "tap" === iT || "hold" === iT && null === (0, cT.b)() ? zT.h.XM(JT.e) : "hold" === iT && (DT.c.consumeButton(IT), zT.h.XM(AT.n))
          },
          xo = (oT, IT) => {
            ((TT, oT) => {
              const IT = (0, rT.e)(),
                iT = (0, BT.k)("emoteWheel");
              if ("wheel" === (0, LT.j)().emoteButton) return TT.wasPressed(iT) && (DT.c.consumeButton(iT), zT.h.XM("requestEmoteWheelPadOpen", !0)), (0, rT.e)() !== IT;
              const kT = PT.update(TT.wasPressed(iT), TT.isHeld(iT), oT, sT());
              return "tap" === kT ? zT.h.XM("requestEmoteRepeatLast") : "hold" === kT && (DT.c.consumeButton(iT), zT.h.XM("requestEmoteWheelPadOpen", !1)), (0, rT.e)() !== IT
            })(oT, IT) || Lo(oT, IT), oT.wasPressed((0, BT.k)("inventory")) && (DT.c.consumeButton((0, BT.k)("inventory")), (0, XT.B)(tT(), "inventory", TT.hasFullInventory())), oT.wasPressed((0, BT.k)("pause")) && (DT.c.consumeButton((0, BT.k)("pause")), (0, FT.d)() === WT.q.SOCIAL ? (0, XT.y)(tT(), WT.q.SOCIAL) : (0, XT.k)(tT())), oT.wasPressed((0, BT.k)("leaderboard")) && !(0, kT.e)() && (DT.c.consumeButton((0, BT.k)("leaderboard")), ((TT, oT) => {
              if ("shop" === (0, UT.b)()) return zT.h.XM(aT.k), void(0, XT.y)(TT, WT.q.SHOP, !0);
              (0, XT.y)(TT, WT.q.LOBBY_LEADERBOARD, oT)
            })(tT(), TT.hasLobbyLeaderboard()))
          },
          co = (oT, IT) => {
            const iT = TT.bodies();
            ((oT, IT) => {
              const iT = (0, BT.k)("attack"),
                zT = oT.wasPressed(iT);
              zT && !To.isLatched() && (ET = TT.targetsBlock()), To.update(zT, oT.isHeld(iT), IT, "toggle" === (0, LT.j)().attackMode), To.isLatched() && ET ? bT.update(TT.targetsBlock(), IT) && To.unlatch() : bT.reset(), (0, qT.g)(To.isLatched())
            })(oT, IT), oo.update(oT.wasPressed((0, BT.k)("use")), oT.isHeld((0, BT.k)("use")), IT, !1), ko.update(oT.isHeld((0, BT.k)("hotbarPrevious")), IT) && TT.scrollHotbar(-1), Wo.update(oT.isHeld((0, BT.k)("hotbarNext")), IT) && TT.scrollHotbar(1), ((oT, IT, iT) => {
              const zT = (0, BT.k)("perspective"),
                kT = (0, BT.k)("pickBlock"),
                WT = TT.pickBlockAllowed();
              (0, ZT.e)(WT && !Bo && TT.targetsBlock());
              const XT = () => {
                IT.pickBlock() && (Bo = !0, (0, ZT.e)(!1))
              };
              if (!WT || kT !== zT) return Xo.release(), oT.wasPressed(zT) && IT.swapCameraZoom(), void(WT && oT.wasPressed(kT) && XT());
              const FT = Xo.update(oT.wasPressed(kT), oT.isHeld(kT), iT, sT());
              "tap" === FT ? XT() : "hold" === FT && IT.swapCameraZoom()
            })(oT, iT, IT), ((oT, IT, iT) => {
              const zT = (0, BT.k)("drop");
              if (oT.wasPressed(zT)) {
                IT.dropItem(!1);
                const TT = (0, LT.j)();
                "off" !== TT.buttonRepeat && (mT = iT, eT = lT.c[TT.tapHoldTime].dropStackMs, (0, nT.f)(eT))
              }
              null !== mT && (!oT.isHeld(zT) || TT.selectedSlotEmpty() ? vT() : iT - mT >= eT && (vT(), IT.dropItem(!0)))
            })(oT, iT, IT), dT.update(iT, oT, IT, sT()), xo(oT, IT)
          },
          Ko = DT.c.register({
            name: "gameplay",
            isActive: () => {
              const oT = Io && "keyboardMouse" === iT.c.get("activeInputDevice") && !(0, xT.G)(),
                IT = (0, xT.l)() ? [jT.e] : [];
              return ((0, xT.l)() || oT) && (0, KT.f)(IT) && TT.hasPlayer()
            },
            onFrame: TT => {
              const oT = performance.now(),
                IT = (0, LT.j)(),
                iT = (0, YT.p)(TT, (0, YT.i)(IT, (0, BT.k)("pause"), (0, QT.e)().isSupported())),
                zT = (0, YT.h)(iT, IT.swapSticks);
              return (0, xT.l)() ? (io = !1, (0, KT.f)() ? (zo = !1, yT.update(zT.look, IT, iT.isHeld((0, BT.k)("use"))), Do(iT, zT.move, oT), void co(iT, oT)) : (zo || (zo = !0, ST.lostToPadScreen(), So()), void Lo(iT, oT))) : (io || (Fo(), io = !0), void Do(iT, zT.move, oT))
            },
            onDeactivate: TT => {
              (0, xT.l)() && ST.lostToPadScreen(), So(TT)
            },
            onPeekFrame: oT => {
              (0, xT.l)() && (0, KT.f)(jT.j) && TT.hasPlayer() ? Do(oT, (0, YT.h)(oT, (0, LT.j)().swapSticks).move, performance.now(), !0) : So()
            }
          }),
          Mo = (0, jT.g)(TT),
          ro = (() => {
            const TT = zT.h.subscribe(CT.d, (TT => {
              !TT && (0, xT.l)() && "inGame" === iT.c.get("gameState") && zT.h.XM("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              zT.h.unsubscribe(TT)
            }
          })();
        return () => {
          So(), TT.uninstall(), (0, HT.g)(!1), (0, ZT.e)(!1), zT.h.unsubscribe(hT), zT.h.unsubscribe(VT), Ko(), Mo(), ro(), yT.uninstall()
        }
      }
  },
  39338: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => cT,
      g: () => MT,
      j: () => xT
    });
    var iT = IT(1253),
      zT = IT(3841),
      kT = IT(8223),
      WT = IT(35874),
      XT = IT(1658),
      BT = IT(1167),
      FT = IT(7667),
      ST = IT(8135),
      DT = IT(8238);
    const LT = {
        emoteWheel: kT.g,
        quickChatWheel: ST.c,
        actionWheel: DT.p
      },
      xT = Object.keys(LT),
      cT = "dead",
      KT = TT => (0, iT.l)().includes(TT),
      MT = TT => {
        const oT = [(0, FT.l)(cT, (() => TT.hasPlayer() && TT.isPlayerDead())), (0, FT.l)("sleeping", (() => KT(WT.f))), (0, FT.l)("turnstile", (() => KT(BT.e))), (0, FT.l)("videoAd", XT.e), (0, FT.l)("replay", (() => (0, zT.e)() || TT.isReplayMode())), (0, FT.l)("freeCamera", (() => TT.isFreeCameraOn())), ...Object.entries(LT).map((TT => {
          let [oT, IT] = TT;
          return (0, FT.l)(oT, IT)
        }))];
        return () => {
          for (const TT of oT) TT()
        }
      }
  },
  39329: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT,
      f: () => BT,
      h: () => XT,
      i: () => ST,
      k: () => WT,
      m: () => kT,
      o: () => FT,
      p: () => DT
    });
    var iT = IT(7605);
    class zT {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(TT, oT, IT) {
        const zT = (0, iT.n)(TT, oT.lookDeadzone);
        if (Math.hypot(zT.x, zT.y) < .9 || Math.abs(zT.x) < Math.abs(zT.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = IT);
        const kT = (WT = oT.lookSensitivityX, Math.min(1, 100 / WT));
        var WT;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (IT - this.fullTiltSinceMs - 250 * kT) / (200 * kT)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const kT = (TT, oT, IT, zT, kT) => {
        let WT = 1;
        return "boost" === IT.lookCurve ? WT = TT.update(oT, IT, kT) : TT.reset(),
          function(TT, oT) {
            let {
              yawBoost: IT = 1,
              aiming: zT = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const kT = (0, iT.k)((0, iT.n)(TT, oT.lookDeadzone), oT.lookCurve),
              WT = 220 * Math.PI / 180,
              XT = zT ? oT.aimLookSensitivity / 100 : 1,
              BT = oT.lookSensitivityX / 100 * XT,
              FT = oT.lookSensitivityY / 100 * XT;
            return {
              yawRadPerSec: kT.x * WT * BT * IT * (oT.invertLookX ? -1 : 1),
              pitchRadPerSec: kT.y * WT * .7 * FT * (oT.invertLookY ? -1 : 1)
            }
          }(oT, IT, {
            yawBoost: WT,
            aiming: zT
          })
      },
      WT = (TT, oT) => {
        const IT = Math.max(0, Math.min(250, oT)) / 1e3;
        return {
          RC: TT.yawRadPerSec * IT,
          uC: TT.pitchRadPerSec * IT
        }
      },
      XT = (TT, oT) => oT ? {
        move: TT.rightStick,
        look: TT.leftStick
      } : {
        move: TT.leftStick,
        look: TT.rightStick
      },
      BT = (TT, oT) => {
        const IT = (0, iT.n)(TT, oT),
          zT = Math.min(1, Math.hypot(IT.x, IT.y));
        return {
          magnitude: zT,
          speed: Math.min(1, zT / .8),
          headingOffset: 0 === zT ? 0 : Math.atan2(IT.x, -IT.y),
          x: IT.x,
          y: IT.y
        }
      },
      FT = (TT, oT) => {
        let {
          sprintPressed: IT,
          magnitude: iT,
          autoSprint: zT,
          nowMs: kT
        } = oT;
        const WT = IT ? kT : TT.latchedAtMs,
          XT = (TT => {
            let {
              running: oT,
              magnitude: IT,
              sprintPressed: iT,
              autoSprint: zT
            } = TT;
            return !(IT < .5) && (!!iT || !!(zT && IT >= .9) || oT)
          })({
            running: TT.running,
            magnitude: iT,
            sprintPressed: kT - WT <= 1e3,
            autoSprint: zT
          });
        return {
          running: XT,
          latchedAtMs: XT ? -1 / 0 : WT
        }
      },
      ST = (TT, oT, IT) => IT && TT.gyroAiming && "button" === TT.gyroActivation && TT.gyroButton !== oT ? TT.gyroButton : null,
      DT = (TT, oT) => oT ? {
        ...TT,
        isHeld: IT => IT !== oT && TT.isHeld(IT),
        wasPressed: IT => IT !== oT && TT.wasPressed(IT),
        wasReleased: IT => IT !== oT && TT.wasReleased(IT),
        value: IT => IT === oT ? 0 : TT.value(IT)
      } : TT
  },
  39346: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT,
      i: () => iT
    });
    const iT = TT => {
      let {
        mode: oT,
        sneakHeld: IT,
        sneakPressed: iT,
        sneakTogglePressed: zT,
        descending: kT,
        canCrouch: WT,
        toggled: XT
      } = TT;
      return WT ? kT ? {
        crouchHeld: IT,
        toggled: !1
      } : "hold" === oT ? {
        crouchHeld: IT,
        toggled: zT ? !XT : XT
      } : {
        crouchHeld: !1,
        toggled: iT || zT ? !XT : XT
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class zT {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(TT, oT) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = oT, this.graceEndsMs = oT + 500);
        const IT = oT < this.graceEndsMs;
        return IT && (TT.sneakPressed || TT.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, oT + 300))), TT.sneakHeld ? IT && TT.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: TT.sneakHeld && !this.ignoringHeld,
          sneakPressed: TT.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: TT.sneakTogglePressed && !IT
        }
      }
    }
  },
  39321: (TT, oT, IT) => {
    IT(8280)
  },
  39323: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => gT
    });
    var iT = IT(16),
      zT = IT(8223),
      kT = IT(8229),
      WT = IT(7618),
      XT = IT(7655),
      BT = IT(7629),
      FT = IT(39329),
      ST = IT(39338),
      DT = IT(7667),
      LT = IT(7605),
      xT = IT(8135),
      cT = IT(8238);
    const KT = [{
        isOpen: zT.h,
        openButton: () => (0, WT.k)("emoteWheel"),
        aim: TT => {
          iT.h.XM("emoteWheelPadAim", TT)
        },
        commit: TT => {
          iT.h.XM("requestEmoteWheelPadCommit", TT)
        },
        close: () => {
          iT.h.XM("requestEmoteWheelClose")
        }
      }, {
        isOpen: xT.c,
        openButton: () => (0, WT.k)("chat"),
        aim: TT => {
          iT.h.XM(xT.e, TT)
        },
        commit: TT => {
          iT.h.XM(xT.m, TT)
        },
        close: () => {
          iT.h.XM(xT.i)
        },
        keptOpenBy: [ST.e]
      }, {
        isOpen: cT.p,
        openButton: () => (0, WT.k)("actionButton"),
        aim: TT => {
          iT.h.XM(cT.e, TT)
        },
        commit: TT => {
          iT.h.XM(cT.h, TT)
        },
        close: () => {
          iT.h.XM(cT.f)
        }
      }],
      MT = () => {
        var TT;
        return null !== (TT = KT.find((TT => TT.isOpen()))) && void 0 !== TT ? TT : null
      },
      rT = TT => (0, WT.S)(TT.openButton()),
      AT = (TT, oT) => !(0, LT.O)(TT.frame.values, oT),
      gT = () => {
        let TT = null,
          oT = !1,
          IT = !1;
        return XT.c.register({
          name: "wheel",
          isActive: () => null !== MT(),
          peek: () => {
            const TT = MT();
            return TT && rT(TT) ? null : {
              over: "gameplay",
              stick: (0, BT.j)().swapSticks ? "right" : "left"
            }
          },
          onFrame: iT => {
            var zT;
            const LT = MT();
            if (!LT) return;
            if (null !== (0, DT.e)([...ST.j, ...null !== (zT = LT.keptOpenBy) && void 0 !== zT ? zT : []])) return void LT.close();
            const xT = LT.openButton(),
              cT = (0, FT.h)(iT.frame, (0, BT.j)().swapSticks),
              KT = rT(LT) ? cT.move : cT.look;
            TT !== LT ? (TT = LT, oT = !AT(iT, xT) || Math.hypot(KT.x, KT.y) >= kT.D, IT = !1) : IT && (IT = !1, AT(iT, xT) && (oT = !1)), LT.aim(KT);
            const gT = (0, WT.k)("menuConfirm"),
              hT = (0, WT.k)("menuBack");
            return iT.wasPressed(hT) ? (XT.c.consumeButton(hT), void LT.close()) : iT.wasPressed(gT) || iT.wasPressed(xT) ? (XT.c.consumeButton(gT), XT.c.consumeButton(xT), void LT.commit(!1)) : void(oT && AT(iT, xT) && (oT = !1, LT.commit(!0)))
          },
          onDeactivate: () => {
            IT = null !== TT && MT() === TT, IT || (TT = null, oT = !1)
          }
        })
      }
  },
  8914: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT,
      d: () => kT
    });
    var iT = IT(8869);
    const zT = "Air",
      kT = Object.freeze(new iT.f(zT, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
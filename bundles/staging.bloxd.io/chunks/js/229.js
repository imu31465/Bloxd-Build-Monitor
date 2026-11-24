export const id = 229;
export const ids = [229];
export const modules = {
  37025: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => bT,
      c: () => iT
    });
    var WT = mT(4341),
      zT = mT(1567),
      MT = mT(63),
      gT = mT(6542),
      nT = mT(4330),
      HT = mT(1388),
      kT = mT(2046),
      jT = mT(2023),
      lT = mT(1569),
      LT = mT(1288),
      pT = mT(37030),
      BT = mT(1126),
      ZT = mT.n(BT),
      cT = mT(1416),
      vT = mT(1135),
      fT = mT(1376),
      qT = mT(1188);
    const iT = "SleepingOverlay";

    function bT() {
      const {
        t: TT
      } = (0, LT.z)(), [UT, mT] = (0, MT.useState)(!1), [BT, bT] = (0, MT.useState)(null), [eT, YT] = (0, MT.useState)(1), [JT, xT] = (0, MT.useState)(!1), [dT, wT] = (0, MT.useState)(!1), tT = (0, MT.useRef)(0), aT = (0, MT.useRef)(!1), yT = (0, MT.useRef)(!1), XT = (0, MT.useRef)(), IT = (0, MT.useRef)(null);

      function QT() {
        const TT = null !== BT && void 0 !== BT ? BT : "Rested Speed";
        kT.gameBridge.send("wakeUp", dT ? TT : null), IT.current = null, mT(!1), bT(null), YT(1), xT(!1), wT(!1)
      }

      function sT() {
        return !JT && (QT(), !0)
      }
      return (0, zT.g)("PlayerPhysicsTypeUpdate", (TT => {
        TT !== IT.current && (IT.current = TT, TT === gT.q.SLEEPING ? (yT.current || (tT.current = kT.gameBridge.lookup("cameraZoom", null), yT.current = !0), aT.current = !0, kT.gameBridge.send("setCameraZoom", 3), mT(!0), YT(function() {
          for (const TT of kT.gameBridge.lookup("blocksStandingOn", null)) {
            if (pT.e.leafBeds.includes(TT)) return console.log(`Found leaf bed: ${TT}`), 1;
            if (pT.e.woolBeds.includes(TT)) return console.log(`Found woold bed: ${TT}`), 2;
            if (pT.e.strongBeds.includes(TT)) return console.log(`Found strong bed ${TT}`), 3
          }
          return 1
        }())) : (yT.current = !1, mT(!1), bT(null), YT(1)))
      })), (0, MT.useEffect)((() => () => {
        (0, HT.o)(iT)
      }), []), (0, MT.useEffect)((() => {
        UT ? (0, HT.s)(iT) : ((0, HT.o)(iT), aT.current && (kT.gameBridge.send("setCameraZoom", tT.current), aT.current = !1))
      }), [UT]), (0, fT.p)("overlay", XT, sT, UT), (0, qT.jsx)(WT.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: UT,
        timeout: 300,
        nodeRef: XT,
        unmountOnExit: !0,
        children: (0, qT.jsx)("div", {
          ref: XT,
          onClick: TT => {
            sT() && TT.stopPropagation()
          },
          children: (0, qT.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, qT.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: nT.i.map((UT => (0, qT.jsxs)(OT, {
                restedEffect: UT,
                OH: BT,
                setChosenRestedEffect: bT,
                children: [(0, qT.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, qT.jsx)(jT.e, {
                    text: [{
                      icon: UT
                    }]
                  }), nT.e[UT].shortName]
                }), (0, qT.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: TT(nT.e[UT].description, {
                    time: nT.e[UT].effectLevelDurations[eT] / 6e4
                  })
                })]
              }, UT)))
            }), (0, qT.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, qT.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, qT.jsxs)(lT.e, {
                className: "SleepingOverlayWakeUpButton",
                onClick: TT => {
                  dT ? QT() : (xT(!0), (0, cT.ab)((() => {
                    xT(!1), wT(!0)
                  }), !0)), TT.stopPropagation()
                },
                loading: JT,
                children: [!dT && (0, qT.jsxs)(qT.Fragment, {
                  children: [(0, qT.jsx)(vT.c, {
                    name: "film"
                  }), " ", TT("classicGame:watchAdToGetRestedPerk")]
                }), dT && TT("classicGame:wakeUp")]
              }), (0, qT.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, qT.jsx)("div", {
                  className: ZT()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === eT
                  }),
                  children: (0, qT.jsx)(jT.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, qT.jsx)("div", {
                  className: ZT()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === eT
                  }),
                  children: (0, qT.jsx)(jT.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, qT.jsx)("div", {
                  className: ZT()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === eT
                  }),
                  children: (0, qT.jsx)(jT.e, {
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
    const OT = (0, MT.memo)((function(TT) {
      let {
        children: UT,
        restedEffect: mT,
        OH: WT,
        setChosenRestedEffect: zT
      } = TT;
      return mT === WT ? (0, qT.jsx)(lT.l, {
        onClick: TT => {
          TT.stopPropagation()
        },
        children: UT
      }) : (0, qT.jsx)(lT.g, {
        onClick: TT => {
          zT(mT), TT.stopPropagation()
        },
        children: UT
      })
    }))
  },
  40699: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => DT
    });
    var WT = mT(25),
      zT = mT(31),
      MT = mT(4370),
      gT = mT(351),
      nT = mT(1752),
      HT = mT(8295),
      kT = mT(4380),
      jT = mT(8837),
      lT = mT(8331),
      LT = mT(8305),
      pT = mT(8338),
      BT = mT(1513),
      ZT = mT(1799),
      cT = mT(8344),
      vT = mT(8790),
      fT = mT(8923),
      qT = mT(8847),
      iT = mT(8925),
      bT = mT(2046),
      OT = mT(8282),
      eT = mT(8865),
      YT = mT(8861),
      JT = mT(8841);
    class xT {
      constructor() {
        this.lostAtMs = null
      }
      update(TT, UT) {
        return TT ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= UT, UT - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class dT {
      constructor(TT, UT) {
        this.press = TT, this.release = UT, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(TT, UT, mT, WT) {
        if (TT && null === this.downAtMs) return this.downAtMs = mT, this.latched = WT, void(this.token = this.press(WT));
        null !== this.downAtMs && (this.latched ? TT && this.end() : !UT && mT - this.downAtMs >= 40 && this.end())
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
    const wT = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      tT = TT => {
        let UT = null;
        const mT = new JT.e,
          WT = () => {
            UT && (((TT, UT, mT) => {
              switch (mT.kind) {
                case "reload":
                  return void UT.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void UT.specialActionUp(mT.action);
                case "customButton":
                  return void bT.gameBridge.send("pressCustomButton", {
                    id: mT.id,
                    down: !1
                  });
                case "touchButton":
                  TT.pressTouchButton(!1)
              }
            })(TT, UT.bodies, UT.action), UT = null)
          },
          MT = (mT, zT, MT, gT) => {
            WT(), UT = {
              action: zT,
              bodies: mT,
              heldBy: MT,
              atMs: gT
            }, ((TT, UT, mT) => {
              switch (mT.kind) {
                case "reload":
                  return UT.reloadGun(), void UT.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void UT.specialActionDown(mT.action);
                case "customButton":
                  return void bT.gameBridge.send("pressCustomButton", {
                    id: mT.id,
                    down: !0
                  });
                case "touchButton":
                  TT.pressTouchButton(!0)
              }
            })(TT, mT, zT)
          };
        return {
          update: (gT, nT, kT, jT) => {
            var LT;
            const pT = (0, eT.j)(TT.contextActionInputs()),
              BT = null !== (LT = pT[0]) && void 0 !== LT ? LT : wT;
            (0, YT.c)((0, eT.d)(BT) ? BT : null);
            const ZT = (0, eT.b)(pT);
            (0, YT.f)(ZT);
            const cT = (0, HT.i)("actionButton");
            if (ZT) {
              const TT = mT.update(nT.wasPressed(cT), nT.isHeld(cT), kT, jT);
              "tap" === TT ? MT(gT, BT, [cT], kT) : "hold" === TT && (lT.e.consumeButton(cT), zT.j.EZ(iT.k, pT))
            } else mT.release(), nT.wasPressed(cT) && MT(gT, BT, [cT], kT);
            UT && kT - UT.atMs >= 40 && !UT.heldBy.some((TT => (0, OT.H)(nT.frame.values, TT))) && WT()
          },
          pressPicked: (TT, UT) => {
            MT(TT, UT, [(0, HT.i)("menuConfirm"), (0, HT.i)("actionButton")], performance.now())
          },
          release: () => {
            mT.release(), WT(), (0, YT.c)(null), (0, YT.f)(!1)
          }
        }
      };
    var aT = mT(8277);
    var yT = mT(40690),
      XT = mT(8876),
      IT = mT(8325),
      QT = mT(8964);
    var sT = mT(40686),
      FT = mT(8967),
      PT = mT(40706),
      VT = mT(8950),
      uT = mT(8880),
      CT = mT(8888),
      rT = mT(8892),
      KT = mT(8793),
      ST = mT(8856);
    const GT = () => KT.e[(0, LT.k)().tapHoldTime].wheelMs,
      NT = () => ((0, jT.d)(), (0, ST.e)("controllerMenuKey")),
      ET = (TT, UT, mT) => new dT((mT => {
        const WT = TT.bodies();
        return {
          bodies: WT,
          press: UT(WT, mT)
        }
      }), (TT => {
        let {
          bodies: UT,
          press: WT
        } = TT;
        mT(UT, WT)
      })),
      hT = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      DT = TT => {
        const UT = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let mT = hT;
        const jT = new PT.c,
          bT = zT.j.subscribe("appManagerUpdated|activeInputDevice", (UT => {
            TT.deviceChanged(UT)
          }));
        let eT = null,
          YT = 0;
        const dT = () => {
          eT = null, (0, uT.f)(null)
        };
        let wT = !1;
        const ST = new xT,
          DT = TT.look,
          oT = new JT.e,
          AT = new JT.e,
          RT = tT(TT),
          TU = zT.j.subscribe(iT.n, (UT => {
            RT.pressPicked(TT.bodies(), UT)
          })),
          UU = ET(TT, ((TT, UT) => TT.primaryFireDown(!UT)), ((TT, UT) => {
            TT.primaryFireUp(UT)
          })),
          mU = ET(TT, (TT => TT.altFireDown()), ((TT, UT) => {
            TT.altFireUp(UT)
          }));
        let WU = !1,
          zU = !1,
          MU = !1;
        const gU = (0, vT.e)(OT.Z),
          nU = (0, vT.e)(OT.Z),
          HU = new JT.e;
        let kU = !1;
        const jU = () => {
            gU.reset(), nU.reset(), HU.release(), (0, rT.e)(!1), DT.release(), UU.cancel(), (0, CT.h)(!1), mU.cancel(), RT.release(), oT.release(), AT.release(), dT()
          },
          lU = function() {
            let WT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            jU(), zU = !1, WT || (WU = !1, mT = hT, Object.assign(UT, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressed: !1,
              running: !1,
              sprintHeld: !1
            }), TT.stopMoving())
          };
        let LU = !1;
        const pU = function(WT, zT, MT) {
            let gT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, BT.h)()) return void(LU || (LU = !0, WU = !1, TT.stopMoving()));
            LU = !1;
            const nT = (0, LT.k)(),
              kT = (0, sT.h)(zT, nT.moveDeadzone),
              lT = (0, HT.i)("sprint");
            mT = (0, sT.v)(mT, {
              sprintPressed: WT.wasPressed(lT),
              magnitude: kT.magnitude,
              autoSprint: nT.autoSprint,
              nowMs: MT
            }), UT.running = mT.running, UT.sprintHeld = WT.isHeld(lT), UT.x = kT.x, UT.y = kT.y, UT.magnitude = kT.speed, UT.headingOffset = kT.headingOffset, WU = kT.magnitude > 0;
            const pT = (0, HT.i)("jump");
            if (UT.jumpHeld = WT.isHeld(pT), UT.jumpPressed = WT.wasPressed(pT), UT.jumpPressed && TT.bodies().jumpDown(), gT) return void TT.move(UT, null);
            const ZT = (0, HT.i)("sneak"),
              cT = jT.filter({
                sneakHeld: WT.isHeld(ZT),
                sneakPressed: WT.wasPressed(ZT),
                sneakTogglePressed: WT.wasPressed((0, HT.i)("sneakToggle"))
              }, MT);
            TT.move(UT, {
              ...cT,
              mode: nT.sneakMode
            })
          },
          BU = (TT, UT) => {
            const mT = (0, HT.i)("chat");
            if ("off" === (0, LT.k)().quickChat) return void(TT.wasPressed(mT) && (lT.e.consumeButton(mT), zT.j.EZ(XT.c)));
            const WT = oT.update(TT.wasPressed(mT), TT.isHeld(mT), UT, GT());
            "tap" === WT || "hold" === WT && null === (0, ZT.d)() ? zT.j.EZ(XT.c) : "hold" === WT && (lT.e.consumeButton(mT), zT.j.EZ(qT.m))
          },
          ZU = (UT, mT) => {
            ((TT, UT) => {
              const mT = (0, fT.d)(),
                WT = (0, HT.i)("emoteWheel");
              if ("wheel" === (0, LT.k)().emoteButton) return TT.wasPressed(WT) && (lT.e.consumeButton(WT), zT.j.EZ("requestEmoteWheelPadOpen", !0)), (0, fT.d)() !== mT;
              const MT = AT.update(TT.wasPressed(WT), TT.isHeld(WT), UT, GT());
              return "tap" === MT ? zT.j.EZ("requestEmoteRepeatLast") : "hold" === MT && (lT.e.consumeButton(WT), zT.j.EZ("requestEmoteWheelPadOpen", !1)), (0, fT.d)() !== mT
            })(UT, mT) || BU(UT, mT), UT.wasPressed((0, HT.i)("inventory")) && (lT.e.consumeButton((0, HT.i)("inventory")), (0, nT.v)(NT(), "inventory", TT.hasFullInventory())), UT.wasPressed((0, HT.i)("pause")) && (lT.e.consumeButton((0, HT.i)("pause")), (0, kT.d)() === gT.k.SOCIAL ? (0, nT.s)(NT(), gT.k.SOCIAL) : (0, nT.f)(NT())), UT.wasPressed((0, HT.i)("leaderboard")) && !(0, MT.d)() && (lT.e.consumeButton((0, HT.i)("leaderboard")), ((TT, UT) => {
              if ("shop" === (0, IT.d)()) return zT.j.EZ(QT.m), void(0, nT.s)(TT, gT.k.SHOP, !0);
              (0, nT.s)(TT, gT.k.LOBBY_LEADERBOARD, UT)
            })(NT(), TT.hasLobbyTab()))
          },
          cU = (UT, mT) => {
            const WT = TT.bodies();
            ((UT, mT) => {
              const WT = (0, HT.i)("attack"),
                zT = UT.wasPressed(WT);
              zT && !UU.isLatched() && (wT = TT.targetsBlock()), UU.update(zT, UT.isHeld(WT), mT, "toggle" === (0, LT.k)().attackMode), UU.isLatched() && wT ? ST.update(TT.targetsBlock(), mT) && UU.unlatch() : ST.reset(), (0, CT.h)(UU.isLatched())
            })(UT, mT), mU.update(UT.wasPressed((0, HT.i)("use")), UT.isHeld((0, HT.i)("use")), mT, !1), gU.update(UT.isHeld((0, HT.i)("hotbarPrevious")), mT) && TT.scrollHotbar(-1), nU.update(UT.isHeld((0, HT.i)("hotbarNext")), mT) && TT.scrollHotbar(1), ((UT, mT, WT) => {
              const zT = (0, HT.i)("perspective"),
                MT = (0, HT.i)("pickBlock"),
                gT = TT.pickBlockAllowed();
              (0, rT.e)(gT && !kU && TT.targetsBlock());
              const nT = () => {
                mT.pickBlock() && (kU = !0, (0, rT.e)(!1))
              };
              if (!gT || MT !== zT) return HU.release(), UT.wasPressed(zT) && mT.swapCameraZoom(), void(gT && UT.wasPressed(MT) && nT());
              const kT = HU.update(UT.wasPressed(MT), UT.isHeld(MT), WT, GT());
              "tap" === kT ? nT() : "hold" === kT && mT.swapCameraZoom()
            })(UT, WT, mT), ((UT, mT, WT) => {
              const zT = (0, HT.i)("drop");
              if (UT.wasPressed(zT)) {
                mT.dropItem(!1);
                const TT = (0, LT.k)();
                "off" !== TT.buttonRepeat && (eT = WT, YT = KT.e[TT.tapHoldTime].dropStackMs, (0, uT.f)(YT))
              }
              null !== eT && (!UT.isHeld(zT) || TT.selectedSlotEmpty() ? dT() : WT - eT >= YT && (dT(), mT.dropItem(!0)))
            })(UT, WT, mT), RT.update(WT, UT, mT, GT()), ZU(UT, mT)
          },
          vU = lT.e.register({
            name: "gameplay",
            isActive: () => {
              const UT = WU && "keyboardMouse" === WT.b.get("activeInputDevice") && !(0, pT.I)(),
                mT = (0, pT.m)() ? [yT.d] : [];
              return ((0, pT.m)() || UT) && (0, cT.f)(mT) && TT.hasPlayer()
            },
            onFrame: TT => {
              const UT = performance.now(),
                mT = (0, LT.k)(),
                WT = (0, sT.z)(TT, (0, sT.l)(mT, (0, HT.i)("pause"), (0, FT.b)().isSupported())),
                zT = (0, sT.j)(WT, mT.swapSticks);
              return (0, pT.m)() ? (zU = !1, (0, cT.f)() ? (MU = !1, DT.update(zT.look, mT, WT.isHeld((0, HT.i)("use"))), pU(WT, zT.move, UT), void cU(WT, UT)) : (MU || (MU = !0, jT.lostToPadScreen(), lU()), void BU(WT, UT))) : (zU || (jU(), zU = !0), void pU(WT, zT.move, UT))
            },
            onDeactivate: TT => {
              (0, pT.m)() && jT.lostToPadScreen(), lU(TT)
            },
            onPeekFrame: UT => {
              (0, pT.m)() && (0, cT.f)(yT.i) && TT.hasPlayer() ? pU(UT, (0, sT.j)(UT, (0, LT.k)().swapSticks).move, performance.now(), !0) : lU()
            }
          }),
          fU = (0, yT.e)(TT),
          qU = (() => {
            const TT = zT.j.subscribe(aT.d, (TT => {
              !TT && (0, pT.m)() && "inGame" === WT.b.get("gameState") && zT.j.EZ("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              zT.j.unsubscribe(TT)
            }
          })();
        return () => {
          lU(), TT.uninstall(), (0, VT.g)(!1), (0, rT.e)(!1), zT.j.unsubscribe(bT), zT.j.unsubscribe(TU), vU(), fU(), qU(), DT.uninstall()
        }
      }
  },
  40690: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => BT,
      e: () => cT,
      i: () => pT
    });
    var WT = mT(1388),
      zT = mT(4370),
      MT = mT(8903),
      gT = mT(37025),
      nT = mT(1843),
      HT = mT(1280),
      kT = mT(8344),
      jT = mT(8847),
      lT = mT(8925);
    const LT = {
        emoteWheel: MT.e,
        quickChatWheel: jT.c,
        actionWheel: lT.o
      },
      pT = Object.keys(LT),
      BT = "dead",
      ZT = TT => (0, WT.n)().includes(TT),
      cT = TT => {
        const UT = [(0, kT.k)(BT, (() => TT.hasPlayer() && TT.isPlayerDead())), (0, kT.k)("sleeping", (() => ZT(gT.c))), (0, kT.k)("turnstile", (() => ZT(HT.g))), (0, kT.k)("videoAd", nT.h), (0, kT.k)("replay", (() => (0, zT.d)() || TT.isReplayMode())), (0, kT.k)("freeCamera", (() => TT.isFreeCameraOn())), ...Object.entries(LT).map((TT => {
          let [UT, mT] = TT;
          return (0, kT.k)(UT, mT)
        }))];
        return () => {
          for (const TT of UT) TT()
        }
      }
  },
  40686: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT,
      h: () => HT,
      j: () => nT,
      l: () => jT,
      o: () => gT,
      r: () => MT,
      v: () => kT,
      z: () => lT
    });
    var WT = mT(8282);
    class zT {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(TT, UT, mT) {
        const zT = (0, WT.j)(TT, UT.lookDeadzone);
        if (Math.hypot(zT.x, zT.y) < .9 || Math.abs(zT.x) < Math.abs(zT.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = mT);
        const MT = (gT = UT.lookSensitivityX, Math.min(1, 100 / gT));
        var gT;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (mT - this.fullTiltSinceMs - 250 * MT) / (200 * MT)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const MT = (TT, UT, mT, zT, MT) => {
        let gT = 1;
        return "boost" === mT.lookCurve ? gT = TT.update(UT, mT, MT) : TT.reset(),
          function(TT, UT) {
            let {
              yawBoost: mT = 1,
              aiming: zT = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const MT = (0, WT.g)((0, WT.j)(TT, UT.lookDeadzone), UT.lookCurve),
              gT = 220 * Math.PI / 180,
              nT = zT ? UT.aimLookSensitivity / 100 : 1,
              HT = UT.lookSensitivityX / 100 * nT,
              kT = UT.lookSensitivityY / 100 * nT;
            return {
              yawRadPerSec: MT.x * gT * HT * mT * (UT.invertLookX ? -1 : 1),
              pitchRadPerSec: MT.y * gT * .7 * kT * (UT.invertLookY ? -1 : 1)
            }
          }(UT, mT, {
            yawBoost: gT,
            aiming: zT
          })
      },
      gT = (TT, UT) => {
        const mT = Math.max(0, Math.min(250, UT)) / 1e3;
        return {
          Xs: TT.yawRadPerSec * mT,
          Qs: TT.pitchRadPerSec * mT
        }
      },
      nT = (TT, UT) => UT ? {
        move: TT.rightStick,
        look: TT.leftStick
      } : {
        move: TT.leftStick,
        look: TT.rightStick
      },
      HT = (TT, UT) => {
        const mT = (0, WT.j)(TT, UT),
          zT = Math.min(1, Math.hypot(mT.x, mT.y));
        return {
          magnitude: zT,
          speed: Math.min(1, zT / .8),
          headingOffset: 0 === zT ? 0 : Math.atan2(mT.x, -mT.y),
          x: mT.x,
          y: mT.y
        }
      },
      kT = (TT, UT) => {
        let {
          sprintPressed: mT,
          magnitude: WT,
          autoSprint: zT,
          nowMs: MT
        } = UT;
        const gT = mT ? MT : TT.latchedAtMs,
          nT = (TT => {
            let {
              running: UT,
              magnitude: mT,
              sprintPressed: WT,
              autoSprint: zT
            } = TT;
            return !(mT < .5) && (!!WT || !!(zT && mT >= .9) || UT)
          })({
            running: TT.running,
            magnitude: WT,
            sprintPressed: MT - gT <= 1e3,
            autoSprint: zT
          });
        return {
          running: nT,
          latchedAtMs: nT ? -1 / 0 : gT
        }
      },
      jT = (TT, UT, mT) => mT && TT.gyroAiming && "button" === TT.gyroActivation && TT.gyroButton !== UT ? TT.gyroButton : null,
      lT = (TT, UT) => UT ? {
        ...TT,
        isHeld: mT => mT !== UT && TT.isHeld(mT),
        wasPressed: mT => mT !== UT && TT.wasPressed(mT),
        wasReleased: mT => mT !== UT && TT.wasReleased(mT),
        value: mT => mT === UT ? 0 : TT.value(mT)
      } : TT
  },
  40706: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT,
      e: () => WT
    });
    const WT = TT => {
      let {
        mode: UT,
        sneakHeld: mT,
        sneakPressed: WT,
        sneakTogglePressed: zT,
        descending: MT,
        canCrouch: gT,
        toggled: nT
      } = TT;
      return gT ? MT ? {
        crouchHeld: mT,
        toggled: !1
      } : "hold" === UT ? {
        crouchHeld: mT,
        toggled: zT ? !nT : nT
      } : {
        crouchHeld: !1,
        toggled: WT || zT ? !nT : nT
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
      filter(TT, UT) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = UT, this.graceEndsMs = UT + 500);
        const mT = UT < this.graceEndsMs;
        return mT && (TT.sneakPressed || TT.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, UT + 300))), TT.sneakHeld ? mT && TT.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: TT.sneakHeld && !this.ignoringHeld,
          sneakPressed: TT.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: TT.sneakTogglePressed && !mT
        }
      }
    }
  },
  40670: (TT, UT, mT) => {
    mT(8967)
  },
  40677: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => qT
    });
    var WT = mT(31),
      zT = mT(8903),
      MT = mT(8918),
      gT = mT(8295),
      nT = mT(8331),
      HT = mT(8305),
      kT = mT(40686),
      jT = mT(40690),
      lT = mT(8344),
      LT = mT(8282),
      pT = mT(8847),
      BT = mT(8925);
    const ZT = [{
        isOpen: zT.i,
        openButton: () => (0, gT.i)("emoteWheel"),
        aim: TT => {
          WT.j.EZ("emoteWheelPadAim", TT)
        },
        commit: TT => {
          WT.j.EZ("requestEmoteWheelPadCommit", TT)
        },
        close: () => {
          WT.j.EZ("requestEmoteWheelClose")
        }
      }, {
        isOpen: pT.c,
        openButton: () => (0, gT.i)("chat"),
        aim: TT => {
          WT.j.EZ(pT.g, TT)
        },
        commit: TT => {
          WT.j.EZ(pT.k, TT)
        },
        close: () => {
          WT.j.EZ(pT.j)
        },
        keptOpenBy: [jT.d]
      }, {
        isOpen: BT.o,
        openButton: () => (0, gT.i)("actionButton"),
        aim: TT => {
          WT.j.EZ(BT.c, TT)
        },
        commit: TT => {
          WT.j.EZ(BT.j, TT)
        },
        close: () => {
          WT.j.EZ(BT.g)
        }
      }],
      cT = () => {
        var TT;
        return null !== (TT = ZT.find((TT => TT.isOpen()))) && void 0 !== TT ? TT : null
      },
      vT = TT => (0, gT.M)(TT.openButton()),
      fT = (TT, UT) => !(0, LT.H)(TT.frame.values, UT),
      qT = () => {
        let TT = null,
          UT = !1,
          mT = !1;
        return nT.e.register({
          name: "wheel",
          isActive: () => null !== cT(),
          peek: () => {
            const TT = cT();
            return TT && vT(TT) ? null : {
              over: "gameplay",
              stick: (0, HT.k)().swapSticks ? "right" : "left"
            }
          },
          onFrame: WT => {
            var zT;
            const LT = cT();
            if (!LT) return;
            if (null !== (0, lT.e)([...jT.i, ...null !== (zT = LT.keptOpenBy) && void 0 !== zT ? zT : []])) return void LT.close();
            const pT = LT.openButton(),
              BT = (0, kT.j)(WT.frame, (0, HT.k)().swapSticks),
              ZT = vT(LT) ? BT.move : BT.look;
            TT !== LT ? (TT = LT, UT = !fT(WT, pT) || Math.hypot(ZT.x, ZT.y) >= MT.E, mT = !1) : mT && (mT = !1, fT(WT, pT) && (UT = !1)), LT.aim(ZT);
            const qT = (0, gT.i)("menuConfirm"),
              iT = (0, gT.i)("menuBack");
            return WT.wasPressed(iT) ? (nT.e.consumeButton(iT), void LT.close()) : WT.wasPressed(qT) || WT.wasPressed(pT) ? (nT.e.consumeButton(qT), nT.e.consumeButton(pT), void LT.commit(!1)) : void(UT && fT(WT, pT) && (UT = !1, LT.commit(!0)))
          },
          onDeactivate: () => {
            mT = null !== TT && cT() === TT, mT || (TT = null, UT = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
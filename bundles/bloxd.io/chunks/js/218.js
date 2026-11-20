export const id = 218;
export const ids = [218];
export const modules = {
  36754: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => aT,
      g: () => DT
    });
    var lT = cT(4251),
      MT = cT(1461),
      KT = cT(71),
      OT = cT(6486),
      yT = cT(4239),
      fT = cT(1292),
      xT = cT(1953),
      IT = cT(1921),
      AT = cT(1470),
      CT = cT(1195),
      jT = cT(36756),
      vT = cT(1046),
      tT = cT.n(vT),
      hT = cT(1316),
      NT = cT(1061),
      QT = cT(1289),
      ST = cT(1099);
    const DT = "SleepingOverlay";

    function aT() {
      const {
        t: TT
      } = (0, CT.B)(), [kT, cT] = (0, KT.useState)(!1), [vT, aT] = (0, KT.useState)(null), [rT, PT] = (0, KT.useState)(1), [wT, mT] = (0, KT.useState)(!1), [bT, zT] = (0, KT.useState)(!1), JT = (0, KT.useRef)(0), oT = (0, KT.useRef)(!1), HT = (0, KT.useRef)(!1), eT = (0, KT.useRef)(), GT = (0, KT.useRef)(null);

      function VT() {
        const TT = null !== vT && void 0 !== vT ? vT : "Rested Speed";
        xT.gameBridge.send("wakeUp", bT ? TT : null), GT.current = null, cT(!1), aT(null), PT(1), mT(!1), zT(!1)
      }

      function ET() {
        return !wT && (VT(), !0)
      }
      return (0, MT.g)("PlayerPhysicsTypeUpdate", (TT => {
        TT !== GT.current && (GT.current = TT, TT === OT.v.SLEEPING ? (HT.current || (JT.current = xT.gameBridge.lookup("cameraZoom", null), HT.current = !0), oT.current = !0, xT.gameBridge.send("setCameraZoom", 3), cT(!0), PT(function() {
          for (const TT of xT.gameBridge.lookup("blocksStandingOn", null)) {
            if (jT.c.leafBeds.includes(TT)) return console.log(`Found leaf bed: ${TT}`), 1;
            if (jT.c.woolBeds.includes(TT)) return console.log(`Found woold bed: ${TT}`), 2;
            if (jT.c.strongBeds.includes(TT)) return console.log(`Found strong bed ${TT}`), 3
          }
          return 1
        }())) : (HT.current = !1, cT(!1), aT(null), PT(1)))
      })), (0, KT.useEffect)((() => () => {
        (0, fT.o)(DT)
      }), []), (0, KT.useEffect)((() => {
        kT ? (0, fT.p)(DT) : ((0, fT.o)(DT), oT.current && (xT.gameBridge.send("setCameraZoom", JT.current), oT.current = !1))
      }), [kT]), (0, QT.q)("overlay", eT, ET, kT), (0, ST.jsx)(lT.d, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: kT,
        timeout: 300,
        nodeRef: eT,
        unmountOnExit: !0,
        children: (0, ST.jsx)("div", {
          ref: eT,
          onClick: TT => {
            ET() && TT.stopPropagation()
          },
          children: (0, ST.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, ST.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: yT.k.map((kT => (0, ST.jsxs)(FT, {
                restedEffect: kT,
                yI: vT,
                setChosenRestedEffect: aT,
                children: [(0, ST.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, ST.jsx)(IT.b, {
                    text: [{
                      icon: kT
                    }]
                  }), yT.i[kT].shortName]
                }), (0, ST.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: TT(yT.i[kT].description, {
                    time: yT.i[kT].effectLevelDurations[rT] / 6e4
                  })
                })]
              }, kT)))
            }), (0, ST.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, ST.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, ST.jsxs)(AT.e, {
                className: "SleepingOverlayWakeUpButton",
                onClick: TT => {
                  bT ? VT() : (mT(!0), (0, hT._)((() => {
                    mT(!1), zT(!0)
                  }), !0)), TT.stopPropagation()
                },
                loading: wT,
                children: [!bT && (0, ST.jsxs)(ST.Fragment, {
                  children: [(0, ST.jsx)(NT.e, {
                    name: "film"
                  }), " ", TT("classicGame:watchAdToGetRestedPerk")]
                }), bT && TT("classicGame:wakeUp")]
              }), (0, ST.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, ST.jsx)("div", {
                  className: tT()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === rT
                  }),
                  children: (0, ST.jsx)(IT.b, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, ST.jsx)("div", {
                  className: tT()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === rT
                  }),
                  children: (0, ST.jsx)(IT.b, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, ST.jsx)("div", {
                  className: tT()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === rT
                  }),
                  children: (0, ST.jsx)(IT.b, {
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
    const FT = (0, KT.memo)((function(TT) {
      let {
        children: kT,
        restedEffect: cT,
        yI: lT,
        setChosenRestedEffect: MT
      } = TT;
      return cT === lT ? (0, ST.jsx)(AT.m, {
        onClick: TT => {
          TT.stopPropagation()
        },
        children: kT
      }) : (0, ST.jsx)(AT.i, {
        onClick: TT => {
          MT(cT), TT.stopPropagation()
        },
        children: kT
      })
    }))
  },
  40194: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => WT
    });
    var lT = cT(31),
      MT = cT(36),
      KT = cT(4272),
      OT = cT(328),
      yT = cT(1654),
      fT = cT(8199),
      xT = cT(4284),
      IT = cT(8727),
      AT = cT(8227),
      CT = cT(8206),
      jT = cT(8229),
      vT = cT(1701),
      tT = cT(8236),
      hT = cT(8680),
      NT = cT(8836),
      QT = cT(8737),
      ST = cT(8840),
      DT = cT(1953),
      aT = cT(8190),
      FT = cT(8767),
      rT = cT(8762),
      PT = cT(8734);
    class wT {
      constructor() {
        this.lostAtMs = null
      }
      update(TT, kT) {
        return TT ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= kT, kT - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class mT {
      constructor(TT, kT) {
        this.press = TT, this.release = kT, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(TT, kT, cT, lT) {
        if (TT && null === this.downAtMs) return this.downAtMs = cT, this.latched = lT, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? TT && this.end() : !kT && cT - this.downAtMs >= 40 && this.end())
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
    const bT = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      zT = TT => {
        let kT = null;
        const cT = new PT.c,
          lT = () => {
            kT && (((TT, kT, cT) => {
              switch (cT.kind) {
                case "reload":
                  return void kT.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void kT.specialActionUp(cT.action);
                case "customButton":
                  return void DT.gameBridge.send("pressCustomButton", {
                    id: cT.id,
                    down: !1
                  });
                case "touchButton":
                  TT.pressTouchButton(!1)
              }
            })(TT, kT.bodies, kT.action), kT = null)
          },
          KT = (cT, MT, KT, OT) => {
            lT(), kT = {
              action: MT,
              bodies: cT,
              heldBy: KT,
              atMs: OT
            }, ((TT, kT, cT) => {
              switch (cT.kind) {
                case "reload":
                  return kT.reloadGun(), void kT.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void kT.specialActionDown(cT.action);
                case "customButton":
                  return void DT.gameBridge.send("pressCustomButton", {
                    id: cT.id,
                    down: !0
                  });
                case "touchButton":
                  TT.pressTouchButton(!0)
              }
            })(TT, cT, MT)
          };
        return {
          update: (OT, yT, xT, IT) => {
            var CT;
            const jT = (0, FT.h)(TT.contextActionInputs()),
              vT = null !== (CT = jT[0]) && void 0 !== CT ? CT : bT;
            (0, rT.d)((0, FT.f)(vT) ? vT : null);
            const tT = (0, FT.b)(jT);
            (0, rT.e)(tT);
            const hT = (0, fT.j)("actionButton");
            if (tT) {
              const TT = cT.update(yT.wasPressed(hT), yT.isHeld(hT), xT, IT);
              "tap" === TT ? KT(OT, vT, [hT], xT) : "hold" === TT && (AT.d.consumeButton(hT), MT.k.nt(ST.p, jT))
            } else cT.release(), yT.wasPressed(hT) && KT(OT, vT, [hT], xT);
            kT && xT - kT.atMs >= 40 && !kT.heldBy.some((TT => (0, aT.J)(yT.frame.values, TT))) && lT()
          },
          pressPicked: (TT, kT) => {
            KT(TT, kT, [(0, fT.j)("menuConfirm"), (0, fT.j)("actionButton")], performance.now())
          },
          release: () => {
            cT.release(), lT(), (0, rT.d)(null), (0, rT.e)(!1)
          }
        }
      };
    var JT = cT(8188);
    var oT = cT(40189),
      HT = cT(8777),
      eT = cT(8219),
      GT = cT(8877);
    var VT = cT(40182),
      ET = cT(8886),
      ZT = cT(40199),
      uT = cT(8860),
      XT = cT(8784),
      dT = cT(8791),
      LT = cT(8796),
      RT = cT(8685);
    const gT = () => RT.c[(0, CT.g)().tapHoldTime].wheelMs,
      UT = () => ((0, IT.c)(), new Event("controllerMenuKey")),
      YT = (TT, kT, cT) => new mT((() => {
        const cT = TT.bodies();
        return {
          bodies: cT,
          press: kT(cT)
        }
      }), (TT => {
        let {
          bodies: kT,
          press: lT
        } = TT;
        cT(kT, lT)
      })),
      BT = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      WT = TT => {
        const kT = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressed: !1,
          running: !1,
          sprintHeld: !1
        };
        let cT = BT;
        const IT = new ZT.c,
          DT = MT.k.subscribe("appManagerUpdated|activeInputDevice", (kT => {
            TT.deviceChanged(kT)
          }));
        let FT = null,
          rT = 0;
        const mT = () => {
          FT = null, (0, XT.d)(null)
        };
        let bT = !1;
        const WT = new wT,
          nT = TT.look,
          pT = new PT.c,
          iT = new PT.c,
          qT = zT(TT),
          sT = MT.k.subscribe(ST.r, (kT => {
            qT.pressPicked(TT.bodies(), kT)
          })),
          Tk = YT(TT, (TT => TT.primaryFireDown()), ((TT, kT) => {
            TT.primaryFireUp(kT)
          })),
          kk = YT(TT, (TT => TT.altFireDown()), ((TT, kT) => {
            TT.altFireUp(kT)
          }));
        let ck = !1,
          lk = !1,
          Mk = !1;
        const Kk = (0, hT.e)(aT.cb),
          Ok = (0, hT.e)(aT.cb),
          yk = new PT.c;
        let fk = !1;
        const xk = () => {
            Kk.reset(), Ok.reset(), yk.release(), (0, LT.f)(!1), nT.release(), Tk.cancel(), (0, dT.c)(!1), kk.cancel(), qT.release(), pT.release(), iT.release(), mT()
          },
          Ik = function() {
            let lT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            xk(), lk = !1, lT || (ck = !1, cT = BT, Object.assign(kT, {
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
          Ak = function(lT, MT, KT) {
            let OT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const yT = (0, CT.g)(),
              xT = (0, VT.i)(MT, yT.moveDeadzone),
              AT = (0, fT.j)("sprint");
            cT = (0, VT.w)(cT, {
              sprintPressed: lT.wasPressed(AT),
              magnitude: xT.magnitude,
              autoSprint: yT.autoSprint,
              nowMs: KT
            }), kT.running = cT.running, kT.sprintHeld = lT.isHeld(AT), kT.x = xT.x, kT.y = xT.y, kT.magnitude = xT.speed, kT.headingOffset = xT.headingOffset, ck = xT.magnitude > 0;
            const jT = (0, fT.j)("jump");
            if (kT.jumpHeld = lT.isHeld(jT), kT.jumpPressed = lT.wasPressed(jT), kT.jumpPressed && TT.bodies().jumpDown(), OT) return void TT.move(kT, null);
            const vT = (0, fT.j)("sneak"),
              tT = IT.filter({
                sneakHeld: lT.isHeld(vT),
                sneakPressed: lT.wasPressed(vT),
                sneakTogglePressed: lT.wasPressed((0, fT.j)("sneakToggle"))
              }, KT);
            TT.move(kT, {
              ...tT,
              mode: yT.sneakMode
            })
          },
          Ck = (TT, kT) => {
            const cT = (0, fT.j)("chat");
            if ("off" === (0, CT.g)().quickChat) return void(TT.wasPressed(cT) && (AT.d.consumeButton(cT), MT.k.nt(HT.b)));
            const lT = pT.update(TT.wasPressed(cT), TT.isHeld(cT), kT, gT());
            "tap" === lT || "hold" === lT && null === (0, vT.c)() ? MT.k.nt(HT.b) : "hold" === lT && (AT.d.consumeButton(cT), MT.k.nt(QT.n))
          },
          jk = (kT, cT) => {
            ((TT, kT) => {
              const cT = (0, NT.e)(),
                lT = (0, fT.j)("emoteWheel");
              if ("wheel" === (0, CT.g)().emoteButton) return TT.wasPressed(lT) && (AT.d.consumeButton(lT), MT.k.nt("requestEmoteWheelPadOpen", !0)), (0, NT.e)() !== cT;
              const KT = iT.update(TT.wasPressed(lT), TT.isHeld(lT), kT, gT());
              return "tap" === KT ? MT.k.nt("requestEmoteRepeatLast") : "hold" === KT && (AT.d.consumeButton(lT), MT.k.nt("requestEmoteWheelPadOpen", !1)), (0, NT.e)() !== cT
            })(kT, cT) || Ck(kT, cT), kT.wasPressed((0, fT.j)("inventory")) && (AT.d.consumeButton((0, fT.j)("inventory")), (0, yT.A)(UT(), "inventory", TT.hasFullInventory())), kT.wasPressed((0, fT.j)("pause")) && (AT.d.consumeButton((0, fT.j)("pause")), (0, xT.e)() === OT.o.SOCIAL ? (0, yT.z)(UT(), OT.o.SOCIAL) : (0, yT.j)(UT())), kT.wasPressed((0, fT.j)("leaderboard")) && !(0, KT.g)() && (AT.d.consumeButton((0, fT.j)("leaderboard")), ((TT, kT) => {
              if ("shop" === (0, eT.d)()) return MT.k.nt(GT.n), void(0, yT.z)(TT, OT.o.SHOP, !0);
              (0, yT.z)(TT, OT.o.LOBBY_LEADERBOARD, kT)
            })(UT(), TT.hasLobbyTab()))
          },
          vk = (kT, cT) => {
            const lT = TT.bodies();
            ((kT, cT) => {
              const lT = (0, fT.j)("attack"),
                MT = kT.wasPressed(lT);
              MT && !Tk.isLatched() && (bT = TT.targetsBlock()), Tk.update(MT, kT.isHeld(lT), cT, "toggle" === (0, CT.g)().attackMode), Tk.isLatched() && bT ? WT.update(TT.targetsBlock(), cT) && Tk.unlatch() : WT.reset(), (0, dT.c)(Tk.isLatched())
            })(kT, cT), kk.update(kT.wasPressed((0, fT.j)("use")), kT.isHeld((0, fT.j)("use")), cT, !1), Kk.update(kT.isHeld((0, fT.j)("hotbarPrevious")), cT) && TT.scrollHotbar(-1), Ok.update(kT.isHeld((0, fT.j)("hotbarNext")), cT) && TT.scrollHotbar(1), ((kT, cT, lT) => {
              const MT = (0, fT.j)("perspective"),
                KT = (0, fT.j)("pickBlock"),
                OT = TT.pickBlockAllowed();
              (0, LT.f)(OT && !fk && TT.targetsBlock());
              const yT = () => {
                cT.pickBlock() && (fk = !0, (0, LT.f)(!1))
              };
              if (!OT || KT !== MT) return yk.release(), kT.wasPressed(MT) && cT.swapCameraZoom(), void(OT && kT.wasPressed(KT) && yT());
              const xT = yk.update(kT.wasPressed(KT), kT.isHeld(KT), lT, gT());
              "tap" === xT ? yT() : "hold" === xT && cT.swapCameraZoom()
            })(kT, lT, cT), ((kT, cT, lT) => {
              const MT = (0, fT.j)("drop");
              if (kT.wasPressed(MT)) {
                cT.dropItem(!1);
                const TT = (0, CT.g)();
                "off" !== TT.buttonRepeat && (FT = lT, rT = RT.c[TT.tapHoldTime].dropStackMs, (0, XT.d)(rT))
              }
              null !== FT && (!kT.isHeld(MT) || TT.selectedSlotEmpty() ? mT() : lT - FT >= rT && (mT(), cT.dropItem(!0)))
            })(kT, lT, cT), qT.update(lT, kT, cT, gT()), jk(kT, cT)
          },
          tk = AT.d.register({
            name: "gameplay",
            isActive: () => {
              const kT = ck && "keyboardMouse" === lT.e.get("activeInputDevice") && !(0, jT.A)(),
                cT = (0, jT.i)() ? [oT.c] : [];
              return ((0, jT.i)() || kT) && (0, tT.e)(cT) && TT.hasPlayer()
            },
            onFrame: TT => {
              const kT = performance.now(),
                cT = (0, CT.g)(),
                lT = (0, VT.y)(TT, (0, VT.n)(cT, (0, fT.j)("pause"), (0, ET.d)().isSupported())),
                MT = (0, VT.k)(lT, cT.swapSticks);
              return (0, jT.i)() ? (lk = !1, (0, tT.e)() ? (Mk = !1, nT.update(MT.look, cT, lT.isHeld((0, fT.j)("use"))), Ak(lT, MT.move, kT), void vk(lT, kT)) : (Mk || (Mk = !0, IT.lostToPadScreen(), Ik()), void Ck(lT, kT))) : (lk || (xk(), lk = !0), void Ak(lT, MT.move, kT))
            },
            onDeactivate: TT => {
              (0, jT.i)() && IT.lostToPadScreen(), Ik(TT)
            },
            onPeekFrame: kT => {
              (0, jT.i)() && (0, tT.e)(oT.k) && TT.hasPlayer() ? Ak(kT, (0, VT.k)(kT, (0, CT.g)().swapSticks).move, performance.now(), !0) : Ik()
            }
          }),
          hk = (0, oT.g)(TT),
          Nk = (() => {
            const TT = MT.k.subscribe(JT.c, (TT => {
              !TT && (0, jT.i)() && "inGame" === lT.e.get("gameState") && MT.k.nt("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              MT.k.unsubscribe(TT)
            }
          })();
        return () => {
          Ik(), TT.uninstall(), (0, uT.e)(!1), (0, LT.f)(!1), MT.k.unsubscribe(DT), MT.k.unsubscribe(sT), tk(), hk(), Nk(), nT.uninstall()
        }
      }
  },
  40189: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => vT,
      g: () => hT,
      k: () => jT
    });
    var lT = cT(1292),
      MT = cT(4272),
      KT = cT(8818),
      OT = cT(36754),
      yT = cT(1734),
      fT = cT(1192),
      xT = cT(8236),
      IT = cT(8737),
      AT = cT(8840);
    const CT = {
        emoteWheel: KT.g,
        quickChatWheel: IT.c,
        actionWheel: AT.s
      },
      jT = Object.keys(CT),
      vT = "dead",
      tT = TT => (0, lT.l)().includes(TT),
      hT = TT => {
        const kT = [(0, xT.j)(vT, (() => TT.hasPlayer() && TT.isPlayerDead())), (0, xT.j)("sleeping", (() => tT(OT.g))), (0, xT.j)("turnstile", (() => tT(fT.e))), (0, xT.j)("videoAd", yT.c), (0, xT.j)("replay", (() => (0, MT.g)() || TT.isReplayMode())), (0, xT.j)("freeCamera", (() => TT.isFreeCameraOn())), ...Object.entries(CT).map((TT => {
          let [kT, cT] = TT;
          return (0, xT.j)(kT, cT)
        }))];
        return () => {
          for (const TT of kT) TT()
        }
      }
  },
  40182: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT,
      i: () => fT,
      k: () => yT,
      n: () => IT,
      p: () => OT,
      t: () => KT,
      w: () => xT,
      y: () => AT
    });
    var lT = cT(8190);
    class MT {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(TT, kT, cT) {
        const MT = (0, lT.m)(TT, kT.lookDeadzone);
        if (Math.hypot(MT.x, MT.y) < .9 || Math.abs(MT.x) < Math.abs(MT.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = cT);
        const KT = (OT = kT.lookSensitivityX, Math.min(1, 100 / OT));
        var OT;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (cT - this.fullTiltSinceMs - 250 * KT) / (200 * KT)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const KT = (TT, kT, cT, MT, KT) => {
        let OT = 1;
        return "boost" === cT.lookCurve ? OT = TT.update(kT, cT, KT) : TT.reset(),
          function(TT, kT) {
            let {
              yawBoost: cT = 1,
              aiming: MT = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const KT = (0, lT.i)((0, lT.m)(TT, kT.lookDeadzone), kT.lookCurve),
              OT = 220 * Math.PI / 180,
              yT = MT ? kT.aimLookSensitivity / 100 : 1,
              fT = kT.lookSensitivityX / 100 * yT,
              xT = kT.lookSensitivityY / 100 * yT;
            return {
              yawRadPerSec: KT.x * OT * fT * cT * (kT.invertLookX ? -1 : 1),
              pitchRadPerSec: KT.y * OT * .7 * xT * (kT.invertLookY ? -1 : 1)
            }
          }(kT, cT, {
            yawBoost: OT,
            aiming: MT
          })
      },
      OT = (TT, kT) => {
        const cT = Math.max(0, Math.min(250, kT)) / 1e3;
        return {
          Rm: TT.yawRadPerSec * cT,
          Wm: TT.pitchRadPerSec * cT
        }
      },
      yT = (TT, kT) => kT ? {
        move: TT.rightStick,
        look: TT.leftStick
      } : {
        move: TT.leftStick,
        look: TT.rightStick
      },
      fT = (TT, kT) => {
        const cT = (0, lT.m)(TT, kT),
          MT = Math.min(1, Math.hypot(cT.x, cT.y));
        return {
          magnitude: MT,
          speed: Math.min(1, MT / .8),
          headingOffset: 0 === MT ? 0 : Math.atan2(cT.x, -cT.y),
          x: cT.x,
          y: cT.y
        }
      },
      xT = (TT, kT) => {
        let {
          sprintPressed: cT,
          magnitude: lT,
          autoSprint: MT,
          nowMs: KT
        } = kT;
        const OT = cT ? KT : TT.latchedAtMs,
          yT = (TT => {
            let {
              running: kT,
              magnitude: cT,
              sprintPressed: lT,
              autoSprint: MT
            } = TT;
            return !(cT < .5) && (!!lT || !!(MT && cT >= .9) || kT)
          })({
            running: TT.running,
            magnitude: lT,
            sprintPressed: KT - OT <= 1e3,
            autoSprint: MT
          });
        return {
          running: yT,
          latchedAtMs: yT ? -1 / 0 : OT
        }
      },
      IT = (TT, kT, cT) => cT && TT.gyroAiming && "button" === TT.gyroActivation && TT.gyroButton !== kT ? TT.gyroButton : null,
      AT = (TT, kT) => kT ? {
        ...TT,
        isHeld: cT => cT !== kT && TT.isHeld(cT),
        wasPressed: cT => cT !== kT && TT.wasPressed(cT),
        wasReleased: cT => cT !== kT && TT.wasReleased(cT),
        value: cT => cT === kT ? 0 : TT.value(cT)
      } : TT
  },
  40199: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT,
      e: () => lT
    });
    const lT = TT => {
      let {
        mode: kT,
        sneakHeld: cT,
        sneakPressed: lT,
        sneakTogglePressed: MT,
        descending: KT,
        canCrouch: OT,
        toggled: yT
      } = TT;
      return OT ? KT ? {
        crouchHeld: cT,
        toggled: !1
      } : "hold" === kT ? {
        crouchHeld: cT,
        toggled: MT ? !yT : yT
      } : {
        crouchHeld: !1,
        toggled: lT || MT ? !yT : yT
      } : {
        crouchHeld: !1,
        toggled: !1
      }
    };
    class MT {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(TT, kT) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = kT, this.graceEndsMs = kT + 500);
        const cT = kT < this.graceEndsMs;
        return cT && (TT.sneakPressed || TT.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, kT + 300))), TT.sneakHeld ? cT && TT.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: TT.sneakHeld && !this.ignoringHeld,
          sneakPressed: TT.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: TT.sneakTogglePressed && !cT
        }
      }
    }
  },
  40169: (TT, kT, cT) => {
    cT(8886)
  },
  40176: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => ST
    });
    var lT = cT(36),
      MT = cT(8818),
      KT = cT(8827),
      OT = cT(8199),
      yT = cT(8227),
      fT = cT(8206),
      xT = cT(40182),
      IT = cT(40189),
      AT = cT(8236),
      CT = cT(8190),
      jT = cT(8737),
      vT = cT(8840);
    const tT = [{
        isOpen: MT.j,
        openButton: () => (0, OT.j)("emoteWheel"),
        aim: TT => {
          lT.k.nt("emoteWheelPadAim", TT)
        },
        commit: TT => {
          lT.k.nt("requestEmoteWheelPadCommit", TT)
        },
        close: () => {
          lT.k.nt("requestEmoteWheelClose")
        }
      }, {
        isOpen: jT.c,
        openButton: () => (0, OT.j)("chat"),
        aim: TT => {
          lT.k.nt(jT.g, TT)
        },
        commit: TT => {
          lT.k.nt(jT.l, TT)
        },
        close: () => {
          lT.k.nt(jT.i)
        },
        keptOpenBy: [IT.c]
      }, {
        isOpen: vT.s,
        openButton: () => (0, OT.j)("actionButton"),
        aim: TT => {
          lT.k.nt(vT.e, TT)
        },
        commit: TT => {
          lT.k.nt(vT.l, TT)
        },
        close: () => {
          lT.k.nt(vT.i)
        }
      }],
      hT = () => {
        var TT;
        return null !== (TT = tT.find((TT => TT.isOpen()))) && void 0 !== TT ? TT : null
      },
      NT = TT => (0, OT.F)(TT.openButton()),
      QT = (TT, kT) => !(0, CT.J)(TT.frame.values, kT),
      ST = () => {
        let TT = null,
          kT = !1,
          cT = !1;
        return yT.d.register({
          name: "wheel",
          isActive: () => null !== hT(),
          peek: () => {
            const TT = hT();
            return TT && NT(TT) ? null : {
              over: "gameplay",
              stick: (0, fT.g)().swapSticks ? "right" : "left"
            }
          },
          onFrame: lT => {
            var MT;
            const CT = hT();
            if (!CT) return;
            if (null !== (0, AT.d)([...IT.k, ...null !== (MT = CT.keptOpenBy) && void 0 !== MT ? MT : []])) return void CT.close();
            const jT = CT.openButton(),
              vT = (0, xT.k)(lT.frame, (0, fT.g)().swapSticks),
              tT = NT(CT) ? vT.move : vT.look;
            TT !== CT ? (TT = CT, kT = !QT(lT, jT) || Math.hypot(tT.x, tT.y) >= KT.K, cT = !1) : cT && (cT = !1, QT(lT, jT) && (kT = !1)), CT.aim(tT);
            const ST = (0, OT.j)("menuConfirm"),
              DT = (0, OT.j)("menuBack");
            return lT.wasPressed(DT) ? (yT.d.consumeButton(DT), void CT.close()) : lT.wasPressed(ST) || lT.wasPressed(jT) ? (yT.d.consumeButton(ST), yT.d.consumeButton(jT), void CT.commit(!1)) : void(kT && QT(lT, jT) && (kT = !1, CT.commit(!0)))
          },
          onDeactivate: () => {
            cT = null !== TT && hT() === TT, cT || (TT = null, kT = !1)
          }
        })
      }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
export const id = 78;
export const ids = [76, 78];
export const modules = {
  35206: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => EF,
      h: () => QF
    });
    var CF = SF(46),
      AF = SF(2279),
      uF = SF(1262),
      hF = SF(1607),
      bW = SF(35144),
      dF = SF(568),
      PF = SF(918),
      RF = SF.n(PF),
      iW = SF(971);
    const eF = {},
      EF = (0, CF.memo)((function() {
        const FF = (0, AF.d)();
        return (0, uF.e)("damagedByOtherPlayer", (WF => {
          let {
            upF: SF,
            direction: CF
          } = WF;
          const AF = SF || "nonDirectional";
          if (eF[AF]) {
            const WF = eF[AF];
            clearTimeout(WF.timeout), WF.direction = CF, WF.timeout = setTimeout((() => {
              delete eF[AF], FF()
            }), 800)
          } else eF[AF] = {
            direction: CF,
            tCF: null,
            timeout: setTimeout((() => {
              delete eF[AF], FF()
            }), 800)
          };
          FF()
        })), (0, hF.b)("kill", (WF => {
          let {
            killer: SF,
            victim: CF
          } = WF;
          const AF = CF.id;
          SF.local && AF && AF in eF && (clearTimeout(eF[AF].timeout), delete eF[AF], FF())
        })), (0, CF.useEffect)((() => {
          const FF = (0, bW.f)("turnDamageIndicators", QF);
          return () => {
            FF();
            for (const FF in eF) clearTimeout(eF[FF].timeout), delete eF[FF]
          }
        }), []), (0, iW.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(eF).map((FF => {
            let [WF, SF] = FF;
            const CF = (0, dF.Q)(SF.direction);
            return (0, iW.jsx)("div", {
              ref: FF => {
                eF[WF] && (eF[WF].tCF = FF)
              },
              className: RF()("DamageIndicator", {
                DamageIndicatorFullCircle: CF
              })
            }, WF)
          }))
        })
      }));

    function QF(FF) {
      for (const WF in eF) {
        const {
          direction: SF,
          tCF: CF
        } = eF[WF];
        if ((0, dF.Q)(SF)) continue;
        const AF = SF - FF;
        CF.style.rotate = `${AF}rad`
      }
    }
  },
  35389: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => qW,
      e: () => kW
    });
    var CF = SF(3448),
      AF = SF(1262),
      uF = SF(46),
      hF = SF(5450),
      bW = SF(3438),
      dF = SF(1144),
      PF = SF(1576),
      RF = SF(1546),
      iW = SF(1266),
      eF = SF(1046),
      EF = SF(35397),
      QF = SF(918),
      rW = SF.n(QF),
      gW = SF(1168),
      tW = SF(929),
      TF = SF(1141),
      aW = SF(971);
    const kW = "SleepingOverlay";

    function qW() {
      const {
        t: FF
      } = (0, eF.B)(), [WF, SF] = (0, uF.useState)(!1), [QF, qW] = (0, uF.useState)(null), [NF, DF] = (0, uF.useState)(1), [LF, mW] = (0, uF.useState)(!1), [OF, xW] = (0, uF.useState)(!1), ZF = (0, uF.useRef)(0), oF = (0, uF.useRef)(!1), YF = (0, uF.useRef)(!1), MF = (0, uF.useRef)(), cW = (0, uF.useRef)(null);

      function GF() {
        const FF = null !== QF && void 0 !== QF ? QF : "Rested Speed";
        PF.gameBridge.send("wakeUp", OF ? FF : null), cW.current = null, SF(!1), qW(null), DF(1), mW(!1), xW(!1)
      }

      function zW() {
        return !LF && (GF(), !0)
      }
      return (0, AF.e)("PlayerPhysicsTypeUpdate", (FF => {
        FF !== cW.current && (cW.current = FF, FF === hF.m.SLEEPING ? (YF.current || (ZF.current = PF.gameBridge.lookup("cameraZoom", null), YF.current = !0), oF.current = !0, PF.gameBridge.send("setCameraZoom", 3), SF(!0), DF(function() {
          for (const FF of PF.gameBridge.lookup("blocksStandingOn", null)) {
            if (EF.b.leafBeds.includes(FF)) return console.log(`Found leaf bed: ${FF}`), 1;
            if (EF.b.woolBeds.includes(FF)) return console.log(`Found woold bed: ${FF}`), 2;
            if (EF.b.strongBeds.includes(FF)) return console.log(`Found strong bed ${FF}`), 3
          }
          return 1
        }())) : (YF.current = !1, SF(!1), qW(null), DF(1)))
      })), (0, uF.useEffect)((() => () => {
        (0, dF.g)(kW)
      }), []), (0, uF.useEffect)((() => {
        WF ? (0, dF.h)(kW) : ((0, dF.g)(kW), oF.current && (PF.gameBridge.send("setCameraZoom", ZF.current), oF.current = !1))
      }), [WF]), (0, TF.w)("overlay", MF, zW, WF), (0, aW.jsx)(CF.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: WF,
        timeout: 300,
        nodeRef: MF,
        unmountOnExit: !0,
        children: (0, aW.jsx)("div", {
          ref: MF,
          onClick: FF => {
            zW() && FF.stopPropagation()
          },
          children: (0, aW.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, aW.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: bW.e.map((WF => (0, aW.jsxs)(VF, {
                restedEffect: WF,
                Fy: QF,
                setChosenRestedEffect: qW,
                children: [(0, aW.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, aW.jsx)(RF.d, {
                    text: [{
                      icon: WF
                    }]
                  }), bW.d[WF].shortName]
                }), (0, aW.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: FF(bW.d[WF].description, {
                    time: bW.d[WF].effectLevelDurations[NF] / 6e4
                  })
                })]
              }, WF)))
            }), (0, aW.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, aW.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, aW.jsxs)(iW.e, {
                className: "SleepingOverlayWakeUpButton",
                onClick: FF => {
                  OF ? GF() : (mW(!0), (0, gW.eb)((() => {
                    mW(!1), xW(!0)
                  }), !0)), FF.stopPropagation()
                },
                loading: LF,
                children: [!OF && (0, aW.jsxs)(aW.Fragment, {
                  children: [(0, aW.jsx)(tW.e, {
                    name: "film"
                  }), " ", FF("classicGame:watchAdToGetRestedPerk")]
                }), OF && FF("classicGame:wakeUp")]
              }), (0, aW.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, aW.jsx)("div", {
                  className: rW()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === NF
                  }),
                  children: (0, aW.jsx)(RF.d, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, aW.jsx)("div", {
                  className: rW()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === NF
                  }),
                  children: (0, aW.jsx)(RF.d, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, aW.jsx)("div", {
                  className: rW()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === NF
                  }),
                  children: (0, aW.jsx)(RF.d, {
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
    const VF = (0, uF.memo)((function(FF) {
      let {
        children: WF,
        restedEffect: SF,
        Fy: CF,
        setChosenRestedEffect: AF
      } = FF;
      return SF === CF ? (0, aW.jsx)(iW.k, {
        onClick: FF => {
          FF.stopPropagation()
        },
        children: WF
      }) : (0, aW.jsx)(iW.f, {
        onClick: FF => {
          AF(SF), FF.stopPropagation()
        },
        children: WF
      })
    }))
  },
  35110: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => dF,
      g: () => PF
    });
    const CF = .1,
      AF = .35,
      uF = .85,
      hF = .06,
      bW = .22;

    function dF(FF) {
      if (FF < CF) return 0;
      if (FF < AF) {
        const WF = (FF - CF) / (AF - CF);
        return hF + (bW - hF) * WF * WF
      }
      return FF < uF ? bW + (1 - bW) * (FF - AF) / (uF - AF) : 1
    }

    function PF(FF) {
      return FF.touchEdgeGuard && FF.touchSpeedCurve
    }
  },
  35141: (FF, WF, SF) => {
    function CF(FF, WF, SF, CF) {
      return !(SF && !FF.aimable) && (!WF || FF.gun && "head" !== CF)
    }

    function AF(FF) {
      return Math.max(.1 * FF, 1)
    }
    SF.d(WF, {
      d: () => AF,
      g: () => CF
    })
  },
  35144: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => bW,
      f: () => hF
    });
    let CF = null;
    const AF = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      uF = {
        crosshairAccuracy: FF => {
          const WF = AF.crosshairAccuracy.at(-1);
          WF ? WF.hook(FF) : CF = FF
        },
        turnDamageIndicators: FF => {
          var WF;
          null === (WF = AF.turnDamageIndicators.at(-1)) || void 0 === WF || WF.hook(FF)
        }
      };

    function hF(FF, WF) {
      const SF = {
          hook: WF
        },
        hF = AF[FF];
      if (hF.push(SF), "crosshairAccuracy" === FF && null !== CF) {
        const FF = CF;
        CF = null, uF.crosshairAccuracy(FF)
      }
      return () => {
        const FF = hF.indexOf(SF); - 1 !== FF && hF.splice(FF, 1)
      }
    }

    function bW() {
      return uF
    }
  },
  38505: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      startPadGameplay: () => kS
    });
    var CF = SF(7782);
    var AF = SF(20),
      uF = SF(7722),
      hF = SF(7730),
      bW = SF(7128),
      dF = SF(7155),
      PF = SF(7137),
      RF = SF(7117);
    class iW {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(FF, WF, SF) {
        const CF = (0, RF.j)(FF, WF.lookDeadzone);
        if (Math.hypot(CF.x, CF.y) < .9 || Math.abs(CF.x) < Math.abs(CF.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = SF);
        const AF = (uF = WF.lookSensitivityX, Math.min(1, 100 / uF));
        var uF;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (SF - this.fullTiltSinceMs - 250 * AF) / (200 * AF)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const eF = (FF, WF) => WF ? {
      move: FF.rightStick,
      look: FF.leftStick
    } : {
      move: FF.leftStick,
      look: FF.rightStick
    };
    var EF = SF(2180),
      QF = SF(1144),
      rW = SF(3462),
      gW = SF(35389),
      tW = SF(1168),
      TF = SF(1044),
      aW = SF(7162),
      kW = SF(7695),
      qW = SF(7737);
    const VF = {
        emoteWheel: uF.e,
        quickChatWheel: kW.d,
        actionWheel: qW.n
      },
      NF = Object.keys(VF),
      DF = "dead",
      LF = FF => (0, QF.f)().includes(FF),
      mW = () => {
        const FF = [(0, aW.j)(DF, (() => {
          var FF;
          return !(null === (FF = (0, EF.h)()) || void 0 === FF || !FF.vSF) && !(() => {
            var FF;
            const WF = (0, EF.h)();
            return !1 !== (null === (FF = WF.qm.vdF(WF.vSF)) || void 0 === FF ? void 0 : FF.isAlive)
          })()
        })), (0, aW.j)("sleeping", (() => LF(gW.e))), (0, aW.j)("turnstile", (() => LF(TF.e))), (0, aW.j)("videoAd", tW.I), (0, aW.j)("replay", (() => {
          var FF, WF;
          return (0, rW.h)() || !(null === (FF = (0, EF.e)()) || void 0 === FF || null === (WF = FF.client) || void 0 === WF || !WF.isReplayMode())
        })), (0, aW.j)("freeCamera", (() => {
          var FF, WF, SF;
          return !(null === (FF = (0, EF.e)()) || void 0 === FF || null === (WF = FF.client) || void 0 === WF || null === (SF = WF.freeCameraController) || void 0 === SF || !SF.isEnabled())
        })), ...Object.entries(VF).map((FF => {
          let [WF, SF] = FF;
          return (0, aW.j)(WF, SF)
        }))];
        return () => {
          for (const WF of FF) WF()
        }
      },
      OF = [{
        isOpen: uF.i,
        openButton: () => (0, bW.h)("emoteWheel"),
        aim: FF => {
          AF.j.Uu("emoteWheelPadAim", FF)
        },
        commit: FF => {
          AF.j.Uu("requestEmoteWheelPadCommit", FF)
        },
        close: () => {
          AF.j.Uu("requestEmoteWheelClose")
        }
      }, {
        isOpen: kW.d,
        openButton: () => (0, bW.h)("chat"),
        aim: FF => {
          AF.j.Uu(kW.e, FF)
        },
        commit: FF => {
          AF.j.Uu(kW.j, FF)
        },
        close: () => {
          AF.j.Uu(kW.g)
        },
        keptOpenBy: [DF]
      }, {
        isOpen: qW.n,
        openButton: () => (0, bW.h)("actionButton"),
        aim: FF => {
          AF.j.Uu(qW.c, FF)
        },
        commit: FF => {
          AF.j.Uu(qW.h, FF)
        },
        close: () => {
          AF.j.Uu(qW.e)
        }
      }],
      xW = () => {
        var FF;
        return null !== (FF = OF.find((FF => FF.isOpen()))) && void 0 !== FF ? FF : null
      },
      ZF = FF => (0, bW.K)(FF.openButton()),
      oF = (FF, WF) => !(0, RF.F)(FF.frame.values, WF);
    var YF = SF(11),
      MF = SF(37450),
      cW = SF(37463),
      GF = SF(220),
      zW = SF(1475),
      IF = SF(3466),
      fF = SF(7680),
      yW = SF(7158),
      sF = SF(1507),
      nF = SF(7590),
      HF = SF(7734),
      KF = SF(2940),
      wF = SF(2877),
      XF = SF(1576),
      UF = SF(7633),
      BF = SF(7629),
      jW = SF(7687);
    class vW {
      constructor() {
        this.lostAtMs = null
      }
      update(FF, WF) {
        return FF ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= WF, WF - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class JF {
      constructor(FF, WF) {
        this.press = FF, this.release = WF, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(FF, WF, SF, CF) {
        if (FF && null === this.downAtMs) return this.downAtMs = SF, this.latched = CF, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? FF && this.end() : !WF && SF - this.downAtMs >= 40 && this.end())
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
        const FF = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(FF)
      }
    }
    const pF = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      lF = () => {
        let FF = null;
        const WF = new jW.e,
          SF = () => {
            FF && (((FF, WF) => {
              switch (WF.kind) {
                case "reload":
                  return void FF.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void FF.specialActionUp(WF.action);
                case "customButton":
                  return void XF.gameBridge.send("pressCustomButton", {
                    id: WF.id,
                    down: !1
                  });
                case "touchButton":
                  (0, wF.sendColyMessage)(KF.Ai, !1)
              }
            })(FF.bodies, FF.action), FF = null)
          },
          CF = (WF, CF, AF, uF) => {
            SF(), FF = {
              action: CF,
              bodies: WF,
              heldBy: AF,
              atMs: uF
            }, ((FF, WF) => {
              switch (WF.kind) {
                case "reload":
                  return FF.reloadGun(), void FF.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void FF.specialActionDown(WF.action);
                case "customButton":
                  return void XF.gameBridge.send("pressCustomButton", {
                    id: WF.id,
                    down: !0
                  });
                case "touchButton":
                  (0, wF.sendColyMessage)(KF.Ai, !0)
              }
            })(WF, CF)
          };
        return {
          update: (uF, hF, PF, iW) => {
            var eF;
            const QF = (() => {
                var FF, WF, SF, CF;
                const AF = (0, EF.h)();
                return (0, UF.j)({
                  holdingGun: !(null === (FF = AF.qm.JbF(AF.vSF)) || void 0 === FF || null === (WF = FF.qV) || void 0 === WF || !WF.isGun()),
                  customButtons: null !== (SF = AF.uL.customButtons) && void 0 !== SF ? SF : null,
                  touchscreenActionButton: null !== (CF = AF.uL.touchscreenActionButton) && void 0 !== CF ? CF : null
                })
              })(),
              rW = null !== (eF = QF[0]) && void 0 !== eF ? eF : pF;
            (0, BF.e)((0, UF.e)(rW) ? rW : null);
            const gW = (0, UF.b)(QF);
            (0, BF.h)(gW);
            const tW = (0, bW.h)("actionButton");
            if (gW) {
              const FF = WF.update(hF.wasPressed(tW), hF.isHeld(tW), PF, iW);
              "tap" === FF ? CF(uF, rW, [tW], PF) : "hold" === FF && (dF.c.consumeButton(tW), AF.j.Uu(qW.k, QF))
            } else WF.release(), hF.wasPressed(tW) && CF(uF, rW, [tW], PF);
            FF && PF - FF.atMs >= 40 && !FF.heldBy.some((FF => (0, RF.F)(hF.frame.values, FF))) && SF()
          },
          pressPicked: (FF, WF) => {
            CF(FF, WF, [(0, bW.h)("menuConfirm"), (0, bW.h)("actionButton")], performance.now())
          },
          release: () => {
            WF.release(), SF(), (0, BF.e)(null), (0, BF.h)(!1)
          }
        }
      };
    var FW = SF(7114);
    var WW = SF(7644),
      SW = SF(7152),
      CW = SF(7778);
    var AW = SF(36876);
    const uW = {
        yawRadPerSec: 0,
        pitchRadPerSec: 0
      },
      hW = () => {
        const FF = (0, CF.b)();
        let WF = uW;
        const SF = new iW;
        let AF = !1,
          uF = 0;
        const hF = () => {
          const SF = performance.now(),
            CF = 0 === uF ? 0 : SF - uF;
          if (uF = SF, !AF) return FF.discardPending(), null;
          const hF = ((FF, WF) => {
              const SF = Math.max(0, Math.min(250, WF)) / 1e3;
              return {
                TWF: FF.yawRadPerSec * SF,
                aSF: FF.pitchRadPerSec * SF
              }
            })(WF, CF),
            bW = FF.drainLookDelta(),
            dF = (0, AW.h)();
          return {
            TWF: (hF.TWF + bW.TWF) * dF,
            aSF: (hF.aSF + bW.aSF) * dF
          }
        };
        return {
          update: (FF, CF, uF, bW) => {
            FF.camera.XCF !== hF && (FF.camera.XCF = hF), AF = !0;
            let dF = 1;
            "boost" === uF.lookCurve ? dF = SF.update(CF, uF, performance.now()) : SF.reset(), WF = function(FF, WF) {
              let {
                yawBoost: SF = 1,
                aiming: CF = !1
              } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              const AF = (0, RF.i)((0, RF.j)(FF, WF.lookDeadzone), WF.lookCurve),
                uF = 220 * Math.PI / 180,
                hF = CF ? WF.aimLookSensitivity / 100 : 1,
                bW = WF.lookSensitivityX / 100 * hF,
                dF = WF.lookSensitivityY / 100 * hF;
              return {
                yawRadPerSec: AF.x * uF * bW * SF * (WF.invertLookX ? -1 : 1),
                pitchRadPerSec: AF.y * uF * .7 * dF * (WF.invertLookY ? -1 : 1)
              }
            }(CF, uF, {
              yawBoost: dF,
              aiming: bW
            })
          },
          release: () => {
            AF = !1, WF = uW, SF.reset()
          },
          uninstall: FF => {
            FF.camera.XCF === hF && (FF.camera.XCF = null)
          }
        }
      };
    class bS {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(FF, WF) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = WF, this.graceEndsMs = WF + 500);
        const SF = WF < this.graceEndsMs;
        return SF && (FF.sneakPressed || FF.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, WF + 300))), FF.sneakHeld ? SF && FF.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: FF.sneakHeld && !this.ignoringHeld,
          sneakPressed: FF.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: FF.sneakTogglePressed && !SF
        }
      }
    }
    var dW = SF(7754),
      PW = SF(7651),
      RW = SF(7656),
      iS = SF(7665),
      eW = SF(7595);
    const EW = () => eW.c[(0, PF.i)().tapHoldTime].wheelMs,
      QW = () => ((0, fF.c)(), new Event("controllerMenuKey")),
      rS = () => (0, MF.e)(),
      gS = (FF, WF) => new JF((() => {
        const WF = rS();
        return {
          bodies: WF,
          press: FF(WF)
        }
      }), (FF => {
        let {
          bodies: SF,
          press: CF
        } = FF;
        WF(SF, CF)
      })),
      tS = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      TW = FF => FF.padSneakToggled || !!YF.b.get("clientEscMenuOptions").crouchIsToggle && FF.crouchToggled,
      aS = () => {
        const FF = {
          x: 0,
          y: 0,
          magnitude: 0,
          headingOffset: 0,
          jumpHeld: !1,
          jumpPressedSinceTick: !1,
          crouchHeld: !1,
          running: !1,
          sprintHeld: !1
        };
        let WF = tS;
        const SF = new bS,
          uF = AF.j.subscribe("appManagerUpdated|activeInputDevice", (FF => {
            const WF = (0, EF.h)(),
              SF = null === WF || void 0 === WF ? void 0 : WF.qm.CdF();
            "touch" === FF ? ((0, dW.g)(!1), null !== SF && void 0 !== SF && SF.padSneakToggled && (SF.padSneakToggled = !1, SF.isTouchscreen && !SF.gamepad && WF.qm.xdF(WF.vSF).setCrouching(!!WF.uL.canCrouch && SF.touchCrouch))) : "gamepad" === FF && SF && (0, dW.g)(TW(SF))
          }));
        let hF = null,
          iW = 0;
        const QF = () => {
          hF = null, (0, PW.e)(null)
        };
        let gW = !1;
        const tW = new vW,
          TF = hW(),
          VF = new jW.e,
          LF = new jW.e,
          OF = lF(),
          xW = AF.j.subscribe(qW.m, (FF => {
            OF.pressPicked(rS(), FF)
          })),
          ZF = gS((FF => FF.primaryFireDown()), ((FF, WF) => {
            FF.primaryFireUp(WF)
          })),
          oF = gS((FF => FF.altFireDown()), ((FF, WF) => {
            FF.altFireUp(WF)
          }));
        let MF = !1,
          fF = !1,
          KF = !1;
        const wF = (0, nF.b)(RF.T),
          XF = (0, nF.b)(RF.T),
          UF = new jW.e;
        let BF = !1;
        const JF = () => {
            wF.reset(), XF.reset(), UF.release(), (0, iS.c)(!1), TF.release(), ZF.cancel(), (0, RW.f)(!1), oF.cancel(), OF.release(), VF.release(), LF.release(), QF()
          },
          pF = function() {
            var SF;
            let CF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (JF(), fF = !1, CF) return;
            MF = !1, WF = tS, Object.assign(FF, {
              x: 0,
              y: 0,
              magnitude: 0,
              headingOffset: 0,
              jumpHeld: !1,
              jumpPressedSinceTick: !1,
              crouchHeld: !1,
              running: !1,
              sprintHeld: !1
            });
            const AF = null === (SF = (0, EF.h)()) || void 0 === SF ? void 0 : SF.qm.CdF();
            (null === AF || void 0 === AF ? void 0 : AF.gamepad) === FF && (AF.gamepad = null)
          },
          AW = function(CF, AF, uF) {
            let hF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const dF = (0, EF.h)(),
              iW = dF.qm.CdF(),
              eF = (0, PF.i)(),
              QF = ((FF, WF) => {
                const SF = (0, RF.j)(FF, WF),
                  CF = Math.min(1, Math.hypot(SF.x, SF.y));
                return {
                  magnitude: CF,
                  speed: Math.min(1, CF / .8),
                  headingOffset: 0 === CF ? 0 : Math.atan2(SF.x, -SF.y),
                  x: SF.x,
                  y: SF.y
                }
              })(AF, eF.moveDeadzone),
              rW = (0, bW.h)("sprint");
            WF = ((FF, WF) => {
              let {
                sprintPressed: SF,
                magnitude: CF,
                autoSprint: AF,
                nowMs: uF
              } = WF;
              const hF = SF ? uF : FF.latchedAtMs,
                bW = (FF => {
                  let {
                    running: WF,
                    magnitude: SF,
                    sprintPressed: CF,
                    autoSprint: AF
                  } = FF;
                  return !(SF < .5) && (!!CF || !!(AF && SF >= .9) || WF)
                })({
                  running: FF.running,
                  magnitude: CF,
                  sprintPressed: uF - hF <= 1e3,
                  autoSprint: AF
                });
              return {
                running: bW,
                latchedAtMs: bW ? -1 / 0 : hF
              }
            })(WF, {
              sprintPressed: CF.wasPressed(rW),
              magnitude: QF.magnitude,
              autoSprint: eF.autoSprint,
              nowMs: uF
            }), FF.running = WF.running, FF.sprintHeld = CF.isHeld(rW), FF.x = QF.x, FF.y = QF.y, FF.magnitude = QF.speed, FF.headingOffset = QF.headingOffset, MF = QF.magnitude > 0;
            const gW = (0, bW.h)("jump");
            if (FF.jumpHeld = CF.isHeld(gW), CF.wasPressed(gW) && (FF.jumpPressedSinceTick = !0, rS().jumpDown()), hF) return void(iW.gamepad = FF);
            const tW = (0, bW.h)("sneak"),
              TF = (FF => {
                let {
                  mode: WF,
                  sneakHeld: SF,
                  sneakPressed: CF,
                  sneakTogglePressed: AF,
                  descending: uF,
                  canCrouch: hF,
                  toggled: bW
                } = FF;
                return hF ? uF ? {
                  crouchHeld: SF,
                  toggled: !1
                } : "hold" === WF ? {
                  crouchHeld: SF,
                  toggled: AF ? !bW : bW
                } : {
                  crouchHeld: !1,
                  toggled: CF || AF ? !bW : bW
                } : {
                  crouchHeld: !1,
                  toggled: !1
                }
              })({
                ...SF.filter({
                  sneakHeld: CF.isHeld(tW),
                  sneakPressed: CF.wasPressed(tW),
                  sneakTogglePressed: CF.wasPressed((0, bW.h)("sneakToggle"))
                }, uF),
                mode: eF.sneakMode,
                descending: dF.qm.bdF(dF.vSF).shouldIgnoreCrouchingSpeedReduction(),
                canCrouch: !!dF.uL.canCrouch,
                toggled: TW(iW)
              });
            FF.crouchHeld = TF.crouchHeld, iW.padSneakToggled = TF.toggled, iW.crouchToggled = !1, (0, dW.g)(TF.toggled), iW.gamepad = FF
          },
          uW = (FF, WF, SF) => {
            const CF = (0, bW.h)("perspective"),
              AF = (0, bW.h)("oV"),
              uF = (() => {
                const FF = (0, EF.h)().uL;
                return !!FF.creative && !!FF.canPickBlocks
              })();
            (0, iS.c)(uF && !BF && null !== (0, EF.h)().GhF);
            const hF = () => {
              WF.oV() && (BF = !0, (0, iS.c)(!1))
            };
            if (!uF || AF !== CF) return UF.release(), FF.wasPressed(CF) && WF.swapCameraZoom(), void(uF && FF.wasPressed(AF) && hF());
            const dF = UF.update(FF.wasPressed(AF), FF.isHeld(AF), SF, EW());
            "tap" === dF ? hF() : "hold" === dF && WF.swapCameraZoom()
          },
          aS = (FF, WF) => {
            const SF = (0, bW.h)("chat");
            if ("off" === (0, PF.i)().quickChat) return void(FF.wasPressed(SF) && (dF.c.consumeButton(SF), AF.j.Uu(WW.e)));
            const CF = VF.update(FF.wasPressed(SF), FF.isHeld(SF), WF, EW());
            "tap" === CF || "hold" === CF && null === (0, sF.e)() ? AF.j.Uu(WW.e) : "hold" === CF && (dF.c.consumeButton(SF), AF.j.Uu(kW.m))
          },
          kS = (FF, WF) => {
            ((FF, WF) => {
              const SF = (0, HF.b)(),
                CF = (0, bW.h)("emoteWheel");
              if ("wheel" === (0, PF.i)().emoteButton) return FF.wasPressed(CF) && (dF.c.consumeButton(CF), AF.j.Uu("requestEmoteWheelPadOpen", !0)), (0, HF.b)() !== SF;
              const uF = LF.update(FF.wasPressed(CF), FF.isHeld(CF), WF, EW());
              return "tap" === uF ? AF.j.Uu("requestEmoteRepeatLast") : "hold" === uF && (dF.c.consumeButton(CF), AF.j.Uu("requestEmoteWheelPadOpen", !1)), (0, HF.b)() !== SF
            })(FF, WF) || aS(FF, WF), FF.wasPressed((0, bW.h)("inventory")) && (dF.c.consumeButton((0, bW.h)("inventory")), (0, zW.s)(QW(), "inventory", (0, cW.d)((0, EF.h)()))), FF.wasPressed((0, bW.h)("pause")) && (dF.c.consumeButton((0, bW.h)("pause")), (0, IF.c)() === GF.n.SOCIAL ? (0, zW.p)(QW(), GF.n.SOCIAL) : (0, zW.i)(QW())), FF.wasPressed((0, bW.h)("leaderboard")) && !(0, rW.h)() && (dF.c.consumeButton((0, bW.h)("leaderboard")), (FF => {
              if ("shop" === (0, SW.e)()) return AF.j.Uu(CW.k), void(0, zW.p)(FF, GF.n.SHOP, !0);
              (0, zW.p)(FF, GF.n.LOBBY_LEADERBOARD, !!(0, EF.h)().uL.lobbyLeaderboardInfo)
            })(QW()))
          },
          qS = (FF, WF) => {
            const SF = rS();
            ((FF, WF) => {
              const SF = (0, bW.h)("attack"),
                CF = FF.wasPressed(SF),
                AF = (0, EF.h)();
              CF && !ZF.isLatched() && (gW = !!AF.GhF), ZF.update(CF, FF.isHeld(SF), WF, "toggle" === (0, PF.i)().attackMode), ZF.isLatched() && gW ? tW.update(!!AF.GhF, WF) && ZF.unlatch() : tW.reset(), (0, RW.f)(ZF.isLatched())
            })(FF, WF), oF.update(FF.wasPressed((0, bW.h)("use")), FF.isHeld((0, bW.h)("use")), WF, !1), wF.update(FF.isHeld((0, bW.h)("hotbarPrevious")), WF) && AF.j.Uu("ScrollInventorySlot", -1), XF.update(FF.isHeld((0, bW.h)("hotbarNext")), WF) && AF.j.Uu("ScrollInventorySlot", 1), uW(FF, SF, WF), ((FF, WF, SF) => {
              var CF;
              const AF = (0, bW.h)("drop");
              if (FF.wasPressed(AF)) {
                WF.dropItem(!1);
                const FF = (0, PF.i)();
                "off" !== FF.buttonRepeat && (hF = SF, iW = eW.c[FF.tapHoldTime].dropStackMs, (0, PW.e)(iW))
              }
              if (null === hF) return;
              const uF = (0, EF.h)(),
                dF = !(null !== (CF = uF.qm.obF(uF.vSF)) && void 0 !== CF && CF.getItemAtSelectedSlot());
              !FF.isHeld(AF) || dF ? QF() : SF - hF >= iW && (QF(), WF.dropItem(!0))
            })(FF, SF, WF), OF.update(SF, FF, WF, EW()), kS(FF, WF)
          },
          VW = dF.c.register({
            name: "gameplay",
            isActive: () => {
              var FF;
              const WF = MF && "keyboardMouse" === YF.b.get("activeInputDevice") && !(0, yW.G)(),
                SF = (0, yW.j)() ? [DF] : [];
              return ((0, yW.j)() || WF) && (0, aW.f)(SF) && !(null === (FF = (0, EF.h)()) || void 0 === FF || !FF.vSF)
            },
            onFrame: FF => {
              const WF = performance.now(),
                AF = (0, PF.i)(),
                uF = ((FF, WF) => WF ? {
                  ...FF,
                  isHeld: SF => SF !== WF && FF.isHeld(SF),
                  wasPressed: SF => SF !== WF && FF.wasPressed(SF),
                  wasReleased: SF => SF !== WF && FF.wasReleased(SF),
                  value: SF => SF === WF ? 0 : FF.value(SF)
                } : FF)(FF, ((FF, WF, SF) => SF && FF.gyroAiming && "button" === FF.gyroActivation && FF.gyroButton !== WF ? FF.gyroButton : null)(AF, (0, bW.h)("pause"), (0, CF.b)().isSupported())),
                hF = eF(uF, AF.swapSticks);
              return (0, yW.j)() ? (fF = !1, (0, aW.f)() ? (KF = !1, TF.update((0, EF.h)(), hF.look, AF, uF.isHeld((0, bW.h)("use"))), AW(uF, hF.move, WF), void qS(uF, WF)) : (KF || (KF = !0, SF.lostToPadScreen(), pF()), void aS(uF, WF))) : (fF || (JF(), fF = !0), void AW(uF, hF.move, WF))
            },
            onDeactivate: FF => {
              (0, yW.j)() && SF.lostToPadScreen(), pF(FF)
            },
            onPeekFrame: FF => {
              var WF;
              (0, yW.j)() && (0, aW.f)(NF) && null !== (WF = (0, EF.h)()) && void 0 !== WF && WF.vSF ? AW(FF, eF(FF, (0, PF.i)().swapSticks).move, performance.now(), !0) : pF()
            }
          }),
          NW = mW(),
          DW = (() => {
            const FF = AF.j.subscribe(FW.d, (FF => {
              !FF && (0, yW.j)() && "inGame" === YF.b.get("gameState") && AF.j.Uu("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              AF.j.unsubscribe(FF)
            }
          })();
        return () => {
          pF(), (0, dW.g)(!1), (0, iS.c)(!1), AF.j.unsubscribe(uF), AF.j.unsubscribe(xW), VW(), NW(), DW();
          const FF = (0, EF.h)();
          FF && TF.uninstall(FF)
        }
      };
    SF(36076);
    WW.e;
    const kS = () => {
      const FF = aS(),
        WF = (() => {
          let FF = null,
            WF = !1,
            SF = !1;
          return dF.c.register({
            name: "wheel",
            isActive: () => null !== xW(),
            peek: () => {
              const FF = xW();
              return FF && ZF(FF) ? null : {
                over: "gameplay",
                stick: (0, PF.i)().swapSticks ? "right" : "left"
              }
            },
            onFrame: CF => {
              var AF;
              const uF = xW();
              if (!uF) return;
              if (null !== (0, aW.e)([...NF, ...null !== (AF = uF.keptOpenBy) && void 0 !== AF ? AF : []])) return void uF.close();
              const RF = uF.openButton(),
                iW = eF(CF.frame, (0, PF.i)().swapSticks),
                EF = ZF(uF) ? iW.move : iW.look;
              FF !== uF ? (FF = uF, WF = !oF(CF, RF) || Math.hypot(EF.x, EF.y) >= hF.D, SF = !1) : SF && (SF = !1, oF(CF, RF) && (WF = !1)), uF.aim(EF);
              const QF = (0, bW.h)("menuConfirm"),
                rW = (0, bW.h)("menuBack");
              return CF.wasPressed(rW) ? (dF.c.consumeButton(rW), void uF.close()) : CF.wasPressed(QF) || CF.wasPressed(RF) ? (dF.c.consumeButton(QF), dF.c.consumeButton(RF), void uF.commit(!1)) : void(WF && oF(CF, RF) && (WF = !1, uF.commit(!0)))
            },
            onDeactivate: () => {
              SF = null !== FF && xW() === FF, SF || (FF = null, WF = !1)
            }
          })
        })(),
        SF = null,
        CF = null;
      return () => {
        FF(), WF(), null === SF || void 0 === SF || SF(), null === CF || void 0 === CF || CF()
      }
    }
  },
  35133: (FF, WF, SF) => {
    SF.d(WF, {
      A: () => QF,
      D: () => TF,
      e: () => uF,
      h: () => rW,
      i: () => gW,
      l: () => bW,
      p: () => eF,
      r: () => tW,
      t: () => iW,
      w: () => aW
    });
    var CF = SF(11),
      AF = SF(20);
    const uF = "clientGameInventoryButtonsChanged",
      hF = new Map;

    function bW() {
      return [...hF.values()].sort(((FF, WF) => {
        var SF, CF;
        return (null !== (SF = FF.order) && void 0 !== SF ? SF : 0) - (null !== (CF = WF.order) && void 0 !== CF ? CF : 0)
      }))
    }
    let dF = null;

    function PF(FF) {
      dF = FF
    }
    let RF = !1;

    function iW(FF) {
      RF = !0;
      try {
        FF.onClick()
      } finally {
        RF = !1
      }
      FF.panel && "clientGame" === CF.b.get("openInGameMenuName") && PF(FF.id)
    }

    function eF() {
      return RF
    }

    function EF() {
      return bW().filter((FF => FF.panel && !FF.disabled))
    }

    function QF(FF) {
      const WF = EF(),
        SF = WF.findIndex((FF => FF.id === dF));
      return !(SF < 0 || WF.length < 2) && (iW(WF[(SF + FF + WF.length) % WF.length]), !0)
    }

    function rW() {
      return null !== dF && EF().length > 1
    }

    function gW() {
      PF(null)
    }

    function tW() {
      "inventory" !== CF.b.get("openInGameMenuName") && PF(null)
    }

    function TF() {
      const FF = dF;
      return PF(null), FF
    }

    function aW(FF) {
      return hF.set(FF.id, FF), AF.j.Uu(uF, bW(), !0), () => {
        hF.get(FF.id) === FF && (hF.delete(FF.id), AF.j.Uu(uF, bW()))
      }
    }
  },
  35131: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW,
      d: () => gW,
      e: () => tW,
      h: () => eF,
      j: () => PF,
      n: () => rW,
      p: () => EF,
      r: () => RF
    });
    var CF = SF(11),
      AF = SF(20),
      uF = SF(1144),
      hF = SF(35133);
    const bW = "clientGameUiChanged";
    let dF = null;

    function PF() {
      return dF
    }

    function RF(FF, WF) {
      const SF = {
        content: FF,
        menu: WF
      };
      return dF = SF, AF.j.Uu(bW, dF, !0), () => {
        dF === SF && (dF = null, QF = !1, gW(), AF.j.Uu(bW, null))
      }
    }
    let iW = null;

    function eF() {
      return iW
    }

    function EF(FF) {
      return iW = FF, () => {
        iW === FF && (iW = null)
      }
    }
    let QF = !1;

    function rW() {
      const FF = CF.b.get("openInGameMenuName");
      "clientGame" !== FF && (QF = "inventory" === FF), (0, hF.p)() || (0, hF.i)(), (0, uF.h)("InGameMenu"), CF.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function gW() {
      TF(!1)
    }

    function tW() {
      TF(QF)
    }

    function TF(FF) {
      "clientGame" === CF.b.get("openInGameMenuName") && CF.b.set({
        openInGameMenuName: FF ? "inventory" : null
      }), FF || (0, hF.i)(), QF = !1
    }
  },
  35e3: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => dF
    });
    var CF = SF(220),
      AF = SF(11),
      uF = SF(35009),
      hF = SF(1475),
      bW = SF(1621);

    function dF(FF, WF) {
      var SF, dF, PF;
      if (!AF.b.get("isKeydownEnabled") || FF.repeat) return;
      const RF = FF.code;
      "Escape" === FF.key ? (0, hF.i)(FF) : null !== (SF = bW.z.OpenSettings) && void 0 !== SF && SF.includes(RF) ? (0, hF.p)(FF, CF.n.SETTINGS) : null !== (dF = bW.z.OpenCharacterCustomization) && void 0 !== dF && dF.includes(RF) ? (0, uF.e)() || (0, hF.p)(FF, CF.n.CUSTOMISATION, WF()) : null !== (PF = bW.z.ShowDebugOverlay) && void 0 !== PF && PF.includes(RF) && AF.b.set({
        showDebugOverlay: !AF.b.get("showDebugOverlay")
      })
    }
  },
  35052: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF,
      c: () => RF,
      g: () => PF,
      j: () => dF
    });
    const CF = 45,
      AF = 6,
      uF = 4;
    let hF = null,
      bW = !1;

    function dF() {
      return bW || (window.addEventListener("resize", PF), bW = !0), hF ??= function() {
        const FF = getComputedStyle(document.documentElement),
          WF = parseFloat(FF.fontSize),
          SF = parseFloat(FF.getPropertyValue("--touch-hotbar-row-reach")) || WF * uF;
        return Math.max(10, 50 - (WF * AF + SF) / window.innerHeight * 100)
      }(), hF
    }

    function PF() {
      hF = null
    }

    function RF(FF, WF, SF, CF) {
      const AF = Math.min(Math.abs(FF) > .001 ? SF / Math.abs(FF) : 1 / 0, Math.abs(WF) > .001 ? CF / Math.abs(WF) : 1 / 0);
      return {
        x: 50 + FF * AF,
        y: 50 + WF * AF
      }
    }
  },
  3855: (FF, WF, SF) => {
    SF.d(WF, {
      Howl: () => CF.Howl,
      c: () => CF.Howler
    });
    var CF = SF(3863);
    CF.Howler._mobileUnloaded = !0
  },
  34989: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => rW,
      h: () => gW
    });
    var CF = SF(874),
      AF = SF(247),
      uF = SF(271),
      hF = SF(882),
      bW = SF(3607),
      dF = SF(89),
      PF = SF(132),
      RF = SF(1510),
      iW = SF(107),
      eF = SF(34993),
      EF = SF(33),
      QF = SF(958);

    function rW() {
      var FF, WF;
      return [...null !== (FF = navigator.languages) && void 0 !== FF ? FF : [null !== (WF = navigator.language) && void 0 !== WF ? WF : "none"], "en-Gb"]
    }

    function gW(FF, WF, SF, gW, tW) {
      const TF = (0, CF.j)(WF) ? (0, CF.o)(WF) : null,
        aW = {
          cookies: (0, RF.getAllCookiesForGameNameWithVariation)(WF),
          isMobile: (0, dF.isMobile)(),
          isUsingCustomGameTexturePack: null !== TF && tW(TF),
          generalCookies: {
            joinDiscord: !!EF.h.getItem("DiscordPressed"),
            newGo: bW.e,
            ...FF.getMetricsCookies(),
            trafficCode: gW,
            compliance: dF.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, dF.getBrowserName)(),
            version: (0, dF.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, dF.getPlatformType)(),
            deviceType: (0, iW.c)()
          },
          isLoggedIn: FF.isLoggedIn(),
          lobbyName: SF,
          languages: rW(),
          version: AF.c,
          siteUsed: PF.s,
          subsiteUsed: PF.z,
          playSessionId: (0, eF.f)(WF),
          visitSessionId: (0, QF.b)()
        };
      return null !== TF && (0, uF.zc)(TF) ? (aW.lobbyName = (0, CF.g)(TF, (0, CF.l)(WF), SF), {
        roomName: `classic_${hF.h}`,
        joinOptions: aW
      }) : {
        roomName: WF,
        joinOptions: aW
      }
    }
  },
  35265: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF,
      f: () => AF,
      j: () => CF
    });

    function CF(FF) {
      return FF.replace(/[_\-\s]*\d+$/, "") || FF
    }

    function AF(FF, WF, SF) {
      return SF <= 0 ? 0 : FF * SF / Math.max(WF, SF)
    }

    function uF(FF, WF) {
      const SF = FF.getDurationMs();
      return SF > 0 ? FF.loudness * Math.max(0, 1 - (WF - FF.startMs) / SF) : 0
    }
    class hF {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = FF, this.maxPerGroup = WF, this.voices = []
      }
      admit(FF) {
        if (this.voices = this.voices.filter((FF => FF.isAlive())), null !== FF.group) {
          const WF = this.voices.filter((WF => WF.group === FF.group));
          if (WF.length >= this.maxPerGroup && !this.dropLeastWorth(WF, FF)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, FF)) && (this.voices.push(FF), !0)
      }
      dropLeastWorth(FF, WF) {
        let SF = null,
          CF = 1 / 0;
        for (const AF of FF) {
          if (!AF.canStop()) continue;
          const FF = uF(AF, WF.startMs);
          FF < CF && (SF = AF, CF = FF)
        }
        return !(!SF || WF.loudness < CF) && (this.voices.splice(this.voices.indexOf(SF), 1), SF.stop(), !0)
      }
    }
  },
  35276: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => uF,
      g: () => hF,
      j: () => CF
    });
    class CF {
      constructor(FF) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = FF
      }
      setMultiplierType(FF, WF) {
        var SF;
        this.multipliers[FF] = WF, null === (SF = this._onUpdate) || void 0 === SF || SF.call(this)
      }
      removeMultiplier(FF) {
        var WF;
        delete this.multipliers[FF], null === (WF = this._onUpdate) || void 0 === WF || WF.call(this)
      }
      getMultiplierType(FF) {
        return this.multipliers[FF]
      }
      getTotalMultipliedVal() {
        let FF = 1;
        for (const WF in this.multipliers) FF *= this.multipliers[WF];
        return FF
      }
    }
    class AF {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = FF
      }
      setBooleanType(FF, WF) {
        const SF = this._getTotalBooleanVal();
        this.booleans[FF] = !!WF;
        const CF = this.getTotalBooleanVal();
        var AF;
        CF !== SF && (null === (AF = this._onUpdate) || void 0 === AF || AF.call(this, CF, this.booleans));
        return CF
      }
      removeBoolean(FF) {
        const WF = this._getTotalBooleanVal();
        delete this.booleans[FF];
        const SF = this._getTotalBooleanVal();
        var CF;
        null !== SF && SF !== WF && (null === (CF = this._onUpdate) || void 0 === CF || CF.call(this, SF, this.booleans));
        return null !== SF && void 0 !== SF && SF
      }
      getBooleanType(FF) {
        return this.booleans[FF]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var FF;
        null === (FF = this._onUpdate) || void 0 === FF || FF.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class uF extends AF {
      getTotalBooleanVal() {
        const FF = this._getTotalBooleanVal();
        if (null === FF) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return FF
      }
      _getTotalBooleanVal() {
        let FF = !1,
          WF = !0;
        for (const SF in this.booleans) FF = !0, WF &&= this.booleans[SF];
        return FF ? WF : null
      }
    }
    class hF extends AF {
      getTotalBooleanVal() {
        const FF = this._getTotalBooleanVal();
        if (null === FF) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return FF
      }
      _getTotalBooleanVal() {
        let FF = !1,
          WF = !1;
        for (const SF in this.booleans) FF = !0, WF ||= this.booleans[SF];
        return FF ? WF : null
      }
    }
  },
  35269: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF,
      f: () => CF,
      g: () => AF
    });
    const CF = 15,
      AF = 3,
      uF = 30
  },
  37468: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW,
      f: () => uF
    });
    var CF = SF(3275);
    let AF = null;

    function uF(FF) {
      return null !== AF && FF === AF
    }

    function hF() {
      this.SCF = !1, this.stopPropagation = !1, this.CCF = !1, this.disabled = !1
    }
    class bW {
      constructor(FF, WF) {
        this.version = "0.7.0";
        var SF = Object.assign({}, new hF, WF || {});
        this.element = FF || document, this.SCF = !!SF.SCF, this.stopPropagation = !!SF.stopPropagation, this.CCF = !!SF.CCF, this.disabled = !!SF.disabled, this.filterEvents = (FF, WF) => !0, this.down = new CF.EventEmitter, this.up = new CF.EventEmitter, this.state = {}, this.MCF = {
          dx: 0,
          dy: 0,
          idF: 0,
          ebF: 0,
          EbF: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? PF(this) : document.addEventListener("DOMContentLoaded", (FF => {
          PF(this)
        }), {
          once: !0
        })
      }
      bind(FF) {
        for (var WF = arguments.length, SF = new Array(WF > 1 ? WF - 1 : 0), CF = 1; CF < WF; CF++) SF[CF - 1] = arguments[CF];
        SF.forEach((WF => {
          var SF = this._keyBindmap[WF] || [];
          SF.includes(FF) || (SF.push(FF), this._keyBindmap[WF] = SF)
        })), this.state[FF] = !!this.state[FF], this.pressCount[FF] = this.pressCount[FF] || 0, this.releaseCount[FF] = this.releaseCount[FF] || 0
      }
      unbind(FF) {
        for (var WF in this._keyBindmap) {
          var SF = this._keyBindmap[WF],
            CF = SF.indexOf(FF);
          CF > -1 && SF.splice(CF, 1)
        }
      }
      getBindings() {
        var FF = {};
        for (var WF in this._keyBindmap) {
          this._keyBindmap[WF].forEach((SF => {
            FF[SF] = FF[SF] || [], FF[SF].push(WF)
          }))
        }
        return FF
      }
      lF() {
        dF(this.MCF), dF(this.pressCount), dF(this.releaseCount)
      }
    }

    function dF(FF) {
      for (var WF in FF) FF[WF] = 0
    }

    function PF(FF) {
      window.addEventListener("keydown", gW.bind(null, FF, !0), !1), window.addEventListener("keyup", gW.bind(null, FF, !1), !1);
      var WF = {
        passive: !0
      };
      FF.element.addEventListener("touchstart", EF.bind(void 0, FF), {
        passive: !1
      }), FF.element.addEventListener("touchend", rW.bind(void 0, FF), WF), FF.element.addEventListener("mousedown", tW.bind(null, FF, !0), WF), window.document.addEventListener("mouseup", tW.bind(null, FF, !1), WF), FF.element.addEventListener("touchmove", TF.bind(null, FF), WF), FF.element.addEventListener("mousemove", TF.bind(null, FF), WF), window.PointerEvent, FF.element.addEventListener("wheel", aW.bind(null, FF), WF), FF.element.addEventListener("contextmenu", kW.bind(null, FF), !1)
    }
    var RF = 0,
      iW = 0,
      eF = null;

    function EF(FF, WF) {
      WF.preventDefault(), QF(WF)
    }

    function QF(FF) {
      let WF = !1;
      for (let SF = 0; SF < FF.touches.length; ++SF)
        if (FF.touches[SF].identifier === eF) {
          WF = !0;
          break
        } if (!WF) {
        const WF = FF.changedTouches[0];
        RF = WF.clientX, iW = WF.clientY, eF = WF.identifier
      }
    }

    function rW(FF, WF) {
      for (var SF = WF.changedTouches, CF = 0; CF < SF.length; ++CF) SF[CF].identifier === eF && (eF = null)
    }

    function gW(FF, WF, SF) {
      try {
        NF(FF, SF), WF && SF.isTrusted && !SF.repeat && FF._keyStates[SF.code] && DF(FF, SF.code)
      } finally {
        LF(SF.code, WF, FF, SF)
      }
    }

    function tW(FF, WF, SF) {
      try {
        NF(FF, SF)
      } finally {
        ! function(FF, WF, SF) {
          if ("pointerId" in SF)
            if (WF) {
              if (null !== FF._touches.currID) return;
              FF._touches.currID = SF.pointerId
            } else {
              if (FF._touches.currID !== SF.pointerId) return;
              FF._touches.currID = null
            } var CF = "button" in SF ? SF.button + 1 : 1;
          LF("Mouse" + CF, WF, FF, SF)
        }(FF, WF, SF)
      }
    }

    function TF(FF, WF) {
      WF.touches || NF(FF, WF);
      var SF = WF.movementX || WF.mozMovementX || 0,
        CF = WF.movementY || WF.mozMovementY || 0;
      if (WF.touches && 0 === (SF | CF)) {
        var AF = function(FF) {
          QF(FF);
          for (let WF = 0; WF < FF.changedTouches.length; ++WF)
            if (FF.changedTouches[WF].identifier == eF) {
              const SF = FF.changedTouches[WF],
                CF = [SF.clientX - RF, SF.clientY - iW];
              return RF = SF.clientX, iW = SF.clientY, CF
            } return console.error(`Did not find touch id ${eF}`), [0, 0]
        }(WF);
        SF = AF[0], CF = AF[1]
      }
      FF.MCF.dx += SF, FF.MCF.dy += CF
    }

    function aW(FF, WF) {
      NF(FF, WF);
      var SF = 1;
      switch (WF.deltaMode) {
        case 0:
          SF = 1;
          break;
        case 1:
          SF = 12;
          break;
        case 2:
          SF = FF.element.clientHeight || window.innerHeight
      }
      FF.MCF.idF += (WF.deltaX || 0) * SF, FF.MCF.ebF += (WF.deltaY || 0) * SF, FF.MCF.EbF += (WF.deltaZ || 0) * SF
    }

    function kW(FF, WF) {
      if (!FF.CCF) return WF.preventDefault(), !1
    }
    var qW = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function VF(FF, WF) {
      return !!FF[qW[WF]] || ("AltRight" === WF || "ControlLeft" === WF) && "function" === typeof FF.getModifierState && !0 === FF.getModifierState("AltGraph")
    }

    function NF(FF, WF) {
      if (WF.isTrusted)
        for (var SF in qW) FF._keyStates[SF] && SF !== WF.code && (VF(WF, SF) || DF(FF, SF))
    }

    function DF(FF, WF) {
      const SF = {
          code: WF,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        CF = AF;
      AF = SF;
      try {
        LF(WF, !1, FF, SF)
      } finally {
        AF = CF
      }
    }

    function LF(FF, WF, SF, CF) {
      var AF = SF._keyBindmap[FF];
      AF && (mW(SF._keyStates[FF], WF) && (SF._keyStates[FF] = WF, AF.forEach((FF => {
        (!SF.filterEvents || SF.filterEvents(CF, FF)) && function(FF, WF, SF, CF) {
          var AF = WF ? SF.pressCount : SF.releaseCount;
          AF[FF] = (AF[FF] || 0) + 1;
          var uF = SF._bindPressCount[FF] || 0;
          (uF += WF ? 1 : -1) < 0 && (uF = 0);
          SF._bindPressCount[FF] = uF;
          var hF = SF.state[FF];
          if (mW(hF, uF)) {
            SF.state[FF] = uF > 0;
            var bW = WF ? SF.down : SF.up;
            SF.disabled || bW.emit(FF, CF)
          }
        }(FF, WF, SF, CF)
      }))), "button" in CF || (SF.SCF && !CF.defaultPrevented && CF.preventDefault(), SF.stopPropagation && CF.stopPropagation()))
    }

    function mW(FF, WF) {
      return FF ? !WF : WF
    }
  },
  37427: (FF, WF, SF) => {
    function CF(FF, WF, SF, CF, AF) {
      var uF = {};
      return Object.keys(CF).forEach((function(FF) {
        uF[FF] = CF[FF]
      })), uF.enumerable = !!uF.enumerable, uF.configurable = !!uF.configurable, ("value" in uF || uF.initializer) && (uF.writable = !0), uF = SF.slice().reverse().reduce((function(SF, CF) {
        return CF(FF, WF, SF) || SF
      }), uF), AF && void 0 !== uF.initializer && (uF.value = uF.initializer ? uF.initializer.call(AF) : void 0, uF.initializer = void 0), void 0 === uF.initializer && (Object.defineProperty(FF, WF, uF), uF = null), uF
    }
    SF.d(WF, {
      e: () => CF
    })
  },
  37422: (FF, WF, SF) => {
    function CF(FF, WF, SF, CF) {
      SF && Object.defineProperty(FF, WF, {
        enumerable: SF.enumerable,
        configurable: SF.configurable,
        writable: SF.writable,
        value: SF.initializer ? SF.initializer.call(CF) : void 0
      })
    }
    SF.d(WF, {
      c: () => CF
    })
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);
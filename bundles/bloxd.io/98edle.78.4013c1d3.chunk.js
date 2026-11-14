export const id = 78;
export const ids = [76, 78];
export const modules = {
  34924: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => TW,
      g: () => gR
    });
    var wW = MW(75),
      CW = MW(2221),
      zR = MW(1253),
      AW = MW(1571),
      bR = MW(34858),
      yR = MW(564),
      NW = MW(897),
      eW = MW.n(NW),
      BW = MW(940);
    const tR = {},
      TW = (0, wW.memo)((function() {
        const WW = (0, CW.b)();
        return (0, zR.f)("damagedByOtherPlayer", (RW => {
          let {
            U1: MW,
            direction: wW
          } = RW;
          const CW = MW || "nonDirectional";
          if (tR[CW]) {
            const RW = tR[CW];
            clearTimeout(RW.timeout), RW.direction = wW, RW.timeout = setTimeout((() => {
              delete tR[CW], WW()
            }), 800)
          } else tR[CW] = {
            direction: wW,
            iwW: null,
            timeout: setTimeout((() => {
              delete tR[CW], WW()
            }), 800)
          };
          WW()
        })), (0, AW.d)("kill", (RW => {
          let {
            killer: MW,
            victim: wW
          } = RW;
          const CW = wW.id;
          MW.local && CW && CW in tR && (clearTimeout(tR[CW].timeout), delete tR[CW], WW())
        })), (0, wW.useEffect)((() => {
          const WW = (0, bR.f)("turnDamageIndicators", gR);
          return () => {
            WW();
            for (const WW in tR) clearTimeout(tR[WW].timeout), delete tR[WW]
          }
        }), []), (0, BW.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(tR).map((WW => {
            let [RW, MW] = WW;
            const wW = (0, yR.S)(MW.direction);
            return (0, BW.jsx)("div", {
              ref: WW => {
                tR[RW] && (tR[RW].iwW = WW)
              },
              className: eW()("DamageIndicator", {
                DamageIndicatorFullCircle: wW
              })
            }, RW)
          }))
        })
      }));

    function gR(WW) {
      for (const RW in tR) {
        const {
          direction: MW,
          iwW: wW
        } = tR[RW];
        if ((0, yR.S)(MW)) continue;
        const CW = MW - WW;
        wW.style.rotate = `${CW}rad`
      }
    }
  },
  35093: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => lW,
      f: () => oW
    });
    var wW = MW(3369),
      CW = MW(1253),
      zR = MW(75),
      AW = MW(5473),
      bR = MW(3361),
      yR = MW(1115),
      NW = MW(1544),
      eW = MW(1523),
      BW = MW(1255),
      tR = MW(1027),
      TW = MW(35096),
      gR = MW(897),
      iR = MW.n(gR),
      YW = MW(1135),
      JW = MW(904),
      PW = MW(1111),
      IW = MW(940);
    const oW = "SleepingOverlay";

    function lW() {
      const {
        t: WW
      } = (0, tR.C)(), [RW, MW] = (0, zR.useState)(!1), [gR, lW] = (0, zR.useState)(null), [fW, QW] = (0, zR.useState)(1), [rR, cR] = (0, zR.useState)(!1), [XW, jR] = (0, zR.useState)(!1), kR = (0, zR.useRef)(0), aR = (0, zR.useRef)(!1), sW = (0, zR.useRef)(!1), dW = (0, zR.useRef)(), pW = (0, zR.useRef)(null);

      function hW() {
        const WW = null !== gR && void 0 !== gR ? gR : "Rested Speed";
        NW.gameBridge.send("wakeUp", XW ? WW : null), pW.current = null, MW(!1), lW(null), QW(1), cR(!1), jR(!1)
      }

      function UW() {
        return !rR && (hW(), !0)
      }
      return (0, CW.f)("PlayerPhysicsTypeUpdate", (WW => {
        WW !== pW.current && (pW.current = WW, WW === AW.p.SLEEPING ? (sW.current || (kR.current = NW.gameBridge.lookup("cameraZoom", null), sW.current = !0), aR.current = !0, NW.gameBridge.send("setCameraZoom", 3), MW(!0), QW(function() {
          for (const WW of NW.gameBridge.lookup("blocksStandingOn", null)) {
            if (TW.d.leafBeds.includes(WW)) return console.log(`Found leaf bed: ${WW}`), 1;
            if (TW.d.woolBeds.includes(WW)) return console.log(`Found woold bed: ${WW}`), 2;
            if (TW.d.strongBeds.includes(WW)) return console.log(`Found strong bed ${WW}`), 3
          }
          return 1
        }())) : (sW.current = !1, MW(!1), lW(null), QW(1)))
      })), (0, zR.useEffect)((() => () => {
        (0, yR.j)(oW)
      }), []), (0, zR.useEffect)((() => {
        RW ? (0, yR.n)(oW) : ((0, yR.j)(oW), aR.current && (NW.gameBridge.send("setCameraZoom", kR.current), aR.current = !1))
      }), [RW]), (0, PW.r)("overlay", dW, UW, RW), (0, IW.jsx)(wW.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: RW,
        timeout: 300,
        nodeRef: dW,
        unmountOnExit: !0,
        children: (0, IW.jsx)("div", {
          ref: dW,
          onClick: WW => {
            UW() && WW.stopPropagation()
          },
          children: (0, IW.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, IW.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: bR.j.map((RW => (0, IW.jsxs)(FW, {
                restedEffect: RW,
                mD: gR,
                setChosenRestedEffect: lW,
                children: [(0, IW.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, IW.jsx)(eW.c, {
                    text: [{
                      icon: RW
                    }]
                  }), bR.g[RW].shortName]
                }), (0, IW.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: WW(bR.g[RW].description, {
                    time: bR.g[RW].effectLevelDurations[fW] / 6e4
                  })
                })]
              }, RW)))
            }), (0, IW.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, IW.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, IW.jsxs)(BW.h, {
                className: "SleepingOverlayWakeUpButton",
                onClick: WW => {
                  XW ? hW() : (cR(!0), (0, YW._)((() => {
                    cR(!1), jR(!0)
                  }), !0)), WW.stopPropagation()
                },
                loading: rR,
                children: [!XW && (0, IW.jsxs)(IW.Fragment, {
                  children: [(0, IW.jsx)(JW.e, {
                    name: "film"
                  }), " ", WW("classicGame:watchAdToGetRestedPerk")]
                }), XW && WW("classicGame:wakeUp")]
              }), (0, IW.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, IW.jsx)("div", {
                  className: iR()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === fW
                  }),
                  children: (0, IW.jsx)(eW.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, IW.jsx)("div", {
                  className: iR()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === fW
                  }),
                  children: (0, IW.jsx)(eW.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, IW.jsx)("div", {
                  className: iR()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === fW
                  }),
                  children: (0, IW.jsx)(eW.c, {
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
    const FW = (0, zR.memo)((function(WW) {
      let {
        children: RW,
        restedEffect: MW,
        mD: wW,
        setChosenRestedEffect: CW
      } = WW;
      return MW === wW ? (0, IW.jsx)(BW.m, {
        onClick: WW => {
          WW.stopPropagation()
        },
        children: RW
      }) : (0, IW.jsx)(BW.j, {
        onClick: WW => {
          CW(MW), WW.stopPropagation()
        },
        children: RW
      })
    }))
  },
  34815: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => yR,
      d: () => NW
    });
    const wW = .1,
      CW = .35,
      zR = .85,
      AW = .06,
      bR = .22;

    function yR(WW) {
      if (WW < wW) return 0;
      if (WW < CW) {
        const RW = (WW - wW) / (CW - wW);
        return AW + (bR - AW) * RW * RW
      }
      return WW < zR ? bR + (1 - bR) * (WW - CW) / (zR - CW) : 1
    }

    function NW(WW) {
      return WW.touchEdgeGuard && WW.touchSpeedCurve
    }
  },
  34855: (WW, RW, MW) => {
    function wW(WW, RW, MW, wW) {
      return !(MW && !WW.aimable) && (!RW || WW.gun && "head" !== wW)
    }

    function CW(WW) {
      return Math.max(.1 * WW, 1)
    }
    MW.d(RW, {
      b: () => CW,
      f: () => wW
    })
  },
  34858: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => bR,
      f: () => AW
    });
    let wW = null;
    const CW = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      zR = {
        crosshairAccuracy: WW => {
          const RW = CW.crosshairAccuracy.at(-1);
          RW ? RW.hook(WW) : wW = WW
        },
        turnDamageIndicators: WW => {
          var RW;
          null === (RW = CW.turnDamageIndicators.at(-1)) || void 0 === RW || RW.hook(WW)
        }
      };

    function AW(WW, RW) {
      const MW = {
          hook: RW
        },
        AW = CW[WW];
      if (AW.push(MW), "crosshairAccuracy" === WW && null !== wW) {
        const WW = wW;
        wW = null, zR.crosshairAccuracy(WW)
      }
      return () => {
        const WW = AW.indexOf(MW); - 1 !== WW && AW.splice(WW, 1)
      }
    }

    function bR() {
      return zR
    }
  },
  38124: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      startPadGameplay: () => oR
    });
    var wW = MW(7738);
    var CW = MW(33),
      zR = MW(7683),
      AW = MW(7693),
      bR = MW(7088),
      yR = MW(7117),
      NW = MW(7095),
      eW = MW(7082);
    class BW {
      constructor() {
        this.fullTiltSinceMs = null
      }
      update(WW, RW, MW) {
        const wW = (0, eW.g)(WW, RW.lookDeadzone);
        if (Math.hypot(wW.x, wW.y) < .9 || Math.abs(wW.x) < Math.abs(wW.y)) return this.fullTiltSinceMs = null, 1;
        null === this.fullTiltSinceMs && (this.fullTiltSinceMs = MW);
        const CW = (zR = RW.lookSensitivityX, Math.min(1, 100 / zR));
        var zR;
        return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (MW - this.fullTiltSinceMs - 250 * CW) / (200 * CW)))
      }
      reset() {
        this.fullTiltSinceMs = null
      }
    }
    const tR = (WW, RW) => RW ? {
      move: WW.rightStick,
      look: WW.leftStick
    } : {
      move: WW.leftStick,
      look: WW.rightStick
    };
    var TW = MW(2154),
      gR = MW(1115),
      iR = MW(3395),
      YW = MW(35093),
      JW = MW(1135),
      PW = MW(1024),
      IW = MW(7126),
      oW = MW(7665),
      lW = MW(7702);
    const FW = {
        emoteWheel: zR.g,
        quickChatWheel: oW.b,
        actionWheel: lW.s
      },
      fW = Object.keys(FW),
      QW = "dead",
      rR = WW => (0, gR.g)().includes(WW),
      cR = () => {
        const WW = [(0, IW.l)(QW, (() => {
          var WW;
          return !(null === (WW = (0, TW.e)()) || void 0 === WW || !WW.GRW) && !(() => {
            var WW;
            const RW = (0, TW.e)();
            return !1 !== (null === (WW = RW.Yk.GbW(RW.GRW)) || void 0 === WW ? void 0 : WW.isAlive)
          })()
        })), (0, IW.l)("sleeping", (() => rR(YW.f))), (0, IW.l)("turnstile", (() => rR(PW.d))), (0, IW.l)("videoAd", JW.F), (0, IW.l)("replay", (() => {
          var WW, RW;
          return (0, iR.h)() || !(null === (WW = (0, TW.b)()) || void 0 === WW || null === (RW = WW.client) || void 0 === RW || !RW.isReplayMode())
        })), (0, IW.l)("freeCamera", (() => {
          var WW, RW, MW;
          return !(null === (WW = (0, TW.b)()) || void 0 === WW || null === (RW = WW.client) || void 0 === RW || null === (MW = RW.freeCameraController) || void 0 === MW || !MW.isEnabled())
        })), ...Object.entries(FW).map((WW => {
          let [RW, MW] = WW;
          return (0, IW.l)(RW, MW)
        }))];
        return () => {
          for (const RW of WW) RW()
        }
      },
      XW = [{
        isOpen: zR.h,
        openButton: () => (0, bR.g)("emoteWheel"),
        aim: WW => {
          CW.k.Sz("emoteWheelPadAim", WW)
        },
        commit: WW => {
          CW.k.Sz("requestEmoteWheelPadCommit", WW)
        },
        close: () => {
          CW.k.Sz("requestEmoteWheelClose")
        }
      }, {
        isOpen: oW.b,
        openButton: () => (0, bR.g)("chat"),
        aim: WW => {
          CW.k.Sz(oW.c, WW)
        },
        commit: WW => {
          CW.k.Sz(oW.f, WW)
        },
        close: () => {
          CW.k.Sz(oW.d)
        },
        keptOpenBy: [QW]
      }, {
        isOpen: lW.s,
        openButton: () => (0, bR.g)("actionButton"),
        aim: WW => {
          CW.k.Sz(lW.d, WW)
        },
        commit: WW => {
          CW.k.Sz(lW.j, WW)
        },
        close: () => {
          CW.k.Sz(lW.h)
        }
      }],
      jR = () => {
        var WW;
        return null !== (WW = XW.find((WW => WW.isOpen()))) && void 0 !== WW ? WW : null
      },
      kR = WW => (0, bR.O)(WW.openButton()),
      aR = (WW, RW) => !(0, eW.G)(WW.frame.values, RW);
    var sW = MW(27),
      dW = MW(37079),
      pW = MW(37099),
      hW = MW(232),
      UW = MW(1459),
      EW = MW(3404),
      VW = MW(7655),
      mR = MW(7121),
      xR = MW(1493),
      vR = MW(7558),
      KW = MW(7698),
      uW = MW(2826),
      OW = MW(2775),
      nW = MW(1544),
      GW = MW(7606),
      LW = MW(7601),
      HW = MW(7663);
    class DW {
      constructor() {
        this.lostAtMs = null
      }
      update(WW, RW) {
        return WW ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= RW, RW - this.lostAtMs >= 250)
      }
      reset() {
        this.lostAtMs = null
      }
    }
    class qR {
      constructor(WW, RW) {
        this.press = WW, this.release = RW, this.downAtMs = null, this.token = null, this.latched = !1
      }
      update(WW, RW, MW, wW) {
        if (WW && null === this.downAtMs) return this.downAtMs = MW, this.latched = wW, void(this.token = this.press());
        null !== this.downAtMs && (this.latched ? WW && this.end() : !RW && MW - this.downAtMs >= 40 && this.end())
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
        const WW = this.token;
        this.downAtMs = null, this.token = null, this.latched = !1, this.release(WW)
      }
    }
    const ZW = {
        kind: "specialAction",
        action: "SpecialAction2"
      },
      SW = () => {
        let WW = null;
        const RW = new HW.b,
          MW = () => {
            WW && (((WW, RW) => {
              switch (RW.kind) {
                case "reload":
                  return void WW.specialActionUp("SpecialAction1");
                case "specialAction":
                  return void WW.specialActionUp(RW.action);
                case "customButton":
                  return void nW.gameBridge.send("pressCustomButton", {
                    id: RW.id,
                    down: !1
                  });
                case "touchButton":
                  (0, OW.sendColyMessage)(uW.Yi, !1)
              }
            })(WW.bodies, WW.action), WW = null)
          },
          wW = (RW, wW, CW, zR) => {
            MW(), WW = {
              action: wW,
              bodies: RW,
              heldBy: CW,
              atMs: zR
            }, ((WW, RW) => {
              switch (RW.kind) {
                case "reload":
                  return WW.reloadGun(), void WW.specialActionDown("SpecialAction1");
                case "specialAction":
                  return void WW.specialActionDown(RW.action);
                case "customButton":
                  return void nW.gameBridge.send("pressCustomButton", {
                    id: RW.id,
                    down: !0
                  });
                case "touchButton":
                  (0, OW.sendColyMessage)(uW.Yi, !0)
              }
            })(RW, wW)
          };
        return {
          update: (zR, AW, NW, BW) => {
            var tR;
            const gR = (() => {
                var WW, RW, MW, wW;
                const CW = (0, TW.e)();
                return (0, GW.k)({
                  holdingGun: !(null === (WW = CW.Yk.LbW(CW.GRW)) || void 0 === WW || null === (RW = WW.WJ) || void 0 === RW || !RW.isGun()),
                  customButtons: null !== (MW = CW.Wk.customButtons) && void 0 !== MW ? MW : null,
                  touchscreenActionButton: null !== (wW = CW.Wk.touchscreenActionButton) && void 0 !== wW ? wW : null
                })
              })(),
              iR = null !== (tR = gR[0]) && void 0 !== tR ? tR : ZW;
            (0, LW.e)((0, GW.f)(iR) ? iR : null);
            const YW = (0, GW.e)(gR);
            (0, LW.f)(YW);
            const JW = (0, bR.g)("actionButton");
            if (YW) {
              const WW = RW.update(AW.wasPressed(JW), AW.isHeld(JW), NW, BW);
              "tap" === WW ? wW(zR, iR, [JW], NW) : "hold" === WW && (yR.c.consumeButton(JW), CW.k.Sz(lW.n, gR))
            } else RW.release(), AW.wasPressed(JW) && wW(zR, iR, [JW], NW);
            WW && NW - WW.atMs >= 40 && !WW.heldBy.some((WW => (0, eW.G)(AW.frame.values, WW))) && MW()
          },
          pressPicked: (WW, RW) => {
            wW(WW, RW, [(0, bR.g)("menuConfirm"), (0, bR.g)("actionButton")], performance.now())
          },
          release: () => {
            RW.release(), MW(), (0, LW.e)(null), (0, LW.f)(!1)
          }
        }
      };
    var WR = MW(7080);
    var RR = MW(7618),
      MR = MW(7109),
      wR = MW(7736);
    var CR = MW(36497);
    const zM = {
        yawRadPerSec: 0,
        pitchRadPerSec: 0
      },
      AR = () => {
        const WW = (0, wW.d)();
        let RW = zM;
        const MW = new BW;
        let CW = !1,
          zR = 0;
        const AW = () => {
          const MW = performance.now(),
            wW = 0 === zR ? 0 : MW - zR;
          if (zR = MW, !CW) return WW.discardPending(), null;
          const AW = ((WW, RW) => {
              const MW = Math.max(0, Math.min(250, RW)) / 1e3;
              return {
                iMW: WW.yawRadPerSec * MW,
                YRW: WW.pitchRadPerSec * MW
              }
            })(RW, wW),
            bR = WW.drainLookDelta(),
            yR = (0, CR.i)();
          return {
            iMW: (AW.iMW + bR.iMW) * yR,
            YRW: (AW.YRW + bR.YRW) * yR
          }
        };
        return {
          update: (WW, wW, zR, bR) => {
            WW.camera.mCW !== AW && (WW.camera.mCW = AW), CW = !0;
            let yR = 1;
            "boost" === zR.lookCurve ? yR = MW.update(wW, zR, performance.now()) : MW.reset(), RW = function(WW, RW) {
              let {
                yawBoost: MW = 1,
                aiming: wW = !1
              } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              const CW = (0, eW.e)((0, eW.g)(WW, RW.lookDeadzone), RW.lookCurve),
                zR = 220 * Math.PI / 180,
                AW = wW ? RW.aimLookSensitivity / 100 : 1,
                bR = RW.lookSensitivityX / 100 * AW,
                yR = RW.lookSensitivityY / 100 * AW;
              return {
                yawRadPerSec: CW.x * zR * bR * MW * (RW.invertLookX ? -1 : 1),
                pitchRadPerSec: CW.y * zR * .7 * yR * (RW.invertLookY ? -1 : 1)
              }
            }(wW, zR, {
              yawBoost: yR,
              aiming: bR
            })
          },
          release: () => {
            CW = !1, RW = zM, MW.reset()
          },
          uninstall: WW => {
            WW.camera.mCW === AW && (WW.camera.mCW = null)
          }
        }
      };
    class bM {
      constructor() {
        this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
      }
      lostToPadScreen() {
        this.regainPending = !0
      }
      filter(WW, RW) {
        this.regainPending && (this.regainPending = !1, this.regainedAtMs = RW, this.graceEndsMs = RW + 500);
        const MW = RW < this.graceEndsMs;
        return MW && (WW.sneakPressed || WW.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, RW + 300))), WW.sneakHeld ? MW && WW.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
          sneakHeld: WW.sneakHeld && !this.ignoringHeld,
          sneakPressed: WW.sneakPressed && !this.ignoringHeld,
          sneakTogglePressed: WW.sneakTogglePressed && !MW
        }
      }
    }
    var yM = MW(7720),
      NR = MW(7625),
      eR = MW(7631),
      BR = MW(7640),
      tM = MW(7561);
    const TR = () => tM.e[(0, NW.i)().tapHoldTime].wheelMs,
      gM = () => ((0, VW.c)(), new Event("controllerMenuKey")),
      iM = () => (0, dW.c)(),
      YR = (WW, RW) => new qR((() => {
        const RW = iM();
        return {
          bodies: RW,
          press: WW(RW)
        }
      }), (WW => {
        let {
          bodies: MW,
          press: wW
        } = WW;
        RW(MW, wW)
      })),
      JR = {
        running: !1,
        latchedAtMs: -1 / 0
      },
      PR = WW => WW.padSneakToggled || !!sW.b.get("clientEscMenuOptions").crouchIsToggle && WW.crouchToggled,
      IR = () => {
        const WW = {
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
        let RW = JR;
        const MW = new bM,
          zR = CW.k.subscribe("appManagerUpdated|activeInputDevice", (WW => {
            const RW = (0, TW.e)(),
              MW = null === RW || void 0 === RW ? void 0 : RW.Yk.WyW();
            "touch" === WW ? ((0, yM.d)(!1), null !== MW && void 0 !== MW && MW.padSneakToggled && (MW.padSneakToggled = !1, MW.isTouchscreen && !MW.gamepad && RW.Yk.QbW(RW.GRW).setCrouching(!!RW.Wk.canCrouch && MW.touchCrouch))) : "gamepad" === WW && MW && (0, yM.d)(PR(MW))
          }));
        let AW = null,
          BW = 0;
        const gR = () => {
          AW = null, (0, NR.c)(null)
        };
        let YW = !1;
        const JW = new DW,
          PW = AR(),
          FW = new HW.b,
          rR = new HW.b,
          XW = SW(),
          jR = CW.k.subscribe(lW.r, (WW => {
            XW.pressPicked(iM(), WW)
          })),
          kR = YR((WW => WW.primaryFireDown()), ((WW, RW) => {
            WW.primaryFireUp(RW)
          })),
          aR = YR((WW => WW.altFireDown()), ((WW, RW) => {
            WW.altFireUp(RW)
          }));
        let dW = !1,
          VW = !1,
          uW = !1;
        const OW = (0, vR.d)(eW.W),
          nW = (0, vR.d)(eW.W),
          GW = new HW.b;
        let LW = !1;
        const qR = () => {
            OW.reset(), nW.reset(), GW.release(), (0, BR.i)(!1), PW.release(), kR.cancel(), (0, eR.e)(!1), aR.cancel(), XW.release(), FW.release(), rR.release(), gR()
          },
          ZW = function() {
            var MW;
            let wW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (qR(), VW = !1, wW) return;
            dW = !1, RW = JR, Object.assign(WW, {
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
            const CW = null === (MW = (0, TW.e)()) || void 0 === MW ? void 0 : MW.Yk.WyW();
            (null === CW || void 0 === CW ? void 0 : CW.gamepad) === WW && (CW.gamepad = null)
          },
          CR = function(wW, CW, zR) {
            let AW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const yR = (0, TW.e)(),
              BW = yR.Yk.WyW(),
              tR = (0, NW.i)(),
              gR = ((WW, RW) => {
                const MW = (0, eW.g)(WW, RW),
                  wW = Math.min(1, Math.hypot(MW.x, MW.y));
                return {
                  magnitude: wW,
                  speed: Math.min(1, wW / .8),
                  headingOffset: 0 === wW ? 0 : Math.atan2(MW.x, -MW.y),
                  x: MW.x,
                  y: MW.y
                }
              })(CW, tR.moveDeadzone),
              iR = (0, bR.g)("sprint");
            RW = ((WW, RW) => {
              let {
                sprintPressed: MW,
                magnitude: wW,
                autoSprint: CW,
                nowMs: zR
              } = RW;
              const AW = MW ? zR : WW.latchedAtMs,
                bR = (WW => {
                  let {
                    running: RW,
                    magnitude: MW,
                    sprintPressed: wW,
                    autoSprint: CW
                  } = WW;
                  return !(MW < .5) && (!!wW || !!(CW && MW >= .9) || RW)
                })({
                  running: WW.running,
                  magnitude: wW,
                  sprintPressed: zR - AW <= 1e3,
                  autoSprint: CW
                });
              return {
                running: bR,
                latchedAtMs: bR ? -1 / 0 : AW
              }
            })(RW, {
              sprintPressed: wW.wasPressed(iR),
              magnitude: gR.magnitude,
              autoSprint: tR.autoSprint,
              nowMs: zR
            }), WW.running = RW.running, WW.sprintHeld = wW.isHeld(iR), WW.x = gR.x, WW.y = gR.y, WW.magnitude = gR.speed, WW.headingOffset = gR.headingOffset, dW = gR.magnitude > 0;
            const YW = (0, bR.g)("jump");
            if (WW.jumpHeld = wW.isHeld(YW), wW.wasPressed(YW) && (WW.jumpPressedSinceTick = !0, iM().jumpDown()), AW) return void(BW.gamepad = WW);
            const JW = (0, bR.g)("sneak"),
              PW = (WW => {
                let {
                  mode: RW,
                  sneakHeld: MW,
                  sneakPressed: wW,
                  sneakTogglePressed: CW,
                  descending: zR,
                  canCrouch: AW,
                  toggled: bR
                } = WW;
                return AW ? zR ? {
                  crouchHeld: MW,
                  toggled: !1
                } : "hold" === RW ? {
                  crouchHeld: MW,
                  toggled: CW ? !bR : bR
                } : {
                  crouchHeld: !1,
                  toggled: wW || CW ? !bR : bR
                } : {
                  crouchHeld: !1,
                  toggled: !1
                }
              })({
                ...MW.filter({
                  sneakHeld: wW.isHeld(JW),
                  sneakPressed: wW.wasPressed(JW),
                  sneakTogglePressed: wW.wasPressed((0, bR.g)("sneakToggle"))
                }, zR),
                mode: tR.sneakMode,
                descending: yR.Yk.MbW(yR.GRW).shouldIgnoreCrouchingSpeedReduction(),
                canCrouch: !!yR.Wk.canCrouch,
                toggled: PR(BW)
              });
            WW.crouchHeld = PW.crouchHeld, BW.padSneakToggled = PW.toggled, BW.crouchToggled = !1, (0, yM.d)(PW.toggled), BW.gamepad = WW
          },
          zM = (WW, RW, MW) => {
            const wW = (0, bR.g)("perspective"),
              CW = (0, bR.g)("JI"),
              zR = (() => {
                const WW = (0, TW.e)().Wk;
                return !!WW.creative && !!WW.canPickBlocks
              })();
            (0, BR.i)(zR && !LW && null !== (0, TW.e)().jbW);
            const AW = () => {
              RW.JI() && (LW = !0, (0, BR.i)(!1))
            };
            if (!zR || CW !== wW) return GW.release(), WW.wasPressed(wW) && RW.swapCameraZoom(), void(zR && WW.wasPressed(CW) && AW());
            const yR = GW.update(WW.wasPressed(CW), WW.isHeld(CW), MW, TR());
            "tap" === yR ? AW() : "hold" === yR && RW.swapCameraZoom()
          },
          IR = (WW, RW) => {
            const MW = (0, bR.g)("chat");
            if ("off" === (0, NW.i)().quickChat) return void(WW.wasPressed(MW) && (yR.c.consumeButton(MW), CW.k.Sz(RR.d)));
            const wW = FW.update(WW.wasPressed(MW), WW.isHeld(MW), RW, TR());
            "tap" === wW || "hold" === wW && null === (0, xR.e)() ? CW.k.Sz(RR.d) : "hold" === wW && (yR.c.consumeButton(MW), CW.k.Sz(oW.g))
          },
          oR = (WW, RW) => {
            ((WW, RW) => {
              const MW = (0, KW.e)(),
                wW = (0, bR.g)("emoteWheel");
              if ("wheel" === (0, NW.i)().emoteButton) return WW.wasPressed(wW) && (yR.c.consumeButton(wW), CW.k.Sz("requestEmoteWheelPadOpen", !0)), (0, KW.e)() !== MW;
              const zR = rR.update(WW.wasPressed(wW), WW.isHeld(wW), RW, TR());
              return "tap" === zR ? CW.k.Sz("requestEmoteRepeatLast") : "hold" === zR && (yR.c.consumeButton(wW), CW.k.Sz("requestEmoteWheelPadOpen", !1)), (0, KW.e)() !== MW
            })(WW, RW) || IR(WW, RW), WW.wasPressed((0, bR.g)("inventory")) && (yR.c.consumeButton((0, bR.g)("inventory")), (0, UW.w)(gM(), "inventory", (0, pW.c)((0, TW.e)()))), WW.wasPressed((0, bR.g)("pause")) && (yR.c.consumeButton((0, bR.g)("pause")), (0, EW.d)() === hW.t.SOCIAL ? (0, UW.u)(gM(), hW.t.SOCIAL) : (0, UW.j)(gM())), WW.wasPressed((0, bR.g)("leaderboard")) && !(0, iR.h)() && (yR.c.consumeButton((0, bR.g)("leaderboard")), (WW => {
              if ("shop" === (0, MR.d)()) return CW.k.Sz(wR.k), void(0, UW.u)(WW, hW.t.SHOP, !0);
              (0, UW.u)(WW, hW.t.LOBBY_LEADERBOARD, !!(0, TW.e)().Wk.lobbyLeaderboardInfo)
            })(gM()))
          },
          lR = (WW, RW) => {
            const MW = iM();
            ((WW, RW) => {
              const MW = (0, bR.g)("attack"),
                wW = WW.wasPressed(MW),
                CW = (0, TW.e)();
              wW && !kR.isLatched() && (YW = !!CW.jbW), kR.update(wW, WW.isHeld(MW), RW, "toggle" === (0, NW.i)().attackMode), kR.isLatched() && YW ? JW.update(!!CW.jbW, RW) && kR.unlatch() : JW.reset(), (0, eR.e)(kR.isLatched())
            })(WW, RW), aR.update(WW.wasPressed((0, bR.g)("use")), WW.isHeld((0, bR.g)("use")), RW, !1), OW.update(WW.isHeld((0, bR.g)("hotbarPrevious")), RW) && CW.k.Sz("ScrollInventorySlot", -1), nW.update(WW.isHeld((0, bR.g)("hotbarNext")), RW) && CW.k.Sz("ScrollInventorySlot", 1), zM(WW, MW, RW), ((WW, RW, MW) => {
              var wW;
              const CW = (0, bR.g)("drop");
              if (WW.wasPressed(CW)) {
                RW.dropItem(!1);
                const WW = (0, NW.i)();
                "off" !== WW.buttonRepeat && (AW = MW, BW = tM.e[WW.tapHoldTime].dropStackMs, (0, NR.c)(BW))
              }
              if (null === AW) return;
              const zR = (0, TW.e)(),
                yR = !(null !== (wW = zR.Yk.cyW(zR.GRW)) && void 0 !== wW && wW.getItemAtSelectedSlot());
              !WW.isHeld(CW) || yR ? gR() : MW - AW >= BW && (gR(), RW.dropItem(!0))
            })(WW, MW, RW), XW.update(MW, WW, RW, TR()), oR(WW, RW)
          },
          FR = yR.c.register({
            name: "gameplay",
            isActive: () => {
              var WW;
              const RW = dW && "keyboardMouse" === sW.b.get("activeInputDevice") && !(0, mR.I)(),
                MW = (0, mR.i)() ? [QW] : [];
              return ((0, mR.i)() || RW) && (0, IW.e)(MW) && !(null === (WW = (0, TW.e)()) || void 0 === WW || !WW.GRW)
            },
            onFrame: WW => {
              const RW = performance.now(),
                CW = (0, NW.i)(),
                zR = ((WW, RW) => RW ? {
                  ...WW,
                  isHeld: MW => MW !== RW && WW.isHeld(MW),
                  wasPressed: MW => MW !== RW && WW.wasPressed(MW),
                  wasReleased: MW => MW !== RW && WW.wasReleased(MW),
                  value: MW => MW === RW ? 0 : WW.value(MW)
                } : WW)(WW, ((WW, RW, MW) => MW && WW.gyroAiming && "button" === WW.gyroActivation && WW.gyroButton !== RW ? WW.gyroButton : null)(CW, (0, bR.g)("pause"), (0, wW.d)().isSupported())),
                AW = tR(zR, CW.swapSticks);
              return (0, mR.i)() ? (VW = !1, (0, IW.e)() ? (uW = !1, PW.update((0, TW.e)(), AW.look, CW, zR.isHeld((0, bR.g)("use"))), CR(zR, AW.move, RW), void lR(zR, RW)) : (uW || (uW = !0, MW.lostToPadScreen(), ZW()), void IR(zR, RW))) : (VW || (qR(), VW = !0), void CR(zR, AW.move, RW))
            },
            onDeactivate: WW => {
              (0, mR.i)() && MW.lostToPadScreen(), ZW(WW)
            },
            onPeekFrame: WW => {
              var RW;
              (0, mR.i)() && (0, IW.e)(fW) && null !== (RW = (0, TW.e)()) && void 0 !== RW && RW.GRW ? CR(WW, tR(WW, (0, NW.i)().swapSticks).move, performance.now(), !0) : ZW()
            }
          }),
          fR = cR(),
          QR = (() => {
            const WW = CW.k.subscribe(WR.e, (WW => {
              !WW && (0, mR.i)() && "inGame" === sW.b.get("gameState") && CW.k.Sz("showBottomMessage", {
                message: [{
                  translationKey: "controller:disconnected"
                }],
                timeoutLength: 3e3,
                type: "Warning"
              })
            }));
            return () => {
              CW.k.unsubscribe(WW)
            }
          })();
        return () => {
          ZW(), (0, yM.d)(!1), (0, BR.i)(!1), CW.k.unsubscribe(zR), CW.k.unsubscribe(jR), FR(), fR(), QR();
          const WW = (0, TW.e)();
          WW && PW.uninstall(WW)
        }
      };
    MW(35751);
    RR.d;
    const oR = () => {
      const WW = IR(),
        RW = (() => {
          let WW = null,
            RW = !1,
            MW = !1;
          return yR.c.register({
            name: "wheel",
            isActive: () => null !== jR(),
            peek: () => {
              const WW = jR();
              return WW && kR(WW) ? null : {
                over: "gameplay",
                stick: (0, NW.i)().swapSticks ? "right" : "left"
              }
            },
            onFrame: wW => {
              var CW;
              const zR = jR();
              if (!zR) return;
              if (null !== (0, IW.c)([...fW, ...null !== (CW = zR.keptOpenBy) && void 0 !== CW ? CW : []])) return void zR.close();
              const eW = zR.openButton(),
                BW = tR(wW.frame, (0, NW.i)().swapSticks),
                TW = kR(zR) ? BW.move : BW.look;
              WW !== zR ? (WW = zR, RW = !aR(wW, eW) || Math.hypot(TW.x, TW.y) >= AW.B, MW = !1) : MW && (MW = !1, aR(wW, eW) && (RW = !1)), zR.aim(TW);
              const gR = (0, bR.g)("menuConfirm"),
                iR = (0, bR.g)("menuBack");
              return wW.wasPressed(iR) ? (yR.c.consumeButton(iR), void zR.close()) : wW.wasPressed(gR) || wW.wasPressed(eW) ? (yR.c.consumeButton(gR), yR.c.consumeButton(eW), void zR.commit(!1)) : void(RW && aR(wW, eW) && (RW = !1, zR.commit(!0)))
            },
            onDeactivate: () => {
              MW = null !== WW && jR() === WW, MW || (WW = null, RW = !1)
            }
          })
        })(),
        MW = null,
        wW = null;
      return () => {
        WW(), RW(), null === MW || void 0 === MW || MW(), null === wW || void 0 === wW || wW()
      }
    }
  },
  34838: (WW, RW, MW) => {
    MW.d(RW, {
      A: () => IW,
      D: () => gR,
      E: () => PW,
      c: () => zR,
      e: () => iR,
      i: () => YW,
      m: () => bR,
      q: () => tR,
      s: () => JW,
      w: () => BW
    });
    var wW = MW(27),
      CW = MW(33);
    const zR = "clientGameInventoryButtonsChanged",
      AW = new Map;

    function bR() {
      return [...AW.values()].sort(((WW, RW) => {
        var MW, wW;
        return (null !== (MW = WW.order) && void 0 !== MW ? MW : 0) - (null !== (wW = RW.order) && void 0 !== wW ? wW : 0)
      }))
    }
    let yR = null;

    function NW(WW) {
      yR = WW
    }
    let eW = !1;

    function BW(WW) {
      eW = !0;
      try {
        WW.onClick()
      } finally {
        eW = !1
      }
      WW.panel && "clientGame" === wW.b.get("openInGameMenuName") && NW(WW.id)
    }

    function tR() {
      return eW
    }

    function TW() {
      return bR().filter((WW => WW.panel && !WW.disabled))
    }

    function gR(WW) {
      const RW = TW(),
        MW = RW.findIndex((WW => WW.id === yR));
      return !(MW < 0 || RW.length < 2) && (BW(RW[(MW + WW + RW.length) % RW.length]), !0)
    }

    function iR() {
      return null !== yR && TW().length > 1
    }

    function YW() {
      NW(null)
    }

    function JW() {
      "inventory" !== wW.b.get("openInGameMenuName") && NW(null)
    }

    function PW() {
      const WW = yR;
      return NW(null), WW
    }

    function IW(WW) {
      return AW.set(WW.id, WW), CW.k.Sz(zR, bR(), !0), () => {
        AW.get(WW.id) === WW && (AW.delete(WW.id), CW.k.Sz(zR, bR()))
      }
    }
  },
  34830: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => bR,
      e: () => YW,
      f: () => JW,
      g: () => tR,
      h: () => NW,
      j: () => iR,
      k: () => TW,
      l: () => eW
    });
    var wW = MW(27),
      CW = MW(33),
      zR = MW(1115),
      AW = MW(34838);
    const bR = "clientGameUiChanged";
    let yR = null;

    function NW() {
      return yR
    }

    function eW(WW, RW) {
      const MW = {
        content: WW,
        menu: RW
      };
      return yR = MW, CW.k.Sz(bR, yR, !0), () => {
        yR === MW && (yR = null, gR = !1, YW(), CW.k.Sz(bR, null))
      }
    }
    let BW = null;

    function tR() {
      return BW
    }

    function TW(WW) {
      return BW = WW, () => {
        BW === WW && (BW = null)
      }
    }
    let gR = !1;

    function iR() {
      const WW = wW.b.get("openInGameMenuName");
      "clientGame" !== WW && (gR = "inventory" === WW), (0, AW.q)() || (0, AW.i)(), (0, zR.n)("InGameMenu"), wW.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function YW() {
      PW(!1)
    }

    function JW() {
      PW(gR)
    }

    function PW(WW) {
      "clientGame" === wW.b.get("openInGameMenuName") && wW.b.set({
        openInGameMenuName: WW ? "inventory" : null
      }), WW || (0, AW.i)(), gR = !1
    }
  },
  34709: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => yR
    });
    var wW = MW(232),
      CW = MW(27),
      zR = MW(34716),
      AW = MW(1459),
      bR = MW(1578);

    function yR(WW, RW) {
      var MW, yR, NW;
      if (!CW.b.get("isKeydownEnabled") || WW.repeat) return;
      const eW = WW.code;
      "Escape" === WW.key ? (0, AW.j)(WW) : null !== (MW = bR.q.OpenSettings) && void 0 !== MW && MW.includes(eW) ? (0, AW.u)(WW, wW.t.SETTINGS) : null !== (yR = bR.q.OpenCharacterCustomization) && void 0 !== yR && yR.includes(eW) ? (0, zR.b)() || (0, AW.u)(WW, wW.t.CUSTOMISATION, RW()) : null !== (NW = bR.q.ShowDebugOverlay) && void 0 !== NW && NW.includes(eW) && CW.b.set({
        showDebugOverlay: !CW.b.get("showDebugOverlay")
      })
    }
  },
  34745: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => wW,
      f: () => eW,
      j: () => NW,
      l: () => yR
    });
    const wW = 45,
      CW = 6,
      zR = 4;
    let AW = null,
      bR = !1;

    function yR() {
      return bR || (window.addEventListener("resize", NW), bR = !0), AW ??= function() {
        const WW = getComputedStyle(document.documentElement),
          RW = parseFloat(WW.fontSize),
          MW = parseFloat(WW.getPropertyValue("--touch-hotbar-row-reach")) || RW * zR;
        return Math.max(10, 50 - (RW * CW + MW) / window.innerHeight * 100)
      }(), AW
    }

    function NW() {
      AW = null
    }

    function eW(WW, RW, MW, wW) {
      const CW = Math.min(Math.abs(WW) > .001 ? MW / Math.abs(WW) : 1 / 0, Math.abs(RW) > .001 ? wW / Math.abs(RW) : 1 / 0);
      return {
        x: 50 + WW * CW,
        y: 50 + RW * CW
      }
    }
  },
  3835: (WW, RW, MW) => {
    MW.d(RW, {
      Howl: () => wW.Howl,
      d: () => wW.Howler
    });
    var wW = MW(3843);
    wW.Howler._mobileUnloaded = !0
  },
  34703: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => iR,
      c: () => YW
    });
    var wW = MW(860),
      CW = MW(265),
      zR = MW(284),
      AW = MW(865),
      bR = MW(3563),
      yR = MW(116),
      NW = MW(151),
      eW = MW(1495),
      BW = MW(130),
      tR = MW(34706),
      TW = MW(50),
      gR = MW(932);

    function iR() {
      var WW, RW;
      return [...null !== (WW = navigator.languages) && void 0 !== WW ? WW : [null !== (RW = navigator.language) && void 0 !== RW ? RW : "none"], "en-gb"]
    }

    function YW(WW, RW, MW, YW, JW) {
      const PW = (0, wW.k)(RW) ? (0, wW.n)(RW) : null,
        IW = {
          cookies: (0, eW.getAllCookiesForGameNameWithVariation)(RW),
          isMobile: (0, yR.isMobile)(),
          isUsingCustomGameTexturePack: null !== PW && JW(PW),
          generalCookies: {
            joinDiscord: !!TW.g.getItem("DiscordPressed"),
            newGo: bR.b,
            ...WW.getMetricsCookies(),
            trafficCode: YW,
            compliance: yR.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, yR.getBrowserName)(),
            version: (0, yR.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, yR.getPlatformType)(),
            deviceType: (0, BW.c)()
          },
          isLoggedIn: WW.isLoggedIn(),
          lobbyName: MW,
          languages: iR(),
          version: CW.e,
          siteUsed: NW.u,
          subsiteUsed: NW.C,
          playSessionId: (0, tR.k)(RW),
          visitSessionId: (0, gR.e)()
        };
      return null !== PW && (0, zR.Ec)(PW) ? (IW.lobbyName = (0, wW.h)(PW, (0, wW.m)(RW), MW), {
        roomName: `classic_${AW.g}`,
        joinOptions: IW
      }) : {
        roomName: RW,
        joinOptions: IW
      }
    }
  },
  34968: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => AW,
      h: () => CW,
      l: () => wW
    });

    function wW(WW) {
      return WW.replace(/[_\-\s]*\d+$/, "") || WW
    }

    function CW(WW, RW, MW) {
      return MW <= 0 ? 0 : WW * MW / Math.max(RW, MW)
    }

    function zR(WW, RW) {
      const MW = WW.getDurationMs();
      return MW > 0 ? WW.loudness * Math.max(0, 1 - (RW - WW.startMs) / MW) : 0
    }
    class AW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = WW, this.maxPerGroup = RW, this.voices = []
      }
      admit(WW) {
        if (this.voices = this.voices.filter((WW => WW.isAlive())), null !== WW.group) {
          const RW = this.voices.filter((RW => RW.group === WW.group));
          if (RW.length >= this.maxPerGroup && !this.dropLeastWorth(RW, WW)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, WW)) && (this.voices.push(WW), !0)
      }
      dropLeastWorth(WW, RW) {
        let MW = null,
          wW = 1 / 0;
        for (const CW of WW) {
          if (!CW.canStop()) continue;
          const WW = zR(CW, RW.startMs);
          WW < wW && (MW = CW, wW = WW)
        }
        return !(!MW || RW.loudness < wW) && (this.voices.splice(this.voices.indexOf(MW), 1), MW.stop(), !0)
      }
    }
  },
  34979: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR,
      d: () => AW,
      f: () => wW
    });
    class wW {
      constructor(WW) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = WW
      }
      setMultiplierType(WW, RW) {
        var MW;
        this.multipliers[WW] = RW, null === (MW = this._onUpdate) || void 0 === MW || MW.call(this)
      }
      removeMultiplier(WW) {
        var RW;
        delete this.multipliers[WW], null === (RW = this._onUpdate) || void 0 === RW || RW.call(this)
      }
      getMultiplierType(WW) {
        return this.multipliers[WW]
      }
      getTotalMultipliedVal() {
        let WW = 1;
        for (const RW in this.multipliers) WW *= this.multipliers[RW];
        return WW
      }
    }
    class CW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = WW
      }
      setBooleanType(WW, RW) {
        const MW = this._getTotalBooleanVal();
        this.booleans[WW] = !!RW;
        const wW = this.getTotalBooleanVal();
        var CW;
        wW !== MW && (null === (CW = this._onUpdate) || void 0 === CW || CW.call(this, wW, this.booleans));
        return wW
      }
      removeBoolean(WW) {
        const RW = this._getTotalBooleanVal();
        delete this.booleans[WW];
        const MW = this._getTotalBooleanVal();
        var wW;
        null !== MW && MW !== RW && (null === (wW = this._onUpdate) || void 0 === wW || wW.call(this, MW, this.booleans));
        return null !== MW && void 0 !== MW && MW
      }
      getBooleanType(WW) {
        return this.booleans[WW]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var WW;
        null === (WW = this._onUpdate) || void 0 === WW || WW.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class zR extends CW {
      getTotalBooleanVal() {
        const WW = this._getTotalBooleanVal();
        if (null === WW) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return WW
      }
      _getTotalBooleanVal() {
        let WW = !1,
          RW = !0;
        for (const MW in this.booleans) WW = !0, RW &&= this.booleans[MW];
        return WW ? RW : null
      }
    }
    class AW extends CW {
      getTotalBooleanVal() {
        const WW = this._getTotalBooleanVal();
        if (null === WW) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return WW
      }
      _getTotalBooleanVal() {
        let WW = !1,
          RW = !1;
        for (const MW in this.booleans) WW = !0, RW ||= this.booleans[MW];
        return WW ? RW : null
      }
    }
  },
  34973: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR,
      f: () => wW,
      j: () => CW
    });
    const wW = 15,
      CW = 3,
      zR = 30
  },
  37101: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => bR,
      f: () => zR
    });
    var wW = MW(3205);
    let CW = null;

    function zR(WW) {
      return null !== CW && WW === CW
    }

    function AW() {
      this.RwW = !1, this.stopPropagation = !1, this.MwW = !1, this.disabled = !1
    }
    class bR {
      constructor(WW, RW) {
        this.version = "0.7.0";
        var MW = Object.assign({}, new AW, RW || {});
        this.element = WW || document, this.RwW = !!MW.RwW, this.stopPropagation = !!MW.stopPropagation, this.MwW = !!MW.MwW, this.disabled = !!MW.disabled, this.filterEvents = (WW, RW) => !0, this.down = new wW.EventEmitter, this.up = new wW.EventEmitter, this.state = {}, this.XwW = {
          dx: 0,
          dy: 0,
          AbW: 0,
          byW: 0,
          yyW: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? NW(this) : document.addEventListener("DOMContentLoaded", (WW => {
          NW(this)
        }), {
          once: !0
        })
      }
      bind(WW) {
        for (var RW = arguments.length, MW = new Array(RW > 1 ? RW - 1 : 0), wW = 1; wW < RW; wW++) MW[wW - 1] = arguments[wW];
        MW.forEach((RW => {
          var MW = this._keyBindmap[RW] || [];
          MW.includes(WW) || (MW.push(WW), this._keyBindmap[RW] = MW)
        })), this.state[WW] = !!this.state[WW], this.pressCount[WW] = this.pressCount[WW] || 0, this.releaseCount[WW] = this.releaseCount[WW] || 0
      }
      unbind(WW) {
        for (var RW in this._keyBindmap) {
          var MW = this._keyBindmap[RW],
            wW = MW.indexOf(WW);
          wW > -1 && MW.splice(wW, 1)
        }
      }
      getBindings() {
        var WW = {};
        for (var RW in this._keyBindmap) {
          this._keyBindmap[RW].forEach((MW => {
            WW[MW] = WW[MW] || [], WW[MW].push(RW)
          }))
        }
        return WW
      }
      WR() {
        yR(this.XwW), yR(this.pressCount), yR(this.releaseCount)
      }
    }

    function yR(WW) {
      for (var RW in WW) WW[RW] = 0
    }

    function NW(WW) {
      window.addEventListener("keydown", YW.bind(null, WW, !0), !1), window.addEventListener("keyup", YW.bind(null, WW, !1), !1);
      var RW = {
        passive: !0
      };
      WW.element.addEventListener("touchstart", TW.bind(void 0, WW), {
        passive: !1
      }), WW.element.addEventListener("touchend", iR.bind(void 0, WW), RW), WW.element.addEventListener("mousedown", JW.bind(null, WW, !0), RW), window.document.addEventListener("mouseup", JW.bind(null, WW, !1), RW), WW.element.addEventListener("touchmove", PW.bind(null, WW), RW), WW.element.addEventListener("mousemove", PW.bind(null, WW), RW), window.PointerEvent, WW.element.addEventListener("wheel", IW.bind(null, WW), RW), WW.element.addEventListener("contextmenu", oW.bind(null, WW), !1), window.addEventListener("blur", fW.bind(null, WW), !1)
    }
    var eW = 0,
      BW = 0,
      tR = null;

    function TW(WW, RW) {
      RW.preventDefault(), gR(RW)
    }

    function gR(WW) {
      let RW = !1;
      for (let MW = 0; MW < WW.touches.length; ++MW)
        if (WW.touches[MW].identifier === tR) {
          RW = !0;
          break
        } if (!RW) {
        const RW = WW.changedTouches[0];
        eW = RW.clientX, BW = RW.clientY, tR = RW.identifier
      }
    }

    function iR(WW, RW) {
      for (var MW = RW.changedTouches, wW = 0; wW < MW.length; ++wW) MW[wW].identifier === tR && (tR = null)
    }

    function YW(WW, RW, MW) {
      try {
        QW(WW, MW), RW && MW.isTrusted && !MW.repeat && WW._keyStates[MW.code] && rR(WW, MW.code)
      } finally {
        cR(MW.code, RW, WW, MW)
      }
    }

    function JW(WW, RW, MW) {
      try {
        QW(WW, MW)
      } finally {
        ! function(WW, RW, MW) {
          if ("pointerId" in MW)
            if (RW) {
              if (null !== WW._touches.currID) return;
              WW._touches.currID = MW.pointerId
            } else {
              if (WW._touches.currID !== MW.pointerId) return;
              WW._touches.currID = null
            } var wW = "button" in MW ? MW.button + 1 : 1;
          cR("Mouse" + wW, RW, WW, MW)
        }(WW, RW, MW)
      }
    }

    function PW(WW, RW) {
      var MW = RW.movementX || RW.mozMovementX || 0,
        wW = RW.movementY || RW.mozMovementY || 0;
      if (RW.touches && 0 === (MW | wW)) {
        var CW = function(WW) {
          gR(WW);
          for (let RW = 0; RW < WW.changedTouches.length; ++RW)
            if (WW.changedTouches[RW].identifier == tR) {
              const MW = WW.changedTouches[RW],
                wW = [MW.clientX - eW, MW.clientY - BW];
              return eW = MW.clientX, BW = MW.clientY, wW
            } return console.error(`Did not find touch id ${tR}`), [0, 0]
        }(RW);
        MW = CW[0], wW = CW[1]
      }
      WW.XwW.dx += MW, WW.XwW.dy += wW
    }

    function IW(WW, RW) {
      QW(WW, RW);
      var MW = 1;
      switch (RW.deltaMode) {
        case 0:
          MW = 1;
          break;
        case 1:
          MW = 12;
          break;
        case 2:
          MW = WW.element.clientHeight || window.innerHeight
      }
      WW.XwW.AbW += (RW.deltaX || 0) * MW, WW.XwW.byW += (RW.deltaY || 0) * MW, WW.XwW.yyW += (RW.deltaZ || 0) * MW
    }

    function oW(WW, RW) {
      if (!WW.MwW) return RW.preventDefault(), !1
    }
    var lW = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function FW(WW, RW) {
      return !!WW[lW[RW]] || ("AltRight" === RW || "ControlLeft" === RW) && "function" === typeof WW.getModifierState && !0 === WW.getModifierState("AltGraph")
    }

    function fW(WW) {
      for (var RW in WW._modifiersHeldThroughBlur = {}, lW) WW._keyStates[RW] && (WW._modifiersHeldThroughBlur[RW] = !0)
    }

    function QW(WW, RW) {
      var MW = WW._modifiersHeldThroughBlur;
      if (MW && RW.isTrusted && document.hasFocus())
        for (var wW in MW) delete MW[wW], WW._keyStates[wW] && wW !== RW.code && (FW(RW, wW) || rR(WW, wW))
    }

    function rR(WW, RW) {
      const MW = {
          code: RW,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        wW = CW;
      CW = MW;
      try {
        cR(RW, !1, WW, MW)
      } finally {
        CW = wW
      }
    }

    function cR(WW, RW, MW, wW) {
      var CW = MW._keyBindmap[WW];
      CW && (XW(MW._keyStates[WW], RW) && (MW._keyStates[WW] = RW, CW.forEach((WW => {
        (!MW.filterEvents || MW.filterEvents(wW, WW)) && function(WW, RW, MW, wW) {
          var CW = RW ? MW.pressCount : MW.releaseCount;
          CW[WW] = (CW[WW] || 0) + 1;
          var zR = MW._bindPressCount[WW] || 0;
          (zR += RW ? 1 : -1) < 0 && (zR = 0);
          MW._bindPressCount[WW] = zR;
          var AW = MW.state[WW];
          if (XW(AW, zR)) {
            MW.state[WW] = zR > 0;
            var bR = RW ? MW.down : MW.up;
            MW.disabled || bR.emit(WW, wW)
          }
        }(WW, RW, MW, wW)
      }))), "button" in wW || (MW.RwW && !wW.defaultPrevented && wW.preventDefault(), MW.stopPropagation && wW.stopPropagation()))
    }

    function XW(WW, RW) {
      return WW ? !RW : RW
    }
  },
  37057: (WW, RW, MW) => {
    function wW(WW, RW, MW, wW, CW) {
      var zR = {};
      return Object.keys(wW).forEach((function(WW) {
        zR[WW] = wW[WW]
      })), zR.enumerable = !!zR.enumerable, zR.configurable = !!zR.configurable, ("value" in zR || zR.initializer) && (zR.writable = !0), zR = MW.slice().reverse().reduce((function(MW, wW) {
        return wW(WW, RW, MW) || MW
      }), zR), CW && void 0 !== zR.initializer && (zR.value = zR.initializer ? zR.initializer.call(CW) : void 0, zR.initializer = void 0), void 0 === zR.initializer && (Object.defineProperty(WW, RW, zR), zR = null), zR
    }
    MW.d(RW, {
      e: () => wW
    })
  },
  37050: (WW, RW, MW) => {
    function wW(WW, RW, MW, wW) {
      MW && Object.defineProperty(WW, RW, {
        enumerable: MW.enumerable,
        configurable: MW.configurable,
        writable: MW.writable,
        value: MW.initializer ? MW.initializer.call(wW) : void 0
      })
    }
    MW.d(RW, {
      d: () => wW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);
export const id = 189;
export const ids = [189];
export const modules = {
  38645: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ,
      f: () => oQ
    });
    var LQ = wQ(3965);
    let qQ = null;

    function oQ(QQ) {
      return null !== qQ && QQ === qQ
    }

    function DQ() {
      this.KJ = !1, this.stopPropagation = !1, this.aJ = !1, this.disabled = !1
    }
    class kQ {
      constructor(QQ, FQ) {
        this.version = "0.7.0";
        var wQ = Object.assign({}, new DQ, FQ || {});
        this.element = QQ || document, this.KJ = !!wQ.KJ, this.stopPropagation = !!wQ.stopPropagation, this.aJ = !!wQ.aJ, this.disabled = !!wQ.disabled, this.filterEvents = (QQ, FQ) => !0, this.ignoreEvent = QQ => !1, this.down = new LQ.EventEmitter, this.up = new LQ.EventEmitter, this.state = {}, this.gJ = {
          dx: 0,
          dy: 0,
          pFQ: 0,
          cFQ: 0,
          CFQ: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? mQ(this) : document.addEventListener("DOMContentLoaded", (QQ => {
          mQ(this)
        }), {
          once: !0
        })
      }
      bind(QQ) {
        for (var FQ = arguments.length, wQ = new Array(FQ > 1 ? FQ - 1 : 0), LQ = 1; LQ < FQ; LQ++) wQ[LQ - 1] = arguments[LQ];
        wQ.forEach((FQ => {
          var wQ = this._keyBindmap[FQ] || [];
          wQ.includes(QQ) || (wQ.push(QQ), this._keyBindmap[FQ] = wQ)
        })), this.state[QQ] = !!this.state[QQ], this.pressCount[QQ] = this.pressCount[QQ] || 0, this.releaseCount[QQ] = this.releaseCount[QQ] || 0
      }
      unbind(QQ) {
        for (var FQ in this._keyBindmap) {
          var wQ = this._keyBindmap[FQ],
            LQ = wQ.indexOf(QQ);
          LQ > -1 && wQ.splice(LQ, 1)
        }
      }
      getBindings() {
        var QQ = {};
        for (var FQ in this._keyBindmap) {
          this._keyBindmap[FQ].forEach((wQ => {
            QQ[wQ] = QQ[wQ] || [], QQ[wQ].push(FQ)
          }))
        }
        return QQ
      }
      fH() {
        vQ(this.gJ), vQ(this.pressCount), vQ(this.releaseCount)
      }
    }

    function vQ(QQ) {
      for (var FQ in QQ) QQ[FQ] = 0
    }

    function mQ(QQ) {
      window.addEventListener("keydown", tQ.bind(null, QQ, !0), !1), window.addEventListener("keyup", tQ.bind(null, QQ, !1), !1);
      var FQ = {
        passive: !0
      };
      QQ.element.addEventListener("touchstart", YQ.bind(void 0, QQ), {
        passive: !1
      }), QQ.element.addEventListener("touchend", AQ.bind(void 0, QQ), FQ), QQ.element.addEventListener("mousedown", eQ.bind(null, QQ, !0), FQ), window.document.addEventListener("mouseup", eQ.bind(null, QQ, !1), FQ), QQ.element.addEventListener("touchmove", MQ.bind(null, QQ), FQ), QQ.element.addEventListener("mousemove", MQ.bind(null, QQ), FQ), window.PointerEvent, QQ.element.addEventListener("wheel", GQ.bind(null, QQ), FQ), QQ.element.addEventListener("contextmenu", pQ.bind(null, QQ), !1), window.addEventListener("blur", SQ.bind(null, QQ), !1)
    }
    var uQ = 0,
      HQ = 0,
      bQ = null;

    function YQ(QQ, FQ) {
      FQ.preventDefault(), xQ(FQ)
    }

    function xQ(QQ) {
      let FQ = !1;
      for (let wQ = 0; wQ < QQ.touches.length; ++wQ)
        if (QQ.touches[wQ].identifier === bQ) {
          FQ = !0;
          break
        } if (!FQ) {
        const FQ = QQ.changedTouches[0];
        uQ = FQ.clientX, HQ = FQ.clientY, bQ = FQ.identifier
      }
    }

    function AQ(QQ, FQ) {
      for (var wQ = FQ.changedTouches, LQ = 0; LQ < wQ.length; ++LQ) wQ[LQ].identifier === bQ && (bQ = null)
    }

    function tQ(QQ, FQ, wQ) {
      if (!QQ.ignoreEvent(wQ)) try {
        iQ(QQ, wQ), FQ && wQ.isTrusted && !wQ.repeat && QQ._keyStates[wQ.code] && WQ(QQ, wQ.code)
      } finally {
        RQ(wQ.code, FQ, QQ, wQ)
      }
    }

    function eQ(QQ, FQ, wQ) {
      if (!QQ.ignoreEvent(wQ)) try {
        iQ(QQ, wQ)
      } finally {
        ! function(QQ, FQ, wQ) {
          if ("pointerId" in wQ)
            if (FQ) {
              if (null !== QQ._touches.currID) return;
              QQ._touches.currID = wQ.pointerId
            } else {
              if (QQ._touches.currID !== wQ.pointerId) return;
              QQ._touches.currID = null
            } var LQ = "button" in wQ ? wQ.button + 1 : 1;
          RQ("Mouse" + LQ, FQ, QQ, wQ)
        }(QQ, FQ, wQ)
      }
    }

    function MQ(QQ, FQ) {
      var wQ = FQ.movementX || FQ.mozMovementX || 0,
        LQ = FQ.movementY || FQ.mozMovementY || 0;
      if (FQ.touches && 0 === (wQ | LQ)) {
        var qQ = function(QQ) {
          xQ(QQ);
          for (let FQ = 0; FQ < QQ.changedTouches.length; ++FQ)
            if (QQ.changedTouches[FQ].identifier == bQ) {
              const wQ = QQ.changedTouches[FQ],
                LQ = [wQ.clientX - uQ, wQ.clientY - HQ];
              return uQ = wQ.clientX, HQ = wQ.clientY, LQ
            } return console.error(`Did not find touch id ${bQ}`), [0, 0]
        }(FQ);
        wQ = qQ[0], LQ = qQ[1]
      }
      QQ.gJ.dx += wQ, QQ.gJ.dy += LQ
    }

    function GQ(QQ, FQ) {
      iQ(QQ, FQ);
      var wQ = 1;
      switch (FQ.deltaMode) {
        case 0:
          wQ = 1;
          break;
        case 1:
          wQ = 12;
          break;
        case 2:
          wQ = QQ.element.clientHeight || window.innerHeight
      }
      QQ.gJ.pFQ += (FQ.deltaX || 0) * wQ, QQ.gJ.cFQ += (FQ.deltaY || 0) * wQ, QQ.gJ.CFQ += (FQ.deltaZ || 0) * wQ
    }

    function pQ(QQ, FQ) {
      if (!QQ.aJ) return FQ.preventDefault(), !1
    }
    var cQ = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function CQ(QQ, FQ) {
      return !!QQ[cQ[FQ]] || ("AltRight" === FQ || "ControlLeft" === FQ) && "function" === typeof QQ.getModifierState && !0 === QQ.getModifierState("AltGraph")
    }

    function SQ(QQ, FQ) {
      for (var wQ in QQ._modifiersHeldThroughBlur = {}, cQ) QQ._keyStates[wQ] && (QQ._modifiersHeldThroughBlur[wQ] = !0);
      FQ && FQ.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (QQ) {
          return !0
        }
      }() && (clearTimeout(QQ._blurRelease), QQ._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var FQ in QQ._modifiersHeldThroughBlur = {}, QQ._keyStates) QQ._keyStates[FQ] && !/^Mouse\d/.test(FQ) && WQ(QQ, FQ)
      }), 0))
    }

    function iQ(QQ, FQ) {
      var wQ = QQ._modifiersHeldThroughBlur;
      if (wQ && FQ.isTrusted && document.hasFocus())
        for (var LQ in wQ) delete wQ[LQ], QQ._keyStates[LQ] && LQ !== FQ.code && (CQ(FQ, LQ) || WQ(QQ, LQ))
    }

    function WQ(QQ, FQ) {
      const wQ = {
          code: FQ,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        LQ = qQ;
      qQ = wQ;
      try {
        RQ(FQ, !1, QQ, wQ)
      } finally {
        qQ = LQ
      }
    }

    function RQ(QQ, FQ, wQ, LQ) {
      var qQ = wQ._keyBindmap[QQ];
      qQ && (OQ(wQ._keyStates[QQ], FQ) && (wQ._keyStates[QQ] = FQ, qQ.forEach((QQ => {
        (!wQ.filterEvents || wQ.filterEvents(LQ, QQ)) && function(QQ, FQ, wQ, LQ) {
          var qQ = FQ ? wQ.pressCount : wQ.releaseCount;
          qQ[QQ] = (qQ[QQ] || 0) + 1;
          var oQ = wQ._bindPressCount[QQ] || 0;
          (oQ += FQ ? 1 : -1) < 0 && (oQ = 0);
          wQ._bindPressCount[QQ] = oQ;
          var DQ = wQ.state[QQ];
          if (OQ(DQ, oQ)) {
            wQ.state[QQ] = oQ > 0;
            var kQ = FQ ? wQ.down : wQ.up;
            wQ.disabled || kQ.emit(QQ, LQ)
          }
        }(QQ, FQ, wQ, LQ)
      }))), "button" in LQ || (wQ.KJ && !LQ.defaultPrevented && LQ.preventDefault(), wQ.stopPropagation && LQ.stopPropagation()))
    }

    function OQ(QQ, FQ) {
      return QQ ? !FQ : FQ
    }
  },
  36300: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => AQ,
      e: () => tQ
    });
    var LQ = wQ(53),
      qQ = wQ(1447),
      oQ = wQ(1927),
      DQ = wQ(36248),
      kQ = wQ(619),
      vQ = wQ(1070),
      mQ = wQ.n(vQ),
      uQ = wQ(1107);
    const HQ = [bQ()];

    function bQ() {
      return {
        source: null,
        direction: null,
        EX: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function YQ(QQ) {
      return HQ.find((FQ => null !== FQ.source && FQ.source === QQ))
    }

    function xQ(QQ) {
      clearTimeout(QQ.timeout), QQ.source = null, QQ.direction = null, QQ.writtenAngle = null, QQ.EX && (QQ.EX.style.rotate = "")
    }
    const AQ = (0, LQ.memo)((function() {
      const [, QQ] = (0, LQ.useReducer)((QQ => QQ + 1), 0);
      return (0, qQ.g)("damagedByOtherPlayer", (FQ => {
        let {
          tL: wQ,
          direction: LQ
        } = FQ;
        const qQ = wQ || "nonDirectional",
          oQ = function(QQ) {
            var FQ;
            const wQ = null !== (FQ = YQ(QQ)) && void 0 !== FQ ? FQ : HQ.find((QQ => null === QQ.source));
            if (wQ) return wQ;
            const LQ = {
              source: null,
              direction: null,
              EX: null,
              timeout: void 0,
              writtenAngle: null
            };
            return HQ.push(LQ), LQ
          }(qQ);
        clearTimeout(oQ.timeout), oQ.source = qQ, oQ.direction = LQ, oQ.timeout = setTimeout((() => {
          xQ(oQ), QQ()
        }), 800), QQ()
      })), (0, oQ.d)("kill", (FQ => {
        let {
          killer: wQ,
          victim: LQ
        } = FQ;
        const qQ = wQ.local && YQ(LQ.id);
        qQ && (xQ(qQ), QQ())
      })), (0, LQ.useEffect)((() => {
        const QQ = (0, DQ.g)("turnDamageIndicators", tQ);
        return () => {
          QQ(), HQ.forEach(xQ)
        }
      }), []), (0, uQ.jsx)("div", {
        className: "DirectionalDamage",
        children: HQ.map(((QQ, FQ) => (0, uQ.jsx)("div", {
          ref: FQ => {
            QQ.EX = FQ
          },
          className: mQ()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, kQ.F)(QQ.direction),
            DamageIndicatorIdle: null === QQ.source
          })
        }, FQ)))
      })
    }));

    function tQ(QQ) {
      for (const FQ of HQ) {
        if (null === FQ.source || (0, kQ.F)(FQ.direction)) continue;
        const wQ = FQ.direction - QQ;
        wQ !== FQ.writtenAngle && (FQ.writtenAngle = wQ, FQ.EX.style.rotate = `${wQ}rad`)
      }
    }
  },
  36128: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ,
      e: () => oQ
    });
    let LQ = !1;

    function qQ() {
      return LQ
    }

    function oQ(QQ) {
      return LQ !== QQ && (LQ = QQ, !0)
    }
  },
  9030: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ,
      d: () => qQ
    });
    var LQ = wQ(17);

    function qQ(QQ, FQ) {
      return QQ && !FQ
    }

    function oQ() {
      return qQ(LQ.c.get("isTouchScreen"), LQ.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  40095: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      startPadGameplay: () => cQ
    });
    wQ(39969);
    var LQ = wQ(39973),
      qQ = wQ(3621),
      oQ = wQ(17),
      DQ = wQ(38614),
      kQ = wQ(3561),
      vQ = wQ(38631),
      mQ = wQ(22),
      uQ = wQ(2676),
      HQ = wQ(37964),
      bQ = wQ(8614),
      YQ = wQ(39978);
    const xQ = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var AQ = wQ(39994),
      tQ = wQ(8596),
      eQ = wQ(38642);
    const MQ = QQ => QQ.padSneakToggled || !!oQ.c.get("clientEscMenuOptions").crouchIsToggle && QQ.crouchToggled,
      GQ = () => {
        const QQ = (() => {
          const QQ = (0, bQ.d)();
          let FQ = xQ;
          const wQ = new YQ.c;
          let LQ = !1,
            qQ = 0;
          const oQ = () => {
            const wQ = performance.now(),
              oQ = 0 === qQ ? 0 : wQ - qQ;
            if (qQ = wQ, !LQ) return QQ.discardPending(), null;
            const DQ = (0, YQ.m)(FQ, oQ),
              kQ = QQ.drainLookDelta(),
              vQ = (0, HQ.f)();
            return {
              PU: (DQ.PU + kQ.PU) * vQ,
              dU: (DQ.dU + kQ.dU) * vQ
            }
          };
          return {
            update: (QQ, qQ, DQ, kQ) => {
              QQ.camera.ZZ !== oQ && (QQ.camera.ZZ = oQ), LQ = !0, FQ = (0, YQ.o)(wQ, qQ, DQ, kQ, performance.now())
            },
            release: () => {
              LQ = !1, FQ = xQ, wQ.reset()
            },
            uninstall: QQ => {
              QQ.camera.ZZ === oQ && (QQ.camera.ZZ = null)
            }
          }
        })();
        return {
          update: (FQ, wQ, LQ) => {
            QQ.update((0, uQ.d)(), FQ, wQ, LQ)
          },
          release: QQ.release,
          uninstall: () => {
            const FQ = (0, uQ.d)();
            FQ && QQ.uninstall(FQ)
          }
        }
      };
    var pQ = wQ(39989);
    wQ(37242), wQ(8477);
    wQ(8497).b;
    const cQ = () => {
      const QQ = (0, pQ.e)((() => {
          const QQ = {
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
          return {
            bodies: () => (0, DQ.c)(),
            look: GQ(),
            move: (FQ, wQ) => {
              const LQ = (0, uQ.d)(),
                qQ = LQ.bC.HwQ();
              if (QQ.x = FQ.x, QQ.y = FQ.y, QQ.magnitude = FQ.magnitude, QQ.headingOffset = FQ.headingOffset, QQ.jumpHeld = FQ.jumpHeld, FQ.jumpPressed && (QQ.jumpPressedSinceTick = !0), QQ.running = FQ.running, QQ.sprintHeld = FQ.sprintHeld, wQ) {
                const FQ = (0, AQ.g)({
                  ...wQ,
                  descending: LQ.bC.tFQ(LQ.WK).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!LQ.mC.canCrouch,
                  toggled: MQ(qQ)
                });
                QQ.crouchHeld = FQ.crouchHeld, qQ.padSneakToggled = FQ.toggled, qQ.crouchToggled = !1, (0, tQ.i)(FQ.toggled)
              }
              qQ.gamepad = QQ
            },
            stopMoving: () => {
              var FQ;
              Object.assign(QQ, {
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
              const wQ = null === (FQ = (0, uQ.d)()) || void 0 === FQ ? void 0 : FQ.bC.HwQ();
              (null === wQ || void 0 === wQ ? void 0 : wQ.gamepad) === QQ && (wQ.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: QQ => {
              const FQ = (0, uQ.d)(),
                wQ = null === FQ || void 0 === FQ ? void 0 : FQ.bC.HwQ();
              "touch" === QQ ? ((0, tQ.i)(!1), null !== wQ && void 0 !== wQ && wQ.padSneakToggled && (wQ.padSneakToggled = !1, wQ.isTouchscreen && !wQ.gamepad && FQ.bC.zFQ(FQ.WK).setCrouching(!!FQ.mC.canCrouch && wQ.touchCrouch))) : "gamepad" === QQ && wQ && (0, tQ.i)(MQ(wQ))
            },
            hasPlayer: () => {
              var QQ;
              return !(null === (QQ = (0, uQ.d)()) || void 0 === QQ || !QQ.WK)
            },
            isPlayerDead: () => {
              var QQ;
              const FQ = (0, uQ.d)();
              return !1 === (null === (QQ = FQ.bC.LwQ(FQ.WK)) || void 0 === QQ ? void 0 : QQ.isAlive)
            },
            isReplayMode: () => {
              var QQ, FQ;
              return !(null === (QQ = (0, uQ.c)()) || void 0 === QQ || null === (FQ = QQ.client) || void 0 === FQ || !FQ.isReplayMode())
            },
            isFreeCameraOn: () => {
              var QQ, FQ, wQ;
              return !(null === (QQ = (0, uQ.c)()) || void 0 === QQ || null === (FQ = QQ.client) || void 0 === FQ || null === (wQ = FQ.freeCameraController) || void 0 === wQ || !wQ.isEnabled())
            },
            targetsBlock: () => !!(0, uQ.d)().XQQ,
            selectedSlotEmpty: () => {
              var QQ;
              const FQ = (0, uQ.d)();
              return !(null !== (QQ = FQ.bC.jFQ(FQ.WK)) && void 0 !== QQ && QQ.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const QQ = (0, uQ.d)().mC;
              return !!QQ.creative && !!QQ.canPickBlocks
            },
            scrollHotbar: QQ => {
              mQ.l.GA("ScrollInventorySlot", QQ)
            },
            hasFullInventory: () => (0, vQ.c)((0, uQ.d)()),
            hasLobbyTab: () => (0, eQ.b)((0, uQ.d)().mC),
            contextActionInputs: () => {
              var QQ, FQ, wQ, LQ;
              const qQ = (0, uQ.d)();
              return {
                holdingGun: !(null === (QQ = qQ.bC.qwQ(qQ.WK)) || void 0 === QQ || null === (FQ = QQ.nC) || void 0 === FQ || !FQ.isGun()),
                customButtons: null !== (wQ = qQ.mC.customButtons) && void 0 !== wQ ? wQ : null,
                touchscreenActionButton: null !== (LQ = qQ.mC.touchscreenActionButton) && void 0 !== LQ ? LQ : null
              }
            },
            pressTouchButton: QQ => {
              (0, kQ.sendColyMessage)(qQ.mj, QQ)
            }
          }
        })()),
        FQ = (0, LQ.d)(),
        wQ = null,
        oQ = null;
      return () => {
        QQ(), FQ(), null === wQ || void 0 === wQ || wQ(), null === oQ || void 0 === oQ || oQ()
      }
    }
  },
  36238: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ,
      g: () => AQ,
      i: () => tQ,
      m: () => kQ,
      n: () => bQ,
      o: () => eQ,
      q: () => HQ,
      u: () => GQ,
      v: () => xQ,
      w: () => MQ
    });
    var LQ = wQ(17),
      qQ = wQ(22);
    const oQ = "clientGameInventoryButtonsChanged",
      DQ = new Map;

    function kQ() {
      return [...DQ.values()].sort(((QQ, FQ) => {
        var wQ, LQ;
        return (null !== (wQ = QQ.order) && void 0 !== wQ ? wQ : 0) - (null !== (LQ = FQ.order) && void 0 !== LQ ? LQ : 0)
      }))
    }
    let vQ = null;

    function mQ(QQ) {
      vQ = QQ
    }
    let uQ = !1;

    function HQ(QQ) {
      uQ = !0;
      try {
        QQ.onClick()
      } finally {
        uQ = !1
      }
      QQ.panel && "clientGame" === LQ.c.get("openInGameMenuName") && mQ(QQ.id)
    }

    function bQ() {
      return uQ
    }

    function YQ() {
      return kQ().filter((QQ => QQ.panel && !QQ.disabled))
    }

    function xQ(QQ) {
      const FQ = YQ(),
        wQ = FQ.findIndex((QQ => QQ.id === vQ));
      return !(wQ < 0 || FQ.length < 2) && (HQ(FQ[(wQ + QQ + FQ.length) % FQ.length]), !0)
    }

    function AQ() {
      return null !== vQ && YQ().length > 1
    }

    function tQ() {
      mQ(null)
    }

    function eQ() {
      "inventory" !== LQ.c.get("openInGameMenuName") && mQ(null)
    }

    function MQ() {
      const QQ = vQ;
      return mQ(null), QQ
    }

    function GQ(QQ) {
      return DQ.set(QQ.id, QQ), qQ.l.GA(oQ, kQ(), !0), () => {
        DQ.get(QQ.id) === QQ && (DQ.delete(QQ.id), qQ.l.GA(oQ, kQ()))
      }
    }
  },
  36235: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => kQ,
      f: () => tQ,
      i: () => eQ,
      j: () => bQ,
      k: () => mQ,
      o: () => AQ,
      q: () => YQ,
      u: () => uQ
    });
    var LQ = wQ(17),
      qQ = wQ(22),
      oQ = wQ(1302),
      DQ = wQ(36238);
    const kQ = "clientGameUiChanged";
    let vQ = null;

    function mQ() {
      return vQ
    }

    function uQ(QQ, FQ) {
      const wQ = {
        content: QQ,
        menu: FQ
      };
      return vQ = wQ, qQ.l.GA(kQ, vQ, !0), () => {
        vQ === wQ && (vQ = null, xQ = !1, tQ(), qQ.l.GA(kQ, null))
      }
    }
    let HQ = null;

    function bQ() {
      return HQ
    }

    function YQ(QQ) {
      return HQ = QQ, () => {
        HQ === QQ && (HQ = null)
      }
    }
    let xQ = !1;

    function AQ() {
      const QQ = LQ.c.get("openInGameMenuName");
      "clientGame" !== QQ && (xQ = "inventory" === QQ), (0, DQ.n)() || (0, DQ.i)(), (0, oQ.n)(oQ.d), LQ.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function tQ() {
      MQ(!1)
    }

    function eQ() {
      MQ(xQ)
    }

    function MQ(QQ) {
      "clientGame" === LQ.c.get("openInGameMenuName") && LQ.c.set({
        openInGameMenuName: QQ ? "inventory" : null
      }), QQ || (0, DQ.i)(), xQ = !1
    }
  },
  36122: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => vQ
    });
    var LQ = wQ(307),
      qQ = wQ(17),
      oQ = wQ(36128),
      DQ = wQ(1641),
      kQ = wQ(1940);

    function vQ(QQ, FQ) {
      var wQ, vQ, mQ;
      if (!qQ.c.get("isKeydownEnabled") || QQ.repeat) return;
      const uQ = QQ.code;
      "Escape" === QQ.key ? (0, DQ.h)(QQ) : null !== (wQ = kQ.u.OpenSettings) && void 0 !== wQ && wQ.includes(uQ) ? (0, DQ.s)(QQ, LQ.n.SETTINGS) : null !== (vQ = kQ.u.OpenCharacterCustomization) && void 0 !== vQ && vQ.includes(uQ) ? (0, oQ.b)() || (0, DQ.s)(QQ, LQ.n.CUSTOMISATION, FQ()) : null !== (mQ = kQ.u.ShowDebugOverlay) && void 0 !== mQ && mQ.includes(uQ) && qQ.c.set({
        showDebugOverlay: !qQ.c.get("showDebugOverlay")
      })
    }
  },
  36110: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => bQ,
      g: () => uQ,
      h: () => YQ,
      j: () => HQ
    });
    var LQ = wQ(317),
      qQ = wQ(647),
      oQ = wQ(651),
      DQ = wQ(27);
    const kQ = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      vQ = "playSessionGameNameWithVariation",
      mQ = "wasMatchmakePlayer";

    function uQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DQ.m;
      (0, oQ.f)(QQ, kQ)
    }

    function HQ() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DQ.m).setItem(mQ, !0)
    }

    function bQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DQ.m;
      return (0, oQ.b)(QQ, kQ)
    }

    function YQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DQ.m;
      const wQ = (0, oQ.b)(FQ, kQ),
        uQ = function(QQ) {
          const FQ = QQ.getItem(vQ);
          return "string" !== typeof FQ ? null : FQ
        }(FQ),
        HQ = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DQ.m).getItem(mQ)
        }(FQ);
      let bQ;
      return bQ = null !== wQ && null !== uQ && (0, oQ.d)(FQ, kQ) && function(QQ, FQ, wQ) {
          const qQ = (0, LQ.Wb)(QQ),
            oQ = (0, LQ.Wb)(FQ),
            DQ = (0, LQ.Pb)(QQ),
            kQ = (0, LQ.Pb)(FQ);
          return !(qQ !== oQ || !wQ) || qQ === oQ && DQ === kQ
        }(uQ, QQ, HQ) ? wQ : (0, qQ.d)(), (0, oQ.g)(FQ, kQ, bQ), FQ.setItem(vQ, QQ),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DQ.m).removeItem(mQ)
        }(FQ), bQ
    }
  },
  36102: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => MQ,
      f: () => GQ
    });
    var LQ = wQ(1038),
      qQ = wQ(626),
      oQ = wQ(317),
      DQ = wQ(1044),
      kQ = wQ(634),
      vQ = wQ(656),
      mQ = wQ(4367),
      uQ = wQ(96),
      HQ = wQ(134),
      bQ = wQ(1725),
      YQ = wQ(114),
      xQ = wQ(36110),
      AQ = wQ(27),
      tQ = wQ(649),
      eQ = wQ(36117);

    function MQ() {
      var QQ, FQ;
      return [...null !== (QQ = navigator.languages) && void 0 !== QQ ? QQ : [null !== (FQ = navigator.language) && void 0 !== FQ ? FQ : "none"], "EN-gb"]
    }

    function GQ(QQ, FQ, wQ, GQ, pQ) {
      const cQ = (0, LQ.f)(FQ) ? (0, LQ.l)(FQ) : null,
        CQ = {
          cookies: (0, bQ.getAllCookiesForGameNameWithVariation)(FQ),
          isMobile: (0, uQ.isMobile)(),
          isUsingCustomGameTexturePack: null !== cQ && pQ(cQ),
          generalCookies: {
            joinDiscord: !!AQ.i.getItem("DiscordPressed"),
            newGo: mQ.e,
            ...QQ.getMetricsCookies(),
            trafficCode: GQ,
            compliance: uQ.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, uQ.getBrowserName)(),
            version: (0, uQ.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, uQ.getPlatformType)(),
            deviceType: (0, YQ.e)()
          },
          isLoggedIn: QQ.isLoggedIn(),
          lobbyName: wQ,
          languages: MQ(),
          version: qQ.b,
          siteUsed: HQ.r,
          subsiteUsed: HQ.w,
          playSessionId: (0, xQ.h)(FQ),
          visitSessionId: (0, tQ.c)(),
          clientReason: kQ.j.reason,
          budgetBasis: (0, eQ.f)(),
          ...null !== vQ.n && {
            diagClaim: vQ.n.claimId
          }
        };
      return null !== cQ && (0, oQ.Hc)(cQ) ? (CQ.lobbyName = (0, LQ.d)(cQ, (0, LQ.i)(FQ), wQ), {
        roomName: `classic_${DQ.h}`,
        joinOptions: CQ
      }) : {
        roomName: FQ,
        joinOptions: CQ
      }
    }
  },
  35938: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ,
      h: () => qQ,
      i: () => oQ,
      l: () => DQ
    });
    const LQ = 1024,
      qQ = 1024 * LQ;

    function oQ(QQ) {
      return 2 ** Math.floor(Math.log2(Math.max(1, QQ / qQ)))
    }

    function DQ(QQ) {
      return (QQ / qQ).toFixed(1)
    }
  },
  36119: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ,
      e: () => kQ,
      f: () => DQ,
      h: () => vQ,
      l: () => mQ,
      o: () => uQ
    });
    var LQ = wQ(201);
    const qQ = 32 * wQ(35938).h,
      oQ = 6144,
      DQ = 4608,
      kQ = 512;

    function vQ(QQ) {
      return Math.floor(qQ * QQ / oQ)
    }

    function mQ(QQ) {
      const FQ = QQ - Math.floor(QQ / 6);
      let wQ = LQ.e.maxChunkHorizAddDistance,
        qQ = LQ.e.maxChunkVertAddDistance;
      if (uQ(wQ + 1, qQ + 1) <= FQ) return null;
      for (; uQ(wQ + 1, qQ + 1) > FQ && (wQ > 0 || qQ > 0);) wQ > qQ ? wQ-- : qQ--;
      return {
        horizontal: wQ,
        vertical: qQ
      }
    }

    function uQ(QQ, FQ) {
      const wQ = Math.max(QQ, FQ);
      let LQ = 0;
      for (let qQ = -wQ; qQ <= wQ; qQ++)
        for (let oQ = -wQ; oQ <= wQ; oQ++)
          for (let DQ = -wQ; DQ <= wQ; DQ++) HQ(QQ, FQ, qQ, oQ, DQ) && LQ++;
      return LQ
    }

    function HQ(QQ, FQ, wQ, LQ, qQ) {
      const oQ = wQ * wQ + qQ * qQ;
      return QQ === FQ ? oQ + LQ * LQ <= QQ * QQ : QQ > FQ ? Math.abs(LQ) <= FQ && oQ + LQ * LQ <= QQ * QQ : oQ <= QQ * QQ && oQ + LQ * LQ <= FQ * FQ
    }
  },
  36117: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => CQ,
      f: () => cQ,
      g: () => pQ
    });
    var LQ = wQ(201),
      qQ = wQ(96),
      oQ = wQ(2836),
      DQ = wQ(4253),
      kQ = wQ(641),
      vQ = wQ(36119);
    const mQ = 1048576,
      uQ = 1024 * mQ,
      HQ = 400 * mQ,
      bQ = 147456,
      YQ = .5,
      xQ = 1.5 * uQ,
      AQ = 768 * mQ;

    function tQ(QQ) {
      return HQ + QQ * bQ
    }

    function eQ(QQ, FQ, wQ) {
      var qQ, DQ;
      let {
        footprintBytes: kQ,
        basis: mQ,
        namesLimit: eQ
      } = function(QQ) {
        const {
          os: FQ,
          deviceMemory: wQ
        } = QQ;
        if ("ios" === FQ) switch ((0, oQ.e)(QQ)) {
          case "ipad_m":
            return {
              footprintBytes: tQ(vQ.d), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: AQ, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: xQ, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: AQ, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof wQ && Number.isFinite(wQ) && wQ > 0 ? {
          footprintBytes: wQ * uQ * YQ,
          basis: `memory-${wQ}`,
          namesLimit: !0
        } : "android" === FQ ? {
          footprintBytes: AQ,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: tQ(vQ.f),
          basis: "unreported",
          namesLimit: !1
        }
      }(QQ);
      if (wQ) {
        const QQ = Math.min(kQ, tQ(vQ.d));
        kQ = HQ + Math.max(0, QQ - HQ) / 2, mQ += "+killed", eQ = !0
      }
      null !== FQ && tQ(FQ) < kQ && (kQ = tQ(FQ), mQ += "+learned", eQ = !0);
      const MQ = function(QQ) {
          const FQ = Math.floor((QQ - HQ) / bQ);
          return Math.min(vQ.d, Math.max(vQ.e, FQ))
        }(kQ),
        GQ = (0, vQ.l)(MQ);
      return {
        footprintBytes: kQ,
        shedFootprintBytes: eQ ? Math.max(kQ, tQ(MQ)) : null,
        chunkCap: MQ,
        maxHorizDistance: null !== (qQ = null === GQ || void 0 === GQ ? void 0 : GQ.horizontal) && void 0 !== qQ ? qQ : LQ.e.maxChunkHorizAddDistance,
        maxVertDistance: null !== (DQ = null === GQ || void 0 === GQ ? void 0 : GQ.vertical) && void 0 !== DQ ? DQ : LQ.e.maxChunkVertAddDistance,
        basis: mQ
      }
    }
    let MQ = null;

    function GQ() {
      return eQ({
        os: (0, qQ.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, oQ.h)()
      }, (0, DQ.d)(), (0, kQ.B)("wasm").length > 0)
    }

    function pQ() {
      return MQ ??= GQ(), MQ
    }

    function cQ() {
      var QQ;
      return (null !== (QQ = MQ) && void 0 !== QQ ? QQ : GQ()).basis
    }

    function CQ(QQ, FQ) {
      return QQ.setChunkCap(FQ.chunkCap)
    }
  },
  36483: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      h: () => oQ,
      k: () => bQ,
      l: () => kQ,
      n: () => vQ,
      o: () => mQ,
      p: () => HQ,
      t: () => uQ,
      w: () => DQ
    });
    var LQ = wQ(1254);
    let qQ = function(QQ) {
        return QQ[QQ.Join = 0] = "Join", QQ[QQ.Leave = 1] = "Leave", QQ[QQ.Push = 2] = "Push", QQ[QQ.Cursor = 3] = "Cursor", QQ[QQ.Submit = 4] = "Submit", QQ[QQ.ReloadAsVariation = 5] = "ReloadAsVariation", QQ[QQ.CreateFile = 6] = "CreateFile", QQ[QQ.RenameFile = 7] = "RenameFile", QQ[QQ.DeleteFile = 8] = "DeleteFile", QQ[QQ.SetEngine = 9] = "SetEngine", QQ[QQ.RenameFolder = 10] = "RenameFolder", QQ
      }({}),
      oQ = function(QQ) {
        return QQ[QQ.Joined = 0] = "Joined", QQ[QQ.Updates = 1] = "Updates", QQ[QQ.Presence = 2] = "Presence", QQ[QQ.RemoteCursor = 3] = "RemoteCursor", QQ[QQ.ForceClose = 4] = "ForceClose", QQ[QQ.LobbyFilesChanged = 5] = "LobbyFilesChanged", QQ[QQ.EngineSettings = 6] = "EngineSettings", QQ
      }({});

    function DQ(QQ) {
      return "lobby" === QQ.kind ? `lobby:${QQ.path}` : `codeBlock:${QQ.pos[0]},${QQ.pos[1]},${QQ.pos[2]}`
    }

    function kQ(QQ) {
      if ("lobby" === QQ) return {
        kind: "lobby",
        path: LQ.i
      };
      if (QQ.startsWith("lobby:")) {
        const FQ = QQ.slice(6);
        return HQ(FQ) ? {
          kind: "lobby",
          path: FQ
        } : null
      }
      const FQ = QQ.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return FQ ? {
        kind: "codeBlock",
        pos: [parseInt(FQ[1]), parseInt(FQ[2]), parseInt(FQ[3])]
      } : null
    }

    function vQ(QQ) {
      return QQ.endsWith(".d.ts")
    }

    function mQ(QQ) {
      return QQ.endsWith(".ts") && !vQ(QQ)
    }
    const uQ = 64;

    function HQ(QQ) {
      if (!QQ || QQ !== QQ.trim()) return !1;
      if (QQ.length > uQ) return !1;
      if (QQ.startsWith("/") || QQ.includes("\\") || QQ.includes("\0")) return !1;
      if (!vQ(QQ) && !mQ(QQ) && ! function(QQ) {
          return QQ.endsWith(".js") && !QQ.endsWith(".min.js") && !QQ.endsWith(".bundle.js")
        }(QQ)) return !1;
      const FQ = QQ.split("/");
      for (const wQ of FQ)
        if ("" === wQ || "." === wQ || ".." === wQ) return !1;
      return !0
    }
    const bQ = 14e3
  },
  38582: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ, wQ, LQ, qQ) {
      var oQ = {};
      return Object.keys(LQ).forEach((function(QQ) {
        oQ[QQ] = LQ[QQ]
      })), oQ.enumerable = !!oQ.enumerable, oQ.configurable = !!oQ.configurable, ("value" in oQ || oQ.initializer) && (oQ.writable = !0), oQ = wQ.slice().reverse().reduce((function(wQ, LQ) {
        return LQ(QQ, FQ, wQ) || wQ
      }), oQ), qQ && void 0 !== oQ.initializer && (oQ.value = oQ.initializer ? oQ.initializer.call(qQ) : void 0, oQ.initializer = void 0), void 0 === oQ.initializer && (Object.defineProperty(QQ, FQ, oQ), oQ = null), oQ
    }
    wQ.d(FQ, {
      c: () => LQ
    })
  },
  38579: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ, wQ, LQ) {
      wQ && Object.defineProperty(QQ, FQ, {
        enumerable: wQ.enumerable,
        configurable: wQ.configurable,
        writable: wQ.writable,
        value: wQ.initializer ? wQ.initializer.call(LQ) : void 0
      })
    }
    wQ.d(FQ, {
      e: () => LQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
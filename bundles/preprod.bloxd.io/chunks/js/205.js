export const id = 205;
export const ids = [205];
export const modules = {
  39376: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => sQ,
      f: () => TQ
    });
    var wQ = XQ(4357);
    let qQ = null;

    function TQ(QQ) {
      return null !== qQ && QQ === qQ
    }

    function zQ() {
      this.EY = !1, this.stopPropagation = !1, this.kY = !1, this.disabled = !1
    }
    class sQ {
      constructor(QQ, WQ) {
        this.version = "0.7.0";
        var XQ = Object.assign({}, new zQ, WQ || {});
        this.element = QQ || document, this.EY = !!XQ.EY, this.stopPropagation = !!XQ.stopPropagation, this.kY = !!XQ.kY, this.disabled = !!XQ.disabled, this.filterEvents = (QQ, WQ) => !0, this.ignoreEvent = QQ => !1, this.down = new wQ.EventEmitter, this.up = new wQ.EventEmitter, this.state = {}, this.fY = {
          dx: 0,
          dy: 0,
          VWQ: 0,
          DWQ: 0,
          pWQ: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? PQ(this) : document.addEventListener("DOMContentLoaded", (QQ => {
          PQ(this)
        }), {
          once: !0
        })
      }
      bind(QQ) {
        for (var WQ = arguments.length, XQ = new Array(WQ > 1 ? WQ - 1 : 0), wQ = 1; wQ < WQ; wQ++) XQ[wQ - 1] = arguments[wQ];
        XQ.forEach((WQ => {
          var XQ = this._keyBindmap[WQ] || [];
          XQ.includes(QQ) || (XQ.push(QQ), this._keyBindmap[WQ] = XQ)
        })), this.state[QQ] = !!this.state[QQ], this.pressCount[QQ] = this.pressCount[QQ] || 0, this.releaseCount[QQ] = this.releaseCount[QQ] || 0
      }
      unbind(QQ) {
        for (var WQ in this._keyBindmap) {
          var XQ = this._keyBindmap[WQ],
            wQ = XQ.indexOf(QQ);
          wQ > -1 && XQ.splice(wQ, 1)
        }
      }
      getBindings() {
        var QQ = {};
        for (var WQ in this._keyBindmap) {
          this._keyBindmap[WQ].forEach((XQ => {
            QQ[XQ] = QQ[XQ] || [], QQ[XQ].push(WQ)
          }))
        }
        return QQ
      }
      fJ() {
        FQ(this.fY), FQ(this.pressCount), FQ(this.releaseCount)
      }
    }

    function FQ(QQ) {
      for (var WQ in QQ) QQ[WQ] = 0
    }

    function PQ(QQ) {
      window.addEventListener("keydown", yQ.bind(null, QQ, !0), !1), window.addEventListener("keyup", yQ.bind(null, QQ, !1), !1);
      var WQ = {
        passive: !0
      };
      QQ.element.addEventListener("touchstart", IQ.bind(void 0, QQ), {
        passive: !1
      }), QQ.element.addEventListener("touchend", BQ.bind(void 0, QQ), WQ), QQ.element.addEventListener("mousedown", VQ.bind(null, QQ, !0), WQ), window.document.addEventListener("mouseup", VQ.bind(null, QQ, !1), WQ), QQ.element.addEventListener("touchmove", DQ.bind(null, QQ), WQ), QQ.element.addEventListener("mousemove", DQ.bind(null, QQ), WQ), window.PointerEvent, QQ.element.addEventListener("wheel", pQ.bind(null, QQ), WQ), QQ.element.addEventListener("contextmenu", GQ.bind(null, QQ), !1), window.addEventListener("blur", vQ.bind(null, QQ), !1)
    }
    var gQ = 0,
      JQ = 0,
      rQ = null;

    function IQ(QQ, WQ) {
      WQ.preventDefault(), jQ(WQ)
    }

    function jQ(QQ) {
      let WQ = !1;
      for (let XQ = 0; XQ < QQ.touches.length; ++XQ)
        if (QQ.touches[XQ].identifier === rQ) {
          WQ = !0;
          break
        } if (!WQ) {
        const WQ = QQ.changedTouches[0];
        gQ = WQ.clientX, JQ = WQ.clientY, rQ = WQ.identifier
      }
    }

    function BQ(QQ, WQ) {
      for (var XQ = WQ.changedTouches, wQ = 0; wQ < XQ.length; ++wQ) XQ[wQ].identifier === rQ && (rQ = null)
    }

    function yQ(QQ, WQ, XQ) {
      if (!QQ.ignoreEvent(XQ)) try {
        dQ(QQ, XQ), WQ && XQ.isTrusted && !XQ.repeat && QQ._keyStates[XQ.code] && HQ(QQ, XQ.code)
      } finally {
        aQ(XQ.code, WQ, QQ, XQ)
      }
    }

    function VQ(QQ, WQ, XQ) {
      if (!QQ.ignoreEvent(XQ)) try {
        dQ(QQ, XQ)
      } finally {
        ! function(QQ, WQ, XQ) {
          if ("pointerId" in XQ)
            if (WQ) {
              if (null !== QQ._touches.currID) return;
              QQ._touches.currID = XQ.pointerId
            } else {
              if (QQ._touches.currID !== XQ.pointerId) return;
              QQ._touches.currID = null
            } var wQ = "button" in XQ ? XQ.button + 1 : 1;
          aQ("Mouse" + wQ, WQ, QQ, XQ)
        }(QQ, WQ, XQ)
      }
    }

    function DQ(QQ, WQ) {
      var XQ = WQ.movementX || WQ.mozMovementX || 0,
        wQ = WQ.movementY || WQ.mozMovementY || 0;
      if (WQ.touches && 0 === (XQ | wQ)) {
        var qQ = function(QQ) {
          jQ(QQ);
          for (let WQ = 0; WQ < QQ.changedTouches.length; ++WQ)
            if (QQ.changedTouches[WQ].identifier == rQ) {
              const XQ = QQ.changedTouches[WQ],
                wQ = [XQ.clientX - gQ, XQ.clientY - JQ];
              return gQ = XQ.clientX, JQ = XQ.clientY, wQ
            } return console.error(`Did not find touch id ${rQ}`), [0, 0]
        }(WQ);
        XQ = qQ[0], wQ = qQ[1]
      }
      QQ.fY.dx += XQ, QQ.fY.dy += wQ
    }

    function pQ(QQ, WQ) {
      dQ(QQ, WQ);
      var XQ = 1;
      switch (WQ.deltaMode) {
        case 0:
          XQ = 1;
          break;
        case 1:
          XQ = 12;
          break;
        case 2:
          XQ = QQ.element.clientHeight || window.innerHeight
      }
      QQ.fY.VWQ += (WQ.deltaX || 0) * XQ, QQ.fY.DWQ += (WQ.deltaY || 0) * XQ, QQ.fY.pWQ += (WQ.deltaZ || 0) * XQ
    }

    function GQ(QQ, WQ) {
      if (!QQ.kY) return WQ.preventDefault(), !1
    }
    var UQ = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function bQ(QQ, WQ) {
      return !!QQ[UQ[WQ]] || ("AltRight" === WQ || "ControlLeft" === WQ) && "function" === typeof QQ.getModifierState && !0 === QQ.getModifierState("AltGraph")
    }

    function vQ(QQ, WQ) {
      for (var XQ in QQ._modifiersHeldThroughBlur = {}, UQ) QQ._keyStates[XQ] && (QQ._modifiersHeldThroughBlur[XQ] = !0);
      WQ && WQ.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (QQ) {
          return !0
        }
      }() && (clearTimeout(QQ._blurRelease), QQ._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var WQ in QQ._modifiersHeldThroughBlur = {}, QQ._keyStates) QQ._keyStates[WQ] && !/^Mouse\d/.test(WQ) && HQ(QQ, WQ)
      }), 0))
    }

    function dQ(QQ, WQ) {
      var XQ = QQ._modifiersHeldThroughBlur;
      if (XQ && WQ.isTrusted && document.hasFocus())
        for (var wQ in XQ) delete XQ[wQ], QQ._keyStates[wQ] && wQ !== WQ.code && (bQ(WQ, wQ) || HQ(QQ, wQ))
    }

    function HQ(QQ, WQ) {
      const XQ = {
          code: WQ,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        wQ = qQ;
      qQ = XQ;
      try {
        aQ(WQ, !1, QQ, XQ)
      } finally {
        qQ = wQ
      }
    }

    function aQ(QQ, WQ, XQ, wQ) {
      var qQ = XQ._keyBindmap[QQ];
      qQ && (lQ(XQ._keyStates[QQ], WQ) && (XQ._keyStates[QQ] = WQ, qQ.forEach((QQ => {
        (!XQ.filterEvents || XQ.filterEvents(wQ, QQ)) && function(QQ, WQ, XQ, wQ) {
          var qQ = WQ ? XQ.pressCount : XQ.releaseCount;
          qQ[QQ] = (qQ[QQ] || 0) + 1;
          var TQ = XQ._bindPressCount[QQ] || 0;
          (TQ += WQ ? 1 : -1) < 0 && (TQ = 0);
          XQ._bindPressCount[QQ] = TQ;
          var zQ = XQ.state[QQ];
          if (lQ(zQ, TQ)) {
            XQ.state[QQ] = TQ > 0;
            var sQ = WQ ? XQ.down : XQ.up;
            XQ.disabled || sQ.emit(QQ, wQ)
          }
        }(QQ, WQ, XQ, wQ)
      }))), "button" in wQ || (XQ.EY && !wQ.defaultPrevented && wQ.preventDefault(), XQ.stopPropagation && wQ.stopPropagation()))
    }

    function lQ(QQ, WQ) {
      return QQ ? !WQ : WQ
    }
  },
  36980: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => BQ,
      h: () => yQ
    });
    var wQ = XQ(61),
      qQ = XQ(1498),
      TQ = XQ(2052),
      zQ = XQ(36926),
      sQ = XQ(663),
      FQ = XQ(1081),
      PQ = XQ.n(FQ),
      gQ = XQ(1145);
    const JQ = [rQ()];

    function rQ() {
      return {
        source: null,
        direction: null,
        uL: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function IQ(QQ) {
      return JQ.find((WQ => null !== WQ.source && WQ.source === QQ))
    }

    function jQ(QQ) {
      clearTimeout(QQ.timeout), QQ.source = null, QQ.direction = null, QQ.writtenAngle = null, QQ.uL && (QQ.uL.style.rotate = "")
    }
    const BQ = (0, wQ.memo)((function() {
      const [, QQ] = (0, wQ.useReducer)((QQ => QQ + 1), 0);
      return (0, qQ.f)("damagedByOtherPlayer", (WQ => {
        let {
          jX: XQ,
          direction: wQ
        } = WQ;
        const qQ = XQ || "nonDirectional",
          TQ = function(QQ) {
            var WQ;
            const XQ = null !== (WQ = IQ(QQ)) && void 0 !== WQ ? WQ : JQ.find((QQ => null === QQ.source));
            if (XQ) return XQ;
            const wQ = {
              source: null,
              direction: null,
              uL: null,
              timeout: void 0,
              writtenAngle: null
            };
            return JQ.push(wQ), wQ
          }(qQ);
        clearTimeout(TQ.timeout), TQ.source = qQ, TQ.direction = wQ, TQ.timeout = setTimeout((() => {
          jQ(TQ), QQ()
        }), 800), QQ()
      })), (0, TQ.b)("kill", (WQ => {
        let {
          killer: XQ,
          victim: wQ
        } = WQ;
        const qQ = XQ.local && IQ(wQ.id);
        qQ && (jQ(qQ), QQ())
      })), (0, wQ.useEffect)((() => {
        const QQ = (0, zQ.f)("turnDamageIndicators", yQ);
        return () => {
          QQ(), JQ.forEach(jQ)
        }
      }), []), (0, gQ.jsx)("div", {
        className: "DirectionalDamage",
        children: JQ.map(((QQ, WQ) => (0, gQ.jsx)("div", {
          ref: WQ => {
            QQ.uL = WQ
          },
          className: PQ()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, sQ.G)(QQ.direction),
            DamageIndicatorIdle: null === QQ.source
          })
        }, WQ)))
      })
    }));

    function yQ(QQ) {
      for (const WQ of JQ) {
        if (null === WQ.source || (0, sQ.G)(WQ.direction)) continue;
        const XQ = WQ.direction - QQ;
        XQ !== WQ.writtenAngle && (WQ.writtenAngle = XQ, WQ.uL.style.rotate = `${XQ}rad`)
      }
    }
  },
  36809: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ,
      f: () => TQ
    });
    let wQ = !1;

    function qQ() {
      return wQ
    }

    function TQ(QQ) {
      return wQ !== QQ && (wQ = QQ, !0)
    }
  },
  34469: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ,
      d: () => qQ
    });
    var wQ = XQ(26);

    function qQ(QQ, WQ) {
      return QQ && !WQ
    }

    function TQ() {
      return qQ(wQ.b.get("isTouchScreen"), wQ.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  40891: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      startPadGameplay: () => UQ
    });
    XQ(40787);
    var wQ = XQ(40790),
      qQ = XQ(3984),
      TQ = XQ(26),
      zQ = XQ(39346),
      sQ = XQ(3907),
      FQ = XQ(39370),
      PQ = XQ(31),
      gQ = XQ(2997),
      JQ = XQ(38713),
      rQ = XQ(9220),
      IQ = XQ(40796);
    const jQ = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var BQ = XQ(40807),
      yQ = XQ(9189),
      VQ = XQ(39373);
    const DQ = QQ => QQ.padSneakToggled || !!TQ.b.get("clientEscMenuOptions").crouchIsToggle && QQ.crouchToggled,
      pQ = () => {
        const QQ = (() => {
          const QQ = (0, rQ.d)();
          let WQ = jQ;
          const XQ = new IQ.d;
          let wQ = !1,
            qQ = 0;
          const TQ = () => {
            const XQ = performance.now(),
              TQ = 0 === qQ ? 0 : XQ - qQ;
            if (qQ = XQ, !wQ) return QQ.discardPending(), null;
            const zQ = (0, IQ.o)(WQ, TQ),
              sQ = QQ.drainLookDelta(),
              FQ = (0, JQ.j)();
            return {
              jR: (zQ.jR + sQ.jR) * FQ,
              yR: (zQ.yR + sQ.yR) * FQ
            }
          };
          return {
            update: (QQ, qQ, zQ, sQ) => {
              QQ.camera.LO !== TQ && (QQ.camera.LO = TQ), wQ = !0, WQ = (0, IQ.p)(XQ, qQ, zQ, sQ, performance.now())
            },
            release: () => {
              wQ = !1, WQ = jQ, XQ.reset()
            },
            uninstall: QQ => {
              QQ.camera.LO === TQ && (QQ.camera.LO = null)
            }
          }
        })();
        return {
          update: (WQ, XQ, wQ) => {
            QQ.update((0, gQ.f)(), WQ, XQ, wQ)
          },
          release: QQ.release,
          uninstall: () => {
            const WQ = (0, gQ.f)();
            WQ && QQ.uninstall(WQ)
          }
        }
      };
    var GQ = XQ(40802);
    XQ(37953), XQ(9106);
    XQ(9128).c;
    const UQ = () => {
      const QQ = (0, GQ.d)((() => {
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
            bodies: () => (0, zQ.e)(),
            look: pQ(),
            move: (WQ, XQ) => {
              const wQ = (0, gQ.f)(),
                qQ = wQ.rD.PXQ();
              if (QQ.x = WQ.x, QQ.y = WQ.y, QQ.magnitude = WQ.magnitude, QQ.headingOffset = WQ.headingOffset, QQ.jumpHeld = WQ.jumpHeld, WQ.jumpPressed && (QQ.jumpPressedSinceTick = !0), QQ.running = WQ.running, QQ.sprintHeld = WQ.sprintHeld, XQ) {
                const WQ = (0, BQ.g)({
                  ...XQ,
                  descending: wQ.rD.rWQ(wQ.RC).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!wQ.zD.canCrouch,
                  toggled: DQ(qQ)
                });
                QQ.crouchHeld = WQ.crouchHeld, qQ.padSneakToggled = WQ.toggled, qQ.crouchToggled = !1, (0, yQ.g)(WQ.toggled)
              }
              qQ.gamepad = QQ
            },
            stopMoving: () => {
              var WQ;
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
              const XQ = null === (WQ = (0, gQ.f)()) || void 0 === WQ ? void 0 : WQ.rD.PXQ();
              (null === XQ || void 0 === XQ ? void 0 : XQ.gamepad) === QQ && (XQ.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: QQ => {
              const WQ = (0, gQ.f)(),
                XQ = null === WQ || void 0 === WQ ? void 0 : WQ.rD.PXQ();
              "touch" === QQ ? ((0, yQ.g)(!1), null !== XQ && void 0 !== XQ && XQ.padSneakToggled && (XQ.padSneakToggled = !1, XQ.isTouchscreen && !XQ.gamepad && WQ.rD.RWQ(WQ.RC).setCrouching(!!WQ.zD.canCrouch && XQ.touchCrouch))) : "gamepad" === QQ && XQ && (0, yQ.g)(DQ(XQ))
            },
            hasPlayer: () => {
              var QQ;
              return !(null === (QQ = (0, gQ.f)()) || void 0 === QQ || !QQ.RC)
            },
            isPlayerDead: () => {
              var QQ;
              const WQ = (0, gQ.f)();
              return !1 === (null === (QQ = WQ.rD.WXQ(WQ.RC)) || void 0 === QQ ? void 0 : QQ.isAlive)
            },
            isReplayMode: () => {
              var QQ, WQ;
              return !(null === (QQ = (0, gQ.d)()) || void 0 === QQ || null === (WQ = QQ.client) || void 0 === WQ || !WQ.isReplayMode())
            },
            isFreeCameraOn: () => {
              var QQ, WQ, XQ;
              return !(null === (QQ = (0, gQ.d)()) || void 0 === QQ || null === (WQ = QQ.client) || void 0 === WQ || null === (XQ = WQ.freeCameraController) || void 0 === XQ || !XQ.isEnabled())
            },
            targetsBlock: () => !!(0, gQ.f)().CQQ,
            selectedSlotEmpty: () => {
              var QQ;
              const WQ = (0, gQ.f)();
              return !(null !== (QQ = WQ.rD.CWQ(WQ.RC)) && void 0 !== QQ && QQ.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const QQ = (0, gQ.f)().zD;
              return !!QQ.creative && !!QQ.canPickBlocks
            },
            scrollHotbar: QQ => {
              PQ.k.mB("ScrollInventorySlot", QQ)
            },
            hasFullInventory: () => (0, FQ.b)((0, gQ.f)()),
            hasLobbyTab: () => (0, VQ.b)((0, gQ.f)().zD),
            contextActionInputs: () => {
              var QQ, WQ, XQ, wQ;
              const qQ = (0, gQ.f)();
              return {
                holdingGun: !(null === (QQ = qQ.rD.XXQ(qQ.RC)) || void 0 === QQ || null === (WQ = QQ.Qp) || void 0 === WQ || !WQ.isGun()),
                customButtons: null !== (XQ = qQ.zD.customButtons) && void 0 !== XQ ? XQ : null,
                touchscreenActionButton: null !== (wQ = qQ.zD.touchscreenActionButton) && void 0 !== wQ ? wQ : null
              }
            },
            pressTouchButton: QQ => {
              (0, sQ.sendColyMessage)(qQ.Wj, QQ)
            }
          }
        })()),
        WQ = (0, wQ.d)(),
        XQ = null,
        TQ = null;
      return () => {
        QQ(), WQ(), null === XQ || void 0 === XQ || XQ(), null === TQ || void 0 === TQ || TQ()
      }
    }
  },
  36906: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      B: () => DQ,
      b: () => TQ,
      f: () => BQ,
      h: () => yQ,
      j: () => sQ,
      n: () => rQ,
      r: () => VQ,
      t: () => JQ,
      u: () => pQ,
      y: () => jQ
    });
    var wQ = XQ(26),
      qQ = XQ(31);
    const TQ = "clientGameInventoryButtonsChanged",
      zQ = new Map;

    function sQ() {
      return [...zQ.values()].sort(((QQ, WQ) => {
        var XQ, wQ;
        return (null !== (XQ = QQ.order) && void 0 !== XQ ? XQ : 0) - (null !== (wQ = WQ.order) && void 0 !== wQ ? wQ : 0)
      }))
    }
    let FQ = null;

    function PQ(QQ) {
      FQ = QQ
    }
    let gQ = !1;

    function JQ(QQ) {
      gQ = !0;
      try {
        QQ.onClick()
      } finally {
        gQ = !1
      }
      QQ.panel && "clientGame" === wQ.b.get("openInGameMenuName") && PQ(QQ.id)
    }

    function rQ() {
      return gQ
    }

    function IQ() {
      return sQ().filter((QQ => QQ.panel && !QQ.disabled))
    }

    function jQ(QQ) {
      const WQ = IQ(),
        XQ = WQ.findIndex((QQ => QQ.id === FQ));
      return !(XQ < 0 || WQ.length < 2) && (JQ(WQ[(XQ + QQ + WQ.length) % WQ.length]), !0)
    }

    function BQ() {
      return null !== FQ && IQ().length > 1
    }

    function yQ() {
      PQ(null)
    }

    function VQ() {
      "inventory" !== wQ.b.get("openInGameMenuName") && PQ(null)
    }

    function DQ() {
      const QQ = FQ;
      return PQ(null), QQ
    }

    function pQ(QQ) {
      return zQ.set(QQ.id, QQ), qQ.k.mB(TQ, sQ(), !0), () => {
        zQ.get(QQ.id) === QQ && (zQ.delete(QQ.id), qQ.k.mB(TQ, sQ()))
      }
    }
  },
  36900: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      A: () => gQ,
      c: () => sQ,
      g: () => DQ,
      j: () => yQ,
      n: () => VQ,
      q: () => rQ,
      s: () => PQ,
      u: () => BQ,
      y: () => IQ
    });
    var wQ = XQ(26),
      qQ = XQ(31),
      TQ = XQ(1335),
      zQ = XQ(36906);
    const sQ = "clientGameUiChanged";
    let FQ = null;

    function PQ() {
      return FQ
    }

    function gQ(QQ, WQ) {
      const XQ = {
        content: QQ,
        menu: WQ
      };
      return FQ = XQ, qQ.k.mB(sQ, FQ, !0), () => {
        FQ === XQ && (FQ = null, jQ = !1, yQ(), qQ.k.mB(sQ, null))
      }
    }
    let JQ = null;

    function rQ() {
      return JQ
    }

    function IQ(QQ) {
      return JQ = QQ, () => {
        JQ === QQ && (JQ = null)
      }
    }
    let jQ = !1;

    function BQ() {
      const QQ = wQ.b.get("openInGameMenuName");
      "clientGame" !== QQ && (jQ = "inventory" === QQ), (0, zQ.n)() || (0, zQ.h)(), (0, TQ.z)(TQ.e), wQ.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function yQ() {
      pQ(!1)
    }

    function VQ() {
      pQ(jQ)
    }

    function DQ() {
      jQ && pQ(!1)
    }

    function pQ(QQ) {
      "clientGame" === wQ.b.get("openInGameMenuName") && wQ.b.set({
        openInGameMenuName: QQ ? "inventory" : null
      }), QQ || (0, zQ.h)(), jQ = !1
    }
  },
  36800: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => FQ
    });
    var wQ = XQ(382),
      qQ = XQ(26),
      TQ = XQ(36809),
      zQ = XQ(1698),
      sQ = XQ(2061);

    function FQ(QQ, WQ) {
      var XQ, FQ, PQ;
      if (!qQ.b.get("isKeydownEnabled") || QQ.repeat) return;
      const gQ = QQ.code;
      "Escape" === QQ.key ? (0, zQ.i)(QQ) : null !== (XQ = sQ.s.OpenSettings) && void 0 !== XQ && XQ.includes(gQ) ? (0, zQ.w)(QQ, wQ.r.SETTINGS) : null !== (FQ = sQ.s.OpenCharacterCustomization) && void 0 !== FQ && FQ.includes(gQ) ? (0, TQ.e)() || (0, zQ.w)(QQ, wQ.r.CUSTOMISATION, WQ()) : null !== (PQ = sQ.s.ShowDebugOverlay) && void 0 !== PQ && PQ.includes(gQ) && qQ.b.set({
        showDebugOverlay: !qQ.b.get("showDebugOverlay")
      })
    }
  },
  39264: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ, XQ, wQ, qQ) {
      var TQ = {};
      return Object.keys(wQ).forEach((function(QQ) {
        TQ[QQ] = wQ[QQ]
      })), TQ.enumerable = !!TQ.enumerable, TQ.configurable = !!TQ.configurable, ("value" in TQ || TQ.initializer) && (TQ.writable = !0), TQ = XQ.slice().reverse().reduce((function(XQ, wQ) {
        return wQ(QQ, WQ, XQ) || XQ
      }), TQ), qQ && void 0 !== TQ.initializer && (TQ.value = TQ.initializer ? TQ.initializer.call(qQ) : void 0, TQ.initializer = void 0), void 0 === TQ.initializer && (Object.defineProperty(QQ, WQ, TQ), TQ = null), TQ
    }
    XQ.d(WQ, {
      e: () => wQ
    })
  },
  39259: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ, XQ, wQ) {
      XQ && Object.defineProperty(QQ, WQ, {
        enumerable: XQ.enumerable,
        configurable: XQ.configurable,
        writable: XQ.writable,
        value: XQ.initializer ? XQ.initializer.call(wQ) : void 0
      })
    }
    XQ.d(WQ, {
      b: () => wQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);
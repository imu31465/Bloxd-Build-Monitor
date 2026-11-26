export const id = 214;
export const ids = [214];
export const modules = {
  40315: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => pV,
      g: () => UV
    });
    var JV = xV(4512);
    let YV = null;

    function UV(VV) {
      return null !== YV && VV === YV
    }

    function yV() {
      this.U3 = !1, this.stopPropagation = !1, this.B3 = !1, this.disabled = !1
    }
    class pV {
      constructor(VV, eV) {
        this.version = "0.7.0";
        var xV = Object.assign({}, new yV, eV || {});
        this.element = VV || document, this.U3 = !!xV.U3, this.stopPropagation = !!xV.stopPropagation, this.B3 = !!xV.B3, this.disabled = !!xV.disabled, this.filterEvents = (VV, eV) => !0, this.ignoreEvent = VV => !1, this.down = new JV.EventEmitter, this.up = new JV.EventEmitter, this.state = {}, this.X3 = {
          dx: 0,
          dy: 0,
          WxV: 0,
          RxV: 0,
          gxV: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? nV(this) : document.addEventListener("DOMContentLoaded", (VV => {
          nV(this)
        }), {
          once: !0
        })
      }
      bind(VV) {
        for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
        xV.forEach((eV => {
          var xV = this._keyBindmap[eV] || [];
          xV.includes(VV) || (xV.push(VV), this._keyBindmap[eV] = xV)
        })), this.state[VV] = !!this.state[VV], this.pressCount[VV] = this.pressCount[VV] || 0, this.releaseCount[VV] = this.releaseCount[VV] || 0
      }
      unbind(VV) {
        for (var eV in this._keyBindmap) {
          var xV = this._keyBindmap[eV],
            JV = xV.indexOf(VV);
          JV > -1 && xV.splice(JV, 1)
        }
      }
      getBindings() {
        var VV = {};
        for (var eV in this._keyBindmap) {
          this._keyBindmap[eV].forEach((xV => {
            VV[xV] = VV[xV] || [], VV[xV].push(eV)
          }))
        }
        return VV
      }
      iZ() {
        QV(this.X3), QV(this.pressCount), QV(this.releaseCount)
      }
    }

    function QV(VV) {
      for (var eV in VV) VV[eV] = 0
    }

    function nV(VV) {
      window.addEventListener("keydown", EV.bind(null, VV, !0), !1), window.addEventListener("keyup", EV.bind(null, VV, !1), !1);
      var eV = {
        passive: !0
      };
      VV.element.addEventListener("touchstart", rV.bind(void 0, VV), {
        passive: !1
      }), VV.element.addEventListener("touchend", bV.bind(void 0, VV), eV), VV.element.addEventListener("mousedown", BV.bind(null, VV, !0), eV), window.document.addEventListener("mouseup", BV.bind(null, VV, !1), eV), VV.element.addEventListener("touchmove", jV.bind(null, VV), eV), VV.element.addEventListener("mousemove", jV.bind(null, VV), eV), window.PointerEvent, VV.element.addEventListener("wheel", qV.bind(null, VV), eV), VV.element.addEventListener("contextmenu", tV.bind(null, VV), !1), window.addEventListener("blur", PV.bind(null, VV), !1)
    }
    var wV = 0,
      ZV = 0,
      vV = null;

    function rV(VV, eV) {
      eV.preventDefault(), kV(eV)
    }

    function kV(VV) {
      let eV = !1;
      for (let xV = 0; xV < VV.touches.length; ++xV)
        if (VV.touches[xV].identifier === vV) {
          eV = !0;
          break
        } if (!eV) {
        const eV = VV.changedTouches[0];
        wV = eV.clientX, ZV = eV.clientY, vV = eV.identifier
      }
    }

    function bV(VV, eV) {
      for (var xV = eV.changedTouches, JV = 0; JV < xV.length; ++JV) xV[JV].identifier === vV && (vV = null)
    }

    function EV(VV, eV, xV) {
      if (!VV.ignoreEvent(xV)) try {
        AV(VV, xV), eV && xV.isTrusted && !xV.repeat && VV._keyStates[xV.code] && NV(VV, xV.code)
      } finally {
        XV(xV.code, eV, VV, xV)
      }
    }

    function BV(VV, eV, xV) {
      if (!VV.ignoreEvent(xV)) try {
        AV(VV, xV)
      } finally {
        ! function(VV, eV, xV) {
          if ("pointerId" in xV)
            if (eV) {
              if (null !== VV._touches.currID) return;
              VV._touches.currID = xV.pointerId
            } else {
              if (VV._touches.currID !== xV.pointerId) return;
              VV._touches.currID = null
            } var JV = "button" in xV ? xV.button + 1 : 1;
          XV("Mouse" + JV, eV, VV, xV)
        }(VV, eV, xV)
      }
    }

    function jV(VV, eV) {
      var xV = eV.movementX || eV.mozMovementX || 0,
        JV = eV.movementY || eV.mozMovementY || 0;
      if (eV.touches && 0 === (xV | JV)) {
        var YV = function(VV) {
          kV(VV);
          for (let eV = 0; eV < VV.changedTouches.length; ++eV)
            if (VV.changedTouches[eV].identifier == vV) {
              const xV = VV.changedTouches[eV],
                JV = [xV.clientX - wV, xV.clientY - ZV];
              return wV = xV.clientX, ZV = xV.clientY, JV
            } return console.error(`Did not find touch id ${vV}`), [0, 0]
        }(eV);
        xV = YV[0], JV = YV[1]
      }
      VV.X3.dx += xV, VV.X3.dy += JV
    }

    function qV(VV, eV) {
      AV(VV, eV);
      var xV = 1;
      switch (eV.deltaMode) {
        case 0:
          xV = 1;
          break;
        case 1:
          xV = 12;
          break;
        case 2:
          xV = VV.element.clientHeight || window.innerHeight
      }
      VV.X3.WxV += (eV.deltaX || 0) * xV, VV.X3.RxV += (eV.deltaY || 0) * xV, VV.X3.gxV += (eV.deltaZ || 0) * xV
    }

    function tV(VV, eV) {
      if (!VV.B3) return eV.preventDefault(), !1
    }
    var FV = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function TV(VV, eV) {
      return !!VV[FV[eV]] || ("AltRight" === eV || "ControlLeft" === eV) && "function" === typeof VV.getModifierState && !0 === VV.getModifierState("AltGraph")
    }

    function PV(VV, eV) {
      for (var xV in VV._modifiersHeldThroughBlur = {}, FV) VV._keyStates[xV] && (VV._modifiersHeldThroughBlur[xV] = !0);
      eV && eV.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (VV) {
          return !0
        }
      }() && (clearTimeout(VV._blurRelease), VV._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var eV in VV._modifiersHeldThroughBlur = {}, VV._keyStates) VV._keyStates[eV] && !/^Mouse\d/.test(eV) && NV(VV, eV)
      }), 0))
    }

    function AV(VV, eV) {
      var xV = VV._modifiersHeldThroughBlur;
      if (xV && eV.isTrusted && document.hasFocus())
        for (var JV in xV) delete xV[JV], VV._keyStates[JV] && JV !== eV.code && (TV(eV, JV) || NV(VV, JV))
    }

    function NV(VV, eV) {
      const xV = {
          code: eV,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        JV = YV;
      YV = xV;
      try {
        XV(eV, !1, VV, xV)
      } finally {
        YV = JV
      }
    }

    function XV(VV, eV, xV, JV) {
      var YV = xV._keyBindmap[VV];
      YV && (MV(xV._keyStates[VV], eV) && (xV._keyStates[VV] = eV, YV.forEach((VV => {
        (!xV.filterEvents || xV.filterEvents(JV, VV)) && function(VV, eV, xV, JV) {
          var YV = eV ? xV.pressCount : xV.releaseCount;
          YV[VV] = (YV[VV] || 0) + 1;
          var UV = xV._bindPressCount[VV] || 0;
          (UV += eV ? 1 : -1) < 0 && (UV = 0);
          xV._bindPressCount[VV] = UV;
          var yV = xV.state[VV];
          if (MV(yV, UV)) {
            xV.state[VV] = UV > 0;
            var pV = eV ? xV.down : xV.up;
            xV.disabled || pV.emit(VV, JV)
          }
        }(VV, eV, xV, JV)
      }))), "button" in JV || (xV.U3 && !JV.defaultPrevented && JV.preventDefault(), xV.stopPropagation && JV.stopPropagation()))
    }

    function MV(VV, eV) {
      return VV ? !eV : eV
    }
  },
  37840: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => bV,
      f: () => EV
    });
    var JV = xV(62),
      YV = xV(1542),
      UV = xV(2100),
      yV = xV(37790),
      pV = xV(657),
      QV = xV(1146),
      nV = xV.n(QV),
      wV = xV(1321);
    const ZV = [vV()];

    function vV() {
      return {
        source: null,
        direction: null,
        bK: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function rV(VV) {
      return ZV.find((eV => null !== eV.source && eV.source === VV))
    }

    function kV(VV) {
      clearTimeout(VV.timeout), VV.source = null, VV.direction = null, VV.writtenAngle = null, VV.bK && (VV.bK.style.rotate = "")
    }
    const bV = (0, JV.memo)((function() {
      const [, VV] = (0, JV.useReducer)((VV => VV + 1), 0);
      return (0, YV.g)("damagedByOtherPlayer", (eV => {
        let {
          fU: xV,
          direction: JV
        } = eV;
        const YV = xV || "nonDirectional",
          UV = function(VV) {
            var eV;
            const xV = null !== (eV = rV(VV)) && void 0 !== eV ? eV : ZV.find((VV => null === VV.source));
            if (xV) return xV;
            const JV = {
              source: null,
              direction: null,
              bK: null,
              timeout: void 0,
              writtenAngle: null
            };
            return ZV.push(JV), JV
          }(YV);
        clearTimeout(UV.timeout), UV.source = YV, UV.direction = JV, UV.timeout = setTimeout((() => {
          kV(UV), VV()
        }), 800), VV()
      })), (0, UV.c)("kill", (eV => {
        let {
          killer: xV,
          victim: JV
        } = eV;
        const YV = xV.local && rV(JV.id);
        YV && (kV(YV), VV())
      })), (0, JV.useEffect)((() => {
        const VV = (0, yV.g)("turnDamageIndicators", EV);
        return () => {
          VV(), ZV.forEach(kV)
        }
      }), []), (0, wV.jsx)("div", {
        className: "DirectionalDamage",
        children: ZV.map(((VV, eV) => (0, wV.jsx)("div", {
          ref: eV => {
            VV.bK = eV
          },
          className: nV()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, pV.J)(VV.direction),
            DamageIndicatorIdle: null === VV.source
          })
        }, eV)))
      })
    }));

    function EV(VV) {
      for (const eV of ZV) {
        if (null === eV.source || (0, pV.J)(eV.direction)) continue;
        const xV = eV.direction - VV;
        xV !== eV.writtenAngle && (eV.writtenAngle = xV, eV.bK.style.rotate = `${xV}rad`)
      }
    }
  },
  35093: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV,
      g: () => UV
    });
    let JV = !1;

    function YV() {
      return JV
    }

    function UV(VV) {
      return JV !== VV && (JV = VV, !0)
    }
  },
  35268: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV,
      e: () => YV
    });
    var JV = xV(27);

    function YV(VV, eV) {
      return VV && !eV
    }

    function UV() {
      return YV(JV.b.get("isTouchScreen"), JV.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  41946: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      startPadGameplay: () => FV
    });
    xV(41825);
    var JV = xV(41827),
      YV = xV(4163),
      UV = xV(27),
      yV = xV(40273),
      pV = xV(4098),
      QV = xV(40307),
      nV = xV(32),
      wV = xV(3093),
      ZV = xV(39579),
      vV = xV(9462),
      rV = xV(41831);
    const kV = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var bV = xV(41850),
      EV = xV(9435),
      BV = xV(40310);
    const jV = VV => VV.padSneakToggled || !!UV.b.get("clientEscMenuOptions").crouchIsToggle && VV.crouchToggled,
      qV = () => {
        const VV = (() => {
          const VV = (0, vV.c)();
          let eV = kV;
          const xV = new rV.e;
          let JV = !1,
            YV = 0;
          const UV = () => {
            const xV = performance.now(),
              UV = 0 === YV ? 0 : xV - YV;
            if (YV = xV, !JV) return VV.discardPending(), null;
            const yV = (0, rV.n)(eV, UV),
              pV = VV.drainLookDelta(),
              QV = (0, ZV.g)();
            return {
              uR: (yV.uR + pV.uR) * QV,
              eD: (yV.eD + pV.eD) * QV
            }
          };
          return {
            update: (VV, YV, yV, pV) => {
              VV.camera.F_ !== UV && (VV.camera.F_ = UV), JV = !0, eV = (0, rV.q)(xV, YV, yV, pV, performance.now())
            },
            release: () => {
              JV = !1, eV = kV, xV.reset()
            },
            uninstall: VV => {
              VV.camera.F_ === UV && (VV.camera.F_ = null)
            }
          }
        })();
        return {
          update: (eV, xV, JV) => {
            VV.update((0, wV.d)(), eV, xV, JV)
          },
          release: VV.release,
          uninstall: () => {
            const eV = (0, wV.d)();
            eV && VV.uninstall(eV)
          }
        }
      };
    var tV = xV(41841);
    xV(38840), xV(9346);
    xV(9372).d;
    const FV = () => {
      const VV = (0, tV.b)((() => {
          const VV = {
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
            bodies: () => (0, yV.c)(),
            look: qV(),
            move: (eV, xV) => {
              const JV = (0, wV.d)(),
                YV = JV.sF.tJV();
              if (VV.x = eV.x, VV.y = eV.y, VV.magnitude = eV.magnitude, VV.headingOffset = eV.headingOffset, VV.jumpHeld = eV.jumpHeld, eV.jumpPressed && (VV.jumpPressedSinceTick = !0), VV.running = eV.running, VV.sprintHeld = eV.sprintHeld, xV) {
                const eV = (0, bV.e)({
                  ...xV,
                  descending: JV.sF.XxV(JV.bD).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!JV.mF.canCrouch,
                  toggled: jV(YV)
                });
                VV.crouchHeld = eV.crouchHeld, YV.padSneakToggled = eV.toggled, YV.crouchToggled = !1, (0, EV.h)(eV.toggled)
              }
              YV.gamepad = VV
            },
            stopMoving: () => {
              var eV;
              Object.assign(VV, {
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
              const xV = null === (eV = (0, wV.d)()) || void 0 === eV ? void 0 : eV.sF.tJV();
              (null === xV || void 0 === xV ? void 0 : xV.gamepad) === VV && (xV.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: VV => {
              const eV = (0, wV.d)(),
                xV = null === eV || void 0 === eV ? void 0 : eV.sF.tJV();
              "touch" === VV ? ((0, EV.h)(!1), null !== xV && void 0 !== xV && xV.padSneakToggled && (xV.padSneakToggled = !1, xV.isTouchscreen && !xV.gamepad && eV.sF.HxV(eV.bD).setCrouching(!!eV.mF.canCrouch && xV.touchCrouch))) : "gamepad" === VV && xV && (0, EV.h)(jV(xV))
            },
            hasPlayer: () => {
              var VV;
              return !(null === (VV = (0, wV.d)()) || void 0 === VV || !VV.bD)
            },
            isPlayerDead: () => {
              var VV;
              const eV = (0, wV.d)();
              return !1 === (null === (VV = eV.sF.rJV(eV.bD)) || void 0 === VV ? void 0 : VV.isAlive)
            },
            isReplayMode: () => {
              var VV, eV;
              return !(null === (VV = (0, wV.b)()) || void 0 === VV || null === (eV = VV.client) || void 0 === eV || !eV.isReplayMode())
            },
            isFreeCameraOn: () => {
              var VV, eV, xV;
              return !(null === (VV = (0, wV.b)()) || void 0 === VV || null === (eV = VV.client) || void 0 === eV || null === (xV = eV.freeCameraController) || void 0 === xV || !xV.isEnabled())
            },
            targetsBlock: () => !!(0, wV.d)().IeV,
            selectedSlotEmpty: () => {
              var VV;
              const eV = (0, wV.d)();
              return !(null !== (VV = eV.sF.sxV(eV.bD)) && void 0 !== VV && VV.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const VV = (0, wV.d)().mF;
              return !!VV.creative && !!VV.canPickBlocks
            },
            scrollHotbar: VV => {
              nV.h.QZ("ScrollInventorySlot", VV)
            },
            hasFullInventory: () => (0, QV.e)((0, wV.d)()),
            hasLobbyTab: () => (0, BV.c)((0, wV.d)().mF),
            contextActionInputs: () => {
              var VV, eV, xV, JV;
              const YV = (0, wV.d)();
              return {
                holdingGun: !(null === (VV = YV.sF.kJV(YV.bD)) || void 0 === VV || null === (eV = VV.JA) || void 0 === eV || !eV.isGun()),
                customButtons: null !== (xV = YV.mF.customButtons) && void 0 !== xV ? xV : null,
                touchscreenActionButton: null !== (JV = YV.mF.touchscreenActionButton) && void 0 !== JV ? JV : null
              }
            },
            pressTouchButton: VV => {
              (0, pV.sendColyMessage)(YV.uj, VV)
            }
          }
        })()),
        eV = (0, JV.b)(),
        xV = null,
        UV = null;
      return () => {
        VV(), eV(), null === xV || void 0 === xV || xV(), null === UV || void 0 === UV || UV()
      }
    }
  },
  37771: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      g: () => bV,
      j: () => EV,
      m: () => pV,
      o: () => vV,
      q: () => BV,
      r: () => ZV,
      s: () => qV,
      t: () => kV,
      u: () => jV
    });
    var JV = xV(27),
      YV = xV(32);
    const UV = "clientGameInventoryButtonsChanged",
      yV = new Map;

    function pV() {
      return [...yV.values()].sort(((VV, eV) => {
        var xV, JV;
        return (null !== (xV = VV.order) && void 0 !== xV ? xV : 0) - (null !== (JV = eV.order) && void 0 !== JV ? JV : 0)
      }))
    }
    let QV = null;

    function nV(VV) {
      QV = VV
    }
    let wV = !1;

    function ZV(VV) {
      wV = !0;
      try {
        VV.onClick()
      } finally {
        wV = !1
      }
      VV.panel && "clientGame" === JV.b.get("openInGameMenuName") && nV(VV.id)
    }

    function vV() {
      return wV
    }

    function rV() {
      return pV().filter((VV => VV.panel && !VV.disabled))
    }

    function kV(VV) {
      const eV = rV(),
        xV = eV.findIndex((VV => VV.id === QV));
      return !(xV < 0 || eV.length < 2) && (ZV(eV[(xV + VV + eV.length) % eV.length]), !0)
    }

    function bV() {
      return null !== QV && rV().length > 1
    }

    function EV() {
      nV(null)
    }

    function BV() {
      "inventory" !== JV.b.get("openInGameMenuName") && nV(null)
    }

    function jV() {
      const VV = QV;
      return nV(null), VV
    }

    function qV(VV) {
      return yV.set(VV.id, VV), YV.h.QZ(UV, pV(), !0), () => {
        yV.get(VV.id) === VV && (yV.delete(VV.id), YV.h.QZ(UV, pV()))
      }
    }
  },
  37762: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => pV,
      h: () => jV,
      i: () => EV,
      m: () => BV,
      o: () => vV,
      p: () => nV,
      r: () => bV,
      v: () => rV,
      z: () => wV
    });
    var JV = xV(27),
      YV = xV(32),
      UV = xV(1332),
      yV = xV(37771);
    const pV = "clientGameUiChanged";
    let QV = null;

    function nV() {
      return QV
    }

    function wV(VV, eV) {
      const xV = {
        content: VV,
        menu: eV
      };
      return QV = xV, YV.h.QZ(pV, QV, !0), () => {
        QV === xV && (QV = null, kV = !1, EV(), YV.h.QZ(pV, null))
      }
    }
    let ZV = null;

    function vV() {
      return ZV
    }

    function rV(VV) {
      return ZV = VV, () => {
        ZV === VV && (ZV = null)
      }
    }
    let kV = !1;

    function bV() {
      const VV = JV.b.get("openInGameMenuName");
      "clientGame" !== VV && (kV = "inventory" === VV), (0, yV.o)() || (0, yV.j)(), (0, UV.p)(UV.d), JV.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function EV() {
      qV(!1)
    }

    function BV() {
      qV(kV)
    }

    function jV() {
      kV && qV(!1)
    }

    function qV(VV) {
      "clientGame" === JV.b.get("openInGameMenuName") && JV.b.set({
        openInGameMenuName: VV ? "inventory" : null
      }), VV || (0, yV.j)(), kV = !1
    }
  },
  37636: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => QV
    });
    var JV = xV(364),
      YV = xV(27),
      UV = xV(35093),
      yV = xV(1725),
      pV = xV(2116);

    function QV(VV, eV) {
      var xV, QV, nV;
      if (!YV.b.get("isKeydownEnabled") || VV.repeat) return;
      const wV = VV.code;
      "Escape" === VV.key ? (0, yV.i)(VV) : null !== (xV = pV.t.OpenSettings) && void 0 !== xV && xV.includes(wV) ? (0, yV.t)(VV, JV.q.SETTINGS) : null !== (QV = pV.t.OpenCharacterCustomization) && void 0 !== QV && QV.includes(wV) ? (0, UV.e)() || (0, yV.t)(VV, JV.q.CUSTOMISATION, eV()) : null !== (nV = pV.t.ShowDebugOverlay) && void 0 !== nV && nV.includes(wV) && YV.b.set({
        showDebugOverlay: !YV.b.get("showDebugOverlay")
      })
    }
  },
  40182: (VV, eV, xV) => {
    function JV(VV, eV, xV, JV, YV) {
      var UV = {};
      return Object.keys(JV).forEach((function(VV) {
        UV[VV] = JV[VV]
      })), UV.enumerable = !!UV.enumerable, UV.configurable = !!UV.configurable, ("value" in UV || UV.initializer) && (UV.writable = !0), UV = xV.slice().reverse().reduce((function(xV, JV) {
        return JV(VV, eV, xV) || xV
      }), UV), YV && void 0 !== UV.initializer && (UV.value = UV.initializer ? UV.initializer.call(YV) : void 0, UV.initializer = void 0), void 0 === UV.initializer && (Object.defineProperty(VV, eV, UV), UV = null), UV
    }
    xV.d(eV, {
      d: () => JV
    })
  },
  40173: (VV, eV, xV) => {
    function JV(VV, eV, xV, JV) {
      xV && Object.defineProperty(VV, eV, {
        enumerable: xV.enumerable,
        configurable: xV.configurable,
        writable: xV.writable,
        value: xV.initializer ? xV.initializer.call(JV) : void 0
      })
    }
    xV.d(eV, {
      e: () => JV
    })
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);
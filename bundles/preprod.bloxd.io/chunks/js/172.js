export const id = 172;
export const ids = [172];
export const modules = {
  39930: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU,
      f: () => QU
    });
    var cU = zU(4460);
    let yU = null;

    function QU(UU) {
      return null !== yU && UU === yU
    }

    function AU() {
      this.HJ = !1, this.stopPropagation = !1, this.MJ = !1, this.disabled = !1
    }
    class FU {
      constructor(UU, XU) {
        this.version = "0.7.0";
        var zU = Object.assign({}, new AU, XU || {});
        this.element = UU || document, this.HJ = !!zU.HJ, this.stopPropagation = !!zU.stopPropagation, this.MJ = !!zU.MJ, this.disabled = !!zU.disabled, this.filterEvents = (UU, XU) => !0, this.ignoreEvent = UU => !1, this.down = new cU.EventEmitter, this.up = new cU.EventEmitter, this.state = {}, this.vJ = {
          dx: 0,
          dy: 0,
          UzU: 0,
          XzU: 0,
          zzU: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? DU(this) : document.addEventListener("DOMContentLoaded", (UU => {
          DU(this)
        }), {
          once: !0
        })
      }
      bind(UU) {
        for (var XU = arguments.length, zU = new Array(XU > 1 ? XU - 1 : 0), cU = 1; cU < XU; cU++) zU[cU - 1] = arguments[cU];
        zU.forEach((XU => {
          var zU = this._keyBindmap[XU] || [];
          zU.includes(UU) || (zU.push(UU), this._keyBindmap[XU] = zU)
        })), this.state[UU] = !!this.state[UU], this.pressCount[UU] = this.pressCount[UU] || 0, this.releaseCount[UU] = this.releaseCount[UU] || 0
      }
      unbind(UU) {
        for (var XU in this._keyBindmap) {
          var zU = this._keyBindmap[XU],
            cU = zU.indexOf(UU);
          cU > -1 && zU.splice(cU, 1)
        }
      }
      getBindings() {
        var UU = {};
        for (var XU in this._keyBindmap) {
          this._keyBindmap[XU].forEach((zU => {
            UU[zU] = UU[zU] || [], UU[zU].push(XU)
          }))
        }
        return UU
      }
      LY() {
        oU(this.vJ), oU(this.pressCount), oU(this.releaseCount)
      }
    }

    function oU(UU) {
      for (var XU in UU) UU[XU] = 0
    }

    function DU(UU) {
      window.addEventListener("keydown", tU.bind(null, UU, !0), !1), window.addEventListener("keyup", tU.bind(null, UU, !1), !1);
      var XU = {
        passive: !0
      };
      UU.element.addEventListener("touchstart", IU.bind(void 0, UU), {
        passive: !1
      }), UU.element.addEventListener("touchend", aU.bind(void 0, UU), XU), UU.element.addEventListener("mousedown", gU.bind(null, UU, !0), XU), window.document.addEventListener("mouseup", gU.bind(null, UU, !1), XU), UU.element.addEventListener("touchmove", kU.bind(null, UU), XU), UU.element.addEventListener("mousemove", kU.bind(null, UU), XU), window.PointerEvent, UU.element.addEventListener("wheel", GU.bind(null, UU), XU), UU.element.addEventListener("contextmenu", BU.bind(null, UU), !1), window.addEventListener("blur", PU.bind(null, UU), !1)
    }
    var EU = 0,
      YU = 0,
      NU = null;

    function IU(UU, XU) {
      XU.preventDefault(), pU(XU)
    }

    function pU(UU) {
      let XU = !1;
      for (let zU = 0; zU < UU.touches.length; ++zU)
        if (UU.touches[zU].identifier === NU) {
          XU = !0;
          break
        } if (!XU) {
        const XU = UU.changedTouches[0];
        EU = XU.clientX, YU = XU.clientY, NU = XU.identifier
      }
    }

    function aU(UU, XU) {
      for (var zU = XU.changedTouches, cU = 0; cU < zU.length; ++cU) zU[cU].identifier === NU && (NU = null)
    }

    function tU(UU, XU, zU) {
      if (!UU.ignoreEvent(zU)) try {
        WU(UU, zU), XU && zU.isTrusted && !zU.repeat && UU._keyStates[zU.code] && dU(UU, zU.code)
      } finally {
        LU(zU.code, XU, UU, zU)
      }
    }

    function gU(UU, XU, zU) {
      if (!UU.ignoreEvent(zU)) try {
        WU(UU, zU)
      } finally {
        ! function(UU, XU, zU) {
          if ("pointerId" in zU)
            if (XU) {
              if (null !== UU._touches.currID) return;
              UU._touches.currID = zU.pointerId
            } else {
              if (UU._touches.currID !== zU.pointerId) return;
              UU._touches.currID = null
            } var cU = "button" in zU ? zU.button + 1 : 1;
          LU("Mouse" + cU, XU, UU, zU)
        }(UU, XU, zU)
      }
    }

    function kU(UU, XU) {
      var zU = XU.movementX || XU.mozMovementX || 0,
        cU = XU.movementY || XU.mozMovementY || 0;
      if (XU.touches && 0 === (zU | cU)) {
        var yU = function(UU) {
          pU(UU);
          for (let XU = 0; XU < UU.changedTouches.length; ++XU)
            if (UU.changedTouches[XU].identifier == NU) {
              const zU = UU.changedTouches[XU],
                cU = [zU.clientX - EU, zU.clientY - YU];
              return EU = zU.clientX, YU = zU.clientY, cU
            } return console.error(`Did not find touch id ${NU}`), [0, 0]
        }(XU);
        zU = yU[0], cU = yU[1]
      }
      UU.vJ.dx += zU, UU.vJ.dy += cU
    }

    function GU(UU, XU) {
      WU(UU, XU);
      var zU = 1;
      switch (XU.deltaMode) {
        case 0:
          zU = 1;
          break;
        case 1:
          zU = 12;
          break;
        case 2:
          zU = UU.element.clientHeight || window.innerHeight
      }
      UU.vJ.UzU += (XU.deltaX || 0) * zU, UU.vJ.XzU += (XU.deltaY || 0) * zU, UU.vJ.zzU += (XU.deltaZ || 0) * zU
    }

    function BU(UU, XU) {
      if (!UU.MJ) return XU.preventDefault(), !1
    }
    var ZU = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function RU(UU, XU) {
      return !!UU[ZU[XU]] || ("AltRight" === XU || "ControlLeft" === XU) && "function" === typeof UU.getModifierState && !0 === UU.getModifierState("AltGraph")
    }

    function PU(UU, XU) {
      for (var zU in UU._modifiersHeldThroughBlur = {}, ZU) UU._keyStates[zU] && (UU._modifiersHeldThroughBlur[zU] = !0);
      XU && XU.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (UU) {
          return !0
        }
      }() && (clearTimeout(UU._blurRelease), UU._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var XU in UU._modifiersHeldThroughBlur = {}, UU._keyStates) UU._keyStates[XU] && !/^Mouse\d/.test(XU) && dU(UU, XU)
      }), 0))
    }

    function WU(UU, XU) {
      var zU = UU._modifiersHeldThroughBlur;
      if (zU && XU.isTrusted && document.hasFocus())
        for (var cU in zU) delete zU[cU], UU._keyStates[cU] && cU !== XU.code && (RU(XU, cU) || dU(UU, cU))
    }

    function dU(UU, XU) {
      const zU = {
          code: XU,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        cU = yU;
      yU = zU;
      try {
        LU(XU, !1, UU, zU)
      } finally {
        yU = cU
      }
    }

    function LU(UU, XU, zU, cU) {
      var yU = zU._keyBindmap[UU];
      yU && (eU(zU._keyStates[UU], XU) && (zU._keyStates[UU] = XU, yU.forEach((UU => {
        (!zU.filterEvents || zU.filterEvents(cU, UU)) && function(UU, XU, zU, cU) {
          var yU = XU ? zU.pressCount : zU.releaseCount;
          yU[UU] = (yU[UU] || 0) + 1;
          var QU = zU._bindPressCount[UU] || 0;
          (QU += XU ? 1 : -1) < 0 && (QU = 0);
          zU._bindPressCount[UU] = QU;
          var AU = zU.state[UU];
          if (eU(AU, QU)) {
            zU.state[UU] = QU > 0;
            var FU = XU ? zU.down : zU.up;
            zU.disabled || FU.emit(UU, cU)
          }
        }(UU, XU, zU, cU)
      }))), "button" in cU || (zU.HJ && !cU.defaultPrevented && cU.preventDefault(), zU.stopPropagation && cU.stopPropagation()))
    }

    function eU(UU, XU) {
      return UU ? !XU : XU
    }
  },
  37405: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => aU,
      f: () => tU
    });
    var cU = zU(61),
      yU = zU(1492),
      QU = zU(2047),
      AU = zU(37354),
      FU = zU(646),
      oU = zU(1106),
      DU = zU.n(oU),
      EU = zU(1305);
    const YU = [NU()];

    function NU() {
      return {
        source: null,
        direction: null,
        HV: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function IU(UU) {
      return YU.find((XU => null !== XU.source && XU.source === UU))
    }

    function pU(UU) {
      clearTimeout(UU.timeout), UU.source = null, UU.direction = null, UU.writtenAngle = null, UU.HV && (UU.HV.style.rotate = "")
    }
    const aU = (0, cU.memo)((function() {
      const [, UU] = (0, cU.useReducer)((UU => UU + 1), 0);
      return (0, yU.f)("damagedByOtherPlayer", (XU => {
        let {
          fQ: zU,
          direction: cU
        } = XU;
        const yU = zU || "nonDirectional",
          QU = function(UU) {
            var XU;
            const zU = null !== (XU = IU(UU)) && void 0 !== XU ? XU : YU.find((UU => null === UU.source));
            if (zU) return zU;
            const cU = {
              source: null,
              direction: null,
              HV: null,
              timeout: void 0,
              writtenAngle: null
            };
            return YU.push(cU), cU
          }(yU);
        clearTimeout(QU.timeout), QU.source = yU, QU.direction = cU, QU.timeout = setTimeout((() => {
          pU(QU), UU()
        }), 800), UU()
      })), (0, QU.b)("kill", (XU => {
        let {
          killer: zU,
          victim: cU
        } = XU;
        const yU = zU.local && IU(cU.id);
        yU && (pU(yU), UU())
      })), (0, cU.useEffect)((() => {
        const UU = (0, AU.d)("turnDamageIndicators", tU);
        return () => {
          UU(), YU.forEach(pU)
        }
      }), []), (0, EU.jsx)("div", {
        className: "DirectionalDamage",
        children: YU.map(((UU, XU) => (0, EU.jsx)("div", {
          ref: XU => {
            UU.HV = XU
          },
          className: DU()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, FU.P)(UU.direction),
            DamageIndicatorIdle: null === UU.source
          })
        }, XU)))
      })
    }));

    function tU(UU) {
      for (const XU of YU) {
        if (null === XU.source || (0, FU.P)(XU.direction)) continue;
        const zU = XU.direction - UU;
        zU !== XU.writtenAngle && (XU.writtenAngle = zU, XU.HV.style.rotate = `${zU}rad`)
      }
    }
  },
  37211: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      g: () => QU
    });
    let cU = !1;

    function yU() {
      return cU
    }

    function QU(UU) {
      return cU !== UU && (cU = UU, !0)
    }
  },
  34824: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      g: () => yU
    });
    var cU = zU(27);

    function yU(UU, XU) {
      return UU && !XU
    }

    function QU() {
      return yU(cU.e.get("isTouchScreen"), cU.e.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  41730: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      startPadGameplay: () => ZU
    });
    zU(41624);
    var cU = zU(41633),
      yU = zU(4139),
      QU = zU(27),
      AU = zU(39888),
      FU = zU(4063),
      oU = zU(39919),
      DU = zU(31),
      EU = zU(3043),
      YU = zU(39206),
      NU = zU(9431),
      IU = zU(41636);
    const pU = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var aU = zU(41644),
      tU = zU(9404),
      gU = zU(39926);
    const kU = UU => UU.padSneakToggled || !!QU.e.get("clientEscMenuOptions").crouchIsToggle && UU.crouchToggled,
      GU = () => {
        const UU = (() => {
          const UU = (0, NU.b)();
          let XU = pU;
          const zU = new IU.c;
          let cU = !1,
            yU = 0;
          const QU = () => {
            const zU = performance.now(),
              QU = 0 === yU ? 0 : zU - yU;
            if (yU = zU, !cU) return UU.discardPending(), null;
            const AU = (0, IU.k)(XU, QU),
              FU = UU.drainLookDelta(),
              oU = (0, YU.k)();
            return {
              zq: (AU.zq + FU.zq) * oU,
              Qq: (AU.Qq + FU.Qq) * oU
            }
          };
          return {
            update: (UU, yU, AU, FU) => {
              UU.camera.y_ !== QU && (UU.camera.y_ = QU), cU = !0, XU = (0, IU.n)(zU, yU, AU, FU, performance.now())
            },
            release: () => {
              cU = !1, XU = pU, zU.reset()
            },
            uninstall: UU => {
              UU.camera.y_ === QU && (UU.camera.y_ = null)
            }
          }
        })();
        return {
          update: (XU, zU, cU) => {
            UU.update((0, EU.e)(), XU, zU, cU)
          },
          release: UU.release,
          uninstall: () => {
            const XU = (0, EU.e)();
            XU && UU.uninstall(XU)
          }
        }
      };
    var BU = zU(41640);
    zU(38431), zU(9294);
    zU(9314).e;
    const ZU = () => {
      const UU = (0, BU.e)((() => {
          const UU = {
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
            bodies: () => (0, AU.e)(),
            look: GU(),
            move: (XU, zU) => {
              const cU = (0, EU.e)(),
                yU = cU.xG.nzU();
              if (UU.x = XU.x, UU.y = XU.y, UU.magnitude = XU.magnitude, UU.headingOffset = XU.headingOffset, UU.jumpHeld = XU.jumpHeld, XU.jumpPressed && (UU.jumpPressedSinceTick = !0), UU.running = XU.running, UU.sprintHeld = XU.sprintHeld, zU) {
                const XU = (0, aU.e)({
                  ...zU,
                  descending: cU.xG.KXU(cU.pM).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!cU.mG.canCrouch,
                  toggled: kU(yU)
                });
                UU.crouchHeld = XU.crouchHeld, yU.padSneakToggled = XU.toggled, yU.crouchToggled = !1, (0, tU.f)(XU.toggled)
              }
              yU.gamepad = UU
            },
            stopMoving: () => {
              var XU;
              Object.assign(UU, {
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
              const zU = null === (XU = (0, EU.e)()) || void 0 === XU ? void 0 : XU.xG.nzU();
              (null === zU || void 0 === zU ? void 0 : zU.gamepad) === UU && (zU.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: UU => {
              const XU = (0, EU.e)(),
                zU = null === XU || void 0 === XU ? void 0 : XU.xG.nzU();
              "touch" === UU ? ((0, tU.f)(!1), null !== zU && void 0 !== zU && zU.padSneakToggled && (zU.padSneakToggled = !1, zU.isTouchscreen && !zU.gamepad && XU.xG.azU(XU.pM).setCrouching(!!XU.mG.canCrouch && zU.touchCrouch))) : "gamepad" === UU && zU && (0, tU.f)(kU(zU))
            },
            hasPlayer: () => {
              var UU;
              return !(null === (UU = (0, EU.e)()) || void 0 === UU || !UU.pM)
            },
            isPlayerDead: () => {
              var UU;
              const XU = (0, EU.e)();
              return !1 === (null === (UU = XU.xG.fzU(XU.pM)) || void 0 === UU ? void 0 : UU.isAlive)
            },
            isReplayMode: () => {
              var UU, XU;
              return !(null === (UU = (0, EU.b)()) || void 0 === UU || null === (XU = UU.client) || void 0 === XU || !XU.isReplayMode())
            },
            isFreeCameraOn: () => {
              var UU, XU, zU;
              return !(null === (UU = (0, EU.b)()) || void 0 === UU || null === (XU = UU.client) || void 0 === XU || null === (zU = XU.freeCameraController) || void 0 === zU || !zU.isEnabled())
            },
            targetsBlock: () => !!(0, EU.e)().gXU,
            selectedSlotEmpty: () => {
              var UU;
              const XU = (0, EU.e)();
              return !(null !== (UU = XU.xG.gzU(XU.pM)) && void 0 !== UU && UU.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const UU = (0, EU.e)().mG;
              return !!UU.creative && !!UU.canPickBlocks
            },
            scrollHotbar: UU => {
              DU.k.UY("ScrollInventorySlot", UU)
            },
            hasFullInventory: () => (0, oU.d)((0, EU.e)()),
            hasLobbyTab: () => (0, gU.c)((0, EU.e)().mG),
            contextActionInputs: () => {
              var UU, XU, zU, cU;
              const yU = (0, EU.e)();
              return {
                holdingGun: !(null === (UU = yU.xG.izU(yU.pM)) || void 0 === UU || null === (XU = UU.jB) || void 0 === XU || !XU.isGun()),
                customButtons: null !== (zU = yU.mG.customButtons) && void 0 !== zU ? zU : null,
                touchscreenActionButton: null !== (cU = yU.mG.touchscreenActionButton) && void 0 !== cU ? cU : null
              }
            },
            pressTouchButton: UU => {
              (0, FU.sendColyMessage)(yU.bj, UU)
            }
          }
        })()),
        XU = (0, cU.e)(),
        zU = null,
        QU = null;
      return () => {
        UU(), XU(), null === zU || void 0 === zU || zU(), null === QU || void 0 === QU || QU()
      }
    }
  },
  37334: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      i: () => aU,
      l: () => tU,
      o: () => FU,
      r: () => NU,
      t: () => gU,
      v: () => YU,
      w: () => GU,
      x: () => pU,
      y: () => kU
    });
    var cU = zU(27),
      yU = zU(31);
    const QU = "clientGameInventoryButtonsChanged",
      AU = new Map;

    function FU() {
      return [...AU.values()].sort(((UU, XU) => {
        var zU, cU;
        return (null !== (zU = UU.order) && void 0 !== zU ? zU : 0) - (null !== (cU = XU.order) && void 0 !== cU ? cU : 0)
      }))
    }
    let oU = null;

    function DU(UU) {
      oU = UU
    }
    let EU = !1;

    function YU(UU) {
      EU = !0;
      try {
        UU.onClick()
      } finally {
        EU = !1
      }
      UU.panel && "clientGame" === cU.e.get("openInGameMenuName") && DU(UU.id)
    }

    function NU() {
      return EU
    }

    function IU() {
      return FU().filter((UU => UU.panel && !UU.disabled))
    }

    function pU(UU) {
      const XU = IU(),
        zU = XU.findIndex((UU => UU.id === oU));
      return !(zU < 0 || XU.length < 2) && (YU(XU[(zU + UU + XU.length) % XU.length]), !0)
    }

    function aU() {
      return null !== oU && IU().length > 1
    }

    function tU() {
      DU(null)
    }

    function gU() {
      "inventory" !== cU.e.get("openInGameMenuName") && DU(null)
    }

    function kU() {
      const UU = oU;
      return DU(null), UU
    }

    function GU(UU) {
      return AU.set(UU.id, UU), yU.k.UY(QU, FU(), !0), () => {
        AU.get(UU.id) === UU && (AU.delete(UU.id), yU.k.UY(QU, FU()))
      }
    }
  },
  37325: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU,
      h: () => kU,
      j: () => tU,
      l: () => gU,
      n: () => NU,
      o: () => DU,
      r: () => aU,
      t: () => IU,
      u: () => EU
    });
    var cU = zU(27),
      yU = zU(31),
      QU = zU(1310),
      AU = zU(37334);
    const FU = "clientGameUiChanged";
    let oU = null;

    function DU() {
      return oU
    }

    function EU(UU, XU) {
      const zU = {
        content: UU,
        menu: XU
      };
      return oU = zU, yU.k.UY(FU, oU, !0), () => {
        oU === zU && (oU = null, pU = !1, tU(), yU.k.UY(FU, null))
      }
    }
    let YU = null;

    function NU() {
      return YU
    }

    function IU(UU) {
      return YU = UU, () => {
        YU === UU && (YU = null)
      }
    }
    let pU = !1;

    function aU() {
      const UU = cU.e.get("openInGameMenuName");
      "clientGame" !== UU && (pU = "inventory" === UU), (0, AU.r)() || (0, AU.l)(), (0, QU.u)(QU.c), cU.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function tU() {
      GU(!1)
    }

    function gU() {
      GU(pU)
    }

    function kU() {
      pU && GU(!1)
    }

    function GU(UU) {
      "clientGame" === cU.e.get("openInGameMenuName") && cU.e.set({
        openInGameMenuName: UU ? "inventory" : null
      }), UU || (0, AU.l)(), pU = !1
    }
  },
  37203: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => oU
    });
    var cU = zU(320),
      yU = zU(27),
      QU = zU(37211),
      AU = zU(1680),
      FU = zU(2058);

    function oU(UU, XU) {
      var zU, oU, DU;
      if (!yU.e.get("isKeydownEnabled") || UU.repeat) return;
      const EU = UU.code;
      "Escape" === UU.key ? (0, AU.g)(UU) : null !== (zU = FU.w.OpenSettings) && void 0 !== zU && zU.includes(EU) ? (0, AU.x)(UU, cU.s.SETTINGS) : null !== (oU = FU.w.OpenCharacterCustomization) && void 0 !== oU && oU.includes(EU) ? (0, QU.e)() || (0, AU.x)(UU, cU.s.CUSTOMISATION, XU()) : null !== (DU = FU.w.ShowDebugOverlay) && void 0 !== DU && DU.includes(EU) && yU.e.set({
        showDebugOverlay: !yU.e.get("showDebugOverlay")
      })
    }
  },
  39876: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => oU
    });
    var cU = zU(9493),
      yU = zU(37201),
      QU = zU(39882);
    const AU = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      FU = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function oU(UU, XU) {
      if (UU instanceof yU.c) return {
        at: AU[XU],
        code: 0
      };
      const zU = (0, cU.f)(UU),
        oU = "number" === typeof zU ? zU : 0;
      return null !== (0, QU.l)(oU).name ? {
        at: "refused",
        code: oU
      } : {
        at: FU[XU],
        code: oU
      }
    }
  },
  9493: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      f: () => AU,
      h: () => FU,
      j: () => DU,
      n: () => oU
    });
    var cU = zU(212),
      yU = zU(5057);

    function QU(UU) {
      return AU(UU) === cU.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function AU(UU) {
      return "object" === typeof UU && null !== UU ? UU.code : void 0
    }

    function FU(UU) {
      var XU;
      return null !== (XU = Object.keys(yU.b).find((XU => yU.b[XU] === UU))) && void 0 !== XU ? XU : null
    }

    function oU(UU) {
      return "notWhitelisted" === UU ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const DU = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  37181: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => NU,
      h: () => EU,
      i: () => IU,
      l: () => YU
    });
    var cU = zU(344),
      yU = zU(698),
      QU = zU(708),
      AU = zU(42);
    const FU = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      oU = "playSessionGameNameWithVariation",
      DU = "wasMatchmakePlayer";

    function EU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.n;
      (0, QU.k)(UU, FU)
    }

    function YU() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.n).setItem(DU, !0)
    }

    function NU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.n;
      return (0, QU.e)(UU, FU)
    }

    function IU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AU.n;
      const zU = (0, QU.e)(XU, FU),
        EU = function(UU) {
          const XU = UU.getItem(oU);
          return "string" !== typeof XU ? null : XU
        }(XU),
        YU = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.n).getItem(DU)
        }(XU);
      let NU;
      return NU = null !== zU && null !== EU && (0, QU.i)(XU, FU) && function(UU, XU, zU) {
          const yU = (0, cU.Tb)(UU),
            QU = (0, cU.Tb)(XU),
            AU = (0, cU.Nb)(UU),
            FU = (0, cU.Nb)(XU);
          return !(yU !== QU || !zU) || yU === QU && AU === FU
        }(EU, UU, YU) ? zU : (0, yU.d)(), (0, QU.m)(XU, FU, NU), XU.setItem(oU, UU),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.n).removeItem(DU)
        }(XU), NU
    }
  },
  37172: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => ZU,
      g: () => RU
    });
    var cU = zU(1079),
      yU = zU(220),
      QU = zU(337),
      AU = zU(654),
      FU = zU(344),
      oU = zU(1083),
      DU = zU(687),
      EU = zU(730),
      YU = zU(4959),
      NU = zU(97),
      IU = zU(142),
      pU = zU(1800),
      aU = zU(114),
      tU = zU(37181),
      gU = zU(42),
      kU = zU(702),
      GU = zU(661),
      BU = zU(37186);

    function ZU() {
      var UU, XU;
      return [...null !== (UU = navigator.languages) && void 0 !== UU ? UU : [null !== (XU = navigator.language) && void 0 !== XU ? XU : "none"], "en-Gb"]
    }

    function RU(UU, XU, zU, RU, PU) {
      const WU = (0, cU.l)(XU) ? (0, cU.p)(XU) : null,
        dU = UU.isLoggedIn() && void 0 !== (0, yU.b)(QU.l, IU.siteUsed) ? (0, GU.g)() : null,
        LU = {
          cookies: (0, pU.getAllCookiesForGameNameWithVariation)(XU),
          isMobile: (0, NU.isMobile)(),
          isUsingCustomGameTexturePack: null !== WU && PU(WU),
          generalCookies: {
            joinDiscord: !!gU.k.getItem("DiscordPressed"),
            newGo: YU.d,
            ...UU.getMetricsCookies(),
            trafficCode: RU,
            compliance: NU.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, NU.getBrowserName)(),
            version: (0, NU.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, NU.getPlatformType)(),
            deviceType: (0, aU.c)()
          },
          isLoggedIn: UU.isLoggedIn(),
          lobbyName: zU,
          languages: ZU(),
          version: AU.d,
          siteUsed: IU.siteUsed,
          subsiteUsed: IU.subsiteUsed,
          playSessionId: (0, tU.i)(XU),
          visitSessionId: (0, kU.g)(),
          clientReason: DU.s.reason,
          budgetBasis: (0, BU.h)(),
          ...null !== EU.m && {
            diagClaim: EU.m.claimId
          },
          ...null !== dU && {
            webGpuLoss: dU
          }
        };
      return null !== WU && (0, FU.Lc)(WU) ? (LU.lobbyName = (0, cU.h)(WU, (0, cU.n)(XU), zU), {
        roomName: `classic_${oU.d}`,
        joinOptions: LU
      }) : {
        roomName: XU,
        joinOptions: LU
      }
    }
  },
  39882: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU,
      f: () => QU,
      i: () => FU,
      l: () => EU,
      p: () => oU,
      r: () => AU
    });
    var cU = zU(212);
    const yU = 3e3,
      QU = 15e3;

    function AU(UU) {
      const XU = UU.endsWith(cU.m);
      return {
        text: (XU ? UU.slice(0, -cU.m.length) : UU) || null,
        dropsCache: XU
      }
    }
    const FU = "Either your internet isn't working or this is a bug.";

    function oU(UU, XU) {
      const zU = EU(UU);
      return null !== zU.name && "" === cU.e[zU.name].text && null !== XU ? XU : zU.reason
    }
    const DU = "You were removed from the game.";

    function EU(UU) {
      var XU;
      let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const yU = null !== (XU = Object.keys(cU.e).find((XU => cU.e[XU].code === UU))) && void 0 !== XU ? XU : null;
      if (null === yU) return {
        code: UU,
        name: yU,
        reason: null !== zU && void 0 !== zU ? zU : `${FU}\nCode: ${UU}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: QU,
        canReconnect: AU = !1
      } = cU.e[yU], oU = UU === cU.e.outdatedVersion.code || UU === cU.e.loadRecaptchaError.code;
      return {
        code: UU,
        name: yU,
        reason: "" !== QU ? QU : null !== zU && void 0 !== zU ? zU : UU === cU.e.gameOrPluginKick.code ? DU : `Code: ${UU}`,
        canReconnect: AU,
        automaticallyReconnect: UU === cU.e.customGameUpdated.code || UU === cU.e.duplicateLobbyNameError.code,
        requiresRefresh: oU
      }
    }
  },
  39819: (UU, XU, zU) => {
    function cU(UU, XU, zU, cU, yU) {
      var QU = {};
      return Object.keys(cU).forEach((function(UU) {
        QU[UU] = cU[UU]
      })), QU.enumerable = !!QU.enumerable, QU.configurable = !!QU.configurable, ("value" in QU || QU.initializer) && (QU.writable = !0), QU = zU.slice().reverse().reduce((function(zU, cU) {
        return cU(UU, XU, zU) || zU
      }), QU), yU && void 0 !== QU.initializer && (QU.value = QU.initializer ? QU.initializer.call(yU) : void 0, QU.initializer = void 0), void 0 === QU.initializer && (Object.defineProperty(UU, XU, QU), QU = null), QU
    }
    zU.d(XU, {
      d: () => cU
    })
  },
  39812: (UU, XU, zU) => {
    function cU(UU, XU, zU, cU) {
      zU && Object.defineProperty(UU, XU, {
        enumerable: zU.enumerable,
        configurable: zU.configurable,
        writable: zU.writable,
        value: zU.initializer ? zU.initializer.call(cU) : void 0
      })
    }
    zU.d(XU, {
      c: () => cU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
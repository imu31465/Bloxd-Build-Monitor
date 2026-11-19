export const id = 93;
export const ids = [91, 93];
export const modules = {
  38459: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => OY,
      d: () => IY
    });
    var FY = DY(3679);
    let AY = null;

    function IY(YY) {
      return null !== AY && YY === AY
    }

    function RY() {
      this.iJ = !1, this.stopPropagation = !1, this.QJ = !1, this.disabled = !1
    }
    class OY {
      constructor(YY, rY) {
        this.version = "0.7.0";
        var DY = Object.assign({}, new RY, rY || {});
        this.element = YY || document, this.iJ = !!DY.iJ, this.stopPropagation = !!DY.stopPropagation, this.QJ = !!DY.QJ, this.disabled = !!DY.disabled, this.filterEvents = (YY, rY) => !0, this.down = new FY.EventEmitter, this.up = new FY.EventEmitter, this.state = {}, this.mJ = {
          dx: 0,
          dy: 0,
          QYY: 0,
          oYY: 0,
          WYY: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? aY(this) : document.addEventListener("DOMContentLoaded", (YY => {
          aY(this)
        }), {
          once: !0
        })
      }
      bind(YY) {
        for (var rY = arguments.length, DY = new Array(rY > 1 ? rY - 1 : 0), FY = 1; FY < rY; FY++) DY[FY - 1] = arguments[FY];
        DY.forEach((rY => {
          var DY = this._keyBindmap[rY] || [];
          DY.includes(YY) || (DY.push(YY), this._keyBindmap[rY] = DY)
        })), this.state[YY] = !!this.state[YY], this.pressCount[YY] = this.pressCount[YY] || 0, this.releaseCount[YY] = this.releaseCount[YY] || 0
      }
      unbind(YY) {
        for (var rY in this._keyBindmap) {
          var DY = this._keyBindmap[rY],
            FY = DY.indexOf(YY);
          FY > -1 && DY.splice(FY, 1)
        }
      }
      getBindings() {
        var YY = {};
        for (var rY in this._keyBindmap) {
          this._keyBindmap[rY].forEach((DY => {
            YY[DY] = YY[DY] || [], YY[DY].push(rY)
          }))
        }
        return YY
      }
      Zu() {
        gY(this.mJ), gY(this.pressCount), gY(this.releaseCount)
      }
    }

    function gY(YY) {
      for (var rY in YY) YY[rY] = 0
    }

    function aY(YY) {
      window.addEventListener("keydown", oY.bind(null, YY, !0), !1), window.addEventListener("keyup", oY.bind(null, YY, !1), !1);
      var rY = {
        passive: !0
      };
      YY.element.addEventListener("touchstart", iY.bind(void 0, YY), {
        passive: !1
      }), YY.element.addEventListener("touchend", QY.bind(void 0, YY), rY), YY.element.addEventListener("mousedown", WY.bind(null, YY, !0), rY), window.document.addEventListener("mouseup", WY.bind(null, YY, !1), rY), YY.element.addEventListener("touchmove", EY.bind(null, YY), rY), YY.element.addEventListener("mousemove", EY.bind(null, YY), rY), window.PointerEvent, YY.element.addEventListener("wheel", mY.bind(null, YY), rY), YY.element.addEventListener("contextmenu", VY.bind(null, YY), !1), window.addEventListener("blur", TY.bind(null, YY), !1)
    }
    var vY = 0,
      uY = 0,
      sY = null;

    function iY(YY, rY) {
      rY.preventDefault(), yY(rY)
    }

    function yY(YY) {
      let rY = !1;
      for (let DY = 0; DY < YY.touches.length; ++DY)
        if (YY.touches[DY].identifier === sY) {
          rY = !0;
          break
        } if (!rY) {
        const rY = YY.changedTouches[0];
        vY = rY.clientX, uY = rY.clientY, sY = rY.identifier
      }
    }

    function QY(YY, rY) {
      for (var DY = rY.changedTouches, FY = 0; FY < DY.length; ++FY) DY[FY].identifier === sY && (sY = null)
    }

    function oY(YY, rY, DY) {
      try {
        eY(YY, DY), rY && DY.isTrusted && !DY.repeat && YY._keyStates[DY.code] && NY(YY, DY.code)
      } finally {
        BY(DY.code, rY, YY, DY)
      }
    }

    function WY(YY, rY, DY) {
      try {
        eY(YY, DY)
      } finally {
        ! function(YY, rY, DY) {
          if ("pointerId" in DY)
            if (rY) {
              if (null !== YY._touches.currID) return;
              YY._touches.currID = DY.pointerId
            } else {
              if (YY._touches.currID !== DY.pointerId) return;
              YY._touches.currID = null
            } var FY = "button" in DY ? DY.button + 1 : 1;
          BY("Mouse" + FY, rY, YY, DY)
        }(YY, rY, DY)
      }
    }

    function EY(YY, rY) {
      var DY = rY.movementX || rY.mozMovementX || 0,
        FY = rY.movementY || rY.mozMovementY || 0;
      if (rY.touches && 0 === (DY | FY)) {
        var AY = function(YY) {
          yY(YY);
          for (let rY = 0; rY < YY.changedTouches.length; ++rY)
            if (YY.changedTouches[rY].identifier == sY) {
              const DY = YY.changedTouches[rY],
                FY = [DY.clientX - vY, DY.clientY - uY];
              return vY = DY.clientX, uY = DY.clientY, FY
            } return console.error(`Did not find touch id ${sY}`), [0, 0]
        }(rY);
        DY = AY[0], FY = AY[1]
      }
      YY.mJ.dx += DY, YY.mJ.dy += FY
    }

    function mY(YY, rY) {
      eY(YY, rY);
      var DY = 1;
      switch (rY.deltaMode) {
        case 0:
          DY = 1;
          break;
        case 1:
          DY = 12;
          break;
        case 2:
          DY = YY.element.clientHeight || window.innerHeight
      }
      YY.mJ.QYY += (rY.deltaX || 0) * DY, YY.mJ.oYY += (rY.deltaY || 0) * DY, YY.mJ.WYY += (rY.deltaZ || 0) * DY
    }

    function VY(YY, rY) {
      if (!YY.QJ) return rY.preventDefault(), !1
    }
    var SY = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function lY(YY, rY) {
      return !!YY[SY[rY]] || ("AltRight" === rY || "ControlLeft" === rY) && "function" === typeof YY.getModifierState && !0 === YY.getModifierState("AltGraph")
    }

    function TY(YY, rY) {
      for (var DY in YY._modifiersHeldThroughBlur = {}, SY) YY._keyStates[DY] && (YY._modifiersHeldThroughBlur[DY] = !0);
      rY && rY.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (YY) {
          return !0
        }
      }() && (clearTimeout(YY._blurRelease), YY._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var rY in YY._modifiersHeldThroughBlur = {}, YY._keyStates) YY._keyStates[rY] && !/^Mouse\d/.test(rY) && NY(YY, rY)
      }), 0))
    }

    function eY(YY, rY) {
      var DY = YY._modifiersHeldThroughBlur;
      if (DY && rY.isTrusted && document.hasFocus())
        for (var FY in DY) delete DY[FY], YY._keyStates[FY] && FY !== rY.code && (lY(rY, FY) || NY(YY, FY))
    }

    function NY(YY, rY) {
      const DY = {
          code: rY,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        FY = AY;
      AY = DY;
      try {
        BY(rY, !1, YY, DY)
      } finally {
        AY = FY
      }
    }

    function BY(YY, rY, DY, FY) {
      var AY = DY._keyBindmap[YY];
      AY && (cY(DY._keyStates[YY], rY) && (DY._keyStates[YY] = rY, AY.forEach((YY => {
        (!DY.filterEvents || DY.filterEvents(FY, YY)) && function(YY, rY, DY, FY) {
          var AY = rY ? DY.pressCount : DY.releaseCount;
          AY[YY] = (AY[YY] || 0) + 1;
          var IY = DY._bindPressCount[YY] || 0;
          (IY += rY ? 1 : -1) < 0 && (IY = 0);
          DY._bindPressCount[YY] = IY;
          var RY = DY.state[YY];
          if (cY(RY, IY)) {
            DY.state[YY] = IY > 0;
            var OY = rY ? DY.down : DY.up;
            DY.disabled || OY.emit(YY, FY)
          }
        }(YY, rY, DY, FY)
      }))), "button" in FY || (DY.iJ && !FY.defaultPrevented && FY.preventDefault(), DY.stopPropagation && FY.stopPropagation()))
    }

    function cY(YY, rY) {
      return YY ? !rY : rY
    }
  },
  36114: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => iY,
      g: () => yY
    });
    var FY = DY(61),
      AY = DY(2620),
      IY = DY(1430),
      RY = DY(1834),
      OY = DY(36052),
      gY = DY(625),
      aY = DY(1092),
      vY = DY.n(aY),
      uY = DY(1125);
    const sY = {},
      iY = (0, FY.memo)((function() {
        const YY = (0, AY.c)();
        return (0, IY.g)("damagedByOtherPlayer", (rY => {
          let {
            QF: DY,
            direction: FY
          } = rY;
          const AY = DY || "nonDirectional";
          if (sY[AY]) {
            const rY = sY[AY];
            clearTimeout(rY.timeout), rY.direction = FY, rY.timeout = setTimeout((() => {
              delete sY[AY], YY()
            }), 800)
          } else sY[AY] = {
            direction: FY,
            DH: null,
            timeout: setTimeout((() => {
              delete sY[AY], YY()
            }), 800)
          };
          YY()
        })), (0, RY.c)("kill", (rY => {
          let {
            killer: DY,
            victim: FY
          } = rY;
          const AY = FY.id;
          DY.local && AY && AY in sY && (clearTimeout(sY[AY].timeout), delete sY[AY], YY())
        })), (0, FY.useEffect)((() => {
          const YY = (0, OY.g)("turnDamageIndicators", yY);
          return () => {
            YY();
            for (const YY in sY) clearTimeout(sY[YY].timeout), delete sY[YY]
          }
        }), []), (0, uY.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(sY).map((YY => {
            let [rY, DY] = YY;
            const FY = (0, gY.H)(DY.direction);
            return (0, uY.jsx)("div", {
              ref: YY => {
                sY[rY] && (sY[rY].DH = YY)
              },
              className: vY()("DamageIndicator", {
                DamageIndicatorFullCircle: FY
              })
            }, rY)
          }))
        })
      }));

    function yY(YY) {
      for (const rY in sY) {
        const {
          direction: DY,
          DH: FY
        } = sY[rY];
        if ((0, gY.H)(DY)) continue;
        const AY = DY - YY;
        FY.style.rotate = `${AY}rad`
      }
    }
  },
  36048: (YY, rY, DY) => {
    function FY(YY, rY, DY, FY) {
      return !(DY && !YY.aimable) && (!rY || YY.gun && "head" !== FY)
    }

    function AY(YY) {
      return Math.max(.1 * YY, 1)
    }

    function IY(YY, rY) {
      return !YY && rY
    }
    DY.d(rY, {
      c: () => IY,
      g: () => AY,
      i: () => FY
    })
  },
  36052: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => OY,
      g: () => RY
    });
    let FY = null;
    const AY = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      IY = {
        crosshairAccuracy: YY => {
          const rY = AY.crosshairAccuracy.at(-1);
          rY ? rY.hook(YY) : FY = YY
        },
        turnDamageIndicators: YY => {
          var rY;
          null === (rY = AY.turnDamageIndicators.at(-1)) || void 0 === rY || rY.hook(YY)
        }
      };

    function RY(YY, rY) {
      const DY = {
          hook: rY
        },
        RY = AY[YY];
      if (RY.push(DY), "crosshairAccuracy" === YY && null !== FY) {
        const YY = FY;
        FY = null, IY.crosshairAccuracy(YY)
      }
      return () => {
        const YY = RY.indexOf(DY); - 1 !== YY && RY.splice(YY, 1)
      }
    }

    function OY() {
      return IY
    }
  },
  35928: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => AY,
      i: () => IY
    });
    let FY = !1;

    function AY() {
      return FY
    }

    function IY(YY) {
      return FY !== YY && (FY = YY, !0)
    }
  },
  8680: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY,
      g: () => AY
    });
    var FY = DY(19);

    function AY(YY, rY) {
      return YY && !rY
    }

    function IY() {
      return AY(FY.b.get("isTouchScreen"), FY.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  39770: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      startPadGameplay: () => VY
    });
    DY(39651);
    var FY = DY(39658),
      AY = DY(3366),
      IY = DY(19),
      RY = DY(38433),
      OY = DY(3289),
      gY = DY(38449),
      aY = DY(25),
      vY = DY(2501),
      uY = DY(37817),
      sY = DY(8263),
      iY = DY(39663);
    const yY = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var QY = DY(39677),
      oY = DY(8248);
    const WY = YY => YY.padSneakToggled || !!IY.b.get("clientEscMenuOptions").crouchIsToggle && YY.crouchToggled,
      EY = () => {
        const YY = (() => {
          const YY = (0, sY.e)();
          let rY = yY;
          const DY = new iY.c;
          let FY = !1,
            AY = 0;
          const IY = () => {
            const DY = performance.now(),
              IY = 0 === AY ? 0 : DY - AY;
            if (AY = DY, !FY) return YY.discardPending(), null;
            const RY = (0, iY.m)(rY, IY),
              OY = YY.drainLookDelta(),
              gY = (0, uY.i)();
            return {
              Tl: (RY.Tl + OY.Tl) * gY,
              Bl: (RY.Bl + OY.Bl) * gY
            }
          };
          return {
            update: (YY, AY, RY, OY) => {
              YY.camera.EX !== IY && (YY.camera.EX = IY), FY = !0, rY = (0, iY.n)(DY, AY, RY, OY, performance.now())
            },
            release: () => {
              FY = !1, rY = yY, DY.reset()
            },
            uninstall: YY => {
              YY.camera.EX === IY && (YY.camera.EX = null)
            }
          }
        })();
        return {
          update: (rY, DY, FY) => {
            YY.update((0, vY.e)(), rY, DY, FY)
          },
          release: YY.release,
          uninstall: () => {
            const rY = (0, vY.e)();
            rY && YY.uninstall(rY)
          }
        }
      };
    var mY = DY(39674);
    DY(36999), DY(8126);
    DY(8146).e;
    const VY = () => {
      const YY = (0, mY.b)((() => {
          const YY = {
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
            bodies: () => (0, RY.b)(),
            look: EY(),
            move: (rY, DY) => {
              const FY = (0, vY.e)(),
                AY = FY.Am.RrY();
              if (YY.x = rY.x, YY.y = rY.y, YY.magnitude = rY.magnitude, YY.headingOffset = rY.headingOffset, YY.jumpHeld = rY.jumpHeld, rY.jumpPressed && (YY.jumpPressedSinceTick = !0), YY.running = rY.running, YY.sprintHeld = rY.sprintHeld, DY) {
                const rY = (0, QY.e)({
                  ...DY,
                  descending: FY.Am.uYY(FY.yB).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!FY.pE.canCrouch,
                  toggled: WY(AY)
                });
                YY.crouchHeld = rY.crouchHeld, AY.padSneakToggled = rY.toggled, AY.crouchToggled = !1, (0, oY.g)(rY.toggled)
              }
              AY.gamepad = YY
            },
            stopMoving: () => {
              var rY;
              Object.assign(YY, {
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
              const DY = null === (rY = (0, vY.e)()) || void 0 === rY ? void 0 : rY.Am.RrY();
              (null === DY || void 0 === DY ? void 0 : DY.gamepad) === YY && (DY.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: YY => {
              const rY = (0, vY.e)(),
                DY = null === rY || void 0 === rY ? void 0 : rY.Am.RrY();
              "touch" === YY ? ((0, oY.g)(!1), null !== DY && void 0 !== DY && DY.padSneakToggled && (DY.padSneakToggled = !1, DY.isTouchscreen && !DY.gamepad && rY.Am.ZYY(rY.yB).setCrouching(!!rY.pE.canCrouch && DY.touchCrouch))) : "gamepad" === YY && DY && (0, oY.g)(WY(DY))
            },
            hasPlayer: () => {
              var YY;
              return !(null === (YY = (0, vY.e)()) || void 0 === YY || !YY.yB)
            },
            isPlayerDead: () => {
              var YY;
              const rY = (0, vY.e)();
              return !1 === (null === (YY = rY.Am.tYY(rY.yB)) || void 0 === YY ? void 0 : YY.isAlive)
            },
            isReplayMode: () => {
              var YY, rY;
              return !(null === (YY = (0, vY.c)()) || void 0 === YY || null === (rY = YY.client) || void 0 === rY || !rY.isReplayMode())
            },
            isFreeCameraOn: () => {
              var YY, rY, DY;
              return !(null === (YY = (0, vY.c)()) || void 0 === YY || null === (rY = YY.client) || void 0 === rY || null === (DY = rY.freeCameraController) || void 0 === DY || !DY.isEnabled())
            },
            targetsBlock: () => !!(0, vY.e)().o4,
            selectedSlotEmpty: () => {
              var YY;
              const rY = (0, vY.e)();
              return !(null !== (YY = rY.Am.fYY(rY.yB)) && void 0 !== YY && YY.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const YY = (0, vY.e)().pE;
              return !!YY.creative && !!YY.canPickBlocks
            },
            scrollHotbar: YY => {
              aY.g.vo("ScrollInventorySlot", YY)
            },
            hasFullInventory: () => (0, gY.e)((0, vY.e)()),
            hasLobbyLeaderboard: () => !!(0, vY.e)().pE.lobbyLeaderboardInfo,
            contextActionInputs: () => {
              var YY, rY, DY, FY;
              const AY = (0, vY.e)();
              return {
                holdingGun: !(null === (YY = AY.Am.YrY(AY.yB)) || void 0 === YY || null === (rY = YY.RV) || void 0 === rY || !rY.isGun()),
                customButtons: null !== (DY = AY.pE.customButtons) && void 0 !== DY ? DY : null,
                touchscreenActionButton: null !== (FY = AY.pE.touchscreenActionButton) && void 0 !== FY ? FY : null
              }
            },
            pressTouchButton: YY => {
              (0, OY.sendColyMessage)(AY.lj, YY)
            }
          }
        })()),
        rY = (0, FY.e)(),
        DY = null,
        IY = null;
      return () => {
        YY(), rY(), null === DY || void 0 === DY || DY(), null === IY || void 0 === IY || IY()
      }
    }
  },
  36034: (YY, rY, DY) => {
    DY.d(rY, {
      C: () => EY,
      e: () => IY,
      i: () => QY,
      l: () => oY,
      n: () => OY,
      r: () => sY,
      t: () => WY,
      v: () => uY,
      x: () => mY,
      y: () => yY
    });
    var FY = DY(19),
      AY = DY(25);
    const IY = "clientGameInventoryButtonsChanged",
      RY = new Map;

    function OY() {
      return [...RY.values()].sort(((YY, rY) => {
        var DY, FY;
        return (null !== (DY = YY.order) && void 0 !== DY ? DY : 0) - (null !== (FY = rY.order) && void 0 !== FY ? FY : 0)
      }))
    }
    let gY = null;

    function aY(YY) {
      gY = YY
    }
    let vY = !1;

    function uY(YY) {
      vY = !0;
      try {
        YY.onClick()
      } finally {
        vY = !1
      }
      YY.panel && "clientGame" === FY.b.get("openInGameMenuName") && aY(YY.id)
    }

    function sY() {
      return vY
    }

    function iY() {
      return OY().filter((YY => YY.panel && !YY.disabled))
    }

    function yY(YY) {
      const rY = iY(),
        DY = rY.findIndex((YY => YY.id === gY));
      return !(DY < 0 || rY.length < 2) && (uY(rY[(DY + YY + rY.length) % rY.length]), !0)
    }

    function QY() {
      return null !== gY && iY().length > 1
    }

    function oY() {
      aY(null)
    }

    function WY() {
      "inventory" !== FY.b.get("openInGameMenuName") && aY(null)
    }

    function EY() {
      const YY = gY;
      return aY(null), YY
    }

    function mY(YY) {
      return RY.set(YY.id, YY), AY.g.vo(IY, OY(), !0), () => {
        RY.get(YY.id) === YY && (RY.delete(YY.id), AY.g.vo(IY, OY()))
      }
    }
  },
  36032: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => OY,
      f: () => oY,
      h: () => WY,
      j: () => sY,
      n: () => aY,
      o: () => QY,
      p: () => iY,
      q: () => vY
    });
    var FY = DY(19),
      AY = DY(25),
      IY = DY(1287),
      RY = DY(36034);
    const OY = "clientGameUiChanged";
    let gY = null;

    function aY() {
      return gY
    }

    function vY(YY, rY) {
      const DY = {
        content: YY,
        menu: rY
      };
      return gY = DY, AY.g.vo(OY, gY, !0), () => {
        gY === DY && (gY = null, yY = !1, oY(), AY.g.vo(OY, null))
      }
    }
    let uY = null;

    function sY() {
      return uY
    }

    function iY(YY) {
      return uY = YY, () => {
        uY === YY && (uY = null)
      }
    }
    let yY = !1;

    function QY() {
      const YY = FY.b.get("openInGameMenuName");
      "clientGame" !== YY && (yY = "inventory" === YY), (0, RY.r)() || (0, RY.l)(), (0, IY.k)(IY.d), FY.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function oY() {
      EY(!1)
    }

    function WY() {
      EY(yY)
    }

    function EY(YY) {
      "clientGame" === FY.b.get("openInGameMenuName") && FY.b.set({
        openInGameMenuName: YY ? "inventory" : null
      }), YY || (0, RY.l)(), yY = !1
    }
  },
  35921: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => gY
    });
    var FY = DY(332),
      AY = DY(19),
      IY = DY(35928),
      RY = DY(1619),
      OY = DY(1851);

    function gY(YY, rY) {
      var DY, gY, aY;
      if (!AY.b.get("isKeydownEnabled") || YY.repeat) return;
      const vY = YY.code;
      "Escape" === YY.key ? (0, RY.h)(YY) : null !== (DY = OY.u.OpenSettings) && void 0 !== DY && DY.includes(vY) ? (0, RY.v)(YY, FY.t.SETTINGS) : null !== (gY = OY.u.OpenCharacterCustomization) && void 0 !== gY && gY.includes(vY) ? (0, IY.e)() || (0, RY.v)(YY, FY.t.CUSTOMISATION, rY()) : null !== (aY = OY.u.ShowDebugOverlay) && void 0 !== aY && aY.includes(vY) && AY.b.set({
        showDebugOverlay: !AY.b.get("showDebugOverlay")
      })
    }
  },
  4434: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      Howl: () => AY.Howl,
      Howler: () => AY.Howler,
      iosAudio: () => gY,
      musicOutput: () => oY,
      readyAudioContext: () => WY
    });
    var FY, AY = DY(4438),
      IY = DY(99);
    const RY = AY.Howler;
    let OY;

    function gY() {
      return OY ??= "ios" === (0, IY.getOperatingSystem)(), OY
    }

    function aY() {
      var YY, rY;
      if (RY.ctx || !RY.usingWebAudio || "undefined" === typeof AudioContext || !gY()) return;
      const DY = navigator.audioSession;
      let FY;
      "auto" === (null === DY || void 0 === DY ? void 0 : DY.type) && (DY.type = "ambient");
      try {
        FY = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const AY = FY.createGain();
      AY.gain.setValueAtTime(RY._muted ? 0 : null !== (YY = RY._volume) && void 0 !== YY ? YY : 1, FY.currentTime), AY.connect(FY.destination), RY.ctx = FY, RY.masterGain = AY, null === (rY = RY._setup) || void 0 === rY || rY.call(RY)
    }
    RY._mobileUnloaded = !0;
    const vY = RY.volume.bind(AY.Howler);
    RY.volume = function() {
      return aY(), vY(...arguments)
    };
    const uY = RY.mute.bind(AY.Howler);
    RY.mute = YY => (aY(), uY(YY));
    const sY = AY.Howl.prototype,
      iY = sY.init;
    sY.init = function(YY) {
      return aY(), iY.call(this, YY)
    };
    let yY = 0;
    const QY = null === (FY = RY._autoSuspend) || void 0 === FY ? void 0 : FY.bind(AY.Howler);

    function oY() {
      WY();
      const {
        ctx: YY,
        masterGain: rY
      } = RY;
      return YY && rY ? {
        ctx: YY,
        destination: rY,
        holdAwake: YY => {
          var rY, DY;
          (yY += YY ? 1 : -1, YY) ? null === (rY = RY._autoResume) || void 0 === rY || rY.call(RY): null === (DY = RY._autoSuspend) || void 0 === DY || DY.call(RY)
        },
        wake: () => {
          var rY;
          "running" !== YY.state && (null === (rY = RY._autoResume) || void 0 === rY || rY.call(RY), YY.resume().catch((() => {})))
        }
      } : null
    }

    function WY() {
      var YY;
      (RY.volume(), RY.ctx && RY.autoUnlock) && (null === (YY = RY._unlockAudio) || void 0 === YY || YY.call(RY))
    }
    QY && (RY._autoSuspend = () => yY > 0 ? AY.Howler : QY())
  },
  35903: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => sY,
      c: () => vY,
      d: () => iY,
      f: () => uY
    });
    var FY = DY(341),
      AY = DY(662),
      IY = DY(674),
      RY = DY(40);
    const OY = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      gY = "playSessionGameNameWithVariation",
      aY = "wasMatchmakePlayer";

    function vY() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RY.q;
      (0, IY.i)(YY, OY)
    }

    function uY() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RY.q).setItem(aY, !0)
    }

    function sY() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RY.q;
      return (0, IY.b)(YY, OY)
    }

    function iY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RY.q;
      const DY = (0, IY.b)(rY, OY),
        vY = function(YY) {
          const rY = YY.getItem(gY);
          return "string" !== typeof rY ? null : rY
        }(rY),
        uY = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RY.q).getItem(aY)
        }(rY);
      let sY;
      return sY = null !== DY && null !== vY && (0, IY.e)(rY, OY) && function(YY, rY, DY) {
          const AY = (0, FY.Pb)(YY),
            IY = (0, FY.Pb)(rY),
            RY = (0, FY.Kb)(YY),
            OY = (0, FY.Kb)(rY);
          return !(AY !== IY || !DY) || AY === IY && RY === OY
        }(vY, YY, uY) ? DY : (0, AY.b)(), (0, IY.j)(rY, OY, sY), rY.setItem(gY, YY),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RY.q).removeItem(aY)
        }(rY), sY
    }
  },
  35894: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => EY,
      d: () => mY
    });
    var FY = DY(1057),
      AY = DY(631),
      IY = DY(341),
      RY = DY(1064),
      OY = DY(649),
      gY = DY(680),
      aY = DY(4070),
      vY = DY(99),
      uY = DY(144),
      sY = DY(1699),
      iY = DY(117),
      yY = DY(35903),
      QY = DY(40),
      oY = DY(668),
      WY = DY(35907);

    function EY() {
      var YY, rY;
      return [...null !== (YY = navigator.languages) && void 0 !== YY ? YY : [null !== (rY = navigator.language) && void 0 !== rY ? rY : "none"], "EN-gb"]
    }

    function mY(YY, rY, DY, mY, VY) {
      const SY = (0, FY.l)(rY) ? (0, FY.r)(rY) : null,
        lY = {
          cookies: (0, sY.getAllCookiesForGameNameWithVariation)(rY),
          isMobile: (0, vY.isMobile)(),
          isUsingCustomGameTexturePack: null !== SY && VY(SY),
          generalCookies: {
            joinDiscord: !!QY.m.getItem("DiscordPressed"),
            newGo: aY.d,
            ...YY.getMetricsCookies(),
            trafficCode: mY,
            compliance: vY.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, vY.getBrowserName)(),
            version: (0, vY.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, vY.getPlatformType)(),
            deviceType: (0, iY.d)()
          },
          isLoggedIn: YY.isLoggedIn(),
          lobbyName: DY,
          languages: EY(),
          version: AY.d,
          siteUsed: uY.s,
          subsiteUsed: uY.C,
          playSessionId: (0, yY.d)(rY),
          visitSessionId: (0, oY.d)(),
          clientReason: OY.i.reason,
          budgetBasis: (0, WY.e)(),
          ...null !== gY.p && {
            diagClaim: gY.p.claimId
          }
        };
      return null !== SY && (0, IY.Cc)(SY) ? (lY.lobbyName = (0, FY.i)(SY, (0, FY.p)(rY), DY), {
        roomName: `classic_${RY.f}`,
        joinOptions: lY
      }) : {
        roomName: rY,
        joinOptions: lY
      }
    }
  },
  36167: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY,
      f: () => AY,
      j: () => FY
    });

    function FY(YY) {
      return YY.replace(/[_\-\s]*\d+$/, "") || YY
    }

    function AY(YY, rY, DY) {
      return DY <= 0 ? 0 : YY * DY / Math.max(rY, DY)
    }

    function IY(YY, rY) {
      const DY = YY.getDurationMs();
      return DY > 0 ? YY.loudness * Math.max(0, 1 - (rY - YY.startMs) / DY) : 0
    }
    class RY {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = YY, this.maxPerGroup = rY, this.voices = []
      }
      admit(YY) {
        if (this.voices = this.voices.filter((YY => YY.isAlive())), null !== YY.group) {
          const rY = this.voices.filter((rY => rY.group === YY.group));
          if (rY.length >= this.maxPerGroup && !this.dropLeastWorth(rY, YY)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, YY)) && (this.voices.push(YY), !0)
      }
      dropLeastWorth(YY, rY) {
        let DY = null,
          FY = 1 / 0;
        for (const AY of YY) {
          if (!AY.canStop()) continue;
          const YY = IY(AY, rY.startMs);
          YY < FY && (DY = AY, FY = YY)
        }
        return !(!DY || rY.loudness < FY) && (this.voices.splice(this.voices.indexOf(DY), 1), DY.stop(), !0)
      }
    }
  },
  35916: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY,
      f: () => AY,
      g: () => IY
    });
    const FY = 1024,
      AY = 1024 * FY;

    function IY(YY) {
      return (YY / AY).toFixed(1)
    }
  },
  35913: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => IY,
      f: () => OY,
      h: () => RY,
      l: () => gY,
      n: () => aY
    });
    var FY = DY(213);
    const AY = 32 * DY(35916).f,
      IY = 6144,
      RY = 4608,
      OY = 512;

    function gY(YY) {
      return Math.floor(AY * YY / IY)
    }

    function aY(YY) {
      const rY = YY - Math.floor(YY / 6);
      let DY = FY.d.maxChunkHorizAddDistance,
        AY = FY.d.maxChunkVertAddDistance;
      if (vY(DY + 1, AY + 1) <= rY) return null;
      for (; vY(DY + 1, AY + 1) > rY && (DY > 0 || AY > 0);) DY > AY ? DY-- : AY--;
      return {
        horizontal: DY,
        vertical: AY
      }
    }

    function vY(YY, rY) {
      const DY = Math.max(YY, rY);
      let FY = 0;
      for (let AY = -DY; AY <= DY; AY++)
        for (let IY = -DY; IY <= DY; IY++)
          for (let RY = -DY; RY <= DY; RY++) uY(YY, rY, AY, IY, RY) && FY++;
      return FY
    }

    function uY(YY, rY, DY, FY, AY) {
      const IY = DY * DY + AY * AY;
      return YY === rY ? IY + FY * FY <= YY * YY : YY > rY ? Math.abs(FY) <= rY && IY + FY * FY <= YY * YY : IY <= YY * YY && IY + FY * FY <= rY * rY
    }
  },
  35907: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => lY,
      e: () => SY,
      h: () => VY
    });
    var FY = DY(213),
      AY = DY(99),
      IY = DY(2575),
      RY = DY(3942),
      OY = DY(656),
      gY = DY(35913);
    const aY = 1048576,
      vY = 1024 * aY,
      uY = 400 * aY,
      sY = 147456,
      iY = .5,
      yY = 1.5 * vY,
      QY = 768 * aY;

    function oY(YY) {
      return uY + YY * sY
    }

    function WY(YY, rY, DY) {
      var AY, RY;
      let {
        footprintBytes: OY,
        basis: aY,
        namesLimit: WY
      } = function(YY) {
        const {
          os: rY,
          deviceMemory: DY
        } = YY;
        if ("ios" === rY) switch ((0, IY.e)(YY)) {
          case "ipad_m":
            return {
              footprintBytes: oY(gY.b), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: QY, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: yY, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: QY, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof DY && Number.isFinite(DY) && DY > 0 ? {
          footprintBytes: DY * vY * iY,
          basis: `memory-${DY}`,
          namesLimit: !0
        } : "android" === rY ? {
          footprintBytes: QY,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: oY(gY.h),
          basis: "unreported",
          namesLimit: !1
        }
      }(YY);
      if (DY) {
        const YY = Math.min(OY, oY(gY.b));
        OY = uY + Math.max(0, YY - uY) / 2, aY += "+killed", WY = !0
      }
      null !== rY && oY(rY) < OY && (OY = oY(rY), aY += "+learned", WY = !0);
      const EY = function(YY) {
          const rY = Math.floor((YY - uY) / sY);
          return Math.min(gY.b, Math.max(gY.f, rY))
        }(OY),
        mY = (0, gY.n)(EY);
      return {
        footprintBytes: OY,
        shedFootprintBytes: WY ? Math.max(OY, oY(EY)) : null,
        chunkCap: EY,
        maxHorizDistance: null !== (AY = null === mY || void 0 === mY ? void 0 : mY.horizontal) && void 0 !== AY ? AY : FY.d.maxChunkHorizAddDistance,
        maxVertDistance: null !== (RY = null === mY || void 0 === mY ? void 0 : mY.vertical) && void 0 !== RY ? RY : FY.d.maxChunkVertAddDistance,
        basis: aY
      }
    }
    let EY = null;

    function mY() {
      return WY({
        os: (0, AY.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, IY.h)()
      }, (0, RY.f)(), (0, OY.A)("wasm").length > 0)
    }

    function VY() {
      return EY ??= mY(), EY
    }

    function SY() {
      var YY;
      return (null !== (YY = EY) && void 0 !== YY ? YY : mY()).basis
    }

    function lY(YY, rY) {
      return YY.setChunkCap(rY.chunkCap)
    }
  },
  36178: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY,
      g: () => RY,
      j: () => FY
    });
    class FY {
      constructor(YY) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = YY
      }
      setMultiplierType(YY, rY) {
        var DY;
        this.multipliers[YY] = rY, null === (DY = this._onUpdate) || void 0 === DY || DY.call(this)
      }
      removeMultiplier(YY) {
        var rY;
        delete this.multipliers[YY], null === (rY = this._onUpdate) || void 0 === rY || rY.call(this)
      }
      getMultiplierType(YY) {
        return this.multipliers[YY]
      }
      getTotalMultipliedVal() {
        let YY = 1;
        for (const rY in this.multipliers) YY *= this.multipliers[rY];
        return YY
      }
    }
    class AY {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = YY
      }
      setBooleanType(YY, rY) {
        const DY = this._getTotalBooleanVal();
        this.booleans[YY] = !!rY;
        const FY = this.getTotalBooleanVal();
        var AY;
        FY !== DY && (null === (AY = this._onUpdate) || void 0 === AY || AY.call(this, FY, this.booleans));
        return FY
      }
      removeBoolean(YY) {
        const rY = this._getTotalBooleanVal();
        delete this.booleans[YY];
        const DY = this._getTotalBooleanVal();
        var FY;
        null !== DY && DY !== rY && (null === (FY = this._onUpdate) || void 0 === FY || FY.call(this, DY, this.booleans));
        return null !== DY && void 0 !== DY && DY
      }
      getBooleanType(YY) {
        return this.booleans[YY]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var YY;
        null === (YY = this._onUpdate) || void 0 === YY || YY.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class IY extends AY {
      getTotalBooleanVal() {
        const YY = this._getTotalBooleanVal();
        if (null === YY) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return YY
      }
      _getTotalBooleanVal() {
        let YY = !1,
          rY = !0;
        for (const DY in this.booleans) YY = !0, rY &&= this.booleans[DY];
        return YY ? rY : null
      }
    }
    class RY extends AY {
      getTotalBooleanVal() {
        const YY = this._getTotalBooleanVal();
        if (null === YY) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return YY
      }
      _getTotalBooleanVal() {
        let YY = !1,
          rY = !1;
        for (const DY in this.booleans) YY = !0, rY ||= this.booleans[DY];
        return YY ? rY : null
      }
    }
  },
  36174: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY,
      e: () => FY,
      g: () => AY
    });
    const FY = 15,
      AY = 3,
      IY = 30
  },
  36244: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY,
      d: () => IY,
      f: () => sY,
      j: () => OY,
      k: () => gY,
      o: () => aY,
      p: () => uY,
      t: () => vY,
      u: () => RY
    });
    var FY = DY(1244);
    let AY = function(YY) {
        return YY[YY.Join = 0] = "Join", YY[YY.Leave = 1] = "Leave", YY[YY.Push = 2] = "Push", YY[YY.Cursor = 3] = "Cursor", YY[YY.Submit = 4] = "Submit", YY[YY.ReloadAsVariation = 5] = "ReloadAsVariation", YY[YY.CreateFile = 6] = "CreateFile", YY[YY.RenameFile = 7] = "RenameFile", YY[YY.DeleteFile = 8] = "DeleteFile", YY[YY.SetEngine = 9] = "SetEngine", YY[YY.RenameFolder = 10] = "RenameFolder", YY
      }({}),
      IY = function(YY) {
        return YY[YY.Joined = 0] = "Joined", YY[YY.Updates = 1] = "Updates", YY[YY.Presence = 2] = "Presence", YY[YY.RemoteCursor = 3] = "RemoteCursor", YY[YY.ForceClose = 4] = "ForceClose", YY[YY.LobbyFilesChanged = 5] = "LobbyFilesChanged", YY[YY.EngineSettings = 6] = "EngineSettings", YY
      }({});

    function RY(YY) {
      return "lobby" === YY.kind ? `lobby:${YY.path}` : `codeBlock:${YY.pos[0]},${YY.pos[1]},${YY.pos[2]}`
    }

    function OY(YY) {
      if ("lobby" === YY) return {
        kind: "lobby",
        path: FY.e
      };
      if (YY.startsWith("lobby:")) {
        const rY = YY.slice(6);
        return uY(rY) ? {
          kind: "lobby",
          path: rY
        } : null
      }
      const rY = YY.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return rY ? {
        kind: "codeBlock",
        pos: [parseInt(rY[1]), parseInt(rY[2]), parseInt(rY[3])]
      } : null
    }

    function gY(YY) {
      return YY.endsWith(".d.ts")
    }

    function aY(YY) {
      return YY.endsWith(".ts") && !gY(YY)
    }
    const vY = 64;

    function uY(YY) {
      if (!YY || YY !== YY.trim()) return !1;
      if (YY.length > vY) return !1;
      if (YY.startsWith("/") || YY.includes("\\") || YY.includes("\0")) return !1;
      if (!gY(YY) && !aY(YY) && ! function(YY) {
          return YY.endsWith(".js") && !YY.endsWith(".min.js") && !YY.endsWith(".bundle.js")
        }(YY)) return !1;
      const rY = YY.split("/");
      for (const DY of rY)
        if ("" === DY || "." === DY || ".." === DY) return !1;
      return !0
    }
    const sY = 14e3
  },
  38394: (YY, rY, DY) => {
    function FY(YY, rY, DY, FY, AY) {
      var IY = {};
      return Object.keys(FY).forEach((function(YY) {
        IY[YY] = FY[YY]
      })), IY.enumerable = !!IY.enumerable, IY.configurable = !!IY.configurable, ("value" in IY || IY.initializer) && (IY.writable = !0), IY = DY.slice().reverse().reduce((function(DY, FY) {
        return FY(YY, rY, DY) || DY
      }), IY), AY && void 0 !== IY.initializer && (IY.value = IY.initializer ? IY.initializer.call(AY) : void 0, IY.initializer = void 0), void 0 === IY.initializer && (Object.defineProperty(YY, rY, IY), IY = null), IY
    }
    DY.d(rY, {
      e: () => FY
    })
  },
  38389: (YY, rY, DY) => {
    function FY(YY, rY, DY, FY) {
      DY && Object.defineProperty(YY, rY, {
        enumerable: DY.enumerable,
        configurable: DY.configurable,
        writable: DY.writable,
        value: DY.initializer ? DY.initializer.call(FY) : void 0
      })
    }
    DY.d(rY, {
      b: () => FY
    })
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);
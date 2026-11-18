export const id = 87;
export const ids = [85, 87];
export const modules = {
  38049: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => JB,
      h: () => pB
    });
    var VB = dB(3579);
    let yB = null;

    function pB(BB) {
      return null !== yB && BB === yB
    }

    function lB() {
      this.YC = !1, this.stopPropagation = !1, this.gC = !1, this.disabled = !1
    }
    class JB {
      constructor(BB, TB) {
        this.version = "0.7.0";
        var dB = Object.assign({}, new lB, TB || {});
        this.element = BB || document, this.YC = !!dB.YC, this.stopPropagation = !!dB.stopPropagation, this.gC = !!dB.gC, this.disabled = !!dB.disabled, this.filterEvents = (BB, TB) => !0, this.down = new VB.EventEmitter, this.up = new VB.EventEmitter, this.state = {}, this.mC = {
          dx: 0,
          dy: 0,
          fTB: 0,
          sTB: 0,
          MTB: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? gB(this) : document.addEventListener("DOMContentLoaded", (BB => {
          gB(this)
        }), {
          once: !0
        })
      }
      bind(BB) {
        for (var TB = arguments.length, dB = new Array(TB > 1 ? TB - 1 : 0), VB = 1; VB < TB; VB++) dB[VB - 1] = arguments[VB];
        dB.forEach((TB => {
          var dB = this._keyBindmap[TB] || [];
          dB.includes(BB) || (dB.push(BB), this._keyBindmap[TB] = dB)
        })), this.state[BB] = !!this.state[BB], this.pressCount[BB] = this.pressCount[BB] || 0, this.releaseCount[BB] = this.releaseCount[BB] || 0
      }
      unbind(BB) {
        for (var TB in this._keyBindmap) {
          var dB = this._keyBindmap[TB],
            VB = dB.indexOf(BB);
          VB > -1 && dB.splice(VB, 1)
        }
      }
      getBindings() {
        var BB = {};
        for (var TB in this._keyBindmap) {
          this._keyBindmap[TB].forEach((dB => {
            BB[dB] = BB[dB] || [], BB[dB].push(TB)
          }))
        }
        return BB
      }
      dL() {
        YB(this.mC), YB(this.pressCount), YB(this.releaseCount)
      }
    }

    function YB(BB) {
      for (var TB in BB) BB[TB] = 0
    }

    function gB(BB) {
      window.addEventListener("keydown", HB.bind(null, BB, !0), !1), window.addEventListener("keyup", HB.bind(null, BB, !1), !1);
      var TB = {
        passive: !0
      };
      BB.element.addEventListener("touchstart", OB.bind(void 0, BB), {
        passive: !1
      }), BB.element.addEventListener("touchend", uB.bind(void 0, BB), TB), BB.element.addEventListener("mousedown", EB.bind(null, BB, !0), TB), window.document.addEventListener("mouseup", EB.bind(null, BB, !1), TB), BB.element.addEventListener("touchmove", vB.bind(null, BB), TB), BB.element.addEventListener("mousemove", vB.bind(null, BB), TB), window.PointerEvent, BB.element.addEventListener("wheel", mB.bind(null, BB), TB), BB.element.addEventListener("contextmenu", iB.bind(null, BB), !1), window.addEventListener("blur", fB.bind(null, BB), !1)
    }
    var oB = 0,
      kB = 0,
      LB = null;

    function OB(BB, TB) {
      TB.preventDefault(), DB(TB)
    }

    function DB(BB) {
      let TB = !1;
      for (let dB = 0; dB < BB.touches.length; ++dB)
        if (BB.touches[dB].identifier === LB) {
          TB = !0;
          break
        } if (!TB) {
        const TB = BB.changedTouches[0];
        oB = TB.clientX, kB = TB.clientY, LB = TB.identifier
      }
    }

    function uB(BB, TB) {
      for (var dB = TB.changedTouches, VB = 0; VB < dB.length; ++VB) dB[VB].identifier === LB && (LB = null)
    }

    function HB(BB, TB, dB) {
      try {
        sB(BB, dB), TB && dB.isTrusted && !dB.repeat && BB._keyStates[dB.code] && MB(BB, dB.code)
      } finally {
        zB(dB.code, TB, BB, dB)
      }
    }

    function EB(BB, TB, dB) {
      try {
        sB(BB, dB)
      } finally {
        ! function(BB, TB, dB) {
          if ("pointerId" in dB)
            if (TB) {
              if (null !== BB._touches.currID) return;
              BB._touches.currID = dB.pointerId
            } else {
              if (BB._touches.currID !== dB.pointerId) return;
              BB._touches.currID = null
            } var VB = "button" in dB ? dB.button + 1 : 1;
          zB("Mouse" + VB, TB, BB, dB)
        }(BB, TB, dB)
      }
    }

    function vB(BB, TB) {
      var dB = TB.movementX || TB.mozMovementX || 0,
        VB = TB.movementY || TB.mozMovementY || 0;
      if (TB.touches && 0 === (dB | VB)) {
        var yB = function(BB) {
          DB(BB);
          for (let TB = 0; TB < BB.changedTouches.length; ++TB)
            if (BB.changedTouches[TB].identifier == LB) {
              const dB = BB.changedTouches[TB],
                VB = [dB.clientX - oB, dB.clientY - kB];
              return oB = dB.clientX, kB = dB.clientY, VB
            } return console.error(`Did not find touch id ${LB}`), [0, 0]
        }(TB);
        dB = yB[0], VB = yB[1]
      }
      BB.mC.dx += dB, BB.mC.dy += VB
    }

    function mB(BB, TB) {
      sB(BB, TB);
      var dB = 1;
      switch (TB.deltaMode) {
        case 0:
          dB = 1;
          break;
        case 1:
          dB = 12;
          break;
        case 2:
          dB = BB.element.clientHeight || window.innerHeight
      }
      BB.mC.fTB += (TB.deltaX || 0) * dB, BB.mC.sTB += (TB.deltaY || 0) * dB, BB.mC.MTB += (TB.deltaZ || 0) * dB
    }

    function iB(BB, TB) {
      if (!BB.gC) return TB.preventDefault(), !1
    }
    var NB = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function tB(BB, TB) {
      return !!BB[NB[TB]] || ("AltRight" === TB || "ControlLeft" === TB) && "function" === typeof BB.getModifierState && !0 === BB.getModifierState("AltGraph")
    }

    function fB(BB, TB) {
      for (var dB in BB._modifiersHeldThroughBlur = {}, NB) BB._keyStates[dB] && (BB._modifiersHeldThroughBlur[dB] = !0);
      TB && TB.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (BB) {
          return !0
        }
      }() && (clearTimeout(BB._blurRelease), BB._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var TB in BB._modifiersHeldThroughBlur = {}, BB._keyStates) BB._keyStates[TB] && !/^Mouse\d/.test(TB) && MB(BB, TB)
      }), 0))
    }

    function sB(BB, TB) {
      var dB = BB._modifiersHeldThroughBlur;
      if (dB && TB.isTrusted && document.hasFocus())
        for (var VB in dB) delete dB[VB], BB._keyStates[VB] && VB !== TB.code && (tB(TB, VB) || MB(BB, VB))
    }

    function MB(BB, TB) {
      const dB = {
          code: TB,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        VB = yB;
      yB = dB;
      try {
        zB(TB, !1, BB, dB)
      } finally {
        yB = VB
      }
    }

    function zB(BB, TB, dB, VB) {
      var yB = dB._keyBindmap[BB];
      yB && (wB(dB._keyStates[BB], TB) && (dB._keyStates[BB] = TB, yB.forEach((BB => {
        (!dB.filterEvents || dB.filterEvents(VB, BB)) && function(BB, TB, dB, VB) {
          var yB = TB ? dB.pressCount : dB.releaseCount;
          yB[BB] = (yB[BB] || 0) + 1;
          var pB = dB._bindPressCount[BB] || 0;
          (pB += TB ? 1 : -1) < 0 && (pB = 0);
          dB._bindPressCount[BB] = pB;
          var lB = dB.state[BB];
          if (wB(lB, pB)) {
            dB.state[BB] = pB > 0;
            var JB = TB ? dB.down : dB.up;
            dB.disabled || JB.emit(BB, VB)
          }
        }(BB, TB, dB, VB)
      }))), "button" in VB || (dB.YC && !VB.defaultPrevented && VB.preventDefault(), dB.stopPropagation && VB.stopPropagation()))
    }

    function wB(BB, TB) {
      return BB ? !TB : TB
    }
  },
  35688: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => OB,
      f: () => DB
    });
    var VB = dB(62),
      yB = dB(2488),
      pB = dB(1317),
      lB = dB(1727),
      JB = dB(35624),
      YB = dB(572),
      gB = dB(933),
      oB = dB.n(gB),
      kB = dB(980);
    const LB = {},
      OB = (0, VB.memo)((function() {
        const BB = (0, yB.b)();
        return (0, pB.e)("damagedByOtherPlayer", (TB => {
          let {
            uT: dB,
            direction: VB
          } = TB;
          const yB = dB || "nonDirectional";
          if (LB[yB]) {
            const TB = LB[yB];
            clearTimeout(TB.timeout), TB.direction = VB, TB.timeout = setTimeout((() => {
              delete LB[yB], BB()
            }), 800)
          } else LB[yB] = {
            direction: VB,
            nS: null,
            timeout: setTimeout((() => {
              delete LB[yB], BB()
            }), 800)
          };
          BB()
        })), (0, lB.c)("kill", (TB => {
          let {
            killer: dB,
            victim: VB
          } = TB;
          const yB = VB.id;
          dB.local && yB && yB in LB && (clearTimeout(LB[yB].timeout), delete LB[yB], BB())
        })), (0, VB.useEffect)((() => {
          const BB = (0, JB.h)("turnDamageIndicators", DB);
          return () => {
            BB();
            for (const BB in LB) clearTimeout(LB[BB].timeout), delete LB[BB]
          }
        }), []), (0, kB.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(LB).map((BB => {
            let [TB, dB] = BB;
            const VB = (0, YB.M)(dB.direction);
            return (0, kB.jsx)("div", {
              ref: BB => {
                LB[TB] && (LB[TB].nS = BB)
              },
              className: oB()("DamageIndicator", {
                DamageIndicatorFullCircle: VB
              })
            }, TB)
          }))
        })
      }));

    function DB(BB) {
      for (const TB in LB) {
        const {
          direction: dB,
          nS: VB
        } = LB[TB];
        if ((0, YB.M)(dB)) continue;
        const yB = dB - BB;
        VB.style.rotate = `${yB}rad`
      }
    }
  },
  35586: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => YB,
      h: () => gB
    });
    const VB = .1,
      yB = .35,
      pB = .85,
      lB = .06,
      JB = .22;

    function YB(BB) {
      if (BB < VB) return 0;
      if (BB < yB) {
        const TB = (BB - VB) / (yB - VB);
        return lB + (JB - lB) * TB * TB
      }
      return BB < pB ? JB + (1 - JB) * (BB - yB) / (pB - yB) : 1
    }

    function gB(BB) {
      return BB.touchEdgeGuard && BB.touchSpeedCurve
    }
  },
  35616: (BB, TB, dB) => {
    function VB(BB, TB, dB, VB) {
      return !(dB && !BB.aimable) && (!TB || BB.gun && "head" !== VB)
    }

    function yB(BB) {
      return Math.max(.1 * BB, 1)
    }
    dB.d(TB, {
      e: () => yB,
      f: () => VB
    })
  },
  35624: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => JB,
      h: () => lB
    });
    let VB = null;
    const yB = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      pB = {
        crosshairAccuracy: BB => {
          const TB = yB.crosshairAccuracy.at(-1);
          TB ? TB.hook(BB) : VB = BB
        },
        turnDamageIndicators: BB => {
          var TB;
          null === (TB = yB.turnDamageIndicators.at(-1)) || void 0 === TB || TB.hook(BB)
        }
      };

    function lB(BB, TB) {
      const dB = {
          hook: TB
        },
        lB = yB[BB];
      if (lB.push(dB), "crosshairAccuracy" === BB && null !== VB) {
        const BB = VB;
        VB = null, pB.crosshairAccuracy(BB)
      }
      return () => {
        const BB = lB.indexOf(dB); - 1 !== BB && lB.splice(BB, 1)
      }
    }

    function JB() {
      return pB
    }
  },
  35497: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB,
      g: () => pB
    });
    let VB = !1;

    function yB() {
      return VB
    }

    function pB(BB) {
      return VB !== BB && (VB = BB, !0)
    }
  },
  35628: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => pB,
      i: () => yB
    });
    var VB = dB(21);

    function yB(BB, TB) {
      return BB && !TB
    }

    function pB() {
      return yB(VB.d.get("isTouchScreen"), VB.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  39400: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      startPadGameplay: () => iB
    });
    dB(39277);
    var VB = dB(39286),
      yB = dB(3249),
      pB = dB(21),
      lB = dB(38023),
      JB = dB(3191),
      YB = dB(38039),
      gB = dB(24),
      oB = dB(2385),
      kB = dB(37381),
      LB = dB(8183),
      OB = dB(39293);
    const DB = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var uB = dB(39306),
      HB = dB(8166);
    const EB = BB => BB.padSneakToggled || !!pB.d.get("clientEscMenuOptions").crouchIsToggle && BB.crouchToggled,
      vB = () => {
        const BB = (() => {
          const BB = (0, LB.e)();
          let TB = DB;
          const dB = new OB.e;
          let VB = !1,
            yB = 0;
          const pB = () => {
            const dB = performance.now(),
              pB = 0 === yB ? 0 : dB - yB;
            if (yB = dB, !VB) return BB.discardPending(), null;
            const lB = (0, OB.p)(TB, pB),
              JB = BB.drainLookDelta(),
              YB = (0, kB.i)();
            return {
              pU: (lB.pU + JB.pU) * YB,
              kU: (lB.kU + JB.kU) * YB
            }
          };
          return {
            update: (BB, yB, lB, JB) => {
              BB.camera.uq !== pB && (BB.camera.uq = pB), VB = !0, TB = (0, OB.r)(dB, yB, lB, JB, performance.now())
            },
            release: () => {
              VB = !1, TB = DB, dB.reset()
            },
            uninstall: BB => {
              BB.camera.uq === pB && (BB.camera.uq = null)
            }
          }
        })();
        return {
          update: (TB, dB, VB) => {
            BB.update((0, oB.d)(), TB, dB, VB)
          },
          release: BB.release,
          uninstall: () => {
            const TB = (0, oB.d)();
            TB && BB.uninstall(TB)
          }
        }
      };
    var mB = dB(39301);
    dB(36590), dB(8031);
    dB(8045).d;
    const iB = () => {
      const BB = (0, mB.b)((() => {
          const BB = {
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
            bodies: () => (0, lB.b)(),
            look: vB(),
            move: (TB, dB) => {
              const VB = (0, oB.d)(),
                yB = VB.Km.DdB();
              if (BB.x = TB.x, BB.y = TB.y, BB.magnitude = TB.magnitude, BB.headingOffset = TB.headingOffset, BB.jumpHeld = TB.jumpHeld, TB.jumpPressed && (BB.jumpPressedSinceTick = !0), BB.running = TB.running, BB.sprintHeld = TB.sprintHeld, dB) {
                const TB = (0, uB.h)({
                  ...dB,
                  descending: VB.Km.mTB(VB.rK).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!VB.Jm.canCrouch,
                  toggled: EB(yB)
                });
                BB.crouchHeld = TB.crouchHeld, yB.padSneakToggled = TB.toggled, yB.crouchToggled = !1, (0, HB.i)(TB.toggled)
              }
              yB.gamepad = BB
            },
            stopMoving: () => {
              var TB;
              Object.assign(BB, {
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
              const dB = null === (TB = (0, oB.d)()) || void 0 === TB ? void 0 : TB.Km.DdB();
              (null === dB || void 0 === dB ? void 0 : dB.gamepad) === BB && (dB.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: BB => {
              const TB = (0, oB.d)(),
                dB = null === TB || void 0 === TB ? void 0 : TB.Km.DdB();
              "touch" === BB ? ((0, HB.i)(!1), null !== dB && void 0 !== dB && dB.padSneakToggled && (dB.padSneakToggled = !1, dB.isTouchscreen && !dB.gamepad && TB.Km.ZTB(TB.rK).setCrouching(!!TB.Jm.canCrouch && dB.touchCrouch))) : "gamepad" === BB && dB && (0, HB.i)(EB(dB))
            },
            hasPlayer: () => {
              var BB;
              return !(null === (BB = (0, oB.d)()) || void 0 === BB || !BB.rK)
            },
            isPlayerDead: () => {
              var BB;
              const TB = (0, oB.d)();
              return !1 === (null === (BB = TB.Km.JdB(TB.rK)) || void 0 === BB ? void 0 : BB.isAlive)
            },
            isReplayMode: () => {
              var BB, TB;
              return !(null === (BB = (0, oB.b)()) || void 0 === BB || null === (TB = BB.client) || void 0 === TB || !TB.isReplayMode())
            },
            isFreeCameraOn: () => {
              var BB, TB, dB;
              return !(null === (BB = (0, oB.b)()) || void 0 === BB || null === (TB = BB.client) || void 0 === TB || null === (dB = TB.freeCameraController) || void 0 === dB || !dB.isEnabled())
            },
            targetsBlock: () => !!(0, oB.d)().qBB,
            selectedSlotEmpty: () => {
              var BB;
              const TB = (0, oB.d)();
              return !(null !== (BB = TB.Km.WTB(TB.rK)) && void 0 !== BB && BB.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const BB = (0, oB.d)().Jm;
              return !!BB.creative && !!BB.canPickBlocks
            },
            scrollHotbar: BB => {
              gB.h.yH("ScrollInventorySlot", BB)
            },
            hasFullInventory: () => (0, YB.c)((0, oB.d)()),
            hasLobbyLeaderboard: () => !!(0, oB.d)().Jm.lobbyLeaderboardInfo,
            contextActionInputs: () => {
              var BB, TB, dB, VB;
              const yB = (0, oB.d)();
              return {
                holdingGun: !(null === (BB = yB.Km.YdB(yB.rK)) || void 0 === BB || null === (TB = BB.mN) || void 0 === TB || !TB.isGun()),
                customButtons: null !== (dB = yB.Jm.customButtons) && void 0 !== dB ? dB : null,
                touchscreenActionButton: null !== (VB = yB.Jm.touchscreenActionButton) && void 0 !== VB ? VB : null
              }
            },
            pressTouchButton: BB => {
              (0, JB.sendColyMessage)(yB.pj, BB)
            }
          }
        })()),
        TB = (0, VB.c)(),
        dB = null,
        pB = null;
      return () => {
        BB(), TB(), null === dB || void 0 === dB || dB(), null === pB || void 0 === pB || pB()
      }
    }
  },
  35601: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => vB,
      c: () => pB,
      e: () => uB,
      i: () => HB,
      k: () => JB,
      n: () => LB,
      r: () => EB,
      s: () => kB,
      v: () => mB,
      x: () => DB
    });
    var VB = dB(21),
      yB = dB(24);
    const pB = "clientGameInventoryButtonsChanged",
      lB = new Map;

    function JB() {
      return [...lB.values()].sort(((BB, TB) => {
        var dB, VB;
        return (null !== (dB = BB.order) && void 0 !== dB ? dB : 0) - (null !== (VB = TB.order) && void 0 !== VB ? VB : 0)
      }))
    }
    let YB = null;

    function gB(BB) {
      YB = BB
    }
    let oB = !1;

    function kB(BB) {
      oB = !0;
      try {
        BB.onClick()
      } finally {
        oB = !1
      }
      BB.panel && "clientGame" === VB.d.get("openInGameMenuName") && gB(BB.id)
    }

    function LB() {
      return oB
    }

    function OB() {
      return JB().filter((BB => BB.panel && !BB.disabled))
    }

    function DB(BB) {
      const TB = OB(),
        dB = TB.findIndex((BB => BB.id === YB));
      return !(dB < 0 || TB.length < 2) && (kB(TB[(dB + BB + TB.length) % TB.length]), !0)
    }

    function uB() {
      return null !== YB && OB().length > 1
    }

    function HB() {
      gB(null)
    }

    function EB() {
      "inventory" !== VB.d.get("openInGameMenuName") && gB(null)
    }

    function vB() {
      const BB = YB;
      return gB(null), BB
    }

    function mB(BB) {
      return lB.set(BB.id, BB), yB.h.yH(pB, JB(), !0), () => {
        lB.get(BB.id) === BB && (lB.delete(BB.id), yB.h.yH(pB, JB()))
      }
    }
  },
  35595: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB,
      g: () => HB,
      h: () => EB,
      j: () => LB,
      k: () => gB,
      o: () => uB,
      p: () => OB,
      r: () => oB
    });
    var VB = dB(21),
      yB = dB(24),
      pB = dB(1173),
      lB = dB(35601);
    const JB = "clientGameUiChanged";
    let YB = null;

    function gB() {
      return YB
    }

    function oB(BB, TB) {
      const dB = {
        content: BB,
        menu: TB
      };
      return YB = dB, yB.h.yH(JB, YB, !0), () => {
        YB === dB && (YB = null, DB = !1, HB(), yB.h.yH(JB, null))
      }
    }
    let kB = null;

    function LB() {
      return kB
    }

    function OB(BB) {
      return kB = BB, () => {
        kB === BB && (kB = null)
      }
    }
    let DB = !1;

    function uB() {
      const BB = VB.d.get("openInGameMenuName");
      "clientGame" !== BB && (DB = "inventory" === BB), (0, lB.n)() || (0, lB.i)(), (0, pB.p)("InGameMenu"), VB.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function HB() {
      vB(!1)
    }

    function EB() {
      vB(DB)
    }

    function vB(BB) {
      "clientGame" === VB.d.get("openInGameMenuName") && VB.d.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, lB.i)(), DB = !1
    }
  },
  35488: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => YB
    });
    var VB = dB(270),
      yB = dB(21),
      pB = dB(35497),
      lB = dB(1507),
      JB = dB(1738);

    function YB(BB, TB) {
      var dB, YB, gB;
      if (!yB.d.get("isKeydownEnabled") || BB.repeat) return;
      const oB = BB.code;
      "Escape" === BB.key ? (0, lB.i)(BB) : null !== (dB = JB.r.OpenSettings) && void 0 !== dB && dB.includes(oB) ? (0, lB.s)(BB, VB.m.SETTINGS) : null !== (YB = JB.r.OpenCharacterCustomization) && void 0 !== YB && YB.includes(oB) ? (0, pB.d)() || (0, lB.s)(BB, VB.m.CUSTOMISATION, TB()) : null !== (gB = JB.r.ShowDebugOverlay) && void 0 !== gB && gB.includes(oB) && yB.d.set({
        showDebugOverlay: !yB.d.get("showDebugOverlay")
      })
    }
  },
  4258: (BB, TB, dB) => {
    dB.d(TB, {
      Howl: () => VB.Howl,
      b: () => VB.Howler,
      readyAudioContext: () => yB
    });
    var VB = dB(4262);

    function yB() {
      const BB = VB.Howler;
      var TB;
      (BB.volume(), BB.ctx && BB.autoUnlock) && (null === (TB = BB._unlockAudio) || void 0 === TB || TB.call(BB))
    }
    VB.Howler._mobileUnloaded = !0
  },
  35479: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => LB,
      d: () => oB,
      f: () => OB,
      i: () => kB
    });
    var VB = dB(279),
      yB = dB(597),
      pB = dB(974),
      lB = dB(33);
    const JB = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      YB = "playSessionGameNameWithVariation",
      gB = "wasMatchmakePlayer";

    function oB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lB.m;
      (0, pB.k)(BB, JB)
    }

    function kB() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lB.m).setItem(gB, !0)
    }

    function LB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lB.m;
      return (0, pB.d)(BB, JB)
    }

    function OB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lB.m;
      const dB = (0, pB.d)(TB, JB),
        oB = function(BB) {
          const TB = BB.getItem(YB);
          return "string" !== typeof TB ? null : TB
        }(TB),
        kB = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lB.m).getItem(gB)
        }(TB);
      let LB;
      return LB = null !== dB && null !== oB && (0, pB.h)(TB, JB) && function(BB, TB, dB) {
          const yB = (0, VB.Vb)(BB),
            pB = (0, VB.Vb)(TB),
            lB = (0, VB.Qb)(BB),
            JB = (0, VB.Qb)(TB);
          return !(yB !== pB || !dB) || yB === pB && lB === JB
        }(oB, BB, kB) ? dB : (0, yB.e)(), (0, pB.n)(TB, JB, LB), TB.setItem(YB, BB),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lB.m).removeItem(gB)
        }(TB), LB
    }
  },
  35476: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => HB,
      f: () => EB
    });
    var VB = dB(900),
      yB = dB(581),
      pB = dB(279),
      lB = dB(907),
      JB = dB(586),
      YB = dB(3931),
      gB = dB(95),
      oB = dB(138),
      kB = dB(1596),
      LB = dB(105),
      OB = dB(35479),
      DB = dB(33),
      uB = dB(965);

    function HB() {
      var BB, TB;
      return [...null !== (BB = navigator.languages) && void 0 !== BB ? BB : [null !== (TB = navigator.language) && void 0 !== TB ? TB : "none"], "en-gb"]
    }

    function EB(BB, TB, dB, EB, vB) {
      const mB = (0, VB.j)(TB) ? (0, VB.l)(TB) : null,
        iB = {
          cookies: (0, kB.getAllCookiesForGameNameWithVariation)(TB),
          isMobile: (0, gB.isMobile)(),
          isUsingCustomGameTexturePack: null !== mB && vB(mB),
          generalCookies: {
            joinDiscord: !!DB.j.getItem("DiscordPressed"),
            newGo: YB.c,
            ...BB.getMetricsCookies(),
            trafficCode: EB,
            compliance: gB.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, gB.getBrowserName)(),
            version: (0, gB.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, gB.getPlatformType)(),
            deviceType: (0, LB.e)()
          },
          isLoggedIn: BB.isLoggedIn(),
          lobbyName: dB,
          languages: HB(),
          version: yB.b,
          siteUsed: oB.v,
          subsiteUsed: oB.D,
          playSessionId: (0, OB.f)(TB),
          visitSessionId: (0, uB.b)(),
          clientReason: JB.h.reason
        };
      return null !== mB && (0, pB.Fc)(mB) ? (iB.lobbyName = (0, VB.i)(mB, (0, VB.k)(TB), dB), {
        roomName: `classic_${lB.e}`,
        joinOptions: iB
      }) : {
        roomName: TB,
        joinOptions: iB
      }
    }
  },
  35746: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB,
      h: () => yB,
      k: () => VB
    });

    function VB(BB) {
      return BB.replace(/[_\-\s]*\d+$/, "") || BB
    }

    function yB(BB, TB, dB) {
      return dB <= 0 ? 0 : BB * dB / Math.max(TB, dB)
    }

    function pB(BB, TB) {
      const dB = BB.getDurationMs();
      return dB > 0 ? BB.loudness * Math.max(0, 1 - (TB - BB.startMs) / dB) : 0
    }
    class lB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = BB, this.maxPerGroup = TB, this.voices = []
      }
      admit(BB) {
        if (this.voices = this.voices.filter((BB => BB.isAlive())), null !== BB.group) {
          const TB = this.voices.filter((TB => TB.group === BB.group));
          if (TB.length >= this.maxPerGroup && !this.dropLeastWorth(TB, BB)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, BB)) && (this.voices.push(BB), !0)
      }
      dropLeastWorth(BB, TB) {
        let dB = null,
          VB = 1 / 0;
        for (const yB of BB) {
          if (!yB.canStop()) continue;
          const BB = pB(yB, TB.startMs);
          BB < VB && (dB = yB, VB = BB)
        }
        return !(!dB || TB.loudness < VB) && (this.voices.splice(this.voices.indexOf(dB), 1), dB.stop(), !0)
      }
    }
  },
  35764: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => pB,
      f: () => lB,
      j: () => VB
    });
    class VB {
      constructor(BB) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = BB
      }
      setMultiplierType(BB, TB) {
        var dB;
        this.multipliers[BB] = TB, null === (dB = this._onUpdate) || void 0 === dB || dB.call(this)
      }
      removeMultiplier(BB) {
        var TB;
        delete this.multipliers[BB], null === (TB = this._onUpdate) || void 0 === TB || TB.call(this)
      }
      getMultiplierType(BB) {
        return this.multipliers[BB]
      }
      getTotalMultipliedVal() {
        let BB = 1;
        for (const TB in this.multipliers) BB *= this.multipliers[TB];
        return BB
      }
    }
    class yB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = BB
      }
      setBooleanType(BB, TB) {
        const dB = this._getTotalBooleanVal();
        this.booleans[BB] = !!TB;
        const VB = this.getTotalBooleanVal();
        var yB;
        VB !== dB && (null === (yB = this._onUpdate) || void 0 === yB || yB.call(this, VB, this.booleans));
        return VB
      }
      removeBoolean(BB) {
        const TB = this._getTotalBooleanVal();
        delete this.booleans[BB];
        const dB = this._getTotalBooleanVal();
        var VB;
        null !== dB && dB !== TB && (null === (VB = this._onUpdate) || void 0 === VB || VB.call(this, dB, this.booleans));
        return null !== dB && void 0 !== dB && dB
      }
      getBooleanType(BB) {
        return this.booleans[BB]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var BB;
        null === (BB = this._onUpdate) || void 0 === BB || BB.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class pB extends yB {
      getTotalBooleanVal() {
        const BB = this._getTotalBooleanVal();
        if (null === BB) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return BB
      }
      _getTotalBooleanVal() {
        let BB = !1,
          TB = !0;
        for (const dB in this.booleans) BB = !0, TB &&= this.booleans[dB];
        return BB ? TB : null
      }
    }
    class lB extends yB {
      getTotalBooleanVal() {
        const BB = this._getTotalBooleanVal();
        if (null === BB) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return BB
      }
      _getTotalBooleanVal() {
        let BB = !1,
          TB = !1;
        for (const dB in this.booleans) BB = !0, TB ||= this.booleans[dB];
        return BB ? TB : null
      }
    }
  },
  35755: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB,
      c: () => VB,
      f: () => yB
    });
    const VB = 15,
      yB = 3,
      pB = 30
  },
  35832: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => lB,
      d: () => yB,
      g: () => pB,
      i: () => LB,
      m: () => JB,
      p: () => YB,
      s: () => gB,
      v: () => kB,
      z: () => oB
    });
    var VB = dB(1117);
    let yB = function(BB) {
        return BB[BB.Join = 0] = "Join", BB[BB.Leave = 1] = "Leave", BB[BB.Push = 2] = "Push", BB[BB.Cursor = 3] = "Cursor", BB[BB.Submit = 4] = "Submit", BB[BB.ReloadAsVariation = 5] = "ReloadAsVariation", BB[BB.CreateFile = 6] = "CreateFile", BB[BB.RenameFile = 7] = "RenameFile", BB[BB.DeleteFile = 8] = "DeleteFile", BB[BB.SetEngine = 9] = "SetEngine", BB[BB.RenameFolder = 10] = "RenameFolder", BB
      }({}),
      pB = function(BB) {
        return BB[BB.Joined = 0] = "Joined", BB[BB.Updates = 1] = "Updates", BB[BB.Presence = 2] = "Presence", BB[BB.RemoteCursor = 3] = "RemoteCursor", BB[BB.ForceClose = 4] = "ForceClose", BB[BB.LobbyFilesChanged = 5] = "LobbyFilesChanged", BB[BB.EngineSettings = 6] = "EngineSettings", BB
      }({});

    function lB(BB) {
      return "lobby" === BB.kind ? `lobby:${BB.path}` : `codeBlock:${BB.pos[0]},${BB.pos[1]},${BB.pos[2]}`
    }

    function JB(BB) {
      if ("lobby" === BB) return {
        kind: "lobby",
        path: VB.f
      };
      if (BB.startsWith("lobby:")) {
        const TB = BB.slice(6);
        return kB(TB) ? {
          kind: "lobby",
          path: TB
        } : null
      }
      const TB = BB.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return TB ? {
        kind: "codeBlock",
        pos: [parseInt(TB[1]), parseInt(TB[2]), parseInt(TB[3])]
      } : null
    }

    function YB(BB) {
      return BB.endsWith(".d.ts")
    }

    function gB(BB) {
      return BB.endsWith(".ts") && !YB(BB)
    }
    const oB = 64;

    function kB(BB) {
      if (!BB || BB !== BB.trim()) return !1;
      if (BB.length > oB) return !1;
      if (BB.startsWith("/") || BB.includes("\\") || BB.includes("\0")) return !1;
      if (!YB(BB) && !gB(BB) && ! function(BB) {
          return BB.endsWith(".js") && !BB.endsWith(".min.js") && !BB.endsWith(".bundle.js")
        }(BB)) return !1;
      const TB = BB.split("/");
      for (const dB of TB)
        if ("" === dB || "." === dB || ".." === dB) return !1;
      return !0
    }
    const LB = 14e3
  },
  37979: (BB, TB, dB) => {
    function VB(BB, TB, dB, VB, yB) {
      var pB = {};
      return Object.keys(VB).forEach((function(BB) {
        pB[BB] = VB[BB]
      })), pB.enumerable = !!pB.enumerable, pB.configurable = !!pB.configurable, ("value" in pB || pB.initializer) && (pB.writable = !0), pB = dB.slice().reverse().reduce((function(dB, VB) {
        return VB(BB, TB, dB) || dB
      }), pB), yB && void 0 !== pB.initializer && (pB.value = pB.initializer ? pB.initializer.call(yB) : void 0, pB.initializer = void 0), void 0 === pB.initializer && (Object.defineProperty(BB, TB, pB), pB = null), pB
    }
    dB.d(TB, {
      c: () => VB
    })
  },
  37976: (BB, TB, dB) => {
    function VB(BB, TB, dB, VB) {
      dB && Object.defineProperty(BB, TB, {
        enumerable: dB.enumerable,
        configurable: dB.configurable,
        writable: dB.writable,
        value: dB.initializer ? dB.initializer.call(VB) : void 0
      })
    }
    dB.d(TB, {
      d: () => VB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
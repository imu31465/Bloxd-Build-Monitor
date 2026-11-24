export const id = 200;
export const ids = [200];
export const modules = {
  39203: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => NB,
      h: () => dB
    });
    var QB = zB(4169);
    let nB = null;

    function dB(BB) {
      return null !== nB && BB === nB
    }

    function IB() {
      this.oW = !1, this.stopPropagation = !1, this.DW = !1, this.disabled = !1
    }
    class NB {
      constructor(BB, jB) {
        this.version = "0.7.0";
        var zB = Object.assign({}, new IB, jB || {});
        this.element = BB || document, this.oW = !!zB.oW, this.stopPropagation = !!zB.stopPropagation, this.DW = !!zB.DW, this.disabled = !!zB.disabled, this.filterEvents = (BB, jB) => !0, this.ignoreEvent = BB => !1, this.down = new QB.EventEmitter, this.up = new QB.EventEmitter, this.state = {}, this.FW = {
          dx: 0,
          dy: 0,
          RBB: 0,
          BjB: 0,
          jjB: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? UB(this) : document.addEventListener("DOMContentLoaded", (BB => {
          UB(this)
        }), {
          once: !0
        })
      }
      bind(BB) {
        for (var jB = arguments.length, zB = new Array(jB > 1 ? jB - 1 : 0), QB = 1; QB < jB; QB++) zB[QB - 1] = arguments[QB];
        zB.forEach((jB => {
          var zB = this._keyBindmap[jB] || [];
          zB.includes(BB) || (zB.push(BB), this._keyBindmap[jB] = zB)
        })), this.state[BB] = !!this.state[BB], this.pressCount[BB] = this.pressCount[BB] || 0, this.releaseCount[BB] = this.releaseCount[BB] || 0
      }
      unbind(BB) {
        for (var jB in this._keyBindmap) {
          var zB = this._keyBindmap[jB],
            QB = zB.indexOf(BB);
          QB > -1 && zB.splice(QB, 1)
        }
      }
      getBindings() {
        var BB = {};
        for (var jB in this._keyBindmap) {
          this._keyBindmap[jB].forEach((zB => {
            BB[zB] = BB[zB] || [], BB[zB].push(jB)
          }))
        }
        return BB
      }
      vp() {
        uB(this.FW), uB(this.pressCount), uB(this.releaseCount)
      }
    }

    function uB(BB) {
      for (var jB in BB) BB[jB] = 0
    }

    function UB(BB) {
      window.addEventListener("keydown", yB.bind(null, BB, !0), !1), window.addEventListener("keyup", yB.bind(null, BB, !1), !1);
      var jB = {
        passive: !0
      };
      BB.element.addEventListener("touchstart", sB.bind(void 0, BB), {
        passive: !1
      }), BB.element.addEventListener("touchend", mB.bind(void 0, BB), jB), BB.element.addEventListener("mousedown", kB.bind(null, BB, !0), jB), window.document.addEventListener("mouseup", kB.bind(null, BB, !1), jB), BB.element.addEventListener("touchmove", GB.bind(null, BB), jB), BB.element.addEventListener("mousemove", GB.bind(null, BB), jB), window.PointerEvent, BB.element.addEventListener("wheel", LB.bind(null, BB), jB), BB.element.addEventListener("contextmenu", gB.bind(null, BB), !1), window.addEventListener("blur", MB.bind(null, BB), !1)
    }
    var aB = 0,
      pB = 0,
      rB = null;

    function sB(BB, jB) {
      jB.preventDefault(), JB(jB)
    }

    function JB(BB) {
      let jB = !1;
      for (let zB = 0; zB < BB.touches.length; ++zB)
        if (BB.touches[zB].identifier === rB) {
          jB = !0;
          break
        } if (!jB) {
        const jB = BB.changedTouches[0];
        aB = jB.clientX, pB = jB.clientY, rB = jB.identifier
      }
    }

    function mB(BB, jB) {
      for (var zB = jB.changedTouches, QB = 0; QB < zB.length; ++QB) zB[QB].identifier === rB && (rB = null)
    }

    function yB(BB, jB, zB) {
      if (!BB.ignoreEvent(zB)) try {
        EB(BB, zB), jB && zB.isTrusted && !zB.repeat && BB._keyStates[zB.code] && iB(BB, zB.code)
      } finally {
        qB(zB.code, jB, BB, zB)
      }
    }

    function kB(BB, jB, zB) {
      if (!BB.ignoreEvent(zB)) try {
        EB(BB, zB)
      } finally {
        ! function(BB, jB, zB) {
          if ("pointerId" in zB)
            if (jB) {
              if (null !== BB._touches.currID) return;
              BB._touches.currID = zB.pointerId
            } else {
              if (BB._touches.currID !== zB.pointerId) return;
              BB._touches.currID = null
            } var QB = "button" in zB ? zB.button + 1 : 1;
          qB("Mouse" + QB, jB, BB, zB)
        }(BB, jB, zB)
      }
    }

    function GB(BB, jB) {
      var zB = jB.movementX || jB.mozMovementX || 0,
        QB = jB.movementY || jB.mozMovementY || 0;
      if (jB.touches && 0 === (zB | QB)) {
        var nB = function(BB) {
          JB(BB);
          for (let jB = 0; jB < BB.changedTouches.length; ++jB)
            if (BB.changedTouches[jB].identifier == rB) {
              const zB = BB.changedTouches[jB],
                QB = [zB.clientX - aB, zB.clientY - pB];
              return aB = zB.clientX, pB = zB.clientY, QB
            } return console.error(`Did not find touch id ${rB}`), [0, 0]
        }(jB);
        zB = nB[0], QB = nB[1]
      }
      BB.FW.dx += zB, BB.FW.dy += QB
    }

    function LB(BB, jB) {
      EB(BB, jB);
      var zB = 1;
      switch (jB.deltaMode) {
        case 0:
          zB = 1;
          break;
        case 1:
          zB = 12;
          break;
        case 2:
          zB = BB.element.clientHeight || window.innerHeight
      }
      BB.FW.RBB += (jB.deltaX || 0) * zB, BB.FW.BjB += (jB.deltaY || 0) * zB, BB.FW.jjB += (jB.deltaZ || 0) * zB
    }

    function gB(BB, jB) {
      if (!BB.DW) return jB.preventDefault(), !1
    }
    var tB = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function SB(BB, jB) {
      return !!BB[tB[jB]] || ("AltRight" === jB || "ControlLeft" === jB) && "function" === typeof BB.getModifierState && !0 === BB.getModifierState("AltGraph")
    }

    function MB(BB, jB) {
      for (var zB in BB._modifiersHeldThroughBlur = {}, tB) BB._keyStates[zB] && (BB._modifiersHeldThroughBlur[zB] = !0);
      jB && jB.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (BB) {
          return !0
        }
      }() && (clearTimeout(BB._blurRelease), BB._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var jB in BB._modifiersHeldThroughBlur = {}, BB._keyStates) BB._keyStates[jB] && !/^Mouse\d/.test(jB) && iB(BB, jB)
      }), 0))
    }

    function EB(BB, jB) {
      var zB = BB._modifiersHeldThroughBlur;
      if (zB && jB.isTrusted && document.hasFocus())
        for (var QB in zB) delete zB[QB], BB._keyStates[QB] && QB !== jB.code && (SB(jB, QB) || iB(BB, QB))
    }

    function iB(BB, jB) {
      const zB = {
          code: jB,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        QB = nB;
      nB = zB;
      try {
        qB(jB, !1, BB, zB)
      } finally {
        nB = QB
      }
    }

    function qB(BB, jB, zB, QB) {
      var nB = zB._keyBindmap[BB];
      nB && (fB(zB._keyStates[BB], jB) && (zB._keyStates[BB] = jB, nB.forEach((BB => {
        (!zB.filterEvents || zB.filterEvents(QB, BB)) && function(BB, jB, zB, QB) {
          var nB = jB ? zB.pressCount : zB.releaseCount;
          nB[BB] = (nB[BB] || 0) + 1;
          var dB = zB._bindPressCount[BB] || 0;
          (dB += jB ? 1 : -1) < 0 && (dB = 0);
          zB._bindPressCount[BB] = dB;
          var IB = zB.state[BB];
          if (fB(IB, dB)) {
            zB.state[BB] = dB > 0;
            var NB = jB ? zB.down : zB.up;
            zB.disabled || NB.emit(BB, QB)
          }
        }(BB, jB, zB, QB)
      }))), "button" in QB || (zB.oW && !QB.defaultPrevented && QB.preventDefault(), zB.stopPropagation && QB.stopPropagation()))
    }

    function fB(BB, jB) {
      return BB ? !jB : jB
    }
  },
  36751: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => mB,
      g: () => yB
    });
    var QB = zB(62),
      nB = zB(1471),
      dB = zB(2025),
      IB = zB(36703),
      NB = zB(658),
      uB = zB(1091),
      UB = zB.n(uB),
      aB = zB(1148);
    const pB = [rB()];

    function rB() {
      return {
        source: null,
        direction: null,
        RV: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function sB(BB) {
      return pB.find((jB => null !== jB.source && jB.source === BB))
    }

    function JB(BB) {
      clearTimeout(BB.timeout), BB.source = null, BB.direction = null, BB.writtenAngle = null, BB.RV && (BB.RV.style.rotate = "")
    }
    const mB = (0, QB.memo)((function() {
      const [, BB] = (0, QB.useReducer)((BB => BB + 1), 0);
      return (0, nB.f)("damagedByOtherPlayer", (jB => {
        let {
          Gz: zB,
          direction: QB
        } = jB;
        const nB = zB || "nonDirectional",
          dB = function(BB) {
            var jB;
            const zB = null !== (jB = sB(BB)) && void 0 !== jB ? jB : pB.find((BB => null === BB.source));
            if (zB) return zB;
            const QB = {
              source: null,
              direction: null,
              RV: null,
              timeout: void 0,
              writtenAngle: null
            };
            return pB.push(QB), QB
          }(nB);
        clearTimeout(dB.timeout), dB.source = nB, dB.direction = QB, dB.timeout = setTimeout((() => {
          JB(dB), BB()
        }), 800), BB()
      })), (0, dB.d)("kill", (jB => {
        let {
          killer: zB,
          victim: QB
        } = jB;
        const nB = zB.local && sB(QB.id);
        nB && (JB(nB), BB())
      })), (0, QB.useEffect)((() => {
        const BB = (0, IB.e)("turnDamageIndicators", yB);
        return () => {
          BB(), pB.forEach(JB)
        }
      }), []), (0, aB.jsx)("div", {
        className: "DirectionalDamage",
        children: pB.map(((BB, jB) => (0, aB.jsx)("div", {
          ref: jB => {
            BB.RV = jB
          },
          className: UB()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, NB.I)(BB.direction),
            DamageIndicatorIdle: null === BB.source
          })
        }, jB)))
      })
    }));

    function yB(BB) {
      for (const jB of pB) {
        if (null === jB.source || (0, NB.I)(jB.direction)) continue;
        const zB = jB.direction - BB;
        zB !== jB.writtenAngle && (jB.writtenAngle = zB, jB.RV.style.rotate = `${zB}rad`)
      }
    }
  },
  36574: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB,
      c: () => dB
    });
    let QB = !1;

    function nB() {
      return QB
    }

    function dB(BB) {
      return QB !== BB && (QB = BB, !0)
    }
  },
  34202: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB,
      d: () => nB
    });
    var QB = zB(28);

    function nB(BB, jB) {
      return BB && !jB
    }

    function dB() {
      return nB(QB.c.get("isTouchScreen"), QB.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  40756: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      startPadGameplay: () => tB
    });
    zB(40640);
    var QB = zB(40647),
      nB = zB(3849),
      dB = zB(28),
      IB = zB(39173),
      NB = zB(3798),
      uB = zB(39193),
      UB = zB(31),
      aB = zB(2863),
      pB = zB(38520),
      rB = zB(8850),
      sB = zB(40650);
    const JB = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var mB = zB(40675),
      yB = zB(8821),
      kB = zB(39199);
    const GB = BB => BB.padSneakToggled || !!dB.c.get("clientEscMenuOptions").crouchIsToggle && BB.crouchToggled,
      LB = () => {
        const BB = (() => {
          const BB = (0, rB.b)();
          let jB = JB;
          const zB = new sB.b;
          let QB = !1,
            nB = 0;
          const dB = () => {
            const zB = performance.now(),
              dB = 0 === nB ? 0 : zB - nB;
            if (nB = zB, !QB) return BB.discardPending(), null;
            const IB = (0, sB.q)(jB, dB),
              NB = BB.drainLookDelta(),
              uB = (0, pB.h)();
            return {
              bD: (IB.bD + NB.bD) * uB,
              RD: (IB.RD + NB.RD) * uB
            }
          };
          return {
            update: (BB, nB, IB, NB) => {
              BB.camera.IK !== dB && (BB.camera.IK = dB), QB = !0, jB = (0, sB.r)(zB, nB, IB, NB, performance.now())
            },
            release: () => {
              QB = !1, jB = JB, zB.reset()
            },
            uninstall: BB => {
              BB.camera.IK === dB && (BB.camera.IK = null)
            }
          }
        })();
        return {
          update: (jB, zB, QB) => {
            BB.update((0, aB.g)(), jB, zB, QB)
          },
          release: BB.release,
          uninstall: () => {
            const jB = (0, aB.g)();
            jB && BB.uninstall(jB)
          }
        }
      };
    var gB = zB(40667);
    zB(37784), zB(8730);
    zB(8747).e;
    const tB = () => {
      const BB = (0, gB.c)((() => {
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
            bodies: () => (0, IB.c)(),
            look: LB(),
            move: (jB, zB) => {
              const QB = (0, aB.g)(),
                nB = QB.vG.ejB();
              if (BB.x = jB.x, BB.y = jB.y, BB.magnitude = jB.magnitude, BB.headingOffset = jB.headingOffset, BB.jumpHeld = jB.jumpHeld, jB.jumpPressed && (BB.jumpPressedSinceTick = !0), BB.running = jB.running, BB.sprintHeld = jB.sprintHeld, zB) {
                const jB = (0, mB.g)({
                  ...zB,
                  descending: QB.vG.CBB(QB.zV).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!QB.wG.canCrouch,
                  toggled: GB(nB)
                });
                BB.crouchHeld = jB.crouchHeld, nB.padSneakToggled = jB.toggled, nB.crouchToggled = !1, (0, yB.f)(jB.toggled)
              }
              nB.gamepad = BB
            },
            stopMoving: () => {
              var jB;
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
              const zB = null === (jB = (0, aB.g)()) || void 0 === jB ? void 0 : jB.vG.ejB();
              (null === zB || void 0 === zB ? void 0 : zB.gamepad) === BB && (zB.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: BB => {
              const jB = (0, aB.g)(),
                zB = null === jB || void 0 === jB ? void 0 : jB.vG.ejB();
              "touch" === BB ? ((0, yB.f)(!1), null !== zB && void 0 !== zB && zB.padSneakToggled && (zB.padSneakToggled = !1, zB.isTouchscreen && !zB.gamepad && jB.vG.JjB(jB.zV).setCrouching(!!jB.wG.canCrouch && zB.touchCrouch))) : "gamepad" === BB && zB && (0, yB.f)(GB(zB))
            },
            hasPlayer: () => {
              var BB;
              return !(null === (BB = (0, aB.g)()) || void 0 === BB || !BB.zV)
            },
            isPlayerDead: () => {
              var BB;
              const jB = (0, aB.g)();
              return !1 === (null === (BB = jB.vG.hjB(jB.zV)) || void 0 === BB ? void 0 : BB.isAlive)
            },
            isReplayMode: () => {
              var BB, jB;
              return !(null === (BB = (0, aB.c)()) || void 0 === BB || null === (jB = BB.client) || void 0 === jB || !jB.isReplayMode())
            },
            isFreeCameraOn: () => {
              var BB, jB, zB;
              return !(null === (BB = (0, aB.c)()) || void 0 === BB || null === (jB = BB.client) || void 0 === jB || null === (zB = jB.freeCameraController) || void 0 === zB || !zB.isEnabled())
            },
            targetsBlock: () => !!(0, aB.g)().mBB,
            selectedSlotEmpty: () => {
              var BB;
              const jB = (0, aB.g)();
              return !(null !== (BB = jB.vG.yjB(jB.zV)) && void 0 !== BB && BB.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const BB = (0, aB.g)().wG;
              return !!BB.creative && !!BB.canPickBlocks
            },
            scrollHotbar: BB => {
              UB.n.Ly("ScrollInventorySlot", BB)
            },
            hasFullInventory: () => (0, uB.c)((0, aB.g)()),
            hasLobbyTab: () => (0, kB.c)((0, aB.g)().wG),
            contextActionInputs: () => {
              var BB, jB, zB, QB;
              const nB = (0, aB.g)();
              return {
                holdingGun: !(null === (BB = nB.vG.XjB(nB.zV)) || void 0 === BB || null === (jB = BB.kS) || void 0 === jB || !jB.isGun()),
                customButtons: null !== (zB = nB.wG.customButtons) && void 0 !== zB ? zB : null,
                touchscreenActionButton: null !== (QB = nB.wG.touchscreenActionButton) && void 0 !== QB ? QB : null
              }
            },
            pressTouchButton: BB => {
              (0, NB.sendColyMessage)(nB.bk, BB)
            }
          }
        })()),
        jB = (0, QB.b)(),
        zB = null,
        dB = null;
      return () => {
        BB(), jB(), null === zB || void 0 === zB || zB(), null === dB || void 0 === dB || dB()
      }
    }
  },
  36687: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => GB,
      e: () => dB,
      f: () => mB,
      i: () => yB,
      l: () => NB,
      m: () => rB,
      n: () => kB,
      r: () => pB,
      t: () => LB,
      w: () => JB
    });
    var QB = zB(28),
      nB = zB(31);
    const dB = "clientGameInventoryButtonsChanged",
      IB = new Map;

    function NB() {
      return [...IB.values()].sort(((BB, jB) => {
        var zB, QB;
        return (null !== (zB = BB.order) && void 0 !== zB ? zB : 0) - (null !== (QB = jB.order) && void 0 !== QB ? QB : 0)
      }))
    }
    let uB = null;

    function UB(BB) {
      uB = BB
    }
    let aB = !1;

    function pB(BB) {
      aB = !0;
      try {
        BB.onClick()
      } finally {
        aB = !1
      }
      BB.panel && "clientGame" === QB.c.get("openInGameMenuName") && UB(BB.id)
    }

    function rB() {
      return aB
    }

    function sB() {
      return NB().filter((BB => BB.panel && !BB.disabled))
    }

    function JB(BB) {
      const jB = sB(),
        zB = jB.findIndex((BB => BB.id === uB));
      return !(zB < 0 || jB.length < 2) && (pB(jB[(zB + BB + jB.length) % jB.length]), !0)
    }

    function mB() {
      return null !== uB && sB().length > 1
    }

    function yB() {
      UB(null)
    }

    function kB() {
      "inventory" !== QB.c.get("openInGameMenuName") && UB(null)
    }

    function GB() {
      const BB = uB;
      return UB(null), BB
    }

    function LB(BB) {
      return IB.set(BB.id, BB), nB.n.Ly(dB, NB(), !0), () => {
        IB.get(BB.id) === BB && (IB.delete(BB.id), nB.n.Ly(dB, NB()))
      }
    }
  },
  36682: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB,
      d: () => yB,
      f: () => kB,
      j: () => rB,
      n: () => UB,
      o: () => mB,
      r: () => sB,
      t: () => aB
    });
    var QB = zB(28),
      nB = zB(31),
      dB = zB(1316),
      IB = zB(36687);
    const NB = "clientGameUiChanged";
    let uB = null;

    function UB() {
      return uB
    }

    function aB(BB, jB) {
      const zB = {
        content: BB,
        menu: jB
      };
      return uB = zB, nB.n.Ly(NB, uB, !0), () => {
        uB === zB && (uB = null, JB = !1, yB(), nB.n.Ly(NB, null))
      }
    }
    let pB = null;

    function rB() {
      return pB
    }

    function sB(BB) {
      return pB = BB, () => {
        pB === BB && (pB = null)
      }
    }
    let JB = !1;

    function mB() {
      const BB = QB.c.get("openInGameMenuName");
      "clientGame" !== BB && (JB = "inventory" === BB), (0, IB.m)() || (0, IB.i)(), (0, dB.u)(dB.e), QB.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function yB() {
      GB(!1)
    }

    function kB() {
      GB(JB)
    }

    function GB(BB) {
      "clientGame" === QB.c.get("openInGameMenuName") && QB.c.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, IB.i)(), JB = !1
    }
  },
  36570: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => uB
    });
    var QB = zB(363),
      nB = zB(28),
      dB = zB(36574),
      IB = zB(1664),
      NB = zB(2033);

    function uB(BB, jB) {
      var zB, uB, UB;
      if (!nB.c.get("isKeydownEnabled") || BB.repeat) return;
      const aB = BB.code;
      "Escape" === BB.key ? (0, IB.e)(BB) : null !== (zB = NB.w.OpenSettings) && void 0 !== zB && zB.includes(aB) ? (0, IB.t)(BB, QB.o.SETTINGS) : null !== (uB = NB.w.OpenCharacterCustomization) && void 0 !== uB && uB.includes(aB) ? (0, dB.b)() || (0, IB.t)(BB, QB.o.CUSTOMISATION, jB()) : null !== (UB = NB.w.ShowDebugOverlay) && void 0 !== UB && UB.includes(aB) && nB.c.set({
        showDebugOverlay: !nB.c.get("showDebugOverlay")
      })
    }
  },
  39093: (BB, jB, zB) => {
    function QB(BB, jB, zB, QB, nB) {
      var dB = {};
      return Object.keys(QB).forEach((function(BB) {
        dB[BB] = QB[BB]
      })), dB.enumerable = !!dB.enumerable, dB.configurable = !!dB.configurable, ("value" in dB || dB.initializer) && (dB.writable = !0), dB = zB.slice().reverse().reduce((function(zB, QB) {
        return QB(BB, jB, zB) || zB
      }), dB), nB && void 0 !== dB.initializer && (dB.value = dB.initializer ? dB.initializer.call(nB) : void 0, dB.initializer = void 0), void 0 === dB.initializer && (Object.defineProperty(BB, jB, dB), dB = null), dB
    }
    zB.d(jB, {
      d: () => QB
    })
  },
  39087: (BB, jB, zB) => {
    function QB(BB, jB, zB, QB) {
      zB && Object.defineProperty(BB, jB, {
        enumerable: zB.enumerable,
        configurable: zB.configurable,
        writable: zB.writable,
        value: zB.initializer ? zB.initializer.call(QB) : void 0
      })
    }
    zB.d(jB, {
      c: () => QB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
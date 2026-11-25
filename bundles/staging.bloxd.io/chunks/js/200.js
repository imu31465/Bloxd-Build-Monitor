export const id = 200;
export const ids = [200];
export const modules = {
  39182: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => vB,
      f: () => oB
    });
    var TB = ZB(4267);
    let JB = null;

    function oB(BB) {
      return null !== JB && BB === JB
    }

    function GB() {
      this.ZD = !1, this.stopPropagation = !1, this.nD = !1, this.disabled = !1
    }
    class vB {
      constructor(BB, IB) {
        this.version = "0.7.0";
        var ZB = Object.assign({}, new GB, IB || {});
        this.element = BB || document, this.ZD = !!ZB.ZD, this.stopPropagation = !!ZB.stopPropagation, this.nD = !!ZB.nD, this.disabled = !!ZB.disabled, this.filterEvents = (BB, IB) => !0, this.ignoreEvent = BB => !1, this.down = new TB.EventEmitter, this.up = new TB.EventEmitter, this.state = {}, this.zD = {
          dx: 0,
          dy: 0,
          wIB: 0,
          OIB: 0,
          YIB: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? cB(this) : document.addEventListener("DOMContentLoaded", (BB => {
          cB(this)
        }), {
          once: !0
        })
      }
      bind(BB) {
        for (var IB = arguments.length, ZB = new Array(IB > 1 ? IB - 1 : 0), TB = 1; TB < IB; TB++) ZB[TB - 1] = arguments[TB];
        ZB.forEach((IB => {
          var ZB = this._keyBindmap[IB] || [];
          ZB.includes(BB) || (ZB.push(BB), this._keyBindmap[IB] = ZB)
        })), this.state[BB] = !!this.state[BB], this.pressCount[BB] = this.pressCount[BB] || 0, this.releaseCount[BB] = this.releaseCount[BB] || 0
      }
      unbind(BB) {
        for (var IB in this._keyBindmap) {
          var ZB = this._keyBindmap[IB],
            TB = ZB.indexOf(BB);
          TB > -1 && ZB.splice(TB, 1)
        }
      }
      getBindings() {
        var BB = {};
        for (var IB in this._keyBindmap) {
          this._keyBindmap[IB].forEach((ZB => {
            BB[ZB] = BB[ZB] || [], BB[ZB].push(IB)
          }))
        }
        return BB
      }
      Iz() {
        kB(this.zD), kB(this.pressCount), kB(this.releaseCount)
      }
    }

    function kB(BB) {
      for (var IB in BB) BB[IB] = 0
    }

    function cB(BB) {
      window.addEventListener("keydown", qB.bind(null, BB, !0), !1), window.addEventListener("keyup", qB.bind(null, BB, !1), !1);
      var IB = {
        passive: !0
      };
      BB.element.addEventListener("touchstart", FB.bind(void 0, BB), {
        passive: !1
      }), BB.element.addEventListener("touchend", gB.bind(void 0, BB), IB), BB.element.addEventListener("mousedown", yB.bind(null, BB, !0), IB), window.document.addEventListener("mouseup", yB.bind(null, BB, !1), IB), BB.element.addEventListener("touchmove", UB.bind(null, BB), IB), BB.element.addEventListener("mousemove", UB.bind(null, BB), IB), window.PointerEvent, BB.element.addEventListener("wheel", WB.bind(null, BB), IB), BB.element.addEventListener("contextmenu", dB.bind(null, BB), !1), window.addEventListener("blur", sB.bind(null, BB), !1)
    }
    var nB = 0,
      hB = 0,
      zB = null;

    function FB(BB, IB) {
      IB.preventDefault(), NB(IB)
    }

    function NB(BB) {
      let IB = !1;
      for (let ZB = 0; ZB < BB.touches.length; ++ZB)
        if (BB.touches[ZB].identifier === zB) {
          IB = !0;
          break
        } if (!IB) {
        const IB = BB.changedTouches[0];
        nB = IB.clientX, hB = IB.clientY, zB = IB.identifier
      }
    }

    function gB(BB, IB) {
      for (var ZB = IB.changedTouches, TB = 0; TB < ZB.length; ++TB) ZB[TB].identifier === zB && (zB = null)
    }

    function qB(BB, IB, ZB) {
      if (!BB.ignoreEvent(ZB)) try {
        wB(BB, ZB), IB && ZB.isTrusted && !ZB.repeat && BB._keyStates[ZB.code] && OB(BB, ZB.code)
      } finally {
        YB(ZB.code, IB, BB, ZB)
      }
    }

    function yB(BB, IB, ZB) {
      if (!BB.ignoreEvent(ZB)) try {
        wB(BB, ZB)
      } finally {
        ! function(BB, IB, ZB) {
          if ("pointerId" in ZB)
            if (IB) {
              if (null !== BB._touches.currID) return;
              BB._touches.currID = ZB.pointerId
            } else {
              if (BB._touches.currID !== ZB.pointerId) return;
              BB._touches.currID = null
            } var TB = "button" in ZB ? ZB.button + 1 : 1;
          YB("Mouse" + TB, IB, BB, ZB)
        }(BB, IB, ZB)
      }
    }

    function UB(BB, IB) {
      var ZB = IB.movementX || IB.mozMovementX || 0,
        TB = IB.movementY || IB.mozMovementY || 0;
      if (IB.touches && 0 === (ZB | TB)) {
        var JB = function(BB) {
          NB(BB);
          for (let IB = 0; IB < BB.changedTouches.length; ++IB)
            if (BB.changedTouches[IB].identifier == zB) {
              const ZB = BB.changedTouches[IB],
                TB = [ZB.clientX - nB, ZB.clientY - hB];
              return nB = ZB.clientX, hB = ZB.clientY, TB
            } return console.error(`Did not find touch id ${zB}`), [0, 0]
        }(IB);
        ZB = JB[0], TB = JB[1]
      }
      BB.zD.dx += ZB, BB.zD.dy += TB
    }

    function WB(BB, IB) {
      wB(BB, IB);
      var ZB = 1;
      switch (IB.deltaMode) {
        case 0:
          ZB = 1;
          break;
        case 1:
          ZB = 12;
          break;
        case 2:
          ZB = BB.element.clientHeight || window.innerHeight
      }
      BB.zD.wIB += (IB.deltaX || 0) * ZB, BB.zD.OIB += (IB.deltaY || 0) * ZB, BB.zD.YIB += (IB.deltaZ || 0) * ZB
    }

    function dB(BB, IB) {
      if (!BB.nD) return IB.preventDefault(), !1
    }
    var CB = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function QB(BB, IB) {
      return !!BB[CB[IB]] || ("AltRight" === IB || "ControlLeft" === IB) && "function" === typeof BB.getModifierState && !0 === BB.getModifierState("AltGraph")
    }

    function sB(BB, IB) {
      for (var ZB in BB._modifiersHeldThroughBlur = {}, CB) BB._keyStates[ZB] && (BB._modifiersHeldThroughBlur[ZB] = !0);
      IB && IB.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (BB) {
          return !0
        }
      }() && (clearTimeout(BB._blurRelease), BB._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var IB in BB._modifiersHeldThroughBlur = {}, BB._keyStates) BB._keyStates[IB] && !/^Mouse\d/.test(IB) && OB(BB, IB)
      }), 0))
    }

    function wB(BB, IB) {
      var ZB = BB._modifiersHeldThroughBlur;
      if (ZB && IB.isTrusted && document.hasFocus())
        for (var TB in ZB) delete ZB[TB], BB._keyStates[TB] && TB !== IB.code && (QB(IB, TB) || OB(BB, TB))
    }

    function OB(BB, IB) {
      const ZB = {
          code: IB,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        TB = JB;
      JB = ZB;
      try {
        YB(IB, !1, BB, ZB)
      } finally {
        JB = TB
      }
    }

    function YB(BB, IB, ZB, TB) {
      var JB = ZB._keyBindmap[BB];
      JB && (iB(ZB._keyStates[BB], IB) && (ZB._keyStates[BB] = IB, JB.forEach((BB => {
        (!ZB.filterEvents || ZB.filterEvents(TB, BB)) && function(BB, IB, ZB, TB) {
          var JB = IB ? ZB.pressCount : ZB.releaseCount;
          JB[BB] = (JB[BB] || 0) + 1;
          var oB = ZB._bindPressCount[BB] || 0;
          (oB += IB ? 1 : -1) < 0 && (oB = 0);
          ZB._bindPressCount[BB] = oB;
          var GB = ZB.state[BB];
          if (iB(GB, oB)) {
            ZB.state[BB] = oB > 0;
            var vB = IB ? ZB.down : ZB.up;
            ZB.disabled || vB.emit(BB, TB)
          }
        }(BB, IB, ZB, TB)
      }))), "button" in TB || (ZB.ZD && !TB.defaultPrevented && TB.preventDefault(), ZB.stopPropagation && TB.stopPropagation()))
    }

    function iB(BB, IB) {
      return BB ? !IB : IB
    }
  },
  36697: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => gB,
      e: () => qB
    });
    var TB = ZB(63),
      JB = ZB(1507),
      oB = ZB(2054),
      GB = ZB(36642),
      vB = ZB(665),
      kB = ZB(1091),
      cB = ZB.n(kB),
      nB = ZB(1153);
    const hB = [zB()];

    function zB() {
      return {
        source: null,
        direction: null,
        tL: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function FB(BB) {
      return hB.find((IB => null !== IB.source && IB.source === BB))
    }

    function NB(BB) {
      clearTimeout(BB.timeout), BB.source = null, BB.direction = null, BB.writtenAngle = null, BB.tL && (BB.tL.style.rotate = "")
    }
    const gB = (0, TB.memo)((function() {
      const [, BB] = (0, TB.useReducer)((BB => BB + 1), 0);
      return (0, JB.d)("damagedByOtherPlayer", (IB => {
        let {
          yZ: ZB,
          direction: TB
        } = IB;
        const JB = ZB || "nonDirectional",
          oB = function(BB) {
            var IB;
            const ZB = null !== (IB = FB(BB)) && void 0 !== IB ? IB : hB.find((BB => null === BB.source));
            if (ZB) return ZB;
            const TB = {
              source: null,
              direction: null,
              tL: null,
              timeout: void 0,
              writtenAngle: null
            };
            return hB.push(TB), TB
          }(JB);
        clearTimeout(oB.timeout), oB.source = JB, oB.direction = TB, oB.timeout = setTimeout((() => {
          NB(oB), BB()
        }), 800), BB()
      })), (0, oB.c)("kill", (IB => {
        let {
          killer: ZB,
          victim: TB
        } = IB;
        const JB = ZB.local && FB(TB.id);
        JB && (NB(JB), BB())
      })), (0, TB.useEffect)((() => {
        const BB = (0, GB.d)("turnDamageIndicators", qB);
        return () => {
          BB(), hB.forEach(NB)
        }
      }), []), (0, nB.jsx)("div", {
        className: "DirectionalDamage",
        children: hB.map(((BB, IB) => (0, nB.jsx)("div", {
          ref: IB => {
            BB.tL = IB
          },
          className: cB()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, vB.L)(BB.direction),
            DamageIndicatorIdle: null === BB.source
          })
        }, IB)))
      })
    }));

    function qB(BB) {
      for (const IB of hB) {
        if (null === IB.source || (0, vB.L)(IB.direction)) continue;
        const ZB = IB.direction - BB;
        ZB !== IB.writtenAngle && (IB.writtenAngle = ZB, IB.tL.style.rotate = `${ZB}rad`)
      }
    }
  },
  36529: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB,
      h: () => oB
    });
    let TB = !1;

    function JB() {
      return TB
    }

    function oB(BB) {
      return TB !== BB && (TB = BB, !0)
    }
  },
  34143: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => oB,
      d: () => JB
    });
    var TB = ZB(20);

    function JB(BB, IB) {
      return BB && !IB
    }

    function oB() {
      return JB(TB.d.get("isTouchScreen"), TB.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  40723: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      startPadGameplay: () => CB
    });
    ZB(40595);
    var TB = ZB(40599),
      JB = ZB(3911),
      oB = ZB(20),
      GB = ZB(39135),
      vB = ZB(3854),
      kB = ZB(39170),
      cB = ZB(24),
      nB = ZB(2912),
      hB = ZB(38474),
      zB = ZB(8956),
      FB = ZB(40606);
    const NB = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var gB = ZB(40627),
      qB = ZB(8937),
      yB = ZB(39175);
    const UB = BB => BB.padSneakToggled || !!oB.d.get("clientEscMenuOptions").crouchIsToggle && BB.crouchToggled,
      WB = () => {
        const BB = (() => {
          const BB = (0, zB.d)();
          let IB = NB;
          const ZB = new FB.c;
          let TB = !1,
            JB = 0;
          const oB = () => {
            const ZB = performance.now(),
              oB = 0 === JB ? 0 : ZB - JB;
            if (JB = ZB, !TB) return BB.discardPending(), null;
            const GB = (0, FB.i)(IB, oB),
              vB = BB.drainLookDelta(),
              kB = (0, hB.e)();
            return {
              YH: (GB.YH + vB.YH) * kB,
              iH: (GB.iH + vB.iH) * kB
            }
          };
          return {
            update: (BB, JB, GB, vB) => {
              BB.camera.hV !== oB && (BB.camera.hV = oB), TB = !0, IB = (0, FB.l)(ZB, JB, GB, vB, performance.now())
            },
            release: () => {
              TB = !1, IB = NB, ZB.reset()
            },
            uninstall: BB => {
              BB.camera.hV === oB && (BB.camera.hV = null)
            }
          }
        })();
        return {
          update: (IB, ZB, TB) => {
            BB.update((0, nB.h)(), IB, ZB, TB)
          },
          release: BB.release,
          uninstall: () => {
            const IB = (0, nB.h)();
            IB && BB.uninstall(IB)
          }
        }
      };
    var dB = ZB(40619);
    ZB(37749), ZB(8857);
    ZB(8871).e;
    const CB = () => {
      const BB = (0, dB.b)((() => {
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
            bodies: () => (0, GB.e)(),
            look: WB(),
            move: (IB, ZB) => {
              const TB = (0, nB.h)(),
                JB = TB.zW.UZB();
              if (BB.x = IB.x, BB.y = IB.y, BB.magnitude = IB.magnitude, BB.headingOffset = IB.headingOffset, BB.jumpHeld = IB.jumpHeld, IB.jumpPressed && (BB.jumpPressedSinceTick = !0), BB.running = IB.running, BB.sprintHeld = IB.sprintHeld, ZB) {
                const IB = (0, gB.g)({
                  ...ZB,
                  descending: TB.zW.dIB(TB.Jm).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!TB.vW.canCrouch,
                  toggled: UB(JB)
                });
                BB.crouchHeld = IB.crouchHeld, JB.padSneakToggled = IB.toggled, JB.crouchToggled = !1, (0, qB.f)(IB.toggled)
              }
              JB.gamepad = BB
            },
            stopMoving: () => {
              var IB;
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
              const ZB = null === (IB = (0, nB.h)()) || void 0 === IB ? void 0 : IB.zW.UZB();
              (null === ZB || void 0 === ZB ? void 0 : ZB.gamepad) === BB && (ZB.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: BB => {
              const IB = (0, nB.h)(),
                ZB = null === IB || void 0 === IB ? void 0 : IB.zW.UZB();
              "touch" === BB ? ((0, qB.f)(!1), null !== ZB && void 0 !== ZB && ZB.padSneakToggled && (ZB.padSneakToggled = !1, ZB.isTouchscreen && !ZB.gamepad && IB.zW.uIB(IB.Jm).setCrouching(!!IB.vW.canCrouch && ZB.touchCrouch))) : "gamepad" === BB && ZB && (0, qB.f)(UB(ZB))
            },
            hasPlayer: () => {
              var BB;
              return !(null === (BB = (0, nB.h)()) || void 0 === BB || !BB.Jm)
            },
            isPlayerDead: () => {
              var BB;
              const IB = (0, nB.h)();
              return !1 === (null === (BB = IB.zW.hZB(IB.Jm)) || void 0 === BB ? void 0 : BB.isAlive)
            },
            isReplayMode: () => {
              var BB, IB;
              return !(null === (BB = (0, nB.d)()) || void 0 === BB || null === (IB = BB.client) || void 0 === IB || !IB.isReplayMode())
            },
            isFreeCameraOn: () => {
              var BB, IB, ZB;
              return !(null === (BB = (0, nB.d)()) || void 0 === BB || null === (IB = BB.client) || void 0 === IB || null === (ZB = IB.freeCameraController) || void 0 === ZB || !ZB.isEnabled())
            },
            targetsBlock: () => !!(0, nB.h)().lBB,
            selectedSlotEmpty: () => {
              var BB;
              const IB = (0, nB.h)();
              return !(null !== (BB = IB.zW.lIB(IB.Jm)) && void 0 !== BB && BB.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const BB = (0, nB.h)().vW;
              return !!BB.creative && !!BB.canPickBlocks
            },
            scrollHotbar: BB => {
              cB.l.Gq("ScrollInventorySlot", BB)
            },
            hasFullInventory: () => (0, kB.b)((0, nB.h)()),
            hasLobbyTab: () => (0, yB.d)((0, nB.h)().vW),
            contextActionInputs: () => {
              var BB, IB, ZB, TB;
              const JB = (0, nB.h)();
              return {
                holdingGun: !(null === (BB = JB.zW.zZB(JB.Jm)) || void 0 === BB || null === (IB = BB.JC) || void 0 === IB || !IB.isGun()),
                customButtons: null !== (ZB = JB.vW.customButtons) && void 0 !== ZB ? ZB : null,
                touchscreenActionButton: null !== (TB = JB.vW.touchscreenActionButton) && void 0 !== TB ? TB : null
              }
            },
            pressTouchButton: BB => {
              (0, vB.sendColyMessage)(JB.Hj, BB)
            }
          }
        })()),
        IB = (0, TB.e)(),
        ZB = null,
        oB = null;
      return () => {
        BB(), IB(), null === ZB || void 0 === ZB || ZB(), null === oB || void 0 === oB || oB()
      }
    }
  },
  36625: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB,
      c: () => gB,
      g: () => qB,
      h: () => vB,
      l: () => zB,
      p: () => yB,
      q: () => hB,
      s: () => WB,
      t: () => NB,
      w: () => UB
    });
    var TB = ZB(20),
      JB = ZB(24);
    const oB = "clientGameInventoryButtonsChanged",
      GB = new Map;

    function vB() {
      return [...GB.values()].sort(((BB, IB) => {
        var ZB, TB;
        return (null !== (ZB = BB.order) && void 0 !== ZB ? ZB : 0) - (null !== (TB = IB.order) && void 0 !== TB ? TB : 0)
      }))
    }
    let kB = null;

    function cB(BB) {
      kB = BB
    }
    let nB = !1;

    function hB(BB) {
      nB = !0;
      try {
        BB.onClick()
      } finally {
        nB = !1
      }
      BB.panel && "clientGame" === TB.d.get("openInGameMenuName") && cB(BB.id)
    }

    function zB() {
      return nB
    }

    function FB() {
      return vB().filter((BB => BB.panel && !BB.disabled))
    }

    function NB(BB) {
      const IB = FB(),
        ZB = IB.findIndex((BB => BB.id === kB));
      return !(ZB < 0 || IB.length < 2) && (hB(IB[(ZB + BB + IB.length) % IB.length]), !0)
    }

    function gB() {
      return null !== kB && FB().length > 1
    }

    function qB() {
      cB(null)
    }

    function yB() {
      "inventory" !== TB.d.get("openInGameMenuName") && cB(null)
    }

    function UB() {
      const BB = kB;
      return cB(null), BB
    }

    function WB(BB) {
      return GB.set(BB.id, BB), JB.l.Gq(oB, vB(), !0), () => {
        GB.get(BB.id) === BB && (GB.delete(BB.id), JB.l.Gq(oB, vB()))
      }
    }
  },
  36619: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => vB,
      f: () => qB,
      i: () => yB,
      m: () => zB,
      q: () => cB,
      t: () => gB,
      v: () => FB,
      x: () => nB
    });
    var TB = ZB(20),
      JB = ZB(24),
      oB = ZB(1353),
      GB = ZB(36625);
    const vB = "clientGameUiChanged";
    let kB = null;

    function cB() {
      return kB
    }

    function nB(BB, IB) {
      const ZB = {
        content: BB,
        menu: IB
      };
      return kB = ZB, JB.l.Gq(vB, kB, !0), () => {
        kB === ZB && (kB = null, NB = !1, qB(), JB.l.Gq(vB, null))
      }
    }
    let hB = null;

    function zB() {
      return hB
    }

    function FB(BB) {
      return hB = BB, () => {
        hB === BB && (hB = null)
      }
    }
    let NB = !1;

    function gB() {
      const BB = TB.d.get("openInGameMenuName");
      "clientGame" !== BB && (NB = "inventory" === BB), (0, GB.l)() || (0, GB.g)(), (0, oB.t)(oB.e), TB.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function qB() {
      UB(!1)
    }

    function yB() {
      UB(NB)
    }

    function UB(BB) {
      "clientGame" === TB.d.get("openInGameMenuName") && TB.d.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, GB.g)(), NB = !1
    }
  },
  36524: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => kB
    });
    var TB = ZB(342),
      JB = ZB(20),
      oB = ZB(36529),
      GB = ZB(1711),
      vB = ZB(2066);

    function kB(BB, IB) {
      var ZB, kB, cB;
      if (!JB.d.get("isKeydownEnabled") || BB.repeat) return;
      const nB = BB.code;
      "Escape" === BB.key ? (0, GB.f)(BB) : null !== (ZB = vB.u.OpenSettings) && void 0 !== ZB && ZB.includes(nB) ? (0, GB.x)(BB, TB.q.SETTINGS) : null !== (kB = vB.u.OpenCharacterCustomization) && void 0 !== kB && kB.includes(nB) ? (0, oB.d)() || (0, GB.x)(BB, TB.q.CUSTOMISATION, IB()) : null !== (cB = vB.u.ShowDebugOverlay) && void 0 !== cB && cB.includes(nB) && JB.d.set({
        showDebugOverlay: !JB.d.get("showDebugOverlay")
      })
    }
  },
  39039: (BB, IB, ZB) => {
    function TB(BB, IB, ZB, TB, JB) {
      var oB = {};
      return Object.keys(TB).forEach((function(BB) {
        oB[BB] = TB[BB]
      })), oB.enumerable = !!oB.enumerable, oB.configurable = !!oB.configurable, ("value" in oB || oB.initializer) && (oB.writable = !0), oB = ZB.slice().reverse().reduce((function(ZB, TB) {
        return TB(BB, IB, ZB) || ZB
      }), oB), JB && void 0 !== oB.initializer && (oB.value = oB.initializer ? oB.initializer.call(JB) : void 0, oB.initializer = void 0), void 0 === oB.initializer && (Object.defineProperty(BB, IB, oB), oB = null), oB
    }
    ZB.d(IB, {
      b: () => TB
    })
  },
  39032: (BB, IB, ZB) => {
    function TB(BB, IB, ZB, TB) {
      ZB && Object.defineProperty(BB, IB, {
        enumerable: ZB.enumerable,
        configurable: ZB.configurable,
        writable: ZB.writable,
        value: ZB.initializer ? ZB.initializer.call(TB) : void 0
      })
    }
    ZB.d(IB, {
      d: () => TB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
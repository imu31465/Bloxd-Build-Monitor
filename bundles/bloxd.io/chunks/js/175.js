export const id = 175;
export const ids = [175];
export const modules = {
  39813: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => jB,
      e: () => QB
    });
    var YB = GB(4505);
    let DB = null;

    function QB(BB) {
      return null !== DB && BB === DB
    }

    function oB() {
      this.IH = !1, this.stopPropagation = !1, this.iH = !1, this.disabled = !1
    }
    class jB {
      constructor(BB, OB) {
        this.version = "0.7.0";
        var GB = Object.assign({}, new oB, OB || {});
        this.element = BB || document, this.IH = !!GB.IH, this.stopPropagation = !!GB.stopPropagation, this.iH = !!GB.iH, this.disabled = !!GB.disabled, this.filterEvents = (BB, OB) => !0, this.ignoreEvent = BB => !1, this.down = new YB.EventEmitter, this.up = new YB.EventEmitter, this.state = {}, this.gH = {
          dx: 0,
          dy: 0,
          UGB: 0,
          fGB: 0,
          kGB: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? JB(this) : document.addEventListener("DOMContentLoaded", (BB => {
          JB(this)
        }), {
          once: !0
        })
      }
      bind(BB) {
        for (var OB = arguments.length, GB = new Array(OB > 1 ? OB - 1 : 0), YB = 1; YB < OB; YB++) GB[YB - 1] = arguments[YB];
        GB.forEach((OB => {
          var GB = this._keyBindmap[OB] || [];
          GB.includes(BB) || (GB.push(BB), this._keyBindmap[OB] = GB)
        })), this.state[BB] = !!this.state[BB], this.pressCount[BB] = this.pressCount[BB] || 0, this.releaseCount[BB] = this.releaseCount[BB] || 0
      }
      unbind(BB) {
        for (var OB in this._keyBindmap) {
          var GB = this._keyBindmap[OB],
            YB = GB.indexOf(BB);
          YB > -1 && GB.splice(YB, 1)
        }
      }
      getBindings() {
        var BB = {};
        for (var OB in this._keyBindmap) {
          this._keyBindmap[OB].forEach((GB => {
            BB[GB] = BB[GB] || [], BB[GB].push(OB)
          }))
        }
        return BB
      }
      kP() {
        yB(this.gH), yB(this.pressCount), yB(this.releaseCount)
      }
    }

    function yB(BB) {
      for (var OB in BB) BB[OB] = 0
    }

    function JB(BB) {
      window.addEventListener("keydown", ZB.bind(null, BB, !0), !1), window.addEventListener("keyup", ZB.bind(null, BB, !1), !1);
      var OB = {
        passive: !0
      };
      BB.element.addEventListener("touchstart", lB.bind(void 0, BB), {
        passive: !1
      }), BB.element.addEventListener("touchend", qB.bind(void 0, BB), OB), BB.element.addEventListener("mousedown", NB.bind(null, BB, !0), OB), window.document.addEventListener("mouseup", NB.bind(null, BB, !1), OB), BB.element.addEventListener("touchmove", RB.bind(null, BB), OB), BB.element.addEventListener("mousemove", RB.bind(null, BB), OB), window.PointerEvent, BB.element.addEventListener("wheel", WB.bind(null, BB), OB), BB.element.addEventListener("contextmenu", AB.bind(null, BB), !1), window.addEventListener("blur", nB.bind(null, BB), !1)
    }
    var MB = 0,
      PB = 0,
      zB = null;

    function lB(BB, OB) {
      OB.preventDefault(), pB(OB)
    }

    function pB(BB) {
      let OB = !1;
      for (let GB = 0; GB < BB.touches.length; ++GB)
        if (BB.touches[GB].identifier === zB) {
          OB = !0;
          break
        } if (!OB) {
        const OB = BB.changedTouches[0];
        MB = OB.clientX, PB = OB.clientY, zB = OB.identifier
      }
    }

    function qB(BB, OB) {
      for (var GB = OB.changedTouches, YB = 0; YB < GB.length; ++YB) GB[YB].identifier === zB && (zB = null)
    }

    function ZB(BB, OB, GB) {
      if (!BB.ignoreEvent(GB)) try {
        UB(BB, GB), OB && GB.isTrusted && !GB.repeat && BB._keyStates[GB.code] && fB(BB, GB.code)
      } finally {
        kB(GB.code, OB, BB, GB)
      }
    }

    function NB(BB, OB, GB) {
      if (!BB.ignoreEvent(GB)) try {
        UB(BB, GB)
      } finally {
        ! function(BB, OB, GB) {
          if ("pointerId" in GB)
            if (OB) {
              if (null !== BB._touches.currID) return;
              BB._touches.currID = GB.pointerId
            } else {
              if (BB._touches.currID !== GB.pointerId) return;
              BB._touches.currID = null
            } var YB = "button" in GB ? GB.button + 1 : 1;
          kB("Mouse" + YB, OB, BB, GB)
        }(BB, OB, GB)
      }
    }

    function RB(BB, OB) {
      var GB = OB.movementX || OB.mozMovementX || 0,
        YB = OB.movementY || OB.mozMovementY || 0;
      if (OB.touches && 0 === (GB | YB)) {
        var DB = function(BB) {
          pB(BB);
          for (let OB = 0; OB < BB.changedTouches.length; ++OB)
            if (BB.changedTouches[OB].identifier == zB) {
              const GB = BB.changedTouches[OB],
                YB = [GB.clientX - MB, GB.clientY - PB];
              return MB = GB.clientX, PB = GB.clientY, YB
            } return console.error(`Did not find touch id ${zB}`), [0, 0]
        }(OB);
        GB = DB[0], YB = DB[1]
      }
      BB.gH.dx += GB, BB.gH.dy += YB
    }

    function WB(BB, OB) {
      UB(BB, OB);
      var GB = 1;
      switch (OB.deltaMode) {
        case 0:
          GB = 1;
          break;
        case 1:
          GB = 12;
          break;
        case 2:
          GB = BB.element.clientHeight || window.innerHeight
      }
      BB.gH.UGB += (OB.deltaX || 0) * GB, BB.gH.fGB += (OB.deltaY || 0) * GB, BB.gH.kGB += (OB.deltaZ || 0) * GB
    }

    function AB(BB, OB) {
      if (!BB.iH) return OB.preventDefault(), !1
    }
    var VB = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function SB(BB, OB) {
      return !!BB[VB[OB]] || ("AltRight" === OB || "ControlLeft" === OB) && "function" === typeof BB.getModifierState && !0 === BB.getModifierState("AltGraph")
    }

    function nB(BB, OB) {
      for (var GB in BB._modifiersHeldThroughBlur = {}, VB) BB._keyStates[GB] && (BB._modifiersHeldThroughBlur[GB] = !0);
      OB && OB.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (BB) {
          return !0
        }
      }() && (clearTimeout(BB._blurRelease), BB._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var OB in BB._modifiersHeldThroughBlur = {}, BB._keyStates) BB._keyStates[OB] && !/^Mouse\d/.test(OB) && fB(BB, OB)
      }), 0))
    }

    function UB(BB, OB) {
      var GB = BB._modifiersHeldThroughBlur;
      if (GB && OB.isTrusted && document.hasFocus())
        for (var YB in GB) delete GB[YB], BB._keyStates[YB] && YB !== OB.code && (SB(OB, YB) || fB(BB, YB))
    }

    function fB(BB, OB) {
      const GB = {
          code: OB,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        YB = DB;
      DB = GB;
      try {
        kB(OB, !1, BB, GB)
      } finally {
        DB = YB
      }
    }

    function kB(BB, OB, GB, YB) {
      var DB = GB._keyBindmap[BB];
      DB && (dB(GB._keyStates[BB], OB) && (GB._keyStates[BB] = OB, DB.forEach((BB => {
        (!GB.filterEvents || GB.filterEvents(YB, BB)) && function(BB, OB, GB, YB) {
          var DB = OB ? GB.pressCount : GB.releaseCount;
          DB[BB] = (DB[BB] || 0) + 1;
          var QB = GB._bindPressCount[BB] || 0;
          (QB += OB ? 1 : -1) < 0 && (QB = 0);
          GB._bindPressCount[BB] = QB;
          var oB = GB.state[BB];
          if (dB(oB, QB)) {
            GB.state[BB] = QB > 0;
            var jB = OB ? GB.down : GB.up;
            GB.disabled || jB.emit(BB, YB)
          }
        }(BB, OB, GB, YB)
      }))), "button" in YB || (GB.IH && !YB.defaultPrevented && YB.preventDefault(), GB.stopPropagation && YB.stopPropagation()))
    }

    function dB(BB, OB) {
      return BB ? !OB : OB
    }
  },
  37353: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => qB,
      e: () => ZB
    });
    var YB = GB(56),
      DB = GB(1480),
      QB = GB(2063),
      oB = GB(37292),
      jB = GB(641),
      yB = GB(1090),
      JB = GB.n(yB),
      MB = GB(1282);
    const PB = [zB()];

    function zB() {
      return {
        source: null,
        direction: null,
        aE: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function lB(BB) {
      return PB.find((OB => null !== OB.source && OB.source === BB))
    }

    function pB(BB) {
      clearTimeout(BB.timeout), BB.source = null, BB.direction = null, BB.writtenAngle = null, BB.aE && (BB.aE.style.rotate = "")
    }
    const qB = (0, YB.memo)((function() {
      const [, BB] = (0, YB.useReducer)((BB => BB + 1), 0);
      return (0, DB.f)("damagedByOtherPlayer", (OB => {
        let {
          kY: GB,
          direction: YB
        } = OB;
        const DB = GB || "nonDirectional",
          QB = function(BB) {
            var OB;
            const GB = null !== (OB = lB(BB)) && void 0 !== OB ? OB : PB.find((BB => null === BB.source));
            if (GB) return GB;
            const YB = {
              source: null,
              direction: null,
              aE: null,
              timeout: void 0,
              writtenAngle: null
            };
            return PB.push(YB), YB
          }(DB);
        clearTimeout(QB.timeout), QB.source = DB, QB.direction = YB, QB.timeout = setTimeout((() => {
          pB(QB), BB()
        }), 800), BB()
      })), (0, QB.b)("kill", (OB => {
        let {
          killer: GB,
          victim: YB
        } = OB;
        const DB = GB.local && lB(YB.id);
        DB && (pB(DB), BB())
      })), (0, YB.useEffect)((() => {
        const BB = (0, oB.g)("turnDamageIndicators", ZB);
        return () => {
          BB(), PB.forEach(pB)
        }
      }), []), (0, MB.jsx)("div", {
        className: "DirectionalDamage",
        children: PB.map(((BB, OB) => (0, MB.jsx)("div", {
          ref: OB => {
            BB.aE = OB
          },
          className: JB()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, jB.Q)(BB.direction),
            DamageIndicatorIdle: null === BB.source
          })
        }, OB)))
      })
    }));

    function ZB(BB) {
      for (const OB of PB) {
        if (null === OB.source || (0, jB.Q)(OB.direction)) continue;
        const GB = OB.direction - BB;
        GB !== OB.writtenAngle && (OB.writtenAngle = GB, OB.aE.style.rotate = `${GB}rad`)
      }
    }
  },
  37166: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB,
      f: () => QB
    });
    let YB = !1;

    function DB() {
      return YB
    }

    function QB(BB) {
      return YB !== BB && (YB = BB, !0)
    }
  },
  41678: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      startPadGameplay: () => VB
    });
    GB(41548);
    var YB = GB(41553),
      DB = GB(4166),
      QB = GB(16),
      oB = GB(39774),
      jB = GB(4111),
      yB = GB(39797),
      JB = GB(25),
      MB = GB(3088),
      PB = GB(39093),
      zB = GB(9518),
      lB = GB(41555);
    const pB = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var qB = GB(41570),
      ZB = GB(9490),
      NB = GB(39804);
    const RB = BB => BB.padSneakToggled || !!QB.c.get("clientEscMenuOptions").crouchIsToggle && BB.crouchToggled,
      WB = () => {
        const BB = (() => {
          const BB = (0, zB.b)();
          let OB = pB;
          const GB = new lB.d;
          let YB = !1,
            DB = 0;
          const QB = () => {
            const GB = performance.now(),
              QB = 0 === DB ? 0 : GB - DB;
            if (DB = GB, !YB) return BB.discardPending(), null;
            const oB = (0, lB.n)(OB, QB),
              jB = BB.drainLookDelta(),
              yB = (0, PB.i)();
            return {
              Rm: (oB.Rm + jB.Rm) * yB,
              Wm: (oB.Wm + jB.Wm) * yB
            }
          };
          return {
            update: (BB, DB, oB, jB) => {
              BB.camera.I3 !== QB && (BB.camera.I3 = QB), YB = !0, OB = (0, lB.q)(GB, DB, oB, jB, performance.now())
            },
            release: () => {
              YB = !1, OB = pB, GB.reset()
            },
            uninstall: BB => {
              BB.camera.I3 === QB && (BB.camera.I3 = null)
            }
          }
        })();
        return {
          update: (OB, GB, YB) => {
            BB.update((0, MB.g)(), OB, GB, YB)
          },
          release: BB.release,
          uninstall: () => {
            const OB = (0, MB.g)();
            OB && BB.uninstall(OB)
          }
        }
      };
    var AB = GB(41562);
    GB(38351), GB(9402);
    GB(9418).e;
    const VB = () => {
      const BB = (0, AB.e)((() => {
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
            bodies: () => (0, oB.b)(),
            look: WB(),
            move: (OB, GB) => {
              const YB = (0, MB.g)(),
                DB = YB.DW.qYB();
              if (BB.x = OB.x, BB.y = OB.y, BB.magnitude = OB.magnitude, BB.headingOffset = OB.headingOffset, BB.jumpHeld = OB.jumpHeld, OB.jumpPressed && (BB.jumpPressedSinceTick = !0), BB.running = OB.running, BB.sprintHeld = OB.sprintHeld, GB) {
                const OB = (0, qB.g)({
                  ...GB,
                  descending: YB.DW.AGB(YB.EX).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!YB.xR.canCrouch,
                  toggled: RB(DB)
                });
                BB.crouchHeld = OB.crouchHeld, DB.padSneakToggled = OB.toggled, DB.crouchToggled = !1, (0, ZB.h)(OB.toggled)
              }
              DB.gamepad = BB
            },
            stopMoving: () => {
              var OB;
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
              const GB = null === (OB = (0, MB.g)()) || void 0 === OB ? void 0 : OB.DW.qYB();
              (null === GB || void 0 === GB ? void 0 : GB.gamepad) === BB && (GB.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: BB => {
              const OB = (0, MB.g)(),
                GB = null === OB || void 0 === OB ? void 0 : OB.DW.qYB();
              "touch" === BB ? ((0, ZB.h)(!1), null !== GB && void 0 !== GB && GB.padSneakToggled && (GB.padSneakToggled = !1, GB.isTouchscreen && !GB.gamepad && OB.DW.EGB(OB.EX).setCrouching(!!OB.xR.canCrouch && GB.touchCrouch))) : "gamepad" === BB && GB && (0, ZB.h)(RB(GB))
            },
            hasPlayer: () => {
              var BB;
              return !(null === (BB = (0, MB.g)()) || void 0 === BB || !BB.EX)
            },
            isPlayerDead: () => {
              var BB;
              const OB = (0, MB.g)();
              return !1 === (null === (BB = OB.DW.yYB(OB.EX)) || void 0 === BB ? void 0 : BB.isAlive)
            },
            isReplayMode: () => {
              var BB, OB;
              return !(null === (BB = (0, MB.d)()) || void 0 === BB || null === (OB = BB.client) || void 0 === OB || !OB.isReplayMode())
            },
            isFreeCameraOn: () => {
              var BB, OB, GB;
              return !(null === (BB = (0, MB.d)()) || void 0 === BB || null === (OB = BB.client) || void 0 === OB || null === (GB = OB.freeCameraController) || void 0 === GB || !GB.isEnabled())
            },
            targetsBlock: () => !!(0, MB.g)().hOB,
            selectedSlotEmpty: () => {
              var BB;
              const OB = (0, MB.g)();
              return !(null !== (BB = OB.DW.hGB(OB.EX)) && void 0 !== BB && BB.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const BB = (0, MB.g)().xR;
              return !!BB.creative && !!BB.canPickBlocks
            },
            scrollHotbar: BB => {
              JB.o.tM("ScrollInventorySlot", BB)
            },
            hasFullInventory: () => (0, yB.b)((0, MB.g)()),
            hasLobbyTab: () => (0, NB.b)((0, MB.g)().xR),
            contextActionInputs: () => {
              var BB, OB, GB, YB;
              const DB = (0, MB.g)();
              return {
                holdingGun: !(null === (BB = DB.DW.JYB(DB.EX)) || void 0 === BB || null === (OB = BB.cW) || void 0 === OB || !OB.isGun()),
                customButtons: null !== (GB = DB.xR.customButtons) && void 0 !== GB ? GB : null,
                touchscreenActionButton: null !== (YB = DB.xR.touchscreenActionButton) && void 0 !== YB ? YB : null
              }
            },
            pressTouchButton: BB => {
              (0, jB.sendColyMessage)(DB.Qj, BB)
            }
          }
        })()),
        OB = (0, YB.b)(),
        GB = null,
        QB = null;
      return () => {
        BB(), OB(), null === GB || void 0 === GB || GB(), null === QB || void 0 === QB || QB()
      }
    }
  },
  37270: (BB, OB, GB) => {
    GB.d(OB, {
      D: () => pB,
      G: () => RB,
      e: () => QB,
      i: () => qB,
      l: () => ZB,
      m: () => jB,
      q: () => zB,
      u: () => NB,
      y: () => PB,
      z: () => WB
    });
    var YB = GB(16),
      DB = GB(25);
    const QB = "clientGameInventoryButtonsChanged",
      oB = new Map;

    function jB() {
      return [...oB.values()].sort(((BB, OB) => {
        var GB, YB;
        return (null !== (GB = BB.order) && void 0 !== GB ? GB : 0) - (null !== (YB = OB.order) && void 0 !== YB ? YB : 0)
      }))
    }
    let yB = null;

    function JB(BB) {
      yB = BB
    }
    let MB = !1;

    function PB(BB) {
      MB = !0;
      try {
        BB.onClick()
      } finally {
        MB = !1
      }
      BB.panel && "clientGame" === YB.c.get("openInGameMenuName") && JB(BB.id)
    }

    function zB() {
      return MB
    }

    function lB() {
      return jB().filter((BB => BB.panel && !BB.disabled))
    }

    function pB(BB) {
      const OB = lB(),
        GB = OB.findIndex((BB => BB.id === yB));
      return !(GB < 0 || OB.length < 2) && (PB(OB[(GB + BB + OB.length) % OB.length]), !0)
    }

    function qB() {
      return null !== yB && lB().length > 1
    }

    function ZB() {
      JB(null)
    }

    function NB() {
      "inventory" !== YB.c.get("openInGameMenuName") && JB(null)
    }

    function RB() {
      const BB = yB;
      return JB(null), BB
    }

    function WB(BB) {
      return oB.set(BB.id, BB), DB.o.tM(QB, jB(), !0), () => {
        oB.get(BB.id) === BB && (oB.delete(BB.id), DB.o.tM(QB, jB()))
      }
    }
  },
  37267: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => jB,
      f: () => RB,
      g: () => ZB,
      i: () => NB,
      m: () => zB,
      n: () => JB,
      o: () => qB,
      r: () => lB,
      s: () => MB
    });
    var YB = GB(16),
      DB = GB(25),
      QB = GB(1293),
      oB = GB(37270);
    const jB = "clientGameUiChanged";
    let yB = null;

    function JB() {
      return yB
    }

    function MB(BB, OB) {
      const GB = {
        content: BB,
        menu: OB
      };
      return yB = GB, DB.o.tM(jB, yB, !0), () => {
        yB === GB && (yB = null, pB = !1, ZB(), DB.o.tM(jB, null))
      }
    }
    let PB = null;

    function zB() {
      return PB
    }

    function lB(BB) {
      return PB = BB, () => {
        PB === BB && (PB = null)
      }
    }
    let pB = !1;

    function qB() {
      const BB = YB.c.get("openInGameMenuName");
      "clientGame" !== BB && (pB = "inventory" === BB), (0, oB.q)() || (0, oB.l)(), (0, QB.p)(QB.b), YB.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ZB() {
      WB(!1)
    }

    function NB() {
      WB(pB)
    }

    function RB() {
      pB && WB(!1)
    }

    function WB(BB) {
      "clientGame" === YB.c.get("openInGameMenuName") && YB.c.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, oB.l)(), pB = !1
    }
  },
  37163: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => yB
    });
    var YB = GB(331),
      DB = GB(16),
      QB = GB(37166),
      oB = GB(1699),
      jB = GB(2085);

    function yB(BB, OB) {
      var GB, yB, JB;
      if (!DB.c.get("isKeydownEnabled") || BB.repeat) return;
      const MB = BB.code;
      "Escape" === BB.key ? (0, oB.i)(BB) : null !== (GB = jB.t.OpenSettings) && void 0 !== GB && GB.includes(MB) ? (0, oB.A)(BB, YB.p.SETTINGS) : null !== (yB = jB.t.OpenCharacterCustomization) && void 0 !== yB && yB.includes(MB) ? (0, QB.b)() || (0, oB.A)(BB, YB.p.CUSTOMISATION, OB()) : null !== (JB = jB.t.ShowDebugOverlay) && void 0 !== JB && JB.includes(MB) && DB.c.set({
        showDebugOverlay: !DB.c.get("showDebugOverlay")
      })
    }
  },
  39769: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => yB
    });
    var YB = GB(9599),
      DB = GB(37160),
      QB = GB(39772);
    const oB = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      jB = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function yB(BB, OB) {
      if (BB instanceof DB.d) return {
        at: oB[OB],
        code: 0
      };
      const GB = (0, YB.d)(BB),
        yB = "number" === typeof GB ? GB : 0;
      return null !== (0, QB.i)(yB).name ? {
        at: "refused",
        code: yB
      } : {
        at: jB[OB],
        code: yB
      }
    }
  },
  9599: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      d: () => oB,
      h: () => jB,
      k: () => JB,
      m: () => yB
    });
    var YB = GB(192),
      DB = GB(5047);

    function QB(BB) {
      return oB(BB) === YB.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function oB(BB) {
      return "object" === typeof BB && null !== BB ? BB.code : void 0
    }

    function jB(BB) {
      var OB;
      return null !== (OB = Object.keys(DB.b).find((OB => DB.b[OB] === BB))) && void 0 !== OB ? OB : null
    }

    function yB(BB) {
      return "notWhitelisted" === BB ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const JB = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  37139: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => zB,
      d: () => MB,
      g: () => lB,
      h: () => PB
    });
    var YB = GB(353),
      DB = GB(675),
      QB = GB(679),
      oB = GB(31);
    const jB = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      yB = "playSessionGameNameWithVariation",
      JB = "wasMatchmakePlayer";

    function MB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB.i;
      (0, QB.h)(BB, jB)
    }

    function PB() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB.i).setItem(JB, !0)
    }

    function zB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB.i;
      return (0, QB.e)(BB, jB)
    }

    function lB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oB.i;
      const GB = (0, QB.e)(OB, jB),
        MB = function(BB) {
          const OB = BB.getItem(yB);
          return "string" !== typeof OB ? null : OB
        }(OB),
        PB = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB.i).getItem(JB)
        }(OB);
      let zB;
      return zB = null !== GB && null !== MB && (0, QB.f)(OB, jB) && function(BB, OB, GB) {
          const DB = (0, YB.ac)(BB),
            QB = (0, YB.ac)(OB),
            oB = (0, YB.Xb)(BB),
            jB = (0, YB.Xb)(OB);
          return !(DB !== QB || !GB) || DB === QB && oB === jB
        }(MB, BB, PB) ? GB : (0, DB.d)(), (0, QB.k)(OB, jB, zB), OB.setItem(yB, BB),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB.i).removeItem(JB)
        }(OB), zB
    }
  },
  37132: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => VB,
      d: () => SB
    });
    var YB = GB(1049),
      DB = GB(204),
      QB = GB(347),
      oB = GB(645),
      jB = GB(353),
      yB = GB(1053),
      JB = GB(662),
      MB = GB(694),
      PB = GB(4936),
      zB = GB(92),
      lB = GB(120),
      pB = GB(1822),
      qB = GB(104),
      ZB = GB(37139),
      NB = GB(31),
      RB = GB(677),
      WB = GB(649),
      AB = GB(37142);

    function VB() {
      var BB, OB;
      return [...null !== (BB = navigator.languages) && void 0 !== BB ? BB : [null !== (OB = navigator.language) && void 0 !== OB ? OB : "none"], "En-GB"]
    }

    function SB(BB, OB, GB, SB, nB) {
      const UB = (0, YB.l)(OB) ? (0, YB.r)(OB) : null,
        fB = BB.isLoggedIn() && void 0 !== (0, DB.c)(QB.k, lB.siteUsed) ? (0, WB.d)() : null,
        kB = {
          cookies: (0, pB.getAllCookiesForGameNameWithVariation)(OB),
          isMobile: (0, zB.isMobile)(),
          isUsingCustomGameTexturePack: null !== UB && nB(UB),
          generalCookies: {
            joinDiscord: !!NB.g.getItem("DiscordPressed"),
            newGo: PB.c,
            ...BB.getMetricsCookies(),
            trafficCode: SB,
            compliance: zB.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, zB.getBrowserName)(),
            version: (0, zB.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, zB.getPlatformType)(),
            deviceType: (0, qB.d)()
          },
          isLoggedIn: BB.isLoggedIn(),
          lobbyName: GB,
          languages: VB(),
          version: oB.b,
          siteUsed: lB.siteUsed,
          subsiteUsed: lB.subsiteUsed,
          playSessionId: (0, ZB.g)(OB),
          visitSessionId: (0, RB.getVisitSessionId)(),
          clientReason: JB.u.reason,
          budgetBasis: (0, AB.j)(),
          ...null !== MB.r && {
            diagClaim: MB.r.claimId
          },
          ...null !== fB && {
            webGpuLoss: fB
          }
        };
      return null !== UB && (0, jB.Tc)(UB) ? (kB.lobbyName = (0, YB.h)(UB, (0, YB.n)(OB), GB), {
        roomName: `classic_${yB.g}`,
        joinOptions: kB
      }) : {
        roomName: OB,
        joinOptions: kB
      }
    }
  },
  39772: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB,
      e: () => QB,
      f: () => jB,
      i: () => MB,
      k: () => yB,
      m: () => oB
    });
    var YB = GB(192);
    const DB = 3e3,
      QB = 15e3;

    function oB(BB) {
      const OB = BB.endsWith(YB.m);
      return {
        text: (OB ? BB.slice(0, -YB.m.length) : BB) || null,
        dropsCache: OB
      }
    }
    const jB = "Either your internet isn't working or this is a bug.";

    function yB(BB, OB) {
      const GB = MB(BB);
      return null !== GB.name && "" === YB.c[GB.name].text && null !== OB ? OB : GB.reason
    }
    const JB = "You were removed from the game.";

    function MB(BB) {
      var OB;
      let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const DB = null !== (OB = Object.keys(YB.c).find((OB => YB.c[OB].code === BB))) && void 0 !== OB ? OB : null;
      if (null === DB) return {
        code: BB,
        name: DB,
        reason: null !== GB && void 0 !== GB ? GB : `${jB}\nCode: ${BB}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: QB,
        canReconnect: oB = !1
      } = YB.c[DB], yB = BB === YB.c.outdatedVersion.code || BB === YB.c.loadRecaptchaError.code;
      return {
        code: BB,
        name: DB,
        reason: "" !== QB ? QB : null !== GB && void 0 !== GB ? GB : BB === YB.c.gameOrPluginKick.code ? JB : `Code: ${BB}`,
        canReconnect: oB,
        automaticallyReconnect: BB === YB.c.customGameUpdated.code || BB === YB.c.duplicateLobbyNameError.code,
        requiresRefresh: yB
      }
    }
  },
  39686: (BB, OB, GB) => {
    function YB(BB, OB, GB, YB, DB) {
      var QB = {};
      return Object.keys(YB).forEach((function(BB) {
        QB[BB] = YB[BB]
      })), QB.enumerable = !!QB.enumerable, QB.configurable = !!QB.configurable, ("value" in QB || QB.initializer) && (QB.writable = !0), QB = GB.slice().reverse().reduce((function(GB, YB) {
        return YB(BB, OB, GB) || GB
      }), QB), DB && void 0 !== QB.initializer && (QB.value = QB.initializer ? QB.initializer.call(DB) : void 0, QB.initializer = void 0), void 0 === QB.initializer && (Object.defineProperty(BB, OB, QB), QB = null), QB
    }
    GB.d(OB, {
      b: () => YB
    })
  },
  39684: (BB, OB, GB) => {
    function YB(BB, OB, GB, YB) {
      GB && Object.defineProperty(BB, OB, {
        enumerable: GB.enumerable,
        configurable: GB.configurable,
        writable: GB.writable,
        value: GB.initializer ? GB.initializer.call(YB) : void 0
      })
    }
    GB.d(OB, {
      d: () => YB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
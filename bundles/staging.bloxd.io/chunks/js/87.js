export const id = 87;
export const ids = [85, 87];
export const modules = {
  38060: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ,
      d: () => eJ
    });
    var FJ = ZJ(3572);
    let UJ = null;

    function eJ(JJ) {
      return null !== UJ && JJ === UJ
    }

    function XJ() {
      this.kN = !1, this.stopPropagation = !1, this.pN = !1, this.disabled = !1
    }
    class AJ {
      constructor(JJ, cJ) {
        this.version = "0.7.0";
        var ZJ = Object.assign({}, new XJ, cJ || {});
        this.element = JJ || document, this.kN = !!ZJ.kN, this.stopPropagation = !!ZJ.stopPropagation, this.pN = !!ZJ.pN, this.disabled = !!ZJ.disabled, this.filterEvents = (JJ, cJ) => !0, this.down = new FJ.EventEmitter, this.up = new FJ.EventEmitter, this.state = {}, this.iN = {
          dx: 0,
          dy: 0,
          RJJ: 0,
          LJJ: 0,
          aJJ: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? jJ(this) : document.addEventListener("DOMContentLoaded", (JJ => {
          jJ(this)
        }), {
          once: !0
        })
      }
      bind(JJ) {
        for (var cJ = arguments.length, ZJ = new Array(cJ > 1 ? cJ - 1 : 0), FJ = 1; FJ < cJ; FJ++) ZJ[FJ - 1] = arguments[FJ];
        ZJ.forEach((cJ => {
          var ZJ = this._keyBindmap[cJ] || [];
          ZJ.includes(JJ) || (ZJ.push(JJ), this._keyBindmap[cJ] = ZJ)
        })), this.state[JJ] = !!this.state[JJ], this.pressCount[JJ] = this.pressCount[JJ] || 0, this.releaseCount[JJ] = this.releaseCount[JJ] || 0
      }
      unbind(JJ) {
        for (var cJ in this._keyBindmap) {
          var ZJ = this._keyBindmap[cJ],
            FJ = ZJ.indexOf(JJ);
          FJ > -1 && ZJ.splice(FJ, 1)
        }
      }
      getBindings() {
        var JJ = {};
        for (var cJ in this._keyBindmap) {
          this._keyBindmap[cJ].forEach((ZJ => {
            JJ[ZJ] = JJ[ZJ] || [], JJ[ZJ].push(cJ)
          }))
        }
        return JJ
      }
      Hh() {
        qJ(this.iN), qJ(this.pressCount), qJ(this.releaseCount)
      }
    }

    function qJ(JJ) {
      for (var cJ in JJ) JJ[cJ] = 0
    }

    function jJ(JJ) {
      window.addEventListener("keydown", fJ.bind(null, JJ, !0), !1), window.addEventListener("keyup", fJ.bind(null, JJ, !1), !1);
      var cJ = {
        passive: !0
      };
      JJ.element.addEventListener("touchstart", sJ.bind(void 0, JJ), {
        passive: !1
      }), JJ.element.addEventListener("touchend", GJ.bind(void 0, JJ), cJ), JJ.element.addEventListener("mousedown", xJ.bind(null, JJ, !0), cJ), window.document.addEventListener("mouseup", xJ.bind(null, JJ, !1), cJ), JJ.element.addEventListener("touchmove", rJ.bind(null, JJ), cJ), JJ.element.addEventListener("mousemove", rJ.bind(null, JJ), cJ), window.PointerEvent, JJ.element.addEventListener("wheel", vJ.bind(null, JJ), cJ), JJ.element.addEventListener("contextmenu", mJ.bind(null, JJ), !1), window.addEventListener("blur", VJ.bind(null, JJ), !1)
    }
    var YJ = 0,
      hJ = 0,
      DJ = null;

    function sJ(JJ, cJ) {
      cJ.preventDefault(), nJ(cJ)
    }

    function nJ(JJ) {
      let cJ = !1;
      for (let ZJ = 0; ZJ < JJ.touches.length; ++ZJ)
        if (JJ.touches[ZJ].identifier === DJ) {
          cJ = !0;
          break
        } if (!cJ) {
        const cJ = JJ.changedTouches[0];
        YJ = cJ.clientX, hJ = cJ.clientY, DJ = cJ.identifier
      }
    }

    function GJ(JJ, cJ) {
      for (var ZJ = cJ.changedTouches, FJ = 0; FJ < ZJ.length; ++FJ) ZJ[FJ].identifier === DJ && (DJ = null)
    }

    function fJ(JJ, cJ, ZJ) {
      try {
        KJ(JJ, ZJ), cJ && ZJ.isTrusted && !ZJ.repeat && JJ._keyStates[ZJ.code] && yJ(JJ, ZJ.code)
      } finally {
        SJ(ZJ.code, cJ, JJ, ZJ)
      }
    }

    function xJ(JJ, cJ, ZJ) {
      try {
        KJ(JJ, ZJ)
      } finally {
        ! function(JJ, cJ, ZJ) {
          if ("pointerId" in ZJ)
            if (cJ) {
              if (null !== JJ._touches.currID) return;
              JJ._touches.currID = ZJ.pointerId
            } else {
              if (JJ._touches.currID !== ZJ.pointerId) return;
              JJ._touches.currID = null
            } var FJ = "button" in ZJ ? ZJ.button + 1 : 1;
          SJ("Mouse" + FJ, cJ, JJ, ZJ)
        }(JJ, cJ, ZJ)
      }
    }

    function rJ(JJ, cJ) {
      var ZJ = cJ.movementX || cJ.mozMovementX || 0,
        FJ = cJ.movementY || cJ.mozMovementY || 0;
      if (cJ.touches && 0 === (ZJ | FJ)) {
        var UJ = function(JJ) {
          nJ(JJ);
          for (let cJ = 0; cJ < JJ.changedTouches.length; ++cJ)
            if (JJ.changedTouches[cJ].identifier == DJ) {
              const ZJ = JJ.changedTouches[cJ],
                FJ = [ZJ.clientX - YJ, ZJ.clientY - hJ];
              return YJ = ZJ.clientX, hJ = ZJ.clientY, FJ
            } return console.error(`Did not find touch id ${DJ}`), [0, 0]
        }(cJ);
        ZJ = UJ[0], FJ = UJ[1]
      }
      JJ.iN.dx += ZJ, JJ.iN.dy += FJ
    }

    function vJ(JJ, cJ) {
      KJ(JJ, cJ);
      var ZJ = 1;
      switch (cJ.deltaMode) {
        case 0:
          ZJ = 1;
          break;
        case 1:
          ZJ = 12;
          break;
        case 2:
          ZJ = JJ.element.clientHeight || window.innerHeight
      }
      JJ.iN.RJJ += (cJ.deltaX || 0) * ZJ, JJ.iN.LJJ += (cJ.deltaY || 0) * ZJ, JJ.iN.aJJ += (cJ.deltaZ || 0) * ZJ
    }

    function mJ(JJ, cJ) {
      if (!JJ.pN) return cJ.preventDefault(), !1
    }
    var QJ = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function EJ(JJ, cJ) {
      return !!JJ[QJ[cJ]] || ("AltRight" === cJ || "ControlLeft" === cJ) && "function" === typeof JJ.getModifierState && !0 === JJ.getModifierState("AltGraph")
    }

    function VJ(JJ, cJ) {
      for (var ZJ in JJ._modifiersHeldThroughBlur = {}, QJ) JJ._keyStates[ZJ] && (JJ._modifiersHeldThroughBlur[ZJ] = !0);
      cJ && cJ.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (JJ) {
          return !0
        }
      }() && (clearTimeout(JJ._blurRelease), JJ._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var cJ in JJ._modifiersHeldThroughBlur = {}, JJ._keyStates) JJ._keyStates[cJ] && !/^Mouse\d/.test(cJ) && yJ(JJ, cJ)
      }), 0))
    }

    function KJ(JJ, cJ) {
      var ZJ = JJ._modifiersHeldThroughBlur;
      if (ZJ && cJ.isTrusted && document.hasFocus())
        for (var FJ in ZJ) delete ZJ[FJ], JJ._keyStates[FJ] && FJ !== cJ.code && (EJ(cJ, FJ) || yJ(JJ, FJ))
    }

    function yJ(JJ, cJ) {
      const ZJ = {
          code: cJ,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        FJ = UJ;
      UJ = ZJ;
      try {
        SJ(cJ, !1, JJ, ZJ)
      } finally {
        UJ = FJ
      }
    }

    function SJ(JJ, cJ, ZJ, FJ) {
      var UJ = ZJ._keyBindmap[JJ];
      UJ && (IJ(ZJ._keyStates[JJ], cJ) && (ZJ._keyStates[JJ] = cJ, UJ.forEach((JJ => {
        (!ZJ.filterEvents || ZJ.filterEvents(FJ, JJ)) && function(JJ, cJ, ZJ, FJ) {
          var UJ = cJ ? ZJ.pressCount : ZJ.releaseCount;
          UJ[JJ] = (UJ[JJ] || 0) + 1;
          var eJ = ZJ._bindPressCount[JJ] || 0;
          (eJ += cJ ? 1 : -1) < 0 && (eJ = 0);
          ZJ._bindPressCount[JJ] = eJ;
          var XJ = ZJ.state[JJ];
          if (IJ(XJ, eJ)) {
            ZJ.state[JJ] = eJ > 0;
            var AJ = cJ ? ZJ.down : ZJ.up;
            ZJ.disabled || AJ.emit(JJ, FJ)
          }
        }(JJ, cJ, ZJ, FJ)
      }))), "button" in FJ || (ZJ.kN && !FJ.defaultPrevented && FJ.preventDefault(), ZJ.stopPropagation && FJ.stopPropagation()))
    }

    function IJ(JJ, cJ) {
      return JJ ? !cJ : cJ
    }
  },
  35745: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => sJ,
      e: () => nJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(2514),
      eJ = ZJ(1326),
      XJ = ZJ(1743),
      AJ = ZJ(35678),
      qJ = ZJ(535),
      jJ = ZJ(926),
      YJ = ZJ.n(jJ),
      hJ = ZJ(990);
    const DJ = {},
      sJ = (0, FJ.memo)((function() {
        const JJ = (0, UJ.c)();
        return (0, eJ.i)("damagedByOtherPlayer", (cJ => {
          let {
            ac: ZJ,
            direction: FJ
          } = cJ;
          const UJ = ZJ || "nonDirectional";
          if (DJ[UJ]) {
            const cJ = DJ[UJ];
            clearTimeout(cJ.timeout), cJ.direction = FJ, cJ.timeout = setTimeout((() => {
              delete DJ[UJ], JJ()
            }), 800)
          } else DJ[UJ] = {
            direction: FJ,
            vW: null,
            timeout: setTimeout((() => {
              delete DJ[UJ], JJ()
            }), 800)
          };
          JJ()
        })), (0, XJ.b)("kill", (cJ => {
          let {
            killer: ZJ,
            victim: FJ
          } = cJ;
          const UJ = FJ.id;
          ZJ.local && UJ && UJ in DJ && (clearTimeout(DJ[UJ].timeout), delete DJ[UJ], JJ())
        })), (0, FJ.useEffect)((() => {
          const JJ = (0, AJ.g)("turnDamageIndicators", nJ);
          return () => {
            JJ();
            for (const JJ in DJ) clearTimeout(DJ[JJ].timeout), delete DJ[JJ]
          }
        }), []), (0, hJ.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(DJ).map((JJ => {
            let [cJ, ZJ] = JJ;
            const FJ = (0, qJ.P)(ZJ.direction);
            return (0, hJ.jsx)("div", {
              ref: JJ => {
                DJ[cJ] && (DJ[cJ].vW = JJ)
              },
              className: YJ()("DamageIndicator", {
                DamageIndicatorFullCircle: FJ
              })
            }, cJ)
          }))
        })
      }));

    function nJ(JJ) {
      for (const cJ in DJ) {
        const {
          direction: ZJ,
          vW: FJ
        } = DJ[cJ];
        if ((0, qJ.P)(ZJ)) continue;
        const UJ = ZJ - JJ;
        FJ.style.rotate = `${UJ}rad`
      }
    }
  },
  35650: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => qJ,
      g: () => jJ
    });
    const FJ = .1,
      UJ = .35,
      eJ = .85,
      XJ = .06,
      AJ = .22;

    function qJ(JJ) {
      if (JJ < FJ) return 0;
      if (JJ < UJ) {
        const cJ = (JJ - FJ) / (UJ - FJ);
        return XJ + (AJ - XJ) * cJ * cJ
      }
      return JJ < eJ ? AJ + (1 - AJ) * (JJ - UJ) / (eJ - UJ) : 1
    }

    function jJ(JJ) {
      return JJ.touchEdgeGuard && JJ.touchSpeedCurve
    }
  },
  35676: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ, ZJ, FJ) {
      return !(ZJ && !JJ.aimable) && (!cJ || JJ.gun && "head" !== FJ)
    }

    function UJ(JJ) {
      return Math.max(.1 * JJ, 1)
    }
    ZJ.d(cJ, {
      c: () => UJ,
      d: () => FJ
    })
  },
  35678: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => AJ,
      g: () => XJ
    });
    let FJ = null;
    const UJ = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      eJ = {
        crosshairAccuracy: JJ => {
          const cJ = UJ.crosshairAccuracy.at(-1);
          cJ ? cJ.hook(JJ) : FJ = JJ
        },
        turnDamageIndicators: JJ => {
          var cJ;
          null === (cJ = UJ.turnDamageIndicators.at(-1)) || void 0 === cJ || cJ.hook(JJ)
        }
      };

    function XJ(JJ, cJ) {
      const ZJ = {
          hook: cJ
        },
        XJ = UJ[JJ];
      if (XJ.push(ZJ), "crosshairAccuracy" === JJ && null !== FJ) {
        const JJ = FJ;
        FJ = null, eJ.crosshairAccuracy(JJ)
      }
      return () => {
        const JJ = XJ.indexOf(ZJ); - 1 !== JJ && XJ.splice(JJ, 1)
      }
    }

    function AJ() {
      return eJ
    }
  },
  35562: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ,
      e: () => eJ
    });
    let FJ = !1;

    function UJ() {
      return FJ
    }

    function eJ(JJ) {
      return FJ !== JJ && (FJ = JJ, !0)
    }
  },
  35683: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ,
      f: () => UJ
    });
    var FJ = ZJ(13);

    function UJ(JJ, cJ) {
      return JJ && !cJ
    }

    function eJ() {
      return UJ(FJ.d.get("isTouchScreen"), FJ.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  39442: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      startPadGameplay: () => mJ
    });
    ZJ(39312);
    var FJ = ZJ(39317),
      UJ = ZJ(3242),
      eJ = ZJ(13),
      XJ = ZJ(38026),
      AJ = ZJ(3155),
      qJ = ZJ(38044),
      jJ = ZJ(17),
      YJ = ZJ(2401),
      hJ = ZJ(37422),
      DJ = ZJ(8151),
      sJ = ZJ(39325);
    const nJ = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var GJ = ZJ(39347),
      fJ = ZJ(8128);
    const xJ = JJ => JJ.padSneakToggled || !!eJ.d.get("clientEscMenuOptions").crouchIsToggle && JJ.crouchToggled,
      rJ = () => {
        const JJ = (() => {
          const JJ = (0, DJ.c)();
          let cJ = nJ;
          const ZJ = new sJ.b;
          let FJ = !1,
            UJ = 0;
          const eJ = () => {
            const ZJ = performance.now(),
              eJ = 0 === UJ ? 0 : ZJ - UJ;
            if (UJ = ZJ, !FJ) return JJ.discardPending(), null;
            const XJ = (0, sJ.j)(cJ, eJ),
              AJ = JJ.drainLookDelta(),
              qJ = (0, hJ.i)();
            return {
              bK: (XJ.bK + AJ.bK) * qJ,
              zK: (XJ.zK + AJ.zK) * qJ
            }
          };
          return {
            update: (JJ, UJ, XJ, AJ) => {
              JJ.camera.lC !== eJ && (JJ.camera.lC = eJ), FJ = !0, cJ = (0, sJ.n)(ZJ, UJ, XJ, AJ, performance.now())
            },
            release: () => {
              FJ = !1, cJ = nJ, ZJ.reset()
            },
            uninstall: JJ => {
              JJ.camera.lC === eJ && (JJ.camera.lC = null)
            }
          }
        })();
        return {
          update: (cJ, ZJ, FJ) => {
            JJ.update((0, YJ.h)(), cJ, ZJ, FJ)
          },
          release: JJ.release,
          uninstall: () => {
            const cJ = (0, YJ.h)();
            cJ && JJ.uninstall(cJ)
          }
        }
      };
    var vJ = ZJ(39341);
    ZJ(36655), ZJ(8004);
    ZJ(8024).c;
    const mJ = () => {
      const JJ = (0, vJ.e)((() => {
          const JJ = {
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
            bodies: () => (0, XJ.b)(),
            look: rJ(),
            move: (cJ, ZJ) => {
              const FJ = (0, YJ.h)(),
                UJ = FJ.qE.pcJ();
              if (JJ.x = cJ.x, JJ.y = cJ.y, JJ.magnitude = cJ.magnitude, JJ.headingOffset = cJ.headingOffset, JJ.jumpHeld = cJ.jumpHeld, cJ.jumpPressed && (JJ.jumpPressedSinceTick = !0), JJ.running = cJ.running, JJ.sprintHeld = cJ.sprintHeld, ZJ) {
                const cJ = (0, GJ.d)({
                  ...ZJ,
                  descending: FJ.qE.TJJ(FJ.XM).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!FJ.ZE.canCrouch,
                  toggled: xJ(UJ)
                });
                JJ.crouchHeld = cJ.crouchHeld, UJ.padSneakToggled = cJ.toggled, UJ.crouchToggled = !1, (0, fJ.i)(cJ.toggled)
              }
              UJ.gamepad = JJ
            },
            stopMoving: () => {
              var cJ;
              Object.assign(JJ, {
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
              const ZJ = null === (cJ = (0, YJ.h)()) || void 0 === cJ ? void 0 : cJ.qE.pcJ();
              (null === ZJ || void 0 === ZJ ? void 0 : ZJ.gamepad) === JJ && (ZJ.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: JJ => {
              const cJ = (0, YJ.h)(),
                ZJ = null === cJ || void 0 === cJ ? void 0 : cJ.qE.pcJ();
              "touch" === JJ ? ((0, fJ.i)(!1), null !== ZJ && void 0 !== ZJ && ZJ.padSneakToggled && (ZJ.padSneakToggled = !1, ZJ.isTouchscreen && !ZJ.gamepad && cJ.qE.jcJ(cJ.XM).setCrouching(!!cJ.ZE.canCrouch && ZJ.touchCrouch))) : "gamepad" === JJ && ZJ && (0, fJ.i)(xJ(ZJ))
            },
            hasPlayer: () => {
              var JJ;
              return !(null === (JJ = (0, YJ.h)()) || void 0 === JJ || !JJ.XM)
            },
            isPlayerDead: () => {
              var JJ;
              const cJ = (0, YJ.h)();
              return !1 === (null === (JJ = cJ.qE.bcJ(cJ.XM)) || void 0 === JJ ? void 0 : JJ.isAlive)
            },
            isReplayMode: () => {
              var JJ, cJ;
              return !(null === (JJ = (0, YJ.d)()) || void 0 === JJ || null === (cJ = JJ.client) || void 0 === cJ || !cJ.isReplayMode())
            },
            isFreeCameraOn: () => {
              var JJ, cJ, ZJ;
              return !(null === (JJ = (0, YJ.d)()) || void 0 === JJ || null === (cJ = JJ.client) || void 0 === cJ || null === (ZJ = cJ.freeCameraController) || void 0 === ZJ || !ZJ.isEnabled())
            },
            targetsBlock: () => !!(0, YJ.h)().fJJ,
            selectedSlotEmpty: () => {
              var JJ;
              const cJ = (0, YJ.h)();
              return !(null !== (JJ = cJ.qE.hcJ(cJ.XM)) && void 0 !== JJ && JJ.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const JJ = (0, YJ.h)().ZE;
              return !!JJ.creative && !!JJ.canPickBlocks
            },
            scrollHotbar: JJ => {
              jJ.i.Uf("ScrollInventorySlot", JJ)
            },
            hasFullInventory: () => (0, qJ.b)((0, YJ.h)()),
            hasLobbyLeaderboard: () => !!(0, YJ.h)().ZE.lobbyLeaderboardInfo,
            contextActionInputs: () => {
              var JJ, cJ, ZJ, FJ;
              const UJ = (0, YJ.h)();
              return {
                holdingGun: !(null === (JJ = UJ.qE.wcJ(UJ.XM)) || void 0 === JJ || null === (cJ = JJ.cV) || void 0 === cJ || !cJ.isGun()),
                customButtons: null !== (ZJ = UJ.ZE.customButtons) && void 0 !== ZJ ? ZJ : null,
                touchscreenActionButton: null !== (FJ = UJ.ZE.touchscreenActionButton) && void 0 !== FJ ? FJ : null
              }
            },
            pressTouchButton: JJ => {
              (0, AJ.sendColyMessage)(UJ.tj, JJ)
            }
          }
        })()),
        cJ = (0, FJ.b)(),
        ZJ = null,
        eJ = null;
      return () => {
        JJ(), cJ(), null === ZJ || void 0 === ZJ || ZJ(), null === eJ || void 0 === eJ || eJ()
      }
    }
  },
  35665: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ,
      c: () => GJ,
      f: () => fJ,
      j: () => AJ,
      l: () => DJ,
      m: () => xJ,
      p: () => hJ,
      t: () => vJ,
      v: () => nJ,
      z: () => rJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17);
    const eJ = "clientGameInventoryButtonsChanged",
      XJ = new Map;

    function AJ() {
      return [...XJ.values()].sort(((JJ, cJ) => {
        var ZJ, FJ;
        return (null !== (ZJ = JJ.order) && void 0 !== ZJ ? ZJ : 0) - (null !== (FJ = cJ.order) && void 0 !== FJ ? FJ : 0)
      }))
    }
    let qJ = null;

    function jJ(JJ) {
      qJ = JJ
    }
    let YJ = !1;

    function hJ(JJ) {
      YJ = !0;
      try {
        JJ.onClick()
      } finally {
        YJ = !1
      }
      JJ.panel && "clientGame" === FJ.d.get("openInGameMenuName") && jJ(JJ.id)
    }

    function DJ() {
      return YJ
    }

    function sJ() {
      return AJ().filter((JJ => JJ.panel && !JJ.disabled))
    }

    function nJ(JJ) {
      const cJ = sJ(),
        ZJ = cJ.findIndex((JJ => JJ.id === qJ));
      return !(ZJ < 0 || cJ.length < 2) && (hJ(cJ[(ZJ + JJ + cJ.length) % cJ.length]), !0)
    }

    function GJ() {
      return null !== qJ && sJ().length > 1
    }

    function fJ() {
      jJ(null)
    }

    function xJ() {
      "inventory" !== FJ.d.get("openInGameMenuName") && jJ(null)
    }

    function rJ() {
      const JJ = qJ;
      return jJ(null), JJ
    }

    function vJ(JJ) {
      return XJ.set(JJ.id, JJ), UJ.i.Uf(eJ, AJ(), !0), () => {
        XJ.get(JJ.id) === JJ && (XJ.delete(JJ.id), UJ.i.Uf(eJ, AJ()))
      }
    }
  },
  35661: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ,
      f: () => fJ,
      j: () => xJ,
      k: () => DJ,
      m: () => jJ,
      n: () => GJ,
      r: () => sJ,
      u: () => YJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17),
      eJ = ZJ(1184),
      XJ = ZJ(35665);
    const AJ = "clientGameUiChanged";
    let qJ = null;

    function jJ() {
      return qJ
    }

    function YJ(JJ, cJ) {
      const ZJ = {
        content: JJ,
        menu: cJ
      };
      return qJ = ZJ, UJ.i.Uf(AJ, qJ, !0), () => {
        qJ === ZJ && (qJ = null, nJ = !1, fJ(), UJ.i.Uf(AJ, null))
      }
    }
    let hJ = null;

    function DJ() {
      return hJ
    }

    function sJ(JJ) {
      return hJ = JJ, () => {
        hJ === JJ && (hJ = null)
      }
    }
    let nJ = !1;

    function GJ() {
      const JJ = FJ.d.get("openInGameMenuName");
      "clientGame" !== JJ && (nJ = "inventory" === JJ), (0, XJ.l)() || (0, XJ.f)(), (0, eJ.h)("InGameMenu"), FJ.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function fJ() {
      rJ(!1)
    }

    function xJ() {
      rJ(nJ)
    }

    function rJ(JJ) {
      "clientGame" === FJ.d.get("openInGameMenuName") && FJ.d.set({
        openInGameMenuName: JJ ? "inventory" : null
      }), JJ || (0, XJ.f)(), nJ = !1
    }
  },
  35560: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => qJ
    });
    var FJ = ZJ(227),
      UJ = ZJ(13),
      eJ = ZJ(35562),
      XJ = ZJ(1528),
      AJ = ZJ(1756);

    function qJ(JJ, cJ) {
      var ZJ, qJ, jJ;
      if (!UJ.d.get("isKeydownEnabled") || JJ.repeat) return;
      const YJ = JJ.code;
      "Escape" === JJ.key ? (0, XJ.i)(JJ) : null !== (ZJ = AJ.z.OpenSettings) && void 0 !== ZJ && ZJ.includes(YJ) ? (0, XJ.s)(JJ, FJ.m.SETTINGS) : null !== (qJ = AJ.z.OpenCharacterCustomization) && void 0 !== qJ && qJ.includes(YJ) ? (0, eJ.b)() || (0, XJ.s)(JJ, FJ.m.CUSTOMISATION, cJ()) : null !== (jJ = AJ.z.ShowDebugOverlay) && void 0 !== jJ && jJ.includes(YJ) && UJ.d.set({
        showDebugOverlay: !UJ.d.get("showDebugOverlay")
      })
    }
  },
  4259: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      Howl: () => FJ.Howl,
      b: () => FJ.Howler,
      readyAudioContext: () => UJ
    });
    var FJ = ZJ(4267);

    function UJ() {
      const JJ = FJ.Howler;
      var cJ;
      (JJ.volume(), JJ.ctx && JJ.autoUnlock) && (null === (cJ = JJ._unlockAudio) || void 0 === cJ || cJ.call(JJ))
    }
    FJ.Howler._mobileUnloaded = !0
  },
  35554: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => DJ,
      f: () => YJ,
      h: () => sJ,
      i: () => hJ
    });
    var FJ = ZJ(235),
      UJ = ZJ(556),
      eJ = ZJ(976),
      XJ = ZJ(29);
    const AJ = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      qJ = "playSessionGameNameWithVariation",
      jJ = "wasMatchmakePlayer";

    function YJ() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XJ.k;
      (0, eJ.f)(JJ, AJ)
    }

    function hJ() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XJ.k).setItem(jJ, !0)
    }

    function DJ() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XJ.k;
      return (0, eJ.b)(JJ, AJ)
    }

    function sJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XJ.k;
      const ZJ = (0, eJ.b)(cJ, AJ),
        YJ = function(JJ) {
          const cJ = JJ.getItem(qJ);
          return "string" !== typeof cJ ? null : cJ
        }(cJ),
        hJ = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XJ.k).getItem(jJ)
        }(cJ);
      let DJ;
      return DJ = null !== ZJ && null !== YJ && (0, eJ.c)(cJ, AJ) && function(JJ, cJ, ZJ) {
          const UJ = (0, FJ.Jb)(JJ),
            eJ = (0, FJ.Jb)(cJ),
            XJ = (0, FJ.Hb)(JJ),
            AJ = (0, FJ.Hb)(cJ);
          return !(UJ !== eJ || !ZJ) || UJ === eJ && XJ === AJ
        }(YJ, JJ, hJ) ? ZJ : (0, UJ.b)(), (0, eJ.i)(cJ, AJ, DJ), cJ.setItem(qJ, JJ),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XJ.k).removeItem(jJ)
        }(cJ), DJ
    }
  },
  35551: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => fJ,
      c: () => xJ
    });
    var FJ = ZJ(889),
      UJ = ZJ(538),
      eJ = ZJ(235),
      XJ = ZJ(896),
      AJ = ZJ(547),
      qJ = ZJ(3935),
      jJ = ZJ(80),
      YJ = ZJ(112),
      hJ = ZJ(1599),
      DJ = ZJ(93),
      sJ = ZJ(35554),
      nJ = ZJ(29),
      GJ = ZJ(969);

    function fJ() {
      var JJ, cJ;
      return [...null !== (JJ = navigator.languages) && void 0 !== JJ ? JJ : [null !== (cJ = navigator.language) && void 0 !== cJ ? cJ : "none"], "En-Gb"]
    }

    function xJ(JJ, cJ, ZJ, xJ, rJ) {
      const vJ = (0, FJ.k)(cJ) ? (0, FJ.n)(cJ) : null,
        mJ = {
          cookies: (0, hJ.getAllCookiesForGameNameWithVariation)(cJ),
          isMobile: (0, jJ.isMobile)(),
          isUsingCustomGameTexturePack: null !== vJ && rJ(vJ),
          generalCookies: {
            joinDiscord: !!nJ.j.getItem("DiscordPressed"),
            newGo: qJ.c,
            ...JJ.getMetricsCookies(),
            trafficCode: xJ,
            compliance: jJ.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, jJ.getBrowserName)(),
            version: (0, jJ.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, jJ.getPlatformType)(),
            deviceType: (0, DJ.e)()
          },
          isLoggedIn: JJ.isLoggedIn(),
          lobbyName: ZJ,
          languages: fJ(),
          version: UJ.b,
          siteUsed: YJ.n,
          subsiteUsed: YJ.y,
          playSessionId: (0, sJ.h)(cJ),
          visitSessionId: (0, GJ.d)(),
          clientReason: AJ.i.reason
        };
      return null !== vJ && (0, eJ.oc)(vJ) ? (mJ.lobbyName = (0, FJ.j)(vJ, (0, FJ.l)(cJ), ZJ), {
        roomName: `classic_${XJ.e}`,
        joinOptions: mJ
      }) : {
        roomName: cJ,
        joinOptions: mJ
      }
    }
  },
  35806: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ,
      h: () => UJ,
      j: () => FJ
    });

    function FJ(JJ) {
      return JJ.replace(/[_\-\s]*\d+$/, "") || JJ
    }

    function UJ(JJ, cJ, ZJ) {
      return ZJ <= 0 ? 0 : JJ * ZJ / Math.max(cJ, ZJ)
    }

    function eJ(JJ, cJ) {
      const ZJ = JJ.getDurationMs();
      return ZJ > 0 ? JJ.loudness * Math.max(0, 1 - (cJ - JJ.startMs) / ZJ) : 0
    }
    class XJ {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = JJ, this.maxPerGroup = cJ, this.voices = []
      }
      admit(JJ) {
        if (this.voices = this.voices.filter((JJ => JJ.isAlive())), null !== JJ.group) {
          const cJ = this.voices.filter((cJ => cJ.group === JJ.group));
          if (cJ.length >= this.maxPerGroup && !this.dropLeastWorth(cJ, JJ)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, JJ)) && (this.voices.push(JJ), !0)
      }
      dropLeastWorth(JJ, cJ) {
        let ZJ = null,
          FJ = 1 / 0;
        for (const UJ of JJ) {
          if (!UJ.canStop()) continue;
          const JJ = eJ(UJ, cJ.startMs);
          JJ < FJ && (ZJ = UJ, FJ = JJ)
        }
        return !(!ZJ || cJ.loudness < FJ) && (this.voices.splice(this.voices.indexOf(ZJ), 1), ZJ.stop(), !0)
      }
    }
  },
  35815: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ,
      h: () => XJ,
      j: () => FJ
    });
    class FJ {
      constructor(JJ) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = JJ
      }
      setMultiplierType(JJ, cJ) {
        var ZJ;
        this.multipliers[JJ] = cJ, null === (ZJ = this._onUpdate) || void 0 === ZJ || ZJ.call(this)
      }
      removeMultiplier(JJ) {
        var cJ;
        delete this.multipliers[JJ], null === (cJ = this._onUpdate) || void 0 === cJ || cJ.call(this)
      }
      getMultiplierType(JJ) {
        return this.multipliers[JJ]
      }
      getTotalMultipliedVal() {
        let JJ = 1;
        for (const cJ in this.multipliers) JJ *= this.multipliers[cJ];
        return JJ
      }
    }
    class UJ {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = JJ
      }
      setBooleanType(JJ, cJ) {
        const ZJ = this._getTotalBooleanVal();
        this.booleans[JJ] = !!cJ;
        const FJ = this.getTotalBooleanVal();
        var UJ;
        FJ !== ZJ && (null === (UJ = this._onUpdate) || void 0 === UJ || UJ.call(this, FJ, this.booleans));
        return FJ
      }
      removeBoolean(JJ) {
        const cJ = this._getTotalBooleanVal();
        delete this.booleans[JJ];
        const ZJ = this._getTotalBooleanVal();
        var FJ;
        null !== ZJ && ZJ !== cJ && (null === (FJ = this._onUpdate) || void 0 === FJ || FJ.call(this, ZJ, this.booleans));
        return null !== ZJ && void 0 !== ZJ && ZJ
      }
      getBooleanType(JJ) {
        return this.booleans[JJ]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var JJ;
        null === (JJ = this._onUpdate) || void 0 === JJ || JJ.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class eJ extends UJ {
      getTotalBooleanVal() {
        const JJ = this._getTotalBooleanVal();
        if (null === JJ) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return JJ
      }
      _getTotalBooleanVal() {
        let JJ = !1,
          cJ = !0;
        for (const ZJ in this.booleans) JJ = !0, cJ &&= this.booleans[ZJ];
        return JJ ? cJ : null
      }
    }
    class XJ extends UJ {
      getTotalBooleanVal() {
        const JJ = this._getTotalBooleanVal();
        if (null === JJ) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return JJ
      }
      _getTotalBooleanVal() {
        let JJ = !1,
          cJ = !1;
        for (const ZJ in this.booleans) JJ = !0, cJ ||= this.booleans[ZJ];
        return JJ ? cJ : null
      }
    }
  },
  35813: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ,
      g: () => FJ,
      k: () => UJ
    });
    const FJ = 15,
      UJ = 3,
      eJ = 30
  },
  35886: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      g: () => eJ,
      k: () => DJ,
      m: () => AJ,
      p: () => qJ,
      r: () => jJ,
      u: () => hJ,
      v: () => YJ,
      x: () => XJ
    });
    var FJ = ZJ(1137);
    let UJ = function(JJ) {
        return JJ[JJ.Join = 0] = "Join", JJ[JJ.Leave = 1] = "Leave", JJ[JJ.Push = 2] = "Push", JJ[JJ.Cursor = 3] = "Cursor", JJ[JJ.Submit = 4] = "Submit", JJ[JJ.ReloadAsVariation = 5] = "ReloadAsVariation", JJ[JJ.CreateFile = 6] = "CreateFile", JJ[JJ.RenameFile = 7] = "RenameFile", JJ[JJ.DeleteFile = 8] = "DeleteFile", JJ[JJ.SetEngine = 9] = "SetEngine", JJ[JJ.RenameFolder = 10] = "RenameFolder", JJ
      }({}),
      eJ = function(JJ) {
        return JJ[JJ.Joined = 0] = "Joined", JJ[JJ.Updates = 1] = "Updates", JJ[JJ.Presence = 2] = "Presence", JJ[JJ.RemoteCursor = 3] = "RemoteCursor", JJ[JJ.ForceClose = 4] = "ForceClose", JJ[JJ.LobbyFilesChanged = 5] = "LobbyFilesChanged", JJ[JJ.EngineSettings = 6] = "EngineSettings", JJ
      }({});

    function XJ(JJ) {
      return "lobby" === JJ.kind ? `lobby:${JJ.path}` : `codeBlock:${JJ.pos[0]},${JJ.pos[1]},${JJ.pos[2]}`
    }

    function AJ(JJ) {
      if ("lobby" === JJ) return {
        kind: "lobby",
        path: FJ.g
      };
      if (JJ.startsWith("lobby:")) {
        const cJ = JJ.slice(6);
        return hJ(cJ) ? {
          kind: "lobby",
          path: cJ
        } : null
      }
      const cJ = JJ.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return cJ ? {
        kind: "codeBlock",
        pos: [parseInt(cJ[1]), parseInt(cJ[2]), parseInt(cJ[3])]
      } : null
    }

    function qJ(JJ) {
      return JJ.endsWith(".d.ts")
    }

    function jJ(JJ) {
      return JJ.endsWith(".ts") && !qJ(JJ)
    }
    const YJ = 64;

    function hJ(JJ) {
      if (!JJ || JJ !== JJ.trim()) return !1;
      if (JJ.length > YJ) return !1;
      if (JJ.startsWith("/") || JJ.includes("\\") || JJ.includes("\0")) return !1;
      if (!qJ(JJ) && !jJ(JJ) && ! function(JJ) {
          return JJ.endsWith(".js") && !JJ.endsWith(".min.js") && !JJ.endsWith(".bundle.js")
        }(JJ)) return !1;
      const cJ = JJ.split("/");
      for (const ZJ of cJ)
        if ("" === ZJ || "." === ZJ || ".." === ZJ) return !1;
      return !0
    }
    const DJ = 14e3
  },
  37988: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ, ZJ, FJ, UJ) {
      var eJ = {};
      return Object.keys(FJ).forEach((function(JJ) {
        eJ[JJ] = FJ[JJ]
      })), eJ.enumerable = !!eJ.enumerable, eJ.configurable = !!eJ.configurable, ("value" in eJ || eJ.initializer) && (eJ.writable = !0), eJ = ZJ.slice().reverse().reduce((function(ZJ, FJ) {
        return FJ(JJ, cJ, ZJ) || ZJ
      }), eJ), UJ && void 0 !== eJ.initializer && (eJ.value = eJ.initializer ? eJ.initializer.call(UJ) : void 0, eJ.initializer = void 0), void 0 === eJ.initializer && (Object.defineProperty(JJ, cJ, eJ), eJ = null), eJ
    }
    ZJ.d(cJ, {
      b: () => FJ
    })
  },
  37984: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ, ZJ, FJ) {
      ZJ && Object.defineProperty(JJ, cJ, {
        enumerable: ZJ.enumerable,
        configurable: ZJ.configurable,
        writable: ZJ.writable,
        value: ZJ.initializer ? ZJ.initializer.call(FJ) : void 0
      })
    }
    ZJ.d(cJ, {
      b: () => FJ
    })
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);
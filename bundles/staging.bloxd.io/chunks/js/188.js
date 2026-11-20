export const id = 188;
export const ids = [188];
export const modules = {
  38631: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => pv,
      c: () => ev
    });
    var hv = Pv(3856);
    let Sv = null;

    function ev(vv) {
      return null !== Sv && vv === Sv
    }

    function gv() {
      this.yI = !1, this.stopPropagation = !1, this.JI = !1, this.disabled = !1
    }
    class pv {
      constructor(vv, zv) {
        this.version = "0.7.0";
        var Pv = Object.assign({}, new gv, zv || {});
        this.element = vv || document, this.yI = !!Pv.yI, this.stopPropagation = !!Pv.stopPropagation, this.JI = !!Pv.JI, this.disabled = !!Pv.disabled, this.filterEvents = (vv, zv) => !0, this.ignoreEvent = vv => !1, this.down = new hv.EventEmitter, this.up = new hv.EventEmitter, this.state = {}, this.FQ = {
          dx: 0,
          dy: 0,
          vvv: 0,
          zvv: 0,
          Pvv: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Nv(this) : document.addEventListener("DOMContentLoaded", (vv => {
          Nv(this)
        }), {
          once: !0
        })
      }
      bind(vv) {
        for (var zv = arguments.length, Pv = new Array(zv > 1 ? zv - 1 : 0), hv = 1; hv < zv; hv++) Pv[hv - 1] = arguments[hv];
        Pv.forEach((zv => {
          var Pv = this._keyBindmap[zv] || [];
          Pv.includes(vv) || (Pv.push(vv), this._keyBindmap[zv] = Pv)
        })), this.state[vv] = !!this.state[vv], this.pressCount[vv] = this.pressCount[vv] || 0, this.releaseCount[vv] = this.releaseCount[vv] || 0
      }
      unbind(vv) {
        for (var zv in this._keyBindmap) {
          var Pv = this._keyBindmap[zv],
            hv = Pv.indexOf(vv);
          hv > -1 && Pv.splice(hv, 1)
        }
      }
      getBindings() {
        var vv = {};
        for (var zv in this._keyBindmap) {
          this._keyBindmap[zv].forEach((Pv => {
            vv[Pv] = vv[Pv] || [], vv[Pv].push(zv)
          }))
        }
        return vv
      }
      MT() {
        dv(this.FQ), dv(this.pressCount), dv(this.releaseCount)
      }
    }

    function dv(vv) {
      for (var zv in vv) vv[zv] = 0
    }

    function Nv(vv) {
      window.addEventListener("keydown", Cv.bind(null, vv, !0), !1), window.addEventListener("keyup", Cv.bind(null, vv, !1), !1);
      var zv = {
        passive: !0
      };
      vv.element.addEventListener("touchstart", wv.bind(void 0, vv), {
        passive: !1
      }), vv.element.addEventListener("touchend", sv.bind(void 0, vv), zv), vv.element.addEventListener("mousedown", iv.bind(null, vv, !0), zv), window.document.addEventListener("mouseup", iv.bind(null, vv, !1), zv), vv.element.addEventListener("touchmove", cv.bind(null, vv), zv), vv.element.addEventListener("mousemove", cv.bind(null, vv), zv), window.PointerEvent, vv.element.addEventListener("wheel", Gv.bind(null, vv), zv), vv.element.addEventListener("contextmenu", mv.bind(null, vv), !1), window.addEventListener("blur", Fv.bind(null, vv), !1)
    }
    var lv = 0,
      Tv = 0,
      Wv = null;

    function wv(vv, zv) {
      zv.preventDefault(), av(zv)
    }

    function av(vv) {
      let zv = !1;
      for (let Pv = 0; Pv < vv.touches.length; ++Pv)
        if (vv.touches[Pv].identifier === Wv) {
          zv = !0;
          break
        } if (!zv) {
        const zv = vv.changedTouches[0];
        lv = zv.clientX, Tv = zv.clientY, Wv = zv.identifier
      }
    }

    function sv(vv, zv) {
      for (var Pv = zv.changedTouches, hv = 0; hv < Pv.length; ++hv) Pv[hv].identifier === Wv && (Wv = null)
    }

    function Cv(vv, zv, Pv) {
      if (!vv.ignoreEvent(Pv)) try {
        Yv(vv, Pv), zv && Pv.isTrusted && !Pv.repeat && vv._keyStates[Pv.code] && nv(vv, Pv.code)
      } finally {
        Ov(Pv.code, zv, vv, Pv)
      }
    }

    function iv(vv, zv, Pv) {
      if (!vv.ignoreEvent(Pv)) try {
        Yv(vv, Pv)
      } finally {
        ! function(vv, zv, Pv) {
          if ("pointerId" in Pv)
            if (zv) {
              if (null !== vv._touches.currID) return;
              vv._touches.currID = Pv.pointerId
            } else {
              if (vv._touches.currID !== Pv.pointerId) return;
              vv._touches.currID = null
            } var hv = "button" in Pv ? Pv.button + 1 : 1;
          Ov("Mouse" + hv, zv, vv, Pv)
        }(vv, zv, Pv)
      }
    }

    function cv(vv, zv) {
      var Pv = zv.movementX || zv.mozMovementX || 0,
        hv = zv.movementY || zv.mozMovementY || 0;
      if (zv.touches && 0 === (Pv | hv)) {
        var Sv = function(vv) {
          av(vv);
          for (let zv = 0; zv < vv.changedTouches.length; ++zv)
            if (vv.changedTouches[zv].identifier == Wv) {
              const Pv = vv.changedTouches[zv],
                hv = [Pv.clientX - lv, Pv.clientY - Tv];
              return lv = Pv.clientX, Tv = Pv.clientY, hv
            } return console.error(`Did not find touch id ${Wv}`), [0, 0]
        }(zv);
        Pv = Sv[0], hv = Sv[1]
      }
      vv.FQ.dx += Pv, vv.FQ.dy += hv
    }

    function Gv(vv, zv) {
      Yv(vv, zv);
      var Pv = 1;
      switch (zv.deltaMode) {
        case 0:
          Pv = 1;
          break;
        case 1:
          Pv = 12;
          break;
        case 2:
          Pv = vv.element.clientHeight || window.innerHeight
      }
      vv.FQ.vvv += (zv.deltaX || 0) * Pv, vv.FQ.zvv += (zv.deltaY || 0) * Pv, vv.FQ.Pvv += (zv.deltaZ || 0) * Pv
    }

    function mv(vv, zv) {
      if (!vv.JI) return zv.preventDefault(), !1
    }
    var jv = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function fv(vv, zv) {
      return !!vv[jv[zv]] || ("AltRight" === zv || "ControlLeft" === zv) && "function" === typeof vv.getModifierState && !0 === vv.getModifierState("AltGraph")
    }

    function Fv(vv, zv) {
      for (var Pv in vv._modifiersHeldThroughBlur = {}, jv) vv._keyStates[Pv] && (vv._modifiersHeldThroughBlur[Pv] = !0);
      zv && zv.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (vv) {
          return !0
        }
      }() && (clearTimeout(vv._blurRelease), vv._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var zv in vv._modifiersHeldThroughBlur = {}, vv._keyStates) vv._keyStates[zv] && !/^Mouse\d/.test(zv) && nv(vv, zv)
      }), 0))
    }

    function Yv(vv, zv) {
      var Pv = vv._modifiersHeldThroughBlur;
      if (Pv && zv.isTrusted && document.hasFocus())
        for (var hv in Pv) delete Pv[hv], vv._keyStates[hv] && hv !== zv.code && (fv(zv, hv) || nv(vv, hv))
    }

    function nv(vv, zv) {
      const Pv = {
          code: zv,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        hv = Sv;
      Sv = Pv;
      try {
        Ov(zv, !1, vv, Pv)
      } finally {
        Sv = hv
      }
    }

    function Ov(vv, zv, Pv, hv) {
      var Sv = Pv._keyBindmap[vv];
      Sv && (Dv(Pv._keyStates[vv], zv) && (Pv._keyStates[vv] = zv, Sv.forEach((vv => {
        (!Pv.filterEvents || Pv.filterEvents(hv, vv)) && function(vv, zv, Pv, hv) {
          var Sv = zv ? Pv.pressCount : Pv.releaseCount;
          Sv[vv] = (Sv[vv] || 0) + 1;
          var ev = Pv._bindPressCount[vv] || 0;
          (ev += zv ? 1 : -1) < 0 && (ev = 0);
          Pv._bindPressCount[vv] = ev;
          var gv = Pv.state[vv];
          if (Dv(gv, ev)) {
            Pv.state[vv] = ev > 0;
            var pv = zv ? Pv.down : Pv.up;
            Pv.disabled || pv.emit(vv, hv)
          }
        }(vv, zv, Pv, hv)
      }))), "button" in hv || (Pv.yI && !hv.defaultPrevented && hv.preventDefault(), Pv.stopPropagation && hv.stopPropagation()))
    }

    function Dv(vv, zv) {
      return vv ? !zv : zv
    }
  },
  36190: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => sv,
      f: () => Cv
    });
    var hv = Pv(52),
      Sv = Pv(1439),
      ev = Pv(1923),
      gv = Pv(36153),
      pv = Pv(626),
      dv = Pv(1035),
      Nv = Pv.n(dv),
      lv = Pv(1082);
    const Tv = [Wv()];

    function Wv() {
      return {
        source: null,
        direction: null,
        hU: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function wv(vv) {
      return Tv.find((zv => null !== zv.source && zv.source === vv))
    }

    function av(vv) {
      clearTimeout(vv.timeout), vv.source = null, vv.direction = null, vv.writtenAngle = null, vv.hU && (vv.hU.style.rotate = "")
    }
    const sv = (0, hv.memo)((function() {
      const [, vv] = (0, hv.useReducer)((vv => vv + 1), 0);
      return (0, Sv.g)("damagedByOtherPlayer", (zv => {
        let {
          Je: Pv,
          direction: hv
        } = zv;
        const Sv = Pv || "nonDirectional",
          ev = function(vv) {
            var zv;
            const Pv = null !== (zv = wv(vv)) && void 0 !== zv ? zv : Tv.find((vv => null === vv.source));
            if (Pv) return Pv;
            const hv = {
              source: null,
              direction: null,
              hU: null,
              timeout: void 0,
              writtenAngle: null
            };
            return Tv.push(hv), hv
          }(Sv);
        clearTimeout(ev.timeout), ev.source = Sv, ev.direction = hv, ev.timeout = setTimeout((() => {
          av(ev), vv()
        }), 800), vv()
      })), (0, ev.d)("kill", (zv => {
        let {
          killer: Pv,
          victim: hv
        } = zv;
        const Sv = Pv.local && wv(hv.id);
        Sv && (av(Sv), vv())
      })), (0, hv.useEffect)((() => {
        const vv = (0, gv.c)("turnDamageIndicators", Cv);
        return () => {
          vv(), Tv.forEach(av)
        }
      }), []), (0, lv.jsx)("div", {
        className: "DirectionalDamage",
        children: Tv.map(((vv, zv) => (0, lv.jsx)("div", {
          ref: zv => {
            vv.hU = zv
          },
          className: Nv()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, pv.N)(vv.direction),
            DamageIndicatorIdle: null === vv.source
          })
        }, zv)))
      })
    }));

    function Cv(vv) {
      for (const zv of Tv) {
        if (null === zv.source || (0, pv.N)(zv.direction)) continue;
        const Pv = zv.direction - vv;
        Pv !== zv.writtenAngle && (zv.writtenAngle = Pv, zv.hU.style.rotate = `${Pv}rad`)
      }
    }
  },
  36031: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv,
      d: () => ev
    });
    let hv = !1;

    function Sv() {
      return hv
    }

    function ev(vv) {
      return hv !== vv && (hv = vv, !0)
    }
  },
  8931: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      f: () => Sv
    });
    var hv = Pv(22);

    function Sv(vv, zv) {
      return vv && !zv
    }

    function ev() {
      return Sv(hv.c.get("isTouchScreen"), hv.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  39981: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      startPadGameplay: () => jv
    });
    Pv(39851);
    var hv = Pv(39854),
      Sv = Pv(3539),
      ev = Pv(22),
      gv = Pv(38610),
      pv = Pv(3438),
      dv = Pv(38620),
      Nv = Pv(26),
      lv = Pv(2599),
      Tv = Pv(37950),
      Wv = Pv(8536),
      wv = Pv(39861);
    const av = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var sv = Pv(39882),
      Cv = Pv(8513),
      iv = Pv(38629);
    const cv = vv => vv.padSneakToggled || !!ev.c.get("clientEscMenuOptions").crouchIsToggle && vv.crouchToggled,
      Gv = () => {
        const vv = (() => {
          const vv = (0, Wv.c)();
          let zv = av;
          const Pv = new wv.d;
          let hv = !1,
            Sv = 0;
          const ev = () => {
            const Pv = performance.now(),
              ev = 0 === Sv ? 0 : Pv - Sv;
            if (Sv = Pv, !hv) return vv.discardPending(), null;
            const gv = (0, wv.p)(zv, ev),
              pv = vv.drainLookDelta(),
              dv = (0, Tv.g)();
            return {
              ND: (gv.ND + pv.ND) * dv,
              lD: (gv.lD + pv.lD) * dv
            }
          };
          return {
            update: (vv, Sv, gv, pv) => {
              vv.camera.WH !== ev && (vv.camera.WH = ev), hv = !0, zv = (0, wv.q)(Pv, Sv, gv, pv, performance.now())
            },
            release: () => {
              hv = !1, zv = av, Pv.reset()
            },
            uninstall: vv => {
              vv.camera.WH === ev && (vv.camera.WH = null)
            }
          }
        })();
        return {
          update: (zv, Pv, hv) => {
            vv.update((0, lv.g)(), zv, Pv, hv)
          },
          release: vv.release,
          uninstall: () => {
            const zv = (0, lv.g)();
            zv && vv.uninstall(zv)
          }
        }
      };
    var mv = Pv(39874);
    Pv(37182), Pv(8424);
    Pv(8438).b;
    const jv = () => {
      const vv = (0, mv.e)((() => {
          const vv = {
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
            bodies: () => (0, gv.e)(),
            look: Gv(),
            move: (zv, Pv) => {
              const hv = (0, lv.g)(),
                Sv = hv.Rm.Bvv();
              if (vv.x = zv.x, vv.y = zv.y, vv.magnitude = zv.magnitude, vv.headingOffset = zv.headingOffset, vv.jumpHeld = zv.jumpHeld, zv.jumpPressed && (vv.jumpPressedSinceTick = !0), vv.running = zv.running, vv.sprintHeld = zv.sprintHeld, Pv) {
                const zv = (0, sv.g)({
                  ...Pv,
                  descending: hv.Rm.I3(hv.sV).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!hv.Om.canCrouch,
                  toggled: cv(Sv)
                });
                vv.crouchHeld = zv.crouchHeld, Sv.padSneakToggled = zv.toggled, Sv.crouchToggled = !1, (0, Cv.e)(zv.toggled)
              }
              Sv.gamepad = vv
            },
            stopMoving: () => {
              var zv;
              Object.assign(vv, {
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
              const Pv = null === (zv = (0, lv.g)()) || void 0 === zv ? void 0 : zv.Rm.Bvv();
              (null === Pv || void 0 === Pv ? void 0 : Pv.gamepad) === vv && (Pv.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: vv => {
              const zv = (0, lv.g)(),
                Pv = null === zv || void 0 === zv ? void 0 : zv.Rm.Bvv();
              "touch" === vv ? ((0, Cv.e)(!1), null !== Pv && void 0 !== Pv && Pv.padSneakToggled && (Pv.padSneakToggled = !1, Pv.isTouchscreen && !Pv.gamepad && zv.Rm.svv(zv.sV).setCrouching(!!zv.Om.canCrouch && Pv.touchCrouch))) : "gamepad" === vv && Pv && (0, Cv.e)(cv(Pv))
            },
            hasPlayer: () => {
              var vv;
              return !(null === (vv = (0, lv.g)()) || void 0 === vv || !vv.sV)
            },
            isPlayerDead: () => {
              var vv;
              const zv = (0, lv.g)();
              return !1 === (null === (vv = zv.Rm.Qvv(zv.sV)) || void 0 === vv ? void 0 : vv.isAlive)
            },
            isReplayMode: () => {
              var vv, zv;
              return !(null === (vv = (0, lv.d)()) || void 0 === vv || null === (zv = vv.client) || void 0 === zv || !zv.isReplayMode())
            },
            isFreeCameraOn: () => {
              var vv, zv, Pv;
              return !(null === (vv = (0, lv.d)()) || void 0 === vv || null === (zv = vv.client) || void 0 === zv || null === (Pv = zv.freeCameraController) || void 0 === Pv || !Pv.isEnabled())
            },
            targetsBlock: () => !!(0, lv.g)().N9,
            selectedSlotEmpty: () => {
              var vv;
              const zv = (0, lv.g)();
              return !(null !== (vv = zv.Rm.ivv(zv.sV)) && void 0 !== vv && vv.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const vv = (0, lv.g)().Om;
              return !!vv.creative && !!vv.canPickBlocks
            },
            scrollHotbar: vv => {
              Nv.j.zC("ScrollInventorySlot", vv)
            },
            hasFullInventory: () => (0, dv.b)((0, lv.g)()),
            hasLobbyTab: () => (0, iv.d)((0, lv.g)().Om),
            contextActionInputs: () => {
              var vv, zv, Pv, hv;
              const Sv = (0, lv.g)();
              return {
                holdingGun: !(null === (vv = Sv.Rm.Zvv(Sv.sV)) || void 0 === vv || null === (zv = vv.YF) || void 0 === zv || !zv.isGun()),
                customButtons: null !== (Pv = Sv.Om.customButtons) && void 0 !== Pv ? Pv : null,
                touchscreenActionButton: null !== (hv = Sv.Om.touchscreenActionButton) && void 0 !== hv ? hv : null
              }
            },
            pressTouchButton: vv => {
              (0, pv.sendColyMessage)(Sv.uj, vv)
            }
          }
        })()),
        zv = (0, hv.d)(),
        Pv = null,
        ev = null;
      return () => {
        vv(), zv(), null === Pv || void 0 === Pv || Pv(), null === ev || void 0 === ev || ev()
      }
    }
  },
  36139: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      c: () => sv,
      e: () => Cv,
      i: () => pv,
      k: () => Wv,
      o: () => iv,
      r: () => Tv,
      u: () => Gv,
      y: () => av,
      z: () => cv
    });
    var hv = Pv(22),
      Sv = Pv(26);
    const ev = "clientGameInventoryButtonsChanged",
      gv = new Map;

    function pv() {
      return [...gv.values()].sort(((vv, zv) => {
        var Pv, hv;
        return (null !== (Pv = vv.order) && void 0 !== Pv ? Pv : 0) - (null !== (hv = zv.order) && void 0 !== hv ? hv : 0)
      }))
    }
    let dv = null;

    function Nv(vv) {
      dv = vv
    }
    let lv = !1;

    function Tv(vv) {
      lv = !0;
      try {
        vv.onClick()
      } finally {
        lv = !1
      }
      vv.panel && "clientGame" === hv.c.get("openInGameMenuName") && Nv(vv.id)
    }

    function Wv() {
      return lv
    }

    function wv() {
      return pv().filter((vv => vv.panel && !vv.disabled))
    }

    function av(vv) {
      const zv = wv(),
        Pv = zv.findIndex((vv => vv.id === dv));
      return !(Pv < 0 || zv.length < 2) && (Tv(zv[(Pv + vv + zv.length) % zv.length]), !0)
    }

    function sv() {
      return null !== dv && wv().length > 1
    }

    function Cv() {
      Nv(null)
    }

    function iv() {
      "inventory" !== hv.c.get("openInGameMenuName") && Nv(null)
    }

    function cv() {
      const vv = dv;
      return Nv(null), vv
    }

    function Gv(vv) {
      return gv.set(vv.id, vv), Sv.j.zC(ev, pv(), !0), () => {
        gv.get(vv.id) === vv && (gv.delete(vv.id), Sv.j.zC(ev, pv()))
      }
    }
  },
  36137: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pv,
      g: () => Cv,
      j: () => iv,
      m: () => Wv,
      q: () => Nv,
      r: () => sv,
      u: () => wv,
      w: () => lv
    });
    var hv = Pv(22),
      Sv = Pv(26),
      ev = Pv(1272),
      gv = Pv(36139);
    const pv = "clientGameUiChanged";
    let dv = null;

    function Nv() {
      return dv
    }

    function lv(vv, zv) {
      const Pv = {
        content: vv,
        menu: zv
      };
      return dv = Pv, Sv.j.zC(pv, dv, !0), () => {
        dv === Pv && (dv = null, av = !1, Cv(), Sv.j.zC(pv, null))
      }
    }
    let Tv = null;

    function Wv() {
      return Tv
    }

    function wv(vv) {
      return Tv = vv, () => {
        Tv === vv && (Tv = null)
      }
    }
    let av = !1;

    function sv() {
      const vv = hv.c.get("openInGameMenuName");
      "clientGame" !== vv && (av = "inventory" === vv), (0, gv.k)() || (0, gv.e)(), (0, ev.r)(ev.e), hv.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Cv() {
      cv(!1)
    }

    function iv() {
      cv(av)
    }

    function cv(vv) {
      "clientGame" === hv.c.get("openInGameMenuName") && hv.c.set({
        openInGameMenuName: vv ? "inventory" : null
      }), vv || (0, gv.e)(), av = !1
    }
  },
  36027: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => dv
    });
    var hv = Pv(302),
      Sv = Pv(22),
      ev = Pv(36031),
      gv = Pv(1610),
      pv = Pv(1934);

    function dv(vv, zv) {
      var Pv, dv, Nv;
      if (!Sv.c.get("isKeydownEnabled") || vv.repeat) return;
      const lv = vv.code;
      "Escape" === vv.key ? (0, gv.h)(vv) : null !== (Pv = pv.z.OpenSettings) && void 0 !== Pv && Pv.includes(lv) ? (0, gv.u)(vv, hv.o.SETTINGS) : null !== (dv = pv.z.OpenCharacterCustomization) && void 0 !== dv && dv.includes(lv) ? (0, ev.b)() || (0, gv.u)(vv, hv.o.CUSTOMISATION, zv()) : null !== (Nv = pv.z.ShowDebugOverlay) && void 0 !== Nv && Nv.includes(lv) && Sv.c.set({
        showDebugOverlay: !Sv.c.get("showDebugOverlay")
      })
    }
  },
  36010: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Wv,
      g: () => lv,
      k: () => wv,
      m: () => Tv
    });
    var hv = Pv(312),
      Sv = Pv(646),
      ev = Pv(656),
      gv = Pv(39);
    const pv = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      dv = "playSessionGameNameWithVariation",
      Nv = "wasMatchmakePlayer";

    function lv() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gv.l;
      (0, ev.i)(vv, pv)
    }

    function Tv() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gv.l).setItem(Nv, !0)
    }

    function Wv() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gv.l;
      return (0, ev.d)(vv, pv)
    }

    function wv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gv.l;
      const Pv = (0, ev.d)(zv, pv),
        lv = function(vv) {
          const zv = vv.getItem(dv);
          return "string" !== typeof zv ? null : zv
        }(zv),
        Tv = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gv.l).getItem(Nv)
        }(zv);
      let Wv;
      return Wv = null !== Pv && null !== lv && (0, ev.g)(zv, pv) && function(vv, zv, Pv) {
          const Sv = (0, hv.Pb)(vv),
            ev = (0, hv.Pb)(zv),
            gv = (0, hv.Kb)(vv),
            pv = (0, hv.Kb)(zv);
          return !(Sv !== ev || !Pv) || Sv === ev && gv === pv
        }(lv, vv, Tv) ? Pv : (0, Sv.d)(), (0, ev.j)(zv, pv, Wv), zv.setItem(dv, vv),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gv.l).removeItem(Nv)
        }(zv), Wv
    }
  },
  36003: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => cv,
      i: () => Gv
    });
    var hv = Pv(1002),
      Sv = Pv(628),
      ev = Pv(312),
      gv = Pv(1006),
      pv = Pv(635),
      dv = Pv(668),
      Nv = Pv(4279),
      lv = Pv(73),
      Tv = Pv(108),
      Wv = Pv(1692),
      wv = Pv(86),
      av = Pv(36010),
      sv = Pv(39),
      Cv = Pv(650),
      iv = Pv(36016);

    function cv() {
      var vv, zv;
      return [...null !== (vv = navigator.languages) && void 0 !== vv ? vv : [null !== (zv = navigator.language) && void 0 !== zv ? zv : "none"], "en-gb"]
    }

    function Gv(vv, zv, Pv, Gv, mv) {
      const jv = (0, hv.l)(zv) ? (0, hv.q)(zv) : null,
        fv = {
          cookies: (0, Wv.getAllCookiesForGameNameWithVariation)(zv),
          isMobile: (0, lv.isMobile)(),
          isUsingCustomGameTexturePack: null !== jv && mv(jv),
          generalCookies: {
            joinDiscord: !!sv.h.getItem("DiscordPressed"),
            newGo: Nv.c,
            ...vv.getMetricsCookies(),
            trafficCode: Gv,
            compliance: lv.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, lv.getBrowserName)(),
            version: (0, lv.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, lv.getPlatformType)(),
            deviceType: (0, wv.b)()
          },
          isLoggedIn: vv.isLoggedIn(),
          lobbyName: Pv,
          languages: cv(),
          version: Sv.c,
          siteUsed: Tv.o,
          subsiteUsed: Tv.v,
          playSessionId: (0, av.k)(zv),
          visitSessionId: (0, Cv.d)(),
          clientReason: pv.m.reason,
          budgetBasis: (0, iv.e)(),
          ...null !== dv.s && {
            diagClaim: dv.s.claimId
          }
        };
      return null !== jv && (0, ev.uc)(jv) ? (fv.lobbyName = (0, hv.k)(jv, (0, hv.m)(zv), Pv), {
        roomName: `classic_${gv.f}`,
        joinOptions: fv
      }) : {
        roomName: zv,
        joinOptions: fv
      }
    }
  },
  35849: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv,
      e: () => Sv,
      f: () => ev,
      g: () => gv
    });
    const hv = 1024,
      Sv = 1024 * hv;

    function ev(vv) {
      return 2 ** Math.floor(Math.log2(Math.max(1, vv / Sv)))
    }

    function gv(vv) {
      return (vv / Sv).toFixed(1)
    }
  },
  36024: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => ev,
      i: () => pv,
      k: () => gv,
      m: () => dv,
      o: () => Nv,
      q: () => lv
    });
    var hv = Pv(185);
    const Sv = 32 * Pv(35849).e,
      ev = 6144,
      gv = 4608,
      pv = 512;

    function dv(vv) {
      return Math.floor(Sv * vv / ev)
    }

    function Nv(vv) {
      const zv = vv - Math.floor(vv / 6);
      let Pv = hv.f.maxChunkHorizAddDistance,
        Sv = hv.f.maxChunkVertAddDistance;
      if (lv(Pv + 1, Sv + 1) <= zv) return null;
      for (; lv(Pv + 1, Sv + 1) > zv && (Pv > 0 || Sv > 0);) Pv > Sv ? Pv-- : Sv--;
      return {
        horizontal: Pv,
        vertical: Sv
      }
    }

    function lv(vv, zv) {
      const Pv = Math.max(vv, zv);
      let hv = 0;
      for (let Sv = -Pv; Sv <= Pv; Sv++)
        for (let ev = -Pv; ev <= Pv; ev++)
          for (let gv = -Pv; gv <= Pv; gv++) Tv(vv, zv, Sv, ev, gv) && hv++;
      return hv
    }

    function Tv(vv, zv, Pv, hv, Sv) {
      const ev = Pv * Pv + Sv * Sv;
      return vv === zv ? ev + hv * hv <= vv * vv : vv > zv ? Math.abs(hv) <= zv && ev + hv * hv <= vv * vv : ev <= vv * vv && ev + hv * hv <= zv * zv
    }
  },
  36016: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => fv,
      e: () => jv,
      h: () => mv
    });
    var hv = Pv(185),
      Sv = Pv(73),
      ev = Pv(2693),
      gv = Pv(4156),
      pv = Pv(644),
      dv = Pv(36024);
    const Nv = 1048576,
      lv = 1024 * Nv,
      Tv = 400 * Nv,
      Wv = 147456,
      wv = .5,
      av = 1.5 * lv,
      sv = 768 * Nv;

    function Cv(vv) {
      return Tv + vv * Wv
    }

    function iv(vv, zv, Pv) {
      var Sv, gv;
      let {
        footprintBytes: pv,
        basis: Nv,
        namesLimit: iv
      } = function(vv) {
        const {
          os: zv,
          deviceMemory: Pv
        } = vv;
        if ("ios" === zv) switch ((0, ev.e)(vv)) {
          case "ipad_m":
            return {
              footprintBytes: Cv(dv.e), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: sv, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: av, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: sv, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof Pv && Number.isFinite(Pv) && Pv > 0 ? {
          footprintBytes: Pv * lv * wv,
          basis: `memory-${Pv}`,
          namesLimit: !0
        } : "android" === zv ? {
          footprintBytes: sv,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: Cv(dv.k),
          basis: "unreported",
          namesLimit: !1
        }
      }(vv);
      if (Pv) {
        const vv = Math.min(pv, Cv(dv.e));
        pv = Tv + Math.max(0, vv - Tv) / 2, Nv += "+killed", iv = !0
      }
      null !== zv && Cv(zv) < pv && (pv = Cv(zv), Nv += "+learned", iv = !0);
      const cv = function(vv) {
          const zv = Math.floor((vv - Tv) / Wv);
          return Math.min(dv.e, Math.max(dv.i, zv))
        }(pv),
        Gv = (0, dv.o)(cv);
      return {
        footprintBytes: pv,
        shedFootprintBytes: iv ? Math.max(pv, Cv(cv)) : null,
        chunkCap: cv,
        maxHorizDistance: null !== (Sv = null === Gv || void 0 === Gv ? void 0 : Gv.horizontal) && void 0 !== Sv ? Sv : hv.f.maxChunkHorizAddDistance,
        maxVertDistance: null !== (gv = null === Gv || void 0 === Gv ? void 0 : Gv.vertical) && void 0 !== gv ? gv : hv.f.maxChunkVertAddDistance,
        basis: Nv
      }
    }
    let cv = null;

    function Gv() {
      return iv({
        os: (0, Sv.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, ev.f)()
      }, (0, gv.g)(), (0, pv.G)("wasm").length > 0)
    }

    function mv() {
      return cv ??= Gv(), cv
    }

    function jv() {
      var vv;
      return (null !== (vv = cv) && void 0 !== vv ? vv : Gv()).basis
    }

    function fv(vv, zv) {
      return vv.setChunkCap(zv.chunkCap)
    }
  },
  36372: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv,
      c: () => ev,
      d: () => Wv,
      g: () => pv,
      j: () => dv,
      n: () => Nv,
      r: () => Tv,
      s: () => lv,
      v: () => gv
    });
    var hv = Pv(1226);
    let Sv = function(vv) {
        return vv[vv.Join = 0] = "Join", vv[vv.Leave = 1] = "Leave", vv[vv.Push = 2] = "Push", vv[vv.Cursor = 3] = "Cursor", vv[vv.Submit = 4] = "Submit", vv[vv.ReloadAsVariation = 5] = "ReloadAsVariation", vv[vv.CreateFile = 6] = "CreateFile", vv[vv.RenameFile = 7] = "RenameFile", vv[vv.DeleteFile = 8] = "DeleteFile", vv[vv.SetEngine = 9] = "SetEngine", vv[vv.RenameFolder = 10] = "RenameFolder", vv
      }({}),
      ev = function(vv) {
        return vv[vv.Joined = 0] = "Joined", vv[vv.Updates = 1] = "Updates", vv[vv.Presence = 2] = "Presence", vv[vv.RemoteCursor = 3] = "RemoteCursor", vv[vv.ForceClose = 4] = "ForceClose", vv[vv.LobbyFilesChanged = 5] = "LobbyFilesChanged", vv[vv.EngineSettings = 6] = "EngineSettings", vv
      }({});

    function gv(vv) {
      return "lobby" === vv.kind ? `lobby:${vv.path}` : `codeBlock:${vv.pos[0]},${vv.pos[1]},${vv.pos[2]}`
    }

    function pv(vv) {
      if ("lobby" === vv) return {
        kind: "lobby",
        path: hv.i
      };
      if (vv.startsWith("lobby:")) {
        const zv = vv.slice(6);
        return Tv(zv) ? {
          kind: "lobby",
          path: zv
        } : null
      }
      const zv = vv.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return zv ? {
        kind: "codeBlock",
        pos: [parseInt(zv[1]), parseInt(zv[2]), parseInt(zv[3])]
      } : null
    }

    function dv(vv) {
      return vv.endsWith(".d.ts")
    }

    function Nv(vv) {
      return vv.endsWith(".ts") && !dv(vv)
    }
    const lv = 64;

    function Tv(vv) {
      if (!vv || vv !== vv.trim()) return !1;
      if (vv.length > lv) return !1;
      if (vv.startsWith("/") || vv.includes("\\") || vv.includes("\0")) return !1;
      if (!dv(vv) && !Nv(vv) && ! function(vv) {
          return vv.endsWith(".js") && !vv.endsWith(".min.js") && !vv.endsWith(".bundle.js")
        }(vv)) return !1;
      const zv = vv.split("/");
      for (const Pv of zv)
        if ("" === Pv || "." === Pv || ".." === Pv) return !1;
      return !0
    }
    const Wv = 14e3
  },
  38560: (vv, zv, Pv) => {
    function hv(vv, zv, Pv, hv, Sv) {
      var ev = {};
      return Object.keys(hv).forEach((function(vv) {
        ev[vv] = hv[vv]
      })), ev.enumerable = !!ev.enumerable, ev.configurable = !!ev.configurable, ("value" in ev || ev.initializer) && (ev.writable = !0), ev = Pv.slice().reverse().reduce((function(Pv, hv) {
        return hv(vv, zv, Pv) || Pv
      }), ev), Sv && void 0 !== ev.initializer && (ev.value = ev.initializer ? ev.initializer.call(Sv) : void 0, ev.initializer = void 0), void 0 === ev.initializer && (Object.defineProperty(vv, zv, ev), ev = null), ev
    }
    Pv.d(zv, {
      d: () => hv
    })
  },
  38555: (vv, zv, Pv) => {
    function hv(vv, zv, Pv, hv) {
      Pv && Object.defineProperty(vv, zv, {
        enumerable: Pv.enumerable,
        configurable: Pv.configurable,
        writable: Pv.writable,
        value: Pv.initializer ? Pv.initializer.call(hv) : void 0
      })
    }
    Pv.d(zv, {
      b: () => hv
    })
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);
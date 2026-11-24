export const id = 158;
export const ids = [158];
export const modules = {
  39241: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => wm,
      g: () => am
    });
    var hm = fm(4037);
    let Am = null;

    function am(mm) {
      return null !== Am && mm === Am
    }

    function xm() {
      this.YM = !1, this.stopPropagation = !1, this.bM = !1, this.disabled = !1
    }
    class wm {
      constructor(mm, Tm) {
        this.version = "0.7.0";
        var fm = Object.assign({}, new xm, Tm || {});
        this.element = mm || document, this.YM = !!fm.YM, this.stopPropagation = !!fm.stopPropagation, this.bM = !!fm.bM, this.disabled = !!fm.disabled, this.filterEvents = (mm, Tm) => !0, this.ignoreEvent = mm => !1, this.down = new hm.EventEmitter, this.up = new hm.EventEmitter, this.state = {}, this.rM = {
          dx: 0,
          dy: 0,
          ATm: 0,
          aTm: 0,
          xTm: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? im(this) : document.addEventListener("DOMContentLoaded", (mm => {
          im(this)
        }), {
          once: !0
        })
      }
      bind(mm) {
        for (var Tm = arguments.length, fm = new Array(Tm > 1 ? Tm - 1 : 0), hm = 1; hm < Tm; hm++) fm[hm - 1] = arguments[hm];
        fm.forEach((Tm => {
          var fm = this._keyBindmap[Tm] || [];
          fm.includes(mm) || (fm.push(mm), this._keyBindmap[Tm] = fm)
        })), this.state[mm] = !!this.state[mm], this.pressCount[mm] = this.pressCount[mm] || 0, this.releaseCount[mm] = this.releaseCount[mm] || 0
      }
      unbind(mm) {
        for (var Tm in this._keyBindmap) {
          var fm = this._keyBindmap[Tm],
            hm = fm.indexOf(mm);
          hm > -1 && fm.splice(hm, 1)
        }
      }
      getBindings() {
        var mm = {};
        for (var Tm in this._keyBindmap) {
          this._keyBindmap[Tm].forEach((fm => {
            mm[fm] = mm[fm] || [], mm[fm].push(Tm)
          }))
        }
        return mm
      }
      DE() {
        Dm(this.rM), Dm(this.pressCount), Dm(this.releaseCount)
      }
    }

    function Dm(mm) {
      for (var Tm in mm) mm[Tm] = 0
    }

    function im(mm) {
      window.addEventListener("keydown", qm.bind(null, mm, !0), !1), window.addEventListener("keyup", qm.bind(null, mm, !1), !1);
      var Tm = {
        passive: !0
      };
      mm.element.addEventListener("touchstart", om.bind(void 0, mm), {
        passive: !1
      }), mm.element.addEventListener("touchend", Ym.bind(void 0, mm), Tm), mm.element.addEventListener("mousedown", jm.bind(null, mm, !0), Tm), window.document.addEventListener("mouseup", jm.bind(null, mm, !1), Tm), mm.element.addEventListener("touchmove", Vm.bind(null, mm), Tm), mm.element.addEventListener("mousemove", Vm.bind(null, mm), Tm), window.PointerEvent, mm.element.addEventListener("wheel", Im.bind(null, mm), Tm), mm.element.addEventListener("contextmenu", Km.bind(null, mm), !1), window.addEventListener("blur", Jm.bind(null, mm), !1)
    }
    var Rm = 0,
      pm = 0,
      Em = null;

    function om(mm, Tm) {
      Tm.preventDefault(), Om(Tm)
    }

    function Om(mm) {
      let Tm = !1;
      for (let fm = 0; fm < mm.touches.length; ++fm)
        if (mm.touches[fm].identifier === Em) {
          Tm = !0;
          break
        } if (!Tm) {
        const Tm = mm.changedTouches[0];
        Rm = Tm.clientX, pm = Tm.clientY, Em = Tm.identifier
      }
    }

    function Ym(mm, Tm) {
      for (var fm = Tm.changedTouches, hm = 0; hm < fm.length; ++hm) fm[hm].identifier === Em && (Em = null)
    }

    function qm(mm, Tm, fm) {
      if (!mm.ignoreEvent(fm)) try {
        cm(mm, fm), Tm && fm.isTrusted && !fm.repeat && mm._keyStates[fm.code] && zm(mm, fm.code)
      } finally {
        Zm(fm.code, Tm, mm, fm)
      }
    }

    function jm(mm, Tm, fm) {
      if (!mm.ignoreEvent(fm)) try {
        cm(mm, fm)
      } finally {
        ! function(mm, Tm, fm) {
          if ("pointerId" in fm)
            if (Tm) {
              if (null !== mm._touches.currID) return;
              mm._touches.currID = fm.pointerId
            } else {
              if (mm._touches.currID !== fm.pointerId) return;
              mm._touches.currID = null
            } var hm = "button" in fm ? fm.button + 1 : 1;
          Zm("Mouse" + hm, Tm, mm, fm)
        }(mm, Tm, fm)
      }
    }

    function Vm(mm, Tm) {
      var fm = Tm.movementX || Tm.mozMovementX || 0,
        hm = Tm.movementY || Tm.mozMovementY || 0;
      if (Tm.touches && 0 === (fm | hm)) {
        var Am = function(mm) {
          Om(mm);
          for (let Tm = 0; Tm < mm.changedTouches.length; ++Tm)
            if (mm.changedTouches[Tm].identifier == Em) {
              const fm = mm.changedTouches[Tm],
                hm = [fm.clientX - Rm, fm.clientY - pm];
              return Rm = fm.clientX, pm = fm.clientY, hm
            } return console.error(`Did not find touch id ${Em}`), [0, 0]
        }(Tm);
        fm = Am[0], hm = Am[1]
      }
      mm.rM.dx += fm, mm.rM.dy += hm
    }

    function Im(mm, Tm) {
      cm(mm, Tm);
      var fm = 1;
      switch (Tm.deltaMode) {
        case 0:
          fm = 1;
          break;
        case 1:
          fm = 12;
          break;
        case 2:
          fm = mm.element.clientHeight || window.innerHeight
      }
      mm.rM.ATm += (Tm.deltaX || 0) * fm, mm.rM.aTm += (Tm.deltaY || 0) * fm, mm.rM.xTm += (Tm.deltaZ || 0) * fm
    }

    function Km(mm, Tm) {
      if (!mm.bM) return Tm.preventDefault(), !1
    }
    var Qm = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function nm(mm, Tm) {
      return !!mm[Qm[Tm]] || ("AltRight" === Tm || "ControlLeft" === Tm) && "function" === typeof mm.getModifierState && !0 === mm.getModifierState("AltGraph")
    }

    function Jm(mm, Tm) {
      for (var fm in mm._modifiersHeldThroughBlur = {}, Qm) mm._keyStates[fm] && (mm._modifiersHeldThroughBlur[fm] = !0);
      Tm && Tm.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (mm) {
          return !0
        }
      }() && (clearTimeout(mm._blurRelease), mm._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var Tm in mm._modifiersHeldThroughBlur = {}, mm._keyStates) mm._keyStates[Tm] && !/^Mouse\d/.test(Tm) && zm(mm, Tm)
      }), 0))
    }

    function cm(mm, Tm) {
      var fm = mm._modifiersHeldThroughBlur;
      if (fm && Tm.isTrusted && document.hasFocus())
        for (var hm in fm) delete fm[hm], mm._keyStates[hm] && hm !== Tm.code && (nm(Tm, hm) || zm(mm, hm))
    }

    function zm(mm, Tm) {
      const fm = {
          code: Tm,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        hm = Am;
      Am = fm;
      try {
        Zm(Tm, !1, mm, fm)
      } finally {
        Am = hm
      }
    }

    function Zm(mm, Tm, fm, hm) {
      var Am = fm._keyBindmap[mm];
      Am && (km(fm._keyStates[mm], Tm) && (fm._keyStates[mm] = Tm, Am.forEach((mm => {
        (!fm.filterEvents || fm.filterEvents(hm, mm)) && function(mm, Tm, fm, hm) {
          var Am = Tm ? fm.pressCount : fm.releaseCount;
          Am[mm] = (Am[mm] || 0) + 1;
          var am = fm._bindPressCount[mm] || 0;
          (am += Tm ? 1 : -1) < 0 && (am = 0);
          fm._bindPressCount[mm] = am;
          var xm = fm.state[mm];
          if (km(xm, am)) {
            fm.state[mm] = am > 0;
            var wm = Tm ? fm.down : fm.up;
            fm.disabled || wm.emit(mm, hm)
          }
        }(mm, Tm, fm, hm)
      }))), "button" in hm || (fm.YM && !hm.defaultPrevented && hm.preventDefault(), fm.stopPropagation && hm.stopPropagation()))
    }

    function km(mm, Tm) {
      return mm ? !Tm : Tm
    }
  },
  36768: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Ym,
      i: () => qm
    });
    var hm = fm(59),
      Am = fm(1449),
      am = fm(1946),
      xm = fm(36708),
      wm = fm(653),
      Dm = fm(1080),
      im = fm.n(Dm),
      Rm = fm(1135);
    const pm = [Em()];

    function Em() {
      return {
        source: null,
        direction: null,
        vy: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function om(mm) {
      return pm.find((Tm => null !== Tm.source && Tm.source === mm))
    }

    function Om(mm) {
      clearTimeout(mm.timeout), mm.source = null, mm.direction = null, mm.writtenAngle = null, mm.vy && (mm.vy.style.rotate = "")
    }
    const Ym = (0, hm.memo)((function() {
      const [, mm] = (0, hm.useReducer)((mm => mm + 1), 0);
      return (0, Am.g)("damagedByOtherPlayer", (Tm => {
        let {
          Fm: fm,
          direction: hm
        } = Tm;
        const Am = fm || "nonDirectional",
          am = function(mm) {
            var Tm;
            const fm = null !== (Tm = om(mm)) && void 0 !== Tm ? Tm : pm.find((mm => null === mm.source));
            if (fm) return fm;
            const hm = {
              source: null,
              direction: null,
              vy: null,
              timeout: void 0,
              writtenAngle: null
            };
            return pm.push(hm), hm
          }(Am);
        clearTimeout(am.timeout), am.source = Am, am.direction = hm, am.timeout = setTimeout((() => {
          Om(am), mm()
        }), 800), mm()
      })), (0, am.e)("kill", (Tm => {
        let {
          killer: fm,
          victim: hm
        } = Tm;
        const Am = fm.local && om(hm.id);
        Am && (Om(Am), mm())
      })), (0, hm.useEffect)((() => {
        const mm = (0, xm.c)("turnDamageIndicators", qm);
        return () => {
          mm(), pm.forEach(Om)
        }
      }), []), (0, Rm.jsx)("div", {
        className: "DirectionalDamage",
        children: pm.map(((mm, Tm) => (0, Rm.jsx)("div", {
          ref: Tm => {
            mm.vy = Tm
          },
          className: im()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, wm.H)(mm.direction),
            DamageIndicatorIdle: null === mm.source
          })
        }, Tm)))
      })
    }));

    function qm(mm) {
      for (const Tm of pm) {
        if (null === Tm.source || (0, wm.H)(Tm.direction)) continue;
        const fm = Tm.direction - mm;
        fm !== Tm.writtenAngle && (Tm.writtenAngle = fm, Tm.vy.style.rotate = `${fm}rad`)
      }
    }
  },
  36582: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Am,
      e: () => am
    });
    let hm = !1;

    function Am() {
      return hm
    }

    function am(mm) {
      return hm !== mm && (hm = mm, !0)
    }
  },
  34245: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => am,
      i: () => Am
    });
    var hm = fm(23);

    function Am(mm, Tm) {
      return mm && !Tm
    }

    function am() {
      return Am(hm.c.get("isTouchScreen"), hm.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  40749: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      startPadGameplay: () => Qm
    });
    fm(40633);
    var hm = fm(40639),
      Am = fm(3729),
      am = fm(23),
      xm = fm(39192),
      wm = fm(3672),
      Dm = fm(39222),
      im = fm(31),
      Rm = fm(2760),
      pm = fm(38530),
      Em = fm(8792),
      om = fm(40641);
    const Om = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var Ym = fm(40654),
      qm = fm(8778),
      jm = fm(39237);
    const Vm = mm => mm.padSneakToggled || !!am.c.get("clientEscMenuOptions").crouchIsToggle && mm.crouchToggled,
      Im = () => {
        const mm = (() => {
          const mm = (0, Em.b)();
          let Tm = Om;
          const fm = new om.b;
          let hm = !1,
            Am = 0;
          const am = () => {
            const fm = performance.now(),
              am = 0 === Am ? 0 : fm - Am;
            if (Am = fm, !hm) return mm.discardPending(), null;
            const xm = (0, om.k)(Tm, am),
              wm = mm.drainLookDelta(),
              Dm = (0, pm.h)();
            return {
              XN: (xm.XN + wm.XN) * Dm,
              yN: (xm.yN + wm.yN) * Dm
            }
          };
          return {
            update: (mm, Am, xm, wm) => {
              mm.camera.Qv !== am && (mm.camera.Qv = am), hm = !0, Tm = (0, om.m)(fm, Am, xm, wm, performance.now())
            },
            release: () => {
              hm = !1, Tm = Om, fm.reset()
            },
            uninstall: mm => {
              mm.camera.Qv === am && (mm.camera.Qv = null)
            }
          }
        })();
        return {
          update: (Tm, fm, hm) => {
            mm.update((0, Rm.d)(), Tm, fm, hm)
          },
          release: mm.release,
          uninstall: () => {
            const Tm = (0, Rm.d)();
            Tm && mm.uninstall(Tm)
          }
        }
      };
    var Km = fm(40648);
    fm(37751), fm(8668);
    fm(8683).b;
    const Qm = () => {
      const mm = (0, Km.b)((() => {
          const mm = {
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
            bodies: () => (0, xm.c)(),
            look: Im(),
            move: (Tm, fm) => {
              const hm = (0, Rm.d)(),
                Am = hm.qI.tTm();
              if (mm.x = Tm.x, mm.y = Tm.y, mm.magnitude = Tm.magnitude, mm.headingOffset = Tm.headingOffset, mm.jumpHeld = Tm.jumpHeld, Tm.jumpPressed && (mm.jumpPressedSinceTick = !0), mm.running = Tm.running, mm.sprintHeld = Tm.sprintHeld, fm) {
                const Tm = (0, Ym.c)({
                  ...fm,
                  descending: hm.qI.mTm(hm.xH).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!hm.xI.canCrouch,
                  toggled: Vm(Am)
                });
                mm.crouchHeld = Tm.crouchHeld, Am.padSneakToggled = Tm.toggled, Am.crouchToggled = !1, (0, qm.f)(Tm.toggled)
              }
              Am.gamepad = mm
            },
            stopMoving: () => {
              var Tm;
              Object.assign(mm, {
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
              const fm = null === (Tm = (0, Rm.d)()) || void 0 === Tm ? void 0 : Tm.qI.tTm();
              (null === fm || void 0 === fm ? void 0 : fm.gamepad) === mm && (fm.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: mm => {
              const Tm = (0, Rm.d)(),
                fm = null === Tm || void 0 === Tm ? void 0 : Tm.qI.tTm();
              "touch" === mm ? ((0, qm.f)(!1), null !== fm && void 0 !== fm && fm.padSneakToggled && (fm.padSneakToggled = !1, fm.isTouchscreen && !fm.gamepad && Tm.qI.ITm(Tm.xH).setCrouching(!!Tm.xI.canCrouch && fm.touchCrouch))) : "gamepad" === mm && fm && (0, qm.f)(Vm(fm))
            },
            hasPlayer: () => {
              var mm;
              return !(null === (mm = (0, Rm.d)()) || void 0 === mm || !mm.xH)
            },
            isPlayerDead: () => {
              var mm;
              const Tm = (0, Rm.d)();
              return !1 === (null === (mm = Tm.qI.sTm(Tm.xH)) || void 0 === mm ? void 0 : mm.isAlive)
            },
            isReplayMode: () => {
              var mm, Tm;
              return !(null === (mm = (0, Rm.c)()) || void 0 === mm || null === (Tm = mm.client) || void 0 === Tm || !Tm.isReplayMode())
            },
            isFreeCameraOn: () => {
              var mm, Tm, fm;
              return !(null === (mm = (0, Rm.c)()) || void 0 === mm || null === (Tm = mm.client) || void 0 === Tm || null === (fm = Tm.freeCameraController) || void 0 === fm || !fm.isEnabled())
            },
            targetsBlock: () => !!(0, Rm.d)().Qmm,
            selectedSlotEmpty: () => {
              var mm;
              const Tm = (0, Rm.d)();
              return !(null !== (mm = Tm.qI.QTm(Tm.xH)) && void 0 !== mm && mm.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const mm = (0, Rm.d)().xI;
              return !!mm.creative && !!mm.canPickBlocks
            },
            scrollHotbar: mm => {
              im.j.gp("ScrollInventorySlot", mm)
            },
            hasFullInventory: () => (0, Dm.c)((0, Rm.d)()),
            hasLobbyTab: () => (0, jm.c)((0, Rm.d)().xI),
            contextActionInputs: () => {
              var mm, Tm, fm, hm;
              const Am = (0, Rm.d)();
              return {
                holdingGun: !(null === (mm = Am.qI.lTm(Am.xH)) || void 0 === mm || null === (Tm = mm.zK) || void 0 === Tm || !Tm.isGun()),
                customButtons: null !== (fm = Am.xI.customButtons) && void 0 !== fm ? fm : null,
                touchscreenActionButton: null !== (hm = Am.xI.touchscreenActionButton) && void 0 !== hm ? hm : null
              }
            },
            pressTouchButton: mm => {
              (0, wm.sendColyMessage)(Am.Qj, mm)
            }
          }
        })()),
        Tm = (0, hm.c)(),
        fm = null,
        am = null;
      return () => {
        mm(), Tm(), null === fm || void 0 === fm || fm(), null === am || void 0 === am || am()
      }
    }
  },
  36689: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      d: () => Ym,
      e: () => qm,
      h: () => wm,
      i: () => Em,
      m: () => jm,
      p: () => pm,
      r: () => Im,
      u: () => Om,
      v: () => Vm
    });
    var hm = fm(23),
      Am = fm(31);
    const am = "clientGameInventoryButtonsChanged",
      xm = new Map;

    function wm() {
      return [...xm.values()].sort(((mm, Tm) => {
        var fm, hm;
        return (null !== (fm = mm.order) && void 0 !== fm ? fm : 0) - (null !== (hm = Tm.order) && void 0 !== hm ? hm : 0)
      }))
    }
    let Dm = null;

    function im(mm) {
      Dm = mm
    }
    let Rm = !1;

    function pm(mm) {
      Rm = !0;
      try {
        mm.onClick()
      } finally {
        Rm = !1
      }
      mm.panel && "clientGame" === hm.c.get("openInGameMenuName") && im(mm.id)
    }

    function Em() {
      return Rm
    }

    function om() {
      return wm().filter((mm => mm.panel && !mm.disabled))
    }

    function Om(mm) {
      const Tm = om(),
        fm = Tm.findIndex((mm => mm.id === Dm));
      return !(fm < 0 || Tm.length < 2) && (pm(Tm[(fm + mm + Tm.length) % Tm.length]), !0)
    }

    function Ym() {
      return null !== Dm && om().length > 1
    }

    function qm() {
      im(null)
    }

    function jm() {
      "inventory" !== hm.c.get("openInGameMenuName") && im(null)
    }

    function Vm() {
      const mm = Dm;
      return im(null), mm
    }

    function Im(mm) {
      return xm.set(mm.id, mm), Am.j.gp(am, wm(), !0), () => {
        xm.get(mm.id) === mm && (xm.delete(mm.id), Am.j.gp(am, wm()))
      }
    }
  },
  36686: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => wm,
      h: () => qm,
      j: () => jm,
      m: () => Em,
      p: () => im,
      s: () => Ym,
      u: () => om,
      w: () => Rm
    });
    var hm = fm(23),
      Am = fm(31),
      am = fm(1286),
      xm = fm(36689);
    const wm = "clientGameUiChanged";
    let Dm = null;

    function im() {
      return Dm
    }

    function Rm(mm, Tm) {
      const fm = {
        content: mm,
        menu: Tm
      };
      return Dm = fm, Am.j.gp(wm, Dm, !0), () => {
        Dm === fm && (Dm = null, Om = !1, qm(), Am.j.gp(wm, null))
      }
    }
    let pm = null;

    function Em() {
      return pm
    }

    function om(mm) {
      return pm = mm, () => {
        pm === mm && (pm = null)
      }
    }
    let Om = !1;

    function Ym() {
      const mm = hm.c.get("openInGameMenuName");
      "clientGame" !== mm && (Om = "inventory" === mm), (0, xm.i)() || (0, xm.e)(), (0, am.p)(am.c), hm.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function qm() {
      Vm(!1)
    }

    function jm() {
      Vm(Om)
    }

    function Vm(mm) {
      "clientGame" === hm.c.get("openInGameMenuName") && hm.c.set({
        openInGameMenuName: mm ? "inventory" : null
      }), mm || (0, xm.e)(), Om = !1
    }
  },
  36578: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Dm
    });
    var hm = fm(339),
      Am = fm(23),
      am = fm(36582),
      xm = fm(1635),
      wm = fm(1957);

    function Dm(mm, Tm) {
      var fm, Dm, im;
      if (!Am.c.get("isKeydownEnabled") || mm.repeat) return;
      const Rm = mm.code;
      "Escape" === mm.key ? (0, xm.f)(mm) : null !== (fm = wm.r.OpenSettings) && void 0 !== fm && fm.includes(Rm) ? (0, xm.t)(mm, hm.n.SETTINGS) : null !== (Dm = wm.r.OpenCharacterCustomization) && void 0 !== Dm && Dm.includes(Rm) ? (0, am.d)() || (0, xm.t)(mm, hm.n.CUSTOMISATION, Tm()) : null !== (im = wm.r.ShowDebugOverlay) && void 0 !== im && im.includes(Rm) && Am.c.set({
        showDebugOverlay: !Am.c.get("showDebugOverlay")
      })
    }
  },
  39180: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Dm
    });
    var hm = fm(8854),
      Am = fm(36573),
      am = fm(39187);
    const xm = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      wm = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function Dm(mm, Tm) {
      if (mm instanceof Am.e) return {
        at: xm[Tm],
        code: 0
      };
      const fm = (0, hm.d)(mm),
        Dm = "number" === typeof fm ? fm : 0;
      return null !== (0, am.k)(Dm).name ? {
        at: "refused",
        code: Dm
      } : {
        at: wm[Tm],
        code: Dm
      }
    }
  },
  8854: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      d: () => xm,
      h: () => wm,
      i: () => im,
      m: () => Dm
    });
    var hm = fm(198),
      Am = fm(4564);

    function am(mm) {
      return xm(mm) === hm.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function xm(mm) {
      return "object" === typeof mm && null !== mm ? mm.code : void 0
    }

    function wm(mm) {
      var Tm;
      return null !== (Tm = Object.keys(Am.e).find((Tm => Am.e[Tm] === mm))) && void 0 !== Tm ? Tm : null
    }

    function Dm(mm) {
      return "notWhitelisted" === mm ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const im = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  36549: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Em,
      f: () => Rm,
      i: () => om,
      l: () => pm
    });
    var hm = fm(354),
      Am = fm(685),
      am = fm(695),
      xm = fm(37);
    const wm = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Dm = "playSessionGameNameWithVariation",
      im = "wasMatchmakePlayer";

    function Rm() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xm.k;
      (0, am.i)(mm, wm)
    }

    function pm() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xm.k).setItem(im, !0)
    }

    function Em() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xm.k;
      return (0, am.d)(mm, wm)
    }

    function om(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xm.k;
      const fm = (0, am.d)(Tm, wm),
        Rm = function(mm) {
          const Tm = mm.getItem(Dm);
          return "string" !== typeof Tm ? null : Tm
        }(Tm),
        pm = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xm.k).getItem(im)
        }(Tm);
      let Em;
      return Em = null !== fm && null !== Rm && (0, am.f)(Tm, wm) && function(mm, Tm, fm) {
          const Am = (0, hm.Pb)(mm),
            am = (0, hm.Pb)(Tm),
            xm = (0, hm.Jb)(mm),
            wm = (0, hm.Jb)(Tm);
          return !(Am !== am || !fm) || Am === am && xm === wm
        }(Rm, mm, pm) ? fm : (0, Am.b)(), (0, am.k)(Tm, wm, Em), Tm.setItem(Dm, mm),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xm.k).removeItem(im)
        }(Tm), Em
    }
  },
  36545: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Qm,
      d: () => nm
    });
    var hm = fm(1041),
      Am = fm(208),
      am = fm(347),
      xm = fm(658),
      wm = fm(354),
      Dm = fm(1047),
      im = fm(675),
      Rm = fm(713),
      pm = fm(4460),
      Em = fm(105),
      om = fm(135),
      Om = fm(1713),
      Ym = fm(115),
      qm = fm(36549),
      jm = fm(37),
      Vm = fm(690),
      Im = fm(330),
      Km = fm(36554);

    function Qm() {
      var mm, Tm;
      return [...null !== (mm = navigator.languages) && void 0 !== mm ? mm : [null !== (Tm = navigator.language) && void 0 !== Tm ? Tm : "none"], "en-gb"]
    }

    function nm(mm, Tm, fm, nm, Jm) {
      const cm = (0, hm.k)(Tm) ? (0, hm.n)(Tm) : null,
        zm = mm.isLoggedIn() && void 0 !== (0, Am.c)(am.i, om.q) ? (0, Im.q)() : null,
        Zm = {
          cookies: (0, Om.getAllCookiesForGameNameWithVariation)(Tm),
          isMobile: (0, Em.isMobile)(),
          isUsingCustomGameTexturePack: null !== cm && Jm(cm),
          generalCookies: {
            joinDiscord: !!jm.g.getItem("DiscordPressed"),
            newGo: pm.d,
            ...mm.getMetricsCookies(),
            trafficCode: nm,
            compliance: Em.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Em.getBrowserName)(),
            version: (0, Em.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Em.getPlatformType)(),
            deviceType: (0, Ym.d)()
          },
          isLoggedIn: mm.isLoggedIn(),
          lobbyName: fm,
          languages: Qm(),
          version: xm.d,
          siteUsed: om.q,
          subsiteUsed: om.w,
          playSessionId: (0, qm.i)(Tm),
          visitSessionId: (0, Vm.f)(),
          clientReason: im.s.reason,
          budgetBasis: (0, Km.g)(),
          ...null !== Rm.k && {
            diagClaim: Rm.k.claimId
          },
          ...null !== zm && {
            webGpuLoss: zm
          }
        };
      return null !== cm && (0, wm.Ac)(cm) ? (Zm.lobbyName = (0, hm.h)(cm, (0, hm.m)(Tm), fm), {
        roomName: `classic_${Dm.e}`,
        joinOptions: Zm
      }) : {
        roomName: Tm,
        joinOptions: Zm
      }
    }
  },
  39187: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am,
      f: () => am,
      g: () => wm,
      k: () => Rm,
      m: () => Dm,
      p: () => xm
    });
    var hm = fm(198);
    const Am = 3e3,
      am = 15e3;

    function xm(mm) {
      const Tm = mm.endsWith(hm.i);
      return {
        text: (Tm ? mm.slice(0, -hm.i.length) : mm) || null,
        dropsCache: Tm
      }
    }
    const wm = "Either your internet isn't working or this is a bug.";

    function Dm(mm, Tm) {
      const fm = Rm(mm);
      return null !== fm.name && "" === hm.b[fm.name].text && null !== Tm ? Tm : fm.reason
    }
    const im = "You were removed from the game.";

    function Rm(mm) {
      var Tm;
      let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Am = null !== (Tm = Object.keys(hm.b).find((Tm => hm.b[Tm].code === mm))) && void 0 !== Tm ? Tm : null;
      if (null === Am) return {
        code: mm,
        name: Am,
        reason: null !== fm && void 0 !== fm ? fm : `${wm}\nCode: ${mm}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: am,
        canReconnect: xm = !1
      } = hm.b[Am], Dm = mm === hm.b.outdatedVersion.code || mm === hm.b.loadRecaptchaError.code;
      return {
        code: mm,
        name: Am,
        reason: "" !== am ? am : null !== fm && void 0 !== fm ? fm : mm === hm.b.gameOrPluginKick.code ? im : `Code: ${mm}`,
        canReconnect: xm,
        automaticallyReconnect: mm === hm.b.customGameUpdated.code || mm === hm.b.duplicateLobbyNameError.code,
        requiresRefresh: Dm
      }
    }
  },
  36964: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am,
      f: () => am,
      h: () => Em,
      k: () => wm,
      m: () => Dm,
      o: () => im,
      s: () => pm,
      t: () => Rm,
      u: () => xm
    });
    var hm = fm(1247);
    let Am = function(mm) {
        return mm[mm.Join = 0] = "Join", mm[mm.Leave = 1] = "Leave", mm[mm.Push = 2] = "Push", mm[mm.Cursor = 3] = "Cursor", mm[mm.Submit = 4] = "Submit", mm[mm.ReloadAsVariation = 5] = "ReloadAsVariation", mm[mm.CreateFile = 6] = "CreateFile", mm[mm.RenameFile = 7] = "RenameFile", mm[mm.DeleteFile = 8] = "DeleteFile", mm[mm.SetEngine = 9] = "SetEngine", mm[mm.RenameFolder = 10] = "RenameFolder", mm
      }({}),
      am = function(mm) {
        return mm[mm.Joined = 0] = "Joined", mm[mm.Updates = 1] = "Updates", mm[mm.Presence = 2] = "Presence", mm[mm.RemoteCursor = 3] = "RemoteCursor", mm[mm.ForceClose = 4] = "ForceClose", mm[mm.LobbyFilesChanged = 5] = "LobbyFilesChanged", mm[mm.EngineSettings = 6] = "EngineSettings", mm
      }({});

    function xm(mm) {
      return "lobby" === mm.kind ? `lobby:${mm.path}` : `codeBlock:${mm.pos[0]},${mm.pos[1]},${mm.pos[2]}`
    }

    function wm(mm) {
      if ("lobby" === mm) return {
        kind: "lobby",
        path: hm.i
      };
      if (mm.startsWith("lobby:")) {
        const Tm = mm.slice(6);
        return pm(Tm) ? {
          kind: "lobby",
          path: Tm
        } : null
      }
      const Tm = mm.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return Tm ? {
        kind: "codeBlock",
        pos: [parseInt(Tm[1]), parseInt(Tm[2]), parseInt(Tm[3])]
      } : null
    }

    function Dm(mm) {
      return mm.endsWith(".d.ts")
    }

    function im(mm) {
      return mm.endsWith(".ts") && !Dm(mm)
    }
    const Rm = 64;

    function pm(mm) {
      if (!mm || mm !== mm.trim()) return !1;
      if (mm.length > Rm) return !1;
      if (mm.startsWith("/") || mm.includes("\\") || mm.includes("\0")) return !1;
      if (!Dm(mm) && !im(mm) && ! function(mm) {
          return mm.endsWith(".js") && !mm.endsWith(".min.js") && !mm.endsWith(".bundle.js")
        }(mm)) return !1;
      const Tm = mm.split("/");
      for (const fm of Tm)
        if ("" === fm || "." === fm || ".." === fm) return !1;
      return !0
    }
    const Em = 14e3
  },
  39106: (mm, Tm, fm) => {
    function hm(mm, Tm, fm, hm, Am) {
      var am = {};
      return Object.keys(hm).forEach((function(mm) {
        am[mm] = hm[mm]
      })), am.enumerable = !!am.enumerable, am.configurable = !!am.configurable, ("value" in am || am.initializer) && (am.writable = !0), am = fm.slice().reverse().reduce((function(fm, hm) {
        return hm(mm, Tm, fm) || fm
      }), am), Am && void 0 !== am.initializer && (am.value = am.initializer ? am.initializer.call(Am) : void 0, am.initializer = void 0), void 0 === am.initializer && (Object.defineProperty(mm, Tm, am), am = null), am
    }
    fm.d(Tm, {
      c: () => hm
    })
  },
  39098: (mm, Tm, fm) => {
    function hm(mm, Tm, fm, hm) {
      fm && Object.defineProperty(mm, Tm, {
        enumerable: fm.enumerable,
        configurable: fm.configurable,
        writable: fm.writable,
        value: fm.initializer ? fm.initializer.call(hm) : void 0
      })
    }
    fm.d(Tm, {
      e: () => hm
    })
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);
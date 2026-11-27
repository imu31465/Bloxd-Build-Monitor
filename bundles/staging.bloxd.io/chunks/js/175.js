export const id = 175;
export const ids = [175];
export const modules = {
  39900: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue,
      f: () => Me
    });
    var ye = He(4461);
    let be = null;

    function Me(ee) {
      return null !== be && ee === be
    }

    function Ke() {
      this.mG = !1, this.stopPropagation = !1, this.lG = !1, this.disabled = !1
    }
    class Ue {
      constructor(ee, ie) {
        this.version = "0.7.0";
        var He = Object.assign({}, new Ke, ie || {});
        this.element = ee || document, this.mG = !!He.mG, this.stopPropagation = !!He.stopPropagation, this.lG = !!He.lG, this.disabled = !!He.disabled, this.filterEvents = (ee, ie) => !0, this.ignoreEvent = ee => !1, this.down = new ye.EventEmitter, this.up = new ye.EventEmitter, this.state = {}, this.nG = {
          dx: 0,
          dy: 0,
          lHe: 0,
          SHe: 0,
          nHe: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Je(this) : document.addEventListener("DOMContentLoaded", (ee => {
          Je(this)
        }), {
          once: !0
        })
      }
      bind(ee) {
        for (var ie = arguments.length, He = new Array(ie > 1 ? ie - 1 : 0), ye = 1; ye < ie; ye++) He[ye - 1] = arguments[ye];
        He.forEach((ie => {
          var He = this._keyBindmap[ie] || [];
          He.includes(ee) || (He.push(ee), this._keyBindmap[ie] = He)
        })), this.state[ee] = !!this.state[ee], this.pressCount[ee] = this.pressCount[ee] || 0, this.releaseCount[ee] = this.releaseCount[ee] || 0
      }
      unbind(ee) {
        for (var ie in this._keyBindmap) {
          var He = this._keyBindmap[ie],
            ye = He.indexOf(ee);
          ye > -1 && He.splice(ye, 1)
        }
      }
      getBindings() {
        var ee = {};
        for (var ie in this._keyBindmap) {
          this._keyBindmap[ie].forEach((He => {
            ee[He] = ee[He] || [], ee[He].push(ie)
          }))
        }
        return ee
      }
      YR() {
        Fe(this.nG), Fe(this.pressCount), Fe(this.releaseCount)
      }
    }

    function Fe(ee) {
      for (var ie in ee) ee[ie] = 0
    }

    function Je(ee) {
      window.addEventListener("keydown", pe.bind(null, ee, !0), !1), window.addEventListener("keyup", pe.bind(null, ee, !1), !1);
      var ie = {
        passive: !0
      };
      ee.element.addEventListener("touchstart", qe.bind(void 0, ee), {
        passive: !1
      }), ee.element.addEventListener("touchend", Te.bind(void 0, ee), ie), ee.element.addEventListener("mousedown", Xe.bind(null, ee, !0), ie), window.document.addEventListener("mouseup", Xe.bind(null, ee, !1), ie), ee.element.addEventListener("touchmove", ze.bind(null, ee), ie), ee.element.addEventListener("mousemove", ze.bind(null, ee), ie), window.PointerEvent, ee.element.addEventListener("wheel", Be.bind(null, ee), ie), ee.element.addEventListener("contextmenu", Ee.bind(null, ee), !1), window.addEventListener("blur", de.bind(null, ee), !1)
    }
    var oe = 0,
      Re = 0,
      ke = null;

    function qe(ee, ie) {
      ie.preventDefault(), fe(ie)
    }

    function fe(ee) {
      let ie = !1;
      for (let He = 0; He < ee.touches.length; ++He)
        if (ee.touches[He].identifier === ke) {
          ie = !0;
          break
        } if (!ie) {
        const ie = ee.changedTouches[0];
        oe = ie.clientX, Re = ie.clientY, ke = ie.identifier
      }
    }

    function Te(ee, ie) {
      for (var He = ie.changedTouches, ye = 0; ye < He.length; ++ye) He[ye].identifier === ke && (ke = null)
    }

    function pe(ee, ie, He) {
      if (!ee.ignoreEvent(He)) try {
        We(ee, He), ie && He.isTrusted && !He.repeat && ee._keyStates[He.code] && te(ee, He.code)
      } finally {
        Ze(He.code, ie, ee, He)
      }
    }

    function Xe(ee, ie, He) {
      if (!ee.ignoreEvent(He)) try {
        We(ee, He)
      } finally {
        ! function(ee, ie, He) {
          if ("pointerId" in He)
            if (ie) {
              if (null !== ee._touches.currID) return;
              ee._touches.currID = He.pointerId
            } else {
              if (ee._touches.currID !== He.pointerId) return;
              ee._touches.currID = null
            } var ye = "button" in He ? He.button + 1 : 1;
          Ze("Mouse" + ye, ie, ee, He)
        }(ee, ie, He)
      }
    }

    function ze(ee, ie) {
      var He = ie.movementX || ie.mozMovementX || 0,
        ye = ie.movementY || ie.mozMovementY || 0;
      if (ie.touches && 0 === (He | ye)) {
        var be = function(ee) {
          fe(ee);
          for (let ie = 0; ie < ee.changedTouches.length; ++ie)
            if (ee.changedTouches[ie].identifier == ke) {
              const He = ee.changedTouches[ie],
                ye = [He.clientX - oe, He.clientY - Re];
              return oe = He.clientX, Re = He.clientY, ye
            } return console.error(`Did not find touch id ${ke}`), [0, 0]
        }(ie);
        He = be[0], ye = be[1]
      }
      ee.nG.dx += He, ee.nG.dy += ye
    }

    function Be(ee, ie) {
      We(ee, ie);
      var He = 1;
      switch (ie.deltaMode) {
        case 0:
          He = 1;
          break;
        case 1:
          He = 12;
          break;
        case 2:
          He = ee.element.clientHeight || window.innerHeight
      }
      ee.nG.lHe += (ie.deltaX || 0) * He, ee.nG.SHe += (ie.deltaY || 0) * He, ee.nG.nHe += (ie.deltaZ || 0) * He
    }

    function Ee(ee, ie) {
      if (!ee.lG) return ie.preventDefault(), !1
    }
    var ge = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function Oe(ee, ie) {
      return !!ee[ge[ie]] || ("AltRight" === ie || "ControlLeft" === ie) && "function" === typeof ee.getModifierState && !0 === ee.getModifierState("AltGraph")
    }

    function de(ee, ie) {
      for (var He in ee._modifiersHeldThroughBlur = {}, ge) ee._keyStates[He] && (ee._modifiersHeldThroughBlur[He] = !0);
      ie && ie.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (ee) {
          return !0
        }
      }() && (clearTimeout(ee._blurRelease), ee._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var ie in ee._modifiersHeldThroughBlur = {}, ee._keyStates) ee._keyStates[ie] && !/^Mouse\d/.test(ie) && te(ee, ie)
      }), 0))
    }

    function We(ee, ie) {
      var He = ee._modifiersHeldThroughBlur;
      if (He && ie.isTrusted && document.hasFocus())
        for (var ye in He) delete He[ye], ee._keyStates[ye] && ye !== ie.code && (Oe(ie, ye) || te(ee, ye))
    }

    function te(ee, ie) {
      const He = {
          code: ie,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        ye = be;
      be = He;
      try {
        Ze(ie, !1, ee, He)
      } finally {
        be = ye
      }
    }

    function Ze(ee, ie, He, ye) {
      var be = He._keyBindmap[ee];
      be && (we(He._keyStates[ee], ie) && (He._keyStates[ee] = ie, be.forEach((ee => {
        (!He.filterEvents || He.filterEvents(ye, ee)) && function(ee, ie, He, ye) {
          var be = ie ? He.pressCount : He.releaseCount;
          be[ee] = (be[ee] || 0) + 1;
          var Me = He._bindPressCount[ee] || 0;
          (Me += ie ? 1 : -1) < 0 && (Me = 0);
          He._bindPressCount[ee] = Me;
          var Ke = He.state[ee];
          if (we(Ke, Me)) {
            He.state[ee] = Me > 0;
            var Ue = ie ? He.down : He.up;
            He.disabled || Ue.emit(ee, ye)
          }
        }(ee, ie, He, ye)
      }))), "button" in ye || (He.mG && !ye.defaultPrevented && ye.preventDefault(), He.stopPropagation && ye.stopPropagation()))
    }

    function we(ee, ie) {
      return ee ? !ie : ie
    }
  },
  37501: (ee, ie, He) => {
    He.d(ie, {
      c: () => Te,
      f: () => pe
    });
    var ye = He(59),
      be = He(1432),
      Me = He(2029),
      Ke = He(37447),
      Ue = He(610),
      Fe = He(1053),
      Je = He.n(Fe),
      oe = He(1228);
    const Re = [ke()];

    function ke() {
      return {
        source: null,
        direction: null,
        Wm: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function qe(ee) {
      return Re.find((ie => null !== ie.source && ie.source === ee))
    }

    function fe(ee) {
      clearTimeout(ee.timeout), ee.source = null, ee.direction = null, ee.writtenAngle = null, ee.Wm && (ee.Wm.style.rotate = "")
    }
    const Te = (0, ye.memo)((function() {
      const [, ee] = (0, ye.useReducer)((ee => ee + 1), 0);
      return (0, be.f)("damagedByOtherPlayer", (ie => {
        let {
          Cy: He,
          direction: ye
        } = ie;
        const be = He || "nonDirectional",
          Me = function(ee) {
            var ie;
            const He = null !== (ie = qe(ee)) && void 0 !== ie ? ie : Re.find((ee => null === ee.source));
            if (He) return He;
            const ye = {
              source: null,
              direction: null,
              Wm: null,
              timeout: void 0,
              writtenAngle: null
            };
            return Re.push(ye), ye
          }(be);
        clearTimeout(Me.timeout), Me.source = be, Me.direction = ye, Me.timeout = setTimeout((() => {
          fe(Me), ee()
        }), 800), ee()
      })), (0, Me.e)("kill", (ie => {
        let {
          killer: He,
          victim: ye
        } = ie;
        const be = He.local && qe(ye.id);
        be && (fe(be), ee())
      })), (0, ye.useEffect)((() => {
        const ee = (0, Ke.e)("turnDamageIndicators", pe);
        return () => {
          ee(), Re.forEach(fe)
        }
      }), []), (0, oe.jsx)("div", {
        className: "DirectionalDamage",
        children: Re.map(((ee, ie) => (0, oe.jsx)("div", {
          ref: ie => {
            ee.Wm = ie
          },
          className: Je()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, Ue.P)(ee.direction),
            DamageIndicatorIdle: null === ee.source
          })
        }, ie)))
      })
    }));

    function pe(ee) {
      for (const ie of Re) {
        if (null === ie.source || (0, Ue.P)(ie.direction)) continue;
        const He = ie.direction - ee;
        He !== ie.writtenAngle && (ie.writtenAngle = He, ie.Wm.style.rotate = `${He}rad`)
      }
    }
  },
  37301: (ee, ie, He) => {
    He.d(ie, {
      e: () => be,
      g: () => Me
    });
    let ye = !1;

    function be() {
      return ye
    }

    function Me(ee) {
      return ye !== ee && (ye = ee, !0)
    }
  },
  41768: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      startPadGameplay: () => ge
    });
    He(41666);
    var ye = He(41670),
      be = He(4142),
      Me = He(18),
      Ke = He(39857),
      Ue = He(4075),
      Fe = He(39888),
      Je = He(27),
      oe = He(2969),
      Re = He(39219),
      ke = He(9584),
      qe = He(41679);
    const fe = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var Te = He(41690),
      pe = He(9558),
      Xe = He(39896);
    const ze = ee => ee.padSneakToggled || !!Me.e.get("clientEscMenuOptions").crouchIsToggle && ee.crouchToggled,
      Be = () => {
        const ee = (() => {
          const ee = (0, ke.d)();
          let ie = fe;
          const He = new qe.d;
          let ye = !1,
            be = 0;
          const Me = () => {
            const He = performance.now(),
              Me = 0 === be ? 0 : He - be;
            if (be = He, !ye) return ee.discardPending(), null;
            const Ke = (0, qe.r)(ie, Me),
              Ue = ee.drainLookDelta(),
              Fe = (0, Re.i)();
            return {
              XV: (Ke.XV + Ue.XV) * Fe,
              zV: (Ke.zV + Ue.zV) * Fe
            }
          };
          return {
            update: (ee, be, Ke, Ue) => {
              ee.camera.A_ !== Me && (ee.camera.A_ = Me), ye = !0, ie = (0, qe.u)(He, be, Ke, Ue, performance.now())
            },
            release: () => {
              ye = !1, ie = fe, He.reset()
            },
            uninstall: ee => {
              ee.camera.A_ === Me && (ee.camera.A_ = null)
            }
          }
        })();
        return {
          update: (ie, He, ye) => {
            ee.update((0, oe.h)(), ie, He, ye)
          },
          release: ee.release,
          uninstall: () => {
            const ie = (0, oe.h)();
            ie && ee.uninstall(ie)
          }
        }
      };
    var Ee = He(41688);
    He(38516), He(9461);
    He(9483).e;
    const ge = () => {
      const ee = (0, Ee.d)((() => {
          const ee = {
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
            bodies: () => (0, Ke.c)(),
            look: Be(),
            move: (ie, He) => {
              const ye = (0, oe.h)(),
                be = ye.sE.Cye();
              if (ee.x = ie.x, ee.y = ie.y, ee.magnitude = ie.magnitude, ee.headingOffset = ie.headingOffset, ee.jumpHeld = ie.jumpHeld, ie.jumpPressed && (ee.jumpPressedSinceTick = !0), ee.running = ie.running, ee.sprintHeld = ie.sprintHeld, He) {
                const ie = (0, Te.h)({
                  ...He,
                  descending: ye.sE.CHe(ye.gC).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!ye.uE.canCrouch,
                  toggled: ze(be)
                });
                ee.crouchHeld = ie.crouchHeld, be.padSneakToggled = ie.toggled, be.crouchToggled = !1, (0, pe.f)(ie.toggled)
              }
              be.gamepad = ee
            },
            stopMoving: () => {
              var ie;
              Object.assign(ee, {
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
              const He = null === (ie = (0, oe.h)()) || void 0 === ie ? void 0 : ie.sE.Cye();
              (null === He || void 0 === He ? void 0 : He.gamepad) === ee && (He.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: ee => {
              const ie = (0, oe.h)(),
                He = null === ie || void 0 === ie ? void 0 : ie.sE.Cye();
              "touch" === ee ? ((0, pe.f)(!1), null !== He && void 0 !== He && He.padSneakToggled && (He.padSneakToggled = !1, He.isTouchscreen && !He.gamepad && ie.sE.Uye(ie.gC).setCrouching(!!ie.uE.canCrouch && He.touchCrouch))) : "gamepad" === ee && He && (0, pe.f)(ze(He))
            },
            hasPlayer: () => {
              var ee;
              return !(null === (ee = (0, oe.h)()) || void 0 === ee || !ee.gC)
            },
            isPlayerDead: () => {
              var ee;
              const ie = (0, oe.h)();
              return !1 === (null === (ee = ie.sE.Aye(ie.gC)) || void 0 === ee ? void 0 : ee.isAlive)
            },
            isReplayMode: () => {
              var ee, ie;
              return !(null === (ee = (0, oe.e)()) || void 0 === ee || null === (ie = ee.client) || void 0 === ie || !ie.isReplayMode())
            },
            isFreeCameraOn: () => {
              var ee, ie, He;
              return !(null === (ee = (0, oe.e)()) || void 0 === ee || null === (ie = ee.client) || void 0 === ie || null === (He = ie.freeCameraController) || void 0 === He || !He.isEnabled())
            },
            targetsBlock: () => !!(0, oe.h)().FHe,
            selectedSlotEmpty: () => {
              var ee;
              const ie = (0, oe.h)();
              return !(null !== (ee = ie.sE.Jye(ie.gC)) && void 0 !== ee && ee.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const ee = (0, oe.h)().uE;
              return !!ee.creative && !!ee.canPickBlocks
            },
            scrollHotbar: ee => {
              Je.h.yR("ScrollInventorySlot", ee)
            },
            hasFullInventory: () => (0, Fe.c)((0, oe.h)()),
            hasLobbyTab: () => (0, Xe.e)((0, oe.h)().uE),
            contextActionInputs: () => {
              var ee, ie, He, ye;
              const be = (0, oe.h)();
              return {
                holdingGun: !(null === (ee = be.sE.Yye(be.gC)) || void 0 === ee || null === (ie = ee.OW) || void 0 === ie || !ie.isGun()),
                customButtons: null !== (He = be.uE.customButtons) && void 0 !== He ? He : null,
                touchscreenActionButton: null !== (ye = be.uE.touchscreenActionButton) && void 0 !== ye ? ye : null
              }
            },
            pressTouchButton: ee => {
              (0, Ue.sendColyMessage)(be.Rj, ee)
            }
          }
        })()),
        ie = (0, ye.b)(),
        He = null,
        Me = null;
      return () => {
        ee(), ie(), null === He || void 0 === He || He(), null === Me || void 0 === Me || Me()
      }
    }
  },
  37427: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      e: () => Te,
      f: () => pe,
      h: () => Ue,
      j: () => ke,
      l: () => Xe,
      n: () => Re,
      p: () => Be,
      r: () => fe,
      u: () => ze
    });
    var ye = He(18),
      be = He(27);
    const Me = "clientGameInventoryButtonsChanged",
      Ke = new Map;

    function Ue() {
      return [...Ke.values()].sort(((ee, ie) => {
        var He, ye;
        return (null !== (He = ee.order) && void 0 !== He ? He : 0) - (null !== (ye = ie.order) && void 0 !== ye ? ye : 0)
      }))
    }
    let Fe = null;

    function Je(ee) {
      Fe = ee
    }
    let oe = !1;

    function Re(ee) {
      oe = !0;
      try {
        ee.onClick()
      } finally {
        oe = !1
      }
      ee.panel && "clientGame" === ye.e.get("openInGameMenuName") && Je(ee.id)
    }

    function ke() {
      return oe
    }

    function qe() {
      return Ue().filter((ee => ee.panel && !ee.disabled))
    }

    function fe(ee) {
      const ie = qe(),
        He = ie.findIndex((ee => ee.id === Fe));
      return !(He < 0 || ie.length < 2) && (Re(ie[(He + ee + ie.length) % ie.length]), !0)
    }

    function Te() {
      return null !== Fe && qe().length > 1
    }

    function pe() {
      Je(null)
    }

    function Xe() {
      "inventory" !== ye.e.get("openInGameMenuName") && Je(null)
    }

    function ze() {
      const ee = Fe;
      return Je(null), ee
    }

    function Be(ee) {
      return Ke.set(ee.id, ee), be.h.yR(Me, Ue(), !0), () => {
        Ke.get(ee.id) === ee && (Ke.delete(ee.id), be.h.yR(Me, Ue()))
      }
    }
  },
  37424: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue,
      d: () => ze,
      h: () => pe,
      l: () => Xe,
      m: () => ke,
      p: () => Je,
      s: () => Te,
      v: () => qe,
      z: () => oe
    });
    var ye = He(18),
      be = He(27),
      Me = He(1246),
      Ke = He(37427);
    const Ue = "clientGameUiChanged";
    let Fe = null;

    function Je() {
      return Fe
    }

    function oe(ee, ie) {
      const He = {
        content: ee,
        menu: ie
      };
      return Fe = He, be.h.yR(Ue, Fe, !0), () => {
        Fe === He && (Fe = null, fe = !1, pe(), be.h.yR(Ue, null))
      }
    }
    let Re = null;

    function ke() {
      return Re
    }

    function qe(ee) {
      return Re = ee, () => {
        Re === ee && (Re = null)
      }
    }
    let fe = !1;

    function Te() {
      const ee = ye.e.get("openInGameMenuName");
      "clientGame" !== ee && (fe = "inventory" === ee), (0, Ke.j)() || (0, Ke.f)(), (0, Me.w)(Me.c), ye.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function pe() {
      Be(!1)
    }

    function Xe() {
      Be(fe)
    }

    function ze() {
      fe && Be(!1)
    }

    function Be(ee) {
      "clientGame" === ye.e.get("openInGameMenuName") && ye.e.set({
        openInGameMenuName: ee ? "inventory" : null
      }), ee || (0, Ke.f)(), fe = !1
    }
  },
  37294: (ee, ie, He) => {
    He.d(ie, {
      c: () => Fe
    });
    var ye = He(335),
      be = He(18),
      Me = He(37301),
      Ke = He(1620),
      Ue = He(2046);

    function Fe(ee, ie) {
      var He, Fe, Je;
      if (!be.e.get("isKeydownEnabled") || ee.repeat) return;
      const oe = ee.code;
      "Escape" === ee.key ? (0, Ke.g)(ee) : null !== (He = Ue.q.OpenSettings) && void 0 !== He && He.includes(oe) ? (0, Ke.u)(ee, ye.r.SETTINGS) : null !== (Fe = Ue.q.OpenCharacterCustomization) && void 0 !== Fe && Fe.includes(oe) ? (0, Me.e)() || (0, Ke.u)(ee, ye.r.CUSTOMISATION, ie()) : null !== (Je = Ue.q.ShowDebugOverlay) && void 0 !== Je && Je.includes(oe) && be.e.set({
        showDebugOverlay: !be.e.get("showDebugOverlay")
      })
    }
  },
  39845: (ee, ie, He) => {
    He.d(ie, {
      e: () => Fe
    });
    var ye = He(9669),
      be = He(37286),
      Me = He(39854);
    const Ke = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      Ue = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function Fe(ee, ie) {
      if (ee instanceof be.d) return {
        at: Ke[ie],
        code: 0
      };
      const He = (0, ye.h)(ee),
        Fe = "number" === typeof He ? He : 0;
      return null !== (0, Me.g)(Fe).name ? {
        at: "refused",
        code: Fe
      } : {
        at: Ue[ie],
        code: Fe
      }
    }
  },
  9669: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me,
      h: () => Ke,
      l: () => Ue,
      n: () => Je,
      o: () => Fe
    });
    var ye = He(186),
      be = He(5018);

    function Me(ee) {
      return Ke(ee) === ye.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function Ke(ee) {
      return "object" === typeof ee && null !== ee ? ee.code : void 0
    }

    function Ue(ee) {
      var ie;
      return null !== (ie = Object.keys(be.e).find((ie => be.e[ie] === ee))) && void 0 !== ie ? ie : null
    }

    function Fe(ee) {
      return "notWhitelisted" === ee ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Je = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  37260: (ee, ie, He) => {
    He.d(ie, {
      b: () => ke,
      f: () => oe,
      h: () => qe,
      j: () => Re
    });
    var ye = He(347),
      be = He(656),
      Me = He(663),
      Ke = He(35);
    const Ue = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Fe = "playSessionGameNameWithVariation",
      Je = "wasMatchmakePlayer";

    function oe() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke.m;
      (0, Me.k)(ee, Ue)
    }

    function Re() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke.m).setItem(Je, !0)
    }

    function ke() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke.m;
      return (0, Me.e)(ee, Ue)
    }

    function qe(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ke.m;
      const He = (0, Me.e)(ie, Ue),
        oe = function(ee) {
          const ie = ee.getItem(Fe);
          return "string" !== typeof ie ? null : ie
        }(ie),
        Re = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke.m).getItem(Je)
        }(ie);
      let ke;
      return ke = null !== He && null !== oe && (0, Me.h)(ie, Ue) && function(ee, ie, He) {
          const be = (0, ye.Xb)(ee),
            Me = (0, ye.Xb)(ie),
            Ke = (0, ye.Qb)(ee),
            Ue = (0, ye.Qb)(ie);
          return !(be !== Me || !He) || be === Me && Ke === Ue
        }(oe, ee, Re) ? He : (0, be.d)(), (0, Me.m)(ie, Ue, ke), ie.setItem(Fe, ee),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke.m).removeItem(Je)
        }(ie), ke
    }
  },
  37252: (ee, ie, He) => {
    He.d(ie, {
      e: () => ge,
      f: () => Oe
    });
    var ye = He(1033),
      be = He(198),
      Me = He(345),
      Ke = He(618),
      Ue = He(347),
      Fe = He(1036),
      Je = He(645),
      oe = He(677),
      Re = He(4908),
      ke = He(97),
      qe = He(125),
      fe = He(1768),
      Te = He(107),
      pe = He(37260),
      Xe = He(35),
      ze = He(660),
      Be = He(627),
      Ee = He(37266);

    function ge() {
      var ee, ie;
      return [...null !== (ee = navigator.languages) && void 0 !== ee ? ee : [null !== (ie = navigator.language) && void 0 !== ie ? ie : "none"], "En-GB"]
    }

    function Oe(ee, ie, He, Oe, de) {
      const We = (0, ye.k)(ie) ? (0, ye.r)(ie) : null,
        te = ee.isLoggedIn() && void 0 !== (0, be.b)(Me.q, qe.siteUsed) ? (0, Be.e)() : null,
        Ze = {
          cookies: (0, fe.getAllCookiesForGameNameWithVariation)(ie),
          isMobile: (0, ke.isMobile)(),
          isUsingCustomGameTexturePack: null !== We && de(We),
          generalCookies: {
            joinDiscord: !!Xe.i.getItem("DiscordPressed"),
            newGo: Re.d,
            ...ee.getMetricsCookies(),
            trafficCode: Oe,
            compliance: ke.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, ke.getBrowserName)(),
            version: (0, ke.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, ke.getPlatformType)(),
            deviceType: (0, Te.b)()
          },
          isLoggedIn: ee.isLoggedIn(),
          lobbyName: He,
          languages: ge(),
          version: Ke.b,
          siteUsed: qe.siteUsed,
          subsiteUsed: qe.subsiteUsed,
          playSessionId: (0, pe.h)(ie),
          visitSessionId: (0, ze.getVisitSessionId)(),
          clientReason: Je.y.reason,
          budgetBasis: (0, Ee.k)(),
          ...null !== oe.o && {
            diagClaim: oe.o.claimId
          },
          ...null !== te && {
            webGpuLoss: te
          }
        };
      return null !== We && (0, Ue.Jc)(We) ? (Ze.lobbyName = (0, ye.g)(We, (0, ye.n)(ie), He), {
        roomName: `classic_${Fe.i}`,
        joinOptions: Ze
      }) : {
        roomName: ie,
        joinOptions: Ze
      }
    }
  },
  39854: (ee, ie, He) => {
    He.d(ie, {
      b: () => be,
      d: () => Me,
      e: () => Ue,
      g: () => oe,
      h: () => Fe,
      k: () => Ke
    });
    var ye = He(186);
    const be = 3e3,
      Me = 15e3;

    function Ke(ee) {
      const ie = ee.endsWith(ye.l);
      return {
        text: (ie ? ee.slice(0, -ye.l.length) : ee) || null,
        dropsCache: ie
      }
    }
    const Ue = "Either your internet isn't working or this is a bug.";

    function Fe(ee, ie) {
      const He = oe(ee);
      return null !== He.name && "" === ye.c[He.name].text && null !== ie ? ie : He.reason
    }
    const Je = "You were removed from the game.";

    function oe(ee) {
      var ie;
      let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const be = null !== (ie = Object.keys(ye.c).find((ie => ye.c[ie].code === ee))) && void 0 !== ie ? ie : null;
      if (null === be) return {
        code: ee,
        name: be,
        reason: null !== He && void 0 !== He ? He : `${Ue}\nCode: ${ee}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: Me,
        canReconnect: Ke = !1
      } = ye.c[be], Fe = ee === ye.c.outdatedVersion.code || ee === ye.c.loadRecaptchaError.code;
      return {
        code: ee,
        name: be,
        reason: "" !== Me ? Me : null !== He && void 0 !== He ? He : ee === ye.c.gameOrPluginKick.code ? Je : `Code: ${ee}`,
        canReconnect: Ke,
        automaticallyReconnect: ee === ye.c.customGameUpdated.code || ee === ye.c.duplicateLobbyNameError.code,
        requiresRefresh: Fe
      }
    }
  },
  39778: (ee, ie, He) => {
    function ye(ee, ie, He, ye, be) {
      var Me = {};
      return Object.keys(ye).forEach((function(ee) {
        Me[ee] = ye[ee]
      })), Me.enumerable = !!Me.enumerable, Me.configurable = !!Me.configurable, ("value" in Me || Me.initializer) && (Me.writable = !0), Me = He.slice().reverse().reduce((function(He, ye) {
        return ye(ee, ie, He) || He
      }), Me), be && void 0 !== Me.initializer && (Me.value = Me.initializer ? Me.initializer.call(be) : void 0, Me.initializer = void 0), void 0 === Me.initializer && (Object.defineProperty(ee, ie, Me), Me = null), Me
    }
    He.d(ie, {
      e: () => ye
    })
  },
  39775: (ee, ie, He) => {
    function ye(ee, ie, He, ye) {
      He && Object.defineProperty(ee, ie, {
        enumerable: He.enumerable,
        configurable: He.configurable,
        writable: He.writable,
        value: He.initializer ? He.initializer.call(ye) : void 0
      })
    }
    He.d(ie, {
      e: () => ye
    })
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);
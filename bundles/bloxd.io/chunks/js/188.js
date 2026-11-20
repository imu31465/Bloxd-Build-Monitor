export const id = 188;
export const ids = [188];
export const modules = {
  38919: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => yT,
      f: () => KT
    });
    var lT = cT(4089);
    let MT = null;

    function KT(TT) {
      return null !== MT && TT === MT
    }

    function OT() {
      this.HZ = !1, this.stopPropagation = !1, this.eZ = !1, this.disabled = !1
    }
    class yT {
      constructor(TT, kT) {
        this.version = "0.7.0";
        var cT = Object.assign({}, new OT, kT || {});
        this.element = TT || document, this.HZ = !!cT.HZ, this.stopPropagation = !!cT.stopPropagation, this.eZ = !!cT.eZ, this.disabled = !!cT.disabled, this.filterEvents = (TT, kT) => !0, this.ignoreEvent = TT => !1, this.down = new lT.EventEmitter, this.up = new lT.EventEmitter, this.state = {}, this.uZ = {
          dx: 0,
          dy: 0,
          vTT: 0,
          tTT: 0,
          hTT: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? xT(this) : document.addEventListener("DOMContentLoaded", (TT => {
          xT(this)
        }), {
          once: !0
        })
      }
      bind(TT) {
        for (var kT = arguments.length, cT = new Array(kT > 1 ? kT - 1 : 0), lT = 1; lT < kT; lT++) cT[lT - 1] = arguments[lT];
        cT.forEach((kT => {
          var cT = this._keyBindmap[kT] || [];
          cT.includes(TT) || (cT.push(TT), this._keyBindmap[kT] = cT)
        })), this.state[TT] = !!this.state[TT], this.pressCount[TT] = this.pressCount[TT] || 0, this.releaseCount[TT] = this.releaseCount[TT] || 0
      }
      unbind(TT) {
        for (var kT in this._keyBindmap) {
          var cT = this._keyBindmap[kT],
            lT = cT.indexOf(TT);
          lT > -1 && cT.splice(lT, 1)
        }
      }
      getBindings() {
        var TT = {};
        for (var kT in this._keyBindmap) {
          this._keyBindmap[kT].forEach((cT => {
            TT[cT] = TT[cT] || [], TT[cT].push(kT)
          }))
        }
        return TT
      }
      UA() {
        fT(this.uZ), fT(this.pressCount), fT(this.releaseCount)
      }
    }

    function fT(TT) {
      for (var kT in TT) TT[kT] = 0
    }

    function xT(TT) {
      window.addEventListener("keydown", hT.bind(null, TT, !0), !1), window.addEventListener("keyup", hT.bind(null, TT, !1), !1);
      var kT = {
        passive: !0
      };
      TT.element.addEventListener("touchstart", jT.bind(void 0, TT), {
        passive: !1
      }), TT.element.addEventListener("touchend", tT.bind(void 0, TT), kT), TT.element.addEventListener("mousedown", NT.bind(null, TT, !0), kT), window.document.addEventListener("mouseup", NT.bind(null, TT, !1), kT), TT.element.addEventListener("touchmove", QT.bind(null, TT), kT), TT.element.addEventListener("mousemove", QT.bind(null, TT), kT), window.PointerEvent, TT.element.addEventListener("wheel", ST.bind(null, TT), kT), TT.element.addEventListener("contextmenu", DT.bind(null, TT), !1), window.addEventListener("blur", rT.bind(null, TT), !1)
    }
    var IT = 0,
      AT = 0,
      CT = null;

    function jT(TT, kT) {
      kT.preventDefault(), vT(kT)
    }

    function vT(TT) {
      let kT = !1;
      for (let cT = 0; cT < TT.touches.length; ++cT)
        if (TT.touches[cT].identifier === CT) {
          kT = !0;
          break
        } if (!kT) {
        const kT = TT.changedTouches[0];
        IT = kT.clientX, AT = kT.clientY, CT = kT.identifier
      }
    }

    function tT(TT, kT) {
      for (var cT = kT.changedTouches, lT = 0; lT < cT.length; ++lT) cT[lT].identifier === CT && (CT = null)
    }

    function hT(TT, kT, cT) {
      if (!TT.ignoreEvent(cT)) try {
        PT(TT, cT), kT && cT.isTrusted && !cT.repeat && TT._keyStates[cT.code] && wT(TT, cT.code)
      } finally {
        mT(cT.code, kT, TT, cT)
      }
    }

    function NT(TT, kT, cT) {
      if (!TT.ignoreEvent(cT)) try {
        PT(TT, cT)
      } finally {
        ! function(TT, kT, cT) {
          if ("pointerId" in cT)
            if (kT) {
              if (null !== TT._touches.currID) return;
              TT._touches.currID = cT.pointerId
            } else {
              if (TT._touches.currID !== cT.pointerId) return;
              TT._touches.currID = null
            } var lT = "button" in cT ? cT.button + 1 : 1;
          mT("Mouse" + lT, kT, TT, cT)
        }(TT, kT, cT)
      }
    }

    function QT(TT, kT) {
      var cT = kT.movementX || kT.mozMovementX || 0,
        lT = kT.movementY || kT.mozMovementY || 0;
      if (kT.touches && 0 === (cT | lT)) {
        var MT = function(TT) {
          vT(TT);
          for (let kT = 0; kT < TT.changedTouches.length; ++kT)
            if (TT.changedTouches[kT].identifier == CT) {
              const cT = TT.changedTouches[kT],
                lT = [cT.clientX - IT, cT.clientY - AT];
              return IT = cT.clientX, AT = cT.clientY, lT
            } return console.error(`Did not find touch id ${CT}`), [0, 0]
        }(kT);
        cT = MT[0], lT = MT[1]
      }
      TT.uZ.dx += cT, TT.uZ.dy += lT
    }

    function ST(TT, kT) {
      PT(TT, kT);
      var cT = 1;
      switch (kT.deltaMode) {
        case 0:
          cT = 1;
          break;
        case 1:
          cT = 12;
          break;
        case 2:
          cT = TT.element.clientHeight || window.innerHeight
      }
      TT.uZ.vTT += (kT.deltaX || 0) * cT, TT.uZ.tTT += (kT.deltaY || 0) * cT, TT.uZ.hTT += (kT.deltaZ || 0) * cT
    }

    function DT(TT, kT) {
      if (!TT.eZ) return kT.preventDefault(), !1
    }
    var aT = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function FT(TT, kT) {
      return !!TT[aT[kT]] || ("AltRight" === kT || "ControlLeft" === kT) && "function" === typeof TT.getModifierState && !0 === TT.getModifierState("AltGraph")
    }

    function rT(TT, kT) {
      for (var cT in TT._modifiersHeldThroughBlur = {}, aT) TT._keyStates[cT] && (TT._modifiersHeldThroughBlur[cT] = !0);
      kT && kT.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (TT) {
          return !0
        }
      }() && (clearTimeout(TT._blurRelease), TT._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var kT in TT._modifiersHeldThroughBlur = {}, TT._keyStates) TT._keyStates[kT] && !/^Mouse\d/.test(kT) && wT(TT, kT)
      }), 0))
    }

    function PT(TT, kT) {
      var cT = TT._modifiersHeldThroughBlur;
      if (cT && kT.isTrusted && document.hasFocus())
        for (var lT in cT) delete cT[lT], TT._keyStates[lT] && lT !== kT.code && (FT(kT, lT) || wT(TT, lT))
    }

    function wT(TT, kT) {
      const cT = {
          code: kT,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        lT = MT;
      MT = cT;
      try {
        mT(kT, !1, TT, cT)
      } finally {
        MT = lT
      }
    }

    function mT(TT, kT, cT, lT) {
      var MT = cT._keyBindmap[TT];
      MT && (bT(cT._keyStates[TT], kT) && (cT._keyStates[TT] = kT, MT.forEach((TT => {
        (!cT.filterEvents || cT.filterEvents(lT, TT)) && function(TT, kT, cT, lT) {
          var MT = kT ? cT.pressCount : cT.releaseCount;
          MT[TT] = (MT[TT] || 0) + 1;
          var KT = cT._bindPressCount[TT] || 0;
          (KT += kT ? 1 : -1) < 0 && (KT = 0);
          cT._bindPressCount[TT] = KT;
          var OT = cT.state[TT];
          if (bT(OT, KT)) {
            cT.state[TT] = KT > 0;
            var yT = kT ? cT.down : cT.up;
            cT.disabled || yT.emit(TT, lT)
          }
        }(TT, kT, cT, lT)
      }))), "button" in lT || (cT.HZ && !lT.defaultPrevented && lT.preventDefault(), cT.stopPropagation && lT.stopPropagation()))
    }

    function bT(TT, kT) {
      return TT ? !kT : kT
    }
  },
  36496: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => tT,
      c: () => hT
    });
    var lT = cT(71),
      MT = cT(1461),
      KT = cT(1996),
      OT = cT(36445),
      yT = cT(617),
      fT = cT(1046),
      xT = cT.n(fT),
      IT = cT(1099);
    const AT = [CT()];

    function CT() {
      return {
        source: null,
        direction: null,
        JG: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function jT(TT) {
      return AT.find((kT => null !== kT.source && kT.source === TT))
    }

    function vT(TT) {
      clearTimeout(TT.timeout), TT.source = null, TT.direction = null, TT.writtenAngle = null, TT.JG && (TT.JG.style.rotate = "")
    }
    const tT = (0, lT.memo)((function() {
      const [, TT] = (0, lT.useReducer)((TT => TT + 1), 0);
      return (0, MT.g)("damagedByOtherPlayer", (kT => {
        let {
          EK: cT,
          direction: lT
        } = kT;
        const MT = cT || "nonDirectional",
          KT = function(TT) {
            var kT;
            const cT = null !== (kT = jT(TT)) && void 0 !== kT ? kT : AT.find((TT => null === TT.source));
            if (cT) return cT;
            const lT = {
              source: null,
              direction: null,
              JG: null,
              timeout: void 0,
              writtenAngle: null
            };
            return AT.push(lT), lT
          }(MT);
        clearTimeout(KT.timeout), KT.source = MT, KT.direction = lT, KT.timeout = setTimeout((() => {
          vT(KT), TT()
        }), 800), TT()
      })), (0, KT.b)("kill", (kT => {
        let {
          killer: cT,
          victim: lT
        } = kT;
        const MT = cT.local && jT(lT.id);
        MT && (vT(MT), TT())
      })), (0, lT.useEffect)((() => {
        const TT = (0, OT.f)("turnDamageIndicators", hT);
        return () => {
          TT(), AT.forEach(vT)
        }
      }), []), (0, IT.jsx)("div", {
        className: "DirectionalDamage",
        children: AT.map(((TT, kT) => (0, IT.jsx)("div", {
          ref: kT => {
            TT.JG = kT
          },
          className: xT()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, yT.R)(TT.direction),
            DamageIndicatorIdle: null === TT.source
          })
        }, kT)))
      })
    }));

    function hT(TT) {
      for (const kT of AT) {
        if (null === kT.source || (0, yT.R)(kT.direction)) continue;
        const cT = kT.direction - TT;
        cT !== kT.writtenAngle && (kT.writtenAngle = cT, kT.JG.style.rotate = `${cT}rad`)
      }
    }
  },
  36310: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT,
      d: () => KT
    });
    let lT = !1;

    function MT() {
      return lT
    }

    function KT(TT) {
      return lT !== TT && (lT = TT, !0)
    }
  },
  9298: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT,
      c: () => MT
    });
    var lT = cT(31);

    function MT(TT, kT) {
      return TT && !kT
    }

    function KT() {
      return MT(lT.e.get("isTouchScreen"), lT.e.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  40304: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      startPadGameplay: () => aT
    });
    cT(40169);
    var lT = cT(40176),
      MT = cT(3732),
      KT = cT(31),
      OT = cT(38882),
      yT = cT(3644),
      fT = cT(38901),
      xT = cT(36),
      IT = cT(2790),
      AT = cT(38266),
      CT = cT(8886),
      jT = cT(40182);
    const vT = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var tT = cT(40199),
      hT = cT(8860),
      NT = cT(38914);
    const QT = TT => TT.padSneakToggled || !!KT.e.get("clientEscMenuOptions").crouchIsToggle && TT.crouchToggled,
      ST = () => {
        const TT = (() => {
          const TT = (0, CT.d)();
          let kT = vT;
          const cT = new jT.e;
          let lT = !1,
            MT = 0;
          const KT = () => {
            const cT = performance.now(),
              KT = 0 === MT ? 0 : cT - MT;
            if (MT = cT, !lT) return TT.discardPending(), null;
            const OT = (0, jT.p)(kT, KT),
              yT = TT.drainLookDelta(),
              fT = (0, AT.j)();
            return {
              Rm: (OT.Rm + yT.Rm) * fT,
              Wm: (OT.Wm + yT.Wm) * fT
            }
          };
          return {
            update: (TT, MT, OT, yT) => {
              TT.camera.JR !== KT && (TT.camera.JR = KT), lT = !0, kT = (0, jT.t)(cT, MT, OT, yT, performance.now())
            },
            release: () => {
              lT = !1, kT = vT, cT.reset()
            },
            uninstall: TT => {
              TT.camera.JR === KT && (TT.camera.JR = null)
            }
          }
        })();
        return {
          update: (kT, cT, lT) => {
            TT.update((0, IT.f)(), kT, cT, lT)
          },
          release: TT.release,
          uninstall: () => {
            const kT = (0, IT.f)();
            kT && TT.uninstall(kT)
          }
        }
      };
    var DT = cT(40194);
    cT(37539), cT(8762);
    cT(8777).b;
    const aT = () => {
      const TT = (0, DT.d)((() => {
          const TT = {
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
            bodies: () => (0, OT.d)(),
            look: ST(),
            move: (kT, cT) => {
              const lT = (0, IT.f)(),
                MT = lT.oN.ykT();
              if (TT.x = kT.x, TT.y = kT.y, TT.magnitude = kT.magnitude, TT.headingOffset = kT.headingOffset, TT.jumpHeld = kT.jumpHeld, kT.jumpPressed && (TT.jumpPressedSinceTick = !0), TT.running = kT.running, TT.sprintHeld = kT.sprintHeld, cT) {
                const kT = (0, tT.e)({
                  ...cT,
                  descending: lT.oN.ITT(lT.jH).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!lT.lD.canCrouch,
                  toggled: QT(MT)
                });
                TT.crouchHeld = kT.crouchHeld, MT.padSneakToggled = kT.toggled, MT.crouchToggled = !1, (0, hT.e)(kT.toggled)
              }
              MT.gamepad = TT
            },
            stopMoving: () => {
              var kT;
              Object.assign(TT, {
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
              const cT = null === (kT = (0, IT.f)()) || void 0 === kT ? void 0 : kT.oN.ykT();
              (null === cT || void 0 === cT ? void 0 : cT.gamepad) === TT && (cT.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: TT => {
              const kT = (0, IT.f)(),
                cT = null === kT || void 0 === kT ? void 0 : kT.oN.ykT();
              "touch" === TT ? ((0, hT.e)(!1), null !== cT && void 0 !== cT && cT.padSneakToggled && (cT.padSneakToggled = !1, cT.isTouchscreen && !cT.gamepad && kT.oN.oTT(kT.jH).setCrouching(!!kT.lD.canCrouch && cT.touchCrouch))) : "gamepad" === TT && cT && (0, hT.e)(QT(cT))
            },
            hasPlayer: () => {
              var TT;
              return !(null === (TT = (0, IT.f)()) || void 0 === TT || !TT.jH)
            },
            isPlayerDead: () => {
              var TT;
              const kT = (0, IT.f)();
              return !1 === (null === (TT = kT.oN.TkT(kT.jH)) || void 0 === TT ? void 0 : TT.isAlive)
            },
            isReplayMode: () => {
              var TT, kT;
              return !(null === (TT = (0, IT.c)()) || void 0 === TT || null === (kT = TT.client) || void 0 === kT || !kT.isReplayMode())
            },
            isFreeCameraOn: () => {
              var TT, kT, cT;
              return !(null === (TT = (0, IT.c)()) || void 0 === TT || null === (kT = TT.client) || void 0 === kT || null === (cT = kT.freeCameraController) || void 0 === cT || !cT.isEnabled())
            },
            targetsBlock: () => !!(0, IT.f)().U_,
            selectedSlotEmpty: () => {
              var TT;
              const kT = (0, IT.f)();
              return !(null !== (TT = kT.oN.eTT(kT.jH)) && void 0 !== TT && TT.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const TT = (0, IT.f)().lD;
              return !!TT.creative && !!TT.canPickBlocks
            },
            scrollHotbar: TT => {
              xT.k.nt("ScrollInventorySlot", TT)
            },
            hasFullInventory: () => (0, fT.b)((0, IT.f)()),
            hasLobbyTab: () => (0, NT.b)((0, IT.f)().lD),
            contextActionInputs: () => {
              var TT, kT, cT, lT;
              const MT = (0, IT.f)();
              return {
                holdingGun: !(null === (TT = MT.oN.kkT(MT.jH)) || void 0 === TT || null === (kT = TT.Gw) || void 0 === kT || !kT.isGun()),
                customButtons: null !== (cT = MT.lD.customButtons) && void 0 !== cT ? cT : null,
                touchscreenActionButton: null !== (lT = MT.lD.touchscreenActionButton) && void 0 !== lT ? lT : null
              }
            },
            pressTouchButton: TT => {
              (0, yT.sendColyMessage)(MT.Dj, TT)
            }
          }
        })()),
        kT = (0, lT.d)(),
        cT = null,
        KT = null;
      return () => {
        TT(), kT(), null === cT || void 0 === cT || cT(), null === KT || void 0 === KT || KT()
      }
    }
  },
  36432: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => vT,
      B: () => QT,
      d: () => KT,
      h: () => tT,
      k: () => hT,
      l: () => yT,
      p: () => CT,
      q: () => NT,
      s: () => AT,
      w: () => ST
    });
    var lT = cT(31),
      MT = cT(36);
    const KT = "clientGameInventoryButtonsChanged",
      OT = new Map;

    function yT() {
      return [...OT.values()].sort(((TT, kT) => {
        var cT, lT;
        return (null !== (cT = TT.order) && void 0 !== cT ? cT : 0) - (null !== (lT = kT.order) && void 0 !== lT ? lT : 0)
      }))
    }
    let fT = null;

    function xT(TT) {
      fT = TT
    }
    let IT = !1;

    function AT(TT) {
      IT = !0;
      try {
        TT.onClick()
      } finally {
        IT = !1
      }
      TT.panel && "clientGame" === lT.e.get("openInGameMenuName") && xT(TT.id)
    }

    function CT() {
      return IT
    }

    function jT() {
      return yT().filter((TT => TT.panel && !TT.disabled))
    }

    function vT(TT) {
      const kT = jT(),
        cT = kT.findIndex((TT => TT.id === fT));
      return !(cT < 0 || kT.length < 2) && (AT(kT[(cT + TT + kT.length) % kT.length]), !0)
    }

    function tT() {
      return null !== fT && jT().length > 1
    }

    function hT() {
      xT(null)
    }

    function NT() {
      "inventory" !== lT.e.get("openInGameMenuName") && xT(null)
    }

    function QT() {
      const TT = fT;
      return xT(null), TT
    }

    function ST(TT) {
      return OT.set(TT.id, TT), MT.k.nt(KT, yT(), !0), () => {
        OT.get(TT.id) === TT && (OT.delete(TT.id), MT.k.nt(KT, yT()))
      }
    }
  },
  36423: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => yT,
      d: () => hT,
      f: () => NT,
      h: () => CT,
      j: () => xT,
      m: () => tT,
      p: () => jT,
      q: () => IT
    });
    var lT = cT(31),
      MT = cT(36),
      KT = cT(1292),
      OT = cT(36432);
    const yT = "clientGameUiChanged";
    let fT = null;

    function xT() {
      return fT
    }

    function IT(TT, kT) {
      const cT = {
        content: TT,
        menu: kT
      };
      return fT = cT, MT.k.nt(yT, fT, !0), () => {
        fT === cT && (fT = null, vT = !1, hT(), MT.k.nt(yT, null))
      }
    }
    let AT = null;

    function CT() {
      return AT
    }

    function jT(TT) {
      return AT = TT, () => {
        AT === TT && (AT = null)
      }
    }
    let vT = !1;

    function tT() {
      const TT = lT.e.get("openInGameMenuName");
      "clientGame" !== TT && (vT = "inventory" === TT), (0, OT.p)() || (0, OT.k)(), (0, KT.p)(KT.c), lT.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function hT() {
      QT(!1)
    }

    function NT() {
      QT(vT)
    }

    function QT(TT) {
      "clientGame" === lT.e.get("openInGameMenuName") && lT.e.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, OT.k)(), vT = !1
    }
  },
  36302: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => fT
    });
    var lT = cT(328),
      MT = cT(31),
      KT = cT(36310),
      OT = cT(1654),
      yT = cT(2009);

    function fT(TT, kT) {
      var cT, fT, xT;
      if (!MT.e.get("isKeydownEnabled") || TT.repeat) return;
      const IT = TT.code;
      "Escape" === TT.key ? (0, OT.j)(TT) : null !== (cT = yT.y.OpenSettings) && void 0 !== cT && cT.includes(IT) ? (0, OT.z)(TT, lT.o.SETTINGS) : null !== (fT = yT.y.OpenCharacterCustomization) && void 0 !== fT && fT.includes(IT) ? (0, KT.b)() || (0, OT.z)(TT, lT.o.CUSTOMISATION, kT()) : null !== (xT = yT.y.ShowDebugOverlay) && void 0 !== xT && xT.includes(IT) && MT.e.set({
        showDebugOverlay: !MT.e.get("showDebugOverlay")
      })
    }
  },
  36284: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => CT,
      e: () => IT,
      i: () => jT,
      l: () => AT
    });
    var lT = cT(339),
      MT = cT(649),
      KT = cT(654),
      OT = cT(47);
    const yT = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      fT = "playSessionGameNameWithVariation",
      xT = "wasMatchmakePlayer";

    function IT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT.g;
      (0, KT.h)(TT, yT)
    }

    function AT() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT.g).setItem(xT, !0)
    }

    function CT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT.g;
      return (0, KT.c)(TT, yT)
    }

    function jT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OT.g;
      const cT = (0, KT.c)(kT, yT),
        IT = function(TT) {
          const kT = TT.getItem(fT);
          return "string" !== typeof kT ? null : kT
        }(kT),
        AT = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT.g).getItem(xT)
        }(kT);
      let CT;
      return CT = null !== cT && null !== IT && (0, KT.e)(kT, yT) && function(TT, kT, cT) {
          const MT = (0, lT.Lb)(TT),
            KT = (0, lT.Lb)(kT),
            OT = (0, lT.Gb)(TT),
            yT = (0, lT.Gb)(kT);
          return !(MT !== KT || !cT) || MT === KT && OT === yT
        }(IT, TT, AT) ? cT : (0, MT.d)(), (0, KT.i)(kT, yT, CT), kT.setItem(fT, TT),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OT.g).removeItem(xT)
        }(kT), CT
    }
  },
  36278: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => QT,
      f: () => ST
    });
    var lT = cT(1018),
      MT = cT(623),
      KT = cT(339),
      OT = cT(1020),
      yT = cT(636),
      fT = cT(666),
      xT = cT(4508),
      IT = cT(118),
      AT = cT(159),
      CT = cT(1741),
      jT = cT(133),
      vT = cT(36284),
      tT = cT(47),
      hT = cT(651),
      NT = cT(36293);

    function QT() {
      var TT, kT;
      return [...null !== (TT = navigator.languages) && void 0 !== TT ? TT : [null !== (kT = navigator.language) && void 0 !== kT ? kT : "none"], "en-gb"]
    }

    function ST(TT, kT, cT, ST, DT) {
      const aT = (0, lT.j)(kT) ? (0, lT.n)(kT) : null,
        FT = {
          cookies: (0, CT.getAllCookiesForGameNameWithVariation)(kT),
          isMobile: (0, IT.isMobile)(),
          isUsingCustomGameTexturePack: null !== aT && DT(aT),
          generalCookies: {
            joinDiscord: !!tT.e.getItem("DiscordPressed"),
            newGo: xT.c,
            ...TT.getMetricsCookies(),
            trafficCode: ST,
            compliance: IT.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, IT.getBrowserName)(),
            version: (0, IT.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, IT.getPlatformType)(),
            deviceType: (0, jT.b)()
          },
          isLoggedIn: TT.isLoggedIn(),
          lobbyName: cT,
          languages: QT(),
          version: MT.d,
          siteUsed: AT.u,
          subsiteUsed: AT.D,
          playSessionId: (0, vT.i)(kT),
          visitSessionId: (0, hT.d)(),
          clientReason: yT.k.reason,
          budgetBasis: (0, NT.i)(),
          ...null !== fT.q && {
            diagClaim: fT.q.claimId
          }
        };
      return null !== aT && (0, KT.Ac)(aT) ? (FT.lobbyName = (0, lT.g)(aT, (0, lT.k)(kT), cT), {
        roomName: `classic_${OT.g}`,
        joinOptions: FT
      }) : {
        roomName: kT,
        joinOptions: FT
      }
    }
  },
  36085: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT,
      g: () => MT,
      j: () => KT,
      m: () => OT
    });
    const lT = 1024,
      MT = 1024 * lT;

    function KT(TT) {
      return 2 ** Math.floor(Math.log2(Math.max(1, TT / MT)))
    }

    function OT(TT) {
      return (TT / MT).toFixed(1)
    }
  },
  36299: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT,
      g: () => yT,
      k: () => OT,
      n: () => fT,
      r: () => xT,
      t: () => IT
    });
    var lT = cT(218);
    const MT = 32 * cT(36085).g,
      KT = 6144,
      OT = 4608,
      yT = 512;

    function fT(TT) {
      return Math.floor(MT * TT / KT)
    }

    function xT(TT) {
      const kT = TT - Math.floor(TT / 6);
      let cT = lT.f.maxChunkHorizAddDistance,
        MT = lT.f.maxChunkVertAddDistance;
      if (IT(cT + 1, MT + 1) <= kT) return null;
      for (; IT(cT + 1, MT + 1) > kT && (cT > 0 || MT > 0);) cT > MT ? cT-- : MT--;
      return {
        horizontal: cT,
        vertical: MT
      }
    }

    function IT(TT, kT) {
      const cT = Math.max(TT, kT);
      let lT = 0;
      for (let MT = -cT; MT <= cT; MT++)
        for (let KT = -cT; KT <= cT; KT++)
          for (let OT = -cT; OT <= cT; OT++) AT(TT, kT, MT, KT, OT) && lT++;
      return lT
    }

    function AT(TT, kT, cT, lT, MT) {
      const KT = cT * cT + MT * MT;
      return TT === kT ? KT + lT * lT <= TT * TT : TT > kT ? Math.abs(lT) <= kT && KT + lT * lT <= TT * TT : KT <= TT * TT && KT + lT * lT <= kT * kT
    }
  },
  36293: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => FT,
      i: () => aT,
      k: () => DT
    });
    var lT = cT(218),
      MT = cT(118),
      KT = cT(2865),
      OT = cT(4394),
      yT = cT(645),
      fT = cT(36299);
    const xT = 1048576,
      IT = 1024 * xT,
      AT = 400 * xT,
      CT = 147456,
      jT = .5,
      vT = 1.5 * IT,
      tT = 768 * xT;

    function hT(TT) {
      return AT + TT * CT
    }

    function NT(TT, kT, cT) {
      var MT, OT;
      let {
        footprintBytes: yT,
        basis: xT,
        namesLimit: NT
      } = function(TT) {
        const {
          os: kT,
          deviceMemory: cT
        } = TT;
        if ("ios" === kT) switch ((0, KT.g)(TT)) {
          case "ipad_m":
            return {
              footprintBytes: hT(fT.d), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: tT, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: vT, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: tT, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof cT && Number.isFinite(cT) && cT > 0 ? {
          footprintBytes: cT * IT * jT,
          basis: `memory-${cT}`,
          namesLimit: !0
        } : "android" === kT ? {
          footprintBytes: tT,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: hT(fT.k),
          basis: "unreported",
          namesLimit: !1
        }
      }(TT);
      if (cT) {
        const TT = Math.min(yT, hT(fT.d));
        yT = AT + Math.max(0, TT - AT) / 2, xT += "+killed", NT = !0
      }
      null !== kT && hT(kT) < yT && (yT = hT(kT), xT += "+learned", NT = !0);
      const QT = function(TT) {
          const kT = Math.floor((TT - AT) / CT);
          return Math.min(fT.d, Math.max(fT.g, kT))
        }(yT),
        ST = (0, fT.r)(QT);
      return {
        footprintBytes: yT,
        shedFootprintBytes: NT ? Math.max(yT, hT(QT)) : null,
        chunkCap: QT,
        maxHorizDistance: null !== (MT = null === ST || void 0 === ST ? void 0 : ST.horizontal) && void 0 !== MT ? MT : lT.f.maxChunkHorizAddDistance,
        maxVertDistance: null !== (OT = null === ST || void 0 === ST ? void 0 : ST.vertical) && void 0 !== OT ? OT : lT.f.maxChunkVertAddDistance,
        basis: xT
      }
    }
    let QT = null;

    function ST() {
      return NT({
        os: (0, MT.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, KT.h)()
      }, (0, OT.g)(), (0, yT.F)("wasm").length > 0)
    }

    function DT() {
      return QT ??= ST(), QT
    }

    function aT() {
      var TT;
      return (null !== (TT = QT) && void 0 !== TT ? TT : ST()).basis
    }

    function FT(TT, kT) {
      return TT.setChunkCap(kT.chunkCap)
    }
  },
  36693: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT,
      c: () => KT,
      g: () => CT,
      h: () => yT,
      l: () => fT,
      o: () => xT,
      s: () => AT,
      t: () => IT,
      w: () => OT
    });
    var lT = cT(1244);
    let MT = function(TT) {
        return TT[TT.Join = 0] = "Join", TT[TT.Leave = 1] = "Leave", TT[TT.Push = 2] = "Push", TT[TT.Cursor = 3] = "Cursor", TT[TT.Submit = 4] = "Submit", TT[TT.ReloadAsVariation = 5] = "ReloadAsVariation", TT[TT.CreateFile = 6] = "CreateFile", TT[TT.RenameFile = 7] = "RenameFile", TT[TT.DeleteFile = 8] = "DeleteFile", TT[TT.SetEngine = 9] = "SetEngine", TT[TT.RenameFolder = 10] = "RenameFolder", TT
      }({}),
      KT = function(TT) {
        return TT[TT.Joined = 0] = "Joined", TT[TT.Updates = 1] = "Updates", TT[TT.Presence = 2] = "Presence", TT[TT.RemoteCursor = 3] = "RemoteCursor", TT[TT.ForceClose = 4] = "ForceClose", TT[TT.LobbyFilesChanged = 5] = "LobbyFilesChanged", TT[TT.EngineSettings = 6] = "EngineSettings", TT
      }({});

    function OT(TT) {
      return "lobby" === TT.kind ? `lobby:${TT.path}` : `codeBlock:${TT.pos[0]},${TT.pos[1]},${TT.pos[2]}`
    }

    function yT(TT) {
      if ("lobby" === TT) return {
        kind: "lobby",
        path: lT.g
      };
      if (TT.startsWith("lobby:")) {
        const kT = TT.slice(6);
        return AT(kT) ? {
          kind: "lobby",
          path: kT
        } : null
      }
      const kT = TT.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return kT ? {
        kind: "codeBlock",
        pos: [parseInt(kT[1]), parseInt(kT[2]), parseInt(kT[3])]
      } : null
    }

    function fT(TT) {
      return TT.endsWith(".d.ts")
    }

    function xT(TT) {
      return TT.endsWith(".ts") && !fT(TT)
    }
    const IT = 64;

    function AT(TT) {
      if (!TT || TT !== TT.trim()) return !1;
      if (TT.length > IT) return !1;
      if (TT.startsWith("/") || TT.includes("\\") || TT.includes("\0")) return !1;
      if (!fT(TT) && !xT(TT) && ! function(TT) {
          return TT.endsWith(".js") && !TT.endsWith(".min.js") && !TT.endsWith(".bundle.js")
        }(TT)) return !1;
      const kT = TT.split("/");
      for (const cT of kT)
        if ("" === cT || "." === cT || ".." === cT) return !1;
      return !0
    }
    const CT = 14e3
  },
  38853: (TT, kT, cT) => {
    function lT(TT, kT, cT, lT, MT) {
      var KT = {};
      return Object.keys(lT).forEach((function(TT) {
        KT[TT] = lT[TT]
      })), KT.enumerable = !!KT.enumerable, KT.configurable = !!KT.configurable, ("value" in KT || KT.initializer) && (KT.writable = !0), KT = cT.slice().reverse().reduce((function(cT, lT) {
        return lT(TT, kT, cT) || cT
      }), KT), MT && void 0 !== KT.initializer && (KT.value = KT.initializer ? KT.initializer.call(MT) : void 0, KT.initializer = void 0), void 0 === KT.initializer && (Object.defineProperty(TT, kT, KT), KT = null), KT
    }
    cT.d(kT, {
      b: () => lT
    })
  },
  38844: (TT, kT, cT) => {
    function lT(TT, kT, cT, lT) {
      cT && Object.defineProperty(TT, kT, {
        enumerable: cT.enumerable,
        configurable: cT.configurable,
        writable: cT.writable,
        value: cT.initializer ? cT.initializer.call(lT) : void 0
      })
    }
    cT.d(kT, {
      e: () => lT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
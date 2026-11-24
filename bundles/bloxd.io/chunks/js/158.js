export const id = 158;
export const ids = [158];
export const modules = {
  39083: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => LD,
      d: () => KD
    });
    var pD = wD(4107);
    let sD = null;

    function KD(DD) {
      return null !== sD && DD === sD
    }

    function rD() {
      this.Dv = !1, this.stopPropagation = !1, this.Av = !1, this.disabled = !1
    }
    class LD {
      constructor(DD, zD) {
        this.version = "0.7.0";
        var wD = Object.assign({}, new rD, zD || {});
        this.element = DD || document, this.Dv = !!wD.Dv, this.stopPropagation = !!wD.stopPropagation, this.Av = !!wD.Av, this.disabled = !!wD.disabled, this.filterEvents = (DD, zD) => !0, this.ignoreEvent = DD => !1, this.down = new pD.EventEmitter, this.up = new pD.EventEmitter, this.state = {}, this.Fv = {
          dx: 0,
          dy: 0,
          IzD: 0,
          BzD: 0,
          GzD: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? gD(this) : document.addEventListener("DOMContentLoaded", (DD => {
          gD(this)
        }), {
          once: !0
        })
      }
      bind(DD) {
        for (var zD = arguments.length, wD = new Array(zD > 1 ? zD - 1 : 0), pD = 1; pD < zD; pD++) wD[pD - 1] = arguments[pD];
        wD.forEach((zD => {
          var wD = this._keyBindmap[zD] || [];
          wD.includes(DD) || (wD.push(DD), this._keyBindmap[zD] = wD)
        })), this.state[DD] = !!this.state[DD], this.pressCount[DD] = this.pressCount[DD] || 0, this.releaseCount[DD] = this.releaseCount[DD] || 0
      }
      unbind(DD) {
        for (var zD in this._keyBindmap) {
          var wD = this._keyBindmap[zD],
            pD = wD.indexOf(DD);
          pD > -1 && wD.splice(pD, 1)
        }
      }
      getBindings() {
        var DD = {};
        for (var zD in this._keyBindmap) {
          this._keyBindmap[zD].forEach((wD => {
            DD[wD] = DD[wD] || [], DD[wD].push(zD)
          }))
        }
        return DD
      }
      DU() {
        cD(this.Fv), cD(this.pressCount), cD(this.releaseCount)
      }
    }

    function cD(DD) {
      for (var zD in DD) DD[zD] = 0
    }

    function gD(DD) {
      window.addEventListener("keydown", GD.bind(null, DD, !0), !1), window.addEventListener("keyup", GD.bind(null, DD, !1), !1);
      var zD = {
        passive: !0
      };
      DD.element.addEventListener("touchstart", fD.bind(void 0, DD), {
        passive: !1
      }), DD.element.addEventListener("touchend", BD.bind(void 0, DD), zD), DD.element.addEventListener("mousedown", hD.bind(null, DD, !0), zD), window.document.addEventListener("mouseup", hD.bind(null, DD, !1), zD), DD.element.addEventListener("touchmove", nD.bind(null, DD), zD), DD.element.addEventListener("mousemove", nD.bind(null, DD), zD), window.PointerEvent, DD.element.addEventListener("wheel", MD.bind(null, DD), zD), DD.element.addEventListener("contextmenu", OD.bind(null, DD), !1), window.addEventListener("blur", QD.bind(null, DD), !1)
    }
    var RD = 0,
      AD = 0,
      UD = null;

    function fD(DD, zD) {
      zD.preventDefault(), ID(zD)
    }

    function ID(DD) {
      let zD = !1;
      for (let wD = 0; wD < DD.touches.length; ++wD)
        if (DD.touches[wD].identifier === UD) {
          zD = !0;
          break
        } if (!zD) {
        const zD = DD.changedTouches[0];
        RD = zD.clientX, AD = zD.clientY, UD = zD.identifier
      }
    }

    function BD(DD, zD) {
      for (var wD = zD.changedTouches, pD = 0; pD < wD.length; ++pD) wD[pD].identifier === UD && (UD = null)
    }

    function GD(DD, zD, wD) {
      if (!DD.ignoreEvent(wD)) try {
        XD(DD, wD), zD && wD.isTrusted && !wD.repeat && DD._keyStates[wD.code] && VD(DD, wD.code)
      } finally {
        PD(wD.code, zD, DD, wD)
      }
    }

    function hD(DD, zD, wD) {
      if (!DD.ignoreEvent(wD)) try {
        XD(DD, wD)
      } finally {
        ! function(DD, zD, wD) {
          if ("pointerId" in wD)
            if (zD) {
              if (null !== DD._touches.currID) return;
              DD._touches.currID = wD.pointerId
            } else {
              if (DD._touches.currID !== wD.pointerId) return;
              DD._touches.currID = null
            } var pD = "button" in wD ? wD.button + 1 : 1;
          PD("Mouse" + pD, zD, DD, wD)
        }(DD, zD, wD)
      }
    }

    function nD(DD, zD) {
      var wD = zD.movementX || zD.mozMovementX || 0,
        pD = zD.movementY || zD.mozMovementY || 0;
      if (zD.touches && 0 === (wD | pD)) {
        var sD = function(DD) {
          ID(DD);
          for (let zD = 0; zD < DD.changedTouches.length; ++zD)
            if (DD.changedTouches[zD].identifier == UD) {
              const wD = DD.changedTouches[zD],
                pD = [wD.clientX - RD, wD.clientY - AD];
              return RD = wD.clientX, AD = wD.clientY, pD
            } return console.error(`Did not find touch id ${UD}`), [0, 0]
        }(zD);
        wD = sD[0], pD = sD[1]
      }
      DD.Fv.dx += wD, DD.Fv.dy += pD
    }

    function MD(DD, zD) {
      XD(DD, zD);
      var wD = 1;
      switch (zD.deltaMode) {
        case 0:
          wD = 1;
          break;
        case 1:
          wD = 12;
          break;
        case 2:
          wD = DD.element.clientHeight || window.innerHeight
      }
      DD.Fv.IzD += (zD.deltaX || 0) * wD, DD.Fv.BzD += (zD.deltaY || 0) * wD, DD.Fv.GzD += (zD.deltaZ || 0) * wD
    }

    function OD(DD, zD) {
      if (!DD.Av) return zD.preventDefault(), !1
    }
    var JD = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function ED(DD, zD) {
      return !!DD[JD[zD]] || ("AltRight" === zD || "ControlLeft" === zD) && "function" === typeof DD.getModifierState && !0 === DD.getModifierState("AltGraph")
    }

    function QD(DD, zD) {
      for (var wD in DD._modifiersHeldThroughBlur = {}, JD) DD._keyStates[wD] && (DD._modifiersHeldThroughBlur[wD] = !0);
      zD && zD.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (DD) {
          return !0
        }
      }() && (clearTimeout(DD._blurRelease), DD._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var zD in DD._modifiersHeldThroughBlur = {}, DD._keyStates) DD._keyStates[zD] && !/^Mouse\d/.test(zD) && VD(DD, zD)
      }), 0))
    }

    function XD(DD, zD) {
      var wD = DD._modifiersHeldThroughBlur;
      if (wD && zD.isTrusted && document.hasFocus())
        for (var pD in wD) delete wD[pD], DD._keyStates[pD] && pD !== zD.code && (ED(zD, pD) || VD(DD, pD))
    }

    function VD(DD, zD) {
      const wD = {
          code: zD,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        pD = sD;
      sD = wD;
      try {
        PD(zD, !1, DD, wD)
      } finally {
        sD = pD
      }
    }

    function PD(DD, zD, wD, pD) {
      var sD = wD._keyBindmap[DD];
      sD && (CD(wD._keyStates[DD], zD) && (wD._keyStates[DD] = zD, sD.forEach((DD => {
        (!wD.filterEvents || wD.filterEvents(pD, DD)) && function(DD, zD, wD, pD) {
          var sD = zD ? wD.pressCount : wD.releaseCount;
          sD[DD] = (sD[DD] || 0) + 1;
          var KD = wD._bindPressCount[DD] || 0;
          (KD += zD ? 1 : -1) < 0 && (KD = 0);
          wD._bindPressCount[DD] = KD;
          var rD = wD.state[DD];
          if (CD(rD, KD)) {
            wD.state[DD] = KD > 0;
            var LD = zD ? wD.down : wD.up;
            wD.disabled || LD.emit(DD, pD)
          }
        }(DD, zD, wD, pD)
      }))), "button" in pD || (wD.Dv && !pD.defaultPrevented && pD.preventDefault(), wD.stopPropagation && pD.stopPropagation()))
    }

    function CD(DD, zD) {
      return DD ? !zD : zD
    }
  },
  36646: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => BD,
      g: () => GD
    });
    var pD = wD(58),
      sD = wD(1442),
      KD = wD(1973),
      rD = wD(36593),
      LD = wD(619),
      cD = wD(1044),
      gD = wD.n(cD),
      RD = wD(1096);
    const AD = [UD()];

    function UD() {
      return {
        source: null,
        direction: null,
        bZ: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function fD(DD) {
      return AD.find((zD => null !== zD.source && zD.source === DD))
    }

    function ID(DD) {
      clearTimeout(DD.timeout), DD.source = null, DD.direction = null, DD.writtenAngle = null, DD.bZ && (DD.bZ.style.rotate = "")
    }
    const BD = (0, pD.memo)((function() {
      const [, DD] = (0, pD.useReducer)((DD => DD + 1), 0);
      return (0, sD.g)("damagedByOtherPlayer", (zD => {
        let {
          tD: wD,
          direction: pD
        } = zD;
        const sD = wD || "nonDirectional",
          KD = function(DD) {
            var zD;
            const wD = null !== (zD = fD(DD)) && void 0 !== zD ? zD : AD.find((DD => null === DD.source));
            if (wD) return wD;
            const pD = {
              source: null,
              direction: null,
              bZ: null,
              timeout: void 0,
              writtenAngle: null
            };
            return AD.push(pD), pD
          }(sD);
        clearTimeout(KD.timeout), KD.source = sD, KD.direction = pD, KD.timeout = setTimeout((() => {
          ID(KD), DD()
        }), 800), DD()
      })), (0, KD.c)("kill", (zD => {
        let {
          killer: wD,
          victim: pD
        } = zD;
        const sD = wD.local && fD(pD.id);
        sD && (ID(sD), DD())
      })), (0, pD.useEffect)((() => {
        const DD = (0, rD.h)("turnDamageIndicators", GD);
        return () => {
          DD(), AD.forEach(ID)
        }
      }), []), (0, RD.jsx)("div", {
        className: "DirectionalDamage",
        children: AD.map(((DD, zD) => (0, RD.jsx)("div", {
          ref: zD => {
            DD.bZ = zD
          },
          className: gD()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, LD.B)(DD.direction),
            DamageIndicatorIdle: null === DD.source
          })
        }, zD)))
      })
    }));

    function GD(DD) {
      for (const zD of AD) {
        if (null === zD.source || (0, LD.B)(zD.direction)) continue;
        const wD = zD.direction - DD;
        wD !== zD.writtenAngle && (zD.writtenAngle = wD, zD.bZ.style.rotate = `${wD}rad`)
      }
    }
  },
  36495: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD,
      e: () => KD
    });
    let pD = !1;

    function sD() {
      return pD
    }

    function KD(DD) {
      return pD !== DD && (pD = DD, !0)
    }
  },
  34174: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD,
      h: () => sD
    });
    var pD = wD(20);

    function sD(DD, zD) {
      return DD && !zD
    }

    function KD() {
      return sD(pD.e.get("isTouchScreen"), pD.e.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  40585: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      startPadGameplay: () => JD
    });
    wD(40468);
    var pD = wD(40477),
      sD = wD(3757),
      KD = wD(20),
      rD = wD(39047),
      LD = wD(3688),
      cD = wD(39066),
      gD = wD(25),
      RD = wD(2769),
      AD = wD(38415),
      UD = wD(8855),
      fD = wD(40483);
    const ID = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var BD = wD(40499),
      GD = wD(8833),
      hD = wD(39079);
    const nD = DD => DD.padSneakToggled || !!KD.e.get("clientEscMenuOptions").crouchIsToggle && DD.crouchToggled,
      MD = () => {
        const DD = (() => {
          const DD = (0, UD.c)();
          let zD = ID;
          const wD = new fD.e;
          let pD = !1,
            sD = 0;
          const KD = () => {
            const wD = performance.now(),
              KD = 0 === sD ? 0 : wD - sD;
            if (sD = wD, !pD) return DD.discardPending(), null;
            const rD = (0, fD.r)(zD, KD),
              LD = DD.drainLookDelta(),
              cD = (0, AD.h)();
            return {
              aT: (rD.aT + LD.aT) * cD,
              qT: (rD.qT + LD.qT) * cD
            }
          };
          return {
            update: (DD, sD, rD, LD) => {
              DD.camera.qY !== KD && (DD.camera.qY = KD), pD = !0, zD = (0, fD.t)(wD, sD, rD, LD, performance.now())
            },
            release: () => {
              pD = !1, zD = ID, wD.reset()
            },
            uninstall: DD => {
              DD.camera.qY === KD && (DD.camera.qY = null)
            }
          }
        })();
        return {
          update: (zD, wD, pD) => {
            DD.update((0, RD.e)(), zD, wD, pD)
          },
          release: DD.release,
          uninstall: () => {
            const zD = (0, RD.e)();
            zD && DD.uninstall(zD)
          }
        }
      };
    var OD = wD(40495);
    wD(37669), wD(8745);
    wD(8765).d;
    const JD = () => {
      const DD = (0, OD.e)((() => {
          const DD = {
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
            bodies: () => (0, rD.b)(),
            look: MD(),
            move: (zD, wD) => {
              const pD = (0, RD.e)(),
                sD = pD.yJ.LwD();
              if (DD.x = zD.x, DD.y = zD.y, DD.magnitude = zD.magnitude, DD.headingOffset = zD.headingOffset, DD.jumpHeld = zD.jumpHeld, zD.jumpPressed && (DD.jumpPressedSinceTick = !0), DD.running = zD.running, DD.sprintHeld = zD.sprintHeld, wD) {
                const zD = (0, BD.e)({
                  ...wD,
                  descending: pD.yJ.gzD(pD.vW).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!pD.NJ.canCrouch,
                  toggled: nD(sD)
                });
                DD.crouchHeld = zD.crouchHeld, sD.padSneakToggled = zD.toggled, sD.crouchToggled = !1, (0, GD.e)(zD.toggled)
              }
              sD.gamepad = DD
            },
            stopMoving: () => {
              var zD;
              Object.assign(DD, {
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
              const wD = null === (zD = (0, RD.e)()) || void 0 === zD ? void 0 : zD.yJ.LwD();
              (null === wD || void 0 === wD ? void 0 : wD.gamepad) === DD && (wD.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: DD => {
              const zD = (0, RD.e)(),
                wD = null === zD || void 0 === zD ? void 0 : zD.yJ.LwD();
              "touch" === DD ? ((0, GD.e)(!1), null !== wD && void 0 !== wD && wD.padSneakToggled && (wD.padSneakToggled = !1, wD.isTouchscreen && !wD.gamepad && zD.yJ.TzD(zD.vW).setCrouching(!!zD.NJ.canCrouch && wD.touchCrouch))) : "gamepad" === DD && wD && (0, GD.e)(nD(wD))
            },
            hasPlayer: () => {
              var DD;
              return !(null === (DD = (0, RD.e)()) || void 0 === DD || !DD.vW)
            },
            isPlayerDead: () => {
              var DD;
              const zD = (0, RD.e)();
              return !1 === (null === (DD = zD.yJ.HzD(zD.vW)) || void 0 === DD ? void 0 : DD.isAlive)
            },
            isReplayMode: () => {
              var DD, zD;
              return !(null === (DD = (0, RD.b)()) || void 0 === DD || null === (zD = DD.client) || void 0 === zD || !zD.isReplayMode())
            },
            isFreeCameraOn: () => {
              var DD, zD, wD;
              return !(null === (DD = (0, RD.b)()) || void 0 === DD || null === (zD = DD.client) || void 0 === zD || null === (wD = zD.freeCameraController) || void 0 === wD || !wD.isEnabled())
            },
            targetsBlock: () => !!(0, RD.e)().jDD,
            selectedSlotEmpty: () => {
              var DD;
              const zD = (0, RD.e)();
              return !(null !== (DD = zD.yJ.jzD(zD.vW)) && void 0 !== DD && DD.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const DD = (0, RD.e)().NJ;
              return !!DD.creative && !!DD.canPickBlocks
            },
            scrollHotbar: DD => {
              gD.l.KG("ScrollInventorySlot", DD)
            },
            hasFullInventory: () => (0, cD.e)((0, RD.e)()),
            hasLobbyTab: () => (0, hD.b)((0, RD.e)().NJ),
            contextActionInputs: () => {
              var DD, zD, wD, pD;
              const sD = (0, RD.e)();
              return {
                holdingGun: !(null === (DD = sD.yJ.qzD(sD.vW)) || void 0 === DD || null === (zD = DD.lE) || void 0 === zD || !zD.isGun()),
                customButtons: null !== (wD = sD.NJ.customButtons) && void 0 !== wD ? wD : null,
                touchscreenActionButton: null !== (pD = sD.NJ.touchscreenActionButton) && void 0 !== pD ? pD : null
              }
            },
            pressTouchButton: DD => {
              (0, LD.sendColyMessage)(sD.Yj, DD)
            }
          }
        })()),
        zD = (0, pD.e)(),
        wD = null,
        KD = null;
      return () => {
        DD(), zD(), null === wD || void 0 === wD || wD(), null === KD || void 0 === KD || KD()
      }
    }
  },
  36586: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      h: () => BD,
      j: () => GD,
      k: () => LD,
      m: () => UD,
      q: () => hD,
      s: () => AD,
      v: () => MD,
      y: () => ID,
      z: () => nD
    });
    var pD = wD(20),
      sD = wD(25);
    const KD = "clientGameInventoryButtonsChanged",
      rD = new Map;

    function LD() {
      return [...rD.values()].sort(((DD, zD) => {
        var wD, pD;
        return (null !== (wD = DD.order) && void 0 !== wD ? wD : 0) - (null !== (pD = zD.order) && void 0 !== pD ? pD : 0)
      }))
    }
    let cD = null;

    function gD(DD) {
      cD = DD
    }
    let RD = !1;

    function AD(DD) {
      RD = !0;
      try {
        DD.onClick()
      } finally {
        RD = !1
      }
      DD.panel && "clientGame" === pD.e.get("openInGameMenuName") && gD(DD.id)
    }

    function UD() {
      return RD
    }

    function fD() {
      return LD().filter((DD => DD.panel && !DD.disabled))
    }

    function ID(DD) {
      const zD = fD(),
        wD = zD.findIndex((DD => DD.id === cD));
      return !(wD < 0 || zD.length < 2) && (AD(zD[(wD + DD + zD.length) % zD.length]), !0)
    }

    function BD() {
      return null !== cD && fD().length > 1
    }

    function GD() {
      gD(null)
    }

    function hD() {
      "inventory" !== pD.e.get("openInGameMenuName") && gD(null)
    }

    function nD() {
      const DD = cD;
      return gD(null), DD
    }

    function MD(DD) {
      return rD.set(DD.id, DD), sD.l.KG(KD, LD(), !0), () => {
        rD.get(DD.id) === DD && (rD.delete(DD.id), sD.l.KG(KD, LD()))
      }
    }
  },
  36580: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => LD,
      g: () => GD,
      i: () => hD,
      m: () => UD,
      p: () => gD,
      r: () => BD,
      t: () => fD,
      w: () => RD
    });
    var pD = wD(20),
      sD = wD(25),
      KD = wD(1299),
      rD = wD(36586);
    const LD = "clientGameUiChanged";
    let cD = null;

    function gD() {
      return cD
    }

    function RD(DD, zD) {
      const wD = {
        content: DD,
        menu: zD
      };
      return cD = wD, sD.l.KG(LD, cD, !0), () => {
        cD === wD && (cD = null, ID = !1, GD(), sD.l.KG(LD, null))
      }
    }
    let AD = null;

    function UD() {
      return AD
    }

    function fD(DD) {
      return AD = DD, () => {
        AD === DD && (AD = null)
      }
    }
    let ID = !1;

    function BD() {
      const DD = pD.e.get("openInGameMenuName");
      "clientGame" !== DD && (ID = "inventory" === DD), (0, rD.m)() || (0, rD.j)(), (0, KD.p)(KD.b), pD.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function GD() {
      nD(!1)
    }

    function hD() {
      nD(ID)
    }

    function nD(DD) {
      "clientGame" === pD.e.get("openInGameMenuName") && pD.e.set({
        openInGameMenuName: DD ? "inventory" : null
      }), DD || (0, rD.j)(), ID = !1
    }
  },
  36491: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => cD
    });
    var pD = wD(338),
      sD = wD(20),
      KD = wD(36495),
      rD = wD(1648),
      LD = wD(1981);

    function cD(DD, zD) {
      var wD, cD, gD;
      if (!sD.e.get("isKeydownEnabled") || DD.repeat) return;
      const RD = DD.code;
      "Escape" === DD.key ? (0, rD.l)(DD) : null !== (wD = LD.u.OpenSettings) && void 0 !== wD && wD.includes(RD) ? (0, rD.w)(DD, pD.l.SETTINGS) : null !== (cD = LD.u.OpenCharacterCustomization) && void 0 !== cD && cD.includes(RD) ? (0, KD.d)() || (0, rD.w)(DD, pD.l.CUSTOMISATION, zD()) : null !== (gD = LD.u.ShowDebugOverlay) && void 0 !== gD && gD.includes(RD) && sD.e.set({
        showDebugOverlay: !sD.e.get("showDebugOverlay")
      })
    }
  },
  39038: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => cD
    });
    var pD = wD(8901),
      sD = wD(36486),
      KD = wD(39042);
    const rD = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      LD = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function cD(DD, zD) {
      if (DD instanceof sD.c) return {
        at: rD[zD],
        code: 0
      };
      const wD = (0, pD.g)(DD),
        cD = "number" === typeof wD ? wD : 0;
      return null !== (0, KD.j)(cD).name ? {
        at: "refused",
        code: cD
      } : {
        at: LD[zD],
        code: cD
      }
    }
  },
  8901: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      g: () => rD,
      i: () => LD,
      m: () => gD,
      q: () => cD
    });
    var pD = wD(197),
      sD = wD(4657);

    function KD(DD) {
      return rD(DD) === pD.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function rD(DD) {
      return "object" === typeof DD && null !== DD ? DD.code : void 0
    }

    function LD(DD) {
      var zD;
      return null !== (zD = Object.keys(sD.b).find((zD => sD.b[zD] === DD))) && void 0 !== zD ? zD : null
    }

    function cD(DD) {
      return "notWhitelisted" === DD ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const gD = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  36467: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => UD,
      f: () => RD,
      i: () => fD,
      m: () => AD
    });
    var pD = wD(351),
      sD = wD(648),
      KD = wD(663),
      rD = wD(35);
    const LD = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      cD = "playSessionGameNameWithVariation",
      gD = "wasMatchmakePlayer";

    function RD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rD.k;
      (0, KD.j)(DD, LD)
    }

    function AD() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rD.k).setItem(gD, !0)
    }

    function UD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rD.k;
      return (0, KD.e)(DD, LD)
    }

    function fD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rD.k;
      const wD = (0, KD.e)(zD, LD),
        RD = function(DD) {
          const zD = DD.getItem(cD);
          return "string" !== typeof zD ? null : zD
        }(zD),
        AD = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rD.k).getItem(gD)
        }(zD);
      let UD;
      return UD = null !== wD && null !== RD && (0, KD.h)(zD, LD) && function(DD, zD, wD) {
          const sD = (0, pD.Tb)(DD),
            KD = (0, pD.Tb)(zD),
            rD = (0, pD.Ob)(DD),
            LD = (0, pD.Ob)(zD);
          return !(sD !== KD || !wD) || sD === KD && rD === LD
        }(RD, DD, AD) ? wD : (0, sD.e)(), (0, KD.l)(zD, LD, UD), zD.setItem(cD, DD),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rD.k).removeItem(gD)
        }(zD), UD
    }
  },
  36463: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => JD,
      d: () => ED
    });
    var pD = wD(1008),
      sD = wD(212),
      KD = wD(348),
      rD = wD(625),
      LD = wD(351),
      cD = wD(1017),
      gD = wD(638),
      RD = wD(676),
      AD = wD(4540),
      UD = wD(103),
      fD = wD(128),
      ID = wD(1737),
      BD = wD(116),
      GD = wD(36467),
      hD = wD(35),
      nD = wD(655),
      MD = wD(323),
      OD = wD(36473);

    function JD() {
      var DD, zD;
      return [...null !== (DD = navigator.languages) && void 0 !== DD ? DD : [null !== (zD = navigator.language) && void 0 !== zD ? zD : "none"], "en-gb"]
    }

    function ED(DD, zD, wD, ED, QD) {
      const XD = (0, pD.l)(zD) ? (0, pD.o)(zD) : null,
        VD = DD.isLoggedIn() && void 0 !== (0, sD.d)(KD.k, fD.v) ? (0, MD.u)() : null,
        PD = {
          cookies: (0, ID.getAllCookiesForGameNameWithVariation)(zD),
          isMobile: (0, UD.isMobile)(),
          isUsingCustomGameTexturePack: null !== XD && QD(XD),
          generalCookies: {
            joinDiscord: !!hD.h.getItem("DiscordPressed"),
            newGo: AD.b,
            ...DD.getMetricsCookies(),
            trafficCode: ED,
            compliance: UD.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, UD.getBrowserName)(),
            version: (0, UD.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, UD.getPlatformType)(),
            deviceType: (0, BD.e)()
          },
          isLoggedIn: DD.isLoggedIn(),
          lobbyName: wD,
          languages: JD(),
          version: rD.e,
          siteUsed: fD.v,
          subsiteUsed: fD.D,
          playSessionId: (0, GD.i)(zD),
          visitSessionId: (0, nD.d)(),
          clientReason: gD.n.reason,
          budgetBasis: (0, OD.i)(),
          ...null !== RD.q && {
            diagClaim: RD.q.claimId
          },
          ...null !== VD && {
            webGpuLoss: VD
          }
        };
      return null !== XD && (0, LD.Dc)(XD) ? (PD.lobbyName = (0, pD.k)(XD, (0, pD.m)(zD), wD), {
        roomName: `classic_${cD.e}`,
        joinOptions: PD
      }) : {
        roomName: zD,
        joinOptions: PD
      }
    }
  },
  39042: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => sD,
      c: () => KD,
      g: () => LD,
      j: () => RD,
      n: () => cD,
      p: () => rD
    });
    var pD = wD(197);
    const sD = 3e3,
      KD = 15e3;

    function rD(DD) {
      const zD = DD.endsWith(pD.j);
      return {
        text: (zD ? DD.slice(0, -pD.j.length) : DD) || null,
        dropsCache: zD
      }
    }
    const LD = "Either your internet isn't working or this is a bug.";

    function cD(DD, zD) {
      const wD = RD(DD);
      return null !== wD.name && "" === pD.e[wD.name].text && null !== zD ? zD : wD.reason
    }
    const gD = "You were removed from the game.";

    function RD(DD) {
      var zD;
      let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const sD = null !== (zD = Object.keys(pD.e).find((zD => pD.e[zD].code === DD))) && void 0 !== zD ? zD : null;
      if (null === sD) return {
        code: DD,
        name: sD,
        reason: null !== wD && void 0 !== wD ? wD : `${LD}\nCode: ${DD}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: KD,
        canReconnect: rD = !1
      } = pD.e[sD], cD = DD === pD.e.outdatedVersion.code || DD === pD.e.loadRecaptchaError.code;
      return {
        code: DD,
        name: sD,
        reason: "" !== KD ? KD : null !== wD && void 0 !== wD ? wD : DD === pD.e.gameOrPluginKick.code ? gD : `Code: ${DD}`,
        canReconnect: rD,
        automaticallyReconnect: DD === pD.e.customGameUpdated.code || DD === pD.e.duplicateLobbyNameError.code,
        requiresRefresh: cD
      }
    }
  },
  36821: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD,
      f: () => KD,
      g: () => UD,
      h: () => LD,
      i: () => cD,
      l: () => gD,
      m: () => AD,
      n: () => RD,
      p: () => rD
    });
    var pD = wD(1245);
    let sD = function(DD) {
        return DD[DD.Join = 0] = "Join", DD[DD.Leave = 1] = "Leave", DD[DD.Push = 2] = "Push", DD[DD.Cursor = 3] = "Cursor", DD[DD.Submit = 4] = "Submit", DD[DD.ReloadAsVariation = 5] = "ReloadAsVariation", DD[DD.CreateFile = 6] = "CreateFile", DD[DD.RenameFile = 7] = "RenameFile", DD[DD.DeleteFile = 8] = "DeleteFile", DD[DD.SetEngine = 9] = "SetEngine", DD[DD.RenameFolder = 10] = "RenameFolder", DD
      }({}),
      KD = function(DD) {
        return DD[DD.Joined = 0] = "Joined", DD[DD.Updates = 1] = "Updates", DD[DD.Presence = 2] = "Presence", DD[DD.RemoteCursor = 3] = "RemoteCursor", DD[DD.ForceClose = 4] = "ForceClose", DD[DD.LobbyFilesChanged = 5] = "LobbyFilesChanged", DD[DD.EngineSettings = 6] = "EngineSettings", DD
      }({});

    function rD(DD) {
      return "lobby" === DD.kind ? `lobby:${DD.path}` : `codeBlock:${DD.pos[0]},${DD.pos[1]},${DD.pos[2]}`
    }

    function LD(DD) {
      if ("lobby" === DD) return {
        kind: "lobby",
        path: pD.f
      };
      if (DD.startsWith("lobby:")) {
        const zD = DD.slice(6);
        return AD(zD) ? {
          kind: "lobby",
          path: zD
        } : null
      }
      const zD = DD.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return zD ? {
        kind: "codeBlock",
        pos: [parseInt(zD[1]), parseInt(zD[2]), parseInt(zD[3])]
      } : null
    }

    function cD(DD) {
      return DD.endsWith(".d.ts")
    }

    function gD(DD) {
      return DD.endsWith(".ts") && !cD(DD)
    }
    const RD = 64;

    function AD(DD) {
      if (!DD || DD !== DD.trim()) return !1;
      if (DD.length > RD) return !1;
      if (DD.startsWith("/") || DD.includes("\\") || DD.includes("\0")) return !1;
      if (!cD(DD) && !gD(DD) && ! function(DD) {
          return DD.endsWith(".js") && !DD.endsWith(".min.js") && !DD.endsWith(".bundle.js")
        }(DD)) return !1;
      const zD = DD.split("/");
      for (const wD of zD)
        if ("" === wD || "." === wD || ".." === wD) return !1;
      return !0
    }
    const UD = 14e3
  },
  38950: (DD, zD, wD) => {
    function pD(DD, zD, wD, pD, sD) {
      var KD = {};
      return Object.keys(pD).forEach((function(DD) {
        KD[DD] = pD[DD]
      })), KD.enumerable = !!KD.enumerable, KD.configurable = !!KD.configurable, ("value" in KD || KD.initializer) && (KD.writable = !0), KD = wD.slice().reverse().reduce((function(wD, pD) {
        return pD(DD, zD, wD) || wD
      }), KD), sD && void 0 !== KD.initializer && (KD.value = KD.initializer ? KD.initializer.call(sD) : void 0, KD.initializer = void 0), void 0 === KD.initializer && (Object.defineProperty(DD, zD, KD), KD = null), KD
    }
    wD.d(zD, {
      d: () => pD
    })
  },
  38941: (DD, zD, wD) => {
    function pD(DD, zD, wD, pD) {
      wD && Object.defineProperty(DD, zD, {
        enumerable: wD.enumerable,
        configurable: wD.configurable,
        writable: wD.writable,
        value: wD.initializer ? wD.initializer.call(pD) : void 0
      })
    }
    wD.d(zD, {
      c: () => pD
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);
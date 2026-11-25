export const id = 214;
export const ids = [214];
export const modules = {
  40148: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM,
      e: () => jM
    });
    var OM = iM(4443);
    let SM = null;

    function jM(MM) {
      return null !== SM && MM === SM
    }

    function aM() {
      this.uB = !1, this.stopPropagation = !1, this.pB = !1, this.disabled = !1
    }
    class PM {
      constructor(MM, rM) {
        this.version = "0.7.0";
        var iM = Object.assign({}, new aM, rM || {});
        this.element = MM || document, this.uB = !!iM.uB, this.stopPropagation = !!iM.stopPropagation, this.pB = !!iM.pB, this.disabled = !!iM.disabled, this.filterEvents = (MM, rM) => !0, this.ignoreEvent = MM => !1, this.down = new OM.EventEmitter, this.up = new OM.EventEmitter, this.state = {}, this.oB = {
          dx: 0,
          dy: 0,
          mrM: 0,
          HrM: 0,
          hrM: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? QM(this) : document.addEventListener("DOMContentLoaded", (MM => {
          QM(this)
        }), {
          once: !0
        })
      }
      bind(MM) {
        for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
        iM.forEach((rM => {
          var iM = this._keyBindmap[rM] || [];
          iM.includes(MM) || (iM.push(MM), this._keyBindmap[rM] = iM)
        })), this.state[MM] = !!this.state[MM], this.pressCount[MM] = this.pressCount[MM] || 0, this.releaseCount[MM] = this.releaseCount[MM] || 0
      }
      unbind(MM) {
        for (var rM in this._keyBindmap) {
          var iM = this._keyBindmap[rM],
            OM = iM.indexOf(MM);
          OM > -1 && iM.splice(OM, 1)
        }
      }
      getBindings() {
        var MM = {};
        for (var rM in this._keyBindmap) {
          this._keyBindmap[rM].forEach((iM => {
            MM[iM] = MM[iM] || [], MM[iM].push(rM)
          }))
        }
        return MM
      }
      bL() {
        nM(this.oB), nM(this.pressCount), nM(this.releaseCount)
      }
    }

    function nM(MM) {
      for (var rM in MM) MM[rM] = 0
    }

    function QM(MM) {
      window.addEventListener("keydown", dM.bind(null, MM, !0), !1), window.addEventListener("keyup", dM.bind(null, MM, !1), !1);
      var rM = {
        passive: !0
      };
      MM.element.addEventListener("touchstart", HM.bind(void 0, MM), {
        passive: !1
      }), MM.element.addEventListener("touchend", JM.bind(void 0, MM), rM), MM.element.addEventListener("mousedown", yM.bind(null, MM, !0), rM), window.document.addEventListener("mouseup", yM.bind(null, MM, !1), rM), MM.element.addEventListener("touchmove", lM.bind(null, MM), rM), MM.element.addEventListener("mousemove", lM.bind(null, MM), rM), window.PointerEvent, MM.element.addEventListener("wheel", EM.bind(null, MM), rM), MM.element.addEventListener("contextmenu", UM.bind(null, MM), !1), window.addEventListener("blur", eM.bind(null, MM), !1)
    }
    var zM = 0,
      LM = 0,
      mM = null;

    function HM(MM, rM) {
      rM.preventDefault(), hM(rM)
    }

    function hM(MM) {
      let rM = !1;
      for (let iM = 0; iM < MM.touches.length; ++iM)
        if (MM.touches[iM].identifier === mM) {
          rM = !0;
          break
        } if (!rM) {
        const rM = MM.changedTouches[0];
        zM = rM.clientX, LM = rM.clientY, mM = rM.identifier
      }
    }

    function JM(MM, rM) {
      for (var iM = rM.changedTouches, OM = 0; OM < iM.length; ++OM) iM[OM].identifier === mM && (mM = null)
    }

    function dM(MM, rM, iM) {
      if (!MM.ignoreEvent(iM)) try {
        bM(MM, iM), rM && iM.isTrusted && !iM.repeat && MM._keyStates[iM.code] && wM(MM, iM.code)
      } finally {
        tM(iM.code, rM, MM, iM)
      }
    }

    function yM(MM, rM, iM) {
      if (!MM.ignoreEvent(iM)) try {
        bM(MM, iM)
      } finally {
        ! function(MM, rM, iM) {
          if ("pointerId" in iM)
            if (rM) {
              if (null !== MM._touches.currID) return;
              MM._touches.currID = iM.pointerId
            } else {
              if (MM._touches.currID !== iM.pointerId) return;
              MM._touches.currID = null
            } var OM = "button" in iM ? iM.button + 1 : 1;
          tM("Mouse" + OM, rM, MM, iM)
        }(MM, rM, iM)
      }
    }

    function lM(MM, rM) {
      var iM = rM.movementX || rM.mozMovementX || 0,
        OM = rM.movementY || rM.mozMovementY || 0;
      if (rM.touches && 0 === (iM | OM)) {
        var SM = function(MM) {
          hM(MM);
          for (let rM = 0; rM < MM.changedTouches.length; ++rM)
            if (MM.changedTouches[rM].identifier == mM) {
              const iM = MM.changedTouches[rM],
                OM = [iM.clientX - zM, iM.clientY - LM];
              return zM = iM.clientX, LM = iM.clientY, OM
            } return console.error(`Did not find touch id ${mM}`), [0, 0]
        }(rM);
        iM = SM[0], OM = SM[1]
      }
      MM.oB.dx += iM, MM.oB.dy += OM
    }

    function EM(MM, rM) {
      bM(MM, rM);
      var iM = 1;
      switch (rM.deltaMode) {
        case 0:
          iM = 1;
          break;
        case 1:
          iM = 12;
          break;
        case 2:
          iM = MM.element.clientHeight || window.innerHeight
      }
      MM.oB.mrM += (rM.deltaX || 0) * iM, MM.oB.HrM += (rM.deltaY || 0) * iM, MM.oB.hrM += (rM.deltaZ || 0) * iM
    }

    function UM(MM, rM) {
      if (!MM.pB) return rM.preventDefault(), !1
    }
    var GM = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function CM(MM, rM) {
      return !!MM[GM[rM]] || ("AltRight" === rM || "ControlLeft" === rM) && "function" === typeof MM.getModifierState && !0 === MM.getModifierState("AltGraph")
    }

    function eM(MM, rM) {
      for (var iM in MM._modifiersHeldThroughBlur = {}, GM) MM._keyStates[iM] && (MM._modifiersHeldThroughBlur[iM] = !0);
      rM && rM.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (MM) {
          return !0
        }
      }() && (clearTimeout(MM._blurRelease), MM._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var rM in MM._modifiersHeldThroughBlur = {}, MM._keyStates) MM._keyStates[rM] && !/^Mouse\d/.test(rM) && wM(MM, rM)
      }), 0))
    }

    function bM(MM, rM) {
      var iM = MM._modifiersHeldThroughBlur;
      if (iM && rM.isTrusted && document.hasFocus())
        for (var OM in iM) delete iM[OM], MM._keyStates[OM] && OM !== rM.code && (CM(rM, OM) || wM(MM, OM))
    }

    function wM(MM, rM) {
      const iM = {
          code: rM,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        OM = SM;
      SM = iM;
      try {
        tM(rM, !1, MM, iM)
      } finally {
        SM = OM
      }
    }

    function tM(MM, rM, iM, OM) {
      var SM = iM._keyBindmap[MM];
      SM && (gM(iM._keyStates[MM], rM) && (iM._keyStates[MM] = rM, SM.forEach((MM => {
        (!iM.filterEvents || iM.filterEvents(OM, MM)) && function(MM, rM, iM, OM) {
          var SM = rM ? iM.pressCount : iM.releaseCount;
          SM[MM] = (SM[MM] || 0) + 1;
          var jM = iM._bindPressCount[MM] || 0;
          (jM += rM ? 1 : -1) < 0 && (jM = 0);
          iM._bindPressCount[MM] = jM;
          var aM = iM.state[MM];
          if (gM(aM, jM)) {
            iM.state[MM] = jM > 0;
            var PM = rM ? iM.down : iM.up;
            iM.disabled || PM.emit(MM, OM)
          }
        }(MM, rM, iM, OM)
      }))), "button" in OM || (iM.uB && !OM.defaultPrevented && OM.preventDefault(), iM.stopPropagation && OM.stopPropagation()))
    }

    function gM(MM, rM) {
      return MM ? !rM : rM
    }
  },
  37620: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => JM,
      d: () => dM
    });
    var OM = iM(44),
      SM = iM(1516),
      jM = iM(2084),
      aM = iM(37559),
      PM = iM(625),
      nM = iM(1116),
      QM = iM.n(nM),
      zM = iM(1303);
    const LM = [mM()];

    function mM() {
      return {
        source: null,
        direction: null,
        mN: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function HM(MM) {
      return LM.find((rM => null !== rM.source && rM.source === MM))
    }

    function hM(MM) {
      clearTimeout(MM.timeout), MM.source = null, MM.direction = null, MM.writtenAngle = null, MM.mN && (MM.mN.style.rotate = "")
    }
    const JM = (0, OM.memo)((function() {
      const [, MM] = (0, OM.useReducer)((MM => MM + 1), 0);
      return (0, SM.d)("damagedByOtherPlayer", (rM => {
        let {
          xj: iM,
          direction: OM
        } = rM;
        const SM = iM || "nonDirectional",
          jM = function(MM) {
            var rM;
            const iM = null !== (rM = HM(MM)) && void 0 !== rM ? rM : LM.find((MM => null === MM.source));
            if (iM) return iM;
            const OM = {
              source: null,
              direction: null,
              mN: null,
              timeout: void 0,
              writtenAngle: null
            };
            return LM.push(OM), OM
          }(SM);
        clearTimeout(jM.timeout), jM.source = SM, jM.direction = OM, jM.timeout = setTimeout((() => {
          hM(jM), MM()
        }), 800), MM()
      })), (0, jM.c)("kill", (rM => {
        let {
          killer: iM,
          victim: OM
        } = rM;
        const SM = iM.local && HM(OM.id);
        SM && (hM(SM), MM())
      })), (0, OM.useEffect)((() => {
        const MM = (0, aM.h)("turnDamageIndicators", dM);
        return () => {
          MM(), LM.forEach(hM)
        }
      }), []), (0, zM.jsx)("div", {
        className: "DirectionalDamage",
        children: LM.map(((MM, rM) => (0, zM.jsx)("div", {
          ref: rM => {
            MM.mN = rM
          },
          className: QM()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, PM.J)(MM.direction),
            DamageIndicatorIdle: null === MM.source
          })
        }, rM)))
      })
    }));

    function dM(MM) {
      for (const rM of LM) {
        if (null === rM.source || (0, PM.J)(rM.direction)) continue;
        const iM = rM.direction - MM;
        iM !== rM.writtenAngle && (rM.writtenAngle = iM, rM.mN.style.rotate = `${iM}rad`)
      }
    }
  },
  34822: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM,
      d: () => jM
    });
    let OM = !1;

    function SM() {
      return OM
    }

    function jM(MM) {
      return OM !== MM && (OM = MM, !0)
    }
  },
  34985: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM,
      c: () => SM
    });
    var OM = iM(19);

    function SM(MM, rM) {
      return MM && !rM
    }

    function jM() {
      return SM(OM.d.get("isTouchScreen"), OM.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  41747: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      startPadGameplay: () => GM
    });
    iM(41640);
    var OM = iM(41642),
      SM = iM(4129),
      jM = iM(19),
      aM = iM(40103),
      PM = iM(4069),
      nM = iM(40134),
      QM = iM(22),
      zM = iM(3063),
      LM = iM(39433),
      mM = iM(9451),
      HM = iM(41650);
    const hM = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var JM = iM(41665),
      dM = iM(9425),
      yM = iM(40140);
    const lM = MM => MM.padSneakToggled || !!jM.d.get("clientEscMenuOptions").crouchIsToggle && MM.crouchToggled,
      EM = () => {
        const MM = (() => {
          const MM = (0, mM.b)();
          let rM = hM;
          const iM = new HM.e;
          let OM = !1,
            SM = 0;
          const jM = () => {
            const iM = performance.now(),
              jM = 0 === SM ? 0 : iM - SM;
            if (SM = iM, !OM) return MM.discardPending(), null;
            const aM = (0, HM.l)(rM, jM),
              PM = MM.drainLookDelta(),
              nM = (0, LM.k)();
            return {
              PD: (aM.PD + PM.PD) * nM,
              nD: (aM.nD + PM.nD) * nM
            }
          };
          return {
            update: (MM, SM, aM, PM) => {
              MM.camera.hq !== jM && (MM.camera.hq = jM), OM = !0, rM = (0, HM.n)(iM, SM, aM, PM, performance.now())
            },
            release: () => {
              OM = !1, rM = hM, iM.reset()
            },
            uninstall: MM => {
              MM.camera.hq === jM && (MM.camera.hq = null)
            }
          }
        })();
        return {
          update: (rM, iM, OM) => {
            MM.update((0, zM.f)(), rM, iM, OM)
          },
          release: MM.release,
          uninstall: () => {
            const rM = (0, zM.f)();
            rM && MM.uninstall(rM)
          }
        }
      };
    var UM = iM(41656);
    iM(38670), iM(9339);
    iM(9353).d;
    const GM = () => {
      const MM = (0, UM.d)((() => {
          const MM = {
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
            bodies: () => (0, aM.e)(),
            look: EM(),
            move: (rM, iM) => {
              const OM = (0, zM.f)(),
                SM = OM.hU.iiM();
              if (MM.x = rM.x, MM.y = rM.y, MM.magnitude = rM.magnitude, MM.headingOffset = rM.headingOffset, MM.jumpHeld = rM.jumpHeld, rM.jumpPressed && (MM.jumpPressedSinceTick = !0), MM.running = rM.running, MM.sprintHeld = rM.sprintHeld, iM) {
                const rM = (0, JM.e)({
                  ...iM,
                  descending: OM.hU.nrM(OM.eD).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!OM.aU.canCrouch,
                  toggled: lM(SM)
                });
                MM.crouchHeld = rM.crouchHeld, SM.padSneakToggled = rM.toggled, SM.crouchToggled = !1, (0, dM.g)(rM.toggled)
              }
              SM.gamepad = MM
            },
            stopMoving: () => {
              var rM;
              Object.assign(MM, {
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
              const iM = null === (rM = (0, zM.f)()) || void 0 === rM ? void 0 : rM.hU.iiM();
              (null === iM || void 0 === iM ? void 0 : iM.gamepad) === MM && (iM.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: MM => {
              const rM = (0, zM.f)(),
                iM = null === rM || void 0 === rM ? void 0 : rM.hU.iiM();
              "touch" === MM ? ((0, dM.g)(!1), null !== iM && void 0 !== iM && iM.padSneakToggled && (iM.padSneakToggled = !1, iM.isTouchscreen && !iM.gamepad && rM.hU.grM(rM.eD).setCrouching(!!rM.aU.canCrouch && iM.touchCrouch))) : "gamepad" === MM && iM && (0, dM.g)(lM(iM))
            },
            hasPlayer: () => {
              var MM;
              return !(null === (MM = (0, zM.f)()) || void 0 === MM || !MM.eD)
            },
            isPlayerDead: () => {
              var MM;
              const rM = (0, zM.f)();
              return !1 === (null === (MM = rM.hU.KrM(rM.eD)) || void 0 === MM ? void 0 : MM.isAlive)
            },
            isReplayMode: () => {
              var MM, rM;
              return !(null === (MM = (0, zM.b)()) || void 0 === MM || null === (rM = MM.client) || void 0 === rM || !rM.isReplayMode())
            },
            isFreeCameraOn: () => {
              var MM, rM, iM;
              return !(null === (MM = (0, zM.b)()) || void 0 === MM || null === (rM = MM.client) || void 0 === rM || null === (iM = rM.freeCameraController) || void 0 === iM || !iM.isEnabled())
            },
            targetsBlock: () => !!(0, zM.f)().pMM,
            selectedSlotEmpty: () => {
              var MM;
              const rM = (0, zM.f)();
              return !(null !== (MM = rM.hU.RrM(rM.eD)) && void 0 !== MM && MM.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const MM = (0, zM.f)().aU;
              return !!MM.creative && !!MM.canPickBlocks
            },
            scrollHotbar: MM => {
              QM.i.Tz("ScrollInventorySlot", MM)
            },
            hasFullInventory: () => (0, nM.c)((0, zM.f)()),
            hasLobbyTab: () => (0, yM.d)((0, zM.f)().aU),
            contextActionInputs: () => {
              var MM, rM, iM, OM;
              const SM = (0, zM.f)();
              return {
                holdingGun: !(null === (MM = SM.hU.qrM(SM.eD)) || void 0 === MM || null === (rM = MM.QG) || void 0 === rM || !rM.isGun()),
                customButtons: null !== (iM = SM.aU.customButtons) && void 0 !== iM ? iM : null,
                touchscreenActionButton: null !== (OM = SM.aU.touchscreenActionButton) && void 0 !== OM ? OM : null
              }
            },
            pressTouchButton: MM => {
              (0, PM.sendColyMessage)(SM.Ij, MM)
            }
          }
        })()),
        rM = (0, OM.c)(),
        iM = null,
        jM = null;
      return () => {
        MM(), rM(), null === iM || void 0 === iM || iM(), null === jM || void 0 === jM || jM()
      }
    }
  },
  37544: (MM, rM, iM) => {
    iM.d(rM, {
      B: () => lM,
      b: () => jM,
      f: () => JM,
      i: () => dM,
      j: () => PM,
      m: () => mM,
      q: () => yM,
      u: () => LM,
      x: () => EM,
      y: () => hM
    });
    var OM = iM(19),
      SM = iM(22);
    const jM = "clientGameInventoryButtonsChanged",
      aM = new Map;

    function PM() {
      return [...aM.values()].sort(((MM, rM) => {
        var iM, OM;
        return (null !== (iM = MM.order) && void 0 !== iM ? iM : 0) - (null !== (OM = rM.order) && void 0 !== OM ? OM : 0)
      }))
    }
    let nM = null;

    function QM(MM) {
      nM = MM
    }
    let zM = !1;

    function LM(MM) {
      zM = !0;
      try {
        MM.onClick()
      } finally {
        zM = !1
      }
      MM.panel && "clientGame" === OM.d.get("openInGameMenuName") && QM(MM.id)
    }

    function mM() {
      return zM
    }

    function HM() {
      return PM().filter((MM => MM.panel && !MM.disabled))
    }

    function hM(MM) {
      const rM = HM(),
        iM = rM.findIndex((MM => MM.id === nM));
      return !(iM < 0 || rM.length < 2) && (LM(rM[(iM + MM + rM.length) % rM.length]), !0)
    }

    function JM() {
      return null !== nM && HM().length > 1
    }

    function dM() {
      QM(null)
    }

    function yM() {
      "inventory" !== OM.d.get("openInGameMenuName") && QM(null)
    }

    function lM() {
      const MM = nM;
      return QM(null), MM
    }

    function EM(MM) {
      return aM.set(MM.id, MM), SM.i.Tz(jM, PM(), !0), () => {
        aM.get(MM.id) === MM && (aM.delete(MM.id), SM.i.Tz(jM, PM()))
      }
    }
  },
  37542: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => HM,
      C: () => zM,
      e: () => PM,
      g: () => lM,
      k: () => dM,
      n: () => yM,
      p: () => mM,
      t: () => QM,
      w: () => JM
    });
    var OM = iM(19),
      SM = iM(22),
      jM = iM(1313),
      aM = iM(37544);
    const PM = "clientGameUiChanged";
    let nM = null;

    function QM() {
      return nM
    }

    function zM(MM, rM) {
      const iM = {
        content: MM,
        menu: rM
      };
      return nM = iM, SM.i.Tz(PM, nM, !0), () => {
        nM === iM && (nM = null, hM = !1, dM(), SM.i.Tz(PM, null))
      }
    }
    let LM = null;

    function mM() {
      return LM
    }

    function HM(MM) {
      return LM = MM, () => {
        LM === MM && (LM = null)
      }
    }
    let hM = !1;

    function JM() {
      const MM = OM.d.get("openInGameMenuName");
      "clientGame" !== MM && (hM = "inventory" === MM), (0, aM.m)() || (0, aM.i)(), (0, jM.z)(jM.e), OM.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dM() {
      EM(!1)
    }

    function yM() {
      EM(hM)
    }

    function lM() {
      hM && EM(!1)
    }

    function EM(MM) {
      "clientGame" === OM.d.get("openInGameMenuName") && OM.d.set({
        openInGameMenuName: MM ? "inventory" : null
      }), MM || (0, aM.i)(), hM = !1
    }
  },
  37440: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => nM
    });
    var OM = iM(313),
      SM = iM(19),
      jM = iM(34822),
      aM = iM(1717),
      PM = iM(2093);

    function nM(MM, rM) {
      var iM, nM, QM;
      if (!SM.d.get("isKeydownEnabled") || MM.repeat) return;
      const zM = MM.code;
      "Escape" === MM.key ? (0, aM.k)(MM) : null !== (iM = PM.v.OpenSettings) && void 0 !== iM && iM.includes(zM) ? (0, aM.B)(MM, OM.m.SETTINGS) : null !== (nM = PM.v.OpenCharacterCustomization) && void 0 !== nM && nM.includes(zM) ? (0, jM.b)() || (0, aM.B)(MM, OM.m.CUSTOMISATION, rM()) : null !== (QM = PM.v.ShowDebugOverlay) && void 0 !== QM && QM.includes(zM) && SM.d.set({
        showDebugOverlay: !SM.d.get("showDebugOverlay")
      })
    }
  },
  40024: (MM, rM, iM) => {
    function OM(MM, rM, iM, OM, SM) {
      var jM = {};
      return Object.keys(OM).forEach((function(MM) {
        jM[MM] = OM[MM]
      })), jM.enumerable = !!jM.enumerable, jM.configurable = !!jM.configurable, ("value" in jM || jM.initializer) && (jM.writable = !0), jM = iM.slice().reverse().reduce((function(iM, OM) {
        return OM(MM, rM, iM) || iM
      }), jM), SM && void 0 !== jM.initializer && (jM.value = jM.initializer ? jM.initializer.call(SM) : void 0, jM.initializer = void 0), void 0 === jM.initializer && (Object.defineProperty(MM, rM, jM), jM = null), jM
    }
    iM.d(rM, {
      e: () => OM
    })
  },
  40016: (MM, rM, iM) => {
    function OM(MM, rM, iM, OM) {
      iM && Object.defineProperty(MM, rM, {
        enumerable: iM.enumerable,
        configurable: iM.configurable,
        writable: iM.writable,
        value: iM.initializer ? iM.initializer.call(OM) : void 0
      })
    }
    iM.d(rM, {
      d: () => OM
    })
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);
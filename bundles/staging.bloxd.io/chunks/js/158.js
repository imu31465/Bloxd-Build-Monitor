export const id = 158;
export const ids = [158];
export const modules = {
  39134: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => NS,
      d: () => XS
    });
    var tS = gS(4216);
    let bS = null;

    function XS(SS) {
      return null !== bS && SS === bS
    }

    function xS() {
      this.Xp = !1, this.stopPropagation = !1, this.Ip = !1, this.disabled = !1
    }
    class NS {
      constructor(SS, HS) {
        this.version = "0.7.0";
        var gS = Object.assign({}, new xS, HS || {});
        this.element = SS || document, this.Xp = !!gS.Xp, this.stopPropagation = !!gS.stopPropagation, this.Ip = !!gS.Ip, this.disabled = !!gS.disabled, this.filterEvents = (SS, HS) => !0, this.ignoreEvent = SS => !1, this.down = new tS.EventEmitter, this.up = new tS.EventEmitter, this.state = {}, this.Qp = {
          dx: 0,
          dy: 0,
          TSS: 0,
          oSS: 0,
          lSS: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? uS(this) : document.addEventListener("DOMContentLoaded", (SS => {
          uS(this)
        }), {
          once: !0
        })
      }
      bind(SS) {
        for (var HS = arguments.length, gS = new Array(HS > 1 ? HS - 1 : 0), tS = 1; tS < HS; tS++) gS[tS - 1] = arguments[tS];
        gS.forEach((HS => {
          var gS = this._keyBindmap[HS] || [];
          gS.includes(SS) || (gS.push(SS), this._keyBindmap[HS] = gS)
        })), this.state[SS] = !!this.state[SS], this.pressCount[SS] = this.pressCount[SS] || 0, this.releaseCount[SS] = this.releaseCount[SS] || 0
      }
      unbind(SS) {
        for (var HS in this._keyBindmap) {
          var gS = this._keyBindmap[HS],
            tS = gS.indexOf(SS);
          tS > -1 && gS.splice(tS, 1)
        }
      }
      getBindings() {
        var SS = {};
        for (var HS in this._keyBindmap) {
          this._keyBindmap[HS].forEach((gS => {
            SS[gS] = SS[gS] || [], SS[gS].push(HS)
          }))
        }
        return SS
      }
      mf() {
        qS(this.Qp), qS(this.pressCount), qS(this.releaseCount)
      }
    }

    function qS(SS) {
      for (var HS in SS) SS[HS] = 0
    }

    function uS(SS) {
      window.addEventListener("keydown", GS.bind(null, SS, !0), !1), window.addEventListener("keyup", GS.bind(null, SS, !1), !1);
      var HS = {
        passive: !0
      };
      SS.element.addEventListener("touchstart", aS.bind(void 0, SS), {
        passive: !1
      }), SS.element.addEventListener("touchend", jS.bind(void 0, SS), HS), SS.element.addEventListener("mousedown", CS.bind(null, SS, !0), HS), window.document.addEventListener("mouseup", CS.bind(null, SS, !1), HS), SS.element.addEventListener("touchmove", nS.bind(null, SS), HS), SS.element.addEventListener("mousemove", nS.bind(null, SS), HS), window.PointerEvent, SS.element.addEventListener("wheel", PS.bind(null, SS), HS), SS.element.addEventListener("contextmenu", QS.bind(null, SS), !1), window.addEventListener("blur", hS.bind(null, SS), !1)
    }
    var IS = 0,
      fS = 0,
      kS = null;

    function aS(SS, HS) {
      HS.preventDefault(), KS(HS)
    }

    function KS(SS) {
      let HS = !1;
      for (let gS = 0; gS < SS.touches.length; ++gS)
        if (SS.touches[gS].identifier === kS) {
          HS = !0;
          break
        } if (!HS) {
        const HS = SS.changedTouches[0];
        IS = HS.clientX, fS = HS.clientY, kS = HS.identifier
      }
    }

    function jS(SS, HS) {
      for (var gS = HS.changedTouches, tS = 0; tS < gS.length; ++tS) gS[tS].identifier === kS && (kS = null)
    }

    function GS(SS, HS, gS) {
      if (!SS.ignoreEvent(gS)) try {
        ZS(SS, gS), HS && gS.isTrusted && !gS.repeat && SS._keyStates[gS.code] && JS(SS, gS.code)
      } finally {
        OS(gS.code, HS, SS, gS)
      }
    }

    function CS(SS, HS, gS) {
      if (!SS.ignoreEvent(gS)) try {
        ZS(SS, gS)
      } finally {
        ! function(SS, HS, gS) {
          if ("pointerId" in gS)
            if (HS) {
              if (null !== SS._touches.currID) return;
              SS._touches.currID = gS.pointerId
            } else {
              if (SS._touches.currID !== gS.pointerId) return;
              SS._touches.currID = null
            } var tS = "button" in gS ? gS.button + 1 : 1;
          OS("Mouse" + tS, HS, SS, gS)
        }(SS, HS, gS)
      }
    }

    function nS(SS, HS) {
      var gS = HS.movementX || HS.mozMovementX || 0,
        tS = HS.movementY || HS.mozMovementY || 0;
      if (HS.touches && 0 === (gS | tS)) {
        var bS = function(SS) {
          KS(SS);
          for (let HS = 0; HS < SS.changedTouches.length; ++HS)
            if (SS.changedTouches[HS].identifier == kS) {
              const gS = SS.changedTouches[HS],
                tS = [gS.clientX - IS, gS.clientY - fS];
              return IS = gS.clientX, fS = gS.clientY, tS
            } return console.error(`Did not find touch id ${kS}`), [0, 0]
        }(HS);
        gS = bS[0], tS = bS[1]
      }
      SS.Qp.dx += gS, SS.Qp.dy += tS
    }

    function PS(SS, HS) {
      ZS(SS, HS);
      var gS = 1;
      switch (HS.deltaMode) {
        case 0:
          gS = 1;
          break;
        case 1:
          gS = 12;
          break;
        case 2:
          gS = SS.element.clientHeight || window.innerHeight
      }
      SS.Qp.TSS += (HS.deltaX || 0) * gS, SS.Qp.oSS += (HS.deltaY || 0) * gS, SS.Qp.lSS += (HS.deltaZ || 0) * gS
    }

    function QS(SS, HS) {
      if (!SS.Ip) return HS.preventDefault(), !1
    }
    var DS = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function wS(SS, HS) {
      return !!SS[DS[HS]] || ("AltRight" === HS || "ControlLeft" === HS) && "function" === typeof SS.getModifierState && !0 === SS.getModifierState("AltGraph")
    }

    function hS(SS, HS) {
      for (var gS in SS._modifiersHeldThroughBlur = {}, DS) SS._keyStates[gS] && (SS._modifiersHeldThroughBlur[gS] = !0);
      HS && HS.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (SS) {
          return !0
        }
      }() && (clearTimeout(SS._blurRelease), SS._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var HS in SS._modifiersHeldThroughBlur = {}, SS._keyStates) SS._keyStates[HS] && !/^Mouse\d/.test(HS) && JS(SS, HS)
      }), 0))
    }

    function ZS(SS, HS) {
      var gS = SS._modifiersHeldThroughBlur;
      if (gS && HS.isTrusted && document.hasFocus())
        for (var tS in gS) delete gS[tS], SS._keyStates[tS] && tS !== HS.code && (wS(HS, tS) || JS(SS, tS))
    }

    function JS(SS, HS) {
      const gS = {
          code: HS,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        tS = bS;
      bS = gS;
      try {
        OS(HS, !1, SS, gS)
      } finally {
        bS = tS
      }
    }

    function OS(SS, HS, gS, tS) {
      var bS = gS._keyBindmap[SS];
      bS && (dS(gS._keyStates[SS], HS) && (gS._keyStates[SS] = HS, bS.forEach((SS => {
        (!gS.filterEvents || gS.filterEvents(tS, SS)) && function(SS, HS, gS, tS) {
          var bS = HS ? gS.pressCount : gS.releaseCount;
          bS[SS] = (bS[SS] || 0) + 1;
          var XS = gS._bindPressCount[SS] || 0;
          (XS += HS ? 1 : -1) < 0 && (XS = 0);
          gS._bindPressCount[SS] = XS;
          var xS = gS.state[SS];
          if (dS(xS, XS)) {
            gS.state[SS] = XS > 0;
            var NS = HS ? gS.down : gS.up;
            gS.disabled || NS.emit(SS, tS)
          }
        }(SS, HS, gS, tS)
      }))), "button" in tS || (gS.Xp && !tS.defaultPrevented && tS.preventDefault(), gS.stopPropagation && tS.stopPropagation()))
    }

    function dS(SS, HS) {
      return SS ? !HS : HS
    }
  },
  36704: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => jS,
      g: () => GS
    });
    var tS = gS(64),
      bS = gS(1522),
      XS = gS(2100),
      xS = gS(36650),
      NS = gS(680),
      qS = gS(1121),
      uS = gS.n(qS),
      IS = gS(1181);
    const fS = [kS()];

    function kS() {
      return {
        source: null,
        direction: null,
        fV: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function aS(SS) {
      return fS.find((HS => null !== HS.source && HS.source === SS))
    }

    function KS(SS) {
      clearTimeout(SS.timeout), SS.source = null, SS.direction = null, SS.writtenAngle = null, SS.fV && (SS.fV.style.rotate = "")
    }
    const jS = (0, tS.memo)((function() {
      const [, SS] = (0, tS.useReducer)((SS => SS + 1), 0);
      return (0, bS.g)("damagedByOtherPlayer", (HS => {
        let {
          lS: gS,
          direction: tS
        } = HS;
        const bS = gS || "nonDirectional",
          XS = function(SS) {
            var HS;
            const gS = null !== (HS = aS(SS)) && void 0 !== HS ? HS : fS.find((SS => null === SS.source));
            if (gS) return gS;
            const tS = {
              source: null,
              direction: null,
              fV: null,
              timeout: void 0,
              writtenAngle: null
            };
            return fS.push(tS), tS
          }(bS);
        clearTimeout(XS.timeout), XS.source = bS, XS.direction = tS, XS.timeout = setTimeout((() => {
          KS(XS), SS()
        }), 800), SS()
      })), (0, XS.c)("kill", (HS => {
        let {
          killer: gS,
          victim: tS
        } = HS;
        const bS = gS.local && aS(tS.id);
        bS && (KS(bS), SS())
      })), (0, tS.useEffect)((() => {
        const SS = (0, xS.f)("turnDamageIndicators", GS);
        return () => {
          SS(), fS.forEach(KS)
        }
      }), []), (0, IS.jsx)("div", {
        className: "DirectionalDamage",
        children: fS.map(((SS, HS) => (0, IS.jsx)("div", {
          ref: HS => {
            SS.fV = HS
          },
          className: uS()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, NS.K)(SS.direction),
            DamageIndicatorIdle: null === SS.source
          })
        }, HS)))
      })
    }));

    function GS(SS) {
      for (const HS of fS) {
        if (null === HS.source || (0, NS.K)(HS.direction)) continue;
        const gS = HS.direction - SS;
        gS !== HS.writtenAngle && (HS.writtenAngle = gS, HS.fV.style.rotate = `${gS}rad`)
      }
    }
  },
  36508: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => bS,
      f: () => XS
    });
    let tS = !1;

    function bS() {
      return tS
    }

    function XS(SS) {
      return tS !== SS && (tS = SS, !0)
    }
  },
  34185: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS,
      f: () => bS
    });
    var tS = gS(24);

    function bS(SS, HS) {
      return SS && !HS
    }

    function XS() {
      return bS(tS.b.get("isTouchScreen"), tS.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  40696: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      startPadGameplay: () => DS
    });
    gS(40573);
    var tS = gS(40581),
      bS = gS(3870),
      XS = gS(24),
      xS = gS(39095),
      NS = gS(3811),
      qS = gS(39116),
      uS = gS(31),
      IS = gS(2910),
      fS = gS(38470),
      kS = gS(9048),
      aS = gS(40589);
    const KS = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var jS = gS(40608),
      GS = gS(9025),
      CS = gS(39127);
    const nS = SS => SS.padSneakToggled || !!XS.b.get("clientEscMenuOptions").crouchIsToggle && SS.crouchToggled,
      PS = () => {
        const SS = (() => {
          const SS = (0, kS.d)();
          let HS = KS;
          const gS = new aS.b;
          let tS = !1,
            bS = 0;
          const XS = () => {
            const gS = performance.now(),
              XS = 0 === bS ? 0 : gS - bS;
            if (bS = gS, !tS) return SS.discardPending(), null;
            const xS = (0, aS.m)(HS, XS),
              NS = SS.drainLookDelta(),
              qS = (0, fS.k)();
            return {
              tL: (xS.tL + NS.tL) * qS,
              qL: (xS.qL + NS.qL) * qS
            }
          };
          return {
            update: (SS, bS, xS, NS) => {
              SS.camera.jF !== XS && (SS.camera.jF = XS), tS = !0, HS = (0, aS.p)(gS, bS, xS, NS, performance.now())
            },
            release: () => {
              tS = !1, HS = KS, gS.reset()
            },
            uninstall: SS => {
              SS.camera.jF === XS && (SS.camera.jF = null)
            }
          }
        })();
        return {
          update: (HS, gS, tS) => {
            SS.update((0, IS.e)(), HS, gS, tS)
          },
          release: SS.release,
          uninstall: () => {
            const HS = (0, IS.e)();
            HS && SS.uninstall(HS)
          }
        }
      };
    var QS = gS(40599);
    gS(37715), gS(8930);
    gS(8948).d;
    const DS = () => {
      const SS = (0, QS.b)((() => {
          const SS = {
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
            bodies: () => (0, xS.b)(),
            look: PS(),
            move: (HS, gS) => {
              const tS = (0, IS.e)(),
                bS = tS.FQ.zHS();
              if (SS.x = HS.x, SS.y = HS.y, SS.magnitude = HS.magnitude, SS.headingOffset = HS.headingOffset, SS.jumpHeld = HS.jumpHeld, HS.jumpPressed && (SS.jumpPressedSinceTick = !0), SS.running = HS.running, SS.sprintHeld = HS.sprintHeld, gS) {
                const HS = (0, jS.g)({
                  ...gS,
                  descending: tS.FQ.sSS(tS.HA).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!tS.RP.canCrouch,
                  toggled: nS(bS)
                });
                SS.crouchHeld = HS.crouchHeld, bS.padSneakToggled = HS.toggled, bS.crouchToggled = !1, (0, GS.f)(HS.toggled)
              }
              bS.gamepad = SS
            },
            stopMoving: () => {
              var HS;
              Object.assign(SS, {
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
              const gS = null === (HS = (0, IS.e)()) || void 0 === HS ? void 0 : HS.FQ.zHS();
              (null === gS || void 0 === gS ? void 0 : gS.gamepad) === SS && (gS.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: SS => {
              const HS = (0, IS.e)(),
                gS = null === HS || void 0 === HS ? void 0 : HS.FQ.zHS();
              "touch" === SS ? ((0, GS.f)(!1), null !== gS && void 0 !== gS && gS.padSneakToggled && (gS.padSneakToggled = !1, gS.isTouchscreen && !gS.gamepad && HS.FQ.uHS(HS.HA).setCrouching(!!HS.RP.canCrouch && gS.touchCrouch))) : "gamepad" === SS && gS && (0, GS.f)(nS(gS))
            },
            hasPlayer: () => {
              var SS;
              return !(null === (SS = (0, IS.e)()) || void 0 === SS || !SS.HA)
            },
            isPlayerDead: () => {
              var SS;
              const HS = (0, IS.e)();
              return !1 === (null === (SS = HS.FQ.EHS(HS.HA)) || void 0 === SS ? void 0 : SS.isAlive)
            },
            isReplayMode: () => {
              var SS, HS;
              return !(null === (SS = (0, IS.b)()) || void 0 === SS || null === (HS = SS.client) || void 0 === HS || !HS.isReplayMode())
            },
            isFreeCameraOn: () => {
              var SS, HS, gS;
              return !(null === (SS = (0, IS.b)()) || void 0 === SS || null === (HS = SS.client) || void 0 === HS || null === (gS = HS.freeCameraController) || void 0 === gS || !gS.isEnabled())
            },
            targetsBlock: () => !!(0, IS.e)().ISS,
            selectedSlotEmpty: () => {
              var SS;
              const HS = (0, IS.e)();
              return !(null !== (SS = HS.FQ.fHS(HS.HA)) && void 0 !== SS && SS.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const SS = (0, IS.e)().RP;
              return !!SS.creative && !!SS.canPickBlocks
            },
            scrollHotbar: SS => {
              uS.k.cj("ScrollInventorySlot", SS)
            },
            hasFullInventory: () => (0, qS.e)((0, IS.e)()),
            hasLobbyTab: () => (0, CS.e)((0, IS.e)().RP),
            contextActionInputs: () => {
              var SS, HS, gS, tS;
              const bS = (0, IS.e)();
              return {
                holdingGun: !(null === (SS = bS.FQ.YHS(bS.HA)) || void 0 === SS || null === (HS = SS.RD) || void 0 === HS || !HS.isGun()),
                customButtons: null !== (gS = bS.RP.customButtons) && void 0 !== gS ? gS : null,
                touchscreenActionButton: null !== (tS = bS.RP.touchscreenActionButton) && void 0 !== tS ? tS : null
              }
            },
            pressTouchButton: SS => {
              (0, NS.sendColyMessage)(bS.Qj, SS)
            }
          }
        })()),
        HS = (0, tS.d)(),
        gS = null,
        XS = null;
      return () => {
        SS(), HS(), null === gS || void 0 === gS || gS(), null === XS || void 0 === XS || XS()
      }
    }
  },
  36632: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS,
      h: () => jS,
      l: () => GS,
      m: () => NS,
      p: () => kS,
      s: () => CS,
      t: () => fS,
      u: () => PS,
      v: () => KS,
      w: () => nS
    });
    var tS = gS(24),
      bS = gS(31);
    const XS = "clientGameInventoryButtonsChanged",
      xS = new Map;

    function NS() {
      return [...xS.values()].sort(((SS, HS) => {
        var gS, tS;
        return (null !== (gS = SS.order) && void 0 !== gS ? gS : 0) - (null !== (tS = HS.order) && void 0 !== tS ? tS : 0)
      }))
    }
    let qS = null;

    function uS(SS) {
      qS = SS
    }
    let IS = !1;

    function fS(SS) {
      IS = !0;
      try {
        SS.onClick()
      } finally {
        IS = !1
      }
      SS.panel && "clientGame" === tS.b.get("openInGameMenuName") && uS(SS.id)
    }

    function kS() {
      return IS
    }

    function aS() {
      return NS().filter((SS => SS.panel && !SS.disabled))
    }

    function KS(SS) {
      const HS = aS(),
        gS = HS.findIndex((SS => SS.id === qS));
      return !(gS < 0 || HS.length < 2) && (fS(HS[(gS + SS + HS.length) % HS.length]), !0)
    }

    function jS() {
      return null !== qS && aS().length > 1
    }

    function GS() {
      uS(null)
    }

    function CS() {
      "inventory" !== tS.b.get("openInGameMenuName") && uS(null)
    }

    function nS() {
      const SS = qS;
      return uS(null), SS
    }

    function PS(SS) {
      return xS.set(SS.id, SS), bS.k.cj(XS, NS(), !0), () => {
        xS.get(SS.id) === SS && (xS.delete(SS.id), bS.k.cj(XS, NS()))
      }
    }
  },
  36624: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => NS,
      h: () => GS,
      k: () => CS,
      o: () => kS,
      s: () => uS,
      u: () => jS,
      w: () => aS,
      y: () => IS
    });
    var tS = gS(24),
      bS = gS(31),
      XS = gS(1366),
      xS = gS(36632);
    const NS = "clientGameUiChanged";
    let qS = null;

    function uS() {
      return qS
    }

    function IS(SS, HS) {
      const gS = {
        content: SS,
        menu: HS
      };
      return qS = gS, bS.k.cj(NS, qS, !0), () => {
        qS === gS && (qS = null, KS = !1, GS(), bS.k.cj(NS, null))
      }
    }
    let fS = null;

    function kS() {
      return fS
    }

    function aS(SS) {
      return fS = SS, () => {
        fS === SS && (fS = null)
      }
    }
    let KS = !1;

    function jS() {
      const SS = tS.b.get("openInGameMenuName");
      "clientGame" !== SS && (KS = "inventory" === SS), (0, xS.p)() || (0, xS.l)(), (0, XS.u)(XS.d), tS.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function GS() {
      nS(!1)
    }

    function CS() {
      nS(KS)
    }

    function nS(SS) {
      "clientGame" === tS.b.get("openInGameMenuName") && tS.b.set({
        openInGameMenuName: SS ? "inventory" : null
      }), SS || (0, xS.l)(), KS = !1
    }
  },
  36505: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => qS
    });
    var tS = gS(369),
      bS = gS(24),
      XS = gS(36508),
      xS = gS(1733),
      NS = gS(2111);

    function qS(SS, HS) {
      var gS, qS, uS;
      if (!bS.b.get("isKeydownEnabled") || SS.repeat) return;
      const IS = SS.code;
      "Escape" === SS.key ? (0, xS.i)(SS) : null !== (gS = NS.u.OpenSettings) && void 0 !== gS && gS.includes(IS) ? (0, xS.r)(SS, tS.q.SETTINGS) : null !== (qS = NS.u.OpenCharacterCustomization) && void 0 !== qS && qS.includes(IS) ? (0, XS.c)() || (0, xS.r)(SS, tS.q.CUSTOMISATION, HS()) : null !== (uS = NS.u.ShowDebugOverlay) && void 0 !== uS && uS.includes(IS) && bS.b.set({
        showDebugOverlay: !bS.b.get("showDebugOverlay")
      })
    }
  },
  39083: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => qS
    });
    var tS = gS(9093),
      bS = gS(36503),
      XS = gS(39087);
    const xS = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      NS = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function qS(SS, HS) {
      if (SS instanceof bS.e) return {
        at: xS[HS],
        code: 0
      };
      const gS = (0, tS.i)(SS),
        qS = "number" === typeof gS ? gS : 0;
      return null !== (0, XS.k)(qS).name ? {
        at: "refused",
        code: qS
      } : {
        at: NS[HS],
        code: qS
      }
    }
  },
  9093: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS,
      i: () => xS,
      j: () => NS,
      l: () => uS,
      m: () => qS
    });
    var tS = gS(198),
      bS = gS(4749);

    function XS(SS) {
      return xS(SS) === tS.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function xS(SS) {
      return "object" === typeof SS && null !== SS ? SS.code : void 0
    }

    function NS(SS) {
      var HS;
      return null !== (HS = Object.keys(bS.e).find((HS => bS.e[HS] === SS))) && void 0 !== HS ? HS : null
    }

    function qS(SS) {
      return "notWhitelisted" === SS ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const uS = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  36479: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => kS,
      f: () => IS,
      h: () => aS,
      i: () => fS
    });
    var tS = gS(387),
      bS = gS(710),
      XS = gS(717),
      xS = gS(45);
    const NS = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      qS = "playSessionGameNameWithVariation",
      uS = "wasMatchmakePlayer";

    function IS() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS.h;
      (0, XS.h)(SS, NS)
    }

    function fS() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS.h).setItem(uS, !0)
    }

    function kS() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS.h;
      return (0, XS.e)(SS, NS)
    }

    function aS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xS.h;
      const gS = (0, XS.e)(HS, NS),
        IS = function(SS) {
          const HS = SS.getItem(qS);
          return "string" !== typeof HS ? null : HS
        }(HS),
        fS = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS.h).getItem(uS)
        }(HS);
      let kS;
      return kS = null !== gS && null !== IS && (0, XS.g)(HS, NS) && function(SS, HS, gS) {
          const bS = (0, tS.Kb)(SS),
            XS = (0, tS.Kb)(HS),
            xS = (0, tS.Fb)(SS),
            NS = (0, tS.Fb)(HS);
          return !(bS !== XS || !gS) || bS === XS && xS === NS
        }(IS, SS, fS) ? gS : (0, bS.e)(), (0, XS.l)(HS, NS, kS), HS.setItem(qS, SS),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS.h).removeItem(uS)
        }(HS), kS
    }
  },
  36471: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => DS,
      f: () => wS
    });
    var tS = gS(1087),
      bS = gS(215),
      XS = gS(378),
      xS = gS(687),
      NS = gS(387),
      qS = gS(1089),
      uS = gS(699),
      IS = gS(727),
      fS = gS(4656),
      kS = gS(104),
      aS = gS(138),
      KS = gS(1844),
      jS = gS(118),
      GS = gS(36479),
      CS = gS(45),
      nS = gS(713),
      PS = gS(362),
      QS = gS(36485);

    function DS() {
      var SS, HS;
      return [...null !== (SS = navigator.languages) && void 0 !== SS ? SS : [null !== (HS = navigator.language) && void 0 !== HS ? HS : "none"], "en-gb"]
    }

    function wS(SS, HS, gS, wS, hS) {
      const ZS = (0, tS.m)(HS) ? (0, tS.t)(HS) : null,
        JS = SS.isLoggedIn() && void 0 !== (0, bS.c)(XS.m, aS.r) ? (0, PS.z)() : null,
        OS = {
          cookies: (0, KS.getAllCookiesForGameNameWithVariation)(HS),
          isMobile: (0, kS.isMobile)(),
          isUsingCustomGameTexturePack: null !== ZS && hS(ZS),
          generalCookies: {
            joinDiscord: !!CS.g.getItem("DiscordPressed"),
            newGo: fS.b,
            ...SS.getMetricsCookies(),
            trafficCode: wS,
            compliance: kS.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, kS.getBrowserName)(),
            version: (0, kS.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, kS.getPlatformType)(),
            deviceType: (0, jS.c)()
          },
          isLoggedIn: SS.isLoggedIn(),
          lobbyName: gS,
          languages: DS(),
          version: xS.b,
          siteUsed: aS.r,
          subsiteUsed: aS.A,
          playSessionId: (0, GS.h)(HS),
          visitSessionId: (0, nS.g)(),
          clientReason: uS.p.reason,
          budgetBasis: (0, QS.i)(),
          ...null !== IS.p && {
            diagClaim: IS.p.claimId
          },
          ...null !== JS && {
            webGpuLoss: JS
          }
        };
      return null !== ZS && (0, NS.yc)(ZS) ? (OS.lobbyName = (0, tS.k)(ZS, (0, tS.p)(HS), gS), {
        roomName: `classic_${qS.c}`,
        joinOptions: OS
      }) : {
        roomName: HS,
        joinOptions: OS
      }
    }
  },
  39087: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => bS,
      d: () => XS,
      g: () => NS,
      k: () => IS,
      l: () => qS,
      m: () => xS
    });
    var tS = gS(198);
    const bS = 3e3,
      XS = 15e3;

    function xS(SS) {
      const HS = SS.endsWith(tS.g);
      return {
        text: (HS ? SS.slice(0, -tS.g.length) : SS) || null,
        dropsCache: HS
      }
    }
    const NS = "Either your internet isn't working or this is a bug.";

    function qS(SS, HS) {
      const gS = IS(SS);
      return null !== gS.name && "" === tS.c[gS.name].text && null !== HS ? HS : gS.reason
    }
    const uS = "You were removed from the game.";

    function IS(SS) {
      var HS;
      let gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const bS = null !== (HS = Object.keys(tS.c).find((HS => tS.c[HS].code === SS))) && void 0 !== HS ? HS : null;
      if (null === bS) return {
        code: SS,
        name: bS,
        reason: null !== gS && void 0 !== gS ? gS : `${NS}\nCode: ${SS}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: XS,
        canReconnect: xS = !1
      } = tS.c[bS], qS = SS === tS.c.outdatedVersion.code || SS === tS.c.loadRecaptchaError.code;
      return {
        code: SS,
        name: bS,
        reason: "" !== XS ? XS : null !== gS && void 0 !== gS ? gS : SS === tS.c.gameOrPluginKick.code ? uS : `Code: ${SS}`,
        canReconnect: xS,
        automaticallyReconnect: SS === tS.c.customGameUpdated.code || SS === tS.c.duplicateLobbyNameError.code,
        requiresRefresh: qS
      }
    }
  },
  36887: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => bS,
      d: () => XS,
      h: () => kS,
      j: () => NS,
      n: () => qS,
      q: () => uS,
      r: () => fS,
      v: () => IS,
      z: () => xS
    });
    var tS = gS(1327);
    let bS = function(SS) {
        return SS[SS.Join = 0] = "Join", SS[SS.Leave = 1] = "Leave", SS[SS.Push = 2] = "Push", SS[SS.Cursor = 3] = "Cursor", SS[SS.Submit = 4] = "Submit", SS[SS.ReloadAsVariation = 5] = "ReloadAsVariation", SS[SS.CreateFile = 6] = "CreateFile", SS[SS.RenameFile = 7] = "RenameFile", SS[SS.DeleteFile = 8] = "DeleteFile", SS[SS.SetEngine = 9] = "SetEngine", SS[SS.RenameFolder = 10] = "RenameFolder", SS
      }({}),
      XS = function(SS) {
        return SS[SS.Joined = 0] = "Joined", SS[SS.Updates = 1] = "Updates", SS[SS.Presence = 2] = "Presence", SS[SS.RemoteCursor = 3] = "RemoteCursor", SS[SS.ForceClose = 4] = "ForceClose", SS[SS.LobbyFilesChanged = 5] = "LobbyFilesChanged", SS[SS.EngineSettings = 6] = "EngineSettings", SS
      }({});

    function xS(SS) {
      return "lobby" === SS.kind ? `lobby:${SS.path}` : `codeBlock:${SS.pos[0]},${SS.pos[1]},${SS.pos[2]}`
    }

    function NS(SS) {
      if ("lobby" === SS) return {
        kind: "lobby",
        path: tS.i
      };
      if (SS.startsWith("lobby:")) {
        const HS = SS.slice(6);
        return fS(HS) ? {
          kind: "lobby",
          path: HS
        } : null
      }
      const HS = SS.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return HS ? {
        kind: "codeBlock",
        pos: [parseInt(HS[1]), parseInt(HS[2]), parseInt(HS[3])]
      } : null
    }

    function qS(SS) {
      return SS.endsWith(".d.ts")
    }

    function uS(SS) {
      return SS.endsWith(".ts") && !qS(SS)
    }
    const IS = 64;

    function fS(SS) {
      if (!SS || SS !== SS.trim()) return !1;
      if (SS.length > IS) return !1;
      if (SS.startsWith("/") || SS.includes("\\") || SS.includes("\0")) return !1;
      if (!qS(SS) && !uS(SS) && ! function(SS) {
          return SS.endsWith(".js") && !SS.endsWith(".min.js") && !SS.endsWith(".bundle.js")
        }(SS)) return !1;
      const HS = SS.split("/");
      for (const gS of HS)
        if ("" === gS || "." === gS || ".." === gS) return !1;
      return !0
    }
    const kS = 14e3
  },
  39009: (SS, HS, gS) => {
    function tS(SS, HS, gS, tS, bS) {
      var XS = {};
      return Object.keys(tS).forEach((function(SS) {
        XS[SS] = tS[SS]
      })), XS.enumerable = !!XS.enumerable, XS.configurable = !!XS.configurable, ("value" in XS || XS.initializer) && (XS.writable = !0), XS = gS.slice().reverse().reduce((function(gS, tS) {
        return tS(SS, HS, gS) || gS
      }), XS), bS && void 0 !== XS.initializer && (XS.value = XS.initializer ? XS.initializer.call(bS) : void 0, XS.initializer = void 0), void 0 === XS.initializer && (Object.defineProperty(SS, HS, XS), XS = null), XS
    }
    gS.d(HS, {
      c: () => tS
    })
  },
  39006: (SS, HS, gS) => {
    function tS(SS, HS, gS, tS) {
      gS && Object.defineProperty(SS, HS, {
        enumerable: gS.enumerable,
        configurable: gS.configurable,
        writable: gS.writable,
        value: gS.initializer ? gS.initializer.call(tS) : void 0
      })
    }
    gS.d(HS, {
      b: () => tS
    })
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);
export const id = 158;
export const ids = [158];
export const modules = {
  38946: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => fC,
      d: () => bC
    });
    var QC = ZC(4036);
    let wC = null;

    function bC(CC) {
      return null !== wC && CC === wC
    }

    function nC() {
      this.rD = !1, this.stopPropagation = !1, this.jD = !1, this.disabled = !1
    }
    class fC {
      constructor(CC, zC) {
        this.version = "0.7.0";
        var ZC = Object.assign({}, new nC, zC || {});
        this.element = CC || document, this.rD = !!ZC.rD, this.stopPropagation = !!ZC.stopPropagation, this.jD = !!ZC.jD, this.disabled = !!ZC.disabled, this.filterEvents = (CC, zC) => !0, this.ignoreEvent = CC => !1, this.down = new QC.EventEmitter, this.up = new QC.EventEmitter, this.state = {}, this.Fy = {
          dx: 0,
          dy: 0,
          OCC: 0,
          kCC: 0,
          VCC: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? qC(this) : document.addEventListener("DOMContentLoaded", (CC => {
          qC(this)
        }), {
          once: !0
        })
      }
      bind(CC) {
        for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), QC = 1; QC < zC; QC++) ZC[QC - 1] = arguments[QC];
        ZC.forEach((zC => {
          var ZC = this._keyBindmap[zC] || [];
          ZC.includes(CC) || (ZC.push(CC), this._keyBindmap[zC] = ZC)
        })), this.state[CC] = !!this.state[CC], this.pressCount[CC] = this.pressCount[CC] || 0, this.releaseCount[CC] = this.releaseCount[CC] || 0
      }
      unbind(CC) {
        for (var zC in this._keyBindmap) {
          var ZC = this._keyBindmap[zC],
            QC = ZC.indexOf(CC);
          QC > -1 && ZC.splice(QC, 1)
        }
      }
      getBindings() {
        var CC = {};
        for (var zC in this._keyBindmap) {
          this._keyBindmap[zC].forEach((ZC => {
            CC[ZC] = CC[ZC] || [], CC[ZC].push(zC)
          }))
        }
        return CC
      }
      ZN() {
        oC(this.Fy), oC(this.pressCount), oC(this.releaseCount)
      }
    }

    function oC(CC) {
      for (var zC in CC) CC[zC] = 0
    }

    function qC(CC) {
      window.addEventListener("keydown", pC.bind(null, CC, !0), !1), window.addEventListener("keyup", pC.bind(null, CC, !1), !1);
      var zC = {
        passive: !0
      };
      CC.element.addEventListener("touchstart", MC.bind(void 0, CC), {
        passive: !1
      }), CC.element.addEventListener("touchend", SC.bind(void 0, CC), zC), CC.element.addEventListener("mousedown", PC.bind(null, CC, !0), zC), window.document.addEventListener("mouseup", PC.bind(null, CC, !1), zC), CC.element.addEventListener("touchmove", GC.bind(null, CC), zC), CC.element.addEventListener("mousemove", GC.bind(null, CC), zC), window.PointerEvent, CC.element.addEventListener("wheel", RC.bind(null, CC), zC), CC.element.addEventListener("contextmenu", AC.bind(null, CC), !1), window.addEventListener("blur", IC.bind(null, CC), !1)
    }
    var FC = 0,
      WC = 0,
      NC = null;

    function MC(CC, zC) {
      zC.preventDefault(), gC(zC)
    }

    function gC(CC) {
      let zC = !1;
      for (let ZC = 0; ZC < CC.touches.length; ++ZC)
        if (CC.touches[ZC].identifier === NC) {
          zC = !0;
          break
        } if (!zC) {
        const zC = CC.changedTouches[0];
        FC = zC.clientX, WC = zC.clientY, NC = zC.identifier
      }
    }

    function SC(CC, zC) {
      for (var ZC = zC.changedTouches, QC = 0; QC < ZC.length; ++QC) ZC[QC].identifier === NC && (NC = null)
    }

    function pC(CC, zC, ZC) {
      if (!CC.ignoreEvent(ZC)) try {
        iC(CC, ZC), zC && ZC.isTrusted && !ZC.repeat && CC._keyStates[ZC.code] && vC(CC, ZC.code)
      } finally {
        eC(ZC.code, zC, CC, ZC)
      }
    }

    function PC(CC, zC, ZC) {
      if (!CC.ignoreEvent(ZC)) try {
        iC(CC, ZC)
      } finally {
        ! function(CC, zC, ZC) {
          if ("pointerId" in ZC)
            if (zC) {
              if (null !== CC._touches.currID) return;
              CC._touches.currID = ZC.pointerId
            } else {
              if (CC._touches.currID !== ZC.pointerId) return;
              CC._touches.currID = null
            } var QC = "button" in ZC ? ZC.button + 1 : 1;
          eC("Mouse" + QC, zC, CC, ZC)
        }(CC, zC, ZC)
      }
    }

    function GC(CC, zC) {
      var ZC = zC.movementX || zC.mozMovementX || 0,
        QC = zC.movementY || zC.mozMovementY || 0;
      if (zC.touches && 0 === (ZC | QC)) {
        var wC = function(CC) {
          gC(CC);
          for (let zC = 0; zC < CC.changedTouches.length; ++zC)
            if (CC.changedTouches[zC].identifier == NC) {
              const ZC = CC.changedTouches[zC],
                QC = [ZC.clientX - FC, ZC.clientY - WC];
              return FC = ZC.clientX, WC = ZC.clientY, QC
            } return console.error(`Did not find touch id ${NC}`), [0, 0]
        }(zC);
        ZC = wC[0], QC = wC[1]
      }
      CC.Fy.dx += ZC, CC.Fy.dy += QC
    }

    function RC(CC, zC) {
      iC(CC, zC);
      var ZC = 1;
      switch (zC.deltaMode) {
        case 0:
          ZC = 1;
          break;
        case 1:
          ZC = 12;
          break;
        case 2:
          ZC = CC.element.clientHeight || window.innerHeight
      }
      CC.Fy.OCC += (zC.deltaX || 0) * ZC, CC.Fy.kCC += (zC.deltaY || 0) * ZC, CC.Fy.VCC += (zC.deltaZ || 0) * ZC
    }

    function AC(CC, zC) {
      if (!CC.jD) return zC.preventDefault(), !1
    }
    var xC = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function JC(CC, zC) {
      return !!CC[xC[zC]] || ("AltRight" === zC || "ControlLeft" === zC) && "function" === typeof CC.getModifierState && !0 === CC.getModifierState("AltGraph")
    }

    function IC(CC, zC) {
      for (var ZC in CC._modifiersHeldThroughBlur = {}, xC) CC._keyStates[ZC] && (CC._modifiersHeldThroughBlur[ZC] = !0);
      zC && zC.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (CC) {
          return !0
        }
      }() && (clearTimeout(CC._blurRelease), CC._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var zC in CC._modifiersHeldThroughBlur = {}, CC._keyStates) CC._keyStates[zC] && !/^Mouse\d/.test(zC) && vC(CC, zC)
      }), 0))
    }

    function iC(CC, zC) {
      var ZC = CC._modifiersHeldThroughBlur;
      if (ZC && zC.isTrusted && document.hasFocus())
        for (var QC in ZC) delete ZC[QC], CC._keyStates[QC] && QC !== zC.code && (JC(zC, QC) || vC(CC, QC))
    }

    function vC(CC, zC) {
      const ZC = {
          code: zC,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        QC = wC;
      wC = ZC;
      try {
        eC(zC, !1, CC, ZC)
      } finally {
        wC = QC
      }
    }

    function eC(CC, zC, ZC, QC) {
      var wC = ZC._keyBindmap[CC];
      wC && (hC(ZC._keyStates[CC], zC) && (ZC._keyStates[CC] = zC, wC.forEach((CC => {
        (!ZC.filterEvents || ZC.filterEvents(QC, CC)) && function(CC, zC, ZC, QC) {
          var wC = zC ? ZC.pressCount : ZC.releaseCount;
          wC[CC] = (wC[CC] || 0) + 1;
          var bC = ZC._bindPressCount[CC] || 0;
          (bC += zC ? 1 : -1) < 0 && (bC = 0);
          ZC._bindPressCount[CC] = bC;
          var nC = ZC.state[CC];
          if (hC(nC, bC)) {
            ZC.state[CC] = bC > 0;
            var fC = zC ? ZC.down : ZC.up;
            ZC.disabled || fC.emit(CC, QC)
          }
        }(CC, zC, ZC, QC)
      }))), "button" in QC || (ZC.rD && !QC.defaultPrevented && QC.preventDefault(), ZC.stopPropagation && QC.stopPropagation()))
    }

    function hC(CC, zC) {
      return CC ? !zC : zC
    }
  },
  36552: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => SC,
      e: () => pC
    });
    var QC = ZC(48),
      wC = ZC(1383),
      bC = ZC(1877),
      nC = ZC(36508),
      fC = ZC(600),
      oC = ZC(1002),
      qC = ZC.n(oC),
      FC = ZC(1056);
    const WC = [NC()];

    function NC() {
      return {
        source: null,
        direction: null,
        FX: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function MC(CC) {
      return WC.find((zC => null !== zC.source && zC.source === CC))
    }

    function gC(CC) {
      clearTimeout(CC.timeout), CC.source = null, CC.direction = null, CC.writtenAngle = null, CC.FX && (CC.FX.style.rotate = "")
    }
    const SC = (0, QC.memo)((function() {
      const [, CC] = (0, QC.useReducer)((CC => CC + 1), 0);
      return (0, wC.c)("damagedByOtherPlayer", (zC => {
        let {
          UC: ZC,
          direction: QC
        } = zC;
        const wC = ZC || "nonDirectional",
          bC = function(CC) {
            var zC;
            const ZC = null !== (zC = MC(CC)) && void 0 !== zC ? zC : WC.find((CC => null === CC.source));
            if (ZC) return ZC;
            const QC = {
              source: null,
              direction: null,
              FX: null,
              timeout: void 0,
              writtenAngle: null
            };
            return WC.push(QC), QC
          }(wC);
        clearTimeout(bC.timeout), bC.source = wC, bC.direction = QC, bC.timeout = setTimeout((() => {
          gC(bC), CC()
        }), 800), CC()
      })), (0, bC.b)("kill", (zC => {
        let {
          killer: ZC,
          victim: QC
        } = zC;
        const wC = ZC.local && MC(QC.id);
        wC && (gC(wC), CC())
      })), (0, QC.useEffect)((() => {
        const CC = (0, nC.g)("turnDamageIndicators", pC);
        return () => {
          CC(), WC.forEach(gC)
        }
      }), []), (0, FC.jsx)("div", {
        className: "DirectionalDamage",
        children: WC.map(((CC, zC) => (0, FC.jsx)("div", {
          ref: zC => {
            CC.FX = zC
          },
          className: qC()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, fC.H)(CC.direction),
            DamageIndicatorIdle: null === CC.source
          })
        }, zC)))
      })
    }));

    function pC(CC) {
      for (const zC of WC) {
        if (null === zC.source || (0, fC.H)(zC.direction)) continue;
        const ZC = zC.direction - CC;
        ZC !== zC.writtenAngle && (zC.writtenAngle = ZC, zC.FX.style.rotate = `${ZC}rad`)
      }
    }
  },
  36375: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC,
      f: () => bC
    });
    let QC = !1;

    function wC() {
      return QC
    }

    function bC(CC) {
      return QC !== CC && (QC = CC, !0)
    }
  },
  34107: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC,
      h: () => wC
    });
    var QC = ZC(20);

    function wC(CC, zC) {
      return CC && !zC
    }

    function bC() {
      return wC(QC.b.get("isTouchScreen"), QC.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  40504: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      startPadGameplay: () => xC
    });
    ZC(40381);
    var QC = ZC(40389),
      wC = ZC(3677),
      bC = ZC(20),
      nC = ZC(38913),
      fC = ZC(3611),
      oC = ZC(38937),
      qC = ZC(28),
      FC = ZC(2753),
      WC = ZC(38268),
      NC = ZC(8850),
      MC = ZC(40392);
    const gC = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var SC = ZC(40410),
      pC = ZC(8831),
      PC = ZC(38944);
    const GC = CC => CC.padSneakToggled || !!bC.b.get("clientEscMenuOptions").crouchIsToggle && CC.crouchToggled,
      RC = () => {
        const CC = (() => {
          const CC = (0, NC.b)();
          let zC = gC;
          const ZC = new MC.c;
          let QC = !1,
            wC = 0;
          const bC = () => {
            const ZC = performance.now(),
              bC = 0 === wC ? 0 : ZC - wC;
            if (wC = ZC, !QC) return CC.discardPending(), null;
            const nC = (0, MC.n)(zC, bC),
              fC = CC.drainLookDelta(),
              oC = (0, WC.f)();
            return {
              VY: (nC.VY + fC.VY) * oC,
              Zm: (nC.Zm + fC.Zm) * oC
            }
          };
          return {
            update: (CC, wC, nC, fC) => {
              CC.camera.kU !== bC && (CC.camera.kU = bC), QC = !0, zC = (0, MC.p)(ZC, wC, nC, fC, performance.now())
            },
            release: () => {
              QC = !1, zC = gC, ZC.reset()
            },
            uninstall: CC => {
              CC.camera.kU === bC && (CC.camera.kU = null)
            }
          }
        })();
        return {
          update: (zC, ZC, QC) => {
            CC.update((0, FC.e)(), zC, ZC, QC)
          },
          release: CC.release,
          uninstall: () => {
            const zC = (0, FC.e)();
            zC && CC.uninstall(zC)
          }
        }
      };
    var AC = ZC(40405);
    ZC(37523), ZC(8746);
    ZC(8757).e;
    const xC = () => {
      const CC = (0, AC.b)((() => {
          const CC = {
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
            bodies: () => (0, nC.c)(),
            look: RC(),
            move: (zC, ZC) => {
              const QC = (0, FC.e)(),
                wC = QC.JR.TzC();
              if (CC.x = zC.x, CC.y = zC.y, CC.magnitude = zC.magnitude, CC.headingOffset = zC.headingOffset, CC.jumpHeld = zC.jumpHeld, zC.jumpPressed && (CC.jumpPressedSinceTick = !0), CC.running = zC.running, CC.sprintHeld = zC.sprintHeld, ZC) {
                const zC = (0, SC.e)({
                  ...ZC,
                  descending: QC.JR.yCC(QC.qE).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!QC.pR.canCrouch,
                  toggled: GC(wC)
                });
                CC.crouchHeld = zC.crouchHeld, wC.padSneakToggled = zC.toggled, wC.crouchToggled = !1, (0, pC.e)(zC.toggled)
              }
              wC.gamepad = CC
            },
            stopMoving: () => {
              var zC;
              Object.assign(CC, {
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
              const ZC = null === (zC = (0, FC.e)()) || void 0 === zC ? void 0 : zC.JR.TzC();
              (null === ZC || void 0 === ZC ? void 0 : ZC.gamepad) === CC && (ZC.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: CC => {
              const zC = (0, FC.e)(),
                ZC = null === zC || void 0 === zC ? void 0 : zC.JR.TzC();
              "touch" === CC ? ((0, pC.e)(!1), null !== ZC && void 0 !== ZC && ZC.padSneakToggled && (ZC.padSneakToggled = !1, ZC.isTouchscreen && !ZC.gamepad && zC.JR.MzC(zC.qE).setCrouching(!!zC.pR.canCrouch && ZC.touchCrouch))) : "gamepad" === CC && ZC && (0, pC.e)(GC(ZC))
            },
            hasPlayer: () => {
              var CC;
              return !(null === (CC = (0, FC.e)()) || void 0 === CC || !CC.qE)
            },
            isPlayerDead: () => {
              var CC;
              const zC = (0, FC.e)();
              return !1 === (null === (CC = zC.JR.EzC(zC.qE)) || void 0 === CC ? void 0 : CC.isAlive)
            },
            isReplayMode: () => {
              var CC, zC;
              return !(null === (CC = (0, FC.c)()) || void 0 === CC || null === (zC = CC.client) || void 0 === zC || !zC.isReplayMode())
            },
            isFreeCameraOn: () => {
              var CC, zC, ZC;
              return !(null === (CC = (0, FC.c)()) || void 0 === CC || null === (zC = CC.client) || void 0 === zC || null === (ZC = zC.freeCameraController) || void 0 === ZC || !ZC.isEnabled())
            },
            targetsBlock: () => !!(0, FC.e)().pCC,
            selectedSlotEmpty: () => {
              var CC;
              const zC = (0, FC.e)();
              return !(null !== (CC = zC.JR.SzC(zC.qE)) && void 0 !== CC && CC.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const CC = (0, FC.e)().pR;
              return !!CC.creative && !!CC.canPickBlocks
            },
            scrollHotbar: CC => {
              qC.o.bp("ScrollInventorySlot", CC)
            },
            hasFullInventory: () => (0, oC.e)((0, FC.e)()),
            hasLobbyTab: () => (0, PC.d)((0, FC.e)().pR),
            contextActionInputs: () => {
              var CC, zC, ZC, QC;
              const wC = (0, FC.e)();
              return {
                holdingGun: !(null === (CC = wC.JR.lzC(wC.qE)) || void 0 === CC || null === (zC = CC.Hx) || void 0 === zC || !zC.isGun()),
                customButtons: null !== (ZC = wC.pR.customButtons) && void 0 !== ZC ? ZC : null,
                touchscreenActionButton: null !== (QC = wC.pR.touchscreenActionButton) && void 0 !== QC ? QC : null
              }
            },
            pressTouchButton: CC => {
              (0, fC.sendColyMessage)(wC.ak, CC)
            }
          }
        })()),
        zC = (0, QC.e)(),
        ZC = null,
        bC = null;
      return () => {
        CC(), zC(), null === ZC || void 0 === ZC || ZC(), null === bC || void 0 === bC || bC()
      }
    }
  },
  36490: (CC, zC, ZC) => {
    ZC.d(zC, {
      B: () => GC,
      c: () => bC,
      g: () => SC,
      j: () => pC,
      m: () => fC,
      o: () => NC,
      p: () => PC,
      r: () => WC,
      v: () => RC,
      z: () => gC
    });
    var QC = ZC(20),
      wC = ZC(28);
    const bC = "clientGameInventoryButtonsChanged",
      nC = new Map;

    function fC() {
      return [...nC.values()].sort(((CC, zC) => {
        var ZC, QC;
        return (null !== (ZC = CC.order) && void 0 !== ZC ? ZC : 0) - (null !== (QC = zC.order) && void 0 !== QC ? QC : 0)
      }))
    }
    let oC = null;

    function qC(CC) {
      oC = CC
    }
    let FC = !1;

    function WC(CC) {
      FC = !0;
      try {
        CC.onClick()
      } finally {
        FC = !1
      }
      CC.panel && "clientGame" === QC.b.get("openInGameMenuName") && qC(CC.id)
    }

    function NC() {
      return FC
    }

    function MC() {
      return fC().filter((CC => CC.panel && !CC.disabled))
    }

    function gC(CC) {
      const zC = MC(),
        ZC = zC.findIndex((CC => CC.id === oC));
      return !(ZC < 0 || zC.length < 2) && (WC(zC[(ZC + CC + zC.length) % zC.length]), !0)
    }

    function SC() {
      return null !== oC && MC().length > 1
    }

    function pC() {
      qC(null)
    }

    function PC() {
      "inventory" !== QC.b.get("openInGameMenuName") && qC(null)
    }

    function GC() {
      const CC = oC;
      return qC(null), CC
    }

    function RC(CC) {
      return nC.set(CC.id, CC), wC.o.bp(bC, fC(), !0), () => {
        nC.get(CC.id) === CC && (nC.delete(CC.id), wC.o.bp(bC, fC()))
      }
    }
  },
  36488: (CC, zC, ZC) => {
    ZC.d(zC, {
      C: () => FC,
      d: () => fC,
      h: () => pC,
      k: () => PC,
      o: () => NC,
      q: () => qC,
      u: () => SC,
      y: () => MC
    });
    var QC = ZC(20),
      wC = ZC(28),
      bC = ZC(1240),
      nC = ZC(36490);
    const fC = "clientGameUiChanged";
    let oC = null;

    function qC() {
      return oC
    }

    function FC(CC, zC) {
      const ZC = {
        content: CC,
        menu: zC
      };
      return oC = ZC, wC.o.bp(fC, oC, !0), () => {
        oC === ZC && (oC = null, gC = !1, pC(), wC.o.bp(fC, null))
      }
    }
    let WC = null;

    function NC() {
      return WC
    }

    function MC(CC) {
      return WC = CC, () => {
        WC === CC && (WC = null)
      }
    }
    let gC = !1;

    function SC() {
      const CC = QC.b.get("openInGameMenuName");
      "clientGame" !== CC && (gC = "inventory" === CC), (0, nC.o)() || (0, nC.j)(), (0, bC.u)(bC.e), QC.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function pC() {
      GC(!1)
    }

    function PC() {
      GC(gC)
    }

    function GC(CC) {
      "clientGame" === QC.b.get("openInGameMenuName") && QC.b.set({
        openInGameMenuName: CC ? "inventory" : null
      }), CC || (0, nC.j)(), gC = !1
    }
  },
  36373: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => oC
    });
    var QC = ZC(310),
      wC = ZC(20),
      bC = ZC(36375),
      nC = ZC(1557),
      fC = ZC(1887);

    function oC(CC, zC) {
      var ZC, oC, qC;
      if (!wC.b.get("isKeydownEnabled") || CC.repeat) return;
      const FC = CC.code;
      "Escape" === CC.key ? (0, nC.i)(CC) : null !== (ZC = fC.o.OpenSettings) && void 0 !== ZC && ZC.includes(FC) ? (0, nC.A)(CC, QC.o.SETTINGS) : null !== (oC = fC.o.OpenCharacterCustomization) && void 0 !== oC && oC.includes(FC) ? (0, bC.c)() || (0, nC.A)(CC, QC.o.CUSTOMISATION, zC()) : null !== (qC = fC.o.ShowDebugOverlay) && void 0 !== qC && qC.includes(FC) && wC.b.set({
        showDebugOverlay: !wC.b.get("showDebugOverlay")
      })
    }
  },
  38898: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => oC
    });
    var QC = ZC(8897),
      wC = ZC(36369),
      bC = ZC(38907);
    const nC = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      fC = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function oC(CC, zC) {
      if (CC instanceof wC.f) return {
        at: nC[zC],
        code: 0
      };
      const ZC = (0, QC.e)(CC),
        oC = "number" === typeof ZC ? ZC : 0;
      return null !== (0, bC.j)(oC).name ? {
        at: "refused",
        code: oC
      } : {
        at: fC[zC],
        code: oC
      }
    }
  },
  8897: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => bC,
      e: () => nC,
      i: () => fC,
      m: () => qC,
      n: () => oC
    });
    var QC = ZC(184),
      wC = ZC(4562);

    function bC(CC) {
      return nC(CC) === QC.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function nC(CC) {
      return "object" === typeof CC && null !== CC ? CC.code : void 0
    }

    function fC(CC) {
      var zC;
      return null !== (zC = Object.keys(wC.c).find((zC => wC.c[zC] === CC))) && void 0 !== zC ? zC : null
    }

    function oC(CC) {
      return "notWhitelisted" === CC ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const qC = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  36346: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => NC,
      h: () => FC,
      j: () => MC,
      k: () => WC
    });
    var QC = ZC(326),
      wC = ZC(622),
      bC = ZC(630),
      nC = ZC(38);
    const fC = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      oC = "playSessionGameNameWithVariation",
      qC = "wasMatchmakePlayer";

    function FC() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC.k;
      (0, bC.g)(CC, fC)
    }

    function WC() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC.k).setItem(qC, !0)
    }

    function NC() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC.k;
      return (0, bC.d)(CC, fC)
    }

    function MC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nC.k;
      const ZC = (0, bC.d)(zC, fC),
        FC = function(CC) {
          const zC = CC.getItem(oC);
          return "string" !== typeof zC ? null : zC
        }(zC),
        WC = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC.k).getItem(qC)
        }(zC);
      let NC;
      return NC = null !== ZC && null !== FC && (0, bC.f)(zC, fC) && function(CC, zC, ZC) {
          const wC = (0, QC.Cb)(CC),
            bC = (0, QC.Cb)(zC),
            nC = (0, QC.zb)(CC),
            fC = (0, QC.zb)(zC);
          return !(wC !== bC || !ZC) || wC === bC && nC === fC
        }(FC, CC, WC) ? ZC : (0, wC.c)(), (0, bC.j)(zC, fC, NC), zC.setItem(oC, CC),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC.k).removeItem(qC)
        }(zC), NC
    }
  },
  36342: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => xC,
      e: () => JC
    });
    var QC = ZC(970),
      wC = ZC(191),
      bC = ZC(318),
      nC = ZC(603),
      fC = ZC(326),
      oC = ZC(977),
      qC = ZC(615),
      FC = ZC(644),
      WC = ZC(4456),
      NC = ZC(77),
      MC = ZC(113),
      gC = ZC(1645),
      SC = ZC(91),
      pC = ZC(36346),
      PC = ZC(38),
      GC = ZC(625),
      RC = ZC(296),
      AC = ZC(36348);

    function xC() {
      var CC, zC;
      return [...null !== (CC = navigator.languages) && void 0 !== CC ? CC : [null !== (zC = navigator.language) && void 0 !== zC ? zC : "none"], "en-gb"]
    }

    function JC(CC, zC, ZC, JC, IC) {
      const iC = (0, QC.i)(zC) ? (0, QC.m)(zC) : null,
        vC = CC.isLoggedIn() && void 0 !== (0, wC.d)(bC.l, MC.y) ? (0, RC.u)() : null,
        eC = {
          cookies: (0, gC.getAllCookiesForGameNameWithVariation)(zC),
          isMobile: (0, NC.isMobile)(),
          isUsingCustomGameTexturePack: null !== iC && IC(iC),
          generalCookies: {
            joinDiscord: !!PC.i.getItem("DiscordPressed"),
            newGo: WC.d,
            ...CC.getMetricsCookies(),
            trafficCode: JC,
            compliance: NC.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, NC.getBrowserName)(),
            version: (0, NC.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, NC.getPlatformType)(),
            deviceType: (0, SC.c)()
          },
          isLoggedIn: CC.isLoggedIn(),
          lobbyName: ZC,
          languages: xC(),
          version: nC.e,
          siteUsed: MC.y,
          subsiteUsed: MC.H,
          playSessionId: (0, pC.j)(zC),
          visitSessionId: (0, GC.d)(),
          clientReason: qC.r.reason,
          budgetBasis: (0, AC.c)(),
          ...null !== FC.n && {
            diagClaim: FC.n.claimId
          },
          ...null !== vC && {
            webGpuLoss: vC
          }
        };
      return null !== iC && (0, fC.qc)(iC) ? (eC.lobbyName = (0, QC.f)(iC, (0, QC.k)(zC), ZC), {
        roomName: `classic_${oC.f}`,
        joinOptions: eC
      }) : {
        roomName: zC,
        joinOptions: eC
      }
    }
  },
  38907: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC,
      e: () => bC,
      f: () => fC,
      j: () => FC,
      k: () => oC,
      o: () => nC
    });
    var QC = ZC(184);
    const wC = 3e3,
      bC = 15e3;

    function nC(CC) {
      const zC = CC.endsWith(QC.k);
      return {
        text: (zC ? CC.slice(0, -QC.k.length) : CC) || null,
        dropsCache: zC
      }
    }
    const fC = "Either your internet isn't working or this is a bug.";

    function oC(CC, zC) {
      const ZC = FC(CC);
      return null !== ZC.name && "" === QC.e[ZC.name].text && null !== zC ? zC : ZC.reason
    }
    const qC = "You were removed from the game.";

    function FC(CC) {
      var zC;
      let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const wC = null !== (zC = Object.keys(QC.e).find((zC => QC.e[zC].code === CC))) && void 0 !== zC ? zC : null;
      if (null === wC) return {
        code: CC,
        name: wC,
        reason: null !== ZC && void 0 !== ZC ? ZC : `${fC}\nCode: ${CC}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: bC,
        canReconnect: nC = !1
      } = QC.e[wC], oC = CC === QC.e.outdatedVersion.code || CC === QC.e.loadRecaptchaError.code;
      return {
        code: CC,
        name: wC,
        reason: "" !== bC ? bC : null !== ZC && void 0 !== ZC ? ZC : CC === QC.e.gameOrPluginKick.code ? qC : `Code: ${CC}`,
        canReconnect: nC,
        automaticallyReconnect: CC === QC.e.customGameUpdated.code || CC === QC.e.duplicateLobbyNameError.code,
        requiresRefresh: oC
      }
    }
  },
  36725: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC,
      g: () => bC,
      j: () => NC,
      m: () => fC,
      q: () => oC,
      u: () => qC,
      v: () => WC,
      y: () => FC,
      z: () => nC
    });
    var QC = ZC(1183);
    let wC = function(CC) {
        return CC[CC.Join = 0] = "Join", CC[CC.Leave = 1] = "Leave", CC[CC.Push = 2] = "Push", CC[CC.Cursor = 3] = "Cursor", CC[CC.Submit = 4] = "Submit", CC[CC.ReloadAsVariation = 5] = "ReloadAsVariation", CC[CC.CreateFile = 6] = "CreateFile", CC[CC.RenameFile = 7] = "RenameFile", CC[CC.DeleteFile = 8] = "DeleteFile", CC[CC.SetEngine = 9] = "SetEngine", CC[CC.RenameFolder = 10] = "RenameFolder", CC
      }({}),
      bC = function(CC) {
        return CC[CC.Joined = 0] = "Joined", CC[CC.Updates = 1] = "Updates", CC[CC.Presence = 2] = "Presence", CC[CC.RemoteCursor = 3] = "RemoteCursor", CC[CC.ForceClose = 4] = "ForceClose", CC[CC.LobbyFilesChanged = 5] = "LobbyFilesChanged", CC[CC.EngineSettings = 6] = "EngineSettings", CC
      }({});

    function nC(CC) {
      return "lobby" === CC.kind ? `lobby:${CC.path}` : `codeBlock:${CC.pos[0]},${CC.pos[1]},${CC.pos[2]}`
    }

    function fC(CC) {
      if ("lobby" === CC) return {
        kind: "lobby",
        path: QC.k
      };
      if (CC.startsWith("lobby:")) {
        const zC = CC.slice(6);
        return WC(zC) ? {
          kind: "lobby",
          path: zC
        } : null
      }
      const zC = CC.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return zC ? {
        kind: "codeBlock",
        pos: [parseInt(zC[1]), parseInt(zC[2]), parseInt(zC[3])]
      } : null
    }

    function oC(CC) {
      return CC.endsWith(".d.ts")
    }

    function qC(CC) {
      return CC.endsWith(".ts") && !oC(CC)
    }
    const FC = 64;

    function WC(CC) {
      if (!CC || CC !== CC.trim()) return !1;
      if (CC.length > FC) return !1;
      if (CC.startsWith("/") || CC.includes("\\") || CC.includes("\0")) return !1;
      if (!oC(CC) && !qC(CC) && ! function(CC) {
          return CC.endsWith(".js") && !CC.endsWith(".min.js") && !CC.endsWith(".bundle.js")
        }(CC)) return !1;
      const zC = CC.split("/");
      for (const ZC of zC)
        if ("" === ZC || "." === ZC || ".." === ZC) return !1;
      return !0
    }
    const NC = 14e3
  },
  38815: (CC, zC, ZC) => {
    function QC(CC, zC, ZC, QC, wC) {
      var bC = {};
      return Object.keys(QC).forEach((function(CC) {
        bC[CC] = QC[CC]
      })), bC.enumerable = !!bC.enumerable, bC.configurable = !!bC.configurable, ("value" in bC || bC.initializer) && (bC.writable = !0), bC = ZC.slice().reverse().reduce((function(ZC, QC) {
        return QC(CC, zC, ZC) || ZC
      }), bC), wC && void 0 !== bC.initializer && (bC.value = bC.initializer ? bC.initializer.call(wC) : void 0, bC.initializer = void 0), void 0 === bC.initializer && (Object.defineProperty(CC, zC, bC), bC = null), bC
    }
    ZC.d(zC, {
      d: () => QC
    })
  },
  38813: (CC, zC, ZC) => {
    function QC(CC, zC, ZC, QC) {
      ZC && Object.defineProperty(CC, zC, {
        enumerable: ZC.enumerable,
        configurable: ZC.configurable,
        writable: ZC.writable,
        value: ZC.initializer ? ZC.initializer.call(QC) : void 0
      })
    }
    ZC.d(zC, {
      b: () => QC
    })
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);
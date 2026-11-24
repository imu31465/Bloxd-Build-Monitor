export const id = 200;
export const ids = [200];
export const modules = {
  39256: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => nT,
      e: () => MT
    });
    var WT = mT(4170);
    let zT = null;

    function MT(TT) {
      return null !== zT && TT === zT
    }

    function gT() {
      this.wG = !1, this.stopPropagation = !1, this.aG = !1, this.disabled = !1
    }
    class nT {
      constructor(TT, UT) {
        this.version = "0.7.0";
        var mT = Object.assign({}, new gT, UT || {});
        this.element = TT || document, this.wG = !!mT.wG, this.stopPropagation = !!mT.stopPropagation, this.aG = !!mT.aG, this.disabled = !!mT.disabled, this.filterEvents = (TT, UT) => !0, this.ignoreEvent = TT => !1, this.down = new WT.EventEmitter, this.up = new WT.EventEmitter, this.state = {}, this.yG = {
          dx: 0,
          dy: 0,
          jUT: 0,
          lUT: 0,
          pUT: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? kT(this) : document.addEventListener("DOMContentLoaded", (TT => {
          kT(this)
        }), {
          once: !0
        })
      }
      bind(TT) {
        for (var UT = arguments.length, mT = new Array(UT > 1 ? UT - 1 : 0), WT = 1; WT < UT; WT++) mT[WT - 1] = arguments[WT];
        mT.forEach((UT => {
          var mT = this._keyBindmap[UT] || [];
          mT.includes(TT) || (mT.push(TT), this._keyBindmap[UT] = mT)
        })), this.state[TT] = !!this.state[TT], this.pressCount[TT] = this.pressCount[TT] || 0, this.releaseCount[TT] = this.releaseCount[TT] || 0
      }
      unbind(TT) {
        for (var UT in this._keyBindmap) {
          var mT = this._keyBindmap[UT],
            WT = mT.indexOf(TT);
          WT > -1 && mT.splice(WT, 1)
        }
      }
      getBindings() {
        var TT = {};
        for (var UT in this._keyBindmap) {
          this._keyBindmap[UT].forEach((mT => {
            TT[mT] = TT[mT] || [], TT[mT].push(UT)
          }))
        }
        return TT
      }
      Cl() {
        HT(this.yG), HT(this.pressCount), HT(this.releaseCount)
      }
    }

    function HT(TT) {
      for (var UT in TT) TT[UT] = 0
    }

    function kT(TT) {
      window.addEventListener("keydown", cT.bind(null, TT, !0), !1), window.addEventListener("keyup", cT.bind(null, TT, !1), !1);
      var UT = {
        passive: !0
      };
      TT.element.addEventListener("touchstart", pT.bind(void 0, TT), {
        passive: !1
      }), TT.element.addEventListener("touchend", ZT.bind(void 0, TT), UT), TT.element.addEventListener("mousedown", vT.bind(null, TT, !0), UT), window.document.addEventListener("mouseup", vT.bind(null, TT, !1), UT), TT.element.addEventListener("touchmove", fT.bind(null, TT), UT), TT.element.addEventListener("mousemove", fT.bind(null, TT), UT), window.PointerEvent, TT.element.addEventListener("wheel", qT.bind(null, TT), UT), TT.element.addEventListener("contextmenu", iT.bind(null, TT), !1), window.addEventListener("blur", eT.bind(null, TT), !1)
    }
    var jT = 0,
      lT = 0,
      LT = null;

    function pT(TT, UT) {
      UT.preventDefault(), BT(UT)
    }

    function BT(TT) {
      let UT = !1;
      for (let mT = 0; mT < TT.touches.length; ++mT)
        if (TT.touches[mT].identifier === LT) {
          UT = !0;
          break
        } if (!UT) {
        const UT = TT.changedTouches[0];
        jT = UT.clientX, lT = UT.clientY, LT = UT.identifier
      }
    }

    function ZT(TT, UT) {
      for (var mT = UT.changedTouches, WT = 0; WT < mT.length; ++WT) mT[WT].identifier === LT && (LT = null)
    }

    function cT(TT, UT, mT) {
      if (!TT.ignoreEvent(mT)) try {
        YT(TT, mT), UT && mT.isTrusted && !mT.repeat && TT._keyStates[mT.code] && JT(TT, mT.code)
      } finally {
        xT(mT.code, UT, TT, mT)
      }
    }

    function vT(TT, UT, mT) {
      if (!TT.ignoreEvent(mT)) try {
        YT(TT, mT)
      } finally {
        ! function(TT, UT, mT) {
          if ("pointerId" in mT)
            if (UT) {
              if (null !== TT._touches.currID) return;
              TT._touches.currID = mT.pointerId
            } else {
              if (TT._touches.currID !== mT.pointerId) return;
              TT._touches.currID = null
            } var WT = "button" in mT ? mT.button + 1 : 1;
          xT("Mouse" + WT, UT, TT, mT)
        }(TT, UT, mT)
      }
    }

    function fT(TT, UT) {
      var mT = UT.movementX || UT.mozMovementX || 0,
        WT = UT.movementY || UT.mozMovementY || 0;
      if (UT.touches && 0 === (mT | WT)) {
        var zT = function(TT) {
          BT(TT);
          for (let UT = 0; UT < TT.changedTouches.length; ++UT)
            if (TT.changedTouches[UT].identifier == LT) {
              const mT = TT.changedTouches[UT],
                WT = [mT.clientX - jT, mT.clientY - lT];
              return jT = mT.clientX, lT = mT.clientY, WT
            } return console.error(`Did not find touch id ${LT}`), [0, 0]
        }(UT);
        mT = zT[0], WT = zT[1]
      }
      TT.yG.dx += mT, TT.yG.dy += WT
    }

    function qT(TT, UT) {
      YT(TT, UT);
      var mT = 1;
      switch (UT.deltaMode) {
        case 0:
          mT = 1;
          break;
        case 1:
          mT = 12;
          break;
        case 2:
          mT = TT.element.clientHeight || window.innerHeight
      }
      TT.yG.jUT += (UT.deltaX || 0) * mT, TT.yG.lUT += (UT.deltaY || 0) * mT, TT.yG.pUT += (UT.deltaZ || 0) * mT
    }

    function iT(TT, UT) {
      if (!TT.aG) return UT.preventDefault(), !1
    }
    var bT = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function OT(TT, UT) {
      return !!TT[bT[UT]] || ("AltRight" === UT || "ControlLeft" === UT) && "function" === typeof TT.getModifierState && !0 === TT.getModifierState("AltGraph")
    }

    function eT(TT, UT) {
      for (var mT in TT._modifiersHeldThroughBlur = {}, bT) TT._keyStates[mT] && (TT._modifiersHeldThroughBlur[mT] = !0);
      UT && UT.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (TT) {
          return !0
        }
      }() && (clearTimeout(TT._blurRelease), TT._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var UT in TT._modifiersHeldThroughBlur = {}, TT._keyStates) TT._keyStates[UT] && !/^Mouse\d/.test(UT) && JT(TT, UT)
      }), 0))
    }

    function YT(TT, UT) {
      var mT = TT._modifiersHeldThroughBlur;
      if (mT && UT.isTrusted && document.hasFocus())
        for (var WT in mT) delete mT[WT], TT._keyStates[WT] && WT !== UT.code && (OT(UT, WT) || JT(TT, WT))
    }

    function JT(TT, UT) {
      const mT = {
          code: UT,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        WT = zT;
      zT = mT;
      try {
        xT(UT, !1, TT, mT)
      } finally {
        zT = WT
      }
    }

    function xT(TT, UT, mT, WT) {
      var zT = mT._keyBindmap[TT];
      zT && (dT(mT._keyStates[TT], UT) && (mT._keyStates[TT] = UT, zT.forEach((TT => {
        (!mT.filterEvents || mT.filterEvents(WT, TT)) && function(TT, UT, mT, WT) {
          var zT = UT ? mT.pressCount : mT.releaseCount;
          zT[TT] = (zT[TT] || 0) + 1;
          var MT = mT._bindPressCount[TT] || 0;
          (MT += UT ? 1 : -1) < 0 && (MT = 0);
          mT._bindPressCount[TT] = MT;
          var gT = mT.state[TT];
          if (dT(gT, MT)) {
            mT.state[TT] = MT > 0;
            var nT = UT ? mT.down : mT.up;
            mT.disabled || nT.emit(TT, WT)
          }
        }(TT, UT, mT, WT)
      }))), "button" in WT || (mT.wG && !WT.defaultPrevented && WT.preventDefault(), mT.stopPropagation && WT.stopPropagation()))
    }

    function dT(TT, UT) {
      return TT ? !UT : UT
    }
  },
  36765: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => ZT,
      e: () => cT
    });
    var WT = mT(63),
      zT = mT(1567),
      MT = mT(2089),
      gT = mT(36716),
      nT = mT(653),
      HT = mT(1126),
      kT = mT.n(HT),
      jT = mT(1188);
    const lT = [LT()];

    function LT() {
      return {
        source: null,
        direction: null,
        eC: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function pT(TT) {
      return lT.find((UT => null !== UT.source && UT.source === TT))
    }

    function BT(TT) {
      clearTimeout(TT.timeout), TT.source = null, TT.direction = null, TT.writtenAngle = null, TT.eC && (TT.eC.style.rotate = "")
    }
    const ZT = (0, WT.memo)((function() {
      const [, TT] = (0, WT.useReducer)((TT => TT + 1), 0);
      return (0, zT.g)("damagedByOtherPlayer", (UT => {
        let {
          Bm: mT,
          direction: WT
        } = UT;
        const zT = mT || "nonDirectional",
          MT = function(TT) {
            var UT;
            const mT = null !== (UT = pT(TT)) && void 0 !== UT ? UT : lT.find((TT => null === TT.source));
            if (mT) return mT;
            const WT = {
              source: null,
              direction: null,
              eC: null,
              timeout: void 0,
              writtenAngle: null
            };
            return lT.push(WT), WT
          }(zT);
        clearTimeout(MT.timeout), MT.source = zT, MT.direction = WT, MT.timeout = setTimeout((() => {
          BT(MT), TT()
        }), 800), TT()
      })), (0, MT.e)("kill", (UT => {
        let {
          killer: mT,
          victim: WT
        } = UT;
        const zT = mT.local && pT(WT.id);
        zT && (BT(zT), TT())
      })), (0, WT.useEffect)((() => {
        const TT = (0, gT.e)("turnDamageIndicators", cT);
        return () => {
          TT(), lT.forEach(BT)
        }
      }), []), (0, jT.jsx)("div", {
        className: "DirectionalDamage",
        children: lT.map(((TT, UT) => (0, jT.jsx)("div", {
          ref: UT => {
            TT.eC = UT
          },
          className: kT()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, nT.E)(TT.direction),
            DamageIndicatorIdle: null === TT.source
          })
        }, UT)))
      })
    }));

    function cT(TT) {
      for (const UT of lT) {
        if (null === UT.source || (0, nT.E)(UT.direction)) continue;
        const mT = UT.direction - TT;
        mT !== UT.writtenAngle && (UT.writtenAngle = mT, UT.eC.style.rotate = `${mT}rad`)
      }
    }
  },
  36579: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT,
      f: () => MT
    });
    let WT = !1;

    function zT() {
      return WT
    }

    function MT(TT) {
      return WT !== TT && (WT = TT, !0)
    }
  },
  34227: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT,
      h: () => zT
    });
    var WT = mT(25);

    function zT(TT, UT) {
      return TT && !UT
    }

    function MT() {
      return zT(WT.b.get("isTouchScreen"), WT.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  40810: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      startPadGameplay: () => bT
    });
    mT(40670);
    var WT = mT(40677),
      zT = mT(3841),
      MT = mT(25),
      gT = mT(39221),
      nT = mT(3781),
      HT = mT(39247),
      kT = mT(31),
      jT = mT(2875),
      lT = mT(38555),
      LT = mT(8967),
      pT = mT(40686);
    const BT = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var ZT = mT(40706),
      cT = mT(8950),
      vT = mT(39251);
    const fT = TT => TT.padSneakToggled || !!MT.b.get("clientEscMenuOptions").crouchIsToggle && TT.crouchToggled,
      qT = () => {
        const TT = (() => {
          const TT = (0, LT.b)();
          let UT = BT;
          const mT = new pT.e;
          let WT = !1,
            zT = 0;
          const MT = () => {
            const mT = performance.now(),
              MT = 0 === zT ? 0 : mT - zT;
            if (zT = mT, !WT) return TT.discardPending(), null;
            const gT = (0, pT.o)(UT, MT),
              nT = TT.drainLookDelta(),
              HT = (0, lT.h)();
            return {
              Xs: (gT.Xs + nT.Xs) * HT,
              Qs: (gT.Qs + nT.Qs) * HT
            }
          };
          return {
            update: (TT, zT, gT, nT) => {
              TT.camera.XE !== MT && (TT.camera.XE = MT), WT = !0, UT = (0, pT.r)(mT, zT, gT, nT, performance.now())
            },
            release: () => {
              WT = !1, UT = BT, mT.reset()
            },
            uninstall: TT => {
              TT.camera.XE === MT && (TT.camera.XE = null)
            }
          }
        })();
        return {
          update: (UT, mT, WT) => {
            TT.update((0, jT.h)(), UT, mT, WT)
          },
          release: TT.release,
          uninstall: () => {
            const UT = (0, jT.h)();
            UT && TT.uninstall(UT)
          }
        }
      };
    var iT = mT(40699);
    mT(37813), mT(8861);
    mT(8876).c;
    const bT = () => {
      const TT = (0, iT.c)((() => {
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
            bodies: () => (0, gT.c)(),
            look: qT(),
            move: (UT, mT) => {
              const WT = (0, jT.h)(),
                zT = WT.pY.zmT();
              if (TT.x = UT.x, TT.y = UT.y, TT.magnitude = UT.magnitude, TT.headingOffset = UT.headingOffset, TT.jumpHeld = UT.jumpHeld, UT.jumpPressed && (TT.jumpPressedSinceTick = !0), TT.running = UT.running, TT.sprintHeld = UT.sprintHeld, mT) {
                const UT = (0, ZT.e)({
                  ...mT,
                  descending: WT.pY.gUT(WT.VV).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!WT.kY.canCrouch,
                  toggled: fT(zT)
                });
                TT.crouchHeld = UT.crouchHeld, zT.padSneakToggled = UT.toggled, zT.crouchToggled = !1, (0, cT.g)(UT.toggled)
              }
              zT.gamepad = TT
            },
            stopMoving: () => {
              var UT;
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
              const mT = null === (UT = (0, jT.h)()) || void 0 === UT ? void 0 : UT.pY.zmT();
              (null === mT || void 0 === mT ? void 0 : mT.gamepad) === TT && (mT.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: TT => {
              const UT = (0, jT.h)(),
                mT = null === UT || void 0 === UT ? void 0 : UT.pY.zmT();
              "touch" === TT ? ((0, cT.g)(!1), null !== mT && void 0 !== mT && mT.padSneakToggled && (mT.padSneakToggled = !1, mT.isTouchscreen && !mT.gamepad && UT.pY.wUT(UT.VV).setCrouching(!!UT.kY.canCrouch && mT.touchCrouch))) : "gamepad" === TT && mT && (0, cT.g)(fT(mT))
            },
            hasPlayer: () => {
              var TT;
              return !(null === (TT = (0, jT.h)()) || void 0 === TT || !TT.VV)
            },
            isPlayerDead: () => {
              var TT;
              const UT = (0, jT.h)();
              return !1 === (null === (TT = UT.pY.oUT(UT.VV)) || void 0 === TT ? void 0 : TT.isAlive)
            },
            isReplayMode: () => {
              var TT, UT;
              return !(null === (TT = (0, jT.d)()) || void 0 === TT || null === (UT = TT.client) || void 0 === UT || !UT.isReplayMode())
            },
            isFreeCameraOn: () => {
              var TT, UT, mT;
              return !(null === (TT = (0, jT.d)()) || void 0 === TT || null === (UT = TT.client) || void 0 === UT || null === (mT = UT.freeCameraController) || void 0 === mT || !mT.isEnabled())
            },
            targetsBlock: () => !!(0, jT.h)().xTT,
            selectedSlotEmpty: () => {
              var TT;
              const UT = (0, jT.h)();
              return !(null !== (TT = UT.pY.aUT(UT.VV)) && void 0 !== TT && TT.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const TT = (0, jT.h)().kY;
              return !!TT.creative && !!TT.canPickBlocks
            },
            scrollHotbar: TT => {
              kT.j.EZ("ScrollInventorySlot", TT)
            },
            hasFullInventory: () => (0, HT.c)((0, jT.h)()),
            hasLobbyTab: () => (0, vT.b)((0, jT.h)().kY),
            contextActionInputs: () => {
              var TT, UT, mT, WT;
              const zT = (0, jT.h)();
              return {
                holdingGun: !(null === (TT = zT.pY.AUT(zT.VV)) || void 0 === TT || null === (UT = TT.AY) || void 0 === UT || !UT.isGun()),
                customButtons: null !== (mT = zT.kY.customButtons) && void 0 !== mT ? mT : null,
                touchscreenActionButton: null !== (WT = zT.kY.touchscreenActionButton) && void 0 !== WT ? WT : null
              }
            },
            pressTouchButton: TT => {
              (0, nT.sendColyMessage)(zT.gj, TT)
            }
          }
        })()),
        UT = (0, WT.d)(),
        mT = null,
        MT = null;
      return () => {
        TT(), UT(), null === mT || void 0 === mT || mT(), null === MT || void 0 === MT || MT()
      }
    }
  },
  36698: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT,
      d: () => ZT,
      h: () => cT,
      j: () => nT,
      l: () => LT,
      n: () => vT,
      p: () => lT,
      r: () => qT,
      s: () => BT,
      v: () => fT
    });
    var WT = mT(25),
      zT = mT(31);
    const MT = "clientGameInventoryButtonsChanged",
      gT = new Map;

    function nT() {
      return [...gT.values()].sort(((TT, UT) => {
        var mT, WT;
        return (null !== (mT = TT.order) && void 0 !== mT ? mT : 0) - (null !== (WT = UT.order) && void 0 !== WT ? WT : 0)
      }))
    }
    let HT = null;

    function kT(TT) {
      HT = TT
    }
    let jT = !1;

    function lT(TT) {
      jT = !0;
      try {
        TT.onClick()
      } finally {
        jT = !1
      }
      TT.panel && "clientGame" === WT.b.get("openInGameMenuName") && kT(TT.id)
    }

    function LT() {
      return jT
    }

    function pT() {
      return nT().filter((TT => TT.panel && !TT.disabled))
    }

    function BT(TT) {
      const UT = pT(),
        mT = UT.findIndex((TT => TT.id === HT));
      return !(mT < 0 || UT.length < 2) && (lT(UT[(mT + TT + UT.length) % UT.length]), !0)
    }

    function ZT() {
      return null !== HT && pT().length > 1
    }

    function cT() {
      kT(null)
    }

    function vT() {
      "inventory" !== WT.b.get("openInGameMenuName") && kT(null)
    }

    function fT() {
      const TT = HT;
      return kT(null), TT
    }

    function qT(TT) {
      return gT.set(TT.id, TT), zT.j.EZ(MT, nT(), !0), () => {
        gT.get(TT.id) === TT && (gT.delete(TT.id), zT.j.EZ(MT, nT()))
      }
    }
  },
  36693: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT,
      d: () => cT,
      f: () => vT,
      i: () => LT,
      j: () => kT,
      l: () => ZT,
      n: () => pT,
      q: () => jT
    });
    var WT = mT(25),
      zT = mT(31),
      MT = mT(1388),
      gT = mT(36698);
    const nT = "clientGameUiChanged";
    let HT = null;

    function kT() {
      return HT
    }

    function jT(TT, UT) {
      const mT = {
        content: TT,
        menu: UT
      };
      return HT = mT, zT.j.EZ(nT, HT, !0), () => {
        HT === mT && (HT = null, BT = !1, cT(), zT.j.EZ(nT, null))
      }
    }
    let lT = null;

    function LT() {
      return lT
    }

    function pT(TT) {
      return lT = TT, () => {
        lT === TT && (lT = null)
      }
    }
    let BT = !1;

    function ZT() {
      const TT = WT.b.get("openInGameMenuName");
      "clientGame" !== TT && (BT = "inventory" === TT), (0, gT.l)() || (0, gT.h)(), (0, MT.s)(MT.d), WT.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function cT() {
      fT(!1)
    }

    function vT() {
      fT(BT)
    }

    function fT(TT) {
      "clientGame" === WT.b.get("openInGameMenuName") && WT.b.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, gT.h)(), BT = !1
    }
  },
  36574: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => HT
    });
    var WT = mT(351),
      zT = mT(25),
      MT = mT(36579),
      gT = mT(1752),
      nT = mT(2104);

    function HT(TT, UT) {
      var mT, HT, kT;
      if (!zT.b.get("isKeydownEnabled") || TT.repeat) return;
      const jT = TT.code;
      "Escape" === TT.key ? (0, gT.f)(TT) : null !== (mT = nT.v.OpenSettings) && void 0 !== mT && mT.includes(jT) ? (0, gT.s)(TT, WT.k.SETTINGS) : null !== (HT = nT.v.OpenCharacterCustomization) && void 0 !== HT && HT.includes(jT) ? (0, MT.c)() || (0, gT.s)(TT, WT.k.CUSTOMISATION, UT()) : null !== (kT = nT.v.ShowDebugOverlay) && void 0 !== kT && kT.includes(jT) && zT.b.set({
        showDebugOverlay: !zT.b.get("showDebugOverlay")
      })
    }
  },
  39114: (TT, UT, mT) => {
    function WT(TT, UT, mT, WT, zT) {
      var MT = {};
      return Object.keys(WT).forEach((function(TT) {
        MT[TT] = WT[TT]
      })), MT.enumerable = !!MT.enumerable, MT.configurable = !!MT.configurable, ("value" in MT || MT.initializer) && (MT.writable = !0), MT = mT.slice().reverse().reduce((function(mT, WT) {
        return WT(TT, UT, mT) || mT
      }), MT), zT && void 0 !== MT.initializer && (MT.value = MT.initializer ? MT.initializer.call(zT) : void 0, MT.initializer = void 0), void 0 === MT.initializer && (Object.defineProperty(TT, UT, MT), MT = null), MT
    }
    mT.d(UT, {
      e: () => WT
    })
  },
  39108: (TT, UT, mT) => {
    function WT(TT, UT, mT, WT) {
      mT && Object.defineProperty(TT, UT, {
        enumerable: mT.enumerable,
        configurable: mT.configurable,
        writable: mT.writable,
        value: mT.initializer ? mT.initializer.call(WT) : void 0
      })
    }
    mT.d(UT, {
      d: () => WT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);
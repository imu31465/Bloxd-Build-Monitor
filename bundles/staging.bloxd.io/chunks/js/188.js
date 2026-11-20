export const id = 188;
export const ids = [188];
export const modules = {
  38680: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Ub,
      f: () => ab
    });
    var kb = sb(3876);
    let Wb = null;

    function ab(bb) {
      return null !== Wb && bb === Wb
    }

    function Tb() {
      this.mG = !1, this.stopPropagation = !1, this.lG = !1, this.disabled = !1
    }
    class Ub {
      constructor(bb, cb) {
        this.version = "0.7.0";
        var sb = Object.assign({}, new Tb, cb || {});
        this.element = bb || document, this.mG = !!sb.mG, this.stopPropagation = !!sb.stopPropagation, this.lG = !!sb.lG, this.disabled = !!sb.disabled, this.filterEvents = (bb, cb) => !0, this.down = new kb.EventEmitter, this.up = new kb.EventEmitter, this.state = {}, this.YG = {
          dx: 0,
          dy: 0,
          ubb: 0,
          Ybb: 0,
          hbb: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Hb(this) : document.addEventListener("DOMContentLoaded", (bb => {
          Hb(this)
        }), {
          once: !0
        })
      }
      bind(bb) {
        for (var cb = arguments.length, sb = new Array(cb > 1 ? cb - 1 : 0), kb = 1; kb < cb; kb++) sb[kb - 1] = arguments[kb];
        sb.forEach((cb => {
          var sb = this._keyBindmap[cb] || [];
          sb.includes(bb) || (sb.push(bb), this._keyBindmap[cb] = sb)
        })), this.state[bb] = !!this.state[bb], this.pressCount[bb] = this.pressCount[bb] || 0, this.releaseCount[bb] = this.releaseCount[bb] || 0
      }
      unbind(bb) {
        for (var cb in this._keyBindmap) {
          var sb = this._keyBindmap[cb],
            kb = sb.indexOf(bb);
          kb > -1 && sb.splice(kb, 1)
        }
      }
      getBindings() {
        var bb = {};
        for (var cb in this._keyBindmap) {
          this._keyBindmap[cb].forEach((sb => {
            bb[sb] = bb[sb] || [], bb[sb].push(cb)
          }))
        }
        return bb
      }
      aX() {
        Ib(this.YG), Ib(this.pressCount), Ib(this.releaseCount)
      }
    }

    function Ib(bb) {
      for (var cb in bb) bb[cb] = 0
    }

    function Hb(bb) {
      window.addEventListener("keydown", Qb.bind(null, bb, !0), !1), window.addEventListener("keyup", Qb.bind(null, bb, !1), !1);
      var cb = {
        passive: !0
      };
      bb.element.addEventListener("touchstart", nb.bind(void 0, bb), {
        passive: !1
      }), bb.element.addEventListener("touchend", lb.bind(void 0, bb), cb), bb.element.addEventListener("mousedown", eb.bind(null, bb, !0), cb), window.document.addEventListener("mouseup", eb.bind(null, bb, !1), cb), bb.element.addEventListener("touchmove", Cb.bind(null, bb), cb), bb.element.addEventListener("mousemove", Cb.bind(null, bb), cb), window.PointerEvent, bb.element.addEventListener("wheel", Nb.bind(null, bb), cb), bb.element.addEventListener("contextmenu", Vb.bind(null, bb), !1), window.addEventListener("blur", Yb.bind(null, bb), !1)
    }
    var fb = 0,
      Mb = 0,
      Xb = null;

    function nb(bb, cb) {
      cb.preventDefault(), mb(cb)
    }

    function mb(bb) {
      let cb = !1;
      for (let sb = 0; sb < bb.touches.length; ++sb)
        if (bb.touches[sb].identifier === Xb) {
          cb = !0;
          break
        } if (!cb) {
        const cb = bb.changedTouches[0];
        fb = cb.clientX, Mb = cb.clientY, Xb = cb.identifier
      }
    }

    function lb(bb, cb) {
      for (var sb = cb.changedTouches, kb = 0; kb < sb.length; ++kb) sb[kb].identifier === Xb && (Xb = null)
    }

    function Qb(bb, cb, sb) {
      try {
        hb(bb, sb), cb && sb.isTrusted && !sb.repeat && bb._keyStates[sb.code] && Jb(bb, sb.code)
      } finally {
        gb(sb.code, cb, bb, sb)
      }
    }

    function eb(bb, cb, sb) {
      try {
        hb(bb, sb)
      } finally {
        ! function(bb, cb, sb) {
          if ("pointerId" in sb)
            if (cb) {
              if (null !== bb._touches.currID) return;
              bb._touches.currID = sb.pointerId
            } else {
              if (bb._touches.currID !== sb.pointerId) return;
              bb._touches.currID = null
            } var kb = "button" in sb ? sb.button + 1 : 1;
          gb("Mouse" + kb, cb, bb, sb)
        }(bb, cb, sb)
      }
    }

    function Cb(bb, cb) {
      var sb = cb.movementX || cb.mozMovementX || 0,
        kb = cb.movementY || cb.mozMovementY || 0;
      if (cb.touches && 0 === (sb | kb)) {
        var Wb = function(bb) {
          mb(bb);
          for (let cb = 0; cb < bb.changedTouches.length; ++cb)
            if (bb.changedTouches[cb].identifier == Xb) {
              const sb = bb.changedTouches[cb],
                kb = [sb.clientX - fb, sb.clientY - Mb];
              return fb = sb.clientX, Mb = sb.clientY, kb
            } return console.error(`Did not find touch id ${Xb}`), [0, 0]
        }(cb);
        sb = Wb[0], kb = Wb[1]
      }
      bb.YG.dx += sb, bb.YG.dy += kb
    }

    function Nb(bb, cb) {
      hb(bb, cb);
      var sb = 1;
      switch (cb.deltaMode) {
        case 0:
          sb = 1;
          break;
        case 1:
          sb = 12;
          break;
        case 2:
          sb = bb.element.clientHeight || window.innerHeight
      }
      bb.YG.ubb += (cb.deltaX || 0) * sb, bb.YG.Ybb += (cb.deltaY || 0) * sb, bb.YG.hbb += (cb.deltaZ || 0) * sb
    }

    function Vb(bb, cb) {
      if (!bb.lG) return cb.preventDefault(), !1
    }
    var Lb = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function ub(bb, cb) {
      return !!bb[Lb[cb]] || ("AltRight" === cb || "ControlLeft" === cb) && "function" === typeof bb.getModifierState && !0 === bb.getModifierState("AltGraph")
    }

    function Yb(bb, cb) {
      for (var sb in bb._modifiersHeldThroughBlur = {}, Lb) bb._keyStates[sb] && (bb._modifiersHeldThroughBlur[sb] = !0);
      cb && cb.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (bb) {
          return !0
        }
      }() && (clearTimeout(bb._blurRelease), bb._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var cb in bb._modifiersHeldThroughBlur = {}, bb._keyStates) bb._keyStates[cb] && !/^Mouse\d/.test(cb) && Jb(bb, cb)
      }), 0))
    }

    function hb(bb, cb) {
      var sb = bb._modifiersHeldThroughBlur;
      if (sb && cb.isTrusted && document.hasFocus())
        for (var kb in sb) delete sb[kb], bb._keyStates[kb] && kb !== cb.code && (ub(cb, kb) || Jb(bb, kb))
    }

    function Jb(bb, cb) {
      const sb = {
          code: cb,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        kb = Wb;
      Wb = sb;
      try {
        gb(cb, !1, bb, sb)
      } finally {
        Wb = kb
      }
    }

    function gb(bb, cb, sb, kb) {
      var Wb = sb._keyBindmap[bb];
      Wb && (Bb(sb._keyStates[bb], cb) && (sb._keyStates[bb] = cb, Wb.forEach((bb => {
        (!sb.filterEvents || sb.filterEvents(kb, bb)) && function(bb, cb, sb, kb) {
          var Wb = cb ? sb.pressCount : sb.releaseCount;
          Wb[bb] = (Wb[bb] || 0) + 1;
          var ab = sb._bindPressCount[bb] || 0;
          (ab += cb ? 1 : -1) < 0 && (ab = 0);
          sb._bindPressCount[bb] = ab;
          var Tb = sb.state[bb];
          if (Bb(Tb, ab)) {
            sb.state[bb] = ab > 0;
            var Ub = cb ? sb.down : sb.up;
            sb.disabled || Ub.emit(bb, kb)
          }
        }(bb, cb, sb, kb)
      }))), "button" in kb || (sb.mG && !kb.defaultPrevented && kb.preventDefault(), sb.stopPropagation && kb.stopPropagation()))
    }

    function Bb(bb, cb) {
      return bb ? !cb : cb
    }
  },
  36323: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => nb,
      d: () => mb
    });
    var kb = sb(64),
      Wb = sb(2749),
      ab = sb(1423),
      Tb = sb(1912),
      Ub = sb(36263),
      Ib = sb(628),
      Hb = sb(1033),
      fb = sb.n(Hb),
      Mb = sb(1087);
    const Xb = {},
      nb = (0, kb.memo)((function() {
        const bb = (0, Wb.b)();
        return (0, ab.f)("damagedByOtherPlayer", (cb => {
          let {
            Vk: sb,
            direction: kb
          } = cb;
          const Wb = sb || "nonDirectional";
          if (Xb[Wb]) {
            const cb = Xb[Wb];
            clearTimeout(cb.timeout), cb.direction = kb, cb.timeout = setTimeout((() => {
              delete Xb[Wb], bb()
            }), 800)
          } else Xb[Wb] = {
            direction: kb,
            Wy: null,
            timeout: setTimeout((() => {
              delete Xb[Wb], bb()
            }), 800)
          };
          bb()
        })), (0, Tb.c)("kill", (cb => {
          let {
            killer: sb,
            victim: kb
          } = cb;
          const Wb = kb.id;
          sb.local && Wb && Wb in Xb && (clearTimeout(Xb[Wb].timeout), delete Xb[Wb], bb())
        })), (0, kb.useEffect)((() => {
          const bb = (0, Ub.i)("turnDamageIndicators", mb);
          return () => {
            bb();
            for (const bb in Xb) clearTimeout(Xb[bb].timeout), delete Xb[bb]
          }
        }), []), (0, Mb.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(Xb).map((bb => {
            let [cb, sb] = bb;
            const kb = (0, Ib.L)(sb.direction);
            return (0, Mb.jsx)("div", {
              ref: bb => {
                Xb[cb] && (Xb[cb].Wy = bb)
              },
              className: fb()("DamageIndicator", {
                DamageIndicatorFullCircle: kb
              })
            }, cb)
          }))
        })
      }));

    function mb(bb) {
      for (const cb in Xb) {
        const {
          direction: sb,
          Wy: kb
        } = Xb[cb];
        if ((0, Ib.L)(sb)) continue;
        const Wb = sb - bb;
        kb.style.rotate = `${Wb}rad`
      }
    }
  },
  36151: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb,
      c: () => ab
    });
    let kb = !1;

    function Wb() {
      return kb
    }

    function ab(bb) {
      return kb !== bb && (kb = bb, !0)
    }
  },
  8867: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      f: () => Wb
    });
    var kb = sb(19);

    function Wb(bb, cb) {
      return bb && !cb
    }

    function ab() {
      return Wb(kb.d.get("isTouchScreen"), kb.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  40103: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      startPadGameplay: () => Vb
    });
    sb(39969);
    var kb = sb(39971),
      Wb = sb(3565),
      ab = sb(19),
      Tb = sb(38644),
      Ub = sb(3470),
      Ib = sb(38665),
      Hb = sb(26),
      fb = sb(2612),
      Mb = sb(38036),
      Xb = sb(8468),
      nb = sb(39977);
    const mb = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var lb = sb(39998),
      Qb = sb(8442);
    const eb = bb => bb.padSneakToggled || !!ab.d.get("clientEscMenuOptions").crouchIsToggle && bb.crouchToggled,
      Cb = () => {
        const bb = (() => {
          const bb = (0, Xb.d)();
          let cb = mb;
          const sb = new nb.c;
          let kb = !1,
            Wb = 0;
          const ab = () => {
            const sb = performance.now(),
              ab = 0 === Wb ? 0 : sb - Wb;
            if (Wb = sb, !kb) return bb.discardPending(), null;
            const Tb = (0, nb.j)(cb, ab),
              Ub = bb.drainLookDelta(),
              Ib = (0, Mb.i)();
            return {
              Eu: (Tb.Eu + Ub.Eu) * Ib,
              bY: (Tb.bY + Ub.bY) * Ib
            }
          };
          return {
            update: (bb, Wb, Tb, Ub) => {
              bb.camera.xZ !== ab && (bb.camera.xZ = ab), kb = !0, cb = (0, nb.m)(sb, Wb, Tb, Ub, performance.now())
            },
            release: () => {
              kb = !1, cb = mb, sb.reset()
            },
            uninstall: bb => {
              bb.camera.xZ === ab && (bb.camera.xZ = null)
            }
          }
        })();
        return {
          update: (cb, sb, kb) => {
            bb.update((0, fb.e)(), cb, sb, kb)
          },
          release: bb.release,
          uninstall: () => {
            const cb = (0, fb.e)();
            cb && bb.uninstall(cb)
          }
        }
      };
    var Nb = sb(39989);
    sb(37250), sb(8345);
    sb(8359).e;
    const Vb = () => {
      const bb = (0, Nb.d)((() => {
          const bb = {
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
            bodies: () => (0, Tb.b)(),
            look: Cb(),
            move: (cb, sb) => {
              const kb = (0, fb.e)(),
                Wb = kb.zN.ecb();
              if (bb.x = cb.x, bb.y = cb.y, bb.magnitude = cb.magnitude, bb.headingOffset = cb.headingOffset, bb.jumpHeld = cb.jumpHeld, cb.jumpPressed && (bb.jumpPressedSinceTick = !0), bb.running = cb.running, bb.sprintHeld = cb.sprintHeld, sb) {
                const cb = (0, lb.f)({
                  ...sb,
                  descending: kb.zN.Cbb(kb.yJ).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!kb.iN.canCrouch,
                  toggled: eb(Wb)
                });
                bb.crouchHeld = cb.crouchHeld, Wb.padSneakToggled = cb.toggled, Wb.crouchToggled = !1, (0, Qb.h)(cb.toggled)
              }
              Wb.gamepad = bb
            },
            stopMoving: () => {
              var cb;
              Object.assign(bb, {
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
              const sb = null === (cb = (0, fb.e)()) || void 0 === cb ? void 0 : cb.zN.ecb();
              (null === sb || void 0 === sb ? void 0 : sb.gamepad) === bb && (sb.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: bb => {
              const cb = (0, fb.e)(),
                sb = null === cb || void 0 === cb ? void 0 : cb.zN.ecb();
              "touch" === bb ? ((0, Qb.h)(!1), null !== sb && void 0 !== sb && sb.padSneakToggled && (sb.padSneakToggled = !1, sb.isTouchscreen && !sb.gamepad && cb.zN.qbb(cb.yJ).setCrouching(!!cb.iN.canCrouch && sb.touchCrouch))) : "gamepad" === bb && sb && (0, Qb.h)(eb(sb))
            },
            hasPlayer: () => {
              var bb;
              return !(null === (bb = (0, fb.e)()) || void 0 === bb || !bb.yJ)
            },
            isPlayerDead: () => {
              var bb;
              const cb = (0, fb.e)();
              return !1 === (null === (bb = cb.zN.fcb(cb.yJ)) || void 0 === bb ? void 0 : bb.isAlive)
            },
            isReplayMode: () => {
              var bb, cb;
              return !(null === (bb = (0, fb.d)()) || void 0 === bb || null === (cb = bb.client) || void 0 === cb || !cb.isReplayMode())
            },
            isFreeCameraOn: () => {
              var bb, cb, sb;
              return !(null === (bb = (0, fb.d)()) || void 0 === bb || null === (cb = bb.client) || void 0 === cb || null === (sb = cb.freeCameraController) || void 0 === sb || !sb.isEnabled())
            },
            targetsBlock: () => !!(0, fb.e)().E_,
            selectedSlotEmpty: () => {
              var bb;
              const cb = (0, fb.e)();
              return !(null !== (bb = cb.zN.wbb(cb.yJ)) && void 0 !== bb && bb.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const bb = (0, fb.e)().iN;
              return !!bb.creative && !!bb.canPickBlocks
            },
            scrollHotbar: bb => {
              Hb.j.QQ("ScrollInventorySlot", bb)
            },
            hasFullInventory: () => (0, Ib.c)((0, fb.e)()),
            hasLobbyLeaderboard: () => !!(0, fb.e)().iN.lobbyLeaderboardInfo,
            contextActionInputs: () => {
              var bb, cb, sb, kb;
              const Wb = (0, fb.e)();
              return {
                holdingGun: !(null === (bb = Wb.zN.Mcb(Wb.yJ)) || void 0 === bb || null === (cb = bb.VV) || void 0 === cb || !cb.isGun()),
                customButtons: null !== (sb = Wb.iN.customButtons) && void 0 !== sb ? sb : null,
                touchscreenActionButton: null !== (kb = Wb.iN.touchscreenActionButton) && void 0 !== kb ? kb : null
              }
            },
            pressTouchButton: bb => {
              (0, Ub.sendColyMessage)(Wb.Qj, bb)
            }
          }
        })()),
        cb = (0, kb.e)(),
        sb = null,
        ab = null;
      return () => {
        bb(), cb(), null === sb || void 0 === sb || sb(), null === ab || void 0 === ab || ab()
      }
    }
  },
  36247: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      g: () => lb,
      i: () => Qb,
      l: () => Ub,
      n: () => Xb,
      o: () => eb,
      q: () => Mb,
      s: () => Nb,
      v: () => mb,
      z: () => Cb
    });
    var kb = sb(19),
      Wb = sb(26);
    const ab = "clientGameInventoryButtonsChanged",
      Tb = new Map;

    function Ub() {
      return [...Tb.values()].sort(((bb, cb) => {
        var sb, kb;
        return (null !== (sb = bb.order) && void 0 !== sb ? sb : 0) - (null !== (kb = cb.order) && void 0 !== kb ? kb : 0)
      }))
    }
    let Ib = null;

    function Hb(bb) {
      Ib = bb
    }
    let fb = !1;

    function Mb(bb) {
      fb = !0;
      try {
        bb.onClick()
      } finally {
        fb = !1
      }
      bb.panel && "clientGame" === kb.d.get("openInGameMenuName") && Hb(bb.id)
    }

    function Xb() {
      return fb
    }

    function nb() {
      return Ub().filter((bb => bb.panel && !bb.disabled))
    }

    function mb(bb) {
      const cb = nb(),
        sb = cb.findIndex((bb => bb.id === Ib));
      return !(sb < 0 || cb.length < 2) && (Mb(cb[(sb + bb + cb.length) % cb.length]), !0)
    }

    function lb() {
      return null !== Ib && nb().length > 1
    }

    function Qb() {
      Hb(null)
    }

    function eb() {
      "inventory" !== kb.d.get("openInGameMenuName") && Hb(null)
    }

    function Cb() {
      const bb = Ib;
      return Hb(null), bb
    }

    function Nb(bb) {
      return Tb.set(bb.id, bb), Wb.j.QQ(ab, Ub(), !0), () => {
        Tb.get(bb.id) === bb && (Tb.delete(bb.id), Wb.j.QQ(ab, Ub()))
      }
    }
  },
  36240: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ub,
      e: () => Qb,
      g: () => eb,
      i: () => Xb,
      l: () => Hb,
      m: () => lb,
      p: () => nb,
      s: () => fb
    });
    var kb = sb(19),
      Wb = sb(26),
      ab = sb(1287),
      Tb = sb(36247);
    const Ub = "clientGameUiChanged";
    let Ib = null;

    function Hb() {
      return Ib
    }

    function fb(bb, cb) {
      const sb = {
        content: bb,
        menu: cb
      };
      return Ib = sb, Wb.j.QQ(Ub, Ib, !0), () => {
        Ib === sb && (Ib = null, mb = !1, Qb(), Wb.j.QQ(Ub, null))
      }
    }
    let Mb = null;

    function Xb() {
      return Mb
    }

    function nb(bb) {
      return Mb = bb, () => {
        Mb === bb && (Mb = null)
      }
    }
    let mb = !1;

    function lb() {
      const bb = kb.d.get("openInGameMenuName");
      "clientGame" !== bb && (mb = "inventory" === bb), (0, Tb.n)() || (0, Tb.i)(), (0, ab.n)(ab.b), kb.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Qb() {
      Cb(!1)
    }

    function eb() {
      Cb(mb)
    }

    function Cb(bb) {
      "clientGame" === kb.d.get("openInGameMenuName") && kb.d.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Tb.i)(), mb = !1
    }
  },
  36142: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Ib
    });
    var kb = sb(334),
      Wb = sb(19),
      ab = sb(36151),
      Tb = sb(1626),
      Ub = sb(1917);

    function Ib(bb, cb) {
      var sb, Ib, Hb;
      if (!Wb.d.get("isKeydownEnabled") || bb.repeat) return;
      const fb = bb.code;
      "Escape" === bb.key ? (0, Tb.i)(bb) : null !== (sb = Ub.v.OpenSettings) && void 0 !== sb && sb.includes(fb) ? (0, Tb.v)(bb, kb.r.SETTINGS) : null !== (Ib = Ub.v.OpenCharacterCustomization) && void 0 !== Ib && Ib.includes(fb) ? (0, ab.b)() || (0, Tb.v)(bb, kb.r.CUSTOMISATION, cb()) : null !== (Hb = Ub.v.ShowDebugOverlay) && void 0 !== Hb && Hb.includes(fb) && Wb.d.set({
        showDebugOverlay: !Wb.d.get("showDebugOverlay")
      })
    }
  },
  36120: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Xb,
      i: () => fb,
      m: () => nb,
      n: () => Mb
    });
    var kb = sb(344),
      Wb = sb(664),
      ab = sb(670),
      Tb = sb(37);
    const Ub = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Ib = "playSessionGameNameWithVariation",
      Hb = "wasMatchmakePlayer";

    function fb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb.i;
      (0, ab.j)(bb, Ub)
    }

    function Mb() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb.i).setItem(Hb, !0)
    }

    function Xb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb.i;
      return (0, ab.d)(bb, Ub)
    }

    function nb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tb.i;
      const sb = (0, ab.d)(cb, Ub),
        fb = function(bb) {
          const cb = bb.getItem(Ib);
          return "string" !== typeof cb ? null : cb
        }(cb),
        Mb = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb.i).getItem(Hb)
        }(cb);
      let Xb;
      return Xb = null !== sb && null !== fb && (0, ab.f)(cb, Ub) && function(bb, cb, sb) {
          const Wb = (0, kb.Wb)(bb),
            ab = (0, kb.Wb)(cb),
            Tb = (0, kb.Qb)(bb),
            Ub = (0, kb.Qb)(cb);
          return !(Wb !== ab || !sb) || Wb === ab && Tb === Ub
        }(fb, bb, Mb) ? sb : (0, Wb.d)(), (0, ab.n)(cb, Ub, Xb), cb.setItem(Ib, bb),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb.i).removeItem(Hb)
        }(cb), Xb
    }
  },
  36112: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Cb,
      i: () => Nb
    });
    var kb = sb(1008),
      Wb = sb(635),
      ab = sb(344),
      Tb = sb(1013),
      Ub = sb(649),
      Ib = sb(683),
      Hb = sb(4257),
      fb = sb(117),
      Mb = sb(167),
      Xb = sb(1704),
      nb = sb(137),
      mb = sb(36120),
      lb = sb(37),
      Qb = sb(667),
      eb = sb(36127);

    function Cb() {
      var bb, cb;
      return [...null !== (bb = navigator.languages) && void 0 !== bb ? bb : [null !== (cb = navigator.language) && void 0 !== cb ? cb : "none"], "en-Gb"]
    }

    function Nb(bb, cb, sb, Nb, Vb) {
      const Lb = (0, kb.k)(cb) ? (0, kb.s)(cb) : null,
        ub = {
          cookies: (0, Xb.getAllCookiesForGameNameWithVariation)(cb),
          isMobile: (0, fb.isMobile)(),
          isUsingCustomGameTexturePack: null !== Lb && Vb(Lb),
          generalCookies: {
            joinDiscord: !!lb.h.getItem("DiscordPressed"),
            newGo: Hb.b,
            ...bb.getMetricsCookies(),
            trafficCode: Nb,
            compliance: fb.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, fb.getBrowserName)(),
            version: (0, fb.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, fb.getPlatformType)(),
            deviceType: (0, nb.c)()
          },
          isLoggedIn: bb.isLoggedIn(),
          lobbyName: sb,
          languages: Cb(),
          version: Wb.d,
          siteUsed: Mb.r,
          subsiteUsed: Mb.y,
          playSessionId: (0, mb.m)(cb),
          visitSessionId: (0, Qb.c)(),
          clientReason: Ub.n.reason,
          budgetBasis: (0, eb.f)(),
          ...null !== Ib.l && {
            diagClaim: Ib.l.claimId
          }
        };
      return null !== Lb && (0, ab.Fc)(Lb) ? (ub.lobbyName = (0, kb.i)(Lb, (0, kb.o)(cb), sb), {
        roomName: `classic_${Tb.f}`,
        joinOptions: ub
      }) : {
        roomName: cb,
        joinOptions: ub
      }
    }
  },
  36139: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb,
      h: () => Wb,
      k: () => ab
    });
    const kb = 1024,
      Wb = 1024 * kb;

    function ab(bb) {
      return (bb / Wb).toFixed(1)
    }
  },
  36134: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      d: () => Ub,
      e: () => Tb,
      g: () => Ib,
      h: () => Hb
    });
    var kb = sb(223);
    const Wb = 32 * sb(36139).h,
      ab = 6144,
      Tb = 4608,
      Ub = 512;

    function Ib(bb) {
      return Math.floor(Wb * bb / ab)
    }

    function Hb(bb) {
      const cb = bb - Math.floor(bb / 6);
      let sb = kb.e.maxChunkHorizAddDistance,
        Wb = kb.e.maxChunkVertAddDistance;
      if (fb(sb + 1, Wb + 1) <= cb) return null;
      for (; fb(sb + 1, Wb + 1) > cb && (sb > 0 || Wb > 0);) sb > Wb ? sb-- : Wb--;
      return {
        horizontal: sb,
        vertical: Wb
      }
    }

    function fb(bb, cb) {
      const sb = Math.max(bb, cb);
      let kb = 0;
      for (let Wb = -sb; Wb <= sb; Wb++)
        for (let ab = -sb; ab <= sb; ab++)
          for (let Tb = -sb; Tb <= sb; Tb++) Mb(bb, cb, Wb, ab, Tb) && kb++;
      return kb
    }

    function Mb(bb, cb, sb, kb, Wb) {
      const ab = sb * sb + Wb * Wb;
      return bb === cb ? ab + kb * kb <= bb * bb : bb > cb ? Math.abs(kb) <= cb && ab + kb * kb <= bb * bb : ab <= bb * bb && ab + kb * kb <= cb * cb
    }
  },
  36127: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ub,
      f: () => Lb,
      g: () => Vb
    });
    var kb = sb(223),
      Wb = sb(117),
      ab = sb(2693),
      Tb = sb(4146),
      Ub = sb(656),
      Ib = sb(36134);
    const Hb = 1048576,
      fb = 1024 * Hb,
      Mb = 400 * Hb,
      Xb = 147456,
      nb = .5,
      mb = 1.5 * fb,
      lb = 768 * Hb;

    function Qb(bb) {
      return Mb + bb * Xb
    }

    function eb(bb, cb, sb) {
      var Wb, Tb;
      let {
        footprintBytes: Ub,
        basis: Hb,
        namesLimit: eb
      } = function(bb) {
        const {
          os: cb,
          deviceMemory: sb
        } = bb;
        if ("ios" === cb) switch ((0, ab.g)(bb)) {
          case "ipad_m":
            return {
              footprintBytes: Qb(Ib.c), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: lb, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: mb, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: lb, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof sb && Number.isFinite(sb) && sb > 0 ? {
          footprintBytes: sb * fb * nb,
          basis: `memory-${sb}`,
          namesLimit: !0
        } : "android" === cb ? {
          footprintBytes: lb,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: Qb(Ib.e),
          basis: "unreported",
          namesLimit: !1
        }
      }(bb);
      if (sb) {
        const bb = Math.min(Ub, Qb(Ib.c));
        Ub = Mb + Math.max(0, bb - Mb) / 2, Hb += "+killed", eb = !0
      }
      null !== cb && Qb(cb) < Ub && (Ub = Qb(cb), Hb += "+learned", eb = !0);
      const Cb = function(bb) {
          const cb = Math.floor((bb - Mb) / Xb);
          return Math.min(Ib.c, Math.max(Ib.d, cb))
        }(Ub),
        Nb = (0, Ib.h)(Cb);
      return {
        footprintBytes: Ub,
        shedFootprintBytes: eb ? Math.max(Ub, Qb(Cb)) : null,
        chunkCap: Cb,
        maxHorizDistance: null !== (Wb = null === Nb || void 0 === Nb ? void 0 : Nb.horizontal) && void 0 !== Wb ? Wb : kb.e.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Tb = null === Nb || void 0 === Nb ? void 0 : Nb.vertical) && void 0 !== Tb ? Tb : kb.e.maxChunkVertAddDistance,
        basis: Hb
      }
    }
    let Cb = null;

    function Nb() {
      return eb({
        os: (0, Wb.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, ab.k)()
      }, (0, Tb.d)(), (0, Ub.A)("wasm").length > 0)
    }

    function Vb() {
      return Cb ??= Nb(), Cb
    }

    function Lb() {
      var bb;
      return (null !== (bb = Cb) && void 0 !== bb ? bb : Nb()).basis
    }

    function ub(bb, cb) {
      return bb.setChunkCap(cb.chunkCap)
    }
  },
  36434: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb,
      e: () => ab,
      f: () => Xb,
      j: () => Ub,
      l: () => Ib,
      o: () => Hb,
      r: () => Mb,
      t: () => fb,
      v: () => Tb
    });
    var kb = sb(1253);
    let Wb = function(bb) {
        return bb[bb.Join = 0] = "Join", bb[bb.Leave = 1] = "Leave", bb[bb.Push = 2] = "Push", bb[bb.Cursor = 3] = "Cursor", bb[bb.Submit = 4] = "Submit", bb[bb.ReloadAsVariation = 5] = "ReloadAsVariation", bb[bb.CreateFile = 6] = "CreateFile", bb[bb.RenameFile = 7] = "RenameFile", bb[bb.DeleteFile = 8] = "DeleteFile", bb[bb.SetEngine = 9] = "SetEngine", bb[bb.RenameFolder = 10] = "RenameFolder", bb
      }({}),
      ab = function(bb) {
        return bb[bb.Joined = 0] = "Joined", bb[bb.Updates = 1] = "Updates", bb[bb.Presence = 2] = "Presence", bb[bb.RemoteCursor = 3] = "RemoteCursor", bb[bb.ForceClose = 4] = "ForceClose", bb[bb.LobbyFilesChanged = 5] = "LobbyFilesChanged", bb[bb.EngineSettings = 6] = "EngineSettings", bb
      }({});

    function Tb(bb) {
      return "lobby" === bb.kind ? `lobby:${bb.path}` : `codeBlock:${bb.pos[0]},${bb.pos[1]},${bb.pos[2]}`
    }

    function Ub(bb) {
      if ("lobby" === bb) return {
        kind: "lobby",
        path: kb.f
      };
      if (bb.startsWith("lobby:")) {
        const cb = bb.slice(6);
        return Mb(cb) ? {
          kind: "lobby",
          path: cb
        } : null
      }
      const cb = bb.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return cb ? {
        kind: "codeBlock",
        pos: [parseInt(cb[1]), parseInt(cb[2]), parseInt(cb[3])]
      } : null
    }

    function Ib(bb) {
      return bb.endsWith(".d.ts")
    }

    function Hb(bb) {
      return bb.endsWith(".ts") && !Ib(bb)
    }
    const fb = 64;

    function Mb(bb) {
      if (!bb || bb !== bb.trim()) return !1;
      if (bb.length > fb) return !1;
      if (bb.startsWith("/") || bb.includes("\\") || bb.includes("\0")) return !1;
      if (!Ib(bb) && !Hb(bb) && ! function(bb) {
          return bb.endsWith(".js") && !bb.endsWith(".min.js") && !bb.endsWith(".bundle.js")
        }(bb)) return !1;
      const cb = bb.split("/");
      for (const sb of cb)
        if ("" === sb || "." === sb || ".." === sb) return !1;
      return !0
    }
    const Xb = 14e3
  },
  38599: (bb, cb, sb) => {
    function kb(bb, cb, sb, kb, Wb) {
      var ab = {};
      return Object.keys(kb).forEach((function(bb) {
        ab[bb] = kb[bb]
      })), ab.enumerable = !!ab.enumerable, ab.configurable = !!ab.configurable, ("value" in ab || ab.initializer) && (ab.writable = !0), ab = sb.slice().reverse().reduce((function(sb, kb) {
        return kb(bb, cb, sb) || sb
      }), ab), Wb && void 0 !== ab.initializer && (ab.value = ab.initializer ? ab.initializer.call(Wb) : void 0, ab.initializer = void 0), void 0 === ab.initializer && (Object.defineProperty(bb, cb, ab), ab = null), ab
    }
    sb.d(cb, {
      b: () => kb
    })
  },
  38594: (bb, cb, sb) => {
    function kb(bb, cb, sb, kb) {
      sb && Object.defineProperty(bb, cb, {
        enumerable: sb.enumerable,
        configurable: sb.configurable,
        writable: sb.writable,
        value: sb.initializer ? sb.initializer.call(kb) : void 0
      })
    }
    sb.d(cb, {
      b: () => kb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
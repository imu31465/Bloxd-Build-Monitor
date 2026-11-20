export const id = 189;
export const ids = [189];
export const modules = {
  38735: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Lb,
      f: () => Gb
    });
    var Bb = hb(3877);
    let Ob = null;

    function Gb(bb) {
      return null !== Ob && bb === Ob
    }

    function Ub() {
      this.vy = !1, this.stopPropagation = !1, this.Iy = !1, this.disabled = !1
    }
    class Lb {
      constructor(bb, ub) {
        this.version = "0.7.0";
        var hb = Object.assign({}, new Ub, ub || {});
        this.element = bb || document, this.vy = !!hb.vy, this.stopPropagation = !!hb.stopPropagation, this.Iy = !!hb.Iy, this.disabled = !!hb.disabled, this.filterEvents = (bb, ub) => !0, this.ignoreEvent = bb => !1, this.down = new Bb.EventEmitter, this.up = new Bb.EventEmitter, this.state = {}, this.Fy = {
          dx: 0,
          dy: 0,
          Uub: 0,
          Lub: 0,
          Yub: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Sb(this) : document.addEventListener("DOMContentLoaded", (bb => {
          Sb(this)
        }), {
          once: !0
        })
      }
      bind(bb) {
        for (var ub = arguments.length, hb = new Array(ub > 1 ? ub - 1 : 0), Bb = 1; Bb < ub; Bb++) hb[Bb - 1] = arguments[Bb];
        hb.forEach((ub => {
          var hb = this._keyBindmap[ub] || [];
          hb.includes(bb) || (hb.push(bb), this._keyBindmap[ub] = hb)
        })), this.state[bb] = !!this.state[bb], this.pressCount[bb] = this.pressCount[bb] || 0, this.releaseCount[bb] = this.releaseCount[bb] || 0
      }
      unbind(bb) {
        for (var ub in this._keyBindmap) {
          var hb = this._keyBindmap[ub],
            Bb = hb.indexOf(bb);
          Bb > -1 && hb.splice(Bb, 1)
        }
      }
      getBindings() {
        var bb = {};
        for (var ub in this._keyBindmap) {
          this._keyBindmap[ub].forEach((hb => {
            bb[hb] = bb[hb] || [], bb[hb].push(ub)
          }))
        }
        return bb
      }
      gH() {
        Yb(this.Fy), Yb(this.pressCount), Yb(this.releaseCount)
      }
    }

    function Yb(bb) {
      for (var ub in bb) bb[ub] = 0
    }

    function Sb(bb) {
      window.addEventListener("keydown", ob.bind(null, bb, !0), !1), window.addEventListener("keyup", ob.bind(null, bb, !1), !1);
      var ub = {
        passive: !0
      };
      bb.element.addEventListener("touchstart", Zb.bind(void 0, bb), {
        passive: !1
      }), bb.element.addEventListener("touchend", pb.bind(void 0, bb), ub), bb.element.addEventListener("mousedown", Ab.bind(null, bb, !0), ub), window.document.addEventListener("mouseup", Ab.bind(null, bb, !1), ub), bb.element.addEventListener("touchmove", lb.bind(null, bb), ub), bb.element.addEventListener("mousemove", lb.bind(null, bb), ub), window.PointerEvent, bb.element.addEventListener("wheel", Kb.bind(null, bb), ub), bb.element.addEventListener("contextmenu", Wb.bind(null, bb), !1), window.addEventListener("blur", rb.bind(null, bb), !1)
    }
    var ab = 0,
      Hb = 0,
      wb = null;

    function Zb(bb, ub) {
      ub.preventDefault(), Xb(ub)
    }

    function Xb(bb) {
      let ub = !1;
      for (let hb = 0; hb < bb.touches.length; ++hb)
        if (bb.touches[hb].identifier === wb) {
          ub = !0;
          break
        } if (!ub) {
        const ub = bb.changedTouches[0];
        ab = ub.clientX, Hb = ub.clientY, wb = ub.identifier
      }
    }

    function pb(bb, ub) {
      for (var hb = ub.changedTouches, Bb = 0; Bb < hb.length; ++Bb) hb[Bb].identifier === wb && (wb = null)
    }

    function ob(bb, ub, hb) {
      if (!bb.ignoreEvent(hb)) try {
        jb(bb, hb), ub && hb.isTrusted && !hb.repeat && bb._keyStates[hb.code] && nb(bb, hb.code)
      } finally {
        Db(hb.code, ub, bb, hb)
      }
    }

    function Ab(bb, ub, hb) {
      if (!bb.ignoreEvent(hb)) try {
        jb(bb, hb)
      } finally {
        ! function(bb, ub, hb) {
          if ("pointerId" in hb)
            if (ub) {
              if (null !== bb._touches.currID) return;
              bb._touches.currID = hb.pointerId
            } else {
              if (bb._touches.currID !== hb.pointerId) return;
              bb._touches.currID = null
            } var Bb = "button" in hb ? hb.button + 1 : 1;
          Db("Mouse" + Bb, ub, bb, hb)
        }(bb, ub, hb)
      }
    }

    function lb(bb, ub) {
      var hb = ub.movementX || ub.mozMovementX || 0,
        Bb = ub.movementY || ub.mozMovementY || 0;
      if (ub.touches && 0 === (hb | Bb)) {
        var Ob = function(bb) {
          Xb(bb);
          for (let ub = 0; ub < bb.changedTouches.length; ++ub)
            if (bb.changedTouches[ub].identifier == wb) {
              const hb = bb.changedTouches[ub],
                Bb = [hb.clientX - ab, hb.clientY - Hb];
              return ab = hb.clientX, Hb = hb.clientY, Bb
            } return console.error(`Did not find touch id ${wb}`), [0, 0]
        }(ub);
        hb = Ob[0], Bb = Ob[1]
      }
      bb.Fy.dx += hb, bb.Fy.dy += Bb
    }

    function Kb(bb, ub) {
      jb(bb, ub);
      var hb = 1;
      switch (ub.deltaMode) {
        case 0:
          hb = 1;
          break;
        case 1:
          hb = 12;
          break;
        case 2:
          hb = bb.element.clientHeight || window.innerHeight
      }
      bb.Fy.Uub += (ub.deltaX || 0) * hb, bb.Fy.Lub += (ub.deltaY || 0) * hb, bb.Fy.Yub += (ub.deltaZ || 0) * hb
    }

    function Wb(bb, ub) {
      if (!bb.Iy) return ub.preventDefault(), !1
    }
    var Cb = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function db(bb, ub) {
      return !!bb[Cb[ub]] || ("AltRight" === ub || "ControlLeft" === ub) && "function" === typeof bb.getModifierState && !0 === bb.getModifierState("AltGraph")
    }

    function rb(bb, ub) {
      for (var hb in bb._modifiersHeldThroughBlur = {}, Cb) bb._keyStates[hb] && (bb._modifiersHeldThroughBlur[hb] = !0);
      ub && ub.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (bb) {
          return !0
        }
      }() && (clearTimeout(bb._blurRelease), bb._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var ub in bb._modifiersHeldThroughBlur = {}, bb._keyStates) bb._keyStates[ub] && !/^Mouse\d/.test(ub) && nb(bb, ub)
      }), 0))
    }

    function jb(bb, ub) {
      var hb = bb._modifiersHeldThroughBlur;
      if (hb && ub.isTrusted && document.hasFocus())
        for (var Bb in hb) delete hb[Bb], bb._keyStates[Bb] && Bb !== ub.code && (db(ub, Bb) || nb(bb, Bb))
    }

    function nb(bb, ub) {
      const hb = {
          code: ub,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Bb = Ob;
      Ob = hb;
      try {
        Db(ub, !1, bb, hb)
      } finally {
        Ob = Bb
      }
    }

    function Db(bb, ub, hb, Bb) {
      var Ob = hb._keyBindmap[bb];
      Ob && (xb(hb._keyStates[bb], ub) && (hb._keyStates[bb] = ub, Ob.forEach((bb => {
        (!hb.filterEvents || hb.filterEvents(Bb, bb)) && function(bb, ub, hb, Bb) {
          var Ob = ub ? hb.pressCount : hb.releaseCount;
          Ob[bb] = (Ob[bb] || 0) + 1;
          var Gb = hb._bindPressCount[bb] || 0;
          (Gb += ub ? 1 : -1) < 0 && (Gb = 0);
          hb._bindPressCount[bb] = Gb;
          var Ub = hb.state[bb];
          if (xb(Ub, Gb)) {
            hb.state[bb] = Gb > 0;
            var Lb = ub ? hb.down : hb.up;
            hb.disabled || Lb.emit(bb, Bb)
          }
        }(bb, ub, hb, Bb)
      }))), "button" in Bb || (hb.vy && !Bb.defaultPrevented && Bb.preventDefault(), hb.stopPropagation && Bb.stopPropagation()))
    }

    function xb(bb, ub) {
      return bb ? !ub : ub
    }
  },
  36296: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => pb,
      f: () => ob
    });
    var Bb = hb(49),
      Ob = hb(1348),
      Gb = hb(1857),
      Ub = hb(36234),
      Lb = hb(588),
      Yb = hb(958),
      Sb = hb.n(Yb),
      ab = hb(1007);
    const Hb = [wb()];

    function wb() {
      return {
        source: null,
        direction: null,
        JI: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function Zb(bb) {
      return Hb.find((ub => null !== ub.source && ub.source === bb))
    }

    function Xb(bb) {
      clearTimeout(bb.timeout), bb.source = null, bb.direction = null, bb.writtenAngle = null, bb.JI && (bb.JI.style.rotate = "")
    }
    const pb = (0, Bb.memo)((function() {
      const [, bb] = (0, Bb.useReducer)((bb => bb + 1), 0);
      return (0, Ob.h)("damagedByOtherPlayer", (ub => {
        let {
          DB: hb,
          direction: Bb
        } = ub;
        const Ob = hb || "nonDirectional",
          Gb = function(bb) {
            var ub;
            const hb = null !== (ub = Zb(bb)) && void 0 !== ub ? ub : Hb.find((bb => null === bb.source));
            if (hb) return hb;
            const Bb = {
              source: null,
              direction: null,
              JI: null,
              timeout: void 0,
              writtenAngle: null
            };
            return Hb.push(Bb), Bb
          }(Ob);
        clearTimeout(Gb.timeout), Gb.source = Ob, Gb.direction = Bb, Gb.timeout = setTimeout((() => {
          Xb(Gb), bb()
        }), 800), bb()
      })), (0, Gb.d)("kill", (ub => {
        let {
          killer: hb,
          victim: Bb
        } = ub;
        const Ob = hb.local && Zb(Bb.id);
        Ob && (Xb(Ob), bb())
      })), (0, Bb.useEffect)((() => {
        const bb = (0, Ub.d)("turnDamageIndicators", ob);
        return () => {
          bb(), Hb.forEach(Xb)
        }
      }), []), (0, ab.jsx)("div", {
        className: "DirectionalDamage",
        children: Hb.map(((bb, ub) => (0, ab.jsx)("div", {
          ref: ub => {
            bb.JI = ub
          },
          className: Sb()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, Lb.J)(bb.direction),
            DamageIndicatorIdle: null === bb.source
          })
        }, ub)))
      })
    }));

    function ob(bb) {
      for (const ub of Hb) {
        if (null === ub.source || (0, Lb.J)(ub.direction)) continue;
        const hb = ub.direction - bb;
        hb !== ub.writtenAngle && (ub.writtenAngle = hb, ub.JI.style.rotate = `${hb}rad`)
      }
    }
  },
  36113: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ob,
      e: () => Gb
    });
    let Bb = !1;

    function Ob() {
      return Bb
    }

    function Gb(bb) {
      return Bb !== bb && (Bb = bb, !0)
    }
  },
  9023: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      g: () => Ob
    });
    var Bb = hb(13);

    function Ob(bb, ub) {
      return bb && !ub
    }

    function Gb() {
      return Ob(Bb.d.get("isTouchScreen"), Bb.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  40123: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      startPadGameplay: () => Cb
    });
    hb(40006);
    var Bb = hb(40014),
      Ob = hb(3516),
      Gb = hb(13),
      Ub = hb(38706),
      Lb = hb(3463),
      Yb = hb(38719),
      Sb = hb(16),
      ab = hb(2560),
      Hb = hb(38064),
      wb = hb(8589),
      Zb = hb(40017);
    const Xb = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var pb = hb(40033),
      ob = hb(8558),
      Ab = hb(38727);
    const lb = bb => bb.padSneakToggled || !!Gb.d.get("clientEscMenuOptions").crouchIsToggle && bb.crouchToggled,
      Kb = () => {
        const bb = (() => {
          const bb = (0, wb.d)();
          let ub = Xb;
          const hb = new Zb.b;
          let Bb = !1,
            Ob = 0;
          const Gb = () => {
            const hb = performance.now(),
              Gb = 0 === Ob ? 0 : hb - Ob;
            if (Ob = hb, !Bb) return bb.discardPending(), null;
            const Ub = (0, Zb.n)(ub, Gb),
              Lb = bb.drainLookDelta(),
              Yb = (0, Hb.j)();
            return {
              MJ: (Ub.MJ + Lb.MJ) * Yb,
              mJ: (Ub.mJ + Lb.mJ) * Yb
            }
          };
          return {
            update: (bb, Ob, Ub, Lb) => {
              bb.camera.lF !== Gb && (bb.camera.lF = Gb), Bb = !0, ub = (0, Zb.q)(hb, Ob, Ub, Lb, performance.now())
            },
            release: () => {
              Bb = !1, ub = Xb, hb.reset()
            },
            uninstall: bb => {
              bb.camera.lF === Gb && (bb.camera.lF = null)
            }
          }
        })();
        return {
          update: (ub, hb, Bb) => {
            bb.update((0, ab.g)(), ub, hb, Bb)
          },
          release: bb.release,
          uninstall: () => {
            const ub = (0, ab.g)();
            ub && bb.uninstall(ub)
          }
        }
      };
    var Wb = hb(40026);
    hb(37317), hb(8452);
    hb(8467).e;
    const Cb = () => {
      const bb = (0, Wb.c)((() => {
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
            bodies: () => (0, Ub.c)(),
            look: Kb(),
            move: (ub, hb) => {
              const Bb = (0, ab.g)(),
                Ob = Bb.pW.Bhb();
              if (bb.x = ub.x, bb.y = ub.y, bb.magnitude = ub.magnitude, bb.headingOffset = ub.headingOffset, bb.jumpHeld = ub.jumpHeld, ub.jumpPressed && (bb.jumpPressedSinceTick = !0), bb.running = ub.running, bb.sprintHeld = ub.sprintHeld, hb) {
                const ub = (0, pb.e)({
                  ...hb,
                  descending: Bb.pW.uub(Bb.bM).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!Bb.OW.canCrouch,
                  toggled: lb(Ob)
                });
                bb.crouchHeld = ub.crouchHeld, Ob.padSneakToggled = ub.toggled, Ob.crouchToggled = !1, (0, ob.g)(ub.toggled)
              }
              Ob.gamepad = bb
            },
            stopMoving: () => {
              var ub;
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
              const hb = null === (ub = (0, ab.g)()) || void 0 === ub ? void 0 : ub.pW.Bhb();
              (null === hb || void 0 === hb ? void 0 : hb.gamepad) === bb && (hb.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: bb => {
              const ub = (0, ab.g)(),
                hb = null === ub || void 0 === ub ? void 0 : ub.pW.Bhb();
              "touch" === bb ? ((0, ob.g)(!1), null !== hb && void 0 !== hb && hb.padSneakToggled && (hb.padSneakToggled = !1, hb.isTouchscreen && !hb.gamepad && ub.pW.nub(ub.bM).setCrouching(!!ub.OW.canCrouch && hb.touchCrouch))) : "gamepad" === bb && hb && (0, ob.g)(lb(hb))
            },
            hasPlayer: () => {
              var bb;
              return !(null === (bb = (0, ab.g)()) || void 0 === bb || !bb.bM)
            },
            isPlayerDead: () => {
              var bb;
              const ub = (0, ab.g)();
              return !1 === (null === (bb = ub.pW.kub(ub.bM)) || void 0 === bb ? void 0 : bb.isAlive)
            },
            isReplayMode: () => {
              var bb, ub;
              return !(null === (bb = (0, ab.e)()) || void 0 === bb || null === (ub = bb.client) || void 0 === ub || !ub.isReplayMode())
            },
            isFreeCameraOn: () => {
              var bb, ub, hb;
              return !(null === (bb = (0, ab.e)()) || void 0 === bb || null === (ub = bb.client) || void 0 === ub || null === (hb = ub.freeCameraController) || void 0 === hb || !hb.isEnabled())
            },
            targetsBlock: () => !!(0, ab.g)().rbb,
            selectedSlotEmpty: () => {
              var bb;
              const ub = (0, ab.g)();
              return !(null !== (bb = ub.pW.xub(ub.bM)) && void 0 !== bb && bb.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const bb = (0, ab.g)().OW;
              return !!bb.creative && !!bb.canPickBlocks
            },
            scrollHotbar: bb => {
              Sb.i.vp("ScrollInventorySlot", bb)
            },
            hasFullInventory: () => (0, Yb.d)((0, ab.g)()),
            hasLobbyTab: () => (0, Ab.c)((0, ab.g)().OW),
            contextActionInputs: () => {
              var bb, ub, hb, Bb;
              const Ob = (0, ab.g)();
              return {
                holdingGun: !(null === (bb = Ob.pW.Tub(Ob.bM)) || void 0 === bb || null === (ub = bb.bC) || void 0 === ub || !ub.isGun()),
                customButtons: null !== (hb = Ob.OW.customButtons) && void 0 !== hb ? hb : null,
                touchscreenActionButton: null !== (Bb = Ob.OW.touchscreenActionButton) && void 0 !== Bb ? Bb : null
              }
            },
            pressTouchButton: bb => {
              (0, Lb.sendColyMessage)(Ob.lj, bb)
            }
          }
        })()),
        ub = (0, Bb.c)(),
        hb = null,
        Gb = null;
      return () => {
        bb(), ub(), null === hb || void 0 === hb || hb(), null === Gb || void 0 === Gb || Gb()
      }
    }
  },
  36217: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      e: () => pb,
      i: () => ob,
      k: () => Lb,
      m: () => wb,
      o: () => Ab,
      q: () => Hb,
      r: () => Kb,
      u: () => Xb,
      v: () => lb
    });
    var Bb = hb(13),
      Ob = hb(16);
    const Gb = "clientGameInventoryButtonsChanged",
      Ub = new Map;

    function Lb() {
      return [...Ub.values()].sort(((bb, ub) => {
        var hb, Bb;
        return (null !== (hb = bb.order) && void 0 !== hb ? hb : 0) - (null !== (Bb = ub.order) && void 0 !== Bb ? Bb : 0)
      }))
    }
    let Yb = null;

    function Sb(bb) {
      Yb = bb
    }
    let ab = !1;

    function Hb(bb) {
      ab = !0;
      try {
        bb.onClick()
      } finally {
        ab = !1
      }
      bb.panel && "clientGame" === Bb.d.get("openInGameMenuName") && Sb(bb.id)
    }

    function wb() {
      return ab
    }

    function Zb() {
      return Lb().filter((bb => bb.panel && !bb.disabled))
    }

    function Xb(bb) {
      const ub = Zb(),
        hb = ub.findIndex((bb => bb.id === Yb));
      return !(hb < 0 || ub.length < 2) && (Hb(ub[(hb + bb + ub.length) % ub.length]), !0)
    }

    function pb() {
      return null !== Yb && Zb().length > 1
    }

    function ob() {
      Sb(null)
    }

    function Ab() {
      "inventory" !== Bb.d.get("openInGameMenuName") && Sb(null)
    }

    function lb() {
      const bb = Yb;
      return Sb(null), bb
    }

    function Kb(bb) {
      return Ub.set(bb.id, bb), Ob.i.vp(Gb, Lb(), !0), () => {
        Ub.get(bb.id) === bb && (Ub.delete(bb.id), Ob.i.vp(Gb, Lb()))
      }
    }
  },
  36214: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Lb,
      g: () => ob,
      j: () => Ab,
      l: () => wb,
      m: () => Sb,
      p: () => pb,
      q: () => Zb,
      t: () => ab
    });
    var Bb = hb(13),
      Ob = hb(16),
      Gb = hb(1184),
      Ub = hb(36217);
    const Lb = "clientGameUiChanged";
    let Yb = null;

    function Sb() {
      return Yb
    }

    function ab(bb, ub) {
      const hb = {
        content: bb,
        menu: ub
      };
      return Yb = hb, Ob.i.vp(Lb, Yb, !0), () => {
        Yb === hb && (Yb = null, Xb = !1, ob(), Ob.i.vp(Lb, null))
      }
    }
    let Hb = null;

    function wb() {
      return Hb
    }

    function Zb(bb) {
      return Hb = bb, () => {
        Hb === bb && (Hb = null)
      }
    }
    let Xb = !1;

    function pb() {
      const bb = Bb.d.get("openInGameMenuName");
      "clientGame" !== bb && (Xb = "inventory" === bb), (0, Ub.m)() || (0, Ub.i)(), (0, Gb.l)(Gb.b), Bb.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ob() {
      lb(!1)
    }

    function Ab() {
      lb(Xb)
    }

    function lb(bb) {
      "clientGame" === Bb.d.get("openInGameMenuName") && Bb.d.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Ub.i)(), Xb = !1
    }
  },
  36104: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Yb
    });
    var Bb = hb(298),
      Ob = hb(13),
      Gb = hb(36113),
      Ub = hb(1537),
      Lb = hb(1874);

    function Yb(bb, ub) {
      var hb, Yb, Sb;
      if (!Ob.d.get("isKeydownEnabled") || bb.repeat) return;
      const ab = bb.code;
      "Escape" === bb.key ? (0, Ub.k)(bb) : null !== (hb = Lb.r.OpenSettings) && void 0 !== hb && hb.includes(ab) ? (0, Ub.B)(bb, Bb.u.SETTINGS) : null !== (Yb = Lb.r.OpenCharacterCustomization) && void 0 !== Yb && Yb.includes(ab) ? (0, Gb.c)() || (0, Ub.B)(bb, Bb.u.CUSTOMISATION, ub()) : null !== (Sb = Lb.r.ShowDebugOverlay) && void 0 !== Sb && Sb.includes(ab) && Ob.d.set({
        showDebugOverlay: !Ob.d.get("showDebugOverlay")
      })
    }
  },
  36083: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => wb,
      d: () => ab,
      h: () => Zb,
      k: () => Hb
    });
    var Bb = hb(314),
      Ob = hb(609),
      Gb = hb(620),
      Ub = hb(29);
    const Lb = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Yb = "playSessionGameNameWithVariation",
      Sb = "wasMatchmakePlayer";

    function ab() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ub.m;
      (0, Gb.i)(bb, Lb)
    }

    function Hb() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ub.m).setItem(Sb, !0)
    }

    function wb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ub.m;
      return (0, Gb.e)(bb, Lb)
    }

    function Zb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ub.m;
      const hb = (0, Gb.e)(ub, Lb),
        ab = function(bb) {
          const ub = bb.getItem(Yb);
          return "string" !== typeof ub ? null : ub
        }(ub),
        Hb = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ub.m).getItem(Sb)
        }(ub);
      let wb;
      return wb = null !== hb && null !== ab && (0, Gb.g)(ub, Lb) && function(bb, ub, hb) {
          const Ob = (0, Bb.Xb)(bb),
            Gb = (0, Bb.Xb)(ub),
            Ub = (0, Bb.Tb)(bb),
            Lb = (0, Bb.Tb)(ub);
          return !(Ob !== Gb || !hb) || Ob === Gb && Ub === Lb
        }(ab, bb, Hb) ? hb : (0, Ob.e)(), (0, Gb.k)(ub, Lb, wb), ub.setItem(Yb, bb),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ub.m).removeItem(Sb)
        }(ub), wb
    }
  },
  36074: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => lb,
      d: () => Kb
    });
    var Bb = hb(934),
      Ob = hb(595),
      Gb = hb(314),
      Ub = hb(937),
      Lb = hb(599),
      Yb = hb(625),
      Sb = hb(4281),
      ab = hb(86),
      Hb = hb(115),
      wb = hb(1622),
      Zb = hb(101),
      Xb = hb(36083),
      pb = hb(29),
      ob = hb(612),
      Ab = hb(36091);

    function lb() {
      var bb, ub;
      return [...null !== (bb = navigator.languages) && void 0 !== bb ? bb : [null !== (ub = navigator.language) && void 0 !== ub ? ub : "none"], "EN-gb"]
    }

    function Kb(bb, ub, hb, Kb, Wb) {
      const Cb = (0, Bb.i)(ub) ? (0, Bb.p)(ub) : null,
        db = {
          cookies: (0, wb.getAllCookiesForGameNameWithVariation)(ub),
          isMobile: (0, ab.isMobile)(),
          isUsingCustomGameTexturePack: null !== Cb && Wb(Cb),
          generalCookies: {
            joinDiscord: !!pb.j.getItem("DiscordPressed"),
            newGo: Sb.e,
            ...bb.getMetricsCookies(),
            trafficCode: Kb,
            compliance: ab.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, ab.getBrowserName)(),
            version: (0, ab.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, ab.getPlatformType)(),
            deviceType: (0, Zb.b)()
          },
          isLoggedIn: bb.isLoggedIn(),
          lobbyName: hb,
          languages: lb(),
          version: Ob.b,
          siteUsed: Hb.s,
          subsiteUsed: Hb.A,
          playSessionId: (0, Xb.h)(ub),
          visitSessionId: (0, ob.b)(),
          clientReason: Lb.f.reason,
          budgetBasis: (0, Ab.g)(),
          ...null !== Yb.m && {
            diagClaim: Yb.m.claimId
          }
        };
      return null !== Cb && (0, Gb.Ic)(Cb) ? (db.lobbyName = (0, Bb.h)(Cb, (0, Bb.l)(ub), hb), {
        roomName: `classic_${Ub.c}`,
        joinOptions: db
      }) : {
        roomName: ub,
        joinOptions: db
      }
    }
  },
  35920: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb,
      f: () => Ob,
      g: () => Gb,
      i: () => Ub
    });
    const Bb = 1024,
      Ob = 1024 * Bb;

    function Gb(bb) {
      return 2 ** Math.floor(Math.log2(Math.max(1, bb / Ob)))
    }

    function Ub(bb) {
      return (bb / Ob).toFixed(1)
    }
  },
  36095: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Gb,
      g: () => Lb,
      k: () => Ub,
      l: () => Yb,
      m: () => Sb,
      q: () => ab
    });
    var Bb = hb(191);
    const Ob = 32 * hb(35920).f,
      Gb = 6144,
      Ub = 4608,
      Lb = 512;

    function Yb(bb) {
      return Math.floor(Ob * bb / Gb)
    }

    function Sb(bb) {
      const ub = bb - Math.floor(bb / 6);
      let hb = Bb.e.maxChunkHorizAddDistance,
        Ob = Bb.e.maxChunkVertAddDistance;
      if (ab(hb + 1, Ob + 1) <= ub) return null;
      for (; ab(hb + 1, Ob + 1) > ub && (hb > 0 || Ob > 0);) hb > Ob ? hb-- : Ob--;
      return {
        horizontal: hb,
        vertical: Ob
      }
    }

    function ab(bb, ub) {
      const hb = Math.max(bb, ub);
      let Bb = 0;
      for (let Ob = -hb; Ob <= hb; Ob++)
        for (let Gb = -hb; Gb <= hb; Gb++)
          for (let Ub = -hb; Ub <= hb; Ub++) Hb(bb, ub, Ob, Gb, Ub) && Bb++;
      return Bb
    }

    function Hb(bb, ub, hb, Bb, Ob) {
      const Gb = hb * hb + Ob * Ob;
      return bb === ub ? Gb + Bb * Bb <= bb * bb : bb > ub ? Math.abs(Bb) <= ub && Gb + Bb * Bb <= bb * bb : Gb <= bb * bb && Gb + Bb * Bb <= ub * ub
    }
  },
  36091: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => db,
      g: () => Cb,
      i: () => Wb
    });
    var Bb = hb(191),
      Ob = hb(86),
      Gb = hb(2710),
      Ub = hb(4156),
      Lb = hb(604),
      Yb = hb(36095);
    const Sb = 1048576,
      ab = 1024 * Sb,
      Hb = 400 * Sb,
      wb = 147456,
      Zb = .5,
      Xb = 1.5 * ab,
      pb = 768 * Sb;

    function ob(bb) {
      return Hb + bb * wb
    }

    function Ab(bb, ub, hb) {
      var Ob, Ub;
      let {
        footprintBytes: Lb,
        basis: Sb,
        namesLimit: Ab
      } = function(bb) {
        const {
          os: ub,
          deviceMemory: hb
        } = bb;
        if ("ios" === ub) switch ((0, Gb.f)(bb)) {
          case "ipad_m":
            return {
              footprintBytes: ob(Yb.e), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: pb, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: Xb, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: pb, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof hb && Number.isFinite(hb) && hb > 0 ? {
          footprintBytes: hb * ab * Zb,
          basis: `memory-${hb}`,
          namesLimit: !0
        } : "android" === ub ? {
          footprintBytes: pb,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: ob(Yb.k),
          basis: "unreported",
          namesLimit: !1
        }
      }(bb);
      if (hb) {
        const bb = Math.min(Lb, ob(Yb.e));
        Lb = Hb + Math.max(0, bb - Hb) / 2, Sb += "+killed", Ab = !0
      }
      null !== ub && ob(ub) < Lb && (Lb = ob(ub), Sb += "+learned", Ab = !0);
      const lb = function(bb) {
          const ub = Math.floor((bb - Hb) / wb);
          return Math.min(Yb.e, Math.max(Yb.g, ub))
        }(Lb),
        Kb = (0, Yb.m)(lb);
      return {
        footprintBytes: Lb,
        shedFootprintBytes: Ab ? Math.max(Lb, ob(lb)) : null,
        chunkCap: lb,
        maxHorizDistance: null !== (Ob = null === Kb || void 0 === Kb ? void 0 : Kb.horizontal) && void 0 !== Ob ? Ob : Bb.e.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Ub = null === Kb || void 0 === Kb ? void 0 : Kb.vertical) && void 0 !== Ub ? Ub : Bb.e.maxChunkVertAddDistance,
        basis: Sb
      }
    }
    let lb = null;

    function Kb() {
      return Ab({
        os: (0, Ob.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Gb.h)()
      }, (0, Ub.e)(), (0, Lb.E)("wasm").length > 0)
    }

    function Wb() {
      return lb ??= Kb(), lb
    }

    function Cb() {
      var bb;
      return (null !== (bb = lb) && void 0 !== bb ? bb : Kb()).basis
    }

    function db(bb, ub) {
      return bb.setChunkCap(ub.chunkCap)
    }
  },
  36504: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob,
      d: () => Gb,
      f: () => wb,
      i: () => Lb,
      j: () => Yb,
      l: () => Sb,
      n: () => Hb,
      q: () => ab,
      s: () => Ub
    });
    var Bb = hb(1133);
    let Ob = function(bb) {
        return bb[bb.Join = 0] = "Join", bb[bb.Leave = 1] = "Leave", bb[bb.Push = 2] = "Push", bb[bb.Cursor = 3] = "Cursor", bb[bb.Submit = 4] = "Submit", bb[bb.ReloadAsVariation = 5] = "ReloadAsVariation", bb[bb.CreateFile = 6] = "CreateFile", bb[bb.RenameFile = 7] = "RenameFile", bb[bb.DeleteFile = 8] = "DeleteFile", bb[bb.SetEngine = 9] = "SetEngine", bb[bb.RenameFolder = 10] = "RenameFolder", bb
      }({}),
      Gb = function(bb) {
        return bb[bb.Joined = 0] = "Joined", bb[bb.Updates = 1] = "Updates", bb[bb.Presence = 2] = "Presence", bb[bb.RemoteCursor = 3] = "RemoteCursor", bb[bb.ForceClose = 4] = "ForceClose", bb[bb.LobbyFilesChanged = 5] = "LobbyFilesChanged", bb[bb.EngineSettings = 6] = "EngineSettings", bb
      }({});

    function Ub(bb) {
      return "lobby" === bb.kind ? `lobby:${bb.path}` : `codeBlock:${bb.pos[0]},${bb.pos[1]},${bb.pos[2]}`
    }

    function Lb(bb) {
      if ("lobby" === bb) return {
        kind: "lobby",
        path: Bb.m
      };
      if (bb.startsWith("lobby:")) {
        const ub = bb.slice(6);
        return Hb(ub) ? {
          kind: "lobby",
          path: ub
        } : null
      }
      const ub = bb.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return ub ? {
        kind: "codeBlock",
        pos: [parseInt(ub[1]), parseInt(ub[2]), parseInt(ub[3])]
      } : null
    }

    function Yb(bb) {
      return bb.endsWith(".d.ts")
    }

    function Sb(bb) {
      return bb.endsWith(".ts") && !Yb(bb)
    }
    const ab = 64;

    function Hb(bb) {
      if (!bb || bb !== bb.trim()) return !1;
      if (bb.length > ab) return !1;
      if (bb.startsWith("/") || bb.includes("\\") || bb.includes("\0")) return !1;
      if (!Yb(bb) && !Sb(bb) && ! function(bb) {
          return bb.endsWith(".js") && !bb.endsWith(".min.js") && !bb.endsWith(".bundle.js")
        }(bb)) return !1;
      const ub = bb.split("/");
      for (const hb of ub)
        if ("" === hb || "." === hb || ".." === hb) return !1;
      return !0
    }
    const wb = 14e3
  },
  38657: (bb, ub, hb) => {
    function Bb(bb, ub, hb, Bb, Ob) {
      var Gb = {};
      return Object.keys(Bb).forEach((function(bb) {
        Gb[bb] = Bb[bb]
      })), Gb.enumerable = !!Gb.enumerable, Gb.configurable = !!Gb.configurable, ("value" in Gb || Gb.initializer) && (Gb.writable = !0), Gb = hb.slice().reverse().reduce((function(hb, Bb) {
        return Bb(bb, ub, hb) || hb
      }), Gb), Ob && void 0 !== Gb.initializer && (Gb.value = Gb.initializer ? Gb.initializer.call(Ob) : void 0, Gb.initializer = void 0), void 0 === Gb.initializer && (Object.defineProperty(bb, ub, Gb), Gb = null), Gb
    }
    hb.d(ub, {
      b: () => Bb
    })
  },
  38654: (bb, ub, hb) => {
    function Bb(bb, ub, hb, Bb) {
      hb && Object.defineProperty(bb, ub, {
        enumerable: hb.enumerable,
        configurable: hb.configurable,
        writable: hb.writable,
        value: hb.initializer ? hb.initializer.call(Bb) : void 0
      })
    }
    hb.d(ub, {
      c: () => Bb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
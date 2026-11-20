export const id = 188;
export const ids = [188];
export const modules = {
  38392: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb,
      e: () => Tb
    });
    var Ab = Ub(3804);
    let Mb = null;

    function Tb(bb) {
      return null !== Mb && bb === Mb
    }

    function Eb() {
      this.Yu = !1, this.stopPropagation = !1, this.Xu = !1, this.disabled = !1
    }
    class Yb {
      constructor(bb, ab) {
        this.version = "0.7.0";
        var Ub = Object.assign({}, new Eb, ab || {});
        this.element = bb || document, this.Yu = !!Ub.Yu, this.stopPropagation = !!Ub.stopPropagation, this.Xu = !!Ub.Xu, this.disabled = !!Ub.disabled, this.filterEvents = (bb, ab) => !0, this.down = new Ab.EventEmitter, this.up = new Ab.EventEmitter, this.state = {}, this.Hr = {
          dx: 0,
          dy: 0,
          Dbb: 0,
          zbb: 0,
          ibb: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? eb(this) : document.addEventListener("DOMContentLoaded", (bb => {
          eb(this)
        }), {
          once: !0
        })
      }
      bind(bb) {
        for (var ab = arguments.length, Ub = new Array(ab > 1 ? ab - 1 : 0), Ab = 1; Ab < ab; Ab++) Ub[Ab - 1] = arguments[Ab];
        Ub.forEach((ab => {
          var Ub = this._keyBindmap[ab] || [];
          Ub.includes(bb) || (Ub.push(bb), this._keyBindmap[ab] = Ub)
        })), this.state[bb] = !!this.state[bb], this.pressCount[bb] = this.pressCount[bb] || 0, this.releaseCount[bb] = this.releaseCount[bb] || 0
      }
      unbind(bb) {
        for (var ab in this._keyBindmap) {
          var Ub = this._keyBindmap[ab],
            Ab = Ub.indexOf(bb);
          Ab > -1 && Ub.splice(Ab, 1)
        }
      }
      getBindings() {
        var bb = {};
        for (var ab in this._keyBindmap) {
          this._keyBindmap[ab].forEach((Ub => {
            bb[Ub] = bb[Ub] || [], bb[Ub].push(ab)
          }))
        }
        return bb
      }
      qL() {
        Bb(this.Hr), Bb(this.pressCount), Bb(this.releaseCount)
      }
    }

    function Bb(bb) {
      for (var ab in bb) bb[ab] = 0
    }

    function eb(bb) {
      window.addEventListener("keydown", kb.bind(null, bb, !0), !1), window.addEventListener("keyup", kb.bind(null, bb, !1), !1);
      var ab = {
        passive: !0
      };
      bb.element.addEventListener("touchstart", Xb.bind(void 0, bb), {
        passive: !1
      }), bb.element.addEventListener("touchend", Rb.bind(void 0, bb), ab), bb.element.addEventListener("mousedown", yb.bind(null, bb, !0), ab), window.document.addEventListener("mouseup", yb.bind(null, bb, !1), ab), bb.element.addEventListener("touchmove", Zb.bind(null, bb), ab), bb.element.addEventListener("mousemove", Zb.bind(null, bb), ab), window.PointerEvent, bb.element.addEventListener("wheel", Db.bind(null, bb), ab), bb.element.addEventListener("contextmenu", zb.bind(null, bb), !1), window.addEventListener("blur", fb.bind(null, bb), !1)
    }
    var vb = 0,
      Lb = 0,
      Pb = null;

    function Xb(bb, ab) {
      ab.preventDefault(), jb(ab)
    }

    function jb(bb) {
      let ab = !1;
      for (let Ub = 0; Ub < bb.touches.length; ++Ub)
        if (bb.touches[Ub].identifier === Pb) {
          ab = !0;
          break
        } if (!ab) {
        const ab = bb.changedTouches[0];
        vb = ab.clientX, Lb = ab.clientY, Pb = ab.identifier
      }
    }

    function Rb(bb, ab) {
      for (var Ub = ab.changedTouches, Ab = 0; Ab < Ub.length; ++Ab) Ub[Ab].identifier === Pb && (Pb = null)
    }

    function kb(bb, ab, Ub) {
      try {
        mb(bb, Ub), ab && Ub.isTrusted && !Ub.repeat && bb._keyStates[Ub.code] && pb(bb, Ub.code)
      } finally {
        Nb(Ub.code, ab, bb, Ub)
      }
    }

    function yb(bb, ab, Ub) {
      try {
        mb(bb, Ub)
      } finally {
        ! function(bb, ab, Ub) {
          if ("pointerId" in Ub)
            if (ab) {
              if (null !== bb._touches.currID) return;
              bb._touches.currID = Ub.pointerId
            } else {
              if (bb._touches.currID !== Ub.pointerId) return;
              bb._touches.currID = null
            } var Ab = "button" in Ub ? Ub.button + 1 : 1;
          Nb("Mouse" + Ab, ab, bb, Ub)
        }(bb, ab, Ub)
      }
    }

    function Zb(bb, ab) {
      var Ub = ab.movementX || ab.mozMovementX || 0,
        Ab = ab.movementY || ab.mozMovementY || 0;
      if (ab.touches && 0 === (Ub | Ab)) {
        var Mb = function(bb) {
          jb(bb);
          for (let ab = 0; ab < bb.changedTouches.length; ++ab)
            if (bb.changedTouches[ab].identifier == Pb) {
              const Ub = bb.changedTouches[ab],
                Ab = [Ub.clientX - vb, Ub.clientY - Lb];
              return vb = Ub.clientX, Lb = Ub.clientY, Ab
            } return console.error(`Did not find touch id ${Pb}`), [0, 0]
        }(ab);
        Ub = Mb[0], Ab = Mb[1]
      }
      bb.Hr.dx += Ub, bb.Hr.dy += Ab
    }

    function Db(bb, ab) {
      mb(bb, ab);
      var Ub = 1;
      switch (ab.deltaMode) {
        case 0:
          Ub = 1;
          break;
        case 1:
          Ub = 12;
          break;
        case 2:
          Ub = bb.element.clientHeight || window.innerHeight
      }
      bb.Hr.Dbb += (ab.deltaX || 0) * Ub, bb.Hr.zbb += (ab.deltaY || 0) * Ub, bb.Hr.ibb += (ab.deltaZ || 0) * Ub
    }

    function zb(bb, ab) {
      if (!bb.Xu) return ab.preventDefault(), !1
    }
    var xb = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function ib(bb, ab) {
      return !!bb[xb[ab]] || ("AltRight" === ab || "ControlLeft" === ab) && "function" === typeof bb.getModifierState && !0 === bb.getModifierState("AltGraph")
    }

    function fb(bb, ab) {
      for (var Ub in bb._modifiersHeldThroughBlur = {}, xb) bb._keyStates[Ub] && (bb._modifiersHeldThroughBlur[Ub] = !0);
      ab && ab.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (bb) {
          return !0
        }
      }() && (clearTimeout(bb._blurRelease), bb._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var ab in bb._modifiersHeldThroughBlur = {}, bb._keyStates) bb._keyStates[ab] && !/^Mouse\d/.test(ab) && pb(bb, ab)
      }), 0))
    }

    function mb(bb, ab) {
      var Ub = bb._modifiersHeldThroughBlur;
      if (Ub && ab.isTrusted && document.hasFocus())
        for (var Ab in Ub) delete Ub[Ab], bb._keyStates[Ab] && Ab !== ab.code && (ib(ab, Ab) || pb(bb, Ab))
    }

    function pb(bb, ab) {
      const Ub = {
          code: ab,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Ab = Mb;
      Mb = Ub;
      try {
        Nb(ab, !1, bb, Ub)
      } finally {
        Mb = Ab
      }
    }

    function Nb(bb, ab, Ub, Ab) {
      var Mb = Ub._keyBindmap[bb];
      Mb && (Wb(Ub._keyStates[bb], ab) && (Ub._keyStates[bb] = ab, Mb.forEach((bb => {
        (!Ub.filterEvents || Ub.filterEvents(Ab, bb)) && function(bb, ab, Ub, Ab) {
          var Mb = ab ? Ub.pressCount : Ub.releaseCount;
          Mb[bb] = (Mb[bb] || 0) + 1;
          var Tb = Ub._bindPressCount[bb] || 0;
          (Tb += ab ? 1 : -1) < 0 && (Tb = 0);
          Ub._bindPressCount[bb] = Tb;
          var Eb = Ub.state[bb];
          if (Wb(Eb, Tb)) {
            Ub.state[bb] = Tb > 0;
            var Yb = ab ? Ub.down : Ub.up;
            Ub.disabled || Yb.emit(bb, Ab)
          }
        }(bb, ab, Ub, Ab)
      }))), "button" in Ab || (Ub.Yu && !Ab.defaultPrevented && Ab.preventDefault(), Ub.stopPropagation && Ab.stopPropagation()))
    }

    function Wb(bb, ab) {
      return bb ? !ab : ab
    }
  },
  36083: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Xb,
      f: () => jb
    });
    var Ab = Ub(52),
      Mb = Ub(2708),
      Tb = Ub(1345),
      Eb = Ub(1858),
      Yb = Ub(36038),
      Bb = Ub(591),
      eb = Ub(984),
      vb = Ub.n(eb),
      Lb = Ub(1023);
    const Pb = {},
      Xb = (0, Ab.memo)((function() {
        const bb = (0, Mb.d)();
        return (0, Tb.f)("damagedByOtherPlayer", (ab => {
          let {
            nU: Ub,
            direction: Ab
          } = ab;
          const Mb = Ub || "nonDirectional";
          if (Pb[Mb]) {
            const ab = Pb[Mb];
            clearTimeout(ab.timeout), ab.direction = Ab, ab.timeout = setTimeout((() => {
              delete Pb[Mb], bb()
            }), 800)
          } else Pb[Mb] = {
            direction: Ab,
            JI: null,
            timeout: setTimeout((() => {
              delete Pb[Mb], bb()
            }), 800)
          };
          bb()
        })), (0, Eb.c)("kill", (ab => {
          let {
            killer: Ub,
            victim: Ab
          } = ab;
          const Mb = Ab.id;
          Ub.local && Mb && Mb in Pb && (clearTimeout(Pb[Mb].timeout), delete Pb[Mb], bb())
        })), (0, Ab.useEffect)((() => {
          const bb = (0, Yb.g)("turnDamageIndicators", jb);
          return () => {
            bb();
            for (const bb in Pb) clearTimeout(Pb[bb].timeout), delete Pb[bb]
          }
        }), []), (0, Lb.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(Pb).map((bb => {
            let [ab, Ub] = bb;
            const Ab = (0, Bb.I)(Ub.direction);
            return (0, Lb.jsx)("div", {
              ref: bb => {
                Pb[ab] && (Pb[ab].JI = bb)
              },
              className: vb()("DamageIndicator", {
                DamageIndicatorFullCircle: Ab
              })
            }, ab)
          }))
        })
      }));

    function jb(bb) {
      for (const ab in Pb) {
        const {
          direction: Ub,
          JI: Ab
        } = Pb[ab];
        if ((0, Bb.I)(Ub)) continue;
        const Mb = Ub - bb;
        Ab.style.rotate = `${Mb}rad`
      }
    }
  },
  35935: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb,
      i: () => Tb
    });
    let Ab = !1;

    function Mb() {
      return Ab
    }

    function Tb(bb) {
      return Ab !== bb && (Ab = bb, !0)
    }
  },
  8836: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb,
      f: () => Mb
    });
    var Ab = Ub(19);

    function Mb(bb, ab) {
      return bb && !ab
    }

    function Tb() {
      return Mb(Ab.c.get("isTouchScreen"), Ab.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  39789: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      startPadGameplay: () => zb
    });
    Ub(39663);
    var Ab = Ub(39671),
      Mb = Ub(3433),
      Tb = Ub(19),
      Eb = Ub(38366),
      Yb = Ub(3347),
      Bb = Ub(38379),
      eb = Ub(22),
      vb = Ub(2549),
      Lb = Ub(37763),
      Pb = Ub(8423),
      Xb = Ub(39679);
    const jb = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var Rb = Ub(39695),
      kb = Ub(8394);
    const yb = bb => bb.padSneakToggled || !!Tb.c.get("clientEscMenuOptions").crouchIsToggle && bb.crouchToggled,
      Zb = () => {
        const bb = (() => {
          const bb = (0, Pb.b)();
          let ab = jb;
          const Ub = new Xb.c;
          let Ab = !1,
            Mb = 0;
          const Tb = () => {
            const Ub = performance.now(),
              Tb = 0 === Mb ? 0 : Ub - Mb;
            if (Mb = Ub, !Ab) return bb.discardPending(), null;
            const Eb = (0, Xb.p)(ab, Tb),
              Yb = bb.drainLookDelta(),
              Bb = (0, Lb.i)();
            return {
              XN: (Eb.XN + Yb.XN) * Bb,
              kN: (Eb.kN + Yb.kN) * Bb
            }
          };
          return {
            update: (bb, Mb, Eb, Yb) => {
              bb.camera.Kw !== Tb && (bb.camera.Kw = Tb), Ab = !0, ab = (0, Xb.s)(Ub, Mb, Eb, Yb, performance.now())
            },
            release: () => {
              Ab = !1, ab = jb, Ub.reset()
            },
            uninstall: bb => {
              bb.camera.Kw === Tb && (bb.camera.Kw = null)
            }
          }
        })();
        return {
          update: (ab, Ub, Ab) => {
            bb.update((0, vb.h)(), ab, Ub, Ab)
          },
          release: bb.release,
          uninstall: () => {
            const ab = (0, vb.h)();
            ab && bb.uninstall(ab)
          }
        }
      };
    var Db = Ub(39689);
    Ub(37021), Ub(8293);
    Ub(8311).b;
    const zb = () => {
      const bb = (0, Db.b)((() => {
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
            bodies: () => (0, Eb.d)(),
            look: Zb(),
            move: (ab, Ub) => {
              const Ab = (0, vb.h)(),
                Mb = Ab.wZ.kab();
              if (bb.x = ab.x, bb.y = ab.y, bb.magnitude = ab.magnitude, bb.headingOffset = ab.headingOffset, bb.jumpHeld = ab.jumpHeld, ab.jumpPressed && (bb.jumpPressedSinceTick = !0), bb.running = ab.running, bb.sprintHeld = ab.sprintHeld, Ub) {
                const ab = (0, Rb.g)({
                  ...Ub,
                  descending: Ab.wZ.Rbb(Ab.ZH).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!Ab.HZ.canCrouch,
                  toggled: yb(Mb)
                });
                bb.crouchHeld = ab.crouchHeld, Mb.padSneakToggled = ab.toggled, Mb.crouchToggled = !1, (0, kb.f)(ab.toggled)
              }
              Mb.gamepad = bb
            },
            stopMoving: () => {
              var ab;
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
              const Ub = null === (ab = (0, vb.h)()) || void 0 === ab ? void 0 : ab.wZ.kab();
              (null === Ub || void 0 === Ub ? void 0 : Ub.gamepad) === bb && (Ub.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: bb => {
              const ab = (0, vb.h)(),
                Ub = null === ab || void 0 === ab ? void 0 : ab.wZ.kab();
              "touch" === bb ? ((0, kb.f)(!1), null !== Ub && void 0 !== Ub && Ub.padSneakToggled && (Ub.padSneakToggled = !1, Ub.isTouchscreen && !Ub.gamepad && ab.wZ.Kbb(ab.ZH).setCrouching(!!ab.HZ.canCrouch && Ub.touchCrouch))) : "gamepad" === bb && Ub && (0, kb.f)(yb(Ub))
            },
            hasPlayer: () => {
              var bb;
              return !(null === (bb = (0, vb.h)()) || void 0 === bb || !bb.ZH)
            },
            isPlayerDead: () => {
              var bb;
              const ab = (0, vb.h)();
              return !1 === (null === (bb = ab.wZ.Bab(ab.ZH)) || void 0 === bb ? void 0 : bb.isAlive)
            },
            isReplayMode: () => {
              var bb, ab;
              return !(null === (bb = (0, vb.e)()) || void 0 === bb || null === (ab = bb.client) || void 0 === ab || !ab.isReplayMode())
            },
            isFreeCameraOn: () => {
              var bb, ab, Ub;
              return !(null === (bb = (0, vb.e)()) || void 0 === bb || null === (ab = bb.client) || void 0 === ab || null === (Ub = ab.freeCameraController) || void 0 === Ub || !Ub.isEnabled())
            },
            targetsBlock: () => !!(0, vb.h)().i_,
            selectedSlotEmpty: () => {
              var bb;
              const ab = (0, vb.h)();
              return !(null !== (bb = ab.wZ.lbb(ab.ZH)) && void 0 !== bb && bb.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const bb = (0, vb.h)().HZ;
              return !!bb.creative && !!bb.canPickBlocks
            },
            scrollHotbar: bb => {
              eb.m.IR("ScrollInventorySlot", bb)
            },
            hasFullInventory: () => (0, Bb.e)((0, vb.h)()),
            hasLobbyLeaderboard: () => !!(0, vb.h)().HZ.lobbyLeaderboardInfo,
            contextActionInputs: () => {
              var bb, ab, Ub, Ab;
              const Mb = (0, vb.h)();
              return {
                holdingGun: !(null === (bb = Mb.wZ.eab(Mb.ZH)) || void 0 === bb || null === (ab = bb.dD) || void 0 === ab || !ab.isGun()),
                customButtons: null !== (Ub = Mb.HZ.customButtons) && void 0 !== Ub ? Ub : null,
                touchscreenActionButton: null !== (Ab = Mb.HZ.touchscreenActionButton) && void 0 !== Ab ? Ab : null
              }
            },
            pressTouchButton: bb => {
              (0, Yb.sendColyMessage)(Mb.xj, bb)
            }
          }
        })()),
        ab = (0, Ab.b)(),
        Ub = null,
        Tb = null;
      return () => {
        bb(), ab(), null === Ub || void 0 === Ub || Ub(), null === Tb || void 0 === Tb || Tb()
      }
    }
  },
  36023: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb,
      i: () => Rb,
      j: () => kb,
      l: () => Yb,
      n: () => Pb,
      p: () => yb,
      s: () => Lb,
      u: () => Db,
      v: () => jb,
      x: () => Zb
    });
    var Ab = Ub(19),
      Mb = Ub(22);
    const Tb = "clientGameInventoryButtonsChanged",
      Eb = new Map;

    function Yb() {
      return [...Eb.values()].sort(((bb, ab) => {
        var Ub, Ab;
        return (null !== (Ub = bb.order) && void 0 !== Ub ? Ub : 0) - (null !== (Ab = ab.order) && void 0 !== Ab ? Ab : 0)
      }))
    }
    let Bb = null;

    function eb(bb) {
      Bb = bb
    }
    let vb = !1;

    function Lb(bb) {
      vb = !0;
      try {
        bb.onClick()
      } finally {
        vb = !1
      }
      bb.panel && "clientGame" === Ab.c.get("openInGameMenuName") && eb(bb.id)
    }

    function Pb() {
      return vb
    }

    function Xb() {
      return Yb().filter((bb => bb.panel && !bb.disabled))
    }

    function jb(bb) {
      const ab = Xb(),
        Ub = ab.findIndex((bb => bb.id === Bb));
      return !(Ub < 0 || ab.length < 2) && (Lb(ab[(Ub + bb + ab.length) % ab.length]), !0)
    }

    function Rb() {
      return null !== Bb && Xb().length > 1
    }

    function kb() {
      eb(null)
    }

    function yb() {
      "inventory" !== Ab.c.get("openInGameMenuName") && eb(null)
    }

    function Zb() {
      const bb = Bb;
      return eb(null), bb
    }

    function Db(bb) {
      return Eb.set(bb.id, bb), Mb.m.IR(Tb, Yb(), !0), () => {
        Eb.get(bb.id) === bb && (Eb.delete(bb.id), Mb.m.IR(Tb, Yb()))
      }
    }
  },
  36017: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb,
      g: () => kb,
      i: () => yb,
      j: () => Pb,
      l: () => eb,
      o: () => Rb,
      s: () => Xb,
      w: () => vb
    });
    var Ab = Ub(19),
      Mb = Ub(22),
      Tb = Ub(1216),
      Eb = Ub(36023);
    const Yb = "clientGameUiChanged";
    let Bb = null;

    function eb() {
      return Bb
    }

    function vb(bb, ab) {
      const Ub = {
        content: bb,
        menu: ab
      };
      return Bb = Ub, Mb.m.IR(Yb, Bb, !0), () => {
        Bb === Ub && (Bb = null, jb = !1, kb(), Mb.m.IR(Yb, null))
      }
    }
    let Lb = null;

    function Pb() {
      return Lb
    }

    function Xb(bb) {
      return Lb = bb, () => {
        Lb === bb && (Lb = null)
      }
    }
    let jb = !1;

    function Rb() {
      const bb = Ab.c.get("openInGameMenuName");
      "clientGame" !== bb && (jb = "inventory" === bb), (0, Eb.n)() || (0, Eb.j)(), (0, Tb.h)(Tb.b), Ab.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function kb() {
      Zb(!1)
    }

    function yb() {
      Zb(jb)
    }

    function Zb(bb) {
      "clientGame" === Ab.c.get("openInGameMenuName") && Ab.c.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Eb.j)(), jb = !1
    }
  },
  35929: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Bb
    });
    var Ab = Ub(307),
      Mb = Ub(19),
      Tb = Ub(35935),
      Eb = Ub(1548),
      Yb = Ub(1874);

    function Bb(bb, ab) {
      var Ub, Bb, eb;
      if (!Mb.c.get("isKeydownEnabled") || bb.repeat) return;
      const vb = bb.code;
      "Escape" === bb.key ? (0, Eb.f)(bb) : null !== (Ub = Yb.x.OpenSettings) && void 0 !== Ub && Ub.includes(vb) ? (0, Eb.q)(bb, Ab.j.SETTINGS) : null !== (Bb = Yb.x.OpenCharacterCustomization) && void 0 !== Bb && Bb.includes(vb) ? (0, Tb.e)() || (0, Eb.q)(bb, Ab.j.CUSTOMISATION, ab()) : null !== (eb = Yb.x.ShowDebugOverlay) && void 0 !== eb && eb.includes(vb) && Mb.c.set({
        showDebugOverlay: !Mb.c.get("showDebugOverlay")
      })
    }
  },
  35909: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Pb,
      i: () => vb,
      l: () => Xb,
      m: () => Lb
    });
    var Ab = Ub(325),
      Mb = Ub(619),
      Tb = Ub(631),
      Eb = Ub(31);
    const Yb = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Bb = "playSessionGameNameWithVariation",
      eb = "wasMatchmakePlayer";

    function vb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb.j;
      (0, Tb.e)(bb, Yb)
    }

    function Lb() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb.j).setItem(eb, !0)
    }

    function Pb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb.j;
      return (0, Tb.b)(bb, Yb)
    }

    function Xb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Eb.j;
      const Ub = (0, Tb.b)(ab, Yb),
        vb = function(bb) {
          const ab = bb.getItem(Bb);
          return "string" !== typeof ab ? null : ab
        }(ab),
        Lb = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb.j).getItem(eb)
        }(ab);
      let Pb;
      return Pb = null !== Ub && null !== vb && (0, Tb.c)(ab, Yb) && function(bb, ab, Ub) {
          const Mb = (0, Ab.Gb)(bb),
            Tb = (0, Ab.Gb)(ab),
            Eb = (0, Ab.Bb)(bb),
            Yb = (0, Ab.Bb)(ab);
          return !(Mb !== Tb || !Ub) || Mb === Tb && Eb === Yb
        }(vb, bb, Lb) ? Ub : (0, Mb.c)(), (0, Tb.i)(ab, Yb, Pb), ab.setItem(Bb, bb),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb.j).removeItem(eb)
        }(ab), Pb
    }
  },
  35900: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Zb,
      i: () => Db
    });
    var Ab = Ub(950),
      Mb = Ub(595),
      Tb = Ub(325),
      Eb = Ub(954),
      Yb = Ub(603),
      Bb = Ub(644),
      eb = Ub(4201),
      vb = Ub(101),
      Lb = Ub(137),
      Pb = Ub(1639),
      Xb = Ub(116),
      jb = Ub(35909),
      Rb = Ub(31),
      kb = Ub(622),
      yb = Ub(35911);

    function Zb() {
      var bb, ab;
      return [...null !== (bb = navigator.languages) && void 0 !== bb ? bb : [null !== (ab = navigator.language) && void 0 !== ab ? ab : "none"], "en-Gb"]
    }

    function Db(bb, ab, Ub, Db, zb) {
      const xb = (0, Ab.l)(ab) ? (0, Ab.p)(ab) : null,
        ib = {
          cookies: (0, Pb.getAllCookiesForGameNameWithVariation)(ab),
          isMobile: (0, vb.isMobile)(),
          isUsingCustomGameTexturePack: null !== xb && zb(xb),
          generalCookies: {
            joinDiscord: !!Rb.f.getItem("DiscordPressed"),
            newGo: eb.d,
            ...bb.getMetricsCookies(),
            trafficCode: Db,
            compliance: vb.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, vb.getBrowserName)(),
            version: (0, vb.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, vb.getPlatformType)(),
            deviceType: (0, Xb.b)()
          },
          isLoggedIn: bb.isLoggedIn(),
          lobbyName: Ub,
          languages: Zb(),
          version: Mb.b,
          siteUsed: Lb.p,
          subsiteUsed: Lb.s,
          playSessionId: (0, jb.l)(ab),
          visitSessionId: (0, kb.e)(),
          clientReason: Yb.j.reason,
          budgetBasis: (0, yb.g)(),
          ...null !== Bb.q && {
            diagClaim: Bb.q.claimId
          }
        };
      return null !== xb && (0, Tb.oc)(xb) ? (ib.lobbyName = (0, Ab.i)(xb, (0, Ab.m)(ab), Ub), {
        roomName: `classic_${Eb.e}`,
        joinOptions: ib
      }) : {
        roomName: ab,
        joinOptions: ib
      }
    }
  },
  35921: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab,
      g: () => Mb,
      j: () => Tb
    });
    const Ab = 1024,
      Mb = 1024 * Ab;

    function Tb(bb) {
      return (bb / Mb).toFixed(1)
    }
  },
  35913: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb,
      g: () => Yb,
      h: () => Eb,
      l: () => Bb,
      n: () => eb
    });
    var Ab = Ub(205);
    const Mb = 32 * Ub(35921).g,
      Tb = 6144,
      Eb = 4608,
      Yb = 512;

    function Bb(bb) {
      return Math.floor(Mb * bb / Tb)
    }

    function eb(bb) {
      const ab = bb - Math.floor(bb / 6);
      let Ub = Ab.c.maxChunkHorizAddDistance,
        Mb = Ab.c.maxChunkVertAddDistance;
      if (vb(Ub + 1, Mb + 1) <= ab) return null;
      for (; vb(Ub + 1, Mb + 1) > ab && (Ub > 0 || Mb > 0);) Ub > Mb ? Ub-- : Mb--;
      return {
        horizontal: Ub,
        vertical: Mb
      }
    }

    function vb(bb, ab) {
      const Ub = Math.max(bb, ab);
      let Ab = 0;
      for (let Mb = -Ub; Mb <= Ub; Mb++)
        for (let Tb = -Ub; Tb <= Ub; Tb++)
          for (let Eb = -Ub; Eb <= Ub; Eb++) Lb(bb, ab, Mb, Tb, Eb) && Ab++;
      return Ab
    }

    function Lb(bb, ab, Ub, Ab, Mb) {
      const Tb = Ub * Ub + Mb * Mb;
      return bb === ab ? Tb + Ab * Ab <= bb * bb : bb > ab ? Math.abs(Ab) <= ab && Tb + Ab * Ab <= bb * bb : Tb <= bb * bb && Tb + Ab * Ab <= ab * ab
    }
  },
  35911: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => ib,
      g: () => xb,
      k: () => zb
    });
    var Ab = Ub(205),
      Mb = Ub(101),
      Tb = Ub(2630),
      Eb = Ub(4072),
      Yb = Ub(610),
      Bb = Ub(35913);
    const eb = 1048576,
      vb = 1024 * eb,
      Lb = 400 * eb,
      Pb = 147456,
      Xb = .5,
      jb = 1.5 * vb,
      Rb = 768 * eb;

    function kb(bb) {
      return Lb + bb * Pb
    }

    function yb(bb, ab, Ub) {
      var Mb, Eb;
      let {
        footprintBytes: Yb,
        basis: eb,
        namesLimit: yb
      } = function(bb) {
        const {
          os: ab,
          deviceMemory: Ub
        } = bb;
        if ("ios" === ab) switch ((0, Tb.h)(bb)) {
          case "ipad_m":
            return {
              footprintBytes: kb(Bb.e), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: Rb, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: jb, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: Rb, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof Ub && Number.isFinite(Ub) && Ub > 0 ? {
          footprintBytes: Ub * vb * Xb,
          basis: `memory-${Ub}`,
          namesLimit: !0
        } : "android" === ab ? {
          footprintBytes: Rb,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: kb(Bb.h),
          basis: "unreported",
          namesLimit: !1
        }
      }(bb);
      if (Ub) {
        const bb = Math.min(Yb, kb(Bb.e));
        Yb = Lb + Math.max(0, bb - Lb) / 2, eb += "+killed", yb = !0
      }
      null !== ab && kb(ab) < Yb && (Yb = kb(ab), eb += "+learned", yb = !0);
      const Zb = function(bb) {
          const ab = Math.floor((bb - Lb) / Pb);
          return Math.min(Bb.e, Math.max(Bb.g, ab))
        }(Yb),
        Db = (0, Bb.n)(Zb);
      return {
        footprintBytes: Yb,
        shedFootprintBytes: yb ? Math.max(Yb, kb(Zb)) : null,
        chunkCap: Zb,
        maxHorizDistance: null !== (Mb = null === Db || void 0 === Db ? void 0 : Db.horizontal) && void 0 !== Mb ? Mb : Ab.c.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Eb = null === Db || void 0 === Db ? void 0 : Db.vertical) && void 0 !== Eb ? Eb : Ab.c.maxChunkVertAddDistance,
        basis: eb
      }
    }
    let Zb = null;

    function Db() {
      return yb({
        os: (0, Mb.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Tb.k)()
      }, (0, Eb.f)(), (0, Yb.J)("wasm").length > 0)
    }

    function zb() {
      return Zb ??= Db(), Zb
    }

    function xb() {
      var bb;
      return (null !== (bb = Zb) && void 0 !== bb ? bb : Db()).basis
    }

    function ib(bb, ab) {
      return bb.setChunkCap(ab.chunkCap)
    }
  },
  36195: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb,
      i: () => Tb,
      l: () => Pb,
      m: () => Yb,
      o: () => Bb,
      r: () => eb,
      s: () => Lb,
      u: () => vb,
      x: () => Eb
    });
    var Ab = Ub(1189);
    let Mb = function(bb) {
        return bb[bb.Join = 0] = "Join", bb[bb.Leave = 1] = "Leave", bb[bb.Push = 2] = "Push", bb[bb.Cursor = 3] = "Cursor", bb[bb.Submit = 4] = "Submit", bb[bb.ReloadAsVariation = 5] = "ReloadAsVariation", bb[bb.CreateFile = 6] = "CreateFile", bb[bb.RenameFile = 7] = "RenameFile", bb[bb.DeleteFile = 8] = "DeleteFile", bb[bb.SetEngine = 9] = "SetEngine", bb[bb.RenameFolder = 10] = "RenameFolder", bb
      }({}),
      Tb = function(bb) {
        return bb[bb.Joined = 0] = "Joined", bb[bb.Updates = 1] = "Updates", bb[bb.Presence = 2] = "Presence", bb[bb.RemoteCursor = 3] = "RemoteCursor", bb[bb.ForceClose = 4] = "ForceClose", bb[bb.LobbyFilesChanged = 5] = "LobbyFilesChanged", bb[bb.EngineSettings = 6] = "EngineSettings", bb
      }({});

    function Eb(bb) {
      return "lobby" === bb.kind ? `lobby:${bb.path}` : `codeBlock:${bb.pos[0]},${bb.pos[1]},${bb.pos[2]}`
    }

    function Yb(bb) {
      if ("lobby" === bb) return {
        kind: "lobby",
        path: Ab.h
      };
      if (bb.startsWith("lobby:")) {
        const ab = bb.slice(6);
        return Lb(ab) ? {
          kind: "lobby",
          path: ab
        } : null
      }
      const ab = bb.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return ab ? {
        kind: "codeBlock",
        pos: [parseInt(ab[1]), parseInt(ab[2]), parseInt(ab[3])]
      } : null
    }

    function Bb(bb) {
      return bb.endsWith(".d.ts")
    }

    function eb(bb) {
      return bb.endsWith(".ts") && !Bb(bb)
    }
    const vb = 64;

    function Lb(bb) {
      if (!bb || bb !== bb.trim()) return !1;
      if (bb.length > vb) return !1;
      if (bb.startsWith("/") || bb.includes("\\") || bb.includes("\0")) return !1;
      if (!Bb(bb) && !eb(bb) && ! function(bb) {
          return bb.endsWith(".js") && !bb.endsWith(".min.js") && !bb.endsWith(".bundle.js")
        }(bb)) return !1;
      const ab = bb.split("/");
      for (const Ub of ab)
        if ("" === Ub || "." === Ub || ".." === Ub) return !1;
      return !0
    }
    const Pb = 14e3
  },
  38325: (bb, ab, Ub) => {
    function Ab(bb, ab, Ub, Ab, Mb) {
      var Tb = {};
      return Object.keys(Ab).forEach((function(bb) {
        Tb[bb] = Ab[bb]
      })), Tb.enumerable = !!Tb.enumerable, Tb.configurable = !!Tb.configurable, ("value" in Tb || Tb.initializer) && (Tb.writable = !0), Tb = Ub.slice().reverse().reduce((function(Ub, Ab) {
        return Ab(bb, ab, Ub) || Ub
      }), Tb), Mb && void 0 !== Tb.initializer && (Tb.value = Tb.initializer ? Tb.initializer.call(Mb) : void 0, Tb.initializer = void 0), void 0 === Tb.initializer && (Object.defineProperty(bb, ab, Tb), Tb = null), Tb
    }
    Ub.d(ab, {
      d: () => Ab
    })
  },
  38323: (bb, ab, Ub) => {
    function Ab(bb, ab, Ub, Ab) {
      Ub && Object.defineProperty(bb, ab, {
        enumerable: Ub.enumerable,
        configurable: Ub.configurable,
        writable: Ub.writable,
        value: Ub.initializer ? Ub.initializer.call(Ab) : void 0
      })
    }
    Ub.d(ab, {
      c: () => Ab
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
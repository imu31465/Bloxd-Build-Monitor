export const id = 188;
export const ids = [188];
export const modules = {
  38855: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ju,
      g: () => Qu
    });
    var Eu = yu(3895);
    let Ku = null;

    function Qu(uu) {
      return null !== Ku && uu === Ku
    }

    function mu() {
      this.vF = !1, this.stopPropagation = !1, this.Kw = !1, this.disabled = !1
    }
    class Ju {
      constructor(uu, Ru) {
        this.version = "0.7.0";
        var yu = Object.assign({}, new mu, Ru || {});
        this.element = uu || document, this.vF = !!yu.vF, this.stopPropagation = !!yu.stopPropagation, this.Kw = !!yu.Kw, this.disabled = !!yu.disabled, this.filterEvents = (uu, Ru) => !0, this.down = new Eu.EventEmitter, this.up = new Eu.EventEmitter, this.state = {}, this.Jw = {
          dx: 0,
          dy: 0,
          bRu: 0,
          CRu: 0,
          kRu: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Xu(this) : document.addEventListener("DOMContentLoaded", (uu => {
          Xu(this)
        }), {
          once: !0
        })
      }
      bind(uu) {
        for (var Ru = arguments.length, yu = new Array(Ru > 1 ? Ru - 1 : 0), Eu = 1; Eu < Ru; Eu++) yu[Eu - 1] = arguments[Eu];
        yu.forEach((Ru => {
          var yu = this._keyBindmap[Ru] || [];
          yu.includes(uu) || (yu.push(uu), this._keyBindmap[Ru] = yu)
        })), this.state[uu] = !!this.state[uu], this.pressCount[uu] = this.pressCount[uu] || 0, this.releaseCount[uu] = this.releaseCount[uu] || 0
      }
      unbind(uu) {
        for (var Ru in this._keyBindmap) {
          var yu = this._keyBindmap[Ru],
            Eu = yu.indexOf(uu);
          Eu > -1 && yu.splice(Eu, 1)
        }
      }
      getBindings() {
        var uu = {};
        for (var Ru in this._keyBindmap) {
          this._keyBindmap[Ru].forEach((yu => {
            uu[yu] = uu[yu] || [], uu[yu].push(Ru)
          }))
        }
        return uu
      }
      sr() {
        Nu(this.Jw), Nu(this.pressCount), Nu(this.releaseCount)
      }
    }

    function Nu(uu) {
      for (var Ru in uu) uu[Ru] = 0
    }

    function Xu(uu) {
      window.addEventListener("keydown", Tu.bind(null, uu, !0), !1), window.addEventListener("keyup", Tu.bind(null, uu, !1), !1);
      var Ru = {
        passive: !0
      };
      uu.element.addEventListener("touchstart", xu.bind(void 0, uu), {
        passive: !1
      }), uu.element.addEventListener("touchend", pu.bind(void 0, uu), Ru), uu.element.addEventListener("mousedown", Wu.bind(null, uu, !0), Ru), window.document.addEventListener("mouseup", Wu.bind(null, uu, !1), Ru), uu.element.addEventListener("touchmove", ju.bind(null, uu), Ru), uu.element.addEventListener("mousemove", ju.bind(null, uu), Ru), window.PointerEvent, uu.element.addEventListener("wheel", Hu.bind(null, uu), Ru), uu.element.addEventListener("contextmenu", du.bind(null, uu), !1), window.addEventListener("blur", ku.bind(null, uu), !1)
    }
    var Vu = 0,
      ru = 0,
      Bu = null;

    function xu(uu, Ru) {
      Ru.preventDefault(), Su(Ru)
    }

    function Su(uu) {
      let Ru = !1;
      for (let yu = 0; yu < uu.touches.length; ++yu)
        if (uu.touches[yu].identifier === Bu) {
          Ru = !0;
          break
        } if (!Ru) {
        const Ru = uu.changedTouches[0];
        Vu = Ru.clientX, ru = Ru.clientY, Bu = Ru.identifier
      }
    }

    function pu(uu, Ru) {
      for (var yu = Ru.changedTouches, Eu = 0; Eu < yu.length; ++Eu) yu[Eu].identifier === Bu && (Bu = null)
    }

    function Tu(uu, Ru, yu) {
      try {
        eu(uu, yu), Ru && yu.isTrusted && !yu.repeat && uu._keyStates[yu.code] && Au(uu, yu.code)
      } finally {
        Du(yu.code, Ru, uu, yu)
      }
    }

    function Wu(uu, Ru, yu) {
      try {
        eu(uu, yu)
      } finally {
        ! function(uu, Ru, yu) {
          if ("pointerId" in yu)
            if (Ru) {
              if (null !== uu._touches.currID) return;
              uu._touches.currID = yu.pointerId
            } else {
              if (uu._touches.currID !== yu.pointerId) return;
              uu._touches.currID = null
            } var Eu = "button" in yu ? yu.button + 1 : 1;
          Du("Mouse" + Eu, Ru, uu, yu)
        }(uu, Ru, yu)
      }
    }

    function ju(uu, Ru) {
      var yu = Ru.movementX || Ru.mozMovementX || 0,
        Eu = Ru.movementY || Ru.mozMovementY || 0;
      if (Ru.touches && 0 === (yu | Eu)) {
        var Ku = function(uu) {
          Su(uu);
          for (let Ru = 0; Ru < uu.changedTouches.length; ++Ru)
            if (uu.changedTouches[Ru].identifier == Bu) {
              const yu = uu.changedTouches[Ru],
                Eu = [yu.clientX - Vu, yu.clientY - ru];
              return Vu = yu.clientX, ru = yu.clientY, Eu
            } return console.error(`Did not find touch id ${Bu}`), [0, 0]
        }(Ru);
        yu = Ku[0], Eu = Ku[1]
      }
      uu.Jw.dx += yu, uu.Jw.dy += Eu
    }

    function Hu(uu, Ru) {
      eu(uu, Ru);
      var yu = 1;
      switch (Ru.deltaMode) {
        case 0:
          yu = 1;
          break;
        case 1:
          yu = 12;
          break;
        case 2:
          yu = uu.element.clientHeight || window.innerHeight
      }
      uu.Jw.bRu += (Ru.deltaX || 0) * yu, uu.Jw.CRu += (Ru.deltaY || 0) * yu, uu.Jw.kRu += (Ru.deltaZ || 0) * yu
    }

    function du(uu, Ru) {
      if (!uu.Kw) return Ru.preventDefault(), !1
    }
    var bu = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function Cu(uu, Ru) {
      return !!uu[bu[Ru]] || ("AltRight" === Ru || "ControlLeft" === Ru) && "function" === typeof uu.getModifierState && !0 === uu.getModifierState("AltGraph")
    }

    function ku(uu, Ru) {
      for (var yu in uu._modifiersHeldThroughBlur = {}, bu) uu._keyStates[yu] && (uu._modifiersHeldThroughBlur[yu] = !0);
      Ru && Ru.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (uu) {
          return !0
        }
      }() && (clearTimeout(uu._blurRelease), uu._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var Ru in uu._modifiersHeldThroughBlur = {}, uu._keyStates) uu._keyStates[Ru] && !/^Mouse\d/.test(Ru) && Au(uu, Ru)
      }), 0))
    }

    function eu(uu, Ru) {
      var yu = uu._modifiersHeldThroughBlur;
      if (yu && Ru.isTrusted && document.hasFocus())
        for (var Eu in yu) delete yu[Eu], uu._keyStates[Eu] && Eu !== Ru.code && (Cu(Ru, Eu) || Au(uu, Eu))
    }

    function Au(uu, Ru) {
      const yu = {
          code: Ru,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Eu = Ku;
      Ku = yu;
      try {
        Du(Ru, !1, uu, yu)
      } finally {
        Ku = Eu
      }
    }

    function Du(uu, Ru, yu, Eu) {
      var Ku = yu._keyBindmap[uu];
      Ku && (Mu(yu._keyStates[uu], Ru) && (yu._keyStates[uu] = Ru, Ku.forEach((uu => {
        (!yu.filterEvents || yu.filterEvents(Eu, uu)) && function(uu, Ru, yu, Eu) {
          var Ku = Ru ? yu.pressCount : yu.releaseCount;
          Ku[uu] = (Ku[uu] || 0) + 1;
          var Qu = yu._bindPressCount[uu] || 0;
          (Qu += Ru ? 1 : -1) < 0 && (Qu = 0);
          yu._bindPressCount[uu] = Qu;
          var mu = yu.state[uu];
          if (Mu(mu, Qu)) {
            yu.state[uu] = Qu > 0;
            var Ju = Ru ? yu.down : yu.up;
            yu.disabled || Ju.emit(uu, Eu)
          }
        }(uu, Ru, yu, Eu)
      }))), "button" in Eu || (yu.vF && !Eu.defaultPrevented && Eu.preventDefault(), yu.stopPropagation && Eu.stopPropagation()))
    }

    function Mu(uu, Ru) {
      return uu ? !Ru : Ru
    }
  },
  36515: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => xu,
      h: () => Su
    });
    var Eu = yu(64),
      Ku = yu(2780),
      Qu = yu(1400),
      mu = yu(1899),
      Ju = yu(36459),
      Nu = yu(610),
      Xu = yu(1035),
      Vu = yu.n(Xu),
      ru = yu(1079);
    const Bu = {},
      xu = (0, Eu.memo)((function() {
        const uu = (0, Ku.c)();
        return (0, Qu.e)("damagedByOtherPlayer", (Ru => {
          let {
            vy: yu,
            direction: Eu
          } = Ru;
          const Ku = yu || "nonDirectional";
          if (Bu[Ku]) {
            const Ru = Bu[Ku];
            clearTimeout(Ru.timeout), Ru.direction = Eu, Ru.timeout = setTimeout((() => {
              delete Bu[Ku], uu()
            }), 800)
          } else Bu[Ku] = {
            direction: Eu,
            WU: null,
            timeout: setTimeout((() => {
              delete Bu[Ku], uu()
            }), 800)
          };
          uu()
        })), (0, mu.d)("kill", (Ru => {
          let {
            killer: yu,
            victim: Eu
          } = Ru;
          const Ku = Eu.id;
          yu.local && Ku && Ku in Bu && (clearTimeout(Bu[Ku].timeout), delete Bu[Ku], uu())
        })), (0, Eu.useEffect)((() => {
          const uu = (0, Ju.f)("turnDamageIndicators", Su);
          return () => {
            uu();
            for (const uu in Bu) clearTimeout(Bu[uu].timeout), delete Bu[uu]
          }
        }), []), (0, ru.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(Bu).map((uu => {
            let [Ru, yu] = uu;
            const Eu = (0, Nu.E)(yu.direction);
            return (0, ru.jsx)("div", {
              ref: uu => {
                Bu[Ru] && (Bu[Ru].WU = uu)
              },
              className: Vu()("DamageIndicator", {
                DamageIndicatorFullCircle: Eu
              })
            }, Ru)
          }))
        })
      }));

    function Su(uu) {
      for (const Ru in Bu) {
        const {
          direction: yu,
          WU: Eu
        } = Bu[Ru];
        if ((0, Nu.E)(yu)) continue;
        const Ku = yu - uu;
        Eu.style.rotate = `${Ku}rad`
      }
    }
  },
  36341: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      g: () => Qu
    });
    let Eu = !1;

    function Ku() {
      return Eu
    }

    function Qu(uu) {
      return Eu !== uu && (Eu = uu, !0)
    }
  },
  8991: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu,
      f: () => Ku
    });
    var Eu = yu(27);

    function Ku(uu, Ru) {
      return uu && !Ru
    }

    function Qu() {
      return Ku(Eu.d.get("isTouchScreen"), Eu.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  40246: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      startPadGameplay: () => du
    });
    yu(40125);
    var Eu = yu(40127),
      Ku = yu(3574),
      Qu = yu(27),
      mu = yu(38827),
      Ju = yu(3490),
      Nu = yu(38844),
      Xu = yu(34),
      Vu = yu(2632),
      ru = yu(38207),
      Bu = yu(8594),
      xu = yu(40132);
    const Su = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var pu = yu(40152),
      Tu = yu(8566);
    const Wu = uu => uu.padSneakToggled || !!Qu.d.get("clientEscMenuOptions").crouchIsToggle && uu.crouchToggled,
      ju = () => {
        const uu = (() => {
          const uu = (0, Bu.d)();
          let Ru = Su;
          const yu = new xu.e;
          let Eu = !1,
            Ku = 0;
          const Qu = () => {
            const yu = performance.now(),
              Qu = 0 === Ku ? 0 : yu - Ku;
            if (Ku = yu, !Eu) return uu.discardPending(), null;
            const mu = (0, xu.n)(Ru, Qu),
              Ju = uu.drainLookDelta(),
              Nu = (0, ru.h)();
            return {
              RD: (mu.RD + Ju.RD) * Nu,
              mD: (mu.mD + Ju.mD) * Nu
            }
          };
          return {
            update: (uu, Ku, mu, Ju) => {
              uu.camera.ZY !== Qu && (uu.camera.ZY = Qu), Eu = !0, Ru = (0, xu.p)(yu, Ku, mu, Ju, performance.now())
            },
            release: () => {
              Eu = !1, Ru = Su, yu.reset()
            },
            uninstall: uu => {
              uu.camera.ZY === Qu && (uu.camera.ZY = null)
            }
          }
        })();
        return {
          update: (Ru, yu, Eu) => {
            uu.update((0, Vu.h)(), Ru, yu, Eu)
          },
          release: uu.release,
          uninstall: () => {
            const Ru = (0, Vu.h)();
            Ru && uu.uninstall(Ru)
          }
        }
      };
    var Hu = yu(40145);
    yu(37418), yu(8456);
    yu(8475).b;
    const du = () => {
      const uu = (0, Hu.b)((() => {
          const uu = {
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
            bodies: () => (0, mu.e)(),
            look: ju(),
            move: (Ru, yu) => {
              const Eu = (0, Vu.h)(),
                Ku = Eu.nH.Syu();
              if (uu.x = Ru.x, uu.y = Ru.y, uu.magnitude = Ru.magnitude, uu.headingOffset = Ru.headingOffset, uu.jumpHeld = Ru.jumpHeld, Ru.jumpPressed && (uu.jumpPressedSinceTick = !0), uu.running = Ru.running, uu.sprintHeld = Ru.sprintHeld, yu) {
                const Ru = (0, pu.h)({
                  ...yu,
                  descending: Eu.nH.WRu(Eu.ZI).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!Eu.IH.canCrouch,
                  toggled: Wu(Ku)
                });
                uu.crouchHeld = Ru.crouchHeld, Ku.padSneakToggled = Ru.toggled, Ku.crouchToggled = !1, (0, Tu.c)(Ru.toggled)
              }
              Ku.gamepad = uu
            },
            stopMoving: () => {
              var Ru;
              Object.assign(uu, {
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
              const yu = null === (Ru = (0, Vu.h)()) || void 0 === Ru ? void 0 : Ru.nH.Syu();
              (null === yu || void 0 === yu ? void 0 : yu.gamepad) === uu && (yu.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: uu => {
              const Ru = (0, Vu.h)(),
                yu = null === Ru || void 0 === Ru ? void 0 : Ru.nH.Syu();
              "touch" === uu ? ((0, Tu.c)(!1), null !== yu && void 0 !== yu && yu.padSneakToggled && (yu.padSneakToggled = !1, yu.isTouchscreen && !yu.gamepad && Ru.nH.LRu(Ru.ZI).setCrouching(!!Ru.IH.canCrouch && yu.touchCrouch))) : "gamepad" === uu && yu && (0, Tu.c)(Wu(yu))
            },
            hasPlayer: () => {
              var uu;
              return !(null === (uu = (0, Vu.h)()) || void 0 === uu || !uu.ZI)
            },
            isPlayerDead: () => {
              var uu;
              const Ru = (0, Vu.h)();
              return !1 === (null === (uu = Ru.nH.Jyu(Ru.ZI)) || void 0 === uu ? void 0 : uu.isAlive)
            },
            isReplayMode: () => {
              var uu, Ru;
              return !(null === (uu = (0, Vu.e)()) || void 0 === uu || null === (Ru = uu.client) || void 0 === Ru || !Ru.isReplayMode())
            },
            isFreeCameraOn: () => {
              var uu, Ru, yu;
              return !(null === (uu = (0, Vu.e)()) || void 0 === uu || null === (Ru = uu.client) || void 0 === Ru || null === (yu = Ru.freeCameraController) || void 0 === yu || !yu.isEnabled())
            },
            targetsBlock: () => !!(0, Vu.h)().huu,
            selectedSlotEmpty: () => {
              var uu;
              const Ru = (0, Vu.h)();
              return !(null !== (uu = Ru.nH.FRu(Ru.ZI)) && void 0 !== uu && uu.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const uu = (0, Vu.h)().IH;
              return !!uu.creative && !!uu.canPickBlocks
            },
            scrollHotbar: uu => {
              Xu.k.Op("ScrollInventorySlot", uu)
            },
            hasFullInventory: () => (0, Nu.c)((0, Vu.h)()),
            hasLobbyLeaderboard: () => !!(0, Vu.h)().IH.lobbyLeaderboardInfo,
            contextActionInputs: () => {
              var uu, Ru, yu, Eu;
              const Ku = (0, Vu.h)();
              return {
                holdingGun: !(null === (uu = Ku.nH.Nyu(Ku.ZI)) || void 0 === uu || null === (Ru = uu.pC) || void 0 === Ru || !Ru.isGun()),
                customButtons: null !== (yu = Ku.IH.customButtons) && void 0 !== yu ? yu : null,
                touchscreenActionButton: null !== (Eu = Ku.IH.touchscreenActionButton) && void 0 !== Eu ? Eu : null
              }
            },
            pressTouchButton: uu => {
              (0, Ju.sendColyMessage)(Ku.sj, uu)
            }
          }
        })()),
        Ru = (0, Eu.b)(),
        yu = null,
        Qu = null;
      return () => {
        uu(), Ru(), null === yu || void 0 === yu || yu(), null === Qu || void 0 === Qu || Qu()
      }
    }
  },
  36449: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      d: () => pu,
      h: () => Tu,
      k: () => Ju,
      o: () => Bu,
      p: () => Wu,
      q: () => ru,
      u: () => Hu,
      v: () => Su,
      w: () => ju
    });
    var Eu = yu(27),
      Ku = yu(34);
    const Qu = "clientGameInventoryButtonsChanged",
      mu = new Map;

    function Ju() {
      return [...mu.values()].sort(((uu, Ru) => {
        var yu, Eu;
        return (null !== (yu = uu.order) && void 0 !== yu ? yu : 0) - (null !== (Eu = Ru.order) && void 0 !== Eu ? Eu : 0)
      }))
    }
    let Nu = null;

    function Xu(uu) {
      Nu = uu
    }
    let Vu = !1;

    function ru(uu) {
      Vu = !0;
      try {
        uu.onClick()
      } finally {
        Vu = !1
      }
      uu.panel && "clientGame" === Eu.d.get("openInGameMenuName") && Xu(uu.id)
    }

    function Bu() {
      return Vu
    }

    function xu() {
      return Ju().filter((uu => uu.panel && !uu.disabled))
    }

    function Su(uu) {
      const Ru = xu(),
        yu = Ru.findIndex((uu => uu.id === Nu));
      return !(yu < 0 || Ru.length < 2) && (ru(Ru[(yu + uu + Ru.length) % Ru.length]), !0)
    }

    function pu() {
      return null !== Nu && xu().length > 1
    }

    function Tu() {
      Xu(null)
    }

    function Wu() {
      "inventory" !== Eu.d.get("openInGameMenuName") && Xu(null)
    }

    function ju() {
      const uu = Nu;
      return Xu(null), uu
    }

    function Hu(uu) {
      return mu.set(uu.id, uu), Ku.k.Op(Qu, Ju(), !0), () => {
        mu.get(uu.id) === uu && (mu.delete(uu.id), Ku.k.Op(Qu, Ju()))
      }
    }
  },
  36445: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju,
      f: () => Tu,
      i: () => Wu,
      m: () => Bu,
      o: () => Xu,
      q: () => pu,
      u: () => xu,
      w: () => Vu
    });
    var Eu = yu(27),
      Ku = yu(34),
      Qu = yu(1250),
      mu = yu(36449);
    const Ju = "clientGameUiChanged";
    let Nu = null;

    function Xu() {
      return Nu
    }

    function Vu(uu, Ru) {
      const yu = {
        content: uu,
        menu: Ru
      };
      return Nu = yu, Ku.k.Op(Ju, Nu, !0), () => {
        Nu === yu && (Nu = null, Su = !1, Tu(), Ku.k.Op(Ju, null))
      }
    }
    let ru = null;

    function Bu() {
      return ru
    }

    function xu(uu) {
      return ru = uu, () => {
        ru === uu && (ru = null)
      }
    }
    let Su = !1;

    function pu() {
      const uu = Eu.d.get("openInGameMenuName");
      "clientGame" !== uu && (Su = "inventory" === uu), (0, mu.o)() || (0, mu.h)(), (0, Qu.o)(Qu.b), Eu.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Tu() {
      ju(!1)
    }

    function Wu() {
      ju(Su)
    }

    function ju(uu) {
      "clientGame" === Eu.d.get("openInGameMenuName") && Eu.d.set({
        openInGameMenuName: uu ? "inventory" : null
      }), uu || (0, mu.h)(), Su = !1
    }
  },
  36332: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Nu
    });
    var Eu = yu(330),
      Ku = yu(27),
      Qu = yu(36341),
      mu = yu(1583),
      Ju = yu(1915);

    function Nu(uu, Ru) {
      var yu, Nu, Xu;
      if (!Ku.d.get("isKeydownEnabled") || uu.repeat) return;
      const Vu = uu.code;
      "Escape" === uu.key ? (0, mu.k)(uu) : null !== (yu = Ju.x.OpenSettings) && void 0 !== yu && yu.includes(Vu) ? (0, mu.u)(uu, Eu.s.SETTINGS) : null !== (Nu = Ju.x.OpenCharacterCustomization) && void 0 !== Nu && Nu.includes(Vu) ? (0, Qu.e)() || (0, mu.u)(uu, Eu.s.CUSTOMISATION, Ru()) : null !== (Xu = Ju.x.ShowDebugOverlay) && void 0 !== Xu && Xu.includes(Vu) && Ku.d.set({
        showDebugOverlay: !Ku.d.get("showDebugOverlay")
      })
    }
  },
  36322: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Bu,
      h: () => Vu,
      l: () => xu,
      n: () => ru
    });
    var Eu = yu(343),
      Ku = yu(631),
      Qu = yu(642),
      mu = yu(47);
    const Ju = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Nu = "playSessionGameNameWithVariation",
      Xu = "wasMatchmakePlayer";

    function Vu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mu.j;
      (0, Qu.h)(uu, Ju)
    }

    function ru() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mu.j).setItem(Xu, !0)
    }

    function Bu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mu.j;
      return (0, Qu.c)(uu, Ju)
    }

    function xu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mu.j;
      const yu = (0, Qu.c)(Ru, Ju),
        Vu = function(uu) {
          const Ru = uu.getItem(Nu);
          return "string" !== typeof Ru ? null : Ru
        }(Ru),
        ru = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mu.j).getItem(Xu)
        }(Ru);
      let Bu;
      return Bu = null !== yu && null !== Vu && (0, Qu.e)(Ru, Ju) && function(uu, Ru, yu) {
          const Ku = (0, Eu.cc)(uu),
            Qu = (0, Eu.cc)(Ru),
            mu = (0, Eu.Wb)(uu),
            Ju = (0, Eu.Wb)(Ru);
          return !(Ku !== Qu || !yu) || Ku === Qu && mu === Ju
        }(Vu, uu, ru) ? yu : (0, Ku.d)(), (0, Qu.i)(Ru, Ju, Bu), Ru.setItem(Nu, uu),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mu.j).removeItem(Xu)
        }(Ru), Bu
    }
  },
  36316: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => ju,
      c: () => Hu
    });
    var Eu = yu(1001),
      Ku = yu(614),
      Qu = yu(343),
      mu = yu(1008),
      Ju = yu(624),
      Nu = yu(654),
      Xu = yu(4291),
      Vu = yu(106),
      ru = yu(145),
      Bu = yu(1661),
      xu = yu(125),
      Su = yu(36322),
      pu = yu(47),
      Tu = yu(640),
      Wu = yu(36324);

    function ju() {
      var uu, Ru;
      return [...null !== (uu = navigator.languages) && void 0 !== uu ? uu : [null !== (Ru = navigator.language) && void 0 !== Ru ? Ru : "none"], "en-Gb"]
    }

    function Hu(uu, Ru, yu, Hu, du) {
      const bu = (0, Eu.i)(Ru) ? (0, Eu.n)(Ru) : null,
        Cu = {
          cookies: (0, Bu.getAllCookiesForGameNameWithVariation)(Ru),
          isMobile: (0, Vu.isMobile)(),
          isUsingCustomGameTexturePack: null !== bu && du(bu),
          generalCookies: {
            joinDiscord: !!pu.i.getItem("DiscordPressed"),
            newGo: Xu.b,
            ...uu.getMetricsCookies(),
            trafficCode: Hu,
            compliance: Vu.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Vu.getBrowserName)(),
            version: (0, Vu.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Vu.getPlatformType)(),
            deviceType: (0, xu.c)()
          },
          isLoggedIn: uu.isLoggedIn(),
          lobbyName: yu,
          languages: ju(),
          version: Ku.c,
          siteUsed: ru.v,
          subsiteUsed: ru.C,
          playSessionId: (0, Su.l)(Ru),
          visitSessionId: (0, Tu.e)(),
          clientReason: Ju.i.reason,
          budgetBasis: (0, Wu.f)(),
          ...null !== Nu.n && {
            diagClaim: Nu.n.claimId
          }
        };
      return null !== bu && (0, Qu.Qc)(bu) ? (Cu.lobbyName = (0, Eu.h)(bu, (0, Eu.m)(Ru), yu), {
        roomName: `classic_${mu.e}`,
        joinOptions: Cu
      }) : {
        roomName: Ru,
        joinOptions: Cu
      }
    }
  },
  36330: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu,
      g: () => Ku,
      h: () => Qu
    });
    const Eu = 1024,
      Ku = 1024 * Eu;

    function Qu(uu) {
      return (uu / Ku).toFixed(1)
    }
  },
  36328: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu,
      g: () => Ju,
      i: () => mu,
      j: () => Nu,
      l: () => Xu
    });
    var Eu = yu(212);
    const Ku = 32 * yu(36330).g,
      Qu = 6144,
      mu = 4608,
      Ju = 512;

    function Nu(uu) {
      return Math.floor(Ku * uu / Qu)
    }

    function Xu(uu) {
      const Ru = uu - Math.floor(uu / 6);
      let yu = Eu.f.maxChunkHorizAddDistance,
        Ku = Eu.f.maxChunkVertAddDistance;
      if (Vu(yu + 1, Ku + 1) <= Ru) return null;
      for (; Vu(yu + 1, Ku + 1) > Ru && (yu > 0 || Ku > 0);) yu > Ku ? yu-- : Ku--;
      return {
        horizontal: yu,
        vertical: Ku
      }
    }

    function Vu(uu, Ru) {
      const yu = Math.max(uu, Ru);
      let Eu = 0;
      for (let Ku = -yu; Ku <= yu; Ku++)
        for (let Qu = -yu; Qu <= yu; Qu++)
          for (let mu = -yu; mu <= yu; mu++) ru(uu, Ru, Ku, Qu, mu) && Eu++;
      return Eu
    }

    function ru(uu, Ru, yu, Eu, Ku) {
      const Qu = yu * yu + Ku * Ku;
      return uu === Ru ? Qu + Eu * Eu <= uu * uu : uu > Ru ? Math.abs(Eu) <= Ru && Qu + Eu * Eu <= uu * uu : Qu <= uu * uu && Qu + Eu * Eu <= Ru * Ru
    }
  },
  36324: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Cu,
      f: () => bu,
      g: () => du
    });
    var Eu = yu(212),
      Ku = yu(106),
      Qu = yu(2716),
      mu = yu(4164),
      Ju = yu(629),
      Nu = yu(36328);
    const Xu = 1048576,
      Vu = 1024 * Xu,
      ru = 400 * Xu,
      Bu = 147456,
      xu = .5,
      Su = 1.5 * Vu,
      pu = 768 * Xu;

    function Tu(uu) {
      return ru + uu * Bu
    }

    function Wu(uu, Ru, yu) {
      var Ku, mu;
      let {
        footprintBytes: Ju,
        basis: Xu,
        namesLimit: Wu
      } = function(uu) {
        const {
          os: Ru,
          deviceMemory: yu
        } = uu;
        if ("ios" === Ru) switch ((0, Qu.f)(uu)) {
          case "ipad_m":
            return {
              footprintBytes: Tu(Nu.e), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: pu, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: Su, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: pu, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof yu && Number.isFinite(yu) && yu > 0 ? {
          footprintBytes: yu * Vu * xu,
          basis: `memory-${yu}`,
          namesLimit: !0
        } : "android" === Ru ? {
          footprintBytes: pu,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: Tu(Nu.i),
          basis: "unreported",
          namesLimit: !1
        }
      }(uu);
      if (yu) {
        const uu = Math.min(Ju, Tu(Nu.e));
        Ju = ru + Math.max(0, uu - ru) / 2, Xu += "+killed", Wu = !0
      }
      null !== Ru && Tu(Ru) < Ju && (Ju = Tu(Ru), Xu += "+learned", Wu = !0);
      const ju = function(uu) {
          const Ru = Math.floor((uu - ru) / Bu);
          return Math.min(Nu.e, Math.max(Nu.g, Ru))
        }(Ju),
        Hu = (0, Nu.l)(ju);
      return {
        footprintBytes: Ju,
        shedFootprintBytes: Wu ? Math.max(Ju, Tu(ju)) : null,
        chunkCap: ju,
        maxHorizDistance: null !== (Ku = null === Hu || void 0 === Hu ? void 0 : Hu.horizontal) && void 0 !== Ku ? Ku : Eu.f.maxChunkHorizAddDistance,
        maxVertDistance: null !== (mu = null === Hu || void 0 === Hu ? void 0 : Hu.vertical) && void 0 !== mu ? mu : Eu.f.maxChunkVertAddDistance,
        basis: Xu
      }
    }
    let ju = null;

    function Hu() {
      return Wu({
        os: (0, Ku.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Qu.i)()
      }, (0, mu.g)(), (0, Ju.F)("wasm").length > 0)
    }

    function du() {
      return ju ??= Hu(), ju
    }

    function bu() {
      var uu;
      return (null !== (uu = ju) && void 0 !== uu ? uu : Hu()).basis
    }

    function Cu(uu, Ru) {
      return uu.setChunkCap(Ru.chunkCap)
    }
  },
  36632: (uu, Ru, yu) => {
    yu.d(Ru, {
      B: () => mu,
      e: () => Ku,
      f: () => Qu,
      j: () => Bu,
      n: () => Ju,
      p: () => Nu,
      s: () => Xu,
      v: () => ru,
      x: () => Vu
    });
    var Eu = yu(1215);
    let Ku = function(uu) {
        return uu[uu.Join = 0] = "Join", uu[uu.Leave = 1] = "Leave", uu[uu.Push = 2] = "Push", uu[uu.Cursor = 3] = "Cursor", uu[uu.Submit = 4] = "Submit", uu[uu.ReloadAsVariation = 5] = "ReloadAsVariation", uu[uu.CreateFile = 6] = "CreateFile", uu[uu.RenameFile = 7] = "RenameFile", uu[uu.DeleteFile = 8] = "DeleteFile", uu[uu.SetEngine = 9] = "SetEngine", uu[uu.RenameFolder = 10] = "RenameFolder", uu
      }({}),
      Qu = function(uu) {
        return uu[uu.Joined = 0] = "Joined", uu[uu.Updates = 1] = "Updates", uu[uu.Presence = 2] = "Presence", uu[uu.RemoteCursor = 3] = "RemoteCursor", uu[uu.ForceClose = 4] = "ForceClose", uu[uu.LobbyFilesChanged = 5] = "LobbyFilesChanged", uu[uu.EngineSettings = 6] = "EngineSettings", uu
      }({});

    function mu(uu) {
      return "lobby" === uu.kind ? `lobby:${uu.path}` : `codeBlock:${uu.pos[0]},${uu.pos[1]},${uu.pos[2]}`
    }

    function Ju(uu) {
      if ("lobby" === uu) return {
        kind: "lobby",
        path: Eu.k
      };
      if (uu.startsWith("lobby:")) {
        const Ru = uu.slice(6);
        return ru(Ru) ? {
          kind: "lobby",
          path: Ru
        } : null
      }
      const Ru = uu.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return Ru ? {
        kind: "codeBlock",
        pos: [parseInt(Ru[1]), parseInt(Ru[2]), parseInt(Ru[3])]
      } : null
    }

    function Nu(uu) {
      return uu.endsWith(".d.ts")
    }

    function Xu(uu) {
      return uu.endsWith(".ts") && !Nu(uu)
    }
    const Vu = 64;

    function ru(uu) {
      if (!uu || uu !== uu.trim()) return !1;
      if (uu.length > Vu) return !1;
      if (uu.startsWith("/") || uu.includes("\\") || uu.includes("\0")) return !1;
      if (!Nu(uu) && !Xu(uu) && ! function(uu) {
          return uu.endsWith(".js") && !uu.endsWith(".min.js") && !uu.endsWith(".bundle.js")
        }(uu)) return !1;
      const Ru = uu.split("/");
      for (const yu of Ru)
        if ("" === yu || "." === yu || ".." === yu) return !1;
      return !0
    }
    const Bu = 14e3
  },
  38786: (uu, Ru, yu) => {
    function Eu(uu, Ru, yu, Eu, Ku) {
      var Qu = {};
      return Object.keys(Eu).forEach((function(uu) {
        Qu[uu] = Eu[uu]
      })), Qu.enumerable = !!Qu.enumerable, Qu.configurable = !!Qu.configurable, ("value" in Qu || Qu.initializer) && (Qu.writable = !0), Qu = yu.slice().reverse().reduce((function(yu, Eu) {
        return Eu(uu, Ru, yu) || yu
      }), Qu), Ku && void 0 !== Qu.initializer && (Qu.value = Qu.initializer ? Qu.initializer.call(Ku) : void 0, Qu.initializer = void 0), void 0 === Qu.initializer && (Object.defineProperty(uu, Ru, Qu), Qu = null), Qu
    }
    yu.d(Ru, {
      c: () => Eu
    })
  },
  38783: (uu, Ru, yu) => {
    function Eu(uu, Ru, yu, Eu) {
      yu && Object.defineProperty(uu, Ru, {
        enumerable: yu.enumerable,
        configurable: yu.configurable,
        writable: yu.writable,
        value: yu.initializer ? yu.initializer.call(Eu) : void 0
      })
    }
    yu.d(Ru, {
      c: () => Eu
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);
/*! For license information please see dz8ef.222.bb57cdbf.chunk.js.LICENSE.txt */
export const id = 222;
export const ids = [222];
export const modules = {
  39867: (uu, Eu, ju) => {
    uu.exports = Uu;
    var su = ju(366);

    function Uu(uu, Eu) {
      if (!(this instanceof Uu)) return new Uu(uu, Eu);
      var ju = su.create();
      su.add(ju, uu, Eu), this.base = su.min(su.create(), uu, ju), this.vec = su.clone(Eu), this.max = su.max(su.create(), uu, ju), this.mag = su.length(this.vec)
    }
    var Zu = Uu.prototype;
    Zu.width = function() {
      return this.vec[0]
    }, Zu.height = function() {
      return this.vec[1]
    }, Zu.depth = function() {
      return this.vec[2]
    }, Zu.x0 = function() {
      return this.base[0]
    }, Zu.y0 = function() {
      return this.base[1]
    }, Zu.z0 = function() {
      return this.base[2]
    }, Zu.x1 = function() {
      return this.max[0]
    }, Zu.y1 = function() {
      return this.max[1]
    }, Zu.z1 = function() {
      return this.max[2]
    }, Zu.translate = function(uu) {
      return su.add(this.max, this.max, uu), su.add(this.base, this.base, uu), this
    }, Zu.setPosition = function(uu) {
      return su.add(this.max, uu, this.vec), su.copy(this.base, uu), this
    }, Zu.expand = function(uu) {
      var Eu = su.create(),
        ju = su.create();
      return su.max(Eu, uu.max, this.max), su.min(ju, uu.base, this.base), su.subtract(Eu, Eu, ju), new Uu(ju, Eu)
    }, Zu.intersects = function(uu) {
      return !(uu.base[0] > this.max[0]) && (!(uu.base[1] > this.max[1]) && (!(uu.base[2] > this.max[2]) && (!(uu.max[0] < this.base[0]) && (!(uu.max[1] < this.base[1]) && !(uu.max[2] < this.base[2])))))
    }, Zu.touches = function(uu) {
      var Eu = this.union(uu);
      return null !== Eu && (0 == Eu.width() || 0 == Eu.height() || 0 == Eu.depth())
    }, Zu.union = function(uu) {
      if (!this.intersects(uu)) return null;
      var Eu = Math.max(uu.base[0], this.base[0]),
        ju = Math.max(uu.base[1], this.base[1]),
        su = Math.max(uu.base[2], this.base[2]);
      return new Uu([Eu, ju, su], [Math.min(uu.max[0], this.max[0]) - Eu, Math.min(uu.max[1], this.max[1]) - ju, Math.min(uu.max[2], this.max[2]) - su])
    }
  },
  39858: uu => {
    uu.exports = function(uu, Eu, ju, su, Uu, Zu) {
      var Xu = +Eu[0],
        lu = +Eu[1],
        qu = +Eu[2],
        fu = +ju[0],
        Cu = +ju[1],
        bu = +ju[2],
        cu = Math.sqrt(fu * fu + Cu * Cu + bu * bu);
      if (0 === cu) throw new Error("Can't raycast along a zero vector");
      return function(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu) {
        for (var Cu = 0, bu = Math.floor, cu = 0 | bu(Eu), Nu = 0 | bu(ju), Ou = 0 | bu(su), Yu = Uu > 0 ? 1 : -1, hu = Zu > 0 ? 1 : -1, Du = Xu > 0 ? 1 : -1, gu = Math.abs(1 / Uu), Mu = Math.abs(1 / Zu), eu = Math.abs(1 / Xu), Gu = gu < 1 / 0 ? gu * (Yu > 0 ? cu + 1 - Eu : Eu - cu) : 1 / 0, pu = Mu < 1 / 0 ? Mu * (hu > 0 ? Nu + 1 - ju : ju - Nu) : 1 / 0, wu = eu < 1 / 0 ? eu * (Du > 0 ? Ou + 1 - su : su - Ou) : 1 / 0, Ju = -1; Cu <= lu;) {
          var du = uu(cu, Nu, Ou);
          if (du) return qu && (qu[0] = Eu + Cu * Uu, qu[1] = ju + Cu * Zu, qu[2] = su + Cu * Xu), fu && (fu[0] = fu[1] = fu[2] = 0, 0 === Ju && (fu[0] = -Yu), 1 === Ju && (fu[1] = -hu), 2 === Ju && (fu[2] = -Du)), du;
          Gu < pu ? Gu < wu ? (cu += Yu, Cu = Gu, Gu += gu, Ju = 0) : (Ou += Du, Cu = wu, wu += eu, Ju = 2) : pu < wu ? (Nu += hu, Cu = pu, pu += Mu, Ju = 1) : (Ou += Du, Cu = wu, wu += eu, Ju = 2)
        }
        return qu && (qu[0] = Eu + Cu * Uu, qu[1] = ju + Cu * Zu, qu[2] = su + Cu * Xu), fu && (fu[0] = fu[1] = fu[2] = 0), 0
      }(uu, Xu, lu, qu, fu /= cu, Cu /= cu, bu /= cu, su = "undefined" === typeof su ? 64 : +su, Uu, Zu)
    }
  },
  39419: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu,
      f: () => Zu
    });
    var su = ju(4266);
    let Uu = null;

    function Zu(uu) {
      return null !== Uu && uu === Uu
    }

    function Xu() {
      this.YL = !1, this.stopPropagation = !1, this.gL = !1, this.disabled = !1
    }
    class lu {
      constructor(uu, Eu) {
        this.version = "0.7.0";
        var ju = Object.assign({}, new Xu, Eu || {});
        this.element = uu || document, this.YL = !!ju.YL, this.stopPropagation = !!ju.stopPropagation, this.gL = !!ju.gL, this.disabled = !!ju.disabled, this.filterEvents = (uu, Eu) => !0, this.ignoreEvent = uu => !1, this.down = new su.EventEmitter, this.up = new su.EventEmitter, this.state = {}, this.wL = {
          dx: 0,
          dy: 0,
          cEu: 0,
          NEu: 0,
          OEu: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? fu(this) : document.addEventListener("DOMContentLoaded", (uu => {
          fu(this)
        }), {
          once: !0
        })
      }
      bind(uu) {
        for (var Eu = arguments.length, ju = new Array(Eu > 1 ? Eu - 1 : 0), su = 1; su < Eu; su++) ju[su - 1] = arguments[su];
        ju.forEach((Eu => {
          var ju = this._keyBindmap[Eu] || [];
          ju.includes(uu) || (ju.push(uu), this._keyBindmap[Eu] = ju)
        })), this.state[uu] = !!this.state[uu], this.pressCount[uu] = this.pressCount[uu] || 0, this.releaseCount[uu] = this.releaseCount[uu] || 0
      }
      unbind(uu) {
        for (var Eu in this._keyBindmap) {
          var ju = this._keyBindmap[Eu],
            su = ju.indexOf(uu);
          su > -1 && ju.splice(su, 1)
        }
      }
      getBindings() {
        var uu = {};
        for (var Eu in this._keyBindmap) {
          this._keyBindmap[Eu].forEach((ju => {
            uu[ju] = uu[ju] || [], uu[ju].push(Eu)
          }))
        }
        return uu
      }
      Tb() {
        qu(this.wL), qu(this.pressCount), qu(this.releaseCount)
      }
    }

    function qu(uu) {
      for (var Eu in uu) uu[Eu] = 0
    }

    function fu(uu) {
      window.addEventListener("keydown", hu.bind(null, uu, !0), !1), window.addEventListener("keyup", hu.bind(null, uu, !1), !1);
      var Eu = {
        passive: !0
      };
      uu.element.addEventListener("touchstart", Nu.bind(void 0, uu), {
        passive: !1
      }), uu.element.addEventListener("touchend", Yu.bind(void 0, uu), Eu), uu.element.addEventListener("mousedown", Du.bind(null, uu, !0), Eu), window.document.addEventListener("mouseup", Du.bind(null, uu, !1), Eu), uu.element.addEventListener("touchmove", gu.bind(null, uu), Eu), uu.element.addEventListener("mousemove", gu.bind(null, uu), Eu), window.PointerEvent, uu.element.addEventListener("wheel", Mu.bind(null, uu), Eu), uu.element.addEventListener("contextmenu", eu.bind(null, uu), !1), window.addEventListener("blur", wu.bind(null, uu), !1)
    }
    var Cu = 0,
      bu = 0,
      cu = null;

    function Nu(uu, Eu) {
      Eu.preventDefault(), Ou(Eu)
    }

    function Ou(uu) {
      let Eu = !1;
      for (let ju = 0; ju < uu.touches.length; ++ju)
        if (uu.touches[ju].identifier === cu) {
          Eu = !0;
          break
        } if (!Eu) {
        const Eu = uu.changedTouches[0];
        Cu = Eu.clientX, bu = Eu.clientY, cu = Eu.identifier
      }
    }

    function Yu(uu, Eu) {
      for (var ju = Eu.changedTouches, su = 0; su < ju.length; ++su) ju[su].identifier === cu && (cu = null)
    }

    function hu(uu, Eu, ju) {
      if (!uu.ignoreEvent(ju)) try {
        Ju(uu, ju), Eu && ju.isTrusted && !ju.repeat && uu._keyStates[ju.code] && du(uu, ju.code)
      } finally {
        au(ju.code, Eu, uu, ju)
      }
    }

    function Du(uu, Eu, ju) {
      if (!uu.ignoreEvent(ju)) try {
        Ju(uu, ju)
      } finally {
        ! function(uu, Eu, ju) {
          if ("pointerId" in ju)
            if (Eu) {
              if (null !== uu._touches.currID) return;
              uu._touches.currID = ju.pointerId
            } else {
              if (uu._touches.currID !== ju.pointerId) return;
              uu._touches.currID = null
            } var su = "button" in ju ? ju.button + 1 : 1;
          au("Mouse" + su, Eu, uu, ju)
        }(uu, Eu, ju)
      }
    }

    function gu(uu, Eu) {
      var ju = Eu.movementX || Eu.mozMovementX || 0,
        su = Eu.movementY || Eu.mozMovementY || 0;
      if (Eu.touches && 0 === (ju | su)) {
        var Uu = function(uu) {
          Ou(uu);
          for (let Eu = 0; Eu < uu.changedTouches.length; ++Eu)
            if (uu.changedTouches[Eu].identifier == cu) {
              const ju = uu.changedTouches[Eu],
                su = [ju.clientX - Cu, ju.clientY - bu];
              return Cu = ju.clientX, bu = ju.clientY, su
            } return console.error(`Did not find touch id ${cu}`), [0, 0]
        }(Eu);
        ju = Uu[0], su = Uu[1]
      }
      uu.wL.dx += ju, uu.wL.dy += su
    }

    function Mu(uu, Eu) {
      Ju(uu, Eu);
      var ju = 1;
      switch (Eu.deltaMode) {
        case 0:
          ju = 1;
          break;
        case 1:
          ju = 12;
          break;
        case 2:
          ju = uu.element.clientHeight || window.innerHeight
      }
      uu.wL.cEu += (Eu.deltaX || 0) * ju, uu.wL.NEu += (Eu.deltaY || 0) * ju, uu.wL.OEu += (Eu.deltaZ || 0) * ju
    }

    function eu(uu, Eu) {
      if (!uu.gL) return Eu.preventDefault(), !1
    }
    var Gu = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function pu(uu, Eu) {
      return !!uu[Gu[Eu]] || ("AltRight" === Eu || "ControlLeft" === Eu) && "function" === typeof uu.getModifierState && !0 === uu.getModifierState("AltGraph")
    }

    function wu(uu, Eu) {
      for (var ju in uu._modifiersHeldThroughBlur = {}, Gu) uu._keyStates[ju] && (uu._modifiersHeldThroughBlur[ju] = !0);
      Eu && Eu.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (uu) {
          return !0
        }
      }() && (clearTimeout(uu._blurRelease), uu._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var Eu in uu._modifiersHeldThroughBlur = {}, uu._keyStates) uu._keyStates[Eu] && !/^Mouse\d/.test(Eu) && du(uu, Eu)
      }), 0))
    }

    function Ju(uu, Eu) {
      var ju = uu._modifiersHeldThroughBlur;
      if (ju && Eu.isTrusted && document.hasFocus())
        for (var su in ju) delete ju[su], uu._keyStates[su] && su !== Eu.code && (pu(Eu, su) || du(uu, su))
    }

    function du(uu, Eu) {
      const ju = {
          code: Eu,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        su = Uu;
      Uu = ju;
      try {
        au(Eu, !1, uu, ju)
      } finally {
        Uu = su
      }
    }

    function au(uu, Eu, ju, su) {
      var Uu = ju._keyBindmap[uu];
      Uu && (Pu(ju._keyStates[uu], Eu) && (ju._keyStates[uu] = Eu, Uu.forEach((uu => {
        (!ju.filterEvents || ju.filterEvents(su, uu)) && function(uu, Eu, ju, su) {
          var Uu = Eu ? ju.pressCount : ju.releaseCount;
          Uu[uu] = (Uu[uu] || 0) + 1;
          var Zu = ju._bindPressCount[uu] || 0;
          (Zu += Eu ? 1 : -1) < 0 && (Zu = 0);
          ju._bindPressCount[uu] = Zu;
          var Xu = ju.state[uu];
          if (Pu(Xu, Zu)) {
            ju.state[uu] = Zu > 0;
            var lu = Eu ? ju.down : ju.up;
            ju.disabled || lu.emit(uu, su)
          }
        }(uu, Eu, ju, su)
      }))), "button" in su || (ju.YL && !su.defaultPrevented && su.preventDefault(), ju.stopPropagation && su.stopPropagation()))
    }

    function Pu(uu, Eu) {
      return uu ? !Eu : Eu
    }
  },
  36925: (uu, Eu) => {
    function ju(uu) {
      if (uu && "object" === typeof uu) {
        var Eu = uu.which || uu.keyCode || uu.charCode;
        Eu && (uu = Eu)
      }
      if ("number" === typeof uu) return Xu[uu];
      var ju, Zu = String(uu);
      return (ju = su[Zu.toLowerCase()]) ? ju : (ju = Uu[Zu.toLowerCase()]) || (1 === Zu.length ? Zu.charCodeAt(0) : void 0)
    }
    ju.isEventKey = function(uu, Eu) {
      if (uu && "object" === typeof uu) {
        var ju = uu.which || uu.keyCode || uu.charCode;
        if (null === ju || void 0 === ju) return !1;
        if ("string" === typeof Eu) {
          var Zu;
          if (Zu = su[Eu.toLowerCase()]) return Zu === ju;
          if (Zu = Uu[Eu.toLowerCase()]) return Zu === ju
        } else if ("number" === typeof Eu) return Eu === ju;
        return !1
      }
    };
    var su = (Eu = uu.exports = ju).code = Eu.codes = {
        backspace: 8,
        tab: 9,
        enter: 13,
        shift: 16,
        ctrl: 17,
        alt: 18,
        "pause/break": 19,
        "caps lock": 20,
        esc: 27,
        space: 32,
        "page up": 33,
        "page down": 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        insert: 45,
        delete: 46,
        command: 91,
        "left command": 91,
        "right command": 93,
        "numpad *": 106,
        "numpad +": 107,
        "numpad -": 109,
        "numpad .": 110,
        "numpad /": 111,
        "num lock": 144,
        "scroll lock": 145,
        "my computer": 182,
        "my calculator": 183,
        ";": 186,
        "=": 187,
        ",": 188,
        "-": 189,
        ".": 190,
        "/": 191,
        "`": 192,
        "[": 219,
        "\\": 220,
        "]": 221,
        "'": 222
      },
      Uu = Eu.aliases = {
        windows: 91,
        "\u21e7": 16,
        "\u2325": 18,
        "\u2303": 17,
        "\u2318": 91,
        ctl: 17,
        control: 17,
        option: 18,
        pause: 19,
        break: 19,
        caps: 20,
        return: 13,
        escape: 27,
        spc: 32,
        spacebar: 32,
        pgup: 33,
        pgdn: 34,
        ins: 45,
        del: 46,
        cmd: 91
      };
    for (Zu = 97; Zu < 123; Zu++) su[String.fromCharCode(Zu)] = Zu - 32;
    for (var Zu = 48; Zu < 58; Zu++) su[Zu - 48] = Zu;
    for (Zu = 1; Zu < 13; Zu++) su["f" + Zu] = Zu + 111;
    for (Zu = 0; Zu < 10; Zu++) su["numpad " + Zu] = Zu + 96;
    var Xu = Eu.names = Eu.title = {};
    for (Zu in su) Xu[su[Zu]] = Zu;
    for (var lu in Uu) su[lu] = Uu[lu]
  },
  39848: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su
    });
    class su {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.iW = !1, this.FW = !1, this.cV = 30, this.dW = 0, this.zW = 100, this.rh = !1, this.fullscreen = !1, this.RD = function(uu) {}, this.qS = function(uu, Eu, ju) {}, this.nS = function() {}, this.rD = function() {}, this.bS = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(uu) {}, this._data = new Uu(Eu),
          function(uu) {
            if ("loading" === document.readyState) {
              var Eu = () => {
                document.removeEventListener("readystatechange", Eu), uu()
              };
              document.addEventListener("readystatechange", Eu)
            } else setTimeout(uu, 0)
          }((() => {
            ! function(uu) {
              var Eu = uu._data,
                ju = Eu.nowObject.now();
              Eu.lastTickStarted = ju, Eu.lastFrameStarted = ju, Eu.lastRenderStarted = ju, Eu.frameCB = () => function(uu) {
                var Eu = uu._data;
                requestAnimationFrame(Eu.frameCB), lu(uu);
                var ju = Eu.nowObject.now(),
                  su = ju - Eu.lastFrameStarted;
                if (Eu.lastFrameStarted = ju, uu.dW > 0) {
                  Eu.renderAccum += su;
                  var Uu = 1e3 / uu.dW;
                  if (Eu.renderAccum < Uu) return;
                  Eu.renderAccum -= Uu, Eu.renderAccum > Uu && (Eu.renderAccum = Uu)
                }
                var Zu = ju - Eu.lastRenderStarted;
                Eu.lastRenderStarted = ju;
                var Xu = 1e3 / uu.cV,
                  qu = (ju - Eu.lastTickStarted) / Xu;
                qu < 0 && (qu = 0);
                uu.qS(Zu, qu, Xu), setTimeout(lu, 0, uu, !0)
              }(uu), Eu.intervalCB = () => lu(uu), requestAnimationFrame(Eu.frameCB), Eu.pollTime > 0 && (Eu.intervalID = setInterval(Eu.intervalCB, Math.max(Eu.pollTime, 1e3 / uu.cV / 2)))
            }(this),
            function(uu, Eu) {
              if (!Eu) return;
              var ju = !1,
                su = !1,
                Uu = uu => {
                  if (!!uu !== (ju = Eu === document.pointerLockElement))
                    if (uu) {
                      var su = Eu.requestPointerLock();
                      su && su.catch && su.catch((uu => {}))
                    } else document.exitPointerLock()
                },
                Zu = uu => {
                  !!uu !== (su = Eu === document.fullscreenElement) && (uu ? Eu.requestFullscreen ? Eu.requestFullscreen() : Eu.webkitRequestFullscreen && Eu.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (su => {
                ju = Eu === document.pointerLockElement, uu.bS(ju)
              })), document.addEventListener("fullscreenchange", (ju => {
                su = Eu === document.fullscreenElement, uu.onFullscreenChanged(su)
              })), document.addEventListener("pointerlockerror", (su => {
                ju = Eu === document.pointerLockElement, uu.onPointerLockError(su)
              })), Object.defineProperty(uu, "rh", {
                get: () => ju,
                set: Uu
              }), Object.defineProperty(uu, "fullscreen", {
                get: () => su,
                set: Zu
              }), Eu.addEventListener("click", (Eu => {
                uu.iW && Uu(!0), uu.FW && Zu(!0)
              }));
              var Xu = () => uu.rD();
              if (window.ResizeObserver) {
                new ResizeObserver(Xu).observe(Eu)
              } else window.addEventListener("resize", Xu)
            }(this, uu), this.nS()
          }))
      }
    }

    function Uu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = uu, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var Zu = 3,
      Xu = 20;

    function lu(uu) {
      for (var Eu = uu._data, ju = 1e3 / uu.cV, su = Eu.nowObject.now() + Xu, Uu = 0; Eu.nowObject.now() >= Eu.lastTickStarted + ju && Eu.nowObject.now() < su && ++Uu <= Zu;) uu.RD(ju), Eu.lastTickStarted += ju;
      var lu = 5 * (ju + 5),
        qu = Eu.nowObject.now();
      if (qu - Eu.lastTickStarted > lu)
        for (; qu >= Eu.lastTickStarted + ju;) Eu.lastTickStarted += ju
    }
  },
  37080: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu
    });
    var su = ju(58);
    const Uu = su.useLayoutEffect;
    const Zu = function(uu) {
      var Eu = (0, su.useRef)(uu);
      return Uu((function() {
        Eu.current = uu
      })), Eu
    };
    var Xu = function(uu) {
      var Eu = Zu(uu);
      (0, su.useEffect)((function() {
        var uu = function(uu) {
          var ju;
          if (null != Eu.current && (ju = Eu.current(uu)), uu.defaultPrevented && (uu.returnValue = ""), "string" === typeof ju) return uu.returnValue = ju, ju
        };
        return window.addEventListener("beforeunload", uu),
          function() {
            window.removeEventListener("beforeunload", uu)
          }
      }), [])
    }
  },
  36973: uu => {
    var Eu, ju = "undefined" !== typeof window ? window.navigator.userAgent : "",
      su = /OS X/.test(ju),
      Uu = /Opera/.test(ju),
      Zu = !/like Gecko/.test(ju) && !Uu,
      Xu = uu.exports = {
        0: su ? "<menu>" : "<UNK>",
        1: "<mouse 1>",
        2: "<mouse 2>",
        3: "<break>",
        4: "<mouse 3>",
        5: "<mouse 4>",
        6: "<mouse 5>",
        8: "<backspace>",
        9: "<tab>",
        12: "<clear>",
        13: "<enter>",
        16: "<shift>",
        17: "<control>",
        18: "<alt>",
        19: "<pause>",
        20: "<caps-lock>",
        21: "<ime-hangul>",
        23: "<ime-junja>",
        24: "<ime-final>",
        25: "<ime-kanji>",
        27: "<escape>",
        28: "<ime-convert>",
        29: "<ime-nonconvert>",
        30: "<ime-accept>",
        31: "<ime-mode-change>",
        32: "<space>",
        33: "<page-up>",
        34: "<page-down>",
        35: "<end>",
        36: "<home>",
        37: "<left>",
        38: "<up>",
        39: "<right>",
        40: "<down>",
        41: "<select>",
        42: "<print>",
        43: "<execute>",
        44: "<snapshot>",
        45: "<insert>",
        46: "<delete>",
        47: "<help>",
        91: "<meta>",
        92: "<meta>",
        93: su ? "<meta>" : "<menu>",
        95: "<sleep>",
        106: "<num-*>",
        107: "<num-+>",
        108: "<num-enter>",
        109: "<num--\x3e",
        110: "<num-.>",
        111: "<num-/>",
        144: "<num-lock>",
        145: "<scroll-lock>",
        160: "<shift-left>",
        161: "<shift-right>",
        162: "<control-left>",
        163: "<control-right>",
        164: "<alt-left>",
        165: "<alt-right>",
        166: "<browser-back>",
        167: "<browser-forward>",
        168: "<browser-refresh>",
        169: "<browser-stop>",
        170: "<browser-search>",
        171: "<browser-favorites>",
        172: "<browser-home>",
        173: su && Zu ? "-" : "<volume-mute>",
        174: "<volume-down>",
        175: "<volume-up>",
        176: "<next-track>",
        177: "<prev-track>",
        178: "<stop>",
        179: "<play-pause>",
        180: "<launch-mail>",
        181: "<launch-media-select>",
        182: "<launch-app 1>",
        183: "<launch-app 2>",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        223: "<meta>",
        224: "<meta>",
        226: "<alt-gr>",
        229: "<ime-process>",
        231: Uu ? "`" : "<unicode>",
        246: "<attention>",
        247: "<crsel>",
        248: "<exsel>",
        249: "<erase-eof>",
        250: "<play>",
        251: "<zoom>",
        252: "<no-name>",
        253: "<pa-1>",
        254: "<clear>"
      };
    for (Eu = 58; Eu < 65; ++Eu) Xu[Eu] = String.fromCharCode(Eu);
    for (Eu = 48; Eu < 58; ++Eu) Xu[Eu] = Eu - 48 + "";
    for (Eu = 65; Eu < 91; ++Eu) Xu[Eu] = String.fromCharCode(Eu);
    for (Eu = 96; Eu < 106; ++Eu) Xu[Eu] = "<num-" + (Eu - 96) + ">";
    for (Eu = 112; Eu < 136; ++Eu) Xu[Eu] = "F" + (Eu - 111)
  },
  39303: (uu, Eu, ju) => {
    function su(uu, Eu, ju, su, Uu) {
      var Zu = {};
      return Object.keys(su).forEach((function(uu) {
        Zu[uu] = su[uu]
      })), Zu.enumerable = !!Zu.enumerable, Zu.configurable = !!Zu.configurable, ("value" in Zu || Zu.initializer) && (Zu.writable = !0), Zu = ju.slice().reverse().reduce((function(ju, su) {
        return su(uu, Eu, ju) || ju
      }), Zu), Uu && void 0 !== Zu.initializer && (Zu.value = Zu.initializer ? Zu.initializer.call(Uu) : void 0, Zu.initializer = void 0), void 0 === Zu.initializer && (Object.defineProperty(uu, Eu, Zu), Zu = null), Zu
    }
    ju.d(Eu, {
      e: () => su
    })
  },
  39296: (uu, Eu, ju) => {
    function su(uu, Eu, ju, su) {
      ju && Object.defineProperty(uu, Eu, {
        enumerable: ju.enumerable,
        configurable: ju.configurable,
        writable: ju.writable,
        value: ju.initializer ? ju.initializer.call(su) : void 0
      })
    }
    ju.d(Eu, {
      b: () => su
    })
  },
  39030: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu
    });
    var su = ju(39032);
    const Uu = (uu, Eu, ju) => uu ? uu.getClassName && "Mesh" === uu.getClassName() ? null : !uu.getClassName || "SubMesh" !== uu.getClassName() && "PhysicsBody" !== uu.getClassName() ? uu.clone ? uu.clone() : Array.isArray(uu) ? uu.slice() : ju && "object" === typeof uu ? {
      ...uu
    } : null : uu.clone(Eu) : null;
    class Zu {
      static DeepCopy(uu, Eu, ju, Zu) {
        let Xu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const lu = function(uu) {
          const Eu = [];
          do {
            const ju = Object.getOwnPropertyNames(uu);
            for (const uu of ju) - 1 === Eu.indexOf(uu) && Eu.push(uu)
          } while (uu = Object.getPrototypeOf(uu));
          return Eu
        }(uu);
        for (const fu of lu) {
          if ("_" === fu[0] && (!Zu || -1 === Zu.indexOf(fu))) continue;
          if (fu.endsWith("Observable")) continue;
          if (ju && -1 !== ju.indexOf(fu)) continue;
          const lu = uu[fu],
            Cu = typeof lu;
          if ("function" !== Cu) try {
            if ("object" === Cu)
              if (lu instanceof Uint8Array) Eu[fu] = Uint8Array.from(lu);
              else if (lu instanceof Array) {
              if (Eu[fu] = [], lu.length > 0)
                if ("object" == typeof lu[0])
                  for (let uu = 0; uu < lu.length; uu++) {
                    const ju = Uu(lu[uu], Eu, Xu); - 1 === Eu[fu].indexOf(ju) && Eu[fu].push(ju)
                  } else Eu[fu] = lu.slice(0)
            } else Eu[fu] = Uu(lu, Eu, Xu);
            else Eu[fu] = lu
          } catch (qu) {
            su.b.Warn(qu.message)
          }
        }
      }
    }
  },
  39056: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu,
      h: () => Zu,
      i: () => Xu,
      m: () => lu
    });
    var su = ju(37680);
    class Uu {
      constructor(uu, Eu, ju) {
        this.gradient = uu, this.color1 = Eu, this.color2 = ju
      }
      getColorToRef(uu) {
        this.color2 ? su.g.LerpToRef(this.color1, this.color2, Math.random(), uu) : uu.yJ(this.color1)
      }
    }
    class Zu {
      constructor(uu, Eu) {
        this.gradient = uu, this.color = Eu
      }
    }
    class Xu {
      constructor(uu, Eu, ju) {
        this.gradient = uu, this.factor1 = Eu, this.factor2 = ju
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class lu {
      static GetCurrentGradient(uu, Eu, ju) {
        if (Eu[0].gradient > uu) return void ju(Eu[0], Eu[0], 1);
        for (let Uu = 0; Uu < Eu.length - 1; Uu++) {
          const su = Eu[Uu],
            Zu = Eu[Uu + 1];
          if (uu >= su.gradient && uu <= Zu.gradient) {
            return void ju(su, Zu, (uu - su.gradient) / (Zu.gradient - su.gradient))
          }
        }
        const su = Eu.length - 1;
        ju(Eu[su], Eu[su], 1)
      }
    }
  },
  39032: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su
    });
    class su {
      static _CheckLimit(uu, Eu) {
        let ju = su._LogLimitOutputs[uu];
        return ju ? ju.current++ : (ju = {
          limit: Eu,
          current: 1
        }, su._LogLimitOutputs[uu] = ju), ju.current <= ju.limit
      }
      static _GenerateLimitMessage(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ju = su._LogLimitOutputs[uu];
        if (!ju || !su.MessageLimitReached) return;
        const Uu = this._Levels[Eu];
        ju.current === ju.limit && su[Uu.name](su.MessageLimitReached.replace(/%LIMIT%/g, "" + ju.limit).replace(/%TYPE%/g, Uu.name ?? ""))
      }
      static _AddLogEntry(uu) {
        su._LogCache = uu + su._LogCache, su.OnNewCacheEntry && su.OnNewCacheEntry(uu)
      }
      static _FormatMessage(uu) {
        const Eu = uu => uu < 10 ? "0" + uu : "" + uu,
          ju = new Date;
        return "[" + Eu(ju.getHours()) + ":" + Eu(ju.getMinutes()) + ":" + Eu(ju.getSeconds()) + "]: " + uu
      }
      static _LogDisabled(uu, Eu) {}
      static _LogEnabled() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eu = arguments.length > 1 ? arguments[1] : void 0,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        const Uu = Array.isArray(Eu) ? Eu[0] : Eu;
        if (void 0 !== ju && !su._CheckLimit(Uu, ju)) return;
        const Zu = su._FormatMessage(Uu),
          Xu = this._Levels[uu],
          lu = Array.isArray(Eu) ? Eu.slice(1) : [];
        Xu.logFunc && Xu.logFunc("BJS - " + Zu, ...lu);
        const qu = `<div style='color:${Xu.color}'>${Zu}</div><br>`;
        su._AddLogEntry(qu), su._GenerateLimitMessage(Uu, uu)
      }
      static get LogCache() {
        return su._LogCache
      }
      static ClearLogCache() {
        su._LogCache = "", su._LogLimitOutputs = {}, su.errorsCount = 0
      }
      static set LogLevels(uu) {
        su.Log = su._LogDisabled, su.Warn = su._LogDisabled, su.Error = su._LogDisabled;
        const Eu = [su.MessageLogLevel, su.WarningLogLevel, su.ErrorLogLevel];
        for (const ju of Eu)
          if ((uu & ju) === ju) {
            const uu = this._Levels[ju];
            su[uu.name] = su._LogEnabled.bind(su, ju)
          }
      }
    }
    su.NoneLogLevel = 0, su.MessageLogLevel = 1, su.WarningLogLevel = 2, su.ErrorLogLevel = 4, su.AllLogLevel = 7, su.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", su._LogCache = "", su._LogLimitOutputs = {}, su._Levels = [{}, {
      color: "white",
      logFunc: console.log,
      name: "Log"
    }, {
      color: "orange",
      logFunc: console.warn,
      name: "Warn"
    }, {}, {
      color: "red",
      logFunc: console.error,
      name: "Error"
    }], su.errorsCount = 0, su.Log = su._LogEnabled.bind(su, su.MessageLogLevel), su.Warn = su._LogEnabled.bind(su, su.WarningLogLevel), su.Error = su._LogEnabled.bind(su, su.ErrorLogLevel)
  },
  39061: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu
    });
    var su = ju(37494),
      Uu = ju(37519),
      Zu = ju(39030);
    class Xu {
      constructor() {
        this.direction1 = new su.t(0, 1, 0), this.direction2 = new su.t(0, 1, 0), this.minEmitBox = new su.t(-.5, -.5, -.5), this.maxEmitBox = new su.t(.5, .5, .5)
      }
      startDirectionFunction(uu, Eu, ju, Zu) {
        const Xu = (0, Uu.RandomRange)(this.direction1.x, this.direction2.x),
          lu = (0, Uu.RandomRange)(this.direction1.y, this.direction2.y),
          qu = (0, Uu.RandomRange)(this.direction1.z, this.direction2.z);
        if (Zu) return Eu.x = Xu, Eu.y = lu, void(Eu.z = qu);
        su.t.TransformNormalFromFloatsToRef(Xu, lu, qu, uu, Eu)
      }
      startPositionFunction(uu, Eu, ju, Zu) {
        const Xu = (0, Uu.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          lu = (0, Uu.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          qu = (0, Uu.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (Zu) return Eu.x = Xu, Eu.y = lu, void(Eu.z = qu);
        su.t.TransformCoordinatesFromFloatsToRef(Xu, lu, qu, uu, Eu)
      }
      clone() {
        const uu = new Xu;
        return Zu.d.DeepCopy(this, uu), uu
      }
      applyToShader(uu) {
        uu.setVector3("direction1", this.direction1), uu.setVector3("direction2", this.direction2), uu.setVector3("minEmitBox", this.minEmitBox), uu.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(uu) {
        uu.addUniform("direction1", 3), uu.addUniform("direction2", 3), uu.addUniform("minEmitBox", 3), uu.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const uu = {};
        return uu.type = this.getClassName(), uu.direction1 = this.direction1.Osu(), uu.direction2 = this.direction2.Osu(), uu.minEmitBox = this.minEmitBox.Osu(), uu.maxEmitBox = this.maxEmitBox.Osu(), uu
      }
      parse(uu) {
        su.t.FromArrayToRef(uu.direction1, 0, this.direction1), su.t.FromArrayToRef(uu.direction2, 0, this.direction2), su.t.FromArrayToRef(uu.minEmitBox, 0, this.minEmitBox), su.t.FromArrayToRef(uu.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  39022: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => lu,
      e: () => Xu
    });
    var su = ju(37494),
      Uu = ju(37519),
      Zu = ju(39030);
    class Xu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = uu, this.height = Eu, this.radiusRange = ju, this.directionRandomizer = Uu, this._tempVector = su.t.Zero()
      }
      startDirectionFunction(uu, Eu, ju, Zu, Xu) {
        ju.position.subtractToRef(uu.getTranslation(), this._tempVector), this._tempVector.normalize(), su.t.TransformNormalToRef(this._tempVector, Xu, this._tempVector);
        const lu = (0, Uu.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let qu = Math.atan2(this._tempVector.x, this._tempVector.z);
        qu += (0, Uu.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = lu, this._tempVector.x = Math.sin(qu), this._tempVector.z = Math.cos(qu), this._tempVector.normalize(), Zu ? Eu.yJ(this._tempVector) : su.t.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, uu, Eu)
      }
      startPositionFunction(uu, Eu, ju, Zu) {
        const Xu = (0, Uu.RandomRange)(-this.height / 2, this.height / 2),
          lu = (0, Uu.RandomRange)(0, 2 * Math.PI),
          qu = (0, Uu.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          fu = Math.sqrt(qu) * this.radius,
          Cu = fu * Math.cos(lu),
          bu = fu * Math.sin(lu);
        Zu ? Eu.T6(Cu, Xu, bu) : su.t.TransformCoordinatesFromFloatsToRef(Cu, Xu, bu, uu, Eu)
      }
      clone() {
        const uu = new Xu(this.radius, this.directionRandomizer);
        return Zu.d.DeepCopy(this, uu), uu
      }
      applyToShader(uu) {
        uu.setFloat("radius", this.radius), uu.setFloat("height", this.height), uu.setFloat("radiusRange", this.radiusRange), uu.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(uu) {
        uu.addUniform("radius", 1), uu.addUniform("height", 1), uu.addUniform("radiusRange", 1), uu.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const uu = {};
        return uu.type = this.getClassName(), uu.radius = this.radius, uu.height = this.height, uu.radiusRange = this.radiusRange, uu.directionRandomizer = this.directionRandomizer, uu
      }
      parse(uu) {
        this.radius = uu.radius, this.height = uu.height, this.radiusRange = uu.radiusRange, this.directionRandomizer = uu.directionRandomizer
      }
    }
    class lu extends Xu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new su.t(0, 1, 0),
          Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new su.t(0, 1, 0);
        super(uu, Eu, ju), this.direction1 = Uu, this.direction2 = Zu
      }
      startDirectionFunction(uu, Eu, ju, Zu) {
        const Xu = (0, Uu.RandomRange)(this.direction1.x, this.direction2.x),
          lu = (0, Uu.RandomRange)(this.direction1.y, this.direction2.y),
          qu = (0, Uu.RandomRange)(this.direction1.z, this.direction2.z);
        Zu ? Eu.T6(Xu, lu, qu) : su.t.TransformNormalFromFloatsToRef(Xu, lu, qu, uu, Eu)
      }
      clone() {
        const uu = new lu(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return Zu.d.DeepCopy(this, uu), uu
      }
      applyToShader(uu) {
        uu.setFloat("radius", this.radius), uu.setFloat("height", this.height), uu.setFloat("radiusRange", this.radiusRange), uu.setVector3("direction1", this.direction1), uu.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(uu) {
        uu.addUniform("radius", 1), uu.addUniform("height", 1), uu.addUniform("radiusRange", 1), uu.addUniform("direction1", 3), uu.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const uu = super.serialize();
        return uu.direction1 = this.direction1.Osu(), uu.direction2 = this.direction2.Osu(), uu
      }
      parse(uu) {
        super.parse(uu), su.t.FromArrayToRef(uu.direction1, 0, this.direction1), su.t.FromArrayToRef(uu.direction2, 0, this.direction2)
      }
    }
  },
  39133: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => bu
    });
    const su = .5 * (Math.sqrt(3) - 1),
      Uu = (3 - Math.sqrt(3)) / 6,
      Zu = 1 / 3,
      Xu = 1 / 6,
      lu = (Math.sqrt(5) - 1) / 4,
      qu = (5 - Math.sqrt(5)) / 20,
      fu = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      Cu = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const bu = class {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const Eu = "function" == typeof uu ? uu : function(uu) {
          let Eu = 0,
            ju = 0,
            su = 0,
            Uu = 1;
          const Zu = function() {
            let uu = 4022871197;
            return function(Eu) {
              Eu = Eu.toString();
              for (let ju = 0; ju < Eu.length; ju++) {
                uu += Eu.charCodeAt(ju);
                let su = .02519603282416938 * uu;
                uu = su >>> 0, su -= uu, su *= uu, uu = su >>> 0, su -= uu, uu += 4294967296 * su
              }
              return 2.3283064365386963e-10 * (uu >>> 0)
            }
          }();
          Eu = Zu(" "), ju = Zu(" "), su = Zu(" "), Eu -= Zu(uu), Eu < 0 && (Eu += 1);
          ju -= Zu(uu), ju < 0 && (ju += 1);
          su -= Zu(uu), su < 0 && (su += 1);
          return function() {
            const uu = 2091639 * Eu + 2.3283064365386963e-10 * Uu;
            return Eu = ju, ju = su, su = uu - (Uu = 0 | uu)
          }
        }(uu);
        this.p = function(uu) {
          const Eu = new Uint8Array(256);
          for (let ju = 0; ju < 256; ju++) Eu[ju] = ju;
          for (let ju = 0; ju < 255; ju++) {
            const su = ju + ~~(uu() * (256 - ju)),
              Uu = Eu[ju];
            Eu[ju] = Eu[su], Eu[su] = Uu
          }
          return Eu
        }(Eu), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let ju = 0; ju < 512; ju++) this.perm[ju] = this.p[255 & ju], this.permMod12[ju] = this.perm[ju] % 12
      }
      noise2D(uu, Eu) {
        const ju = this.permMod12,
          Zu = this.perm;
        let Xu = 0,
          lu = 0,
          qu = 0;
        const Cu = (uu + Eu) * su,
          bu = Math.floor(uu + Cu),
          cu = Math.floor(Eu + Cu),
          Nu = (bu + cu) * Uu,
          Ou = uu - (bu - Nu),
          Yu = Eu - (cu - Nu);
        let hu, Du;
        Ou > Yu ? (hu = 1, Du = 0) : (hu = 0, Du = 1);
        const gu = Ou - hu + Uu,
          Mu = Yu - Du + Uu,
          eu = Ou - 1 + 2 * Uu,
          Gu = Yu - 1 + 2 * Uu,
          pu = 255 & bu,
          wu = 255 & cu;
        let Ju = .5 - Ou * Ou - Yu * Yu;
        if (Ju >= 0) {
          const uu = 3 * ju[pu + Zu[wu]];
          Ju *= Ju, Xu = Ju * Ju * (fu[uu] * Ou + fu[uu + 1] * Yu)
        }
        let du = .5 - gu * gu - Mu * Mu;
        if (du >= 0) {
          const uu = 3 * ju[pu + hu + Zu[wu + Du]];
          du *= du, lu = du * du * (fu[uu] * gu + fu[uu + 1] * Mu)
        }
        let au = .5 - eu * eu - Gu * Gu;
        if (au >= 0) {
          const uu = 3 * ju[pu + 1 + Zu[wu + 1]];
          au *= au, qu = au * au * (fu[uu] * eu + fu[uu + 1] * Gu)
        }
        return 70 * (Xu + lu + qu)
      }
      noise3D(uu, Eu, ju) {
        const su = this.permMod12,
          Uu = this.perm;
        let lu, qu, Cu, bu;
        const cu = (uu + Eu + ju) * Zu,
          Nu = Math.floor(uu + cu),
          Ou = Math.floor(Eu + cu),
          Yu = Math.floor(ju + cu),
          hu = (Nu + Ou + Yu) * Xu,
          Du = uu - (Nu - hu),
          gu = Eu - (Ou - hu),
          Mu = ju - (Yu - hu);
        let eu, Gu, pu, wu, Ju, du;
        Du >= gu ? gu >= Mu ? (eu = 1, Gu = 0, pu = 0, wu = 1, Ju = 1, du = 0) : Du >= Mu ? (eu = 1, Gu = 0, pu = 0, wu = 1, Ju = 0, du = 1) : (eu = 0, Gu = 0, pu = 1, wu = 1, Ju = 0, du = 1) : gu < Mu ? (eu = 0, Gu = 0, pu = 1, wu = 0, Ju = 1, du = 1) : Du < Mu ? (eu = 0, Gu = 1, pu = 0, wu = 0, Ju = 1, du = 1) : (eu = 0, Gu = 1, pu = 0, wu = 1, Ju = 1, du = 0);
        const au = Du - eu + Xu,
          Pu = gu - Gu + Xu,
          ou = Mu - pu + Xu,
          ku = Du - wu + 2 * Xu,
          mu = gu - Ju + 2 * Xu,
          vu = Mu - du + 2 * Xu,
          Ku = Du - 1 + .5,
          Vu = gu - 1 + .5,
          ru = Mu - 1 + .5,
          Qu = 255 & Nu,
          iu = 255 & Ou,
          Wu = 255 & Yu;
        let Su = .6 - Du * Du - gu * gu - Mu * Mu;
        if (Su < 0) lu = 0;
        else {
          const uu = 3 * su[Qu + Uu[iu + Uu[Wu]]];
          Su *= Su, lu = Su * Su * (fu[uu] * Du + fu[uu + 1] * gu + fu[uu + 2] * Mu)
        }
        let Iu = .6 - au * au - Pu * Pu - ou * ou;
        if (Iu < 0) qu = 0;
        else {
          const uu = 3 * su[Qu + eu + Uu[iu + Gu + Uu[Wu + pu]]];
          Iu *= Iu, qu = Iu * Iu * (fu[uu] * au + fu[uu + 1] * Pu + fu[uu + 2] * ou)
        }
        let Fu = .6 - ku * ku - mu * mu - vu * vu;
        if (Fu < 0) Cu = 0;
        else {
          const uu = 3 * su[Qu + wu + Uu[iu + Ju + Uu[Wu + du]]];
          Fu *= Fu, Cu = Fu * Fu * (fu[uu] * ku + fu[uu + 1] * mu + fu[uu + 2] * vu)
        }
        let Bu = .6 - Ku * Ku - Vu * Vu - ru * ru;
        if (Bu < 0) bu = 0;
        else {
          const uu = 3 * su[Qu + 1 + Uu[iu + 1 + Uu[Wu + 1]]];
          Bu *= Bu, bu = Bu * Bu * (fu[uu] * Ku + fu[uu + 1] * Vu + fu[uu + 2] * ru)
        }
        return 32 * (lu + qu + Cu + bu)
      }
      noise4D(uu, Eu, ju, su) {
        const Uu = this.perm;
        let Zu, Xu, fu, bu, cu;
        const Nu = (uu + Eu + ju + su) * lu,
          Ou = Math.floor(uu + Nu),
          Yu = Math.floor(Eu + Nu),
          hu = Math.floor(ju + Nu),
          Du = Math.floor(su + Nu),
          gu = (Ou + Yu + hu + Du) * qu,
          Mu = uu - (Ou - gu),
          eu = Eu - (Yu - gu),
          Gu = ju - (hu - gu),
          pu = su - (Du - gu);
        let wu = 0,
          Ju = 0,
          du = 0,
          au = 0;
        Mu > eu ? wu++ : Ju++, Mu > Gu ? wu++ : du++, Mu > pu ? wu++ : au++, eu > Gu ? Ju++ : du++, eu > pu ? Ju++ : au++, Gu > pu ? du++ : au++;
        const Pu = wu >= 3 ? 1 : 0,
          ou = Ju >= 3 ? 1 : 0,
          ku = du >= 3 ? 1 : 0,
          mu = au >= 3 ? 1 : 0,
          vu = wu >= 2 ? 1 : 0,
          Ku = Ju >= 2 ? 1 : 0,
          Vu = du >= 2 ? 1 : 0,
          ru = au >= 2 ? 1 : 0,
          Qu = wu >= 1 ? 1 : 0,
          iu = Ju >= 1 ? 1 : 0,
          Wu = du >= 1 ? 1 : 0,
          Su = au >= 1 ? 1 : 0,
          Iu = Mu - Pu + qu,
          Fu = eu - ou + qu,
          Bu = Gu - ku + qu,
          Lu = pu - mu + qu,
          tu = Mu - vu + 2 * qu,
          xu = eu - Ku + 2 * qu,
          Tu = Gu - Vu + 2 * qu,
          Hu = pu - ru + 2 * qu,
          Au = Mu - Qu + 3 * qu,
          nu = eu - iu + 3 * qu,
          yu = Gu - Wu + 3 * qu,
          zu = pu - Su + 3 * qu,
          Ru = Mu - 1 + 4 * qu,
          uE = eu - 1 + 4 * qu,
          EE = Gu - 1 + 4 * qu,
          jE = pu - 1 + 4 * qu,
          sE = 255 & Ou,
          UE = 255 & Yu,
          ZE = 255 & hu,
          XE = 255 & Du;
        let lE = .6 - Mu * Mu - eu * eu - Gu * Gu - pu * pu;
        if (lE < 0) Zu = 0;
        else {
          const uu = Uu[sE + Uu[UE + Uu[ZE + Uu[XE]]]] % 32 * 4;
          lE *= lE, Zu = lE * lE * (Cu[uu] * Mu + Cu[uu + 1] * eu + Cu[uu + 2] * Gu + Cu[uu + 3] * pu)
        }
        let qE = .6 - Iu * Iu - Fu * Fu - Bu * Bu - Lu * Lu;
        if (qE < 0) Xu = 0;
        else {
          const uu = Uu[sE + Pu + Uu[UE + ou + Uu[ZE + ku + Uu[XE + mu]]]] % 32 * 4;
          qE *= qE, Xu = qE * qE * (Cu[uu] * Iu + Cu[uu + 1] * Fu + Cu[uu + 2] * Bu + Cu[uu + 3] * Lu)
        }
        let fE = .6 - tu * tu - xu * xu - Tu * Tu - Hu * Hu;
        if (fE < 0) fu = 0;
        else {
          const uu = Uu[sE + vu + Uu[UE + Ku + Uu[ZE + Vu + Uu[XE + ru]]]] % 32 * 4;
          fE *= fE, fu = fE * fE * (Cu[uu] * tu + Cu[uu + 1] * xu + Cu[uu + 2] * Tu + Cu[uu + 3] * Hu)
        }
        let CE = .6 - Au * Au - nu * nu - yu * yu - zu * zu;
        if (CE < 0) bu = 0;
        else {
          const uu = Uu[sE + Qu + Uu[UE + iu + Uu[ZE + Wu + Uu[XE + Su]]]] % 32 * 4;
          CE *= CE, bu = CE * CE * (Cu[uu] * Au + Cu[uu + 1] * nu + Cu[uu + 2] * yu + Cu[uu + 3] * zu)
        }
        let bE = .6 - Ru * Ru - uE * uE - EE * EE - jE * jE;
        if (bE < 0) cu = 0;
        else {
          const uu = Uu[sE + 1 + Uu[UE + 1 + Uu[ZE + 1 + Uu[XE + 1]]]] % 32 * 4;
          bE *= bE, cu = bE * bE * (Cu[uu] * Ru + Cu[uu + 1] * uE + Cu[uu + 2] * EE + Cu[uu + 3] * jE)
        }
        return 27 * (Zu + Xu + fu + bu + cu)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);
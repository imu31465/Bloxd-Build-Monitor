/*! For license information please see igzsf.222.e227d559.chunk.js.LICENSE.txt */
export const id = 222;
export const ids = [222];
export const modules = {
  39787: (tt, et, Vt) => {
    tt.exports = qt;
    var Ot = Vt(404);

    function qt(tt, et) {
      if (!(this instanceof qt)) return new qt(tt, et);
      var Vt = Ot.create();
      Ot.add(Vt, tt, et), this.base = Ot.min(Ot.create(), tt, Vt), this.vec = Ot.clone(et), this.max = Ot.max(Ot.create(), tt, Vt), this.mag = Ot.length(this.vec)
    }
    var Dt = qt.prototype;
    Dt.width = function() {
      return this.vec[0]
    }, Dt.height = function() {
      return this.vec[1]
    }, Dt.depth = function() {
      return this.vec[2]
    }, Dt.x0 = function() {
      return this.base[0]
    }, Dt.y0 = function() {
      return this.base[1]
    }, Dt.z0 = function() {
      return this.base[2]
    }, Dt.x1 = function() {
      return this.max[0]
    }, Dt.y1 = function() {
      return this.max[1]
    }, Dt.z1 = function() {
      return this.max[2]
    }, Dt.translate = function(tt) {
      return Ot.add(this.max, this.max, tt), Ot.add(this.base, this.base, tt), this
    }, Dt.setPosition = function(tt) {
      return Ot.add(this.max, tt, this.vec), Ot.copy(this.base, tt), this
    }, Dt.expand = function(tt) {
      var et = Ot.create(),
        Vt = Ot.create();
      return Ot.max(et, tt.max, this.max), Ot.min(Vt, tt.base, this.base), Ot.subtract(et, et, Vt), new qt(Vt, et)
    }, Dt.intersects = function(tt) {
      return !(tt.base[0] > this.max[0]) && (!(tt.base[1] > this.max[1]) && (!(tt.base[2] > this.max[2]) && (!(tt.max[0] < this.base[0]) && (!(tt.max[1] < this.base[1]) && !(tt.max[2] < this.base[2])))))
    }, Dt.touches = function(tt) {
      var et = this.union(tt);
      return null !== et && (0 == et.width() || 0 == et.height() || 0 == et.depth())
    }, Dt.union = function(tt) {
      if (!this.intersects(tt)) return null;
      var et = Math.max(tt.base[0], this.base[0]),
        Vt = Math.max(tt.base[1], this.base[1]),
        Ot = Math.max(tt.base[2], this.base[2]);
      return new qt([et, Vt, Ot], [Math.min(tt.max[0], this.max[0]) - et, Math.min(tt.max[1], this.max[1]) - Vt, Math.min(tt.max[2], this.max[2]) - Ot])
    }
  },
  39780: tt => {
    tt.exports = function(tt, et, Vt, Ot, qt, Dt) {
      var mt = +et[0],
        dt = +et[1],
        jt = +et[2],
        Ht = +Vt[0],
        Xt = +Vt[1],
        Qt = +Vt[2],
        lt = Math.sqrt(Ht * Ht + Xt * Xt + Qt * Qt);
      if (0 === lt) throw new Error("Can't raycast along a zero vector");
      return function(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht) {
        for (var Xt = 0, Qt = Math.floor, lt = 0 | Qt(et), Et = 0 | Qt(Vt), ft = 0 | Qt(Ot), wt = qt > 0 ? 1 : -1, yt = Dt > 0 ? 1 : -1, Nt = mt > 0 ? 1 : -1, Mt = Math.abs(1 / qt), bt = Math.abs(1 / Dt), Jt = Math.abs(1 / mt), Ct = Mt < 1 / 0 ? Mt * (wt > 0 ? lt + 1 - et : et - lt) : 1 / 0, ut = bt < 1 / 0 ? bt * (yt > 0 ? Et + 1 - Vt : Vt - Et) : 1 / 0, Kt = Jt < 1 / 0 ? Jt * (Nt > 0 ? ft + 1 - Ot : Ot - ft) : 1 / 0, ht = -1; Xt <= dt;) {
          var vt = tt(lt, Et, ft);
          if (vt) return jt && (jt[0] = et + Xt * qt, jt[1] = Vt + Xt * Dt, jt[2] = Ot + Xt * mt), Ht && (Ht[0] = Ht[1] = Ht[2] = 0, 0 === ht && (Ht[0] = -wt), 1 === ht && (Ht[1] = -yt), 2 === ht && (Ht[2] = -Nt)), vt;
          Ct < ut ? Ct < Kt ? (lt += wt, Xt = Ct, Ct += Mt, ht = 0) : (ft += Nt, Xt = Kt, Kt += Jt, ht = 2) : ut < Kt ? (Et += yt, Xt = ut, ut += bt, ht = 1) : (ft += Nt, Xt = Kt, Kt += Jt, ht = 2)
        }
        return jt && (jt[0] = et + Xt * qt, jt[1] = Vt + Xt * Dt, jt[2] = Ot + Xt * mt), Ht && (Ht[0] = Ht[1] = Ht[2] = 0), 0
      }(tt, mt, dt, jt, Ht /= lt, Xt /= lt, Qt /= lt, Ot = "undefined" === typeof Ot ? 64 : +Ot, qt, Dt)
    }
  },
  39322: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => dt,
      g: () => Dt
    });
    var Ot = Vt(4204);
    let qt = null;

    function Dt(tt) {
      return null !== qt && tt === qt
    }

    function mt() {
      this.PU = !1, this.stopPropagation = !1, this.kU = !1, this.disabled = !1
    }
    class dt {
      constructor(tt, et) {
        this.version = "0.7.0";
        var Vt = Object.assign({}, new mt, et || {});
        this.element = tt || document, this.PU = !!Vt.PU, this.stopPropagation = !!Vt.stopPropagation, this.kU = !!Vt.kU, this.disabled = !!Vt.disabled, this.filterEvents = (tt, et) => !0, this.ignoreEvent = tt => !1, this.down = new Ot.EventEmitter, this.up = new Ot.EventEmitter, this.state = {}, this.rU = {
          dx: 0,
          dy: 0,
          Ket: 0,
          het: 0,
          Wet: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Ht(this) : document.addEventListener("DOMContentLoaded", (tt => {
          Ht(this)
        }), {
          once: !0
        })
      }
      bind(tt) {
        for (var et = arguments.length, Vt = new Array(et > 1 ? et - 1 : 0), Ot = 1; Ot < et; Ot++) Vt[Ot - 1] = arguments[Ot];
        Vt.forEach((et => {
          var Vt = this._keyBindmap[et] || [];
          Vt.includes(tt) || (Vt.push(tt), this._keyBindmap[et] = Vt)
        })), this.state[tt] = !!this.state[tt], this.pressCount[tt] = this.pressCount[tt] || 0, this.releaseCount[tt] = this.releaseCount[tt] || 0
      }
      unbind(tt) {
        for (var et in this._keyBindmap) {
          var Vt = this._keyBindmap[et],
            Ot = Vt.indexOf(tt);
          Ot > -1 && Vt.splice(Ot, 1)
        }
      }
      getBindings() {
        var tt = {};
        for (var et in this._keyBindmap) {
          this._keyBindmap[et].forEach((Vt => {
            tt[Vt] = tt[Vt] || [], tt[Vt].push(et)
          }))
        }
        return tt
      }
      BQ() {
        jt(this.rU), jt(this.pressCount), jt(this.releaseCount)
      }
    }

    function jt(tt) {
      for (var et in tt) tt[et] = 0
    }

    function Ht(tt) {
      window.addEventListener("keydown", yt.bind(null, tt, !0), !1), window.addEventListener("keyup", yt.bind(null, tt, !1), !1);
      var et = {
        passive: !0
      };
      tt.element.addEventListener("touchstart", Et.bind(void 0, tt), {
        passive: !1
      }), tt.element.addEventListener("touchend", wt.bind(void 0, tt), et), tt.element.addEventListener("mousedown", Nt.bind(null, tt, !0), et), window.document.addEventListener("mouseup", Nt.bind(null, tt, !1), et), tt.element.addEventListener("touchmove", Mt.bind(null, tt), et), tt.element.addEventListener("mousemove", Mt.bind(null, tt), et), window.PointerEvent, tt.element.addEventListener("wheel", bt.bind(null, tt), et), tt.element.addEventListener("contextmenu", Jt.bind(null, tt), !1), window.addEventListener("blur", Kt.bind(null, tt), !1)
    }
    var Xt = 0,
      Qt = 0,
      lt = null;

    function Et(tt, et) {
      et.preventDefault(), ft(et)
    }

    function ft(tt) {
      let et = !1;
      for (let Vt = 0; Vt < tt.touches.length; ++Vt)
        if (tt.touches[Vt].identifier === lt) {
          et = !0;
          break
        } if (!et) {
        const et = tt.changedTouches[0];
        Xt = et.clientX, Qt = et.clientY, lt = et.identifier
      }
    }

    function wt(tt, et) {
      for (var Vt = et.changedTouches, Ot = 0; Ot < Vt.length; ++Ot) Vt[Ot].identifier === lt && (lt = null)
    }

    function yt(tt, et, Vt) {
      if (!tt.ignoreEvent(Vt)) try {
        ht(tt, Vt), et && Vt.isTrusted && !Vt.repeat && tt._keyStates[Vt.code] && vt(tt, Vt.code)
      } finally {
        Wt(Vt.code, et, tt, Vt)
      }
    }

    function Nt(tt, et, Vt) {
      if (!tt.ignoreEvent(Vt)) try {
        ht(tt, Vt)
      } finally {
        ! function(tt, et, Vt) {
          if ("pointerId" in Vt)
            if (et) {
              if (null !== tt._touches.currID) return;
              tt._touches.currID = Vt.pointerId
            } else {
              if (tt._touches.currID !== Vt.pointerId) return;
              tt._touches.currID = null
            } var Ot = "button" in Vt ? Vt.button + 1 : 1;
          Wt("Mouse" + Ot, et, tt, Vt)
        }(tt, et, Vt)
      }
    }

    function Mt(tt, et) {
      var Vt = et.movementX || et.mozMovementX || 0,
        Ot = et.movementY || et.mozMovementY || 0;
      if (et.touches && 0 === (Vt | Ot)) {
        var qt = function(tt) {
          ft(tt);
          for (let et = 0; et < tt.changedTouches.length; ++et)
            if (tt.changedTouches[et].identifier == lt) {
              const Vt = tt.changedTouches[et],
                Ot = [Vt.clientX - Xt, Vt.clientY - Qt];
              return Xt = Vt.clientX, Qt = Vt.clientY, Ot
            } return console.error(`Did not find touch id ${lt}`), [0, 0]
        }(et);
        Vt = qt[0], Ot = qt[1]
      }
      tt.rU.dx += Vt, tt.rU.dy += Ot
    }

    function bt(tt, et) {
      ht(tt, et);
      var Vt = 1;
      switch (et.deltaMode) {
        case 0:
          Vt = 1;
          break;
        case 1:
          Vt = 12;
          break;
        case 2:
          Vt = tt.element.clientHeight || window.innerHeight
      }
      tt.rU.Ket += (et.deltaX || 0) * Vt, tt.rU.het += (et.deltaY || 0) * Vt, tt.rU.Wet += (et.deltaZ || 0) * Vt
    }

    function Jt(tt, et) {
      if (!tt.kU) return et.preventDefault(), !1
    }
    var Ct = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function ut(tt, et) {
      return !!tt[Ct[et]] || ("AltRight" === et || "ControlLeft" === et) && "function" === typeof tt.getModifierState && !0 === tt.getModifierState("AltGraph")
    }

    function Kt(tt, et) {
      for (var Vt in tt._modifiersHeldThroughBlur = {}, Ct) tt._keyStates[Vt] && (tt._modifiersHeldThroughBlur[Vt] = !0);
      et && et.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (tt) {
          return !0
        }
      }() && (clearTimeout(tt._blurRelease), tt._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var et in tt._modifiersHeldThroughBlur = {}, tt._keyStates) tt._keyStates[et] && !/^Mouse\d/.test(et) && vt(tt, et)
      }), 0))
    }

    function ht(tt, et) {
      var Vt = tt._modifiersHeldThroughBlur;
      if (Vt && et.isTrusted && document.hasFocus())
        for (var Ot in Vt) delete Vt[Ot], tt._keyStates[Ot] && Ot !== et.code && (ut(et, Ot) || vt(tt, Ot))
    }

    function vt(tt, et) {
      const Vt = {
          code: et,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Ot = qt;
      qt = Vt;
      try {
        Wt(et, !1, tt, Vt)
      } finally {
        qt = Ot
      }
    }

    function Wt(tt, et, Vt, Ot) {
      var qt = Vt._keyBindmap[tt];
      qt && (St(Vt._keyStates[tt], et) && (Vt._keyStates[tt] = et, qt.forEach((tt => {
        (!Vt.filterEvents || Vt.filterEvents(Ot, tt)) && function(tt, et, Vt, Ot) {
          var qt = et ? Vt.pressCount : Vt.releaseCount;
          qt[tt] = (qt[tt] || 0) + 1;
          var Dt = Vt._bindPressCount[tt] || 0;
          (Dt += et ? 1 : -1) < 0 && (Dt = 0);
          Vt._bindPressCount[tt] = Dt;
          var mt = Vt.state[tt];
          if (St(mt, Dt)) {
            Vt.state[tt] = Dt > 0;
            var dt = et ? Vt.down : Vt.up;
            Vt.disabled || dt.emit(tt, Ot)
          }
        }(tt, et, Vt, Ot)
      }))), "button" in Ot || (Vt.PU && !Ot.defaultPrevented && Ot.preventDefault(), Vt.stopPropagation && Ot.stopPropagation()))
    }

    function St(tt, et) {
      return tt ? !et : et
    }
  },
  36785: (tt, et) => {
    function Vt(tt) {
      if (tt && "object" === typeof tt) {
        var et = tt.which || tt.keyCode || tt.charCode;
        et && (tt = et)
      }
      if ("number" === typeof tt) return mt[tt];
      var Vt, Dt = String(tt);
      return (Vt = Ot[Dt.toLowerCase()]) ? Vt : (Vt = qt[Dt.toLowerCase()]) || (1 === Dt.length ? Dt.charCodeAt(0) : void 0)
    }
    Vt.isEventKey = function(tt, et) {
      if (tt && "object" === typeof tt) {
        var Vt = tt.which || tt.keyCode || tt.charCode;
        if (null === Vt || void 0 === Vt) return !1;
        if ("string" === typeof et) {
          var Dt;
          if (Dt = Ot[et.toLowerCase()]) return Dt === Vt;
          if (Dt = qt[et.toLowerCase()]) return Dt === Vt
        } else if ("number" === typeof et) return et === Vt;
        return !1
      }
    };
    var Ot = (et = tt.exports = Vt).code = et.codes = {
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
      qt = et.aliases = {
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
    for (Dt = 97; Dt < 123; Dt++) Ot[String.fromCharCode(Dt)] = Dt - 32;
    for (var Dt = 48; Dt < 58; Dt++) Ot[Dt - 48] = Dt;
    for (Dt = 1; Dt < 13; Dt++) Ot["f" + Dt] = Dt + 111;
    for (Dt = 0; Dt < 10; Dt++) Ot["numpad " + Dt] = Dt + 96;
    var mt = et.names = et.title = {};
    for (Dt in Ot) mt[Ot[Dt]] = Dt;
    for (var dt in qt) Ot[dt] = qt[dt]
  },
  39768: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot
    });
    class Ot {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.uF = !1, this.KF = !1, this.bI = 30, this.jF = 0, this.vF = 100, this.zy = !1, this.fullscreen = !1, this.bM = function(tt) {}, this.SF = function(tt, et, Vt) {}, this.YF = function() {}, this.iN = function() {}, this.ZF = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(tt) {}, this._data = new qt(et),
          function(tt) {
            if ("loading" === document.readyState) {
              var et = () => {
                document.removeEventListener("readystatechange", et), tt()
              };
              document.addEventListener("readystatechange", et)
            } else setTimeout(tt, 0)
          }((() => {
            ! function(tt) {
              var et = tt._data,
                Vt = et.nowObject.now();
              et.lastTickStarted = Vt, et.lastFrameStarted = Vt, et.lastRenderStarted = Vt, et.frameCB = () => function(tt) {
                var et = tt._data;
                requestAnimationFrame(et.frameCB), dt(tt);
                var Vt = et.nowObject.now(),
                  Ot = Vt - et.lastFrameStarted;
                if (et.lastFrameStarted = Vt, tt.jF > 0) {
                  et.renderAccum += Ot;
                  var qt = 1e3 / tt.jF;
                  if (et.renderAccum < qt) return;
                  et.renderAccum -= qt, et.renderAccum > qt && (et.renderAccum = qt)
                }
                var Dt = Vt - et.lastRenderStarted;
                et.lastRenderStarted = Vt;
                var mt = 1e3 / tt.bI,
                  jt = (Vt - et.lastTickStarted) / mt;
                jt < 0 && (jt = 0);
                tt.SF(Dt, jt, mt), setTimeout(dt, 0, tt, !0)
              }(tt), et.intervalCB = () => dt(tt), requestAnimationFrame(et.frameCB), et.pollTime > 0 && (et.intervalID = setInterval(et.intervalCB, Math.max(et.pollTime, 1e3 / tt.bI / 2)))
            }(this),
            function(tt, et) {
              if (!et) return;
              var Vt = !1,
                Ot = !1,
                qt = tt => {
                  if (!!tt !== (Vt = et === document.pointerLockElement))
                    if (tt) {
                      var Ot = et.requestPointerLock();
                      Ot && Ot.catch && Ot.catch((tt => {}))
                    } else document.exitPointerLock()
                },
                Dt = tt => {
                  !!tt !== (Ot = et === document.fullscreenElement) && (tt ? et.requestFullscreen ? et.requestFullscreen() : et.webkitRequestFullscreen && et.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (Ot => {
                Vt = et === document.pointerLockElement, tt.ZF(Vt)
              })), document.addEventListener("fullscreenchange", (Vt => {
                Ot = et === document.fullscreenElement, tt.onFullscreenChanged(Ot)
              })), document.addEventListener("pointerlockerror", (Ot => {
                Vt = et === document.pointerLockElement, tt.onPointerLockError(Ot)
              })), Object.defineProperty(tt, "zy", {
                get: () => Vt,
                set: qt
              }), Object.defineProperty(tt, "fullscreen", {
                get: () => Ot,
                set: Dt
              }), et.addEventListener("click", (et => {
                tt.uF && qt(!0), tt.KF && Dt(!0)
              }));
              var mt = () => tt.iN();
              if (window.ResizeObserver) {
                new ResizeObserver(mt).observe(et)
              } else window.addEventListener("resize", mt)
            }(this, tt), this.YF()
          }))
      }
    }

    function qt() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = tt, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var Dt = 3,
      mt = 20;

    function dt(tt) {
      for (var et = tt._data, Vt = 1e3 / tt.bI, Ot = et.nowObject.now() + mt, qt = 0; et.nowObject.now() >= et.lastTickStarted + Vt && et.nowObject.now() < Ot && ++qt <= Dt;) tt.bM(Vt), et.lastTickStarted += Vt;
      var dt = 5 * (Vt + 5),
        jt = et.nowObject.now();
      if (jt - et.lastTickStarted > dt)
        for (; jt >= et.lastTickStarted + Vt;) et.lastTickStarted += Vt
    }
  },
  36950: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt
    });
    var Ot = Vt(63);
    const qt = Ot.useLayoutEffect;
    const Dt = function(tt) {
      var et = (0, Ot.useRef)(tt);
      return qt((function() {
        et.current = tt
      })), et
    };
    var mt = function(tt) {
      var et = Dt(tt);
      (0, Ot.useEffect)((function() {
        var tt = function(tt) {
          var Vt;
          if (null != et.current && (Vt = et.current(tt)), tt.defaultPrevented && (tt.returnValue = ""), "string" === typeof Vt) return tt.returnValue = Vt, Vt
        };
        return window.addEventListener("beforeunload", tt),
          function() {
            window.removeEventListener("beforeunload", tt)
          }
      }), [])
    }
  },
  36830: tt => {
    var et, Vt = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Ot = /OS X/.test(Vt),
      qt = /Opera/.test(Vt),
      Dt = !/like Gecko/.test(Vt) && !qt,
      mt = tt.exports = {
        0: Ot ? "<menu>" : "<UNK>",
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
        93: Ot ? "<meta>" : "<menu>",
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
        173: Ot && Dt ? "-" : "<volume-mute>",
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
        231: qt ? "`" : "<unicode>",
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
    for (et = 58; et < 65; ++et) mt[et] = String.fromCharCode(et);
    for (et = 48; et < 58; ++et) mt[et] = et - 48 + "";
    for (et = 65; et < 91; ++et) mt[et] = String.fromCharCode(et);
    for (et = 96; et < 106; ++et) mt[et] = "<num-" + (et - 96) + ">";
    for (et = 112; et < 136; ++et) mt[et] = "F" + (et - 111)
  },
  39177: (tt, et, Vt) => {
    function Ot(tt, et, Vt, Ot, qt) {
      var Dt = {};
      return Object.keys(Ot).forEach((function(tt) {
        Dt[tt] = Ot[tt]
      })), Dt.enumerable = !!Dt.enumerable, Dt.configurable = !!Dt.configurable, ("value" in Dt || Dt.initializer) && (Dt.writable = !0), Dt = Vt.slice().reverse().reduce((function(Vt, Ot) {
        return Ot(tt, et, Vt) || Vt
      }), Dt), qt && void 0 !== Dt.initializer && (Dt.value = Dt.initializer ? Dt.initializer.call(qt) : void 0, Dt.initializer = void 0), void 0 === Dt.initializer && (Object.defineProperty(tt, et, Dt), Dt = null), Dt
    }
    Vt.d(et, {
      e: () => Ot
    })
  },
  39169: (tt, et, Vt) => {
    function Ot(tt, et, Vt, Ot) {
      Vt && Object.defineProperty(tt, et, {
        enumerable: Vt.enumerable,
        configurable: Vt.configurable,
        writable: Vt.writable,
        value: Vt.initializer ? Vt.initializer.call(Ot) : void 0
      })
    }
    Vt.d(et, {
      b: () => Ot
    })
  },
  38897: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt
    });
    var Ot = Vt(38899);
    const qt = (tt, et, Vt) => tt ? tt.getClassName && "Mesh" === tt.getClassName() ? null : !tt.getClassName || "SubMesh" !== tt.getClassName() && "PhysicsBody" !== tt.getClassName() ? tt.clone ? tt.clone() : Array.isArray(tt) ? tt.slice() : Vt && "object" === typeof tt ? {
      ...tt
    } : null : tt.clone(et) : null;
    class Dt {
      static DeepCopy(tt, et, Vt, Dt) {
        let mt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const dt = function(tt) {
          const et = [];
          do {
            const Vt = Object.getOwnPropertyNames(tt);
            for (const tt of Vt) - 1 === et.indexOf(tt) && et.push(tt)
          } while (tt = Object.getPrototypeOf(tt));
          return et
        }(tt);
        for (const Ht of dt) {
          if ("_" === Ht[0] && (!Dt || -1 === Dt.indexOf(Ht))) continue;
          if (Ht.endsWith("Observable")) continue;
          if (Vt && -1 !== Vt.indexOf(Ht)) continue;
          const dt = tt[Ht],
            Xt = typeof dt;
          if ("function" !== Xt) try {
            if ("object" === Xt)
              if (dt instanceof Uint8Array) et[Ht] = Uint8Array.from(dt);
              else if (dt instanceof Array) {
              if (et[Ht] = [], dt.length > 0)
                if ("object" == typeof dt[0])
                  for (let tt = 0; tt < dt.length; tt++) {
                    const Vt = qt(dt[tt], et, mt); - 1 === et[Ht].indexOf(Vt) && et[Ht].push(Vt)
                  } else et[Ht] = dt.slice(0)
            } else et[Ht] = qt(dt, et, mt);
            else et[Ht] = dt
          } catch (jt) {
            Ot.d.Warn(jt.message)
          }
        }
      }
    }
  },
  38927: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => qt,
      f: () => Dt,
      h: () => mt,
      i: () => dt
    });
    var Ot = Vt(37513);
    class qt {
      constructor(tt, et, Vt) {
        this.gradient = tt, this.color1 = et, this.color2 = Vt
      }
      getColorToRef(tt) {
        this.color2 ? Ot.c.LerpToRef(this.color1, this.color2, Math.random(), tt) : tt.rK(this.color1)
      }
    }
    class Dt {
      constructor(tt, et) {
        this.gradient = tt, this.color = et
      }
    }
    class mt {
      constructor(tt, et, Vt) {
        this.gradient = tt, this.factor1 = et, this.factor2 = Vt
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class dt {
      static GetCurrentGradient(tt, et, Vt) {
        if (et[0].gradient > tt) return void Vt(et[0], et[0], 1);
        for (let qt = 0; qt < et.length - 1; qt++) {
          const Ot = et[qt],
            Dt = et[qt + 1];
          if (tt >= Ot.gradient && tt <= Dt.gradient) {
            return void Vt(Ot, Dt, (tt - Ot.gradient) / (Dt.gradient - Ot.gradient))
          }
        }
        const Ot = et.length - 1;
        Vt(et[Ot], et[Ot], 1)
      }
    }
  },
  38899: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot
    });
    class Ot {
      static _CheckLimit(tt, et) {
        let Vt = Ot._LogLimitOutputs[tt];
        return Vt ? Vt.current++ : (Vt = {
          limit: et,
          current: 1
        }, Ot._LogLimitOutputs[tt] = Vt), Vt.current <= Vt.limit
      }
      static _GenerateLimitMessage(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Vt = Ot._LogLimitOutputs[tt];
        if (!Vt || !Ot.MessageLimitReached) return;
        const qt = this._Levels[et];
        Vt.current === Vt.limit && Ot[qt.name](Ot.MessageLimitReached.replace(/%LIMIT%/g, "" + Vt.limit).replace(/%TYPE%/g, qt.name ?? ""))
      }
      static _AddLogEntry(tt) {
        Ot._LogCache = tt + Ot._LogCache, Ot.OnNewCacheEntry && Ot.OnNewCacheEntry(tt)
      }
      static _FormatMessage(tt) {
        const et = tt => tt < 10 ? "0" + tt : "" + tt,
          Vt = new Date;
        return "[" + et(Vt.getHours()) + ":" + et(Vt.getMinutes()) + ":" + et(Vt.getSeconds()) + "]: " + tt
      }
      static _LogDisabled(tt, et) {}
      static _LogEnabled() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          et = arguments.length > 1 ? arguments[1] : void 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        const qt = Array.isArray(et) ? et[0] : et;
        if (void 0 !== Vt && !Ot._CheckLimit(qt, Vt)) return;
        const Dt = Ot._FormatMessage(qt),
          mt = this._Levels[tt],
          dt = Array.isArray(et) ? et.slice(1) : [];
        mt.logFunc && mt.logFunc("BJS - " + Dt, ...dt);
        const jt = `<div style='color:${mt.color}'>${Dt}</div><br>`;
        Ot._AddLogEntry(jt), Ot._GenerateLimitMessage(qt, tt)
      }
      static get LogCache() {
        return Ot._LogCache
      }
      static ClearLogCache() {
        Ot._LogCache = "", Ot._LogLimitOutputs = {}, Ot.errorsCount = 0
      }
      static set LogLevels(tt) {
        Ot.Log = Ot._LogDisabled, Ot.Warn = Ot._LogDisabled, Ot.Error = Ot._LogDisabled;
        const et = [Ot.MessageLogLevel, Ot.WarningLogLevel, Ot.ErrorLogLevel];
        for (const Vt of et)
          if ((tt & Vt) === Vt) {
            const tt = this._Levels[Vt];
            Ot[tt.name] = Ot._LogEnabled.bind(Ot, Vt)
          }
      }
    }
    Ot.NoneLogLevel = 0, Ot.MessageLogLevel = 1, Ot.WarningLogLevel = 2, Ot.ErrorLogLevel = 4, Ot.AllLogLevel = 7, Ot.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Ot._LogCache = "", Ot._LogLimitOutputs = {}, Ot._Levels = [{}, {
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
    }], Ot.errorsCount = 0, Ot.Log = Ot._LogEnabled.bind(Ot, Ot.MessageLogLevel), Ot.Warn = Ot._LogEnabled.bind(Ot, Ot.WarningLogLevel), Ot.Error = Ot._LogEnabled.bind(Ot, Ot.ErrorLogLevel)
  },
  38935: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt
    });
    var Ot = Vt(37336),
      qt = Vt(37372),
      Dt = Vt(38897);
    class mt {
      constructor() {
        this.direction1 = new Ot.n(0, 1, 0), this.direction2 = new Ot.n(0, 1, 0), this.minEmitBox = new Ot.n(-.5, -.5, -.5), this.maxEmitBox = new Ot.n(.5, .5, .5)
      }
      startDirectionFunction(tt, et, Vt, Dt) {
        const mt = (0, qt.RandomRange)(this.direction1.x, this.direction2.x),
          dt = (0, qt.RandomRange)(this.direction1.y, this.direction2.y),
          jt = (0, qt.RandomRange)(this.direction1.z, this.direction2.z);
        if (Dt) return et.x = mt, et.y = dt, void(et.z = jt);
        Ot.n.TransformNormalFromFloatsToRef(mt, dt, jt, tt, et)
      }
      startPositionFunction(tt, et, Vt, Dt) {
        const mt = (0, qt.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          dt = (0, qt.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          jt = (0, qt.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (Dt) return et.x = mt, et.y = dt, void(et.z = jt);
        Ot.n.TransformCoordinatesFromFloatsToRef(mt, dt, jt, tt, et)
      }
      clone() {
        const tt = new mt;
        return Dt.d.DeepCopy(this, tt), tt
      }
      applyToShader(tt) {
        tt.setVector3("direction1", this.direction1), tt.setVector3("direction2", this.direction2), tt.setVector3("minEmitBox", this.minEmitBox), tt.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(tt) {
        tt.addUniform("direction1", 3), tt.addUniform("direction2", 3), tt.addUniform("minEmitBox", 3), tt.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const tt = {};
        return tt.type = this.getClassName(), tt.direction1 = this.direction1.GOt(), tt.direction2 = this.direction2.GOt(), tt.minEmitBox = this.minEmitBox.GOt(), tt.maxEmitBox = this.maxEmitBox.GOt(), tt
      }
      parse(tt) {
        Ot.n.FromArrayToRef(tt.direction1, 0, this.direction1), Ot.n.FromArrayToRef(tt.direction2, 0, this.direction2), Ot.n.FromArrayToRef(tt.minEmitBox, 0, this.minEmitBox), Ot.n.FromArrayToRef(tt.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38888: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => dt,
      f: () => mt
    });
    var Ot = Vt(37336),
      qt = Vt(37372),
      Dt = Vt(38897);
    class mt {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = tt, this.height = et, this.radiusRange = Vt, this.directionRandomizer = qt, this._tempVector = Ot.n.Zero()
      }
      startDirectionFunction(tt, et, Vt, Dt, mt) {
        Vt.position.subtractToRef(tt.getTranslation(), this._tempVector), this._tempVector.normalize(), Ot.n.TransformNormalToRef(this._tempVector, mt, this._tempVector);
        const dt = (0, qt.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let jt = Math.atan2(this._tempVector.x, this._tempVector.z);
        jt += (0, qt.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = dt, this._tempVector.x = Math.sin(jt), this._tempVector.z = Math.cos(jt), this._tempVector.normalize(), Dt ? et.rK(this._tempVector) : Ot.n.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, tt, et)
      }
      startPositionFunction(tt, et, Vt, Dt) {
        const mt = (0, qt.RandomRange)(-this.height / 2, this.height / 2),
          dt = (0, qt.RandomRange)(0, 2 * Math.PI),
          jt = (0, qt.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          Ht = Math.sqrt(jt) * this.radius,
          Xt = Ht * Math.cos(dt),
          Qt = Ht * Math.sin(dt);
        Dt ? et.W9(Xt, mt, Qt) : Ot.n.TransformCoordinatesFromFloatsToRef(Xt, mt, Qt, tt, et)
      }
      clone() {
        const tt = new mt(this.radius, this.directionRandomizer);
        return Dt.d.DeepCopy(this, tt), tt
      }
      applyToShader(tt) {
        tt.setFloat("radius", this.radius), tt.setFloat("height", this.height), tt.setFloat("radiusRange", this.radiusRange), tt.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(tt) {
        tt.addUniform("radius", 1), tt.addUniform("height", 1), tt.addUniform("radiusRange", 1), tt.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const tt = {};
        return tt.type = this.getClassName(), tt.radius = this.radius, tt.height = this.height, tt.radiusRange = this.radiusRange, tt.directionRandomizer = this.directionRandomizer, tt
      }
      parse(tt) {
        this.radius = tt.radius, this.height = tt.height, this.radiusRange = tt.radiusRange, this.directionRandomizer = tt.directionRandomizer
      }
    }
    class dt extends mt {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ot.n(0, 1, 0),
          Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Ot.n(0, 1, 0);
        super(tt, et, Vt), this.direction1 = qt, this.direction2 = Dt
      }
      startDirectionFunction(tt, et, Vt, Dt) {
        const mt = (0, qt.RandomRange)(this.direction1.x, this.direction2.x),
          dt = (0, qt.RandomRange)(this.direction1.y, this.direction2.y),
          jt = (0, qt.RandomRange)(this.direction1.z, this.direction2.z);
        Dt ? et.W9(mt, dt, jt) : Ot.n.TransformNormalFromFloatsToRef(mt, dt, jt, tt, et)
      }
      clone() {
        const tt = new dt(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return Dt.d.DeepCopy(this, tt), tt
      }
      applyToShader(tt) {
        tt.setFloat("radius", this.radius), tt.setFloat("height", this.height), tt.setFloat("radiusRange", this.radiusRange), tt.setVector3("direction1", this.direction1), tt.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(tt) {
        tt.addUniform("radius", 1), tt.addUniform("height", 1), tt.addUniform("radiusRange", 1), tt.addUniform("direction1", 3), tt.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const tt = super.serialize();
        return tt.direction1 = this.direction1.GOt(), tt.direction2 = this.direction2.GOt(), tt
      }
      parse(tt) {
        super.parse(tt), Ot.n.FromArrayToRef(tt.direction1, 0, this.direction1), Ot.n.FromArrayToRef(tt.direction2, 0, this.direction2)
      }
    }
  },
  39010: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Qt
    });
    const Ot = .5 * (Math.sqrt(3) - 1),
      qt = (3 - Math.sqrt(3)) / 6,
      Dt = 1 / 3,
      mt = 1 / 6,
      dt = (Math.sqrt(5) - 1) / 4,
      jt = (5 - Math.sqrt(5)) / 20,
      Ht = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      Xt = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const Qt = class {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const et = "function" == typeof tt ? tt : function(tt) {
          let et = 0,
            Vt = 0,
            Ot = 0,
            qt = 1;
          const Dt = function() {
            let tt = 4022871197;
            return function(et) {
              et = et.toString();
              for (let Vt = 0; Vt < et.length; Vt++) {
                tt += et.charCodeAt(Vt);
                let Ot = .02519603282416938 * tt;
                tt = Ot >>> 0, Ot -= tt, Ot *= tt, tt = Ot >>> 0, Ot -= tt, tt += 4294967296 * Ot
              }
              return 2.3283064365386963e-10 * (tt >>> 0)
            }
          }();
          et = Dt(" "), Vt = Dt(" "), Ot = Dt(" "), et -= Dt(tt), et < 0 && (et += 1);
          Vt -= Dt(tt), Vt < 0 && (Vt += 1);
          Ot -= Dt(tt), Ot < 0 && (Ot += 1);
          return function() {
            const tt = 2091639 * et + 2.3283064365386963e-10 * qt;
            return et = Vt, Vt = Ot, Ot = tt - (qt = 0 | tt)
          }
        }(tt);
        this.p = function(tt) {
          const et = new Uint8Array(256);
          for (let Vt = 0; Vt < 256; Vt++) et[Vt] = Vt;
          for (let Vt = 0; Vt < 255; Vt++) {
            const Ot = Vt + ~~(tt() * (256 - Vt)),
              qt = et[Vt];
            et[Vt] = et[Ot], et[Ot] = qt
          }
          return et
        }(et), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let Vt = 0; Vt < 512; Vt++) this.perm[Vt] = this.p[255 & Vt], this.permMod12[Vt] = this.perm[Vt] % 12
      }
      noise2D(tt, et) {
        const Vt = this.permMod12,
          Dt = this.perm;
        let mt = 0,
          dt = 0,
          jt = 0;
        const Xt = (tt + et) * Ot,
          Qt = Math.floor(tt + Xt),
          lt = Math.floor(et + Xt),
          Et = (Qt + lt) * qt,
          ft = tt - (Qt - Et),
          wt = et - (lt - Et);
        let yt, Nt;
        ft > wt ? (yt = 1, Nt = 0) : (yt = 0, Nt = 1);
        const Mt = ft - yt + qt,
          bt = wt - Nt + qt,
          Jt = ft - 1 + 2 * qt,
          Ct = wt - 1 + 2 * qt,
          ut = 255 & Qt,
          Kt = 255 & lt;
        let ht = .5 - ft * ft - wt * wt;
        if (ht >= 0) {
          const tt = 3 * Vt[ut + Dt[Kt]];
          ht *= ht, mt = ht * ht * (Ht[tt] * ft + Ht[tt + 1] * wt)
        }
        let vt = .5 - Mt * Mt - bt * bt;
        if (vt >= 0) {
          const tt = 3 * Vt[ut + yt + Dt[Kt + Nt]];
          vt *= vt, dt = vt * vt * (Ht[tt] * Mt + Ht[tt + 1] * bt)
        }
        let Wt = .5 - Jt * Jt - Ct * Ct;
        if (Wt >= 0) {
          const tt = 3 * Vt[ut + 1 + Dt[Kt + 1]];
          Wt *= Wt, jt = Wt * Wt * (Ht[tt] * Jt + Ht[tt + 1] * Ct)
        }
        return 70 * (mt + dt + jt)
      }
      noise3D(tt, et, Vt) {
        const Ot = this.permMod12,
          qt = this.perm;
        let dt, jt, Xt, Qt;
        const lt = (tt + et + Vt) * Dt,
          Et = Math.floor(tt + lt),
          ft = Math.floor(et + lt),
          wt = Math.floor(Vt + lt),
          yt = (Et + ft + wt) * mt,
          Nt = tt - (Et - yt),
          Mt = et - (ft - yt),
          bt = Vt - (wt - yt);
        let Jt, Ct, ut, Kt, ht, vt;
        Nt >= Mt ? Mt >= bt ? (Jt = 1, Ct = 0, ut = 0, Kt = 1, ht = 1, vt = 0) : Nt >= bt ? (Jt = 1, Ct = 0, ut = 0, Kt = 1, ht = 0, vt = 1) : (Jt = 0, Ct = 0, ut = 1, Kt = 1, ht = 0, vt = 1) : Mt < bt ? (Jt = 0, Ct = 0, ut = 1, Kt = 0, ht = 1, vt = 1) : Nt < bt ? (Jt = 0, Ct = 1, ut = 0, Kt = 0, ht = 1, vt = 1) : (Jt = 0, Ct = 1, ut = 0, Kt = 1, ht = 1, vt = 0);
        const Wt = Nt - Jt + mt,
          St = Mt - Ct + mt,
          ct = bt - ut + mt,
          Rt = Nt - Kt + 2 * mt,
          It = Mt - ht + 2 * mt,
          Pt = bt - vt + 2 * mt,
          Zt = Nt - 1 + .5,
          Lt = Mt - 1 + .5,
          Ft = bt - 1 + .5,
          kt = 255 & Et,
          Gt = 255 & ft,
          zt = 255 & wt;
        let ot = .6 - Nt * Nt - Mt * Mt - bt * bt;
        if (ot < 0) dt = 0;
        else {
          const tt = 3 * Ot[kt + qt[Gt + qt[zt]]];
          ot *= ot, dt = ot * ot * (Ht[tt] * Nt + Ht[tt + 1] * Mt + Ht[tt + 2] * bt)
        }
        let rt = .6 - Wt * Wt - St * St - ct * ct;
        if (rt < 0) jt = 0;
        else {
          const tt = 3 * Ot[kt + Jt + qt[Gt + Ct + qt[zt + ut]]];
          rt *= rt, jt = rt * rt * (Ht[tt] * Wt + Ht[tt + 1] * St + Ht[tt + 2] * ct)
        }
        let Ut = .6 - Rt * Rt - It * It - Pt * Pt;
        if (Ut < 0) Xt = 0;
        else {
          const tt = 3 * Ot[kt + Kt + qt[Gt + ht + qt[zt + vt]]];
          Ut *= Ut, Xt = Ut * Ut * (Ht[tt] * Rt + Ht[tt + 1] * It + Ht[tt + 2] * Pt)
        }
        let At = .6 - Zt * Zt - Lt * Lt - Ft * Ft;
        if (At < 0) Qt = 0;
        else {
          const tt = 3 * Ot[kt + 1 + qt[Gt + 1 + qt[zt + 1]]];
          At *= At, Qt = At * At * (Ht[tt] * Zt + Ht[tt + 1] * Lt + Ht[tt + 2] * Ft)
        }
        return 32 * (dt + jt + Xt + Qt)
      }
      noise4D(tt, et, Vt, Ot) {
        const qt = this.perm;
        let Dt, mt, Ht, Qt, lt;
        const Et = (tt + et + Vt + Ot) * dt,
          ft = Math.floor(tt + Et),
          wt = Math.floor(et + Et),
          yt = Math.floor(Vt + Et),
          Nt = Math.floor(Ot + Et),
          Mt = (ft + wt + yt + Nt) * jt,
          bt = tt - (ft - Mt),
          Jt = et - (wt - Mt),
          Ct = Vt - (yt - Mt),
          ut = Ot - (Nt - Mt);
        let Kt = 0,
          ht = 0,
          vt = 0,
          Wt = 0;
        bt > Jt ? Kt++ : ht++, bt > Ct ? Kt++ : vt++, bt > ut ? Kt++ : Wt++, Jt > Ct ? ht++ : vt++, Jt > ut ? ht++ : Wt++, Ct > ut ? vt++ : Wt++;
        const St = Kt >= 3 ? 1 : 0,
          ct = ht >= 3 ? 1 : 0,
          Rt = vt >= 3 ? 1 : 0,
          It = Wt >= 3 ? 1 : 0,
          Pt = Kt >= 2 ? 1 : 0,
          Zt = ht >= 2 ? 1 : 0,
          Lt = vt >= 2 ? 1 : 0,
          Ft = Wt >= 2 ? 1 : 0,
          kt = Kt >= 1 ? 1 : 0,
          Gt = ht >= 1 ? 1 : 0,
          zt = vt >= 1 ? 1 : 0,
          ot = Wt >= 1 ? 1 : 0,
          rt = bt - St + jt,
          Ut = Jt - ct + jt,
          At = Ct - Rt + jt,
          it = ut - It + jt,
          Yt = bt - Pt + 2 * jt,
          Bt = Jt - Zt + 2 * jt,
          pt = Ct - Lt + 2 * jt,
          xt = ut - Ft + 2 * jt,
          Tt = bt - kt + 3 * jt,
          gt = Jt - Gt + 3 * jt,
          st = Ct - zt + 3 * jt,
          nt = ut - ot + 3 * jt,
          te = bt - 1 + 4 * jt,
          ee = Jt - 1 + 4 * jt,
          Ve = Ct - 1 + 4 * jt,
          Oe = ut - 1 + 4 * jt,
          qe = 255 & ft,
          De = 255 & wt,
          me = 255 & yt,
          de = 255 & Nt;
        let je = .6 - bt * bt - Jt * Jt - Ct * Ct - ut * ut;
        if (je < 0) Dt = 0;
        else {
          const tt = qt[qe + qt[De + qt[me + qt[de]]]] % 32 * 4;
          je *= je, Dt = je * je * (Xt[tt] * bt + Xt[tt + 1] * Jt + Xt[tt + 2] * Ct + Xt[tt + 3] * ut)
        }
        let He = .6 - rt * rt - Ut * Ut - At * At - it * it;
        if (He < 0) mt = 0;
        else {
          const tt = qt[qe + St + qt[De + ct + qt[me + Rt + qt[de + It]]]] % 32 * 4;
          He *= He, mt = He * He * (Xt[tt] * rt + Xt[tt + 1] * Ut + Xt[tt + 2] * At + Xt[tt + 3] * it)
        }
        let Xe = .6 - Yt * Yt - Bt * Bt - pt * pt - xt * xt;
        if (Xe < 0) Ht = 0;
        else {
          const tt = qt[qe + Pt + qt[De + Zt + qt[me + Lt + qt[de + Ft]]]] % 32 * 4;
          Xe *= Xe, Ht = Xe * Xe * (Xt[tt] * Yt + Xt[tt + 1] * Bt + Xt[tt + 2] * pt + Xt[tt + 3] * xt)
        }
        let Qe = .6 - Tt * Tt - gt * gt - st * st - nt * nt;
        if (Qe < 0) Qt = 0;
        else {
          const tt = qt[qe + kt + qt[De + Gt + qt[me + zt + qt[de + ot]]]] % 32 * 4;
          Qe *= Qe, Qt = Qe * Qe * (Xt[tt] * Tt + Xt[tt + 1] * gt + Xt[tt + 2] * st + Xt[tt + 3] * nt)
        }
        let le = .6 - te * te - ee * ee - Ve * Ve - Oe * Oe;
        if (le < 0) lt = 0;
        else {
          const tt = qt[qe + 1 + qt[De + 1 + qt[me + 1 + qt[de + 1]]]] % 32 * 4;
          le *= le, lt = le * le * (Xt[tt] * te + Xt[tt + 1] * ee + Xt[tt + 2] * Ve + Xt[tt + 3] * Oe)
        }
        return 27 * (Dt + mt + Ht + Qt + lt)
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);
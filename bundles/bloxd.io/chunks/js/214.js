/*! For license information please see x17cru.214.e259c26d.chunk.js.LICENSE.txt */
export const id = 214;
export const ids = [214];
export const modules = {
  39678: (dd, Jd, kd) => {
    dd.exports = Nd;
    var pd = kd(325);

    function Nd(dd, Jd) {
      if (!(this instanceof Nd)) return new Nd(dd, Jd);
      var kd = pd.create();
      pd.add(kd, dd, Jd), this.base = pd.min(pd.create(), dd, kd), this.vec = pd.clone(Jd), this.max = pd.max(pd.create(), dd, kd), this.mag = pd.length(this.vec)
    }
    var Wd = Nd.prototype;
    Wd.width = function() {
      return this.vec[0]
    }, Wd.height = function() {
      return this.vec[1]
    }, Wd.depth = function() {
      return this.vec[2]
    }, Wd.x0 = function() {
      return this.base[0]
    }, Wd.y0 = function() {
      return this.base[1]
    }, Wd.z0 = function() {
      return this.base[2]
    }, Wd.x1 = function() {
      return this.max[0]
    }, Wd.y1 = function() {
      return this.max[1]
    }, Wd.z1 = function() {
      return this.max[2]
    }, Wd.translate = function(dd) {
      return pd.add(this.max, this.max, dd), pd.add(this.base, this.base, dd), this
    }, Wd.setPosition = function(dd) {
      return pd.add(this.max, dd, this.vec), pd.copy(this.base, dd), this
    }, Wd.expand = function(dd) {
      var Jd = pd.create(),
        kd = pd.create();
      return pd.max(Jd, dd.max, this.max), pd.min(kd, dd.base, this.base), pd.subtract(Jd, Jd, kd), new Nd(kd, Jd)
    }, Wd.intersects = function(dd) {
      return !(dd.base[0] > this.max[0]) && (!(dd.base[1] > this.max[1]) && (!(dd.base[2] > this.max[2]) && (!(dd.max[0] < this.base[0]) && (!(dd.max[1] < this.base[1]) && !(dd.max[2] < this.base[2])))))
    }, Wd.touches = function(dd) {
      var Jd = this.union(dd);
      return null !== Jd && (0 == Jd.width() || 0 == Jd.height() || 0 == Jd.depth())
    }, Wd.union = function(dd) {
      if (!this.intersects(dd)) return null;
      var Jd = Math.max(dd.base[0], this.base[0]),
        kd = Math.max(dd.base[1], this.base[1]),
        pd = Math.max(dd.base[2], this.base[2]);
      return new Nd([Jd, kd, pd], [Math.min(dd.max[0], this.max[0]) - Jd, Math.min(dd.max[1], this.max[1]) - kd, Math.min(dd.max[2], this.max[2]) - pd])
    }
  },
  39675: dd => {
    dd.exports = function(dd, Jd, kd, pd, Nd, Wd) {
      var Pd = +Jd[0],
        Zd = +Jd[1],
        gd = +Jd[2],
        Cd = +kd[0],
        Kd = +kd[1],
        od = +kd[2],
        ld = Math.sqrt(Cd * Cd + Kd * Kd + od * od);
      if (0 === ld) throw new Error("Can't raycast along a zero vector");
      return function(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd) {
        for (var Kd = 0, od = Math.floor, ld = 0 | od(Jd), Qd = 0 | od(kd), Ld = 0 | od(pd), Od = Nd > 0 ? 1 : -1, ed = Wd > 0 ? 1 : -1, Rd = Pd > 0 ? 1 : -1, Id = Math.abs(1 / Nd), Gd = Math.abs(1 / Wd), vd = Math.abs(1 / Pd), xd = Id < 1 / 0 ? Id * (Od > 0 ? ld + 1 - Jd : Jd - ld) : 1 / 0, qd = Gd < 1 / 0 ? Gd * (ed > 0 ? Qd + 1 - kd : kd - Qd) : 1 / 0, Bd = vd < 1 / 0 ? vd * (Rd > 0 ? Ld + 1 - pd : pd - Ld) : 1 / 0, sd = -1; Kd <= Zd;) {
          var ad = dd(ld, Qd, Ld);
          if (ad) return gd && (gd[0] = Jd + Kd * Nd, gd[1] = kd + Kd * Wd, gd[2] = pd + Kd * Pd), Cd && (Cd[0] = Cd[1] = Cd[2] = 0, 0 === sd && (Cd[0] = -Od), 1 === sd && (Cd[1] = -ed), 2 === sd && (Cd[2] = -Rd)), ad;
          xd < qd ? xd < Bd ? (ld += Od, Kd = xd, xd += Id, sd = 0) : (Ld += Rd, Kd = Bd, Bd += vd, sd = 2) : qd < Bd ? (Qd += ed, Kd = qd, qd += Gd, sd = 1) : (Ld += Rd, Kd = Bd, Bd += vd, sd = 2)
        }
        return gd && (gd[0] = Jd + Kd * Nd, gd[1] = kd + Kd * Wd, gd[2] = pd + Kd * Pd), Cd && (Cd[0] = Cd[1] = Cd[2] = 0), 0
      }(dd, Pd, Zd, gd, Cd /= ld, Kd /= ld, od /= ld, pd = "undefined" === typeof pd ? 64 : +pd, Nd, Wd)
    }
  },
  39254: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Zd,
      d: () => Wd
    });
    var pd = kd(3946);
    let Nd = null;

    function Wd(dd) {
      return null !== Nd && dd === Nd
    }

    function Pd() {
      this.Qr = !1, this.stopPropagation = !1, this.Vr = !1, this.disabled = !1
    }
    class Zd {
      constructor(dd, Jd) {
        this.version = "0.7.0";
        var kd = Object.assign({}, new Pd, Jd || {});
        this.element = dd || document, this.Qr = !!kd.Qr, this.stopPropagation = !!kd.stopPropagation, this.Vr = !!kd.Vr, this.disabled = !!kd.disabled, this.filterEvents = (dd, Jd) => !0, this.ignoreEvent = dd => !1, this.down = new pd.EventEmitter, this.up = new pd.EventEmitter, this.state = {}, this.ku = {
          dx: 0,
          dy: 0,
          xJd: 0,
          qJd: 0,
          BJd: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Cd(this) : document.addEventListener("DOMContentLoaded", (dd => {
          Cd(this)
        }), {
          once: !0
        })
      }
      bind(dd) {
        for (var Jd = arguments.length, kd = new Array(Jd > 1 ? Jd - 1 : 0), pd = 1; pd < Jd; pd++) kd[pd - 1] = arguments[pd];
        kd.forEach((Jd => {
          var kd = this._keyBindmap[Jd] || [];
          kd.includes(dd) || (kd.push(dd), this._keyBindmap[Jd] = kd)
        })), this.state[dd] = !!this.state[dd], this.pressCount[dd] = this.pressCount[dd] || 0, this.releaseCount[dd] = this.releaseCount[dd] || 0
      }
      unbind(dd) {
        for (var Jd in this._keyBindmap) {
          var kd = this._keyBindmap[Jd],
            pd = kd.indexOf(dd);
          pd > -1 && kd.splice(pd, 1)
        }
      }
      getBindings() {
        var dd = {};
        for (var Jd in this._keyBindmap) {
          this._keyBindmap[Jd].forEach((kd => {
            dd[kd] = dd[kd] || [], dd[kd].push(Jd)
          }))
        }
        return dd
      }
      Do() {
        gd(this.ku), gd(this.pressCount), gd(this.releaseCount)
      }
    }

    function gd(dd) {
      for (var Jd in dd) dd[Jd] = 0
    }

    function Cd(dd) {
      window.addEventListener("keydown", ed.bind(null, dd, !0), !1), window.addEventListener("keyup", ed.bind(null, dd, !1), !1);
      var Jd = {
        passive: !0
      };
      dd.element.addEventListener("touchstart", Qd.bind(void 0, dd), {
        passive: !1
      }), dd.element.addEventListener("touchend", Od.bind(void 0, dd), Jd), dd.element.addEventListener("mousedown", Rd.bind(null, dd, !0), Jd), window.document.addEventListener("mouseup", Rd.bind(null, dd, !1), Jd), dd.element.addEventListener("touchmove", Id.bind(null, dd), Jd), dd.element.addEventListener("mousemove", Id.bind(null, dd), Jd), window.PointerEvent, dd.element.addEventListener("wheel", Gd.bind(null, dd), Jd), dd.element.addEventListener("contextmenu", vd.bind(null, dd), !1), window.addEventListener("blur", Bd.bind(null, dd), !1)
    }
    var Kd = 0,
      od = 0,
      ld = null;

    function Qd(dd, Jd) {
      Jd.preventDefault(), Ld(Jd)
    }

    function Ld(dd) {
      let Jd = !1;
      for (let kd = 0; kd < dd.touches.length; ++kd)
        if (dd.touches[kd].identifier === ld) {
          Jd = !0;
          break
        } if (!Jd) {
        const Jd = dd.changedTouches[0];
        Kd = Jd.clientX, od = Jd.clientY, ld = Jd.identifier
      }
    }

    function Od(dd, Jd) {
      for (var kd = Jd.changedTouches, pd = 0; pd < kd.length; ++pd) kd[pd].identifier === ld && (ld = null)
    }

    function ed(dd, Jd, kd) {
      if (!dd.ignoreEvent(kd)) try {
        sd(dd, kd), Jd && kd.isTrusted && !kd.repeat && dd._keyStates[kd.code] && ad(dd, kd.code)
      } finally {
        Md(kd.code, Jd, dd, kd)
      }
    }

    function Rd(dd, Jd, kd) {
      if (!dd.ignoreEvent(kd)) try {
        sd(dd, kd)
      } finally {
        ! function(dd, Jd, kd) {
          if ("pointerId" in kd)
            if (Jd) {
              if (null !== dd._touches.currID) return;
              dd._touches.currID = kd.pointerId
            } else {
              if (dd._touches.currID !== kd.pointerId) return;
              dd._touches.currID = null
            } var pd = "button" in kd ? kd.button + 1 : 1;
          Md("Mouse" + pd, Jd, dd, kd)
        }(dd, Jd, kd)
      }
    }

    function Id(dd, Jd) {
      var kd = Jd.movementX || Jd.mozMovementX || 0,
        pd = Jd.movementY || Jd.mozMovementY || 0;
      if (Jd.touches && 0 === (kd | pd)) {
        var Nd = function(dd) {
          Ld(dd);
          for (let Jd = 0; Jd < dd.changedTouches.length; ++Jd)
            if (dd.changedTouches[Jd].identifier == ld) {
              const kd = dd.changedTouches[Jd],
                pd = [kd.clientX - Kd, kd.clientY - od];
              return Kd = kd.clientX, od = kd.clientY, pd
            } return console.error(`Did not find touch id ${ld}`), [0, 0]
        }(Jd);
        kd = Nd[0], pd = Nd[1]
      }
      dd.ku.dx += kd, dd.ku.dy += pd
    }

    function Gd(dd, Jd) {
      sd(dd, Jd);
      var kd = 1;
      switch (Jd.deltaMode) {
        case 0:
          kd = 1;
          break;
        case 1:
          kd = 12;
          break;
        case 2:
          kd = dd.element.clientHeight || window.innerHeight
      }
      dd.ku.xJd += (Jd.deltaX || 0) * kd, dd.ku.qJd += (Jd.deltaY || 0) * kd, dd.ku.BJd += (Jd.deltaZ || 0) * kd
    }

    function vd(dd, Jd) {
      if (!dd.Vr) return Jd.preventDefault(), !1
    }
    var xd = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function qd(dd, Jd) {
      return !!dd[xd[Jd]] || ("AltRight" === Jd || "ControlLeft" === Jd) && "function" === typeof dd.getModifierState && !0 === dd.getModifierState("AltGraph")
    }

    function Bd(dd, Jd) {
      for (var kd in dd._modifiersHeldThroughBlur = {}, xd) dd._keyStates[kd] && (dd._modifiersHeldThroughBlur[kd] = !0);
      Jd && Jd.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (dd) {
          return !0
        }
      }() && (clearTimeout(dd._blurRelease), dd._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var Jd in dd._modifiersHeldThroughBlur = {}, dd._keyStates) dd._keyStates[Jd] && !/^Mouse\d/.test(Jd) && ad(dd, Jd)
      }), 0))
    }

    function sd(dd, Jd) {
      var kd = dd._modifiersHeldThroughBlur;
      if (kd && Jd.isTrusted && document.hasFocus())
        for (var pd in kd) delete kd[pd], dd._keyStates[pd] && pd !== Jd.code && (qd(Jd, pd) || ad(dd, pd))
    }

    function ad(dd, Jd) {
      const kd = {
          code: Jd,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        pd = Nd;
      Nd = kd;
      try {
        Md(Jd, !1, dd, kd)
      } finally {
        Nd = pd
      }
    }

    function Md(dd, Jd, kd, pd) {
      var Nd = kd._keyBindmap[dd];
      Nd && (Fd(kd._keyStates[dd], Jd) && (kd._keyStates[dd] = Jd, Nd.forEach((dd => {
        (!kd.filterEvents || kd.filterEvents(pd, dd)) && function(dd, Jd, kd, pd) {
          var Nd = Jd ? kd.pressCount : kd.releaseCount;
          Nd[dd] = (Nd[dd] || 0) + 1;
          var Wd = kd._bindPressCount[dd] || 0;
          (Wd += Jd ? 1 : -1) < 0 && (Wd = 0);
          kd._bindPressCount[dd] = Wd;
          var Pd = kd.state[dd];
          if (Fd(Pd, Wd)) {
            kd.state[dd] = Wd > 0;
            var Zd = Jd ? kd.down : kd.up;
            kd.disabled || Zd.emit(dd, pd)
          }
        }(dd, Jd, kd, pd)
      }))), "button" in pd || (kd.Qr && !pd.defaultPrevented && pd.preventDefault(), kd.stopPropagation && pd.stopPropagation()))
    }

    function Fd(dd, Jd) {
      return dd ? !Jd : Jd
    }
  },
  36706: (dd, Jd) => {
    function kd(dd) {
      if (dd && "object" === typeof dd) {
        var Jd = dd.which || dd.keyCode || dd.charCode;
        Jd && (dd = Jd)
      }
      if ("number" === typeof dd) return Pd[dd];
      var kd, Wd = String(dd);
      return (kd = pd[Wd.toLowerCase()]) ? kd : (kd = Nd[Wd.toLowerCase()]) || (1 === Wd.length ? Wd.charCodeAt(0) : void 0)
    }
    kd.isEventKey = function(dd, Jd) {
      if (dd && "object" === typeof dd) {
        var kd = dd.which || dd.keyCode || dd.charCode;
        if (null === kd || void 0 === kd) return !1;
        if ("string" === typeof Jd) {
          var Wd;
          if (Wd = pd[Jd.toLowerCase()]) return Wd === kd;
          if (Wd = Nd[Jd.toLowerCase()]) return Wd === kd
        } else if ("number" === typeof Jd) return Jd === kd;
        return !1
      }
    };
    var pd = (Jd = dd.exports = kd).code = Jd.codes = {
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
      Nd = Jd.aliases = {
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
    for (Wd = 97; Wd < 123; Wd++) pd[String.fromCharCode(Wd)] = Wd - 32;
    for (var Wd = 48; Wd < 58; Wd++) pd[Wd - 48] = Wd;
    for (Wd = 1; Wd < 13; Wd++) pd["f" + Wd] = Wd + 111;
    for (Wd = 0; Wd < 10; Wd++) pd["numpad " + Wd] = Wd + 96;
    var Pd = Jd.names = Jd.title = {};
    for (Wd in pd) Pd[pd[Wd]] = Wd;
    for (var Zd in Nd) pd[Zd] = Nd[Zd]
  },
  39665: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd
    });
    class pd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.Iy = !1, this.Gy = !1, this.AY = 30, this.rU = 0, this.vy = 100, this.ve = !1, this.fullscreen = !1, this.mI = function(dd) {}, this.Fy = function(dd, Jd, kd) {}, this.Uy = function() {}, this.xI = function() {}, this.Sy = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(dd) {}, this._data = new Nd(Jd),
          function(dd) {
            if ("loading" === document.readyState) {
              var Jd = () => {
                document.removeEventListener("readystatechange", Jd), dd()
              };
              document.addEventListener("readystatechange", Jd)
            } else setTimeout(dd, 0)
          }((() => {
            ! function(dd) {
              var Jd = dd._data,
                kd = Jd.nowObject.now();
              Jd.lastTickStarted = kd, Jd.lastFrameStarted = kd, Jd.lastRenderStarted = kd, Jd.frameCB = () => function(dd) {
                var Jd = dd._data;
                requestAnimationFrame(Jd.frameCB), Zd(dd);
                var kd = Jd.nowObject.now(),
                  pd = kd - Jd.lastFrameStarted;
                if (Jd.lastFrameStarted = kd, dd.rU > 0) {
                  Jd.renderAccum += pd;
                  var Nd = 1e3 / dd.rU;
                  if (Jd.renderAccum < Nd) return;
                  Jd.renderAccum -= Nd, Jd.renderAccum > Nd && (Jd.renderAccum = Nd)
                }
                var Wd = kd - Jd.lastRenderStarted;
                Jd.lastRenderStarted = kd;
                var Pd = 1e3 / dd.AY,
                  gd = (kd - Jd.lastTickStarted) / Pd;
                gd < 0 && (gd = 0);
                dd.Fy(Wd, gd, Pd), setTimeout(Zd, 0, dd, !0)
              }(dd), Jd.intervalCB = () => Zd(dd), requestAnimationFrame(Jd.frameCB), Jd.pollTime > 0 && (Jd.intervalID = setInterval(Jd.intervalCB, Math.max(Jd.pollTime, 1e3 / dd.AY / 2)))
            }(this),
            function(dd, Jd) {
              if (!Jd) return;
              var kd = !1,
                pd = !1,
                Nd = dd => {
                  if (!!dd !== (kd = Jd === document.pointerLockElement))
                    if (dd) {
                      var pd = Jd.requestPointerLock();
                      pd && pd.catch && pd.catch((dd => {}))
                    } else document.exitPointerLock()
                },
                Wd = dd => {
                  !!dd !== (pd = Jd === document.fullscreenElement) && (dd ? Jd.requestFullscreen ? Jd.requestFullscreen() : Jd.webkitRequestFullscreen && Jd.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (pd => {
                kd = Jd === document.pointerLockElement, dd.Sy(kd)
              })), document.addEventListener("fullscreenchange", (kd => {
                pd = Jd === document.fullscreenElement, dd.onFullscreenChanged(pd)
              })), document.addEventListener("pointerlockerror", (pd => {
                kd = Jd === document.pointerLockElement, dd.onPointerLockError(pd)
              })), Object.defineProperty(dd, "ve", {
                get: () => kd,
                set: Nd
              }), Object.defineProperty(dd, "fullscreen", {
                get: () => pd,
                set: Wd
              }), Jd.addEventListener("click", (Jd => {
                dd.Iy && Nd(!0), dd.Gy && Wd(!0)
              }));
              var Pd = () => dd.xI();
              if (window.ResizeObserver) {
                new ResizeObserver(Pd).observe(Jd)
              } else window.addEventListener("resize", Pd)
            }(this, dd), this.Uy()
          }))
      }
    }

    function Nd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = dd, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var Wd = 3,
      Pd = 20;

    function Zd(dd) {
      for (var Jd = dd._data, kd = 1e3 / dd.AY, pd = Jd.nowObject.now() + Pd, Nd = 0; Jd.nowObject.now() >= Jd.lastTickStarted + kd && Jd.nowObject.now() < pd && ++Nd <= Wd;) dd.mI(kd), Jd.lastTickStarted += kd;
      var Zd = 5 * (kd + 5),
        gd = Jd.nowObject.now();
      if (gd - Jd.lastTickStarted > Zd)
        for (; gd >= Jd.lastTickStarted + kd;) Jd.lastTickStarted += kd
    }
  },
  36870: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd
    });
    var pd = kd(56);
    const Nd = pd.useLayoutEffect;
    const Wd = function(dd) {
      var Jd = (0, pd.useRef)(dd);
      return Nd((function() {
        Jd.current = dd
      })), Jd
    };
    var Pd = function(dd) {
      var Jd = Wd(dd);
      (0, pd.useEffect)((function() {
        var dd = function(dd) {
          var kd;
          if (null != Jd.current && (kd = Jd.current(dd)), dd.defaultPrevented && (dd.returnValue = ""), "string" === typeof kd) return dd.returnValue = kd, kd
        };
        return window.addEventListener("beforeunload", dd),
          function() {
            window.removeEventListener("beforeunload", dd)
          }
      }), [])
    }
  },
  36760: dd => {
    var Jd, kd = "undefined" !== typeof window ? window.navigator.userAgent : "",
      pd = /OS X/.test(kd),
      Nd = /Opera/.test(kd),
      Wd = !/like Gecko/.test(kd) && !Nd,
      Pd = dd.exports = {
        0: pd ? "<menu>" : "<UNK>",
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
        93: pd ? "<meta>" : "<menu>",
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
        173: pd && Wd ? "-" : "<volume-mute>",
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
        231: Nd ? "`" : "<unicode>",
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
    for (Jd = 58; Jd < 65; ++Jd) Pd[Jd] = String.fromCharCode(Jd);
    for (Jd = 48; Jd < 58; ++Jd) Pd[Jd] = Jd - 48 + "";
    for (Jd = 65; Jd < 91; ++Jd) Pd[Jd] = String.fromCharCode(Jd);
    for (Jd = 96; Jd < 106; ++Jd) Pd[Jd] = "<num-" + (Jd - 96) + ">";
    for (Jd = 112; Jd < 136; ++Jd) Pd[Jd] = "F" + (Jd - 111)
  },
  39188: (dd, Jd, kd) => {
    function pd(dd, Jd, kd, pd, Nd) {
      var Wd = {};
      return Object.keys(pd).forEach((function(dd) {
        Wd[dd] = pd[dd]
      })), Wd.enumerable = !!Wd.enumerable, Wd.configurable = !!Wd.configurable, ("value" in Wd || Wd.initializer) && (Wd.writable = !0), Wd = kd.slice().reverse().reduce((function(kd, pd) {
        return pd(dd, Jd, kd) || kd
      }), Wd), Nd && void 0 !== Wd.initializer && (Wd.value = Wd.initializer ? Wd.initializer.call(Nd) : void 0, Wd.initializer = void 0), void 0 === Wd.initializer && (Object.defineProperty(dd, Jd, Wd), Wd = null), Wd
    }
    kd.d(Jd, {
      d: () => pd
    })
  },
  39184: (dd, Jd, kd) => {
    function pd(dd, Jd, kd, pd) {
      kd && Object.defineProperty(dd, Jd, {
        enumerable: kd.enumerable,
        configurable: kd.configurable,
        writable: kd.writable,
        value: kd.initializer ? kd.initializer.call(pd) : void 0
      })
    }
    kd.d(Jd, {
      b: () => pd
    })
  },
  38806: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Wd
    });
    var pd = kd(38812);
    const Nd = (dd, Jd, kd) => dd ? dd.getClassName && "Mesh" === dd.getClassName() ? null : !dd.getClassName || "SubMesh" !== dd.getClassName() && "PhysicsBody" !== dd.getClassName() ? dd.clone ? dd.clone() : Array.isArray(dd) ? dd.slice() : kd && "object" === typeof dd ? {
      ...dd
    } : null : dd.clone(Jd) : null;
    class Wd {
      static DeepCopy(dd, Jd, kd, Wd) {
        let Pd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Zd = function(dd) {
          const Jd = [];
          do {
            const kd = Object.getOwnPropertyNames(dd);
            for (const dd of kd) - 1 === Jd.indexOf(dd) && Jd.push(dd)
          } while (dd = Object.getPrototypeOf(dd));
          return Jd
        }(dd);
        for (const Cd of Zd) {
          if ("_" === Cd[0] && (!Wd || -1 === Wd.indexOf(Cd))) continue;
          if (Cd.endsWith("Observable")) continue;
          if (kd && -1 !== kd.indexOf(Cd)) continue;
          const Zd = dd[Cd],
            Kd = typeof Zd;
          if ("function" !== Kd) try {
            if ("object" === Kd)
              if (Zd instanceof Uint8Array) Jd[Cd] = Uint8Array.from(Zd);
              else if (Zd instanceof Array) {
              if (Jd[Cd] = [], Zd.length > 0)
                if ("object" == typeof Zd[0])
                  for (let dd = 0; dd < Zd.length; dd++) {
                    const kd = Nd(Zd[dd], Jd, Pd); - 1 === Jd[Cd].indexOf(kd) && Jd[Cd].push(kd)
                  } else Jd[Cd] = Zd.slice(0)
            } else Jd[Cd] = Nd(Zd, Jd, Pd);
            else Jd[Cd] = Zd
          } catch (gd) {
            pd.c.Warn(gd.message)
          }
        }
      }
    }
  },
  38835: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd,
      f: () => Wd,
      h: () => Pd,
      k: () => Zd
    });
    var pd = kd(37443);
    class Nd {
      constructor(dd, Jd, kd) {
        this.gradient = dd, this.color1 = Jd, this.color2 = kd
      }
      getColorToRef(dd) {
        this.color2 ? pd.g.LerpToRef(this.color1, this.color2, Math.random(), dd) : dd.Fs(this.color1)
      }
    }
    class Wd {
      constructor(dd, Jd) {
        this.gradient = dd, this.color = Jd
      }
    }
    class Pd {
      constructor(dd, Jd, kd) {
        this.gradient = dd, this.factor1 = Jd, this.factor2 = kd
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class Zd {
      static GetCurrentGradient(dd, Jd, kd) {
        if (Jd[0].gradient > dd) return void kd(Jd[0], Jd[0], 1);
        for (let Nd = 0; Nd < Jd.length - 1; Nd++) {
          const pd = Jd[Nd],
            Wd = Jd[Nd + 1];
          if (dd >= pd.gradient && dd <= Wd.gradient) {
            return void kd(pd, Wd, (dd - pd.gradient) / (Wd.gradient - pd.gradient))
          }
        }
        const pd = Jd.length - 1;
        kd(Jd[pd], Jd[pd], 1)
      }
    }
  },
  38812: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd
    });
    class pd {
      static _CheckLimit(dd, Jd) {
        let kd = pd._LogLimitOutputs[dd];
        return kd ? kd.current++ : (kd = {
          limit: Jd,
          current: 1
        }, pd._LogLimitOutputs[dd] = kd), kd.current <= kd.limit
      }
      static _GenerateLimitMessage(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const kd = pd._LogLimitOutputs[dd];
        if (!kd || !pd.MessageLimitReached) return;
        const Nd = this._Levels[Jd];
        kd.current === kd.limit && pd[Nd.name](pd.MessageLimitReached.replace(/%LIMIT%/g, "" + kd.limit).replace(/%TYPE%/g, Nd.name ?? ""))
      }
      static _AddLogEntry(dd) {
        pd._LogCache = dd + pd._LogCache, pd.OnNewCacheEntry && pd.OnNewCacheEntry(dd)
      }
      static _FormatMessage(dd) {
        const Jd = dd => dd < 10 ? "0" + dd : "" + dd,
          kd = new Date;
        return "[" + Jd(kd.getHours()) + ":" + Jd(kd.getMinutes()) + ":" + Jd(kd.getSeconds()) + "]: " + dd
      }
      static _LogDisabled(dd, Jd) {}
      static _LogEnabled() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Jd = arguments.length > 1 ? arguments[1] : void 0,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        const Nd = Array.isArray(Jd) ? Jd[0] : Jd;
        if (void 0 !== kd && !pd._CheckLimit(Nd, kd)) return;
        const Wd = pd._FormatMessage(Nd),
          Pd = this._Levels[dd],
          Zd = Array.isArray(Jd) ? Jd.slice(1) : [];
        Pd.logFunc && Pd.logFunc("BJS - " + Wd, ...Zd);
        const gd = `<div style='color:${Pd.color}'>${Wd}</div><br>`;
        pd._AddLogEntry(gd), pd._GenerateLimitMessage(Nd, dd)
      }
      static get LogCache() {
        return pd._LogCache
      }
      static ClearLogCache() {
        pd._LogCache = "", pd._LogLimitOutputs = {}, pd.errorsCount = 0
      }
      static set LogLevels(dd) {
        pd.Log = pd._LogDisabled, pd.Warn = pd._LogDisabled, pd.Error = pd._LogDisabled;
        const Jd = [pd.MessageLogLevel, pd.WarningLogLevel, pd.ErrorLogLevel];
        for (const kd of Jd)
          if ((dd & kd) === kd) {
            const dd = this._Levels[kd];
            pd[dd.name] = pd._LogEnabled.bind(pd, kd)
          }
      }
    }
    pd.NoneLogLevel = 0, pd.MessageLogLevel = 1, pd.WarningLogLevel = 2, pd.ErrorLogLevel = 4, pd.AllLogLevel = 7, pd.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", pd._LogCache = "", pd._LogLimitOutputs = {}, pd._Levels = [{}, {
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
    }], pd.errorsCount = 0, pd.Log = pd._LogEnabled.bind(pd, pd.MessageLogLevel), pd.Warn = pd._LogEnabled.bind(pd, pd.WarningLogLevel), pd.Error = pd._LogEnabled.bind(pd, pd.ErrorLogLevel)
  },
  38844: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Pd
    });
    var pd = kd(37251),
      Nd = kd(37289),
      Wd = kd(38806);
    class Pd {
      constructor() {
        this.direction1 = new pd.n(0, 1, 0), this.direction2 = new pd.n(0, 1, 0), this.minEmitBox = new pd.n(-.5, -.5, -.5), this.maxEmitBox = new pd.n(.5, .5, .5)
      }
      startDirectionFunction(dd, Jd, kd, Wd) {
        const Pd = (0, Nd.RandomRange)(this.direction1.x, this.direction2.x),
          Zd = (0, Nd.RandomRange)(this.direction1.y, this.direction2.y),
          gd = (0, Nd.RandomRange)(this.direction1.z, this.direction2.z);
        if (Wd) return Jd.x = Pd, Jd.y = Zd, void(Jd.z = gd);
        pd.n.TransformNormalFromFloatsToRef(Pd, Zd, gd, dd, Jd)
      }
      startPositionFunction(dd, Jd, kd, Wd) {
        const Pd = (0, Nd.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          Zd = (0, Nd.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          gd = (0, Nd.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (Wd) return Jd.x = Pd, Jd.y = Zd, void(Jd.z = gd);
        pd.n.TransformCoordinatesFromFloatsToRef(Pd, Zd, gd, dd, Jd)
      }
      clone() {
        const dd = new Pd;
        return Wd.c.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        dd.setVector3("direction1", this.direction1), dd.setVector3("direction2", this.direction2), dd.setVector3("minEmitBox", this.minEmitBox), dd.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(dd) {
        dd.addUniform("direction1", 3), dd.addUniform("direction2", 3), dd.addUniform("minEmitBox", 3), dd.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const dd = {};
        return dd.type = this.getClassName(), dd.direction1 = this.direction1.spd(), dd.direction2 = this.direction2.spd(), dd.minEmitBox = this.minEmitBox.spd(), dd.maxEmitBox = this.maxEmitBox.spd(), dd
      }
      parse(dd) {
        pd.n.FromArrayToRef(dd.direction1, 0, this.direction1), pd.n.FromArrayToRef(dd.direction2, 0, this.direction2), pd.n.FromArrayToRef(dd.minEmitBox, 0, this.minEmitBox), pd.n.FromArrayToRef(dd.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38801: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Zd,
      d: () => Pd
    });
    var pd = kd(37251),
      Nd = kd(37289),
      Wd = kd(38806);
    class Pd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = dd, this.height = Jd, this.radiusRange = kd, this.directionRandomizer = Nd, this._tempVector = pd.n.Zero()
      }
      startDirectionFunction(dd, Jd, kd, Wd, Pd) {
        kd.position.subtractToRef(dd.getTranslation(), this._tempVector), this._tempVector.normalize(), pd.n.TransformNormalToRef(this._tempVector, Pd, this._tempVector);
        const Zd = (0, Nd.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let gd = Math.atan2(this._tempVector.x, this._tempVector.z);
        gd += (0, Nd.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = Zd, this._tempVector.x = Math.sin(gd), this._tempVector.z = Math.cos(gd), this._tempVector.normalize(), Wd ? Jd.Fs(this._tempVector) : pd.n.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, dd, Jd)
      }
      startPositionFunction(dd, Jd, kd, Wd) {
        const Pd = (0, Nd.RandomRange)(-this.height / 2, this.height / 2),
          Zd = (0, Nd.RandomRange)(0, 2 * Math.PI),
          gd = (0, Nd.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          Cd = Math.sqrt(gd) * this.radius,
          Kd = Cd * Math.cos(Zd),
          od = Cd * Math.sin(Zd);
        Wd ? Jd.kdd(Kd, Pd, od) : pd.n.TransformCoordinatesFromFloatsToRef(Kd, Pd, od, dd, Jd)
      }
      clone() {
        const dd = new Pd(this.radius, this.directionRandomizer);
        return Wd.c.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        dd.setFloat("radius", this.radius), dd.setFloat("height", this.height), dd.setFloat("radiusRange", this.radiusRange), dd.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(dd) {
        dd.addUniform("radius", 1), dd.addUniform("height", 1), dd.addUniform("radiusRange", 1), dd.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const dd = {};
        return dd.type = this.getClassName(), dd.radius = this.radius, dd.height = this.height, dd.radiusRange = this.radiusRange, dd.directionRandomizer = this.directionRandomizer, dd
      }
      parse(dd) {
        this.radius = dd.radius, this.height = dd.height, this.radiusRange = dd.radiusRange, this.directionRandomizer = dd.directionRandomizer
      }
    }
    class Zd extends Pd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new pd.n(0, 1, 0),
          Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new pd.n(0, 1, 0);
        super(dd, Jd, kd), this.direction1 = Nd, this.direction2 = Wd
      }
      startDirectionFunction(dd, Jd, kd, Wd) {
        const Pd = (0, Nd.RandomRange)(this.direction1.x, this.direction2.x),
          Zd = (0, Nd.RandomRange)(this.direction1.y, this.direction2.y),
          gd = (0, Nd.RandomRange)(this.direction1.z, this.direction2.z);
        Wd ? Jd.kdd(Pd, Zd, gd) : pd.n.TransformNormalFromFloatsToRef(Pd, Zd, gd, dd, Jd)
      }
      clone() {
        const dd = new Zd(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return Wd.c.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        dd.setFloat("radius", this.radius), dd.setFloat("height", this.height), dd.setFloat("radiusRange", this.radiusRange), dd.setVector3("direction1", this.direction1), dd.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(dd) {
        dd.addUniform("radius", 1), dd.addUniform("height", 1), dd.addUniform("radiusRange", 1), dd.addUniform("direction1", 3), dd.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const dd = super.serialize();
        return dd.direction1 = this.direction1.spd(), dd.direction2 = this.direction2.spd(), dd
      }
      parse(dd) {
        super.parse(dd), pd.n.FromArrayToRef(dd.direction1, 0, this.direction1), pd.n.FromArrayToRef(dd.direction2, 0, this.direction2)
      }
    }
  },
  38939: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => od
    });
    const pd = .5 * (Math.sqrt(3) - 1),
      Nd = (3 - Math.sqrt(3)) / 6,
      Wd = 1 / 3,
      Pd = 1 / 6,
      Zd = (Math.sqrt(5) - 1) / 4,
      gd = (5 - Math.sqrt(5)) / 20,
      Cd = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      Kd = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const od = class {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const Jd = "function" == typeof dd ? dd : function(dd) {
          let Jd = 0,
            kd = 0,
            pd = 0,
            Nd = 1;
          const Wd = function() {
            let dd = 4022871197;
            return function(Jd) {
              Jd = Jd.toString();
              for (let kd = 0; kd < Jd.length; kd++) {
                dd += Jd.charCodeAt(kd);
                let pd = .02519603282416938 * dd;
                dd = pd >>> 0, pd -= dd, pd *= dd, dd = pd >>> 0, pd -= dd, dd += 4294967296 * pd
              }
              return 2.3283064365386963e-10 * (dd >>> 0)
            }
          }();
          Jd = Wd(" "), kd = Wd(" "), pd = Wd(" "), Jd -= Wd(dd), Jd < 0 && (Jd += 1);
          kd -= Wd(dd), kd < 0 && (kd += 1);
          pd -= Wd(dd), pd < 0 && (pd += 1);
          return function() {
            const dd = 2091639 * Jd + 2.3283064365386963e-10 * Nd;
            return Jd = kd, kd = pd, pd = dd - (Nd = 0 | dd)
          }
        }(dd);
        this.p = function(dd) {
          const Jd = new Uint8Array(256);
          for (let kd = 0; kd < 256; kd++) Jd[kd] = kd;
          for (let kd = 0; kd < 255; kd++) {
            const pd = kd + ~~(dd() * (256 - kd)),
              Nd = Jd[kd];
            Jd[kd] = Jd[pd], Jd[pd] = Nd
          }
          return Jd
        }(Jd), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let kd = 0; kd < 512; kd++) this.perm[kd] = this.p[255 & kd], this.permMod12[kd] = this.perm[kd] % 12
      }
      noise2D(dd, Jd) {
        const kd = this.permMod12,
          Wd = this.perm;
        let Pd = 0,
          Zd = 0,
          gd = 0;
        const Kd = (dd + Jd) * pd,
          od = Math.floor(dd + Kd),
          ld = Math.floor(Jd + Kd),
          Qd = (od + ld) * Nd,
          Ld = dd - (od - Qd),
          Od = Jd - (ld - Qd);
        let ed, Rd;
        Ld > Od ? (ed = 1, Rd = 0) : (ed = 0, Rd = 1);
        const Id = Ld - ed + Nd,
          Gd = Od - Rd + Nd,
          vd = Ld - 1 + 2 * Nd,
          xd = Od - 1 + 2 * Nd,
          qd = 255 & od,
          Bd = 255 & ld;
        let sd = .5 - Ld * Ld - Od * Od;
        if (sd >= 0) {
          const dd = 3 * kd[qd + Wd[Bd]];
          sd *= sd, Pd = sd * sd * (Cd[dd] * Ld + Cd[dd + 1] * Od)
        }
        let ad = .5 - Id * Id - Gd * Gd;
        if (ad >= 0) {
          const dd = 3 * kd[qd + ed + Wd[Bd + Rd]];
          ad *= ad, Zd = ad * ad * (Cd[dd] * Id + Cd[dd + 1] * Gd)
        }
        let Md = .5 - vd * vd - xd * xd;
        if (Md >= 0) {
          const dd = 3 * kd[qd + 1 + Wd[Bd + 1]];
          Md *= Md, gd = Md * Md * (Cd[dd] * vd + Cd[dd + 1] * xd)
        }
        return 70 * (Pd + Zd + gd)
      }
      noise3D(dd, Jd, kd) {
        const pd = this.permMod12,
          Nd = this.perm;
        let Zd, gd, Kd, od;
        const ld = (dd + Jd + kd) * Wd,
          Qd = Math.floor(dd + ld),
          Ld = Math.floor(Jd + ld),
          Od = Math.floor(kd + ld),
          ed = (Qd + Ld + Od) * Pd,
          Rd = dd - (Qd - ed),
          Id = Jd - (Ld - ed),
          Gd = kd - (Od - ed);
        let vd, xd, qd, Bd, sd, ad;
        Rd >= Id ? Id >= Gd ? (vd = 1, xd = 0, qd = 0, Bd = 1, sd = 1, ad = 0) : Rd >= Gd ? (vd = 1, xd = 0, qd = 0, Bd = 1, sd = 0, ad = 1) : (vd = 0, xd = 0, qd = 1, Bd = 1, sd = 0, ad = 1) : Id < Gd ? (vd = 0, xd = 0, qd = 1, Bd = 0, sd = 1, ad = 1) : Rd < Gd ? (vd = 0, xd = 1, qd = 0, Bd = 0, sd = 1, ad = 1) : (vd = 0, xd = 1, qd = 0, Bd = 1, sd = 1, ad = 0);
        const Md = Rd - vd + Pd,
          Fd = Id - xd + Pd,
          Yd = Gd - qd + Pd,
          md = Rd - Bd + 2 * Pd,
          bd = Id - sd + 2 * Pd,
          Sd = Gd - ad + 2 * Pd,
          jd = Rd - 1 + .5,
          Xd = Id - 1 + .5,
          fd = Gd - 1 + .5,
          nd = 255 & Qd,
          Ud = 255 & Ld,
          yd = 255 & Od;
        let Dd = .6 - Rd * Rd - Id * Id - Gd * Gd;
        if (Dd < 0) Zd = 0;
        else {
          const dd = 3 * pd[nd + Nd[Ud + Nd[yd]]];
          Dd *= Dd, Zd = Dd * Dd * (Cd[dd] * Rd + Cd[dd + 1] * Id + Cd[dd + 2] * Gd)
        }
        let Td = .6 - Md * Md - Fd * Fd - Yd * Yd;
        if (Td < 0) gd = 0;
        else {
          const dd = 3 * pd[nd + vd + Nd[Ud + xd + Nd[yd + qd]]];
          Td *= Td, gd = Td * Td * (Cd[dd] * Md + Cd[dd + 1] * Fd + Cd[dd + 2] * Yd)
        }
        let Ed = .6 - md * md - bd * bd - Sd * Sd;
        if (Ed < 0) Kd = 0;
        else {
          const dd = 3 * pd[nd + Bd + Nd[Ud + sd + Nd[yd + ad]]];
          Ed *= Ed, Kd = Ed * Ed * (Cd[dd] * md + Cd[dd + 1] * bd + Cd[dd + 2] * Sd)
        }
        let cd = .6 - jd * jd - Xd * Xd - fd * fd;
        if (cd < 0) od = 0;
        else {
          const dd = 3 * pd[nd + 1 + Nd[Ud + 1 + Nd[yd + 1]]];
          cd *= cd, od = cd * cd * (Cd[dd] * jd + Cd[dd + 1] * Xd + Cd[dd + 2] * fd)
        }
        return 32 * (Zd + gd + Kd + od)
      }
      noise4D(dd, Jd, kd, pd) {
        const Nd = this.perm;
        let Wd, Pd, Cd, od, ld;
        const Qd = (dd + Jd + kd + pd) * Zd,
          Ld = Math.floor(dd + Qd),
          Od = Math.floor(Jd + Qd),
          ed = Math.floor(kd + Qd),
          Rd = Math.floor(pd + Qd),
          Id = (Ld + Od + ed + Rd) * gd,
          Gd = dd - (Ld - Id),
          vd = Jd - (Od - Id),
          xd = kd - (ed - Id),
          qd = pd - (Rd - Id);
        let Bd = 0,
          sd = 0,
          ad = 0,
          Md = 0;
        Gd > vd ? Bd++ : sd++, Gd > xd ? Bd++ : ad++, Gd > qd ? Bd++ : Md++, vd > xd ? sd++ : ad++, vd > qd ? sd++ : Md++, xd > qd ? ad++ : Md++;
        const Fd = Bd >= 3 ? 1 : 0,
          Yd = sd >= 3 ? 1 : 0,
          md = ad >= 3 ? 1 : 0,
          bd = Md >= 3 ? 1 : 0,
          Sd = Bd >= 2 ? 1 : 0,
          jd = sd >= 2 ? 1 : 0,
          Xd = ad >= 2 ? 1 : 0,
          fd = Md >= 2 ? 1 : 0,
          nd = Bd >= 1 ? 1 : 0,
          Ud = sd >= 1 ? 1 : 0,
          yd = ad >= 1 ? 1 : 0,
          Dd = Md >= 1 ? 1 : 0,
          Td = Gd - Fd + gd,
          Ed = vd - Yd + gd,
          cd = xd - md + gd,
          hd = qd - bd + gd,
          rd = Gd - Sd + 2 * gd,
          ud = vd - jd + 2 * gd,
          td = xd - Xd + 2 * gd,
          Vd = qd - fd + 2 * gd,
          zd = Gd - nd + 3 * gd,
          Hd = vd - Ud + 3 * gd,
          wd = xd - yd + 3 * gd,
          Ad = qd - Dd + 3 * gd,
          dJ = Gd - 1 + 4 * gd,
          JJ = vd - 1 + 4 * gd,
          kJ = xd - 1 + 4 * gd,
          pJ = qd - 1 + 4 * gd,
          NJ = 255 & Ld,
          WJ = 255 & Od,
          PJ = 255 & ed,
          ZJ = 255 & Rd;
        let gJ = .6 - Gd * Gd - vd * vd - xd * xd - qd * qd;
        if (gJ < 0) Wd = 0;
        else {
          const dd = Nd[NJ + Nd[WJ + Nd[PJ + Nd[ZJ]]]] % 32 * 4;
          gJ *= gJ, Wd = gJ * gJ * (Kd[dd] * Gd + Kd[dd + 1] * vd + Kd[dd + 2] * xd + Kd[dd + 3] * qd)
        }
        let CJ = .6 - Td * Td - Ed * Ed - cd * cd - hd * hd;
        if (CJ < 0) Pd = 0;
        else {
          const dd = Nd[NJ + Fd + Nd[WJ + Yd + Nd[PJ + md + Nd[ZJ + bd]]]] % 32 * 4;
          CJ *= CJ, Pd = CJ * CJ * (Kd[dd] * Td + Kd[dd + 1] * Ed + Kd[dd + 2] * cd + Kd[dd + 3] * hd)
        }
        let KJ = .6 - rd * rd - ud * ud - td * td - Vd * Vd;
        if (KJ < 0) Cd = 0;
        else {
          const dd = Nd[NJ + Sd + Nd[WJ + jd + Nd[PJ + Xd + Nd[ZJ + fd]]]] % 32 * 4;
          KJ *= KJ, Cd = KJ * KJ * (Kd[dd] * rd + Kd[dd + 1] * ud + Kd[dd + 2] * td + Kd[dd + 3] * Vd)
        }
        let oJ = .6 - zd * zd - Hd * Hd - wd * wd - Ad * Ad;
        if (oJ < 0) od = 0;
        else {
          const dd = Nd[NJ + nd + Nd[WJ + Ud + Nd[PJ + yd + Nd[ZJ + Dd]]]] % 32 * 4;
          oJ *= oJ, od = oJ * oJ * (Kd[dd] * zd + Kd[dd + 1] * Hd + Kd[dd + 2] * wd + Kd[dd + 3] * Ad)
        }
        let lJ = .6 - dJ * dJ - JJ * JJ - kJ * kJ - pJ * pJ;
        if (lJ < 0) ld = 0;
        else {
          const dd = Nd[NJ + 1 + Nd[WJ + 1 + Nd[PJ + 1 + Nd[ZJ + 1]]]] % 32 * 4;
          lJ *= lJ, ld = lJ * lJ * (Kd[dd] * dJ + Kd[dd + 1] * JJ + Kd[dd + 2] * kJ + Kd[dd + 3] * pJ)
        }
        return 27 * (Wd + Pd + Cd + od + ld)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);
/*! For license information please see qepqb8.213.181c0c22.chunk.js.LICENSE.txt */
export const id = 213;
export const ids = [213];
export const modules = {
  39025: (vv, zv, Pv) => {
    vv.exports = Sv;
    var hv = Pv(327);

    function Sv(vv, zv) {
      if (!(this instanceof Sv)) return new Sv(vv, zv);
      var Pv = hv.create();
      hv.add(Pv, vv, zv), this.base = hv.min(hv.create(), vv, Pv), this.vec = hv.clone(zv), this.max = hv.max(hv.create(), vv, Pv), this.mag = hv.length(this.vec)
    }
    var ev = Sv.prototype;
    ev.width = function() {
      return this.vec[0]
    }, ev.height = function() {
      return this.vec[1]
    }, ev.depth = function() {
      return this.vec[2]
    }, ev.x0 = function() {
      return this.base[0]
    }, ev.y0 = function() {
      return this.base[1]
    }, ev.z0 = function() {
      return this.base[2]
    }, ev.x1 = function() {
      return this.max[0]
    }, ev.y1 = function() {
      return this.max[1]
    }, ev.z1 = function() {
      return this.max[2]
    }, ev.translate = function(vv) {
      return hv.add(this.max, this.max, vv), hv.add(this.base, this.base, vv), this
    }, ev.setPosition = function(vv) {
      return hv.add(this.max, vv, this.vec), hv.copy(this.base, vv), this
    }, ev.expand = function(vv) {
      var zv = hv.create(),
        Pv = hv.create();
      return hv.max(zv, vv.max, this.max), hv.min(Pv, vv.base, this.base), hv.subtract(zv, zv, Pv), new Sv(Pv, zv)
    }, ev.intersects = function(vv) {
      return !(vv.base[0] > this.max[0]) && (!(vv.base[1] > this.max[1]) && (!(vv.base[2] > this.max[2]) && (!(vv.max[0] < this.base[0]) && (!(vv.max[1] < this.base[1]) && !(vv.max[2] < this.base[2])))))
    }, ev.touches = function(vv) {
      var zv = this.union(vv);
      return null !== zv && (0 == zv.width() || 0 == zv.height() || 0 == zv.depth())
    }, ev.union = function(vv) {
      if (!this.intersects(vv)) return null;
      var zv = Math.max(vv.base[0], this.base[0]),
        Pv = Math.max(vv.base[1], this.base[1]),
        hv = Math.max(vv.base[2], this.base[2]);
      return new Sv([zv, Pv, hv], [Math.min(vv.max[0], this.max[0]) - zv, Math.min(vv.max[1], this.max[1]) - Pv, Math.min(vv.max[2], this.max[2]) - hv])
    }
  },
  39022: vv => {
    vv.exports = function(vv, zv, Pv, hv, Sv, ev) {
      var gv = +zv[0],
        pv = +zv[1],
        dv = +zv[2],
        Nv = +Pv[0],
        lv = +Pv[1],
        Tv = +Pv[2],
        Wv = Math.sqrt(Nv * Nv + lv * lv + Tv * Tv);
      if (0 === Wv) throw new Error("Can't raycast along a zero vector");
      return function(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv) {
        for (var lv = 0, Tv = Math.floor, Wv = 0 | Tv(zv), wv = 0 | Tv(Pv), av = 0 | Tv(hv), sv = Sv > 0 ? 1 : -1, Cv = ev > 0 ? 1 : -1, iv = gv > 0 ? 1 : -1, cv = Math.abs(1 / Sv), Gv = Math.abs(1 / ev), mv = Math.abs(1 / gv), jv = cv < 1 / 0 ? cv * (sv > 0 ? Wv + 1 - zv : zv - Wv) : 1 / 0, fv = Gv < 1 / 0 ? Gv * (Cv > 0 ? wv + 1 - Pv : Pv - wv) : 1 / 0, Fv = mv < 1 / 0 ? mv * (iv > 0 ? av + 1 - hv : hv - av) : 1 / 0, Yv = -1; lv <= pv;) {
          var nv = vv(Wv, wv, av);
          if (nv) return dv && (dv[0] = zv + lv * Sv, dv[1] = Pv + lv * ev, dv[2] = hv + lv * gv), Nv && (Nv[0] = Nv[1] = Nv[2] = 0, 0 === Yv && (Nv[0] = -sv), 1 === Yv && (Nv[1] = -Cv), 2 === Yv && (Nv[2] = -iv)), nv;
          jv < fv ? jv < Fv ? (Wv += sv, lv = jv, jv += cv, Yv = 0) : (av += iv, lv = Fv, Fv += mv, Yv = 2) : fv < Fv ? (wv += Cv, lv = fv, fv += Gv, Yv = 1) : (av += iv, lv = Fv, Fv += mv, Yv = 2)
        }
        return dv && (dv[0] = zv + lv * Sv, dv[1] = Pv + lv * ev, dv[2] = hv + lv * gv), Nv && (Nv[0] = Nv[1] = Nv[2] = 0), 0
      }(vv, gv, pv, dv, Nv /= Wv, lv /= Wv, Tv /= Wv, hv = "undefined" === typeof hv ? 64 : +hv, Sv, ev)
    }
  },
  38631: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => pv,
      c: () => ev
    });
    var hv = Pv(3856);
    let Sv = null;

    function ev(vv) {
      return null !== Sv && vv === Sv
    }

    function gv() {
      this.yI = !1, this.stopPropagation = !1, this.JI = !1, this.disabled = !1
    }
    class pv {
      constructor(vv, zv) {
        this.version = "0.7.0";
        var Pv = Object.assign({}, new gv, zv || {});
        this.element = vv || document, this.yI = !!Pv.yI, this.stopPropagation = !!Pv.stopPropagation, this.JI = !!Pv.JI, this.disabled = !!Pv.disabled, this.filterEvents = (vv, zv) => !0, this.ignoreEvent = vv => !1, this.down = new hv.EventEmitter, this.up = new hv.EventEmitter, this.state = {}, this.FQ = {
          dx: 0,
          dy: 0,
          vvv: 0,
          zvv: 0,
          Pvv: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Nv(this) : document.addEventListener("DOMContentLoaded", (vv => {
          Nv(this)
        }), {
          once: !0
        })
      }
      bind(vv) {
        for (var zv = arguments.length, Pv = new Array(zv > 1 ? zv - 1 : 0), hv = 1; hv < zv; hv++) Pv[hv - 1] = arguments[hv];
        Pv.forEach((zv => {
          var Pv = this._keyBindmap[zv] || [];
          Pv.includes(vv) || (Pv.push(vv), this._keyBindmap[zv] = Pv)
        })), this.state[vv] = !!this.state[vv], this.pressCount[vv] = this.pressCount[vv] || 0, this.releaseCount[vv] = this.releaseCount[vv] || 0
      }
      unbind(vv) {
        for (var zv in this._keyBindmap) {
          var Pv = this._keyBindmap[zv],
            hv = Pv.indexOf(vv);
          hv > -1 && Pv.splice(hv, 1)
        }
      }
      getBindings() {
        var vv = {};
        for (var zv in this._keyBindmap) {
          this._keyBindmap[zv].forEach((Pv => {
            vv[Pv] = vv[Pv] || [], vv[Pv].push(zv)
          }))
        }
        return vv
      }
      MT() {
        dv(this.FQ), dv(this.pressCount), dv(this.releaseCount)
      }
    }

    function dv(vv) {
      for (var zv in vv) vv[zv] = 0
    }

    function Nv(vv) {
      window.addEventListener("keydown", Cv.bind(null, vv, !0), !1), window.addEventListener("keyup", Cv.bind(null, vv, !1), !1);
      var zv = {
        passive: !0
      };
      vv.element.addEventListener("touchstart", wv.bind(void 0, vv), {
        passive: !1
      }), vv.element.addEventListener("touchend", sv.bind(void 0, vv), zv), vv.element.addEventListener("mousedown", iv.bind(null, vv, !0), zv), window.document.addEventListener("mouseup", iv.bind(null, vv, !1), zv), vv.element.addEventListener("touchmove", cv.bind(null, vv), zv), vv.element.addEventListener("mousemove", cv.bind(null, vv), zv), window.PointerEvent, vv.element.addEventListener("wheel", Gv.bind(null, vv), zv), vv.element.addEventListener("contextmenu", mv.bind(null, vv), !1), window.addEventListener("blur", Fv.bind(null, vv), !1)
    }
    var lv = 0,
      Tv = 0,
      Wv = null;

    function wv(vv, zv) {
      zv.preventDefault(), av(zv)
    }

    function av(vv) {
      let zv = !1;
      for (let Pv = 0; Pv < vv.touches.length; ++Pv)
        if (vv.touches[Pv].identifier === Wv) {
          zv = !0;
          break
        } if (!zv) {
        const zv = vv.changedTouches[0];
        lv = zv.clientX, Tv = zv.clientY, Wv = zv.identifier
      }
    }

    function sv(vv, zv) {
      for (var Pv = zv.changedTouches, hv = 0; hv < Pv.length; ++hv) Pv[hv].identifier === Wv && (Wv = null)
    }

    function Cv(vv, zv, Pv) {
      if (!vv.ignoreEvent(Pv)) try {
        Yv(vv, Pv), zv && Pv.isTrusted && !Pv.repeat && vv._keyStates[Pv.code] && nv(vv, Pv.code)
      } finally {
        Ov(Pv.code, zv, vv, Pv)
      }
    }

    function iv(vv, zv, Pv) {
      if (!vv.ignoreEvent(Pv)) try {
        Yv(vv, Pv)
      } finally {
        ! function(vv, zv, Pv) {
          if ("pointerId" in Pv)
            if (zv) {
              if (null !== vv._touches.currID) return;
              vv._touches.currID = Pv.pointerId
            } else {
              if (vv._touches.currID !== Pv.pointerId) return;
              vv._touches.currID = null
            } var hv = "button" in Pv ? Pv.button + 1 : 1;
          Ov("Mouse" + hv, zv, vv, Pv)
        }(vv, zv, Pv)
      }
    }

    function cv(vv, zv) {
      var Pv = zv.movementX || zv.mozMovementX || 0,
        hv = zv.movementY || zv.mozMovementY || 0;
      if (zv.touches && 0 === (Pv | hv)) {
        var Sv = function(vv) {
          av(vv);
          for (let zv = 0; zv < vv.changedTouches.length; ++zv)
            if (vv.changedTouches[zv].identifier == Wv) {
              const Pv = vv.changedTouches[zv],
                hv = [Pv.clientX - lv, Pv.clientY - Tv];
              return lv = Pv.clientX, Tv = Pv.clientY, hv
            } return console.error(`Did not find touch id ${Wv}`), [0, 0]
        }(zv);
        Pv = Sv[0], hv = Sv[1]
      }
      vv.FQ.dx += Pv, vv.FQ.dy += hv
    }

    function Gv(vv, zv) {
      Yv(vv, zv);
      var Pv = 1;
      switch (zv.deltaMode) {
        case 0:
          Pv = 1;
          break;
        case 1:
          Pv = 12;
          break;
        case 2:
          Pv = vv.element.clientHeight || window.innerHeight
      }
      vv.FQ.vvv += (zv.deltaX || 0) * Pv, vv.FQ.zvv += (zv.deltaY || 0) * Pv, vv.FQ.Pvv += (zv.deltaZ || 0) * Pv
    }

    function mv(vv, zv) {
      if (!vv.JI) return zv.preventDefault(), !1
    }
    var jv = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function fv(vv, zv) {
      return !!vv[jv[zv]] || ("AltRight" === zv || "ControlLeft" === zv) && "function" === typeof vv.getModifierState && !0 === vv.getModifierState("AltGraph")
    }

    function Fv(vv, zv) {
      for (var Pv in vv._modifiersHeldThroughBlur = {}, jv) vv._keyStates[Pv] && (vv._modifiersHeldThroughBlur[Pv] = !0);
      zv && zv.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (vv) {
          return !0
        }
      }() && (clearTimeout(vv._blurRelease), vv._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var zv in vv._modifiersHeldThroughBlur = {}, vv._keyStates) vv._keyStates[zv] && !/^Mouse\d/.test(zv) && nv(vv, zv)
      }), 0))
    }

    function Yv(vv, zv) {
      var Pv = vv._modifiersHeldThroughBlur;
      if (Pv && zv.isTrusted && document.hasFocus())
        for (var hv in Pv) delete Pv[hv], vv._keyStates[hv] && hv !== zv.code && (fv(zv, hv) || nv(vv, hv))
    }

    function nv(vv, zv) {
      const Pv = {
          code: zv,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        hv = Sv;
      Sv = Pv;
      try {
        Ov(zv, !1, vv, Pv)
      } finally {
        Sv = hv
      }
    }

    function Ov(vv, zv, Pv, hv) {
      var Sv = Pv._keyBindmap[vv];
      Sv && (Dv(Pv._keyStates[vv], zv) && (Pv._keyStates[vv] = zv, Sv.forEach((vv => {
        (!Pv.filterEvents || Pv.filterEvents(hv, vv)) && function(vv, zv, Pv, hv) {
          var Sv = zv ? Pv.pressCount : Pv.releaseCount;
          Sv[vv] = (Sv[vv] || 0) + 1;
          var ev = Pv._bindPressCount[vv] || 0;
          (ev += zv ? 1 : -1) < 0 && (ev = 0);
          Pv._bindPressCount[vv] = ev;
          var gv = Pv.state[vv];
          if (Dv(gv, ev)) {
            Pv.state[vv] = ev > 0;
            var pv = zv ? Pv.down : Pv.up;
            Pv.disabled || pv.emit(vv, hv)
          }
        }(vv, zv, Pv, hv)
      }))), "button" in hv || (Pv.yI && !hv.defaultPrevented && hv.preventDefault(), Pv.stopPropagation && hv.stopPropagation()))
    }

    function Dv(vv, zv) {
      return vv ? !zv : zv
    }
  },
  36067: (vv, zv) => {
    function Pv(vv) {
      if (vv && "object" === typeof vv) {
        var zv = vv.which || vv.keyCode || vv.charCode;
        zv && (vv = zv)
      }
      if ("number" === typeof vv) return gv[vv];
      var Pv, ev = String(vv);
      return (Pv = hv[ev.toLowerCase()]) ? Pv : (Pv = Sv[ev.toLowerCase()]) || (1 === ev.length ? ev.charCodeAt(0) : void 0)
    }
    Pv.isEventKey = function(vv, zv) {
      if (vv && "object" === typeof vv) {
        var Pv = vv.which || vv.keyCode || vv.charCode;
        if (null === Pv || void 0 === Pv) return !1;
        if ("string" === typeof zv) {
          var ev;
          if (ev = hv[zv.toLowerCase()]) return ev === Pv;
          if (ev = Sv[zv.toLowerCase()]) return ev === Pv
        } else if ("number" === typeof zv) return zv === Pv;
        return !1
      }
    };
    var hv = (zv = vv.exports = Pv).code = zv.codes = {
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
      Sv = zv.aliases = {
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
    for (ev = 97; ev < 123; ev++) hv[String.fromCharCode(ev)] = ev - 32;
    for (var ev = 48; ev < 58; ev++) hv[ev - 48] = ev;
    for (ev = 1; ev < 13; ev++) hv["f" + ev] = ev + 111;
    for (ev = 0; ev < 10; ev++) hv["numpad " + ev] = ev + 96;
    var gv = zv.names = zv.title = {};
    for (ev in hv) gv[hv[ev]] = ev;
    for (var pv in Sv) hv[pv] = Sv[pv]
  },
  39010: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    class hv {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.yV = !1, this.JV = !1, this.ZD = 30, this.xV = 0, this.oV = 100, this.DC = !1, this.fullscreen = !1, this.xG = function(vv) {}, this.bV = function(vv, zv, Pv) {}, this.vU = function() {}, this.mG = function() {}, this.rV = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(vv) {}, this._data = new Sv(zv),
          function(vv) {
            if ("loading" === document.readyState) {
              var zv = () => {
                document.removeEventListener("readystatechange", zv), vv()
              };
              document.addEventListener("readystatechange", zv)
            } else setTimeout(vv, 0)
          }((() => {
            ! function(vv) {
              var zv = vv._data,
                Pv = zv.nowObject.now();
              zv.lastTickStarted = Pv, zv.lastFrameStarted = Pv, zv.lastRenderStarted = Pv, zv.frameCB = () => function(vv) {
                var zv = vv._data;
                requestAnimationFrame(zv.frameCB), pv(vv);
                var Pv = zv.nowObject.now(),
                  hv = Pv - zv.lastFrameStarted;
                if (zv.lastFrameStarted = Pv, vv.xV > 0) {
                  zv.renderAccum += hv;
                  var Sv = 1e3 / vv.xV;
                  if (zv.renderAccum < Sv) return;
                  zv.renderAccum -= Sv, zv.renderAccum > Sv && (zv.renderAccum = Sv)
                }
                var ev = Pv - zv.lastRenderStarted;
                zv.lastRenderStarted = Pv;
                var gv = 1e3 / vv.ZD,
                  dv = (Pv - zv.lastTickStarted) / gv;
                dv < 0 && (dv = 0);
                vv.bV(ev, dv, gv), setTimeout(pv, 0, vv, !0)
              }(vv), zv.intervalCB = () => pv(vv), requestAnimationFrame(zv.frameCB), zv.pollTime > 0 && (zv.intervalID = setInterval(zv.intervalCB, Math.max(zv.pollTime, 1e3 / vv.ZD / 2)))
            }(this),
            function(vv, zv) {
              if (!zv) return;
              var Pv = !1,
                hv = !1,
                Sv = vv => {
                  if (!!vv !== (Pv = zv === document.pointerLockElement))
                    if (vv) {
                      var hv = zv.requestPointerLock();
                      hv && hv.catch && hv.catch((vv => {}))
                    } else document.exitPointerLock()
                },
                ev = vv => {
                  !!vv !== (hv = zv === document.fullscreenElement) && (vv ? zv.requestFullscreen ? zv.requestFullscreen() : zv.webkitRequestFullscreen && zv.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (hv => {
                Pv = zv === document.pointerLockElement, vv.rV(Pv)
              })), document.addEventListener("fullscreenchange", (Pv => {
                hv = zv === document.fullscreenElement, vv.onFullscreenChanged(hv)
              })), document.addEventListener("pointerlockerror", (hv => {
                Pv = zv === document.pointerLockElement, vv.onPointerLockError(hv)
              })), Object.defineProperty(vv, "DC", {
                get: () => Pv,
                set: Sv
              }), Object.defineProperty(vv, "fullscreen", {
                get: () => hv,
                set: ev
              }), zv.addEventListener("click", (zv => {
                vv.yV && Sv(!0), vv.JV && ev(!0)
              }));
              var gv = () => vv.mG();
              if (window.ResizeObserver) {
                new ResizeObserver(gv).observe(zv)
              } else window.addEventListener("resize", gv)
            }(this, vv), this.vU()
          }))
      }
    }

    function Sv() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = vv, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var ev = 3,
      gv = 20;

    function pv(vv) {
      for (var zv = vv._data, Pv = 1e3 / vv.ZD, hv = zv.nowObject.now() + gv, Sv = 0; zv.nowObject.now() >= zv.lastTickStarted + Pv && zv.nowObject.now() < hv && ++Sv <= ev;) vv.xG(Pv), zv.lastTickStarted += Pv;
      var pv = 5 * (Pv + 5),
        dv = zv.nowObject.now();
      if (dv - zv.lastTickStarted > pv)
        for (; dv >= zv.lastTickStarted + Pv;) zv.lastTickStarted += Pv
    }
  },
  36206: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => gv
    });
    var hv = Pv(52);
    const Sv = hv.useLayoutEffect;
    const ev = function(vv) {
      var zv = (0, hv.useRef)(vv);
      return Sv((function() {
        zv.current = vv
      })), zv
    };
    var gv = function(vv) {
      var zv = ev(vv);
      (0, hv.useEffect)((function() {
        var vv = function(vv) {
          var Pv;
          if (null != zv.current && (Pv = zv.current(vv)), vv.defaultPrevented && (vv.returnValue = ""), "string" === typeof Pv) return vv.returnValue = Pv, Pv
        };
        return window.addEventListener("beforeunload", vv),
          function() {
            window.removeEventListener("beforeunload", vv)
          }
      }), [])
    }
  },
  36123: vv => {
    var zv, Pv = "undefined" !== typeof window ? window.navigator.userAgent : "",
      hv = /OS X/.test(Pv),
      Sv = /Opera/.test(Pv),
      ev = !/like Gecko/.test(Pv) && !Sv,
      gv = vv.exports = {
        0: hv ? "<menu>" : "<UNK>",
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
        93: hv ? "<meta>" : "<menu>",
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
        173: hv && ev ? "-" : "<volume-mute>",
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
        231: Sv ? "`" : "<unicode>",
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
    for (zv = 58; zv < 65; ++zv) gv[zv] = String.fromCharCode(zv);
    for (zv = 48; zv < 58; ++zv) gv[zv] = zv - 48 + "";
    for (zv = 65; zv < 91; ++zv) gv[zv] = String.fromCharCode(zv);
    for (zv = 96; zv < 106; ++zv) gv[zv] = "<num-" + (zv - 96) + ">";
    for (zv = 112; zv < 136; ++zv) gv[zv] = "F" + (zv - 111)
  },
  38560: (vv, zv, Pv) => {
    function hv(vv, zv, Pv, hv, Sv) {
      var ev = {};
      return Object.keys(hv).forEach((function(vv) {
        ev[vv] = hv[vv]
      })), ev.enumerable = !!ev.enumerable, ev.configurable = !!ev.configurable, ("value" in ev || ev.initializer) && (ev.writable = !0), ev = Pv.slice().reverse().reduce((function(Pv, hv) {
        return hv(vv, zv, Pv) || Pv
      }), ev), Sv && void 0 !== ev.initializer && (ev.value = ev.initializer ? ev.initializer.call(Sv) : void 0, ev.initializer = void 0), void 0 === ev.initializer && (Object.defineProperty(vv, zv, ev), ev = null), ev
    }
    Pv.d(zv, {
      d: () => hv
    })
  },
  38555: (vv, zv, Pv) => {
    function hv(vv, zv, Pv, hv) {
      Pv && Object.defineProperty(vv, zv, {
        enumerable: Pv.enumerable,
        configurable: Pv.configurable,
        writable: Pv.writable,
        value: Pv.initializer ? Pv.initializer.call(hv) : void 0
      })
    }
    Pv.d(zv, {
      b: () => hv
    })
  },
  38207: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev
    });
    var hv = Pv(38209);
    const Sv = (vv, zv, Pv) => vv ? vv.getClassName && "Mesh" === vv.getClassName() ? null : !vv.getClassName || "SubMesh" !== vv.getClassName() && "PhysicsBody" !== vv.getClassName() ? vv.clone ? vv.clone() : Array.isArray(vv) ? vv.slice() : Pv && "object" === typeof vv ? {
      ...vv
    } : null : vv.clone(zv) : null;
    class ev {
      static DeepCopy(vv, zv, Pv, ev) {
        let gv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const pv = function(vv) {
          const zv = [];
          do {
            const Pv = Object.getOwnPropertyNames(vv);
            for (const vv of Pv) - 1 === zv.indexOf(vv) && zv.push(vv)
          } while (vv = Object.getPrototypeOf(vv));
          return zv
        }(vv);
        for (const Nv of pv) {
          if ("_" === Nv[0] && (!ev || -1 === ev.indexOf(Nv))) continue;
          if (Nv.endsWith("Observable")) continue;
          if (Pv && -1 !== Pv.indexOf(Nv)) continue;
          const pv = vv[Nv],
            lv = typeof pv;
          if ("function" !== lv) try {
            if ("object" === lv)
              if (pv instanceof Uint8Array) zv[Nv] = Uint8Array.from(pv);
              else if (pv instanceof Array) {
              if (zv[Nv] = [], pv.length > 0)
                if ("object" == typeof pv[0])
                  for (let vv = 0; vv < pv.length; vv++) {
                    const Pv = Sv(pv[vv], zv, gv); - 1 === zv[Nv].indexOf(Pv) && zv[Nv].push(Pv)
                  } else zv[Nv] = pv.slice(0)
            } else zv[Nv] = Sv(pv, zv, gv);
            else zv[Nv] = pv
          } catch (dv) {
            hv.d.Warn(dv.message)
          }
        }
      }
    }
  },
  38245: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv,
      f: () => ev,
      h: () => gv,
      i: () => pv
    });
    var hv = Pv(36751);
    class Sv {
      constructor(vv, zv, Pv) {
        this.gradient = vv, this.color1 = zv, this.color2 = Pv
      }
      getColorToRef(vv) {
        this.color2 ? hv.e.LerpToRef(this.color1, this.color2, Math.random(), vv) : vv.Vzv(this.color1)
      }
    }
    class ev {
      constructor(vv, zv) {
        this.gradient = vv, this.color = zv
      }
    }
    class gv {
      constructor(vv, zv, Pv) {
        this.gradient = vv, this.factor1 = zv, this.factor2 = Pv
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class pv {
      static GetCurrentGradient(vv, zv, Pv) {
        if (zv[0].gradient > vv) return void Pv(zv[0], zv[0], 1);
        for (let Sv = 0; Sv < zv.length - 1; Sv++) {
          const hv = zv[Sv],
            ev = zv[Sv + 1];
          if (vv >= hv.gradient && vv <= ev.gradient) {
            return void Pv(hv, ev, (vv - hv.gradient) / (ev.gradient - hv.gradient))
          }
        }
        const hv = zv.length - 1;
        Pv(zv[hv], zv[hv], 1)
      }
    }
  },
  38209: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    class hv {
      static _CheckLimit(vv, zv) {
        let Pv = hv._LogLimitOutputs[vv];
        return Pv ? Pv.current++ : (Pv = {
          limit: zv,
          current: 1
        }, hv._LogLimitOutputs[vv] = Pv), Pv.current <= Pv.limit
      }
      static _GenerateLimitMessage(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Pv = hv._LogLimitOutputs[vv];
        if (!Pv || !hv.MessageLimitReached) return;
        const Sv = this._Levels[zv];
        Pv.current === Pv.limit && hv[Sv.name](hv.MessageLimitReached.replace(/%LIMIT%/g, "" + Pv.limit).replace(/%TYPE%/g, Sv.name ?? ""))
      }
      static _AddLogEntry(vv) {
        hv._LogCache = vv + hv._LogCache, hv.OnNewCacheEntry && hv.OnNewCacheEntry(vv)
      }
      static _FormatMessage(vv) {
        const zv = vv => vv < 10 ? "0" + vv : "" + vv,
          Pv = new Date;
        return "[" + zv(Pv.getHours()) + ":" + zv(Pv.getMinutes()) + ":" + zv(Pv.getSeconds()) + "]: " + vv
      }
      static _LogDisabled(vv, zv) {}
      static _LogEnabled() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zv = arguments.length > 1 ? arguments[1] : void 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        const Sv = Array.isArray(zv) ? zv[0] : zv;
        if (void 0 !== Pv && !hv._CheckLimit(Sv, Pv)) return;
        const ev = hv._FormatMessage(Sv),
          gv = this._Levels[vv],
          pv = Array.isArray(zv) ? zv.slice(1) : [];
        gv.logFunc && gv.logFunc("BJS - " + ev, ...pv);
        const dv = `<div style='color:${gv.color}'>${ev}</div><br>`;
        hv._AddLogEntry(dv), hv._GenerateLimitMessage(Sv, vv)
      }
      static get LogCache() {
        return hv._LogCache
      }
      static ClearLogCache() {
        hv._LogCache = "", hv._LogLimitOutputs = {}, hv.errorsCount = 0
      }
      static set LogLevels(vv) {
        hv.Log = hv._LogDisabled, hv.Warn = hv._LogDisabled, hv.Error = hv._LogDisabled;
        const zv = [hv.MessageLogLevel, hv.WarningLogLevel, hv.ErrorLogLevel];
        for (const Pv of zv)
          if ((vv & Pv) === Pv) {
            const vv = this._Levels[Pv];
            hv[vv.name] = hv._LogEnabled.bind(hv, Pv)
          }
      }
    }
    hv.NoneLogLevel = 0, hv.MessageLogLevel = 1, hv.WarningLogLevel = 2, hv.ErrorLogLevel = 4, hv.AllLogLevel = 7, hv.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", hv._LogCache = "", hv._LogLimitOutputs = {}, hv._Levels = [{}, {
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
    }], hv.errorsCount = 0, hv.Log = hv._LogEnabled.bind(hv, hv.MessageLogLevel), hv.Warn = hv._LogEnabled.bind(hv, hv.WarningLogLevel), hv.Error = hv._LogEnabled.bind(hv, hv.ErrorLogLevel)
  },
  38249: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv
    });
    var hv = Pv(36594),
      Sv = Pv(36620),
      ev = Pv(38207);
    class gv {
      constructor() {
        this.direction1 = new hv.l(0, 1, 0), this.direction2 = new hv.l(0, 1, 0), this.minEmitBox = new hv.l(-.5, -.5, -.5), this.maxEmitBox = new hv.l(.5, .5, .5)
      }
      startDirectionFunction(vv, zv, Pv, ev) {
        const gv = (0, Sv.RandomRange)(this.direction1.x, this.direction2.x),
          pv = (0, Sv.RandomRange)(this.direction1.y, this.direction2.y),
          dv = (0, Sv.RandomRange)(this.direction1.z, this.direction2.z);
        if (ev) return zv.x = gv, zv.y = pv, void(zv.z = dv);
        hv.l.TransformNormalFromFloatsToRef(gv, pv, dv, vv, zv)
      }
      startPositionFunction(vv, zv, Pv, ev) {
        const gv = (0, Sv.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          pv = (0, Sv.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          dv = (0, Sv.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (ev) return zv.x = gv, zv.y = pv, void(zv.z = dv);
        hv.l.TransformCoordinatesFromFloatsToRef(gv, pv, dv, vv, zv)
      }
      clone() {
        const vv = new gv;
        return ev.b.DeepCopy(this, vv), vv
      }
      applyToShader(vv) {
        vv.setVector3("direction1", this.direction1), vv.setVector3("direction2", this.direction2), vv.setVector3("minEmitBox", this.minEmitBox), vv.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(vv) {
        vv.addUniform("direction1", 3), vv.addUniform("direction2", 3), vv.addUniform("minEmitBox", 3), vv.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const vv = {};
        return vv.type = this.getClassName(), vv.direction1 = this.direction1.pPv(), vv.direction2 = this.direction2.pPv(), vv.minEmitBox = this.minEmitBox.pPv(), vv.maxEmitBox = this.maxEmitBox.pPv(), vv
      }
      parse(vv) {
        hv.l.FromArrayToRef(vv.direction1, 0, this.direction1), hv.l.FromArrayToRef(vv.direction2, 0, this.direction2), hv.l.FromArrayToRef(vv.minEmitBox, 0, this.minEmitBox), hv.l.FromArrayToRef(vv.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38201: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pv,
      g: () => gv
    });
    var hv = Pv(36594),
      Sv = Pv(36620),
      ev = Pv(38207);
    class gv {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = vv, this.height = zv, this.radiusRange = Pv, this.directionRandomizer = Sv, this._tempVector = hv.l.Zero()
      }
      startDirectionFunction(vv, zv, Pv, ev, gv) {
        Pv.position.subtractToRef(vv.getTranslation(), this._tempVector), this._tempVector.normalize(), hv.l.TransformNormalToRef(this._tempVector, gv, this._tempVector);
        const pv = (0, Sv.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let dv = Math.atan2(this._tempVector.x, this._tempVector.z);
        dv += (0, Sv.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = pv, this._tempVector.x = Math.sin(dv), this._tempVector.z = Math.cos(dv), this._tempVector.normalize(), ev ? zv.Vzv(this._tempVector) : hv.l.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, vv, zv)
      }
      startPositionFunction(vv, zv, Pv, ev) {
        const gv = (0, Sv.RandomRange)(-this.height / 2, this.height / 2),
          pv = (0, Sv.RandomRange)(0, 2 * Math.PI),
          dv = (0, Sv.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          Nv = Math.sqrt(dv) * this.radius,
          lv = Nv * Math.cos(pv),
          Tv = Nv * Math.sin(pv);
        ev ? zv.f_(lv, gv, Tv) : hv.l.TransformCoordinatesFromFloatsToRef(lv, gv, Tv, vv, zv)
      }
      clone() {
        const vv = new gv(this.radius, this.directionRandomizer);
        return ev.b.DeepCopy(this, vv), vv
      }
      applyToShader(vv) {
        vv.setFloat("radius", this.radius), vv.setFloat("height", this.height), vv.setFloat("radiusRange", this.radiusRange), vv.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(vv) {
        vv.addUniform("radius", 1), vv.addUniform("height", 1), vv.addUniform("radiusRange", 1), vv.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const vv = {};
        return vv.type = this.getClassName(), vv.radius = this.radius, vv.height = this.height, vv.radiusRange = this.radiusRange, vv.directionRandomizer = this.directionRandomizer, vv
      }
      parse(vv) {
        this.radius = vv.radius, this.height = vv.height, this.radiusRange = vv.radiusRange, this.directionRandomizer = vv.directionRandomizer
      }
    }
    class pv extends gv {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new hv.l(0, 1, 0),
          ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new hv.l(0, 1, 0);
        super(vv, zv, Pv), this.direction1 = Sv, this.direction2 = ev
      }
      startDirectionFunction(vv, zv, Pv, ev) {
        const gv = (0, Sv.RandomRange)(this.direction1.x, this.direction2.x),
          pv = (0, Sv.RandomRange)(this.direction1.y, this.direction2.y),
          dv = (0, Sv.RandomRange)(this.direction1.z, this.direction2.z);
        ev ? zv.f_(gv, pv, dv) : hv.l.TransformNormalFromFloatsToRef(gv, pv, dv, vv, zv)
      }
      clone() {
        const vv = new pv(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return ev.b.DeepCopy(this, vv), vv
      }
      applyToShader(vv) {
        vv.setFloat("radius", this.radius), vv.setFloat("height", this.height), vv.setFloat("radiusRange", this.radiusRange), vv.setVector3("direction1", this.direction1), vv.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(vv) {
        vv.addUniform("radius", 1), vv.addUniform("height", 1), vv.addUniform("radiusRange", 1), vv.addUniform("direction1", 3), vv.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const vv = super.serialize();
        return vv.direction1 = this.direction1.pPv(), vv.direction2 = this.direction2.pPv(), vv
      }
      parse(vv) {
        super.parse(vv), hv.l.FromArrayToRef(vv.direction1, 0, this.direction1), hv.l.FromArrayToRef(vv.direction2, 0, this.direction2)
      }
    }
  },
  38328: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Tv
    });
    const hv = .5 * (Math.sqrt(3) - 1),
      Sv = (3 - Math.sqrt(3)) / 6,
      ev = 1 / 3,
      gv = 1 / 6,
      pv = (Math.sqrt(5) - 1) / 4,
      dv = (5 - Math.sqrt(5)) / 20,
      Nv = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      lv = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const Tv = class {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const zv = "function" == typeof vv ? vv : function(vv) {
          let zv = 0,
            Pv = 0,
            hv = 0,
            Sv = 1;
          const ev = function() {
            let vv = 4022871197;
            return function(zv) {
              zv = zv.toString();
              for (let Pv = 0; Pv < zv.length; Pv++) {
                vv += zv.charCodeAt(Pv);
                let hv = .02519603282416938 * vv;
                vv = hv >>> 0, hv -= vv, hv *= vv, vv = hv >>> 0, hv -= vv, vv += 4294967296 * hv
              }
              return 2.3283064365386963e-10 * (vv >>> 0)
            }
          }();
          zv = ev(" "), Pv = ev(" "), hv = ev(" "), zv -= ev(vv), zv < 0 && (zv += 1);
          Pv -= ev(vv), Pv < 0 && (Pv += 1);
          hv -= ev(vv), hv < 0 && (hv += 1);
          return function() {
            const vv = 2091639 * zv + 2.3283064365386963e-10 * Sv;
            return zv = Pv, Pv = hv, hv = vv - (Sv = 0 | vv)
          }
        }(vv);
        this.p = function(vv) {
          const zv = new Uint8Array(256);
          for (let Pv = 0; Pv < 256; Pv++) zv[Pv] = Pv;
          for (let Pv = 0; Pv < 255; Pv++) {
            const hv = Pv + ~~(vv() * (256 - Pv)),
              Sv = zv[Pv];
            zv[Pv] = zv[hv], zv[hv] = Sv
          }
          return zv
        }(zv), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let Pv = 0; Pv < 512; Pv++) this.perm[Pv] = this.p[255 & Pv], this.permMod12[Pv] = this.perm[Pv] % 12
      }
      noise2D(vv, zv) {
        const Pv = this.permMod12,
          ev = this.perm;
        let gv = 0,
          pv = 0,
          dv = 0;
        const lv = (vv + zv) * hv,
          Tv = Math.floor(vv + lv),
          Wv = Math.floor(zv + lv),
          wv = (Tv + Wv) * Sv,
          av = vv - (Tv - wv),
          sv = zv - (Wv - wv);
        let Cv, iv;
        av > sv ? (Cv = 1, iv = 0) : (Cv = 0, iv = 1);
        const cv = av - Cv + Sv,
          Gv = sv - iv + Sv,
          mv = av - 1 + 2 * Sv,
          jv = sv - 1 + 2 * Sv,
          fv = 255 & Tv,
          Fv = 255 & Wv;
        let Yv = .5 - av * av - sv * sv;
        if (Yv >= 0) {
          const vv = 3 * Pv[fv + ev[Fv]];
          Yv *= Yv, gv = Yv * Yv * (Nv[vv] * av + Nv[vv + 1] * sv)
        }
        let nv = .5 - cv * cv - Gv * Gv;
        if (nv >= 0) {
          const vv = 3 * Pv[fv + Cv + ev[Fv + iv]];
          nv *= nv, pv = nv * nv * (Nv[vv] * cv + Nv[vv + 1] * Gv)
        }
        let Ov = .5 - mv * mv - jv * jv;
        if (Ov >= 0) {
          const vv = 3 * Pv[fv + 1 + ev[Fv + 1]];
          Ov *= Ov, dv = Ov * Ov * (Nv[vv] * mv + Nv[vv + 1] * jv)
        }
        return 70 * (gv + pv + dv)
      }
      noise3D(vv, zv, Pv) {
        const hv = this.permMod12,
          Sv = this.perm;
        let pv, dv, lv, Tv;
        const Wv = (vv + zv + Pv) * ev,
          wv = Math.floor(vv + Wv),
          av = Math.floor(zv + Wv),
          sv = Math.floor(Pv + Wv),
          Cv = (wv + av + sv) * gv,
          iv = vv - (wv - Cv),
          cv = zv - (av - Cv),
          Gv = Pv - (sv - Cv);
        let mv, jv, fv, Fv, Yv, nv;
        iv >= cv ? cv >= Gv ? (mv = 1, jv = 0, fv = 0, Fv = 1, Yv = 1, nv = 0) : iv >= Gv ? (mv = 1, jv = 0, fv = 0, Fv = 1, Yv = 0, nv = 1) : (mv = 0, jv = 0, fv = 1, Fv = 1, Yv = 0, nv = 1) : cv < Gv ? (mv = 0, jv = 0, fv = 1, Fv = 0, Yv = 1, nv = 1) : iv < Gv ? (mv = 0, jv = 1, fv = 0, Fv = 0, Yv = 1, nv = 1) : (mv = 0, jv = 1, fv = 0, Fv = 1, Yv = 1, nv = 0);
        const Ov = iv - mv + gv,
          Dv = cv - jv + gv,
          Kv = Gv - fv + gv,
          Vv = iv - Fv + 2 * gv,
          Uv = cv - Yv + 2 * gv,
          Rv = Gv - nv + 2 * gv,
          xv = iv - 1 + .5,
          tv = cv - 1 + .5,
          qv = Gv - 1 + .5,
          Iv = 255 & wv,
          Qv = 255 & av,
          Zv = 255 & sv;
        let Av = .6 - iv * iv - cv * cv - Gv * Gv;
        if (Av < 0) pv = 0;
        else {
          const vv = 3 * hv[Iv + Sv[Qv + Sv[Zv]]];
          Av *= Av, pv = Av * Av * (Nv[vv] * iv + Nv[vv + 1] * cv + Nv[vv + 2] * Gv)
        }
        let Lv = .6 - Ov * Ov - Dv * Dv - Kv * Kv;
        if (Lv < 0) dv = 0;
        else {
          const vv = 3 * hv[Iv + mv + Sv[Qv + jv + Sv[Zv + fv]]];
          Lv *= Lv, dv = Lv * Lv * (Nv[vv] * Ov + Nv[vv + 1] * Dv + Nv[vv + 2] * Kv)
        }
        let Hv = .6 - Vv * Vv - Uv * Uv - Rv * Rv;
        if (Hv < 0) lv = 0;
        else {
          const vv = 3 * hv[Iv + Fv + Sv[Qv + Yv + Sv[Zv + nv]]];
          Hv *= Hv, lv = Hv * Hv * (Nv[vv] * Vv + Nv[vv + 1] * Uv + Nv[vv + 2] * Rv)
        }
        let Mv = .6 - xv * xv - tv * tv - qv * qv;
        if (Mv < 0) Tv = 0;
        else {
          const vv = 3 * hv[Iv + 1 + Sv[Qv + 1 + Sv[Zv + 1]]];
          Mv *= Mv, Tv = Mv * Mv * (Nv[vv] * xv + Nv[vv + 1] * tv + Nv[vv + 2] * qv)
        }
        return 32 * (pv + dv + lv + Tv)
      }
      noise4D(vv, zv, Pv, hv) {
        const Sv = this.perm;
        let ev, gv, Nv, Tv, Wv;
        const wv = (vv + zv + Pv + hv) * pv,
          av = Math.floor(vv + wv),
          sv = Math.floor(zv + wv),
          Cv = Math.floor(Pv + wv),
          iv = Math.floor(hv + wv),
          cv = (av + sv + Cv + iv) * dv,
          Gv = vv - (av - cv),
          mv = zv - (sv - cv),
          jv = Pv - (Cv - cv),
          fv = hv - (iv - cv);
        let Fv = 0,
          Yv = 0,
          nv = 0,
          Ov = 0;
        Gv > mv ? Fv++ : Yv++, Gv > jv ? Fv++ : nv++, Gv > fv ? Fv++ : Ov++, mv > jv ? Yv++ : nv++, mv > fv ? Yv++ : Ov++, jv > fv ? nv++ : Ov++;
        const Dv = Fv >= 3 ? 1 : 0,
          Kv = Yv >= 3 ? 1 : 0,
          Vv = nv >= 3 ? 1 : 0,
          Uv = Ov >= 3 ? 1 : 0,
          Rv = Fv >= 2 ? 1 : 0,
          xv = Yv >= 2 ? 1 : 0,
          tv = nv >= 2 ? 1 : 0,
          qv = Ov >= 2 ? 1 : 0,
          Iv = Fv >= 1 ? 1 : 0,
          Qv = Yv >= 1 ? 1 : 0,
          Zv = nv >= 1 ? 1 : 0,
          Av = Ov >= 1 ? 1 : 0,
          Lv = Gv - Dv + dv,
          Hv = mv - Kv + dv,
          Mv = jv - Vv + dv,
          yv = fv - Uv + dv,
          Bv = Gv - Rv + 2 * dv,
          Jv = mv - xv + 2 * dv,
          Ev = jv - tv + 2 * dv,
          ov = fv - qv + 2 * dv,
          bv = Gv - Iv + 3 * dv,
          rv = mv - Qv + 3 * dv,
          kv = jv - Zv + 3 * dv,
          Xv = fv - Av + 3 * dv,
          uv = Gv - 1 + 4 * dv,
          vz = mv - 1 + 4 * dv,
          zz = jv - 1 + 4 * dv,
          Pz = fv - 1 + 4 * dv,
          hz = 255 & av,
          Sz = 255 & sv,
          ez = 255 & Cv,
          gz = 255 & iv;
        let pz = .6 - Gv * Gv - mv * mv - jv * jv - fv * fv;
        if (pz < 0) ev = 0;
        else {
          const vv = Sv[hz + Sv[Sz + Sv[ez + Sv[gz]]]] % 32 * 4;
          pz *= pz, ev = pz * pz * (lv[vv] * Gv + lv[vv + 1] * mv + lv[vv + 2] * jv + lv[vv + 3] * fv)
        }
        let dz = .6 - Lv * Lv - Hv * Hv - Mv * Mv - yv * yv;
        if (dz < 0) gv = 0;
        else {
          const vv = Sv[hz + Dv + Sv[Sz + Kv + Sv[ez + Vv + Sv[gz + Uv]]]] % 32 * 4;
          dz *= dz, gv = dz * dz * (lv[vv] * Lv + lv[vv + 1] * Hv + lv[vv + 2] * Mv + lv[vv + 3] * yv)
        }
        let Nz = .6 - Bv * Bv - Jv * Jv - Ev * Ev - ov * ov;
        if (Nz < 0) Nv = 0;
        else {
          const vv = Sv[hz + Rv + Sv[Sz + xv + Sv[ez + tv + Sv[gz + qv]]]] % 32 * 4;
          Nz *= Nz, Nv = Nz * Nz * (lv[vv] * Bv + lv[vv + 1] * Jv + lv[vv + 2] * Ev + lv[vv + 3] * ov)
        }
        let lz = .6 - bv * bv - rv * rv - kv * kv - Xv * Xv;
        if (lz < 0) Tv = 0;
        else {
          const vv = Sv[hz + Iv + Sv[Sz + Qv + Sv[ez + Zv + Sv[gz + Av]]]] % 32 * 4;
          lz *= lz, Tv = lz * lz * (lv[vv] * bv + lv[vv + 1] * rv + lv[vv + 2] * kv + lv[vv + 3] * Xv)
        }
        let Tz = .6 - uv * uv - vz * vz - zz * zz - Pz * Pz;
        if (Tz < 0) Wv = 0;
        else {
          const vv = Sv[hz + 1 + Sv[Sz + 1 + Sv[ez + 1 + Sv[gz + 1]]]] % 32 * 4;
          Tz *= Tz, Wv = Tz * Tz * (lv[vv] * uv + lv[vv + 1] * vz + lv[vv + 2] * zz + lv[vv + 3] * Pz)
        }
        return 27 * (ev + gv + Nv + Tv + Wv)
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);
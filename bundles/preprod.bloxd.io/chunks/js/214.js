/*! For license information please see bbb6l5.214.c1cedf39.chunk.js.LICENSE.txt */
export const id = 214;
export const ids = [214];
export const modules = {
  39476: (qq, Eq, gq) => {
    qq.exports = lq;
    var Yq = gq(317);

    function lq(qq, Eq) {
      if (!(this instanceof lq)) return new lq(qq, Eq);
      var gq = Yq.create();
      Yq.add(gq, qq, Eq), this.base = Yq.min(Yq.create(), qq, gq), this.vec = Yq.clone(Eq), this.max = Yq.max(Yq.create(), qq, gq), this.mag = Yq.length(this.vec)
    }
    var Oq = lq.prototype;
    Oq.width = function() {
      return this.vec[0]
    }, Oq.height = function() {
      return this.vec[1]
    }, Oq.depth = function() {
      return this.vec[2]
    }, Oq.x0 = function() {
      return this.base[0]
    }, Oq.y0 = function() {
      return this.base[1]
    }, Oq.z0 = function() {
      return this.base[2]
    }, Oq.x1 = function() {
      return this.max[0]
    }, Oq.y1 = function() {
      return this.max[1]
    }, Oq.z1 = function() {
      return this.max[2]
    }, Oq.translate = function(qq) {
      return Yq.add(this.max, this.max, qq), Yq.add(this.base, this.base, qq), this
    }, Oq.setPosition = function(qq) {
      return Yq.add(this.max, qq, this.vec), Yq.copy(this.base, qq), this
    }, Oq.expand = function(qq) {
      var Eq = Yq.create(),
        gq = Yq.create();
      return Yq.max(Eq, qq.max, this.max), Yq.min(gq, qq.base, this.base), Yq.subtract(Eq, Eq, gq), new lq(gq, Eq)
    }, Oq.intersects = function(qq) {
      return !(qq.base[0] > this.max[0]) && (!(qq.base[1] > this.max[1]) && (!(qq.base[2] > this.max[2]) && (!(qq.max[0] < this.base[0]) && (!(qq.max[1] < this.base[1]) && !(qq.max[2] < this.base[2])))))
    }, Oq.touches = function(qq) {
      var Eq = this.union(qq);
      return null !== Eq && (0 == Eq.width() || 0 == Eq.height() || 0 == Eq.depth())
    }, Oq.union = function(qq) {
      if (!this.intersects(qq)) return null;
      var Eq = Math.max(qq.base[0], this.base[0]),
        gq = Math.max(qq.base[1], this.base[1]),
        Yq = Math.max(qq.base[2], this.base[2]);
      return new lq([Eq, gq, Yq], [Math.min(qq.max[0], this.max[0]) - Eq, Math.min(qq.max[1], this.max[1]) - gq, Math.min(qq.max[2], this.max[2]) - Yq])
    }
  },
  39468: qq => {
    qq.exports = function(qq, Eq, gq, Yq, lq, Oq) {
      var mq = +Eq[0],
        xq = +Eq[1],
        Aq = +Eq[2],
        cq = +gq[0],
        uq = +gq[1],
        Bq = +gq[2],
        Wq = Math.sqrt(cq * cq + uq * uq + Bq * Bq);
      if (0 === Wq) throw new Error("Can't raycast along a zero vector");
      return function(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
        for (var uq = 0, Bq = Math.floor, Wq = 0 | Bq(Eq), Nq = 0 | Bq(gq), aq = 0 | Bq(Yq), Vq = lq > 0 ? 1 : -1, dq = Oq > 0 ? 1 : -1, jq = mq > 0 ? 1 : -1, Hq = Math.abs(1 / lq), oq = Math.abs(1 / Oq), Pq = Math.abs(1 / mq), Qq = Hq < 1 / 0 ? Hq * (Vq > 0 ? Wq + 1 - Eq : Eq - Wq) : 1 / 0, yq = oq < 1 / 0 ? oq * (dq > 0 ? Nq + 1 - gq : gq - Nq) : 1 / 0, tq = Pq < 1 / 0 ? Pq * (jq > 0 ? aq + 1 - Yq : Yq - aq) : 1 / 0, rq = -1; uq <= xq;) {
          var vq = qq(Wq, Nq, aq);
          if (vq) return Aq && (Aq[0] = Eq + uq * lq, Aq[1] = gq + uq * Oq, Aq[2] = Yq + uq * mq), cq && (cq[0] = cq[1] = cq[2] = 0, 0 === rq && (cq[0] = -Vq), 1 === rq && (cq[1] = -dq), 2 === rq && (cq[2] = -jq)), vq;
          Qq < yq ? Qq < tq ? (Wq += Vq, uq = Qq, Qq += Hq, rq = 0) : (aq += jq, uq = tq, tq += Pq, rq = 2) : yq < tq ? (Nq += dq, uq = yq, yq += oq, rq = 1) : (aq += jq, uq = tq, tq += Pq, rq = 2)
        }
        return Aq && (Aq[0] = Eq + uq * lq, Aq[1] = gq + uq * Oq, Aq[2] = Yq + uq * mq), cq && (cq[0] = cq[1] = cq[2] = 0), 0
      }(qq, mq, xq, Aq, cq /= Wq, uq /= Wq, Bq /= Wq, Yq = "undefined" === typeof Yq ? 64 : +Yq, lq, Oq)
    }
  },
  39064: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => xq,
      g: () => Oq
    });
    var Yq = gq(3933);
    let lq = null;

    function Oq(qq) {
      return null !== lq && qq === lq
    }

    function mq() {
      this.IK = !1, this.stopPropagation = !1, this.gC = !1, this.disabled = !1
    }
    class xq {
      constructor(qq, Eq) {
        this.version = "0.7.0";
        var gq = Object.assign({}, new mq, Eq || {});
        this.element = qq || document, this.IK = !!gq.IK, this.stopPropagation = !!gq.stopPropagation, this.gC = !!gq.gC, this.disabled = !!gq.disabled, this.filterEvents = (qq, Eq) => !0, this.ignoreEvent = qq => !1, this.down = new Yq.EventEmitter, this.up = new Yq.EventEmitter, this.state = {}, this.lC = {
          dx: 0,
          dy: 0,
          hEq: 0,
          nEq: 0,
          bEq: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? cq(this) : document.addEventListener("DOMContentLoaded", (qq => {
          cq(this)
        }), {
          once: !0
        })
      }
      bind(qq) {
        for (var Eq = arguments.length, gq = new Array(Eq > 1 ? Eq - 1 : 0), Yq = 1; Yq < Eq; Yq++) gq[Yq - 1] = arguments[Yq];
        gq.forEach((Eq => {
          var gq = this._keyBindmap[Eq] || [];
          gq.includes(qq) || (gq.push(qq), this._keyBindmap[Eq] = gq)
        })), this.state[qq] = !!this.state[qq], this.pressCount[qq] = this.pressCount[qq] || 0, this.releaseCount[qq] = this.releaseCount[qq] || 0
      }
      unbind(qq) {
        for (var Eq in this._keyBindmap) {
          var gq = this._keyBindmap[Eq],
            Yq = gq.indexOf(qq);
          Yq > -1 && gq.splice(Yq, 1)
        }
      }
      getBindings() {
        var qq = {};
        for (var Eq in this._keyBindmap) {
          this._keyBindmap[Eq].forEach((gq => {
            qq[gq] = qq[gq] || [], qq[gq].push(Eq)
          }))
        }
        return qq
      }
      SB() {
        Aq(this.lC), Aq(this.pressCount), Aq(this.releaseCount)
      }
    }

    function Aq(qq) {
      for (var Eq in qq) qq[Eq] = 0
    }

    function cq(qq) {
      window.addEventListener("keydown", dq.bind(null, qq, !0), !1), window.addEventListener("keyup", dq.bind(null, qq, !1), !1);
      var Eq = {
        passive: !0
      };
      qq.element.addEventListener("touchstart", Nq.bind(void 0, qq), {
        passive: !1
      }), qq.element.addEventListener("touchend", Vq.bind(void 0, qq), Eq), qq.element.addEventListener("mousedown", jq.bind(null, qq, !0), Eq), window.document.addEventListener("mouseup", jq.bind(null, qq, !1), Eq), qq.element.addEventListener("touchmove", Hq.bind(null, qq), Eq), qq.element.addEventListener("mousemove", Hq.bind(null, qq), Eq), window.PointerEvent, qq.element.addEventListener("wheel", oq.bind(null, qq), Eq), qq.element.addEventListener("contextmenu", Pq.bind(null, qq), !1), window.addEventListener("blur", tq.bind(null, qq), !1)
    }
    var uq = 0,
      Bq = 0,
      Wq = null;

    function Nq(qq, Eq) {
      Eq.preventDefault(), aq(Eq)
    }

    function aq(qq) {
      let Eq = !1;
      for (let gq = 0; gq < qq.touches.length; ++gq)
        if (qq.touches[gq].identifier === Wq) {
          Eq = !0;
          break
        } if (!Eq) {
        const Eq = qq.changedTouches[0];
        uq = Eq.clientX, Bq = Eq.clientY, Wq = Eq.identifier
      }
    }

    function Vq(qq, Eq) {
      for (var gq = Eq.changedTouches, Yq = 0; Yq < gq.length; ++Yq) gq[Yq].identifier === Wq && (Wq = null)
    }

    function dq(qq, Eq, gq) {
      if (!qq.ignoreEvent(gq)) try {
        rq(qq, gq), Eq && gq.isTrusted && !gq.repeat && qq._keyStates[gq.code] && vq(qq, gq.code)
      } finally {
        hq(gq.code, Eq, qq, gq)
      }
    }

    function jq(qq, Eq, gq) {
      if (!qq.ignoreEvent(gq)) try {
        rq(qq, gq)
      } finally {
        ! function(qq, Eq, gq) {
          if ("pointerId" in gq)
            if (Eq) {
              if (null !== qq._touches.currID) return;
              qq._touches.currID = gq.pointerId
            } else {
              if (qq._touches.currID !== gq.pointerId) return;
              qq._touches.currID = null
            } var Yq = "button" in gq ? gq.button + 1 : 1;
          hq("Mouse" + Yq, Eq, qq, gq)
        }(qq, Eq, gq)
      }
    }

    function Hq(qq, Eq) {
      var gq = Eq.movementX || Eq.mozMovementX || 0,
        Yq = Eq.movementY || Eq.mozMovementY || 0;
      if (Eq.touches && 0 === (gq | Yq)) {
        var lq = function(qq) {
          aq(qq);
          for (let Eq = 0; Eq < qq.changedTouches.length; ++Eq)
            if (qq.changedTouches[Eq].identifier == Wq) {
              const gq = qq.changedTouches[Eq],
                Yq = [gq.clientX - uq, gq.clientY - Bq];
              return uq = gq.clientX, Bq = gq.clientY, Yq
            } return console.error(`Did not find touch id ${Wq}`), [0, 0]
        }(Eq);
        gq = lq[0], Yq = lq[1]
      }
      qq.lC.dx += gq, qq.lC.dy += Yq
    }

    function oq(qq, Eq) {
      rq(qq, Eq);
      var gq = 1;
      switch (Eq.deltaMode) {
        case 0:
          gq = 1;
          break;
        case 1:
          gq = 12;
          break;
        case 2:
          gq = qq.element.clientHeight || window.innerHeight
      }
      qq.lC.hEq += (Eq.deltaX || 0) * gq, qq.lC.nEq += (Eq.deltaY || 0) * gq, qq.lC.bEq += (Eq.deltaZ || 0) * gq
    }

    function Pq(qq, Eq) {
      if (!qq.gC) return Eq.preventDefault(), !1
    }
    var Qq = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function yq(qq, Eq) {
      return !!qq[Qq[Eq]] || ("AltRight" === Eq || "ControlLeft" === Eq) && "function" === typeof qq.getModifierState && !0 === qq.getModifierState("AltGraph")
    }

    function tq(qq, Eq) {
      for (var gq in qq._modifiersHeldThroughBlur = {}, Qq) qq._keyStates[gq] && (qq._modifiersHeldThroughBlur[gq] = !0);
      Eq && Eq.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (qq) {
          return !0
        }
      }() && (clearTimeout(qq._blurRelease), qq._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var Eq in qq._modifiersHeldThroughBlur = {}, qq._keyStates) qq._keyStates[Eq] && !/^Mouse\d/.test(Eq) && vq(qq, Eq)
      }), 0))
    }

    function rq(qq, Eq) {
      var gq = qq._modifiersHeldThroughBlur;
      if (gq && Eq.isTrusted && document.hasFocus())
        for (var Yq in gq) delete gq[Yq], qq._keyStates[Yq] && Yq !== Eq.code && (yq(Eq, Yq) || vq(qq, Yq))
    }

    function vq(qq, Eq) {
      const gq = {
          code: Eq,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Yq = lq;
      lq = gq;
      try {
        hq(Eq, !1, qq, gq)
      } finally {
        lq = Yq
      }
    }

    function hq(qq, Eq, gq, Yq) {
      var lq = gq._keyBindmap[qq];
      lq && (nq(gq._keyStates[qq], Eq) && (gq._keyStates[qq] = Eq, lq.forEach((qq => {
        (!gq.filterEvents || gq.filterEvents(Yq, qq)) && function(qq, Eq, gq, Yq) {
          var lq = Eq ? gq.pressCount : gq.releaseCount;
          lq[qq] = (lq[qq] || 0) + 1;
          var Oq = gq._bindPressCount[qq] || 0;
          (Oq += Eq ? 1 : -1) < 0 && (Oq = 0);
          gq._bindPressCount[qq] = Oq;
          var mq = gq.state[qq];
          if (nq(mq, Oq)) {
            gq.state[qq] = Oq > 0;
            var xq = Eq ? gq.down : gq.up;
            gq.disabled || xq.emit(qq, Yq)
          }
        }(qq, Eq, gq, Yq)
      }))), "button" in Yq || (gq.IK && !Yq.defaultPrevented && Yq.preventDefault(), gq.stopPropagation && Yq.stopPropagation()))
    }

    function nq(qq, Eq) {
      return qq ? !Eq : Eq
    }
  },
  36586: (qq, Eq) => {
    function gq(qq) {
      if (qq && "object" === typeof qq) {
        var Eq = qq.which || qq.keyCode || qq.charCode;
        Eq && (qq = Eq)
      }
      if ("number" === typeof qq) return mq[qq];
      var gq, Oq = String(qq);
      return (gq = Yq[Oq.toLowerCase()]) ? gq : (gq = lq[Oq.toLowerCase()]) || (1 === Oq.length ? Oq.charCodeAt(0) : void 0)
    }
    gq.isEventKey = function(qq, Eq) {
      if (qq && "object" === typeof qq) {
        var gq = qq.which || qq.keyCode || qq.charCode;
        if (null === gq || void 0 === gq) return !1;
        if ("string" === typeof Eq) {
          var Oq;
          if (Oq = Yq[Eq.toLowerCase()]) return Oq === gq;
          if (Oq = lq[Eq.toLowerCase()]) return Oq === gq
        } else if ("number" === typeof Eq) return Eq === gq;
        return !1
      }
    };
    var Yq = (Eq = qq.exports = gq).code = Eq.codes = {
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
      lq = Eq.aliases = {
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
    for (Oq = 97; Oq < 123; Oq++) Yq[String.fromCharCode(Oq)] = Oq - 32;
    for (var Oq = 48; Oq < 58; Oq++) Yq[Oq - 48] = Oq;
    for (Oq = 1; Oq < 13; Oq++) Yq["f" + Oq] = Oq + 111;
    for (Oq = 0; Oq < 10; Oq++) Yq["numpad " + Oq] = Oq + 96;
    var mq = Eq.names = Eq.title = {};
    for (Oq in Yq) mq[Yq[Oq]] = Oq;
    for (var xq in lq) Yq[xq] = lq[xq]
  },
  39461: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq
    });
    class Yq {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.vU = !1, this.hU = !1, this.bJ = 30, this.aU = 0, this.pU = 100, this.rd = !1, this.fullscreen = !1, this.Wy = function(qq) {}, this.kU = function(qq, Eq, gq) {}, this.YF = function() {}, this.EQ = function() {}, this.KU = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(qq) {}, this._data = new lq(Eq),
          function(qq) {
            if ("loading" === document.readyState) {
              var Eq = () => {
                document.removeEventListener("readystatechange", Eq), qq()
              };
              document.addEventListener("readystatechange", Eq)
            } else setTimeout(qq, 0)
          }((() => {
            ! function(qq) {
              var Eq = qq._data,
                gq = Eq.nowObject.now();
              Eq.lastTickStarted = gq, Eq.lastFrameStarted = gq, Eq.lastRenderStarted = gq, Eq.frameCB = () => function(qq) {
                var Eq = qq._data;
                requestAnimationFrame(Eq.frameCB), xq(qq);
                var gq = Eq.nowObject.now(),
                  Yq = gq - Eq.lastFrameStarted;
                if (Eq.lastFrameStarted = gq, qq.aU > 0) {
                  Eq.renderAccum += Yq;
                  var lq = 1e3 / qq.aU;
                  if (Eq.renderAccum < lq) return;
                  Eq.renderAccum -= lq, Eq.renderAccum > lq && (Eq.renderAccum = lq)
                }
                var Oq = gq - Eq.lastRenderStarted;
                Eq.lastRenderStarted = gq;
                var mq = 1e3 / qq.bJ,
                  Aq = (gq - Eq.lastTickStarted) / mq;
                Aq < 0 && (Aq = 0);
                qq.kU(Oq, Aq, mq), setTimeout(xq, 0, qq, !0)
              }(qq), Eq.intervalCB = () => xq(qq), requestAnimationFrame(Eq.frameCB), Eq.pollTime > 0 && (Eq.intervalID = setInterval(Eq.intervalCB, Math.max(Eq.pollTime, 1e3 / qq.bJ / 2)))
            }(this),
            function(qq, Eq) {
              if (!Eq) return;
              var gq = !1,
                Yq = !1,
                lq = qq => {
                  if (!!qq !== (gq = Eq === document.pointerLockElement))
                    if (qq) {
                      var Yq = Eq.requestPointerLock();
                      Yq && Yq.catch && Yq.catch((qq => {}))
                    } else document.exitPointerLock()
                },
                Oq = qq => {
                  !!qq !== (Yq = Eq === document.fullscreenElement) && (qq ? Eq.requestFullscreen ? Eq.requestFullscreen() : Eq.webkitRequestFullscreen && Eq.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (Yq => {
                gq = Eq === document.pointerLockElement, qq.KU(gq)
              })), document.addEventListener("fullscreenchange", (gq => {
                Yq = Eq === document.fullscreenElement, qq.onFullscreenChanged(Yq)
              })), document.addEventListener("pointerlockerror", (Yq => {
                gq = Eq === document.pointerLockElement, qq.onPointerLockError(Yq)
              })), Object.defineProperty(qq, "rd", {
                get: () => gq,
                set: lq
              }), Object.defineProperty(qq, "fullscreen", {
                get: () => Yq,
                set: Oq
              }), Eq.addEventListener("click", (Eq => {
                qq.vU && lq(!0), qq.hU && Oq(!0)
              }));
              var mq = () => qq.EQ();
              if (window.ResizeObserver) {
                new ResizeObserver(mq).observe(Eq)
              } else window.addEventListener("resize", mq)
            }(this, qq), this.YF()
          }))
      }
    }

    function lq() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = qq, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var Oq = 3,
      mq = 20;

    function xq(qq) {
      for (var Eq = qq._data, gq = 1e3 / qq.bJ, Yq = Eq.nowObject.now() + mq, lq = 0; Eq.nowObject.now() >= Eq.lastTickStarted + gq && Eq.nowObject.now() < Yq && ++lq <= Oq;) qq.Wy(gq), Eq.lastTickStarted += gq;
      var xq = 5 * (gq + 5),
        Aq = Eq.nowObject.now();
      if (Aq - Eq.lastTickStarted > xq)
        for (; Aq >= Eq.lastTickStarted + gq;) Eq.lastTickStarted += gq
    }
  },
  36744: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq
    });
    var Yq = gq(57);
    const lq = Yq.useLayoutEffect;
    const Oq = function(qq) {
      var Eq = (0, Yq.useRef)(qq);
      return lq((function() {
        Eq.current = qq
      })), Eq
    };
    var mq = function(qq) {
      var Eq = Oq(qq);
      (0, Yq.useEffect)((function() {
        var qq = function(qq) {
          var gq;
          if (null != Eq.current && (gq = Eq.current(qq)), qq.defaultPrevented && (qq.returnValue = ""), "string" === typeof gq) return qq.returnValue = gq, gq
        };
        return window.addEventListener("beforeunload", qq),
          function() {
            window.removeEventListener("beforeunload", qq)
          }
      }), [])
    }
  },
  36640: qq => {
    var Eq, gq = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Yq = /OS X/.test(gq),
      lq = /Opera/.test(gq),
      Oq = !/like Gecko/.test(gq) && !lq,
      mq = qq.exports = {
        0: Yq ? "<menu>" : "<UNK>",
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
        93: Yq ? "<meta>" : "<menu>",
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
        173: Yq && Oq ? "-" : "<volume-mute>",
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
        231: lq ? "`" : "<unicode>",
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
    for (Eq = 58; Eq < 65; ++Eq) mq[Eq] = String.fromCharCode(Eq);
    for (Eq = 48; Eq < 58; ++Eq) mq[Eq] = Eq - 48 + "";
    for (Eq = 65; Eq < 91; ++Eq) mq[Eq] = String.fromCharCode(Eq);
    for (Eq = 96; Eq < 106; ++Eq) mq[Eq] = "<num-" + (Eq - 96) + ">";
    for (Eq = 112; Eq < 136; ++Eq) mq[Eq] = "F" + (Eq - 111)
  },
  38974: (qq, Eq, gq) => {
    function Yq(qq, Eq, gq, Yq, lq) {
      var Oq = {};
      return Object.keys(Yq).forEach((function(qq) {
        Oq[qq] = Yq[qq]
      })), Oq.enumerable = !!Oq.enumerable, Oq.configurable = !!Oq.configurable, ("value" in Oq || Oq.initializer) && (Oq.writable = !0), Oq = gq.slice().reverse().reduce((function(gq, Yq) {
        return Yq(qq, Eq, gq) || gq
      }), Oq), lq && void 0 !== Oq.initializer && (Oq.value = Oq.initializer ? Oq.initializer.call(lq) : void 0, Oq.initializer = void 0), void 0 === Oq.initializer && (Object.defineProperty(qq, Eq, Oq), Oq = null), Oq
    }
    gq.d(Eq, {
      c: () => Yq
    })
  },
  38968: (qq, Eq, gq) => {
    function Yq(qq, Eq, gq, Yq) {
      gq && Object.defineProperty(qq, Eq, {
        enumerable: gq.enumerable,
        configurable: gq.configurable,
        writable: gq.writable,
        value: gq.initializer ? gq.initializer.call(Yq) : void 0
      })
    }
    gq.d(Eq, {
      d: () => Yq
    })
  },
  38649: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = gq(38653);
    const lq = (qq, Eq, gq) => qq ? qq.getClassName && "Mesh" === qq.getClassName() ? null : !qq.getClassName || "SubMesh" !== qq.getClassName() && "PhysicsBody" !== qq.getClassName() ? qq.clone ? qq.clone() : Array.isArray(qq) ? qq.slice() : gq && "object" === typeof qq ? {
      ...qq
    } : null : qq.clone(Eq) : null;
    class Oq {
      static DeepCopy(qq, Eq, gq, Oq) {
        let mq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const xq = function(qq) {
          const Eq = [];
          do {
            const gq = Object.getOwnPropertyNames(qq);
            for (const qq of gq) - 1 === Eq.indexOf(qq) && Eq.push(qq)
          } while (qq = Object.getPrototypeOf(qq));
          return Eq
        }(qq);
        for (const cq of xq) {
          if ("_" === cq[0] && (!Oq || -1 === Oq.indexOf(cq))) continue;
          if (cq.endsWith("Observable")) continue;
          if (gq && -1 !== gq.indexOf(cq)) continue;
          const xq = qq[cq],
            uq = typeof xq;
          if ("function" !== uq) try {
            if ("object" === uq)
              if (xq instanceof Uint8Array) Eq[cq] = Uint8Array.from(xq);
              else if (xq instanceof Array) {
              if (Eq[cq] = [], xq.length > 0)
                if ("object" == typeof xq[0])
                  for (let qq = 0; qq < xq.length; qq++) {
                    const gq = lq(xq[qq], Eq, mq); - 1 === Eq[cq].indexOf(gq) && Eq[cq].push(gq)
                  } else Eq[cq] = xq.slice(0)
            } else Eq[cq] = lq(xq, Eq, mq);
            else Eq[cq] = xq
          } catch (Aq) {
            Yq.b.Warn(Aq.message)
          }
        }
      }
    }
  },
  38677: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => lq,
      h: () => Oq,
      i: () => mq,
      k: () => xq
    });
    var Yq = gq(37289);
    class lq {
      constructor(qq, Eq, gq) {
        this.gradient = qq, this.color1 = Eq, this.color2 = gq
      }
      getColorToRef(qq) {
        this.color2 ? Yq.g.LerpToRef(this.color1, this.color2, Math.random(), qq) : qq.WG(this.color1)
      }
    }
    class Oq {
      constructor(qq, Eq) {
        this.gradient = qq, this.color = Eq
      }
    }
    class mq {
      constructor(qq, Eq, gq) {
        this.gradient = qq, this.factor1 = Eq, this.factor2 = gq
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class xq {
      static GetCurrentGradient(qq, Eq, gq) {
        if (Eq[0].gradient > qq) return void gq(Eq[0], Eq[0], 1);
        for (let lq = 0; lq < Eq.length - 1; lq++) {
          const Yq = Eq[lq],
            Oq = Eq[lq + 1];
          if (qq >= Yq.gradient && qq <= Oq.gradient) {
            return void gq(Yq, Oq, (qq - Yq.gradient) / (Oq.gradient - Yq.gradient))
          }
        }
        const Yq = Eq.length - 1;
        gq(Eq[Yq], Eq[Yq], 1)
      }
    }
  },
  38653: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq
    });
    class Yq {
      static _CheckLimit(qq, Eq) {
        let gq = Yq._LogLimitOutputs[qq];
        return gq ? gq.current++ : (gq = {
          limit: Eq,
          current: 1
        }, Yq._LogLimitOutputs[qq] = gq), gq.current <= gq.limit
      }
      static _GenerateLimitMessage(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const gq = Yq._LogLimitOutputs[qq];
        if (!gq || !Yq.MessageLimitReached) return;
        const lq = this._Levels[Eq];
        gq.current === gq.limit && Yq[lq.name](Yq.MessageLimitReached.replace(/%LIMIT%/g, "" + gq.limit).replace(/%TYPE%/g, lq.name ?? ""))
      }
      static _AddLogEntry(qq) {
        Yq._LogCache = qq + Yq._LogCache, Yq.OnNewCacheEntry && Yq.OnNewCacheEntry(qq)
      }
      static _FormatMessage(qq) {
        const Eq = qq => qq < 10 ? "0" + qq : "" + qq,
          gq = new Date;
        return "[" + Eq(gq.getHours()) + ":" + Eq(gq.getMinutes()) + ":" + Eq(gq.getSeconds()) + "]: " + qq
      }
      static _LogDisabled(qq, Eq) {}
      static _LogEnabled() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eq = arguments.length > 1 ? arguments[1] : void 0,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        const lq = Array.isArray(Eq) ? Eq[0] : Eq;
        if (void 0 !== gq && !Yq._CheckLimit(lq, gq)) return;
        const Oq = Yq._FormatMessage(lq),
          mq = this._Levels[qq],
          xq = Array.isArray(Eq) ? Eq.slice(1) : [];
        mq.logFunc && mq.logFunc("BJS - " + Oq, ...xq);
        const Aq = `<div style='color:${mq.color}'>${Oq}</div><br>`;
        Yq._AddLogEntry(Aq), Yq._GenerateLimitMessage(lq, qq)
      }
      static get LogCache() {
        return Yq._LogCache
      }
      static ClearLogCache() {
        Yq._LogCache = "", Yq._LogLimitOutputs = {}, Yq.errorsCount = 0
      }
      static set LogLevels(qq) {
        Yq.Log = Yq._LogDisabled, Yq.Warn = Yq._LogDisabled, Yq.Error = Yq._LogDisabled;
        const Eq = [Yq.MessageLogLevel, Yq.WarningLogLevel, Yq.ErrorLogLevel];
        for (const gq of Eq)
          if ((qq & gq) === gq) {
            const qq = this._Levels[gq];
            Yq[qq.name] = Yq._LogEnabled.bind(Yq, gq)
          }
      }
    }
    Yq.NoneLogLevel = 0, Yq.MessageLogLevel = 1, Yq.WarningLogLevel = 2, Yq.ErrorLogLevel = 4, Yq.AllLogLevel = 7, Yq.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Yq._LogCache = "", Yq._LogLimitOutputs = {}, Yq._Levels = [{}, {
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
    }], Yq.errorsCount = 0, Yq.Log = Yq._LogEnabled.bind(Yq, Yq.MessageLogLevel), Yq.Warn = Yq._LogEnabled.bind(Yq, Yq.WarningLogLevel), Yq.Error = Yq._LogEnabled.bind(Yq, Yq.ErrorLogLevel)
  },
  38679: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq
    });
    var Yq = gq(37139),
      lq = gq(37158),
      Oq = gq(38649);
    class mq {
      constructor() {
        this.direction1 = new Yq.q(0, 1, 0), this.direction2 = new Yq.q(0, 1, 0), this.minEmitBox = new Yq.q(-.5, -.5, -.5), this.maxEmitBox = new Yq.q(.5, .5, .5)
      }
      startDirectionFunction(qq, Eq, gq, Oq) {
        const mq = (0, lq.RandomRange)(this.direction1.x, this.direction2.x),
          xq = (0, lq.RandomRange)(this.direction1.y, this.direction2.y),
          Aq = (0, lq.RandomRange)(this.direction1.z, this.direction2.z);
        if (Oq) return Eq.x = mq, Eq.y = xq, void(Eq.z = Aq);
        Yq.q.TransformNormalFromFloatsToRef(mq, xq, Aq, qq, Eq)
      }
      startPositionFunction(qq, Eq, gq, Oq) {
        const mq = (0, lq.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          xq = (0, lq.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          Aq = (0, lq.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (Oq) return Eq.x = mq, Eq.y = xq, void(Eq.z = Aq);
        Yq.q.TransformCoordinatesFromFloatsToRef(mq, xq, Aq, qq, Eq)
      }
      clone() {
        const qq = new mq;
        return Oq.b.DeepCopy(this, qq), qq
      }
      applyToShader(qq) {
        qq.setVector3("direction1", this.direction1), qq.setVector3("direction2", this.direction2), qq.setVector3("minEmitBox", this.minEmitBox), qq.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(qq) {
        qq.addUniform("direction1", 3), qq.addUniform("direction2", 3), qq.addUniform("minEmitBox", 3), qq.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const qq = {};
        return qq.type = this.getClassName(), qq.direction1 = this.direction1.bYq(), qq.direction2 = this.direction2.bYq(), qq.minEmitBox = this.minEmitBox.bYq(), qq.maxEmitBox = this.maxEmitBox.bYq(), qq
      }
      parse(qq) {
        Yq.q.FromArrayToRef(qq.direction1, 0, this.direction1), Yq.q.FromArrayToRef(qq.direction2, 0, this.direction2), Yq.q.FromArrayToRef(qq.minEmitBox, 0, this.minEmitBox), Yq.q.FromArrayToRef(qq.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38646: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => xq,
      e: () => mq
    });
    var Yq = gq(37139),
      lq = gq(37158),
      Oq = gq(38649);
    class mq {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = qq, this.height = Eq, this.radiusRange = gq, this.directionRandomizer = lq, this._tempVector = Yq.q.Zero()
      }
      startDirectionFunction(qq, Eq, gq, Oq, mq) {
        gq.position.subtractToRef(qq.getTranslation(), this._tempVector), this._tempVector.normalize(), Yq.q.TransformNormalToRef(this._tempVector, mq, this._tempVector);
        const xq = (0, lq.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let Aq = Math.atan2(this._tempVector.x, this._tempVector.z);
        Aq += (0, lq.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = xq, this._tempVector.x = Math.sin(Aq), this._tempVector.z = Math.cos(Aq), this._tempVector.normalize(), Oq ? Eq.WG(this._tempVector) : Yq.q.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, qq, Eq)
      }
      startPositionFunction(qq, Eq, gq, Oq) {
        const mq = (0, lq.RandomRange)(-this.height / 2, this.height / 2),
          xq = (0, lq.RandomRange)(0, 2 * Math.PI),
          Aq = (0, lq.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          cq = Math.sqrt(Aq) * this.radius,
          uq = cq * Math.cos(xq),
          Bq = cq * Math.sin(xq);
        Oq ? Eq.Vqq(uq, mq, Bq) : Yq.q.TransformCoordinatesFromFloatsToRef(uq, mq, Bq, qq, Eq)
      }
      clone() {
        const qq = new mq(this.radius, this.directionRandomizer);
        return Oq.b.DeepCopy(this, qq), qq
      }
      applyToShader(qq) {
        qq.setFloat("radius", this.radius), qq.setFloat("height", this.height), qq.setFloat("radiusRange", this.radiusRange), qq.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(qq) {
        qq.addUniform("radius", 1), qq.addUniform("height", 1), qq.addUniform("radiusRange", 1), qq.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const qq = {};
        return qq.type = this.getClassName(), qq.radius = this.radius, qq.height = this.height, qq.radiusRange = this.radiusRange, qq.directionRandomizer = this.directionRandomizer, qq
      }
      parse(qq) {
        this.radius = qq.radius, this.height = qq.height, this.radiusRange = qq.radiusRange, this.directionRandomizer = qq.directionRandomizer
      }
    }
    class xq extends mq {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Yq.q(0, 1, 0),
          Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Yq.q(0, 1, 0);
        super(qq, Eq, gq), this.direction1 = lq, this.direction2 = Oq
      }
      startDirectionFunction(qq, Eq, gq, Oq) {
        const mq = (0, lq.RandomRange)(this.direction1.x, this.direction2.x),
          xq = (0, lq.RandomRange)(this.direction1.y, this.direction2.y),
          Aq = (0, lq.RandomRange)(this.direction1.z, this.direction2.z);
        Oq ? Eq.Vqq(mq, xq, Aq) : Yq.q.TransformNormalFromFloatsToRef(mq, xq, Aq, qq, Eq)
      }
      clone() {
        const qq = new xq(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return Oq.b.DeepCopy(this, qq), qq
      }
      applyToShader(qq) {
        qq.setFloat("radius", this.radius), qq.setFloat("height", this.height), qq.setFloat("radiusRange", this.radiusRange), qq.setVector3("direction1", this.direction1), qq.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(qq) {
        qq.addUniform("radius", 1), qq.addUniform("height", 1), qq.addUniform("radiusRange", 1), qq.addUniform("direction1", 3), qq.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const qq = super.serialize();
        return qq.direction1 = this.direction1.bYq(), qq.direction2 = this.direction2.bYq(), qq
      }
      parse(qq) {
        super.parse(qq), Yq.q.FromArrayToRef(qq.direction1, 0, this.direction1), Yq.q.FromArrayToRef(qq.direction2, 0, this.direction2)
      }
    }
  },
  38746: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Bq
    });
    const Yq = .5 * (Math.sqrt(3) - 1),
      lq = (3 - Math.sqrt(3)) / 6,
      Oq = 1 / 3,
      mq = 1 / 6,
      xq = (Math.sqrt(5) - 1) / 4,
      Aq = (5 - Math.sqrt(5)) / 20,
      cq = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      uq = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const Bq = class {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const Eq = "function" == typeof qq ? qq : function(qq) {
          let Eq = 0,
            gq = 0,
            Yq = 0,
            lq = 1;
          const Oq = function() {
            let qq = 4022871197;
            return function(Eq) {
              Eq = Eq.toString();
              for (let gq = 0; gq < Eq.length; gq++) {
                qq += Eq.charCodeAt(gq);
                let Yq = .02519603282416938 * qq;
                qq = Yq >>> 0, Yq -= qq, Yq *= qq, qq = Yq >>> 0, Yq -= qq, qq += 4294967296 * Yq
              }
              return 2.3283064365386963e-10 * (qq >>> 0)
            }
          }();
          Eq = Oq(" "), gq = Oq(" "), Yq = Oq(" "), Eq -= Oq(qq), Eq < 0 && (Eq += 1);
          gq -= Oq(qq), gq < 0 && (gq += 1);
          Yq -= Oq(qq), Yq < 0 && (Yq += 1);
          return function() {
            const qq = 2091639 * Eq + 2.3283064365386963e-10 * lq;
            return Eq = gq, gq = Yq, Yq = qq - (lq = 0 | qq)
          }
        }(qq);
        this.p = function(qq) {
          const Eq = new Uint8Array(256);
          for (let gq = 0; gq < 256; gq++) Eq[gq] = gq;
          for (let gq = 0; gq < 255; gq++) {
            const Yq = gq + ~~(qq() * (256 - gq)),
              lq = Eq[gq];
            Eq[gq] = Eq[Yq], Eq[Yq] = lq
          }
          return Eq
        }(Eq), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let gq = 0; gq < 512; gq++) this.perm[gq] = this.p[255 & gq], this.permMod12[gq] = this.perm[gq] % 12
      }
      noise2D(qq, Eq) {
        const gq = this.permMod12,
          Oq = this.perm;
        let mq = 0,
          xq = 0,
          Aq = 0;
        const uq = (qq + Eq) * Yq,
          Bq = Math.floor(qq + uq),
          Wq = Math.floor(Eq + uq),
          Nq = (Bq + Wq) * lq,
          aq = qq - (Bq - Nq),
          Vq = Eq - (Wq - Nq);
        let dq, jq;
        aq > Vq ? (dq = 1, jq = 0) : (dq = 0, jq = 1);
        const Hq = aq - dq + lq,
          oq = Vq - jq + lq,
          Pq = aq - 1 + 2 * lq,
          Qq = Vq - 1 + 2 * lq,
          yq = 255 & Bq,
          tq = 255 & Wq;
        let rq = .5 - aq * aq - Vq * Vq;
        if (rq >= 0) {
          const qq = 3 * gq[yq + Oq[tq]];
          rq *= rq, mq = rq * rq * (cq[qq] * aq + cq[qq + 1] * Vq)
        }
        let vq = .5 - Hq * Hq - oq * oq;
        if (vq >= 0) {
          const qq = 3 * gq[yq + dq + Oq[tq + jq]];
          vq *= vq, xq = vq * vq * (cq[qq] * Hq + cq[qq + 1] * oq)
        }
        let hq = .5 - Pq * Pq - Qq * Qq;
        if (hq >= 0) {
          const qq = 3 * gq[yq + 1 + Oq[tq + 1]];
          hq *= hq, Aq = hq * hq * (cq[qq] * Pq + cq[qq + 1] * Qq)
        }
        return 70 * (mq + xq + Aq)
      }
      noise3D(qq, Eq, gq) {
        const Yq = this.permMod12,
          lq = this.perm;
        let xq, Aq, uq, Bq;
        const Wq = (qq + Eq + gq) * Oq,
          Nq = Math.floor(qq + Wq),
          aq = Math.floor(Eq + Wq),
          Vq = Math.floor(gq + Wq),
          dq = (Nq + aq + Vq) * mq,
          jq = qq - (Nq - dq),
          Hq = Eq - (aq - dq),
          oq = gq - (Vq - dq);
        let Pq, Qq, yq, tq, rq, vq;
        jq >= Hq ? Hq >= oq ? (Pq = 1, Qq = 0, yq = 0, tq = 1, rq = 1, vq = 0) : jq >= oq ? (Pq = 1, Qq = 0, yq = 0, tq = 1, rq = 0, vq = 1) : (Pq = 0, Qq = 0, yq = 1, tq = 1, rq = 0, vq = 1) : Hq < oq ? (Pq = 0, Qq = 0, yq = 1, tq = 0, rq = 1, vq = 1) : jq < oq ? (Pq = 0, Qq = 1, yq = 0, tq = 0, rq = 1, vq = 1) : (Pq = 0, Qq = 1, yq = 0, tq = 1, rq = 1, vq = 0);
        const hq = jq - Pq + mq,
          nq = Hq - Qq + mq,
          bq = oq - yq + mq,
          iq = jq - tq + 2 * mq,
          Zq = Hq - rq + 2 * mq,
          fq = oq - vq + 2 * mq,
          Mq = jq - 1 + .5,
          Tq = Hq - 1 + .5,
          zq = oq - 1 + .5,
          Sq = 255 & Nq,
          pq = 255 & aq,
          Gq = 255 & Vq;
        let Lq = .6 - jq * jq - Hq * Hq - oq * oq;
        if (Lq < 0) xq = 0;
        else {
          const qq = 3 * Yq[Sq + lq[pq + lq[Gq]]];
          Lq *= Lq, xq = Lq * Lq * (cq[qq] * jq + cq[qq + 1] * Hq + cq[qq + 2] * oq)
        }
        let Jq = .6 - hq * hq - nq * nq - bq * bq;
        if (Jq < 0) Aq = 0;
        else {
          const qq = 3 * Yq[Sq + Pq + lq[pq + Qq + lq[Gq + yq]]];
          Jq *= Jq, Aq = Jq * Jq * (cq[qq] * hq + cq[qq + 1] * nq + cq[qq + 2] * bq)
        }
        let kq = .6 - iq * iq - Zq * Zq - fq * fq;
        if (kq < 0) uq = 0;
        else {
          const qq = 3 * Yq[Sq + tq + lq[pq + rq + lq[Gq + vq]]];
          kq *= kq, uq = kq * kq * (cq[qq] * iq + cq[qq + 1] * Zq + cq[qq + 2] * fq)
        }
        let Rq = .6 - Mq * Mq - Tq * Tq - zq * zq;
        if (Rq < 0) Bq = 0;
        else {
          const qq = 3 * Yq[Sq + 1 + lq[pq + 1 + lq[Gq + 1]]];
          Rq *= Rq, Bq = Rq * Rq * (cq[qq] * Mq + cq[qq + 1] * Tq + cq[qq + 2] * zq)
        }
        return 32 * (xq + Aq + uq + Bq)
      }
      noise4D(qq, Eq, gq, Yq) {
        const lq = this.perm;
        let Oq, mq, cq, Bq, Wq;
        const Nq = (qq + Eq + gq + Yq) * xq,
          aq = Math.floor(qq + Nq),
          Vq = Math.floor(Eq + Nq),
          dq = Math.floor(gq + Nq),
          jq = Math.floor(Yq + Nq),
          Hq = (aq + Vq + dq + jq) * Aq,
          oq = qq - (aq - Hq),
          Pq = Eq - (Vq - Hq),
          Qq = gq - (dq - Hq),
          yq = Yq - (jq - Hq);
        let tq = 0,
          rq = 0,
          vq = 0,
          hq = 0;
        oq > Pq ? tq++ : rq++, oq > Qq ? tq++ : vq++, oq > yq ? tq++ : hq++, Pq > Qq ? rq++ : vq++, Pq > yq ? rq++ : hq++, Qq > yq ? vq++ : hq++;
        const nq = tq >= 3 ? 1 : 0,
          bq = rq >= 3 ? 1 : 0,
          iq = vq >= 3 ? 1 : 0,
          Zq = hq >= 3 ? 1 : 0,
          fq = tq >= 2 ? 1 : 0,
          Mq = rq >= 2 ? 1 : 0,
          Tq = vq >= 2 ? 1 : 0,
          zq = hq >= 2 ? 1 : 0,
          Sq = tq >= 1 ? 1 : 0,
          pq = rq >= 1 ? 1 : 0,
          Gq = vq >= 1 ? 1 : 0,
          Lq = hq >= 1 ? 1 : 0,
          Jq = oq - nq + Aq,
          kq = Pq - bq + Aq,
          Rq = Qq - iq + Aq,
          Uq = yq - Zq + Aq,
          Fq = oq - fq + 2 * Aq,
          sq = Pq - Mq + 2 * Aq,
          Xq = Qq - Tq + 2 * Aq,
          wq = yq - zq + 2 * Aq,
          Kq = oq - Sq + 3 * Aq,
          Cq = Pq - pq + 3 * Aq,
          Iq = Qq - Gq + 3 * Aq,
          eq = yq - Lq + 3 * Aq,
          Dq = oq - 1 + 4 * Aq,
          qE = Pq - 1 + 4 * Aq,
          EE = Qq - 1 + 4 * Aq,
          gE = yq - 1 + 4 * Aq,
          YE = 255 & aq,
          lE = 255 & Vq,
          OE = 255 & dq,
          mE = 255 & jq;
        let xE = .6 - oq * oq - Pq * Pq - Qq * Qq - yq * yq;
        if (xE < 0) Oq = 0;
        else {
          const qq = lq[YE + lq[lE + lq[OE + lq[mE]]]] % 32 * 4;
          xE *= xE, Oq = xE * xE * (uq[qq] * oq + uq[qq + 1] * Pq + uq[qq + 2] * Qq + uq[qq + 3] * yq)
        }
        let AE = .6 - Jq * Jq - kq * kq - Rq * Rq - Uq * Uq;
        if (AE < 0) mq = 0;
        else {
          const qq = lq[YE + nq + lq[lE + bq + lq[OE + iq + lq[mE + Zq]]]] % 32 * 4;
          AE *= AE, mq = AE * AE * (uq[qq] * Jq + uq[qq + 1] * kq + uq[qq + 2] * Rq + uq[qq + 3] * Uq)
        }
        let cE = .6 - Fq * Fq - sq * sq - Xq * Xq - wq * wq;
        if (cE < 0) cq = 0;
        else {
          const qq = lq[YE + fq + lq[lE + Mq + lq[OE + Tq + lq[mE + zq]]]] % 32 * 4;
          cE *= cE, cq = cE * cE * (uq[qq] * Fq + uq[qq + 1] * sq + uq[qq + 2] * Xq + uq[qq + 3] * wq)
        }
        let uE = .6 - Kq * Kq - Cq * Cq - Iq * Iq - eq * eq;
        if (uE < 0) Bq = 0;
        else {
          const qq = lq[YE + Sq + lq[lE + pq + lq[OE + Gq + lq[mE + Lq]]]] % 32 * 4;
          uE *= uE, Bq = uE * uE * (uq[qq] * Kq + uq[qq + 1] * Cq + uq[qq + 2] * Iq + uq[qq + 3] * eq)
        }
        let BE = .6 - Dq * Dq - qE * qE - EE * EE - gE * gE;
        if (BE < 0) Wq = 0;
        else {
          const qq = lq[YE + 1 + lq[lE + 1 + lq[OE + 1 + lq[mE + 1]]]] % 32 * 4;
          BE *= BE, Wq = BE * BE * (uq[qq] * Dq + uq[qq + 1] * qE + uq[qq + 2] * EE + uq[qq + 3] * gE)
        }
        return 27 * (Oq + mq + cq + Bq + Wq)
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);
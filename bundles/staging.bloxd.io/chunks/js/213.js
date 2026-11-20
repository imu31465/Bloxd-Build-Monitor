/*! For license information please see teusab.213.f702c383.chunk.js.LICENSE.txt */
export const id = 213;
export const ids = [213];
export const modules = {
  38803: (bb, ab, Ub) => {
    bb.exports = Mb;
    var Ab = Ub(333);

    function Mb(bb, ab) {
      if (!(this instanceof Mb)) return new Mb(bb, ab);
      var Ub = Ab.create();
      Ab.add(Ub, bb, ab), this.base = Ab.min(Ab.create(), bb, Ub), this.vec = Ab.clone(ab), this.max = Ab.max(Ab.create(), bb, Ub), this.mag = Ab.length(this.vec)
    }
    var Tb = Mb.prototype;
    Tb.width = function() {
      return this.vec[0]
    }, Tb.height = function() {
      return this.vec[1]
    }, Tb.depth = function() {
      return this.vec[2]
    }, Tb.x0 = function() {
      return this.base[0]
    }, Tb.y0 = function() {
      return this.base[1]
    }, Tb.z0 = function() {
      return this.base[2]
    }, Tb.x1 = function() {
      return this.max[0]
    }, Tb.y1 = function() {
      return this.max[1]
    }, Tb.z1 = function() {
      return this.max[2]
    }, Tb.translate = function(bb) {
      return Ab.add(this.max, this.max, bb), Ab.add(this.base, this.base, bb), this
    }, Tb.setPosition = function(bb) {
      return Ab.add(this.max, bb, this.vec), Ab.copy(this.base, bb), this
    }, Tb.expand = function(bb) {
      var ab = Ab.create(),
        Ub = Ab.create();
      return Ab.max(ab, bb.max, this.max), Ab.min(Ub, bb.base, this.base), Ab.subtract(ab, ab, Ub), new Mb(Ub, ab)
    }, Tb.intersects = function(bb) {
      return !(bb.base[0] > this.max[0]) && (!(bb.base[1] > this.max[1]) && (!(bb.base[2] > this.max[2]) && (!(bb.max[0] < this.base[0]) && (!(bb.max[1] < this.base[1]) && !(bb.max[2] < this.base[2])))))
    }, Tb.touches = function(bb) {
      var ab = this.union(bb);
      return null !== ab && (0 == ab.width() || 0 == ab.height() || 0 == ab.depth())
    }, Tb.union = function(bb) {
      if (!this.intersects(bb)) return null;
      var ab = Math.max(bb.base[0], this.base[0]),
        Ub = Math.max(bb.base[1], this.base[1]),
        Ab = Math.max(bb.base[2], this.base[2]);
      return new Mb([ab, Ub, Ab], [Math.min(bb.max[0], this.max[0]) - ab, Math.min(bb.max[1], this.max[1]) - Ub, Math.min(bb.max[2], this.max[2]) - Ab])
    }
  },
  38799: bb => {
    bb.exports = function(bb, ab, Ub, Ab, Mb, Tb) {
      var Eb = +ab[0],
        Yb = +ab[1],
        Bb = +ab[2],
        eb = +Ub[0],
        vb = +Ub[1],
        Lb = +Ub[2],
        Pb = Math.sqrt(eb * eb + vb * vb + Lb * Lb);
      if (0 === Pb) throw new Error("Can't raycast along a zero vector");
      return function(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb) {
        for (var vb = 0, Lb = Math.floor, Pb = 0 | Lb(ab), Xb = 0 | Lb(Ub), jb = 0 | Lb(Ab), Rb = Mb > 0 ? 1 : -1, kb = Tb > 0 ? 1 : -1, yb = Eb > 0 ? 1 : -1, Zb = Math.abs(1 / Mb), Db = Math.abs(1 / Tb), zb = Math.abs(1 / Eb), xb = Zb < 1 / 0 ? Zb * (Rb > 0 ? Pb + 1 - ab : ab - Pb) : 1 / 0, ib = Db < 1 / 0 ? Db * (kb > 0 ? Xb + 1 - Ub : Ub - Xb) : 1 / 0, fb = zb < 1 / 0 ? zb * (yb > 0 ? jb + 1 - Ab : Ab - jb) : 1 / 0, mb = -1; vb <= Yb;) {
          var pb = bb(Pb, Xb, jb);
          if (pb) return Bb && (Bb[0] = ab + vb * Mb, Bb[1] = Ub + vb * Tb, Bb[2] = Ab + vb * Eb), eb && (eb[0] = eb[1] = eb[2] = 0, 0 === mb && (eb[0] = -Rb), 1 === mb && (eb[1] = -kb), 2 === mb && (eb[2] = -yb)), pb;
          xb < ib ? xb < fb ? (Pb += Rb, vb = xb, xb += Zb, mb = 0) : (jb += yb, vb = fb, fb += zb, mb = 2) : ib < fb ? (Xb += kb, vb = ib, ib += Db, mb = 1) : (jb += yb, vb = fb, fb += zb, mb = 2)
        }
        return Bb && (Bb[0] = ab + vb * Mb, Bb[1] = Ub + vb * Tb, Bb[2] = Ab + vb * Eb), eb && (eb[0] = eb[1] = eb[2] = 0), 0
      }(bb, Eb, Yb, Bb, eb /= Pb, vb /= Pb, Lb /= Pb, Ab = "undefined" === typeof Ab ? 64 : +Ab, Mb, Tb)
    }
  },
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
  35970: (bb, ab) => {
    function Ub(bb) {
      if (bb && "object" === typeof bb) {
        var ab = bb.which || bb.keyCode || bb.charCode;
        ab && (bb = ab)
      }
      if ("number" === typeof bb) return Eb[bb];
      var Ub, Tb = String(bb);
      return (Ub = Ab[Tb.toLowerCase()]) ? Ub : (Ub = Mb[Tb.toLowerCase()]) || (1 === Tb.length ? Tb.charCodeAt(0) : void 0)
    }
    Ub.isEventKey = function(bb, ab) {
      if (bb && "object" === typeof bb) {
        var Ub = bb.which || bb.keyCode || bb.charCode;
        if (null === Ub || void 0 === Ub) return !1;
        if ("string" === typeof ab) {
          var Tb;
          if (Tb = Ab[ab.toLowerCase()]) return Tb === Ub;
          if (Tb = Mb[ab.toLowerCase()]) return Tb === Ub
        } else if ("number" === typeof ab) return ab === Ub;
        return !1
      }
    };
    var Ab = (ab = bb.exports = Ub).code = ab.codes = {
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
      Mb = ab.aliases = {
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
    for (Tb = 97; Tb < 123; Tb++) Ab[String.fromCharCode(Tb)] = Tb - 32;
    for (var Tb = 48; Tb < 58; Tb++) Ab[Tb - 48] = Tb;
    for (Tb = 1; Tb < 13; Tb++) Ab["f" + Tb] = Tb + 111;
    for (Tb = 0; Tb < 10; Tb++) Ab["numpad " + Tb] = Tb + 96;
    var Eb = ab.names = ab.title = {};
    for (Tb in Ab) Eb[Ab[Tb]] = Tb;
    for (var Yb in Mb) Ab[Yb] = Mb[Yb]
  },
  38788: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab
    });
    class Ab {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.MI = !1, this.vI = !1, this.hN = 30, this.sH = 0, this.yI = 100, this.vk = !1, this.fullscreen = !1, this.Sy = function(bb) {}, this.ZI = function(bb, ab, Ub) {}, this.pI = function() {}, this.bZ = function() {}, this.xI = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(bb) {}, this._data = new Mb(ab),
          function(bb) {
            if ("loading" === document.readyState) {
              var ab = () => {
                document.removeEventListener("readystatechange", ab), bb()
              };
              document.addEventListener("readystatechange", ab)
            } else setTimeout(bb, 0)
          }((() => {
            ! function(bb) {
              var ab = bb._data,
                Ub = ab.nowObject.now();
              ab.lastTickStarted = Ub, ab.lastFrameStarted = Ub, ab.lastRenderStarted = Ub, ab.frameCB = () => function(bb) {
                var ab = bb._data;
                requestAnimationFrame(ab.frameCB), Yb(bb);
                var Ub = ab.nowObject.now(),
                  Ab = Ub - ab.lastFrameStarted;
                if (ab.lastFrameStarted = Ub, bb.sH > 0) {
                  ab.renderAccum += Ab;
                  var Mb = 1e3 / bb.sH;
                  if (ab.renderAccum < Mb) return;
                  ab.renderAccum -= Mb, ab.renderAccum > Mb && (ab.renderAccum = Mb)
                }
                var Tb = Ub - ab.lastRenderStarted;
                ab.lastRenderStarted = Ub;
                var Eb = 1e3 / bb.hN,
                  Bb = (Ub - ab.lastTickStarted) / Eb;
                Bb < 0 && (Bb = 0);
                bb.ZI(Tb, Bb, Eb), setTimeout(Yb, 0, bb, !0)
              }(bb), ab.intervalCB = () => Yb(bb), requestAnimationFrame(ab.frameCB), ab.pollTime > 0 && (ab.intervalID = setInterval(ab.intervalCB, Math.max(ab.pollTime, 1e3 / bb.hN / 2)))
            }(this),
            function(bb, ab) {
              if (!ab) return;
              var Ub = !1,
                Ab = !1,
                Mb = bb => {
                  if (!!bb !== (Ub = ab === document.pointerLockElement))
                    if (bb) {
                      var Ab = ab.requestPointerLock();
                      Ab && Ab.catch && Ab.catch((bb => {}))
                    } else document.exitPointerLock()
                },
                Tb = bb => {
                  !!bb !== (Ab = ab === document.fullscreenElement) && (bb ? ab.requestFullscreen ? ab.requestFullscreen() : ab.webkitRequestFullscreen && ab.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (Ab => {
                Ub = ab === document.pointerLockElement, bb.xI(Ub)
              })), document.addEventListener("fullscreenchange", (Ub => {
                Ab = ab === document.fullscreenElement, bb.onFullscreenChanged(Ab)
              })), document.addEventListener("pointerlockerror", (Ab => {
                Ub = ab === document.pointerLockElement, bb.onPointerLockError(Ab)
              })), Object.defineProperty(bb, "vk", {
                get: () => Ub,
                set: Mb
              }), Object.defineProperty(bb, "fullscreen", {
                get: () => Ab,
                set: Tb
              }), ab.addEventListener("click", (ab => {
                bb.MI && Mb(!0), bb.vI && Tb(!0)
              }));
              var Eb = () => bb.bZ();
              if (window.ResizeObserver) {
                new ResizeObserver(Eb).observe(ab)
              } else window.addEventListener("resize", Eb)
            }(this, bb), this.pI()
          }))
      }
    }

    function Mb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = bb, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var Tb = 3,
      Eb = 20;

    function Yb(bb) {
      for (var ab = bb._data, Ub = 1e3 / bb.hN, Ab = ab.nowObject.now() + Eb, Mb = 0; ab.nowObject.now() >= ab.lastTickStarted + Ub && ab.nowObject.now() < Ab && ++Mb <= Tb;) bb.Sy(Ub), ab.lastTickStarted += Ub;
      var Yb = 5 * (Ub + 5),
        Bb = ab.nowObject.now();
      if (Bb - ab.lastTickStarted > Yb)
        for (; Bb >= ab.lastTickStarted + Ub;) ab.lastTickStarted += Ub
    }
  },
  36096: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb
    });
    var Ab = Ub(52);
    const Mb = Ab.useLayoutEffect;
    const Tb = function(bb) {
      var ab = (0, Ab.useRef)(bb);
      return Mb((function() {
        ab.current = bb
      })), ab
    };
    var Eb = function(bb) {
      var ab = Tb(bb);
      (0, Ab.useEffect)((function() {
        var bb = function(bb) {
          var Ub;
          if (null != ab.current && (Ub = ab.current(bb)), bb.defaultPrevented && (bb.returnValue = ""), "string" === typeof Ub) return bb.returnValue = Ub, Ub
        };
        return window.addEventListener("beforeunload", bb),
          function() {
            window.removeEventListener("beforeunload", bb)
          }
      }), [])
    }
  },
  36005: bb => {
    var ab, Ub = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Ab = /OS X/.test(Ub),
      Mb = /Opera/.test(Ub),
      Tb = !/like Gecko/.test(Ub) && !Mb,
      Eb = bb.exports = {
        0: Ab ? "<menu>" : "<UNK>",
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
        93: Ab ? "<meta>" : "<menu>",
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
        173: Ab && Tb ? "-" : "<volume-mute>",
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
        231: Mb ? "`" : "<unicode>",
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
    for (ab = 58; ab < 65; ++ab) Eb[ab] = String.fromCharCode(ab);
    for (ab = 48; ab < 58; ++ab) Eb[ab] = ab - 48 + "";
    for (ab = 65; ab < 91; ++ab) Eb[ab] = String.fromCharCode(ab);
    for (ab = 96; ab < 106; ++ab) Eb[ab] = "<num-" + (ab - 96) + ">";
    for (ab = 112; ab < 136; ++ab) Eb[ab] = "F" + (ab - 111)
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
  },
  37982: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb
    });
    var Ab = Ub(37989);
    const Mb = (bb, ab, Ub) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : Ub && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(ab) : null;
    class Tb {
      static DeepCopy(bb, ab, Ub, Tb) {
        let Eb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Yb = function(bb) {
          const ab = [];
          do {
            const Ub = Object.getOwnPropertyNames(bb);
            for (const bb of Ub) - 1 === ab.indexOf(bb) && ab.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return ab
        }(bb);
        for (const eb of Yb) {
          if ("_" === eb[0] && (!Tb || -1 === Tb.indexOf(eb))) continue;
          if (eb.endsWith("Observable")) continue;
          if (Ub && -1 !== Ub.indexOf(eb)) continue;
          const Yb = bb[eb],
            vb = typeof Yb;
          if ("function" !== vb) try {
            if ("object" === vb)
              if (Yb instanceof Uint8Array) ab[eb] = Uint8Array.from(Yb);
              else if (Yb instanceof Array) {
              if (ab[eb] = [], Yb.length > 0)
                if ("object" == typeof Yb[0])
                  for (let bb = 0; bb < Yb.length; bb++) {
                    const Ub = Mb(Yb[bb], ab, Eb); - 1 === ab[eb].indexOf(Ub) && ab[eb].push(Ub)
                  } else ab[eb] = Yb.slice(0)
            } else ab[eb] = Mb(Yb, ab, Eb);
            else ab[eb] = Yb
          } catch (Bb) {
            Ab.e.Warn(Bb.message)
          }
        }
      }
    }
  },
  38015: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb,
      d: () => Tb,
      e: () => Eb,
      g: () => Yb
    });
    var Ab = Ub(36593);
    class Mb {
      constructor(bb, ab, Ub) {
        this.gradient = bb, this.color1 = ab, this.color2 = Ub
      }
      getColorToRef(bb) {
        this.color2 ? Ab.g.LerpToRef(this.color1, this.color2, Math.random(), bb) : bb.EUb(this.color1)
      }
    }
    class Tb {
      constructor(bb, ab) {
        this.gradient = bb, this.color = ab
      }
    }
    class Eb {
      constructor(bb, ab, Ub) {
        this.gradient = bb, this.factor1 = ab, this.factor2 = Ub
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class Yb {
      static GetCurrentGradient(bb, ab, Ub) {
        if (ab[0].gradient > bb) return void Ub(ab[0], ab[0], 1);
        for (let Mb = 0; Mb < ab.length - 1; Mb++) {
          const Ab = ab[Mb],
            Tb = ab[Mb + 1];
          if (bb >= Ab.gradient && bb <= Tb.gradient) {
            return void Ub(Ab, Tb, (bb - Ab.gradient) / (Tb.gradient - Ab.gradient))
          }
        }
        const Ab = ab.length - 1;
        Ub(ab[Ab], ab[Ab], 1)
      }
    }
  },
  37989: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab
    });
    class Ab {
      static _CheckLimit(bb, ab) {
        let Ub = Ab._LogLimitOutputs[bb];
        return Ub ? Ub.current++ : (Ub = {
          limit: ab,
          current: 1
        }, Ab._LogLimitOutputs[bb] = Ub), Ub.current <= Ub.limit
      }
      static _GenerateLimitMessage(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Ub = Ab._LogLimitOutputs[bb];
        if (!Ub || !Ab.MessageLimitReached) return;
        const Mb = this._Levels[ab];
        Ub.current === Ub.limit && Ab[Mb.name](Ab.MessageLimitReached.replace(/%LIMIT%/g, "" + Ub.limit).replace(/%TYPE%/g, Mb.name ?? ""))
      }
      static _AddLogEntry(bb) {
        Ab._LogCache = bb + Ab._LogCache, Ab.OnNewCacheEntry && Ab.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const ab = bb => bb < 10 ? "0" + bb : "" + bb,
          Ub = new Date;
        return "[" + ab(Ub.getHours()) + ":" + ab(Ub.getMinutes()) + ":" + ab(Ub.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, ab) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ab = arguments.length > 1 ? arguments[1] : void 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        const Mb = Array.isArray(ab) ? ab[0] : ab;
        if (void 0 !== Ub && !Ab._CheckLimit(Mb, Ub)) return;
        const Tb = Ab._FormatMessage(Mb),
          Eb = this._Levels[bb],
          Yb = Array.isArray(ab) ? ab.slice(1) : [];
        Eb.logFunc && Eb.logFunc("BJS - " + Tb, ...Yb);
        const Bb = `<div style='color:${Eb.color}'>${Tb}</div><br>`;
        Ab._AddLogEntry(Bb), Ab._GenerateLimitMessage(Mb, bb)
      }
      static get LogCache() {
        return Ab._LogCache
      }
      static ClearLogCache() {
        Ab._LogCache = "", Ab._LogLimitOutputs = {}, Ab.errorsCount = 0
      }
      static set LogLevels(bb) {
        Ab.Log = Ab._LogDisabled, Ab.Warn = Ab._LogDisabled, Ab.Error = Ab._LogDisabled;
        const ab = [Ab.MessageLogLevel, Ab.WarningLogLevel, Ab.ErrorLogLevel];
        for (const Ub of ab)
          if ((bb & Ub) === Ub) {
            const bb = this._Levels[Ub];
            Ab[bb.name] = Ab._LogEnabled.bind(Ab, Ub)
          }
      }
    }
    Ab.NoneLogLevel = 0, Ab.MessageLogLevel = 1, Ab.WarningLogLevel = 2, Ab.ErrorLogLevel = 4, Ab.AllLogLevel = 7, Ab.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Ab._LogCache = "", Ab._LogLimitOutputs = {}, Ab._Levels = [{}, {
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
    }], Ab.errorsCount = 0, Ab.Log = Ab._LogEnabled.bind(Ab, Ab.MessageLogLevel), Ab.Warn = Ab._LogEnabled.bind(Ab, Ab.WarningLogLevel), Ab.Error = Ab._LogEnabled.bind(Ab, Ab.ErrorLogLevel)
  },
  38020: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb
    });
    var Ab = Ub(36401),
      Mb = Ub(36436),
      Tb = Ub(37982);
    class Eb {
      constructor() {
        this.direction1 = new Ab.m(0, 1, 0), this.direction2 = new Ab.m(0, 1, 0), this.minEmitBox = new Ab.m(-.5, -.5, -.5), this.maxEmitBox = new Ab.m(.5, .5, .5)
      }
      startDirectionFunction(bb, ab, Ub, Tb) {
        const Eb = (0, Mb.RandomRange)(this.direction1.x, this.direction2.x),
          Yb = (0, Mb.RandomRange)(this.direction1.y, this.direction2.y),
          Bb = (0, Mb.RandomRange)(this.direction1.z, this.direction2.z);
        if (Tb) return ab.x = Eb, ab.y = Yb, void(ab.z = Bb);
        Ab.m.TransformNormalFromFloatsToRef(Eb, Yb, Bb, bb, ab)
      }
      startPositionFunction(bb, ab, Ub, Tb) {
        const Eb = (0, Mb.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          Yb = (0, Mb.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          Bb = (0, Mb.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (Tb) return ab.x = Eb, ab.y = Yb, void(ab.z = Bb);
        Ab.m.TransformCoordinatesFromFloatsToRef(Eb, Yb, Bb, bb, ab)
      }
      clone() {
        const bb = new Eb;
        return Tb.e.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setVector3("direction1", this.direction1), bb.setVector3("direction2", this.direction2), bb.setVector3("minEmitBox", this.minEmitBox), bb.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(bb) {
        bb.addUniform("direction1", 3), bb.addUniform("direction2", 3), bb.addUniform("minEmitBox", 3), bb.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.direction1 = this.direction1.qUb(), bb.direction2 = this.direction2.qUb(), bb.minEmitBox = this.minEmitBox.qUb(), bb.maxEmitBox = this.maxEmitBox.qUb(), bb
      }
      parse(bb) {
        Ab.m.FromArrayToRef(bb.direction1, 0, this.direction1), Ab.m.FromArrayToRef(bb.direction2, 0, this.direction2), Ab.m.FromArrayToRef(bb.minEmitBox, 0, this.minEmitBox), Ab.m.FromArrayToRef(bb.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  37979: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb,
      d: () => Eb
    });
    var Ab = Ub(36401),
      Mb = Ub(36436),
      Tb = Ub(37982);
    class Eb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = bb, this.height = ab, this.radiusRange = Ub, this.directionRandomizer = Mb, this._tempVector = Ab.m.Zero()
      }
      startDirectionFunction(bb, ab, Ub, Tb, Eb) {
        Ub.position.subtractToRef(bb.getTranslation(), this._tempVector), this._tempVector.normalize(), Ab.m.TransformNormalToRef(this._tempVector, Eb, this._tempVector);
        const Yb = (0, Mb.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let Bb = Math.atan2(this._tempVector.x, this._tempVector.z);
        Bb += (0, Mb.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = Yb, this._tempVector.x = Math.sin(Bb), this._tempVector.z = Math.cos(Bb), this._tempVector.normalize(), Tb ? ab.EUb(this._tempVector) : Ab.m.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, bb, ab)
      }
      startPositionFunction(bb, ab, Ub, Tb) {
        const Eb = (0, Mb.RandomRange)(-this.height / 2, this.height / 2),
          Yb = (0, Mb.RandomRange)(0, 2 * Math.PI),
          Bb = (0, Mb.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          eb = Math.sqrt(Bb) * this.radius,
          vb = eb * Math.cos(Yb),
          Lb = eb * Math.sin(Yb);
        Tb ? ab.K9(vb, Eb, Lb) : Ab.m.TransformCoordinatesFromFloatsToRef(vb, Eb, Lb, bb, ab)
      }
      clone() {
        const bb = new Eb(this.radius, this.directionRandomizer);
        return Tb.e.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setFloat("radius", this.radius), bb.setFloat("height", this.height), bb.setFloat("radiusRange", this.radiusRange), bb.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(bb) {
        bb.addUniform("radius", 1), bb.addUniform("height", 1), bb.addUniform("radiusRange", 1), bb.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.radius = this.radius, bb.height = this.height, bb.radiusRange = this.radiusRange, bb.directionRandomizer = this.directionRandomizer, bb
      }
      parse(bb) {
        this.radius = bb.radius, this.height = bb.height, this.radiusRange = bb.radiusRange, this.directionRandomizer = bb.directionRandomizer
      }
    }
    class Yb extends Eb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ab.m(0, 1, 0),
          Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Ab.m(0, 1, 0);
        super(bb, ab, Ub), this.direction1 = Mb, this.direction2 = Tb
      }
      startDirectionFunction(bb, ab, Ub, Tb) {
        const Eb = (0, Mb.RandomRange)(this.direction1.x, this.direction2.x),
          Yb = (0, Mb.RandomRange)(this.direction1.y, this.direction2.y),
          Bb = (0, Mb.RandomRange)(this.direction1.z, this.direction2.z);
        Tb ? ab.K9(Eb, Yb, Bb) : Ab.m.TransformNormalFromFloatsToRef(Eb, Yb, Bb, bb, ab)
      }
      clone() {
        const bb = new Yb(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return Tb.e.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setFloat("radius", this.radius), bb.setFloat("height", this.height), bb.setFloat("radiusRange", this.radiusRange), bb.setVector3("direction1", this.direction1), bb.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(bb) {
        bb.addUniform("radius", 1), bb.addUniform("height", 1), bb.addUniform("radiusRange", 1), bb.addUniform("direction1", 3), bb.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const bb = super.serialize();
        return bb.direction1 = this.direction1.qUb(), bb.direction2 = this.direction2.qUb(), bb
      }
      parse(bb) {
        super.parse(bb), Ab.m.FromArrayToRef(bb.direction1, 0, this.direction1), Ab.m.FromArrayToRef(bb.direction2, 0, this.direction2)
      }
    }
  },
  38098: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Lb
    });
    const Ab = .5 * (Math.sqrt(3) - 1),
      Mb = (3 - Math.sqrt(3)) / 6,
      Tb = 1 / 3,
      Eb = 1 / 6,
      Yb = (Math.sqrt(5) - 1) / 4,
      Bb = (5 - Math.sqrt(5)) / 20,
      eb = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      vb = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const Lb = class {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const ab = "function" == typeof bb ? bb : function(bb) {
          let ab = 0,
            Ub = 0,
            Ab = 0,
            Mb = 1;
          const Tb = function() {
            let bb = 4022871197;
            return function(ab) {
              ab = ab.toString();
              for (let Ub = 0; Ub < ab.length; Ub++) {
                bb += ab.charCodeAt(Ub);
                let Ab = .02519603282416938 * bb;
                bb = Ab >>> 0, Ab -= bb, Ab *= bb, bb = Ab >>> 0, Ab -= bb, bb += 4294967296 * Ab
              }
              return 2.3283064365386963e-10 * (bb >>> 0)
            }
          }();
          ab = Tb(" "), Ub = Tb(" "), Ab = Tb(" "), ab -= Tb(bb), ab < 0 && (ab += 1);
          Ub -= Tb(bb), Ub < 0 && (Ub += 1);
          Ab -= Tb(bb), Ab < 0 && (Ab += 1);
          return function() {
            const bb = 2091639 * ab + 2.3283064365386963e-10 * Mb;
            return ab = Ub, Ub = Ab, Ab = bb - (Mb = 0 | bb)
          }
        }(bb);
        this.p = function(bb) {
          const ab = new Uint8Array(256);
          for (let Ub = 0; Ub < 256; Ub++) ab[Ub] = Ub;
          for (let Ub = 0; Ub < 255; Ub++) {
            const Ab = Ub + ~~(bb() * (256 - Ub)),
              Mb = ab[Ub];
            ab[Ub] = ab[Ab], ab[Ab] = Mb
          }
          return ab
        }(ab), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let Ub = 0; Ub < 512; Ub++) this.perm[Ub] = this.p[255 & Ub], this.permMod12[Ub] = this.perm[Ub] % 12
      }
      noise2D(bb, ab) {
        const Ub = this.permMod12,
          Tb = this.perm;
        let Eb = 0,
          Yb = 0,
          Bb = 0;
        const vb = (bb + ab) * Ab,
          Lb = Math.floor(bb + vb),
          Pb = Math.floor(ab + vb),
          Xb = (Lb + Pb) * Mb,
          jb = bb - (Lb - Xb),
          Rb = ab - (Pb - Xb);
        let kb, yb;
        jb > Rb ? (kb = 1, yb = 0) : (kb = 0, yb = 1);
        const Zb = jb - kb + Mb,
          Db = Rb - yb + Mb,
          zb = jb - 1 + 2 * Mb,
          xb = Rb - 1 + 2 * Mb,
          ib = 255 & Lb,
          fb = 255 & Pb;
        let mb = .5 - jb * jb - Rb * Rb;
        if (mb >= 0) {
          const bb = 3 * Ub[ib + Tb[fb]];
          mb *= mb, Eb = mb * mb * (eb[bb] * jb + eb[bb + 1] * Rb)
        }
        let pb = .5 - Zb * Zb - Db * Db;
        if (pb >= 0) {
          const bb = 3 * Ub[ib + kb + Tb[fb + yb]];
          pb *= pb, Yb = pb * pb * (eb[bb] * Zb + eb[bb + 1] * Db)
        }
        let Nb = .5 - zb * zb - xb * xb;
        if (Nb >= 0) {
          const bb = 3 * Ub[ib + 1 + Tb[fb + 1]];
          Nb *= Nb, Bb = Nb * Nb * (eb[bb] * zb + eb[bb + 1] * xb)
        }
        return 70 * (Eb + Yb + Bb)
      }
      noise3D(bb, ab, Ub) {
        const Ab = this.permMod12,
          Mb = this.perm;
        let Yb, Bb, vb, Lb;
        const Pb = (bb + ab + Ub) * Tb,
          Xb = Math.floor(bb + Pb),
          jb = Math.floor(ab + Pb),
          Rb = Math.floor(Ub + Pb),
          kb = (Xb + jb + Rb) * Eb,
          yb = bb - (Xb - kb),
          Zb = ab - (jb - kb),
          Db = Ub - (Rb - kb);
        let zb, xb, ib, fb, mb, pb;
        yb >= Zb ? Zb >= Db ? (zb = 1, xb = 0, ib = 0, fb = 1, mb = 1, pb = 0) : yb >= Db ? (zb = 1, xb = 0, ib = 0, fb = 1, mb = 0, pb = 1) : (zb = 0, xb = 0, ib = 1, fb = 1, mb = 0, pb = 1) : Zb < Db ? (zb = 0, xb = 0, ib = 1, fb = 0, mb = 1, pb = 1) : yb < Db ? (zb = 0, xb = 1, ib = 0, fb = 0, mb = 1, pb = 1) : (zb = 0, xb = 1, ib = 0, fb = 1, mb = 1, pb = 0);
        const Nb = yb - zb + Eb,
          Wb = Zb - xb + Eb,
          Hb = Db - ib + Eb,
          Ib = yb - fb + 2 * Eb,
          db = Zb - mb + 2 * Eb,
          Fb = Db - pb + 2 * Eb,
          hb = yb - 1 + .5,
          Gb = Zb - 1 + .5,
          Qb = Db - 1 + .5,
          qb = 255 & Xb,
          ub = 255 & jb,
          rb = 255 & Rb;
        let Kb = .6 - yb * yb - Zb * Zb - Db * Db;
        if (Kb < 0) Yb = 0;
        else {
          const bb = 3 * Ab[qb + Mb[ub + Mb[rb]]];
          Kb *= Kb, Yb = Kb * Kb * (eb[bb] * yb + eb[bb + 1] * Zb + eb[bb + 2] * Db)
        }
        let ob = .6 - Nb * Nb - Wb * Wb - Hb * Hb;
        if (ob < 0) Bb = 0;
        else {
          const bb = 3 * Ab[qb + zb + Mb[ub + xb + Mb[rb + ib]]];
          ob *= ob, Bb = ob * ob * (eb[bb] * Nb + eb[bb + 1] * Wb + eb[bb + 2] * Hb)
        }
        let lb = .6 - Ib * Ib - db * db - Fb * Fb;
        if (lb < 0) vb = 0;
        else {
          const bb = 3 * Ab[qb + fb + Mb[ub + mb + Mb[rb + pb]]];
          lb *= lb, vb = lb * lb * (eb[bb] * Ib + eb[bb + 1] * db + eb[bb + 2] * Fb)
        }
        let tb = .6 - hb * hb - Gb * Gb - Qb * Qb;
        if (tb < 0) Lb = 0;
        else {
          const bb = 3 * Ab[qb + 1 + Mb[ub + 1 + Mb[rb + 1]]];
          tb *= tb, Lb = tb * tb * (eb[bb] * hb + eb[bb + 1] * Gb + eb[bb + 2] * Qb)
        }
        return 32 * (Yb + Bb + vb + Lb)
      }
      noise4D(bb, ab, Ub, Ab) {
        const Mb = this.perm;
        let Tb, Eb, eb, Lb, Pb;
        const Xb = (bb + ab + Ub + Ab) * Yb,
          jb = Math.floor(bb + Xb),
          Rb = Math.floor(ab + Xb),
          kb = Math.floor(Ub + Xb),
          yb = Math.floor(Ab + Xb),
          Zb = (jb + Rb + kb + yb) * Bb,
          Db = bb - (jb - Zb),
          zb = ab - (Rb - Zb),
          xb = Ub - (kb - Zb),
          ib = Ab - (yb - Zb);
        let fb = 0,
          mb = 0,
          pb = 0,
          Nb = 0;
        Db > zb ? fb++ : mb++, Db > xb ? fb++ : pb++, Db > ib ? fb++ : Nb++, zb > xb ? mb++ : pb++, zb > ib ? mb++ : Nb++, xb > ib ? pb++ : Nb++;
        const Wb = fb >= 3 ? 1 : 0,
          Hb = mb >= 3 ? 1 : 0,
          Ib = pb >= 3 ? 1 : 0,
          db = Nb >= 3 ? 1 : 0,
          Fb = fb >= 2 ? 1 : 0,
          hb = mb >= 2 ? 1 : 0,
          Gb = pb >= 2 ? 1 : 0,
          Qb = Nb >= 2 ? 1 : 0,
          qb = fb >= 1 ? 1 : 0,
          ub = mb >= 1 ? 1 : 0,
          rb = pb >= 1 ? 1 : 0,
          Kb = Nb >= 1 ? 1 : 0,
          ob = Db - Wb + Bb,
          lb = zb - Hb + Bb,
          tb = xb - Ib + Bb,
          wb = ib - db + Bb,
          sb = Db - Fb + 2 * Bb,
          gb = zb - hb + 2 * Bb,
          Cb = xb - Gb + 2 * Bb,
          Vb = ib - Qb + 2 * Bb,
          Ob = Db - qb + 3 * Bb,
          cb = zb - ub + 3 * Bb,
          Jb = xb - rb + 3 * Bb,
          nb = ib - Kb + 3 * Bb,
          Sb = Db - 1 + 4 * Bb,
          ba = zb - 1 + 4 * Bb,
          aa = xb - 1 + 4 * Bb,
          Ua = ib - 1 + 4 * Bb,
          Aa = 255 & jb,
          Ma = 255 & Rb,
          Ta = 255 & kb,
          Ea = 255 & yb;
        let Ya = .6 - Db * Db - zb * zb - xb * xb - ib * ib;
        if (Ya < 0) Tb = 0;
        else {
          const bb = Mb[Aa + Mb[Ma + Mb[Ta + Mb[Ea]]]] % 32 * 4;
          Ya *= Ya, Tb = Ya * Ya * (vb[bb] * Db + vb[bb + 1] * zb + vb[bb + 2] * xb + vb[bb + 3] * ib)
        }
        let Ba = .6 - ob * ob - lb * lb - tb * tb - wb * wb;
        if (Ba < 0) Eb = 0;
        else {
          const bb = Mb[Aa + Wb + Mb[Ma + Hb + Mb[Ta + Ib + Mb[Ea + db]]]] % 32 * 4;
          Ba *= Ba, Eb = Ba * Ba * (vb[bb] * ob + vb[bb + 1] * lb + vb[bb + 2] * tb + vb[bb + 3] * wb)
        }
        let ea = .6 - sb * sb - gb * gb - Cb * Cb - Vb * Vb;
        if (ea < 0) eb = 0;
        else {
          const bb = Mb[Aa + Fb + Mb[Ma + hb + Mb[Ta + Gb + Mb[Ea + Qb]]]] % 32 * 4;
          ea *= ea, eb = ea * ea * (vb[bb] * sb + vb[bb + 1] * gb + vb[bb + 2] * Cb + vb[bb + 3] * Vb)
        }
        let va = .6 - Ob * Ob - cb * cb - Jb * Jb - nb * nb;
        if (va < 0) Lb = 0;
        else {
          const bb = Mb[Aa + qb + Mb[Ma + ub + Mb[Ta + rb + Mb[Ea + Kb]]]] % 32 * 4;
          va *= va, Lb = va * va * (vb[bb] * Ob + vb[bb + 1] * cb + vb[bb + 2] * Jb + vb[bb + 3] * nb)
        }
        let La = .6 - Sb * Sb - ba * ba - aa * aa - Ua * Ua;
        if (La < 0) Pb = 0;
        else {
          const bb = Mb[Aa + 1 + Mb[Ma + 1 + Mb[Ta + 1 + Mb[Ea + 1]]]] % 32 * 4;
          La *= La, Pb = La * La * (vb[bb] * Sb + vb[bb + 1] * ba + vb[bb + 2] * aa + vb[bb + 3] * Ua)
        }
        return 27 * (Tb + Eb + eb + Lb + Pb)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
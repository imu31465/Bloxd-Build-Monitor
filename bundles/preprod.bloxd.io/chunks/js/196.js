/*! For license information please see 7jvyee.196.0d6d3c3b.chunk.js.LICENSE.txt */
export const id = 196;
export const ids = [196];
export const modules = {
  38172: (yb, bb, Wy) => {
    yb.exports = hy;
    var Uy = Wy(271);

    function hy(yb, bb) {
      if (!(this instanceof hy)) return new hy(yb, bb);
      var Wy = Uy.create();
      Uy.add(Wy, yb, bb), this.base = Uy.min(Uy.create(), yb, Wy), this.vec = Uy.clone(bb), this.max = Uy.max(Uy.create(), yb, Wy), this.mag = Uy.length(this.vec)
    }
    var fy = hy.prototype;
    fy.width = function() {
      return this.vec[0]
    }, fy.height = function() {
      return this.vec[1]
    }, fy.depth = function() {
      return this.vec[2]
    }, fy.x0 = function() {
      return this.base[0]
    }, fy.y0 = function() {
      return this.base[1]
    }, fy.z0 = function() {
      return this.base[2]
    }, fy.x1 = function() {
      return this.max[0]
    }, fy.y1 = function() {
      return this.max[1]
    }, fy.z1 = function() {
      return this.max[2]
    }, fy.translate = function(yb) {
      return Uy.add(this.max, this.max, yb), Uy.add(this.base, this.base, yb), this
    }, fy.setPosition = function(yb) {
      return Uy.add(this.max, yb, this.vec), Uy.copy(this.base, yb), this
    }, fy.expand = function(yb) {
      var bb = Uy.create(),
        Wy = Uy.create();
      return Uy.max(bb, yb.max, this.max), Uy.min(Wy, yb.base, this.base), Uy.subtract(bb, bb, Wy), new hy(Wy, bb)
    }, fy.intersects = function(yb) {
      return !(yb.base[0] > this.max[0]) && (!(yb.base[1] > this.max[1]) && (!(yb.base[2] > this.max[2]) && (!(yb.max[0] < this.base[0]) && (!(yb.max[1] < this.base[1]) && !(yb.max[2] < this.base[2])))))
    }, fy.touches = function(yb) {
      var bb = this.union(yb);
      return null !== bb && (0 == bb.width() || 0 == bb.height() || 0 == bb.depth())
    }, fy.union = function(yb) {
      if (!this.intersects(yb)) return null;
      var bb = Math.max(yb.base[0], this.base[0]),
        Wy = Math.max(yb.base[1], this.base[1]),
        Uy = Math.max(yb.base[2], this.base[2]);
      return new hy([bb, Wy, Uy], [Math.min(yb.max[0], this.max[0]) - bb, Math.min(yb.max[1], this.max[1]) - Wy, Math.min(yb.max[2], this.max[2]) - Uy])
    }
  },
  35479: yb => {
    yb.exports = function yb(bb, Wy) {
      if (bb === Wy) return !0;
      if (bb && Wy && "object" == typeof bb && "object" == typeof Wy) {
        if (bb.constructor !== Wy.constructor) return !1;
        var Uy, hy, fy;
        if (Array.isArray(bb)) {
          if ((Uy = bb.length) != Wy.length) return !1;
          for (hy = Uy; 0 !== hy--;)
            if (!yb(bb[hy], Wy[hy])) return !1;
          return !0
        }
        if (bb.constructor === RegExp) return bb.source === Wy.source && bb.flags === Wy.flags;
        if (bb.valueOf !== Object.prototype.valueOf) return bb.valueOf() === Wy.valueOf();
        if (bb.toString !== Object.prototype.toString) return bb.toString() === Wy.toString();
        if ((Uy = (fy = Object.keys(bb)).length) !== Object.keys(Wy).length) return !1;
        for (hy = Uy; 0 !== hy--;)
          if (!Object.prototype.hasOwnProperty.call(Wy, fy[hy])) return !1;
        for (hy = Uy; 0 !== hy--;) {
          var Zy = fy[hy];
          if (!yb(bb[Zy], Wy[Zy])) return !1
        }
        return !0
      }
      return bb !== bb && Wy !== Wy
    }
  },
  38169: yb => {
    yb.exports = function(yb, bb, Wy, Uy, hy, fy) {
      var Zy = +bb[0],
        cb = +bb[1],
        Py = +bb[2],
        oy = +Wy[0],
        By = +Wy[1],
        Ky = +Wy[2],
        ey = Math.sqrt(oy * oy + By * By + Ky * Ky);
      if (0 === ey) throw new Error("Can't raycast along a zero vector");
      return function(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy) {
        for (var By = 0, Ky = Math.floor, ey = 0 | Ky(bb), qb = 0 | Ky(Wy), sy = 0 | Ky(Uy), Sy = hy > 0 ? 1 : -1, Ey = fy > 0 ? 1 : -1, ly = Zy > 0 ? 1 : -1, mb = Math.abs(1 / hy), Cy = Math.abs(1 / fy), Ty = Math.abs(1 / Zy), Vy = mb < 1 / 0 ? mb * (Sy > 0 ? ey + 1 - bb : bb - ey) : 1 / 0, Jy = Cy < 1 / 0 ? Cy * (Ey > 0 ? qb + 1 - Wy : Wy - qb) : 1 / 0, gb = Ty < 1 / 0 ? Ty * (ly > 0 ? sy + 1 - Uy : Uy - sy) : 1 / 0, Gy = -1; By <= cb;) {
          var Oy = yb(ey, qb, sy);
          if (Oy) return Py && (Py[0] = bb + By * hy, Py[1] = Wy + By * fy, Py[2] = Uy + By * Zy), oy && (oy[0] = oy[1] = oy[2] = 0, 0 === Gy && (oy[0] = -Sy), 1 === Gy && (oy[1] = -Ey), 2 === Gy && (oy[2] = -ly)), Oy;
          Vy < Jy ? Vy < gb ? (ey += Sy, By = Vy, Vy += mb, Gy = 0) : (sy += ly, By = gb, gb += Ty, Gy = 2) : Jy < gb ? (qb += Ey, By = Jy, Jy += Cy, Gy = 1) : (sy += ly, By = gb, gb += Ty, Gy = 2)
        }
        return Py && (Py[0] = bb + By * hy, Py[1] = Wy + By * fy, Py[2] = Uy + By * Zy), oy && (oy[0] = oy[1] = oy[2] = 0), 0
      }(yb, Zy, cb, Py, oy /= ey, By /= ey, Ky /= ey, Uy = "undefined" === typeof Uy ? 64 : +Uy, hy, fy)
    }
  },
  37767: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => cb,
      g: () => fy
    });
    var Uy = Wy(3384);
    let hy = null;

    function fy(yb) {
      return null !== hy && yb === hy
    }

    function Zy() {
      this.nUy = !1, this.stopPropagation = !1, this.uUy = !1, this.disabled = !1
    }
    class cb {
      constructor(yb, bb) {
        this.version = "0.7.0";
        var Wy = Object.assign({}, new Zy, bb || {});
        this.element = yb || document, this.nUy = !!Wy.nUy, this.stopPropagation = !!Wy.stopPropagation, this.uUy = !!Wy.uUy, this.disabled = !!Wy.disabled, this.filterEvents = (yb, bb) => !0, this.down = new Uy.EventEmitter, this.up = new Uy.EventEmitter, this.state = {}, this.HUy = {
          dx: 0,
          dy: 0,
          Qcy: 0,
          jPy: 0,
          Dcy: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? oy(this) : document.addEventListener("DOMContentLoaded", (yb => {
          oy(this)
        }), {
          once: !0
        })
      }
      bind(yb) {
        for (var bb = arguments.length, Wy = new Array(bb > 1 ? bb - 1 : 0), Uy = 1; Uy < bb; Uy++) Wy[Uy - 1] = arguments[Uy];
        Wy.forEach((bb => {
          var Wy = this._keyBindmap[bb] || [];
          Wy.includes(yb) || (Wy.push(yb), this._keyBindmap[bb] = Wy)
        })), this.state[yb] = !!this.state[yb], this.pressCount[yb] = this.pressCount[yb] || 0, this.releaseCount[yb] = this.releaseCount[yb] || 0
      }
      unbind(yb) {
        for (var bb in this._keyBindmap) {
          var Wy = this._keyBindmap[bb],
            Uy = Wy.indexOf(yb);
          Uy > -1 && Wy.splice(Uy, 1)
        }
      }
      getBindings() {
        var yb = {};
        for (var bb in this._keyBindmap) {
          this._keyBindmap[bb].forEach((Wy => {
            yb[Wy] = yb[Wy] || [], yb[Wy].push(bb)
          }))
        }
        return yb
      }
      Zb() {
        Py(this.HUy), Py(this.pressCount), Py(this.releaseCount)
      }
    }

    function Py(yb) {
      for (var bb in yb) yb[bb] = 0
    }

    function oy(yb) {
      window.addEventListener("keydown", Ey.bind(null, yb, !0), !1), window.addEventListener("keyup", Ey.bind(null, yb, !1), !1);
      var bb = {
        passive: !0
      };
      yb.element.addEventListener("touchstart", qb.bind(void 0, yb), {
        passive: !1
      }), yb.element.addEventListener("touchend", Sy.bind(void 0, yb), bb), yb.element.addEventListener("mousedown", ly.bind(null, yb, !0), bb), window.document.addEventListener("mouseup", ly.bind(null, yb, !1), bb), yb.element.addEventListener("touchmove", mb.bind(null, yb), bb), yb.element.addEventListener("mousemove", mb.bind(null, yb), bb), window.PointerEvent, yb.element.addEventListener("wheel", Cy.bind(null, yb), bb), yb.element.addEventListener("contextmenu", Ty.bind(null, yb), !1), window.addEventListener("blur", gb.bind(null, yb), !1)
    }
    var By = 0,
      Ky = 0,
      ey = null;

    function qb(yb, bb) {
      bb.preventDefault(), sy(bb)
    }

    function sy(yb) {
      let bb = !1;
      for (let Wy = 0; Wy < yb.touches.length; ++Wy)
        if (yb.touches[Wy].identifier === ey) {
          bb = !0;
          break
        } if (!bb) {
        const bb = yb.changedTouches[0];
        By = bb.clientX, Ky = bb.clientY, ey = bb.identifier
      }
    }

    function Sy(yb, bb) {
      for (var Wy = bb.changedTouches, Uy = 0; Uy < Wy.length; ++Uy) Wy[Uy].identifier === ey && (ey = null)
    }

    function Ey(yb, bb, Wy) {
      try {
        Gy(yb, Wy), bb && Wy.isTrusted && !Wy.repeat && yb._keyStates[Wy.code] && Oy(yb, Wy.code)
      } finally {
        Ry(Wy.code, bb, yb, Wy)
      }
    }

    function ly(yb, bb, Wy) {
      try {
        Gy(yb, Wy)
      } finally {
        ! function(yb, bb, Wy) {
          if ("pointerId" in Wy)
            if (bb) {
              if (null !== yb._touches.currID) return;
              yb._touches.currID = Wy.pointerId
            } else {
              if (yb._touches.currID !== Wy.pointerId) return;
              yb._touches.currID = null
            } var Uy = "button" in Wy ? Wy.button + 1 : 1;
          Ry("Mouse" + Uy, bb, yb, Wy)
        }(yb, bb, Wy)
      }
    }

    function mb(yb, bb) {
      var Wy = bb.movementX || bb.mozMovementX || 0,
        Uy = bb.movementY || bb.mozMovementY || 0;
      if (bb.touches && 0 === (Wy | Uy)) {
        var hy = function(yb) {
          sy(yb);
          for (let bb = 0; bb < yb.changedTouches.length; ++bb)
            if (yb.changedTouches[bb].identifier == ey) {
              const Wy = yb.changedTouches[bb],
                Uy = [Wy.clientX - By, Wy.clientY - Ky];
              return By = Wy.clientX, Ky = Wy.clientY, Uy
            } return console.error(`Did not find touch id ${ey}`), [0, 0]
        }(bb);
        Wy = hy[0], Uy = hy[1]
      }
      yb.HUy.dx += Wy, yb.HUy.dy += Uy
    }

    function Cy(yb, bb) {
      Gy(yb, bb);
      var Wy = 1;
      switch (bb.deltaMode) {
        case 0:
          Wy = 1;
          break;
        case 1:
          Wy = 12;
          break;
        case 2:
          Wy = yb.element.clientHeight || window.innerHeight
      }
      yb.HUy.Qcy += (bb.deltaX || 0) * Wy, yb.HUy.jPy += (bb.deltaY || 0) * Wy, yb.HUy.Dcy += (bb.deltaZ || 0) * Wy
    }

    function Ty(yb, bb) {
      if (!yb.uUy) return bb.preventDefault(), !1
    }
    var Vy = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function Jy(yb, bb) {
      return !!yb[Vy[bb]] || ("AltRight" === bb || "ControlLeft" === bb) && "function" === typeof yb.getModifierState && !0 === yb.getModifierState("AltGraph")
    }

    function gb(yb, bb) {
      for (var Wy in yb._modifiersHeldThroughBlur = {}, Vy) yb._keyStates[Wy] && (yb._modifiersHeldThroughBlur[Wy] = !0);
      bb && bb.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (yb) {
          return !0
        }
      }() && (clearTimeout(yb._blurRelease), yb._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var bb in yb._modifiersHeldThroughBlur = {}, yb._keyStates) yb._keyStates[bb] && !/^Mouse\d/.test(bb) && Oy(yb, bb)
      }), 0))
    }

    function Gy(yb, bb) {
      var Wy = yb._modifiersHeldThroughBlur;
      if (Wy && bb.isTrusted && document.hasFocus())
        for (var Uy in Wy) delete Wy[Uy], yb._keyStates[Uy] && Uy !== bb.code && (Jy(bb, Uy) || Oy(yb, Uy))
    }

    function Oy(yb, bb) {
      const Wy = {
          code: bb,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Uy = hy;
      hy = Wy;
      try {
        Ry(bb, !1, yb, Wy)
      } finally {
        hy = Uy
      }
    }

    function Ry(yb, bb, Wy, Uy) {
      var hy = Wy._keyBindmap[yb];
      hy && (vb(Wy._keyStates[yb], bb) && (Wy._keyStates[yb] = bb, hy.forEach((yb => {
        (!Wy.filterEvents || Wy.filterEvents(Uy, yb)) && function(yb, bb, Wy, Uy) {
          var hy = bb ? Wy.pressCount : Wy.releaseCount;
          hy[yb] = (hy[yb] || 0) + 1;
          var fy = Wy._bindPressCount[yb] || 0;
          (fy += bb ? 1 : -1) < 0 && (fy = 0);
          Wy._bindPressCount[yb] = fy;
          var Zy = Wy.state[yb];
          if (vb(Zy, fy)) {
            Wy.state[yb] = fy > 0;
            var cb = bb ? Wy.down : Wy.up;
            Wy.disabled || cb.emit(yb, Uy)
          }
        }(yb, bb, Wy, Uy)
      }))), "button" in Uy || (Wy.nUy && !Uy.defaultPrevented && Uy.preventDefault(), Wy.stopPropagation && Uy.stopPropagation()))
    }

    function vb(yb, bb) {
      return yb ? !bb : bb
    }
  },
  35322: (yb, bb) => {
    function Wy(yb) {
      if (yb && "object" === typeof yb) {
        var bb = yb.which || yb.keyCode || yb.charCode;
        bb && (yb = bb)
      }
      if ("number" === typeof yb) return Zy[yb];
      var Wy, fy = String(yb);
      return (Wy = Uy[fy.toLowerCase()]) ? Wy : (Wy = hy[fy.toLowerCase()]) || (1 === fy.length ? fy.charCodeAt(0) : void 0)
    }
    Wy.isEventKey = function(yb, bb) {
      if (yb && "object" === typeof yb) {
        var Wy = yb.which || yb.keyCode || yb.charCode;
        if (null === Wy || void 0 === Wy) return !1;
        if ("string" === typeof bb) {
          var fy;
          if (fy = Uy[bb.toLowerCase()]) return fy === Wy;
          if (fy = hy[bb.toLowerCase()]) return fy === Wy
        } else if ("number" === typeof bb) return bb === Wy;
        return !1
      }
    };
    var Uy = (bb = yb.exports = Wy).code = bb.codes = {
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
      hy = bb.aliases = {
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
    for (fy = 97; fy < 123; fy++) Uy[String.fromCharCode(fy)] = fy - 32;
    for (var fy = 48; fy < 58; fy++) Uy[fy - 48] = fy;
    for (fy = 1; fy < 13; fy++) Uy["f" + fy] = fy + 111;
    for (fy = 0; fy < 10; fy++) Uy["numpad " + fy] = fy + 96;
    var Zy = bb.names = bb.title = {};
    for (fy in Uy) Zy[Uy[fy]] = fy;
    for (var cb in hy) Uy[cb] = hy[cb]
  },
  38156: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy
    });
    class Uy {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.RWy = !1, this.vUy = !1, this.tWy = 30, this.JWy = 0, this.iUy = 100, this.Kc = !1, this.fullscreen = !1, this.FE = function(yb) {}, this.MWy = function(yb, bb, Wy) {}, this.nWy = function() {}, this.pE = function() {}, this.YWy = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(yb) {}, this._data = new hy(bb),
          function(yb) {
            if ("loading" === document.readyState) {
              var bb = () => {
                document.removeEventListener("readystatechange", bb), yb()
              };
              document.addEventListener("readystatechange", bb)
            } else setTimeout(yb, 0)
          }((() => {
            ! function(yb) {
              var bb = yb._data,
                Wy = bb.nowObject.now();
              bb.lastTickStarted = Wy, bb.lastFrameStarted = Wy, bb.lastRenderStarted = Wy, bb.frameCB = () => function(yb) {
                var bb = yb._data;
                requestAnimationFrame(bb.frameCB), cb(yb);
                var Wy = bb.nowObject.now(),
                  Uy = Wy - bb.lastFrameStarted;
                if (bb.lastFrameStarted = Wy, yb.JWy > 0) {
                  bb.renderAccum += Uy;
                  var hy = 1e3 / yb.JWy;
                  if (bb.renderAccum < hy) return;
                  bb.renderAccum -= hy, bb.renderAccum > hy && (bb.renderAccum = hy)
                }
                var fy = Wy - bb.lastRenderStarted;
                bb.lastRenderStarted = Wy;
                var Zy = 1e3 / yb.tWy,
                  Py = (Wy - bb.lastTickStarted) / Zy;
                Py < 0 && (Py = 0);
                yb.MWy(fy, Py, Zy), setTimeout(cb, 0, yb, !0)
              }(yb), bb.intervalCB = () => cb(yb), requestAnimationFrame(bb.frameCB), bb.pollTime > 0 && (bb.intervalID = setInterval(bb.intervalCB, Math.max(bb.pollTime, 1e3 / yb.tWy / 2)))
            }(this),
            function(yb, bb) {
              if (!bb) return;
              var Wy = !1,
                Uy = !1,
                hy = yb => {
                  if (!!yb !== (Wy = bb === document.pointerLockElement))
                    if (yb) {
                      var Uy = bb.requestPointerLock();
                      Uy && Uy.catch && Uy.catch((yb => {}))
                    } else document.exitPointerLock()
                },
                fy = yb => {
                  !!yb !== (Uy = bb === document.fullscreenElement) && (yb ? bb.requestFullscreen ? bb.requestFullscreen() : bb.webkitRequestFullscreen && bb.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (Uy => {
                Wy = bb === document.pointerLockElement, yb.YWy(Wy)
              })), document.addEventListener("fullscreenchange", (Wy => {
                Uy = bb === document.fullscreenElement, yb.onFullscreenChanged(Uy)
              })), document.addEventListener("pointerlockerror", (Uy => {
                Wy = bb === document.pointerLockElement, yb.onPointerLockError(Uy)
              })), Object.defineProperty(yb, "Kc", {
                get: () => Wy,
                set: hy
              }), Object.defineProperty(yb, "fullscreen", {
                get: () => Uy,
                set: fy
              }), bb.addEventListener("click", (bb => {
                yb.RWy && hy(!0), yb.vUy && fy(!0)
              }));
              var Zy = () => yb.pE();
              if (window.ResizeObserver) {
                new ResizeObserver(Zy).observe(bb)
              } else window.addEventListener("resize", Zy)
            }(this, yb), this.nWy()
          }))
      }
    }

    function hy() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = yb, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var fy = 3,
      Zy = 20;

    function cb(yb) {
      for (var bb = yb._data, Wy = 1e3 / yb.tWy, Uy = bb.nowObject.now() + Zy, hy = 0; bb.nowObject.now() >= bb.lastTickStarted + Wy && bb.nowObject.now() < Uy && ++hy <= fy;) yb.FE(Wy), bb.lastTickStarted += Wy;
      var cb = 5 * (Wy + 5),
        Py = bb.nowObject.now();
      if (Py - bb.lastTickStarted > cb)
        for (; Py >= bb.lastTickStarted + Wy;) bb.lastTickStarted += Wy
    }
  },
  35507: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy
    });
    var Uy = Wy(55);
    const hy = Uy.useLayoutEffect;
    const fy = function(yb) {
      var bb = (0, Uy.useRef)(yb);
      return hy((function() {
        bb.current = yb
      })), bb
    };
    var Zy = function(yb) {
      var bb = fy(yb);
      (0, Uy.useEffect)((function() {
        var yb = function(yb) {
          var Wy;
          if (null != bb.current && (Wy = bb.current(yb)), yb.defaultPrevented && (yb.returnValue = ""), "string" === typeof Wy) return yb.returnValue = Wy, Wy
        };
        return window.addEventListener("beforeunload", yb),
          function() {
            window.removeEventListener("beforeunload", yb)
          }
      }), [])
    }
  },
  35351: yb => {
    var bb, Wy = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Uy = /OS X/.test(Wy),
      hy = /Opera/.test(Wy),
      fy = !/like Gecko/.test(Wy) && !hy,
      Zy = yb.exports = {
        0: Uy ? "<menu>" : "<UNK>",
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
        93: Uy ? "<meta>" : "<menu>",
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
        173: Uy && fy ? "-" : "<volume-mute>",
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
        231: hy ? "`" : "<unicode>",
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
    for (bb = 58; bb < 65; ++bb) Zy[bb] = String.fromCharCode(bb);
    for (bb = 48; bb < 58; ++bb) Zy[bb] = bb - 48 + "";
    for (bb = 65; bb < 91; ++bb) Zy[bb] = String.fromCharCode(bb);
    for (bb = 96; bb < 106; ++bb) Zy[bb] = "<num-" + (bb - 96) + ">";
    for (bb = 112; bb < 136; ++bb) Zy[bb] = "F" + (bb - 111)
  },
  37711: (yb, bb, Wy) => {
    function Uy(yb, bb, Wy, Uy, hy) {
      var fy = {};
      return Object.keys(Uy).forEach((function(yb) {
        fy[yb] = Uy[yb]
      })), fy.enumerable = !!fy.enumerable, fy.configurable = !!fy.configurable, ("value" in fy || fy.initializer) && (fy.writable = !0), fy = Wy.slice().reverse().reduce((function(Wy, Uy) {
        return Uy(yb, bb, Wy) || Wy
      }), fy), hy && void 0 !== fy.initializer && (fy.value = fy.initializer ? fy.initializer.call(hy) : void 0, fy.initializer = void 0), void 0 === fy.initializer && (Object.defineProperty(yb, bb, fy), fy = null), fy
    }
    Wy.d(bb, {
      e: () => Uy
    })
  },
  37709: (yb, bb, Wy) => {
    function Uy(yb, bb, Wy, Uy) {
      Wy && Object.defineProperty(yb, bb, {
        enumerable: Wy.enumerable,
        configurable: Wy.configurable,
        writable: Wy.writable,
        value: Wy.initializer ? Wy.initializer.call(Uy) : void 0
      })
    }
    Wy.d(bb, {
      e: () => Uy
    })
  },
  37346: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy
    });
    var Uy = Wy(37350);
    const hy = (yb, bb, Wy) => yb ? yb.getClassName && "Mesh" === yb.getClassName() ? null : !yb.getClassName || "SubMesh" !== yb.getClassName() && "PhysicsBody" !== yb.getClassName() ? yb.clone ? yb.clone() : Array.isArray(yb) ? yb.slice() : Wy && "object" === typeof yb ? {
      ...yb
    } : null : yb.clone(bb) : null;
    class fy {
      static DeepCopy(yb, bb, Wy, fy) {
        let Zy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const cb = function(yb) {
          const bb = [];
          do {
            const Wy = Object.getOwnPropertyNames(yb);
            for (const yb of Wy) - 1 === bb.indexOf(yb) && bb.push(yb)
          } while (yb = Object.getPrototypeOf(yb));
          return bb
        }(yb);
        for (const oy of cb) {
          if ("_" === oy[0] && (!fy || -1 === fy.indexOf(oy))) continue;
          if (oy.endsWith("Observable")) continue;
          if (Wy && -1 !== Wy.indexOf(oy)) continue;
          const cb = yb[oy],
            By = typeof cb;
          if ("function" !== By) try {
            if ("object" === By)
              if (cb instanceof Uint8Array) bb[oy] = Uint8Array.from(cb);
              else if (cb instanceof Array) {
              if (bb[oy] = [], cb.length > 0)
                if ("object" == typeof cb[0])
                  for (let yb = 0; yb < cb.length; yb++) {
                    const Wy = hy(cb[yb], bb, Zy); - 1 === bb[oy].indexOf(Wy) && bb[oy].push(Wy)
                  } else bb[oy] = cb.slice(0)
            } else bb[oy] = hy(cb, bb, Zy);
            else bb[oy] = cb
          } catch (Py) {
            Uy.b.Warn(Py.message)
          }
        }
      }
    }
  },
  37380: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => hy,
      f: () => fy,
      g: () => Zy,
      i: () => cb
    });
    var Uy = Wy(35919);
    class hy {
      constructor(yb, bb, Wy) {
        this.gradient = yb, this.color1 = bb, this.color2 = Wy
      }
      getColorToRef(yb) {
        this.color2 ? Uy.e.LerpToRef(this.color1, this.color2, Math.random(), yb) : yb.Coy(this.color1)
      }
    }
    class fy {
      constructor(yb, bb) {
        this.gradient = yb, this.color = bb
      }
    }
    class Zy {
      constructor(yb, bb, Wy) {
        this.gradient = yb, this.factor1 = bb, this.factor2 = Wy
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class cb {
      static GetCurrentGradient(yb, bb, Wy) {
        if (bb[0].gradient > yb) return void Wy(bb[0], bb[0], 1);
        for (let hy = 0; hy < bb.length - 1; hy++) {
          const Uy = bb[hy],
            fy = bb[hy + 1];
          if (yb >= Uy.gradient && yb <= fy.gradient) {
            return void Wy(Uy, fy, (yb - Uy.gradient) / (fy.gradient - Uy.gradient))
          }
        }
        const Uy = bb.length - 1;
        Wy(bb[Uy], bb[Uy], 1)
      }
    }
  },
  37350: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy
    });
    class Uy {
      static _CheckLimit(yb, bb) {
        let Wy = Uy._LogLimitOutputs[yb];
        return Wy ? Wy.current++ : (Wy = {
          limit: bb,
          current: 1
        }, Uy._LogLimitOutputs[yb] = Wy), Wy.current <= Wy.limit
      }
      static _GenerateLimitMessage(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Wy = Uy._LogLimitOutputs[yb];
        if (!Wy || !Uy.MessageLimitReached) return;
        const hy = this._Levels[bb];
        Wy.current === Wy.limit && Uy[hy.name](Uy.MessageLimitReached.replace(/%LIMIT%/g, "" + Wy.limit).replace(/%TYPE%/g, hy.name ?? ""))
      }
      static _AddLogEntry(yb) {
        Uy._LogCache = yb + Uy._LogCache, Uy.OnNewCacheEntry && Uy.OnNewCacheEntry(yb)
      }
      static _FormatMessage(yb) {
        const bb = yb => yb < 10 ? "0" + yb : "" + yb,
          Wy = new Date;
        return "[" + bb(Wy.getHours()) + ":" + bb(Wy.getMinutes()) + ":" + bb(Wy.getSeconds()) + "]: " + yb
      }
      static _LogDisabled(yb, bb) {}
      static _LogEnabled() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bb = arguments.length > 1 ? arguments[1] : void 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        const hy = Array.isArray(bb) ? bb[0] : bb;
        if (void 0 !== Wy && !Uy._CheckLimit(hy, Wy)) return;
        const fy = Uy._FormatMessage(hy),
          Zy = this._Levels[yb],
          cb = Array.isArray(bb) ? bb.slice(1) : [];
        Zy.logFunc && Zy.logFunc("BJS - " + fy, ...cb);
        const Py = `<div style='color:${Zy.color}'>${fy}</div><br>`;
        Uy._AddLogEntry(Py), Uy._GenerateLimitMessage(hy, yb)
      }
      static get LogCache() {
        return Uy._LogCache
      }
      static ClearLogCache() {
        Uy._LogCache = "", Uy._LogLimitOutputs = {}, Uy.errorsCount = 0
      }
      static set LogLevels(yb) {
        Uy.Log = Uy._LogDisabled, Uy.Warn = Uy._LogDisabled, Uy.Error = Uy._LogDisabled;
        const bb = [Uy.MessageLogLevel, Uy.WarningLogLevel, Uy.ErrorLogLevel];
        for (const Wy of bb)
          if ((yb & Wy) === Wy) {
            const yb = this._Levels[Wy];
            Uy[yb.name] = Uy._LogEnabled.bind(Uy, Wy)
          }
      }
    }
    Uy.NoneLogLevel = 0, Uy.MessageLogLevel = 1, Uy.WarningLogLevel = 2, Uy.ErrorLogLevel = 4, Uy.AllLogLevel = 7, Uy.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Uy._LogCache = "", Uy._LogLimitOutputs = {}, Uy._Levels = [{}, {
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
    }], Uy.errorsCount = 0, Uy.Log = Uy._LogEnabled.bind(Uy, Uy.MessageLogLevel), Uy.Warn = Uy._LogEnabled.bind(Uy, Uy.WarningLogLevel), Uy.Error = Uy._LogEnabled.bind(Uy, Uy.ErrorLogLevel)
  },
  37384: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy
    });
    var Uy = Wy(35861),
      hy = Wy(35902),
      fy = Wy(37346);
    class Zy {
      constructor() {
        this.direction1 = new Uy.n(0, 1, 0), this.direction2 = new Uy.n(0, 1, 0), this.minEmitBox = new Uy.n(-.5, -.5, -.5), this.maxEmitBox = new Uy.n(.5, .5, .5)
      }
      startDirectionFunction(yb, bb, Wy, fy) {
        const Zy = (0, hy.RandomRange)(this.direction1.x, this.direction2.x),
          cb = (0, hy.RandomRange)(this.direction1.y, this.direction2.y),
          Py = (0, hy.RandomRange)(this.direction1.z, this.direction2.z);
        if (fy) return bb.x = Zy, bb.y = cb, void(bb.z = Py);
        Uy.n.TransformNormalFromFloatsToRef(Zy, cb, Py, yb, bb)
      }
      startPositionFunction(yb, bb, Wy, fy) {
        const Zy = (0, hy.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          cb = (0, hy.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          Py = (0, hy.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (fy) return bb.x = Zy, bb.y = cb, void(bb.z = Py);
        Uy.n.TransformCoordinatesFromFloatsToRef(Zy, cb, Py, yb, bb)
      }
      clone() {
        const yb = new Zy;
        return fy.d.DeepCopy(this, yb), yb
      }
      applyToShader(yb) {
        yb.setVector3("direction1", this.direction1), yb.setVector3("direction2", this.direction2), yb.setVector3("minEmitBox", this.minEmitBox), yb.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(yb) {
        yb.addUniform("direction1", 3), yb.addUniform("direction2", 3), yb.addUniform("minEmitBox", 3), yb.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const yb = {};
        return yb.type = this.getClassName(), yb.direction1 = this.direction1.hBy(), yb.direction2 = this.direction2.hBy(), yb.minEmitBox = this.minEmitBox.hBy(), yb.maxEmitBox = this.maxEmitBox.hBy(), yb
      }
      parse(yb) {
        Uy.n.FromArrayToRef(yb.direction1, 0, this.direction1), Uy.n.FromArrayToRef(yb.direction2, 0, this.direction2), Uy.n.FromArrayToRef(yb.minEmitBox, 0, this.minEmitBox), Uy.n.FromArrayToRef(yb.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  37337: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => cb,
      g: () => Zy
    });
    var Uy = Wy(35861),
      hy = Wy(35902),
      fy = Wy(37346);
    class Zy {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = yb, this.height = bb, this.radiusRange = Wy, this.directionRandomizer = hy, this._tempVector = Uy.n.Zero()
      }
      startDirectionFunction(yb, bb, Wy, fy, Zy) {
        Wy.position.subtractToRef(yb.getTranslation(), this._tempVector), this._tempVector.normalize(), Uy.n.TransformNormalToRef(this._tempVector, Zy, this._tempVector);
        const cb = (0, hy.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let Py = Math.atan2(this._tempVector.x, this._tempVector.z);
        Py += (0, hy.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = cb, this._tempVector.x = Math.sin(Py), this._tempVector.z = Math.cos(Py), this._tempVector.normalize(), fy ? bb.Coy(this._tempVector) : Uy.n.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, yb, bb)
      }
      startPositionFunction(yb, bb, Wy, fy) {
        const Zy = (0, hy.RandomRange)(-this.height / 2, this.height / 2),
          cb = (0, hy.RandomRange)(0, 2 * Math.PI),
          Py = (0, hy.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          oy = Math.sqrt(Py) * this.radius,
          By = oy * Math.cos(cb),
          Ky = oy * Math.sin(cb);
        fy ? bb.vcy(By, Zy, Ky) : Uy.n.TransformCoordinatesFromFloatsToRef(By, Zy, Ky, yb, bb)
      }
      clone() {
        const yb = new Zy(this.radius, this.directionRandomizer);
        return fy.d.DeepCopy(this, yb), yb
      }
      applyToShader(yb) {
        yb.setFloat("radius", this.radius), yb.setFloat("height", this.height), yb.setFloat("radiusRange", this.radiusRange), yb.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(yb) {
        yb.addUniform("radius", 1), yb.addUniform("height", 1), yb.addUniform("radiusRange", 1), yb.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const yb = {};
        return yb.type = this.getClassName(), yb.radius = this.radius, yb.height = this.height, yb.radiusRange = this.radiusRange, yb.directionRandomizer = this.directionRandomizer, yb
      }
      parse(yb) {
        this.radius = yb.radius, this.height = yb.height, this.radiusRange = yb.radiusRange, this.directionRandomizer = yb.directionRandomizer
      }
    }
    class cb extends Zy {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Uy.n(0, 1, 0),
          fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Uy.n(0, 1, 0);
        super(yb, bb, Wy), this.direction1 = hy, this.direction2 = fy
      }
      startDirectionFunction(yb, bb, Wy, fy) {
        const Zy = (0, hy.RandomRange)(this.direction1.x, this.direction2.x),
          cb = (0, hy.RandomRange)(this.direction1.y, this.direction2.y),
          Py = (0, hy.RandomRange)(this.direction1.z, this.direction2.z);
        fy ? bb.vcy(Zy, cb, Py) : Uy.n.TransformNormalFromFloatsToRef(Zy, cb, Py, yb, bb)
      }
      clone() {
        const yb = new cb(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return fy.d.DeepCopy(this, yb), yb
      }
      applyToShader(yb) {
        yb.setFloat("radius", this.radius), yb.setFloat("height", this.height), yb.setFloat("radiusRange", this.radiusRange), yb.setVector3("direction1", this.direction1), yb.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(yb) {
        yb.addUniform("radius", 1), yb.addUniform("height", 1), yb.addUniform("radiusRange", 1), yb.addUniform("direction1", 3), yb.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const yb = super.serialize();
        return yb.direction1 = this.direction1.hBy(), yb.direction2 = this.direction2.hBy(), yb
      }
      parse(yb) {
        super.parse(yb), Uy.n.FromArrayToRef(yb.direction1, 0, this.direction1), Uy.n.FromArrayToRef(yb.direction2, 0, this.direction2)
      }
    }
  },
  37464: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Ky
    });
    const Uy = .5 * (Math.sqrt(3) - 1),
      hy = (3 - Math.sqrt(3)) / 6,
      fy = 1 / 3,
      Zy = 1 / 6,
      cb = (Math.sqrt(5) - 1) / 4,
      Py = (5 - Math.sqrt(5)) / 20,
      oy = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      By = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const Ky = class {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const bb = "function" == typeof yb ? yb : function(yb) {
          let bb = 0,
            Wy = 0,
            Uy = 0,
            hy = 1;
          const fy = function() {
            let yb = 4022871197;
            return function(bb) {
              bb = bb.toString();
              for (let Wy = 0; Wy < bb.length; Wy++) {
                yb += bb.charCodeAt(Wy);
                let Uy = .02519603282416938 * yb;
                yb = Uy >>> 0, Uy -= yb, Uy *= yb, yb = Uy >>> 0, Uy -= yb, yb += 4294967296 * Uy
              }
              return 2.3283064365386963e-10 * (yb >>> 0)
            }
          }();
          bb = fy(" "), Wy = fy(" "), Uy = fy(" "), bb -= fy(yb), bb < 0 && (bb += 1);
          Wy -= fy(yb), Wy < 0 && (Wy += 1);
          Uy -= fy(yb), Uy < 0 && (Uy += 1);
          return function() {
            const yb = 2091639 * bb + 2.3283064365386963e-10 * hy;
            return bb = Wy, Wy = Uy, Uy = yb - (hy = 0 | yb)
          }
        }(yb);
        this.p = function(yb) {
          const bb = new Uint8Array(256);
          for (let Wy = 0; Wy < 256; Wy++) bb[Wy] = Wy;
          for (let Wy = 0; Wy < 255; Wy++) {
            const Uy = Wy + ~~(yb() * (256 - Wy)),
              hy = bb[Wy];
            bb[Wy] = bb[Uy], bb[Uy] = hy
          }
          return bb
        }(bb), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let Wy = 0; Wy < 512; Wy++) this.perm[Wy] = this.p[255 & Wy], this.permMod12[Wy] = this.perm[Wy] % 12
      }
      noise2D(yb, bb) {
        const Wy = this.permMod12,
          fy = this.perm;
        let Zy = 0,
          cb = 0,
          Py = 0;
        const By = (yb + bb) * Uy,
          Ky = Math.floor(yb + By),
          ey = Math.floor(bb + By),
          qb = (Ky + ey) * hy,
          sy = yb - (Ky - qb),
          Sy = bb - (ey - qb);
        let Ey, ly;
        sy > Sy ? (Ey = 1, ly = 0) : (Ey = 0, ly = 1);
        const mb = sy - Ey + hy,
          Cy = Sy - ly + hy,
          Ty = sy - 1 + 2 * hy,
          Vy = Sy - 1 + 2 * hy,
          Jy = 255 & Ky,
          gb = 255 & ey;
        let Gy = .5 - sy * sy - Sy * Sy;
        if (Gy >= 0) {
          const yb = 3 * Wy[Jy + fy[gb]];
          Gy *= Gy, Zy = Gy * Gy * (oy[yb] * sy + oy[yb + 1] * Sy)
        }
        let Oy = .5 - mb * mb - Cy * Cy;
        if (Oy >= 0) {
          const yb = 3 * Wy[Jy + Ey + fy[gb + ly]];
          Oy *= Oy, cb = Oy * Oy * (oy[yb] * mb + oy[yb + 1] * Cy)
        }
        let Ry = .5 - Ty * Ty - Vy * Vy;
        if (Ry >= 0) {
          const yb = 3 * Wy[Jy + 1 + fy[gb + 1]];
          Ry *= Ry, Py = Ry * Ry * (oy[yb] * Ty + oy[yb + 1] * Vy)
        }
        return 70 * (Zy + cb + Py)
      }
      noise3D(yb, bb, Wy) {
        const Uy = this.permMod12,
          hy = this.perm;
        let cb, Py, By, Ky;
        const ey = (yb + bb + Wy) * fy,
          qb = Math.floor(yb + ey),
          sy = Math.floor(bb + ey),
          Sy = Math.floor(Wy + ey),
          Ey = (qb + sy + Sy) * Zy,
          ly = yb - (qb - Ey),
          mb = bb - (sy - Ey),
          Cy = Wy - (Sy - Ey);
        let Ty, Vy, Jy, gb, Gy, Oy;
        ly >= mb ? mb >= Cy ? (Ty = 1, Vy = 0, Jy = 0, gb = 1, Gy = 1, Oy = 0) : ly >= Cy ? (Ty = 1, Vy = 0, Jy = 0, gb = 1, Gy = 0, Oy = 1) : (Ty = 0, Vy = 0, Jy = 1, gb = 1, Gy = 0, Oy = 1) : mb < Cy ? (Ty = 0, Vy = 0, Jy = 1, gb = 0, Gy = 1, Oy = 1) : ly < Cy ? (Ty = 0, Vy = 1, Jy = 0, gb = 0, Gy = 1, Oy = 1) : (Ty = 0, Vy = 1, Jy = 0, gb = 1, Gy = 1, Oy = 0);
        const Ry = ly - Ty + Zy,
          vb = mb - Vy + Zy,
          ib = Cy - Jy + Zy,
          My = ly - gb + 2 * Zy,
          Yy = mb - Gy + 2 * Zy,
          Xy = Cy - Oy + 2 * Zy,
          ny = ly - 1 + .5,
          uy = mb - 1 + .5,
          rb = Cy - 1 + .5,
          Hy = 255 & qb,
          ab = 255 & sy,
          Fy = 255 & Sy;
        let py = .6 - ly * ly - mb * mb - Cy * Cy;
        if (py < 0) cb = 0;
        else {
          const yb = 3 * Uy[Hy + hy[ab + hy[Fy]]];
          py *= py, cb = py * py * (oy[yb] * ly + oy[yb + 1] * mb + oy[yb + 2] * Cy)
        }
        let Ly = .6 - Ry * Ry - vb * vb - ib * ib;
        if (Ly < 0) Py = 0;
        else {
          const yb = 3 * Uy[Hy + Ty + hy[ab + Vy + hy[Fy + Jy]]];
          Ly *= Ly, Py = Ly * Ly * (oy[yb] * Ry + oy[yb + 1] * vb + oy[yb + 2] * ib)
        }
        let Qy = .6 - My * My - Yy * Yy - Xy * Xy;
        if (Qy < 0) By = 0;
        else {
          const yb = 3 * Uy[Hy + gb + hy[ab + Gy + hy[Fy + Oy]]];
          Qy *= Qy, By = Qy * Qy * (oy[yb] * My + oy[yb + 1] * Yy + oy[yb + 2] * Xy)
        }
        let jb = .6 - ny * ny - uy * uy - rb * rb;
        if (jb < 0) Ky = 0;
        else {
          const yb = 3 * Uy[Hy + 1 + hy[ab + 1 + hy[Fy + 1]]];
          jb *= jb, Ky = jb * jb * (oy[yb] * ny + oy[yb + 1] * uy + oy[yb + 2] * rb)
        }
        return 32 * (cb + Py + By + Ky)
      }
      noise4D(yb, bb, Wy, Uy) {
        const hy = this.perm;
        let fy, Zy, oy, Ky, ey;
        const qb = (yb + bb + Wy + Uy) * cb,
          sy = Math.floor(yb + qb),
          Sy = Math.floor(bb + qb),
          Ey = Math.floor(Wy + qb),
          ly = Math.floor(Uy + qb),
          mb = (sy + Sy + Ey + ly) * Py,
          Cy = yb - (sy - mb),
          Ty = bb - (Sy - mb),
          Vy = Wy - (Ey - mb),
          Jy = Uy - (ly - mb);
        let gb = 0,
          Gy = 0,
          Oy = 0,
          Ry = 0;
        Cy > Ty ? gb++ : Gy++, Cy > Vy ? gb++ : Oy++, Cy > Jy ? gb++ : Ry++, Ty > Vy ? Gy++ : Oy++, Ty > Jy ? Gy++ : Ry++, Vy > Jy ? Oy++ : Ry++;
        const vb = gb >= 3 ? 1 : 0,
          ib = Gy >= 3 ? 1 : 0,
          My = Oy >= 3 ? 1 : 0,
          Yy = Ry >= 3 ? 1 : 0,
          Xy = gb >= 2 ? 1 : 0,
          ny = Gy >= 2 ? 1 : 0,
          uy = Oy >= 2 ? 1 : 0,
          rb = Ry >= 2 ? 1 : 0,
          Hy = gb >= 1 ? 1 : 0,
          ab = Gy >= 1 ? 1 : 0,
          Fy = Oy >= 1 ? 1 : 0,
          py = Ry >= 1 ? 1 : 0,
          Ly = Cy - vb + Py,
          Qy = Ty - ib + Py,
          jb = Vy - My + Py,
          Dy = Jy - Yy + Py,
          tb = Cy - Xy + 2 * Py,
          wy = Ty - ny + 2 * Py,
          kb = Vy - uy + 2 * Py,
          Ny = Jy - rb + 2 * Py,
          zb = Cy - Hy + 3 * Py,
          Iy = Ty - ab + 3 * Py,
          xb = Vy - Fy + 3 * Py,
          Ay = Jy - py + 3 * Py,
          dy = Cy - 1 + 4 * Py,
          yW = Ty - 1 + 4 * Py,
          bW = Vy - 1 + 4 * Py,
          Wb = Jy - 1 + 4 * Py,
          Ub = 255 & sy,
          hb = 255 & Sy,
          fb = 255 & Ey,
          Zb = 255 & ly;
        let cW = .6 - Cy * Cy - Ty * Ty - Vy * Vy - Jy * Jy;
        if (cW < 0) fy = 0;
        else {
          const yb = hy[Ub + hy[hb + hy[fb + hy[Zb]]]] % 32 * 4;
          cW *= cW, fy = cW * cW * (By[yb] * Cy + By[yb + 1] * Ty + By[yb + 2] * Vy + By[yb + 3] * Jy)
        }
        let Pb = .6 - Ly * Ly - Qy * Qy - jb * jb - Dy * Dy;
        if (Pb < 0) Zy = 0;
        else {
          const yb = hy[Ub + vb + hy[hb + ib + hy[fb + My + hy[Zb + Yy]]]] % 32 * 4;
          Pb *= Pb, Zy = Pb * Pb * (By[yb] * Ly + By[yb + 1] * Qy + By[yb + 2] * jb + By[yb + 3] * Dy)
        }
        let ob = .6 - tb * tb - wy * wy - kb * kb - Ny * Ny;
        if (ob < 0) oy = 0;
        else {
          const yb = hy[Ub + Xy + hy[hb + ny + hy[fb + uy + hy[Zb + rb]]]] % 32 * 4;
          ob *= ob, oy = ob * ob * (By[yb] * tb + By[yb + 1] * wy + By[yb + 2] * kb + By[yb + 3] * Ny)
        }
        let Bb = .6 - zb * zb - Iy * Iy - xb * xb - Ay * Ay;
        if (Bb < 0) Ky = 0;
        else {
          const yb = hy[Ub + Hy + hy[hb + ab + hy[fb + Fy + hy[Zb + py]]]] % 32 * 4;
          Bb *= Bb, Ky = Bb * Bb * (By[yb] * zb + By[yb + 1] * Iy + By[yb + 2] * xb + By[yb + 3] * Ay)
        }
        let Kb = .6 - dy * dy - yW * yW - bW * bW - Wb * Wb;
        if (Kb < 0) ey = 0;
        else {
          const yb = hy[Ub + 1 + hy[hb + 1 + hy[fb + 1 + hy[Zb + 1]]]] % 32 * 4;
          Kb *= Kb, ey = Kb * Kb * (By[yb] * dy + By[yb + 1] * yW + By[yb + 2] * bW + By[yb + 3] * Wb)
        }
        return 27 * (fy + Zy + oy + Ky + ey)
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);
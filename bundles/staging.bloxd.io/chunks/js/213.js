/*! For license information please see ad2avs.213.6a751fa8.chunk.js.LICENSE.txt */
export const id = 213;
export const ids = [213];
export const modules = {
  38917: (zz, uz, bz) => {
    zz.exports = nz;
    var Ez = bz(332);

    function nz(zz, uz) {
      if (!(this instanceof nz)) return new nz(zz, uz);
      var bz = Ez.create();
      Ez.add(bz, zz, uz), this.base = Ez.min(Ez.create(), zz, bz), this.vec = Ez.clone(uz), this.max = Ez.max(Ez.create(), zz, bz), this.mag = Ez.length(this.vec)
    }
    var iz = nz.prototype;
    iz.width = function() {
      return this.vec[0]
    }, iz.height = function() {
      return this.vec[1]
    }, iz.depth = function() {
      return this.vec[2]
    }, iz.x0 = function() {
      return this.base[0]
    }, iz.y0 = function() {
      return this.base[1]
    }, iz.z0 = function() {
      return this.base[2]
    }, iz.x1 = function() {
      return this.max[0]
    }, iz.y1 = function() {
      return this.max[1]
    }, iz.z1 = function() {
      return this.max[2]
    }, iz.translate = function(zz) {
      return Ez.add(this.max, this.max, zz), Ez.add(this.base, this.base, zz), this
    }, iz.setPosition = function(zz) {
      return Ez.add(this.max, zz, this.vec), Ez.copy(this.base, zz), this
    }, iz.expand = function(zz) {
      var uz = Ez.create(),
        bz = Ez.create();
      return Ez.max(uz, zz.max, this.max), Ez.min(bz, zz.base, this.base), Ez.subtract(uz, uz, bz), new nz(bz, uz)
    }, iz.intersects = function(zz) {
      return !(zz.base[0] > this.max[0]) && (!(zz.base[1] > this.max[1]) && (!(zz.base[2] > this.max[2]) && (!(zz.max[0] < this.base[0]) && (!(zz.max[1] < this.base[1]) && !(zz.max[2] < this.base[2])))))
    }, iz.touches = function(zz) {
      var uz = this.union(zz);
      return null !== uz && (0 == uz.width() || 0 == uz.height() || 0 == uz.depth())
    }, iz.union = function(zz) {
      if (!this.intersects(zz)) return null;
      var uz = Math.max(zz.base[0], this.base[0]),
        bz = Math.max(zz.base[1], this.base[1]),
        Ez = Math.max(zz.base[2], this.base[2]);
      return new nz([uz, bz, Ez], [Math.min(zz.max[0], this.max[0]) - uz, Math.min(zz.max[1], this.max[1]) - bz, Math.min(zz.max[2], this.max[2]) - Ez])
    }
  },
  38915: zz => {
    zz.exports = function(zz, uz, bz, Ez, nz, iz) {
      var lz = +uz[0],
        Mz = +uz[1],
        tz = +uz[2],
        Hz = +bz[0],
        Oz = +bz[1],
        pz = +bz[2],
        dz = Math.sqrt(Hz * Hz + Oz * Oz + pz * pz);
      if (0 === dz) throw new Error("Can't raycast along a zero vector");
      return function(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz) {
        for (var Oz = 0, pz = Math.floor, dz = 0 | pz(uz), Fz = 0 | pz(bz), Zz = 0 | pz(Ez), Rz = nz > 0 ? 1 : -1, Kz = iz > 0 ? 1 : -1, wz = lz > 0 ? 1 : -1, Xz = Math.abs(1 / nz), fz = Math.abs(1 / iz), sz = Math.abs(1 / lz), rz = Xz < 1 / 0 ? Xz * (Rz > 0 ? dz + 1 - uz : uz - dz) : 1 / 0, oz = fz < 1 / 0 ? fz * (Kz > 0 ? Fz + 1 - bz : bz - Fz) : 1 / 0, Nz = sz < 1 / 0 ? sz * (wz > 0 ? Zz + 1 - Ez : Ez - Zz) : 1 / 0, vz = -1; Oz <= Mz;) {
          var xz = zz(dz, Fz, Zz);
          if (xz) return tz && (tz[0] = uz + Oz * nz, tz[1] = bz + Oz * iz, tz[2] = Ez + Oz * lz), Hz && (Hz[0] = Hz[1] = Hz[2] = 0, 0 === vz && (Hz[0] = -Rz), 1 === vz && (Hz[1] = -Kz), 2 === vz && (Hz[2] = -wz)), xz;
          rz < oz ? rz < Nz ? (dz += Rz, Oz = rz, rz += Xz, vz = 0) : (Zz += wz, Oz = Nz, Nz += sz, vz = 2) : oz < Nz ? (Fz += Kz, Oz = oz, oz += fz, vz = 1) : (Zz += wz, Oz = Nz, Nz += sz, vz = 2)
        }
        return tz && (tz[0] = uz + Oz * nz, tz[1] = bz + Oz * iz, tz[2] = Ez + Oz * lz), Hz && (Hz[0] = Hz[1] = Hz[2] = 0), 0
      }(zz, lz, Mz, tz, Hz /= dz, Oz /= dz, pz /= dz, Ez = "undefined" === typeof Ez ? 64 : +Ez, nz, iz)
    }
  },
  38463: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Mz,
      f: () => iz
    });
    var Ez = bz(3874);
    let nz = null;

    function iz(zz) {
      return null !== nz && zz === nz
    }

    function lz() {
      this.PU = !1, this.stopPropagation = !1, this.aU = !1, this.disabled = !1
    }
    class Mz {
      constructor(zz, uz) {
        this.version = "0.7.0";
        var bz = Object.assign({}, new lz, uz || {});
        this.element = zz || document, this.PU = !!bz.PU, this.stopPropagation = !!bz.stopPropagation, this.aU = !!bz.aU, this.disabled = !!bz.disabled, this.filterEvents = (zz, uz) => !0, this.down = new Ez.EventEmitter, this.up = new Ez.EventEmitter, this.state = {}, this.WU = {
          dx: 0,
          dy: 0,
          dzz: 0,
          Fzz: 0,
          Rzz: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Hz(this) : document.addEventListener("DOMContentLoaded", (zz => {
          Hz(this)
        }), {
          once: !0
        })
      }
      bind(zz) {
        for (var uz = arguments.length, bz = new Array(uz > 1 ? uz - 1 : 0), Ez = 1; Ez < uz; Ez++) bz[Ez - 1] = arguments[Ez];
        bz.forEach((uz => {
          var bz = this._keyBindmap[uz] || [];
          bz.includes(zz) || (bz.push(zz), this._keyBindmap[uz] = bz)
        })), this.state[zz] = !!this.state[zz], this.pressCount[zz] = this.pressCount[zz] || 0, this.releaseCount[zz] = this.releaseCount[zz] || 0
      }
      unbind(zz) {
        for (var uz in this._keyBindmap) {
          var bz = this._keyBindmap[uz],
            Ez = bz.indexOf(zz);
          Ez > -1 && bz.splice(Ez, 1)
        }
      }
      getBindings() {
        var zz = {};
        for (var uz in this._keyBindmap) {
          this._keyBindmap[uz].forEach((bz => {
            zz[bz] = zz[bz] || [], zz[bz].push(uz)
          }))
        }
        return zz
      }
      sd() {
        tz(this.WU), tz(this.pressCount), tz(this.releaseCount)
      }
    }

    function tz(zz) {
      for (var uz in zz) zz[uz] = 0
    }

    function Hz(zz) {
      window.addEventListener("keydown", Kz.bind(null, zz, !0), !1), window.addEventListener("keyup", Kz.bind(null, zz, !1), !1);
      var uz = {
        passive: !0
      };
      zz.element.addEventListener("touchstart", Fz.bind(void 0, zz), {
        passive: !1
      }), zz.element.addEventListener("touchend", Rz.bind(void 0, zz), uz), zz.element.addEventListener("mousedown", wz.bind(null, zz, !0), uz), window.document.addEventListener("mouseup", wz.bind(null, zz, !1), uz), zz.element.addEventListener("touchmove", Xz.bind(null, zz), uz), zz.element.addEventListener("mousemove", Xz.bind(null, zz), uz), window.PointerEvent, zz.element.addEventListener("wheel", fz.bind(null, zz), uz), zz.element.addEventListener("contextmenu", sz.bind(null, zz), !1), window.addEventListener("blur", Nz.bind(null, zz), !1)
    }
    var Oz = 0,
      pz = 0,
      dz = null;

    function Fz(zz, uz) {
      uz.preventDefault(), Zz(uz)
    }

    function Zz(zz) {
      let uz = !1;
      for (let bz = 0; bz < zz.touches.length; ++bz)
        if (zz.touches[bz].identifier === dz) {
          uz = !0;
          break
        } if (!uz) {
        const uz = zz.changedTouches[0];
        Oz = uz.clientX, pz = uz.clientY, dz = uz.identifier
      }
    }

    function Rz(zz, uz) {
      for (var bz = uz.changedTouches, Ez = 0; Ez < bz.length; ++Ez) bz[Ez].identifier === dz && (dz = null)
    }

    function Kz(zz, uz, bz) {
      try {
        vz(zz, bz), uz && bz.isTrusted && !bz.repeat && zz._keyStates[bz.code] && xz(zz, bz.code)
      } finally {
        Jz(bz.code, uz, zz, bz)
      }
    }

    function wz(zz, uz, bz) {
      try {
        vz(zz, bz)
      } finally {
        ! function(zz, uz, bz) {
          if ("pointerId" in bz)
            if (uz) {
              if (null !== zz._touches.currID) return;
              zz._touches.currID = bz.pointerId
            } else {
              if (zz._touches.currID !== bz.pointerId) return;
              zz._touches.currID = null
            } var Ez = "button" in bz ? bz.button + 1 : 1;
          Jz("Mouse" + Ez, uz, zz, bz)
        }(zz, uz, bz)
      }
    }

    function Xz(zz, uz) {
      var bz = uz.movementX || uz.mozMovementX || 0,
        Ez = uz.movementY || uz.mozMovementY || 0;
      if (uz.touches && 0 === (bz | Ez)) {
        var nz = function(zz) {
          Zz(zz);
          for (let uz = 0; uz < zz.changedTouches.length; ++uz)
            if (zz.changedTouches[uz].identifier == dz) {
              const bz = zz.changedTouches[uz],
                Ez = [bz.clientX - Oz, bz.clientY - pz];
              return Oz = bz.clientX, pz = bz.clientY, Ez
            } return console.error(`Did not find touch id ${dz}`), [0, 0]
        }(uz);
        bz = nz[0], Ez = nz[1]
      }
      zz.WU.dx += bz, zz.WU.dy += Ez
    }

    function fz(zz, uz) {
      vz(zz, uz);
      var bz = 1;
      switch (uz.deltaMode) {
        case 0:
          bz = 1;
          break;
        case 1:
          bz = 12;
          break;
        case 2:
          bz = zz.element.clientHeight || window.innerHeight
      }
      zz.WU.dzz += (uz.deltaX || 0) * bz, zz.WU.Fzz += (uz.deltaY || 0) * bz, zz.WU.Rzz += (uz.deltaZ || 0) * bz
    }

    function sz(zz, uz) {
      if (!zz.aU) return uz.preventDefault(), !1
    }
    var rz = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function oz(zz, uz) {
      return !!zz[rz[uz]] || ("AltRight" === uz || "ControlLeft" === uz) && "function" === typeof zz.getModifierState && !0 === zz.getModifierState("AltGraph")
    }

    function Nz(zz, uz) {
      for (var bz in zz._modifiersHeldThroughBlur = {}, rz) zz._keyStates[bz] && (zz._modifiersHeldThroughBlur[bz] = !0);
      uz && uz.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (zz) {
          return !0
        }
      }() && (clearTimeout(zz._blurRelease), zz._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var uz in zz._modifiersHeldThroughBlur = {}, zz._keyStates) zz._keyStates[uz] && !/^Mouse\d/.test(uz) && xz(zz, uz)
      }), 0))
    }

    function vz(zz, uz) {
      var bz = zz._modifiersHeldThroughBlur;
      if (bz && uz.isTrusted && document.hasFocus())
        for (var Ez in bz) delete bz[Ez], zz._keyStates[Ez] && Ez !== uz.code && (oz(uz, Ez) || xz(zz, Ez))
    }

    function xz(zz, uz) {
      const bz = {
          code: uz,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Ez = nz;
      nz = bz;
      try {
        Jz(uz, !1, zz, bz)
      } finally {
        nz = Ez
      }
    }

    function Jz(zz, uz, bz, Ez) {
      var nz = bz._keyBindmap[zz];
      nz && (Az(bz._keyStates[zz], uz) && (bz._keyStates[zz] = uz, nz.forEach((zz => {
        (!bz.filterEvents || bz.filterEvents(Ez, zz)) && function(zz, uz, bz, Ez) {
          var nz = uz ? bz.pressCount : bz.releaseCount;
          nz[zz] = (nz[zz] || 0) + 1;
          var iz = bz._bindPressCount[zz] || 0;
          (iz += uz ? 1 : -1) < 0 && (iz = 0);
          bz._bindPressCount[zz] = iz;
          var lz = bz.state[zz];
          if (Az(lz, iz)) {
            bz.state[zz] = iz > 0;
            var Mz = uz ? bz.down : bz.up;
            bz.disabled || Mz.emit(zz, Ez)
          }
        }(zz, uz, bz, Ez)
      }))), "button" in Ez || (bz.PU && !Ez.defaultPrevented && Ez.preventDefault(), bz.stopPropagation && Ez.stopPropagation()))
    }

    function Az(zz, uz) {
      return zz ? !uz : uz
    }
  },
  36019: (zz, uz) => {
    function bz(zz) {
      if (zz && "object" === typeof zz) {
        var uz = zz.which || zz.keyCode || zz.charCode;
        uz && (zz = uz)
      }
      if ("number" === typeof zz) return lz[zz];
      var bz, iz = String(zz);
      return (bz = Ez[iz.toLowerCase()]) ? bz : (bz = nz[iz.toLowerCase()]) || (1 === iz.length ? iz.charCodeAt(0) : void 0)
    }
    bz.isEventKey = function(zz, uz) {
      if (zz && "object" === typeof zz) {
        var bz = zz.which || zz.keyCode || zz.charCode;
        if (null === bz || void 0 === bz) return !1;
        if ("string" === typeof uz) {
          var iz;
          if (iz = Ez[uz.toLowerCase()]) return iz === bz;
          if (iz = nz[uz.toLowerCase()]) return iz === bz
        } else if ("number" === typeof uz) return uz === bz;
        return !1
      }
    };
    var Ez = (uz = zz.exports = bz).code = uz.codes = {
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
      nz = uz.aliases = {
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
    for (iz = 97; iz < 123; iz++) Ez[String.fromCharCode(iz)] = iz - 32;
    for (var iz = 48; iz < 58; iz++) Ez[iz - 48] = iz;
    for (iz = 1; iz < 13; iz++) Ez["f" + iz] = iz + 111;
    for (iz = 0; iz < 10; iz++) Ez["numpad " + iz] = iz + 96;
    var lz = uz.names = uz.title = {};
    for (iz in Ez) lz[Ez[iz]] = iz;
    for (var Mz in nz) Ez[Mz] = nz[Mz]
  },
  38903: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Ez
    });
    class Ez {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.WG = !1, this.YG = !1, this.pT = 30, this.mG = 0, this.zV = 100, this.AK = !1, this.fullscreen = !1, this.Hs = function(zz) {}, this.bV = function(zz, uz, bz) {}, this.HV = function() {}, this.Fs = function() {}, this.lV = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(zz) {}, this._data = new nz(uz),
          function(zz) {
            if ("loading" === document.readyState) {
              var uz = () => {
                document.removeEventListener("readystatechange", uz), zz()
              };
              document.addEventListener("readystatechange", uz)
            } else setTimeout(zz, 0)
          }((() => {
            ! function(zz) {
              var uz = zz._data,
                bz = uz.nowObject.now();
              uz.lastTickStarted = bz, uz.lastFrameStarted = bz, uz.lastRenderStarted = bz, uz.frameCB = () => function(zz) {
                var uz = zz._data;
                requestAnimationFrame(uz.frameCB), Mz(zz);
                var bz = uz.nowObject.now(),
                  Ez = bz - uz.lastFrameStarted;
                if (uz.lastFrameStarted = bz, zz.mG > 0) {
                  uz.renderAccum += Ez;
                  var nz = 1e3 / zz.mG;
                  if (uz.renderAccum < nz) return;
                  uz.renderAccum -= nz, uz.renderAccum > nz && (uz.renderAccum = nz)
                }
                var iz = bz - uz.lastRenderStarted;
                uz.lastRenderStarted = bz;
                var lz = 1e3 / zz.pT,
                  tz = (bz - uz.lastTickStarted) / lz;
                tz < 0 && (tz = 0);
                zz.bV(iz, tz, lz), setTimeout(Mz, 0, zz, !0)
              }(zz), uz.intervalCB = () => Mz(zz), requestAnimationFrame(uz.frameCB), uz.pollTime > 0 && (uz.intervalID = setInterval(uz.intervalCB, Math.max(uz.pollTime, 1e3 / zz.pT / 2)))
            }(this),
            function(zz, uz) {
              if (!uz) return;
              var bz = !1,
                Ez = !1,
                nz = zz => {
                  if (!!zz !== (bz = uz === document.pointerLockElement))
                    if (zz) {
                      var Ez = uz.requestPointerLock();
                      Ez && Ez.catch && Ez.catch((zz => {}))
                    } else document.exitPointerLock()
                },
                iz = zz => {
                  !!zz !== (Ez = uz === document.fullscreenElement) && (zz ? uz.requestFullscreen ? uz.requestFullscreen() : uz.webkitRequestFullscreen && uz.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (Ez => {
                bz = uz === document.pointerLockElement, zz.lV(bz)
              })), document.addEventListener("fullscreenchange", (bz => {
                Ez = uz === document.fullscreenElement, zz.onFullscreenChanged(Ez)
              })), document.addEventListener("pointerlockerror", (Ez => {
                bz = uz === document.pointerLockElement, zz.onPointerLockError(Ez)
              })), Object.defineProperty(zz, "AK", {
                get: () => bz,
                set: nz
              }), Object.defineProperty(zz, "fullscreen", {
                get: () => Ez,
                set: iz
              }), uz.addEventListener("click", (uz => {
                zz.WG && nz(!0), zz.YG && iz(!0)
              }));
              var lz = () => zz.Fs();
              if (window.ResizeObserver) {
                new ResizeObserver(lz).observe(uz)
              } else window.addEventListener("resize", lz)
            }(this, zz), this.HV()
          }))
      }
    }

    function nz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = zz, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var iz = 3,
      lz = 20;

    function Mz(zz) {
      for (var uz = zz._data, bz = 1e3 / zz.pT, Ez = uz.nowObject.now() + lz, nz = 0; uz.nowObject.now() >= uz.lastTickStarted + bz && uz.nowObject.now() < Ez && ++nz <= iz;) zz.Hs(bz), uz.lastTickStarted += bz;
      var Mz = 5 * (bz + 5),
        tz = uz.nowObject.now();
      if (tz - uz.lastTickStarted > Mz)
        for (; tz >= uz.lastTickStarted + bz;) uz.lastTickStarted += bz
    }
  },
  36179: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz
    });
    var Ez = bz(56);
    const nz = Ez.useLayoutEffect;
    const iz = function(zz) {
      var uz = (0, Ez.useRef)(zz);
      return nz((function() {
        uz.current = zz
      })), uz
    };
    var lz = function(zz) {
      var uz = iz(zz);
      (0, Ez.useEffect)((function() {
        var zz = function(zz) {
          var bz;
          if (null != uz.current && (bz = uz.current(zz)), zz.defaultPrevented && (zz.returnValue = ""), "string" === typeof bz) return zz.returnValue = bz, bz
        };
        return window.addEventListener("beforeunload", zz),
          function() {
            window.removeEventListener("beforeunload", zz)
          }
      }), [])
    }
  },
  36053: zz => {
    var uz, bz = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Ez = /OS X/.test(bz),
      nz = /Opera/.test(bz),
      iz = !/like Gecko/.test(bz) && !nz,
      lz = zz.exports = {
        0: Ez ? "<menu>" : "<UNK>",
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
        93: Ez ? "<meta>" : "<menu>",
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
        173: Ez && iz ? "-" : "<volume-mute>",
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
        231: nz ? "`" : "<unicode>",
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
    for (uz = 58; uz < 65; ++uz) lz[uz] = String.fromCharCode(uz);
    for (uz = 48; uz < 58; ++uz) lz[uz] = uz - 48 + "";
    for (uz = 65; uz < 91; ++uz) lz[uz] = String.fromCharCode(uz);
    for (uz = 96; uz < 106; ++uz) lz[uz] = "<num-" + (uz - 96) + ">";
    for (uz = 112; uz < 136; ++uz) lz[uz] = "F" + (uz - 111)
  },
  38401: (zz, uz, bz) => {
    function Ez(zz, uz, bz, Ez, nz) {
      var iz = {};
      return Object.keys(Ez).forEach((function(zz) {
        iz[zz] = Ez[zz]
      })), iz.enumerable = !!iz.enumerable, iz.configurable = !!iz.configurable, ("value" in iz || iz.initializer) && (iz.writable = !0), iz = bz.slice().reverse().reduce((function(bz, Ez) {
        return Ez(zz, uz, bz) || bz
      }), iz), nz && void 0 !== iz.initializer && (iz.value = iz.initializer ? iz.initializer.call(nz) : void 0, iz.initializer = void 0), void 0 === iz.initializer && (Object.defineProperty(zz, uz, iz), iz = null), iz
    }
    bz.d(uz, {
      d: () => Ez
    })
  },
  38393: (zz, uz, bz) => {
    function Ez(zz, uz, bz, Ez) {
      bz && Object.defineProperty(zz, uz, {
        enumerable: bz.enumerable,
        configurable: bz.configurable,
        writable: bz.writable,
        value: bz.initializer ? bz.initializer.call(Ez) : void 0
      })
    }
    bz.d(uz, {
      c: () => Ez
    })
  },
  38054: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz
    });
    var Ez = bz(38060);
    const nz = (zz, uz, bz) => zz ? zz.getClassName && "Mesh" === zz.getClassName() ? null : !zz.getClassName || "SubMesh" !== zz.getClassName() && "PhysicsBody" !== zz.getClassName() ? zz.clone ? zz.clone() : Array.isArray(zz) ? zz.slice() : bz && "object" === typeof zz ? {
      ...zz
    } : null : zz.clone(uz) : null;
    class iz {
      static DeepCopy(zz, uz, bz, iz) {
        let lz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Mz = function(zz) {
          const uz = [];
          do {
            const bz = Object.getOwnPropertyNames(zz);
            for (const zz of bz) - 1 === uz.indexOf(zz) && uz.push(zz)
          } while (zz = Object.getPrototypeOf(zz));
          return uz
        }(zz);
        for (const Hz of Mz) {
          if ("_" === Hz[0] && (!iz || -1 === iz.indexOf(Hz))) continue;
          if (Hz.endsWith("Observable")) continue;
          if (bz && -1 !== bz.indexOf(Hz)) continue;
          const Mz = zz[Hz],
            Oz = typeof Mz;
          if ("function" !== Oz) try {
            if ("object" === Oz)
              if (Mz instanceof Uint8Array) uz[Hz] = Uint8Array.from(Mz);
              else if (Mz instanceof Array) {
              if (uz[Hz] = [], Mz.length > 0)
                if ("object" == typeof Mz[0])
                  for (let zz = 0; zz < Mz.length; zz++) {
                    const bz = nz(Mz[zz], uz, lz); - 1 === uz[Hz].indexOf(bz) && uz[Hz].push(bz)
                  } else uz[Hz] = Mz.slice(0)
            } else uz[Hz] = nz(Mz, uz, lz);
            else uz[Hz] = Mz
          } catch (tz) {
            Ez.e.Warn(tz.message)
          }
        }
      }
    }
  },
  38089: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz,
      f: () => iz,
      j: () => lz,
      k: () => Mz
    });
    var Ez = bz(36715);
    class nz {
      constructor(zz, uz, bz) {
        this.gradient = zz, this.color1 = uz, this.color2 = bz
      }
      getColorToRef(zz) {
        this.color2 ? Ez.g.LerpToRef(this.color1, this.color2, Math.random(), zz) : zz.euz(this.color1)
      }
    }
    class iz {
      constructor(zz, uz) {
        this.gradient = zz, this.color = uz
      }
    }
    class lz {
      constructor(zz, uz, bz) {
        this.gradient = zz, this.factor1 = uz, this.factor2 = bz
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class Mz {
      static GetCurrentGradient(zz, uz, bz) {
        if (uz[0].gradient > zz) return void bz(uz[0], uz[0], 1);
        for (let nz = 0; nz < uz.length - 1; nz++) {
          const Ez = uz[nz],
            iz = uz[nz + 1];
          if (zz >= Ez.gradient && zz <= iz.gradient) {
            return void bz(Ez, iz, (zz - Ez.gradient) / (iz.gradient - Ez.gradient))
          }
        }
        const Ez = uz.length - 1;
        bz(uz[Ez], uz[Ez], 1)
      }
    }
  },
  38060: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez
    });
    class Ez {
      static _CheckLimit(zz, uz) {
        let bz = Ez._LogLimitOutputs[zz];
        return bz ? bz.current++ : (bz = {
          limit: uz,
          current: 1
        }, Ez._LogLimitOutputs[zz] = bz), bz.current <= bz.limit
      }
      static _GenerateLimitMessage(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const bz = Ez._LogLimitOutputs[zz];
        if (!bz || !Ez.MessageLimitReached) return;
        const nz = this._Levels[uz];
        bz.current === bz.limit && Ez[nz.name](Ez.MessageLimitReached.replace(/%LIMIT%/g, "" + bz.limit).replace(/%TYPE%/g, nz.name ?? ""))
      }
      static _AddLogEntry(zz) {
        Ez._LogCache = zz + Ez._LogCache, Ez.OnNewCacheEntry && Ez.OnNewCacheEntry(zz)
      }
      static _FormatMessage(zz) {
        const uz = zz => zz < 10 ? "0" + zz : "" + zz,
          bz = new Date;
        return "[" + uz(bz.getHours()) + ":" + uz(bz.getMinutes()) + ":" + uz(bz.getSeconds()) + "]: " + zz
      }
      static _LogDisabled(zz, uz) {}
      static _LogEnabled() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          uz = arguments.length > 1 ? arguments[1] : void 0,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        const nz = Array.isArray(uz) ? uz[0] : uz;
        if (void 0 !== bz && !Ez._CheckLimit(nz, bz)) return;
        const iz = Ez._FormatMessage(nz),
          lz = this._Levels[zz],
          Mz = Array.isArray(uz) ? uz.slice(1) : [];
        lz.logFunc && lz.logFunc("BJS - " + iz, ...Mz);
        const tz = `<div style='color:${lz.color}'>${iz}</div><br>`;
        Ez._AddLogEntry(tz), Ez._GenerateLimitMessage(nz, zz)
      }
      static get LogCache() {
        return Ez._LogCache
      }
      static ClearLogCache() {
        Ez._LogCache = "", Ez._LogLimitOutputs = {}, Ez.errorsCount = 0
      }
      static set LogLevels(zz) {
        Ez.Log = Ez._LogDisabled, Ez.Warn = Ez._LogDisabled, Ez.Error = Ez._LogDisabled;
        const uz = [Ez.MessageLogLevel, Ez.WarningLogLevel, Ez.ErrorLogLevel];
        for (const bz of uz)
          if ((zz & bz) === bz) {
            const zz = this._Levels[bz];
            Ez[zz.name] = Ez._LogEnabled.bind(Ez, bz)
          }
      }
    }
    Ez.NoneLogLevel = 0, Ez.MessageLogLevel = 1, Ez.WarningLogLevel = 2, Ez.ErrorLogLevel = 4, Ez.AllLogLevel = 7, Ez.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Ez._LogCache = "", Ez._LogLimitOutputs = {}, Ez._Levels = [{}, {
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
    }], Ez.errorsCount = 0, Ez.Log = Ez._LogEnabled.bind(Ez, Ez.MessageLogLevel), Ez.Warn = Ez._LogEnabled.bind(Ez, Ez.WarningLogLevel), Ez.Error = Ez._LogEnabled.bind(Ez, Ez.ErrorLogLevel)
  },
  38096: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz
    });
    var Ez = bz(36519),
      nz = bz(36553),
      iz = bz(38054);
    class lz {
      constructor() {
        this.direction1 = new Ez.n(0, 1, 0), this.direction2 = new Ez.n(0, 1, 0), this.minEmitBox = new Ez.n(-.5, -.5, -.5), this.maxEmitBox = new Ez.n(.5, .5, .5)
      }
      startDirectionFunction(zz, uz, bz, iz) {
        const lz = (0, nz.RandomRange)(this.direction1.x, this.direction2.x),
          Mz = (0, nz.RandomRange)(this.direction1.y, this.direction2.y),
          tz = (0, nz.RandomRange)(this.direction1.z, this.direction2.z);
        if (iz) return uz.x = lz, uz.y = Mz, void(uz.z = tz);
        Ez.n.TransformNormalFromFloatsToRef(lz, Mz, tz, zz, uz)
      }
      startPositionFunction(zz, uz, bz, iz) {
        const lz = (0, nz.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          Mz = (0, nz.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          tz = (0, nz.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (iz) return uz.x = lz, uz.y = Mz, void(uz.z = tz);
        Ez.n.TransformCoordinatesFromFloatsToRef(lz, Mz, tz, zz, uz)
      }
      clone() {
        const zz = new lz;
        return iz.b.DeepCopy(this, zz), zz
      }
      applyToShader(zz) {
        zz.setVector3("direction1", this.direction1), zz.setVector3("direction2", this.direction2), zz.setVector3("minEmitBox", this.minEmitBox), zz.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(zz) {
        zz.addUniform("direction1", 3), zz.addUniform("direction2", 3), zz.addUniform("minEmitBox", 3), zz.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const zz = {};
        return zz.type = this.getClassName(), zz.direction1 = this.direction1.obz(), zz.direction2 = this.direction2.obz(), zz.minEmitBox = this.minEmitBox.obz(), zz.maxEmitBox = this.maxEmitBox.obz(), zz
      }
      parse(zz) {
        Ez.n.FromArrayToRef(zz.direction1, 0, this.direction1), Ez.n.FromArrayToRef(zz.direction2, 0, this.direction2), Ez.n.FromArrayToRef(zz.minEmitBox, 0, this.minEmitBox), Ez.n.FromArrayToRef(zz.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38047: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Mz,
      e: () => lz
    });
    var Ez = bz(36519),
      nz = bz(36553),
      iz = bz(38054);
    class lz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = zz, this.height = uz, this.radiusRange = bz, this.directionRandomizer = nz, this._tempVector = Ez.n.Zero()
      }
      startDirectionFunction(zz, uz, bz, iz, lz) {
        bz.position.subtractToRef(zz.getTranslation(), this._tempVector), this._tempVector.normalize(), Ez.n.TransformNormalToRef(this._tempVector, lz, this._tempVector);
        const Mz = (0, nz.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let tz = Math.atan2(this._tempVector.x, this._tempVector.z);
        tz += (0, nz.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = Mz, this._tempVector.x = Math.sin(tz), this._tempVector.z = Math.cos(tz), this._tempVector.normalize(), iz ? uz.euz(this._tempVector) : Ez.n.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, zz, uz)
      }
      startPositionFunction(zz, uz, bz, iz) {
        const lz = (0, nz.RandomRange)(-this.height / 2, this.height / 2),
          Mz = (0, nz.RandomRange)(0, 2 * Math.PI),
          tz = (0, nz.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          Hz = Math.sqrt(tz) * this.radius,
          Oz = Hz * Math.cos(Mz),
          pz = Hz * Math.sin(Mz);
        iz ? uz.P_(Oz, lz, pz) : Ez.n.TransformCoordinatesFromFloatsToRef(Oz, lz, pz, zz, uz)
      }
      clone() {
        const zz = new lz(this.radius, this.directionRandomizer);
        return iz.b.DeepCopy(this, zz), zz
      }
      applyToShader(zz) {
        zz.setFloat("radius", this.radius), zz.setFloat("height", this.height), zz.setFloat("radiusRange", this.radiusRange), zz.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(zz) {
        zz.addUniform("radius", 1), zz.addUniform("height", 1), zz.addUniform("radiusRange", 1), zz.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const zz = {};
        return zz.type = this.getClassName(), zz.radius = this.radius, zz.height = this.height, zz.radiusRange = this.radiusRange, zz.directionRandomizer = this.directionRandomizer, zz
      }
      parse(zz) {
        this.radius = zz.radius, this.height = zz.height, this.radiusRange = zz.radiusRange, this.directionRandomizer = zz.directionRandomizer
      }
    }
    class Mz extends lz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ez.n(0, 1, 0),
          iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Ez.n(0, 1, 0);
        super(zz, uz, bz), this.direction1 = nz, this.direction2 = iz
      }
      startDirectionFunction(zz, uz, bz, iz) {
        const lz = (0, nz.RandomRange)(this.direction1.x, this.direction2.x),
          Mz = (0, nz.RandomRange)(this.direction1.y, this.direction2.y),
          tz = (0, nz.RandomRange)(this.direction1.z, this.direction2.z);
        iz ? uz.P_(lz, Mz, tz) : Ez.n.TransformNormalFromFloatsToRef(lz, Mz, tz, zz, uz)
      }
      clone() {
        const zz = new Mz(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return iz.b.DeepCopy(this, zz), zz
      }
      applyToShader(zz) {
        zz.setFloat("radius", this.radius), zz.setFloat("height", this.height), zz.setFloat("radiusRange", this.radiusRange), zz.setVector3("direction1", this.direction1), zz.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(zz) {
        zz.addUniform("radius", 1), zz.addUniform("height", 1), zz.addUniform("radiusRange", 1), zz.addUniform("direction1", 3), zz.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const zz = super.serialize();
        return zz.direction1 = this.direction1.obz(), zz.direction2 = this.direction2.obz(), zz
      }
      parse(zz) {
        super.parse(zz), Ez.n.FromArrayToRef(zz.direction1, 0, this.direction1), Ez.n.FromArrayToRef(zz.direction2, 0, this.direction2)
      }
    }
  },
  38159: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => pz
    });
    const Ez = .5 * (Math.sqrt(3) - 1),
      nz = (3 - Math.sqrt(3)) / 6,
      iz = 1 / 3,
      lz = 1 / 6,
      Mz = (Math.sqrt(5) - 1) / 4,
      tz = (5 - Math.sqrt(5)) / 20,
      Hz = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      Oz = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const pz = class {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const uz = "function" == typeof zz ? zz : function(zz) {
          let uz = 0,
            bz = 0,
            Ez = 0,
            nz = 1;
          const iz = function() {
            let zz = 4022871197;
            return function(uz) {
              uz = uz.toString();
              for (let bz = 0; bz < uz.length; bz++) {
                zz += uz.charCodeAt(bz);
                let Ez = .02519603282416938 * zz;
                zz = Ez >>> 0, Ez -= zz, Ez *= zz, zz = Ez >>> 0, Ez -= zz, zz += 4294967296 * Ez
              }
              return 2.3283064365386963e-10 * (zz >>> 0)
            }
          }();
          uz = iz(" "), bz = iz(" "), Ez = iz(" "), uz -= iz(zz), uz < 0 && (uz += 1);
          bz -= iz(zz), bz < 0 && (bz += 1);
          Ez -= iz(zz), Ez < 0 && (Ez += 1);
          return function() {
            const zz = 2091639 * uz + 2.3283064365386963e-10 * nz;
            return uz = bz, bz = Ez, Ez = zz - (nz = 0 | zz)
          }
        }(zz);
        this.p = function(zz) {
          const uz = new Uint8Array(256);
          for (let bz = 0; bz < 256; bz++) uz[bz] = bz;
          for (let bz = 0; bz < 255; bz++) {
            const Ez = bz + ~~(zz() * (256 - bz)),
              nz = uz[bz];
            uz[bz] = uz[Ez], uz[Ez] = nz
          }
          return uz
        }(uz), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let bz = 0; bz < 512; bz++) this.perm[bz] = this.p[255 & bz], this.permMod12[bz] = this.perm[bz] % 12
      }
      noise2D(zz, uz) {
        const bz = this.permMod12,
          iz = this.perm;
        let lz = 0,
          Mz = 0,
          tz = 0;
        const Oz = (zz + uz) * Ez,
          pz = Math.floor(zz + Oz),
          dz = Math.floor(uz + Oz),
          Fz = (pz + dz) * nz,
          Zz = zz - (pz - Fz),
          Rz = uz - (dz - Fz);
        let Kz, wz;
        Zz > Rz ? (Kz = 1, wz = 0) : (Kz = 0, wz = 1);
        const Xz = Zz - Kz + nz,
          fz = Rz - wz + nz,
          sz = Zz - 1 + 2 * nz,
          rz = Rz - 1 + 2 * nz,
          oz = 255 & pz,
          Nz = 255 & dz;
        let vz = .5 - Zz * Zz - Rz * Rz;
        if (vz >= 0) {
          const zz = 3 * bz[oz + iz[Nz]];
          vz *= vz, lz = vz * vz * (Hz[zz] * Zz + Hz[zz + 1] * Rz)
        }
        let xz = .5 - Xz * Xz - fz * fz;
        if (xz >= 0) {
          const zz = 3 * bz[oz + Kz + iz[Nz + wz]];
          xz *= xz, Mz = xz * xz * (Hz[zz] * Xz + Hz[zz + 1] * fz)
        }
        let Jz = .5 - sz * sz - rz * rz;
        if (Jz >= 0) {
          const zz = 3 * bz[oz + 1 + iz[Nz + 1]];
          Jz *= Jz, tz = Jz * Jz * (Hz[zz] * sz + Hz[zz + 1] * rz)
        }
        return 70 * (lz + Mz + tz)
      }
      noise3D(zz, uz, bz) {
        const Ez = this.permMod12,
          nz = this.perm;
        let Mz, tz, Oz, pz;
        const dz = (zz + uz + bz) * iz,
          Fz = Math.floor(zz + dz),
          Zz = Math.floor(uz + dz),
          Rz = Math.floor(bz + dz),
          Kz = (Fz + Zz + Rz) * lz,
          wz = zz - (Fz - Kz),
          Xz = uz - (Zz - Kz),
          fz = bz - (Rz - Kz);
        let sz, rz, oz, Nz, vz, xz;
        wz >= Xz ? Xz >= fz ? (sz = 1, rz = 0, oz = 0, Nz = 1, vz = 1, xz = 0) : wz >= fz ? (sz = 1, rz = 0, oz = 0, Nz = 1, vz = 0, xz = 1) : (sz = 0, rz = 0, oz = 1, Nz = 1, vz = 0, xz = 1) : Xz < fz ? (sz = 0, rz = 0, oz = 1, Nz = 0, vz = 1, xz = 1) : wz < fz ? (sz = 0, rz = 1, oz = 0, Nz = 0, vz = 1, xz = 1) : (sz = 0, rz = 1, oz = 0, Nz = 1, vz = 1, xz = 0);
        const Jz = wz - sz + lz,
          Az = Xz - rz + lz,
          Tz = fz - oz + lz,
          Lz = wz - Nz + 2 * lz,
          Pz = Xz - vz + 2 * lz,
          Gz = fz - xz + 2 * lz,
          az = wz - 1 + .5,
          Vz = Xz - 1 + .5,
          mz = fz - 1 + .5,
          qz = 255 & Fz,
          hz = 255 & Zz,
          Uz = 255 & Rz;
        let cz = .6 - wz * wz - Xz * Xz - fz * fz;
        if (cz < 0) Mz = 0;
        else {
          const zz = 3 * Ez[qz + nz[hz + nz[Uz]]];
          cz *= cz, Mz = cz * cz * (Hz[zz] * wz + Hz[zz + 1] * Xz + Hz[zz + 2] * fz)
        }
        let gz = .6 - Jz * Jz - Az * Az - Tz * Tz;
        if (gz < 0) tz = 0;
        else {
          const zz = 3 * Ez[qz + sz + nz[hz + rz + nz[Uz + oz]]];
          gz *= gz, tz = gz * gz * (Hz[zz] * Jz + Hz[zz + 1] * Az + Hz[zz + 2] * Tz)
        }
        let Sz = .6 - Lz * Lz - Pz * Pz - Gz * Gz;
        if (Sz < 0) Oz = 0;
        else {
          const zz = 3 * Ez[qz + Nz + nz[hz + vz + nz[Uz + xz]]];
          Sz *= Sz, Oz = Sz * Sz * (Hz[zz] * Lz + Hz[zz + 1] * Pz + Hz[zz + 2] * Gz)
        }
        let yz = .6 - az * az - Vz * Vz - mz * mz;
        if (yz < 0) pz = 0;
        else {
          const zz = 3 * Ez[qz + 1 + nz[hz + 1 + nz[Uz + 1]]];
          yz *= yz, pz = yz * yz * (Hz[zz] * az + Hz[zz + 1] * Vz + Hz[zz + 2] * mz)
        }
        return 32 * (Mz + tz + Oz + pz)
      }
      noise4D(zz, uz, bz, Ez) {
        const nz = this.perm;
        let iz, lz, Hz, pz, dz;
        const Fz = (zz + uz + bz + Ez) * Mz,
          Zz = Math.floor(zz + Fz),
          Rz = Math.floor(uz + Fz),
          Kz = Math.floor(bz + Fz),
          wz = Math.floor(Ez + Fz),
          Xz = (Zz + Rz + Kz + wz) * tz,
          fz = zz - (Zz - Xz),
          sz = uz - (Rz - Xz),
          rz = bz - (Kz - Xz),
          oz = Ez - (wz - Xz);
        let Nz = 0,
          vz = 0,
          xz = 0,
          Jz = 0;
        fz > sz ? Nz++ : vz++, fz > rz ? Nz++ : xz++, fz > oz ? Nz++ : Jz++, sz > rz ? vz++ : xz++, sz > oz ? vz++ : Jz++, rz > oz ? xz++ : Jz++;
        const Az = Nz >= 3 ? 1 : 0,
          Tz = vz >= 3 ? 1 : 0,
          Lz = xz >= 3 ? 1 : 0,
          Pz = Jz >= 3 ? 1 : 0,
          Gz = Nz >= 2 ? 1 : 0,
          az = vz >= 2 ? 1 : 0,
          Vz = xz >= 2 ? 1 : 0,
          mz = Jz >= 2 ? 1 : 0,
          qz = Nz >= 1 ? 1 : 0,
          hz = vz >= 1 ? 1 : 0,
          Uz = xz >= 1 ? 1 : 0,
          cz = Jz >= 1 ? 1 : 0,
          gz = fz - Az + tz,
          Sz = sz - Tz + tz,
          yz = rz - Lz + tz,
          Dz = oz - Pz + tz,
          Qz = fz - Gz + 2 * tz,
          Wz = sz - az + 2 * tz,
          ez = rz - Vz + 2 * tz,
          jz = oz - mz + 2 * tz,
          Iz = fz - qz + 3 * tz,
          Bz = sz - hz + 3 * tz,
          Cz = rz - Uz + 3 * tz,
          Yz = oz - cz + 3 * tz,
          kz = fz - 1 + 4 * tz,
          zu = sz - 1 + 4 * tz,
          uu = rz - 1 + 4 * tz,
          bu = oz - 1 + 4 * tz,
          Eu = 255 & Zz,
          nu = 255 & Rz,
          iu = 255 & Kz,
          lu = 255 & wz;
        let Mu = .6 - fz * fz - sz * sz - rz * rz - oz * oz;
        if (Mu < 0) iz = 0;
        else {
          const zz = nz[Eu + nz[nu + nz[iu + nz[lu]]]] % 32 * 4;
          Mu *= Mu, iz = Mu * Mu * (Oz[zz] * fz + Oz[zz + 1] * sz + Oz[zz + 2] * rz + Oz[zz + 3] * oz)
        }
        let tu = .6 - gz * gz - Sz * Sz - yz * yz - Dz * Dz;
        if (tu < 0) lz = 0;
        else {
          const zz = nz[Eu + Az + nz[nu + Tz + nz[iu + Lz + nz[lu + Pz]]]] % 32 * 4;
          tu *= tu, lz = tu * tu * (Oz[zz] * gz + Oz[zz + 1] * Sz + Oz[zz + 2] * yz + Oz[zz + 3] * Dz)
        }
        let Hu = .6 - Qz * Qz - Wz * Wz - ez * ez - jz * jz;
        if (Hu < 0) Hz = 0;
        else {
          const zz = nz[Eu + Gz + nz[nu + az + nz[iu + Vz + nz[lu + mz]]]] % 32 * 4;
          Hu *= Hu, Hz = Hu * Hu * (Oz[zz] * Qz + Oz[zz + 1] * Wz + Oz[zz + 2] * ez + Oz[zz + 3] * jz)
        }
        let Ou = .6 - Iz * Iz - Bz * Bz - Cz * Cz - Yz * Yz;
        if (Ou < 0) pz = 0;
        else {
          const zz = nz[Eu + qz + nz[nu + hz + nz[iu + Uz + nz[lu + cz]]]] % 32 * 4;
          Ou *= Ou, pz = Ou * Ou * (Oz[zz] * Iz + Oz[zz + 1] * Bz + Oz[zz + 2] * Cz + Oz[zz + 3] * Yz)
        }
        let pu = .6 - kz * kz - zu * zu - uu * uu - bu * bu;
        if (pu < 0) dz = 0;
        else {
          const zz = nz[Eu + 1 + nz[nu + 1 + nz[iu + 1 + nz[lu + 1]]]] % 32 * 4;
          pu *= pu, dz = pu * pu * (Oz[zz] * kz + Oz[zz + 1] * zu + Oz[zz + 2] * uu + Oz[zz + 3] * bu)
        }
        return 27 * (iz + lz + Hz + pz + dz)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);
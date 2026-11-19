/*! For license information please see wd13r.213.375d3c49.chunk.js.LICENSE.txt */
export const id = 213;
export const ids = [213];
export const modules = {
  38858: (DD, CD, cD) => {
    DD.exports = pD;
    var ID = cD(335);

    function pD(DD, CD) {
      if (!(this instanceof pD)) return new pD(DD, CD);
      var cD = ID.create();
      ID.add(cD, DD, CD), this.base = ID.min(ID.create(), DD, cD), this.vec = ID.clone(CD), this.max = ID.max(ID.create(), DD, cD), this.mag = ID.length(this.vec)
    }
    var iD = pD.prototype;
    iD.width = function() {
      return this.vec[0]
    }, iD.height = function() {
      return this.vec[1]
    }, iD.depth = function() {
      return this.vec[2]
    }, iD.x0 = function() {
      return this.base[0]
    }, iD.y0 = function() {
      return this.base[1]
    }, iD.z0 = function() {
      return this.base[2]
    }, iD.x1 = function() {
      return this.max[0]
    }, iD.y1 = function() {
      return this.max[1]
    }, iD.z1 = function() {
      return this.max[2]
    }, iD.translate = function(DD) {
      return ID.add(this.max, this.max, DD), ID.add(this.base, this.base, DD), this
    }, iD.setPosition = function(DD) {
      return ID.add(this.max, DD, this.vec), ID.copy(this.base, DD), this
    }, iD.expand = function(DD) {
      var CD = ID.create(),
        cD = ID.create();
      return ID.max(CD, DD.max, this.max), ID.min(cD, DD.base, this.base), ID.subtract(CD, CD, cD), new pD(cD, CD)
    }, iD.intersects = function(DD) {
      return !(DD.base[0] > this.max[0]) && (!(DD.base[1] > this.max[1]) && (!(DD.base[2] > this.max[2]) && (!(DD.max[0] < this.base[0]) && (!(DD.max[1] < this.base[1]) && !(DD.max[2] < this.base[2])))))
    }, iD.touches = function(DD) {
      var CD = this.union(DD);
      return null !== CD && (0 == CD.width() || 0 == CD.height() || 0 == CD.depth())
    }, iD.union = function(DD) {
      if (!this.intersects(DD)) return null;
      var CD = Math.max(DD.base[0], this.base[0]),
        cD = Math.max(DD.base[1], this.base[1]),
        ID = Math.max(DD.base[2], this.base[2]);
      return new pD([CD, cD, ID], [Math.min(DD.max[0], this.max[0]) - CD, Math.min(DD.max[1], this.max[1]) - cD, Math.min(DD.max[2], this.max[2]) - ID])
    }
  },
  38855: DD => {
    DD.exports = function(DD, CD, cD, ID, pD, iD) {
      var fD = +CD[0],
        bD = +CD[1],
        QD = +CD[2],
        wD = +cD[0],
        SD = +cD[1],
        BD = +cD[2],
        yD = Math.sqrt(wD * wD + SD * SD + BD * BD);
      if (0 === yD) throw new Error("Can't raycast along a zero vector");
      return function(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD) {
        for (var SD = 0, BD = Math.floor, yD = 0 | BD(CD), MD = 0 | BD(cD), tD = 0 | BD(ID), ZD = pD > 0 ? 1 : -1, oD = iD > 0 ? 1 : -1, vD = fD > 0 ? 1 : -1, ND = Math.abs(1 / pD), gD = Math.abs(1 / iD), XD = Math.abs(1 / fD), mD = ND < 1 / 0 ? ND * (ZD > 0 ? yD + 1 - CD : CD - yD) : 1 / 0, nD = gD < 1 / 0 ? gD * (oD > 0 ? MD + 1 - cD : cD - MD) : 1 / 0, OD = XD < 1 / 0 ? XD * (vD > 0 ? tD + 1 - ID : ID - tD) : 1 / 0, PD = -1; SD <= bD;) {
          var HD = DD(yD, MD, tD);
          if (HD) return QD && (QD[0] = CD + SD * pD, QD[1] = cD + SD * iD, QD[2] = ID + SD * fD), wD && (wD[0] = wD[1] = wD[2] = 0, 0 === PD && (wD[0] = -ZD), 1 === PD && (wD[1] = -oD), 2 === PD && (wD[2] = -vD)), HD;
          mD < nD ? mD < OD ? (yD += ZD, SD = mD, mD += ND, PD = 0) : (tD += vD, SD = OD, OD += XD, PD = 2) : nD < OD ? (MD += oD, SD = nD, nD += gD, PD = 1) : (tD += vD, SD = OD, OD += XD, PD = 2)
        }
        return QD && (QD[0] = CD + SD * pD, QD[1] = cD + SD * iD, QD[2] = ID + SD * fD), wD && (wD[0] = wD[1] = wD[2] = 0), 0
      }(DD, fD, bD, QD, wD /= yD, SD /= yD, BD /= yD, ID = "undefined" === typeof ID ? 64 : +ID, pD, iD)
    }
  },
  38455: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => bD,
      f: () => iD
    });
    var ID = cD(3942);
    let pD = null;

    function iD(DD) {
      return null !== pD && DD === pD
    }

    function fD() {
      this.lT = !1, this.stopPropagation = !1, this.eT = !1, this.disabled = !1
    }
    class bD {
      constructor(DD, CD) {
        this.version = "0.7.0";
        var cD = Object.assign({}, new fD, CD || {});
        this.element = DD || document, this.lT = !!cD.lT, this.stopPropagation = !!cD.stopPropagation, this.eT = !!cD.eT, this.disabled = !!cD.disabled, this.filterEvents = (DD, CD) => !0, this.down = new ID.EventEmitter, this.up = new ID.EventEmitter, this.state = {}, this.pG = {
          dx: 0,
          dy: 0,
          yDD: 0,
          MDD: 0,
          tDD: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? wD(this) : document.addEventListener("DOMContentLoaded", (DD => {
          wD(this)
        }), {
          once: !0
        })
      }
      bind(DD) {
        for (var CD = arguments.length, cD = new Array(CD > 1 ? CD - 1 : 0), ID = 1; ID < CD; ID++) cD[ID - 1] = arguments[ID];
        cD.forEach((CD => {
          var cD = this._keyBindmap[CD] || [];
          cD.includes(DD) || (cD.push(DD), this._keyBindmap[CD] = cD)
        })), this.state[DD] = !!this.state[DD], this.pressCount[DD] = this.pressCount[DD] || 0, this.releaseCount[DD] = this.releaseCount[DD] || 0
      }
      unbind(DD) {
        for (var CD in this._keyBindmap) {
          var cD = this._keyBindmap[CD],
            ID = cD.indexOf(DD);
          ID > -1 && cD.splice(ID, 1)
        }
      }
      getBindings() {
        var DD = {};
        for (var CD in this._keyBindmap) {
          this._keyBindmap[CD].forEach((cD => {
            DD[cD] = DD[cD] || [], DD[cD].push(CD)
          }))
        }
        return DD
      }
      wy() {
        QD(this.pG), QD(this.pressCount), QD(this.releaseCount)
      }
    }

    function QD(DD) {
      for (var CD in DD) DD[CD] = 0
    }

    function wD(DD) {
      window.addEventListener("keydown", oD.bind(null, DD, !0), !1), window.addEventListener("keyup", oD.bind(null, DD, !1), !1);
      var CD = {
        passive: !0
      };
      DD.element.addEventListener("touchstart", MD.bind(void 0, DD), {
        passive: !1
      }), DD.element.addEventListener("touchend", ZD.bind(void 0, DD), CD), DD.element.addEventListener("mousedown", vD.bind(null, DD, !0), CD), window.document.addEventListener("mouseup", vD.bind(null, DD, !1), CD), DD.element.addEventListener("touchmove", ND.bind(null, DD), CD), DD.element.addEventListener("mousemove", ND.bind(null, DD), CD), window.PointerEvent, DD.element.addEventListener("wheel", gD.bind(null, DD), CD), DD.element.addEventListener("contextmenu", XD.bind(null, DD), !1), window.addEventListener("blur", OD.bind(null, DD), !1)
    }
    var SD = 0,
      BD = 0,
      yD = null;

    function MD(DD, CD) {
      CD.preventDefault(), tD(CD)
    }

    function tD(DD) {
      let CD = !1;
      for (let cD = 0; cD < DD.touches.length; ++cD)
        if (DD.touches[cD].identifier === yD) {
          CD = !0;
          break
        } if (!CD) {
        const CD = DD.changedTouches[0];
        SD = CD.clientX, BD = CD.clientY, yD = CD.identifier
      }
    }

    function ZD(DD, CD) {
      for (var cD = CD.changedTouches, ID = 0; ID < cD.length; ++ID) cD[ID].identifier === yD && (yD = null)
    }

    function oD(DD, CD, cD) {
      try {
        PD(DD, cD), CD && cD.isTrusted && !cD.repeat && DD._keyStates[cD.code] && HD(DD, cD.code)
      } finally {
        UD(cD.code, CD, DD, cD)
      }
    }

    function vD(DD, CD, cD) {
      try {
        PD(DD, cD)
      } finally {
        ! function(DD, CD, cD) {
          if ("pointerId" in cD)
            if (CD) {
              if (null !== DD._touches.currID) return;
              DD._touches.currID = cD.pointerId
            } else {
              if (DD._touches.currID !== cD.pointerId) return;
              DD._touches.currID = null
            } var ID = "button" in cD ? cD.button + 1 : 1;
          UD("Mouse" + ID, CD, DD, cD)
        }(DD, CD, cD)
      }
    }

    function ND(DD, CD) {
      var cD = CD.movementX || CD.mozMovementX || 0,
        ID = CD.movementY || CD.mozMovementY || 0;
      if (CD.touches && 0 === (cD | ID)) {
        var pD = function(DD) {
          tD(DD);
          for (let CD = 0; CD < DD.changedTouches.length; ++CD)
            if (DD.changedTouches[CD].identifier == yD) {
              const cD = DD.changedTouches[CD],
                ID = [cD.clientX - SD, cD.clientY - BD];
              return SD = cD.clientX, BD = cD.clientY, ID
            } return console.error(`Did not find touch id ${yD}`), [0, 0]
        }(CD);
        cD = pD[0], ID = pD[1]
      }
      DD.pG.dx += cD, DD.pG.dy += ID
    }

    function gD(DD, CD) {
      PD(DD, CD);
      var cD = 1;
      switch (CD.deltaMode) {
        case 0:
          cD = 1;
          break;
        case 1:
          cD = 12;
          break;
        case 2:
          cD = DD.element.clientHeight || window.innerHeight
      }
      DD.pG.yDD += (CD.deltaX || 0) * cD, DD.pG.MDD += (CD.deltaY || 0) * cD, DD.pG.tDD += (CD.deltaZ || 0) * cD
    }

    function XD(DD, CD) {
      if (!DD.eT) return CD.preventDefault(), !1
    }
    var mD = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function nD(DD, CD) {
      return !!DD[mD[CD]] || ("AltRight" === CD || "ControlLeft" === CD) && "function" === typeof DD.getModifierState && !0 === DD.getModifierState("AltGraph")
    }

    function OD(DD, CD) {
      for (var cD in DD._modifiersHeldThroughBlur = {}, mD) DD._keyStates[cD] && (DD._modifiersHeldThroughBlur[cD] = !0);
      CD && CD.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (DD) {
          return !0
        }
      }() && (clearTimeout(DD._blurRelease), DD._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var CD in DD._modifiersHeldThroughBlur = {}, DD._keyStates) DD._keyStates[CD] && !/^Mouse\d/.test(CD) && HD(DD, CD)
      }), 0))
    }

    function PD(DD, CD) {
      var cD = DD._modifiersHeldThroughBlur;
      if (cD && CD.isTrusted && document.hasFocus())
        for (var ID in cD) delete cD[ID], DD._keyStates[ID] && ID !== CD.code && (nD(CD, ID) || HD(DD, ID))
    }

    function HD(DD, CD) {
      const cD = {
          code: CD,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        ID = pD;
      pD = cD;
      try {
        UD(CD, !1, DD, cD)
      } finally {
        pD = ID
      }
    }

    function UD(DD, CD, cD, ID) {
      var pD = cD._keyBindmap[DD];
      pD && (xD(cD._keyStates[DD], CD) && (cD._keyStates[DD] = CD, pD.forEach((DD => {
        (!cD.filterEvents || cD.filterEvents(ID, DD)) && function(DD, CD, cD, ID) {
          var pD = CD ? cD.pressCount : cD.releaseCount;
          pD[DD] = (pD[DD] || 0) + 1;
          var iD = cD._bindPressCount[DD] || 0;
          (iD += CD ? 1 : -1) < 0 && (iD = 0);
          cD._bindPressCount[DD] = iD;
          var fD = cD.state[DD];
          if (xD(fD, iD)) {
            cD.state[DD] = iD > 0;
            var bD = CD ? cD.down : cD.up;
            cD.disabled || bD.emit(DD, ID)
          }
        }(DD, CD, cD, ID)
      }))), "button" in ID || (cD.lT && !ID.defaultPrevented && ID.preventDefault(), cD.stopPropagation && ID.stopPropagation()))
    }

    function xD(DD, CD) {
      return DD ? !CD : CD
    }
  },
  35944: (DD, CD) => {
    function cD(DD) {
      if (DD && "object" === typeof DD) {
        var CD = DD.which || DD.keyCode || DD.charCode;
        CD && (DD = CD)
      }
      if ("number" === typeof DD) return fD[DD];
      var cD, iD = String(DD);
      return (cD = ID[iD.toLowerCase()]) ? cD : (cD = pD[iD.toLowerCase()]) || (1 === iD.length ? iD.charCodeAt(0) : void 0)
    }
    cD.isEventKey = function(DD, CD) {
      if (DD && "object" === typeof DD) {
        var cD = DD.which || DD.keyCode || DD.charCode;
        if (null === cD || void 0 === cD) return !1;
        if ("string" === typeof CD) {
          var iD;
          if (iD = ID[CD.toLowerCase()]) return iD === cD;
          if (iD = pD[CD.toLowerCase()]) return iD === cD
        } else if ("number" === typeof CD) return CD === cD;
        return !1
      }
    };
    var ID = (CD = DD.exports = cD).code = CD.codes = {
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
      pD = CD.aliases = {
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
    for (iD = 97; iD < 123; iD++) ID[String.fromCharCode(iD)] = iD - 32;
    for (var iD = 48; iD < 58; iD++) ID[iD - 48] = iD;
    for (iD = 1; iD < 13; iD++) ID["f" + iD] = iD + 111;
    for (iD = 0; iD < 10; iD++) ID["numpad " + iD] = iD + 96;
    var fD = CD.names = CD.title = {};
    for (iD in ID) fD[ID[iD]] = iD;
    for (var bD in pD) ID[bD] = pD[bD]
  },
  38848: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID
    });
    class ID {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.lK = !1, this.WK = !1, this.Yq = 30, this.NK = 0, this.sK = 100, this.Go = !1, this.fullscreen = !1, this.BX = function(DD) {}, this.hK = function(DD, CD, cD) {}, this.fV = function() {}, this.yX = function() {}, this.rK = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(DD) {}, this._data = new pD(CD),
          function(DD) {
            if ("loading" === document.readyState) {
              var CD = () => {
                document.removeEventListener("readystatechange", CD), DD()
              };
              document.addEventListener("readystatechange", CD)
            } else setTimeout(DD, 0)
          }((() => {
            ! function(DD) {
              var CD = DD._data,
                cD = CD.nowObject.now();
              CD.lastTickStarted = cD, CD.lastFrameStarted = cD, CD.lastRenderStarted = cD, CD.frameCB = () => function(DD) {
                var CD = DD._data;
                requestAnimationFrame(CD.frameCB), bD(DD);
                var cD = CD.nowObject.now(),
                  ID = cD - CD.lastFrameStarted;
                if (CD.lastFrameStarted = cD, DD.NK > 0) {
                  CD.renderAccum += ID;
                  var pD = 1e3 / DD.NK;
                  if (CD.renderAccum < pD) return;
                  CD.renderAccum -= pD, CD.renderAccum > pD && (CD.renderAccum = pD)
                }
                var iD = cD - CD.lastRenderStarted;
                CD.lastRenderStarted = cD;
                var fD = 1e3 / DD.Yq,
                  QD = (cD - CD.lastTickStarted) / fD;
                QD < 0 && (QD = 0);
                DD.hK(iD, QD, fD), setTimeout(bD, 0, DD, !0)
              }(DD), CD.intervalCB = () => bD(DD), requestAnimationFrame(CD.frameCB), CD.pollTime > 0 && (CD.intervalID = setInterval(CD.intervalCB, Math.max(CD.pollTime, 1e3 / DD.Yq / 2)))
            }(this),
            function(DD, CD) {
              if (!CD) return;
              var cD = !1,
                ID = !1,
                pD = DD => {
                  if (!!DD !== (cD = CD === document.pointerLockElement))
                    if (DD) {
                      var ID = CD.requestPointerLock();
                      ID && ID.catch && ID.catch((DD => {}))
                    } else document.exitPointerLock()
                },
                iD = DD => {
                  !!DD !== (ID = CD === document.fullscreenElement) && (DD ? CD.requestFullscreen ? CD.requestFullscreen() : CD.webkitRequestFullscreen && CD.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (ID => {
                cD = CD === document.pointerLockElement, DD.rK(cD)
              })), document.addEventListener("fullscreenchange", (cD => {
                ID = CD === document.fullscreenElement, DD.onFullscreenChanged(ID)
              })), document.addEventListener("pointerlockerror", (ID => {
                cD = CD === document.pointerLockElement, DD.onPointerLockError(ID)
              })), Object.defineProperty(DD, "Go", {
                get: () => cD,
                set: pD
              }), Object.defineProperty(DD, "fullscreen", {
                get: () => ID,
                set: iD
              }), CD.addEventListener("click", (CD => {
                DD.lK && pD(!0), DD.WK && iD(!0)
              }));
              var fD = () => DD.yX();
              if (window.ResizeObserver) {
                new ResizeObserver(fD).observe(CD)
              } else window.addEventListener("resize", fD)
            }(this, DD), this.fV()
          }))
      }
    }

    function pD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = DD, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var iD = 3,
      fD = 20;

    function bD(DD) {
      for (var CD = DD._data, cD = 1e3 / DD.Yq, ID = CD.nowObject.now() + fD, pD = 0; CD.nowObject.now() >= CD.lastTickStarted + cD && CD.nowObject.now() < ID && ++pD <= iD;) DD.BX(cD), CD.lastTickStarted += cD;
      var bD = 5 * (cD + 5),
        QD = CD.nowObject.now();
      if (QD - CD.lastTickStarted > bD)
        for (; QD >= CD.lastTickStarted + cD;) CD.lastTickStarted += cD
    }
  },
  36099: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => fD
    });
    var ID = cD(53);
    const pD = ID.useLayoutEffect;
    const iD = function(DD) {
      var CD = (0, ID.useRef)(DD);
      return pD((function() {
        CD.current = DD
      })), CD
    };
    var fD = function(DD) {
      var CD = iD(DD);
      (0, ID.useEffect)((function() {
        var DD = function(DD) {
          var cD;
          if (null != CD.current && (cD = CD.current(DD)), DD.defaultPrevented && (DD.returnValue = ""), "string" === typeof cD) return DD.returnValue = cD, cD
        };
        return window.addEventListener("beforeunload", DD),
          function() {
            window.removeEventListener("beforeunload", DD)
          }
      }), [])
    }
  },
  35987: DD => {
    var CD, cD = "undefined" !== typeof window ? window.navigator.userAgent : "",
      ID = /OS X/.test(cD),
      pD = /Opera/.test(cD),
      iD = !/like Gecko/.test(cD) && !pD,
      fD = DD.exports = {
        0: ID ? "<menu>" : "<UNK>",
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
        93: ID ? "<meta>" : "<menu>",
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
        173: ID && iD ? "-" : "<volume-mute>",
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
        231: pD ? "`" : "<unicode>",
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
    for (CD = 58; CD < 65; ++CD) fD[CD] = String.fromCharCode(CD);
    for (CD = 48; CD < 58; ++CD) fD[CD] = CD - 48 + "";
    for (CD = 65; CD < 91; ++CD) fD[CD] = String.fromCharCode(CD);
    for (CD = 96; CD < 106; ++CD) fD[CD] = "<num-" + (CD - 96) + ">";
    for (CD = 112; CD < 136; ++CD) fD[CD] = "F" + (CD - 111)
  },
  38384: (DD, CD, cD) => {
    function ID(DD, CD, cD, ID, pD) {
      var iD = {};
      return Object.keys(ID).forEach((function(DD) {
        iD[DD] = ID[DD]
      })), iD.enumerable = !!iD.enumerable, iD.configurable = !!iD.configurable, ("value" in iD || iD.initializer) && (iD.writable = !0), iD = cD.slice().reverse().reduce((function(cD, ID) {
        return ID(DD, CD, cD) || cD
      }), iD), pD && void 0 !== iD.initializer && (iD.value = iD.initializer ? iD.initializer.call(pD) : void 0, iD.initializer = void 0), void 0 === iD.initializer && (Object.defineProperty(DD, CD, iD), iD = null), iD
    }
    cD.d(CD, {
      d: () => ID
    })
  },
  38382: (DD, CD, cD) => {
    function ID(DD, CD, cD, ID) {
      cD && Object.defineProperty(DD, CD, {
        enumerable: cD.enumerable,
        configurable: cD.configurable,
        writable: cD.writable,
        value: cD.initializer ? cD.initializer.call(ID) : void 0
      })
    }
    cD.d(CD, {
      c: () => ID
    })
  },
  38045: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD
    });
    var ID = cD(38048);
    const pD = (DD, CD, cD) => DD ? DD.getClassName && "Mesh" === DD.getClassName() ? null : !DD.getClassName || "SubMesh" !== DD.getClassName() && "PhysicsBody" !== DD.getClassName() ? DD.clone ? DD.clone() : Array.isArray(DD) ? DD.slice() : cD && "object" === typeof DD ? {
      ...DD
    } : null : DD.clone(CD) : null;
    class iD {
      static DeepCopy(DD, CD, cD, iD) {
        let fD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bD = function(DD) {
          const CD = [];
          do {
            const cD = Object.getOwnPropertyNames(DD);
            for (const DD of cD) - 1 === CD.indexOf(DD) && CD.push(DD)
          } while (DD = Object.getPrototypeOf(DD));
          return CD
        }(DD);
        for (const wD of bD) {
          if ("_" === wD[0] && (!iD || -1 === iD.indexOf(wD))) continue;
          if (wD.endsWith("Observable")) continue;
          if (cD && -1 !== cD.indexOf(wD)) continue;
          const bD = DD[wD],
            SD = typeof bD;
          if ("function" !== SD) try {
            if ("object" === SD)
              if (bD instanceof Uint8Array) CD[wD] = Uint8Array.from(bD);
              else if (bD instanceof Array) {
              if (CD[wD] = [], bD.length > 0)
                if ("object" == typeof bD[0])
                  for (let DD = 0; DD < bD.length; DD++) {
                    const cD = pD(bD[DD], CD, fD); - 1 === CD[wD].indexOf(cD) && CD[wD].push(cD)
                  } else CD[wD] = bD.slice(0)
            } else CD[wD] = pD(bD, CD, fD);
            else CD[wD] = bD
          } catch (QD) {
            ID.e.Warn(QD.message)
          }
        }
      }
    }
  },
  38084: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => pD,
      g: () => iD,
      h: () => fD,
      k: () => bD
    });
    var ID = cD(36622);
    class pD {
      constructor(DD, CD, cD) {
        this.gradient = DD, this.color1 = CD, this.color2 = cD
      }
      getColorToRef(DD) {
        this.color2 ? ID.e.LerpToRef(this.color1, this.color2, Math.random(), DD) : DD.YCD(this.color1)
      }
    }
    class iD {
      constructor(DD, CD) {
        this.gradient = DD, this.color = CD
      }
    }
    class fD {
      constructor(DD, CD, cD) {
        this.gradient = DD, this.factor1 = CD, this.factor2 = cD
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class bD {
      static GetCurrentGradient(DD, CD, cD) {
        if (CD[0].gradient > DD) return void cD(CD[0], CD[0], 1);
        for (let pD = 0; pD < CD.length - 1; pD++) {
          const ID = CD[pD],
            iD = CD[pD + 1];
          if (DD >= ID.gradient && DD <= iD.gradient) {
            return void cD(ID, iD, (DD - ID.gradient) / (iD.gradient - ID.gradient))
          }
        }
        const ID = CD.length - 1;
        cD(CD[ID], CD[ID], 1)
      }
    }
  },
  38048: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    class ID {
      static _CheckLimit(DD, CD) {
        let cD = ID._LogLimitOutputs[DD];
        return cD ? cD.current++ : (cD = {
          limit: CD,
          current: 1
        }, ID._LogLimitOutputs[DD] = cD), cD.current <= cD.limit
      }
      static _GenerateLimitMessage(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const cD = ID._LogLimitOutputs[DD];
        if (!cD || !ID.MessageLimitReached) return;
        const pD = this._Levels[CD];
        cD.current === cD.limit && ID[pD.name](ID.MessageLimitReached.replace(/%LIMIT%/g, "" + cD.limit).replace(/%TYPE%/g, pD.name ?? ""))
      }
      static _AddLogEntry(DD) {
        ID._LogCache = DD + ID._LogCache, ID.OnNewCacheEntry && ID.OnNewCacheEntry(DD)
      }
      static _FormatMessage(DD) {
        const CD = DD => DD < 10 ? "0" + DD : "" + DD,
          cD = new Date;
        return "[" + CD(cD.getHours()) + ":" + CD(cD.getMinutes()) + ":" + CD(cD.getSeconds()) + "]: " + DD
      }
      static _LogDisabled(DD, CD) {}
      static _LogEnabled() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          CD = arguments.length > 1 ? arguments[1] : void 0,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        const pD = Array.isArray(CD) ? CD[0] : CD;
        if (void 0 !== cD && !ID._CheckLimit(pD, cD)) return;
        const iD = ID._FormatMessage(pD),
          fD = this._Levels[DD],
          bD = Array.isArray(CD) ? CD.slice(1) : [];
        fD.logFunc && fD.logFunc("BJS - " + iD, ...bD);
        const QD = `<div style='color:${fD.color}'>${iD}</div><br>`;
        ID._AddLogEntry(QD), ID._GenerateLimitMessage(pD, DD)
      }
      static get LogCache() {
        return ID._LogCache
      }
      static ClearLogCache() {
        ID._LogCache = "", ID._LogLimitOutputs = {}, ID.errorsCount = 0
      }
      static set LogLevels(DD) {
        ID.Log = ID._LogDisabled, ID.Warn = ID._LogDisabled, ID.Error = ID._LogDisabled;
        const CD = [ID.MessageLogLevel, ID.WarningLogLevel, ID.ErrorLogLevel];
        for (const cD of CD)
          if ((DD & cD) === cD) {
            const DD = this._Levels[cD];
            ID[DD.name] = ID._LogEnabled.bind(ID, cD)
          }
      }
    }
    ID.NoneLogLevel = 0, ID.MessageLogLevel = 1, ID.WarningLogLevel = 2, ID.ErrorLogLevel = 4, ID.AllLogLevel = 7, ID.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", ID._LogCache = "", ID._LogLimitOutputs = {}, ID._Levels = [{}, {
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
    }], ID.errorsCount = 0, ID.Log = ID._LogEnabled.bind(ID, ID.MessageLogLevel), ID.Warn = ID._LogEnabled.bind(ID, ID.WarningLogLevel), ID.Error = ID._LogEnabled.bind(ID, ID.ErrorLogLevel)
  },
  38089: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => fD
    });
    var ID = cD(36446),
      pD = cD(36479),
      iD = cD(38045);
    class fD {
      constructor() {
        this.direction1 = new ID.p(0, 1, 0), this.direction2 = new ID.p(0, 1, 0), this.minEmitBox = new ID.p(-.5, -.5, -.5), this.maxEmitBox = new ID.p(.5, .5, .5)
      }
      startDirectionFunction(DD, CD, cD, iD) {
        const fD = (0, pD.RandomRange)(this.direction1.x, this.direction2.x),
          bD = (0, pD.RandomRange)(this.direction1.y, this.direction2.y),
          QD = (0, pD.RandomRange)(this.direction1.z, this.direction2.z);
        if (iD) return CD.x = fD, CD.y = bD, void(CD.z = QD);
        ID.p.TransformNormalFromFloatsToRef(fD, bD, QD, DD, CD)
      }
      startPositionFunction(DD, CD, cD, iD) {
        const fD = (0, pD.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          bD = (0, pD.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          QD = (0, pD.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (iD) return CD.x = fD, CD.y = bD, void(CD.z = QD);
        ID.p.TransformCoordinatesFromFloatsToRef(fD, bD, QD, DD, CD)
      }
      clone() {
        const DD = new fD;
        return iD.e.DeepCopy(this, DD), DD
      }
      applyToShader(DD) {
        DD.setVector3("direction1", this.direction1), DD.setVector3("direction2", this.direction2), DD.setVector3("minEmitBox", this.minEmitBox), DD.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(DD) {
        DD.addUniform("direction1", 3), DD.addUniform("direction2", 3), DD.addUniform("minEmitBox", 3), DD.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const DD = {};
        return DD.type = this.getClassName(), DD.direction1 = this.direction1.XcD(), DD.direction2 = this.direction2.XcD(), DD.minEmitBox = this.minEmitBox.XcD(), DD.maxEmitBox = this.maxEmitBox.XcD(), DD
      }
      parse(DD) {
        ID.p.FromArrayToRef(DD.direction1, 0, this.direction1), ID.p.FromArrayToRef(DD.direction2, 0, this.direction2), ID.p.FromArrayToRef(DD.minEmitBox, 0, this.minEmitBox), ID.p.FromArrayToRef(DD.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38041: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => bD,
      g: () => fD
    });
    var ID = cD(36446),
      pD = cD(36479),
      iD = cD(38045);
    class fD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = DD, this.height = CD, this.radiusRange = cD, this.directionRandomizer = pD, this._tempVector = ID.p.Zero()
      }
      startDirectionFunction(DD, CD, cD, iD, fD) {
        cD.position.subtractToRef(DD.getTranslation(), this._tempVector), this._tempVector.normalize(), ID.p.TransformNormalToRef(this._tempVector, fD, this._tempVector);
        const bD = (0, pD.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let QD = Math.atan2(this._tempVector.x, this._tempVector.z);
        QD += (0, pD.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = bD, this._tempVector.x = Math.sin(QD), this._tempVector.z = Math.cos(QD), this._tempVector.normalize(), iD ? CD.YCD(this._tempVector) : ID.p.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, DD, CD)
      }
      startPositionFunction(DD, CD, cD, iD) {
        const fD = (0, pD.RandomRange)(-this.height / 2, this.height / 2),
          bD = (0, pD.RandomRange)(0, 2 * Math.PI),
          QD = (0, pD.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          wD = Math.sqrt(QD) * this.radius,
          SD = wD * Math.cos(bD),
          BD = wD * Math.sin(bD);
        iD ? CD.K4(SD, fD, BD) : ID.p.TransformCoordinatesFromFloatsToRef(SD, fD, BD, DD, CD)
      }
      clone() {
        const DD = new fD(this.radius, this.directionRandomizer);
        return iD.e.DeepCopy(this, DD), DD
      }
      applyToShader(DD) {
        DD.setFloat("radius", this.radius), DD.setFloat("height", this.height), DD.setFloat("radiusRange", this.radiusRange), DD.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(DD) {
        DD.addUniform("radius", 1), DD.addUniform("height", 1), DD.addUniform("radiusRange", 1), DD.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const DD = {};
        return DD.type = this.getClassName(), DD.radius = this.radius, DD.height = this.height, DD.radiusRange = this.radiusRange, DD.directionRandomizer = this.directionRandomizer, DD
      }
      parse(DD) {
        this.radius = DD.radius, this.height = DD.height, this.radiusRange = DD.radiusRange, this.directionRandomizer = DD.directionRandomizer
      }
    }
    class bD extends fD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ID.p(0, 1, 0),
          iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ID.p(0, 1, 0);
        super(DD, CD, cD), this.direction1 = pD, this.direction2 = iD
      }
      startDirectionFunction(DD, CD, cD, iD) {
        const fD = (0, pD.RandomRange)(this.direction1.x, this.direction2.x),
          bD = (0, pD.RandomRange)(this.direction1.y, this.direction2.y),
          QD = (0, pD.RandomRange)(this.direction1.z, this.direction2.z);
        iD ? CD.K4(fD, bD, QD) : ID.p.TransformNormalFromFloatsToRef(fD, bD, QD, DD, CD)
      }
      clone() {
        const DD = new bD(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return iD.e.DeepCopy(this, DD), DD
      }
      applyToShader(DD) {
        DD.setFloat("radius", this.radius), DD.setFloat("height", this.height), DD.setFloat("radiusRange", this.radiusRange), DD.setVector3("direction1", this.direction1), DD.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(DD) {
        DD.addUniform("radius", 1), DD.addUniform("height", 1), DD.addUniform("radiusRange", 1), DD.addUniform("direction1", 3), DD.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const DD = super.serialize();
        return DD.direction1 = this.direction1.XcD(), DD.direction2 = this.direction2.XcD(), DD
      }
      parse(DD) {
        super.parse(DD), ID.p.FromArrayToRef(DD.direction1, 0, this.direction1), ID.p.FromArrayToRef(DD.direction2, 0, this.direction2)
      }
    }
  },
  38155: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => BD
    });
    const ID = .5 * (Math.sqrt(3) - 1),
      pD = (3 - Math.sqrt(3)) / 6,
      iD = 1 / 3,
      fD = 1 / 6,
      bD = (Math.sqrt(5) - 1) / 4,
      QD = (5 - Math.sqrt(5)) / 20,
      wD = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      SD = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const BD = class {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const CD = "function" == typeof DD ? DD : function(DD) {
          let CD = 0,
            cD = 0,
            ID = 0,
            pD = 1;
          const iD = function() {
            let DD = 4022871197;
            return function(CD) {
              CD = CD.toString();
              for (let cD = 0; cD < CD.length; cD++) {
                DD += CD.charCodeAt(cD);
                let ID = .02519603282416938 * DD;
                DD = ID >>> 0, ID -= DD, ID *= DD, DD = ID >>> 0, ID -= DD, DD += 4294967296 * ID
              }
              return 2.3283064365386963e-10 * (DD >>> 0)
            }
          }();
          CD = iD(" "), cD = iD(" "), ID = iD(" "), CD -= iD(DD), CD < 0 && (CD += 1);
          cD -= iD(DD), cD < 0 && (cD += 1);
          ID -= iD(DD), ID < 0 && (ID += 1);
          return function() {
            const DD = 2091639 * CD + 2.3283064365386963e-10 * pD;
            return CD = cD, cD = ID, ID = DD - (pD = 0 | DD)
          }
        }(DD);
        this.p = function(DD) {
          const CD = new Uint8Array(256);
          for (let cD = 0; cD < 256; cD++) CD[cD] = cD;
          for (let cD = 0; cD < 255; cD++) {
            const ID = cD + ~~(DD() * (256 - cD)),
              pD = CD[cD];
            CD[cD] = CD[ID], CD[ID] = pD
          }
          return CD
        }(CD), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let cD = 0; cD < 512; cD++) this.perm[cD] = this.p[255 & cD], this.permMod12[cD] = this.perm[cD] % 12
      }
      noise2D(DD, CD) {
        const cD = this.permMod12,
          iD = this.perm;
        let fD = 0,
          bD = 0,
          QD = 0;
        const SD = (DD + CD) * ID,
          BD = Math.floor(DD + SD),
          yD = Math.floor(CD + SD),
          MD = (BD + yD) * pD,
          tD = DD - (BD - MD),
          ZD = CD - (yD - MD);
        let oD, vD;
        tD > ZD ? (oD = 1, vD = 0) : (oD = 0, vD = 1);
        const ND = tD - oD + pD,
          gD = ZD - vD + pD,
          XD = tD - 1 + 2 * pD,
          mD = ZD - 1 + 2 * pD,
          nD = 255 & BD,
          OD = 255 & yD;
        let PD = .5 - tD * tD - ZD * ZD;
        if (PD >= 0) {
          const DD = 3 * cD[nD + iD[OD]];
          PD *= PD, fD = PD * PD * (wD[DD] * tD + wD[DD + 1] * ZD)
        }
        let HD = .5 - ND * ND - gD * gD;
        if (HD >= 0) {
          const DD = 3 * cD[nD + oD + iD[OD + vD]];
          HD *= HD, bD = HD * HD * (wD[DD] * ND + wD[DD + 1] * gD)
        }
        let UD = .5 - XD * XD - mD * mD;
        if (UD >= 0) {
          const DD = 3 * cD[nD + 1 + iD[OD + 1]];
          UD *= UD, QD = UD * UD * (wD[DD] * XD + wD[DD + 1] * mD)
        }
        return 70 * (fD + bD + QD)
      }
      noise3D(DD, CD, cD) {
        const ID = this.permMod12,
          pD = this.perm;
        let bD, QD, SD, BD;
        const yD = (DD + CD + cD) * iD,
          MD = Math.floor(DD + yD),
          tD = Math.floor(CD + yD),
          ZD = Math.floor(cD + yD),
          oD = (MD + tD + ZD) * fD,
          vD = DD - (MD - oD),
          ND = CD - (tD - oD),
          gD = cD - (ZD - oD);
        let XD, mD, nD, OD, PD, HD;
        vD >= ND ? ND >= gD ? (XD = 1, mD = 0, nD = 0, OD = 1, PD = 1, HD = 0) : vD >= gD ? (XD = 1, mD = 0, nD = 0, OD = 1, PD = 0, HD = 1) : (XD = 0, mD = 0, nD = 1, OD = 1, PD = 0, HD = 1) : ND < gD ? (XD = 0, mD = 0, nD = 1, OD = 0, PD = 1, HD = 1) : vD < gD ? (XD = 0, mD = 1, nD = 0, OD = 0, PD = 1, HD = 1) : (XD = 0, mD = 1, nD = 0, OD = 1, PD = 1, HD = 0);
        const UD = vD - XD + fD,
          xD = ND - mD + fD,
          qD = gD - nD + fD,
          JD = vD - OD + 2 * fD,
          KD = ND - PD + 2 * fD,
          aD = gD - HD + 2 * fD,
          VD = vD - 1 + .5,
          zD = ND - 1 + .5,
          jD = gD - 1 + .5,
          lD = 255 & MD,
          LD = 255 & tD,
          TD = 255 & ZD;
        let GD = .6 - vD * vD - ND * ND - gD * gD;
        if (GD < 0) bD = 0;
        else {
          const DD = 3 * ID[lD + pD[LD + pD[TD]]];
          GD *= GD, bD = GD * GD * (wD[DD] * vD + wD[DD + 1] * ND + wD[DD + 2] * gD)
        }
        let RD = .6 - UD * UD - xD * xD - qD * qD;
        if (RD < 0) QD = 0;
        else {
          const DD = 3 * ID[lD + XD + pD[LD + mD + pD[TD + nD]]];
          RD *= RD, QD = RD * RD * (wD[DD] * UD + wD[DD + 1] * xD + wD[DD + 2] * qD)
        }
        let kD = .6 - JD * JD - KD * KD - aD * aD;
        if (kD < 0) SD = 0;
        else {
          const DD = 3 * ID[lD + OD + pD[LD + PD + pD[TD + HD]]];
          kD *= kD, SD = kD * kD * (wD[DD] * JD + wD[DD + 1] * KD + wD[DD + 2] * aD)
        }
        let dD = .6 - VD * VD - zD * zD - jD * jD;
        if (dD < 0) BD = 0;
        else {
          const DD = 3 * ID[lD + 1 + pD[LD + 1 + pD[TD + 1]]];
          dD *= dD, BD = dD * dD * (wD[DD] * VD + wD[DD + 1] * zD + wD[DD + 2] * jD)
        }
        return 32 * (bD + QD + SD + BD)
      }
      noise4D(DD, CD, cD, ID) {
        const pD = this.perm;
        let iD, fD, wD, BD, yD;
        const MD = (DD + CD + cD + ID) * bD,
          tD = Math.floor(DD + MD),
          ZD = Math.floor(CD + MD),
          oD = Math.floor(cD + MD),
          vD = Math.floor(ID + MD),
          ND = (tD + ZD + oD + vD) * QD,
          gD = DD - (tD - ND),
          XD = CD - (ZD - ND),
          mD = cD - (oD - ND),
          nD = ID - (vD - ND);
        let OD = 0,
          PD = 0,
          HD = 0,
          UD = 0;
        gD > XD ? OD++ : PD++, gD > mD ? OD++ : HD++, gD > nD ? OD++ : UD++, XD > mD ? PD++ : HD++, XD > nD ? PD++ : UD++, mD > nD ? HD++ : UD++;
        const xD = OD >= 3 ? 1 : 0,
          qD = PD >= 3 ? 1 : 0,
          JD = HD >= 3 ? 1 : 0,
          KD = UD >= 3 ? 1 : 0,
          aD = OD >= 2 ? 1 : 0,
          VD = PD >= 2 ? 1 : 0,
          zD = HD >= 2 ? 1 : 0,
          jD = UD >= 2 ? 1 : 0,
          lD = OD >= 1 ? 1 : 0,
          LD = PD >= 1 ? 1 : 0,
          TD = HD >= 1 ? 1 : 0,
          GD = UD >= 1 ? 1 : 0,
          RD = gD - xD + QD,
          kD = XD - qD + QD,
          dD = mD - JD + QD,
          YD = nD - KD + QD,
          WD = gD - aD + 2 * QD,
          sD = XD - VD + 2 * QD,
          ED = mD - zD + 2 * QD,
          eD = nD - jD + 2 * QD,
          uD = gD - lD + 3 * QD,
          hD = XD - LD + 3 * QD,
          rD = mD - TD + 3 * QD,
          AD = nD - GD + 3 * QD,
          FD = gD - 1 + 4 * QD,
          DC = XD - 1 + 4 * QD,
          CC = mD - 1 + 4 * QD,
          cC = nD - 1 + 4 * QD,
          IC = 255 & tD,
          pC = 255 & ZD,
          iC = 255 & oD,
          fC = 255 & vD;
        let bC = .6 - gD * gD - XD * XD - mD * mD - nD * nD;
        if (bC < 0) iD = 0;
        else {
          const DD = pD[IC + pD[pC + pD[iC + pD[fC]]]] % 32 * 4;
          bC *= bC, iD = bC * bC * (SD[DD] * gD + SD[DD + 1] * XD + SD[DD + 2] * mD + SD[DD + 3] * nD)
        }
        let QC = .6 - RD * RD - kD * kD - dD * dD - YD * YD;
        if (QC < 0) fD = 0;
        else {
          const DD = pD[IC + xD + pD[pC + qD + pD[iC + JD + pD[fC + KD]]]] % 32 * 4;
          QC *= QC, fD = QC * QC * (SD[DD] * RD + SD[DD + 1] * kD + SD[DD + 2] * dD + SD[DD + 3] * YD)
        }
        let wC = .6 - WD * WD - sD * sD - ED * ED - eD * eD;
        if (wC < 0) wD = 0;
        else {
          const DD = pD[IC + aD + pD[pC + VD + pD[iC + zD + pD[fC + jD]]]] % 32 * 4;
          wC *= wC, wD = wC * wC * (SD[DD] * WD + SD[DD + 1] * sD + SD[DD + 2] * ED + SD[DD + 3] * eD)
        }
        let SC = .6 - uD * uD - hD * hD - rD * rD - AD * AD;
        if (SC < 0) BD = 0;
        else {
          const DD = pD[IC + lD + pD[pC + LD + pD[iC + TD + pD[fC + GD]]]] % 32 * 4;
          SC *= SC, BD = SC * SC * (SD[DD] * uD + SD[DD + 1] * hD + SD[DD + 2] * rD + SD[DD + 3] * AD)
        }
        let BC = .6 - FD * FD - DC * DC - CC * CC - cC * cC;
        if (BC < 0) yD = 0;
        else {
          const DD = pD[IC + 1 + pD[pC + 1 + pD[iC + 1 + pD[fC + 1]]]] % 32 * 4;
          BC *= BC, yD = BC * BC * (SD[DD] * FD + SD[DD + 1] * DC + SD[DD + 2] * CC + SD[DD + 3] * cC)
        }
        return 27 * (iD + fD + wD + BD + yD)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);
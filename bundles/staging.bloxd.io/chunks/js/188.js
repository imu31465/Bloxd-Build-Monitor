export const id = 188;
export const ids = [188];
export const modules = {
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
  36075: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => MD,
      e: () => tD
    });
    var ID = cD(53),
      pD = cD(2790),
      iD = cD(1440),
      fD = cD(1954),
      bD = cD(36018),
      QD = cD(624),
      wD = cD(1049),
      SD = cD.n(wD),
      BD = cD(1093);
    const yD = {},
      MD = (0, ID.memo)((function() {
        const DD = (0, pD.b)();
        return (0, iD.f)("damagedByOtherPlayer", (CD => {
          let {
            Wc: cD,
            direction: ID
          } = CD;
          const pD = cD || "nonDirectional";
          if (yD[pD]) {
            const CD = yD[pD];
            clearTimeout(CD.timeout), CD.direction = ID, CD.timeout = setTimeout((() => {
              delete yD[pD], DD()
            }), 800)
          } else yD[pD] = {
            direction: ID,
            wV: null,
            timeout: setTimeout((() => {
              delete yD[pD], DD()
            }), 800)
          };
          DD()
        })), (0, fD.c)("kill", (CD => {
          let {
            killer: cD,
            victim: ID
          } = CD;
          const pD = ID.id;
          cD.local && pD && pD in yD && (clearTimeout(yD[pD].timeout), delete yD[pD], DD())
        })), (0, ID.useEffect)((() => {
          const DD = (0, bD.c)("turnDamageIndicators", tD);
          return () => {
            DD();
            for (const DD in yD) clearTimeout(yD[DD].timeout), delete yD[DD]
          }
        }), []), (0, BD.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(yD).map((DD => {
            let [CD, cD] = DD;
            const ID = (0, QD.C)(cD.direction);
            return (0, BD.jsx)("div", {
              ref: DD => {
                yD[CD] && (yD[CD].wV = DD)
              },
              className: SD()("DamageIndicator", {
                DamageIndicatorFullCircle: ID
              })
            }, CD)
          }))
        })
      }));

    function tD(DD) {
      for (const CD in yD) {
        const {
          direction: cD,
          wV: ID
        } = yD[CD];
        if ((0, QD.C)(cD)) continue;
        const pD = cD - DD;
        ID.style.rotate = `${pD}rad`
      }
    }
  },
  35908: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => pD,
      f: () => iD
    });
    let ID = !1;

    function pD() {
      return ID
    }

    function iD(DD) {
      return ID !== DD && (ID = DD, !0)
    }
  },
  8986: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      g: () => pD
    });
    var ID = cD(16);

    function pD(DD, CD) {
      return DD && !CD
    }

    function iD() {
      return pD(ID.d.get("isTouchScreen"), ID.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  39757: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      startPadGameplay: () => XD
    });
    cD(39652);
    var ID = cD(39661),
      pD = cD(3583),
      iD = cD(16),
      fD = cD(38427),
      bD = cD(3501),
      QD = cD(38443),
      wD = cD(20),
      SD = cD(2642),
      BD = cD(37807),
      yD = cD(8555),
      MD = cD(39668);
    const tD = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var ZD = cD(39678),
      oD = cD(8534);
    const vD = DD => DD.padSneakToggled || !!iD.d.get("clientEscMenuOptions").crouchIsToggle && DD.crouchToggled,
      ND = () => {
        const DD = (() => {
          const DD = (0, yD.c)();
          let CD = tD;
          const cD = new MD.c;
          let ID = !1,
            pD = 0;
          const iD = () => {
            const cD = performance.now(),
              iD = 0 === pD ? 0 : cD - pD;
            if (pD = cD, !ID) return DD.discardPending(), null;
            const fD = (0, MD.p)(CD, iD),
              bD = DD.drainLookDelta(),
              QD = (0, BD.f)();
            return {
              Qq: (fD.Qq + bD.Qq) * QD,
              wq: (fD.wq + bD.wq) * QD
            }
          };
          return {
            update: (DD, pD, fD, bD) => {
              DD.camera.Vk !== iD && (DD.camera.Vk = iD), ID = !0, CD = (0, MD.t)(cD, pD, fD, bD, performance.now())
            },
            release: () => {
              ID = !1, CD = tD, cD.reset()
            },
            uninstall: DD => {
              DD.camera.Vk === iD && (DD.camera.Vk = null)
            }
          }
        })();
        return {
          update: (CD, cD, ID) => {
            DD.update((0, SD.i)(), CD, cD, ID)
          },
          release: DD.release,
          uninstall: () => {
            const CD = (0, SD.i)();
            CD && DD.uninstall(CD)
          }
        }
      };
    var gD = cD(39674);
    cD(37055), cD(8409);
    cD(8428).e;
    const XD = () => {
      const DD = (0, gD.d)((() => {
          const DD = {
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
            bodies: () => (0, fD.b)(),
            look: ND(),
            move: (CD, cD) => {
              const ID = (0, SD.i)(),
                pD = ID.Km.fCD();
              if (DD.x = CD.x, DD.y = CD.y, DD.magnitude = CD.magnitude, DD.headingOffset = CD.headingOffset, DD.jumpHeld = CD.jumpHeld, CD.jumpPressed && (DD.jumpPressedSinceTick = !0), DD.running = CD.running, DD.sprintHeld = CD.sprintHeld, cD) {
                const CD = (0, ZD.d)({
                  ...cD,
                  descending: ID.Km.QDD(ID.aJ).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!ID.qm.canCrouch,
                  toggled: vD(pD)
                });
                DD.crouchHeld = CD.crouchHeld, pD.padSneakToggled = CD.toggled, pD.crouchToggled = !1, (0, oD.g)(CD.toggled)
              }
              pD.gamepad = DD
            },
            stopMoving: () => {
              var CD;
              Object.assign(DD, {
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
              const cD = null === (CD = (0, SD.i)()) || void 0 === CD ? void 0 : CD.Km.fCD();
              (null === cD || void 0 === cD ? void 0 : cD.gamepad) === DD && (cD.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: DD => {
              const CD = (0, SD.i)(),
                cD = null === CD || void 0 === CD ? void 0 : CD.Km.fCD();
              "touch" === DD ? ((0, oD.g)(!1), null !== cD && void 0 !== cD && cD.padSneakToggled && (cD.padSneakToggled = !1, cD.isTouchscreen && !cD.gamepad && CD.Km.qDD(CD.aJ).setCrouching(!!CD.qm.canCrouch && cD.touchCrouch))) : "gamepad" === DD && cD && (0, oD.g)(vD(cD))
            },
            hasPlayer: () => {
              var DD;
              return !(null === (DD = (0, SD.i)()) || void 0 === DD || !DD.aJ)
            },
            isPlayerDead: () => {
              var DD;
              const CD = (0, SD.i)();
              return !1 === (null === (DD = CD.Km.hDD(CD.aJ)) || void 0 === DD ? void 0 : DD.isAlive)
            },
            isReplayMode: () => {
              var DD, CD;
              return !(null === (DD = (0, SD.e)()) || void 0 === DD || null === (CD = DD.client) || void 0 === CD || !CD.isReplayMode())
            },
            isFreeCameraOn: () => {
              var DD, CD, cD;
              return !(null === (DD = (0, SD.e)()) || void 0 === DD || null === (CD = DD.client) || void 0 === CD || null === (cD = CD.freeCameraController) || void 0 === cD || !cD.isEnabled())
            },
            targetsBlock: () => !!(0, SD.i)().R_,
            selectedSlotEmpty: () => {
              var DD;
              const CD = (0, SD.i)();
              return !(null !== (DD = CD.Km.KDD(CD.aJ)) && void 0 !== DD && DD.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const DD = (0, SD.i)().qm;
              return !!DD.creative && !!DD.canPickBlocks
            },
            scrollHotbar: DD => {
              wD.i.Uo("ScrollInventorySlot", DD)
            },
            hasFullInventory: () => (0, QD.c)((0, SD.i)()),
            hasLobbyLeaderboard: () => !!(0, SD.i)().qm.lobbyLeaderboardInfo,
            contextActionInputs: () => {
              var DD, CD, cD, ID;
              const pD = (0, SD.i)();
              return {
                holdingGun: !(null === (DD = pD.Km.rDD(pD.aJ)) || void 0 === DD || null === (CD = DD.gH) || void 0 === CD || !CD.isGun()),
                customButtons: null !== (cD = pD.qm.customButtons) && void 0 !== cD ? cD : null,
                touchscreenActionButton: null !== (ID = pD.qm.touchscreenActionButton) && void 0 !== ID ? ID : null
              }
            },
            pressTouchButton: DD => {
              (0, bD.sendColyMessage)(pD.qj, DD)
            }
          }
        })()),
        CD = (0, ID.b)(),
        cD = null,
        iD = null;
      return () => {
        DD(), CD(), null === cD || void 0 === cD || cD(), null === iD || void 0 === iD || iD()
      }
    }
  },
  36002: (DD, CD, cD) => {
    cD.d(CD, {
      B: () => tD,
      C: () => ND,
      b: () => iD,
      e: () => ZD,
      i: () => oD,
      l: () => bD,
      p: () => yD,
      q: () => vD,
      t: () => BD,
      x: () => gD
    });
    var ID = cD(16),
      pD = cD(20);
    const iD = "clientGameInventoryButtonsChanged",
      fD = new Map;

    function bD() {
      return [...fD.values()].sort(((DD, CD) => {
        var cD, ID;
        return (null !== (cD = DD.order) && void 0 !== cD ? cD : 0) - (null !== (ID = CD.order) && void 0 !== ID ? ID : 0)
      }))
    }
    let QD = null;

    function wD(DD) {
      QD = DD
    }
    let SD = !1;

    function BD(DD) {
      SD = !0;
      try {
        DD.onClick()
      } finally {
        SD = !1
      }
      DD.panel && "clientGame" === ID.d.get("openInGameMenuName") && wD(DD.id)
    }

    function yD() {
      return SD
    }

    function MD() {
      return bD().filter((DD => DD.panel && !DD.disabled))
    }

    function tD(DD) {
      const CD = MD(),
        cD = CD.findIndex((DD => DD.id === QD));
      return !(cD < 0 || CD.length < 2) && (BD(CD[(cD + DD + CD.length) % CD.length]), !0)
    }

    function ZD() {
      return null !== QD && MD().length > 1
    }

    function oD() {
      wD(null)
    }

    function vD() {
      "inventory" !== ID.d.get("openInGameMenuName") && wD(null)
    }

    function ND() {
      const DD = QD;
      return wD(null), DD
    }

    function gD(DD) {
      return fD.set(DD.id, DD), pD.i.Uo(iD, bD(), !0), () => {
        fD.get(DD.id) === DD && (fD.delete(DD.id), pD.i.Uo(iD, bD()))
      }
    }
  },
  35996: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD,
      e: () => oD,
      i: () => vD,
      m: () => yD,
      o: () => wD,
      s: () => ZD,
      u: () => MD,
      v: () => SD
    });
    var ID = cD(16),
      pD = cD(20),
      iD = cD(1284),
      fD = cD(36002);
    const bD = "clientGameUiChanged";
    let QD = null;

    function wD() {
      return QD
    }

    function SD(DD, CD) {
      const cD = {
        content: DD,
        menu: CD
      };
      return QD = cD, pD.i.Uo(bD, QD, !0), () => {
        QD === cD && (QD = null, tD = !1, oD(), pD.i.Uo(bD, null))
      }
    }
    let BD = null;

    function yD() {
      return BD
    }

    function MD(DD) {
      return BD = DD, () => {
        BD === DD && (BD = null)
      }
    }
    let tD = !1;

    function ZD() {
      const DD = ID.d.get("openInGameMenuName");
      "clientGame" !== DD && (tD = "inventory" === DD), (0, fD.p)() || (0, fD.i)(), (0, iD.p)(iD.e), ID.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function oD() {
      ND(!1)
    }

    function vD() {
      ND(tD)
    }

    function ND(DD) {
      "clientGame" === ID.d.get("openInGameMenuName") && ID.d.set({
        openInGameMenuName: DD ? "inventory" : null
      }), DD || (0, fD.i)(), tD = !1
    }
  },
  35906: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => QD
    });
    var ID = cD(312),
      pD = cD(16),
      iD = cD(35908),
      fD = cD(1627),
      bD = cD(1961);

    function QD(DD, CD) {
      var cD, QD, wD;
      if (!pD.d.get("isKeydownEnabled") || DD.repeat) return;
      const SD = DD.code;
      "Escape" === DD.key ? (0, fD.k)(DD) : null !== (cD = bD.q.OpenSettings) && void 0 !== cD && cD.includes(SD) ? (0, fD.y)(DD, ID.q.SETTINGS) : null !== (QD = bD.q.OpenCharacterCustomization) && void 0 !== QD && QD.includes(SD) ? (0, iD.d)() || (0, fD.y)(DD, ID.q.CUSTOMISATION, CD()) : null !== (wD = bD.q.ShowDebugOverlay) && void 0 !== wD && wD.includes(SD) && pD.d.set({
        showDebugOverlay: !pD.d.get("showDebugOverlay")
      })
    }
  },
  35883: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => yD,
      f: () => SD,
      g: () => MD,
      i: () => BD
    });
    var ID = cD(326),
      pD = cD(656),
      iD = cD(668),
      fD = cD(36);
    const bD = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      QD = "playSessionGameNameWithVariation",
      wD = "wasMatchmakePlayer";

    function SD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fD.j;
      (0, iD.j)(DD, bD)
    }

    function BD() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fD.j).setItem(wD, !0)
    }

    function yD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fD.j;
      return (0, iD.e)(DD, bD)
    }

    function MD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fD.j;
      const cD = (0, iD.e)(CD, bD),
        SD = function(DD) {
          const CD = DD.getItem(QD);
          return "string" !== typeof CD ? null : CD
        }(CD),
        BD = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fD.j).getItem(wD)
        }(CD);
      let yD;
      return yD = null !== cD && null !== SD && (0, iD.f)(CD, bD) && function(DD, CD, cD) {
          const pD = (0, ID.Vb)(DD),
            iD = (0, ID.Vb)(CD),
            fD = (0, ID.Qb)(DD),
            bD = (0, ID.Qb)(CD);
          return !(pD !== iD || !cD) || pD === iD && fD === bD
        }(SD, DD, BD) ? cD : (0, pD.b)(), (0, iD.k)(CD, bD, yD), CD.setItem(QD, DD),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fD.j).removeItem(wD)
        }(CD), yD
    }
  },
  35879: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ND,
      h: () => gD
    });
    var ID = cD(1011),
      pD = cD(630),
      iD = cD(326),
      fD = cD(1020),
      bD = cD(646),
      QD = cD(684),
      wD = cD(4321),
      SD = cD(90),
      BD = cD(120),
      yD = cD(1701),
      MD = cD(107),
      tD = cD(35883),
      ZD = cD(36),
      oD = cD(659),
      vD = cD(35888);

    function ND() {
      var DD, CD;
      return [...null !== (DD = navigator.languages) && void 0 !== DD ? DD : [null !== (CD = navigator.language) && void 0 !== CD ? CD : "none"], "en-Gb"]
    }

    function gD(DD, CD, cD, gD, XD) {
      const mD = (0, ID.m)(CD) ? (0, ID.t)(CD) : null,
        nD = {
          cookies: (0, yD.getAllCookiesForGameNameWithVariation)(CD),
          isMobile: (0, SD.isMobile)(),
          isUsingCustomGameTexturePack: null !== mD && XD(mD),
          generalCookies: {
            joinDiscord: !!ZD.h.getItem("DiscordPressed"),
            newGo: wD.e,
            ...DD.getMetricsCookies(),
            trafficCode: gD,
            compliance: SD.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, SD.getBrowserName)(),
            version: (0, SD.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, SD.getPlatformType)(),
            deviceType: (0, MD.d)()
          },
          isLoggedIn: DD.isLoggedIn(),
          lobbyName: cD,
          languages: ND(),
          version: pD.c,
          siteUsed: BD.p,
          subsiteUsed: BD.v,
          playSessionId: (0, tD.g)(CD),
          visitSessionId: (0, oD.b)(),
          clientReason: bD.g.reason,
          budgetBasis: (0, vD.f)(),
          ...null !== QD.q && {
            diagClaim: QD.q.claimId
          }
        };
      return null !== mD && (0, iD.Fc)(mD) ? (nD.lobbyName = (0, ID.j)(mD, (0, ID.q)(CD), cD), {
        roomName: `classic_${fD.g}`,
        joinOptions: nD
      }) : {
        roomName: CD,
        joinOptions: nD
      }
    }
  },
  35903: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID,
      g: () => pD,
      k: () => iD
    });
    const ID = 1024,
      pD = 1024 * ID;

    function iD(DD) {
      return (DD / pD).toFixed(1)
    }
  },
  35895: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD,
      g: () => bD,
      k: () => fD,
      m: () => QD,
      p: () => wD
    });
    var ID = cD(194);
    const pD = 32 * cD(35903).g,
      iD = 6144,
      fD = 4608,
      bD = 512;

    function QD(DD) {
      return Math.floor(pD * DD / iD)
    }

    function wD(DD) {
      const CD = DD - Math.floor(DD / 6);
      let cD = ID.h.maxChunkHorizAddDistance,
        pD = ID.h.maxChunkVertAddDistance;
      if (SD(cD + 1, pD + 1) <= CD) return null;
      for (; SD(cD + 1, pD + 1) > CD && (cD > 0 || pD > 0);) cD > pD ? cD-- : pD--;
      return {
        horizontal: cD,
        vertical: pD
      }
    }

    function SD(DD, CD) {
      const cD = Math.max(DD, CD);
      let ID = 0;
      for (let pD = -cD; pD <= cD; pD++)
        for (let iD = -cD; iD <= cD; iD++)
          for (let fD = -cD; fD <= cD; fD++) BD(DD, CD, pD, iD, fD) && ID++;
      return ID
    }

    function BD(DD, CD, cD, ID, pD) {
      const iD = cD * cD + pD * pD;
      return DD === CD ? iD + ID * ID <= DD * DD : DD > CD ? Math.abs(ID) <= CD && iD + ID * ID <= DD * DD : iD <= DD * DD && iD + ID * ID <= CD * CD
    }
  },
  35888: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => nD,
      f: () => mD,
      i: () => XD
    });
    var ID = cD(194),
      pD = cD(90),
      iD = cD(2735),
      fD = cD(4197),
      bD = cD(651),
      QD = cD(35895);
    const wD = 1048576,
      SD = 1024 * wD,
      BD = 400 * wD,
      yD = 147456,
      MD = .5,
      tD = 1.5 * SD,
      ZD = 768 * wD;

    function oD(DD) {
      return BD + DD * yD
    }

    function vD(DD, CD, cD) {
      var pD, fD;
      let {
        footprintBytes: bD,
        basis: wD,
        namesLimit: vD
      } = function(DD) {
        const {
          os: CD,
          deviceMemory: cD
        } = DD;
        if ("ios" === CD) switch ((0, iD.h)(DD)) {
          case "ipad_m":
            return {
              footprintBytes: oD(QD.e), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: ZD, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: tD, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: ZD, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof cD && Number.isFinite(cD) && cD > 0 ? {
          footprintBytes: cD * SD * MD,
          basis: `memory-${cD}`,
          namesLimit: !0
        } : "android" === CD ? {
          footprintBytes: ZD,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: oD(QD.k),
          basis: "unreported",
          namesLimit: !1
        }
      }(DD);
      if (cD) {
        const DD = Math.min(bD, oD(QD.e));
        bD = BD + Math.max(0, DD - BD) / 2, wD += "+killed", vD = !0
      }
      null !== CD && oD(CD) < bD && (bD = oD(CD), wD += "+learned", vD = !0);
      const ND = function(DD) {
          const CD = Math.floor((DD - BD) / yD);
          return Math.min(QD.e, Math.max(QD.g, CD))
        }(bD),
        gD = (0, QD.p)(ND);
      return {
        footprintBytes: bD,
        shedFootprintBytes: vD ? Math.max(bD, oD(ND)) : null,
        chunkCap: ND,
        maxHorizDistance: null !== (pD = null === gD || void 0 === gD ? void 0 : gD.horizontal) && void 0 !== pD ? pD : ID.h.maxChunkHorizAddDistance,
        maxVertDistance: null !== (fD = null === gD || void 0 === gD ? void 0 : gD.vertical) && void 0 !== fD ? fD : ID.h.maxChunkVertAddDistance,
        basis: wD
      }
    }
    let ND = null;

    function gD() {
      return vD({
        os: (0, pD.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, iD.i)()
      }, (0, fD.e)(), (0, bD.J)("wasm").length > 0)
    }

    function XD() {
      return ND ??= gD(), ND
    }

    function mD() {
      var DD;
      return (null !== (DD = ND) && void 0 !== DD ? DD : gD()).basis
    }

    function nD(DD, CD) {
      return DD.setChunkCap(CD.chunkCap)
    }
  },
  36216: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => pD,
      f: () => iD,
      g: () => yD,
      i: () => bD,
      k: () => QD,
      n: () => wD,
      q: () => BD,
      r: () => SD,
      u: () => fD
    });
    var ID = cD(1240);
    let pD = function(DD) {
        return DD[DD.Join = 0] = "Join", DD[DD.Leave = 1] = "Leave", DD[DD.Push = 2] = "Push", DD[DD.Cursor = 3] = "Cursor", DD[DD.Submit = 4] = "Submit", DD[DD.ReloadAsVariation = 5] = "ReloadAsVariation", DD[DD.CreateFile = 6] = "CreateFile", DD[DD.RenameFile = 7] = "RenameFile", DD[DD.DeleteFile = 8] = "DeleteFile", DD[DD.SetEngine = 9] = "SetEngine", DD[DD.RenameFolder = 10] = "RenameFolder", DD
      }({}),
      iD = function(DD) {
        return DD[DD.Joined = 0] = "Joined", DD[DD.Updates = 1] = "Updates", DD[DD.Presence = 2] = "Presence", DD[DD.RemoteCursor = 3] = "RemoteCursor", DD[DD.ForceClose = 4] = "ForceClose", DD[DD.LobbyFilesChanged = 5] = "LobbyFilesChanged", DD[DD.EngineSettings = 6] = "EngineSettings", DD
      }({});

    function fD(DD) {
      return "lobby" === DD.kind ? `lobby:${DD.path}` : `codeBlock:${DD.pos[0]},${DD.pos[1]},${DD.pos[2]}`
    }

    function bD(DD) {
      if ("lobby" === DD) return {
        kind: "lobby",
        path: ID.g
      };
      if (DD.startsWith("lobby:")) {
        const CD = DD.slice(6);
        return BD(CD) ? {
          kind: "lobby",
          path: CD
        } : null
      }
      const CD = DD.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return CD ? {
        kind: "codeBlock",
        pos: [parseInt(CD[1]), parseInt(CD[2]), parseInt(CD[3])]
      } : null
    }

    function QD(DD) {
      return DD.endsWith(".d.ts")
    }

    function wD(DD) {
      return DD.endsWith(".ts") && !QD(DD)
    }
    const SD = 64;

    function BD(DD) {
      if (!DD || DD !== DD.trim()) return !1;
      if (DD.length > SD) return !1;
      if (DD.startsWith("/") || DD.includes("\\") || DD.includes("\0")) return !1;
      if (!QD(DD) && !wD(DD) && ! function(DD) {
          return DD.endsWith(".js") && !DD.endsWith(".min.js") && !DD.endsWith(".bundle.js")
        }(DD)) return !1;
      const CD = DD.split("/");
      for (const cD of CD)
        if ("" === cD || "." === cD || ".." === cD) return !1;
      return !0
    }
    const yD = 14e3
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
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);
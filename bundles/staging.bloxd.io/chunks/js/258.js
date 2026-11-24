export const id = 258;
export const ids = [258];
export const modules = {
  40137: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => PD
    });
    var pD = wD(39921),
      sD = wD(39927),
      KD = wD(37079),
      rD = wD(40146),
      LD = wD(40179),
      cD = wD(40108),
      gD = wD(40027);
    let RD = (() => {
      var DD;
      let zD, wD, rD, LD, RD, AD, UD, fD, ID, BD, GD, hD = [],
        nD = [],
        MD = [],
        OD = [],
        JD = [],
        ED = [],
        QD = [],
        XD = [],
        VD = [],
        PD = [],
        CD = [],
        xD = [],
        TD = [],
        bD = [],
        jD = [],
        dD = [],
        SD = [],
        iD = [],
        lD = [],
        WD = [],
        ND = [],
        ZD = [];
      return DD = class {
        constructor() {
          this.keysUp = (0, pD.m)(this, hD, [38]), this.keysUpward = ((0, pD.m)(this, nD), (0, pD.m)(this, MD, [33])), this.keysDown = ((0, pD.m)(this, OD), (0, pD.m)(this, JD, [40])), this.keysDownward = ((0, pD.m)(this, ED), (0, pD.m)(this, QD, [34])), this.keysLeft = ((0, pD.m)(this, XD), (0, pD.m)(this, VD, [37])), this.keysRight = ((0, pD.m)(this, PD), (0, pD.m)(this, CD, [39])), this.rotationSpeed = ((0, pD.m)(this, xD), (0, pD.m)(this, TD, .5)), this.keysRotateLeft = ((0, pD.m)(this, bD), (0, pD.m)(this, jD, [])), this.keysRotateRight = ((0, pD.m)(this, dD), (0, pD.m)(this, SD, [])), this.keysRotateUp = ((0, pD.m)(this, iD), (0, pD.m)(this, lD, [])), this.keysRotateDown = ((0, pD.m)(this, WD), (0, pD.m)(this, ND, [])), this._keys = ((0, pD.m)(this, ZD), new Array)
        }
        attachControl(DD) {
          DD = gD.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Ul(), this._engine = this._scene.iI(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((zD => {
            const wD = zD.event;
            if (!wD.metaKey)
              if (zD.type === cD.d.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(wD.keyCode) || -1 !== this.keysDown.indexOf(wD.keyCode) || -1 !== this.keysLeft.indexOf(wD.keyCode) || -1 !== this.keysRight.indexOf(wD.keyCode) || -1 !== this.keysUpward.indexOf(wD.keyCode) || -1 !== this.keysDownward.indexOf(wD.keyCode) || -1 !== this.keysRotateLeft.indexOf(wD.keyCode) || -1 !== this.keysRotateRight.indexOf(wD.keyCode) || -1 !== this.keysRotateUp.indexOf(wD.keyCode) || -1 !== this.keysRotateDown.indexOf(wD.keyCode)) {
                  -1 === this._keys.indexOf(wD.keyCode) && this._keys.push(wD.keyCode), DD || wD.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(wD.keyCode) || -1 !== this.keysDown.indexOf(wD.keyCode) || -1 !== this.keysLeft.indexOf(wD.keyCode) || -1 !== this.keysRight.indexOf(wD.keyCode) || -1 !== this.keysUpward.indexOf(wD.keyCode) || -1 !== this.keysDownward.indexOf(wD.keyCode) || -1 !== this.keysRotateLeft.indexOf(wD.keyCode) || -1 !== this.keysRotateRight.indexOf(wD.keyCode) || -1 !== this.keysRotateUp.indexOf(wD.keyCode) || -1 !== this.keysRotateDown.indexOf(wD.keyCode)) {
              const zD = this._keys.indexOf(wD.keyCode);
              zD >= 0 && this._keys.splice(zD, 1), DD || wD.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const DD = this.camera,
              zD = DD.movement.input,
              wD = zD.getEntry("keyboard", "translate"),
              pD = zD.getEntry("keyboard", "rotate"),
              sD = pD?.sensitivity ?? 1,
              rD = DD._localDirection.Z2(0, 0, 0);
            for (let KD = 0; KD < this._keys.length; KD++) {
              const zD = this._keys[KD]; - 1 !== this.keysLeft.indexOf(zD) ? rD.x -= 1 : -1 !== this.keysUp.indexOf(zD) ? rD.z += 1 : -1 !== this.keysRight.indexOf(zD) ? rD.x += 1 : -1 !== this.keysDown.indexOf(zD) ? rD.z -= 1 : -1 !== this.keysUpward.indexOf(zD) ? rD.y += 1 : -1 !== this.keysDownward.indexOf(zD) ? rD.y -= 1 : -1 !== this.keysRotateLeft.indexOf(zD) ? pD && (DD.cameraRotation.y -= this._getLocalRotation() * sD) : -1 !== this.keysRotateRight.indexOf(zD) ? pD && (DD.cameraRotation.y += this._getLocalRotation() * sD) : -1 !== this.keysRotateUp.indexOf(zD) ? pD && (DD.cameraRotation.x -= this._getLocalRotation() * sD) : -1 !== this.keysRotateDown.indexOf(zD) && pD && (DD.cameraRotation.x += this._getLocalRotation() * sD)
            }
            if (wD && (0 !== rD.x || 0 !== rD.y || 0 !== rD.z)) {
              const zD = DD._computeLocalCameraSpeed() * (wD.sensitivity ?? 1);
              rD.normalize().scaleInPlace(zD), DD.Ul().useRightHandedSystem && (rD.z *= -1), DD.getViewMatrix().invertToRef(DD._cameraTransformMatrix), KD.s.TransformNormalToRef(rD, DD._cameraTransformMatrix, DD._transformedDirection), DD.cameraDirection.addInPlace(DD._transformedDirection)
            }
          }
        }
        getClassName() {
          return "FreeCameraKeyboardMoveInput"
        }
        _onLostFocus() {
          this._keys.length = 0
        }
        getSimpleName() {
          return "keyboard"
        }
        _getLocalRotation() {
          const DD = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * DD
        }
      }, (() => {
        const KD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zD = [(0, sD.C)()], wD = [(0, sD.C)()], rD = [(0, sD.C)()], LD = [(0, sD.C)()], RD = [(0, sD.C)()], AD = [(0, sD.C)()], UD = [(0, sD.C)()], fD = [(0, sD.C)()], ID = [(0, sD.C)()], BD = [(0, sD.C)()], GD = [(0, sD.C)()], (0, pD.i)(null, null, zD, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysUp" in DD,
            get: DD => DD.keysUp,
            set: (DD, zD) => {
              DD.keysUp = zD
            }
          },
          metadata: KD
        }, hD, nD), (0, pD.i)(null, null, wD, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysUpward" in DD,
            get: DD => DD.keysUpward,
            set: (DD, zD) => {
              DD.keysUpward = zD
            }
          },
          metadata: KD
        }, MD, OD), (0, pD.i)(null, null, rD, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysDown" in DD,
            get: DD => DD.keysDown,
            set: (DD, zD) => {
              DD.keysDown = zD
            }
          },
          metadata: KD
        }, JD, ED), (0, pD.i)(null, null, LD, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysDownward" in DD,
            get: DD => DD.keysDownward,
            set: (DD, zD) => {
              DD.keysDownward = zD
            }
          },
          metadata: KD
        }, QD, XD), (0, pD.i)(null, null, RD, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysLeft" in DD,
            get: DD => DD.keysLeft,
            set: (DD, zD) => {
              DD.keysLeft = zD
            }
          },
          metadata: KD
        }, VD, PD), (0, pD.i)(null, null, AD, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysRight" in DD,
            get: DD => DD.keysRight,
            set: (DD, zD) => {
              DD.keysRight = zD
            }
          },
          metadata: KD
        }, CD, xD), (0, pD.i)(null, null, UD, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: DD => "rotationSpeed" in DD,
            get: DD => DD.rotationSpeed,
            set: (DD, zD) => {
              DD.rotationSpeed = zD
            }
          },
          metadata: KD
        }, TD, bD), (0, pD.i)(null, null, fD, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysRotateLeft" in DD,
            get: DD => DD.keysRotateLeft,
            set: (DD, zD) => {
              DD.keysRotateLeft = zD
            }
          },
          metadata: KD
        }, jD, dD), (0, pD.i)(null, null, ID, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysRotateRight" in DD,
            get: DD => DD.keysRotateRight,
            set: (DD, zD) => {
              DD.keysRotateRight = zD
            }
          },
          metadata: KD
        }, SD, iD), (0, pD.i)(null, null, BD, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysRotateUp" in DD,
            get: DD => DD.keysRotateUp,
            set: (DD, zD) => {
              DD.keysRotateUp = zD
            }
          },
          metadata: KD
        }, lD, WD), (0, pD.i)(null, null, GD, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysRotateDown" in DD,
            get: DD => DD.keysRotateDown,
            set: (DD, zD) => {
              DD.keysRotateDown = zD
            }
          },
          metadata: KD
        }, ND, ZD), KD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: KD
        })
      })(), DD
    })();
    LD.d.FreeCameraKeyboardMoveInput = RD;
    var AD = wD(37119),
      UD = wD(40106);
    let fD = (() => {
      var DD;
      let zD, wD, KD = [],
        rD = [],
        LD = [],
        cD = [];
      return DD = class {
        _applyPointerRotation(DD, zD) {
          this._pointerConditions.button = this._currentActiveButton;
          const wD = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!wD || "rotate" !== wD.interaction) return;
          const pD = wD.uF ?? wD.sensitivity ?? 1 / this.angularSensibility,
            sD = wD.vF ?? wD.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += DD * pD, this.camera.cameraRotation.x += zD * sD
        }
        constructor() {
          let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = DD, this.buttons = (0, pD.m)(this, KD, [0, 1, 2]), this.angularSensibility = ((0, pD.m)(this, rD), (0, pD.m)(this, LD, 2e3)), this._pointerInput = (0, pD.m)(this, cD), this._previousPosition = null, this.onPointerMovedObservable = new AD.b, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(DD) {
          DD = gD.h.BackCompatCameraNoPreventDefault(arguments);
          const zD = this.camera.iI(),
            wD = zD.getInputElement();
          this._pointerInput || (this._pointerInput = pD => {
            const sD = pD.event,
              KD = "touch" === sD.pointerType;
            if (!this.touchEnabled && KD) return;
            if (pD.type !== UD.c.POINTERMOVE && -1 === this.buttons.indexOf(sD.button)) return;
            const rD = sD.target;
            if (pD.type === UD.c.POINTERDOWN) {
              if (KD && -1 !== this._activePointerId || !KD && -1 !== this._currentActiveButton) return;
              this._activePointerId = sD.pointerId;
              try {
                rD?.setPointerCapture(sD.pointerId)
              } catch (LD) {} - 1 === this._currentActiveButton && (this._currentActiveButton = sD.button), this._previousPosition = {
                x: sD.clientX,
                y: sD.clientY
              }, DD || (sD.preventDefault(), wD && wD.focus()), zD.isPointerLock && this._onMouseMove && this._onMouseMove(pD.event)
            } else if (pD.type === UD.c.POINTERUP) {
              if (KD && this._activePointerId !== sD.pointerId || !KD && this._currentActiveButton !== sD.button) return;
              try {
                rD?.releasePointerCapture(sD.pointerId)
              } catch (LD) {}
              this._currentActiveButton = -1, this._previousPosition = null, DD || sD.preventDefault(), this._activePointerId = -1
            } else if (pD.type === UD.c.POINTERMOVE && (this._activePointerId === sD.pointerId || !KD))
              if (zD.isPointerLock && this._onMouseMove) this._onMouseMove(pD.event);
              else if (this._previousPosition) {
              const zD = this.camera._calculateHandednessMultiplier(),
                wD = (sD.clientX - this._previousPosition.x) * zD,
                pD = (sD.clientY - this._previousPosition.y) * zD;
              this._allowCameraRotation && this._applyPointerRotation(wD, pD), this.onPointerMovedObservable.notifyObservers({
                offsetX: wD,
                offsetY: pD
              }), this._previousPosition = {
                x: sD.clientX,
                y: sD.clientY
              }, DD || sD.preventDefault()
            }
          }), this._onMouseMove = wD => {
            if (!zD.isPointerLock) return;
            const pD = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(wD.movementX * pD, wD.movementY * pD), this._previousPosition = null, DD || wD.preventDefault()
          }, this._observer = this.camera.Ul()._inputManager._addCameraPointerObserver(this._pointerInput, UD.c.POINTERDOWN | UD.c.POINTERUP | UD.c.POINTERMOVE), wD && (this._contextMenuBind = DD => this.onContextMenu(DD), wD.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(DD) {
          DD.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.Ul()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const DD = this.camera.iI().getInputElement();
              DD && DD.removeEventListener("contextmenu", this._contextMenuBind)
            }
            this.onPointerMovedObservable && this.onPointerMovedObservable.clear(), this._observer = null, this._onMouseMove = null, this._previousPosition = null
          }
          this._activePointerId = -1, this._currentActiveButton = -1
        }
        getClassName() {
          return "FreeCameraMouseInput"
        }
        getSimpleName() {
          return "mouse"
        }
      }, (() => {
        const gD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zD = [(0, sD.C)()], wD = [(0, sD.C)()], (0, pD.i)(null, null, zD, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: DD => "buttons" in DD,
            get: DD => DD.buttons,
            set: (DD, zD) => {
              DD.buttons = zD
            }
          },
          metadata: gD
        }, KD, rD), (0, pD.i)(null, null, wD, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: DD => "angularSensibility" in DD,
            get: DD => DD.angularSensibility,
            set: (DD, zD) => {
              DD.angularSensibility = zD
            }
          },
          metadata: gD
        }, LD, cD), gD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: gD
        })
      })(), DD
    })();
    LD.d.FreeCameraMouseInput = fD;
    var ID = wD(40115);
    let BD = (() => {
      var DD;
      let zD, wD, KD, rD = [],
        LD = [],
        cD = [],
        RD = [],
        fD = [],
        BD = [];
      return DD = class {
        constructor() {
          this.wheelPrecisionX = (0, pD.m)(this, rD, 3), this.wheelPrecisionY = ((0, pD.m)(this, LD), (0, pD.m)(this, cD, 3)), this.wheelPrecisionZ = ((0, pD.m)(this, RD), (0, pD.m)(this, fD, 3)), this.onChangedObservable = ((0, pD.m)(this, BD), new AD.b), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(DD) {
          DD = gD.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = zD => {
            if (zD.type !== UD.c.POINTERWHEEL) return;
            const wD = zD.event,
              pD = wD.deltaMode === ID.e.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * pD * wD.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * pD * wD.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * pD * wD.deltaZ / this._normalize, wD.preventDefault && (DD || wD.preventDefault())
          }, this._observer = this.camera.Ul()._inputManager._addCameraPointerObserver(this._wheel, UD.c.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.Ul()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
        }
        checkInputs() {
          this.onChangedObservable.notifyObservers({
            wheelDeltaX: this._wheelDeltaX,
            wheelDeltaY: this._wheelDeltaY,
            wheelDeltaZ: this._wheelDeltaZ
          }), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0
        }
        getClassName() {
          return "BaseCameraMouseWheelInput"
        }
        getSimpleName() {
          return "mousewheel"
        }
      }, (() => {
        const gD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zD = [(0, sD.C)()], wD = [(0, sD.C)()], KD = [(0, sD.C)()], (0, pD.i)(null, null, zD, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelPrecisionX" in DD,
            get: DD => DD.wheelPrecisionX,
            set: (DD, zD) => {
              DD.wheelPrecisionX = zD
            }
          },
          metadata: gD
        }, rD, LD), (0, pD.i)(null, null, wD, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelPrecisionY" in DD,
            get: DD => DD.wheelPrecisionY,
            set: (DD, zD) => {
              DD.wheelPrecisionY = zD
            }
          },
          metadata: gD
        }, cD, RD), (0, pD.i)(null, null, KD, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelPrecisionZ" in DD,
            get: DD => DD.wheelPrecisionZ,
            set: (DD, zD) => {
              DD.wheelPrecisionZ = zD
            }
          },
          metadata: gD
        }, fD, BD), gD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: gD
        })
      })(), DD
    })();
    var GD;
    ! function(DD) {
      DD[DD.MoveRelative = 0] = "MoveRelative", DD[DD.RotateRelative = 1] = "RotateRelative", DD[DD.MoveScene = 2] = "MoveScene"
    }(GD || (GD = {}));
    let hD = (() => {
      var DD;
      let zD, wD, rD, LD, cD, gD, RD, AD, UD, fD = BD,
        ID = [];
      return DD = class extends fD {
        constructor() {
          super(...arguments), this.camera = (0, pD.m)(this, ID), this._moveRelative = KD.s.Zero(), this._rotateRelative = KD.s.Zero(), this._moveScene = KD.s.Zero(), this._wheelXAction = GD.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = GD.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(DD) {
          null === DD && this._wheelXAction !== GD.MoveRelative || (this._wheelXAction = GD.MoveRelative, this._wheelXActionCoordinate = DD)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== GD.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(DD) {
          null === DD && this._wheelYAction !== GD.MoveRelative || (this._wheelYAction = GD.MoveRelative, this._wheelYActionCoordinate = DD)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== GD.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(DD) {
          null === DD && this._wheelZAction !== GD.MoveRelative || (this._wheelZAction = GD.MoveRelative, this._wheelZActionCoordinate = DD)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== GD.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(DD) {
          null === DD && this._wheelXAction !== GD.RotateRelative || (this._wheelXAction = GD.RotateRelative, this._wheelXActionCoordinate = DD)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== GD.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(DD) {
          null === DD && this._wheelYAction !== GD.RotateRelative || (this._wheelYAction = GD.RotateRelative, this._wheelYActionCoordinate = DD)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== GD.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(DD) {
          null === DD && this._wheelZAction !== GD.RotateRelative || (this._wheelZAction = GD.RotateRelative, this._wheelZActionCoordinate = DD)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== GD.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(DD) {
          null === DD && this._wheelXAction !== GD.MoveScene || (this._wheelXAction = GD.MoveScene, this._wheelXActionCoordinate = DD)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== GD.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(DD) {
          null === DD && this._wheelYAction !== GD.MoveScene || (this._wheelYAction = GD.MoveScene, this._wheelYActionCoordinate = DD)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== GD.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(DD) {
          null === DD && this._wheelZAction !== GD.MoveScene || (this._wheelZAction = GD.MoveScene, this._wheelZActionCoordinate = DD)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== GD.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.I9(0), this._rotateRelative.I9(0), this._moveScene.I9(0), this._updateCamera(), this.camera.Ul().useRightHandedSystem && (this._moveRelative.z *= -1);
          const DD = KD.e.Zero();
          this.camera.getViewMatrix().invertToRef(DD);
          const zD = KD.s.Zero();
          KD.s.TransformNormalToRef(this._moveRelative, DD, zD), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(zD), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(DD, zD, wD) {
          if (0 === DD) return;
          if (null === zD || null === wD) return;
          let pD = null;
          switch (zD) {
            case GD.MoveRelative:
              pD = this._moveRelative;
              break;
            case GD.RotateRelative:
              pD = this._rotateRelative;
              break;
            case GD.MoveScene:
              pD = this._moveScene
          }
          switch (wD) {
            case 0:
              pD.set(DD, 0, 0);
              break;
            case 1:
              pD.set(0, DD, 0);
              break;
            case 2:
              pD.set(0, 0, DD)
          }
        }
      }, (() => {
        const KD = "function" === typeof Symbol && Symbol.metadata ? Object.create(fD[Symbol.metadata] ?? null) : void 0;
        zD = [(0, sD.C)()], wD = [(0, sD.C)()], rD = [(0, sD.C)()], LD = [(0, sD.C)()], cD = [(0, sD.C)()], gD = [(0, sD.C)()], RD = [(0, sD.C)()], AD = [(0, sD.C)()], UD = [(0, sD.C)()], (0, pD.i)(DD, null, zD, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelXMoveRelative" in DD,
            set: (DD, zD) => {
              DD.wheelXMoveRelative = zD
            }
          },
          metadata: KD
        }, null, ID), (0, pD.i)(DD, null, wD, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelYMoveRelative" in DD,
            set: (DD, zD) => {
              DD.wheelYMoveRelative = zD
            }
          },
          metadata: KD
        }, null, ID), (0, pD.i)(DD, null, rD, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelZMoveRelative" in DD,
            set: (DD, zD) => {
              DD.wheelZMoveRelative = zD
            }
          },
          metadata: KD
        }, null, ID), (0, pD.i)(DD, null, LD, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelXRotateRelative" in DD,
            set: (DD, zD) => {
              DD.wheelXRotateRelative = zD
            }
          },
          metadata: KD
        }, null, ID), (0, pD.i)(DD, null, cD, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelYRotateRelative" in DD,
            set: (DD, zD) => {
              DD.wheelYRotateRelative = zD
            }
          },
          metadata: KD
        }, null, ID), (0, pD.i)(DD, null, gD, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelZRotateRelative" in DD,
            set: (DD, zD) => {
              DD.wheelZRotateRelative = zD
            }
          },
          metadata: KD
        }, null, ID), (0, pD.i)(DD, null, RD, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelXMoveScene" in DD,
            set: (DD, zD) => {
              DD.wheelXMoveScene = zD
            }
          },
          metadata: KD
        }, null, ID), (0, pD.i)(DD, null, AD, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelYMoveScene" in DD,
            set: (DD, zD) => {
              DD.wheelYMoveScene = zD
            }
          },
          metadata: KD
        }, null, ID), (0, pD.i)(DD, null, UD, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelZMoveScene" in DD,
            set: (DD, zD) => {
              DD.wheelZMoveScene = zD
            }
          },
          metadata: KD
        }, null, ID), KD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: KD
        })
      })(), DD
    })();
    LD.d.FreeCameraMouseWheelInput = hD;
    let nD = (() => {
      var DD;
      let zD, wD, rD = [],
        LD = [],
        cD = [],
        RD = [];
      return DD = class {
        constructor() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = DD, this.touchAngularSensibility = (0, pD.m)(this, rD, 2e5), this.touchMoveSensibility = ((0, pD.m)(this, LD), (0, pD.m)(this, cD, 250)), this.singleFingerRotate = ((0, pD.m)(this, RD), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = gD.h.IsSafari()
        }
        attachControl(DD) {
          DD = gD.h.BackCompatCameraNoPreventDefault(arguments);
          let zD = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = wD => {
              const pD = wD.event,
                sD = "mouse" === pD.pointerType || this._isSafari && "undefined" === typeof pD.pointerType;
              if (this.allowMouse || !sD)
                if (wD.type === UD.c.POINTERDOWN) {
                  if (DD || pD.preventDefault(), this._pointerPressed.push(pD.pointerId), 1 !== this._pointerPressed.length) return;
                  zD = {
                    x: pD.clientX,
                    y: pD.clientY
                  }
                } else if (wD.type === UD.c.POINTERUP) {
                DD || pD.preventDefault();
                const wD = this._pointerPressed.indexOf(pD.pointerId);
                if (-1 === wD) return;
                if (this._pointerPressed.splice(wD, 1), 0 != wD) return;
                zD = null, this._offsetX = null, this._offsetY = null
              } else if (wD.type === UD.c.POINTERMOVE) {
                if (DD || pD.preventDefault(), !zD) return;
                if (0 != this._pointerPressed.indexOf(pD.pointerId)) return;
                this._offsetX = pD.clientX - zD.x, this._offsetY = -(pD.clientY - zD.y)
              }
            }), this._observer = this.camera.Ul()._inputManager._addCameraPointerObserver(this._pointerInput, UD.c.POINTERDOWN | UD.c.POINTERUP | UD.c.POINTERMOVE), this._onLostFocus) {
            const DD = this.camera.iI().getInputElement();
            DD && DD.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.Ul()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const DD = this.camera.iI().getInputElement();
              DD && DD.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const DD = this.camera,
            zD = DD.movement.input,
            wD = zD.getEntry("touch", "rotate"),
            pD = zD.getEntry("touch", "translate"),
            sD = DD._calculateHandednessMultiplier(),
            rD = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (wD) {
            const zD = wD.sensitivity ?? 1 / this.touchAngularSensibility;
            DD.cameraRotation.y = this._offsetX * sD * zD, rD && (DD.cameraRotation.x = -this._offsetY * sD * zD)
          }
          if (!rD && pD) {
            const zD = DD._computeLocalCameraSpeed(),
              wD = pD.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              sD = KD.n.WI[0];
            sD.Z2(0, 0, zD * this._offsetY * wD), KD.e.RotationYawPitchRollToRef(DD.rotation.y, DD.rotation.x, 0, DD._cameraRotationMatrix), KD.s.TransformCoordinatesToRef(sD, DD._cameraRotationMatrix, sD), DD.cameraDirection.addInPlace(sD)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const KD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zD = [(0, sD.C)()], wD = [(0, sD.C)()], (0, pD.i)(null, null, zD, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: DD => "touchAngularSensibility" in DD,
            get: DD => DD.touchAngularSensibility,
            set: (DD, zD) => {
              DD.touchAngularSensibility = zD
            }
          },
          metadata: KD
        }, rD, LD), (0, pD.i)(null, null, wD, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: DD => "touchMoveSensibility" in DD,
            get: DD => DD.touchMoveSensibility,
            set: (DD, zD) => {
              DD.touchMoveSensibility = zD
            }
          },
          metadata: KD
        }, cD, RD), KD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: KD
        })
      })(), DD
    })();
    LD.d.FreeCameraTouchInput = nD;
    var MD, OD, JD, ED = wD(39808);
    class QD extends LD.h {
      constructor(DD) {
        super(DD), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new RD), this
      }
      addMouse() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new fD(DD), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new hD, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new nD), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(MD = QD.prototype).addDeviceOrientation ?? (MD.addDeviceOrientation = (0, ED.h)("FreeCameraInputsManager", "addDeviceOrientation")), (OD = QD.prototype).addVirtualJoystick ?? (OD.addVirtualJoystick = (0, ED.h)("FreeCameraInputsManager", "addVirtualJoystick")), (JD = QD.prototype).addGamepad ?? (JD.addGamepad = (0, ED.h)("FreeCameraInputsManager", "addGamepad"));
    var XD = wD(39826),
      VD = wD(37134);
    let PD = (() => {
        var DD;
        let zD, wD, LD, cD, RD = rD.g,
          AD = [],
          UD = [],
          fD = [],
          ID = [],
          BD = [],
          GD = [],
          hD = [],
          nD = [];
        return DD = class extends RD {
          get angularSensibility() {
            const DD = this.inputs.attached.mouse;
            return DD ? DD.angularSensibility : 0
          }
          set angularSensibility(DD) {
            const zD = this.inputs.attached.mouse;
            zD && (zD.angularSensibility = DD)
          }
          get keysUp() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysUp : []
          }
          set keysUp(DD) {
            const zD = this.inputs.attached.keyboard;
            zD && (zD.keysUp = DD)
          }
          get keysUpward() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysUpward : []
          }
          set keysUpward(DD) {
            const zD = this.inputs.attached.keyboard;
            zD && (zD.keysUpward = DD)
          }
          get keysDown() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysDown : []
          }
          set keysDown(DD) {
            const zD = this.inputs.attached.keyboard;
            zD && (zD.keysDown = DD)
          }
          get keysDownward() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysDownward : []
          }
          set keysDownward(DD) {
            const zD = this.inputs.attached.keyboard;
            zD && (zD.keysDownward = DD)
          }
          get keysLeft() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysLeft : []
          }
          set keysLeft(DD) {
            const zD = this.inputs.attached.keyboard;
            zD && (zD.keysLeft = DD)
          }
          get keysRight() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysRight : []
          }
          set keysRight(DD) {
            const zD = this.inputs.attached.keyboard;
            zD && (zD.keysRight = DD)
          }
          get keysRotateLeft() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysRotateLeft : []
          }
          set keysRotateLeft(DD) {
            const zD = this.inputs.attached.keyboard;
            zD && (zD.keysRotateLeft = DD)
          }
          get keysRotateRight() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysRotateRight : []
          }
          set keysRotateRight(DD) {
            const zD = this.inputs.attached.keyboard;
            zD && (zD.keysRotateRight = DD)
          }
          get keysRotateUp() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysRotateUp : []
          }
          set keysRotateUp(DD) {
            const zD = this.inputs.attached.keyboard;
            zD && (zD.keysRotateUp = DD)
          }
          get keysRotateDown() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysRotateDown : []
          }
          set keysRotateDown(DD) {
            const zD = this.inputs.attached.keyboard;
            zD && (zD.keysRotateDown = DD)
          }
          constructor(DD, zD, wD) {
            var sD;
            super(DD, zD, wD, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), sD = this, this.ellipsoid = (0, pD.m)(this, AD, new KD.s(.5, 1, .5)), this.ellipsoidOffset = ((0, pD.m)(this, UD), (0, pD.m)(this, fD, new KD.s(0, 0, 0))), this.checkCollisions = ((0, pD.m)(this, ID), (0, pD.m)(this, BD, !1)), this.applyGravity = ((0, pD.m)(this, GD), (0, pD.m)(this, hD, !1)), this.inputs = (0, pD.m)(this, nD), this._needMoveForGravity = !1, this._oldPosition = KD.s.Zero(), this._diffPosition = KD.s.Zero(), this._newPosition = KD.s.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(DD, zD) {
              let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              sD._newPosition.pC(zD), sD._newPosition.subtractToRef(sD._oldPosition, sD._diffPosition), sD._diffPosition.length() > XD.c.CollisionsEpsilon && (sD.position.addToRef(sD._diffPosition, sD._deferredPositionUpdate), sD._deferOnly ? sD._deferredUpdated = !0 : sD.position.pC(sD._deferredPositionUpdate), sD.GU && wD && sD.GU(wD))
            }, this.inputs = new QD(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(DD, zD) {
            zD = gD.h.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(zD)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new KD.s(0, 0, 0), this.cameraRotation = new KD.r(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(DD) {
            this._collisionMask = isNaN(DD) ? -1 : DD
          }
          _collideWithWorld(DD) {
            let zD;
            zD = this.parent ? KD.s.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, zD.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const wD = this.Ul().collisionCoordinator;
            this._collider || (this._collider = wD.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let pD = DD;
            this.applyGravity && (pD = DD.add(this.Ul().gravity)), wD.getNewPosition(this._oldPosition, pD, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = KD.s.Zero(), this._transformedDirection = KD.s.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(DD) {
            this._needMoveForGravity = DD
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.Ul().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const KD = "function" === typeof Symbol && Symbol.metadata ? Object.create(RD[Symbol.metadata] ?? null) : void 0;
          zD = [(0, sD.B)()], wD = [(0, sD.B)()], LD = [(0, sD.C)()], cD = [(0, sD.C)()], (0, pD.i)(null, null, zD, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: DD => "ellipsoid" in DD,
              get: DD => DD.ellipsoid,
              set: (DD, zD) => {
                DD.ellipsoid = zD
              }
            },
            metadata: KD
          }, AD, UD), (0, pD.i)(null, null, wD, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: DD => "ellipsoidOffset" in DD,
              get: DD => DD.ellipsoidOffset,
              set: (DD, zD) => {
                DD.ellipsoidOffset = zD
              }
            },
            metadata: KD
          }, fD, ID), (0, pD.i)(null, null, LD, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: DD => "checkCollisions" in DD,
              get: DD => DD.checkCollisions,
              set: (DD, zD) => {
                DD.checkCollisions = zD
              }
            },
            metadata: KD
          }, BD, GD), (0, pD.i)(null, null, cD, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: DD => "applyGravity" in DD,
              get: DD => DD.applyGravity,
              set: (DD, zD) => {
                DD.applyGravity = zD
              }
            },
            metadata: KD
          }, hD, nD), KD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: KD
          })
        })(), DD
      })(),
      CD = !1;
    CD || (CD = !0, (0, VD.i)("BABYLON.FreeCamera", PD))
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);
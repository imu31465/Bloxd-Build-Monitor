export const id = 248;
export const ids = [248];
export const modules = {
  39347: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => UD
    });
    var ID = cD(39154),
      pD = cD(39156),
      iD = cD(36446),
      fD = cD(39349),
      bD = cD(39380),
      QD = cD(39328),
      wD = cD(39245);
    let SD = (() => {
      var DD;
      let CD, cD, fD, bD, SD, BD, yD, MD, tD, ZD, oD, vD = [],
        ND = [],
        gD = [],
        XD = [],
        mD = [],
        nD = [],
        OD = [],
        PD = [],
        HD = [],
        UD = [],
        xD = [],
        qD = [],
        JD = [],
        KD = [],
        aD = [],
        VD = [],
        zD = [],
        jD = [],
        lD = [],
        LD = [],
        TD = [],
        GD = [];
      return DD = class {
        constructor() {
          this.keysUp = (0, ID.m)(this, vD, [38]), this.keysUpward = ((0, ID.m)(this, ND), (0, ID.m)(this, gD, [33])), this.keysDown = ((0, ID.m)(this, XD), (0, ID.m)(this, mD, [40])), this.keysDownward = ((0, ID.m)(this, nD), (0, ID.m)(this, OD, [34])), this.keysLeft = ((0, ID.m)(this, PD), (0, ID.m)(this, HD, [37])), this.keysRight = ((0, ID.m)(this, UD), (0, ID.m)(this, xD, [39])), this.rotationSpeed = ((0, ID.m)(this, qD), (0, ID.m)(this, JD, .5)), this.keysRotateLeft = ((0, ID.m)(this, KD), (0, ID.m)(this, aD, [])), this.keysRotateRight = ((0, ID.m)(this, VD), (0, ID.m)(this, zD, [])), this.keysRotateUp = ((0, ID.m)(this, jD), (0, ID.m)(this, lD, [])), this.keysRotateDown = ((0, ID.m)(this, LD), (0, ID.m)(this, TD, [])), this._keys = ((0, ID.m)(this, GD), new Array)
        }
        attachControl(DD) {
          DD = wD.g.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.hq(), this._engine = this._scene.DZ(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((CD => {
            const cD = CD.event;
            if (!cD.metaKey)
              if (CD.type === QD.c.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(cD.keyCode) || -1 !== this.keysDown.indexOf(cD.keyCode) || -1 !== this.keysLeft.indexOf(cD.keyCode) || -1 !== this.keysRight.indexOf(cD.keyCode) || -1 !== this.keysUpward.indexOf(cD.keyCode) || -1 !== this.keysDownward.indexOf(cD.keyCode) || -1 !== this.keysRotateLeft.indexOf(cD.keyCode) || -1 !== this.keysRotateRight.indexOf(cD.keyCode) || -1 !== this.keysRotateUp.indexOf(cD.keyCode) || -1 !== this.keysRotateDown.indexOf(cD.keyCode)) {
                  -1 === this._keys.indexOf(cD.keyCode) && this._keys.push(cD.keyCode), DD || cD.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(cD.keyCode) || -1 !== this.keysDown.indexOf(cD.keyCode) || -1 !== this.keysLeft.indexOf(cD.keyCode) || -1 !== this.keysRight.indexOf(cD.keyCode) || -1 !== this.keysUpward.indexOf(cD.keyCode) || -1 !== this.keysDownward.indexOf(cD.keyCode) || -1 !== this.keysRotateLeft.indexOf(cD.keyCode) || -1 !== this.keysRotateRight.indexOf(cD.keyCode) || -1 !== this.keysRotateUp.indexOf(cD.keyCode) || -1 !== this.keysRotateDown.indexOf(cD.keyCode)) {
              const CD = this._keys.indexOf(cD.keyCode);
              CD >= 0 && this._keys.splice(CD, 1), DD || cD.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const DD = this.camera,
              CD = DD.movement.input,
              cD = CD.getEntry("keyboard", "translate"),
              ID = CD.getEntry("keyboard", "rotate"),
              pD = ID?.sensitivity ?? 1,
              fD = DD._localDirection.K4(0, 0, 0);
            for (let iD = 0; iD < this._keys.length; iD++) {
              const CD = this._keys[iD]; - 1 !== this.keysLeft.indexOf(CD) ? fD.x -= 1 : -1 !== this.keysUp.indexOf(CD) ? fD.z += 1 : -1 !== this.keysRight.indexOf(CD) ? fD.x += 1 : -1 !== this.keysDown.indexOf(CD) ? fD.z -= 1 : -1 !== this.keysUpward.indexOf(CD) ? fD.y += 1 : -1 !== this.keysDownward.indexOf(CD) ? fD.y -= 1 : -1 !== this.keysRotateLeft.indexOf(CD) ? ID && (DD.cameraRotation.y -= this._getLocalRotation() * pD) : -1 !== this.keysRotateRight.indexOf(CD) ? ID && (DD.cameraRotation.y += this._getLocalRotation() * pD) : -1 !== this.keysRotateUp.indexOf(CD) ? ID && (DD.cameraRotation.x -= this._getLocalRotation() * pD) : -1 !== this.keysRotateDown.indexOf(CD) && ID && (DD.cameraRotation.x += this._getLocalRotation() * pD)
            }
            if (cD && (0 !== fD.x || 0 !== fD.y || 0 !== fD.z)) {
              const CD = DD._computeLocalCameraSpeed() * (cD.sensitivity ?? 1);
              fD.normalize().scaleInPlace(CD), DD.hq().useRightHandedSystem && (fD.z *= -1), DD.getViewMatrix().invertToRef(DD._cameraTransformMatrix), iD.p.TransformNormalToRef(fD, DD._cameraTransformMatrix, DD._transformedDirection), DD.cameraDirection.addInPlace(DD._transformedDirection)
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
        const iD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        CD = [(0, pD.G)()], cD = [(0, pD.G)()], fD = [(0, pD.G)()], bD = [(0, pD.G)()], SD = [(0, pD.G)()], BD = [(0, pD.G)()], yD = [(0, pD.G)()], MD = [(0, pD.G)()], tD = [(0, pD.G)()], ZD = [(0, pD.G)()], oD = [(0, pD.G)()], (0, ID.k)(null, null, CD, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysUp" in DD,
            get: DD => DD.keysUp,
            set: (DD, CD) => {
              DD.keysUp = CD
            }
          },
          metadata: iD
        }, vD, ND), (0, ID.k)(null, null, cD, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysUpward" in DD,
            get: DD => DD.keysUpward,
            set: (DD, CD) => {
              DD.keysUpward = CD
            }
          },
          metadata: iD
        }, gD, XD), (0, ID.k)(null, null, fD, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysDown" in DD,
            get: DD => DD.keysDown,
            set: (DD, CD) => {
              DD.keysDown = CD
            }
          },
          metadata: iD
        }, mD, nD), (0, ID.k)(null, null, bD, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysDownward" in DD,
            get: DD => DD.keysDownward,
            set: (DD, CD) => {
              DD.keysDownward = CD
            }
          },
          metadata: iD
        }, OD, PD), (0, ID.k)(null, null, SD, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysLeft" in DD,
            get: DD => DD.keysLeft,
            set: (DD, CD) => {
              DD.keysLeft = CD
            }
          },
          metadata: iD
        }, HD, UD), (0, ID.k)(null, null, BD, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysRight" in DD,
            get: DD => DD.keysRight,
            set: (DD, CD) => {
              DD.keysRight = CD
            }
          },
          metadata: iD
        }, xD, qD), (0, ID.k)(null, null, yD, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: DD => "rotationSpeed" in DD,
            get: DD => DD.rotationSpeed,
            set: (DD, CD) => {
              DD.rotationSpeed = CD
            }
          },
          metadata: iD
        }, JD, KD), (0, ID.k)(null, null, MD, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysRotateLeft" in DD,
            get: DD => DD.keysRotateLeft,
            set: (DD, CD) => {
              DD.keysRotateLeft = CD
            }
          },
          metadata: iD
        }, aD, VD), (0, ID.k)(null, null, tD, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysRotateRight" in DD,
            get: DD => DD.keysRotateRight,
            set: (DD, CD) => {
              DD.keysRotateRight = CD
            }
          },
          metadata: iD
        }, zD, jD), (0, ID.k)(null, null, ZD, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysRotateUp" in DD,
            get: DD => DD.keysRotateUp,
            set: (DD, CD) => {
              DD.keysRotateUp = CD
            }
          },
          metadata: iD
        }, lD, LD), (0, ID.k)(null, null, oD, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: DD => "keysRotateDown" in DD,
            get: DD => DD.keysRotateDown,
            set: (DD, CD) => {
              DD.keysRotateDown = CD
            }
          },
          metadata: iD
        }, TD, GD), iD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iD
        })
      })(), DD
    })();
    bD.c.FreeCameraKeyboardMoveInput = SD;
    var BD = cD(36473),
      yD = cD(39319);
    let MD = (() => {
      var DD;
      let CD, cD, iD = [],
        fD = [],
        bD = [],
        QD = [];
      return DD = class {
        _applyPointerRotation(DD, CD) {
          this._pointerConditions.button = this._currentActiveButton;
          const cD = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!cD || "rotate" !== cD.interaction) return;
          const ID = cD.YG ?? cD.sensitivity ?? 1 / this.angularSensibility,
            pD = cD.WG ?? cD.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += DD * ID, this.camera.cameraRotation.x += CD * pD
        }
        constructor() {
          let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = DD, this.buttons = (0, ID.m)(this, iD, [0, 1, 2]), this.angularSensibility = ((0, ID.m)(this, fD), (0, ID.m)(this, bD, 2e3)), this._pointerInput = (0, ID.m)(this, QD), this._previousPosition = null, this.onPointerMovedObservable = new BD.c, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(DD) {
          DD = wD.g.BackCompatCameraNoPreventDefault(arguments);
          const CD = this.camera.DZ(),
            cD = CD.getInputElement();
          this._pointerInput || (this._pointerInput = ID => {
            const pD = ID.event,
              iD = "touch" === pD.pointerType;
            if (!this.touchEnabled && iD) return;
            if (ID.type !== yD.c.POINTERMOVE && -1 === this.buttons.indexOf(pD.button)) return;
            const fD = pD.target;
            if (ID.type === yD.c.POINTERDOWN) {
              if (iD && -1 !== this._activePointerId || !iD && -1 !== this._currentActiveButton) return;
              this._activePointerId = pD.pointerId;
              try {
                fD?.setPointerCapture(pD.pointerId)
              } catch (bD) {} - 1 === this._currentActiveButton && (this._currentActiveButton = pD.button), this._previousPosition = {
                x: pD.clientX,
                y: pD.clientY
              }, DD || (pD.preventDefault(), cD && cD.focus()), CD.isPointerLock && this._onMouseMove && this._onMouseMove(ID.event)
            } else if (ID.type === yD.c.POINTERUP) {
              if (iD && this._activePointerId !== pD.pointerId || !iD && this._currentActiveButton !== pD.button) return;
              try {
                fD?.releasePointerCapture(pD.pointerId)
              } catch (bD) {}
              this._currentActiveButton = -1, this._previousPosition = null, DD || pD.preventDefault(), this._activePointerId = -1
            } else if (ID.type === yD.c.POINTERMOVE && (this._activePointerId === pD.pointerId || !iD))
              if (CD.isPointerLock && this._onMouseMove) this._onMouseMove(ID.event);
              else if (this._previousPosition) {
              const CD = this.camera._calculateHandednessMultiplier(),
                cD = (pD.clientX - this._previousPosition.x) * CD,
                ID = (pD.clientY - this._previousPosition.y) * CD;
              this._allowCameraRotation && this._applyPointerRotation(cD, ID), this.onPointerMovedObservable.notifyObservers({
                offsetX: cD,
                offsetY: ID
              }), this._previousPosition = {
                x: pD.clientX,
                y: pD.clientY
              }, DD || pD.preventDefault()
            }
          }), this._onMouseMove = cD => {
            if (!CD.isPointerLock) return;
            const ID = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(cD.movementX * ID, cD.movementY * ID), this._previousPosition = null, DD || cD.preventDefault()
          }, this._observer = this.camera.hq()._inputManager._addCameraPointerObserver(this._pointerInput, yD.c.POINTERDOWN | yD.c.POINTERUP | yD.c.POINTERMOVE), cD && (this._contextMenuBind = DD => this.onContextMenu(DD), cD.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(DD) {
          DD.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.hq()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const DD = this.camera.DZ().getInputElement();
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
        const wD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        CD = [(0, pD.G)()], cD = [(0, pD.G)()], (0, ID.k)(null, null, CD, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: DD => "buttons" in DD,
            get: DD => DD.buttons,
            set: (DD, CD) => {
              DD.buttons = CD
            }
          },
          metadata: wD
        }, iD, fD), (0, ID.k)(null, null, cD, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: DD => "angularSensibility" in DD,
            get: DD => DD.angularSensibility,
            set: (DD, CD) => {
              DD.angularSensibility = CD
            }
          },
          metadata: wD
        }, bD, QD), wD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wD
        })
      })(), DD
    })();
    bD.c.FreeCameraMouseInput = MD;
    var tD = cD(39334);
    let ZD = (() => {
      var DD;
      let CD, cD, iD, fD = [],
        bD = [],
        QD = [],
        SD = [],
        MD = [],
        ZD = [];
      return DD = class {
        constructor() {
          this.wheelPrecisionX = (0, ID.m)(this, fD, 3), this.wheelPrecisionY = ((0, ID.m)(this, bD), (0, ID.m)(this, QD, 3)), this.wheelPrecisionZ = ((0, ID.m)(this, SD), (0, ID.m)(this, MD, 3)), this.onChangedObservable = ((0, ID.m)(this, ZD), new BD.c), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(DD) {
          DD = wD.g.BackCompatCameraNoPreventDefault(arguments), this._wheel = CD => {
            if (CD.type !== yD.c.POINTERWHEEL) return;
            const cD = CD.event,
              ID = cD.deltaMode === tD.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * ID * cD.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * ID * cD.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * ID * cD.deltaZ / this._normalize, cD.preventDefault && (DD || cD.preventDefault())
          }, this._observer = this.camera.hq()._inputManager._addCameraPointerObserver(this._wheel, yD.c.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.hq()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const wD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        CD = [(0, pD.G)()], cD = [(0, pD.G)()], iD = [(0, pD.G)()], (0, ID.k)(null, null, CD, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelPrecisionX" in DD,
            get: DD => DD.wheelPrecisionX,
            set: (DD, CD) => {
              DD.wheelPrecisionX = CD
            }
          },
          metadata: wD
        }, fD, bD), (0, ID.k)(null, null, cD, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelPrecisionY" in DD,
            get: DD => DD.wheelPrecisionY,
            set: (DD, CD) => {
              DD.wheelPrecisionY = CD
            }
          },
          metadata: wD
        }, QD, SD), (0, ID.k)(null, null, iD, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelPrecisionZ" in DD,
            get: DD => DD.wheelPrecisionZ,
            set: (DD, CD) => {
              DD.wheelPrecisionZ = CD
            }
          },
          metadata: wD
        }, MD, ZD), wD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wD
        })
      })(), DD
    })();
    var oD;
    ! function(DD) {
      DD[DD.MoveRelative = 0] = "MoveRelative", DD[DD.RotateRelative = 1] = "RotateRelative", DD[DD.MoveScene = 2] = "MoveScene"
    }(oD || (oD = {}));
    let vD = (() => {
      var DD;
      let CD, cD, fD, bD, QD, wD, SD, BD, yD, MD = ZD,
        tD = [];
      return DD = class extends MD {
        constructor() {
          super(...arguments), this.camera = (0, ID.m)(this, tD), this._moveRelative = iD.p.Zero(), this._rotateRelative = iD.p.Zero(), this._moveScene = iD.p.Zero(), this._wheelXAction = oD.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = oD.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(DD) {
          null === DD && this._wheelXAction !== oD.MoveRelative || (this._wheelXAction = oD.MoveRelative, this._wheelXActionCoordinate = DD)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== oD.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(DD) {
          null === DD && this._wheelYAction !== oD.MoveRelative || (this._wheelYAction = oD.MoveRelative, this._wheelYActionCoordinate = DD)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== oD.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(DD) {
          null === DD && this._wheelZAction !== oD.MoveRelative || (this._wheelZAction = oD.MoveRelative, this._wheelZActionCoordinate = DD)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== oD.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(DD) {
          null === DD && this._wheelXAction !== oD.RotateRelative || (this._wheelXAction = oD.RotateRelative, this._wheelXActionCoordinate = DD)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== oD.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(DD) {
          null === DD && this._wheelYAction !== oD.RotateRelative || (this._wheelYAction = oD.RotateRelative, this._wheelYActionCoordinate = DD)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== oD.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(DD) {
          null === DD && this._wheelZAction !== oD.RotateRelative || (this._wheelZAction = oD.RotateRelative, this._wheelZActionCoordinate = DD)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== oD.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(DD) {
          null === DD && this._wheelXAction !== oD.MoveScene || (this._wheelXAction = oD.MoveScene, this._wheelXActionCoordinate = DD)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== oD.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(DD) {
          null === DD && this._wheelYAction !== oD.MoveScene || (this._wheelYAction = oD.MoveScene, this._wheelYActionCoordinate = DD)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== oD.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(DD) {
          null === DD && this._wheelZAction !== oD.MoveScene || (this._wheelZAction = oD.MoveScene, this._wheelZActionCoordinate = DD)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== oD.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.YF(0), this._rotateRelative.YF(0), this._moveScene.YF(0), this._updateCamera(), this.camera.hq().useRightHandedSystem && (this._moveRelative.z *= -1);
          const DD = iD.d.Zero();
          this.camera.getViewMatrix().invertToRef(DD);
          const CD = iD.p.Zero();
          iD.p.TransformNormalToRef(this._moveRelative, DD, CD), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(CD), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(DD, CD, cD) {
          if (0 === DD) return;
          if (null === CD || null === cD) return;
          let ID = null;
          switch (CD) {
            case oD.MoveRelative:
              ID = this._moveRelative;
              break;
            case oD.RotateRelative:
              ID = this._rotateRelative;
              break;
            case oD.MoveScene:
              ID = this._moveScene
          }
          switch (cD) {
            case 0:
              ID.set(DD, 0, 0);
              break;
            case 1:
              ID.set(0, DD, 0);
              break;
            case 2:
              ID.set(0, 0, DD)
          }
        }
      }, (() => {
        const iD = "function" === typeof Symbol && Symbol.metadata ? Object.create(MD[Symbol.metadata] ?? null) : void 0;
        CD = [(0, pD.G)()], cD = [(0, pD.G)()], fD = [(0, pD.G)()], bD = [(0, pD.G)()], QD = [(0, pD.G)()], wD = [(0, pD.G)()], SD = [(0, pD.G)()], BD = [(0, pD.G)()], yD = [(0, pD.G)()], (0, ID.k)(DD, null, CD, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelXMoveRelative" in DD,
            set: (DD, CD) => {
              DD.wheelXMoveRelative = CD
            }
          },
          metadata: iD
        }, null, tD), (0, ID.k)(DD, null, cD, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelYMoveRelative" in DD,
            set: (DD, CD) => {
              DD.wheelYMoveRelative = CD
            }
          },
          metadata: iD
        }, null, tD), (0, ID.k)(DD, null, fD, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelZMoveRelative" in DD,
            set: (DD, CD) => {
              DD.wheelZMoveRelative = CD
            }
          },
          metadata: iD
        }, null, tD), (0, ID.k)(DD, null, bD, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelXRotateRelative" in DD,
            set: (DD, CD) => {
              DD.wheelXRotateRelative = CD
            }
          },
          metadata: iD
        }, null, tD), (0, ID.k)(DD, null, QD, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelYRotateRelative" in DD,
            set: (DD, CD) => {
              DD.wheelYRotateRelative = CD
            }
          },
          metadata: iD
        }, null, tD), (0, ID.k)(DD, null, wD, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelZRotateRelative" in DD,
            set: (DD, CD) => {
              DD.wheelZRotateRelative = CD
            }
          },
          metadata: iD
        }, null, tD), (0, ID.k)(DD, null, SD, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelXMoveScene" in DD,
            set: (DD, CD) => {
              DD.wheelXMoveScene = CD
            }
          },
          metadata: iD
        }, null, tD), (0, ID.k)(DD, null, BD, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelYMoveScene" in DD,
            set: (DD, CD) => {
              DD.wheelYMoveScene = CD
            }
          },
          metadata: iD
        }, null, tD), (0, ID.k)(DD, null, yD, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: DD => "wheelZMoveScene" in DD,
            set: (DD, CD) => {
              DD.wheelZMoveScene = CD
            }
          },
          metadata: iD
        }, null, tD), iD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iD
        })
      })(), DD
    })();
    bD.c.FreeCameraMouseWheelInput = vD;
    let ND = (() => {
      var DD;
      let CD, cD, fD = [],
        bD = [],
        QD = [],
        SD = [];
      return DD = class {
        constructor() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = DD, this.touchAngularSensibility = (0, ID.m)(this, fD, 2e5), this.touchMoveSensibility = ((0, ID.m)(this, bD), (0, ID.m)(this, QD, 250)), this.singleFingerRotate = ((0, ID.m)(this, SD), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = wD.g.IsSafari()
        }
        attachControl(DD) {
          DD = wD.g.BackCompatCameraNoPreventDefault(arguments);
          let CD = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = cD => {
              const ID = cD.event,
                pD = "mouse" === ID.pointerType || this._isSafari && "undefined" === typeof ID.pointerType;
              if (this.allowMouse || !pD)
                if (cD.type === yD.c.POINTERDOWN) {
                  if (DD || ID.preventDefault(), this._pointerPressed.push(ID.pointerId), 1 !== this._pointerPressed.length) return;
                  CD = {
                    x: ID.clientX,
                    y: ID.clientY
                  }
                } else if (cD.type === yD.c.POINTERUP) {
                DD || ID.preventDefault();
                const cD = this._pointerPressed.indexOf(ID.pointerId);
                if (-1 === cD) return;
                if (this._pointerPressed.splice(cD, 1), 0 != cD) return;
                CD = null, this._offsetX = null, this._offsetY = null
              } else if (cD.type === yD.c.POINTERMOVE) {
                if (DD || ID.preventDefault(), !CD) return;
                if (0 != this._pointerPressed.indexOf(ID.pointerId)) return;
                this._offsetX = ID.clientX - CD.x, this._offsetY = -(ID.clientY - CD.y)
              }
            }), this._observer = this.camera.hq()._inputManager._addCameraPointerObserver(this._pointerInput, yD.c.POINTERDOWN | yD.c.POINTERUP | yD.c.POINTERMOVE), this._onLostFocus) {
            const DD = this.camera.DZ().getInputElement();
            DD && DD.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.hq()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const DD = this.camera.DZ().getInputElement();
              DD && DD.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const DD = this.camera,
            CD = DD.movement.input,
            cD = CD.getEntry("touch", "rotate"),
            ID = CD.getEntry("touch", "translate"),
            pD = DD._calculateHandednessMultiplier(),
            fD = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (cD) {
            const CD = cD.sensitivity ?? 1 / this.touchAngularSensibility;
            DD.cameraRotation.y = this._offsetX * pD * CD, fD && (DD.cameraRotation.x = -this._offsetY * pD * CD)
          }
          if (!fD && ID) {
            const CD = DD._computeLocalCameraSpeed(),
              cD = ID.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              pD = iD.l.cZ[0];
            pD.K4(0, 0, CD * this._offsetY * cD), iD.d.RotationYawPitchRollToRef(DD.rotation.y, DD.rotation.x, 0, DD._cameraRotationMatrix), iD.p.TransformCoordinatesToRef(pD, DD._cameraRotationMatrix, pD), DD.cameraDirection.addInPlace(pD)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const iD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        CD = [(0, pD.G)()], cD = [(0, pD.G)()], (0, ID.k)(null, null, CD, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: DD => "touchAngularSensibility" in DD,
            get: DD => DD.touchAngularSensibility,
            set: (DD, CD) => {
              DD.touchAngularSensibility = CD
            }
          },
          metadata: iD
        }, fD, bD), (0, ID.k)(null, null, cD, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: DD => "touchMoveSensibility" in DD,
            get: DD => DD.touchMoveSensibility,
            set: (DD, CD) => {
              DD.touchMoveSensibility = CD
            }
          },
          metadata: iD
        }, QD, SD), iD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iD
        })
      })(), DD
    })();
    bD.c.FreeCameraTouchInput = ND;
    var gD, XD, mD, nD = cD(39027);
    class OD extends bD.g {
      constructor(DD) {
        super(DD), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new SD), this
      }
      addMouse() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new MD(DD), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new vD, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new ND), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(gD = OD.prototype).addDeviceOrientation ?? (gD.addDeviceOrientation = (0, nD.j)("FreeCameraInputsManager", "addDeviceOrientation")), (XD = OD.prototype).addVirtualJoystick ?? (XD.addVirtualJoystick = (0, nD.j)("FreeCameraInputsManager", "addVirtualJoystick")), (mD = OD.prototype).addGamepad ?? (mD.addGamepad = (0, nD.j)("FreeCameraInputsManager", "addGamepad"));
    var PD = cD(39046),
      HD = cD(36488);
    let UD = (() => {
        var DD;
        let CD, cD, bD, QD, SD = fD.e,
          BD = [],
          yD = [],
          MD = [],
          tD = [],
          ZD = [],
          oD = [],
          vD = [],
          ND = [];
        return DD = class extends SD {
          get angularSensibility() {
            const DD = this.inputs.attached.mouse;
            return DD ? DD.angularSensibility : 0
          }
          set angularSensibility(DD) {
            const CD = this.inputs.attached.mouse;
            CD && (CD.angularSensibility = DD)
          }
          get keysUp() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysUp : []
          }
          set keysUp(DD) {
            const CD = this.inputs.attached.keyboard;
            CD && (CD.keysUp = DD)
          }
          get keysUpward() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysUpward : []
          }
          set keysUpward(DD) {
            const CD = this.inputs.attached.keyboard;
            CD && (CD.keysUpward = DD)
          }
          get keysDown() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysDown : []
          }
          set keysDown(DD) {
            const CD = this.inputs.attached.keyboard;
            CD && (CD.keysDown = DD)
          }
          get keysDownward() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysDownward : []
          }
          set keysDownward(DD) {
            const CD = this.inputs.attached.keyboard;
            CD && (CD.keysDownward = DD)
          }
          get keysLeft() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysLeft : []
          }
          set keysLeft(DD) {
            const CD = this.inputs.attached.keyboard;
            CD && (CD.keysLeft = DD)
          }
          get keysRight() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysRight : []
          }
          set keysRight(DD) {
            const CD = this.inputs.attached.keyboard;
            CD && (CD.keysRight = DD)
          }
          get keysRotateLeft() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysRotateLeft : []
          }
          set keysRotateLeft(DD) {
            const CD = this.inputs.attached.keyboard;
            CD && (CD.keysRotateLeft = DD)
          }
          get keysRotateRight() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysRotateRight : []
          }
          set keysRotateRight(DD) {
            const CD = this.inputs.attached.keyboard;
            CD && (CD.keysRotateRight = DD)
          }
          get keysRotateUp() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysRotateUp : []
          }
          set keysRotateUp(DD) {
            const CD = this.inputs.attached.keyboard;
            CD && (CD.keysRotateUp = DD)
          }
          get keysRotateDown() {
            const DD = this.inputs.attached.keyboard;
            return DD ? DD.keysRotateDown : []
          }
          set keysRotateDown(DD) {
            const CD = this.inputs.attached.keyboard;
            CD && (CD.keysRotateDown = DD)
          }
          constructor(DD, CD, cD) {
            var pD;
            super(DD, CD, cD, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), pD = this, this.ellipsoid = (0, ID.m)(this, BD, new iD.p(.5, 1, .5)), this.ellipsoidOffset = ((0, ID.m)(this, yD), (0, ID.m)(this, MD, new iD.p(0, 0, 0))), this.checkCollisions = ((0, ID.m)(this, tD), (0, ID.m)(this, ZD, !1)), this.applyGravity = ((0, ID.m)(this, oD), (0, ID.m)(this, vD, !1)), this.inputs = (0, ID.m)(this, ND), this._needMoveForGravity = !1, this._oldPosition = iD.p.Zero(), this._diffPosition = iD.p.Zero(), this._newPosition = iD.p.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(DD, CD) {
              let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              pD._newPosition.YCD(CD), pD._newPosition.subtractToRef(pD._oldPosition, pD._diffPosition), pD._diffPosition.length() > PD.e.CollisionsEpsilon && (pD.position.addToRef(pD._diffPosition, pD._deferredPositionUpdate), pD._deferOnly ? pD._deferredUpdated = !0 : pD.position.YCD(pD._deferredPositionUpdate), pD.xy && cD && pD.xy(cD))
            }, this.inputs = new OD(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(DD, CD) {
            CD = wD.g.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(CD)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new iD.p(0, 0, 0), this.cameraRotation = new iD.n(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(DD) {
            this._collisionMask = isNaN(DD) ? -1 : DD
          }
          _collideWithWorld(DD) {
            let CD;
            CD = this.parent ? iD.p.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, CD.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const cD = this.hq().collisionCoordinator;
            this._collider || (this._collider = cD.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let ID = DD;
            this.applyGravity && (ID = DD.add(this.hq().gravity)), cD.getNewPosition(this._oldPosition, ID, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = iD.p.Zero(), this._transformedDirection = iD.p.Zero()), this.inputs.checkInputs(), super._checkInputs()
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
            this.checkCollisions && this.hq().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const iD = "function" === typeof Symbol && Symbol.metadata ? Object.create(SD[Symbol.metadata] ?? null) : void 0;
          CD = [(0, pD.C)()], cD = [(0, pD.C)()], bD = [(0, pD.G)()], QD = [(0, pD.G)()], (0, ID.k)(null, null, CD, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: DD => "ellipsoid" in DD,
              get: DD => DD.ellipsoid,
              set: (DD, CD) => {
                DD.ellipsoid = CD
              }
            },
            metadata: iD
          }, BD, yD), (0, ID.k)(null, null, cD, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: DD => "ellipsoidOffset" in DD,
              get: DD => DD.ellipsoidOffset,
              set: (DD, CD) => {
                DD.ellipsoidOffset = CD
              }
            },
            metadata: iD
          }, MD, tD), (0, ID.k)(null, null, bD, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: DD => "checkCollisions" in DD,
              get: DD => DD.checkCollisions,
              set: (DD, CD) => {
                DD.checkCollisions = CD
              }
            },
            metadata: iD
          }, ZD, oD), (0, ID.k)(null, null, QD, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: DD => "applyGravity" in DD,
              get: DD => DD.applyGravity,
              set: (DD, CD) => {
                DD.applyGravity = CD
              }
            },
            metadata: iD
          }, vD, ND), iD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iD
          })
        })(), DD
      })(),
      xD = !1;
    xD || (xD = !0, (0, HD.d)("BABYLON.FreeCamera", UD))
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);
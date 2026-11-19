export const id = 247;
export const ids = [247];
export const modules = {
  39328: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => BY
    });
    var FY = DY(39127),
      AY = DY(39131),
      IY = DY(36524),
      RY = DY(39337),
      OY = DY(39367),
      gY = DY(39306),
      aY = DY(39219);
    let vY = (() => {
      var YY;
      let rY, DY, RY, OY, vY, uY, sY, iY, yY, QY, oY, WY = [],
        EY = [],
        mY = [],
        VY = [],
        SY = [],
        lY = [],
        TY = [],
        eY = [],
        NY = [],
        BY = [],
        cY = [],
        KY = [],
        HY = [],
        zY = [],
        ZY = [],
        CY = [],
        fY = [],
        jY = [],
        hY = [],
        dY = [],
        JY = [],
        MY = [];
      return YY = class {
        constructor() {
          this.keysUp = (0, FY.j)(this, WY, [38]), this.keysUpward = ((0, FY.j)(this, EY), (0, FY.j)(this, mY, [33])), this.keysDown = ((0, FY.j)(this, VY), (0, FY.j)(this, SY, [40])), this.keysDownward = ((0, FY.j)(this, lY), (0, FY.j)(this, TY, [34])), this.keysLeft = ((0, FY.j)(this, eY), (0, FY.j)(this, NY, [37])), this.keysRight = ((0, FY.j)(this, BY), (0, FY.j)(this, cY, [39])), this.rotationSpeed = ((0, FY.j)(this, KY), (0, FY.j)(this, HY, .5)), this.keysRotateLeft = ((0, FY.j)(this, zY), (0, FY.j)(this, ZY, [])), this.keysRotateRight = ((0, FY.j)(this, CY), (0, FY.j)(this, fY, [])), this.keysRotateUp = ((0, FY.j)(this, jY), (0, FY.j)(this, hY, [])), this.keysRotateDown = ((0, FY.j)(this, dY), (0, FY.j)(this, JY, [])), this._keys = ((0, FY.j)(this, MY), new Array)
        }
        attachControl(YY) {
          YY = aY.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.hT(), this._engine = this._scene.ky(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((rY => {
            const DY = rY.event;
            if (!DY.metaKey)
              if (rY.type === gY.d.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(DY.keyCode) || -1 !== this.keysDown.indexOf(DY.keyCode) || -1 !== this.keysLeft.indexOf(DY.keyCode) || -1 !== this.keysRight.indexOf(DY.keyCode) || -1 !== this.keysUpward.indexOf(DY.keyCode) || -1 !== this.keysDownward.indexOf(DY.keyCode) || -1 !== this.keysRotateLeft.indexOf(DY.keyCode) || -1 !== this.keysRotateRight.indexOf(DY.keyCode) || -1 !== this.keysRotateUp.indexOf(DY.keyCode) || -1 !== this.keysRotateDown.indexOf(DY.keyCode)) {
                  -1 === this._keys.indexOf(DY.keyCode) && this._keys.push(DY.keyCode), YY || DY.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(DY.keyCode) || -1 !== this.keysDown.indexOf(DY.keyCode) || -1 !== this.keysLeft.indexOf(DY.keyCode) || -1 !== this.keysRight.indexOf(DY.keyCode) || -1 !== this.keysUpward.indexOf(DY.keyCode) || -1 !== this.keysDownward.indexOf(DY.keyCode) || -1 !== this.keysRotateLeft.indexOf(DY.keyCode) || -1 !== this.keysRotateRight.indexOf(DY.keyCode) || -1 !== this.keysRotateUp.indexOf(DY.keyCode) || -1 !== this.keysRotateDown.indexOf(DY.keyCode)) {
              const rY = this._keys.indexOf(DY.keyCode);
              rY >= 0 && this._keys.splice(rY, 1), YY || DY.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const YY = this.camera,
              rY = YY.movement.input,
              DY = rY.getEntry("keyboard", "translate"),
              FY = rY.getEntry("keyboard", "rotate"),
              AY = FY?.sensitivity ?? 1,
              RY = YY._localDirection.p_(0, 0, 0);
            for (let IY = 0; IY < this._keys.length; IY++) {
              const rY = this._keys[IY]; - 1 !== this.keysLeft.indexOf(rY) ? RY.x -= 1 : -1 !== this.keysUp.indexOf(rY) ? RY.z += 1 : -1 !== this.keysRight.indexOf(rY) ? RY.x += 1 : -1 !== this.keysDown.indexOf(rY) ? RY.z -= 1 : -1 !== this.keysUpward.indexOf(rY) ? RY.y += 1 : -1 !== this.keysDownward.indexOf(rY) ? RY.y -= 1 : -1 !== this.keysRotateLeft.indexOf(rY) ? FY && (YY.cameraRotation.y -= this._getLocalRotation() * AY) : -1 !== this.keysRotateRight.indexOf(rY) ? FY && (YY.cameraRotation.y += this._getLocalRotation() * AY) : -1 !== this.keysRotateUp.indexOf(rY) ? FY && (YY.cameraRotation.x -= this._getLocalRotation() * AY) : -1 !== this.keysRotateDown.indexOf(rY) && FY && (YY.cameraRotation.x += this._getLocalRotation() * AY)
            }
            if (DY && (0 !== RY.x || 0 !== RY.y || 0 !== RY.z)) {
              const rY = YY._computeLocalCameraSpeed() * (DY.sensitivity ?? 1);
              RY.normalize().scaleInPlace(rY), YY.hT().useRightHandedSystem && (RY.z *= -1), YY.getViewMatrix().invertToRef(YY._cameraTransformMatrix), IY.r.TransformNormalToRef(RY, YY._cameraTransformMatrix, YY._transformedDirection), YY.cameraDirection.addInPlace(YY._transformedDirection)
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
          const YY = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * YY
        }
      }, (() => {
        const IY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rY = [(0, AY.M)()], DY = [(0, AY.M)()], RY = [(0, AY.M)()], OY = [(0, AY.M)()], vY = [(0, AY.M)()], uY = [(0, AY.M)()], sY = [(0, AY.M)()], iY = [(0, AY.M)()], yY = [(0, AY.M)()], QY = [(0, AY.M)()], oY = [(0, AY.M)()], (0, FY.i)(null, null, rY, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: YY => "keysUp" in YY,
            get: YY => YY.keysUp,
            set: (YY, rY) => {
              YY.keysUp = rY
            }
          },
          metadata: IY
        }, WY, EY), (0, FY.i)(null, null, DY, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: YY => "keysUpward" in YY,
            get: YY => YY.keysUpward,
            set: (YY, rY) => {
              YY.keysUpward = rY
            }
          },
          metadata: IY
        }, mY, VY), (0, FY.i)(null, null, RY, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: YY => "keysDown" in YY,
            get: YY => YY.keysDown,
            set: (YY, rY) => {
              YY.keysDown = rY
            }
          },
          metadata: IY
        }, SY, lY), (0, FY.i)(null, null, OY, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: YY => "keysDownward" in YY,
            get: YY => YY.keysDownward,
            set: (YY, rY) => {
              YY.keysDownward = rY
            }
          },
          metadata: IY
        }, TY, eY), (0, FY.i)(null, null, vY, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: YY => "keysLeft" in YY,
            get: YY => YY.keysLeft,
            set: (YY, rY) => {
              YY.keysLeft = rY
            }
          },
          metadata: IY
        }, NY, BY), (0, FY.i)(null, null, uY, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: YY => "keysRight" in YY,
            get: YY => YY.keysRight,
            set: (YY, rY) => {
              YY.keysRight = rY
            }
          },
          metadata: IY
        }, cY, KY), (0, FY.i)(null, null, sY, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: YY => "rotationSpeed" in YY,
            get: YY => YY.rotationSpeed,
            set: (YY, rY) => {
              YY.rotationSpeed = rY
            }
          },
          metadata: IY
        }, HY, zY), (0, FY.i)(null, null, iY, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: YY => "keysRotateLeft" in YY,
            get: YY => YY.keysRotateLeft,
            set: (YY, rY) => {
              YY.keysRotateLeft = rY
            }
          },
          metadata: IY
        }, ZY, CY), (0, FY.i)(null, null, yY, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: YY => "keysRotateRight" in YY,
            get: YY => YY.keysRotateRight,
            set: (YY, rY) => {
              YY.keysRotateRight = rY
            }
          },
          metadata: IY
        }, fY, jY), (0, FY.i)(null, null, QY, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: YY => "keysRotateUp" in YY,
            get: YY => YY.keysRotateUp,
            set: (YY, rY) => {
              YY.keysRotateUp = rY
            }
          },
          metadata: IY
        }, hY, dY), (0, FY.i)(null, null, oY, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: YY => "keysRotateDown" in YY,
            get: YY => YY.keysRotateDown,
            set: (YY, rY) => {
              YY.keysRotateDown = rY
            }
          },
          metadata: IY
        }, JY, MY), IY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IY
        })
      })(), YY
    })();
    OY.d.FreeCameraKeyboardMoveInput = vY;
    var uY = DY(36552),
      sY = DY(39301);
    let iY = (() => {
      var YY;
      let rY, DY, IY = [],
        RY = [],
        OY = [],
        gY = [];
      return YY = class {
        _applyPointerRotation(YY, rY) {
          this._pointerConditions.button = this._currentActiveButton;
          const DY = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!DY || "rotate" !== DY.interaction) return;
          const FY = DY.GJ ?? DY.sensitivity ?? 1 / this.angularSensibility,
            AY = DY.xJ ?? DY.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += YY * FY, this.camera.cameraRotation.x += rY * AY
        }
        constructor() {
          let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = YY, this.buttons = (0, FY.j)(this, IY, [0, 1, 2]), this.angularSensibility = ((0, FY.j)(this, RY), (0, FY.j)(this, OY, 2e3)), this._pointerInput = (0, FY.j)(this, gY), this._previousPosition = null, this.onPointerMovedObservable = new uY.e, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(YY) {
          YY = aY.i.BackCompatCameraNoPreventDefault(arguments);
          const rY = this.camera.ky(),
            DY = rY.getInputElement();
          this._pointerInput || (this._pointerInput = FY => {
            const AY = FY.event,
              IY = "touch" === AY.pointerType;
            if (!this.touchEnabled && IY) return;
            if (FY.type !== sY.d.POINTERMOVE && -1 === this.buttons.indexOf(AY.button)) return;
            const RY = AY.target;
            if (FY.type === sY.d.POINTERDOWN) {
              if (IY && -1 !== this._activePointerId || !IY && -1 !== this._currentActiveButton) return;
              this._activePointerId = AY.pointerId;
              try {
                RY?.setPointerCapture(AY.pointerId)
              } catch (OY) {} - 1 === this._currentActiveButton && (this._currentActiveButton = AY.button), this._previousPosition = {
                x: AY.clientX,
                y: AY.clientY
              }, YY || (AY.preventDefault(), DY && DY.focus()), rY.isPointerLock && this._onMouseMove && this._onMouseMove(FY.event)
            } else if (FY.type === sY.d.POINTERUP) {
              if (IY && this._activePointerId !== AY.pointerId || !IY && this._currentActiveButton !== AY.button) return;
              try {
                RY?.releasePointerCapture(AY.pointerId)
              } catch (OY) {}
              this._currentActiveButton = -1, this._previousPosition = null, YY || AY.preventDefault(), this._activePointerId = -1
            } else if (FY.type === sY.d.POINTERMOVE && (this._activePointerId === AY.pointerId || !IY))
              if (rY.isPointerLock && this._onMouseMove) this._onMouseMove(FY.event);
              else if (this._previousPosition) {
              const rY = this.camera._calculateHandednessMultiplier(),
                DY = (AY.clientX - this._previousPosition.x) * rY,
                FY = (AY.clientY - this._previousPosition.y) * rY;
              this._allowCameraRotation && this._applyPointerRotation(DY, FY), this.onPointerMovedObservable.notifyObservers({
                offsetX: DY,
                offsetY: FY
              }), this._previousPosition = {
                x: AY.clientX,
                y: AY.clientY
              }, YY || AY.preventDefault()
            }
          }), this._onMouseMove = DY => {
            if (!rY.isPointerLock) return;
            const FY = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(DY.movementX * FY, DY.movementY * FY), this._previousPosition = null, YY || DY.preventDefault()
          }, this._observer = this.camera.hT()._inputManager._addCameraPointerObserver(this._pointerInput, sY.d.POINTERDOWN | sY.d.POINTERUP | sY.d.POINTERMOVE), DY && (this._contextMenuBind = YY => this.onContextMenu(YY), DY.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(YY) {
          YY.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.hT()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const YY = this.camera.ky().getInputElement();
              YY && YY.removeEventListener("contextmenu", this._contextMenuBind)
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
        const aY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rY = [(0, AY.M)()], DY = [(0, AY.M)()], (0, FY.i)(null, null, rY, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: YY => "buttons" in YY,
            get: YY => YY.buttons,
            set: (YY, rY) => {
              YY.buttons = rY
            }
          },
          metadata: aY
        }, IY, RY), (0, FY.i)(null, null, DY, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: YY => "angularSensibility" in YY,
            get: YY => YY.angularSensibility,
            set: (YY, rY) => {
              YY.angularSensibility = rY
            }
          },
          metadata: aY
        }, OY, gY), aY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: aY
        })
      })(), YY
    })();
    OY.d.FreeCameraMouseInput = iY;
    var yY = DY(39309);
    let QY = (() => {
      var YY;
      let rY, DY, IY, RY = [],
        OY = [],
        gY = [],
        vY = [],
        iY = [],
        QY = [];
      return YY = class {
        constructor() {
          this.wheelPrecisionX = (0, FY.j)(this, RY, 3), this.wheelPrecisionY = ((0, FY.j)(this, OY), (0, FY.j)(this, gY, 3)), this.wheelPrecisionZ = ((0, FY.j)(this, vY), (0, FY.j)(this, iY, 3)), this.onChangedObservable = ((0, FY.j)(this, QY), new uY.e), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(YY) {
          YY = aY.i.BackCompatCameraNoPreventDefault(arguments), this._wheel = rY => {
            if (rY.type !== sY.d.POINTERWHEEL) return;
            const DY = rY.event,
              FY = DY.deltaMode === yY.d.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * FY * DY.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * FY * DY.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * FY * DY.deltaZ / this._normalize, DY.preventDefault && (YY || DY.preventDefault())
          }, this._observer = this.camera.hT()._inputManager._addCameraPointerObserver(this._wheel, sY.d.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.hT()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const aY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rY = [(0, AY.M)()], DY = [(0, AY.M)()], IY = [(0, AY.M)()], (0, FY.i)(null, null, rY, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: YY => "wheelPrecisionX" in YY,
            get: YY => YY.wheelPrecisionX,
            set: (YY, rY) => {
              YY.wheelPrecisionX = rY
            }
          },
          metadata: aY
        }, RY, OY), (0, FY.i)(null, null, DY, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: YY => "wheelPrecisionY" in YY,
            get: YY => YY.wheelPrecisionY,
            set: (YY, rY) => {
              YY.wheelPrecisionY = rY
            }
          },
          metadata: aY
        }, gY, vY), (0, FY.i)(null, null, IY, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: YY => "wheelPrecisionZ" in YY,
            get: YY => YY.wheelPrecisionZ,
            set: (YY, rY) => {
              YY.wheelPrecisionZ = rY
            }
          },
          metadata: aY
        }, iY, QY), aY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: aY
        })
      })(), YY
    })();
    var oY;
    ! function(YY) {
      YY[YY.MoveRelative = 0] = "MoveRelative", YY[YY.RotateRelative = 1] = "RotateRelative", YY[YY.MoveScene = 2] = "MoveScene"
    }(oY || (oY = {}));
    let WY = (() => {
      var YY;
      let rY, DY, RY, OY, gY, aY, vY, uY, sY, iY = QY,
        yY = [];
      return YY = class extends iY {
        constructor() {
          super(...arguments), this.camera = (0, FY.j)(this, yY), this._moveRelative = IY.r.Zero(), this._rotateRelative = IY.r.Zero(), this._moveScene = IY.r.Zero(), this._wheelXAction = oY.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = oY.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(YY) {
          null === YY && this._wheelXAction !== oY.MoveRelative || (this._wheelXAction = oY.MoveRelative, this._wheelXActionCoordinate = YY)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== oY.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(YY) {
          null === YY && this._wheelYAction !== oY.MoveRelative || (this._wheelYAction = oY.MoveRelative, this._wheelYActionCoordinate = YY)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== oY.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(YY) {
          null === YY && this._wheelZAction !== oY.MoveRelative || (this._wheelZAction = oY.MoveRelative, this._wheelZActionCoordinate = YY)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== oY.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(YY) {
          null === YY && this._wheelXAction !== oY.RotateRelative || (this._wheelXAction = oY.RotateRelative, this._wheelXActionCoordinate = YY)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== oY.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(YY) {
          null === YY && this._wheelYAction !== oY.RotateRelative || (this._wheelYAction = oY.RotateRelative, this._wheelYActionCoordinate = YY)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== oY.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(YY) {
          null === YY && this._wheelZAction !== oY.RotateRelative || (this._wheelZAction = oY.RotateRelative, this._wheelZActionCoordinate = YY)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== oY.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(YY) {
          null === YY && this._wheelXAction !== oY.MoveScene || (this._wheelXAction = oY.MoveScene, this._wheelXActionCoordinate = YY)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== oY.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(YY) {
          null === YY && this._wheelYAction !== oY.MoveScene || (this._wheelYAction = oY.MoveScene, this._wheelYActionCoordinate = YY)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== oY.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(YY) {
          null === YY && this._wheelZAction !== oY.MoveScene || (this._wheelZAction = oY.MoveScene, this._wheelZActionCoordinate = YY)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== oY.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.o3(0), this._rotateRelative.o3(0), this._moveScene.o3(0), this._updateCamera(), this.camera.hT().useRightHandedSystem && (this._moveRelative.z *= -1);
          const YY = IY.e.Zero();
          this.camera.getViewMatrix().invertToRef(YY);
          const rY = IY.r.Zero();
          IY.r.TransformNormalToRef(this._moveRelative, YY, rY), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(rY), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(YY, rY, DY) {
          if (0 === YY) return;
          if (null === rY || null === DY) return;
          let FY = null;
          switch (rY) {
            case oY.MoveRelative:
              FY = this._moveRelative;
              break;
            case oY.RotateRelative:
              FY = this._rotateRelative;
              break;
            case oY.MoveScene:
              FY = this._moveScene
          }
          switch (DY) {
            case 0:
              FY.set(YY, 0, 0);
              break;
            case 1:
              FY.set(0, YY, 0);
              break;
            case 2:
              FY.set(0, 0, YY)
          }
        }
      }, (() => {
        const IY = "function" === typeof Symbol && Symbol.metadata ? Object.create(iY[Symbol.metadata] ?? null) : void 0;
        rY = [(0, AY.M)()], DY = [(0, AY.M)()], RY = [(0, AY.M)()], OY = [(0, AY.M)()], gY = [(0, AY.M)()], aY = [(0, AY.M)()], vY = [(0, AY.M)()], uY = [(0, AY.M)()], sY = [(0, AY.M)()], (0, FY.i)(YY, null, rY, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: YY => "wheelXMoveRelative" in YY,
            set: (YY, rY) => {
              YY.wheelXMoveRelative = rY
            }
          },
          metadata: IY
        }, null, yY), (0, FY.i)(YY, null, DY, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: YY => "wheelYMoveRelative" in YY,
            set: (YY, rY) => {
              YY.wheelYMoveRelative = rY
            }
          },
          metadata: IY
        }, null, yY), (0, FY.i)(YY, null, RY, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: YY => "wheelZMoveRelative" in YY,
            set: (YY, rY) => {
              YY.wheelZMoveRelative = rY
            }
          },
          metadata: IY
        }, null, yY), (0, FY.i)(YY, null, OY, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: YY => "wheelXRotateRelative" in YY,
            set: (YY, rY) => {
              YY.wheelXRotateRelative = rY
            }
          },
          metadata: IY
        }, null, yY), (0, FY.i)(YY, null, gY, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: YY => "wheelYRotateRelative" in YY,
            set: (YY, rY) => {
              YY.wheelYRotateRelative = rY
            }
          },
          metadata: IY
        }, null, yY), (0, FY.i)(YY, null, aY, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: YY => "wheelZRotateRelative" in YY,
            set: (YY, rY) => {
              YY.wheelZRotateRelative = rY
            }
          },
          metadata: IY
        }, null, yY), (0, FY.i)(YY, null, vY, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: YY => "wheelXMoveScene" in YY,
            set: (YY, rY) => {
              YY.wheelXMoveScene = rY
            }
          },
          metadata: IY
        }, null, yY), (0, FY.i)(YY, null, uY, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: YY => "wheelYMoveScene" in YY,
            set: (YY, rY) => {
              YY.wheelYMoveScene = rY
            }
          },
          metadata: IY
        }, null, yY), (0, FY.i)(YY, null, sY, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: YY => "wheelZMoveScene" in YY,
            set: (YY, rY) => {
              YY.wheelZMoveScene = rY
            }
          },
          metadata: IY
        }, null, yY), IY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IY
        })
      })(), YY
    })();
    OY.d.FreeCameraMouseWheelInput = WY;
    let EY = (() => {
      var YY;
      let rY, DY, RY = [],
        OY = [],
        gY = [],
        vY = [];
      return YY = class {
        constructor() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = YY, this.touchAngularSensibility = (0, FY.j)(this, RY, 2e5), this.touchMoveSensibility = ((0, FY.j)(this, OY), (0, FY.j)(this, gY, 250)), this.singleFingerRotate = ((0, FY.j)(this, vY), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = aY.i.IsSafari()
        }
        attachControl(YY) {
          YY = aY.i.BackCompatCameraNoPreventDefault(arguments);
          let rY = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = DY => {
              const FY = DY.event,
                AY = "mouse" === FY.pointerType || this._isSafari && "undefined" === typeof FY.pointerType;
              if (this.allowMouse || !AY)
                if (DY.type === sY.d.POINTERDOWN) {
                  if (YY || FY.preventDefault(), this._pointerPressed.push(FY.pointerId), 1 !== this._pointerPressed.length) return;
                  rY = {
                    x: FY.clientX,
                    y: FY.clientY
                  }
                } else if (DY.type === sY.d.POINTERUP) {
                YY || FY.preventDefault();
                const DY = this._pointerPressed.indexOf(FY.pointerId);
                if (-1 === DY) return;
                if (this._pointerPressed.splice(DY, 1), 0 != DY) return;
                rY = null, this._offsetX = null, this._offsetY = null
              } else if (DY.type === sY.d.POINTERMOVE) {
                if (YY || FY.preventDefault(), !rY) return;
                if (0 != this._pointerPressed.indexOf(FY.pointerId)) return;
                this._offsetX = FY.clientX - rY.x, this._offsetY = -(FY.clientY - rY.y)
              }
            }), this._observer = this.camera.hT()._inputManager._addCameraPointerObserver(this._pointerInput, sY.d.POINTERDOWN | sY.d.POINTERUP | sY.d.POINTERMOVE), this._onLostFocus) {
            const YY = this.camera.ky().getInputElement();
            YY && YY.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.hT()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const YY = this.camera.ky().getInputElement();
              YY && YY.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const YY = this.camera,
            rY = YY.movement.input,
            DY = rY.getEntry("touch", "rotate"),
            FY = rY.getEntry("touch", "translate"),
            AY = YY._calculateHandednessMultiplier(),
            RY = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (DY) {
            const rY = DY.sensitivity ?? 1 / this.touchAngularSensibility;
            YY.cameraRotation.y = this._offsetX * AY * rY, RY && (YY.cameraRotation.x = -this._offsetY * AY * rY)
          }
          if (!RY && FY) {
            const rY = YY._computeLocalCameraSpeed(),
              DY = FY.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              AY = IY.n.xy[0];
            AY.p_(0, 0, rY * this._offsetY * DY), IY.e.RotationYawPitchRollToRef(YY.rotation.y, YY.rotation.x, 0, YY._cameraRotationMatrix), IY.r.TransformCoordinatesToRef(AY, YY._cameraRotationMatrix, AY), YY.cameraDirection.addInPlace(AY)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const IY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rY = [(0, AY.M)()], DY = [(0, AY.M)()], (0, FY.i)(null, null, rY, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: YY => "touchAngularSensibility" in YY,
            get: YY => YY.touchAngularSensibility,
            set: (YY, rY) => {
              YY.touchAngularSensibility = rY
            }
          },
          metadata: IY
        }, RY, OY), (0, FY.i)(null, null, DY, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: YY => "touchMoveSensibility" in YY,
            get: YY => YY.touchMoveSensibility,
            set: (YY, rY) => {
              YY.touchMoveSensibility = rY
            }
          },
          metadata: IY
        }, gY, vY), IY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IY
        })
      })(), YY
    })();
    OY.d.FreeCameraTouchInput = EY;
    var mY, VY, SY, lY = DY(39029);
    class TY extends OY.e {
      constructor(YY) {
        super(YY), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new vY), this
      }
      addMouse() {
        let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new iY(YY), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new WY, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new EY), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(mY = TY.prototype).addDeviceOrientation ?? (mY.addDeviceOrientation = (0, lY.g)("FreeCameraInputsManager", "addDeviceOrientation")), (VY = TY.prototype).addVirtualJoystick ?? (VY.addVirtualJoystick = (0, lY.g)("FreeCameraInputsManager", "addVirtualJoystick")), (SY = TY.prototype).addGamepad ?? (SY.addGamepad = (0, lY.g)("FreeCameraInputsManager", "addGamepad"));
    var eY = DY(39041),
      NY = DY(36569);
    let BY = (() => {
        var YY;
        let rY, DY, OY, gY, vY = RY.g,
          uY = [],
          sY = [],
          iY = [],
          yY = [],
          QY = [],
          oY = [],
          WY = [],
          EY = [];
        return YY = class extends vY {
          get angularSensibility() {
            const YY = this.inputs.attached.mouse;
            return YY ? YY.angularSensibility : 0
          }
          set angularSensibility(YY) {
            const rY = this.inputs.attached.mouse;
            rY && (rY.angularSensibility = YY)
          }
          get keysUp() {
            const YY = this.inputs.attached.keyboard;
            return YY ? YY.keysUp : []
          }
          set keysUp(YY) {
            const rY = this.inputs.attached.keyboard;
            rY && (rY.keysUp = YY)
          }
          get keysUpward() {
            const YY = this.inputs.attached.keyboard;
            return YY ? YY.keysUpward : []
          }
          set keysUpward(YY) {
            const rY = this.inputs.attached.keyboard;
            rY && (rY.keysUpward = YY)
          }
          get keysDown() {
            const YY = this.inputs.attached.keyboard;
            return YY ? YY.keysDown : []
          }
          set keysDown(YY) {
            const rY = this.inputs.attached.keyboard;
            rY && (rY.keysDown = YY)
          }
          get keysDownward() {
            const YY = this.inputs.attached.keyboard;
            return YY ? YY.keysDownward : []
          }
          set keysDownward(YY) {
            const rY = this.inputs.attached.keyboard;
            rY && (rY.keysDownward = YY)
          }
          get keysLeft() {
            const YY = this.inputs.attached.keyboard;
            return YY ? YY.keysLeft : []
          }
          set keysLeft(YY) {
            const rY = this.inputs.attached.keyboard;
            rY && (rY.keysLeft = YY)
          }
          get keysRight() {
            const YY = this.inputs.attached.keyboard;
            return YY ? YY.keysRight : []
          }
          set keysRight(YY) {
            const rY = this.inputs.attached.keyboard;
            rY && (rY.keysRight = YY)
          }
          get keysRotateLeft() {
            const YY = this.inputs.attached.keyboard;
            return YY ? YY.keysRotateLeft : []
          }
          set keysRotateLeft(YY) {
            const rY = this.inputs.attached.keyboard;
            rY && (rY.keysRotateLeft = YY)
          }
          get keysRotateRight() {
            const YY = this.inputs.attached.keyboard;
            return YY ? YY.keysRotateRight : []
          }
          set keysRotateRight(YY) {
            const rY = this.inputs.attached.keyboard;
            rY && (rY.keysRotateRight = YY)
          }
          get keysRotateUp() {
            const YY = this.inputs.attached.keyboard;
            return YY ? YY.keysRotateUp : []
          }
          set keysRotateUp(YY) {
            const rY = this.inputs.attached.keyboard;
            rY && (rY.keysRotateUp = YY)
          }
          get keysRotateDown() {
            const YY = this.inputs.attached.keyboard;
            return YY ? YY.keysRotateDown : []
          }
          set keysRotateDown(YY) {
            const rY = this.inputs.attached.keyboard;
            rY && (rY.keysRotateDown = YY)
          }
          constructor(YY, rY, DY) {
            var AY;
            super(YY, rY, DY, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), AY = this, this.ellipsoid = (0, FY.j)(this, uY, new IY.r(.5, 1, .5)), this.ellipsoidOffset = ((0, FY.j)(this, sY), (0, FY.j)(this, iY, new IY.r(0, 0, 0))), this.checkCollisions = ((0, FY.j)(this, yY), (0, FY.j)(this, QY, !1)), this.applyGravity = ((0, FY.j)(this, oY), (0, FY.j)(this, WY, !1)), this.inputs = (0, FY.j)(this, EY), this._needMoveForGravity = !1, this._oldPosition = IY.r.Zero(), this._diffPosition = IY.r.Zero(), this._newPosition = IY.r.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(YY, rY) {
              let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              AY._newPosition.brY(rY), AY._newPosition.subtractToRef(AY._oldPosition, AY._diffPosition), AY._diffPosition.length() > eY.d.CollisionsEpsilon && (AY.position.addToRef(AY._diffPosition, AY._deferredPositionUpdate), AY._deferOnly ? AY._deferredUpdated = !0 : AY.position.brY(AY._deferredPositionUpdate), AY.Lu && DY && AY.Lu(DY))
            }, this.inputs = new TY(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(YY, rY) {
            rY = aY.i.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(rY)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new IY.r(0, 0, 0), this.cameraRotation = new IY.q(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(YY) {
            this._collisionMask = isNaN(YY) ? -1 : YY
          }
          _collideWithWorld(YY) {
            let rY;
            rY = this.parent ? IY.r.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, rY.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const DY = this.hT().collisionCoordinator;
            this._collider || (this._collider = DY.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let FY = YY;
            this.applyGravity && (FY = YY.add(this.hT().gravity)), DY.getNewPosition(this._oldPosition, FY, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = IY.r.Zero(), this._transformedDirection = IY.r.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(YY) {
            this._needMoveForGravity = YY
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.hT().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const IY = "function" === typeof Symbol && Symbol.metadata ? Object.create(vY[Symbol.metadata] ?? null) : void 0;
          rY = [(0, AY.J)()], DY = [(0, AY.J)()], OY = [(0, AY.M)()], gY = [(0, AY.M)()], (0, FY.i)(null, null, rY, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: YY => "ellipsoid" in YY,
              get: YY => YY.ellipsoid,
              set: (YY, rY) => {
                YY.ellipsoid = rY
              }
            },
            metadata: IY
          }, uY, sY), (0, FY.i)(null, null, DY, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: YY => "ellipsoidOffset" in YY,
              get: YY => YY.ellipsoidOffset,
              set: (YY, rY) => {
                YY.ellipsoidOffset = rY
              }
            },
            metadata: IY
          }, iY, yY), (0, FY.i)(null, null, OY, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: YY => "checkCollisions" in YY,
              get: YY => YY.checkCollisions,
              set: (YY, rY) => {
                YY.checkCollisions = rY
              }
            },
            metadata: IY
          }, QY, oY), (0, FY.i)(null, null, gY, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: YY => "applyGravity" in YY,
              get: YY => YY.applyGravity,
              set: (YY, rY) => {
                YY.applyGravity = rY
              }
            },
            metadata: IY
          }, WY, EY), IY && Object.defineProperty(YY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IY
          })
        })(), YY
      })(),
      cY = !1;
    cY || (cY = !0, (0, NY.i)("BABYLON.FreeCamera", BY))
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);
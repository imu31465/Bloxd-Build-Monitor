export const id = 281;
export const ids = [281];
export const modules = {
  41295: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => LU
    });
    var cU = zU(41113),
      yU = zU(41121),
      QU = zU(37819),
      AU = zU(41301),
      FU = zU(41323),
      oU = zU(41278),
      DU = zU(41205);
    let EU = (() => {
      var UU;
      let XU, zU, AU, FU, EU, YU, NU, IU, pU, aU, tU, gU = [],
        kU = [],
        GU = [],
        BU = [],
        ZU = [],
        RU = [],
        PU = [],
        WU = [],
        dU = [],
        LU = [],
        eU = [],
        CU = [],
        wU = [],
        qU = [],
        OU = [],
        SU = [],
        rU = [],
        uU = [],
        fU = [],
        iU = [],
        HU = [],
        MU = [];
      return UU = class {
        constructor() {
          this.keysUp = (0, cU.n)(this, gU, [38]), this.keysUpward = ((0, cU.n)(this, kU), (0, cU.n)(this, GU, [33])), this.keysDown = ((0, cU.n)(this, BU), (0, cU.n)(this, ZU, [40])), this.keysDownward = ((0, cU.n)(this, RU), (0, cU.n)(this, PU, [34])), this.keysLeft = ((0, cU.n)(this, WU), (0, cU.n)(this, dU, [37])), this.keysRight = ((0, cU.n)(this, LU), (0, cU.n)(this, eU, [39])), this.rotationSpeed = ((0, cU.n)(this, CU), (0, cU.n)(this, wU, .5)), this.keysRotateLeft = ((0, cU.n)(this, qU), (0, cU.n)(this, OU, [])), this.keysRotateRight = ((0, cU.n)(this, SU), (0, cU.n)(this, rU, [])), this.keysRotateUp = ((0, cU.n)(this, uU), (0, cU.n)(this, fU, [])), this.keysRotateDown = ((0, cU.n)(this, iU), (0, cU.n)(this, HU, [])), this._keys = ((0, cU.n)(this, MU), new Array)
        }
        attachControl(UU) {
          UU = DU.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.nS(), this._engine = this._scene.qp(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((XU => {
            const zU = XU.event;
            if (!zU.metaKey)
              if (XU.type === oU.c.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(zU.keyCode) || -1 !== this.keysDown.indexOf(zU.keyCode) || -1 !== this.keysLeft.indexOf(zU.keyCode) || -1 !== this.keysRight.indexOf(zU.keyCode) || -1 !== this.keysUpward.indexOf(zU.keyCode) || -1 !== this.keysDownward.indexOf(zU.keyCode) || -1 !== this.keysRotateLeft.indexOf(zU.keyCode) || -1 !== this.keysRotateRight.indexOf(zU.keyCode) || -1 !== this.keysRotateUp.indexOf(zU.keyCode) || -1 !== this.keysRotateDown.indexOf(zU.keyCode)) {
                  -1 === this._keys.indexOf(zU.keyCode) && this._keys.push(zU.keyCode), UU || zU.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(zU.keyCode) || -1 !== this.keysDown.indexOf(zU.keyCode) || -1 !== this.keysLeft.indexOf(zU.keyCode) || -1 !== this.keysRight.indexOf(zU.keyCode) || -1 !== this.keysUpward.indexOf(zU.keyCode) || -1 !== this.keysDownward.indexOf(zU.keyCode) || -1 !== this.keysRotateLeft.indexOf(zU.keyCode) || -1 !== this.keysRotateRight.indexOf(zU.keyCode) || -1 !== this.keysRotateUp.indexOf(zU.keyCode) || -1 !== this.keysRotateDown.indexOf(zU.keyCode)) {
              const XU = this._keys.indexOf(zU.keyCode);
              XU >= 0 && this._keys.splice(XU, 1), UU || zU.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const UU = this.camera,
              XU = UU.movement.input,
              zU = XU.getEntry("keyboard", "translate"),
              cU = XU.getEntry("keyboard", "rotate"),
              yU = cU?.sensitivity ?? 1,
              AU = UU._localDirection.sUU(0, 0, 0);
            for (let QU = 0; QU < this._keys.length; QU++) {
              const XU = this._keys[QU]; - 1 !== this.keysLeft.indexOf(XU) ? AU.x -= 1 : -1 !== this.keysUp.indexOf(XU) ? AU.z += 1 : -1 !== this.keysRight.indexOf(XU) ? AU.x += 1 : -1 !== this.keysDown.indexOf(XU) ? AU.z -= 1 : -1 !== this.keysUpward.indexOf(XU) ? AU.y += 1 : -1 !== this.keysDownward.indexOf(XU) ? AU.y -= 1 : -1 !== this.keysRotateLeft.indexOf(XU) ? cU && (UU.cameraRotation.y -= this._getLocalRotation() * yU) : -1 !== this.keysRotateRight.indexOf(XU) ? cU && (UU.cameraRotation.y += this._getLocalRotation() * yU) : -1 !== this.keysRotateUp.indexOf(XU) ? cU && (UU.cameraRotation.x -= this._getLocalRotation() * yU) : -1 !== this.keysRotateDown.indexOf(XU) && cU && (UU.cameraRotation.x += this._getLocalRotation() * yU)
            }
            if (zU && (0 !== AU.x || 0 !== AU.y || 0 !== AU.z)) {
              const XU = UU._computeLocalCameraSpeed() * (zU.sensitivity ?? 1);
              AU.normalize().scaleInPlace(XU), UU.nS().useRightHandedSystem && (AU.z *= -1), UU.getViewMatrix().invertToRef(UU._cameraTransformMatrix), QU.q.TransformNormalToRef(AU, UU._cameraTransformMatrix, UU._transformedDirection), UU.cameraDirection.addInPlace(UU._transformedDirection)
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
          const UU = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * UU
        }
      }, (() => {
        const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        XU = [(0, yU.I)()], zU = [(0, yU.I)()], AU = [(0, yU.I)()], FU = [(0, yU.I)()], EU = [(0, yU.I)()], YU = [(0, yU.I)()], NU = [(0, yU.I)()], IU = [(0, yU.I)()], pU = [(0, yU.I)()], aU = [(0, yU.I)()], tU = [(0, yU.I)()], (0, cU.j)(null, null, XU, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysUp" in UU,
            get: UU => UU.keysUp,
            set: (UU, XU) => {
              UU.keysUp = XU
            }
          },
          metadata: QU
        }, gU, kU), (0, cU.j)(null, null, zU, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysUpward" in UU,
            get: UU => UU.keysUpward,
            set: (UU, XU) => {
              UU.keysUpward = XU
            }
          },
          metadata: QU
        }, GU, BU), (0, cU.j)(null, null, AU, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysDown" in UU,
            get: UU => UU.keysDown,
            set: (UU, XU) => {
              UU.keysDown = XU
            }
          },
          metadata: QU
        }, ZU, RU), (0, cU.j)(null, null, FU, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysDownward" in UU,
            get: UU => UU.keysDownward,
            set: (UU, XU) => {
              UU.keysDownward = XU
            }
          },
          metadata: QU
        }, PU, WU), (0, cU.j)(null, null, EU, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysLeft" in UU,
            get: UU => UU.keysLeft,
            set: (UU, XU) => {
              UU.keysLeft = XU
            }
          },
          metadata: QU
        }, dU, LU), (0, cU.j)(null, null, YU, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysRight" in UU,
            get: UU => UU.keysRight,
            set: (UU, XU) => {
              UU.keysRight = XU
            }
          },
          metadata: QU
        }, eU, CU), (0, cU.j)(null, null, NU, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: UU => "rotationSpeed" in UU,
            get: UU => UU.rotationSpeed,
            set: (UU, XU) => {
              UU.rotationSpeed = XU
            }
          },
          metadata: QU
        }, wU, qU), (0, cU.j)(null, null, IU, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysRotateLeft" in UU,
            get: UU => UU.keysRotateLeft,
            set: (UU, XU) => {
              UU.keysRotateLeft = XU
            }
          },
          metadata: QU
        }, OU, SU), (0, cU.j)(null, null, pU, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysRotateRight" in UU,
            get: UU => UU.keysRotateRight,
            set: (UU, XU) => {
              UU.keysRotateRight = XU
            }
          },
          metadata: QU
        }, rU, uU), (0, cU.j)(null, null, aU, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysRotateUp" in UU,
            get: UU => UU.keysRotateUp,
            set: (UU, XU) => {
              UU.keysRotateUp = XU
            }
          },
          metadata: QU
        }, fU, iU), (0, cU.j)(null, null, tU, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysRotateDown" in UU,
            get: UU => UU.keysRotateDown,
            set: (UU, XU) => {
              UU.keysRotateDown = XU
            }
          },
          metadata: QU
        }, HU, MU), QU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: QU
        })
      })(), UU
    })();
    FU.d.FreeCameraKeyboardMoveInput = EU;
    var YU = zU(37846),
      NU = zU(41271);
    let IU = (() => {
      var UU;
      let XU, zU, QU = [],
        AU = [],
        FU = [],
        oU = [];
      return UU = class {
        _applyPointerRotation(UU, XU) {
          this._pointerConditions.button = this._currentActiveButton;
          const zU = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!zU || "rotate" !== zU.interaction) return;
          const cU = zU.iK ?? zU.sensitivity ?? 1 / this.angularSensibility,
            yU = zU.VK ?? zU.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += UU * cU, this.camera.cameraRotation.x += XU * yU
        }
        constructor() {
          let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = UU, this.buttons = (0, cU.n)(this, QU, [0, 1, 2]), this.angularSensibility = ((0, cU.n)(this, AU), (0, cU.n)(this, FU, 2e3)), this._pointerInput = (0, cU.n)(this, oU), this._previousPosition = null, this.onPointerMovedObservable = new YU.e, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(UU) {
          UU = DU.j.BackCompatCameraNoPreventDefault(arguments);
          const XU = this.camera.qp(),
            zU = XU.getInputElement();
          this._pointerInput || (this._pointerInput = cU => {
            const yU = cU.event,
              QU = "touch" === yU.pointerType;
            if (!this.touchEnabled && QU) return;
            if (cU.type !== NU.c.POINTERMOVE && -1 === this.buttons.indexOf(yU.button)) return;
            const AU = yU.target;
            if (cU.type === NU.c.POINTERDOWN) {
              if (QU && -1 !== this._activePointerId || !QU && -1 !== this._currentActiveButton) return;
              this._activePointerId = yU.pointerId;
              try {
                AU?.setPointerCapture(yU.pointerId)
              } catch (FU) {} - 1 === this._currentActiveButton && (this._currentActiveButton = yU.button), this._previousPosition = {
                x: yU.clientX,
                y: yU.clientY
              }, UU || (yU.preventDefault(), zU && zU.focus()), XU.isPointerLock && this._onMouseMove && this._onMouseMove(cU.event)
            } else if (cU.type === NU.c.POINTERUP) {
              if (QU && this._activePointerId !== yU.pointerId || !QU && this._currentActiveButton !== yU.button) return;
              try {
                AU?.releasePointerCapture(yU.pointerId)
              } catch (FU) {}
              this._currentActiveButton = -1, this._previousPosition = null, UU || yU.preventDefault(), this._activePointerId = -1
            } else if (cU.type === NU.c.POINTERMOVE && (this._activePointerId === yU.pointerId || !QU))
              if (XU.isPointerLock && this._onMouseMove) this._onMouseMove(cU.event);
              else if (this._previousPosition) {
              const XU = this.camera._calculateHandednessMultiplier(),
                zU = (yU.clientX - this._previousPosition.x) * XU,
                cU = (yU.clientY - this._previousPosition.y) * XU;
              this._allowCameraRotation && this._applyPointerRotation(zU, cU), this.onPointerMovedObservable.notifyObservers({
                offsetX: zU,
                offsetY: cU
              }), this._previousPosition = {
                x: yU.clientX,
                y: yU.clientY
              }, UU || yU.preventDefault()
            }
          }), this._onMouseMove = zU => {
            if (!XU.isPointerLock) return;
            const cU = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(zU.movementX * cU, zU.movementY * cU), this._previousPosition = null, UU || zU.preventDefault()
          }, this._observer = this.camera.nS()._inputManager._addCameraPointerObserver(this._pointerInput, NU.c.POINTERDOWN | NU.c.POINTERUP | NU.c.POINTERMOVE), zU && (this._contextMenuBind = UU => this.onContextMenu(UU), zU.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(UU) {
          UU.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.nS()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const UU = this.camera.qp().getInputElement();
              UU && UU.removeEventListener("contextmenu", this._contextMenuBind)
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
        const DU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        XU = [(0, yU.I)()], zU = [(0, yU.I)()], (0, cU.j)(null, null, XU, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: UU => "buttons" in UU,
            get: UU => UU.buttons,
            set: (UU, XU) => {
              UU.buttons = XU
            }
          },
          metadata: DU
        }, QU, AU), (0, cU.j)(null, null, zU, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: UU => "angularSensibility" in UU,
            get: UU => UU.angularSensibility,
            set: (UU, XU) => {
              UU.angularSensibility = XU
            }
          },
          metadata: DU
        }, FU, oU), DU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: DU
        })
      })(), UU
    })();
    FU.d.FreeCameraMouseInput = IU;
    var pU = zU(41283);
    let aU = (() => {
      var UU;
      let XU, zU, QU, AU = [],
        FU = [],
        oU = [],
        EU = [],
        IU = [],
        aU = [];
      return UU = class {
        constructor() {
          this.wheelPrecisionX = (0, cU.n)(this, AU, 3), this.wheelPrecisionY = ((0, cU.n)(this, FU), (0, cU.n)(this, oU, 3)), this.wheelPrecisionZ = ((0, cU.n)(this, EU), (0, cU.n)(this, IU, 3)), this.onChangedObservable = ((0, cU.n)(this, aU), new YU.e), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(UU) {
          UU = DU.j.BackCompatCameraNoPreventDefault(arguments), this._wheel = XU => {
            if (XU.type !== NU.c.POINTERWHEEL) return;
            const zU = XU.event,
              cU = zU.deltaMode === pU.b.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * cU * zU.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * cU * zU.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * cU * zU.deltaZ / this._normalize, zU.preventDefault && (UU || zU.preventDefault())
          }, this._observer = this.camera.nS()._inputManager._addCameraPointerObserver(this._wheel, NU.c.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.nS()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const DU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        XU = [(0, yU.I)()], zU = [(0, yU.I)()], QU = [(0, yU.I)()], (0, cU.j)(null, null, XU, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelPrecisionX" in UU,
            get: UU => UU.wheelPrecisionX,
            set: (UU, XU) => {
              UU.wheelPrecisionX = XU
            }
          },
          metadata: DU
        }, AU, FU), (0, cU.j)(null, null, zU, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelPrecisionY" in UU,
            get: UU => UU.wheelPrecisionY,
            set: (UU, XU) => {
              UU.wheelPrecisionY = XU
            }
          },
          metadata: DU
        }, oU, EU), (0, cU.j)(null, null, QU, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelPrecisionZ" in UU,
            get: UU => UU.wheelPrecisionZ,
            set: (UU, XU) => {
              UU.wheelPrecisionZ = XU
            }
          },
          metadata: DU
        }, IU, aU), DU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: DU
        })
      })(), UU
    })();
    var tU;
    ! function(UU) {
      UU[UU.MoveRelative = 0] = "MoveRelative", UU[UU.RotateRelative = 1] = "RotateRelative", UU[UU.MoveScene = 2] = "MoveScene"
    }(tU || (tU = {}));
    let gU = (() => {
      var UU;
      let XU, zU, AU, FU, oU, DU, EU, YU, NU, IU = aU,
        pU = [];
      return UU = class extends IU {
        constructor() {
          super(...arguments), this.camera = (0, cU.n)(this, pU), this._moveRelative = QU.q.Zero(), this._rotateRelative = QU.q.Zero(), this._moveScene = QU.q.Zero(), this._wheelXAction = tU.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = tU.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(UU) {
          null === UU && this._wheelXAction !== tU.MoveRelative || (this._wheelXAction = tU.MoveRelative, this._wheelXActionCoordinate = UU)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== tU.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(UU) {
          null === UU && this._wheelYAction !== tU.MoveRelative || (this._wheelYAction = tU.MoveRelative, this._wheelYActionCoordinate = UU)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== tU.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(UU) {
          null === UU && this._wheelZAction !== tU.MoveRelative || (this._wheelZAction = tU.MoveRelative, this._wheelZActionCoordinate = UU)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== tU.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(UU) {
          null === UU && this._wheelXAction !== tU.RotateRelative || (this._wheelXAction = tU.RotateRelative, this._wheelXActionCoordinate = UU)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== tU.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(UU) {
          null === UU && this._wheelYAction !== tU.RotateRelative || (this._wheelYAction = tU.RotateRelative, this._wheelYActionCoordinate = UU)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== tU.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(UU) {
          null === UU && this._wheelZAction !== tU.RotateRelative || (this._wheelZAction = tU.RotateRelative, this._wheelZActionCoordinate = UU)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== tU.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(UU) {
          null === UU && this._wheelXAction !== tU.MoveScene || (this._wheelXAction = tU.MoveScene, this._wheelXActionCoordinate = UU)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== tU.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(UU) {
          null === UU && this._wheelYAction !== tU.MoveScene || (this._wheelYAction = tU.MoveScene, this._wheelYActionCoordinate = UU)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== tU.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(UU) {
          null === UU && this._wheelZAction !== tU.MoveScene || (this._wheelZAction = tU.MoveScene, this._wheelZActionCoordinate = UU)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== tU.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.IUU(0), this._rotateRelative.IUU(0), this._moveScene.IUU(0), this._updateCamera(), this.camera.nS().useRightHandedSystem && (this._moveRelative.z *= -1);
          const UU = QU.e.Zero();
          this.camera.getViewMatrix().invertToRef(UU);
          const XU = QU.q.Zero();
          QU.q.TransformNormalToRef(this._moveRelative, UU, XU), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(XU), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(UU, XU, zU) {
          if (0 === UU) return;
          if (null === XU || null === zU) return;
          let cU = null;
          switch (XU) {
            case tU.MoveRelative:
              cU = this._moveRelative;
              break;
            case tU.RotateRelative:
              cU = this._rotateRelative;
              break;
            case tU.MoveScene:
              cU = this._moveScene
          }
          switch (zU) {
            case 0:
              cU.set(UU, 0, 0);
              break;
            case 1:
              cU.set(0, UU, 0);
              break;
            case 2:
              cU.set(0, 0, UU)
          }
        }
      }, (() => {
        const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(IU[Symbol.metadata] ?? null) : void 0;
        XU = [(0, yU.I)()], zU = [(0, yU.I)()], AU = [(0, yU.I)()], FU = [(0, yU.I)()], oU = [(0, yU.I)()], DU = [(0, yU.I)()], EU = [(0, yU.I)()], YU = [(0, yU.I)()], NU = [(0, yU.I)()], (0, cU.j)(UU, null, XU, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelXMoveRelative" in UU,
            set: (UU, XU) => {
              UU.wheelXMoveRelative = XU
            }
          },
          metadata: QU
        }, null, pU), (0, cU.j)(UU, null, zU, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelYMoveRelative" in UU,
            set: (UU, XU) => {
              UU.wheelYMoveRelative = XU
            }
          },
          metadata: QU
        }, null, pU), (0, cU.j)(UU, null, AU, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelZMoveRelative" in UU,
            set: (UU, XU) => {
              UU.wheelZMoveRelative = XU
            }
          },
          metadata: QU
        }, null, pU), (0, cU.j)(UU, null, FU, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelXRotateRelative" in UU,
            set: (UU, XU) => {
              UU.wheelXRotateRelative = XU
            }
          },
          metadata: QU
        }, null, pU), (0, cU.j)(UU, null, oU, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelYRotateRelative" in UU,
            set: (UU, XU) => {
              UU.wheelYRotateRelative = XU
            }
          },
          metadata: QU
        }, null, pU), (0, cU.j)(UU, null, DU, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelZRotateRelative" in UU,
            set: (UU, XU) => {
              UU.wheelZRotateRelative = XU
            }
          },
          metadata: QU
        }, null, pU), (0, cU.j)(UU, null, EU, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelXMoveScene" in UU,
            set: (UU, XU) => {
              UU.wheelXMoveScene = XU
            }
          },
          metadata: QU
        }, null, pU), (0, cU.j)(UU, null, YU, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelYMoveScene" in UU,
            set: (UU, XU) => {
              UU.wheelYMoveScene = XU
            }
          },
          metadata: QU
        }, null, pU), (0, cU.j)(UU, null, NU, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelZMoveScene" in UU,
            set: (UU, XU) => {
              UU.wheelZMoveScene = XU
            }
          },
          metadata: QU
        }, null, pU), QU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: QU
        })
      })(), UU
    })();
    FU.d.FreeCameraMouseWheelInput = gU;
    let kU = (() => {
      var UU;
      let XU, zU, AU = [],
        FU = [],
        oU = [],
        EU = [];
      return UU = class {
        constructor() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = UU, this.touchAngularSensibility = (0, cU.n)(this, AU, 2e5), this.touchMoveSensibility = ((0, cU.n)(this, FU), (0, cU.n)(this, oU, 250)), this.singleFingerRotate = ((0, cU.n)(this, EU), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = DU.j.IsSafari()
        }
        attachControl(UU) {
          UU = DU.j.BackCompatCameraNoPreventDefault(arguments);
          let XU = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = zU => {
              const cU = zU.event,
                yU = "mouse" === cU.pointerType || this._isSafari && "undefined" === typeof cU.pointerType;
              if (this.allowMouse || !yU)
                if (zU.type === NU.c.POINTERDOWN) {
                  if (UU || cU.preventDefault(), this._pointerPressed.push(cU.pointerId), 1 !== this._pointerPressed.length) return;
                  XU = {
                    x: cU.clientX,
                    y: cU.clientY
                  }
                } else if (zU.type === NU.c.POINTERUP) {
                UU || cU.preventDefault();
                const zU = this._pointerPressed.indexOf(cU.pointerId);
                if (-1 === zU) return;
                if (this._pointerPressed.splice(zU, 1), 0 != zU) return;
                XU = null, this._offsetX = null, this._offsetY = null
              } else if (zU.type === NU.c.POINTERMOVE) {
                if (UU || cU.preventDefault(), !XU) return;
                if (0 != this._pointerPressed.indexOf(cU.pointerId)) return;
                this._offsetX = cU.clientX - XU.x, this._offsetY = -(cU.clientY - XU.y)
              }
            }), this._observer = this.camera.nS()._inputManager._addCameraPointerObserver(this._pointerInput, NU.c.POINTERDOWN | NU.c.POINTERUP | NU.c.POINTERMOVE), this._onLostFocus) {
            const UU = this.camera.qp().getInputElement();
            UU && UU.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.nS()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const UU = this.camera.qp().getInputElement();
              UU && UU.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const UU = this.camera,
            XU = UU.movement.input,
            zU = XU.getEntry("touch", "rotate"),
            cU = XU.getEntry("touch", "translate"),
            yU = UU._calculateHandednessMultiplier(),
            AU = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (zU) {
            const XU = zU.sensitivity ?? 1 / this.touchAngularSensibility;
            UU.cameraRotation.y = this._offsetX * yU * XU, AU && (UU.cameraRotation.x = -this._offsetY * yU * XU)
          }
          if (!AU && cU) {
            const XU = UU._computeLocalCameraSpeed(),
              zU = cU.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              yU = QU.l.Sp[0];
            yU.sUU(0, 0, XU * this._offsetY * zU), QU.e.RotationYawPitchRollToRef(UU.rotation.y, UU.rotation.x, 0, UU._cameraRotationMatrix), QU.q.TransformCoordinatesToRef(yU, UU._cameraRotationMatrix, yU), UU.cameraDirection.addInPlace(yU)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        XU = [(0, yU.I)()], zU = [(0, yU.I)()], (0, cU.j)(null, null, XU, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: UU => "touchAngularSensibility" in UU,
            get: UU => UU.touchAngularSensibility,
            set: (UU, XU) => {
              UU.touchAngularSensibility = XU
            }
          },
          metadata: QU
        }, AU, FU), (0, cU.j)(null, null, zU, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: UU => "touchMoveSensibility" in UU,
            get: UU => UU.touchMoveSensibility,
            set: (UU, XU) => {
              UU.touchMoveSensibility = XU
            }
          },
          metadata: QU
        }, oU, EU), QU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: QU
        })
      })(), UU
    })();
    FU.d.FreeCameraTouchInput = kU;
    var GU, BU, ZU, RU = zU(40989);
    class PU extends FU.h {
      constructor(UU) {
        super(UU), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new EU), this
      }
      addMouse() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new IU(UU), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new gU, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new kU), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(GU = PU.prototype).addDeviceOrientation ?? (GU.addDeviceOrientation = (0, RU.k)("FreeCameraInputsManager", "addDeviceOrientation")), (BU = PU.prototype).addVirtualJoystick ?? (BU.addVirtualJoystick = (0, RU.k)("FreeCameraInputsManager", "addVirtualJoystick")), (ZU = PU.prototype).addGamepad ?? (ZU.addGamepad = (0, RU.k)("FreeCameraInputsManager", "addGamepad"));
    var WU = zU(41003),
      dU = zU(37863);
    let LU = (() => {
        var UU;
        let XU, zU, FU, oU, EU = AU.i,
          YU = [],
          NU = [],
          IU = [],
          pU = [],
          aU = [],
          tU = [],
          gU = [],
          kU = [];
        return UU = class extends EU {
          get angularSensibility() {
            const UU = this.inputs.attached.mouse;
            return UU ? UU.angularSensibility : 0
          }
          set angularSensibility(UU) {
            const XU = this.inputs.attached.mouse;
            XU && (XU.angularSensibility = UU)
          }
          get keysUp() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysUp : []
          }
          set keysUp(UU) {
            const XU = this.inputs.attached.keyboard;
            XU && (XU.keysUp = UU)
          }
          get keysUpward() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysUpward : []
          }
          set keysUpward(UU) {
            const XU = this.inputs.attached.keyboard;
            XU && (XU.keysUpward = UU)
          }
          get keysDown() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysDown : []
          }
          set keysDown(UU) {
            const XU = this.inputs.attached.keyboard;
            XU && (XU.keysDown = UU)
          }
          get keysDownward() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysDownward : []
          }
          set keysDownward(UU) {
            const XU = this.inputs.attached.keyboard;
            XU && (XU.keysDownward = UU)
          }
          get keysLeft() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysLeft : []
          }
          set keysLeft(UU) {
            const XU = this.inputs.attached.keyboard;
            XU && (XU.keysLeft = UU)
          }
          get keysRight() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysRight : []
          }
          set keysRight(UU) {
            const XU = this.inputs.attached.keyboard;
            XU && (XU.keysRight = UU)
          }
          get keysRotateLeft() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysRotateLeft : []
          }
          set keysRotateLeft(UU) {
            const XU = this.inputs.attached.keyboard;
            XU && (XU.keysRotateLeft = UU)
          }
          get keysRotateRight() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysRotateRight : []
          }
          set keysRotateRight(UU) {
            const XU = this.inputs.attached.keyboard;
            XU && (XU.keysRotateRight = UU)
          }
          get keysRotateUp() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysRotateUp : []
          }
          set keysRotateUp(UU) {
            const XU = this.inputs.attached.keyboard;
            XU && (XU.keysRotateUp = UU)
          }
          get keysRotateDown() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysRotateDown : []
          }
          set keysRotateDown(UU) {
            const XU = this.inputs.attached.keyboard;
            XU && (XU.keysRotateDown = UU)
          }
          constructor(UU, XU, zU) {
            var yU;
            super(UU, XU, zU, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), yU = this, this.ellipsoid = (0, cU.n)(this, YU, new QU.q(.5, 1, .5)), this.ellipsoidOffset = ((0, cU.n)(this, NU), (0, cU.n)(this, IU, new QU.q(0, 0, 0))), this.checkCollisions = ((0, cU.n)(this, pU), (0, cU.n)(this, aU, !1)), this.applyGravity = ((0, cU.n)(this, tU), (0, cU.n)(this, gU, !1)), this.inputs = (0, cU.n)(this, kU), this._needMoveForGravity = !1, this._oldPosition = QU.q.Zero(), this._diffPosition = QU.q.Zero(), this._newPosition = QU.q.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(UU, XU) {
              let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              yU._newPosition.YL(XU), yU._newPosition.subtractToRef(yU._oldPosition, yU._diffPosition), yU._diffPosition.length() > WU.c.CollisionsEpsilon && (yU.position.addToRef(yU._diffPosition, yU._deferredPositionUpdate), yU._deferOnly ? yU._deferredUpdated = !0 : yU.position.YL(yU._deferredPositionUpdate), yU.wN && zU && yU.wN(zU))
            }, this.inputs = new PU(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(UU, XU) {
            XU = DU.j.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(XU)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new QU.q(0, 0, 0), this.cameraRotation = new QU.m(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(UU) {
            this._collisionMask = isNaN(UU) ? -1 : UU
          }
          _collideWithWorld(UU) {
            let XU;
            XU = this.parent ? QU.q.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, XU.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const zU = this.nS().collisionCoordinator;
            this._collider || (this._collider = zU.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let cU = UU;
            this.applyGravity && (cU = UU.add(this.nS().gravity)), zU.getNewPosition(this._oldPosition, cU, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = QU.q.Zero(), this._transformedDirection = QU.q.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(UU) {
            this._needMoveForGravity = UU
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.nS().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(EU[Symbol.metadata] ?? null) : void 0;
          XU = [(0, yU.F)()], zU = [(0, yU.F)()], FU = [(0, yU.I)()], oU = [(0, yU.I)()], (0, cU.j)(null, null, XU, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: UU => "ellipsoid" in UU,
              get: UU => UU.ellipsoid,
              set: (UU, XU) => {
                UU.ellipsoid = XU
              }
            },
            metadata: QU
          }, YU, NU), (0, cU.j)(null, null, zU, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: UU => "ellipsoidOffset" in UU,
              get: UU => UU.ellipsoidOffset,
              set: (UU, XU) => {
                UU.ellipsoidOffset = XU
              }
            },
            metadata: QU
          }, IU, pU), (0, cU.j)(null, null, FU, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: UU => "checkCollisions" in UU,
              get: UU => UU.checkCollisions,
              set: (UU, XU) => {
                UU.checkCollisions = XU
              }
            },
            metadata: QU
          }, aU, tU), (0, cU.j)(null, null, oU, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: UU => "applyGravity" in UU,
              get: UU => UU.applyGravity,
              set: (UU, XU) => {
                UU.applyGravity = XU
              }
            },
            metadata: QU
          }, gU, kU), QU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QU
          })
        })(), UU
      })(),
      eU = !1;
    eU || (eU = !0, (0, dU.h)("BABYLON.FreeCamera", LU))
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
export const id = 248;
export const ids = [248];
export const modules = {
  39590: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => bU
    });
    var tU = gU(39377),
      pU = gU(39380),
      EU = gU(36600),
      PU = gU(39597),
      TU = gU(39629),
      qU = gU(39562),
      KU = gU(39473);
    let cU = (() => {
      var UU;
      let RU, gU, PU, TU, cU, GU, jU, uU, CU, hU, QU, eU = [],
        WU = [],
        fU = [],
        xU = [],
        mU = [],
        IU = [],
        JU = [],
        wU = [],
        nU = [],
        bU = [],
        oU = [],
        ZU = [],
        aU = [],
        YU = [],
        BU = [],
        VU = [],
        rU = [],
        XU = [],
        vU = [],
        dU = [],
        HU = [],
        SU = [];
      return UU = class {
        constructor() {
          this.keysUp = (0, tU.j)(this, eU, [38]), this.keysUpward = ((0, tU.j)(this, WU), (0, tU.j)(this, fU, [33])), this.keysDown = ((0, tU.j)(this, xU), (0, tU.j)(this, mU, [40])), this.keysDownward = ((0, tU.j)(this, IU), (0, tU.j)(this, JU, [34])), this.keysLeft = ((0, tU.j)(this, wU), (0, tU.j)(this, nU, [37])), this.keysRight = ((0, tU.j)(this, bU), (0, tU.j)(this, oU, [39])), this.rotationSpeed = ((0, tU.j)(this, ZU), (0, tU.j)(this, aU, .5)), this.keysRotateLeft = ((0, tU.j)(this, YU), (0, tU.j)(this, BU, [])), this.keysRotateRight = ((0, tU.j)(this, VU), (0, tU.j)(this, rU, [])), this.keysRotateUp = ((0, tU.j)(this, XU), (0, tU.j)(this, vU, [])), this.keysRotateDown = ((0, tU.j)(this, dU), (0, tU.j)(this, HU, [])), this._keys = ((0, tU.j)(this, SU), new Array)
        }
        attachControl(UU) {
          UU = KU.g.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.aZ(), this._engine = this._scene.WC(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((RU => {
            const gU = RU.event;
            if (!gU.metaKey)
              if (RU.type === qU.b.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(gU.keyCode) || -1 !== this.keysDown.indexOf(gU.keyCode) || -1 !== this.keysLeft.indexOf(gU.keyCode) || -1 !== this.keysRight.indexOf(gU.keyCode) || -1 !== this.keysUpward.indexOf(gU.keyCode) || -1 !== this.keysDownward.indexOf(gU.keyCode) || -1 !== this.keysRotateLeft.indexOf(gU.keyCode) || -1 !== this.keysRotateRight.indexOf(gU.keyCode) || -1 !== this.keysRotateUp.indexOf(gU.keyCode) || -1 !== this.keysRotateDown.indexOf(gU.keyCode)) {
                  -1 === this._keys.indexOf(gU.keyCode) && this._keys.push(gU.keyCode), UU || gU.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(gU.keyCode) || -1 !== this.keysDown.indexOf(gU.keyCode) || -1 !== this.keysLeft.indexOf(gU.keyCode) || -1 !== this.keysRight.indexOf(gU.keyCode) || -1 !== this.keysUpward.indexOf(gU.keyCode) || -1 !== this.keysDownward.indexOf(gU.keyCode) || -1 !== this.keysRotateLeft.indexOf(gU.keyCode) || -1 !== this.keysRotateRight.indexOf(gU.keyCode) || -1 !== this.keysRotateUp.indexOf(gU.keyCode) || -1 !== this.keysRotateDown.indexOf(gU.keyCode)) {
              const RU = this._keys.indexOf(gU.keyCode);
              RU >= 0 && this._keys.splice(RU, 1), UU || gU.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const UU = this.camera,
              RU = UU.movement.input,
              gU = RU.getEntry("keyboard", "translate"),
              tU = RU.getEntry("keyboard", "rotate"),
              pU = tU?.sensitivity ?? 1,
              PU = UU._localDirection.b_(0, 0, 0);
            for (let EU = 0; EU < this._keys.length; EU++) {
              const RU = this._keys[EU]; - 1 !== this.keysLeft.indexOf(RU) ? PU.x -= 1 : -1 !== this.keysUp.indexOf(RU) ? PU.z += 1 : -1 !== this.keysRight.indexOf(RU) ? PU.x += 1 : -1 !== this.keysDown.indexOf(RU) ? PU.z -= 1 : -1 !== this.keysUpward.indexOf(RU) ? PU.y += 1 : -1 !== this.keysDownward.indexOf(RU) ? PU.y -= 1 : -1 !== this.keysRotateLeft.indexOf(RU) ? tU && (UU.cameraRotation.y -= this._getLocalRotation() * pU) : -1 !== this.keysRotateRight.indexOf(RU) ? tU && (UU.cameraRotation.y += this._getLocalRotation() * pU) : -1 !== this.keysRotateUp.indexOf(RU) ? tU && (UU.cameraRotation.x -= this._getLocalRotation() * pU) : -1 !== this.keysRotateDown.indexOf(RU) && tU && (UU.cameraRotation.x += this._getLocalRotation() * pU)
            }
            if (gU && (0 !== PU.x || 0 !== PU.y || 0 !== PU.z)) {
              const RU = UU._computeLocalCameraSpeed() * (gU.sensitivity ?? 1);
              PU.normalize().scaleInPlace(RU), UU.aZ().useRightHandedSystem && (PU.z *= -1), UU.getViewMatrix().invertToRef(UU._cameraTransformMatrix), EU.n.TransformNormalToRef(PU, UU._cameraTransformMatrix, UU._transformedDirection), UU.cameraDirection.addInPlace(UU._transformedDirection)
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
        const EU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RU = [(0, pU.K)()], gU = [(0, pU.K)()], PU = [(0, pU.K)()], TU = [(0, pU.K)()], cU = [(0, pU.K)()], GU = [(0, pU.K)()], jU = [(0, pU.K)()], uU = [(0, pU.K)()], CU = [(0, pU.K)()], hU = [(0, pU.K)()], QU = [(0, pU.K)()], (0, tU.i)(null, null, RU, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysUp" in UU,
            get: UU => UU.keysUp,
            set: (UU, RU) => {
              UU.keysUp = RU
            }
          },
          metadata: EU
        }, eU, WU), (0, tU.i)(null, null, gU, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysUpward" in UU,
            get: UU => UU.keysUpward,
            set: (UU, RU) => {
              UU.keysUpward = RU
            }
          },
          metadata: EU
        }, fU, xU), (0, tU.i)(null, null, PU, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysDown" in UU,
            get: UU => UU.keysDown,
            set: (UU, RU) => {
              UU.keysDown = RU
            }
          },
          metadata: EU
        }, mU, IU), (0, tU.i)(null, null, TU, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysDownward" in UU,
            get: UU => UU.keysDownward,
            set: (UU, RU) => {
              UU.keysDownward = RU
            }
          },
          metadata: EU
        }, JU, wU), (0, tU.i)(null, null, cU, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysLeft" in UU,
            get: UU => UU.keysLeft,
            set: (UU, RU) => {
              UU.keysLeft = RU
            }
          },
          metadata: EU
        }, nU, bU), (0, tU.i)(null, null, GU, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysRight" in UU,
            get: UU => UU.keysRight,
            set: (UU, RU) => {
              UU.keysRight = RU
            }
          },
          metadata: EU
        }, oU, ZU), (0, tU.i)(null, null, jU, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: UU => "rotationSpeed" in UU,
            get: UU => UU.rotationSpeed,
            set: (UU, RU) => {
              UU.rotationSpeed = RU
            }
          },
          metadata: EU
        }, aU, YU), (0, tU.i)(null, null, uU, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysRotateLeft" in UU,
            get: UU => UU.keysRotateLeft,
            set: (UU, RU) => {
              UU.keysRotateLeft = RU
            }
          },
          metadata: EU
        }, BU, VU), (0, tU.i)(null, null, CU, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysRotateRight" in UU,
            get: UU => UU.keysRotateRight,
            set: (UU, RU) => {
              UU.keysRotateRight = RU
            }
          },
          metadata: EU
        }, rU, XU), (0, tU.i)(null, null, hU, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysRotateUp" in UU,
            get: UU => UU.keysRotateUp,
            set: (UU, RU) => {
              UU.keysRotateUp = RU
            }
          },
          metadata: EU
        }, vU, dU), (0, tU.i)(null, null, QU, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: UU => "keysRotateDown" in UU,
            get: UU => UU.keysRotateDown,
            set: (UU, RU) => {
              UU.keysRotateDown = RU
            }
          },
          metadata: EU
        }, HU, SU), EU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: EU
        })
      })(), UU
    })();
    TU.d.FreeCameraKeyboardMoveInput = cU;
    var GU = gU(36624),
      jU = gU(39554);
    let uU = (() => {
      var UU;
      let RU, gU, EU = [],
        PU = [],
        TU = [],
        qU = [];
      return UU = class {
        _applyPointerRotation(UU, RU) {
          this._pointerConditions.button = this._currentActiveButton;
          const gU = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!gU || "rotate" !== gU.interaction) return;
          const tU = gU.Ay ?? gU.sensitivity ?? 1 / this.angularSensibility,
            pU = gU.Rk ?? gU.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += UU * tU, this.camera.cameraRotation.x += RU * pU
        }
        constructor() {
          let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = UU, this.buttons = (0, tU.j)(this, EU, [0, 1, 2]), this.angularSensibility = ((0, tU.j)(this, PU), (0, tU.j)(this, TU, 2e3)), this._pointerInput = (0, tU.j)(this, qU), this._previousPosition = null, this.onPointerMovedObservable = new GU.b, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(UU) {
          UU = KU.g.BackCompatCameraNoPreventDefault(arguments);
          const RU = this.camera.WC(),
            gU = RU.getInputElement();
          this._pointerInput || (this._pointerInput = tU => {
            const pU = tU.event,
              EU = "touch" === pU.pointerType;
            if (!this.touchEnabled && EU) return;
            if (tU.type !== jU.e.POINTERMOVE && -1 === this.buttons.indexOf(pU.button)) return;
            const PU = pU.target;
            if (tU.type === jU.e.POINTERDOWN) {
              if (EU && -1 !== this._activePointerId || !EU && -1 !== this._currentActiveButton) return;
              this._activePointerId = pU.pointerId;
              try {
                PU?.setPointerCapture(pU.pointerId)
              } catch (TU) {} - 1 === this._currentActiveButton && (this._currentActiveButton = pU.button), this._previousPosition = {
                x: pU.clientX,
                y: pU.clientY
              }, UU || (pU.preventDefault(), gU && gU.focus()), RU.isPointerLock && this._onMouseMove && this._onMouseMove(tU.event)
            } else if (tU.type === jU.e.POINTERUP) {
              if (EU && this._activePointerId !== pU.pointerId || !EU && this._currentActiveButton !== pU.button) return;
              try {
                PU?.releasePointerCapture(pU.pointerId)
              } catch (TU) {}
              this._currentActiveButton = -1, this._previousPosition = null, UU || pU.preventDefault(), this._activePointerId = -1
            } else if (tU.type === jU.e.POINTERMOVE && (this._activePointerId === pU.pointerId || !EU))
              if (RU.isPointerLock && this._onMouseMove) this._onMouseMove(tU.event);
              else if (this._previousPosition) {
              const RU = this.camera._calculateHandednessMultiplier(),
                gU = (pU.clientX - this._previousPosition.x) * RU,
                tU = (pU.clientY - this._previousPosition.y) * RU;
              this._allowCameraRotation && this._applyPointerRotation(gU, tU), this.onPointerMovedObservable.notifyObservers({
                offsetX: gU,
                offsetY: tU
              }), this._previousPosition = {
                x: pU.clientX,
                y: pU.clientY
              }, UU || pU.preventDefault()
            }
          }), this._onMouseMove = gU => {
            if (!RU.isPointerLock) return;
            const tU = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(gU.movementX * tU, gU.movementY * tU), this._previousPosition = null, UU || gU.preventDefault()
          }, this._observer = this.camera.aZ()._inputManager._addCameraPointerObserver(this._pointerInput, jU.e.POINTERDOWN | jU.e.POINTERUP | jU.e.POINTERMOVE), gU && (this._contextMenuBind = UU => this.onContextMenu(UU), gU.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(UU) {
          UU.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.aZ()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const UU = this.camera.WC().getInputElement();
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
        const KU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RU = [(0, pU.K)()], gU = [(0, pU.K)()], (0, tU.i)(null, null, RU, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: UU => "buttons" in UU,
            get: UU => UU.buttons,
            set: (UU, RU) => {
              UU.buttons = RU
            }
          },
          metadata: KU
        }, EU, PU), (0, tU.i)(null, null, gU, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: UU => "angularSensibility" in UU,
            get: UU => UU.angularSensibility,
            set: (UU, RU) => {
              UU.angularSensibility = RU
            }
          },
          metadata: KU
        }, TU, qU), KU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: KU
        })
      })(), UU
    })();
    TU.d.FreeCameraMouseInput = uU;
    var CU = gU(39571);
    let hU = (() => {
      var UU;
      let RU, gU, EU, PU = [],
        TU = [],
        qU = [],
        cU = [],
        uU = [],
        hU = [];
      return UU = class {
        constructor() {
          this.wheelPrecisionX = (0, tU.j)(this, PU, 3), this.wheelPrecisionY = ((0, tU.j)(this, TU), (0, tU.j)(this, qU, 3)), this.wheelPrecisionZ = ((0, tU.j)(this, cU), (0, tU.j)(this, uU, 3)), this.onChangedObservable = ((0, tU.j)(this, hU), new GU.b), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(UU) {
          UU = KU.g.BackCompatCameraNoPreventDefault(arguments), this._wheel = RU => {
            if (RU.type !== jU.e.POINTERWHEEL) return;
            const gU = RU.event,
              tU = gU.deltaMode === CU.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * tU * gU.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * tU * gU.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * tU * gU.deltaZ / this._normalize, gU.preventDefault && (UU || gU.preventDefault())
          }, this._observer = this.camera.aZ()._inputManager._addCameraPointerObserver(this._wheel, jU.e.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.aZ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const KU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RU = [(0, pU.K)()], gU = [(0, pU.K)()], EU = [(0, pU.K)()], (0, tU.i)(null, null, RU, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelPrecisionX" in UU,
            get: UU => UU.wheelPrecisionX,
            set: (UU, RU) => {
              UU.wheelPrecisionX = RU
            }
          },
          metadata: KU
        }, PU, TU), (0, tU.i)(null, null, gU, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelPrecisionY" in UU,
            get: UU => UU.wheelPrecisionY,
            set: (UU, RU) => {
              UU.wheelPrecisionY = RU
            }
          },
          metadata: KU
        }, qU, cU), (0, tU.i)(null, null, EU, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelPrecisionZ" in UU,
            get: UU => UU.wheelPrecisionZ,
            set: (UU, RU) => {
              UU.wheelPrecisionZ = RU
            }
          },
          metadata: KU
        }, uU, hU), KU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: KU
        })
      })(), UU
    })();
    var QU;
    ! function(UU) {
      UU[UU.MoveRelative = 0] = "MoveRelative", UU[UU.RotateRelative = 1] = "RotateRelative", UU[UU.MoveScene = 2] = "MoveScene"
    }(QU || (QU = {}));
    let eU = (() => {
      var UU;
      let RU, gU, PU, TU, qU, KU, cU, GU, jU, uU = hU,
        CU = [];
      return UU = class extends uU {
        constructor() {
          super(...arguments), this.camera = (0, tU.j)(this, CU), this._moveRelative = EU.n.Zero(), this._rotateRelative = EU.n.Zero(), this._moveScene = EU.n.Zero(), this._wheelXAction = QU.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = QU.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(UU) {
          null === UU && this._wheelXAction !== QU.MoveRelative || (this._wheelXAction = QU.MoveRelative, this._wheelXActionCoordinate = UU)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== QU.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(UU) {
          null === UU && this._wheelYAction !== QU.MoveRelative || (this._wheelYAction = QU.MoveRelative, this._wheelYActionCoordinate = UU)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== QU.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(UU) {
          null === UU && this._wheelZAction !== QU.MoveRelative || (this._wheelZAction = QU.MoveRelative, this._wheelZActionCoordinate = UU)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== QU.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(UU) {
          null === UU && this._wheelXAction !== QU.RotateRelative || (this._wheelXAction = QU.RotateRelative, this._wheelXActionCoordinate = UU)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== QU.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(UU) {
          null === UU && this._wheelYAction !== QU.RotateRelative || (this._wheelYAction = QU.RotateRelative, this._wheelYActionCoordinate = UU)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== QU.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(UU) {
          null === UU && this._wheelZAction !== QU.RotateRelative || (this._wheelZAction = QU.RotateRelative, this._wheelZActionCoordinate = UU)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== QU.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(UU) {
          null === UU && this._wheelXAction !== QU.MoveScene || (this._wheelXAction = QU.MoveScene, this._wheelXActionCoordinate = UU)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== QU.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(UU) {
          null === UU && this._wheelYAction !== QU.MoveScene || (this._wheelYAction = QU.MoveScene, this._wheelYActionCoordinate = UU)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== QU.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(UU) {
          null === UU && this._wheelZAction !== QU.MoveScene || (this._wheelZAction = QU.MoveScene, this._wheelZActionCoordinate = UU)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== QU.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.Y5(0), this._rotateRelative.Y5(0), this._moveScene.Y5(0), this._updateCamera(), this.camera.aZ().useRightHandedSystem && (this._moveRelative.z *= -1);
          const UU = EU.c.Zero();
          this.camera.getViewMatrix().invertToRef(UU);
          const RU = EU.n.Zero();
          EU.n.TransformNormalToRef(this._moveRelative, UU, RU), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(RU), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(UU, RU, gU) {
          if (0 === UU) return;
          if (null === RU || null === gU) return;
          let tU = null;
          switch (RU) {
            case QU.MoveRelative:
              tU = this._moveRelative;
              break;
            case QU.RotateRelative:
              tU = this._rotateRelative;
              break;
            case QU.MoveScene:
              tU = this._moveScene
          }
          switch (gU) {
            case 0:
              tU.set(UU, 0, 0);
              break;
            case 1:
              tU.set(0, UU, 0);
              break;
            case 2:
              tU.set(0, 0, UU)
          }
        }
      }, (() => {
        const EU = "function" === typeof Symbol && Symbol.metadata ? Object.create(uU[Symbol.metadata] ?? null) : void 0;
        RU = [(0, pU.K)()], gU = [(0, pU.K)()], PU = [(0, pU.K)()], TU = [(0, pU.K)()], qU = [(0, pU.K)()], KU = [(0, pU.K)()], cU = [(0, pU.K)()], GU = [(0, pU.K)()], jU = [(0, pU.K)()], (0, tU.i)(UU, null, RU, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelXMoveRelative" in UU,
            set: (UU, RU) => {
              UU.wheelXMoveRelative = RU
            }
          },
          metadata: EU
        }, null, CU), (0, tU.i)(UU, null, gU, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelYMoveRelative" in UU,
            set: (UU, RU) => {
              UU.wheelYMoveRelative = RU
            }
          },
          metadata: EU
        }, null, CU), (0, tU.i)(UU, null, PU, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelZMoveRelative" in UU,
            set: (UU, RU) => {
              UU.wheelZMoveRelative = RU
            }
          },
          metadata: EU
        }, null, CU), (0, tU.i)(UU, null, TU, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelXRotateRelative" in UU,
            set: (UU, RU) => {
              UU.wheelXRotateRelative = RU
            }
          },
          metadata: EU
        }, null, CU), (0, tU.i)(UU, null, qU, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelYRotateRelative" in UU,
            set: (UU, RU) => {
              UU.wheelYRotateRelative = RU
            }
          },
          metadata: EU
        }, null, CU), (0, tU.i)(UU, null, KU, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelZRotateRelative" in UU,
            set: (UU, RU) => {
              UU.wheelZRotateRelative = RU
            }
          },
          metadata: EU
        }, null, CU), (0, tU.i)(UU, null, cU, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelXMoveScene" in UU,
            set: (UU, RU) => {
              UU.wheelXMoveScene = RU
            }
          },
          metadata: EU
        }, null, CU), (0, tU.i)(UU, null, GU, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelYMoveScene" in UU,
            set: (UU, RU) => {
              UU.wheelYMoveScene = RU
            }
          },
          metadata: EU
        }, null, CU), (0, tU.i)(UU, null, jU, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: UU => "wheelZMoveScene" in UU,
            set: (UU, RU) => {
              UU.wheelZMoveScene = RU
            }
          },
          metadata: EU
        }, null, CU), EU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: EU
        })
      })(), UU
    })();
    TU.d.FreeCameraMouseWheelInput = eU;
    let WU = (() => {
      var UU;
      let RU, gU, PU = [],
        TU = [],
        qU = [],
        cU = [];
      return UU = class {
        constructor() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = UU, this.touchAngularSensibility = (0, tU.j)(this, PU, 2e5), this.touchMoveSensibility = ((0, tU.j)(this, TU), (0, tU.j)(this, qU, 250)), this.singleFingerRotate = ((0, tU.j)(this, cU), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = KU.g.IsSafari()
        }
        attachControl(UU) {
          UU = KU.g.BackCompatCameraNoPreventDefault(arguments);
          let RU = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = gU => {
              const tU = gU.event,
                pU = "mouse" === tU.pointerType || this._isSafari && "undefined" === typeof tU.pointerType;
              if (this.allowMouse || !pU)
                if (gU.type === jU.e.POINTERDOWN) {
                  if (UU || tU.preventDefault(), this._pointerPressed.push(tU.pointerId), 1 !== this._pointerPressed.length) return;
                  RU = {
                    x: tU.clientX,
                    y: tU.clientY
                  }
                } else if (gU.type === jU.e.POINTERUP) {
                UU || tU.preventDefault();
                const gU = this._pointerPressed.indexOf(tU.pointerId);
                if (-1 === gU) return;
                if (this._pointerPressed.splice(gU, 1), 0 != gU) return;
                RU = null, this._offsetX = null, this._offsetY = null
              } else if (gU.type === jU.e.POINTERMOVE) {
                if (UU || tU.preventDefault(), !RU) return;
                if (0 != this._pointerPressed.indexOf(tU.pointerId)) return;
                this._offsetX = tU.clientX - RU.x, this._offsetY = -(tU.clientY - RU.y)
              }
            }), this._observer = this.camera.aZ()._inputManager._addCameraPointerObserver(this._pointerInput, jU.e.POINTERDOWN | jU.e.POINTERUP | jU.e.POINTERMOVE), this._onLostFocus) {
            const UU = this.camera.WC().getInputElement();
            UU && UU.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.aZ()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const UU = this.camera.WC().getInputElement();
              UU && UU.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const UU = this.camera,
            RU = UU.movement.input,
            gU = RU.getEntry("touch", "rotate"),
            tU = RU.getEntry("touch", "translate"),
            pU = UU._calculateHandednessMultiplier(),
            PU = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (gU) {
            const RU = gU.sensitivity ?? 1 / this.touchAngularSensibility;
            UU.cameraRotation.y = this._offsetX * pU * RU, PU && (UU.cameraRotation.x = -this._offsetY * pU * RU)
          }
          if (!PU && tU) {
            const RU = UU._computeLocalCameraSpeed(),
              gU = tU.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              pU = EU.h.xC[0];
            pU.b_(0, 0, RU * this._offsetY * gU), EU.c.RotationYawPitchRollToRef(UU.rotation.y, UU.rotation.x, 0, UU._cameraRotationMatrix), EU.n.TransformCoordinatesToRef(pU, UU._cameraRotationMatrix, pU), UU.cameraDirection.addInPlace(pU)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const EU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RU = [(0, pU.K)()], gU = [(0, pU.K)()], (0, tU.i)(null, null, RU, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: UU => "touchAngularSensibility" in UU,
            get: UU => UU.touchAngularSensibility,
            set: (UU, RU) => {
              UU.touchAngularSensibility = RU
            }
          },
          metadata: EU
        }, PU, TU), (0, tU.i)(null, null, gU, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: UU => "touchMoveSensibility" in UU,
            get: UU => UU.touchMoveSensibility,
            set: (UU, RU) => {
              UU.touchMoveSensibility = RU
            }
          },
          metadata: EU
        }, qU, cU), EU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: EU
        })
      })(), UU
    })();
    TU.d.FreeCameraTouchInput = WU;
    var fU, xU, mU, IU = gU(39256);
    class JU extends TU.f {
      constructor(UU) {
        super(UU), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new cU), this
      }
      addMouse() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new uU(UU), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new eU, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new WU), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(fU = JU.prototype).addDeviceOrientation ?? (fU.addDeviceOrientation = (0, IU.m)("FreeCameraInputsManager", "addDeviceOrientation")), (xU = JU.prototype).addVirtualJoystick ?? (xU.addVirtualJoystick = (0, IU.m)("FreeCameraInputsManager", "addVirtualJoystick")), (mU = JU.prototype).addGamepad ?? (mU.addGamepad = (0, IU.m)("FreeCameraInputsManager", "addGamepad"));
    var wU = gU(39272),
      nU = gU(36639);
    let bU = (() => {
        var UU;
        let RU, gU, TU, qU, cU = PU.i,
          GU = [],
          jU = [],
          uU = [],
          CU = [],
          hU = [],
          QU = [],
          eU = [],
          WU = [];
        return UU = class extends cU {
          get angularSensibility() {
            const UU = this.inputs.attached.mouse;
            return UU ? UU.angularSensibility : 0
          }
          set angularSensibility(UU) {
            const RU = this.inputs.attached.mouse;
            RU && (RU.angularSensibility = UU)
          }
          get keysUp() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysUp : []
          }
          set keysUp(UU) {
            const RU = this.inputs.attached.keyboard;
            RU && (RU.keysUp = UU)
          }
          get keysUpward() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysUpward : []
          }
          set keysUpward(UU) {
            const RU = this.inputs.attached.keyboard;
            RU && (RU.keysUpward = UU)
          }
          get keysDown() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysDown : []
          }
          set keysDown(UU) {
            const RU = this.inputs.attached.keyboard;
            RU && (RU.keysDown = UU)
          }
          get keysDownward() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysDownward : []
          }
          set keysDownward(UU) {
            const RU = this.inputs.attached.keyboard;
            RU && (RU.keysDownward = UU)
          }
          get keysLeft() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysLeft : []
          }
          set keysLeft(UU) {
            const RU = this.inputs.attached.keyboard;
            RU && (RU.keysLeft = UU)
          }
          get keysRight() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysRight : []
          }
          set keysRight(UU) {
            const RU = this.inputs.attached.keyboard;
            RU && (RU.keysRight = UU)
          }
          get keysRotateLeft() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysRotateLeft : []
          }
          set keysRotateLeft(UU) {
            const RU = this.inputs.attached.keyboard;
            RU && (RU.keysRotateLeft = UU)
          }
          get keysRotateRight() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysRotateRight : []
          }
          set keysRotateRight(UU) {
            const RU = this.inputs.attached.keyboard;
            RU && (RU.keysRotateRight = UU)
          }
          get keysRotateUp() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysRotateUp : []
          }
          set keysRotateUp(UU) {
            const RU = this.inputs.attached.keyboard;
            RU && (RU.keysRotateUp = UU)
          }
          get keysRotateDown() {
            const UU = this.inputs.attached.keyboard;
            return UU ? UU.keysRotateDown : []
          }
          set keysRotateDown(UU) {
            const RU = this.inputs.attached.keyboard;
            RU && (RU.keysRotateDown = UU)
          }
          constructor(UU, RU, gU) {
            var pU;
            super(UU, RU, gU, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), pU = this, this.ellipsoid = (0, tU.j)(this, GU, new EU.n(.5, 1, .5)), this.ellipsoidOffset = ((0, tU.j)(this, jU), (0, tU.j)(this, uU, new EU.n(0, 0, 0))), this.checkCollisions = ((0, tU.j)(this, CU), (0, tU.j)(this, hU, !1)), this.applyGravity = ((0, tU.j)(this, QU), (0, tU.j)(this, eU, !1)), this.inputs = (0, tU.j)(this, WU), this._needMoveForGravity = !1, this._oldPosition = EU.n.Zero(), this._diffPosition = EU.n.Zero(), this._newPosition = EU.n.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(UU, RU) {
              let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              pU._newPosition.PgU(RU), pU._newPosition.subtractToRef(pU._oldPosition, pU._diffPosition), pU._diffPosition.length() > wU.d.CollisionsEpsilon && (pU.position.addToRef(pU._diffPosition, pU._deferredPositionUpdate), pU._deferOnly ? pU._deferredUpdated = !0 : pU.position.PgU(pU._deferredPositionUpdate), pU.Rj && gU && pU.Rj(gU))
            }, this.inputs = new JU(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(UU, RU) {
            RU = KU.g.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(RU)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new EU.n(0, 0, 0), this.cameraRotation = new EU.l(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(UU) {
            this._collisionMask = isNaN(UU) ? -1 : UU
          }
          _collideWithWorld(UU) {
            let RU;
            RU = this.parent ? EU.n.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, RU.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const gU = this.aZ().collisionCoordinator;
            this._collider || (this._collider = gU.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let tU = UU;
            this.applyGravity && (tU = UU.add(this.aZ().gravity)), gU.getNewPosition(this._oldPosition, tU, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = EU.n.Zero(), this._transformedDirection = EU.n.Zero()), this.inputs.checkInputs(), super._checkInputs()
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
            this.checkCollisions && this.aZ().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const EU = "function" === typeof Symbol && Symbol.metadata ? Object.create(cU[Symbol.metadata] ?? null) : void 0;
          RU = [(0, pU.I)()], gU = [(0, pU.I)()], TU = [(0, pU.K)()], qU = [(0, pU.K)()], (0, tU.i)(null, null, RU, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: UU => "ellipsoid" in UU,
              get: UU => UU.ellipsoid,
              set: (UU, RU) => {
                UU.ellipsoid = RU
              }
            },
            metadata: EU
          }, GU, jU), (0, tU.i)(null, null, gU, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: UU => "ellipsoidOffset" in UU,
              get: UU => UU.ellipsoidOffset,
              set: (UU, RU) => {
                UU.ellipsoidOffset = RU
              }
            },
            metadata: EU
          }, uU, CU), (0, tU.i)(null, null, TU, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: UU => "checkCollisions" in UU,
              get: UU => UU.checkCollisions,
              set: (UU, RU) => {
                UU.checkCollisions = RU
              }
            },
            metadata: EU
          }, hU, QU), (0, tU.i)(null, null, qU, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: UU => "applyGravity" in UU,
              get: UU => UU.applyGravity,
              set: (UU, RU) => {
                UU.applyGravity = RU
              }
            },
            metadata: EU
          }, eU, WU), EU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EU
          })
        })(), UU
      })(),
      oU = !1;
    oU || (oU = !0, (0, nU.g)("BABYLON.FreeCamera", bU))
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
export const id = 283;
export const ids = [283];
export const modules = {
  41466: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => XV
    });
    var JV = xV(41257),
      YV = xV(41263),
      UV = xV(38269),
      yV = xV(41470),
      pV = xV(41506),
      QV = xV(41439),
      nV = xV(41341);
    let wV = (() => {
      var VV;
      let eV, xV, yV, pV, wV, ZV, vV, rV, kV, bV, EV, BV = [],
        jV = [],
        qV = [],
        tV = [],
        FV = [],
        TV = [],
        PV = [],
        AV = [],
        NV = [],
        XV = [],
        MV = [],
        zV = [],
        GV = [],
        WV = [],
        RV = [],
        gV = [],
        DV = [],
        iV = [],
        CV = [],
        aV = [],
        oV = [],
        cV = [];
      return VV = class {
        constructor() {
          this.keysUp = (0, JV.l)(this, BV, [38]), this.keysUpward = ((0, JV.l)(this, jV), (0, JV.l)(this, qV, [33])), this.keysDown = ((0, JV.l)(this, tV), (0, JV.l)(this, FV, [40])), this.keysDownward = ((0, JV.l)(this, TV), (0, JV.l)(this, PV, [34])), this.keysLeft = ((0, JV.l)(this, AV), (0, JV.l)(this, NV, [37])), this.keysRight = ((0, JV.l)(this, XV), (0, JV.l)(this, MV, [39])), this.rotationSpeed = ((0, JV.l)(this, zV), (0, JV.l)(this, GV, .5)), this.keysRotateLeft = ((0, JV.l)(this, WV), (0, JV.l)(this, RV, [])), this.keysRotateRight = ((0, JV.l)(this, gV), (0, JV.l)(this, DV, [])), this.keysRotateUp = ((0, JV.l)(this, iV), (0, JV.l)(this, CV, [])), this.keysRotateDown = ((0, JV.l)(this, aV), (0, JV.l)(this, oV, [])), this._keys = ((0, JV.l)(this, cV), new Array)
        }
        attachControl(VV) {
          VV = nV.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.dD(), this._engine = this._scene.sk(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((eV => {
            const xV = eV.event;
            if (!xV.metaKey)
              if (eV.type === QV.d.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(xV.keyCode) || -1 !== this.keysDown.indexOf(xV.keyCode) || -1 !== this.keysLeft.indexOf(xV.keyCode) || -1 !== this.keysRight.indexOf(xV.keyCode) || -1 !== this.keysUpward.indexOf(xV.keyCode) || -1 !== this.keysDownward.indexOf(xV.keyCode) || -1 !== this.keysRotateLeft.indexOf(xV.keyCode) || -1 !== this.keysRotateRight.indexOf(xV.keyCode) || -1 !== this.keysRotateUp.indexOf(xV.keyCode) || -1 !== this.keysRotateDown.indexOf(xV.keyCode)) {
                  -1 === this._keys.indexOf(xV.keyCode) && this._keys.push(xV.keyCode), VV || xV.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(xV.keyCode) || -1 !== this.keysDown.indexOf(xV.keyCode) || -1 !== this.keysLeft.indexOf(xV.keyCode) || -1 !== this.keysRight.indexOf(xV.keyCode) || -1 !== this.keysUpward.indexOf(xV.keyCode) || -1 !== this.keysDownward.indexOf(xV.keyCode) || -1 !== this.keysRotateLeft.indexOf(xV.keyCode) || -1 !== this.keysRotateRight.indexOf(xV.keyCode) || -1 !== this.keysRotateUp.indexOf(xV.keyCode) || -1 !== this.keysRotateDown.indexOf(xV.keyCode)) {
              const eV = this._keys.indexOf(xV.keyCode);
              eV >= 0 && this._keys.splice(eV, 1), VV || xV.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const VV = this.camera,
              eV = VV.movement.input,
              xV = eV.getEntry("keyboard", "translate"),
              JV = eV.getEntry("keyboard", "rotate"),
              YV = JV?.sensitivity ?? 1,
              yV = VV._localDirection.FeV(0, 0, 0);
            for (let UV = 0; UV < this._keys.length; UV++) {
              const eV = this._keys[UV]; - 1 !== this.keysLeft.indexOf(eV) ? yV.x -= 1 : -1 !== this.keysUp.indexOf(eV) ? yV.z += 1 : -1 !== this.keysRight.indexOf(eV) ? yV.x += 1 : -1 !== this.keysDown.indexOf(eV) ? yV.z -= 1 : -1 !== this.keysUpward.indexOf(eV) ? yV.y += 1 : -1 !== this.keysDownward.indexOf(eV) ? yV.y -= 1 : -1 !== this.keysRotateLeft.indexOf(eV) ? JV && (VV.cameraRotation.y -= this._getLocalRotation() * YV) : -1 !== this.keysRotateRight.indexOf(eV) ? JV && (VV.cameraRotation.y += this._getLocalRotation() * YV) : -1 !== this.keysRotateUp.indexOf(eV) ? JV && (VV.cameraRotation.x -= this._getLocalRotation() * YV) : -1 !== this.keysRotateDown.indexOf(eV) && JV && (VV.cameraRotation.x += this._getLocalRotation() * YV)
            }
            if (xV && (0 !== yV.x || 0 !== yV.y || 0 !== yV.z)) {
              const eV = VV._computeLocalCameraSpeed() * (xV.sensitivity ?? 1);
              yV.normalize().scaleInPlace(eV), VV.dD().useRightHandedSystem && (yV.z *= -1), VV.getViewMatrix().invertToRef(VV._cameraTransformMatrix), UV.o.TransformNormalToRef(yV, VV._cameraTransformMatrix, VV._transformedDirection), VV.cameraDirection.addInPlace(VV._transformedDirection)
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
          const VV = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * VV
        }
      }, (() => {
        const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        eV = [(0, YV.J)()], xV = [(0, YV.J)()], yV = [(0, YV.J)()], pV = [(0, YV.J)()], wV = [(0, YV.J)()], ZV = [(0, YV.J)()], vV = [(0, YV.J)()], rV = [(0, YV.J)()], kV = [(0, YV.J)()], bV = [(0, YV.J)()], EV = [(0, YV.J)()], (0, JV.i)(null, null, eV, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: VV => "keysUp" in VV,
            get: VV => VV.keysUp,
            set: (VV, eV) => {
              VV.keysUp = eV
            }
          },
          metadata: UV
        }, BV, jV), (0, JV.i)(null, null, xV, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: VV => "keysUpward" in VV,
            get: VV => VV.keysUpward,
            set: (VV, eV) => {
              VV.keysUpward = eV
            }
          },
          metadata: UV
        }, qV, tV), (0, JV.i)(null, null, yV, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: VV => "keysDown" in VV,
            get: VV => VV.keysDown,
            set: (VV, eV) => {
              VV.keysDown = eV
            }
          },
          metadata: UV
        }, FV, TV), (0, JV.i)(null, null, pV, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: VV => "keysDownward" in VV,
            get: VV => VV.keysDownward,
            set: (VV, eV) => {
              VV.keysDownward = eV
            }
          },
          metadata: UV
        }, PV, AV), (0, JV.i)(null, null, wV, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: VV => "keysLeft" in VV,
            get: VV => VV.keysLeft,
            set: (VV, eV) => {
              VV.keysLeft = eV
            }
          },
          metadata: UV
        }, NV, XV), (0, JV.i)(null, null, ZV, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: VV => "keysRight" in VV,
            get: VV => VV.keysRight,
            set: (VV, eV) => {
              VV.keysRight = eV
            }
          },
          metadata: UV
        }, MV, zV), (0, JV.i)(null, null, vV, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: VV => "rotationSpeed" in VV,
            get: VV => VV.rotationSpeed,
            set: (VV, eV) => {
              VV.rotationSpeed = eV
            }
          },
          metadata: UV
        }, GV, WV), (0, JV.i)(null, null, rV, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: VV => "keysRotateLeft" in VV,
            get: VV => VV.keysRotateLeft,
            set: (VV, eV) => {
              VV.keysRotateLeft = eV
            }
          },
          metadata: UV
        }, RV, gV), (0, JV.i)(null, null, kV, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: VV => "keysRotateRight" in VV,
            get: VV => VV.keysRotateRight,
            set: (VV, eV) => {
              VV.keysRotateRight = eV
            }
          },
          metadata: UV
        }, DV, iV), (0, JV.i)(null, null, bV, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: VV => "keysRotateUp" in VV,
            get: VV => VV.keysRotateUp,
            set: (VV, eV) => {
              VV.keysRotateUp = eV
            }
          },
          metadata: UV
        }, CV, aV), (0, JV.i)(null, null, EV, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: VV => "keysRotateDown" in VV,
            get: VV => VV.keysRotateDown,
            set: (VV, eV) => {
              VV.keysRotateDown = eV
            }
          },
          metadata: UV
        }, oV, cV), UV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UV
        })
      })(), VV
    })();
    pV.b.FreeCameraKeyboardMoveInput = wV;
    var ZV = xV(38296),
      vV = xV(41433);
    let rV = (() => {
      var VV;
      let eV, xV, UV = [],
        yV = [],
        pV = [],
        QV = [];
      return VV = class {
        _applyPointerRotation(VV, eV) {
          this._pointerConditions.button = this._currentActiveButton;
          const xV = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!xV || "rotate" !== xV.interaction) return;
          const JV = xV.W8 ?? xV.sensitivity ?? 1 / this.angularSensibility,
            YV = xV.K8 ?? xV.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += VV * JV, this.camera.cameraRotation.x += eV * YV
        }
        constructor() {
          let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = VV, this.buttons = (0, JV.l)(this, UV, [0, 1, 2]), this.angularSensibility = ((0, JV.l)(this, yV), (0, JV.l)(this, pV, 2e3)), this._pointerInput = (0, JV.l)(this, QV), this._previousPosition = null, this.onPointerMovedObservable = new ZV.c, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(VV) {
          VV = nV.j.BackCompatCameraNoPreventDefault(arguments);
          const eV = this.camera.sk(),
            xV = eV.getInputElement();
          this._pointerInput || (this._pointerInput = JV => {
            const YV = JV.event,
              UV = "touch" === YV.pointerType;
            if (!this.touchEnabled && UV) return;
            if (JV.type !== vV.b.POINTERMOVE && -1 === this.buttons.indexOf(YV.button)) return;
            const yV = YV.target;
            if (JV.type === vV.b.POINTERDOWN) {
              if (UV && -1 !== this._activePointerId || !UV && -1 !== this._currentActiveButton) return;
              this._activePointerId = YV.pointerId;
              try {
                yV?.setPointerCapture(YV.pointerId)
              } catch (pV) {} - 1 === this._currentActiveButton && (this._currentActiveButton = YV.button), this._previousPosition = {
                x: YV.clientX,
                y: YV.clientY
              }, VV || (YV.preventDefault(), xV && xV.focus()), eV.isPointerLock && this._onMouseMove && this._onMouseMove(JV.event)
            } else if (JV.type === vV.b.POINTERUP) {
              if (UV && this._activePointerId !== YV.pointerId || !UV && this._currentActiveButton !== YV.button) return;
              try {
                yV?.releasePointerCapture(YV.pointerId)
              } catch (pV) {}
              this._currentActiveButton = -1, this._previousPosition = null, VV || YV.preventDefault(), this._activePointerId = -1
            } else if (JV.type === vV.b.POINTERMOVE && (this._activePointerId === YV.pointerId || !UV))
              if (eV.isPointerLock && this._onMouseMove) this._onMouseMove(JV.event);
              else if (this._previousPosition) {
              const eV = this.camera._calculateHandednessMultiplier(),
                xV = (YV.clientX - this._previousPosition.x) * eV,
                JV = (YV.clientY - this._previousPosition.y) * eV;
              this._allowCameraRotation && this._applyPointerRotation(xV, JV), this.onPointerMovedObservable.notifyObservers({
                offsetX: xV,
                offsetY: JV
              }), this._previousPosition = {
                x: YV.clientX,
                y: YV.clientY
              }, VV || YV.preventDefault()
            }
          }), this._onMouseMove = xV => {
            if (!eV.isPointerLock) return;
            const JV = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(xV.movementX * JV, xV.movementY * JV), this._previousPosition = null, VV || xV.preventDefault()
          }, this._observer = this.camera.dD()._inputManager._addCameraPointerObserver(this._pointerInput, vV.b.POINTERDOWN | vV.b.POINTERUP | vV.b.POINTERMOVE), xV && (this._contextMenuBind = VV => this.onContextMenu(VV), xV.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(VV) {
          VV.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.dD()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const VV = this.camera.sk().getInputElement();
              VV && VV.removeEventListener("contextmenu", this._contextMenuBind)
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
        const nV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        eV = [(0, YV.J)()], xV = [(0, YV.J)()], (0, JV.i)(null, null, eV, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: VV => "buttons" in VV,
            get: VV => VV.buttons,
            set: (VV, eV) => {
              VV.buttons = eV
            }
          },
          metadata: nV
        }, UV, yV), (0, JV.i)(null, null, xV, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: VV => "angularSensibility" in VV,
            get: VV => VV.angularSensibility,
            set: (VV, eV) => {
              VV.angularSensibility = eV
            }
          },
          metadata: nV
        }, pV, QV), nV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: nV
        })
      })(), VV
    })();
    pV.b.FreeCameraMouseInput = rV;
    var kV = xV(41445);
    let bV = (() => {
      var VV;
      let eV, xV, UV, yV = [],
        pV = [],
        QV = [],
        wV = [],
        rV = [],
        bV = [];
      return VV = class {
        constructor() {
          this.wheelPrecisionX = (0, JV.l)(this, yV, 3), this.wheelPrecisionY = ((0, JV.l)(this, pV), (0, JV.l)(this, QV, 3)), this.wheelPrecisionZ = ((0, JV.l)(this, wV), (0, JV.l)(this, rV, 3)), this.onChangedObservable = ((0, JV.l)(this, bV), new ZV.c), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(VV) {
          VV = nV.j.BackCompatCameraNoPreventDefault(arguments), this._wheel = eV => {
            if (eV.type !== vV.b.POINTERWHEEL) return;
            const xV = eV.event,
              JV = xV.deltaMode === kV.b.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * JV * xV.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * JV * xV.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * JV * xV.deltaZ / this._normalize, xV.preventDefault && (VV || xV.preventDefault())
          }, this._observer = this.camera.dD()._inputManager._addCameraPointerObserver(this._wheel, vV.b.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.dD()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const nV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        eV = [(0, YV.J)()], xV = [(0, YV.J)()], UV = [(0, YV.J)()], (0, JV.i)(null, null, eV, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: VV => "wheelPrecisionX" in VV,
            get: VV => VV.wheelPrecisionX,
            set: (VV, eV) => {
              VV.wheelPrecisionX = eV
            }
          },
          metadata: nV
        }, yV, pV), (0, JV.i)(null, null, xV, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: VV => "wheelPrecisionY" in VV,
            get: VV => VV.wheelPrecisionY,
            set: (VV, eV) => {
              VV.wheelPrecisionY = eV
            }
          },
          metadata: nV
        }, QV, wV), (0, JV.i)(null, null, UV, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: VV => "wheelPrecisionZ" in VV,
            get: VV => VV.wheelPrecisionZ,
            set: (VV, eV) => {
              VV.wheelPrecisionZ = eV
            }
          },
          metadata: nV
        }, rV, bV), nV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: nV
        })
      })(), VV
    })();
    var EV;
    ! function(VV) {
      VV[VV.MoveRelative = 0] = "MoveRelative", VV[VV.RotateRelative = 1] = "RotateRelative", VV[VV.MoveScene = 2] = "MoveScene"
    }(EV || (EV = {}));
    let BV = (() => {
      var VV;
      let eV, xV, yV, pV, QV, nV, wV, ZV, vV, rV = bV,
        kV = [];
      return VV = class extends rV {
        constructor() {
          super(...arguments), this.camera = (0, JV.l)(this, kV), this._moveRelative = UV.o.Zero(), this._rotateRelative = UV.o.Zero(), this._moveScene = UV.o.Zero(), this._wheelXAction = EV.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = EV.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(VV) {
          null === VV && this._wheelXAction !== EV.MoveRelative || (this._wheelXAction = EV.MoveRelative, this._wheelXActionCoordinate = VV)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== EV.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(VV) {
          null === VV && this._wheelYAction !== EV.MoveRelative || (this._wheelYAction = EV.MoveRelative, this._wheelYActionCoordinate = VV)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== EV.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(VV) {
          null === VV && this._wheelZAction !== EV.MoveRelative || (this._wheelZAction = EV.MoveRelative, this._wheelZActionCoordinate = VV)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== EV.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(VV) {
          null === VV && this._wheelXAction !== EV.RotateRelative || (this._wheelXAction = EV.RotateRelative, this._wheelXActionCoordinate = VV)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== EV.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(VV) {
          null === VV && this._wheelYAction !== EV.RotateRelative || (this._wheelYAction = EV.RotateRelative, this._wheelYActionCoordinate = VV)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== EV.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(VV) {
          null === VV && this._wheelZAction !== EV.RotateRelative || (this._wheelZAction = EV.RotateRelative, this._wheelZActionCoordinate = VV)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== EV.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(VV) {
          null === VV && this._wheelXAction !== EV.MoveScene || (this._wheelXAction = EV.MoveScene, this._wheelXActionCoordinate = VV)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== EV.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(VV) {
          null === VV && this._wheelYAction !== EV.MoveScene || (this._wheelYAction = EV.MoveScene, this._wheelYActionCoordinate = VV)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== EV.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(VV) {
          null === VV && this._wheelZAction !== EV.MoveScene || (this._wheelZAction = EV.MoveScene, this._wheelZActionCoordinate = VV)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== EV.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.HVV(0), this._rotateRelative.HVV(0), this._moveScene.HVV(0), this._updateCamera(), this.camera.dD().useRightHandedSystem && (this._moveRelative.z *= -1);
          const VV = UV.d.Zero();
          this.camera.getViewMatrix().invertToRef(VV);
          const eV = UV.o.Zero();
          UV.o.TransformNormalToRef(this._moveRelative, VV, eV), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(eV), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(VV, eV, xV) {
          if (0 === VV) return;
          if (null === eV || null === xV) return;
          let JV = null;
          switch (eV) {
            case EV.MoveRelative:
              JV = this._moveRelative;
              break;
            case EV.RotateRelative:
              JV = this._rotateRelative;
              break;
            case EV.MoveScene:
              JV = this._moveScene
          }
          switch (xV) {
            case 0:
              JV.set(VV, 0, 0);
              break;
            case 1:
              JV.set(0, VV, 0);
              break;
            case 2:
              JV.set(0, 0, VV)
          }
        }
      }, (() => {
        const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(rV[Symbol.metadata] ?? null) : void 0;
        eV = [(0, YV.J)()], xV = [(0, YV.J)()], yV = [(0, YV.J)()], pV = [(0, YV.J)()], QV = [(0, YV.J)()], nV = [(0, YV.J)()], wV = [(0, YV.J)()], ZV = [(0, YV.J)()], vV = [(0, YV.J)()], (0, JV.i)(VV, null, eV, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: VV => "wheelXMoveRelative" in VV,
            set: (VV, eV) => {
              VV.wheelXMoveRelative = eV
            }
          },
          metadata: UV
        }, null, kV), (0, JV.i)(VV, null, xV, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: VV => "wheelYMoveRelative" in VV,
            set: (VV, eV) => {
              VV.wheelYMoveRelative = eV
            }
          },
          metadata: UV
        }, null, kV), (0, JV.i)(VV, null, yV, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: VV => "wheelZMoveRelative" in VV,
            set: (VV, eV) => {
              VV.wheelZMoveRelative = eV
            }
          },
          metadata: UV
        }, null, kV), (0, JV.i)(VV, null, pV, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: VV => "wheelXRotateRelative" in VV,
            set: (VV, eV) => {
              VV.wheelXRotateRelative = eV
            }
          },
          metadata: UV
        }, null, kV), (0, JV.i)(VV, null, QV, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: VV => "wheelYRotateRelative" in VV,
            set: (VV, eV) => {
              VV.wheelYRotateRelative = eV
            }
          },
          metadata: UV
        }, null, kV), (0, JV.i)(VV, null, nV, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: VV => "wheelZRotateRelative" in VV,
            set: (VV, eV) => {
              VV.wheelZRotateRelative = eV
            }
          },
          metadata: UV
        }, null, kV), (0, JV.i)(VV, null, wV, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: VV => "wheelXMoveScene" in VV,
            set: (VV, eV) => {
              VV.wheelXMoveScene = eV
            }
          },
          metadata: UV
        }, null, kV), (0, JV.i)(VV, null, ZV, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: VV => "wheelYMoveScene" in VV,
            set: (VV, eV) => {
              VV.wheelYMoveScene = eV
            }
          },
          metadata: UV
        }, null, kV), (0, JV.i)(VV, null, vV, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: VV => "wheelZMoveScene" in VV,
            set: (VV, eV) => {
              VV.wheelZMoveScene = eV
            }
          },
          metadata: UV
        }, null, kV), UV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UV
        })
      })(), VV
    })();
    pV.b.FreeCameraMouseWheelInput = BV;
    let jV = (() => {
      var VV;
      let eV, xV, yV = [],
        pV = [],
        QV = [],
        wV = [];
      return VV = class {
        constructor() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = VV, this.touchAngularSensibility = (0, JV.l)(this, yV, 2e5), this.touchMoveSensibility = ((0, JV.l)(this, pV), (0, JV.l)(this, QV, 250)), this.singleFingerRotate = ((0, JV.l)(this, wV), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = nV.j.IsSafari()
        }
        attachControl(VV) {
          VV = nV.j.BackCompatCameraNoPreventDefault(arguments);
          let eV = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = xV => {
              const JV = xV.event,
                YV = "mouse" === JV.pointerType || this._isSafari && "undefined" === typeof JV.pointerType;
              if (this.allowMouse || !YV)
                if (xV.type === vV.b.POINTERDOWN) {
                  if (VV || JV.preventDefault(), this._pointerPressed.push(JV.pointerId), 1 !== this._pointerPressed.length) return;
                  eV = {
                    x: JV.clientX,
                    y: JV.clientY
                  }
                } else if (xV.type === vV.b.POINTERUP) {
                VV || JV.preventDefault();
                const xV = this._pointerPressed.indexOf(JV.pointerId);
                if (-1 === xV) return;
                if (this._pointerPressed.splice(xV, 1), 0 != xV) return;
                eV = null, this._offsetX = null, this._offsetY = null
              } else if (xV.type === vV.b.POINTERMOVE) {
                if (VV || JV.preventDefault(), !eV) return;
                if (0 != this._pointerPressed.indexOf(JV.pointerId)) return;
                this._offsetX = JV.clientX - eV.x, this._offsetY = -(JV.clientY - eV.y)
              }
            }), this._observer = this.camera.dD()._inputManager._addCameraPointerObserver(this._pointerInput, vV.b.POINTERDOWN | vV.b.POINTERUP | vV.b.POINTERMOVE), this._onLostFocus) {
            const VV = this.camera.sk().getInputElement();
            VV && VV.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.dD()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const VV = this.camera.sk().getInputElement();
              VV && VV.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const VV = this.camera,
            eV = VV.movement.input,
            xV = eV.getEntry("touch", "rotate"),
            JV = eV.getEntry("touch", "translate"),
            YV = VV._calculateHandednessMultiplier(),
            yV = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (xV) {
            const eV = xV.sensitivity ?? 1 / this.touchAngularSensibility;
            VV.cameraRotation.y = this._offsetX * YV * eV, yV && (VV.cameraRotation.x = -this._offsetY * YV * eV)
          }
          if (!yV && JV) {
            const eV = VV._computeLocalCameraSpeed(),
              xV = JV.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              YV = UV.l.Ik[0];
            YV.FeV(0, 0, eV * this._offsetY * xV), UV.d.RotationYawPitchRollToRef(VV.rotation.y, VV.rotation.x, 0, VV._cameraRotationMatrix), UV.o.TransformCoordinatesToRef(YV, VV._cameraRotationMatrix, YV), VV.cameraDirection.addInPlace(YV)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        eV = [(0, YV.J)()], xV = [(0, YV.J)()], (0, JV.i)(null, null, eV, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: VV => "touchAngularSensibility" in VV,
            get: VV => VV.touchAngularSensibility,
            set: (VV, eV) => {
              VV.touchAngularSensibility = eV
            }
          },
          metadata: UV
        }, yV, pV), (0, JV.i)(null, null, xV, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: VV => "touchMoveSensibility" in VV,
            get: VV => VV.touchMoveSensibility,
            set: (VV, eV) => {
              VV.touchMoveSensibility = eV
            }
          },
          metadata: UV
        }, QV, wV), UV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UV
        })
      })(), VV
    })();
    pV.b.FreeCameraTouchInput = jV;
    var qV, tV, FV, TV = xV(41138);
    class PV extends pV.e {
      constructor(VV) {
        super(VV), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new wV), this
      }
      addMouse() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new rV(VV), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new BV, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new jV), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(qV = PV.prototype).addDeviceOrientation ?? (qV.addDeviceOrientation = (0, TV.j)("FreeCameraInputsManager", "addDeviceOrientation")), (tV = PV.prototype).addVirtualJoystick ?? (tV.addVirtualJoystick = (0, TV.j)("FreeCameraInputsManager", "addVirtualJoystick")), (FV = PV.prototype).addGamepad ?? (FV.addGamepad = (0, TV.j)("FreeCameraInputsManager", "addGamepad"));
    var AV = xV(41150),
      NV = xV(38318);
    let XV = (() => {
        var VV;
        let eV, xV, pV, QV, wV = yV.g,
          ZV = [],
          vV = [],
          rV = [],
          kV = [],
          bV = [],
          EV = [],
          BV = [],
          jV = [];
        return VV = class extends wV {
          get angularSensibility() {
            const VV = this.inputs.attached.mouse;
            return VV ? VV.angularSensibility : 0
          }
          set angularSensibility(VV) {
            const eV = this.inputs.attached.mouse;
            eV && (eV.angularSensibility = VV)
          }
          get keysUp() {
            const VV = this.inputs.attached.keyboard;
            return VV ? VV.keysUp : []
          }
          set keysUp(VV) {
            const eV = this.inputs.attached.keyboard;
            eV && (eV.keysUp = VV)
          }
          get keysUpward() {
            const VV = this.inputs.attached.keyboard;
            return VV ? VV.keysUpward : []
          }
          set keysUpward(VV) {
            const eV = this.inputs.attached.keyboard;
            eV && (eV.keysUpward = VV)
          }
          get keysDown() {
            const VV = this.inputs.attached.keyboard;
            return VV ? VV.keysDown : []
          }
          set keysDown(VV) {
            const eV = this.inputs.attached.keyboard;
            eV && (eV.keysDown = VV)
          }
          get keysDownward() {
            const VV = this.inputs.attached.keyboard;
            return VV ? VV.keysDownward : []
          }
          set keysDownward(VV) {
            const eV = this.inputs.attached.keyboard;
            eV && (eV.keysDownward = VV)
          }
          get keysLeft() {
            const VV = this.inputs.attached.keyboard;
            return VV ? VV.keysLeft : []
          }
          set keysLeft(VV) {
            const eV = this.inputs.attached.keyboard;
            eV && (eV.keysLeft = VV)
          }
          get keysRight() {
            const VV = this.inputs.attached.keyboard;
            return VV ? VV.keysRight : []
          }
          set keysRight(VV) {
            const eV = this.inputs.attached.keyboard;
            eV && (eV.keysRight = VV)
          }
          get keysRotateLeft() {
            const VV = this.inputs.attached.keyboard;
            return VV ? VV.keysRotateLeft : []
          }
          set keysRotateLeft(VV) {
            const eV = this.inputs.attached.keyboard;
            eV && (eV.keysRotateLeft = VV)
          }
          get keysRotateRight() {
            const VV = this.inputs.attached.keyboard;
            return VV ? VV.keysRotateRight : []
          }
          set keysRotateRight(VV) {
            const eV = this.inputs.attached.keyboard;
            eV && (eV.keysRotateRight = VV)
          }
          get keysRotateUp() {
            const VV = this.inputs.attached.keyboard;
            return VV ? VV.keysRotateUp : []
          }
          set keysRotateUp(VV) {
            const eV = this.inputs.attached.keyboard;
            eV && (eV.keysRotateUp = VV)
          }
          get keysRotateDown() {
            const VV = this.inputs.attached.keyboard;
            return VV ? VV.keysRotateDown : []
          }
          set keysRotateDown(VV) {
            const eV = this.inputs.attached.keyboard;
            eV && (eV.keysRotateDown = VV)
          }
          constructor(VV, eV, xV) {
            var YV;
            super(VV, eV, xV, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), YV = this, this.ellipsoid = (0, JV.l)(this, ZV, new UV.o(.5, 1, .5)), this.ellipsoidOffset = ((0, JV.l)(this, vV), (0, JV.l)(this, rV, new UV.o(0, 0, 0))), this.checkCollisions = ((0, JV.l)(this, kV), (0, JV.l)(this, bV, !1)), this.applyGravity = ((0, JV.l)(this, EV), (0, JV.l)(this, BV, !1)), this.inputs = (0, JV.l)(this, jV), this._needMoveForGravity = !1, this._oldPosition = UV.o.Zero(), this._diffPosition = UV.o.Zero(), this._newPosition = UV.o.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(VV, eV) {
              let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              YV._newPosition.iG(eV), YV._newPosition.subtractToRef(YV._oldPosition, YV._diffPosition), YV._diffPosition.length() > AV.d.CollisionsEpsilon && (YV.position.addToRef(YV._diffPosition, YV._deferredPositionUpdate), YV._deferOnly ? YV._deferredUpdated = !0 : YV.position.iG(YV._deferredPositionUpdate), YV.hv && xV && YV.hv(xV))
            }, this.inputs = new PV(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(VV, eV) {
            eV = nV.j.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(eV)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new UV.o(0, 0, 0), this.cameraRotation = new UV.n(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(VV) {
            this._collisionMask = isNaN(VV) ? -1 : VV
          }
          _collideWithWorld(VV) {
            let eV;
            eV = this.parent ? UV.o.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, eV.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const xV = this.dD().collisionCoordinator;
            this._collider || (this._collider = xV.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let JV = VV;
            this.applyGravity && (JV = VV.add(this.dD().gravity)), xV.getNewPosition(this._oldPosition, JV, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = UV.o.Zero(), this._transformedDirection = UV.o.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(VV) {
            this._needMoveForGravity = VV
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.dD().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(wV[Symbol.metadata] ?? null) : void 0;
          eV = [(0, YV.I)()], xV = [(0, YV.I)()], pV = [(0, YV.J)()], QV = [(0, YV.J)()], (0, JV.i)(null, null, eV, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: VV => "ellipsoid" in VV,
              get: VV => VV.ellipsoid,
              set: (VV, eV) => {
                VV.ellipsoid = eV
              }
            },
            metadata: UV
          }, ZV, vV), (0, JV.i)(null, null, xV, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: VV => "ellipsoidOffset" in VV,
              get: VV => VV.ellipsoidOffset,
              set: (VV, eV) => {
                VV.ellipsoidOffset = eV
              }
            },
            metadata: UV
          }, rV, kV), (0, JV.i)(null, null, pV, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: VV => "checkCollisions" in VV,
              get: VV => VV.checkCollisions,
              set: (VV, eV) => {
                VV.checkCollisions = eV
              }
            },
            metadata: UV
          }, bV, EV), (0, JV.i)(null, null, QV, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: VV => "applyGravity" in VV,
              get: VV => VV.applyGravity,
              set: (VV, eV) => {
                VV.applyGravity = eV
              }
            },
            metadata: UV
          }, BV, jV), UV && Object.defineProperty(VV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UV
          })
        })(), VV
      })(),
      MV = !1;
    MV || (MV = !0, (0, NV.d)("BABYLON.FreeCamera", XV))
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);
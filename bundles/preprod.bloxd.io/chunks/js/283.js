export const id = 283;
export const ids = [283];
export const modules = {
  41313: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => tM
    });
    var OM = iM(41099),
      SM = iM(41105),
      jM = iM(38040),
      aM = iM(41320),
      PM = iM(41354),
      nM = iM(41287),
      QM = iM(41205);
    let zM = (() => {
      var MM;
      let rM, iM, aM, PM, zM, LM, mM, HM, hM, JM, dM, yM = [],
        lM = [],
        EM = [],
        UM = [],
        GM = [],
        CM = [],
        eM = [],
        bM = [],
        wM = [],
        tM = [],
        gM = [],
        uM = [],
        RM = [],
        pM = [],
        WM = [],
        sM = [],
        DM = [],
        kM = [],
        ZM = [],
        oM = [],
        fM = [],
        YM = [];
      return MM = class {
        constructor() {
          this.keysUp = (0, OM.m)(this, yM, [38]), this.keysUpward = ((0, OM.m)(this, lM), (0, OM.m)(this, EM, [33])), this.keysDown = ((0, OM.m)(this, UM), (0, OM.m)(this, GM, [40])), this.keysDownward = ((0, OM.m)(this, CM), (0, OM.m)(this, eM, [34])), this.keysLeft = ((0, OM.m)(this, bM), (0, OM.m)(this, wM, [37])), this.keysRight = ((0, OM.m)(this, tM), (0, OM.m)(this, gM, [39])), this.rotationSpeed = ((0, OM.m)(this, uM), (0, OM.m)(this, RM, .5)), this.keysRotateLeft = ((0, OM.m)(this, pM), (0, OM.m)(this, WM, [])), this.keysRotateRight = ((0, OM.m)(this, sM), (0, OM.m)(this, DM, [])), this.keysRotateUp = ((0, OM.m)(this, kM), (0, OM.m)(this, ZM, [])), this.keysRotateDown = ((0, OM.m)(this, oM), (0, OM.m)(this, fM, [])), this._keys = ((0, OM.m)(this, YM), new Array)
        }
        attachControl(MM) {
          MM = QM.e.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Hk(), this._engine = this._scene.ph(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((rM => {
            const iM = rM.event;
            if (!iM.metaKey)
              if (rM.type === nM.b.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(iM.keyCode) || -1 !== this.keysDown.indexOf(iM.keyCode) || -1 !== this.keysLeft.indexOf(iM.keyCode) || -1 !== this.keysRight.indexOf(iM.keyCode) || -1 !== this.keysUpward.indexOf(iM.keyCode) || -1 !== this.keysDownward.indexOf(iM.keyCode) || -1 !== this.keysRotateLeft.indexOf(iM.keyCode) || -1 !== this.keysRotateRight.indexOf(iM.keyCode) || -1 !== this.keysRotateUp.indexOf(iM.keyCode) || -1 !== this.keysRotateDown.indexOf(iM.keyCode)) {
                  -1 === this._keys.indexOf(iM.keyCode) && this._keys.push(iM.keyCode), MM || iM.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(iM.keyCode) || -1 !== this.keysDown.indexOf(iM.keyCode) || -1 !== this.keysLeft.indexOf(iM.keyCode) || -1 !== this.keysRight.indexOf(iM.keyCode) || -1 !== this.keysUpward.indexOf(iM.keyCode) || -1 !== this.keysDownward.indexOf(iM.keyCode) || -1 !== this.keysRotateLeft.indexOf(iM.keyCode) || -1 !== this.keysRotateRight.indexOf(iM.keyCode) || -1 !== this.keysRotateUp.indexOf(iM.keyCode) || -1 !== this.keysRotateDown.indexOf(iM.keyCode)) {
              const rM = this._keys.indexOf(iM.keyCode);
              rM >= 0 && this._keys.splice(rM, 1), MM || iM.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const MM = this.camera,
              rM = MM.movement.input,
              iM = rM.getEntry("keyboard", "translate"),
              OM = rM.getEntry("keyboard", "rotate"),
              SM = OM?.sensitivity ?? 1,
              aM = MM._localDirection.iMM(0, 0, 0);
            for (let jM = 0; jM < this._keys.length; jM++) {
              const rM = this._keys[jM]; - 1 !== this.keysLeft.indexOf(rM) ? aM.x -= 1 : -1 !== this.keysUp.indexOf(rM) ? aM.z += 1 : -1 !== this.keysRight.indexOf(rM) ? aM.x += 1 : -1 !== this.keysDown.indexOf(rM) ? aM.z -= 1 : -1 !== this.keysUpward.indexOf(rM) ? aM.y += 1 : -1 !== this.keysDownward.indexOf(rM) ? aM.y -= 1 : -1 !== this.keysRotateLeft.indexOf(rM) ? OM && (MM.cameraRotation.y -= this._getLocalRotation() * SM) : -1 !== this.keysRotateRight.indexOf(rM) ? OM && (MM.cameraRotation.y += this._getLocalRotation() * SM) : -1 !== this.keysRotateUp.indexOf(rM) ? OM && (MM.cameraRotation.x -= this._getLocalRotation() * SM) : -1 !== this.keysRotateDown.indexOf(rM) && OM && (MM.cameraRotation.x += this._getLocalRotation() * SM)
            }
            if (iM && (0 !== aM.x || 0 !== aM.y || 0 !== aM.z)) {
              const rM = MM._computeLocalCameraSpeed() * (iM.sensitivity ?? 1);
              aM.normalize().scaleInPlace(rM), MM.Hk().useRightHandedSystem && (aM.z *= -1), MM.getViewMatrix().invertToRef(MM._cameraTransformMatrix), jM.q.TransformNormalToRef(aM, MM._cameraTransformMatrix, MM._transformedDirection), MM.cameraDirection.addInPlace(MM._transformedDirection)
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
          const MM = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * MM
        }
      }, (() => {
        const jM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rM = [(0, SM.L)()], iM = [(0, SM.L)()], aM = [(0, SM.L)()], PM = [(0, SM.L)()], zM = [(0, SM.L)()], LM = [(0, SM.L)()], mM = [(0, SM.L)()], HM = [(0, SM.L)()], hM = [(0, SM.L)()], JM = [(0, SM.L)()], dM = [(0, SM.L)()], (0, OM.i)(null, null, rM, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: MM => "keysUp" in MM,
            get: MM => MM.keysUp,
            set: (MM, rM) => {
              MM.keysUp = rM
            }
          },
          metadata: jM
        }, yM, lM), (0, OM.i)(null, null, iM, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: MM => "keysUpward" in MM,
            get: MM => MM.keysUpward,
            set: (MM, rM) => {
              MM.keysUpward = rM
            }
          },
          metadata: jM
        }, EM, UM), (0, OM.i)(null, null, aM, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: MM => "keysDown" in MM,
            get: MM => MM.keysDown,
            set: (MM, rM) => {
              MM.keysDown = rM
            }
          },
          metadata: jM
        }, GM, CM), (0, OM.i)(null, null, PM, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: MM => "keysDownward" in MM,
            get: MM => MM.keysDownward,
            set: (MM, rM) => {
              MM.keysDownward = rM
            }
          },
          metadata: jM
        }, eM, bM), (0, OM.i)(null, null, zM, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: MM => "keysLeft" in MM,
            get: MM => MM.keysLeft,
            set: (MM, rM) => {
              MM.keysLeft = rM
            }
          },
          metadata: jM
        }, wM, tM), (0, OM.i)(null, null, LM, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: MM => "keysRight" in MM,
            get: MM => MM.keysRight,
            set: (MM, rM) => {
              MM.keysRight = rM
            }
          },
          metadata: jM
        }, gM, uM), (0, OM.i)(null, null, mM, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: MM => "rotationSpeed" in MM,
            get: MM => MM.rotationSpeed,
            set: (MM, rM) => {
              MM.rotationSpeed = rM
            }
          },
          metadata: jM
        }, RM, pM), (0, OM.i)(null, null, HM, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: MM => "keysRotateLeft" in MM,
            get: MM => MM.keysRotateLeft,
            set: (MM, rM) => {
              MM.keysRotateLeft = rM
            }
          },
          metadata: jM
        }, WM, sM), (0, OM.i)(null, null, hM, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: MM => "keysRotateRight" in MM,
            get: MM => MM.keysRotateRight,
            set: (MM, rM) => {
              MM.keysRotateRight = rM
            }
          },
          metadata: jM
        }, DM, kM), (0, OM.i)(null, null, JM, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: MM => "keysRotateUp" in MM,
            get: MM => MM.keysRotateUp,
            set: (MM, rM) => {
              MM.keysRotateUp = rM
            }
          },
          metadata: jM
        }, ZM, oM), (0, OM.i)(null, null, dM, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: MM => "keysRotateDown" in MM,
            get: MM => MM.keysRotateDown,
            set: (MM, rM) => {
              MM.keysRotateDown = rM
            }
          },
          metadata: jM
        }, fM, YM), jM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jM
        })
      })(), MM
    })();
    PM.c.FreeCameraKeyboardMoveInput = zM;
    var LM = iM(38068),
      mM = iM(41283);
    let HM = (() => {
      var MM;
      let rM, iM, jM = [],
        aM = [],
        PM = [],
        nM = [];
      return MM = class {
        _applyPointerRotation(MM, rM) {
          this._pointerConditions.button = this._currentActiveButton;
          const iM = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!iM || "rotate" !== iM.interaction) return;
          const OM = iM.yI ?? iM.sensitivity ?? 1 / this.angularSensibility,
            SM = iM.pI ?? iM.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += MM * OM, this.camera.cameraRotation.x += rM * SM
        }
        constructor() {
          let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = MM, this.buttons = (0, OM.m)(this, jM, [0, 1, 2]), this.angularSensibility = ((0, OM.m)(this, aM), (0, OM.m)(this, PM, 2e3)), this._pointerInput = (0, OM.m)(this, nM), this._previousPosition = null, this.onPointerMovedObservable = new LM.d, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(MM) {
          MM = QM.e.BackCompatCameraNoPreventDefault(arguments);
          const rM = this.camera.ph(),
            iM = rM.getInputElement();
          this._pointerInput || (this._pointerInput = OM => {
            const SM = OM.event,
              jM = "touch" === SM.pointerType;
            if (!this.touchEnabled && jM) return;
            if (OM.type !== mM.d.POINTERMOVE && -1 === this.buttons.indexOf(SM.button)) return;
            const aM = SM.target;
            if (OM.type === mM.d.POINTERDOWN) {
              if (jM && -1 !== this._activePointerId || !jM && -1 !== this._currentActiveButton) return;
              this._activePointerId = SM.pointerId;
              try {
                aM?.setPointerCapture(SM.pointerId)
              } catch (PM) {} - 1 === this._currentActiveButton && (this._currentActiveButton = SM.button), this._previousPosition = {
                x: SM.clientX,
                y: SM.clientY
              }, MM || (SM.preventDefault(), iM && iM.focus()), rM.isPointerLock && this._onMouseMove && this._onMouseMove(OM.event)
            } else if (OM.type === mM.d.POINTERUP) {
              if (jM && this._activePointerId !== SM.pointerId || !jM && this._currentActiveButton !== SM.button) return;
              try {
                aM?.releasePointerCapture(SM.pointerId)
              } catch (PM) {}
              this._currentActiveButton = -1, this._previousPosition = null, MM || SM.preventDefault(), this._activePointerId = -1
            } else if (OM.type === mM.d.POINTERMOVE && (this._activePointerId === SM.pointerId || !jM))
              if (rM.isPointerLock && this._onMouseMove) this._onMouseMove(OM.event);
              else if (this._previousPosition) {
              const rM = this.camera._calculateHandednessMultiplier(),
                iM = (SM.clientX - this._previousPosition.x) * rM,
                OM = (SM.clientY - this._previousPosition.y) * rM;
              this._allowCameraRotation && this._applyPointerRotation(iM, OM), this.onPointerMovedObservable.notifyObservers({
                offsetX: iM,
                offsetY: OM
              }), this._previousPosition = {
                x: SM.clientX,
                y: SM.clientY
              }, MM || SM.preventDefault()
            }
          }), this._onMouseMove = iM => {
            if (!rM.isPointerLock) return;
            const OM = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(iM.movementX * OM, iM.movementY * OM), this._previousPosition = null, MM || iM.preventDefault()
          }, this._observer = this.camera.Hk()._inputManager._addCameraPointerObserver(this._pointerInput, mM.d.POINTERDOWN | mM.d.POINTERUP | mM.d.POINTERMOVE), iM && (this._contextMenuBind = MM => this.onContextMenu(MM), iM.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(MM) {
          MM.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.Hk()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const MM = this.camera.ph().getInputElement();
              MM && MM.removeEventListener("contextmenu", this._contextMenuBind)
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
        const QM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rM = [(0, SM.L)()], iM = [(0, SM.L)()], (0, OM.i)(null, null, rM, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: MM => "buttons" in MM,
            get: MM => MM.buttons,
            set: (MM, rM) => {
              MM.buttons = rM
            }
          },
          metadata: QM
        }, jM, aM), (0, OM.i)(null, null, iM, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: MM => "angularSensibility" in MM,
            get: MM => MM.angularSensibility,
            set: (MM, rM) => {
              MM.angularSensibility = rM
            }
          },
          metadata: QM
        }, PM, nM), QM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: QM
        })
      })(), MM
    })();
    PM.c.FreeCameraMouseInput = HM;
    var hM = iM(41295);
    let JM = (() => {
      var MM;
      let rM, iM, jM, aM = [],
        PM = [],
        nM = [],
        zM = [],
        HM = [],
        JM = [];
      return MM = class {
        constructor() {
          this.wheelPrecisionX = (0, OM.m)(this, aM, 3), this.wheelPrecisionY = ((0, OM.m)(this, PM), (0, OM.m)(this, nM, 3)), this.wheelPrecisionZ = ((0, OM.m)(this, zM), (0, OM.m)(this, HM, 3)), this.onChangedObservable = ((0, OM.m)(this, JM), new LM.d), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(MM) {
          MM = QM.e.BackCompatCameraNoPreventDefault(arguments), this._wheel = rM => {
            if (rM.type !== mM.d.POINTERWHEEL) return;
            const iM = rM.event,
              OM = iM.deltaMode === hM.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * OM * iM.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * OM * iM.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * OM * iM.deltaZ / this._normalize, iM.preventDefault && (MM || iM.preventDefault())
          }, this._observer = this.camera.Hk()._inputManager._addCameraPointerObserver(this._wheel, mM.d.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.Hk()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const QM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rM = [(0, SM.L)()], iM = [(0, SM.L)()], jM = [(0, SM.L)()], (0, OM.i)(null, null, rM, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: MM => "wheelPrecisionX" in MM,
            get: MM => MM.wheelPrecisionX,
            set: (MM, rM) => {
              MM.wheelPrecisionX = rM
            }
          },
          metadata: QM
        }, aM, PM), (0, OM.i)(null, null, iM, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: MM => "wheelPrecisionY" in MM,
            get: MM => MM.wheelPrecisionY,
            set: (MM, rM) => {
              MM.wheelPrecisionY = rM
            }
          },
          metadata: QM
        }, nM, zM), (0, OM.i)(null, null, jM, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: MM => "wheelPrecisionZ" in MM,
            get: MM => MM.wheelPrecisionZ,
            set: (MM, rM) => {
              MM.wheelPrecisionZ = rM
            }
          },
          metadata: QM
        }, HM, JM), QM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: QM
        })
      })(), MM
    })();
    var dM;
    ! function(MM) {
      MM[MM.MoveRelative = 0] = "MoveRelative", MM[MM.RotateRelative = 1] = "RotateRelative", MM[MM.MoveScene = 2] = "MoveScene"
    }(dM || (dM = {}));
    let yM = (() => {
      var MM;
      let rM, iM, aM, PM, nM, QM, zM, LM, mM, HM = JM,
        hM = [];
      return MM = class extends HM {
        constructor() {
          super(...arguments), this.camera = (0, OM.m)(this, hM), this._moveRelative = jM.q.Zero(), this._rotateRelative = jM.q.Zero(), this._moveScene = jM.q.Zero(), this._wheelXAction = dM.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = dM.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(MM) {
          null === MM && this._wheelXAction !== dM.MoveRelative || (this._wheelXAction = dM.MoveRelative, this._wheelXActionCoordinate = MM)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== dM.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(MM) {
          null === MM && this._wheelYAction !== dM.MoveRelative || (this._wheelYAction = dM.MoveRelative, this._wheelYActionCoordinate = MM)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== dM.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(MM) {
          null === MM && this._wheelZAction !== dM.MoveRelative || (this._wheelZAction = dM.MoveRelative, this._wheelZActionCoordinate = MM)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== dM.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(MM) {
          null === MM && this._wheelXAction !== dM.RotateRelative || (this._wheelXAction = dM.RotateRelative, this._wheelXActionCoordinate = MM)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== dM.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(MM) {
          null === MM && this._wheelYAction !== dM.RotateRelative || (this._wheelYAction = dM.RotateRelative, this._wheelYActionCoordinate = MM)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== dM.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(MM) {
          null === MM && this._wheelZAction !== dM.RotateRelative || (this._wheelZAction = dM.RotateRelative, this._wheelZActionCoordinate = MM)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== dM.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(MM) {
          null === MM && this._wheelXAction !== dM.MoveScene || (this._wheelXAction = dM.MoveScene, this._wheelXActionCoordinate = MM)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== dM.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(MM) {
          null === MM && this._wheelYAction !== dM.MoveScene || (this._wheelYAction = dM.MoveScene, this._wheelYActionCoordinate = MM)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== dM.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(MM) {
          null === MM && this._wheelZAction !== dM.MoveScene || (this._wheelZAction = dM.MoveScene, this._wheelZActionCoordinate = MM)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== dM.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.P_(0), this._rotateRelative.P_(0), this._moveScene.P_(0), this._updateCamera(), this.camera.Hk().useRightHandedSystem && (this._moveRelative.z *= -1);
          const MM = jM.d.Zero();
          this.camera.getViewMatrix().invertToRef(MM);
          const rM = jM.q.Zero();
          jM.q.TransformNormalToRef(this._moveRelative, MM, rM), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(rM), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(MM, rM, iM) {
          if (0 === MM) return;
          if (null === rM || null === iM) return;
          let OM = null;
          switch (rM) {
            case dM.MoveRelative:
              OM = this._moveRelative;
              break;
            case dM.RotateRelative:
              OM = this._rotateRelative;
              break;
            case dM.MoveScene:
              OM = this._moveScene
          }
          switch (iM) {
            case 0:
              OM.set(MM, 0, 0);
              break;
            case 1:
              OM.set(0, MM, 0);
              break;
            case 2:
              OM.set(0, 0, MM)
          }
        }
      }, (() => {
        const jM = "function" === typeof Symbol && Symbol.metadata ? Object.create(HM[Symbol.metadata] ?? null) : void 0;
        rM = [(0, SM.L)()], iM = [(0, SM.L)()], aM = [(0, SM.L)()], PM = [(0, SM.L)()], nM = [(0, SM.L)()], QM = [(0, SM.L)()], zM = [(0, SM.L)()], LM = [(0, SM.L)()], mM = [(0, SM.L)()], (0, OM.i)(MM, null, rM, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: MM => "wheelXMoveRelative" in MM,
            set: (MM, rM) => {
              MM.wheelXMoveRelative = rM
            }
          },
          metadata: jM
        }, null, hM), (0, OM.i)(MM, null, iM, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: MM => "wheelYMoveRelative" in MM,
            set: (MM, rM) => {
              MM.wheelYMoveRelative = rM
            }
          },
          metadata: jM
        }, null, hM), (0, OM.i)(MM, null, aM, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: MM => "wheelZMoveRelative" in MM,
            set: (MM, rM) => {
              MM.wheelZMoveRelative = rM
            }
          },
          metadata: jM
        }, null, hM), (0, OM.i)(MM, null, PM, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: MM => "wheelXRotateRelative" in MM,
            set: (MM, rM) => {
              MM.wheelXRotateRelative = rM
            }
          },
          metadata: jM
        }, null, hM), (0, OM.i)(MM, null, nM, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: MM => "wheelYRotateRelative" in MM,
            set: (MM, rM) => {
              MM.wheelYRotateRelative = rM
            }
          },
          metadata: jM
        }, null, hM), (0, OM.i)(MM, null, QM, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: MM => "wheelZRotateRelative" in MM,
            set: (MM, rM) => {
              MM.wheelZRotateRelative = rM
            }
          },
          metadata: jM
        }, null, hM), (0, OM.i)(MM, null, zM, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: MM => "wheelXMoveScene" in MM,
            set: (MM, rM) => {
              MM.wheelXMoveScene = rM
            }
          },
          metadata: jM
        }, null, hM), (0, OM.i)(MM, null, LM, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: MM => "wheelYMoveScene" in MM,
            set: (MM, rM) => {
              MM.wheelYMoveScene = rM
            }
          },
          metadata: jM
        }, null, hM), (0, OM.i)(MM, null, mM, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: MM => "wheelZMoveScene" in MM,
            set: (MM, rM) => {
              MM.wheelZMoveScene = rM
            }
          },
          metadata: jM
        }, null, hM), jM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jM
        })
      })(), MM
    })();
    PM.c.FreeCameraMouseWheelInput = yM;
    let lM = (() => {
      var MM;
      let rM, iM, aM = [],
        PM = [],
        nM = [],
        zM = [];
      return MM = class {
        constructor() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = MM, this.touchAngularSensibility = (0, OM.m)(this, aM, 2e5), this.touchMoveSensibility = ((0, OM.m)(this, PM), (0, OM.m)(this, nM, 250)), this.singleFingerRotate = ((0, OM.m)(this, zM), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = QM.e.IsSafari()
        }
        attachControl(MM) {
          MM = QM.e.BackCompatCameraNoPreventDefault(arguments);
          let rM = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = iM => {
              const OM = iM.event,
                SM = "mouse" === OM.pointerType || this._isSafari && "undefined" === typeof OM.pointerType;
              if (this.allowMouse || !SM)
                if (iM.type === mM.d.POINTERDOWN) {
                  if (MM || OM.preventDefault(), this._pointerPressed.push(OM.pointerId), 1 !== this._pointerPressed.length) return;
                  rM = {
                    x: OM.clientX,
                    y: OM.clientY
                  }
                } else if (iM.type === mM.d.POINTERUP) {
                MM || OM.preventDefault();
                const iM = this._pointerPressed.indexOf(OM.pointerId);
                if (-1 === iM) return;
                if (this._pointerPressed.splice(iM, 1), 0 != iM) return;
                rM = null, this._offsetX = null, this._offsetY = null
              } else if (iM.type === mM.d.POINTERMOVE) {
                if (MM || OM.preventDefault(), !rM) return;
                if (0 != this._pointerPressed.indexOf(OM.pointerId)) return;
                this._offsetX = OM.clientX - rM.x, this._offsetY = -(OM.clientY - rM.y)
              }
            }), this._observer = this.camera.Hk()._inputManager._addCameraPointerObserver(this._pointerInput, mM.d.POINTERDOWN | mM.d.POINTERUP | mM.d.POINTERMOVE), this._onLostFocus) {
            const MM = this.camera.ph().getInputElement();
            MM && MM.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.Hk()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const MM = this.camera.ph().getInputElement();
              MM && MM.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const MM = this.camera,
            rM = MM.movement.input,
            iM = rM.getEntry("touch", "rotate"),
            OM = rM.getEntry("touch", "translate"),
            SM = MM._calculateHandednessMultiplier(),
            aM = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (iM) {
            const rM = iM.sensitivity ?? 1 / this.touchAngularSensibility;
            MM.cameraRotation.y = this._offsetX * SM * rM, aM && (MM.cameraRotation.x = -this._offsetY * SM * rM)
          }
          if (!aM && OM) {
            const rM = MM._computeLocalCameraSpeed(),
              iM = OM.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              SM = jM.l.sh[0];
            SM.iMM(0, 0, rM * this._offsetY * iM), jM.d.RotationYawPitchRollToRef(MM.rotation.y, MM.rotation.x, 0, MM._cameraRotationMatrix), jM.q.TransformCoordinatesToRef(SM, MM._cameraRotationMatrix, SM), MM.cameraDirection.addInPlace(SM)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const jM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rM = [(0, SM.L)()], iM = [(0, SM.L)()], (0, OM.i)(null, null, rM, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: MM => "touchAngularSensibility" in MM,
            get: MM => MM.touchAngularSensibility,
            set: (MM, rM) => {
              MM.touchAngularSensibility = rM
            }
          },
          metadata: jM
        }, aM, PM), (0, OM.i)(null, null, iM, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: MM => "touchMoveSensibility" in MM,
            get: MM => MM.touchMoveSensibility,
            set: (MM, rM) => {
              MM.touchMoveSensibility = rM
            }
          },
          metadata: jM
        }, nM, zM), jM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jM
        })
      })(), MM
    })();
    PM.c.FreeCameraTouchInput = lM;
    var EM, UM, GM, CM = iM(40990);
    class eM extends PM.e {
      constructor(MM) {
        super(MM), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new zM), this
      }
      addMouse() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new HM(MM), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new yM, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new lM), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(EM = eM.prototype).addDeviceOrientation ?? (EM.addDeviceOrientation = (0, CM.j)("FreeCameraInputsManager", "addDeviceOrientation")), (UM = eM.prototype).addVirtualJoystick ?? (UM.addVirtualJoystick = (0, CM.j)("FreeCameraInputsManager", "addVirtualJoystick")), (GM = eM.prototype).addGamepad ?? (GM.addGamepad = (0, CM.j)("FreeCameraInputsManager", "addGamepad"));
    var bM = iM(41005),
      wM = iM(38085);
    let tM = (() => {
        var MM;
        let rM, iM, PM, nM, zM = aM.g,
          LM = [],
          mM = [],
          HM = [],
          hM = [],
          JM = [],
          dM = [],
          yM = [],
          lM = [];
        return MM = class extends zM {
          get angularSensibility() {
            const MM = this.inputs.attached.mouse;
            return MM ? MM.angularSensibility : 0
          }
          set angularSensibility(MM) {
            const rM = this.inputs.attached.mouse;
            rM && (rM.angularSensibility = MM)
          }
          get keysUp() {
            const MM = this.inputs.attached.keyboard;
            return MM ? MM.keysUp : []
          }
          set keysUp(MM) {
            const rM = this.inputs.attached.keyboard;
            rM && (rM.keysUp = MM)
          }
          get keysUpward() {
            const MM = this.inputs.attached.keyboard;
            return MM ? MM.keysUpward : []
          }
          set keysUpward(MM) {
            const rM = this.inputs.attached.keyboard;
            rM && (rM.keysUpward = MM)
          }
          get keysDown() {
            const MM = this.inputs.attached.keyboard;
            return MM ? MM.keysDown : []
          }
          set keysDown(MM) {
            const rM = this.inputs.attached.keyboard;
            rM && (rM.keysDown = MM)
          }
          get keysDownward() {
            const MM = this.inputs.attached.keyboard;
            return MM ? MM.keysDownward : []
          }
          set keysDownward(MM) {
            const rM = this.inputs.attached.keyboard;
            rM && (rM.keysDownward = MM)
          }
          get keysLeft() {
            const MM = this.inputs.attached.keyboard;
            return MM ? MM.keysLeft : []
          }
          set keysLeft(MM) {
            const rM = this.inputs.attached.keyboard;
            rM && (rM.keysLeft = MM)
          }
          get keysRight() {
            const MM = this.inputs.attached.keyboard;
            return MM ? MM.keysRight : []
          }
          set keysRight(MM) {
            const rM = this.inputs.attached.keyboard;
            rM && (rM.keysRight = MM)
          }
          get keysRotateLeft() {
            const MM = this.inputs.attached.keyboard;
            return MM ? MM.keysRotateLeft : []
          }
          set keysRotateLeft(MM) {
            const rM = this.inputs.attached.keyboard;
            rM && (rM.keysRotateLeft = MM)
          }
          get keysRotateRight() {
            const MM = this.inputs.attached.keyboard;
            return MM ? MM.keysRotateRight : []
          }
          set keysRotateRight(MM) {
            const rM = this.inputs.attached.keyboard;
            rM && (rM.keysRotateRight = MM)
          }
          get keysRotateUp() {
            const MM = this.inputs.attached.keyboard;
            return MM ? MM.keysRotateUp : []
          }
          set keysRotateUp(MM) {
            const rM = this.inputs.attached.keyboard;
            rM && (rM.keysRotateUp = MM)
          }
          get keysRotateDown() {
            const MM = this.inputs.attached.keyboard;
            return MM ? MM.keysRotateDown : []
          }
          set keysRotateDown(MM) {
            const rM = this.inputs.attached.keyboard;
            rM && (rM.keysRotateDown = MM)
          }
          constructor(MM, rM, iM) {
            var SM;
            super(MM, rM, iM, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), SM = this, this.ellipsoid = (0, OM.m)(this, LM, new jM.q(.5, 1, .5)), this.ellipsoidOffset = ((0, OM.m)(this, mM), (0, OM.m)(this, HM, new jM.q(0, 0, 0))), this.checkCollisions = ((0, OM.m)(this, hM), (0, OM.m)(this, JM, !1)), this.applyGravity = ((0, OM.m)(this, dM), (0, OM.m)(this, yM, !1)), this.inputs = (0, OM.m)(this, lM), this._needMoveForGravity = !1, this._oldPosition = jM.q.Zero(), this._diffPosition = jM.q.Zero(), this._newPosition = jM.q.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(MM, rM) {
              let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              SM._newPosition.jR(rM), SM._newPosition.subtractToRef(SM._oldPosition, SM._diffPosition), SM._diffPosition.length() > bM.d.CollisionsEpsilon && (SM.position.addToRef(SM._diffPosition, SM._deferredPositionUpdate), SM._deferOnly ? SM._deferredUpdated = !0 : SM.position.jR(SM._deferredPositionUpdate), SM.Rm && iM && SM.Rm(iM))
            }, this.inputs = new eM(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(MM, rM) {
            rM = QM.e.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(rM)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new jM.q(0, 0, 0), this.cameraRotation = new jM.o(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(MM) {
            this._collisionMask = isNaN(MM) ? -1 : MM
          }
          _collideWithWorld(MM) {
            let rM;
            rM = this.parent ? jM.q.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, rM.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const iM = this.Hk().collisionCoordinator;
            this._collider || (this._collider = iM.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let OM = MM;
            this.applyGravity && (OM = MM.add(this.Hk().gravity)), iM.getNewPosition(this._oldPosition, OM, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = jM.q.Zero(), this._transformedDirection = jM.q.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(MM) {
            this._needMoveForGravity = MM
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.Hk().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const jM = "function" === typeof Symbol && Symbol.metadata ? Object.create(zM[Symbol.metadata] ?? null) : void 0;
          rM = [(0, SM.J)()], iM = [(0, SM.J)()], PM = [(0, SM.L)()], nM = [(0, SM.L)()], (0, OM.i)(null, null, rM, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: MM => "ellipsoid" in MM,
              get: MM => MM.ellipsoid,
              set: (MM, rM) => {
                MM.ellipsoid = rM
              }
            },
            metadata: jM
          }, LM, mM), (0, OM.i)(null, null, iM, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: MM => "ellipsoidOffset" in MM,
              get: MM => MM.ellipsoidOffset,
              set: (MM, rM) => {
                MM.ellipsoidOffset = rM
              }
            },
            metadata: jM
          }, HM, hM), (0, OM.i)(null, null, PM, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: MM => "checkCollisions" in MM,
              get: MM => MM.checkCollisions,
              set: (MM, rM) => {
                MM.checkCollisions = rM
              }
            },
            metadata: jM
          }, JM, dM), (0, OM.i)(null, null, nM, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: MM => "applyGravity" in MM,
              get: MM => MM.applyGravity,
              set: (MM, rM) => {
                MM.applyGravity = rM
              }
            },
            metadata: jM
          }, yM, lM), jM && Object.defineProperty(MM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jM
          })
        })(), MM
      })(),
      gM = !1;
    gM || (gM = !0, (0, wM.e)("BABYLON.FreeCamera", tM))
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);
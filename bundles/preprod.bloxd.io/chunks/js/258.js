export const id = 258;
export const ids = [258];
export const modules = {
  40031: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => eC
    });
    var QC = ZC(39811),
      wC = ZC(39818),
      bC = ZC(36963),
      nC = ZC(40035),
      fC = ZC(40069),
      oC = ZC(40001),
      qC = ZC(39913);
    let FC = (() => {
      var CC;
      let zC, ZC, nC, fC, FC, WC, NC, MC, gC, SC, pC, PC = [],
        GC = [],
        RC = [],
        AC = [],
        xC = [],
        JC = [],
        IC = [],
        iC = [],
        vC = [],
        eC = [],
        hC = [],
        KC = [],
        YC = [],
        dC = [],
        mC = [],
        HC = [],
        EC = [],
        lC = [],
        XC = [],
        cC = [],
        uC = [],
        rC = [];
      return CC = class {
        constructor() {
          this.keysUp = (0, QC.n)(this, PC, [38]), this.keysUpward = ((0, QC.n)(this, GC), (0, QC.n)(this, RC, [33])), this.keysDown = ((0, QC.n)(this, AC), (0, QC.n)(this, xC, [40])), this.keysDownward = ((0, QC.n)(this, JC), (0, QC.n)(this, IC, [34])), this.keysLeft = ((0, QC.n)(this, iC), (0, QC.n)(this, vC, [37])), this.keysRight = ((0, QC.n)(this, eC), (0, QC.n)(this, hC, [39])), this.rotationSpeed = ((0, QC.n)(this, KC), (0, QC.n)(this, YC, .5)), this.keysRotateLeft = ((0, QC.n)(this, dC), (0, QC.n)(this, mC, [])), this.keysRotateRight = ((0, QC.n)(this, HC), (0, QC.n)(this, EC, [])), this.keysRotateUp = ((0, QC.n)(this, lC), (0, QC.n)(this, XC, [])), this.keysRotateDown = ((0, QC.n)(this, cC), (0, QC.n)(this, uC, [])), this._keys = ((0, QC.n)(this, rC), new Array)
        }
        attachControl(CC) {
          CC = qC.g.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Km(), this._engine = this._scene.mg(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
            this._keys.length = 0
          })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((zC => {
            const ZC = zC.event;
            if (!ZC.metaKey)
              if (zC.type === oC.c.KEYDOWN) {
                if (-1 !== this.keysUp.indexOf(ZC.keyCode) || -1 !== this.keysDown.indexOf(ZC.keyCode) || -1 !== this.keysLeft.indexOf(ZC.keyCode) || -1 !== this.keysRight.indexOf(ZC.keyCode) || -1 !== this.keysUpward.indexOf(ZC.keyCode) || -1 !== this.keysDownward.indexOf(ZC.keyCode) || -1 !== this.keysRotateLeft.indexOf(ZC.keyCode) || -1 !== this.keysRotateRight.indexOf(ZC.keyCode) || -1 !== this.keysRotateUp.indexOf(ZC.keyCode) || -1 !== this.keysRotateDown.indexOf(ZC.keyCode)) {
                  -1 === this._keys.indexOf(ZC.keyCode) && this._keys.push(ZC.keyCode), CC || ZC.preventDefault()
                }
              } else if (-1 !== this.keysUp.indexOf(ZC.keyCode) || -1 !== this.keysDown.indexOf(ZC.keyCode) || -1 !== this.keysLeft.indexOf(ZC.keyCode) || -1 !== this.keysRight.indexOf(ZC.keyCode) || -1 !== this.keysUpward.indexOf(ZC.keyCode) || -1 !== this.keysDownward.indexOf(ZC.keyCode) || -1 !== this.keysRotateLeft.indexOf(ZC.keyCode) || -1 !== this.keysRotateRight.indexOf(ZC.keyCode) || -1 !== this.keysRotateUp.indexOf(ZC.keyCode) || -1 !== this.keysRotateDown.indexOf(ZC.keyCode)) {
              const zC = this._keys.indexOf(ZC.keyCode);
              zC >= 0 && this._keys.splice(zC, 1), CC || ZC.preventDefault()
            }
          })))
        }
        detachControl() {
          this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserver = null), this._keys.length = 0
        }
        checkInputs() {
          if (this._onKeyboardObserver) {
            const CC = this.camera,
              zC = CC.movement.input,
              ZC = zC.getEntry("keyboard", "translate"),
              QC = zC.getEntry("keyboard", "rotate"),
              wC = QC?.sensitivity ?? 1,
              nC = CC._localDirection.L_(0, 0, 0);
            for (let bC = 0; bC < this._keys.length; bC++) {
              const zC = this._keys[bC]; - 1 !== this.keysLeft.indexOf(zC) ? nC.x -= 1 : -1 !== this.keysUp.indexOf(zC) ? nC.z += 1 : -1 !== this.keysRight.indexOf(zC) ? nC.x += 1 : -1 !== this.keysDown.indexOf(zC) ? nC.z -= 1 : -1 !== this.keysUpward.indexOf(zC) ? nC.y += 1 : -1 !== this.keysDownward.indexOf(zC) ? nC.y -= 1 : -1 !== this.keysRotateLeft.indexOf(zC) ? QC && (CC.cameraRotation.y -= this._getLocalRotation() * wC) : -1 !== this.keysRotateRight.indexOf(zC) ? QC && (CC.cameraRotation.y += this._getLocalRotation() * wC) : -1 !== this.keysRotateUp.indexOf(zC) ? QC && (CC.cameraRotation.x -= this._getLocalRotation() * wC) : -1 !== this.keysRotateDown.indexOf(zC) && QC && (CC.cameraRotation.x += this._getLocalRotation() * wC)
            }
            if (ZC && (0 !== nC.x || 0 !== nC.y || 0 !== nC.z)) {
              const zC = CC._computeLocalCameraSpeed() * (ZC.sensitivity ?? 1);
              nC.normalize().scaleInPlace(zC), CC.Km().useRightHandedSystem && (nC.z *= -1), CC.getViewMatrix().invertToRef(CC._cameraTransformMatrix), bC.r.TransformNormalToRef(nC, CC._cameraTransformMatrix, CC._transformedDirection), CC.cameraDirection.addInPlace(CC._transformedDirection)
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
          const CC = this.camera._calculateHandednessMultiplier();
          return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * CC
        }
      }, (() => {
        const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zC = [(0, wC.M)()], ZC = [(0, wC.M)()], nC = [(0, wC.M)()], fC = [(0, wC.M)()], FC = [(0, wC.M)()], WC = [(0, wC.M)()], NC = [(0, wC.M)()], MC = [(0, wC.M)()], gC = [(0, wC.M)()], SC = [(0, wC.M)()], pC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
          kind: "field",
          name: "keysUp",
          static: !1,
          private: !1,
          access: {
            has: CC => "keysUp" in CC,
            get: CC => CC.keysUp,
            set: (CC, zC) => {
              CC.keysUp = zC
            }
          },
          metadata: bC
        }, PC, GC), (0, QC.j)(null, null, ZC, {
          kind: "field",
          name: "keysUpward",
          static: !1,
          private: !1,
          access: {
            has: CC => "keysUpward" in CC,
            get: CC => CC.keysUpward,
            set: (CC, zC) => {
              CC.keysUpward = zC
            }
          },
          metadata: bC
        }, RC, AC), (0, QC.j)(null, null, nC, {
          kind: "field",
          name: "keysDown",
          static: !1,
          private: !1,
          access: {
            has: CC => "keysDown" in CC,
            get: CC => CC.keysDown,
            set: (CC, zC) => {
              CC.keysDown = zC
            }
          },
          metadata: bC
        }, xC, JC), (0, QC.j)(null, null, fC, {
          kind: "field",
          name: "keysDownward",
          static: !1,
          private: !1,
          access: {
            has: CC => "keysDownward" in CC,
            get: CC => CC.keysDownward,
            set: (CC, zC) => {
              CC.keysDownward = zC
            }
          },
          metadata: bC
        }, IC, iC), (0, QC.j)(null, null, FC, {
          kind: "field",
          name: "keysLeft",
          static: !1,
          private: !1,
          access: {
            has: CC => "keysLeft" in CC,
            get: CC => CC.keysLeft,
            set: (CC, zC) => {
              CC.keysLeft = zC
            }
          },
          metadata: bC
        }, vC, eC), (0, QC.j)(null, null, WC, {
          kind: "field",
          name: "keysRight",
          static: !1,
          private: !1,
          access: {
            has: CC => "keysRight" in CC,
            get: CC => CC.keysRight,
            set: (CC, zC) => {
              CC.keysRight = zC
            }
          },
          metadata: bC
        }, hC, KC), (0, QC.j)(null, null, NC, {
          kind: "field",
          name: "rotationSpeed",
          static: !1,
          private: !1,
          access: {
            has: CC => "rotationSpeed" in CC,
            get: CC => CC.rotationSpeed,
            set: (CC, zC) => {
              CC.rotationSpeed = zC
            }
          },
          metadata: bC
        }, YC, dC), (0, QC.j)(null, null, MC, {
          kind: "field",
          name: "keysRotateLeft",
          static: !1,
          private: !1,
          access: {
            has: CC => "keysRotateLeft" in CC,
            get: CC => CC.keysRotateLeft,
            set: (CC, zC) => {
              CC.keysRotateLeft = zC
            }
          },
          metadata: bC
        }, mC, HC), (0, QC.j)(null, null, gC, {
          kind: "field",
          name: "keysRotateRight",
          static: !1,
          private: !1,
          access: {
            has: CC => "keysRotateRight" in CC,
            get: CC => CC.keysRotateRight,
            set: (CC, zC) => {
              CC.keysRotateRight = zC
            }
          },
          metadata: bC
        }, EC, lC), (0, QC.j)(null, null, SC, {
          kind: "field",
          name: "keysRotateUp",
          static: !1,
          private: !1,
          access: {
            has: CC => "keysRotateUp" in CC,
            get: CC => CC.keysRotateUp,
            set: (CC, zC) => {
              CC.keysRotateUp = zC
            }
          },
          metadata: bC
        }, XC, cC), (0, QC.j)(null, null, pC, {
          kind: "field",
          name: "keysRotateDown",
          static: !1,
          private: !1,
          access: {
            has: CC => "keysRotateDown" in CC,
            get: CC => CC.keysRotateDown,
            set: (CC, zC) => {
              CC.keysRotateDown = zC
            }
          },
          metadata: bC
        }, uC, rC), bC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bC
        })
      })(), CC
    })();
    fC.e.FreeCameraKeyboardMoveInput = FC;
    var WC = ZC(36987),
      NC = ZC(39993);
    let MC = (() => {
      var CC;
      let zC, ZC, bC = [],
        nC = [],
        fC = [],
        oC = [];
      return CC = class {
        _applyPointerRotation(CC, zC) {
          this._pointerConditions.button = this._currentActiveButton;
          const ZC = this.camera.movement.input.resolveInteraction("pointer", this._pointerConditions);
          if (!ZC || "rotate" !== ZC.interaction) return;
          const QC = ZC.fL ?? ZC.sensitivity ?? 1 / this.angularSensibility,
            wC = ZC.qL ?? ZC.sensitivity ?? 1 / this.angularSensibility;
          this.camera.cameraRotation.y += CC * QC, this.camera.cameraRotation.x += zC * wC
        }
        constructor() {
          let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.touchEnabled = CC, this.buttons = (0, QC.n)(this, bC, [0, 1, 2]), this.angularSensibility = ((0, QC.n)(this, nC), (0, QC.n)(this, fC, 2e3)), this._pointerInput = (0, QC.n)(this, oC), this._previousPosition = null, this.onPointerMovedObservable = new WC.d, this._allowCameraRotation = !0, this._currentActiveButton = -1, this._activePointerId = -1, this._pointerConditions = {}
        }
        attachControl(CC) {
          CC = qC.g.BackCompatCameraNoPreventDefault(arguments);
          const zC = this.camera.mg(),
            ZC = zC.getInputElement();
          this._pointerInput || (this._pointerInput = QC => {
            const wC = QC.event,
              bC = "touch" === wC.pointerType;
            if (!this.touchEnabled && bC) return;
            if (QC.type !== NC.b.POINTERMOVE && -1 === this.buttons.indexOf(wC.button)) return;
            const nC = wC.target;
            if (QC.type === NC.b.POINTERDOWN) {
              if (bC && -1 !== this._activePointerId || !bC && -1 !== this._currentActiveButton) return;
              this._activePointerId = wC.pointerId;
              try {
                nC?.setPointerCapture(wC.pointerId)
              } catch (fC) {} - 1 === this._currentActiveButton && (this._currentActiveButton = wC.button), this._previousPosition = {
                x: wC.clientX,
                y: wC.clientY
              }, CC || (wC.preventDefault(), ZC && ZC.focus()), zC.isPointerLock && this._onMouseMove && this._onMouseMove(QC.event)
            } else if (QC.type === NC.b.POINTERUP) {
              if (bC && this._activePointerId !== wC.pointerId || !bC && this._currentActiveButton !== wC.button) return;
              try {
                nC?.releasePointerCapture(wC.pointerId)
              } catch (fC) {}
              this._currentActiveButton = -1, this._previousPosition = null, CC || wC.preventDefault(), this._activePointerId = -1
            } else if (QC.type === NC.b.POINTERMOVE && (this._activePointerId === wC.pointerId || !bC))
              if (zC.isPointerLock && this._onMouseMove) this._onMouseMove(QC.event);
              else if (this._previousPosition) {
              const zC = this.camera._calculateHandednessMultiplier(),
                ZC = (wC.clientX - this._previousPosition.x) * zC,
                QC = (wC.clientY - this._previousPosition.y) * zC;
              this._allowCameraRotation && this._applyPointerRotation(ZC, QC), this.onPointerMovedObservable.notifyObservers({
                offsetX: ZC,
                offsetY: QC
              }), this._previousPosition = {
                x: wC.clientX,
                y: wC.clientY
              }, CC || wC.preventDefault()
            }
          }), this._onMouseMove = ZC => {
            if (!zC.isPointerLock) return;
            const QC = this.camera._calculateHandednessMultiplier();
            this._applyPointerRotation(ZC.movementX * QC, ZC.movementY * QC), this._previousPosition = null, CC || ZC.preventDefault()
          }, this._observer = this.camera.Km()._inputManager._addCameraPointerObserver(this._pointerInput, NC.b.POINTERDOWN | NC.b.POINTERUP | NC.b.POINTERMOVE), ZC && (this._contextMenuBind = CC => this.onContextMenu(CC), ZC.addEventListener("contextmenu", this._contextMenuBind, !1))
        }
        onContextMenu(CC) {
          CC.preventDefault()
        }
        detachControl() {
          if (this._observer) {
            if (this.camera.Km()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
              const CC = this.camera.mg().getInputElement();
              CC && CC.removeEventListener("contextmenu", this._contextMenuBind)
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
        const qC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zC = [(0, wC.M)()], ZC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
          kind: "field",
          name: "buttons",
          static: !1,
          private: !1,
          access: {
            has: CC => "buttons" in CC,
            get: CC => CC.buttons,
            set: (CC, zC) => {
              CC.buttons = zC
            }
          },
          metadata: qC
        }, bC, nC), (0, QC.j)(null, null, ZC, {
          kind: "field",
          name: "angularSensibility",
          static: !1,
          private: !1,
          access: {
            has: CC => "angularSensibility" in CC,
            get: CC => CC.angularSensibility,
            set: (CC, zC) => {
              CC.angularSensibility = zC
            }
          },
          metadata: qC
        }, fC, oC), qC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: qC
        })
      })(), CC
    })();
    fC.e.FreeCameraMouseInput = MC;
    var gC = ZC(40010);
    let SC = (() => {
      var CC;
      let zC, ZC, bC, nC = [],
        fC = [],
        oC = [],
        FC = [],
        MC = [],
        SC = [];
      return CC = class {
        constructor() {
          this.wheelPrecisionX = (0, QC.n)(this, nC, 3), this.wheelPrecisionY = ((0, QC.n)(this, fC), (0, QC.n)(this, oC, 3)), this.wheelPrecisionZ = ((0, QC.n)(this, FC), (0, QC.n)(this, MC, 3)), this.onChangedObservable = ((0, QC.n)(this, SC), new WC.d), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0, this._ffMultiplier = 12, this._normalize = 120
        }
        attachControl(CC) {
          CC = qC.g.BackCompatCameraNoPreventDefault(arguments), this._wheel = zC => {
            if (zC.type !== NC.b.POINTERWHEEL) return;
            const ZC = zC.event,
              QC = ZC.deltaMode === gC.d.DOM_DELTA_LINE ? this._ffMultiplier : 1;
            this._wheelDeltaX += this.wheelPrecisionX * QC * ZC.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * QC * ZC.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * QC * ZC.deltaZ / this._normalize, ZC.preventDefault && (CC || ZC.preventDefault())
          }, this._observer = this.camera.Km()._inputManager._addCameraPointerObserver(this._wheel, NC.b.POINTERWHEEL)
        }
        detachControl() {
          this._observer && (this.camera.Km()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
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
        const qC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zC = [(0, wC.M)()], ZC = [(0, wC.M)()], bC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
          kind: "field",
          name: "wheelPrecisionX",
          static: !1,
          private: !1,
          access: {
            has: CC => "wheelPrecisionX" in CC,
            get: CC => CC.wheelPrecisionX,
            set: (CC, zC) => {
              CC.wheelPrecisionX = zC
            }
          },
          metadata: qC
        }, nC, fC), (0, QC.j)(null, null, ZC, {
          kind: "field",
          name: "wheelPrecisionY",
          static: !1,
          private: !1,
          access: {
            has: CC => "wheelPrecisionY" in CC,
            get: CC => CC.wheelPrecisionY,
            set: (CC, zC) => {
              CC.wheelPrecisionY = zC
            }
          },
          metadata: qC
        }, oC, FC), (0, QC.j)(null, null, bC, {
          kind: "field",
          name: "wheelPrecisionZ",
          static: !1,
          private: !1,
          access: {
            has: CC => "wheelPrecisionZ" in CC,
            get: CC => CC.wheelPrecisionZ,
            set: (CC, zC) => {
              CC.wheelPrecisionZ = zC
            }
          },
          metadata: qC
        }, MC, SC), qC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: qC
        })
      })(), CC
    })();
    var pC;
    ! function(CC) {
      CC[CC.MoveRelative = 0] = "MoveRelative", CC[CC.RotateRelative = 1] = "RotateRelative", CC[CC.MoveScene = 2] = "MoveScene"
    }(pC || (pC = {}));
    let PC = (() => {
      var CC;
      let zC, ZC, nC, fC, oC, qC, FC, WC, NC, MC = SC,
        gC = [];
      return CC = class extends MC {
        constructor() {
          super(...arguments), this.camera = (0, QC.n)(this, gC), this._moveRelative = bC.r.Zero(), this._rotateRelative = bC.r.Zero(), this._moveScene = bC.r.Zero(), this._wheelXAction = pC.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = pC.MoveRelative, this._wheelYActionCoordinate = 2, this._wheelZAction = null, this._wheelZActionCoordinate = null
        }
        getClassName() {
          return "FreeCameraMouseWheelInput"
        }
        set wheelXMoveRelative(CC) {
          null === CC && this._wheelXAction !== pC.MoveRelative || (this._wheelXAction = pC.MoveRelative, this._wheelXActionCoordinate = CC)
        }
        get wheelXMoveRelative() {
          return this._wheelXAction !== pC.MoveRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveRelative(CC) {
          null === CC && this._wheelYAction !== pC.MoveRelative || (this._wheelYAction = pC.MoveRelative, this._wheelYActionCoordinate = CC)
        }
        get wheelYMoveRelative() {
          return this._wheelYAction !== pC.MoveRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveRelative(CC) {
          null === CC && this._wheelZAction !== pC.MoveRelative || (this._wheelZAction = pC.MoveRelative, this._wheelZActionCoordinate = CC)
        }
        get wheelZMoveRelative() {
          return this._wheelZAction !== pC.MoveRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXRotateRelative(CC) {
          null === CC && this._wheelXAction !== pC.RotateRelative || (this._wheelXAction = pC.RotateRelative, this._wheelXActionCoordinate = CC)
        }
        get wheelXRotateRelative() {
          return this._wheelXAction !== pC.RotateRelative ? null : this._wheelXActionCoordinate
        }
        set wheelYRotateRelative(CC) {
          null === CC && this._wheelYAction !== pC.RotateRelative || (this._wheelYAction = pC.RotateRelative, this._wheelYActionCoordinate = CC)
        }
        get wheelYRotateRelative() {
          return this._wheelYAction !== pC.RotateRelative ? null : this._wheelYActionCoordinate
        }
        set wheelZRotateRelative(CC) {
          null === CC && this._wheelZAction !== pC.RotateRelative || (this._wheelZAction = pC.RotateRelative, this._wheelZActionCoordinate = CC)
        }
        get wheelZRotateRelative() {
          return this._wheelZAction !== pC.RotateRelative ? null : this._wheelZActionCoordinate
        }
        set wheelXMoveScene(CC) {
          null === CC && this._wheelXAction !== pC.MoveScene || (this._wheelXAction = pC.MoveScene, this._wheelXActionCoordinate = CC)
        }
        get wheelXMoveScene() {
          return this._wheelXAction !== pC.MoveScene ? null : this._wheelXActionCoordinate
        }
        set wheelYMoveScene(CC) {
          null === CC && this._wheelYAction !== pC.MoveScene || (this._wheelYAction = pC.MoveScene, this._wheelYActionCoordinate = CC)
        }
        get wheelYMoveScene() {
          return this._wheelYAction !== pC.MoveScene ? null : this._wheelYActionCoordinate
        }
        set wheelZMoveScene(CC) {
          null === CC && this._wheelZAction !== pC.MoveScene || (this._wheelZAction = pC.MoveScene, this._wheelZActionCoordinate = CC)
        }
        get wheelZMoveScene() {
          return this._wheelZAction !== pC.MoveScene ? null : this._wheelZActionCoordinate
        }
        checkInputs() {
          if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
          this._moveRelative.Q_(0), this._rotateRelative.Q_(0), this._moveScene.Q_(0), this._updateCamera(), this.camera.Km().useRightHandedSystem && (this._moveRelative.z *= -1);
          const CC = bC.b.Zero();
          this.camera.getViewMatrix().invertToRef(CC);
          const zC = bC.r.Zero();
          bC.r.TransformNormalToRef(this._moveRelative, CC, zC), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(zC), this.camera.cameraDirection.addInPlace(this._moveScene), super.checkInputs()
        }
        _updateCamera() {
          this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._wheelZActionCoordinate)
        }
        _updateCameraProperty(CC, zC, ZC) {
          if (0 === CC) return;
          if (null === zC || null === ZC) return;
          let QC = null;
          switch (zC) {
            case pC.MoveRelative:
              QC = this._moveRelative;
              break;
            case pC.RotateRelative:
              QC = this._rotateRelative;
              break;
            case pC.MoveScene:
              QC = this._moveScene
          }
          switch (ZC) {
            case 0:
              QC.set(CC, 0, 0);
              break;
            case 1:
              QC.set(0, CC, 0);
              break;
            case 2:
              QC.set(0, 0, CC)
          }
        }
      }, (() => {
        const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(MC[Symbol.metadata] ?? null) : void 0;
        zC = [(0, wC.M)()], ZC = [(0, wC.M)()], nC = [(0, wC.M)()], fC = [(0, wC.M)()], oC = [(0, wC.M)()], qC = [(0, wC.M)()], FC = [(0, wC.M)()], WC = [(0, wC.M)()], NC = [(0, wC.M)()], (0, QC.j)(CC, null, zC, {
          kind: "setter",
          name: "wheelXMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: CC => "wheelXMoveRelative" in CC,
            set: (CC, zC) => {
              CC.wheelXMoveRelative = zC
            }
          },
          metadata: bC
        }, null, gC), (0, QC.j)(CC, null, ZC, {
          kind: "setter",
          name: "wheelYMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: CC => "wheelYMoveRelative" in CC,
            set: (CC, zC) => {
              CC.wheelYMoveRelative = zC
            }
          },
          metadata: bC
        }, null, gC), (0, QC.j)(CC, null, nC, {
          kind: "setter",
          name: "wheelZMoveRelative",
          static: !1,
          private: !1,
          access: {
            has: CC => "wheelZMoveRelative" in CC,
            set: (CC, zC) => {
              CC.wheelZMoveRelative = zC
            }
          },
          metadata: bC
        }, null, gC), (0, QC.j)(CC, null, fC, {
          kind: "setter",
          name: "wheelXRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: CC => "wheelXRotateRelative" in CC,
            set: (CC, zC) => {
              CC.wheelXRotateRelative = zC
            }
          },
          metadata: bC
        }, null, gC), (0, QC.j)(CC, null, oC, {
          kind: "setter",
          name: "wheelYRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: CC => "wheelYRotateRelative" in CC,
            set: (CC, zC) => {
              CC.wheelYRotateRelative = zC
            }
          },
          metadata: bC
        }, null, gC), (0, QC.j)(CC, null, qC, {
          kind: "setter",
          name: "wheelZRotateRelative",
          static: !1,
          private: !1,
          access: {
            has: CC => "wheelZRotateRelative" in CC,
            set: (CC, zC) => {
              CC.wheelZRotateRelative = zC
            }
          },
          metadata: bC
        }, null, gC), (0, QC.j)(CC, null, FC, {
          kind: "setter",
          name: "wheelXMoveScene",
          static: !1,
          private: !1,
          access: {
            has: CC => "wheelXMoveScene" in CC,
            set: (CC, zC) => {
              CC.wheelXMoveScene = zC
            }
          },
          metadata: bC
        }, null, gC), (0, QC.j)(CC, null, WC, {
          kind: "setter",
          name: "wheelYMoveScene",
          static: !1,
          private: !1,
          access: {
            has: CC => "wheelYMoveScene" in CC,
            set: (CC, zC) => {
              CC.wheelYMoveScene = zC
            }
          },
          metadata: bC
        }, null, gC), (0, QC.j)(CC, null, NC, {
          kind: "setter",
          name: "wheelZMoveScene",
          static: !1,
          private: !1,
          access: {
            has: CC => "wheelZMoveScene" in CC,
            set: (CC, zC) => {
              CC.wheelZMoveScene = zC
            }
          },
          metadata: bC
        }, null, gC), bC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bC
        })
      })(), CC
    })();
    fC.e.FreeCameraMouseWheelInput = PC;
    let GC = (() => {
      var CC;
      let zC, ZC, nC = [],
        fC = [],
        oC = [],
        FC = [];
      return CC = class {
        constructor() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.allowMouse = CC, this.touchAngularSensibility = (0, QC.n)(this, nC, 2e5), this.touchMoveSensibility = ((0, QC.n)(this, fC), (0, QC.n)(this, oC, 250)), this.singleFingerRotate = ((0, QC.n)(this, FC), !1), this._offsetX = null, this._offsetY = null, this._pointerPressed = new Array, this._isSafari = qC.g.IsSafari()
        }
        attachControl(CC) {
          CC = qC.g.BackCompatCameraNoPreventDefault(arguments);
          let zC = null;
          if (void 0 === this._pointerInput && (this._onLostFocus = () => {
              this._offsetX = null, this._offsetY = null
            }, this._pointerInput = ZC => {
              const QC = ZC.event,
                wC = "mouse" === QC.pointerType || this._isSafari && "undefined" === typeof QC.pointerType;
              if (this.allowMouse || !wC)
                if (ZC.type === NC.b.POINTERDOWN) {
                  if (CC || QC.preventDefault(), this._pointerPressed.push(QC.pointerId), 1 !== this._pointerPressed.length) return;
                  zC = {
                    x: QC.clientX,
                    y: QC.clientY
                  }
                } else if (ZC.type === NC.b.POINTERUP) {
                CC || QC.preventDefault();
                const ZC = this._pointerPressed.indexOf(QC.pointerId);
                if (-1 === ZC) return;
                if (this._pointerPressed.splice(ZC, 1), 0 != ZC) return;
                zC = null, this._offsetX = null, this._offsetY = null
              } else if (ZC.type === NC.b.POINTERMOVE) {
                if (CC || QC.preventDefault(), !zC) return;
                if (0 != this._pointerPressed.indexOf(QC.pointerId)) return;
                this._offsetX = QC.clientX - zC.x, this._offsetY = -(QC.clientY - zC.y)
              }
            }), this._observer = this.camera.Km()._inputManager._addCameraPointerObserver(this._pointerInput, NC.b.POINTERDOWN | NC.b.POINTERUP | NC.b.POINTERMOVE), this._onLostFocus) {
            const CC = this.camera.mg().getInputElement();
            CC && CC.addEventListener("blur", this._onLostFocus)
          }
        }
        detachControl() {
          if (this._pointerInput) {
            if (this._observer && (this.camera.Km()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
              const CC = this.camera.mg().getInputElement();
              CC && CC.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
            }
            this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
          }
        }
        checkInputs() {
          if (null === this._offsetX || null === this._offsetY) return;
          if (0 === this._offsetX && 0 === this._offsetY) return;
          const CC = this.camera,
            zC = CC.movement.input,
            ZC = zC.getEntry("touch", "rotate"),
            QC = zC.getEntry("touch", "translate"),
            wC = CC._calculateHandednessMultiplier(),
            nC = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
          if (ZC) {
            const zC = ZC.sensitivity ?? 1 / this.touchAngularSensibility;
            CC.cameraRotation.y = this._offsetX * wC * zC, nC && (CC.cameraRotation.x = -this._offsetY * wC * zC)
          }
          if (!nC && QC) {
            const zC = CC._computeLocalCameraSpeed(),
              ZC = QC.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
              wC = bC.j.Eg[0];
            wC.L_(0, 0, zC * this._offsetY * ZC), bC.b.RotationYawPitchRollToRef(CC.rotation.y, CC.rotation.x, 0, CC._cameraRotationMatrix), bC.r.TransformCoordinatesToRef(wC, CC._cameraRotationMatrix, wC), CC.cameraDirection.addInPlace(wC)
          }
        }
        getClassName() {
          return "FreeCameraTouchInput"
        }
        getSimpleName() {
          return "touch"
        }
      }, (() => {
        const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zC = [(0, wC.M)()], ZC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
          kind: "field",
          name: "touchAngularSensibility",
          static: !1,
          private: !1,
          access: {
            has: CC => "touchAngularSensibility" in CC,
            get: CC => CC.touchAngularSensibility,
            set: (CC, zC) => {
              CC.touchAngularSensibility = zC
            }
          },
          metadata: bC
        }, nC, fC), (0, QC.j)(null, null, ZC, {
          kind: "field",
          name: "touchMoveSensibility",
          static: !1,
          private: !1,
          access: {
            has: CC => "touchMoveSensibility" in CC,
            get: CC => CC.touchMoveSensibility,
            set: (CC, zC) => {
              CC.touchMoveSensibility = zC
            }
          },
          metadata: bC
        }, oC, FC), bC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bC
        })
      })(), CC
    })();
    fC.e.FreeCameraTouchInput = GC;
    var RC, AC, xC, JC = ZC(39694);
    class IC extends fC.i {
      constructor(CC) {
        super(CC), this._mouseInput = null, this._mouseWheelInput = null
      }
      addKeyboard() {
        return this.add(new FC), this
      }
      addMouse() {
        let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._mouseInput || (this._mouseInput = new MC(CC), this.add(this._mouseInput)), this
      }
      removeMouse() {
        return this._mouseInput && this.remove(this._mouseInput), this
      }
      addMouseWheel() {
        return this._mouseWheelInput || (this._mouseWheelInput = new PC, this.add(this._mouseWheelInput)), this
      }
      removeMouseWheel() {
        return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
      }
      addTouch() {
        return this.add(new GC), this
      }
      clear() {
        super.clear(), this._mouseInput = null
      }
    }(RC = IC.prototype).addDeviceOrientation ?? (RC.addDeviceOrientation = (0, JC.f)("FreeCameraInputsManager", "addDeviceOrientation")), (AC = IC.prototype).addVirtualJoystick ?? (AC.addVirtualJoystick = (0, JC.f)("FreeCameraInputsManager", "addVirtualJoystick")), (xC = IC.prototype).addGamepad ?? (xC.addGamepad = (0, JC.f)("FreeCameraInputsManager", "addGamepad"));
    var iC = ZC(39721),
      vC = ZC(37002);
    let eC = (() => {
        var CC;
        let zC, ZC, fC, oC, FC = nC.h,
          WC = [],
          NC = [],
          MC = [],
          gC = [],
          SC = [],
          pC = [],
          PC = [],
          GC = [];
        return CC = class extends FC {
          get angularSensibility() {
            const CC = this.inputs.attached.mouse;
            return CC ? CC.angularSensibility : 0
          }
          set angularSensibility(CC) {
            const zC = this.inputs.attached.mouse;
            zC && (zC.angularSensibility = CC)
          }
          get keysUp() {
            const CC = this.inputs.attached.keyboard;
            return CC ? CC.keysUp : []
          }
          set keysUp(CC) {
            const zC = this.inputs.attached.keyboard;
            zC && (zC.keysUp = CC)
          }
          get keysUpward() {
            const CC = this.inputs.attached.keyboard;
            return CC ? CC.keysUpward : []
          }
          set keysUpward(CC) {
            const zC = this.inputs.attached.keyboard;
            zC && (zC.keysUpward = CC)
          }
          get keysDown() {
            const CC = this.inputs.attached.keyboard;
            return CC ? CC.keysDown : []
          }
          set keysDown(CC) {
            const zC = this.inputs.attached.keyboard;
            zC && (zC.keysDown = CC)
          }
          get keysDownward() {
            const CC = this.inputs.attached.keyboard;
            return CC ? CC.keysDownward : []
          }
          set keysDownward(CC) {
            const zC = this.inputs.attached.keyboard;
            zC && (zC.keysDownward = CC)
          }
          get keysLeft() {
            const CC = this.inputs.attached.keyboard;
            return CC ? CC.keysLeft : []
          }
          set keysLeft(CC) {
            const zC = this.inputs.attached.keyboard;
            zC && (zC.keysLeft = CC)
          }
          get keysRight() {
            const CC = this.inputs.attached.keyboard;
            return CC ? CC.keysRight : []
          }
          set keysRight(CC) {
            const zC = this.inputs.attached.keyboard;
            zC && (zC.keysRight = CC)
          }
          get keysRotateLeft() {
            const CC = this.inputs.attached.keyboard;
            return CC ? CC.keysRotateLeft : []
          }
          set keysRotateLeft(CC) {
            const zC = this.inputs.attached.keyboard;
            zC && (zC.keysRotateLeft = CC)
          }
          get keysRotateRight() {
            const CC = this.inputs.attached.keyboard;
            return CC ? CC.keysRotateRight : []
          }
          set keysRotateRight(CC) {
            const zC = this.inputs.attached.keyboard;
            zC && (zC.keysRotateRight = CC)
          }
          get keysRotateUp() {
            const CC = this.inputs.attached.keyboard;
            return CC ? CC.keysRotateUp : []
          }
          set keysRotateUp(CC) {
            const zC = this.inputs.attached.keyboard;
            zC && (zC.keysRotateUp = CC)
          }
          get keysRotateDown() {
            const CC = this.inputs.attached.keyboard;
            return CC ? CC.keysRotateDown : []
          }
          set keysRotateDown(CC) {
            const zC = this.inputs.attached.keyboard;
            zC && (zC.keysRotateDown = CC)
          }
          constructor(CC, zC, ZC) {
            var wC;
            super(CC, zC, ZC, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), wC = this, this.ellipsoid = (0, QC.n)(this, WC, new bC.r(.5, 1, .5)), this.ellipsoidOffset = ((0, QC.n)(this, NC), (0, QC.n)(this, MC, new bC.r(0, 0, 0))), this.checkCollisions = ((0, QC.n)(this, gC), (0, QC.n)(this, SC, !1)), this.applyGravity = ((0, QC.n)(this, pC), (0, QC.n)(this, PC, !1)), this.inputs = (0, QC.n)(this, GC), this._needMoveForGravity = !1, this._oldPosition = bC.r.Zero(), this._diffPosition = bC.r.Zero(), this._newPosition = bC.r.Zero(), this._collisionMask = -1, this._onCollisionPositionChange = function(CC, zC) {
              let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              wC._newPosition.Av(zC), wC._newPosition.subtractToRef(wC._oldPosition, wC._diffPosition), wC._diffPosition.length() > iC.b.CollisionsEpsilon && (wC.position.addToRef(wC._diffPosition, wC._deferredPositionUpdate), wC._deferOnly ? wC._deferredUpdated = !0 : wC.position.Av(wC._deferredPositionUpdate), wC.GN && ZC && wC.GN(ZC))
            }, this.inputs = new IC(this), this.inputs.addKeyboard().addMouse()
          }
          attachControl(CC, zC) {
            zC = qC.g.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(zC)
          }
          detachControl() {
            this.inputs.detachElement(), this.cameraDirection = new bC.r(0, 0, 0), this.cameraRotation = new bC.n(0, 0)
          }
          get collisionMask() {
            return this._collisionMask
          }
          set collisionMask(CC) {
            this._collisionMask = isNaN(CC) ? -1 : CC
          }
          _collideWithWorld(CC) {
            let zC;
            zC = this.parent ? bC.r.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, zC.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
            const ZC = this.Km().collisionCoordinator;
            this._collider || (this._collider = ZC.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
            let QC = CC;
            this.applyGravity && (QC = CC.add(this.Km().gravity)), ZC.getNewPosition(this._oldPosition, QC, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
          }
          _checkInputs() {
            this._localDirection || (this._localDirection = bC.r.Zero(), this._transformedDirection = bC.r.Zero()), this.inputs.checkInputs(), super._checkInputs()
          }
          set needMoveForGravity(CC) {
            this._needMoveForGravity = CC
          }
          get needMoveForGravity() {
            return this._needMoveForGravity
          }
          _decideIfNeedsToMove() {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            this.checkCollisions && this.Km().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
          }
          dispose() {
            this.inputs.clear(), super.dispose()
          }
          getClassName() {
            return "FreeCamera"
          }
        }, (() => {
          const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(FC[Symbol.metadata] ?? null) : void 0;
          zC = [(0, wC.J)()], ZC = [(0, wC.J)()], fC = [(0, wC.M)()], oC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
            kind: "field",
            name: "ellipsoid",
            static: !1,
            private: !1,
            access: {
              has: CC => "ellipsoid" in CC,
              get: CC => CC.ellipsoid,
              set: (CC, zC) => {
                CC.ellipsoid = zC
              }
            },
            metadata: bC
          }, WC, NC), (0, QC.j)(null, null, ZC, {
            kind: "field",
            name: "ellipsoidOffset",
            static: !1,
            private: !1,
            access: {
              has: CC => "ellipsoidOffset" in CC,
              get: CC => CC.ellipsoidOffset,
              set: (CC, zC) => {
                CC.ellipsoidOffset = zC
              }
            },
            metadata: bC
          }, MC, gC), (0, QC.j)(null, null, fC, {
            kind: "field",
            name: "checkCollisions",
            static: !1,
            private: !1,
            access: {
              has: CC => "checkCollisions" in CC,
              get: CC => CC.checkCollisions,
              set: (CC, zC) => {
                CC.checkCollisions = zC
              }
            },
            metadata: bC
          }, SC, pC), (0, QC.j)(null, null, oC, {
            kind: "field",
            name: "applyGravity",
            static: !1,
            private: !1,
            access: {
              has: CC => "applyGravity" in CC,
              get: CC => CC.applyGravity,
              set: (CC, zC) => {
                CC.applyGravity = zC
              }
            },
            metadata: bC
          }, PC, GC), bC && Object.defineProperty(CC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bC
          })
        })(), CC
      })(),
      hC = !1;
    hC || (hC = !0, (0, vC.d)("BABYLON.FreeCamera", eC))
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);